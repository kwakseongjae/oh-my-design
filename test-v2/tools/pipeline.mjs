/**
 * The capture pipeline, as one command.
 *
 * Everything this runs already existed as a separate script, and that was the
 * problem: the order was in my head, the channel choice was a judgement call
 * made per brand, and the checks were things someone remembered to run
 * afterwards. Nine brands survived that. Hundreds will not.
 *
 *   conformance → discover? → capture (channel ladder) → ingest → cross-check
 *
 * Two deliberate properties:
 *
 *   - Conformance is a gate, not a suite. If the collectors fail on the stored
 *     archetypes, no capture runs. A red collector produces evidence that looks
 *     exactly like good evidence, which is how a sage-green Musinsa palette got
 *     as far as a planning document.
 *   - A refusal ends the ladder. Playwright first; if the site answers with a
 *     challenge or a 403, the brand is retried on the browser a person drives.
 *     If that is refused too, the brand is reported unreachable and dropped.
 *     Nothing here works around a site saying no.
 *
 *   node pipeline.mjs --targets targets.json
 *   node pipeline.mjs --targets targets.json --resume        # skip finished stages
 *   node pipeline.mjs --targets targets.json --only musinsa,toss
 *   node pipeline.mjs --targets targets.json --skip-gate     # records the bypass
 */

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");
const RUNS_ROOT = join(EVIDENCE_ROOT, "_runs");

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}
const flag = (name) => process.argv.includes(`--${name}`);

async function node(script, args, timeout = 600000) {
  const startedAt = Date.now();
  try {
    const { stdout } = await execFileAsync(process.execPath, [join(HERE, script), ...args], {
      maxBuffer: 512 * 1024 * 1024, timeout, cwd: HERE,
    });
    return { ok: true, stdout, durationMs: Date.now() - startedAt };
  } catch (e) {
    return {
      ok: false,
      stdout: e.stdout ?? "",
      error: (e.stderr || String(e)).split("\n").slice(0, 3).join(" "),
      durationMs: Date.now() - startedAt,
    };
  }
}

const lastJson = (text) => {
  // The scripts print one JSON object last; anything before it is progress.
  const start = text.lastIndexOf("\n{");
  const slice = start === -1 ? text.trim() : text.slice(start).trim();
  try { return JSON.parse(slice); } catch { return null; }
};

/* --------------------------------------------------------------- stages -- */

/**
 * Ordered by how much a site is being asked to tolerate. Playwright is a
 * headful Chrome under automation; Aside is a browser a person has open. There
 * is no third rung, on purpose — the next step up would be evading a refusal.
 */
const LADDER = [
  { channel: "playwright", script: "capture-media-evidence.mjs" },
  { channel: "aside", script: "capture-via-aside.mjs" },
];

const REFUSAL = /403|429|Access Denied|net::ERR|Timeout|challenge|captcha/i;

async function captureBrand(target, resume) {
  const evidencePath = join(EVIDENCE_ROOT, target.brand, "evidence.json");
  if (resume && existsSync(evidencePath)) {
    const prior = JSON.parse(readFileSync(evidencePath, "utf8"));
    if (!prior.error) return { stage: "capture", skipped: "already captured", channel: prior.method?.channel, capturedAt: prior.capturedAt };
  }

  const attempts = [];
  const start = target.channel ? LADDER.findIndex((r) => r.channel === target.channel) : 0;
  for (const rung of LADDER.slice(Math.max(0, start))) {
    const r = await node(rung.script, ["--brand", target.brand, "--url", target.url]);
    const out = lastJson(r.stdout);
    attempts.push({ channel: rung.channel, ok: r.ok && out?.ok !== false, seconds: +(r.durationMs / 1000).toFixed(1), error: out?.error ?? r.error ?? null });

    if (r.ok && out?.ok !== false) {
      return { stage: "capture", channel: rung.channel, attempts, surfaces: out?.surfaces ?? null };
    }
    const why = out?.error ?? r.error ?? "";
    if (!REFUSAL.test(why)) {
      // A defect in our own code is not a reason to try a different browser.
      return { stage: "capture", failed: true, reason: "capture error, not a refusal", detail: why, attempts };
    }
  }
  return { stage: "capture", failed: true, reason: "refused on every channel", attempts };
}

/* ----------------------------------------------------------------- main -- */

