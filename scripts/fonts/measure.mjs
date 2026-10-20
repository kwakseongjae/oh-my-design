#!/usr/bin/env node
// Measure a brand face against open-licence candidates (spec/design-md-v3.md §6.3).
//
//   node scripts/fonts/measure.mjs <target id> [--cache <dir>] [--out <dir>]
//
// Method — one method for every face:
//   1. Open the brand's own first-party page (the surface the reference cites for the face) in
//      headless Chromium (playwright-core). The brand face is the one that page loaded; nothing of
//      it is downloaded, copied or parsed.
//   2. Inject every candidate into the same page as a FontFace (bytes served from the local cache
//      through page.route), so brand and candidates are measured by the same canvas code, in the
//      same renderer, at the same size and weights.
//   3. Before a face's numbers count, prove the face drew the sample: the subsets are loaded
//      (document.fonts.load / check), the result is identical whether the fallback is serif or
//      monospace and differs from the bare fallback, and Chrome's own record of the fonts used for
//      a span of the sample (CDP CSS.getPlatformFontsForNode) names only web fonts. A face that
//      fails is "not drawn" for that script and cannot be chosen.
//   4. Metrics (normalised to em at the measurement size):
//        latin   xHeightRatio = mean ink top of x v w z ÷ mean ink top of H I E F T
//        hangul  xHeightRatio = mean ink height (ascent + descent) of the sample syllables ÷ 1em
//                (the Hangul "body height" ratio — 자면률; Hangul has no x-height)
//        both    avgAdvance   = advance of the sample sentence ÷ its code-point count
//      plus informative values (ascender, descender, digit advance, ink top/bottom) that are
//      recorded but not scored.
//
// Canvas applies automatic optical sizing (an opsz face such as Inter renders its display master
// at 200px), so all faces are measured at the reference's own UI size, given per target.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { chromium } from "playwright-core";
import { CANDIDATES, poolFor } from "./candidates.mjs";
import { TARGETS } from "./targets.mjs";
import { ensureCandidateFiles, defaultCacheDir } from "./fetch-candidates.mjs";
import { readFontInfo } from "./sfnt.mjs";

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
export const DEFAULT_OUT = path.join(ROOT, "docs/research/2026-10-20-r11/fonts");

/** Fixed sample strings, recorded verbatim in every measurement. */
export const SAMPLES = {
  latin: {
    text: "The quick brown fox jumps over the lazy dog",
    digits: "0123456789",
    xHeight: ["x", "v", "w", "z"],
    capHeight: ["H", "I", "E", "F", "T"],
    ascender: ["b", "d", "h", "k", "l"],
    descender: ["g", "j", "p", "q", "y"],
  },
  hangul: {
    text: "다람쥐 헌 쳇바퀴에 타고파",
    body: ["다", "람", "쥐", "헌", "쳇", "바", "퀴", "에", "타", "고", "파"],
  },
};

const FONT_ROUTE = "/__omd_font_measure__/";
const alias = (family) => `omdc ${family}`;

