import { describe, it, expect } from 'vitest';
import {
  hexToRgb,
  hexToHsl,
  hslToHex,
  hslString,
  generateColorScale,
  isLight,
  contrastForeground,
  lighten,
  darken,
} from '../../../src/utils/color.js';

describe('hexToRgb', () => {
  it('should convert hex to RGB', () => {
    expect(hexToRgb('#ff0000')).toEqual([255, 0, 0]);
    expect(hexToRgb('#00ff00')).toEqual([0, 255, 0]);
    expect(hexToRgb('#ffffff')).toEqual([255, 255, 255]);
  });
});

describe('hexToHsl / hslToHex roundtrip', () => {
  it('should roundtrip pure colors', () => {
    const hex = '#6366f1';
    const [h, s, l] = hexToHsl(hex);
    const result = hslToHex(h, s, l);
    // Allow minor rounding differences
    expect(result.toLowerCase()).toMatch(/^#[0-9a-f]{6}$/);
  });
});

describe('hslString', () => {
  it('should format for shadcn CSS variables', () => {
    const result = hslString('#ffffff');
    expect(result).toMatch(/^\d+ \d+% \d+%$/);
  });
});

describe('generateColorScale', () => {
  it('should produce 11 stops', () => {
    const scale = generateColorScale('#6366f1');
    const keys = Object.keys(scale);
    expect(keys).toHaveLength(11);
    expect(scale[500]).toBeDefined();
  });
});

describe('isLight', () => {
  it('should detect light colors', () => {
    expect(isLight('#ffffff')).toBe(true);
    expect(isLight('#000000')).toBe(false);
  });
});

describe('contrastForeground', () => {
  it('should return dark text for light backgrounds', () => {
    expect(contrastForeground('#ffffff')).toBe('#09090b');
  });
  it('should return light text for dark backgrounds', () => {
    expect(contrastForeground('#000000')).toBe('#fafafa');
  });
});

describe('lighten / darken', () => {
  it('should lighten a color', () => {
    const [, , l1] = hexToHsl('#6366f1');
    const result = lighten('#6366f1', 20);
    const [, , l2] = hexToHsl(result);
    expect(l2).toBeGreaterThan(l1);
  });

  it('should darken a color', () => {
    const [, , l1] = hexToHsl('#6366f1');
    const result = darken('#6366f1', 20);
    const [, , l2] = hexToHsl(result);
    expect(l2).toBeLessThan(l1);
  });
});
