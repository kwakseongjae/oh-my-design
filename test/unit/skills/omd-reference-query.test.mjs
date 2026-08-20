import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import {
  loadReferenceQueryData,
  queryReferences,
  resolveDataRoot,
  runCli,
} from '../../../skills/omd-init/scripts/query-references.mjs';

const ROOT = process.cwd();
const DATA_ROOT = join(ROOT, 'data');
const FIXTURE = JSON.parse(readFileSync(
  join(ROOT, 'benchmarks/ui-resolve-bench/fixtures/reference-query/query-contract-v0.1.json'),
  'utf8',
));

function productionData() {
  return loadReferenceQueryData(DATA_ROOT);
}

describe('omd:init deterministic reference query', () => {
  it('resolves the repository data root without network or a model call', () => {
    expect(resolveDataRoot({ cwd: ROOT, explicitRoot: DATA_ROOT })).toBe(DATA_ROOT);
  });

  it.each(FIXTURE.cases.filter((entry) => entry.expected_status === 'ok'))(
    'returns an evidence-governed candidate set for $id',
    (entry) => {
      const result = queryReferences({ task: entry.task, limit: 5, ...productionData() });
      const repeated = Array.from({ length: 3 }, () =>
        queryReferences({ task: entry.task, limit: 5, ...productionData() }));
      expect(repeated[1]).toEqual(repeated[0]);
      expect(repeated[2]).toEqual(repeated[0]);
      expect(result.status).toBe('ok');
      expect(result.query.categories).toContain(entry.required_category);
      expect(result.candidates.length).toBeGreaterThan(0);
      for (const candidate of result.candidates) {
        expect(candidate.promotion.unknown_policy).toBe('omit-smallest-unresolved-field');
        if (candidate.quality.status === 'verified_v2') {
          expect(candidate.promotion).toMatchObject({
            token_policy: 'evidence-qualified-fields-only',
            requires_reverify: false,
          });
        } else {
          expect(candidate.promotion).toMatchObject({
            token_policy: 'context-only-reverify-first',
            requires_reverify: true,
          });
        }
      }
    },
  );

  it('does not invent a generic fallback for an unrecognized request', () => {
    const entry = FIXTURE.cases.find((candidate) => candidate.id === 'vague-no-fallback');
    const result = queryReferences({ task: entry.task, ...productionData() });
    expect(result).toMatchObject({
      status: 'needs_clarification',
      reason: 'no-recognized-reference-signal',
      candidates: [],
    });
  });

  it('uses localized product nouns to distinguish a neighborhood marketplace', () => {
    const result = queryReferences({
      task: '따뜻하고 친근한 동네 중고거래 앱',
      ...productionData(),
    });
    expect(result.candidates[0]).toMatchObject({
      id: 'karrot',
      matched: { theme_terms: ['marketplace', 'neighborhood'] },
    });
  });

  it.each([
    ['채용과 인재 관리를 위한 서비스', 'hr'],
    ['부동산 매물 탐색 서비스', 'real-estate'],
    ['학습자를 위한 교육 서비스', 'education'],
  ])('recognizes extended catalog categories: %s', (task, category) => {
    const result = queryReferences({ task, ...productionData() });
    expect(result.status).toBe('ok');
    expect(result.query.categories).toContain(category);
    expect(result.candidates.length).toBeGreaterThan(0);
  });

  it('keeps an exact non-verified brand first but context-only', () => {
    const data = productionData();
    const legacy = data.fingerprints.find(
      (item) => data.qualityById.get(item.id)?.status !== 'verified_v2',
    );
    expect(legacy).toBeTruthy();
    const result = queryReferences({
      task: 'Use this brand as a reference',
      brandHint: legacy.id,
      ...data,
    });
    expect(result.candidates[0]).toMatchObject({
      id: legacy.id,
      matched: { exact_brand: true },
      promotion: {
        token_policy: 'context-only-reverify-first',
        requires_reverify: true,
      },
    });
  });

  it('rejects an unknown brand instead of approximating it', () => {
    const result = queryReferences({
      task: 'Use a calm product reference',
      brandHint: 'definitely-not-a-catalog-brand',
      ...productionData(),
    });
    expect(result).toMatchObject({
      status: 'needs_clarification',
      reason: 'unknown-brand-id',
      candidates: [],
    });
  });

  it('is stable across repeated runs and shuffled input order', () => {
    const data = productionData();
    const input = { task: 'A precise minimal developer tool', limit: 10, ...data };
    const baseline = queryReferences(input);
    const repeated = queryReferences(input);
    const shuffled = queryReferences({
      ...input,
      fingerprints: [...data.fingerprints].reverse(),
    });
    expect(repeated).toEqual(baseline);
    expect(shuffled).toEqual(baseline);
  });

  it('fails closed when the quality manifest is incomplete', () => {
    const data = productionData();
    const missingId = data.fingerprints[0].id;
    const qualityById = new Map(data.qualityById);
    qualityById.delete(missingId);
    expect(() => queryReferences({
      task: `Use ${missingId}`,
      fingerprints: data.fingerprints,
      qualityById,
      synonymMap: data.synonymMap,
    })).toThrow(`quality entry missing for ${missingId}`);
  });

  it('returns a recovery-bearing non-zero CLI result when quality data is missing', () => {
    const root = mkdtempSync(join(tmpdir(), 'omd-reference-query-'));
    const dataRoot = join(root, 'data');
    mkdirSync(dataRoot, { recursive: true });
    writeFileSync(
      join(dataRoot, 'reference-fingerprints.json'),
      '{"count":1,"items":[{"id":"toss","category":"fintech","tone_keywords":[]}]}',
    );
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      expect(runCli(['--task', 'fintech', '--data-root', dataRoot, '--json'])).toBe(2);
      expect(error).toHaveBeenCalledWith(expect.stringMatching(/install-skills|doctor/));
    } finally {
      error.mockRestore();
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('keeps all 440 catalog entries paired with a valid quality status', () => {
    const data = productionData();
    expect(data.fingerprints).toHaveLength(440);
    expect(data.qualityById.size).toBe(440);
    for (const item of data.fingerprints) {
      expect(['verified_v2', 'partial', 'legacy_snapshot']).toContain(
        data.qualityById.get(item.id)?.status,
      );
    }
  });
});
