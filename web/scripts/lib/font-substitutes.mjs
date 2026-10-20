/**
 * Measured font substitutes → web/src/data/font-substitutes.generated.json, the data behind
 * `getSubstitutes(referenceId)` (web/src/lib/fonts/substitutes.ts).
 *
 * Source: each reference's `reference.json` `fonts.substitutes.<brand family>.<script>` record
 * (spec/design-md-v3.md §6.3, §8.2), written by scripts/fonts/apply.mjs from a measurement. Only the
 * sidecar is read — the DESIGN.md frontmatter declares the same substitute (family, provider, label),
 * and web/src/lib/fonts/substitutes.test.ts holds the two in agreement. A record that is not a
 * labelled, measured, loadable substitute fails the build instead of shipping.
 */
import { join } from "node:path";
import { readReferenceSidecar } from "./reference-source.mjs";

export const SUBSTITUTE_LABEL = "substitute — not the brand face";
const SCRIPTS = new Set(["latin", "hangul", "kana", "han-hans", "han-hant"]);
const GOOGLE_CSS = /^https:\/\/fonts\.googleapis\.com\/css2\?family=[^&]+&display=swap$/;

function check(cond, where, message) {
  if (!cond) throw new Error(`[font-substitutes] ${where}: ${message}`);
}

/** One sidecar record → the FontSubstitute shape the accessor returns. */
function entry(id, brandFamily, script, rec) {
  const where = `${id} fonts.substitutes.${brandFamily}.${script}`;
  check(SCRIPTS.has(script), where, `unknown script '${script}'`);
  check(typeof rec?.family === "string" && rec.family.trim(), where, "no family");
  check(rec.family !== brandFamily, where, "a substitute cannot be the brand face itself");
  check(rec.label === SUBSTITUTE_LABEL, where, `label must be exactly "${SUBSTITUTE_LABEL}"`);
  check(rec.provider === "google" || rec.provider === "other", where, `provider '${rec.provider}' is not google | other`);
  if (rec.provider === "google") check(GOOGLE_CSS.test(rec.cssUrl ?? ""), where, "a Google Fonts substitute needs its css2 URL");
  if (rec.cssUrl !== undefined) check(/^https:\/\//.test(rec.cssUrl), where, "cssUrl must be https");
  const m = rec.metrics;
  check(m && typeof m.xHeightRatio === "number" && typeof m.avgAdvance === "number", where, "no measurement (metrics.xHeightRatio / avgAdvance)");
  check(m.delta && typeof m.delta.sample === "string" && typeof m.delta.tool === "string", where, "metrics.delta must name the sample and the tool");
  for (const [k, v] of Object.entries(m.delta)) check(typeof v === "number" || typeof v === "string", where, `delta.${k} must be a number or a string`);
  return {
    brandFamily,
    script,
    family: rec.family,
    provider: rec.provider,
    label: rec.label,
    ...(rec.cssUrl ? { cssUrl: rec.cssUrl } : {}),
    metrics: {
      xHeightRatio: m.xHeightRatio,
      avgAdvance: m.avgAdvance,
      ...(m.weightRange !== undefined ? { weightRange: String(m.weightRange) } : {}),
      ...(m.classification !== undefined ? { classification: String(m.classification) } : {}),
      delta: m.delta,
    },
  };
}

/** `{ schema, substitutes: { [referenceId]: FontSubstitute[] } }` over the given reference ids. */
export function buildFontSubstitutes(refsDir, ids) {
  const substitutes = {};
  for (const id of [...ids].sort()) {
    const recs = readReferenceSidecar(join(refsDir, id))?.fonts?.substitutes;
    if (!recs) continue;
    const list = [];
    for (const [brandFamily, byScript] of Object.entries(recs)) {
      for (const [script, rec] of Object.entries(byScript ?? {})) list.push(entry(id, brandFamily, script, rec));
    }
    if (list.length) substitutes[id] = list;
  }
  return { schema: 1, substitutes };
}

export function renderFontSubstitutes(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}
