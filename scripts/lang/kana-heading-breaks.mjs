#!/usr/bin/env node
/**
 * Where the kana pages' headings break, at several viewport widths, in headless Chrome.
 *
 * Japanese has no spaces, so a heading can break inside a word. word-break: auto-phrase keeps phrases whole only in
 * Chrome and Edge, and its model splits some (トークンど / おり, measured 2026-11-27); the headings that wrapped badly
 * are listed in web/src/components/kana/parts.tsx (JA_KEEP) and set as inline blocks. Run this after rewording a
 * heading, and read the output: a line that ends inside a word needs its phrases added to JA_KEEP.
 *
 *   cd web && npx next dev -p 3417        # in another shell
 *   node scripts/lang/kana-heading-breaks.mjs [--base http://localhost:3417] [/ja/kana /ja/kana/rules …]
 *
 * Prints, per page and width, the horizontal overflow in px and every heading that wraps, its lines joined by " / ".
 * No window opens (headless), and nothing is written.
 */
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const require = createRequire(path.join(REPO, "web/"));
const { chromium } = require("playwright-core");

const args = process.argv.slice(2);
const at = args.indexOf("--base");
const base = at >= 0 ? args[at + 1] : "http://localhost:3417";
const pages = args.filter((a, i) => a.startsWith("/") && i !== at + 1);
const WIDTHS = [1440, 1024, 768, 430, 390, 360, 320];
const HEADINGS = "main h1, main h2, main h3, .km-row-h, .km-note-t";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const out = {};
for (const p of pages.length ? pages : ["/ja/kana"]) {
  for (const width of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(base + p, { waitUntil: "networkidle", timeout: 120000 });
    await page.evaluate(() => document.fonts.ready);
    out[`${p}@${width}`] = await page.evaluate((sel) => {
      // the text of each rendered line: a new line starts where a character's box moves down
      const lines = (el) => {
        const range = document.createRange();
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const found = [];
        let node, top = null, cur = "";
        while ((node = walker.nextNode())) {
          for (let i = 0; i < node.data.length; i++) {
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const box = range.getClientRects()[0];
            if (!box) continue;
            if (top !== null && Math.abs(box.top - top) > 4) { found.push(cur); cur = ""; }
            cur += node.data[i];
            top = box.top;
          }
        }
        if (cur) found.push(cur);
        return found;
      };
      const heads = [...document.querySelectorAll(sel)].filter((e) => e.getBoundingClientRect().width > 0);
      return {
        overflowX: document.documentElement.scrollWidth - innerWidth,
        wrapped: heads.map(lines).filter((l) => l.length > 1).map((l) => l.join(" / ")),
      };
    }, HEADINGS);
    await ctx.close();
  }
}
await browser.close();
console.log(JSON.stringify(out, null, 1));
