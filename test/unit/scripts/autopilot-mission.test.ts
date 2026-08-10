import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const script = resolve(import.meta.dirname, '../../../scripts/autopilot-mission.cjs');
let root = '';

function sha(value: string | Buffer) {
  return createHash('sha256').update(value).digest('hex');
}

function run(runDir: string, command = 'advance') {
  return spawnSync(process.execPath, [script, root, runDir, command], { encoding: 'utf8' });
}

function state(runDir: string) {
  return JSON.parse(readFileSync(join(runDir, 'mission-state.json'), 'utf8'));
}

function writeCouncilAuthority(runDir: string) {
  const missionPath = join(runDir, 'mission.json');
  const planPath = join(runDir, 'council/plan.json');
  mkdirSync(join(runDir, 'council'), { recursive: true });
  writeFileSync(planPath, JSON.stringify({ lane_count: 0 }));
  writeFileSync(join(runDir, 'council/reconciled.json'), JSON.stringify({
    status: 'reconciled', plan_sha256: sha(readFileSync(planPath)), mission_sha256: sha(readFileSync(missionPath)),
    lane_count: 0, product_write_authority_granted: false, implementation_owner: 'main-agent',
    results: [],
  }));
}

afterEach(() => {
  if (root && existsSync(root)) rmSync(root, { recursive: true, force: true });
});

describe('autopilot mission controller', () => {
  it('blocks product edits before the authority handoff', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-autopilot-mission-'));
    const runDir = join(root, '.omd/runs/run-1');
    mkdirSync(runDir, { recursive: true });
    writeFileSync(join(runDir, 'task.md'), 'Build a new dashboard and establish DESIGN.md.');
    writeFileSync(join(root, 'index.html'), '<main>starter</main>');
    expect(run(runDir, 'bootstrap').status).toBe(0);
    expect(state(runDir).state).toBe('AUTHORITY_GATE');
    writeFileSync(join(root, 'index.html'), '<main>changed too early</main>');
    const result = run(runDir);
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('product write before authority handoff: index.html');
  });

  it('admits product build only after an exact design-system proof', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-autopilot-system-'));
    const runDir = join(root, '.omd/runs/run-1');
    mkdirSync(join(runDir, 'handoff'), { recursive: true });
    mkdirSync(join(runDir, 'system'), { recursive: true });
    writeFileSync(join(runDir, 'task.md'), 'Build a new dashboard and establish DESIGN.md.');
    writeFileSync(join(root, 'index.html'), '<main>starter</main>');
    expect(run(runDir, 'bootstrap').status).toBe(0);
    writeFileSync(join(runDir, 'handoff/.handoff.json'), JSON.stringify({ state: 'PROPOSE_PLAN', status: 'ready' }));
    writeCouncilAuthority(runDir);
    writeFileSync(join(runDir, 'design-system-decision.json'), JSON.stringify({ strategy: 'establish' }));
    writeFileSync(join(root, 'DESIGN.md'), '# System\n');
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('SYSTEM_BUILD');
    writeFileSync(join(root, 'src.js'), 'unauthorized();');
    const early = run(runDir);
    expect(early.status).not.toBe(0);
    expect(early.stderr).toContain('product write before system proof: src.js');
    rmSync(join(root, 'src.js'));
    const designBytes = readFileSync(join(root, 'DESIGN.md'));
    writeFileSync(join(runDir, 'system/proof.json'), JSON.stringify({
      pass: true,
      next_state: 'PRODUCT_BUILD',
      design_md_sha256: sha(designBytes),
    }));
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('PRODUCT_BUILD');
    expect(existsSync(join(runDir, 'product-build-admission.json'))).toBe(true);
    writeFileSync(join(root, 'src.js'), 'authorized();');
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('PRODUCT_BUILD');
  });

  it('routes final proof to repair, failed handoff, or delivery without force-passing', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-autopilot-proof-'));
    const runDir = join(root, '.omd/runs/run-1');
    mkdirSync(join(runDir, 'handoff'), { recursive: true });
    writeFileSync(join(runDir, 'task.md'), 'Improve this existing surface without a project system.');
    writeFileSync(join(root, 'index.html'), '<main>starter</main>');
    expect(run(runDir, 'bootstrap').status).toBe(0);
    writeFileSync(join(runDir, 'handoff/.handoff.json'), JSON.stringify({ state: 'PROPOSE_PLAN', status: 'ready' }));
    writeCouncilAuthority(runDir);
    writeFileSync(join(runDir, 'design-system-decision.json'), JSON.stringify({ strategy: 'surface-local-only' }));
    expect(run(runDir).status).toBe(0);
    writeFileSync(join(root, 'index.html'), '<main>built</main>');
    writeFileSync(join(runDir, 'proof.json'), JSON.stringify({ pass: false, repair_round: 1 }));
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('BOUNDED_REVISION');
    writeFileSync(join(runDir, 'proof.json'), JSON.stringify({ pass: false, repair_round: 2 }));
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('FAILED_HANDOFF');
    writeFileSync(join(runDir, 'proof.json'), JSON.stringify({ pass: true, repair_round: 2 }));
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('HANDOFF');
  });
});
