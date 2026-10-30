import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { references } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Referenties",
  description:
    "Bedrijven waarvoor Maikel Geurts Metaalbewerking heeft gewerkt, waaronder VDL Groep Nederland, Lidl Nederland en Van Wijnen Bouw.",
};

export default function ReferentiesPage() {
  return (
    <>
      <PageHero
        profile="buis"
        code="BUIS Ø48,3×2,6 · REFERENTIES"
        title="Referenties"
        lede="Bedrijven waarvoor wij hebben gewerkt."
      />
      <section data-section="namen">
        <Container className="py-12">
          <p className="max-w-[68ch]">
            Dit zijn bedrijven waarvoor wij hebben gewerkt. De lijst staat zoals wij die bijhouden: de naam, verder niets.
          </p>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {references.map((name) => (
              <li key={name} className="border-b-2 border-navy py-4 font-display text-3xl leading-none text-navy md:text-4xl">
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section data-section="werk" className="border-t-[3px] border-navy bg-mist">
        <Container className="grid gap-4 py-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <h2>Het werk zelf</h2>
            <p className="mt-4 max-w-[68ch]">
              Een filterkast, een tribune, een hek, de inrichting van een bus. Dat staat bij de projecten, met foto&apos;s.
            </p>
          </div>
          <Link href="/projecten" className="btn btn-navy">
            Naar de projecten
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
