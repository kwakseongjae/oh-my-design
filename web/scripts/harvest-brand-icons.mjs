// First-party brand icons for the archive cards and the item hero (2026-11-04; owner screenshot:
// Hua Nan Bank, Mastercard and DOCOMO SMTB Net Bank cards blank). Genuine or absent (AGENTS.md hard
// rules; the policy record is the header of src/app/(en)/design-systems/archive-rows.server.ts).
//
// For every registry reference without an official SVG (data/brand-logos.json) and not risk_tier
// "high", fetch the brand's own homepage (registry `homepage`) once, as a browser would, and collect
// only the icons that page itself declares:
//   <link rel="icon" | "shortcut icon" | "apple-touch-icon" | "apple-touch-icon-precomposed">,
//   the web app manifest's `icons` (resolved against the manifest URL; "monochrome" skipped),
//   then the conventional /apple-touch-icon.png and /favicon.ico on the final page's own origin.
// Never Simple Icons, never a favicon service (Google s2, DuckDuckGo…), never a CMS/platform default,
// never an inline data: URI, never Safari's mask-icon (a one-colour silhouette for tinting).
// Each candidate is validated by its bytes, not its status or Content-Type (SPA catch-alls answer
// 200 HTML for /favicon.ico): PNG / JPEG / WebP / GIF / AVIF via sharp, ICO via the directory reader
// below (PNG frames kept byte for byte, BMP frames — 32/24-bit or 1/4/8-bit palette — converted to
// PNG losslessly), SVG as text with
// script/handler/external-reference checks. Kept: an SVG, else the largest raster whose short side
// is >= 64px; near-square only (aspect <= 1.25); visible on the white tile; not animated. A raster
// over 256px is scaled down to 256 (lanczos3, PNG) — the hero tile is 44px, so 256 covers 3x and
// keeps the repository light; the record keeps the source size.
//
// Polite: at most 6 sites at a time, one request at a time per site, a timeout on every request,
// one retry on a network error or 5xx, none on 401/403/406/429/451. A bot wall (those statuses or a
// challenge page) is recorded as blocked and left alone — no header games, no browser fallback.
//
//   node --no-warnings scripts/harvest-brand-icons.mjs [--only id,id] [--fresh] [--report <file.jsonl>]
//   node --no-warnings scripts/harvest-brand-icons.mjs --compile [--report <file.jsonl>]
//
// The harvest appends one JSON line per reference to the report (resumable: ids already there are
// skipped unless --fresh or --only), writes the chosen file to public/logos/icons/<id>.<ext>, and
// --compile (also run at the end of a harvest) rebuilds src/data/brand-icons.json from the report,
// applies MANUAL_REJECT, deletes orphaned files and writes <report>.summary.json listing every
// reference: chosen / none / rejected / blocked / error. The report is a local working file (keep it
// outside the repo; artifacts/README.md lists the registered local trees).
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const require = createRequire(new URL("../package.json", import.meta.url));
const sharp = require("sharp");

const WEB = new URL("..", import.meta.url).pathname;
const OUT_DIR = path.join(WEB, "public/logos/icons");
const DATA = path.join(WEB, "src/data/brand-icons.json");
const TODAY = new Date().toISOString().slice(0, 10);

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const REPORT = opt("--report") ?? path.join(os.tmpdir(), `omd-brand-icons-${TODAY}.jsonl`);
const ONLY = opt("--only")?.split(",").map((s) => s.trim()).filter(Boolean);

/**
 * Chosen icons removed after looking at the contact sheet (not the brand's mark). Applied at
 * --compile; the reason is the record of why the card stays text only.
 */
const MANUAL_REJECT = {
  // 2026-11-04 contact-sheet review.
  queenit:
    "the registry homepage is the operator's recruiting site (rapportlabs.kr, hosted by Ninehire); its icon is the Rapport Labs wordmark, not Queenit's mark. The registry's own static.queenit.kr app icon stays.",
  supertone:
    "supertone.ai now redirects to antinodeaudio.com; the icon there is Antinode's Webflow webclip, and nothing in the reference ties Antinode to Supertone.",
  triple:
    "triple.guide now redirects to nol.yanolja.com; the icon there is NOL (Yanolja), a different service's mark, not Triple's.",
  // 2026-11-04, owner: hide.
  kintone:
    "kintone is a Cybozu product, and Cybozu's logo page (cybozu.co.jp/logotypes/) puts the kintone logo under the same application-and-review rule as Cybozu's own (risk_tier high). archive-rows.server.ts UNDER_HIGH_RISK hides its registry favicon too.",
};

