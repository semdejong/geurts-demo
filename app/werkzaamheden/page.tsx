import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Container, PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Profile } from "@/components/profiles";
import { beeld } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Werkzaamheden",
  description:
    "Lassen, draaien en frezen, 3D tekenen, zagen en monteren. Eén werkplaats in Eibergen, vanaf idee tot realisatie.",
};

const verder = [
  "Boren",
  "Zagen",
  "Snijden",
  "Kanten",
  "Knippen",
  "Galvaniseren, spuiten en poedercoaten",
  "Plaatsen, monteren en inbedrijfstellen",
];

export default function WerkzaamhedenPage() {
  const lassen = beeld("/img/werkplaats/lassen.jpg");
  const draai = beeld("/img/werkplaats/draaibank.jpg");
  const frees = beeld("/img/werkplaats/freesbank.jpg");
  const tekenen = beeld("/img/werkplaats/tekenen.jpg");

  const services = [
    {
      href: "/lassen",
      title: "Lassen",
      text: "TIG-lassen, MIG/MAG-lassen en elektrode-lassen. In roestvast staal, aluminium, staal, gietijzer en gietaluminium.",
      profile: <Profile id="las" className="h-14 w-auto text-navy" />,
      photo: lassen,
    },
    {
      href: "/draaien-frezen",
      title: "Draaien en frezen",
      text: "Draadsnijden, spiebaan brootsen, bussen en assen draaien, boren en kotteren. In verschillende soorten metalen en legeringen.",
      profile: (
        <div className="flex items-end gap-3">
          <Profile id="buis" className="h-14 w-auto text-navy" />
          <Profile id="u" className="h-14 w-auto text-navy" />
        </div>
      ),
      photo: draai,
      extra: frees,
    },
    {
      href: "/3d-tekenen",
      title: "3D tekenen",
      text: "Een idee begint op de tekentafel. Samen met u wordt het ontwerp uitvoerig behandeld voordat het in de werkplaats wordt gemaakt.",
      profile: <Profile id="iso" className="h-14 w-auto text-navy" />,
      photo: tekenen,
    },
  ];

  return (
    <>
      <PageHero
        profile="las"
        code="HOEK 40×40×4 · LASNAAD"
        title="Werkzaamheden"
        lede="Lassen, draaien, frezen en tekenen onder één dak. Daarna plaatsen en monteren wij het werk."
      />
      <section data-section="diensten">
        <Container className="py-12">
          {services.map((service) => (
            <article key={service.href} className="grid gap-6 border-t-[3px] border-navy py-8 lg:grid-cols-2">
              <div>
                {service.profile}
                <h2 className="mt-4">{service.title}</h2>
                <p className="mt-3 max-w-[68ch]">{service.text}</p>
                <Link href={service.href} className="btn btn-line mt-5">
                  {service.title}
                </Link>
              </div>
              <div className={service.extra ? "grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] gap-3" : ""}>
                <Photo src={service.photo.src} alt={service.photo.alt} w={service.photo.w} h={service.photo.h} className="border-[3px] border-navy" />
                {service.extra ? (
                  <Photo src={service.extra.src} alt={service.extra.alt} w={service.extra.w} h={service.extra.h} className="border-[3px] border-navy" />
                ) : null}
              </div>
            </article>
          ))}
          <div className="mt-4" data-section="en-verder">
            <h2>En verder</h2>
            <ul className="mt-4 border-t-[3px] border-navy">
              {verder.map((item) => (
                <li key={item} className="border-b-2 border-navy py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
