// Hero poster fallbacks (round 5): one set per cap set (default = en/ko, ja, zh-tw) ×
// width (1440 @1x and @2x, 390 @2x; light only since round 7). Renders the live 3D scene (reduced-motion pose), hides everything
// but #k3, clips to its box, encodes webp into public/brand-a/.
// Round 9 (2D drop, components/brand-a/hero-drop.tsx), from the same scene and box:
//   - a base poster per size: the set without its fresh caps (ids on this keyboard and on no other set's);
//   - a sprite sheet per @2x / phone size: each fresh cap alone without its shadows, and its floor
//     shadow alone, each rendered over the paper and over black and matted (alpha = 1 − (A − B) / paper);
//   - data/hero-drop.json: sprite boxes in CSS px of the poster, the sheet, the fall and bounce heights.
//   The settled composite (base + shadows + caps) is diffed against the full poster and printed.
// Headless playwright-core with GPU flags (not the owner's Chrome).
//   node scripts/hero-posters.mjs <base-url> [default|ja|zh-tw ...]
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire(new URL("../package.json", import.meta.url));
const { chromium } = require("playwright-core");
const sharp = require("sharp");
const base = (process.argv[2] || "http://127.0.0.1:3480").replace(/\/$/, "");
const outdir = new URL("../public/brand-a/", import.meta.url).pathname;
const caps = JSON.parse(fs.readFileSync(new URL("../src/data/hero-caps.json", import.meta.url), "utf8"));
const dropFile = new URL("../src/data/hero-drop.json", import.meta.url).pathname;
const drop = JSON.parse(fs.readFileSync(dropFile, "utf8"));
fs.mkdirSync(outdir, { recursive: true });

const PAPER = "#ffffff"; // --sq-paper (styles/brand-a.css)
const ids = (s) => [...new Set([...s.wide.flat(), ...s.narrow.flat()])];
const freshOf = (name) => {
  const others = new Set(Object.entries(caps.sets).filter(([k]) => k !== name).flatMap(([, s]) => ids(s)));
  return ids(caps.sets[name]).filter((id) => !others.has(id));
};
/* fall from the 3D drop's height (keys3d/main.js H0 = 5.5 world units) seen through the hero camera
   (~74° elevation: the height plus its 0.22 up-screen drift project to ~0.49 cap per unit) ≈ 2.7 caps;
   the first bounce (0.24 of the impact speed) ≈ 0.31 units ≈ 0.15 cap */
const FALL = 2.7, BOUNCE = 0.15;

const b = await chromium.launch({ headless: true, channel: "chromium", args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"] });
const SETS = [["/", "", "default"], ["/ja", "-ja", "ja"], ["/zh-tw", "-zh-tw", "zh-tw"]].filter(([, , n]) => process.argv.length <= 3 || process.argv.slice(3).includes(n));
const frames = (p) => p.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));

async function raw(png) {
  const { data, info } = await sharp(png).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data, w: info.width, h: info.height };
}
/* matte one element from its paper and black renders: premultiplied colour = B, alpha from the difference */
function matte(A, B) {
  const n = A.w * A.h, out = Buffer.alloc(n * 4);
  let x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
  for (let i = 0; i < n; i++) {
    const d = (A.data[i * 3] - B.data[i * 3] + A.data[i * 3 + 1] - B.data[i * 3 + 1] + A.data[i * 3 + 2] - B.data[i * 3 + 2]) / 3;
    const a = Math.max(0, Math.min(1, 1 - d / 255));
    if (a < 3 / 255) continue;
    for (let c = 0; c < 3; c++) out[i * 4 + c] = Math.min(255, Math.round(B.data[i * 3 + c] / a));
    out[i * 4 + 3] = Math.round(a * 255);
    const x = i % A.w, y = (i / A.w) | 0;
    if (x < x0) x0 = x; if (y < y0) y0 = y; if (x > x1) x1 = x; if (y > y1) y1 = y;
  }
  if (x1 < 0) return null;
  x0 = Math.max(0, x0 - 1); y0 = Math.max(0, y0 - 1); x1 = Math.min(A.w - 1, x1 + 1); y1 = Math.min(A.h - 1, y1 + 1);
  const w = x1 - x0 + 1, h = y1 - y0 + 1, crop = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) out.copy(crop, y * w * 4, ((y0 + y) * A.w + x0) * 4, ((y0 + y) * A.w + x1 + 1) * 4);
  return { x: x0, y: y0, w, h, rgba: crop };
}

