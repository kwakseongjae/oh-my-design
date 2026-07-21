import * as p from '@clack/prompts';
import pc from 'picocolors';
import {
  existsSync,
  readFileSync,
  readdirSync,
} from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CLAUDE_HOOK_PATHS,
  isCurrentManagedHook,
} from './hook-contract.js';
import { unsafeManagedPath } from './install-path.js';

export interface DoctorOptions {
  dir?: string;
  global?: boolean;
  json?: boolean;
}

export interface DoctorChannel {
  id: 'claude-code' | 'codex' | 'opencode' | 'cursor';
  installed: boolean;
  ready: boolean;
  skills: number;
  agents: number;
  references: number;
  issues: string[];
}

export interface DoctorReport {
  root: string;
  scope: 'project' | 'global';
  state: 'not-installed' | 'incomplete' | 'needs-design-md' | 'ready';
  designMd: boolean;
  channels: DoctorChannel[];
  nextCommand: string;
  nextPrompt: string;
  manualAction: string;
}

function shellQuote(value: string): string {
  return `'${value.replace(/'/g, `'"'"'`)}'`;
}

export const REQUIRED_PRODUCT_SKILLS = [
  'claude-design',
  'omd-apply',
  'omd-asset-fetch',
  'omd-codex-image',
  'omd-designer-review',
  'omd-experiment-gallery',
  'omd-feel',
  'omd-final-qa',
  'omd-harness',
  'omd-humanize',
  'omd-init',
  'omd-kr-writer',
  'omd-learn',
  'omd-locale-adapter',
  'omd-orchestrator',
  'omd-reference-capture',
  'omd-remember',
  'omd-slop-audit',
  'omd-sync',
  'omd-taste',
] as const;
export const REQUIRED_AGENT_IDS = [
  'omd-a11y-auditor',
  'omd-asset-curator',
  'omd-codex-image',
  'omd-critic',
  'omd-designer-review',
  'omd-final-qa',
  'omd-humanizer',
  'omd-kr-writer',
  'omd-locale-adapter',
  'omd-master',
  'omd-microcopy',
  'omd-orchestrator',
  'omd-persona-tester',
  'omd-slop-auditor',
  'omd-ui-junior',
  'omd-ux-engineer',
  'omd-ux-researcher',
  'omd-ux-writer',
] as const;
const REQUIRED_DATA_FILES = [
  'reference-fingerprints.json',
  'reference-tags.md',
  'vocabulary.json',
] as const;
const REQUIRED_CLAUDE_HOOKS = [
  'skill-activation.cjs',
  'session-state-loader.cjs',
  'post-edit-watch.cjs',
  'session-end-foldin.cjs',
] as const;

type SkillChannelId = 'claude-code' | 'codex' | 'opencode';

function missingProductSkills(skillsRoot: string): string[] {
  return REQUIRED_PRODUCT_SKILLS.filter(
    (skill) => !existsSync(join(skillsRoot, skill, 'SKILL.md')),
  );
}

function missingDataFiles(dataRoot: string): string[] {
  return REQUIRED_DATA_FILES.filter((file) => !existsSync(join(dataRoot, file)));
}

function expectedSkillName(skill: string, channel: SkillChannelId): string {
  if (channel === 'opencode' || skill === 'claude-design') return skill;
  return skill.replace(/^omd-/, 'omd:');
}

function skillContractIssues(
  installRoot: string,
  skillsRoot: string,
  channel: SkillChannelId,
): string[] {
  const malformed: string[] = [];
  const unsafe: string[] = [];
  for (const skill of REQUIRED_PRODUCT_SKILLS) {
    const path = join(skillsRoot, skill, 'SKILL.md');
    if (!existsSync(path)) continue;
    if (unsafeManagedPath(installRoot, path)) {
      unsafe.push(skill);
      continue;
    }
    const content = readFileSync(path, 'utf8');
    const parsed = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]+)$/.exec(content);
    const rawName = parsed
      ? /^name:\s*([^\r\n]+)\s*$/m.exec(parsed[1])?.[1]?.trim().replace(/^['"]|['"]$/g, '')
      : undefined;
    const hasDescription = parsed
      ? /^description:\s*(?:\|[+-]?|>[-+]?|\S.+)\s*$/m.test(parsed[1])
      : false;
    if (
      !parsed ||
      rawName !== expectedSkillName(skill, channel) ||
      (channel === 'opencode' && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(rawName ?? '')) ||
      !hasDescription ||
      !parsed[2].trim() ||
      !content.includes('omd:installed-skill')
    ) {
      malformed.push(skill);
    }
  }
  return [
    ...(unsafe.length > 0
      ? [`unsafe symlinked ${channel} skill paths: ${unsafe.join(', ')}`]
      : []),
    ...(malformed.length > 0
      ? [`invalid ${channel} skill definitions: ${malformed.join(', ')}`]
      : []),
  ];
}

