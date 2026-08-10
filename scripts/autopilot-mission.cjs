#!/usr/bin/env node
// Provider-free state controller for the portable OmD Autopilot workflow.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd', 'runs', 'run-autopilot'));
const command = process.argv[4] || 'advance';
const missionPath = path.join(runDir, 'mission.json');
const statePath = path.join(runDir, 'mission-state.json');
const admissionPath = path.join(runDir, 'product-build-admission.json');
const activeMissionPath = path.join(cwd, '.omd', 'autopilot-active.json');
const answersPath = path.join(runDir, 'checkpoints', 'council-intake.answers.json');

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

function sha256File(file) {
  return sha256(fs.readFileSync(file));
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function ignored(relative) {
  const first = relative.split('/')[0];
  return ['.git', '.omd', 'node_modules', 'dist', 'coverage'].includes(first);
}

function treeManifest(root) {
  const files = [];
  function visit(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const absolute = path.join(dir, entry.name);
      const relative = path.relative(root, absolute).split(path.sep).join('/');
      if (ignored(relative)) continue;
      const stat = fs.lstatSync(absolute);
      if (stat.isSymbolicLink()) {
        files.push({ path: relative, mode: 'symlink', sha256: sha256(fs.readlinkSync(absolute)) });
      } else if (entry.isDirectory()) {
        visit(absolute);
      } else if (entry.isFile()) {
        files.push({ path: relative, mode: (stat.mode & 0o111) ? '100755' : '100644', sha256: sha256File(absolute) });
      }
    }
  }
  visit(root);
  return { files, sha256: sha256(JSON.stringify(files)) };
}

function changedPaths(before, after) {
  const a = new Map(before.files.map((item) => [item.path, `${item.mode}:${item.sha256}`]));
  const b = new Map(after.files.map((item) => [item.path, `${item.mode}:${item.sha256}`]));
  return [...new Set([...a.keys(), ...b.keys()])].filter((key) => a.get(key) !== b.get(key)).sort();
}

function writeJsonAtomic(file, value, exclusive = false) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (exclusive) {
    fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
    return;
  }
  const temp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
  fs.renameSync(temp, file);
}

function relativeRunDir() {
  const relative = path.relative(cwd, runDir).split(path.sep).join('/');
  if (!relative || relative === '..' || relative.startsWith('../') || path.isAbsolute(relative)) {
    throw new Error('autopilot run directory must be inside the project root');
  }
  return relative;
}

function writeMissionMarker(status) {
  const marker = {
    schema_version: '0.1',
    workflow: 'omd-autopilot-v2',
    run_dir: relativeRunDir(),
    mission_sha256: sha256File(missionPath),
    status,
  };
  writeJsonAtomic(activeMissionPath, marker);
  return marker;
}

function assertActiveMission() {
  if (!fs.existsSync(activeMissionPath)) throw new Error('active autopilot mission marker is missing');
  const marker = readJson(activeMissionPath);
  if (marker.workflow !== 'omd-autopilot-v2'
    || marker.run_dir !== relativeRunDir()
    || marker.mission_sha256 !== sha256File(missionPath)) {
    throw new Error('active autopilot mission authority drift');
  }
  if (marker.status !== 'active') {
    throw new Error(`autopilot mission is terminal and non-resumable: ${marker.status}`);
  }
  return marker;
}

function emit(state, nextAction, evidence = {}) {
  const previous = fs.existsSync(statePath) ? sha256File(statePath) : null;
  const value = {
    schema_version: '0.1',
    mission_sha256: sha256File(missionPath),
    previous_state_sha256: previous,
    state,
    next_action: nextAction,
    evidence,
  };
  writeJsonAtomic(statePath, value);
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
  return value;
}

if (command === 'bootstrap') {
  const taskPath = path.join(runDir, 'task.md');
  if (!fs.existsSync(taskPath)) throw new Error('task.md is required before bootstrap');
  if (fs.existsSync(missionPath)) throw new Error('mission already exists');
  if (fs.existsSync(activeMissionPath)) {
    const marker = readJson(activeMissionPath);
    if (marker.status === 'active') {
      throw new Error(`another autopilot mission is already active: ${marker.run_dir}`);
    }
    if (!['completed', 'failed'].includes(marker.status)) {
      throw new Error('existing autopilot mission marker has an invalid terminal status');
    }
  }
  const initialTree = treeManifest(cwd);
  const mission = {
    schema_version: '0.1',
    workflow: 'omd-autopilot-v2',
    task_sha256: sha256File(taskPath),
    initial_product_tree_sha256: initialTree.sha256,
    initial_product_tree: initialTree.files,
    implementation_owner: 'main-agent',
    council_lane_budget: 3,
    question_batch_budget: 1,
    repair_round_budget: 2,
    guided_checkpoint_claim_allowed: false,
  };
  writeJsonAtomic(missionPath, mission, true);
  writeMissionMarker('active');
  emit('AUTHORITY_GATE', 'run-design-council-prime');
  process.exit(0);
}

