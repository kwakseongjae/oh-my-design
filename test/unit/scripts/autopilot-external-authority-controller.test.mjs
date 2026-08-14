import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it } from 'vitest';

const prepare = resolve('scripts/prepare-design-md-core-review.cjs');
const adopt = resolve('scripts/adopt-design-md-core.cjs');
const hash = (value) => createHash('sha256').update(value).digest('hex');
const canonical = (value) => Array.isArray(value) ? `[${value.map(canonical).join(',')}]` : value && typeof value === 'object' ? `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}` : JSON.stringify(value);
function files(root, current = root) {
  return readdirSync(current).sort().flatMap((name) => {
    const absolute = join(current, name); const info = statSync(absolute);
    if (info.isDirectory()) return files(root, absolute);
    const bytes = readFileSync(absolute); return [{ path: relative(root, absolute), mode: info.mode & 0o777, bytes: bytes.length, sha256: hash(bytes) }];
  });
}

const env = {
  ...process.env,
  OMD_AUTHORITY_CONTROLLER_RECEIPT: '/controller/receipt.json',
  OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256: 'a'.repeat(64),
};

describe('external authority-controller benchmark boundary', () => {
  it('rejects main-agent review self-attestation before touching any review input', () => {
    const result = spawnSync(process.execPath, [prepare, '--approve', 'missing.json', '--reviewer', 'project-owner', '--out', 'approval.json', '--authority-transition-approved'], { encoding: 'utf8', env });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('main-agent self-attestation is forbidden');
    expect(result.stderr).not.toContain('review request does not exist');
  });

  it('rejects main-agent checkpoint self-attestation before loading a package', () => {
    const result = spawnSync(process.execPath, [adopt, 'missing-package', '--prepare-checkpoint', 'checkpoint.json', '--reviewer', 'project-owner', '--authority-transition-approved'], { encoding: 'utf8', env });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('main-agent self-attestation is forbidden');
    expect(result.stderr).not.toContain('compiled package');
  });

  it('executes one provider-zero external controller transaction and fails closed on a second invocation', () => {
    const root = mkdtempSync(join(tmpdir(), 'omd-authority-e2e-')); const project = join(root, 'project'); const runtime = join(root, 'controller-runtime'); const runDir = join(project, '.omd/runs/test'); const system = join(runDir, 'system'); const staging = join(root, 'staging');
    mkdirSync(system, { recursive: true }); mkdirSync(join(runtime, 'scripts'), { recursive: true }); mkdirSync(staging);
    for (const name of ['activate-autopilot-design-system.cjs', 'prepare-design-md-core-review.cjs', 'compile-design-md-core.cjs', 'adopt-design-md-core.cjs', 'validate-project-design-system.cjs', 'design-md-core-schema.cjs', 'design-md-core-conformance.cjs', 'design-md-core.cjs']) cpSync(resolve('scripts', name), join(runtime, 'scripts', name));
    cpSync(resolve('spec/schema'), join(runtime, 'spec/schema'), { recursive: true });
    const graph = JSON.parse(readFileSync(resolve('spec/fixtures/design-md-core-v2/.omd/system/graph.json'), 'utf8'));
    delete graph.projection; delete graph.extensions;
    graph.governance.decisions[0].path = 'typography_assets.roles.0.family';
    const provenance = { schema_version: '2.0.0', decisions: graph.governance.decisions };
    const groups = ['experience', 'foundations', 'typography-assets', 'components-states', 'layout-platforms', 'content-locales', 'governance'];
    const checks = ['portable_core_structure', 'bound_system_authority', 'token_reference_closure', 'contrast', 'component_state_coverage', 'responsive_320_200', 'reduced_motion', 'assets_fonts_licenses', 'implementation_contract_complete', 'unknown_absence', 'opaque_extension_preservation'];
    const coverage = { schema_version: '2.0.0', groups: Object.fromEntries(groups.map((id) => [id, { status: 'covered', evidence: [`DESIGN.md#${id}`] }])), checks: Object.fromEntries(checks.map((id) => [id, { pass: true, method: 'controller-computed-system-graph-v2' }])) };
    writeFileSync(join(system, 'graph.json'), `${JSON.stringify(graph, null, 2)}\n`); writeFileSync(join(system, 'provenance.json'), `${JSON.stringify(provenance, null, 2)}\n`); writeFileSync(join(system, 'coverage.json'), `${JSON.stringify(coverage, null, 2)}\n`);
    writeFileSync(join(runDir, 'design-system-decision.json'), `${JSON.stringify({ strategy: 'establish', implementation_owner: 'main-agent', root_design_md_write_allowed: true, required_system_authority: 'core-v2-project-system' })}\n`);
    const closureFiles = files(runtime); const closure = { sha256: hash(canonical(closureFiles)), files: closureFiles };
    const canonicalProject = realpathSync(project); const canonicalRuntime = realpathSync(runtime); const executable = join(canonicalRuntime, 'scripts/activate-autopilot-design-system.cjs'); const activationText = 'immutable activation test';
    const receiptPath = join(root, 'authority.json');
    writeFileSync(receiptPath, `${JSON.stringify({ schema_version: '0.1', kind: 'omd-autopilot-external-authority-controller-activation', status: 'active', authority: { role: 'project-owner', identifier: 'external-test-controller' }, scope: { project_workspace: canonicalProject, run_dir: '.omd/runs/test', single_deterministic_activation: true, review_approval: true, project_adoption_checkpoint: true, controller_executable: executable, authority_runtime_root: canonicalRuntime, authority_runtime_closure: closure }, activation: { sha256: hash(activationText) } }, null, 2)}\n`);
    const canonicalStaging = realpathSync(staging); const packageRoot = join(canonicalStaging, 'compiled-core'); const checkpoint = join(canonicalStaging, 'project-adoption-checkpoint.json');
    const activationEnv = { ...process.env, OMD_AUTHORITY_CONTROLLER_RECEIPT: receiptPath, OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256: hash(readFileSync(receiptPath)), OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256: hash(activationText), OMD_BENCH_EXTERNAL_STAGING_ROOT: canonicalStaging, OMD_BENCH_COMPILED_CORE_PACKAGE: packageRoot, OMD_BENCH_CORE_CHECKPOINT: checkpoint };
    const result = spawnSync(process.execPath, [executable, project, '.omd/runs/test'], { encoding: 'utf8', env: activationEnv });
    expect(result.status, result.stderr).toBe(0);
    expect(files(packageRoot).map((entry) => entry.path)).toEqual(['.omd/system/adoption-receipt.json', '.omd/system/coverage.json', '.omd/system/graph.json', '.omd/system/manifest.json', '.omd/system/provenance.json', 'DESIGN.md']);
    expect(existsSync(checkpoint)).toBe(true); expect(existsSync(join(project, 'DESIGN.md'))).toBe(true); expect(existsSync(join(project, '.omd/system/adoption-receipt.json'))).toBe(true);
    const proof = JSON.parse(readFileSync(join(system, 'proof.json'))); const activation = JSON.parse(readFileSync(join(system, 'activation.json')));
    expect(proof).toMatchObject({ pass: true, status: 'passed' }); expect(activation).toMatchObject({ status: 'adopted-and-validated', authority_controller_receipt_sha256: activationEnv.OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
    expect(activation.outputs.design_md_sha256).toBe(hash(readFileSync(join(project, 'DESIGN.md')))); expect(activation.outputs.proof_sha256).toBe(hash(readFileSync(join(system, 'proof.json'))));
    const second = spawnSync(process.execPath, [executable, project, '.omd/runs/test'], { encoding: 'utf8', env: activationEnv }); expect(second.status).not.toBe(0); expect(second.stderr).toContain('fresh target');
  });
});
