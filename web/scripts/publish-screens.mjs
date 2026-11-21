#!/usr/bin/env node
/**
 * Publish the screen stills: the sheets folder (never committed) → the image store (Vercel Blob) → the committed
 * manifest web/src/data/screens-public.generated.json that the pages read (web/src/lib/screens/public.server.ts).
 *
 * What is published: every record of a sheet that is not withheld (a key withheld on any width goes whole) and not
 * blocked, whose first-viewport still <width>-<key>.jpg is a regular file inside <sheets>/<slug>/img, for folders
 * whose name is a reference id (web/references/<id>). Never a full-page still (.full.jpg), never a file outside the
 * img folder (a symlink is resolved first), never a sheet or walk file. What it refuses, it prints.
 *
 *   node web/scripts/publish-screens.mjs [--dry-run] [--sheets <dir>] --base <url> [--out <file>]
 *       The default. Lists what would be published (service, key, widths, bytes, masked), the totals and what was
 *       refused; with --out, writes the manifest there using --base (never over the committed manifest).
 *   BLOB_READ_WRITE_TOKEN=… node web/scripts/publish-screens.mjs --upload [--sheets <dir>]
 *       Uploads each still as public to screens/<slug>/<width>-<key>.jpg (no random suffix, overwrite allowed),
 *       deletes stills of those services that are no longer listed, then writes the committed manifest with the
 *       store's base.
 *   BLOB_READ_WRITE_TOKEN=… node web/scripts/publish-screens.mjs --remove <slug>[/<key>]
 *       A takedown: deletes those stills from the store and drops them from the committed manifest. Mark the screen
 *       withheld in its sheet as well, or the next --upload lists it again.
 *
 * @vercel/blob (a devDependency of web/) is loaded only by --upload and --remove (API per vercel.com/docs/vercel-blob/
 * using-blob-sdk, read 2026-11-22: put(pathname, body, { access, addRandomSuffix, allowOverwrite, contentType,
 * cacheControlMaxAge }), list({ prefix, cursor }), del(urls)).
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.resolve(HERE, "..");
export const COMMITTED_MANIFEST = path.join(WEB, "src/data/screens-public.generated.json");
const REFERENCES = path.join(WEB, "references");
const DEFAULT_SHEETS = path.join(os.homedir(), "Downloads/kr-screens/web");
/** The store's path prefix: a still is screens/<slug>/<width>-<key>.jpg. */
export const STORE_PREFIX = "screens";
/** Seconds a browser or the CDN may keep a still. A deleted blob leaves Vercel's CDN within about a minute (the docs);
 *  a day bounds how long an overwritten still (a re-shot or re-masked screen) can stay stale. The default is a month. */
const CACHE_SECONDS = 86400;

// The same rules as web/src/lib/screens/walk.ts (the parity test in web/__tests__/screens-publish.test.ts holds them).
const SLUG_RE = /^[a-z0-9][a-z0-9.-]{0,63}$/i;
const KEY_RE = /^[a-z0-9][a-z0-9-]{0,63}$/i;
const HTTPS_BASE = /^https:\/\/[a-z0-9.-]+(?::\d+)?(?:\/[A-Za-z0-9._~-]+)*$/i;
const LOCAL_BASE = /^(?:\/[A-Za-z0-9._~-]+)+$/;

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
      records.push({ key, type: str(r.type) ?? "", title: str(r.title) ?? str(r.type) ?? key, state: str(r.state), width, masked });
      stills.push({ slug, key, width, file, abs: found.abs, bytes: found.bytes, masked, pathname: `${STORE_PREFIX}/${slug}/${file}` });
    }
    // Every other file in the img folder stays here. Withheld and blocked screens were named above; the full pages
    // are counted, and a still the walk has no record of is named.
    if (imgDir) {
      const known = new Set(walk.records.map((r) => r?.key));
      let fulls = 0;
      for (const f of fs.readdirSync(imgDir).sort()) {
        if (taken.has(f)) continue;
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
function stillIn(imgDir, file) {
  if (!imgDir) return { ok: false, reason: "no img folder" };
  if (/\.full\.jpg$/i.test(file)) return { ok: false, reason: "full-page still (never published)" };
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
    `\nTotals: ${totals.services} services, ${totals.screens} screens, ${totals.stills} stills, ${totals.bytes} bytes (${(totals.bytes / 1048576).toFixed(1)} MB), ${totals.masked} masked screens; refused: ${totals.refused} entries (${totals.fullPages} full-page stills among them)`,
  );
  return totals;
}

const writeManifest = (file, manifest) => fs.writeFileSync(file, JSON.stringify(manifest, null, 2) + "\n");

function needToken() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("BLOB_READ_WRITE_TOKEN is not set: nothing was uploaded or removed.");
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
  const result = collect(sheets);
  print(result);
  const { put, list, del } = await import("@vercel/blob");
  let base = null;
  for (const s of result.stills) {
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
  const keep = new Set(result.stills.map((s) => s.pathname));
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
  const match = new RegExp(`^${STORE_PREFIX}/${slug.replace(/\./g, "\\.")}/\\d+-${key ?? "[a-z0-9][a-z0-9-]*"}\\.jpg$`, "i");
  const gone = (await listAll(list, `${STORE_PREFIX}/${slug}/`)).filter((b) => match.test(b.pathname));
  if (gone.length) await del(gone.map((b) => b.url));
  for (const b of gone) console.log(`deleted ${b.pathname}`);
  const manifest = readJson(COMMITTED_MANIFEST) ?? { generated: "", base: "", services: [] };
  writeManifest(COMMITTED_MANIFEST, withoutScreens(manifest, slug, key));
  console.log(`\nDropped ${key ? `${slug}/${key}` : slug} from the committed manifest; commit it. A deleted still can stay in Vercel's CDN for about a minute.`);
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
  const result = collect(sheets, { base });
  print(result);
  const out = arg(argv, "--out");
  if (out) {
    if (path.resolve(out) === COMMITTED_MANIFEST) {
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
