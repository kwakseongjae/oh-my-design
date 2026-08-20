#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const core = require('./design-md-core.cjs');
const compiler = require('./compile-design-md-core.cjs');
const { validateCoreGraph } = require('./design-md-core-schema.cjs');

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function jsonBytes(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]));
}

function assertRegularFile(file, label) {
  const absolute = path.resolve(file);
  const stat = fs.lstatSync(absolute);
  if (stat.isSymbolicLink() || !stat.isFile()) throw new Error(`${label} must be a regular non-symlink file`);
  return absolute;
}

function readJson(file, label) {
  const inputFile = assertRegularFile(file, label);
  const bytes = fs.readFileSync(inputFile, 'utf8');
  let value;
  try { value = JSON.parse(bytes); } catch (error) {
    throw new Error(`${label} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be one JSON object`);
  return { inputFile, bytes, value, sha256: sha256(bytes) };
}

function candidatePaths(candidateDir) {
  const root = path.resolve(candidateDir);
  const stat = fs.lstatSync(root);
  if (stat.isSymbolicLink() || !stat.isDirectory()) throw new Error('candidate directory must be a regular non-symlink directory');
  return {
    root,
    graph: path.join(root, '.omd/system/graph.json'),
    report: path.join(root, 'migration-report.json'),
  };
}

function mergeEnrichment(target, enrichment, trail = []) {
  if (!enrichment || typeof enrichment !== 'object' || Array.isArray(enrichment)) {
    throw new Error(`enrichment at /${trail.join('/')} must be one JSON object`);
  }
  const forbiddenRoots = new Set(['$schema', 'schema_version', 'projection', 'extensions']);
  for (const [key, value] of Object.entries(enrichment)) {
    if (trail.length === 0 && forbiddenRoots.has(key)) {
      throw new Error(`enrichment must not write authority or opaque field: ${key}`);
    }
    if (value && typeof value === 'object' && !Array.isArray(value)
      && target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
      mergeEnrichment(target[key], value, [...trail, key]);
    } else {
      target[key] = JSON.parse(JSON.stringify(value));
    }
  }
  return target;
}

function createReboundArtifacts(options) {
  const originalPaths = candidatePaths(options.candidateDir);
  const originalGraph = compiler.parseInputGraph(originalPaths.graph);
  const originalReport = readJson(originalPaths.report, 'original migration report');
  const originalReview = compiler.validateMigrationInputs(originalGraph, originalReport);
  if (!originalReview) throw new Error('original candidate has no lossless migration ledger');

  let enriched;
  if (options.enrichment) {
    const enrichment = readJson(options.enrichment, 'enrichment draft');
    const graph = mergeEnrichment(JSON.parse(JSON.stringify(originalGraph.graph)), enrichment.value);
    const findings = validateCoreGraph(graph);
    if (findings.length) {
      throw new Error(`enriched graph failed Core v2 validation: ${findings.map((finding) => `${finding.path}: ${finding.message}`).join('; ')}`);
    }
    enriched = { ...enrichment, graph };
  } else {
    enriched = compiler.parseInputGraph(options.graph);
  }
  const oldLedger = originalReview.extension;
  const newLedger = enriched.graph.extensions?.[core.MIGRATION_EXTENSION];
  if (JSON.stringify(canonical(oldLedger)) !== JSON.stringify(canonical(newLedger))) {
    throw new Error('enriched graph must preserve the complete opaque migration ledger byte-for-byte');
  }

  const provenance = readJson(options.provenance, 'provenance draft');
  const coverage = readJson(options.coverage, 'coverage draft');
  compiler.validateProvenanceDraft(provenance.value, enriched.graph);
  compiler.validateCoverageDraft(coverage.value);

  const graph = JSON.parse(JSON.stringify(enriched.graph));
  let designMd = core.renderCore(graph);
  graph.projection = {
    path: 'DESIGN.md',
    sha256: sha256(designMd),
    locale: graph.projection?.locale ?? core.DEFAULT_PROJECTION_LOCALE,
  };
  designMd = core.renderCore(graph);
  graph.projection.sha256 = sha256(designMd);
  const graphBytes = jsonBytes(graph);
  const inspection = core.inspectDesignMd(designMd, { sourcePath: 'DESIGN.md' });
  const conformance = core.evaluatePortableCore(designMd, { inspection, graph });
  const report = {
    ...originalReport.value,
    output: {
      format: 'core-v2',
      design_md_sha256: sha256(designMd),
      graph_sha256: sha256(graphBytes),
    },
    adoption_status: 'staged-non-authoritative',
    authoritative_adoption_ready: false,
    unsupported_claims_promoted: null,
    unsupported_claims_review_required: true,
    synthetic_product_values_added: 0,
    projection_roundtrip_equal: core.semanticCoreDigest(core.renderCore(graph)) === core.semanticCoreDigest(designMd),
    source_reconstruction_equal: true,
    conformance,
    clean_top: inspection.cleanTop,
    core_section_ids: inspection.coreSectionIds,
    opaque_extension_preserved: true,
  };
  const reportBytes = jsonBytes(report);
  compiler.validateMigrationInputs(
    { graph, bytes: graphBytes, sha256: sha256(graphBytes), inputFile: enriched.inputFile },
    { value: report, bytes: reportBytes, sha256: sha256(reportBytes), inputFile: originalReport.inputFile },
  );

  return {
    'DESIGN.md': designMd,
    'graph.json': graphBytes,
    'provenance.json': provenance.bytes,
    'coverage.json': coverage.bytes,
    'migration-report.json': reportBytes,
  };
}

function writeFreshDirectory(artifacts, outDir, inputPaths = []) {
  const output = path.resolve(outDir);
  if (fs.existsSync(output)) throw new Error(`output must be fresh: ${output}`);
  for (const input of inputPaths) {
    if (path.resolve(input) === output || path.resolve(input).startsWith(`${output}${path.sep}`)) {
      throw new Error('output directory must not contain an input');
    }
  }
  const parent = path.dirname(output);
  const parentStat = fs.lstatSync(parent);
  if (parentStat.isSymbolicLink() || !parentStat.isDirectory()) throw new Error('output parent must be a regular directory');
  const temp = path.join(parent, `.${path.basename(output)}.tmp-${process.pid}-${crypto.randomBytes(5).toString('hex')}`);
  fs.mkdirSync(temp, { recursive: false });
  try {
    for (const [name, bytes] of Object.entries(artifacts)) fs.writeFileSync(path.join(temp, name), bytes, { flag: 'wx' });
    for (const [name, bytes] of Object.entries(artifacts)) {
      if (fs.readFileSync(path.join(temp, name), 'utf8') !== bytes) throw new Error(`staged readback mismatch: ${name}`);
    }
    fs.renameSync(temp, output);
  } catch (error) {
    fs.rmSync(temp, { recursive: true, force: true });
    throw error;
  }
  return output;
}

function parseArgs(argv) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!['--candidate-dir', '--graph', '--enrichment', '--provenance', '--coverage', '--out-dir'].includes(key)) throw new Error(`unexpected argument: ${key}`);
    const value = argv[++index];
    if (!value) throw new Error(`${key} requires a value`);
    options[key.slice(2).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = value;
  }
  for (const key of ['candidateDir', 'provenance', 'coverage', 'outDir']) {
    if (!options[key]) throw new Error(`--${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)} is required`);
  }
  if (Boolean(options.graph) === Boolean(options.enrichment)) {
    throw new Error('exactly one of --graph or --enrichment is required');
  }
  return options;
}

function run(argv = process.argv.slice(2)) {
  try {
    const options = parseArgs(argv);
    const artifacts = createReboundArtifacts(options);
    const output = writeFreshDirectory(artifacts, options.outDir, [options.graph ?? options.enrichment, options.provenance, options.coverage, options.candidateDir]);
    console.log(`Rebound non-authoritative migration inputs: ${output}`);
    console.log('No system authority was granted. Continue with design-md prepare-review and the exact owner checkpoint.');
    return 0;
  } catch (error) {
    console.error(`design-md rebind-migration: ${error instanceof Error ? error.message : String(error)}`);
    return 1;
  }
}

module.exports = { createReboundArtifacts, mergeEnrichment, parseArgs, run, writeFreshDirectory };

if (require.main === module) process.exitCode = run();
