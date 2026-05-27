/**
 * "NEW" badge gate — time-windowed.
 *
 * A reference shows the NEW pill when (a) its id is in the latest batch set
 * AND (b) the batch was uploaded within the last 7 days. After the window
 * elapses the badge disappears automatically — no code change required.
 *
 * Update on each batch:
 *   1. set NEW_REFS to the just-added id list (not cumulative history)
 *   2. set NEW_BATCH_DATE to the upload date (YYYY-MM-DD)
 *
 * Unlike the previous dev-only gate, this surfaces in production too — NEW is
 * a genuine "just landed" signal for visitors, not a local diff aid.
 */

export const NEW_REFS = new Set<string>([
  // 2026-05-27 KR-10 batch
  "tossbank", "kakaot", "naverwebtoon", "yogiyo", "wavve",
  "wconcept", "millie", "tada", "publy", "tumblbug",
]);

export const NEW_BATCH_DATE = "2026-05-27";

/** Days a reference stays "NEW" after its batch upload date. */
export const NEW_WINDOW_DAYS = 7;

/** True when id ∈ NEW_REFS AND the batch is within the NEW window. */
export function isNewRef(id: string, now: Date = new Date()): boolean {
  if (!NEW_REFS.has(id)) return false;
  const added = Date.parse(`${NEW_BATCH_DATE}T00:00:00Z`);
  if (Number.isNaN(added)) return false;
  const ageMs = now.getTime() - added;
  return ageMs >= 0 && ageMs < NEW_WINDOW_DAYS * 24 * 60 * 60 * 1000;
}