// ── In-page measurement (runs inside the brand page; pure DOM / canvas APIs) ───────────────────
async function inPageMeasure({ family, weights, sizePx, scripts, samples, probeWeights }) {
  const c = document.createElement("canvas").getContext("2d");
  c.fontKerning = "normal";
  const font = (w, fam, fb) => `${w} ${sizePx}px "${fam}"${fb ? `, ${fb}` : ""}`;
  const bare = (w, fb) => `${w} ${sizePx}px ${fb}`;
  const m = (f, text) => {
    c.font = f;
    const t = c.measureText(text);
    return { w: t.width / sizePx, a: t.actualBoundingBoxAscent / sizePx, d: t.actualBoundingBoxDescent / sizePx, l: t.actualBoundingBoxLeft / sizePx, r: t.actualBoundingBoxRight / sizePx };
  };
  const same = (x, y) => ["w", "a", "d", "l", "r"].every((k) => Math.abs(x[k] - y[k]) < 1e-9);
  const mean = (xs) => xs.reduce((s, x) => s + x, 0) / xs.length;
  const strings = (script) => {
    const s = samples[script];
    return [s.text, ...(s.digits ? [s.digits] : []), ...Object.values(s).filter(Array.isArray).flat()];
  };

  const out = { family, sizePx, weights: {} };
  for (const w of weights) {
    out.weights[w] = {};
    for (const script of scripts) {
      const all = strings(script);
      let loaded = true;
      for (const s of all) {
        try { await document.fonts.load(font(w, family), s); } catch { loaded = false; }
      }
      const check = all.every((s) => document.fonts.check(font(w, family), s));
      const invariant = all.every((s) => same(m(font(w, family, "serif"), s), m(font(w, family, "monospace"), s)));
      const differsFromFallback = all.every((s) => !same(m(font(w, family, "serif"), s), m(bare(w, "serif"), s)) || !same(m(font(w, family, "monospace"), s), m(bare(w, "monospace"), s)));
      const controlDiffers = all.filter((s) => !same(m(bare(w, "serif"), s), m(bare(w, "monospace"), s))).length;
      const f = font(w, family, "serif");
      const S = samples[script];
      const r = { drawn: { loaded, check, invariant, differsFromFallback, controlStringsThatDiffer: controlDiffers, strings: all.length } };
      if (script === "latin") {
        const cap = mean(S.capHeight.map((g) => m(f, g).a));
        const x = mean(S.xHeight.map((g) => m(f, g).a));
        const digitAdv = [...S.digits].map((g) => m(f, g).w);
        Object.assign(r, {
          xHeightRatio: x / cap,
          avgAdvance: m(f, S.text).w / [...S.text].length,
          capHeight: cap,
          xHeight: x,
          ascender: mean(S.ascender.map((g) => m(f, g).a)),
          descender: mean(S.descender.map((g) => m(f, g).d)),
          digitAdvance: m(f, S.digits).w / S.digits.length,
          digitsTabularByDefault: Math.max(...digitAdv) - Math.min(...digitAdv) < 1e-9,
        });
      } else if (script === "hangul") {
        const ink = S.body.map((g) => m(f, g));
        Object.assign(r, {
          xHeightRatio: mean(ink.map((k) => k.a + k.d)),
          avgAdvance: m(f, S.text).w / [...S.text].length,
          inkTop: mean(ink.map((k) => k.a)),
          inkBottom: mean(ink.map((k) => k.d)),
          inkWidth: mean(ink.map((k) => k.l + k.r)),
          syllableAdvance: mean(S.body.map((g) => m(f, g).w)),
        });
      }
      out.weights[w][script] = r;
    }
  }

  if (probeWeights) {
    // Does an intermediate weight render as its own instance (a wght axis) or snap to a declared
    // static weight? Compared on advance and ink of a fixed string.
    const probe = "Hamburgefonstiv HOMBURG";
    const v = Object.fromEntries(probeWeights.map((w) => [w, m(font(w, family, "serif"), probe)]));
    const pairs = [];
    for (let i = 1; i + 1 < probeWeights.length; i += 2) {
      const [lo, mid, hi] = [probeWeights[i - 1], probeWeights[i], probeWeights[i + 1]];
      pairs.push({ weight: mid, distinctFromNeighbours: !same(v[mid], v[lo]) && !same(v[mid], v[hi]), snapsTo: same(v[mid], v[hi]) ? hi : same(v[mid], v[lo]) ? lo : null });
    }
    out.weightProbe = { string: probe, intermediate: pairs };
  }
  return out;
}

