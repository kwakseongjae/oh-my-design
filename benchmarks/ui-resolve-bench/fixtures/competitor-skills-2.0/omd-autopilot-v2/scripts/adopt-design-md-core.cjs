#!/usr/bin/env node

// Provider-free, receipt-gated installer for a compiler-produced DESIGN.md
// Core v2 package. The compiler publishes an immutable package; this adopter
// independently verifies it, proves it in a sibling staging project, and then
// replaces DESIGN.md plus .omd/system as one rollback-safe logical transaction.

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const {
  FORMAT_VERSION,
  evaluatePortableCore,
  inspectDesignMd,
  renderCore,
  sha256,
} = require('./design-md-core.cjs');
const {
  validateCoreAdoptionReceipt,
  validateCoreCoverage,
  validateCoreGraph,
  validateCoreManifest,
  validateCoreProjectCheckpoint,
  validateCoreProvenance,
} = require('./design-md-core-schema.cjs');

const PACKAGE_FILES = [
  'DESIGN.md',
  '.omd/system/adoption-receipt.json',
  '.omd/system/coverage.json',
  '.omd/system/graph.json',
  '.omd/system/manifest.json',
  '.omd/system/provenance.json',
];
const PACKAGE_DIRECTORIES = ['.omd', '.omd/system'];
const CHECKPOINT_KIND = 'design-md-core-project-adoption-checkpoint';
const CHECKPOINT_REQUEST_KIND = 'design-md-core-project-adoption-checkpoint-request';
const COMPILER_RECEIPT_KIND = 'design-md-core-adoption-receipt';
const TRANSACTION_KIND = 'design-md-core-project-adoption-transaction';
const REPORT_KIND = 'design-md-core-project-adoption-report';
const JOURNAL_NAME = 'core-adoption-transaction.json';
const PROJECT_VALIDATOR = path.join(__dirname, 'validate-project-design-system.cjs');

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

function assertRegularFile(file, label) {
  let stat;
  try {
    stat = fs.lstatSync(file);
  } catch (error) {
    if (error && error.code === 'ENOENT') throw new Error(`${label} is missing: ${file}`);
    throw error;
  }
  if (stat.isSymbolicLink() || !stat.isFile()) {
    throw new Error(`${label} must be a regular, non-symlink file: ${file}`);
  }
  return stat;
}

function assertDirectory(file, label) {
  let stat;
  try {
    stat = fs.lstatSync(file);
  } catch (error) {
    if (error && error.code === 'ENOENT') throw new Error(`${label} is missing: ${file}`);
    throw error;
  }
  if (stat.isSymbolicLink() || !stat.isDirectory()) {
    throw new Error(`${label} must be a real, non-symlink directory: ${file}`);
  }
  return stat;
}

function assertRelativeRegularFile(root, relative, label) {
  let cursor = root;
  const segments = relative.split(/[\\/]/).filter(Boolean);
  for (const [index, segment] of segments.entries()) {
    cursor = path.join(cursor, segment);
    let stat;
    try {
      stat = fs.lstatSync(cursor);
    } catch (error) {
      if (error && error.code === 'ENOENT') throw new Error(`${label} is missing: ${cursor}`);
      throw error;
    }
    if (stat.isSymbolicLink()) throw new Error(`${label} uses a symlinked path segment: ${cursor}`);
    if (index < segments.length - 1 && !stat.isDirectory()) {
      throw new Error(`${label} has a non-directory parent: ${cursor}`);
    }
    if (index === segments.length - 1 && !stat.isFile()) {
      throw new Error(`${label} must be a regular file: ${cursor}`);
    }
  }
  return cursor;
}

