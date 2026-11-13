#!/usr/bin/env node
/**
 * Re-measure a reference's pinned controls with no model and no window, and report what changed (docs/ROADMAP.md T1).
 *
 *   node scripts/t1/remeasure.mjs <id> [--runs 3] [--out <dir>] [--evidence <root>] [--prior <dir>]
 *
 * Baseline: the reference's latest capture session under artifacts/reference-evidence/visual/<id>/ (local-only, in
 * the main checkout), compiled by web/scripts/compile-evidence.mjs into the pinned list (url, locale, controls,
 * close selectors) and its values. Each run then repeats every states call of that session as it was made (one
 * page load per cfg.json, with its controls, close selectors and overlay flag), headless
 * (web/scripts/probe-keyboard-states.mjs --browser headless), compiles the result the same way and compares field
 * by field (web/scripts/diff-values.mjs) against the baseline and against the run before it. Putting the controls
 * of two calls into one load is not the same measurement: the keyboard walk stops short and states go unmeasured.
 *
 * Writes <dir>/<id>/: baseline/{measure,values}.json, run-N/call-M/{cfg,states}.json + summary.txt,
 * run-N/values.json, result.json.
 * <dir> defaults to ~/.omd-workers/t1-stability. A blocked page (probe exit 4) is recorded as blocked and is not
 * retried another way. An unmeasured state is reported as unmeasured, never as a change.
 *
 * --prior <dir> is the <dir> of an earlier re-measurement. Its last run of this id stands in as "the run before" for
 * run 1, so the result carries two comparisons: against the capture (often taken in a window: another pixel ratio,
 * scrollbar width and fallback font) and against the last headless run (the same browser both times). A field that
 * differs from the capture but agrees with the last run is a browser difference; one that differs from both moved
 * on the site between the two runs.
 */
import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { compileControl, measureSpec, mergeControls, valuesOf } from "../../web/scripts/compile-evidence.mjs";
import { diffValues } from "../../web/scripts/diff-values.mjs";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const MAIN = path.dirname(execFileSync("git", ["-C", REPO, "rev-parse", "--path-format=absolute", "--git-common-dir"], { encoding: "utf8" }).trim());
const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(name); return i === -1 ? fallback : args.splice(i, 2)[1]; };
const runs = Number(opt("--runs", 3));
const outRoot = opt("--out", path.join(os.homedir(), ".omd-workers/t1-stability"));
const priorRoot = opt("--prior", null);
const evRoot = opt("--evidence", path.join(MAIN, "artifacts/reference-evidence/visual"));
const id = args[0];
if (!id) { console.error("usage: remeasure.mjs <id> [--runs 3] [--out <dir>] [--evidence <root>] [--prior <dir>]"); process.exit(2); }

const read = (f) => JSON.parse(readFileSync(f, "utf8"));
const stampMs = (s) => Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8), +s.slice(9, 11), +s.slice(11, 13), +s.slice(13, 15));
/** Survey, states and cfg files of the given capture folders, compiled. */
function compile(folders) {
  let survey = null; const states = [], cfgs = [];
  for (const f of folders) {
    if (existsSync(path.join(f, "survey.json"))) survey = read(path.join(f, "survey.json"));
    if (existsSync(path.join(f, "states.json"))) states.push(read(path.join(f, "states.json")));
    if (existsSync(path.join(f, "cfg.json"))) cfgs.push(read(path.join(f, "cfg.json")));
  }
  const controls = mergeControls(states);
  return { spec: measureSpec(id, survey, states, cfgs), values: valuesOf(controls, controls.map(compileControl)) };
}

const evDir = path.join(evRoot, id);
const stamps = existsSync(evDir) ? readdirSync(evDir).filter((n) => /^\d{8}-\d{6}$/.test(n)).sort() : [];
const withStates = stamps.filter((s) => existsSync(path.join(evDir, s, "states.json")) && existsSync(path.join(evDir, s, "cfg.json")));
if (!withStates.length) { console.error(`${id}: no states capture with a cfg under ${evDir}`); process.exit(2); }
// One capture session: every folder within three hours before the newest states folder.
const newest = stampMs(withStates.at(-1));
const session = stamps.filter((s) => stampMs(s) <= newest && newest - stampMs(s) <= 3 * 3600e3);
const base = compile(session.map((s) => path.join(evDir, s)));
if (!base.spec.url || !base.spec.controls.length) { console.error(`${id}: the capture has no url or no controls to pin`); process.exit(2); }

