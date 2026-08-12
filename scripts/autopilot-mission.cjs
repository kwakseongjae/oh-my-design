#!/usr/bin/env node
// Provider-free state controller for the portable OmD Autopilot workflow.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { validateCoreGraph, validateCoreManifest } = require('./design-md-core-schema.cjs');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd', 'runs', 'run-autopilot'));
const command = process.argv[4] || 'advance';
const missionPath = path.join(runDir, 'mission.json');
const statePath = path.join(runDir, 'mission-state.json');
const admissionPath = path.join(runDir, 'product-build-admission.json');
const acceptancePath = path.join(runDir, 'acceptance-plan.json');
const repairsDir = path.join(runDir, 'repairs');
const activeMissionPath = path.join(cwd, '.omd', 'autopilot-active.json');
const answersPath = path.join(runDir, 'checkpoints', 'council-intake.answers.json');
const externalVerificationPolicyPath = path.join(cwd, '.benchmark', 'controller-verification-policy.json');
const externalVerificationDir = path.join(runDir, 'controller-verification');

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
  return ['.git', '.omd', '.benchmark', 'node_modules', 'dist', 'coverage'].includes(first);
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

const REQUIRED_STATES = ['default', 'loading', 'empty', 'error', 'success', 'disabled'];
const REQUIRED_VIEWPORTS = ['1440x900', '390x844', '320x720', '720x450-reflow-200pct'];
const REQUIRED_QUALITY_CHECKS = [
  'functionality', 'task-journey', 'responsive-1440', 'responsive-390', 'responsive-320',
  'reflow-200pct', 'keyboard', 'accessibility', 'evidence-honesty', 'design-conformance',
];
const LOCALLY_ATTESTED_QUALITY_CHECKS = ['evidence-honesty', 'design-conformance'];
const REQUIRED_SYSTEM_GROUPS = [
  'product-scope', 'color-contrast', 'typography', 'spacing-density-layout', 'responsive',
  'component-states', 'motion-reduced-motion', 'voice-locale', 'assets-fonts-licenses',
  'provenance-unresolved',
];
const REQUIRED_SYSTEM_CHECKS = [
  'token_reference_closure', 'contrast', 'component_state_coverage', 'responsive_320_200',
  'reduced_motion', 'assets_fonts_licenses', 'implementation_contract_complete', 'unknown_absence',
  'sections_11_13_honesty',
];
const REQUIRED_CORE_SYSTEM_GROUPS = [
  'experience', 'foundations', 'typography-assets', 'components-states',
  'layout-platforms', 'content-locales', 'governance',
];
const REQUIRED_CORE_SYSTEM_CHECKS = [
  'portable_core_structure', 'bound_system_authority', 'token_reference_closure', 'contrast',
  'component_state_coverage', 'responsive_320_200', 'reduced_motion', 'assets_fonts_licenses',
  'implementation_contract_complete', 'unknown_absence', 'opaque_extension_preservation',
];
const REQUIRED_SYSTEM_AUTHORITY = 'core-v2-project-system';

function exactStringSet(actual, expected, label) {
  if (!Array.isArray(actual) || actual.length !== expected.length
    || new Set(actual).size !== expected.length || expected.some((item) => !actual.includes(item))) {
    throw new Error(`${label} contract drift`);
  }
}

function validateAcceptancePlan(plan, mission, decisionSha) {
  const taskBytes = fs.readFileSync(path.join(runDir, 'task.md'), 'utf8');
  if (plan.schema_version !== '0.1' || plan.status !== 'locked'
    || plan.implementation_owner !== 'main-agent'
    || plan.mission_sha256 !== sha256File(missionPath)
    || plan.task_sha256 !== mission.task_sha256
    || plan.design_system_decision_sha256 !== decisionSha
    || typeof plan.route !== 'string' || !plan.route.trim()) {
    throw new Error('acceptance plan authority drift');
  }
  if (!Array.isArray(plan.task_requirements) || plan.task_requirements.length < 2) {
    throw new Error('acceptance plan must retain at least two task requirements');
  }
  const requirementIds = new Set();
  for (const requirement of plan.task_requirements) {
    if (!requirement || typeof requirement.id !== 'string' || !requirement.id.trim()
      || requirementIds.has(requirement.id)
      || !['journey', 'constraint', 'unknown'].includes(requirement.kind)
      || typeof requirement.source_quote !== 'string' || requirement.source_quote.trim().length < 4
      || !taskBytes.includes(requirement.source_quote.trim())
      || typeof requirement.acceptance !== 'string' || !requirement.acceptance.trim()) {
      throw new Error(`invalid acceptance requirement: ${requirement?.id || 'unknown'}`);
    }
    requirementIds.add(requirement.id);
  }
  exactStringSet(plan.required_states, REQUIRED_STATES, 'required states');
  exactStringSet(plan.viewports, REQUIRED_VIEWPORTS, 'viewport');
  exactStringSet(plan.quality_checks, REQUIRED_QUALITY_CHECKS, 'quality check');
  return plan;
}

