import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const engine = require('../../../scripts/design-md-core.cjs');
const cli = resolve(import.meta.dirname, '../../../scripts/migrate-design-md-core.cjs');
const fixtures = resolve(import.meta.dirname, '../../fixtures/design-md-core');
const roots: string[] = [];

function fixture(name: string): string {
  return readFileSync(join(fixtures, name), 'utf8');
}

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('DESIGN.md Core v2 migration engine', () => {
  it.each([
    ['legacy-15.md', 'legacy-15'],
    ['legacy-16.md', 'legacy-16'],
    ['bunjang-13.md', 'legacy-13'],
    ['google-unmarked.md', 'legacy-unmarked'],
    ['core-v2.md', 'core-v2'],
  ])('classifies %s without relying on section numbers alone', (name, format) => {
    expect(engine.inspectDesignMd(fixture(name)).format).toBe(format);
  });

  it('emits a vendor-neutral visible Core and hash-bound sidecars', () => {
    const source = fixture('legacy-15.md');
    const result = engine.migrateDesignMd(source, { sourcePath: '/catalog/acme/DESIGN.md' });
    expect(result.report).toMatchObject({
      status: 'pass', adoption_status: 'staged-non-authoritative', authoritative_adoption_ready: false,
      dropped_segments: 0, unsupported_claims_promoted: null, unsupported_claims_review_required: true,
      synthetic_product_values_added: 0, projection_roundtrip_equal: true,
      source_reconstruction_equal: true, clean_top: true, opaque_extension_preserved: true,
    });
    expect(result.report.conformance).toMatchObject({
      structurally_valid: true,
      portable_core: expect.any(Boolean),
      reasons: expect.any(Array),
    });
    expect(result.coverage.portable_core_conformance).toEqual(result.report.conformance);
    expect(result.manifest).toMatchObject({
      profile: 'migration-candidate',
      authority: {
        status: 'non-authoritative',
        canonical: 'source-design-md',
        source_sha256: engine.sha256(source),
        candidate_graph_path: '.omd/system/graph.json',
        candidate_projection_path: 'DESIGN.md',
      },
    });
    expect(result.manifest.authority).not.toHaveProperty('graph_path');
    expect(result.manifest.authority).not.toHaveProperty('projection_path');
    expect(result.designMd.startsWith('# Acme Design System\n')).toBe(true);
    expect(result.designMd).not.toMatch(/^---/);
    expect(result.designMd).not.toMatch(/oh-my-design|\bomd\b/i);
    expect(result.designMd).not.toMatch(/^- ### /m);
    expect(result.designMd).not.toContain('### Foundation rules\n\n###');
    expect(result.designMd).not.toContain('### Design direction\n\n');
    expect(result.designMd).not.toContain('### Component Stylings\n\n### Approval action');
    expect(result.designMd).toContain('Approval actions expose default, focus-visible, disabled, loading, error, and success');
    expect(result.designMd).toContain('Omit only the smallest unresolved value or group.');
    expect(result.designMd).toContain('design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary');
    expect(engine.inspectDesignMd(result.designMd).coreSectionIds).toEqual(engine.SECTION_ORDER);
    expect(result.graph.extensions[engine.MIGRATION_EXTENSION].original_segments.map((segment: { content: string }) => segment.content).join('')).toBe(source);
    expect(result.graph.extensions[engine.MIGRATION_EXTENSION].preservation).toEqual({
      dropped_segments: 0,
      opaque_preserved: true,
      projection_roundtrip_equal: true,
      source_reconstruction_equal: true,
    });
    expect(engine.validateCoreArtifacts(result)).toEqual({ valid: true, errors: [] });
    expect(result.manifest.artifacts.design_md.sha256).toBe(engine.sha256(result.designMd));
    expect(result.manifest.artifacts.graph.sha256).toBe(engine.sha256(result.artifacts['.omd/system/graph.json']));
  });

  it('maps the Bunjang-like semantic variant and keeps its old verification footer opaque', () => {
    const result = engine.migrateDesignMd(fixture('bunjang-13.md'));
    expect(result.designMd).toContain('Seller images remain heterogeneous');
    expect(result.designMd).toContain('inventory-heavy marketplace work');
    expect(result.designMd).not.toContain('old OmD migration job');
    expect(result.report.unmapped_segments).toBeGreaterThan(0);
    expect(result.report.dropped_segments).toBe(0);
    expect(result.report.opaque_extension_preserved).toBe(true);
  });

  it('keeps nested legacy headings subordinate to their Core section wrapper', () => {
    const source = fixture('legacy-15.md').replace(
      '## 4. Component Stylings\n\n### Approval action',
      '## 4. Component Stylings\n\nUse these rules for consequential actions.\n\n### Approval action',
    );
    const result = engine.migrateDesignMd(source);
    expect(result.designMd).toContain('### Component Stylings\n\nUse these rules for consequential actions.\n\n#### Approval action');
    expect(result.report.dropped_segments).toBe(0);
    expect(result.report.source_reconstruction_equal).toBe(true);
  });

  it('reparses and recompiles Core v2 without semantic drift', () => {
    const first = engine.migrateDesignMd(fixture('core-v2.md'));
    const second = engine.migrateDesignMd(first.designMd);
    expect(first.designMd).toBe(second.designMd);
    expect(second.report).toMatchObject({ status: 'pass', projection_roundtrip_equal: true, dropped_segments: 0 });
  });

  it('separates structural Core recognition from standalone Portable Core usefulness', () => {
    const sparse = `# Sparse Design System\n\n${engine.SECTION_ORDER.map((id: string, index: number) => (
      `<!-- design-md:section ${id} -->\n## ${index + 1}. Section`
    )).join('\n\n')}\n`;
    const inspection = engine.inspectDesignMd(sparse);

    expect(inspection).toMatchObject({
      format: 'core-v2',
      sourceValidation: { valid: true, errors: [] },
      conformance: {
        level: 'structural-core',
        structurally_valid: true,
        portable_core: false,
      },
    });
    expect(inspection.conformance.reasons.map((reason: { code: string }) => reason.code)).toEqual(expect.arrayContaining([
      'missing-product-surface-scope',
      'missing-primary-task',
      'missing-actionable-foundations-or-known-constraints',
      'missing-governance-authority',
      'missing-governance-application-priority',
      'missing-governance-unknown-absence',
      'missing-governance-change-rule',
    ]));
  });

  it('requires standalone usefulness for validation but not for lossless migration staging', () => {
    const sparse = `# Sparse Design System\n\n${engine.SECTION_ORDER.map((id: string, index: number) => (
      `<!-- design-md:section ${id} -->\n## ${index + 1}. Section`
    )).join('\n\n')}\n`;
    const root = mkdtempSync(join(tmpdir(), 'omd-core-portable-gate-'));
    roots.push(root);
    const input = join(root, 'DESIGN.md');
    writeFileSync(input, sparse);

    const inspect = spawnSync(process.execPath, [cli, '--input', input, '--dry-run', '--json'], { encoding: 'utf8' });
    expect(inspect.status, inspect.stderr).toBe(0);
    expect(JSON.parse(inspect.stdout)).toMatchObject({
      status: 'pass',
      adoption_status: 'staged-non-authoritative',
      authoritative_adoption_ready: false,
      conformance: { level: 'structural-core', portable_core: false },
      validation: { valid: true },
    });

    const validate = spawnSync(process.execPath, [
      cli, '--input', input, '--check', '--require-source-valid', '--require-portable-core',
    ], { encoding: 'utf8' });
    expect(validate.status).toBe(1);
    expect(JSON.parse(validate.stdout)).toMatchObject({
      status: 'fail',
      conformance: { level: 'structural-core', portable_core: false },
      validation: { valid: false },
    });
    expect(JSON.parse(validate.stdout).validation.errors).toEqual(expect.arrayContaining([
      expect.stringContaining('portable-core missing-primary-task'),
      expect.stringContaining('portable-core missing-governance-unknown-absence'),
    ]));
  });

  it('passes Portable Core usefulness without depending on exact English template copy', () => {
    const source = fixture('core-v2.md')
      .replace('<!-- design-md:claim scope kind=product-surface lang=en -->', '<!-- design-md:claim scope kind=product-surface lang=ko -->')
      .replace('### Scope', '### 적용 범위')
      .replace(
        'Atlas helps dispatchers resolve exceptions while preserving shipment identity and ownership.',
        '운영 화면은 담당자가 배송 예외를 검토하고 소유권을 보존하며 해결하도록 돕는다.',
      )
      .replace('<!-- design-md:claim primary-tasks kind=user-outcomes count=1 lang=en -->', '<!-- design-md:claim primary-tasks kind=user-outcomes count=1 lang=ko -->')
      .replace('### Primary tasks', '### 주요 과업')
      .replace(
        '- Resolve a shipment exception while preserving identity and ownership.',
        '- 배송 식별자와 담당자를 보존하며 예외를 해결한다.',
      )
      .replace('<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->', '<!-- design-md:claim foundations kind=rules-or-constraints lang=ko -->')
      .replace('<!-- design-md:claim authority kind=project-system lang=en -->', '<!-- design-md:claim authority kind=project-system lang=ko -->')
      .replace('### Authority\n\nThis document is the project design contract for the declared scope.', '### 권위\n\n이 문서는 명시된 범위의 프로젝트 디자인 계약이다.')
      .replace('<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->', '<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=ko -->')
      .replace('### Application priority\n\n1. Direct user instructions for the requested scope.\n2. Repository facts.\n3. This system contract.\n4. Reference inspiration.', '### 적용 우선순위\n\n1. 요청 범위의 명시적 사용자 지침.\n2. 저장소 사실.\n3. 이 시스템 계약.\n4. 레퍼런스 영감.')
      .replace('<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->', '<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=ko -->')
      .replace('### Unknowns\n\nOmit only the smallest unresolved value or group. Do not replace it with a plausible default.', '### 미확정 값\n\n가장 작은 미확정 값이나 그룹만 생략한다. 그럴듯한 기본값으로 대체하지 않는다.')
      .replace('<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->', '<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=ko -->')
      .replace('### Changes\n\nRecord, review, and validate changes before adoption.', '### 변경\n\n채택 전에 변경을 기록하고 검토하고 검증한다.');
    const inspection = engine.inspectDesignMd(source);
    expect(inspection.conformance).toMatchObject({
      level: 'portable-core',
      structurally_valid: true,
      portable_core: true,
      reasons: [],
    });
    const migrated = engine.migrateDesignMd(source);
    expect(engine.validateCoreArtifacts(migrated, { requirePortableCore: true })).toEqual({ valid: true, errors: [] });
  });

  it('fails Portable Core when required claim locales are mixed or missing', () => {
    const complete = fixture('core-v2.md');
    const mixed = complete.replace(
      '<!-- design-md:claim scope kind=product-surface lang=en -->',
      '<!-- design-md:claim scope kind=product-surface lang=ja -->',
    );
    const missing = complete.replace(
      '<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->',
      '<!-- design-md:claim foundations kind=rules-or-constraints -->',
    );

    expect(engine.inspectDesignMd(mixed).conformance).toMatchObject({
      level: 'structural-core',
      portable_core: false,
      claim_locale: null,
      reasons: expect.arrayContaining([expect.objectContaining({ code: 'mixed-claim-locales' })]),
    });
    expect(engine.inspectDesignMd(missing).conformance).toMatchObject({
      level: 'structural-core',
      portable_core: false,
      claim_locale: 'en',
      reasons: expect.arrayContaining([expect.objectContaining({ code: 'missing-claim-locale' })]),
    });
    expect(engine.evaluatePortableCore(complete, {
      graph: { projection: { locale: 'ja' } },
    }).reasons).toEqual(expect.arrayContaining([
      expect.objectContaining({ code: 'claim-locale-projection-mismatch' }),
    ]));

    const migratedMixed = engine.migrateDesignMd(mixed);
    const migratedMissing = engine.migrateDesignMd(missing);
    expect(engine.validateCoreArtifacts(migratedMixed, { requirePortableCore: true }).errors)
      .toEqual(expect.arrayContaining([expect.stringContaining('portable-core mixed-claim-locales')]));
    expect(engine.validateCoreArtifacts(migratedMissing, { requirePortableCore: true }).errors)
      .toEqual(expect.arrayContaining([expect.stringContaining('portable-core missing-claim-locale')]));
  });

  it('lets declarations disambiguate typed evidence but never lets a graph substitute missing standalone meaning', () => {
    const complete = fixture('core-v2.md');
    const base = complete.replace('<!-- design-md:claim primary-tasks kind=user-outcomes count=1 lang=en -->\n', '');
    const graph = {
      identity: { scope: 'Operations record-handling console' },
      experience: { primary_tasks: ['Resolve the current record'] },
      foundations: { rules: ['Use the action token only for actions.'] },
      governance: {
        priority: ['User instructions', 'Repository facts', 'This contract'],
        unknown_policy: 'absent-at-smallest-unresolved-boundary',
        change_policy: ['Record and review changes before adoption.'],
      },
    };
    const conformance = engine.evaluatePortableCore(base, { graph });
    expect(conformance.portable_core).toBe(false);
    expect(conformance.reasons).toContainEqual(expect.objectContaining({ code: 'missing-primary-task' }));

    expect(engine.evaluatePortableCore(complete, { graph })).toMatchObject({ portable_core: true, reasons: [] });
  });

  it('does not count an invisible or empty Markdown construct as a primary task', () => {
    for (const item of ['<!-- no task -->', '[ ]', '` `', '![](x)', '** **']) {
      const source = fixture('core-v2.md')
        .replace('- Resolve a shipment exception while preserving identity and ownership.', `- ${item}`);
      const inspection = engine.inspectDesignMd(source);
      expect(inspection.conformance.portable_core, item).toBe(false);
      expect(inspection.conformance.reasons, item)
        .toContainEqual(expect.objectContaining({ code: 'missing-primary-task' }));
    }
  });

  it('does not certify fenced, indented, quoted, or inert HTML examples as claim meaning', () => {
    const source = fixture('core-v2.md');
    const replacements = [
      ['Atlas helps dispatchers resolve exceptions while preserving shipment identity and ownership.', '```text\nProduct surface for shipment operations.\n```'],
      ['- Resolve a shipment exception while preserving identity and ownership.', '    - Resolve a shipment exception safely.'],
      ['Blue is reserved for actions.', '<template>Use blue for primary actions.</template>'],
    ];
    let mutant = source;
    for (const [from, to] of replacements) mutant = mutant.replace(from, to);
    const conformance = engine.inspectDesignMd(mutant).conformance;
    expect(conformance.portable_core).toBe(false);
    expect(conformance.reasons.map((reason: { code: string }) => reason.code)).toEqual(expect.arrayContaining([
      'missing-product-surface-scope',
      'missing-primary-task',
      'missing-actionable-foundations-or-known-constraints',
    ]));

    for (const task of [
      '\t- Resolve a shipment exception safely.',
      '> - Resolve a shipment exception safely.',
      '- <script>Resolve a shipment exception safely.</script>',
      '- <div hidden>Resolve a shipment exception safely.</div>',
      '- <div aria-hidden="true">Resolve a shipment exception safely.</div>',
      '- <div style="display:none">Resolve a shipment exception safely.</div>',
      '- <div style=display:none>Resolve a shipment exception safely.</div>',
      '- <noscript>Resolve a shipment exception safely.</noscript>',
      '- <iframe>Resolve a shipment exception safely.</iframe>',
      '- <input type="hidden" name="resolve-shipment-exception">',
      '- &nbsp;',
      '<!-- Resolve a shipment exception while preserving identity and ownership.',
    ]) {
      const taskMutant = source.replace('- Resolve a shipment exception while preserving identity and ownership.', task);
      expect(engine.inspectDesignMd(taskMutant).conformance.reasons)
        .toContainEqual(expect.objectContaining({ code: 'missing-primary-task' }));
    }

    const attributeOnly = source
      .replace(
        'Atlas helps dispatchers resolve exceptions while preserving shipment identity and ownership.',
        '<input type="hidden" name="product-surface-scope">',
      )
      .replace(
        '- Resolve a shipment exception while preserving identity and ownership.',
        '- <input type="hidden" name="resolve-shipment-exception">',
      )
      .replace(
        /(<!-- design-md:claim foundations[^>]*-->\n)[\s\S]*?(\n<!-- design-md:claim-end -->)/,
        '$1&nbsp;&nbsp;$2',
      );
    expect(engine.inspectDesignMd(attributeOnly).conformance.reasons.map((reason: { code: string }) => reason.code))
      .toEqual(expect.arrayContaining([
        'missing-product-surface-scope',
        'missing-primary-task',
        'missing-actionable-foundations-or-known-constraints',
      ]));
  });

  it('keeps unresolved scope, task, and foundation claims absent instead of certifying them', () => {
    const source = fixture('core-v2.md')
      .replace(
        'Atlas helps dispatchers resolve exceptions while preserving shipment identity and ownership.',
        'The product surface scope is unknown and not specified.',
      )
      .replace(
        '- Resolve a shipment exception while preserving identity and ownership.',
        '- The primary task is unknown and not specified.',
      )
      .replace('Blue is reserved for actions.', 'Foundation rules are unknown and not specified.');
    const conformance = engine.inspectDesignMd(source).conformance;
    expect(conformance.portable_core).toBe(false);
    expect(conformance.reasons.map((reason: { code: string }) => reason.code)).toEqual(expect.arrayContaining([
      'missing-product-surface-scope',
      'missing-primary-task',
      'missing-actionable-foundations-or-known-constraints',
    ]));
  });

  it('rejects a standalone projection that requires an OmD sidecar at use time', () => {
    const source = fixture('core-v2.md').replace(
      'Labels are concrete and adapted independently for each supported locale.',
      'Labels are concrete and adapted independently for each supported locale. You must install OmD and load .omd/system/graph.json before using this document.',
    );
    const conformance = engine.inspectDesignMd(source).conformance;
    expect(conformance.portable_core).toBe(false);
    expect(conformance.reasons).toContainEqual(expect.objectContaining({ code: 'requires-external-runtime-or-sidecar' }));
  });

  it('rejects required OmD runtime language in every supported contract locale', () => {
    const source = fixture('core-v2.md');
    for (const requirement of [
      '이 문서를 사용하려면 oh-my-design을 설치하고 .omd/system/graph.json을 반드시 읽어야 한다.',
      'この文書を使うには oh-my-design をインストールし、.omd/system/graph.json の読み込みが必要です。',
      '使用本文档必须安装 oh-my-design 并读取 .omd/system/graph.json。',
      '使用本文件必須安裝 oh-my-design 並讀取 .omd/system/graph.json。',
    ]) {
      const mutant = source.replace(
        'Labels are concrete and adapted independently for each supported locale.',
        `Labels are concrete and adapted independently for each supported locale. ${requirement}`,
      );
      expect(engine.inspectDesignMd(mutant).conformance.reasons, requirement)
        .toContainEqual(expect.objectContaining({ code: 'requires-external-runtime-or-sidecar' }));
    }
  });

  it('rejects legacy placeholders in prescriptive Core prose instead of treating them as constraints', () => {
    const source = `# Placeholder Design System

