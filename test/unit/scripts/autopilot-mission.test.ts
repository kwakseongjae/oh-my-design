import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, readlinkSync, rmSync, writeFileSync } from 'node:fs';
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

function productTree(rootDir: string) {
  const files: Array<{ path: string; mode: string; sha256: string }> = [];
  function visit(dir: string) {
    for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const absolute = join(dir, entry.name);
      const relative = absolute.slice(rootDir.length + 1).split('\\').join('/');
      if (['.git', '.omd', '.benchmark', 'node_modules', 'dist', 'coverage'].includes(relative.split('/')[0])) continue;
      const stat = lstatSync(absolute);
      if (stat.isSymbolicLink()) files.push({ path: relative, mode: 'symlink', sha256: sha(readlinkSync(absolute)) });
      else if (entry.isDirectory()) visit(absolute);
      else if (entry.isFile()) files.push({ path: relative, mode: (stat.mode & 0o111) ? '100755' : '100644', sha256: sha(readFileSync(absolute)) });
    }
  }
  visit(rootDir);
  return { files, sha256: sha(JSON.stringify(files)) };
}

const requiredStates = ['default', 'loading', 'empty', 'error', 'success', 'disabled'];
const requiredViewports = ['1440x900', '390x844', '320x720', '720x450-reflow-200pct'];
const requiredChecks = [
  'functionality', 'task-journey', 'responsive-1440', 'responsive-390', 'responsive-320',
  'reflow-200pct', 'keyboard', 'accessibility', 'evidence-honesty', 'design-conformance',
];

function writeAcceptancePlan(runDir: string, route = '/') {
  const task = readFileSync(join(runDir, 'task.md'), 'utf8').trim();
  const plan = {
    schema_version: '0.1', status: 'locked', implementation_owner: 'main-agent', route,
    mission_sha256: sha(readFileSync(join(runDir, 'mission.json'))),
    task_sha256: sha(readFileSync(join(runDir, 'task.md'))),
    design_system_decision_sha256: sha(readFileSync(join(runDir, 'design-system-decision.json'))),
    task_requirements: [
      { id: 'task-journey', kind: 'journey', source_quote: task, acceptance: 'The requested journey is operable.' },
      { id: 'task-honesty', kind: 'unknown', source_quote: task, acceptance: 'Unknown product facts remain absent.' },
    ],
    required_states: requiredStates, viewports: requiredViewports, quality_checks: requiredChecks,
  };
  writeFileSync(join(runDir, 'acceptance-plan.json'), JSON.stringify(plan));
  return plan;
}

