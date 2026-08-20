#!/usr/bin/env node
// Reconcile bounded read-only council outputs without mutating the deterministic
// decision dispositions. Uncited or disposition-expanding claims are rejected.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd'));
const councilDir = path.join(runDir, 'council');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function evidenceExists(reference) {
  if (typeof reference !== 'string' || !reference.trim() || path.isAbsolute(reference)) return false;
  const filePart = reference.split('#')[0];
  if (!filePart || filePart.split(/[\\/]/).includes('..')) return false;
  return fs.existsSync(path.resolve(runDir, filePart)) || fs.existsSync(path.resolve(cwd, filePart));
}

const ledger = readJson(path.join(councilDir, 'decision-ledger.json'));
const plan = readJson(path.join(councilDir, 'dispatch-plan.json'));
const decisions = new Map(ledger.decisions.map((item) => [item.id, item]));
const autoSnapshot = ledger.decisions
  .filter((item) => item.disposition === 'auto')
  .map((item) => ({ id: item.id, proposed_value: item.proposed_value, evidence: item.evidence }));
const autoHash = crypto.createHash('sha256').update(JSON.stringify(autoSnapshot)).digest('hex');

if (autoHash !== plan.auto_snapshot_sha256) throw new Error('automatic decision snapshot changed after dispatch planning');
if (!Array.isArray(plan.selected_lanes) || plan.selected_lanes.length > plan.max_pre_intake_calls || plan.max_pre_intake_calls > 4) {
  throw new Error('bounded council call budget exceeded');
}

const accepted = [];
const rejected = [];
for (const lane of plan.selected_lanes) {
  const outputPath = path.resolve(runDir, lane.output);
  if (!fs.existsSync(outputPath)) throw new Error(`missing council lane output: ${lane.id}`);
  const output = readJson(outputPath);
  if (output.lane_id !== lane.id || !Array.isArray(output.claims)) throw new Error(`invalid council lane output: ${lane.id}`);
  for (const claim of output.claims) {
    const decision = decisions.get(claim.decision_id);
    const allowedDecision = lane.decision_ids.includes(claim.decision_id) && decision;
    const evidence = Array.isArray(claim.evidence) ? claim.evidence : [];
    const cited = evidence.length > 0 && evidence.every(evidenceExists);
    const allowedRecommendations = plan.transition_policy[decision?.disposition] || [];
    const decisionMode = ['preserve-existing', 'choose-new', 'unknown'].includes(claim.decision_mode)
      ? claim.decision_mode
      : 'unknown';
    const authorityMode = ['preserve-existing', 'user-answerable', 'external-unverifiable', 'unknown'].includes(claim.authority_mode)
      ? claim.authority_mode
      : 'unknown';
    const modeSupportsTransition = claim.recommendation !== 'defer' || decisionMode === 'preserve-existing';
    const authoritySupportsTransition = claim.recommendation === 'defer'
      ? authorityMode === 'preserve-existing'
      : claim.recommendation === 'blocked'
        ? authorityMode === 'external-unverifiable'
        : claim.recommendation === 'interview'
          ? authorityMode === 'user-answerable' || authorityMode === 'unknown'
          : true;
    const transitionAllowed = allowedDecision && allowedRecommendations.includes(claim.recommendation)
      && modeSupportsTransition && authoritySupportsTransition;
    const autoValueStable = decision?.disposition !== 'auto'
      || (claim.recommendation === 'keep' && claim.proposed_value === decision.proposed_value);
    const normalized = {
      lane_id: lane.id,
      decision_id: claim.decision_id,
      decision_mode: decisionMode,
      authority_mode: authorityMode,
      recommendation: claim.recommendation,
      proposed_value: claim.proposed_value ?? null,
      evidence,
      reason: claim.reason ?? '',
    };
    if (!allowedDecision) rejected.push({ ...normalized, rejection: 'decision-not-assigned-to-lane' });
    else if (!cited) rejected.push({ ...normalized, rejection: 'missing-or-invalid-evidence' });
    else if (!transitionAllowed || !autoValueStable) rejected.push({ ...normalized, rejection: 'forbidden-disposition-expansion' });
    else accepted.push(normalized);
  }
}

const adviceByDecision = Object.fromEntries(ledger.decisions.map((item) => [
  item.id,
  accepted.filter((claim) => claim.decision_id === item.id),
]));
const dispositionPriority = { defer: 1, interview: 2, blocked: 3 };
function effectiveDisposition(item) {
  if (item.disposition === 'auto' || item.disposition === 'blocked') return item.disposition;
  const recommendations = adviceByDecision[item.id]
    .map((claim) => claim.recommendation)
    .filter((value) => value in dispositionPriority);
  if (recommendations.length === 0) return item.disposition;
  return recommendations.sort((a, b) => dispositionPriority[b] - dispositionPriority[a])[0];
}
const reconciledDecisions = ledger.decisions.map((item) => ({
  ...item,
  original_disposition: item.disposition,
  effective_disposition: effectiveDisposition(item),
  council_advice: adviceByDecision[item.id],
}));
const reconciledLedger = {
  ...ledger,
  policy: 'bounded-advisory-frozen-auto',
  decisions: reconciledDecisions,
  council_summary: {
    selected_lane_count: plan.selected_lanes.length,
    accepted_claim_count: accepted.length,
    rejected_claim_count: rejected.length,
    automatic_dispositions_changed: 0,
  },
};
const debate = {
  schema_version: '0.1',
  policy: plan.policy,
  selected_lanes: plan.selected_lanes.map((lane) => lane.id),
  accepted_claims: accepted,
  rejected_claims: rejected,
  automatic_dispositions_changed: 0,
  ready_for_interview: !reconciledDecisions.some((item) => item.effective_disposition === 'blocked'),
};

fs.writeFileSync(path.join(councilDir, 'debate.json'), `${JSON.stringify(debate, null, 2)}\n`);
fs.writeFileSync(path.join(councilDir, 'reconciled-ledger.json'), `${JSON.stringify(reconciledLedger, null, 2)}\n`);
process.stdout.write(`${path.join(councilDir, 'reconciled-ledger.json')}\n`);
