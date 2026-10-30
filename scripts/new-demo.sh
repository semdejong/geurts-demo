#!/usr/bin/env bash
# Nieuwe Sleads-demo aanmaken vanuit de starter.
#
#   scripts/new-demo.sh <slug> [--deploy] [--private]
#
#   <slug>     korte bedrijfsnaam in kebab-case, bv. "bakkerij-jansen"
#              -> map /workspace/demos/<slug>-demo, repo semdejong/<slug>-demo,
#                 Vercel-project <slug>-demo  (https://<slug>-demo.vercel.app)
#   --deploy   meteen deployen naar Vercel (Hobby-scope, zonder Git-koppeling),
#              Deployment Protection uitzetten zodat de prospect zonder login kan kijken
#   --private  GitHub-repo privé maken (standaard: public; werkt allebei op Hobby)
#
# De slug wordt in content.ts gezet (data-demo van de analytics-tracker). Met --deploy wordt de demo
# na de eerste productie-deploy geregistreerd bij Sleads demo-analytics (POST /api/demos, status
# "gebouwd"); zonder registratie tellen bezoeken niet. Bedrijfsnaam voor de registratie: COMPANY="..."
# (anders afgeleid uit de slug). Sleutel uit /home/box/.secrets/sleads-demo-analytics.env.
set -euo pipefail

GH_OWNER="semdejong"
VERCEL_SCOPE="semdejongs-projects"   # Hobby-scope. NIET het Pro-team "semdejong-s-team" gebruiken.
STARTER_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEMOS_ROOT="${DEMOS_ROOT:-$(dirname "$STARTER_DIR")}"

SLUG="${1:-}"; shift || true
DEPLOY=0; VISIBILITY="--public"
for a in "$@"; do
  case "$a" in
    --deploy) DEPLOY=1 ;;
    --private) VISIBILITY="--private" ;;
    *) echo "Onbekende optie: $a" >&2; exit 1 ;;
  esac
done

if [[ ! "$SLUG" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "Gebruik: $0 <slug> [--deploy] [--private]   (slug: kleine letters, cijfers, streepjes)" >&2
  exit 1
fi
SLUG="${SLUG%-demo}"
NAME="${SLUG}-demo"
TARGET="${DEMOS_ROOT}/${NAME}"
[[ -e "$TARGET" ]] && { echo "Bestaat al: $TARGET" >&2; exit 1; }

echo "→ Starter kopiëren naar $TARGET"
mkdir -p "$TARGET"
tar -C "$STARTER_DIR" --exclude=node_modules --exclude=.next --exclude=.git --exclude=.vercel -cf - . | tar -C "$TARGET" -xf -
cd "$TARGET"
sed -i -E "s/^(  slug: )\"[^\"]*\"/\\1\"${NAME}\"/" content.ts
grep -q "slug: \"${NAME}\"" content.ts || { echo "Slug niet gezet in content.ts" >&2; exit 1; }
node -e 'const f="package.json",p=require("./"+f);p.name=process.argv[1];require("fs").writeFileSync(f,JSON.stringify(p,null,2)+"\n")' "$NAME"

echo "→ npm install + build"
npm install --silent
npm run build >/dev/null

echo "→ Git init + GitHub-repo ${GH_OWNER}/${NAME} (${VISIBILITY#--})"
git init -q -b main
git add -A
git commit -qm "Demo ${NAME} vanuit sleads-demo-starter"
gh repo create "${GH_OWNER}/${NAME}" "$VISIBILITY" --source . --remote origin --push \
  --description "Concept-homepage door Sleads (demo, noindex)"

if [[ "$DEPLOY" == 1 ]]; then
  echo "→ Vercel: project ${NAME} in scope ${VERCEL_SCOPE}"
  vercel link --yes --project "$NAME" --scope "$VERCEL_SCOPE" >/dev/null
  # Bewust GEEN 'vercel git connect': elke push zou dan een deploy kosten (max 4 demo-deploys per dag).
  echo '{"ssoProtection":null,"passwordProtection":null}' | \
    vercel api "/v9/projects/${NAME}" -X PATCH --input - --scope "$VERCEL_SCOPE" --silent
  vercel deploy --prod --yes --scope "$VERCEL_SCOPE"
  echo "→ Check: https://${NAME}.vercel.app"
  curl -sI "https://${NAME}.vercel.app" | grep -iE "^(HTTP|x-robots-tag)" || true

  echo "→ Registreren bij Sleads demo-analytics"
  ENV_FILE="${ANALYTICS_ENV_FILE:-/home/box/.secrets/sleads-demo-analytics.env}"
  if [[ -r "$ENV_FILE" ]]; then
    ( set -a; source "$ENV_FILE"; set +a
      COMPANY_NAME="${COMPANY:-$(echo "$SLUG" | sed -E 's/-/ /g; s/\b(.)/\u\1/g')}"
      BODY=$(node -e 'console.log(JSON.stringify({slug:process.argv[1],company:process.argv[2],demoUrl:process.argv[3]}))' \
        "$NAME" "$COMPANY_NAME" "https://${NAME}.vercel.app")
      CODE=$(curl -s -o /tmp/register-${NAME}.json -w '%{http_code}' -X POST "${ANALYTICS_API_BASE%/}/api/demos" \
        -H "Authorization: Bearer ${ANALYTICS_API_KEY}" -H "Content-Type: application/json" -d "$BODY")
      if [[ "$CODE" == 2* ]]; then echo "  geregistreerd (HTTP $CODE, status gebouwd)"; else echo "  REGISTRATIE MISLUKT (HTTP $CODE): $(cat /tmp/register-${NAME}.json)" >&2; fi )
  else
    echo "  $ENV_FILE ontbreekt: registreer handmatig (POST /api/demos), anders tellen bezoeken niet" >&2
  fi
else
  echo "Klaar. Pas nu content.ts aan, commit + push, en deploy (zie README)."
fi
