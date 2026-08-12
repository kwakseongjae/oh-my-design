import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const compiler = resolve(process.cwd(), 'scripts/compile-design-md-core.cjs');
const reviewTool = resolve(process.cwd(), 'scripts/prepare-design-md-core-review.cjs');
const graphFixture = resolve(process.cwd(), 'spec/fixtures/design-md-core-v2/.omd/system/graph.json');
const schemaRoot = resolve(process.cwd(), 'spec/schema');
const publicSchemaRoot = resolve(process.cwd(), 'web/public/schema');
const adopter = require('../../../scripts/adopt-design-md-core.cjs');
const schemaNames = [
  'design-system-provenance-v2.schema.json',
  'design-system-coverage-v2.schema.json',
  'design-md-core-adoption-review-v2.schema.json',
  'design-md-core-adoption-receipt-v2.schema.json',
  'design-md-core-project-checkpoint-v2.schema.json',
];
const sectionIds = [
  'experience',
  'foundations',
  'typography-assets',
  'components-states',
  'layout-platforms',
  'content-locales',
  'governance',
];
const sectionFragments = {
  experience: '1-experience',
  foundations: '2-foundations',
  'typography-assets': '3-typography-assets',
  'components-states': '4-components-states',
  'layout-platforms': '5-layout-platforms',
  'content-locales': '6-content-locales',
  governance: '7-governance',
};
const checkIds = [
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

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function jsonBytes(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function deepEqual(first, second) {
  return JSON.stringify(first) === JSON.stringify(second);
}

function resolveLocalRef(root, reference) {
  if (!reference.startsWith('#/')) throw new Error(`unsupported non-local test reference: ${reference}`);
  return reference.slice(2).split('/').reduce(
    (value, segment) => value[segment.replace(/~1/g, '/').replace(/~0/g, '~')],
    root,
  );
}

// Ajv 2020 is preferred when the repository provides it. The checked-in test
// helper covers the exact Draft 2020-12 keyword subset used by these schemas so
// the provider-free suite remains runnable in minimal package consumers too.
function compileWithLocalDraft2020Helper(root) {
  const validateNode = (schema, value, instancePath, errors) => {
    if (schema === true) return;
    if (schema === false) {
      errors.push(`${instancePath}: boolean schema rejected value`);
      return;
    }
    if (schema.$ref) {
      validateNode(resolveLocalRef(root, schema.$ref), value, instancePath, errors);
      return;
    }
    if (schema.const !== undefined && !deepEqual(value, schema.const)) {
      errors.push(`${instancePath}: const mismatch`);
    }
    if (schema.enum && !schema.enum.some((candidate) => deepEqual(value, candidate))) {
      errors.push(`${instancePath}: enum mismatch`);
    }
    const typeMatches = {
      object: value !== null && typeof value === 'object' && !Array.isArray(value),
      array: Array.isArray(value),
      string: typeof value === 'string',
      number: typeof value === 'number' && Number.isFinite(value),
      integer: Number.isInteger(value),
      boolean: typeof value === 'boolean',
      null: value === null,
    };
    if (schema.type && !typeMatches[schema.type]) {
      errors.push(`${instancePath}: expected ${schema.type}`);
      return;
    }
    if (schema.anyOf) {
      const accepted = schema.anyOf.some((candidate) => {
        const branchErrors = [];
        validateNode(candidate, value, instancePath, branchErrors);
        return branchErrors.length === 0;
      });
      if (!accepted) errors.push(`${instancePath}: no anyOf branch matched`);
    }
    for (const candidate of schema.allOf ?? []) {
      validateNode(candidate, value, instancePath, errors);
    }
    if (schema.not) {
      const branchErrors = [];
      validateNode(schema.not, value, instancePath, branchErrors);
      if (branchErrors.length === 0) errors.push(`${instancePath}: not schema matched`);
    }
    if (schema.if) {
      const conditionErrors = [];
      validateNode(schema.if, value, instancePath, conditionErrors);
      if (conditionErrors.length === 0 && schema.then) validateNode(schema.then, value, instancePath, errors);
      if (conditionErrors.length > 0 && schema.else) validateNode(schema.else, value, instancePath, errors);
    }
    if (typeof value === 'string') {
      if (schema.minLength !== undefined && value.length < schema.minLength) {
        errors.push(`${instancePath}: minLength`);
      }
      if (schema.pattern && !(new RegExp(schema.pattern, 'u')).test(value)) {
        errors.push(`${instancePath}: pattern mismatch`);
      }
    }
    if (Array.isArray(value)) {
      if (schema.minItems !== undefined && value.length < schema.minItems) {
        errors.push(`${instancePath}: minItems`);
      }
      if (schema.uniqueItems) {
        const keys = value.map((item) => JSON.stringify(item));
        if (new Set(keys).size !== keys.length) errors.push(`${instancePath}: uniqueItems`);
      }
      if (schema.items) {
        value.forEach((item, index) => validateNode(schema.items, item, `${instancePath}/${index}`, errors));
      }
    }
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      const properties = schema.properties ?? {};
      for (const required of schema.required ?? []) {
        if (!Object.hasOwn(value, required)) errors.push(`${instancePath}: missing ${required}`);
      }
      if (schema.minProperties !== undefined && Object.keys(value).length < schema.minProperties) {
        errors.push(`${instancePath}: minProperties`);
      }
      for (const [key, item] of Object.entries(value)) {
        if (Object.hasOwn(properties, key)) {
          validateNode(properties[key], item, `${instancePath}/${key}`, errors);
        } else if (schema.additionalProperties === false) {
          errors.push(`${instancePath}: additional property ${key}`);
        } else if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
          validateNode(schema.additionalProperties, item, `${instancePath}/${key}`, errors);
        }
      }
    }
  };
  const validator = (value) => {
    const errors = [];
    validateNode(root, value, '#', errors);
    validator.errors = errors;
    return errors.length === 0;
  };
  validator.errors = [];
  return validator;
}

