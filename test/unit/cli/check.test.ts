import { describe, expect, it } from 'vitest';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import {
  BUNDLED_TOOLS,
  MISSING_TOOL_EXIT,
  describeCheckBrowser,
  detectCheckBrowser,
  findPackageRoot,
  passthroughArgs,
  resolveBundledTool,
  runBundledTool,
  type BundledToolId,
} from '../../../src/cli/check.js';

/** A package root that ships every bundled tool the CLI is allowed to spawn. */
function packagedRoot(only?: readonly BundledToolId[]): string {
  const root = mkdtempSync(join(tmpdir(), 'omd-check-'));
  writeFileSync(join(root, 'package.json'), JSON.stringify({ name: 'oh-my-design-cli' }), 'utf8');
  for (const [id, relative] of Object.entries(BUNDLED_TOOLS)) {
    if (only && !only.includes(id as BundledToolId)) continue;
    const target = join(root, relative);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, '// bundled tool\n', 'utf8');
  }
  return root;
}

interface SpawnCall {
  command: string;
  args: readonly string[];
  options: { stdio: 'inherit'; cwd: string };
}

function recordingSpawn(result: { status?: number | null; signal?: NodeJS.Signals | null; error?: Error }) {
  const calls: SpawnCall[] = [];
  const spawn = (command: string, args: readonly string[], options: { stdio: 'inherit'; cwd: string }) => {
    calls.push({ command, args, options });
    return { status: result.status ?? null, signal: result.signal ?? null, error: result.error };
  };
  return { calls, spawn };
}

describe('omd check / showcase / setup detect routing', () => {
  it('resolves every bundled tool against the package root, not the caller cwd', () => {
    const root = packagedRoot();
    for (const [id, relative] of Object.entries(BUNDLED_TOOLS)) {
      expect(resolveBundledTool(id as BundledToolId, root)).toBe(join(root, relative));
    }
  });

  it('passes every argument through verbatim and spawns the resolved absolute tool path', () => {
    const root = packagedRoot();
    const { calls, spawn } = recordingSpawn({ status: 0 });
    const code = runBundledTool(
      'check:contrast',
      ['a/render.html', 'b/render.html', '--viewport', '390x844', '--json', '--out', 'evidence'],
      { root, spawn, execPath: '/usr/bin/node', cwd: '/tmp/project' },
    );
    expect(code).toBe(0);
    expect(calls).toHaveLength(1);
    expect(calls[0].command).toBe('/usr/bin/node');
    expect(calls[0].args).toEqual([
      join(root, BUNDLED_TOOLS['check:contrast']),
      'a/render.html',
      'b/render.html',
      '--viewport',
      '390x844',
      '--json',
      '--out',
      'evidence',
    ]);
    // The tool must run where the user invoked omd, so relative paths resolve.
    expect(calls[0].options.cwd).toBe('/tmp/project');
    expect(calls[0].options.stdio).toBe('inherit');
  });

  it('propagates the tool exit code instead of collapsing it to 0/1', () => {
    const root = packagedRoot();
    for (const status of [0, 1, 2, 3, 4]) {
      const { spawn } = recordingSpawn({ status });
      expect(runBundledTool('check:render', ['x.html'], { root, spawn })).toBe(status);
    }
  });

  it('reports failure when the tool is killed by a signal rather than exiting', () => {
    const root = packagedRoot();
    const { spawn } = recordingSpawn({ status: null, signal: 'SIGKILL' });
    expect(runBundledTool('showcase', ['x.html'], { root, spawn })).toBe(1);
  });

  it('exits 3 with one actionable line when the package did not ship the tool', () => {
    const root = packagedRoot(['check:render']);
    const lines: string[] = [];
    const { calls, spawn } = recordingSpawn({ status: 0 });
    const code = runBundledTool('showcase', ['x.html'], { root, spawn, stderr: (line) => lines.push(line) });
    expect(code).toBe(MISSING_TOOL_EXIT);
    expect(calls).toHaveLength(0);
    expect(lines).toHaveLength(1);
    expect(lines[0]).toContain(BUNDLED_TOOLS.showcase);
    expect(lines[0]).toContain('oh-my-design-cli@latest');
  });

  it('exits 3 with one actionable line when the package root cannot be found', () => {
    const lines: string[] = [];
    const { calls, spawn } = recordingSpawn({ status: 0 });
    const code = runBundledTool('check:landing', ['x.html'], {
      root: null,
      spawn,
      stderr: (line) => lines.push(line),
    });
    expect(code).toBe(MISSING_TOOL_EXIT);
    expect(calls).toHaveLength(0);
    expect(lines).toHaveLength(1);
  });

  it('surfaces a spawn error as exit 3 instead of a silent pass', () => {
    const root = packagedRoot();
    const lines: string[] = [];
    const { spawn } = recordingSpawn({ status: null, error: new Error('ENOENT node') });
    const code = runBundledTool('check:render', ['x.html'], { root, spawn, stderr: (line) => lines.push(line) });
    expect(code).toBe(MISSING_TOOL_EXIT);
    expect(lines[0]).toContain('ENOENT node');
  });

  it('slices raw argv after the subcommand path so flags survive commander', () => {
    expect(
      passthroughArgs(['check', 'render'], ['node', 'omd', 'check', 'render', 'a.html', '--json']),
    ).toEqual(['a.html', '--json']);
    expect(
      passthroughArgs(['showcase'], ['node', 'omd', 'showcase', '--compare', 'a.html', 'b.html', '--gif']),
    ).toEqual(['--compare', 'a.html', 'b.html', '--gif']);
    expect(passthroughArgs(['setup', 'detect'], ['node', 'omd', 'setup', 'detect', '--json'])).toEqual(['--json']);
    // A file literally named like a subcommand must not shift the slice point.
    expect(
      passthroughArgs(['check', 'render'], ['node', 'omd', 'check', 'render', 'render', '--json']),
    ).toEqual(['render', '--json']);
    expect(passthroughArgs(['check', 'render'], ['node', 'omd', 'doctor'])).toEqual([]);
  });

  it('finds this package root from its own module location', () => {
    const root = findPackageRoot();
    expect(root).not.toBeNull();
    expect(resolveBundledTool('check:render', root)).toBe(join(root!, BUNDLED_TOOLS['check:render']));
  });

  it('reports browser availability read-only, and stays honest when the probe is absent', () => {
    const status = detectCheckBrowser({ root: packagedRoot([]) });
    expect(status.mode).toBe('unknown');
    expect(describeCheckBrowser(status)).toContain('unknown');

    expect(describeCheckBrowser({ mode: 'chrome', detail: '/Applications/x', playwrightCore: '/pw' }))
      .toContain('Google Chrome');
    expect(describeCheckBrowser({ mode: 'playwright-cache', detail: 'cache', playwrightCore: '/pw' }))
      .toContain('Playwright Chromium');
    expect(describeCheckBrowser({ mode: 'none', detail: '', playwrightCore: null }))
      .toContain('playwright install chromium');
  });

  it('detects a real browser through the bundled probe in this checkout', () => {
    const status = detectCheckBrowser();
    expect(['playwright-cache', 'chrome', 'none']).toContain(status.mode);
  });
});
