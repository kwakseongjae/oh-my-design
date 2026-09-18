import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { runSerializedPackageBuildAndPack } from './package-build-lock';

const repoRoot = resolve(import.meta.dirname, '../../..');
let root: string | null = null;

function run(command: string, args: string[], cwd: string) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    env: {
      ...process.env,
      OMD_BROWSER: 'chrome',
      NO_UPDATE_NOTIFIER: '1',
      npm_config_audit: 'false',
      npm_config_fund: 'false',
    },
  });
  expect(result.status, `${command} ${args.join(' ')}\n${result.stderr || result.stdout}`).toBe(0);
  return result;
}

afterEach(() => {
  if (root && existsSync(root)) rmSync(root, { recursive: true, force: true });
  root = null;
});

describe('published Aphrodite dependency closure', () => {
  it('installs into a clean consumer and runs its font, fx, and real render paths', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-packaged-aphrodite-'));
    const packDir = join(root, 'pack');
    const consumerDir = join(root, 'consumer');
    mkdirSync(packDir, { recursive: true });
    mkdirSync(consumerDir, { recursive: true });
    writeFileSync(join(consumerDir, 'package.json'), `${JSON.stringify({ name: 'aphrodite-consumer', private: true })}\n`);

    const manifest = JSON.parse(runSerializedPackageBuildAndPack(repoRoot, packDir));
    const packagedPaths = new Set(manifest[0].files.map((file: { path: string }) => file.path));
    for (const path of [
      'skills/omd-aphrodite/SKILL.md',
      'test-v2/tools/font-inline.mjs',
      'test-v2/tools/render-integrity.mjs',
      'test-v2/tools/lib/browser.mjs',
      'docs/design-excellence/storyboard-review.md',
      'docs/design-excellence/fx-library/scroll-gsap/lib/LICENSES.md',
    ]) expect(packagedPaths.has(path), `tarball contains ${path}`).toBe(true);

    const tarball = join(packDir, manifest[0].filename);
    run('npm', ['install', '--offline', '--ignore-scripts', '--no-package-lock', '--no-audit', '--no-fund', tarball], consumerDir);
    const packageRoot = join(consumerDir, 'node_modules/oh-my-design-cli');
    const cli = join(packageRoot, 'dist/bin/oh-my-design.js');
    run(process.execPath, [cli, 'install-skills', '--dir', consumerDir, '--agent', 'codex', '--skills', 'omd-aphrodite', '--skills-only'], consumerDir);

    const skillRoot = join(consumerDir, '.agents/skills/omd-aphrodite');
    for (const path of [
      'SKILL.md',
      'docs/design-excellence/landing-craft-codex.md',
      'docs/design-excellence/storyboard-review.md',
      'docs/design-excellence/fx-library/INDEX.md',
      'docs/design-excellence/fx-library/scroll-gsap/lib/LICENSES.md',
    ]) expect(existsSync(join(skillRoot, path)), `installed ${path}`).toBe(true);
    expect(readFileSync(join(skillRoot, 'SKILL.md'), 'utf8')).toContain('omd check render');

    expect(run(process.execPath, [cli, 'font', 'inline', '--list'], consumerDir).stdout).toContain('fraunces');
    run(process.execPath, [join(skillRoot, 'docs/design-excellence/fx-library/scroll-gsap/build.mjs')], consumerDir);

    const html = join(consumerDir, 'render.html');
    writeFileSync(html, '<!doctype html><style>*{box-sizing:border-box}body{margin:0;font-family:sans-serif}main{padding:32px}</style><main>Installed render check</main>\n');
    const checked = run(process.execPath, [cli, 'check', 'render', html, '--json'], consumerDir);
    expect(checked.stdout).toContain('"verdict": "PASS"');
  }, 60_000);
});
