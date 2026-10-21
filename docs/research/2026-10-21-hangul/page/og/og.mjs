#!/usr/bin/env node
/**
 * Renders the /hangul share cards: web/public/hangul/og-ko.png and og-en.png (1200×630).
 *
 *   node docs/research/2026-10-21-hangul/page/og/og.mjs
 *
 * Static on purpose: next/og (Satori) cannot read the site's woff2 faces, and the blog's OG route
 * fetches a Korean face from Google at render time. This draws the card in headless Chromium from
 * the files the site itself serves: Wanted Sans Variable (public/fonts/wanted-sans, the CSS in
 * src/styles/wanted-sans-*.css) for the copy, and the self-hosted Pretendard subset
 * (src/fonts/pretendard) for the specimen word, as on the page. The torn "있어 / 요." is the eval
 * page's real break at 360px (Codex p1-A-r3), drawn with a deliberate <br>.
 * Needs playwright-core (web/node_modules) and its chromium headless shell.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../../../../..");
const WEB = path.join(ROOT, "web");
const { chromium } = createRequire(path.join(WEB, "package.json"))("playwright-core");

const fileUrl = (p) => pathToFileURL(p).href;
const wantedCss = ["wanted-sans-latin.css", "wanted-sans-cjk.css"]
  .map((f) => fs.readFileSync(path.join(WEB, "src/styles", f), "utf8"))
  .join("\n")
  .replaceAll('url("/fonts/wanted-sans/', `url("${fileUrl(path.join(WEB, "public/fonts/wanted-sans"))}/`);
const pretendard = fileUrl(path.join(WEB, "src/fonts/pretendard/PretendardVariable-ksx1001.woff2"));
const logo = fileUrl(path.join(WEB, "public/brand/header-icon.svg"));

const COPY = {
  ko: { probe: "끊기지", lang: "ko", tag: "한국어 조판 스킬", h: "AI가 만든 한국어 제목,<br>단어 중간에서<br>끊기지 않게", before: "스킬 없이", after: "/hangul 적용" },
  en: { probe: "Korean", lang: "en", tag: "Korean typography skill", h: "Korean headings<br>that don’t break<br>mid-word", before: "Without the skill", after: "With /hangul" },
};

const page = (c) => `<!doctype html><html lang="${c.lang}"><head><meta charset="utf-8"><style>
${wantedCss}
@font-face{font-family:"Pretendard OG";src:url("${pretendard}") format("woff2");font-weight:400 800;font-display:block}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1200px;height:630px;background:#fff}
body{display:grid;grid-template-columns:minmax(0,1fr) 440px;gap:48px;padding:56px 56px 52px 64px;color:#13131a;
  font-family:"Wanted Sans Variable","Pretendard OG",sans-serif;font-synthesis:none;-webkit-font-smoothing:antialiased;
  word-break:keep-all;overflow-wrap:anywhere}
.l{display:flex;flex-direction:column;justify-content:space-between;min-width:0}
.k{display:flex;align-items:baseline;gap:14px;font-size:26px;line-height:1.4;color:#5a5a63}
.k b{font:700 28px/1.4 ui-monospace,"SF Mono",Menlo,monospace;color:#13131a}
h1{font-size:62px;line-height:1.3;letter-spacing:-0.03em;font-weight:780}
html:lang(en) h1{font-size:68px;line-height:1.12;letter-spacing:-0.035em}
.brand{display:flex;align-items:center;gap:12px;font:700 26px/1 "Wanted Sans Variable",sans-serif;letter-spacing:-0.01em}
.brand img{width:40px;height:40px}
.r{display:flex;flex-direction:column;justify-content:center;gap:22px;padding:36px 40px;border-radius:28px;background:#f9faff;box-shadow:0 0 0 1px #e5e6eb}
.lab{font-size:22px;line-height:1.4;font-weight:650;color:#5a5a63}
.w{font-family:"Pretendard OG",sans-serif;font-size:92px;line-height:1.22;font-weight:750;letter-spacing:-0.02em;color:#13131a}
.w .t{display:inline-block;padding:0 10px;margin-left:-12px;border:4px solid #b3261e;border-radius:14px;color:#b3261e}
hr{border:0;border-top:2px solid #e5e6eb}
</style></head><body>
<div class="l">
  <p class="k"><b lang="en">/hangul</b><span>${c.tag}</span></p>
  <h1>${c.h}</h1>
  <p class="brand" lang="en"><img src="${logo}" alt="">oh-my-design</p>
</div>
<div class="r">
  <div><p class="lab">${c.before}</p><p class="w" lang="ko">있어<br><span class="t">요.</span></p></div>
  <hr>
  <div><p class="lab">${c.after}</p><p class="w" lang="ko">있어요.</p></div>
</div>
</body></html>`;

const browser = await chromium.launch({ headless: true });
try {
  for (const k of Object.keys(COPY)) {
    const html = path.join(HERE, `og-${k}.html`);
    fs.writeFileSync(html, page(COPY[k]));
    const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    await p.goto(fileUrl(html));
    const ok = await p.evaluate(async (probe) => {
      await document.fonts.ready;
      return {
        wanted: document.fonts.check('780 62px "Wanted Sans Variable"', probe),
        pretendard: document.fonts.check('750 92px "Pretendard OG"', "있어요"),
        overflow: document.documentElement.scrollWidth > 1200 || document.documentElement.scrollHeight > 630,
      };
    }, COPY[k].probe);
    if (!ok.wanted || !ok.pretendard || ok.overflow) throw new Error(`og-${k}: ${JSON.stringify(ok)}`);
    const out = path.join(WEB, "public/hangul", `og-${k}.png`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await p.screenshot({ path: out, type: "png" });
    console.log(`${path.relative(ROOT, out)} ${fs.statSync(out).size} bytes ${JSON.stringify(ok)}`);
    await ctx.close();
  }
} finally {
  await browser.close();
}