function validateSystemProof(proof, decision, proofPath) {
  const designPath = path.join(cwd, 'DESIGN.md');
  const coreMode = proof.authority_mode === REQUIRED_SYSTEM_AUTHORITY;
  if (decision.required_system_authority !== REQUIRED_SYSTEM_AUTHORITY || !coreMode) {
    throw new Error('fresh Autopilot system proof must use Core v2 project authority');
  }
  const provenancePath = coreMode
    ? path.join(cwd, '.omd', 'system', 'provenance.json')
    : path.join(runDir, 'system', 'provenance.json');
  const coveragePath = coreMode
    ? path.join(cwd, '.omd', 'system', 'coverage.json')
    : path.join(runDir, 'system', 'coverage.json');
  const manifestPath = path.join(cwd, '.omd', 'system', 'manifest.json');
  const graphPath = path.join(cwd, '.omd', 'system', 'graph.json');
  const specPath = path.join(runDir, 'system', 'spec.json');
  const requiredGroups = coreMode ? REQUIRED_CORE_SYSTEM_GROUPS : REQUIRED_SYSTEM_GROUPS;
  const requiredChecks = coreMode ? REQUIRED_CORE_SYSTEM_CHECKS : REQUIRED_SYSTEM_CHECKS;
  if (proof.schema_version !== '0.2'
    || !['passed', 'failed'].includes(proof.status)
    || typeof proof.pass !== 'boolean'
    || proof.strategy !== decision.strategy
    || proof.implementation_owner !== 'main-agent'
    || !fs.existsSync(designPath)
    || !fs.existsSync(provenancePath)
    || !fs.existsSync(coveragePath)
    || proof.design_md_sha256 !== sha256File(designPath)
    || proof.provenance_sha256 !== sha256File(provenancePath)
    || proof.coverage_sha256 !== sha256File(coveragePath)) {
    throw new Error('system proof authority drift');
  }
  if (coreMode) {
    const manifest = readJson(manifestPath);
    const graph = readJson(graphPath);
    if (proof.format !== 'design-md-core' || proof.format_version !== '2.0.0'
      || proof.profile !== 'portable-core'
      || !fs.existsSync(manifestPath) || !fs.existsSync(graphPath)
      || proof.manifest_sha256 !== sha256File(manifestPath)
      || proof.graph_sha256 !== sha256File(graphPath)
      || proof.spec_sha256 !== null
      || proof.system_authority?.manifest_path !== '.omd/system/manifest.json'
      || proof.system_authority?.graph_path !== '.omd/system/graph.json'
      || proof.system_authority?.projection_path !== 'DESIGN.md'
      || proof.system_authority?.provenance_path !== '.omd/system/provenance.json'
      || proof.system_authority?.coverage_path !== '.omd/system/coverage.json') {
      throw new Error('Core v2 system proof authority drift');
    }
    if (validateCoreManifest(manifest).length || validateCoreGraph(graph).length
      || graph.projection?.sha256 !== proof.design_md_sha256
      || manifest.artifacts?.design_md?.sha256 !== proof.design_md_sha256
      || manifest.artifacts?.graph?.sha256 !== proof.graph_sha256
      || manifest.artifacts?.provenance?.sha256 !== proof.provenance_sha256
      || manifest.artifacts?.coverage?.sha256 !== proof.coverage_sha256) {
      throw new Error('Core v2 system artifact schema or binding drift');
    }
  } else if (proof.authority_mode !== undefined && proof.authority_mode !== 'legacy-run-scoped-v0.1') {
    throw new Error('unsupported system proof authority mode');
  } else if (!fs.existsSync(specPath) || proof.spec_sha256 !== sha256File(specPath)) {
    throw new Error('system proof authority drift');
  }
  exactStringSet(proof.required_groups, requiredGroups, 'system proof required groups');
  exactStringSet(proof.required_checks, requiredChecks, 'system proof required checks');
  if (!proof.computed_checks || typeof proof.computed_checks !== 'object'
    || requiredChecks.some((id) => proof.computed_checks[id]?.pass !== true)) {
    throw new Error('system proof computed checks drift');
  }
  if (!Array.isArray(proof.findings)
    || proof.findings.some((item) => !item || typeof item.code !== 'string' || !item.code.trim())) {
    throw new Error('system proof findings contract drift');
  }
  const expectedPass = proof.status === 'passed' && proof.findings.length === 0;
  if (proof.pass !== expectedPass
    || proof.next_state !== (expectedPass ? 'PRODUCT_BUILD' : 'SYSTEM_REPAIR')) {
    throw new Error('system proof outcome drift');
  }
  return proof;
}

