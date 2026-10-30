import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/page-hero";
import { ProjectFilter } from "@/components/project-filter";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Projecten van Maikel Geurts Metaalbewerking: hekwerk, RVS-maatwerk, installaties, constructies en inrichting.",
};

export default function ProjectenPage() {
  return (
    <>
      <PageHero
        profile="hoek"
        code="HOEK 40×40×4 · PROJECTEN"
        title="Projecten"
        lede="Van een tribune tot een tuintafel. Hetzelfde atelier, hetzelfde vak."
      />
      <section data-section="overzicht">
        <Container className="py-12">
          <ProjectFilter projects={projects} />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
