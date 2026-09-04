/** probe-sites.mjs — 실제 사이트를 열어 (a) 어떤 스크롤 라이브러리가 살아 있는지, (b) 스크롤 시 실제로
 *  변형되는 요소가 몇 개인지 측정한다. 스크린샷은 남기지 않는다(용량). 실패는 실패로 기록. */
import { resolve } from "node:path"; import { pathToFileURL } from "node:url";
const { chromiumRuntime } = await import(pathToFileURL(resolve(process.cwd(), "../../../test-v2/tools/lib/browser.mjs")).href);
const { chromium, launchOptions } = chromiumRuntime();
const SITES = process.argv.slice(2);
const b = await chromium.launch(launchOptions);
for (const url of SITES) {
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36" });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(3500);
    const snap = () => page.evaluate(() => [...document.querySelectorAll("img,canvas,video,section,div")].slice(0, 400)
      .map((e) => e.getBoundingClientRect().top.toFixed(0) + ":" + getComputedStyle(e).transform.slice(0, 40)).join(","));
    const a = await snap();
    await page.evaluate(() => scrollTo(0, innerHeight * 1.6)); await page.waitForTimeout(1400);
    const c = await snap();
    const libs = await page.evaluate(() => ({
      gsap: typeof window.gsap !== "undefined" || !!document.querySelector('script[src*="gsap" i]'),
      scrollTrigger: typeof window.ScrollTrigger !== "undefined",
      lenis: typeof window.Lenis !== "undefined" || !!document.querySelector("[data-lenis-content],.lenis,html.lenis"),
      locomotive: !!document.querySelector("[data-scroll-container],[data-scroll]"),
      framer: !!document.querySelector("[data-framer-name],[data-framer-appear-id]") || !!window.__framer_importFromPackage,
      three: typeof window.THREE !== "undefined" || !!document.querySelector("canvas[data-engine]"),
      canvases: document.querySelectorAll("canvas").length,
      cssScrollTimeline: [...document.styleSheets].some((s) => { try { return [...s.cssRules].some((r) => (r.cssText || "").includes("animation-timeline")); } catch { return false; } }),
    }));
    const diff = a.split(",").filter((x, i) => x !== c.split(",")[i]).length;
    console.log(`${url}\n   libs=${JSON.stringify(libs)}\n   elements-changed-on-scroll=${diff}/400\n`);
  } catch (e) { console.log(`${url}\n   FAILED: ${String(e.message).slice(0, 100)}\n`); }
  await ctx.close();
}
await b.close();
