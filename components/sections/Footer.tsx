import { content } from "@/content";

export default function Footer() {
  const { company, footer, contact } = content;
  return (
    <footer data-section="footer" className="border-t border-black/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 pb-16 text-sm opacity-75 sm:flex-row sm:items-center sm:justify-between sm:pb-8">
        <p>© {company.name}{footer.kvk && ` · ${footer.kvk}`} · {contact.address}</p>
        <div className="flex flex-wrap gap-4">
          {footer.socials.map((s) => <a key={s.href} href={s.href} className="hover:underline">{s.label}</a>)}
          <a href="https://sleads.nl" target="_blank" rel="noopener" className="hover:underline">Concept door Sleads</a>
        </div>
      </div>
    </footer>
  );
}
