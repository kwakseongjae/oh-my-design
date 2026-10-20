#!/usr/bin/env node
// Choose a substitute per script from a measurement record (spec/design-md-v3.md §6.3).
//
//   node scripts/fonts/score.mjs <target id> [--dir <records dir>]
//
// Weighting (fixed before any face was scored; written into every choice record):
//   score = Σ wᵢ·termᵢ / Σ wᵢ over the terms that exist
//     avgAdvance      0.45  mean over the scored weights of |candidate − brand| / brand
//     xHeightRatio    0.35  the same for the x-height ratio (Hangul: body-height ratio)
//     weightCoverage  0.10  share of the required weights the candidate cannot render unsynthesised
//     classification  0.10  0 when the classes match, 1 when they differ — only when BOTH the brand's
//                           and the candidate's class come from a first-party source; otherwise the
//                           term is left out and the other weights are rescaled
//   Width leads because it decides line breaks and layout in a screen drawn from the reference's
//   sizes and spacing; x-height decides perceived size; weights and class are secondary.
//
// Eligibility: the candidate drew every sample glyph of the script at every scored weight (see
// measure.mjs) and is of the same kind (monospaced vs proportional).
// Provider: Google Fonts first (the shadcn registry installs only Google faces). A non-Google face
// is chosen only when its score is at most 0.8 × the best Google score.
// Tolerance: no substitute is chosen when the best score exceeds 0.10.
// Exact ties (|Δscore| < 1e-9): the face that covers only this script (so a CSS stack can give each
// script its own substitute), then Google, then family name.
// Stack rule (applyStackRule): when another script chose a different family, a Latin candidate that
// also carries that script's glyphs is excluded, because in the §6.4 stack it would draw that text
// too and the other substitute would never render. The unconstrained pick is kept in the record.
import fs from "node:fs";
import path from "node:path";
import { CANDIDATES, coversWeight } from "./candidates.mjs";
import { DEFAULT_OUT } from "./measure.mjs";

export const WEIGHTING = { avgAdvance: 0.45, xHeightRatio: 0.35, weightCoverage: 0.1, classification: 0.1 };
export const NON_GOOGLE_FACTOR = 0.8;
export const MAX_SCORE = 0.1;
export const LABEL = "substitute — not the brand face";

const rel = (c, b) => Math.abs(c - b) / b;
const mean = (xs) => xs.reduce((s, x) => s + x, 0) / xs.length;

/** Score one measured candidate against the brand for one script. */
export function scoreCandidate({ brand, candidate, script, weights, requiredWeights, brandClass, candidateClass }) {
  const drawn = weights.every((w) => candidate.weights[w]?.[script]?.drawn?.ok);
  const coverage = requiredWeights.filter((w) => !candidate.covers(w)).length / requiredWeights.length;
  const terms = {
    avgAdvance: mean(weights.map((w) => rel(candidate.weights[w][script].avgAdvance, brand.weights[w][script].avgAdvance))),
    xHeightRatio: mean(weights.map((w) => rel(candidate.weights[w][script].xHeightRatio, brand.weights[w][script].xHeightRatio))),
    weightCoverage: coverage,
  };
  if (brandClass && candidateClass) terms.classification = brandClass === candidateClass ? 0 : 1;
  let num = 0;
  let den = 0;
  for (const [k, v] of Object.entries(terms)) {
    num += WEIGHTING[k] * v;
    den += WEIGHTING[k];
  }
  return { eligible: drawn, terms, score: num / den };
}

function tieBreak(script) {
  return (a, b) => {
    if (Math.abs(a.score - b.score) >= 1e-9) return a.score - b.score;
    const onlyA = a.scripts.length === 1 && a.scripts[0] === script ? 0 : 1;
    const onlyB = b.scripts.length === 1 && b.scripts[0] === script ? 0 : 1;
    if (onlyA !== onlyB) return onlyA - onlyB;
    if (a.provider !== b.provider) return a.provider === "google" ? -1 : 1;
    return a.family.localeCompare(b.family);
  };
}

