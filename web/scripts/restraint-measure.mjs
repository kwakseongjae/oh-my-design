// Restraint rulebook measurer (docs/research/2026-10-14-restraint/RESTRAINT.md §3).
// Headless playwright-core with GPU flags; never the owner's Chrome.
//   node scripts/restraint-measure.mjs <base-url> <out.json> [label]
// Per route × width (1440×900, 390×844), at scroll 0, consent UI excluded:
//   units      fold units: text blocks + controls + media objects fully or partly in view
//   sizes      distinct computed font sizes of visible text in view (R3)
//   ratio      largest / most-used font size in view (headline : body, R3)
//   words      words in view (R4) · numerals: digit runs in view (R6)
//   ctas       pressable a/button/input/select/summary in view outside the site header (R5)
//   accents    distinct saturated hues (30° buckets) painted as backgrounds/borders outside
//              canvas, img and svg content (R7)
//   bordered   elements with a visible border in view, excluding inputs/code/tables (R8)
//   empty      share of 16px tiles whose greyscale σ < 6 (R11)
//   screens    document height / viewport height (R13)
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(new URL("../package.json", import.meta.url));
const { chromium } = require("playwright-core");
const sharp = require("sharp");

const [base = "http://127.0.0.1:3480", out = "restraint.json", label = ""] = process.argv.slice(2);
const ROUTES = ["/", "/ko", "/ja", "/zh-tw", "/design-systems/toss", "/design-systems"];
const SIZES = [[1440, 900], [390, 844]];

