import Handlebars from 'handlebars';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { TemplateContext } from './types.js';
import { hslString } from '../utils/color.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = join(__dirname, '..', 'templates');

// ── Handlebars Helpers ───────────────────────────────────────────

function registerHelpers() {
  Handlebars.registerHelper('eq', (a: unknown, b: unknown) => a === b);

  Handlebars.registerHelper('hsl', (hex: string) => {
    if (typeof hex !== 'string') return '';
    return hslString(hex);
  });

  Handlebars.registerHelper('chartColor', (arr: string[], index: number) => {
    if (Array.isArray(arr) && typeof index === 'number') {
      return arr[index] ?? '';
    }
    return '';
  });

  Handlebars.registerHelper('multiply', (a: number, b: number) => a * b);

  Handlebars.registerHelper('spacingUsage', (index: number) => {
    const usages = [
      'None',
      'Tight inner gaps',
      'Icon-to-text gap, inline padding',
      'Small component padding',
      'Default component padding',
      'Component group spacing',
      'Section inner padding',
      'Large section padding',
      'Section gap',
      'Page-level section spacing',
    ];
    return usages[index] ?? '';
  });
}

// ── Partial Registration ─────────────────────────────────────────

function registerPartials() {
  const partialNames = [
    'visual-theme',
    'color-palette',
    'typography',
    'component-stylings',
    'layout',
    'depth-elevation',
    'dos-donts',
    'responsive',
    'agent-prompt-guide',
    'shadcn-tokens',
  ];

  for (const name of partialNames) {
    const content = readFileSync(join(TEMPLATE_DIR, 'partials', `${name}.hbs`), 'utf-8');
    Handlebars.registerPartial(name, content);
  }
}

// ── Render ───────────────────────────────────────────────────────

let initialized = false;

export function renderDesignMd(context: TemplateContext): string {
  if (!initialized) {
    registerHelpers();
    registerPartials();
    initialized = true;
  }

  const mainTemplate = readFileSync(join(TEMPLATE_DIR, 'design-md.hbs'), 'utf-8');
  const template = Handlebars.compile(mainTemplate);
  const result = template(context);

  // Clean up extra blank lines
  return result.replace(/\n{3,}/g, '\n\n').trim() + '\n';
}
