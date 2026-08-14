#!/usr/bin/env node
// verify-grok46-smoke-evidence.mjs
// AC5 validation for the grok-4.6 benchmark lane (WP1–WP4 of
// docs/OMD_2_0_GROK_RESTART_SEED.md).
//
// Asserts, provider-zero (no live calls):
//   1. The two permitted smoke-call receipts + raw output exist in the workspace.
//   2. Every evidence file matches its recorded SHA-256 (SHA256SUMS manifest).
//   3. The raw run-result / events SHA-256 match the SMOKE-EVIDENCE-SUMMARY
//      declared hashes byte-for-byte (no tampering, no fabrication).
//   4. Both smoke calls passed cleanly with retry_count 0, model grok-4.6,
//      no substitution/fallback, infrastructure_invalid false, and the smoke
//      budget is exactly 2/2 (excluded from the benchmark denominator).
//   5. docs/CURRENT_STATE.md and docs/JOURNAL.md record the lane completion
//      state with the next exact action being WP5 pending user approval.
//
// Exit 0 = all assertions hold. Exit 1 = any failure (fail-close).

import { readFileSync, existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, '..', '..', '..');
const EVID = join(
  REPO,
  'benchmarks/ui-resolve-bench/reports/grok46-lane-smoke-evidence'
);

let failures = 0;
let checks = 0;
function ok(msg) {
  checks++;
  console.log(`PASS ${msg}`);
}
function fail(msg) {
  checks++;
  failures++;
  console.error(`FAIL ${msg}`);
}
function assert(cond, msg) {
  if (cond) ok(msg);
  else fail(msg);
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}
function readText(path) {
  return readFileSync(path, 'utf8');
}
function readJson(path) {
  return JSON.parse(readText(path));
}

// ---------------------------------------------------------------------------
// 0. Evidence directory present
// ---------------------------------------------------------------------------
assert(
  existsSync(EVID) && statSync(EVID).isDirectory(),
  `evidence dir exists: ${EVID}`
);

// ---------------------------------------------------------------------------
// 1. Raw output + receipts present (per call)
// ---------------------------------------------------------------------------
const RAW_FILES = [
  'PROMPT.md',
  'events.jsonl',
  'final-message.txt',
  'run-result.json',
  'manifest.json',
  'models-cache.post-provider.bin',
  'stderr.log',
];
for (const call of ['smoke-01', 'smoke-02']) {
  for (const f of RAW_FILES) {
    const p = join(EVID, call, '.benchmark', f);
    assert(existsSync(p) && statSync(p).size >= 0, `${call} raw output present: ${f}`);
  }
}
const RECEIPTS = [
  'STATIC-RUNTIME-CAPABILITY.json',
  'RUNTIME-ATTRIBUTION-PREFLIGHT.json',
  'GROK-BUILD-CLI-IDENTITY.json',
  'EVALUATION-RUNTIME-RECEIPT.json',
  'SMOKE-02-SUPPLEMENT.json',
  'SMOKE-EVIDENCE-SUMMARY.json',
];
for (const r of RECEIPTS) {
  assert(existsSync(join(EVID, 'receipts', r)), `receipt present: ${r}`);
}

