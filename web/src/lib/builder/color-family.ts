export const COLOR_FAMILIES = [
  "neutral",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
  "pink",
] as const;

export type ColorFamily = (typeof COLOR_FAMILIES)[number];

export const ETC_COLOR_FILTER = "etc" as const;
export const COLOR_CONCEPT_MIN_STANDALONE_COUNT = 30;
export type ColorFilter = ColorFamily | typeof ETC_COLOR_FILTER;

export interface ColorConceptGroup {
  key: ColorFilter;
  label: string;
  count: number;
  samples: string[];
  families: ColorFamily[];
}

export function isColorFamily(value: string | null): value is ColorFamily {
  return value !== null && (COLOR_FAMILIES as readonly string[]).includes(value);
}

export function isColorFilter(value: string | null): value is ColorFilter {
  return value === ETC_COLOR_FILTER || isColorFamily(value);
}

export const COLOR_FAMILY_LABELS: Record<ColorFamily, string> = {
  neutral: "Neutral",
  red: "Red",
  orange: "Orange",
  yellow: "Yellow",
  green: "Green",
  teal: "Teal",
  blue: "Blue",
  purple: "Purple",
  pink: "Pink",
};

function parseHex(hex: string): [number, number, number] | null {
  const value = hex.trim();
  const short = /^#([0-9a-f]{3})$/i.exec(value)?.[1];
  if (short) {
    return [...short].map((digit) => Number.parseInt(digit + digit, 16)) as [number, number, number];
  }

  const full = /^#([0-9a-f]{6})$/i.exec(value)?.[1];
  if (!full) return null;
  return [0, 2, 4].map((offset) => Number.parseInt(full.slice(offset, offset + 2), 16)) as [number, number, number];
}

/**
 * Classifies a canonical reference primary color into a discoverable hue family.
 * Invalid or absent values stay unclassified; they are never coerced into Neutral.
 */
export function colorFamilyForHex(hex: string): ColorFamily | null {
  const rgb = parseHex(hex);
  if (!rgb) return null;

  const [r, g, b] = rgb.map((channel) => channel / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const lightness = (max + min) / 2;
  const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  if (saturation < 0.16 || lightness < 0.07 || lightness > 0.96) return "neutral";

  let hue = 0;
  if (max === r) hue = 60 * (((g - b) / delta) % 6);
  else if (max === g) hue = 60 * ((b - r) / delta + 2);
  else hue = 60 * ((r - g) / delta + 4);
  if (hue < 0) hue += 360;

  if (hue < 15 || hue >= 345) return "red";
  if (hue < 45) return "orange";
  if (hue < 70) return "yellow";
  if (hue < 165) return "green";
  if (hue < 195) return "teal";
  if (hue < 255) return "blue";
  if (hue < 315) return "purple";
  return "pink";
}

/**
 * Builds the compact builder color filter from canonical primary colors.
 * Families with fewer than 30 references stay discoverable inside Etc rather
 * than consuming a low-value chip. Groups are ordered by actual catalog size.
 */
export function buildColorConceptGroups(primaryColors: readonly string[]): ColorConceptGroup[] {
  const exact = new Map<ColorFamily, { count: number; samples: string[] }>();
  for (const color of primaryColors) {
    const family = colorFamilyForHex(color);
    if (!family) continue;
    const group = exact.get(family) ?? { count: 0, samples: [] };
    group.count += 1;
    if (group.samples.length < 3 && !group.samples.includes(color)) group.samples.push(color);
    exact.set(family, group);
  }

  const concepts: ColorConceptGroup[] = [];
  const remainder: ColorConceptGroup = {
    key: ETC_COLOR_FILTER,
    label: "Etc",
    count: 0,
    samples: [],
    families: [],
  };

  for (const family of COLOR_FAMILIES) {
    const group = exact.get(family);
    if (!group) continue;
    if (group.count < COLOR_CONCEPT_MIN_STANDALONE_COUNT) {
      remainder.count += group.count;
      remainder.families.push(family);
      for (const sample of group.samples) {
        if (remainder.samples.length < 3 && !remainder.samples.includes(sample)) remainder.samples.push(sample);
      }
      continue;
    }
    concepts.push({
      key: family,
      label: COLOR_FAMILY_LABELS[family],
      count: group.count,
      samples: group.samples,
      families: [family],
    });
  }

  if (remainder.count > 0) concepts.push(remainder);
  return concepts.sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}
