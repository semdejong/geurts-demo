import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { ProjectRows } from "@/components/project-rows";
import { projectsBySlugs, zakelijkSlugs } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Metaalwerk voor bedrijven",
  description: "Filterkasten, afzuiging, constructies, bedrijfswageninrichting en draaiwerk. Metaalwerk voor bedrijven in Eibergen.",
};

export default function ZakelijkPage() {
  const list = projectsBySlugs(zakelijkSlugs);
  return (
    <>
      <PageHero
        profile="u"
        code="U 80×45 · BEDRIJF"
        title="Metaalwerk voor bedrijven"
        lede="Installaties, filterkasten, afzuiging, constructies, bedrijfswageninrichting en draai- en freeswerk."
      >
        <Link href="/offerte#zakelijk" data-cta="offerte" className="btn btn-navy">
          Stuur uw vraag of schets
        </Link>
        <Link href="/draaien-frezen" className="btn btn-line">
          Draaien en frezen
        </Link>
      </PageHero>
      <section data-section="voorbeelden">
        <Container className="py-12">
          <h2>Voorbeelden</h2>
          <p className="mt-4 max-w-[68ch]">
            Van een filterinstallatie en een rijhal tot de inrichting van een bedrijfsbus.
          </p>
          <div className="mt-6">
            <ProjectRows projects={list} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
