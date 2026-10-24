#!/usr/bin/env node
/**
 * Records the landing's "DESIGN.md → screen" section (GenUI) as an animated WebP for the READMEs.
 *
 *   node scripts/readme/record-genui.cjs <baseUrl> <locale: en|ko|ja|zh-tw> <out.webp>
 *
 * Opens the locale's landing with the 3D keyboard off (?k3=poster), lets the section's first run
 * finish, then picks three companies in turn — Korea, Japan, Taiwan — and records each rebuild from
 * the same DESIGN.md-driven screen. Frames come from Chrome's screencast with their real timestamps,
 * so playback runs at the page's own pace; img2webp (libwebp) encodes them. Needs playwright-core and
 * sharp (web/node_modules) and img2webp on PATH.
 */
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const WEB = path.resolve(__dirname, "../../web/node_modules");
const { chromium } = require(path.join(WEB, "playwright-core"));
const sharp = require(path.join(WEB, "sharp"));

const [base, locale, out] = process.argv.slice(2);
if (!base || !locale || !out) {
  console.error("usage: record-genui.cjs <baseUrl> <en|ko|ja|zh-tw> <out.webp>");
  process.exit(1);
}
const PATH = { en: "/", ko: "/ko", ja: "/ja", "zh-tw": "/zh-tw" }[locale];
const ORDER = ["toss", "freee", "104"]; // one company per CJK market the archive covers most
const WIDTH = 960; // output width; the section is cropped, then scaled to this
const RUN_MS = 4700; // one rebuild, with a beat to read the finished screen
const FPS = 25; // output frame rate
const HOLD_MS = 1600; // the last frame stays up before the loop restarts
const DEBUG_DIR = process.env.GENUI_DEBUG_DIR || ""; // every 25th output frame as PNG, for review

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  // no consent card over the section: record as a visitor who already declined analytics
  await ctx.addInitScript(() => {
    try { localStorage.setItem("omd-consent", "denied"); } catch {}
  });
  const page = await ctx.newPage();
  await page.goto(`${base}${PATH}?k3=poster`, { waitUntil: "networkidle" });

  const root = page.locator("#reference .sq-g5").first();
  await root.waitFor();
  // the sticky site header would sit over the section: keep its space, hide its paint
  await page.addStyleTag({ content: "header{visibility:hidden!important}" });
  // put the section near the top of the viewport and let its first automatic run finish
  const pin = () =>
    page.evaluate(() => {
      const el = document.querySelector("#reference .sq-g5");
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 16, behavior: "instant" });
    });
  await pin();
  await page.waitForTimeout(6500);
  // content above can settle late (posters, fonts) and push the section down: pin it again until still
  for (let i = 0; i < 5; i++) {
    await pin();
    await page.waitForTimeout(400);
    const y = await root.evaluate((el) => Math.round(el.getBoundingClientRect().top));
    if (y === 16) break;
  }

  const selected = await page.locator(".sq-g5-chip[aria-checked='true']").getAttribute("data-id");
  const seq = ORDER[0] === selected ? [...ORDER.slice(1), ORDER[0]] : ORDER;

  const box = await root.boundingBox();
  if (Math.round(box.y) !== 16) throw new Error(`section moved: top ${box.y}`);
  const clip = {
    left: Math.max(0, Math.round(box.x)),
    top: Math.max(0, Math.round(box.y)),
    width: Math.round(Math.min(box.width, 1440 - box.x)),
    height: Math.round(Math.min(box.height, 900 - box.y)),
  };

  const cdp = await ctx.newCDPSession(page);
  const frames = [];
  cdp.on("Page.screencastFrame", async ({ data, metadata, sessionId }) => {
    frames.push({ buf: Buffer.from(data, "base64"), t: metadata.timestamp });
    try { await cdp.send("Page.screencastFrameAck", { sessionId }); } catch {}
  });
  await cdp.send("Page.startScreencast", { format: "jpeg", quality: 95, maxWidth: 1440, maxHeight: 900, everyNthFrame: 1 });
  await page.waitForTimeout(400);
  for (const id of seq) {
    // a DOM click: no scroll-into-view, so the cropped section stays where it was measured
    await page.locator(`.sq-g5-chip[data-id='${id}']`).evaluate((el) => el.click());
    await page.waitForTimeout(RUN_MS);
    const y = await root.evaluate((el) => Math.round(el.getBoundingClientRect().top));
    if (y !== 16) throw new Error(`section moved during the run: top ${y}`);
  }
  await cdp.send("Page.stopScreencast");
  await browser.close();

  if (frames.length < 10) throw new Error(`only ${frames.length} frames captured`);
  // Resample to a steady FPS: at each tick take the newest frame painted by then, and merge ticks
  // that show the same frame into one longer frame. Screencast frames arrive every ~16 ms while
  // something animates and not at all while the page is still, so raw deltas can't be used as-is.
  const STEP = 1000 / FPS;
  const t0 = frames[0].t * 1000;
  const end = frames[frames.length - 1].t * 1000 + HOLD_MS;
  const ticks = [];
  for (let at = t0, i = 0; at < end; at += STEP) {
    while (i + 1 < frames.length && frames[i + 1].t * 1000 <= at) i++;
    if (ticks.length && ticks[ticks.length - 1].i === i) ticks[ticks.length - 1].ms += STEP;
    else ticks.push({ i, ms: STEP });
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "omd-genui-"));
  const args = ["-loop", "0", "-lossy", "-q", "72", "-m", "6"];
  let kept = 0;
  for (const { i, ms } of ticks) {
    const file = path.join(tmp, `f${String(kept).padStart(4, "0")}.png`);
    await sharp(frames[i].buf).extract(clip).resize({ width: WIDTH }).png().toFile(file);
    if (DEBUG_DIR && kept % 25 === 0) fs.copyFileSync(file, path.join(DEBUG_DIR, `${locale}-${String(kept).padStart(4, "0")}.png`));
    args.push("-d", String(Math.round(ms)), file);
    kept++;
  }
  args.push("-o", out);
  execFileSync("img2webp", args, { stdio: "ignore" });
  fs.rmSync(tmp, { recursive: true, force: true });
  const kb = Math.round(fs.statSync(out).size / 1024);
  const secs = ((end - t0) / 1000).toFixed(1);
  console.log(`${locale}: ${kept} frames, ${secs}s, crop ${clip.width}x${clip.height} → ${WIDTH}w, ${kb} KB → ${out}`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
