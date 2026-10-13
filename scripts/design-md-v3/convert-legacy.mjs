#!/usr/bin/env node
// Convert one legacy OmD 0.1 reference (YAML frontmatter + numbered sections) to DESIGN.md v3:
// Google-schema frontmatter, Google section order, and a `reference.json` sidecar that carries
// catalog identity, token metadata, re-keyed verification claims, lint findings and the migration record.
//
//   node scripts/design-md-v3/convert-legacy.mjs <legacy DESIGN.md> --out <dir> [--overlay <yaml>]
//
// The converter is deterministic. Hand-authored facts the legacy file does not carry in structured
// form (font licence/availability, typesetting, extra Known Gaps, official-doc additions) come only
// from the reviewed overlay. The mapping itself lives in web/scripts/lib/design-md-v3.mjs, shared
// with the reader adapter so both directions agree.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import {
  convertFrontmatter, restructureBody, proseExtras, renderV3, splitFrontmatter,
} from '../../web/scripts/lib/design-md-v3.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const require = createRequire(path.join(root, 'web/package.json'));
const yaml = require('js-yaml');
export const LINT_TOOL = '@google/design.md@0.4.0';
let lintFn = null;
async function loadLint() {
  if (!lintFn) {
    const pkg = path.join(root, 'web/node_modules/@google/design.md/package.json');
    lintFn = (await import(path.join(path.dirname(pkg), 'dist/linter/index.js'))).lint;
    const version = JSON.parse(fs.readFileSync(pkg, 'utf8')).version;
    if (`@google/design.md@${version}` !== LINT_TOOL) throw new Error(`linter ${version} is not the pinned ${LINT_TOOL}`);
  }
  return lintFn;
}
await loadLint();
export function runLint(text) {
  return lintFn(text);
}

function parseArgs(argv) {
  const out = { src: null, outDir: null, overlay: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--out') out.outDir = argv[++i];
    else if (argv[i] === '--overlay') out.overlay = argv[++i];
    else out.src = argv[i];
  }
  if (!out.src || !out.outDir) throw new Error('usage: convert-legacy.mjs <DESIGN.md> --out <dir> [--overlay <yaml>]');
  return out;
}

function contrastGaps(lint) {
  return lint.findings.filter((f) => f.rule === 'contrast-ratio').map((f) => {
    const m = /textColor \((#[0-9a-f]+)\) on backgroundColor \((#[0-9a-f]+)\) has contrast ratio ([\d.]+):1/i.exec(f.message);
    const comp = f.path.replace(/^components\./, '');
    return m ? `- **Contrast, \`${comp}\`.** Text \`${m[1]}\` on \`${m[2]}\` measures ${m[3]}:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.` : `- **Contrast, \`${comp}\`.** ${f.message}`;
  });
}

export function lintRecord(lint) {
  const nonInfo = lint.findings.filter((f) => f.severity !== 'info');
  return {
    tool: LINT_TOOL,
    summary: lint.summary,
    byRule: nonInfo.reduce((acc, f) => {
      const rule = f.rule ?? (/typography property/.test(f.message) ? 'unknown-typography-property' : 'unnamed');
      const key = rule === 'broken-ref' && /not a recognized component sub-token/.test(f.message) ? 'extension-component-property' : rule;
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    }, {}),
    findings: nonInfo.map((f) => ({ severity: f.severity, rule: f.rule ?? null, path: f.path ?? null, message: f.message })),
  };
}

/** In-memory conversion. Returns { designMd, sidecar, lint }. */
export function convertText(text, { overlay = {}, overlayName = null } = {}) {
  const split = splitFrontmatter(text);
  if (!split) throw new Error('legacy file must start with YAML frontmatter');
  const fm = yaml.load(split.fmText, { schema: yaml.JSON_SCHEMA });
  const { frontmatter, sidecar } = convertFrontmatter(fm, overlay);
  const prose = sidecar.migration.prose;
  const extras = proseExtras(prose);
  if (overlay.prose?.typography) extras.Typography = [overlay.prose.typography.trim(), extras.Typography].filter(Boolean).join('\n\n');
  if (overlay.prose?.colors) extras.Colors = overlay.prose.colors;
  if (overlay.prose?.cjk) extras['CJK Typesetting'] = overlay.prose.cjk;
  // Pass 1 renders without Known Gaps so the lint can report contrast facts on the measured values.
  const first = runLint(renderV3(frontmatter, restructureBody(split.body, extras)));
  const gaps = [...contrastGaps(first), ...(overlay.prose?.knownGaps ?? []).map((g) => `- ${g}`)];
  const governance = gaps.length ? `### Known Gaps\n\n${gaps.join('\n')}` : null;
  const designMd = renderV3(frontmatter, restructureBody(split.body, { ...extras, Governance: governance }));
  const lint = runLint(designMd);
  sidecar.lint = lintRecord(lint);
  sidecar.migration.sourceSha256 = crypto.createHash('sha256').update(text).digest('hex');
  sidecar.migration.overlay = overlayName;
  // Keep `lint` before `migration` for readability.
  const { migration, ...rest } = sidecar;
  return { designMd, sidecar: { ...rest, migration }, lint };
}

export function convert({ src, outDir, overlay: overlayPath }) {
  const text = fs.readFileSync(src, 'utf8');
  const overlay = overlayPath ? yaml.load(fs.readFileSync(overlayPath, 'utf8'), { schema: yaml.JSON_SCHEMA }) : {};
  const { designMd, sidecar, lint } = convertText(text, { overlay, overlayName: overlayPath ? path.basename(overlayPath) : null });
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'DESIGN.md');
  fs.writeFileSync(outFile, designMd);
  fs.writeFileSync(path.join(outDir, 'reference.json'), `${JSON.stringify(sidecar, null, 2)}\n`);
  return { outFile, lint: lint.summary };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const r = convert(parseArgs(process.argv.slice(2)));
  console.log(JSON.stringify(r));
  if (r.lint.errors > 0) process.exit(1);
}