if (command !== 'advance') throw new Error(`unsupported command: ${command}`);
if (!fs.existsSync(missionPath)) throw new Error('mission is missing; bootstrap first');
assertActiveMission();
const mission = readJson(missionPath);
const initialTree = { files: mission.initial_product_tree, sha256: mission.initial_product_tree_sha256 };
const currentTree = treeManifest(cwd);
const changes = changedPaths(initialTree, currentTree);
const handoffPath = path.join(runDir, 'handoff', '.handoff.json');

if (!fs.existsSync(handoffPath)) {
  if (changes.length) throw new Error(`product write before authority handoff: ${changes.join(', ')}`);
  emit('AUTHORITY_GATE', 'complete-council-handoff', { product_tree_unchanged: true });
  process.exit(0);
}

const handoff = readJson(handoffPath);
if (handoff.status === 'blocked') {
  if (changes.length) throw new Error(`product write behind blocker: ${changes.join(', ')}`);
  emit('BLOCKED', 'report-blocker', { blocking_items: handoff.blocking_items || [] });
  process.exit(0);
}
if (handoff.status === 'ask_user' || handoff.state === 'AWAIT_USER') {
  if (changes.length) throw new Error(`product write before consequential interview: ${changes.join(', ')}`);
  emit('CONSEQUENTIAL_INTERVIEW', 'relay-one-question-batch', { questions_file: handoff.questions_file || null });
  process.exit(0);
}
if (handoff.state !== 'PROPOSE_PLAN') throw new Error(`unexpected handoff state: ${handoff.state}`);
if (fs.existsSync(answersPath)) {
  const priorState = fs.existsSync(statePath) ? readJson(statePath) : null;
  if (priorState?.state !== 'CONSEQUENTIAL_INTERVIEW') {
    throw new Error('council answers exist without a recorded consequential interview');
  }
}

const councilPlanPath = path.join(runDir, 'council', 'plan.json');
const councilReceiptPath = path.join(runDir, 'council', 'reconciled.json');
if (!fs.existsSync(councilPlanPath)) {
  if (changes.length) throw new Error(`product write before bounded council plan: ${changes.join(', ')}`);
  emit('BOUNDED_COUNCIL', 'materialize-council-plan');
  process.exit(0);
}
if (!fs.existsSync(councilReceiptPath)) {
  if (changes.length) throw new Error(`product write before bounded council reconciliation: ${changes.join(', ')}`);
  emit('BOUNDED_COUNCIL', 'dispatch-read-only-lanes-and-reconcile', { council_plan_sha256: sha256File(councilPlanPath) });
  process.exit(0);
}
const councilPlan = readJson(councilPlanPath);
const councilReceipt = readJson(councilReceiptPath);
if (councilReceipt.status !== 'reconciled'
  || councilReceipt.plan_sha256 !== sha256File(councilPlanPath)
  || councilReceipt.mission_sha256 !== sha256File(missionPath)
  || councilReceipt.lane_count !== councilPlan.lane_count
  || councilReceipt.product_write_authority_granted !== false
  || councilReceipt.implementation_owner !== 'main-agent') {
  throw new Error('bounded council authority drift');
}
if (!Array.isArray(councilReceipt.results) || councilReceipt.results.length !== councilPlan.lane_count) {
  throw new Error('bounded council result-set drift');
}
for (const result of councilReceipt.results) {
  const lane = councilPlan.lanes?.find((item) => item.lane_id === result.lane_id && item.role === result.role);
  const absolute = path.resolve(runDir, result.result_path || '');
  if (!lane || absolute !== path.resolve(runDir, lane.output) || !absolute.startsWith(`${runDir}${path.sep}`)
    || !fs.existsSync(absolute) || result.result_sha256 !== sha256File(absolute)) {
    throw new Error(`bounded council result authority drift: ${result.lane_id || 'unknown'}`);
  }
}

