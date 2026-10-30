"use client";

import { useEffect, useState } from "react";
import { openStatus } from "@/lib/hours";

const FALLBACK = "Maandag t/m vrijdag\u00a008:00\u2060–\u206017:30, zaterdag\u00a008:00\u2060–\u206012:00. Zondag gesloten.";

export function OpenStatus({ inverse = false }: { inverse?: boolean }) {
  const [state, setState] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    const update = () => setState(openStatus(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const open = state?.open ?? false;
  const mark = open ? (inverse ? "bg-spark" : "bg-navy") : "bg-steel";

  return (
    <p className="font-mono text-[0.95rem] leading-snug" role="status" aria-live="polite">
      <span aria-hidden className={`mr-2 inline-block h-3 w-3 translate-y-px align-middle ${state ? mark : "bg-transparent"}`} />
      {state?.text ?? FALLBACK}
    </p>
  );
}
