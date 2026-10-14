// Hero poster fallbacks (round 4): the logo keyboard is identical for every locale, so one
// set per theme × width. Renders the live 3D scene (reduced-motion pose), hides everything
// but #k3, clips to its box, encodes webp into public/brand-a/.
// Headless playwright-core with GPU flags (not the owner's Chrome).
//   node scripts/hero-posters.mjs <base-url>
import { createRequire } from "node:module";
const require = createRequire(new URL("../package.json", import.meta.url));
const { chromium } = require("playwright-core");
const sharp = require("sharp");
const base = (process.argv[2] || "http://127.0.0.1:3480").replace(/\/$/, "");
const outdir = new URL("../public/brand-a/", import.meta.url).pathname;
import fs from "node:fs";
fs.mkdirSync(outdir, { recursive: true });
const b = await chromium.launch({ headless: true, channel: "chromium", args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"] });
for (const scheme of ["light", "dark"]) for (const [w, h, dpr, sfx] of [[1440, 900, 1, ""], [390, 844, 2, "-m"]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: dpr, colorScheme: scheme, reducedMotion: "reduce" });
  await ctx.addInitScript(() => { try { localStorage.setItem("omd-consent", "denied"); } catch {} });
  const p = await ctx.newPage();
  await p.goto(base + "/?k3fresh=1", { waitUntil: "networkidle", timeout: 180000 });
  await p.waitForSelector("#k3.sq-live", { timeout: 60000 });
  await p.waitForTimeout(2000);
  await p.addStyleTag({ content: "body *{visibility:hidden!important} #k3,#k3 canvas{visibility:visible!important} .sq-k3-ring,.sq-k3-name{display:none!important}" });
  await p.waitForTimeout(400);
  const box = await p.evaluate(() => { const r = document.getElementById("k3").getBoundingClientRect(); return { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: r.height }; });
  const png = await p.screenshot({ clip: box, fullPage: true });
  const file = `${outdir}hero-logos-${scheme}${sfx}.webp`;
  await sharp(png).webp({ quality: 86 }).toFile(file);
  console.log(file, Math.round(box.width) + "x" + Math.round(box.height));
  await ctx.close();
}
await b.close();