function validateFinalProof(proof, acceptance, currentProductTree) {
  if (proof.schema_version !== '0.2' || proof.implementation_owner !== 'main-agent'
    || proof.mission_sha256 !== sha256File(missionPath)
    || proof.acceptance_plan_sha256 !== sha256File(acceptancePath)
    || proof.product_build_admission_sha256 !== sha256File(admissionPath)
    || proof.product_tree_sha256 !== currentProductTree.sha256
    || proof.route !== acceptance.route
    || !Number.isInteger(proof.repair_round) || proof.repair_round < 0
    || proof.repair_round > 2) {
    throw new Error('final proof authority drift');
  }
  const requirementIds = acceptance.task_requirements.map((item) => item.id);
  if (!Array.isArray(proof.requirement_results) || proof.requirement_results.length !== requirementIds.length
    || new Set(proof.requirement_results.map((item) => item.id)).size !== requirementIds.length
    || requirementIds.some((id) => !proof.requirement_results.some((item) => item.id === id))) {
    throw new Error('final proof task-requirement coverage drift');
  }
  if (!Array.isArray(proof.checks) || proof.checks.length !== REQUIRED_QUALITY_CHECKS.length
    || new Set(proof.checks.map((item) => item.id)).size !== REQUIRED_QUALITY_CHECKS.length
    || REQUIRED_QUALITY_CHECKS.some((id) => !proof.checks.some((item) => item.id === id))) {
    throw new Error('final proof quality-check coverage drift');
  }
  for (const item of [...proof.requirement_results, ...proof.checks]) {
    if (typeof item.pass !== 'boolean' || !Array.isArray(item.evidence) || item.evidence.length === 0
      || item.evidence.some((entry) => typeof entry !== 'string' || !entry.trim())) {
      throw new Error(`invalid final proof result: ${item.id || 'unknown'}`);
    }
  }
  const computedPass = [...proof.requirement_results, ...proof.checks].every((item) => item.pass);
  if (proof.pass !== computedPass) throw new Error('final proof pass does not match its atomic results');
  return proof;
}

function repairReceiptPath(round) {
  return path.join(repairsDir, `round-${round}.json`);
}

function readRepairChain(mission, acceptanceSha, admissionSha) {
  const receipts = [];
  for (let round = 0; round < mission.repair_round_budget; round += 1) {
    const file = repairReceiptPath(round);
    if (!fs.existsSync(file)) {
      for (let later = round + 1; later < mission.repair_round_budget; later += 1) {
        if (fs.existsSync(repairReceiptPath(later))) throw new Error('repair receipt chain is non-contiguous');
      }
      break;
    }
    const receipt = readJson(file);
    if (receipt.schema_version !== '0.1' || receipt.status !== 'repair-authorized'
      || receipt.mission_sha256 !== sha256File(missionPath)
      || receipt.acceptance_plan_sha256 !== acceptanceSha
      || receipt.product_build_admission_sha256 !== admissionSha
      || receipt.repair_round !== round || receipt.next_repair_round !== round + 1
      || typeof receipt.failed_proof_sha256 !== 'string'
      || typeof receipt.failed_product_tree_sha256 !== 'string'
      || !Array.isArray(receipt.failed_requirement_ids)
      || !Array.isArray(receipt.failed_quality_check_ids)
      || !['local-proof', 'controller-objective'].includes(receipt.authority)
      || (receipt.authority === 'local-proof' && receipt.controller_verification_sha256 !== null)
      || (receipt.authority === 'controller-objective'
        && typeof receipt.controller_verification_sha256 !== 'string')) {
      throw new Error(`repair receipt authority drift: round ${round}`);
    }
    receipts.push(receipt);
  }
  return receipts;
}

