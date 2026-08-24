/**
 * Media-evidence capture, Playwright channel.
 *
 * The token capture already in this repo (web/scripts/capture-reference-evidence.ts)
 * answers "what colours and fonts does this brand use". It cannot answer the
 * question an image generator needs: *where does the subject sit, how is it lit,
 * how long does a shot hold*. Those are the numbers a prompt has to cite if the
 * output is going to look like the brand rather than like a generator's idea of
 * the brand.
 *
 * Two evidence domains, kept apart on purpose — an earlier version conflated
 * them and produced a sage-green "Musinsa palette" off one day's promo banner:
 *
 *   chrome   — the interface the brand owns: header, primary control, type
 *              scale. Stable across campaigns. Read from computed styles.
 *   imagery  — the photographs it publishes. Volatile per campaign, so it is
 *              measured as a distribution across many samples, never one hero.
 *
 * Both viewports are captured. Desktop alone measures the derivative for Korean
 * commerce, where the phone layout is the one that gets designed.
 *
 * The page code lives in collectors.mjs and is shared with the Aside channel,
 * because keeping two copies cost the same bug twice.
 *
 *   node capture-media-evidence.mjs --brand musinsa --url https://www.musinsa.com/category/001
 */

import { chromium } from "playwright-core";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  attritionOf, COLLECT_CHROME, COLLECT_IMAGERY, DISMISS_SELECTORS, FIND_VIDEO, REFIND_BOX, SCROLL_TO,
} from "./collectors.mjs";
import {
  aggregateSubject, cropTo, light, median, palette, renderedCanvas, subject, toRgb,
} from "./analysis.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");

const SURFACES = [
  { id: "desktop-1440", viewport: { width: 1440, height: 900 } },
  { id: "mobile-390", viewport: { width: 390, height: 844 } },
];

const IMAGERY_SAMPLES = 12;
const VIDEO_FRAMES = 8;

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function dismissObstructions(page) {
  await page.keyboard.press("Escape").catch(() => {});
  for (const selector of DISMISS_SELECTORS) {
    const locator = page.locator(selector).first();
    if (await locator.isVisible({ timeout: 150 }).catch(() => false)) {
      await locator.click({ timeout: 600 }).catch(() => {});
    }
  }
}

/**
 * Samples a hero video by seeking and screenshotting, so it works whether or
 * not the source is fetchable cross-origin.
 */
async function sampleVideo(page, duration, outDir, prefix) {
  const handle = page.locator("video").first();
  const frames = [];
  for (let i = 0; i < VIDEO_FRAMES; i++) {
    const t = (duration * (i + 0.5)) / VIDEO_FRAMES;
    await page.evaluate((time) => {
      const v = document.querySelector("video");
      if (v) { v.pause(); v.currentTime = time; }
    }, t);
    await page.waitForTimeout(400);
    const png = await handle.screenshot({ timeout: 6000 }).catch(() => null);
    if (!png) continue;
    const framePath = join(outDir, `${prefix}-video-frame-${String(i + 1).padStart(2, "0")}.png`);
    writeFileSync(framePath, png);
    frames.push({ t: +t.toFixed(2), rgb: await toRgb(framePath, 96) });
  }
  if (frames.length < 2) return { sampled: frames.length, note: "too few frames to measure motion" };

  const distances = [];
  for (let i = 1; i < frames.length; i++) {
    const a = frames[i - 1].rgb.data, b = frames[i].rgb.data;
    const len = Math.min(a.length, b.length);
    let sum = 0;
    for (let p = 0; p < len; p++) sum += Math.abs(a[p] - b[p]);
    distances.push({ from: frames[i - 1].t, to: frames[i].t, delta: +(sum / len / 255).toFixed(4) });
  }
  const deltas = distances.map((d) => d.delta);
  const mean = deltas.reduce((s, d) => s + d, 0) / deltas.length;
  const cuts = distances.filter((d) => d.delta > Math.max(0.12, mean * 2.2));
  return {
    sampled: frames.length,
    frameDistances: distances,
    // Secondary: frame distance cannot separate object motion, camera motion,
    // lighting change and cuts. Cut count is the part worth citing.
    motionMagnitude: +mean.toFixed(4),
    cutCount: cuts.length,
    cutsAt: cuts.map((c) => c.to),
    shotLengthSec: cuts.length ? +(duration / (cuts.length + 1)).toFixed(2) : +duration.toFixed(2),
  };
}

