import type { Metadata } from "next";
import { ContactBlock } from "@/components/contact-block";
import { ContactForm } from "@/components/contact-form";
import { Container, PageHero } from "@/components/page-hero";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Soetersveldweg 6C, 7151 JA Eibergen. Bel 0545 47 60 00 of mail info@maikelgeurtsmetaal.nl. Maandag t/m vrijdag 08:00–17:30, zaterdag 08:00–12:00.",
};

export default function ContactPage() {
  const { company } = content;
  return (
    <>
      <PageHero
        profile="strip"
        code="STRIP 50×5 · EIBERGEN"
        title="Contact en route"
        lede={`${company.street}, ${company.postalCode} ${company.city}. ${company.area}.`}
      >
        <a href={company.phoneTel} data-cta="bellen" className="btn btn-navy">
          Bel {company.phoneDisplay}
        </a>
        <a href={`mailto:${company.email}`} data-cta="mailen" className="btn btn-line">
          {company.email}
        </a>
      </PageHero>
      <section data-section="gegevens">
        <Container className="py-12">
          <ContactBlock />
        </Container>
      </section>
      <section data-section="formulier" className="border-t-[3px] border-navy">
        <Container className="grid gap-8 py-12 lg:grid-cols-2">
          <div>
            <h2>Stuur een korte vraag</h2>
            <p className="mt-4 max-w-[68ch]">
              Voor een prijs met een foto of schets gebruikt u het formulier voor een offerte. Hier kunt u een korte vraag achterlaten.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
