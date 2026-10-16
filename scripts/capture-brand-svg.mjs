#!/usr/bin/env node
/**
 * capture-brand-svg — add one brand logo SVG to the gallery, from an OFFICIAL
 * source (direct .svg URL) or a submitted file. Deliberately simple: fetch →
 * sanitize → store → upsert the manifest. No Python, no scraping framework.
 *
 * Usage:
 *   node scripts/capture-brand-svg.mjs --id toss --name "Toss" --country KR \
 *     --url https://.../logo.svg            # or  --file ./toss.svg \
 *     --source "official-press-kit" --source-url https://brand.toss.im \
 *     --license brand-asset-official [--guidelines <url>] [--usage "변형 금지"] \
 *     [--risk med] [--submitted-by handle]
 *
 * Provenance is mandatory: every record carries source + license + source-url so
 * the gallery can show where each SVG came from and under what terms.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MANIFEST = join(ROOT, "web", "src", "data", "brand-svg.json");
const ASSET_DIR = join(ROOT, "web", "public", "brand-svg");

function parseArgs(argv) {
  const a = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith("--")) { a[argv[i].slice(2)] = argv[i + 1]?.startsWith("--") ? true : argv[++i]; }
  }
  return a;
}
function die(msg) { console.error(`✗ ${msg}`); process.exit(1); }

/** Strip anything that makes an SVG unsafe to inline/serve. */
function sanitizeSvg(svg) {
  let s = svg.replace(/^﻿/, "").trim();
  if (!/^(<\?xml|<svg)/i.test(s)) die("not an SVG (must start with <svg or <?xml)");
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "");
  s = s.replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, ""); // event handlers
  s = s.replace(/(href|xlink:href)\s*=\s*("javascript:[^"]*"|'javascript:[^']*')/gi, ""); // js: hrefs
  if (/<script|javascript:/i.test(s)) die("SVG still contains script/javascript after sanitize — rejected");
  return s;
}

/** Resolve a Wikimedia Commons file → direct URL + license + attribution. */
async function resolveWikimedia(file) {
  const title = file.startsWith("File:") ? file : `File:${file}`;
  const api = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
    action: "query", titles: title, prop: "imageinfo", iiprop: "url|extmetadata", format: "json",
  });
  const res = await fetch(api, { headers: { "User-Agent": "omd-brand-svg/1.0 (oh-my-design)" } });
  if (!res.ok) die(`Commons API → HTTP ${res.status}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  if (!info?.url) die(`Commons file not found: ${title}`);
  const meta = info.extmetadata || {};
  const strip = (h) => (h || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  const licRaw = meta.LicenseShortName?.value || "unknown";
  const licMap = { "Public domain": "PD", "CC0": "CC0-1.0" };
  const license = licMap[licRaw] || licRaw.replace(/\s+/g, "-");
  return {
    url: info.url,
    source: "Wikimedia Commons",
    sourceUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`,
    license,
    licenseUrl: meta.LicenseUrl?.value || `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`,
    attribution: strip(meta.Artist?.value) || "Wikimedia Commons",
    usage: `${licRaw} — trademark belongs to the brand owner; identification use only.`,
  };
}

