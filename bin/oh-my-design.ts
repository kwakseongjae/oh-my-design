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
  .option('--cursor-rule-only', 'Cursor compatibility mode: install the legacy rule + catalog without Cursor Agent Skills')
  .option('--proof-policy', 'Opt in to the project-local Claude Code/Codex proof-execution blocker')
  .option('--remove-proof-policy', 'Remove the managed proof-policy blocker while preserving other hooks')
  .option('--global', 'Install to each channel\'s user-level discovery directory instead of this project. Writes skills + sub-agents + catalog; never touches global hooks/settings.')
  .option('--lang <lang>', 'Post-install guidance language (en | ko | ja | zh-CN | zh-TW)', 'en')
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
      cursorRuleOnly?: boolean;
      proofPolicy?: boolean;
      removeProofPolicy?: boolean;
      global?: boolean;
      lang?: string;
    }) => {
      const { runInstallSkills } = await import('../src/cli/install-skills.js');
      const { normalizeWorkflowLanguage } = await import('../src/cli/workflows.js');
      const lang = normalizeWorkflowLanguage(opts.lang ?? 'en');
      if (!lang) {
        console.error('omd install-skills: --lang must be en, ko, ja, zh-CN, or zh-TW');
        process.exit(1);
      }
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
        cursorRuleOnly: opts.cursorRuleOnly,
        proofPolicy: opts.proofPolicy,
        removeProofPolicy: opts.removeProofPolicy,
        global: opts.global,
        lang,
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
  .option('--self-test', 'Run a provider-zero harness context planner smoke test')
  .action(async (opts: { dir?: string; global?: boolean; json?: boolean; selfTest?: boolean }) => {
    const { runDoctor } = await import('../src/cli/doctor.js');
    const code = await runDoctor(opts);
    if (code !== 0) process.exit(code);
  });

program
  .command('update')
  .description('Refresh the existing OmD installation in place, preserving its scope, channels, and user-owned files.')
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--global', 'Update the user-level installation instead of this project')
  .option('--lang <lang>', 'Post-update guidance language (en | ko | ja | zh-CN | zh-TW)', 'en')
  .action(async (opts: { dir?: string; global?: boolean; lang?: string }) => {
    const { normalizeWorkflowLanguage } = await import('../src/cli/workflows.js');
    const { runUpdate } = await import('../src/cli/update.js');
    const lang = normalizeWorkflowLanguage(opts.lang ?? 'en');
    if (!lang) {
      console.error('omd update: --lang must be en, ko, ja, zh-CN, or zh-TW');
      process.exit(1);
    }
    const code = await runUpdate({ dir: opts.dir, global: opts.global, lang });
    if (code !== 0) process.exit(code);
  });

program
  .command('workflows')
  .alias('route')
  .description('Show what to ask your coding agent, or route one natural-language UI task to the smallest capable OmD workflow.')
  .argument('[task]', 'Natural-language UI task to route')
  .option('--lang <lang>', 'Output language (en | ko | ja | zh-CN | zh-TW)', 'en')
  .option('--json', 'Print the capability graph and selected workflow as JSON')
  .action(async (task: string | undefined, opts: { lang?: string; json?: boolean }) => {
    const { normalizeWorkflowLanguage, runWorkflows } = await import('../src/cli/workflows.js');
    const lang = normalizeWorkflowLanguage(opts.lang ?? 'en');
    if (!lang) {
      console.error('omd workflows: --lang must be en, ko, ja, zh-CN, or zh-TW');
      process.exit(1);
    }
    const code = await runWorkflows(task, {
      lang,
      json: opts.json,
    });
    if (code !== 0) process.exit(code);
  });

program
  .command('book')
  .description("Browse this project's adopted design system on a local port — tokens with the decision that produced them, component state matrices, measured contrast, and preset lineage.")
  .option('--dir <path>', 'Project root (defaults to cwd)')
  .option('--port <number>', 'Port to serve on (auto-increments if busy)', '6060')
  .option('--static <dir>', 'Write a standalone HTML file to this directory instead of serving')
  .option('--open', 'Open the book in the default browser')
  .action(async (opts: { dir?: string; port?: string; static?: string; open?: boolean }) => {
    const { runBook } = await import('../src/cli/book.js');
    const code = await runBook({
      dir: opts.dir,
      port: opts.port,
      staticOut: opts.static,
      open: opts.open,
    });
    if (code !== 0) process.exit(code);
  });

const designMd = program
  .command('design-md')
  .description('Inspect, validate, or stage a lossless migration to the vendor-neutral DESIGN.md Core v2 format.');

designMd
  .command('inspect')
  .description('Classify a DESIGN.md and print its provider-free migration/loss report without writing files.')
  .argument('[input]', 'DESIGN.md to inspect (defaults to ./DESIGN.md)')
  .option('--report <path>', 'Also write the machine-readable report to this path')
  .action(async (input: string | undefined, opts: { report?: string }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('inspect', { input, report: opts.report });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('validate')
  .description('Fail closed on Core structure, standalone Portable Core usefulness, round-trip, unsupported-promotion, or dropped-content drift.')
  .argument('[input]', 'DESIGN.md to validate (defaults to ./DESIGN.md)')
  .option('--report <path>', 'Also write the machine-readable report to this path')
  .action(async (input: string | undefined, opts: { report?: string }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('validate', { input, report: opts.report });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('rebind-migration')
  .description('Rebind a lossless migration ledger to enriched, review-valid non-authoritative Core inputs.')
  .argument('<candidate>', 'Fresh directory emitted by design-md migrate')
  .option('--graph <path>', 'Complete enriched authority-neutral Core v2 graph draft')
  .option('--enrichment <path>', 'Safe partial enrichment merged onto the lossless candidate graph')
  .requiredOption('--provenance <path>', 'Review-valid provenance draft')
  .requiredOption('--coverage <path>', 'Review-valid coverage draft')
  .requiredOption('--out-dir <path>', 'Fresh rebound input directory')
  .action(async (candidate: string, opts: {
    graph?: string;
    enrichment?: string;
    provenance: string;
    coverage: string;
    outDir: string;
  }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('rebind-migration', {
      candidateDir: candidate,
      input: opts.graph,
      enrichment: opts.enrichment,
      provenance: opts.provenance,
      coverage: opts.coverage,
      outDir: opts.outDir,
    });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('prepare-review')
  .description('Render an exact non-authoritative Core preview and hash-bound review request before owner approval.')
  .argument('<graph>', 'Authority-neutral Core v2 System Graph draft')
  .requiredOption('--provenance <path>', 'Provenance draft for the exact graph decisions')
  .requiredOption('--coverage <path>', 'Coverage draft for all Core groups and checks')
  .option('--migration-report <path>', 'Required lossless migration report when the graph carries a migration ledger')
  .requiredOption('--out-dir <path>', 'Fresh non-authoritative review directory')
  .action(async (graph: string, opts: {
    provenance: string;
    coverage: string;
    migrationReport?: string;
    outDir: string;
  }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('prepare-review', {
      input: graph,
      provenance: opts.provenance,
      coverage: opts.coverage,
      migrationReport: opts.migrationReport,
      outDir: opts.outDir,
    });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('approve-review')
  .description('Materialize an exact compiler-compatible owner approval receipt after reviewing the prepared preview.')
  .argument('<review-request>', 'Prepared review-request.json')
  .requiredOption('--reviewer <id>', 'Identified project-owner reviewer')
  .requiredOption('--out <path>', 'Fresh approval receipt path')
  .requiredOption('--authority-transition-approved', 'Explicitly approve the reviewed authority transition')
  .action(async (reviewRequest: string, opts: {
    reviewer: string;
    out: string;
    authorityTransitionApproved: boolean;
  }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('approve-review', {
      input: reviewRequest,
      reviewer: opts.reviewer,
      output: opts.out,
      authorityTransitionApproved: opts.authorityTransitionApproved,
    });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('compile')
  .description('Compile a validated System Graph into a fresh, hash-bound Portable Core package. This checks declaration conformance, not factual or provenance truth.')
  .argument('<graph>', 'Core v2 System Graph JSON to adopt as canonical authority')
  .requiredOption('--provenance <path>', 'Reviewed provenance draft bound to exact graph decisions')
  .requiredOption('--coverage <path>', 'Controller-computed coverage draft for all Core groups and checks')
  .requiredOption('--review-receipt <path>', 'Project-owner approval receipt bound to the exact input bytes')
  .option('--migration-report <path>', 'Required lossless migration report when the graph carries a migration ledger')
  .requiredOption('--out-dir <path>', 'Fresh output directory for DESIGN.md and its bound System Graph')
  .requiredOption('--adopt', 'Explicitly adopt the input graph as the canonical system authority')
  .action(async (graph: string, opts: {
    provenance: string;
    coverage: string;
    reviewReceipt: string;
    migrationReport?: string;
    outDir: string;
    adopt: boolean;
  }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('compile', {
      input: graph,
      provenance: opts.provenance,
      coverage: opts.coverage,
      reviewReceipt: opts.reviewReceipt,
      migrationReport: opts.migrationReport,
      outDir: opts.outDir,
      adopt: opts.adopt,
    });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('prepare-checkpoint')
  .description('Bind a project-owner checkpoint to all six exact compiler artifacts before project installation.')
  .argument('<package>', 'Fresh compiler-produced adopted package directory')
  .requiredOption('--reviewer <id>', 'Identified project-owner reviewer')
  .requiredOption('--out <path>', 'Fresh project checkpoint receipt path')
  .requiredOption('--authority-transition-approved', 'Explicitly approve installing the exact package bytes')
  .action(async (packageDir: string, opts: {
    reviewer: string;
    out: string;
    authorityTransitionApproved: boolean;
  }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('prepare-checkpoint', {
      input: packageDir,
      reviewer: opts.reviewer,
      output: opts.out,
      authorityTransitionApproved: opts.authorityTransitionApproved,
    });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('adopt')
  .description('Install an exact reviewed Core package into a project with rollback-safe transaction recovery.')
  .argument('<package>', 'Fresh compiler-produced adopted package directory')
  .requiredOption('--project-root <path>', 'Destination project root')
  .requiredOption('--checkpoint-receipt <path>', 'Exact project-owner package checkpoint receipt')
  .action(async (packageDir: string, opts: { projectRoot: string; checkpointReceipt: string }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('adopt', {
      input: packageDir,
      projectRoot: opts.projectRoot,
      checkpointReceipt: opts.checkpointReceipt,
    });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('migrate')
  .description('Write a staged Core v2 projection, System Graph, sidecars, and report without overwriting the source.')
  .argument('[input]', 'Legacy or portable DESIGN.md (defaults to ./DESIGN.md)')
  .requiredOption('--out-dir <path>', 'Fresh staging directory for migrated artifacts')
  .option('--report <path>', 'Also write the machine-readable report to this path')
  .action(async (input: string | undefined, opts: { outDir: string; report?: string }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('migrate', {
      input,
      outDir: opts.outDir,
      report: opts.report,
    });
    if (code !== 0) process.exit(code);
  });

designMd
  .command('audit')
  .description('Audit a reference catalog for lossless Core v2 migration; never rewrites catalog sources.')
  .argument('<catalog>', 'Directory containing reference subdirectories with DESIGN.md files')
  .option('--report <path>', 'Write the aggregate machine-readable report to this path')
  .action(async (catalog: string, opts: { report?: string }) => {
    const { runDesignMdTool } = await import('../src/cli/design-md.js');
    const code = runDesignMdTool('audit', { catalog, report: opts.report });
    if (code !== 0) process.exit(code);
  });

await program.parseAsync();
