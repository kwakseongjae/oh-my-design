import { describe, it, expect } from 'vitest';
import {
  parseBlock,
  writeBlock,
  hashContent,
  hasDrift,
} from '../../../src/core/sync-marker.js';

describe('sync-marker', () => {
  describe('hashContent', () => {
    it('returns a 12-char hex digest', () => {
      const h = hashContent('hello');
      expect(h).toMatch(/^[a-f0-9]{12}$/);
    });

    it('is deterministic', () => {
      expect(hashContent('x')).toBe(hashContent('x'));
    });

    it('differs for different inputs', () => {
      expect(hashContent('a')).not.toBe(hashContent('b'));
    });
  });

  describe('writeBlock', () => {
    it('appends a block to an empty file', () => {
      const { updated, hash } = writeBlock('', 'hello', 1);
      expect(updated).toBe(
        `<!-- omd:start v=1 hash=${hash} -->\nhello\n<!-- omd:end -->\n`
      );
    });

    it('appends to existing content preserving prior content', () => {
      const prior = '# Project README\n\nSome notes.\n';
      const { updated } = writeBlock(prior, 'managed body', 1);
      expect(updated.startsWith(prior)).toBe(true);
      expect(updated).toContain('<!-- omd:start v=1 hash=');
      expect(updated).toContain('managed body');
      expect(updated).toContain('<!-- omd:end -->');
    });

    it('replaces an existing block in-place', () => {
      const first = writeBlock('# Title\n', 'one', 1).updated;
      const second = writeBlock(first, 'two', 1).updated;
      expect(second).toContain('two');
      expect(second).not.toContain('one');
      expect(second.startsWith('# Title\n')).toBe(true);
    });

    it('preserves content after the block on in-place replace', () => {
      const base =
        '# Top\n\n<!-- omd:start v=1 hash=abc123456789 -->\nold\n<!-- omd:end -->\n\n# After\n';
      const { updated } = writeBlock(base, 'new', 1);
      expect(updated).toContain('# Top');
      expect(updated).toContain('new');
      expect(updated).not.toContain('old');
      expect(updated).toContain('# After');
    });

    it('separates appended block from prior content', () => {
      const { updated } = writeBlock('no trailing newline', 'body', 1);
      expect(updated).toContain('no trailing newline\n\n<!-- omd:start');
    });
  });

  describe('parseBlock', () => {
    it('returns null when no block is present', () => {
      expect(parseBlock('# Nothing here')).toBeNull();
    });

    it('extracts version, hash, and content', () => {
      const { updated, hash } = writeBlock('', 'payload', 1);
      const block = parseBlock(updated);
      expect(block).not.toBeNull();
      expect(block!.version).toBe(1);
      expect(block!.hash).toBe(hash);
      expect(block!.content).toBe('payload');
    });

    it('parses only the first block when multiple exist', () => {
      const hash1 = hashContent('one');
      const hash2 = hashContent('two');
      const src = `<!-- omd:start v=1 hash=${hash1} -->\none\n<!-- omd:end -->\n<!-- omd:start v=1 hash=${hash2} -->\ntwo\n<!-- omd:end -->`;
      const block = parseBlock(src);
      expect(block!.content).toBe('one');
    });
  });

  describe('hasDrift', () => {
    it('is false when content matches stored hash', () => {
      const { updated } = writeBlock('', 'stable', 1);
      const block = parseBlock(updated)!;
      expect(hasDrift(block)).toBe(false);
    });

    it('is true when user hand-edits content inside the block', () => {
      const { updated, hash } = writeBlock('', 'original', 1);
      const tampered = updated.replace('original', 'hand-edited');
      const block = parseBlock(tampered)!;
      expect(block.hash).toBe(hash);
      expect(hasDrift(block)).toBe(true);
    });
  });
});
