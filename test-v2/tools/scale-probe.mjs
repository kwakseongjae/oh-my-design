/**
 * scale-probe.mjs — "scale / simplicity / hover-gating" measurement rig.
 *
 * Answers three questions with numbers, per screen (1 viewport = 1 screen),
 * at 1440x900:
 *   1. how BIG is the largest media on this screen (% of viewport)?
 *   2. how SIMPLE is this screen (leaf-element count, text blocks, max font)?
 *   3. is motion IDLE (plays by itself) or HOVER-GATED (user must hover)?
 *
 * Nothing here estimates. Every failure is written to `errors` / `error`.
 *
 *   node scale-probe.mjs --all
 *   node scale-probe.mjs --site r3
 *   node scale-probe.mjs --only local        (r3 + r2)
 *   node scale-probe.mjs --only remote
 */
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const require = createRequire("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/package.json");
const { chromium } = require("playwright-core");

const ROOT = "/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2";
const RUN = join(ROOT, "content-runs/aphrodite/higgsgen");
const OUTDIR = join(RUN, "research/r4");
const CAPDIR = join(OUTDIR, "captures");
const VIEWPORT = { width: 1440, height: 900 };
const SETTLE = 1200;
let MAX_STEPS = 12;

const SITES = [
  // ---- user references -------------------------------------------------
  { id: "tasteskill", url: "https://www.tasteskill.dev/", locale: "en-US", group: "user-ref",
    why: "user-named reference for the r4 rework" },
  { id: "open-design", url: "https://open-design.ai/ko/", locale: "ko-KR", group: "user-ref",
    why: "user-named reference; KR locale AI design product" },
  { id: "affinity", url: "https://www.affinity.studio/", locale: "en-US", group: "user-ref",
    why: "user-named reference; studio one-pager, the original 'overwhelming' target" },
  { id: "higgsfield", url: "https://higgsfield.ai/", locale: "en-US", group: "user-ref",
    why: "the real product Higgsgen is modelled on — same industry, same media type" },
  // ---- discovered exemplars of 'big imagery + simple + spacious' -------
  { id: "krea", url: "https://www.krea.ai/", locale: "en-US", group: "discovered",
    why: "closest AI image-gen peer to Higgsgen; landing is a wall of its own output (peer of higgsfield in the AI-image category)" },
  { id: "runway", url: "https://runwayml.com/", locale: "en-US", group: "discovered",
    why: "full-bleed looping video hero — the pattern named 'full-bleed cinematic video as the entire background of its hero' in the 2026 landing-trend roundups (saaslandingpage.com / sitesplaced.com)" },
  { id: "luma", url: "https://lumalabs.ai/", locale: "en-US", group: "discovered",
    why: "surfaced directly in the 2026 AI-landing search; generative-video product that shows the output at full width" },
  { id: "midjourney", url: "https://www.midjourney.com/home", locale: "en-US", group: "discovered",
    why: "image-generation product whose entire landing is the gallery — the extreme of 'media is the page'" },
  { id: "apple-iphone", url: "https://www.apple.com/kr/iphone/", locale: "ko-KR", group: "discovered",
    why: "canonical pinned/scroll-driven big-media product storytelling; already the repo's own craft benchmark (test-v2/tools/landing-probes/measure-landing.mjs SITES)" },
  { id: "framer", url: "https://www.framer.com/", locale: "en-US", group: "discovered",
    why: "named in the 2026 roundup search: 'Framer's hero leads with a bold headline and a large framed panel' — big-panel-plus-bold-type formula" },
  { id: "cosmos", url: "https://www.cosmos.so/", locale: "en-US", group: "discovered",
    why: "image-first canvas with almost no chrome; upper bound for 'media %, minimum element count'" },
  { id: "lusion", url: "https://lusion.co/", locale: "en-US", group: "discovered",
    why: "perennial Awwwards winner (awwwards.com sites_of_the_day / fullscreen collections); full-viewport WebGL, near-zero UI" },
  { id: "igloo", url: "https://igloo.inc/", locale: "en-US", group: "discovered",
    why: "Awwwards Site of the Year class immersive one-pager; test of whether full-bleed 3D survives a headless probe" },
  { id: "linear", url: "https://linear.app/", locale: "en-US", group: "discovered-control",
    why: "CONTROL: high craft but UI/text dense — expected to score LOW on media %, so the invariant is not just 'good sites score high'" },
  // ---- our own output --------------------------------------------------
  { id: "r3", url: "file://" + join(RUN, "render-r3.html"), locale: "ko-KR", group: "ours",
    why: "our round-3 render (user score 60)" },
  { id: "r2", url: "file://" + join(RUN, "render-r2.html"), locale: "ko-KR", group: "ours",
    why: "our round-2 render (user score 70)" },
];

