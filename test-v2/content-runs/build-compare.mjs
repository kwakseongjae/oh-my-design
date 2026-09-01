// 촬영용 비교 페이지 — 3 arm 산출물을 나란히. usage: node build-compare.mjs <brand>
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const HERE = dirname(fileURLToPath(import.meta.url));
const brand = process.argv[2];
if (!brand) { console.error("usage: build-compare.mjs <brand>"); process.exit(1); }
const dir = join(HERE, brand);
const arms = readdirSync(dir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && existsSync(join(dir, e.name, "render.html")))
  .map((e) => e.name);
const order = ["hallmark", "uiuxpromax", "omd"];
arms.sort((a, b) => order.indexOf(a) - order.indexOf(b));
const cols = arms.map((a) => `
  <section><header><h2>${a}</h2></header>
  <iframe src="${a}/render.html" title="${a}"></iframe>
  <footer><a href="${a}/render.html" target="_blank">전체 화면 →</a></footer></section>`).join("");
writeFileSync(join(dir, "compare.html"), `<!doctype html><meta charset="utf-8">
<title>${brand} — same prompt, same model, different harness</title>
<style>
  :root{color-scheme:dark}
  body{margin:0;background:#0a0a0a;color:#eee;font:14px/1.5 -apple-system,Pretendard,sans-serif}
  .bar{padding:14px 20px;border-bottom:1px solid #222;display:flex;gap:14px;align-items:baseline}
  .bar b{font-size:16px} .bar span{color:#888}
  main{display:grid;grid-template-columns:repeat(${arms.length},1fr);gap:1px;background:#222;height:calc(100vh - 92px)}
  section{display:flex;flex-direction:column;background:#0a0a0a;min-width:0}
  header{padding:8px 14px;border-bottom:1px solid #1c1c1c} h2{margin:0;font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#9ad}
  iframe{flex:1;border:0;width:100%;background:#fff}
  footer{padding:6px 14px;border-top:1px solid #1c1c1c;font-size:12px} a{color:#7ab}
  .note{padding:8px 20px;color:#777;font-size:12px;border-top:1px solid #1c1c1c}
</style>
<div class="bar"><b>${brand}</b><span>same prompt · same model (grok-4.6) · same image channel — only the harness differs</span></div>
<main>${cols}</main>
<div class="note">Unofficial generated concept pages for a harness comparison. Not affiliated with the brand.</div>`);
console.log(`compare.html — ${arms.length} arms: ${arms.join(", ")}`);
