import type { Metadata } from "next";
import { content } from "@/content";
import { OfferteFlow } from "@/components/offerte-flow";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Prijs aanvragen",
  description:
    "Stuur uw vraag, een foto of een schets. Maikel bekijkt de aanvraag en neemt contact op. Bel 0545 47 60 00.",
};

const faq = [
  {
    q: "Kan ik bij jullie ook materiaal kopen?",
    a: "Ja. Kokers, buizen, strippen en plaatmateriaal in RVS, staal en aluminium, op lengte gezaagd. U neemt het direct mee. Kom gerust langs.",
  },
  {
    q: "Plaatsen en monteren jullie ook?",
    a: "Ja. Wij plaatsen, monteren en stellen in bedrijf.",
  },
  {
    q: "Welke materialen kunnen jullie lassen?",
    a: "Roestvast staal, aluminium, staal, gietijzer en gietaluminium. Met TIG, MIG/MAG en elektrode.",
  },
  {
    q: "Werken jullie ook voor particulieren?",
    a: "Ja. Bijvoorbeeld een balustrade, een hek, een trap, een reparatie of een tuintafel.",
  },
  {
    q: "Zijn jullie op zaterdag open?",
    a: "Ja. Zaterdag van 08:00 tot 12:00. Zondag gesloten. Maandag tot en met vrijdag van 08:00 tot 17:30.",
  },
  {
    q: "Kunnen jullie mijn idee eerst tekenen?",
    a: "Ja. Een idee begint op de tekentafel. Samen met u wordt het ontwerp uitvoerig behandeld voordat het in de werkplaats wordt gemaakt.",
  },
  {
    q: "Zijn jullie VCA-gecertificeerd?",
    a: "Ja. Wij zijn VCA-gecertificeerd.",
  },
];

export default function OffertePage() {
  const { company } = content;
  return (
    <>
      <PageHero
        profile="koker"
        code="KOKER 40×40×3 · OFFERTE"
        title="Stuur uw vraag, foto of schets. Wij rekenen het voor u uit."
        lede="Maikel bekijkt uw aanvraag en neemt contact op."
      >
        <a href={company.phoneTel} data-cta="bellen" className="btn btn-navy">
          Bel {company.phoneDisplay}
        </a>
      </PageHero>
      <section data-section="voorbeelden" className="border-b-[3px] border-navy bg-mist">
        <Container className="py-12">
          <h2>Zo kan een vraag eruitzien</h2>
          <ul className="mt-6 border-t-[3px] border-navy">
            <li className="grid gap-1 border-b-2 border-navy py-4 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Particulier</p>
              <p className="max-w-[68ch]">Een balkonhek of een reparatie van een leuning. Een foto van de plek is genoeg om te beginnen.</p>
            </li>
            <li className="grid gap-1 border-b-2 border-navy py-4 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Zakelijk</p>
              <p className="max-w-[68ch]">Een filterkast, afzuiging of een onderdeel om te draaien. Zet het bedrijf en een schets of tekening erbij.</p>
            </li>
            <li className="grid gap-1 border-b-2 border-navy py-4 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Materiaal</p>
              <p className="max-w-[68ch]">Kokers of buizen op lengte. Noem materiaal, lengte en aantal. U neemt het mee.</p>
            </li>
          </ul>
        </Container>
      </section>
      <OfferteFlow />
      <section data-section="faq" className="border-t-[3px] border-navy">
        <Container className="py-14">
          <h2>Vragen</h2>
          <div className="mt-6 border-t-[3px] border-navy">
            {faq.map((item) => (
              <article key={item.q} className="border-b-2 border-navy py-4">
                <h3>{item.q}</h3>
                <p className="mt-2 max-w-[68ch]">{item.a}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
