export type ProfileId = "koker" | "buis" | "strip" | "hoek" | "u" | "plaat" | "as" | "iso" | "las";

const RATIO: Record<ProfileId, string> = {
  koker: "40 / 40",
  buis: "48.3 / 48.3",
  strip: "50 / 5",
  hoek: "40 / 40",
  u: "45 / 80",
  plaat: "100 / 6",
  as: "40 / 40",
  iso: "60 / 80",
  las: "40 / 40",
};

function ring(cx: number, cy: number, r: number) {
  return `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0 Z`;
}

function iso(points: [number, number, number][]) {
  const cos = Math.cos(Math.PI / 6);
  return (
    points
      .map(([x, y, z], index) => {
        const px = (x - y) * cos;
        const py = (x + y) * 0.5 - z;
        return `${index === 0 ? "M" : "L"}${px.toFixed(2)} ${py.toFixed(2)}`;
      })
      .join(" ") + " Z"
  );
}

function paths(id: ProfileId) {
  if (id === "koker") {
    return <path fill="currentColor" fillRule="evenodd" d="M0 0 H40 V40 H0 Z M3 3 H37 V37 H3 Z" />;
  }
  if (id === "buis") {
    return (
      <path
        fill="currentColor"
        fillRule="evenodd"
        d={`${ring(24.15, 24.15, 24.15)} ${ring(24.15, 24.15, 21.55)}`}
      />
    );
  }
  if (id === "strip") return <rect width="50" height="5" fill="currentColor" />;
  if (id === "hoek") return <path fill="currentColor" d="M0 0 H40 V4 H4 V40 H0 Z" />;
  if (id === "u") return <path fill="currentColor" d="M0 0 H45 V8 H6 V72 H45 V80 H0 Z" />;
  if (id === "plaat") return <rect width="100" height="6" fill="currentColor" />;
  if (id === "as") return <circle cx="20" cy="20" r="20" fill="currentColor" />;
  if (id === "las") {
    return (
      <>
        <path fill="currentColor" d="M0 0 H40 V4 H4 V40 H0 Z" />
        <path d="M6 16 A10 10 0 0 1 16 6" fill="none" stroke="currentColor" strokeWidth="1.35" />
        <path d="M6 12.5 A6.5 6.5 0 0 1 12.5 6" fill="none" stroke="currentColor" strokeWidth="1.35" />
        <path d="M6 9 A3 3 0 0 1 9 6" fill="none" stroke="currentColor" strokeWidth="1.35" />
      </>
    );
  }
  const outer: [number, number, number][] = [
    [0, 0, 0],
    [40, 0, 0],
    [40, 0, 40],
    [0, 0, 40],
  ];
  const inner: [number, number, number][] = [
    [3, 0, 3],
    [37, 0, 3],
    [37, 0, 37],
    [3, 0, 37],
  ];
  const top: [number, number, number][] = [
    [0, 0, 40],
    [40, 0, 40],
    [40, 22, 40],
    [0, 22, 40],
  ];
  const side: [number, number, number][] = [
    [40, 0, 0],
    [40, 0, 40],
    [40, 22, 40],
    [40, 22, 0],
  ];
  return (
    <>
      <path fill="currentColor" d={iso(top)} opacity="0.85" />
      <path fill="currentColor" d={iso(side)} opacity="0.7" />
      <path fill="currentColor" fillRule="evenodd" d={`${iso(outer)} ${iso(inner)}`} />
    </>
  );
}

const VIEWBOX: Record<ProfileId, string> = {
  koker: "0 0 40 40",
  buis: "0 0 48.3 48.3",
  strip: "0 0 50 5",
  hoek: "0 0 40 40",
  u: "0 0 45 80",
  plaat: "0 0 100 6",
  as: "0 0 40 40",
  iso: "-22 -44 60 80",
  las: "0 0 40 40",
};

export function Profile({
  id,
  className = "",
  label,
}: {
  id: ProfileId;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox={VIEWBOX[id]}
      className={`block ${className}`}
      style={{ aspectRatio: RATIO[id] }}
      role={label ? "img" : undefined}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      {paths(id)}
    </svg>
  );
}

/** Eén keer op de site: de naad tussen particulier en zakelijk. */
export function WeldBead({ className = "" }: { className?: string }) {
  const ripples = Array.from({ length: 46 }, (_, index) => index);
  return (
    <svg viewBox="0 0 700 32" className={`weld-once block h-8 w-full text-navy ${className}`} aria-hidden>
      {ripples.map((index) => (
        <ellipse
          key={index}
          cx={10 + index * 15}
          cy={16}
          rx={11}
          ry={6.2}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.45"
        />
      ))}
    </svg>
  );
}

const STACK: { id: ProfileId; band: "rvs" | "staal" | "alu"; className: string }[] = [
  { id: "buis", band: "rvs", className: "h-14 w-auto" },
  { id: "koker", band: "staal", className: "h-12 w-auto" },
  { id: "hoek", band: "alu", className: "h-12 w-auto" },
  { id: "u", band: "rvs", className: "h-20 w-auto" },
  { id: "strip", band: "staal", className: "h-2 w-auto" },
  { id: "plaat", band: "alu", className: "h-2 w-auto" },
];

export function ProfileStack({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-2.5 ${className}`} aria-hidden>
      {STACK.map((row) => (
        <div key={row.id} className="flex items-center gap-2">
          <MaterialMark material={row.band} />
          <Profile id={row.id} className={`${row.className} text-navy`} />
        </div>
      ))}
    </div>
  );
}

export function MaterialMark({
  material,
  onNavy = false,
  className = "",
}: {
  material: "rvs" | "staal" | "alu";
  onNavy?: boolean;
  className?: string;
}) {
  const tone =
    material === "rvs"
      ? "bg-steel"
      : material === "staal"
        ? onNavy
          ? "bg-navy outline outline-1 outline-white"
          : "bg-navy"
        : "border border-navy bg-white";
  return <span aria-hidden className={`inline-block h-3.5 w-9 shrink-0 ${tone} ${className}`} />;
}

export function CatalogueLabel({
  id,
  code,
  className = "",
  inverse = false,
}: {
  id?: ProfileId;
  code: string;
  className?: string;
  inverse?: boolean;
}) {
  const wide = id === "strip" || id === "plaat";
  return (
    <div className={`bar-in flex min-w-0 items-center gap-3 ${inverse ? "text-white" : "text-navy"} ${className}`}>
      {id ? <Profile id={id} className={wide ? "h-auto w-16 shrink-0" : "h-8 w-auto shrink-0"} /> : null}
      <p className="min-w-0 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em]">{code}</p>
    </div>
  );
}
