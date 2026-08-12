#!/usr/bin/env node
// Dependency-free JSON Schema subset used by every Core v2 authority gate.
// The supported vocabulary is intentionally limited to the keywords used by
// spec/schema/design-*-v2.schema.json and fails closed on malformed schemas.

const fs = require('node:fs');
const path = require('node:path');

const repositoryRoot = path.resolve(__dirname, '..');

function resolveSchemaFile(name) {
  const candidates = [
    path.join(__dirname, 'schema', name),
    path.join(__dirname, '..', 'spec', 'schema', name),
    path.join(repositoryRoot, 'spec', 'schema', name),
  ];
  const file = candidates.find((candidate) => fs.existsSync(candidate));
  if (!file) throw new Error(`Core v2 schema asset missing: ${name}`);
  return file;
}

const manifestSchemaPath = resolveSchemaFile('design-md-core-manifest-v2.schema.json');
const graphSchemaPath = resolveSchemaFile('design-system-graph-v2.schema.json');
const provenanceSchemaPath = resolveSchemaFile('design-system-provenance-v2.schema.json');
const coverageSchemaPath = resolveSchemaFile('design-system-coverage-v2.schema.json');
const adoptionReviewSchemaPath = resolveSchemaFile('design-md-core-adoption-review-v2.schema.json');
const adoptionReceiptSchemaPath = resolveSchemaFile('design-md-core-adoption-receipt-v2.schema.json');
const projectCheckpointSchemaPath = resolveSchemaFile('design-md-core-project-checkpoint-v2.schema.json');

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function pointerJoin(pointer, segment) {
  const encoded = String(segment).replace(/~/g, '~0').replace(/\//g, '~1');
  return `${pointer}/${encoded}`;
}

function resolveLocalRef(rootSchema, reference) {
  if (typeof reference !== 'string' || !reference.startsWith('#/')) return null;
  return reference.slice(2).split('/').reduce((node, segment) => {
    if (!isObject(node)) return undefined;
    const decoded = segment.replace(/~1/g, '/').replace(/~0/g, '~');
    return node[decoded];
  }, rootSchema);
}

function deepEqual(first, second) {
  return JSON.stringify(first) === JSON.stringify(second);
}

// A resolved semantic value cannot be a placeholder written in one of Core's
// supported authoring locales. Keep this grammar anchored to the whole typed
// value: words such as "unresolved" remain valid inside explanatory policy
// prose, while exact/decorated placeholders such as "TBD later" do not become
// facts. Identifiers, paths, hashes, and opaque extensions never call this
// predicate.
const unresolvedSemanticMarker = String.raw`(?:fill(?:\s|_|-)*in|todo|tbd|unknown|unresolved|not(?:\s|_|-)*specified|미확정|미정|알\s*수\s*없음|未確定|未确定|尚未確定|尚未确定|未定|不明|未知|未指定|待定)`;
const unresolvedSemanticDecoration = String.raw`(?:\s*(?::|：|—|–|-)\s*.*|\s*\([^)]*\)|\s+(?:later|pending|placeholder|deferred|unconfirmed|undecided|awaiting(?:\s+(?:input|review|confirmation|decision))?|to\s+be\s+(?:decided|defined|confirmed|specified|determined)|owner\s+input(?:\s+required)?|추후(?:\s+(?:결정|확인|지정))?|대기(?:\s*중)?|확인\s*(?:필요|대기|중)|결정\s*(?:필요|대기|중)|後日(?:\s*(?:決定|確認))?|確認待ち|保留|待確認|待确认|稍後(?:確認|決定)?|稍后(?:确认|决定)?))`;
const unresolvedSemanticSentinel = new RegExp(
  String.raw`^(?:\[\s*${unresolvedSemanticMarker}[^\]]*\]|${unresolvedSemanticMarker}(?:${unresolvedSemanticDecoration})?)$`,
  'iu',
);

function isResolvedSemanticValue(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') {
    const normalized = value.trim();
    return normalized.length > 0 && !unresolvedSemanticSentinel.test(normalized);
  }
  if (typeof value === 'number') return Number.isFinite(value);
  if (typeof value === 'boolean') return true;
  if (Array.isArray(value)) return value.length > 0 && value.every(isResolvedSemanticValue);
  if (isObject(value)) {
    const entries = Object.entries(value);
    return entries.length > 0 && entries.every(([, child]) => isResolvedSemanticValue(child));
  }
  return false;
}

