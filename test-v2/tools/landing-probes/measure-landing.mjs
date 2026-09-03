/**
 * Landing-craft measurement rig.
 *
 * Measures scroll-based one-page landings at desktop 1440x900 and records raw
 * numbers only. Nothing here estimates: if a probe fails it writes an `error`
 * field and the codex must say so.
 *
 *   node measure-landing.mjs --site affinity
 *   node measure-landing.mjs --all
 */
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/package.json");
const { chromium } = require("playwright-core");
const sharp = require("sharp");

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "captures");
const VIEWPORT = { width: 1440, height: 900 };
let MAX_STEPS = 26;
const SETTLE = 1100;

const SITES = [
  { id: "affinity",  url: "https://www.affinity.studio/",        locale: "en-US", why: "user reference — studio one-pager cited as the 'overwhelming' target" },
  { id: "linear",    url: "https://linear.app/",                 locale: "en-US", why: "product landing widely held as craft benchmark; dark-first, heavy reveal choreography" },
  { id: "stripe",    url: "https://stripe.com/",                 locale: "en-US", why: "long-running best-in-class product landing; gradient-mesh hero + dense editorial sectioning" },
  { id: "apple-iphone", url: "https://www.apple.com/kr/iphone/", locale: "ko-KR", why: "the reference implementation of pinned/scroll-driven product storytelling" },
  { id: "toss",      url: "https://toss.im/",                    locale: "ko-KR", why: "Korean exemplar; KR type stack, native-app-feeling scroll sequences" },
];

function arg(n) { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; }

const DISMISS = [
  'button:has-text("Accept")', 'button:has-text("Accept all")', 'button:has-text("동의")',
  'button:has-text("모두 동의")', '[id*="cookie"] button', '[class*="cookie"] button',
  'button[aria-label*="close" i]', 'button:has-text("Got it")',
];

/* ------------------------------------------------------------------ *
 * In-page collectors. Kept as strings passed to evaluate so the whole
 * measurement contract is visible in one file.
 * ------------------------------------------------------------------ */

const TAG_ELEMENTS = () => {
  let i = 0;
  for (const el of document.querySelectorAll("body *")) {
    if (i > 6000) break;
    el.setAttribute("data-omdid", String(i++));
  }
  return i;
};

const SNAPSHOT_STATE = () => {
  const out = {};
  for (const el of document.querySelectorAll("[data-omdid]")) {
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < 8) continue;
    if (r.bottom < -1200 || r.top > window.innerHeight + 1200) continue;
    const cs = getComputedStyle(el);
    out[el.getAttribute("data-omdid")] = [
      +(+cs.opacity).toFixed(2),
      cs.transform === "none" ? 0 : 1,
      cs.transform,
      cs.clipPath === "none" ? 0 : 1,
    ];
  }
  return out;
};

