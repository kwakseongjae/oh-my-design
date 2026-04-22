import { hslString, contrastForeground, generateColorScale, lighten, darken, hexToHsl, hslToHex, generateChartColors, colorFamily } from './color';
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
  overrides: Overrides,
  components?: string[],
  stylePreferences?: StylePreferences,
  includePhilosophyLayer: boolean = true,
): string {
  // Direct replacement — AI agents need one source of truth, no ambiguity.
  let result = md;

  // OmD v0.1 Philosophy Layer opt-out.
  // When disabled, strip sections 10–15 (Voice, Narrative, Principles,
  // Personas, States, Motion) plus the HTML-comment Sources block that
  // follows. The range is anchored by the "## 10. Voice & Tone" header
  // and the "OmD v0.1 Sources" comment end — if the file doesn't carry
  // a Philosophy Layer, the regex simply doesn't match and nothing is
  // stripped.
  if (!includePhilosophyLayer) {
    result = result.replace(
      /\n+---\n+## 10\. Voice & Tone[\s\S]*?OmD v0\.1 Sources[\s\S]*?-->\n?/,
      '\n'
    );
  }

  // Strip emojis. The unicode range covers ✅ (U+2705) and ❌ (U+274C) too,
  // so any DO:/DON'T: prefix conversion would never match — references use
  // explicit "**DO**" / "**DON'T**" markdown instead.
  result = result.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1FA00}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '');

  // Replace title only when the user actually customized something. "As-is"
  // export (empty overrides + no stylePreferences) keeps the reference's own
  // "# Design System Inspiration of X" heading so the document reads like the
  // untouched original, not a Custom derivative. The trailing export wrapper
  // sections (Iconography, Document Policies) still append either way — those
  // are export-format boilerplate, not customization.
  const hasAnyOverride = !!(
    overrides.primaryColor ||
    overrides.fontFamily ||
    overrides.headingWeight ||
    overrides.borderRadius ||
    overrides.darkMode
  );
  const hasAnyPref = !!(stylePreferences && Object.keys(stylePreferences).length > 0);
  if (hasAnyOverride || hasAnyPref) {
    result = result.replace(/^# .+$/m, `# Custom Design System (based on ${refName})`);
  }

  // Replace values directly in body text
  if (overrides.primaryColor && overrides.primaryColor !== originalPrimary) {
    const re = new RegExp(originalPrimary.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    result = re[Symbol.replace](result, overrides.primaryColor);

    // Now sanitize the ref-specific color prose — "Stripe Purple", "signature
    // violet", "rich navy", "blue-tinted shadows" all describe the OLD primary
    // and become lies once the hex is swapped. This rewrites them to the new
    // color family without touching accent/secondary palette entries.
    result = sanitizeColorProse(result, refName, originalPrimary, overrides.primaryColor);
  }
  if (overrides.fontFamily && overrides.fontFamily !== originalFont) {
    result = result.replaceAll(originalFont, overrides.fontFamily);
  }

  // Sweep generic "Radius: Npx" bullets in §4 BEFORE any subsection rewrite so
  // a stale ref radius gets picked up. Must run first because buttonStyle
  // rewrites the entire Buttons block with its own radius (pill for rounded,
  // 4px cap for sharp) that the user's borderRadius must NOT clobber.
  // Hoisted out of `if (stylePreferences)` so CLI/skip-wizard paths that pass
  // borderRadius without prefs still get the sweep.
  if (overrides.borderRadius) {
    result = result.replace(/(?<=^[-*].*?)Radius:\s*\d+px/gim, `Radius: ${overrides.borderRadius}`);
    result = result.replace(/(\d+)px\s*(?:\(standard\)|\(buttons?\)|\(cards?\))/gi, (match, px) => {
      const orig = parseInt(px);
      if (orig === 9999 || orig === 50) return match; // don't touch pills/circles
      return `${overrides.borderRadius} (customized)`;
    });
  }

  // ── Inline modification: rewrite subsections to match user preferences ──
  if (stylePreferences) {
    // Replace Buttons subsection in Section 4 based on buttonStyle preference.
    // Both branches rewrite explicitly so the user's pick always leaves a mark
    // (no silent no-op branch).
    if (stylePreferences.buttonStyle === 'sharp' || stylePreferences.buttonStyle === 'rounded') {
      const isSharp = stylePreferences.buttonStyle === 'sharp';
      const buttonRadius = isSharp
        ? (overrides.borderRadius && parseInt(overrides.borderRadius, 10) <= 4 ? overrides.borderRadius : '4px')
        : '9999px';
      const sharpBlock = `### Buttons\n- Style: Sharp & Precise -- minimal rounding, decisive geometric edges\n- Radius: ${buttonRadius} across primary, secondary, and ghost variants\n- Padding: 8px 16px (default), 6px 12px (compact), 12px 20px (comfortable)\n- Primary: solid primary background, foreground contrast text, 1px solid primary border\n- Secondary: transparent/neutral background, foreground text, 1px solid border color\n- Ghost: transparent background, primary text, no border until hover\n- Hover: primary darkens ~10%, secondary gains subtle border-color bump\n- Font weight: 500-600 for CTA text clarity\n\n`;
      const roundedBlock = `### Buttons\n- Style: Rounded & Friendly -- fully pill-shaped, approachable silhouette\n- Radius: ${buttonRadius} on all variants (true pill)\n- Padding: 10px 20px (default), 8px 16px (compact), 14px 28px (comfortable)\n- Primary: solid primary background, foreground contrast text, no border\n- Secondary: neutral fill or border-only, foreground text\n- Ghost: transparent with primary text, pill hover background at ~10% primary alpha\n- Hover: background shifts 8-12% darker (primary) or adds tinted overlay\n- Font weight: 500 for readable pill CTAs\n\n`;
      result = result.replace(
        /### Buttons\n[\s\S]*?(?=###|\n## \d+\.)/,
        isSharp ? sharpBlock : roundedBlock,
      );
    }

    // Replace Inputs & Forms subsection in Section 4 — both branches explicit.
    if (stylePreferences.inputStyle === 'underline') {
      result = result.replace(
        /### Inputs & Forms\n[\s\S]*?(?=###|\n## \d+\.)/,
        `### Inputs & Forms\n- Style: Underline -- bottom border only, no side or top borders\n- Border-bottom: 2px solid border color, no border-radius on the field itself\n- Focus: bottom border thickens or shifts to primary color\n- Text: foreground color, Placeholder: muted-foreground\n- No background fill -- transparent base\n\n`
      );
    } else if (stylePreferences.inputStyle === 'bordered') {
      // Only rewrite if the original doesn't already describe a bordered box
      // (common case) — this preserves ref-specific details like Stripe's
      // "1px solid #e5edf5" and adds the explicit style label.
      result = result.replace(
        /### Inputs & Forms\n[\s\S]*?(?=###|\n## \d+\.)/,
        (match) => {
          const hasStyleLine = /^\s*[-*]\s*Style:/m.test(match);
          if (hasStyleLine) return match;
          // Insert the Style: line right after the heading so the user's
          // bordered-box choice is explicit in the DESIGN.md.
          return match.replace(
            /^### Inputs & Forms\n/,
            `### Inputs & Forms\n- Style: Bordered Box -- full 1px border, contained field, structured rectangle\n`,
          );
        },
      );
    }

    // Replace Navigation subsection in Section 4
    if (stylePreferences.headerStyle === 'glass') {
      result = result.replace(
        /### Navigation\n[\s\S]*?(?=###|\n## \d+\.)/,
        (match) => {
          if (/transparent|blur|glass/i.test(match)) return match; // already glass
          return `### Navigation\n- Style: Glass & Floating -- transparent background with backdrop-filter: blur(12px)\n- Border-bottom only (1px border color), no solid fill\n- Header floats above content, text inherits foreground color\n- CTA button uses primary color, right-aligned\n- Mobile: hamburger menu collapse\n\n`;
        }
      );
    } else if (stylePreferences.headerStyle === 'solid') {
      result = result.replace(
        /### Navigation\n[\s\S]*?(?=###|\n## \d+\.)/,
        (match) => {
          if (/solid.*?dark|dark.*?background|dark\s+nav/i.test(match)) return match; // already solid
          return `### Navigation\n- Style: Solid & Bold -- solid dark background (foreground color), high contrast\n- Light text on dark header surface, clear visual separation from content\n- CTA button uses primary color or inverted colors\n- Mobile: hamburger menu collapse\n\n`;
        }
      );
    }

    // Replace Cards subsection shadow description in Section 4 — both branches
    // leave a visible trace.
    if (stylePreferences.cardStyle === 'bordered') {
      // First try replacing an existing "Shadow: ..." line so ref-specific
      // recipes (rgba stacks, named tiers) get flattened cleanly.
      const before = result;
      result = result.replace(
        /(### Cards & Containers\n[\s\S]*?)Shadow:.*?\n/,
        '$1Shadow: none -- use border for definition, flat hierarchy\n'
      );
      // If the ref had no Shadow line at all (e.g., block only lists Background
      // / Border / Radius), inject one so the user's bordered pick is not a
      // silent no-op. Mirrors the elevated-branch injection pattern.
      if (result === before) {
        result = result.replace(
          /### Cards & Containers\n[\s\S]*?(?=###|\n## \d+\.)/,
          (match) => {
            const trimmed = match.replace(/\n+$/, '\n');
            return `${trimmed}- Shadow: none -- use border for definition, flat hierarchy\n\n`;
          },
        );
      }
    } else if (stylePreferences.cardStyle === 'elevated') {
      // Inject a Shadow: line if the block lacks one so "elevated" is not a
      // silent no-op. Common case: ref describes shadow in prose (e.g. "Shadow
      // stack:") but has no `- Shadow:` bullet. We append a canonical multi-
      // layer recipe so the user's pick is always visible in DESIGN.md.
      result = result.replace(
        /### Cards & Containers\n[\s\S]*?(?=###|\n## \d+\.)/,
        (match) => {
          if (/^[-*]\s*Shadow:/m.test(match)) return match; // already explicit
          const trimmed = match.replace(/\n+$/, '\n');
          return `${trimmed}- Shadow: multi-layer elevation -- 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06) for default cards; intensify on hover\n\n`;
        },
      );
    }

    // Modify Section 5 spacing for density preference
    if (stylePreferences.density === 'compact') {
      result = result.replace(
        /### Whitespace Philosophy\n[\s\S]*?(?=###|\n## \d+\.)/,
        `### Whitespace Philosophy\n- **Compact & dense**: Optimize for information density and scanning speed. Tight padding (8-12px), small gaps (4-8px between related items).\n- **Reduced section spacing**: Use ~70% of the reference spacing values for a data-focused, efficient layout.\n- **Screen real estate**: Maximize visible content per viewport -- users should see more items without scrolling.\n\n`
      );
    } else if (stylePreferences.density === 'spacious') {
      result = result.replace(
        /### Whitespace Philosophy\n[\s\S]*?(?=###|\n## \d+\.)/,
        (match) => {
          if (/generous|spacious|breathing/i.test(match)) return match; // already spacious
          return `### Whitespace Philosophy\n- **Open & spacious**: Generous padding (16-24px), large gaps (12-20px) between content blocks.\n- **Breathing room**: Prioritize visual clarity over density. Use 1.5-2x standard section spacing.\n- **Premium feel**: Whitespace communicates quality -- let content breathe rather than cramming.\n\n`;
        }
      );
    }

    // Radius sweep moved above — runs before the Buttons rewrite so that
    // buttonStyle=rounded / sharp keeps its intentional radius (pill / 4px cap).
  }

  // Append component list
  if (components && components.length > 0) {
    result += `\n\n---\n\n## Included Components\n\nThe following components are part of this design system:\n\n`;
    result += components.map(c => `- ${c.charAt(0).toUpperCase() + c.slice(1).replace(/-/g, ' ')}`).join('\n');
    result += '\n';
  }

  // Append dark mode section when the user opted in. This documents the dark
  // theme tokens in prose (the actual CSS lives in generateShadcnCss, exported
  // separately) so the user's last wizard choice leaves a visible trace in
  // DESIGN.md, not just in the CSS file.
  if (overrides.darkMode) {
    result += buildDarkModeSection(overrides.primaryColor || originalPrimary);
  }

  // Append additional sections
  result += buildIconographySection();
  result += buildDocumentPolicies();
  return result;
}

// ── Color prose sanitizer ─────────────────────────────────────────
//
// Triggered only when the user overrides primaryColor with a value different
// from the reference's original. The raw string-replace above swaps hex
// literals but leaves ref-specific prose ("Stripe Purple", "signature violet",
// "blue-tinted shadows") pointing at a color that no longer exists in the
// document. This rewrite is deliberately conservative:
//
//   1. Only §1 "Visual Theme & Atmosphere" gets free-form color-noun rewrites.
//      §2 palette entries, §4 component details, and prose in later sections
//      stay untouched — they may describe accent/secondary colors that shouldn't
//      move with the primary.
//   2. Brand-name-qualified colors ("Stripe Purple", "Vercel Black") get swapped
//      to generic "Brand <NewFamily>" across the whole doc — these are always
//      primary references.
//   3. Shadow rgba() values whose hue closely matches the OLD primary's hue
//      get rotated to the new primary's hue (preserving saturation, lightness,
//      and alpha). This fixes "blue-tinted shadow" on brands like Stripe.
//      Pure-neutral shadows (rgba(0,0,0,...), low-saturation rgba) are left alone.
function sanitizeColorProse(md: string, refName: string, oldPrimary: string, newPrimary: string): string {
  const oldFam = colorFamily(oldPrimary);
  const newFam = colorFamily(newPrimary);

  // Early-out: families match — prose is still coherent, nothing to rewrite.
  if (oldFam.primary === newFam.primary) return md;

  const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // 1. "{RefName} {ColorNoun}" → "Brand {NewFamily}" (whole doc)
  //    Matches both "Stripe Purple" in §2 named entries and §1 prose mentions.
  const refNameEsc = escape(refName);
  const oldSynPattern = oldFam.synonyms.map(escape).join('|');
  const brandRe = new RegExp(`\\b${refNameEsc}\\s+(${oldSynPattern})\\b`, 'gi');
  md = md.replace(brandRe, `Brand ${capitalizeWord(newFam.primary)}`);

  // 2. Section 1 color-noun sweep — replace old-family synonyms with new-family
  //    primary noun inside the Visual Theme & Atmosphere section only.
  const sec1Match = md.match(/## 1\. Visual Theme & Atmosphere[\s\S]*?(?=\n## 2\.)/);
  if (sec1Match) {
    const sec1 = sec1Match[0];
    const sec1Start = md.indexOf(sec1);
    // Replace every oldFam synonym token with newFam.primary. Do adjective
    // tokens too — "rich violet" → "rich green". Preserve capitalization of
    // the first letter.
    const sweepRe = new RegExp(`\\b(${oldSynPattern})\\b`, 'gi');
    const sec1Rewritten = sec1.replace(sweepRe, (match) => {
      const replacement = newFam.primary;
      return match[0] === match[0].toUpperCase()
        ? capitalizeWord(replacement)
        : replacement;
    });
    // Also refresh adjective phrasing: "saturated blue-violet" type hyphenates.
    const hyphenated = sec1Rewritten.replace(
      new RegExp(`\\b(${oldSynPattern})-(${oldSynPattern})\\b`, 'gi'),
      newFam.primary,
    );
    md = md.slice(0, sec1Start) + hyphenated + md.slice(sec1Start + sec1.length);
  }

  // 3. Shadow rgba rotation — rgba(r, g, b[, a]) whose hue is near oldPrimary's.
  const [oldHue, oldSat] = hexToHsl(oldPrimary);
  const [newHue] = hexToHsl(newPrimary);
  if (oldSat >= 20) {
    // Only rotate when the OLD primary itself had chromatic content — a neutral
    // old primary means any blue-tinted shadow in the ref was NOT derived from
    // the primary (e.g., a neutral-black ref using a blue shadow accent).
    md = md.replace(
      /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)/g,
      (match, rStr, gStr, bStr, aStr) => {
        const r = parseInt(rStr, 10);
        const g = parseInt(gStr, 10);
        const b = parseInt(bStr, 10);
        const shadowHex = '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');
        const [sh, ss, sl] = hexToHsl(shadowHex);
        // Only rotate: (a) saturated enough to be tinted, (b) hue near old primary
        if (ss < 12) return match; // pure-neutral shadow
        if (hueDistance(sh, oldHue) > 45) return match; // unrelated tint
        const rotated = hslToHex(newHue, ss, sl);
        const h2 = rotated.replace('#', '');
        const nr = parseInt(h2.slice(0, 2), 16);
        const ng = parseInt(h2.slice(2, 4), 16);
        const nb = parseInt(h2.slice(4, 6), 16);
        return aStr ? `rgba(${nr},${ng},${nb},${aStr})` : `rgba(${nr},${ng},${nb})`;
      },
    );
  }

  return md;
}

function hueDistance(a: number, b: number): number {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

function capitalizeWord(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function buildDarkModeSection(primary: string): string {
  const [h] = hexToHsl(primary);
  const darkBg = hslToHex(h, 15, 7);
  const darkBorder = hslToHex(h, 10, 18);
  const darkMuted = hslToHex(h, 10, 15);
  return `

---

## Dark Mode Tokens

Dark mode is enabled for this design system. When the \`.dark\` class is present
on any ancestor (typically \`<html>\` or \`<body>\`), the following tokens replace
the light-mode values. Hue is derived from the primary color so shadows and
neutrals stay on-brand.

| Token | Light | Dark |
|-------|-------|------|
| Background | page surface color | \`${darkBg}\` (primary-tinted near-black) |
| Foreground | text color | \`#fafafa\` |
| Border | hairline divider | \`${darkBorder}\` |
| Muted | subdued surface | \`${darkMuted}\` |
| Primary | ${primary} | ${primary} (unchanged — brand anchor is theme-stable) |

### Implementation Guidance

- Use CSS custom properties for every color; never hard-code hex in components.
- Scope dark tokens under \`.dark\` (shadcn/Tailwind convention) or a media
  query (\`prefers-color-scheme: dark\`), not both — pick one source of truth.
- Run a contrast audit after applying dark tokens: body text and interactive
  elements must hit WCAG AA (4.5:1) against the dark background.
- Shadows: lighten and reduce opacity in dark mode. A shadow that reads clearly
  on white often disappears entirely on a near-black surface.
- Images and illustrations: supply a dark variant or apply a subtle overlay.
  Transparent PNGs with dark silhouettes will vanish on dark backgrounds.
`;
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
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.
`;
}
