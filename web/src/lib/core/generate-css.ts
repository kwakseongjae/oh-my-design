import { hslString, contrastForeground, generateColorScale, lighten, darken, hexToHsl, hslToHex, generateChartColors } from './color';
import type { Overrides, StylePreferences } from './types';

export function generateShadcnCss(
  primary: string,
  background: string,
  foreground: string,
  radius: string,
  accent: string | undefined,
  border: string | undefined,
  darkMode: boolean,
): string {
  const scale = generateColorScale(primary);
  const [h] = hexToHsl(primary);
  const effectiveAccent = accent || hslToHex((h + 30) % 360, 60, 55);
  const effectiveBorder = border || lighten(foreground, 75);
  const muted = background === '#ffffff' ? '#f5f5f5' : lighten(background, 5);
  const chart = generateChartColors(primary);
  const radiusRem = radius === '9999px' ? '9999px' : `${parseInt(radius) / 16}rem`;

  const lightVars: Record<string, string> = {
    '--background': hslString(background),
    '--foreground': hslString(foreground),
    '--card': hslString(background === '#ffffff' ? '#ffffff' : lighten(background, 3)),
    '--card-foreground': hslString(foreground),
    '--popover': hslString(background === '#ffffff' ? '#ffffff' : lighten(background, 5)),
    '--popover-foreground': hslString(foreground),
    '--primary': hslString(primary),
    '--primary-foreground': hslString(contrastForeground(primary)),
    '--secondary': hslString(scale['100']),
    '--secondary-foreground': hslString(foreground),
    '--muted': hslString(muted),
    '--muted-foreground': hslString(lighten(foreground, 40)),
    '--accent': hslString(effectiveAccent),
    '--accent-foreground': hslString(contrastForeground(effectiveAccent)),
    '--destructive': hslString('#ef4444'),
    '--destructive-foreground': hslString('#fafafa'),
    '--border': hslString(effectiveBorder),
    '--input': hslString(effectiveBorder),
    '--ring': hslString(primary),
    '--radius': radiusRem,
    '--chart-1': hslString(chart[0]),
    '--chart-2': hslString(chart[1]),
    '--chart-3': hslString(chart[2]),
    '--chart-4': hslString(chart[3]),
    '--chart-5': hslString(chart[4]),
  };

  let css = '@layer base {\n  :root {\n';
  for (const [k, v] of Object.entries(lightVars)) css += `    ${k}: ${v};\n`;
  css += '  }\n';

  if (darkMode) {
    const darkBg = hslToHex(h, 15, 7);
    const darkBorder = hslToHex(h, 10, 18);
    const darkVars: Record<string, string> = {
      '--background': hslString(darkBg),
      '--foreground': hslString('#fafafa'),
      '--card': hslString(lighten(darkBg, 3)),
      '--card-foreground': hslString('#fafafa'),
      '--popover': hslString(lighten(darkBg, 5)),
      '--popover-foreground': hslString('#fafafa'),
      '--primary': hslString(primary),
      '--primary-foreground': hslString(contrastForeground(primary)),
      '--secondary': hslString(hslToHex(h, 15, 20)),
      '--secondary-foreground': hslString('#fafafa'),
      '--muted': hslString(hslToHex(h, 10, 15)),
      '--muted-foreground': hslString(darken('#fafafa', 35)),
      '--accent': hslString(effectiveAccent),
      '--accent-foreground': hslString(contrastForeground(effectiveAccent)),
      '--destructive': hslString('#ef4444'),
      '--destructive-foreground': hslString('#fafafa'),
      '--border': hslString(darkBorder),
      '--input': hslString(lighten(darkBorder, 5)),
      '--ring': hslString(primary),
      '--chart-1': hslString(chart[0]),
      '--chart-2': hslString(chart[1]),
      '--chart-3': hslString(chart[2]),
      '--chart-4': hslString(chart[3]),
      '--chart-5': hslString(chart[4]),
    };
    css += '\n  .dark {\n';
    for (const [k, v] of Object.entries(darkVars)) css += `    ${k}: ${v};\n`;
    css += '  }\n';
  }
  css += '}';
  return css;
}

