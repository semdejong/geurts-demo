import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { ContactBlock } from "@/components/contact-block";
import { CtaBand } from "@/components/cta-band";
import { HoursTable } from "@/components/hours";
import { OpenStatus } from "@/components/open-status";
import { Container } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { ProjectRows } from "@/components/project-rows";
import {
  CatalogueLabel,
  MaterialMark,
  Profile,
  ProfileStack,
  WeldBead,
  type ProfileId,
} from "@/components/profiles";
import { beeld, getProject, projects, references } from "@/lib/projects";

const profileIndex: { id: ProfileId; code: string }[] = [
  { id: "koker", code: "KOKER 40×40×3" },
  { id: "buis", code: "BUIS Ø48,3×2,6" },
  { id: "strip", code: "STRIP 50×5" },
  { id: "hoek", code: "HOEK 40×40×4" },
  { id: "u", code: "U 80×45" },
  { id: "plaat", code: "PLAAT 100×6" },
];

const particulierVoorbeelden = [
  "balkonhekken-en-leuningen",
  "frans-balkonhek",
  "balustrade-met-rvs-kabel",
  "trap-balustrade-met-rvs-leuning",
  "rvs-tuintafel",
];

const zakelijkVoorbeelden = [
  "filterinstallatie-vdl",
  "filterkast-zinkbad-nedcoat",
  "afzuigingsunit",
  "openluchttheater-eibergen",
  "rijhal-leusink",
  "bedrijfswageninrichting",
];

const verder = [
  "Boren",
  "Zagen",
  "Snijden",
  "Kanten",
  "Knippen",
  "Galvaniseren, spuiten en poedercoaten",
  "Plaatsen, monteren en inbedrijfstellen",
];

const certificaten = [
  ["VCA", "Wij zijn VCA-gecertificeerd."],
  ["NEN 818", "Keuren van hijs- en hefmiddelen."],
  ["NEN 3140", "Keuren van elektrische arbeidsmiddelen."],
  ["NEN 2484", "Keuren van ladders, trappen en rolsteigers."],
];