function readJsonFile(file, label) {
  const absolute = path.resolve(file);
  assertRegularFile(absolute, label);
  const bytes = fs.readFileSync(absolute, 'utf8');
  let value;
  try {
    value = JSON.parse(bytes);
  } catch (error) {
    throw new Error(`${label} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (!isPlainObject(value)) throw new Error(`${label} must contain one JSON object`);
  return { path: absolute, bytes, sha256: sha256(bytes), value };
}

function canonicalTarget(target) {
  const absolute = path.resolve(target);
  let cursor = absolute;
  const suffix = [];
  while (!existsByLstat(cursor)) {
    const parent = path.dirname(cursor);
    if (parent === cursor) break;
    suffix.unshift(path.basename(cursor));
    cursor = parent;
  }
  const base = fs.realpathSync(cursor);
  return path.join(base, ...suffix);
}

function isNestedOrEqual(first, second) {
  return first === second || first.startsWith(`${second}${path.sep}`);
}

function assertNoAlias(sourceRoot, projectRoot, checkpointPath) {
  const source = canonicalTarget(sourceRoot);
  const project = canonicalTarget(projectRoot);
  if (isNestedOrEqual(source, project) || isNestedOrEqual(project, source)) {
    throw new Error('source package and destination project must not alias or contain one another');
  }
  const checkpoint = canonicalTarget(checkpointPath);
  const designTarget = canonicalTarget(path.join(projectRoot, 'DESIGN.md'));
  const systemTarget = canonicalTarget(path.join(projectRoot, '.omd/system'));
  if (checkpoint === designTarget || isNestedOrEqual(checkpoint, systemTarget)) {
    throw new Error('checkpoint receipt must not alias a destination authority target');
  }
}

function recursiveSnapshot(root, options = {}) {
  assertDirectory(root, options.label ?? 'directory');
  const entries = [];
  const walk = (directory, relativeDirectory) => {
    const names = fs.readdirSync(directory).sort();
    for (const name of names) {
      const absolute = path.join(directory, name);
      const relative = relativeDirectory ? `${relativeDirectory}/${name}` : name;
      const stat = fs.lstatSync(absolute);
      if (stat.isSymbolicLink()) throw new Error(`${options.label ?? 'directory'} contains a symlink: ${relative}`);
      if (stat.isDirectory()) {
        entries.push({ path: relative, type: 'directory' });
        walk(absolute, relative);
      } else if (stat.isFile()) {
        const bytes = fs.readFileSync(absolute);
        entries.push({ path: relative, type: 'file', size: bytes.length, sha256: sha256(bytes) });
      } else {
        throw new Error(`${options.label ?? 'directory'} contains a non-regular entry: ${relative}`);
      }
    }
  };
  walk(root, '');
  return { entries, sha256: sha256(jsonBytes(entries)) };
}

function fileState(file) {
  if (!existsByLstat(file)) return { exists: false, sha256: null };
  assertRegularFile(file, 'destination DESIGN.md');
  return { exists: true, sha256: sha256(fs.readFileSync(file)) };
}

function directoryState(directory) {
  if (!existsByLstat(directory)) return { exists: false, sha256: null };
  const snapshot = recursiveSnapshot(directory, { label: 'destination .omd/system' });
  return { exists: true, sha256: snapshot.sha256 };
}

function packageSnapshot(packageRoot) {
  const snapshot = recursiveSnapshot(packageRoot, { label: 'source package' });
  const files = snapshot.entries.filter((entry) => entry.type === 'file').map((entry) => entry.path).sort();
  const directories = snapshot.entries.filter((entry) => entry.type === 'directory').map((entry) => entry.path).sort();
  if (JSON.stringify(files) !== JSON.stringify([...PACKAGE_FILES].sort())
    || JSON.stringify(directories) !== JSON.stringify([...PACKAGE_DIRECTORIES].sort())) {
    throw new Error(`source package must contain exactly the six compiler artifacts; found files=${files.join(',')} directories=${directories.join(',')}`);
  }
  return snapshot;
}

function findingText(prefix, findings) {
  return findings
    .map((finding) => `${prefix} ${finding.keyword} at ${finding.path}: ${finding.message}`)
    .join('; ');
}

function loadPackage(packageRoot) {
  const root = path.resolve(packageRoot);
  assertDirectory(root, 'source package root');
  const snapshot = packageSnapshot(root);
  const designPath = path.join(root, 'DESIGN.md');
  assertRegularFile(designPath, 'source DESIGN.md');
  const designMd = fs.readFileSync(designPath, 'utf8');
  const graph = readJsonFile(path.join(root, '.omd/system/graph.json'), 'source graph');
  const provenance = readJsonFile(path.join(root, '.omd/system/provenance.json'), 'source provenance');
  const coverage = readJsonFile(path.join(root, '.omd/system/coverage.json'), 'source coverage');
  const manifest = readJsonFile(path.join(root, '.omd/system/manifest.json'), 'source manifest');
  const adoptionReceipt = readJsonFile(
    path.join(root, '.omd/system/adoption-receipt.json'),
    'compiler adoption receipt',
  );
  const files = {
    design_md: { path: 'DESIGN.md', bytes: designMd, sha256: sha256(designMd) },
    graph: { path: '.omd/system/graph.json', bytes: graph.bytes, sha256: graph.sha256 },
    provenance: { path: '.omd/system/provenance.json', bytes: provenance.bytes, sha256: provenance.sha256 },
    coverage: { path: '.omd/system/coverage.json', bytes: coverage.bytes, sha256: coverage.sha256 },
    manifest: { path: '.omd/system/manifest.json', bytes: manifest.bytes, sha256: manifest.sha256 },
    adoption_receipt: {
      path: '.omd/system/adoption-receipt.json',
      bytes: adoptionReceipt.bytes,
      sha256: adoptionReceipt.sha256,
    },
  };
  return {
    root,
    snapshot,
    designMd,
    graph,
    provenance,
    coverage,
    manifest,
    adoptionReceipt,
    files,
  };
}

function expectedPackageHashes(pkg) {
  return Object.fromEntries(
    Object.entries(pkg.files).map(([key, artifact]) => [`${key}_sha256`, artifact.sha256]),
  );
}

function createCheckpointRequest(pkg) {
  return {
    schema_version: FORMAT_VERSION,
    kind: CHECKPOINT_REQUEST_KIND,
    status: 'approval-required',
    source_package_tree_sha256: pkg.snapshot.sha256,
    source_package: expectedPackageHashes(pkg),
  };
}

function createCheckpointReceipt(pkg, reviewer) {
  const request = createCheckpointRequest(pkg);
  return {
    schema_version: FORMAT_VERSION,
    kind: CHECKPOINT_KIND,
    request,
    attestation: {
      request_sha256: sha256(jsonBytes(request)),
      decision: 'approved',
      authority_transition_approved: true,
      authority: { role: 'project-owner', identifier: reviewer },
    },
  };
}

function assertPackageUnchanged(pkg) {
  const latest = loadPackage(pkg.root);
  if (latest.snapshot.sha256 !== pkg.snapshot.sha256) {
    throw new Error('source package changed after validation');
  }
  for (const [key, artifact] of Object.entries(pkg.files)) {
    if (latest.files[key].sha256 !== artifact.sha256 || latest.files[key].bytes !== artifact.bytes) {
      throw new Error(`source package artifact changed after validation: ${artifact.path}`);
    }
  }
}

function prepareCheckpoint(pkg, outputPath, reviewer) {
  if (typeof reviewer !== 'string' || !reviewer.trim()) {
    throw new Error('--reviewer <id> must identify the approving project owner');
  }
  const output = path.resolve(outputPath);
  if (existsByLstat(output)) {
    const stat = fs.lstatSync(output);
    const kind = stat.isSymbolicLink() ? 'symlink' : 'existing path';
    throw new Error(`checkpoint output must be fresh; refusing ${kind}: ${output}`);
  }
  const parent = path.dirname(output);
  assertDirectory(parent, 'checkpoint output parent');
  if (isNestedOrEqual(canonicalTarget(output), canonicalTarget(pkg.root))) {
    throw new Error('checkpoint output must live outside the immutable source package');
  }

  const receipt = createCheckpointReceipt(pkg, reviewer.trim());
  const checkpointFindings = validateCoreProjectCheckpoint(receipt);
  if (checkpointFindings.length) {
    throw new Error(`refusing to prepare an invalid checkpoint receipt: ${findingText('project checkpoint schema', checkpointFindings)}`);
  }
  const bytes = jsonBytes(receipt);
  const receiptSha256 = sha256(bytes);
  const temp = path.join(
    parent,
    `.${path.basename(output)}.tmp-${process.pid}-${crypto.randomBytes(4).toString('hex')}`,
  );
  let published = false;
  try {
    fs.writeFileSync(temp, bytes, { encoding: 'utf8', flag: 'wx' });
    assertRegularFile(temp, 'staged checkpoint receipt');
    if (fs.readFileSync(temp, 'utf8') !== bytes) throw new Error('checkpoint receipt staged readback failed');
    assertPackageUnchanged(pkg);
    if (existsByLstat(output)) throw new Error(`checkpoint output appeared before publish: ${output}`);
    // A sibling hard-link publishes the fully written inode with O_EXCL-like
    // no-replace semantics. rename(2) would overwrite a path created in the
    // final race window on POSIX.
    fs.linkSync(temp, output);
    published = true;
    fs.unlinkSync(temp);
    assertRegularFile(output, 'prepared checkpoint receipt');
    if (fs.readFileSync(output, 'utf8') !== bytes) throw new Error('checkpoint receipt published readback failed');
    assertPackageUnchanged(pkg);
  } catch (error) {
    if (published && existsByLstat(output) && matchesFile(output, receiptSha256)) fs.unlinkSync(output);
    if (existsByLstat(temp)) {
      if (!matchesFile(temp, receiptSha256)) {
        throw new Error(`${error instanceof Error ? error.message : String(error)}; changed checkpoint temp requires manual inspection: ${temp}`);
      }
      fs.unlinkSync(temp);
    }
    throw error;
  }
  return {
    schema_version: FORMAT_VERSION,
    kind: 'design-md-core-project-adoption-checkpoint-preparation',
    status: 'prepared',
    approved: true,
    authority: receipt.attestation.authority,
    checkpoint_receipt: output,
    checkpoint_receipt_sha256: receiptSha256,
    checkpoint_request_sha256: receipt.attestation.request_sha256,
    source_package: receipt.request.source_package,
  };
}

function validatePackage(pkg) {
  const errors = [];
  const graph = pkg.graph.value;
  const provenance = pkg.provenance.value;
  const coverage = pkg.coverage.value;
  const manifest = pkg.manifest.value;
  const compilerReceipt = pkg.adoptionReceipt.value;
  const graphFindings = validateCoreGraph(graph);
  const manifestFindings = validateCoreManifest(manifest);
  const provenanceFindings = validateCoreProvenance(provenance);
  const coverageFindings = validateCoreCoverage(coverage);
  const adoptionReceiptFindings = validateCoreAdoptionReceipt(compilerReceipt);
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
  const conformance = evaluatePortableCore(pkg.designMd, { inspection, graph });
  if (!conformance.portable_core) {
    errors.push(`DESIGN.md is not Portable Core: ${conformance.reasons.map((reason) => reason.code).join(',')}`);
  }
  if (graph?.projection?.path !== 'DESIGN.md'
    || graph?.projection?.sha256 !== pkg.files.design_md.sha256) {
    errors.push('graph projection binding is invalid');
  }
  if (renderCore(graph) !== pkg.designMd) errors.push('DESIGN.md is not the canonical graph projection');

  if (manifest?.profile !== 'portable-core'
    || manifest?.authority?.canonical !== 'system-graph'
    || manifest?.authority?.graph_path !== '.omd/system/graph.json'
    || manifest?.authority?.projection_path !== 'DESIGN.md') {
    errors.push('manifest authority must be adopted profile: portable-core system-graph');
  }
  for (const key of ['design_md', 'graph', 'provenance', 'coverage']) {
    const artifact = pkg.files[key];
    if (manifest?.artifacts?.[key]?.path !== artifact.path
      || manifest?.artifacts?.[key]?.sha256 !== artifact.sha256) {
      errors.push(`manifest ${key} binding is invalid`);
    }
  }
  for (const [label, sidecar] of [['provenance', provenance], ['coverage', coverage]]) {
    if (sidecar?.schema_version !== FORMAT_VERSION
      || sidecar?.design_md_sha256 !== pkg.files.design_md.sha256
      || sidecar?.graph_sha256 !== pkg.files.graph.sha256) {
      errors.push(`${label} final package binding is invalid`);
    }
  }

  if (compilerReceipt?.schema_version !== FORMAT_VERSION
    || compilerReceipt?.kind !== COMPILER_RECEIPT_KIND
    || compilerReceipt?.status !== 'adopted'
    || compilerReceipt?.authority !== 'system-graph'
    || compilerReceipt?.review?.authority_transition_approved !== true
    || compilerReceipt?.review?.reviewer?.role !== 'project-owner'
    || typeof compilerReceipt?.review?.reviewer?.identifier !== 'string'
    || !compilerReceipt.review.reviewer.identifier.trim()
    || !isSha(compilerReceipt?.review?.receipt_sha256)) {
    errors.push('compiler adoption receipt lacks explicit owner-approved system-graph authority');
  }
  for (const key of ['design_md', 'graph', 'provenance', 'coverage', 'manifest']) {
    const artifact = pkg.files[key];
    if (compilerReceipt?.outputs?.[key]?.path !== artifact.path
      || compilerReceipt?.outputs?.[key]?.sha256 !== artifact.sha256) {
      errors.push(`compiler adoption receipt ${key} binding is invalid`);
    }
  }
  if (errors.length) throw new Error(`source package validation failed: ${errors.join('; ')}`);
  return { conformance };
}

function validateCheckpoint(checkpoint, pkg) {
  const receipt = checkpoint.value;
  const schemaFindings = validateCoreProjectCheckpoint(receipt);
  if (schemaFindings.length) {
    throw new Error(`checkpoint receipt failed Core v2 schema validation: ${findingText('project checkpoint schema', schemaFindings)}`);
  }
  if (receipt.schema_version !== FORMAT_VERSION || receipt.kind !== CHECKPOINT_KIND
    || !isPlainObject(receipt.attestation)
    || receipt.attestation.decision !== 'approved'
    || receipt.attestation.authority_transition_approved !== true
    || receipt.attestation.authority?.role !== 'project-owner'
    || typeof receipt.attestation.authority?.identifier !== 'string'
    || !receipt.attestation.authority.identifier.trim()) {
    throw new Error('checkpoint attestation must explicitly approve with an identified project-owner authority');
  }
  const expectedRequest = createCheckpointRequest(pkg);
  if (JSON.stringify(stableJson(receipt.request)) !== JSON.stringify(stableJson(expectedRequest))) {
    throw new Error('checkpoint request is stale or was not reproduced from the exact compiler package');
  }
  const requestSha256 = sha256(jsonBytes(expectedRequest));
  if (receipt.attestation.request_sha256 !== requestSha256) {
    throw new Error('checkpoint attestation is not bound to the deterministic exact-package request');
  }
  const sourcePackage = receipt.request.source_package;
  if (!isPlainObject(sourcePackage)) throw new Error('checkpoint request source_package hash bindings are required');
  const expected = expectedPackageHashes(pkg);
  for (const [key, value] of Object.entries(expected)) {
    if (sourcePackage[key] !== value) {
      throw new Error(`checkpoint request is stale or unbound at source_package.${key}`);
    }
  }
  if (Object.keys(sourcePackage).sort().join(',') !== Object.keys(expected).sort().join(',')) {
    throw new Error('checkpoint request source_package must contain exactly the six artifact hashes');
  }
  return receipt;
}

function assertProjectRoot(projectRoot) {
  const root = path.resolve(projectRoot);
  assertDirectory(root, 'destination project root');
  const omd = path.join(root, '.omd');
  if (existsByLstat(omd)) assertDirectory(omd, 'destination .omd');
  const design = path.join(root, 'DESIGN.md');
  if (existsByLstat(design)) assertRegularFile(design, 'destination DESIGN.md');
  const system = path.join(root, '.omd/system');
  if (existsByLstat(system)) recursiveSnapshot(system, { label: 'destination .omd/system' });
  return root;
}

function copyPackageToStage(pkg, stageRoot) {
  fs.mkdirSync(path.join(stageRoot, '.omd/system'), { recursive: true });
  for (const artifact of Object.values(pkg.files)) {
    const target = path.join(stageRoot, artifact.path);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, artifact.bytes, { encoding: 'utf8', flag: 'wx' });
    assertRegularFile(target, `staged ${artifact.path}`);
    if (sha256(fs.readFileSync(target)) !== artifact.sha256) {
      throw new Error(`staged package readback mismatch: ${artifact.path}`);
    }
  }
}

function evidenceReferences(pkg) {
  const references = [];
  for (const decision of Array.isArray(pkg.provenance.value?.decisions)
    ? pkg.provenance.value.decisions : []) {
    references.push(...(Array.isArray(decision?.evidence) ? decision.evidence : []));
  }
  for (const group of Object.values(isPlainObject(pkg.coverage.value?.groups)
    ? pkg.coverage.value.groups : {})) {
    references.push(...(Array.isArray(group?.evidence) ? group.evidence : []));
  }
  return [...new Set(references)];
}

function copyProjectEvidence(pkg, projectRoot, stageRoot) {
  const copied = new Set();
  for (const reference of evidenceReferences(pkg)) {
    if (typeof reference !== 'string' || !reference.trim()) {
      throw new Error('project proof evidence reference must be a non-empty string');
    }
    const [filePart] = reference.split('#', 1);
    if (!filePart || path.isAbsolute(filePart) || filePart.includes('\\')
      || filePart.split('/').includes('..')) {
      throw new Error(`project proof evidence reference is unsafe: ${reference}`);
    }
    const normalized = filePart.split(path.sep).join('/');
    if (normalized === 'DESIGN.md' || normalized.startsWith('.omd/system/')) continue;
    if (normalized.startsWith('.omd/project-adoption-proof/')) {
      throw new Error(`project proof evidence collides with the proof run: ${reference}`);
    }
    if (copied.has(normalized)) continue;
    const source = path.resolve(projectRoot, filePart);
    if (!isNestedOrEqual(source, projectRoot)) {
      throw new Error(`project proof evidence escapes the project: ${reference}`);
    }
    assertRelativeRegularFile(projectRoot, filePart, `project proof evidence ${reference}`);
    const target = path.resolve(stageRoot, filePart);
    if (!isNestedOrEqual(target, stageRoot)) {
      throw new Error(`staged project proof evidence escapes the stage: ${reference}`);
    }
    if (existsByLstat(target)) {
      throw new Error(`project proof evidence collides with a package artifact: ${reference}`);
    }
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target, fs.constants.COPYFILE_EXCL);
    assertRegularFile(target, `staged project proof evidence ${reference}`);
    copied.add(normalized);
  }
}

function runProjectProof(pkg, projectRoot, stageRoot, replacing) {
  copyProjectEvidence(pkg, projectRoot, stageRoot);
  const runDir = path.join(stageRoot, '.omd/project-adoption-proof');
  fs.mkdirSync(runDir, { recursive: true });
  fs.writeFileSync(path.join(runDir, 'design-system-decision.json'), jsonBytes({
    strategy: replacing ? 'refresh' : 'establish',
    implementation_owner: 'main-agent',
    root_design_md_write_allowed: true,
    required_system_authority: 'core-v2-project-system',
  }), { encoding: 'utf8', flag: 'wx' });
  const result = spawnSync(process.execPath, [PROJECT_VALIDATOR, stageRoot, runDir], {
    cwd: projectRoot,
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
  });
  const proofPath = path.join(runDir, 'system/proof.json');
  if (!existsByLstat(proofPath)) {
    throw new Error(`project proof did not emit proof.json: ${result.stderr || result.stdout}`);
  }
  const proof = readJsonFile(proofPath, 'project proof');
  if (result.status !== 0 || proof.value.pass !== true
    || proof.value.authority_mode !== 'core-v2-project-system'
    || proof.value.profile !== 'portable-core'
    || proof.value.design_md_sha256 !== pkg.files.design_md.sha256
    || proof.value.graph_sha256 !== pkg.files.graph.sha256
    || proof.value.provenance_sha256 !== pkg.files.provenance.sha256
    || proof.value.coverage_sha256 !== pkg.files.coverage.sha256
    || proof.value.manifest_sha256 !== pkg.files.manifest.sha256) {
    throw new Error(`provider-free project proof failed: ${JSON.stringify(proof.value.findings ?? [])}`);
  }
  return proof;
}

function transactionPaths(projectRoot, transactionId) {
  const parent = path.dirname(projectRoot);
  const base = path.basename(projectRoot);
  const workspace = path.join(parent, `.${base}.omd-core-adopt-${transactionId}`);
  return {
    workspace,
    stageRoot: path.join(workspace, 'stage-project'),
    stageDesign: path.join(workspace, 'stage-project/DESIGN.md'),
    stageSystem: path.join(workspace, 'stage-project/.omd/system'),
    backupDesign: path.join(workspace, 'backup/DESIGN.md'),
    backupSystem: path.join(workspace, 'backup/system'),
    stagedReport: path.join(workspace, 'project-adoption-report.json'),
    targetDesign: path.join(projectRoot, 'DESIGN.md'),
    targetSystem: path.join(projectRoot, '.omd/system'),
    reportDirectory: path.join(projectRoot, '.omd/adoptions'),
    targetReport: path.join(projectRoot, `.omd/adoptions/${transactionId}.json`),
    journal: path.join(projectRoot, `.omd/${JOURNAL_NAME}`),
    journalTemp: path.join(projectRoot, `.omd/.${JOURNAL_NAME}.${transactionId}.next`),
  };
}

function buildJournal(projectRoot, transactionId, paths, oldState, newState, metadata) {
  return {
    schema_version: '1.0.0',
    kind: TRANSACTION_KIND,
    transaction_id: transactionId,
    state: 'staged',
    project_root: projectRoot,
    workspace: paths.workspace,
    omd_parent_existed: metadata.omdParentExisted,
    report_directory_existed: metadata.reportDirectoryExisted,
    checkpoint_receipt_sha256: metadata.checkpointReceiptSha256,
    project_proof_sha256: metadata.projectProofSha256,
    design: {
      target: paths.targetDesign,
      stage: paths.stageDesign,
      backup: paths.backupDesign,
      old_exists: oldState.design.exists,
      old_sha256: oldState.design.sha256,
      new_sha256: newState.design.sha256,
    },
    system: {
      target: paths.targetSystem,
      stage: paths.stageSystem,
      backup: paths.backupSystem,
      old_exists: oldState.system.exists,
      old_sha256: oldState.system.sha256,
      new_sha256: newState.system.sha256,
    },
    report: {
      target: paths.targetReport,
      stage: paths.stagedReport,
      sha256: metadata.reportSha256,
    },
  };
}

function assertSafeJournal(journal, projectRoot) {
  if (!isPlainObject(journal) || journal.schema_version !== '1.0.0'
    || journal.kind !== TRANSACTION_KIND
    || typeof journal.transaction_id !== 'string'
    || !/^[a-f0-9]{16}$/.test(journal.transaction_id)
    || journal.project_root !== projectRoot) {
    throw new Error('existing Core adoption journal is corrupt or does not belong to this project');
  }
  const expected = transactionPaths(projectRoot, journal.transaction_id);
  if (journal.workspace !== expected.workspace
    || journal.design?.target !== expected.targetDesign
    || journal.design?.stage !== expected.stageDesign
    || journal.design?.backup !== expected.backupDesign
    || journal.system?.target !== expected.targetSystem
    || journal.system?.stage !== expected.stageSystem
    || journal.system?.backup !== expected.backupSystem
    || journal.report?.target !== expected.targetReport
    || journal.report?.stage !== expected.stagedReport) {
    throw new Error('existing Core adoption journal contains unsafe or aliased transaction paths');
  }
  for (const entry of [journal.design, journal.system]) {
    if (typeof entry.old_exists !== 'boolean' || !isSha(entry.new_sha256)
      || (entry.old_exists ? !isSha(entry.old_sha256) : entry.old_sha256 !== null)) {
      throw new Error('existing Core adoption journal has invalid old/new target bindings');
    }
  }
  if (!isSha(journal.report?.sha256)) {
    throw new Error('existing Core adoption journal has an invalid report binding');
  }
  return expected;
}

function writeJournal(journal, paths, initial = false) {
  const bytes = jsonBytes(journal);
  if (initial) {
    fs.writeFileSync(paths.journal, bytes, { encoding: 'utf8', flag: 'wx' });
    return;
  }
  if (existsByLstat(paths.journalTemp)) {
    throw new Error('transaction journal update path is unexpectedly occupied');
  }
  fs.writeFileSync(paths.journalTemp, bytes, { encoding: 'utf8', flag: 'wx' });
  fs.renameSync(paths.journalTemp, paths.journal);
}

function updateJournal(journal, paths, state) {
  journal.state = state;
  writeJournal(journal, paths, false);
}

function matchesFile(file, expectedSha) {
  if (!existsByLstat(file)) return false;
  assertRegularFile(file, 'transaction file');
  return sha256(fs.readFileSync(file)) === expectedSha;
}

function matchesDirectory(directory, expectedSha) {
  if (!existsByLstat(directory)) return false;
  return recursiveSnapshot(directory, { label: 'transaction directory' }).sha256 === expectedSha;
}

function removeKnownFile(file, expectedSha, label) {
  if (!existsByLstat(file)) return;
  if (!matchesFile(file, expectedSha)) throw new Error(`cannot safely remove changed ${label}`);
  fs.unlinkSync(file);
}

function removeKnownDirectory(directory, expectedSha, label) {
  if (!existsByLstat(directory)) return;
  if (!matchesDirectory(directory, expectedSha)) throw new Error(`cannot safely remove changed ${label}`);
  fs.rmSync(directory, { recursive: true, force: false });
}

function removeDirectoryIfEmpty(directory) {
  if (!existsByLstat(directory)) return;
  assertDirectory(directory, 'transaction-created directory');
  if (fs.readdirSync(directory).length === 0) fs.rmdirSync(directory);
}

function restoreFile(entry) {
  const backupExists = existsByLstat(entry.backup);
  if (backupExists) {
    if (!matchesFile(entry.backup, entry.old_sha256)) throw new Error('DESIGN.md backup changed during transaction');
    if (existsByLstat(entry.target)) removeKnownFile(entry.target, entry.new_sha256, 'new DESIGN.md');
    fs.mkdirSync(path.dirname(entry.target), { recursive: true });
    fs.renameSync(entry.backup, entry.target);
  } else if (entry.old_exists) {
    if (!matchesFile(entry.target, entry.old_sha256)) {
      throw new Error('old DESIGN.md is unavailable for deterministic rollback');
    }
  } else if (existsByLstat(entry.target)) {
    removeKnownFile(entry.target, entry.new_sha256, 'new DESIGN.md');
  }
  if (entry.old_exists && !matchesFile(entry.target, entry.old_sha256)) {
    throw new Error('DESIGN.md rollback readback failed');
  }
  if (!entry.old_exists && existsByLstat(entry.target)) {
    throw new Error('DESIGN.md rollback failed to restore absence');
  }
}

function restoreDirectory(entry) {
  const backupExists = existsByLstat(entry.backup);
  if (backupExists) {
    if (!matchesDirectory(entry.backup, entry.old_sha256)) throw new Error('.omd/system backup changed during transaction');
    if (existsByLstat(entry.target)) removeKnownDirectory(entry.target, entry.new_sha256, 'new .omd/system');
    fs.mkdirSync(path.dirname(entry.target), { recursive: true });
    fs.renameSync(entry.backup, entry.target);
  } else if (entry.old_exists) {
    if (!matchesDirectory(entry.target, entry.old_sha256)) {
      throw new Error('old .omd/system is unavailable for deterministic rollback');
    }
  } else if (existsByLstat(entry.target)) {
    removeKnownDirectory(entry.target, entry.new_sha256, 'new .omd/system');
  }
  if (entry.old_exists && !matchesDirectory(entry.target, entry.old_sha256)) {
    throw new Error('.omd/system rollback readback failed');
  }
  if (!entry.old_exists && existsByLstat(entry.target)) {
    throw new Error('.omd/system rollback failed to restore absence');
  }
}

function assertRollbackFileSafe(entry) {
  if (existsByLstat(entry.backup)) {
    if (!matchesFile(entry.backup, entry.old_sha256)) throw new Error('DESIGN.md backup changed during transaction');
    if (existsByLstat(entry.target) && !matchesFile(entry.target, entry.new_sha256)) {
      throw new Error('destination DESIGN.md changed during interrupted transaction');
    }
  } else if (entry.old_exists) {
    if (!matchesFile(entry.target, entry.old_sha256)) {
      throw new Error('old DESIGN.md is unavailable for deterministic rollback');
    }
  } else if (existsByLstat(entry.target) && !matchesFile(entry.target, entry.new_sha256)) {
    throw new Error('destination DESIGN.md has unknown bytes during interrupted transaction');
  }
  if (existsByLstat(entry.stage) && !matchesFile(entry.stage, entry.new_sha256)) {
    throw new Error('staged DESIGN.md changed during interrupted transaction');
  }
}

function assertRollbackDirectorySafe(entry) {
  if (existsByLstat(entry.backup)) {
    if (!matchesDirectory(entry.backup, entry.old_sha256)) throw new Error('.omd/system backup changed during transaction');
    if (existsByLstat(entry.target) && !matchesDirectory(entry.target, entry.new_sha256)) {
      throw new Error('destination .omd/system changed during interrupted transaction');
    }
  } else if (entry.old_exists) {
    if (!matchesDirectory(entry.target, entry.old_sha256)) {
      throw new Error('old .omd/system is unavailable for deterministic rollback');
    }
  } else if (existsByLstat(entry.target) && !matchesDirectory(entry.target, entry.new_sha256)) {
    throw new Error('destination .omd/system has unknown bytes during interrupted transaction');
  }
  if (existsByLstat(entry.stage) && !matchesDirectory(entry.stage, entry.new_sha256)) {
    throw new Error('staged .omd/system changed during interrupted transaction');
  }
}

function assertRollbackSafe(journal) {
  if (existsByLstat(journal.report.target) && !matchesFile(journal.report.target, journal.report.sha256)) {
    throw new Error('project adoption report changed during interrupted transaction');
  }
  assertRollbackDirectorySafe(journal.system);
  assertRollbackFileSafe(journal.design);
}

function cleanupWorkspace(paths) {
  if (!existsByLstat(paths.workspace)) return;
  if (path.dirname(paths.workspace) !== path.dirname(path.dirname(path.dirname(paths.journal)))
    || !path.basename(paths.workspace).includes('.omd-core-adopt-')) {
    throw new Error(`refusing to remove an unsafe transaction workspace: ${paths.workspace}`);
  }
  const stat = fs.lstatSync(paths.workspace);
  if (stat.isSymbolicLink() || !stat.isDirectory()) {
    throw new Error(`transaction workspace is not a real directory: ${paths.workspace}`);
  }
  fs.rmSync(paths.workspace, { recursive: true, force: false });
}

function rollbackTransaction(journal, paths) {
  // Recovery is all-or-nothing: inspect every path before the first repair so
  // an externally changed target cannot cause a partial rollback.
  assertRollbackSafe(journal);
  removeKnownFile(journal.report.target, journal.report.sha256, 'project adoption report');
  restoreDirectory(journal.system);
  restoreFile(journal.design);
  if (existsByLstat(journal.system.stage)) removeKnownDirectory(journal.system.stage, journal.system.new_sha256, 'staged .omd/system');
  if (existsByLstat(journal.design.stage)) removeKnownFile(journal.design.stage, journal.design.new_sha256, 'staged DESIGN.md');
  cleanupWorkspace(paths);
  if (existsByLstat(paths.journalTemp)) fs.unlinkSync(paths.journalTemp);
  if (existsByLstat(paths.journal)) fs.unlinkSync(paths.journal);
  if (!journal.report_directory_existed) removeDirectoryIfEmpty(paths.reportDirectory);
  if (!journal.omd_parent_existed) removeDirectoryIfEmpty(path.join(journal.project_root, '.omd'));
}

function finalizeTransaction(journal, paths) {
  if (!matchesFile(journal.design.target, journal.design.new_sha256)
    || !matchesDirectory(journal.system.target, journal.system.new_sha256)
    || !matchesFile(journal.report.target, journal.report.sha256)) {
    throw new Error('verified interrupted transaction no longer has one complete new package');
  }
  cleanupWorkspace(paths);
  if (existsByLstat(paths.journalTemp)) fs.unlinkSync(paths.journalTemp);
  if (existsByLstat(paths.journal)) fs.unlinkSync(paths.journal);
}

function recoverInterruptedTransaction(projectRoot) {
  const journalPath = path.join(projectRoot, `.omd/${JOURNAL_NAME}`);
  if (!existsByLstat(journalPath)) return { recovered: false, action: null };
  const parsed = readJsonFile(journalPath, 'existing Core adoption journal');
  const journal = parsed.value;
  const paths = assertSafeJournal(journal, projectRoot);
  if (journal.state === 'verified') {
    finalizeTransaction(journal, paths);
    return { recovered: true, action: 'finalized-complete-new-package' };
  }
  rollbackTransaction(journal, paths);
  return { recovered: true, action: 'rolled-back-to-old-package' };
}

function maybeInjectFailure(point) {
  if (process.env.OMD_CORE_ADOPT_CRASH_AT === point) process.exit(86);
  if (process.env.OMD_CORE_ADOPT_FAIL_AT === point) {
    throw new Error(`injected Core adoption failure at ${point}`);
  }
}

function assertSourceUnchanged(pkg, checkpoint) {
  assertPackageUnchanged(pkg);
  const latestCheckpoint = readJsonFile(checkpoint.path, 'checkpoint receipt');
  if (latestCheckpoint.sha256 !== checkpoint.sha256 || latestCheckpoint.bytes !== checkpoint.bytes) {
    throw new Error('checkpoint receipt changed after validation');
  }
}

function createReport(transactionId, pkg, checkpoint, proof, oldState, newState, recovery, reportPath) {
  return {
    schema_version: FORMAT_VERSION,
    kind: REPORT_KIND,
    status: 'adopted',
    approved: true,
    authority: checkpoint.value.attestation.authority,
    transaction_id: transactionId,
    recovery,
    report_path: reportPath,
    checkpoint_receipt_sha256: checkpoint.sha256,
    source_package: expectedPackageHashes(pkg),
    destination: {
      design_md_sha256: newState.design.sha256,
      system_tree_sha256: newState.system.sha256,
    },
    previous: {
      design_md: { present: oldState.design.exists, sha256: oldState.design.sha256 },
      system: { present: oldState.system.exists, tree_sha256: oldState.system.sha256 },
    },
    project_proof: {
      sha256: proof.sha256,
      pass: true,
      authority_mode: proof.value.authority_mode,
      profile: proof.value.profile,
    },
  };
}

function adoptPackage(packageRoot, projectRoot, checkpointPath) {
  const destination = assertProjectRoot(projectRoot);
  const recovered = recoverInterruptedTransaction(destination);
  // Re-run destination preflight after recovery because it may have restored
  // previously backed-up authority paths.
  assertProjectRoot(destination);
  const pkg = loadPackage(packageRoot);
  const checkpoint = readJsonFile(checkpointPath, 'checkpoint receipt');
  assertNoAlias(pkg.root, destination, checkpoint.path);
  validatePackage(pkg);
  validateCheckpoint(checkpoint, pkg);

  const transactionId = crypto.randomBytes(8).toString('hex');
  const paths = transactionPaths(destination, transactionId);
  if (existsByLstat(paths.workspace) || existsByLstat(paths.targetReport)) {
    throw new Error('fresh transaction paths unexpectedly already exist');
  }
  const omdParent = path.join(destination, '.omd');
  const omdParentExisted = existsByLstat(omdParent);
  const reportDirectoryExisted = existsByLstat(paths.reportDirectory);
  const oldState = {
    design: fileState(paths.targetDesign),
    system: directoryState(paths.targetSystem),
  };
  let journal = null;
  try {
    fs.mkdirSync(paths.stageRoot, { recursive: true });
    copyPackageToStage(pkg, paths.stageRoot);
    const replacing = oldState.design.exists || oldState.system.exists;
    const proof = runProjectProof(pkg, destination, paths.stageRoot, replacing);
    const newState = {
      design: { exists: true, sha256: sha256(fs.readFileSync(paths.stageDesign)) },
      system: { exists: true, sha256: recursiveSnapshot(paths.stageSystem, { label: 'staged .omd/system' }).sha256 },
    };
    const reportPath = path.relative(destination, paths.targetReport).split(path.sep).join('/');
    const report = createReport(
      transactionId,
      pkg,
      checkpoint,
      proof,
      oldState,
      newState,
      recovered,
      reportPath,
    );
    const reportBytes = jsonBytes(report);
    fs.writeFileSync(paths.stagedReport, reportBytes, { encoding: 'utf8', flag: 'wx' });
    const reportSha256 = sha256(reportBytes);
    maybeInjectFailure('after-stage');

    assertSourceUnchanged(pkg, checkpoint);
    if (JSON.stringify(fileState(paths.targetDesign)) !== JSON.stringify(oldState.design)
      || JSON.stringify(directoryState(paths.targetSystem)) !== JSON.stringify(oldState.system)) {
      throw new Error('destination authority paths changed during preflight');
    }

    fs.mkdirSync(omdParent, { recursive: true });
    assertDirectory(omdParent, 'destination .omd');
    fs.mkdirSync(paths.reportDirectory, { recursive: true });
    assertDirectory(paths.reportDirectory, 'destination adoption report directory');
    fs.mkdirSync(path.dirname(paths.backupDesign), { recursive: true });
    journal = buildJournal(destination, transactionId, paths, oldState, newState, {
      omdParentExisted,
      reportDirectoryExisted,
      checkpointReceiptSha256: checkpoint.sha256,
      projectProofSha256: proof.sha256,
      reportSha256,
    });
    writeJournal(journal, paths, true);

    if (oldState.design.exists) fs.renameSync(paths.targetDesign, paths.backupDesign);
    updateJournal(journal, paths, 'design-backed-up');
    maybeInjectFailure('after-design-backup');

    if (oldState.system.exists) fs.renameSync(paths.targetSystem, paths.backupSystem);
    updateJournal(journal, paths, 'system-backed-up');
    maybeInjectFailure('after-system-backup');

    fs.renameSync(paths.stageDesign, paths.targetDesign);
    updateJournal(journal, paths, 'design-published');
    maybeInjectFailure('after-design-publish');

    fs.renameSync(paths.stageSystem, paths.targetSystem);
    updateJournal(journal, paths, 'system-published');
    maybeInjectFailure('after-system-publish');

    if (!matchesFile(paths.targetDesign, newState.design.sha256)
      || !matchesDirectory(paths.targetSystem, newState.system.sha256)) {
      throw new Error('published project package readback failed');
    }
    updateJournal(journal, paths, 'readback-verified');
    maybeInjectFailure('after-readback');

    fs.renameSync(paths.stagedReport, paths.targetReport);
    updateJournal(journal, paths, 'report-published');
    maybeInjectFailure('after-report-publish');
    if (!matchesFile(paths.targetReport, reportSha256)) {
      throw new Error('project adoption report readback failed');
    }

    updateJournal(journal, paths, 'verified');
    finalizeTransaction(journal, paths);
    return report;
  } catch (error) {
    if (journal) {
      if (journal.state === 'verified') throw error;
      try {
        rollbackTransaction(journal, paths);
      } catch (rollbackError) {
        throw new Error(`${error instanceof Error ? error.message : String(error)}; rollback blocked: ${rollbackError instanceof Error ? rollbackError.message : String(rollbackError)}`);
      }
    } else if (existsByLstat(paths.workspace)) {
      cleanupWorkspace(paths);
      if (!reportDirectoryExisted) removeDirectoryIfEmpty(paths.reportDirectory);
      if (!omdParentExisted) removeDirectoryIfEmpty(omdParent);
    }
    throw error;
  }
}

function requiredValue(argv, index, flag) {
  const value = argv[index + 1];
  if (!value || value.startsWith('-')) throw new Error(`${flag} requires a value`);
  return value;
}

function parseArgs(argv) {
  const options = {
    packageRoot: null,
    projectRoot: null,
    checkpointReceipt: null,
    prepareCheckpoint: null,
    reviewer: null,
    authorityTransitionApproved: false,
    help: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === '--project-root') {
      options.projectRoot = requiredValue(argv, index, '--project-root');
      index += 1;
    } else if (value === '--checkpoint-receipt') {
      options.checkpointReceipt = requiredValue(argv, index, '--checkpoint-receipt');
      index += 1;
    } else if (value === '--prepare-checkpoint') {
      options.prepareCheckpoint = requiredValue(argv, index, '--prepare-checkpoint');
      index += 1;
    } else if (value === '--reviewer') {
      options.reviewer = requiredValue(argv, index, '--reviewer');
      index += 1;
    } else if (value === '--authority-transition-approved') {
      options.authorityTransitionApproved = true;
    } else if (value === '--help' || value === '-h') {
      options.help = true;
    } else if (value.startsWith('-')) {
      throw new Error(`unknown option: ${value}`);
    } else if (!options.packageRoot) {
      options.packageRoot = value;
    } else {
      throw new Error(`unexpected argument: ${value}`);
    }
  }
  return options;
}

function help() {
  return [
    'Usage: adopt-design-md-core <compiled-package-dir> --project-root <dir> --checkpoint-receipt <json>',
    '       adopt-design-md-core <compiled-package-dir> --prepare-checkpoint <fresh-json> --reviewer <id> --authority-transition-approved',
    '',
    'Installs one compiler-produced Portable Core package into a project only',
    'after an identified project-owner checkpoint receipt approves the exact six',
    'source artifact hashes. No provider, model, browser, or network is executed.',
    '',
    `Checkpoint kind: ${CHECKPOINT_KIND}`,
    'The checkpoint contains a deterministic approval-required request and an',
    'attestation whose request_sha256 binds the owner decision to that request.',
    'The request binds the immutable package tree and source_package with',
    'design_md_sha256, graph_sha256, provenance_sha256, coverage_sha256,',
    'manifest_sha256, adoption_receipt_sha256.',
    '',
    'Checkpoint preparation validates the immutable compiled package, derives',
    'the request, and writes its owner attestation atomically to a fresh regular',
    'file. It requires both an',
    'identified project-owner reviewer and --authority-transition-approved; it',
    'does not mutate a project or execute any provider.',
    'The reviewer identifier is an attestation, not cryptographic identity',
    'authentication; external policy or signatures are required for that.',
    '',
    'The destination DESIGN.md and .omd/system are published with a durable',
    'transaction journal and deterministic rollback. Success prints one JSON',
    'report and stores the same receipt under .omd/adoptions/<transaction>.json.',
  ].join('\n');
}

function run(argv = process.argv.slice(2)) {
  try {
    const options = parseArgs(argv);
    if (options.help) {
      process.stdout.write(`${help()}\n`);
      return 0;
    }
    if (!options.packageRoot) throw new Error('compiled package directory is required');
    if (options.prepareCheckpoint) {
      if (process.env.OMD_AUTHORITY_CONTROLLER_RECEIPT
        && process.env.OMD_AUTHORITY_CONTROLLER_INTERNAL_SHA256 !== process.env.OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256) {
        throw new Error('controller-bound checkpoint must be issued by activate-autopilot-design-system.cjs; main-agent self-attestation is forbidden');
      }
      if (options.projectRoot || options.checkpointReceipt) {
        throw new Error('--prepare-checkpoint cannot be combined with project adoption options');
      }
      if (!options.reviewer) throw new Error('--reviewer <id> is required to prepare a checkpoint');
      if (!options.authorityTransitionApproved) {
        throw new Error('--authority-transition-approved is required to prepare an approved checkpoint');
      }
      const pkg = loadPackage(options.packageRoot);
      validatePackage(pkg);
      const result = prepareCheckpoint(pkg, options.prepareCheckpoint, options.reviewer);
      process.stdout.write(jsonBytes(result));
      return 0;
    }
    if (options.reviewer || options.authorityTransitionApproved) {
      throw new Error('--reviewer and --authority-transition-approved are only valid with --prepare-checkpoint');
    }
    if (!options.projectRoot) throw new Error('--project-root <dir> is required');
    if (!options.checkpointReceipt) throw new Error('--checkpoint-receipt <json> is required');
    const report = adoptPackage(options.packageRoot, options.projectRoot, options.checkpointReceipt);
    process.stdout.write(jsonBytes(report));
    return 0;
  } catch (error) {
    process.stderr.write(`design-md adopt: ${error instanceof Error ? error.message : String(error)}\n`);
    return 1;
  }
}

if (require.main === module) process.exitCode = run();

module.exports = {
  CHECKPOINT_KIND,
  PACKAGE_FILES,
  REPORT_KIND,
  adoptPackage,
  createCheckpointReceipt,
  createCheckpointRequest,
  expectedPackageHashes,
  loadPackage,
  prepareCheckpoint,
  recoverInterruptedTransaction,
  run,
  transactionPaths,
  validateCheckpoint,
  validatePackage,
};