const isResolvedTokenValue = isResolvedSemanticValue;

function isResolvedSemanticText(value) {
  return typeof value === 'string'
    && value.trim().length > 0
    && !unresolvedSemanticSentinel.test(value.trim());
}

function typeMatches(type, value) {
  if (type === 'object') return isObject(value);
  if (type === 'array') return Array.isArray(value);
  if (type === 'integer') return Number.isInteger(value);
  if (type === 'number') return typeof value === 'number' && Number.isFinite(value);
  if (type === 'string') return typeof value === 'string';
  if (type === 'boolean') return typeof value === 'boolean';
  if (type === 'null') return value === null;
  return false;
}

function validateNode(schema, value, rootSchema, pointer = '') {
  if (!isObject(schema)) return [{ path: pointer || '/', keyword: 'schema', message: 'schema node must be an object' }];
  if (schema.$ref) {
    const target = resolveLocalRef(rootSchema, schema.$ref);
    if (!target) return [{ path: pointer || '/', keyword: '$ref', message: `unresolved local reference: ${schema.$ref}` }];
    return validateNode(target, value, rootSchema, pointer);
  }

  const errors = [];
  const add = (keyword, message, at = pointer) => errors.push({ path: at || '/', keyword, message });

  if (schema.allOf) {
    for (const branch of schema.allOf) errors.push(...validateNode(branch, value, rootSchema, pointer));
  }
  if (schema.anyOf) {
    const branches = schema.anyOf.map((branch) => validateNode(branch, value, rootSchema, pointer));
    if (!branches.some((branch) => branch.length === 0)) add('anyOf', 'value matches no allowed schema');
  }
  if (schema.not && validateNode(schema.not, value, rootSchema, pointer).length === 0) {
    add('not', 'value matches a forbidden schema');
  }
  if (schema.if) {
    const conditionMatches = validateNode(schema.if, value, rootSchema, pointer).length === 0;
    if (conditionMatches && schema.then) {
      errors.push(...validateNode(schema.then, value, rootSchema, pointer));
    } else if (!conditionMatches && schema.else) {
      errors.push(...validateNode(schema.else, value, rootSchema, pointer));
    }
  }
  if (Object.hasOwn(schema, 'const') && !deepEqual(value, schema.const)) add('const', 'value differs from required constant');
  if (Array.isArray(schema.enum) && !schema.enum.some((candidate) => deepEqual(candidate, value))) add('enum', 'value is not in the allowed set');
  if (schema.type && !typeMatches(schema.type, value)) {
    add('type', `expected ${schema.type}`);
    return errors;
  }

  if (typeof value === 'string') {
    if (Number.isInteger(schema.minLength) && value.length < schema.minLength) add('minLength', `minimum length is ${schema.minLength}`);
    if (schema.pattern) {
      let expression;
      try { expression = new RegExp(schema.pattern, 'u'); } catch { add('pattern', 'schema pattern is invalid'); }
      if (expression && !expression.test(value)) add('pattern', `value does not match ${schema.pattern}`);
    }
  }
  if (typeof value === 'number') {
    if (typeof schema.minimum === 'number' && value < schema.minimum) add('minimum', `minimum is ${schema.minimum}`);
    if (typeof schema.maximum === 'number' && value > schema.maximum) add('maximum', `maximum is ${schema.maximum}`);
  }
  if (Array.isArray(value)) {
    if (Number.isInteger(schema.minItems) && value.length < schema.minItems) add('minItems', `minimum items is ${schema.minItems}`);
    if (schema.uniqueItems === true) {
      const serialized = value.map((item) => JSON.stringify(item));
      if (new Set(serialized).size !== serialized.length) add('uniqueItems', 'array items must be unique');
    }
    if (schema.items) value.forEach((item, index) => errors.push(...validateNode(schema.items, item, rootSchema, pointerJoin(pointer, index))));
  }
  if (isObject(value)) {
    if (Number.isInteger(schema.minProperties) && Object.keys(value).length < schema.minProperties) add('minProperties', `minimum properties is ${schema.minProperties}`);
    for (const required of schema.required || []) {
      if (!Object.hasOwn(value, required)) add('required', `missing required property: ${required}`, pointerJoin(pointer, required));
    }
    const declared = isObject(schema.properties) ? schema.properties : {};
    for (const [key, item] of Object.entries(value)) {
      if (schema.propertyNames) errors.push(...validateNode(schema.propertyNames, key, rootSchema, pointerJoin(pointer, key)));
      if (Object.hasOwn(declared, key)) {
        errors.push(...validateNode(declared[key], item, rootSchema, pointerJoin(pointer, key)));
      } else if (schema.additionalProperties === false) {
        add('additionalProperties', `unknown property: ${key}`, pointerJoin(pointer, key));
      } else if (isObject(schema.additionalProperties)) {
        errors.push(...validateNode(schema.additionalProperties, item, rootSchema, pointerJoin(pointer, key)));
      }
    }
  }
  return errors;
}

