import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import {
  parseBlock,
  writeBlock,
  hashContent,
  hasDrift,
} from './sync-marker.js';
import { updateTarget, updateDesignMdHash } from './sync-lock.js';

export const MANAGED_BLOCK_VERSION = 1;

export type ShimId = 'claude' | 'agents' | 'cursor';

export type ShimMode = 'block' | 'whole';

export interface Shim {
  id: ShimId;
  relPath: string;
  mode: ShimMode;
  render(): string;
}

const CLAUDE_BODY = `# Design System (oh-my-design)

The authoritative brand & UI spec is **@./DESIGN.md**.
Read before any UI/styling/microcopy/motion work.

Preference log (pending corrections): @./.omd/preferences.md

Precedence: DESIGN.md > preferences.md > your defaults.`;

const AGENTS_BODY = `## Design System (oh-my-design)

**Before any UI, styling, copy, or motion change, open and read \`./DESIGN.md\` in full.** It is the authoritative brand/design spec. Treat its tokens, voice, and component rules as binding unless the user overrides in chat.

If present, read \`./.omd/preferences.md\` — pending corrections not yet folded into DESIGN.md. Apply them; flag conflicts.`;

const CURSOR_FRONTMATTER = `---
description: Authoritative brand & UI design system. Read DESIGN.md before UI work.
globs:
  - "**/*.tsx"
  - "**/*.jsx"
  - "**/*.vue"
  - "**/*.svelte"
  - "**/*.css"
  - "**/*.scss"
  - "**/tailwind.config.*"
  - "**/components/**"
  - "**/app/**/page.*"
alwaysApply: false
---`;

const CURSOR_BODY = `The authoritative design spec lives at \`@DESIGN.md\` (repo root). Open and read before generating/modifying UI.

Pending preference corrections: \`@.omd/preferences.md\`.

Precedence: DESIGN.md > preferences.md > framework defaults.`;

export const CLAUDE_SHIM: Shim = {
  id: 'claude',
  relPath: 'CLAUDE.md',
  mode: 'block',
  render: () => CLAUDE_BODY,
};

export const AGENTS_SHIM: Shim = {
  id: 'agents',
  relPath: 'AGENTS.md',
  mode: 'block',
  render: () => AGENTS_BODY,
};

export const CURSOR_SHIM: Shim = {
  id: 'cursor',
  relPath: '.cursor/rules/omd-design.mdc',
  mode: 'whole',
  render: () => {
    const hash = hashContent(CURSOR_BODY);
    return `${CURSOR_FRONTMATTER}\n\n<!-- omd:start v=${MANAGED_BLOCK_VERSION} hash=${hash} -->\n${CURSOR_BODY}\n<!-- omd:end -->\n`;
  },
};

export const ALL_SHIMS: readonly Shim[] = [
  CLAUDE_SHIM,
  AGENTS_SHIM,
  CURSOR_SHIM,
] as const;

export type DriftAction = 'overwrite' | 'skip' | 'error';

export interface WriteShimResult {
  id: ShimId;
  path: string;
  hash: string;
  status: 'created' | 'updated' | 'unchanged' | 'skipped-drift';
}

export interface WriteShimsOptions {
  onDrift?: DriftAction;
}

function resolvePath(projectRoot: string, relPath: string): string {
  return join(projectRoot, relPath);
}

function readFileOrEmpty(path: string): string {
  return existsSync(path) ? readFileSync(path, 'utf8') : '';
}

function ensureDir(path: string): void {
  mkdirSync(dirname(path), { recursive: true });
}

export type InspectStatus =
  | 'missing'
  | 'clean'
  | 'drifted'
  | 'out-of-date';

export interface InspectResult {
  id: ShimId;
  path: string;
  status: InspectStatus;
  existing?: string;
  rendered: string;
}

