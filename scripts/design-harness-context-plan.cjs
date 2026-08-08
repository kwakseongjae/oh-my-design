#!/usr/bin/env node
// Select the minimum installed OmD master context for the current handoff state.
// Provider-zero: this helper reads state only and never invokes a model.

const fs = require('node:fs');
const path = require('node:path');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd'));
const purpose = process.argv[4] || 'resume';
const handoffPath = path.join(runDir, 'handoff', '.handoff.json');
const outputPath = path.join(runDir, 'handoff', 'context-plan.json');

if (!['relay', 'resume'].includes(purpose)) {
  throw new Error(`unsupported purpose: ${purpose}`);
}

const handoff = fs.existsSync(handoffPath)
  ? JSON.parse(fs.readFileSync(handoffPath, 'utf8'))
  : { state: 'INTAKE' };
const state = String(handoff.state || 'INTAKE');
const status = handoff.status || null;
const sidecars = [];
let action = 'run_master';

if (status === 'blocked') {
  action = 'relay_blocked';
} else if (status === 'ask_user') {
  action = 'relay_questions';
} else if (purpose === 'relay' && state === 'PROPOSE_PLAN') {
  action = 'resume_master';
  sidecars.push('master-execution-phases.md');
} else if (['PROPOSE_PLAN', 'PLAN_REVIEW', 'DESIGN_GENERATION', 'SHIP_GATE', 'ARCHIVE_RUN'].includes(state)) {
  sidecars.push('master-execution-phases.md');
  if (state === 'DESIGN_GENERATION' && handoff.visual_grounding_required === true) {
    sidecars.push('master-visual-grounding.md');
  }
} else if (['SLOT_GATE', 'ASK_TEST', 'AWAIT_USER', 'CLASSIFY_SIGNAL', 'FAST_EXIT'].includes(state)) {
  sidecars.push('master-conversation.md');
} else if (state === 'INTAKE') {
  sidecars.push('master-conversation.md');
  if (!handoff.prefilled_slots) sidecars.push('master-legacy-production.md');
}

const plan = {
  schema_version: '0.1',
  state,
  status,
  purpose,
  action,
  master_required: action === 'run_master' || action === 'resume_master',
  sidecars,
  questions_file: action === 'relay_questions' ? handoff.questions_file || null : null,
  blocking_ids: action === 'relay_blocked'
    ? (handoff.blocking_items || []).map((item) => item.id)
    : [],
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(plan, null, 2)}\n`, 'utf8');
process.stdout.write(`${outputPath}\n`);
