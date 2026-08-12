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

    run('npm', ['run', 'build'], repoRoot);
    const packed = run(
      'npm',
      ['pack', '--json', '--ignore-scripts', '--pack-destination', packDir],
      repoRoot,
    );
    const manifest = JSON.parse(packed.stdout);
    expect(manifest).toHaveLength(1);
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
