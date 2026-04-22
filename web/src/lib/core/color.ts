export function hexToHsl(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const [r, g, b] = [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let hue = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: hue = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: hue = ((b - r) / d + 2) / 6; break;
      case b: hue = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(hue * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function hslToHex(h: number, s: number, l: number): string {
  const sn = s / 100, ln = l / 100;
  const a = sn * Math.min(ln, 1 - ln);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return Math.round(255 * (ln - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)));
  };
  return '#' + [f(0), f(8), f(4)].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join('');
}

export function hslString(hex: string): string {
  const [h, s, l] = hexToHsl(hex);
  return `${h} ${s}% ${l}%`;
}

export function generateColorScale(hex: string) {
  const [h, s] = hexToHsl(hex);
  const stops: Record<string, number> = { '50': 97, '100': 94, '200': 86, '300': 77, '400': 66, '500': 55, '600': 47, '700': 39, '800': 32, '900': 24, '950': 14 };
  const scale: Record<string, string> = {};
  for (const [k, l] of Object.entries(stops)) scale[k] = hslToHex(h, s, l);
  return scale;
}

export function contrastForeground(bgHex: string): string {
  const [, , l] = hexToHsl(bgHex);
  return l > 55 ? '#09090b' : '#fafafa';
}

export function lighten(hex: string, amount: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.min(100, l + amount));
}

export function darken(hex: string, amount: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.max(0, l - amount));
}

export function generateChartColors(hex: string): string[] {
  const [h, s, l] = hexToHsl(hex);
  return [hex, hslToHex((h+40)%360,s,l), hslToHex((h+80)%360,s,l), hslToHex((h+160)%360,s,l), hslToHex((h+220)%360,s,l)];
}

export function isLight(hex: string): boolean {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
  return (r*299 + g*587 + b*114) / 1000 > 140;
}

// ── Color family descriptor ───────────────────────────────────────
// Turns a hex into a human-readable color family (with synonym list) and a
// single-word adjective ("vibrant", "deep", "muted", etc).
// Used by applyOverridesToMd to rewrite ref-specific color prose (e.g.,
// "Stripe Purple", "rich violet") when the user swaps the primary color.

export interface ColorFamily {
  /** Canonical noun for this family (e.g., "violet", "green"). */
  primary: string;
  /** All synonyms that should be treated as belonging to this family during
   *  prose rewrites. Keep them lowercase; match case-insensitively. */
  synonyms: string[];
  /** Adjective capturing saturation+lightness (vibrant/deep/muted/pale/rich). */
  adjective: string;
}

export function colorFamily(hex: string): ColorFamily {
  const [h, s, l] = hexToHsl(hex);

  // Low saturation → grayscale family (hue is noise).
  if (s < 10) {
    if (l < 15) return { primary: 'black', synonyms: ['black', 'charcoal', 'jet', 'onyx', 'ebony'], adjective: 'deep' };
    if (l < 40) return { primary: 'charcoal', synonyms: ['charcoal', 'graphite', 'slate'], adjective: 'deep' };
    if (l < 70) return { primary: 'gray', synonyms: ['gray', 'grey', 'slate', 'ash', 'stone'], adjective: 'neutral' };
    return { primary: 'white', synonyms: ['white', 'ivory', 'bone', 'alabaster'], adjective: 'pale' };
  }

  const base = hueBucket(h);
  const adjective =
    l < 25 ? 'deep'
    : l > 75 ? 'pale'
    : s > 75 ? 'vibrant'
    : s < 35 ? 'muted'
    : 'rich';
  return { ...base, adjective };
}

/** Map hue angle [0,360) to a coarse color family with synonyms. */
function hueBucket(h: number): { primary: string; synonyms: string[] } {
  if (h < 15 || h >= 345) return { primary: 'red', synonyms: ['red', 'crimson', 'scarlet', 'ruby', 'vermilion'] };
  if (h < 40)  return { primary: 'orange', synonyms: ['orange', 'tangerine', 'amber', 'rust', 'terracotta'] };
  if (h < 65)  return { primary: 'yellow', synonyms: ['yellow', 'gold', 'lemon', 'mustard', 'honey'] };
  if (h < 90)  return { primary: 'lime', synonyms: ['lime', 'chartreuse', 'olive'] };
  if (h < 160) return { primary: 'green', synonyms: ['green', 'emerald', 'forest', 'mint', 'sage', 'jade'] };
  if (h < 185) return { primary: 'teal', synonyms: ['teal', 'aqua', 'turquoise', 'cyan'] };
  if (h < 210) return { primary: 'cyan', synonyms: ['cyan', 'sky', 'cerulean', 'azure'] };
  if (h < 240) return { primary: 'blue', synonyms: ['blue', 'navy', 'cobalt', 'sapphire', 'indigo', 'azure'] };
  if (h < 310) return { primary: 'violet', synonyms: ['violet', 'purple', 'indigo', 'lavender', 'periwinkle', 'plum', 'orchid', 'mauve'] };
  if (h < 345) return { primary: 'pink', synonyms: ['pink', 'magenta', 'fuchsia', 'rose'] };
  return { primary: 'red', synonyms: ['red', 'crimson', 'scarlet', 'ruby'] };
}
