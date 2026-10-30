import Link from "next/link";
import { content } from "@/content";

export function MobileBar() {
  const { company } = content;
  return (
    <div
      data-section="mobiele-balk"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t-[3px] border-navy bg-navy md:hidden"
    >
      <a href={company.phoneTel} data-cta="bellen" className="btn btn-line-light rounded-none border-0 border-r-2 border-white">
        Bellen
      </a>
      <Link href="/offerte" data-cta="offerte" className="btn btn-yellow rounded-none border-0">
        Prijs aanvragen
      </Link>
    </div>
  );
}
