"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content } from "@/content";

function isActive(pathname: string, href: string) {
  if (href === "/werkzaamheden") {
    return ["/werkzaamheden", "/lassen", "/draaien-frezen", "/3d-tekenen"].includes(pathname);
  }
  if (href === "/projecten") return pathname.startsWith("/projecten");
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { company, nav } = content;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header data-section="header" className="sticky top-0 z-40 border-b-[3px] border-navy bg-paper">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="shrink-0" aria-label={company.name}>
          <Image
            src={company.logo}
            alt={company.name}
            width={675}
            height={327}
            loading="eager"
            className="h-12 w-auto md:h-[4.25rem]"
          />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`inline-flex min-h-11 items-center text-[0.98rem] ${
                isActive(pathname, item.href) ? "underline decoration-[3px] underline-offset-[10px]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={company.phoneTel}
            data-cta="bellen"
            className="hidden min-h-11 items-center font-mono text-[0.95rem] text-navy xl:inline-flex"
          >
            {company.phoneDisplay}
          </a>
          <Link href="/offerte" data-cta="offerte" className="btn btn-navy px-3 text-[0.95rem]">
            Prijs aanvragen
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
            <span aria-hidden className="flex w-5 flex-col gap-1">
              <span className="block h-0.5 bg-navy" />
              <span className="block h-0.5 bg-navy" />
              <span className="block h-0.5 bg-navy" />
            </span>
          </button>
        </div>
      </div>
      <div className="border-t-2 border-navy px-5 py-2 lg:hidden">
        <a href={company.phoneTel} data-cta="bellen" className="inline-flex min-h-11 items-center font-mono text-navy">
          {company.phoneDisplay}
        </a>
      </div>
      {open ? (
        <nav id="mobiel-menu" aria-label="Hoofdmenu" className="border-t-[3px] border-navy lg:hidden">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b-2 border-navy">
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="flex min-h-11 items-center px-5 font-display text-2xl text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
