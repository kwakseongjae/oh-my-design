import type { ColorScale, SemanticColor } from '../core/types.js';

// ── Hex ↔ HSL conversions ────────────────────────────────────────

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0'))
      .join('')
  );
}

export function hexToHsl(hex: string): [number, number, number] {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function hslToHex(h: number, s: number, l: number): string {
  const sn = s / 100;
  const ln = l / 100;
  const a = sn * Math.min(ln, 1 - ln);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = ln - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };
  return rgbToHex(f(0), f(8), f(4));
}

/** Format HSL for shadcn CSS variables: "210 40% 98%" */
export function hslString(hex: string): string {
  const [h, s, l] = hexToHsl(hex);
  return `${h} ${s}% ${l}%`;
}

// ── Palette generation ───────────────────────────────────────────

/** Generate a full 11-stop color scale from a single hex */
export function generateColorScale(hex: string): ColorScale {
  const [h, s] = hexToHsl(hex);

  const lightnesses: Record<keyof ColorScale, number> = {
    50: 97, 100: 94, 200: 86, 300: 77,
    400: 66, 500: 55, 600: 47, 700: 39,
    800: 32, 900: 24, 950: 14,
  };

  const scale = {} as ColorScale;
  for (const [key, l] of Object.entries(lightnesses)) {
    (scale as Record<string, string>)[key] = hslToHex(h, s, l);
  }
  return scale;
}

/** Determine if a color is "light" (needs dark foreground) */
export function isLight(hex: string): boolean {
  const [, , l] = hexToHsl(hex);
  return l > 55;
}

/** Pick a contrasting foreground for a given background */
export function contrastForeground(bgHex: string): string {
  return isLight(bgHex) ? '#09090b' : '#fafafa';
}

/** Create a semantic color pair (base + auto-contrast foreground) */
export function semanticColor(base: string): SemanticColor {
  return { base, foreground: contrastForeground(base) };
}

/** Lighten a hex color by a percentage (0-100) */
export function lighten(hex: string, amount: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.min(100, l + amount));
}

/** Darken a hex color by a percentage (0-100) */
export function darken(hex: string, amount: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.max(0, l - amount));
}

/** Desaturate a color */
export function desaturate(hex: string, amount: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, Math.max(0, s - amount), l);
}

/** Generate chart colors from primary by rotating hue */
export function generateChartColors(primaryHex: string): [string, string, string, string, string] {
  const [h, s, l] = hexToHsl(primaryHex);
  return [
    primaryHex,
    hslToHex((h + 40) % 360, s, l),
    hslToHex((h + 80) % 360, s, l),
    hslToHex((h + 160) % 360, s, l),
    hslToHex((h + 220) % 360, s, l),
  ];
}
