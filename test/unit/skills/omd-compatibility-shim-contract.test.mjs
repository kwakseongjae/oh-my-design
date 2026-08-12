import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '../../..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

const claudeShim = read('.claude/skills/omd/SKILL.md');
const codexShimPath = resolve(root, '.agents/skills/omd/SKILL.md');

describe('legacy omd compatibility shim', () => {
  it('keeps the local Codex destination overlay aligned when it is installed', () => {
    if (!existsSync(codexShimPath)) return;
    expect(readFileSync(codexShimPath, 'utf8')).toBe(claudeShim);
  });

  it('routes once to the canonical workflow and owns no writer behavior', () => {
    for (const route of ['`omd:apply`', '`omd:autopilot`', '`omd:init`']) {
      expect(claudeShim).toContain(route);
    }
    expect(claudeShim).toContain('`ROUTER_ONLY_NO_DESIGN_MD_WRITES`');
    expect(claudeShim).toContain('may inspect and route only');
    expect(claudeShim).toContain('must not run a writer or migration command itself');
    expect(claudeShim).not.toContain('npx omd init');
    expect(claudeShim).not.toContain('67 real-company');
  });

  it('models adopted, standalone, migration, and legacy authority without old section parsing', () => {
    for (const authorityTerm of [
      '`profile: portable-core`',
      '`authority.canonical: system-graph`',
      'exact bidirectional hashes',
      '`profile: migration-candidate` is non-authoritative',
      'use root\n   `DESIGN.md` independently',
      'read-only compatibility\n   input',
      'omit unknown values at the\n   smallest boundary',
    ]) {
      expect(claudeShim).toContain(authorityTerm);
    }

    expect(claudeShim).not.toMatch(/omd:\s*0\.1/u);
    expect(claudeShim).not.toMatch(/\u00a7\d/u);
    expect(claudeShim).not.toContain('Visual Theme & Atmosphere');
    expect(claudeShim).not.toContain('The 15 possible sections');
    expect(claudeShim).not.toMatch(/frontmatter present with/iu);
  });
});
