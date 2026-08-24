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
 * text that names the brand or its products, and is not the brand's own
 * product UI. Third-party marks inside the picture — an LG laptop in a Karrot
 * listing, a Nike swoosh on a Musinsa garment — do not disqualify it; they are
 * part of what that brand photographs, not a label on it.
 *
 * The selection is pinned to the capture it was inspected against. `d3` is an
 * index into one particular capture's sample list, and a recapture renumbers
 * everything — so applying an old selection to a new capture quietly picks
 * different pictures. When the pin does not match, this refuses to build that
 * brand and says so, rather than producing stimuli nobody has looked at.
 *
 * Where a brand has too few qualifying samples the shortfall is reported rather
 * than papered over, because a ceiling measured on one stimulus is not a
 * ceiling.
 *
 *   node build-ceiling-stimuli.mjs            # all brands
 *   node build-ceiling-stimuli.mjs --brand toss
 */

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
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
 * When more than four qualify, `C_b` uses the first four in build order and no
 * more. Choosing among a larger pool after seeing which stimuli were identified
 * would be picking the ceiling to suit the result (grok-4.6, 2026-08-23).
 */
const CB_TAKES_FIRST = STIMULI_PER_BRAND;

/**
 * Brands whose shortfall is a property of the brand rather than a limit of the
 * capture. Ruled explicitly, because the phrase reads as an excuse anywhere
 * else — figma, karrot, musinsa, naver and toss all clear the bar.
 */
const SHORTFALL_IS_BRAND_PROPERTY = new Set(["apple", "baemin", "coupang", "wanted"]);

/** Sample labels are surface-prefixed: `d` for desktop-1440, `m` for mobile-390. */
const SURFACE_PREFIX = { "desktop-1440": "d", "mobile-390": "m" };

/**
 * The capture each brand's selection was inspected against. A mismatch blocks
 * the brand until someone looks at the new samples.
 */
const INSPECTED_AGAINST = {
  apple: "2026-08-22T19:46:47.156Z",
  baemin: "2026-08-22T19:47:32.522Z",
  coupang: "2026-08-22T19:48:17.298Z",
  figma: "2026-08-22T19:48:41.602Z",
  karrot: "2026-08-22T19:49:29.044Z",
  musinsa: "2026-08-22T19:50:15.466Z",
  naver: "2026-08-22T19:51:00.372Z",
  toss: "2026-08-22T19:51:46.001Z",
  wanted: "2026-08-22T19:52:31.934Z",
};

/**
 * Samples judged free of brand-identifying text, by inspection at 400px on
 * 2026-08-23. Empty means the brand's imagery carries its identity
 * inseparably — a finding about the brand, not a gap in the capture.
 */
const QUALIFYING = {
  apple: [],
  baemin: [],
  coupang: [],
  figma: ["d1", "d5", "d8", "d9"],
  karrot: ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11"],
  musinsa: ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "m8", "m9", "m10", "m12"],
  naver: ["m3", "m4", "m5", "m7", "m8", "m9", "m10"],
  toss: ["d2", "m6", "m8", "m11", "m12"],
  wanted: [],
};

/** Why the rejected samples were rejected, so the zeros are readable. */
const EXCLUSIONS = {
  apple: "every hero carries a product name — iPhone, MacBook Air, iPad Pro, WATCH, AirPods, Trade In",
  baemin: "the imagery is brand illustration, not photography; every panel carries 배달의민족, 배민클럽, the 식지 않도록 slogan or the parent company 우아한형제들",
  coupang: "only one sample is a photograph and it carries Coupang's own promo band; the rest are category nav panels",
  figma: "d3 shows the Figma logo and nav; d4/m2/m3/m5/m6 are the Figma editor's own UI (pen tool, brushes, node canvas); d6/d7 are site chrome, not imagery",
  karrot: "d12 is a missing-image placeholder; all twelve mobile samples resolve to the same source images as the desktop ones, so they are re-renders rather than independent stimuli",
  musinsa: "m1–m7 share desktop source URLs and m11 is the same photograph served at another size, so only the four phone-only shots are added",
  naver: "m1/m2 carry Naver's own service chips (기부, 펀딩); m6 is a webtoon panel, which is a Naver product rather than neutral imagery",
  toss: "d1, m2 and m4 carry 토스 in the headline; m1 shows the toss wordmark; m9/m10 name 토스포인트 and 토스뱅크; m3 (내 상점), m5 (금리 분석) and m7 (내 보험 리포트) are Toss's own product UI, excluded on the same ground as Figma's pen tool (grok-4.6, 2026-08-23)",
  wanted: "every card carries the 합격보상금 100만원 campaign overlay — unique copy, even though it does not spell the brand's name",
};

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

/** Every sample across every surface, labelled the way the inspection labelled them. */
function labelledSamples(evidence) {
  const out = [];
  const surfaces = evidence.surfaces ?? { "desktop-1440": { imagery: evidence.imagery } };
  for (const [id, surface] of Object.entries(surfaces)) {
    const prefix = SURFACE_PREFIX[id] ?? id[0];
    for (const [i, sample] of (surface?.imagery?.samples ?? []).entries()) {
      out.push({ label: `${prefix}${i + 1}`, surface: id, sample });
    }
  }
  return out;
}

