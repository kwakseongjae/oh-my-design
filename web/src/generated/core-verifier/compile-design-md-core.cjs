#!/usr/bin/env node

// Provider-free compiler for adopting a reviewed, authority-neutral System
// Graph draft as the canonical authority behind a DESIGN.md Core v2
// projection. Adoption is intentionally a six-artifact transaction: the
// projection, graph, provenance, coverage, manifest, and generated receipt are
// staged and read back together before a fresh destination is published.

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const {
  DEFAULT_PROJECTION_LOCALE,
  FORMAT_VERSION,
  GRAPH_SCHEMA,
  MANIFEST_SCHEMA,
  MIGRATION_EXTENSION,
  SECTION_ORDER,
  canonicalTarget,
  evaluatePortableCore,
  inspectDesignMd,
  pathsAlias,
  renderCore,
  sha256,
} = require('./design-md-core.cjs');
const {
  validateCoreAdoptionReceipt,
  validateCoreAdoptionReview,
  validateCoreCoverage,
  validateCoreGraph,
  validateCoreManifest,
  validateCoreProvenance,
} = require('./design-md-core-schema.cjs');

const REVIEW_KIND = 'design-md-core-adoption-review';
const ADOPTION_RECEIPT_KIND = 'design-md-core-adoption-receipt';
const ADOPTION_RECEIPT_PATH = '.omd/system/adoption-receipt.json';
const CORE_CHECKS = [
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
const SOURCE_CLASSES = new Set([
  'prompt-fact',
  'repository-fact',
  'verified-reference-inspiration',
  'agent-proposed-greenfield-decision',
  'unresolved',
]);
const HASH_PLACEHOLDER = '0'.repeat(64);

function stableJson(value) {
  if (Array.isArray(value)) return value.map(stableJson);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value).sort().map((key) => [key, stableJson(value[key])]),
  );
}

function jsonBytes(value) {
  return `${JSON.stringify(stableJson(value), null, 2)}\n`;
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function isSha(value) {
  return typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);
}

function existsByLstat(file) {
  try {
    fs.lstatSync(file);
    return true;
  } catch (error) {
    if (error && error.code === 'ENOENT') return false;
    throw error;
  }
}

function findingText(prefix, findings) {
  return findings
    .map((finding) => `${prefix} ${finding.keyword} at ${finding.path}: ${finding.message}`)
    .join('; ');
}

function assertRegularInput(inputFile, label) {
  const absolute = path.resolve(inputFile);
  let stat;
  try {
    stat = fs.lstatSync(absolute);
  } catch (error) {
    if (error && error.code === 'ENOENT') throw new Error(`${label} does not exist: ${absolute}`);
    throw error;
  }
  if (stat.isSymbolicLink() || !stat.isFile()) {
    throw new Error(`${label} must be a regular, non-symlink JSON file: ${absolute}`);
  }
  return absolute;
}

