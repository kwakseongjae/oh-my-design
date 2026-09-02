/**
 * Reveal-on-enter probe.
 *
 * measure-landing.mjs samples element state once per scroll step, 1100ms after
 * the jump — by then an IntersectionObserver reveal has already finished, so it
 * only sees reveals that are slow or staggered. This probe samples TWICE per
 * step (t+60ms and t+1200ms) and counts elements that moved from hidden/offset
 * to visible/neutral inside that window. That is the reveal cadence.
 */
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/package.json");
const { chromium } = require("playwright-core");
const HERE = dirname(fileURLToPath(import.meta.url));
const VIEWPORT = { width: 1440, height: 900 };

const SNAP = () => {
  const out = {};
  for (const el of document.querySelectorAll("[data-omdid]")) {
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < 8) continue;
    if (r.bottom < -300 || r.top > window.innerHeight + 300) continue;
    const cs = getComputedStyle(el);
    out[el.getAttribute("data-omdid")] = [+(+cs.opacity).toFixed(2), cs.transform, cs.clipPath, cs.filter];
  }
  return out;
};

const agg = JSON.parse(readFileSync(join(HERE, "measurements.json"), "utf8"));
const only = process.argv[2];
for (const site of agg.sites) {
  if (only && site.site !== only) continue;
  const browser = await chromium.launch({ channel: "chrome" });
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1, locale: site.site.startsWith("toss") || site.site.startsWith("apple") ? "ko-KR" : "en-US", colorScheme: "light",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36" });
  const page = await ctx.newPage();
  const rec = { probedAt: new Date().toISOString(), perStep: [], error: null };
  try {
    await page.goto(site.url, { waitUntil: "load", timeout: 75000 });
    await page.waitForTimeout(4500);
    for (const sel of ['button:has-text("Accept")','button:has-text("Accept all")','button:has-text("동의")','button:has-text("모두 동의")','[id*="cookie"] button','button:has-text("Got it")']) {
      try { const l = page.locator(sel).first(); if (await l.isVisible({ timeout: 200 })) { await l.click({ timeout: 800 }); await page.waitForTimeout(400); } } catch {}
    }
    await page.evaluate(() => { let i = 0; for (const el of document.querySelectorAll("body *")) { if (i > 6000) break; el.setAttribute("data-omdid", String(i++)); } });
    const steps = Math.min(site.scrollStepCount || 12, 60);
    let totalEnter = 0, totalOpacity = 0, totalTransform = 0, totalClip = 0, totalFilter = 0;
    const durationsObserved = [];
    for (let s = 1; s < steps; s++) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), s * VIEWPORT.height);
      // re-tag: lazily mounted nodes appear only once their step is reached
      await page.evaluate(() => { let i = 0; for (const el of document.querySelectorAll("body *")) { if (i > 20000) break; if (!el.hasAttribute("data-omdid")) el.setAttribute("data-omdid", "n" + (i++) + "_" + Math.round(window.scrollY)); } });
      await page.waitForTimeout(60);
      const a = await page.evaluate(SNAP);
      await page.waitForTimeout(1240);
      const b = await page.evaluate(SNAP);
      let enter = 0, op = 0, tf = 0, cl = 0, fl = 0;
      for (const id of Object.keys(b)) {
        const A = a[id], B = b[id];
        if (!A) continue;
        let did = false;
        if (A[0] < 0.6 && B[0] > 0.9) { op++; did = true; }
        if (A[1] !== B[1] && B[1] === "none" && A[1] !== "none") { tf++; did = true; }
        if (A[2] !== B[2]) { cl++; did = true; }
        if (A[3] !== B[3] && B[3] === "none") { fl++; did = true; }
        if (did) enter++;
      }
      rec.perStep.push({ step: s, y: s * VIEWPORT.height, revealedOnEnter: enter, opacity: op, transform: tf, clipPath: cl, filter: fl, tracked: Object.keys(b).length });
      totalEnter += enter; totalOpacity += op; totalTransform += tf; totalClip += cl; totalFilter += fl;
    }
    rec.totals = { revealedOnEnter: totalEnter, opacity: totalOpacity, transform: totalTransform, clipPath: totalClip, filter: totalFilter,
      stepsProbed: steps - 1, revealsPerViewport: +(totalEnter / Math.max(1, steps - 1)).toFixed(1),
      stepsWithAnyReveal: rec.perStep.filter((p) => p.revealedOnEnter > 0).length };
  } catch (e) { rec.error = String(e).slice(0, 300); }
  await browser.close();
  site.revealsOnEnter = rec;
  console.log(`[${site.site}]`, JSON.stringify(rec.totals || rec.error));
}
writeFileSync(join(HERE, "measurements.json"), JSON.stringify(agg, null, 2));
console.log("merged");
