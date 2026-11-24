#!/usr/bin/env node
/**
 * Blog covers: one 1200x630 PNG per post and locale, which is both the card image on the blog home and
 * the post's og:image / twitter:image (web/src/lib/blog/metadata.ts picks it up when the file exists).
 *
 *   cd web && node scripts/blog-covers/render.mjs [slug ...]
 *
 * Each cover is the shared frame (frame.mjs: title top left, blog name bottom left, picture panel on
 * the right) around a picture from covers/<slug>.mjs, drawn from what that post measured or shows.
 * covers/_home.mjs is the blog home's cover. Output: public/blog-assets/<slug>/cover-<locale>.png and
 * public/blog-assets/cover-home-<locale>.png. Rendered in headless Chromium (playwright-core, already a
 * web dependency) at device scale 1; local files only, no network. The PNGs are committed.
 */
import { createRequire } from "node:module";
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve, extname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { coverPage, W, H } from "./frame.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const webRoot = resolve(here, "../..");
const require = createRequire(join(webRoot, "package.json"));
const { chromium } = require("playwright-core");

const ROUTES = {
  "/fonts/": join(webRoot, "public/fonts/"),
  "/styles/": join(webRoot, "src/styles/"),
  "/vendor/": join(webRoot, "src/vendor/"),
};
const TYPES = { ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".html": "text/html; charset=utf-8" };

const only = process.argv.slice(2);
const specs = [];
for (const file of readdirSync(join(here, "covers")).filter((f) => f.endsWith(".mjs")).sort()) {
  const spec = await import(pathToFileURL(join(here, "covers", file)).href);
  const id = spec.slug ?? file.replace(/\.mjs$/, "");
  if (only.length && !only.includes(id)) continue;
  specs.push({ id, ...spec });
}
if (only.length && specs.length !== only.length) throw new Error("unknown cover: " + only.filter((o) => !specs.some((s) => s.id === o)).join(", "));

const browser = await chromium.launch({ headless: true });
const written = [];
try {
  for (const spec of specs) {
    for (const locale of Object.keys(spec.titles)) {
      const html = coverPage({
        locale,
        title: spec.titles[locale],
        picture: spec.picture(locale, { webRoot }),
        pictureCss: spec.pictureCss ?? "",
        script: spec.script ?? "",
      });
      const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
      const errors = [];
      page.on("pageerror", (e) => errors.push(String(e)));
      page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
      await page.route("http://cover.local/**", async (route) => {
        const path = new URL(route.request().url()).pathname;
        if (path === "/") return route.fulfill({ status: 200, contentType: TYPES[".html"], body: html });
        const prefix = Object.keys(ROUTES).find((p) => path.startsWith(p));
        const file = prefix && join(ROUTES[prefix], decodeURIComponent(path.slice(prefix.length)));
        if (!file || !existsSync(file)) return route.fulfill({ status: 404, body: "" });
        return route.fulfill({ status: 200, contentType: TYPES[extname(file)] ?? "application/octet-stream", body: readFileSync(file) });
      });
      await page.goto("http://cover.local/", { waitUntil: "load" });
      await page.evaluate(() => window.__coverReady);
      await page.evaluate(() => window.__pictureReady ?? true);
      const missing = await page.evaluate(() => [...document.fonts].filter((f) => f.status === "error").length);
      if (errors.length || missing) throw new Error(spec.id + "/" + locale + ": " + (errors.join(" | ") || missing + " font faces failed"));
      const overflow = await page.evaluate(() => {
        const t = document.querySelector(".title").getBoundingClientRect();
        const n = document.querySelector(".name").getBoundingClientRect();
        return t.bottom > n.top - 24 ? "title runs into the blog name (" + Math.round(t.bottom) + "px)" : "";
      });
      if (overflow) throw new Error(spec.id + "/" + locale + ": " + overflow);
      const out = join(webRoot, spec.out ? spec.out(locale) : join("public/blog-assets", spec.id, "cover-" + locale + ".png"));
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, await page.screenshot({ type: "png" }));
      written.push(out.slice(webRoot.length + 1));
      await page.close();
    }
  }
} finally {
  await browser.close();
}
console.log(written.join("\n"));
