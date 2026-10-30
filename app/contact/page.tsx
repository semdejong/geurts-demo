import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock } from "@/components/contact-block";
import { ContactForm } from "@/components/contact-form";
import { Container, PageHero } from "@/components/page-hero";
import { CatalogueLabel } from "@/components/profiles";
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
        lede={`${company.street}, ${company.postalCode} ${company.city}, ${company.area}.`}
      >
        <a href={company.phoneTel} data-cta="bellen" className="btn btn-navy">
          Bel {company.phoneDisplay}
        </a>
        <a href={`mailto:${company.email}`} data-cta="mailen" className="btn btn-line">
          {company.email}
        </a>
      </PageHero>
      <section data-section="twee-deuren" className="border-b-[3px] border-navy">
        <Container className="grid sm:grid-cols-3">
          {(
            [
              { href: "/particulier", id: "hoek" as const, code: "THUIS", title: "Particulier", text: "Hek, trap, reparatie of tuintafel." },
              { href: "/zakelijk", id: "u" as const, code: "BEDRIJF", title: "Zakelijk", text: "Filterkast, constructie of draaiwerk." },
              { href: "/materiaal", id: "strip" as const, code: "MAGAZIJN", title: "Materiaal", text: "Zaterdag tot 12:00, direct mee." },
            ] as const
          ).map((item) => (
            <Link key={item.href} href={item.href} className="block border-b-2 border-navy py-5 sm:border-b-0 sm:border-r-2 sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0">
              <CatalogueLabel id={item.id} code={item.code} />
              <h2 className="mt-4">{item.title}</h2>
              <p className="mt-2">{item.text}</p>
            </Link>
          ))}
        </Container>
      </section>
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
