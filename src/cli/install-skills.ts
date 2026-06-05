import * as p from '@clack/prompts';
import pc from 'picocolors';
import {
  readFileSync,
  readdirSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  cpSync,
} from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { detectInstalledAgents } from '../core/agent-detect.js';

export type SkillTarget = 'claude-code' | 'codex' | 'opencode';

export interface InstallSkillsOptions {
  dir?: string;
  agents?: SkillTarget[];
  force?: boolean;
  /** Non-interactive: install all skills + all agents without TUI prompt.
   *  Default false → interactive multiselect when TTY available. */
  all?: boolean;
  /** Pre-select specific skill names from CLI flag (`--skills omd-init,omd-apply`).
   *  Overrides interactive prompt when set. */
  skillsFilter?: string[];
  /** Pre-select specific agent names. Overrides interactive prompt when set. */
  agentsFilter?: string[];
  /** Minimal install: only the named skill files — skip sub-agents, data files,
   *  hooks, and settings.json. Ideal for shipping a single standalone skill. */
  skillsOnly?: boolean;
  /** Install to the user-level dir (~/.claude/skills) instead of this project.
   *  Writes skills + sub-agents (+ data); never touches global hooks/settings.
   *  When unset and interactive, the TUI asks project-vs-global. */
  global?: boolean;
}

interface InstallPlan {
  target: SkillTarget;
  destDir: string;
  layout: 'folder' | 'flat';
}

function findPackageRoot(): string | null {
  let cur = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(cur, 'skills'))) return cur;
    const parent = dirname(cur);
    if (parent === cur) break;
    cur = parent;
  }
  return null;
}

function listShippedSkills(packageRoot: string): string[] {
  const skillsDir = join(packageRoot, 'skills');
  if (!existsSync(skillsDir)) return [];
  return readdirSync(skillsDir)
    .filter((name) => existsSync(join(skillsDir, name, 'SKILL.md')))
    .sort();
}

/**
 * Canonical agent definitions live at `agents/<name>.md` (markdown with YAML
 * frontmatter). Channel-specific files (.claude/agents/*.md, .codex/agents/*.toml)
 * are generated artifacts — never the source of truth.
 *
 * The package ships only `agents/` and the generator emits per-channel files
 * into the user's project on `omd install-skills`.
 */
function listCanonicalAgents(packageRoot: string): string[] {
  const dir = join(packageRoot, 'agents');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => name.startsWith('omd-') && name.endsWith('.md'))
    .sort();
}

interface ParsedAgent {
  name: string;
  description: string;
  tools: string[];
  model: string;
  body: string;
}

/** Parse `agents/<name>.md` YAML frontmatter + body into structured form. */
function parseCanonicalAgent(packageRoot: string, filename: string): ParsedAgent {
  const src = readFileSync(join(packageRoot, 'agents', filename), 'utf8');
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(src);
  if (!match) {
    throw new Error(`agents/${filename}: missing YAML frontmatter`);
  }
  const fm = match[1];
  const body = match[2];
  const grab = (key: string): string => {
    const re = new RegExp(`^${key}:\\s*(.+)$`, 'm');
    const m = re.exec(fm);
    return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
  };
  return {
    name: grab('name') || filename.replace(/\.md$/, ''),
    description: grab('description'),
    tools: grab('tools')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    model: grab('model') || 'sonnet',
    body,
  };
}

/** Map Claude tool names to Codex tool names (best-effort). */
function claudeToolsToCodex(tools: string[]): string[] {
  const m: Record<string, string> = {
    Read: 'read_file',
    Write: 'write_file',
    Edit: 'edit_file',
    Bash: 'shell',
    Glob: 'search',
    Grep: 'search',
    WebFetch: 'web_fetch',
    WebSearch: 'search',
    Agent: 'spawn_agent',
    TaskCreate: 'task',
    TaskUpdate: 'task',
    TaskList: 'task',
  };
  const out = new Set<string>();
  for (const t of tools) out.add(m[t] ?? t.toLowerCase());
  return [...out].sort();
}

