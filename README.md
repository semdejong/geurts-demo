# Sleads demo-starter

Herbruikbare starter voor gratis demo-homepages voor prospects met een verouderde website.
Next.js (App Router) + TypeScript + Tailwind v4. Alles wordt gestuurd vanuit **één bestand: `content.ts`**.

Ingebouwd:
- **Nooit indexeren**: `robots: { index: false, follow: false }` in `app/layout.tsx`,
  `X-Robots-Tag: noindex, nofollow` op elke route (`next.config.ts`) en `app/robots.ts` met `Disallow: /`.
- **Badge "Concept door Sleads"** (`components/SleadsBadge.tsx`), klein en vast linksonder, linkt naar https://sleads.nl. Staat ook in de footer.
- Secties: header, hero, diensten, over ons, reviews, contact/CTA, footer (`components/sections/*`).
- Huisstijlkleuren uit `content.ts` worden CSS-variabelen → Tailwind-klassen `bg-brand`, `text-brand-fg`, `bg-accent`, `bg-muted`.

## Nieuwe demo in 5 stappen

1. **Kopiëren + repo maken** (slug = bedrijfsnaam in kebab-case):
   ```bash
   /workspace/demos/_starter/scripts/new-demo.sh bakkerij-jansen            # alleen repo
   /workspace/demos/_starter/scripts/new-demo.sh bakkerij-jansen --deploy   # repo + Vercel in één keer
   ```
   Dit kopieert de starter naar `/workspace/demos/bakkerij-jansen-demo`, zet de package-naam,
   doet `npm install` + build, `git init` en maakt de GitHub-repo `semdejong/bakkerij-jansen-demo`
   (public; `--private` kan ook, beide werken op Vercel Hobby) en pusht.
2. **`content.ts` invullen**: bedrijfsnaam, tagline, kleuren (haal ze van de oude site/het logo),
   diensten, over ons, echte reviews (Google), contactgegevens, openingstijden.
   Logo en foto's in `/public` zetten en de paden aanpassen. Extra secties? Maak een component in `components/sections` en zet hem in `app/page.tsx`.
3. **Controleren**: `npm run dev` (http://localhost:3000), op mobiel formaat checken, dan `npm run build`.
4. **Committen + pushen**: `git add -A && git commit -m "Content <bedrijf>" && git push`.
5. **Deployen op Vercel** als project `<bedrijf>-demo` → URL `https://<bedrijf>-demo.vercel.app`:
   ```bash
   cd /workspace/demos/<bedrijf>-demo
   vercel link --yes --project <bedrijf>-demo --scope semdejongs-projects
   vercel deploy --prod --yes --scope semdejongs-projects
   ```
   Gebruik altijd scope **`semdejongs-projects`** (Hobby, gratis), niet het Pro-team `semdejong-s-team`.

## Deployment Protection uit (anders ziet de prospect een Vercel-login)

Nieuwe Hobby-projecten krijgen standaard "Vercel Authentication" op previews. Zet het uit:
```bash
echo '{"ssoProtection":null,"passwordProtection":null}' | \
  vercel api /v9/projects/<bedrijf>-demo -X PATCH --input - --scope semdejongs-projects
```
(of Dashboard → Project → Settings → Deployment Protection → Vercel Authentication: uit.)

Controle, moet `HTTP/2 200` en `x-robots-tag: noindex, nofollow` tonen:
```bash
curl -sI https://<bedrijf>-demo.vercel.app | grep -iE "^(HTTP|x-robots-tag)"
curl -s https://<bedrijf>-demo.vercel.app/robots.txt   # → Disallow: /
```

## Afspraken
- Badge en noindex **nooit** verwijderen in een demo.
- Geen betaalde Vercel-features, geen custom domains op demo's.
- Laat Sem de demo eerst zien voordat Acquisitie hem naar de prospect stuurt.

## Sleads demo-analytics

- **Tracker**: `app/layout.tsx` zet in de `<head>` het script `https://sleads-demo-analytics.vercel.app/t.js`
  met `data-demo={content.slug}` en `data-endpoint="https://basic-tiger-117.convex.site/track"`. Cookieloos.
- **Slug**: veld `slug` bovenaan `content.ts` (= Vercel-project- en reponaam, eindigt op `-demo`). `new-demo.sh` zet hem.
- **Registreren**: bezoeken tellen alleen voor geregistreerde slugs. `new-demo.sh --deploy` doet na de eerste
  productie-deploy `POST /api/demos` (status `gebouwd`, met `demoUrl`). Handmatig deployen? Dan zelf registreren:
  ```bash
  set -a; source /home/box/.secrets/sleads-demo-analytics.env; set +a   # sleutel nooit printen
  curl -s -X POST "$ANALYTICS_API_BASE/api/demos" -H "Authorization: Bearer $ANALYTICS_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{"slug":"<bedrijf>-demo","company":"<Bedrijf>","demoUrl":"https://<bedrijf>-demo.vercel.app"}'
  ```
  `verstuurd`/`reactie` zet Acquisitie (na de echte mail), niet de bouwer. API-docs: `/workspace/apps/sleads-demo-analytics/README.md`.
- **Attributen**: elke sectie krijgt `data-section="naam"`; offerte-/bestelknoppen krijgen `data-cta="offerte"`.
  `tel:`- en `mailto:`-links tellen vanzelf.
- **QA altijd met `?r=qa`** (of `?r=sem` voor Sem), zodat eigen bezoeken als intern worden gefilterd.
  Let op: headless browsers met "HeadlessChrome" in de user-agent worden als bot genegeerd (204, niets opgeslagen);
  gebruik voor een end-to-end-test een normale Chrome-UA.
- **Opruimen** na 3 weken zonder reactie of opvallend verkeer: zie `/api/cleanup-candidates`.
