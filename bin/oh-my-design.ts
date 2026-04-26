import { Command } from 'commander';
import { run } from '../src/cli/index.js';

const program = new Command();

program
  .name('oh-my-design')
  .description('Interactive CLI to generate DESIGN.md files for AI coding agents')
  .version('0.1.0');

program
  .command('generate', { isDefault: true })
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
