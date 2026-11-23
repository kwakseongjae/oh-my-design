#!/usr/bin/env node
/**
 * Publish the screen stills: the sheets folder (never committed) → the image store (Vercel Blob) → the committed
 * manifest web/src/data/screens-public.generated.json that the pages read (web/src/lib/screens/public.server.ts).
 *
 * What is published: every record of a sheet that is not withheld (a key withheld on any width goes whole) and not
 * blocked, whose first-viewport still <width>-<key>.jpg is a regular file inside <sheets>/<slug>/img, for folders
 * whose name is a reference id (web/references/<id>), and beside each such still its small rendition
 * <width>-<key>.thumb.jpg (the gallery cards and the landing wall load that one; the large view keeps the still).
 * Never a full-page still (.full.jpg), never a file outside the img folder (a symlink is resolved first), never a
 * sheet or walk file. What it refuses, it prints.
 *
 * Small renditions: JPEG, about 480px wide for a phone still (390 viewport, 520px files) and 960px for a web still
 * (1440 viewport, 1280px files), never wider than the still. They are written into the sheet's img folder, next to the
 * still, whenever a manifest is written (--out or --upload) and one is missing or older than its still; with `sharp`
 * when it resolves from web/node_modules, otherwise with macOS `sips`. A dry run without --out writes nothing.
 *
 *   node web/scripts/publish-screens.mjs [--dry-run] [--sheets <dir>] --base <url> [--out <file>]
 *       The default. Lists what would be published (service, key, widths, bytes, masked), the totals and what was
 *       refused; with --out, writes the small renditions and then the manifest there using --base (never over the
 *       committed manifest).
 *   BLOB_READ_WRITE_TOKEN=… node web/scripts/publish-screens.mjs --upload [--sheets <dir>]
 *       Writes the small renditions, uploads each still and rendition as public to screens/<slug>/<file> (no random
 *       suffix, overwrite allowed), deletes files of those services that are no longer listed, then writes the
 *       committed manifest with the store's base.
 *   BLOB_READ_WRITE_TOKEN=… node web/scripts/publish-screens.mjs --remove <slug>[/<key>]
 *       A takedown: deletes those stills and their small renditions from the store and drops them from the committed manifest; commit and deploy
 *       it (a new deployment starts with an empty CDN cache for /screens-img). Mark the screen withheld in its sheet as
 *       well, or the next --upload lists it again.
 *
 * @vercel/blob (a devDependency of web/) is loaded only by --upload and --remove (API per vercel.com/docs/vercel-blob/
 * using-blob-sdk, read 2026-11-22: put(pathname, body, { access, addRandomSuffix, allowOverwrite, contentType,
 * cacheControlMaxAge }), list({ prefix, cursor }), del(urls)).
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.resolve(HERE, "..");
export const COMMITTED_MANIFEST = path.join(WEB, "src/data/screens-public.generated.json");
const REFERENCES = path.join(WEB, "references");
const DEFAULT_SHEETS = path.join(os.homedir(), "Downloads/kr-screens/web");
/** The store's path prefix: a still is screens/<slug>/<width>-<key>.jpg. */
export const STORE_PREFIX = "screens";
/** Seconds a browser or a CDN may keep a still (the store sends it as Cache-Control max-age; the default is a month).
 *  The pages load stills through our own /screens-img route (web/src/app/screens-img), which sends the same hour for
 *  the browser and the CDN, so this is also how long a removed still can keep answering there without a new
 *  deployment, and how long a browser that already loaded it keeps it. An hour. */
const CACHE_SECONDS = 3600;

// The same rules as web/src/lib/screens/walk.ts (the parity test in web/__tests__/screens-publish.test.ts holds them).
const SLUG_RE = /^[a-z0-9][a-z0-9.-]{0,63}$/i;
const KEY_RE = /^[a-z0-9][a-z0-9-]{0,63}$/i;
const HTTPS_BASE = /^https:\/\/[a-z0-9.-]+(?::\d+)?(?:\/[A-Za-z0-9._~-]+)*$/i;
const LOCAL_BASE = /^(?:\/[A-Za-z0-9._~-]+)+$/;

