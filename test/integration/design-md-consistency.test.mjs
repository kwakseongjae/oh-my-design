/**
 * DESIGN.md Consistency Integration Test
 *
 * Generates DESIGN.md for various reference + preference combinations
 * and asserts that the inline-modification logic in generate-css.ts
 * doesn't leave contradictions between reference content and Style
 * Preferences (e.g. underline inputs preferred but Section 4 still
 * shows bordered inputs).
 *
 * Each (reference, preference combo) is its own describe block, and
 * each consistency check is its own it(), so PR reviewers can read
 * the vitest output to see exactly which combination/check regressed.
 */

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REF_DIR = join(__dirname, '..', '..', 'references');

// ── Helpers ──────────────────────────────────────────────────────

function readRef(id) {
  return readFileSync(join(REF_DIR, id, 'DESIGN.md'), 'utf-8');
}

/** Simulate applyOverridesToMd with inline modification (matching the new generate-css.ts logic) */
function simulateOutput(refId, overrides, prefs) {
  let result = readRef(refId);
  result = result.replace(/^# .+$/m, `# Custom Design System (based on ${refId})`);

  // Color replacement
  if (overrides.primaryColor && overrides.originalPrimary &&
      overrides.primaryColor !== overrides.originalPrimary) {
    const re = new RegExp(overrides.originalPrimary.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    result = re[Symbol.replace](result, overrides.primaryColor);
  }

  // Inline modifications (same logic as generate-css.ts)
  if (prefs) {
    if (prefs.inputStyle === 'underline') {
      result = result.replace(
        /### Inputs & Forms\n[\s\S]*?(?=###|\n## \d+\.)/,
        `### Inputs & Forms\n- Style: Underline -- bottom border only, no side or top borders\n- Border-bottom: 2px solid border color, no border-radius on the field itself\n- Focus: bottom border thickens or shifts to primary color\n- Text: foreground color, Placeholder: muted-foreground\n- No background fill -- transparent base\n\n`
      );
    }

    if (prefs.headerStyle === 'glass') {
      result = result.replace(
        /### Navigation\n[\s\S]*?(?=###|\n## \d+\.)/,
        (match) => {
          if (/transparent|blur|glass/i.test(match)) return match;
          return `### Navigation\n- Style: Glass & Floating -- transparent background with backdrop-filter: blur(12px)\n- Border-bottom only (1px border color), no solid fill\n- Header floats above content\n\n`;
        }
      );
    } else if (prefs.headerStyle === 'solid') {
      result = result.replace(
        /### Navigation\n[\s\S]*?(?=###|\n## \d+\.)/,
        (match) => {
          if (/solid.*?dark|dark.*?background|dark\s+nav/i.test(match)) return match;
          return `### Navigation\n- Style: Solid & Bold -- solid dark background, high contrast\n- Light text on dark header surface\n\n`;
        }
      );
    }

    if (prefs.cardStyle === 'bordered') {
      result = result.replace(
        /(### Cards & Containers\n[\s\S]*?)Shadow:.*?\n/,
        '$1Shadow: none -- use border for definition, flat hierarchy\n'
      );
    }

    if (prefs.depthStyle === 'flat') {
      result = result.replace(
        /\*\*Shadow Philosophy\*\*:[\s\S]*?(?=\n##|\n---)/,
        '**Shadow Philosophy**: This design uses a flat approach -- no box-shadows on cards or containers. Depth hierarchy is achieved through background color variation and border definition rather than elevation.'
      );
    }

    if (prefs.density === 'compact') {
      result = result.replace(
        /### Whitespace Philosophy\n[\s\S]*?(?=###|\n## \d+\.)/,
        `### Whitespace Philosophy\n- **Compact & dense**: Optimize for information density. Tight padding (8-12px), small gaps (4-8px).\n- **Reduced spacing**: Use ~70% of reference spacing values.\n- **Maximize viewport**: Show more content without scrolling.\n\n`
      );
    }

    if (overrides.borderRadius) {
      result = result.replace(/(?<=^[-*].*?)Radius:\s*\d+px/gim, `Radius: ${overrides.borderRadius}`);
    }
  }

  return result;
}

// ── Contradiction Detectors ──────────────────────────────────────

function extractSection(md, sectionNum) {
  const re = new RegExp(`## ${sectionNum}\\. [^\\n]+\\n([\\s\\S]*?)(?=## \\d+\\.|## Style Preferences|---\\n\\n## |$)`);
  const m = md.match(re);
  return m ? m[1] : '';
}

/** Check: does Section 4 still mention "border: 1px solid" for inputs when user chose underline? */
function checkInputConflict(md, chosenInputStyle) {
  if (chosenInputStyle !== 'underline') return { pass: true, note: 'No underline preference' };
  const sec4 = extractSection(md, 4);

  const inputSection = sec4.match(/### Inputs & Forms\n[\s\S]*?(?=###|$)/i)?.[0] || '';
  const hasBorderedInput = /border:.*?1px\s*solid/i.test(inputSection);
  if (hasBorderedInput) {
    return {
      pass: false,
      note: 'CONFLICT: Section 4 Inputs still describes bordered inputs (1px solid) after inline modification should have replaced it with underline',
    };
  }
  return { pass: true, note: 'Section 4 Inputs correctly shows underline style' };
}

/** Check: does Section 6 still warn against shadows when user chose flat depth? (or vice versa) */
function checkDepthConflict(md, chosenDepth) {
  const sec6 = extractSection(md, 6);

  if (chosenDepth === 'flat') {
    const hasFlat = /flat\s+approach|no\s+box-shadows|border\s+definition/i.test(sec6);
    if (!hasFlat) {
      const promotesShadows = /multi.layer|graduated\s+shadow|shadow\s+stacks/i.test(sec6);
      if (promotesShadows) {
        return { pass: false, note: 'Section 6 still promotes multi-layer shadows after flat preference' };
      }
    }
    return { pass: true, note: 'Section 6 consistent with flat depth' };
  }

  if (chosenDepth === 'layered') {
    const sec7 = extractSection(md, 7);
    const warnsAgainstShadows =
      /shadows?.*?invisible/i.test(sec6) ||
      /shadows?.*?barely\s*visible/i.test(sec6) ||
      /don'?t.*?use.*?shadows?.*?on\s+black/i.test(sec7);
    if (warnsAgainstShadows) {
      return {
        pass: false,
        note: 'Section 6/7 warns against shadows (invisible on black) -- layered preference is impractical here',
      };
    }
  }
  return { pass: true, note: 'Depth style consistent' };
}

/** Check: does Section 4 Navigation match the chosen header style after inline modification? */
function checkHeaderConflict(md, chosenHeader) {
  if (!chosenHeader) return { pass: true, note: 'No header preference' };
  const sec4 = extractSection(md, 4);
  const navSection = sec4.match(/### Navigation[\s\S]*?(?=###|$)/i)?.[0] || '';

  if (chosenHeader === 'solid' && /transparent|blur|glass|float/i.test(navSection)) {
    return { pass: false, note: 'Section 4 Navigation still describes glass/transparent after solid preference' };
  }
  if (chosenHeader === 'glass' && /solid\s+dark\s+background/i.test(navSection)) {
    return { pass: false, note: 'Section 4 Navigation still describes solid dark after glass preference' };
  }
  return { pass: true, note: 'Header consistent after inline modification' };
}

/** Check: CSS --background lightness vs DESIGN.md background color mentions */
function checkCssBackgroundConflict(md, refBg) {
  const isDarkRef = parseInt(refBg.replace('#', ''), 16) < 0x333333;
  if (!isDarkRef) return { pass: true, note: 'Light reference, no issue' };

  const cssMatch = md.match(/--background:\s*([^;]+)/);
  if (!cssMatch) return { pass: true, note: 'No CSS block found' };

  const lightnessMatch = cssMatch[1].match(/(\d+)%\s*$/);
  if (lightnessMatch) {
    const lightness = parseInt(lightnessMatch[1]);
    if (lightness > 50) {
      return {
        pass: false,
        note: `CONFLICT: Reference is dark-native (bg=${refBg}) but CSS --background has ${lightness}% lightness (light theme)`,
      };
    }
  }
  return { pass: true, note: 'CSS background matches dark reference' };
}

/** Check: border-radius consistency (preference vs Section 4 button radius) */
function checkRadiusConflict(md, chosenRadius) {
  if (!chosenRadius) return { pass: true, note: 'No radius override' };

  const sec4 = extractSection(md, 4);
  const buttonRadii = [...sec4.matchAll(/radius:?\s*(\d+)px/gi)].map(m => m[1]);
  const chosenPx = parseInt(chosenRadius);

  const conflicts = buttonRadii.filter(r => Math.abs(parseInt(r) - chosenPx) > 4 && parseInt(r) !== 9999);
  if (conflicts.length > 0) {
    return {
      pass: false,
      note: `MINOR: Section 4 has radius values [${conflicts.map(r => r + 'px').join(', ')}] that differ from chosen ${chosenRadius} (not auto-replaced)`,
    };
  }
  return { pass: true, note: 'Radius values consistent' };
}

/** Check: Card style -- if user chose bordered, does Section 4 still describe shadow values? */
function checkCardShadowConflict(md, chosenCardStyle) {
  if (chosenCardStyle !== 'bordered') return { pass: true, note: 'Card style not bordered, no check needed' };
  const sec4 = extractSection(md, 4);
  const cardSection = sec4.match(/### Cards[\s\S]*?(?=###|$)/i)?.[0] || '';

  if (/shadow:.*?0px.*?rgba/i.test(cardSection)) {
    return {
      pass: false,
      note: 'Section 4 Cards still has shadow rgba values after bordered card preference (should say "Shadow: none")',
    };
  }
  return { pass: true, note: 'Card shadow correctly removed for bordered style' };
}

// ── Test Cases ───────────────────────────────────────────────────

const TEST_CASES = [
  {
    name: 'ClickHouse + Bordered cards + Underline inputs',
    refId: 'clickhouse',
    refBg: '#000000',
    overrides: { borderRadius: '4px' },
    prefs: {
      buttonStyle: 'sharp',
      inputStyle: 'underline',
      headerStyle: 'solid',
      cardStyle: 'bordered',
      density: 'compact',
    },
  },
  {
    name: 'Baemin + Underline inputs + Spacious',
    refId: 'baemin',
    refBg: '#ffffff',
    overrides: { borderRadius: '8px' },
    prefs: {
      buttonStyle: 'sharp',
      inputStyle: 'underline',
      headerStyle: 'solid',
      cardStyle: 'elevated',
      depthStyle: 'layered',
      density: 'spacious',
    },
  },
  {
    name: 'Karrot + All matching (no conflict expected)',
    refId: 'karrot',
    refBg: '#ffffff',
    overrides: { borderRadius: '8px' },
    prefs: {
      buttonStyle: 'rounded',
      inputStyle: 'bordered',
      headerStyle: 'glass',
      cardStyle: 'bordered',
      depthStyle: 'flat',
      density: 'spacious',
    },
  },
  {
    name: 'Toss + Flat depth + Bordered cards',
    refId: 'toss',
    refBg: '#ffffff',
    overrides: { borderRadius: '12px' },
    prefs: {
      buttonStyle: 'rounded',
      inputStyle: 'bordered',
      headerStyle: 'glass',
      cardStyle: 'bordered',
      depthStyle: 'flat',
      density: 'spacious',
    },
  },
  {
    name: 'Vercel + Rounded + Underline + Glass',
    refId: 'vercel',
    refBg: '#ffffff',
    overrides: { borderRadius: '9999px' },
    prefs: {
      buttonStyle: 'rounded',
      inputStyle: 'underline',
      headerStyle: 'glass',
      cardStyle: 'elevated',
      depthStyle: 'layered',
      density: 'spacious',
    },
  },
  {
    name: 'Kakao + Sharp + Compact + Solid header',
    refId: 'kakao',
    refBg: '#ffffff',
    overrides: { borderRadius: '4px' },
    prefs: {
      buttonStyle: 'sharp',
      inputStyle: 'bordered',
      headerStyle: 'solid',
      cardStyle: 'bordered',
      depthStyle: 'flat',
      density: 'compact',
    },
  },
];

// ── Suite ────────────────────────────────────────────────────────

describe('DESIGN.md consistency across reference + preference combinations', () => {
  for (const tc of TEST_CASES) {
    describe(tc.name, () => {
      const md = simulateOutput(tc.refId, tc.overrides, tc.prefs);

      it('CSS --background matches reference darkness', () => {
        const r = checkCssBackgroundConflict(md, tc.refBg);
        expect(r.pass, r.note).toBe(true);
      });

      it('Inputs reflect chosen input style', () => {
        const r = checkInputConflict(md, tc.prefs.inputStyle);
        expect(r.pass, r.note).toBe(true);
      });

      it('Depth/Shadow philosophy is internally consistent', () => {
        const inferredDepth = tc.prefs.cardStyle === 'bordered' ? 'flat' : 'layered';
        const r = checkDepthConflict(md, inferredDepth);
        expect(r.pass, r.note).toBe(true);
      });

      it('Navigation reflects chosen header style', () => {
        const r = checkHeaderConflict(md, tc.prefs.headerStyle);
        expect(r.pass, r.note).toBe(true);
      });

      it('Section 4 radius values are consistent with override', () => {
        const r = checkRadiusConflict(md, tc.overrides.borderRadius);
        expect(r.pass, r.note).toBe(true);
      });

      it('Cards drop shadow when bordered style chosen', () => {
        const r = checkCardShadowConflict(md, tc.prefs.cardStyle);
        expect(r.pass, r.note).toBe(true);
      });
    });
  }
});
