import { afterEach, describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
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
const helpers = [
  'design-md-core-schema.cjs',
  'design-md-core-conformance.cjs',
  'design-md-core.cjs',
  'prepare-design-md-core-review.cjs',
  'compile-design-md-core.cjs',
  'adopt-design-md-core.cjs',
] as const;
const schemas = [
  'design-md-core-manifest-v2.schema.json',
  'design-system-graph-v2.schema.json',
  'design-system-provenance-v2.schema.json',
  'design-system-coverage-v2.schema.json',
  'design-md-core-adoption-review-v2.schema.json',
  'design-md-core-adoption-receipt-v2.schema.json',
  'design-md-core-project-checkpoint-v2.schema.json',
] as const;
const coreSections = [
  'experience',
  'foundations',
  'typography-assets',
  'components-states',
  'layout-platforms',
  'content-locales',
  'governance',
] as const;
const coreSectionFragments: Record<(typeof coreSections)[number], string> = {
  experience: '1-experience',
  foundations: '2-foundations',
  'typography-assets': '3-typography-assets',
  'components-states': '4-components-states',
  'layout-platforms': '5-layout-platforms',
  'content-locales': '6-content-locales',
  governance: '7-governance',
};
const coreChecks = [
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
let root: string | null = null;

function sha256(bytes: string | Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

function run(command: string, args: string[], cwd: string) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    env: {
      ...process.env,
      CI: '1',
      DISABLE_TELEMETRY: '1',
      DO_NOT_TRACK: '1',
      NO_UPDATE_NOTIFIER: '1',
      npm_config_audit: 'false',
      npm_config_fund: 'false',
    },
  });
  expect(
    result.status,
    `${command} ${args.join(' ')}\n${result.stderr || result.stdout}`,
  ).toBe(0);
  return result;
}

afterEach(() => {
  if (root && existsSync(root)) rmSync(root, { recursive: true, force: true });
  root = null;
});

