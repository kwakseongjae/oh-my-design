#!/usr/bin/env node
// Phase 2 proof (PHASE1.md §7 step 2): convert every legacy reference in memory, project it back
// through the shared reader adapter, and require the result to equal the original parsed
// frontmatter exactly — under js-yaml JSON_SCHEMA (what the pipeline uses) and DEFAULT_SCHEMA, and
// with key order preserved. Also lints every converted file with Google's linter (0 errors gate).
// Writes nothing under web/references.
//
//   node scripts/design-md-v3/dry-run.mjs [--ids a,b,c] [--json out.json] [--refs <legacy references dir>]
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { createRequire } from 'node:module';
import { convertText } from './convert-legacy.mjs';
import { compareText } from './compare-values.mjs';
import { projectLegacyMarkdown, splitFrontmatter } from '../../web/scripts/lib/design-md-v3.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const require = createRequire(path.join(root, 'web/package.json'));
const yaml = require('js-yaml');

const args = process.argv.slice(2);
const idsArg = args.includes('--ids') ? args[args.indexOf('--ids') + 1].split(',') : null;
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;
const dir = args.includes('--refs') ? path.resolve(args[args.indexOf('--refs') + 1]) : path.join(root, 'web/references');

const loadFm = (text, schema) => yaml.load(splitFrontmatter(text).fmText, { schema });
const result = { total: 0, exact: 0, comparatorOk: 0, comparatorFailures: [], claims: 0, orderExact: 0, lintErrors: 0, failures: [], lintFailures: [], errorsByRule: {} };
for (const id of fs.readdirSync(dir).sort()) {
  if (idsArg && !idsArg.includes(id)) continue;
  const file = path.join(dir, id, 'DESIGN.md');
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  if (text.includes('<!-- design-md:section ') || !text.startsWith('---\n')) continue;
  const head = yaml.load(splitFrontmatter(text).fmText, { schema: yaml.JSON_SCHEMA });
  if (!head?.tokens && !head?.id) continue; // already v3
  result.total++;
  try {
    const { designMd, sidecar, lint } = convertText(text, {});
    const side = JSON.parse(JSON.stringify(sidecar)); // as it would be read from reference.json
    const projected = projectLegacyMarkdown(designMd, side);
    const okJson = isDeepStrictEqual(loadFm(projected, yaml.JSON_SCHEMA), loadFm(text, yaml.JSON_SCHEMA));
    const okDefault = isDeepStrictEqual(loadFm(projected, yaml.DEFAULT_SCHEMA), loadFm(text, yaml.DEFAULT_SCHEMA));
    const okOrder = JSON.stringify(loadFm(projected, yaml.JSON_SCHEMA)) === JSON.stringify(loadFm(text, yaml.JSON_SCHEMA));
    if (okJson && okDefault) result.exact++;
    else result.failures.push({ id, okJson, okDefault });
    if (okOrder) result.orderExact++;
    const cmp = compareText(text, designMd, side, {});
    result.claims += cmp.claims;
    if (cmp.ok) result.comparatorOk++;
    else result.comparatorFailures.push({ id, problems: cmp.problems.slice(0, 4) });
    if (lint.summary.errors > 0) {
      result.lintErrors++;
      const errs = lint.findings.filter((f) => f.severity === 'error');
      for (const f of errs) result.errorsByRule[f.rule ?? f.message.slice(0, 40)] = (result.errorsByRule[f.rule ?? f.message.slice(0, 40)] ?? 0) + 1;
      result.lintFailures.push({ id, errors: errs.slice(0, 3).map((f) => `${f.path}: ${f.message}`) });
    }
  } catch (e) {
    result.failures.push({ id, error: e.message });
  }
}
const summary = { ...result, comparatorFailures: result.comparatorFailures.slice(0, 30), failures: result.failures.slice(0, 40), lintFailures: result.lintFailures.slice(0, 20) };
if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(result, null, 2));
console.log(JSON.stringify(summary, null, 1));
process.exit(result.failures.length || result.lintErrors || result.comparatorFailures.length ? 1 : 0);