function writeRepairReceipt(proof, proofSha, acceptanceSha, admissionSha, external = null) {
  const failedRequirements = proof.requirement_results.filter((item) => !item.pass).map((item) => item.id);
  const failedChecks = proof.checks.filter((item) => !item.pass).map((item) => item.id);
  const receipt = {
    schema_version: '0.1',
    status: 'repair-authorized',
    mission_sha256: sha256File(missionPath),
    acceptance_plan_sha256: acceptanceSha,
    product_build_admission_sha256: admissionSha,
    failed_proof_sha256: proofSha,
    failed_product_tree_sha256: proof.product_tree_sha256,
    repair_round: proof.repair_round,
    next_repair_round: proof.repair_round + 1,
    authority: external ? 'controller-objective' : 'local-proof',
    controller_verification_sha256: external?.sha256 ?? null,
    failed_requirement_ids: failedRequirements,
    failed_quality_check_ids: external?.value.failed_assertion_ids ?? failedChecks,
  };
  writeJsonAtomic(repairReceiptPath(proof.repair_round), receipt, true);
  return receipt;
}

function validateExternalVerificationPolicy(mission) {
  if (!mission.external_verification_policy_sha256) return null;
  if (!fs.existsSync(externalVerificationPolicyPath)
    || sha256File(externalVerificationPolicyPath) !== mission.external_verification_policy_sha256) {
    throw new Error('controller verification policy drift');
  }
  const policy = readJson(externalVerificationPolicyPath);
  if (policy.schema_version !== '0.2' || policy.mode !== 'controller-owned-objective'
    || policy.controller !== 'autopilot-smoke-controller-v0.3'
    || policy.repair_rounds_max !== mission.repair_round_budget
    || policy.initial_turn_soft_budget_ms !== mission.execution_budget.initial_turn_soft_budget_ms
    || policy.minimum_controller_handoff_reserve_ms !== mission.execution_budget.minimum_controller_handoff_reserve_ms
    || policy.advisory_lane_attempts_per_lane_max !== mission.council_lane_attempt_budget
    || policy.advisory_result_repair_calls_max !== mission.council_result_repair_budget
    || policy.advisory_coordination_calls_max !== mission.execution_budget.advisory_coordination_calls_max
    || typeof policy.task_id !== 'string' || !policy.task_id) {
    throw new Error('controller verification policy contract drift');
  }
  return policy;
}

function externalVerificationPath(round) {
  return path.join(externalVerificationDir, `round-${round}.json`);
}

function readExternalVerification(mission, proof) {
  const policy = validateExternalVerificationPolicy(mission);
  if (!policy) return null;
  const file = externalVerificationPath(proof.repair_round);
  if (!fs.existsSync(file)) return { pending: true, policy };
  const value = readJson(file);
  if (value.schema_version !== '0.2' || value.controller !== policy.controller
    || value.task_id !== policy.task_id
    || value.mission_sha256 !== sha256File(missionPath)
    || value.proof_sha256 !== sha256File(path.join(runDir, 'proof.json'))
    || value.product_tree_sha256 !== proof.product_tree_sha256
    || value.repair_round !== proof.repair_round
    || !['pass', 'fail'].includes(value.status)
    || typeof value.task_score_sha256 !== 'string'
    || typeof value.evaluator_result_sha256 !== 'string'
    || value.design_system_proof_pass !== true
    || !/^[a-f0-9]{64}$/.test(value.design_system_proof_sha256 || '')
    || !Array.isArray(value.failed_assertion_ids)) {
    throw new Error('controller verification receipt authority drift');
  }
  if ((value.status === 'pass') !== (value.failed_assertion_ids.length === 0)) {
    throw new Error('controller verification disposition drift');
  }
  return { pending: false, policy, value, sha256: sha256File(file) };
}

