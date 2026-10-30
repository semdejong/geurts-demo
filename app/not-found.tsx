import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/page-hero";
import { CatalogueLabel } from "@/components/profiles";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina bestaat niet. Ga terug naar de werkplaats van Maikel Geurts Metaalbewerking in Eibergen.",
};

export default function NotFound() {
  return (
    <section data-section="niet-gevonden" className="border-b-[3px] border-navy">
      <Container className="py-16">
        <CatalogueLabel id="strip" code="STRIP 50×5 · 404" />
        <h1 className="mt-4 max-w-[12ch]">Deze pagina bestaat niet.</h1>
        <p className="mt-5 max-w-[68ch]">De pagina die u zoekt staat niet op deze site.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-navy">
            Naar de homepage
          </Link>
          <Link href="/contact" data-cta="offerte" className="btn btn-line">
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
