import { Command } from 'commander';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function readPackageVersion(): string {
  let cur = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 8; i++) {
    const pkg = join(cur, 'package.json');
    if (existsSync(pkg)) {
      try {
        return JSON.parse(readFileSync(pkg, 'utf8')).version ?? '0.0.0';
      } catch {
        return '0.0.0';
      }
    }
    const parent = dirname(cur);
    if (parent === cur) break;
    cur = parent;
  }
  return '0.0.0';
}

const program = new Command();

program
  .name('oh-my-design')
  .description('Install and diagnose the oh-my-design skill bundle. After setup, design work happens through natural-language prompts in your coding agent.')
  .version(readPackageVersion())
  .showSuggestionAfterError(true)
  .showHelpAfterError(true);

program.action(async () => {
  const { runInstallSkills } = await import('../src/cli/install-skills.js');
  const code = await runInstallSkills();
  if (code !== 0) process.exit(code);
});

program
  .command('install-skills')
  .description('Install OmD skills, specialist roles, and the reference catalog into the selected coding-agent channels.')
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--agent <name...>', 'Restrict to specific channels (claude-code | codex | opencode | cursor)')
  .option('--force', 'Overwrite existing files even without the omd marker')
  .option('--repair-hooks', 'Refresh the managed Claude hook bundle without overwriting other unmarked files')
  .option('--all', 'Skip the interactive TUI and install every shipped skill + agent (use in CI)')
  .option('--skills <names>', 'Comma-separated skill names to install (overrides TUI)', (v) => v.split(',').map((s) => s.trim()).filter(Boolean))
  .option('--agents-only <names>', 'Comma-separated agent names to install (overrides TUI). Use --agents-only to disambiguate from --agent (channel selector).', (v) => v.split(',').map((s) => s.trim()).filter(Boolean))
  .option('--skills-only', 'Install only the named skill files — skip sub-agents, hooks, and settings.json (minimal single-skill install, e.g. --skills claude-design --skills-only)')
  .option('--global', 'Install to each channel\'s user-level discovery directory instead of this project. Writes skills + sub-agents + catalog; never touches global hooks/settings.')
  .action(
    async (opts: {
      dir?: string;
      agent?: string[];
      force?: boolean;
      repairHooks?: boolean;
      all?: boolean;
      skills?: string[];
      agentsOnly?: string[];
      skillsOnly?: boolean;
      global?: boolean;
    }) => {
      const { runInstallSkills } = await import('../src/cli/install-skills.js');
      type Agent = 'claude-code' | 'codex' | 'opencode' | 'cursor';
      // Keep raw values until runInstallSkills validates them. Silently
      // filtering an invalid channel used to produce a successful 0-file install.
      const agents = opts.agent as Agent[] | undefined;
      const code = await runInstallSkills({
        dir: opts.dir,
        agents,
        force: opts.force,
        repairHooks: opts.repairHooks,
        all: opts.all,
        skillsFilter: opts.skills,
        agentsFilter: opts.agentsOnly,
        skillsOnly: opts.skillsOnly,
        global: opts.global,
      });
      if (code !== 0) process.exit(code);
    }
  );

program
  .command('doctor')
  .description('Check whether skills, sub-agents, references, and DESIGN.md are ready; print the exact next action.')
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--global', 'Check the user-level installation instead of this project')
  .option('--json', 'Print a machine-readable report')
  .action(async (opts: { dir?: string; global?: boolean; json?: boolean }) => {
    const { runDoctor } = await import('../src/cli/doctor.js');
    const code = await runDoctor(opts);
    if (code !== 0) process.exit(code);
  });

await program.parseAsync();
