"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { content } from "@/content";
import { MaterialMark } from "@/components/profiles";
import { Container } from "@/components/page-hero";

type Audience = "particulier" | "zakelijk";
type Errors = Partial<Record<"naam" | "bedrijf" | "email" | "telefoon" | "bestand" | "privacy", string>>;

const WORK = [
  "Balustrade / hek / trap",
  "Laswerk of reparatie",
  "Draai- of freeswerk",
  "Installatie, kast of afzuiging",
  "Inrichting bedrijfswagen of paardenstal",
  "3D-tekening",
  "Materiaal kopen",
  "Anders",
] as const;

const MATERIALS = ["RVS", "Staal", "Aluminium", "Weet ik niet"] as const;
const PLACE = ["Ja", "Nee", "Weet ik niet"] as const;
const FILE_EXT = ["jpg", "jpeg", "png", "webp", "gif", "heic", "pdf", "dxf", "dwg", "step", "stp"];

const EXAMPLES: Record<Audience, string> = {
  particulier: "Bijvoorbeeld een balkonhek, een trapleuning of de reparatie van een hek.",
  zakelijk: "Bijvoorbeeld een filterkast, een afzuiging of draaiwerk voor een as.",
};

export function OfferteFlow() {
  const { company } = content;
  const [audience, setAudience] = useState<Audience>("particulier");
  const [material, setMaterial] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    const apply = () => {
      if (window.location.hash === "#zakelijk") setAudience("zakelijk");
      if (window.location.hash === "#particulier") setAudience("particulier");
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const naam = String(data.get("naam") ?? "");
    const bedrijf = String(data.get("bedrijf") ?? "");
    const email = String(data.get("email") ?? "");
    const telefoon = String(data.get("telefoon") ?? "");
    const file = form.querySelector<HTMLInputElement>('input[name="bestand"]')?.files?.[0];
    const next: Errors = {};
    if (!naam.trim()) next.naam = "Vul uw naam in.";
    if (audience === "zakelijk" && !bedrijf.trim()) next.bedrijf = "Vul uw bedrijfsnaam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Vul een geldig e-mailadres in.";
    if (telefoon.replace(/\D/g, "").length < 8) next.telefoon = "Vul uw telefoonnummer in.";
    if (file) {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!FILE_EXT.includes(ext)) next.bestand = "Kies een foto, pdf, dxf, dwg of step.";
    }
    if (data.get("privacy") !== "ja") next.privacy = "Vink de privacyverklaring aan.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setDone({
      doelgroep: audience === "zakelijk" ? "Zakelijk" : "Particulier",
      naam: naam.trim(),
      bedrijf: bedrijf.trim(),
      email: email.trim(),
      telefoon: telefoon.trim(),
      plaats: String(data.get("plaats") ?? "").trim(),
      werk: String(data.get("werk") ?? "").trim(),
      materiaal: String(data.get("materiaal") ?? "").trim(),
      afmetingen: String(data.get("afmetingen") ?? "").trim(),
      aantal: String(data.get("aantal") ?? "").trim(),
      plaatsen: String(data.get("plaatsen") ?? "").trim(),
      bestand: file?.name ?? "",
      toelichting: String(data.get("toelichting") ?? "").trim(),
    });
  }

  return (
    <>
      <section data-section="doelgroep" className="border-b-[3px] border-navy">
        <Container className="py-8">
          <fieldset>
            <legend className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">Voor wie is de vraag</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {(["particulier", "zakelijk"] as const).map((value) => (
                <label
                  key={value}
                  className={`flex min-h-11 cursor-pointer items-center gap-3 border-2 border-navy px-3 py-2 ${
                    audience === value ? "bg-navy text-white" : "bg-paper"
                  }`}
                >
                  <input
                    type="radio"
                    name="doelgroep-keuze"
                    value={value}
                    checked={audience === value}
                    onChange={() => setAudience(value)}
                    className={`h-5 w-5 ${audience === value ? "accent-spark" : "accent-navy"}`}
                  />
                  <span className="font-display text-3xl">{value === "particulier" ? "Particulier" : "Zakelijk"}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </Container>
      </section>

      <section data-section="meesturen" className="border-b-[3px] border-navy">
        <Container className="grid gap-8 py-10 md:grid-cols-2">
          <div>
            <h2>Wat u kunt meesturen</h2>
            <ul className="mt-4 max-w-[68ch] border-t-[3px] border-navy">
              {["Een foto of een schets", "Het materiaal, als u dat weet", "De afmetingen", "Het aantal", "Of het geplaatst of gemonteerd moet worden"].map(
                (item) => (
                  <li key={item} className="border-b-2 border-navy py-2">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <p className="max-w-[68ch] md:pt-16">{EXAMPLES[audience]}</p>
        </Container>
      </section>

      <section data-section="materiaalkeuze" className="border-b-[3px] border-navy bg-mist">
        <Container className="py-8">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">Materiaal</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row" role="group" aria-label="Materiaal">
            {(
              [
                ["RVS", "rvs"],
                ["Staal", "staal"],
                ["Aluminium", "alu"],
              ] as const
            ).map(([label, mark]) => (
              <button
                key={label}
                type="button"
                aria-pressed={material === label}
                onClick={() => setMaterial(label)}
                className={`inline-flex min-h-11 items-center gap-3 border-2 border-navy px-3 ${
                  material === label ? "bg-navy text-white" : "bg-paper text-navy"
                }`}
              >
                <MaterialMark material={mark} onNavy={material === label} />
                {label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section data-section="zekerheid" className="border-b-[3px] border-navy">
        <Container className="py-0">
          <div className="grid gap-px border-2 border-navy bg-navy sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Sinds 2005", "Van een schuur van 80 m² naar een werkplaats van meer dan 600 m²."],
              ["VCA", "VCA-gecertificeerd."],
              ["Metaalunie", "Aangesloten bij de Koninklijke Metaalunie."],
              ["Eén dak", "Vanaf idee tot realisatie."],
            ].map(([title, text]) => (
              <div key={title} className="bg-paper px-4 py-5">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">{title}</p>
                <p className="mt-2">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section data-section="formulier">
        <Container className="py-12">
          {done ? (
            <div role="status" className="border-[3px] border-navy p-5">
              <h2 className="text-[2rem]">Uw aanvraag is hier niet verzonden.</h2>
              <p className="mt-4 max-w-[68ch]">
                Dit is een conceptsite. Er gaat geen e-mail weg, het bestand is niet geüpload en er wordt niets opgeslagen.
                Bel{" "}
                <a href={company.phoneTel} data-cta="bellen" className="underline decoration-2 underline-offset-4">
                  {company.phoneDisplay}
                </a>{" "}
                of mail{" "}
                <a href={`mailto:${company.email}`} data-cta="mailen" className="underline decoration-2 underline-offset-4">
                  {company.email}
                </a>
                . Maikel bekijkt uw vraag en neemt contact op.
              </p>
              <dl className="facts mt-6 max-w-3xl">
                {(
                  [
                    ["doelgroep", "Doelgroep"],
                    ["naam", "Naam"],
                    ["bedrijf", "Bedrijf"],
                    ["email", "E-mail"],
                    ["telefoon", "Telefoon"],
                    ["plaats", "Plaats"],
                    ["werk", "Soort werk"],
                    ["materiaal", "Materiaal"],
                    ["afmetingen", "Afmetingen"],
                    ["aantal", "Aantal"],
                    ["plaatsen", "Plaatsen of monteren"],
                    ["bestand", "Bestand"],
                    ["toelichting", "Toelichting"],
                  ] as const
                )
                  .filter(([key]) => done[key])
                  .map(([key, label]) => (
                    <div key={key}>
                      <dt>{label}</dt>
                      <dd>{done[key]}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid max-w-3xl gap-4">
              <input type="hidden" name="doelgroep" value={audience} />
              <label className="grid gap-1" htmlFor="naam">
                <span>Naam (verplicht)</span>
                <input id="naam" name="naam" autoComplete="name" aria-invalid={!!errors.naam} className="field" />
                {errors.naam ? <span className="font-mono text-sm text-navy">{errors.naam}</span> : null}
              </label>
              <label className="grid gap-1" htmlFor="bedrijf">
                <span>Bedrijf {audience === "zakelijk" ? "(verplicht)" : "(niet verplicht)"}</span>
                <input id="bedrijf" name="bedrijf" autoComplete="organization" aria-invalid={!!errors.bedrijf} className="field" />
                {errors.bedrijf ? <span className="font-mono text-sm text-navy">{errors.bedrijf}</span> : null}
              </label>
              <label className="grid gap-1" htmlFor="email">
                <span>E-mail (verplicht)</span>
                <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} className="field" />
                {errors.email ? <span className="font-mono text-sm text-navy">{errors.email}</span> : null}
              </label>
              <label className="grid gap-1" htmlFor="telefoon">
                <span>Telefoon (verplicht)</span>
                <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" aria-invalid={!!errors.telefoon} className="field" />
                {errors.telefoon ? <span className="font-mono text-sm text-navy">{errors.telefoon}</span> : null}
              </label>
              <label className="grid gap-1" htmlFor="plaats">
                <span>Plaats</span>
                <input id="plaats" name="plaats" autoComplete="address-level2" className="field" />
              </label>
              <label className="grid gap-1" htmlFor="werk">
                <span>Soort werk</span>
                <select id="werk" name="werk" className="field" defaultValue="">
                  <option value="">Kies een soort werk</option>
                  {WORK.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1" htmlFor="materiaal">
                <span>Materiaal</span>
                <select
                  id="materiaal"
                  name="materiaal"
                  className="field"
                  value={material}
                  onChange={(event) => setMaterial(event.target.value)}
                >
                  <option value="">Kies een materiaal</option>
                  {MATERIALS.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1" htmlFor="afmetingen">
                <span>Afmetingen</span>
                <input id="afmetingen" name="afmetingen" className="field" />
              </label>
              <label className="grid gap-1" htmlFor="aantal">
                <span>Aantal</span>
                <input id="aantal" name="aantal" className="field" />
              </label>
              <fieldset>
                <legend>Plaatsen of monteren nodig</legend>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  {PLACE.map((item) => (
                    <label key={item} className="flex min-h-11 items-center gap-2 border-2 border-navy px-3">
                      <input type="radio" name="plaatsen" value={item} className="h-5 w-5 accent-navy" />
                      {item}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="grid gap-1" htmlFor="bestand">
                <span>Foto of schets</span>
                <input
                  id="bestand"
                  name="bestand"
                  type="file"
                  accept="image/*,.pdf,.dxf,.dwg,.step,.stp"
                  aria-invalid={!!errors.bestand}
                  className="field py-2"
                />
                <span className="max-w-[68ch] text-[0.95rem]">
                  Foto, pdf, dxf, dwg of step. Op deze conceptsite wordt het bestand niet geüpload.
                </span>
                {errors.bestand ? <span className="font-mono text-sm text-navy">{errors.bestand}</span> : null}
              </label>
              <label className="grid gap-1" htmlFor="toelichting">
                <span>Toelichting</span>
                <textarea id="toelichting" name="toelichting" className="field" placeholder={EXAMPLES[audience]} />
              </label>
              <label className="flex min-h-11 items-start gap-3">
                <input type="checkbox" name="privacy" value="ja" className="mt-1.5 h-5 w-5 accent-navy" />
                <span>
                  Ik heb de{" "}
                  <Link href="/privacy" className="underline decoration-2 underline-offset-4">
                    privacyverklaring
                  </Link>{" "}
                  gelezen en ga ermee akkoord dat u contact met mij opneemt over deze aanvraag.
                  {errors.privacy ? <span className="mt-1 block font-mono text-sm text-navy">{errors.privacy}</span> : null}
                </span>
              </label>
              <button type="submit" data-cta="offerte" className="btn btn-navy w-full sm:w-auto">
                Verstuur uw vraag
              </button>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}
