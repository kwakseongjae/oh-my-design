import { hslString, contrastForeground, generateColorScale, lighten, darken, hexToHsl, hslToHex, generateChartColors } from './color';
import type { Overrides } from './types';

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
): string {
  // Keep original document body intact — no text replacement.
  // Instead, prepend a customization header and append override sections.
  let result = md;

  // Strip emojis
  result = result.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1FA00}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '');
  result = result.replace(/✅\s*/g, 'DO: ');
  result = result.replace(/❌\s*/g, "DON'T: ");

  // Replace only the title
  result = result.replace(/^# .+$/m, `# Custom Design System (based on ${refName})`);

  // Build customization override header
  const changes: string[] = [];
  if (overrides.primaryColor && overrides.primaryColor !== originalPrimary) {
    changes.push(`| Primary Color | \`${originalPrimary}\` | \`${overrides.primaryColor}\` |`);
  }
  if (overrides.fontFamily && overrides.fontFamily !== originalFont) {
    changes.push(`| Font Family | \`${originalFont}\` | \`${overrides.fontFamily}\` |`);
  }
  if (overrides.headingWeight && overrides.headingWeight !== originalWeight) {
    changes.push(`| Heading Weight | ${originalWeight} | ${overrides.headingWeight} |`);
  }
  if (overrides.borderRadius) {
    changes.push(`| Border Radius | (reference default) | ${overrides.borderRadius} |`);
  }
  if (overrides.darkMode) {
    changes.push(`| Dark Mode | not included | included |`);
  }

  if (changes.length > 0) {
    const overrideHeader = `
> **Customization Notice**: This document is based on the **${refName}** design system
> with the following overrides applied. When implementing, use the override values
> from the table below instead of the original values found in the reference sections.

| Property | Original | Override |
|----------|----------|----------|
${changes.join('\n')}

---

`;
    // Insert after the title line
    result = result.replace(
      /^(# Custom Design System \(based on .+\))\n/m,
      `$1\n\n${overrideHeader}`,
    );
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
