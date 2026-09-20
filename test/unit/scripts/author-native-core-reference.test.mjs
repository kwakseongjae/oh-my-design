/**
 * The authoring path for a reference written as Core v2 from the start.
 *
 * `author-native-core-reference.mjs` turns an authored reference body into a
 * draft the existing seal chain accepts, and the thing worth testing is that the
 * whole route holds together: generator → `prepare` → owner approval →
 * `compile --adopt` → the catalog readers. Each step is covered somewhere; the
 * seam between them was not, and every defect this month lived in a seam.
 *
 * The input is built from krds's own reconstructed source so the fixture is a
 * real reference body rather than a minimal one that would pass a mapper and
 * prove nothing.
 */
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const AUTHOR = join(ROOT, 'scripts', 'author-native-core-reference.mjs');
const REVIEW = join(ROOT, 'scripts', 'prepare-design-md-core-review.cjs');
const COMPILE = join(ROOT, 'scripts', 'compile-design-md-core.cjs');

const roots = [];
function tempRoot() {
  const root = mkdtempSync(join(tmpdir(), 'omd-author-native-'));
  roots.push(root);
  return root;
}
afterAll(() => {
  for (const root of roots) rmSync(root, { recursive: true, force: true });
});

function node(args) {
  return spawnSync(process.execPath, args, { encoding: 'utf8', cwd: ROOT });
}

let authoredBody;
beforeAll(async () => {
  const { readReferenceSource } = await import('../../../web/scripts/lib/reference-source.mjs');
  // krds predates the `added` field — 244 of the first 440 do — so the authoring
  // tool requires it and the fixture has to supply one.
  authoredBody = readReferenceSource(join(ROOT, 'web', 'references', 'krds')).markdown
    .replace('verified: "2026-07-11"', 'verified: "2026-07-11"\nadded: "2026-09-21"');
});

describe('authoring a native Core v2 reference', () => {
  it('produces a draft the seal chain accepts, and a package the readers project', async () => {
    const root = tempRoot();
    const input = join(root, 'authored.md');
    writeFileSync(input, authoredBody);

    const drafted = node([AUTHOR, '--input', input, '--out-dir', join(root, 'draft')]);
    expect(drafted.status, drafted.stderr).toBe(0);

    // The conversion: the mapper's migration extension is gone and the catalog
    // plane is declared. Keeping both would make every native reference report
    // `reconstructed`, which is the one field that distinguishes them.
    const graph = JSON.parse(readFileSync(join(root, 'draft', 'graph.json'), 'utf8'));
    expect(Object.keys(graph.extensions)).toEqual(['dev.oh-my-design.catalog']);
    expect(graph.projection.sha256, 'a draft asserts content; the compiler seals').toBeUndefined();
    // The mapping stays auditable after the extension describing it is dropped.
    expect(existsSync(join(root, 'draft', 'migration-report.json'))).toBe(true);

    // The migrator's provenance/coverage are migration-shaped and the compiler
    // wants decisions and groups. Getting this wrong fails three steps later at
    // `prepare` with "provenance.decisions must be a non-empty array".
    const provenance = JSON.parse(readFileSync(join(root, 'draft', 'provenance.json'), 'utf8'));
    expect(provenance.decisions.length).toBeGreaterThan(0);

    const prepared = node([REVIEW, join(root, 'draft', 'graph.json'),
      '--provenance', join(root, 'draft', 'provenance.json'),
      '--coverage', join(root, 'draft', 'coverage.json'),
      '--out-dir', join(root, 'review')]);
    expect(prepared.status, prepared.stderr).toBe(0);

    const approved = node([REVIEW, '--approve', join(root, 'review', 'review-request.json'),
      '--reviewer', 'owner@example.test', '--authority-transition-approved',
      '--out', join(root, 'receipt.json')]);
    expect(approved.status, approved.stderr).toBe(0);

    // No `--migration-report`: nothing was migrated. That flag being optional is
    // the whole reason a native writer did not have to be built.
    const sealed = node([COMPILE, join(root, 'review', 'input-graph.json'),
      '--provenance', join(root, 'review', 'provenance.json'),
      '--coverage', join(root, 'review', 'coverage.json'),
      '--review-receipt', join(root, 'receipt.json'),
      '--out-dir', join(root, 'sealed'), '--adopt']);
    expect(sealed.status, sealed.stderr).toBe(0);

    const canonical = readFileSync(join(root, 'sealed', 'DESIGN.md'), 'utf8');
    expect(canonical.startsWith('---'), 'a Core canonical carries no frontmatter').toBe(false);

    const { readReferenceSource } = await import('../../../web/scripts/lib/reference-source.mjs');
    const { parseReferenceFrontmatter } = await import('../../../web/scripts/lib/reference-quality.mjs');
    const source = readReferenceSource(join(root, 'sealed'));
    expect(source.projected).toBe(true);
    expect(source.reconstructed).toBe(false);

    const frontmatter = parseReferenceFrontmatter(source.markdown, 'krds');
    expect(frontmatter.id).toBe('krds');
    expect(frontmatter.added).toBe('2026-09-21');
    // The evidence graph is the thing a blind reader loses first.
    expect(frontmatter.verification_v2.sources.length).toBeGreaterThan(0);
  }, 120_000);

  it('refuses an authored file with no `added`, naming the field', () => {
    const root = tempRoot();
    const input = join(root, 'authored.md');
    writeFileSync(input, authoredBody.replace('\nadded: "2026-09-21"', ''));

    const drafted = node([AUTHOR, '--input', input, '--out-dir', join(root, 'draft')]);
    expect(drafted.status).toBe(1);
    expect(drafted.stderr).toContain('added is required');
    // Optional in the registry, required here: 244 of the first 440 have no
    // `added`, which is why more than half the catalog has no record of when or
    // why it arrived. New references do not get to repeat that.
    expect(drafted.stderr).toContain('when this entered the catalog');
  }, 60_000);

  it('refuses a body with no frontmatter rather than authoring an identity-less reference', () => {
    const root = tempRoot();
    const input = join(root, 'authored.md');
    writeFileSync(input, '# Something\n\nA body with no catalog plane at all.\n');

    const drafted = node([AUTHOR, '--input', input, '--out-dir', join(root, 'draft')]);
    expect(drafted.status).toBe(1);
    expect(drafted.stderr).toContain('carries the catalog plane');
  }, 60_000);
});