/** One viewport, start to finish. Identical logic at every surface. */
async function captureSurface(page, surface, captureDir) {
  const startedAt = Date.now();
  await page.setViewportSize(surface.viewport);
  await page.waitForTimeout(1200);

  // A string is evaluated as an expression, so it is invoked here rather
  // than handed to Playwright as a function with an argument.
  const chrome = await page.evaluate(`${COLLECT_CHROME}()`);

  // Scroll once so lazy-loaded imagery attaches before enumeration.
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5));
  await page.waitForTimeout(1600);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);

  const frameShot = join(captureDir, `${surface.id}-viewport.png`);
  writeFileSync(frameShot, await page.screenshot());
  chrome.pageBackgroundRendered = renderedCanvas(palette(await toRgb(frameShot, 200))[0], chrome.pageBackgroundComputed);

  const collected = await page.evaluate(`${COLLECT_IMAGERY}(${IMAGERY_SAMPLES})`);
  const candidates = collected.candidates;
  const funnel = { ...collected.funnel, kept: candidates.length, framed: 0, cropped: 0, analysed: 0 };

  const samples = [];
  for (const [i, candidate] of candidates.entries()) {
    const label = String(i + 1).padStart(2, "0");
    const framePath = join(captureDir, `${surface.id}-frame-${label}.png`);
    const cropPath = join(captureDir, `${surface.id}-imagery-${label}.png`);

    const want = { ...candidate.docBox, tag: candidate.tag };
    await page.evaluate(`${SCROLL_TO}(${JSON.stringify(want)})`);
    await page.waitForTimeout(700);
    const box = await page.evaluate(`${REFIND_BOX}(${JSON.stringify(want)})`);
    if (!box) continue;
    funnel.framed++;

    writeFileSync(framePath, await page.screenshot());
    try {
      await cropTo(framePath, cropPath, box.pixelBox);
    } catch {
      continue;
    }
    funnel.cropped++;
    rmSync(framePath, { force: true });

    const rgb = await toRgb(cropPath);
    funnel.analysed++;
    samples.push({
      ...candidate,
      clipped: box.clipped,
      matchedBy: box.matchedBy,
      file: `capture/${surface.id}-imagery-${label}.png`,
      palette: palette(rgb),
      light: light(rgb),
      subject: subject(rgb),
    });
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  const lits = samples.map((s) => s.light);
  const resolved = samples.map((s) => s.subject).filter((s) => s?.resolved);

  const video = await page.evaluate(`${FIND_VIDEO}()`);
  const motion = video.present && video.duration
    ? { ...video, ...(await sampleVideo(page, video.duration, captureDir, surface.id)) }
    : video;

  return {
    viewport: surface.viewport,
    chrome,
    imagery: {
      sampled: samples.length,
      funnel,
      attrition: attritionOf(funnel),
      samples,
      aggregate: {
        meanLuma: median(lits.map((l) => l.meanLuma)),
        dynamicRange: median(lits.map((l) => l.dynamicRange)),
        luminanceGradients: lits.reduce((acc, l) => ({ ...acc, [l.luminanceGradient]: (acc[l.luminanceGradient] ?? 0) + 1 }), {}),
        aspects: median(samples.map((s) => s.aspect)),
        ...aggregateSubject(resolved, samples.length),
      },
    },
    motion,
    durationMs: Date.now() - startedAt,
  };
}

/* ----------------------------------------------------------------- main ---- */

const brand = arg("brand");
const url = arg("url");
if (!brand || !url) {
  console.error("usage: capture-media-evidence.mjs --brand <id> --url <official url>");
  process.exit(1);
}

const outDir = join(EVIDENCE_ROOT, brand);
const captureDir = join(outDir, "capture");
mkdirSync(captureDir, { recursive: true });

const startedAt = Date.now();
const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({
  viewport: SURFACES[0].viewport,
  deviceScaleFactor: 2,
  locale: "ko-KR",
  // Pinned, not inherited. Karrot came back with a near-black canvas because
  // the browser profile was in dark mode and the site honours the system
  // preference — so brands were being measured under different schemes.
  colorScheme: "light",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
});
const page = await context.newPage();

const evidence = {
  brand,
  capturedAt: new Date().toISOString(),
  source: { url },
  method: {
    channel: "playwright",
    note: "chrome and imagery are separate evidence domains; imagery is a distribution across samples, never one hero",
    imagerySamplesRequested: IMAGERY_SAMPLES,
    locale: "ko-KR",
    colorScheme: "light",
    surfaces: SURFACES.map((s) => s.id),
  },
  surfaces: {},
};

try {
  const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  evidence.source.status = response?.status() ?? null;
  await page.waitForTimeout(2500);
  await dismissObstructions(page);
  await page.waitForTimeout(1200);
  evidence.source.finalUrl = page.url();
  evidence.source.title = await page.title();

  for (const surface of SURFACES) {
    evidence.surfaces[surface.id] = await captureSurface(page, surface, captureDir);
  }
} catch (error) {
  evidence.error = String(error).split("\n")[0];
} finally {
  await browser.close();
}

evidence.method.totalDurationMs = Date.now() - startedAt;

// Desktop also stays at the top level so existing readers keep working while
// the surface-keyed shape spreads.
const primary = evidence.surfaces[SURFACES[0].id];
if (primary) {
  evidence.chrome = primary.chrome;
  evidence.imagery = primary.imagery;
  evidence.motion = primary.motion;
}

writeFileSync(join(outDir, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  brand,
  ok: !evidence.error,
  error: evidence.error ?? null,
  seconds: +(evidence.method.totalDurationMs / 1000).toFixed(1),
  surfaces: Object.fromEntries(Object.entries(evidence.surfaces).map(([id, s]) => [id, {
    samples: s.imagery.sampled,
    suspect: s.imagery.attrition.suspect ? s.imagery.attrition.reasons : false,
    canvas: s.chrome.pageBackgroundRendered?.hex ?? null,
  }])),
  out: outDir,
}, null, 1));
