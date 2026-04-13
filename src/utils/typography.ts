import type { TypographyStyle, TypographyTokens } from '../core/types.js';

const FONT_STACKS: Record<TypographyStyle, { sans: string; mono: string; heading: string }> = {
  geometric: {
    sans: '"Inter", "Geist", ui-sans-serif, system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
    heading: '"Inter", "Geist", ui-sans-serif, system-ui, sans-serif',
  },
  humanist: {
    sans: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", "Cascadia Code", ui-monospace, monospace',
    heading: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  monospace: {
    sans: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
    mono: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
    heading: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
  },
  'serif-accent': {
    sans: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", ui-monospace, monospace',
    heading: '"Playfair Display", "Georgia", "Times New Roman", serif',
  },
};

const WEIGHT_PROFILES: Record<TypographyStyle, TypographyTokens['weight']> = {
  geometric:     { normal: 400, medium: 500, semibold: 600, bold: 700 },
  humanist:      { normal: 400, medium: 500, semibold: 600, bold: 700 },
  monospace:     { normal: 400, medium: 500, semibold: 600, bold: 700 },
  'serif-accent': { normal: 400, medium: 500, semibold: 600, bold: 800 },
};

const LETTER_SPACING: Record<TypographyStyle, TypographyTokens['letterSpacing']> = {
  geometric:     { tight: '-0.025em', normal: '0em',    wide: '0.05em' },
  humanist:      { tight: '-0.01em',  normal: '0em',    wide: '0.025em' },
  monospace:     { tight: '-0.02em',  normal: '0em',    wide: '0.1em' },
  'serif-accent': { tight: '-0.02em',  normal: '0.01em', wide: '0.075em' },
};

export function generateTypographyTokens(style: TypographyStyle): TypographyTokens {
  return {
    fontFamily: FONT_STACKS[style],
    scale: {
      xs:   '0.75rem',   // 12px
      sm:   '0.875rem',  // 14px
      base: '1rem',      // 16px
      lg:   '1.125rem',  // 18px
      xl:   '1.25rem',   // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
    },
    weight: WEIGHT_PROFILES[style],
    lineHeight: {
      tight:   1.25,
      normal:  1.5,
      relaxed: 1.75,
    },
    letterSpacing: LETTER_SPACING[style],
  };
}
