import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Certificeringen",
  description: "VCA, NEN 818, NEN 3140 en NEN 2484. Maikel Geurts Metaalbewerking is aangesloten bij de Koninklijke Metaalunie.",
};

const items = [
  {
    code: "VCA",
    label: "Veiligheid",
    text: "Wij zijn VCA-gecertificeerd.",
  },
  {
    code: "NEN 818",
    label: "Hijs- en hefmiddelen",
    text: "Keuren van hijs- en hefmiddelen.",
  },
  {
    code: "NEN 3140",
    label: "Elektrische arbeidsmiddelen",
    text: "Keuren van elektrische arbeidsmiddelen.",
  },
  {
    code: "NEN 2484",
    label: "Ladders, trappen, rolsteigers",
    text: "Keuren van ladders, trappen en rolsteigers.",
  },
];

export default function CertificeringenPage() {
  return (
    <>
      <PageHero
        profile="u"
        code="U 80×45 · KEURING"
        title="Certificeringen"
        lede="VCA, drie NEN-keuringen, en het lidmaatschap van de Koninklijke Metaalunie. Naast het lassen, het draaien en het monteren."
      />
      <section data-section="keuringen">
        <Container className="py-4">
          {items.map((item) => (
            <article key={item.code} className="grid gap-2 border-b-2 border-navy py-8 md:grid-cols-[16rem_minmax(0,1fr)] md:items-end md:gap-8">
              <h2>{item.code}</h2>
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">{item.label}</p>
                <p className="mt-2 max-w-[68ch]">{item.text}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <section data-section="metaalunie" className="on-navy border-t-[3px] border-navy bg-navy">
        <Container className="py-14">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-spark">Aangesloten</p>
          <h2 className="mt-3 max-w-[16ch]">Koninklijke Metaalunie</h2>
          <p className="mt-4 max-w-[68ch]">Wij zijn aangesloten bij de Koninklijke Metaalunie.</p>
          <Link href="/over-ons" className="btn btn-line-light mt-6">
            Over de werkplaats
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