/** Map Claude model alias to Codex/OpenAI model id (best-effort). */
function claudeModelToCodex(model: string): string {
  const m: Record<string, string> = {
    haiku: 'gpt-4.1-mini',
    sonnet: 'gpt-4.1',
    opus: 'gpt-4.1',
  };
  return m[model.toLowerCase()] ?? 'gpt-4.1';
}

/** Render a canonical agent as a Claude Code subagent file.
 *  IMPORTANT: Claude Code's subagent parser requires YAML frontmatter (`---`)
 *  as the FIRST line of the file. Any preceding content (HTML comments, blank
 *  lines) breaks discovery. So we encode the managed-by-omd marker as a
 *  custom frontmatter field (`omd_managed: true`) instead of an HTML comment.
 */
function renderClaudeAgent(a: ParsedAgent): string {
  const fm = [
    '---',
    `name: ${a.name}`,
    `description: ${a.description}`,
    `tools: ${a.tools.join(', ')}`,
    `model: ${a.model}`,
    `omd_managed: true`,
    '---',
    '',
  ].join('\n');
  return fm + a.body;
}

/** Render a canonical agent as a Codex TOML file (declarative pointer). */
function renderCodexAgent(a: ParsedAgent): string {
  const tools = claudeToolsToCodex(a.tools);
  const model = claudeModelToCodex(a.model);
  const desc = a.description.replace(/"/g, '\\"');
  return [
    `[agent]`,
    `name = "${a.name}"`,
    `description = "${desc}"`,
    `model = "${model}"`,
    `max_threads = 1`,
    `allowed_tools = [${tools.map((t) => `"${t}"`).join(', ')}]`,
    '',
    `instructions = """`,
    `Source of truth: agents/${a.name}.md (canonical). The full role spec is`,
    `mirrored to .claude/agents/${a.name}.md when installed for Claude Code.`,
    `Follow that spec verbatim regardless of channel.`,
    '',
    `Codex notes:`,
    `- Spawn sub-agents via spawn_agent with names matching .codex/agents/<name>.toml`,
    `- Use shell to invoke CLI helpers (omd init prepare, omd remember, git apply, npx axe-core, npx lighthouse)`,
    `- All artifacts go inside .omd/runs/run-<latest>/ (or skills/omd-lab-02-design-harness/runs/<lab-version>-...)`,
    `"""`,
    '',
  ].join('\n');
}

function planForTarget(projectRoot: string, target: SkillTarget): InstallPlan {
  switch (target) {
    case 'claude-code':
      return {
        target,
        destDir: join(projectRoot, '.claude', 'skills'),
        layout: 'folder',
      };
    case 'codex':
      return {
        target,
        destDir: join(projectRoot, '.codex', 'skills'),
        layout: 'folder',
      };
    case 'opencode':
      return {
        target,
        destDir: join(projectRoot, '.opencode', 'agents'),
        layout: 'flat',
      };
  }
}

const MANAGED_HEADER =
  '<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->';

interface InstallResult {
  target: SkillTarget;
  skill: string;
  destPath: string;
  status: 'created' | 'updated' | 'unchanged' | 'skipped-drift' | 'skipped-incompat';
}

// Skill-tree entries that must never be installed (runtime state, caches, OS cruft).
const IGNORED_SKILL_ENTRIES = new Set(['.runtime', '__pycache__', '.DS_Store']);

/**
 * A skill may restrict itself to specific agent channels via a frontmatter line
 * `x-omd-channels: claude-code` (comma/space separated). Returns the allowed
 * channels, or null when channel-agnostic (installs anywhere). Used by skills that
 * depend on a particular agent runtime — e.g. claude-design needs Claude Code's
 * claude-in-chrome MCP + Bash/python/node and is therefore claude-code only.
 */
function parseSkillChannels(skillMd: string): SkillTarget[] | null {
  const fm = /^---\n([\s\S]*?)\n---/.exec(skillMd);
  if (!fm) return null;
  const m = /^x-omd-channels:\s*(.+)$/m.exec(fm[1]);
  if (!m) return null;
  const valid: SkillTarget[] = ['claude-code', 'codex', 'opencode'];
  const list = m[1]
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter((s): s is SkillTarget => (valid as string[]).includes(s));
  return list.length > 0 ? list : null;
}

/**
 * The agent channels a skill can actually install into: its declared
 * `x-omd-channels` (if any), further narrowed to claude-code when the skill is
 * multi-file — scripts/references need the folder layout only `.claude` provides
 * (codex/opencode store a skill as a single flat .md). Used to keep target
 * resolution honest so we don't list channels a skill would just be skipped for.
 */
function skillSupportedChannels(packageRoot: string, skill: string): SkillTarget[] {
  const skillDir = join(packageRoot, 'skills', skill);
  let allowed: SkillTarget[] =
    parseSkillChannels(readFileSync(join(skillDir, 'SKILL.md'), 'utf8')) ??
    (['claude-code', 'codex', 'opencode'] as SkillTarget[]);
  const extras = readdirSync(skillDir).filter(
    (n) => n !== 'SKILL.md' && !IGNORED_SKILL_ENTRIES.has(n)
  );
  if (extras.length > 0) allowed = allowed.filter((c) => c === 'claude-code');
  return allowed;
}

function installOne(
  packageRoot: string,
  plan: InstallPlan,
  skill: string,
  force: boolean
): InstallResult {
  const skillDir = join(packageRoot, 'skills', skill);
  const src = readFileSync(join(skillDir, 'SKILL.md'), 'utf8');
  const managed = MANAGED_HEADER + '\n\n' + src;

  // Respect a skill's declared channel restriction (frontmatter `x-omd-channels:`).
  const channels = parseSkillChannels(src);
  if (channels && !channels.includes(plan.target)) {
    return {
      target: plan.target,
      skill,
      destPath: join(plan.destDir, skill + '.md'),
      status: 'skipped-incompat',
    };
  }

  // A skill is "multi-file" when it ships more than SKILL.md (scripts/, references/, …).
  const extras = readdirSync(skillDir).filter(
    (n) => n !== 'SKILL.md' && !IGNORED_SKILL_ENTRIES.has(n)
  );
  const isMultiFile = extras.length > 0;

  // Flat channels (codex/opencode) store a skill as a single <skill>.md and cannot
  // host a multi-file skill's scripts/references — such skills are claude-code only.
  if (plan.layout !== 'folder' && isMultiFile) {
    return {
      target: plan.target,
      skill,
      destPath: join(plan.destDir, skill + '.md'),
      status: 'skipped-incompat',
    };
  }

  const destPath =
    plan.layout === 'folder'
      ? join(plan.destDir, skill, 'SKILL.md')
      : join(plan.destDir, skill + '.md');

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  // Drift protection guards the user-editable SKILL.md. Single-file skills can
  // short-circuit on "unchanged"; multi-file skills always re-sync their tree.
  if (exists && existing === managed && !isMultiFile) {
    return { target: plan.target, skill, destPath, status: 'unchanged' };
  }
  if (exists && !existing.startsWith(MANAGED_HEADER) && !force) {
    return { target: plan.target, skill, destPath, status: 'skipped-drift' };
  }

  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, managed, 'utf8');

  // Copy the rest of the skill tree (scripts/, references/, …) for folder layout.
  if (plan.layout === 'folder' && isMultiFile) {
    const destSkillDir = join(plan.destDir, skill);
    for (const entry of extras) {
      cpSync(join(skillDir, entry), join(destSkillDir, entry), {
        recursive: true,
        filter: (s) => !/(\/__pycache__|\/\.runtime|\.pyc$|\.DS_Store$)/.test(s),
      });
    }
  }

  return {
    target: plan.target,
    skill,
    destPath,
    status: exists ? 'updated' : 'created',
  };
}

