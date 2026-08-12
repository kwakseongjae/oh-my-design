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

function validateSourceBindings(evidence, repoRoot) {
  if (!Array.isArray(evidence.source_bindings) || evidence.source_bindings.length < 8) {
    throw new Error('provider-zero evidence must bind the Autopilot source set');
  }
  const paths = new Set();
  for (const binding of evidence.source_bindings) {
    const path = withinRepo(repoRoot, binding.path, 'source binding');
    if (paths.has(binding.path)) throw new Error(`duplicate source binding: ${binding.path}`);
    paths.add(binding.path);
    const stat = lstatSync(path);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`source binding must be a regular file: ${binding.path}`);
    const bytes = readFileSync(path);
    if (binding.bytes !== bytes.length || binding.sha256 !== sha(bytes)) {
      throw new Error(`source binding drift: ${binding.path}`);
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
  if (required.some((path) => !paths.has(path))) throw new Error('provider-zero evidence is missing a required source binding');
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
      calibration.targeted_mutant_definition_count !== 36 || calibration.targeted_mutant_cell_count !== 72 ||
      !calibration.current_hash_browser_replay_pass) {
    throw new Error('provider-zero calibration acceptance is incomplete');
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
  if (manifest.target_version !== '2.0.0' || manifest.required_gate_count !== 10 || manifest.snapshot_patch !== evidence.snapshot_patch) {
    throw new Error('Autopilot readiness target or snapshot drift');
  }
  if (evidence.provider_calls !== 0 || evidence.model_calls !== 0 || evidence.cursor_calls !== 0) {
    throw new Error('provider-zero readiness evidence contains an external execution');
  }
  const root = resolve(repoRoot);
  validateSourceBindings(evidence, root);
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
