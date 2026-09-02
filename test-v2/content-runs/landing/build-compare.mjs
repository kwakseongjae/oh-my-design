#!/usr/bin/env node
// 랜딩 콘텐츠 런 비교 페이지 — arm마다 스크롤 여정(리빌 완료) 후 풀페이지 캡처를 찍어 열로 나란히 놓는다.
// 왜 스크린샷 열인가: file:// iframe은 오리진 문제로 동기 스크롤이 깨진다. 스크린샷 열은 구조적으로 완벽 동기다.
// usage: node build-compare.mjs <brand> [arm ...]   (arm 생략 시 존재하는 autopilot·hallmark·landing 전부)
import { createRequire } from "node:module";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire(resolve(dirname(fileURLToPath(import.meta.url)), "../../tools/package.json"));
const { chromium } = require("playwright-core");
const HERE = dirname(fileURLToPath(import.meta.url));
const [brand, ...armArgs] = process.argv.slice(2);
if (!brand) { console.error("usage: build-compare.mjs <brand> [arm ...]"); process.exit(1); }
const LABEL = { autopilot: "omd-autopilot-v2 (baseline)", hallmark: "hallmark (baseline)", landing: "omd:landing" };
const arms = (armArgs.length ? armArgs : ["hallmark", "autopilot", "landing"]).filter((a) => existsSync(join(HERE, brand, a, "render.html")));
if (!arms.length) { console.error("no arms with render.html"); process.exit(1); }
const shots = join(HERE, brand, "shots"); mkdirSync(shots, { recursive: true });
const browser = await chromium.launch({ headless: true });
const heights = {};
for (const a of arms) {
  const c = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const p = await c.newPage();
  await p.goto("file://" + join(HERE, brand, a, "render.html"), { waitUntil: "load", timeout: 30000 });
  await p.waitForTimeout(800);
  // 리빌을 끝내는 여정 — 스크롤 리빌 페이지가 하얗게 찍히지 않게
  heights[a] = await p.evaluate(async () => { const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); for (let y = 0; y <= h; y += 700) { window.scrollTo({ top: y, behavior: "instant" }); await new Promise((r) => setTimeout(r, 140)); } window.scrollTo({ top: 0, behavior: "instant" }); return h; });
  await p.waitForTimeout(600);
  await p.screenshot({ path: join(shots, `${a}.png`), fullPage: true });
  await c.close();
}
await browser.close();
const cols = arms.map((a) => `
  <div class="col"><div class="tag">${LABEL[a] || a}<span>${Math.round(heights[a] / 900 * 100) / 100} vh</span></div><img src="shots/${a}.png" alt="${a}"></div>`).join("");
writeFileSync(join(HERE, brand, "compare.html"), `<!doctype html><meta charset="utf-8">
<title>${brand} — one brief, ${arms.length} harnesses (landing one-pager)</title>
<style>
  :root{color-scheme:dark} *{margin:0;box-sizing:border-box}
  body{background:#0a0a0a;color:#eee;font:14px/1.5 -apple-system,Pretendard,Inter,sans-serif}
  .bar{position:fixed;inset:0 0 auto 0;z-index:2;padding:12px 20px;display:flex;gap:14px;align-items:baseline;background:linear-gradient(#0a0a0aee,#0a0a0a00)}
  .bar b{font-size:16px}.bar span{color:#9aa}
  .stage{display:grid;grid-template-columns:repeat(${arms.length},1fr);gap:2px;padding-top:48px;background:#1a1a1a;align-items:start}
  .col{position:relative;background:#000}
  .tag{position:sticky;top:48px;z-index:1;display:inline-flex;gap:10px;margin:8px;padding:3px 10px;border-radius:99px;background:#111c;border:1px solid #333;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#9ad}
  .tag span{color:#777;text-transform:none;letter-spacing:0}
  img{width:100%;display:block}
  .foot{padding:14px 20px;color:#888;font-size:12px}
</style>
<div class="bar"><b>${brand}</b><span>same brief · same model (grok-4.6) · same image channel (grok image_gen) · only the harness differs</span></div>
<div class="stage">${cols}</div>
<div class="foot">Unofficial generated concepts — not affiliated with the brand. Content run (test-v2/content-runs/landing), not the sealed benchmark.</div>
`);
console.log(`COMPARE_DONE ${brand} arms=${arms.join(",")} → ${join(HERE, brand, "compare.html")}`);
