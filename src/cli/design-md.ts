import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export type DesignMdMode =
  | 'inspect'
  | 'validate'
  | 'migrate'
  | 'audit'
  | 'prepare-review'
  | 'approve-review'
  | 'compile'
  | 'prepare-checkpoint'
  | 'adopt';

export interface DesignMdToolOptions {
  cwd?: string;
  input?: string;
  catalog?: string;
  outDir?: string;
  report?: string;
  provenance?: string;
  coverage?: string;
  reviewReceipt?: string;
  migrationReport?: string;
  output?: string;
  reviewer?: string;
  authorityTransitionApproved?: boolean;
  projectRoot?: string;
  checkpointReceipt?: string;
  adopt?: boolean;
}

function packageRoot(from = dirname(fileURLToPath(import.meta.url))): string {
  let current = resolve(from);
  for (let depth = 0; depth < 8; depth += 1) {
    if (existsSync(join(current, 'package.json'))
      && existsSync(join(current, 'scripts', 'migrate-design-md-core.cjs'))) {
      return current;
    }
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  throw new Error('omd design-md: packaged migration engine is missing');
}

function absoluteFrom(cwd: string, value: string): string {
  return resolve(cwd, value);
}

export function buildDesignMdToolArgs(
  mode: DesignMdMode,
  options: DesignMdToolOptions = {},
): string[] {
  const cwd = resolve(options.cwd ?? process.cwd());
  const args: string[] = [];

  if (mode === 'audit') {
    if (!options.catalog) throw new Error('omd design-md audit: a catalog directory is required');
    args.push('--catalog', absoluteFrom(cwd, options.catalog), '--check');
  } else if (mode === 'prepare-review') {
    if (!options.input) throw new Error('omd design-md prepare-review: an input graph.json is required');
    if (!options.provenance) throw new Error('omd design-md prepare-review: --provenance is required');
    if (!options.coverage) throw new Error('omd design-md prepare-review: --coverage is required');
    if (!options.outDir) throw new Error('omd design-md prepare-review: --out-dir is required');
    args.push(
      absoluteFrom(cwd, options.input),
      '--provenance', absoluteFrom(cwd, options.provenance),
      '--coverage', absoluteFrom(cwd, options.coverage),
      ...(options.migrationReport
        ? ['--migration-report', absoluteFrom(cwd, options.migrationReport)] : []),
      '--out-dir', absoluteFrom(cwd, options.outDir),
    );
  } else if (mode === 'approve-review') {
    if (!options.input) throw new Error('omd design-md approve-review: a review-request.json is required');
    if (!options.reviewer) throw new Error('omd design-md approve-review: --reviewer is required');
    if (!options.output) throw new Error('omd design-md approve-review: --out is required');
    if (options.authorityTransitionApproved !== true) {
      throw new Error('omd design-md approve-review: --authority-transition-approved is required');
    }
    args.push(
      '--approve', absoluteFrom(cwd, options.input),
      '--reviewer', options.reviewer,
      '--out', absoluteFrom(cwd, options.output),
      '--authority-transition-approved',
    );
  } else if (mode === 'compile') {
    if (!options.input) throw new Error('omd design-md compile: an input graph.json is required');
    if (!options.outDir) {
      throw new Error('omd design-md compile: --out-dir is required; adopted packages are only published to a fresh directory');
    }
    if (options.adopt !== true) {
      throw new Error('omd design-md compile: --adopt is required to declare system-graph authority');
    }
    if (!options.provenance) throw new Error('omd design-md compile: --provenance is required');
    if (!options.coverage) throw new Error('omd design-md compile: --coverage is required');
    if (!options.reviewReceipt) throw new Error('omd design-md compile: --review-receipt is required');
    args.push(
      absoluteFrom(cwd, options.input),
      '--provenance', absoluteFrom(cwd, options.provenance),
      '--coverage', absoluteFrom(cwd, options.coverage),
      '--review-receipt', absoluteFrom(cwd, options.reviewReceipt),
      ...(options.migrationReport
        ? ['--migration-report', absoluteFrom(cwd, options.migrationReport)] : []),
      '--out-dir', absoluteFrom(cwd, options.outDir),
      '--adopt',
    );
  } else if (mode === 'prepare-checkpoint') {
    if (!options.input) throw new Error('omd design-md prepare-checkpoint: a compiled package directory is required');
    if (!options.reviewer) throw new Error('omd design-md prepare-checkpoint: --reviewer is required');
    if (!options.output) throw new Error('omd design-md prepare-checkpoint: --out is required');
    if (options.authorityTransitionApproved !== true) {
      throw new Error('omd design-md prepare-checkpoint: --authority-transition-approved is required');
    }
    args.push(
      absoluteFrom(cwd, options.input),
      '--prepare-checkpoint', absoluteFrom(cwd, options.output),
      '--reviewer', options.reviewer,
      '--authority-transition-approved',
    );
  } else if (mode === 'adopt') {
    if (!options.input) throw new Error('omd design-md adopt: a compiled package directory is required');
    if (!options.projectRoot) throw new Error('omd design-md adopt: --project-root is required');
    if (!options.checkpointReceipt) throw new Error('omd design-md adopt: --checkpoint-receipt is required');
    args.push(
      absoluteFrom(cwd, options.input),
      '--project-root', absoluteFrom(cwd, options.projectRoot),
      '--checkpoint-receipt', absoluteFrom(cwd, options.checkpointReceipt),
    );
  } else {
    const input = absoluteFrom(cwd, options.input ?? 'DESIGN.md');
    args.push('--input', input);
    if (mode === 'inspect') args.push('--dry-run', '--json');
    if (mode === 'validate') args.push('--check', '--require-source-valid', '--require-portable-core');
    if (mode === 'migrate') {
      if (!options.outDir) {
        throw new Error('omd design-md migrate: --out-dir is required; source files are never overwritten');
      }
      args.push('--out-dir', absoluteFrom(cwd, options.outDir), '--write');
    }
  }

  if (options.report && mode !== 'compile') args.push('--report', absoluteFrom(cwd, options.report));
  return args;
}

export function runDesignMdTool(
  mode: DesignMdMode,
  options: DesignMdToolOptions = {},
): number {
  let args: string[];
  let script: string;
  try {
    args = buildDesignMdToolArgs(mode, options);
    const scriptName = mode === 'prepare-review' || mode === 'approve-review'
      ? 'prepare-design-md-core-review.cjs'
      : mode === 'compile'
        ? 'compile-design-md-core.cjs'
        : mode === 'prepare-checkpoint' || mode === 'adopt'
          ? 'adopt-design-md-core.cjs'
          : 'migrate-design-md-core.cjs';
    script = join(packageRoot(), 'scripts', scriptName);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }

  const result = spawnSync(process.execPath, [script, ...args], {
    cwd: resolve(options.cwd ?? process.cwd()),
    env: process.env,
    stdio: 'inherit',
  });
  if (result.error) {
    console.error(`omd design-md: ${result.error.message}`);
    return 1;
  }
  return result.status ?? 1;
}
