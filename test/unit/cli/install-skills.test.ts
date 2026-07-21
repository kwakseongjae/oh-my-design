import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  mkdtempSync,
  rmSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { stripManagedHookMarker } from '../../../src/cli/hook-contract.js';
import {
  runInstallSkills,
  dataDirFor,
  targetsAvailableForScope,
} from '../../../src/cli/install-skills.js';

describe('install-skills', () => {
  let root: string;

  function filesUnder(dir: string): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const path = join(dir, entry.name);
      return entry.isDirectory() ? filesUnder(path) : [path];
    });
  }

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-installskills-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it('never offers project-only Cursor in the global scope picker', () => {
    const channels = ['claude-code', 'codex', 'opencode', 'cursor'] as const;
    expect(targetsAvailableForScope([...channels], 'global')).toEqual([
      'claude-code',
      'codex',
      'opencode',
    ]);
    expect(targetsAvailableForScope([...channels], 'project')).toEqual(channels);
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
        existsSync(join(root, '.agents/skills', skill, 'SKILL.md')),
        `codex/${skill}`
      ).toBe(true);
      expect(
        existsSync(join(root, '.opencode/skills', skill, 'SKILL.md')),
        `opencode/${skill}`
      ).toBe(true);
    }
  });

  it('installed files start with frontmatter, not the marker (issue #17)', async () => {
    await runInstallSkills({ dir: root });
    const path = join(root, '.claude/skills/omd-init/SKILL.md');
    const content = readFileSync(path, 'utf8');

    // Line 1 must be the YAML frontmatter fence so Claude Code reads the
    // skill's own name/description — NOT the HTML managed marker.
    expect(content.startsWith('---\n')).toBe(true);

    // Frontmatter name/description belong to the skill itself.
    const fm = /^---\n([\s\S]*?)\n---/.exec(content)![1];
    expect(/^name:\s*omd:init\b/m.test(fm)).toBe(true);
    const desc = /^description:\s*(.+)$/m.exec(fm)![1];
    expect(desc).not.toContain('omd:installed-skill');

    // The marker still ships — just after the frontmatter block.
    const afterFm = content.slice(content.indexOf('\n---\n') + 5);
    expect(afterFm.startsWith('<!-- omd:installed-skill')).toBe(true);
  });

  it('installs omd-taste with frontmatter-first format (issue #25)', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const path = join(root, '.claude/skills/omd-taste/SKILL.md');
    expect(existsSync(path), 'omd-taste installed').toBe(true);
    const content = readFileSync(path, 'utf8');

    // Line 1 must be the YAML frontmatter fence (issue #17 contract applies to
    // every shipped skill — omd-taste included).
    expect(content.startsWith('---\n')).toBe(true);
    const fm = /^---\n([\s\S]*?)\n---/.exec(content)![1];
    expect(/^name:\s*omd:taste\b/m.test(fm)).toBe(true);
    const desc = /^description:\s*(.+)$/m.exec(fm)![1];
    expect(desc).not.toContain('omd:installed-skill');
    expect(desc).toContain('내 취향');

    // The managed marker ships right after the frontmatter block.
    const afterFm = content.slice(content.indexOf('\n---\n') + 5);
    expect(afterFm.startsWith('<!-- omd:installed-skill')).toBe(true);
  });

  it('refreshes legacy line-1-marker files instead of skipping them as drift', async () => {
    // Simulate a pre-v1.7.2 install: marker on line 1, frontmatter pushed down.
    const target = join(root, '.claude/skills/omd-init/SKILL.md');
    mkdirSync(join(root, '.claude/skills/omd-init'), { recursive: true });
    const legacy =
      '<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->\n\n' +
      '---\nname: omd:init\ndescription: stale\n---\n\n# old body\n';
    writeFileSync(target, legacy, 'utf8');

    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const after = readFileSync(target, 'utf8');

    // Detected as managed → refreshed to the new (frontmatter-first) format.
    expect(after).not.toBe(legacy);
    expect(after.startsWith('---\n')).toBe(true);
  });

  it('respects --agents filter', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    expect(existsSync(join(root, '.claude/skills'))).toBe(true);
    expect(existsSync(join(root, '.agents/skills'))).toBe(false);
    expect(existsSync(join(root, '.opencode/skills'))).toBe(false);
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

  it('keeps multi-file skills unchanged when their shipped tree already matches', async () => {
    await runInstallSkills({
      dir: root,
      agents: ['codex'],
      skillsFilter: ['omd-feel'],
      agentsFilter: [],
      skillsOnly: true,
    });
    const skill = join(root, '.agents/skills/omd-feel/SKILL.md');
    const sidecar = join(root, '.agents/skills/omd-feel/reference.md');
    const before = await import('node:fs').then(({ statSync }) => ({
      skill: statSync(skill).mtimeMs,
      sidecar: statSync(sidecar).mtimeMs,
    }));

    await new Promise((resolve) => setTimeout(resolve, 5));
    await runInstallSkills({
      dir: root,
      agents: ['codex'],
      skillsFilter: ['omd-feel'],
      agentsFilter: [],
      skillsOnly: true,
    });

    const after = await import('node:fs').then(({ statSync }) => ({
      skill: statSync(skill).mtimeMs,
      sidecar: statSync(sidecar).mtimeMs,
    }));
    expect(after).toEqual(before);
  });

  it('installs the humanize and slop-audit skill trees with channel-native names', async () => {
    const skillIds = ['omd-humanize', 'omd-slop-audit'];
    const code = await runInstallSkills({
      dir: root,
      agents: ['claude-code', 'codex', 'opencode'],
      skillsFilter: skillIds,
      agentsFilter: [],
      skillsOnly: true,
    });

    expect(code).toBe(0);
    const channels = [
      { root: join(root, '.claude', 'skills'), namespaced: true },
      { root: join(root, '.agents', 'skills'), namespaced: true },
      { root: join(root, '.opencode', 'skills'), namespaced: false },
    ];

    for (const channel of channels) {
      for (const skillId of skillIds) {
        const skillRoot = join(channel.root, skillId);
        const skill = readFileSync(join(skillRoot, 'SKILL.md'), 'utf8');
        const expectedName = channel.namespaced
          ? skillId.replace(/^omd-/, 'omd:')
          : skillId;

        expect(skill).toMatch(new RegExp(`^name: ${expectedName}$`, 'm'));
        expect(existsSync(join(skillRoot, 'agents', 'openai.yaml'))).toBe(true);
        expect(existsSync(join(skillRoot, 'references', 'sources.md'))).toBe(true);
      }

      expect(
        existsSync(join(channel.root, 'omd-humanize', 'references', 'locale-playbooks.md')),
      ).toBe(true);
      expect(
        existsSync(join(channel.root, 'omd-slop-audit', 'references', 'pattern-catalog.md')),
      ).toBe(true);
    }
  });

  it('copies the self-contained reference collector into every skill channel', async () => {
    const code = await runInstallSkills({
      dir: root,
      agents: ['claude-code', 'codex', 'opencode'],
      skillsFilter: ['omd-reference-capture'],
      agentsFilter: [],
      skillsOnly: true,
    });

    expect(code).toBe(0);
    const channelRoots = [
      join(root, '.claude', 'skills'),
      join(root, '.agents', 'skills'),
      join(root, '.opencode', 'skills'),
    ];
    for (const channelRoot of channelRoots) {
      const skillRoot = join(channelRoot, 'omd-reference-capture');
      const skill = readFileSync(join(skillRoot, 'SKILL.md'), 'utf8');
      const collectorPath = join(skillRoot, 'scripts', 'capture-reference-evidence.mjs');
      expect(existsSync(collectorPath), collectorPath).toBe(true);
      expect(existsSync(join(skillRoot, 'scripts', 'PLAYWRIGHT-LICENSE.txt'))).toBe(true);
      expect(existsSync(join(skillRoot, 'scripts', 'PLAYWRIGHT-NOTICE.txt'))).toBe(true);
      expect(existsSync(join(skillRoot, 'scripts', 'THIRD_PARTY_NOTICES.md'))).toBe(true);
      expect(skill).not.toContain('npm root');
      expect(skill).not.toContain('--experimental-strip-types');

      const collector = readFileSync(collectorPath, 'utf8');
      expect(collector.startsWith('#!/usr/bin/env node\n')).toBe(true);
      expect(collector).not.toMatch(/(?:from|import\()\s*["'][^"']+\.ts["']/);
      expect(collector).not.toMatch(/from\s*["']playwright-core["']/);

      // Module initialization loads the bundled Playwright implementation. A
      // missing target must therefore reach the collector's own usage error,
      // not fail on a missing package or TypeScript syntax/runtime loader.
      const usage = spawnSync(process.execPath, [collectorPath], { encoding: 'utf8' });
      expect(usage.status).toBe(1);
      expect(usage.stderr).toContain('Usage: capture-reference-evidence');
      expect(usage.stderr).not.toMatch(/ERR_MODULE_NOT_FOUND|Unknown file extension|SyntaxError/);
    }
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
    expect(after.startsWith('---\n')).toBe(true);
    expect(after).toContain('<!-- omd:installed-skill');
  });

  it('copies the reference catalog DESIGN.md into .claude/data/references (issue #16)', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    // toss is a known reference id in web/references — its DESIGN.md must land
    // where omd:init resolution step 1 looks.
    const tossDesign = join(root, '.claude/data/references/toss/DESIGN.md');
    expect(existsSync(tossDesign), 'toss DESIGN.md copied').toBe(true);
    // Only DESIGN.md per id — keep install lean (no _promo.json/_research.md).
    expect(existsSync(join(root, '.claude/data/references/toss/_promo.json'))).toBe(false);
    // ctx-prime helper copied so harness CTX-PRIME works without the package dir.
    expect(existsSync(join(root, '.claude/data/scripts/ctx-prime.cjs'))).toBe(true);
  });

  it('installs self-contained Codex roles with only the native project skill path', async () => {
    const roleIds = ['omd-final-qa', 'omd-orchestrator', 'omd-master'];
    await runInstallSkills({
      dir: root,
      agents: ['codex'],
      skillsFilter: ['omd-init', 'omd-apply', 'omd-final-qa', 'omd-orchestrator'],
      agentsFilter: roleIds,
    });

    const init = readFileSync(join(root, '.agents/skills/omd-init/SKILL.md'), 'utf8');
    expect(init).toContain('.codex/data/reference-fingerprints.json');
    expect(existsSync(join(root, '.codex/data/references/toss/DESIGN.md'))).toBe(true);

    const master = readFileSync(join(root, '.codex/agents/omd-master.toml'), 'utf8');
    expect(master).toMatch(/^name = "omd-master"$/m);
    expect(master).toMatch(/^description = ".+"$/m);
    expect(master).toMatch(/^developer_instructions = '''$/m);
    expect(master).not.toMatch(/^\[agent\]$/m);
    expect(master).not.toMatch(/^instructions\s*=/m);
    expect(master).not.toMatch(/^max_threads\s*=/m);
    expect(master).not.toMatch(/^allowed_tools\s*=/m);
    expect(master).toContain('# omd-master — Conversational Design Partner');
    expect(master).not.toMatch(/^model\s*=/m);
    expect(master).not.toContain('omd init prepare');
    expect(master).not.toMatch(/\bomd remember\b/);
    expect(master).toContain('The OmD CLI exposes installation and diagnostics only');
    expect(existsSync(join(root, '.claude', 'skills'))).toBe(false);

    for (const roleId of roleIds) {
      const role = readFileSync(join(root, '.codex', 'agents', `${roleId}.toml`), 'utf8');
      expect(role, roleId).toContain('.agents/skills/<skill>/SKILL.md');
      expect(role, roleId).not.toContain('.claude/skills');
      expect(role, roleId).not.toContain('Claude Code subagent');
      expect(role, roleId).not.toContain('Agent tool');
      expect(role, roleId).not.toContain('AskUserQuestion');
      expect(role, roleId).not.toMatch(/\b(?:data\/research|research\/harness-design)\//);
    }
  });

  it('renders every Claude role with YAML-safe JSON scalars', async () => {
    await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      skillsFilter: ['omd-init'],
    });

    const agentRoot = join(root, '.claude', 'agents');
    for (const filename of (await import('node:fs')).readdirSync(agentRoot)) {
      if (!filename.endsWith('.md')) continue;
      const content = readFileSync(join(agentRoot, filename), 'utf8');
      const frontmatter = /^---\n([\s\S]*?)\n---\n([\s\S]+)$/.exec(content);
      expect(frontmatter, filename).not.toBeNull();
      const fields = Object.fromEntries(
        frontmatter![1]
          .split('\n')
          .filter((line) => line.includes(':'))
          .map((line) => {
            const split = line.indexOf(':');
            return [line.slice(0, split), line.slice(split + 1).trim()];
          }),
      );
      expect(JSON.parse(fields.name), filename).toBe(filename.replace(/\.md$/, ''));
      expect(JSON.parse(fields.description), filename).toBeTruthy();
      expect(Array.isArray(JSON.parse(fields.tools)), filename).toBe(true);
      expect(JSON.parse(fields.model), filename).toBeTruthy();
      expect(fields.omd_managed, filename).toBe('true');
      expect(frontmatter![2].trim(), filename).not.toBe('');
    }
  });

  it('removes only OmD-managed legacy .codex/skills entrypoints', async () => {
    const managed = join(root, '.codex', 'skills', 'omd-init', 'SKILL.md');
    const privateSkill = join(root, '.codex', 'skills', 'private-skill', 'SKILL.md');
    mkdirSync(join(root, '.codex', 'skills', 'omd-init'), { recursive: true });
    mkdirSync(join(root, '.codex', 'skills', 'private-skill'), { recursive: true });
    writeFileSync(
      managed,
      '<!-- omd:installed-skill — managed by `omd install-skills`. -->\n\n# legacy',
    );
    writeFileSync(privateSkill, '---\nname: private-skill\ndescription: private\n---\n# keep');

    await runInstallSkills({
      dir: root,
      agents: ['codex'],
      skillsFilter: ['omd-init'],
      agentsFilter: [],
      skillsOnly: true,
    });

    expect(existsSync(managed)).toBe(false);
    expect(readFileSync(privateSkill, 'utf8')).toContain('# keep');
    expect(existsSync(join(root, '.agents', 'skills', 'omd-init', 'SKILL.md'))).toBe(true);
  });

  it('ships OpenCode catalog data aligned with the installed skill resolution paths', async () => {
    await runInstallSkills({
      dir: root,
      agents: ['opencode'],
      skillsFilter: ['omd-init', 'omd-apply'],
      agentsFilter: [],
    });

    const init = readFileSync(join(root, '.opencode/skills/omd-init/SKILL.md'), 'utf8');
    expect(init).toContain('.opencode/data/reference-fingerprints.json');
    expect(existsSync(join(root, '.opencode/data/references/toss/DESIGN.md'))).toBe(true);
    expect(existsSync(join(root, '.opencode/data/scripts/ctx-prime.cjs'))).toBe(true);
    expect(dataDirFor('opencode', ['opencode'])).toBe('.opencode');
  });

  it('uses native OpenCode project skill paths in portable sub-agent bodies', async () => {
    const skills = ['omd-init', 'omd-final-qa', 'omd-orchestrator'];
    const roleIds = ['omd-final-qa', 'omd-orchestrator', 'omd-master'];
    const code = await runInstallSkills({
      dir: root,
      agents: ['opencode'],
      skillsFilter: skills,
      agentsFilter: roleIds,
    });

    expect(code).toBe(0);
    for (const skill of skills) {
      const content = readFileSync(
        join(root, '.opencode', 'skills', skill, 'SKILL.md'),
        'utf8',
      );
      const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(content)?.[1];
      const installedName = /^name:\s*([^\r\n]+)$/m.exec(frontmatter ?? '')?.[1].trim();
      expect(installedName, skill).toBe(skill);
      expect(installedName, skill).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(content, skill).not.toMatch(/^name:\s*omd:/m);
    }

    const master = readFileSync(
      join(root, '.opencode', 'agents', 'omd-master.md'),
      'utf8',
    );
    expect(master.startsWith('---\n')).toBe(true);
    expect(master).toMatch(/^mode:\s*subagent$/m);
    expect(master).toContain('<!-- omd:installed-agent');
    expect(existsSync(join(root, '.claude', 'skills'))).toBe(false);
    expect(existsSync(join(root, '.claude', 'agents'))).toBe(false);
    expect(existsSync(join(root, '.codex', 'agents'))).toBe(false);

    for (const roleId of roleIds) {
      const role = readFileSync(join(root, '.opencode', 'agents', `${roleId}.md`), 'utf8');
      expect(role, roleId).toContain('.opencode/skills/<skill>/SKILL.md');
      expect(role, roleId).toContain('.opencode/data');
      expect(role, roleId).not.toContain('.claude/skills');
      expect(role, roleId).not.toMatch(/\bomd:(?!installed-agent\b)[a-z0-9-]+\b/);
      expect(role, roleId).not.toContain('Claude Code subagent');
      expect(role, roleId).not.toContain('Agent tool');
      expect(role, roleId).not.toContain('AskUserQuestion');
      expect(role, roleId).not.toMatch(/\b(?:data\/research|research\/harness-design)\//);
    }
  });

  it('installs global OpenCode skills, agents, and data only under ~/.config/opencode', async () => {
    const previousHome = process.env.HOME;
    process.env.HOME = root;
    try {
      const code = await runInstallSkills({
        dir: join(root, 'ignored-project'),
        global: true,
        agents: ['opencode'],
        skillsFilter: ['omd-init'],
        agentsFilter: ['omd-master'],
      });

      expect(code).toBe(0);
      const globalRoot = join(root, '.config', 'opencode');
      const init = readFileSync(join(globalRoot, 'skills', 'omd-init', 'SKILL.md'), 'utf8');
      expect(init).toContain(
        `Installed global data root (highest priority):** \`${join(globalRoot, 'data')}\``,
      );
      expect(existsSync(join(globalRoot, 'agents', 'omd-master.md'))).toBe(true);
      const master = readFileSync(join(globalRoot, 'agents', 'omd-master.md'), 'utf8');
      expect(master).toContain('~/.config/opencode/skills/<skill>/SKILL.md');
      expect(master).toContain(join(globalRoot, 'data'));
      expect(master).not.toMatch(/\bomd:(?!installed-agent\b)[a-z0-9-]+\b/);
      expect(master).not.toContain('.claude/skills');
      expect(existsSync(join(root, '.claude', 'skills'))).toBe(false);
      expect(existsSync(join(globalRoot, 'data', 'reference-fingerprints.json'))).toBe(true);
      expect(existsSync(join(globalRoot, 'data', 'references', 'toss', 'DESIGN.md'))).toBe(true);
      expect(existsSync(join(globalRoot, 'data', 'scripts', 'ctx-prime.cjs'))).toBe(true);
      expect(existsSync(join(root, '.opencode'))).toBe(false);
    } finally {
      if (previousHome === undefined) delete process.env.HOME;
      else process.env.HOME = previousHome;
    }
  });

  it('rejects a global Cursor install before writing project-scoped assets', async () => {
    const previousHome = process.env.HOME;
    process.env.HOME = root;
    try {
      const code = await runInstallSkills({
        dir: join(root, 'project'),
        global: true,
        agents: ['cursor'],
        skillsFilter: ['omd-init'],
        agentsFilter: [],
      });

      expect(code).toBe(1);
      expect(existsSync(join(root, '.cursor'))).toBe(false);
      expect(existsSync(join(root, '.claude', 'data'))).toBe(false);
    } finally {
      if (previousHome === undefined) delete process.env.HOME;
      else process.env.HOME = previousHome;
    }
  });

  it('ships claude-design with a resolved skill dir and no ~/.claude command paths', async () => {
    const code = await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      skillsFilter: ['claude-design'],
      agentsFilter: [],
      skillsOnly: true,
    });

    expect(code).toBe(0);
    const skillRoot = join(root, '.claude', 'skills', 'claude-design');
    const executionDocs = [
      join(skillRoot, 'SKILL.md'),
      join(skillRoot, 'references', 'codebase-analysis.md'),
      join(skillRoot, 'references', 'claude-design-flow.md'),
    ];
    for (const path of executionDocs) {
      expect(readFileSync(path, 'utf8'), path).toContain('CLAUDE_DESIGN_SKILL_DIR');
    }
    for (const path of filesUnder(skillRoot)) {
      expect(readFileSync(path, 'utf8'), path).not.toContain(
        '~/.claude/skills/claude-design',
      );
    }
  });

  it('embeds the absolute data root into globally installed skills', async () => {
    const previousHome = process.env.HOME;
    process.env.HOME = root;
    try {
      await runInstallSkills({
        dir: join(root, 'project'),
        global: true,
        agents: ['codex'],
        skillsFilter: ['omd-init'],
        agentsFilter: ['omd-master'],
      });
    } finally {
      if (previousHome === undefined) delete process.env.HOME;
      else process.env.HOME = previousHome;
    }

    const init = readFileSync(join(root, '.agents/skills/omd-init/SKILL.md'), 'utf8');
    expect(init).toContain(`Installed global data root (highest priority):** \`${join(root, '.codex/data')}\``);
    expect(existsSync(join(root, '.codex/data/references/toss/DESIGN.md'))).toBe(true);
    const master = readFileSync(join(root, '.codex/agents/omd-master.toml'), 'utf8');
    expect(master).toContain('~/.agents/skills/<skill>/SKILL.md');
    expect(master).toContain(join(root, '.codex/data'));
    expect(master).not.toContain('.claude/skills');
    expect(existsSync(join(root, '.claude', 'skills'))).toBe(false);
  });

  it('refreshes only hash-owned catalog files and preserves user sidecars', async () => {
    const install = (force = false) => runInstallSkills({
      dir: root,
      agents: ['codex'],
      skillsFilter: ['omd-init', 'omd-apply'],
      agentsFilter: ['omd-master'],
      force,
    });
    await install();

    const fingerprints = join(root, '.codex/data/reference-fingerprints.json');
    const toss = join(root, '.codex/data/references/toss/DESIGN.md');
    const manifestPath = join(root, '.codex/data/references/.omd-managed.json');
    writeFileSync(fingerprints, '{"count":0,"items":[]}', 'utf8');
    writeFileSync(toss, '# stale local cache', 'utf8');

    // Unknown IDs are user/private data and must never be inferred as managed.
    mkdirSync(join(root, '.codex/data/references/private-brand'), { recursive: true });
    writeFileSync(
      join(root, '.codex/data/references/private-brand/DESIGN.md'),
      '# private reference',
      'utf8',
    );

    // A retired hash-owned DESIGN.md can be pruned, but its sidecars survive.
    mkdirSync(join(root, '.codex/data/references/retired-managed'), { recursive: true });
    const retiredDesign = '# retired managed cache entry';
    writeFileSync(
      join(root, '.codex/data/references/retired-managed/DESIGN.md'),
      retiredDesign,
      'utf8',
    );
    writeFileSync(
      join(root, '.codex/data/references/retired-managed/notes.md'),
      '# user notes',
      'utf8',
    );
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    manifest.managedIds.push('retired-managed');
    manifest.managedDesignHashes['retired-managed'] = createHash('sha256')
      .update(retiredDesign)
      .digest('hex');
    writeFileSync(manifestPath, JSON.stringify(manifest), 'utf8');

    await install();

    expect(readFileSync(fingerprints, 'utf8')).toBe(
      readFileSync(join(process.cwd(), 'data/reference-fingerprints.json'), 'utf8'),
    );
    expect(readFileSync(toss, 'utf8')).toBe('# stale local cache');
    expect(existsSync(join(root, '.codex/data/references/private-brand/DESIGN.md'))).toBe(true);
    expect(existsSync(join(root, '.codex/data/references/retired-managed/DESIGN.md'))).toBe(false);
    expect(readFileSync(join(root, '.codex/data/references/retired-managed/notes.md'), 'utf8')).toBe('# user notes');
    const refreshedManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    expect(refreshedManifest.managedIds).not.toContain('toss');
    expect(refreshedManifest.managedIds).not.toContain('private-brand');
    expect(refreshedManifest.schemaVersion).toBe(2);

    await install(true);
    expect(readFileSync(toss, 'utf8')).toBe(
      readFileSync(join(process.cwd(), 'web/references/toss/DESIGN.md'), 'utf8'),
    );
    const forcedManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    expect(forcedManifest.managedIds).toContain('toss');
  });

  it('merges Claude hooks without clobbering user settings or invoking an unshipped script', async () => {
    expect(readFileSync(join(process.cwd(), '.claude/settings.json'), 'utf8')).toContain(
      'bash ${CLAUDE_PROJECT_DIR}/scripts/context_restore.sh',
    );
    mkdirSync(join(root, '.claude'), { recursive: true });
    writeFileSync(
      join(root, '.claude/settings.json'),
      JSON.stringify({
        permissions: { allow: ['Bash(npm test)'] },
        hooks: {
          SessionStart: [
            { matcher: '', hooks: [{ type: 'command', command: 'echo user-session-hook' }] },
            {
              matcher: 'startup|resume|clear|compact',
              hooks: [
                {
                  type: 'command',
                  command: 'bash ${CLAUDE_PROJECT_DIR}/scripts/context_restore.sh',
                },
              ],
            },
          ],
          PreToolUse: [
            {
              matcher: '',
              hooks: [
                {
                  type: 'command',
                  command: 'node ${CLAUDE_PROJECT_DIR}/.claude/hooks/my-user-hook.cjs',
                },
              ],
            },
          ],
        },
      }),
      'utf8',
    );

    await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      skillsFilter: ['omd-init', 'omd-apply'],
      agentsFilter: ['omd-master'],
    });

    const settingsText = readFileSync(join(root, '.claude/settings.json'), 'utf8');
    const settings = JSON.parse(settingsText);
    expect(settings.permissions).toEqual({ allow: ['Bash(npm test)'] });
    expect(settingsText).toContain('echo user-session-hook');
    expect(settingsText).toContain('.claude/hooks/my-user-hook.cjs');
    expect(settingsText).toContain('.claude/hooks/session-state-loader.cjs');
    expect(settingsText).not.toContain('scripts/context_restore.sh');
  });

  it('migrates known legacy hooks to hash ownership and preserves unknown edits', async () => {
    const hook = join(root, '.claude', 'hooks', 'skill-activation.cjs');
    mkdirSync(join(root, '.claude', 'hooks'), { recursive: true });
    writeFileSync(
      hook,
      stripManagedHookMarker(
        readFileSync(join(process.cwd(), '.claude', 'hooks', 'skill-activation.cjs'), 'utf8'),
      ),
    );

    const install = (force = false) => runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      skillsFilter: ['omd-init'],
      agentsFilter: [],
      force,
    });
    await install();
    expect(readFileSync(hook, 'utf8')).toMatch(
      /^#!\/usr\/bin\/env node\n\/\/ omd:installed-hook sha256=[0-9a-f]{64}\n/,
    );

    writeFileSync(hook, '#!/usr/bin/env node\n// user-owned replacement\n');
    await install();
    expect(readFileSync(hook, 'utf8')).toContain('// user-owned replacement');

    await install(true);
    expect(readFileSync(hook, 'utf8')).toContain('// omd:installed-hook sha256=');
    expect(readFileSync(hook, 'utf8')).not.toContain('// user-owned replacement');
  });

  it('repairs only Claude hooks with --repair-hooks and preserves other user files', async () => {
    const hook = join(root, '.claude', 'hooks', 'skill-activation.cjs');
    const userSkill = join(root, '.claude', 'skills', 'omd-init', 'SKILL.md');
    mkdirSync(join(root, '.claude', 'hooks'), { recursive: true });
    mkdirSync(join(root, '.claude', 'skills', 'omd-init'), { recursive: true });
    writeFileSync(hook, '#!/usr/bin/env node\n// user-modified stale hook\n');
    writeFileSync(userSkill, '# user-owned skill\n');

    await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      skillsFilter: ['omd-init'],
      agentsFilter: [],
      repairHooks: true,
    });

    expect(readFileSync(hook, 'utf8')).toMatch(
      /^#!\/usr\/bin\/env node\n\/\/ omd:installed-hook sha256=[0-9a-f]{64}\n/,
    );
    expect(readFileSync(hook, 'utf8')).not.toContain('user-modified stale hook');
    expect(readFileSync(userSkill, 'utf8')).toBe('# user-owned skill\n');
  });

  it('rejects invalid or empty agent channel selections instead of succeeding with 0 files', async () => {
    expect(
      await runInstallSkills({ dir: root, agents: ['bogus' as never], all: true }),
    ).toBe(1);
    expect(await runInstallSkills({ dir: root, agents: [], all: true })).toBe(1);
    expect(
      await runInstallSkills({ dir: root, skillsFilter: ['missing-skill'], all: true }),
    ).toBe(1);
    expect(
      await runInstallSkills({ dir: root, agentsFilter: ['missing-agent'], all: true }),
    ).toBe(1);
    expect(existsSync(join(root, '.claude/skills'))).toBe(false);
  });

  it('skips the reference catalog under --skills-only', async () => {
    await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      skillsFilter: ['omd-init'],
      skillsOnly: true,
    });
    expect(existsSync(join(root, '.claude/data/references'))).toBe(false);
  });

  it('cursor channel installs the .cursor/rules shim + shared catalog (issue #20)', async () => {
    const code = await runInstallSkills({ dir: root, agents: ['cursor'] });
    expect(code).toBe(0);

    // The shim mirrors omd:sync's cursor template — frontmatter first, then
    // the hash-marked body block.
    const rule = join(root, '.cursor/rules/omd-design.mdc');
    expect(existsSync(rule), 'cursor rule shim').toBe(true);
    const content = readFileSync(rule, 'utf8');
    expect(content.startsWith('---\n')).toBe(true);
    expect(content).toMatch(/<!-- omd:start v=1 hash=[0-9a-f]{12} -->/);
    expect(content).toContain('`@DESIGN.md`');
    expect(content).toContain('Cursor receives this rule and the catalog, not OmD named skills or sub-agents');
    expect(content).toContain('Unknown reference fields stay absent');
    expect(content).toContain('<!-- omd:end -->');

    // Catalog + data JSONs land in the single shared path (.claude/data) —
    // cursor agents read it; no second catalog location is invented.
    expect(existsSync(join(root, '.claude/data/references/toss/DESIGN.md'))).toBe(true);
    expect(existsSync(join(root, '.claude/data/reference-fingerprints.json'))).toBe(true);

    // No Claude-specific surfaces for a cursor-only install.
    expect(existsSync(join(root, '.claude/skills'))).toBe(false);
    expect(existsSync(join(root, '.claude/hooks'))).toBe(false);
    expect(existsSync(join(root, '.claude/settings.json'))).toBe(false);
    expect(existsSync(join(root, '.claude/agents'))).toBe(false);
  });

  it('cursor + claude-code combined install does not double-copy the catalog (issue #28)', async () => {
    const code = await runInstallSkills({ dir: root, agents: ['claude-code', 'cursor'] });
    expect(code).toBe(0);

    // Catalog + data JSONs land in the single shared .claude/data path,
    // written by the claude-code pass only — the cursor pass is deduped.
    expect(existsSync(join(root, '.claude/data/references/toss/DESIGN.md'))).toBe(true);
    expect(existsSync(join(root, '.claude/data/reference-fingerprints.json'))).toBe(true);
    // No second catalog location is invented for cursor.
    expect(existsSync(join(root, '.cursor/data'))).toBe(false);
    expect(existsSync(join(root, '.codex/data'))).toBe(false);

    // The dedup guard itself: cursor resolves to NO data dir when claude-code
    // is also selected (its pass already wrote .claude/data); standalone cursor
    // resolves to the shared .claude path.
    expect(dataDirFor('cursor', ['claude-code', 'cursor'])).toBe(null);
    expect(dataDirFor('cursor', ['cursor'])).toBe('.claude');
  });

  it('cursor shim respects drift on user-written rule files without the marker', async () => {
    const rule = join(root, '.cursor/rules/omd-design.mdc');
    mkdirSync(join(root, '.cursor/rules'), { recursive: true });
    writeFileSync(rule, '# my own cursor rule\n', 'utf8');

    expect(await runInstallSkills({ dir: root, agents: ['cursor'] })).toBe(2);
    expect(readFileSync(rule, 'utf8')).toBe('# my own cursor rule\n');

    await runInstallSkills({ dir: root, agents: ['cursor'], force: true });
    expect(readFileSync(rule, 'utf8')).toContain('<!-- omd:start v=1 hash=');
  });

  it('rejects --repair-hooks when it cannot safely apply to project Claude hooks', async () => {
    expect(await runInstallSkills({
      dir: root,
      agents: ['codex'],
      all: true,
      repairHooks: true,
    })).toBe(1);
    expect(await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      skillsOnly: true,
      skillsFilter: ['omd-init'],
      repairHooks: true,
    })).toBe(1);
  });

  it('detects installed agents and installs only for those (when present)', async () => {
    mkdirSync(join(root, '.claude'));
    // Codex/OpenCode not installed → only Claude should get skills
    await runInstallSkills({ dir: root });
    expect(existsSync(join(root, '.claude/skills/omd-init/SKILL.md'))).toBe(true);
    expect(existsSync(join(root, '.agents/skills'))).toBe(false);
    expect(existsSync(join(root, '.opencode/skills'))).toBe(false);
  });
});
