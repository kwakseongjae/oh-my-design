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
 *   3. neon sync      serving replica catches up (fails closed without a credential)
 *   4. reclaim        finished work stops holding disk
 *
 *   node scripts/wave-close.mjs          # credential from .env.local or the env
 *   node scripts/wave-close.mjs --dry-run
 */

import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dry = process.argv.includes("--dry-run");

/**
 * Runs a step and captures its verdict without letting a failure end the run.
 *
 * `notConfigured` names the exit code a step uses for "I have nothing to work
 * with" as opposed to "I tried and it went wrong". Collapsing those two is how
 * the Neon sync spent several waves reporting a tidy skip while the replica
 * fell behind — a missing credential is a note, a failed write is a block.
 */
function step(name, argv, { optional = false, notConfigured = null, notConfiguredNote = "" } = {}) {
  if (dry) return { name, status: "dry-run", note: argv.join(" ") };
  try {
    const out = execFileSync("node", argv, { cwd: ROOT, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
    return { name, status: "ok", out: out.trim().slice(-400) };
  } catch (e) {
    const out = `${e.stdout ?? ""}${e.stderr ?? ""}`.trim().slice(-400);
    if (notConfigured !== null && e.status === notConfigured) {
      return { name, status: "skipped", note: notConfiguredNote, out };
    }
    return { name, status: optional ? "warn" : "fail", out };
  }
}

const results = [
  step("mirror-drift", [join(ROOT, "scripts", "check-mirror-drift.mjs")]),
  step("process-leak", [join(ROOT, "test-v2", "tools", "process-leak-check.mjs")], { optional: true }),
  // Whether the credential can be found is sync-neon's question, not this
  // script's. Checking process.env here meant a DATABASE_URL sitting in
  // .env.local read as absent, so every close skipped the sync with a note
  // that looked deliberate. One place knows how the credential is resolved,
  // and it says so with exit 2; anything else from it is a real failure.
  step("neon-sync", [join(ROOT, "scripts", "sync-neon.mjs")], {
    notConfigured: 2,
    notConfiguredNote: "자격증명 없음 — 서빙 복제가 뒤처진 채로 남는다. .env.local에 DATABASE_URL을 넣어라",
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
