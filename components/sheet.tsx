import type { ReactNode } from "react";
import Image from "next/image";
import { Photo } from "@/components/photo";
import type { Photo as PhotoData } from "@/lib/types";

export function Shot({
  photo,
  label,
  className = "",
  frame = false,
}: {
  photo: PhotoData;
  label: string;
  className?: string;
  frame?: boolean;
}) {
  return (
    <figure className={`min-w-0 ${className}`}>
      {frame ? (
        <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-navy">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 92vw, 480px"
            className="photo-grade object-cover"
          />
        </div>
      ) : (
        <Photo src={photo.src} alt={photo.alt} w={photo.w} h={photo.h} className="border-[3px] border-navy" />
      )}
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
