/**
 * Ceiling stimuli — the brand's own images with its identifiers removed.
 *
 * RUBRIC.md §4.3 needs a ceiling: how often an evaluator names the right brand
 * from an original with the name, logo, wordmark and unique copy taken out. An
 * arm's distinctiveness score is only readable against it, because a brand
 * nobody can place without its logo cannot be demanded of a generated image.
 *
 * Masking by centre crop was tried first and failed, which is why this selects
 * instead. Web creative puts brand copy in the middle of the frame, not at its
 * edges: cropping Apple's heroes left "iPhone", "MacBook Air" and "M4 탑재"
 * dead centre, and Coupang's left "R.LUX 럭셔리 패션". The crop removed
 * composition and kept the identifiers — the opposite of the intent.
 *
 * So stimuli are chosen, not altered. A sample qualifies when it carries no
 * text that names the brand or its products. Third-party marks inside the
 * picture — an LG laptop in a Karrot listing — do not disqualify it; they are
 * part of what that brand photographs, not a label on it.
 *
 * Selection is recorded per brand and verified by eye before use. Where a brand
 * has too few qualifying samples the shortfall is reported rather than papered
 * over, because a ceiling measured on one stimulus is not a ceiling.
 *
 *   node build-ceiling-stimuli.mjs            # all brands
 *   node build-ceiling-stimuli.mjs --brand toss
 */

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");
const OUT_ROOT = resolve(HERE, "..", "90-comparison", "ceiling");

/** §4.3 averages over four stimuli per brand. */
const STIMULI_PER_BRAND = 4;
/**
 * Samples judged free of brand-identifying text, by inspection at 380px on
 * 2026-08-23. Empty means the brand's imagery carries its copy inseparably —
 * a finding about the brand, not a gap in the capture.
 */
const QUALIFYING = {
  apple: [],      // all seven heroes carry a product name: iPhone, MacBook Air, iPad Pro, WATCH, AirPods
  baemin: [],     // one full-bleed hero with the headline set across it
  coupang: [],    // every tile carries Coupang's own listing copy — "씨게이트 외장하드", "주방수전은 포세이돈"
  figma: ["s4", "s5"],
  karrot: ["s1", "s2", "s3", "s4"],
  musinsa: ["s1", "s3", "s5", "s8", "s9", "s10", "s11", "s12"],
  naver: [],      // no imagery at all; nothing to draw from
  toss: ["s1"],   // s1 and s2 are adjacent frames of one video — one independent stimulus
  wanted: ["s1"], // s5–s12 all carry the "상금 100만원" campaign overlay
};

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function buildBrand(brand) {
  const evidencePath = join(EVIDENCE_ROOT, brand, "evidence.json");
  if (!existsSync(evidencePath)) return { brand, skipped: "no evidence" };
  const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
  // Every sample is a candidate. Considering only the top four missed the
  // garment shots further down Musinsa's grid, which are the ones without text.
  const samples = evidence.imagery?.samples ?? [];
  if (samples.length === 0) {
    // Naver has no large imagery at all. That is the brand's fact, and it means
    // there is no ceiling to measure for it — recorded, not filled in.
    return { brand, stimuli: 0, reason: "brand has no imagery samples; no ceiling measurable" };
  }

  const qualifying = QUALIFYING[brand] ?? [];
  const outDir = join(OUT_ROOT, brand);
  mkdirSync(outDir, { recursive: true });
  const built = [];

  for (const [i, sample] of samples.entries()) {
    const label = `s${i + 1}`;
    if (!qualifying.includes(label)) continue;
    const src = join(EVIDENCE_ROOT, brand, sample.file);
    if (!existsSync(src)) continue;
    const out = join(outDir, `${label}.png`);
    await execFileAsync("ffmpeg", ["-loglevel", "error", "-y", "-i", src, "-c", "copy", out])
      .catch(async () => { await execFileAsync("ffmpeg", ["-loglevel", "error", "-y", "-i", src, out]); });
    built.push({ label, from: sample.file, sourceAlt: sample.alt ?? "", output: `ceiling/${brand}/${label}.png` });
  }

  return {
    brand,
    stimuli: built.length,
    sufficient: built.length >= STIMULI_PER_BRAND,
    shortfall: built.length >= STIMULI_PER_BRAND ? null : `${built.length}/${STIMULI_PER_BRAND}`,
    built,
  };
}

const brands = arg("brand")
  ? [arg("brand")]
  : readdirSync(EVIDENCE_ROOT).filter((b) => existsSync(join(EVIDENCE_ROOT, b, "evidence.json"))).sort();

const results = [];
for (const brand of brands) results.push(await buildBrand(brand));

mkdirSync(OUT_ROOT, { recursive: true });
const manifest = {
  builtAt: new Date().toISOString(),
  method: {
    kind: "selection, not alteration",
    rule: "a sample qualifies when it carries no text naming the brand or its products",
    thirdPartyMarks: "allowed — an LG laptop in a Karrot listing is what that brand photographs, not a label on it",
    inspectedAt: "2026-08-23, 380px per tile",
    rejectedApproach: "centre crop — web creative sets brand copy mid-frame, so cropping removed composition and kept the identifiers",
  },
  stimuliPerBrand: STIMULI_PER_BRAND,
  results,
};
writeFileSync(join(OUT_ROOT, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ out: OUT_ROOT, brands: results.map((r) => `${r.brand}:${r.stimuli ?? 0}`).join(" ") }, null, 1));
