import type { DesignTokens, ColorTokens } from './types.js';
import { hslString } from '../utils/color.js';

export interface ShadcnTheme {
  light: Record<string, string>;
  dark?: Record<string, string>;
}

function mapColorTokens(colors: ColorTokens, radius: string): Record<string, string> {
  return {
    '--background': hslString(colors.background),
    '--foreground': hslString(colors.foreground),
    '--card': hslString(colors.card.base),
    '--card-foreground': hslString(colors.card.foreground),
    '--popover': hslString(colors.popover.base),
    '--popover-foreground': hslString(colors.popover.foreground),
    '--primary': hslString(colors.primary.base),
    '--primary-foreground': hslString(colors.primary.foreground),
    '--secondary': hslString(colors.secondary.base),
    '--secondary-foreground': hslString(colors.secondary.foreground),
    '--muted': hslString(colors.muted.base),
    '--muted-foreground': hslString(colors.muted.foreground),
    '--accent': hslString(colors.accent.base),
    '--accent-foreground': hslString(colors.accent.foreground),
    '--destructive': hslString(colors.destructive.base),
    '--destructive-foreground': hslString(colors.destructive.foreground),
    '--border': hslString(colors.border),
    '--input': hslString(colors.input),
    '--ring': hslString(colors.ring),
    '--radius': radius,
    '--chart-1': hslString(colors.chart[0]),
    '--chart-2': hslString(colors.chart[1]),
    '--chart-3': hslString(colors.chart[2]),
    '--chart-4': hslString(colors.chart[3]),
    '--chart-5': hslString(colors.chart[4]),
    '--sidebar-background': hslString(colors.card.base),
    '--sidebar-foreground': hslString(colors.foreground),
    '--sidebar-primary': hslString(colors.primary.base),
    '--sidebar-primary-foreground': hslString(colors.primary.foreground),
    '--sidebar-accent': hslString(colors.accent.base),
    '--sidebar-accent-foreground': hslString(colors.accent.foreground),
    '--sidebar-border': hslString(colors.border),
    '--sidebar-ring': hslString(colors.ring),
  };
}

export function mapToShadcn(tokens: DesignTokens): ShadcnTheme {
  const theme: ShadcnTheme = {
    light: mapColorTokens(tokens.colors, tokens.radius.md),
  };

  if (tokens.darkColors) {
    theme.dark = mapColorTokens(tokens.darkColors, tokens.radius.md);
  }

  return theme;
}

export function shadcnToCss(theme: ShadcnTheme): string {
  const indent = '    ';
  const lines: string[] = ['@layer base {', '  :root {'];

  for (const [key, value] of Object.entries(theme.light)) {
    lines.push(`${indent}${key}: ${value};`);
  }
  lines.push('  }');

  if (theme.dark) {
    lines.push('', '  .dark {');
    for (const [key, value] of Object.entries(theme.dark)) {
      lines.push(`${indent}${key}: ${value};`);
    }
    lines.push('  }');
  }

  lines.push('}');
  return lines.join('\n');
}

/** Generate CSS custom properties as inline style string (for preview HTML) */
export function shadcnToInlineVars(vars: Record<string, string>): string {
  return Object.entries(vars)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');
}
