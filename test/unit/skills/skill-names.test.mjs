import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';

/**
 * Skill names as `npx skills` (vercel-labs/skills, the skills.sh installer)
 * sees this repository. Decided 2026-10-14 (referral round 1, TRENDS D2/D3).
 *
 * - The skills CLI keys everything on the frontmatter `name`: the skills.sh row,
 *   `--skill <name>` (exact match), the local lock and update. A colon name
 *   such as `omd:feel` installs into `omd-feel/` but only answers to
 *   `--skill omd:feel`, and skills.sh shows it as a separate row.
 * - It discovers `skills/` first, then `.agents/skills` and `.claude/skills`,
 *   and keeps every distinct name. Those two trees are this repo's own installs
 *   (`omd install-skills` output, which keeps the `omd:` name for Claude Code
 *   and Codex), so without help each skill appeared twice under two names.
 *   The CLI skips a skill in an agent directory whose directory name is a key in
 *   the repo's `skills-lock.json`; that is how the mirrors stay out.
 *
 * `omd install-skills` derives the installed name from the folder, never from
 * this field, so installed copies (and `/omd:feel` in Claude Code) are unchanged.
 */

const root = resolve(import.meta.dirname, '../../..');

function frontmatterName(path) {
  const text = readFileSync(path, 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  return fm ? /^name:\s*(.+?)\s*$/m.exec(fm[1])?.[1].replace(/^['"]|['"]$/g, '') : undefined;
}

function skillDirs(dir) {
  const abs = join(root, dir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs).filter((name) => existsSync(join(abs, name, 'SKILL.md'))).sort();
}

describe('published skill names', () => {
  it('names every source skill after its folder, in hyphen case', () => {
    const sources = skillDirs('skills');
    expect(sources.length).toBeGreaterThan(20);
    for (const folder of sources) {
      const name = frontmatterName(join(root, 'skills', folder, 'SKILL.md'));
      expect(name, `skills/${folder}/SKILL.md`).toBe(folder);
      expect(name, folder).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it('keeps every in-repo agent install out of skills CLI discovery via skills-lock.json', () => {
    const lock = JSON.parse(readFileSync(join(root, 'skills-lock.json'), 'utf8'));
    expect(lock.version).toBe(1);
    const locked = new Set(Object.keys(lock.skills));
    for (const tree of ['.claude/skills', '.agents/skills']) {
      for (const folder of skillDirs(tree)) {
        expect(locked.has(folder), `${tree}/${folder} is discoverable by npx skills`).toBe(true);
      }
    }
    // Our own entries must be the kind `npx skills update` skips ('local').
    for (const [name, entry] of Object.entries(lock.skills)) {
      if (entry.sourceType === 'local') {
        expect(existsSync(join(root, entry.source, 'SKILL.md')), name).toBe(true);
      }
    }
  });
});

describe('omd install-skills output is unaffected by the source rename', () => {
  const dir = mkdtempSync(join(tmpdir(), 'omd-skill-names-'));
  afterAll(() => rmSync(dir, { recursive: true, force: true }));

  it('still installs the namespaced name for Claude Code and the hyphen name for OpenCode', async () => {
    const { runInstallSkills } = await import('../../../src/cli/install-skills.ts');
    const renamed = ['omd-feel', 'omd-init', 'omd-taste'];
    const code = await runInstallSkills({ dir, agents: ['claude-code', 'opencode'], skillsFilter: renamed, agentsFilter: ['omd-master'] });
    expect(code).toBe(0);
    for (const skill of renamed) {
      expect(frontmatterName(join(dir, '.claude/skills', skill, 'SKILL.md')), skill).toBe(skill.replace(/^omd-/, 'omd:'));
      expect(frontmatterName(join(dir, '.opencode/skills', skill, 'SKILL.md')), skill).toBe(skill);
    }
  }, 60_000);
});
