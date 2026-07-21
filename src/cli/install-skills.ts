import * as p from '@clack/prompts';
import pc from 'picocolors';
import {
  readFileSync,
  readdirSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  cpSync,
  rmSync,
  rmdirSync,
  statSync,
  renameSync,
} from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { homedir } from 'node:os';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { detectInstalledAgents } from '../core/agent-detect.js';
import {
  CLAUDE_HOOK_PATHS,
  isKnownLegacyHook,
  isSelfConsistentManagedHook,
  renderManagedHook,
} from './hook-contract.js';
import { unsafeManagedPath } from './install-path.js';

export type SkillTarget = 'claude-code' | 'codex' | 'opencode' | 'cursor';

const VALID_SKILL_TARGETS = ['claude-code', 'codex', 'opencode', 'cursor'] as const;
const DEVELOPMENT_ONLY_SKILLS = new Set(['omd-lab-02-design-harness']);

export function targetsAvailableForScope(
  targets: SkillTarget[],
  scope: 'project' | 'global',
): SkillTarget[] {
  return scope === 'global' ? targets.filter((target) => target !== 'cursor') : targets;
}

/** Channels that host SKILL.md trees. Cursor is NOT one — it consumes a
 *  `.cursor/rules` shim + the shared `.claude/data` catalog (issue #20). */
type SkillChannel = Exclude<SkillTarget, 'cursor'>;

export interface InstallSkillsOptions {
  dir?: string;
  agents?: SkillTarget[];
  force?: boolean;
  /** Refresh the project-scoped Claude hook bundle without granting permission
   *  to overwrite any other unmarked user files. Intended for `omd doctor`
   *  repairs when a hook is stale or locally modified. */
  repairHooks?: boolean;
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
  /** Install to each channel's user-level directory instead of this project
   *  (`~/.claude`, `~/.agents` + `~/.codex`, or `~/.config/opencode`).
   *  Writes skills + sub-agents (+ data); never touches global hooks/settings.
   *  When unset and interactive, the TUI asks project-vs-global. */
  global?: boolean;
}

interface InstallPlan {
  target: SkillChannel;
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
    .filter(
      (name) =>
        !DEVELOPMENT_ONLY_SKILLS.has(name) &&
        existsSync(join(skillsDir, name, 'SKILL.md')),
    )
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
    if (!m) return '';
    const value = m[1].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      try {
        const decoded: unknown = JSON.parse(value);
        if (typeof decoded === 'string') return decoded;
      } catch {
        // Fall through to the conservative scalar handling below. The generated
        // channel file will still be valid even if a hand-edited description has
        // malformed escaping in the canonical YAML.
      }
    }
    if (value.startsWith("'") && value.endsWith("'")) {
      return value.slice(1, -1).replace(/''/g, "'");
    }
    return value;
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

/** Render a canonical agent as a Claude Code subagent file.
 *  IMPORTANT: Claude Code's subagent parser requires YAML frontmatter (`---`)
 *  as the FIRST line of the file. Any preceding content (HTML comments, blank
 *  lines) breaks discovery. So we encode the managed-by-omd marker as a
 *  custom frontmatter field (`omd_managed: true`) instead of an HTML comment.
 */
function renderClaudeAgent(a: ParsedAgent): string {
  const fm = [
    '---',
    `name: ${JSON.stringify(a.name)}`,
    `description: ${JSON.stringify(a.description)}`,
    `tools: ${JSON.stringify(a.tools)}`,
    `model: ${JSON.stringify(a.model)}`,
    `omd_managed: true`,
    '---',
    '',
  ].join('\n');
  return fm + a.body;
}

type NativeAgentChannel = 'codex' | 'opencode';

/**
 * Canonical roles are authored once and historically used Claude Code paths and
 * tool names.  A generated non-Claude role must be executable using only the
 * channel it was installed for: otherwise a perfectly healthy Codex/OpenCode
 * install tells the agent to read a sibling `.claude/skills` tree that does not
 * exist in a single-channel project.
 */
function nativeAgentBody(
  body: string,
  channel: NativeAgentChannel,
  scope: 'project' | 'global',
): string {
  const skillRoot = channel === 'codex'
    ? scope === 'global' ? '~/.agents/skills' : '.agents/skills'
    : scope === 'global' ? '~/.config/opencode/skills' : '.opencode/skills';

  const nativeBody = body
    .replace(/(?:~\/)?\.claude\/skills\//g, `${skillRoot}/`)
    .replace(/You are spawned as a Claude Code subagent/g, 'You run as a host-managed subagent')
    .replace(/Claude Code subagent/g, 'host-managed subagent')
    .replace(/the Agent tool/g, "the host's native sub-agent mechanism")
    .replace(/Agent tool/g, 'host-native sub-agent mechanism')
    .replace(/AskUserQuestion-compatible/g, 'host question-interface compatible')
    .replace(
      /launcher calls AskUserQuestion\(questions_file\)/g,
      'launcher presents questions from `questions_file` to the user',
    )
    .replace(/launcher calls AskUserQuestion/g, 'launcher presents the questions to the user')
    .replace(/no AskUserQuestion/g, 'without direct user-question tools');
  return channel === 'opencode'
    ? nativeBody.replace(/\bomd:([a-z0-9-]+)/g, 'omd-$1')
    : nativeBody;
}

function nativeSkillRoot(
  channel: NativeAgentChannel,
  scope: 'project' | 'global',
): string {
  if (channel === 'codex') {
    return scope === 'global' ? '~/.agents/skills' : '.agents/skills';
  }
  return scope === 'global' ? '~/.config/opencode/skills' : '.opencode/skills';
}

/** OpenCode uses Markdown agents whose id is the filename. */
function renderOpenCodeAgent(
  a: ParsedAgent,
  scope: 'project' | 'global',
  dataRoot: string,
): string {
  const skillRoot = nativeSkillRoot('opencode', scope);
  return [
    '---',
    `description: ${JSON.stringify(a.description)}`,
    'mode: subagent',
    '---',
    '',
    '## Installed role runtime contract',
    '',
    `- Resolve referenced OmD skills from \`${skillRoot}/<skill>/SKILL.md\`.`,
    `- Resolve the installed offline catalog from \`${dataRoot}\`.`,
    "- Use OpenCode's native sub-agent mechanism for specialist handoffs.",
    '',
    nativeAgentBody(a.body, 'opencode', scope).trimEnd(),
    '',
    '<!-- omd:installed-agent — generated from the canonical OmD role. -->',
    '',
  ].join('\n');
}

/**
 * Canonical agents predate the skill-only CLI and a few bodies still describe
 * retired shell helpers. Codex receives the full role body, but those obsolete
 * invocations must not be executable instructions in the generated agent.
 */
function codexSafeAgentBody(body: string): string {
  return body
    .replace(/`omd init prepare`/g, '`omd:init` skill flow')
    .replace(/^omd remember .*$/gm, 'Use the `omd:remember` skill directly with the same finding and context.')
    .replace(/`omd remember [^`]+`/g, 'the `omd:remember` skill with the same correction details')
    .replace(/\bomd remember\b/g, 'omd:remember skill');
}

/** Render a canonical agent as a self-contained Codex TOML definition. */
function renderCodexAgent(
  a: ParsedAgent,
  scope: 'project' | 'global',
  dataRoot: string,
): string {
  const name = a.name.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const desc = a.description.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const skillRoot = nativeSkillRoot('codex', scope);
  const instructions = [
    '## Codex runtime contract',
    '',
    '- Execute the OmD behavior directly from these instructions and the installed skills.',
    `- Resolve referenced OmD skills from \`${skillRoot}/<skill>/SKILL.md\`.`,
    `- Resolve the installed offline catalog from \`${dataRoot}\`.`,
    "- Use Codex's native sub-agent mechanism for specialist handoffs.",
    '- The OmD CLI exposes installation and diagnostics only. Do not invent or invoke removed helper subcommands.',
    '',
    codexSafeAgentBody(nativeAgentBody(a.body, 'codex', scope)).trimEnd(),
  ].join('\n');
  if (instructions.includes("'''")) {
    throw new Error(`agents/${a.name}.md: cannot encode triple single quote in Codex TOML`);
  }
  return [
    `name = "${name}"`,
    `description = "${desc}"`,
    '',
    `developer_instructions = '''`,
    instructions,
    `'''`,
    '',
  ].join('\n');
}