function coreIssues(
  installRoot: string,
  skillsRoot: string,
  dataRoot: string,
  referenceIds: Set<string>,
  channel: SkillChannelId,
): string[] {
  const issues: string[] = [];
  const unsafeDataPaths = [
    ...REQUIRED_DATA_FILES.map((file) => join(dataRoot, file)),
    join(dataRoot, 'references'),
  ].filter((path) => existsSync(path) && unsafeManagedPath(installRoot, path));
  if (unsafeDataPaths.length > 0) {
    issues.push(
      `unsafe symlinked ${channel} data paths: ${unsafeDataPaths
        .map((path) => relative(installRoot, path))
        .join(', ')}`,
    );
  }
  const missingSkills = missingProductSkills(skillsRoot);
  const missingData = missingDataFiles(dataRoot);
  if (missingSkills.length > 0) {
    issues.push(`missing product skills: ${missingSkills.join(', ')}`);
  }
  issues.push(...skillContractIssues(installRoot, skillsRoot, channel));
  if (missingData.length > 0) issues.push(`missing catalog data: ${missingData.join(', ')}`);
  if (referenceIds.size === 0) issues.push('reference catalog is empty');
  const fingerprintsPath = join(dataRoot, 'reference-fingerprints.json');
  if (existsSync(fingerprintsPath)) {
    try {
      const fingerprints: unknown = JSON.parse(readFileSync(fingerprintsPath, 'utf8'));
      if (
        typeof fingerprints !== 'object' ||
        fingerprints === null ||
        typeof (fingerprints as { count?: unknown }).count !== 'number'
      ) {
        issues.push('reference-fingerprints.json has no numeric count');
      } else {
        const { count, items } = fingerprints as { count: number; items?: unknown };
        if (!Array.isArray(items)) {
          issues.push('reference-fingerprints.json has no items array');
        } else {
          const invalidItems = items.filter(
            (item) =>
              typeof item !== 'object' ||
              item === null ||
              typeof (item as { id?: unknown }).id !== 'string' ||
              (item as { id: string }).id.length === 0,
          );
          const fingerprintIds = items
            .filter((item): item is { id: string } => !invalidItems.includes(item))
            .map((item) => item.id);
          const uniqueFingerprintIds = new Set(fingerprintIds);
          if (invalidItems.length > 0) {
            issues.push(`reference-fingerprints.json has ${invalidItems.length} item(s) without an id`);
          }
          if (count !== items.length) {
            issues.push(
              `catalog mismatch: declared ${count} fingerprints but items contains ${items.length}`,
            );
          }
          if (uniqueFingerprintIds.size !== fingerprintIds.length) {
            issues.push('reference-fingerprints.json contains duplicate ids');
          }
          const missingReferences = [...uniqueFingerprintIds].filter(
            (id) => !referenceIds.has(id),
          );
          if (missingReferences.length > 0) {
            const preview = missingReferences.slice(0, 5).join(', ');
            const remainder = missingReferences.length > 5
              ? ` (+${missingReferences.length - 5} more)`
              : '';
            issues.push(`missing catalog references: ${preview}${remainder}`);
          }
          const managedReferenceIds = managedReferenceIdsAt(dataRoot);
          if (managedReferenceIds) {
            const missingFingerprints = [...managedReferenceIds].filter(
              (id) => !uniqueFingerprintIds.has(id),
            );
            if (missingFingerprints.length > 0) {
              const preview = missingFingerprints.slice(0, 5).join(', ');
              const remainder = missingFingerprints.length > 5
                ? ` (+${missingFingerprints.length - 5} more)`
                : '';
              issues.push(`catalog fingerprints missing for managed references: ${preview}${remainder}`);
            }
          } else if (referenceIds.size > 0 && uniqueFingerprintIds.size === 0) {
            issues.push('reference-fingerprints.json is empty while references are installed');
          }
        }
        if (count < 0 || !Number.isInteger(count)) {
          issues.push(
            'reference-fingerprints.json count must be a non-negative integer',
          );
        }
      }
    } catch {
      issues.push('reference-fingerprints.json is not valid JSON');
    }
  }
  return issues;
}

function managedReferenceIdsAt(dataRoot: string): Set<string> | null {
  const manifestPath = join(dataRoot, 'references', '.omd-managed.json');
  if (!existsSync(manifestPath)) return null;
  try {
    const parsed: unknown = JSON.parse(readFileSync(manifestPath, 'utf8'));
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      Array.isArray((parsed as { managedIds?: unknown }).managedIds) &&
      (parsed as { managedIds: unknown[] }).managedIds.every(
        (id) => typeof id === 'string' && id.length > 0,
      )
    ) {
      return new Set((parsed as { managedIds: string[] }).managedIds);
    }
  } catch {
    // The manifest has its own installer recovery path. Fall back to the
    // conservative non-empty check so private references never false-red.
  }
  return null;
}

