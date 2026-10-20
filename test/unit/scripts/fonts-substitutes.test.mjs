// Measured font substitutes (scripts/fonts/): the scoring rules, the committed records, and the
// references they were applied to.
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  scoreCandidate, choose, applyStackRule, scoreRecord, sidecarRecord, WEIGHTING, NON_GOOGLE_FACTOR, MAX_SCORE, LABEL,
} from '../../../scripts/fonts/score.mjs';
import { readFontInfo } from '../../../scripts/fonts/sfnt.mjs';
import { CANDIDATES, coversWeight } from '../../../scripts/fonts/candidates.mjs';

const ROOT = resolve(import.meta.dirname, '../../..');
const RECORDS = join(ROOT, 'docs/research/2026-10-20-r11/fonts');
const TARGETS = ['toss', 'linear.app'];
const IDS = ['toss', 'karrot', 'kakaobank', 'banksalad', 'freee', '104', 'line', 'pixiv', 'stripe', 'linear.app', 'eslite'];
const read = (p) => JSON.parse(readFileSync(p, 'utf8'));

const metric = (avgAdvance, xHeightRatio, ok = true) => ({ latin: { avgAdvance, xHeightRatio, drawn: { ok } } });
const brand = { weights: { 400: metric(0.5, 0.7) } };

describe('scoreCandidate', () => {
  it('weights relative deltas and drops the class term when a class is not first-party', () => {
    const r = scoreCandidate({ brand, candidate: { weights: { 400: metric(0.55, 0.7) }, covers: () => true }, script: 'latin', weights: [400], requiredWeights: [400], brandClass: null, candidateClass: 'neo-grotesk' });
    expect(r.eligible).toBe(true);
    expect(r.terms).toEqual({ avgAdvance: expect.closeTo(0.1, 12), xHeightRatio: 0, weightCoverage: 0 });
    expect(r.score).toBeCloseTo((WEIGHTING.avgAdvance * 0.1) / (WEIGHTING.avgAdvance + WEIGHTING.xHeightRatio + WEIGHTING.weightCoverage), 12);
  });

  it('counts a class mismatch only when both classes are sourced, and missing weights', () => {
    const r = scoreCandidate({ brand, candidate: { weights: { 400: metric(0.5, 0.7) }, covers: (w) => w === 400 }, script: 'latin', weights: [400], requiredWeights: [400, 700], brandClass: 'humanist', candidateClass: 'geometric' });
    expect(r.terms.classification).toBe(1);
    expect(r.terms.weightCoverage).toBe(0.5);
    expect(r.score).toBeCloseTo(WEIGHTING.classification + WEIGHTING.weightCoverage * 0.5, 12);
  });

  it('a candidate that did not draw the sample is not eligible', () => {
    const r = scoreCandidate({ brand, candidate: { weights: { 400: metric(0.5, 0.7, false) }, covers: () => true }, script: 'latin', weights: [400], requiredWeights: [400], brandClass: null, candidateClass: null });
    expect(r.eligible).toBe(false);
  });
});

describe('choose', () => {
  const row = (family, provider, score, scripts = ['latin']) => ({ family, provider, score, scripts, eligible: true });
  it('prefers Google unless another face scores at most 0.8x the best Google score', () => {
    expect(NON_GOOGLE_FACTOR).toBe(0.8);
    expect(choose([row('Other', 'other', 0.015), row('G', 'google', 0.02)]).chosen.family).toBe('Other');
    expect(choose([row('Other', 'other', 0.017), row('G', 'google', 0.02)]).chosen.family).toBe('G');
  });
  it('chooses nothing above the tolerance', () => {
    expect(choose([row('G', 'google', MAX_SCORE + 0.01)]).chosen).toBeNull();
  });
  it('the stack rule keeps a Hangul-covering face from taking the Latin slot when Hangul chose another face', () => {
    const out = {
      latin: { chosen: 'KR Face', rule: 'x', ranked: [row('KR Face', 'google', 0.0073, ['hangul', 'latin']), row('Latin Face', 'google', 0.0074)] },
      hangul: { chosen: 'Other KR', rule: 'y', ranked: [] },
    };
    applyStackRule(out);
    expect(out.latin.chosen).toBe('Latin Face');
    expect(out.latin.unconstrained.chosen).toBe('KR Face');
  });
});

