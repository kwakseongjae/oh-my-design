/**
 * Finds published Latin copy that did not survive a migration.
 *
 * The gate's copy-loss check builds needles only from contiguous non-Latin
 * runs, because those cannot be coincidental and cannot survive paraphrase.
 * That buys precision at a cost nobody had measured: the Latin half of every
 * source is unprotected. Two failures made the cost concrete — flex, whose
 * source has no non-Latin at all, and funnow, which passed with twelve needles
 * while its own English glosses of two slogans were quietly reworded.
 *
 * So this is deliberately NOT a gate. It reports candidates, ranked, for a
 * reader to judge. A blocking check here would flag quoted prose descriptions
 * along with real copy, and a gate that cries wolf gets worked around — the
 * exact failure the narrow needles were chosen to avoid.
 *
 *   node latin-copy-audit.mjs --brand flex
 *   node latin-copy-audit.mjs --all              # every migrated body
 *   node latin-copy-audit.mjs --all --min high   # high-confidence only
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const LEGACY = join(ROOT, "web", "references");
const OUT = [join(ROOT, "docs", "design-md-weight", "migrated"), join(ROOT, "docs", "design-md-weight", "golden-samples")];

const arg = (n) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; };

const QUOTED = new RegExp([
  /`([^`\n]{2,80})`/, /"([^"\n]{2,80})"/, /“([^”\n]{2,80})”/,
].map((r) => r.source).join("|"), "g");

/** Things that are quoted but are not published copy. */
const NOT_COPY = [
  /^[#.]?[0-9a-fA-F]{3,8}$/,          // hex
  /^[\d.]+(px|rem|em|%|ms|s|fr|vh|vw)?$/, // measurements
  /[/\\]/,                             // paths, URLs, selectors
  /^[a-z-]+:\s/,                       // yaml-ish key: value
  /^(rgba?|hsla?|var|calc|cubic-bezier|linear-gradient)\(/,
  /^@/, /^--/, /^\$/,                  // at-rules, custom props, vars
  /^[a-z]+(-[a-z0-9]+)+$/,             // kebab tokens (font-weight, brand-blue-lt)
  /^[a-z]+([A-Z][a-z]*)+$/,            // camelCase identifiers
  /^[a-z][\w-]*(\.[\w.-]+)+$/,         // tokens.colors.ink — a claim key, not copy
  /^(true|false|null|none|auto|inherit|initial)$/i,
];

/**
 * The legacy files quote descriptions at least as often as they quote copy,
 * and the description is what a naive scan reports. The first calibration run
 * on funnow returned eleven candidates of which nine read like
 * "Hero H1 headline on homepage" — a sentence *about* the copy.
 *
 * The separating signal is vocabulary, not shape: a description has to name
 * the part of the interface it describes, and published copy almost never
 * does. So anything carrying UI-meta nouns is rejected outright, and what
 * survives is graded by the marks copy actually wears — imperative
 * punctuation, all-caps labels, short title-cased phrases.
 */
const UI_META = new RegExp(
  "\\b(h[1-6]|cta|headline|subtitle|heading|caption|label|placeholder|copy|text|"
  + "button|field|input|tab|chip|badge|card|tile|canvas|page|nav|header|footer|"
  + "toolbar|modal|dialog|tooltip|banner|hero|section|body|link|icon|logo|menu|"
  + "list|row|column|grid|panel|sidebar|state|variant|token|scale|weight|family|"
  + "colou?r|shade|tint|radius|shadow|spacing|margin|padding|font|typeface|"
  + "sits?|sitting|used?|uses|appears?|reads?|shown?|displays?)s?\\b",
  "i",
);

function confidence(s) {
  const t = s.trim();
  const words = t.split(/\s+/);
  if (!/[A-Za-z]/.test(t)) return null;                 // the gate's needles cover these
  if (NOT_COPY.some((re) => re.test(t))) return null;
  if (t.length < 4) return null;
  // An all-caps label may legitimately contain a UI noun ("DOWNLOAD APP"), so
  // it is judged before the meta filter rather than after.
  if (/^[A-Z0-9][A-Z0-9 &'’.,!?-]{3,}$/.test(t) && words.length <= 8) return "high";
  if (UI_META.test(t)) return null;
  if (/[!?]$/.test(t)) return "high";                                                // slogans, CTAs
  if (words.length <= 6 && words.every((w) => /^[A-Z0-9]/.test(w) || w.length <= 3)) return "high"; // Get Started
  if (words.length <= 10) return "medium";
  return "low";
}

const RANK = { high: 3, medium: 2, low: 1 };
const DISPOSITIONED = /삭제|제거|미이관|드롭|deleted|removed|omitted|dropped|not\s+carried|withheld|paraphras/i;

function audit(brand) {
  const legacyPath = join(LEGACY, brand, "DESIGN.md");
  const dir = OUT.map((r) => join(r, brand)).find((d) => existsSync(join(d, "DESIGN.md")));
  if (!existsSync(legacyPath) || !dir) return null;

  const legacy = readFileSync(legacyPath, "utf8");
  const sib = join(LEGACY, brand, ".verification.md");           // dotfile: name it, do not glob it
  const body = readFileSync(join(dir, "DESIGN.md"), "utf8");
  const prov = existsSync(join(dir, "provenance.md")) ? readFileSync(join(dir, "provenance.md"), "utf8") : "";
  const log = existsSync(join(dir, "migration-log.md")) ? readFileSync(join(dir, "migration-log.md"), "utf8") : "";
  const sibling = existsSync(sib) ? readFileSync(sib, "utf8") : "";

  const seen = new Map();
  for (const src of [legacy, sibling]) {
    for (const m of src.matchAll(QUOTED)) {
      const t = (m.slice(1).find((g) => g != null) ?? "").trim();
      // A font stack is quoted like copy and shaped like copy ("PingFang TC,
      // Microsoft JhengHei"). What separates them is the line it sits on, so
      // the containing line is consulted rather than guessing from the string.
      const line = src.slice(src.lastIndexOf("\n", m.index) + 1, (src.indexOf("\n", m.index) + 1 || src.length) - 1);
      if (/font[-_ ]?(family|stack)|typeface|fallback/i.test(line)) continue;
      const c = confidence(t);
      if (c && !seen.has(t)) seen.set(t, c);
    }
  }

  const lost = [];
  for (const [t, c] of seen) {
    if (body.includes(t) || prov.includes(t)) continue;
    // A ledger line that dispositions the string counts as surviving: A5 asks
    // that a loss be visible, not that nothing ever be dropped.
    if (log.split("\n").filter((l) => l.includes(t)).some((l) => DISPOSITIONED.test(l))) continue;
    lost.push({ text: t, confidence: c });
  }
  lost.sort((a, b) => RANK[b.confidence] - RANK[a.confidence] || a.text.localeCompare(b.text));
  return { brand, candidates: seen.size, lost };
}

const min = RANK[arg("min") ?? "low"] ?? 1;
const brands = process.argv.includes("--all")
  ? [...new Set(OUT.flatMap((r) => (existsSync(r) ? readdirSync(r) : [])))].filter((b) => existsSync(join(LEGACY, b, "DESIGN.md"))).sort()
  : [arg("brand")].filter(Boolean);

if (!brands.length) { console.error("usage: latin-copy-audit.mjs --brand <id> | --all [--min high|medium|low]"); process.exit(1); }

const reports = brands.map(audit).filter(Boolean)
  .map((r) => ({ ...r, lost: r.lost.filter((l) => RANK[l.confidence] >= min) }));
const dirty = reports.filter((r) => r.lost.length);

console.log(JSON.stringify({
  scanned: reports.length,
  clean: reports.length - dirty.length,
  withLoss: dirty.length,
  totalLost: dirty.reduce((s, r) => s + r.lost.length, 0),
  byConfidence: ["high", "medium", "low"].reduce((a, c) => {
    const n = dirty.flatMap((r) => r.lost).filter((l) => l.confidence === c).length;
    return n ? { ...a, [c]: n } : a;
  }, {}),
  brands: dirty.map((r) => ({ brand: r.brand, candidates: r.candidates, lost: r.lost.length, sample: r.lost.slice(0, 40) })),
}, null, 1));
