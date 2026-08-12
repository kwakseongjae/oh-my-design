import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const {
  MIRROR_ROOTS,
  inspectRuntimeMirrors,
  writeRuntimeMirrors,
} = require('../../../scripts/sync-runtime-mirrors.cjs');

describe('runtime mirror sync', () => {
  const roots = [];

  afterEach(() => {
    for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
  });

  function fixture() {
    const repo = mkdtempSync(join(tmpdir(), 'omd-mirror-repo-'));
    const generated = mkdtempSync(join(tmpdir(), 'omd-mirror-generated-'));
    roots.push(repo, generated);
    for (const mirror of MIRROR_ROOTS) {
      const expected = join(generated, mirror.relative, 'managed.txt');
      mkdirSync(join(generated, mirror.relative), { recursive: true });
      writeFileSync(expected, `${mirror.id}\n`);
    }
    return { repo, generated };
  }

  it('writes only allowlisted generated files and preserves destination overlays', () => {
    const { repo, generated } = fixture();
    const overlay = join(repo, '.claude/skills/local-dev/notes.md');
    mkdirSync(join(repo, '.claude/skills/local-dev'), { recursive: true });
    writeFileSync(overlay, 'keep me\n');

    const before = inspectRuntimeMirrors(repo, generated);
    expect(before.drift).toHaveLength(MIRROR_ROOTS.length);
    expect(before.excluded.map((item) => item.relative)).toContain('local-dev/notes.md');

    expect(writeRuntimeMirrors(before)).toBe(MIRROR_ROOTS.length);
    const after = inspectRuntimeMirrors(repo, generated);
    expect(after.drift).toEqual([]);
    expect(readFileSync(overlay, 'utf8')).toBe('keep me\n');
  });

  it('fails closed instead of following a symlink at a managed path', () => {
    const { repo, generated } = fixture();
    const outside = join(repo, 'outside.txt');
    writeFileSync(outside, 'user data\n');
    const target = join(repo, MIRROR_ROOTS[0].relative, 'managed.txt');
    mkdirSync(join(repo, MIRROR_ROOTS[0].relative), { recursive: true });
    symlinkSync(outside, target);

    const report = inspectRuntimeMirrors(repo, generated);
    expect(report.drift).toContainEqual(expect.objectContaining({ reason: 'unsafe-target' }));
    expect(() => writeRuntimeMirrors(report)).toThrow(/unsafe mirror target/);
    expect(readFileSync(outside, 'utf8')).toBe('user data\n');
  });

  it('allows a clean checkout to omit local Codex dogfood skills while checking tracked mirrors', () => {
    const { repo, generated } = fixture();
    const report = inspectRuntimeMirrors(repo, generated, { requireLocalOnly: false });

    expect(report.omitted).toEqual([
      expect.objectContaining({ id: 'codex-skills', reason: 'local-dogfood-not-installed' }),
    ]);
    expect(report.drift.map((item) => item.id)).toEqual([
      'claude-skills',
      'claude-agents',
      'codex-agents',
    ]);
  });
});
