#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, lstatSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const EXPECTED_GATE_IDS = [
  'natural-language-package-parity',
  'selective-authority-escalation',
  'design-system-quality-and-conformance',
  'greenfield-reliability',
  'same-prompt-skill-lift',
  'three-model-transfer',
  'autonomy-quality-cost-pareto',
  'calibrated-greenfield-denominator',
  'blind-practitioner-review',
  'reproducible-independent-claim-audit',
];
const ALLOWED_STATUSES = new Set(['open', 'partial', 'external', 'pass']);
const HISTORICAL_CALIBRATION_PATH =
  'benchmarks/ui-resolve-bench/reports/autopilot-v2-provider-zero-1.9.881/ACCEPTANCE.json';
const CALIBRATION_AUTHORITY_PATHS = [
  'benchmarks/ui-resolve-bench/config/autopilot-v2-qualification.json',
  'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json',
  'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json',
  'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs',
];
const PROVIDER_ZERO_TEST_COMMAND = [
  'npm',
  'exec',
  '--offline',
  '--',
  'vitest',
  'run',
  'test/unit/cli/packaged-autopilot-smoke.test.ts',
  'test/unit/cli/packaged-design-md-core-smoke.test.ts',
  'test/unit/bench/ui-resolve-autopilot-clean-dir-canary.test.mjs',
];
const FRESH_REQUIRED_SOURCE_PATHS = [
  'benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.2.json',
  'benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs',
  'benchmarks/ui-resolve-bench/scripts/audit-autopilot-v2-readiness.mjs',
  'benchmarks/ui-resolve-bench/scripts/generate-autopilot-v2-readiness.mjs',
  'skills/omd-autopilot/references/design-system-contract.md',
  'agents/omd-design-system-architect.md',
  'scripts/design-md-core-schema.cjs',
  'scripts/design-md-core-conformance.cjs',
  'scripts/design-md-core.cjs',
  'scripts/prepare-design-md-core-review.cjs',
  'scripts/compile-design-md-core.cjs',
  'scripts/adopt-design-md-core.cjs',
  'scripts/migrate-design-md-core.cjs',
  'spec/design-md-core-v2.md',
  'spec/schema/design-system-graph-v2.schema.json',
  'spec/schema/design-system-provenance-v2.schema.json',
  'spec/schema/design-system-coverage-v2.schema.json',
  'spec/schema/design-md-core-manifest-v2.schema.json',
  'spec/schema/design-md-core-adoption-review-v2.schema.json',
  'spec/schema/design-md-core-adoption-receipt-v2.schema.json',
  'spec/schema/design-md-core-project-checkpoint-v2.schema.json',
  'package.json',
  'tsup.config.ts',
  'src/cli/design-md.ts',
  'src/cli/doctor.ts',
  'src/cli/install-skills.ts',
  'bin/oh-my-design.ts',
  'test/unit/cli/packaged-autopilot-smoke.test.ts',
  'test/unit/cli/packaged-design-md-core-smoke.test.ts',
  'test/unit/bench/ui-resolve-autopilot-clean-dir-canary.test.mjs',
  'test/unit/bench/ui-resolve-autopilot-v2-readiness-generator.test.mjs',
  HISTORICAL_CALIBRATION_PATH,
];

function requireObject(value, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be an object`);
  return value;
}

function requireString(value, label) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${label} must be a non-empty string`);
  return value;
}

function withinRepo(repoRoot, reference, label) {
  requireString(reference, label);
  if (isAbsolute(reference) || reference.split(/[\\/]/).includes('..')) throw new Error(`${label} must be repository-relative`);
  const path = resolve(repoRoot, reference);
  if (path !== repoRoot && !path.startsWith(`${repoRoot}${sep}`)) throw new Error(`${label} escapes repository`);
  if (!existsSync(path)) throw new Error(`${label} is missing: ${reference}`);
  return path;
}

