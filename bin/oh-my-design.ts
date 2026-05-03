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
  .description('Bootstrap oh-my-design skills + agents into your project. After install, talk to your agent in natural language — no other CLI commands.')
  .version(readPackageVersion())
  .showSuggestionAfterError(true)
  .showHelpAfterError(true);

program
  .command('install-skills')
  .description('Install omd skill files + canonical agents into agent directories (.claude/, .codex/, .opencode/)')
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--agent <name...>', 'Restrict to specific agents (claude-code | codex | opencode)')
  .option('--force', 'Overwrite existing files even without the omd marker')
  .action(
    async (opts: { dir?: string; agent?: string[]; force?: boolean }) => {
      const { runInstallSkills } = await import('../src/cli/install-skills.js');
      const validAgents = ['claude-code', 'codex', 'opencode'] as const;
      type Agent = (typeof validAgents)[number];
      const agents = opts.agent
        ? (opts.agent.filter((a): a is Agent =>
            (validAgents as readonly string[]).includes(a)
          ) as Agent[])
        : undefined;
      const code = await runInstallSkills({
        dir: opts.dir,
        agents,
        force: opts.force,
      });
      if (code !== 0) process.exit(code);
    }
  );

program.parse();
