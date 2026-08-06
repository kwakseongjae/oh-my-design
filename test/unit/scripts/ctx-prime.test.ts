import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(import.meta.dirname, '../../..');
const helper = join(repoRoot, 'scripts/ctx-prime.cjs');
const roots: string[] = [];

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('ctx-prime static HTML surfaces', () => {
  it('keeps a root index.html in the surface inventory', () => {
    const root = mkdtempSync(join(tmpdir(), 'omd-ctx-static-'));
    roots.push(root);
    const run = join(root, '.omd/run');
    mkdirSync(run, { recursive: true });
    writeFileSync(join(root, 'index.html'), '<!doctype html><title>Review</title>');

    const result = spawnSync(process.execPath, [helper, root, run], { encoding: 'utf8' });
    expect(result.status, result.stderr).toBe(0);
    const ctx = JSON.parse(readFileSync(join(run, 'ctx-prime.json'), 'utf8'));
    expect(ctx.stack.kind).toBe('static-html');
    expect(ctx.surface_inventory).toEqual([
      expect.objectContaining({ path: 'index.html', kind: 'landing' }),
    ]);
  });
});