function planForTarget(
  projectRoot: string,
  target: SkillChannel,
  scope: 'project' | 'global',
): InstallPlan {
  switch (target) {
    case 'claude-code':
      return {
        target,
        destDir: join(projectRoot, '.claude', 'skills'),
        layout: 'folder',
      };
    case 'codex':
      // Official Codex skill discovery path is `.agents/skills/<name>/SKILL.md`
      // (developers.openai.com/codex/skills) — NOT `.codex/skills`. Folder layout
      // so multi-file skills (scripts/, references/) install + run.
      return {
        target,
        destDir: join(projectRoot, '.agents', 'skills'),
        layout: 'folder',
      };
    case 'opencode':
      // OpenCode loads project skills from `.opencode/skills/<name>/SKILL.md`
      // and global skills from `~/.config/opencode/skills/<name>/SKILL.md`.
      return {
        target,
        destDir: scope === 'global'
          ? join(projectRoot, '.config', 'opencode', 'skills')
          : join(projectRoot, '.opencode', 'skills'),
        layout: 'folder',
      };
  }
}

/**
 * Channel → shared data dir (`<dir>/data/…`) for read-only data assets
 * (catalog JSONs, reference DESIGN.md catalog, ctx-prime helper scripts).
 * Single lookup table replacing the repeated if-else/ternary chains (issue #28).
 * `null` = the channel hosts no data dir of its own:
 *   - cursor reads the SHARED `.claude/data` path (issue #20) — resolved by
 *     `dataDirFor()` below, which also applies the claude-code dedup guard.
 *     (Helper scripts intentionally stay skill-channel-only — a cursor-only
 *     install gets the catalog + JSONs but no ctx-prime, matching the shim's scope.)
 */
type DataChannelDir = '.claude' | '.codex' | '.opencode' | '.config/opencode';

const CHANNEL_DATA_DIRS: Record<SkillTarget, DataChannelDir | null> = {
  'claude-code': '.claude',
  codex: '.codex',
  opencode: '.opencode',
  cursor: null,
};

/**
 * Where a target's data assets (data JSONs + reference catalog) land. Cursor
 * reuses `.claude/data` so the catalog location stays single (issue #20) —
 * but ONLY when claude-code isn't also selected: the claude-code pass already
 * writes there, and a second pass would double-copy the catalog.
 */
export function dataDirFor(
  target: SkillTarget,
  targets: SkillTarget[]
): DataChannelDir | null {
  if (target === 'cursor') {
    return targets.includes('claude-code') ? null : '.claude';
  }
  return CHANNEL_DATA_DIRS[target];
}

function dataDirForScope(
  target: SkillTarget,
  targets: SkillTarget[],
  scope: 'project' | 'global',
): DataChannelDir | null {
  if (scope === 'global' && target === 'opencode') return '.config/opencode';
  return dataDirFor(target, targets);
}

const MANAGED_HEADER =
  '<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->';

// Substring shared by old (line 1) and new (after-frontmatter) marker formats.
// Used for detection so upgrades from pre-v1.7.2 installs still refresh.
const MANAGED_MARKER_SUBSTR = 'omd:installed-skill';

/**
 * Write the managed marker AFTER the YAML frontmatter block so the very first
 * line of the installed file is `---`. Claude Code's skill loader reads the
 * frontmatter `name`/`description` only when `---` is line 1 — a leading HTML
 * comment makes it register the comment as the description (issue #17).
 *
 * If the source has no frontmatter (shouldn't happen for SKILL.md, but be
 * defensive), fall back to prepending the marker.
 */
function withManagedMarker(src: string): string {
  // \r?\n: a CRLF checkout (Windows core.autocrlf) must not miss the
  // frontmatter and fall back to a line-1 marker — that reintroduces #17.
  const fm = /^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/.exec(src);
  if (!fm) {
    return MANAGED_HEADER + '\n\n' + src;
  }
  return fm[1] + MANAGED_HEADER + '\n\n' + fm[2];
}

/**
 * Detect an omd-managed installed-skill file. Matches both the new format
 * (marker after frontmatter) and the legacy format (marker on line 1) by
 * scanning the first ~30 lines for the marker substring. This keeps upgrades
 * working: a pre-v1.7.2 file with the marker at line 1 is still recognized as
 * managed and gets refreshed rather than skipped as user-edited drift.
 */
function isManagedSkillFile(content: string): boolean {
  if (!content) return false;
  const head = content.split('\n', 30).join('\n');
  return head.includes(MANAGED_MARKER_SUBSTR);
}

