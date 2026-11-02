#!/usr/bin/env node
/**
 * Builds the `measured` entry of web/src/data/hangul-assets.json (the /hangul launch data card)
 * from OmD's measurement of 67 Korean services, skills/hangul/references/measured-67.md.
 *
 *   node scripts/hangul/build-measured.mjs            print the entry as JSON
 *   node scripts/hangul/build-measured.mjs --write    also write it into hangul-assets.json
 *   node scripts/hangul/build-measured.mjs --check    exit 1 unless hangul-assets.json already holds it
 *
 * Source: skills/hangul/references/measured-67.md, read from disk (the skill ships on the same branch).
 * If the file is missing, the script fails; it never falls back to numbers of its own.
 *
 * Every number is computed from the per-service table and then checked against the summary the same
 * file states in prose (counts, medians, quartiles, the font table). A disagreement means the parse or
 * the file drifted, so the script stops instead of writing a number nobody can trace.
 *
 * What is computed and what is read:
 * - min / median / max and n are computed from the per-service table (n = rows with a numeric value).
 * - iqr is read, never computed: it is filled only where the file's prose states both quartiles, and
 *   the computed quartiles must equal them. Today that is body line-height (p25 1.429, p75 1.538).
 *   Heading letter-spacing states p25 only and body letter-spacing states none, so they carry no iqr.
 *
 * Choices this script makes (state them wherever the card is shown):
 * - min / median / max are over the numeric cells of each column. The file itself warns that body
 *   line-heights under 1.3 are single-line UI text and the two over 1.8 look like fixed-pixel values, so
 *   min and max of that column are not paragraph leading. The median (1.5) is the reading to quote.
 * - topFonts lists real font families with at least 2 services, using the file's own grouping
 *   (Pretendard variants count as Pretendard, NanumBarunGothic + NanumHuman as Nanum, Spoqa Han Sans
 *   Neo + Spoqa as Spoqa Han Sans). The buckets "brand or custom faces", "no loaded font (system)" and
 *   "Latin-only primary face" are not families and are left out; the rest is services minus the sum.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const SOURCE_PATH = "skills/hangul/references/measured-67.md";
const ASSETS = join(ROOT, "web", "src", "data", "hangul-assets.json");
const TOP_FONT_MIN_SERVICES = 2;

export function readSource() {
  const onDisk = join(ROOT, SOURCE_PATH);
  if (!existsSync(onDisk)) throw new Error(`build-measured: ${SOURCE_PATH} is not on disk`);
  return { text: readFileSync(onDisk, "utf8"), from: SOURCE_PATH };
}

function fail(message) {
  throw new Error(`build-measured: ${message}`);
}

/** The per-service table: the one whose header starts `| id | captured | primary font |`. */
function parseServiceTable(text) {
  const lines = text.split("\n");
  const start = lines.findIndex((l) => /^\|\s*id\s*\|\s*captured\s*\|\s*primary font\s*\|/.test(l));
  if (start < 0) fail("per-service table header not found");
  const header = lines[start].split("|").slice(1, -1).map((c) => c.trim());
  const expected = ["id", "captured", "primary font", "body px", "body LH", "body ls", "body role", "h px", "h LH", "h ls"];
  if (header.join("|") !== expected.join("|")) fail(`unexpected table columns: ${header.join(", ")}`);
  const rows = [];
  for (const line of lines.slice(start + 2)) {
    if (!line.startsWith("|")) break;
    const cells = line.split("|").slice(1, -1).map((c) => c.trim());
    if (cells.length !== expected.length) fail(`row has ${cells.length} cells: ${line}`);
    rows.push(Object.fromEntries(expected.map((k, i) => [k, cells[i]])));
  }
  return rows;
}

/** `—` (not captured, or `normal`) is not a number; the file's minus signs are ASCII in this table. */
function numeric(rows, column) {
  const out = [];
  for (const row of rows) {
    const cell = row[column].replace("−", "-");
    if (cell === "—") continue;
    const value = Number(cell);
    if (!Number.isFinite(value)) fail(`${row.id}: ${column} is not a number: ${row[column]}`);
    out.push(value);
  }
  return out.sort((a, b) => a - b);
}

/** Linear-interpolated quantile on a sorted array (the method that reproduces the file's p25/p75). */
function quantile(sorted, q) {
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}

const round = (x) => Math.round(x * 1000) / 1000;
/** min / median / max and n computed from the column; iqr only when the file states both quartiles. */
const spread = (sorted, statedIqr) => ({
  min: round(sorted[0]),
  median: round(quantile(sorted, 0.5)),
  max: round(sorted[sorted.length - 1]),
  n: sorted.length,
  ...(statedIqr ? { iqr: statedIqr } : {}),
});