/** Pick per the provider rule and tolerance. `ranked` must be sorted with tieBreak. */
export function choose(ranked) {
  const eligible = ranked.filter((r) => r.eligible);
  const google = eligible.find((r) => r.provider === "google") ?? null;
  const other = eligible.find((r) => r.provider !== "google") ?? null;
  let chosen = google;
  let rule = "best Google Fonts candidate";
  if (other && (!google || other.score <= NON_GOOGLE_FACTOR * google.score)) {
    chosen = other;
    rule = google
      ? `non-Google candidate scores ${other.score.toFixed(4)} ≤ ${NON_GOOGLE_FACTOR} × best Google ${google.score.toFixed(4)} (${google.family})`
      : "no eligible Google Fonts candidate";
  }
  if (!chosen) return { chosen: null, rule: "no eligible candidate" };
  if (chosen.score > MAX_SCORE) return { chosen: null, rule: `best score ${chosen.score.toFixed(4)} exceeds tolerance ${MAX_SCORE}` };
  return { chosen, rule };
}

function weightRangeText(c) {
  return c.weights.variable ? `${c.weights.min}–${c.weights.max}, variable wght axis` : `${c.weights.list.join(", ")} (static)`;
}

export function brandWeightRange(brand) {
  const declared = (brand.declared ?? []).map((d) => d.weight);
  const axis = (brand.weightProbe?.intermediate ?? []).every((p) => p.distinctFromNeighbours);
  const statics = declared.filter((w) => !/\s/.test(w));
  if (axis) return `${declared.join(", ")} declared; intermediate weights render distinctly (variable wght axis)`;
  return `${statics.join(", ")} (${statics.length} static weights; intermediate weights snap to them, no wght axis)`;
}

export function scoreRecord(record) {
  const byFamily = Object.fromEntries(CANDIDATES.map((c) => [c.family, c]));
  const requiredWeights = record.weights;
  const out = {};
  for (const script of record.scripts) {
    const ranked = record.candidates
      .filter((m) => byFamily[m.family]?.scripts.includes(script))
      .map((m) => {
        const c = byFamily[m.family];
        const s = scoreCandidate({
          brand: record.brand,
          candidate: { weights: m.measured.weights, covers: (w) => coversWeight(c, w) },
          script,
          weights: record.weights,
          requiredWeights,
          brandClass: record.classification?.value ?? null,
          candidateClass: c.classification?.value ?? null,
        });
        return { family: c.family, provider: c.provider, scripts: c.scripts, cssUrl: c.cssUrl ?? null, licence: c.licence, licenceSource: c.licenceSource, weightRange: weightRangeText(c), classification: c.classification?.value ?? null, ...s, at400: { xHeightRatio: m.measured.weights[400]?.[script]?.xHeightRatio, avgAdvance: m.measured.weights[400]?.[script]?.avgAdvance } };
      })
      .sort(tieBreak(script));
    const { chosen, rule } = choose(ranked);
    out[script] = { chosen: chosen ? chosen.family : null, rule, ranked };
  }
  applyStackRule(out);
  return out;
}

/**
 * Stack compatibility (spec §6.4: brand face, then the substitutes for the scripts the role renders).
 * In a CSS stack a character is drawn by the first listed face that has it. Every Hangul / Kana /
 * Han candidate also carries Latin glyphs, so the Latin substitute has to come first — and if the
 * Latin substitute itself carries the other script's glyphs, it would draw that text too and the
 * other script's substitute would never render. So when another script chose a different family,
 * Latin candidates that cover that script are not eligible. The unconstrained pick stays recorded.
 */