/**
 * Pages to read instead of the registry homepage, when that homepage is one of the brand's
 * sub-brands and the reference itself names the main site. url → the page; why → the record.
 */
const PAGE_OVERRIDE = {
  // 2026-11-04 contact-sheet review.
  ncsoft: {
    url: "https://www.nc.com/",
    why: "the registry homepage (about.ncsoft.com) declares the NC PLAY media icon; the reference names www.nc.com, where ncsoft.com now lands, as NC's main site, and that page declares the NC mark.",
  },
};

/** Byte-identical files seen on unrelated sites: platform defaults, not a brand's mark. sha256 → label. */
const KNOWN_GENERIC = {};

/** URLs that are a favicon service or a platform's default icon, never a brand's own file. */
const GENERIC_URL = [
  [/google\.com\/s2\/favicons|gstatic\.com\/favicon|t\d\.gstatic\.com\/faviconV2|icons\.duckduckgo\.com|icon\.horse|besticon|faviconkit|favicongrabber/i, "a third-party favicon service"],
  [/(^|\.)wix\.com\/favicon|static\.parastorage\.com\/client\/pfavico/i, "Wix default icon"],
  [/assets\.squarespace\.com\/universal\/default-favicon/i, "Squarespace default icon"],
  [/s\.w\.org\/|wp-includes\/images\/w-logo/i, "WordPress default icon"],
  [/website-files\.com\/img\/(favicon|webclip)|webflow\.com\/img\/(favicon|webclip)/i, "Webflow default icon"],
  [/framerusercontent\.com\/sites\/icons\/default/i, "Framer default icon"],
  [/\/vite\.svg(\?|$)/i, "Vite default icon"],
];

/* ─────────── registry ─────────── */

const { REGISTRY } = await import(path.join(WEB, "src/data/registry.generated.ts"));
const LOGOS = JSON.parse(fs.readFileSync(path.join(WEB, "src/data/brand-logos.json"), "utf8")).records;
const LOGO_BY_ID = new Map(LOGOS.map((r) => [r.id, r]));
// The same test as archive-rows.server.ts svgLogo(): a variant that cites a source and a license.
const hasOfficialSvg = (id) => Object.values(LOGO_BY_ID.get(id)?.variants ?? {}).some((v) => v.source && v.license);
const isHigh = (id) => LOGO_BY_ID.get(id)?.risk_tier === "high";
const TARGETS = REGISTRY.filter((r) => !hasOfficialSvg(r.id) && !isHigh(r.id));

/* ─────────── http ─────────── */

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";
const LANG = { KR: "ko-KR,ko;q=0.9,en;q=0.8", JP: "ja-JP,ja;q=0.9,en;q=0.8", TW: "zh-TW,zh;q=0.9,en;q=0.8", HK: "zh-HK,zh;q=0.9,en;q=0.8", CN: "zh-CN,zh;q=0.9,en;q=0.8" };
const NO_RETRY = new Set([401, 403, 406, 429, 451]);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function readCapped(res, max) {
  const reader = res.body?.getReader();
  if (!reader) return Buffer.alloc(0);
  const chunks = [];
  let n = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    n += value.length;
    if (n > max) {
      await reader.cancel().catch(() => {});
      return null;
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks.map((c) => Buffer.from(c)));
}

async function get(url, { accept, lang, referer, timeout, max }) {
  let last;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url, {
        redirect: "follow",
        signal: AbortSignal.timeout(timeout),
        headers: {
          "user-agent": UA,
          accept,
          "accept-language": lang ?? "en-US,en;q=0.9",
          ...(referer ? { referer } : {}),
        },
      });
      if (res.status >= 500 && attempt === 0) {
        await res.body?.cancel().catch(() => {});
        last = { status: res.status, url: res.url };
        await sleep(1500);
        continue;
      }
      const buf = await readCapped(res, max);
      return { status: res.status, url: res.url, type: res.headers.get("content-type") ?? "", buf };
    } catch (e) {
      last = { error: e?.cause?.code ?? e?.name ?? String(e) };
      if (attempt === 0) await sleep(1500);
    }
  }
  return last;
}

