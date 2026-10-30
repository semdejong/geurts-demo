import { content } from "@/content";

export default function About() {
  const { about } = content;
  return (
    <section id="over-ons" data-section="over-ons" className="scroll-mt-20 bg-muted">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">{about.title}</h2>
          {about.text.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed opacity-80">{p}</p>
          ))}
        </div>
        {about.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={about.image} alt="" className="aspect-[4/3] w-full rounded-2xl object-cover shadow" />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-background p-5 text-center shadow-sm">
                <div className="text-3xl font-bold text-brand">{s.value}</div>
                <div className="mt-1 text-xs opacity-70">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
