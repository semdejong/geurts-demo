import { ctaType } from "@/lib/cta";
import { content } from "@/content";

export default function Hero() {
  const { hero, company } = content;
  return (
    <section id="top" data-section="hero" className="relative overflow-hidden">
      {hero.image ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand/70" />
      )}
      <div className="relative mx-auto max-w-6xl px-5 py-24 text-white sm:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/80">{company.tagline}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">{hero.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85">{hero.subtitle}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={hero.primaryCta.href} data-cta={ctaType(hero.primaryCta.href)} className="rounded-full bg-accent px-6 py-3 font-semibold text-black shadow transition hover:opacity-90">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10">
            {hero.secondaryCta.label}
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/85">
          {hero.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2"><span aria-hidden>✓</span>{h}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
