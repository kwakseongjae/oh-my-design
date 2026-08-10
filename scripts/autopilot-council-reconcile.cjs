#!/usr/bin/env node
// Reconciles immutable adviser results without granting product-write authority.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd', 'runs', 'run-autopilot'));
const planPath = path.join(runDir, 'council', 'plan.json');
const outPath = path.join(runDir, 'council', 'reconciled.json');
function sha256(bytes) { return crypto.createHash('sha256').update(bytes).digest('hex'); }
function shaFile(file) { return sha256(fs.readFileSync(file)); }
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
if (!fs.existsSync(planPath)) throw new Error('council plan is missing');
if (fs.existsSync(outPath)) throw new Error(`exclusive council reconciliation already exists: ${outPath}`);
const plan = readJson(planPath);
const results = [];
for (const lane of plan.lanes || []) {
  const file = path.join(runDir, lane.output);
  if (!fs.existsSync(file)) throw new Error(`council lane result is missing: ${lane.lane_id}`);
  const result = readJson(file);
  const exactKeys = ['schema_version', 'lane_id', 'role', 'status', 'findings', 'proposals', 'unresolved', 'product_files_written', 'design_md_written'];
  if (Object.keys(result).sort().join('|') !== exactKeys.sort().join('|')) throw new Error(`council result shape drift: ${lane.lane_id}`);
  if (result.schema_version !== '0.1' || result.lane_id !== lane.lane_id || result.role !== lane.role || result.status !== 'complete') {
    throw new Error(`council result identity drift: ${lane.lane_id}`);
  }
  if (!Array.isArray(result.findings) || !Array.isArray(result.proposals) || !Array.isArray(result.unresolved)) throw new Error(`council result arrays missing: ${lane.lane_id}`);
  if (result.product_files_written !== 0 || result.design_md_written !== false) throw new Error(`adviser write-boundary violation: ${lane.lane_id}`);
  results.push({ lane_id: lane.lane_id, role: lane.role, result_path: lane.output, result_sha256: shaFile(file) });
}
const receipt = {
  schema_version: '0.1', plan_sha256: shaFile(planPath), mission_sha256: plan.mission_sha256,
  task_sha256: plan.task_sha256, ledger_sha256: plan.ledger_sha256, implementation_owner: 'main-agent',
  lane_count: results.length, results, product_write_authority_granted: false, status: 'reconciled',
};
fs.writeFileSync(outPath, `${JSON.stringify(receipt, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
process.stdout.write(`${JSON.stringify(receipt, null, 2)}\n`);
