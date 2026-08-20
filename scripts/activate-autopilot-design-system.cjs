#!/usr/bin/env node
'use strict';

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const SHA = /^[a-f0-9]{64}$/;
const RECEIPT_KIND = 'omd-autopilot-external-authority-controller-activation';

function fail(message) { throw new Error(`autopilot system activation: ${message}`); }
function sha256(bytes) { return crypto.createHash('sha256').update(bytes).digest('hex'); }
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
}
function regular(file, label) {
  if (!fs.existsSync(file)) fail(`${label} is missing`);
  const info = fs.lstatSync(file);
  if (!info.isFile() || info.isSymbolicLink()) fail(`${label} must be a regular non-symlink file`);
  return fs.realpathSync(file);
}
function directory(file, label) {
  if (!fs.existsSync(file)) fail(`${label} is missing`);
  const info = fs.lstatSync(file);
  if (!info.isDirectory() || info.isSymbolicLink()) fail(`${label} must be a regular directory`);
  return fs.realpathSync(file);
}
function inside(child, parent) { return child === parent || child.startsWith(`${parent}${path.sep}`); }
function run(script, args, cwd, authoritySha = null) {
  return execFileSync(process.execPath, [script, ...args], {
    cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, ...(authoritySha ? { OMD_AUTHORITY_CONTROLLER_INTERNAL_SHA256: authoritySha } : {}) },
  });
}
function readReceipt(projectRoot, runDir) {
  const receiptPath = regular(path.resolve(process.env.OMD_AUTHORITY_CONTROLLER_RECEIPT || ''), 'external authority-controller receipt');
  const bytes = fs.readFileSync(receiptPath);
  const expectedSha = process.env.OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256;
  if (!SHA.test(expectedSha || '') || sha256(bytes) !== expectedSha) fail('external authority-controller receipt hash binding failed');
  const receipt = JSON.parse(bytes.toString('utf8'));
  if (receipt?.schema_version !== '0.1' || receipt.kind !== RECEIPT_KIND || receipt.status !== 'active') fail('external authority-controller receipt identity failed');
  if (receipt.authority?.role !== 'project-owner' || typeof receipt.authority?.identifier !== 'string' || !receipt.authority.identifier.trim()) fail('external authority-controller role failed');
  if (receipt.scope?.project_workspace !== projectRoot || receipt.scope?.run_dir !== path.relative(projectRoot, runDir).split(path.sep).join('/')) fail('external authority-controller workspace/run binding failed');
  if (receipt.scope?.single_deterministic_activation !== true || receipt.scope?.review_approval !== true || receipt.scope?.project_adoption_checkpoint !== true) fail('external authority-controller operation scope failed');
  if (regular(receipt.scope?.controller_executable || '', 'controller executable') !== fs.realpathSync(__filename)
    || directory(receipt.scope?.authority_runtime_root || '', 'authority runtime root') !== fs.realpathSync(path.resolve(__dirname, '..'))) fail('external authority-controller executable binding failed');
  if (!SHA.test(receipt.scope?.authority_runtime_closure?.sha256 || '') || !Array.isArray(receipt.scope?.authority_runtime_closure?.files)) fail('external authority-controller runtime closure binding failed');
  if (receipt.activation?.sha256 !== process.env.OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256) fail('external authority-controller activation binding failed');
  return { path: receiptPath, sha256: expectedSha, value: receipt };
}

function verifyAuthorityRuntime(projectRoot, binding) {
  const files = binding.files.map((expected) => {
    if (!expected?.path || path.isAbsolute(expected.path) || expected.path.split(/[\\/]/).includes('..')) fail('authority runtime closure path is invalid');
    const file = regular(path.join(projectRoot, expected.path), `authority runtime ${expected.path}`);
    const bytes = fs.readFileSync(file); const actual = { path: expected.path, mode: fs.lstatSync(file).mode & 0o777, bytes: bytes.length, sha256: sha256(bytes) };
    if (canonical(actual) !== canonical(expected)) fail(`authority runtime closure drift: ${expected.path}`);
    return actual;
  });
  if (sha256(canonical(files)) !== binding.sha256) fail('authority runtime closure hash binding failed');
}

