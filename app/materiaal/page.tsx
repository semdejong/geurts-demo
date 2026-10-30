import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock } from "@/components/contact-block";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { MaterialMark, ProfileStack } from "@/components/profiles";
import { beeld } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Materiaal halen in Eibergen",
  description:
    "Kokers, buizen, strippen en plaat in RVS, staal en aluminium, op lengte gezaagd. Direct mee te nemen in Eibergen. Zaterdag open.",
};

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
      <section data-section="voorraad" className="border-b-[3px] border-navy">
        <Container className="grid items-start gap-10 py-12 lg:grid-cols-[auto_minmax(0,1fr)]">
          <ProfileStack />
          <div>
            <ul className="border-t-[3px] border-navy">
              {(
                [
                  ["RVS", "rvs", "Lange levensduur. Geschikt waar hygiëne belangrijk is."],
                  ["Staal", "staal", "Het universele constructiemateriaal."],
                  ["Aluminium", "alu", "Lichtgewicht, met een relatief hoge sterkte."],
                ] as const
              ).map(([label, mark, text]) => (
                <li key={label} className="grid gap-2 border-b-2 border-navy py-4 sm:grid-cols-[9rem_1fr] sm:items-baseline">
                  <span className="flex items-center gap-3 font-display text-3xl text-navy">
                    <MaterialMark material={mark} />
                    {label}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[68ch]">Wij zagen het op lengte. U neemt het direct mee.</p>
            <div className="mt-6 flex flex-wrap items-start gap-4">
              <Photo src={zaag.src} alt={zaag.alt} w={zaag.w} h={zaag.h} className="border-[3px] border-navy" />
              <Photo src={hal.src} alt={hal.alt} w={hal.w} h={hal.h} className="border-[3px] border-navy" />
            </div>
          </div>
        </Container>
      </section>
      <section data-section="openingstijden">
        <Container className="py-12">
          <h2>Openingstijden en route</h2>
          <p className="mt-4 max-w-[68ch]">Zaterdag zijn wij open van 08:00 tot 12:00. Zondag gesloten.</p>
          <div className="mt-8">
            <ContactBlock />
          </div>
        </Container>
      </section>
      <CtaBand title="Materiaal nodig?" text="Bel ons of stuur de lengte, het materiaal en het aantal. Maikel neemt contact op." />
    </>
  );
}
