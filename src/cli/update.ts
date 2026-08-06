import * as p from '@clack/prompts';
import pc from 'picocolors';
import { relative } from 'node:path';
import { collectDoctorReport, type DoctorReport } from './doctor.js';
import { runInstallSkills, type InstallSkillsOptions, type SkillTarget } from './install-skills.js';
import type { WorkflowLanguage } from './workflows.js';

export interface UpdateOptions {
  dir?: string;
  global?: boolean;
  lang?: WorkflowLanguage;
}

export interface UpdatePlan {
  allowed: boolean;
  reason: string | null;
  scope: 'project' | 'global';
  root: string;
  channels: SkillTarget[];
  cursorRuleOnly: boolean;
  install: InstallSkillsOptions | null;
}

export function buildUpdatePlan(report: DoctorReport, opts: UpdateOptions = {}): UpdatePlan {
  const installed = report.channels.filter((channel) => channel.installed);
  const unsafe = report.manualAction.trim();
  if (installed.length === 0) {
    return {
      allowed: false,
      reason: 'No existing oh-my-design installation was found in this scope.',
      scope: report.scope,
      root: report.root,
      channels: [],
      cursorRuleOnly: false,
      install: null,
    };
  }
  if (unsafe) {
    return {
      allowed: false,
      reason: unsafe,
      scope: report.scope,
      root: report.root,
      channels: installed.map((channel) => channel.id),
      cursorRuleOnly: false,
      install: null,
    };
  }
  const channels = installed.map((channel) => channel.id);
  const cursor = installed.find((channel) => channel.id === 'cursor');
  const cursorRuleOnly = Boolean(cursor?.installed && cursor.skills === 0);
  return {
    allowed: true,
    reason: null,
    scope: report.scope,
    root: report.root,
    channels,
    cursorRuleOnly,
    install: {
      dir: opts.dir,
      global: opts.global,
      agents: channels,
      all: true,
      cursorRuleOnly,
      force: false,
      repairHooks: false,
      lang: opts.lang ?? 'en',
    },
  };
}

function statusLabel(report: DoctorReport): string {
  return report.state === 'ready' ? 'ready' : report.state.replaceAll('-', ' ');
}

export async function runUpdate(opts: UpdateOptions = {}): Promise<number> {
  const before = collectDoctorReport(opts);
  const plan = buildUpdatePlan(before, opts);
  p.intro(pc.bold('omd update') + pc.dim(`  (${relative(process.cwd(), plan.root) || '.'})`));
  if (!plan.allowed || !plan.install) {
    p.log.error(plan.reason ?? 'Update cannot proceed safely.');
    p.outro(pc.red('No files changed.'));
    return 1;
  }

  p.log.info(`Scope preserved: ${pc.cyan(plan.scope)}`);
  p.log.info(`Channels preserved: ${pc.cyan(plan.channels.join(', '))}`);
  if (plan.cursorRuleOnly) p.log.info('Cursor compatibility mode preserved: rule-only');
  p.log.info(`Before: ${pc.dim(statusLabel(before))}`);

  const installCode = await runInstallSkills(plan.install);
  if (installCode !== 0) {
    p.outro(pc.red('Update stopped. Run doctor and follow its scoped repair command.'));
    return installCode;
  }

  const after = collectDoctorReport(opts);
  for (const channel of after.channels.filter((item) => item.installed)) {
    const counts = [
      channel.skills ? `${channel.skills} skills` : null,
      channel.agents ? `${channel.agents} agents` : null,
      channel.references ? `${channel.references} references` : null,
    ].filter(Boolean).join(' · ');
    const marker = channel.ready ? pc.green('✓') : pc.yellow('!');
    p.log.message(`${marker} ${channel.id}  ${pc.dim(counts)}`);
  }

  if (after.state === 'incomplete') {
    p.note(
      after.nextCommand || after.manualAction,
      'Doctor found a protected local difference',
    );
    p.outro(pc.yellow('Managed files were refreshed where safe; review the remaining difference.'));
    return 1;
  }

  p.log.success(`After: ${statusLabel(after)}`);
  p.note(
    'Restart the coding agent so it reloads the refreshed skills and roles.\n' +
      'Then run: npx oh-my-design-cli@latest doctor',
    'Next',
  );
  p.outro(pc.green('Update complete. Local files outside OmD ownership were preserved.'));
  return 0;
}
