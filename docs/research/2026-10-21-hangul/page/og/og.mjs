#!/usr/bin/env node
/**
 * Renders the /hangul share cards: web/public/hangul/og-ko.png and og-en.png (1200×630), r16.
 *
 *   node docs/research/2026-10-21-hangul/page/og/og.mjs --base http://localhost:3216
 *
 * The card is the page's hero B: ink, the heading, and the two moa phones, without the skill and
 * with it. The phones are photographed from the running page (the hero's two .hg-phone elements,
 * reduced motion so both show the top of the screen, at 2×), so the card shows the same pixels the
 * page draws; the text is set here in the site's own Wanted Sans (public/fonts/wanted-sans, the CSS
 * in src/styles/wanted-sans-*.css). Static on purpose: next/og (Satori) cannot read those woff2 files.
 * Needs playwright-core (web/node_modules), its chromium headless shell, and a dev or preview server.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../../../../..");
const WEB = path.join(ROOT, "web");
const { chromium } = createRequire(path.join(WEB, "package.json"))("playwright-core");
const arg = (k, d) => {
  const i = process.argv.indexOf(k);
  return i > -1 ? process.argv[i + 1] : d;
};
const BASE = arg("--base", "http://localhost:3216");

const fileUrl = (p) => pathToFileURL(p).href;
const wantedCss = ["wanted-sans-latin.css", "wanted-sans-cjk.css"]
  .map((f) => fs.readFileSync(path.join(WEB, "src/styles", f), "utf8"))
  .join("\n")
  .replaceAll('url("/fonts/wanted-sans/', `url("${fileUrl(path.join(WEB, "public/fonts/wanted-sans"))}/`);
const logo = fileUrl(path.join(WEB, "public/brand/header-icon.svg"));

const COPY = {
  ko: { lang: "ko", path: "/ko/hangul", probe: "같은 화면", tag: "한국어 조판·문구 스킬", h: "같은 화면,<br>다른 한국어", before: "스킬 없이", after: "/hangul" },
  en: { lang: "en", path: "/hangul", probe: "Same screen", tag: "Korean typography and writing skill", h: "Same screen,<br>different Korean", before: "Without the skill", after: "/hangul" },
};

const page = (c, before, after) => `<!doctype html><html lang="${c.lang}"><head><meta charset="utf-8"><style>
${wantedCss}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1200px;height:630px;background:#0e0f11;overflow:hidden}
body{position:relative;color:#f2f2ef;font-family:"Wanted Sans Variable",sans-serif;font-synthesis:none;-webkit-font-smoothing:antialiased;word-break:keep-all;overflow-wrap:anywhere}
.l{position:absolute;left:64px;top:60px;bottom:52px;width:410px;display:flex;flex-direction:column;justify-content:space-between}
.k{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 14px;font-size:24px;line-height:1.4;color:#a3a4aa}
.k b{font:700 26px/1.4 ui-monospace,"SF Mono",Menlo,monospace;color:#f2f2ef}
h1{margin-top:-24px;font-size:68px;line-height:1.2;letter-spacing:-0.025em;font-weight:780}
html:lang(en) h1{font-size:58px;line-height:1.14}
.brand{display:flex;align-items:center;gap:12px;font:700 26px/1 "Wanted Sans Variable",sans-serif;letter-spacing:-0.01em;color:#f2f2ef}
.brand img{width:40px;height:40px}
.pair{position:absolute;left:494px;top:52px;display:flex;gap:24px}
.side{display:flex;flex-direction:column;align-items:center;gap:14px}
.lab{display:flex;align-items:center;gap:9px;font-size:21px;line-height:1.3;font-weight:650}
.lab i{width:10px;height:10px;border-radius:50%;background:currentColor}
.b .lab{color:#fdba74}.a .lab{color:#93c5fd}
.side img{display:block;width:330px;height:auto}
</style></head><body>
<div class="l">
  <p class="k"><b lang="en">/hangul</b><span>${c.tag}</span></p>
  <h1>${c.h}</h1>
  <p class="brand" lang="en"><img src="${logo}" alt="">oh-my-design</p>
</div>
<div class="pair">
  <div class="side b"><p class="lab"><i></i>${c.before}</p><img src="${before}" alt=""></div>
  <div class="side a"><p class="lab"><i></i>${c.after}</p><img src="${after}" alt=""></div>
</div>
</body></html>`;

const browser = await chromium.launch({ headless: true });
try {
  for (const k of Object.keys(COPY)) {
    const c = COPY[k];
    // the hero's two phones, photographed from the page
    const live = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2, reducedMotion: "reduce" });
    const lp = await live.newPage();
    await lp.goto(BASE + c.path, { waitUntil: "networkidle", timeout: 120000 });
    await lp.evaluate(() => document.fonts.ready);
    // the analytics consent card (analytics-consent.tsx) is fixed over the right phone
    await lp.addStyleTag({ content: "[role='region'].fixed{display:none!important}" });
    const phones = lp.locator(".hg-split--hero .hg-phone");
    if ((await phones.count()) !== 2) throw new Error(`${c.path}: expected two hero phones`);
    const shots = [];
    for (let i = 0; i < 2; i++) {
      const file = path.join(HERE, `phone-${k}-${i ? "after" : "before"}.png`);
      await phones.nth(i).screenshot({ path: file });
      shots.push(fileUrl(file));
    }
    await live.close();

    const html = path.join(HERE, `og-${k}.html`);
    fs.writeFileSync(html, page(c, shots[0], shots[1]));
    const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    await p.goto(fileUrl(html));
    const ok = await p.evaluate(async (probe) => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((im) => im.decode()));
      return {
        wanted: document.fonts.check('780 68px "Wanted Sans Variable"', probe),
        overflow: document.documentElement.scrollWidth > 1200,
      };
    }, c.probe);
    if (!ok.wanted || ok.overflow) throw new Error(`og-${k}: ${JSON.stringify(ok)}`);
    const out = path.join(WEB, "public/hangul", `og-${k}.png`);
    await p.screenshot({ path: out, type: "png" });
    console.log(`${path.relative(ROOT, out)} ${fs.statSync(out).size} bytes ${JSON.stringify(ok)}`);
    await ctx.close();
  }
} finally {
  await browser.close();
}