const out = path.join(outRoot, id);
mkdirSync(path.join(out, "baseline"), { recursive: true });
writeFileSync(path.join(out, "baseline/measure.json"), JSON.stringify(base.spec, null, 1) + "\n");
writeFileSync(path.join(out, "baseline/values.json"), JSON.stringify(base.values, null, 1) + "\n");

// One entry per states call of the session: its own cfg, and the url and locale its states.json recorded.
const calls = session.map((st) => path.join(evDir, st)).filter((f) => existsSync(path.join(f, "states.json")) && existsSync(path.join(f, "cfg.json")))
  .map((f) => ({ cfg: read(path.join(f, "cfg.json")), boot: read(path.join(f, "states.json")).boot ?? {} }));
const result = { id, url: base.spec.url, locale: base.spec.locale, baseline: session, controls: base.spec.controls.length, calls: calls.length, runs: [] };
let previous = null;
if (priorRoot) {
  const pdir = path.join(priorRoot, id);
  const last = existsSync(pdir) ? readdirSync(pdir).filter((n) => /^run-\d+$/.test(n) && existsSync(path.join(pdir, n, "values.json"))).sort((a, b) => a.slice(4) - b.slice(4)).at(-1) : null;
  if (last) { previous = read(path.join(pdir, last, "values.json")); result.prior = path.join(pdir, last); }
}
for (let k = 1; k <= runs; k += 1) {
  const dir = path.join(out, `run-${k}`);
  const started = new Date().toISOString();
  const exits = [], dirs = [];
  calls.forEach((call, j) => {
    const cdir = path.join(dir, `call-${j + 1}`);
    mkdirSync(cdir, { recursive: true });
    writeFileSync(path.join(cdir, "cfg.json"), JSON.stringify(call.cfg, null, 1) + "\n");
    const flags = [call.boot.url ?? base.spec.url, "--cfg", path.join(cdir, "cfg.json"), "--locale", call.boot.locale ?? base.spec.locale ?? "ko-KR",
      "--browser", "headless", "--out", path.join(cdir, "states.json"), "--quiet", "--summary"];
    if (call.cfg.close?.length) flags.push("--close", call.cfg.close.join(","));
    if (call.cfg.hideOverlays) flags.push("--hide-overlays");
    const p = spawnSync(process.execPath, [path.join(REPO, "web/scripts/probe-keyboard-states.mjs"), ...flags], { cwd: path.join(REPO, "web"), encoding: "utf8", timeout: 12 * 60e3 });
    writeFileSync(path.join(cdir, "summary.txt"), (p.stdout ?? "") + (p.stderr ?? ""));
    exits.push(p.status);
    if (p.status !== 4 && existsSync(path.join(cdir, "states.json"))) dirs.push(cdir);
  });
  const run = { run: k, started, exits, blocked: exits.every((e) => e === 4) };
  if (dirs.length) {
    const now = compile(dirs);
    writeFileSync(path.join(dir, "values.json"), JSON.stringify(now.values, null, 1) + "\n");
    const pick = (d) => ({ compared: d.compared, same: d.same, changed: d.changed, unmeasured: d.unmeasured, missing: d.missing });
    run.againstBaseline = pick(diffValues(base.values, now.values));
    if (previous) run.againstPrevious = pick(diffValues(previous, now.values));
    previous = now.values;
  }
  result.runs.push(run);
  const b = run.againstBaseline, pv = run.againstPrevious;
  console.log(`${id} run ${k}: ` + (run.blocked ? "BLOCKED" : b ? `${b.same}/${b.compared} agree with the baseline, ${b.changed.length} changed, ${b.unmeasured.length} unmeasured on one side, ${b.missing.length} control(s) missing` : `no measurement (exits ${exits.join(",")})`) + (pv ? `; ${pv.same}/${pv.compared} agree with the ${k === 1 ? "last headless run" : "run before"}` : ""));
}
writeFileSync(path.join(out, "result.json"), JSON.stringify(result, null, 1) + "\n");
