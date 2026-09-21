#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readReferenceSource } from "./lib/reference-source.mjs";
import {
  evaluateReferenceQuality,
  parseReferenceFrontmatter,
  REFERENCE_QUALITY_SCHEMA_VERSION,
} from "./lib/reference-quality.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const REPO_ROOT = resolve(WEB_ROOT, "..");

/**
 * 색 근거율 스냅샷. 라이브 브라우저가 필요한 측정이라 CI에서 계산할 수 없고, 잰 결과를
 * 커밋해 두고 읽는다. 없으면 그냥 건너뛴다 — 이 파일이 없다고 파이프라인이 멈추면
 * 측정을 강제로 최신화하게 되고, 그건 브라우저를 CI에 넣는 일이다.
 * 갱신: `node scripts/survey-colour-grounding.mjs --json > ...` 후 수동 편집.
 */
const groundingPath = join(REPO_ROOT, "data", "colour-grounding.json");
let COLOUR_GROUNDING = {};
if (existsSync(groundingPath)) {
  try { COLOUR_GROUNDING = JSON.parse(readFileSync(groundingPath, "utf8")).references ?? {}; }
  catch { COLOUR_GROUNDING = {}; }
}
const REFS_DIR = join(WEB_ROOT, "references");
const OUT_FILE = join(WEB_ROOT, "src", "data", "reference-quality.generated.ts");
const CHECK = process.argv.includes("--check");
/**
 * Confirmed-unchanged sources, keyed `"<referenceId>/<sourceId>"` to the date a
 * sweep found that URL still serving what it served when captured.
 *
 * Same shape of dependency as the colour-grounding snapshot above and for the
 * same reason: it needs a live browser, so it is measured, committed, and read
 * here. The newest `data/surface-drift-*.json` wins. Missing file, missing
 * reference, or any verdict other than `unchanged` all mean no confirmation,
 * and no confirmation leaves the TTL exactly as it was.
 */
const EMPTY_DRIFT = Object.freeze({ confirmations: {}, dead: {} });
function loadDriftConfirmations() {
  const dataDir = join(REPO_ROOT, "data");
  if (!existsSync(dataDir)) return EMPTY_DRIFT;
  const newest = readdirSync(dataDir)
    .filter((name) => /^surface-drift-\d{4}-\d{2}-\d{2}\.json$/.test(name))
    .sort()
    .pop();
  if (!newest) return EMPTY_DRIFT;
  let report;
  try { report = JSON.parse(readFileSync(join(dataDir, newest), "utf8")); } catch { return EMPTY_DRIFT; }
  const measuredAt = String(report?.measuredAt ?? "");
  // A newest file without a date is a broken run, not an absence of data. Say so
  // — silently returning empty would revert every renewal in the catalog while
  // the tier counts stayed put and no gate fired.
  if (!/^\d{4}-\d{2}-\d{2}$/.test(measuredAt)) {
    console.error(`[reference-quality] data/${newest} has no valid measuredAt; ignoring it. `
      + "Every drift renewal is disabled until it is fixed or removed.");
    return EMPTY_DRIFT;
  }
  const confirmations = {};
  const dead = {};
  for (const row of report.results ?? []) {
    if (!row?.id || !row.sourceId) continue;
    if (row.verdict === "unchanged") confirmations[`${row.id}/${row.sourceId}`] = measuredAt;
    // 404/410 only. `blocked` (403/429) and `unreachable` (network) are unknown,
    // and an unknown filed as a defect is a worse error than not filing it.
    else if (row.verdict === "dead") dead[`${row.id}/${row.sourceId}`] = true;
  }
  return { confirmations, dead };
}