function parseJsonInput(inputFile, label) {
  const absolute = assertRegularInput(inputFile, label);
  const bytes = fs.readFileSync(absolute, 'utf8');
  let value;
  try {
    value = JSON.parse(bytes);
  } catch (error) {
    throw new Error(`${label} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (!isPlainObject(value)) throw new Error(`${label} must contain one JSON object`);
  return { value, bytes, sha256: sha256(bytes), inputFile: absolute };
}

function migrationExtension(graph) {
  const extension = graph?.extensions?.[MIGRATION_EXTENSION];
  return isPlainObject(extension) && Array.isArray(extension.original_segments)
    ? extension
    : null;
}

function normalizeDraftGraph(value) {
  const graph = JSON.parse(JSON.stringify(value));
  const migration = migrationExtension(graph);
  if (graph.projection === undefined) graph.projection = {};
  if (!isPlainObject(graph.projection)) {
    throw new Error('authority-neutral draft graph projection must be an object when present');
  }
  const projectionKeys = Object.keys(graph.projection);
  if (projectionKeys.some((key) => !['path', 'sha256', 'locale'].includes(key))) {
    throw new Error('authority-neutral draft graph projection may contain only path, sha256, and locale');
  }
  if (graph.projection.path !== undefined && graph.projection.path !== 'DESIGN.md') {
    throw new Error('authority-neutral draft graph projection path must be DESIGN.md');
  }
  const claimedHash = graph.projection.sha256;
  const neutralHash = claimedHash === undefined || claimedHash === null
    || claimedHash === '' || claimedHash === HASH_PLACEHOLDER;
  if (!migration && !neutralHash) {
    throw new Error('authority-neutral draft graph must omit projection.sha256 or use the all-zero placeholder');
  }
  if (migration && !neutralHash && !isSha(claimedHash)) {
    throw new Error('migration candidate projection.sha256 must be a SHA-256 value');
  }
  graph.projection = {
    path: 'DESIGN.md',
    sha256: neutralHash ? HASH_PLACEHOLDER : claimedHash,
    locale: graph.projection.locale ?? DEFAULT_PROJECTION_LOCALE,
  };
  return graph;
}

function parseInputGraph(inputFile) {
  const parsed = parseJsonInput(inputFile, 'input graph');
  const graph = normalizeDraftGraph(parsed.value);
  const findings = validateCoreGraph(graph);
  if (findings.length) {
    throw new Error(`input graph failed Core v2 validation: ${findingText('graph schema', findings)}`);
  }
  return { ...parsed, graph };
}

function assertNeutralBinding(sidecar, label) {
  for (const field of ['design_md_sha256', 'graph_sha256']) {
    if (!Object.hasOwn(sidecar, field)) continue;
    const value = sidecar[field];
    if (value !== null && value !== '' && value !== HASH_PLACEHOLDER) {
      throw new Error(`${label}.${field} must be omitted or use the all-zero placeholder; the compiler owns final bindings`);
    }
  }
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
  const walk = (node, offset, segments) => {
    if (offset >= parts.length) {
      candidates.push({ segments, exists: true, value: node });
      return;
    }
    if (Array.isArray(node)) {
      const part = parts[offset];
      if (/^(0|[1-9]\d*)$/.test(part)) {
        const position = Number(part);
        if (position < node.length) walk(node[position], offset + 1, [...segments, part]);
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
  };
  walk(root, 0, []);
  return candidates;
}

function resolveDecisionPath(graph, rawPath) {
  if (typeof rawPath !== 'string' || !rawPath.trim()) return { valid: false, reason: 'empty' };
  const input = rawPath.trim();
  let candidates;
  if (input.startsWith('/')) {
    if (input === '/' || input.endsWith('/') || /~(?![01])/u.test(input)) {
      return { valid: false, reason: 'invalid-json-pointer' };
    }
    const segments = input.slice(1).split('/').map(decodePointerSegment);
    const resolved = resolvePointer(graph, segments);
    candidates = resolved.parentResolved ? [{ segments, exists: resolved.exists, value: resolved.value }] : [];
  } else {
    candidates = dottedPathCandidates(graph, input);
  }
  const unique = new Map(candidates.map((candidate) => [JSON.stringify(candidate.segments), candidate]));
  if (unique.size !== 1) return { valid: false, reason: unique.size ? 'ambiguous' : 'unresolvable' };
  const candidate = [...unique.values()][0];
  return { valid: true, exists: candidate.exists, value: candidate.value };
}

function validateDecisionPaths(decisions, graph, label) {
  if (!Array.isArray(decisions)) return;
  for (const decision of decisions) {
    if (!isPlainObject(decision) || typeof decision.path !== 'string') continue;
    const resolved = resolveDecisionPath(graph, decision.path);
    if (!resolved.valid) throw new Error(`${label} path is ${resolved.reason} at ${decision.path}`);
    if (decision.source_class === 'unresolved' && resolved.exists) {
      throw new Error(`${label} unresolved path coexists with a graph value at ${decision.path}`);
    }
    if (decision.source_class !== 'unresolved' && !resolved.exists) {
      throw new Error(`${label} resolved path is absent from the graph at ${decision.path}`);
    }
    if (decision.source_class !== 'unresolved' && Object.hasOwn(decision, 'value')
      && JSON.stringify(decision.value) !== JSON.stringify(resolved.value)) {
      throw new Error(`${label} value drifts from the graph at ${decision.path}`);
    }
  }
}

function validateProvenanceDraft(provenance, graph) {
  if (provenance.schema_version !== FORMAT_VERSION) {
    throw new Error(`provenance schema_version must be ${FORMAT_VERSION}`);
  }
  assertNeutralBinding(provenance, 'provenance');
  if (!Array.isArray(provenance.decisions) || provenance.decisions.length === 0) {
    throw new Error('provenance.decisions must be a non-empty array');
  }
  const paths = new Set();
  for (const decision of provenance.decisions) {
    if (!isPlainObject(decision) || typeof decision.path !== 'string' || !decision.path.trim()
      || paths.has(decision.path)) {
      throw new Error('provenance decisions require unique, non-empty paths');
    }
    paths.add(decision.path);
    if (!SOURCE_CLASSES.has(decision.source_class)) {
      throw new Error(`provenance source_class is invalid at ${decision.path}`);
    }
    if (!Array.isArray(decision.evidence)) {
      throw new Error(`provenance evidence must be an array at ${decision.path}`);
    }
    if (decision.source_class === 'unresolved' && Object.hasOwn(decision, 'value')) {
      throw new Error(`unresolved provenance must not carry a value at ${decision.path}`);
    }
    if (decision.source_class !== 'unresolved' && decision.evidence.length === 0) {
      throw new Error(`resolved provenance requires evidence at ${decision.path}`);
    }
  }
  validateDecisionPaths(provenance.decisions, graph, 'provenance decision');
  validateDecisionPaths(graph.governance?.decisions, graph, 'graph governance decision');
}

function validateCoverageDraft(coverage) {
  if (coverage.schema_version !== FORMAT_VERSION) {
    throw new Error(`coverage schema_version must be ${FORMAT_VERSION}`);
  }
  assertNeutralBinding(coverage, 'coverage');
  if (!isPlainObject(coverage.groups)) throw new Error('coverage.groups must be an object');
  for (const group of SECTION_ORDER) {
    const entry = coverage.groups[group];
    if (!isPlainObject(entry) || !['covered', 'not-applicable'].includes(entry.status)
      || !Array.isArray(entry.evidence) || entry.evidence.length === 0) {
      throw new Error(`coverage group ${group} must declare status and non-empty evidence`);
    }
    if (entry.status === 'not-applicable' && (typeof entry.reason !== 'string' || !entry.reason.trim())) {
      throw new Error(`coverage group ${group} requires a not-applicable reason`);
    }
  }
  if (!isPlainObject(coverage.checks)) throw new Error('coverage.checks must be an object');
  for (const check of CORE_CHECKS) {
    const entry = coverage.checks[check];
    if (!isPlainObject(entry) || typeof entry.pass !== 'boolean'
      || entry.method !== 'controller-computed-system-graph-v2') {
      throw new Error(`coverage check ${check} must use controller-computed-system-graph-v2`);
    }
  }
}

function validateReviewReceipt(review, inputs, migrationReview = null) {
  const validateSchema = () => {
    const schemaFindings = validateCoreAdoptionReview(review);
    if (schemaFindings.length) {
      throw new Error(`review receipt failed Core v2 schema validation: ${findingText('adoption review schema', schemaFindings)}`);
    }
  };
  if (review.schema_version !== FORMAT_VERSION || review.kind !== REVIEW_KIND
    || review.decision !== 'approved' || review.authority_transition_approved !== true) {
    throw new Error('review receipt must explicitly approve the Core v2 authority transition');
  }
  if (!isPlainObject(review.reviewer) || review.reviewer.role !== 'project-owner'
    || typeof review.reviewer.identifier !== 'string' || !review.reviewer.identifier.trim()) {
    throw new Error('review receipt requires an identified project-owner reviewer');
  }
  if (!isPlainObject(review.inputs)
    || review.inputs.graph_sha256 !== inputs.graph.sha256
    || review.inputs.provenance_sha256 !== inputs.provenance.sha256
    || review.inputs.coverage_sha256 !== inputs.coverage.sha256) {
    throw new Error('review receipt input hashes do not match the exact graph/provenance/coverage bytes');
  }
  // Re-open and independently verify the prepared review bundle. A receipt
  // object alone is never sufficient: the compiler must reproduce the exact
  // candidate preview and every request artifact binding itself.
  const requestPath = path.join(path.dirname(inputs.graph.inputFile), 'review-request.json');
  const { verifyReviewRequest } = require('./prepare-design-md-core-review.cjs');
  const prepared = verifyReviewRequest(requestPath);
  if (prepared.parsed.sha256 !== review.inputs.review_request_sha256
    || prepared.parsed.sha256 !== review.review_request?.sha256
    || review.review_request?.path !== 'review-request.json'
    || review.review_request?.status_reviewed !== 'review-required'
    || prepared.candidate.candidateGraphSha256 !== review.inputs.normalized_candidate_graph_sha256
    || prepared.candidate.candidateGraphSha256 !== review.candidate?.normalized_graph_sha256
    || prepared.candidate.designMdSha256 !== review.inputs.candidate_design_md_sha256
    || prepared.candidate.designMdSha256 !== review.candidate?.design_md_sha256
    || review.candidate?.exact_preview_reviewed !== true
    || prepared.graph.sha256 !== inputs.graph.sha256
    || prepared.provenance.sha256 !== inputs.provenance.sha256
    || prepared.coverage.sha256 !== inputs.coverage.sha256
    || Boolean(prepared.migrationReview) !== Boolean(migrationReview)
    || (migrationReview && prepared.migrationReport.sha256 !== migrationReview.report.sha256)) {
    throw new Error('review receipt is not bound to the independently verified prepared request and exact candidate artifacts');
  }
  if (!migrationReview) {
    if (Object.hasOwn(review.inputs, 'migration_report_sha256') || review.migration_review !== undefined) {
      throw new Error('non-migration review receipt must not claim a migration report');
    }
    validateSchema();
    return;
  }
  if (review.inputs.migration_report_sha256 !== migrationReview.report.sha256) {
    throw new Error('review receipt migration report hash does not match the exact report bytes');
  }
  const approval = review.migration_review;
  if (!isPlainObject(approval)
    || approval.source_sha256 !== migrationReview.sourceSha256
    || approval.candidate_graph_sha256 !== migrationReview.candidateGraphSha256
    || approval.candidate_design_md_sha256 !== migrationReview.candidateDesignMdSha256
    || approval.dropped_segments !== 0
    || approval.source_reconstruction_equal !== true
    || approval.unsupported_claims_reviewed !== true
    || approval.unsupported_claims_approved !== true) {
    throw new Error('review receipt must explicitly approve the exact lossless migration candidate and unsupported-claim review');
  }
  validateSchema();
}

function validateMigrationInputs(graphInput, reportInput) {
  const extension = migrationExtension(graphInput.graph);
  if (!extension) return null;
  if (!reportInput) throw new Error('--migration-report <json> is required for a migration candidate');
  if (!isSha(extension.source_sha256)) throw new Error('migration ledger source_sha256 is invalid');
  const reconstructed = extension.original_segments.map((segment, index) => {
    if (!isPlainObject(segment) || typeof segment.content !== 'string' || !isSha(segment.sha256)
      || sha256(segment.content) !== segment.sha256) {
      throw new Error(`migration original segment ${index} has invalid or changed opaque bytes`);
    }
    return segment.content;
  }).join('');
  if (sha256(reconstructed) !== extension.source_sha256) {
    throw new Error('migration original segment ledger does not reconstruct the source hash');
  }
  const candidateDesignMd = renderCore(graphInput.graph);
  const candidateDesignMdSha256 = sha256(candidateDesignMd);
  const report = reportInput.value;
  if (report.schema_version !== FORMAT_VERSION || report.status !== 'pass'
    || report.input?.sha256 !== extension.source_sha256
    || report.output?.graph_sha256 !== graphInput.sha256
    || report.output?.design_md_sha256 !== candidateDesignMdSha256) {
    throw new Error('migration report does not bind the exact source, candidate graph, and candidate DESIGN.md hashes');
  }
  if (report.dropped_segments !== 0 || !Array.isArray(report.dropped) || report.dropped.length !== 0
    || report.source_reconstruction_equal !== true || report.opaque_extension_preserved !== true
    || report.unsupported_claims_review_required !== true
    || report.unsupported_claims_promoted !== null
    || report.synthetic_product_values_added !== 0
    || report.authoritative_adoption_ready !== false) {
    throw new Error('migration report must prove dropped=0, source reconstruction, opaque preservation, and pending unsupported-claim review');
  }
  return {
    extension: JSON.parse(JSON.stringify(extension)),
    report: reportInput,
    sourceSha256: extension.source_sha256,
    candidateGraphSha256: graphInput.sha256,
    candidateDesignMdSha256,
  };
}

function removeMigrationObservation(graph) {
  const compiled = JSON.parse(JSON.stringify(graph));
  const migration = compiled.extensions?.[MIGRATION_EXTENSION];
  if (isPlainObject(migration)) delete migration.projection_observation_graph_sha256;
  return compiled;
}

function bindSidecar(sidecar, designMdSha256, graphSha256) {
  return stableJson({
    ...JSON.parse(JSON.stringify(sidecar)),
    design_md_sha256: designMdSha256,
    graph_sha256: graphSha256,
  });
}

function createManifest(designMd, graphBytes, provenanceBytes, coverageBytes) {
  return {
    $schema: MANIFEST_SCHEMA,
    schema_version: FORMAT_VERSION,
    format: 'design-md-core',
    format_version: FORMAT_VERSION,
    profile: 'portable-core',
    section_order: SECTION_ORDER,
    authority: {
      canonical: 'system-graph',
      graph_path: '.omd/system/graph.json',
      projection_path: 'DESIGN.md',
    },
    artifacts: {
      design_md: { path: 'DESIGN.md', sha256: sha256(designMd) },
      graph: { path: '.omd/system/graph.json', sha256: sha256(graphBytes) },
      provenance: { path: '.omd/system/provenance.json', sha256: sha256(provenanceBytes) },
      coverage: { path: '.omd/system/coverage.json', sha256: sha256(coverageBytes) },
    },
  };
}

function createAdoptionReceipt(context, outputs, manifestBytes) {
  const migration = context.migrationReview;
  return {
    schema_version: FORMAT_VERSION,
    kind: ADOPTION_RECEIPT_KIND,
    status: 'adopted',
    authority: 'system-graph',
    review: {
      receipt_sha256: context.review.sha256,
      reviewer: context.review.value.reviewer,
      authority_transition_approved: true,
    },
    inputs: {
      graph_sha256: context.graph.sha256,
      provenance_sha256: context.provenance.sha256,
      coverage_sha256: context.coverage.sha256,
      ...(migration ? { migration_report_sha256: migration.report.sha256 } : {}),
    },
    outputs: {
      design_md: { path: 'DESIGN.md', sha256: sha256(outputs.designMd) },
      graph: { path: '.omd/system/graph.json', sha256: sha256(outputs.graphBytes) },
      provenance: { path: '.omd/system/provenance.json', sha256: sha256(outputs.provenanceBytes) },
      coverage: { path: '.omd/system/coverage.json', sha256: sha256(outputs.coverageBytes) },
      manifest: { path: '.omd/system/manifest.json', sha256: sha256(manifestBytes) },
    },
    ...(migration ? {
      migration: {
        source_sha256: migration.sourceSha256,
        candidate_graph_sha256: migration.candidateGraphSha256,
        candidate_design_md_sha256: migration.candidateDesignMdSha256,
        preserved_extension_sha256: sha256(jsonBytes(outputs.graph.extensions[MIGRATION_EXTENSION])),
        observation_fast_path_disabled: true,
        dropped_segments: 0,
        source_reconstruction_equal: true,
        unsupported_claims_reviewed: true,
        unsupported_claims_approved: true,
      },
    } : {}),
  };
}

function validateMigrationLedger(graph, receipt, errors) {
  const extension = migrationExtension(graph);
  if (!receipt.migration) {
    if (extension) errors.push('adoption receipt is missing migration preservation evidence');
    return;
  }
  if (!extension) {
    errors.push('adoption receipt claims migration evidence but the graph ledger is missing');
    return;
  }
  if (Object.hasOwn(extension, 'projection_observation_graph_sha256')) {
    errors.push('migration exact-source observation fast path must be disabled after adoption');
  }
  let reconstructed = '';
  for (const [index, segment] of extension.original_segments.entries()) {
    if (!isPlainObject(segment) || typeof segment.content !== 'string'
      || !isSha(segment.sha256) || sha256(segment.content) !== segment.sha256) {
      errors.push(`migration opaque segment hash mismatch at ${index}`);
      continue;
    }
    reconstructed += segment.content;
  }
  if (sha256(reconstructed) !== extension.source_sha256
    || receipt.migration.source_sha256 !== extension.source_sha256
    || receipt.migration.source_reconstruction_equal !== true
    || receipt.migration.dropped_segments !== 0
    || receipt.migration.observation_fast_path_disabled !== true
    || receipt.migration.unsupported_claims_reviewed !== true
    || receipt.migration.unsupported_claims_approved !== true
    || receipt.migration.preserved_extension_sha256 !== sha256(jsonBytes(extension))) {
    errors.push('migration adoption receipt does not match the preserved lossless ledger');
  }
}

function validateAdoptedPackage(pkg) {
  const errors = [];
  const graphFindings = validateCoreGraph(pkg.graph);
  const manifestFindings = validateCoreManifest(pkg.manifest);
  const provenanceFindings = validateCoreProvenance(pkg.provenance);
  const coverageFindings = validateCoreCoverage(pkg.coverage);
  const adoptionReceiptFindings = validateCoreAdoptionReceipt(pkg.adoptionReceipt);
  if (graphFindings.length) errors.push(findingText('graph schema', graphFindings));
  if (manifestFindings.length) errors.push(findingText('manifest schema', manifestFindings));
  if (provenanceFindings.length) errors.push(findingText('provenance schema', provenanceFindings));
  if (coverageFindings.length) errors.push(findingText('coverage schema', coverageFindings));
  if (adoptionReceiptFindings.length) {
    errors.push(findingText('adoption receipt schema', adoptionReceiptFindings));
  }

  const inspection = inspectDesignMd(pkg.designMd);
  if (!inspection.sourceValidation.valid) {
    errors.push(`DESIGN.md structural validation failed: ${inspection.sourceValidation.errors.join('; ')}`);
  }
  const conformance = evaluatePortableCore(pkg.designMd, { inspection, graph: pkg.graph });
  if (!conformance.portable_core) {
    errors.push(`Portable Core declaration conformance failed: ${conformance.reasons.map((reason) => reason.code).join(', ')}`);
  }
  if (pkg.graph?.$schema !== GRAPH_SCHEMA) errors.push('graph schema identity is invalid');
  if (pkg.graph?.projection?.path !== 'DESIGN.md'
    || pkg.graph?.projection?.sha256 !== sha256(pkg.designMd)) {
    errors.push('graph projection binding does not match DESIGN.md');
  }
  if (renderCore(pkg.graph) !== pkg.designMd) {
    errors.push('DESIGN.md is not the exact canonical rendering of the adopted graph');
  }

  const graphBytes = pkg.graphBytes ?? jsonBytes(pkg.graph);
  const provenanceBytes = pkg.provenanceBytes ?? jsonBytes(pkg.provenance);
  const coverageBytes = pkg.coverageBytes ?? jsonBytes(pkg.coverage);
  const manifestBytes = pkg.manifestBytes ?? jsonBytes(pkg.manifest);
  const expectedBindings = [
    ['design_md', 'DESIGN.md', sha256(pkg.designMd)],
    ['graph', '.omd/system/graph.json', sha256(graphBytes)],
    ['provenance', '.omd/system/provenance.json', sha256(provenanceBytes)],
    ['coverage', '.omd/system/coverage.json', sha256(coverageBytes)],
  ];
  if (pkg.manifest?.profile !== 'portable-core'
    || pkg.manifest?.authority?.canonical !== 'system-graph'
    || pkg.manifest?.authority?.graph_path !== '.omd/system/graph.json'
    || pkg.manifest?.authority?.projection_path !== 'DESIGN.md') {
    errors.push('manifest does not declare adopted system-graph authority');
  }
  for (const [key, artifactPath, artifactHash] of expectedBindings) {
    if (pkg.manifest?.artifacts?.[key]?.path !== artifactPath
      || pkg.manifest?.artifacts?.[key]?.sha256 !== artifactHash) {
      errors.push(`manifest ${key} binding is invalid`);
    }
  }
  for (const [label, artifact] of [['provenance', pkg.provenance], ['coverage', pkg.coverage]]) {
    if (artifact?.schema_version !== FORMAT_VERSION
      || artifact?.design_md_sha256 !== sha256(pkg.designMd)
      || artifact?.graph_sha256 !== sha256(graphBytes)) {
      errors.push(`${label} final graph/DESIGN.md binding is invalid`);
    }
  }

  const receipt = pkg.adoptionReceipt;
  if (receipt?.schema_version !== FORMAT_VERSION || receipt?.kind !== ADOPTION_RECEIPT_KIND
    || receipt?.status !== 'adopted' || receipt?.authority !== 'system-graph') {
    errors.push('adoption receipt identity is invalid');
  }
  const receiptOutputs = [
    ['design_md', 'DESIGN.md', sha256(pkg.designMd)],
    ['graph', '.omd/system/graph.json', sha256(graphBytes)],
    ['provenance', '.omd/system/provenance.json', sha256(provenanceBytes)],
    ['coverage', '.omd/system/coverage.json', sha256(coverageBytes)],
    ['manifest', '.omd/system/manifest.json', sha256(manifestBytes)],
  ];
  for (const [key, artifactPath, artifactHash] of receiptOutputs) {
    if (receipt?.outputs?.[key]?.path !== artifactPath
      || receipt?.outputs?.[key]?.sha256 !== artifactHash) {
      errors.push(`adoption receipt ${key} binding is invalid`);
    }
  }
  if (!isSha(receipt?.review?.receipt_sha256)
    || receipt?.review?.authority_transition_approved !== true
    || receipt?.review?.reviewer?.role !== 'project-owner') {
    errors.push('adoption receipt review authority is invalid');
  }
  validateMigrationLedger(pkg.graph, receipt ?? {}, errors);
  return { valid: errors.length === 0, errors, conformance };
}

function compileAdoptedCore(graph, options = {}) {
  const inputFindings = validateCoreGraph(graph);
  if (inputFindings.length) {
    throw new Error(`input graph failed Core v2 validation: ${findingText('graph schema', inputFindings)}`);
  }
  if (!options.provenance || !options.coverage || !options.context) {
    throw new Error('provenance, coverage, and reviewed adoption context are required');
  }

  // Preserve the complete migration extension, including every segment and
  // opaque source byte. Only the exact-source observation key is removed so
  // a stale source projection can no longer override canonical graph render.
  const compiledGraph = stableJson(removeMigrationObservation(graph));
  let designMd = renderCore(compiledGraph);
  compiledGraph.projection = {
    path: 'DESIGN.md',
    sha256: sha256(designMd),
    locale: compiledGraph.projection?.locale ?? DEFAULT_PROJECTION_LOCALE,
  };
  const reboundDesignMd = renderCore(compiledGraph);
  if (reboundDesignMd !== designMd) {
    throw new Error('graph projection changed after SHA binding; canonical compilation is not stable');
  }
  designMd = reboundDesignMd;

  const graphBytes = jsonBytes(compiledGraph);
  const graphSha256 = sha256(graphBytes);
  const designMdSha256 = sha256(designMd);
  const provenance = bindSidecar(options.provenance, designMdSha256, graphSha256);
  const coverage = bindSidecar(options.coverage, designMdSha256, graphSha256);
  const provenanceBytes = jsonBytes(provenance);
  const coverageBytes = jsonBytes(coverage);
  const manifest = createManifest(designMd, graphBytes, provenanceBytes, coverageBytes);
  const manifestBytes = jsonBytes(manifest);
  const outputs = {
    designMd,
    graph: compiledGraph,
    graphBytes,
    provenance,
    provenanceBytes,
    coverage,
    coverageBytes,
  };
  const adoptionReceipt = createAdoptionReceipt(options.context, outputs, manifestBytes);
  const adoptionReceiptBytes = jsonBytes(adoptionReceipt);
  const result = {
    ...outputs,
    manifest,
    manifestBytes,
    adoptionReceipt,
    adoptionReceiptBytes,
    artifacts: {
      'DESIGN.md': designMd,
      '.omd/system/graph.json': graphBytes,
      '.omd/system/provenance.json': provenanceBytes,
      '.omd/system/coverage.json': coverageBytes,
      '.omd/system/manifest.json': manifestBytes,
      [ADOPTION_RECEIPT_PATH]: adoptionReceiptBytes,
    },
  };
  const validation = validateAdoptedPackage(result);
  if (!validation.valid) {
    throw new Error(`refusing to adopt a non-conformant Core package: ${validation.errors.join('; ')}`);
  }
  return { ...result, conformance: validation.conformance };
}

function readbackPackage(stageDir) {
  const files = {
    designMd: path.join(stageDir, 'DESIGN.md'),
    graph: path.join(stageDir, '.omd/system/graph.json'),
    provenance: path.join(stageDir, '.omd/system/provenance.json'),
    coverage: path.join(stageDir, '.omd/system/coverage.json'),
    manifest: path.join(stageDir, '.omd/system/manifest.json'),
    adoptionReceipt: path.join(stageDir, ADOPTION_RECEIPT_PATH),
  };
  for (const [label, file] of Object.entries(files)) {
    const stat = fs.lstatSync(file);
    if (stat.isSymbolicLink() || !stat.isFile()) {
      throw new Error(`compiled ${label} artifact is not a regular file`);
    }
  }
  const graphBytes = fs.readFileSync(files.graph, 'utf8');
  const provenanceBytes = fs.readFileSync(files.provenance, 'utf8');
  const coverageBytes = fs.readFileSync(files.coverage, 'utf8');
  const manifestBytes = fs.readFileSync(files.manifest, 'utf8');
  const adoptionReceiptBytes = fs.readFileSync(files.adoptionReceipt, 'utf8');
  return {
    designMd: fs.readFileSync(files.designMd, 'utf8'),
    graph: JSON.parse(graphBytes),
    graphBytes,
    provenance: JSON.parse(provenanceBytes),
    provenanceBytes,
    coverage: JSON.parse(coverageBytes),
    coverageBytes,
    manifest: JSON.parse(manifestBytes),
    manifestBytes,
    adoptionReceipt: JSON.parse(adoptionReceiptBytes),
    adoptionReceiptBytes,
  };
}

function assertFreshOutput(outDir, inputFiles) {
  const absolute = path.resolve(outDir);
  for (const inputFile of inputFiles) {
    if (canonicalTarget(absolute) === canonicalTarget(inputFile) || pathsAlias(absolute, inputFile)) {
      throw new Error(`output directory must not alias an input artifact: ${absolute}`);
    }
  }
  if (existsByLstat(absolute)) {
    const stat = fs.lstatSync(absolute);
    if (stat.isSymbolicLink()) throw new Error(`output directory must not be a symlink: ${absolute}`);
    throw new Error(`refusing to publish into an existing output directory: ${absolute}`);
  }
  return absolute;
}

function validateExactArtifacts(pkg, directory) {
  const staged = readbackPackage(directory);
  for (const [relative, content] of Object.entries(pkg.artifacts)) {
    if (fs.readFileSync(path.join(directory, relative), 'utf8') !== content) {
      throw new Error(`compiled artifact readback mismatch: ${relative}`);
    }
  }
  const validation = validateAdoptedPackage(staged);
  if (!validation.valid) {
    throw new Error(`compiled package readback validation failed: ${validation.errors.join('; ')}`);
  }
  return staged;
}

function writeAdoptedPackage(pkg, outDir, inputFiles) {
  const safeOutDir = assertFreshOutput(outDir, inputFiles);
  const parent = path.dirname(safeOutDir);
  fs.mkdirSync(parent, { recursive: true });
  const tempDir = path.join(
    parent,
    `.${path.basename(safeOutDir)}.tmp-${process.pid}-${crypto.randomBytes(4).toString('hex')}`,
  );
  fs.mkdirSync(tempDir, { recursive: false });
  let published = false;
  try {
    for (const [relative, content] of Object.entries(pkg.artifacts)) {
      const target = path.join(tempDir, relative);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, content, { encoding: 'utf8', flag: 'wx' });
    }
    validateExactArtifacts(pkg, tempDir);
    if (existsByLstat(safeOutDir)) {
      throw new Error(`output directory appeared before publish: ${safeOutDir}`);
    }
    fs.renameSync(tempDir, safeOutDir);
    published = true;
    validateExactArtifacts(pkg, safeOutDir);
  } catch (error) {
    if (published && existsByLstat(safeOutDir)) fs.rmSync(safeOutDir, { recursive: true, force: true });
    if (existsByLstat(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
    throw error;
  }
  return safeOutDir;
}

function requiredValue(argv, index, flag) {
  const value = argv[index + 1];
  if (!value || value.startsWith('-')) throw new Error(`${flag} <json> requires a value`);
  return value;
}

function parseArgs(argv) {
  const options = {
    input: null,
    outDir: null,
    provenance: null,
    coverage: null,
    reviewReceipt: null,
    migrationReport: null,
    adopt: false,
    help: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === '--out-dir') {
      options.outDir = requiredValue(argv, index, '--out-dir');
      index += 1;
    } else if (value === '--provenance') {
      options.provenance = requiredValue(argv, index, '--provenance');
      index += 1;
    } else if (value === '--coverage') {
      options.coverage = requiredValue(argv, index, '--coverage');
      index += 1;
    } else if (value === '--review-receipt') {
      options.reviewReceipt = requiredValue(argv, index, '--review-receipt');
      index += 1;
    } else if (value === '--migration-report') {
      options.migrationReport = requiredValue(argv, index, '--migration-report');
      index += 1;
    } else if (value === '--adopt') {
      options.adopt = true;
    } else if (value === '--help' || value === '-h') {
      options.help = true;
    } else if (value.startsWith('-')) {
      throw new Error(`unknown option: ${value}`);
    } else if (!options.input) {
      options.input = value;
    } else {
      throw new Error(`unexpected argument: ${value}`);
    }
  }
  return options;
}

function help() {
  return [
    'Usage: compile-design-md-core <draft-graph.json> --provenance <json> --coverage <json> --review-receipt <json> --out-dir <fresh-dir> --adopt [--migration-report <json>]',
    '',
    'Compiles a reviewed authority-neutral System Graph draft into one adopted,',
    'hash-bound Portable Core package. The compiler creates projection.sha256 and',
    'binds provenance/coverage to the final DESIGN.md and graph bytes.',
    '',
    'All input JSON files must be regular non-symlink files. A migration candidate',
    'also requires its exact migration report and owner review of source/candidate',
    'hashes, dropped=0, source reconstruction, and unsupported claims.',
    'The compiler independently reopens review-request.json beside input-graph.json',
    'and reproduces every request, artifact, and candidate preview binding.',
    '',
    'The fresh output directory is a six-artifact transaction published atomically',
    'with DESIGN.md, graph,',
    'provenance, coverage, manifest, and an adoption receipt. --adopt and an',
    'identified project-owner review receipt are both required.',
    '',
    'This provider-free gate verifies transaction integrity and declaration',
    'conformance. It does not independently prove factual accuracy, licenses,',
    'implementation conformance, or visual quality.',
  ].join('\n');
}

function run(argv = process.argv.slice(2)) {
  try {
    const options = parseArgs(argv);
    if (options.help) {
      console.log(help());
      return 0;
    }
    if (!options.input) throw new Error('an input draft graph.json is required');
    if (!options.provenance) throw new Error('--provenance <json> is required');
    if (!options.coverage) throw new Error('--coverage <json> is required');
    if (!options.reviewReceipt) throw new Error('--review-receipt <json> is required');
    if (!options.outDir) throw new Error('--out-dir <fresh-dir> is required');
    if (!options.adopt) throw new Error('--adopt is required to declare system-graph authority');

    const graph = parseInputGraph(options.input);
    const provenance = parseJsonInput(options.provenance, 'provenance');
    const coverage = parseJsonInput(options.coverage, 'coverage');
    const review = parseJsonInput(options.reviewReceipt, 'review receipt');
    const migrationReport = options.migrationReport
      ? parseJsonInput(options.migrationReport, 'migration report')
      : null;
    validateProvenanceDraft(provenance.value, graph.graph);
    validateCoverageDraft(coverage.value);
    const migrationReview = validateMigrationInputs(graph, migrationReport);
    if (!migrationReview && migrationReport) {
      throw new Error('--migration-report is only valid for a graph with a migration segment ledger');
    }
    const context = { graph, provenance, coverage, review, migrationReview };
    validateReviewReceipt(review.value, context, migrationReview);
    const pkg = compileAdoptedCore(graph.graph, {
      provenance: provenance.value,
      coverage: coverage.value,
      context,
    });
    const inputFiles = [
      graph.inputFile,
      provenance.inputFile,
      coverage.inputFile,
      review.inputFile,
      migrationReport?.inputFile,
    ].filter(Boolean);
    const output = writeAdoptedPackage(pkg, options.outDir, inputFiles);
    console.log(`Adopted Portable Core package: ${output}`);
    console.log('Declaration conformance and six-artifact transaction integrity passed. Factual accuracy, licenses, implementation conformance, and visual quality require separate proof.');
    return 0;
  } catch (error) {
    console.error(`design-md compile: ${error instanceof Error ? error.message : String(error)}`);
    return 1;
  }
}

module.exports = {
  ADOPTION_RECEIPT_PATH,
  ADOPTION_RECEIPT_KIND,
  REVIEW_KIND,
  bindSidecar,
  compileAdoptedCore,
  createAdoptionReceipt,
  createManifest,
  normalizeDraftGraph,
  parseInputGraph,
  readbackPackage,
  removeMigrationObservation,
  run,
  validateAdoptedPackage,
  validateCoverageDraft,
  validateMigrationInputs,
  validateProvenanceDraft,
  validateReviewReceipt,
  writeAdoptedPackage,
};

// Publish the verifier surface before CLI execution. The review preparer
// imports these functions, while the compiler lazily imports its independent
// bundle verifier during `run`; exporting first keeps that cycle fully defined.
if (require.main === module) process.exitCode = run();
