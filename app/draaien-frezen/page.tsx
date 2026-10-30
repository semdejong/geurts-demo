import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Profile } from "@/components/profiles";
import { beeld } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Draaien en frezen",
  description:
    "Draai- en freeswerk: draadsnijden, spiebaan brootsen, bussen en assen, boren en kotteren. In Eibergen.",
};

const items = ["Draadsnijden", "Spiebaan brootsen", "Bussen en assen draaien", "Boren en kotteren"];

export default function DraaienPage() {
  const draai = beeld("/img/werkplaats/draaibank.jpg");
  const frees = beeld("/img/werkplaats/freesbank.jpg");

  return (
    <>
      <PageHero
        profile="buis"
        code="BUIS Ø48,3×2,6 · DRAAIEN"
        title="Draaien en frezen"
        lede="Draai- en freeswerk in verschillende soorten metalen en legeringen."
      />
      <section data-section="uitleg">
        <Container className="grid gap-8 py-12 lg:grid-cols-2">
          <div>
            <div className="flex items-end gap-4">
              <Profile id="as" className="h-16 w-auto text-navy" label="As, doorsnede" />
              <Profile id="buis" className="h-16 w-auto text-navy" label="Buis, doorsnede" />
              <Profile id="u" className="h-16 w-auto text-navy" label="U-profiel, doorsnede" />
            </div>
            <ul className="mt-6 border-t-[3px] border-navy">
              {items.map((item) => (
                <li key={item} className="border-b-2 border-navy py-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[68ch]">
              Stuur een schets of een tekening mee met uw vraag. Wij maken het onderdeel in de werkplaats in Eibergen.
            </p>
            <p className="mt-4">
              <Link href="/3d-tekenen" className="underline decoration-2 underline-offset-4">
                Eerst tekenen
              </Link>{" "}
              kan ook. Samen met u wordt het ontwerp behandeld voordat het gemaakt wordt.
            </p>
          </div>
          <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.75fr)] items-start gap-3">
            <Photo src={draai.src} alt={draai.alt} w={draai.w} h={draai.h} className="border-[3px] border-navy" />
            <Photo src={frees.src} alt={frees.alt} w={frees.w} h={frees.h} className="border-[3px] border-navy" />
          </div>
        </Container>
      </section>
      <CtaBand title="Een as, een bus of een freesdeel?" text="Stuur de maten of een schets. Maikel bekijkt uw aanvraag en neemt contact op." />
    </>
  );
}
