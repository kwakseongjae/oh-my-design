#!/usr/bin/env node

// Provider-free, non-authoritative review preparation for DESIGN.md Core v2.
// This is deliberately separate from adoption: the first mode publishes an
// exact candidate preview, while the second mode records an identified owner
// decision. Neither mode creates a portable-core manifest or canonical graph.

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const {
  DEFAULT_PROJECTION_LOCALE,
  FORMAT_VERSION,
  renderCore,
  sha256,
} = require('./design-md-core.cjs');
const {
  REVIEW_KIND,
  parseInputGraph,
  removeMigrationObservation,
  validateCoverageDraft,
  validateMigrationInputs,
  validateProvenanceDraft,
} = require('./compile-design-md-core.cjs');
const {
  validateCoreAdoptionReview,
} = require('./design-md-core-schema.cjs');

const REVIEW_REQUEST_KIND = 'design-md-core-review-request';
const REVIEW_REQUEST_PATH = 'review-request.json';
const REVIEW_REQUEST_HASH_PATH = 'review-request.sha256';
const HASH_PLACEHOLDER = '0'.repeat(64);
const REVIEW_ARTIFACT_PATHS = {
  input_graph: 'input-graph.json',
  candidate_graph: 'candidate-graph.json',
  candidate_design_md: 'DESIGN.md',
  provenance: 'provenance.json',
  coverage: 'coverage.json',
  migration_report: 'migration-report.json',
};

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

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