/**
 * Dead cited URLs, from the reachability sweep rather than the drift report.
 *
 * The drift sweep can only speak about sources it probed, and it probes only
 * those with a July bundle baseline — 400 of 930. Every source without one was
 * invisible to it, so `source_url_dead` undercounted: it knew 12 dead URLs and
 * there are 22. patternfly alone had two more (`about-official`,
 * `releases-official`) that nothing had ever opened.
 *
 * This sweep asks a different and simpler question — does the URL still serve
 * anything — which needs no baseline, so it covers all 930.
 *
 * It is two-stage on purpose. A single curl pass reported 127 failures; opening
 * each one in a real browser recovered 95 of them. Publishing the one-stage
 * number would have marked 127 references defective when 22 are. Same lesson as
 * the drift sweep's 403s, one step further: a desktop UA on curl is not enough.
 */
function loadDeadSources() {
  const dataDir = join(REPO_ROOT, "data");
  if (!existsSync(dataDir)) return {};
  const newest = readdirSync(dataDir)
    .filter((name) => /^source-reachability-\d{4}-\d{2}-\d{2}\.json$/.test(name))
    .sort()
    .pop();
  if (!newest) return {};
  let report;
  try { report = JSON.parse(readFileSync(join(dataDir, newest), "utf8")); } catch { return {}; }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(report?.measuredAt ?? ""))) {
    console.error(`[reference-quality] data/${newest} has no valid measuredAt; ignoring it.`);
    return {};
  }
  const out = {};
  for (const row of report.results ?? []) {
    if (row?.verdict === "dead" && row.id && row.sourceId) out[`${row.id}/${row.sourceId}`] = true;
  }
  return out;
}

const { confirmations: DRIFT_CONFIRMATIONS, dead: DRIFT_DEAD_SOURCES } = loadDriftConfirmations();
// The reachability sweep is the broader measurement; the drift report's dead rows
// are a subset of it. Union rather than replace, so removing the newer file
// degrades to the old behaviour instead of silently clearing every advisory.
const DEAD_SOURCES = { ...DRIFT_DEAD_SOURCES, ...loadDeadSources() };

const asOfIndex = process.argv.indexOf("--as-of");
const AS_OF = asOfIndex >= 0 ? process.argv[asOfIndex + 1] : new Date().toISOString().slice(0, 10);

const ids = readdirSync(REFS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(join(REFS_DIR, entry.name, "DESIGN.md")))
  .map((entry) => entry.name)
  .sort();

const entries = [];
const parseErrors = [];
for (const id of ids) {
  const designPath = join(REFS_DIR, id, "DESIGN.md");
  // Quality is computed from frontmatter evidence. An adopted reference keeps
  // that source inside its package; see lib/reference-source.mjs.
  const markdown = readReferenceSource(join(REFS_DIR, id)).markdown;
  try {
    const frontmatter = parseReferenceFrontmatter(markdown, designPath);
    const verificationPath = join(REFS_DIR, id, ".verification.md");
    const verificationMarkdown = existsSync(verificationPath) ? readFileSync(verificationPath, "utf8") : "";
    entries.push(evaluateReferenceQuality({ id, markdown, frontmatter, verificationMarkdown, asOf: AS_OF, colourGrounding: COLOUR_GROUNDING[id], driftConfirmations: DRIFT_CONFIRMATIONS, driftDeadSources: DEAD_SOURCES }));
  } catch (error) {
    parseErrors.push(`${id}: ${error.message}`);
  }
}

if (parseErrors.length > 0) {
  console.error(`[reference-quality] ${parseErrors.length} reference(s) could not be parsed:`);
  for (const error of parseErrors) console.error(`- ${error}`);
  process.exit(1);
}

const counts = Object.freeze({
  verified_v2: entries.filter((entry) => entry.status === "verified_v2").length,
  partial: entries.filter((entry) => entry.status === "partial").length,
  legacy_snapshot: entries.filter((entry) => entry.status === "legacy_snapshot").length,
  total: entries.length,
});

const header = `/* AUTOGENERATED by web/scripts/build-reference-quality.mjs — do not edit.
 *
 * Conservative public quality tiers. "verified_v2" requires a complete
 * verification_v2 evidence graph; an old date or prose-only token block can
 * never promote a reference. Rebuild with npm run quality:references.
 */`;