export function applyStackRule(out) {
  const latin = out.latin;
  if (!latin?.chosen) return out;
  const others = Object.entries(out).filter(([s, v]) => s !== "latin" && v.chosen && v.chosen !== latin.chosen).map(([s]) => s);
  const chosenRow = latin.ranked.find((r) => r.family === latin.chosen);
  const clash = others.filter((s) => chosenRow.scripts.includes(s));
  if (!clash.length) return out;
  const allowed = latin.ranked.map((r) => ({ ...r, eligible: r.eligible && (!clash.some((s) => r.scripts.includes(s)) || clash.every((s) => out[s].chosen === r.family)) }));
  const { chosen, rule } = choose(allowed);
  latin.unconstrained = { chosen: latin.chosen, rule: latin.rule };
  latin.chosen = chosen ? chosen.family : null;
  latin.rule = `${rule}; stack rule: ${chosenRow.family} also draws ${clash.join(", ")} and would override the ${clash.map((s) => out[s].chosen).join(", ")} substitute, so Latin candidates that cover ${clash.join(", ")} are excluded`;
  latin.ranked = allowed;
  return out;
}

/** The reference.json `fonts.substitutes.<family>.<script>` record for a chosen face. */
export function sidecarRecord(record, script, choice) {
  const c = choice.ranked.find((r) => r.family === choice.chosen);
  const b400 = record.brand.weights[400][script];
  const date = record.page.measuredAt.slice(0, 10);
  return {
    family: c.family,
    provider: c.provider,
    label: LABEL,
    metrics: {
      xHeightRatio: round(c.at400.xHeightRatio),
      avgAdvance: round(c.at400.avgAdvance),
      weightRange: c.weightRange,
      classification: c.classification ?? "not stated by a first-party source",
      delta: {
        xHeightRatio: round(c.at400.xHeightRatio - b400.xHeightRatio),
        avgAdvance: round(c.at400.avgAdvance - b400.avgAdvance),
        xHeightRatioRelMean: round(c.terms.xHeightRatio),
        avgAdvanceRelMean: round(c.terms.avgAdvance),
        weightCoverageMiss: round(c.terms.weightCoverage),
        score: round(c.score),
        brandXHeightRatio: round(b400.xHeightRatio),
        brandAvgAdvance: round(b400.avgAdvance),
        brandWeightRange: brandWeightRange(record.brand),
        brandClassification: record.classification?.value ?? "not stated by a first-party source",
        definition: script === "latin"
          ? "xHeightRatio = mean ink top of x v w z / mean ink top of H I E F T; avgAdvance = sample advance / code points, in em"
          : "xHeightRatio = mean ink height of the sample syllables / 1em (Hangul body height); avgAdvance = sample advance / code points, in em",
        sample: record.samples[script].text,
        weights: record.weights.join(", "),
        sizePx: record.sizePx,
        weighting: "0.45 avgAdvance + 0.35 xHeightRatio + 0.10 weight coverage + 0.10 classification (dropped and rescaled when a class is not first-party)",
        rule: choice.rule,
        tool: `${record.tool.script} + scripts/fonts/score.mjs; playwright-core ${record.tool.playwrightCore}, Chromium ${record.tool.chromium}, canvas measureText + CDP CSS.getPlatformFontsForNode`,
        page: record.page.url,
        measured: date,
        record: `docs/research/2026-10-20-r11/fonts/${record.target}.measurements.json`,
      },
    },
  };
}

function round(x) {
  return Math.round(x * 1e4) / 1e4;
}

