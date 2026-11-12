#!/usr/bin/env node
/**
 * Summarise scripts/t1/remeasure.mjs results: per site and in total, how many compared fields agree with the
 * baseline and between consecutive runs, and which fields changed.
 *
 *   node scripts/t1/summary.mjs [<dir>] [--changes]      <dir> defaults to ~/.omd-workers/t1-stability
 *
 * A field is "stable" for a site when it agrees with the baseline in every run that measured it.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const root = args[0] ?? path.join(os.homedir(), ".omd-workers/t1-stability");
const rows = readdirSync(root).filter((d) => existsSync(path.join(root, d, "result.json"))).sort()
  .map((d) => JSON.parse(readFileSync(path.join(root, d, "result.json"), "utf8")));
const tot = { sites: 0, blocked: 0, runs: 0, compared: 0, same: 0, prevCompared: 0, prevSame: 0, unmeasured: 0, missing: 0 };
const changes = [];
console.log("site\truns\tblocked\tcontrols\tvs baseline\tvs previous run\tunmeasured on one side\tcontrols missing\tfields that changed");
for (const r of rows) {
  const ok = r.runs.filter((x) => x.againstBaseline);
  const sum = (f) => ok.reduce((a, x) => a + f(x), 0);
  const blocked = r.runs.filter((x) => x.blocked).length;
  const c = sum((x) => x.againstBaseline.compared), s = sum((x) => x.againstBaseline.same);
  const pc = sum((x) => x.againstPrevious?.compared ?? 0), ps = sum((x) => x.againstPrevious?.same ?? 0);
  const un = sum((x) => x.againstBaseline.unmeasured.length), mi = sum((x) => x.againstBaseline.missing.length);
  const fields = new Map();
  for (const x of ok) for (const ch of x.againstBaseline.changed) fields.set(`${ch.key} ${ch.field}`, (fields.get(`${ch.key} ${ch.field}`) ?? 0) + 1);
  for (const [f, n] of fields) changes.push({ id: r.id, field: f, runs: n, of: ok.length, sample: ok.flatMap((x) => x.againstBaseline.changed).find((ch) => `${ch.key} ${ch.field}` === f) });
  tot.sites += 1; tot.blocked += blocked === r.runs.length ? 1 : 0; tot.runs += ok.length; tot.compared += c; tot.same += s; tot.prevCompared += pc; tot.prevSame += ps; tot.unmeasured += un; tot.missing += mi;
  console.log([r.id, r.runs.length, blocked, r.controls, c ? `${s}/${c}` : "—", pc ? `${ps}/${pc}` : "—", un, mi, [...fields.keys()].join("; ") || "—"].join("\t"));
}
const pct = (a, b) => (b ? `${a}/${b} (${(100 * a / b).toFixed(1)}%)` : "—");
console.log(`\n${tot.sites} site(s), ${tot.blocked} blocked in every run, ${tot.runs} measured run(s)`);
console.log(`agree with the baseline: ${pct(tot.same, tot.compared)} · agree with the previous run: ${pct(tot.prevSame, tot.prevCompared)}`);
console.log(`states unmeasured on one side: ${tot.unmeasured} · controls not found: ${tot.missing}`);
if (process.argv.includes("--changes")) {
  console.log("\nchanged fields (site, field, in how many runs, baseline -> run):");
  for (const c of changes) console.log(`  ${c.id}\t${c.field}\t${c.runs}/${c.of}\t${JSON.stringify(c.sample.before)?.slice(0, 90)} -> ${JSON.stringify(c.sample.after)?.slice(0, 90)}`);
}
