#!/usr/bin/env node
// Deterministic provider-free proof for an Autopilot-created project system.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd'));
const designMdPath = path.join(cwd, 'DESIGN.md');
const decisionPath = path.join(runDir, 'design-system-decision.json');
const provenancePath = path.join(runDir, 'system', 'provenance.json');
const coveragePath = path.join(runDir, 'system', 'coverage.json');
const proofPath = path.join(runDir, 'system', 'proof.json');

const sourceClasses = new Set([
  'prompt-fact',
  'repository-fact',
  'verified-reference-inspiration',
  'agent-proposed-greenfield-decision',
  'unresolved',
]);
const requiredGroups = [
  'product-scope',
  'color-contrast',
  'typography',
  'spacing-density-layout',
  'responsive',
  'component-states',
  'motion-reduced-motion',
  'voice-locale',
  'assets-fonts-licenses',
  'provenance-unresolved',
];
const requiredChecks = [
  'token_reference_closure',
  'contrast',
  'component_state_coverage',
  'responsive_320_200',
  'reduced_motion',
  'assets_fonts_licenses',
  'code_conformance',
  'unknown_absence',
  'sections_11_13_honesty',
];

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
function sha256File(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}
function isSha(value) {
  return typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);
}

const findings = [];
function fail(code, detail) {
  findings.push({ code, detail });
}

for (const file of [designMdPath, decisionPath, provenancePath, coveragePath]) {
  if (!fs.existsSync(file)) fail('required-file-missing', path.relative(cwd, file));
}

let decision = null;
let provenance = null;
let coverage = null;
let designSha = null;
if (findings.length === 0) {
  try {
    decision = readJson(decisionPath);
    provenance = readJson(provenancePath);
    coverage = readJson(coveragePath);
    designSha = sha256File(designMdPath);
  } catch (error) {
    fail('artifact-parse-failed', error.message);
  }
}

if (decision) {
  if (!['establish', 'refresh'].includes(decision.strategy)) fail('system-build-not-authorized', decision.strategy);
  if (decision.implementation_owner !== 'main-agent') fail('implementation-owner-drift', decision.implementation_owner);
  if (decision.root_design_md_write_allowed !== true) fail('design-md-write-not-authorized', 'false');
}

if (provenance && coverage && designSha) {
  for (const [name, artifact] of [['provenance', provenance], ['coverage', coverage]]) {
    if (artifact.schema_version !== '0.1') fail(`${name}-schema-invalid`, artifact.schema_version);
    if (!isSha(artifact.design_md_sha256) || artifact.design_md_sha256 !== designSha) {
      fail(`${name}-design-md-hash-mismatch`, artifact.design_md_sha256);
    }
  }

  if (!Array.isArray(provenance.decisions) || provenance.decisions.length === 0) {
    fail('provenance-decisions-missing', 'decisions must be non-empty');
  } else {
    const paths = new Set();
    for (const item of provenance.decisions) {
      if (!item || typeof item.path !== 'string' || !item.path.trim() || paths.has(item.path)) {
        fail('provenance-path-invalid', item?.path ?? null);
        continue;
      }
      paths.add(item.path);
      if (!sourceClasses.has(item.source_class)) fail('provenance-source-class-invalid', item.path);
      if (!Array.isArray(item.evidence)) fail('provenance-evidence-invalid', item.path);
      if (item.source_class === 'unresolved' && item.value !== null && item.value !== undefined) {
        fail('unresolved-value-promoted', item.path);
      }
      if (item.source_class !== 'unresolved' && (!Array.isArray(item.evidence) || item.evidence.length === 0)) {
        fail('provenance-evidence-missing', item.path);
      }
    }
  }

  if (!coverage.groups || typeof coverage.groups !== 'object') {
    fail('coverage-groups-missing', 'groups');
  } else {
    for (const group of requiredGroups) {
      const entry = coverage.groups[group];
      if (!entry || !['covered', 'not-applicable'].includes(entry.status)) {
        fail('coverage-group-invalid', group);
      } else if (!Array.isArray(entry.evidence) || entry.evidence.length === 0) {
        fail('coverage-group-evidence-missing', group);
      } else if (entry.status === 'not-applicable' && (typeof entry.reason !== 'string' || !entry.reason.trim())) {
        fail('coverage-not-applicable-reason-missing', group);
      }
    }
  }

  if (!coverage.checks || typeof coverage.checks !== 'object') {
    fail('coverage-checks-missing', 'checks');
  } else {
    for (const check of requiredChecks) {
      const entry = coverage.checks[check];
      if (!entry || entry.pass !== true) fail('system-check-failed', check);
      else if (!Array.isArray(entry.evidence) || entry.evidence.length === 0) {
        fail('system-check-evidence-missing', check);
      }
    }
  }
}

const proof = {
  schema_version: '0.1',
  status: findings.length === 0 ? 'passed' : 'failed',
  pass: findings.length === 0,
  strategy: decision?.strategy ?? null,
  implementation_owner: decision?.implementation_owner ?? null,
  design_md_sha256: designSha,
  provenance_sha256: fs.existsSync(provenancePath) ? sha256File(provenancePath) : null,
  coverage_sha256: fs.existsSync(coveragePath) ? sha256File(coveragePath) : null,
  required_groups: requiredGroups,
  required_checks: requiredChecks,
  findings,
  next_state: findings.length === 0 ? 'PRODUCT_BUILD' : 'SYSTEM_REPAIR',
};
fs.mkdirSync(path.dirname(proofPath), { recursive: true });
fs.writeFileSync(proofPath, `${JSON.stringify(proof, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
process.stdout.write(`${proofPath}\n`);
if (findings.length > 0) process.exitCode = 1;
