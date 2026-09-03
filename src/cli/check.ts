import { spawnSync, type SpawnSyncReturns } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Bundled-tool bridge.
 *
 * The landing/showcase/setup skills used to tell an agent to run repo-relative
 * paths (`node test-v2/tools/render-integrity.mjs …`). Those paths only exist
 * inside this repository; in a consumer project the same files live under
 * `node_modules/oh-my-design-cli/…`. These subcommands resolve the tool against
 * the installed package root and hand every argument straight through, so the
 * documented command works from either side.
 */

export type BundledToolId =
  | 'check:render'
  | 'check:landing'
  | 'check:contrast'
  | 'showcase'
  | 'setup:detect';

/** Package-root-relative path of every tool the CLI is allowed to spawn. */
export const BUNDLED_TOOLS: Readonly<Record<BundledToolId, string>> = Object.freeze({
  'check:render': 'test-v2/tools/render-integrity.mjs',
  'check:landing': 'test-v2/tools/landing-integrity.mjs',
  'check:contrast': 'test-v2/tools/text-contrast.mjs',
  showcase: 'test-v2/tools/showcase.mjs',
  'setup:detect': 'scripts/omd-setup-detect.mjs',
});

/** Exit code used for "the environment is missing something you must install". */
export const MISSING_TOOL_EXIT = 3;

export interface RunBundledToolDeps {
  /** Override the package root (tests, and the repo-checkout case). */
  root?: string | null;
  spawn?: (
    command: string,
    args: readonly string[],
    options: { stdio: 'inherit'; cwd: string },
  ) => Pick<SpawnSyncReturns<string>, 'status' | 'error' | 'signal'>;
  execPath?: string;
  cwd?: string;
  stderr?: (line: string) => void;
}

/**
 * Walk up from this module to the `oh-my-design-cli` package root. Deliberately
 * not `process.cwd()`: the whole point is that the caller's project is not this
 * package.
 */
export function findPackageRoot(from?: string): string | null {
  let current = from ?? dirname(fileURLToPath(import.meta.url));
  for (let depth = 0; depth < 8; depth += 1) {
    const packageJson = join(current, 'package.json');
    try {
      const parsed: unknown = JSON.parse(readFileSync(packageJson, 'utf8'));
      if (
        parsed &&
        typeof parsed === 'object' &&
        (parsed as { name?: unknown }).name === 'oh-my-design-cli'
      ) {
        return current;
      }
    } catch {
      // keep walking toward the package root
    }
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return null;
}

/**
 * Absolute path of a bundled tool, or null when the package did not ship it.
 * `root` omitted means "detect"; an explicit `null` means "there is no package
 * root" and must not silently fall back to detection.
 */
export function resolveBundledTool(id: BundledToolId, root?: string | null): string | null {
  const packageRoot = root === undefined ? findPackageRoot() : root;
  if (!packageRoot) return null;
  const candidate = join(packageRoot, BUNDLED_TOOLS[id]);
  return existsSync(candidate) ? candidate : null;
}

/**
 * Spawn a bundled tool with `args` passed through verbatim and its exit code
 * propagated. stdio is inherited so the tool's own report is the output.
 */
export function runBundledTool(
  id: BundledToolId,
  args: readonly string[],
  deps: RunBundledToolDeps = {},
): number {
  const spawn = deps.spawn ?? (spawnSync as unknown as NonNullable<RunBundledToolDeps['spawn']>);
  const stderr = deps.stderr ?? ((line: string) => console.error(line));
  const root = deps.root === undefined ? findPackageRoot() : deps.root;
  const tool = resolveBundledTool(id, root);
  if (!tool) {
    stderr(
      `omd: ${BUNDLED_TOOLS[id]} is not present in this oh-my-design-cli installation — ` +
        'reinstall with `npm i -D oh-my-design-cli@latest` (run `omd doctor` to see what is installed).',
    );
    return MISSING_TOOL_EXIT;
  }
  const result = spawn(deps.execPath ?? process.execPath, [tool, ...args], {
    stdio: 'inherit',
    cwd: deps.cwd ?? process.cwd(),
  });
  if (result.error) {
    stderr(`omd: could not run ${BUNDLED_TOOLS[id]} — ${String(result.error.message ?? result.error)}`);
    return MISSING_TOOL_EXIT;
  }
  if (typeof result.status === 'number') return result.status;
  // Killed by a signal: no status. Report a failure rather than a false pass.
  return 1;
}

/**
 * Everything after the last subcommand token, verbatim. Commander is configured
 * to allow unknown options for these commands, but its own parse still reorders
 * and swallows flags; the raw slice is what actually preserves `--json`,
 * `--viewport 390x844`, and friends.
 */
export function passthroughArgs(path: readonly string[], argv: readonly string[] = process.argv): string[] {
  let index = 2;
  for (const token of path) {
    const found = argv.indexOf(token, index);
    if (found === -1) return [];
    index = found + 1;
  }
  return argv.slice(index);
}

export type CheckBrowserMode = 'playwright-cache' | 'chrome' | 'none' | 'unknown';

export interface CheckBrowserStatus {
  mode: CheckBrowserMode;
  detail: string;
  playwrightCore: string | null;
}

/**
 * Read-only browser availability for `omd check …` / `omd showcase`.
 * Delegates to the same probe the tools use so doctor cannot drift from them.
 */
export function detectCheckBrowser(deps: RunBundledToolDeps = {}): CheckBrowserStatus {
  const root = deps.root === undefined ? findPackageRoot() : deps.root;
  const probe = root ? join(root, 'test-v2', 'tools', 'lib', 'browser.mjs') : null;
  if (!probe || !existsSync(probe)) {
    return { mode: 'unknown', detail: 'browser probe not bundled', playwrightCore: null };
  }
  const result = spawnSync(deps.execPath ?? process.execPath, [probe, '--json'], {
    encoding: 'utf8',
    timeout: 10_000,
  });
  if (result.status !== 0 || !result.stdout) {
    return { mode: 'unknown', detail: 'browser probe failed', playwrightCore: null };
  }
  try {
    const parsed = JSON.parse(result.stdout) as Partial<CheckBrowserStatus>;
    return {
      mode: (parsed.mode as CheckBrowserMode) ?? 'unknown',
      detail: parsed.detail ?? '',
      playwrightCore: parsed.playwrightCore ?? null,
    };
  } catch {
    return { mode: 'unknown', detail: 'browser probe emitted unparseable JSON', playwrightCore: null };
  }
}

/** One line for `omd doctor`. */
export function describeCheckBrowser(status: CheckBrowserStatus): string {
  if (status.mode === 'playwright-cache') return `Render checks: Playwright Chromium — ${status.detail}`;
  if (status.mode === 'chrome') return `Render checks: Google Chrome channel — ${status.detail}`;
  if (status.mode === 'none') {
    return (
      'Render checks: no browser — install Google Chrome or run `npx playwright install chromium` ' +
      '(`omd check render` / `omd showcase` need one).'
    );
  }
  return `Render checks: browser availability unknown — ${status.detail}`;
}