function ExampleList({ slugs }: { slugs: string[] }) {
  return (
    <ul className="mt-6 border-t-2 border-current">
      {slugs.map((slug) => {
        const project = getProject(slug);
        if (!project) return null;
        return (
          <li key={slug} className="border-b-2 border-current">
            <Link href={`/projecten/${slug}`} className="flex min-h-11 items-center">
              {project.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function HomePage() {
  const { company } = content;
  const lassen = beeld("/img/werkplaats/lassen.jpg");
  const draai = beeld("/img/werkplaats/draaibank.jpg");
  const frees = beeld("/img/werkplaats/freesbank.jpg");
  const tekenen = beeld("/img/werkplaats/tekenen.jpg");
  const zaag = beeld("/img/werkplaats/zaag-en-profielen.jpg");
  const gebouw = beeld("/img/tekenen/3d-gebouw.jpg");
  const trap = beeld("/img/tekenen/3d-wenteltrap.jpg");
  const pand = beeld("/img/werkplaats/pand-bussen.jpg");
  const team = beeld("/img/werkplaats/team-voor-pand.jpg");

  return (
    <>
      <section data-section="hero" className="relative overflow-hidden border-b-[3px] border-navy">
        <p
          aria-hidden
          className="pointer-events-none absolute -top-8 -left-[0.28em] z-0 select-none font-display text-[42vw] leading-[0.8] text-steel md:-top-14 md:text-[22rem]"
          style={{ color: "#CBCCC2" }}
        >
          MG
        </p>
        <Container className="relative z-10 grid items-start gap-8 py-8 md:py-14 lg:grid-cols-2">
          <div>
            <CatalogueLabel id="koker" code="KOKER 40×40×3 · RVS" />
            <h1 className="mt-4 max-w-[16em]">
              Lassen, draaien en frezen in RVS, staal en aluminium. In Eibergen, sinds 2005.
            </h1>
            <p className="mt-5 max-w-[68ch]">Vanaf idee tot realisatie, voor particulieren en bedrijven.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={company.phoneTel} data-cta="bellen" className="btn btn-navy">
                Bel {company.phoneDisplay}
              </a>
              <Link href="/offerte" data-cta="offerte" className="btn btn-line">
                Stuur uw vraag of schets
              </Link>
            </div>
            <div className="mt-5">
              <OpenStatus />
            </div>
            <ul className="mt-8 flex flex-col gap-2">
              {(
                [
                  ["RVS", "rvs"],
                  ["STAAL", "staal"],
                  ["ALU", "alu"],
                ] as const
              ).map(([label, mark]) => (
                <li key={label} className="flex items-center gap-3 font-display text-4xl leading-none text-navy md:text-5xl">
                  <MaterialMark material={mark} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="cut-reveal relative aspect-[3/2] w-full overflow-hidden border-[3px] border-navy bg-mist">
            <Image
              src={lassen.src}
              alt={lassen.alt}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="photo-grade object-cover"
            />
          </div>
        </Container>
      </section>

      <section data-section="profielindex" className="border-b-[3px] border-navy bg-mist" aria-label="Profielen">
        <Container className="py-2">
          <ul className="grid grid-cols-1 md:grid-cols-6">
            {profileIndex.map((item, index) => (
              <li
                key={item.code}
                className="bar-in flex items-center gap-3 border-b-2 border-navy py-3 md:border-b-0 md:border-l-2 md:px-3 md:first:border-l-0"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <Profile
                  id={item.id}
                  className={item.id === "plaat" || item.id === "strip" ? "h-auto w-14 shrink-0 text-navy" : "h-8 w-auto shrink-0 text-navy"}
                />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-navy">{item.code}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section data-section="paden" className="grid border-b-[3px] border-navy lg:grid-cols-2">
        <article className="border-b-[3px] border-navy px-5 py-10 lg:border-r-[3px] lg:border-b-0">
          <div className="mx-auto max-w-[520px]">
            <CatalogueLabel id="hoek" code="HOEK 40×40×4 · THUIS" />
            <h2 className="mt-4">Particulier</h2>
            <p className="mt-4 max-w-[68ch]">
              Een balustrade, een hek, een trap, een reparatie of een tuintafel. U kunt ook materiaal komen halen.
            </p>
            <ExampleList slugs={particulierVoorbeelden} />
            <Link href="/particulier" className="btn btn-navy mt-6">
              Werk voor thuis
            </Link>
          </div>
        </article>
        <article className="on-navy bg-navy px-5 py-10 lg:col-start-2 lg:row-start-1">
          <div className="mx-auto max-w-[520px]">
            <CatalogueLabel id="u" code="U 80×45 · BEDRIJF" inverse />
            <h2 className="mt-4">Zakelijk</h2>
            <p className="mt-4 max-w-[68ch]">
              Installaties, filterkasten, afzuiging, constructies en bedrijfswageninrichting. Draai- en freeswerk hoort erbij.
            </p>
            <ExampleList slugs={zakelijkVoorbeelden} />
            <Link href="/zakelijk" className="btn btn-yellow mt-6">
              Werk voor bedrijven
            </Link>
          </div>
        </article>
        <div className="bg-mist px-5 py-5 lg:col-span-2">
          <WeldBead />
          <p className="mt-2 text-center font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">
            TIG-lasnaad · vanaf idee tot realisatie
          </p>
        </div>
      </section>

      <section data-section="werkzaamheden">
        <Container className="py-14">
          <CatalogueLabel id="las" code="HOEK 40×40×4 · LASNAAD" />
          <h2 className="mt-4">Werkzaamheden</h2>
          <div className="mt-8 border-t-[3px] border-navy">
            <article className="grid gap-6 border-b-[3px] border-navy py-8 lg:grid-cols-2">
              <div>
                <Profile id="las" className="h-16 w-auto text-navy" />
                <h3 className="mt-4">Lassen</h3>
                <p className="mt-3 max-w-[68ch]">
                  TIG-lassen, MIG/MAG-lassen en elektrode-lassen. In roestvast staal, aluminium, staal, gietijzer en gietaluminium.
                </p>
                <Link href="/lassen" className="mt-4 inline-flex min-h-11 items-center underline decoration-2 underline-offset-4">
                  Meer over lassen
                </Link>
              </div>
              <Photo src={lassen.src} alt={lassen.alt} w={lassen.w} h={lassen.h} className="border-[3px] border-navy" />
            </article>
            <article className="grid gap-6 border-b-[3px] border-navy py-8 lg:grid-cols-2">
              <div>
                <div className="flex items-end gap-4">
                  <Profile id="buis" className="h-16 w-auto text-navy" />
                  <Profile id="as" className="h-12 w-auto text-navy" />
                </div>
                <h3 className="mt-4">Draaien en frezen</h3>
                <p className="mt-3 max-w-[68ch]">
                  Draai- en freeswerk in verschillende soorten metalen en legeringen. Draadsnijden, spiebaan brootsen, bussen en assen draaien, boren en kotteren.
                </p>
                <Link href="/draaien-frezen" className="mt-4 inline-flex min-h-11 items-center underline decoration-2 underline-offset-4">
                  Meer over draaien en frezen
                </Link>
              </div>
              <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)] gap-3">
                <Photo src={draai.src} alt={draai.alt} w={draai.w} h={draai.h} className="border-[3px] border-navy" />
                <Photo src={frees.src} alt={frees.alt} w={frees.w} h={frees.h} className="border-[3px] border-navy object-cover" />
              </div>
            </article>
            <article className="grid gap-6 border-b-[3px] border-navy py-8 lg:grid-cols-2">
              <div>
                <Profile id="iso" className="h-16 w-auto text-navy" />
                <h3 className="mt-4">3D tekenen</h3>
                <p className="mt-3 max-w-[68ch]">
                  Een idee begint op de tekentafel. Samen met u wordt het ontwerp uitvoerig behandeld voordat het in de werkplaats wordt gemaakt.
                </p>
                <Link href="/3d-tekenen" className="mt-4 inline-flex min-h-11 items-center underline decoration-2 underline-offset-4">
                  Meer over 3D tekenen
                </Link>
              </div>
              <Photo src={tekenen.src} alt={tekenen.alt} w={tekenen.w} h={tekenen.h} className="border-[3px] border-navy" />
            </article>
          </div>
          <div className="mt-10" id="en-verder">
            <CatalogueLabel id="strip" code="STRIP 50×5 · EN VERDER" />
            <ul className="mt-4 border-t-[3px] border-navy">
              {verder.map((item) => (
                <li key={item} className="border-b-2 border-navy py-3">
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/werkzaamheden" className="btn btn-line mt-6">
              Alle werkzaamheden
            </Link>
          </div>
        </Container>
      </section>

      <section data-section="materialen">
        <article className="relative border-b-[3px] border-navy bg-mist">
          <div className="absolute inset-y-0 left-0 w-4 bg-steel" aria-hidden />
          <Container className="py-10 pl-8">
            <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">
              <MaterialMark material="rvs" /> RVS
            </p>
            <h2 className="mt-3">Roestvast staal</h2>
            <p className="mt-3 max-w-[68ch]">
              RVS heeft een lange levensduur en is geschikt waar hygiëne belangrijk is. Wij lassen RVS met TIG, MIG/MAG en elektrode.
            </p>
          </Container>
        </article>
        <article className="on-navy relative border-b-[3px] border-navy bg-navy">
          <Container className="py-10">
            <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.16em]">
              <MaterialMark material="staal" onNavy /> Staal
            </p>
            <h2 className="mt-3">Staal</h2>
            <p className="mt-3 max-w-[68ch]">
              Staal is het universele constructiemateriaal. Wij lassen staal met TIG, MIG/MAG en elektrode.
            </p>
          </Container>
        </article>
        <article className="border-b-[3px] border-navy bg-white">
          <Container className="py-10">
            <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">
              <MaterialMark material="alu" /> Aluminium
            </p>
            <h2 className="mt-3">Aluminium</h2>
            <p className="mt-3 max-w-[68ch]">
              Aluminium is lichtgewicht en heeft een relatief hoge sterkte. Aluminium lassen vraagt vakmanschap en speciale lasapparatuur. Wij lassen aluminium met TIG, MIG/MAG en elektrode.
            </p>
          </Container>
        </article>
      </section>

      <section data-section="projecten">
        <Container className="py-14">
          <CatalogueLabel id="hoek" code="HOEK 40×40×4 · PROJECTEN" />
          <h2 className="mt-4">Projecten</h2>
          <p className="mt-4 max-w-[68ch]">
            Van tribunes en een filterinstallatie tot een tuintafel en een rollenhouder. Hetzelfde vak, in dezelfde werkplaats.
          </p>
          <div className="mt-8">
            <ProjectRows projects={projects} />
          </div>
          <Link href="/projecten" className="btn btn-line mt-6">
            Alle projecten
          </Link>
        </Container>
      </section>

      <section data-section="materiaal" className="border-y-[3px] border-navy bg-mist">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[auto_minmax(0,1fr)]">
          <ProfileStack />
          <div>
            <CatalogueLabel code="KOKER · BUIS · STRIP · PLAAT" />
            <h2 className="mt-4">Materiaal halen</h2>
            <p className="mt-4 max-w-[68ch]">
              Kokers, buizen, strippen en plaatmateriaal in RVS, staal en aluminium. Op lengte gezaagd. Kom gerust langs en neem uw materiaal direct mee.
            </p>
            <div className="mt-6 max-w-md">
              <Photo src={zaag.src} alt={zaag.alt} w={zaag.w} h={zaag.h} className="border-[3px] border-navy" />
            </div>
            <div className="mt-6 max-w-xl">
              <HoursTable />
            </div>
            <Link href="/materiaal" className="btn btn-navy mt-6">
              Materiaal en openingstijden
            </Link>
          </div>
        </Container>
      </section>

      <section data-section="realisatie">
        <Container className="py-14">
          <CatalogueLabel id="iso" code="KOKER 40×40×3 · ISOMETRIE" />
          <h2 className="mt-4 max-w-[16ch]">Van idee tot realisatie</h2>
          <ol className="mt-8 border-t-[3px] border-navy">
            <li className="border-b-2 border-navy py-4">
              <h3>Idee en 3D-tekening</h3>
              <p className="mt-2 max-w-[68ch]">
                Een idee begint op de tekentafel. Samen met u wordt het ontwerp uitvoerig behandeld voordat het in de werkplaats wordt gemaakt.
              </p>
            </li>
            <li className="border-b-2 border-navy py-4">
              <h3>Maken in de werkplaats</h3>
              <p className="mt-2 max-w-[68ch]">Lassen, draaien en frezen. Boren, zagen, snijden, kanten en knippen.</p>
            </li>
            <li className="border-b-2 border-navy py-4">
              <h3>Oppervlaktebehandeling</h3>
              <p className="mt-2 max-w-[68ch]">Galvaniseren, spuiten en poedercoaten.</p>
            </li>
            <li className="border-b-2 border-navy py-4">
              <h3>Plaatsen en monteren</h3>
              <p className="mt-2 max-w-[68ch]">Wij plaatsen, monteren en stellen in bedrijf.</p>
            </li>
          </ol>
          <div className="mt-8 flex flex-wrap items-start gap-4">
            <Photo src={gebouw.src} alt={gebouw.alt} w={gebouw.w} h={gebouw.h} className="border-[3px] border-navy" />
            <Photo src={trap.src} alt={trap.alt} w={trap.w} h={trap.h} className="border-[3px] border-navy" />
          </div>
        </Container>
      </section>

      <section data-section="sinds-2005" className="border-t-[3px] border-navy">
        <Container className="grid items-start gap-8 py-14 lg:grid-cols-2">
          <div>
            <CatalogueLabel id="plaat" code="PLAAT 100×6 · SINDS 2005" />
            <h2 className="mt-4">Van schuur naar werkplaats</h2>
            <p className="mt-4 max-w-[68ch]">
              Maikel Geurts begon in 2005 in een schuur van 80 m². Het werk kwam van mond tot mond. Op industrieterrein De Kiefte staat nu een werkplaats van meer dan 600 m².
            </p>
            <Link href="/over-ons" className="mt-5 inline-flex min-h-11 items-center underline decoration-2 underline-offset-4">
              Over ons
            </Link>
          </div>
          <div className="grid gap-3">
            <Photo src={pand.src} alt={pand.alt} w={pand.w} h={pand.h} className="border-[3px] border-navy" />
            <Photo src={team.src} alt={team.alt} w={team.w} h={team.h} className="border-[3px] border-navy" />
          </div>
        </Container>
      </section>

      <section data-section="referenties" className="border-t-[3px] border-navy bg-mist">
        <Container className="py-14">
          <CatalogueLabel id="buis" code="BUIS Ø48,3×2,6 · REFERENTIES" />
          <h2 className="mt-4">Referenties</h2>
          <p className="mt-4 max-w-[68ch]">Bedrijven waarvoor wij hebben gewerkt.</p>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {references.map((name) => (
              <li key={name} className="border-b-2 border-navy py-3 font-display text-2xl leading-none text-navy">
                {name}
              </li>
            ))}
          </ul>
          <Link href="/referenties" className="btn btn-line mt-6">
            Alle referenties
          </Link>
        </Container>
      </section>

      <section data-section="certificeringen" className="border-t-[3px] border-navy">
        <Container className="py-14">
          <CatalogueLabel id="u" code="U 80×45 · KEURING" />
          <h2 className="mt-4">Certificeringen</h2>
          <dl className="facts mt-6 max-w-3xl">
            {certificaten.map(([code, text]) => (
              <div key={code}>
                <dt>{code}</dt>
                <dd>{text}</dd>
              </div>
            ))}
            <div>
              <dt>Metaalunie</dt>
              <dd>Aangesloten bij de Koninklijke Metaalunie.</dd>
            </div>
          </dl>
          <Link href="/certificeringen" className="btn btn-line mt-6">
            Certificeringen
          </Link>
        </Container>
      </section>

      <CtaBand />

      <section data-section="contact" className="border-t-[3px] border-navy">
        <Container className="py-14">
          <CatalogueLabel id="strip" code="STRIP 50×5 · EIBERGEN" />
          <h2 className="mt-4">Contact en route</h2>
          <div className="mt-8">
            <ContactBlock />
          </div>
        </Container>
      </section>
    </>
  );
}
