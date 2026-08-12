import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '../../..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

const paths = [
  'agents/omd-asset-curator.md',
  'agents/omd-ux-engineer.md',
  'agents/omd-humanizer.md',
  'agents/omd-locale-adapter.md',
  'agents/omd-ux-writer.md',
  'agents/omd-ux-researcher.md',
  'skills/omd-humanize/SKILL.md',
  'skills/omd-locale-adapter/SKILL.md',
  'skills/omd-taste/SKILL.md',
  'skills/omd-harness/references/master-conversation.md',
  'skills/omd-reference-capture/SKILL.md',
  'skills/omd-apply/SKILL.md',
];

const sources = Object.fromEntries(paths.map((path) => [path, read(path)]));
const apply = sources['skills/omd-apply/SKILL.md'];
const capture = sources['skills/omd-reference-capture/SKILL.md'];

describe('Core v2 read/apply consumer cutover', () => {
  it('uses stable semantic anchors and keeps legacy input as an explicit fallback', () => {
    for (const [path, source] of Object.entries(sources)) {
      expect(source, path).not.toMatch(/§\d/u);
      expect(source, path).toMatch(/(?:legacy compatibility|legacy meaning-based|legacy compatibility input)/iu);
    }

    for (const source of [
      sources['agents/omd-humanizer.md'],
      sources['agents/omd-locale-adapter.md'],
      sources['agents/omd-ux-writer.md'],
      sources['skills/omd-humanize/SKILL.md'],
      sources['skills/omd-locale-adapter/SKILL.md'],
    ]) {
      expect(source).toContain('content-locales');
      expect(source).toContain('Voice & Tone');
    }

    expect(sources['agents/omd-asset-curator.md']).toContain('foundations.tokens.brand-500');
    expect(sources['agents/omd-asset-curator.md']).toContain('typography-assets');
    expect(sources['agents/omd-ux-engineer.md']).toContain('layout-platforms');
    expect(sources['agents/omd-ux-engineer.md']).toContain('components-states');
    expect(sources['skills/omd-harness/references/master-conversation.md']).toContain('exact stable anchors');
  });

  it('routes learned taste scopes to Core anchors and graph objects', () => {
    const taste = sources['skills/omd-taste/SKILL.md'];
    for (const pair of [
      ['components.*', 'graph.components_states'],
      ['color', 'graph.foundations.tokens'],
      ['typography', 'graph.typography_assets'],
      ['voice', 'graph.content_locales'],
      ['visualTheme', 'graph.experience'],
    ]) {
      expect(taste).toContain(pair[0]);
      expect(taste).toContain(pair[1]);
    }
  });

  it('makes only an adopted, exact hash-bound portable graph canonical for apply', () => {
    expect(apply).toContain('profile: portable-core');
    expect(apply).toContain('authority.canonical: system-graph');
    expect(apply).toContain('actual graph와');
    expect(apply).toContain('exact SHA-256');
    expect(apply).toContain('graph→projection semantic equality');
    expect(apply).toContain('Portable Core usefulness');
    expect(apply).toContain('graph와 projection이');
    expect(apply).toContain('충돌하면 graph가 이긴다');
    expect(apply).toContain('migration-candidate');
    expect(apply).toContain('candidate graph는 non-authoritative');
    expect(apply).toContain('candidate를 적용하지 않고 fail closed');
    expect(apply).toContain('standalone DESIGN.md stable anchors (sidecar absent/invalid)');

    const priority = apply.match(/적용 우선순위:[\s\S]*?reference-capture evidence is never a prescriptive tier/u)?.[0];
    expect(priority).toBeTruthy();
    expect(priority.indexOf('adopted valid portable-core graph')).toBeLessThan(
      priority.indexOf('its DESIGN.md portable projection'),
    );
  });

  it('keeps capture evidence non-prescriptive until a graph checkpoint admits it', () => {
    for (const source of [apply, capture]) {
      expect(source).toMatch(/evidence-only/iu);
      expect(source).toContain('graph');
      expect(source).toMatch(/admit(?:ted)?/iu);
      expect(source).toMatch(/exact SHA-256|hash-bound/iu);
    }

    expect(apply).toContain('reference-capture evidence is never a prescriptive tier');
    expect(apply).toContain('자동 적용·동기화·fallback하지 않는다');
    expect(capture).toContain('capture 파일 자체는');
    expect(capture).toContain('admission 뒤에도 evidence로 남는다');
    expect(capture).toMatch(/write\s+scope는 `assets\/_reference\/<id>\/` evidence/u);
    expect(capture).not.toContain('tokens.json 자동 활용');
    expect(capture).not.toContain('hex 값 동기화 우선');
    expect(capture).not.toContain('live_overrides 우선 처리');
  });

  it('resolves bundled-reference provenance without assuming legacy metadata', () => {
    const researcher = sources['agents/omd-ux-researcher.md'];
    expect(researcher).toContain('`governance`');
    expect(researcher).toContain('hash-listed provenance artifact');
    expect(researcher).toContain('legacy YAML metadata');
    expect(researcher).toContain('URL이 없으면 추론하지 말고 `[unverified]`');
  });
});