function loadSchema(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

const manifestSchema = loadSchema(manifestSchemaPath);
const graphSchema = loadSchema(graphSchemaPath);
const provenanceSchema = loadSchema(provenanceSchemaPath);
const coverageSchema = loadSchema(coverageSchemaPath);
const adoptionReviewSchema = loadSchema(adoptionReviewSchemaPath);
const adoptionReceiptSchema = loadSchema(adoptionReceiptSchemaPath);
const projectCheckpointSchema = loadSchema(projectCheckpointSchemaPath);

function validateAgainstSchema(schema, value) {
  return validateNode(schema, value, schema);
}

function validateCoreManifest(value) {
  return validateAgainstSchema(manifestSchema, value);
}

function validateCoreProvenance(value) {
  return validateAgainstSchema(provenanceSchema, value);
}

function validateCoreCoverage(value) {
  return validateAgainstSchema(coverageSchema, value);
}

function validateCoreAdoptionReview(value) {
  return validateAgainstSchema(adoptionReviewSchema, value);
}

function validateCoreAdoptionReceipt(value) {
  return validateAgainstSchema(adoptionReceiptSchema, value);
}

function validateCoreProjectCheckpoint(value) {
  return validateAgainstSchema(projectCheckpointSchema, value);
}

const canonicalComponentStates = Object.freeze([
  'default',
  'hover',
  'focus-visible',
  'disabled',
  'loading',
  'error',
  'success',
]);

function validateCoreComponentStateCoverage(value) {
  const findings = [];
  const components = value?.components_states?.components;
  const add = (pathValue, message) => findings.push({
    path: pathValue,
    keyword: 'componentStateCoverage',
    message,
  });
  if (!Array.isArray(components) || components.length === 0) {
    add('/components_states/components', 'component-contract-required');
    return findings;
  }

  for (const [index, component] of components.entries()) {
    const pointer = `/components_states/components/${index}`;
    const id = typeof component?.id === 'string' && component.id.trim()
      ? component.id
      : `index-${index}`;
    const interaction = component?.interaction;
    if (!isObject(interaction)) {
      add(`${pointer}/interaction`, `interaction-model-missing:${id}`);
      continue;
    }
    if (!['interactive', 'non-interactive'].includes(interaction.kind)) {
      add(`${pointer}/interaction/kind`, `interaction-kind-invalid:${id}`);
      continue;
    }
    if (interaction.kind === 'non-interactive') {
      if (!isResolvedSemanticText(interaction.reason)) {
        add(`${pointer}/interaction/reason`, `non-interactive-reason-missing:${id}`);
      }
      if (Object.hasOwn(interaction, 'state_applicability')) {
        add(`${pointer}/interaction/state_applicability`, `non-interactive-state-contract-forbidden:${id}`);
      }
      continue;
    }

    const contract = interaction.state_applicability;
    if (!isObject(contract)) {
      add(`${pointer}/interaction/state_applicability`, `interactive-state-contract-missing:${id}`);
      continue;
    }
    const declaredStates = new Set(Array.isArray(component.states) ? component.states : []);
    for (const state of canonicalComponentStates) {
      const disposition = contract[state];
      const statePointer = `${pointer}/interaction/state_applicability/${state}`;
      if (!isObject(disposition)) {
        add(statePointer, `state-applicability-missing:${id}:${state}`);
        continue;
      }
      if (!['applicable', 'not-applicable'].includes(disposition.applicability)) {
        add(`${statePointer}/applicability`, `state-applicability-invalid:${id}:${state}`);
        continue;
      }
      if (disposition.applicability === 'not-applicable') {
        if (!isResolvedSemanticText(disposition.reason)) {
          add(`${statePointer}/reason`, `not-applicable-reason-missing:${id}:${state}`);
        }
        if (declaredStates.has(state)) {
          add(statePointer, `not-applicable-state-declared:${id}:${state}`);
        }
      } else if (!declaredStates.has(state)) {
        add(statePointer, `applicable-state-missing:${id}:${state}`);
      }
    }
    for (const state of ['default', 'focus-visible']) {
      if (contract[state]?.applicability !== 'applicable') {
        add(
          `${pointer}/interaction/state_applicability/${state}`,
          `required-interactive-state-not-applicable:${id}:${state}`,
        );
      }
    }
  }
  return findings;
}

function validateCoreGraph(value, options = {}) {
  const findings = validateAgainstSchema(graphSchema, value);
  for (const [tokenId, token] of Object.entries(value?.foundations?.tokens ?? {})) {
    if (!isResolvedTokenValue(token?.$value)) {
      findings.push({
        path: `/foundations/tokens/${String(tokenId).replace(/~/g, '~0').replace(/\//g, '~1')}/$value`,
        keyword: 'resolvedTokenValue',
        message: 'token value must be resolved, non-empty, and free of unknown placeholders',
      });
    }
  }
  for (const [index, decision] of (value?.governance?.decisions ?? []).entries()) {
    if (decision?.source_class !== 'unresolved'
      && Object.hasOwn(decision ?? {}, 'value')
      && !isResolvedSemanticValue(decision.value)) {
      findings.push({
        path: `/governance/decisions/${index}/value`,
        keyword: 'resolvedSemanticValue',
        message: 'decision value must be resolved, non-empty, and free of unknown placeholders',
      });
    }
  }
  if (options.requireComponentStateCoverage === true) {
    findings.push(...validateCoreComponentStateCoverage(value));
  }
  return findings;
}

module.exports = {
  adoptionReceiptSchema,
  adoptionReviewSchema,
  coverageSchema,
  graphSchema,
  isResolvedSemanticValue,
  isResolvedTokenValue,
  isResolvedSemanticText,
  manifestSchema,
  projectCheckpointSchema,
  provenanceSchema,
  validateAgainstSchema,
  validateCoreAdoptionReceipt,
  validateCoreAdoptionReview,
  validateCoreCoverage,
  validateCoreComponentStateCoverage,
  validateCoreGraph,
  validateCoreManifest,
  validateCoreProjectCheckpoint,
  validateCoreProvenance,
};
