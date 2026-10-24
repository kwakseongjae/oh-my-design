#!/usr/bin/env node
/*
 * Renders the moa screens' four illustrations (src/components/hangul/moa-screen.tsx, the art slots in
 * moa.css) from scene.html: three.js primitives, no third-party models, textures or icons.
 *
 *   node scripts/moa-art/render.mjs [--out public/hangul/moa] [--size 192]
 *
 * Each picture is drawn at 4× its file size in headless Chromium with the GPU flags the hero posters
 * use (scripts/hero-posters.mjs), then downscaled with sharp (Lanczos) to a square WebP with alpha.
 * The CSS shows them at 40–64px, so 192px covers a 3× screen.
 */
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");
const sharp = require("sharp");

const HERE = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.resolve(HERE, "../..");
const THREE_DIR = path.join(WEB, "node_modules/three");
const arg = (k, d) => {
  const i = process.argv.indexOf(k);
  return i > -1 ? process.argv[i + 1] : d;
};
const OUT = path.resolve(WEB, arg("--out", "public/hangul/moa"));
const SIZE = Number(arg("--size", "192"));
const KINDS = ["gift", "sent", "chart", "offline"];
const TYPES = { ".html": "text/html", ".js": "text/javascript" };

const server = http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  const file = url === "/" ? path.join(HERE, "scene.html") : url.startsWith("/three/") ? path.join(THREE_DIR, url.slice(7)) : null;
  if (!file || !file.startsWith(url === "/" ? HERE : THREE_DIR) || !fs.existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[path.extname(file)] ?? "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch({ headless: true, channel: "chromium", args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"] });
try {
  const page = await browser.newPage();
  page.on("pageerror", (e) => console.error("page:", e.message));
  await page.goto(base);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });
  fs.mkdirSync(OUT, { recursive: true });
  for (const kind of KINDS) {
    const url = await page.evaluate(([k, s]) => window.renderArt(k, s), [kind, SIZE * 4]);
    const png = Buffer.from(url.split(",")[1], "base64");
    const file = path.join(OUT, `${kind}.webp`);
    await sharp(png).resize(SIZE, SIZE, { kernel: "lanczos3" }).webp({ quality: 90, alphaQuality: 100, effort: 6 }).toFile(file);
    console.log(path.relative(WEB, file), fs.statSync(file).size, "bytes");
  }
} finally {
  await browser.close();
  server.close();
}
