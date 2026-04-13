import type { ReferenceEntry } from './reference-parser.js';
import type { CustomOverrides } from '../cli/prompts.js';
import {
  generateColorScale,
  contrastForeground,
  hslString,
  hexToHsl,
  hslToHex,
  lighten,
  darken,
  generateChartColors,
} from '../utils/color.js';

/**
 * Apply user overrides to a reference DESIGN.md.
 *
 * Strategy:
 *  - "as-is": return the original DESIGN.md content with minimal additions
 *  - "customized": perform text-level replacements for color/font/radius/weight
 *    and append a customization summary + shadcn CSS variables block
 *
 * This is intentionally NOT an AI call. It's deterministic string transformation.
 */
export function applyOverrides(
  ref: ReferenceEntry,
  overrides: CustomOverrides,
  mode: 'as-is' | 'customized',
): { designMd: string; shadcnCss: string; previewData: PreviewData } {
  let md = ref.designMd;

  const effectivePrimary = overrides.primaryColor || ref.colors.primary;
  const effectiveFont = overrides.fontFamily || ref.typography.primary;
  const effectiveWeight = overrides.headingWeight || ref.typography.headingWeight;
  const effectiveRadius = overrides.borderRadius || ref.radius.replace(/[-–].*/, '').trim();
  const effectiveBg = ref.colors.background;
  const effectiveFg = ref.colors.foreground;

  if (mode === 'customized') {
    // Replace primary color throughout
    if (overrides.primaryColor) {
      md = replaceColor(md, ref.colors.primary, overrides.primaryColor);
    }

    // Replace font family
    if (overrides.fontFamily) {
      md = replaceFont(md, ref.typography.primary, overrides.fontFamily);
    }

    // Replace heading weight
    if (overrides.headingWeight) {
      md = replaceWeight(md, ref.typography.headingWeight, overrides.headingWeight);
    }

    // Replace border-radius
    if (overrides.borderRadius) {
      md = replaceRadius(md, ref.radius, overrides.borderRadius);
    }

    // Update the title
    md = md.replace(
      /^# .+$/m,
      `# Custom Design System (based on ${ref.name})`,
    );

    // Append customization summary
    md += buildCustomizationSummary(ref, overrides);
  }

  // Strip emojis
  md = md.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1FA00}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '');
  md = md.replace(/✅\s*/g, 'DO: ');
  md = md.replace(/❌\s*/g, "DON'T: ");

  // Append iconography section
  md += buildIconographySection();

  // Generate shadcn CSS
  const shadcnCss = generateShadcnCss(effectivePrimary, effectiveBg, effectiveFg, effectiveRadius, ref, overrides);

  // Append shadcn CSS block
  md += buildShadcnSection(shadcnCss);

  // Append document policies
  md += buildDocumentPolicies();

  // Build preview data
  const previewData = buildPreviewData(ref, overrides, effectivePrimary, effectiveBg, effectiveFg, effectiveFont, effectiveWeight, effectiveRadius);

  return { designMd: md, shadcnCss, previewData };
}

// ── Text replacements ────────────────────────────────────────────

function replaceColor(md: string, oldHex: string, newHex: string): string {
  // Replace the exact hex (case-insensitive)
  const regex = new RegExp(escapeRegex(oldHex), 'gi');
  return md.replace(regex, newHex);
}

function replaceFont(md: string, oldFont: string, newFont: string): string {
  const regex = new RegExp(escapeRegex(oldFont), 'g');
  return md.replace(regex, newFont);
}

function replaceWeight(md: string, oldWeight: string, newWeight: string): string {
  // Only replace weight in Display/Heading rows and key characteristics
  // Be careful not to replace all numbers
  const regex = new RegExp(`(Display.*?\\|\\s*)${oldWeight}(\\s*\\|)`, 'g');
  let result = md.replace(regex, `$1${newWeight}$2`);
  // Also replace "weight X" patterns
  result = result.replace(
    new RegExp(`weight ${oldWeight}`, 'g'),
    `weight ${newWeight}`,
  );
  return result;
}

