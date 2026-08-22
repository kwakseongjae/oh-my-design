/**
 * Media-evidence capture through Aside Browser, for sites that refuse
 * automated browsers.
 *
 * Coupang answers Playwright-driven Chrome with a 403 "Access Denied" and zero
 * images; it answers Aside with its actual homepage — 39 large images, the real
 * title, the real hero. Aside is a browser a person uses, driven from the
 * terminal, so the request looks like what it is.
 *
 * The line this does not cross: no CAPTCHA solving, no bot-detection evasion.
 * If a site presents a challenge rather than a page, that is a refusal and the
 * brand comes out of the set. Coupang served its normal homepage on the first
 * request.
 *
 * Same evidence schema and the same measurements as the Playwright channel
 * (analysis.mjs is shared), so evidence from the two is comparable. The one
 * structural difference: Aside's REPL has no filesystem, so the page hands back
 * one viewport screenshot as base64 over stdout and the crops are cut from it
 * here. That turned out to be steadier than per-element screenshots anyway.
 *
 *   node capture-via-aside.mjs --brand coupang --url https://www.coupang.com/
 *
 * Requires Aside Browser running with a window open in the target profile:
 *   open -a Aside https://example.com
 */

import { execFile } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { aggregateSubject, cropTo, light, median, palette, subject, toRgb } from "./analysis.mjs";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");
const ASIDE = join(process.env.HOME ?? "", ".local/bin/aside");

const IMAGERY_SAMPLES = 12;

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}

/**
 * The in-page half. Runs inside Aside's REPL, which has the browser but no
 * modules, so everything it learns leaves through console.log.
 */
