import { describe, it, expect, beforeAll } from 'vitest';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadAllReferences, getReference } from '../src/data.js';
import { runListReferences } from '../src/tools/list-references.js';
import { runGetDesignMd } from '../src/tools/get-design-md.js';
import { runSearchByVibe } from '../src/tools/search-by-vibe.js';
import { buildDesignFromRefPrompt } from '../src/prompts/design-from-ref.js';
import { createServer } from '../src/server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(PKG_ROOT, '..', '..');
const CANONICAL_DIR = path.join(REPO_ROOT, 'web', 'references');
const BUNDLED_DIR = path.join(PKG_ROOT, 'data', 'references');
const MANIFEST_PATH = path.join(PKG_ROOT, 'data', 'reference-manifest.json');
const AST_PATH = path.join(PKG_ROOT, 'data', 'reference-ast.json');

interface ReferenceManifest {
  schemaVersion: 1;
  generatedFrom: string;
  count: number;
  corpusHash: string;
  astSchemaVersion: number;
  astSha256: string;
  references: Array<{ id: string; sha256: string; bytes: number }>;
}

function sha256(buffer: Buffer | string): string {
  return createHash('sha256').update(buffer).digest('hex');
}

function designIds(root: string): string[] {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(path.join(root, entry.name, 'DESIGN.md')))
    .map((entry) => entry.name)
    .sort();
}

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
    expect(refs.size).toBeGreaterThanOrEqual(400);
  });

  it('is byte-identical to the canonical corpus and generated manifest', () => {
    const canonicalIds = designIds(CANONICAL_DIR);
    const bundledIds = designIds(BUNDLED_DIR);
    const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8')) as ReferenceManifest;

    expect(bundledIds).toEqual(canonicalIds);
    expect(manifest.schemaVersion).toBe(1);
    expect(manifest.generatedFrom).toBe('web/references');
    expect(manifest.count).toBe(canonicalIds.length);
    expect(manifest.references.map((entry) => entry.id)).toEqual(canonicalIds);
    const astBuffer = readFileSync(AST_PATH);
    const portableAst = JSON.parse(astBuffer.toString('utf8')) as {
      schemaVersion: number;
      count: number;
      references: Array<{ contentHash: string; identity: { id: string } }>;
    };
    expect(manifest.astSchemaVersion).toBe(1);
    expect(manifest.astSha256).toBe(sha256(astBuffer));
    expect(portableAst.count).toBe(canonicalIds.length);
    expect(portableAst.references.map((entry) => entry.identity.id)).toEqual(canonicalIds);

    for (const entry of manifest.references) {
      const canonical = readFileSync(path.join(CANONICAL_DIR, entry.id, 'DESIGN.md'));
      const bundled = readFileSync(path.join(BUNDLED_DIR, entry.id, 'DESIGN.md'));
      const canonicalHash = sha256(canonical);
      expect(sha256(bundled), `${entry.id}: bundled DESIGN.md drift`).toBe(canonicalHash);
      expect(entry.sha256, `${entry.id}: manifest hash drift`).toBe(canonicalHash);
      expect(entry.bytes, `${entry.id}: manifest byte count drift`).toBe(canonical.byteLength);
      expect(portableAst.references.find((reference) => reference.identity.id === entry.id)?.contentHash).toBe(canonicalHash);
    }

    const corpusHash = sha256(
      manifest.references.map((entry) => `${entry.id}\0${entry.sha256}\0${entry.bytes}`).join('\n'),
    );
    expect(manifest.corpusHash).toBe(corpusHash);
  });

  it('list_references returns all + filters by country', async () => {
    const all = await runListReferences({});
    expect(all.count).toBeGreaterThanOrEqual(100);
    const kr = await runListReferences({ country: 'KR' });
    expect(kr.count).toBeGreaterThan(0);
    expect(kr.references.every((r) => r.country?.toUpperCase() === 'KR')).toBe(true);
    const toss = all.references.find((reference) => reference.id === 'toss');
    expect(toss).toMatchObject({
      primaryColor: '#3182f6',
      brandColor: '#0064ff',
      qualityStatus: 'legacy_snapshot',
    });
  });

  it('get_design_md returns full content + sections for toss', async () => {
    const toss = getReference('toss');
    expect(toss, 'toss reference must exist in bundle').toBeTruthy();
    const out = await runGetDesignMd({ id: 'toss' });
    expect(out.id).toBe('toss');
    expect(out.content.length).toBeGreaterThan(500);
    expect(out.sections.length).toBeGreaterThan(0);
    expect(out.foundations?.primary?.value).toBe('#3182f6');
    expect(out.foundations?.brandColor.value).toBe('#0064ff');
    expect(out.quality?.status).toBe('legacy_snapshot');
    expect(out.tokens).toBeTruthy();
  });

  it('get_design_md throws on unknown id', async () => {
    await expect(runGetDesignMd({ id: 'definitely-not-a-brand' })).rejects.toThrow();
  });

  it('search_by_vibe finds fintech-ish brands', async () => {
    const out = await runSearchByVibe({ description: 'Toss calm fintech', limit: 5 });
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
