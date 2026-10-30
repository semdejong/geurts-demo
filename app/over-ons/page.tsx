import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { beeld } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Sinds 2005 in Eibergen. Van een schuur van 80 m² naar een werkplaats van meer dan 600 m² op De Kiefte.",
};

export default function OverOnsPage() {
  const pand = beeld("/img/werkplaats/pand-bussen.jpg");
  const bus = beeld("/img/werkplaats/pand-bus.jpg");
  const team = beeld("/img/werkplaats/team-voor-pand.jpg");
  const hal = beeld("/img/werkplaats/hal.jpg");
  const lastafels = beeld("/img/werkplaats/lastafels.jpg");

  return (
    <>
      <PageHero
        profile="plaat"
        code="PLAAT 100×6 · SINDS 2005"
        title="Over Maikel Geurts Metaalbewerking"
        lede="Maikel Geurts begon in 2005 in een schuur van 80 m². Het werk kwam van mond tot mond. De werkplaats op industrieterrein De Kiefte is nu meer dan 600 m²."
      />
      <section data-section="verhaal">
        <Container className="grid gap-8 py-12 lg:grid-cols-2">
          <div className="max-w-[68ch]">
            <p>
              Particulieren en bedrijven komen hier voor hetzelfde: lassen, draaien, frezen en een ontwerp dat eerst samen wordt besproken.
            </p>
            <p className="mt-4">
              De werkplaats staat aan de Soetersveldweg 6C in Eibergen. Zaterdag zijn wij open tot 12:00. U kunt materiaal op lengte laten zagen en direct meenemen.
            </p>
            <p className="mt-4">
              Wij zijn VCA-gecertificeerd en aangesloten bij de Koninklijke Metaalunie.{" "}
              <Link href="/certificeringen" className="underline decoration-2 underline-offset-4">
                Bekijk de certificeringen
              </Link>
              .
            </p>
          </div>
          <div className="grid gap-3">
            <Photo src={pand.src} alt={pand.alt} w={pand.w} h={pand.h} className="border-[3px] border-navy" />
            <Photo src={team.src} alt={team.alt} w={team.w} h={team.h} className="border-[3px] border-navy" />
          </div>
        </Container>
      </section>
      <section data-section="werkplaats" className="border-t-[3px] border-navy">
        <Container className="flex flex-wrap items-start gap-4 py-12">
          <Photo src={bus.src} alt={bus.alt} w={bus.w} h={bus.h} className="border-[3px] border-navy" />
          <Photo src={hal.src} alt={hal.alt} w={hal.w} h={hal.h} className="border-[3px] border-navy" />
          <Photo src={lastafels.src} alt={lastafels.alt} w={lastafels.w} h={lastafels.h} className="border-[3px] border-navy" />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
