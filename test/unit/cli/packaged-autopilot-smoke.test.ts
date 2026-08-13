import { afterEach, describe, expect, it } from 'vitest';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { runSerializedPackageBuildAndPack } from './package-build-lock';

const repoRoot = resolve(import.meta.dirname, '../../..');
const canary = join(
  repoRoot,
  'benchmarks/ui-resolve-bench/scripts/run-autopilot-clean-dir-canary.mjs',
);
let root: string | null = null;

function run(command: string, args: string[], cwd: string) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, NO_UPDATE_NOTIFIER: '1', npm_config_audit: 'false', npm_config_fund: 'false' },
  });
  expect(result.status, `${command} ${args.join(' ')}\n${result.stderr || result.stdout}`).toBe(0);
  return result;
}

afterEach(() => {
  if (root && existsSync(root)) rmSync(root, { recursive: true, force: true });
  root = null;
});

describe('published-package Autopilot acceptance', () => {
  it('packs, installs, doctors every channel, and reaches HANDOFF using only installed helpers', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-packaged-autopilot-'));
    const packDir = join(root, 'pack');
    const consumerDir = join(root, 'consumer');
    const installDir = join(root, 'all-channels');
    const canaryRoot = join(root, 'canary');
    mkdirSync(packDir, { recursive: true });
    mkdirSync(consumerDir, { recursive: true });
    mkdirSync(installDir, { recursive: true });

    const manifest = JSON.parse(runSerializedPackageBuildAndPack(repoRoot, packDir));
    expect(manifest).toHaveLength(1);
    const packagedPaths = new Set(
      manifest[0].files.map((file: { path: string }) => file.path),
    );
    for (const path of [
      'scripts/design-md-core-schema.cjs',
      'scripts/design-md-core-conformance.cjs',
      'scripts/design-md-core.cjs',
      'scripts/prepare-design-md-core-review.cjs',
      'scripts/rebind-design-md-core-migration.cjs',
      'scripts/compile-design-md-core.cjs',
      'scripts/adopt-design-md-core.cjs',
      'spec/schema/design-md-core-manifest-v2.schema.json',
      'spec/schema/design-system-graph-v2.schema.json',
      'spec/schema/design-system-provenance-v2.schema.json',
      'spec/schema/design-system-coverage-v2.schema.json',
      'spec/schema/design-md-core-adoption-review-v2.schema.json',
      'spec/schema/design-md-core-adoption-receipt-v2.schema.json',
      'spec/schema/design-md-core-project-checkpoint-v2.schema.json',
    ]) {
      expect(packagedPaths.has(path), `tarball contains ${path}`).toBe(true);
    }
    const tarball = join(packDir, manifest[0].filename);
    expect(existsSync(tarball)).toBe(true);
    writeFileSync(
      join(consumerDir, 'package.json'),
      `${JSON.stringify({ name: 'omd-package-smoke-consumer', private: true }, null, 2)}\n`,
      'utf8',
    );
    run('npm', [
      'install',
      '--offline',
      '--ignore-scripts',
      '--no-package-lock',
      '--no-audit',
      '--no-fund',
      tarball,
    ], consumerDir);

    const packageRoot = join(consumerDir, 'node_modules/oh-my-design-cli');
    const cli = join(packageRoot, 'dist/bin/oh-my-design.js');
    expect(existsSync(cli)).toBe(true);
    expect(existsSync(join(packageRoot, 'skills/omd-autopilot/SKILL.md'))).toBe(true);
    expect(existsSync(join(packageRoot, 'agents/omd-design-system-architect.md'))).toBe(true);

    run(process.execPath, [
      cli,
      'install-skills',
      '--dir', installDir,
      '--agent', 'claude-code', 'codex', 'opencode', 'cursor',
      '--all',
    ], installDir);
    writeFileSync(join(installDir, 'DESIGN.md'), '# Packaged install activation\n', 'utf8');
    const doctor = run(process.execPath, [
      cli,
      'doctor',
      '--dir', installDir,
      '--json',
      '--self-test',
    ], installDir);
    const report = JSON.parse(doctor.stdout);
    expect(report.state).toBe('ready');
    expect(report.channels.map((channel: { id: string; installed: boolean; ready: boolean }) => ({
      id: channel.id,
      installed: channel.installed,
      ready: channel.ready,
    }))).toEqual([
      { id: 'claude-code', installed: true, ready: true },
      { id: 'codex', installed: true, ready: true },
      { id: 'opencode', installed: true, ready: true },
      { id: 'cursor', installed: true, ready: true },
    ]);

    const smoke = run(process.execPath, [
      canary,
      canaryRoot,
      '--package-root', packageRoot,
    ], repoRoot);
    const summary = JSON.parse(smoke.stdout);
    expect(summary).toMatchObject({
      execution_mode: 'provider-zero-valid-oracle',
      distribution_source: 'extracted-npm-package',
      doctor_state: 'ready',
      provider_calls: 0,
      model_calls: 0,
      cursor_calls: 0,
      question_batches: 0,
      final_state: 'HANDOFF',
    });
    expect(Object.values(summary.checks).every(Boolean)).toBe(true);
    expect(existsSync(join(canaryRoot, 'workspace/.agents/skills/omd-autopilot/SKILL.md'))).toBe(true);
    expect(existsSync(join(canaryRoot, 'workspace/.codex/agents/omd-design-system-architect.toml'))).toBe(true);
    expect(readFileSync(
      join(canaryRoot, 'workspace/.codex/data/scripts/autopilot-mission.cjs'),
      'utf8',
    )).toBe(readFileSync(join(packageRoot, 'scripts/autopilot-mission.cjs'), 'utf8'));

    const installedScripts = join(installDir, '.codex/data/scripts');
    const coreHelpers = [
      'design-md-core-schema.cjs',
      'design-md-core-conformance.cjs',
      'design-md-core.cjs',
      'prepare-design-md-core-review.cjs',
      'rebind-design-md-core-migration.cjs',
      'compile-design-md-core.cjs',
      'adopt-design-md-core.cjs',
    ] as const;
    const coreSchemas = [
      'design-md-core-manifest-v2.schema.json',
      'design-system-graph-v2.schema.json',
      'design-system-provenance-v2.schema.json',
      'design-system-coverage-v2.schema.json',
      'design-md-core-adoption-review-v2.schema.json',
      'design-md-core-adoption-receipt-v2.schema.json',
      'design-md-core-project-checkpoint-v2.schema.json',
    ] as const;
    for (const dataRoot of ['.claude/data', '.codex/data', '.opencode/data']) {
      for (const helper of coreHelpers) {
        expect(readFileSync(join(installDir, dataRoot, 'scripts', helper))).toEqual(
          readFileSync(join(packageRoot, 'scripts', helper)),
        );
      }
      for (const schema of coreSchemas) {
        expect(readFileSync(join(installDir, dataRoot, 'scripts/schema', schema))).toEqual(
          readFileSync(join(packageRoot, 'spec/schema', schema)),
        );
      }
    }

    const compileInput = join(root, 'fresh-compile-input.json');
    const compileGraph = JSON.parse(readFileSync(
      join(packageRoot, 'spec/fixtures/design-md-core-v2/.omd/system/graph.json'),
      'utf8',
    ));
    delete compileGraph.projection;
    delete compileGraph.extensions;
    compileGraph.governance.decisions[0].path = 'typography_assets.roles.0.family';
    writeFileSync(compileInput, `${JSON.stringify(compileGraph, null, 2)}\n`, 'utf8');
    const provenanceInput = join(root, 'fresh-provenance-input.json');
    writeFileSync(provenanceInput, `${JSON.stringify({
      schema_version: '2.0.0',
      decisions: compileGraph.governance.decisions,
    }, null, 2)}\n`, 'utf8');
    const sectionAnchors = {
      experience: '1-experience',
      foundations: '2-foundations',
      'typography-assets': '3-typography-assets',
      'components-states': '4-components-states',
      'layout-platforms': '5-layout-platforms',
      'content-locales': '6-content-locales',
      governance: '7-governance',
    } as const;
    const coverageChecks = [
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
    ] as const;
    const coverageInput = join(root, 'fresh-coverage-input.json');
    writeFileSync(coverageInput, `${JSON.stringify({
      schema_version: '2.0.0',
      groups: Object.fromEntries(Object.entries(sectionAnchors).map(([id, anchor]) => [id, {
        status: 'covered', evidence: [`DESIGN.md#${anchor}`],
      }])),
      checks: Object.fromEntries(coverageChecks.map((id) => [id, {
        pass: true, method: 'controller-computed-system-graph-v2',
      }])),
    }, null, 2)}\n`, 'utf8');
    const reviewRoot = join(root, 'fresh-core-review');
    const ownerReviewReceipt = join(root, 'fresh-core-owner-review.json');
    const compiledRoot = join(root, 'fresh-compiled-core-package');
    const checkpointReceipt = join(root, 'fresh-core-project-checkpoint.json');
    const adoptedRoot = join(root, 'fresh-adopted-core-project');
    const projectOwnerIdentity = 'packaged-autopilot-project-owner';
    run(process.execPath, [
      join(installedScripts, 'prepare-design-md-core-review.cjs'),
      compileInput,
      '--provenance', provenanceInput,
      '--coverage', coverageInput,
      '--out-dir', reviewRoot,
    ], root);
    run(process.execPath, [
      join(installedScripts, 'prepare-design-md-core-review.cjs'),
      '--approve', join(reviewRoot, 'review-request.json'),
      '--reviewer', projectOwnerIdentity,
      '--out', ownerReviewReceipt,
      '--authority-transition-approved',
    ], root);
    run(process.execPath, [
      join(installedScripts, 'compile-design-md-core.cjs'),
      join(reviewRoot, 'input-graph.json'),
      '--provenance', join(reviewRoot, 'provenance.json'),
      '--coverage', join(reviewRoot, 'coverage.json'),
      '--review-receipt', ownerReviewReceipt,
      '--out-dir', compiledRoot,
      '--adopt',
    ], root);
    run(process.execPath, [
      join(installedScripts, 'adopt-design-md-core.cjs'),
      compiledRoot,
      '--prepare-checkpoint', checkpointReceipt,
      '--reviewer', projectOwnerIdentity,
      '--authority-transition-approved',
    ], root);
    mkdirSync(adoptedRoot, { recursive: true });
    run(process.execPath, [
      join(installedScripts, 'adopt-design-md-core.cjs'),
      compiledRoot,
      '--project-root', adoptedRoot,
      '--checkpoint-receipt', checkpointReceipt,
    ], root);
    const adoptedManifest = JSON.parse(readFileSync(
      join(adoptedRoot, '.omd/system/manifest.json'),
      'utf8',
    ));
    expect(adoptedManifest).toMatchObject({
      format: 'design-md-core',
      format_version: '2.0.0',
      profile: 'portable-core',
      authority: {
        canonical: 'system-graph',
        graph_path: '.omd/system/graph.json',
        projection_path: 'DESIGN.md',
      },
    });
    expect(existsSync(join(adoptedRoot, 'DESIGN.md'))).toBe(true);
    expect(JSON.parse(readFileSync(
      join(adoptedRoot, '.omd/system/adoption-receipt.json'),
      'utf8',
    ))).toMatchObject({
      kind: 'design-md-core-adoption-receipt',
      status: 'adopted',
      review: {
        authority_transition_approved: true,
        reviewer: { role: 'project-owner', identifier: projectOwnerIdentity },
      },
    });
    expect(JSON.parse(readFileSync(checkpointReceipt, 'utf8'))).toMatchObject({
      kind: 'design-md-core-project-adoption-checkpoint',
      request: {
        kind: 'design-md-core-project-adoption-checkpoint-request',
        status: 'approval-required',
      },
      attestation: {
        decision: 'approved',
        authority_transition_approved: true,
        authority: { role: 'project-owner', identifier: projectOwnerIdentity },
      },
    });

    const cases = [
      {
        id: 'existing-compatible-design-system',
        task: 'Improve the existing checkout surface and preserve its current behavior.',
        ctx: { surface_inventory: [{ path: 'checkout.html', kind: 'app' }], audience_hypothesis: [{ label: 'Existing checkout users', confidence: 0.9, evidence: 'checkout.html' }], wow_moment_candidates: [] },
        designMd: '# Existing project design system\n',
        expected: 'reuse',
      },
      {
        id: 'explicit-establish-authority',
        task: 'From scratch, create a neighborhood library landing page for residents. Establish a project-owned design system. Primary action: Reserve a tool. Do not invent inventory, prices, testimonials, or partners.',
        ctx: { surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [] },
        expected: 'establish',
      },
      {
        id: 'explicit-refresh-authority',
        task: 'Refresh and replace the existing DESIGN.md while improving this existing settings surface.',
        ctx: { surface_inventory: [{ path: 'settings.html', kind: 'app' }], audience_hypothesis: [{ label: 'Existing account users', confidence: 0.9, evidence: 'settings.html' }], wow_moment_candidates: [] },
        designMd: '# Stale project design system\n',
        expected: 'refresh',
      },
      {
        id: 'explicit-surface-local-only',
        task: 'Improve this existing onboarding screen without creating a design system; keep decisions local to this surface.',
        ctx: { surface_inventory: [{ path: 'onboarding.html', kind: 'app' }], audience_hypothesis: [{ label: 'Existing onboarding users', confidence: 0.9, evidence: 'onboarding.html' }], wow_moment_candidates: [] },
        expected: 'surface-local-only',
      },
      {
        id: 'broad-greenfield-missing-authority',
        task: 'From scratch, create a new service surface.',
        ctx: { surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [] },
        expectedState: 'AWAIT_USER',
      },
      {
        id: 'exact-brand-missing-source',
        task: 'Create a single screen exactly matching the official Acme design system.',
        ctx: { surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [] },
        expectedState: 'CONTEXT_DETECT',
        expectedStatus: 'blocked',
      },
    ] as const;

    for (const item of cases) {
      const caseRoot = join(root, 'authority-cases', item.id);
      const runDir = join(caseRoot, '.omd/runs/run-case');
      mkdirSync(runDir, { recursive: true });
      writeFileSync(join(runDir, 'task.md'), `# Autopilot task\n\n${item.task}\n`, 'utf8');
      writeFileSync(join(runDir, 'ctx-prime.json'), `${JSON.stringify(item.ctx, null, 2)}\n`, 'utf8');
      if ('designMd' in item) writeFileSync(join(caseRoot, 'DESIGN.md'), item.designMd, 'utf8');
      run(process.execPath, [join(installedScripts, 'autopilot-mission.cjs'), caseRoot, runDir, 'bootstrap'], caseRoot);
      run(process.execPath, [join(installedScripts, 'design-council-prime.cjs'), caseRoot, runDir], caseRoot);
      run(process.execPath, [join(installedScripts, 'design-council-handoff.cjs'), caseRoot, runDir, 'prepare'], caseRoot);
      const handoff = JSON.parse(readFileSync(join(runDir, 'handoff/.handoff.json'), 'utf8'));
      if ('expected' in item) {
        expect(handoff.state, item.id).toBe('PROPOSE_PLAN');
        run(process.execPath, [join(installedScripts, 'design-system-plan.cjs'), caseRoot, runDir], caseRoot);
        expect(JSON.parse(readFileSync(join(runDir, 'design-system-decision.json'), 'utf8'))).toMatchObject({
          strategy: item.expected,
          implementation_owner: 'main-agent',
        });
      } else {
        expect(handoff.state, item.id).toBe(item.expectedState);
        if ('expectedStatus' in item) expect(handoff.status, item.id).toBe(item.expectedStatus);
        expect(existsSync(join(runDir, 'design-system-decision.json')), item.id).toBe(false);
      }
    }
  }, 120_000);
});
