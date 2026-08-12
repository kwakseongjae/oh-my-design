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
  REQUIRED_CORE_RUNTIME_HELPERS,
  REQUIRED_CORE_SCHEMA_FILES,
  REQUIRED_HARNESS_HELPERS,
  REQUIRED_PRODUCT_SKILLS,
} from '../../../src/cli/doctor.js';
import { runInstallSkills } from '../../../src/cli/install-skills.js';
import { renderManagedHook } from '../../../src/cli/hook-contract.js';

describe('omd doctor', () => {
  let root: string;

  function installProductSkills(
    channelRoot: string,
    channel: 'claude-code' | 'codex' | 'opencode' | 'cursor',
  ): void {
    const skills = channel === 'cursor'
      ? REQUIRED_PRODUCT_SKILLS.filter((skill) => skill !== 'claude-design')
      : REQUIRED_PRODUCT_SKILLS;
    for (const skill of skills) {
      mkdirSync(join(channelRoot, skill), { recursive: true });
      const name = channel === 'opencode' || channel === 'cursor' || skill === 'claude-design'
        ? skill
        : skill.replace(/^omd-/, 'omd:');
      writeFileSync(
        join(channelRoot, skill, 'SKILL.md'),
        `---\nname: ${name}\ndescription: Test skill\n---\n<!-- omd:installed-skill -->\n# ${skill}\n`,
      );
      if (skill === 'omd-init') {
        mkdirSync(join(channelRoot, skill, 'scripts'), { recursive: true });
        writeFileSync(
          join(channelRoot, skill, 'scripts', 'query-references.mjs'),
          '#!/usr/bin/env node\n',
        );
      }
      if (skill === 'omd-autopilot') {
        mkdirSync(join(channelRoot, skill, 'references'), { recursive: true });
        writeFileSync(
          join(channelRoot, skill, 'references', 'design-system-contract.md'),
          '# Project design-system proof contract\n',
        );
      }
      if (skill === 'omd-harness') {
        mkdirSync(join(channelRoot, skill, 'references'), { recursive: true });
        for (const sidecar of [
          'master-visual-grounding.md',
          'master-conversation.md',
          'master-legacy-production.md',
          'master-execution-phases.md',
        ]) {
          writeFileSync(join(channelRoot, skill, 'references', sidecar), `# ${sidecar}\n`);
        }
      }
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
      'reference-quality.json',
      'reference-tags.md',
      'vocabulary.json',
      'workflow-capabilities.json',
    ]) {
      writeFileSync(
        join(dataRoot, file),
        file === 'reference-fingerprints.json'
          ? '{"count":1,"items":[{"id":"toss"}]}'
          : file === 'reference-quality.json'
            ? '{"count":1,"items":[{"id":"toss","status":"verified_v2"}]}'
          : file === 'workflow-capabilities.json'
              ? JSON.stringify({
                schema_version: 1,
                locale_contract: {
                  source_locale: 'ko',
                  source_revision: 'doctor-fixture-ko-v1',
                  supported_locales: ['en', 'ko', 'ja', 'zh-CN', 'zh-TW'],
                },
                execution_assurance: {
                  contract_version: 1,
                  channels: ['claude-code', 'codex', 'opencode', 'cursor'].map((id) => ({
                    id,
                    skill_contract: 'advisory',
                    native_policy_surface: 'test-policy-surface',
                    omd_policy_adapter_default: 'not-installed',
                    host_native_pretool_blocking: false,
                    effective_level: id === 'claude-code' ? 'host-feedback' : 'skill-contract',
                  })),
                  benchmark_controller: {
                    enforcement: 'promotion-report',
                    execution_blocking: false,
                  },
                },
                workflows: [{
                  id: 'repair-existing-ui',
                  entry_skill: 'omd:apply',
                  stages: ['inspect', 'implement', 'verify'],
                  locales: {
                    ja: {
                      label: '既存UIを改善',
                      prompt: '既存画面を点検して改善します。',
                      route_suffix: 'DESIGN.mdに従って作業してください。',
                    },
                    'zh-CN': {
                      label: '改进现有 UI',
                      prompt: '检查并改进现有界面。',
                      route_suffix: '请按 DESIGN.md 执行。',
                    },
                    'zh-TW': {
                      label: '改善現有 UI',
                      prompt: '檢查並改善現有畫面。',
                      route_suffix: '請依 DESIGN.md 執行。',
                    },
                  },
                }],
              })
            : '{}',
      );
    }
    mkdirSync(join(dataRoot, 'scripts'), { recursive: true });
    const coreRuntimeHelpers = new Set<string>(REQUIRED_CORE_RUNTIME_HELPERS);
    for (const helper of REQUIRED_HARNESS_HELPERS) {
      writeFileSync(
        join(dataRoot, 'scripts', helper),
        coreRuntimeHelpers.has(helper)
          ? readFileSync(join(process.cwd(), 'scripts', helper))
          : '#!/usr/bin/env node\n',
      );
    }
    mkdirSync(join(dataRoot, 'scripts', 'schema'), { recursive: true });
    for (const schema of REQUIRED_CORE_SCHEMA_FILES) {
      writeFileSync(
        join(dataRoot, 'scripts', 'schema', schema),
        readFileSync(join(process.cwd(), 'spec', 'schema', schema)),
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

  it('fails the channel readiness check when a deterministic harness helper is missing', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installAgentSet(join(root, '.codex/agents'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    rmSync(join(root, '.codex/data/scripts/design-council-handoff.cjs'));

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.ready).toBe(false);
    expect(codex?.issues).toContain('missing harness helpers: design-council-handoff.cjs');
  });

  it('fails closed when an installed Core schema differs from the packaged authority', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installAgentSet(join(root, '.codex/agents'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    writeFileSync(
      join(root, '.codex/data/scripts/schema/design-md-core-adoption-receipt-v2.schema.json'),
      '{}\n',
    );

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.ready).toBe(false);
    expect(codex?.issues).toContain(
      'invalid Core schema bytes: design-md-core-adoption-receipt-v2.schema.json',
    );
  });

  it('fails closed when an installed Core proof schema is missing', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installAgentSet(join(root, '.codex/agents'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    rmSync(join(root, '.codex/data/scripts/schema/design-system-provenance-v2.schema.json'));

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.ready).toBe(false);
    expect(codex?.issues).toContain(
      'missing harness helpers: schema/design-system-provenance-v2.schema.json',
    );
  });

  it('fails closed when an installed Core runtime helper differs from the packaged authority', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installAgentSet(join(root, '.codex/agents'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    writeFileSync(
      join(root, '.codex/data/scripts/design-md-core-conformance.cjs'),
      '#!/usr/bin/env node\n// stale helper\n',
    );

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.ready).toBe(false);
    expect(codex?.issues).toContain(
      'invalid Core runtime helper bytes: design-md-core-conformance.cjs',
    );
  });

  it('rejects a byte-identical installed Core compiler reached through a symlink', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installAgentSet(join(root, '.codex/agents'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    const compilerPath = join(root, '.codex/data/scripts/compile-design-md-core.cjs');
    rmSync(compilerPath);
    symlinkSync(join(process.cwd(), 'scripts/compile-design-md-core.cjs'), compilerPath);

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.ready).toBe(false);
    expect(codex?.issues.join('\n')).toContain(
      'unsafe symlinked codex data paths: .codex/data/scripts/compile-design-md-core.cjs',
    );
  });

  it('rejects a byte-identical Core schema reached through a symlink', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installAgentSet(join(root, '.codex/agents'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    const schemaPath = join(
      root,
      '.codex/data/scripts/schema/design-md-core-project-checkpoint-v2.schema.json',
    );
    rmSync(schemaPath);
    symlinkSync(
      join(process.cwd(), 'spec/schema/design-md-core-project-checkpoint-v2.schema.json'),
      schemaPath,
    );

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.ready).toBe(false);
    expect(codex?.issues.join('\n')).toContain(
      'unsafe symlinked codex data paths: .codex/data/scripts/schema/design-md-core-project-checkpoint-v2.schema.json',
    );
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
      skills: REQUIRED_PRODUCT_SKILLS.length - 1,
      references: 440,
      issues: [],
    });
  });

  it('detects a missing native Cursor skill and points repair at Cursor only', async () => {
    expect(await runInstallSkills({ dir: root, agents: ['cursor'], all: true })).toBe(0);
    rmSync(join(root, '.cursor', 'skills', 'omd-apply'), { recursive: true });

    const report = collectDoctorReport({ dir: root });
    const cursor = report.channels.find((channel) => channel.id === 'cursor');
    expect(report.state).toBe('incomplete');
    expect(cursor?.ready).toBe(false);
    expect(cursor?.issues.join('\n')).toContain('missing product skills: omd-apply');
    expect(report.nextCommand).toBe(
      `npx oh-my-design-cli@latest install-skills --agent cursor --all --dir '${root}'`,
    );

    expect(await runInstallSkills({
      dir: root,
      agents: ['cursor'],
      all: true,
      force: true,
    })).toBe(0);
    expect(collectDoctorReport({ dir: root }).channels.find(
      (channel) => channel.id === 'cursor',
    )?.ready).toBe(true);
  });

  it('accepts an explicit Cursor rule-only compatibility install without native skills', async () => {
    expect(await runInstallSkills({
      dir: root,
      agents: ['cursor'],
      all: true,
      cursorRuleOnly: true,
    })).toBe(0);

    const report = collectDoctorReport({ dir: root });
    expect(report.state).toBe('needs-design-md');
    expect(report.channels.find((channel) => channel.id === 'cursor')).toMatchObject({
      installed: true,
      ready: true,
      skills: 0,
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

  it('diagnoses opt-in proof-policy drift without claiming it exists by default', async () => {
    mkdirSync(join(root, '.git'));
    expect(await runInstallSkills({
      dir: root,
      agents: ['claude-code', 'codex'],
      all: true,
    })).toBe(0);
    let report = collectDoctorReport({ dir: root });
    expect(report.channels.find((channel) => channel.id === 'claude-code')?.issues)
      .not.toEqual(expect.arrayContaining([expect.stringContaining('proof-policy')]));
    expect(report.channels.find((channel) => channel.id === 'codex')?.issues)
      .not.toEqual(expect.arrayContaining([expect.stringContaining('proof-policy')]));

    expect(await runInstallSkills({
      dir: root,
      agents: ['claude-code', 'codex'],
      all: true,
      proofPolicy: true,
    })).toBe(0);
    report = collectDoctorReport({ dir: root });
    expect(report.channels.find((channel) => channel.id === 'claude-code')?.issues)
      .not.toEqual(expect.arrayContaining([expect.stringContaining('proof-policy')]));
    expect(report.channels.find((channel) => channel.id === 'codex')?.issues)
      .not.toEqual(expect.arrayContaining([expect.stringContaining('proof-policy')]));

    const codexHooksPath = join(root, '.codex/hooks.json');
    const codexHooks = JSON.parse(readFileSync(codexHooksPath, 'utf8'));
    for (const event of ['PreToolUse', 'PostToolUse']) {
      const managed = codexHooks.hooks[event].find((group: { hooks?: Array<{ command?: string }> }) =>
        group.hooks?.some((hook) => hook.command?.includes('omd-proof-policy')));
      managed.matcher = 'Bash|apply_patch|Edit';
    }
    writeFileSync(codexHooksPath, `${JSON.stringify(codexHooks, null, 2)}\n`);
    const staleMatcher = collectDoctorReport({ dir: root }).channels.find(
      (channel) => channel.id === 'codex',
    );
    expect(staleMatcher?.ready).toBe(false);
    expect(staleMatcher?.issues).toEqual(expect.arrayContaining([
      'codex proof-policy hook is not activated for PreToolUse',
      'codex proof-policy hook is not activated for PostToolUse',
    ]));

    expect(await runInstallSkills({
      dir: root,
      agents: ['codex'],
      all: true,
      proofPolicy: true,
    })).toBe(0);

    writeFileSync(
      join(root, '.codex/hooks/omd-proof-policy/proof-policy-state.mjs'),
      '// locally modified\n',
    );
    const codex = collectDoctorReport({ dir: root }).channels.find(
      (channel) => channel.id === 'codex',
    );
    expect(codex?.ready).toBe(false);
    expect(codex?.issues).toContain(
      'stale or modified codex proof-policy file: proof-policy-state.mjs',
    );
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

  it('fails closed when the reference quality manifest is missing', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    rmSync(join(root, '.opencode', 'data', 'reference-quality.json'));

    const report = collectDoctorReport({ dir: root });
    const opencode = report.channels.find((channel) => channel.id === 'opencode');
    expect(report.state).toBe('incomplete');
    expect(opencode?.issues).toContain('missing catalog data: reference-quality.json');
  });

  it('rejects quality ids that do not match the fingerprint catalog', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    writeFileSync(
      join(root, '.opencode', 'data', 'reference-quality.json'),
      '{"count":1,"items":[{"id":"not-toss","status":"verified_v2"}]}',
    );

    const report = collectDoctorReport({ dir: root });
    const opencode = report.channels.find((channel) => channel.id === 'opencode');
    expect(report.state).toBe('incomplete');
    expect(opencode?.issues).toContain('catalog quality ids mismatch: 1 missing / 1 unknown');
  });

  it('requires the deterministic query sidecar beside omd-init', () => {
    installProductSkills(join(root, '.agents', 'skills'), 'codex');
    installAgentSet(join(root, '.codex', 'agents'), 'codex');
    installCatalog(join(root, '.codex', 'data'));
    rmSync(join(root, '.agents', 'skills', 'omd-init', 'scripts', 'query-references.mjs'));

    const report = collectDoctorReport({ dir: root });
    const codex = report.channels.find((channel) => channel.id === 'codex');
    expect(report.state).toBe('incomplete');
    expect(codex?.issues).toContain(
      'missing codex skill sidecars: omd-init/scripts/query-references.mjs',
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

  it('rejects an installed workflow catalog when one supported locale is incomplete', () => {
    installProductSkills(join(root, '.opencode', 'skills'), 'opencode');
    installCatalog(join(root, '.opencode', 'data'));
    const workflowPath = join(root, '.opencode', 'data', 'workflow-capabilities.json');
    const manifest = JSON.parse(readFileSync(workflowPath, 'utf8'));
    delete manifest.workflows[0].locales['zh-TW'];
    writeFileSync(workflowPath, JSON.stringify(manifest));

    const report = collectDoctorReport({ dir: root });
    const opencode = report.channels.find((channel) => channel.id === 'opencode');
    expect(report.state).toBe('incomplete');
    expect(opencode?.issues).toContain('workflow-capabilities.json has an invalid workflow contract');
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