/**
 * Generate vanilla CSS (no Tailwind/shadcn dependency).
 * Uses standard CSS custom properties with hex values.
 */
export function generateVanillaCss(
  primary: string,
  background: string,
  foreground: string,
  radius: string,
  accent: string | undefined,
  border: string | undefined,
  darkMode: boolean,
  fontFamily?: string,
): string {
  const scale = generateColorScale(primary);
  const [h] = hexToHsl(primary);
  const effectiveAccent = accent || hslToHex((h + 30) % 360, 60, 55);
  const effectiveBorder = border || lighten(foreground, 75);
  const muted = background === '#ffffff' ? '#f5f5f5' : lighten(background, 5);
  const chart = generateChartColors(primary);
  const radiusVal = radius === '9999px' ? '9999px' : radius;
  const font = fontFamily || 'system-ui, -apple-system, sans-serif';

  let css = `:root {
  /* Colors */
  --color-primary: ${primary};
  --color-primary-foreground: ${contrastForeground(primary)};
  --color-background: ${background};
  --color-foreground: ${foreground};
  --color-accent: ${effectiveAccent};
  --color-accent-foreground: ${contrastForeground(effectiveAccent)};
  --color-muted: ${muted};
  --color-muted-foreground: ${lighten(foreground, 40)};
  --color-border: ${effectiveBorder};
  --color-destructive: #ef4444;
  --color-success: #22c55e;

  /* Primary Scale */
${Object.entries(scale).map(([stop, hex]) => `  --color-primary-${stop}: ${hex};`).join('\n')}

  /* Chart Colors */
${chart.map((c, i) => `  --color-chart-${i + 1}: ${c};`).join('\n')}

  /* Typography */
  --font-sans: ${font};
  --font-mono: ui-monospace, "SF Mono", monospace;

  /* Spacing & Radius */
  --radius-sm: ${parseInt(radiusVal) > 4 ? `${parseInt(radiusVal) - 2}px` : '2px'};
  --radius-md: ${radiusVal};
  --radius-lg: ${parseInt(radiusVal) > 4 ? `${parseInt(radiusVal) + 4}px` : radiusVal};
  --radius-full: 9999px;
}`;

  if (darkMode) {
    const darkBg = hslToHex(h, 15, 7);
    const darkBorder = hslToHex(h, 10, 18);
    css += `

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: ${darkBg};
    --color-foreground: #fafafa;
    --color-muted: ${hslToHex(h, 10, 15)};
    --color-muted-foreground: ${darken('#fafafa', 35)};
    --color-border: ${darkBorder};
  }
}`;
  }

  return css;
}

