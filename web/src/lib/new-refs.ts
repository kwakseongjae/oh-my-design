/**
 * "NEW" badge gate — fully automatic, time-windowed.
 *
 * A reference shows the NEW pill when its `added` date (set in the DESIGN.md
 * frontmatter, flows into the registry) is within the last `NEW_WINDOW_DAYS`.
 * After the window elapses the badge disappears on its own — no code change,
 * no manual id list to keep in sync.
 *
 * `added` is deliberately separate from `verified`: `verified` is the last
 * re-audit date (bumps on every re-check), while `added` is when the reference
 * first landed. Using `added` keeps NEW honest — re-verifying an old brand does
 * not make it "new" again. References without an `added` date never show NEW.
 *
 * To ship a new batch: just set `added: "YYYY-MM-DD"` in each new DESIGN.md.
 */

import { REGISTRY_BY_ID } from '@/data/registry.generated';

/** Days a reference stays "NEW" after its `added` date. */
export const NEW_WINDOW_DAYS = 7;

/** True when the reference's `added` date is within the NEW window. */
export function isNewRef(id: string, now: Date = new Date()): boolean {
  const added = REGISTRY_BY_ID[id]?.added;
  if (!added) return false;
  const addedMs = Date.parse(`${added}T00:00:00Z`);
  if (Number.isNaN(addedMs)) return false;
  const ageMs = now.getTime() - addedMs;
  return ageMs >= 0 && ageMs < NEW_WINDOW_DAYS * 24 * 60 * 60 * 1000;
}
