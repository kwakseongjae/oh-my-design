#!/usr/bin/env node
// Deterministic read-only adviser plan for OmD Autopilot.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd', 'runs', 'run-autopilot'));
const planPath = path.join(runDir, 'council', 'plan.json');

function sha256(bytes) { return crypto.createHash('sha256').update(bytes).digest('hex'); }
function shaFile(file) { return sha256(fs.readFileSync(file)); }
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function required(file, label) { if (!fs.existsSync(file)) throw new Error(`${label} is missing`); return file; }

if (fs.existsSync(planPath)) throw new Error(`exclusive council plan already exists: ${planPath}`);
const missionPath = required(path.join(runDir, 'mission.json'), 'mission');
const ledgerPath = required(path.join(runDir, 'council', 'decision-ledger.json'), 'decision ledger');
const handoffPath = required(path.join(runDir, 'handoff', '.handoff.json'), 'council handoff');
const taskPath = required(path.join(runDir, 'task.md'), 'task');
const mission = readJson(missionPath);
const ledger = readJson(ledgerPath);
const handoff = readJson(handoffPath);
if (handoff.state !== 'PROPOSE_PLAN') throw new Error(`council plan requires PROPOSE_PLAN, received ${handoff.state}`);
if (handoff.ledger_sha256 !== shaFile(ledgerPath)) throw new Error('handoff ledger authority drift');
const systemDecision = ledger.decisions?.find((item) => item.id === 'design-system-disposition');
if (!systemDecision || !['reuse', 'establish', 'refresh', 'surface-local-only'].includes(systemDecision.proposed_value)) {
  throw new Error('resolved design-system disposition is required');
}

const lanes = [];
if (['establish', 'refresh'].includes(systemDecision.proposed_value)) {
  lanes.push({
    lane_id: 'design-system', role: 'omd-design-system-architect',
    objective: 'Propose a project-specific semantic system, component/state coverage, provenance, and unresolved decisions.',
    output: 'council/design-system/result.json',
  });
}
lanes.push({
  lane_id: 'interaction', role: 'omd-ux-engineer',
  objective: 'Challenge the primary journey, state model, responsive behavior, keyboard contract, and failure recovery.',
  output: 'council/interaction/result.json',
});
const task = fs.readFileSync(taskPath, 'utf8');
const needsLocaleCopy = /locale|language|한국어|영어|일본어|중국어|대만어|copy|voice/i.test(task);
const needsExternalEvidence = /official|공식|brand|브랜드|reference|레퍼런스|competitor|경쟁|regulated|규제|compliance|legal|medical|financial|evidence source|근거 출처/i.test(task);
if (needsLocaleCopy) {
  lanes.push({
    lane_id: 'locale-copy', role: 'omd-ux-writer',
    objective: 'Identify locale, expansion, terminology, and product-copy risks without inventing product facts.',
    output: 'council/locale-copy/result.json',
  });
} else if (needsExternalEvidence) {
  lanes.push({
    lane_id: 'evidence-unknown', role: 'omd-ux-researcher',
    objective: 'Separate prompt/repository evidence from proposals and unresolved product-owner facts.',
    output: 'council/evidence-unknown/result.json',
  });
}
if (lanes.length > Number(mission.council_lane_budget)) throw new Error('council lane budget exceeded');
const normalized = lanes.map((lane, index) => ({
  ...lane, order: index + 1, product_write_allowed: false, design_md_write_allowed: false,
  allowed_write_path: lane.output, required_evidence: ['task.md', 'council/decision-ledger.json'],
  result_contract: {
    schema_version: '0.1', status: 'complete', product_files_written: 0, design_md_written: false,
    exact_keys: ['schema_version', 'lane_id', 'role', 'status', 'findings', 'proposals', 'unresolved', 'product_files_written', 'design_md_written'],
  },
  status: 'planned',
}));
const plan = {
  schema_version: '0.2', mission_sha256: shaFile(missionPath), task_sha256: shaFile(taskPath),
  ledger_sha256: shaFile(ledgerPath), strategy: systemDecision.proposed_value,
  lane_budget: mission.council_lane_budget, lane_count: normalized.length, implementation_owner: 'main-agent',
  lane_attempt_budget: mission.council_lane_attempt_budget,
  result_repair_budget: mission.council_result_repair_budget,
  coordination_call_budget: normalized.length * 2,
  lanes: normalized, provider_calls_at_plan_time: 0,
};
fs.mkdirSync(path.dirname(planPath), { recursive: true });
fs.writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
process.stdout.write(`${JSON.stringify(plan, null, 2)}\n`);