export function applyOverridesToMd(
  md: string,
  refName: string,
  originalPrimary: string,
  originalFont: string,
  originalWeight: string,
  overrides: Overrides,
  shadcnCss: string,
  components?: string[],
  stylePreferences?: StylePreferences,
): string {
  // Direct replacement — AI agents need one source of truth, no ambiguity.
  let result = md;

  // Strip emojis
  result = result.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1FA00}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '');
  result = result.replace(/✅\s*/g, 'DO: ');
  result = result.replace(/❌\s*/g, "DON'T: ");

  // Replace title
  result = result.replace(/^# .+$/m, `# Custom Design System (based on ${refName})`);

  // Replace values directly in body text
  if (overrides.primaryColor && overrides.primaryColor !== originalPrimary) {
    const re = new RegExp(originalPrimary.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    result = re[Symbol.replace](result, overrides.primaryColor);
  }
  if (overrides.fontFamily && overrides.fontFamily !== originalFont) {
    result = result.replaceAll(originalFont, overrides.fontFamily);
  }
  if (overrides.headingWeight && overrides.headingWeight !== originalWeight) {
    result = result.replace(new RegExp(`weight ${originalWeight}`, 'g'), `weight ${overrides.headingWeight}`);
  }

  // Append style preferences (user's A/B taste choices)
  if (stylePreferences && Object.keys(stylePreferences).filter(k => stylePreferences[k]).length > 0) {
    result += `\n\n---\n\n## Style Preferences\n\n`;
    result += `The following style choices reflect the user's design taste and should guide implementation decisions:\n\n`;

    if (stylePreferences.buttonStyle) {
      const isSharp = stylePreferences.buttonStyle === 'sharp';
      result += `### Buttons\n`;
      result += isSharp
        ? `- Style: **Sharp & Precise** -- Use small border-radius (4px), solid fills, technical feel\n- Button corners should be tight, conveying precision and decisiveness\n- Avoid pill shapes for primary actions\n\n`
        : `- Style: **Rounded & Friendly** -- Use pill shapes (9999px radius), soft feel\n- Buttons should feel approachable and modern\n- Use rounded corners consistently across all button variants\n\n`;
    }

    if (stylePreferences.tableStyle) {
      const isMinimal = stylePreferences.tableStyle === 'minimal';
      result += `### Tables\n`;
      result += isMinimal
        ? `- Style: **Minimal & Clean** -- Divider lines only, no outer borders, airy spacing\n- Row separators should be subtle (1px, low opacity)\n- No zebra striping, no heavy borders\n\n`
        : `- Style: **Bordered & Structured** -- Full borders with alternating row backgrounds\n- Use zebra striping for readability on data-heavy tables\n- Outer border on the table container\n\n`;
    }

    if (stylePreferences.headerStyle) {
      const isGlass = stylePreferences.headerStyle === 'glass';
      result += `### Navigation Header\n`;
      result += isGlass
        ? `- Style: **Glass & Floating** -- Transparent background with backdrop-filter blur\n- Border-bottom only, no solid fill\n- Header should feel like it floats above the content\n\n`
        : `- Style: **Solid & Bold** -- Solid dark background (foreground color), high contrast\n- Clear visual separation from content\n- Light text on dark header surface\n\n`;
    }

    if (stylePreferences.cardStyle) {
      const isBordered = stylePreferences.cardStyle === 'bordered';
      result += `### Cards\n`;
      result += isBordered
        ? `- Style: **Subtle Border** -- Thin border, no shadow, flat hierarchy\n- Cards are defined by their border, not by elevation\n- Use consistent border color from the palette\n\n`
        : `- Style: **Elevated Shadow** -- Shadow depth, floating feel\n- Cards should feel lifted from the page surface\n- Use multi-layer shadows for nuanced depth\n\n`;
    }

    // Weight and radius from overrides
    if (overrides.headingWeight) {
      const w = parseInt(overrides.headingWeight);
      const desc = w <= 300 ? 'Light and elegant -- headlines whisper rather than shout'
        : w <= 400 ? 'Regular weight -- neutral, balanced, no extra emphasis'
        : w <= 500 ? 'Medium weight -- slightly emphasized, professional'
        : w <= 600 ? 'Semibold -- strong and confident headings'
        : 'Bold -- maximum impact, commanding presence';
      result += `### Heading Weight\n- Weight: **${overrides.headingWeight}** -- ${desc}\n- Apply this weight to all h1-h4 headings consistently\n\n`;
    }

    if (overrides.borderRadius) {
      result += `### Border Radius\n- Base radius: **${overrides.borderRadius}**\n- Apply consistently to buttons, inputs, cards, and containers\n\n`;
    }
  }

  // Append component list
  if (components && components.length > 0) {
    result += `\n\n---\n\n## Included Components\n\nThe following components are part of this design system:\n\n`;
    result += components.map(c => `- ${c.charAt(0).toUpperCase() + c.slice(1).replace(/-/g, ' ')}`).join('\n');
    result += '\n';
  }

  // Append additional sections
  result += buildIconographySection();
  result += `\n\n---\n\n## 10. shadcn/ui Theme\n\n\`\`\`css\n${shadcnCss}\n\`\`\`\n`;
  result += buildDocumentPolicies();
  return result;
}

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
