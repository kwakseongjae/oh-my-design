import * as p from '@clack/prompts';
import pc from 'picocolors';
import { existsSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import {
  readFile,
  groupByScope,
  filterByStatus,
  updateEntryStatus,
  type PreferenceStatus,
  type PreferenceEntry,
} from '../core/preferences.js';
import { hashContent } from '../core/sync-marker.js';

export interface LearnOptions {
  dir?: string;
  all?: boolean;
  scope?: string;
  status?: PreferenceStatus;
  markApplied?: string;
  markRejected?: string;
  reason?: string;
  hash?: string;
}

const STATUS_COLOR: Record<PreferenceStatus, (s: string) => string> = {
  pending: pc.yellow,
  applied: pc.green,
  rejected: pc.red,
  superseded: pc.dim,
};

function currentDesignMdHash(projectRoot: string): string {
  const path = join(projectRoot, 'DESIGN.md');
  if (!existsSync(path)) return '';
  return hashContent(readFileSync(path, 'utf8'));
}

function printEntries(entries: PreferenceEntry[]): void {
  const grouped = groupByScope(entries);
  const scopes = [...grouped.keys()].sort();

  for (const scope of scopes) {
    const bucket = grouped.get(scope)!;
    p.log.message(pc.bold(`\n${scope}`) + pc.dim(`  (${bucket.length})`));
    for (const entry of bucket) {
      const color = STATUS_COLOR[entry.meta.status];
      p.log.message(
        `  ${color(entry.meta.status.padEnd(10))}  ${pc.cyan(entry.meta.id)}  ${pc.dim(entry.meta.timestamp.slice(0, 19))}`
      );
      const firstLine = entry.body.split('\n')[0].trim();
      if (firstLine) p.log.message(`    ${pc.dim('└')} ${firstLine}`);
    }
  }
}

export async function runLearn(opts: LearnOptions = {}): Promise<number> {
  const projectRoot = opts.dir ?? process.cwd();
  const relRoot = relative(process.cwd(), projectRoot) || '.';

  // Mutation paths — handle first.
  if (opts.markApplied) {
    const hash = opts.hash ?? currentDesignMdHash(projectRoot);
    if (!hash) {
      console.error(
        pc.red(
          'omd learn --mark-applied: DESIGN.md not found; pass --hash <value> explicitly.'
        )
      );
      return 1;
    }
    try {
      const entry = updateEntryStatus(projectRoot, {
        id: opts.markApplied,
        status: 'applied',
        applied_design_md_hash: hash,
      });
      p.log.success(
        `Marked ${pc.bold(entry.meta.id)} applied (DESIGN.md hash ${pc.cyan(hash)}).`
      );
      return 0;
    } catch (err) {
      console.error(pc.red(String(err)));
      return 1;
    }
  }

  if (opts.markRejected) {
    if (!opts.reason) {
      console.error(
        pc.red('omd learn --mark-rejected: --reason is required.')
      );
      return 1;
    }
    try {
      const entry = updateEntryStatus(projectRoot, {
        id: opts.markRejected,
        status: 'rejected',
        rejected_reason: opts.reason,
      });
      p.log.success(
        `Marked ${pc.bold(entry.meta.id)} rejected (${pc.dim(opts.reason)}).`
      );
      return 0;
    } catch (err) {
      console.error(pc.red(String(err)));
      return 1;
    }
  }

  // Read path — list.
  p.intro(pc.bold('omd learn') + pc.dim(`  (${relRoot})`));

  const file = readFile(projectRoot);
  if (!file) {
    p.outro(
      pc.yellow(
        'No .omd/preferences.md found. Log preferences with `omd remember <note>`.'
      )
    );
    return 0;
  }

  let entries = file.entries;

  if (!opts.all && !opts.status) {
    entries = filterByStatus(entries, 'pending');
  }
  if (opts.status) {
    entries = filterByStatus(entries, opts.status);
  }
  if (opts.scope) {
    entries = entries.filter((e) => e.meta.scope === opts.scope);
  }

  const counts: Record<PreferenceStatus, number> = {
    pending: 0,
    applied: 0,
    rejected: 0,
    superseded: 0,
  };
  for (const e of file.entries) counts[e.meta.status]++;

  p.log.message(
    pc.bold('Totals: ') +
      `${pc.yellow('pending ' + counts.pending)} · ` +
      `${pc.green('applied ' + counts.applied)} · ` +
      `${pc.red('rejected ' + counts.rejected)} · ` +
      `${pc.dim('superseded ' + counts.superseded)}`
  );

  if (entries.length === 0) {
    p.outro(pc.dim('No entries match the current filter.'));
    return 0;
  }

  printEntries(entries);

  p.outro(
    pc.dim(
      `Showing ${entries.length} entries. Use --mark-applied <id> or --mark-rejected <id> --reason <text> to update.`
    )
  );
  return 0;
}