function externalVerificationClosesMission(finalProof, external) {
  return Boolean(external && !external.pending && external.value.status === 'pass'
    && external.value.design_system_proof_pass === true
    && finalProof.requirement_results.every((item) => item.pass === true)
    && LOCALLY_ATTESTED_QUALITY_CHECKS.every((id) => finalProof.checks.find((item) => item.id === id)?.pass === true));
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
  const externalPolicy = fs.existsSync(externalVerificationPolicyPath)
    ? readJson(externalVerificationPolicyPath) : null;
  if (externalPolicy && (externalPolicy.initial_turn_soft_budget_ms !== 720000
    || externalPolicy.minimum_controller_handoff_reserve_ms !== 180000
    || externalPolicy.advisory_lane_attempts_per_lane_max !== 1
    || externalPolicy.advisory_result_repair_calls_max !== 0
    || externalPolicy.advisory_coordination_calls_max !== 6)) {
    throw new Error('controller execution budget contract drift');
  }
  const mission = {
    schema_version: '0.1',
    workflow: 'omd-autopilot-v2',
    required_system_authority: REQUIRED_SYSTEM_AUTHORITY,
    task_sha256: sha256File(taskPath),
    initial_product_tree_sha256: initialTree.sha256,
    initial_product_tree: initialTree.files,
    implementation_owner: 'main-agent',
    council_lane_budget: 3,
    council_lane_attempt_budget: 1,
    council_result_repair_budget: 0,
    question_batch_budget: 1,
    repair_round_budget: 2,
    guided_checkpoint_claim_allowed: false,
    execution_budget: {
      initial_turn_soft_budget_ms: externalPolicy?.initial_turn_soft_budget_ms ?? null,
      minimum_controller_handoff_reserve_ms: externalPolicy?.minimum_controller_handoff_reserve_ms ?? null,
      advisory_coordination_calls_max: externalPolicy?.advisory_coordination_calls_max ?? 6,
    },
    external_verification_policy_sha256: fs.existsSync(externalVerificationPolicyPath)
      ? sha256File(externalVerificationPolicyPath) : null,
  };
  writeJsonAtomic(missionPath, mission, true);
  writeMissionMarker('active');
  emit('AUTHORITY_GATE', 'run-design-council-prime');
  process.exit(0);
}

if (command === 'audit') {
  if (!fs.existsSync(missionPath)) throw new Error('mission is missing; bootstrap first');
  if (!fs.existsSync(activeMissionPath)) throw new Error('active autopilot mission marker is missing');
  const mission = readJson(missionPath);
  if (mission.required_system_authority !== REQUIRED_SYSTEM_AUTHORITY) {
    throw new Error('autopilot mission system authority drift');
  }
  const marker = readJson(activeMissionPath);
  if (marker.workflow !== 'omd-autopilot-v2'
    || marker.run_dir !== relativeRunDir()
    || marker.mission_sha256 !== sha256File(missionPath)
    || marker.status !== 'completed') {
    throw new Error('completed autopilot mission marker authority drift');
  }
  const decisionPath = path.join(runDir, 'design-system-decision.json');
  const finalProofPath = path.join(runDir, 'proof.json');
  for (const required of [statePath, decisionPath, acceptancePath, admissionPath, finalProofPath]) {
    if (!fs.existsSync(required)) throw new Error(`completed autopilot mission artifact missing: ${path.basename(required)}`);
  }
  const decisionSha = sha256File(decisionPath);
  const acceptance = validateAcceptancePlan(readJson(acceptancePath), mission, decisionSha);
  const acceptanceSha = sha256File(acceptancePath);
  const admission = readJson(admissionPath);
  if (admission.schema_version !== '0.1' || admission.status !== 'admitted'
    || admission.mission_sha256 !== sha256File(missionPath)
    || admission.design_system_decision_sha256 !== decisionSha
    || admission.acceptance_plan_sha256 !== acceptanceSha
    || admission.required_system_authority !== mission.required_system_authority
    || admission.implementation_owner !== 'main-agent') {
    throw new Error('completed product-build admission authority drift');
  }
  const admissionSha = sha256File(admissionPath);
  const repairChain = readRepairChain(mission, acceptanceSha, admissionSha);
  const finalProof = validateFinalProof(readJson(finalProofPath), acceptance, treeManifest(cwd));
  const external = readExternalVerification(mission, finalProof);
  if ((!finalProof.pass && !externalVerificationClosesMission(finalProof, external))
    || finalProof.repair_round !== repairChain.length) {
    throw new Error('completed final proof or repair chain drift');
  }
  const finalState = readJson(statePath);
  if (finalState.state !== 'HANDOFF'
    || finalState.mission_sha256 !== sha256File(missionPath)
    || finalState.evidence?.proof_sha256 !== sha256File(finalProofPath)
    || finalState.evidence?.acceptance_plan_sha256 !== acceptanceSha
    || finalState.evidence?.repair_rounds_used !== repairChain.length
    || (external && (external.pending || external.value.status !== 'pass'
      || finalState.evidence?.controller_verification_sha256 !== external.sha256))) {
    throw new Error('completed handoff state authority drift');
  }
  process.stdout.write(`${JSON.stringify({
    schema_version: '0.1', pass: true, workflow: mission.workflow,
    run_dir: relativeRunDir(), mission_sha256: sha256File(missionPath),
    acceptance_plan_sha256: acceptanceSha, product_build_admission_sha256: admissionSha,
    final_proof_sha256: sha256File(finalProofPath), product_tree_sha256: finalProof.product_tree_sha256,
    route: acceptance.route, repair_rounds_used: repairChain.length, state: finalState.state,
  }, null, 2)}\n`);
  process.exit(0);
}

