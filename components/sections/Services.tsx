import { content } from "@/content";

export default function Services() {
  const { services } = content;
  return (
    <section id="diensten" data-section="diensten" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <h2 className="text-3xl font-bold sm:text-4xl">{services.title}</h2>
      <p className="mt-3 max-w-2xl opacity-75">{services.intro}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((s) => (
          <div key={s.title} className="rounded-2xl border border-black/5 bg-muted p-6 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-3xl" aria-hidden>{s.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-80">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
