import { hoursRows } from "@/lib/hours";
import { OpenStatus } from "@/components/open-status";

export function HoursTable({ showStatus = true }: { showStatus?: boolean }) {
  return (
    <div>
      {showStatus ? (
        <div className="mb-4">
          <OpenStatus />
        </div>
      ) : null}
      <dl className="hours">
        {hoursRows.map((row) => (
          <div key={row.label} className={row.highlight ? "bg-mist px-3" : undefined}>
            <dt>{row.label}</dt>
            <dd>
              {row.value}
              {row.highlight ? (
                <span className="mt-0.5 block font-sans text-base normal-case tracking-normal">Zaterdagochtend</span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