const BRAND_FACES = ["Toss Product Sans", "HyundaiSansTextKR", "YouandiNewKr", "KakaoSmall", "SamsungOneKorean", "Digital One Shinhan", "SKT Sans Text"];
const LATIN_ONLY = [
  [/inter/i, "Inter"],
  [/^Noto Sans$/i, "Noto Sans"],
  [/^Montserrat$/i, "Montserrat"],
  [/^Geist$/i, "Geist"],
];

/** Primary font cell -> { bucket, family }, using the groups of the file's "Primary font" table. */
function classify(cell, id) {
  if (/pretend|pretand/i.test(cell)) return { bucket: "Pretendard", family: "Pretendard" };
  if (/^none loaded/i.test(cell)) return { bucket: "No loaded font", family: null };
  if (/^Noto Sans (KR|Korean)$/i.test(cell)) return { bucket: "Noto Sans KR", family: "Noto Sans KR" };
  if (/^Nanum/i.test(cell)) return { bucket: "Nanum", family: "Nanum" };
  if (/^Spoqa/i.test(cell)) return { bucket: "Spoqa Han Sans", family: "Spoqa Han Sans" };
  if (/^SUIT/i.test(cell)) return { bucket: "SUIT", family: "SUIT" };
  const brand = BRAND_FACES.find((f) => f.toLowerCase() === cell.toLowerCase());
  if (brand) return { bucket: "Brand or custom faces", family: brand };
  const latin = LATIN_ONLY.find(([re]) => re.test(cell));
  if (latin) return { bucket: "Latin-only primary face", family: latin[1] };
  fail(`${id}: primary font "${cell}" fits none of the file's groups`);
}

/** Leading integer of each row in the "### Primary font" summary table, keyed by its label. */
function parseFontSummary(text) {
  const section = text.split("### Primary font")[1]?.split("\n### ")[0];
  if (!section) fail('"### Primary font" section not found');
  const out = {};
  for (const line of section.split("\n")) {
    const m = /^\|\s*([^|]+?)\s*\|\s*(\d+)\b/.exec(line);
    if (m && m[1] !== "Font") out[m[1].replace(/\s*\(.*\)$/, "")] = Number(m[2]);
  }
  const toss = /Toss Product Sans ×(\d+)/.exec(section);
  if (!toss) fail('"Toss Product Sans ×n" not found in the primary-font section');
  out["Toss Product Sans"] = Number(toss[1]);
  return out;
}

function expectEqual(label, actual, stated) {
  if (actual !== stated) fail(`${label}: computed ${actual}, the file states ${stated}`);
}

