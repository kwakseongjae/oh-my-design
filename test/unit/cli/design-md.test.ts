import { describe, expect, it } from 'vitest';
import { resolve } from 'node:path';
import { buildDesignMdToolArgs } from '../../../src/cli/design-md.js';

describe('omd design-md command contract', () => {
  const cwd = resolve('/tmp/omd-design-md-cli');

  it('keeps inspection and validation provider-free and read-only', () => {
    expect(buildDesignMdToolArgs('inspect', { cwd })).toEqual([
      '--input', resolve(cwd, 'DESIGN.md'), '--dry-run', '--json',
    ]);
    expect(buildDesignMdToolArgs('validate', { cwd, input: 'legacy/DESIGN.md' })).toEqual([
      '--input', resolve(cwd, 'legacy/DESIGN.md'), '--check', '--require-source-valid', '--require-portable-core',
    ]);
  });

  it('only writes migration output to an explicit staging directory', () => {
    expect(buildDesignMdToolArgs('migrate', {
      cwd,
      input: 'DESIGN.md',
      outDir: '.omd/migrations/candidate',
      report: '.omd/migrations/report.json',
    })).toEqual([
      '--input', resolve(cwd, 'DESIGN.md'),
      '--out-dir', resolve(cwd, '.omd/migrations/candidate'),
      '--write',
      '--report', resolve(cwd, '.omd/migrations/report.json'),
    ]);
    expect(() => buildDesignMdToolArgs('migrate', { cwd }))
      .toThrow(/--out-dir is required/);
  });

  it('makes catalog migration audit-only', () => {
    expect(buildDesignMdToolArgs('audit', {
      cwd,
      catalog: 'web/references',
    })).toEqual([
      '--catalog', resolve(cwd, 'web/references'), '--check',
    ]);
    expect(() => buildDesignMdToolArgs('audit', { cwd }))
      .toThrow(/catalog directory is required/);
  });

  it('accepts exactly one complete graph or safe partial enrichment for migration rebind', () => {
    expect(buildDesignMdToolArgs('rebind-migration', {
      cwd,
      candidateDir: '.omd/migrations/candidate',
      enrichment: 'system/enrichment.json',
      provenance: 'system/provenance.json',
      coverage: 'system/coverage.json',
      outDir: '.omd/migrations/rebound',
    })).toEqual([
      '--candidate-dir', resolve(cwd, '.omd/migrations/candidate'),
      '--enrichment', resolve(cwd, 'system/enrichment.json'),
      '--provenance', resolve(cwd, 'system/provenance.json'),
      '--coverage', resolve(cwd, 'system/coverage.json'),
      '--out-dir', resolve(cwd, '.omd/migrations/rebound'),
    ]);
    expect(() => buildDesignMdToolArgs('rebind-migration', {
      cwd,
      candidateDir: '.omd/migrations/candidate',
      input: 'system/graph.json',
      enrichment: 'system/enrichment.json',
      provenance: 'system/provenance.json',
      coverage: 'system/coverage.json',
      outDir: '.omd/migrations/rebound',
    })).toThrow(/exactly one of --graph or --enrichment/);
  });

  it('requires explicit authority adoption and a fresh compile destination', () => {
    expect(buildDesignMdToolArgs('compile', {
      cwd,
      input: 'system/graph.json',
      provenance: 'system/provenance.json',
      coverage: 'system/coverage.json',
      reviewReceipt: 'system/review-receipt.json',
      migrationReport: 'migration/report.json',
      outDir: '.omd/adopted/core-v2',
      adopt: true,
    })).toEqual([
      resolve(cwd, 'system/graph.json'),
      '--provenance', resolve(cwd, 'system/provenance.json'),
      '--coverage', resolve(cwd, 'system/coverage.json'),
      '--review-receipt', resolve(cwd, 'system/review-receipt.json'),
      '--migration-report', resolve(cwd, 'migration/report.json'),
      '--out-dir', resolve(cwd, '.omd/adopted/core-v2'),
      '--adopt',
    ]);
    expect(() => buildDesignMdToolArgs('compile', {
      cwd,
      input: 'system/graph.json',
      provenance: 'system/provenance.json',
      coverage: 'system/coverage.json',
      reviewReceipt: 'system/review-receipt.json',
      outDir: '.omd/adopted/core-v2',
    })).toThrow(/--adopt is required/);
    expect(() => buildDesignMdToolArgs('compile', {
      cwd,
      input: 'system/graph.json',
      provenance: 'system/provenance.json',
      coverage: 'system/coverage.json',
      reviewReceipt: 'system/review-receipt.json',
      adopt: true,
    })).toThrow(/--out-dir is required/);
    expect(() => buildDesignMdToolArgs('compile', {
      cwd,
      provenance: 'system/provenance.json',
      coverage: 'system/coverage.json',
      reviewReceipt: 'system/review-receipt.json',
      outDir: '.omd/adopted/core-v2',
      adopt: true,
    })).toThrow(/input graph\.json is required/);
    expect(() => buildDesignMdToolArgs('compile', {
      cwd,
      input: 'system/graph.json',
      coverage: 'system/coverage.json',
      reviewReceipt: 'system/review-receipt.json',
      outDir: '.omd/adopted/core-v2',
      adopt: true,
    })).toThrow(/--provenance is required/);
  });

  it('keeps exact review, checkpoint, and project adoption as separate receipt-gated stages', () => {
    expect(buildDesignMdToolArgs('prepare-review', {
      cwd,
      input: 'system/graph.draft.json',
      provenance: 'system/provenance.draft.json',
      coverage: 'system/coverage.draft.json',
      migrationReport: 'migration/report.json',
      outDir: '.omd/review/core-v2',
    })).toEqual([
      resolve(cwd, 'system/graph.draft.json'),
      '--provenance', resolve(cwd, 'system/provenance.draft.json'),
      '--coverage', resolve(cwd, 'system/coverage.draft.json'),
      '--migration-report', resolve(cwd, 'migration/report.json'),
      '--out-dir', resolve(cwd, '.omd/review/core-v2'),
    ]);

    expect(buildDesignMdToolArgs('approve-review', {
      cwd,
      input: '.omd/review/core-v2/review-request.json',
      reviewer: 'project-owner@example.test',
      output: '.omd/review/core-v2/owner-approval.json',
      authorityTransitionApproved: true,
    })).toEqual([
      '--approve', resolve(cwd, '.omd/review/core-v2/review-request.json'),
      '--reviewer', 'project-owner@example.test',
      '--out', resolve(cwd, '.omd/review/core-v2/owner-approval.json'),
      '--authority-transition-approved',
    ]);

    expect(buildDesignMdToolArgs('prepare-checkpoint', {
      cwd,
      input: '.omd/compiled/core-v2',
      reviewer: 'project-owner@example.test',
      output: '.omd/checkpoints/core-v2.json',
      authorityTransitionApproved: true,
    })).toEqual([
      resolve(cwd, '.omd/compiled/core-v2'),
      '--prepare-checkpoint', resolve(cwd, '.omd/checkpoints/core-v2.json'),
      '--reviewer', 'project-owner@example.test',
      '--authority-transition-approved',
    ]);

    expect(buildDesignMdToolArgs('adopt', {
      cwd,
      input: '.omd/compiled/core-v2',
      projectRoot: '.',
      checkpointReceipt: '.omd/checkpoints/core-v2.json',
    })).toEqual([
      resolve(cwd, '.omd/compiled/core-v2'),
      '--project-root', cwd,
      '--checkpoint-receipt', resolve(cwd, '.omd/checkpoints/core-v2.json'),
    ]);

    expect(() => buildDesignMdToolArgs('approve-review', {
      cwd,
      input: 'review-request.json',
      reviewer: 'owner',
      output: 'approval.json',
    })).toThrow(/--authority-transition-approved is required/);
    expect(() => buildDesignMdToolArgs('adopt', {
      cwd,
      input: '.omd/compiled/core-v2',
      projectRoot: '.',
    })).toThrow(/--checkpoint-receipt is required/);
  });
});