const types = `export type ReferenceQualityStatus = "verified_v2" | "partial" | "legacy_snapshot";

export interface ReferenceQualityEntry {
  readonly id: string;
  readonly status: ReferenceQualityStatus;
  readonly verifiedAt: string | null;
  readonly tokensExtractedAt: string | null;
  readonly nextReverifyAt: string | null;
  /**
   * How many of this reference's sources had their expiry clock restarted by a
   * confirmed-unchanged surface probe. Published so the renewal is auditable
   * from the manifest rather than only from the drift report.
   */
  readonly renewedSourceCount: number;
  readonly tokenSource: string | null;
  readonly claimCount: number;
  readonly evidenceClaimCount: number;
  readonly evidenceCoverage: number;
  readonly surfaceCount: number;
  readonly sourceCount: number;
  readonly conflictCount: number;
  readonly tier1SourceCount: number;
  /** Structured \`tokens.components\` entries. */
  readonly componentCount: number;
  /** Of those, button/input/tab/toggle. */
  readonly interactiveComponentCount: number;
  /** Of those interactive, how many carry per-state values rather than a prose
   *  \`states\` summary. Reported only — see componentCoverage() for why. */
  readonly statedComponentCount: number;
  /** Why this reference is not a higher tier. Empty on a Verified v2 entry. */
  readonly reasonCodes: readonly string[];
  /** Non-blocking review signals. These never change the tier; they exist so
   *  thin-but-passing references, and values a document derived rather than
   *  observed, can be found and repaired. */
  readonly advisoryCodes: readonly string[];
  /** Share of this reference's declared colours found on the brand's live surface,
   *  from data/colour-grounding.json. null when unmeasured. A homepage is one surface
   *  and a palette covers several, so a figure below 1 is expected — see that file's
   *  caveat before reading it as fabrication. */
  readonly paletteGrounding: number | null;
}`;
const out = `${header}\n\n${types}\n\n` +
  `export const REFERENCE_QUALITY_SCHEMA_VERSION = ${REFERENCE_QUALITY_SCHEMA_VERSION} as const;\n` +
  `export const REFERENCE_QUALITY = ${JSON.stringify(entries, null, 2)} as const satisfies readonly ReferenceQualityEntry[];\n\n` +
  `export const REFERENCE_QUALITY_COUNTS = ${JSON.stringify(counts, null, 2)} as const;\n\n` +
  `export const REFERENCE_QUALITY_BY_ID: Readonly<Record<string, ReferenceQualityEntry>> = Object.freeze(\n` +
  `  Object.fromEntries(REFERENCE_QUALITY.map((entry) => [entry.id, entry]))\n` +
  `);\n`;

if (CHECK) {
  if (!existsSync(OUT_FILE) || readFileSync(OUT_FILE, "utf8") !== out) {
    console.error("[reference-quality] generated manifest is stale. Run `npm run quality:references` in web/ and commit the result.");
    process.exit(1);
  }
} else {
  writeFileSync(OUT_FILE, out, "utf8");
  console.log(`[reference-quality] wrote ${OUT_FILE}`);
}

const reasonCounts = new Map();
for (const entry of entries) {
  for (const reason of entry.reasonCodes) reasonCounts.set(reason, (reasonCounts.get(reason) ?? 0) + 1);
}
const topReasons = [...reasonCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
const advisoryCounts = new Map();
for (const entry of entries) {
  for (const code of entry.advisoryCodes) advisoryCounts.set(code, (advisoryCounts.get(code) ?? 0) + 1);
}
console.log(`[reference-quality] ${counts.total} total — ${counts.verified_v2} Verified v2 / ${counts.partial} Partial / ${counts.legacy_snapshot} Legacy`);
for (const [reason, count] of topReasons) console.log(`  ${String(count).padStart(3)}  ${reason}`);
if (advisoryCounts.size > 0) {
  console.log("[reference-quality] advisory (non-blocking) component coverage:");
  for (const [code, count] of [...advisoryCounts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(count).padStart(3)}  ${code}`);
  }
}
