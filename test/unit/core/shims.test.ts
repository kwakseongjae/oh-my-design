import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  mkdtempSync,
  rmSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  writeShim,
  writeAllShims,
  inspectShim,
  inspectAllShims,
  CLAUDE_SHIM,
  AGENTS_SHIM,
  CURSOR_SHIM,
  ALL_SHIMS,
} from '../../../src/core/shims.js';
import { parseBlock, hashContent } from '../../../src/core/sync-marker.js';
import { readLock, SYNC_LOCK_PATH } from '../../../src/core/sync-lock.js';

describe('shims', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-shims-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  describe('CLAUDE_SHIM (block mode)', () => {
    it('creates a new CLAUDE.md with a managed block', () => {
      const result = writeShim(root, CLAUDE_SHIM);
      expect(result.status).toBe('created');
      const content = readFileSync(join(root, 'CLAUDE.md'), 'utf8');
      const block = parseBlock(content);
      expect(block).not.toBeNull();
      expect(block!.content).toContain('@./DESIGN.md');
      expect(block!.content).toContain('@./.omd/preferences.md');
    });

    it('preserves prior user content above the block', () => {
      const prior = '# Project notes\n\nDo not touch this.\n';
      writeFileSync(join(root, 'CLAUDE.md'), prior, 'utf8');
      writeShim(root, CLAUDE_SHIM);
      const content = readFileSync(join(root, 'CLAUDE.md'), 'utf8');
      expect(content.startsWith(prior)).toBe(true);
      expect(content).toContain('<!-- omd:start');
    });

    it('is idempotent — same content produces unchanged status', () => {
      writeShim(root, CLAUDE_SHIM);
      const second = writeShim(root, CLAUDE_SHIM);
      expect(second.status).toBe('unchanged');
    });

    it('throws on drift when user edits inside the managed block', () => {
      writeShim(root, CLAUDE_SHIM);
      const path = join(root, 'CLAUDE.md');
      const tampered = readFileSync(path, 'utf8').replace(
        'DESIGN.md',
        'DIFFERENT.md'
      );
      writeFileSync(path, tampered, 'utf8');
      expect(() => writeShim(root, CLAUDE_SHIM)).toThrow(/hand-edited/);
    });

    it('overwrites drift when onDrift=overwrite', () => {
      writeShim(root, CLAUDE_SHIM);
      const path = join(root, 'CLAUDE.md');
      writeFileSync(
        path,
        readFileSync(path, 'utf8').replace('DESIGN.md', 'X.md'),
        'utf8'
      );
      const result = writeShim(root, CLAUDE_SHIM, { onDrift: 'overwrite' });
      expect(result.status).toBe('updated');
      const block = parseBlock(readFileSync(path, 'utf8'))!;
      expect(block.content).toContain('DESIGN.md');
      expect(block.content).not.toContain('X.md');
    });

    it('skips drift when onDrift=skip', () => {
      writeShim(root, CLAUDE_SHIM);
      const path = join(root, 'CLAUDE.md');
      writeFileSync(
        path,
        readFileSync(path, 'utf8').replace('DESIGN.md', 'X.md'),
        'utf8'
      );
      const result = writeShim(root, CLAUDE_SHIM, { onDrift: 'skip' });
      expect(result.status).toBe('skipped-drift');
    });
  });

  describe('AGENTS_SHIM (block mode)', () => {
    it('creates AGENTS.md covering Codex + OpenCode', () => {
      writeShim(root, AGENTS_SHIM);
      const block = parseBlock(
        readFileSync(join(root, 'AGENTS.md'), 'utf8')
      )!;
      expect(block.content).toContain('./DESIGN.md');
      expect(block.content).toContain('./.omd/preferences.md');
    });
  });

  describe('CURSOR_SHIM (whole-file mode)', () => {
    it('creates .cursor/rules/omd-design.mdc with frontmatter', () => {
      const result = writeShim(root, CURSOR_SHIM);
      expect(result.status).toBe('created');
      const path = join(root, '.cursor/rules/omd-design.mdc');
      expect(existsSync(path)).toBe(true);
      const content = readFileSync(path, 'utf8');
      expect(content.startsWith('---\n')).toBe(true);
      expect(content).toContain('globs:');
      expect(content).toContain('**/*.tsx');
      expect(content).toContain('alwaysApply: false');
      expect(content).toContain('<!-- omd:start');
    });

    it('is idempotent', () => {
      writeShim(root, CURSOR_SHIM);
      const second = writeShim(root, CURSOR_SHIM);
      expect(second.status).toBe('unchanged');
    });

    it('throws on any edit in the file', () => {
      writeShim(root, CURSOR_SHIM);
      const path = join(root, '.cursor/rules/omd-design.mdc');
      writeFileSync(
        path,
        readFileSync(path, 'utf8').replace('**/*.tsx', '**/*.wat'),
        'utf8'
      );
      expect(() => writeShim(root, CURSOR_SHIM)).toThrow(/drift detected/);
    });
  });

  describe('writeAllShims', () => {
    it('writes three shims and records all in sync.lock.json', () => {
      const results = writeAllShims(root);
      expect(results).toHaveLength(3);
      expect(results.map((r) => r.id).sort()).toEqual([
        'agents',
        'claude',
        'cursor',
      ]);
      expect(existsSync(join(root, SYNC_LOCK_PATH))).toBe(true);
      const lock = readLock(root)!;
      expect(lock.targets['CLAUDE.md']).toBeDefined();
      expect(lock.targets['AGENTS.md']).toBeDefined();
      expect(lock.targets['.cursor/rules/omd-design.mdc']).toBeDefined();
    });

    it('each target hash equals hashContent of the managed content', () => {
      writeAllShims(root);
      const lock = readLock(root)!;
      // CLAUDE.md / AGENTS.md are block-mode: hash = hash of block content (render output)
      expect(lock.targets['CLAUDE.md'].managed_hash).toBe(
        hashContent(CLAUDE_SHIM.render())
      );
      expect(lock.targets['AGENTS.md'].managed_hash).toBe(
        hashContent(AGENTS_SHIM.render())
      );
      // cursor is whole-file: hash = hash of entire file content
      expect(lock.targets['.cursor/rules/omd-design.mdc'].managed_hash).toBe(
        hashContent(CURSOR_SHIM.render())
      );
    });

    it('is idempotent across calls', () => {
      writeAllShims(root);
      const second = writeAllShims(root);
      expect(second.every((r) => r.status === 'unchanged')).toBe(true);
    });
  });

  describe('ALL_SHIMS registry', () => {
    it('contains exactly three shims', () => {
      expect(ALL_SHIMS).toHaveLength(3);
    });
  });

  describe('inspectShim', () => {
    it('reports missing when file does not exist (block mode)', () => {
      const r = inspectShim(root, CLAUDE_SHIM);
      expect(r.status).toBe('missing');
    });

    it('reports missing when file exists but no managed block (block mode)', () => {
      writeFileSync(join(root, 'CLAUDE.md'), '# just notes\n', 'utf8');
      expect(inspectShim(root, CLAUDE_SHIM).status).toBe('missing');
    });

    it('reports clean after a fresh write', () => {
      writeShim(root, CLAUDE_SHIM);
      expect(inspectShim(root, CLAUDE_SHIM).status).toBe('clean');
    });

    it('reports drifted when user hand-edited managed block content', () => {
      writeShim(root, CLAUDE_SHIM);
      const path = join(root, 'CLAUDE.md');
      writeFileSync(
        path,
        readFileSync(path, 'utf8').replace('DESIGN.md', 'X.md'),
        'utf8'
      );
      expect(inspectShim(root, CLAUDE_SHIM).status).toBe('drifted');
    });

    it('reports missing for whole-mode when file absent', () => {
      expect(inspectShim(root, CURSOR_SHIM).status).toBe('missing');
    });

    it('reports drifted for whole-mode when any byte differs', () => {
      writeShim(root, CURSOR_SHIM);
      const path = join(root, '.cursor/rules/omd-design.mdc');
      writeFileSync(
        path,
        readFileSync(path, 'utf8').replace('**/*.tsx', '**/*.wat'),
        'utf8'
      );
      expect(inspectShim(root, CURSOR_SHIM).status).toBe('drifted');
    });
  });

  describe('inspectAllShims', () => {
    it('returns one result per shim', () => {
      const results = inspectAllShims(root);
      expect(results).toHaveLength(3);
      expect(results.every((r) => r.status === 'missing')).toBe(true);
    });
  });
});