function preflight(projectArg, runArg) {
  const projectRoot = directory(path.resolve(projectArg), 'project root');
  const runDir = directory(path.resolve(projectRoot, runArg), 'run directory');
  if (!inside(runDir, projectRoot)) fail('run directory must be inside the project root');
  const systemDir = directory(path.join(runDir, 'system'), 'run system directory');
  const graph = regular(path.join(systemDir, 'graph.json'), 'system graph draft');
  const provenance = regular(path.join(systemDir, 'provenance.json'), 'system provenance draft');
  const coverage = regular(path.join(systemDir, 'coverage.json'), 'system coverage draft');
  const controller = readReceipt(projectRoot, runDir);
  verifyAuthorityRuntime(controller.value.scope.authority_runtime_root, controller.value.scope.authority_runtime_closure);
  const packageRoot = path.resolve(process.env.OMD_BENCH_COMPILED_CORE_PACKAGE || '');
  const checkpoint = path.resolve(process.env.OMD_BENCH_CORE_CHECKPOINT || '');
  const stagingRoot = directory(path.resolve(process.env.OMD_BENCH_EXTERNAL_STAGING_ROOT || ''), 'external staging root');
  if (!inside(packageRoot, stagingRoot) || !inside(checkpoint, stagingRoot) || inside(stagingRoot, projectRoot)) {
    fail('external package/checkpoint boundary failed');
  }
  const reviewDir = path.join(systemDir, 'review');
  const approval = path.join(systemDir, 'external-authority-approval.json');
  const activation = path.join(systemDir, 'activation.json');
  for (const target of [reviewDir, approval, packageRoot, checkpoint, activation]) {
    if (fs.existsSync(target)) fail(`single deterministic path requires a fresh target: ${target}`);
  }
  const scripts = Object.fromEntries([
    ['prepare', 'prepare-design-md-core-review.cjs'],
    ['compile', 'compile-design-md-core.cjs'],
    ['adopt', 'adopt-design-md-core.cjs'],
    ['validate', 'validate-project-design-system.cjs'],
  ].map(([key, name]) => [key, regular(path.join(__dirname, name), `${name} helper`)]));
  return { projectRoot, runDir, systemDir, graph, provenance, coverage, controller, packageRoot, checkpoint, reviewDir, approval, activation, scripts };
}

function evidenceReferencesFromDrafts(provenanceFile, coverageFile) {
  const provenance = JSON.parse(fs.readFileSync(provenanceFile, 'utf8'));
  const coverage = JSON.parse(fs.readFileSync(coverageFile, 'utf8'));
  const references = [];
  for (const decision of Array.isArray(provenance?.decisions) ? provenance.decisions : []) {
    references.push(...(Array.isArray(decision?.evidence) ? decision.evidence : []));
  }
  const groups = coverage?.groups && typeof coverage.groups === 'object' ? coverage.groups : {};
  for (const group of Object.values(groups)) {
    references.push(...(Array.isArray(group?.evidence) ? group.evidence : []));
  }
  return [...new Set(references)];
}

function dryCheck(projectArg, runArg) {
  const ctx = preflight(projectArg, runArg);
  const scratch = fs.mkdtempSync(path.join(require('node:os').tmpdir(), 'omd-autopilot-dry-check-'));
  const scratchReview = path.join(scratch, 'review');
  const scratchApproval = path.join(scratch, 'external-authority-approval.json');
  const scratchPackage = path.join(scratch, 'package');
  run(ctx.scripts.prepare, [ctx.graph, '--provenance', ctx.provenance, '--coverage', ctx.coverage, '--out-dir', scratchReview], ctx.projectRoot);
  run(ctx.scripts.prepare, ['--approve', path.join(scratchReview, 'review-request.json'), '--reviewer', ctx.controller.value.authority.identifier,
    '--out', scratchApproval, '--authority-transition-approved'], ctx.projectRoot, ctx.controller.sha256);
  run(ctx.scripts.compile, [path.join(scratchReview, 'input-graph.json'), '--provenance', path.join(scratchReview, 'provenance.json'),
    '--coverage', path.join(scratchReview, 'coverage.json'), '--review-receipt', scratchApproval, '--out-dir', scratchPackage, '--adopt'], ctx.projectRoot);
  // Full-transaction rehearsal (e2e gap 2026-08-18): the real activation can
  // still fail AFTER compile, in adopt/validate (projection structure,
  // declaration drift). Rehearse those stages against a scratch COPY of the
  // project so the single real activation cannot be burned by them.
  const scratchProject = path.join(scratch, 'project-copy');
  fs.cpSync(ctx.projectRoot, scratchProject, { recursive: true, filter: (src) => !/node_modules|\.git$/.test(src) });
  const scratchCheckpoint = path.join(scratch, 'project-adoption-checkpoint.json');
  run(ctx.scripts.adopt, [scratchPackage, '--prepare-checkpoint', scratchCheckpoint, '--reviewer', ctx.controller.value.authority.identifier,
    '--authority-transition-approved'], ctx.projectRoot, ctx.controller.sha256);
  run(ctx.scripts.adopt, [scratchPackage, '--project-root', scratchProject, '--checkpoint-receipt', scratchCheckpoint], ctx.projectRoot);
  const scratchRunDir = path.join(scratchProject, path.relative(ctx.projectRoot, ctx.runDir));
  run(ctx.scripts.validate, [scratchProject, scratchRunDir], ctx.projectRoot);
  const missing = [];
  for (const reference of evidenceReferencesFromDrafts(ctx.provenance, ctx.coverage)) {
    if (typeof reference !== 'string' || !reference.trim()) { missing.push(`invalid evidence reference: ${JSON.stringify(reference)}`); continue; }
    const [filePart] = reference.split('#', 1);
    if (!filePart || path.isAbsolute(filePart) || filePart.includes('\\') || filePart.split('/').includes('..')) {
      missing.push(`unsafe evidence reference: ${reference}`); continue;
    }
    const normalized = filePart.split(path.sep).join('/');
    if (normalized === 'DESIGN.md' || normalized.startsWith('.omd/system/')) continue;
    const source = path.resolve(ctx.projectRoot, filePart);
    if (!inside(source, ctx.projectRoot)) { missing.push(`evidence escapes the project: ${reference}`); continue; }
    if (!fs.existsSync(source) || !fs.lstatSync(source).isFile()) {
      missing.push(`project proof evidence ${reference} is missing at ${source}`);
    }
  }
  if (missing.length) fail(`dry-check found ${missing.length} blocking issue(s):\n${missing.join('\n')}`);
  return {
    schema_version: '0.1', kind: 'omd-autopilot-deterministic-system-activation-dry-check', status: 'dry-check-pass',
    authority_controller_receipt_sha256: ctx.controller.sha256,
    inputs: { graph_sha256: sha256(fs.readFileSync(ctx.graph)), provenance_sha256: sha256(fs.readFileSync(ctx.provenance)), coverage_sha256: sha256(fs.readFileSync(ctx.coverage)) },
    provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0,
  };
}

