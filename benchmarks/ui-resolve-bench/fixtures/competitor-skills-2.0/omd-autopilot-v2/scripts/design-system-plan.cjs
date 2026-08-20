#!/usr/bin/env node
// Materialize the design-system disposition selected by the deterministic
// council intake. This helper performs no model calls and never supplies a
// missing product-authority answer.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd'));
const handoffPath = path.join(runDir, 'handoff', '.handoff.json');
const outputPath = path.join(runDir, 'design-system-decision.json');
const missionPath = path.join(runDir, 'mission.json');
const REQUIRED_SYSTEM_AUTHORITY = 'core-v2-project-system';

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

function sha256File(file) {
  return sha256(fs.readFileSync(file));
}

function normalizeStrategy(value) {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().toLocaleLowerCase();
  const exact = new Map([
    ['reuse', 'reuse'],
    ['establish', 'establish'],
    ['refresh', 'refresh'],
    ['surface-local-only', 'surface-local-only'],
    ['프로젝트 디자인 시스템 구축', 'establish'],
    ['이번 surface 한정', 'surface-local-only'],
    ['build a project design system', 'establish'],
    ['keep this surface local', 'surface-local-only'],
    ['プロジェクトデザインシステムを構築', 'establish'],
    ['この画面だけに限定', 'surface-local-only'],
    ['建立项目设计系统', 'establish'],
    ['建立專案設計系統', 'establish'],
    ['仅限当前页面', 'surface-local-only'],
    ['僅限目前畫面', 'surface-local-only'],
  ]);
  return exact.get(normalized) || null;
}

if (!fs.existsSync(handoffPath)) throw new Error('council handoff is missing');
if (!fs.existsSync(missionPath)) throw new Error('autopilot mission authority is missing');
const mission = readJson(missionPath);
if (mission.workflow !== 'omd-autopilot-v2'
  || mission.required_system_authority !== REQUIRED_SYSTEM_AUTHORITY) {
  throw new Error('autopilot mission system authority drift');
}
const handoff = readJson(handoffPath);
if (handoff.status === 'blocked') throw new Error('design-system decision is blocked by missing authority or evidence');
if (handoff.status === 'ask_user' || handoff.state === 'AWAIT_USER') {
  throw new Error('design-system decision cannot be materialized before the consequential interview is answered');
}
if (handoff.state !== 'PROPOSE_PLAN') throw new Error(`unexpected council handoff state: ${handoff.state}`);
if (typeof handoff.ledger_sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(handoff.ledger_sha256)) {
  throw new Error('council handoff is missing its ledger authority');
}

const rawStrategy = handoff.prefilled_slots?.design_system_strategy;
const strategy = normalizeStrategy(rawStrategy);
if (!strategy) throw new Error('design-system strategy is unresolved or unsupported');

const answered = Array.isArray(handoff.answered_decisions)
  ? handoff.answered_decisions.find((item) => item.id === 'design-system-disposition')
  : null;
const source = answered ? 'interview-answer' : 'deterministic-ledger';
const designMdPath = path.join(cwd, 'DESIGN.md');
const designMdPresent = fs.existsSync(designMdPath);
if (strategy === 'reuse' && !designMdPresent) throw new Error('reuse requires an existing root DESIGN.md');
if (strategy === 'establish' && designMdPresent) {
  throw new Error('establish cannot overwrite an existing DESIGN.md; use reuse or explicit refresh');
}

const taskPath = path.join(runDir, 'task.md');
const receipt = {
  schema_version: '0.1',
  status: 'ready',
  strategy,
  required_system_authority: REQUIRED_SYSTEM_AUTHORITY,
  source,
  implementation_owner: 'main-agent',
  reference_selection_allowed: strategy === 'establish' || strategy === 'refresh',
  root_design_md_write_allowed: strategy === 'establish' || strategy === 'refresh',
  local_decisions_promotable_to_project_facts: strategy !== 'surface-local-only',
  authorities: {
    task_sha256: fs.existsSync(taskPath) ? sha256File(taskPath) : null,
    ledger_sha256: handoff.ledger_sha256,
    answers_ref: handoff.answers_ref || null,
    existing_design_md_sha256: designMdPresent ? sha256File(designMdPath) : null,
  },
  next_state: strategy === 'reuse'
    ? 'SYSTEM_REUSE'
    : strategy === 'surface-local-only'
      ? 'LOCAL_SURFACE_CONTRACT'
      : 'SYSTEM_BUILD',
  unknown_policy: 'absent-at-smallest-boundary',
};

fs.writeFileSync(outputPath, `${JSON.stringify(receipt, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
process.stdout.write(`${outputPath}\n`);
