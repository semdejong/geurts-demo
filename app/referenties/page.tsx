import type { Metadata } from "next";
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
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {references.map((name) => (
              <li key={name} className="border-b-2 border-navy py-4 font-display text-3xl leading-none text-navy md:text-4xl">
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