function withGlobalDataHint(src: string, globalDataRoot: string | null): string {
  if (!globalDataRoot) return src;
  const hint = [
    `> **Installed global data root (highest priority):** \`${globalDataRoot}\`.`,
    '> Resolve catalog JSON, references, and helper scripts there before project-relative fallbacks.',
    '',
  ].join('\n');
  const fm = /^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/.exec(src);
  return fm ? fm[1] + hint + fm[2] : hint + src;
}

function renderSkillForChannel(
  src: string,
  folderName: string,
  target: SkillChannel,
): string {
  // Canonical skill sources may use either the repository's historical
  // namespaced form (`omd:apply`) or portable Agent Skills hyphen-case
  // (`omd-apply`). Always derive the installed name from the folder so every
  // channel gets the contract it actually accepts.
  const installedName = target === 'opencode'
    ? folderName
    : folderName.replace(/^omd-/, 'omd:');
  const rendered = src.replace(
    /^name:\s*[^\r\n]+$/m,
    `name: ${installedName}`,
  );
  return target === 'opencode'
    ? rendered.replace(/\bomd:([a-z0-9][a-z0-9-]*)\b/g, 'omd-$1')
    : rendered;
}

interface InstallResult {
  target: SkillTarget;
  skill: string;
  destPath: string;
  status: 'created' | 'updated' | 'removed' | 'unchanged' | 'skipped-drift' | 'skipped-incompat';
  reason?: 'unsafe-path';
}

/**
 * Codex used `.codex/skills` before the official cross-agent skill path settled
 * on `.agents/skills`. Current Codex still scans the legacy tree, so an old
 * marker-first SKILL.md can produce loader errors even after the new copy is
 * healthy. Remove only OmD-owned legacy entrypoints; preserve user files and
 * every sidecar in the directory.
 */
function removeManagedLegacyCodexSkills(root: string): InstallResult[] {
  const legacyRoot = join(root, '.codex', 'skills');
  if (!existsSync(legacyRoot)) return [];
  const results: InstallResult[] = [];
  for (const entry of readdirSync(legacyRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const skillPath = join(legacyRoot, entry.name, 'SKILL.md');
    if (!existsSync(skillPath)) continue;
    const content = readFileSync(skillPath, 'utf8');
    if (!isManagedSkillFile(content)) continue;
    rmSync(skillPath, { force: true });
    const dir = dirname(skillPath);
    if (readdirSync(dir).length === 0) rmdirSync(dir);
    results.push({
      target: 'codex',
      skill: `legacy-skill:${entry.name}`,
      destPath: skillPath,
      status: 'removed',
    });
  }
  return results;
}

// Skill-tree entries that must never be installed (runtime state, caches, OS cruft).
const IGNORED_SKILL_ENTRIES = new Set(['.runtime', '__pycache__', '.DS_Store']);

function isIgnoredSkillTreeEntry(name: string): boolean {
  return IGNORED_SKILL_ENTRIES.has(name) || name.endsWith('.pyc');
}

/** Compare only package-owned entries. Destination-only sidecars are user
 * content and deliberately do not make an otherwise current install dirty. */
function shippedSkillTreeMatches(sourceDir: string, destinationDir: string): boolean {
  if (!existsSync(destinationDir)) return false;
  for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
    if (entry.name === 'SKILL.md' || isIgnoredSkillTreeEntry(entry.name)) continue;
    const source = join(sourceDir, entry.name);
    const destination = join(destinationDir, entry.name);
    if (!existsSync(destination)) return false;
    try {
      const destinationStat = statSync(destination);
      if (entry.isDirectory()) {
        if (!destinationStat.isDirectory() || !shippedSkillTreeMatches(source, destination)) {
          return false;
        }
      } else if (
        !destinationStat.isFile() ||
        !readFileSync(source).equals(readFileSync(destination))
      ) {
        return false;
      }
    } catch {
      return false;
    }
  }
  return true;
}

/**
 * A skill may restrict itself to specific agent channels via a frontmatter line
 * `x-omd-channels: claude-code` (comma/space separated). Returns the allowed
 * channels, or null when channel-agnostic (installs anywhere). Used by skills that
 * depend on a particular agent runtime — e.g. claude-design needs Claude Code's
 * claude-in-chrome MCP + Bash/python/node and is therefore claude-code only.
 */
function parseSkillChannels(skillMd: string): SkillChannel[] | null {
  const fm = /^---\n([\s\S]*?)\n---/.exec(skillMd);
  if (!fm) return null;
  const m = /^x-omd-channels:\s*(.+)$/m.exec(fm[1]);
  if (!m) return null;
  const valid: SkillChannel[] = ['claude-code', 'codex', 'opencode'];
  const list = m[1]
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter((s): s is SkillChannel => (valid as string[]).includes(s));
  return list.length > 0 ? list : null;
}

/**
 * The agent channels a skill can install into: its declared `x-omd-channels`
 * (if any), else all channels. All three channels now use folder layout
 * (.claude/skills, .agents/skills, .opencode/skills) so multi-file skills with
 * scripts/references install everywhere — the only restriction is what the skill
 * itself declares (e.g. claude-design needs a browser-driving runtime).
 */
function skillSupportedChannels(packageRoot: string, skill: string): SkillChannel[] {
  return (
    parseSkillChannels(readFileSync(join(packageRoot, 'skills', skill, 'SKILL.md'), 'utf8')) ??
    (['claude-code', 'codex', 'opencode'] as SkillChannel[])
  );
}

