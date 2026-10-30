import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { CatalogueLabel } from "@/components/profiles";
import { ProjectRows } from "@/components/project-rows";
import { projectsBySlugs, zakelijkSlugs } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Metaalwerk voor bedrijven",
  description: "Filterkasten, afzuiging, constructies, bedrijfswageninrichting en draaiwerk. Metaalwerk voor bedrijven in Eibergen.",
};

const notes: Record<string, string> = {
  "Installaties & kasten": "Filterkasten, een filterinstallatie, een afzuigingsunit en kantelbare mengsilo's.",
  "Constructie & montage": "Tribunes voor het openluchttheater en de spanten van een rijhal in aanbouw.",
  Inrichting: "Een paardenstal en de inrichting van een vrachtwagen en een bedrijfsbus.",
  "Trappen, balustrades & hekwerk": "Een stalen leuning langs een brug over het water.",
  "RVS-maatwerk": "Een rollenhouder, een beslagmolen en een spoeltafel met wandschappen voor de horeca.",
};

export default function ZakelijkPage() {
  const { company } = content;
  const list = projectsBySlugs(zakelijkSlugs);
  const order = [
    "Installaties & kasten",
    "Constructie & montage",
    "Inrichting",
    "RVS-maatwerk",
    "Trappen, balustrades & hekwerk",
  ];
  const groups = order.flatMap((type) => {
    const projects = list.filter((project) => project.type === type);
    return projects.length > 0 ? [{ type, projects }] : [];
  });

  return (
    <>
      <PageHero
        profile="u"
        code="U 80×45 · BEDRIJF"
        title="Metaalwerk voor bedrijven"
        lede="Een filterkast en een balkonhek komen uit dezelfde werkplaats. Tekenen, lassen, draaien, frezen, en daarna plaatsen."
      >
        <Link href="/offerte#zakelijk" data-cta="offerte" className="btn btn-navy">
          Stuur uw vraag of schets
        </Link>
        <a href={company.phoneTel} data-cta="bellen" className="btn btn-line">
          Bel {company.phoneDisplay}
        </a>
      </PageHero>
      <section data-section="route" className="border-b-[3px] border-navy bg-mist">
        <Container className="grid gap-6 py-10 md:grid-cols-3">
          <Link href="/3d-tekenen" className="border-2 border-navy p-4">
            <CatalogueLabel id="iso" code="TEKENTAFEL" />
            <p className="mt-3">Een idee begint op de tekentafel, samen met u.</p>
          </Link>
          <Link href="/lassen" className="border-2 border-navy p-4">
            <CatalogueLabel id="las" code="LASNAAD" />
            <p className="mt-3">TIG, MIG/MAG en elektrode, in RVS, staal en aluminium.</p>
          </Link>
          <Link href="/draaien-frezen" className="border-2 border-navy p-4">
            <CatalogueLabel id="as" code="AS · DRAAIEN" />
            <p className="mt-3">Draadsnijden, spiebanen, bussen, assen, boren en kotteren.</p>
          </Link>
        </Container>
      </section>
      <section data-section="voorbeelden">
        <Container className="py-12">
          {groups.map((group) => (
            <div key={group.type} className="mt-12 first:mt-0">
              <h2>{group.type}</h2>
              <p className="mt-3 max-w-[68ch]">{notes[group.type]}</p>
              <div className="mt-6">
                <ProjectRows projects={group.projects} />
              </div>
            </div>
          ))}
        </Container>
      </section>
      <CtaBand
        title="Stuur de tekening of een foto van de plek."
        text="Zet het bedrijf, het materiaal en de maten erbij. Maikel bekijkt uw aanvraag en neemt contact op."
      />
    </>
  );
}