const targetsPath = arg("targets");
if (!targetsPath) {
  console.error("usage: pipeline.mjs --targets <file.json> [--resume] [--only a,b] [--skip-gate]");
  process.exit(1);
}
let targets = JSON.parse(readFileSync(resolve(targetsPath), "utf8"));
const only = arg("only");
if (only) {
  const want = new Set(only.split(",").map((s) => s.trim()));
  targets = targets.filter((t) => want.has(t.brand));
}
const resume = flag("resume");

const run = {
  startedAt: new Date().toISOString(),
  targets: targets.length,
  stages: {},
  brands: [],
};

/* Gate: the collectors must pass on the stored archetypes before anything is
   measured on a live site. */
if (flag("skip-gate")) {
  run.stages.conformance = { skipped: true, note: "bypassed with --skip-gate; every capture in this run is unverified by the fixture suite" };
  console.error("! conformance gate bypassed — recorded in the run report");
} else {
  const c = await node("conformance.mjs", [], 300000);
  const out = lastJson(c.stdout);
  run.stages.conformance = { passed: out?.passed ?? null, ran: out?.ran ?? null, failed: out?.failed ?? null, seconds: +(c.durationMs / 1000).toFixed(1) };
  if (!c.ok) {
    run.stages.conformance.blocking = out?.results?.filter((r) => !r.pass).map((r) => `${r.fixture}: ${r.detail}`) ?? [c.error];
    run.endedAt = new Date().toISOString();
    mkdirSync(RUNS_ROOT, { recursive: true });
    const p = join(RUNS_ROOT, `${run.startedAt.replace(/[:.]/g, "-")}.json`);
    writeFileSync(p, `${JSON.stringify(run, null, 2)}\n`, "utf8");
    console.log(JSON.stringify({ halted: "conformance gate failed — no capture ran", report: p, failures: run.stages.conformance.blocking }, null, 1));
    process.exit(1);
  }
}

for (const target of targets) {
  const brandStart = Date.now();
  const capture = await captureBrand(target, resume);
  const row = { brand: target.brand, url: target.url, capture };

  if (!capture.failed) {
    const ing = await node("ingest-captures.mjs", ["--brand", target.brand]);
    row.ingest = { ok: ing.ok, seconds: +(ing.durationMs / 1000).toFixed(1), ...(ing.ok ? {} : { error: ing.error }) };

    const xc = await node("cross-check.mjs", ["--brand", target.brand], 180000);
    const out = lastJson(xc.stdout);
    const result = out?.results?.[0];
    row.crossCheck = result
      ? { status: result.status, priority: result.priority, rows: result.rows?.map((r) => `${r.field}:${r.verdict}`) }
      : { status: "UNAVAILABLE", error: xc.error ?? "cross-check produced no result" };
  }

  row.seconds = +((Date.now() - brandStart) / 1000).toFixed(1);
  run.brands.push(row);
  console.error(`· ${target.brand}: ${capture.failed ? "FAILED" : capture.channel ?? capture.skipped} (${row.seconds}s)`);
}

run.endedAt = new Date().toISOString();
const captured = run.brands.filter((b) => !b.capture.failed);
run.summary = {
  captured: captured.length,
  failed: run.brands.length - captured.length,
  // Wave size is chosen from this. A hundred brands at 90s each is not a
  // decision anyone should make by feel.
  medianSecondsPerBrand: (() => {
    const xs = run.brands.map((b) => b.seconds).sort((a, b) => a - b);
    return xs.length ? xs[Math.floor(xs.length / 2)] : null;
  })(),
  totalMinutes: +((Date.parse(run.endedAt) - Date.parse(run.startedAt)) / 60000).toFixed(1),
  crossCheck: run.brands.reduce((acc, b) => {
    const s = b.crossCheck?.status;
    return s ? { ...acc, [s]: (acc[s] ?? 0) + 1 } : acc;
  }, {}),
  needsAttention: run.brands
    .filter((b) => b.capture.failed || (b.crossCheck && b.crossCheck.status !== "OK"))
    .map((b) => `${b.brand}: ${b.capture.failed ? b.capture.reason : b.crossCheck.status}`),
};

mkdirSync(RUNS_ROOT, { recursive: true });
const reportPath = join(RUNS_ROOT, `${run.startedAt.replace(/[:.]/g, "-")}.json`);
writeFileSync(reportPath, `${JSON.stringify(run, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ report: reportPath, ...run.summary }, null, 1));
