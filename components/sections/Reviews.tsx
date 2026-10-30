import { content } from "@/content";

export default function Reviews() {
  const { reviews } = content;
  return (
    <section id="reviews" data-section="reviews" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <h2 className="text-3xl font-bold sm:text-4xl">{reviews.title}</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.items.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-black/5 p-6 shadow-sm">
            <div className="text-accent" aria-label={`${r.rating} van 5 sterren`}>{"★".repeat(r.rating)}</div>
            <blockquote className="mt-3 leading-relaxed opacity-85">“{r.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">{r.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