function compileSchema(schema) {
  try {
    const Ajv2020Module = require('ajv/dist/2020');
    const Ajv2020 = Ajv2020Module.default ?? Ajv2020Module;
    const ajv = new Ajv2020({ allErrors: true, strict: false });
    return ajv.compile(schema);
  } catch (error) {
    if (error?.code !== 'MODULE_NOT_FOUND' && !String(error).includes("Cannot find module 'ajv/dist/2020'")) {
      throw error;
    }
    return compileWithLocalDraft2020Helper(schema);
  }
}

function readSchemas() {
  return Object.fromEntries(schemaNames.map((name) => {
    const bytes = readFileSync(join(schemaRoot, name), 'utf8');
    return [name, { bytes, schema: JSON.parse(bytes) }];
  }));
}

function compileProviderFreePackage(root) {
  const inputRoot = join(root, 'inputs');
  const packageRoot = join(root, 'compiled-package');
  mkdirSync(inputRoot, { recursive: true });
  const graph = JSON.parse(readFileSync(graphFixture, 'utf8'));
  graph.projection.sha256 = '0'.repeat(64);
  graph.governance.decisions[0].path = 'typography_assets.roles.0.family';
  delete graph.extensions;
  const provenance = {
    schema_version: '2.0.0',
    decisions: [{
      path: 'typography_assets.roles.0.family',
      source_class: 'unresolved',
      evidence: [],
    }],
  };
  const coverage = {
    schema_version: '2.0.0',
    groups: Object.fromEntries(sectionIds.map((id) => [id, {
      status: 'covered',
      evidence: [`DESIGN.md#${sectionFragments[id]}`],
    }])),
    checks: Object.fromEntries(checkIds.map((id) => [id, {
      pass: true,
      method: 'controller-computed-system-graph-v2',
    }])),
  };
  const graphBytes = jsonBytes(graph);
  const provenanceBytes = jsonBytes(provenance);
  const coverageBytes = jsonBytes(coverage);
  const reviewRoot = join(inputRoot, 'review-bundle');
  const paths = {
    graph: join(inputRoot, 'graph.json'),
    provenance: join(inputRoot, 'provenance.json'),
    coverage: join(inputRoot, 'coverage.json'),
    review: join(inputRoot, 'review.json'),
  };
  writeFileSync(paths.graph, graphBytes);
  writeFileSync(paths.provenance, provenanceBytes);
  writeFileSync(paths.coverage, coverageBytes);
  let result = spawnSync(process.execPath, [
    reviewTool, paths.graph,
    '--provenance', paths.provenance,
    '--coverage', paths.coverage,
    '--out-dir', reviewRoot,
  ], { encoding: 'utf8' });
  expect(result.status, `${result.stderr}\n${result.stdout}`).toBe(0);
  result = spawnSync(process.execPath, [
    reviewTool,
    '--approve', join(reviewRoot, 'review-request.json'),
    '--reviewer', 'owner@example.test',
    '--out', paths.review,
    '--authority-transition-approved',
  ], { encoding: 'utf8' });
  expect(result.status, `${result.stderr}\n${result.stdout}`).toBe(0);
  const review = JSON.parse(readFileSync(paths.review, 'utf8'));
  result = spawnSync(process.execPath, [
    compiler,
    join(reviewRoot, 'input-graph.json'),
    '--provenance', join(reviewRoot, 'provenance.json'),
    '--coverage', join(reviewRoot, 'coverage.json'),
    '--review-receipt', paths.review,
    '--out-dir', packageRoot,
    '--adopt',
  ], { encoding: 'utf8' });
  expect(result.status, `${result.stderr}\n${result.stdout}`).toBe(0);
  const pkg = adopter.loadPackage(packageRoot);
  return {
    provenance: pkg.provenance.value,
    coverage: pkg.coverage.value,
    review,
    adoptionReceipt: pkg.adoptionReceipt.value,
    checkpoint: adopter.createCheckpointReceipt(pkg, 'owner@example.test'),
  };
}

