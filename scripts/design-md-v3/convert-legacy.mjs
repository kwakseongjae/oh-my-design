#!/usr/bin/env node
// Convert one legacy OmD 0.1 reference (YAML frontmatter + numbered sections) to DESIGN.md v3:
// Google-schema frontmatter, Google section order, and a `reference.json` sidecar that carries
// catalog identity, token metadata, re-keyed verification claims, lint findings and the migration record.
//
//   node scripts/design-md-v3/convert-legacy.mjs <legacy DESIGN.md> --out <dir> [--overlay <yaml>]
//
// The converter is deterministic. Hand-authored facts the legacy file does not carry in structured
// form (font licence/availability, typesetting, extra Known Gaps) come only from the reviewed overlay.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import yaml from 'js-yaml';
import { mapLegacyPath, v3Value, leaves, SECTION_MAP, V3_ORDER } from './mapping.mjs';

const GOOGLE_LINT = ['-y', '@google/design.md@0.4.0', 'lint'];

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

export function splitLegacy(text) {
  if (!text.startsWith('---\n')) throw new Error('legacy file must start with YAML frontmatter');
  const end = text.indexOf('\n---\n', 4);
  return { fmText: text.slice(4, end + 1), body: text.slice(end + 5) };
}

function setPath(obj, dotted, value) {
  const keys = dotted.split('.');
  let o = obj;
  for (const k of keys.slice(0, -1)) o = o[k] ??= {};
  o[keys.at(-1)] = value;
}

export function buildFrontmatter(fm, overlay) {
  const tokens = fm.tokens ?? {};
  const out = { name: fm.name };
  if (overlay.description) out.description = overlay.description;
  const fonts = {};
  const prose = [];
  const tokenMeta = {};
  for (const [parts, value] of leaves(tokens)) {
    const m = mapLegacyPath(parts, value);
    if (m.kind === 'meta') { tokenMeta[parts[0]] = value; continue; }
    if (m.kind === 'fonts') { setPath(fonts, m.path.replace(/^fonts\./, ''), value); continue; }
    if (m.kind === 'prose') { prose.push({ path: m.path, value }); continue; }
    setPath(out, m.path, v3Value(parts, value));
  }
  // Overlay may add per-role fontFamily stacks (brand face first, then any measured substitute,
  // then a generic keyword) where the evidence shows that face on those roles.
  for (const [role, props] of Object.entries(overlay.typography ?? {})) {
    if (!out.typography?.[role]) throw new Error(`overlay typography role not in source: ${role}`);
    Object.assign(out.typography[role], props);
  }
  const ordered = { name: out.name };
  if (out.description) ordered.description = out.description;
  for (const g of ['colors', 'typography', 'rounded', 'spacing', 'components']) if (out[g]) ordered[g] = out[g];
  const missing = ['colors', 'typography', 'rounded', 'spacing', 'components'].filter((g) => !out[g]);
  if (missing.length) ordered.omitted = missing.map((section) => ({ section, reason: 'No verified values in current evidence.' }));
  const roles = { ...(fonts.roles ?? {}), ...(overlay.fonts?.roles ?? {}) };
  const mergedFonts = { ...(Object.keys(roles).length ? { roles } : {}), ...(overlay.fonts ?? {}) };
  if (mergedFonts.roles) mergedFonts.roles = roles;
  if (Object.keys(mergedFonts).length) ordered.fonts = mergedFonts;
  if (overlay.typesetting) ordered.typesetting = overlay.typesetting;
  return { frontmatter: ordered, prose, tokenMeta };
}

export function rekeyClaims(claims) {
  const out = {};
  for (const [key, ev] of Object.entries(claims ?? {})) {
    if (!key.startsWith('tokens.')) throw new Error(`claim outside tokens: ${key}`);
    const parts = key.slice(7).split('.');
    const m = mapLegacyPath(parts, undefined);
    const newKey = m.kind === 'prose' ? `prose:${m.path}` : m.path;
    if (out[newKey]) throw new Error(`claim collision on ${newKey}`);
    out[newKey] = ev;
  }
  return out;
}

