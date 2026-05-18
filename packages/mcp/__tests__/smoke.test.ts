import { describe, it, expect, beforeAll } from 'vitest';
import { loadAllReferences, getReference } from '../src/data.js';
import { runListReferences } from '../src/tools/list-references.js';
import { runGetDesignMd } from '../src/tools/get-design-md.js';
import { runSearchByVibe } from '../src/tools/search-by-vibe.js';
import { buildDesignFromRefPrompt } from '../src/prompts/design-from-ref.js';
import { createServer } from '../src/server.js';

describe('oh-my-design-mcp smoke', () => {
  beforeAll(() => {
    const refs = loadAllReferences();
    if (refs.size === 0) {
      throw new Error(
        'data/references is empty — run `npm run sync-data` before tests',
      );
    }
  });

  it('loads bundled references', () => {
    const refs = loadAllReferences();
    expect(refs.size).toBeGreaterThanOrEqual(100);
  });

  it('list_references returns all + filters by country', async () => {
    const all = await runListReferences({});
    expect(all.count).toBeGreaterThanOrEqual(100);
    const kr = await runListReferences({ country: 'KR' });
    expect(kr.count).toBeGreaterThan(0);
    expect(kr.references.every((r) => r.country?.toUpperCase() === 'KR')).toBe(true);
  });

  it('get_design_md returns full content + sections for toss', async () => {
    const toss = getReference('toss');
    expect(toss, 'toss reference must exist in bundle').toBeTruthy();
    const out = await runGetDesignMd({ id: 'toss' });
    expect(out.id).toBe('toss');
    expect(out.content.length).toBeGreaterThan(500);
    expect(out.sections.length).toBeGreaterThan(0);
  });

  it('get_design_md throws on unknown id', async () => {
    await expect(runGetDesignMd({ id: 'definitely-not-a-brand' })).rejects.toThrow();
  });

  it('search_by_vibe finds fintech-ish brands', async () => {
    const out = await runSearchByVibe({ description: 'calm fintech', limit: 5 });
    expect(out.count).toBeGreaterThan(0);
    const ids = out.matches.map((m) => m.id);
    // toss is our reference fintech brand and is guaranteed in the bundle
    expect(ids).toContain('toss');
  });

  it('design_from_ref prompt injects brand context', () => {
    const text = buildDesignFromRefPrompt({ refId: 'toss', task: 'a pricing page' });
    expect(text).toContain('Toss');
    expect(text).toContain('pricing page');
    expect(text.length).toBeGreaterThan(200);
  });

  it('server constructs without throwing', () => {
    const s = createServer();
    expect(s).toBeTruthy();
  });
});