function declaredFaces(family) {
  const faces = [...document.fonts].filter((f) => f.family.replace(/["']/g, "") === family);
  const by = {};
  for (const f of faces) {
    const k = `${f.weight}|${f.style}|${f.stretch}`;
    by[k] = by[k] ?? { weight: f.weight, style: f.style, stretch: f.stretch, faces: 0, loaded: 0 };
    by[k].faces++;
    if (f.status === "loaded") by[k].loaded++;
  }
  return Object.values(by).sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
}

async function addCandidateFaces(list) {
  const results = [];
  for (const { family, url, weight } of list) {
    const face = new FontFace(family, `url(${url})`, { weight: String(weight) });
    try {
      await face.load();
      document.fonts.add(face);
      results.push({ family, url, ok: true });
    } catch (e) {
      results.push({ family, url, ok: false, error: String(e) });
    }
  }
  return results;
}

function placeSpans(specs) {
  const box = document.createElement("div");
  box.id = "omd-font-measure";
  box.style.cssText = "position:absolute;left:0;top:0;opacity:0;pointer-events:none;white-space:pre";
  specs.forEach((s, i) => {
    const el = document.createElement("span");
    el.id = `omd-fm-${i}`;
    el.style.cssText = `font: ${s.weight} ${s.sizePx}px "${s.family}", serif; display:block`;
    el.textContent = s.text;
    box.appendChild(el);
  });
  document.body.appendChild(box);
  return specs.length;
}

// ── Node side ──────────────────────────────────────────────────────────────────────────────────
function scriptStrings(script) {
  const s = SAMPLES[script];
  return [s.text, ...(s.digits ? [s.digits] : []), ...Object.values(s).filter(Array.isArray).flat()].join(" ");
}

async function platformFonts(page, count) {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("DOM.enable");
  await cdp.send("CSS.enable");
  const { root } = await cdp.send("DOM.getDocument", { depth: -1 });
  const out = [];
  for (let i = 0; i < count; i++) {
    const { nodeId } = await cdp.send("DOM.querySelector", { nodeId: root.nodeId, selector: `#omd-fm-${i}` });
    const { fonts } = await cdp.send("CSS.getPlatformFontsForNode", { nodeId });
    out.push(fonts.map((f) => ({ familyName: f.familyName, postScriptName: f.postScriptName ?? null, isCustomFont: f.isCustomFont, glyphCount: f.glyphCount })));
  }
  await cdp.detach();
  return out;
}

async function openPage(browser, url) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, bypassCSP: true, serviceWorkers: "block" });
  const page = await context.newPage();
  const fontResponses = [];
  page.on("response", (r) => {
    if (/\.(woff2?|otf|ttf)(\?|$)/i.test(r.url()) && !r.url().includes(FONT_ROUTE)) fontResponses.push({ status: r.status(), url: r.url() });
  });
  const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90_000 });
  await page.waitForLoadState("networkidle", { timeout: 30_000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready.then(() => true));
  return { context, page, status: resp?.status() ?? null, finalUrl: page.url(), fontResponses };
}

/** Measure one family as `page` renders it, verified per script. */
async function measureFamily(page, family, target, { probe = false } = {}) {
  const res = await page.evaluate(inPageMeasure, {
    family,
    weights: target.weights,
    sizePx: target.sizePx,
    scripts: target.scripts,
    samples: SAMPLES,
    probeWeights: probe ? [400, 450, 500, 550, 600, 650, 700] : null,
  });
  // CDP: which fonts Chrome actually used for a span of each script's samples, per weight.
  await page.evaluate(() => document.getElementById("omd-font-measure")?.remove());
  const specs = [];
  for (const w of target.weights) for (const s of target.scripts) specs.push({ family, weight: w, sizePx: target.sizePx, text: scriptStrings(s), w, s });
  const n = await page.evaluate(placeSpans, specs.map(({ family: f, weight, sizePx, text }) => ({ family: f, weight, sizePx, text })));
  const pf = await platformFonts(page, n);
  specs.forEach((sp, i) => {
    const used = pf[i];
    const r = res.weights[sp.w][sp.s];
    r.drawn.platformFonts = used;
    r.drawn.onlyWebFonts = used.length > 0 && used.every((f) => f.isCustomFont);
    r.drawn.ok = r.drawn.loaded && r.drawn.check && r.drawn.invariant && r.drawn.differsFromFallback && r.drawn.onlyWebFonts;
  });
  return res;
}

