import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { ProjectRows } from "@/components/project-rows";
import { particulierSlugs, projectsBySlugs } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Metaalwerk voor particulieren",
  description: "Balkonhek, trap, reparatie of tuintafel. Metaalwerk voor particulieren in Eibergen, en materiaal om mee te nemen.",
};

export default function ParticulierPage() {
  const list = projectsBySlugs(particulierSlugs);
  return (
    <>
      <PageHero
        profile="hoek"
        code="HOEK 40×40×4 · THUIS"
        title="Metaalwerk voor thuis"
        lede="Een balkonhek, een trap, een reparatie of een tuintafel. U kunt ook kokers, buizen, strippen en plaat komen halen."
      >
        <Link href="/offerte#particulier" data-cta="offerte" className="btn btn-navy">
          Stuur uw vraag of schets
        </Link>
        <Link href="/materiaal" className="btn btn-line">
          Materiaal halen
        </Link>
      </PageHero>
      <section data-section="voorbeelden">
        <Container className="py-12">
          <h2>Voorbeelden</h2>
          <p className="mt-4 max-w-[68ch]">Balustrades, hekken, een trap en een tuintafel in RVS.</p>
          <div className="mt-6">
            <ProjectRows projects={list} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
