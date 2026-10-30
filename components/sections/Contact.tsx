import { ctaType } from "@/lib/cta";
import { content } from "@/content";

export default function Contact() {
  const { contact } = content;
  return (
    <section id="contact" data-section="contact" className="scroll-mt-20 bg-brand text-brand-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">{contact.title}</h2>
          <p className="mt-4 max-w-lg opacity-85">{contact.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={contact.cta.href} data-cta={ctaType(contact.cta.href)} className="rounded-full bg-accent px-6 py-3 font-semibold text-black shadow transition hover:opacity-90">{contact.cta.label}</a>
            <a href={`mailto:${contact.email}`} data-cta="mailen" className="rounded-full border border-current/40 px-6 py-3 font-semibold transition hover:bg-white/10">Mail ons</a>
            {contact.whatsapp && (
              <a href={`https://wa.me/${contact.whatsapp}`} className="rounded-full border border-current/40 px-6 py-3 font-semibold transition hover:bg-white/10">WhatsApp</a>
            )}
          </div>
        </div>
        <dl className="grid gap-5 rounded-2xl bg-white/10 p-6 text-sm sm:grid-cols-2">
          <div><dt className="font-semibold">Telefoon</dt><dd className="mt-1 opacity-85"><a href={`tel:${contact.phone.replace(/\s/g, "")}`} data-cta="bellen">{contact.phone}</a></dd></div>
          <div><dt className="font-semibold">E-mail</dt><dd className="mt-1 break-all opacity-85"><a href={`mailto:${contact.email}`} data-cta="mailen">{contact.email}</a></dd></div>
          <div><dt className="font-semibold">Adres</dt><dd className="mt-1 opacity-85">{contact.address}</dd></div>
          <div><dt className="font-semibold">Openingstijden</dt><dd className="mt-1 opacity-85">{contact.openingHours.map((h) => <div key={h}>{h}</div>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}
