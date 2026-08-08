#!/usr/bin/env node
// Materialize the deterministic council ledger into the harness intake handoff.
// This helper performs no model calls and never invents missing slot values.

const fs = require('node:fs');
const path = require('node:path');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd'));
const mode = process.argv[4] || 'prepare';
const answersPath = process.argv[5] ? path.resolve(process.argv[5]) : null;
const councilDir = path.join(runDir, 'council');
const handoffDir = path.join(runDir, 'handoff');
const checkpointDir = path.join(runDir, 'checkpoints');
const handoffPath = path.join(handoffDir, '.handoff.json');
const checkpointPath = path.join(councilDir, 'intake-checkpoint.json');
const questionsPath = path.join(checkpointDir, 'council-intake.questions.json');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function relativeToRun(file) {
  return path.relative(runDir, file).split(path.sep).join('/');
}

function disposition(item) {
  return item.effective_disposition || item.disposition;
}

function ledgerPath() {
  const reconciled = path.join(councilDir, 'reconciled-ledger.json');
  const original = path.join(councilDir, 'decision-ledger.json');
  return fs.existsSync(reconciled) ? reconciled : original;
}

function questionFor(item) {
  const options = Array.isArray(item.options)
    ? item.options
      .filter((option) => option && typeof option.label === 'string' && option.label.trim())
      .slice(0, 3)
      .map((option) => ({ label: option.label.trim(), description: String(option.description || '').trim() }))
    : [];
  const question = {
    id: item.id,
    decision_id: item.id,
    slot: item.slot,
    header: String(item.slot || item.id).replaceAll('_', ' ').slice(0, 12),
    question: item.reason,
    multiSelect: false,
  };
  if (options.length >= 2) question.options = options;
  return question;
}

function baseFromLedger(ledger, sourcePath) {
  const decisions = Array.isArray(ledger.decisions) ? ledger.decisions : [];
  const prefilledSlots = {};
  const deferredSlots = [];
  const interviewItems = [];
  const blockingItems = [];

  for (const item of decisions) {
    const effective = disposition(item);
    if (effective === 'auto' && item.proposed_value !== null && item.proposed_value !== undefined) {
      prefilledSlots[item.slot] = item.proposed_value;
    } else if (effective === 'defer') {
      deferredSlots.push({ id: item.id, slot: item.slot, reason: item.reason });
    } else if (effective === 'interview') {
      interviewItems.push(item);
    } else if (effective === 'blocked') {
      blockingItems.push({
        id: item.id,
        slot: item.slot,
        reason: item.reason,
        authority: item.authority,
        evidence: Array.isArray(item.evidence) ? item.evidence : [],
      });
    }
  }

  return {
    schema_version: '0.1',
    decision_ledger_ref: relativeToRun(sourcePath),
    ctx_prime_ref: 'ctx-prime.json',
    prefilled_slots: prefilledSlots,
    deferred_slots: deferredSlots,
    interview_items: interviewItems,
    blocking_items: blockingItems,
  };
}

