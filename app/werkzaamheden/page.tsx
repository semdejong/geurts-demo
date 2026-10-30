import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { CatalogueLabel, Profile, type ProfileId } from "@/components/profiles";
import { Shot, Ticket } from "@/components/sheet";
import { beeld } from "@/lib/projects";
import type { Photo } from "@/lib/types";

export const metadata: Metadata = {
  title: "Werkzaamheden",
  description:
    "Lassen, draaien en frezen, 3D tekenen, zagen en monteren. Eén werkplaats in Eibergen, vanaf idee tot realisatie.",
};

export default function WerkzaamhedenPage() {
  const lassen = beeld("/img/werkplaats/lassen.jpg");
  const draai = beeld("/img/werkplaats/draaibank.jpg");
  const frees = beeld("/img/werkplaats/freesbank.jpg");
  const tekenen = beeld("/img/werkplaats/tekenen.jpg");

  const services: {
    href: string;
    title: string;
    text: string;
    more: string;
    profile: ProfileId;
    photo: Photo;
    extra?: Photo;
    label: string;
  }[] = [
    {
      href: "/lassen",
      title: "Lassen",
      text: "TIG-lassen, MIG/MAG-lassen en elektrode-lassen. In roestvast staal, aluminium, staal, gietijzer en gietaluminium.",
      more: "Aluminium lassen vraagt vakmanschap en speciale lasapparatuur. Daarna kan het werk gegalvaniseerd, gespoten of gepoedercoat worden.",
      profile: "las",
      photo: lassen,
      label: "Lastafel · TIG",
    },
    {
      href: "/draaien-frezen",
      title: "Draaien en frezen",
      text: "Draadsnijden, spiebaan brootsen, bussen en assen draaien, boren en kotteren.",
      more: "In verschillende soorten metalen en legeringen. Stuur een schets of een tekening mee.",
      profile: "buis",
      photo: draai,
      extra: frees,
      label: "Draaibank",
    },
    {
      href: "/3d-tekenen",
      title: "3D tekenen",
      text: "Een idee begint op de tekentafel. Samen met u wordt het ontwerp uitvoerig behandeld voordat het in de werkplaats wordt gemaakt.",
      more: "Daarna volgt het maken: lassen, draaien, frezen, en als het nodig is plaatsen en monteren.",
      profile: "iso",
      photo: tekenen,
      label: "Tekenscherm",
    },
  ];

  return (
    <>
      <PageHero
        profile="las"
        code="HOEK 40×40×4 · LASNAAD"
        title="Werkzaamheden"
        lede="Vanaf idee tot realisatie. Tekenen, lassen, draaien, frezen, zagen en monteren onder één dak in Eibergen."
      />
      <section data-section="diensten">
        <Container className="py-4">
          {services.map((service) => (
            <article key={service.href} className="grid gap-6 border-b-2 border-navy py-10 lg:grid-cols-2">
              <div>
                <Profile id={service.profile} className="h-14 w-auto text-navy" />
                <h2 className="mt-4">{service.title}</h2>
                <p className="mt-3 max-w-[68ch]">{service.text}</p>
                <p className="mt-3 max-w-[68ch]">{service.more}</p>
                <Link href={service.href} className="btn btn-line mt-5">
                  {service.title}
                </Link>
              </div>
              <div className={service.extra ? "grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] items-start gap-3" : ""}>
                <Shot photo={service.photo} label={service.label} />
                {service.extra ? <Shot photo={service.extra} label="Freesbank" /> : null}
              </div>
            </article>
          ))}
        </Container>
      </section>
      <section data-section="en-verder" className="bg-mist">
        <Container className="py-12">
          <h2>Van de zaag tot buiten de deur</h2>
          <p className="mt-4 max-w-[68ch]">
            Niet elk werk is een las of een as. In dezelfde hal wordt er ook gezaagd, gesneden, gekant en geknipt.
          </p>
          <Ticket
            rows={[
              { term: "Boren", children: "Boren, in dezelfde hal als het draaien en frezen." },
              { term: "Zagen", children: "Op lengte zagen. Ook voor materiaal dat u direct meeneemt." },
              { term: "Snijden", children: "Snijden van plaat en profiel." },
              { term: "Kanten", children: "Kanten van plaat." },
              { term: "Knippen", children: "Knippen van plaat." },
              { term: "Oppervlak", children: "Galvaniseren, spuiten en poedercoaten." },
              { term: "Buiten", children: "Plaatsen, monteren en inbedrijfstellen." },
            ]}
          />
        </Container>
      </section>
      <section data-section="voor-wie">
        <Container className="grid gap-px border-b-[3px] border-navy bg-navy py-0 sm:grid-cols-3">
          {(
            [
              { href: "/particulier", code: "THUIS", id: "hoek" as const, title: "Particulier", text: "Hek, trap, reparatie of tuintafel." },
              { href: "/zakelijk", code: "BEDRIJF", id: "u" as const, title: "Zakelijk", text: "Filterkast, constructie of inrichting." },
              { href: "/materiaal", code: "MAGAZIJN", id: "strip" as const, title: "Materiaal", text: "Op lengte gezaagd, direct mee." },
            ] as const
          ).map((item) => (
            <Link key={item.href} href={item.href} className="block bg-paper p-6">
              <CatalogueLabel id={item.id} code={item.code} />
              <h2 className="mt-4">{item.title}</h2>
              <p className="mt-2">{item.text}</p>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