export function buildMeasured(text) {
  const rows = parseServiceTable(text);

  // services and date
  const n = /### Body text \(n = (\d+)\)/.exec(text);
  if (!n) fail('"### Body text (n = …)" not found');
  expectEqual("services", rows.length, Number(n[1]));
  const months = [...new Set(rows.map((r) => r.captured.slice(0, 7)))];
  if (months.length !== 1 || !/^\d{4}-\d{2}$/.test(months[0])) fail(`capture months: ${months.join(", ")}`);
  if (!text.includes(`(${months[0]}-11..13)`)) fail(`capture window (${months[0]}-11..13) not stated in the file`);

  // body line-height: "median 1.5, p25 1.429, p75 1.538 (53 numeric …)"
  const lh = numeric(rows, "body LH");
  const lhStated = /\*\*Line-height ratio:\*\* median ([\d.]+), p25 ([\d.]+), p75 ([\d.]+) \((\d+) numeric/.exec(text);
  if (!lhStated) fail("body line-height summary not found");
  expectEqual("body line-height count", lh.length, Number(lhStated[4]));
  expectEqual("body line-height median", round(quantile(lh, 0.5)), Number(lhStated[1]));
  expectEqual("body line-height p25", round(quantile(lh, 0.25)), Number(lhStated[2]));
  expectEqual("body line-height p75", round(quantile(lh, 0.75)), Number(lhStated[3]));

  // body letter-spacing: "median 0em. 52/67 exactly 0, 15/67 negative (−0.071 to −0.005em; …), none positive."
  const bls = numeric(rows, "body ls");
  const blsStated = /\*\*Letter-spacing:\*\* median ([-\d.]+)em\. (\d+)\/\d+ exactly 0, (\d+)\/\d+ negative \(−([\d.]+) to −([\d.]+)em/.exec(text);
  if (!blsStated) fail("body letter-spacing summary not found");
  expectEqual("body letter-spacing median", round(quantile(bls, 0.5)), Number(blsStated[1]));
  expectEqual("body letter-spacing zeros", bls.filter((v) => v === 0).length, Number(blsStated[2]));
  expectEqual("body letter-spacing negatives", bls.filter((v) => v < 0).length, Number(blsStated[3]));
  expectEqual("body letter-spacing min", bls[0], -Number(blsStated[4]));
  expectEqual("body letter-spacing positives", bls.filter((v) => v > 0).length, 0); // "none positive"

  // heading letter-spacing: "median 0em, p25 -0.01em. 23/65 negative … outlier is −0.05em … One positive value (+0.006em)."
  const hls = numeric(rows, "h ls");
  const hlsStated = /### Headings \(n = (\d+)\)\s+- \*\*Letter-spacing:\*\* median ([-\d.]+)em, p25 ([-\d.]+)em\. (\d+)\/\d+ negative.*?outlier is −([\d.]+)em.*?One positive value \(\+([\d.]+)em\)/s.exec(text);
  if (!hlsStated) fail("heading letter-spacing summary not found");
  expectEqual("heading letter-spacing median", round(quantile(hls, 0.5)), Number(hlsStated[2]));
  expectEqual("heading letter-spacing p25", round(quantile(hls, 0.25)), Number(hlsStated[3]));
  expectEqual("heading letter-spacing negatives", hls.filter((v) => v < 0).length, Number(hlsStated[4]));
  expectEqual("heading letter-spacing min", hls[0], -Number(hlsStated[5]));
  expectEqual("heading letter-spacing max", hls[hls.length - 1], Number(hlsStated[6]));
  const headingNote =
    hls.length === Number(hlsStated[1])
      ? null
      : `heading letter-spacing: ${hls.length} numeric cells in the per-service table, the summary says n = ${hlsStated[1]}; min, median and max agree with the summary either way`;

  // primary fonts: every bucket must equal the file's own table
  const buckets = {};
  const families = {};
  for (const row of rows) {
    const { bucket, family } = classify(row["primary font"], row.id);
    buckets[bucket] = (buckets[bucket] || 0) + 1;
    if (family) families[family] = (families[family] || 0) + 1;
  }
  const summary = parseFontSummary(text);
  for (const [label, stated] of Object.entries(summary)) {
    expectEqual(`primary font "${label}"`, label === "Toss Product Sans" ? families[label] || 0 : buckets[label] || 0, stated);
  }
  for (const label of Object.keys(buckets)) if (!(label in summary)) fail(`bucket "${label}" is not in the file's font table`);
  const topFonts = Object.entries(families)
    .filter(([, count]) => count >= TOP_FONT_MIN_SERVICES)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([family, count]) => ({ family, count }));

  return {
    measured: {
      services: rows.length,
      date: months[0],
      // iqr is the file's own p25/p75, read verbatim (checked above against the computed quartiles)
      bodyLineHeight: spread(lh, [Number(lhStated[2]), Number(lhStated[3])]),
      bodyLetterSpacingEm: spread(bls),
      headingLetterSpacingEm: spread(hls),
      topFonts,
    },
    notes: [
      `body line-height: ${lh.length} numeric of ${rows.length}; the file reads values under 1.3 as single-line UI text and over 1.8 as fixed-pixel line-heights, so quote the median and the IQR (read from the file: p25 ${lhStated[2]}, p75 ${lhStated[3]})`,
      "letter-spacing spreads carry no iqr: the file states no quartiles for body letter-spacing and only p25 for headings",
      headingNote,
      `topFonts: families with >= ${TOP_FONT_MIN_SERVICES} services; not families: ${Object.entries(buckets)
        .filter(([b]) => ["Brand or custom faces", "No loaded font", "Latin-only primary face"].includes(b))
        .map(([b, c]) => `${b} ${c}`)
        .join(", ")}`,
    ].filter(Boolean),
  };
}

function main(argv) {
  const { text, from } = readSource();
  const { measured, notes } = buildMeasured(text);
  if (argv.includes("--check")) {
    const current = JSON.parse(readFileSync(ASSETS, "utf8")).measured;
    if (JSON.stringify(current) !== JSON.stringify(measured)) {
      console.error(`hangul-assets.json measured differs from ${from}; run with --write`);
      return 1;
    }
    console.log(`hangul-assets.json measured matches ${from}`);
    return 0;
  }
  if (argv.includes("--write")) {
    const data = JSON.parse(readFileSync(ASSETS, "utf8"));
    data.measured = measured;
    writeFileSync(ASSETS, JSON.stringify(data, null, 2) + "\n");
    console.error(`wrote measured to ${ASSETS}`);
  }
  console.log(JSON.stringify({ from, measured, notes }, null, 2));
  return 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  try {
    process.exitCode = main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
