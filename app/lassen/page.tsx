import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { ProjectRows } from "@/components/project-rows";
import { beeld, projectsBySlugs } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Lassen van aluminium, staal en RVS",
  description:
    "TIG-, MIG/MAG- en elektrode-lassen in roestvast staal, aluminium, staal, gietijzer en gietaluminium. Eibergen.",
};

export default function LassenPage() {
  const lassen = beeld("/img/werkplaats/lassen.jpg");
  const lastafels = beeld("/img/werkplaats/lastafels.jpg");
  const related = projectsBySlugs([
    "balkonhekken-en-leuningen",
    "trap-balustrade-met-rvs-leuning",
    "rvs-tuintafel",
    "filterkast-zinkbad-nedcoat",
    "horeca-rvs",
    "brugleuning-eerbeek",
  ]);

  return (
    <>
      <PageHero
        profile="las"
        code="HOEK 40×40×4 · LASNAAD"
        title="Lassen van aluminium, staal en RVS"
        lede="TIG-lassen, MIG/MAG-lassen en elektrode-lassen. In roestvast staal, aluminium, staal, gietijzer en gietaluminium."
      />
      <section data-section="uitleg">
        <Container className="grid gap-8 py-12 lg:grid-cols-2">
          <div className="max-w-[68ch]">
            <p>Aluminium lassen vraagt vakmanschap en speciale lasapparatuur.</p>
            <p className="mt-4">
              Ook gietijzer en gietaluminium lassen wij. Daarna kan het werk een oppervlaktebehandeling krijgen: galvaniseren, spuiten of poedercoaten. Wij plaatsen en monteren het ook.
            </p>
            <p className="mt-4">
              <Link href="/materiaal" className="underline decoration-2 underline-offset-4">
                Materiaal halen
              </Link>{" "}
              kan in dezelfde werkplaats: kokers, buizen, strippen en plaat, op lengte gezaagd.
            </p>
          </div>
          <div className="grid gap-3">
            <Photo src={lassen.src} alt={lassen.alt} w={lassen.w} h={lassen.h} className="border-[3px] border-navy" />
            <Photo src={lastafels.src} alt={lastafels.alt} w={lastafels.w} h={lastafels.h} className="border-[3px] border-navy" />
          </div>
        </Container>
      </section>
      <section data-section="gerelateerde-projecten" className="border-t-[3px] border-navy">
        <Container className="py-12">
          <h2>Laswerk uit de werkplaats</h2>
          <div className="mt-6">
            <ProjectRows projects={related} />
          </div>
          <Link href="/projecten" className="btn btn-line mt-6">
            Alle projecten
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