export function restructureBody(body, extra) {
  const lines = body.split('\n');
  const h1Index = lines.findIndex((l) => /^# /.test(l));
  const title = lines[h1Index];
  const preamble = lines.slice(h1Index + 1, lines.findIndex((l, i) => i > h1Index && /^## /.test(l))).join('\n').trim();
  const buckets = Object.fromEntries(V3_ORDER.map((h) => [h, []]));
  let cur = null;
  for (const line of lines.slice(h1Index + 1)) {
    const m = /^## (?:\d+\.\s*)?(.+?)\s*$/.exec(line);
    if (m) {
      const target = SECTION_MAP[m[1]];
      if (!target) throw new Error(`unmapped legacy section: ${m[1]}`);
      cur = { target: target[0], mode: target[1], title: m[1] };
      if (cur.mode === 'sub') buckets[cur.target].push('', `### ${m[1]}`);
      continue;
    }
    if (!cur) continue;
    const demoted = cur.mode === 'sub' && /^#{3,5} /.test(line) ? `#${line}` : line;
    buckets[cur.target].push(demoted);
  }
  for (const [section, md] of Object.entries(extra)) if (md) buckets[section].push('', md.trim());
  const out = [title, ''];
  if (preamble) out.push(preamble, '');
  for (const h of V3_ORDER) {
    const text = buckets[h].join('\n').trim();
    if (text) out.push(`## ${h}`, '', text, '');
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n');
}

function runLint(file) {
  let stdout;
  try { stdout = execFileSync('npx', [...GOOGLE_LINT, file], { encoding: 'utf8' }); } catch (e) { stdout = e.stdout; }
  return JSON.parse(stdout);
}

function contrastGaps(lint) {
  return lint.findings.filter((f) => f.rule === 'contrast-ratio').map((f) => {
    const m = /textColor \((#[0-9a-f]+)\) on backgroundColor \((#[0-9a-f]+)\) has contrast ratio ([\d.]+):1/i.exec(f.message);
    const comp = f.path.replace(/^components\./, '');
    return m ? `- **Contrast, \`${comp}\`.** Text \`${m[1]}\` on \`${m[2]}\` measures ${m[3]}:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.` : `- **Contrast, \`${comp}\`.** ${f.message}`;
  });
}

function render(frontmatter, body) {
  return `---\n${yaml.dump(frontmatter, { lineWidth: -1, noRefs: true })}---\n\n${body.trim()}\n`;
}

export function convert({ src, outDir, overlay: overlayPath }) {
  const text = fs.readFileSync(src, 'utf8');
  const { fmText, body } = splitLegacy(text);
  const fm = yaml.load(fmText);
  const overlay = overlayPath ? yaml.load(fs.readFileSync(overlayPath, 'utf8')) : {};
  const { frontmatter, prose, tokenMeta } = buildFrontmatter(fm, overlay);
  const proseNotes = prose.map((p) => `- \`${p.path.split('.')[1]}\` line height: \`${p.value}\` (a computed CSS keyword that the token grammar cannot carry).`);
  const typographyExtra = [overlay.prose?.typography?.trim(), proseNotes.length ? `### Values kept in prose\n\n${proseNotes.join('\n')}` : null].filter(Boolean).join('\n\n');
  const extras = { Typography: typographyExtra, 'CJK Typesetting': overlay.prose?.cjk };
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'DESIGN.md');
  const governance = (gaps) => `### Known Gaps\n\n${gaps.join('\n')}`;
  // Pass 1 renders without Known Gaps so the lint can report contrast facts on the measured values.
  fs.writeFileSync(outFile, render(frontmatter, restructureBody(body, extras)));
  const first = runLint(outFile);
  const gaps = [...contrastGaps(first), ...(overlay.prose?.knownGaps ?? []).map((g) => `- ${g}`)];
  fs.writeFileSync(outFile, render(frontmatter, restructureBody(body, { ...extras, Governance: gaps.length ? governance(gaps) : null })));
  const lint = runLint(outFile);
  const { tokens, verification_v2: v2, omd, ...catalog } = fm;
  const sidecar = {
    catalog,
    tokens: tokenMeta,
    claimPaths: 'design-md-v3',
    verification_v2: v2 ? { ...v2, claims: rekeyClaims(v2.claims) } : undefined,
    lint: {
      tool: '@google/design.md@0.4.0',
      summary: lint.summary,
      byRule: lint.findings.filter((f) => f.severity !== 'info').reduce((acc, f) => {
        const rule = f.rule ?? (/typography property/.test(f.message) ? 'unknown-typography-property' : 'unnamed');
        const key = rule === 'broken-ref' && /not a recognized component sub-token/.test(f.message) ? 'extension-component-property' : rule;
        acc[key] = (acc[key] ?? 0) + 1;
        return acc;
      }, {}),
      findings: lint.findings.filter((f) => f.severity !== 'info').map((f) => ({ severity: f.severity, rule: f.rule ?? null, path: f.path ?? null, message: f.message })),
    },
    migration: {
      from: `omd-${omd ?? 'unknown'}`,
      sourceSha256: crypto.createHash('sha256').update(text).digest('hex'),
      overlay: overlayPath ? path.basename(overlayPath) : null,
      prose: prose.map((p) => ({ path: p.path, value: p.value })),
    },
  };
  fs.writeFileSync(path.join(outDir, 'reference.json'), `${JSON.stringify(sidecar, null, 2)}\n`);
  return { outFile, lint: lint.summary };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const r = convert(parseArgs(process.argv.slice(2)));
  console.log(JSON.stringify(r));
  if (r.lint.errors > 0) process.exit(1);
}
