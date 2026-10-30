import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Profile } from "@/components/profiles";
import { ProjectRows } from "@/components/project-rows";
import { Shot, Ticket } from "@/components/sheet";
import { beeld, projectsBySlugs } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Lassen van aluminium, staal en RVS",
  description:
    "TIG-, MIG/MAG- en elektrode-lassen in roestvast staal, aluminium, staal, gietijzer en gietaluminium. Eibergen.",
};

const methods = [
  { name: "TIG", text: "TIG-lassen (wolfraam-inertgaslassen)." },
  { name: "MIG/MAG", text: "MIG/MAG-lassen." },
  { name: "Elektrode", text: "Elektrode-lassen." },
];

export default function LassenPage() {
  const lassen = beeld("/img/werkplaats/lassen.jpg");
  const lastafels = beeld("/img/werkplaats/lastafels.jpg");
  const related = projectsBySlugs([
    "balkonhekken-en-leuningen",
    "frans-balkonhek",
    "trap-balustrade-met-rvs-leuning",
    "rvs-tuintafel",
    "horeca-rvs",
    "filterkast",
    "brugleuning-eerbeek",
    "kantelbare-mengsilos",
  ]);

  return (
    <>
      <PageHero
        profile="las"
        code="HOEK 40×40×4 · LASNAAD"
        title="Lassen van aluminium, staal en RVS"
        lede="Drie methoden, vijf materialen. Van een balkonhek tot een filterkast, in dezelfde werkplaats."
      />
      <section data-section="methoden">
        <Container className="py-12">
          <h2>Drie methoden</h2>
          <ul className="mt-6 grid border-t-[3px] border-navy md:grid-cols-3">
            {methods.map((method) => (
              <li key={method.name} className="border-b-2 border-navy py-6 md:border-r-2 md:border-b-0 md:px-5 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <Profile id="las" className="h-12 w-auto text-navy" label="Lasnaad in doorsnede" />
                <h3 className="mt-4">{method.name}</h3>
                <p className="mt-3">{method.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section data-section="gietwerk" className="border-t-[3px] border-navy bg-mist">
        <Container className="py-10">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">Ook op de lastafel</p>
          <h2 className="mt-3 max-w-[16ch]">Gietijzer en gietaluminium</h2>
          <p className="mt-4 max-w-[68ch]">Die lassen wij ook, in dezelfde werkplaats als het staal en het RVS.</p>
        </Container>
      </section>
      <section data-section="aluminium" className="on-navy border-t-[3px] border-navy bg-navy">
        <Container className="py-12">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-spark">Aluminium</p>
          <h2 className="mt-3 max-w-[20ch]">Aluminium lassen vraagt vakmanschap en speciale lasapparatuur.</h2>
          <p className="mt-4 max-w-[68ch]">
            Aluminium is licht en heeft een relatief hoge sterkte. In deze werkplaats lassen wij het met de apparatuur die daarbij hoort.
          </p>
        </Container>
      </section>
      <section data-section="na-de-las">
        <Container className="py-12">
          <h2>Na de las</h2>
          <Ticket
            rows={[
              {
                term: "Oppervlak",
                children: "Galvaniseren, spuiten of poedercoaten. Het laswerk kan daarna een oppervlaktebehandeling krijgen.",
              },
              {
                term: "Buiten",
                children: "Wij plaatsen, monteren en stellen in bedrijf. Het werk hoeft niet in de werkplaats te blijven.",
              },
              {
                term: "Materiaal",
                children: (
                  <>
                    Kokers, buizen, strippen en plaat, op lengte gezaagd.{" "}
                    <Link href="/materiaal" className="underline decoration-2 underline-offset-4">
                      Materiaal halen
                    </Link>{" "}
                    kan ook op Soetersveldweg 6C.
                  </>
                ),
              },
            ]}
          />
          <div className="mt-8 grid items-start gap-4 sm:grid-cols-2">
            <Shot photo={lassen} label="Lastafel · TIG" />
            <Shot photo={lastafels} label="Lastafels" />
          </div>
        </Container>
      </section>
      <section data-section="gerelateerde-projecten" className="border-t-[3px] border-navy">
        <Container className="py-12">
          <h2>Laswerk uit de werkplaats</h2>
          <p className="mt-4 max-w-[68ch]">
            Een hek aan een woning, een leuning langs een brug, een spoeltafel in een keuken, een filterkast buiten de deur.
          </p>
          <div className="mt-6">
            <ProjectRows projects={related} />
          </div>
          <Link href="/projecten" className="btn btn-line mt-6">
            Alle projecten
          </Link>
        </Container>
      </section>
      <CtaBand
        title="Een foto van de breuk is genoeg om te beginnen."
        text="Zet er het materiaal bij: RVS, staal, aluminium, gietijzer of gietaluminium. Maikel bekijkt uw aanvraag en neemt contact op."
      />
    </>
  );
}