function replaceRadius(md: string, oldRadius: string, newRadius: string): string {
  // Replace "Xpx" radius patterns
  const oldBase = oldRadius.replace(/[-–].*/, '').trim();
  if (oldBase === newRadius) return md;
  const regex = new RegExp(`${escapeRegex(oldBase)}`, 'g');
  return md.replace(regex, newRadius);
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── Customization summary section ────────────────────────────────

function buildCustomizationSummary(ref: ReferenceEntry, overrides: CustomOverrides): string {
  const changes: string[] = [];
  if (overrides.primaryColor) {
    changes.push(`- **Primary color**: ${ref.colors.primary} → ${overrides.primaryColor}`);
  }
  if (overrides.fontFamily) {
    changes.push(`- **Font**: ${ref.typography.primary} → ${overrides.fontFamily}`);
  }
  if (overrides.headingWeight) {
    changes.push(`- **Heading weight**: ${ref.typography.headingWeight} → ${overrides.headingWeight}`);
  }
  if (overrides.borderRadius) {
    changes.push(`- **Border radius**: ${ref.radius} → ${overrides.borderRadius}`);
  }
  if (overrides.additionalNotes) {
    changes.push(`- **Additional notes**: ${overrides.additionalNotes}`);
  }

  if (changes.length === 0) return '';

  return `

---

## Customization Applied

> Based on **${ref.name}** design system with the following modifications:

${changes.join('\n')}
`;
}

// ── shadcn CSS generation ────────────────────────────────────────

function generateShadcnCss(
  primary: string,
  background: string,
  foreground: string,
  radius: string,
  ref: ReferenceEntry,
  overrides: CustomOverrides,
): string {
  const scale = generateColorScale(primary);
  const accent = ref.colors.accent || hslToHex((hexToHsl(primary)[0] + 30) % 360, 60, 55);
  const border = ref.colors.border || lighten(foreground, 75);
  const muted = lighten(background === '#ffffff' ? '#f5f5f5' : background, 5);
  const destructive = '#ef4444';
  const chart = generateChartColors(primary);

  const radiusRem = radius === '9999px' ? '9999px' : `${parseInt(radius) / 16}rem`;

  const vars: Record<string, string> = {
    '--background': hslString(background),
    '--foreground': hslString(foreground),
    '--card': hslString(background === '#ffffff' ? '#ffffff' : lighten(background, 3)),
    '--card-foreground': hslString(foreground),
    '--popover': hslString(background === '#ffffff' ? '#ffffff' : lighten(background, 5)),
    '--popover-foreground': hslString(foreground),
    '--primary': hslString(primary),
    '--primary-foreground': hslString(contrastForeground(primary)),
    '--secondary': hslString(scale[100]),
    '--secondary-foreground': hslString(foreground),
    '--muted': hslString(muted),
    '--muted-foreground': hslString(lighten(foreground, 40)),
    '--accent': hslString(accent),
    '--accent-foreground': hslString(contrastForeground(accent)),
    '--destructive': hslString(destructive),
    '--destructive-foreground': hslString(contrastForeground(destructive)),
    '--border': hslString(border),
    '--input': hslString(border),
    '--ring': hslString(primary),
    '--radius': radiusRem,
    '--chart-1': hslString(chart[0]),
    '--chart-2': hslString(chart[1]),
    '--chart-3': hslString(chart[2]),
    '--chart-4': hslString(chart[3]),
    '--chart-5': hslString(chart[4]),
  };

  const lines = ['@layer base {', '  :root {'];
  for (const [k, v] of Object.entries(vars)) {
    lines.push(`    ${k}: ${v};`);
  }
  lines.push('  }');

  // Dark mode
  if (overrides.darkMode) {
    const darkBg = hslToHex(hexToHsl(primary)[0], 15, 7);
    const darkFg = '#fafafa';
    const darkBorder = hslToHex(hexToHsl(primary)[0], 10, 18);
    const darkMuted = hslToHex(hexToHsl(primary)[0], 10, 15);

    lines.push('', '  .dark {');
    const darkVars: Record<string, string> = {
      '--background': hslString(darkBg),
      '--foreground': hslString(darkFg),
      '--card': hslString(lighten(darkBg, 3)),
      '--card-foreground': hslString(darkFg),
      '--popover': hslString(lighten(darkBg, 5)),
      '--popover-foreground': hslString(darkFg),
      '--primary': hslString(primary),
      '--primary-foreground': hslString(contrastForeground(primary)),
      '--secondary': hslString(hslToHex(hexToHsl(primary)[0], 15, 20)),
      '--secondary-foreground': hslString(darkFg),
      '--muted': hslString(darkMuted),
      '--muted-foreground': hslString(darken(darkFg, 35)),
      '--accent': hslString(accent),
      '--accent-foreground': hslString(contrastForeground(accent)),
      '--destructive': hslString(destructive),
      '--destructive-foreground': hslString(contrastForeground(destructive)),
      '--border': hslString(darkBorder),
      '--input': hslString(lighten(darkBorder, 5)),
      '--ring': hslString(primary),
      '--chart-1': hslString(chart[0]),
      '--chart-2': hslString(chart[1]),
      '--chart-3': hslString(chart[2]),
      '--chart-4': hslString(chart[3]),
      '--chart-5': hslString(chart[4]),
    };
    for (const [k, v] of Object.entries(darkVars)) {
      lines.push(`    ${k}: ${v};`);
    }
    lines.push('  }');
  }

  lines.push('}');
  return lines.join('\n');
}

function buildShadcnSection(css: string): string {
  return `

---

## 10. shadcn/ui Theme

Copy this CSS block into your \`globals.css\` to apply this design system to shadcn/ui components.

\`\`\`css
${css}
\`\`\`
`;
}

// ── Preview Data ─────────────────────────────────────────────────

export interface PreviewData {
  name: string;
  basedOn: string;
  primary: string;
  background: string;
  foreground: string;
  font: string;
  headingWeight: string;
  radius: string;
  shadcnCss: string;
  designMd: string;
  colors: {
    primary: string;
    accent: string;
    muted: string;
    destructive: string;
    border: string;
    scale: Record<string, string>;
    chart: string[];
  };
  darkMode: boolean;
}

function buildPreviewData(
  ref: ReferenceEntry,
  overrides: CustomOverrides,
  primary: string,
  background: string,
  foreground: string,
  font: string,
  headingWeight: string,
  radius: string,
): PreviewData {
  const scale = generateColorScale(primary);
  const accent = ref.colors.accent || hslToHex((hexToHsl(primary)[0] + 30) % 360, 60, 55);
  const border = ref.colors.border || lighten(foreground, 75);
  const chart = generateChartColors(primary);

  return {
    name: overrides.primaryColor || overrides.fontFamily ? `Custom (based on ${ref.name})` : ref.name,
    basedOn: ref.name,
    primary,
    background,
    foreground,
    font,
    headingWeight,
    radius,
    shadcnCss: '',  // filled later
    designMd: '',   // filled later
    colors: {
      primary,
      accent,
      muted: lighten(background === '#ffffff' ? '#f5f5f5' : background, 5),
      destructive: '#ef4444',
      border,
      scale: scale as unknown as Record<string, string>,
      chart,
    },
    darkMode: overrides.darkMode,
  };
}

// ── Iconography section ──────────────────────────────────────────

function buildIconographySection(): string {
  return `

---

## Iconography & SVG Guidelines

### Icon Library

Use a single, consistent icon library throughout the project. Recommended options:

- **Lucide React** (\`lucide-react\`): Default for shadcn/ui projects. 1,400+ icons, tree-shakeable, consistent 24x24 grid.
- **Radix Icons** (\`@radix-ui/react-icons\`): 300+ icons, 15x15 grid, minimal and geometric.
- **Heroicons** (\`@heroicons/react\`): 300+ icons by Tailwind team, outline and solid variants.

Pick ONE library and use it everywhere. Do not mix icon libraries within the same project.

### SVG Usage Rules

- All icons must be inline SVG components (not \`<img>\` tags) for color and size control.
- Icon size follows the type scale: 16px (inline), 20px (buttons), 24px (standalone).
- Icon color inherits from \`currentColor\` -- never hard-code fill/stroke colors.
- For custom/brand icons, export as SVG components with \`currentColor\` fills.
- Stroke width: 1.5px-2px for outline icons. Keep consistent across the project.

### Icon Sizing Scale

| Context | Size | Usage |
|---------|------|-------|
| Inline text | 16px (1rem) | Badges, labels, breadcrumbs |
| Button icon | 18px (1.125rem) | Icon buttons, CTA icons |
| Standalone | 24px (1.5rem) | Navigation, card icons |
| Feature | 32-48px | Hero sections, empty states |

### SVG Optimization

- Run all custom SVGs through SVGO before committing.
- Remove unnecessary attributes: \`xmlns\`, \`xml:space\`, editor metadata.
- Use \`viewBox\` instead of fixed \`width\`/\`height\` for scalability.
`;
}

// ── Document policies ────────────────────────────────────────────

function buildDocumentPolicies(): string {
  return `

---

## Document Policies

### No Emojis

This design system must not use emojis in any UI element, component, label, status indicator, or documentation.
Use SVG icons from the chosen icon library instead. Emojis render inconsistently across platforms and break visual coherence.

- Status indicators: use colored dots or icon components, not emoji.
- Section markers: use text prefixes ("DO:" / "DON'T:") or icons, not checkmark/cross emojis.
- Navigation: use icon components, not emoji.

### Format Compliance

This document follows the Google Stitch DESIGN.md 9-section format:
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Extended with:
- Iconography & SVG Guidelines
- shadcn/ui Theme (CSS variables block)
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.
`;
}