function referenceIdsAt(dataRoot: string): Set<string> {
  const root = join(dataRoot, 'references');
  if (!existsSync(root)) return new Set();
  return new Set(
    readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && existsSync(join(root, entry.name, 'DESIGN.md')))
      .map((entry) => entry.name),
  );
}

function countRequiredSkills(skillsRoot: string): number {
  return REQUIRED_PRODUCT_SKILLS.filter(
    (skill) => existsSync(join(skillsRoot, skill, 'SKILL.md')),
  ).length;
}

function missingAgentIds(root: string, extension: '.md' | '.toml'): string[] {
  return REQUIRED_AGENT_IDS.filter(
    (agent) => !existsSync(join(root, `${agent}${extension}`)),
  );
}

function countRequiredAgents(root: string, extension: '.md' | '.toml'): number {
  return REQUIRED_AGENT_IDS.length - missingAgentIds(root, extension).length;
}

function claudeAgentIssues(root: string): string[] {
  const agentsRoot = join(root, '.claude', 'agents');
  const missingAgents = missingAgentIds(agentsRoot, '.md');
  const issues: string[] = [];
  if (missingAgents.length > 0) {
    issues.push(`missing Claude sub-agents: ${missingAgents.join(', ')}`);
  }
  const malformedAgents: string[] = [];
  const unsafeAgents: string[] = [];
  for (const agent of REQUIRED_AGENT_IDS) {
    const path = join(agentsRoot, `${agent}.md`);
    if (!existsSync(path)) continue;
    if (unsafeManagedPath(root, path)) {
      unsafeAgents.push(agent);
      continue;
    }
    const content = readFileSync(path, 'utf8');
    const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]+)$/.exec(content);
    if (!frontmatter) {
      malformedAgents.push(agent);
      continue;
    }
    const name = /^name:\s*("(?:\\.|[^"\\])*")\s*$/m.exec(frontmatter[1])?.[1];
    const description = /^description:\s*("(?:\\.|[^"\\])*")\s*$/m.exec(frontmatter[1])?.[1];
    const tools = /^tools:\s*(\[[^\n]*\])\s*$/m.exec(frontmatter[1])?.[1];
    const model = /^model:\s*("(?:\\.|[^"\\])*")\s*$/m.exec(frontmatter[1])?.[1];
    try {
      if (
        !name || JSON.parse(name) !== agent ||
        !description || typeof JSON.parse(description) !== 'string' || !JSON.parse(description) ||
        !tools || !Array.isArray(JSON.parse(tools)) ||
        !model || typeof JSON.parse(model) !== 'string' ||
        !/^omd_managed:\s*true\s*$/m.test(frontmatter[1]) ||
        !frontmatter[2].trim()
      ) {
        malformedAgents.push(agent);
      }
    } catch {
      malformedAgents.push(agent);
    }
  }
  if (malformedAgents.length > 0) {
    issues.push(`invalid Claude sub-agent frontmatter: ${malformedAgents.join(', ')}`);
  }
  if (unsafeAgents.length > 0) {
    issues.push(`unsafe symlinked Claude sub-agent paths: ${unsafeAgents.join(', ')}`);
  }
  return issues;
}

type JsonObject = Record<string, unknown>;

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

const CLAUDE_HOOK_EVENTS: Record<(typeof REQUIRED_CLAUDE_HOOKS)[number], string> = {
  'skill-activation.cjs': 'UserPromptSubmit',
  'session-state-loader.cjs': 'SessionStart',
  'post-edit-watch.cjs': 'PostToolUse',
  'session-end-foldin.cjs': 'Stop',
};

