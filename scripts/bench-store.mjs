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
 *   node scripts/bench-store.mjs --sync-ignore   # refresh what stays in git
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

/**
 * Runs that something in git binds BY PATH. They live under reports/ but are not
 * run output in the sense this script means: bench tests and the readiness
 * manifests read these directories directly, so a run that exists only in the
 * store is a gate whose evidence the gate cannot reach — and nothing in git
 * could contradict a later edit.
 *
 * The list is derived, never hand-kept. Hand-keeping it is what broke CI once
 * already: --ingest untracked 634 report directories while nine test files went
 * on reading them, so the suite passed on this machine (working copies survive
 * an untrack) and failed on every clean checkout. `--sync-ignore` rewrites
 * reports/.gitignore from what the tracked sources actually reference, and
 * ui-resolve-bench-store-custody.test.mjs fails when the two drift.
 */
const REPORTS_DIR = join(BENCH, "reports");
const REPORTS_IGNORE = join(REPORTS_DIR, ".gitignore");
const REPORT_REF = /benchmarks\/ui-resolve-bench\/reports\/([A-Za-z0-9][A-Za-z0-9._-]*)/g;

/**
 * Report dirs referenced by machine-read sources anywhere in git — tests, runners,
 * gate manifests, and the public-data builder under scripts/. Scoping this to the
 * benchmark tree is what let `bench:ui:public-data:check` stay broken behind an
 * earlier failing step: it reads five report summaries by literal path from
 * scripts/build-ui-benchmark-public-data.mjs.
 */
export function boundReportDirs() {
  const sources = execFileSync("git", ["ls-files", "-z"], { cwd: ROOT })
    .toString("utf8").split("\0").filter(Boolean)
    .filter((rel) => /\.(mjs|cjs|js|ts|tsx|json)$/.test(rel))
    // Run outputs cite sibling runs as provenance. Scanning them would make
    // custody transitive and pull the whole store back into git — what a gate
    // reads is the question, not what a result mentions.
    .filter((rel) => !rel.startsWith(`${relative(ROOT, REPORTS_DIR)}/`));
  const referenced = new Set();
  for (const rel of sources) {
    for (const hit of readFileSync(join(ROOT, rel), "utf8").matchAll(REPORT_REF)) referenced.add(hit[1]);
  }
  // A reference that resolves to nothing is a negative-test fixture
  // (`does-not-exist`) or a template prefix — neither is custody.
  return [...referenced].filter((d) => existsSync(join(REPORTS_DIR, d))).sort();
}

/** The negations committed in reports/.gitignore — what --ingest must never untrack. */
export function ignoredExceptions() {
  if (!existsSync(REPORTS_IGNORE)) return [];
  return readFileSync(REPORTS_IGNORE, "utf8").split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("!/") && line.endsWith("/"))
    .map((line) => line.slice(2, -1))
    .sort();
}

const GATE_BOUND = ignoredExceptions().map((r) => `${relative(ROOT, REPORTS_DIR)}/${r}/`);

const sha256 = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");
const tracked = (dir) =>
  execFileSync("git", ["ls-files", "-z", relative(ROOT, dir)], { cwd: ROOT })
    .toString("utf8").split("\0").filter(Boolean)
    .filter((rel) => !GATE_BOUND.some((keep) => rel.startsWith(keep)));

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

/**
 * Rewrites reports/.gitignore so the runs git binds by path stay in git and
 * everything else stays in the store. Anchored `/*` matches only entries
 * directly inside reports/, so a negated directory re-includes its contents —
 * an unanchored `*` would keep matching them at depth and silently drop the
 * files back out.
 */
function syncIgnore() {
  const dirs = boundReportDirs();
  const body = [
    "# Bench run outputs live in the immutable store (~/.omd/bench-store) with",
    "# SHA-256 manifests in ../manifests/ — see ../REPRODUCE.md.",
    "#",
    "# The exceptions below are the runs something in git reads BY PATH: bench",
    "# tests under test/unit/bench and the readiness manifests. A gate whose",
    "# evidence lives only in the store cannot run on a clean checkout, and",
    "# nothing in git could contradict a later edit of it.",
    "#",
    "# Generated by `node scripts/bench-store.mjs --sync-ignore`. Do not hand-edit:",
    "# ui-resolve-bench-store-custody.test.mjs fails when this drifts from what",
    "# the tracked sources actually reference.",
    "/*",
    "!/.gitignore",
    ...dirs.map((d) => `!/${d}/`),
  ].join("\n");
  writeFileSync(REPORTS_IGNORE, `${body}\n`, "utf8");
  return [{ set: "reports", bound: dirs.length, wrote: relative(ROOT, REPORTS_IGNORE) }];
}

const MODES = { "--ingest": ingest, "--verify": verify, "--sync-ignore": syncIgnore };
const isCli = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  const mode = MODES[process.argv.find((a) => a in MODES)];
  if (!mode) { console.error(`usage: bench-store.mjs ${Object.keys(MODES).join(" | ")}`); process.exit(1); }
  const result = mode();
  console.log(JSON.stringify(result, null, 1));
  if (result.some((r) => r.ok === false)) process.exit(1);
}
