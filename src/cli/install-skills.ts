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
  } else {
    p.outro(pc.green(`${writtenCount} skill files written.`));
  }
  return 0;
}
