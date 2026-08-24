/**
 * Moves capture originals into an immutable store outside git, and writes a
 * manifest into the repo that binds each file to where and when it came from.
 *
 * Why this exists: the README used to say a lost capture could just be taken
 * again. That is false. Commerce creative rotates per campaign, so the same
 * evidence.json never comes back — and once the originals are gone, "did this
 * come from evidence or from imagination", the question this whole track is
 * built to answer, stops being auditable.
 *
 * Split of responsibilities:
 *   store (outside git)  the PNGs themselves — someone else's work, and large
 *   manifest (in git)    URL, time, viewport, locale, session state, SHA-256
 *
 * The manifest is facts about the capture, not the capture, so it commits.
 *
 *   node ingest-captures.mjs --brand musinsa
 *   node ingest-captures.mjs --all
 *   node ingest-captures.mjs --verify        # SHA in manifest vs file on disk
 */

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");
const STORE_ROOT = process.env.OMD_EVIDENCE_STORE ?? join(process.env.HOME ?? "", ".omd", "evidence-store");

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}
const has = (name) => process.argv.includes(`--${name}`);

const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");

/**
 * Session state is recorded, never assumed. The Playwright channel runs a fresh
 * anonymous context; the Aside channel drives the user's own profile, so
 * whatever cookies it carries are unknown to us and saying "anonymous" would be
 * a claim we cannot support.
 */
function sessionStateFor(channel) {
  return channel === "aside"
    ? { profile: "aside user profile", authenticated: "unknown", note: "captured through a real browser profile; cookie state not inspected" }
    : { profile: "fresh automation context", authenticated: false };
}

function ingestBrand(brand) {
  const brandDir = join(EVIDENCE_ROOT, brand);
  const captureDir = join(brandDir, "capture");
  const evidencePath = join(brandDir, "evidence.json");
  if (!existsSync(evidencePath)) return { brand, skipped: "no evidence.json" };
  if (!existsSync(captureDir)) return { brand, skipped: "no capture directory" };

  const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
  const channel = evidence.method?.channel ?? "playwright";
  // The capture time is the identity of the snapshot: the same URL yields a
  // different page tomorrow, so the store is keyed by when, not just by what.
  const captureId = evidence.capturedAt.replace(/[:.]/g, "-");
  const storeDir = join(STORE_ROOT, brand, captureId);
  mkdirSync(storeDir, { recursive: true });

  const files = [];
  for (const name of readdirSync(captureDir).filter((f) => f.endsWith(".png")).sort()) {
    const from = join(captureDir, name);
    const to = join(storeDir, name);
    copyFileSync(from, to);
    files.push({ name, bytes: readFileSync(to).length, sha256: sha256(to) });
  }
  copyFileSync(evidencePath, join(storeDir, "evidence.json"));

  const manifest = {
    brand,
    captureId,
    capturedAt: evidence.capturedAt,
    channel,
    source: {
      url: evidence.source?.url ?? null,
      finalUrl: evidence.source?.finalUrl ?? null,
      title: evidence.source?.title ?? null,
      status: evidence.source?.status ?? null,
    },
    // One capture now covers several viewports, so the manifest records each
    // surface with its sample count. A single `viewport` field went null the
    // moment the surfaces split, and a null reads as "not recorded" rather
    // than "recorded elsewhere".
    surfaces: Object.entries(evidence.surfaces ?? {}).map(([id, s]) => ({
      id,
      viewport: s.viewport ?? s.viewportMeasured ?? null,
      imagerySamples: s.imagery?.sampled ?? 0,
      durationMs: s.durationMs ?? null,
    })),
    surfaceLimit: evidence.method?.surfaceLimit ?? null,
    locale: evidence.method?.locale ?? "ko-KR",
    session: sessionStateFor(channel),
    store: { root: "$OMD_EVIDENCE_STORE", path: join(brand, captureId) },
    files,
    evidenceSha256: sha256(evidencePath),
    supersededBy: evidence.supersededBy ?? null,
  };
  writeFileSync(join(brandDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return { brand, ingested: files.length, storeDir };
}

/** The condition this tool has to satisfy: manifest SHA equals the file on disk. */
function verify() {
  const results = [];
  for (const brand of readdirSync(EVIDENCE_ROOT)) {
    const manifestPath = join(EVIDENCE_ROOT, brand, "manifest.json");
    if (!existsSync(manifestPath)) continue;
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    const storeDir = join(STORE_ROOT, manifest.store.path);
    let ok = 0;
    const bad = [];
    for (const file of manifest.files) {
      const path = join(storeDir, file.name);
      if (!existsSync(path)) { bad.push(`${file.name}: missing from store`); continue; }
      if (sha256(path) !== file.sha256) { bad.push(`${file.name}: sha mismatch`); continue; }
      ok++;
    }
    results.push({ brand, matched: ok, total: manifest.files.length, problems: bad });
  }
  return results;
}

if (has("verify")) {
  const results = verify();
  const allGood = results.every((r) => r.problems.length === 0 && r.matched === r.total);
  console.log(JSON.stringify({ store: STORE_ROOT, results, verdict: allGood ? "manifest SHA == store file SHA" : "MISMATCH" }, null, 1));
  process.exit(allGood ? 0 : 1);
}

// Underscore-prefixed directories under the evidence root hold run reports and
// discovery output, not brands.
const brands = has("all")
  ? readdirSync(EVIDENCE_ROOT).filter((b) => !b.startsWith("_") && !b.startsWith(".")).sort()
  : [arg("brand")].filter(Boolean);
if (brands.length === 0) {
  console.error("usage: ingest-captures.mjs --brand <id> | --all | --verify");
  process.exit(1);
}
console.log(JSON.stringify({ store: STORE_ROOT, ingested: brands.map(ingestBrand) }, null, 1));