export async function measureTarget(targetId, { cacheDir = defaultCacheDir(), outDir = DEFAULT_OUT } = {}) {
  const target = TARGETS[targetId];
  if (!target) throw new Error(`unknown target ${targetId}; known: ${Object.keys(TARGETS).join(", ")}`);
  const pool = [...new Set(target.scripts.flatMap((s) => poolFor(s, target.kind)))];
  const files = await ensureCandidateFiles(cacheDir, pool);

  const browser = await chromium.launch({ headless: true });
  const startedAt = new Date().toISOString();
  try {
    const { context, page, status, finalUrl, fontResponses } = await openPage(browser, target.page);
    const origin = new URL(finalUrl).origin;
    await page.route(`${origin}${FONT_ROUTE}**`, (route) => {
      const name = decodeURIComponent(new URL(route.request().url()).pathname.slice(FONT_ROUTE.length));
      const info = files[name];
      if (!info) return route.fulfill({ status: 404, body: "" });
      return route.fulfill({ status: 200, contentType: name.endsWith(".otf") ? "font/otf" : "font/ttf", headers: { "access-control-allow-origin": "*" }, body: fs.readFileSync(info.path) });
    });

    // Brand face first, before any candidate exists in the page.
    const brand = await measureFamily(page, target.family, target, { probe: true });
    brand.declared = await page.evaluate(declaredFaces, target.family);

    const injected = await page.evaluate(addCandidateFaces, pool.flatMap((c) => c.files.map((f) => ({ family: alias(c.family), url: `${FONT_ROUTE}${encodeURIComponent(f.file)}`, weight: f.weight }))));
    const failed = injected.filter((r) => !r.ok);
    if (failed.length) throw new Error(`candidate faces failed to load: ${failed.map((f) => `${f.family} ${f.error}`).join("; ")}`);

    const candidates = [];
    for (const c of pool) {
      const r = await measureFamily(page, alias(c.family), target);
      const fileInfo = c.files.map((f) => {
        const buf = fs.readFileSync(files[f.file].path);
        let sfnt = null;
        try { sfnt = readFontInfo(buf); } catch { /* not an uncompressed sfnt */ }
        return { file: f.file, weight: f.weight, url: f.url, ...(f.zipPath ? { zipPath: f.zipPath } : {}), sha256: files[f.file].sha256, sfnt };
      });
      candidates.push({ family: c.family, provider: c.provider, kind: c.kind, licence: c.licence, licenceSource: c.licenceSource, weights: c.weights, metadataSource: c.metadataSource, classification: c.classification, cssUrl: c.cssUrl ?? null, files: fileInfo, measured: r });
    }
    await context.close();

    // Reproducibility: the same brand face, measured again on the cross-check pages.
    const crossChecks = [];
    for (const url of target.crossCheckPages ?? []) {
      const x = await openPage(browser, url);
      const again = await measureFamily(x.page, target.family, target);
      crossChecks.push({ url, status: x.status, measured: again });
      await x.context.close();
    }

    const record = {
      schema: 1,
      target: targetId,
      referenceId: target.referenceId,
      family: target.family,
      kind: target.kind,
      scripts: target.scripts,
      weights: target.weights,
      sizePx: target.sizePx,
      classification: target.classification,
      page: { url: target.page, finalUrl, status, measuredAt: startedAt, brandFontResponses: fontResponses.length, brandFontResponseSample: fontResponses.slice(0, 8) },
      tool: {
        script: "scripts/fonts/measure.mjs",
        method: "canvas 2D measureText (advance + actualBoundingBox), CDP CSS.getPlatformFontsForNode",
        playwrightCore: require("playwright-core/package.json").version,
        chromium: browser.version(),
        platform: `${process.platform}-${process.arch}`,
      },
      samples: Object.fromEntries(target.scripts.map((s) => [s, SAMPLES[s]])),
      brand,
      candidates,
      crossChecks,
    };
    fs.mkdirSync(outDir, { recursive: true });
    const file = path.join(outDir, `${targetId}.measurements.json`);
    fs.writeFileSync(file, `${JSON.stringify(record, null, 2)}\n`);
    return { file, record };
  } finally {
    await browser.close();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const get = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const ids = args.filter((a, i) => !a.startsWith("--") && !(i > 0 && args[i - 1].startsWith("--")));
  for (const id of ids.length ? ids : Object.keys(TARGETS)) {
    const { file, record } = await measureTarget(id, { cacheDir: get("--cache") ?? defaultCacheDir(), outDir: get("--out") ?? DEFAULT_OUT });
    const drawn = Object.entries(record.brand.weights).flatMap(([w, s]) => Object.entries(s).map(([sc, r]) => `${w}/${sc}:${r.drawn.ok ? "drawn" : "NOT DRAWN"}`));
    console.log(`${id}: ${file}\n  brand ${record.family} ${drawn.join(" ")}`);
  }
}
