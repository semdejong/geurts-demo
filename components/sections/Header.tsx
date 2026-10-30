import { ctaType } from "@/lib/cta";
import { content } from "@/content";

export default function Header() {
  const { company, nav, contact } = content;
  return (
    <header data-section="header" className="sticky top-0 z-40 border-b border-black/5 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          {company.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={company.logo} alt={`${company.name} logo`} className="h-9 w-auto" />
          )}
          <span className="text-lg">{company.name}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="opacity-80 transition hover:opacity-100">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={contact.cta.href}
          data-cta={ctaType(contact.cta.href)}
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-fg shadow-sm transition hover:opacity-90"
        >
          {contact.cta.label}
        </a>
      </div>
    </header>
  );
}
