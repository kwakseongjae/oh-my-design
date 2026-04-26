import * as p from '@clack/prompts';
import pc from 'picocolors';
import {
  writeFileSync,
  readFileSync,
  mkdirSync,
  existsSync,
} from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDeltaSet } from '../core/vocabulary.js';
import { recommend } from '../core/recommend.js';
import { deprecateDesignMd } from '../core/init-deprecate.js';

export interface InitRecommendOptions {
  description: string;
  topK?: number;
  json?: boolean;
}

export interface InitPrepareOptions {
  dir?: string;
  ref: string;
  description: string;
  reason?: string;
  json?: boolean;
}

export function runInitRecommend(opts: InitRecommendOptions): number {
  const hits = recommend(opts.description, { topK: opts.topK ?? 5 });
  const delta = buildDeltaSet(opts.description);

  if (opts.json) {
    process.stdout.write(
      JSON.stringify(
        {
          description: opts.description,
          recommendations: hits,
          delta_set: delta,
        },
        null,
        2
      )
    );
    process.stdout.write('\n');
    return 0;
  }

  p.intro(pc.bold('omd init — recommend'));
  p.log.message(pc.dim(`Query: "${opts.description}"\n`));

  if (delta.matchedKeywords.length > 0) {
    p.log.message(
      pc.bold('Matched keywords: ') +
        delta.matchedKeywords
          .map((k) => pc.cyan(k.keyword) + pc.dim(` (${k.modifier.toFixed(2)})`))
          .join(', ')
    );
  }
  if (delta.warnings.length > 0) {
    for (const w of delta.warnings) p.log.warn(w);
  }

  p.log.message(pc.bold('\nTop references:'));
  for (const [i, hit] of hits.entries()) {
    const scoreStr = pc.dim(`[${hit.score.toFixed(2)}]`);
    const matched = hit.matchedKeywords.length > 0
      ? pc.green(hit.matchedKeywords.join(', '))
      : pc.dim('(no direct tag match)');
    p.log.message(
      `  ${i + 1}. ${pc.bold(hit.id.padEnd(14))} ${scoreStr}  ${pc.dim(hit.category.padEnd(14))}  ${matched}`
    );
  }

  p.outro(
    pc.dim('Next: `omd init prepare --ref <id> --description "..."` to stage.')
  );
  return 0;
}

export function runInitPrepare(opts: InitPrepareOptions): number {
  const projectRoot = opts.dir ?? process.cwd();
  const relRoot = relative(process.cwd(), projectRoot) || '.';

  const refPath = findReferencePath(opts.ref);
  if (!refPath) {
    console.error(pc.red(`omd init prepare: reference not found: ${opts.ref}`));
    return 1;
  }

  const referenceMd = readFileSync(refPath, 'utf8');
  const delta = buildDeltaSet(opts.description);

  // Handle existing DESIGN.md
  const deprecate = deprecateDesignMd({
    projectRoot,
    newReference: opts.ref,
    reason: opts.reason ?? 'user-initiated omd init',
  });

  // Write init-context.json that the omd:init skill consumes.
  // Note: we deliberately do NOT persist reference_path (absolute paths are
  // fragile across machines / npm reinstalls). The skill reads reference_md
  // directly from this command's --json output, and can re-fetch reference
  // content via `omd reference show <id>` if needed.
  const contextPath = join(projectRoot, '.omd', 'init-context.json');
  mkdirSync(join(projectRoot, '.omd'), { recursive: true });
  const context = {
    schema: 'omd.init-context/v1',
    created_at: new Date().toISOString(),
    reference_id: opts.ref,
    description: opts.description,
    delta_set: delta,
    deprecated_from: deprecate.renamed ? deprecate.to : null,
  };
  writeFileSync(contextPath, JSON.stringify(context, null, 2) + '\n', 'utf8');

  if (opts.json) {
    process.stdout.write(
      JSON.stringify(
        {
          project_root: projectRoot,
          reference_path: refPath,
          context_path: contextPath,
          deprecated_from: deprecate.renamed ? deprecate.to : null,
          reference_md: referenceMd,
          delta_set: delta,
        },
        null,
        2
      )
    );
    process.stdout.write('\n');
    return 0;
  }

  p.intro(pc.bold('omd init — prepare') + pc.dim(`  (${relRoot})`));
  p.log.message(`Reference: ${pc.cyan(opts.ref)}`);
  p.log.message(`Description: ${pc.dim(opts.description)}`);
  if (deprecate.renamed) {
    p.log.warn(
      `Existing DESIGN.md renamed → ${relative(projectRoot, deprecate.to)}`
    );
  }
  p.log.success(
    `Context staged → ${relative(projectRoot, contextPath)}`
  );
  p.outro(
    pc.dim(
      'Next: have your agent (Claude Code / Codex / OpenCode) run the `omd:init` skill to generate DESIGN.md from this context.'
    )
  );
  return 0;
}

function findReferencePath(refId: string): string | null {
  const root = findRepoRoot();
  if (!root) return null;
  const path = join(root, 'references', refId, 'DESIGN.md');
  return existsSync(path) ? path : null;
}

function findRepoRoot(): string | null {
  let cur = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(cur, 'references'))) return cur;
    const parent = dirname(cur);
    if (parent === cur) break;
    cur = parent;
  }
  return null;
}
