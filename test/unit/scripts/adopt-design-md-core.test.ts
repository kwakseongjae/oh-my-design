import { afterEach, describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import {
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const adopterModule = require('../../../scripts/adopt-design-md-core.cjs') as {
  createCheckpointReceipt(pkg: Record<string, any>, reviewer: string): Record<string, any>;
  loadPackage(packageRoot: string): Record<string, any>;
  recoverInterruptedTransaction(projectRoot: string): { recovered: boolean; action: string | null };
};
const compiler = resolve(process.cwd(), 'scripts/compile-design-md-core.cjs');
const reviewTool = resolve(process.cwd(), 'scripts/prepare-design-md-core-review.cjs');
const adopter = resolve(process.cwd(), 'scripts/adopt-design-md-core.cjs');
const graphFixture = resolve(process.cwd(), 'spec/fixtures/design-md-core-v2/.omd/system/graph.json');
const roots: string[] = [];
const packageFiles = {
  design_md: 'DESIGN.md',
  graph: '.omd/system/graph.json',
  provenance: '.omd/system/provenance.json',
  coverage: '.omd/system/coverage.json',
  manifest: '.omd/system/manifest.json',
  adoption_receipt: '.omd/system/adoption-receipt.json',
} as const;
const sectionIds = [
  'experience',
  'foundations',
  'typography-assets',
  'components-states',
  'layout-platforms',
  'content-locales',
  'governance',
];
const sectionFragments: Record<string, string> = {
  experience: '1-experience',
  foundations: '2-foundations',
  'typography-assets': '3-typography-assets',
  'components-states': '4-components-states',
  'layout-platforms': '5-layout-platforms',
  'content-locales': '6-content-locales',
  governance: '7-governance',
};
const checkIds = [
  'portable_core_structure',
  'bound_system_authority',
  'token_reference_closure',
  'contrast',
  'component_state_coverage',
  'responsive_320_200',
  'reduced_motion',
  'assets_fonts_licenses',
  'implementation_contract_complete',
  'unknown_absence',
  'opaque_extension_preservation',
];

function sha256(value: string | Buffer): string {
  return createHash('sha256').update(value).digest('hex');
}

function jsonBytes(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function tempRoot(): string {
  const root = mkdtempSync(join(tmpdir(), 'omd-core-adopt-'));
  roots.push(root);
  return root;
}

function tree(root: string): Record<string, string> {
  const result: Record<string, string> = {};
  const walk = (directory: string, prefix = '') => {
    for (const name of readdirSync(directory).sort()) {
      const absolute = join(directory, name);
      const relative = prefix ? `${prefix}/${name}` : name;
      const stat = lstatSync(absolute);
      if (stat.isDirectory()) walk(absolute, relative);
      else if (stat.isFile()) result[relative] = sha256(readFileSync(absolute));
      else result[relative] = `non-regular:${stat.mode}`;
    }
  };
  walk(root);
  return result;
}

function validGraph(): Record<string, any> {
  const graph = JSON.parse(readFileSync(graphFixture, 'utf8'));
  graph.projection.sha256 = '0'.repeat(64);
  graph.governance.decisions[0].path = 'typography_assets.roles.0.family';
  delete graph.extensions;
  return graph;
}

function compilePackage(root: string, options: { resolvedEvidence?: boolean; duplicateEvidenceFile?: boolean } = {}): string {
  const inputs = join(root, 'compiler-inputs');
  const packageRoot = join(root, 'compiled-package');
  mkdirSync(inputs, { recursive: true });
  const graphPath = join(inputs, 'graph.json');
  const provenancePath = join(inputs, 'provenance.json');
  const coveragePath = join(inputs, 'coverage.json');
  const reviewPath = join(inputs, 'review.json');
  const reviewDir = join(inputs, 'prepared-review');
  const graph = validGraph();
  const graphBytes = jsonBytes(graph);
  const decisions = [options.resolvedEvidence ? {
    path: 'identity.name',
    source_class: 'repository-fact',
    value: graph.identity.name,
    evidence: [options.duplicateEvidenceFile ? 'task.md#name' : 'task.md'],
  } : {
    path: 'typography_assets.roles.0.family',
    source_class: 'unresolved',
    evidence: [],
  }];
  if (options.duplicateEvidenceFile) decisions.push({
    path: 'identity.scope',
    source_class: 'repository-fact',
    value: graph.identity.scope,
    evidence: ['task.md#scope'],
  });
  const provenanceBytes = jsonBytes({
    schema_version: '2.0.0',
    decisions,
  });
  const coverageBytes = jsonBytes({
    schema_version: '2.0.0',
    groups: Object.fromEntries(sectionIds.map((id) => [id, {
      status: 'covered',
      evidence: [`DESIGN.md#${sectionFragments[id]}`],
    }])),
    checks: Object.fromEntries(checkIds.map((id) => [id, {
      pass: true,
      method: 'controller-computed-system-graph-v2',
    }])),
  });
  writeFileSync(graphPath, graphBytes);
  writeFileSync(provenancePath, provenanceBytes);
  writeFileSync(coveragePath, coverageBytes);
  const prepared = spawnSync(process.execPath, [
    reviewTool, graphPath,
    '--provenance', provenancePath,
    '--coverage', coveragePath,
    '--out-dir', reviewDir,
  ], { encoding: 'utf8' });
  expect(prepared.status, `${prepared.stderr}\n${prepared.stdout}`).toBe(0);
  const approved = spawnSync(process.execPath, [
    reviewTool,
    '--approve', join(reviewDir, 'review-request.json'),
    '--reviewer', 'owner@example.test',
    '--out', reviewPath,
    '--authority-transition-approved',
  ], { encoding: 'utf8' });
  expect(approved.status, `${approved.stderr}\n${approved.stdout}`).toBe(0);
  const result = spawnSync(process.execPath, [
    compiler,
    join(reviewDir, 'input-graph.json'),
    '--provenance', join(reviewDir, 'provenance.json'),
    '--coverage', join(reviewDir, 'coverage.json'),
    '--review-receipt', reviewPath,
    '--out-dir', packageRoot,
    '--adopt',
  ], { encoding: 'utf8' });
  expect(result.status, `${result.stderr}\n${result.stdout}`).toBe(0);
  return packageRoot;
}

function packageHashes(packageRoot: string): Record<string, string> {
  return Object.fromEntries(Object.entries(packageFiles).map(([key, relative]) => [
    `${key}_sha256`,
    sha256(readFileSync(join(packageRoot, relative))),
  ]));
}

function checkpoint(root: string, packageRoot: string, mutate?: (receipt: Record<string, any>) => void): string {
  const receipt = adopterModule.createCheckpointReceipt(
    adopterModule.loadPackage(packageRoot),
    'owner@example.test',
  );
  mutate?.(receipt);
  const receiptPath = join(root, `checkpoint-${Math.random().toString(16).slice(2)}.json`);
  writeFileSync(receiptPath, jsonBytes(receipt));
  return receiptPath;
}

function project(root: string, withExisting = true): string {
  const projectRoot = join(root, 'project');
  mkdirSync(projectRoot, { recursive: true });
  if (withExisting) {
    writeFileSync(join(projectRoot, 'DESIGN.md'), '# Old project design\n');
    mkdirSync(join(projectRoot, '.omd/system/nested'), { recursive: true });
    writeFileSync(join(projectRoot, '.omd/system/old.json'), '{"old":true}\n');
    writeFileSync(join(projectRoot, '.omd/system/nested/keep.txt'), 'old-system\n');
  }
  return projectRoot;
}

function runAdopter(
  packageRoot: string,
  projectRoot: string,
  checkpointPath?: string,
  env?: Record<string, string>,
) {
  const args = [adopter, packageRoot, '--project-root', projectRoot];
  if (checkpointPath) args.push('--checkpoint-receipt', checkpointPath);
  return spawnSync(process.execPath, args, {
    encoding: 'utf8',
    env: { ...process.env, ...env },
  });
}

function runPrepare(
  packageRoot: string,
  output: string,
  options: { reviewer?: string; approve?: boolean } = {},
) {
  const args = [adopter, packageRoot, '--prepare-checkpoint', output];
  if (options.reviewer !== undefined) args.push('--reviewer', options.reviewer);
  if (options.approve !== false) args.push('--authority-transition-approved');
  return spawnSync(process.execPath, args, { encoding: 'utf8' });
}

function expectOldState(projectRoot: string, oldDesign: string, oldSystem: Record<string, string>) {
  expect(readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8')).toBe(oldDesign);
  expect(tree(join(projectRoot, '.omd/system'))).toEqual(oldSystem);
  expect(existsSync(join(projectRoot, '.omd/core-adoption-transaction.json'))).toBe(false);
  expect(existsSync(join(projectRoot, '.omd/adoptions'))).toBe(false);
  const siblings = readdirSync(dirname(projectRoot));
  expect(siblings.some((entry) => entry.startsWith(`.${basename(projectRoot)}.omd-core-adopt-`))).toBe(false);
}

afterEach(() => {
  while (roots.length) rmSync(roots.pop()!, { recursive: true, force: true });
});

describe('DESIGN.md Core v2 project adopter', () => {
  it('prepares the exact strict checkpoint atomically and the unchanged adopt mode accepts it', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const packageBefore = tree(packageRoot);
    const output = join(root, 'prepared-checkpoint.json');

    const prepared = runPrepare(packageRoot, output, { reviewer: 'owner@example.test' });

    expect(prepared.status, `${prepared.stderr}\n${prepared.stdout}`).toBe(0);
    const preparation = JSON.parse(prepared.stdout);
    const receipt = JSON.parse(readFileSync(output, 'utf8'));
    expect(preparation).toMatchObject({
      kind: 'design-md-core-project-adoption-checkpoint-preparation',
      status: 'prepared',
      approved: true,
      authority: { role: 'project-owner', identifier: 'owner@example.test' },
      checkpoint_receipt: output,
      checkpoint_receipt_sha256: sha256(readFileSync(output)),
      source_package: packageHashes(packageRoot),
    });
    expect(receipt).toEqual({
      attestation: {
        authority: { identifier: 'owner@example.test', role: 'project-owner' },
        authority_transition_approved: true,
        decision: 'approved',
        request_sha256: preparation.checkpoint_request_sha256,
      },
      kind: 'design-md-core-project-adoption-checkpoint',
      request: {
        kind: 'design-md-core-project-adoption-checkpoint-request',
        schema_version: '2.0.0',
        source_package: packageHashes(packageRoot),
        source_package_tree_sha256: expect.stringMatching(/^[a-f0-9]{64}$/),
        status: 'approval-required',
      },
      schema_version: '2.0.0',
    });
    expect(tree(packageRoot)).toEqual(packageBefore);

    const projectRoot = project(root);
    const adopted = runAdopter(packageRoot, projectRoot, output);
    expect(adopted.status, adopted.stderr).toBe(0);
    expect(JSON.parse(adopted.stdout).checkpoint_receipt_sha256).toBe(sha256(readFileSync(output)));
  });

  it('makes any later source-package byte change stale against the prepared checkpoint', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const output = join(root, 'prepared-checkpoint.json');
    expect(runPrepare(packageRoot, output, { reviewer: 'owner@example.test' }).status).toBe(0);
    const receiptPath = join(packageRoot, '.omd/system/adoption-receipt.json');
    writeFileSync(receiptPath, `${readFileSync(receiptPath, 'utf8')}\n`);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));

    const result = runAdopter(packageRoot, projectRoot, output);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('checkpoint request is stale');
    expectOldState(projectRoot, oldDesign, oldSystem);
  });

  it('rejects existing or symlink checkpoint outputs and leaves both untouched', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const existing = join(root, 'existing-checkpoint.json');
    writeFileSync(existing, 'existing\n');
    const linkedTarget = join(root, 'linked-target.json');
    const symlinkOutput = join(root, 'symlink-checkpoint.json');
    writeFileSync(linkedTarget, 'linked\n');
    symlinkSync(linkedTarget, symlinkOutput);

    const existingResult = runPrepare(packageRoot, existing, { reviewer: 'owner@example.test' });
    const symlinkResult = runPrepare(packageRoot, symlinkOutput, { reviewer: 'owner@example.test' });

    expect(existingResult.status).toBe(1);
    expect(existingResult.stderr).toContain('checkpoint output must be fresh; refusing existing path');
    expect(symlinkResult.status).toBe(1);
    expect(symlinkResult.stderr).toContain('checkpoint output must be fresh; refusing symlink');
    expect(readFileSync(existing, 'utf8')).toBe('existing\n');
    expect(readFileSync(linkedTarget, 'utf8')).toBe('linked\n');
    expect(lstatSync(symlinkOutput).isSymbolicLink()).toBe(true);
  });

  it('requires both an identified reviewer and the explicit authority-transition approval flag', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const withoutApproval = join(root, 'without-approval.json');
    const withoutReviewer = join(root, 'without-reviewer.json');

    const approvalResult = runPrepare(packageRoot, withoutApproval, {
      reviewer: 'owner@example.test',
      approve: false,
    });
    const reviewerResult = runPrepare(packageRoot, withoutReviewer);

    expect(approvalResult.status).toBe(1);
    expect(approvalResult.stderr).toContain('--authority-transition-approved is required');
    expect(reviewerResult.status).toBe(1);
    expect(reviewerResult.stderr).toContain('--reviewer <id> is required');
    expect(existsSync(withoutApproval)).toBe(false);
    expect(existsSync(withoutReviewer)).toBe(false);
  });

  it('installs an exact compiler package, preserves the source, and emits one hash-bound machine report', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const packageBefore = tree(packageRoot);
    const checkpointPath = checkpoint(root, packageRoot);
    const checkpointBefore = readFileSync(checkpointPath, 'utf8');
    const projectRoot = project(root);

    const result = runAdopter(packageRoot, projectRoot, checkpointPath);

    expect(result.status, `${result.stderr}\n${result.stdout}`).toBe(0);
    const report = JSON.parse(result.stdout);
    expect(report).toMatchObject({
      schema_version: '2.0.0',
      kind: 'design-md-core-project-adoption-report',
      status: 'adopted',
      approved: true,
      authority: { role: 'project-owner', identifier: 'owner@example.test' },
      source_package: packageHashes(packageRoot),
      project_proof: { pass: true, authority_mode: 'core-v2-project-system', profile: 'portable-core' },
      recovery: { recovered: false, action: null },
    });
    expect(readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8'))
      .toBe(readFileSync(join(packageRoot, 'DESIGN.md'), 'utf8'));
    expect(tree(join(projectRoot, '.omd/system'))).toEqual(tree(join(packageRoot, '.omd/system')));
    const reportPath = join(projectRoot, report.report_path);
    expect(JSON.parse(readFileSync(reportPath, 'utf8'))).toEqual(report);
    expect(existsSync(join(projectRoot, '.omd/core-adoption-transaction.json'))).toBe(false);
    expect(tree(packageRoot)).toEqual(packageBefore);
    expect(readFileSync(checkpointPath, 'utf8')).toBe(checkpointBefore);
  });

  it.each([
    'after-design-backup',
    'after-system-backup',
    'after-design-publish',
    'after-system-publish',
    'after-readback',
    'after-report-publish',
  ])('rolls back every target after an injected failure at %s', (point) => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const packageBefore = tree(packageRoot);
    const checkpointPath = checkpoint(root, packageRoot);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));

    const result = runAdopter(packageRoot, projectRoot, checkpointPath, {
      OMD_CORE_ADOPT_FAIL_AT: point,
    });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain(`injected Core adoption failure at ${point}`);
    expectOldState(projectRoot, oldDesign, oldSystem);
    expect(tree(packageRoot)).toEqual(packageBefore);
  });

  it('restores absence after a failed first adoption into an empty project', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const checkpointPath = checkpoint(root, packageRoot);
    const projectRoot = project(root, false);

    const result = runAdopter(packageRoot, projectRoot, checkpointPath, {
      OMD_CORE_ADOPT_FAIL_AT: 'after-system-publish',
    });

    expect(result.status).toBe(1);
    expect(existsSync(join(projectRoot, 'DESIGN.md'))).toBe(false);
    expect(existsSync(join(projectRoot, '.omd'))).toBe(false);
  });

  it('recovers a process crash from the durable journal without leaving a mixed package', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const checkpointPath = checkpoint(root, packageRoot);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));

    const crashed = runAdopter(packageRoot, projectRoot, checkpointPath, {
      OMD_CORE_ADOPT_CRASH_AT: 'after-design-publish',
    });
    expect(crashed.status).toBe(86);
    expect(existsSync(join(projectRoot, '.omd/core-adoption-transaction.json'))).toBe(true);
    expect(readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8')).not.toBe(oldDesign);
    expect(existsSync(join(projectRoot, '.omd/system'))).toBe(false);

    const recovery = adopterModule.recoverInterruptedTransaction(projectRoot);

    expect(recovery).toEqual({ recovered: true, action: 'rolled-back-to-old-package' });
    expectOldState(projectRoot, oldDesign, oldSystem);
  });

  it('refuses an unsafe interrupted recovery before changing any remaining transaction path', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const checkpointPath = checkpoint(root, packageRoot);
    const projectRoot = project(root);

    const crashed = runAdopter(packageRoot, projectRoot, checkpointPath, {
      OMD_CORE_ADOPT_CRASH_AT: 'after-design-publish',
    });
    expect(crashed.status).toBe(86);
    const journalPath = join(projectRoot, '.omd/core-adoption-transaction.json');
    const journal = JSON.parse(readFileSync(journalPath, 'utf8'));
    const backupSystemBefore = tree(journal.system.backup);
    writeFileSync(join(projectRoot, 'DESIGN.md'), '# Externally changed during crash\n');

    expect(() => adopterModule.recoverInterruptedTransaction(projectRoot))
      .toThrow(/destination DESIGN\.md changed/);

    expect(readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8'))
      .toBe('# Externally changed during crash\n');
    expect(existsSync(join(projectRoot, '.omd/system'))).toBe(false);
    expect(tree(journal.system.backup)).toEqual(backupSystemBefore);
    expect(existsSync(journalPath)).toBe(true);
  });

  it('requires an exact owner checkpoint and rejects stale package hashes before mutation', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));
    const stale = checkpoint(root, packageRoot, (receipt) => {
      receipt.request.source_package.design_md_sha256 = 'f'.repeat(64);
    });

    const missing = runAdopter(packageRoot, projectRoot);
    expect(missing.status).toBe(1);
    expect(missing.stderr).toContain('--checkpoint-receipt <json> is required');
    const staleResult = runAdopter(packageRoot, projectRoot, stale);
    expect(staleResult.status).toBe(1);
    expect(staleResult.stderr).toContain('checkpoint request is stale');
    expectOldState(projectRoot, oldDesign, oldSystem);
  });

  it('rejects a self-consistent attestation over a checkpoint request the adopter cannot reproduce', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));
    const forged = checkpoint(root, packageRoot, (receipt) => {
      receipt.request.source_package_tree_sha256 = 'f'.repeat(64);
      receipt.attestation.request_sha256 = sha256(jsonBytes(receipt.request));
    });

    const result = runAdopter(packageRoot, projectRoot, forged);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('checkpoint request is stale or was not reproduced');
    expectOldState(projectRoot, oldDesign, oldSystem);
  });

  it('schema-gates checkpoint sentinels, extra keys, and missing package bindings before mutation', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));
    const cases = [
      checkpoint(root, packageRoot, (receipt) => { receipt.injected = true; }),
      checkpoint(root, packageRoot, (receipt) => { receipt.attestation.authority.identifier = 'TBD'; }),
      checkpoint(root, packageRoot, (receipt) => { delete receipt.request.source_package.coverage_sha256; }),
    ];

    for (const receiptPath of cases) {
      const result = runAdopter(packageRoot, projectRoot, receiptPath);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('project checkpoint schema');
      expectOldState(projectRoot, oldDesign, oldSystem);
    }
  });

  it('rejects a schema-invalid compiler receipt even when the checkpoint binds its changed bytes', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const receiptPath = join(packageRoot, '.omd/system/adoption-receipt.json');
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    receipt.injected = 'sentinel';
    writeFileSync(receiptPath, jsonBytes(receipt));
    const checkpointPath = checkpoint(root, packageRoot);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));

    const result = runAdopter(packageRoot, projectRoot, checkpointPath);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('adoption receipt schema additionalProperties at /injected');
    expectOldState(projectRoot, oldDesign, oldSystem);
  });

  it('runs the existing provider-free project proof against destination evidence before adoption', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root, { resolvedEvidence: true });
    const checkpointPath = checkpoint(root, packageRoot);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));

    const missingEvidence = runAdopter(packageRoot, projectRoot, checkpointPath);
    expect(missingEvidence.status).toBe(1);
    expect(missingEvidence.stderr).toContain('project proof evidence task.md is missing');
    expectOldState(projectRoot, oldDesign, oldSystem);

    writeFileSync(join(projectRoot, 'task.md'), `# Project evidence\n\nName: ${JSON.parse(readFileSync(join(packageRoot, '.omd/system/graph.json'), 'utf8')).identity.name}\n`);
    const accepted = runAdopter(packageRoot, projectRoot, checkpointPath);
    expect(accepted.status, accepted.stderr).toBe(0);
    expect(JSON.parse(accepted.stdout).project_proof.pass).toBe(true);
  });

  it('copies one evidence file once when multiple decisions cite different anchors', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root, { resolvedEvidence: true, duplicateEvidenceFile: true });
    const checkpointPath = checkpoint(root, packageRoot);
    const projectRoot = project(root);
    const graph = JSON.parse(readFileSync(join(packageRoot, '.omd/system/graph.json'), 'utf8'));
    writeFileSync(join(projectRoot, 'task.md'), `# Name\n\n${graph.identity.name}\n\n## Scope\n\n${graph.identity.scope}\n`);

    const accepted = runAdopter(packageRoot, projectRoot, checkpointPath);

    expect(accepted.status, accepted.stderr).toBe(0);
    expect(JSON.parse(accepted.stdout).project_proof.pass).toBe(true);
  });

  it('rejects partial, unknown, symlinked, and aliased package inputs', () => {
    const root = tempRoot();
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));

    const unknownPackage = compilePackage(join(root, 'unknown-case'));
    const unknownCheckpoint = checkpoint(root, unknownPackage);
    mkdirSync(join(unknownPackage, 'extra'), { recursive: true });
    writeFileSync(join(unknownPackage, 'extra/unknown.txt'), 'unknown');
    const unknownResult = runAdopter(unknownPackage, projectRoot, unknownCheckpoint);
    expect(unknownResult.status).toBe(1);
    expect(unknownResult.stderr).toContain('exactly the six compiler artifacts');

    const partialPackage = compilePackage(join(root, 'partial-case'));
    const partialCheckpoint = checkpoint(root, partialPackage);
    unlinkSync(join(partialPackage, '.omd/system/coverage.json'));
    const partialResult = runAdopter(partialPackage, projectRoot, partialCheckpoint);
    expect(partialResult.status).toBe(1);
    expect(partialResult.stderr).toContain('exactly the six compiler artifacts');

    const symlinkPackage = compilePackage(join(root, 'symlink-case'));
    const symlinkCheckpoint = checkpoint(root, symlinkPackage);
    const graphPath = join(symlinkPackage, '.omd/system/graph.json');
    const graphCopy = join(root, 'graph-copy.json');
    writeFileSync(graphCopy, readFileSync(graphPath));
    unlinkSync(graphPath);
    symlinkSync(graphCopy, graphPath);
    const symlinkResult = runAdopter(symlinkPackage, projectRoot, symlinkCheckpoint);
    expect(symlinkResult.status).toBe(1);
    expect(symlinkResult.stderr).toContain('contains a symlink');

    const nestedPackage = compilePackage(join(projectRoot, 'nested-source'));
    const nestedCheckpoint = checkpoint(root, nestedPackage);
    const aliasResult = runAdopter(nestedPackage, projectRoot, nestedCheckpoint);
    expect(aliasResult.status).toBe(1);
    expect(aliasResult.stderr).toContain('must not alias or contain one another');
    expectOldState(projectRoot, oldDesign, oldSystem);
  });

  it('fails closed on an unsafe interrupted journal and preserves all project bytes', () => {
    const root = tempRoot();
    const packageRoot = compilePackage(root);
    const checkpointPath = checkpoint(root, packageRoot);
    const projectRoot = project(root);
    const oldDesign = readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8');
    const oldSystem = tree(join(projectRoot, '.omd/system'));
    writeFileSync(join(projectRoot, '.omd/core-adoption-transaction.json'), '{"foreign":true}\n');

    const result = runAdopter(packageRoot, projectRoot, checkpointPath);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('journal is corrupt or does not belong');
    expect(readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8')).toBe(oldDesign);
    expect(tree(join(projectRoot, '.omd/system'))).toEqual(oldSystem);
    expect(readFileSync(join(projectRoot, '.omd/core-adoption-transaction.json'), 'utf8'))
      .toBe('{"foreign":true}\n');
  });
});
