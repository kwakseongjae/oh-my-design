import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import {
  evaluateAutopilotV2Readiness,
  validateSourceBindings,
} from '../../../benchmarks/ui-resolve-bench/scripts/audit-autopilot-v2-readiness.mjs';

const repoRoot = resolve(import.meta.dirname, '../../..');
const manifest = JSON.parse(readFileSync(resolve(repoRoot, 'benchmarks/ui-resolve-bench/autopilot-v2-readiness.json'), 'utf8'));
const evidence = JSON.parse(readFileSync(resolve(repoRoot, manifest.machine_evidence), 'utf8'));
const clone = (value) => JSON.parse(JSON.stringify(value));
const temporaryRoots = [];
const bindingSha = (bytes) => createHash('sha256').update(bytes).digest('hex');

const REQUIRED_BINDING_PATHS = [
  'benchmarks/ui-resolve-bench/config/autopilot-v2-qualification.json',
  'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json',
  'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json',
  'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs',
  'skills/omd-autopilot/SKILL.md',
  'scripts/validate-project-design-system.cjs',
  'agents/omd-design-system-architect.md',
  'test/unit/cli/packaged-autopilot-smoke.test.ts',
];

function git(root, args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

function bindingFor(root, path) {
  const bytes = readFileSync(resolve(root, path));
  return { path, bytes: bytes.length, sha256: bindingSha(bytes) };
}

function commitAll(root, message) {
  git(root, ['add', '--all']);
  git(root, ['commit', '--quiet', '--allow-empty', '-m', message]);
  return git(root, ['rev-parse', 'HEAD']);
}

function initializeGit(root) {
  git(root, ['init', '--quiet']);
  git(root, ['config', 'user.email', 'readiness@example.test']);
  git(root, ['config', 'user.name', 'Readiness test']);
}

function tinyBindingRepo() {
  const root = mkdtempSync(resolve(tmpdir(), 'omd-readiness-binding-'));
  temporaryRoots.push(root);
  initializeGit(root);
  for (const [index, path] of REQUIRED_BINDING_PATHS.entries()) {
    const target = resolve(root, path);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, `binding-${index}\n`);
  }
  const sourceCommit = commitAll(root, 'sealed source');
  return {
    root,
    evidence: {
      source_commit: sourceCommit,
      source_bindings: REQUIRED_BINDING_PATHS.map((path) => bindingFor(root, path)),
    },
  };
}

let sealedRepoRoot;
let sealedEvidence;

