import { createHash } from 'node:crypto';
import { mkdirSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const waitCell = new Int32Array(new SharedArrayBuffer(4));
const staleAfterMs = 120_000;
const waitDeadlineMs = 180_000;

function isAlreadyExists(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error
    && (error as { code?: unknown }).code === 'EEXIST';
}

/**
 * The two packaged smoke files run in separate Vitest workers. Both used to
 * invoke tsup with `clean: true` concurrently, allowing one build to unlink a
 * sourcemap while the other was cleaning the same `dist` directory. Serialize
 * only that shared build step; packaging and consumer checks remain parallel.
 */
export function runSerializedPackageBuildAndPack(repoRoot: string, packDir: string): string {
  const repoKey = createHash('sha256').update(repoRoot).digest('hex').slice(0, 16);
  const lockDir = join(tmpdir(), `omd-package-build-${repoKey}.lock`);
  const deadline = Date.now() + waitDeadlineMs;

  while (true) {
    try {
      mkdirSync(lockDir);
      break;
    } catch (error) {
      if (!isAlreadyExists(error)) throw error;
      try {
        if (Date.now() - statSync(lockDir).mtimeMs > staleAfterMs) {
          rmSync(lockDir, { recursive: true, force: true });
          continue;
        }
      } catch {
        continue;
      }
      if (Date.now() >= deadline) {
        throw new Error(`timed out waiting for serialized package build lock: ${lockDir}`);
      }
      Atomics.wait(waitCell, 0, 0, 50);
    }
  }

  try {
    const result = spawnSync('npm', ['run', 'build'], {
      cwd: repoRoot,
      encoding: 'utf8',
      env: {
        ...process.env,
        CI: '1',
        DISABLE_TELEMETRY: '1',
        DO_NOT_TRACK: '1',
        NO_UPDATE_NOTIFIER: '1',
        npm_config_audit: 'false',
        npm_config_fund: 'false',
      },
    });
    if (result.status !== 0) {
      throw new Error(`npm run build\n${result.stderr || result.stdout}`);
    }
    const packed = spawnSync('npm', [
      'pack',
      '--json',
      '--ignore-scripts',
      '--pack-destination',
      packDir,
    ], {
      cwd: repoRoot,
      encoding: 'utf8',
      env: {
        ...process.env,
        CI: '1',
        DISABLE_TELEMETRY: '1',
        DO_NOT_TRACK: '1',
        NO_UPDATE_NOTIFIER: '1',
        npm_config_audit: 'false',
        npm_config_fund: 'false',
      },
    });
    if (packed.status !== 0) {
      throw new Error(`npm pack --json --ignore-scripts\n${packed.stderr || packed.stdout}`);
    }
    // npm can print notices before the JSON payload; start at the first
    // standalone `[` line rather than assuming stdout begins with it.
    const start = packed.stdout.search(/^\[\s*$/m);
    if (start < 0) {
      throw new Error(`npm pack --json produced no JSON payload\n${packed.stdout}`);
    }
    return packed.stdout.slice(start);
  } finally {
    rmSync(lockDir, { recursive: true, force: true });
  }
}
