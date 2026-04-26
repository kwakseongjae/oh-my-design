import { Command } from 'commander';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { run } from '../src/cli/index.js';

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
  .description('Interactive CLI to generate DESIGN.md files for AI coding agents')
  .version(readPackageVersion())
  .showSuggestionAfterError(true)
  .showHelpAfterError(true);

program
  .command('generate')
  .description('Generate DESIGN.md and interactive preview')
  .option('--config <hash>', 'Apply a config hash from the web builder')
  .action(async (opts: { config?: string }) => {
    if (opts.config) {
      // Decode config hash and generate directly without prompts
      const { writeFileSync } = await import('fs');
      const { resolve } = await import('path');

      // Decode the hash — format: refId|primary|font|weight|radius|dark|components|stylePrefs
      // parts[7] (stylePrefs) was added in v2. Old hashes lack it and still decode.
      let b64 = opts.config.replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      const decoded = Buffer.from(b64, 'base64').toString('utf-8');
      const parts = decoded.split('|');

      const refId = parts[0] || 'vercel';
      const overrides = {
        primaryColor: parts[1] || undefined,
        fontFamily: parts[2] || undefined,
        headingWeight: parts[3] || undefined,
        borderRadius: parts[4] || undefined,
        darkMode: parts[5] === '1',
      };
      const components = parts[6] ? parts[6].split(',').filter(Boolean) : [];
      // stylePreferences are decoded but not yet applied here — the CLI's
      // customizer (src/core/customizer.ts) does not mirror the web's
      // stylePreferences inline-rewrite logic yet. Parsed here so old and
      // new hashes coexist without error; CLI integration is a follow-up.
      const stylePrefs: Record<string, string> = {};
      if (parts[7]) {
        for (const pair of parts[7].split(';')) {
          const [k, v] = pair.split('=');
          if (k && v) stylePrefs[k] = v;
        }
      }

      // Load reference and apply
      const { loadReference } = await import('../src/core/reference-parser.js');
      const { applyOverrides } = await import('../src/core/customizer.js');

      const ref = loadReference(refId);
      const mode = (overrides.primaryColor || overrides.fontFamily) ? 'customized' as const : 'as-is' as const;
      const { designMd, shadcnCss, previewData } = applyOverrides(ref, {
        primaryColor: overrides.primaryColor,
        fontFamily: overrides.fontFamily,
        headingWeight: overrides.headingWeight,
        borderRadius: overrides.borderRadius,
        darkMode: overrides.darkMode,
      }, mode, components);

      previewData.shadcnCss = shadcnCss;
      previewData.designMd = designMd;

      const outputDir = process.cwd();
      const mdPath = resolve(outputDir, 'DESIGN.md');
      writeFileSync(mdPath, designMd, 'utf-8');

      console.log(`\x1b[32m✓\x1b[0m DESIGN.md generated at ${mdPath}`);
      console.log(`  Based on: ${ref.name}`);
      if (overrides.primaryColor) console.log(`  Primary: ${overrides.primaryColor}`);
      if (overrides.fontFamily) console.log(`  Font: ${overrides.fontFamily}`);
      if (overrides.headingWeight) console.log(`  Weight: ${overrides.headingWeight}`);
      if (overrides.borderRadius) console.log(`  Radius: ${overrides.borderRadius}`);
      if (overrides.darkMode) console.log(`  Dark mode: included`);
    } else {
      await run();
    }
  });

program
  .command('install-skills')
  .description('Install omd:* skill files into agent directories (.claude/, .codex/, .opencode/)')
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

const referenceCmd = program
  .command('reference')
  .description('Inspect bundled design references');

referenceCmd
  .command('list')
  .description('List all bundled reference ids')
  .action(async () => {
    const { runReferenceList } = await import('../src/cli/reference.js');
    process.exit(runReferenceList());
  });

referenceCmd
  .command('show <id>')
  .description('Print the full reference DESIGN.md to stdout')
  .action(async (id: string) => {
    const { runReferenceShow } = await import('../src/cli/reference.js');
    process.exit(runReferenceShow(id));
  });