beforeAll(() => {
  sealedRepoRoot = mkdtempSync(resolve(tmpdir(), 'omd-readiness-evaluate-'));
  temporaryRoots.push(sealedRepoRoot);
  execFileSync('git', ['clone', '--quiet', '--shared', repoRoot, sealedRepoRoot], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  git(sealedRepoRoot, ['config', 'user.email', 'readiness@example.test']);
  git(sealedRepoRoot, ['config', 'user.name', 'Readiness test']);
  for (const binding of evidence.source_bindings) {
    const target = resolve(sealedRepoRoot, binding.path);
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(resolve(repoRoot, binding.path), target);
  }
  const sourceCommit = commitAll(sealedRepoRoot, 'bind current readiness authorities');
  sealedEvidence = clone(evidence);
  sealedEvidence.source_commit = sourceCommit;
  sealedEvidence.source_bindings = evidence.source_bindings.map((binding) => bindingFor(sealedRepoRoot, binding.path));
});

afterAll(() => {
  for (const root of temporaryRoots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('Autopilot 2.0 readiness authority', () => {
  it('reports the current three pass gates without promoting 2.0', () => {
    const report = evaluateAutopilotV2Readiness(manifest, sealedEvidence, sealedRepoRoot);
    expect(report).toMatchObject({
      target_version: '2.0.0',
      counts: { pass: 3, partial: 3, open: 3, external: 1 },
      promotion_allowed: false,
      decision: 'BLOCK_2_0_PROMOTION',
      provider_calls: 0,
      model_calls: 0,
      cursor_calls: 0,
    });
    expect(report.unresolved_gate_ids).toHaveLength(7);
    expect(report.external_gate_ids).toEqual(['blind-practitioner-review']);
  });

  it('rejects promotion language when machine evidence is false', () => {
    const changed = clone(manifest);
    changed.gates.find((gate) => gate.id === 'greenfield-reliability').status = 'pass';
    expect(() => evaluateAutopilotV2Readiness(changed, sealedEvidence, sealedRepoRoot)).toThrow(/cannot pass without machine evidence/);
  });

  it('rejects a stale or forged source binding', () => {
    const changed = clone(sealedEvidence);
    changed.source_bindings[0].sha256 = '0'.repeat(64);
    expect(() => evaluateAutopilotV2Readiness(manifest, changed, sealedRepoRoot)).toThrow(/drift from acceptance bytes/);
  });

  it('rejects legacy gate substitution and denominator inflation', () => {
    const changedManifest = clone(manifest);
    changedManifest.gates[0].id = 'verified-skill-lift';
    expect(() => evaluateAutopilotV2Readiness(changedManifest, sealedEvidence, sealedRepoRoot)).toThrow(/gate IDs or order drift/);
    const changedEvidence = clone(sealedEvidence);
    changedEvidence.calibration.targeted_mutant_cell_count = 73;
    expect(() => evaluateAutopilotV2Readiness(manifest, changedEvidence, sealedRepoRoot)).toThrow(/calibration acceptance is incomplete/);
  });

  it('keeps the historic 1.9.881 acceptance immutable and fails it against changed authority bytes', () => {
    expect(() => evaluateAutopilotV2Readiness(manifest, evidence, repoRoot)).toThrow(/drift from acceptance bytes/);
  });

  it('accepts only bindings whose acceptance, worktree, and source commit bytes are identical', () => {
    const fixture = tinyBindingRepo();
    expect(() => validateSourceBindings(fixture.evidence, fixture.root)).not.toThrow();
  });

  it('rejects an uncommitted bound-file change', () => {
    const fixture = tinyBindingRepo();
    writeFileSync(resolve(fixture.root, REQUIRED_BINDING_PATHS[0]), 'uncommitted\n');
    expect(() => validateSourceBindings(fixture.evidence, fixture.root)).toThrow(/drift from acceptance bytes/);
  });

  it('rejects acceptance bytes that match the worktree but not source_commit', () => {
    const fixture = tinyBindingRepo();
    const oldCommit = fixture.evidence.source_commit;
    writeFileSync(resolve(fixture.root, REQUIRED_BINDING_PATHS[0]), 'new committed bytes\n');
    commitAll(fixture.root, 'move authority bytes');
    const changed = {
      source_commit: oldCommit,
      source_bindings: REQUIRED_BINDING_PATHS.map((path) => bindingFor(fixture.root, path)),
    };
    expect(() => validateSourceBindings(changed, fixture.root)).toThrow(/drift from source_commit/);
  });

  it('rejects missing commits and paths absent from the declared commit', () => {
    const fixture = tinyBindingRepo();
    expect(() => validateSourceBindings({ ...fixture.evidence, source_commit: '0'.repeat(40) }, fixture.root))
      .toThrow(/source_commit is missing/);

    const uncommittedPath = 'skills/omd-autopilot/new-authority.md';
    writeFileSync(resolve(fixture.root, uncommittedPath), 'not in source commit\n');
    const changed = clone(fixture.evidence);
    changed.source_bindings.push(bindingFor(fixture.root, uncommittedPath));
    expect(() => validateSourceBindings(changed, fixture.root)).toThrow(/missing from source_commit/);
  });

  it('rejects current and committed symlink authority paths', () => {
    const currentFixture = tinyBindingRepo();
    const currentPath = resolve(currentFixture.root, REQUIRED_BINDING_PATHS.at(-1));
    unlinkSync(currentPath);
    symlinkSync(resolve(currentFixture.root, REQUIRED_BINDING_PATHS[0]), currentPath);
    expect(() => validateSourceBindings(currentFixture.evidence, currentFixture.root)).toThrow(/must be a regular file/);

    const committedFixture = tinyBindingRepo();
    const historicalPath = resolve(committedFixture.root, REQUIRED_BINDING_PATHS.at(-1));
    unlinkSync(historicalPath);
    symlinkSync('historical-target', historicalPath);
    const symlinkCommit = commitAll(committedFixture.root, 'commit symlink authority');
    unlinkSync(historicalPath);
    writeFileSync(historicalPath, 'historical-target');
    const changed = {
      source_commit: symlinkCommit,
      source_bindings: REQUIRED_BINDING_PATHS.map((path) => bindingFor(committedFixture.root, path)),
    };
    expect(() => validateSourceBindings(changed, committedFixture.root)).toThrow(/regular file in source_commit/);
  });
});
