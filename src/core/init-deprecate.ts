import {
  existsSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
  mkdirSync,
} from 'node:fs';
import { dirname, join } from 'node:path';

export interface DeprecateOptions {
  projectRoot: string;
  previousReference?: string;
  newReference: string;
  preferencesReplayed?: number;
  preferencesOrphaned?: number;
  orphanFile?: string;
  reason: string;
  now?: Date;
}

export interface DeprecateResult {
  renamed: boolean;
  from: string;
  to: string;
}

function deprecationHeader(opts: DeprecateOptions): string {
  const now = (opts.now ?? new Date()).toISOString();
  const lines = [
    '<!--',
    'omd:deprecated',
    `  deprecated_at: ${now}`,
  ];
  if (opts.previousReference)
    lines.push(`  previous_reference: ${opts.previousReference}`);
  lines.push(`  new_reference: ${opts.newReference}`);
  if (opts.preferencesReplayed !== undefined)
    lines.push(`  preferences_replayed: ${opts.preferencesReplayed}`);
  if (opts.preferencesOrphaned !== undefined)
    lines.push(`  preferences_orphaned: ${opts.preferencesOrphaned}`);
  if (opts.orphanFile) lines.push(`  orphan_file: ${opts.orphanFile}`);
  lines.push(`  reason: ${opts.reason}`);
  lines.push('-->', '', '');
  return lines.join('\n');
}

export function deprecateDesignMd(opts: DeprecateOptions): DeprecateResult {
  const from = join(opts.projectRoot, 'DESIGN.md');
  const baseTo = join(opts.projectRoot, 'DESIGN_DEPRECATED.md');

  if (!existsSync(from)) {
    return { renamed: false, from, to: baseTo };
  }

  let target = baseTo;
  if (existsSync(baseTo)) {
    const ts = (opts.now ?? new Date()).toISOString().replace(/[:.]/g, '-');
    target = join(opts.projectRoot, `DESIGN_DEPRECATED.${ts}.md`);
  }

  mkdirSync(dirname(target), { recursive: true });
  const prior = readFileSync(from, 'utf8');
  writeFileSync(target, deprecationHeader(opts) + prior, 'utf8');
  unlinkSync(from);

  return { renamed: true, from, to: target };
}
