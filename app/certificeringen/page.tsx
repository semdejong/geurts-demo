import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Certificeringen",
  description: "VCA, NEN 818, NEN 3140 en NEN 2484. Maikel Geurts Metaalbewerking is aangesloten bij de Koninklijke Metaalunie.",
};

const items = [
  ["VCA", "Wij zijn VCA-gecertificeerd."],
  ["NEN 818", "Keuren van hijs- en hefmiddelen."],
  ["NEN 3140", "Keuren van elektrische arbeidsmiddelen."],
  ["NEN 2484", "Keuren van ladders, trappen en rolsteigers."],
  ["Koninklijke Metaalunie", "Wij zijn aangesloten bij de Koninklijke Metaalunie."],
];

export default function CertificeringenPage() {
  return (
    <>
      <PageHero
        profile="u"
        code="U 80×45 · KEURING"
        title="Certificeringen"
        lede="VCA, NEN 818, NEN 3140 en NEN 2484. Wij zijn aangesloten bij de Koninklijke Metaalunie."
      />
      <section data-section="lijst">
        <Container className="py-12">
          <dl className="facts max-w-3xl">
            {items.map(([code, text]) => (
              <div key={code}>
                <dt>{code}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