export function inspectShim(projectRoot: string, shim: Shim): InspectResult {
  const abs = resolvePath(projectRoot, shim.relPath);
  const existing = readFileOrEmpty(abs);
  const fileExists = existing !== '';

  if (shim.mode === 'whole') {
    const rendered = shim.render();
    if (!fileExists) {
      return { id: shim.id, path: abs, status: 'missing', rendered };
    }
    if (existing === rendered) {
      return { id: shim.id, path: abs, status: 'clean', existing, rendered };
    }
    return { id: shim.id, path: abs, status: 'drifted', existing, rendered };
  }

  const managed = shim.render();
  const block = parseBlock(existing);

  if (!block) {
    return {
      id: shim.id,
      path: abs,
      status: 'missing',
      existing: fileExists ? existing : undefined,
      rendered: managed,
    };
  }

  if (hasDrift(block)) {
    return {
      id: shim.id,
      path: abs,
      status: 'drifted',
      existing: block.content,
      rendered: managed,
    };
  }

  if (block.content === managed) {
    return {
      id: shim.id,
      path: abs,
      status: 'clean',
      existing: block.content,
      rendered: managed,
    };
  }

  return {
    id: shim.id,
    path: abs,
    status: 'out-of-date',
    existing: block.content,
    rendered: managed,
  };
}

export function inspectAllShims(projectRoot: string): InspectResult[] {
  return ALL_SHIMS.map((s) => inspectShim(projectRoot, s));
}

export function writeShim(
  projectRoot: string,
  shim: Shim,
  opts: WriteShimsOptions = {}
): WriteShimResult {
  const onDrift = opts.onDrift ?? 'error';
  const abs = resolvePath(projectRoot, shim.relPath);
  const existing = readFileOrEmpty(abs);
  const fileExists = existing !== '';

  if (shim.mode === 'whole') {
    const rendered = shim.render();
    const newHash = hashContent(rendered);

    if (fileExists && existing !== rendered) {
      const existingHash = hashContent(existing);
      if (onDrift === 'error') {
        throw new Error(
          `drift detected in ${shim.relPath} (existing hash ${existingHash} != rendered ${newHash}); rerun with onDrift=overwrite to force`
        );
      }
      if (onDrift === 'skip') {
        updateTarget(projectRoot, shim.relPath, existingHash);
        return {
          id: shim.id,
          path: abs,
          hash: existingHash,
          status: 'skipped-drift',
        };
      }
    }

    if (fileExists && existing === rendered) {
      updateTarget(projectRoot, shim.relPath, newHash);
      return { id: shim.id, path: abs, hash: newHash, status: 'unchanged' };
    }

    ensureDir(abs);
    writeFileSync(abs, rendered, 'utf8');
    updateTarget(projectRoot, shim.relPath, newHash);
    return {
      id: shim.id,
      path: abs,
      hash: newHash,
      status: fileExists ? 'updated' : 'created',
    };
  }

  const managed = shim.render();
  const existingBlock = parseBlock(existing);

  if (existingBlock && hasDrift(existingBlock)) {
    if (onDrift === 'error') {
      throw new Error(
        `managed block in ${shim.relPath} was hand-edited; rerun with onDrift=overwrite to force`
      );
    }
    if (onDrift === 'skip') {
      updateTarget(projectRoot, shim.relPath, existingBlock.hash);
      return {
        id: shim.id,
        path: abs,
        hash: existingBlock.hash,
        status: 'skipped-drift',
      };
    }
  }

  if (existingBlock && existingBlock.content === managed && !hasDrift(existingBlock)) {
    updateTarget(projectRoot, shim.relPath, existingBlock.hash);
    return {
      id: shim.id,
      path: abs,
      hash: existingBlock.hash,
      status: 'unchanged',
    };
  }

  const { updated, hash } = writeBlock(existing, managed, MANAGED_BLOCK_VERSION);
  ensureDir(abs);
  writeFileSync(abs, updated, 'utf8');
  updateTarget(projectRoot, shim.relPath, hash);
  return {
    id: shim.id,
    path: abs,
    hash,
    status: existingBlock ? 'updated' : 'created',
  };
}

export function writeAllShims(
  projectRoot: string,
  opts: WriteShimsOptions = {}
): WriteShimResult[] {
  const results = ALL_SHIMS.map((shim) => writeShim(projectRoot, shim, opts));
  refreshDesignMdHash(projectRoot);
  return results;
}

export function refreshDesignMdHash(projectRoot: string): string | null {
  const designMdPath = join(projectRoot, 'DESIGN.md');
  if (!existsSync(designMdPath)) return null;
  const hash = hashContent(readFileSync(designMdPath, 'utf8'));
  updateDesignMdHash(projectRoot, hash);
  return hash;
}
