import type {
  UserPreferences,
  DesignTokens,
  ColorTokens,
  RadiusTokens,
  ShadowTokens,
  BorderTokens,
  Mood,
  Roundness,
  DepthStyle,
} from './types.js';
import {
  generateColorScale,
  semanticColor,
  lighten,
  darken,
  desaturate,
  generateChartColors,
  hexToHsl,
  hslToHex,
} from '../utils/color.js';
import { generateSpacingTokens } from '../utils/spacing.js';
import { generateTypographyTokens } from '../utils/typography.js';

// ── Color Resolution ─────────────────────────────────────────────

interface MoodColorAdjustments {
  secondaryHueShift: number;
  accentHueShift: number;
  saturationMod: number;
  backgroundLightness: number;
  mutedSaturation: number;
}

const MOOD_ADJUSTMENTS: Record<Mood, MoodColorAdjustments> = {
  clean:   { secondaryHueShift: 0,   accentHueShift: 30,  saturationMod: -10, backgroundLightness: 100, mutedSaturation: 5 },
  warm:    { secondaryHueShift: 20,  accentHueShift: 40,  saturationMod: 0,   backgroundLightness: 99,  mutedSaturation: 8 },
  bold:    { secondaryHueShift: 180, accentHueShift: 60,  saturationMod: 15,  backgroundLightness: 100, mutedSaturation: 5 },
  minimal: { secondaryHueShift: 0,   accentHueShift: 0,   saturationMod: -20, backgroundLightness: 100, mutedSaturation: 3 },
  playful: { secondaryHueShift: 120, accentHueShift: 60,  saturationMod: 10,  backgroundLightness: 99,  mutedSaturation: 10 },
  dark:    { secondaryHueShift: 30,  accentHueShift: 180, saturationMod: 5,   backgroundLightness: 7,   mutedSaturation: 10 },
};

function resolveColors(primaryHex: string, mood: Mood): ColorTokens {
  const adj = MOOD_ADJUSTMENTS[mood];
  const [h, s] = hexToHsl(primaryHex);
  const scale = generateColorScale(primaryHex);
  const isDark = mood === 'dark';

  const secondaryHex = hslToHex(
    (h + adj.secondaryHueShift) % 360,
    Math.max(0, Math.min(100, s + adj.saturationMod - 30)),
    isDark ? 20 : 96
  );
  const accentHex = hslToHex(
    (h + adj.accentHueShift) % 360,
    Math.max(0, Math.min(100, s + adj.saturationMod)),
    isDark ? 30 : 55
  );
  const mutedHex = hslToHex(h, adj.mutedSaturation, isDark ? 15 : 96);
  const bgHex = isDark
    ? hslToHex(h, 15, adj.backgroundLightness)
    : hslToHex(h, adj.mutedSaturation, adj.backgroundLightness);
  const fgHex = isDark ? '#fafafa' : '#09090b';
  const borderHex = isDark ? hslToHex(h, 10, 18) : hslToHex(h, 8, 90);

  return {
    primary: { ...semanticColor(primaryHex), scale },
    secondary: semanticColor(secondaryHex),
    accent: semanticColor(accentHex),
    muted: semanticColor(mutedHex),
    destructive: semanticColor('#ef4444'),
    background: bgHex,
    foreground: fgHex,
    card: semanticColor(isDark ? lighten(bgHex, 3) : '#ffffff'),
    popover: semanticColor(isDark ? lighten(bgHex, 5) : '#ffffff'),
    border: borderHex,
    input: isDark ? lighten(borderHex, 5) : darken(borderHex, 3),
    ring: primaryHex,
    chart: generateChartColors(primaryHex),
  };
}

function resolveDarkColors(primaryHex: string, mood: Mood): ColorTokens {
  // For dark mode, we force the dark mood adjustments
  return resolveColors(primaryHex, 'dark');
}

// ── Radius Resolution ────────────────────────────────────────────

const RADIUS_CONFIGS: Record<Roundness, RadiusTokens> = {
  sharp:    { none: '0',    sm: '0.125rem', md: '0.125rem', lg: '0.25rem',  xl: '0.375rem', full: '9999px' },
  moderate: { none: '0',    sm: '0.25rem',  md: '0.375rem', lg: '0.5rem',   xl: '0.75rem',  full: '9999px' },
  rounded:  { none: '0',    sm: '0.375rem', md: '0.75rem',  lg: '1rem',     xl: '1.5rem',   full: '9999px' },
  pill:     { none: '0',    sm: '0.5rem',   md: '9999px',   lg: '9999px',   xl: '9999px',   full: '9999px' },
};

// ── Shadow Resolution ────────────────────────────────────────────

const SHADOW_CONFIGS: Record<DepthStyle, ShadowTokens> = {
  flat: {
    none: 'none',
    sm:   'none',
    md:   'none',
    lg:   'none',
    xl:   'none',
  },
  subtle: {
    none: 'none',
    sm:   '0 1px 2px 0 rgb(0 0 0 / 0.03)',
    md:   '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
    lg:   '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.06)',
    xl:   '0 10px 15px -3px rgb(0 0 0 / 0.06), 0 4px 6px -4px rgb(0 0 0 / 0.06)',
  },
  layered: {
    none: 'none',
    sm:   '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md:   '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    lg:   '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    xl:   '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  dramatic: {
    none: 'none',
    sm:   '0 1px 3px 0 rgb(0 0 0 / 0.12)',
    md:   '0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)',
    lg:   '0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
    xl:   '0 25px 50px -12px rgb(0 0 0 / 0.3)',
  },
};

// ── Border Resolution ────────────────────────────────────────────

function resolveBorders(depth: DepthStyle, borderColor: string): BorderTokens {
  return {
    width: depth === 'flat' ? '1px' : '1px',
    style: 'solid',
    color: borderColor,
  };
}

// ── Main Resolver ────────────────────────────────────────────────

export function resolveTokens(prefs: UserPreferences): DesignTokens {
  const colors = resolveColors(prefs.primaryColor, prefs.mood);

  return {
    name: prefs.preset ?? 'Custom Design System',
    colors,
    typography: generateTypographyTokens(prefs.typography),
    spacing: generateSpacingTokens(prefs.density),
    radius: RADIUS_CONFIGS[prefs.roundness],
    shadows: SHADOW_CONFIGS[prefs.depth],
    borders: resolveBorders(prefs.depth, colors.border),
    components: {},
    darkColors: prefs.darkMode ? resolveDarkColors(prefs.primaryColor, prefs.mood) : undefined,
  };
}
