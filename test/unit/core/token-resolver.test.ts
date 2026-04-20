import { describe, it, expect } from 'vitest';
import { resolveTokens } from '../../../src/core/token-resolver.js';
import type { UserPreferences } from '../../../src/core/types.js';

const basePrefs: UserPreferences = {
  mood: 'clean',
  primaryColor: '#6366f1',
  roundness: 'moderate',
  density: 'comfortable',
  typography: 'geometric',
  depth: 'subtle',
  darkMode: false,
  components: ['button', 'card'],
};

describe('resolveTokens', () => {
  it('should return valid design tokens', () => {
    const tokens = resolveTokens(basePrefs);

    expect(tokens.name).toBe('Custom Design System');
    expect(tokens.colors.primary.base).toBe('#6366f1');
    expect(tokens.colors.primary.foreground).toBeDefined();
    expect(tokens.colors.primary.scale).toBeDefined();
    expect(tokens.colors.primary.scale[500]).toBeDefined();
    expect(tokens.colors.background).toBeDefined();
    expect(tokens.colors.foreground).toBeDefined();
    expect(tokens.radius.md).toBe('0.375rem');
    expect(tokens.shadows.sm).not.toBe('none');
    expect(tokens.darkColors).toBeUndefined();
  });

  it('should generate dark tokens when darkMode is true', () => {
    const tokens = resolveTokens({ ...basePrefs, darkMode: true });
    expect(tokens.darkColors).toBeDefined();
    expect(tokens.darkColors!.background).toBeDefined();
  });

  it('should use flat shadows for flat depth', () => {
    const tokens = resolveTokens({ ...basePrefs, depth: 'flat' });
    expect(tokens.shadows.sm).toBe('none');
    expect(tokens.shadows.md).toBe('none');
  });

  it('should use pill radius for pill roundness', () => {
    const tokens = resolveTokens({ ...basePrefs, roundness: 'pill' });
    expect(tokens.radius.md).toBe('9999px');
  });

  it('should respect preset name', () => {
    const tokens = resolveTokens({ ...basePrefs, preset: 'fintech-premium' });
    expect(tokens.name).toBe('fintech-premium');
  });
});