/** Install a hook script from package's .claude/hooks/ to project. */
function installHookFile(
  packageRoot: string,
  projectRoot: string,
  filename: string,
  force: boolean
): InstallResult {
  const target: SkillTarget = 'claude-code';
  const skillLabel = `hook:${filename}`;
  const srcPath = join(packageRoot, '.claude', 'hooks', filename);
  const destPath = join(projectRoot, '.claude', 'hooks', filename);

  if (!existsSync(srcPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  const src = readFileSync(srcPath, 'utf8');
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  if (exists && existing === src) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  if (exists && !force) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, src);
  return { target, skill: skillLabel, destPath, status: exists ? 'updated' : 'created' };
}

/**
 * Install / merge .claude/settings.json. We MERGE hooks (don't clobber user
 * customizations) by checking if the omd-managed `_doc` field is present.
 * Without --force, if a user-edited settings.json exists (no _doc field),
 * we skip with `skipped-drift`.
 */
function installSettingsJson(
  packageRoot: string,
  projectRoot: string,
  force: boolean
): InstallResult {
  const target: SkillTarget = 'claude-code';
  const skillLabel = 'settings:.claude/settings.json';
  const srcPath = join(packageRoot, '.claude', 'settings.json');
  const destPath = join(projectRoot, '.claude', 'settings.json');
  if (!existsSync(srcPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  const src = readFileSync(srcPath, 'utf8');
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  if (exists && existing === src) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  if (exists && !force) {
    // Check if it's the omd-managed version
    try {
      const parsed = JSON.parse(existing);
      if (typeof parsed._doc === 'string' && parsed._doc.includes('OmD')) {
        // managed — overwrite
      } else {
        return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
      }
    } catch {
      return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
    }
  }
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, src);
  return { target, skill: skillLabel, destPath, status: exists ? 'updated' : 'created' };
}

/**
 * Copy a read-only data asset (reference-fingerprints.json, vocabulary.json, …)
 * from the package's `data/` into the project's `.claude/data/` or `.codex/data/`.
 * The skill reads these at runtime — they replace the deprecated `omd init recommend` CLI.
 */
function installDataFile(
  packageRoot: string,
  projectRoot: string,
  channelDir: string,
  dataFilename: string,
  force: boolean
): InstallResult {
  const target: SkillTarget = channelDir === '.claude' ? 'claude-code' : 'codex';
  const skillLabel = `data:${dataFilename}`;

  const srcPath = join(packageRoot, 'data', dataFilename);
  const destPath = join(projectRoot, channelDir, 'data', dataFilename);

  if (!existsSync(srcPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }

  const src = readFileSync(srcPath, 'utf8');
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  // Data files are pure copies — no managed header (would corrupt JSON).
  if (exists && existing === src) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  if (exists && !force) {
    // Honor user customization unless --force
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }

  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, src, 'utf8');
  return {
    target,
    skill: skillLabel,
    destPath,
    status: exists ? 'updated' : 'created',
  };
}

/**
 * Generate a per-channel agent file from the canonical `agents/<name>.md`.
 *
 * Channel = 'claude' → emits `.claude/agents/<name>.md` (markdown w/ frontmatter)
 * Channel = 'codex'  → emits `.codex/agents/<name>.toml` (TOML pointer)
 */
function installAgentFile(
  packageRoot: string,
  projectRoot: string,
  channel: 'claude' | 'codex',
  filename: string,
  force: boolean
): InstallResult {
  const target: SkillTarget = channel === 'claude' ? 'claude-code' : 'codex';
  const skillLabel = `agent:${filename}`;

  const parsed = parseCanonicalAgent(packageRoot, filename);
  const rendered =
    channel === 'claude' ? renderClaudeAgent(parsed) : renderCodexAgent(parsed);

  const destFilename =
    channel === 'claude' ? filename : filename.replace(/\.md$/, '.toml');
  const destPath = join(
    projectRoot,
    channel === 'claude' ? '.claude' : '.codex',
    'agents',
    destFilename
  );

  // For Claude Code: managed marker is encoded as `omd_managed: true` INSIDE the
  // frontmatter (rendered above) — no HTML comment can precede `---` or the
  // subagent loader rejects the file.
  // For Codex: TOML allows leading comments, so `# omd:installed-agent ...` is fine.
  const managed =
    channel === 'claude'
      ? rendered
      : '# omd:installed-agent — generated from agents/' +
        filename +
        ' by `omd install-skills`. Do not edit; rerun the command to refresh.\n\n' +
        rendered;

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  if (exists && existing === managed) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }

  // Drift detection sentinels:
  //   Claude — look for `omd_managed: true` line inside frontmatter
  //   Codex  — look for `# omd:installed-agent` comment
  const isManaged =
    channel === 'claude'
      ? /\nomd_managed:\s*true\b/.test(existing)
      : existing.startsWith('# omd:installed-agent');

  if (exists && !isManaged && !force) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }

  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, managed, 'utf8');
  return {
    target,
    skill: skillLabel,
    destPath,
    status: exists ? 'updated' : 'created',
  };
}

