/**
 * Preserves generated assets the way captures are preserved.
 *
 * Generation is stochastic: the same brief run twice produces different
 * pictures, so these files are originals, not build artefacts. They get the
 * same treatment as third-party captures — the bytes go to an immutable store
 * outside the repo, and the repo keeps a manifest of SHA-256es that makes any
 * later file swap detectable.
 *
 *   node ingest-generated.mjs --all
 *   node ingest-generated.mjs --brand toss      # re-ingest after a top-up
 *   node ingest-generated.mjs --verify
 */

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = resolve(HERE, "..", "02-generated");
const STORE_ROOT = join(homedir(), ".omd", "generated-store");

const arg = (n) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; };
const sha256 = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");

function mediaOf(dir) {
  const out = [];
  for (const sub of ["images", "videos"]) {
    const d = join(dir, sub);
    if (!existsSync(d)) continue;
    for (const f of readdirSync(d).filter((f) => /\.(jpg|png|mp4)$/.test(f) && !f.endsWith(".frame.png"))) {
      out.push(join(sub, f));
    }
  }
  return out.sort();
}

function ingest(brand) {
  const dir = join(OUT_ROOT, brand);
  if (!existsSync(join(dir, "shots.json"))) return { brand, skipped: "no manifest" };
  const shots = JSON.parse(readFileSync(join(dir, "shots.json"), "utf8"));
  const generatedAt = new Date().toISOString();
  const storeId = generatedAt.replace(/[:.]/g, "-");
  const storeDir = join(STORE_ROOT, brand, storeId);
  mkdirSync(join(storeDir, "images"), { recursive: true });
  mkdirSync(join(storeDir, "videos"), { recursive: true });

  const files = [];
  for (const rel of mediaOf(dir)) {
    const src = join(dir, rel);
    copyFileSync(src, join(storeDir, rel));
    files.push({ name: rel, bytes: readFileSync(src).length, sha256: sha256(src) });
  }
  copyFileSync(join(dir, "shots.json"), join(storeDir, "shots.json"));

  const manifest = {
    brand,
    storeId,
    ingestedAt: generatedAt,
    generator: { channel: "grok-build-cli", model: "grok-4.6", tools: ["image_gen", "image_to_video"] },
    brief: `01-prompts/${brand}/asset-brief.json`,
    store: { root: "$OMD_GENERATED_STORE", path: join(brand, storeId) },
    files,
    shotsSha256: sha256(join(dir, "shots.json")),
  };
  writeFileSync(join(dir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return { brand, files: files.length, storeDir };
}

function verify(brand) {
  const dir = join(OUT_ROOT, brand);
  const mPath = join(dir, "manifest.json");
  if (!existsSync(mPath)) return { brand, skipped: "no manifest" };
  const m = JSON.parse(readFileSync(mPath, "utf8"));
  const storeDir = join(STORE_ROOT, m.store.path);
  const problems = [];
  for (const f of m.files) {
    const p = join(storeDir, f.name);
    if (!existsSync(p)) { problems.push(`${f.name}: missing from store`); continue; }
    if (sha256(p) !== f.sha256) problems.push(`${f.name}: SHA mismatch`);
  }
  return { brand, checked: m.files.length, problems };
}

const brands = process.argv.includes("--all") || process.argv.includes("--verify")
  ? readdirSync(OUT_ROOT).filter((b) => !b.startsWith(".") && existsSync(join(OUT_ROOT, b, "shots.json"))).sort()
  : [arg("brand")].filter(Boolean);

if (!brands.length) { console.error("usage: ingest-generated.mjs --all | --brand <id> | --verify"); process.exit(1); }

const results = brands.map(process.argv.includes("--verify") ? verify : ingest);
const bad = results.filter((r) => r.problems?.length);
console.log(JSON.stringify({ results, verdict: process.argv.includes("--verify") ? (bad.length ? "MISMATCH" : "store SHA == manifest SHA") : undefined }, null, 1));
if (bad.length) process.exit(1);