function arg(n) { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; }

const DISMISS = [
  'button:has-text("Accept")', 'button:has-text("Accept all")', 'button:has-text("Allow all")',
  'button:has-text("동의")', 'button:has-text("모두 동의")', 'button:has-text("확인")',
  '[id*="cookie"] button', '[class*="cookie"] button', 'button[aria-label*="close" i]',
  'button:has-text("Got it")', 'button:has-text("I agree")',
];

/* ================================================================== *
 * In-page code. Passed as functions to page.evaluate.
 * ================================================================== */

const TAG = () => {
  let i = 0;
  for (const el of document.querySelectorAll("body *")) { if (i > 12000) break; el.setAttribute("data-omdsp", String(i++)); }
  return i;
};

/** Collect page-level hover rules once. Stores on window. */
const COLLECT_HOVER_RULES = () => {
  const PROPS = ["transform", "opacity", "clip-path", "width", "height", "max-height", "scale", "visibility", "translate"];
  const selectors = new Set();
  let sheets = 0, blocked = 0, rules = 0;
  const walk = (list) => {
    for (const r of list) {
      rules++;
      if (r.cssRules) { try { walk(r.cssRules); } catch {} continue; }
      if (!r.selectorText || !r.style) continue;
      if (!r.selectorText.includes(":hover")) continue;
      let touches = false;
      for (let i = 0; i < r.style.length; i++) {
        const p = r.style[i];
        if (PROPS.includes(p) || p === "-webkit-clip-path") { touches = true; break; }
      }
      if (!touches) continue;
      for (const part of r.selectorText.split(",")) {
        const s = part.trim();
        if (!s.includes(":hover")) continue;
        const base = s.replace(/:hover/g, "").replace(/::?(before|after)/g, "").trim();
        if (base && base.length < 300) selectors.add(base);
      }
    }
  };
  for (const sh of document.styleSheets) {
    sheets++;
    try { walk(sh.cssRules); } catch { blocked++; }
  }
  window.__omdHover = [...selectors];
  // inline JS hover handlers we CAN see (attributes only; getEventListeners is
  // a DevTools-only API and is not available in page context)
  const inline = document.querySelectorAll("[onmouseenter],[onmouseover]").length;
  return { hoverSelectors: window.__omdHover.length, styleSheets: sheets, blockedSheets: blocked, rulesScanned: rules, inlineHoverAttrs: inline };
};