function activate(projectArg, runArg) {
  const { projectRoot, runDir, systemDir, graph, provenance, coverage, controller, packageRoot, checkpoint, reviewDir, approval, activation, scripts } = preflight(projectArg, runArg);

  run(scripts.prepare, [graph, '--provenance', provenance, '--coverage', coverage, '--out-dir', reviewDir], projectRoot);
  run(scripts.prepare, ['--approve', path.join(reviewDir, 'review-request.json'), '--reviewer', controller.value.authority.identifier,
    '--out', approval, '--authority-transition-approved'], projectRoot, controller.sha256);
  run(scripts.compile, [path.join(reviewDir, 'input-graph.json'), '--provenance', path.join(reviewDir, 'provenance.json'),
    '--coverage', path.join(reviewDir, 'coverage.json'), '--review-receipt', approval, '--out-dir', packageRoot, '--adopt'], projectRoot);
  run(scripts.adopt, [packageRoot, '--prepare-checkpoint', checkpoint, '--reviewer', controller.value.authority.identifier,
    '--authority-transition-approved'], projectRoot, controller.sha256);
  run(scripts.adopt, [packageRoot, '--project-root', projectRoot, '--checkpoint-receipt', checkpoint], projectRoot);
  run(scripts.validate, [projectRoot, runDir], projectRoot);
  verifyAuthorityRuntime(controller.value.scope.authority_runtime_root, controller.value.scope.authority_runtime_closure);

  const output = {
    schema_version: '0.1', kind: 'omd-autopilot-deterministic-system-activation', status: 'adopted-and-validated',
    authority_controller_receipt_sha256: controller.sha256,
    inputs: { graph_sha256: sha256(fs.readFileSync(graph)), provenance_sha256: sha256(fs.readFileSync(provenance)), coverage_sha256: sha256(fs.readFileSync(coverage)) },
    outputs: { review_request_sha256: sha256(fs.readFileSync(path.join(reviewDir, 'review-request.json'))), approval_sha256: sha256(fs.readFileSync(approval)), checkpoint_sha256: sha256(fs.readFileSync(checkpoint)), design_md_sha256: sha256(fs.readFileSync(path.join(projectRoot, 'DESIGN.md'))), proof_sha256: sha256(fs.readFileSync(path.join(systemDir, 'proof.json'))) },
    provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0,
  };
  fs.writeFileSync(activation, `${JSON.stringify(output, null, 2)}\n`, { flag: 'wx' });
  return output;
}

try {
  const argv = process.argv.slice(2);
  const dry = argv[0] === '--dry-check';
  const positional = dry ? argv.slice(1) : argv;
  if (positional.length !== 2) fail('usage: activate-autopilot-design-system.cjs [--dry-check] <project-root> <run-dir>');
  process.stdout.write(`${JSON.stringify((dry ? dryCheck : activate)(positional[0], positional[1]), null, 2)}\n`);
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
}
