/**
 * Cross-checks a live capture against the catalog's own record of the brand.
 *
 * Two of this session's worst measurement defects were caught only because the
 * catalog disagreed: Musinsa's primary button came back #5ccca8 when
 * web/references/musinsa/DESIGN.md records #000000 (the collector had picked up
 * a campaign CTA), and a transparent page background was being reported as
 * #000000. Both were found by eye. Neither had to be.
 *
 * The catalog is an independent observation of the same brand, made at another
 * time by another method. That makes it the one automatic check available on
 * measurements that are otherwise unfalsifiable — a number the capture produced
 * alone can only be sanity-checked by looking at it.
 *
 * Disagreement is not proof the capture is wrong. Campaigns change, and the
 * catalog can be stale or itself mistaken. So this reports and ranks; it does
 * not fail a build.
 *
 * The first version compared the catalog's primary_color against the capture's
 * primaryButton and fired on seven of nine brands. The parser was right — the
 * comparison was not. The catalog records the brand's primary colour; the
 * capture records the most-repeated control surface, which on Karrot's search
 * results is a grey filter chip. Two different things.
 *
 * So the brand colour is tested for *presence* across everything the capture
 * saw, chrome and imagery both, and the report says where it was found. A
 * brand colour absent from an entire capture is the signal worth raising.
 *
 *   node cross-check.mjs --brand musinsa
 *   node cross-check.mjs --all
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { palette, toRgb } from "./analysis.mjs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");
const CATALOG_ROOT = resolve(HERE, "..", "..", "web", "references");

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

/* ------------------------------------------------------------ colour ------ */

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

