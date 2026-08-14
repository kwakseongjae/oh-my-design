#!/usr/bin/env node
// Deterministic provider-free proof for an Autopilot-created project system.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {
  validateCoreAdoptionReceipt: validateCoreAdoptionReceiptSchema,
  validateCoreCoverage,
  validateCoreGraph,
  validateCoreManifest,
  validateCoreProvenance,
} = require('./design-md-core-schema.cjs');
const {
  evaluatePortableCore,
  graphFromCoreProjection,
  inspectDesignMd: inspectCoreDesignMd,
  renderCore,
  semanticCoreDigest,
} = require('./design-md-core.cjs');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd'));
const designMdPath = path.join(cwd, 'DESIGN.md');
const decisionPath = path.join(runDir, 'design-system-decision.json');
const canonicalSystemDir = path.join(cwd, '.omd', 'system');
const coreManifestPath = path.join(canonicalSystemDir, 'manifest.json');
const coreGraphPath = path.join(canonicalSystemDir, 'graph.json');
const coreProvenancePath = path.join(canonicalSystemDir, 'provenance.json');
const coreCoveragePath = path.join(canonicalSystemDir, 'coverage.json');
const coreAdoptionReceiptPath = path.join(canonicalSystemDir, 'adoption-receipt.json');
const legacyProvenancePath = path.join(runDir, 'system', 'provenance.json');
const legacyCoveragePath = path.join(runDir, 'system', 'coverage.json');
const legacySpecPath = path.join(runDir, 'system', 'spec.json');
const proofPath = path.join(runDir, 'system', 'proof.json');

const CORE_MANIFEST_SCHEMA = 'https://oh-my-design.kr/schema/design-md-core-manifest-v2.schema.json';
const CORE_GRAPH_SCHEMA = 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json';
const CORE_ADOPTION_RECEIPT_KIND = 'design-md-core-adoption-receipt';
const CORE_MIGRATION_EXTENSION = 'dev.oh-my-design.migration';
const REQUIRED_SYSTEM_AUTHORITY = 'core-v2-project-system';
const LEGACY_FIXTURE_EPOCH = 'legacy-direct-validator-fixture-v0.1';
const coreSections = [
  { id: 'experience', heading: '1. Experience', graphKey: 'experience' },
  { id: 'foundations', heading: '2. Foundations', graphKey: 'foundations' },
  { id: 'typography-assets', heading: '3. Typography & Assets', graphKey: 'typography_assets' },
  { id: 'components-states', heading: '4. Components & States', graphKey: 'components_states' },
  { id: 'layout-platforms', heading: '5. Layout & Platforms', graphKey: 'layout_platforms' },
  { id: 'content-locales', heading: '6. Content & Locales', graphKey: 'content_locales' },
  { id: 'governance', heading: '7. Governance', graphKey: 'governance' },
];
const coreSectionIds = coreSections.map((section) => section.id);