function findingText(prefix, findings) {
  return findings
    .map((finding) => `${prefix} ${finding.keyword} at ${finding.path}: ${finding.message}`)
    .join('; ');
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

function assertRegularFile(file, label) {
  const absolute = path.resolve(file);
  let stat;
  try {
    stat = fs.lstatSync(absolute);
  } catch (error) {
    if (error && error.code === 'ENOENT') throw new Error(`${label} does not exist: ${absolute}`);
    throw error;
  }
  if (stat.isSymbolicLink() || !stat.isFile()) {
    throw new Error(`${label} must be a regular, non-symlink file: ${absolute}`);
  }
  return absolute;
}

function parseJsonInput(file, label) {
  const inputFile = assertRegularFile(file, label);
  const bytes = fs.readFileSync(inputFile, 'utf8');
  let value;
  try {
    value = JSON.parse(bytes);
  } catch (error) {
    throw new Error(`${label} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (!isPlainObject(value)) throw new Error(`${label} must contain one JSON object`);
  return { inputFile, bytes, value, sha256: sha256(bytes) };
}

function candidateFromGraph(graph) {
  const candidateGraph = stableJson(removeMigrationObservation(graph));
  // A review candidate can describe a project system, but it is not the
  // canonical authority until the separate compiler transaction binds this
  // projection. The all-zero value is the schema-valid neutral placeholder.
  candidateGraph.projection = {
    path: 'DESIGN.md',
    sha256: HASH_PLACEHOLDER,
    locale: graph.projection?.locale ?? DEFAULT_PROJECTION_LOCALE,
  };
  const candidateGraphBytes = jsonBytes(candidateGraph);
  const designMd = renderCore(candidateGraph);
  return {
    candidateGraph,
    candidateGraphBytes,
    candidateGraphSha256: sha256(candidateGraphBytes),
    designMd,
    designMdSha256: sha256(designMd),
  };
}

function artifact(pathValue, bytes) {
  return { path: pathValue, sha256: sha256(bytes), bytes: Buffer.byteLength(bytes, 'utf8') };
}

function lossEvidence(graph, migrationReview, candidate) {
  const source = {
    input_graph_sha256: graph.sha256,
    exact_input_bytes_preserved: true,
  };
  if (!migrationReview) return { source, migration: { required: false } };
  return {
    source,
    migration: {
      required: true,
      report_sha256: migrationReview.report.sha256,
      source_sha256: migrationReview.sourceSha256,
      candidate_input_graph_sha256: migrationReview.candidateGraphSha256,
      candidate_input_design_md_sha256: migrationReview.candidateDesignMdSha256,
      adoption_preview_graph_sha256: candidate.candidateGraphSha256,
      adoption_preview_design_md_sha256: candidate.designMdSha256,
      dropped_segments: 0,
      source_reconstruction_equal: true,
      opaque_extension_preserved: true,
      unsupported_claims_review_required: true,
      unsupported_claims_approved: false,
    },
  };
}

function createReviewRequest(context, candidate) {
  const request = {
    schema_version: FORMAT_VERSION,
    kind: REVIEW_REQUEST_KIND,
    status: 'review-required',
    authority: {
      state: 'non-authoritative-candidate',
      canonical: false,
      authority_transition_approved: false,
    },
    artifacts: {
      input_graph: artifact(REVIEW_ARTIFACT_PATHS.input_graph, context.graph.bytes),
      candidate_graph: artifact(REVIEW_ARTIFACT_PATHS.candidate_graph, candidate.candidateGraphBytes),
      candidate_design_md: artifact(REVIEW_ARTIFACT_PATHS.candidate_design_md, candidate.designMd),
      provenance: artifact(REVIEW_ARTIFACT_PATHS.provenance, context.provenance.bytes),
      coverage: artifact(REVIEW_ARTIFACT_PATHS.coverage, context.coverage.bytes),
      ...(context.migrationReport ? {
        migration_report: artifact(REVIEW_ARTIFACT_PATHS.migration_report, context.migrationReport.bytes),
      } : {}),
    },
    inputs: {
      graph_sha256: context.graph.sha256,
      provenance_sha256: context.provenance.sha256,
      coverage_sha256: context.coverage.sha256,
      ...(context.migrationReport ? {
        migration_report_sha256: context.migrationReport.sha256,
      } : {}),
    },
    candidate: {
      normalized_graph_sha256: candidate.candidateGraphSha256,
      design_md_sha256: candidate.designMdSha256,
      projection_binding: 'pending-owner-review-and-compiler-adoption',
    },
    loss_evidence: lossEvidence(context.graph, context.migrationReview, candidate),
    required_decision: {
      reviewer_role: 'project-owner',
      explicit_authority_transition: true,
      review_exact_candidate_preview: true,
      ...(context.migrationReview ? {
        review_unsupported_migration_claims: true,
      } : {}),
    },
  };
  return { request, requestBytes: jsonBytes(request) };
}

function assertFreshPath(target, label) {
  const absolute = path.resolve(target);
  if (existsByLstat(absolute)) {
    const stat = fs.lstatSync(absolute);
    if (stat.isSymbolicLink()) throw new Error(`${label} must not be a symlink: ${absolute}`);
    throw new Error(`${label} must be fresh and must not already exist: ${absolute}`);
  }
  return absolute;
}

function readbackReviewDirectory(directory, expected) {
  for (const [relative, bytes] of Object.entries(expected)) {
    const file = assertRegularFile(path.join(directory, relative), `review artifact ${relative}`);
    if (fs.readFileSync(file, 'utf8') !== bytes) {
      throw new Error(`review artifact readback mismatch: ${relative}`);
    }
  }
}

function writeReviewDirectory(context, candidate, review, outDir) {
  const output = assertFreshPath(outDir, 'review output directory');
  const parent = path.dirname(output);
  fs.mkdirSync(parent, { recursive: true });
  const tempDir = path.join(
    parent,
    `.${path.basename(output)}.tmp-${process.pid}-${crypto.randomBytes(4).toString('hex')}`,
  );
  const requestHashBytes = `${sha256(review.requestBytes)}  ${REVIEW_REQUEST_PATH}\n`;
  const artifacts = {
    [REVIEW_ARTIFACT_PATHS.input_graph]: context.graph.bytes,
    [REVIEW_ARTIFACT_PATHS.candidate_graph]: candidate.candidateGraphBytes,
    [REVIEW_ARTIFACT_PATHS.candidate_design_md]: candidate.designMd,
    [REVIEW_ARTIFACT_PATHS.provenance]: context.provenance.bytes,
    [REVIEW_ARTIFACT_PATHS.coverage]: context.coverage.bytes,
    ...(context.migrationReport ? {
      [REVIEW_ARTIFACT_PATHS.migration_report]: context.migrationReport.bytes,
    } : {}),
    [REVIEW_REQUEST_PATH]: review.requestBytes,
    [REVIEW_REQUEST_HASH_PATH]: requestHashBytes,
  };
  fs.mkdirSync(tempDir, { recursive: false });
  let published = false;
  try {
    for (const [relative, bytes] of Object.entries(artifacts)) {
      fs.writeFileSync(path.join(tempDir, relative), bytes, { encoding: 'utf8', flag: 'wx' });
    }
    readbackReviewDirectory(tempDir, artifacts);
    if (existsByLstat(output)) throw new Error(`review output directory appeared before publish: ${output}`);
    fs.renameSync(tempDir, output);
    published = true;
    readbackReviewDirectory(output, artifacts);
  } catch (error) {
    if (published && existsByLstat(output)) fs.rmSync(output, { recursive: true, force: true });
    if (existsByLstat(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
    throw error;
  }
  return output;
}

function prepareReview(graphFile, provenanceFile, coverageFile, migrationReportFile, outDir) {
  const graph = parseInputGraph(graphFile);
  const provenance = parseJsonInput(provenanceFile, 'provenance draft');
  const coverage = parseJsonInput(coverageFile, 'coverage draft');
  const migrationReport = migrationReportFile
    ? parseJsonInput(migrationReportFile, 'migration report')
    : null;
  validateProvenanceDraft(provenance.value, graph.graph);
  validateCoverageDraft(coverage.value);
  const migrationReview = validateMigrationInputs(graph, migrationReport);
  if (!migrationReview && migrationReport) {
    throw new Error('--migration-report is only valid for a graph with a migration segment ledger');
  }
  const candidate = candidateFromGraph(graph.graph);
  const context = { graph, provenance, coverage, migrationReport, migrationReview };
  const review = createReviewRequest(context, candidate);
  const output = writeReviewDirectory(context, candidate, review, outDir);
  return { output, request: review.request, candidate };
}

function assertRequestArtifact(request, name, expectedPath, bytes) {
  const entry = request.artifacts?.[name];
  if (!isPlainObject(entry) || entry.path !== expectedPath || entry.sha256 !== sha256(bytes)
    || entry.bytes !== Buffer.byteLength(bytes, 'utf8')) {
    throw new Error(`review request ${name} binding is stale or invalid`);
  }
}

function readRequestArtifact(root, request, name, label) {
  const expectedPath = REVIEW_ARTIFACT_PATHS[name];
  const entry = request.artifacts?.[name];
  if (!isPlainObject(entry) || entry.path !== expectedPath) {
    throw new Error(`review request ${name} path is missing or invalid`);
  }
  const file = assertRegularFile(path.join(root, expectedPath), label);
  const bytes = fs.readFileSync(file, 'utf8');
  assertRequestArtifact(request, name, expectedPath, bytes);
  return { file, bytes, sha256: sha256(bytes) };
}

function validateRequestIdentity(request) {
  if (request.schema_version !== FORMAT_VERSION || request.kind !== REVIEW_REQUEST_KIND
    || request.status !== 'review-required') {
    throw new Error('review request identity or status is invalid');
  }
  if (!isPlainObject(request.authority)
    || request.authority.state !== 'non-authoritative-candidate'
    || request.authority.canonical !== false
    || request.authority.authority_transition_approved !== false) {
    throw new Error('review request must remain a non-authoritative candidate');
  }
  if (Object.hasOwn(request, 'profile') || request.authority.canonical === 'system-graph') {
    throw new Error('review request must not declare portable-core or system-graph authority');
  }
}

function verifyRequestHash(requestFile, requestBytes) {
  const hashFile = assertRegularFile(
    path.join(path.dirname(requestFile), REVIEW_REQUEST_HASH_PATH),
    'review request hash',
  );
  const expected = `${sha256(requestBytes)}  ${REVIEW_REQUEST_PATH}\n`;
  if (fs.readFileSync(hashFile, 'utf8') !== expected) {
    throw new Error('review request exact-byte hash is stale or invalid');
  }
}

function verifyReviewRequest(requestFile) {
  const parsed = parseJsonInput(requestFile, 'review request');
  if (path.basename(parsed.inputFile) !== REVIEW_REQUEST_PATH) {
    throw new Error(`review request must retain its exact filename: ${REVIEW_REQUEST_PATH}`);
  }
  verifyRequestHash(parsed.inputFile, parsed.bytes);
  validateRequestIdentity(parsed.value);
  const root = path.dirname(parsed.inputFile);
  const inputGraph = readRequestArtifact(root, parsed.value, 'input_graph', 'review input graph');
  const provenanceInput = readRequestArtifact(root, parsed.value, 'provenance', 'review provenance draft');
  const coverageInput = readRequestArtifact(root, parsed.value, 'coverage', 'review coverage draft');
  const candidateGraphInput = readRequestArtifact(root, parsed.value, 'candidate_graph', 'review candidate graph');
  const candidateDesignInput = readRequestArtifact(root, parsed.value, 'candidate_design_md', 'review candidate DESIGN.md');
  const hasMigration = Object.hasOwn(parsed.value.artifacts ?? {}, 'migration_report');
  const migrationReportInput = hasMigration
    ? readRequestArtifact(root, parsed.value, 'migration_report', 'review migration report')
    : null;

  const graph = parseInputGraph(inputGraph.file);
  const provenance = parseJsonInput(provenanceInput.file, 'review provenance draft');
  const coverage = parseJsonInput(coverageInput.file, 'review coverage draft');
  const migrationReport = migrationReportInput
    ? parseJsonInput(migrationReportInput.file, 'review migration report')
    : null;
  validateProvenanceDraft(provenance.value, graph.graph);
  validateCoverageDraft(coverage.value);
  const migrationReview = validateMigrationInputs(graph, migrationReport);
  if (Boolean(migrationReview) !== hasMigration) {
    throw new Error('review request migration inputs are missing or unexpected');
  }

  const candidate = candidateFromGraph(graph.graph);
  if (candidateGraphInput.bytes !== candidate.candidateGraphBytes
    || candidateDesignInput.bytes !== candidate.designMd) {
    throw new Error('review candidate is stale or differs from the exact compiler rendering');
  }
  const request = parsed.value;
  if (request.inputs?.graph_sha256 !== graph.sha256
    || request.inputs?.provenance_sha256 !== provenance.sha256
    || request.inputs?.coverage_sha256 !== coverage.sha256
    || request.candidate?.normalized_graph_sha256 !== candidate.candidateGraphSha256
    || request.candidate?.design_md_sha256 !== candidate.designMdSha256) {
    throw new Error('review request input or candidate hashes are stale');
  }
  if (migrationReview) {
    if (request.inputs?.migration_report_sha256 !== migrationReport.sha256) {
      throw new Error('review request migration report hash is stale');
    }
    const expectedLoss = lossEvidence(graph, migrationReview, candidate);
    if (JSON.stringify(stableJson(request.loss_evidence)) !== JSON.stringify(stableJson(expectedLoss))) {
      throw new Error('review request migration loss evidence is stale or invalid');
    }
  } else {
    if (Object.hasOwn(request.inputs ?? {}, 'migration_report_sha256')
      || JSON.stringify(stableJson(request.loss_evidence))
        !== JSON.stringify(stableJson(lossEvidence(graph, null, candidate)))) {
      throw new Error('review request direct-draft loss evidence is stale or invalid');
    }
  }
  return { parsed, graph, provenance, coverage, migrationReport, migrationReview, candidate };
}

function createApprovalReceipt(verified, reviewer) {
  const migration = verified.migrationReview;
  return {
    schema_version: FORMAT_VERSION,
    kind: REVIEW_KIND,
    decision: 'approved',
    authority_transition_approved: true,
    reviewer: { role: 'project-owner', identifier: reviewer },
    inputs: {
      graph_sha256: verified.graph.sha256,
      provenance_sha256: verified.provenance.sha256,
      coverage_sha256: verified.coverage.sha256,
      ...(migration ? { migration_report_sha256: verified.migrationReport.sha256 } : {}),
      review_request_sha256: verified.parsed.sha256,
      normalized_candidate_graph_sha256: verified.candidate.candidateGraphSha256,
      candidate_design_md_sha256: verified.candidate.designMdSha256,
    },
    review_request: {
      path: REVIEW_REQUEST_PATH,
      sha256: verified.parsed.sha256,
      status_reviewed: 'review-required',
    },
    candidate: {
      normalized_graph_sha256: verified.candidate.candidateGraphSha256,
      design_md_sha256: verified.candidate.designMdSha256,
      exact_preview_reviewed: true,
    },
    ...(migration ? {
      migration_review: {
        source_sha256: migration.sourceSha256,
        candidate_graph_sha256: migration.candidateGraphSha256,
        candidate_design_md_sha256: migration.candidateDesignMdSha256,
        dropped_segments: 0,
        source_reconstruction_equal: true,
        unsupported_claims_reviewed: true,
        unsupported_claims_approved: true,
      },
    } : {}),
  };
}

function writeFreshReceipt(receipt, outFile) {
  const output = assertFreshPath(outFile, 'approval receipt output');
  const parent = path.dirname(output);
  fs.mkdirSync(parent, { recursive: true });
  const temp = path.join(
    parent,
    `.${path.basename(output)}.tmp-${process.pid}-${crypto.randomBytes(4).toString('hex')}`,
  );
  const bytes = jsonBytes(receipt);
  let published = false;
  try {
    fs.writeFileSync(temp, bytes, { encoding: 'utf8', flag: 'wx' });
    if (fs.readFileSync(assertRegularFile(temp, 'staged approval receipt'), 'utf8') !== bytes) {
      throw new Error('approval receipt staged readback mismatch');
    }
    if (existsByLstat(output)) throw new Error(`approval receipt output appeared before publish: ${output}`);
    fs.renameSync(temp, output);
    published = true;
    if (fs.readFileSync(assertRegularFile(output, 'approval receipt'), 'utf8') !== bytes) {
      throw new Error('approval receipt published readback mismatch');
    }
  } catch (error) {
    if (published && existsByLstat(output)) fs.rmSync(output, { force: true });
    if (existsByLstat(temp)) fs.rmSync(temp, { force: true });
    throw error;
  }
  return output;
}

function approveReview(requestFile, reviewer, outFile, authorityTransitionApproved) {
  if (authorityTransitionApproved !== true) {
    throw new Error('--authority-transition-approved is required for owner approval');
  }
  if (typeof reviewer !== 'string' || !reviewer.trim()) {
    throw new Error('--reviewer <id> requires a non-empty project-owner identifier');
  }
  const verified = verifyReviewRequest(requestFile);
  const receipt = createApprovalReceipt(verified, reviewer.trim());
  const schemaFindings = validateCoreAdoptionReview(receipt);
  if (schemaFindings.length) {
    throw new Error(`refusing to publish an invalid owner approval receipt: ${findingText('adoption review schema', schemaFindings)}`);
  }
  const output = writeFreshReceipt(receipt, outFile);
  return { output, receipt };
}

function requiredValue(argv, index, flag) {
  const value = argv[index + 1];
  if (!value || value.startsWith('-')) throw new Error(`${flag} requires a value`);
  return value;
}

function parseArgs(argv) {
  const options = {
    input: null,
    provenance: null,
    coverage: null,
    migrationReport: null,
    outDir: null,
    approve: null,
    reviewer: null,
    out: null,
    authorityTransitionApproved: false,
    help: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === '--provenance') {
      options.provenance = requiredValue(argv, index, value);
      index += 1;
    } else if (value === '--coverage') {
      options.coverage = requiredValue(argv, index, value);
      index += 1;
    } else if (value === '--migration-report') {
      options.migrationReport = requiredValue(argv, index, value);
      index += 1;
    } else if (value === '--out-dir') {
      options.outDir = requiredValue(argv, index, value);
      index += 1;
    } else if (value === '--approve') {
      options.approve = requiredValue(argv, index, value);
      index += 1;
    } else if (value === '--reviewer') {
      options.reviewer = requiredValue(argv, index, value);
      index += 1;
    } else if (value === '--out') {
      options.out = requiredValue(argv, index, value);
      index += 1;
    } else if (value === '--authority-transition-approved') {
      options.authorityTransitionApproved = true;
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
    'Prepare: prepare-design-md-core-review <draft-graph.json> --provenance <json> --coverage <json> --out-dir <fresh-dir> [--migration-report <json>]',
    'Approve: prepare-design-md-core-review --approve <review-request.json> --reviewer <id> --out <fresh-receipt.json> --authority-transition-approved',
    '',
    'Prepare publishes an atomic, non-authoritative review directory containing',
    'the exact compiler-rendered DESIGN.md preview, a normalized candidate graph,',
    'exact input drafts, loss evidence, and a byte-hash-anchored review request.',
    'It never creates a portable-core manifest or canonical system-graph authority.',
    '',
    'Approve revalidates every regular non-symlink artifact and emits a fresh,',
    'compiler-compatible project-owner receipt bound to the exact reviewed preview.',
  ].join('\n');
}

function run(argv = process.argv.slice(2)) {
  try {
    const options = parseArgs(argv);
    if (options.help) {
      console.log(help());
      return 0;
    }
    if (options.approve) {
      if (process.env.OMD_AUTHORITY_CONTROLLER_RECEIPT
        && process.env.OMD_AUTHORITY_CONTROLLER_INTERNAL_SHA256 !== process.env.OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256) {
        throw new Error('controller-bound approval must be issued by activate-autopilot-design-system.cjs; main-agent self-attestation is forbidden');
      }
      if (options.input || options.provenance || options.coverage || options.migrationReport || options.outDir) {
        throw new Error('approval mode cannot be combined with preparation inputs');
      }
      if (!options.reviewer) throw new Error('--reviewer <id> is required in approval mode');
      if (!options.out) throw new Error('--out <fresh-receipt.json> is required in approval mode');
      const result = approveReview(
        options.approve,
        options.reviewer,
        options.out,
        options.authorityTransitionApproved,
      );
      console.log(`Owner approval receipt: ${result.output}`);
      return 0;
    }
    if (!options.input) throw new Error('an authority-neutral draft graph is required');
    if (!options.provenance) throw new Error('--provenance <json> is required');
    if (!options.coverage) throw new Error('--coverage <json> is required');
    if (!options.outDir) throw new Error('--out-dir <fresh-dir> is required');
    if (options.reviewer || options.out || options.authorityTransitionApproved) {
      throw new Error('owner approval flags require --approve <review-request.json>');
    }
    const result = prepareReview(
      options.input,
      options.provenance,
      options.coverage,
      options.migrationReport,
      options.outDir,
    );
    console.log(`Core v2 review required: ${result.output}`);
    console.log(`Review the exact preview at ${path.join(result.output, 'DESIGN.md')} before creating an owner approval receipt.`);
    return 0;
  } catch (error) {
    console.error(`design-md review: ${error instanceof Error ? error.message : String(error)}`);
    return 1;
  }
}

if (require.main === module) process.exitCode = run();

module.exports = {
  REVIEW_REQUEST_HASH_PATH,
  REVIEW_REQUEST_KIND,
  REVIEW_REQUEST_PATH,
  approveReview,
  candidateFromGraph,
  createApprovalReceipt,
  createReviewRequest,
  prepareReview,
  run,
  verifyReviewRequest,
};