function installOne(
  packageRoot: string,
  installRoot: string,
  plan: InstallPlan,
  skill: string,
  force: boolean,
  globalDataRoot: string | null,
): InstallResult {
  const skillDir = join(packageRoot, 'skills', skill);
  const src = readFileSync(join(skillDir, 'SKILL.md'), 'utf8');
  // Project installs keep the canonical cross-channel fallback order intact.
  // Global installs need one absolute, machine-local root because their skills
  // execute from arbitrary project working directories.
  const channelSrc = withGlobalDataHint(
    renderSkillForChannel(src, skill, plan.target),
    globalDataRoot,
  );
  // Marker goes AFTER frontmatter so `---` stays line 1 (issue #17).
  const managed = withManagedMarker(channelSrc);

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

  // Retained for compatibility with any future flat-layout channel. All current
  // skill channels use folder layout and therefore keep scripts/references.
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

  if (unsafeManagedPath(installRoot, destPath)) {
    return { target: plan.target, skill, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  // Drift protection guards the user-editable SKILL.md. Multi-file skills also
  // compare every shipped sidecar, while ignoring destination-only user files.
  // This keeps a second install genuinely idempotent without hiding stale tools.
  if (exists && existing === managed) {
    const extrasCurrent = !isMultiFile || shippedSkillTreeMatches(
      skillDir,
      join(plan.destDir, skill),
    );
    if (extrasCurrent) {
      return { target: plan.target, skill, destPath, status: 'unchanged' };
    }
  }
  // Drift = a file we didn't write. Detect the marker anywhere in the head
  // (new after-frontmatter position OR legacy line-1 position) so pre-v1.7.2
  // installs are recognized as managed and refreshed, not skipped.
  if (exists && !isManagedSkillFile(existing) && !force) {
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
  filename: (typeof CLAUDE_HOOK_PATHS)[number],
  force: boolean
): InstallResult {
  const target: SkillTarget = 'claude-code';
  const skillLabel = `hook:${filename}`;
  const srcPath = join(packageRoot, '.claude', 'hooks', filename);
  const destPath = join(projectRoot, '.claude', 'hooks', filename);

  if (!existsSync(srcPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  if (unsafeManagedPath(projectRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }
  const src = readFileSync(srcPath, 'utf8');
  const managed = renderManagedHook(src);
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  if (exists && existing === managed) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  if (
    exists &&
    !force &&
    !isSelfConsistentManagedHook(existing) &&
    !isKnownLegacyHook(filename, existing)
  ) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  mkdirSync(dirname(destPath), { recursive: true });
  const tempPath = `${destPath}.omd-${process.pid}-${Date.now()}.tmp`;
  try {
    writeFileSync(tempPath, managed, { encoding: 'utf8', flag: 'wx' });
    renameSync(tempPath, destPath);
  } catch (error) {
    rmSync(tempPath, { force: true });
    throw error;
  }
  return { target, skill: skillLabel, destPath, status: exists ? 'updated' : 'created' };
}

type JsonObject = Record<string, unknown>;

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseJsonObject(value: string): JsonObject | null {
  try {
    const parsed: unknown = JSON.parse(value);
    return isJsonObject(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function isOmdHook(value: unknown): boolean {
  if (!isJsonObject(value) || typeof value.command !== 'string') return false;
  const command = value.command;
  const ownedHookPaths = [
    '${CLAUDE_PROJECT_DIR}/.claude/hooks/skill-activation.cjs',
    '${CLAUDE_PROJECT_DIR}/.claude/hooks/session-state-loader.cjs',
    '${CLAUDE_PROJECT_DIR}/.claude/hooks/post-edit-watch.cjs',
    '${CLAUDE_PROJECT_DIR}/.claude/hooks/session-end-foldin.cjs',
    // Pre-v1.8 installs briefly registered this repository-only helper.
    '${CLAUDE_PROJECT_DIR}/scripts/context_restore.sh',
  ];
  return ownedHookPaths.some((path) => command.includes(path));
}

const REPOSITORY_ONLY_CONTEXT_RESTORE_COMMAND =
  'bash ${CLAUDE_PROJECT_DIR}/scripts/context_restore.sh';

/**
 * This hook belongs to the oh-my-design repository continuity protocol. The
 * npm package does not ship scripts/context_restore.sh, so it must never be
 * copied into a consumer project from the repository's source settings.
 */
function isRepositoryOnlySourceHook(value: unknown): boolean {
  return isJsonObject(value) &&
    typeof value.command === 'string' &&
    value.command === REPOSITORY_ONLY_CONTEXT_RESTORE_COMMAND;
}

function stripHookEntries(
  groups: unknown[],
  shouldStrip: (hook: unknown) => boolean,
): unknown[] {
  const retained: unknown[] = [];
  for (const group of groups) {
    if (!isJsonObject(group) || !Array.isArray(group.hooks)) {
      retained.push(group);
      continue;
    }
    const hooks = group.hooks.filter((hook) => !shouldStrip(hook));
    if (hooks.length > 0) retained.push({ ...group, hooks });
  }
  return retained;
}

/** Remove only OmD command entries while preserving user hooks in the same group. */
function stripInstalledOmdHooks(groups: unknown[]): unknown[] {
  return stripHookEntries(groups, isOmdHook);
}

/** Remove repository-only hooks from the package settings template. */
function stripRepositoryOnlySourceHooks(source: JsonObject): JsonObject {
  if (!isJsonObject(source.hooks)) return source;
  const hooks: JsonObject = {};
  for (const [event, groups] of Object.entries(source.hooks)) {
    hooks[event] = Array.isArray(groups)
      ? stripHookEntries(groups, isRepositoryOnlySourceHook)
      : groups;
  }
  return { ...source, hooks };
}

/** Merge OmD hook groups into a user's settings without replacing other keys/hooks. */
function mergeClaudeSettings(existing: JsonObject, source: JsonObject): JsonObject {
  const installableSource = stripRepositoryOnlySourceHooks(source);
  const existingHooks = isJsonObject(existing.hooks) ? existing.hooks : {};
  const sourceHooks = isJsonObject(installableSource.hooks) ? installableSource.hooks : {};
  const mergedHooks: JsonObject = { ...existingHooks };

  for (const event of new Set([...Object.keys(existingHooks), ...Object.keys(sourceHooks)])) {
    const userGroups = Array.isArray(existingHooks[event]) ? existingHooks[event] : [];
    const omdGroups = Array.isArray(sourceHooks[event]) ? sourceHooks[event] : [];
    mergedHooks[event] = [...stripInstalledOmdHooks(userGroups), ...omdGroups];
  }

  // Existing user settings win for every non-hook key. The source supplies
  // schema/metadata only when the user did not already define them.
  return { ...installableSource, ...existing, hooks: mergedHooks };
}

/** Install .claude/settings.json via a structural, user-preserving hook merge. */
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
  if (unsafeManagedPath(projectRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }
  const src = readFileSync(srcPath, 'utf8');
  const sourceSettings = parseJsonObject(src);
  if (!sourceSettings) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  const existingSettings = exists ? parseJsonObject(existing) : {};
  if (exists && !existingSettings && !force) {
    // Invalid JSON cannot be merged safely. --force remains the explicit escape hatch.
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  const merged = existingSettings
    ? mergeClaudeSettings(existingSettings, sourceSettings)
    : stripRepositoryOnlySourceHooks(sourceSettings);
  if (exists && existingSettings && JSON.stringify(existingSettings) === JSON.stringify(merged)) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
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
  _force: boolean,
  // Cursor reuses the `.claude` data dir (single catalog path) — callers pass
  // an explicit target so the results table reports the real channel.
  target: SkillTarget
): InstallResult {
  const skillLabel = `data:${dataFilename}`;

  const srcPath = join(packageRoot, 'data', dataFilename);
  const destPath = join(projectRoot, channelDir, 'data', dataFilename);

  if (!existsSync(srcPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  if (unsafeManagedPath(projectRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }

  const src = readFileSync(srcPath, 'utf8');
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  // Data files are pure copies — no managed header (would corrupt JSON).
  if (exists && existing === src) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  // This directory is a package-managed read-only cache, not a customization
  // surface. Refresh stale catalog metadata on every upgrade; otherwise the
  // skill and copied reference set can silently disagree until --force is used.
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
  channel: 'claude' | 'codex' | 'opencode',
  filename: string,
  force: boolean,
  scope: 'project' | 'global',
): InstallResult {
  const target: SkillTarget = channel === 'claude'
    ? 'claude-code'
    : channel === 'codex'
      ? 'codex'
      : 'opencode';
  const skillLabel = `agent:${filename}`;

  const parsed = parseCanonicalAgent(packageRoot, filename);
  const nativeDataRoot = scope === 'global'
    ? channel === 'codex'
      ? join(projectRoot, '.codex', 'data')
      : join(projectRoot, '.config', 'opencode', 'data')
    : channel === 'codex'
      ? '.codex/data'
      : '.opencode/data';
  const rendered = channel === 'claude'
    ? renderClaudeAgent(parsed)
    : channel === 'codex'
      ? renderCodexAgent(parsed, scope, nativeDataRoot)
      : renderOpenCodeAgent(parsed, scope, nativeDataRoot);

  const destFilename = channel === 'codex'
    ? filename.replace(/\.md$/, '.toml')
    : filename;
  const channelRoot = channel === 'claude'
    ? '.claude'
    : channel === 'codex'
      ? '.codex'
      : scope === 'global'
        ? join('.config', 'opencode')
        : '.opencode';
  const destPath = join(
    projectRoot,
    channelRoot,
    'agents',
    destFilename
  );

  // For Claude Code: managed marker is encoded as `omd_managed: true` INSIDE the
  // frontmatter (rendered above) — no HTML comment can precede `---` or the
  // subagent loader rejects the file.
  // For Codex: TOML allows leading comments, so `# omd:installed-agent ...` is fine.
  const managed = channel === 'claude' || channel === 'opencode'
      ? rendered
      : '# omd:installed-agent — generated from agents/' +
        filename +
        ' by `omd install-skills`. Do not edit; rerun the command to refresh.\n\n' +
        rendered;

  if (unsafeManagedPath(projectRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  if (exists && existing === managed) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }

  // Drift detection sentinels:
  //   Claude — look for `omd_managed: true` line inside frontmatter
  //   Codex  — look for `# omd:installed-agent` comment
  const isManaged = channel === 'claude'
    ? /\nomd_managed:\s*true\b/.test(existing)
    : channel === 'codex'
      ? existing.startsWith('# omd:installed-agent')
      : existing.includes('<!-- omd:installed-agent');

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

/**
 * Copy the reference catalog (`web/references/<id>/DESIGN.md`) into the project's
 * `.claude/data/references/<id>/DESIGN.md` so it's reachable on clean npx installs
 * — where there is no `node_modules` and no dev `web/references` (issue #16).
 *
 * Only DESIGN.md per id is copied (not _promo.json/_research.md/screenshots) to
 * keep the install lean. Idempotent: skips ids whose DESIGN.md already matches.
 * Returns the number of catalog entries available at the destination after
 * the sync (including already-current files), so an idempotent upgrade never
 * reports the misleading "0 catalog refs installed".
 */
function installReferenceCatalog(
  packageRoot: string,
  installRoot: string,
  channelDir: string,
  force: boolean
): number {
  const srcRoot = join(packageRoot, 'web', 'references');
  if (!existsSync(srcRoot)) return 0;
  const destRoot = join(installRoot, channelDir, 'data', 'references');
  if (unsafeManagedPath(installRoot, destRoot)) return 0;
  const manifestPath = join(destRoot, '.omd-managed.json');

  let previouslyManaged = new Set<string>();
  let previousHashes = new Map<string, string>();
  if (existsSync(manifestPath)) {
    try {
      const parsed: unknown = JSON.parse(readFileSync(manifestPath, 'utf8'));
      if (
        isJsonObject(parsed) &&
        Array.isArray(parsed.managedIds) &&
        parsed.managedIds.every((id) => typeof id === 'string')
      ) {
        previouslyManaged = new Set(parsed.managedIds as string[]);
        if (isJsonObject(parsed.managedDesignHashes)) {
          previousHashes = new Map(
            Object.entries(parsed.managedDesignHashes)
              .filter((entry): entry is [string, string] => typeof entry[1] === 'string'),
          );
        }
      }
    } catch {
      // A corrupt/missing manifest must fail safe: refresh known canonical IDs,
      // but never infer ownership of unknown destination directories.
    }
  }

  let available = 0;
  const sourceIds = new Set<string>();
  const managedDesignHashes: Record<string, string> = {};
  for (const id of readdirSync(srcRoot)) {
    const srcDesign = join(srcRoot, id, 'DESIGN.md');
    if (!existsSync(srcDesign)) continue;
    sourceIds.add(id);
    available++;
    const destDesign = join(destRoot, id, 'DESIGN.md');
    const src = readFileSync(srcDesign, 'utf8');
    const srcHash = createHash('sha256').update(src).digest('hex');
    if (existsSync(destDesign)) {
      const existing = readFileSync(destDesign, 'utf8');
      if (existing === src) {
        managedDesignHashes[id] = srcHash;
        continue;
      }
      const previousHash = previousHashes.get(id);
      const unchangedSinceLastInstall = previousHash !== undefined &&
        createHash('sha256').update(existing).digest('hex') === previousHash;
      if (!force && !unchangedSinceLastInstall) {
        // Same-id files can be user-curated references. Without a matching
        // installer hash, preserve them and stop claiming ownership.
        continue;
      }
    }
    mkdirSync(dirname(destDesign), { recursive: true });
    writeFileSync(destDesign, src, 'utf8');
    managedDesignHashes[id] = srcHash;
  }
  // Prune only IDs that a prior OmD manifest explicitly claimed. Unknown IDs
  // can be local/private references and must survive an installer upgrade.
  if (existsSync(destRoot)) {
    for (const id of readdirSync(destRoot)) {
      if (previouslyManaged.has(id) && !sourceIds.has(id)) {
        const retiredRoot = join(destRoot, id);
        const retiredDesign = join(retiredRoot, 'DESIGN.md');
        const previousHash = previousHashes.get(id);
        const safeToRemove = existsSync(retiredDesign) && (
          force || (
            previousHash !== undefined &&
            createHash('sha256').update(readFileSync(retiredDesign, 'utf8')).digest('hex') === previousHash
          )
        );
        if (safeToRemove) rmSync(retiredDesign, { force: true });
        if (existsSync(retiredRoot) && readdirSync(retiredRoot).length === 0) {
          rmdirSync(retiredRoot);
        }
      }
    }
  }
  mkdirSync(destRoot, { recursive: true });
  writeFileSync(
    manifestPath,
    JSON.stringify({
      schemaVersion: 2,
      managedIds: Object.keys(managedDesignHashes).sort(),
      managedDesignHashes,
    }, null, 2) + '\n',
    'utf8',
  );
  return available;
}

/**
 * Cursor channel shim — Cursor has no skill/agent surface; it consumes a
 * project rule at `.cursor/rules/omd-design.mdc`. Frontmatter, body, and the
 * body-hash marker below mirror the omd:sync skill's cursor template EXACTLY
 * (skills/omd-sync/SKILL.md, "whole" mode: hash = sha256 of the body text,
 * 12-char hex prefix), so a later omd:sync run reads the installer-written
 * file as `clean` rather than drifted (issue #20).
 */
const CURSOR_RULE_BODY = [
  'The authoritative design spec lives at `@DESIGN.md` (repo root). Open and read before generating/modifying UI.',
  '',
  'Pending preference corrections: `@.omd/preferences.md`.',
  '',
  'Precedence: DESIGN.md > preferences.md > framework defaults.',
  '',
  'If DESIGN.md is missing and the user asks to establish a design system:',
  '1. Inspect the existing product, routes, and constraints.',
  '2. Read `.claude/data/reference-fingerprints.json` and only recommend ids present there.',
  '3. Load the chosen `.claude/data/references/<id>/DESIGN.md`, explain the project-specific delta, and ask before writing root DESIGN.md.',
  '4. Unknown reference fields stay absent; never substitute a system font, generic component, or guessed token as a brand fact.',
  '',
  'When applying DESIGN.md, preserve existing behavior and user copy unless asked, then verify the actual product route and accessibility before reporting completion.',
  'Cursor receives this rule and the catalog, not OmD named skills or sub-agents; execute the contract directly from natural-language requests.',
].join('\n');

function renderCursorRule(): string {
  const hash = createHash('sha256').update(CURSOR_RULE_BODY).digest('hex').slice(0, 12);
  return [
    '---',
    'description: Authoritative brand & UI design system. Read DESIGN.md before UI work.',
    'globs:',
    '  - "**/*.tsx"',
    '  - "**/*.jsx"',
    '  - "**/*.vue"',
    '  - "**/*.svelte"',
    '  - "**/*.css"',
    '  - "**/*.scss"',
    '  - "**/tailwind.config.*"',
    '  - "**/components/**"',
    '  - "**/app/**/page.*"',
    'alwaysApply: false',
    '---',
    '',
    `<!-- omd:start v=1 hash=${hash} -->`,
    CURSOR_RULE_BODY,
    '<!-- omd:end -->',
    '',
  ].join('\n');
}

function installCursorRule(installRoot: string, force: boolean): InstallResult {
  const target: SkillTarget = 'cursor';
  const skillLabel = 'rule:omd-design.mdc';
  const destPath = join(installRoot, '.cursor', 'rules', 'omd-design.mdc');
  const rendered = renderCursorRule();

  if (unsafeManagedPath(installRoot, destPath)) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  if (exists && existing === rendered) {
    return { target, skill: skillLabel, destPath, status: 'unchanged' };
  }
  // The omd marker block doubles as the managed sentinel (matching omd:sync's
  // whole-mode rules): a file without it is user content → drift unless --force.
  if (exists && !existing.includes('<!-- omd:start') && !force) {
    return { target, skill: skillLabel, destPath, status: 'skipped-drift' };
  }
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, rendered, 'utf8');
  return { target, skill: skillLabel, destPath, status: exists ? 'updated' : 'created' };
}

const STATUS_LABEL: Record<InstallResult['status'], string> = {
  created: pc.green('created'),
  updated: pc.cyan('updated'),
  removed: pc.magenta('removed'),
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
  // Cursor hosts no skills — its channel writes the .cursor/rules shim + the
  // shared .claude/data catalog (issue #20). Only when .cursor is detected;
  // the no-signal fallback below stays skill-channel-only so we never drop a
  // .cursor dir into projects that don't use Cursor.
  if (presence.cursor) targets.push('cursor');
  if (targets.length === 0) {
    // Fallback: install for all three skill channels so user gets coverage
    // even without explicit signal. Idempotent so cost is low.
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

  if (opts.agents) {
    const invalidTargets = (opts.agents as string[]).filter(
      (target) => !(VALID_SKILL_TARGETS as readonly string[]).includes(target),
    );
    if (invalidTargets.length > 0) {
      console.error(
        pc.red(
          `omd install-skills: invalid agent channel(s): ${invalidTargets.join(', ')}. ` +
          `Choose from ${VALID_SKILL_TARGETS.join(', ')}.`,
        ),
      );
      return 1;
    }
    if (opts.agents.length === 0) {
      console.error(pc.red('omd install-skills: no agent channel selected'));
      return 1;
    }
  }

  if (opts.skillsFilter) {
    const unknownSkills = opts.skillsFilter.filter((skill) => !allSkills.includes(skill));
    if (unknownSkills.length > 0) {
      console.error(
        pc.red(`omd install-skills: unknown skill(s): ${unknownSkills.join(', ')}`),
      );
      return 1;
    }
    if (opts.skillsFilter.length === 0) {
      console.error(pc.red('omd install-skills: no skill selected'));
      return 1;
    }
  }

  if (opts.agentsFilter) {
    const availableAgentIds = new Set(allAgents.map((name) => name.replace(/\.md$/, '')));
    const unknownAgents = opts.agentsFilter.filter((agent) => !availableAgentIds.has(agent));
    if (unknownAgents.length > 0) {
      console.error(
        pc.red(`omd install-skills: unknown sub-agent(s): ${unknownAgents.join(', ')}`),
      );
      return 1;
    }
  }

  const force = opts.force ?? false;
  const minimal = opts.skillsOnly === true;
  // Install scope: 'project' (channel-local dirs under cwd) or 'global'
  // (channel-specific user dirs). --global forces it; otherwise the interactive
  // TUI asks. Global writes skills + sub-agents
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
    presence.cursor ? 'cursor' : null,
  ].filter((x): x is SkillTarget => x !== null);

  // --- Scope (project vs global) — --global pins it, else ask / default project.
  if (!opts.global && interactive) {
    const scopeResult = await p.select({
      message: 'Install scope · 어디에 설치할까요?',
      options: [
        { value: 'project', label: 'Project', hint: `${relative(process.cwd(), projectRoot) || '.'} · 이 프로젝트만` },
        { value: 'global', label: 'Global', hint: '~/.claude · ~/.agents · ~/.config/opencode (hooks/settings 제외)' },
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
    // Cursor consumes no skills — its channel install (.cursor/rules shim +
    // shared .claude/data catalog) is skill-independent, so always offer it.
    set.add('cursor');
    return targetsAvailableForScope(
      (['claude-code', 'codex', 'opencode', 'cursor'] as SkillTarget[]).filter((t) => set.has(t)),
      scope,
    );
  })();
  const channelLabel: Record<SkillTarget, string> = {
    'claude-code': 'Claude Code',
    codex: 'Codex',
    opencode: 'OpenCode',
    cursor: 'Cursor',
  };
  const channelDir: Record<SkillTarget, string> = {
    'claude-code': '.claude',
    codex: '.codex',
    opencode: '.opencode',
    cursor: '.cursor',
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

  if (targets.length === 0) {
    console.error(pc.red('omd install-skills: no compatible agent channel selected'));
    return 1;
  }

  if (scope === 'global' && targets.includes('cursor')) {
    console.error(
      pc.red('omd install-skills: Cursor rules are project-scoped. Run the Cursor install from the project root without --global.'),
    );
    return 1;
  }
  if (
    opts.repairHooks &&
    (scope !== 'project' || minimal || !targets.includes('claude-code'))
  ) {
    console.error(
      pc.red('omd install-skills: --repair-hooks requires a project-scoped Claude Code target and cannot be combined with --skills-only.'),
    );
    return 1;
  }

  // Global scope roots everything at the home dir, so channel plans resolve to
  // ~/.claude, ~/.agents + ~/.codex, or ~/.config/opencode. Project scope uses
  // cwd (or --dir).
  const installRoot = scope === 'global' ? homedir() : projectRoot;
  // Cursor hosts no SKILL.md tree — it's excluded from skill plans and handled
  // below via the .cursor/rules shim + shared data copies (issue #20).
  const skillChannelTargets = targets.filter(
    (t): t is SkillChannel => t !== 'cursor'
  );
  const plans = skillChannelTargets.map((t) => planForTarget(installRoot, t, scope));

  p.log.message(
    pc.bold('Scope: ') +
      pc.cyan(scope) +
      pc.dim(scope === 'global' ? '  (channel user directories)' : `  (${relative(process.cwd(), projectRoot) || '.'})`)
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
  // Count of reference-catalog DESIGN.md files copied (issue #16) — surfaced in
  // the install summary. Declared here so the outro (outside `if (!minimal)`) sees it.
  let catalogCount = 0;
  const catalogDestinations = new Set<string>();
  for (const plan of plans) {
    const dataDir = dataDirForScope(plan.target, targets, scope);
    const globalDataRoot = scope === 'global' && dataDir
      ? join(installRoot, dataDir, 'data')
      : null;
    for (const skill of skills) {
      results.push(installOne(packageRoot, installRoot, plan, skill, force, globalDataRoot));
    }
  }

  if (targets.includes('codex')) {
    results.push(...removeManagedLegacyCodexSkills(installRoot));
  }

  // Generate per-channel sub-agent definitions from the canonical `agents/`.
  // This is the v2 portable source-of-truth pattern (oh-my-agent style).
  // `canonicalAgents` is already resolved above by the TUI / --agents filter.
  for (const target of targets) {
    if (target === 'claude-code') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, installRoot, 'claude', filename, force, scope));
      }
    } else if (target === 'codex') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, installRoot, 'codex', filename, force, scope));
      }
    } else if (target === 'opencode') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, installRoot, 'opencode', filename, force, scope));
      }
    }
  }

  if (!minimal) {
  // Cursor channel: write the `.cursor/rules` shim (the exact content omd:sync
  // renders for .cursor/rules/omd-design.mdc) so Cursor reads DESIGN.md before
  // UI work. No skills/agents/hooks — the shim plus the shared .claude/data
  // copies below are the whole Cursor install (issue #20).
  if (targets.includes('cursor')) {
    results.push(installCursorRule(installRoot, force));
  }

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
  // Channel→dir resolution (incl. the cursor shared-`.claude/data` dedup guard,
  // issue #20) lives in dataDirFor — single source for all three copy loops.
  for (const target of targets) {
    const dataDir = dataDirForScope(target, targets, scope);
    if (!dataDir) continue;
    for (const dataFile of dataFiles) {
      results.push(installDataFile(packageRoot, installRoot, dataDir, dataFile, force, target));
    }
  }

  // Ship the reference catalog (DESIGN.md per id) into .claude/data/references
  // so omd:init can resolve a reference on clean npx installs — no node_modules,
  // no dev web/references (issue #16). Skipped under --skills-only (handled by the
  // enclosing `if (!minimal)`). Codex gets the same copy under .codex/data.
  // Same dataDirFor single-path rule as the data JSONs above — Cursor reads
  // .claude/data/references, never a second catalog location.
  for (const target of targets) {
    const dataDir = dataDirForScope(target, targets, scope);
    if (dataDir) {
      const catalogRoot = join(installRoot, dataDir, 'data', 'references');
      if (unsafeManagedPath(installRoot, catalogRoot)) {
        results.push({
          target,
          skill: 'data:references',
          destPath: catalogRoot,
          status: 'skipped-drift',
          reason: 'unsafe-path',
        });
        continue;
      }
      const count = installReferenceCatalog(packageRoot, installRoot, dataDir, force);
      catalogCount = Math.max(catalogCount, count);
      if (count > 0) {
        catalogDestinations.add(`${dataDir}/data/references/<id>/DESIGN.md`);
      }
    }
  }

  // Copy ctx-prime.cjs (+ its companion context.cjs) into each selected skill
  // channel's scoped data tree so /omd-harness works after either a project or
  // global install. Cursor has no skill runtime and intentionally gets no helper.
  for (const target of targets) {
    if (target === 'cursor') continue;
    const cd = dataDirForScope(target, targets, scope);
    if (!cd) continue;
    for (const helper of ['ctx-prime.cjs', 'context.cjs']) {
      const srcHelper = join(packageRoot, 'scripts', helper);
      if (!existsSync(srcHelper)) continue;
      const destHelper = join(installRoot, cd, 'data', 'scripts', helper);
      if (unsafeManagedPath(installRoot, destHelper)) {
        results.push({
          target,
          skill: `data-script:${helper}`,
          destPath: destHelper,
          status: 'skipped-drift',
          reason: 'unsafe-path',
        });
        continue;
      }
      const srcTxt = readFileSync(srcHelper, 'utf8');
      if (existsSync(destHelper) && readFileSync(destHelper, 'utf8') === srcTxt) continue;
      mkdirSync(dirname(destHelper), { recursive: true });
      writeFileSync(destHelper, srcTxt, 'utf8');
    }
  }

  // Hooks + settings.json are PROJECT-SCOPED only — a global install must not
  // mutate the user's global Claude config / make hooks fire in every project.
  if (scope === 'project' && targets.includes('claude-code')) {
    for (const hookFile of CLAUDE_HOOK_PATHS) {
      results.push(
        installHookFile(
          packageRoot,
          installRoot,
          hookFile,
          force || opts.repairHooks === true,
        ),
      );
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
  const changedCount = results.filter(
    (r) => r.status === 'created' || r.status === 'updated' || r.status === 'removed'
  ).length;
  const currentCount = results.filter((r) => r.status === 'unchanged').length;

  if (driftCount > 0) {
    const unsafeCount = results.filter(
      (result) => result.status === 'skipped-drift' && result.reason === 'unsafe-path',
    ).length;
    const hookDrift = results.some(
      (result) =>
        result.status === 'skipped-drift' && result.skill.startsWith('hook:'),
    );
    const repairHint = unsafeCount > 0
      ? ` ${unsafeCount} unsafe symlinked managed path(s) were refused; replace them with project-local files and run doctor. --force will not bypass this safety check.`
      : hookDrift
        ? ' Use --repair-hooks for Claude hooks only, or --force to overwrite all unmarked files.'
        : ' Rerun with --force to overwrite.';
    p.outro(
      pc.yellow(
        `${changedCount} changed, ${currentCount} already current, ${driftCount} skipped (existing files lack a valid omd ownership marker).${repairHint}`
      )
    );
    return 2;
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
      (r) => r.status === 'created' || r.status === 'updated' || r.status === 'unchanged'
    );
    if (installed.length === 0) {
      p.outro(pc.yellow('Nothing installed — no compatible skill/channel match.'));
      return 0;
    }
    p.outro(
      pc.green(
        `Done. Installed ${skills.map((s) => pc.bold(s)).join(', ')} ${scope === 'global' ? `globally for ${targets.join(', ')}` : `for ${targets.join(', ')}`}.`
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
  const cursorOnly = targets.length === 1 && targets[0] === 'cursor';
  const nextSteps = cursorOnly
    ? [
        `${pc.bold('Restart Cursor, then establish or apply DESIGN.md:')}`,
        '',
        `  ${pc.cyan('EN')}  ${pc.dim('Set up our design system — Toss-style, for a family meal-tracking app. Ask before writing DESIGN.md.')}`,
        `  ${pc.cyan('KR')}  ${pc.dim('토스 스타일로 가족 식단 공유 앱 디자인 시스템을 제안하고 DESIGN.md 작성 전에 확인해줘')}`,
        '',
        `${pc.dim('Cursor uses the installed rule + local catalog directly. It does not receive OmD named skills or sub-agents.')}`,
        `${pc.dim('You can also choose a reference in the Builder and download DESIGN.md before asking Cursor to build.')}`,
        '',
        `${pc.yellow('⚠ Already-running session?')} ${pc.dim('Restart Cursor so it reloads the project rule.')}`,
      ].join('\n')
    : [
        `${pc.bold('Restart your agent, then type your first prompt:')}`,
        '',
        `  ${pc.cyan('EN')}  ${pc.dim('Set up our design system — Toss-style, for a family meal-tracking app.')}`,
        `  ${pc.cyan('KR')}  ${pc.dim('토스 스타일로 가족 식단 공유 앱 디자인 시스템 잡아줘')}`,
        '',
        `${pc.dim('Your agent routes through omd:init and writes DESIGN.md after confirmation. Then build against it:')}`,
        `  ${pc.cyan('EN')}  ${pc.dim('Design the home screen.')}   ${pc.cyan('KR')}  ${pc.dim('홈 화면 디자인해줘')}`,
        '',
        `${pc.dim('Full walkthrough → "Your first 60 seconds" in the README. Routing is automatic — no slash command needed.')}`,
        `${pc.dim('Power user: ')}${pc.cyan('/omd-harness <task>')}${pc.dim(' — jump straight into the pipeline.')}`,
        '',
        `${pc.yellow('⚠ Already-running session?')} ${pc.dim('Restart the coding agent after install. Codex must also trust the project before it loads project-local .codex/agents roles.')}`,
      ].join('\n');
  p.note(nextSteps, 'Next');

  // Counts derived from what was actually resolved/installed — never hardcoded,
  // so the outro can't drift from the real skill/agent/hook set (or the README).
  const hookCount = scope === 'project' && targets.includes('claude-code') ? 4 : 0;
  if (catalogCount > 0) {
    p.log.message(
      pc.bold('Reference catalog: ') +
        pc.cyan(`${catalogCount}`) +
        pc.dim(` DESIGN.md synced → ${[...catalogDestinations].join(' + ')}`),
    );
  }
  const reportedSkillCount = skillChannelTargets.length > 0 ? skills.length : 0;
  const reportedAgentCount = skillChannelTargets.length > 0 ? canonicalAgents.length : 0;
  p.outro(
    pc.green(
      `Done. ${reportedSkillCount} skills · ${reportedAgentCount} sub-agents · ${hookCount} hooks · ${catalogCount} catalog refs ready (${changedCount} changed · ${currentCount} already current)${scope === 'global' ? ' globally (channel user directories)' : ''}.`,
    ),
  );
  return 0;
}