function prepare() {
  const sourcePath = ledgerPath();
  const base = baseFromLedger(readJson(sourcePath), sourcePath);
  const createdAt = new Date().toISOString();

  if (base.blocking_items.length > 0) {
    const handoff = {
      version: 1,
      state: 'CONTEXT_DETECT',
      status: 'blocked',
      checkpoint_kind: 'external-evidence',
      user_prose: '진행에 필요한 외부 근거가 없습니다. 아래 근거를 확인한 뒤 다시 실행해 주세요.',
      blocking_items: base.blocking_items,
      prefilled_slots: base.prefilled_slots,
      deferred_slots: base.deferred_slots,
      decision_ledger_ref: base.decision_ledger_ref,
      ctx_prime_ref: base.ctx_prime_ref,
      created_at: createdAt,
    };
    writeJson(handoffPath, handoff);
    writeJson(checkpointPath, { ...handoff, questions: [], may_proceed: false });
    if (fs.existsSync(questionsPath)) fs.rmSync(questionsPath);
    process.stdout.write(`${handoffPath}\n`);
    return;
  }

  if (base.interview_items.length > 4) {
    throw new Error(`question budget exceeded: ${base.interview_items.length} mandatory interviews`);
  }
  const questions = base.interview_items.map(questionFor);
  if (questions.length > 0) {
    const questionPacket = {
      checkpoint_id: 'council-intake',
      checkpoint_kind: 'product-authority',
      questions,
      pending_interview_ids: [],
    };
    writeJson(questionsPath, questionPacket);
    const handoff = {
      version: 1,
      state: 'AWAIT_USER',
      status: 'ask_user',
      checkpoint_id: 'council-intake',
      checkpoint_kind: 'product-authority',
      questions_file: questionsPath,
      prefilled_slots: base.prefilled_slots,
      deferred_slots: base.deferred_slots,
      decision_ledger_ref: base.decision_ledger_ref,
      ctx_prime_ref: base.ctx_prime_ref,
      created_at: createdAt,
    };
    writeJson(handoffPath, handoff);
    writeJson(checkpointPath, { ...handoff, question_count: questions.length, may_proceed: false });
    process.stdout.write(`${handoffPath}\n`);
    return;
  }

  const handoff = {
    version: 1,
    state: 'PROPOSE_PLAN',
    prefilled_slots: base.prefilled_slots,
    deferred_slots: base.deferred_slots,
    decision_ledger_ref: base.decision_ledger_ref,
    ctx_prime_ref: base.ctx_prime_ref,
    created_at: createdAt,
  };
  writeJson(handoffPath, handoff);
  writeJson(checkpointPath, { ...handoff, questions: [], may_proceed: true });
  process.stdout.write(`${handoffPath}\n`);
}

function applyAnswers() {
  if (!answersPath || !fs.existsSync(answersPath)) throw new Error('answers file is required for apply mode');
  if (!fs.existsSync(questionsPath)) throw new Error('prepared council intake questions are missing');
  const sourcePath = ledgerPath();
  const base = baseFromLedger(readJson(sourcePath), sourcePath);
  if (base.blocking_items.length > 0) throw new Error('blocked evidence cannot be replaced with interview answers');
  const packet = readJson(questionsPath);
  const raw = readJson(answersPath);
  const answers = raw.answers && typeof raw.answers === 'object' ? raw.answers : raw;
  const prefilledSlots = { ...base.prefilled_slots };
  const answeredDecisions = [];

  for (const question of packet.questions) {
    const value = answers[question.id];
    if ((typeof value !== 'string' || !value.trim()) && !Array.isArray(value)) {
      throw new Error(`missing interview answer: ${question.id}`);
    }
    const normalized = Array.isArray(value) ? value : value.trim();
    prefilledSlots[question.slot] = normalized;
    answeredDecisions.push({ id: question.decision_id, slot: question.slot, value: normalized });
  }
  if (packet.pending_interview_ids.length > 0) {
    throw new Error('question budget exhausted before all required interviews were answered');
  }

  const handoff = {
    version: 1,
    state: 'PROPOSE_PLAN',
    prefilled_slots: prefilledSlots,
    deferred_slots: base.deferred_slots,
    answered_decisions: answeredDecisions,
    decision_ledger_ref: base.decision_ledger_ref,
    ctx_prime_ref: base.ctx_prime_ref,
    answers_ref: relativeToRun(answersPath),
    created_at: new Date().toISOString(),
  };
  writeJson(handoffPath, handoff);
  writeJson(checkpointPath, { ...handoff, questions: [], may_proceed: true });
  process.stdout.write(`${handoffPath}\n`);
}

if (mode === 'prepare') prepare();
else if (mode === 'apply') applyAnswers();
else throw new Error(`unknown mode: ${mode}`);
