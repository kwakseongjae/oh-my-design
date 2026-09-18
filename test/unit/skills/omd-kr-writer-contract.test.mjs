import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '../../..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const skill = read('skills/omd-kr-writer/SKILL.md');
const agent = read('agents/omd-kr-writer.md');
const frontmatter = read('web/src/lib/blog/frontmatter.ts');

const PRESETS = [
  'toss-tech-design',
  'karrot-neighborly',
  'brunch-maker-popular',
  'naver-d2-engineering',
  'biz-formal-report',
  'academic-paper',
  'journalism-broadsheet',
  'kakao-warm-product',
  'line-global-saas',
  'academic-lecture-essay',
  'emotional-brand',
  'legal-disclosure',
];

describe('omd:kr-writer production contract', () => {
  it('keeps all twelve self-contained presets aligned with the canonical agent', () => {
    const tablePresets = [...skill.matchAll(/^\|\s*\d+\s*\|\s*`([^`]+)`/gm)].map((match) => match[1]);
    const detailedPresets = [
      'toss-tech-design',
      ...skill.matchAll(/^### ([a-z0-9-]+) —/gm),
    ].map((value) => Array.isArray(value) ? value[1] : value);

    expect(tablePresets).toEqual(PRESETS);
    expect(detailedPresets).toEqual(PRESETS);
    expect(agent).toContain('with 12 voice presets');
    for (const preset of PRESETS) expect(agent).toContain(preset);
  });

  it('matches the strict four-field Korean-canonical production blog schema', () => {
    expect(frontmatter).toContain('const REQUIRED_KEYS = ["title", "description", "date", "tags"] as const;');
    for (const contract of [skill, agent]) {
      expect(contract).toContain('web/src/content/blog/<slug>/ko.md');
      expect(contract).toContain('voice_preset');
    }
    expect(skill).toContain('`title`, `description`, `date`, `tags` 네 필드만');
    expect(agent).toContain('exactly `title`, `description`, `date`, and `tags`');
    expect(skill).toContain('한국어를 canonical로 작성');
    expect(skill).toContain('handoff에');
    expect(agent).toContain('Korean is canonical');
    expect(agent).toContain('orchestrator handoff metadata');
  });
});
