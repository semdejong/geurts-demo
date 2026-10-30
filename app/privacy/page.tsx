import type { Metadata } from "next";
import { Container, PageHero } from "@/components/page-hero";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van Maikel Geurts Metaalbewerking in Eibergen. Hoe wij omgaan met gegevens op deze website.",
};

export default function PrivacyPage() {
  const { company } = content;
  return (
    <>
    <PageHero
      profile="plaat"
      code="PLAAT 100×6 · PRIVACY"
      title="Privacy"
      lede={`${company.name}, KvK ${company.kvk}, ${company.street}, ${company.postalCode} ${company.city}, is verantwoordelijk voor deze website.`}
    />
    <section data-section="privacy">
      <Container className="py-12">
        <dl className="border-t-[3px] border-navy">
          <div className="grid gap-2 border-b-2 border-navy py-5 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6">
            <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Formulieren</dt>
            <dd className="max-w-[68ch]">
              De formulieren op deze conceptsite verzenden niets en slaan niets op. Een bestand dat u kiest, verlaat uw apparaat niet.
              Wilt u een prijs of een vraag kwijt, bel{" "}
              <a href={company.phoneTel} data-cta="bellen" className="underline decoration-2 underline-offset-4">
                {company.phoneDisplay}
              </a>{" "}
              of mail{" "}
              <a href={`mailto:${company.email}`} data-cta="mailen" className="underline decoration-2 underline-offset-4">
                {company.email}
              </a>
              .
            </dd>
          </div>
          <div className="grid gap-2 border-b-2 border-navy py-5 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6">
            <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Tellen</dt>
            <dd className="max-w-[68ch]">
              Wij gebruiken geen volgcookies. Voor deze conceptsite draait een cookieloos tellerscript van Sleads. Dat script maakt geen profiel van u.
            </dd>
          </div>
          <div className="grid gap-2 border-b-2 border-navy py-5 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6">
            <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Vragen</dt>
            <dd className="max-w-[68ch]">
              Vragen over uw gegevens stelt u aan {company.street}, {company.postalCode} {company.city}, via{" "}
              {company.phoneDisplay} of {company.email}.
            </dd>
          </div>
        </dl>
      </Container>
    </section>
    </>
  );
}
