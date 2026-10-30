import type { ReactNode } from "react";
import { Photo } from "@/components/photo";
import type { Photo as PhotoData } from "@/lib/types";

export function Shot({ photo, label, className = "" }: { photo: PhotoData; label: string; className?: string }) {
  return (
    <figure className={`min-w-0 ${className}`}>
      <Photo src={photo.src} alt={photo.alt} w={photo.w} h={photo.h} className="border-[3px] border-navy" />
      <figcaption className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">{label}</figcaption>
    </figure>
  );
}

export function Ticket({ rows }: { rows: { term: string; children: ReactNode }[] }) {
  return (
    <dl className="border-t-[3px] border-navy">
      {rows.map((row) => (
        <div
          key={row.term}
          className="grid gap-1 border-b-2 border-navy py-4 md:grid-cols-[13rem_minmax(0,1fr)] md:items-baseline md:gap-6"
        >
          <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">{row.term}</dt>
          <dd className="max-w-[68ch]">{row.children}</dd>
        </div>
      ))}
    </dl>
  );
}
