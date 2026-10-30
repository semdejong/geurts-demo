import Link from "next/link";
import { content } from "@/content";
import { Container } from "@/components/page-hero";
import { CatalogueLabel } from "@/components/profiles";

export function CtaBand({
  title = "Stuur een foto of een schets.",
  text = "Zet er het materiaal bij, de afmetingen, het aantal en of wij het moeten plaatsen. Maikel bekijkt uw aanvraag en neemt contact op.",
}: {
  title?: string;
  text?: string;
}) {
  const { company } = content;
  return (
    <section data-section="offerte-cta" className="on-navy bg-navy">
      <Container className="py-14 md:py-16">
        <CatalogueLabel id="koker" code="KOKER 40×40×3 · OFFERTE" inverse />
        <h2 className="mt-5 max-w-[16ch]">{title}</h2>
        <p className="mt-4 max-w-[68ch]">{text}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/offerte" data-cta="offerte" className="btn btn-yellow">
            Prijs aanvragen
          </Link>
          <a href={company.phoneTel} data-cta="bellen" className="btn btn-line-light">
            Bel {company.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
