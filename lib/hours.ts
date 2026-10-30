/** Openingstijden, Europe/Amsterdam. Einde is exclusief: om 17:30 is de zaak dicht. */

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const hoursRows: { label: string; value: string; highlight?: boolean }[] = [
  { label: "Maandag", value: "08:00–17:30" },
  { label: "Dinsdag", value: "08:00–17:30" },
  { label: "Woensdag", value: "08:00–17:30" },
  { label: "Donderdag", value: "08:00–17:30" },
  { label: "Vrijdag", value: "08:00–17:30" },
  { label: "Zaterdag", value: "08:00–12:00", highlight: true },
  { label: "Zondag", value: "Gesloten" },
];

const DAY_INDEX: Record<string, Weekday> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const NEXT_DAY = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

export function amsterdamClock(date: Date): { day: Weekday; minutes: number } {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const parts = Object.fromEntries(fmt.formatToParts(date).map((part) => [part.type, part.value]));
  const day = DAY_INDEX[parts.weekday] ?? 1;
  let hour = Number(parts.hour);
  if (hour === 24) hour = 0;
  const minute = Number(parts.minute);
  return { day, minutes: hour * 60 + minute };
}

/** [start, end) in minuten vanaf middernacht. null = gesloten. */
export function dayRange(day: Weekday): [number, number] | null {
  if (day === 0) return null;
  if (day === 6) return [8 * 60, 12 * 60];
  return [8 * 60, 17 * 60 + 30];
}

export function openStatus(date: Date): { open: boolean; text: string } {
  const { day, minutes } = amsterdamClock(date);
  const today = dayRange(day);

  if (today && minutes >= today[0] && minutes < today[1]) {
    const end = day === 6 ? "12:00" : "17:30";
    return { open: true, text: `Nu open, vandaag tot ${end}` };
  }

  if (today && minutes < today[0]) {
    return { open: false, text: "Nu gesloten, vandaag vanaf 08:00" };
  }

  for (let step = 1; step <= 7; step += 1) {
    const next = ((day + step) % 7) as Weekday;
    if (dayRange(next)) {
      return { open: false, text: `Nu gesloten, ${NEXT_DAY[next]} vanaf 08:00` };
    }
  }

  return { open: false, text: "Nu gesloten" };
}