async function buildBrand(brand) {
  const evidencePath = join(EVIDENCE_ROOT, brand, "evidence.json");
  if (!existsSync(evidencePath)) return { brand, skipped: "no evidence" };
  const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
  const samples = labelledSamples(evidence);
  if (samples.length === 0) {
    return { brand, stimuli: 0, reason: "brand has no imagery samples on any surface; no ceiling measurable" };
  }

  const pinned = INSPECTED_AGAINST[brand];
  if (pinned !== evidence.capturedAt) {
    return {
      brand,
      stimuli: 0,
      blocked: "selection was inspected against a different capture",
      inspectedAgainst: pinned ?? null,
      captureOnDisk: evidence.capturedAt,
      todo: `re-inspect ${samples.length} samples at 400px and update QUALIFYING + INSPECTED_AGAINST for ${brand}`,
    };
  }

  const qualifying = QUALIFYING[brand] ?? [];
  const outDir = join(OUT_ROOT, brand);
  mkdirSync(outDir, { recursive: true });
  // Clear before rebuilding. The pin stops a stale *selection* being applied to
  // a new capture, but it does nothing about stale *files*: the previous
  // naming scheme left s1…s5 sitting in these directories, and a reader
  // pointed at the folder would have used them alongside the new ones.
  const stale = readdirSync(outDir).filter((f) => f.endsWith(".png"));
  for (const f of stale) rmSync(join(outDir, f), { force: true });
  const built = [];
  const missing = [];

  for (const { label, surface, sample } of samples) {
    if (!qualifying.includes(label)) continue;
    const src = join(EVIDENCE_ROOT, brand, sample.file);
    if (!existsSync(src)) { missing.push(label); continue; }
    const out = join(outDir, `${label}.png`);
    await execFileAsync("ffmpeg", ["-loglevel", "error", "-y", "-i", src, "-c", "copy", out])
      .catch(async () => { await execFileAsync("ffmpeg", ["-loglevel", "error", "-y", "-i", src, out]); });
    built.push({ label, surface, from: sample.file, sourceAlt: sample.alt ?? "", output: `ceiling/${brand}/${label}.png` });
  }

  const named = new Set(samples.map((s) => s.label));
  const unknownLabels = qualifying.filter((l) => !named.has(l));

  // Fold status is derivable from what the capture already stores, so it is
  // reported here rather than requiring a recapture. A stimulus below the fold
  // is still the brand's own published imagery — it is simply not `H1`.
  const foldOf = (surfaceId, sample) => {
    const vh = (evidence.surfaces?.[surfaceId]?.viewport?.height) ?? 900;
    const y = sample.docBox?.y;
    if (y == null) return null;
    return y < vh && y + (sample.docBox.h ?? 0) > 0;
  };
  for (const b of built) {
    const match = samples.find((s) => s.label === b.label);
    b.aboveFold = match ? foldOf(match.surface, match.sample) : null;
  }

  return {
    brand,
    stimuli: built.length,
    sufficient: built.length >= STIMULI_PER_BRAND,
    usedForCb: built.slice(0, CB_TAKES_FIRST).map((b) => b.label),
    shortfallIsBrandProperty: built.length >= STIMULI_PER_BRAND ? undefined : SHORTFALL_IS_BRAND_PROPERTY.has(brand),
    shortfall: built.length >= STIMULI_PER_BRAND ? null : `${built.length}/${STIMULI_PER_BRAND}`,
    clearedBeforeBuild: stale.length ? stale : undefined,
    // A label in the selection that the capture does not contain means the two
    // have drifted apart even though the pin matched. Silence would hide it.
    unknownLabels: unknownLabels.length ? unknownLabels : undefined,
    missingFiles: missing.length ? missing : undefined,
    excluded: built.length < samples.length ? EXCLUSIONS[brand] ?? "not recorded" : undefined,
    built,
  };
}

const brands = arg("brand")
  ? [arg("brand")]
  : readdirSync(EVIDENCE_ROOT)
      .filter((b) => !b.startsWith("_") && !b.startsWith(".") && existsSync(join(EVIDENCE_ROOT, b, "evidence.json")))
      .sort();

const results = [];
for (const brand of brands) results.push(await buildBrand(brand));

mkdirSync(OUT_ROOT, { recursive: true });
const manifest = {
  builtAt: new Date().toISOString(),
  method: {
    kind: "selection, not alteration",
    rule: "a sample qualifies when it carries no text naming the brand or its products, and is not the brand's own product UI",
    thirdPartyMarks: "allowed — an LG laptop in a Karrot listing is what that brand photographs, not a label on it",
    inspectedAt: "2026-08-23, contact sheets at 400px per tile",
    surfaces: "both; labels are d* for desktop-1440 and m* for mobile-390",
    pinning: "each brand's selection names the capture it was inspected against; a mismatch blocks that brand instead of reusing stale indices",
    rejectedApproach: "centre crop — web creative sets brand copy mid-frame, so cropping removed composition and kept the identifiers",
  },
  stimuliPerBrand: STIMULI_PER_BRAND,
  results,
};
writeFileSync(join(OUT_ROOT, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  out: OUT_ROOT,
  measurable: results.filter((r) => r.sufficient).map((r) => r.brand),
  short: results.filter((r) => !r.sufficient && !r.blocked).map((r) => `${r.brand}:${r.stimuli ?? 0}`),
  blocked: results.filter((r) => r.blocked).map((r) => r.brand),
}, null, 1));
