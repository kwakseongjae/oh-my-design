/**
 * Media-evidence capture for the brand image/video dataset.
 *
 * The token capture already in this repo (web/scripts/capture-reference-evidence.ts)
 * answers "what colours and fonts does this brand use". It cannot answer the
 * question an image generator needs: *where does the subject sit, how is it lit,
 * how long does a shot hold*. Those are the numbers a prompt has to cite if the
 * output is going to look like the brand rather than like a generator's idea of
 * the brand.
 *
 * Two evidence domains, kept apart on purpose — the first version of this tool
 * conflated them and produced a sage-green "Musinsa palette" off one day's promo
 * banner:
 *
 *   chrome   — the interface the brand owns and keeps: header, nav, buttons,
 *              type scale. Stable across visits. Read from computed styles.
 *   imagery  — the photographs it publishes. Volatile per campaign, so it is
 *              measured as a distribution across many samples, never one hero.
 *
 * A single first-screen banner is recorded as *one labelled sample*, not as the
 * brand's visual language.
 *
 * Nothing that could not be measured is filled in with a plausible value. Where
 * figure-ground separation fails, the subject field is absent rather than
 * guessed — an unusable number is worse than a missing one, because a prompt
 * will happily cite it.
 *
 *   node capture-media-evidence.mjs --brand musinsa --url https://www.musinsa.com/
 */

import { chromium } from "playwright-core";
import { execFile } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };

/** How many published images to measure. Enough for a distribution, not a survey. */
const IMAGERY_SAMPLES = 12;
/** How many frames to sample across a hero video. Enough to see a cut cadence. */
const VIDEO_FRAMES = 8;

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}

const median = (xs) => {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  return +s[Math.floor(s.length / 2)].toFixed(3);
};

/* ------------------------------------------------------------------ page ---- */

/**
 * Consent and newsletter modals sit between us and the page on most commercial
 * sites. Same approach as the token capture: press Escape, then click anything
 * that reads as accept/close in either language.
 */
async function dismissObstructions(page) {
  await page.keyboard.press("Escape").catch(() => {});
  const selectors = [
    '[aria-label*="close" i]', '[aria-label*="dismiss" i]', '[aria-label*="닫기"]',
    'button:has-text("Accept")', 'button:has-text("Accept all")', 'button:has-text("I agree")',
    'button:has-text("동의")', 'button:has-text("모두 동의")', 'button:has-text("확인")',
    'button:has-text("同意")', 'button:has-text("接受")', '[id*="cookie" i] button',
    '[class*="cookie" i] button', '[id*="consent" i] button', '[class*="consent" i] button',
  ];
  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    if (await locator.isVisible({ timeout: 150 }).catch(() => false)) {
      await locator.click({ timeout: 600 }).catch(() => {});
    }
  }
}

/**
 * The interface the brand owns. This is the part that survives a campaign
 * change, so it is where "what does this brand look like" actually lives.
 */