const browser = await chromium.launch({ headless: true, channel: "chromium", args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"] });
const rows = [];
for (const route of ROUTES) for (const [w, h] of SIZES) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, colorScheme: "light" });
  await ctx.addInitScript(() => { try { localStorage.setItem("omd-consent", "denied"); } catch {} });
  const p = await ctx.newPage();
  await p.goto(base.replace(/\/$/, "") + route, { waitUntil: "networkidle", timeout: 120000 });
  await p.evaluate(() => document.fonts.ready);
  if (["/", "/ko", "/ja", "/zh-tw"].includes(route)) await p.waitForSelector("#k3.sq-live", { timeout: 20000 }).catch(() => {});
  await p.waitForTimeout(1200);
  const m = await p.evaluate(() => {
    const VW = innerWidth, VH = innerHeight;
    const vis = (el) => {
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none" || Number(cs.opacity) === 0) return false;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return false;
      if (r.bottom <= 0 || r.top >= VH || r.right <= 0 || r.left >= VW) return false;
      // visually-hidden (sr-only) patterns
      if (cs.clipPath === "inset(50%)" || (cs.position === "absolute" && r.width <= 1)) return false;
      if (cs.clip && cs.clip.startsWith("rect(0") && r.width <= 2) return false;
      return true;
    };
    const consent = (el) => !!el.closest('[data-consent],[aria-label*="onsent" i],.cookie,.consent');
    const header = (el) => !!el.closest("header");
    // text blocks: elements with own non-empty text nodes
    // round 10: text inside a [data-content-object] (a reference's own screen, set in its own type
    // tokens, like the hero chat's Toss card) is content, as R7 already treats its colours: its sizes
    // are reported apart (contentSizes) and not counted against the chrome's R3 budget
    const blocks = new Set(), sizes = new Map(), contentSizes = new Set(), words = [], numerals = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      const t = n.textContent.replace(/\s+/g, " ").trim();
      if (!t) continue;
      const el = n.parentElement;
      if (!el || consent(el) || el.closest("script,style,noscript,canvas")) continue;
      let ok = true;
      for (let a = el; a && a !== document.body; a = a.parentElement) {
        const cs = getComputedStyle(a);
        if (cs.display === "none" || cs.visibility === "hidden" || Number(cs.opacity) === 0) { ok = false; break; }
        const r = a.getBoundingClientRect();
        if (cs.overflow === "hidden" && (r.width <= 1 || r.height <= 1)) { ok = false; break; }
      }
      if (!ok) continue;
      const range = document.createRange();
      range.selectNodeContents(n);
      const rr = range.getBoundingClientRect();
      if (rr.width < 1 || rr.bottom <= 0 || rr.top >= VH || rr.right <= 0 || rr.left >= VW) continue;
      const block = el.closest("p,h1,h2,h3,h4,h5,h6,li,dt,dd,a,button,label,summary,figcaption,td,th,span,div") || el;
      blocks.add(block);
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (el.closest("[data-content-object]")) contentSizes.add(fs);
      else sizes.set(fs, (sizes.get(fs) || 0) + t.length);
      words.push(...t.split(" ").filter((x) => /[\p{L}\p{N}]/u.test(x)));
      numerals.push(...(t.match(/\d[\d,.]*/g) || []));
    }
    const all = [...document.querySelectorAll("body *")].filter((el) => !consent(el) && vis(el));
    const controls = all.filter((el) => el.matches("a[href],button,input:not([type=hidden]),select,summary,textarea"));
    const ctas = controls.filter((el) => !header(el));
    const media = all.filter((el) => el.matches("img,video,canvas,picture") || (el.matches("svg") && el.getBoundingClientRect().width >= 64) || (getComputedStyle(el).backgroundImage.startsWith("url(") && el.getBoundingClientRect().width >= 120));
    const hue = (rgb) => {
      const m = rgb.match(/rgba?\(([^)]+)\)/); if (!m) return null;
      const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
      if (a < 0.5) return null;
      const mx = Math.max(r, g, b) / 255, mn = Math.min(r, g, b) / 255, l = (mx + mn) / 2, d = mx - mn;
      if (d < 0.0001) return null;
      const s = d / (1 - Math.abs(2 * l - 1));
      if (s < 0.4 || l < 0.15 || l > 0.92) return null;
      let hh;
      const R = r / 255, G = g / 255, B = b / 255;
      if (mx === R) hh = ((G - B) / d) % 6; else if (mx === G) hh = (B - R) / d + 2; else hh = (R - G) / d + 4;
      return Math.round(((hh * 60 + 360) % 360) / 30) % 12;
    };
    const accents = new Set(), bordered = [];
    for (const el of all) {
      if (el.closest("svg,canvas,img,.sq-k3,[data-content-object]")) continue;
      const cs = getComputedStyle(el);
      const hb = hue(cs.backgroundColor); if (hb != null) accents.add(hb);
      const bw = ["Top", "Right", "Bottom", "Left"].filter((s) => parseFloat(cs["border" + s + "Width"]) > 0 && cs["border" + s + "Style"] !== "none" && !/rgba\([^)]*,\s*0\)/.test(cs["border" + s + "Color"]));
      if (bw.length) {
        const hbo = hue(cs["border" + bw[0] + "Color"]); if (hbo != null) accents.add(hbo);
        if (!el.matches("input,textarea,select,code,pre,table,td,th,tr,hr") && !el.closest("pre,code,table")) bordered.push(el.tagName.toLowerCase() + "." + (el.className && el.className.baseVal === undefined ? String(el.className).split(" ")[0] : ""));
      }
    }
    const sizeList = [...sizes.entries()].sort((a, b) => b[1] - a[1]);
    const bodySize = sizeList.length ? sizeList[0][0] : 0;
    const maxSize = Math.max(0, ...sizes.keys());
    return {
      units: blocks.size + controls.length + media.length,
      textBlocks: blocks.size, controls: controls.length, media: media.length,
      sizes: [...sizes.keys()].sort((a, b) => b - a),
      contentSizes: [...contentSizes].sort((a, b) => b - a),
      ratio: bodySize ? +(maxSize / bodySize).toFixed(2) : 0,
      words: words.length, numerals: numerals.length,
      ctas: ctas.length, accents: accents.size, bordered: bordered.length,
      screens: +(document.documentElement.scrollHeight / VH).toFixed(1),
    };
  });
  const png = await p.screenshot();
  const { data, info } = await sharp(png).greyscale().raw().toBuffer({ resolveWithObject: true });
  let tiles = 0, empty = 0;
  for (let ty = 0; ty + 16 <= info.height; ty += 16) for (let tx = 0; tx + 16 <= info.width; tx += 16) {
    let s = 0, s2 = 0;
    for (let y = ty; y < ty + 16; y++) for (let x = tx; x < tx + 16; x++) { const v = data[y * info.width + x]; s += v; s2 += v * v; }
    const mean = s / 256, sd = Math.sqrt(Math.max(0, s2 / 256 - mean * mean));
    tiles++; if (sd < 6) empty++;
  }
  m.empty = Math.round((empty / tiles) * 100);
  rows.push({ route, w, ...m });
  console.log(label, route, w, JSON.stringify(m));
  await ctx.close();
}
await browser.close();
fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ label, base, at: new Date().toISOString(), rows }, null, 1));
