/**
 * Guards the two real reference trees against silently diverging.
 *
 * `web/references/` and `design-md/` are both real directories of the same
 * 1,227 files, kept identical by hand. That arrangement exists for one reason:
 * Vercel's project root is `web/`, so the site build can only read files
 * beneath it, while `design-md/` is where the catalog logically belongs. Two
 * copies maintained by convention is a bug waiting for the day someone edits
 * one — and it has already happened once (the mirror sat on pre-migration
 * frontmatter while the canonical tree moved on).
 *
 * This does not fix the duplication. It makes the duplication loud.
 *
 * The fix is to serve the site from Neon instead of from files, which frees
 * the canonical tree from `web/` and lets one of these two disappear. Until
 * that lands, run this before every commit that touches either tree.
 *
 *   node scripts/check-mirror-drift.mjs           # compare, exit 1 on drift
 *   node scripts/check-mirror-drift.mjs --fix     # copy canonical → mirror
 */

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
/** Canonical today is `web/references` — the tree the site actually reads
 *  through the root `references` symlink. When the site moves to Neon this
 *  flips, and the flip is a one-line change here plus one in sync-neon.mjs. */
const CANONICAL = join(ROOT, "web", "references");
const MIRROR = join(ROOT, "design-md");

const sha = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");

function walk(dir, base = dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, base, out);
    else if (e.isFile()) out.push(relative(base, p));
  }
  return out;
}

/** 단일 파일 쌍: 루트 DESIGN.md(정본, 도구가 읽는 프로젝트 계약)가
 *  vercel.com/design.md 관례를 따라 사이트에서도 서빙된다. 같은 Vercel
 *  루트 제약(web/ 밖을 못 읽음) 때문에 web/public/ 사본이 필요하다. */
const FILE_PAIRS = [
  { canonical: join(ROOT, "DESIGN.md"), mirror: join(ROOT, "web", "public", "design.md"), label: "DESIGN.md ↔ web/public/design.md" },
];

const canonFiles = new Set(walk(CANONICAL));
const mirrorFiles = new Set(walk(MIRROR));

const onlyCanonical = [...canonFiles].filter((f) => !mirrorFiles.has(f));
const onlyMirror = [...mirrorFiles].filter((f) => !canonFiles.has(f));
const differing = [...canonFiles]
  .filter((f) => mirrorFiles.has(f))
  .filter((f) => sha(join(CANONICAL, f)) !== sha(join(MIRROR, f)));

const pairDrift = FILE_PAIRS.filter(
  (p) => !existsSync(p.mirror) || sha(p.canonical) !== sha(p.mirror),
);

const drifted = onlyCanonical.length + onlyMirror.length + differing.length + pairDrift.length;

if (process.argv.includes("--fix")) {
  for (const f of [...onlyCanonical, ...differing]) {
    const dst = join(MIRROR, f);
    mkdirSync(dirname(dst), { recursive: true });
    copyFileSync(join(CANONICAL, f), dst);
  }
  for (const p of pairDrift) copyFileSync(p.canonical, p.mirror);
  // Files only in the mirror are NOT deleted here. A stray file is a question
  // for a person — it might be the only copy of something.
  console.log(JSON.stringify({
    fixed: onlyCanonical.length + differing.length + pairDrift.length,
    onlyMirror: onlyMirror.length,
    note: onlyMirror.length ? "mirror-only files left in place — inspect them by hand" : "in sync",
  }, null, 1));
  process.exit(0);
}

console.log(JSON.stringify({
  canonical: `web/references (${canonFiles.size} files)`,
  mirror: `design-md (${mirrorFiles.size} files)`,
  drifted,
  differing: differing.slice(0, 10),
  onlyCanonical: onlyCanonical.slice(0, 10),
  onlyMirror: onlyMirror.slice(0, 10),
  filePairs: pairDrift.map((p) => p.label + " drifted"),
}, null, 1));
process.exit(drifted ? 1 : 0);
