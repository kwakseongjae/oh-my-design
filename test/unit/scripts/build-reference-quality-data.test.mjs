import { describe, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '../../..');
const script = resolve(repoRoot, 'scripts/build-reference-quality-data.mjs');
const snapshotDate = JSON.parse(readFileSync(resolve(repoRoot, 'data/reference-quality.json'), 'utf8')).generated_at;

describe('reference quality publish check', () => {
  it('recomputes current quality without requiring a timestamp-only rewrite', () => {
    const result = spawnSync(process.execPath, [script, '--check'], {
      cwd: repoRoot,
      encoding: 'utf8',
    });
    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout).toContain('entries evaluated as of');
    expect(result.stdout).toContain(`snapshot ${snapshotDate}`);
  });

  it('keeps explicit snapshot dates strict', () => {
    const result = spawnSync(process.execPath, [script, '--check', '--as-of', snapshotDate], {
      cwd: repoRoot,
      encoding: 'utf8',
    });
    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout).toContain(`snapshot ${snapshotDate}`);
  });
});
