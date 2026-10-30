import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock } from "@/components/contact-block";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { CatalogueLabel, MaterialMark, type ProfileId } from "@/components/profiles";
import { Shot, Ticket } from "@/components/sheet";
import { beeld } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Materiaal halen in Eibergen",
  description:
    "Kokers, buizen, strippen en plaat in RVS, staal en aluminium, op lengte gezaagd. Direct mee te nemen in Eibergen. Zaterdag open.",
};

const stock: { id: ProfileId; code: string; name: string }[] = [
  { id: "koker", code: "KOKER", name: "Kokers" },
  { id: "buis", code: "BUIS", name: "Buizen" },
  { id: "strip", code: "STRIP", name: "Strippen" },
  { id: "plaat", code: "PLAAT", name: "Plaat" },
];

const metals = [
  { mark: "rvs" as const, label: "RVS", text: "Lange levensduur. Geschikt waar hygiëne belangrijk is." },
  { mark: "staal" as const, label: "Staal", text: "Het universele constructiemateriaal." },
  { mark: "alu" as const, label: "Aluminium", text: "Lichtgewicht, met een relatief hoge sterkte." },
];

export default function MateriaalPage() {
  const zaag = beeld("/img/werkplaats/zaag-en-profielen.jpg");
  const hal = beeld("/img/werkplaats/hal.jpg");

  return (
    <>
      <PageHero
        profile="strip"
        code="STRIP 50×5 · MAGAZIJN"
        title="Materiaal halen"
        lede="Kokers, buizen, strippen en plaatmateriaal in RVS, staal en aluminium. Op lengte gezaagd. Kom gerust langs en neem uw materiaal direct mee."
      >
        <Link href="/offerte#particulier" data-cta="offerte" className="btn btn-navy">
          Vraag materiaal aan
        </Link>
      </PageHero>
      <section data-section="metalen">
        <Container className="py-12">
          <h2>Drie metalen</h2>
          <ul className="mt-6 border-t-[3px] border-navy">
            {metals.map((metal) => (
              <li key={metal.label} className="grid gap-2 border-b-2 border-navy py-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:items-baseline">
                <span className="flex items-center gap-3 font-display text-4xl leading-none text-navy">
                  <MaterialMark material={metal.mark} />
                  {metal.label}
                </span>
                <span>{metal.text}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section data-section="voorraad" className="border-y-[3px] border-navy bg-mist">
        <Container className="py-12">
          <h2>Vier profielen</h2>
          <p className="mt-4 max-w-[68ch]">Elk van deze vier, in RVS, staal en aluminium. Wij zagen het op lengte.</p>
          <ul className="mt-6 grid gap-px border-2 border-navy bg-navy sm:grid-cols-2">
            {stock.map((item) => (
              <li key={item.id} className="bg-paper p-5">
                <CatalogueLabel id={item.id} code={item.code} />
                <h3 className="mt-4">{item.name}</h3>
                <p className="mt-2">RVS, staal en aluminium. Op lengte gezaagd.</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid items-start gap-4 sm:grid-cols-2">
            <Shot photo={zaag} label="Lintzaag · profielen" />
            <Shot photo={hal} label="Rekken in de hal" />
          </div>
        </Container>
      </section>
      <section data-section="meenemen">
        <Container className="py-12">
          <h2>Zeg dit aan de balie</h2>
          <p className="mt-4 max-w-[68ch]">Vier dingen zijn genoeg. U neemt het daarna direct mee.</p>
          <Ticket
            rows={[
              { term: "Materiaal", children: "RVS, staal of aluminium." },
              { term: "Profiel", children: "Koker, buis, strip of plaat." },
              { term: "Lengte", children: "Wij zagen het op lengte." },
              { term: "Aantal", children: "Hoeveel stuks u nodig hebt." },
            ]}
          />
          <p className="mt-5 max-w-[68ch]">
            Aluminium lassen wij ook, met de apparatuur die daarbij hoort. Dat is werkplaats, geen balieverkoop.{" "}
            <Link href="/lassen" className="underline decoration-2 underline-offset-4">
              Meer over lassen
            </Link>
            .
          </p>
        </Container>
      </section>
      <section data-section="openingstijden" className="border-t-[3px] border-navy">
        <Container className="py-12">
          <h2>Openingstijden en route</h2>
          <p className="mt-4 max-w-[68ch]">
            Zaterdag van 08:00 tot 12:00. Zondag gesloten. Maandag tot en met vrijdag van 08:00 tot 17:30. Industrieterrein De
            Kiefte.
          </p>
          <div className="mt-8">
            <ContactBlock />
          </div>
        </Container>
      </section>
      <CtaBand title="Materiaal nodig?" text="Bel ons of stuur de lengte, het materiaal en het aantal. Maikel neemt contact op." />
    </>
  );
}