function readClaudeSettings(root: string): JsonObject | null {
  const settingsPath = join(root, '.claude', 'settings.json');
  if (!existsSync(settingsPath)) return null;
  try {
    const parsed: unknown = JSON.parse(readFileSync(settingsPath, 'utf8'));
    return isJsonObject(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function hasExactClaudeHook(
  settings: JsonObject,
  event: string,
  hook: string,
): boolean {
  if (!isJsonObject(settings.hooks)) return false;
  const groups = settings.hooks[event];
  if (!Array.isArray(groups)) return false;
  const expected = `node \${CLAUDE_PROJECT_DIR}/.claude/hooks/${hook}`;
  return groups.some(
    (group) =>
      isJsonObject(group) &&
      Array.isArray(group.hooks) &&
      group.hooks.some(
        (entry) =>
          isJsonObject(entry) &&
          entry.type === 'command' &&
          entry.command === expected,
      ),
  );
}

function hasClaudeOmdActivation(root: string): boolean {
  const settings = readClaudeSettings(root);
  return Boolean(
    settings && REQUIRED_CLAUDE_HOOKS.some(
      (hook) => hasExactClaudeHook(settings, CLAUDE_HOOK_EVENTS[hook], hook),
    ),
  );
}

function findBundleRoot(): string | null {
  let current = dirname(fileURLToPath(import.meta.url));
  for (let depth = 0; depth < 8; depth += 1) {
    const packageJson = join(current, 'package.json');
    try {
      const parsed: unknown = JSON.parse(readFileSync(packageJson, 'utf8'));
      if (
        isJsonObject(parsed) &&
        parsed.name === 'oh-my-design-cli' &&
        existsSync(join(current, 'skills')) &&
        existsSync(join(current, '.claude', 'hooks'))
      ) {
        return current;
      }
    } catch {
      // Keep walking toward the package root.
    }
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return null;
}

function bundledClaudeHookSource(hook: (typeof CLAUDE_HOOK_PATHS)[number]): string | null {
  const bundleRoot = findBundleRoot();
  if (!bundleRoot) return null;
  const candidate = join(bundleRoot, '.claude', 'hooks', hook);
  return existsSync(candidate) ? readFileSync(candidate, 'utf8') : null;
}

function claudeActivationIssues(root: string): string[] {
  const issues: string[] = [];
  const settingsPath = join(root, '.claude', 'settings.json');
  if (!existsSync(settingsPath)) return ['Claude hook settings are missing'];

  const settings = readClaudeSettings(root);
  if (!settings) {
    return ['Claude hook settings are not valid JSON'];
  }

  for (const hook of CLAUDE_HOOK_PATHS) {
    const installedPath = join(root, '.claude', 'hooks', hook);
    if (!existsSync(installedPath)) {
      issues.push(`missing Claude hook file: ${hook}`);
      continue;
    }
    const unsafe = unsafeManagedPath(root, installedPath);
    if (unsafe) {
      issues.push(`unsafe Claude hook path: ${hook} (${unsafe})`);
      continue;
    }
    const source = bundledClaudeHookSource(hook);
    if (!source) {
      issues.push(`bundled Claude hook source is missing: ${hook}`);
    } else if (!isCurrentManagedHook(readFileSync(installedPath, 'utf8'), source)) {
      issues.push(`stale or modified Claude hook file: ${hook}`);
    }
    if (
      !hook.startsWith('lib/') &&
      !hasExactClaudeHook(
        settings,
        CLAUDE_HOOK_EVENTS[hook as keyof typeof CLAUDE_HOOK_EVENTS],
        hook,
      )
    ) {
      issues.push(`Claude hook is not activated in settings: ${hook}`);
    }
  }
  const settingsText = readFileSync(settingsPath, 'utf8');
  if (settingsText.includes('scripts/context_restore.sh') && !existsSync(join(root, 'scripts', 'context_restore.sh'))) {
    issues.push('settings still invoke the unshipped scripts/context_restore.sh hook');
  }
  return issues;
}

function codexAgentIssues(root: string): string[] {
  const agentsRoot = join(root, '.codex', 'agents');
  const missingAgents = missingAgentIds(agentsRoot, '.toml');
  const issues: string[] = [];
  if (missingAgents.length > 0) {
    issues.push(`missing Codex sub-agents: ${missingAgents.join(', ')}`);
  }
  const malformedAgents: string[] = [];
  const foreignSkillPathAgents: string[] = [];
  const missingRuntimeDependencyAgents: string[] = [];
  const unsafeAgents: string[] = [];
  for (const agent of REQUIRED_AGENT_IDS) {
    const path = join(agentsRoot, `${agent}.toml`);
    if (!existsSync(path)) continue;
    if (unsafeManagedPath(root, path)) {
      unsafeAgents.push(agent);
      continue;
    }
    const content = readFileSync(path, 'utf8');
    const name = /^name\s*=\s*"([^"\n]+)"\s*$/m.exec(content)?.[1]?.trim();
    const description = /^description\s*=\s*"([^"\n]+)"\s*$/m.exec(content)?.[1]?.trim();
    const instructionsMatch = /^developer_instructions\s*=\s*(?:'''([\s\S]*?)'''|"""([\s\S]*?)""")/m.exec(content);
    const developerInstructions = (instructionsMatch?.[1] ?? instructionsMatch?.[2])?.trim();
    if (
      /^\s*\[agent\]\s*$/m.test(content) ||
      name !== agent ||
      !description ||
      !developerInstructions
    ) {
      malformedAgents.push(agent);
    }
    if (/\.(?:claude|opencode)\/skills\//.test(content)) {
      foreignSkillPathAgents.push(agent);
    }
    if (/\bdata\/research\//.test(content)) {
      missingRuntimeDependencyAgents.push(agent);
    }
  }
  if (malformedAgents.length > 0) {
    issues.push(
      `invalid Codex sub-agent definitions (expected top-level name, description, developer_instructions): ${malformedAgents.join(', ')}`,
    );
  }
  if (foreignSkillPathAgents.length > 0) {
    issues.push(
      `Codex sub-agents reference another channel's skill root: ${foreignSkillPathAgents.join(', ')}`,
    );
  }
  if (missingRuntimeDependencyAgents.length > 0) {
    issues.push(
      `Codex sub-agents require unshipped development research files: ${missingRuntimeDependencyAgents.join(', ')}`,
    );
  }
  if (unsafeAgents.length > 0) {
    issues.push(`unsafe symlinked Codex sub-agent paths: ${unsafeAgents.join(', ')}`);
  }

  const masterPath = join(agentsRoot, 'omd-master.toml');
  if (!existsSync(masterPath)) return issues;
  const master = readFileSync(masterPath, 'utf8');
  if (!master.includes('# omd-master — Conversational Design Partner')) {
    issues.push('Codex omd-master does not embed the canonical role body');
  }
  if (/^model\s*=/m.test(master)) {
    issues.push('Codex omd-master pins a stale model instead of inheriting the session model');
  }
  if (/\bomd (?:init prepare|remember)\b/.test(master)) {
    issues.push('Codex omd-master still invokes removed CLI helpers');
  }
  const legacySkillsRoot = join(root, '.codex', 'skills');
  if (existsSync(legacySkillsRoot)) {
    const legacySkills = readdirSync(legacySkillsRoot, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          existsSync(join(legacySkillsRoot, entry.name, 'SKILL.md')),
      )
      .map((entry) => entry.name)
      .sort();
    const unmanagedLegacySkills = legacySkills.filter((skill) => {
      const content = readFileSync(join(legacySkillsRoot, skill, 'SKILL.md'), 'utf8');
      return !content.includes('omd:installed-skill');
    });
    const managedLegacySkills = legacySkills.filter(
      (skill) => !unmanagedLegacySkills.includes(skill),
    );
    if (managedLegacySkills.length > 0) {
      issues.push(`legacy Codex skill path must be migrated from .codex/skills: ${managedLegacySkills.join(', ')}`);
    }
    if (unmanagedLegacySkills.length > 0) {
      issues.push(`unmanaged legacy Codex skill paths require manual review: ${unmanagedLegacySkills.join(', ')}`);
    }
  }
  return issues;
}

