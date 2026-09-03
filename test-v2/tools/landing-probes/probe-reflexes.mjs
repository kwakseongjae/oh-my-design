/** Counts the generated-design reflexes on each exemplar, so the codex's
 *  anti-pattern claims are measured rather than asserted. */
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/package.json");
const { chromium } = require("playwright-core");
const HERE = dirname(fileURLToPath(import.meta.url));

const COLLECT = () => {
  const vw = innerWidth;
  const box = (el) => el.getBoundingClientRect();
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.05; };
  const isSurface = (cs) => (parseFloat(cs.borderRadius) > 3) && (!/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor) || parseFloat(cs.borderTopWidth) > 0);

  /* uniform card grids: >=3 siblings with the same rounded w/h and a surface */
  let cardGridGroups = 0, cardGridMax = 0;
  for (const par of document.querySelectorAll("body *")) {
    const kids = [...par.children].filter((k) => vis(k) && box(k).width > 120 && box(k).height > 80);
    if (kids.length < 3) continue;
    const sig = {};
    for (const k of kids) { const r = box(k); const cs = getComputedStyle(k); if (!isSurface(cs)) continue; const key = `${Math.round(r.width / 8)}x${Math.round(r.height / 8)}`; (sig[key] = sig[key] || []).push(k); }
    for (const g of Object.values(sig)) if (g.length >= 3) { cardGridGroups++; cardGridMax = Math.max(cardGridMax, g.length); }
  }

  /* icon tiles: 32-96px square surface whose only visual child is an svg/small img */
  let iconTiles = 0;
  for (const el of document.querySelectorAll("body *")) {
    const r = box(el); if (!vis(el)) continue;
    if (r.width < 28 || r.width > 96 || Math.abs(r.width - r.height) > 8) continue;
    const cs = getComputedStyle(el); if (!isSurface(cs)) continue;
    const kids = [...el.children];
    if (kids.length === 1 && (kids[0].tagName === "svg" || kids[0].tagName === "IMG")) iconTiles++;
  }

  /* nested cards: a surface directly inside a surface (<=2 levels) */
  let nestedCards = 0;
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el); const r = box(el);
    if (!vis(el) || r.width < 120 || r.height < 80 || !isSurface(cs)) continue;
    let a = el.parentElement, depth = 0;
    while (a && depth < 2) { const acs = getComputedStyle(a); const ar = box(a); if (isSurface(acs) && ar.width > 160 && ar.height > 100) { nestedCards++; break; } a = a.parentElement; depth++; }
  }

  /* gradients + glows */
  let gradientFills = 0, bigGradientFills = 0, glows = 0, coloredGlows = 0;
  for (const el of document.querySelectorAll("body *")) {
    if (!vis(el)) continue;
    const cs = getComputedStyle(el); const r = box(el);
    if (/gradient\(/.test(cs.backgroundImage)) { gradientFills++; if (r.width * r.height > 60000) bigGradientFills++; }
    const sh = cs.boxShadow;
    if (sh && sh !== "none") {
      const blur = (sh.match(/(-?\d+(?:\.\d+)?)px/g) || []).map(parseFloat);
      const maxBlur = blur.length >= 3 ? blur[2] : 0;
      if (maxBlur >= 24) { glows++; const m = sh.match(/rgba?\(([^)]+)\)/); if (m) { const [r2, g2, b2] = m[1].split(",").map((x) => parseFloat(x)); if (Math.max(r2, g2, b2) - Math.min(r2, g2, b2) > 40) coloredGlows++; } }
    }
  }

  /* headline alignment + fold composition */
  const h1 = document.querySelector("h1");
  const h1cs = h1 ? getComputedStyle(h1) : null;

  /* image provenance hints: same-origin vs third-party stock hosts */
  const hosts = {};
  for (const img of document.querySelectorAll("img")) { const s = img.currentSrc || img.src || ""; if (!s || s.startsWith("data:")) continue; try { hosts[new URL(s, location.href).hostname] = (hosts[new URL(s, location.href).hostname] || 0) + 1; } catch {} }

  /* text measure: widest paragraph line box on the page */
  let widestLine = 0, lineWidths = [];
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) {
    const t = n.nodeValue && n.nodeValue.trim(); if (!t || t.length < 60) continue;
    const p = n.parentElement; if (!p || !vis(p)) continue;
    const fs = parseFloat(getComputedStyle(p).fontSize) || 0; if (fs > 26) continue;
    const rg = document.createRange(); rg.selectNodeContents(n);
    for (const r of rg.getClientRects()) if (r.width > 40) { lineWidths.push(Math.round(r.width)); widestLine = Math.max(widestLine, Math.round(r.width)); }
  }
  lineWidths.sort((a, b) => a - b);

  return { cardGridGroups, cardGridMax, iconTiles, nestedCards, gradientFills, bigGradientFills, glows, coloredGlows,
    h1: h1 ? { fontPx: +parseFloat(h1cs.fontSize).toFixed(1), weight: h1cs.fontWeight, align: h1cs.textAlign, text: h1.textContent.trim().slice(0, 70) } : null,
    imageHosts: Object.entries(hosts).sort((a, b) => b[1] - a[1]).slice(0, 6),
    bodyLineWidth: { p50: lineWidths[Math.floor(lineWidths.length * 0.5)] ?? null, p90: lineWidths[Math.floor(lineWidths.length * 0.9)] ?? null, max: widestLine, samples: lineWidths.length } };
};

const agg = JSON.parse(readFileSync(join(HERE, "measurements.json"), "utf8"));
for (const site of agg.sites) {
  const b = await chromium.launch({ channel: "chrome" });
  const c = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, locale: site.site === "toss" || site.site === "apple-iphone" ? "ko-KR" : "en-US", colorScheme: "light",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36" });
  const p = await c.newPage();
  try {
    await p.goto(site.url, { waitUntil: "load", timeout: 75000 });
    await p.waitForTimeout(5000);
    await p.evaluate(async () => { const h = document.body.scrollHeight; for (let y = 0; y < Math.min(h, 24000); y += 900) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 130)); } window.scrollTo(0, 0); });
    await p.waitForTimeout(1500);
    site.reflexes = await p.evaluate(COLLECT);
    console.log(site.site, JSON.stringify(site.reflexes));
  } catch (e) { site.reflexes = { error: String(e).slice(0, 200) }; console.log(site.site, "ERROR", e.message); }
  await b.close();
}
writeFileSync(join(HERE, "measurements.json"), JSON.stringify(agg, null, 2));
console.log("merged reflexes");
