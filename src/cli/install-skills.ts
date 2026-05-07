import * as p from '@clack/prompts';
import pc from 'picocolors';
import {
  readFileSync,
  readdirSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { detectInstalledAgents } from '../core/agent-detect.js';

export type SkillTarget = 'claude-code' | 'codex' | 'opencode';

export interface InstallSkillsOptions {
  dir?: string;
  agents?: SkillTarget[];
  force?: boolean;
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
  status: 'created' | 'updated' | 'unchanged' | 'skipped-drift';
}

function installOne(
  packageRoot: string,
  plan: InstallPlan,
  skill: string,
  force: boolean
): InstallResult {
  const src = readFileSync(
    join(packageRoot, 'skills', skill, 'SKILL.md'),
    'utf8'
  );
  const managed = MANAGED_HEADER + '\n\n' + src;
  const destPath =
    plan.layout === 'folder'
      ? join(plan.destDir, skill, 'SKILL.md')
      : join(plan.destDir, skill + '.md');

  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';

  if (exists && existing === managed) {
    return { target: plan.target, skill, destPath, status: 'unchanged' };
  }

  if (exists && !existing.startsWith(MANAGED_HEADER) && !force) {
    return { target: plan.target, skill, destPath, status: 'skipped-drift' };
  }

  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, managed, 'utf8');
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

  const skills = listShippedSkills(packageRoot);
  if (skills.length === 0) {
    console.error(pc.red('omd install-skills: no skills found in package'));
    return 1;
  }

  const targets = opts.agents ?? autoDetectTargets(projectRoot);
  const plans = targets.map((t) => planForTarget(projectRoot, t));
  const force = opts.force ?? false;

  p.intro(
    pc.bold('omd install-skills') +
      pc.dim(`  (${relative(process.cwd(), projectRoot) || '.'})`)
  );

  p.log.message(
    pc.bold('Targets: ') +
      targets.map((t) => pc.cyan(t)).join(', ')
  );
  p.log.message(
    pc.bold('Skills: ') + skills.map((s) => pc.cyan(s)).join(', ')
  );

  const results: InstallResult[] = [];
  for (const plan of plans) {
    for (const skill of skills) {
      results.push(installOne(packageRoot, plan, skill, force));
    }
  }

  // Generate per-channel sub-agent definitions from the canonical `agents/`.
  // This is the v2 portable source-of-truth pattern (oh-my-agent style).
  const canonicalAgents = listCanonicalAgents(packageRoot);
  for (const target of targets) {
    if (target === 'claude-code') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, projectRoot, 'claude', filename, force));
      }
    } else if (target === 'codex') {
      for (const filename of canonicalAgents) {
        results.push(installAgentFile(packageRoot, projectRoot, 'codex', filename, force));
      }
    }
    // OpenCode currently has no agent-definition channel — skills only.
  }

  // Ship the read-only data assets (reference fingerprints, controlled vocab,
  // human-readable tag matrix, opt-out corpus) into the project so skills + hooks
  // can run entirely on the host CLI's own model — no external API keys.
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
        results.push(installDataFile(packageRoot, projectRoot, '.claude', dataFile, force));
      }
    } else if (target === 'codex') {
      for (const dataFile of dataFiles) {
        results.push(installDataFile(packageRoot, projectRoot, '.codex', dataFile, force));
      }
    }
  }

  // Install hooks (Claude Code only — Codex / OpenCode have separate hook systems)
  if (targets.includes('claude-code')) {
    for (const hookFile of [
      'skill-activation.cjs',
      'session-state-loader.cjs',
      'post-edit-watch.cjs',
      'session-end-foldin.cjs',
    ]) {
      results.push(installHookFile(packageRoot, projectRoot, hookFile, force));
    }
    // settings.json (with merge, never clobber user)
    results.push(installSettingsJson(packageRoot, projectRoot, force));
  }

  p.log.message(pc.bold('\nResults:'));
  for (const r of results) {
    const rel = relative(projectRoot, r.destPath);
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

  // Friendly next-step nudge after successful install
  const nextSteps = [
    `${pc.bold('Open Claude Code (or Codex). Just say what you want:')}`,
    '',
    `  ${pc.dim('"토스 스타일 가족 식단 공유 앱 메인 화면 디자인해줘"')}`,
    `  ${pc.dim('"Linear-clone B2B SaaS dashboard 만들고 싶어"')}`,
    `  ${pc.dim('"이 카드 좀 더 세련되게"')}    ${pc.dim('# 작업 중 자연어 — 자동 라우팅')}`,
    '',
    `${pc.bold('Claude가 description 매칭으로 자동 라우팅')} ${pc.dim('— 슬래시 명령 안 쳐도 됨. Hook은 DESIGN.md 부재 시 omd:init 안내만.')}`,
    '',
    `${pc.dim('Power user shortcut: ')}${pc.cyan('/omd-harness <task>')} ${pc.dim('— 즉시 진입.')}`,
    '',
    `${pc.yellow('⚠ Already-running Claude Code session?')} ${pc.dim('Run `/agents` inside the session to reload — or quit (Cmd+Q on macOS) and relaunch. Without reload, hooks/agents do not load.')}`,
  ].join('\n');
  p.note(nextSteps, 'Next');

  p.outro(
    pc.green(
      `Done. 6 skills · 11 sub-agents · 4 hooks installed (${writtenCount} files).`,
    ),
  );
  return 0;
}

