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
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { aggregateSubject, cropTo, light, median, palette, renderedCanvas, subject, toRgb } from "./analysis.mjs";
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
      // A fully transparent background is not black. Same guard as the Aside
      // channel — it lived in only one of the two, and this one kept reporting
      // #000000 for pages whose canvas comes from the browser.
      const m = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(rgb || "");
      if (!m) return null;
      if (m[4] !== undefined && Number(m[4]) === 0) return null;
      return `#${[m[1], m[2], m[3]].map((v) => Number(v).toString(16).padStart(2, "0")).join("")}`;
    };

    // Geometry, not tag names. Coupang has a header — logo, search, category nav,
    // visible in any screenshot — and no <header>, no [role=banner], no <nav>;
    // its whole page is divs. The hero detector already refuses to trust class
    // names for exactly this reason, and reading chrome by semantics contradicted
    // it. The header is the band pinned to the top of the frame.
    const headerOf = () => {
      const semantic = document.querySelector("header, [role=banner]");
      if (semantic) return { el: semantic, by: "semantic" };
      let best = null;
      for (const el of document.querySelectorAll("div, section, nav")) {
        const r = el.getBoundingClientRect();
        if (r.top > 8 || r.height < 40 || r.height > 220) continue;
        if (r.width < window.innerWidth * 0.8) continue;
        if (!el.querySelector("a, img, input")) continue;
        if (!best || r.height * r.width > best.r.height * best.r.width) best = { el, r };
      }
      return best ? { el: best.el, by: "geometry" } : null;
    };
    const headerHit = headerOf();
    const header = headerHit?.el ?? null;


    // The primary button: a control the brand keeps, not the campaign CTA of the
    // day. Musinsa's largest opaque above-the-fold button was #5ccca8 with an
    // empty label — a promo tile, while the catalog records primary #000000.
    // So: skip promotional containers, require a real label, and prefer a
    // signature that repeats, because reusable UI repeats and a campaign
    // banner is a one-off.
    const PROMO = /banner|promo|carousel|swiper|slide|event|campaign|advert|\bad\b/i;
    const inPromo = (node) => {
      for (let cur = node; cur && cur !== document.body; cur = cur.parentElement) {
        const id = (cur.id || "") + " " + (cur.className || "").toString();
        if (PROMO.test(id)) return true;
      }
      return false;
    };

    // A brand's primary control is not always a filled rectangle. Musinsa's
    // category page has 34 controls above the fold and none with an opaque
    // background — reporting "no primary button" there described the collector,
    // not the page. Outline buttons count, and which kind it is gets recorded.
    const fillOf = (st) => {
      if (st.backgroundColor && st.backgroundColor !== "rgba(0, 0, 0, 0)" && st.backgroundColor !== "transparent") return "solid";
      const bw = parseFloat(st.borderTopWidth) || 0;
      const bc = st.borderTopColor || "";
      if (bw > 0 && bc && bc !== "rgba(0, 0, 0, 0)") return "outline";
      return "text";
    };
    const signature = new Map();
    const candidates = [];
    for (const el of document.querySelectorAll("button, a[class*=btn i], a[class*=button i], [role=button]")) {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight || r.width < 60 || r.height < 28) continue;
      const s = getComputedStyle(el);
      const label = (el.innerText || "").trim();
      if (!label) continue;
      if (inPromo(el)) continue;
      const fill = fillOf(s);
      if (fill === "text") continue; // a bare text link is navigation, not a control surface
      const key = `${fill}|${s.backgroundColor}|${s.borderTopColor}|${s.borderRadius}|${s.fontSize}`;
      signature.set(key, (signature.get(key) ?? 0) + 1);
      candidates.push({ el, s, r, key, label, fill });
    }

    let primary = null;
    if (candidates.length) {
      candidates.sort((a, b) => {
        const rep = (signature.get(b.key) ?? 0) - (signature.get(a.key) ?? 0);
        if (rep !== 0) return rep;
        return b.r.width * b.r.height - a.r.width * a.r.height;
      });
      primary = candidates[0];
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
      // body and html are both transparent on plenty of sites, which means the
      // canvas the reader sees comes from the browser, not from CSS.
      pageBackgroundComputed: hexOf(cs(document.body)?.backgroundColor)
        ?? hexOf(cs(document.documentElement)?.backgroundColor),
      bodyColor: hexOf(cs(document.body)?.color),
      header: header ? {
        detectedBy: headerHit.by,
        background: hexOf(getComputedStyle(header).backgroundColor),
        heightPx: +header.getBoundingClientRect().height.toFixed(1),
        borderBottom: getComputedStyle(header).borderBottomWidth === "0px" ? null : getComputedStyle(header).borderBottomColor,
      } : null,
      primaryButton: primary ? {
        fill: primary.fill,
        background: hexOf(primary.s.backgroundColor),
        borderColor: primary.fill === "outline" ? hexOf(primary.s.borderTopColor) : undefined,
        color: hexOf(primary.s.color),
        radiusPx: +parseFloat(primary.s.borderRadius).toFixed(1),
        paddingY: +parseFloat(primary.s.paddingTop).toFixed(1),
        paddingX: +parseFloat(primary.s.paddingLeft).toFixed(1),
        fontPx: +parseFloat(primary.s.fontSize).toFixed(1),
        weight: primary.s.fontWeight,
        label: primary.label.slice(0, 40),
        repeats: signature.get(primary.key) ?? 1,
      } : null,
      typeScale,
      // An absence a reader can interpret. Bare null cannot distinguish "this
      // page has no primary control" from "the collector could not see one".
      notes: {
        buttonCandidatesAboveFold: candidates.length,
        headerDetectedBy: headerHit ? headerHit.by : "not found",
      },
      // An absence a reader can interpret. "null" alone cannot distinguish
      // "this page has no primary control" from "the collector could not see one".
      notes: {
        buttonCandidatesAboveFold: candidates.length,
        headerDetectedBy: headerHit?.by ?? "not found",
      },
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
    const seen = new Set();
    const out = [];
    // Counted at every stage so a zero yield names its own cause. Tracing why
    // Apple, Figma and Toss each returned nothing took a separate investigation
    // per brand; this turns that into one line in the evidence file.
    const funnel = { found: 0, sizeOk: 0, centreInFrame: 0, srcOk: 0 };

    // Not only <img>. Toss's hero is a video and a canvas; a collector that
    // reads img elements alone reports "no imagery" for a page built out of
    // moving pictures.
    for (const el of document.querySelectorAll("img, video, canvas")) {
      funnel.found++;
      const r = el.getBoundingClientRect();
      if (r.width < 160 || r.height < 160) continue;
      funnel.sizeOk++;
      // A slide parked off-screen has its centre outside the frame. A full-bleed
      // hero wider than the viewport does not — and the old coverage test could
      // not tell them apart, which is why Apple, whose heroes overflow both
      // edges, produced nothing at all.
      const centreX = r.left + r.width / 2;
      if (centreX < 0 || centreX > vw) continue;
      funnel.centreInFrame++;
      const kind = el.tagName.toLowerCase();
      const src = el.currentSrc || el.src || (kind === "canvas" ? `canvas@${Math.round(r.x)},${Math.round(r.y)}` : "");
      if (!src || seen.has(src)) continue;
      seen.add(src);
      funnel.srcOk++;

      out.push({
        src,
        kind,
        alt: (el.alt || "").slice(0, 80),
        // Absolute document coordinates: each sample is scrolled to on its own
        // rather than hoping it lands inside one of a few fixed passes.
        docBox: { x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height },
        aspect: +(r.width / r.height).toFixed(3),
        areaShare: +((r.width * r.height) / (vw * window.innerHeight)).toFixed(4),
        intrinsic: { w: el.naturalWidth ?? el.videoWidth ?? el.width ?? null, h: el.naturalHeight ?? el.videoHeight ?? el.height ?? null },
      });
    }
    return { funnel, candidates: out.sort((a, b) => b.areaShare - a.areaShare).slice(0, max) };
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
  // Pinned, not inherited. Karrot came back with a near-black canvas because
  // the browser profile was in dark mode and the site honours the system
  // preference — so brands were being measured under different schemes and the
  // evidence was not comparable. Light is the baseline; a dark-first brand is a
  // finding to record, not a setting to inherit.
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
    viewport: DESKTOP,
    locale: "ko-KR",
    colorScheme: "light",
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

  evidence.chrome = await collectChrome(page);

  // Enumerate first, then visit each sample. Fixed scroll passes lost the
  // images that mattered most: a hero taller than the viewport is never fully
  // inside any single pass, and Apple's overflow both edges. Scrolling to each
  // candidate costs one screenshot per sample and always frames it.
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5));
  await page.waitForTimeout(1600);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);

  const firstShotPath = join(captureDir, "viewport-1440.png");
  writeFileSync(firstShotPath, await page.screenshot());
  const [dominant] = palette(await toRgb(firstShotPath, 200));
  evidence.chrome.pageBackgroundRendered = renderedCanvas(dominant);

  const collected = await collectImagery(page, IMAGERY_SAMPLES);
  const candidates = collected.candidates;
  const funnel = { ...collected.funnel, kept: candidates.length, framed: 0, cropped: 0, analysed: 0 };
  const samples = [];
  for (const [i, candidate] of candidates.entries()) {
    const label = String(i + 1).padStart(2, "0");
    const framePath = join(captureDir, `frame-${label}.png`);
    const cropPath = join(captureDir, `imagery-${label}.png`);

    // Centre it, then read where it actually landed — lazy loading and sticky
    // headers move things between the scroll and the shot.
    const box = await page.evaluate((b) => {
      window.scrollTo(0, Math.max(0, b.y + b.h / 2 - window.innerHeight / 2));
      return null;
    }, candidate.docBox).then(() => page.waitForTimeout(700)).then(() => page.evaluate((want) => {
      // Re-find by geometry, not by src. Responsive images swap currentSrc as
      // the viewport moves, and matching on it lost most of Figma's and
      // Baemin's samples. Position in the document does not change under us.
      let el = null;
      let best = Infinity;
      for (const n of document.querySelectorAll("img, video, canvas")) {
        const r = n.getBoundingClientRect();
        if (r.width < 120 || r.height < 120) continue;
        const d = Math.hypot(r.x + window.scrollX - want.x, r.y + window.scrollY - want.y)
          + Math.abs(r.width - want.w) + Math.abs(r.height - want.h);
        if (d < best) { best = d; el = n; }
      }
      if (!el || best > 240) return null;
      const r = el.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const visibleH = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
      const visibleW = Math.min(r.right, window.innerWidth) - Math.max(r.left, 0);
      if (visibleH < 120 || visibleW < 120) return null;
      return {
        pixelBox: { x: Math.max(0, r.left) * dpr, y: Math.max(0, r.top) * dpr, w: visibleW * dpr, h: visibleH * dpr },
        clipped: r.top < 0 || r.bottom > window.innerHeight || r.left < 0 || r.right > window.innerWidth,
      };
    }, candidate.docBox));
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
      file: `capture/imagery-${label}.png`,
      palette: palette(rgb),
      light: light(rgb),
      subject: subject(rgb),
    });
  }

  const lits = samples.map((s) => s.light);
  const resolvedSubjects = samples.map((s) => s.subject).filter((s) => s?.resolved);
  evidence.imagery = {
    sampled: samples.length,
    funnel,
    // Which stage ate the candidates. A brand that legitimately has no imagery
    // (Naver) and a collector that silently dropped everything (Apple, before
    // the centre-position fix) both used to read as `sampled: 0`.
    attrition: (() => {
      const order = ["found", "sizeOk", "centreInFrame", "srcOk", "kept", "framed", "cropped", "analysed"];
      const reasons = [];
      let worst = null;
      for (let i = 1; i < order.length; i++) {
        const before = funnel[order[i - 1]];
        const after = funnel[order[i]];
        if (!before) continue;
        const lost = 1 - after / before;
        // 80%, not 90%. Baemin lost eight of nine candidates at one stage —
        // 88.9% — and passed a 90% gate while ending up with a single sample.
        if (lost >= 0.8 && (!worst || lost > worst.lost)) {
          worst = { stage: `${order[i - 1]} → ${order[i]}`, before, after, lost: +lost.toFixed(3) };
        }
      }
      if (worst) reasons.push(`${Math.round(worst.lost * 100)}% dropped at ${worst.stage}`);
      // An absolute floor as well as a ratio: thin evidence is the risk itself,
      // and a brand that yields three samples is thin however gently it got there.
      if (funnel.analysed > 0 && funnel.analysed < 4) reasons.push(`only ${funnel.analysed} samples analysed`);
      return reasons.length
        ? { suspect: true, reasons, ...(worst ?? {}), note: "verify before using downstream" }
        : { suspect: false };
    })(),
    samples,
    aggregate: {
      meanLuma: median(lits.map((l) => l.meanLuma)),
      dynamicRange: median(lits.map((l) => l.dynamicRange)),
      luminanceGradients: lits.reduce((acc, l) => ({ ...acc, [l.luminanceGradient]: (acc[l.luminanceGradient] ?? 0) + 1 }), {}),
      aspects: median(samples.map((s) => s.aspect)),
      ...aggregateSubject(resolvedSubjects, samples.length),
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
