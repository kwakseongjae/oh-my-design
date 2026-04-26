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
import { runInstallSkills } from '../../../src/cli/install-skills.js';

describe('install-skills', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-installskills-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it('installs all 5 skills × 3 agents when no agents detected (fallback)', async () => {
    const code = await runInstallSkills({ dir: root });
    expect(code).toBe(0);

    for (const skill of ['omd-init', 'omd-apply', 'omd-sync', 'omd-remember', 'omd-learn']) {
      expect(
        existsSync(join(root, '.claude/skills', skill, 'SKILL.md')),
        `claude/${skill}`
      ).toBe(true);
      expect(
        existsSync(join(root, '.codex/skills', skill, 'SKILL.md')),
        `codex/${skill}`
      ).toBe(true);
      expect(
        existsSync(join(root, '.opencode/agents', skill + '.md')),
        `opencode/${skill}`
      ).toBe(true);
    }
  });

  it('installed files start with the omd marker header', async () => {
    await runInstallSkills({ dir: root });
    const path = join(root, '.claude/skills/omd-init/SKILL.md');
    const content = readFileSync(path, 'utf8');
    expect(content.startsWith('<!-- omd:installed-skill')).toBe(true);
  });

  it('respects --agents filter', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    expect(existsSync(join(root, '.claude/skills'))).toBe(true);
    expect(existsSync(join(root, '.codex/skills'))).toBe(false);
    expect(existsSync(join(root, '.opencode/agents'))).toBe(false);
  });

  it('is idempotent — second run reports unchanged', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const path = join(root, '.claude/skills/omd-init/SKILL.md');
    const beforeMtime = (await import('node:fs')).statSync(path).mtimeMs;
    await new Promise((r) => setTimeout(r, 5));
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const afterMtime = (await import('node:fs')).statSync(path).mtimeMs;
    expect(afterMtime).toBe(beforeMtime);
  });

  it('skips drift on existing user-edited files without marker', async () => {
    const target = join(root, '.claude/skills/omd-init/SKILL.md');
    mkdirSync(join(root, '.claude/skills/omd-init'), { recursive: true });
    writeFileSync(target, '# user wrote this manually\n', 'utf8');

    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const after = readFileSync(target, 'utf8');
    expect(after).toBe('# user wrote this manually\n');
  });

  it('overwrites drift when --force', async () => {
    const target = join(root, '.claude/skills/omd-init/SKILL.md');
    mkdirSync(join(root, '.claude/skills/omd-init'), { recursive: true });
    writeFileSync(target, '# user wrote this\n', 'utf8');

    await runInstallSkills({ dir: root, agents: ['claude-code'], force: true });
    const after = readFileSync(target, 'utf8');
    expect(after.startsWith('<!-- omd:installed-skill')).toBe(true);
  });

  it('detects installed agents and installs only for those (when present)', async () => {
    mkdirSync(join(root, '.claude'));
    // Codex/OpenCode not installed → only Claude should get skills
    await runInstallSkills({ dir: root });
    expect(existsSync(join(root, '.claude/skills/omd-init/SKILL.md'))).toBe(true);
    expect(existsSync(join(root, '.codex/skills'))).toBe(false);
    expect(existsSync(join(root, '.opencode/agents'))).toBe(false);
  });
});
