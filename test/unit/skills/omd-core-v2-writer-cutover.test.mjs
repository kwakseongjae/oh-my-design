import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '../../..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

const legacyDestinationWriterPaths = [
  '.agents/skills/omd-design/SKILL.md',
  '.claude/skills/omd-component-harvest/SKILL.md',
  '.claude/skills/omd-migrate/SKILL.md',
];

const sources = {
  learn: read('skills/omd-learn/SKILL.md'),
  harness: read('skills/omd-harness/SKILL.md'),
  phases: read('skills/omd-harness/references/master-execution-phases.md'),
  conversation: read('skills/omd-harness/references/master-conversation.md'),
  legacy: read('skills/omd-harness/references/master-legacy-production.md'),
  master: read('agents/omd-master.md'),
  microcopy: read('agents/omd-microcopy.md'),
  junior: read('agents/omd-ui-junior.md'),
  critic: read('agents/omd-critic.md'),
  architect: read('agents/omd-design-system-architect.md'),
  auditor: read('agents/omd-a11y-auditor.md'),
  card: read('agents/AGENT.md'),
  addReferenceCodex: read('.agents/skills/omd-add-reference/SKILL.md'),
  addReferenceClaude: read('.claude/skills/omd-add-reference/SKILL.md'),
  batchReferenceClaude: read('.claude/skills/omd-batch-launch/SKILL.md'),
  tokenBackfillClaude: read('.claude/skills/omd-token-backfill/SKILL.md'),
  batchReferenceCodex: read('.agents/skills/omd-batch-launch/SKILL.md'),
  tokenBackfillCodex: read('.agents/skills/omd-token-backfill/SKILL.md'),
};