export function renderMarkdown(record, scored) {
  const lines = [`# ${record.family} (${record.referenceId}) — substitute measurement`, ""];
  lines.push(`- Page: ${record.page.url} (HTTP ${record.page.status}), measured ${record.page.measuredAt}`);
  lines.push(`- Tool: ${record.tool.script}, playwright-core ${record.tool.playwrightCore}, Chromium ${record.tool.chromium} (${record.tool.platform})`);
  lines.push(`- Size ${record.sizePx}px; weights scored: ${record.weights.join(", ")}; brand weights: ${brandWeightRange(record.brand)}`);
  lines.push(`- Brand classification: ${record.classification?.value ?? "not stated"} — ${record.classification?.note ?? ""} (${record.classification?.source ?? ""})`);
  for (const w of record.weights) for (const s of record.scripts) {
    const d = record.brand.weights[w][s].drawn;
    lines.push(`- Brand drawn ${w}/${s}: ${d.ok ? "yes" : "NO"} — CDP: ${d.platformFonts.map((p) => `${p.postScriptName ?? p.familyName} ×${p.glyphCount}`).join(", ")}`);
  }
  for (const x of record.crossChecks ?? []) {
    const same = record.weights.every((w) => record.scripts.every((s) => Math.abs(x.measured.weights[w][s].avgAdvance - record.brand.weights[w][s].avgAdvance) < 1e-9 && Math.abs(x.measured.weights[w][s].xHeightRatio - record.brand.weights[w][s].xHeightRatio) < 1e-9));
    lines.push(`- Cross-check ${x.url}: ${same ? "identical metrics" : "DIFFERENT metrics"}`);
  }
  for (const s of record.scripts) {
    const b = record.brand.weights[400][s];
    lines.push("", `## ${s}`, "", `Brand @400: xHeightRatio ${b.xHeightRatio.toFixed(4)}, avgAdvance ${b.avgAdvance.toFixed(4)} em. Sample: \`${record.samples[s].text}\``, "");
    lines.push(`Chosen: **${scored[s].chosen ?? "none"}** — ${scored[s].rule}`, "");
    if (scored[s].unconstrained) lines.push(`Unconstrained pick before the stack rule: ${scored[s].unconstrained.chosen} — ${scored[s].unconstrained.rule}`, "");
    lines.push("Eligible = drew every sample glyph at every scored weight (and, for Latin, passes the stack rule).", "");
    lines.push("| Candidate | Provider | Eligible | xHeightRatio@400 | avgAdvance@400 | Δadv (rel, mean) | Δx (rel, mean) | weight miss | class | score |", "|---|---|---|---:|---:|---:|---:|---:|---|---:|");
    for (const r of scored[s].ranked) {
      lines.push(`| ${r.family} | ${r.provider} | ${r.eligible ? "yes" : "no"} | ${r.at400.xHeightRatio?.toFixed(4)} | ${r.at400.avgAdvance?.toFixed(4)} | ${r.terms.avgAdvance.toFixed(4)} | ${r.terms.xHeightRatio.toFixed(4)} | ${r.terms.weightCoverage.toFixed(2)} | ${r.classification ?? "—"} | ${r.eligible ? r.score.toFixed(4) : "—"} |`);
    }
  }
  return `${lines.join("\n")}\n`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const i = args.indexOf("--dir");
  const dir = i >= 0 ? args[i + 1] : DEFAULT_OUT;
  const ids = args.filter((a, j) => !a.startsWith("--") && !(j > 0 && args[j - 1] === "--dir"));
  for (const id of ids) {
    const record = JSON.parse(fs.readFileSync(path.join(dir, `${id}.measurements.json`), "utf8"));
    const scored = scoreRecord(record);
    const choice = { target: id, family: record.family, weighting: WEIGHTING, nonGoogleFactor: NON_GOOGLE_FACTOR, maxScore: MAX_SCORE, scripts: scored, sidecar: Object.fromEntries(Object.entries(scored).filter(([, v]) => v.chosen).map(([s, v]) => [s, sidecarRecord(record, s, v)])) };
    fs.writeFileSync(path.join(dir, `${id}.choice.json`), `${JSON.stringify(choice, null, 2)}\n`);
    fs.writeFileSync(path.join(dir, `${id}.md`), renderMarkdown(record, scored));
    for (const [s, v] of Object.entries(scored)) console.log(`${id} ${s}: ${v.chosen ?? "none chosen"} — ${v.rule}`);
  }
}