if (command !== 'advance') throw new Error(`unsupported command: ${command}`);
if (!fs.existsSync(missionPath)) throw new Error('mission is missing; bootstrap first');
assertActiveMission();
const mission = readJson(missionPath);
if (mission.required_system_authority !== REQUIRED_SYSTEM_AUTHORITY) {
  throw new Error('autopilot mission system authority drift');
}
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
if (decision.required_system_authority !== mission.required_system_authority) {
  throw new Error('design-system decision system authority drift');
}
const decisionSha = sha256File(decisionPath);
const existingAdmission = fs.existsSync(admissionPath) ? readJson(admissionPath) : null;
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
  const proof = validateSystemProof(readJson(proofPath), decision, proofPath);
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

if (!fs.existsSync(acceptancePath)) {
  if (existingAdmission) throw new Error('admitted acceptance plan is missing');
  emit('ACCEPTANCE_PLAN', 'materialize-task-acceptance-plan', {
    mission_sha256: sha256File(missionPath),
    task_sha256: mission.task_sha256,
    design_system_decision_sha256: decisionSha,
    required_states: REQUIRED_STATES,
    required_viewports: REQUIRED_VIEWPORTS,
    required_quality_checks: REQUIRED_QUALITY_CHECKS,
  });
  process.exit(0);
}
const acceptance = validateAcceptancePlan(readJson(acceptancePath), mission, decisionSha);
const acceptanceSha = sha256File(acceptancePath);

if (existingAdmission) {
  if (existingAdmission.status !== 'admitted'
    || existingAdmission.mission_sha256 !== sha256File(missionPath)
    || existingAdmission.design_system_decision_sha256 !== decisionSha
    || existingAdmission.acceptance_plan_sha256 !== acceptanceSha
    || existingAdmission.strategy !== decision.strategy
    || existingAdmission.required_system_authority !== mission.required_system_authority
    || existingAdmission.implementation_owner !== 'main-agent') {
    throw new Error('product-build admission authority drift');
  }
}

if (!fs.existsSync(admissionPath)) {
  const admission = {
    schema_version: '0.1',
    mission_sha256: sha256File(missionPath),
    design_system_decision_sha256: decisionSha,
    acceptance_plan_sha256: acceptanceSha,
    system_proof_sha256: systemProofSha,
    strategy: decision.strategy,
    required_system_authority: mission.required_system_authority,
    implementation_owner: 'main-agent',
    prebuild_product_tree_sha256: currentTree.sha256,
    status: 'admitted',
  };
  writeJsonAtomic(admissionPath, admission, true);
}