async function collectChrome(page) {
  return page.evaluate(() => {
    const cs = (el) => (el ? getComputedStyle(el) : null);
    const hexOf = (rgb) => {
      const m = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(rgb || "");
      return m ? `#${[m[1], m[2], m[3]].map((v) => Number(v).toString(16).padStart(2, "0")).join("")}` : null;
    };

    const header = document.querySelector("header, [role=banner], nav")?.closest("header, [role=banner], nav") ?? null;
    const headerStyle = cs(header);

    // The primary button: the most visually committed control above the fold.
    let primary = null;
    let bestScore = -1;
    for (const el of document.querySelectorAll("button, a[class*=btn i], a[class*=button i], [role=button]")) {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight || r.width < 60 || r.height < 28) continue;
      const s = getComputedStyle(el);
      const bg = s.backgroundColor;
      if (!bg || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") continue;
      const score = r.width * r.height;
      if (score > bestScore) { bestScore = score; primary = { el, s, r }; }
    }

    const typeScale = [];
    for (const tag of ["h1", "h2", "h3", "p", "button"]) {
      const el = [...document.querySelectorAll(tag)].find((n) => {
        const r = n.getBoundingClientRect();
        return r.top < window.innerHeight * 3 && r.height > 8 && (n.innerText || "").trim();
      });
      if (!el) continue;
      const s = getComputedStyle(el);
      typeScale.push({
        tag,
        fontPx: +parseFloat(s.fontSize).toFixed(1),
        weight: s.fontWeight,
        family: s.fontFamily.split(",")[0].replace(/["']/g, "").trim(),
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
        color: hexOf(s.color),
      });
    }

    return {
      pageBackground: hexOf(cs(document.body)?.backgroundColor),
      bodyColor: hexOf(cs(document.body)?.color),
      header: headerStyle ? {
        background: hexOf(headerStyle.backgroundColor),
        heightPx: +header.getBoundingClientRect().height.toFixed(1),
        borderBottom: headerStyle.borderBottomWidth === "0px" ? null : headerStyle.borderBottomColor,
      } : null,
      primaryButton: primary ? {
        background: hexOf(primary.s.backgroundColor),
        color: hexOf(primary.s.color),
        radiusPx: +parseFloat(primary.s.borderRadius).toFixed(1),
        paddingY: +parseFloat(primary.s.paddingTop).toFixed(1),
        paddingX: +parseFloat(primary.s.paddingLeft).toFixed(1),
        fontPx: +parseFloat(primary.s.fontSize).toFixed(1),
        weight: primary.s.fontWeight,
        label: (primary.el.innerText || "").trim().slice(0, 40),
      } : null,
      typeScale,
    };
  });
}

/**
 * Published images worth measuring: big enough to be a creative decision rather
 * than an icon, within the first few screens, one per source.
 */
async function collectImagery(page, limit) {
  return page.evaluate((max) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const seen = new Set();
    const out = [];

    for (const el of document.querySelectorAll("img")) {
      const r = el.getBoundingClientRect();
      if (r.top > vh * 3 || r.bottom < 0) continue;
      if (r.width < 160 || r.height < 160) continue;
      const visibleWidth = Math.min(r.right, vw) - Math.max(r.left, 0);
      if (visibleWidth < r.width * 0.9) continue; // carousel slides parked off-screen
      const src = el.currentSrc || el.src;
      if (!src || seen.has(src)) continue;
      seen.add(src);

      // A derived CSS path is not unique — `locator(path).first()` resolved to
      // the same node for every sample, and nine "samples" measured identically.
      // Tag the node instead so each screenshot targets exactly this element.
      const marker = `omd-sample-${out.length + 1}`;
      el.setAttribute("data-omd-sample", marker);

      out.push({
        src,
        selector: `[data-omd-sample="${marker}"]`,
        alt: (el.alt || "").slice(0, 80),
        box: { x: +(r.x / vw).toFixed(4), y: +(r.y / vh).toFixed(4), w: +(r.width / vw).toFixed(4), h: +(r.height / vh).toFixed(4) },
        aspect: +(r.width / r.height).toFixed(3),
        areaShare: +((r.width * r.height) / (vw * vh)).toFixed(4),
        firstScreen: r.top < vh,
        intrinsic: { w: el.naturalWidth || null, h: el.naturalHeight || null },
      });
    }
    return out.sort((a, b) => b.areaShare - a.areaShare).slice(0, max);
  }, limit);
}

/** Video above the fold, if any — attributes only; frames are sampled separately. */
async function findVideo(page) {
  return page.evaluate(() => {
    const v = [...document.querySelectorAll("video")]
      .find((el) => { const r = el.getBoundingClientRect(); return r.top < window.innerHeight && r.width > 200; });
    if (!v) return null;
    const r = v.getBoundingClientRect();
    return {
      autoplay: v.autoplay, loop: v.loop, muted: v.muted,
      poster: v.poster || null,
      src: v.currentSrc || v.src || v.querySelector("source")?.src || null,
      duration: Number.isFinite(v.duration) && v.duration > 0 ? +v.duration.toFixed(2) : null,
      box: { w: +(r.width / window.innerWidth).toFixed(4), h: +(r.height / window.innerHeight).toFixed(4) },
      aspect: +(r.width / r.height).toFixed(3),
      intrinsic: { w: v.videoWidth || null, h: v.videoHeight || null },
    };
  });
}

/* --------------------------------------------------------------- pixels ---- */

/**
 * Decodes a PNG file to raw RGB at a small width.
 *
 * Files rather than pipes on both ends, deliberately: handing ffmpeg a ~1MB PNG
 * on stdin through child_process deadlocks — the parent is still writing stdin
 * while ffmpeg is already blocked writing stdout, and neither side drains.
 */
async function toRgb(pngPath, width = 160) {
  const rawPath = `${pngPath}.rgb`;
  await execFileAsync("ffmpeg", [
    "-loglevel", "error", "-y", "-i", pngPath,
    "-vf", `scale=${width}:-1`, "-f", "rawvideo", "-pix_fmt", "rgb24", rawPath,
  ]);
  const data = readFileSync(rawPath);
  rmSync(rawPath, { force: true });
  const height = Math.round(data.length / (width * 3));
  return { data, width, height };
}

const hex = (r, g, b) => `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
const luma = (r, g, b) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

/**
 * Dominant colours by 5-bit quantisation, reported with the share of the frame
 * they cover. Coverage is the part that matters for a prompt: "black at 42%" is
 * an instruction, "black is in the palette" is not.
 */
function palette({ data, width, height }) {
  const bins = new Map();
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2];
    const key = ((r >> 3) << 10) | ((g >> 3) << 5) | (b >> 3);
    const bin = bins.get(key) ?? { r: 0, g: 0, b: 0, n: 0 };
    bin.r += r; bin.g += g; bin.b += b; bin.n++;
    bins.set(key, bin);
  }
  const total = width * height;
  return [...bins.values()].sort((a, b) => b.n - a.n).slice(0, 6).map((bin) => {
    const r = Math.round(bin.r / bin.n), g = Math.round(bin.g / bin.n), b = Math.round(bin.b / bin.n);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return {
      hex: hex(r, g, b),
      coverage: +(bin.n / total).toFixed(4),
      saturation: +(max === 0 ? 0 : (max - min) / max).toFixed(3),
      luma: +luma(r, g, b).toFixed(3),
    };
  });
}

/**
 * Light description: how bright, how contrasty, and which way the brightness
 * falls off — a usable stand-in for "key light from camera left".
 */
function light({ data, width, height }) {
  const lumas = new Float64Array(width * height);
  let sum = 0;
  for (let i = 0; i < width * height; i++) {
    const v = luma(data[i * 3], data[i * 3 + 1], data[i * 3 + 2]);
    lumas[i] = v; sum += v;
  }
  const sortedL = Float64Array.from(lumas).sort();
  const at = (q) => +sortedL[Math.floor(q * (sortedL.length - 1))].toFixed(3);

  const meanOf = (fromX, toX, fromY, toY) => {
    let s = 0, n = 0;
    for (let y = fromY; y < toY; y++) for (let x = fromX; x < toX; x++) { s += lumas[y * width + x]; n++; }
    return n ? s / n : 0;
  };
  const dx = +(meanOf(Math.floor(width / 2), width, 0, height) - meanOf(0, Math.floor(width / 2), 0, height)).toFixed(3);
  const dy = +(meanOf(0, width, Math.floor(height / 2), height) - meanOf(0, width, 0, Math.floor(height / 2))).toFixed(3);
  const strongest = Math.abs(dx) >= Math.abs(dy)
    ? (dx > 0 ? "brighter right" : "brighter left")
    : (dy > 0 ? "brighter bottom" : "brighter top");

  return {
    meanLuma: +(sum / (width * height)).toFixed(3),
    p05: at(0.05), p50: at(0.5), p95: at(0.95),
    dynamicRange: +(at(0.95) - at(0.05)).toFixed(3),
    gradient: { dx, dy },
    direction: Math.max(Math.abs(dx), Math.abs(dy)) >= 0.04 ? strongest : "even",
  };
}

/**
 * Where the subject sits, without a saliency model: take the frame border as the
 * background reference, then find the centre of mass of everything that departs
 * from it.
 *
 * Returns null when the result is not trustworthy — if the deviating region
 * covers almost the whole frame there was no figure-ground to find, and a
 * centre-of-frame number would be an artefact. A prompt would cite it anyway,
 * so it must not exist.
 */
function subject({ data, width, height }) {
  const border = [];
  for (let x = 0; x < width; x++) border.push(x, (height - 1) * width + x);
  for (let y = 0; y < height; y++) border.push(y * width, y * width + width - 1);
  let br = 0, bg = 0, bb = 0;
  for (const i of border) { br += data[i * 3]; bg += data[i * 3 + 1]; bb += data[i * 3 + 2]; }
  const n = border.length;
  const bgColor = { r: br / n, g: bg / n, b: bb / n };

  // Spread of the border itself: a busy border means the image is edge-to-edge
  // content and there is no background to subtract.
  let borderVar = 0;
  for (const i of border) {
    borderVar += Math.hypot(data[i * 3] - bgColor.r, data[i * 3 + 1] - bgColor.g, data[i * 3 + 2] - bgColor.b);
  }
  borderVar /= n;

  const dev = new Float64Array(width * height);
  for (let i = 0; i < width * height; i++) {
    dev[i] = Math.hypot(data[i * 3] - bgColor.r, data[i * 3 + 1] - bgColor.g, data[i * 3 + 2] - bgColor.b);
  }
  const threshold = Float64Array.from(dev).sort()[Math.floor(0.75 * (dev.length - 1))];

  let sx = 0, sy = 0, count = 0, minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (dev[y * width + x] < threshold) continue;
      sx += x; sy += y; count++;
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
  }
  if (!count) return null;

  const boxW = (maxX - minX) / width;
  const boxH = (maxY - minY) / height;
  const separated = borderVar < 40 && boxW < 0.92 && boxH < 0.92;
  if (!separated) {
    return { resolved: false, reason: "no figure-ground separation (edge-to-edge composition)", borderVariance: +borderVar.toFixed(1) };
  }

  return {
    resolved: true,
    backgroundHex: hex(Math.round(bgColor.r), Math.round(bgColor.g), Math.round(bgColor.b)),
    center: { x: +(sx / count / width).toFixed(4), y: +(sy / count / height).toFixed(4) },
    box: { x: +(minX / width).toFixed(4), y: +(minY / height).toFixed(4), w: +boxW.toFixed(4), h: +boxH.toFixed(4) },
    coverage: +(count / (width * height)).toFixed(4),
  };
}

/* ---------------------------------------------------------------- video ---- */

/**
 * Samples the hero video by seeking and screenshotting the element, so it works
 * whether or not the source is fetchable cross-origin. Frame-to-frame distance
 * gives motion magnitude; a spike gives a cut.
 */
async function sampleVideo(page, duration, outDir) {
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
    const framePath = join(outDir, `video-frame-${String(i + 1).padStart(2, "0")}.png`);
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
    motionMagnitude: +mean.toFixed(4),
    cutCount: cuts.length,
    cutsAt: cuts.map((c) => c.to),
    shotLengthSec: cuts.length ? +(duration / (cuts.length + 1)).toFixed(2) : +duration.toFixed(2),
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

const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({
  viewport: DESKTOP,
  deviceScaleFactor: 2,
  locale: "ko-KR",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
});
const page = await context.newPage();

const evidence = {
  brand,
  capturedAt: new Date().toISOString(),
  source: { url },
  method: {
    note: "chrome and imagery are separate evidence domains; imagery is a distribution across samples, never one hero",
    imagerySamplesRequested: IMAGERY_SAMPLES,
    viewport: DESKTOP,
  },
};

try {
  const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  evidence.source.status = response?.status() ?? null;
  await page.waitForTimeout(2500);
  await dismissObstructions(page);
  await page.waitForTimeout(1200);
  evidence.source.finalUrl = page.url();
  evidence.source.title = await page.title();

  writeFileSync(join(captureDir, "viewport-1440.png"), await page.screenshot());

  evidence.chrome = await collectChrome(page);

  // Scroll once so lazy-loaded product imagery attaches before we enumerate.
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5));
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);

  const candidates = await collectImagery(page, IMAGERY_SAMPLES);
  const samples = [];
  for (const [i, candidate] of candidates.entries()) {
    const shotPath = join(captureDir, `imagery-${String(i + 1).padStart(2, "0")}.png`);
    const png = await page.locator(candidate.selector).first()
      .screenshot({ timeout: 6000 }).catch(() => null);
    if (!png) continue;
    writeFileSync(shotPath, png);
    const rgb = await toRgb(shotPath);
    samples.push({
      ...candidate,
      file: `capture/imagery-${String(i + 1).padStart(2, "0")}.png`,
      palette: palette(rgb),
      light: light(rgb),
      subject: subject(rgb),
    });
  }

  const lits = samples.map((s) => s.light);
  const resolvedSubjects = samples.map((s) => s.subject).filter((s) => s?.resolved);
  evidence.imagery = {
    sampled: samples.length,
    samples,
    aggregate: {
      meanLuma: median(lits.map((l) => l.meanLuma)),
      dynamicRange: median(lits.map((l) => l.dynamicRange)),
      lightDirections: lits.reduce((acc, l) => ({ ...acc, [l.direction]: (acc[l.direction] ?? 0) + 1 }), {}),
      aspects: median(samples.map((s) => s.aspect)),
      figureGroundResolved: `${resolvedSubjects.length}/${samples.length}`,
      subjectCenterX: median(resolvedSubjects.map((s) => s.center.x)),
      subjectCenterY: median(resolvedSubjects.map((s) => s.center.y)),
      subjectCoverage: median(resolvedSubjects.map((s) => s.coverage)),
    },
  };

  const video = await findVideo(page);
  evidence.motion = video
    ? { present: true, ...video, ...(video.duration ? await sampleVideo(page, video.duration, captureDir) : { note: "duration unavailable; frames not sampled" }) }
    : { present: false, note: "no video above the fold at capture time" };

  await page.setViewportSize(MOBILE);
  await page.waitForTimeout(1500);
  writeFileSync(join(captureDir, "viewport-390.png"), await page.screenshot());
  evidence.mobile = { chrome: await collectChrome(page) };
} catch (error) {
  evidence.error = String(error).split("\n")[0];
} finally {
  await browser.close();
}

writeFileSync(join(outDir, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  brand,
  ok: !evidence.error,
  error: evidence.error ?? null,
  chrome: evidence.chrome ? {
    pageBackground: evidence.chrome.pageBackground,
    primaryButton: evidence.chrome.primaryButton?.background ?? null,
    typeScale: evidence.chrome.typeScale?.map((t) => `${t.tag}:${t.fontPx}/${t.weight}`).join(" "),
  } : null,
  imagery: evidence.imagery?.aggregate ?? null,
  motion: evidence.motion?.present ? { magnitude: evidence.motion.motionMagnitude ?? null, shotLengthSec: evidence.motion.shotLengthSec ?? null } : false,
  out: outDir,
}, null, 1));
