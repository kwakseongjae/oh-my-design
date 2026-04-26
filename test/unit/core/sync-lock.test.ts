import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  readLock,
  writeLock,
  createLock,
  updateTarget,
  updateDesignMdHash,
  SYNC_LOCK_PATH,
  SYNC_LOCK_VERSION,
} from '../../../src/core/sync-lock.js';

describe('sync-lock', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-lock-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  describe('readLock', () => {
    it('returns null when no lock file exists', () => {
      expect(readLock(root)).toBeNull();
    });

    it('throws on malformed JSON', () => {
      mkdirSync(join(root, '.omd'), { recursive: true });
      writeFileSync(join(root, SYNC_LOCK_PATH), '{ not json');
      expect(() => readLock(root)).toThrow();
    });

    it('throws when schema does not match', () => {
      mkdirSync(join(root, '.omd'), { recursive: true });
      writeFileSync(join(root, SYNC_LOCK_PATH), JSON.stringify({ version: 'x' }));
      expect(() => readLock(root)).toThrow();
    });
  });

  describe('writeLock', () => {
    it('creates .omd/ if missing and writes valid JSON', () => {
      const lock = createLock('abc123456789');
      writeLock(root, lock);
      expect(existsSync(join(root, SYNC_LOCK_PATH))).toBe(true);
      const raw = readFileSync(join(root, SYNC_LOCK_PATH), 'utf8');
      const parsed = JSON.parse(raw);
      expect(parsed.version).toBe(SYNC_LOCK_VERSION);
      expect(parsed.design_md_hash).toBe('abc123456789');
    });

    it('rejects invalid lock objects', () => {
      // @ts-expect-error intentional invalid
      expect(() => writeLock(root, { version: -1 })).toThrow();
    });
  });

  describe('updateTarget', () => {
    it('adds a new target without a prior lock', () => {
      const lock = updateTarget(root, 'CLAUDE.md', 'hash123');
      expect(lock.targets['CLAUDE.md'].managed_hash).toBe('hash123');
      expect(lock.targets['CLAUDE.md'].last_synced).toMatch(/T/);
    });

    it('preserves other targets when updating one', () => {
      updateTarget(root, 'CLAUDE.md', 'h1');
      const lock = updateTarget(root, 'AGENTS.md', 'h2');
      expect(lock.targets['CLAUDE.md'].managed_hash).toBe('h1');
      expect(lock.targets['AGENTS.md'].managed_hash).toBe('h2');
    });

    it('overwrites an existing target hash and refreshes timestamp', async () => {
      const first = updateTarget(root, 'CLAUDE.md', 'old');
      await new Promise((r) => setTimeout(r, 5));
      const second = updateTarget(root, 'CLAUDE.md', 'new');
      expect(second.targets['CLAUDE.md'].managed_hash).toBe('new');
      expect(second.targets['CLAUDE.md'].last_synced).not.toBe(
        first.targets['CLAUDE.md'].last_synced
      );
    });
  });

  describe('updateDesignMdHash', () => {
    it('sets hash on first call', () => {
      const lock = updateDesignMdHash(root, 'deadbeef0000');
      expect(lock.design_md_hash).toBe('deadbeef0000');
    });

    it('preserves targets when only hash changes', () => {
      updateTarget(root, 'CLAUDE.md', 'h1');
      const lock = updateDesignMdHash(root, 'newhash00000');
      expect(lock.design_md_hash).toBe('newhash00000');
      expect(lock.targets['CLAUDE.md'].managed_hash).toBe('h1');
    });
  });
});
