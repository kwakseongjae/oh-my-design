/**
 * verify.json — how far a generated image sits from the snapshot it cites.
 *
 * Implements RUBRIC.md §4.2 as written, including the parts that exist to stop
 * this tool from flattering anyone: it reads only fields the evidence actually
 * resolved, it never substitutes a neighbouring field for a missing one, and a
 * snapshot with fewer than two eligible numeric fields is reported as unusable
 * rather than scored on one.
 *
 * The palette procedure is pinned to analysis.mjs's real measurement — 5-bit
 * per channel, top six bins, coverage from stored four-decimal values — because
 * a rubric that says "compare palettes" without saying how is a rubric each
 * implementation scores differently.
 *
 *   node verify.mjs --brand musinsa --generated ../02-generated/musinsa/img-01.png
 *   node verify.mjs --brand musinsa --baseline
 *
 * The baseline mode exists because a score is uninterpretable on its own. The
 * source reference is a median across a brand's own samples, so even one of
 * that brand's real images does not score 100 against it — Musinsa's first crop
 * scores 49.7. Without knowing that, "this arm scored 62" reads as a failure
 * when it may be closer to the brand than the brand's own images are to each
 * other. Baseline scores every source sample against the aggregate and reports
 * the distribution to compare arms against.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { light, palette, subject, toRgb } from "./analysis.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const clamp = (x) => Math.max(0, Math.min(100, x));
const score = (e, tolerance) => +clamp(100 * (1 - e / tolerance)).toFixed(2);

/* ------------------------------------------------------------ colour ------ */