const sourceClasses = new Set([
  'prompt-fact',
  'repository-fact',
  'verified-reference-inspiration',
  'agent-proposed-greenfield-decision',
  'unresolved',
]);
const legacyRequiredGroups = [
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
const legacyRequiredChecks = [
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
const coreRequiredGroups = [...coreSectionIds];
const coreRequiredChecks = [
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

function validateLegacySystemSpec(spec, designSha, designBytes) {
  const checks = Object.fromEntries(legacyRequiredChecks.map((check) => [check, { pass: true, observations: [] }]));
  const invalidate = (check, detail) => {
    checks[check].pass = false;
    checks[check].observations.push(detail);
  };
  if (!spec || spec.schema_version !== '0.1' || spec.design_md_sha256 !== designSha) {
    for (const check of legacyRequiredChecks) invalidate(check, 'system-spec-authority-invalid');
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

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function stableJson(value) {
  if (Array.isArray(value)) return value.map(stableJson);
  if (!isPlainObject(value)) return value;
  return Object.fromEntries(
    Object.keys(value).sort().map((key) => [key, stableJson(value[key])]),
  );
}

function stableJsonBytes(value) {
  return `${JSON.stringify(stableJson(value), null, 2)}\n`;
}

function sha256Bytes(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function exactObjectKeys(value, expected) {
  if (!isPlainObject(value)) return false;
  return JSON.stringify(Object.keys(value).sort()) === JSON.stringify([...expected].sort());
}

function validateCoreAdoptionReceipt(receipt, context) {
  const observations = [...context.fileObservations];
  for (const error of validateCoreAdoptionReceiptSchema(receipt)) {
    observations.push(`adoption-receipt-schema:${error.path}:${error.keyword}`);
  }
  if (!isPlainObject(receipt)) {
    if (observations.length === 0) observations.push('adoption-receipt-object-invalid');
    return observations;
  }

  if (receipt.schema_version !== '2.0.0'
    || receipt.kind !== CORE_ADOPTION_RECEIPT_KIND
    || receipt.status !== 'adopted'
    || receipt.authority !== 'system-graph') {
    observations.push('adoption-receipt-identity-invalid');
  }

  const reviewer = receipt.review?.reviewer;
  if (!isPlainObject(receipt.review)
    || !isSha(receipt.review.receipt_sha256)
    || receipt.review.authority_transition_approved !== true
    || !isPlainObject(reviewer)
    || reviewer.role !== 'project-owner'
    || typeof reviewer.identifier !== 'string'
    || !reviewer.identifier.trim()) {
    observations.push('adoption-receipt-owner-review-invalid');
  }

  if (!isPlainObject(receipt.inputs)
    || !isSha(receipt.inputs.graph_sha256)
    || !isSha(receipt.inputs.provenance_sha256)
    || !isSha(receipt.inputs.coverage_sha256)) {
    observations.push('adoption-receipt-input-bindings-invalid');
  }

  const outputNames = ['design_md', 'graph', 'provenance', 'coverage', 'manifest'];
  if (!exactObjectKeys(receipt.outputs, outputNames)) {
    observations.push('adoption-receipt-output-set-invalid');
  }
  for (const name of outputNames) {
    const expected = context.outputs[name];
    const actual = receipt.outputs?.[name];
    if (!isPlainObject(actual) || actual.path !== expected.path || actual.sha256 !== expected.sha256) {
      observations.push(`adoption-receipt-output-binding-invalid:${name}`);
    }
  }

  const migration = context.graph?.extensions?.[CORE_MIGRATION_EXTENSION];
  if (migration === undefined) {
    if (receipt.migration !== undefined || Object.hasOwn(receipt.inputs ?? {}, 'migration_report_sha256')) {
      observations.push('adoption-receipt-migration-without-ledger');
    }
    return observations;
  }

  if (!isPlainObject(migration)) {
    observations.push('migration-ledger-object-invalid');
    return observations;
  }
  if (Object.hasOwn(migration, 'projection_observation_graph_sha256')) {
    observations.push('migration-observation-fast-path-present');
  }

  const preservation = migration.preservation;
  if (!isPlainObject(preservation)
    || preservation.dropped_segments !== 0
    || preservation.opaque_preserved !== true
    || preservation.source_reconstruction_equal !== true) {
    observations.push('migration-ledger-preservation-invalid');
  }

  let reconstructed = '';
  if (!isSha(migration.source_sha256) || !Array.isArray(migration.original_segments)) {
    observations.push('migration-source-ledger-missing');
  } else {
    for (const [index, segment] of migration.original_segments.entries()) {
      if (!isPlainObject(segment) || !segment.id || typeof segment.content !== 'string'
        || !isSha(segment.sha256) || sha256Bytes(segment.content) !== segment.sha256) {
        observations.push(`migration-source-segment-invalid:${index}`);
      } else {
        reconstructed += segment.content;
      }
    }
    if (sha256Bytes(reconstructed) !== migration.source_sha256) {
      observations.push('migration-source-reconstruction-mismatch');
    }
  }

  const migrationReceipt = receipt.migration;
  if (!isPlainObject(migrationReceipt)
    || !isSha(receipt.inputs?.migration_report_sha256)
    || migrationReceipt.source_sha256 !== migration.source_sha256
    || migrationReceipt.candidate_graph_sha256 !== receipt.inputs?.graph_sha256
    || !isSha(migrationReceipt.candidate_design_md_sha256)
    || migrationReceipt.preserved_extension_sha256 !== sha256Bytes(stableJsonBytes(migration))
    || migrationReceipt.observation_fast_path_disabled !== true
    || migrationReceipt.dropped_segments !== 0
    || migrationReceipt.source_reconstruction_equal !== true
    || migrationReceipt.unsupported_claims_reviewed !== true
    || migrationReceipt.unsupported_claims_approved !== true) {
    observations.push('adoption-receipt-migration-binding-invalid');
  }

  return observations;
}

function validExtensionKeys(value) {
  if (value === undefined) return true;
  if (!isPlainObject(value)) return false;
  return Object.keys(value).every((key) => /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/.test(key));
}

function coreProjectionInspection(bytes) {
  const observations = [];
  const lines = bytes.split('\n');
  const firstNonEmpty = lines.findIndex((line) => line.trim());
  const firstLine = firstNonEmpty >= 0 ? lines[firstNonEmpty] : '';
  if (firstNonEmpty !== 0 || !/^#\s+.+\sDesign System\s*$/.test(firstLine)) {
    observations.push('first-visible-line-must-be-product-design-system-title');
  }
  if (firstLine.trim() === '---' || bytes.startsWith('---\n')) observations.push('yaml-frontmatter-forbidden');
  if (bytes.includes('\r')) observations.push('projection-must-use-lf-line-endings');
  if (!bytes.endsWith('\n') || bytes.endsWith('\n\n')) observations.push('projection-must-have-one-trailing-newline');

  const h2s = [];
  const anchors = [];
  for (let index = 0; index < lines.length; index += 1) {
    const anchor = lines[index].match(/^<!--\s*design-md:section\s+([a-z0-9-]+)\s*-->\s*$/);
    if (anchor) {
      anchors.push(anchor[1]);
      const next = lines[index + 1] || '';
      const expected = coreSections.find((section) => section.id === anchor[1]);
      if (!expected || next !== `## ${expected.heading}`) observations.push(`anchor-heading-pair-invalid:${anchor[1]}`);
    }
    const h2 = lines[index].match(/^##\s+(.+?)\s*$/);
    if (h2) h2s.push(h2[1]);
  }
  const expectedHeadings = coreSections.map((section) => section.heading);
  if (JSON.stringify(anchors) !== JSON.stringify(coreSectionIds)) observations.push('core-section-anchor-order-invalid');
  if (JSON.stringify(h2s) !== JSON.stringify(expectedHeadings)) observations.push('core-section-heading-order-invalid');
  if (/^---\s*$/m.test(lines.slice(0, Math.max(1, firstNonEmpty + 1)).join('\n'))) observations.push('visible-top-metadata-forbidden');

  return {
    pass: observations.length === 0,
    observations,
    title: /^#\s+(.+)\sDesign System\s*$/.exec(firstLine)?.[1]?.trim() || null,
    anchors,
    h2s,
  };
}

function coreColorValue(token) {
  if (!isPlainObject(token) || token.$type !== 'color' || typeof token.$value !== 'string') return null;
  return /^#[a-f0-9]{6}$/i.test(token.$value) ? token.$value : null;
}

function normalizeTokenReference(reference) {
  const value = String(reference || '').trim().replace(/^\{(.+)\}$/, '$1');
  return value.startsWith('foundations.tokens.') ? value.slice('foundations.tokens.'.length) : value;
}

function encodePointerSegment(value) {
  return String(value).replace(/~/g, '~0').replace(/\//g, '~1');
}

function decodePointerSegment(value) {
  return String(value).replace(/~1/g, '/').replace(/~0/g, '~');
}

function resolvePointer(root, segments) {
  let node = root;
  for (let index = 0; index < segments.length; index += 1) {
    const key = segments[index];
    if (Array.isArray(node)) {
      if (!/^(0|[1-9]\d*)$/.test(key)) return { exists: false, parentResolved: false };
      const position = Number(key);
      if (position >= node.length) return { exists: false, parentResolved: index === segments.length - 1 };
      node = node[position];
    } else if (isPlainObject(node)) {
      if (!Object.hasOwn(node, key)) return { exists: false, parentResolved: index === segments.length - 1 };
      node = node[key];
    } else {
      return { exists: false, parentResolved: false };
    }
  }
  return { exists: true, parentResolved: true, value: node };
}

function dottedPathCandidates(root, pathValue) {
  const parts = pathValue.split('.');
  if (parts.some((part) => !part)) return [];
  const candidates = [];
  function walk(node, offset, segments) {
    if (offset >= parts.length) {
      candidates.push({ segments, exists: true, value: node });
      return;
    }
    if (Array.isArray(node)) {
      const part = parts[offset];
      if (/^(0|[1-9]\d*)$/.test(part)) {
        const index = Number(part);
        if (index < node.length) walk(node[index], offset + 1, [...segments, part]);
        else if (offset === parts.length - 1) candidates.push({ segments: [...segments, part], exists: false });
      }
      return;
    }
    if (!isPlainObject(node)) return;
    let matchedPrefix = false;
    for (let end = offset + 1; end <= parts.length; end += 1) {
      const key = parts.slice(offset, end).join('.');
      if (Object.hasOwn(node, key)) {
        matchedPrefix = true;
        walk(node[key], end, [...segments, key]);
      }
    }
    if (!matchedPrefix) candidates.push({ segments: [...segments, parts.slice(offset).join('.')], exists: false });
  }
  walk(root, 0, []);
  return candidates;
}

function resolveDecisionPath(graph, rawPath) {
  if (typeof rawPath !== 'string' || !rawPath.trim()) return { valid: false, reason: 'empty' };
  const input = rawPath.trim();
  let candidates;
  if (input.startsWith('/')) {
    if (input === '/' || input.endsWith('/') || /~(?![01])/u.test(input)) return { valid: false, reason: 'invalid-json-pointer' };
    const segments = input.slice(1).split('/').map(decodePointerSegment);
    const resolved = resolvePointer(graph, segments);
    candidates = resolved.parentResolved ? [{ segments, exists: resolved.exists, value: resolved.value }] : [];
  } else {
    candidates = dottedPathCandidates(graph, input);
  }
  const unique = new Map(candidates.map((candidate) => [
    `/${candidate.segments.map(encodePointerSegment).join('/')}`,
    candidate,
  ]));
  if (unique.size !== 1) return { valid: false, reason: unique.size === 0 ? 'unresolvable' : 'ambiguous' };
  const [pointer, candidate] = [...unique.entries()][0];
  return { valid: true, pointer, exists: candidate.exists, value: candidate.value };
}

function pointerOverlaps(first, second) {
  return first === second || first.startsWith(`${second}/`) || second.startsWith(`${first}/`);
}

function validateCoreSystem(manifest, graph, provenance, coverage, designSha, designBytes, graphSha, receiptContext) {
  const checks = Object.fromEntries(coreRequiredChecks.map((check) => [check, { pass: true, observations: [] }]));
  const invalidate = (check, detail) => {
    checks[check].pass = false;
    checks[check].observations.push(detail);
  };
  const projection = coreProjectionInspection(designBytes);
  checks.portable_core_structure.observations.push(...projection.observations);
  if (!projection.pass) checks.portable_core_structure.pass = false;
  const standaloneInspection = inspectCoreDesignMd(designBytes);
  const standaloneConformance = evaluatePortableCore(designBytes, { inspection: standaloneInspection });
  checks.portable_core_structure.observations.push(
    ...standaloneConformance.reasons.map((reason) => `portable-core:${reason.code}`),
  );
  if (!standaloneConformance.portable_core) checks.portable_core_structure.pass = false;

  const manifestSchemaErrors = validateCoreManifest(manifest);
  const graphSchemaErrors = validateCoreGraph(graph, {
    requireComponentStateCoverage: coverage?.checks?.component_state_coverage?.pass === true,
  });
  for (const error of manifestSchemaErrors) invalidate('bound_system_authority', `manifest-schema:${error.path}:${error.keyword}`);
  for (const error of graphSchemaErrors) {
    if (error.keyword === 'componentStateCoverage') {
      invalidate('component_state_coverage', error.message);
    } else {
      invalidate('bound_system_authority', `graph-schema:${error.path}:${error.keyword}`);
    }
  }

  const manifestValid = manifest?.$schema === CORE_MANIFEST_SCHEMA
    && manifest?.schema_version === '2.0.0'
    && manifest?.format === 'design-md-core'
    && manifest?.format_version === '2.0.0'
    && manifest?.profile === 'portable-core'
    && JSON.stringify(manifest?.section_order) === JSON.stringify(coreSectionIds)
    && manifest?.authority?.canonical === 'system-graph'
    && manifest?.authority?.graph_path === '.omd/system/graph.json'
    && manifest?.authority?.projection_path === 'DESIGN.md'
    && manifest?.artifacts?.design_md?.path === 'DESIGN.md'
    && manifest?.artifacts?.design_md?.sha256 === designSha
    && manifest?.artifacts?.graph?.path === '.omd/system/graph.json'
    && manifest?.artifacts?.graph?.sha256 === graphSha
    && validExtensionKeys(manifest?.extensions);
  if (!manifestValid) invalidate('bound_system_authority', 'manifest-authority-invalid');

  const graphSectionsValid = coreSections.every((section) => isPlainObject(graph?.[section.graphKey]));
  const graphValid = graph?.$schema === CORE_GRAPH_SCHEMA
    && graph?.schema_version === '2.0.0'
    && isPlainObject(graph?.identity)
    && typeof graph?.identity?.name === 'string' && graph.identity.name.trim()
    && ['project-system', 'evidence-backed-reconstruction', 'portable-brief'].includes(graph?.identity?.kind)
    && typeof graph?.identity?.scope === 'string' && graph.identity.scope.trim()
    && graph?.projection?.path === 'DESIGN.md'
    && graph?.projection?.sha256 === designSha
    && graphSectionsValid
    && validExtensionKeys(graph?.extensions);
  if (!graphValid) invalidate('bound_system_authority', 'graph-authority-invalid');
  if (projection.title && graph?.identity?.name && projection.title !== graph.identity.name) {
    invalidate('bound_system_authority', 'projection-title-identity-mismatch');
  }
  if (graphValid && standaloneInspection.sourceValidation.valid) {
    try {
      const projectedGraph = graphFromCoreProjection(designBytes, { inspection: standaloneInspection });
      if (semanticCoreDigest(renderCore(graph)) !== semanticCoreDigest(renderCore(projectedGraph))) {
        invalidate('bound_system_authority', 'graph-projection-semantic-mismatch');
      }
    } catch (error) {
      invalidate('bound_system_authority', `graph-projection-semantic-parse-failed:${error.message}`);
    }
  }
  const receiptObservations = receiptContext.observations ?? validateCoreAdoptionReceipt(receiptContext.receipt, {
    ...receiptContext,
    graph,
  });
  for (const observation of receiptObservations) {
    invalidate('bound_system_authority', observation);
  }

  const tokens = isPlainObject(graph?.foundations?.tokens) ? graph.foundations.tokens : {};
  for (const [id, token] of Object.entries(tokens)) {
    if (!/^[a-z][a-z0-9.-]*$/.test(id) || !isPlainObject(token)
      || typeof token.$type !== 'string' || !token.$type.trim() || !Object.hasOwn(token, '$value')) {
      invalidate('token_reference_closure', `invalid-token:${id}`);
      continue;
    }
    const color = coreColorValue(token);
    if (token.$type === 'color' && !color) invalidate('token_reference_closure', `invalid-color-token:${id}`);
    if (color && !designBytes.toLowerCase().includes(color.toLowerCase())) {
      invalidate('implementation_contract_complete', `color-token-not-declared-in-design-md:${id}`);
    }
  }

  const contrastPairs = Array.isArray(graph?.foundations?.contrast_pairs) ? graph.foundations.contrast_pairs : [];
  if (contrastPairs.length === 0) invalidate('contrast', 'contrast-pairs-required');
  for (const pair of contrastPairs) {
    const foregroundId = normalizeTokenReference(pair?.foreground);
    const backgroundId = normalizeTokenReference(pair?.background);
    const foreground = coreColorValue(tokens[foregroundId]);
    const background = coreColorValue(tokens[backgroundId]);
    if (!foreground || !background) {
      invalidate('token_reference_closure', `unresolved-color-pair:${foregroundId}/${backgroundId}`);
      invalidate('contrast', `unresolved-color-pair:${foregroundId}/${backgroundId}`);
      continue;
    }
    if (typeof pair.minimum_ratio !== 'number' || pair.minimum_ratio < 1 || pair.minimum_ratio > 21) {
      invalidate('contrast', `invalid-min-ratio:${foregroundId}/${backgroundId}`);
      continue;
    }
    const observed = contrastRatio(foreground, background);
    checks.contrast.observations.push({ pair: `${foregroundId}/${backgroundId}`, observed_ratio: Number(observed.toFixed(3)), minimum_ratio: pair.minimum_ratio });
    if (observed + Number.EPSILON < pair.minimum_ratio) invalidate('contrast', `contrast-failed:${foregroundId}/${backgroundId}`);
  }

  const components = graph?.components_states?.components;
  if (!Array.isArray(components) || components.length === 0) invalidate('component_state_coverage', 'component-contract-required');
  const componentIds = new Set();
  for (const component of components ?? []) {
    if (!component?.id || componentIds.has(component.id)
      || !Array.isArray(component.anatomy) || component.anatomy.length === 0
      || !Array.isArray(component.states) || component.states.length === 0
      || typeof component.semantics !== 'string' || !component.semantics.trim()) {
      invalidate('component_state_coverage', `invalid-component:${component?.id || 'missing'}`);
      continue;
    }
    componentIds.add(component.id);
    if (!component.states.includes('default')) invalidate('component_state_coverage', `default-state-missing:${component.id}`);
    const interactionStates = ['hover', 'focus-visible', 'disabled', 'loading', 'error', 'success'];
    if (component.interaction?.kind === 'interactive'
      && component.states.some((state) => interactionStates.includes(state))
      && !component.states.includes('focus-visible')) {
      invalidate('component_state_coverage', `focus-visible-state-missing:${component.id}`);
    }
    for (const reference of component.token_refs ?? []) {
      const id = normalizeTokenReference(reference);
      if (!Object.hasOwn(tokens, id)) invalidate('token_reference_closure', `unresolved-component-token:${component.id}:${reference}`);
    }
  }

  const layout = graph?.layout_platforms;
  if (!Number.isInteger(layout?.minimum_width_px) || layout.minimum_width_px > 320
    || !Number.isInteger(layout?.reflow_zoom_percent) || layout.reflow_zoom_percent < 200
    || !Array.isArray(layout?.rules) || layout.rules.length === 0
    || !Array.isArray(layout?.platforms) || layout.platforms.length === 0) {
    invalidate('responsive_320_200', '320-and-200pct-platform-contract-required');
  }
  const motionDeclared = Object.entries(tokens).some(([id, token]) => /motion|duration|easing|transition|animation/i.test(`${id}:${token?.$type || ''}`))
    || (graph?.foundations?.rules ?? []).some((rule) => /motion|animation|transition/i.test(String(rule)));
  if (motionDeclared && graph?.foundations?.reduced_motion !== true) {
    invalidate('reduced_motion', 'reduced-motion-contract-required-when-motion-exists');
  }

  const roles = graph?.typography_assets?.roles;
  const assets = graph?.typography_assets?.assets;
  if (!Array.isArray(roles) || roles.length === 0 || !Array.isArray(assets)
    || !Array.isArray(graph?.typography_assets?.rules) || graph.typography_assets.rules.length === 0) {
    invalidate('implementation_contract_complete', 'typography-assets-contract-required');
  }
  for (const asset of assets ?? []) {
    if (!asset?.id || !['font', 'logo', 'icon', 'image', 'illustration', 'video', 'other'].includes(asset.kind)
      || !['project-owned', 'official', 'user-provided', 'licensed-sourced', 'generated-original', 'unresolved'].includes(asset.source_status)
      || !['verified', 'not-required', 'unresolved'].includes(asset.license_status)
      || (asset.source_status !== 'unresolved' && asset.license_status === 'unresolved')
      || (asset.source_status === 'unresolved' && Object.hasOwn(asset, 'source'))) {
      invalidate('assets_fonts_licenses', `asset-authority-invalid:${asset?.id || 'missing'}`);
    }
  }

  if (!Array.isArray(graph?.experience?.primary_tasks) || graph.experience.primary_tasks.length === 0
    || !Array.isArray(graph?.experience?.design_direction) || graph.experience.design_direction.length === 0
    || !Array.isArray(graph?.content_locales?.voice) || graph.content_locales.voice.length === 0
    || !Array.isArray(graph?.content_locales?.locales) || graph.content_locales.locales.length === 0
    || graph?.governance?.unknown_policy !== 'absent-at-smallest-unresolved-boundary') {
    invalidate('implementation_contract_complete', 'core-semantic-contract-incomplete');
  }

  const decisions = Array.isArray(graph?.governance?.decisions) ? graph.governance.decisions : [];
  const normalizedDecisionPaths = new Set();
  const unresolvedPointers = [];
  for (const decision of decisions) {
    if (!decision?.path || !sourceClasses.has(decision.source_class) || !Array.isArray(decision.evidence)) {
      invalidate('unknown_absence', `governance-decision-invalid:${decision?.path || 'missing'}`);
    }
    if (decision?.source_class === 'unresolved' && Object.hasOwn(decision, 'value')) {
      invalidate('unknown_absence', `unresolved-value-promoted:${decision.path}`);
    }
    const resolved = resolveDecisionPath(graph, decision?.path);
    if (!resolved.valid) {
      invalidate('unknown_absence', `governance-decision-path-${resolved.reason}:${decision?.path || 'missing'}`);
      continue;
    }
    if (normalizedDecisionPaths.has(resolved.pointer)) {
      invalidate('unknown_absence', `governance-decision-path-duplicate:${resolved.pointer}`);
      continue;
    }
    normalizedDecisionPaths.add(resolved.pointer);
    if (decision.source_class === 'unresolved') {
      if (resolved.exists) invalidate('unknown_absence', `unresolved-path-coexists-with-value:${resolved.pointer}`);
      else unresolvedPointers.push(resolved.pointer);
    } else {
      if (!resolved.exists) invalidate('unknown_absence', `resolved-decision-path-absent:${resolved.pointer}`);
      if (Object.hasOwn(decision, 'value') && resolved.exists && JSON.stringify(decision.value) !== JSON.stringify(resolved.value)) {
        invalidate('unknown_absence', `governance-decision-value-drift:${resolved.pointer}`);
      }
    }
  }

  const consumedPointers = [];
  for (const pair of contrastPairs) {
    for (const reference of [pair?.foreground, pair?.background]) {
      const id = normalizeTokenReference(reference);
      if (id) consumedPointers.push(`/foundations/tokens/${encodePointerSegment(id)}`);
    }
  }
  for (const [componentIndex, component] of (components ?? []).entries()) {
    consumedPointers.push(`/components_states/components/${componentIndex}`);
    for (const reference of component?.token_refs ?? []) {
      const id = normalizeTokenReference(reference);
      if (id) consumedPointers.push(`/foundations/tokens/${encodePointerSegment(id)}`);
    }
  }
  for (const unresolved of unresolvedPointers) {
    for (const consumed of consumedPointers) {
      if (pointerOverlaps(unresolved, consumed)) {
        invalidate('unknown_absence', `unresolved-path-consumed:${unresolved}:${consumed}`);
        invalidate('token_reference_closure', `unresolved-authority-consumed:${unresolved}:${consumed}`);
      }
    }
  }

  const migration = graph?.extensions?.['dev.oh-my-design.migration'];
  if (migration !== undefined) {
    const preservation = migration?.preservation ?? migration;
    const dropped = preservation?.dropped ?? preservation?.droppedSegments ?? preservation?.dropped_segments;
    const preserved = preservation?.opaquePreserved ?? preservation?.opaque_preserved ?? preservation?.roundtrip_equal;
    if (dropped !== 0 || preserved !== true) {
      invalidate('opaque_extension_preservation', 'migration-extension-not-lossless');
    }
    if (!Array.isArray(migration.original_segments) || !isSha(migration.source_sha256)) {
      invalidate('opaque_extension_preservation', 'migration-source-ledger-missing');
    } else {
      for (const segment of migration.original_segments) {
        if (!segment?.id || typeof segment.content !== 'string' || !isSha(segment.sha256)
          || crypto.createHash('sha256').update(segment.content).digest('hex') !== segment.sha256) {
          invalidate('opaque_extension_preservation', `migration-segment-invalid:${segment?.id || 'missing'}`);
        }
      }
      const reconstructed = migration.original_segments.map((segment) => segment.content).join('');
      if (crypto.createHash('sha256').update(reconstructed).digest('hex') !== migration.source_sha256) {
        invalidate('opaque_extension_preservation', 'migration-source-reconstruction-mismatch');
      }
    }
  } else {
    checks.opaque_extension_preservation.observations.push('no-migration-extension-required');
  }
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
    const coreAnchor = line.match(/^<!--\s*design-md:section\s+([a-z0-9-]+)\s*-->\s*$/);
    if (coreAnchor) headings.add(coreAnchor[1]);
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
  if (fragment) {
    let decoded;
    try { decoded = decodeURIComponent(fragment).trim(); } catch { return { valid: false, detail: reference }; }
    if (!decoded) return { valid: false, detail: reference };
    if (file === designMdPath) {
      if (!designInspection.headings.has(markdownSlug(decoded))) return { valid: false, detail: reference };
    } else if (path.extname(file).toLowerCase() === '.json') {
      let node;
      try { node = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return { valid: false, detail: reference }; }
      const segments = decoded.replace(/^\//, '').split(/[/.]/).filter(Boolean);
      if (segments.length === 0) return { valid: false, detail: reference };
      for (const segment of segments) {
        if (!node || typeof node !== 'object' || !Object.hasOwn(node, segment)) {
          return { valid: false, detail: reference };
        }
        node = node[segment];
      }
    } else if (['.md', '.mdx'].includes(path.extname(file).toLowerCase())) {
      const bytes = fs.readFileSync(file, 'utf8');
      const headings = inspectDesignMarkdown(bytes).headings;
      const escaped = decoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const metadataId = new RegExp(`^\\s*id:\\s*["']?${escaped}["']?\\s*$`, 'm').test(bytes);
      if (!headings.has(markdownSlug(decoded)) && !metadataId) return { valid: false, detail: reference };
    } else {
      return { valid: false, detail: reference };
    }
  }
  return { valid: true, file };
}

const findings = [];
function fail(code, detail) {
  findings.push({ code, detail });
}

const hasCoreAuthority = [coreManifestPath, coreGraphPath, coreProvenancePath, coreCoveragePath]
  .some((file) => fs.existsSync(file));
const authorityMode = hasCoreAuthority ? 'core-v2-project-system' : 'legacy-run-scoped-v0.1';
const provenancePath = hasCoreAuthority ? coreProvenancePath : legacyProvenancePath;
const coveragePath = hasCoreAuthority ? coreCoveragePath : legacyCoveragePath;
const requiredGroups = hasCoreAuthority ? coreRequiredGroups : legacyRequiredGroups;
const requiredChecks = hasCoreAuthority ? coreRequiredChecks : legacyRequiredChecks;
const authorityFiles = hasCoreAuthority
  ? [designMdPath, decisionPath, coreManifestPath, coreGraphPath, provenancePath, coveragePath]
  : [designMdPath, decisionPath, provenancePath, coveragePath, legacySpecPath];

for (const file of authorityFiles) {
  if (!fs.existsSync(file)) fail('required-file-missing', path.relative(cwd, file));
}

let decision = null;
let manifest = null;
let graph = null;
let provenance = null;
let coverage = null;
let spec = null;
let designSha = null;
let graphSha = null;
let designBytes = null;
let designInspection = null;
let adoptionReceipt = null;
let adoptionReceiptSha = null;
const adoptionReceiptFileObservations = [];
if (hasCoreAuthority) {
  try {
    const receiptStat = fs.lstatSync(coreAdoptionReceiptPath);
    if (receiptStat.isSymbolicLink() || !receiptStat.isFile()) {
      adoptionReceiptFileObservations.push('adoption-receipt-not-regular-file');
    } else {
      const receiptBytes = fs.readFileSync(coreAdoptionReceiptPath, 'utf8');
      adoptionReceipt = JSON.parse(receiptBytes);
      adoptionReceiptSha = sha256Bytes(receiptBytes);
    }
  } catch (error) {
    adoptionReceiptFileObservations.push(
      error?.code === 'ENOENT' ? 'adoption-receipt-missing' : 'adoption-receipt-json-invalid',
    );
  }
}
if (findings.length === 0) {
  try {
    decision = readJson(decisionPath);
    if (hasCoreAuthority) {
      manifest = readJson(coreManifestPath);
      graph = readJson(coreGraphPath);
      graphSha = sha256File(coreGraphPath);
    } else {
      spec = readJson(legacySpecPath);
    }
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
  if (hasCoreAuthority) {
    if (decision.required_system_authority !== REQUIRED_SYSTEM_AUTHORITY) {
      fail('required-system-authority-drift', decision.required_system_authority ?? null);
    }
  } else if (decision.compatibility_epoch !== LEGACY_FIXTURE_EPOCH) {
    fail('legacy-validator-compatibility-epoch-missing', LEGACY_FIXTURE_EPOCH);
  }
}

let computedChecks = null;
if (provenance && coverage && designSha && designInspection && (hasCoreAuthority ? manifest && graph : spec)) {
  if (hasCoreAuthority) {
    for (const error of validateCoreProvenance(provenance)) {
      fail('provenance-schema-invalid', `${error.path}:${error.keyword}`);
    }
    for (const error of validateCoreCoverage(coverage)) {
      fail('coverage-schema-invalid', `${error.path}:${error.keyword}`);
    }
    const receiptContext = {
      receipt: adoptionReceipt,
      fileObservations: adoptionReceiptFileObservations,
      outputs: {
        design_md: { path: 'DESIGN.md', sha256: designSha },
        graph: { path: '.omd/system/graph.json', sha256: graphSha },
        provenance: { path: '.omd/system/provenance.json', sha256: sha256File(provenancePath) },
        coverage: { path: '.omd/system/coverage.json', sha256: sha256File(coveragePath) },
        manifest: { path: '.omd/system/manifest.json', sha256: sha256File(coreManifestPath) },
      },
      graph,
    };
    receiptContext.observations = validateCoreAdoptionReceipt(adoptionReceipt, receiptContext);
    computedChecks = validateCoreSystem(
      manifest,
      graph,
      provenance,
      coverage,
      designSha,
      designBytes,
      graphSha,
      receiptContext,
    );
    for (const observation of receiptContext.observations) {
      fail('adoption-receipt-invalid', observation);
    }
  } else {
    computedChecks = validateLegacySystemSpec(spec, designSha, designBytes);
  }

  if (hasCoreAuthority) {
    if (manifest.artifacts?.provenance?.path !== '.omd/system/provenance.json'
      || manifest.artifacts?.provenance?.sha256 !== sha256File(provenancePath)) {
      fail('manifest-provenance-binding-invalid', manifest.artifacts?.provenance ?? null);
    }
    if (manifest.artifacts?.coverage?.path !== '.omd/system/coverage.json'
      || manifest.artifacts?.coverage?.sha256 !== sha256File(coveragePath)) {
      fail('manifest-coverage-binding-invalid', manifest.artifacts?.coverage ?? null);
    }
    for (const [name, artifact] of [['provenance', provenance], ['coverage', coverage]]) {
      if (artifact.schema_version !== '2.0.0') fail(`${name}-schema-invalid`, artifact.schema_version);
      if (!isSha(artifact.design_md_sha256) || artifact.design_md_sha256 !== designSha) {
        fail(`${name}-design-md-hash-mismatch`, artifact.design_md_sha256);
      }
      if (!isSha(artifact.graph_sha256) || artifact.graph_sha256 !== graphSha) {
        fail(`${name}-graph-hash-mismatch`, artifact.graph_sha256);
      }
    }
    const projection = coreProjectionInspection(designBytes);
    for (const observation of projection.observations) fail('core-projection-invalid', observation);
  } else {
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
  }

  if (!Array.isArray(provenance.decisions) || provenance.decisions.length === 0) {
    fail('provenance-decisions-missing', 'decisions must be non-empty');
  } else {
    const paths = new Set();
    const normalizedPaths = new Set();
    for (const item of provenance.decisions) {
      if (!item || typeof item.path !== 'string' || !item.path.trim() || paths.has(item.path)) {
        fail('provenance-path-invalid', item?.path ?? null);
        continue;
      }
      paths.add(item.path);
      if (!sourceClasses.has(item.source_class)) fail('provenance-source-class-invalid', item.path);
      if (!Array.isArray(item.evidence)) fail('provenance-evidence-invalid', item.path);
      const unresolvedCarriesValue = hasCoreAuthority
        ? Object.hasOwn(item, 'value')
        : item.value !== null && item.value !== undefined;
      if (item.source_class === 'unresolved' && unresolvedCarriesValue) {
        fail('unresolved-value-promoted', item.path);
      }
      if (hasCoreAuthority) {
        const resolved = resolveDecisionPath(graph, item.path);
        if (!resolved.valid) {
          fail(`provenance-path-${resolved.reason}`, item.path);
        } else if (normalizedPaths.has(resolved.pointer)) {
          fail('provenance-normalized-path-duplicate', resolved.pointer);
        } else {
          normalizedPaths.add(resolved.pointer);
          if (item.source_class === 'unresolved' && resolved.exists) {
            fail('unresolved-path-coexists-with-value', resolved.pointer);
          } else if (item.source_class !== 'unresolved' && !resolved.exists) {
            fail('resolved-provenance-path-absent', resolved.pointer);
          } else if (item.source_class !== 'unresolved' && Object.hasOwn(item, 'value')
            && JSON.stringify(item.value) !== JSON.stringify(resolved.value)) {
            fail('provenance-value-drift', resolved.pointer);
          }
        }
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

  if (!hasCoreAuthority) {
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
      const expectedMethod = hasCoreAuthority ? 'controller-computed-system-graph-v2' : 'controller-computed-system-spec-v1';
      if (!entry || entry.method !== expectedMethod) fail('system-check-method-invalid', check);
      if (entry?.pass !== computedChecks[check].pass) fail('system-check-declaration-drift', check);
      if (!computedChecks[check].pass) fail('system-check-failed', check);
    }
  }
}

const proof = {
  schema_version: '0.2',
  status: findings.length === 0 ? 'passed' : 'failed',
  pass: findings.length === 0,
  authority_mode: authorityMode,
  format: hasCoreAuthority ? 'design-md-core' : 'legacy-autopilot-system',
  format_version: hasCoreAuthority ? '2.0.0' : '0.1',
  profile: hasCoreAuthority ? 'portable-core' : null,
  strategy: decision?.strategy ?? null,
  implementation_owner: decision?.implementation_owner ?? null,
  design_md_sha256: designSha,
  provenance_sha256: fs.existsSync(provenancePath) ? sha256File(provenancePath) : null,
  coverage_sha256: fs.existsSync(coveragePath) ? sha256File(coveragePath) : null,
  manifest_sha256: hasCoreAuthority && fs.existsSync(coreManifestPath) ? sha256File(coreManifestPath) : null,
  graph_sha256: hasCoreAuthority && fs.existsSync(coreGraphPath) ? sha256File(coreGraphPath) : null,
  ...(hasCoreAuthority ? { adoption_receipt_sha256: adoptionReceiptSha } : {}),
  spec_sha256: !hasCoreAuthority && fs.existsSync(legacySpecPath) ? sha256File(legacySpecPath) : null,
  system_authority: hasCoreAuthority ? {
    manifest_path: '.omd/system/manifest.json',
    graph_path: '.omd/system/graph.json',
    projection_path: 'DESIGN.md',
    provenance_path: '.omd/system/provenance.json',
    coverage_path: '.omd/system/coverage.json',
    adoption_receipt_path: '.omd/system/adoption-receipt.json',
  } : {
    manifest_path: null,
    graph_path: null,
    projection_path: 'DESIGN.md',
    provenance_path: path.relative(cwd, legacyProvenancePath).split(path.sep).join('/'),
    coverage_path: path.relative(cwd, legacyCoveragePath).split(path.sep).join('/'),
    spec_path: path.relative(cwd, legacySpecPath).split(path.sep).join('/'),
  },
  core_section_ids: hasCoreAuthority ? coreSectionIds : null,
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