function writeFinalProof(runDir: string, repairRound: number, pass: boolean) {
  const acceptance = JSON.parse(readFileSync(join(runDir, 'acceptance-plan.json'), 'utf8'));
  const proof = {
    schema_version: '0.2', implementation_owner: 'main-agent', route: acceptance.route,
    mission_sha256: sha(readFileSync(join(runDir, 'mission.json'))),
    acceptance_plan_sha256: sha(readFileSync(join(runDir, 'acceptance-plan.json'))),
    product_build_admission_sha256: sha(readFileSync(join(runDir, 'product-build-admission.json'))),
    product_tree_sha256: productTree(root).sha256, repair_round: repairRound, pass,
    requirement_results: acceptance.task_requirements.map((item: { id: string }, index: number) => ({
      id: item.id, pass: pass || index > 0, evidence: ['controller:test-requirement'],
    })),
    checks: requiredChecks.map((id, index) => ({ id, pass: pass || index > 0, evidence: ['controller:test-check'] })),
  };
  writeFileSync(join(runDir, 'proof.json'), JSON.stringify(proof));
  return proof;
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
    expect(state(runDir).state).toBe('ACCEPTANCE_PLAN');
    writeAcceptancePlan(runDir);
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('PRODUCT_BUILD');
    expect(existsSync(join(runDir, 'product-build-admission.json'))).toBe(true);
    expect(JSON.parse(readFileSync(join(runDir, 'product-build-admission.json'), 'utf8')).acceptance_plan_sha256)
      .toBe(sha(readFileSync(join(runDir, 'acceptance-plan.json'))));
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
    expect(state(runDir).state).toBe('ACCEPTANCE_PLAN');
    writeAcceptancePlan(runDir);
    expect(run(runDir).status).toBe(0);
    writeFileSync(join(root, 'index.html'), '<main>built round zero</main>');
    writeFinalProof(runDir, 0, false);
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('BOUNDED_REVISION');
    expect(existsSync(join(runDir, 'repairs/round-0.json'))).toBe(true);
    const stale = run(runDir);
    expect(stale.status).not.toBe(0);
    expect(stale.stderr).toContain('final proof repair round drift: expected 1, received 0');
    writeFileSync(join(root, 'index.html'), '<main>built round one</main>');
    writeFinalProof(runDir, 1, false);
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('BOUNDED_REVISION');
    expect(existsSync(join(runDir, 'repairs/round-1.json'))).toBe(true);
    writeFileSync(join(root, 'index.html'), '<main>built round two</main>');
    writeFinalProof(runDir, 2, false);
    expect(run(runDir).status).toBe(0);
    expect(state(runDir).state).toBe('FAILED_HANDOFF');
    expect(JSON.parse(readFileSync(join(root, '.omd/autopilot-active.json'), 'utf8')).status).toBe('failed');
    const reopen = run(runDir);
    expect(reopen.status).not.toBe(0);
    expect(reopen.stderr).toContain('autopilot mission is terminal and non-resumable: failed');
  });

  it('allows exactly one active mission lineage and releases the project only at a terminal handoff', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-autopilot-lineage-'));
    const first = join(root, '.omd/runs/run-1');
    const second = join(root, '.omd/runs/run-2');
    mkdirSync(first, { recursive: true });
    mkdirSync(second, { recursive: true });
    writeFileSync(join(first, 'task.md'), 'Build the first surface.');
    writeFileSync(join(second, 'task.md'), 'Build a replacement surface.');
    writeFileSync(join(root, 'index.html'), '<main>starter</main>');
    expect(run(first, 'bootstrap').status).toBe(0);
    const duplicate = run(second, 'bootstrap');
    expect(duplicate.status).not.toBe(0);
    expect(duplicate.stderr).toContain('another autopilot mission is already active: .omd/runs/run-1');

    mkdirSync(join(first, 'handoff'), { recursive: true });
    writeFileSync(join(first, 'handoff/.handoff.json'), JSON.stringify({ state: 'PROPOSE_PLAN', status: 'ready' }));
    writeCouncilAuthority(first);
    writeFileSync(join(first, 'design-system-decision.json'), JSON.stringify({ strategy: 'surface-local-only' }));
    expect(run(first).status).toBe(0);
    writeAcceptancePlan(first);
    expect(run(first).status).toBe(0);
    writeFileSync(join(root, 'index.html'), '<main>built</main>');
    writeFinalProof(first, 0, true);
    expect(run(first).status).toBe(0);
    expect(state(first).state).toBe('HANDOFF');
    expect(JSON.parse(readFileSync(join(root, '.omd/autopilot-active.json'), 'utf8')).status).toBe('completed');
    mkdirSync(join(root, '.benchmark'), { recursive: true });
    writeFileSync(join(root, '.benchmark/run-result.json'), '{"controller":"runtime-only"}');
    const audit = run(first, 'audit');
    expect(audit.status).toBe(0);
    expect(JSON.parse(audit.stdout)).toMatchObject({ pass: true, state: 'HANDOFF', repair_rounds_used: 0 });
    writeFileSync(join(root, 'index.html'), '<main>tampered after handoff</main>');
    expect(run(first, 'audit').status).not.toBe(0);
    writeFileSync(join(root, 'index.html'), '<main>built</main>');
    expect(run(second, 'bootstrap').status).toBe(0);
  });

  it('rejects answer artifacts that were not preceded by a recorded interview state', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-autopilot-answer-authority-'));
    const runDir = join(root, '.omd/runs/run-1');
    mkdirSync(join(runDir, 'handoff'), { recursive: true });
    mkdirSync(join(runDir, 'checkpoints'), { recursive: true });
    writeFileSync(join(runDir, 'task.md'), 'Build a fully specified surface.');
    writeFileSync(join(root, 'index.html'), '<main>starter</main>');
    expect(run(runDir, 'bootstrap').status).toBe(0);
    writeFileSync(join(runDir, 'handoff/.handoff.json'), JSON.stringify({ state: 'PROPOSE_PLAN', status: 'ready' }));
    writeFileSync(join(runDir, 'checkpoints/council-intake.answers.json'), JSON.stringify({ answers: [] }));
    const result = run(runDir);
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('council answers exist without a recorded consequential interview');
  });

  it('rejects self-attested legacy proof without atomic requirement and quality evidence', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-autopilot-proof-authority-'));
    const runDir = join(root, '.omd/runs/run-1');
    mkdirSync(join(runDir, 'handoff'), { recursive: true });
    writeFileSync(join(runDir, 'task.md'), 'Build a complete surface without inventing user facts.');
    writeFileSync(join(root, 'index.html'), '<main>starter</main>');
    expect(run(runDir, 'bootstrap').status).toBe(0);
    writeFileSync(join(runDir, 'handoff/.handoff.json'), JSON.stringify({ state: 'PROPOSE_PLAN', status: 'ready' }));
    writeCouncilAuthority(runDir);
    writeFileSync(join(runDir, 'design-system-decision.json'), JSON.stringify({ strategy: 'surface-local-only' }));
    expect(run(runDir).status).toBe(0);
    writeAcceptancePlan(runDir);
    expect(run(runDir).status).toBe(0);
    writeFileSync(join(root, 'index.html'), '<main>built</main>');
    writeFileSync(join(runDir, 'proof.json'), JSON.stringify({ schema_version: '0.1', pass: true, repair_round: 0 }));
    const result = run(runDir);
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('final proof authority drift');
  });
});