describe('published DESIGN.md Core v2 compiler closure', () => {
  it('packs, installs, doctors four channels, and compiles a fresh adopted package offline', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-packaged-core-v2-'));
    const packDir = join(root, 'pack');
    const consumerDir = join(root, 'consumer');
    const installDir = join(root, 'all-channels');
    mkdirSync(packDir, { recursive: true });
    mkdirSync(consumerDir, { recursive: true });
    mkdirSync(installDir, { recursive: true });

    const packManifest = JSON.parse(runSerializedPackageBuildAndPack(repoRoot, packDir));
    expect(packManifest).toHaveLength(1);
    const packagedPaths = new Set(
      packManifest[0].files.map((file: { path: string }) => file.path),
    );
    for (const helper of helpers) expect(packagedPaths.has(`scripts/${helper}`)).toBe(true);
    for (const schema of schemas) expect(packagedPaths.has(`spec/schema/${schema}`)).toBe(true);

    const tarball = join(packDir, packManifest[0].filename);
    writeFileSync(
      join(consumerDir, 'package.json'),
      `${JSON.stringify({ name: 'omd-core-v2-offline-consumer', private: true }, null, 2)}\n`,
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
    run(process.execPath, [
      cli,
      'install-skills',
      '--dir', installDir,
      '--agent', 'claude-code', 'codex', 'opencode', 'cursor',
      '--all',
    ], installDir);
    writeFileSync(join(installDir, 'DESIGN.md'), '# Distribution activation\n', 'utf8');
    const doctor = JSON.parse(run(process.execPath, [
      cli,
      'doctor',
      '--dir', installDir,
      '--json',
      '--self-test',
    ], installDir).stdout);
    expect(doctor.state).toBe('ready');
    expect(doctor.channels.map((channel: { id: string; ready: boolean }) => ({
      id: channel.id,
      ready: channel.ready,
    }))).toEqual([
      { id: 'claude-code', ready: true },
      { id: 'codex', ready: true },
      { id: 'opencode', ready: true },
      { id: 'cursor', ready: true },
    ]);

    const channels = [
      ['claude-code', '.claude/data'],
      ['codex', '.codex/data'],
      ['opencode', '.opencode/data'],
      ['cursor', '.claude/data'],
    ] as const;
    for (const [channel, dataRoot] of channels) {
      for (const helper of helpers) {
        expect(
          readFileSync(join(installDir, dataRoot, 'scripts', helper)),
          `${channel} ${helper}`,
        ).toEqual(readFileSync(join(packageRoot, 'scripts', helper)));
      }
      for (const schema of schemas) {
        expect(
          readFileSync(join(installDir, dataRoot, 'scripts/schema', schema)),
          `${channel} ${schema}`,
        ).toEqual(readFileSync(join(packageRoot, 'spec/schema', schema)));
      }
    }

    const inputGraph = JSON.parse(readFileSync(
      join(packageRoot, 'spec/fixtures/design-md-core-v2/.omd/system/graph.json'),
      'utf8',
    ));
    delete inputGraph.projection;
    delete inputGraph.extensions;
    inputGraph.governance.decisions[0].path = 'typography_assets.roles.0.family';
    const inputPath = join(root, 'fresh-input-graph.json');
    const inputBytes = `${JSON.stringify(inputGraph, null, 2)}\n`;
    writeFileSync(inputPath, inputBytes, 'utf8');
    const provenancePath = join(root, 'fresh-provenance.json');
    const provenanceBytes = `${JSON.stringify({
      schema_version: '2.0.0',
      decisions: [{
        path: 'typography_assets.roles.0.family',
        source_class: 'unresolved',
        evidence: [],
      }],
    }, null, 2)}\n`;
    writeFileSync(provenancePath, provenanceBytes, 'utf8');
    const coveragePath = join(root, 'fresh-coverage.json');
    const coverageBytes = `${JSON.stringify({
      schema_version: '2.0.0',
      groups: Object.fromEntries(coreSections.map((id) => [id, {
        status: 'covered',
        evidence: [`DESIGN.md#${coreSectionFragments[id]}`],
      }])),
      checks: Object.fromEntries(coreChecks.map((id) => [id, {
        pass: true,
        method: 'controller-computed-system-graph-v2',
      }])),
    }, null, 2)}\n`;
    writeFileSync(coveragePath, coverageBytes, 'utf8');
    const reviewDir = join(root, 'fresh-review');
    run(process.execPath, [
      cli,
      'design-md', 'prepare-review', inputPath,
      '--provenance', provenancePath,
      '--coverage', coveragePath,
      '--out-dir', reviewDir,
    ], root);
    const reviewPath = join(root, 'fresh-review-receipt.json');
    run(process.execPath, [
      cli,
      'design-md', 'approve-review', join(reviewDir, 'review-request.json'),
      '--reviewer', 'packaged-canary',
      '--out', reviewPath,
      '--authority-transition-approved',
    ], root);
    const inputBefore = readFileSync(inputPath, 'utf8');
    const outDir = join(root, 'fresh-adopted-package');
    const installedScripts = join(installDir, '.codex/data/scripts');
    run(process.execPath, [
      cli,
      'design-md', 'compile', join(reviewDir, 'input-graph.json'),
      '--provenance', join(reviewDir, 'provenance.json'),
      '--coverage', join(reviewDir, 'coverage.json'),
      '--review-receipt', reviewPath,
      '--out-dir', outDir,
      '--adopt',
    ], root);
    expect(readFileSync(inputPath, 'utf8')).toBe(inputBefore);
    expect(readFileSync(join(reviewDir, 'DESIGN.md'), 'utf8'))
      .toBe(readFileSync(join(outDir, 'DESIGN.md'), 'utf8'));

    const designMd = readFileSync(join(outDir, 'DESIGN.md'), 'utf8');
    const graphBytes = readFileSync(join(outDir, '.omd/system/graph.json'));
    const graph = JSON.parse(graphBytes.toString('utf8'));
    const manifest = JSON.parse(readFileSync(
      join(outDir, '.omd/system/manifest.json'),
      'utf8',
    ));
    expect(graph.projection).toEqual({ path: 'DESIGN.md', sha256: sha256(designMd), locale: 'en' });
    expect(manifest).toMatchObject({
      format: 'design-md-core',
      format_version: '2.0.0',
      profile: 'portable-core',
      authority: {
        canonical: 'system-graph',
        graph_path: '.omd/system/graph.json',
        projection_path: 'DESIGN.md',
      },
      artifacts: {
        design_md: { path: 'DESIGN.md', sha256: sha256(designMd) },
        graph: { path: '.omd/system/graph.json', sha256: sha256(graphBytes) },
      },
    });
    run(process.execPath, [
      join(installedScripts, 'migrate-design-md-core.cjs'),
      '--input', join(outDir, 'DESIGN.md'),
      '--check',
      '--require-source-valid',
      '--require-portable-core',
      '--json',
    ], root);

    const checkpointPath = join(root, 'fresh-project-checkpoint.json');
    run(process.execPath, [
      cli,
      'design-md', 'prepare-checkpoint', outDir,
      '--reviewer', 'packaged-canary',
      '--out', checkpointPath,
      '--authority-transition-approved',
    ], root);
    const projectRoot = join(root, 'fresh-project');
    mkdirSync(projectRoot, { recursive: true });
    run(process.execPath, [
      cli,
      'design-md', 'adopt', outDir,
      '--project-root', projectRoot,
      '--checkpoint-receipt', checkpointPath,
    ], root);
    expect(readFileSync(join(projectRoot, 'DESIGN.md'), 'utf8')).toBe(designMd);
    expect(readFileSync(join(projectRoot, '.omd/system/graph.json'))).toEqual(graphBytes);
  }, 120_000);
});
