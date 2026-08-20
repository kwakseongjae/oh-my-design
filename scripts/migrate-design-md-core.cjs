#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const {
  auditCatalog,
  assertPathDoesNotAliasSources,
  migrateDesignMd,
  validateCoreArtifacts,
  writeMigrationResult,
} = require('./design-md-core.cjs');

function usage(message) {
  if (message) process.stderr.write(`${message}\n\n`);
  process.stderr.write([
    'Usage:',
    '  node scripts/migrate-design-md-core.cjs --input <DESIGN.md> [--check|--write] [--require-source-valid] [--require-portable-core] [--out-dir <dir>] [--report <file>] [--json] [--force]',
    '  node scripts/migrate-design-md-core.cjs --catalog <references-dir> [--check] [--report <file>] [--json]',
    '',
    'Default mode is a read-only dry run. --check always prints JSON and exits 1 on loss or invalid output.',
    '--require-portable-core additionally fails unless the standalone Markdown passes the Portable Core usefulness contract.',
    '--write writes staged artifacts under --out-dir; it never replaces the input DESIGN.md.',
  ].join('\n'));
  process.exitCode = 2;
}

function parseArgs(argv) {
  const result = { mode: 'dry-run', json: false, force: false, requireSourceValid: false, requirePortableCore: false };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--input' || arg === '--catalog' || arg === '--out-dir' || arg === '--report') {
      const value = argv[index + 1];
      if (!value || value.startsWith('--')) throw new Error(`${arg} requires a value`);
      result[arg.slice(2).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = value;
      index += 1;
    } else if (arg === '--dry-run') result.mode = 'dry-run';
    else if (arg === '--check') result.mode = 'check';
    else if (arg === '--write') result.mode = 'write';
    else if (arg === '--json') result.json = true;
    else if (arg === '--force') result.force = true;
    else if (arg === '--require-source-valid') result.requireSourceValid = true;
    else if (arg === '--require-portable-core') result.requirePortableCore = true;
    else if (arg === '--help' || arg === '-h') result.help = true;
    else throw new Error(`unknown argument: ${arg}`);
  }
  return result;
}

function writeReport(file, value, protectedSources = []) {
  if (!file) return;
  assertPathDoesNotAliasSources(file, protectedSources, 'migration report');
  const target = path.resolve(file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const temp = `${target}.tmp-${process.pid}`;
  fs.writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
  fs.renameSync(temp, target);
}

function catalogDesignFiles(root) {
  const files = [];
  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else if (entry.isFile() && entry.name === 'DESIGN.md') files.push(absolute);
    }
  }
  walk(path.resolve(root));
  return files;
}

function humanSummary(report) {
  if (report.mode === 'catalog-audit') {
    return `DESIGN.md Core catalog audit: ${report.status} · ${report.count} files · ${report.dropped_segments} dropped\n`;
  }
  return `DESIGN.md Core migration: ${report.status} · ${report.input.format} → core-v2 · ${report.mapped_segments} mapped · ${report.unmapped_segments} opaque-only · ${report.dropped_segments} dropped\n`;
}

function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    usage(error instanceof Error ? error.message : String(error));
    return;
  }
  if (options.help) {
    usage();
    process.exitCode = 0;
    return;
  }
  if (Boolean(options.input) === Boolean(options.catalog)) {
    usage('provide exactly one of --input or --catalog');
    return;
  }
  if (options.catalog && options.mode === 'write') {
    usage('catalog mode is audit-only; --write is not allowed');
    return;
  }
  if (options.mode === 'write' && !options.outDir) {
    usage('--write requires --out-dir');
    return;
  }

  let protectedSources = [];
  try {
    let report;
    if (options.catalog) {
      protectedSources = catalogDesignFiles(options.catalog);
      report = auditCatalog(options.catalog);
    } else {
      const input = path.resolve(options.input);
      protectedSources = [input];
      const source = fs.readFileSync(input, 'utf8');
      const result = migrateDesignMd(source, { sourcePath: input, requireSourceValid: options.requireSourceValid });
      const validation = validateCoreArtifacts(result, { requirePortableCore: options.requirePortableCore });
      report = {
        ...result.report,
        ...(validation.valid ? {} : { status: 'fail', errors: validation.errors }),
        validation,
      };
      if (options.mode === 'write') {
        if (!validation.valid) throw new Error(`refusing to write invalid migration: ${validation.errors.join('; ')}`);
        report.written = writeMigrationResult(result, options.outDir, { force: options.force });
      }
    }
    writeReport(options.report, report, protectedSources);
    if (options.json || options.mode === 'check') process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    else process.stdout.write(humanSummary(report));
    if (report.status !== 'pass' || report.dropped_segments !== 0 || report.validation?.valid === false) process.exitCode = 1;
  } catch (error) {
    const report = { schema_version: '2.0.0', status: 'fail', dropped_segments: 1, errors: [error instanceof Error ? error.message : String(error)] };
    try {
      writeReport(options.report, report, protectedSources);
    } catch (reportError) {
      report.errors.push(reportError instanceof Error ? reportError.message : String(reportError));
    }
    if (options.json || options.mode === 'check') process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    else process.stderr.write(`${report.errors[0]}\n`);
    process.exitCode = 1;
  }
}

main();