/* ─────────── html ─────────── */

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", "#39": "'", "#x2F": "/", "#x2f": "/", "#47": "/" };
const decodeEntities = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (ENTITIES[e]) return ENTITIES[e];
    if (/^#x/i.test(e)) return String.fromCodePoint(parseInt(e.slice(2), 16));
    if (/^#\d/.test(e)) return String.fromCodePoint(parseInt(e.slice(1), 10));
    return m;
  });

function attrs(tag) {
  const out = {};
  const body = tag.replace(/^<[a-z]+/i, "").replace(/\/?>$/, "");
  for (const m of body.matchAll(/([^\s=<>/"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    out[m[1].toLowerCase()] = decodeEntities(m[2] ?? m[3] ?? m[4] ?? "").trim();
  }
  return out;
}

/** Challenge / WAF interstitials. Only their titles and resource names, not scripts that normal pages also carry. */
const CHALLENGE = /<title>\s*(Just a moment\.\.\.|Attention Required! \| Cloudflare|Access Denied|Pardon Our Interruption|Request Rejected|Robot Check)\s*<\/title>|_Incapsula_Resource|px-captcha|geo\.captcha-delivery\.com|awswaf-captcha|The requested URL was rejected/i;

function parsePage(html, pageUrl) {
  const clean = html.replace(/<!--[\s\S]*?-->/g, "");
  let base = pageUrl;
  const baseTag = clean.match(/<base\b[^>]*>/i);
  if (baseTag) {
    const href = attrs(baseTag[0]).href;
    if (href) try { base = new URL(href, pageUrl).href; } catch { /* keep page url */ }
  }
  const icons = [];
  let manifest = null;
  for (const m of clean.matchAll(/<link\b[^>]*>/gi)) {
    const a = attrs(m[0]);
    const rel = (a.rel ?? "").toLowerCase().split(/\s+/).filter(Boolean);
    if (!a.href) continue;
    let url;
    try { url = new URL(a.href, base).href; } catch { continue; }
    if (rel.includes("manifest")) manifest ??= url;
    const via = rel.includes("apple-touch-icon") || rel.includes("apple-touch-icon-precomposed") ? "apple-touch-icon" : rel.includes("icon") ? "icon" : null;
    if (via) icons.push({ url, via, sizes: a.sizes ?? "", type: a.type ?? "" });
  }
  const refresh = clean.match(/<meta\b[^>]*http-equiv\s*=\s*["']?refresh[^>]*>/i);
  let refreshTo = null;
  if (refresh) {
    const c = attrs(refresh[0]).content ?? "";
    const u = c.match(/url\s*=\s*['"]?([^'";]+)/i)?.[1];
    if (u) try { refreshTo = new URL(u.trim(), base).href; } catch { /* ignore */ }
  }
  return { icons, manifest, refreshTo };
}

/* ─────────── image decoding ─────────── */

function sniff(buf) {
  if (!buf || buf.length < 12) return null;
  if (buf[0] === 0x89 && buf.toString("latin1", 1, 4) === "PNG") return "png";
  if (buf[0] === 0xff && buf[1] === 0xd8) return "jpeg";
  if (buf.toString("latin1", 0, 4) === "RIFF" && buf.toString("latin1", 8, 12) === "WEBP") return "webp";
  if (buf.toString("latin1", 0, 3) === "GIF") return "gif";
  if (buf.toString("latin1", 4, 12) === "ftypavif") return "avif";
  if (buf.readUInt16LE(0) === 0 && buf.readUInt16LE(2) === 1) return "ico";
  const head = buf.toString("utf8", 0, Math.min(buf.length, 2048)).replace(/^﻿/, "").trimStart();
  if (/^(<\?xml[\s\S]*?\?>\s*)?(<!--[\s\S]*?-->\s*)*(<!DOCTYPE svg[^>]*>\s*)?<svg[\s>]/i.test(head)) return "svg";
  return null;
}

/**
 * One BMP (DIB) frame of an ICO decoded to RGBA, losslessly: 32-bit BGRA, 24-bit BGR, or a 1/4/8-bit
 * palette; rows are stored bottom-up and padded to 4 bytes, followed by a 1-bit AND (transparency) mask.
 */
function dibToRgba(data) {
  const hdr = data.readUInt32LE(0);
  const w = data.readInt32LE(4);
  const h = Math.abs(data.readInt32LE(8)) / 2; // XOR image + AND mask
  const bpp = data.readUInt16LE(14);
  if (hdr < 40 || w <= 0 || h <= 0 || ![1, 4, 8, 24, 32].includes(bpp)) return { w, h, bpp, rgba: null };
  const colours = bpp <= 8 ? data.readUInt32LE(32) || 1 << bpp : 0;
  const pixels = hdr + colours * 4;
  const row = ((w * bpp + 31) >> 5) << 2;
  const maskRow = ((w + 31) >> 5) << 2;
  const mask = pixels + row * h;
  if (mask > data.length) return { w, h, bpp, rgba: null };
  const hasMask = mask + maskRow * h <= data.length;
  const rgba = Buffer.alloc(w * h * 4);
  let alphaSeen = false;
  for (let y = 0; y < h; y++) {
    const src = pixels + (h - 1 - y) * row;
    for (let x = 0; x < w; x++) {
      const d = (y * w + x) * 4;
      let b, g, r, a = 255;
      if (bpp === 32 || bpp === 24) {
        const s = src + x * (bpp / 8);
        [b, g, r] = [data[s], data[s + 1], data[s + 2]];
        if (bpp === 32) {
          a = data[s + 3];
          if (a) alphaSeen = true;
        }
      } else {
        const bit = x * bpp;
        const idx = (data[src + (bit >> 3)] >> (8 - bpp - (bit & 7))) & ((1 << bpp) - 1);
        const p = hdr + idx * 4;
        [b, g, r] = [data[p], data[p + 1], data[p + 2]];
      }
      rgba[d] = r;
      rgba[d + 1] = g;
      rgba[d + 2] = b;
      rgba[d + 3] = a;
    }
  }
  // The AND mask carries transparency unless a 32-bit frame already has a real alpha channel.
  if (hasMask && !(bpp === 32 && alphaSeen)) {
    for (let y = 0; y < h; y++) {
      const src = mask + (h - 1 - y) * maskRow;
      for (let x = 0; x < w; x++) if ((data[src + (x >> 3)] >> (7 - (x & 7))) & 1) rgba[(y * w + x) * 4 + 3] = 0;
    }
  }
  return { w, h, bpp, rgba };
}

/** The frames of an ICO file: PNG frames as their own bytes, BMP frames decoded to RGBA. */
function icoFrames(buf) {
  const n = buf.readUInt16LE(4);
  const frames = [];
  for (let i = 0; i < n; i++) {
    const e = 6 + 16 * i;
    if (e + 16 > buf.length) break;
    const size = buf.readUInt32LE(e + 8);
    const off = buf.readUInt32LE(e + 12);
    if (off + size > buf.length || size < 40) continue;
    const data = buf.subarray(off, off + size);
    if (data[0] === 0x89 && data.toString("latin1", 1, 4) === "PNG") {
      frames.push({ kind: "png", data });
      continue;
    }
    const dib = dibToRgba(data);
    frames.push(dib.rgba ? { kind: "bmp", ...dib } : { kind: "bmp-unsupported", w: dib.w, h: dib.h, bpp: dib.bpp });
  }
  return frames;
}

const SVG_UNSAFE = [
  [/<script\b/i, "svg contains a script"],
  [/\son[a-z]+\s*=/i, "svg contains an event handler"],
  [/javascript:/i, "svg contains a javascript: URL"],
  [/<(foreignObject|iframe|embed|object)\b/i, "svg embeds foreign content"],
  [/(?:xlink:)?href\s*=\s*["']\s*(?:https?:)?\/\//i, "svg loads an external resource"],
  [/@import/i, "svg imports a stylesheet"],
  // Browsers evaluate these inside an <img> against the visitor's OS setting; several marks turn
  // near-white there (bolt, mercury, superhuman, 2026-11-04), and the card tile is always white.
  [/prefers-color-scheme|light-dark\(/i, "svg changes colour with the visitor's colour scheme (the tile is always white)"],
];

/** Fraction of a 64px render, on the white card tile, that differs from white and from its own dominant colour. */
async function visibility(input, sharpOpts) {
  const { data } = await sharp(input, sharpOpts)
    .resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .flatten({ background: "#ffffff" })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const px = data.length / 3;
  const counts = new Map();
  let notWhite = 0;
  for (let i = 0; i < data.length; i += 3) {
    if (Math.max(255 - data[i], 255 - data[i + 1], 255 - data[i + 2]) > 24) notWhite++;
    const k = ((data[i] >> 4) << 8) | ((data[i + 1] >> 4) << 4) | (data[i + 2] >> 4);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  const dominant = Math.max(...counts.values());
  return { inked: notWhite / px, varied: 1 - dominant / px };
}

/**
 * Decode one downloaded candidate. Returns { ok, format, width, height, bytes, ext, sha256 } or { ok: false, reason }.
 * `bytes` is what would be stored (the source bytes unless an ICO frame or a >256px raster).
 */
async function decode(buf) {
  const format = sniff(buf);
  const sha256 = buf ? createHash("sha256").update(buf).digest("hex") : null;
  if (!format) return { ok: false, reason: "not an image (bytes are not PNG/JPEG/WebP/GIF/AVIF/ICO/SVG)", sha256 };
  if (KNOWN_GENERIC[sha256]) return { ok: false, reason: `platform default: ${KNOWN_GENERIC[sha256]}`, sha256 };
  try {
    if (format === "svg") {
      const text = buf.toString("utf8");
      if (buf.length > 200_000) return { ok: false, reason: "svg over 200 KB", sha256 };
      for (const [re, why] of SVG_UNSAFE) if (re.test(text)) return { ok: false, reason: why, sha256 };
      const meta = await sharp(buf).metadata();
      const { width, height } = meta;
      if (!width || !height) return { ok: false, reason: "svg without a size", sha256 };
      if (Math.max(width, height) / Math.min(width, height) > 1.25) return { ok: false, reason: `not square (${width}x${height})`, sha256 };
      const vis = await visibility(buf, { density: Math.max(72, (72 * 64) / Math.min(width, height)) });
      if (vis.inked < 0.02) return { ok: false, reason: "invisible on the white tile (white or empty artwork)", sha256 };
      if (vis.varied < 0.01) return { ok: false, reason: "a flat fill with no mark", sha256 };
      return { ok: true, format, width, height, bytes: buf, ext: "svg", sha256 };
    }
    let raster = buf;
    let input = buf;
    let rawOpts;
    let srcFormat = format;
    if (format === "ico") {
      const frames = icoFrames(buf);
      const sized = [];
      for (const f of frames) {
        if (f.kind === "png") {
          const m = await sharp(f.data).metadata();
          sized.push({ ...f, w: m.width, h: m.height });
        } else if (f.kind === "bmp") sized.push(f);
      }
      sized.sort((a, b) => Math.min(b.w, b.h) - Math.min(a.w, a.h));
      const best = sized[0];
      if (!best) return { ok: false, reason: frames.length ? "ico with only unreadable frames" : "ico without frames", sha256 };
      if (best.kind === "png") {
        raster = best.data;
        input = best.data;
        srcFormat = "ico(png frame)";
      } else {
        rawOpts = { raw: { width: best.w, height: best.h, channels: 4 } };
        input = best.rgba;
        raster = await sharp(best.rgba, rawOpts).png().toBuffer();
        srcFormat = `ico(${best.bpp}-bit bmp frame)`;
      }
    }
    const meta = await sharp(input, rawOpts).metadata();
    const width = meta.width, height = meta.height;
    if (!width || !height) return { ok: false, reason: "undecodable", sha256 };
    if ((meta.pages ?? 1) > 1) return { ok: false, reason: "animated", sha256 };
    if (Math.min(width, height) < 64) return { ok: false, reason: `under 64px (${width}x${height})`, sha256, width, height };
    if (Math.max(width, height) / Math.min(width, height) > 1.25) return { ok: false, reason: `not square (${width}x${height})`, sha256 };
    const vis = await visibility(input, rawOpts);
    if (vis.inked < 0.02) return { ok: false, reason: "invisible on the white tile (white or empty artwork)", sha256 };
    if (vis.varied < 0.01) return { ok: false, reason: "a flat fill with no mark", sha256 };
    const out = { ok: true, format: srcFormat, width, height, sha256 };
    if (Math.max(width, height) > 256) {
      const bytes = await sharp(input, rawOpts).resize(256, 256, { fit: "inside", kernel: "lanczos3" }).png({ compressionLevel: 9 }).toBuffer();
      const m = await sharp(bytes).metadata();
      return { ...out, bytes, ext: "png", width: m.width, height: m.height, source_width: width, source_height: height };
    }
    const ext = format === "ico" ? "png" : format === "jpeg" ? "jpg" : format;
    return { ...out, bytes: raster, ext };
  } catch (e) {
    return { ok: false, reason: `undecodable (${String(e?.message ?? e).slice(0, 80)})`, sha256 };
  }
}

/* ─────────── one reference ─────────── */

const SLD = new Set(["co", "com", "ne", "or", "go", "ac", "net", "org", "gov", "edu", "gr", "ed", "lg"]);
export function registrable(host) {
  const p = host.toLowerCase().replace(/\.$/, "").split(".");
  if (p.length >= 3 && p[p.length - 1].length === 2 && SLD.has(p[p.length - 2])) return p.slice(-3).join(".");
  return p.slice(-2).join(".");
}

const VIA_RANK = { icon: 0, "apple-touch-icon": 1, manifest: 2, conventional: 3 };
const PAGE_MAX = 4_000_000;
const ASSET_MAX = 2_000_000;

async function harvest(r) {
  const lang = LANG[r.country];
  const homepage = PAGE_OVERRIDE[r.id]?.url ?? r.homepage;
  const rec = { id: r.id, homepage, captured: TODAY, candidates: [] };
  if (PAGE_OVERRIDE[r.id]) rec.page_override = PAGE_OVERRIDE[r.id].why;
  let page = await get(homepage, { accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8", lang, timeout: 15_000, max: PAGE_MAX });
  if (!page || page.error) return { ...rec, status: "error", reason: `homepage: ${page?.error ?? "no response"}` };
  if (NO_RETRY.has(page.status)) return { ...rec, status: "blocked", reason: `homepage answered HTTP ${page.status}`, page_url: page.url };
  if (page.status >= 400) return { ...rec, status: "error", reason: `homepage answered HTTP ${page.status}`, page_url: page.url };
  if (!page.buf) return { ...rec, status: "error", reason: "homepage over 4 MB", page_url: page.url };
  let html = page.buf.toString("utf8");
  if (CHALLENGE.test(html) && page.buf.length < 200_000) return { ...rec, status: "blocked", reason: "homepage is a bot-challenge page", page_url: page.url };
  let parsed = parsePage(html, page.url);
  // A meta-refresh landing page (common on older bank sites) is followed once, as a browser would.
  if (!parsed.icons.length && !parsed.manifest && parsed.refreshTo && parsed.refreshTo !== page.url) {
    const next = await get(parsed.refreshTo, { accept: "text/html,*/*;q=0.8", lang, referer: page.url, timeout: 15_000, max: PAGE_MAX });
    if (next && !next.error && next.status < 400 && next.buf) {
      page = next;
      html = next.buf.toString("utf8");
      if (CHALLENGE.test(html) && next.buf.length < 200_000) return { ...rec, status: "blocked", reason: "meta-refresh target is a bot-challenge page", page_url: next.url };
      parsed = parsePage(html, next.url);
    }
  }
  rec.page_url = page.url;
  const pageHost = new URL(page.url).host;
  const homeHost = new URL(homepage).host;
  if (registrable(pageHost) !== registrable(homeHost)) rec.domain_changed = `${homeHost} -> ${pageHost}`;

  const cands = [...parsed.icons];
  if (parsed.manifest) {
    rec.manifest = parsed.manifest;
    const mf = await get(parsed.manifest, { accept: "application/manifest+json,application/json;q=0.9,*/*;q=0.5", lang, referer: page.url, timeout: 10_000, max: 500_000 });
    if (mf && !mf.error && mf.status === 200 && mf.buf) {
      try {
        const json = JSON.parse(mf.buf.toString("utf8").replace(/^﻿/, ""));
        for (const ic of Array.isArray(json.icons) ? json.icons : []) {
          if (!ic?.src) continue;
          const purpose = String(ic.purpose ?? "any").toLowerCase().split(/\s+/);
          if (purpose.includes("monochrome") && !purpose.includes("any")) continue;
          try {
            cands.push({ url: new URL(ic.src, mf.url).href, via: "manifest", sizes: ic.sizes ?? "", type: ic.type ?? "", maskable: purpose.includes("maskable") && !purpose.includes("any") });
          } catch { /* bad src */ }
        }
      } catch {
        rec.manifest_error = "manifest is not JSON";
      }
    } else rec.manifest_error = mf?.error ?? `HTTP ${mf?.status}`;
  }
  const origin = new URL(page.url).origin;
  cands.push({ url: origin + "/apple-touch-icon.png", via: "conventional" }, { url: origin + "/favicon.ico", via: "conventional" });

  const seen = new Set();
  const valid = [];
  for (const c of cands) {
    if (seen.has(c.url)) continue;
    seen.add(c.url);
    const row = { url: c.url, via: c.via, ...(c.sizes ? { sizes: c.sizes } : {}), ...(c.maskable ? { maskable: true } : {}) };
    rec.candidates.push(row);
    if (rec.candidates.length > 14) {
      row.result = "skipped: candidate cap (14)";
      continue;
    }
    if (/^data:/i.test(c.url)) {
      row.result = "skipped: inline data: URI";
      continue;
    }
    if (!/^https?:/i.test(c.url)) {
      row.result = "skipped: not http(s)";
      continue;
    }
    const generic = GENERIC_URL.find(([re]) => re.test(c.url));
    if (generic) {
      row.result = `reject: ${generic[1]}`;
      continue;
    }
    const res = await get(c.url, { accept: "image/avif,image/webp,image/svg+xml,image/*,*/*;q=0.8", lang, referer: page.url, timeout: 10_000, max: ASSET_MAX });
    if (!res || res.error) {
      row.result = `fetch: ${res?.error ?? "no response"}`;
      continue;
    }
    row.final_url = res.url !== c.url ? res.url : undefined;
    if (res.status !== 200) {
      row.result = `fetch: HTTP ${res.status}`;
      continue;
    }
    if (!res.buf) {
      row.result = "reject: over 2 MB";
      continue;
    }
    const d = await decode(res.buf);
    row.sha256 = d.sha256;
    if (!d.ok) {
      row.result = `reject: ${d.reason}`;
      if (d.width) Object.assign(row, { width: d.width, height: d.height });
      continue;
    }
    Object.assign(row, { result: "ok", format: d.format, width: d.source_width ?? d.width, height: d.source_height ?? d.height });
    valid.push({ ...c, ...d, url: res.url });
  }

  if (!valid.length) {
    const fetched = rec.candidates.filter((c) => c.result && !/^fetch:|^skipped:/.test(c.result));
    return { ...rec, status: fetched.length ? "rejected" : "none", reason: fetched.length ? "every icon found failed a check" : "no icon declared or at the conventional paths" };
  }
  valid.sort(
    (a, b) =>
      (b.ext === "svg") - (a.ext === "svg") ||
      !!a.maskable - !!b.maskable ||
      Math.min(b.source_width ?? b.width, b.source_height ?? b.height) - Math.min(a.source_width ?? a.width, a.source_height ?? a.height) ||
      VIA_RANK[a.via] - VIA_RANK[b.via],
  );
  const best = valid[0];
  const file = `logos/icons/${r.id}.${best.ext}`;
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const f of fs.readdirSync(OUT_DIR)) if (f.startsWith(r.id + ".") && path.join("logos/icons", f) !== file) fs.rmSync(path.join(OUT_DIR, f));
  fs.writeFileSync(path.join(WEB, "public", file), best.bytes);
  rec.status = "chosen";
  rec.chosen = {
    id: r.id,
    file,
    source_url: best.url,
    page_url: page.url,
    host: new URL(best.url).host,
    declared: best.via,
    width: best.width,
    height: best.height,
    format: best.format,
    ...(best.source_width ? { source_width: best.source_width, source_height: best.source_height } : {}),
    sha256: best.sha256,
    captured: TODAY,
  };
  return rec;
}

/* ─────────── report → data ─────────── */

function readReport() {
  if (!fs.existsSync(REPORT)) return new Map();
  const out = new Map();
  for (const line of fs.readFileSync(REPORT, "utf8").split("\n")) {
    if (!line.trim()) continue;
    try {
      const j = JSON.parse(line);
      out.set(j.id, j);
    } catch { /* torn line */ }
  }
  return out;
}

function compile() {
  const rows = readReport();
  const targetIds = new Set(TARGETS.map((r) => r.id));
  const records = [];
  const summary = { report: REPORT, captured: TODAY, targets: TARGETS.length, counts: {}, references: [] };
  const bump = (k) => (summary.counts[k] = (summary.counts[k] ?? 0) + 1);
  for (const r of TARGETS) {
    const row = rows.get(r.id);
    if (!row) {
      bump("not run");
      summary.references.push({ id: r.id, status: "not run" });
      continue;
    }
    if (row.status === "chosen" && MANUAL_REJECT[r.id]) {
      bump("removed after review");
      summary.references.push({ id: r.id, status: "removed after review", reason: MANUAL_REJECT[r.id], source_url: row.chosen.source_url });
      continue;
    }
    bump(row.status);
    summary.references.push({
      id: r.id,
      status: row.status,
      ...(row.reason ? { reason: row.reason } : {}),
      ...(row.page_url ? { page_url: row.page_url } : {}),
      ...(row.domain_changed ? { domain_changed: row.domain_changed } : {}),
      ...(row.chosen ? { source_url: row.chosen.source_url, size: `${row.chosen.width}x${row.chosen.height}`, format: row.chosen.format } : {}),
      ...(row.status === "rejected" ? { rejected: row.candidates.filter((c) => /^reject/.test(c.result ?? "")).map((c) => `${c.url} — ${c.result}`) } : {}),
    });
    if (row.status === "chosen") {
      const { sha256: _sha, ...keep } = row.chosen;
      records.push(keep);
    }
  }
  // Skipped targets: official SVG or risk_tier high — listed so the summary accounts for every reference.
  for (const r of REGISTRY) {
    if (targetIds.has(r.id)) continue;
    summary.references.push({ id: r.id, status: isHigh(r.id) ? "skipped: risk_tier high" : "skipped: official SVG" });
    bump(isHigh(r.id) ? "skipped: risk_tier high" : "skipped: official SVG");
  }
  records.sort((a, b) => a.id.localeCompare(b.id));
  const keepFiles = new Set(records.map((r) => path.basename(r.file)));
  if (fs.existsSync(OUT_DIR)) for (const f of fs.readdirSync(OUT_DIR)) if (!keepFiles.has(f)) fs.rmSync(path.join(OUT_DIR, f));
  const doc = {
    schema_version: 1,
    generated_at: TODAY,
    note:
      "Each brand's own icon, as its homepage declares it (link rel=icon / apple-touch-icon, the web app manifest, or /apple-touch-icon.png and /favicon.ico on the same origin), harvested by scripts/harvest-brand-icons.mjs. Stored at web/public/<file>. source_url is the file the page pointed at; host is where it was served from. Rasters over 256px were scaled to 256 (source_width/source_height keep the original). Never Simple Icons, a favicon service, a platform default or a redrawing; a reference without a record shows no logo.",
    count: records.length,
    records,
  };
  fs.writeFileSync(DATA, JSON.stringify(doc, null, 2) + "\n");
  const summaryPath = REPORT.replace(/\.jsonl$/, "") + ".summary.json";
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n");

  // Byte-identical icons shared by references on different registrable domains: review on the sheet.
  const byHash = new Map();
  for (const r of TARGETS) {
    const row = rows.get(r.id);
    if (row?.status !== "chosen" || MANUAL_REJECT[r.id]) continue;
    const list = byHash.get(row.chosen.sha256) ?? [];
    list.push(`${r.id} (${registrable(new URL(row.page_url).host)})`);
    byHash.set(row.chosen.sha256, list);
  }
  const shared = [...byHash.entries()].filter(([, v]) => v.length > 1);
  console.log(`brand-icons.json: ${records.length} records; counts ${JSON.stringify(summary.counts)}`);
  console.log(`summary: ${summaryPath}`);
  if (shared.length) console.log("identical files under several ids (check on the sheet):\n" + shared.map(([h, v]) => `  ${h.slice(0, 12)} ${v.join(", ")}`).join("\n"));
}

/* ─────────── main ─────────── */

if (flag("--compile")) {
  compile();
} else {
  const done = flag("--fresh") ? new Map() : readReport();
  if (flag("--fresh") && fs.existsSync(REPORT)) fs.rmSync(REPORT);
  const queue = TARGETS.filter((r) => (ONLY ? ONLY.includes(r.id) : !done.has(r.id)));
  console.log(`targets ${TARGETS.length}; to run ${queue.length}; report ${REPORT}`);
  let i = 0, finished = 0;
  const worker = async () => {
    while (i < queue.length) {
      const r = queue[i++];
      let row;
      try {
        row = await harvest(r);
      } catch (e) {
        row = { id: r.id, homepage: r.homepage, status: "error", reason: `harvester: ${String(e?.message ?? e).slice(0, 120)}`, captured: TODAY };
      }
      fs.appendFileSync(REPORT, JSON.stringify(row) + "\n");
      finished++;
      const tag = row.status === "chosen" ? `${row.chosen.declared} ${row.chosen.width}x${row.chosen.height} ${row.chosen.format}` : row.reason;
      console.log(`[${finished}/${queue.length}] ${r.id}: ${row.status} — ${tag}`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(6, queue.length) }, worker));
  compile();
}