const report = {};
for (const [route, set, name] of SETS) {
  const freshAll = freshOf(name);
  const entry = (drop.sets[name] = { fresh: freshAll });
  for (const [w, h, dpr, sfx] of [[1440, 900, 1, ""], [1440, 900, 2, "@2x"], [390, 844, 2, "-m"]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: dpr, colorScheme: "light", reducedMotion: "reduce" });
    await ctx.addInitScript(() => { try { localStorage.setItem("omd-consent", "denied"); } catch {} });
    const p = await ctx.newPage();
    await p.goto(base + route + "?k3fresh=1&k3dbg=1", { waitUntil: "networkidle", timeout: 180000 });
    await p.waitForSelector("#k3.sq-live", { timeout: 60000, state: "attached" });
    await p.waitForTimeout(2000);
    await p.addStyleTag({ content: "body *{visibility:hidden!important} #k3,#k3 canvas{visibility:visible!important} .sq-k3-ring,.sq-k3-name,.sq-k3-drop{display:none!important}" });
    await p.waitForTimeout(400);
    const box = await p.evaluate(() => { const r = document.getElementById("k3").getBoundingClientRect(); return { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: r.height }; });
    const shot = () => p.screenshot({ clip: box, fullPage: true });
    const full = await shot();
    await sharp(full).webp({ quality: 86 }).toFile(`${outdir}hero-logos${set}-light${sfx}.webp`);
    const narrow = w <= 900;
    const shown = new Set((narrow ? caps.sets[name].narrow : caps.sets[name].wide).flat());
    const fresh = freshAll.filter((id) => shown.has(id));
    // base poster: the same scene with the fresh caps hidden
    await p.evaluate((f) => { window.__k3.hide(f); window.__k3.renderNow(); }, fresh);
    await frames(p);
    const basePng = await shot();
    await sharp(basePng).webp({ quality: 86 }).toFile(`${outdir}hero-base${set}-light${sfx}.webp`);
    console.log(name, sfx || "@1x", `${Math.round(box.width)}x${Math.round(box.height)}`, "fresh:", fresh.join(","));
    if (sfx && fresh.length) {
      const capPx = await p.evaluate(() => window.__k3.capPx());
      const sprites = [];
      for (const id of fresh) {
        const got = {};
        for (const mode of ["cap", "shadow"]) {
          await p.evaluate(([i, m, paper]) => { window.__k3.solo(i, m); window.__k3.floorTo(paper); window.__k3.renderNow(); }, [id, mode, PAPER]);
          await frames(p);
          const A = await raw(await shot());
          await p.evaluate(() => { window.__k3.floorTo("#000000"); window.__k3.renderNow(); });
          await frames(p);
          const B = await raw(await shot());
          got[mode] = matte(A, B);
        }
        sprites.push({ id, cap: got.cap, sh: got.shadow });
      }
      await p.evaluate((paper) => { window.__k3.solo(null, null); window.__k3.floorTo(paper); window.__k3.hide([]); window.__k3.renderNow(); }, PAPER);
      // one sheet: [shadow, cap] per fresh cap, left to right, 2 device px apart
      const parts = sprites.flatMap((s) => [s.sh, s.cap]).filter(Boolean);
      const SW = parts.reduce((a, s) => a + s.w + 2, 0), SH = Math.max(...parts.map((s) => s.h));
      let sx = 0;
      const comps = [];
      for (const s of parts) { s.sx = sx; comps.push({ input: s.rgba, raw: { width: s.w, height: s.h, channels: 4 }, left: sx, top: 0 }); sx += s.w + 2; }
      const sheetFile = `hero-drop${set}-light${sfx}.webp`;
      await sharp({ create: { width: SW, height: SH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite(comps).webp({ quality: 80, alphaQuality: 80, effort: 6 }).toFile(outdir + sheetFile);
      const css = (s) => ({ x: +(s.x / dpr).toFixed(2), y: +(s.y / dpr).toFixed(2), w: +(s.w / dpr).toFixed(2), h: +(s.h / dpr).toFixed(2), sx: +(s.sx / dpr).toFixed(2) });
      entry[narrow ? "m" : "d"] = {
        w: +box.width.toFixed(2), h: +box.height.toFixed(2), capPx: +capPx.toFixed(2),
        sheet: { src: `/brand-a/${sheetFile}`, w: +(SW / dpr).toFixed(2), h: +(SH / dpr).toFixed(2) },
        caps: sprites.filter((s) => s.cap && s.sh).map((s) => ({ id: s.id, cap: css(s.cap), sh: css(s.sh), f: +((FALL * capPx * dpr) / s.cap.h * 100).toFixed(1), b: +((BOUNCE * capPx * dpr) / s.cap.h * 100).toFixed(1) })),
      };
      // acceptance: settled composite (base + shadows + caps) against the full poster
      const layers = sprites.flatMap((s) => [s.sh, s.cap]).filter(Boolean).map((s) => ({ input: s.rgba, raw: { width: s.w, height: s.h, channels: 4 }, left: s.x, top: s.y }));
      const comp = await raw(await sharp(basePng).composite(layers).png().toBuffer());
      const F = await raw(full);
      let sum = 0, big = 0;
      for (let i = 0; i < F.data.length; i += 3) { const d = (Math.abs(F.data[i] - comp.data[i]) + Math.abs(F.data[i + 1] - comp.data[i + 1]) + Math.abs(F.data[i + 2] - comp.data[i + 2])) / 3; sum += d; if (d > 24) big++; }
      const n = F.data.length / 3;
      report[`${name}${sfx}`] = { meanAbs: +(sum / n).toFixed(3), over24pct: +((100 * big) / n).toFixed(3) };
      console.log("  composite vs full:", JSON.stringify(report[`${name}${sfx}`]));
    }
    await ctx.close();
  }
}
fs.writeFileSync(dropFile, JSON.stringify(drop, null, 1) + "\n");
if (process.env.HERO_REPORT) fs.writeFileSync(process.env.HERO_REPORT, JSON.stringify(report, null, 2) + "\n");
await b.close();