// ---------------------------------------------------------------------------
// 2. SHA256SUMS manifest matches on-disk bytes for every file
// ---------------------------------------------------------------------------
const sumsPath = join(EVID, 'SHA256SUMS');
assert(existsSync(sumsPath), 'SHA256SUMS manifest present');
if (existsSync(sumsPath)) {
  const lines = readText(sumsPath)
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  assert(lines.length >= 20, `SHA256SUMS lists >=20 files (got ${lines.length})`);
  let manifestOk = true;
  for (const line of lines) {
    const m = line.match(/^([0-9a-f]{64})\s+(?:\*|\s)?(.+)$/);
    if (!m) {
      manifestOk = false;
      fail(`SHA256SUMS unparsable line: ${line}`);
      continue;
    }
    const [, want, relRaw] = m;
    const rel = relRaw.replace(/^\.\//, '');
    const abs = join(EVID, rel);
    if (!existsSync(abs)) {
      manifestOk = false;
      fail(`SHA256SUMS references missing file: ${rel}`);
      continue;
    }
    const got = sha256(abs);
    if (got !== want) {
      manifestOk = false;
      fail(`SHA256 mismatch for ${rel}: manifest ${want} != disk ${got}`);
    }
  }
  assert(manifestOk, 'every SHA256SUMS entry matches on-disk bytes');
}

// ---------------------------------------------------------------------------
// 3. Summary-declared raw hashes match on-disk raw output byte-for-byte
// ---------------------------------------------------------------------------
const summary = readJson(join(EVID, 'receipts', 'SMOKE-EVIDENCE-SUMMARY.json'));
const declared = {
  'smoke-01': {
    run_result: summary?.smoke_calls?.call_01?.run_result_sha256,
    events: summary?.smoke_calls?.call_01?.events_sha256,
    prompt: summary?.smoke_calls?.call_01?.prompt,
    response: summary?.smoke_calls?.call_01?.response,
  },
  'smoke-02': {
    run_result: summary?.smoke_calls?.call_02?.run_result_sha256,
    events: summary?.smoke_calls?.call_02?.events_sha256,
    prompt: summary?.smoke_calls?.call_02?.prompt,
    response: summary?.smoke_calls?.call_02?.response,
  },
};
for (const call of ['smoke-01', 'smoke-02']) {
  const rr = sha256(join(EVID, call, '.benchmark', 'run-result.json'));
  const ev = sha256(join(EVID, call, '.benchmark', 'events.jsonl'));
  assert(rr === declared[call].run_result, `${call} run-result SHA matches summary`);
  assert(ev === declared[call].events, `${call} events SHA matches summary`);
}

// ---------------------------------------------------------------------------
// 4. Both smoke calls clean; grok-4.6, retry_count 0, no substitution/fallback
// ---------------------------------------------------------------------------
const expectResp = { 'smoke-01': 'SMOKE-PASS-1', 'smoke-02': 'SMOKE-PASS-2' };
for (const call of ['smoke-01', 'smoke-02']) {
  const rr = readJson(join(EVID, call, '.benchmark', 'run-result.json'));
  const finalMsg = readText(join(EVID, call, '.benchmark', 'final-message.txt')).trim();
  assert(finalMsg === expectResp[call], `${call} final message == ${expectResp[call]}`);
  assert(rr?.process?.exit_code === 0, `${call} exit_code == 0`);
  assert(rr?.process?.infrastructure_invalid === false, `${call} infrastructure_invalid == false`);
  assert(rr?.runtime?.model === 'grok-4.6', `${call} model == grok-4.6`);
  assert(rr?.runtime?.model_requested === 'grok-4.6', `${call} model_requested == grok-4.6`);
  assert(rr?.runtime?.retry_count === 0, `${call} retry_count == 0`);
  assert(rr?.runtime?.model_substitution_count === 0, `${call} model_substitution_count == 0`);
  assert(rr?.runtime?.fallback_count === 0, `${call} fallback_count == 0`);
  assert(rr?.runtime?.auth_mode === 'isolated-home-frozen-auth-copy', `${call} isolated frozen-auth mode`);
  assert(rr?.runtime?.cache_integrity?.pass === true, `${call} cache byte-gate pass`);
}
assert(summary?.smoke_calls?.total === 2, 'smoke total == 2');
assert(summary?.smoke_calls?.budget_used === 2, 'smoke budget_used == 2');
assert(summary?.smoke_calls?.budget_allowed === 2, 'smoke budget_allowed == 2');
assert(summary?.denominator_calls === 0, 'smoke calls excluded from denominator (== 0)');
assert(
  typeof summary?.lane_status === 'string' && /pending-wp5/i.test(summary.lane_status),
  'lane_status is smoke-validated-pending-wp5-approval'
);

// ---------------------------------------------------------------------------
// 5. Docs record lane completion + next exact action WP5 pending user approval
// ---------------------------------------------------------------------------
for (const doc of ['docs/CURRENT_STATE.md', 'docs/JOURNAL.md']) {
  const p = join(REPO, doc);
  assert(existsSync(p), `${doc} exists`);
  if (!existsSync(p)) continue;
  const text = readText(p);
  assert(/WP5/.test(text), `${doc} mentions WP5`);
  assert(
    /WP5[^\n]*(승인|approval)/i.test(text) || /(승인|approval)[^\n]*WP5/i.test(text),
    `${doc} records WP5 pending user approval as next action`
  );
  assert(/grok-4\.6/i.test(text), `${doc} references grok-4.6 lane`);
}

// ---------------------------------------------------------------------------
console.log(`\n${checks - failures}/${checks} checks passed.`);
if (failures > 0) {
  console.error(`\n${failures} FAILURE(S) — grok46 smoke evidence NOT verified.`);
  process.exit(1);
}
console.log('grok46 smoke evidence verified: 2/2 receipts + raw output + SHA-256, docs record WP5-pending-approval.');
process.exit(0);