function rgbToLab(r, g, b) {
  const lin = (c) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const [R, G, B] = [lin(r), lin(g), lin(b)];
  const X = (0.4124564 * R + 0.3575761 * G + 0.1804375 * B) / 0.95047;
  const Y = 0.2126729 * R + 0.7151522 * G + 0.0721750 * B;
  const Z = (0.0193339 * R + 0.1191920 * G + 0.9503041 * B) / 1.08883;
  const f = (t) => (t > 216 / 24389 ? Math.cbrt(t) : (841 / 108) * t + 4 / 29);
  const [fx, fy, fz] = [f(X), f(Y), f(Z)];
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

/** Plain CIE76. Enough to separate "same colour" from "different colour". */
function labDistance(hexA, hexB) {
  const [l1, a1, b1] = rgbToLab(...hexToRgb(hexA));
  const [l2, a2, b2] = rgbToLab(...hexToRgb(hexB));
  return Math.hypot(l1 - l2, a1 - a2, b1 - b2);
}

/* ----------------------------------------------------------- catalog ------ */

/**
 * Pulls colours and font families out of a catalog DESIGN.md. Deliberately
 * loose: the catalog is legacy 15-section prose with tables, and a strict
 * parser would report "no catalog values" on the files that vary, which reads
 * as agreement when it is silence.
 */
function readCatalog(brand) {
  const path = join(CATALOG_ROOT, brand, "DESIGN.md");
  if (!existsSync(path)) return null;
  const text = readFileSync(path, "utf8");

  const hexes = [...text.matchAll(/#([0-9a-fA-F]{6})\b/g)].map((m) => `#${m[1].toLowerCase()}`);
  const counts = new Map();
  for (const h of hexes) counts.set(h, (counts.get(h) ?? 0) + 1);

  const labelled = (label) => {
    // "| Canvas | #ffffff |" or "canvas: #ffffff" or "Canvas — #ffffff"
    const re = new RegExp(`${label}[^\\n#]{0,60}#([0-9a-fA-F]{6})`, "i");
    const m = re.exec(text);
    return m ? `#${m[1].toLowerCase()}` : null;
  };

  const families = [...text.matchAll(/font-family[^\n]*?["']?([A-Z][A-Za-z0-9 _-]{2,30})["']?/g)]
    .map((m) => m[1].trim());

  return {
    path: `web/references/${brand}/DESIGN.md`,
    canvas: labelled("canvas") ?? labelled("background"),
    primary: labelled("primary"),
    ink: labelled("ink") ?? labelled("text"),
    topHexes: [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([hex, n]) => ({ hex, mentions: n })),
    families: [...new Set(families)].slice(0, 5),
  };
}

/* -------------------------------------------------------------- main ------ */

/** Below this the two sources are describing the same colour. */
const AGREE = 8;
/** Above this it is not a shade difference; something measured the wrong thing. */
const CONFLICT = 25;

async function checkBrand(brand) {
  const evidencePath = join(EVIDENCE_ROOT, brand, "evidence.json");
  if (!existsSync(evidencePath)) return { brand, skipped: "no capture" };
  const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
  const catalog = readCatalog(brand);
  if (!catalog) {
    // A new brand has nothing to check against. Say so — silence here would
    // read as agreement.
    return { brand, status: "NO_CROSS_CHECK", reason: "brand not in catalog; capture is unverified by an independent source" };
  }

  const chrome = evidence.chrome ?? {};
  const captured = {
    canvas: chrome.pageBackgroundRendered?.resolved === false
      ? null
      : chrome.pageBackgroundRendered?.hex ?? chrome.pageBackgroundComputed ?? null,
    primary: chrome.primaryButton?.background ?? chrome.primaryButton?.borderColor ?? null,
    ink: chrome.bodyColor ?? null,
  };

  const rows = [];

  // Canvas is like-for-like: both sources mean the surface behind the content.
  if (catalog.canvas && captured.canvas) {
    const d = labDistance(catalog.canvas, captured.canvas);
    rows.push({
      field: "canvas", catalog: catalog.canvas, captured: captured.canvas, distance: +d.toFixed(1),
      verdict: d <= AGREE ? "AGREE" : d >= CONFLICT ? "CONFLICT" : "DRIFT",
    });
  } else {
    rows.push({ field: "canvas", catalog: catalog.canvas, captured: captured.canvas, verdict: "NOT_COMPARABLE" });
  }

  // The brand colour is tested for presence, not for equality with any one
  // field. Everything the capture saw is a candidate site for it.
  const seen = [];
  const push = (hex, where) => { if (hex) seen.push({ hex: hex.toLowerCase(), where }); };
  push(captured.canvas, "chrome.canvas");
  push(chrome.pageBackgroundComputed, "chrome.pageBackgroundComputed");
  push(chrome.bodyColor, "chrome.bodyColor");
  push(chrome.header?.background ?? chrome.header?.backgroundRendered?.hex, "chrome.header");
  push(chrome.primaryButton?.background, "chrome.primaryButton.background");
  push(chrome.primaryButton?.borderColor, "chrome.primaryButton.border");
  push(chrome.primaryButton?.color, "chrome.primaryButton.label");
  for (const t of chrome.typeScale ?? []) push(t.color, `typeScale.${t.tag}`);
  for (const [i, sample] of (evidence.imagery?.samples ?? []).entries()) {
    for (const bin of sample.palette ?? []) push(bin.hex, `imagery[${i + 1}]`);
  }
  // The whole frame, not only the sampled crops. Naver has no imagery and no
  // qualifying button, so without this there is almost nothing to search and
  // "brand colour absent" would only be saying the capture was thin.
  for (const name of ["viewport-1440.png", "viewport-pass-0.png"]) {
    const shot = join(EVIDENCE_ROOT, brand, "capture", name);
    if (!existsSync(shot)) continue;
    try {
      for (const bin of palette(await toRgb(shot, 200))) push(bin.hex, "viewport");
    } catch { /* a missing frame is not a finding */ }
    break;
  }

  if (catalog.primary && seen.length) {
    const scored = seen.map((s) => ({ ...s, d: labDistance(catalog.primary, s.hex) })).sort((a, b) => a.d - b.d);
    const best = scored[0];
    rows.push({
      field: "brandColourPresent", catalog: catalog.primary,
      nearest: best.hex, foundIn: best.where, distance: +best.d.toFixed(1),
      searchedSites: seen.length,
      // NOT_DOMINANT, not "absent". The search set is built from dominant
      // colour bins and a handful of chrome fields, so a brand colour used only
      // in a logo will not appear — Karrot's orange survives 87 candidate sites
      // for exactly that reason. What this says is that the capture is
      // dominated by colours that are not the brand's, which is worth reading
      // as thin coverage rather than as a contradiction.
      verdict: best.d <= AGREE ? "PRESENT" : best.d >= CONFLICT ? "NOT_DOMINANT" : "NEAR",
    });
  } else {
    rows.push({ field: "brandColourPresent", catalog: catalog.primary, verdict: "NOT_COMPARABLE" });
  }

  const conflicts = rows.filter((r) => r.verdict === "CONFLICT");
  const thin = rows.filter((r) => r.verdict === "NOT_DOMINANT");
  const comparable = rows.filter((r) => r.verdict !== "NOT_COMPARABLE");

  return {
    brand,
    status: conflicts.length ? "CONFLICT" : thin.length ? "THIN_COVERAGE" : comparable.length === 0 ? "NOT_COMPARABLE" : "OK",
    // Rank for human attention rather than pass/fail: a campaign really can
    // move a colour, and the catalog can be stale.
    priority: conflicts.length ? "inspect first — sources disagree on a like-for-like field"
      : thin.length ? "review coverage — the brand's colour is not among what this capture saw"
      : comparable.length === 0 ? "inspect — nothing comparable" : "none",
    rows,
    catalogFamilies: catalog.families,
    capturedFamilies: (chrome.typeScale ?? []).map((t) => t.family).filter((v, i, a) => v && a.indexOf(v) === i),
  };
}

const brands = process.argv.includes("--all")
  ? readdirSync(EVIDENCE_ROOT).filter((b) => existsSync(join(EVIDENCE_ROOT, b, "evidence.json"))).sort()
  : [arg("brand")].filter(Boolean);

if (brands.length === 0) {
  console.error("usage: cross-check.mjs --brand <id> | --all");
  process.exit(1);
}

const results = [];
for (const b of brands) results.push(await checkBrand(b));
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), agreeBelow: AGREE, conflictAbove: CONFLICT, results }, null, 1));