function openCodeAgentIssues(root: string, agentsRoot: string): string[] {
  const missingAgents = missingAgentIds(agentsRoot, '.md');
  const issues: string[] = [];
  if (missingAgents.length > 0) {
    issues.push(`missing OpenCode sub-agents: ${missingAgents.join(', ')}`);
  }
  const malformed: string[] = [];
  const foreignSkillPathAgents: string[] = [];
  const missingRuntimeDependencyAgents: string[] = [];
  const colonSkillReferenceAgents: string[] = [];
  const unsafeAgents: string[] = [];
  for (const agent of REQUIRED_AGENT_IDS) {
    const path = join(agentsRoot, `${agent}.md`);
    if (!existsSync(path)) continue;
    if (unsafeManagedPath(root, path)) {
      unsafeAgents.push(agent);
      continue;
    }
    const content = readFileSync(path, 'utf8');
    const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]+)$/.exec(content);
    const description = frontmatter
      ? /^description:\s*("(?:\\.|[^"\\])*")\s*$/m.exec(frontmatter[1])?.[1]
      : undefined;
    try {
      if (
        !frontmatter ||
        !description ||
        !JSON.parse(description) ||
        !/^mode:\s*subagent\s*$/m.test(frontmatter[1]) ||
        !frontmatter[2].trim() ||
        !content.includes('omd:installed-agent')
      ) {
        malformed.push(agent);
      }
    } catch {
      malformed.push(agent);
    }
    if (/\.(?:claude|agents)\/skills\//.test(content)) {
      foreignSkillPathAgents.push(agent);
    }
    if (/\bdata\/research\//.test(content)) {
      missingRuntimeDependencyAgents.push(agent);
    }
    if (
      REQUIRED_PRODUCT_SKILLS.some(
        (skill) => skill.startsWith('omd-') && content.includes(`omd:${skill.slice(4)}`),
      )
    ) {
      colonSkillReferenceAgents.push(agent);
    }
  }
  if (malformed.length > 0) {
    issues.push(`invalid OpenCode sub-agent definitions: ${malformed.join(', ')}`);
  }
  if (foreignSkillPathAgents.length > 0) {
    issues.push(
      `OpenCode sub-agents reference another channel's skill root: ${foreignSkillPathAgents.join(', ')}`,
    );
  }
  if (missingRuntimeDependencyAgents.length > 0) {
    issues.push(
      `OpenCode sub-agents require unshipped development research files: ${missingRuntimeDependencyAgents.join(', ')}`,
    );
  }
  if (colonSkillReferenceAgents.length > 0) {
    issues.push(
      `OpenCode sub-agents reference non-native colon-form skills: ${colonSkillReferenceAgents.join(', ')}`,
    );
  }
  if (unsafeAgents.length > 0) {
    issues.push(`unsafe symlinked OpenCode sub-agent paths: ${unsafeAgents.join(', ')}`);
  }
  return issues;
}