describe('committed measurement records', () => {
  for (const id of TARGETS) {
    const measurements = read(join(RECORDS, `${id}.measurements.json`));
    const choice = read(join(RECORDS, `${id}.choice.json`));

    it(`${id}: the brand face itself drew every sample (CDP names only web fonts)`, () => {
      for (const w of measurements.weights) {
        for (const s of measurements.scripts) {
          const d = measurements.brand.weights[w][s].drawn;
          expect(d.ok, `${w}/${s}`).toBe(true);
          expect(d.platformFonts.every((f) => f.isCustomFont)).toBe(true);
        }
      }
    });

    it(`${id}: the choice record reproduces from the measurements`, () => {
      const scored = scoreRecord(measurements);
      expect(Object.fromEntries(Object.entries(scored).map(([s, v]) => [s, v.chosen]))).toEqual(Object.fromEntries(Object.entries(choice.scripts).map(([s, v]) => [s, v.chosen])));
      for (const [s, rec] of Object.entries(choice.sidecar)) expect(sidecarRecord(measurements, s, scored[s])).toEqual(rec);
    });

    it(`${id}: the reference carries exactly the recorded substitutes, labelled`, () => {
      const sidecar = read(join(ROOT, 'web/references', id, 'reference.json'));
      const recs = sidecar.fonts.substitutes[measurements.family];
      expect(Object.keys(recs)).toEqual(Object.keys(choice.sidecar));
      for (const [s, rec] of Object.entries(choice.sidecar)) {
        expect(recs[s].label).toBe(LABEL);
        expect(recs[s].metrics).toEqual(rec.metrics);
        const candidate = CANDIDATES.find((c) => c.family === rec.family);
        expect(recs[s].cssUrl).toBe(candidate.cssUrl);
        for (const w of measurements.weights) expect(coversWeight(candidate, w), `${rec.family} ${w}`).toBe(true);
      }
    });
  }
});

describe('scripts/fonts/apply.mjs', () => {
  it('is a no-op on the applied references and they pass v3 conformance', async () => {
    const { applyReference } = await import('../../../scripts/fonts/apply.mjs');
    for (const id of IDS) {
      const r = applyReference(id);
      expect(r.problems, id).toEqual([]);
      expect(r.changed, `${id}: DESIGN.md / reference.json differ from what apply.mjs writes`).toBe(false);
    }
  });
});

describe('readFontInfo (sfnt)', () => {
  it('reads unitsPerEm and the OS/2 x-height and cap height', () => {
    const tables = [['head', 54], ['OS/2', 96]];
    const buf = Buffer.alloc(12 + tables.length * 16 + 54 + 96);
    buf.writeUInt32BE(0x00010000, 0);
    buf.writeUInt16BE(tables.length, 4);
    let off = 12 + tables.length * 16;
    tables.forEach(([tag, len], i) => {
      buf.write(tag, 12 + i * 16, 'latin1');
      buf.writeUInt32BE(off, 12 + i * 16 + 8);
      buf.writeUInt32BE(len, 12 + i * 16 + 12);
      if (tag === 'head') buf.writeUInt16BE(1000, off + 18);
      if (tag === 'OS/2') { buf.writeUInt16BE(2, off); buf.writeInt16BE(500, off + 86); buf.writeInt16BE(700, off + 88); }
      off += len;
    });
    const info = readFontInfo(buf);
    expect(info.unitsPerEm).toBe(1000);
    expect(info.xHeightRatio).toBeCloseTo(500 / 700, 12);
    expect(() => readFontInfo(Buffer.from('wOF2xxxxxxxxxxxx'))).toThrow(/not an uncompressed sfnt/);
  });
});
