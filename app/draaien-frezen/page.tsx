import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Profile } from "@/components/profiles";
import { Shot, Ticket } from "@/components/sheet";
import { beeld } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Draaien en frezen",
  description:
    "Draai- en freeswerk: draadsnijden, spiebaan brootsen, bussen en assen, boren en kotteren. In Eibergen.",
};

export default function DraaienPage() {
  const draai = beeld("/img/werkplaats/draaibank.jpg");
  const frees = beeld("/img/werkplaats/freesbank.jpg");

  return (
    <>
      <PageHero
        profile="buis"
        code="BUIS Ø48,3×2,6 · DRAAIEN"
        title="Draaien en frezen"
        lede="Ronde delen en freeswerk in verschillende soorten metalen en legeringen. Een schets of een tekening is genoeg om te beginnen."
      />
      <section data-section="bewerkingen">
        <Container className="grid items-start gap-10 py-12 lg:grid-cols-[auto_minmax(0,1fr)]">
          <div className="flex items-end gap-4 text-navy">
            <Profile id="as" className="h-20 w-auto" label="As, doorsnede" />
            <Profile id="buis" className="h-20 w-auto" label="Buis, doorsnede" />
            <Profile id="u" className="h-24 w-auto" label="U-profiel, doorsnede" />
          </div>
          <div>
            <h2>Vier bewerkingen</h2>
            <Ticket
              rows={[
                { term: "Draadsnijden", children: "Schroefdraad op een as of in een bus." },
                { term: "Spiebaan", children: "Een spiebaan brootsen in een as of naaf." },
                { term: "Bussen en assen", children: "Ronde delen draaien, passend bij het werk dat u meestuurt." },
                { term: "Boren en kotteren", children: "Een gat boren of ruimer kotteren." },
              ]}
            />
            <p className="mt-5 max-w-[68ch]">
              Het materiaal mag verschillen: verschillende soorten metalen en legeringen. Stuur de maten, een schets of een tekening mee.
            </p>
          </div>
        </Container>
      </section>
      <section data-section="werkplaats" className="border-t-[3px] border-navy bg-mist">
        <Container className="grid items-start gap-4 py-12 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)]">
          <Shot photo={draai} label="Draaibank" />
          <Shot photo={frees} label="Freesbank" />
        </Container>
      </section>
      <section data-section="ernaast">
        <Container className="py-12">
          <h2>In dezelfde hal</h2>
          <Ticket
            rows={[
              {
                term: "Tekenen",
                children: (
                  <>
                    Een idee begint op de tekentafel.{" "}
                    <Link href="/3d-tekenen" className="underline decoration-2 underline-offset-4">
                      Samen wordt het ontwerp behandeld
                    </Link>{" "}
                    voordat het gedraaid of gefreesd wordt.
                  </>
                ),
              },
              {
                term: "Lassen",
                children: (
                  <>
                    Een gedraaid deel kan in dezelfde werkplaats{" "}
                    <Link href="/lassen" className="underline decoration-2 underline-offset-4">
                      gelast
                    </Link>{" "}
                    worden, in RVS, staal of aluminium.
                  </>
                ),
              },
              {
                term: "Meenemen",
                children: (
                  <>
                    Kokers, buizen, strippen en plaat liggen hier ook.{" "}
                    <Link href="/materiaal" className="underline decoration-2 underline-offset-4">
                      Op lengte gezaagd, direct mee.
                    </Link>
                  </>
                ),
              },
            ]}
          />
        </Container>
      </section>
      <CtaBand
        title="Een as, een bus of een freesdeel?"
        text="Stuur de maten, een schets of een tekening. Zet het materiaal erbij. Maikel bekijkt uw aanvraag en neemt contact op."
      />
    </>
  );
}