function cursorRuleIssues(root: string): string[] {
  const path = join(root, '.cursor', 'rules', 'omd-design.mdc');
  if (!existsSync(path)) return [];
  const unsafe = unsafeManagedPath(root, path);
  if (unsafe) return [`unsafe Cursor rule path (${unsafe})`];
  const content = readFileSync(path, 'utf8');
  if (
    !content.startsWith('---\n') ||
    !content.includes('description: Authoritative brand & UI design system.') ||
    !/<!-- omd:start v=1 hash=[a-f0-9]{12} -->/.test(content) ||
    !content.includes('The authoritative design spec lives at `@DESIGN.md` (repo root). Open and read before generating/modifying UI.') ||
    !content.includes('<!-- omd:end -->')
  ) {
    return ['Cursor rule is not an OmD-managed design-system shim'];
  }
  return [];
}

export function collectDoctorReport(opts: DoctorOptions = {}): DoctorReport {
  const projectRoot = opts.dir ?? process.cwd();
  const root = opts.global ? homedir() : projectRoot;
  const claudeSkillsRoot = join(root, '.claude', 'skills');
  const codexSkillsRoot = join(root, '.agents', 'skills');
  const opencodeRoot = opts.global
    ? join(root, '.config', 'opencode')
    : join(root, '.opencode');
  const opencodeSkillsRoot = join(opencodeRoot, 'skills');
  const claudeAgentsRoot = join(root, '.claude', 'agents');
  const codexAgentsRoot = join(root, '.codex', 'agents');
  const opencodeAgentsRoot = join(opencodeRoot, 'agents');
  const claudeDataRoot = join(root, '.claude', 'data');
  const codexDataRoot = join(root, '.codex', 'data');
  const opencodeDataRoot = join(opencodeRoot, 'data');
  const claudeSkills = countRequiredSkills(claudeSkillsRoot);
  const codexSkills = countRequiredSkills(codexSkillsRoot);
  const opencodeSkills = countRequiredSkills(opencodeSkillsRoot);
  const claudeAgents = countRequiredAgents(claudeAgentsRoot, '.md');
  const codexAgents = countRequiredAgents(codexAgentsRoot, '.toml');
  const opencodeAgents = countRequiredAgents(opencodeAgentsRoot, '.md');
  const sourceRepository = (() => {
    try {
      const parsed: unknown = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
      return isJsonObject(parsed) && parsed.name === 'oh-my-design-cli' && existsSync(join(root, 'web', 'references'));
    } catch {
      return false;
    }
  })();
  const installedClaudeReferenceIds = referenceIdsAt(claudeDataRoot);
  const claudeReferenceIds = sourceRepository && installedClaudeReferenceIds.size === 0
    ? referenceIdsAt(join(root, 'web'))
    : installedClaudeReferenceIds;
  const codexReferenceIds = referenceIdsAt(codexDataRoot);
  const opencodeReferenceIds = referenceIdsAt(opencodeDataRoot);
  const claudeReferences = claudeReferenceIds.size;
  const codexReferences = codexReferenceIds.size;
  const opencodeReferences = opencodeReferenceIds.size;

  const claudeInstalled = claudeSkills > 0 || claudeAgents > 0 || hasClaudeOmdActivation(root);
  const codexInstalled = codexSkills > 0 || codexAgents > 0 ||
    existsSync(join(codexDataRoot, 'reference-fingerprints.json'));
  const opencodeInstalled = opencodeSkills > 0 || opencodeAgents > 0 ||
    existsSync(join(opencodeDataRoot, 'reference-fingerprints.json'));
  const cursorInstalled = !opts.global && existsSync(join(root, '.cursor', 'rules', 'omd-design.mdc'));

  const claudeIssues = claudeInstalled
    ? [
        ...coreIssues(
          root,
          claudeSkillsRoot,
          claudeDataRoot,
          claudeReferenceIds,
          'claude-code',
        ),
        ...claudeAgentIssues(root),
        ...(opts.global ? [] : claudeActivationIssues(root)),
      ]
    : [];
  const codexIssues = codexInstalled
    ? [
        ...coreIssues(
          root,
          codexSkillsRoot,
          codexDataRoot,
          codexReferenceIds,
          'codex',
        ),
        ...codexAgentIssues(root),
      ]
    : [];
  const opencodeIssues = opencodeInstalled
      ? [
          ...coreIssues(
            root,
            opencodeSkillsRoot,
            opencodeDataRoot,
            opencodeReferenceIds,
            'opencode',
          ),
          ...openCodeAgentIssues(root, opencodeAgentsRoot),
        ]
    : [];
  const cursorIssues = cursorInstalled
      ? coreIssues(
        root,
        join(root, '.cursor', '__no_skills__'),
        claudeDataRoot,
        claudeReferenceIds,
        'claude-code',
      ).filter((issue) => !issue.startsWith('missing product skills:'))
        .filter((issue) => !issue.startsWith('invalid claude-code skill definitions:'))
        .concat(cursorRuleIssues(root))
    : [];

  const channels: DoctorChannel[] = [
    {
      id: 'claude-code',
      installed: claudeInstalled,
      ready: claudeInstalled && claudeIssues.length === 0,
      skills: claudeSkills,
      agents: claudeAgents,
      references: claudeReferences,
      issues: claudeIssues,
    },
    {
      id: 'codex',
      installed: codexInstalled,
      ready: codexInstalled && codexIssues.length === 0,
      skills: codexSkills,
      agents: codexAgents,
      references: codexReferences,
      issues: codexIssues,
    },
    {
      id: 'opencode',
      installed: opencodeInstalled,
      ready: opencodeInstalled && opencodeIssues.length === 0,
      skills: opencodeSkills,
      agents: opencodeAgents,
      references: opencodeReferences,
      issues: opencodeIssues,
    },
    {
      id: 'cursor',
      installed: cursorInstalled,
      ready: cursorInstalled && cursorIssues.length === 0,
      skills: 0,
      agents: 0,
      references: claudeReferences,
      issues: cursorIssues,
    },
  ];

  const installedChannels = channels.filter((channel) => channel.installed);
  const cursorOnly = installedChannels.length === 1 && installedChannels[0].id === 'cursor';
  const hasInstall = installedChannels.length > 0;
  const hasIncompleteChannel = installedChannels.some((channel) => !channel.ready);
  const designMd = !opts.global && existsSync(join(projectRoot, 'DESIGN.md'));
  const state = !hasInstall
    ? 'not-installed'
    : hasIncompleteChannel
      ? 'incomplete'
      : designMd || opts.global
        ? 'ready'
        : 'needs-design-md';
  const nextPrompt = state === 'ready' && designMd
    ? cursorOnly
      ? 'Improve the home screen using our DESIGN.md. Preserve behavior, then verify the real route and accessibility.'
      : 'Improve the home screen using our DESIGN.md. Audit the result with omd:feel.'
    : state === 'needs-design-md' || (state === 'ready' && opts.global)
      ? 'Set up our design system — Toss-style, for a family meal-tracking app.'
      : '';
  const repairTargets = installedChannels
    .filter((channel) => !channel.ready)
    .map((channel) => channel.id)
    .join(' ');
  const dirSuffix = opts.dir && !opts.global
    ? ` --dir ${shellQuote(projectRoot)}`
    : '';
  const needsHookRepair = installedChannels.some(
    (channel) =>
      channel.id === 'claude-code' &&
      channel.issues.some((issue) =>
        issue.startsWith('stale or modified Claude hook file:'),
      ),
  );
  const allIssues = installedChannels.flatMap((channel) => channel.issues);
  const needsForceRepair = allIssues.some((issue) =>
    issue.startsWith('invalid ') ||
    issue === 'Claude hook settings are not valid JSON' ||
    issue === 'Cursor rule is not an OmD-managed design-system shim',
  );
  const needsManualReview = allIssues.some((issue) =>
    issue.startsWith('unsafe ') ||
    issue.startsWith('unmanaged legacy Codex skill paths require manual review:') ||
    issue.startsWith('bundled Claude hook source is missing:'),
  );
  const repairCommand = `npx oh-my-design-cli@latest install-skills --agent ${repairTargets} --all${needsHookRepair ? ' --repair-hooks' : ''}${needsForceRepair ? ' --force' : ''}${opts.global ? ' --global' : ''}${dirSuffix}`;

  return {
    root,
    scope: opts.global ? 'global' : 'project',
    state,
    designMd,
    channels,
    nextCommand: state === 'not-installed'
      ? dirSuffix
        ? `npx oh-my-design-cli@latest install-skills --all${dirSuffix}`
        : 'npx oh-my-design-cli@latest'
      : state === 'incomplete'
        ? needsManualReview ? '' : repairCommand
        : '',
    nextPrompt,
    manualAction: needsManualReview
      ? allIssues.some((issue) => issue.startsWith('bundled Claude hook source is missing:'))
        ? 'Reinstall the latest oh-my-design package; its bundled Claude hook sources are incomplete, so automatic repair is disabled.'
        : 'Replace symlinked OmD paths with real project-local files and review unmanaged legacy Codex entries, then run doctor again.'
      : '',
  };
}

