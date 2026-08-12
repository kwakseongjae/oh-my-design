import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { createRequire } from 'node:module';

const root = resolve(import.meta.dirname, '../../..');
const specPath = resolve(root, 'spec/design-md-core-v2.md');
const manifestSchemaPath = resolve(root, 'spec/schema/design-md-core-manifest-v2.schema.json');
const graphSchemaPath = resolve(root, 'spec/schema/design-system-graph-v2.schema.json');
const fixtureRoot = resolve(root, 'spec/fixtures/design-md-core-v2');
const require = createRequire(import.meta.url);
const coreEngine = require('../../../scripts/design-md-core.cjs');
const { GOVERNANCE_COPY } = require('../../../scripts/design-md-core-conformance.cjs');

const sectionIds = [
  'experience',
  'foundations',
  'typography-assets',
  'components-states',
  'layout-platforms',
  'content-locales',
  'governance',
];

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function validateNode(schema, value, rootSchema, pointer = '$') {
  const failures = [];
  if (schema.$ref) {
    const path = schema.$ref.replace(/^#\//, '').split('/').map((part) => part.replace(/~1/g, '/').replace(/~0/g, '~'));
    let target = rootSchema;
    for (const part of path) target = target?.[part];
    if (!target) return [`${pointer}:unresolved-ref:${schema.$ref}`];
    return validateNode(target, value, rootSchema, pointer);
  }
  for (const branch of schema.allOf ?? []) failures.push(...validateNode(branch, value, rootSchema, pointer));
  if (schema.const !== undefined && JSON.stringify(value) !== JSON.stringify(schema.const)) {
    failures.push(`${pointer}:const`);
  }
  if (schema.enum && !schema.enum.includes(value)) failures.push(`${pointer}:enum`);
  const types = Array.isArray(schema.type) ? schema.type : schema.type ? [schema.type] : [];
  if (types.length > 0) {
    const valid = types.some((type) => (
      (type === 'object' && isObject(value))
      || (type === 'array' && Array.isArray(value))
      || (type === 'string' && typeof value === 'string')
      || (type === 'number' && typeof value === 'number' && Number.isFinite(value))
      || (type === 'integer' && Number.isInteger(value))
      || (type === 'boolean' && typeof value === 'boolean')
    ));
    if (!valid) return [...failures, `${pointer}:type`];
  }
  if (typeof value === 'string') {
    if (schema.minLength !== undefined && value.length < schema.minLength) failures.push(`${pointer}:minLength`);
    if (schema.pattern && !(new RegExp(schema.pattern).test(value))) failures.push(`${pointer}:pattern`);
  }
  if (typeof value === 'number') {
    if (schema.minimum !== undefined && value < schema.minimum) failures.push(`${pointer}:minimum`);
    if (schema.maximum !== undefined && value > schema.maximum) failures.push(`${pointer}:maximum`);
  }
  if (Array.isArray(value)) {
    if (schema.items) value.forEach((item, index) => failures.push(...validateNode(schema.items, item, rootSchema, `${pointer}[${index}]`)));
    if (schema.uniqueItems && new Set(value.map((item) => JSON.stringify(item))).size !== value.length) failures.push(`${pointer}:uniqueItems`);
  }
  if (isObject(value)) {
    for (const required of schema.required ?? []) {
      if (!(required in value)) failures.push(`${pointer}:required:${required}`);
    }
    if (schema.propertyNames?.pattern) {
      const regex = new RegExp(schema.propertyNames.pattern);
      for (const key of Object.keys(value)) if (!regex.test(key)) failures.push(`${pointer}:propertyName:${key}`);
    }
    for (const [key, child] of Object.entries(value)) {
      if (schema.properties?.[key]) {
        failures.push(...validateNode(schema.properties[key], child, rootSchema, `${pointer}.${key}`));
      } else if (isObject(schema.additionalProperties)) {
        failures.push(...validateNode(schema.additionalProperties, child, rootSchema, `${pointer}.${key}`));
      } else if (schema.additionalProperties === false) {
        failures.push(`${pointer}:additional:${key}`);
      }
    }
  }
  if (schema.if && schema.then) {
    const conditionFailures = validateNode(schema.if, value, rootSchema, pointer);
    if (conditionFailures.length === 0) failures.push(...validateNode(schema.then, value, rootSchema, pointer));
  }
  if (schema.not && validateNode(schema.not, value, rootSchema, pointer).length === 0) failures.push(`${pointer}:not`);
  return failures;
}

describe('DESIGN.md Core v2 normative contract', () => {
  it('publishes every localized controlled-governance string in the normative spec', () => {
    const spec = readFileSync(specPath, 'utf8');
    expect(Object.keys(GOVERNANCE_COPY)).toEqual(['en', 'ko', 'ja', 'zh-cn', 'zh-tw']);
    for (const locale of Object.values(GOVERNANCE_COPY)) {
      for (const value of Object.values(locale.authority)) expect(spec).toContain(value);
      for (const value of locale.priority) expect(spec).toContain(value);
      expect(spec).toContain(locale.unknowns);
      expect(spec).toContain(locale.changes);
    }
  });

  it('keeps the portable document vendor-neutral and stable', () => {
    const markdown = readFileSync(resolve(fixtureRoot, 'DESIGN.md'), 'utf8');
    expect(markdown.startsWith('# Atlas Design System\n')).toBe(true);
    expect(markdown.startsWith('---')).toBe(false);
    expect(markdown.slice(0, 300)).not.toMatch(/omd|generator|model|verified[_ -]?v2/i);

    const anchors = [...markdown.matchAll(/<!-- design-md:section ([a-z-]+) -->/g)].map((match) => match[1]);
    expect(anchors).toEqual(sectionIds);
    expect([...markdown.matchAll(/^##\s+\d+\.\s+.+$/gm)]).toHaveLength(7);
  });

  it('publishes schemas with closed core fields and opaque reverse-DNS extensions', () => {
    const manifestSchema = JSON.parse(readFileSync(manifestSchemaPath, 'utf8'));
    const graphSchema = JSON.parse(readFileSync(graphSchemaPath, 'utf8'));
    expect(manifestSchema).toMatchObject({
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      $id: 'https://oh-my-design.kr/schema/design-md-core-manifest-v2.schema.json',
      additionalProperties: false,
    });
    expect(manifestSchema.properties.profile.enum).toEqual(['portable-core', 'migration-candidate']);
    expect(graphSchema).toMatchObject({
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      $id: 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json',
      additionalProperties: false,
    });
    expect(graphSchema.required).toEqual(expect.arrayContaining([
      'experience', 'foundations', 'typography_assets', 'components_states',
      'layout_platforms', 'content_locales', 'governance',
    ]));
    expect(graphSchema.properties.projection.properties.locale.enum)
      .toEqual(['en', 'ko', 'ja', 'zh-cn', 'zh-tw']);
    expect(graphSchema.$defs.extensions.additionalProperties).toBe(true);
    expect(graphSchema.$defs.extensions.propertyNames.pattern).toContain('\\.');
    expect(readFileSync(resolve(root, 'web/public/schema/design-md-core-manifest-v2.schema.json')))
      .toEqual(readFileSync(manifestSchemaPath));
    expect(readFileSync(resolve(root, 'web/public/schema/design-system-graph-v2.schema.json')))
      .toEqual(readFileSync(graphSchemaPath));
  });

  it('validates the normative graph fixture and hash-bound manifest fixture', () => {
    const designBytes = readFileSync(resolve(fixtureRoot, 'DESIGN.md'));
    const graphSchema = JSON.parse(readFileSync(graphSchemaPath, 'utf8'));
    const manifestSchema = JSON.parse(readFileSync(manifestSchemaPath, 'utf8'));
    const graphPath = resolve(fixtureRoot, '.omd/system/graph.json');
    const manifestPath = resolve(fixtureRoot, '.omd/system/manifest.json');
    const graph = JSON.parse(readFileSync(graphPath, 'utf8').replace('__DESIGN_MD_SHA256__', sha256(designBytes)));
    const graphBytes = `${JSON.stringify(graph, null, 2)}\n`;
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')
      .replace('__DESIGN_MD_SHA256__', sha256(designBytes))
      .replace('__GRAPH_SHA256__', sha256(graphBytes)));

    expect(validateNode(graphSchema, graph, graphSchema)).toEqual([]);
    expect(validateNode(manifestSchema, manifest, manifestSchema)).toEqual([]);
    expect(graph.projection.sha256).toBe(manifest.artifacts.design_md.sha256);
    expect(manifest.artifacts.graph.sha256).toBe(sha256(graphBytes));
  });

  it('keeps compiler output inside the published closed schemas', () => {
    const graphSchema = JSON.parse(readFileSync(graphSchemaPath, 'utf8'));
    const manifestSchema = JSON.parse(readFileSync(manifestSchemaPath, 'utf8'));
    const legacy = readFileSync(resolve(root, 'test/fixtures/design-md-core/legacy-15.md'), 'utf8');
    const result = coreEngine.migrateDesignMd(legacy, { sourcePath: '/catalog/acme/DESIGN.md' });

    expect(validateNode(graphSchema, result.graph, graphSchema)).toEqual([]);
    expect(validateNode(manifestSchema, result.manifest, manifestSchema)).toEqual([]);
    expect(result.manifest).toMatchObject({
      profile: 'migration-candidate',
      authority: {
        status: 'non-authoritative',
        canonical: 'source-design-md',
        source_sha256: result.inspection.sourceSha256,
      },
    });
    expect(result.report).toMatchObject({
      status: 'pass',
      dropped_segments: 0,
      unsupported_claims_promoted: null,
      unsupported_claims_review_required: true,
      synthetic_product_values_added: 0,
      projection_roundtrip_equal: true,
      source_reconstruction_equal: true,
    });
  });

  it('profile-binds candidate and adopted authority shapes', () => {
    const schema = JSON.parse(readFileSync(manifestSchemaPath, 'utf8'));
    const legacy = readFileSync(resolve(root, 'test/fixtures/design-md-core/legacy-15.md'), 'utf8');
    const candidate = coreEngine.migrateDesignMd(legacy).manifest;
    const impersonating = {
      ...candidate,
      authority: {
        canonical: 'system-graph',
        graph_path: '.omd/system/graph.json',
        projection_path: 'DESIGN.md',
      },
    };
    expect(validateNode(schema, candidate, schema)).toEqual([]);
    expect(validateNode(schema, impersonating, schema)).not.toEqual([]);

    const fixtureManifest = JSON.parse(readFileSync(resolve(fixtureRoot, '.omd/system/manifest.json'), 'utf8')
      .replace('__DESIGN_MD_SHA256__', '0'.repeat(64))
      .replace('__GRAPH_SHA256__', '0'.repeat(64)));
    expect(fixtureManifest.profile).toBe('portable-core');
    expect(fixtureManifest.authority.canonical).toBe('system-graph');
    expect(validateNode(schema, fixtureManifest, schema)).toEqual([]);

    const adoptedWithSourceAuthority = {
      ...fixtureManifest,
      authority: candidate.authority,
    };
    expect(validateNode(schema, adoptedWithSourceAuthority, schema)).not.toEqual([]);
  });

  it('projects every typed system field into useful standalone Markdown without unknown fallbacks', () => {
    const graph = JSON.parse(readFileSync(resolve(fixtureRoot, '.omd/system/graph.json'), 'utf8'));
    const markdown = coreEngine.renderCore(graph);
    for (const expected of [
      'Review a time-sensitive record', '#2457e6', 'minimum 4.5:1', 'Reduced motion',
      'Product reading text', 'Component: primary-action', 'focus-visible', 'color.action.primary',
      'Minimum supported width: 320px', 'Reflow target: 200% zoom', 'Platform: web',
      'Locale: en (supported)', 'Confirm action', 'Omit only the smallest unresolved value or group.',
      'typography_assets.roles.body.family — unresolved',
    ]) expect(markdown).toContain(expected);
    expect(markdown).not.toMatch(/Not specified|oh-my-design|\bomd\b/i);
    expect(coreEngine.inspectDesignMd(markdown).sourceValidation).toEqual({ valid: true, errors: [] });
  });

  it('allows empty section containers instead of forcing legacy migrations to invent facts', () => {
    const schema = JSON.parse(readFileSync(graphSchemaPath, 'utf8'));
    const graph = {
      $schema: schema.$id,
      schema_version: '2.0.0',
      identity: { name: 'Legacy import', kind: 'portable-brief', scope: 'Imported document' },
      projection: { path: 'DESIGN.md', sha256: '0'.repeat(64) },
      experience: {},
      foundations: {},
      typography_assets: {},
      components_states: {},
      layout_platforms: {},
      content_locales: {},
      governance: {},
    };
    expect(validateNode(schema, graph, schema)).toEqual([]);
    expect(graph.layout_platforms).not.toHaveProperty('minimum_width_px');
    expect(graph.layout_platforms).not.toHaveProperty('reflow_zoom_percent');
  });

  it('forbids a promoted unresolved decision and non-extension root fields', () => {
    const schema = JSON.parse(readFileSync(graphSchemaPath, 'utf8'));
    const graph = JSON.parse(readFileSync(resolve(fixtureRoot, '.omd/system/graph.json'), 'utf8')
      .replace('__DESIGN_MD_SHA256__', '0'.repeat(64)));
    graph.governance.decisions[0].value = 'Inter';
    graph.generator = 'vendor-tool';
    const failures = validateNode(schema, graph, schema);
    expect(failures).toContain('$.governance.decisions[0]:not');
    expect(failures).toContain('$:additional:generator');
  });

  it('makes migration lossless and future writes Core-v2-only', () => {
    const spec = readFileSync(specPath, 'utf8');
    expect(spec).toContain('dual-read, single-write');
    expect(spec).toContain('Automated migration never');
    expect(spec).toContain('`dropped` is empty');
    expect(spec).toContain('preserve unknown `extensions`');
    expect(spec).toContain('Core v2 only');
    expect(spec).toContain('Claude Design, Open Design');
    expect(spec).toContain('does not claim to be an official Google format');
    expect(spec).toContain('compatible import/export profile');
    expect(spec).toContain('Structural recognition and conformance are deliberately separate.');
    expect(spec).toContain('product/surface scope; at least one primary task');
    expect(spec).toContain('`structural-core`');
    expect(spec).toContain('`portable_core: false`');
    expect(spec).toContain('The graph declares the visible document language in `projection.locale`.');
    expect(spec).toContain('it does not translate, transliterate, or normalize the');
    expect(spec).toContain('| `zh-tw` | 體驗 | 基礎 | 字型與資產 |');
  });
});
