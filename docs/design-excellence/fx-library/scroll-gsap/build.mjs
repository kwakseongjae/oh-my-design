#!/usr/bin/env node
/** build.mjs — recipes/*.html 조각 + lib/*.min.js 인라인 → dist/*.html (단독 파일, 네트워크 0) */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..", "..", "..");
const ASSETS = pathToFileURL(join(ROOT, "test-v2/content-runs/aphrodite/higgsgen/assets") + "/").href;
const lib = (f) => readFileSync(join(HERE, "lib", f), "utf8");
const GSAP = lib("gsap315.min.js");
const ST = lib("ScrollTrigger315.min.js");
const LENIS = lib("lenis.min.js") + "\nwindow.Lenis = Lenis;";

const SHELL = (title, frag) => `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>
<style>
:root{--bg:#0b0b0c;--ink:#f2f2ef;--dim:#8b8b86;--accent:#c8ff2e;--r:14px}
*{box-sizing:border-box}html{scroll-behavior:auto}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.45 ui-sans-serif,system-ui,sans-serif;overflow-x:hidden}
img{display:block;width:100%;height:100%;object-fit:cover}
.fx{position:relative}.label{position:fixed;left:12px;top:12px;z-index:99;font:12px ui-monospace,monospace;color:var(--dim);background:#0009;padding:6px 9px;border-radius:8px}
.spacer{height:60vh;display:grid;place-items:center;color:var(--dim);font:12px ui-monospace,monospace}
</style>
<script>${GSAP}</script>
<script>${ST}</script>
<script>${LENIS}</script>
<script>
window.ASSETS=${JSON.stringify(ASSETS)};
window.IMG=(id)=>window.ASSETS+id+".png";
window.REDUCED=matchMedia("(prefers-reduced-motion: reduce)").matches;
</script>
</head><body><div class="label">${title}</div>
<div class="spacer">scroll ↓</div>
${frag}
<div class="spacer">end</div>
</body></html>`;

mkdirSync(join(HERE, "dist"), { recursive: true });
const files = readdirSync(join(HERE, "recipes")).filter((f) => f.endsWith(".html")).sort();
for (const f of files) {
  const frag = readFileSync(join(HERE, "recipes", f), "utf8");
  const out = SHELL(f.replace(/\.html$/, ""), frag);
  writeFileSync(join(HERE, "dist", f), out);
  console.log(`${f}  ${(out.length / 1024).toFixed(0)}KB`);
}
