/**
 * Moves benchmark outputs out of git and into the immutable store, leaving a
 * SHA-256 manifest behind — the same custody pattern the capture evidence and
 * generated assets already use.
 *
 * What moves and what stays is decided by what a stranger needs to REPRODUCE
 * a run versus what a run PRODUCED:
 *
 *   stays in git    tasks/, fixtures/showcase-2.0, fixtures/autopilot-*,
 *                   scripts/, config/, plans/ — the inputs
 *   moves to store  reports/ (run outputs), e2e/ (built apps + screenshots),
 *                   fixtures/competitor-skills-2.0 (third-party skill packs —
 *                   not ours to republish; pack-sha.json already pins them)
 *
 * The manifest in git remains the verification root: anyone can fetch the
 * store copy (locally or from R2 once published) and check every SHA.
 *
 *   node scripts/bench-store.mjs --ingest        # copy → manifest → untrack
 *   node scripts/bench-store.mjs --verify        # store bytes vs manifest
 */

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BENCH = join(ROOT, "benchmarks", "ui-resolve-bench");
const STORE = join(homedir(), ".omd", "bench-store");
const MANIFEST_DIR = join(BENCH, "manifests");

/** Each set is one custody unit with its own manifest and store prefix. */
const SETS = [
  { id: "reports", dir: join(BENCH, "reports"), why: "run outputs — results are data, not source" },
  { id: "e2e", dir: join(BENCH, "e2e"), why: "built apps and screenshots produced by runs" },
  { id: "competitor-skills-2.0", dir: join(BENCH, "fixtures", "competitor-skills-2.0"), why: "third-party skill packs — pinned by pack-sha.json, not ours to republish" },
];

const sha256 = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");
const tracked = (dir) =>
  execFileSync("git", ["ls-files", "-z", relative(ROOT, dir)], { cwd: ROOT })
    .toString("utf8").split("\0").filter(Boolean);

function ingest() {
  mkdirSync(MANIFEST_DIR, { recursive: true });
  const summary = [];
  for (const set of SETS) {
    if (!existsSync(set.dir)) { summary.push({ set: set.id, skipped: "missing" }); continue; }
    const files = tracked(set.dir);
    if (!files.length) { summary.push({ set: set.id, skipped: "nothing tracked" }); continue; }

    const storeDir = join(STORE, set.id);
    const entries = [];
    for (const rel of files) {
      const src = join(ROOT, rel);
      const inner = relative(relative(ROOT, set.dir), rel);
      const dst = join(storeDir, inner);
      mkdirSync(dirname(dst), { recursive: true });
      copyFileSync(src, dst);
      entries.push({ path: inner, bytes: readFileSync(src).length, sha256: sha256(src) });
    }

    writeFileSync(join(MANIFEST_DIR, `${set.id}.json`), `${JSON.stringify({
      set: set.id,
      why: set.why,
      ingestedAt: new Date().toISOString(),
      store: { local: `~/.omd/bench-store/${set.id}`, remote: null },
      files: entries.length,
      totalBytes: entries.reduce((s, e) => s + e.bytes, 0),
      entries,
    }, null, 2)}\n`, "utf8");

    // Untrack but keep the working copy — the store copy above is the archive,
    // the working copy stays for local tooling until the user deletes it.
    execFileSync("git", ["rm", "-r", "--cached", "--quiet", relative(ROOT, set.dir)], { cwd: ROOT });
    summary.push({ set: set.id, files: entries.length, mb: +(entries.reduce((s, e) => s + e.bytes, 0) / 1048576).toFixed(1) });
  }
  return summary;
}

function verify() {
  const summary = [];
  for (const set of SETS) {
    const mPath = join(MANIFEST_DIR, `${set.id}.json`);
    if (!existsSync(mPath)) { summary.push({ set: set.id, skipped: "no manifest" }); continue; }
    const m = JSON.parse(readFileSync(mPath, "utf8"));
    const problems = [];
    for (const e of m.entries) {
      const p = join(STORE, set.id, e.path);
      if (!existsSync(p)) { problems.push(`${e.path}: missing`); continue; }
      if (sha256(p) !== e.sha256) problems.push(`${e.path}: SHA mismatch`);
    }
    summary.push({ set: set.id, checked: m.entries.length, problems: problems.slice(0, 5), ok: problems.length === 0 });
  }
  return summary;
}

const mode = process.argv.includes("--ingest") ? ingest : process.argv.includes("--verify") ? verify : null;
if (!mode) { console.error("usage: bench-store.mjs --ingest | --verify"); process.exit(1); }
const result = mode();
console.log(JSON.stringify(result, null, 1));
if (result.some((r) => r.ok === false)) process.exit(1);