const decisionPath = path.join(runDir, 'design-system-decision.json');
if (!fs.existsSync(decisionPath)) {
  if (changes.length) throw new Error(`product write before design-system decision: ${changes.join(', ')}`);
  emit('DESIGN_SYSTEM_DISPOSITION', 'materialize-design-system-decision');
  process.exit(0);
}

const decision = readJson(decisionPath);
const decisionSha = sha256File(decisionPath);
const existingAdmission = fs.existsSync(admissionPath) ? readJson(admissionPath) : null;
if (existingAdmission) {
  if (existingAdmission.status !== 'admitted'
    || existingAdmission.mission_sha256 !== sha256File(missionPath)
    || existingAdmission.design_system_decision_sha256 !== decisionSha
    || existingAdmission.strategy !== decision.strategy
    || existingAdmission.implementation_owner !== 'main-agent') {
    throw new Error('product-build admission authority drift');
  }
}
let systemProofSha = null;
if (decision.strategy === 'establish' || decision.strategy === 'refresh') {
  const proofPath = path.join(runDir, 'system', 'proof.json');
  if (!existingAdmission && changes.some((item) => item !== 'DESIGN.md')) {
    const unauthorized = changes.filter((item) => item !== 'DESIGN.md');
    throw new Error(`product write before system proof: ${unauthorized.join(', ')}`);
  }
  if (!fs.existsSync(proofPath) && !existingAdmission) {
    emit('SYSTEM_BUILD', 'author-design-system-and-run-proof', { allowed_preproof_changes: ['DESIGN.md'] });
    process.exit(0);
  }
  if (!fs.existsSync(proofPath)) throw new Error('admitted system proof is missing');
  const proof = readJson(proofPath);
  if (proof.pass !== true || proof.next_state !== 'PRODUCT_BUILD') {
    emit('SYSTEM_REPAIR', 'repair-design-system-proof', { proof_sha256: sha256File(proofPath) });
    process.exit(0);
  }
  if (!fs.existsSync(path.join(cwd, 'DESIGN.md')) || proof.design_md_sha256 !== sha256File(path.join(cwd, 'DESIGN.md'))) {
    throw new Error('system proof is stale relative to root DESIGN.md');
  }
  systemProofSha = sha256File(proofPath);
  if (existingAdmission && existingAdmission.system_proof_sha256 !== systemProofSha) {
    throw new Error('product-build admission system proof drift');
  }
} else if (decision.strategy === 'reuse') {
  if (!fs.existsSync(path.join(cwd, 'DESIGN.md'))) throw new Error('reuse requires root DESIGN.md');
  if (decision.authorities?.existing_design_md_sha256 !== sha256File(path.join(cwd, 'DESIGN.md'))) {
    throw new Error('reused DESIGN.md drifted after the design-system decision');
  }
} else if (decision.strategy === 'surface-local-only') {
  if (!existingAdmission && changes.length) throw new Error(`product write before local-surface admission: ${changes.join(', ')}`);
} else {
  throw new Error(`unsupported design-system strategy: ${decision.strategy}`);
}

if (!fs.existsSync(admissionPath)) {
  const admission = {
    schema_version: '0.1',
    mission_sha256: sha256File(missionPath),
    design_system_decision_sha256: decisionSha,
    system_proof_sha256: systemProofSha,
    strategy: decision.strategy,
    implementation_owner: 'main-agent',
    prebuild_product_tree_sha256: currentTree.sha256,
    status: 'admitted',
  };
  writeJsonAtomic(admissionPath, admission, true);
}

const finalProofPath = path.join(runDir, 'proof.json');
if (!fs.existsSync(finalProofPath)) {
  emit('PRODUCT_BUILD', 'implement-real-route-then-verify', { admission_sha256: sha256File(admissionPath) });
  process.exit(0);
}
const finalProof = readJson(finalProofPath);
if (finalProof.pass === true) {
  emit('HANDOFF', 'write-delivery', { proof_sha256: sha256File(finalProofPath) });
  writeMissionMarker('completed');
} else if (Number(finalProof.repair_round || 0) < mission.repair_round_budget) {
  emit('BOUNDED_REVISION', 'apply-focused-repair', { proof_sha256: sha256File(finalProofPath) });
} else {
  emit('FAILED_HANDOFF', 'report-unresolved-blocks', { proof_sha256: sha256File(finalProofPath) });
  writeMissionMarker('failed');
}
