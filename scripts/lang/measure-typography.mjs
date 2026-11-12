#!/usr/bin/env node
/**
 * Measure how live sites set text in one script (kana, Hangul, Han): the computed CSS on the elements that hold
 * that text. No model. The table a language skill quotes as "what N services ship" is built from this
 * (docs/ROADMAP.md T2), the way skills/hangul/references/measured-67.md backs the Korean skill.
 *
 *   node scripts/lang/measure-typography.mjs <sites.tsv> --lang ja --out <dir> [--only id,id] [--force]
 *
 * <sites.tsv>: one site per line, `id<TAB>url` (further columns ignored). --lang ja | zh-TW | zh-CN | ko picks the
 * locale the page is requested in and the characters that count as the script's text.
 * Writes <dir>/raw/<id>.json per site (skipped when it exists, unless --force).
 *
 * One headless page load per site (Chrome, 1440x1000, the catalog probe's desktop user agent). After the load
 * settles, every visible element that directly holds text in the script is read: font stack, size, weight,
 * style, line-height, letter-spacing, word-break, line-break, overflow-wrap, text-wrap, font-feature-settings,
 * text-spacing-trim, text-autospace, text-align. Elements are weighted by how many characters of the script they
 * hold, because a property set on a footer link says less than one set on every paragraph.
 *
 * Not done: no consent click, no scrolling, no sign-in, no second surface. A page that answers 4xx/5xx, or shows
 * fewer than 50 characters of the script, is recorded as unreadable and not retried another way.
 */
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const { chromium } = createRequire(path.join(REPO, "web/package.json"))("playwright-core");

const LANGS = {
  ja: { locale: "ja-JP", accept: "ja-JP,ja;q=0.9,en;q=0.8", chars: "[\\u3040-\\u30ff\\u3400-\\u9fff\\uff66-\\uff9f]" },
  "zh-TW": { locale: "zh-TW", accept: "zh-TW,zh;q=0.9,en;q=0.8", chars: "[\\u3400-\\u9fff]" },
  "zh-CN": { locale: "zh-CN", accept: "zh-CN,zh;q=0.9,en;q=0.8", chars: "[\\u3400-\\u9fff]" },
  ko: { locale: "ko-KR", accept: "ko-KR,ko;q=0.9,en;q=0.8", chars: "[\\uac00-\\ud7a3]" },
};
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";

const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(name); return i === -1 ? fallback : args.splice(i, 2)[1]; };
const force = args.includes("--force") && args.splice(args.indexOf("--force"), 1);
const lang = opt("--lang", "ja"), out = opt("--out"), only = opt("--only");
if (!args[0] || !out || !LANGS[lang]) { console.error("usage: measure-typography.mjs <sites.tsv> --lang ja|zh-TW|zh-CN|ko --out <dir> [--only id,id] [--force]"); process.exit(2); }
const L = LANGS[lang];
const sites = readFileSync(args[0], "utf8").split("\n").filter((l) => l.trim() && !l.startsWith("#")).map((l) => l.split("\t"))
  .filter(([id]) => !only || only.split(",").includes(id));
mkdirSync(path.join(out, "raw"), { recursive: true });

/** Runs in the page. Returns one record per element that directly holds text in the script. */
function readPage(charClass) {
  const re = new RegExp(charClass, "g");
  const rows = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const perElement = new Map();
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const count = (n.nodeValue.match(re) ?? []).length;
    if (count && n.parentElement) perElement.set(n.parentElement, (perElement.get(n.parentElement) ?? 0) + count);
  }
  for (const [el, chars] of perElement) {
    if (el.closest("script, style, noscript, template, [hidden], [aria-hidden='true']")) continue;
    const rect = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    if (!rect.width || !rect.height || cs.visibility === "hidden" || cs.display === "none" || Number(cs.opacity) === 0) continue;
    const size = parseFloat(cs.fontSize);
    const lh = cs.lineHeight === "normal" ? "normal" : Math.round((parseFloat(cs.lineHeight) / size) * 1000) / 1000;
    const ls = cs.letterSpacing === "normal" ? 0 : Math.round((parseFloat(cs.letterSpacing) / size) * 10000) / 10000;
    const heading = el.closest("h1, h2, h3");
    const langAttr = el.closest("[lang]")?.getAttribute("lang") ?? null;
    rows.push({
      tag: el.tagName.toLowerCase(), heading: heading ? heading.tagName.toLowerCase() : null,
      inP: Boolean(el.closest("p")), interactive: Boolean(el.closest("a, button, input, select, textarea, [role='button'], [role='tab'], [role='link']")),
      chars, lines: Math.max(1, Math.round(rect.height / (lh === "normal" ? size * 1.5 : lh * size))),
      family: cs.fontFamily, size, weight: cs.fontWeight, style: cs.fontStyle, lineHeight: lh, letterSpacing: ls,
      wordBreak: cs.wordBreak, lineBreak: cs.lineBreak, overflowWrap: cs.overflowWrap, textWrap: cs.textWrap ?? cs.getPropertyValue("text-wrap"),
      features: cs.fontFeatureSettings, kerning: cs.fontKerning,
      spacingTrim: cs.getPropertyValue("text-spacing-trim") || null, autospace: cs.getPropertyValue("text-autospace") || null,
      align: cs.textAlign, synthesis: cs.getPropertyValue("font-synthesis") || null, lang: langAttr,
    });
  }
  const faces = [...document.fonts].map((f) => ({ family: f.family.replace(/^["']|["']$/g, ""), weight: f.weight, style: f.style, status: f.status, unicodeRange: f.unicodeRange }));
  return { htmlLang: document.documentElement.getAttribute("lang"), title: document.title, rows, faces,
    supports: { spacingTrim: CSS.supports("text-spacing-trim", "trim-start"), autospace: CSS.supports("text-autospace", "no-autospace") } };
}

const browser = await chromium.launch({ headless: true, ...(process.env.OMD_CHROME_PATH ? { executablePath: process.env.OMD_CHROME_PATH } : { channel: "chrome" }), args: ["--disable-blink-features=AutomationControlled"] });
for (const [id, url] of sites) {
  const file = path.join(out, "raw", `${id}.json`);
  if (existsSync(file) && !force) { console.log(`skip ${id}`); continue; }
  const rec = { id, url, lang, measuredAt: new Date().toISOString(), viewport: "1440x1000", browser: `headless Chrome ${browser.version()}` };
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, userAgent: UA, locale: L.locale, extraHTTPHeaders: { "Accept-Language": L.accept } });
  const page = await context.newPage();
  try {
    const res = await page.goto(url, { waitUntil: "load", timeout: 45000 });
    rec.status = res?.status() ?? null; rec.finalUrl = page.url();
    await page.waitForTimeout(4000);
    await page.evaluate(() => document.fonts.ready).catch(() => {});
    Object.assign(rec, await page.evaluate(readPage, L.chars));
    rec.chars = rec.rows.reduce((a, r) => a + r.chars, 0);
    rec.readable = (rec.status ?? 0) < 400 && rec.chars >= 50;
  } catch (e) {
    rec.error = String(e.message ?? e).split("\n")[0]; rec.readable = false;
  }
  await context.close();
  writeFileSync(file, JSON.stringify(rec) + "\n");
  console.log(`${rec.readable ? "ok  " : "UNREADABLE"} ${id} status ${rec.status ?? "-"} elements ${rec.rows?.length ?? 0} chars ${rec.chars ?? 0}${rec.error ? " · " + rec.error : ""}`);
}
await browser.close();
