#!/usr/bin/env node

// Keep repository dogfood/runtime mirrors aligned with the same installer that
// npm consumers execute. Canonical authoring remains in skills/ and agents/.
//
// The allowlist is intentionally narrow. Destination-only entries are local or
// development overlays and are reported, never deleted or overwritten by
// inference.

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const MIRROR_ROOTS = Object.freeze([
  { id: 'claude-skills', relative: '.claude/skills' },
  // `.agents/skills` is a project-local Codex installation surface. Most of
  // it is intentionally gitignored; a clean source checkout owns canonical
  // `skills/` plus a small set of explicit safety overlays only. Validate any
  // installed files that are present, but do not make their absence a release
  // drift. `--write` still materializes the complete local dogfood mirror.
  { id: 'codex-skills', relative: '.agents/skills', localOnly: true },
  { id: 'claude-agents', relative: '.claude/agents' },
  { id: 'codex-agents', relative: '.codex/agents' },
]);

function filesUnder(root) {
  if (!fs.existsSync(root)) return [];
  const output = [];
  const visit = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const absolute = path.join(dir, entry.name);
      const relative = path.relative(root, absolute).split(path.sep).join('/');
      if (entry.isSymbolicLink()) {
        output.push({ relative, absolute, kind: 'symlink' });
      } else if (entry.isDirectory()) {
        visit(absolute);
      } else if (entry.isFile()) {
        output.push({ relative, absolute, kind: 'file' });
      }
    }
  };
  visit(root);
  return output.sort((a, b) => a.relative.localeCompare(b.relative));
}

function inspectRuntimeMirrors(repoRoot, generatedRoot, options = {}) {
  const drift = [];
  const excluded = [];
  const omitted = [];
  const requireLocalOnly = options.requireLocalOnly !== false;
  let current = 0;

  for (const mirror of MIRROR_ROOTS) {
    const expectedRoot = path.join(generatedRoot, mirror.relative);
    const targetRoot = path.join(repoRoot, mirror.relative);
    const expected = filesUnder(expectedRoot);
    const expectedNames = new Set(expected.map((item) => item.relative));

    for (const item of expected) {
      const target = path.join(targetRoot, item.relative);
      if (item.kind !== 'file') {
        throw new Error(`generated mirror unexpectedly contains a symlink: ${mirror.relative}/${item.relative}`);
      }
      if (!fs.existsSync(target)) {
        if (mirror.localOnly && !requireLocalOnly) {
          omitted.push({ ...mirror, relative: item.relative, reason: 'local-dogfood-not-installed' });
          continue;
        }
        drift.push({ ...mirror, relative: item.relative, reason: 'missing', expected: item.absolute, target });
        continue;
      }
      const targetStat = fs.lstatSync(target);
      if (!targetStat.isFile()) {
        drift.push({ ...mirror, relative: item.relative, reason: 'unsafe-target', expected: item.absolute, target });
        continue;
      }
      if (!fs.readFileSync(item.absolute).equals(fs.readFileSync(target))) {
        drift.push({ ...mirror, relative: item.relative, reason: 'content', expected: item.absolute, target });
      } else {
        current += 1;
      }
    }

    for (const item of filesUnder(targetRoot)) {
      if (!expectedNames.has(item.relative)) {
        excluded.push({ ...mirror, relative: item.relative, reason: 'destination-only-overlay', kind: item.kind });
      }
    }
  }

  return { current, drift, excluded, omitted };
}

function writeRuntimeMirrors(report) {
  let written = 0;
  for (const item of report.drift) {
    if (item.reason === 'unsafe-target') {
      throw new Error(`refusing unsafe mirror target: ${item.relative}`);
    }
    fs.mkdirSync(path.dirname(item.target), { recursive: true });
    fs.writeFileSync(item.target, fs.readFileSync(item.expected));
    written += 1;
  }
  return written;
}

function generateRuntimeMirrors(repoRoot) {
  const cli = path.join(repoRoot, 'dist', 'bin', 'oh-my-design.js');
  if (!fs.existsSync(cli)) {
    throw new Error('dist/bin/oh-my-design.js is missing; run `npm run build` first');
  }
  const generatedRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'omd-runtime-mirrors-'));
  const result = spawnSync(
    process.execPath,
    [cli, 'install-skills', '--dir', generatedRoot, '--agent', 'claude-code', 'codex', '--all', '--force'],
    {
      cwd: repoRoot,
      encoding: 'utf8',
      env: { ...process.env, NO_COLOR: '1', CI: '1' },
      maxBuffer: 32 * 1024 * 1024,
    },
  );
  if (result.status !== 0) {
    fs.rmSync(generatedRoot, { recursive: true, force: true });
    throw new Error(
      `runtime mirror generation failed (${result.status}):\n${result.stderr || result.stdout}`,
    );
  }
  return generatedRoot;
}

function parseArgs(argv) {
  const valueAfter = (flag) => {
    const index = argv.indexOf(flag);
    return index === -1 ? null : argv[index + 1] || null;
  };
  return {
    mode: argv.includes('--write') ? 'write' : 'check',
    repoRoot: path.resolve(valueAfter('--repo-root') || path.join(__dirname, '..')),
    generatedRoot: valueAfter('--generated-root'),
  };
}

function printPreview(label, items, limit = 20) {
  if (items.length === 0) return;
  process.stdout.write(`${label} (${items.length}):\n`);
  for (const item of items.slice(0, limit)) {
    process.stdout.write(`  - ${item.id}/${item.relative} [${item.reason}]\n`);
  }
  if (items.length > limit) process.stdout.write(`  … ${items.length - limit} more\n`);
}

function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  let generatedRoot = options.generatedRoot
    ? path.resolve(options.generatedRoot)
    : null;
  let ownsGeneratedRoot = false;
  try {
    if (!generatedRoot) {
      generatedRoot = generateRuntimeMirrors(options.repoRoot);
      ownsGeneratedRoot = true;
    }
    const requireLocalOnly = options.mode === 'write';
    const report = inspectRuntimeMirrors(options.repoRoot, generatedRoot, { requireLocalOnly });
    printPreview('Preserved explicit overlays (not managed by this sync)', report.excluded);
    printPreview('Optional local Codex dogfood files not installed', report.omitted);

    if (options.mode === 'write') {
      const written = writeRuntimeMirrors(report);
      const after = inspectRuntimeMirrors(options.repoRoot, generatedRoot);
      if (after.drift.length > 0) {
        printPreview('Mirror drift remaining after write', after.drift);
        return 1;
      }
      process.stdout.write(
        `runtime mirrors synchronized: ${written} written, ${after.current} current, ${after.excluded.length} overlays preserved\n`,
      );
      return 0;
    }

    if (report.drift.length > 0) {
      printPreview('Runtime mirror drift', report.drift);
      process.stderr.write('Run `node scripts/sync-runtime-mirrors.cjs --write`, review the generated diff, then retry.\n');
      return 1;
    }
    process.stdout.write(
      `runtime mirrors current: ${report.current} managed files, ${report.excluded.length} overlays explicitly excluded, ${report.omitted.length} optional local files absent\n`,
    );
    return 0;
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    return 2;
  } finally {
    if (ownsGeneratedRoot && generatedRoot) {
      fs.rmSync(generatedRoot, { recursive: true, force: true });
    }
  }
}

module.exports = {
  MIRROR_ROOTS,
  filesUnder,
  generateRuntimeMirrors,
  inspectRuntimeMirrors,
  main,
  parseArgs,
  writeRuntimeMirrors,
};

if (require.main === module) {
  process.exitCode = main();
}
