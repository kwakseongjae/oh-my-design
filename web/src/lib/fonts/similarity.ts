/**
 * Tag-based font similarity. Deterministic, no AI.
 *
 * Given a reference font, finds the catalog entries closest in register.
 * Scoring combines:
 *   - Jaccard similarity on the pooled tag set (mood + era + use + personality)
 *   - Script overlap bonus (shared script = more substitutable)
 *   - Family match bonus (sans → sans > sans → serif)
 *   - Variable-capability match (user tweaking workflow only transfers across
 *     variable↔variable pairs, so same variability is rewarded)
 *
 * Hand-curated tag quality drives ranking quality. If tags are sloppy,
 * similarity results are sloppy — we intentionally keep AI out of this
 * step so that the catalog curator can predict and debug output.
 */

import type { FontEntry } from "./types";
import { FONT_CATALOG } from "./catalog";

/** Flatten a font's tag bag to a Set for overlap calculations. */
function tagSet(f: FontEntry): Set<string> {
  const s = new Set<string>();
  for (const t of f.tags.mood) s.add(`mood:${t}`);
  for (const t of f.tags.era) s.add(`era:${t}`);
  for (const t of f.tags.use) s.add(`use:${t}`);
  for (const t of f.tags.personality) s.add(`p:${t}`);
  return s;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  let intersection = 0;
  for (const v of a) if (b.has(v)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/** Component-wise similarity score. Higher = more similar. Range ~0-3. */
export function similarity(a: FontEntry, b: FontEntry): number {
  if (a.id === b.id) return 0;

  // Tag similarity is the main signal — most discriminative
  const jac = jaccard(tagSet(a), tagSet(b));
  let score = jac * 2.0;

  // Script overlap — shared scripts mean the fonts are substitutable in
  // the same layouts. Two-way hangul+latin fonts get full bonus; a
  // hangul-only vs latin-only pairing gets 0 here.
  const sharedScripts = a.scripts.filter((s) => b.scripts.includes(s)).length;
  score += sharedScripts * 0.35;

  // Family match — sans/serif/mono/display/handwritten taxonomy.
  // Cross-family matches still possible via tag overlap, just weighted down.
  if (a.family === b.family) score += 0.6;

  // Variable capability — user customization intent transfers better when
  // both fonts share variable support.
  if (a.variable === b.variable) score += 0.2;

  return score;
}

export interface SimilarityResult {
  font: FontEntry;
  score: number;
  /** Human-readable reason string shown in the UI ("shared mood: clean, modern"). */
  reasons: string[];
}

/** Find the top-N catalog fonts most similar to `reference`. */
export function findSimilar(
  reference: FontEntry,
  catalog: FontEntry[] = FONT_CATALOG,
  limit = 5,
): SimilarityResult[] {
  return catalog
    .filter((f) => f.id !== reference.id)
    .map((f) => ({
      font: f,
      score: similarity(reference, f),
      reasons: reasonsFor(reference, f),
    }))
    .filter((x) => x.score > 0.3) // threshold to avoid noisy matches
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function reasonsFor(a: FontEntry, b: FontEntry): string[] {
  const reasons: string[] = [];
  const sharedMood = a.tags.mood.filter((t) => b.tags.mood.includes(t));
  if (sharedMood.length > 0) {
    reasons.push(`shared mood: ${sharedMood.slice(0, 2).join(", ")}`);
  }
  const sharedUse = a.tags.use.filter((t) => b.tags.use.includes(t));
  if (sharedUse.length > 0 && reasons.length < 2) {
    reasons.push(`same use: ${sharedUse[0]}`);
  }
  if (a.family === b.family && reasons.length < 2) {
    reasons.push(`also ${b.family}`);
  }
  const sharedScripts = a.scripts.filter((s) => b.scripts.includes(s));
  if (sharedScripts.length > 0 && reasons.length < 2 && reasons.length === 0) {
    reasons.push(`covers ${sharedScripts.join(" + ")}`);
  }
  return reasons.slice(0, 2);
}
