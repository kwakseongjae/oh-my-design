/** sheet.mjs — 우리 레시피 + 레퍼런스 사이트를 스크롤 깊이별로 캡처해 한 장의 콘택트 시트로 만든다. */
import { mkdirSync, writeFileSync } from "node:fs"; import { join, resolve } from "node:path"; import { pathToFileURL } from "node:url";
const HERE = process.cwd(); const OUT = join(HERE, "shots"); mkdirSync(OUT, { recursive: true });
const { chromiumRuntime } = await import(pathToFileURL(resolve(HERE, "../../../test-v2/tools/lib/browser.mjs")).href);
const { chromium, launchOptions } = chromiumRuntime();
const b = await chromium.launch(launchOptions);
const cells = [];
const shoot = async (url, tag, fracs) => {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  try { await p.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 }); await p.waitForTimeout(2500);
    for (const f of fracs) { await p.evaluate((f) => scrollTo(0, document.documentElement.scrollHeight * f), f);
      await p.waitForTimeout(900); const name = `${tag}-${String(f).replace(".", "")}.png`;
      await p.screenshot({ path: join(OUT, name) }); cells.push([`${tag} @${f}`, name]); } }
  catch (e) { console.log("skip", tag, String(e.message).slice(0, 60)); }
  await ctx.close();
};
for (const r of ["01-zoom-through", "03-card-fan-3d", "04-stack-unfold", "07-text-breakout", "08-match-cut"])
  await shoot(pathToFileURL(join(HERE, "dist", r + ".html")).href, r.slice(0, 2), [0.28, 0.5]);
await shoot("https://www.apple.com/airpods-pro/", "apple", [0.12, 0.3]);
await shoot("https://www.cuberto.com/", "cuberto", [0.15, 0.4]);
const html = `<style>body{margin:0;background:#111;color:#ccc;font:11px ui-monospace,monospace;display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:4px}figure{margin:0}img{width:100%;display:block;border:1px solid #333}</style>` +
  cells.map(([t, n]) => `<figure><img src="${n}"><figcaption>${t}</figcaption></figure>`).join("");
writeFileSync(join(OUT, "sheet.html"), html);
const p = await b.newPage({ viewport: { width: 1600, height: 200 } });
await p.goto(pathToFileURL(join(OUT, "sheet.html")).href, { waitUntil: "load" }); await p.waitForTimeout(1200);
await p.screenshot({ path: join(HERE, "contact-sheet.png"), fullPage: true });
await b.close(); console.log("cells:", cells.length);
