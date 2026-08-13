import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const core = require('../../../scripts/design-md-core.cjs');
const bridge = require('../../../scripts/rebind-design-md-core-migration.cjs');
const review = require('../../../scripts/prepare-design-md-core-review.cjs');

const roots: string[] = [];
const sectionIds = ['experience', 'foundations', 'typography-assets', 'components-states', 'layout-platforms', 'content-locales', 'governance'];
const checkIds = ['portable_core_structure', 'bound_system_authority', 'token_reference_closure', 'contrast', 'component_state_coverage', 'responsive_320_200', 'reduced_motion', 'assets_fonts_licenses', 'implementation_contract_complete', 'unknown_absence', 'opaque_extension_preservation'];

function tempRoot() {
  const root = mkdtempSync(join(tmpdir(), 'omd-rebind-migration-'));
  roots.push(root);
  return root;
}

function json(value: unknown) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function coverage() {
  return {
    schema_version: '2.0.0',
    groups: Object.fromEntries(sectionIds.map((id) => [id, { status: 'covered', evidence: [`DESIGN.md#${id}`] }])),
    checks: Object.fromEntries(checkIds.map((id) => [id, { pass: true, method: 'controller-computed-system-graph-v2' }])),
  };
}

function prepareInputs(root: string) {
  const candidateDir = join(root, 'candidate');
  const source = readFileSync(join(process.cwd(), 'test/fixtures/design-md-core/legacy-15.md'), 'utf8');
  const migrated = core.migrateDesignMd(source, { sourcePath: 'DESIGN.md' });
  core.writeMigrationResult(migrated, candidateDir);
  const graph = JSON.parse(readFileSync(join(candidateDir, '.omd/system/graph.json'), 'utf8'));
  graph.identity.kind = 'project-system';
  graph.identity.scope = 'The oh-my-design CLI and Builder reference handoff surfaces.';
  graph.experience.primary_tasks = ['Select a reference, inspect the exact preview, and hand it to an AI coding agent.'];
  graph.governance.priority = ['Explicit user instructions', 'Repository facts', 'Reviewed project decisions'];
  graph.governance.change_policy = ['Changes require an exact preview review and a recorded project-owner approval.'];
  graph.governance.decisions = [{
    path: 'experience.primary_tasks.0',
    source_class: 'repository-fact',
    value: graph.experience.primary_tasks[0],
    evidence: ['README.md#start-here'],
  }];
  const graphPath = join(root, 'enriched-graph.json');
  const provenancePath = join(root, 'provenance.json');
  const coveragePath = join(root, 'coverage.json');
  writeFileSync(graphPath, json(graph));
  writeFileSync(provenancePath, json({ schema_version: '2.0.0', decisions: graph.governance.decisions }));
  writeFileSync(coveragePath, json(coverage()));
  return { candidateDir, graphPath, provenancePath, coveragePath, graph };
}

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('migration rebind bridge', () => {
  it('preserves the opaque ledger and emits prepare-review consumable non-authoritative inputs', () => {
    const root = tempRoot();
    const inputs = prepareInputs(root);
    const output = join(root, 'rebound');
    const originalReport = readFileSync(join(inputs.candidateDir, 'migration-report.json'), 'utf8');
    expect(bridge.run([
      '--candidate-dir', inputs.candidateDir,
      '--graph', inputs.graphPath,
      '--provenance', inputs.provenancePath,
      '--coverage', inputs.coveragePath,
      '--out-dir', output,
    ])).toBe(0);
    expect(readFileSync(join(inputs.candidateDir, 'migration-report.json'), 'utf8')).toBe(originalReport);
    const report = JSON.parse(readFileSync(join(output, 'migration-report.json'), 'utf8'));
    expect(report).toMatchObject({
      status: 'pass',
      adoption_status: 'staged-non-authoritative',
      authoritative_adoption_ready: false,
      dropped_segments: 0,
      source_reconstruction_equal: true,
      opaque_extension_preserved: true,
    });
    const reviewDir = join(root, 'review');
    expect(() => review.prepareReview(
      join(output, 'graph.json'),
      join(output, 'provenance.json'),
      join(output, 'coverage.json'),
      join(output, 'migration-report.json'),
      reviewDir,
    )).not.toThrow();
    expect(JSON.parse(readFileSync(join(reviewDir, 'review-request.json'), 'utf8')).authority.canonical).toBe(false);
  });

  it('rejects any enriched graph that changes an opaque migration segment', () => {
    const root = tempRoot();
    const inputs = prepareInputs(root);
    inputs.graph.extensions[core.MIGRATION_EXTENSION].original_segments[0].content += 'tamper';
    writeFileSync(inputs.graphPath, json(inputs.graph));
    expect(() => bridge.createReboundArtifacts({
      candidateDir: inputs.candidateDir,
      graph: inputs.graphPath,
      provenance: inputs.provenancePath,
      coverage: inputs.coveragePath,
    })).toThrow(/preserve the complete opaque migration ledger/);
  });

  it('merges a safe partial enrichment while preserving the candidate ledger internally', () => {
    const root = tempRoot();
    const inputs = prepareInputs(root);
    const enrichmentPath = join(root, 'enrichment.json');
    writeFileSync(enrichmentPath, json({
      identity: { kind: 'project-system', scope: 'The oh-my-design CLI and Builder surfaces.' },
      experience: { primary_tasks: inputs.graph.experience.primary_tasks },
      governance: { priority: inputs.graph.governance.priority, decisions: inputs.graph.governance.decisions },
    }));
    const artifacts = bridge.createReboundArtifacts({
      candidateDir: inputs.candidateDir,
      enrichment: enrichmentPath,
      provenance: inputs.provenancePath,
      coverage: inputs.coveragePath,
    });
    const graph = JSON.parse(artifacts['graph.json']);
    expect(graph.identity.kind).toBe('project-system');
    expect(graph.extensions[core.MIGRATION_EXTENSION]).toEqual(inputs.graph.extensions[core.MIGRATION_EXTENSION]);
    expect(() => bridge.mergeEnrichment(graph, { extensions: {} })).toThrow(/must not write authority or opaque field/);
  });
});