/** sRGB 8-bit to CIE Lab, D65, standard transfer function. */
function rgbToLab(r, g, b) {
  const lin = (c) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const [R, G, B] = [lin(r), lin(g), lin(b)];
  // sRGB D65 matrix
  const X = (0.4124564 * R + 0.3575761 * G + 0.1804375 * B) / 0.95047;
  const Y = 0.2126729 * R + 0.7151522 * G + 0.0721750 * B;
  const Z = (0.0193339 * R + 0.1191920 * G + 0.9503041 * B) / 1.08883;
  const f = (t) => (t > 216 / 24389 ? Math.cbrt(t) : (841 / 108) * t + 4 / 29);
  const [fx, fy, fz] = [f(X), f(Y), f(Z)];
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

/** CIEDE2000. Written out rather than approximated — the rubric names it. */
function deltaE00([L1, a1, b1], [L2, a2, b2]) {
  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;
  const C1 = Math.hypot(a1, b1);
  const C2 = Math.hypot(a2, b2);
  const Cbar = (C1 + C2) / 2;
  const G = 0.5 * (1 - Math.sqrt(Cbar ** 7 / (Cbar ** 7 + 25 ** 7)));
  const a1p = (1 + G) * a1;
  const a2p = (1 + G) * a2;
  const C1p = Math.hypot(a1p, b1);
  const C2p = Math.hypot(a2p, b2);
  const h = (x, y) => {
    if (x === 0 && y === 0) return 0;
    const angle = Math.atan2(y, x) * deg;
    return angle >= 0 ? angle : angle + 360;
  };
  const h1p = h(a1p, b1);
  const h2p = h(a2p, b2);

  const dLp = L2 - L1;
  const dCp = C2p - C1p;
  let dhp = 0;
  if (C1p * C2p !== 0) {
    dhp = h2p - h1p;
    if (dhp > 180) dhp -= 360;
    else if (dhp < -180) dhp += 360;
  }
  const dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin((dhp * rad) / 2);

  const Lbarp = (L1 + L2) / 2;
  const Cbarp = (C1p + C2p) / 2;
  let hbarp = h1p + h2p;
  if (C1p * C2p !== 0) {
    if (Math.abs(h1p - h2p) > 180) hbarp += h1p + h2p < 360 ? 360 : -360;
    hbarp /= 2;
  }

  const T = 1
    - 0.17 * Math.cos((hbarp - 30) * rad)
    + 0.24 * Math.cos(2 * hbarp * rad)
    + 0.32 * Math.cos((3 * hbarp + 6) * rad)
    - 0.20 * Math.cos((4 * hbarp - 63) * rad);
  const dTheta = 30 * Math.exp(-(((hbarp - 275) / 25) ** 2));
  const Rc = 2 * Math.sqrt(Cbarp ** 7 / (Cbarp ** 7 + 25 ** 7));
  const Sl = 1 + (0.015 * (Lbarp - 50) ** 2) / Math.sqrt(20 + (Lbarp - 50) ** 2);
  const Sc = 1 + 0.045 * Cbarp;
  const Sh = 1 + 0.015 * Cbarp * T;
  const Rt = -Math.sin(2 * dTheta * rad) * Rc;

  return Math.sqrt(
    (dLp / Sl) ** 2 + (dCp / Sc) ** 2 + (dHp / Sh) ** 2 + Rt * (dCp / Sc) * (dHp / Sh),
  );
}

/**
 * Coverage-weighted palette distance, §4.2. For each source bin, the nearest
 * generated bin by ΔE00 — one-to-one matching is deliberately not enforced,
 * because a generated image that collapses two source colours into one should
 * read as close on both, and the coverage weights carry the penalty instead.
 */
function paletteError(sourceBins, generatedBins) {
  if (!sourceBins?.length || !generatedBins?.length) return null;
  const genLab = generatedBins.map((b) => rgbToLab(...hexToRgb(b.hex)));
  let weighted = 0;
  let weight = 0;
  for (const bin of sourceBins) {
    const lab = rgbToLab(...hexToRgb(bin.hex));
    const d = Math.min(...genLab.map((g) => deltaE00(lab, g)));
    weighted += bin.coverage * d;
    weight += bin.coverage;
  }
  return weight ? weighted / weight : null;
}

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

/* -------------------------------------------------------------- main ------ */

const brand = arg("brand");
const generatedPath = arg("generated");
const baselineMode = process.argv.includes("--baseline");
if (!brand || (!generatedPath && !baselineMode)) {
  console.error("usage: verify.mjs --brand <id> (--generated <image> | --baseline) [--out <verify.json>]");
  process.exit(1);
}

const evidencePath = join(EVIDENCE_ROOT, brand, "evidence.json");
if (!existsSync(evidencePath)) {
  console.error(`no evidence for ${brand}`);
  process.exit(1);
}
const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
const aggregate = evidence.imagery?.aggregate ?? {};
const samples = evidence.imagery?.samples ?? [];

// The palette reference is the largest sample — which, given samples are sorted
// by area share, is the frame the codebook calls H1. Named here because the
// rubric fixes the procedure but not which source frame it runs against.
const paletteSource = samples[0] ?? null;

async function scoreImage(imagePath) {
const rgb = await toRgb(imagePath, 160);
const generated = {
  palette: palette(rgb),
  light: light(rgb),
  subject: subject(rgb),
  aspect: +(rgb.width / rgb.height).toFixed(3),
};

const fields = [];

const push = (name, sourceValue, error, tolerance, note) => {
  if (sourceValue === null || sourceValue === undefined || error === null) {
    fields.push({ field: name, eligible: false, reason: note ?? "source field unresolved" });
    return;
  }
  fields.push({ field: name, eligible: true, error: +error.toFixed(4), score: score(error, tolerance) });
};

push("aspect", aggregate.aspects,
  aggregate.aspects ? Math.abs(generated.aspect / aggregate.aspects - 1) : null, 0.10);

push("meanLuma", aggregate.meanLuma,
  aggregate.meanLuma != null ? Math.abs(generated.light.meanLuma - aggregate.meanLuma) : null, 0.20);

push("dynamicRange", aggregate.dynamicRange,
  aggregate.dynamicRange != null ? Math.abs(generated.light.dynamicRange - aggregate.dynamicRange) : null, 0.20);

const hasSubject = aggregate.subjectCenterX != null && generated.subject?.resolved;
push("subjectCentre",
  aggregate.subjectCenterX ?? null,
  hasSubject
    ? Math.hypot(generated.subject.center.x - aggregate.subjectCenterX, generated.subject.center.y - aggregate.subjectCenterY)
    : null,
  0.25,
  aggregate.subjectCenterX == null
    ? "source placement omitted — fewer than the resolved-sample floor"
    : "generated frame has no figure-ground separation");

const pErr = paletteSource ? paletteError(paletteSource.palette, generated.palette) : null;
push("palette", paletteSource ? 1 : null, pErr, 25,
  paletteSource ? "palette distance not computable" : "no source sample to compare against");

const eligible = fields.filter((f) => f.eligible);
const numericScore = eligible.length
  ? +(eligible.reduce((s, f) => s + f.score, 0) / eligible.length).toFixed(2)
  : null;

return {
  brand,
  generated: imagePath,
  evidenceCapturedAt: evidence.capturedAt,
  paletteSource: paletteSource?.file ?? null,
  fields,
  eligibleCount: eligible.length,
  // §4.2: below two eligible fields the snapshot is not a usable comparison
  // input, and the block is replaced before running rather than scored thin.
  usable: eligible.length >= 2,
  numericScore: eligible.length >= 2 ? numericScore : null,
  note: eligible.length >= 2
    ? "fields are same-day snapshot adherence, not brand invariants"
    : "fewer than two eligible numeric fields — replace this block before running",
};
}

if (baselineMode) {
  // Every one of the brand's own samples, scored against its own aggregate.
  // This is the spread an arm has to be read against.
  const scores = [];
  for (const sample of samples) {
    const path = join(EVIDENCE_ROOT, brand, sample.file.replace(/^capture\//, "capture/"));
    if (!existsSync(path)) continue;
    const r = await scoreImage(path);
    if (r.numericScore != null) scores.push({ file: sample.file, score: r.numericScore });
  }
  const values = scores.map((s) => s.score).sort((a, b) => a - b);
  const at = (q) => (values.length ? +values[Math.floor(q * (values.length - 1))].toFixed(2) : null);
  const out = {
    brand,
    what: "each source sample scored against the brand's own aggregate",
    why: "an arm's score is only meaningful against this spread",
    n: values.length,
    min: at(0), p25: at(0.25), median: at(0.5), p75: at(0.75), max: at(1),
    samples: scores,
  };
  const outPath = arg("out");
  if (outPath) writeFileSync(outPath, `${JSON.stringify(out, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(out, null, 1));
} else {
  const result = await scoreImage(generatedPath);
  const outPath = arg("out");
  if (outPath) writeFileSync(outPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(result, null, 1));
}
