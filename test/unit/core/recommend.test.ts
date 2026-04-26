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

  it('boosts category-aligned refs over equal-tag-match outsiders', () => {
    // "warm casual meal-kit subscription for young families" used to surface
    // Developer/AI tools first because "warm" tag-matched widely. With the
    // category prior, Consumer refs (airbnb, karrot, baemin) should rank
    // higher.
    const hits = recommend(
      'warm casual meal-kit subscription for young families',
      { diversityByCategory: false, topK: 10 }
    );
    const top3Ids = hits.slice(0, 3).map((h) => h.id);
    const consumerInTop3 = top3Ids.some((id) =>
      ['airbnb', 'karrot', 'baemin', 'pinterest', 'kakao'].includes(id)
    );
    expect(consumerInTop3).toBe(true);
  });

  it('records matchedCategories on hits', () => {
    const hits = recommend(
      'warm marketplace for families',
      { diversityByCategory: false, topK: 5 }
    );
    const consumerHits = hits.filter((h) => h.category === 'Consumer');
    expect(consumerHits.length).toBeGreaterThan(0);
    expect(consumerHits[0].matchedCategories).toContain('Consumer');
  });

  it('falls back to category-only scoring when zero tag matches anywhere', () => {
    // "subscription for families" has no direct tag overlaps in REFERENCE_TAGS.
    // Without fallback we'd return alphabetical noise; with the fallback,
    // category-aligned (Consumer) refs should surface.
    const hits = recommend('subscription for families', {
      diversityByCategory: false,
      topK: 5,
    });
    const consumerCategories = hits.filter((h) => h.category === 'Consumer');
    expect(consumerCategories.length).toBeGreaterThan(0);
  });

  it('keeps tag-matched refs above category-only refs in normal queries', () => {
    // Description has tag matches AND category hints — tag winners still
    // dominate; category-only outsiders don't leapfrog them.
    const hits = recommend(
      'warm casual marketplace for families',
      { diversityByCategory: false, topK: 10 }
    );
    // The first hit must have ≥1 tag match.
    expect(hits[0].matchedKeywords.length).toBeGreaterThan(0);
  });
});