describe('Core v2 canonical writer cutover', () => {
  it('freezes the guided Phase 5 review as a graph-first, hash-bound checkpoint', () => {
    expect(sources.phases).toContain('system/{graph,provenance,coverage}.draft.json');
    for (const draft of ['graph.draft.json', 'provenance.draft.json', 'coverage.draft.json']) {
      expect(sources.harness).toContain(draft.split('/').at(-1));
    }
    for (const artifact of [
      'system/graph.patch.json',
      'system/manifest.patch.json',
      'system/provenance.patch.json',
      'system/coverage.patch.json',
      'system/checkpoint-manifest.json',
      'DESIGN.md.patch',
    ]) {
      expect(sources.phases).toContain(artifact);
      expect(sources.harness).toContain(artifact.split('/').at(-1));
    }
    expect(sources.phases).toContain('mandatory checkpoint #2');
    expect(sources.phases).toContain('never a root write');
    expect(sources.phases).toContain('checkpoint-manifest hash');
    expect(sources.master).toMatch(/graph-first\s+Core v2 checkpoint bundle/u);
    expect(sources.master).toMatch(/never mutate root `DESIGN\.md`/iu);
    for (const source of [sources.harness, sources.phases, sources.master]) {
      expect(source).toContain('omd design-md prepare-review');
      expect(source).toContain('omd design-md approve-review');
      expect(source).toContain('--review-receipt <approval>');
      expect(source).toContain('omd design-md prepare-checkpoint');
      expect(source).toContain('omd design-md adopt');
      expect(source).toContain('claim-end');
      expect(source).toMatch(/atomic (?:package )?adopter/iu);
    }
  });

  it('folds preferences into the canonical graph and gates every legacy refactor', () => {
    expect(sources.learn).toContain('Core v2 graph-first');
    expect(sources.learn).toMatch(/graph\.json`이\s+canonical/u);
    expect(sources.learn).toContain('omd design-md migrate DESIGN.md --out-dir');
    expect(sources.learn).toContain('`dropped_segments=0`');
    expect(sources.learn).toContain('`synthetic_product_values_added=0`');
    expect(sources.learn).toContain('`projection_roundtrip_equal=true`');
    expect(sources.learn).toContain('`source_reconstruction_equal=true`');
    expect(sources.learn).toContain('`opaque_extension_preserved=true`');
    expect(sources.learn).toContain('atomic project adoption이 성공한 뒤에만');
    expect(sources.learn).toContain('omd design-md prepare-review');
    expect(sources.learn).toContain('omd design-md approve-review');
    expect(sources.learn).toContain('--review-receipt <approval>');
    expect(sources.learn).toContain('omd design-md prepare-checkpoint');
    expect(sources.learn).toContain('omd design-md adopt');
    expect(sources.learn).toContain('compile-design-md-core.cjs');
    expect(sources.learn).toContain('claim-end');
    expect(sources.learn).toContain('수동 hash patch 대신 fail-close');
    expect(sources.learn).not.toMatch(/components\.button`\s*→\s*DESIGN\.md \u00a7/u);
  });

  it('routes specialists through stable Core anchors rather than legacy section numbers', () => {
    for (const source of [
      sources.microcopy,
      sources.junior,
      sources.critic,
      sources.architect,
      sources.auditor,
    ]) {
      expect(source).not.toMatch(/\u00a7\d/u);
    }
    expect(sources.microcopy).toContain('graph.content_locales');
    expect(sources.microcopy).toMatch(/hash mismatch is a\s+blocker/u);
    expect(sources.junior).toContain('graph.components_states');
    expect(sources.junior).toContain('standalone Core projection');
    expect(sources.critic).toContain('portable Core projection');
    expect(sources.architect).toContain('seven Core v2 objects');
    expect(sources.architect).toContain('one assigned result JSON');
    expect(sources.architect).not.toContain('`system/spec.json` proposal');
    expect(sources.auditor).toContain('DESIGN.md Core v2 validation');
    expect(sources.auditor).toContain('manifest identity (`design-md-core`, `2.0.0`, `portable-core`)');
    expect(sources.auditor).not.toContain('YAML frontmatter present with `omd:` and `brand:`');
  });

  it('keeps all active writers on neutral, single-write Core output', () => {
    const combined = Object.values(sources).join('\n');
    expect(sources.card).toContain('Core v2 is the single-write contract');
    expect(sources.card).toMatch(/never emit\s+legacy YAML or 13\/15\/16-section layouts/u);
    expect(sources.master).toContain('new output is Core v2 only');
    expect(combined).not.toContain('Google Stitch 1–9 + OmD 10–15');
    expect(combined).not.toMatch(/omd:\s*0\.1\n\s*brand:/u);
    expect(combined).not.toContain('Use `[FILL IN]` placeholder');
    expect(sources.conversation).not.toContain('[FILL IN]');
    expect(sources.legacy).not.toContain('[FILL IN]');
    expect(sources.conversation).toMatch(/stay absent from the\s+portable DESIGN\.md/u);
    expect(sources.legacy).toMatch(/stay absent from prescriptive Core fields/u);
    for (const blockedCatalogWriter of [
      sources.addReferenceCodex,
      sources.addReferenceClaude,
      sources.batchReferenceClaude,
      sources.tokenBackfillClaude,
      sources.batchReferenceCodex,
      sources.tokenBackfillCodex,
    ]) {
      expect(blockedCatalogWriter).toContain('CORE_V2_CATALOG_WRITE_BLOCKED');
      expect(blockedCatalogWriter).not.toContain('[FILL IN]');
      expect(blockedCatalogWriter).not.toMatch(/omd:\s*0\.1/u);
    }

    for (const relativePath of legacyDestinationWriterPaths) {
      const absolutePath = resolve(root, relativePath);
      if (!existsSync(absolutePath)) continue;
      const candidate = readFileSync(absolutePath, 'utf8');
      expect(
        candidate.includes('CORE_V2_CATALOG_WRITE_BLOCKED')
          || /Core v2[^\n]*(?:single-write|only)/iu.test(candidate),
        `${relativePath} must be retired, fail-closed, or Core-v2-only`,
      ).toBe(true);
      expect(candidate).not.toMatch(/omd:\s*0\.1/u);
      expect(candidate).not.toContain('[FILL IN]');
    }
  });
});
