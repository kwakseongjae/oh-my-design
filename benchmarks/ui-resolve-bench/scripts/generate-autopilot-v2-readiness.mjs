#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluateAutopilotV2Readiness } from './audit-autopilot-v2-readiness.mjs';

export const HISTORICAL_CALIBRATION_PATH =
  'benchmarks/ui-resolve-bench/reports/autopilot-v2-provider-zero-1.9.881/ACCEPTANCE.json';

export const REQUIRED_SOURCE_PATHS = Object.freeze([
  'benchmarks/ui-resolve-bench/config/autopilot-v2-qualification.json',
  'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json',
  'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json',
  'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs',
  'benchmarks/ui-resolve-bench/scripts/run-autopilot-clean-dir-canary.mjs',
  'benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.2.json',
  'benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs',
  'benchmarks/ui-resolve-bench/scripts/audit-autopilot-v2-readiness.mjs',
  'benchmarks/ui-resolve-bench/scripts/generate-autopilot-v2-readiness.mjs',
  'skills/omd-autopilot/SKILL.md',
  'skills/omd-autopilot/references/design-system-contract.md',
  'agents/omd-design-system-architect.md',
  'scripts/design-md-core-schema.cjs',
  'scripts/design-md-core-conformance.cjs',
  'scripts/design-md-core.cjs',
  'scripts/prepare-design-md-core-review.cjs',
  'scripts/compile-design-md-core.cjs',
  'scripts/adopt-design-md-core.cjs',
  'scripts/migrate-design-md-core.cjs',
  'scripts/validate-project-design-system.cjs',
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
]);

export const PROVIDER_ZERO_TEST_COMMAND = Object.freeze([
  'npm',
  'exec',
  '--offline',
  '--',
  'vitest',
  'run',
  'test/unit/cli/packaged-autopilot-smoke.test.ts',
  'test/unit/cli/packaged-design-md-core-smoke.test.ts',
  'test/unit/bench/ui-resolve-autopilot-clean-dir-canary.test.mjs',
]);

const CALIBRATION_AUTHORITY_PATHS = Object.freeze([
  'benchmarks/ui-resolve-bench/config/autopilot-v2-qualification.json',
  'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json',
  'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json',
  'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs',
]);

