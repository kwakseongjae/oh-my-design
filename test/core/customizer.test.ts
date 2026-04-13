import { describe, it, expect } from 'vitest';
import { loadReference } from '../../src/core/reference-parser.js';
import { applyOverrides } from '../../src/core/customizer.js';

describe('applyOverrides', () => {
  const ref = loadReference('stripe');

  it('should return original content in as-is mode', () => {
    const { designMd } = applyOverrides(ref, { darkMode: false }, 'as-is');
    expect(designMd).toContain('Stripe');
    expect(designMd).toContain('## 1. Visual Theme');
    expect(designMd).toContain('## 10. shadcn/ui Theme');
  });

  it('should replace primary color in customized mode', () => {
    const { designMd } = applyOverrides(ref, {
      primaryColor: '#6366f1',
      darkMode: false,
    }, 'customized');

    expect(designMd).toContain('#6366f1');
    expect(designMd).toContain('Customization Applied');
    expect(designMd).toContain('based on Stripe');
  });

  it('should generate shadcn CSS', () => {
    const { shadcnCss } = applyOverrides(ref, { darkMode: false }, 'as-is');
    expect(shadcnCss).toContain('--primary:');
    expect(shadcnCss).toContain('--background:');
    expect(shadcnCss).toContain('--radius:');
  });

  it('should include dark mode when requested', () => {
    const { shadcnCss } = applyOverrides(ref, { darkMode: true }, 'as-is');
    expect(shadcnCss).toContain('.dark {');
  });

  it('should not include dark mode when not requested', () => {
    const { shadcnCss } = applyOverrides(ref, { darkMode: false }, 'as-is');
    expect(shadcnCss).not.toContain('.dark {');
  });

  it('should generate preview data', () => {
    const { previewData } = applyOverrides(ref, { darkMode: true }, 'as-is');
    expect(previewData.basedOn).toBe('Stripe');
    expect(previewData.primary).toBeDefined();
    expect(previewData.darkMode).toBe(true);
  });

  it('should replace font in customized mode', () => {
    const { designMd } = applyOverrides(ref, {
      fontFamily: 'Inter',
      darkMode: false,
    }, 'customized');

    expect(designMd).toContain('Inter');
    expect(designMd).toContain('Customization Applied');
  });
});