/** Per-screen structural measurement. */
const SCREEN = () => {
  const vw = window.innerWidth, vh = window.innerHeight, VA = vw * vh;
  const inView = (r) => r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw && r.width > 0 && r.height > 0;
  const clipArea = (r) => {
    const w = Math.max(0, Math.min(r.right, vw) - Math.max(r.left, 0));
    const h = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
    return w * h;
  };
  const visible = (el, cs) => cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.02;

  /* ---------- 1. media ---------- */
  const effOpacity = (el) => { let o = 1, c = el; while (c && c !== document.documentElement) { o *= +getComputedStyle(c).opacity; c = c.parentElement; } return o; };
  const blurPx = (cs) => { const m = cs.filter && cs.filter.match(/blur\(([\d.]+)px\)/); return m ? +m[1] : 0; };
  const media = [];
  const pushMedia = (el, kind, r, cs) => {
    const a = clipArea(r);
    if (a < 400) return;
    // decorative layers are not content media: heavy blur or near-transparent
    const eo = effOpacity(el), bl = blurPx(cs);
    if (eo < 0.15 || bl >= 8) return;
    const edges = (r.left <= 8 ? 1 : 0) + (r.top <= 8 ? 1 : 0) + (r.right >= vw - 8 ? 1 : 0) + (r.bottom >= vh - 8 ? 1 : 0);
    media.push({
      kind, id: el.getAttribute("data-omdsp"),
      tag: el.tagName.toLowerCase(),
      cls: (typeof el.className === "string" ? el.className : "").slice(0, 60),
      pct: +((a / VA) * 100).toFixed(1),
      boxPct: +(((r.width * r.height) / VA) * 100).toFixed(1),
      w: Math.round(r.width), h: Math.round(r.height),
      edgesTouched: edges, fullBleed: edges >= 2,
      effOpacity: +eo.toFixed(2), blurPx: bl,
    });
  };
  for (const el of document.querySelectorAll("img,video,canvas,svg,picture")) {
    const cs = getComputedStyle(el); if (!visible(el, cs)) continue;
    const r = el.getBoundingClientRect(); if (!inView(r)) continue;
    const tag = el.tagName.toLowerCase();
    if (tag === "svg" && r.width * r.height < 40000) continue;   // svg must be >=200x200-ish
    if (tag === "picture") continue;                              // its <img> is counted
    pushMedia(el, tag, r, cs);
  }
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    const bg = cs.backgroundImage;
    if (!bg || bg === "none") continue;
    if (/^(linear|radial|conic|repeating)-gradient/.test(bg.trim())) continue;
    if (cs.backgroundRepeat.startsWith("repeat")) continue;       // tiled texture, not content media
    if (!visible(el, cs)) continue;
    const r = el.getBoundingClientRect(); if (!inView(r)) continue;
    if (r.width * r.height < 40000) continue;
    pushMedia(el, "bg-image", r, cs);
  }
  media.sort((a, b) => b.pct - a.pct);
  const largest = media[0] || null;

  /* ---------- 1b. hit-tested media coverage ----------
     Bounding boxes lie: clip-path, overlays, z-order and opacity all change
     what a person actually sees. Sample a 24x15 grid and ask, at each point,
     which element actually paints first from the top. */
  const isMediaEl = (el) => ["IMG", "VIDEO", "CANVAS"].includes(el.tagName) || el.tagName.toLowerCase() === "svg";
  const paintsAs = (el) => {
    const cs = getComputedStyle(el);
    if (+cs.opacity < 0.1) return false;
    if (isMediaEl(el)) return "media";
    const bi = cs.backgroundImage;
    if (bi && bi !== "none" && !/^(linear|radial|conic|repeating)-gradient/.test(bi.trim())) return "media";
    const m = cs.backgroundColor.match(/rgba?\(([^)]+)\)/);
    if (m) { const q = m[1].split(",").map(Number); const al = q.length > 3 ? q[3] : 1; if (al >= 0.85) return "solid"; }
    return false;
  };
  let hits = 0, samples = 0;
  const COLS = 24, ROWS = 15;
  for (let i = 0; i < COLS; i++) for (let j = 0; j < ROWS; j++) {
    const x = Math.round((i + 0.5) * vw / COLS), y = Math.round((j + 0.5) * vh / ROWS);
    samples++;
    for (const el of document.elementsFromPoint(x, y)) {
      const p = paintsAs(el);
      if (!p) continue;
      if (p === "media") hits++;
      break;
    }
  }
  const mediaCoveragePct = +((hits / samples) * 100).toFixed(1);

  /* ---------- 2. simplicity: leaf atoms ---------- */
  const atoms = [];
  const qualifies = (r) => inView(r) && r.width >= 24 && r.height >= 24;
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    if (!visible(el, cs)) continue;
    if (cs.position === "fixed" && el.getBoundingClientRect().height < 4) continue;
    const r = el.getBoundingClientRect();
    if (!qualifies(r)) continue;
    const isMedia = ["IMG", "VIDEO", "CANVAS", "SVG"].includes(el.tagName) || el.tagName === "svg";
    const hasDirectText = [...el.childNodes].some((n) => n.nodeType === 3 && n.nodeValue.trim().length > 0);
    let hasQualifyingChild = false;
    for (const c of el.children) {
      const ccs = getComputedStyle(c);
      if (!visible(c, ccs)) continue;
      if (qualifies(c.getBoundingClientRect())) { hasQualifyingChild = true; break; }
    }
    if (hasQualifyingChild && !hasDirectText && !isMedia) continue;   // container, not an atom
    if (el.tagName === "SVG" || el.tagName === "svg") {
      // do not count nested svg internals
      let p = el.parentElement, nested = false;
      while (p) { if (p.tagName === "svg") { nested = true; break; } p = p.parentElement; }
      if (nested) continue;
    }
    let p2 = el.parentElement, insideSvg = false;
    while (p2) { if (p2.tagName === "svg") { insideSvg = true; break; } p2 = p2.parentElement; }
    if (insideSvg) continue;
    atoms.push({ tag: el.tagName.toLowerCase(), text: hasDirectText, media: isMedia, area: Math.round(clipArea(r)) });
  }

  /* ---------- 3. type ---------- */
  let maxFont = 0, maxFontText = "", textBlocks = 0;
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    if (!visible(el, cs)) continue;
    const direct = [...el.childNodes].some((n) => n.nodeType === 3 && n.nodeValue.trim().length > 0);
    if (!direct) continue;
    const r = el.getBoundingClientRect(); if (!inView(r)) continue;
    textBlocks++;
    const fs = parseFloat(cs.fontSize) || 0;
    if (fs > maxFont) { maxFont = fs; maxFontText = el.textContent.trim().slice(0, 50); }
  }

  /* ---------- 4. idle animation (instantaneous part) ---------- */
  let waapiRunning = 0, waapiTotal = 0;
  try {
    const anims = document.getAnimations();
    waapiTotal = anims.length;
    waapiRunning = anims.filter((a) => a.playState === "running").length;
  } catch {}
  const videos = [...document.querySelectorAll("video")].map((v) => {
    const r = v.getBoundingClientRect();
    return { inView: inView(r), autoplay: v.autoplay, paused: v.paused, ready: v.readyState,
      playing: !v.paused && v.readyState >= 2, pct: +((clipArea(r) / VA) * 100).toFixed(1) };
  });
  const videosPlayingInView = videos.filter((v) => v.inView && v.playing).length;

  /* ---------- 5. hover-gating ---------- */
  const hoverSel = window.__omdHover || [];
  const seen = new Set();
  let hoverTotal = 0, hoverGated = 0, hoverEnhance = 0;
  const gatedSample = [];
  for (const sel of hoverSel) {
    let list;
    try { list = document.querySelectorAll(sel); } catch { continue; }
    for (const el of list) {
      const key = el.getAttribute("data-omdsp") || (el.tagName + Math.random());
      if (seen.has(key)) continue;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if (!inView(r)) continue;
      if (cs.display === "none") continue;
      seen.add(key);
      hoverTotal++;
      const op = +cs.opacity;
      const mh = cs.maxHeight;
      const cp = cs.clipPath || "";
      let scaleZero = false;
      const m = cs.transform.match(/matrix\(([-\d.]+), *([-\d.]+), *([-\d.]+), *([-\d.]+)/);
      if (m) { const sx = Math.hypot(+m[1], +m[2]); if (sx < 0.02) scaleZero = true; }
      const gated =
        op < 0.05 ||
        cs.visibility === "hidden" ||
        mh === "0px" ||
        r.height < 2 || r.width < 2 ||
        /inset\(\s*100%|circle\(\s*0/.test(cp) ||
        scaleZero;
      if (gated) {
        hoverGated++;
        if (gatedSample.length < 6) gatedSample.push({ sel: sel.slice(0, 60), tag: el.tagName.toLowerCase(),
          cls: (typeof el.className === "string" ? el.className : "").slice(0, 50),
          opacity: op, maxHeight: mh, w: Math.round(r.width), h: Math.round(r.height) });
      } else hoverEnhance++;
    }
  }

  /* ---------- 5b. JS hover listeners (patched addEventListener) ---------- */
  let hoverJsInView = 0;
  for (const el of document.querySelectorAll("[data-omdhov]")) {
    const cs = getComputedStyle(el); if (!visible(el, cs)) continue;
    const r = el.getBoundingClientRect(); if (!inView(r)) continue;
    hoverJsInView++;
  }

  /* ---------- transform fingerprint for rAF detection ---------- */
  const fp = {};
  for (const el of document.querySelectorAll("[data-omdsp]")) {
    const r = el.getBoundingClientRect();
    if (!inView(r) || r.width < 8 || r.height < 8) continue;
    const cs = getComputedStyle(el);
    fp[el.getAttribute("data-omdsp")] = cs.transform + "|" + (+cs.opacity).toFixed(2) + "|" +
      Math.round(r.left) + "," + Math.round(r.top);
  }

  return {
    mediaCoveragePct,
    largestMediaPct: largest ? largest.pct : 0,
    largestMedia: largest,
    fullBleed: !!(largest && largest.fullBleed),
    fullBleedAnyPct: media.filter((m) => m.fullBleed).length ? media.filter((m) => m.fullBleed)[0].pct : 0,
    mediaCount: media.length,
    mediaTop3: media.slice(0, 3),
    elementCount: atoms.length,
    elementTextCount: atoms.filter((a) => a.text).length,
    elementMediaCount: atoms.filter((a) => a.media).length,
    textBlocks,
    maxFontPx: +maxFont.toFixed(1),
    maxFontText,
    waapiRunning, waapiTotal,
    videosInView: videos.filter((v) => v.inView).length,
    videosPlayingInView,
    hoverMatched: hoverTotal, hoverGated, hoverEnhance, hoverGatedSample: gatedSample,
    hoverJsInView,
    __fp: fp,
  };
};

/** Full-state fingerprint used by the empirical hover experiment. */
const FP = () => {
  const vw = innerWidth, vh = innerHeight, out = {};
  for (const el of document.querySelectorAll("[data-omdsp]")) {
    const r = el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200 || r.right < 0 || r.left > vw) continue;
    const cs = getComputedStyle(el);
    out[el.getAttribute("data-omdsp")] = [+(+cs.opacity).toFixed(2), Math.round(r.width), Math.round(r.height),
      Math.round(r.left), Math.round(r.top), cs.transform.slice(0, 60), cs.visibility === "hidden" ? 1 : 0];
  }
  return out;
};

/** Up to 2 biggest hover-reactive elements on this screen, with a safe hover point. */
const HOVER_CANDIDATES = () => {
  const vw = innerWidth, vh = innerHeight, VA = vw * vh, seen = new Set(), out = [];
  const add = (el, src) => {
    if (!(el instanceof Element)) return;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") return;
    const r = el.getBoundingClientRect();
    if (!(r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw)) return;
    const l = Math.max(r.left, 0), t = Math.max(r.top, 0), rr = Math.min(r.right, vw), bb = Math.min(r.bottom, vh);
    const a = Math.max(0, rr - l) * Math.max(0, bb - t);
    if (a < VA * 0.02) return;
    const id = el.getAttribute("data-omdsp");
    if (!id || seen.has(id)) return;
    seen.add(id);
    out.push({ id, src, x: Math.round((l + rr) / 2), y: Math.round((t + bb) / 2), areaPct: +((a / VA) * 100).toFixed(1),
      tag: el.tagName.toLowerCase(), cls: (typeof el.className === "string" ? el.className : "").slice(0, 40) });
  };
  for (const el of document.querySelectorAll("[data-omdhov]")) add(el, "js");
  for (const sel of (window.__omdHover || [])) { try { for (const el of document.querySelectorAll(sel)) add(el, "css"); } catch {} }
  return out.sort((p, q) => q.areaPct - p.areaPct).slice(0, 2);
};

/* ================================================================== */

async function shot(page, path, quality = 70) {
  await page.screenshot({ path, type: "jpeg", quality });
  let q = quality;
  while (statSync(path).size > 200 * 1024 && q > 25) { q -= 15; await page.screenshot({ path, type: "jpeg", quality: q }); }
  return { bytes: statSync(path).size, quality: q };
}

async function run(site) {
  const browser = await chromium.launch({ channel: "chrome" });
  const context = await browser.newContext({
    viewport: VIEWPORT, deviceScaleFactor: 1, locale: site.locale, colorScheme: "dark",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
  });
  await context.addInitScript(() => {
    const HOVER = new Set(["mouseenter", "mouseover", "pointerenter", "pointerover", "mousemove"]);
    const orig = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, fn, opts) {
      try {
        if (HOVER.has(type) && this instanceof Element) {
          const prev = this.getAttribute("data-omdhov") || "";
          if (!prev.includes(type)) this.setAttribute("data-omdhov", (prev ? prev + " " : "") + type);
        }
      } catch {}
      return orig.call(this, type, fn, opts);
    };
  });
  const page = await context.newPage();
  const res = { site: site.id, url: site.url, group: site.group, why: site.why,
    capturedAt: new Date().toISOString(), viewport: VIEWPORT, errors: [], screens: [] };
  try {
    const resp = await page.goto(site.url, { waitUntil: "load", timeout: 70000 });
    res.httpStatus = resp ? resp.status() : null;
    await page.waitForTimeout(4500);
    for (const sel of DISMISS) {
      try { const l = page.locator(sel).first(); if (await l.isVisible({ timeout: 150 })) { await l.click({ timeout: 700 }); await page.waitForTimeout(350); } } catch {}
    }
    await page.waitForTimeout(1500);

    res.tagged = await page.evaluate(TAG);
    res.cssom = await page.evaluate(COLLECT_HOVER_RULES);

    /* --- scroll mechanism detection --- */
    const probe = await page.evaluate(() => {
      const de = document.scrollingElement || document.documentElement;
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, de.scrollHeight);
      let best = null;
      for (const el of document.querySelectorAll("body *")) {
        const cs = getComputedStyle(el);
        if (!/(auto|scroll)/.test(cs.overflowY)) continue;
        if (el.scrollHeight <= el.clientHeight + 100) continue;
        if (el.clientHeight < window.innerHeight * 0.6) continue;
        if (!best || el.scrollHeight > best.sh) best = { sh: el.scrollHeight, ch: el.clientHeight,
          sel: el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\s+/)[0] : "") };
      }
      return { docH, vh: window.innerHeight, container: best };
    });
    res.docHeightPx = probe.docH;
    res.viewportHeights = +(probe.docH / VIEWPORT.height).toFixed(2);
    res.scrollContainer = probe.container;

    await page.evaluate(() => window.scrollTo(0, window.innerHeight));
    await page.waitForTimeout(700);
    let y1 = await page.evaluate(() => Math.round(window.scrollY || (document.scrollingElement || {}).scrollTop || 0));
    let mode = "window";
    if (y1 < 50) {
      await page.mouse.move(720, 450);
      await page.mouse.wheel(0, VIEWPORT.height);
      await page.waitForTimeout(900);
      const y2 = await page.evaluate(() => Math.round(window.scrollY || (document.scrollingElement || {}).scrollTop || 0));
      const yc = probe.container ? await page.evaluate((s) => {
        for (const el of document.querySelectorAll("body *")) {
          const cs = getComputedStyle(el);
          if (/(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 100 && el.scrollTop > 50) return Math.round(el.scrollTop);
        }
        return 0;
      }, probe.container.sel) : 0;
      if (y2 >= 50) mode = "wheel";
      else if (yc >= 50) mode = "wheel-container";
      else { mode = "NO-SCROLL"; res.errors.push("page did not scroll via window.scrollTo nor mouse.wheel — screens beyond the fold were not measured"); }
    }
    res.scrollMode = mode;
    await page.evaluate(() => window.scrollTo(0, 0));
    if (mode !== "window") { await page.mouse.move(720, 450); await page.mouse.wheel(0, -20000); }
    await page.waitForTimeout(1200);

    const steps = Math.max(1, Math.min(MAX_STEPS, Math.ceil(probe.docH / VIEWPORT.height)));
    let lastY = -1;
    for (let s = 0; s < (mode === "NO-SCROLL" ? 1 : steps); s++) {
      if (s > 0) {
        if (mode === "window") await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), s * VIEWPORT.height);
        else { await page.mouse.move(720, 450); await page.mouse.wheel(0, VIEWPORT.height); }
        await page.waitForTimeout(SETTLE);
      } else await page.waitForTimeout(400);
      const a = await page.evaluate(SCREEN);
      await page.waitForTimeout(SETTLE);
      const b = await page.evaluate(SCREEN);
      let moved = 0, tracked = 0;
      for (const k of Object.keys(a.__fp)) { if (b.__fp[k] === undefined) continue; tracked++; if (a.__fp[k] !== b.__fp[k]) moved++; }
      const actualY = await page.evaluate(() => Math.round(window.scrollY || (document.scrollingElement || {}).scrollTop || 0));
      delete a.__fp; delete b.__fp;
      /* --- empirical hover experiment: does content only exist on hover? --- */
      const hoverProbe = [];
      try {
        const cands = await page.evaluate(HOVER_CANDIDATES);
        for (const c of cands) {
          await page.mouse.move(4, 4); await page.waitForTimeout(500);
          const f0 = await page.evaluate(FP);
          await page.mouse.move(c.x, c.y); await page.waitForTimeout(850);
          const f1 = await page.evaluate(FP);
          await page.mouse.move(4, 4); await page.waitForTimeout(850);
          const f2 = await page.evaluate(FP);
          const hidden = (v) => !v || v[0] < 0.05 || v[6] === 1 || v[2] < 2;
          const shown = (v) => v && v[0] > 0.4 && v[6] === 0 && v[2] >= 12;
          let changed = 0, revealed = 0, reverted = 0, grew = 0;
          for (const k of Object.keys(f1)) {
            const a0 = f0[k], a1 = f1[k], a2 = f2[k];
            if (!a0) continue;
            if (JSON.stringify(a0) !== JSON.stringify(a1)) changed++;
            if (hidden(a0) && shown(a1)) { revealed++; if (hidden(a2)) reverted++; }
            if (a0 && a1 && a0[2] >= 2 && a1[2] > a0[2] * 1.6 && a1[2] - a0[2] > 40) grew++;
          }
          hoverProbe.push({ ...c, changedElements: changed, revealedElements: revealed,
            revertedOnLeave: reverted, grownElements: grew });
        }
      } catch (e) { hoverProbe.push({ error: String(e).slice(0, 140) }); }

      const screen = { step: s, scrollY: actualY, ...b, hoverProbe,
        hoverRevealed: hoverProbe.reduce((a, h) => a + (h.revealedElements || 0), 0),
        hoverGrown: hoverProbe.reduce((a, h) => a + (h.grownElements || 0), 0),
        hoverReverted: hoverProbe.reduce((a, h) => a + (h.revertedOnLeave || 0), 0),
        idleMovingElements: moved, idleTrackedElements: tracked,
        idleAnimTotal: b.waapiRunning + moved + b.videosPlayingInView };
      res.screens.push(screen);
      if (mode !== "window" && actualY === lastY && s > 0) { res.errors.push(`scroll stalled at step ${s} (y=${actualY})`); break; }
      lastY = actualY;
      const doc = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
      if (mode === "window" && actualY + VIEWPORT.height >= doc - 4) break;
    }

    /* --- captures --- */
    mkdirSync(CAPDIR, { recursive: true });
    if (mode === "window") await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    else { await page.mouse.move(720, 450); await page.mouse.wheel(0, -30000); }
    await page.waitForTimeout(1600);
    res.foldCapture = await shot(page, join(CAPDIR, `${site.id}-fold.jpg`));

    const peak = res.screens.slice().sort((x, y) => y.largestMediaPct - x.largestMediaPct)[0];
    if (peak) {
      if (mode === "window") { await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), peak.scrollY); }
      else { await page.mouse.move(720, 450); for (let i = 0; i < peak.step; i++) { await page.mouse.wheel(0, VIEWPORT.height); await page.waitForTimeout(500); } }
      await page.waitForTimeout(1800);
      res.peakCapture = { ...(await shot(page, join(CAPDIR, `${site.id}-peak.jpg`))), step: peak.step, pct: peak.largestMediaPct };
    }
  } catch (e) {
    res.errors.push(String(e).slice(0, 300));
  } finally {
    // Chrome can hang on close when WebGL / media pipelines are live; never let
    // that stall the run — race it and move on.
    const closed = await Promise.race([
      browser.close().then(() => true).catch(() => true),
      new Promise((r) => setTimeout(() => r(false), 10000)),
    ]);
    if (!closed) res.errors.push("browser.close() timed out after 10s (measurement itself completed)");
  }

  /* --- per-site summary --- */
  const S = res.screens;
  const med = (arr) => { if (!arr.length) return null; const a = arr.slice().sort((x, y) => x - y); const m = Math.floor(a.length / 2); return a.length % 2 ? a[m] : +(((a[m - 1] + a[m]) / 2).toFixed(1)); };
  if (S.length) {
    const L = S.map((s) => s.largestMediaPct);
    res.summary = {
      screens: S.length,
      mediaPctMedian: med(L), mediaPctMax: Math.max(...L), mediaPctMin: Math.min(...L),
      coverageMedian: med(S.map((s) => s.mediaCoveragePct)), coverageMax: Math.max(...S.map((s) => s.mediaCoveragePct)),
      screensMediaGte50: S.filter((s) => s.largestMediaPct >= 50).length,
      screensMediaGte25: S.filter((s) => s.largestMediaPct >= 25).length,
      shareMediaGte50: +((S.filter((s) => s.largestMediaPct >= 50).length / S.length) * 100).toFixed(0),
      fullBleedScreens: S.filter((s) => s.fullBleed).length,
      elementCountMedian: med(S.map((s) => s.elementCount)),
      elementCountMax: Math.max(...S.map((s) => s.elementCount)),
      textBlocksMedian: med(S.map((s) => s.textBlocks)),
      maxFontMedian: med(S.map((s) => s.maxFontPx)),
      maxFontMax: Math.max(...S.map((s) => s.maxFontPx)),
      idleAnimMedian: med(S.map((s) => s.idleAnimTotal)),
      idleMovingMedian: med(S.map((s) => s.idleMovingElements)),
      videosPlayingTotal: S.reduce((a, s) => a + s.videosPlayingInView, 0),
      hoverGatedTotal: S.reduce((a, s) => a + s.hoverGated, 0),
      hoverGatedMedian: med(S.map((s) => s.hoverGated)),
      hoverEnhanceTotal: S.reduce((a, s) => a + s.hoverEnhance, 0),
      hoverJsMedian: med(S.map((s) => s.hoverJsInView)),
      hoverRevealedTotal: S.reduce((a, s) => a + (s.hoverRevealed || 0), 0),
      hoverGrownTotal: S.reduce((a, s) => a + (s.hoverGrown || 0), 0),
      hoverRevertedTotal: S.reduce((a, s) => a + (s.hoverReverted || 0), 0),
      screensWithHoverReveal: S.filter((s) => (s.hoverRevealed || 0) + (s.hoverGrown || 0) > 0).length,
      fold: { mediaPct: S[0].largestMediaPct, fullBleed: S[0].fullBleed, elementCount: S[0].elementCount,
        textBlocks: S[0].textBlocks, maxFontPx: S[0].maxFontPx, hoverGated: S[0].hoverGated,
        idleAnim: S[0].idleAnimTotal, videosPlaying: S[0].videosPlayingInView },
    };
  }
  console.log(`[${site.id}] screens=${S.length} medMedia=${res.summary ? res.summary.mediaPctMedian : "?"}% max=${res.summary ? res.summary.mediaPctMax : "?"}% el=${res.summary ? res.summary.elementCountMedian : "?"} hoverGate=${res.summary ? res.summary.hoverGatedTotal : "?"} hovReveal=${res.summary ? res.summary.hoverRevealedTotal : "?"}/${res.summary ? res.summary.hoverGrownTotal : "?"} idle=${res.summary ? res.summary.idleAnimMedian : "?"} err=${res.errors.length}${res.errors.length ? " :: " + res.errors[0].slice(0, 90) : ""}`);
  return res;
}

