/**
 * Reclaims disk space consumed by THIS project's finished work — and nothing
 * else. Every deletion is scoped by evidence, not by directory: codex rollouts
 * are claimed only when their recorded cwd points into this repo, worktrees
 * only when git says they are clean, temp session dirs only when stale.
 *
 * What it reclaims (per category, sizes reported):
 *   rollouts    ~/.codex/archived_sessions — project-cwd files, all ages;
 *               ~/.codex/sessions — project-cwd files older than --keep-days
 *   worktrees   git worktrees other than the main checkout: removed when the
 *               tree is CLEAN (branch refs survive removal, so this loses no
 *               commits). Dirty worktrees are reported and skipped — always.
 *   tmp         stale session dirs under /private/tmp/claude-(uid)/(project)
 *               last write is older than --keep-days
 *   build       web/.next — only with --build-cache (next rebuild recreates it)
 *
 * Dry-run is the default. `--run` executes. Wire into the wave loop as:
 *   node scripts/reclaim-disk.mjs --run          # after each closed wave
 */

import { execFileSync } from "node:child_process";
import { closeSync, existsSync, openSync, readSync, readdirSync, rmSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PROJECT_MARK = basename(ROOT); // "oh-my-design"
const RUN = process.argv.includes("--run");
const keepDays = (() => { const i = process.argv.indexOf("--keep-days"); return i === -1 ? 7 : Number(process.argv[i + 1]); })();
const cutoff = Date.now() - keepDays * 86400_000;

const gb = (b) => `${(b / 1073741824).toFixed(2)}GB`;
const report = { dryRun: !RUN, keepDays, categories: {}, skipped: [] };
const claim = (cat, path, bytes) => {
  const c = (report.categories[cat] ??= { files: 0, bytes: 0 });
  c.files += 1; c.bytes += bytes;
  if (RUN) rmSync(path, { recursive: true, force: true });
};

/** cwd is stamped in the first line of every rollout — 4KB is plenty. */
function isProjectRollout(path) {
  const fd = openSync(path, "r");
  try {
    const buf = Buffer.alloc(4096);
    const n = readSync(fd, buf, 0, 4096, 0);
    const head = buf.toString("utf8", 0, n);
    const m = /"cwd":"([^"]*)"/.exec(head);
    return m ? m[1].includes(`/${PROJECT_MARK}`) : false;
  } finally { closeSync(fd); }
}

function* walk(dir) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile()) yield p;
  }
}

// -- rollouts ---------------------------------------------------------------
for (const [dir, ageGated] of [
  [join(homedir(), ".codex", "archived_sessions"), false],
  [join(homedir(), ".codex", "sessions"), true],
]) {
  for (const f of walk(dir)) {
    if (!f.endsWith(".jsonl")) continue;
    const st = statSync(f);
    if (ageGated && st.mtimeMs >= cutoff) continue;
    if (!isProjectRollout(f)) continue;
    claim("rollouts", f, st.size);
  }
}

// -- worktrees --------------------------------------------------------------
const porcelain = execFileSync("git", ["worktree", "list", "--porcelain"], { cwd: ROOT }).toString("utf8");
for (const block of porcelain.split("\n\n").filter(Boolean)) {
  const wt = /^worktree (.+)$/m.exec(block)?.[1];
  if (!wt || resolve(wt) === ROOT) continue;
  const dirty = execFileSync("git", ["status", "--porcelain"], { cwd: wt }).toString("utf8").trim();
  if (dirty) { report.skipped.push(`worktree ${wt}: dirty (${dirty.split("\n").length} paths) — 커밋/폐기 판단은 사람 몫`); continue; }
  const bytes = Number(execFileSync("du", ["-sk", wt]).toString("utf8").split("\t")[0]) * 1024;
  const c = (report.categories.worktrees ??= { files: 0, bytes: 0 });
  c.files += 1; c.bytes += bytes;
  if (RUN) execFileSync("git", ["worktree", "remove", wt], { cwd: ROOT });
}
if (RUN) execFileSync("git", ["worktree", "prune"], { cwd: ROOT });

// -- stale claude tmp session dirs ------------------------------------------
const tmpRoot = "/private/tmp";
for (const claudeDir of existsSync(tmpRoot) ? readdirSync(tmpRoot).filter((d) => d.startsWith("claude-")) : []) {
  const projDir = readdirSync(join(tmpRoot, claudeDir), { withFileTypes: true })
    .filter((e) => e.isDirectory() && e.name.includes(PROJECT_MARK)).map((e) => join(tmpRoot, claudeDir, e.name));
  for (const pd of projDir) {
    for (const sess of readdirSync(pd, { withFileTypes: true }).filter((e) => e.isDirectory())) {
      const p = join(pd, sess.name);
      let newest = 0;
      for (const f of walk(p)) newest = Math.max(newest, statSync(f).mtimeMs);
      if (newest === 0 || newest >= cutoff) continue;
      const bytes = Number(execFileSync("du", ["-sk", p]).toString("utf8").split("\t")[0]) * 1024;
      claim("tmp", p, bytes);
    }
  }
}

// -- build cache (opt-in) ---------------------------------------------------
if (process.argv.includes("--build-cache")) {
  const next = join(ROOT, "web", ".next");
  if (existsSync(next)) {
    const bytes = Number(execFileSync("du", ["-sk", next]).toString("utf8").split("\t")[0]) * 1024;
    claim("build", next, bytes);
  }
}

const total = Object.values(report.categories).reduce((s, c) => s + c.bytes, 0);
console.log(JSON.stringify({
  ...report,
  categories: Object.fromEntries(Object.entries(report.categories).map(([k, c]) => [k, { files: c.files, size: gb(c.bytes) }])),
  total: gb(total),
  note: RUN ? "삭제 완료" : "dry-run — 실제 삭제는 --run",
}, null, 1));