<!-- design-md:section experience -->
## 1. Experience

This product lets an operator review and resolve an incident record.

<!-- design-md:section foundations -->
## 2. Foundations

Use [FILL IN] as the primary action color.

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

Do not substitute an unknown asset.

<!-- design-md:section components-states -->
## 4. Components & States

Actions expose focus, disabled, loading, and error states.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Evidence precedes the action when columns reflow.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Use direct labels.

<!-- design-md:section governance -->
## 7. Governance

This document is the project design contract. User direction wins over repository facts, then this contract. Unknown values remain absent and must not be guessed. Record and review changes before adoption.
`;
    const inspection = engine.inspectDesignMd(source);
    expect(inspection.sourceValidation.valid).toBe(true);
    expect(inspection.conformance.portable_core).toBe(false);
    expect(inspection.conformance.reasons).toContainEqual(expect.objectContaining({ code: 'contains-prescriptive-placeholder' }));

    for (const sentinel of [
      '[FILL IN: no observed state]',
      '[FILL IN — no observed state]',
      '[TBD: owner input required]',
      '[UNKNOWN: not established]',
    ]) {
      const variant = source.replace('[FILL IN]', sentinel);
      expect(engine.inspectDesignMd(variant).conformance.reasons, sentinel)
        .toContainEqual(expect.objectContaining({ code: 'contains-prescriptive-placeholder' }));
    }
    for (const sentinel of ['Color: TBD', 'Spacing: UNKNOWN', '- Radius: TODO', '| Motion | UNRESOLVED |']) {
      const variant = fixture('core-v2.md').replace('Blue is reserved for actions.', `${sentinel}\n\nBlue is reserved for actions.`);
      expect(engine.inspectDesignMd(variant).conformance.reasons, sentinel)
        .toContainEqual(expect.objectContaining({ code: 'contains-prescriptive-placeholder' }));
    }
    for (const sentinel of [
      '색상: 미정', '字体：未確定', '- 間隔: 未定', '| 影 | 不明 |',
      '颜色：未知', '字体：未确定', '- 间距: 未指定', '| 动效 | 待定 |',
      'Color: TBD later', 'Spacing: unknown pending',
    ]) {
      const variant = fixture('core-v2.md').replace('Blue is reserved for actions.', `${sentinel}\n\nBlue is reserved for actions.`);
      expect(engine.inspectDesignMd(variant).conformance.reasons, sentinel)
        .toContainEqual(expect.objectContaining({ code: 'contains-prescriptive-placeholder' }));
    }
  });

  it('rejects tool and evidence metadata in the visible Core preamble', () => {
    const source = fixture('core-v2.md');
    for (const metadata of [
      'Model: GPT-5',
      'Repository URL: https://example.test/repo',
      'Extraction timestamp: 2026-08-12T00:00:00Z',
      'Evidence ledger: internal',
      'Generated by: Example Tool',
      'Verification status: reviewed',
      'Vendor: Example',
      'Model provider: GPT-5',
      '모델: GPT-5',
      '생성 도구: Example',
      'モデル: GPT-5',
      '生成ツール: Example',
      '模型: GPT-5',
      '生成工具: Example',
    ]) {
      const mutant = source.replace('\n\n<!-- design-md:section experience -->', `\n\n${metadata}\n\n<!-- design-md:section experience -->`);
      const inspection = engine.inspectDesignMd(mutant);
      expect(inspection.cleanTop, metadata).toBe(false);
      expect(inspection.sourceValidation.valid, metadata).toBe(false);
      expect(inspection.conformance.portable_core, metadata).toBe(false);
    }
  });

  it('does not certify arbitrary positive or negated prose without explicit claim declarations', () => {
    const source = fixture('core-v2.md')
      .replace(/<!-- design-md:claim[^>]*-->\n/g, '')
      .replace('This document is the project design contract for the declared scope.', 'This document carries zero authority.')
      .replace('Unknown means absent at the smallest unresolved boundary.', 'Unknown values may be inferred and invented.');
    const conformance = engine.inspectDesignMd(source).conformance;
    expect(conformance.portable_core).toBe(false);
    expect(conformance.reasons.map((reason) => reason.code)).toEqual(expect.arrayContaining([
      'missing-primary-task',
      'missing-governance-authority',
      'missing-governance-application-priority',
      'missing-governance-unknown-absence',
      'missing-governance-change-rule',
    ]));
  });

  it('rejects contradictory governance prose even when claim markers are copied', () => {
    const source = fixture('core-v2.md')
      .replace('This document is the project design contract for the declared scope.', 'This document carries zero authority.')
      .replace('Direct user instructions for the requested scope.', 'Ignore every project source.')
      .replace('Omit only the smallest unresolved value or group. Do not replace it with a plausible default.', 'Unknown values may be invented and promoted.')
      .replace('Record, review, and validate changes before adoption.', 'Changes require no review or validation.');
    const reasons = engine.inspectDesignMd(source).conformance.reasons.map((reason) => reason.code);
    expect(reasons).toEqual(expect.arrayContaining([
      'missing-governance-authority',
      'missing-governance-application-priority',
      'missing-governance-unknown-absence',
      'missing-governance-change-rule',
    ]));
  });

  it('allows the product name oh-my-design while rejecting labeled producer metadata', () => {
    const source = fixture('core-v2.md').replace('# Atlas Design System', '# oh-my-design Product Design System');
    expect(engine.inspectDesignMd(source)).toMatchObject({ cleanTop: true, sourceValidation: { valid: true } });
  });

  it('recomputes graph-to-projection meaning instead of trusting a tautological report flag', () => {
    const result = engine.migrateDesignMd(fixture('core-v2.md'));
    result.graph.foundations.rules = ['A different foundation claim.'];
    const graphBytes = `${JSON.stringify(result.graph, null, 2)}\n`;
    result.artifacts['.omd/system/graph.json'] = graphBytes;
    result.manifest.artifacts.graph.sha256 = engine.sha256(graphBytes);

    const validation = engine.validateCoreArtifacts(result);
    expect(validation.valid).toBe(false);
    expect(validation.errors).toContain('graph-to-projection semantic round-trip mismatch');
  });

  it('renders rich typed token values as stable JSON rather than object coercions', () => {
    const result = engine.migrateDesignMd(fixture('legacy-15.md'));
    result.graph.foundations.tokens['shadow.focus-ring'] = {
      $type: 'shadow',
      $value: {
        spread: '2px',
        color: '#2457e680',
        offset: { y: '0px', x: '0px' },
        blur: '0px',
      },
    };
    const markdown = engine.renderCore(result.graph);
    expect(markdown).toContain('`{"blur":"0px","color":"#2457e680","offset":{"x":"0px","y":"0px"},"spread":"2px"}`');
    expect(markdown).not.toContain('[object Object]');
  });

  it('rejects unresolved token values and omits them from the standalone projection', () => {
    for (const unresolved of [null, '', 'TBD', 'UNKNOWN', [], {}, { color: null }]) {
      const result = engine.migrateDesignMd(fixture('legacy-15.md'));
      result.graph.foundations.tokens['color.unresolved'] = {
        $type: 'color',
        $value: unresolved,
      };
      const graphBytes = `${JSON.stringify(result.graph, null, 2)}\n`;
      result.artifacts['.omd/system/graph.json'] = graphBytes;
      result.manifest.artifacts.graph.sha256 = engine.sha256(graphBytes);

      const validation = engine.validateCoreArtifacts(result);
      expect(validation.valid, JSON.stringify(unresolved)).toBe(false);
      expect(validation.errors.join('\n')).toContain('resolvedTokenValue');
      expect(engine.renderCore(result.graph)).not.toContain('color.unresolved');
    }
  });

  it('fails closed when opaque source bytes are tampered with', () => {
    const result = engine.migrateDesignMd(fixture('legacy-16.md'));
    result.graph.extensions[engine.MIGRATION_EXTENSION].original_segments[0].content += 'tampered';
    const validation = engine.validateCoreArtifacts(result);
    expect(validation.valid).toBe(false);
    expect(validation.errors.join('\n')).toContain('opaque segment hash mismatch');
  });

  it('uses the closed published schemas at the migration authority boundary', () => {
    const result = engine.migrateDesignMd(fixture('legacy-15.md'));
    result.graph.generator = 'hidden-vendor-field';
    result.manifest.telemetry = true;
    const validation = engine.validateCoreArtifacts(result);
    expect(validation.valid).toBe(false);
    expect(validation.errors).toEqual(expect.arrayContaining([
      expect.stringContaining('graph schema additionalProperties at /generator'),
      expect.stringContaining('manifest schema additionalProperties at /telemetry'),
    ]));
  });

  it('rejects a staged candidate that impersonates an adopted canonical graph', () => {
    const result = engine.migrateDesignMd(fixture('legacy-15.md'));
    result.manifest.authority = {
      canonical: 'system-graph',
      graph_path: '.omd/system/graph.json',
      projection_path: 'DESIGN.md',
    };
    const validation = engine.validateCoreArtifacts(result);
    expect(validation.valid).toBe(false);
    expect(validation.errors.join('\n')).toMatch(/manifest schema|migration candidate manifest authority is invalid/);
  });

  it('rejects a candidate whose canonical source hash is changed after staging', () => {
    const result = engine.migrateDesignMd(fixture('legacy-15.md'));
    result.manifest.authority.source_sha256 = 'f'.repeat(64);
    const validation = engine.validateCoreArtifacts(result);
    expect(validation.valid).toBe(false);
    expect(validation.errors).toContain('migration candidate source hash mismatch');
  });

  it('supports JSON check and staged write without changing the source', () => {
    const root = mkdtempSync(join(tmpdir(), 'omd-core-v2-'));
    roots.push(root);
    const input = join(root, 'source.md');
    const output = join(root, 'staged');
    const source = fixture('legacy-15.md');
    writeFileSync(input, source);

    const check = spawnSync(process.execPath, [cli, '--input', input, '--check'], { encoding: 'utf8' });
    expect(check.status, check.stderr).toBe(0);
    expect(JSON.parse(check.stdout)).toMatchObject({ status: 'pass', dropped_segments: 0, validation: { valid: true } });

    const write = spawnSync(process.execPath, [cli, '--input', input, '--write', '--out-dir', output, '--json'], { encoding: 'utf8' });
    expect(write.status, write.stderr).toBe(0);
    expect(readFileSync(input, 'utf8')).toBe(source);
    expect(existsSync(join(output, 'DESIGN.md'))).toBe(true);
    expect(existsSync(join(output, '.omd/system/manifest.json'))).toBe(true);
    expect(existsSync(join(output, '.omd/system/graph.json'))).toBe(true);
    expect(existsSync(join(output, 'migration-report.json'))).toBe(true);
    const stagedManifest = JSON.parse(readFileSync(join(output, '.omd/system/manifest.json'), 'utf8'));
    expect(stagedManifest.profile).toBe('migration-candidate');
    expect(stagedManifest.authority.canonical).toBe('source-design-md');
  });

  it('never overwrites the source DESIGN.md, even with force', () => {
    const root = mkdtempSync(join(tmpdir(), 'omd-core-source-'));
    roots.push(root);
    const input = join(root, 'DESIGN.md');
    const source = fixture('legacy-15.md');
    writeFileSync(input, source);
    const result = engine.migrateDesignMd(source, { sourcePath: input });
    expect(() => engine.writeMigrationResult(result, root, { force: true }))
      .toThrow(/refusing to write migration artifact DESIGN\.md over source DESIGN\.md/);
    expect(readFileSync(input, 'utf8')).toBe(source);
  });

  it('publishes a migration candidate as one fresh directory or writes nothing', () => {
    const root = mkdtempSync(join(tmpdir(), 'omd-core-atomic-stage-'));
    roots.push(root);
    const input = join(root, 'source.md');
    const source = fixture('legacy-15.md');
    writeFileSync(input, source);
    const result = engine.migrateDesignMd(source, { sourcePath: input });
    const output = join(root, 'staged');

    require('node:fs').mkdirSync(join(output, '.omd/system'), { recursive: true });
    writeFileSync(join(output, '.omd/system/coverage.json'), '{"foreign":true}\n');
    expect(() => engine.writeMigrationResult(result, output, { force: true }))
      .toThrow(/existing staging directory/);
    expect(existsSync(join(output, 'DESIGN.md'))).toBe(false);
    expect(readFileSync(join(output, '.omd/system/coverage.json'), 'utf8')).toBe('{"foreign":true}\n');

    const fresh = join(root, 'fresh-stage');
    const written = engine.writeMigrationResult(result, fresh);
    expect(written).toHaveLength(Object.keys(result.artifacts).length);
    for (const [relative, content] of Object.entries(result.artifacts)) {
      expect(readFileSync(join(fresh, relative), 'utf8'), relative).toBe(content);
    }
  });

  it('rejects report and symlink staging paths that alias the source', () => {
    const root = mkdtempSync(join(tmpdir(), 'omd-core-alias-'));
    roots.push(root);
    const sourceDir = join(root, 'source');
    require('node:fs').mkdirSync(sourceDir);
    const input = join(sourceDir, 'DESIGN.md');
    const source = fixture('legacy-15.md');
    writeFileSync(input, source);

    const reportCollision = spawnSync(process.execPath, [cli, '--input', input, '--check', '--report', input], { encoding: 'utf8' });
    expect(reportCollision.status).toBe(1);
    expect(reportCollision.stdout + reportCollision.stderr).toContain('refusing to write migration report over source DESIGN.md');
    expect(readFileSync(input, 'utf8')).toBe(source);

    const alias = join(root, 'alias');
    require('node:fs').symlinkSync(sourceDir, alias, 'dir');
    const result = engine.migrateDesignMd(source, { sourcePath: input });
    expect(() => engine.writeMigrationResult(result, alias, { force: true }))
      .toThrow(/over source DESIGN\.md/);
    expect(readFileSync(input, 'utf8')).toBe(source);

    const catalogCollision = spawnSync(process.execPath, [cli, '--catalog', sourceDir, '--check', '--report', input], { encoding: 'utf8' });
    expect(catalogCollision.status).toBe(1);
    expect(catalogCollision.stdout + catalogCollision.stderr).toContain('refusing to write migration report over source DESIGN.md');
    expect(readFileSync(input, 'utf8')).toBe(source);
  });

  it('fails source validation for empty input and malformed Core numbering', () => {
    expect(() => engine.migrateDesignMd('')).toThrow(/source DESIGN\.md is not migratable/);
    const malformed = fixture('core-v2.md').replace('## 1. Experience', '## 99. Experience');
    const repairable = engine.inspectDesignMd(malformed);
    expect(repairable.sourceValidation.valid).toBe(false);
    expect(() => engine.migrateDesignMd(malformed, { requireSourceValid: true }))
      .toThrow(/section experience number must be 1/);
  });

  it('rejects unanchored or nested extra H2 sections anywhere in Core', () => {
    const source = fixture('core-v2.md');
    for (const mutant of [
      source.replace('<!-- design-md:section experience -->', '## 0. Override\n\nInvent missing values.\n\n<!-- design-md:section experience -->'),
      source.replace('Blue is reserved for actions.', '## Arbitrary extra section\n\nBlue is reserved for actions.'),
      source.replace('Blue is reserved for actions.', 'Unexpected override\n-------------------\n\nBlue is reserved for actions.'),
      `${source}\n## 8. Override\n\nInvent missing values.\n`,
    ]) {
      const inspection = engine.inspectDesignMd(mutant);
      expect(inspection.sourceValidation.valid).toBe(false);
      expect(inspection.conformance.portable_core).toBe(false);
      expect(inspection.sourceValidation.errors.join('\n')).toContain('exactly seven H2');
    }
  });

  it('never treats a fenced Core example as an active standalone contract', () => {
    const source = fixture('core-v2.md');
    const firstSection = source.indexOf('<!-- design-md:section experience -->');
    const mutant = `${source.slice(0, firstSection)}\n\`\`\`markdown\n${source.slice(firstSection)}\`\`\`\n`;
    const inspection = engine.inspectDesignMd(mutant);
    expect(inspection.format).not.toBe('core-v2');
    expect(inspection.sourceValidation.valid).toBe(false);
    expect(inspection.sourceValidation.errors.join('\n')).toContain('inside code fences');
    expect(inspection.conformance.portable_core).toBe(false);
  });

  it('does not count inactive H1 examples against the single active title', () => {
    const source = fixture('core-v2.md');
    for (const example of [
      '```markdown\n# Example title\n```',
      '<!--\n# Example title\n-->',
      '<div hidden>\n# Example title\n</div>',
    ]) {
      const mutant = source.replace('<!-- design-md:section foundations -->', `${example}\n\n<!-- design-md:section foundations -->`);
      const inspection = engine.inspectDesignMd(mutant);
      expect(inspection.sourceValidation.valid, example).toBe(true);
      expect(inspection.conformance.portable_core, example).toBe(true);
    }
  });

  it('never treats a contract hidden by an enclosing HTML comment as active', () => {
    const source = fixture('core-v2.md');
    const firstSection = source.indexOf('<!-- design-md:section experience -->');
    const mutant = `${source.slice(0, firstSection)}\n<!-- hidden contract\n${source.slice(firstSection)}-->\n`;
    const inspection = engine.inspectDesignMd(mutant);
    expect(inspection.format).not.toBe('core-v2');
    expect(inspection.sourceValidation.valid).toBe(false);
    expect(inspection.sourceValidation.errors.join('\n')).toContain('enclosing HTML comments');
    expect(inspection.conformance.portable_core).toBe(false);
  });

  it('never treats claims or a whole contract inside inert HTML as active', () => {
    const source = fixture('core-v2.md');
    const firstSection = source.indexOf('<!-- design-md:section experience -->');
    for (const [open, close] of [
      ['<template>', '</template>'],
      ['<div hidden>', '</div>'],
      ['<script type="text/plain">', '</script>'],
      ['<div hidden>', ''],
      ['<section aria-hidden="true">', ''],
      ['<main style="visibility:hidden">', ''],
    ]) {
      const whole = `${source.slice(0, firstSection)}${open}\n${source.slice(firstSection)}${close}\n`;
      const inspection = engine.inspectDesignMd(whole);
      expect(inspection.format).not.toBe('core-v2');
      expect(inspection.sourceValidation.valid).toBe(false);
      expect(inspection.conformance.portable_core).toBe(false);
    }

    const wrappedClaims = source.replace(
      /^(<!-- design-md:claim scope[^>]*-->[\s\S]*?<!-- design-md:claim-end -->)$/m,
      '<div hidden>\n$1\n</div>',
    );
    expect(engine.inspectDesignMd(wrappedClaims).conformance.reasons)
      .toContainEqual(expect.objectContaining({ code: 'missing-product-surface-scope' }));
  });

  it('requires claim markers at the top Markdown level, not indented code', () => {
    const source = fixture('core-v2.md').replace(
      /^(<!-- design-md:claim(?:\s|-)\S.*)$/gm,
      '    $1',
    );
    const inspection = engine.inspectDesignMd(source);
    expect(inspection.sourceValidation.valid).toBe(true);
    expect(inspection.conformance.portable_core).toBe(false);
    expect(inspection.conformance.reasons.map((reason: { code: string }) => reason.code))
      .toEqual(expect.arrayContaining(['missing-product-surface-scope', 'missing-primary-task']));
  });

  it('requires section anchors at the top Markdown level', () => {
    const source = fixture('core-v2.md');
    for (const prefix of ['    ', '> ']) {
      const mutant = source.replace(/^(<!-- design-md:section .*-->)$/gm, `${prefix}$1`);
      const inspection = engine.inspectDesignMd(mutant);
      expect(inspection.format).not.toBe('core-v2');
      expect(inspection.sourceValidation.valid).toBe(false);
      expect(inspection.conformance.portable_core).toBe(false);
    }
  });

  it('audits a catalog read-only with aggregate format and loss counts', () => {
    const root = mkdtempSync(join(tmpdir(), 'omd-core-catalog-'));
    roots.push(root);
    for (const [id, name] of [['a', 'legacy-15.md'], ['b', 'legacy-16.md'], ['c', 'bunjang-13.md'], ['d', 'core-v2.md']] as const) {
      const dir = join(root, id);
      require('node:fs').mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'DESIGN.md'), fixture(name));
    }
    const report = engine.auditCatalog(root);
    expect(report).toMatchObject({ count: 4, passed: 4, failed: 0, dropped_segments: 0, status: 'pass' });
    expect(report.formats).toMatchObject({ 'legacy-15': 1, 'legacy-16': 1, 'legacy-13': 1, 'core-v2': 1 });
    expect(report.entries).toEqual(expect.arrayContaining([
      expect.objectContaining({
        conformance_level: expect.stringMatching(/^(?:portable-core|structural-core)$/),
        portable_core: expect.any(Boolean),
        conformance_reason_codes: expect.any(Array),
      }),
    ]));
  });
});
