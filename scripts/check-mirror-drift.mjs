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
 *
 * A second, unrelated duplication lives in the skill trees — see SKILL_TREES
 * below. That one is never auto-fixed: a skill body is prose someone wrote,
 * and copying over it silently is how an edit disappears.
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

/* ────────────────────────────────────────────────────────────────────────────
 * SKILL_TREES — the same duplication problem, one layer up.
 *
 * A skill exists three times: `skills/<name>/SKILL.md` is the npm source, and
 * `omd install-skills` writes two mirrors — `.claude/skills/` (Claude Code) and
 * `.agents/skills/` (Codex). The mirrors are checked in so the repo dogfoods
 * its own skills, which means a hand edit to a mirror is invisible until the
 * next install silently reverts it, and a hand edit to the source never
 * reaches the session actually running.
 *
 * The installer makes exactly two legitimate changes (src/cli/install-skills.ts):
 *   1. renderSkillForChannel() rewrites the frontmatter `name:` from the folder
 *      name to its namespaced form — `omd-apply` → `omd:apply`. Folders without
 *      the `omd-` prefix (claude-design) keep their name.
 *   2. withManagedMarker() inserts MANAGED_HEADER after the frontmatter block.
 * Both are normalised away here. Anything left is real drift.
 *
 * Report-only, including under --fix. Reference DESIGN.md files are generated
 * artifacts; skill bodies are not.
 * ──────────────────────────────────────────────────────────────────────────── */

const SKILL_SOURCE = join(ROOT, "skills");
const SKILL_MIRRORS = [
  { label: ".claude/skills", dir: join(ROOT, ".claude", "skills") },
  { label: ".agents/skills", dir: join(ROOT, ".agents", "skills") },
];

/** Skills that live in a mirror with no `skills/` source, on purpose.
 *  Repo-local tooling and Core-v2 write gates: they are not shipped to npm and
 *  must not be, so their absence from `skills/` is the correct state, not drift.
 *  Anything appearing in a mirror that is NOT on this list is an orphan — either
 *  a skill someone forgot to add to `skills/`, or a leftover from a rename. */
const MIRROR_ONLY_SKILLS = new Set([
  "google-analytics",          // repo-local GA4 analysis, not a product skill
  "omd",                       // legacy `omd` invocation router
  "omd-add-reference",         // Core v2 write gate
  "omd-batch-launch",          // Core v2 write gate
  "omd-component-harvest",     // Core v2 write gate
  "omd-lab-01-designmd-impact",// archived Lab #01 gate
  "omd-migrate",               // Core v2 write gate
  "omd-release-hygiene",       // repo-local release checklist
  "omd-token-backfill",        // Core v2 write gate
]);

const MANAGED_HEADER =
  "<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->";
const FRONTMATTER = /^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/;

/** Mirror of renderSkillForChannel() + withManagedMarker() for the two folder
 *  channels. Both keep the namespaced `omd:` name; only opencode/cursor use the
 *  portable hyphen form, and neither is checked into this repo. */
function expectedMirror(src, folderName) {
  const installedName = folderName.replace(/^omd-/, "omd:");
  const named = src.replace(/^name:\s*[^\r\n]+$/m, `name: ${installedName}`);
  const fm = FRONTMATTER.exec(named);
  return fm ? fm[1] + MANAGED_HEADER + "\n\n" + fm[2] : MANAGED_HEADER + "\n\n" + named;
}

/** Everything the installer does not touch: frontmatter and the managed marker
 *  removed, leading blank lines collapsed. Two files with the same body differ
 *  only in the header, which is the installer's business, not a person's. */
function skillBody(text) {
  const fm = FRONTMATTER.exec(text);
  const rest = (fm ? fm[2] : text).replace(/^<!--\s*omd:installed-skill[\s\S]*?-->\r?\n/, "");
  return rest.replace(/^\s+/, "");
}

/** Symlinks count: `.claude/skills/google-analytics` is a link into
 *  `.agents/skills/`, and a tree that hides it would report a skill as absent
 *  from a channel that in fact loads it. */
function listSkillDirs(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => (e.isDirectory() || e.isSymbolicLink()) && existsSync(join(dir, e.name, "SKILL.md")))
    .map((e) => e.name)
    .sort();
}

/**
 * Two severities, deliberately separated.
 *
 * `problems` fail the run: a body that diverged, or a source skill that never
 * reached a mirror. Both mean the skill someone runs is not the skill someone
 * edited, and both have an unambiguous fix (reinstall, or port the edit).
 *
 * `notes` do not: a header the current installer would write differently, and a
 * mirror-only skill absent from MIRROR_ONLY_SKILLS. Neither changes what a skill
 * does, and the fix for each is a judgement call — is this skill meant to ship,
 * or meant to stay local? A person decides that; a red pre-commit does not.
 */
function checkSkillTrees() {
  const sources = listSkillDirs(SKILL_SOURCE);
  const rows = {};
  const problems = [];
  const notes = [];

  for (const skill of sources) {
    const src = readFileSync(join(SKILL_SOURCE, skill, "SKILL.md"), "utf8");
    const expected = expectedMirror(src, skill);
    rows[skill] = {};
    for (const { label, dir } of SKILL_MIRRORS) {
      const path = join(dir, skill, "SKILL.md");
      if (!existsSync(path)) {
        rows[skill][label] = "missing-in-tree";
        problems.push({ skill, tree: label, status: "missing-in-tree" });
        continue;
      }
      const actual = readFileSync(path, "utf8");
      if (actual === expected) {
        rows[skill][label] = "identical";
        continue;
      }
      const want = skillBody(expected).split("\n");
      const got = skillBody(actual).split("\n");
      if (want.join("\n") === got.join("\n")) {
        // Body matches; only the installer-owned header differs. Worth naming
        // (the mirror was not produced by the current installer) but not fatal.
        rows[skill][label] = "header-only";
        notes.push({ skill, tree: label, status: "header-only" });
        continue;
      }
      let i = 0;
      while (i < Math.max(want.length, got.length) && want[i] === got[i]) i++;
      rows[skill][label] = `BODY DRIFT (line ${i + 1})`;
      problems.push({
        skill,
        tree: label,
        status: "BODY DRIFT",
        line: i + 1,
        source: (want[i] ?? "<end of file>").slice(0, 160),
        mirror: (got[i] ?? "<end of file>").slice(0, 160),
      });
    }
  }

  const known = new Set(sources);
  const orphans = [];
  for (const { label, dir } of SKILL_MIRRORS) {
    for (const skill of listSkillDirs(dir)) {
      if (known.has(skill) || MIRROR_ONLY_SKILLS.has(skill)) continue;
      orphans.push({ skill, tree: label });
      notes.push({ skill, tree: label, status: "orphan-in-mirror" });
    }
  }

  return { sources: sources.length, rows, problems, notes, orphans };
}

const skillTrees = checkSkillTrees();

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
    skillTrees: skillTrees.problems.length
      ? `${skillTrees.problems.length} skill-tree problem(s) NOT fixed — --fix never rewrites a skill body; rerun without --fix`
      : "in sync",
    skillTreeNotes: skillTrees.notes,
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
  skillTrees: {
    sources: `skills/ (${skillTrees.sources} skills) → .claude/skills + .agents/skills`,
    problems: skillTrees.problems.length,
    perSkill: skillTrees.rows,
    detail: skillTrees.problems,
    notes: skillTrees.notes,
  },
}, null, 1));
process.exit(drifted || skillTrees.problems.length ? 1 : 0);
