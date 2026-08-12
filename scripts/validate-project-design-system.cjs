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

function markdownSlug(value) {
  return value.trim().toLowerCase()
    .replace(/[`*_~]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function inspectDesignMarkdown(bytes) {
  const sections = new Map();
  const headings = new Set();
  const lines = bytes.split(/\r?\n/);
  let current = null;
  for (const line of lines) {
    const heading = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (heading) headings.add(markdownSlug(heading[2]));
    const numbered = line.match(/^##\s+(\d{1,2})[.)]?\s+(.+?)\s*$/);
    if (numbered) {
      current = Number(numbered[1]);
      if (!sections.has(current)) sections.set(current, []);
      continue;
    }
    if (current !== null) sections.get(current).push(line);
  }
  return { sections, headings };
}

function resolveEvidenceReference(reference, designInspection) {
  if (typeof reference !== 'string' || !reference.trim()) return { valid: false, detail: reference };
  const [filePart, fragment = ''] = reference.split('#', 2);
  if (!filePart || path.isAbsolute(filePart) || filePart.split(/[\\/]/).includes('..')) {
    return { valid: false, detail: reference };
  }
  const candidates = [path.resolve(runDir, filePart), path.resolve(cwd, filePart)]
    .filter((candidate) => candidate === cwd || candidate.startsWith(`${cwd}${path.sep}`));
  const file = candidates.find((candidate) => fs.existsSync(candidate));
  if (!file || !fs.lstatSync(file).isFile() || fs.lstatSync(file).isSymbolicLink()) {
    return { valid: false, detail: reference };
  }
  if (fragment && (file !== designMdPath || !designInspection.headings.has(markdownSlug(fragment)))) {
    return { valid: false, detail: reference };
  }
  return { valid: true, file };
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
let designBytes = null;
let designInspection = null;
if (findings.length === 0) {
  try {
    decision = readJson(decisionPath);
    provenance = readJson(provenancePath);
    coverage = readJson(coveragePath);
    designBytes = fs.readFileSync(designMdPath, 'utf8');
    designSha = sha256File(designMdPath);
    designInspection = inspectDesignMarkdown(designBytes);
  } catch (error) {
    fail('artifact-parse-failed', error.message);
  }
}

if (decision) {
  if (!['establish', 'refresh'].includes(decision.strategy)) fail('system-build-not-authorized', decision.strategy);
  if (decision.implementation_owner !== 'main-agent') fail('implementation-owner-drift', decision.implementation_owner);
  if (decision.root_design_md_write_allowed !== true) fail('design-md-write-not-authorized', 'false');
}

if (provenance && coverage && designSha && designInspection) {
  for (let section = 1; section <= 13; section += 1) {
    if (!designInspection.sections.has(section)) fail('design-md-section-missing', String(section));
  }
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
      for (const reference of Array.isArray(item.evidence) ? item.evidence : []) {
        if (!resolveEvidenceReference(reference, designInspection).valid) {
          fail('provenance-evidence-unresolvable', `${item.path}:${reference}`);
        }
      }
    }
  }

  const authorityPrefixes = new Map([[11, 'brand'], [12, 'principles'], [13, 'personas']]);
  for (const [section, prefix] of authorityPrefixes) {
    const body = (designInspection.sections.get(section) || []).join('\n').trim();
    if (body && !body.includes('[FILL IN]')) {
      const authoritative = provenance.decisions.some((item) => item.path === prefix || item.path.startsWith(`${prefix}.`))
        && provenance.decisions.some((item) => (item.path === prefix || item.path.startsWith(`${prefix}.`))
          && ['prompt-fact', 'repository-fact', 'verified-reference-inspiration'].includes(item.source_class)
          && Array.isArray(item.evidence) && item.evidence.length > 0);
      if (!authoritative) fail('sections-11-13-unsupported-content', String(section));
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
      for (const reference of Array.isArray(entry?.evidence) ? entry.evidence : []) {
        if (!resolveEvidenceReference(reference, designInspection).valid) {
          fail('coverage-group-evidence-unresolvable', `${group}:${reference}`);
        }
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
      } else {
        for (const reference of entry.evidence) {
          const resolved = resolveEvidenceReference(reference, designInspection);
          if (!resolved.valid) {
            fail('system-check-evidence-unresolvable', `${check}:${reference}`);
            continue;
          }
          try {
            const receipt = readJson(resolved.file);
            if (receipt.schema_version !== '0.1' || receipt.check !== check || receipt.pass !== true
              || receipt.design_md_sha256 !== designSha) {
              fail('system-check-receipt-invalid', check);
            }
          } catch {
            fail('system-check-receipt-invalid', check);
          }
        }
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