/** The small rendition's file name beside a still's. */
export const thumbFile = (file) => file.replace(/\.jpg$/i, ".thumb.jpg");
/** How wide a still's small rendition is drawn: about 480px for a phone still, 960px for a web one. */
export const thumbWidth = (viewport) => (viewport < 1024 ? 480 : 960);
const THUMB_QUALITY = 72;

const str = (v) => (typeof v === "string" && v.trim() ? v : null);
const isWithheld = (r) => typeof r?.withheld === "string" && r.withheld.trim() !== "";
function isMasked(r) {
  const m = r?.masked;
  if (m === true) return true;
  if (!m || typeof m !== "object") return false;
  return (Number(m.names) || 0) > 0 || (Number(m.images) || 0) > 0;
}
function shotDate(v) {
  const m = str(v)?.match(/^(\d{4})-?(\d{2})-?(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}
function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}
const isReference = (slug, refsDir) => fs.existsSync(path.join(refsDir, slug, "DESIGN.md"));

/**
 * Everything the publish would list, from the sheets folder. Pure apart from reading that folder: nothing is written.
 * Returns the manifest (with `base`), the stills with their files on disk, and what was refused and why.
 */
export function collect(sheetsDir, { base = "", generated = new Date().toISOString().slice(0, 10), refsDir = REFERENCES } = {}) {
  const root = fs.realpathSync(sheetsDir);
  const services = [];
  const stills = [];
  const refused = [];
  const slugs = [];
  const names = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
  for (const slug of names) {
    const dir = path.join(root, slug);
    const walk = readJson(path.join(dir, "screens.json"));
    if (!walk || !Array.isArray(walk.records)) continue;
    if (!SLUG_RE.test(slug) || slug.includes("..")) {
      refused.push({ slug, key: null, width: null, reason: "unsafe folder name" });
      continue;
    }
    if (!isReference(slug, refsDir)) {
      refused.push({ slug, key: null, width: null, reason: "not a reference id" });
      continue;
    }
    slugs.push(slug);
    let imgDir;
    try {
      imgDir = fs.realpathSync(path.join(dir, "img"));
    } catch {
      imgDir = null;
    }
    const held = new Map();
    for (const r of walk.records) if (isWithheld(r) && typeof r.key === "string") held.set(r.key, r.withheld.trim());
    for (const [key, reason] of held) refused.push({ slug, key, width: null, reason: `withheld (${reason})` });

    const records = [];
    const listed = new Set();
    const taken = new Set();
    for (const r of walk.records) {
      const key = str(r?.key);
      const width = r?.width;
      if (!key || held.has(key)) continue;
      if (!KEY_RE.test(key)) {
        refused.push({ slug, key, width: width ?? null, reason: "unsafe key" });
        continue;
      }
      if (!Number.isInteger(width) || width <= 0 || width >= 10000) {
        refused.push({ slug, key, width: width ?? null, reason: "no usable width" });
        continue;
      }
      if (r.blocked === true) {
        refused.push({ slug, key, width, reason: "blocked" });
        continue;
      }
      const file = `${width}-${key}.jpg`;
      if (taken.has(file)) continue;
      const found = stillIn(imgDir, file);
      if (!found.ok) {
        refused.push({ slug, key, width, reason: found.reason });
        continue;
      }
      taken.add(file);
      listed.add(key);
      const masked = isMasked(r);
      // the small rendition counts only when it is a regular file in the img folder and no older than the still
      const small = stillIn(imgDir, thumbFile(file), { thumb: true });
      const thumb = small.ok && fs.statSync(small.abs).mtimeMs >= fs.statSync(found.abs).mtimeMs ? small : null;
      records.push({ key, type: str(r.type) ?? "", title: str(r.title) ?? str(r.type) ?? key, state: str(r.state), width, masked, thumb: thumb !== null });
      stills.push({
        slug,
        key,
        width,
        file,
        abs: found.abs,
        bytes: found.bytes,
        masked,
        pathname: `${STORE_PREFIX}/${slug}/${file}`,
        thumb: thumb ? { file: thumbFile(file), abs: thumb.abs, bytes: thumb.bytes, pathname: `${STORE_PREFIX}/${slug}/${thumbFile(file)}` } : null,
      });
    }
    // Every other file in the img folder stays here. Withheld and blocked screens were named above; the full pages
    // are counted, and a still the walk has no record of is named.
    if (imgDir) {
      const known = new Set(walk.records.map((r) => r?.key));
      let fulls = 0;
      for (const f of fs.readdirSync(imgDir).sort()) {
        // a listed still's small rendition goes with it; any other one (a screen withheld since) stays here
        if (taken.has(f) || /\.thumb\.jpg$/i.test(f)) continue;
        if (/\.full\.jpg$/i.test(f)) fulls++;
        else if (!known.has(/^\d+-(.+)\.jpg$/i.exec(f)?.[1])) refused.push({ slug, key: null, width: null, file: f, reason: "no record in the walk" });
      }
      if (fulls) refused.push({ slug, key: null, width: null, file: `${fulls} × .full.jpg`, reason: "full-page stills (never published)" });
    }
    if (records.length === 0) continue;
    const tokens = readJson(path.join(dir, "tokens.json"));
    const colors = [];
    if (tokens && Array.isArray(tokens.colors)) {
      for (const c of tokens.colors) {
        const token = str(c?.token);
        const value = str(c?.value);
        if (!token || !value || c.comparable !== true) continue;
        const on = Array.isArray(c.screens) ? c.screens.filter((k) => typeof k === "string" && listed.has(k)) : [];
        colors.push({ token, value, screens: [...new Set(on)] });
      }
    }
    services.push({
      slug,
      shot: shotDate(walk.shot),
      signedOut: /signed out/i.test(str(walk.browser) ?? ""),
      platform: str(walk.platform),
      records,
      colors,
    });
  }
  return { manifest: { generated, base: base.replace(/\/+$/, ""), services }, stills, refused, slugs };
}

/** The still as a regular file directly inside the sheet's img folder after every symlink is resolved, or why not. */
function stillIn(imgDir, file, { thumb = false } = {}) {
  if (!imgDir) return { ok: false, reason: "no img folder" };
  if (/\.full\.jpg$/i.test(file)) return { ok: false, reason: "full-page still (never published)" };
  if (!thumb && /\.thumb\.jpg$/i.test(file)) return { ok: false, reason: "a small rendition, not a still" };
  let abs;
  try {
    abs = fs.realpathSync(path.join(imgDir, file));
  } catch {
    return { ok: false, reason: "no still on disk" };
  }
  if (path.dirname(abs) !== imgDir) return { ok: false, reason: `outside the img folder (${abs})` };
  const st = fs.statSync(abs);
  if (!st.isFile()) return { ok: false, reason: "not a regular file" };
  return { ok: true, abs, bytes: st.size };
}

/** sharp from web/node_modules, or null (then macOS sips draws the renditions). */
function loadSharp() {
  try {
    return createRequire(path.join(WEB, "package.json"))("sharp");
  } catch {
    return null;
  }
}

/**
 * Writes each listed still's small rendition next to it when it is missing or older than the still. Never wider than
 * the still; JPEG. Returns how many were written. Run before collect() is read for a manifest, so the manifest says
 * which records have one.
 */
export async function writeThumbs(stills, { sharp = loadSharp() } = {}) {
  let written = 0;
  for (const s of stills) {
    const out = path.join(path.dirname(s.abs), thumbFile(s.file));
    let fresh = false;
    try {
      fresh = fs.statSync(out).mtimeMs >= fs.statSync(s.abs).mtimeMs;
    } catch {
      fresh = false;
    }
    if (fresh) continue;
    const width = thumbWidth(s.width);
    if (sharp) {
      await sharp(s.abs).resize({ width, withoutEnlargement: true }).jpeg({ quality: THUMB_QUALITY, mozjpeg: true }).toFile(out);
    } else if (process.platform === "darwin") {
      const px = Number(/pixelWidth: (\d+)/.exec(execFileSync("sips", ["-g", "pixelWidth", s.abs], { encoding: "utf8" }))?.[1]) || width;
      execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", String(THUMB_QUALITY), "--resampleWidth", String(Math.min(width, px)), s.abs, "--out", out], { stdio: "ignore" });
    } else {
      throw new Error("Neither sharp nor sips is available to draw the small renditions.");
    }
    written++;
  }
  return written;
}

/** Every store path the publish keeps: each listed still and its small rendition. */
export function storeKeep(stills) {
  return new Set(stills.flatMap((s) => [s.pathname, ...(s.thumb ? [s.thumb.pathname] : [])]));
}

/** The store paths a takedown deletes: a screen's stills at every width and their small renditions, or a whole
 *  service's. */
export function removalPattern(slug, key = null) {
  return new RegExp(`^${STORE_PREFIX}/${slug.replace(/\./g, "\\.")}/\\d+-${key ?? "[a-z0-9][a-z0-9-]*"}(?:\\.thumb)?\\.jpg$`, "i");
}

function summarize({ manifest, stills, refused }) {
  const keys = new Map();
  for (const s of stills) {
    const id = `${s.slug}/${s.key}`;
    const k = keys.get(id) ?? { slug: s.slug, key: s.key, widths: [], bytes: 0, masked: false };
    k.widths.push(s.width);
    k.bytes += s.bytes;
    k.masked ||= s.masked;
    keys.set(id, k);
  }
  const screens = [...keys.values()];
  return {
    screens,
    totals: {
      services: manifest.services.length,
      screens: screens.length,
      stills: stills.length,
      bytes: stills.reduce((n, s) => n + s.bytes, 0),
      thumbs: stills.filter((s) => s.thumb).length,
      thumbBytes: stills.reduce((n, s) => n + (s.thumb?.bytes ?? 0), 0),
      masked: screens.filter((s) => s.masked).length,
      refused: refused.length,
      fullPages: refused.filter((r) => /^full-page/.test(r.reason)).reduce((n, r) => n + Number.parseInt(r.file, 10), 0),
    },
  };
}

function print(result) {
  const { screens, totals } = summarize(result);
  const kb = (n) => `${Math.round(n / 1024)} KB`;
  console.log("Would publish:");
  for (const s of screens) {
    console.log(`  ${s.slug.padEnd(12)} ${s.key.padEnd(24)} ${s.widths.sort((a, b) => a - b).join(",").padEnd(9)} ${kb(s.bytes).padStart(8)}  ${s.masked ? "masked" : ""}`);
  }
  console.log("\nRefused:");
  for (const r of result.refused) console.log(`  ${r.slug.padEnd(12)} ${(r.key ?? r.file ?? "").padEnd(24)} ${String(r.width ?? "").padEnd(5)} ${r.reason}`);
  console.log(
    `\nTotals: ${totals.services} services, ${totals.screens} screens, ${totals.stills} stills, ${totals.bytes} bytes (${(totals.bytes / 1048576).toFixed(1)} MB), ${totals.thumbs} small renditions, ${totals.thumbBytes} bytes (${(totals.thumbBytes / 1048576).toFixed(1)} MB), ${totals.masked} masked screens; refused: ${totals.refused} entries (${totals.fullPages} full-page stills among them)`,
  );
  return totals;
}

const writeManifest = (file, manifest) => fs.writeFileSync(file, JSON.stringify(manifest, null, 2) + "\n");

/** The store's credentials as @vercel/blob 2.9 reads them from the environment: the read-write token, or the store id
 *  with a Vercel OIDC token (what `vercel env pull` writes for a connection that includes Development). */
function needToken() {
  const oidc = process.env.VERCEL_OIDC_TOKEN && process.env.BLOB_STORE_ID;
  if (!process.env.BLOB_READ_WRITE_TOKEN && !oidc) {
    console.error("Neither BLOB_READ_WRITE_TOKEN nor VERCEL_OIDC_TOKEN with BLOB_STORE_ID is set: nothing was uploaded or removed.");
    process.exit(1);
  }
}

/** Every blob under a prefix (list() pages by cursor). */
async function listAll(list, prefix) {
  const out = [];
  let cursor;
  do {
    const page = await list({ prefix, cursor });
    out.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return out;
}

async function upload(sheets) {
  needToken();
  await writeThumbs(collect(sheets).stills);
  const result = collect(sheets);
  print(result);
  const { put, list, del } = await import("@vercel/blob");
  let base = null;
  const files = result.stills.flatMap((s) => [
    { slug: s.slug, file: s.file, abs: s.abs, pathname: s.pathname },
    ...(s.thumb ? [{ slug: s.slug, file: s.thumb.file, abs: s.thumb.abs, pathname: s.thumb.pathname }] : []),
  ]);
  for (const s of files) {
    const blob = await put(s.pathname, fs.readFileSync(s.abs), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "image/jpeg",
      cacheControlMaxAge: CACHE_SECONDS,
    });
    const tail = `/${s.slug}/${s.file}`;
    if (!blob.url.endsWith(`/${STORE_PREFIX}${tail}`)) throw new Error(`unexpected URL for ${s.pathname}: ${blob.url}`);
    const here = blob.url.slice(0, -tail.length);
    if (base && here !== base) throw new Error(`stills landed under two bases: ${base} and ${here}`);
    base = here;
    console.log(`uploaded ${blob.url}`);
  }
  if (!base || !HTTPS_BASE.test(base)) throw new Error(`no usable base from the store: ${base}`);
  // A screen withheld (or blocked, or gone) since the last upload must not stay reachable at its old address.
  const keep = storeKeep(result.stills);
  for (const slug of result.slugs) {
    const stale = (await listAll(list, `${STORE_PREFIX}/${slug}/`)).filter((b) => !keep.has(b.pathname));
    if (stale.length) {
      await del(stale.map((b) => b.url));
      for (const b of stale) console.log(`deleted stale ${b.pathname}`);
    }
  }
  writeManifest(COMMITTED_MANIFEST, { ...result.manifest, base });
  console.log(`\nWrote ${path.relative(process.cwd(), COMMITTED_MANIFEST)} with base ${base}. Commit it to publish.`);
}

/** The manifest without one service or one of its screens. */
export function withoutScreens(manifest, slug, key = null) {
  const services = manifest.services.flatMap((s) => {
    if (s.slug !== slug) return [s];
    if (!key) return [];
    const records = s.records.filter((r) => r.key !== key);
    if (!records.length) return [];
    return [{ ...s, records, colors: s.colors.map((c) => ({ ...c, screens: c.screens.filter((k) => k !== key) })) }];
  });
  return { ...manifest, services };
}

async function remove(target) {
  const [slug, key = null, extra] = String(target ?? "").split("/");
  if (!slug || !SLUG_RE.test(slug) || (key !== null && !KEY_RE.test(key)) || extra !== undefined) {
    console.error("--remove takes <slug> or <slug>/<key>.");
    process.exit(1);
  }
  needToken();
  const { list, del } = await import("@vercel/blob");
  const match = removalPattern(slug, key);
  const gone = (await listAll(list, `${STORE_PREFIX}/${slug}/`)).filter((b) => match.test(b.pathname));
  if (gone.length) await del(gone.map((b) => b.url));
  for (const b of gone) console.log(`deleted ${b.pathname}`);
  const manifest = readJson(COMMITTED_MANIFEST) ?? { generated: "", base: "", services: [] };
  writeManifest(COMMITTED_MANIFEST, withoutScreens(manifest, slug, key));
  console.log(`\nDropped ${key ? `${slug}/${key}` : slug} from the committed manifest; commit and deploy it. Until that deployment, /screens-img can keep answering with the still for up to ${CACHE_SECONDS / 3600} h (the CDN keeps the route's response for that long); the store itself stops within about a minute.`);
  console.log(`Mark it withheld in ${slug}/screens.json as well, or the next --upload publishes it again.`);
}

function arg(argv, name) {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : undefined;
}

async function main(argv) {
  const sheets = arg(argv, "--sheets") ?? DEFAULT_SHEETS;
  if (argv.includes("--remove")) return remove(arg(argv, "--remove"));
  if (argv.includes("--upload")) return upload(sheets);
  const base = arg(argv, "--base") ?? "";
  if (!HTTPS_BASE.test(base.replace(/\/+$/, "")) && !LOCAL_BASE.test(base.replace(/\/+$/, ""))) {
    console.error("--base must be an https URL (the store's origin and prefix) or a path on this host, as /screens-local.");
    process.exit(1);
  }
  const out = arg(argv, "--out");
  if (out) await writeThumbs(collect(sheets).stills);
  const result = collect(sheets, { base });
  print(result);
  if (out) {
    const real = (p) => {
      try {
        return fs.realpathSync(p);
      } catch {
        return path.resolve(p);
      }
    };
    if (real(out) === real(COMMITTED_MANIFEST)) {
      console.error("A dry run never writes the committed manifest; name another --out.");
      process.exit(1);
    }
    fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
    writeManifest(path.resolve(out), result.manifest);
    console.log(`Wrote ${path.resolve(out)}`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(fs.realpathSync(process.argv[1])).href) {
  main(process.argv.slice(2)).catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
  });
}