const COLLECT_STRUCTURE = () => {
  const vw = window.innerWidth, vh = window.innerHeight;
  const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const abs = (el) => { const r = el.getBoundingClientRect(); return { top: r.top + window.scrollY, left: r.left + window.scrollX, w: r.width, h: r.height }; };
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.02; };

  /* ---- find the container whose children are the page's sections ----
     The container must itself span >=80% of the document (so a card grid
     inside one section can never win) and is scored by how many
     section-shaped children it has. Deepest such wrapper wins. */
  let container = document.body, containerKids = null;
  const qualifies = (k) => {
    if (!vis(k)) return false;
    const cs = getComputedStyle(k);
    if (cs.position === "fixed") return false;
    const a = abs(k);
    return a.h >= 120 && a.w >= vw * 0.4;
  };
  {
    let best = null;
    const pool = [document.body, ...document.querySelectorAll("body *")];
    for (const el of pool) {
      const a = abs(el);
      if (el !== document.body && a.h < docH * 0.8) continue;
      const kids = [...el.children].filter(qualifies);
      if (kids.length < 2) continue;
      const sum = kids.reduce((acc, k) => acc + abs(k).h, 0);
      if (sum < docH * 0.55) continue;
      if (!best || kids.length > best.kids.length) best = { el, kids };
    }
    if (best) { container = best.el; containerKids = best.kids; }
  }
  const rawKids = containerKids || [...container.children].filter(qualifies);

  /* ---- per-section measurement ---- */
  const COUNTED = new WeakSet();
  const measureSection = (el, idx) => {
    const a = abs(el);
    const area = a.w * a.h;
    let textArea = 0, assetArea = 0, bgImgArea = 0;
    let maxFont = 0, maxFontText = "", maxFontWeight = "", maxFontFamily = "";
    const bodyWidths = [], fontSizes = [], leftEdges = [], blockWidths = [];

    /* text: line boxes of non-empty text nodes */
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      const t = n.nodeValue && n.nodeValue.trim();
      if (!t) continue;
      const p = n.parentElement;
      if (!p || !vis(p)) continue;
      const tag = p.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") continue;
      const cs = getComputedStyle(p);
      const fs = parseFloat(cs.fontSize) || 0;
      const range = document.createRange();
      range.selectNodeContents(n);
      let lineArea = 0, wMax = 0;
      for (const r of range.getClientRects()) { lineArea += r.width * r.height; wMax = Math.max(wMax, r.width); }
      if (lineArea <= 0) continue;
      textArea += lineArea;
      fontSizes.push(fs);
      if (fs > maxFont) { maxFont = fs; maxFontText = t.slice(0, 60); maxFontWeight = cs.fontWeight; maxFontFamily = cs.fontFamily.split(",")[0].replace(/["']/g, ""); }
      if (fs <= 24 && t.length > 40) bodyWidths.push(Math.round(wMax));
    }

    /* assets */
    let imgCount = 0, videoCount = 0, canvasCount = 0, svgBig = 0;
    for (const m of el.querySelectorAll("img,video,canvas,svg,picture")) {
      if (!vis(m)) continue;
      let anc = m.parentElement, nested = false;
      while (anc && anc !== el) { if (COUNTED.has(anc)) { nested = true; break; } anc = anc.parentElement; }
      const r = m.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) continue;
      COUNTED.add(m);
      // clip to the section box so carousels / absolutely-placed layers that
      // overflow cannot push the ratio past 1.0
      const secTop = a.top - window.scrollY, secLeft = a.left - window.scrollX;
      const ix = Math.max(0, Math.min(r.right, secLeft + a.w) - Math.max(r.left, secLeft));
      const iy = Math.max(0, Math.min(r.bottom, secTop + a.h) - Math.max(r.top, secTop));
      if (!nested) assetArea += ix * iy;
      const tag = m.tagName.toLowerCase();
      if (tag === "img") imgCount++;
      else if (tag === "video") videoCount++;
      else if (tag === "canvas") canvasCount++;
      else if (tag === "svg" && r.width * r.height > 20000) svgBig++;
    }
    for (const b of el.querySelectorAll("*")) {
      const cs = getComputedStyle(b);
      if (cs.backgroundImage && cs.backgroundImage !== "none" && !cs.backgroundImage.startsWith("linear-gradient") && !cs.backgroundImage.startsWith("radial-gradient")) {
        const r = b.getBoundingClientRect();
        if (r.width * r.height <= 20000) continue;
        const secTop2 = a.top - window.scrollY, secLeft2 = a.left - window.scrollX;
        const ix2 = Math.max(0, Math.min(r.right, secLeft2 + a.w) - Math.max(r.left, secLeft2));
        const iy2 = Math.max(0, Math.min(r.bottom, secTop2 + a.h) - Math.max(r.top, secTop2));
        bgImgArea += ix2 * iy2;
      }
    }

    /* block geometry: direct-ish children left edges + widths */
    for (const c of el.querySelectorAll(":scope > *, :scope > * > *")) {
      const r = c.getBoundingClientRect();
      if (r.width < 100 || r.height < 40) continue;
      leftEdges.push(Math.round(r.left));
      blockWidths.push(Math.round(r.width));
    }

    /* own/effective background-color by ancestor walk */
    const effBg = (start) => {
      let cur = start;
      while (cur) {
        const c = getComputedStyle(cur).backgroundColor;
        if (c && !/rgba\(0, 0, 0, 0\)|transparent/.test(c)) return c;
        cur = cur.parentElement;
      }
      return getComputedStyle(document.body).backgroundColor;
    };

    const cs = getComputedStyle(el);
    let stickyChild = null, hOverflow = false;
    for (const d of el.querySelectorAll("*")) {
      const dcs = getComputedStyle(d);
      const dr = d.getBoundingClientRect();
      if (!stickyChild && (dcs.position === "sticky" || dcs.position === "fixed") && dr.height > 200 && dr.width > vw * 0.3) {
        stickyChild = { pos: dcs.position, h: Math.round(dr.height), w: Math.round(dr.width), top: dcs.top };
      }
      if (!hOverflow && (dcs.overflowX === "auto" || dcs.overflowX === "scroll") && d.scrollWidth > d.clientWidth + 40) hOverflow = true;
    }
    return {
      index: idx,
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      cls: (el.className && typeof el.className === "string" ? el.className : "").slice(0, 90) || null,
      top: Math.round(a.top), height: Math.round(a.h), width: Math.round(a.w),
      viewportHeights: +(a.h / vh).toFixed(2),
      textAreaPx: Math.round(textArea),
      assetAreaPx: Math.round(assetArea),
      bgImageAreaPx: Math.round(bgImgArea),
      sectionAreaPx: Math.round(area),
      textRatio: +(textArea / area).toFixed(4),
      assetRatio: +((assetArea + bgImgArea) / area).toFixed(4),
      imgCount, videoCount, canvasCount, svgBig,
      maxFontPx: +maxFont.toFixed(1), maxFontWeight, maxFontFamily, maxFontText,
      medianBodyWidthPx: bodyWidths.length ? bodyWidths.sort((x, y) => x - y)[Math.floor(bodyWidths.length / 2)] : null,
      maxBodyWidthPx: bodyWidths.length ? Math.max(...bodyWidths) : null,
      distinctLeftEdges: [...new Set(leftEdges.map((x) => Math.round(x / 4) * 4))].sort((a, b) => a - b).slice(0, 14),
      commonBlockWidth: (() => { const m = {}; for (const w of blockWidths) { const k = Math.round(w / 8) * 8; m[k] = (m[k] || 0) + 1; } const e = Object.entries(m).sort((a, b) => b[1] - a[1])[0]; return e ? +e[0] : null; })(),
      stickyChild, horizontalScroller: hOverflow,
      cssBg: effBg(el),
      cssBgImage: cs.backgroundImage === "none" ? null : cs.backgroundImage.slice(0, 120),
      textNodeFontSizes: (() => { const m = {}; for (const f of fontSizes) { const k = Math.round(f); m[k] = (m[k] || 0) + 1; } return Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, v]) => [+k, v]); })(),
    };
  };

  const sections = rawKids.map(measureSection);

  /* ---- sticky / fixed / snap ---- */
  const sticky = [], fixed = [];
  let snap = null;
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (cs.position === "sticky" && r.height > 40) sticky.push({ tag: el.tagName.toLowerCase(), cls: (typeof el.className === "string" ? el.className : "").slice(0, 60), h: Math.round(r.height), top: cs.top });
    if (cs.position === "fixed" && r.height > 40 && r.width > 100) fixed.push({ tag: el.tagName.toLowerCase(), cls: (typeof el.className === "string" ? el.className : "").slice(0, 60), h: Math.round(r.height), w: Math.round(r.width) });
    if (!snap && cs.scrollSnapType && cs.scrollSnapType !== "none") snap = { on: el.tagName.toLowerCase(), value: cs.scrollSnapType };
  }
  const rootSnap = getComputedStyle(document.documentElement).scrollSnapType;
  const bodySnap = getComputedStyle(document.body).scrollSnapType;

  /* ---- motion tokens ---- */
  const durations = {}, easings = {}, props = {}, animDur = {}, animNames = {};
  let animatedCount = 0, transformOnly = 0, nonTransformTransitions = 0;
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    const td = cs.transitionDuration.split(",").map((s) => s.trim());
    const tp = cs.transitionProperty.split(",").map((s) => s.trim());
    const tf = cs.transitionTimingFunction.split(",").map((s) => s.trim());
    let any = false;
    td.forEach((d, i) => {
      const ms = d.endsWith("ms") ? parseFloat(d) : parseFloat(d) * 1000;
      if (!ms || ms <= 0) return;
      any = true;
      const k = Math.round(ms);
      durations[k] = (durations[k] || 0) + 1;
      const e = tf[i] || tf[0]; easings[e] = (easings[e] || 0) + 1;
      const p = tp[i] || tp[0]; props[p] = (props[p] || 0) + 1;
      if (p === "transform" || p === "opacity" || p === "all") { if (p !== "all") transformOnly++; }
      if (!["transform", "opacity", "all", "none"].includes(p)) nonTransformTransitions++;
    });
    if (any) animatedCount++;
    const ad = cs.animationDuration.split(",").map((s) => s.trim());
    ad.forEach((d) => { const ms = d.endsWith("ms") ? parseFloat(d) : parseFloat(d) * 1000; if (ms > 0) animDur[Math.round(ms)] = (animDur[Math.round(ms)] || 0) + 1; });
    if (cs.animationName && cs.animationName !== "none") for (const nm of cs.animationName.split(",")) animNames[nm.trim()] = (animNames[nm.trim()] || 0) + 1;
  }
  const top = (o, n = 10) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => [isNaN(+k) ? k : +k, v]);

  /* ---- first fold focal element ---- */
  let biggestText = null, biggestMedia = null;
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.top + window.scrollY > vh || r.bottom + window.scrollY < 0) continue;
    if (r.width < 20 || r.height < 20) continue;
    const cs = getComputedStyle(el);
    if (!vis(el)) continue;
    const direct = [...el.childNodes].some((c) => c.nodeType === 3 && c.nodeValue.trim().length > 2);
    const fs = parseFloat(cs.fontSize) || 0;
    if (direct && (!biggestText || fs > biggestText.fontPx)) {
      biggestText = { fontPx: +fs.toFixed(1), weight: cs.fontWeight, family: cs.fontFamily.split(",")[0].replace(/["']/g, ""), lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing,
        text: el.textContent.trim().slice(0, 80), rect: { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) },
        centerXpct: +(((r.left + r.width / 2) / vw) * 100).toFixed(1), centerYpct: +(((r.top + r.height / 2) / vh) * 100).toFixed(1),
        textAlign: cs.textAlign };
    }
    if (["IMG", "VIDEO", "CANVAS"].includes(el.tagName)) {
      const a2 = r.width * r.height;
      if (!biggestMedia || a2 > biggestMedia.areaPx) biggestMedia = { tag: el.tagName.toLowerCase(), areaPx: Math.round(a2), coveragePct: +((a2 / (vw * vh)) * 100).toFixed(1), rect: { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) } };
    }
  }

  /* ---- video autoplay ---- */
  const videos = [...document.querySelectorAll("video")].map((v) => {
    const r = v.getBoundingClientRect();
    return { autoplay: v.autoplay, muted: v.muted, loop: v.loop, paused: v.paused, playsInline: v.playsInline,
      duration: isFinite(v.duration) ? +v.duration.toFixed(2) : null, w: Math.round(r.width), h: Math.round(r.height),
      absTop: Math.round(r.top + window.scrollY), poster: !!v.poster, srcKind: v.currentSrc ? (v.currentSrc.split(".").pop() || "").split("?")[0].slice(0, 6) : null };
  });

  /* ---- type scale over the whole page ---- */
  const allFonts = {};
  for (const el of document.querySelectorAll("body *")) {
    const direct = [...el.childNodes].some((c) => c.nodeType === 3 && c.nodeValue.trim().length > 1);
    if (!direct || !vis(el)) continue;
    const cs = getComputedStyle(el);
    const fs = Math.round(parseFloat(cs.fontSize));
    const key = `${fs}/${cs.fontWeight}`;
    allFonts[key] = (allFonts[key] || 0) + 1;
  }

  /* ---- reduced motion honored? ---- */
  const prefersReduced = [...document.styleSheets].some((s) => { try { return [...s.cssRules].some((r) => r.conditionText && r.conditionText.includes("prefers-reduced-motion")); } catch { return false; } });

  return {
    docHeightPx: docH,
    viewportHeights: +(docH / vh).toFixed(2),
    domSectionTags: document.querySelectorAll("section").length,
    derivedSectionCount: sections.length,
    containerPath: (() => { let p = [], c = container; while (c && c !== document.body) { p.unshift(c.tagName.toLowerCase() + (c.id ? "#" + c.id : "")); c = c.parentElement; } return "body>" + p.join(">"); })(),
    sections,
    sticky: sticky.slice(0, 12), stickyCount: sticky.length,
    fixed: fixed.slice(0, 10), fixedCount: fixed.length,
    scrollSnap: { root: rootSnap, body: bodySnap, firstDescendant: snap },
    motion: { elementsWithTransition: animatedCount, topDurationsMs: top(durations), topEasings: top(easings, 8), topProperties: top(props, 10), topAnimationDurationsMs: top(animDur, 8), topAnimationNames: top(animNames, 8), nonTransformTransitionDecls: nonTransformTransitions },
    fold: { biggestText, biggestMedia },
    videos,
    typeScale: Object.entries(allFonts).sort((a, b) => b[1] - a[1]).slice(0, 16),
    prefersReducedMotionRule: prefersReduced,
    docBg: getComputedStyle(document.body).backgroundColor,
  };
};