function replSource(url, samples) {
  return `
const p = await openTab(${JSON.stringify(url)});
await new Promise(r => setTimeout(r, 5000));

for (const sel of ['[aria-label*="close" i]', '[aria-label*="닫기"]', '[id*="cookie" i] button', '[class*="cookie" i] button', '[id*="consent" i] button']) {
  try { const el = await p.$(sel); if (el) await el.click({ timeout: 500 }); } catch {}
}
await new Promise(r => setTimeout(r, 1200));

const passes = [];
for (let pass = 0; pass < 3; pass++) {
  await p.evaluate((n) => window.scrollTo(0, window.innerHeight * n), pass);
  await new Promise(r => setTimeout(r, 1400));
  const found = await p.evaluate((max) => {
  const vw = window.innerWidth, vh = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;
  const hexOf = (rgb) => {
    // A fully transparent background is not black. Reporting #000000 here gave
    // Coupang a black page background it does not have.
    const m = /rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([\\d.]+))?/.exec(rgb || "");
    if (!m) return null;
    if (m[4] !== undefined && Number(m[4]) === 0) return null;
    return "#" + [m[1], m[2], m[3]].map((v) => Number(v).toString(16).padStart(2, "0")).join("");
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


  // Same rule as the Playwright channel: the button the brand keeps, not the
  // campaign CTA of the day. Promotional containers out, unlabelled controls
  // out, and a repeating signature wins over raw size.
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
  // not the page. Outline and text buttons count, and which kind it is gets
  // recorded rather than flattened away.
  const fillOf = (st) => {
    const solid = st.backgroundColor && st.backgroundColor !== "rgba(0, 0, 0, 0)";
    if (solid) return "solid";
    const bw = parseFloat(st.borderTopWidth) || 0;
    const bc = st.borderTopColor || "";
    if (bw > 0 && bc && bc !== "rgba(0, 0, 0, 0)") return "outline";
    return "text";
  };
  const signature = new Map();
  const candidates = [];
  for (const el of document.querySelectorAll("button, a[class*=btn i], a[class*=button i], [role=button]")) {
    const r = el.getBoundingClientRect();
    if (r.top > vh || r.width < 60 || r.height < 28) continue;
    const st = getComputedStyle(el);
    const label = (el.innerText || "").trim();
    if (!label || inPromo(el)) continue;
    const fill = fillOf(st);
    if (fill === "text") continue; // a bare text link is navigation, not a control surface
    const key = fill + "|" + st.backgroundColor + "|" + st.borderTopColor + "|" + st.borderRadius + "|" + st.fontSize;
    signature.set(key, (signature.get(key) ?? 0) + 1);
    candidates.push({ el, s: st, r, key, label, fill });
  }
  candidates.sort((a, b) => {
    const rep = (signature.get(b.key) ?? 0) - (signature.get(a.key) ?? 0);
    return rep !== 0 ? rep : b.r.width * b.r.height - a.r.width * a.r.height;
  });
  const primary = candidates[0] ?? null;

  const typeScale = [];
  for (const tag of ["h1", "h2", "h3", "p", "button"]) {
    const el = [...document.querySelectorAll(tag)].find((n) => {
      const r = n.getBoundingClientRect();
      return r.top < vh * 3 && r.height > 8 && (n.innerText || "").trim();
    });
    if (!el) continue;
    const s = getComputedStyle(el);
    typeScale.push({
      tag, fontPx: +parseFloat(s.fontSize).toFixed(1), weight: s.fontWeight,
      family: s.fontFamily.split(",")[0].replace(/["']/g, "").trim(),
      lineHeight: s.lineHeight, letterSpacing: s.letterSpacing, color: hexOf(s.color),
    });
  }

  const imagery = [];
  for (const el of document.querySelectorAll("img")) {
    const r = el.getBoundingClientRect();
    // Only what is wholly inside this screen — the crop comes out of this shot.
    if (r.top < 0 || r.bottom > vh || r.width < 160 || r.height < 160) continue;
    if (Math.min(r.right, vw) - Math.max(r.left, 0) < r.width * 0.9) continue;
    const src = el.currentSrc || el.src;
    if (!src) continue;
    imagery.push({
      src, alt: (el.alt || "").slice(0, 80),
      box: { x: +(r.x / vw).toFixed(4), y: +(r.y / vh).toFixed(4), w: +(r.width / vw).toFixed(4), h: +(r.height / vh).toFixed(4) },
      // Device pixels, because the crop happens against the raw screenshot.
      pixelBox: { x: Math.max(0, r.x * dpr), y: Math.max(0, r.y * dpr), w: r.width * dpr, h: r.height * dpr },
      aspect: +(r.width / r.height).toFixed(3),
      areaShare: +((r.width * r.height) / (vw * vh)).toFixed(4),
      firstScreen: r.top < vh,
      intrinsic: { w: el.naturalWidth || null, h: el.naturalHeight || null },
    });
  }
  imagery.sort((a, b) => b.areaShare - a.areaShare);

  const v = [...document.querySelectorAll("video")].find((el) => {
    const r = el.getBoundingClientRect();
    return r.top < vh && r.width > 200;
  });

  return {
    title: document.title.slice(0, 120),
    finalUrl: location.href,
    atBottom: window.scrollY + vh >= document.body.scrollHeight - 4,
    viewport: { w: vw, h: vh, dpr },
    chrome: {
      // body and html are both transparent on plenty of sites, which means the
      // canvas the reader sees comes from the browser, not from CSS. Say so,
      // and let the host measure it off the screenshot instead of guessing.
      pageBackgroundComputed: hexOf(getComputedStyle(document.body).backgroundColor)
        ?? hexOf(getComputedStyle(document.documentElement).backgroundColor),
      bodyColor: hexOf(getComputedStyle(document.body).color),
      header: header ? {
        detectedBy: headerHit.by,
        background: hexOf(getComputedStyle(header).backgroundColor),
        heightPx: +header.getBoundingClientRect().height.toFixed(1),
      } : null,
      primaryButton: primary ? {
        fill: primary.fill,
        background: hexOf(primary.s.backgroundColor),
        borderColor: primary.fill === "outline" ? hexOf(primary.s.borderTopColor) : undefined,
        color: hexOf(primary.s.color),
        radiusPx: +parseFloat(primary.s.borderRadius).toFixed(1),
        fontPx: +parseFloat(primary.s.fontSize).toFixed(1), weight: primary.s.fontWeight,
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
    },
    imagery,
    motion: v ? {
      present: true, autoplay: v.autoplay, loop: v.loop, muted: v.muted,
      duration: Number.isFinite(v.duration) && v.duration > 0 ? +v.duration.toFixed(2) : null,
      aspect: +(v.getBoundingClientRect().width / v.getBoundingClientRect().height).toFixed(3),
    } : { present: false, note: "no video above the fold at capture time" },
  };
}, ${samples});
  const shot = await p.screenshot();
  passes.push({ pass, found, b64: shot.toString("base64") });
  if (found.atBottom) break;
}

const merged = { ...passes[0].found, imagery: [] };
const seen = new Set();
for (const entry of passes) {
  for (const item of entry.found.imagery) {
    if (seen.has(item.src) || merged.imagery.length >= ${samples}) continue;
    seen.add(item.src);
    merged.imagery.push({ ...item, pass: entry.pass });
  }
}
console.log("COLLECTED:" + JSON.stringify(merged));
for (const entry of passes) console.log("SHOT_B64_" + entry.pass + ":" + entry.b64);
`;
}

/* ----------------------------------------------------------------- main ---- */

const brand = arg("brand");
const url = arg("url");
if (!brand || !url) {
  console.error("usage: capture-via-aside.mjs --brand <id> --url <official url>");
  process.exit(1);
}

const outDir = join(EVIDENCE_ROOT, brand);
const captureDir = join(outDir, "capture");
mkdirSync(captureDir, { recursive: true });

