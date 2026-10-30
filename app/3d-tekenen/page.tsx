import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { ProjectRows } from "@/components/project-rows";
import { beeld, projectsBySlugs } from "@/lib/projects";

export const metadata: Metadata = {
  title: "3D tekenen",
  description: "Een idee begint op de tekentafel. 3D tekenen samen met u, daarna maken in de werkplaats in Eibergen.",
};

export default function TekenenPage() {
  const tekenen = beeld("/img/werkplaats/tekenen.jpg");
  const gebouw = beeld("/img/tekenen/3d-gebouw.jpg");
  const trap = beeld("/img/tekenen/3d-wenteltrap.jpg");
  const related = projectsBySlugs(["kantelbare-mengsilos"]);

  return (
    <>
      <PageHero
        profile="iso"
        code="KOKER 40×40×3 · ISOMETRIE"
        title="3D tekenen"
        lede="Een idee begint op de tekentafel. Samen met u wordt het ontwerp uitvoerig behandeld voordat het in de werkplaats wordt gemaakt."
      />
      <section data-section="tekeningen">
        <Container className="py-12">
          <Photo src={tekenen.src} alt={tekenen.alt} w={tekenen.w} h={tekenen.h} className="border-[3px] border-navy" />
          <div className="mt-4 flex flex-wrap items-start gap-4">
            <Photo src={gebouw.src} alt={gebouw.alt} w={gebouw.w} h={gebouw.h} className="border-[3px] border-navy" />
            <Photo src={trap.src} alt={trap.alt} w={trap.w} h={trap.h} className="border-[3px] border-navy" />
          </div>
          <p className="mt-6 max-w-[68ch]">
            Daarna volgt het maken: lassen, draaien en frezen, en als het nodig is plaatsen en monteren.
          </p>
          <Link href="/werkzaamheden" className="mt-4 inline-flex min-h-11 items-center underline decoration-2 underline-offset-4">
            Alle werkzaamheden
          </Link>
        </Container>
      </section>
      <section data-section="gerelateerde-projecten" className="border-t-[3px] border-navy">
        <Container className="py-12">
          <h2>Getekend en gemaakt</h2>
          <div className="mt-6">
            <ProjectRows projects={related} />
          </div>
        </Container>
      </section>
      <CtaBand title="Eerst een tekening?" text="Stuur uw idee, een schets of een foto. Maikel bekijkt het en neemt contact op." />
    </>
  );
}