/* ------------------------------------------------------------------ */

function lum(rgb) { const [r, g, b] = rgb.map((v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; }

async function dominantColor(pngBuffer) {
  const img = sharp(pngBuffer);
  const meta = await img.metadata();
  // crop the vertical middle 70% so sticky headers / footers do not dominate
  const top = Math.floor(meta.height * 0.15);
  const h = Math.max(1, Math.floor(meta.height * 0.7));
  const { data, info } = await img.extract({ left: 0, top, width: meta.width, height: h }).resize(64, 64, { fit: "fill" }).raw().toBuffer({ resolveWithObject: true });
  const counts = {};
  const ch = info.channels;
  for (let i = 0; i < data.length; i += ch) {
    const k = `${Math.round(data[i] / 12) * 12},${Math.round(data[i + 1] / 12) * 12},${Math.round(data[i + 2] / 12) * 12}`;
    counts[k] = (counts[k] || 0) + 1;
  }
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const total = 64 * 64;
  const rgb = sorted[0][0].split(",").map(Number);
  const L = lum(rgb);
  return {
    dominantRgb: `rgb(${rgb.join(", ")})`,
    dominantSharePct: +((sorted[0][1] / total) * 100).toFixed(1),
    relativeLuminance: +L.toFixed(3),
    tone: L < 0.18 ? "dark" : L > 0.65 ? "light" : "mid",
    top3: sorted.slice(0, 3).map(([k, v]) => ({ rgb: `rgb(${k.split(",").join(", ")})`, pct: +((v / total) * 100).toFixed(1) })),
  };
}

async function run(site) {
  const stamp = new Date().toISOString();
  const dir = join(OUT, site.id);
  mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome" });
  const context = await browser.newContext({
    viewport: VIEWPORT, deviceScaleFactor: 1, locale: site.locale, colorScheme: "light",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  const result = { site: site.id, url: site.url, why: site.why, capturedAt: stamp, viewport: VIEWPORT, errors: [] };
  try {
    const resp = await page.goto(site.url, { waitUntil: "load", timeout: 75000 });
    result.httpStatus = resp ? resp.status() : null;
    await page.waitForTimeout(4000);
    for (const sel of DISMISS) {
      try { const l = page.locator(sel).first(); if (await l.isVisible({ timeout: 200 })) { await l.click({ timeout: 800 }); await page.waitForTimeout(400); } } catch {}
    }
    await page.waitForTimeout(1200);

    /* fold screenshot before any scroll */
    await page.screenshot({ path: join(dir, "step-00-fold.png") });
    const foldFirst = await page.evaluate(COLLECT_STRUCTURE).catch((e) => ({ error: String(e) }));
    result.atLoad = { docHeightPx: foldFirst.docHeightPx, fold: foldFirst.fold, videos: foldFirst.videos };

    /* tag + scroll journey with per-step state snapshots */
    result.taggedElements = await page.evaluate(TAG_ELEMENTS);
    const states = [];
    const steps = [];
    let step = 0;
    for (; step < MAX_STEPS; step++) {
      const y = step * VIEWPORT.height;
      await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
      await page.waitForTimeout(SETTLE);
      const h = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
      const actualY = await page.evaluate(() => Math.round(window.scrollY));
      await page.screenshot({ path: join(dir, `step-${String(step).padStart(2, "0")}.png`) });
      states.push(await page.evaluate(SNAPSHOT_STATE));
      steps.push({ step, requestedY: y, actualY, docHeightAtStep: h });
      if (actualY + VIEWPORT.height >= h - 4) { step++; break; }
    }
    result.scrollSteps = steps;
    result.scrollStepCount = steps.length;

    /* reveal analysis */
    const ids = new Set(); states.forEach((s) => Object.keys(s).forEach((k) => ids.add(k)));
    let revealed = 0, opacityReveals = 0, transformReveals = 0, clipReveals = 0, everHidden = 0;
    const revealDetail = [];
    for (const id of ids) {
      const seq = states.map((s) => s[id]).filter(Boolean);
      if (seq.length < 2) continue;
      const ops = seq.map((s) => s[0]);
      const tfs = seq.map((s) => s[2]);
      const clips = seq.map((s) => s[3]);
      const minOp = Math.min(...ops), maxOp = Math.max(...ops);
      if (minOp < 0.95) everHidden++;
      let did = false;
      if (minOp < 0.6 && maxOp > 0.9) { opacityReveals++; did = true; }
      const uniqTf = [...new Set(tfs)];
      if (uniqTf.length > 1 && uniqTf.includes("none")) { transformReveals++; did = true; }
      if ([...new Set(clips)].length > 1) { clipReveals++; did = true; }
      if (did) { revealed++; if (revealDetail.length < 12) revealDetail.push({ id, opacities: ops.slice(0, 8), transforms: uniqTf.slice(0, 3).map((t) => t.slice(0, 60)) }); }
    }
    result.reveals = { trackedElements: ids.size, revealedElements: revealed, opacityReveals, transformReveals, clipPathReveals: clipReveals, elementsEverBelowFullOpacity: everHidden, revealsPerViewport: +(revealed / steps.length).toFixed(1), sample: revealDetail };

    /* structure measured after the full journey (lazy content now present) */
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(1500);
    const struct = await page.evaluate(COLLECT_STRUCTURE);
    Object.assign(result, struct);

    /* per-section dominant background from real pixels */
    for (const s of result.sections) {
      try {
        await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), s.top + Math.min(s.height / 2, 400) - VIEWPORT.height / 2);
        await page.waitForTimeout(650);
        const buf = await page.screenshot();
        Object.assign(s, await dominantColor(buf));
        await page.screenshot({ path: join(dir, `section-${String(s.index).padStart(2, "0")}.png`) });
      } catch (e) { s.dominantError = String(e).slice(0, 120); }
    }

    /* video playback state after journey */
    result.videoStateAfterJourney = await page.evaluate(() => [...document.querySelectorAll("video")].map((v) => ({ paused: v.paused, currentTime: +v.currentTime.toFixed(2), autoplay: v.autoplay, muted: v.muted, loop: v.loop })));

    /* full-page screenshot (best effort) */
    try { await page.screenshot({ path: join(dir, "fullpage.png"), fullPage: true, timeout: 60000 }); result.fullPageCapture = "ok"; }
    catch (e) { result.fullPageCapture = "FAILED: " + String(e).slice(0, 100); }
  } catch (e) {
    result.errors.push(String(e).slice(0, 400));
  } finally {
    await browser.close();
  }
  writeFileSync(join(dir, "measurement.json"), JSON.stringify(result, null, 2));
  console.log(`[${site.id}] doc=${result.docHeightPx}px sections=${result.derivedSectionCount} steps=${result.scrollStepCount} reveals=${result.reveals ? result.reveals.revealedElements : "n/a"} errors=${result.errors.length}`);
  return result;
}

if (arg("steps")) MAX_STEPS = +arg("steps");
const which = arg("site");
const targets = which ? SITES.filter((s) => s.id === which) : SITES;
mkdirSync(OUT, { recursive: true });
const all = [];
for (const s of targets) all.push(await run(s));
const aggPath = join(HERE, "measurements.json");
const prior = existsSync(aggPath) ? JSON.parse(readFileSync(aggPath, "utf8")) : { sites: [] };
const merged = { generatedAt: new Date().toISOString(), tool: "measure-landing.mjs", viewport: VIEWPORT, sites: [] };
const byId = new Map((prior.sites || []).map((s) => [s.site, s]));
for (const r of all) byId.set(r.site, r);
merged.sites = [...byId.values()];
writeFileSync(aggPath, JSON.stringify(merged, null, 2));
console.log("wrote", aggPath);
