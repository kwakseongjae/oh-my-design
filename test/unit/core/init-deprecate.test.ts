import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
  readFileSync,
  existsSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { deprecateDesignMd } from '../../../src/core/init-deprecate.js';

describe('init-deprecate', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-dep-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it('is a no-op when DESIGN.md does not exist', () => {
    const r = deprecateDesignMd({
      projectRoot: root,
      newReference: 'vercel',
      reason: 'init',
    });
    expect(r.renamed).toBe(false);
    expect(existsSync(join(root, 'DESIGN_DEPRECATED.md'))).toBe(false);
  });

  it('renames existing DESIGN.md to DESIGN_DEPRECATED.md with header', () => {
    writeFileSync(join(root, 'DESIGN.md'), '# My Old Design\n\nBody.\n', 'utf8');
    const r = deprecateDesignMd({
      projectRoot: root,
      previousReference: 'vercel',
      newReference: 'linear.app',
      preferencesReplayed: 3,
      preferencesOrphaned: 1,
      reason: 'user-initiated re-init',
    });
    expect(r.renamed).toBe(true);
    expect(existsSync(join(root, 'DESIGN.md'))).toBe(false);
    expect(existsSync(join(root, 'DESIGN_DEPRECATED.md'))).toBe(true);

    const content = readFileSync(join(root, 'DESIGN_DEPRECATED.md'), 'utf8');
    expect(content).toContain('omd:deprecated');
    expect(content).toContain('previous_reference: vercel');
    expect(content).toContain('new_reference: linear.app');
    expect(content).toContain('preferences_replayed: 3');
    expect(content).toContain('preferences_orphaned: 1');
    expect(content).toContain('reason: user-initiated re-init');
    expect(content).toContain('# My Old Design');
    expect(content).toContain('Body.');
  });

  it('appends a timestamped suffix when DESIGN_DEPRECATED.md already exists', () => {
    writeFileSync(join(root, 'DESIGN.md'), 'first\n', 'utf8');
    deprecateDesignMd({ projectRoot: root, newReference: 'vercel', reason: 'r1' });

    writeFileSync(join(root, 'DESIGN.md'), 'second\n', 'utf8');
    const r2 = deprecateDesignMd({
      projectRoot: root,
      newReference: 'linear.app',
      reason: 'r2',
      now: new Date('2026-04-24T12:00:00Z'),
    });

    expect(r2.to).toContain('DESIGN_DEPRECATED.2026-04-24T12-00-00-000Z.md');
    expect(existsSync(join(root, 'DESIGN_DEPRECATED.md'))).toBe(true);
    expect(existsSync(r2.to)).toBe(true);
    expect(readFileSync(r2.to, 'utf8')).toContain('second');
  });
});