/* ================================================================== */
if (arg("steps")) MAX_STEPS = +arg("steps");
const only = arg("only");
const which = arg("site");
let targets = SITES;
if (which) targets = SITES.filter((s) => which.split(",").includes(s.id));
else if (only === "local") targets = SITES.filter((s) => s.group === "ours");
else if (only === "remote") targets = SITES.filter((s) => s.group !== "ours");

mkdirSync(OUTDIR, { recursive: true });
const outPath = arg("out") ? join(OUTDIR, arg("out")) : join(OUTDIR, "scale-probe.json");
const prior = existsSync(outPath) ? JSON.parse(readFileSync(outPath, "utf8")) : { sites: [] };
const byId = new Map((prior.sites || []).map((s) => [s.site, s]));
for (const s of targets) {
  try { byId.set(s.id, await run(s)); }
  catch (e) { byId.set(s.id, { site: s.id, url: s.url, group: s.group, why: s.why, errors: ["FATAL " + String(e).slice(0, 250)], screens: [] }); console.log(`[${s.id}] FATAL`, String(e).slice(0, 120)); }
  writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), tool: "scale-probe.mjs", viewport: VIEWPORT, settleMs: SETTLE, maxSteps: MAX_STEPS, sites: [...byId.values()] }, null, 2));
}
console.log("wrote", outPath);
process.exit(0);