const evidence = {
  brand,
  capturedAt: new Date().toISOString(),
  source: { url },
  method: {
    channel: "aside",
    why: "site refuses automated browsers; Playwright receives 403 Access Denied",
    note: "chrome and imagery are separate evidence domains; imagery is a distribution across samples, never one hero",
    imagerySamplesRequested: IMAGERY_SAMPLES,
  },
};

try {
  const { stdout } = await execFileAsync(ASIDE, ["repl", replSource(url, IMAGERY_SAMPLES)], {
    maxBuffer: 256 * 1024 * 1024,
    timeout: 180000,
  });

  const lines = stdout.split("\n");
  const collectedLine = lines.find((l) => l.startsWith("COLLECTED:"));
  if (!collectedLine) throw new Error("Aside returned no page data");
  const collected = JSON.parse(collectedLine.slice("COLLECTED:".length));

  const shots = new Map();
  for (const line of lines) {
    const m = /^SHOT_B64_(\d+):/.exec(line);
    if (!m) continue;
    const shotPath = join(captureDir, `viewport-pass-${m[1]}.png`);
    writeFileSync(shotPath, Buffer.from(line.slice(m[0].length), "base64"));
    shots.set(Number(m[1]), shotPath);
  }
  if (shots.size === 0) throw new Error("Aside returned no screenshot");

  evidence.source.finalUrl = collected.finalUrl;
  evidence.source.title = collected.title;
  evidence.method.viewport = collected.viewport;
  evidence.chrome = collected.chrome;
  evidence.motion = collected.motion;

  // What the reader actually sees behind the content. When CSS reports
  // transparent for both body and html, this is the only honest answer — the
  // modal colour of the rendered frame, with the share of the frame it covers
  // so a thin claim is visible as a thin claim.
  const firstShot = shots.get(0);
  if (firstShot) {
    const [dominant] = palette(await toRgb(firstShot, 200));
    evidence.chrome.pageBackgroundRendered = dominant
      ? { hex: dominant.hex, coverage: dominant.coverage, source: "modal colour of the captured viewport" }
      : null;
  }

  // Same treatment as the page canvas: when CSS says transparent, the header's
  // colour is whatever the reader sees in that band.
  if (firstShot && evidence.chrome.header && !evidence.chrome.header.background) {
    const dpr = collected.viewport.dpr || 1;
    const bandPath = join(captureDir, "header-band.png");
    try {
      await cropTo(firstShot, bandPath, { x: 0, y: 0, w: collected.viewport.w * dpr, h: Math.max(8, evidence.chrome.header.heightPx * dpr) });
      const [band] = palette(await toRgb(bandPath, 200));
      if (band) evidence.chrome.header.backgroundRendered = { hex: band.hex, coverage: band.coverage, source: "modal colour of the header band" };
    } catch {}
  }

  const samples = [];
  for (const [i, candidate] of collected.imagery.entries()) {
    const cropPath = join(captureDir, `imagery-${String(i + 1).padStart(2, "0")}.png`);
    const source = shots.get(candidate.pass);
    if (!source) continue;
    try {
      await cropTo(source, cropPath, candidate.pixelBox);
    } catch {
      continue;
    }
    const rgb = await toRgb(cropPath);
    samples.push({
      ...candidate,
      file: `capture/imagery-${String(i + 1).padStart(2, "0")}.png`,
      palette: palette(rgb),
      light: light(rgb),
      subject: subject(rgb),
    });
  }

  const lits = samples.map((s) => s.light);
  const resolved = samples.map((s) => s.subject).filter((s) => s?.resolved);
  evidence.imagery = {
    sampled: samples.length,
    note: samples.length < collected.imagery.length
      ? `${collected.imagery.length - samples.length} candidates sat below the captured viewport and were skipped`
      : undefined,
    samples,
    aggregate: {
      meanLuma: median(lits.map((l) => l.meanLuma)),
      dynamicRange: median(lits.map((l) => l.dynamicRange)),
      luminanceGradients: lits.reduce((acc, l) => ({ ...acc, [l.luminanceGradient]: (acc[l.luminanceGradient] ?? 0) + 1 }), {}),
      aspects: median(samples.map((s) => s.aspect)),
      ...aggregateSubject(resolved, samples.length),
    },
  };
} catch (error) {
  evidence.error = String(error).split("\n")[0];
}

writeFileSync(join(outDir, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  brand,
  channel: "aside",
  ok: !evidence.error,
  error: evidence.error ?? null,
  title: evidence.source.title ?? null,
  chrome: evidence.chrome ? {
    pageBackground: evidence.chrome.pageBackground,
    primaryButton: evidence.chrome.primaryButton?.background ?? null,
  } : null,
  imagery: evidence.imagery?.aggregate ?? null,
  out: outDir,
}, null, 1));