function sha(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function gitBytes(repoRoot, args, label) {
  try {
    return execFileSync('git', args, {
      cwd: repoRoot,
      encoding: null,
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
  } catch (error) {
    const detail = error?.stderr?.toString('utf8').trim();
    throw new Error(detail ? `${label}: ${detail}` : label);
  }
}

function gitText(repoRoot, args, label) {
  return gitBytes(repoRoot, args, label).toString('utf8').trim();
}

function requireRelative(reference, label) {
  if (typeof reference !== 'string' || !reference.trim()) throw new Error(`${label} must be a non-empty repository-relative path`);
  if (isAbsolute(reference) || reference.split(/[\\/]/).includes('..')) throw new Error(`${label} must be repository-relative`);
  return reference;
}

function lexicalRepoPath(repoRoot, reference, label) {
  requireRelative(reference, label);
  const path = resolve(repoRoot, reference);
  if (path !== repoRoot && !path.startsWith(`${repoRoot}${sep}`)) throw new Error(`${label} escapes repository`);
  return path;
}

function rejectSymlinkAncestors(repoRoot, path, label, includeLeaf = true) {
  const root = resolve(repoRoot);
  const relativePath = relative(root, path);
  let cursor = root;
  const segments = relativePath ? relativePath.split(sep) : [];
  const limit = includeLeaf ? segments.length : Math.max(segments.length - 1, 0);
  for (let index = 0; index < limit; index += 1) {
    cursor = resolve(cursor, segments[index]);
    if (existsSync(cursor) && lstatSync(cursor).isSymbolicLink()) throw new Error(`${label} contains a symlink: ${relative(root, cursor)}`);
  }
}

function regularRepoFile(repoRoot, reference, label) {
  const path = lexicalRepoPath(repoRoot, reference, label);
  rejectSymlinkAncestors(repoRoot, path, label);
  if (!existsSync(path)) throw new Error(`${label} is missing: ${reference}`);
  const stat = lstatSync(path);
  if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`${label} must be a regular file: ${reference}`);
  const realRoot = realpathSync(repoRoot);
  const realPath = realpathSync(path);
  if (realPath !== realRoot && !realPath.startsWith(`${realRoot}${sep}`)) throw new Error(`${label} resolves outside repository`);
  return path;
}

function committedRegularBytes(repoRoot, sourceCommit, reference) {
  const tree = gitBytes(repoRoot, ['ls-tree', '-z', sourceCommit, '--', reference], `cannot inspect committed path: ${reference}`);
  const entry = tree.toString('utf8').replace(/\0$/, '');
  const metadata = /^(\d{6})\s+(\S+)\s+([0-9a-f]+)\t/.exec(entry);
  if (!metadata || metadata[2] !== 'blob' || !new Set(['100644', '100755']).has(metadata[1])) {
    throw new Error(`source path must be a committed regular file: ${reference}`);
  }
  return gitBytes(repoRoot, ['show', `${sourceCommit}:${reference}`], `cannot read committed path: ${reference}`);
}

function sourceBinding(repoRoot, sourceCommit, reference) {
  const path = regularRepoFile(repoRoot, reference, 'source binding');
  const current = readFileSync(path);
  const committed = committedRegularBytes(repoRoot, sourceCommit, reference);
  if (!current.equals(committed)) throw new Error(`source binding differs from source_commit: ${reference}`);
  return { path: reference, sha256: sha(current), bytes: current.length };
}

export function assertCleanSourceCommit(repoRoot, sourceCommit) {
  if (!/^[0-9a-f]{40}$/.test(sourceCommit ?? '')) throw new Error('source_commit must be a full 40-character lowercase hexadecimal commit ID');
  const head = gitText(repoRoot, ['rev-parse', 'HEAD'], 'cannot resolve HEAD');
  if (head !== sourceCommit) throw new Error('source_commit must equal HEAD');
  gitBytes(repoRoot, ['cat-file', '-e', `${sourceCommit}^{commit}`], 'source_commit is missing or is not a commit');
  const status = gitBytes(
    repoRoot,
    ['status', '--porcelain=v1', '-z', '--untracked-files=all'],
    'cannot inspect repository status',
  );
  if (status.length !== 0) throw new Error('readiness generation requires a completely clean worktree');
}

function calibrationInheritance(repoRoot, sourceCommit) {
  const historicalPath = regularRepoFile(repoRoot, HISTORICAL_CALIBRATION_PATH, 'historical calibration evidence');
  const historicalBytes = readFileSync(historicalPath);
  const committedBytes = committedRegularBytes(repoRoot, sourceCommit, HISTORICAL_CALIBRATION_PATH);
  if (!historicalBytes.equals(committedBytes)) throw new Error('historical calibration evidence differs from source_commit');
  const historical = JSON.parse(historicalBytes.toString('utf8'));
  if (!/^[0-9a-f]{40}$/.test(historical.source_commit ?? '')) throw new Error('historical calibration source_commit is invalid');
  if (historical.calibration?.pass !== true || historical.calibration?.current_hash_browser_replay_pass !== true) {
    throw new Error('historical calibration evidence did not pass its browser replay');
  }
  try {
    execFileSync('git', ['merge-base', '--is-ancestor', historical.source_commit, sourceCommit], {
      cwd: repoRoot,
      stdio: 'ignore',
    });
  } catch {
    throw new Error('historical calibration source_commit is not an ancestor of source_commit');
  }
  const evidenceCommit = gitText(
    repoRoot,
    ['log', '-1', '--format=%H', sourceCommit, '--', HISTORICAL_CALIBRATION_PATH],
    'cannot resolve historical calibration evidence commit',
  );
  if (!/^[0-9a-f]{40}$/.test(evidenceCommit)) throw new Error('historical calibration evidence has no committed ancestor');
  const historicalBindings = new Map((historical.source_bindings ?? []).map((binding) => [binding.path, binding]));
  const authorityBindings = CALIBRATION_AUTHORITY_PATHS.map((path) => {
    const current = sourceBinding(repoRoot, sourceCommit, path);
    const inherited = historicalBindings.get(path);
    if (!inherited || inherited.sha256 !== current.sha256 || inherited.bytes !== current.bytes) {
      throw new Error(`calibration authority drift prevents inheritance: ${path}`);
    }
    return current;
  });
  const tasks = JSON.parse(readFileSync(resolve(repoRoot, CALIBRATION_AUTHORITY_PATHS[1]), 'utf8'));
  const fixtureBindings = tasks.tasks.flatMap((task) => ['oracle-a', 'oracle-b'].map((oracle) => {
    const path = `benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield/${task.id}/${oracle}/index.html`;
    const current = sourceBinding(repoRoot, sourceCommit, path);
    const historicalFixtureBytes = committedRegularBytes(repoRoot, historical.source_commit, path);
    if (current.sha256 !== sha(historicalFixtureBytes) || current.bytes !== historicalFixtureBytes.length) {
      throw new Error(`calibration fixture drift prevents inheritance: ${path}`);
    }
    return current;
  }));
  return {
    mode: 'immutable-historical-browser-replay',
    path: HISTORICAL_CALIBRATION_PATH,
    sha256: sha(historicalBytes),
    bytes: historicalBytes.length,
    evidence_commit: evidenceCommit,
    source_commit: historical.source_commit,
    authority_bindings: authorityBindings,
    fixture_bindings: fixtureBindings,
  };
}

function parseManifest(repoRoot, manifestReference, expectedEvidenceReference) {
  const path = regularRepoFile(repoRoot, manifestReference, 'readiness manifest');
  const manifest = JSON.parse(readFileSync(path, 'utf8'));
  if (!/^1\.9\.\d+$/.test(manifest.snapshot_patch ?? '') || manifest.snapshot_patch === '1.9.881') {
    throw new Error('readiness manifest must declare a fresh 1.9.x snapshot_patch');
  }
  if (manifest.machine_evidence !== expectedEvidenceReference) {
    throw new Error(`readiness manifest machine_evidence must equal ${expectedEvidenceReference}`);
  }
  return manifest;
}

function defaultCommandRunner(repoRoot, command) {
  execFileSync(command[0], command.slice(1), {
    cwd: repoRoot,
    env: { ...process.env, CI: '1', npm_config_offline: 'true' },
    maxBuffer: 128 * 1024 * 1024,
    stdio: ['ignore', 'inherit', 'inherit'],
  });
}

function statusMarkdown(report) {
  return `# OmD 2.0 Autopilot readiness snapshot — ${report.snapshot_patch}\n\n` +
    `Decision: **${report.decision.replaceAll('_', ' ')}**.\n\n` +
    `Provider-zero deterministic gates pass ${report.counts.pass} of 10. ` +
    `This snapshot records ${report.counts.partial} partial, ${report.counts.open} open, and ` +
    `${report.counts.external} external gate(s). It does not authorize a 2.0 promotion or a public one-prompt superiority claim.\n\n` +
    `Package, four-channel installation, Core v2 transaction, clean-directory handoff, and authority perturbation tests were rerun at exact source commit \`${report.source_commit}\`. ` +
    `Provider, model, browser, and Cursor calls were zero.\n\n` +
    `The 24-oracle and 72-mutant browser calibration was not rerun. Its pass is inherited only because the immutable 1.9.881 evidence and all four calibration authority files are byte-identical and ancestor-bound.\n`;
}

function writeFreshDirectory(repoRoot, outReference, files) {
  const outPath = lexicalRepoPath(repoRoot, outReference, 'output directory');
  const parent = dirname(outPath);
  rejectSymlinkAncestors(repoRoot, parent, 'output directory parent');
  if (!existsSync(parent) || !lstatSync(parent).isDirectory()) throw new Error('output directory parent must be an existing directory');
  if (existsSync(outPath)) throw new Error(`refusing to overwrite existing output path: ${outReference}`);
  const temporary = mkdtempSync(resolve(parent, `.${basename(outPath)}.tmp-`));
  try {
    for (const [name, content] of Object.entries(files)) {
      writeFileSync(resolve(temporary, name), content, { flag: 'wx', mode: 0o644 });
    }
    renameSync(temporary, outPath);
  } catch (error) {
    rmSync(temporary, { recursive: true, force: true });
    throw error;
  }
}

function assertFreshOutputPath(repoRoot, outReference) {
  const outPath = lexicalRepoPath(repoRoot, outReference, 'output directory');
  const parent = dirname(outPath);
  rejectSymlinkAncestors(repoRoot, parent, 'output directory parent');
  if (!existsSync(parent) || !lstatSync(parent).isDirectory()) throw new Error('output directory parent must be an existing directory');
  if (existsSync(outPath)) throw new Error(`refusing to overwrite existing output path: ${outReference}`);
}

export function generateAutopilotV2Readiness({
  repoRoot,
  sourceCommit,
  manifestReference,
  outReference,
  runCommand = defaultCommandRunner,
}) {
  const root = resolve(repoRoot);
  assertCleanSourceCommit(root, sourceCommit);
  requireRelative(outReference, 'output directory');
  assertFreshOutputPath(root, outReference);
  const evidenceReference = `${outReference.replace(/[\\/]$/, '')}/ACCEPTANCE.json`;
  const manifest = parseManifest(root, manifestReference, evidenceReference);
  const inheritance = calibrationInheritance(root, sourceCommit);
  const bindings = [...new Set([
    ...REQUIRED_SOURCE_PATHS,
    ...inheritance.fixture_bindings.map((binding) => binding.path),
    manifestReference,
  ])].sort((left, right) => left.localeCompare(right))
    .map((path) => sourceBinding(root, sourceCommit, path));

  runCommand(root, [...PROVIDER_ZERO_TEST_COMMAND]);

  const acceptance = {
    schema_version: '0.2',
    snapshot_patch: manifest.snapshot_patch,
    source_commit: sourceCommit,
    execution_scope: 'provider-zero-clean-commit-deterministic-tests',
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    cursor_calls: 0,
    source_bindings: bindings,
    readiness_manifest: bindings.find((binding) => binding.path === manifestReference),
    deterministic_test_evidence: {
      pass: true,
      commands: [{
        argv: [...PROVIDER_ZERO_TEST_COMMAND],
        exit_code: 0,
        assertions: [
          'npm-pack-tarball-offline-four-channel-install-and-doctor',
          'installed-autopilot-handoff-and-six-case-authority-matrix',
          'packaged-design-md-core-v2-transaction',
          'provider-zero-clean-directory-canary-handoff',
        ],
      }],
    },
    distribution: {
      pass: true,
      source: 'npm-pack-tarball-offline-consumer-install',
      channels: ['claude-code', 'codex', 'opencode', 'cursor'],
      doctor_state: 'ready',
      installed_helper_terminal_state: 'HANDOFF',
      question_batches: 0,
      bounded_repairs: 1,
    },
    authority_matrix: {
      pass: true,
      case_count: 6,
      outcomes: {
        'existing-compatible-design-system': 'reuse',
        'explicit-establish-authority': 'establish',
        'explicit-refresh-authority': 'refresh',
        'explicit-surface-local-only': 'surface-local-only',
        'broad-greenfield-missing-authority': 'AWAIT_USER',
        'exact-brand-missing-source': 'blocked',
      },
      unsupported_auto_decisions: 0,
      maximum_question_batches: 1,
    },
    design_system_proof: {
      portable_core_v2_transaction_pass: true,
      hash_bound_adoption_required: true,
      unknown_as_absence_required: true,
      scheduled_model_task_rate_observed: false,
    },
    calibration: {
      pass: true,
      evidence_mode: 'immutable-historical-inheritance',
      browser_replay_executed_in_this_snapshot: false,
      task_count: 12,
      authority_case_count: 6,
      valid_oracle_count: 24,
      targeted_mutant_definition_count: 36,
      targeted_mutant_cell_count: 72,
      viewports: ['1440x900', '390x844', '320x720', '720x450-reflow-200pct'],
      inherited_from: inheritance,
      claim_boundary: 'unchanged-evaluator-calibration-only-not-model-or-skill-performance',
    },
    gate_evidence: {
      'natural-language-package-parity': true,
      'selective-authority-escalation': true,
      'design-system-quality-and-conformance': false,
      'greenfield-reliability': false,
      'same-prompt-skill-lift': false,
      'three-model-transfer': false,
      'autonomy-quality-cost-pareto': false,
      'calibrated-greenfield-denominator': true,
      'blind-practitioner-review': false,
      'reproducible-independent-claim-audit': false,
    },
  };
  const report = evaluateAutopilotV2Readiness(manifest, acceptance, root);
  const files = {
    'ACCEPTANCE.json': `${JSON.stringify(acceptance, null, 2)}\n`,
    'READINESS.json': `${JSON.stringify(report, null, 2)}\n`,
    'STATUS.md': statusMarkdown(report),
  };
  writeFreshDirectory(root, outReference, files);
  return { acceptance, report, files };
}

function parseArgs(argv) {
  const allowed = new Set(['repo-root', 'source-commit', 'manifest', 'out-dir']);
  const args = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    const flag = argv[index];
    const value = argv[index + 1];
    if (!flag?.startsWith('--') || value === undefined) throw new Error('arguments must be --key value pairs');
    const key = flag.slice(2);
    if (!allowed.has(key)) throw new Error(`unknown argument: --${key}`);
    if (args.has(key)) throw new Error(`duplicate argument: --${key}`);
    args.set(key, value);
  }
  for (const required of ['source-commit', 'manifest', 'out-dir']) {
    if (!args.has(required)) throw new Error(`missing required argument: --${required}`);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = resolve(args.get('repo-root') ?? resolve(dirname(fileURLToPath(import.meta.url)), '../../..'));
  const result = generateAutopilotV2Readiness({
    repoRoot,
    sourceCommit: args.get('source-commit'),
    manifestReference: args.get('manifest'),
    outReference: args.get('out-dir'),
  });
  process.stdout.write(`${JSON.stringify(result.report, null, 2)}\n`);
}

if (resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) await main();
