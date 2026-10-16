// public/logo.png and public/logo-white.png (round 10): the Iris keycap mark (src/app/icon.svg)
// beside the live wordmark "oh-my-design" set in Wanted Sans Variable 700 (the header lockup,
// components/brand-a/logo.tsx), rendered by headless Chromium with the site's own font file so
// the text is real type, not a tracing. logo.png: ink text for light grounds; logo-white.png:
// white text for dark grounds. Transparent background.
//   node scripts/brand-logo.mjs
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
const require = createRequire(new URL("../package.json", import.meta.url));
const { chromium } = require("playwright-core");
const web = new URL("..", import.meta.url).pathname;
const font = "data:font/woff2;base64," + fs.readFileSync(path.join(web, "public/fonts/wanted-sans/WantedSansVariable.split.90.woff2")).toString("base64");
const mark = "data:image/svg+xml;base64," + fs.readFileSync(path.join(web, "src/app/icon.svg")).toString("base64");
const page = (color) => `<!doctype html><meta charset="utf-8"><style>@font-face{font-family:W;src:url(${font}) format("woff2");font-weight:100 900}
html,body{margin:0;background:transparent}#l{display:inline-flex;align-items:center;gap:30px;padding:12px 16px}
#l img{width:120px;height:120px;display:block}#l span{font:700 84px/1 W;letter-spacing:-0.01em;color:${color};white-space:nowrap}</style>
<div id="l"><img src="${mark}" alt=""><span>oh-my-design</span></div>`;
const b = await chromium.launch({ headless: true, channel: "chromium" });
for (const [file, color, dpr] of [["public/logo.png", "#13131a", 1], ["public/logo-white.png", "#ffffff", 0.5]]) {
  const p = await b.newPage({ viewport: { width: 1200, height: 300 }, deviceScaleFactor: dpr });
  await p.setContent(page(color));
  await p.evaluate(() => document.fonts.ready);
  const fam = await p.evaluate(() => document.fonts.check('700 84px W'));
  if (!fam) throw new Error("Wanted Sans did not load");
  await p.locator("#l").screenshot({ path: path.join(web, file), omitBackground: true });
  console.log(file);
}
await b.close();