async function main() {
  const a = parseArgs(process.argv);
  if (!a.id) die("missing --id");

  // Wikimedia mode auto-derives source/license/attribution.
  let wm = null;
  if (a.wikimedia) {
    wm = await resolveWikimedia(a.wikimedia);
    a.url = wm.url;
    a.source = a.source || wm.source;
    a["source-url"] = a["source-url"] || wm.sourceUrl;
    a.license = a.license || wm.license;
    a.guidelines = a.guidelines || wm.licenseUrl;
    a.usage = a.usage || wm.usage;
    a.risk = a.risk || (wm.license === "PD" ? "low" : "med");
  }

  for (const k of ["source", "source-url", "license"]) if (!a[k]) die(`missing --${k}`);
  if (!a.url && !a.file) die("provide --url <svg-url>, --file <path>, or --wikimedia <File:Name>");

  let raw;
  if (a.url) {
    const res = await fetch(a.url, { headers: { "User-Agent": "Mozilla/5.0 omd-brand-svg" } });
    if (!res.ok) die(`fetch ${a.url} → HTTP ${res.status}`);
    raw = await res.text();
  } else {
    raw = readFileSync(a.file, "utf-8");
  }
  const svg = sanitizeSvg(raw);
  const bytes = Buffer.byteLength(svg, "utf-8");
  if (bytes > 50_000) console.warn(`⚠ ${(bytes / 1024).toFixed(1)}kb — large; consider optimizing (svgl caps at 21kb).`);

  const variant = a.variant || "wordmark";
  if (!["symbol", "wordmark", "combined"].includes(variant)) die("--variant must be symbol | wordmark | combined");
  const darkBg = a["dark-bg"] === true || a["dark-bg"] === "true" || a["dark-bg"] === "";

  const outDir = join(ASSET_DIR, a.id);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, `${variant}.svg`), svg.endsWith("\n") ? svg : svg + "\n");

  const manifest = existsSync(MANIFEST)
    ? JSON.parse(readFileSync(MANIFEST, "utf-8"))
    : { schema_version: 3, records: [] };
  manifest.schema_version = 3;

  // Per-variant entry carries its own provenance (a brand's symbol may come from a
  // different source than its wordmark).
  const vobj = {
    ref: `brand-svg/${a.id}/${variant}.svg`,
    ...(darkBg ? { dark_bg: true } : {}),
    source: a.source,
    source_url: a["source-url"],
    license: a.license,
    ...(a["license-note"] ? { license_note: a["license-note"] } : {}),
    ...((a.guidelines || a["source-url"]) ? { license_url: a.guidelines || a["source-url"] } : {}),
    ...(wm ? { attribution: wm.attribution } : a.attribution ? { attribution: a.attribution } : {}),
    ...(a.usage ? { usage_note: a.usage } : {}),
    ...(a["source-tier"] ? { source_tier: a["source-tier"] } : wm ? { source_tier: "official" } : { source_tier: "official" }),
    ...(a.risk ? { risk_tier: a.risk } : {}),
    ...(a["verified-against"] ? { verified_against: a["verified-against"] } : {}),
  };

  manifest.records = manifest.records || [];
  let rec = manifest.records.find((r) => r.id === a.id);
  if (!rec) {
    rec = { id: a.id, name: a.name || a.id, country: a.country || "", status: "available", risk_tier: a.risk || "med", variants: {}, default_variant: variant };
    manifest.records.push(rec);
  }
  rec.status = "available";
  if (a.name) rec.name = a.name;
  if (a.country) rec.country = a.country;
  if (a.risk) rec.risk_tier = a.risk;
  if (a["submitted-by"]) rec.submitted_by = a["submitted-by"];
  rec.variants = rec.variants || {};
  rec.variants[variant] = vobj;
  // default to the most icon-like available variant: symbol > combined > wordmark
  rec.default_variant = ["symbol", "combined", "wordmark"].find((t) => rec.variants[t]) || variant;

  manifest.records.sort((x, y) =>
    (x.status !== "available") - (y.status !== "available") ||
    (x.country !== "KR") - (y.country !== "KR") ||
    (x.country !== "TW") - (y.country !== "TW") ||
    x.id.localeCompare(y.id)
  );
  manifest.count = manifest.records.length;
  manifest.counts = {
    available: manifest.records.filter((r) => r.status === "available").length,
    source_only: manifest.records.filter((r) => r.status === "source-only").length,
  };
  manifest.generated_at = a["date"] || manifest.generated_at || "";
  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

  console.log(`✓ ${a.id} [${variant}]: stored web/public/brand-svg/${a.id}/${variant}.svg (${(bytes / 1024).toFixed(2)}kb) · source=${a.source} · default=${rec.default_variant} · variants=${Object.keys(rec.variants).join("+")}`);
  console.log(`  manifest: ${manifest.counts.available} available / ${manifest.counts.source_only} source-only / ${manifest.count} total`);
}
main().catch((e) => die(e.message));