function expectValid(validator, value) {
  expect(validator(value), JSON.stringify(validator.errors, null, 2)).toBe(true);
}

function expectInvalid(validator, value) {
  expect(validator(value), 'malformed proof artifact unexpectedly passed').toBe(false);
}

let root;
let schemas;
let validators;
let artifacts;

beforeAll(() => {
  root = mkdtempSync(join(tmpdir(), 'omd-core-proof-schema-'));
  schemas = readSchemas();
  validators = Object.fromEntries(Object.entries(schemas).map(([name, entry]) => [
    name,
    compileSchema(entry.schema),
  ]));
  artifacts = compileProviderFreePackage(root);
});

afterAll(() => {
  if (root) rmSync(root, { recursive: true, force: true });
});

describe('DESIGN.md Core v2 proof schemas', () => {
  it('publishes stable Draft 2020-12 identities with exact-byte public mirrors', () => {
    for (const name of schemaNames) {
      const { bytes, schema } = schemas[name];
      expect(schema.$schema).toBe('https://json-schema.org/draft/2020-12/schema');
      expect(schema.$id).toBe(`https://oh-my-design.kr/schema/${name}`);
      expect(readFileSync(join(publicSchemaRoot, name), 'utf8')).toBe(bytes);
    }
    expect(schemas['design-system-provenance-v2.schema.json'].schema.title).not.toContain('Oh My Design');
    expect(schemas['design-system-coverage-v2.schema.json'].schema.title).not.toContain('Oh My Design');
    for (const name of schemaNames.slice(2)) {
      expect(schemas[name].schema.title).toContain('OmD Proof Profile');
      expect(schemas[name].schema.description).toContain('not part of the vendor-neutral Core document format');
    }
  });

  it('accepts real provider-free compiler outputs and an adopter-generated checkpoint', () => {
    expectValid(validators['design-system-provenance-v2.schema.json'], artifacts.provenance);
    expectValid(validators['design-system-coverage-v2.schema.json'], artifacts.coverage);
    expectValid(validators['design-md-core-adoption-review-v2.schema.json'], artifacts.review);
    expectValid(validators['design-md-core-adoption-receipt-v2.schema.json'], artifacts.adoptionReceipt);
    expectValid(validators['design-md-core-project-checkpoint-v2.schema.json'], artifacts.checkpoint);
  });

  it('accepts only the exact enriched review shape produced by the review preparer', () => {
    expectValid(validators['design-md-core-adoption-review-v2.schema.json'], artifacts.review);
    const incomplete = clone(artifacts.review);
    delete incomplete.review_request;
    expectInvalid(validators['design-md-core-adoption-review-v2.schema.json'], incomplete);
  });

  it('rejects extra keys, unresolved values, sentinels, and neutral or malformed bindings', () => {
    const provenanceValidator = validators['design-system-provenance-v2.schema.json'];
    let value = clone(artifacts.provenance);
    value.extra = true;
    expectInvalid(provenanceValidator, value);
    value = clone(artifacts.provenance);
    value.decisions[0].value = '[FILL IN]';
    expectInvalid(provenanceValidator, value);
    for (const sentinel of ['미정', '미확정', '알 수 없음', '未確定', '未定', '不明', '未知', '未确定', '未指定', '待定', 'TBD later', 'unknown pending']) {
      value = clone(artifacts.provenance);
      value.decisions[0].value = sentinel;
      expectInvalid(provenanceValidator, value);
    }
    value = clone(artifacts.provenance);
    value.decisions[0].path = '/legacy/미정/未確定';
    value.decisions[0].evidence = ['evidence/unknown pending.json'];
    expectValid(provenanceValidator, value);
    value = clone(artifacts.provenance);
    value.design_md_sha256 = '0'.repeat(64);
    expectInvalid(provenanceValidator, value);
    value = clone(artifacts.provenance);
    value.graph_sha256 = 'A'.repeat(64);
    expectInvalid(provenanceValidator, value);

    const coverageValidator = validators['design-system-coverage-v2.schema.json'];
    value = clone(artifacts.coverage);
    delete value.groups.governance;
    expectInvalid(coverageValidator, value);
    value = clone(artifacts.coverage);
    value.groups.experience.reason = '[TODO]';
    expectInvalid(coverageValidator, value);
    for (const sentinel of ['미정', '未確定', '未定', '不明', '未知', '未确定', '未指定', '待定', 'TBD later', 'unknown pending']) {
      value = clone(artifacts.coverage);
      value.groups.experience = { status: 'not-applicable', evidence: ['evidence/unknown pending.json'], reason: sentinel };
      expectInvalid(coverageValidator, value);
    }
    value = clone(artifacts.coverage);
    value.checks.contrast.method = 'agent-asserted';
    expectInvalid(coverageValidator, value);
    value = clone(artifacts.coverage);
    value.checks.extra = { pass: true, method: 'controller-computed-system-graph-v2' };
    expectInvalid(coverageValidator, value);
  });

  it('rejects malformed, incomplete, and falsely scoped OmD receipts', () => {
    const reviewValidator = validators['design-md-core-adoption-review-v2.schema.json'];
    let value = clone(artifacts.review);
    value.reviewer.identifier = '[FILL IN]';
    expectInvalid(reviewValidator, value);
    value = clone(artifacts.review);
    value.inputs.graph_sha256 = '0'.repeat(64);
    expectInvalid(reviewValidator, value);
    value = clone(artifacts.review);
    value.migration_review = {
      source_sha256: 'a'.repeat(64),
      candidate_graph_sha256: 'b'.repeat(64),
      candidate_design_md_sha256: 'c'.repeat(64),
      dropped_segments: 0,
      source_reconstruction_equal: true,
      unsupported_claims_reviewed: true,
      unsupported_claims_approved: true,
    };
    expectInvalid(reviewValidator, value);

    const receiptValidator = validators['design-md-core-adoption-receipt-v2.schema.json'];
    value = clone(artifacts.adoptionReceipt);
    value.outputs.graph.path = 'graph.json';
    expectInvalid(receiptValidator, value);
    value = clone(artifacts.adoptionReceipt);
    delete value.outputs.manifest;
    expectInvalid(receiptValidator, value);
    value = clone(artifacts.adoptionReceipt);
    value.extra = true;
    expectInvalid(receiptValidator, value);

    const checkpointValidator = validators['design-md-core-project-checkpoint-v2.schema.json'];
    value = clone(artifacts.checkpoint);
    delete value.request.source_package.adoption_receipt_sha256;
    expectInvalid(checkpointValidator, value);
    value = clone(artifacts.checkpoint);
    value.request.source_package.manifest_sha256 = '0'.repeat(64);
    expectInvalid(checkpointValidator, value);
    value = clone(artifacts.checkpoint);
    value.request.source_package.seventh_artifact_sha256 = 'a'.repeat(64);
    expectInvalid(checkpointValidator, value);
  });
});