const finalProofPath = path.join(runDir, 'proof.json');
if (!fs.existsSync(finalProofPath)) {
  emit('PRODUCT_BUILD', 'implement-real-route-then-verify', {
    admission_sha256: sha256File(admissionPath),
    acceptance_plan_sha256: acceptanceSha,
    expected_repair_round: 0,
  });
  process.exit(0);
}
const admissionSha = sha256File(admissionPath);
const repairChain = readRepairChain(mission, acceptanceSha, admissionSha);
const finalProof = validateFinalProof(readJson(finalProofPath), acceptance, treeManifest(cwd));
if (finalProof.repair_round !== repairChain.length) {
  throw new Error(`final proof repair round drift: expected ${repairChain.length}, received ${finalProof.repair_round}`);
}
if (repairChain.length) {
  const previous = repairChain.at(-1);
  if (previous.failed_proof_sha256 === sha256File(finalProofPath)) {
    throw new Error('focused repair must replace the failed proof');
  }
  if (previous.failed_product_tree_sha256 === finalProof.product_tree_sha256) {
    throw new Error('focused repair must change the product tree');
  }
}
const externalVerification = readExternalVerification(mission, finalProof);
if (externalVerification?.pending) {
  emit('EXTERNAL_VERIFY', 'await-controller-objective-evaluation', {
    proof_sha256: sha256File(finalProofPath),
    product_tree_sha256: finalProof.product_tree_sha256,
    repair_round: finalProof.repair_round,
    policy_sha256: mission.external_verification_policy_sha256,
  });
} else if (externalVerification?.value.status === 'fail'
  && finalProof.repair_round < mission.repair_round_budget) {
  const proofSha = sha256File(finalProofPath);
  const receipt = writeRepairReceipt(finalProof, proofSha, acceptanceSha, admissionSha, externalVerification);
  emit('BOUNDED_REVISION', 'apply-controller-focused-repair', {
    proof_sha256: proofSha,
    controller_verification_sha256: externalVerification.sha256,
    repair_receipt_sha256: sha256File(repairReceiptPath(finalProof.repair_round)),
    next_repair_round: receipt.next_repair_round,
    failed_assertion_ids: externalVerification.value.failed_assertion_ids,
  });
} else if (externalVerification?.value.status === 'fail') {
  emit('FAILED_HANDOFF', 'report-controller-objective-failures', {
    proof_sha256: sha256File(finalProofPath),
    controller_verification_sha256: externalVerification.sha256,
    repair_rounds_used: repairChain.length,
    unresolved_assertion_ids: externalVerification.value.failed_assertion_ids,
  });
  writeMissionMarker('failed');
} else if (finalProof.pass === true || externalVerificationClosesMission(finalProof, externalVerification)) {
  emit('HANDOFF', 'write-delivery', {
    proof_sha256: sha256File(finalProofPath),
    acceptance_plan_sha256: acceptanceSha,
    repair_rounds_used: repairChain.length,
    controller_verification_sha256: externalVerification?.sha256 ?? null,
    completion_authority: finalProof.pass === true ? 'local-proof' : 'controller-objective-and-design-system-proof',
  });
  writeMissionMarker('completed');
} else if (finalProof.repair_round < mission.repair_round_budget) {
  const proofSha = sha256File(finalProofPath);
  const receipt = writeRepairReceipt(finalProof, proofSha, acceptanceSha, admissionSha);
  emit('BOUNDED_REVISION', 'apply-focused-repair', {
    proof_sha256: proofSha,
    repair_receipt_sha256: sha256File(repairReceiptPath(finalProof.repair_round)),
    next_repair_round: receipt.next_repair_round,
    failed_requirement_ids: receipt.failed_requirement_ids,
    failed_quality_check_ids: receipt.failed_quality_check_ids,
  });
} else {
  emit('FAILED_HANDOFF', 'report-unresolved-blocks', {
    proof_sha256: sha256File(finalProofPath),
    acceptance_plan_sha256: acceptanceSha,
    repair_rounds_used: repairChain.length,
    unresolved_requirement_ids: finalProof.requirement_results.filter((item) => !item.pass).map((item) => item.id),
    unresolved_quality_check_ids: finalProof.checks.filter((item) => !item.pass).map((item) => item.id),
  });
  writeMissionMarker('failed');
}