const STATUS_LABEL: Record<InstallResult['status'], string> = {
  created: pc.green('created'),
  updated: pc.cyan('updated'),
  unchanged: pc.dim('unchanged'),
  'skipped-drift': pc.yellow('skipped'),
  'skipped-incompat': pc.yellow('skipped (claude-code only)'),
};

function autoDetectTargets(projectRoot: string): SkillTarget[] {
  const presence = detectInstalledAgents(projectRoot);
  const targets: SkillTarget[] = [];
  if (presence.claudeCode) targets.push('claude-code');
  if (presence.codex) targets.push('codex');
  if (presence.opencode) targets.push('opencode');
  // Cursor uses .mdc rules, not skills — installed via `omd sync`.
  if (targets.length === 0) {
    // Fallback: install for all three so user gets coverage even without
    // explicit signal. Idempotent so cost is low.
    return ['claude-code', 'codex', 'opencode'];
  }
  return targets;
}

export async function runInstallSkills(
  opts: InstallSkillsOptions = {}
): Promise<number> {
  const projectRoot = opts.dir ?? process.cwd();
  const packageRoot = findPackageRoot();
  if (!packageRoot) {
    console.error(pc.red('omd install-skills: package data not found'));
    return 1;
  }

  const allSkills = listShippedSkills(packageRoot);
  if (allSkills.length === 0) {
    console.error(pc.red('omd install-skills: no skills found in package'));
    return 1;
  }
  const allAgents = listCanonicalAgents(packageRoot);

  const force = opts.force ?? false;
  const minimal = opts.skillsOnly === true;
  // Install scope: 'project' (<cwd>/.claude/…) or 'global' (~/.claude/…). --global
  // forces it; otherwise the interactive TUI asks. Global writes skills + sub-agents
  // (+ data) to the user-level dir but never touches global hooks/settings.json.
  let scope: 'project' | 'global' = opts.global ? 'global' : 'project';

  p.intro(
    pc.bold('omd install-skills') +
      pc.dim(`  (${relative(process.cwd(), projectRoot) || '.'})`)
  );

  // Each dimension (scope / skills / sub-agents / channels) is resolved
  // independently: a CLI flag pins it; otherwise we prompt — but only when stdin
  // is a TTY and --all wasn't passed. This is the key fix: `--skills X` or
  // `--skills-only` no longer suppress the *channel* (where to install) prompt —
  // they only pin the dimension they name.
  const isTTY = Boolean(process.stdin.isTTY && process.stdout.isTTY);
  const interactive = isTTY && !opts.all;

  const detected = autoDetectTargets(projectRoot);
  // Real presence (not the all-3 fallback) — used for hint labels + prompt defaults.
  const presence = detectInstalledAgents(projectRoot);
  const actuallyDetected: SkillTarget[] = [
    presence.claudeCode ? 'claude-code' : null,
    presence.codex ? 'codex' : null,
    presence.opencode ? 'opencode' : null,
  ].filter((x): x is SkillTarget => x !== null);

  // --- Scope (project vs global) — --global pins it, else ask / default project.
  if (!opts.global && interactive) {
    const scopeResult = await p.select({
      message: 'Install scope · 어디에 설치할까요?',
      options: [
        { value: 'project', label: 'Project', hint: `${relative(process.cwd(), projectRoot) || '.'}/.claude/skills · 이 프로젝트만` },
        { value: 'global', label: 'Global', hint: '~/.claude/skills · 모든 프로젝트 (skills + sub-agents, hooks/settings 제외)' },
      ],
      initialValue: 'project',
    });
    if (p.isCancel(scopeResult)) { p.cancel('Install cancelled.'); return 130; }
    scope = scopeResult as 'project' | 'global';
  }

  // --- Skills — --skills pins it, else ask / default ALL.
  let skills: string[];
  if (opts.skillsFilter) {
    skills = allSkills.filter((s) => opts.skillsFilter!.includes(s));
  } else if (interactive) {
    const skillResult = await p.multiselect({
      message: 'Skills · space = 토글 · a = 전체 · enter = 확인 (default ALL)',
      options: allSkills.map((s) => ({ value: s, label: s, hint: 'omd skill' })),
      initialValues: allSkills,
      required: true,
    });
    if (p.isCancel(skillResult)) { p.cancel('Install cancelled.'); return 130; }
    skills = skillResult as string[];
  } else {
    skills = allSkills;
  }

  // --- Sub-agents — dropped by --skills-only, else --agents pins, else ask / ALL.
  let canonicalAgents: string[];
  if (minimal) {
    canonicalAgents = [];
  } else if (opts.agentsFilter) {
    canonicalAgents = allAgents.filter((a) => opts.agentsFilter!.includes(a.replace(/\.md$/, '')));
  } else if (interactive && allAgents.length > 0) {
    const agentResult = await p.multiselect({
      message: 'Sub-agents · space = 토글 · a = 전체 · enter = 확인 (default ALL)',
      options: allAgents.map((a) => ({ value: a, label: a.replace(/\.md$/, ''), hint: 'subagent' })),
      initialValues: allAgents,
      required: false,
    });
    if (p.isCancel(agentResult)) { p.cancel('Install cancelled.'); return 130; }
    canonicalAgents = agentResult as string[];
  } else {
    canonicalAgents = allAgents;
  }

  // --- Channels / targets — the "where do I install" choice.
  // --agent pins it. Otherwise, in a TTY we ASK — limited to the channels the
  // selected skills actually support (claude-design is claude-code only, so its
  // picker shows just Claude Code). Non-TTY / --all falls back to auto-resolution.
  const supportedTargets = ((): SkillTarget[] => {
    const set = new Set<SkillTarget>(skills.flatMap((s) => skillSupportedChannels(packageRoot, s)));
    return (['claude-code', 'codex', 'opencode'] as SkillTarget[]).filter((t) => set.has(t));
  })();
  const channelLabel: Record<SkillTarget, string> = {
    'claude-code': 'Claude Code',
    codex: 'Codex',
    opencode: 'OpenCode',
  };
  const channelDir: Record<SkillTarget, string> = {
    'claude-code': '.claude',
    codex: '.codex',
    opencode: '.opencode',
  };
  let targets: SkillTarget[];
  if (opts.agents) {
    targets = opts.agents;
  } else if (interactive) {
    const defaults = actuallyDetected.filter((t) => supportedTargets.includes(t));
    const targetResult = await p.multiselect({
      message: 'Agent channels · 어디에 설치할까요? · space = 토글 · enter = 확인',
      options: supportedTargets.map((t) => ({
        value: t,
        label: channelLabel[t],
        hint: actuallyDetected.includes(t) ? `${channelDir[t]}/ detected` : '',
      })) as { value: SkillTarget; label: string; hint?: string }[],
      initialValues: defaults.length > 0 ? defaults : supportedTargets,
      required: true,
    });
    if (p.isCancel(targetResult)) { p.cancel('Install cancelled.'); return 130; }
    targets = targetResult as SkillTarget[];
  } else {
    // Non-interactive (CI / piped / --all): resolve from flags + detection,
    // narrowed to channels the selected skills support.
    targets = opts.all
      ? (['claude-code', 'codex', 'opencode'] as SkillTarget[])
      : minimal
        ? (actuallyDetected.length > 0 ? actuallyDetected : (['claude-code'] as SkillTarget[]))
        : detected;
    const narrowed = targets.filter((t) => supportedTargets.includes(t));
    if (narrowed.length > 0) targets = narrowed;
  }

  // Global scope roots everything at the home dir, so plan dirs resolve to
  // ~/.claude/skills, ~/.claude/agents, etc. Project scope uses cwd (or --dir).
  const installRoot = scope === 'global' ? homedir() : projectRoot;
  const plans = targets.map((t) => planForTarget(installRoot, t));

  p.log.message(
    pc.bold('Scope: ') +
      pc.cyan(scope) +
      pc.dim(scope === 'global' ? '  (~/.claude)' : `  (${relative(process.cwd(), projectRoot) || '.'})`)
  );
  p.log.message(
    pc.bold(`Skills (${skills.length}): `) +
      skills.map((s) => pc.cyan(s)).join(', ')
  );
  if (minimal) {
    // --skills-only: sub-agents are intentionally skipped (minimal single-skill
    // install). Clear BEFORE the summary so we never print agents we won't write.
    canonicalAgents = [];
    p.log.message(pc.bold('Agents: ') + pc.dim('skipped (--skills-only)'));
  } else if (canonicalAgents.length > 0) {
    p.log.message(
      pc.bold(`Agents (${canonicalAgents.length}): `) +
        canonicalAgents.map((a) => pc.cyan(a.replace(/\.md$/, ''))).join(', ')
    );
  }
  p.log.message(
    pc.bold('Targets: ') + targets.map((t) => pc.cyan(t)).join(', ')
  );

  const results: InstallResult[] = [];
  for (const plan of plans) {
    for (const skill of skills) {
      results.push(installOne(packageRoot, plan, skill, force));
    }
  }

  // Generate per-channel sub-agent definitions from the canonical `agents/`.
  // This is the v2 portable source-of-truth pattern (oh-my-agent style).
  // `canonicalAgents` is already resolved above by the TUI / --agents filter.
  for (const target of targets) {
    if (target === 'claude-code') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, installRoot, 'claude', filename, force));
      }
    } else if (target === 'codex') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, installRoot, 'codex', filename, force));
      }
    }
    // OpenCode currently has no agent-definition channel — skills only.
  }

  if (!minimal) {
  // Ship the read-only data assets (reference fingerprints, controlled vocab,
  // human-readable tag matrix, opt-out corpus) so skills + hooks can run entirely
  // on the host CLI's own model — no external API keys.
  const dataFiles = [
    'reference-fingerprints.json',
    'reference-tags.md',
    'vocabulary.json',
    'synonyms.json',
    'opt-out-corpus.json',
  ];
  for (const target of targets) {
    if (target === 'claude-code') {
      for (const dataFile of dataFiles) {
        results.push(installDataFile(packageRoot, installRoot, '.claude', dataFile, force));
      }
    } else if (target === 'codex') {
      for (const dataFile of dataFiles) {
        results.push(installDataFile(packageRoot, installRoot, '.codex', dataFile, force));
      }
    }
  }

  // Hooks + settings.json are PROJECT-SCOPED only — a global install must not
  // mutate the user's global Claude config / make hooks fire in every project.
  if (scope === 'project' && targets.includes('claude-code')) {
    for (const hookFile of [
      'skill-activation.cjs',
      'session-state-loader.cjs',
      'post-edit-watch.cjs',
      'session-end-foldin.cjs',
    ]) {
      results.push(installHookFile(packageRoot, installRoot, hookFile, force));
    }
    // settings.json (with merge, never clobber user)
    results.push(installSettingsJson(packageRoot, installRoot, force));
  }
  } // !minimal — skills-only skips data files, hooks, and settings.json

  p.log.message(pc.bold('\nResults:'));
  for (const r of results) {
    const rel = relative(installRoot, r.destPath);
    p.log.message(
      `  ${STATUS_LABEL[r.status]}  ${pc.dim(r.target.padEnd(12))} ${rel}`
    );
  }

  const driftCount = results.filter((r) => r.status === 'skipped-drift').length;
  const writtenCount = results.filter(
    (r) => r.status === 'created' || r.status === 'updated'
  ).length;

  if (driftCount > 0) {
    p.outro(
      pc.yellow(
        `${writtenCount} written, ${driftCount} skipped (existing files lack the omd marker — rerun with --force to overwrite).`
      )
    );
    return 0;
  }

  // Minimal single-skill install (--skills-only): no omd onboarding, no agents/hooks.
  // Ideal for shipping a standalone skill (e.g. claude-design) to people who don't
  // want the rest of the omd toolchain.
  if (minimal) {
    for (const r of results.filter((x) => x.status === 'skipped-incompat')) {
      p.log.warn(
        `${pc.bold(r.skill)} ${pc.dim('skipped for ')}${pc.cyan(r.target)}${pc.dim(' — declares x-omd-channels (channel not supported).')}`
      );
    }
    const installed = results.filter(
      (r) => r.status === 'created' || r.status === 'updated'
    );
    if (installed.length === 0) {
      p.outro(pc.yellow('Nothing installed — no compatible skill/channel match.'));
      return 0;
    }
    p.outro(
      pc.green(
        `Done. Installed ${skills.map((s) => pc.bold(s)).join(', ')} ${scope === 'global' ? 'globally (~/.claude/skills)' : `for ${targets.join(', ')}`}.`
      ) +
        pc.dim('  →  restart your agent, then use the skill (e.g. ') +
        pc.cyan('/claude-design') +
        pc.dim(').')
    );
    return 0;
  }

  // Friendly next-step nudge after successful install.
  // The first prompt is kept identical to the README's "Your first 60 seconds"
  // block so the README, the terminal, and the postinstall message all teach
  // the same activation moment. Bilingual (EN + KR) so an English reader is not
  // handed a Korean-only outro.
  const nextSteps = [
    `${pc.bold('Restart your agent, then type your first prompt:')}`,
    '',
    `  ${pc.cyan('EN')}  ${pc.dim('Set up our design system — Toss-style, for a family meal-tracking app.')}`,
    `  ${pc.cyan('KR')}  ${pc.dim('토스 스타일로 가족 식단 공유 앱 디자인 시스템 잡아줘')}`,
    '',
    `${pc.dim('Your agent runs omd:init and writes DESIGN.md. Then build against it:')}`,
    `  ${pc.cyan('EN')}  ${pc.dim('Design the home screen.')}   ${pc.cyan('KR')}  ${pc.dim('홈 화면 디자인해줘')}`,
    '',
    `${pc.dim('Full walkthrough → "Your first 60 seconds" in the README. Routing is automatic — no slash command needed.')}`,
    `${pc.dim('Power user: ')}${pc.cyan('/omd-harness <task>')}${pc.dim(' — jump straight into the pipeline.')}`,
    '',
    `${pc.yellow('⚠ Already-running session?')} ${pc.dim('Run `/agents` to reload — or quit (Cmd+Q on macOS) and relaunch. Without reload, hooks/agents do not load.')}`,
  ].join('\n');
  p.note(nextSteps, 'Next');

  // Counts derived from what was actually resolved/installed — never hardcoded,
  // so the outro can't drift from the real skill/agent/hook set (or the README).
  const hookCount = scope === 'project' && targets.includes('claude-code') ? 4 : 0;
  p.outro(
    pc.green(
      `Done. ${skills.length} skills · ${canonicalAgents.length} sub-agents · ${hookCount} hooks installed (${writtenCount} files)${scope === 'global' ? ' globally (~/.claude)' : ''}.`,
    ),
  );
  return 0;
}

