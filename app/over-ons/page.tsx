import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { CatalogueLabel } from "@/components/profiles";
import { Shot } from "@/components/sheet";
import { beeld } from "@/lib/projects";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Sinds 2005 in Eibergen. Van een schuur van 80 m² naar een werkplaats van meer dan 600 m² op De Kiefte.",
};

const route = [
  { href: "/3d-tekenen", code: "TEKENTAFEL", id: "iso" as const, text: "Een idee begint op de tekentafel." },
  { href: "/lassen", code: "LASNAAD", id: "las" as const, text: "TIG, MIG/MAG en elektrode." },
  { href: "/draaien-frezen", code: "DRAAIEN", id: "buis" as const, text: "Draaien, frezen, boren en kotteren." },
  { href: "/materiaal", code: "MAGAZIJN", id: "strip" as const, text: "Kokers, buizen, strippen en plaat, op lengte." },
];

export default function OverOnsPage() {
  const { company } = content;
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
        lede="Maikel Geurts begon in 2005 in een schuur. Het werk kwam van mond tot mond. De werkplaats staat nu op industrieterrein De Kiefte."
      />
      <section data-section="maten" className="border-b-[3px] border-navy">
        <Container className="grid md:grid-cols-2">
          <article className="border-b-2 border-navy py-10 md:border-r-[3px] md:border-b-0 md:pr-8">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">2005</p>
            <p className="mt-3 font-display text-6xl leading-none text-navy md:text-7xl">80 m²</p>
            <p className="mt-4 max-w-[36ch]">Een schuur. Het werk kwam van mond tot mond.</p>
          </article>
          <article className="py-10 md:pl-8">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">De Kiefte · meer dan</p>
            <p className="mt-3 font-display text-6xl leading-none text-navy md:text-7xl">600 m²</p>
            <p className="mt-4 max-w-[36ch]">
              Meer dan 600 m² aan de {company.street} in {company.city}.
            </p>
          </article>
        </Container>
      </section>
      <section data-section="verhaal">
        <Container className="grid items-start gap-8 py-12 lg:grid-cols-2">
          <div className="max-w-[68ch]">
            <h2>Eén werkplaats</h2>
            <p className="mt-4">
              Particulieren en bedrijven komen hier voor hetzelfde: een hek en een filterkast, een as en een tribune. Lassen,
              draaien, frezen, en een ontwerp dat eerst samen wordt besproken.
            </p>
            <p className="mt-4">
              Zaterdag is de balie open tot 12:00. U kunt materiaal op lengte laten zagen en direct meenemen. Zondag gesloten.
              Maandag tot en met vrijdag van 08:00 tot 17:30.
            </p>
            <p className="mt-4">
              Wij zijn VCA-gecertificeerd en aangesloten bij de Koninklijke Metaalunie.{" "}
              <Link href="/certificeringen" className="underline decoration-2 underline-offset-4">
                Bekijk de certificeringen
              </Link>
              .
            </p>
          </div>
          <div className="grid gap-4">
            <Shot photo={pand} label="Soetersveldweg 6C" />
            <Shot photo={team} label="Voor het pand" />
          </div>
        </Container>
      </section>
      <section data-section="onder-een-dak" className="border-t-[3px] border-navy bg-mist">
        <Container className="py-12">
          <h2>Onder één dak</h2>
          <ul className="mt-6 grid gap-px border-2 border-navy bg-navy sm:grid-cols-2">
            {route.map((item) => (
              <li key={item.href} className="bg-paper">
                <Link href={item.href} className="block p-5">
                  <CatalogueLabel id={item.id} code={item.code} />
                  <p className="mt-3">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section data-section="werkplaats">
        <Container className="grid items-start gap-4 py-12 sm:grid-cols-3">
          <Shot photo={bus} label="Bedrijfsbus" />
          <Shot photo={hal} label="Hal" />
          <Shot photo={lastafels} label="Lastafels" />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
