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
      lede={`${company.name}, ${company.street}, ${company.postalCode} ${company.city}, is verantwoordelijk voor deze website.`}
    />
    <section data-section="privacy">
      <Container className="max-w-[68ch] py-12">
        <div className="grid gap-4">
          <p>
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
          </p>
          <p>
            Wij gebruiken geen volgcookies. Voor deze conceptsite draait een cookieloos tellerscript van Sleads. Dat script maakt geen profiel van u.
          </p>
          <p>Vragen over uw gegevens stelt u aan hetzelfde adres, telefoonnummer of e-mailadres.</p>
        </div>
      </Container>
    </section>
    </>
  );
}
