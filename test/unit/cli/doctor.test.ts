import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  collectDoctorReport,
  REQUIRED_AGENT_IDS,
  REQUIRED_PRODUCT_SKILLS,
} from '../../../src/cli/doctor.js';
import { runInstallSkills } from '../../../src/cli/install-skills.js';
import { renderManagedHook } from '../../../src/cli/hook-contract.js';

describe('omd doctor', () => {
  let root: string;

  function installProductSkills(
    channelRoot: string,
    channel: 'claude-code' | 'codex' | 'opencode',
  ): void {
    for (const skill of REQUIRED_PRODUCT_SKILLS) {
      mkdirSync(join(channelRoot, skill), { recursive: true });
      const name = channel === 'opencode' || skill === 'claude-design'
        ? skill
        : skill.replace(/^omd-/, 'omd:');
      writeFileSync(
        join(channelRoot, skill, 'SKILL.md'),
        `---\nname: ${name}\ndescription: Test skill\n---\n<!-- omd:installed-skill -->\n# ${skill}\n`,
      );
    }
  }

  function installAgentSet(
    channelRoot: string,
    channel: 'claude' | 'codex' | 'opencode',
  ): void {
    mkdirSync(channelRoot, { recursive: true });
    for (const agent of REQUIRED_AGENT_IDS) {
      const content = agent === 'omd-master' && channel === 'codex'
        ? `name = "${agent}"\ndescription = "OmD role"\ndeveloper_instructions = '''\n# omd-master — Conversational Design Partner\n'''\n`
        : channel === 'codex'
          ? `name = "${agent}"\ndescription = "OmD role"\ndeveloper_instructions = '''\n# ${agent}\n'''\n`
          : channel === 'opencode'
            ? `---\ndescription: "OmD role"\nmode: subagent\n---\n# ${agent}\n<!-- omd:installed-agent -->\n`
          : `---\nname: "${agent}"\ndescription: "OmD role"\ntools: []\nmodel: "inherit"\nomd_managed: true\n---\n# ${agent}\n`;
      writeFileSync(
        join(channelRoot, `${agent}${channel === 'codex' ? '.toml' : '.md'}`),
        content,
      );
    }
  }

  function installCatalog(dataRoot: string): void {
    mkdirSync(join(dataRoot, 'references', 'toss'), { recursive: true });
    writeFileSync(join(dataRoot, 'references', 'toss', 'DESIGN.md'), '# Toss');
    for (const file of [
      'reference-fingerprints.json',
      'reference-tags.md',
      'vocabulary.json',
    ]) {
      writeFileSync(
        join(dataRoot, file),
        file === 'reference-fingerprints.json' ? '{"count":1,"items":[{"id":"toss"}]}' : '{}',
      );
    }
  }

  function installClaudeActivation(): void {
    const hooks = [
      'skill-activation.cjs',
      'session-state-loader.cjs',
      'post-edit-watch.cjs',
      'session-end-foldin.cjs',
      'lib/preferences-parser.cjs',
      'lib/preferences-writer.cjs',
    ];
    for (const hook of hooks) {
      const path = join(root, '.claude', 'hooks', hook);
      mkdirSync(join(path, '..'), { recursive: true });
      const source = readFileSync(join(process.cwd(), '.claude', 'hooks', hook), 'utf8');
      writeFileSync(path, renderManagedHook(source));
    }
    writeFileSync(
      join(root, '.claude', 'settings.json'),
      JSON.stringify({
        hooks: hooks.slice(0, 4).map((hook) => ({
          command: `node \${CLAUDE_PROJECT_DIR}/.claude/hooks/${hook}`,
        })),
      }),
    );
  }

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-doctor-'));
  });

  afterEach(() => {
    if (existsSync(root)) rmSync(root, { recursive: true, force: true });
  });

  it('directs an empty project to the installer', () => {
    const report = collectDoctorReport({ dir: root });
    expect(report.state).toBe('not-installed');
    expect(report.nextCommand).toBe(
      `npx oh-my-design-cli@latest install-skills --all --dir '${root}'`,
    );
  });

  it('shell-quotes the exact --dir value in install and repair commands', () => {
    const projectRoot = join(root, "team's app");
    mkdirSync(projectRoot, { recursive: true });
    const quotedDir = `'${projectRoot.replace(/'/g, `'\"'\"'`)}'`;

    expect(collectDoctorReport({ dir: projectRoot }).nextCommand).toBe(
      `npx oh-my-design-cli@latest install-skills --all --dir ${quotedDir}`,
    );

    mkdirSync(join(projectRoot, '.agents', 'skills', 'omd-apply'), { recursive: true });
    writeFileSync(join(projectRoot, '.agents', 'skills', 'omd-apply', 'SKILL.md'), '# partial');
    expect(collectDoctorReport({ dir: projectRoot }).nextCommand).toBe(
      `npx oh-my-design-cli@latest install-skills --agent codex --all --force --dir ${quotedDir}`,
    );
  });

  it('keeps the doctor-required product skills and agents aligned with shipped sources', () => {
    const shippedSkills = readdirSync(join(process.cwd(), 'skills'), { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          entry.name !== 'omd-lab-02-design-harness' &&
          existsSync(join(process.cwd(), 'skills', entry.name, 'SKILL.md')),
      )
      .map((entry) => entry.name)
      .sort();
    const shippedAgents = readdirSync(join(process.cwd(), 'agents'))
      .filter((name) => name.startsWith('omd-') && name.endsWith('.md'))
      .map((name) => name.replace(/\.md$/, ''))
      .sort();

    expect([...REQUIRED_PRODUCT_SKILLS].sort()).toEqual(shippedSkills);
    expect([...REQUIRED_AGENT_IDS].sort()).toEqual(shippedAgents);
  });

  it('recognizes an installed Codex bundle that still needs activation', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installAgentSet(join(root, '.codex/agents'), 'codex');
    installCatalog(join(root, '.codex', 'data'));

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('needs-design-md');
    expect(codex).toMatchObject({
      installed: true,
      ready: true,
      skills: REQUIRED_PRODUCT_SKILLS.length,
      agents: REQUIRED_AGENT_IDS.length,
      references: 1,
      issues: [],
    });
  });

  it('reports ready after DESIGN.md exists', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installAgentSet(join(root, '.opencode', 'agents'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    writeFileSync(join(root, 'DESIGN.md'), '# Project design');

    expect(collectDoctorReport({ dir: root }).state).toBe('ready');
  });

  it('reads global OpenCode skills, agents, and data from ~/.config/opencode', () => {
    const previousHome = process.env.HOME;
    process.env.HOME = root;
    try {
      const globalRoot = join(root, '.config', 'opencode');
      installProductSkills(join(globalRoot, 'skills'), 'opencode');
      installAgentSet(join(globalRoot, 'agents'), 'opencode');
      installCatalog(join(globalRoot, 'data'));

      const report = collectDoctorReport({ global: true, dir: join(root, 'ignored-project') });
      const opencode = report.channels.find((channel) => channel.id === 'opencode');
      expect(report).toMatchObject({
        root,
        scope: 'global',
        state: 'ready',
      });
      expect(opencode).toMatchObject({
        installed: true,
        ready: true,
        skills: REQUIRED_PRODUCT_SKILLS.length,
        agents: REQUIRED_AGENT_IDS.length,
        references: 1,
        issues: [],
      });
    } finally {
      if (previousHome === undefined) delete process.env.HOME;
      else process.env.HOME = previousHome;
    }
  });

  it('does not report ready for a partial skill-only install', () => {
    mkdirSync(join(root, '.agents/skills/omd-apply'), { recursive: true });
    writeFileSync(join(root, '.agents/skills/omd-apply/SKILL.md'), '# skill');
    writeFileSync(join(root, 'DESIGN.md'), '# Project design');

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.ready).toBe(false);
    expect(codex?.issues.join('\n')).toContain('missing product skills:');
    expect(codex?.issues.join('\n')).toContain('omd-init');
    expect(codex?.issues.join('\n')).toContain('reference catalog is empty');
    expect(report.nextPrompt).toBe('');
    expect(report.nextCommand).toBe(
      `npx oh-my-design-cli@latest install-skills --agent codex --all --force --dir '${root}'`,
    );
  });

  it('detects an unmarked Cursor shim and repairs only that channel', async () => {
    mkdirSync(join(root, '.cursor', 'rules'), { recursive: true });
    writeFileSync(
      join(root, '.cursor', 'rules', 'omd-design.mdc'),
      [
        '---',
        'description: Authoritative brand & UI design system. Read DESIGN.md before UI work.',
        '---',
        '',
        'Read `@DESIGN.md` before any UI task.',
        '<!-- omd:end -->',
      ].join('\n'),
    );

    const report = collectDoctorReport({ dir: root });
    const cursor = report.channels.find((channel) => channel.id === 'cursor');
    expect(report.state).toBe('incomplete');
    expect(cursor?.issues).toContain('Cursor rule is not an OmD-managed design-system shim');
    expect(report.nextCommand).toBe(
      `npx oh-my-design-cli@latest install-skills --agent cursor --all --force --dir '${root}'`,
    );

    expect(await runInstallSkills({ dir: root, agents: ['cursor'], all: true, force: true })).toBe(0);
    const repaired = collectDoctorReport({ dir: root });
    expect(repaired.state).toBe('needs-design-md');
    expect(repaired.channels.find((channel) => channel.id === 'cursor')?.ready).toBe(true);
    expect(repaired.nextCommand).toBe('');
  });

  it('does not mistake Cursor shared catalog data for a Claude Code install', async () => {
    expect(await runInstallSkills({ dir: root, agents: ['cursor'], all: true })).toBe(0);

    const report = collectDoctorReport({ dir: root });
    expect(report.state).toBe('needs-design-md');
    expect(report.channels.find((channel) => channel.id === 'claude-code')?.installed).toBe(false);
    expect(report.channels.find((channel) => channel.id === 'cursor')).toMatchObject({
      installed: true,
      ready: true,
      references: 440,
      issues: [],
    });
  });

  it('detects missing Claude hook libraries', () => {
    installProductSkills(join(root, '.claude', 'skills'), 'claude-code');
    installAgentSet(join(root, '.claude', 'agents'), 'claude');
    installCatalog(join(root, '.claude', 'data'));
    installClaudeActivation();
    rmSync(join(root, '.claude', 'hooks', 'lib', 'preferences-parser.cjs'));

    const report = collectDoctorReport({ dir: root });
    const claude = report.channels.find((channel) => channel.id === 'claude-code');
    expect(report.state).toBe('incomplete');
    expect(claude?.issues).toContain(
      'missing Claude hook file: lib/preferences-parser.cjs',
    );
    expect(claude?.issues).not.toContain(
      'missing Claude hook file: lib/preferences-writer.cjs',
    );
  });

  it('requires each Claude hook command under its exact event', () => {
    installProductSkills(join(root, '.claude', 'skills'), 'claude-code');
    installAgentSet(join(root, '.claude', 'agents'), 'claude');
    installCatalog(join(root, '.claude', 'data'));
    installClaudeActivation();
    const settingsPath = join(root, '.claude', 'settings.json');
    const settings = JSON.parse(readFileSync(settingsPath, 'utf8'));
    settings.hooks = {
      WrongEvent: [{
        hooks: [{
          type: 'command',
          command: 'node ${CLAUDE_PROJECT_DIR}/.claude/hooks/post-edit-watch.cjs',
        }],
      }],
      note: '.claude/hooks/skill-activation.cjs',
    };
    writeFileSync(settingsPath, JSON.stringify(settings));

    const claude = collectDoctorReport({ dir: root }).channels.find(
      (channel) => channel.id === 'claude-code',
    );
    expect(claude?.ready).toBe(false);
    expect(claude?.issues).toContain(
      'Claude hook is not activated in settings: skill-activation.cjs',
    );
    expect(claude?.issues).toContain(
      'Claude hook is not activated in settings: post-edit-watch.cjs',
    );
  });

  it('does not report stale or modified Claude hooks as ready and executes its repair', async () => {
    installProductSkills(join(root, '.claude', 'skills'), 'claude-code');
    installAgentSet(join(root, '.claude', 'agents'), 'claude');
    installCatalog(join(root, '.claude', 'data'));
    installClaudeActivation();
    writeFileSync(
      join(root, '.claude', 'hooks', 'post-edit-watch.cjs'),
      '#!/usr/bin/env node\n// stale hook\n',
    );
    writeFileSync(join(root, 'DESIGN.md'), '# Project design');

    const report = collectDoctorReport({ dir: root });
    const claude = report.channels.find((channel) => channel.id === 'claude-code');
    expect(report.state).toBe('incomplete');
    expect(claude?.issues).toContain(
      'stale or modified Claude hook file: post-edit-watch.cjs',
    );
    expect(report.nextCommand).toBe(
      `npx oh-my-design-cli@latest install-skills --agent claude-code --all --repair-hooks --dir '${root}'`,
    );

    expect(await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      all: true,
      repairHooks: true,
    })).toBe(0);
    expect(collectDoctorReport({ dir: root }).state).toBe('ready');
  });

  it('refuses symlinked Claude hook paths instead of writing through them', async () => {
    installProductSkills(join(root, '.claude', 'skills'), 'claude-code');
    installAgentSet(join(root, '.claude', 'agents'), 'claude');
    installCatalog(join(root, '.claude', 'data'));
    mkdirSync(join(root, 'hook-target'), { recursive: true });
    writeFileSync(join(root, 'hook-target', 'post-edit-watch.cjs'), '// protected\n');
    mkdirSync(join(root, '.claude'), { recursive: true });
    symlinkSync(join(root, 'hook-target'), join(root, '.claude', 'hooks'));
    writeFileSync(
      join(root, '.claude', 'settings.json'),
      JSON.stringify({ hooks: {} }),
    );

    const report = collectDoctorReport({ dir: root });
    expect(report.state).toBe('incomplete');
    expect(report.nextCommand).toBe('');
    expect(report.manualAction).toContain('symlinked OmD paths');
    expect(await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      all: true,
      repairHooks: true,
    })).toBe(2);
    expect(readFileSync(join(root, 'hook-target', 'post-edit-watch.cjs'), 'utf8')).toBe('// protected\n');
  });

  it('rejects an empty fingerprint index when references are installed', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    writeFileSync(
      join(root, '.opencode', 'data', 'reference-fingerprints.json'),
      '{"count":0,"items":[]}',
    );

    const report = collectDoctorReport({ dir: root });
    const opencode = report.channels.find((channel) => channel.id === 'opencode');
    expect(report.state).toBe('incomplete');
    expect(opencode?.issues).toContain(
      'reference-fingerprints.json is empty while references are installed',
    );
  });

  it('does not require private references to appear in the managed fingerprint index', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installAgentSet(join(root, '.opencode', 'agents'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    mkdirSync(join(root, '.opencode', 'data', 'references', 'private-brand'), { recursive: true });
    writeFileSync(
      join(root, '.opencode', 'data', 'references', 'private-brand', 'DESIGN.md'),
      '# Private',
    );
    writeFileSync(
      join(root, '.opencode', 'data', 'references', '.omd-managed.json'),
      '{"schemaVersion":2,"managedIds":["toss"],"managedDesignHashes":{}}',
    );

    const report = collectDoctorReport({ dir: root });
    expect(report.state).toBe('needs-design-md');
    expect(report.channels.find((channel) => channel.id === 'opencode')?.ready).toBe(true);
  });

  it('flags old Codex pointer TOMLs that do not embed the canonical role', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    installAgentSet(join(root, '.codex/agents'), 'codex');
    writeFileSync(
      join(root, '.codex', 'agents', 'omd-master.toml'),
      '[agent]\nmodel = "gpt-4.1"\ninstructions = "Source of truth: agents/omd-master.md"\n',
    );

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.issues).toContain('Codex omd-master does not embed the canonical role body');
    expect(codex?.issues.join('\n')).toContain('invalid Codex sub-agent definitions');
    expect(codex?.issues).toContain(
      'Codex omd-master pins a stale model instead of inheriting the session model',
    );
  });

  it('rejects legacy Codex agent TOML even when every expected file exists', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    installAgentSet(join(root, '.codex/agents'), 'codex');
    writeFileSync(
      join(root, '.codex', 'agents', 'omd-ui-junior.toml'),
      '[agent]\nname = "omd-ui-junior"\ndescription = "legacy"\ninstructions = "legacy"\n',
    );

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.issues.join('\n')).toContain(
      'invalid Codex sub-agent definitions (expected top-level name, description, developer_instructions): omd-ui-junior',
    );
  });

  it('rejects Codex roles that point at another channel or unshipped research', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    installAgentSet(join(root, '.codex/agents'), 'codex');
    writeFileSync(
      join(root, '.codex', 'agents', 'omd-final-qa.toml'),
      `name = "omd-final-qa"
description = "OmD role"
developer_instructions = '''
Read .claude/skills/omd-final-qa/SKILL.md.
Read data/research/private-runtime-note.md.
'''
`,
    );

    const codex = collectDoctorReport({ dir: root }).channels.find(
      (channel) => channel.id === 'codex',
    );
    expect(codex?.ready).toBe(false);
    expect(codex?.issues).toContain(
      'Codex sub-agents reference another channel\'s skill root: omd-final-qa',
    );
    expect(codex?.issues).toContain(
      'Codex sub-agents require unshipped development research files: omd-final-qa',
    );
  });

  it('rejects malformed Claude sub-agent frontmatter instead of false-green', () => {
    installProductSkills(join(root, '.claude', 'skills'), 'claude-code');
    installCatalog(join(root, '.claude', 'data'));
    installAgentSet(join(root, '.claude', 'agents'), 'claude');
    writeFileSync(
      join(root, '.claude', 'agents', 'omd-master.md'),
      '---\nname: omd-master\ndescription: broken: mapping\n---\n# body\n',
    );

    const report = collectDoctorReport({ dir: root });
    const claude = report.channels.find((channel) => channel.id === 'claude-code');
    expect(report.state).toBe('incomplete');
    expect(claude?.issues).toContain('invalid Claude sub-agent frontmatter: omd-master');
  });

  it('rejects OpenCode roles that point at another channel skill root', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    installAgentSet(join(root, '.opencode', 'agents'), 'opencode');
    writeFileSync(
      join(root, '.opencode', 'agents', 'omd-final-qa.md'),
      `---
description: "OmD role"
mode: subagent
---
Read .claude/skills/omd-final-qa/SKILL.md.
<!-- omd:installed-agent -->
`,
    );

    const opencode = collectDoctorReport({ dir: root }).channels.find(
      (channel) => channel.id === 'opencode',
    );
    expect(opencode?.ready).toBe(false);
    expect(opencode?.issues).toContain(
      'OpenCode sub-agents reference another channel\'s skill root: omd-final-qa',
    );
  });

  it('flags legacy .codex/skills entries that can shadow the supported skill path', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    installAgentSet(join(root, '.codex', 'agents'), 'codex');
    mkdirSync(join(root, '.codex', 'skills', 'omd-init'), { recursive: true });
    writeFileSync(join(root, '.codex', 'skills', 'omd-init', 'SKILL.md'), '# legacy');

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.issues).toContain(
      'unmanaged legacy Codex skill paths require manual review: omd-init',
    );
    expect(report.nextCommand).toBe('');
  });

  it('flags a stale fingerprint catalog instead of returning a false green', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    writeFileSync(
      join(root, '.opencode', 'data', 'reference-fingerprints.json'),
      '{"count":2,"items":[{"id":"toss"}]}',
    );
    writeFileSync(join(root, 'DESIGN.md'), '# Project design');

    const report = collectDoctorReport({ dir: root });
    const opencode = report.channels.find((channel) => channel.id === 'opencode');
    expect(report.state).toBe('incomplete');
    expect(opencode?.issues).toContain('catalog mismatch: declared 2 fingerprints but items contains 1');
  });

  it('requires the full sub-agent set, not only omd-master', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    installAgentSet(join(root, '.codex/agents'), 'codex');
    rmSync(join(root, '.codex/agents/omd-ux-researcher.toml'));

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.issues.join('\n')).toContain('missing Codex sub-agents: omd-ux-researcher');
  });

  it('validates fingerprint IDs so equal counts cannot hide a missing reference', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    writeFileSync(
      join(root, '.opencode/data/reference-fingerprints.json'),
      '{"count":1,"items":[{"id":"missing-brand"}]}',
    );

    const report = collectDoctorReport({ dir: root });
    const opencode = report.channels.find((channel) => channel.id === 'opencode');
    expect(report.state).toBe('incomplete');
    expect(opencode?.issues).toContain('missing catalog references: missing-brand');
  });

  it('does not mistake unrelated Claude settings for an OmD installation', () => {
    mkdirSync(join(root, '.claude'), { recursive: true });
    writeFileSync(
      join(root, '.claude/settings.json'),
      '{"permissions":{"allow":[]}}',
    );

    const report = collectDoctorReport({ dir: root });
    expect(report.state).toBe('not-installed');
    expect(report.channels.find((channel) => channel.id === 'claude-code')?.installed).toBe(false);
  });
});
