import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { ProjectRows } from "@/components/project-rows";
import { Ticket } from "@/components/sheet";
import { particulierSlugs, projectsBySlugs } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Metaalwerk voor particulieren",
  description: "Balkonhek, trap, reparatie of tuintafel. Metaalwerk voor particulieren in Eibergen, en materiaal om mee te nemen.",
};

export default function ParticulierPage() {
  const { company } = content;
  const list = projectsBySlugs(particulierSlugs);

  return (
    <>
      <PageHero
        profile="hoek"
        code="HOEK 40×40×4 · THUIS"
        title="Metaalwerk voor thuis"
        lede="Een balkonhek, een trap, een reparatie of een tuintafel. U kunt ook kokers, buizen, strippen en plaat komen halen."
      >
        <Link href="/offerte#particulier" data-cta="offerte" className="btn btn-navy">
          Stuur uw vraag of schets
        </Link>
        <a href={company.phoneTel} data-cta="bellen" className="btn btn-line">
          Bel {company.phoneDisplay}
        </a>
      </PageHero>
      <section data-section="balie">
        <Container className="py-12">
          <h2>Wat u kunt brengen</h2>
          <p className="mt-4 max-w-[68ch]">
            Een foto van de plek is vaak genoeg. Zet er het materiaal bij, de maten en of wij het moeten plaatsen.
          </p>
          <div className="mt-6">
            <Ticket
              rows={[
                {
                  term: "Balkonhek",
                  children: (
                    <>
                      Hekken en leuningen aan een woning of gebouw.{" "}
                      <Link href="/projecten/balkonhekken-en-leuningen" className="underline decoration-2 underline-offset-4">
                        Bekijk de hekken
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  term: "Frans balkon",
                  children: (
                    <>
                      Een hek in de gevel, voor een deur zonder balkon.{" "}
                      <Link href="/projecten/frans-balkonhek" className="underline decoration-2 underline-offset-4">
                        Frans balkonhek
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  term: "Balustrade",
                  children: (
                    <>
                      Een leuning langs een gevel, ook met RVS-kabel.{" "}
                      <Link href="/projecten/balustrade-met-rvs-kabel" className="underline decoration-2 underline-offset-4">
                        Balustrade met kabel
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  term: "Trap",
                  children: (
                    <>
                      Een stalen trap met balustrade.{" "}
                      <Link href="/projecten/trap-balustrade-met-rvs-leuning" className="underline decoration-2 underline-offset-4">
                        Trap met leuning
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  term: "Tuintafel",
                  children: (
                    <>
                      Een tafelframe in RVS.{" "}
                      <Link href="/projecten/rvs-tuintafel" className="underline decoration-2 underline-offset-4">
                        RVS tuintafel
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  term: "Reparatie",
                  children: "Laswerk of een reparatie. Stuur een foto van het stuk en van de plek.",
                },
              ]}
            />
          </div>
        </Container>
      </section>
      <section data-section="zaterdag" className="border-y-[3px] border-navy bg-mist">
        <Container className="grid gap-6 py-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-navy">De Kiefte · zaterdag</p>
            <h2 className="mt-3 max-w-[14ch]">08:00 tot 12:00 aan de balie</h2>
            <p className="mt-4 max-w-[68ch]">
              Kokers, buizen, strippen en plaat in RVS, staal en aluminium, op lengte gezaagd. U neemt het direct mee. Zondag
              gesloten. Doordeweeks van 08:00 tot 17:30.
            </p>
          </div>
          <Link href="/materiaal" className="btn btn-navy">
            Materiaal halen
          </Link>
        </Container>
      </section>
      <section data-section="voorbeelden">
        <Container className="py-12">
          <h2>Gemaakt voor thuis</h2>
          <p className="mt-4 max-w-[68ch]">Balustrades, hekken, een trap en een tuintafel in RVS.</p>
          <div className="mt-6">
            <ProjectRows projects={list} />
          </div>
        </Container>
      </section>
      <CtaBand
        title="Stuur een foto van de plek."
        text="Een balkon, een trapgat of een gebroken leuning. Zet het materiaal erbij. Maikel bekijkt uw aanvraag en neemt contact op."
      />
    </>
  );
}
