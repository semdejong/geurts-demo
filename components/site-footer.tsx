import Link from "next/link";
import { content } from "@/content";
import { hoursRows } from "@/lib/hours";

const links = [
  { label: "Werkzaamheden", href: "/werkzaamheden" },
  { label: "Lassen", href: "/lassen" },
  { label: "Draaien en frezen", href: "/draaien-frezen" },
  { label: "3D tekenen", href: "/3d-tekenen" },
  { label: "Projecten", href: "/projecten" },
  { label: "Materiaal halen", href: "/materiaal" },
  { label: "Certificeringen", href: "/certificeringen" },
  { label: "Referenties", href: "/referenties" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export function SiteFooter() {
  const { company } = content;
  return (
    <footer data-section="footer" className="on-navy bg-navy">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">
            <span aria-hidden className="mr-2 inline-block h-2 w-2 translate-y-[-0.35rem] bg-[#E41818]" />
            {company.name}
          </p>
          <p className="mt-4">
            {company.street}
            <br />
            {company.postalCode} {company.city}
            <br />
            {company.area}
          </p>
          <p className="mt-4">
            <a href={company.phoneTel} data-cta="bellen" className="underline decoration-2 underline-offset-4">
              {company.phoneDisplay}
            </a>
            <br />
            <a href={company.mobileTel} data-cta="bellen" className="underline decoration-2 underline-offset-4">
              {company.mobileDisplay}
            </a>
            <br />
            <a href={`mailto:${company.email}`} data-cta="mailen" className="underline decoration-2 underline-offset-4">
              {company.email}
            </a>
          </p>
          <p className="mt-4 font-mono text-sm">KvK {company.kvk}</p>
        </div>
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-spark">Openingstijden</p>
          <ul className="mt-4">
            {hoursRows.map((row) => (
              <li key={row.label} className="flex justify-between gap-4 border-t border-white/30 py-1.5 font-mono text-sm">
                <span>{row.label}</span>
                <span className="tabular-nums">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-spark">Inhoud</p>
          <ul className="mt-4 grid grid-cols-1 gap-1">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center font-semibold text-spark">
                Prijs aanvragen
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm">
            <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Concept door Sleads
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
