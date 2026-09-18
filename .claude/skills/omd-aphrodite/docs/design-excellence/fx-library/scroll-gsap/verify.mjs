/** verify.mjs — (a) reduced-motion 경로 에러 0, (b) 스크롤에 따라 실제로 변형이 일어나는지 델타 측정,
 *  (c) CSS scroll-driven animation(animation-timeline) 네이티브 지원 여부. */
import { readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const HERE = dirname(fileURLToPath(import.meta.url));
const { chromiumRuntime } = await import(pathToFileURL(resolve(HERE, "../../../test-v2/tools/lib/browser.mjs")).href);
const { chromium, launchOptions } = chromiumRuntime();
const browser = await chromium.launch(launchOptions);
const files = readdirSync(join(HERE, "dist")).filter((f) => f.endsWith(".html")).sort();
const probe = { "01": ".r1-frame", "02": ".r2-track", "03": ".r3-ring", "04": ".r4-deck figure",
  "05": ".r5-stage figure:nth-child(4)", "06": "#r6 figure", "07": ".r7-type", "08": "#r8a" };
console.log("== motion delta (normal) ==");
for (const f of files) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(pathToFileURL(join(HERE, "dist", f)).href, { waitUntil: "load" });
  const sel = probe[f.slice(0, 2)];
  const sample = async (frac) => page.evaluate(async ([sel, frac]) => {
    scrollTo(0, document.documentElement.scrollHeight * frac);
    await new Promise((r) => setTimeout(r, 500));
    const s = getComputedStyle(document.querySelector(sel));
    return [s.transform, s.clipPath, s.opacity, s.backgroundSize, s.width].join("|");
  }, [sel, frac]);
  const a = await sample(0.25), b = await sample(0.55);
  console.log(`${a !== b ? "MOVES " : "STATIC"} ${f}  ${sel}`);
  await ctx.close();
}
console.log("\n== reduced-motion pass ==");
for (const f of files) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage(); const errs = [];
  page.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  page.on("pageerror", (e) => errs.push(e.message));
  await page.goto(pathToFileURL(join(HERE, "dist", f)).href, { waitUntil: "load" });
  const st = await page.evaluate(async () => { scrollTo(0, 2000); await new Promise((r) => setTimeout(r, 300));
    return { triggers: ScrollTrigger.getAll().length, reduced: window.REDUCED, visible: [...document.images].filter((i) => i.naturalWidth > 0).length }; });
  console.log(`${errs.length ? "FAIL " : "ok   "} ${f} reduced=${st.reduced} scrollTriggers=${st.triggers} imgsLoaded=${st.visible}${errs.length ? " " + errs[0] : ""}`);
  await ctx.close();
}
const p = await browser.newPage();
const css = await p.evaluate(() => ({
  animationTimeline: CSS.supports("animation-timeline: view()"),
  scrollTimeline: CSS.supports("animation-timeline: scroll()"),
  scrollTimelineAtRule: CSS.supports("timeline-scope: --x"),
  clipPathInterp: CSS.supports("clip-path: inset(10% round 4px)"),
  ua: navigator.userAgent.match(/Chrome\/[\d.]+/)?.[0],
}));
console.log("\n== native CSS scroll-driven animation support ==\n" + JSON.stringify(css, null, 1));
await browser.close();
