import { describe, it, expect } from 'vitest';
import {
  loadVocabulary,
  loadSynonyms,
  extractKeywords,
  resolveConflicts,
  buildDeltaSet,
  tokenize,
  listKeywords,
} from '../../../src/core/vocabulary.js';

describe('vocabulary', () => {
  describe('loadVocabulary', () => {
    it('loads the schema and ≥41 keywords', () => {
      const vocab = loadVocabulary();
      expect(vocab.version).toBe(1);
      expect(Object.keys(vocab.keywords).length).toBeGreaterThanOrEqual(41);
      expect(vocab.modifiers.primarily).toBeGreaterThan(1.0);
      expect(vocab.modifiers.very).toBe(1.5);
      expect(vocab.modifiers.not).toBe(-0.5);
    });

    it('every keyword references only registered axes', () => {
      const vocab = loadVocabulary();
      const registered = new Set(Object.keys(vocab.axis_registry));
      for (const [kw, spec] of Object.entries(vocab.keywords)) {
        for (const axis of Object.keys(spec.axes)) {
          expect(registered.has(axis), `${kw} → ${axis}`).toBe(true);
        }
      }
    });
  });

  describe('loadSynonyms', () => {
    it('every synonym target exists in vocabulary', () => {
      const vocab = loadVocabulary();
      const syn = loadSynonyms();
      for (const [from, to] of Object.entries(syn.map)) {
        expect(vocab.keywords[to], `${from} → ${to}`).toBeDefined();
      }
    });
  });

  describe('tokenize', () => {
    it('lowercases and splits', () => {
      expect(tokenize('Warm, Playful Dashboard')).toEqual([
        'warm',
        'playful',
        'dashboard',
      ]);
    });

    it('preserves hyphens inside words', () => {
      expect(tokenize('data-dense board')).toEqual(['data-dense', 'board']);
    });
  });

  describe('extractKeywords', () => {
    it('matches direct keywords', () => {
      const result = extractKeywords('a warm and playful dashboard');
      const names = result.map((r) => r.keyword).sort();
      expect(names).toEqual(['playful', 'warm']);
    });

    it('resolves synonyms', () => {
      const result = extractKeywords('a fun and fast product');
      const map = Object.fromEntries(
        result.map((r) => [r.keyword, r.matchedAs])
      );
      expect(map['playful']).toBe('synonym');
      expect(map['energetic']).toBe('synonym');
    });

    it('applies modifiers', () => {
      const result = extractKeywords('very warm, slightly playful');
      const byKw = Object.fromEntries(result.map((r) => [r.keyword, r.modifier]));
      expect(byKw.warm).toBe(1.5);
      expect(byKw.playful).toBe(0.4);
    });

    it('ignores unknown tokens', () => {
      const result = extractKeywords('warm xyzzy dashboard');
      expect(result.map((r) => r.keyword)).toEqual(['warm']);
    });
  });

  describe('resolveConflicts', () => {
    it('drops both on symmetric conflict with no priority', () => {
      const kws = extractKeywords('formal and playful');
      const { kept, dropped, warnings } = resolveConflicts(kws);
      expect(kept.map((k) => k.keyword)).toEqual([]);
      expect(dropped.length).toBeGreaterThan(0);
      expect(warnings.length).toBeGreaterThan(0);
    });

    it('keeps the primarily-marked winner', () => {
      const kws = extractKeywords('primarily playful, slightly formal');
      const { kept } = resolveConflicts(kws);
      expect(kept.find((k) => k.keyword === 'playful')).toBeDefined();
      expect(kept.find((k) => k.keyword === 'formal')).toBeUndefined();
    });

    it('composes orthogonal keywords without conflict', () => {
      const kws = extractKeywords('warm and minimal');
      const { kept, dropped } = resolveConflicts(kws);
      expect(kept.map((k) => k.keyword).sort()).toEqual(['minimal', 'warm']);
      expect(dropped).toHaveLength(0);
    });
  });

  describe('buildDeltaSet', () => {
    it('composes additive axes with clamp', () => {
      const ds = buildDeltaSet('warm and playful');
      // warm: hue +8, playful: hue +18 → sum 26, rangeUnion [4, 24] → clamped to 24
      expect(ds.axes['color.hue_deg']).toBeDefined();
      expect(ds.axes['color.hue_deg'].value).toBeLessThanOrEqual(24);
      expect(ds.axes['color.hue_deg'].value).toBeGreaterThanOrEqual(4);
    });

    it('is commutative (order-independent)', () => {
      const a = buildDeltaSet('warm and playful');
      const b = buildDeltaSet('playful and warm');
      expect(a.axes).toEqual(b.axes);
    });

    it('applies modifier scaling to individual keyword deltas', () => {
      const base = buildDeltaSet('warm');
      const scaled = buildDeltaSet('very warm');
      expect(scaled.axes['color.hue_deg'].value).toBeGreaterThanOrEqual(
        base.axes['color.hue_deg'].value
      );
    });

    it('collects voice hints from kept keywords', () => {
      const ds = buildDeltaSet('warm and approachable');
      expect(ds.voiceHints.length).toBeGreaterThan(0);
    });

    it('reports dropped keywords on conflict', () => {
      const ds = buildDeltaSet('playful and serious');
      expect(ds.droppedKeywords.length).toBeGreaterThanOrEqual(2);
      expect(ds.axes).toEqual({});
    });

    it('handles unmatched descriptions gracefully', () => {
      const ds = buildDeltaSet('xyzzy foo bar');
      expect(ds.matchedKeywords).toEqual([]);
      expect(ds.axes).toEqual({});
    });

    it('clamps integer axes to integer values', () => {
      const ds = buildDeltaSet('warm');
      const v = ds.axes['color.hue_deg'].value;
      expect(Number.isInteger(v)).toBe(true);
    });
  });

  describe('listKeywords', () => {
    it('returns sorted list', () => {
      const list = listKeywords();
      expect(list.length).toBeGreaterThanOrEqual(41);
      const sorted = [...list].sort();
      expect(list).toEqual(sorted);
    });
  });
});
