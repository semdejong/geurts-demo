import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Profile } from "@/components/profiles";
import { ProjectRows } from "@/components/project-rows";
import { Shot } from "@/components/sheet";
import { beeld, projectsBySlugs } from "@/lib/projects";

export const metadata: Metadata = {
  title: "3D tekenen",
  description: "Een idee begint op de tekentafel. 3D tekenen samen met u, daarna maken in de werkplaats in Eibergen.",
};

const stappen = [
  {
    term: "Tekentafel",
    title: "Een idee begint op de tekentafel.",
    text: "Een schets op papier, een foto van de plek, of een bestand dat u al hebt. Daar begint het.",
  },
  {
    term: "Samen",
    title: "Het ontwerp wordt uitvoerig behandeld.",
    text: "Samen met u, voordat er in de werkplaats iets gemaakt wordt. Maat, materiaal en hoe het geplaatst moet worden.",
  },
  {
    term: "Werkplaats",
    title: "Daarna wordt het gemaakt.",
    text: "Lassen, draaien en frezen. En als het werk de deur uit moet: plaatsen, monteren en inbedrijfstellen.",
  },
];

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
      <section data-section="stappen">
        <Container className="py-12">
          <ol className="border-t-[3px] border-navy">
            {stappen.map((step) => (
              <li key={step.term} className="grid gap-2 border-b-2 border-navy py-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
                <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">
                  <Profile id="iso" className="h-10 w-auto" />
                  {step.term}
                </p>
                <div>
                  <h2 className="max-w-[22ch]">{step.title}</h2>
                  <p className="mt-3 max-w-[68ch]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section data-section="tekeningen" className="border-t-[3px] border-navy bg-mist">
        <Container className="py-12">
          <h2>Op het scherm</h2>
          <p className="mt-4 max-w-[68ch]">
            Een gebouw met stalen elementen, een wenteltrap, en het scherm waarop Maikel het uitwerkt.
          </p>
          <div className="mt-6 grid items-start gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
            <Shot photo={tekenen} label="Tekenscherm" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Shot photo={gebouw} label="Gebouw" />
              <Shot photo={trap} label="Wenteltrap" />
            </div>
          </div>
        </Container>
      </section>
      <section data-section="gerelateerde-projecten">
        <Container className="py-12">
          <h2>Getekend en gemaakt</h2>
          <p className="mt-4 max-w-[68ch]">
            Bij de kantelbare mengsilo&apos;s staan de tekening en het gemaakte werk naast elkaar: het frame, en de tekeningen die erbij horen.
          </p>
          <div className="mt-6">
            <ProjectRows projects={related} />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/lassen" className="btn btn-line">
              Lassen
            </Link>
            <Link href="/draaien-frezen" className="btn btn-line">
              Draaien en frezen
            </Link>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Eerst een tekening?"
        text="Stuur uw idee, een schets of een foto van de plek. Maikel bekijkt het en neemt contact op."
      />
    </>
  );
}
