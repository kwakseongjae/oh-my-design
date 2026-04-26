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
  const trimmed = opts.description.trim();
  if (!trimmed) {
    if (opts.json) {
      process.stdout.write(
        JSON.stringify({ error: 'description is empty' }, null, 2) + '\n'
      );
    } else {
      console.error(
        pc.red(
          'omd init recommend: description is required. Try a few keywords like "warm fintech dashboard" or "minimal dev tool".'
        )
      );
    }
    return 1;
  }

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
  } else {
    p.log.warn(
      'No vocabulary keywords matched. Recommendations will rank by tag overlap only — try adding tone words (warm / minimal / playful / premium / dense / casual / formal / etc.) for stronger matches. See https://github.com/kwakseongjae/oh-my-design#vocabulary for the full list.'
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

  if (!opts.description?.trim()) {
    console.error(
      pc.red(
        'omd init prepare: --description is required and cannot be empty.'
      )
    );
    return 1;
  }

  const refPath = findReferencePath(opts.ref);
  if (!refPath) {
    console.error(
      pc.red(`omd init prepare: reference not found: ${opts.ref}`)
    );
    console.error(
      pc.dim('  Run `omd reference list` to see all available references.')
    );
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

  if (!skillsInstalled(projectRoot)) {
    p.log.warn(
      'No omd:* skills installed in this project — your agent won\'t know how to consume this context. Run `npx oh-my-design-cli install-skills` first.'
    );
  }

  p.outro(
    pc.dim(
      'Next: have your agent (Claude Code / Codex / OpenCode) run the `omd:init` skill to generate DESIGN.md from this context.'
    )
  );
  return 0;
}

function skillsInstalled(projectRoot: string): boolean {
  return (
    existsSync(join(projectRoot, '.claude', 'skills', 'omd-init', 'SKILL.md')) ||
    existsSync(join(projectRoot, '.codex', 'skills', 'omd-init', 'SKILL.md')) ||
    existsSync(join(projectRoot, '.opencode', 'agents', 'omd-init.md'))
  );
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
