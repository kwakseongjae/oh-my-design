import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  appendEntry,
  buildEntry,
  inferScope,
  parseFile,
  renderFile,
  readFile,
  slugify,
  generateId,
  updateEntryStatus,
  groupByScope,
  filterByStatus,
  PREFERENCES_PATH,
  PREFERENCES_SCHEMA,
} from '../../../src/core/preferences.js';

describe('preferences', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-pref-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  describe('generateId', () => {
    it('produces a unique pref_* id', () => {
      const a = generateId();
      const b = generateId();
      expect(a).toMatch(/^pref_[a-z0-9]+_[a-f0-9]{8}$/);
      expect(a).not.toBe(b);
    });
  });

  describe('slugify', () => {
    it('lowercases and hyphenates', () => {
      expect(slugify('Our CTAs Are NEVER Uppercase')).toBe(
        'our-ctas-are-never-uppercase'
      );
    });

    it('clamps length', () => {
      expect(slugify('a'.repeat(100), 10).length).toBeLessThanOrEqual(10);
    });

    it('falls back to "entry" on empty', () => {
      expect(slugify('!!!')).toBe('entry');
    });
  });

  describe('inferScope', () => {
    it('detects button', () => {
      expect(inferScope('CTA should be sentence case')).toBe('components.button');
    });

    it('detects color', () => {
      expect(inferScope('the primary hex is too saturated')).toBe('color');
    });

    it('detects spacing', () => {
      expect(inferScope('use 8pt grid, not 4pt')).toBe('spacing');
    });

    it('detects typography', () => {
      expect(inferScope('bump letter-spacing on headings')).toBe('typography');
    });

    it('detects voice', () => {
      expect(inferScope('microcopy is too casual')).toBe('voice');
    });

    it('defaults to visualTheme on unmatched', () => {
      expect(inferScope('something-unrelated xyz')).toBe('visualTheme');
    });
  });

  describe('buildEntry', () => {
    it('includes heading with timestamp and slug', () => {
      const entry = buildEntry({
        note: 'Our CTAs are never uppercase',
        now: new Date('2026-04-22T14:31:00Z'),
      });
      expect(entry.heading).toBe(
        '2026-04-22T14:31:00.000Z — our-ctas-are-never-uppercase'
      );
      expect(entry.meta.scope).toBe('components.button');
      expect(entry.meta.status).toBe('pending');
      expect(entry.meta.confidence).toBe('explicit');
      expect(entry.meta.signal).toBe('user-statement');
    });

    it('accepts explicit scope override', () => {
      const entry = buildEntry({
        note: 'some note',
        scope: 'voice',
      });
      expect(entry.meta.scope).toBe('voice');
    });
  });

  describe('renderFile + parseFile roundtrip', () => {
    it('preserves frontmatter and entries', () => {
      const original = {
        schema: PREFERENCES_SCHEMA,
        design_md_hash_at_creation: 'abc123def456',
        entries: [
          buildEntry({
            note: 'CTAs never uppercase',
            now: new Date('2026-04-22T14:31:00Z'),
          }),
          buildEntry({
            note: 'use 8pt grid, not 4pt',
            now: new Date('2026-04-23T09:10:00Z'),
          }),
        ],
      };

      const text = renderFile(original);
      expect(text).toContain('schema: omd.preferences/v1');
      expect(text).toContain('design_md_hash_at_creation: abc123def456');
      expect(text).toContain('# Preference Log');
      expect(text).toContain('```omd-meta');

      const parsed = parseFile(text);
      expect(parsed.schema).toBe(original.schema);
      expect(parsed.design_md_hash_at_creation).toBe(
        original.design_md_hash_at_creation
      );
      expect(parsed.entries).toHaveLength(2);
      expect(parsed.entries[0].meta.scope).toBe('components.button');
      expect(parsed.entries[1].meta.scope).toBe('spacing');
      expect(parsed.entries[0].meta.status).toBe('pending');
    });

    it('escapes source_context with JSON quoting', () => {
      const entry = buildEntry({
        note: 'tweak button',
        source_context: 'src/Button.tsx: "line 42"',
      });
      const text = renderFile({
        schema: PREFERENCES_SCHEMA,
        design_md_hash_at_creation: 'x',
        entries: [entry],
      });
      const parsed = parseFile(text);
      expect(parsed.entries[0].meta.source_context).toBe(
        'src/Button.tsx: "line 42"'
      );
    });
  });

  describe('appendEntry', () => {
    it('creates preferences.md on first append', () => {
      const entry = appendEntry(
        root,
        { note: 'CTAs never uppercase' },
        'initial-hash-xx'
      );
      const path = join(root, PREFERENCES_PATH);
      expect(existsSync(path)).toBe(true);
      const content = readFileSync(path, 'utf8');
      expect(content).toContain('design_md_hash_at_creation: initial-hash-xx');
      expect(content).toContain(entry.meta.id);
      expect(content).toContain('components.button');
    });

    it('appends to existing file preserving prior entries and header', () => {
      appendEntry(root, { note: 'first note about color' }, 'hash-1');
      appendEntry(root, { note: 'second note about spacing' }, 'hash-irrelevant');

      const file = readFile(root)!;
      expect(file.design_md_hash_at_creation).toBe('hash-1');
      expect(file.entries).toHaveLength(2);
      expect(file.entries[0].meta.scope).toBe('color');
      expect(file.entries[1].meta.scope).toBe('spacing');
    });

    it('returns the entry that was appended', () => {
      const entry = appendEntry(root, { note: 'use 8pt grid' });
      expect(entry.meta.scope).toBe('spacing');
      expect(entry.meta.id).toMatch(/^pref_/);
    });
  });

  describe('readFile', () => {
    it('returns null when file does not exist', () => {
      expect(readFile(root)).toBeNull();
    });
  });

  describe('updateEntryStatus', () => {
    it('flips status to applied with timestamp and optional hash', () => {
      const entry = appendEntry(root, { note: 'CTAs never uppercase' });
      const updated = updateEntryStatus(root, {
        id: entry.meta.id,
        status: 'applied',
        applied_design_md_hash: 'newhash00000',
      });
      expect(updated.meta.status).toBe('applied');
      expect(updated.meta.applied_at).toMatch(/T/);
      expect(updated.meta.applied_design_md_hash).toBe('newhash00000');

      const reread = readFile(root)!;
      expect(reread.entries[0].meta.status).toBe('applied');
      expect(reread.entries[0].meta.applied_design_md_hash).toBe(
        'newhash00000'
      );
    });

    it('stores rejection reason', () => {
      const entry = appendEntry(root, { note: 'tweak spacing' });
      updateEntryStatus(root, {
        id: entry.meta.id,
        status: 'rejected',
        rejected_reason: 'conflicts with base scale',
      });
      const reread = readFile(root)!;
      expect(reread.entries[0].meta.status).toBe('rejected');
      expect(reread.entries[0].meta.rejected_reason).toBe(
        'conflicts with base scale'
      );
    });

    it('throws on unknown id', () => {
      appendEntry(root, { note: 'a color note' });
      expect(() =>
        updateEntryStatus(root, { id: 'pref_missing', status: 'applied' })
      ).toThrow(/not found/);
    });
  });

  describe('groupByScope + filterByStatus', () => {
    it('groups entries correctly', () => {
      const e1 = appendEntry(root, { note: 'CTAs never uppercase' });
      const e2 = appendEntry(root, { note: 'primary hex too saturated' });
      const e3 = appendEntry(root, { note: 'also about buttons' });
      const file = readFile(root)!;
      const grouped = groupByScope(file.entries);
      expect(grouped.get('components.button')).toHaveLength(2);
      expect(grouped.get('color')).toHaveLength(1);
      expect(grouped.get('components.button')!.map((e) => e.meta.id)).toEqual([
        e1.meta.id,
        e3.meta.id,
      ]);
      expect(grouped.get('color')![0].meta.id).toBe(e2.meta.id);
    });

    it('filters by status', () => {
      const e1 = appendEntry(root, { note: 'a' });
      appendEntry(root, { note: 'b' });
      updateEntryStatus(root, { id: e1.meta.id, status: 'applied' });
      const file = readFile(root)!;
      expect(filterByStatus(file.entries, 'pending')).toHaveLength(1);
      expect(filterByStatus(file.entries, 'applied')).toHaveLength(1);
    });
  });
});
