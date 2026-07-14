export interface SpacingTokenRow {
  value: number;
  purpose?: string;
}

/** Present spacing as a scale: smallest to largest, with deterministic ties. */
export function orderSpacingScale<T extends SpacingTokenRow>(rows: readonly T[]): T[] {
  return [...rows].sort(
    (a, b) => a.value - b.value || (a.purpose ?? "").localeCompare(b.purpose ?? ""),
  );
}