function sha(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function pointerValue(value, pointer) {
  requireString(pointer, 'pass_pointer');
  if (!pointer.startsWith('/')) throw new Error('pass_pointer must be a JSON pointer');
  return pointer.slice(1).split('/').reduce((current, segment) => {
    if (current === undefined || current === null) return undefined;
    return current[segment.replace(/~1/g, '/').replace(/~0/g, '~')];
  }, value);
}

function gitBytes(repoRoot, args, label) {
  try {
    return execFileSync('git', args, {
      cwd: repoRoot,
      encoding: null,
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    throw new Error(label);
  }
}

function requireSourceCommit(repoRoot, sourceCommit) {
  requireString(sourceCommit, 'source_commit');
  if (!/^[0-9a-f]{40}(?:[0-9a-f]{24})?$/.test(sourceCommit)) {
    throw new Error('source_commit must be a full hexadecimal object ID');
  }
  gitBytes(
    repoRoot,
    ['cat-file', '-e', `${sourceCommit}^{commit}`],
    'source_commit is missing or is not a commit',
  );
}

function committedRegularFileBytes(repoRoot, sourceCommit, reference) {
  const tree = gitBytes(
    repoRoot,
    ['ls-tree', '-z', sourceCommit, '--', reference],
    `source binding cannot inspect source commit path: ${reference}`,
  );
  const entry = tree.toString('utf8').replace(/\0$/, '');
  if (!entry) throw new Error(`source binding is missing from source_commit: ${reference}`);
  const metadata = /^(\d{6})\s+(\S+)\s+([0-9a-f]+)\t/.exec(entry);
  if (!metadata || metadata[2] !== 'blob' || !new Set(['100644', '100755']).has(metadata[1])) {
    throw new Error(`source binding must be a regular file in source_commit: ${reference}`);
  }
  return gitBytes(
    repoRoot,
    ['show', `${sourceCommit}:${reference}`],
    `source binding is unreadable from source_commit: ${reference}`,
  );
}

export function validateSourceBindings(evidence, repoRoot) {
  if (!Array.isArray(evidence.source_bindings) || evidence.source_bindings.length < 8) {
    throw new Error('provider-zero evidence must bind the Autopilot source set');
  }
  requireSourceCommit(repoRoot, evidence.source_commit);
  const paths = new Set();
  for (const binding of evidence.source_bindings) {
    requireObject(binding, 'source binding');
    if (!Number.isSafeInteger(binding.bytes) || binding.bytes < 0 || !/^[0-9a-f]{64}$/.test(binding.sha256 ?? '')) {
      throw new Error(`source binding acceptance metadata is invalid: ${binding.path ?? '<unknown>'}`);
    }
    const path = withinRepo(repoRoot, binding.path, 'source binding');
    if (paths.has(binding.path)) throw new Error(`duplicate source binding: ${binding.path}`);
    paths.add(binding.path);
    const stat = lstatSync(path);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`source binding must be a regular file: ${binding.path}`);
    const bytes = readFileSync(path);
    if (binding.bytes !== bytes.length || binding.sha256 !== sha(bytes)) {
      throw new Error(`source binding drift from acceptance bytes: ${binding.path}`);
    }
    const committedBytes = committedRegularFileBytes(repoRoot, evidence.source_commit, binding.path);
    if (binding.bytes !== committedBytes.length || binding.sha256 !== sha(committedBytes) || !bytes.equals(committedBytes)) {
      throw new Error(`source binding drift from source_commit: ${binding.path}`);
    }
  }
  const required = [
    'benchmarks/ui-resolve-bench/config/autopilot-v2-qualification.json',
    'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json',
    'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json',
    'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs',
    'skills/omd-autopilot/SKILL.md',
    'scripts/validate-project-design-system.cjs',
  ];
  if (evidence.schema_version === '0.2') {
    required.push(...FRESH_REQUIRED_SOURCE_PATHS);
  }
  if (required.some((path) => !paths.has(path))) throw new Error('provider-zero evidence is missing a required source binding');
  return paths;
}

function validateFreshReadinessManifest(manifest, evidence, repoRoot, boundPaths) {
  if (evidence.schema_version !== '0.2') return;
  const authority = requireObject(evidence.readiness_manifest, 'readiness_manifest');
  const expectedPath = `benchmarks/ui-resolve-bench/autopilot-v2-readiness-${evidence.snapshot_patch}.json`;
  if (authority.path !== expectedPath || !boundPaths.has(expectedPath) ||
      !/^[0-9a-f]{64}$/.test(authority.sha256 ?? '') || !Number.isSafeInteger(authority.bytes) || authority.bytes < 0) {
    throw new Error('fresh readiness manifest authority is incomplete');
  }
  const bytes = readFileSync(withinRepo(repoRoot, authority.path, 'fresh readiness manifest'));
  if (sha(bytes) !== authority.sha256 || bytes.length !== authority.bytes) throw new Error('fresh readiness manifest authority drift');
  const committedManifest = JSON.parse(bytes.toString('utf8'));
  if (JSON.stringify(committedManifest) !== JSON.stringify(manifest)) throw new Error('evaluated readiness manifest differs from its source binding');
  const expectedEvidencePath = `benchmarks/ui-resolve-bench/reports/autopilot-v2-provider-zero-${evidence.snapshot_patch}/ACCEPTANCE.json`;
  if (manifest.machine_evidence !== expectedEvidencePath) throw new Error('fresh readiness manifest evidence path is not canonical');
}

function validateCalibrationInheritance(evidence, repoRoot, calibration) {
  if (calibration.evidence_mode !== 'immutable-historical-inheritance' ||
      calibration.browser_replay_executed_in_this_snapshot !== false) {
    throw new Error('fresh calibration must explicitly disclose historical inheritance without replay');
  }
  const inherited = requireObject(calibration.inherited_from, 'calibration.inherited_from');
  if (inherited.mode !== 'immutable-historical-browser-replay' || inherited.path !== HISTORICAL_CALIBRATION_PATH ||
      !/^[0-9a-f]{64}$/.test(inherited.sha256 ?? '') || !Number.isSafeInteger(inherited.bytes) || inherited.bytes < 0 ||
      !/^[0-9a-f]{40}$/.test(inherited.evidence_commit ?? '') || !/^[0-9a-f]{40}$/.test(inherited.source_commit ?? '')) {
    throw new Error('historical calibration inheritance metadata is invalid');
  }
  const historicalPath = withinRepo(repoRoot, inherited.path, 'historical calibration evidence');
  const historicalStat = lstatSync(historicalPath);
  if (!historicalStat.isFile() || historicalStat.isSymbolicLink()) {
    throw new Error('historical calibration evidence must be a regular file');
  }
  const historicalBytes = readFileSync(historicalPath);
  if (historicalBytes.length !== inherited.bytes || sha(historicalBytes) !== inherited.sha256) {
    throw new Error('historical calibration evidence hash drift');
  }
  requireSourceCommit(repoRoot, inherited.evidence_commit);
  requireSourceCommit(repoRoot, inherited.source_commit);
  try {
    execFileSync('git', ['merge-base', '--is-ancestor', inherited.evidence_commit, evidence.source_commit], {
      cwd: repoRoot,
      stdio: 'ignore',
    });
    execFileSync('git', ['merge-base', '--is-ancestor', inherited.source_commit, evidence.source_commit], {
      cwd: repoRoot,
      stdio: 'ignore',
    });
  } catch {
    throw new Error('historical calibration evidence is not an ancestor of source_commit');
  }
  const committedHistoricalBytes = committedRegularFileBytes(repoRoot, inherited.evidence_commit, inherited.path);
  const sourceHistoricalBytes = committedRegularFileBytes(repoRoot, evidence.source_commit, inherited.path);
  if (!historicalBytes.equals(committedHistoricalBytes) || !historicalBytes.equals(sourceHistoricalBytes)) {
    throw new Error('historical calibration evidence is not immutable across its ancestor binding');
  }
  const historical = JSON.parse(historicalBytes.toString('utf8'));
  if (historical.source_commit !== inherited.source_commit || historical.calibration?.pass !== true ||
      historical.calibration?.current_hash_browser_replay_pass !== true) {
    throw new Error('historical calibration replay authority is incomplete');
  }
  if (!Array.isArray(inherited.authority_bindings) || inherited.authority_bindings.length !== CALIBRATION_AUTHORITY_PATHS.length) {
    throw new Error('historical calibration inheritance must bind every calibration authority');
  }
  const historicalBindings = new Map((historical.source_bindings ?? []).map((binding) => [binding.path, binding]));
  const inheritedBindings = new Map(inherited.authority_bindings.map((binding) => [binding?.path, binding]));
  for (const path of CALIBRATION_AUTHORITY_PATHS) {
    const historicalBinding = historicalBindings.get(path);
    const inheritedBinding = inheritedBindings.get(path);
    const currentBytes = readFileSync(withinRepo(repoRoot, path, 'calibration authority'));
    const expected = { sha256: sha(currentBytes), bytes: currentBytes.length };
    if (!historicalBinding || !inheritedBinding || historicalBinding.sha256 !== expected.sha256 ||
        historicalBinding.bytes !== expected.bytes || inheritedBinding.sha256 !== expected.sha256 ||
        inheritedBinding.bytes !== expected.bytes) {
      throw new Error(`calibration authority drift prevents historical inheritance: ${path}`);
    }
  }
  const tasks = JSON.parse(readFileSync(resolve(repoRoot, CALIBRATION_AUTHORITY_PATHS[1]), 'utf8'));
  const expectedFixturePaths = tasks.tasks.flatMap((task) => ['oracle-a', 'oracle-b'].map((oracle) =>
    `benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield/${task.id}/${oracle}/index.html`));
  if (!Array.isArray(inherited.fixture_bindings) || inherited.fixture_bindings.length !== expectedFixturePaths.length) {
    throw new Error('historical calibration inheritance must bind all twenty-four oracle fixtures');
  }
  const fixtureBindings = new Map(inherited.fixture_bindings.map((binding) => [binding?.path, binding]));
  const acceptanceBindings = new Map(evidence.source_bindings.map((binding) => [binding?.path, binding]));
  for (const path of expectedFixturePaths) {
    const inheritedBinding = fixtureBindings.get(path);
    const acceptanceBinding = acceptanceBindings.get(path);
    const currentBytes = readFileSync(withinRepo(repoRoot, path, 'calibration fixture'));
    const historicalFixtureBytes = committedRegularFileBytes(repoRoot, inherited.source_commit, path);
    const expected = { sha256: sha(currentBytes), bytes: currentBytes.length };
    if (!inheritedBinding || !acceptanceBinding || inheritedBinding.sha256 !== expected.sha256 ||
        inheritedBinding.bytes !== expected.bytes || acceptanceBinding.sha256 !== expected.sha256 ||
        acceptanceBinding.bytes !== expected.bytes || sha(historicalFixtureBytes) !== expected.sha256 ||
        historicalFixtureBytes.length !== expected.bytes) {
      throw new Error(`calibration fixture drift prevents historical inheritance: ${path}`);
    }
  }
}

function validateCalibration(evidence, repoRoot) {
  const qualification = JSON.parse(readFileSync(resolve(repoRoot, 'benchmarks/ui-resolve-bench/config/autopilot-v2-qualification.json'), 'utf8'));
  const taskBytes = readFileSync(resolve(repoRoot, qualification.greenfield_task_set_authority.path));
  const adapterBytes = readFileSync(resolve(repoRoot, qualification.greenfield_adapter_authority.path));
  const tasks = JSON.parse(taskBytes);
  const adapters = JSON.parse(adapterBytes);
  if (sha(taskBytes) !== qualification.greenfield_task_set_authority.sha256 ||
      sha(adapterBytes) !== qualification.greenfield_adapter_authority.sha256) {
    throw new Error('qualification task or adapter authority drift');
  }
  if (tasks.tasks?.length !== 12 || adapters.adapters?.length !== 12) throw new Error('Autopilot denominator must contain twelve tasks and adapters');
  if (adapters.task_set_sha256 !== sha(taskBytes)) throw new Error('adapter set is not bound to the current task set');
  const oracleCount = tasks.tasks.reduce((count, task) => {
    for (const oracle of ['oracle-a', 'oracle-b']) {
      withinRepo(repoRoot, `benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield/${task.id}/${oracle}/index.html`, `${task.id} ${oracle}`);
    }
    return count + 2;
  }, 0);
  const mutantDefinitions = adapters.adapters.reduce((count, adapter) => count + Object.keys(adapter.mutant_detection ?? {}).length, 0);
  if (oracleCount !== 24 || mutantDefinitions !== 36) throw new Error('greenfield oracle or mutant denominator drift');
  const calibration = requireObject(evidence.calibration, 'calibration');
  if (!calibration.pass || calibration.task_count !== 12 || calibration.valid_oracle_count !== 24 ||
      calibration.targeted_mutant_definition_count !== 36 || calibration.targeted_mutant_cell_count !== 72) {
    throw new Error('provider-zero calibration acceptance is incomplete');
  }
  if (evidence.schema_version === '0.2') validateCalibrationInheritance(evidence, repoRoot, calibration);
  else if (!calibration.current_hash_browser_replay_pass) throw new Error('provider-zero calibration acceptance is incomplete');
}

function validateDeterministicTestEvidence(evidence, boundPaths) {
  if (evidence.schema_version !== '0.2') return;
  const testEvidence = requireObject(evidence.deterministic_test_evidence, 'deterministic_test_evidence');
  if (testEvidence.pass !== true || !Array.isArray(testEvidence.commands) || testEvidence.commands.length !== 1) {
    throw new Error('fresh readiness must contain one successful deterministic test command');
  }
  const command = requireObject(testEvidence.commands[0], 'deterministic test command');
  if (command.exit_code !== 0 || JSON.stringify(command.argv) !== JSON.stringify(PROVIDER_ZERO_TEST_COMMAND)) {
    throw new Error('fresh readiness deterministic test command is incomplete');
  }
  const expectedAssertions = [
    'npm-pack-tarball-offline-four-channel-install-and-doctor',
    'installed-autopilot-handoff-and-six-case-authority-matrix',
    'packaged-design-md-core-v2-transaction',
    'provider-zero-clean-directory-canary-handoff',
  ];
  if (JSON.stringify(command.assertions) !== JSON.stringify(expectedAssertions)) {
    throw new Error('fresh readiness deterministic assertions are incomplete');
  }
  for (const path of PROVIDER_ZERO_TEST_COMMAND.filter((argument) => argument.startsWith('test/'))) {
    if (!boundPaths.has(path)) throw new Error(`deterministic test command is not source-bound: ${path}`);
  }
}

function validateDistributionAndAuthority(evidence) {
  const distribution = requireObject(evidence.distribution, 'distribution');
  if (!distribution.pass || distribution.source !== 'npm-pack-tarball-offline-consumer-install' ||
      JSON.stringify(distribution.channels) !== JSON.stringify(['claude-code', 'codex', 'opencode', 'cursor']) ||
      distribution.doctor_state !== 'ready' || distribution.installed_helper_terminal_state !== 'HANDOFF' ||
      distribution.question_batches !== 0) {
    throw new Error('packaged Autopilot distribution evidence is incomplete');
  }
  const authority = requireObject(evidence.authority_matrix, 'authority_matrix');
  const expected = {
    'existing-compatible-design-system': 'reuse',
    'explicit-establish-authority': 'establish',
    'explicit-refresh-authority': 'refresh',
    'explicit-surface-local-only': 'surface-local-only',
    'broad-greenfield-missing-authority': 'AWAIT_USER',
    'exact-brand-missing-source': 'blocked',
  };
  if (!authority.pass || authority.case_count !== 6 || JSON.stringify(authority.outcomes) !== JSON.stringify(expected) ||
      authority.unsupported_auto_decisions !== 0 || authority.maximum_question_batches !== 1) {
    throw new Error('authority perturbation evidence is incomplete');
  }
}

export function evaluateAutopilotV2Readiness(manifest, evidence, repoRoot) {
  requireObject(manifest, 'Autopilot readiness manifest');
  requireObject(evidence, 'Autopilot provider-zero evidence');
  if (!['0.1', '0.2'].includes(evidence.schema_version) ||
      (manifest.snapshot_patch === '1.9.881' ? evidence.schema_version !== '0.1' : evidence.schema_version !== '0.2')) {
    throw new Error('readiness evidence schema does not match the historical or fresh snapshot contract');
  }
  if (manifest.target_version !== '2.0.0' || manifest.required_gate_count !== 10 || manifest.snapshot_patch !== evidence.snapshot_patch) {
    throw new Error('Autopilot readiness target or snapshot drift');
  }
  if (evidence.provider_calls !== 0 || evidence.model_calls !== 0 || evidence.cursor_calls !== 0 ||
      (evidence.schema_version === '0.2' && evidence.browser_calls !== 0)) {
    throw new Error('provider-zero readiness evidence contains an external execution');
  }
  const root = resolve(repoRoot);
  const boundPaths = validateSourceBindings(evidence, root);
  validateFreshReadinessManifest(manifest, evidence, root, boundPaths);
  validateDeterministicTestEvidence(evidence, boundPaths);
  validateCalibration(evidence, root);
  validateDistributionAndAuthority(evidence);
  try {
    execFileSync('git', ['merge-base', '--is-ancestor', evidence.source_commit, 'HEAD'], { cwd: root, stdio: 'ignore' });
  } catch {
    throw new Error('provider-zero evidence source commit is not an ancestor of HEAD');
  }

  if (!Array.isArray(manifest.gates) || manifest.gates.length !== EXPECTED_GATE_IDS.length) {
    throw new Error('Autopilot readiness must contain exactly ten gates');
  }
  const ids = manifest.gates.map((gate) => gate?.id);
  if (new Set(ids).size !== ids.length || JSON.stringify(ids) !== JSON.stringify(EXPECTED_GATE_IDS)) {
    throw new Error('Autopilot readiness gate IDs or order drift');
  }
  const gates = manifest.gates.map((gate) => {
    if (!ALLOWED_STATUSES.has(gate.status)) throw new Error(`invalid gate status: ${gate.id}`);
    requireString(gate.requirement, `${gate.id}.requirement`);
    requireString(gate.current_boundary, `${gate.id}.current_boundary`);
    if (!Array.isArray(gate.evidence_refs) || !gate.evidence_refs.length) throw new Error(`${gate.id} requires repository evidence`);
    const references = gate.evidence_refs.map((reference) => {
      withinRepo(root, reference, `${gate.id} evidence`);
      return reference;
    });
    const ready = pointerValue(evidence, gate.pass_pointer) === true;
    if (gate.status === 'pass' && !ready) throw new Error(`${gate.id} cannot pass without machine evidence`);
    if (gate.status !== 'pass' && ready) throw new Error(`${gate.id} understates a satisfied machine gate`);
    return { id: gate.id, status: gate.status, ready, evidence_refs: references, pass_pointer: gate.pass_pointer };
  });
  const counts = Object.fromEntries([...ALLOWED_STATUSES].map((status) => [status, gates.filter((gate) => gate.status === status).length]));
  const promotionAllowed = counts.pass === EXPECTED_GATE_IDS.length;
  return {
    schema_version: '0.1',
    target_version: '2.0.0',
    snapshot_patch: manifest.snapshot_patch,
    source_commit: evidence.source_commit,
    counts,
    promotion_allowed: promotionAllowed,
    decision: promotionAllowed ? 'READY_FOR_USER_RELEASE_DECISION' : 'BLOCK_2_0_PROMOTION',
    unresolved_gate_ids: gates.filter((gate) => gate.status !== 'pass').map((gate) => gate.id),
    external_gate_ids: gates.filter((gate) => gate.status === 'external').map((gate) => gate.id),
    provider_calls: evidence.provider_calls,
    model_calls: evidence.model_calls,
    browser_calls: evidence.browser_calls ?? 0,
    cursor_calls: evidence.cursor_calls,
    gates,
  };
}

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    if (!argv[index]?.startsWith('--') || argv[index + 1] === undefined) throw new Error('arguments must be --key value pairs');
    args.set(argv[index].slice(2), argv[index + 1]);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = resolve(args.get('repo-root') ?? resolve(dirname(fileURLToPath(import.meta.url)), '../../..'));
  const manifestPath = resolve(args.get('manifest') ?? resolve(repoRoot, 'benchmarks/ui-resolve-bench/autopilot-v2-readiness.json'));
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const evidencePath = resolve(args.get('evidence') ?? resolve(repoRoot, manifest.machine_evidence));
  const report = evaluateAutopilotV2Readiness(manifest, JSON.parse(readFileSync(evidencePath, 'utf8')), repoRoot);
  const rendered = `${JSON.stringify(report, null, 2)}\n`;
  if (args.get('out')) writeFileSync(resolve(args.get('out')), rendered);
  process.stdout.write(rendered);
}

if (resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) await main();