const initCmd = program
  .command('init')
  .description('Bootstrap DESIGN.md from a reference + project description');

initCmd
  .command('recommend <description...>')
  .description('Recommend references matching a project description')
  .option('--top <n>', 'Number of recommendations', '5')
  .option('--json', 'Emit machine-readable JSON')
  .action(
    async (descParts: string[], opts: { top?: string; json?: boolean }) => {
      const { runInitRecommend } = await import('../src/cli/init.js');
      const code = runInitRecommend({
        description: descParts.join(' '),
        topK: opts.top ? Number(opts.top) : 5,
        json: opts.json,
      });
      if (code !== 0) process.exit(code);
    }
  );

initCmd
  .command('prepare')
  .description('Stage init context: rename existing DESIGN.md, compute delta_set, write .omd/init-context.json')
  .requiredOption('--ref <id>', 'Reference id (e.g. vercel, linear.app)')
  .requiredOption('--description <text>', 'Project description')
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--reason <text>', 'Reason for deprecation header', 'user-initiated omd init')
  .option('--json', 'Emit machine-readable JSON')
  .action(async (opts: { ref: string; description: string; dir?: string; reason?: string; json?: boolean }) => {
    const { runInitPrepare } = await import('../src/cli/init.js');
    const code = runInitPrepare(opts);
    if (code !== 0) process.exit(code);
  });

program
  .command('learn')
  .description('List preferences and flip status (applied/rejected)')
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--all', 'Include all statuses (default: pending only)')
  .option('--status <s>', 'Filter by status: pending|applied|rejected|superseded')
  .option('--scope <s>', 'Filter by scope')
  .option('--mark-applied <id>', 'Mark entry as applied')
  .option('--mark-rejected <id>', 'Mark entry as rejected (requires --reason)')
  .option('--reason <text>', 'Reason for rejection')
  .option('--hash <value>', 'DESIGN.md hash to stamp on applied entry (defaults to current file)')
  .action(async (opts: Record<string, string | boolean>) => {
    const { runLearn } = await import('../src/cli/learn.js');
    const code = await runLearn(opts as never);
    if (code !== 0) process.exit(code);
  });

program
  .command('remember <note...>')
  .description('Append a design preference/correction to .omd/preferences.md')
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--scope <scope>', 'Explicit scope (e.g. color, components.button)')
  .option('--agent <name>', 'Source agent (e.g. claude-code, codex)')
  .option('--context <text>', 'Source file/line context')
  .action(
    async (
      noteParts: string[],
      opts: {
        dir?: string;
        scope?: string;
        agent?: string;
        context?: string;
      }
    ) => {
      const { runRemember } = await import('../src/cli/remember.js');
      const code = await runRemember(noteParts.join(' '), opts as never);
      if (code !== 0) process.exit(code);
    }
  );

program
  .command('sync')
  .description('Sync DESIGN.md shim files (CLAUDE.md, AGENTS.md, .cursor/rules/omd-design.mdc)')
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--force', 'Overwrite drift without prompting')
  .option('--check', 'Exit non-zero if any shim has drift; do not write')
  .action(async (opts: { dir?: string; force?: boolean; check?: boolean }) => {
    const { runSync } = await import('../src/cli/sync.js');
    const code = await runSync(opts);
    if (code !== 0) process.exit(code);
  });

program
  .command('preview')
  .description('Open the preview HTML in the default browser')
  .action(async () => {
    const { existsSync } = await import('fs');
    const { resolve } = await import('path');
    const previewPath = resolve(process.cwd(), 'DESIGN.preview.html');

    if (!existsSync(previewPath)) {
      console.error('No DESIGN.preview.html found. Run `oh-my-design generate` first.');
      process.exit(1);
    }

    const { exec } = await import('child_process');
    const platform = process.platform;
    const cmd = platform === 'darwin' ? 'open' : platform === 'win32' ? 'start' : 'xdg-open';
    exec(`${cmd} "${previewPath}"`);
    console.log(`Opening ${previewPath}...`);
  });

program.parse();
