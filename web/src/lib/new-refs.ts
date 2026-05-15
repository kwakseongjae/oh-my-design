/**
 * Dev-only "NEW" badge gate.
 *
 * Lists reference ids added in the latest batch. UI surfaces a "NEW" pill
 * on cards (landing wall, design-systems catalog) only when
 * `process.env.NODE_ENV === "development"`, so production rendering stays
 * unchanged while local dev gives a quick visual diff for the latest batch.
 *
 * Update on each batch — set this to the just-added id list, not the
 * cumulative history. Goal: at-a-glance diff, not changelog.
 */

export const NEW_REFS = new Set<string>([
  // 2026-05-15 KR-10 batch
  "toss-securities",
  "oliveyoung",
  "gmarket",
  "tving",
  "catchtable",
  "upstage",
  "dabang",
  "jumpit",
  "fastcampus",
]);

export const NEW_BATCH_DATE = "2026-05-15";

/** True only in `next dev` (NODE_ENV=development) AND id ∈ NEW_REFS. */
export function isNewRef(id: string): boolean {
  if (process.env.NODE_ENV !== "development") return false;
  return NEW_REFS.has(id);
}
