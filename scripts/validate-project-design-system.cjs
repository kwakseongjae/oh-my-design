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
const specPath = path.join(runDir, 'system', 'spec.json');
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
  'implementation_contract_complete',
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

function relativeLuminance(hex) {
  const channels = hex.slice(1).match(/.{2}/g).map((value) => Number.parseInt(value, 16) / 255)
    .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return (0.2126 * channels[0]) + (0.7152 * channels[1]) + (0.0722 * channels[2]);
}

function contrastRatio(foreground, background) {
  const first = relativeLuminance(foreground);
  const second = relativeLuminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

function validateSystemSpec(spec, designSha, designBytes) {
  const checks = Object.fromEntries(requiredChecks.map((check) => [check, { pass: true, observations: [] }]));
  const invalidate = (check, detail) => {
    checks[check].pass = false;
    checks[check].observations.push(detail);
  };
  if (!spec || spec.schema_version !== '0.1' || spec.design_md_sha256 !== designSha) {
    for (const check of requiredChecks) invalidate(check, 'system-spec-authority-invalid');
    return checks;
  }
  const colors = spec.tokens?.colors;
  const pairs = spec.tokens?.color_pairs;
  if (!colors || typeof colors !== 'object' || Array.isArray(colors) || Object.keys(colors).length < 2) {
    invalidate('token_reference_closure', 'at-least-two-semantic-color-tokens-required');
  }
  for (const [id, value] of Object.entries(colors ?? {})) {
    if (!/^[a-z][a-z0-9-]*$/.test(id) || !/^#[a-f0-9]{6}$/i.test(value)) {
      invalidate('token_reference_closure', `invalid-color-token:${id}`);
    } else if (!designBytes.toLowerCase().includes(value.toLowerCase())) {
      invalidate('implementation_contract_complete', `color-token-not-declared-in-design-md:${id}`);
    }
  }
  if (!Array.isArray(pairs) || pairs.length === 0) invalidate('contrast', 'color-pairs-required');
  for (const pair of pairs ?? []) {
    const foreground = colors?.[pair.foreground];
    const background = colors?.[pair.background];
    if (!/^#[a-f0-9]{6}$/i.test(foreground ?? '') || !/^#[a-f0-9]{6}$/i.test(background ?? '')) {
      invalidate('token_reference_closure', `unresolved-color-pair:${pair?.foreground}/${pair?.background}`);
      invalidate('contrast', `unresolved-color-pair:${pair?.foreground}/${pair?.background}`);
      continue;
    }
    if (typeof pair.min_ratio !== 'number' || pair.min_ratio < 3 || pair.min_ratio > 21) {
      invalidate('contrast', `invalid-min-ratio:${pair?.foreground}/${pair?.background}`);
      continue;
    }
    const observed = contrastRatio(foreground, background);
    checks.contrast.observations.push({ pair: `${pair.foreground}/${pair.background}`, observed_ratio: Number(observed.toFixed(3)), minimum_ratio: pair.min_ratio });
    if (observed + Number.EPSILON < pair.min_ratio) invalidate('contrast', `contrast-failed:${pair.foreground}/${pair.background}`);
  }
  if (!spec.tokens?.typography || typeof spec.tokens.typography !== 'object' || Array.isArray(spec.tokens.typography)
    || Object.keys(spec.tokens.typography).length < 2
    || !spec.tokens?.spacing || typeof spec.tokens.spacing !== 'object' || Array.isArray(spec.tokens.spacing)
    || Object.keys(spec.tokens.spacing).length < 3) {
    invalidate('implementation_contract_complete', 'typography-and-spacing-contract-required');
  }
  const components = spec.components;
  if (!Array.isArray(components) || components.length === 0) invalidate('component_state_coverage', 'component-contract-required');
  const seenComponents = new Set();
  for (const component of components ?? []) {
    if (!component?.id || seenComponents.has(component.id)) {
      invalidate('component_state_coverage', `invalid-component:${component?.id ?? 'missing'}`);
      continue;
    }
    seenComponents.add(component.id);
    const states = Array.isArray(component.states) ? component.states : [];
    if (!states.includes('default')) {
      invalidate('component_state_coverage', `default-state-missing:${component.id}`);
    }
    if (component.interactive === true) {
      for (const state of ['hover', 'focus-visible', 'disabled', 'loading', 'error', 'success']) {
        if (!states.includes(state)) invalidate('component_state_coverage', `${state}-state-missing:${component.id}`);
      }
    }
    for (const reference of component.token_refs ?? []) {
      const [group, id] = String(reference).split('.', 2);
      if (!id || !spec.tokens?.[group] || spec.tokens[group][id] === undefined) {
        invalidate('token_reference_closure', `unresolved-component-token:${component.id}:${reference}`);
      }
    }
  }
  if (spec.responsive?.minimum_width_px !== 320 || spec.responsive?.reflow_zoom_percent !== 200
    || !Array.isArray(spec.responsive?.rules) || spec.responsive.rules.length === 0) {
    invalidate('responsive_320_200', 'exact-320-and-200pct-contract-required');
  }
  if (spec.motion?.reduced_motion !== true) invalidate('reduced_motion', 'reduced-motion-contract-required');
  if (!Array.isArray(spec.assets)) invalidate('assets_fonts_licenses', 'assets-array-required');
  for (const asset of spec.assets ?? []) {
    if (!asset?.id || !['none', 'prompt', 'repository', 'verified-reference'].includes(asset.source_status)
      || !['not-required', 'verified', 'unresolved'].includes(asset.license_status)
      || (asset.source_status !== 'none' && asset.license_status === 'unresolved')) {
      invalidate('assets_fonts_licenses', `asset-authority-invalid:${asset?.id ?? 'missing'}`);
    }
  }
  const unresolved = new Set(Array.isArray(spec.unresolved) ? spec.unresolved : []);
  if (![...unresolved].every((value) => typeof value === 'string' && value.trim())) {
    invalidate('unknown_absence', 'unresolved-path-invalid');
  }
  for (const path of unresolved) {
    if (path.startsWith('tokens.') || path.startsWith('components.')) invalidate('unknown_absence', `unresolved-value-consumed:${path}`);
  }
  if (!spec.voice_locale || !Array.isArray(spec.voice_locale.locales) || spec.voice_locale.locales.length === 0) {
    invalidate('implementation_contract_complete', 'voice-locale-contract-required');
  }
  checks.sections_11_13_honesty.observations.push('validated-from-design-markdown-and-provenance');
  return checks;
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

for (const file of [designMdPath, decisionPath, provenancePath, coveragePath, specPath]) {
  if (!fs.existsSync(file)) fail('required-file-missing', path.relative(cwd, file));
}

let decision = null;
let provenance = null;
let coverage = null;
let spec = null;
let designSha = null;
let designBytes = null;
let designInspection = null;
if (findings.length === 0) {
  try {
    decision = readJson(decisionPath);
    provenance = readJson(provenancePath);
    coverage = readJson(coveragePath);
    spec = readJson(specPath);
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

let computedChecks = null;
if (provenance && coverage && spec && designSha && designInspection) {
  computedChecks = validateSystemSpec(spec, designSha, designBytes);
  if (spec.schema_version !== '0.1') fail('spec-schema-invalid', spec.schema_version);
  if (!isSha(spec.design_md_sha256) || spec.design_md_sha256 !== designSha) {
    fail('spec-design-md-hash-mismatch', spec.design_md_sha256);
  }
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
      if (!entry || entry.method !== 'controller-computed-system-spec-v1') fail('system-check-method-invalid', check);
      if (entry?.pass !== computedChecks[check].pass) fail('system-check-declaration-drift', check);
      if (!computedChecks[check].pass) fail('system-check-failed', check);
    }
  }
}

const proof = {
  schema_version: '0.2',
  status: findings.length === 0 ? 'passed' : 'failed',
  pass: findings.length === 0,
  strategy: decision?.strategy ?? null,
  implementation_owner: decision?.implementation_owner ?? null,
  design_md_sha256: designSha,
  provenance_sha256: fs.existsSync(provenancePath) ? sha256File(provenancePath) : null,
  coverage_sha256: fs.existsSync(coveragePath) ? sha256File(coveragePath) : null,
  spec_sha256: fs.existsSync(specPath) ? sha256File(specPath) : null,
  required_groups: requiredGroups,
  required_checks: requiredChecks,
  computed_checks: computedChecks,
  findings,
  next_state: findings.length === 0 ? 'PRODUCT_BUILD' : 'SYSTEM_REPAIR',
};
fs.mkdirSync(path.dirname(proofPath), { recursive: true });
fs.writeFileSync(proofPath, `${JSON.stringify(proof, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
process.stdout.write(`${proofPath}\n`);
if (findings.length > 0) process.exitCode = 1;
