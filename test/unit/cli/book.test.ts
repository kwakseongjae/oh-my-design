import { describe, expect, it } from 'vitest';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { contrastRatio, loadSystem, parseDesignMd, renderBook } from '../../../src/cli/book.js';

function fixtureRoot(): string {
  return mkdtempSync(join(tmpdir(), 'omd-book-'));
}

const GRAPH = {
  identity: { name: '온집', kind: 'commerce' },
  experience: {
    summary: '자리를 먼저 보여 주는 상점.',
    principles: ['Lived room first (D-P1-1).'],
    design_direction: ['P2 Quiet paper shop. D-P2-1.'],
    avoid: ['purple gradients'],
  },
  foundations: {
    tokens: {
      'color.ink': { $type: 'color', $value: '#2B251E', $description: 'Warm espresso ink. D-P2-5.' },
      'color.paper': { $type: 'color', $value: '#F3EEE4', $description: 'Warm linen paper. D-P2-5.' },
      'color.weak': { $type: 'color', $value: '#DDD8CE', $description: 'Deliberately low contrast.' },
      'space.3': { $type: 'spacing', $value: '1rem', $description: 'Row padding step. D-P2-2.' },
    },
    contrast_pairs: [
      { foreground: 'color.ink', background: 'color.paper', minimum_ratio: 4.5 },
      { foreground: 'color.weak', background: 'color.paper', minimum_ratio: 4.5 },
    ],
  },
  components_states: {
    components: [
      {
        id: 'listbox',
        semantics: 'P-FN-01 custom listbox. Native select popup is forbidden.',
        anatomy: ['trigger button', 'role=listbox popover'],
        interaction: {
          state_applicability: {
            'focus-visible': { applicability: 'applicable' },
            disabled: { applicability: 'not-applicable', reason: 'Sort is always available.' },
          },
        },
      },
    ],
  },
  governance: {
    decisions: [{ path: '/identity/name', source_class: 'prompt-fact', evidence: ['PROMPT.md'] }],
  },
};

describe('omd book', () => {
  it('computes WCAG contrast and leaves unparseable colours unresolved', () => {
    expect(contrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 5);
    expect(contrastRatio('#fff', '#ffffff')).toBeCloseTo(1, 5);
    expect(contrastRatio('rgb(0, 0, 0)', '#ffffff')).toBeCloseTo(21, 5);
    expect(contrastRatio('var(--nope)', '#ffffff')).toBeUndefined();
  });

  it('prefers the compiled graph and measures declared pairs against their minimum', () => {
    const root = fixtureRoot();
    mkdirSync(join(root, '.omd', 'system'), { recursive: true });
    writeFileSync(join(root, '.omd', 'system', 'graph.json'), JSON.stringify(GRAPH), 'utf8');
    writeFileSync(join(root, 'DESIGN.md'), '# 온집\n\nP-CM-01 product card.\n', 'utf8');

    const system = loadSystem(root);
    if ('error' in system) throw new Error(system.error);

    expect(system.source).toBe('graph');
    expect(system.name).toBe('온집');
    expect(system.tokens).toHaveLength(4);

    // The decision id travels with the token so the book can answer "why this value".
    expect(system.tokens.find((t) => t.name === 'color.ink')?.decisions).toEqual(['D-P2-5']);

    const passing = system.contrastPairs.find((p) => p.foreground === 'color.ink');
    const failing = system.contrastPairs.find((p) => p.foreground === 'color.weak');
    expect(passing?.status).toBe('pass');
    expect(passing?.actual).toBeGreaterThan(4.5);
    expect(failing?.status).toBe('fail');

    // States that deliberately do not apply keep their reason — that is the contract.
    const listbox = system.components[0];
    expect(listbox.states.find((s) => s.name === 'disabled')).toMatchObject({
      applicability: 'not-applicable',
      reason: 'Sort is always available.',
    });
    expect(listbox.presets).toContain('P-FN-01');
    expect(system.decisions[0]).toMatchObject({ path: '/identity/name', sourceClass: 'prompt-fact' });
  });

  it('falls back to DESIGN.md when no compiled graph exists', () => {
    const root = fixtureRoot();
    writeFileSync(
      join(root, 'DESIGN.md'),
      [
        '# 이웃장터',
        '',
        '### Principles',
        '- Density over showcase (D-P1-1).',
        '',
        '### Tokens',
        '- **color.accent**: `#8B4529` — Signal only. D-P2-4.',
        '',
        '### Component: listing-row',
        '**Semantics:** P-MK-01 dense row.',
      ].join('\n'),
      'utf8',
    );

    const system = loadSystem(root);
    if ('error' in system) throw new Error(system.error);

    expect(system.source).toBe('design-md');
    expect(system.name).toBe('이웃장터');
    expect(system.principles).toEqual(['Density over showcase (D-P1-1).']);
    expect(system.tokens[0]).toMatchObject({ name: 'color.accent', value: '#8B4529', decisions: ['D-P2-4'] });
    expect(system.components[0]).toMatchObject({ id: 'listing-row', presets: ['P-MK-01'] });
  });

  it('reports a usable error when the project has no design system', () => {
    const system = loadSystem(fixtureRoot());
    expect('error' in system && system.error).toMatch(/No design system found/);
  });

  it('renders every section and escapes untrusted system text', () => {
    const system = parseDesignMd('/tmp/x', '# <img src=x onerror=alert(1)>\n\n### Principles\n- safe\n');
    const html = renderBook(system);

    for (const id of ['overview', 'tokens', 'contrast', 'components', 'decisions', 'presets']) {
      expect(html).toContain(`<section id="${id}"`);
    }
    expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;');
    expect(html).not.toContain('<img src=x onerror=alert(1)>');
    // Motion in the book itself honours the same contract the book audits.
    expect(html).toContain('prefers-reduced-motion');
  });
});
