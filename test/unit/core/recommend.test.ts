import { describe, it, expect } from 'vitest';
import { loadReferenceTags, recommend } from '../../../src/core/recommend.js';

describe('recommend', () => {
  it('loads ≥40 reference tag rows', () => {
    const tags = loadReferenceTags();
    expect(tags.length).toBeGreaterThanOrEqual(40);
    const ids = tags.map((t) => t.id);
    expect(ids).toContain('vercel');
    expect(ids).toContain('linear.app');
    expect(ids).toContain('stripe');
  });

  it('every tag row has id, category, and at least one keyword', () => {
    const tags = loadReferenceTags();
    for (const t of tags) {
      expect(t.id, 'id').toBeTruthy();
      expect(t.category, 'category').toBeTruthy();
      expect(t.keywords.length, t.id).toBeGreaterThan(0);
    }
  });

  it('returns top-5 hits for a project description', () => {
    const hits = recommend('a warm and approachable B2C marketplace');
    expect(hits).toHaveLength(5);
    expect(hits[0].score).toBeGreaterThanOrEqual(hits[4].score);
  });

  it('gives airbnb a high rank for "warm inviting marketplace"', () => {
    const hits = recommend('warm inviting marketplace', {
      diversityByCategory: false,
    });
    const ids = hits.map((h) => h.id);
    expect(ids).toContain('airbnb');
  });

  it('diversifies across categories by default', () => {
    const hits = recommend('minimal clean developer tool');
    const categories = new Set(hits.map((h) => h.category));
    expect(categories.size).toBeGreaterThan(1);
  });

  it('returns stable order for equal-score hits', () => {
    const a = recommend('xyz completely unrelated description');
    const b = recommend('xyz completely unrelated description');
    expect(a.map((h) => h.id)).toEqual(b.map((h) => h.id));
  });
});
