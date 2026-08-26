/**
 * Everything that must be true when a migration wave closes, in one command.
 *
 * These checks existed already but were run by hand, which meant they were run
 * when someone remembered. Neon drifted six rows behind before anyone looked;
 * the design-md mirror drifted once before that. A wave is the natural moment
 * to reconcile, so this bundles the reconciliation and reports one verdict.
 *
 * What it does, in order — later steps still run if an earlier one fails, so a
 * single run tells you everything that is wrong rather than the first thing:
 *
 *   1. mirror drift   web/references vs design-md must be byte-identical
 *   2. process leak   migration vocabulary must not sit in portable bodies
 *   3. neon sync      serving replica catches up (skipped without DATABASE_URL)
 *   4. reclaim        finished work stops holding disk
 *
 *   DATABASE_URL=postgres://... node scripts/wave-close.mjs
 *   node scripts/wave-close.mjs --dry-run
 */

import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dry = process.argv.includes("--dry-run");

/** Runs a step and captures its verdict without letting a failure end the run. */
function step(name, argv, { optional = false, skipIf = false, skipNote = "" } = {}) {
  if (skipIf) return { name, status: "skipped", note: skipNote };
  if (dry) return { name, status: "dry-run", note: argv.join(" ") };
  try {
    const out = execFileSync("node", argv, { cwd: ROOT, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
    return { name, status: "ok", out: out.trim().slice(-400) };
  } catch (e) {
    const out = `${e.stdout ?? ""}${e.stderr ?? ""}`.trim().slice(-400);
    return { name, status: optional ? "warn" : "fail", out };
  }
}

const results = [
  step("mirror-drift", [join(ROOT, "scripts", "check-mirror-drift.mjs")]),
  step("process-leak", [join(ROOT, "test-v2", "tools", "process-leak-check.mjs")], { optional: true }),
  step("neon-sync", [join(ROOT, "scripts", "sync-neon.mjs")], {
    skipIf: !process.env.DATABASE_URL,
    skipNote: "DATABASE_URL 없음 — 서빙 복제가 뒤처진 채로 남는다",
  }),
  step("reclaim", [join(ROOT, "scripts", "reclaim-disk.mjs"), "--run"], { optional: true }),
];

const failed = results.filter((r) => r.status === "fail");
console.log(JSON.stringify({
  verdict: failed.length ? "BLOCKED" : "OK",
  steps: results.map(({ name, status, note }) => ({ name, status, ...(note ? { note } : {}) })),
  failures: failed.map((r) => ({ step: r.name, out: r.out })),
}, null, 1));
process.exit(failed.length ? 1 : 0);
