import { describe, it, expect } from 'vitest';
import { listReferences, loadReference } from '../../../src/core/reference-parser.js';

describe('listReferences', () => {
  it('should list all available references', () => {
    const refs = listReferences();
    expect(refs.length).toBeGreaterThan(50);
  });

  it('should include known brands', () => {
    const refs = listReferences();
    const ids = refs.map((r) => r.id);
    expect(ids).toContain('stripe');
    expect(ids).toContain('vercel');
    expect(ids).toContain('notion');
  });

  it('should have categories', () => {
    const refs = listReferences();
    const categories = [...new Set(refs.map((r) => r.category))];
    expect(categories).toContain('Fintech');
    expect(categories).toContain('Developer Tools');
  });
});

describe('loadReference', () => {
  it('should load Stripe with correct data', () => {
    const ref = loadReference('stripe');
    expect(ref.name).toBe('Stripe');
    expect(ref.colors.primary).toMatch(/^#[0-9a-fA-F]{6}$/);
    expect(ref.typography.primary).toBeDefined();
    expect(ref.designMd.length).toBeGreaterThan(100);
  });

  it('should load Vercel', () => {
    const ref = loadReference('vercel');
    expect(ref.name).toBe('Vercel');
    expect(ref.designMd).toContain('Visual Theme');
  });

  it('should extract typography info', () => {
    const ref = loadReference('stripe');
    expect(ref.typography.primary).toContain('sohne');
    expect(ref.typography.headingWeight).toBeDefined();
  });

  it('should throw for unknown reference', () => {
    expect(() => loadReference('nonexistent')).toThrow();
  });
});
