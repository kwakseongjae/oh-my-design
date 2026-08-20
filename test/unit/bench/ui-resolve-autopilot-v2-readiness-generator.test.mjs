import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  HISTORICAL_CALIBRATION_PATH,
  PROVIDER_ZERO_TEST_COMMAND,
  REQUIRED_SOURCE_PATHS,
  assertCleanSourceCommit,
  generateAutopilotV2Readiness,
} from '../../../benchmarks/ui-resolve-bench/scripts/generate-autopilot-v2-readiness.mjs';
import { evaluateAutopilotV2Readiness } from '../../../benchmarks/ui-resolve-bench/scripts/audit-autopilot-v2-readiness.mjs';

const repoRoot = resolve(import.meta.dirname, '../../..');
const roots = [];
const sha = (bytes) => createHash('sha256').update(bytes).digest('hex');

function git(root, args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

function commitAll(root, message) {
  git(root, ['add', '--all']);
  git(root, ['commit', '--quiet', '-m', message]);
  return git(root, ['rev-parse', 'HEAD']);
}

function fixture() {
  const root = mkdtempSync(resolve(tmpdir(), 'omd-readiness-generator-'));
  roots.push(root);
  git(root, ['init', '--quiet']);
  git(root, ['config', 'user.email', 'generator@example.test']);
  git(root, ['config', 'user.name', 'Generator test']);

  for (const path of REQUIRED_SOURCE_PATHS) {
    const target = resolve(root, path);
    mkdirSync(dirname(target), { recursive: true });
    if (path === HISTORICAL_CALIBRATION_PATH) continue;
    cpSync(resolve(repoRoot, path), target);
  }
  const historicalManifest = JSON.parse(readFileSync(resolve(repoRoot, 'benchmarks/ui-resolve-bench/autopilot-v2-readiness.json'), 'utf8'));
  for (const reference of new Set(historicalManifest.gates.flatMap((gate) => gate.evidence_refs))) {
    const target = resolve(root, reference);
    if (existsSync(target)) continue;
    mkdirSync(dirname(target), { recursive: true });
    cpSync(resolve(repoRoot, reference), target, { recursive: true });
  }
  cpSync(
    resolve(repoRoot, 'benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield'),
    resolve(root, 'benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield'),
    { recursive: true },
  );

  const historicalSourceCommit = commitAll(root, 'calibration authority source');
  const authorityPaths = [
    'benchmarks/ui-resolve-bench/config/autopilot-v2-qualification.json',
    'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json',
    'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json',
    'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs',
  ];
  const sourceBindings = authorityPaths.map((path) => {
    const bytes = readFileSync(resolve(root, path));
    return { path, sha256: sha(bytes), bytes: bytes.length };
  });
  const historicalTarget = resolve(root, HISTORICAL_CALIBRATION_PATH);
  mkdirSync(dirname(historicalTarget), { recursive: true });
  writeFileSync(historicalTarget, `${JSON.stringify({
    schema_version: '0.1',
    source_commit: historicalSourceCommit,
    source_bindings: sourceBindings,
    calibration: { pass: true, current_hash_browser_replay_pass: true },
  }, null, 2)}\n`);
  const evidenceCommit = commitAll(root, 'seal historical calibration evidence');

  const manifestReference = 'benchmarks/ui-resolve-bench/autopilot-v2-readiness-1.9.882.json';
  const outReference = 'benchmarks/ui-resolve-bench/reports/autopilot-v2-provider-zero-1.9.882';
  const manifest = {
    ...historicalManifest,
    snapshot_patch: '1.9.882',
    machine_evidence: `${outReference}/ACCEPTANCE.json`,
  };
  const manifestTarget = resolve(root, manifestReference);
  mkdirSync(dirname(manifestTarget), { recursive: true });
  writeFileSync(manifestTarget, `${JSON.stringify(manifest, null, 2)}\n`);
  const sourceCommit = commitAll(root, 'bind readiness generator source');
  return { root, historicalSourceCommit, evidenceCommit, manifestReference, outReference, sourceCommit };
}

afterEach(() => {
  vi.restoreAllMocks();
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('Autopilot 2.0 readiness generator', () => {
  it('runs the exact deterministic provider-zero command and atomically writes a fresh snapshot', () => {
    const data = fixture();
    const runCommand = vi.fn();
    const result = generateAutopilotV2Readiness({ ...data, repoRoot: data.root, runCommand });

    expect(runCommand).toHaveBeenCalledOnce();
    expect(runCommand).toHaveBeenCalledWith(data.root, [...PROVIDER_ZERO_TEST_COMMAND]);
    expect(result.acceptance).toMatchObject({
      schema_version: '0.2',
      snapshot_patch: '1.9.882',
      source_commit: data.sourceCommit,
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 0,
      cursor_calls: 0,
      deterministic_test_evidence: { pass: true },
      calibration: {
        browser_replay_executed_in_this_snapshot: false,
        inherited_from: {
          evidence_commit: data.evidenceCommit,
          source_commit: data.historicalSourceCommit,
        },
      },
    });
    expect(result.report).toMatchObject({ counts: { pass: 3 }, promotion_allowed: false });
    expect(existsSync(resolve(data.root, data.outReference, 'ACCEPTANCE.json'))).toBe(true);
    expect(existsSync(resolve(data.root, data.outReference, 'READINESS.json'))).toBe(true);
    expect(existsSync(resolve(data.root, data.outReference, 'STATUS.md'))).toBe(true);
    const manifest = JSON.parse(readFileSync(resolve(data.root, data.manifestReference), 'utf8'));
    const forgedInheritance = structuredClone(result.acceptance);
    forgedInheritance.calibration.inherited_from.sha256 = '0'.repeat(64);
    expect(() => evaluateAutopilotV2Readiness(manifest, forgedInheritance, data.root)).toThrow(/historical calibration evidence hash drift/);
    const forgedFixture = structuredClone(result.acceptance);
    forgedFixture.calibration.inherited_from.fixture_bindings[0].sha256 = '0'.repeat(64);
    expect(() => evaluateAutopilotV2Readiness(manifest, forgedFixture, data.root)).toThrow(/calibration fixture drift/);
    const forgedCommand = structuredClone(result.acceptance);
    forgedCommand.deterministic_test_evidence.commands[0].exit_code = 1;
    expect(() => evaluateAutopilotV2Readiness(manifest, forgedCommand, data.root)).toThrow(/deterministic test command is incomplete/);
    const legacyBypass = structuredClone(result.acceptance);
    legacyBypass.schema_version = '0.1';
    legacyBypass.calibration.current_hash_browser_replay_pass = true;
    expect(() => evaluateAutopilotV2Readiness(manifest, legacyBypass, data.root)).toThrow(/schema does not match/);
    expect(() => generateAutopilotV2Readiness({ ...data, repoRoot: data.root, runCommand })).toThrow(/clean worktree/);
  }, 15_000);

  it('requires exact clean HEAD and rejects uncommitted or wrong commits', () => {
    const data = fixture();
    expect(() => assertCleanSourceCommit(data.root, data.sourceCommit)).not.toThrow();
    expect(() => assertCleanSourceCommit(data.root, data.historicalSourceCommit)).toThrow(/equal HEAD/);
    writeFileSync(resolve(data.root, 'dirty.txt'), 'dirty\n');
    expect(() => assertCleanSourceCommit(data.root, data.sourceCommit)).toThrow(/completely clean/);
    expect(() => assertCleanSourceCommit(data.root, data.sourceCommit.slice(0, 39))).toThrow(/full 40-character/);
  });

  it('rejects calibration authority drift instead of copying historical pass fields', () => {
    const data = fixture();
    const authority = resolve(data.root, 'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json');
    writeFileSync(authority, `${readFileSync(authority, 'utf8')}\n`);
    const sourceCommit = commitAll(data.root, 'drift calibration authority');
    expect(() => generateAutopilotV2Readiness({ ...data, repoRoot: data.root, sourceCommit, runCommand: vi.fn() }))
      .toThrow(/calibration authority drift/);
  });

  it('rejects traversal, overwrite, and symlinked output ancestors without running tests', () => {
    const traversal = fixture();
    const runner = vi.fn();
    expect(() => generateAutopilotV2Readiness({
      ...traversal,
      repoRoot: traversal.root,
      outReference: '../escaped',
      runCommand: runner,
    })).toThrow(/repository-relative/);
    expect(runner).not.toHaveBeenCalled();

    const overwrite = fixture();
    mkdirSync(resolve(overwrite.root, overwrite.outReference), { recursive: true });
    writeFileSync(resolve(overwrite.root, overwrite.outReference, 'existing.txt'), 'occupied\n');
    const overwriteCommit = commitAll(overwrite.root, 'occupy output');
    expect(() => generateAutopilotV2Readiness({
      ...overwrite,
      repoRoot: overwrite.root,
      sourceCommit: overwriteCommit,
      runCommand: vi.fn(),
    })).toThrow(/overwrite/);

    const linked = fixture();
    const linkedParentReference = 'benchmarks/ui-resolve-bench/output-link';
    const linkedOutReference = `${linkedParentReference}/autopilot-v2-provider-zero-1.9.882`;
    const outside = resolve(linked.root, 'linked-output-target');
    mkdirSync(outside);
    symlinkSync(outside, resolve(linked.root, linkedParentReference));
    const manifestPath = resolve(linked.root, linked.manifestReference);
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    manifest.machine_evidence = `${linkedOutReference}/ACCEPTANCE.json`;
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    const linkedCommit = commitAll(linked.root, 'bind symlinked output path');
    expect(() => generateAutopilotV2Readiness({
      ...linked,
      repoRoot: linked.root,
      sourceCommit: linkedCommit,
      outReference: linkedOutReference,
      runCommand: vi.fn(),
    })).toThrow(/symlink/);
  });
});