const CHANNEL_LABELS: Record<DoctorChannel['id'], string> = {
  'claude-code': 'Claude Code',
  codex: 'Codex',
  opencode: 'OpenCode',
  cursor: 'Cursor',
};

export async function runDoctor(opts: DoctorOptions = {}): Promise<number> {
  const report = collectDoctorReport(opts);
  if (opts.json) {
    console.log(JSON.stringify(report, null, 2));
    return report.state === 'not-installed' || report.state === 'incomplete' ? 1 : 0;
  }

  p.intro(
    pc.bold('omd doctor') +
      pc.dim(`  (${relative(process.cwd(), report.root) || '.'})`),
  );

  const installed = report.channels.filter((channel) => channel.installed);
  if (installed.length === 0) {
    p.log.error('No oh-my-design agent channel found in this scope.');
    p.note(
      `${pc.bold('Install the bundle:')}\n\n  ${pc.cyan(report.nextCommand)}`,
      'Next',
    );
    p.outro(pc.red('Action required.'));
    return 1;
  }

  for (const channel of installed) {
    const details = [
      channel.skills > 0 ? `${channel.skills} skills` : null,
      channel.agents > 0 ? `${channel.agents} sub-agents` : null,
      channel.references > 0 ? `${channel.references} references` : null,
    ].filter(Boolean);
    if (channel.ready) {
      p.log.success(`${CHANNEL_LABELS[channel.id]}  ${pc.dim(details.join(' · '))}`);
    } else {
      p.log.warn(`${CHANNEL_LABELS[channel.id]}  ${pc.dim(details.join(' · '))}`);
      for (const issue of channel.issues) p.log.message(`  ${pc.yellow('–')} ${issue}`);
    }
  }

  if (report.state === 'incomplete') {
    const repairResetsHooks = report.nextCommand.includes('--repair-hooks');
    const repairForcesReservedPaths = report.nextCommand.includes('--force');
    const preservationNote = repairResetsHooks || repairForcesReservedPaths
      ? [
          repairResetsHooks ? 'The six OmD Claude hook paths will be reset to the packaged versions.' : null,
          repairForcesReservedPaths ? 'Conflicting files at OmD-reserved paths will be replaced; unrelated user files are preserved.' : null,
        ].filter(Boolean).join(' ')
      : 'User-authored files outside OmD ownership are preserved by the installer.';
    p.note(
      report.nextCommand
        ? `${pc.bold('Repair the managed bundle:')}\n\n  ${pc.cyan(report.nextCommand)}\n\n` +
          pc.dim(`Run npx oh-my-design-cli@latest doctor again afterward. ${preservationNote}`)
        : `${pc.bold('Manual safety review required:')}\n\n  ${pc.yellow(report.manualAction)}\n\n` +
          pc.dim('The installer will not follow symlinks or remove unmanaged legacy entries.'),
      'Next',
    );
    p.outro(pc.red('Install found, but required runtime assets are incomplete.'));
    return 1;
  }

  if (report.scope === 'global') {
    p.log.success('Global bundle is discoverable from every project.');
  } else if (report.designMd) {
    p.log.success('DESIGN.md found — brand context is active.');
  } else {
    p.log.warn('Bundle installed, but this project has no DESIGN.md yet.');
  }

  const note = [
    report.designMd ? pc.bold('Build with the system:') : pc.bold('Activate this project:'),
    '',
    `  ${pc.cyan('EN')}  ${pc.dim(report.nextPrompt)}`,
    report.designMd
      ? `  ${pc.cyan('KR')}  ${pc.dim(
          report.channels.filter((channel) => channel.installed).length === 1 &&
          report.channels.find((channel) => channel.installed)?.id === 'cursor'
            ? 'DESIGN.md를 적용해 홈 화면을 개선하고 실제 경로와 접근성을 검증해줘'
            : 'DESIGN.md를 적용해 홈 화면을 개선하고 omd:feel로 검수해줘',
        )}`
      : `  ${pc.cyan('KR')}  ${pc.dim('토스 스타일로 가족 식단 공유 앱 디자인 시스템 잡아줘')}`,
    '',
    pc.dim('Start a new agent session after install or upgrade so skills are reloaded.'),
    ...(report.channels.some((channel) => channel.id === 'codex' && channel.installed)
      ? [pc.dim('Codex also requires the project to be trusted before project-local roles are loaded.')]
      : []),
  ].join('\n');
  p.note(note, 'Next');
  p.outro(
    report.state === 'ready'
      ? pc.green('Ready. Your next prompt is the product surface.')
      : pc.yellow('One prompt away from activation.'),
  );
  return 0;
}
