/** Easing + duration pairs, parsed with paren-aware splitting (the main rig
 *  split on "," and shredded cubic-bezier(...) into fragments). */
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/package.json");
const { chromium } = require("playwright-core");
const HERE = dirname(fileURLToPath(import.meta.url));

const COLLECT = () => {
  const split = (s) => { const out = []; let d = 0, cur = ""; for (const ch of s) { if (ch === "(") d++; if (ch === ")") d--; if (ch === "," && d === 0) { out.push(cur.trim()); cur = ""; } else cur += ch; } if (cur.trim()) out.push(cur.trim()); return out; };
  const ms = (d) => (d.endsWith("ms") ? parseFloat(d) : parseFloat(d) * 1000);
  const easings = {}, pairs = {}, animEase = {}, delays = {};
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    const ds = split(cs.transitionDuration), fs = split(cs.transitionTimingFunction), dl = split(cs.transitionDelay);
    ds.forEach((d, i) => {
      const v = ms(d); if (!v) return;
      const e = fs[i] || fs[0] || "";
      easings[e] = (easings[e] || 0) + 1;
      pairs[`${Math.round(v)}ms / ${e}`] = (pairs[`${Math.round(v)}ms / ${e}`] || 0) + 1;
      const dv = ms(dl[i] || dl[0] || "0s"); if (dv) delays[Math.round(dv)] = (delays[Math.round(dv)] || 0) + 1;
    });
    const ad = split(cs.animationDuration), af = split(cs.animationTimingFunction), adl = split(cs.animationDelay);
    ad.forEach((d, i) => { const v = ms(d); if (!v) return; const e = af[i] || af[0] || ""; animEase[`${Math.round(v)}ms / ${e}`] = (animEase[`${Math.round(v)}ms / ${e}`] || 0) + 1;
      const dv = ms(adl[i] || adl[0] || "0s"); if (dv) delays[Math.round(dv)] = (delays[Math.round(dv)] || 0) + 1; });
  }
  const top = (o, n) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);
  return { topEasings: top(easings, 8), topTransitionPairs: top(pairs, 10), topAnimationPairs: top(animEase, 6), topStaggerDelaysMs: top(delays, 10) };
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
    // scroll once through so lazily mounted sections contribute
    await p.evaluate(async () => { const h = document.body.scrollHeight; for (let y = 0; y < Math.min(h, 20000); y += 900) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
    await p.waitForTimeout(1200);
    site.motionTokens = await p.evaluate(COLLECT);
    console.log(site.site, JSON.stringify(site.motionTokens.topTransitionPairs.slice(0, 5)), "| ease:", JSON.stringify(site.motionTokens.topEasings.slice(0, 4)));
  } catch (e) { site.motionTokens = { error: String(e).slice(0, 200) }; console.log(site.site, "ERROR", e.message); }
  await b.close();
}
writeFileSync(join(HERE, "measurements.json"), JSON.stringify(agg, null, 2));
console.log("merged easings");
