import { content } from "@/content";
import { HoursTable } from "@/components/hours";

export function ContactBlock() {
  const { company } = content;
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <address className="not-italic">
        <p className="font-display text-4xl leading-none text-navy md:text-5xl">{company.name}</p>
        <p className="mt-4 font-mono text-lg leading-relaxed">
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
        <p className="mt-4">
          {company.street}
          <br />
          {company.postalCode} {company.city}
        </p>
        <p className="mt-2">{company.area}</p>
        <p className="mt-4">
          <a href={company.mapsHref} target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4">
            Route op Google Maps
          </a>
        </p>
      </address>
      <HoursTable />
    </div>
  );
}
