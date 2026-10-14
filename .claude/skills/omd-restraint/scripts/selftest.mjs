#!/usr/bin/env node
// Self-test for audit.mjs: the busy fixture must FAIL, the restrained fixture must PASS.
//   node selftest.mjs        (exit 0 = both behaved, 1 = the meter is broken, 3 = no browser)
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const audit = path.join(here, 'audit.mjs');
const cases = [
  { file: 'restrained.html', expect: 'PASS' },
  { file: 'busy.html', expect: 'FAIL', minFails: 6 },
];
let broken = 0;
for (const c of cases) {
  const run = spawnSync(process.execPath, [audit, path.join(here, 'fixtures', c.file), '--json'], { encoding: 'utf-8', maxBuffer: 64 << 20 });
  if (run.status === 3) { process.stderr.write(run.stderr); process.exit(3); }
  let report;
  try { report = JSON.parse(run.stdout); } catch { console.error(`${c.file}: audit printed no JSON\n${run.stderr}`); broken++; continue; }
  const ok = report.verdict === c.expect && (!c.minFails || report.fails.length >= c.minFails);
  console.log(`${ok ? 'ok  ' : 'BAD '} ${c.file}: ${report.verdict}${report.fails.length ? ` (${report.fails.join(', ')})` : ''} — expected ${c.expect}${c.minFails ? ` with >= ${c.minFails} failing rules` : ''}`);
  if (!ok) broken++;
}
process.exit(broken ? 1 : 0);
