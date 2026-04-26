import * as p from '@clack/prompts';
import pc from 'picocolors';
import { relative } from 'node:path';
import {
  ALL_SHIMS,
  inspectShim,
  writeShim,
  refreshDesignMdHash,
  type Shim,
  type InspectResult,
  type WriteShimResult,
} from '../core/shims.js';

export interface SyncOptions {
  dir?: string;
  force?: boolean;
  check?: boolean;
}

const STATUS_LABEL: Record<InspectResult['status'], string> = {
  missing: pc.yellow('missing'),
  clean: pc.green('clean'),
  drifted: pc.red('drifted'),
  'out-of-date': pc.cyan('out-of-date'),
};

const WRITE_LABEL: Record<WriteShimResult['status'], string> = {
  created: pc.green('created'),
  updated: pc.cyan('updated'),
  unchanged: pc.dim('unchanged'),
  'skipped-drift': pc.yellow('skipped'),
};

function printDiff(label: string, current: string, proposed: string): void {
  p.log.message(pc.bold('─── current (' + label + ') ───'));
  p.log.message(current || pc.dim('(empty)'));
  p.log.message(pc.bold('─── proposed ───'));
  p.log.message(proposed);
}

type DriftChoice = 'overwrite' | 'skip' | 'show' | 'quit';

async function promptDrift(shim: Shim, inspection: InspectResult): Promise<DriftChoice> {
  while (true) {
    const choice = await p.select<DriftChoice>({
      message: `${pc.bold(shim.relPath)} has drift — choose:`,
      options: [
        { value: 'overwrite', label: 'Overwrite with rendered content' },
        { value: 'skip', label: 'Skip (keep user edits)' },
        { value: 'show', label: 'Show diff' },
        { value: 'quit', label: 'Quit sync' },
      ],
    });

    if (p.isCancel(choice)) return 'quit';
    if (choice !== 'show') return choice;

    printDiff(
      shim.relPath,
      inspection.existing ?? '',
      inspection.rendered
    );
  }
}

export async function runSync(opts: SyncOptions = {}): Promise<number> {
  const projectRoot = opts.dir ?? process.cwd();
  const relRoot = relative(process.cwd(), projectRoot) || '.';

  p.intro(pc.bold('omd sync') + pc.dim(`  (${relRoot})`));

  const inspections = ALL_SHIMS.map((shim) => ({
    shim,
    result: inspectShim(projectRoot, shim),
  }));

  p.log.message(pc.bold('Status:'));
  for (const { result } of inspections) {
    const rel = relative(projectRoot, result.path);
    p.log.message(`  ${STATUS_LABEL[result.status]}  ${rel}`);
  }

  if (opts.check) {
    const unsynced = inspections.filter(
      (i) => i.result.status !== 'clean'
    );
    if (unsynced.length > 0) {
      p.outro(
        pc.red(
          `${unsynced.length} not in sync — rerun without --check to resolve.`
        )
      );
      return 1;
    }
    p.outro(pc.green('All clean.'));
    return 0;
  }

  const results: WriteShimResult[] = [];

  for (const { shim, result } of inspections) {
    if (result.status === 'clean') {
      results.push({
        id: shim.id,
        path: result.path,
        hash: '',
        status: 'unchanged',
      });
      continue;
    }

    if (result.status === 'drifted' && !opts.force) {
      const choice = await promptDrift(shim, result);
      if (choice === 'quit') {
        p.outro(pc.yellow('Aborted by user.'));
        return 1;
      }
      if (choice === 'skip') {
        results.push(
          writeShim(projectRoot, shim, { onDrift: 'skip' })
        );
        continue;
      }
      // overwrite
      results.push(
        writeShim(projectRoot, shim, { onDrift: 'overwrite' })
      );
      continue;
    }

    // missing / out-of-date / (drifted with --force)
    const onDrift = opts.force ? 'overwrite' : 'error';
    results.push(writeShim(projectRoot, shim, { onDrift }));
  }

  refreshDesignMdHash(projectRoot);

  p.log.message(pc.bold('\nResults:'));
  for (const r of results) {
    const rel = relative(projectRoot, r.path);
    p.log.message(`  ${WRITE_LABEL[r.status]}  ${rel}`);
  }

  const drifted = results.filter((r) => r.status === 'skipped-drift').length;
  const changed = results.filter(
    (r) => r.status === 'created' || r.status === 'updated'
  ).length;

  p.outro(
    drifted > 0
      ? pc.yellow(`${changed} written, ${drifted} skipped (drift).`)
      : pc.green(`${changed} written.`)
  );

  return 0;
}
