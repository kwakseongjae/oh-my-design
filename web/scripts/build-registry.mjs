#!/usr/bin/env node
/**
 * Build typed registry from references/<id>/DESIGN.md frontmatters.
 * Output: web/src/data/registry.generated.ts
 *
 * Validates the canonical schema. Fails fast with a clear error pointing
 * to the bad file.
 *
 * Run via `npm run build-registry` or auto-prepended to dev/build.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const WEB_ROOT = resolve(__dirname, '..');
// Canonical source = web/references/. The repo-root `references` symlink is
// gitignored (local convenience), so on Vercel build (root = web/) only
// web/references/ is reachable. Always read SSOT directly from here.
const REFS_DIR = join(WEB_ROOT, 'references');
const OUT_FILE = join(WEB_ROOT, 'src', 'data', 'registry.generated.ts');

const VALID_COUNTRIES = new Set(['KR','US','JP','TW','CN','UK','DE','FR','IT']);
const VALID_LOGO_TYPES = new Set(['favicon','simpleicons','github']);
const VALID_DS_TYPES = new Set(['system','brand']);

function parseFrontmatter(md, filePath) {
  if (!md.startsWith('---')) throw new Error(`${filePath}: no frontmatter`);
  const end = md.indexOf('\n---', 4);
  if (end === -1) throw new Error(`${filePath}: unterminated frontmatter`);
  const yaml = md.slice(4, end);
  const fm = {};
  let currentKey = null;
  for (const rawLine of yaml.split('\n')) {
    const line = rawLine.replace(/\r$/, '');
    if (!line.trim()) continue;
    if (/^\s+/.test(line) && currentKey) {
      const m = line.trim().match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
      if (m) {
        fm[currentKey] = fm[currentKey] || {};
        fm[currentKey][m[1]] = stripQuotes(m[2]);
      }
      continue;
    }
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (m) {
      currentKey = m[1];
      const value = m[2];
      if (value === '') fm[currentKey] = {};
      else fm[currentKey] = stripQuotes(value);
    }
  }
  return fm;
}

function stripQuotes(s) {
  s = s.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

function fail(file, msg) {
  console.error(`[build-registry] ${file}: ${msg}`);
  process.exit(1);
}

function validate(fm, file) {
  for (const k of ['id','name','country','category','homepage','primary_color','verified']) {
    if (!fm[k] || typeof fm[k] !== 'string' || !fm[k].trim()) fail(file, `missing/invalid '${k}'`);
  }
  if (!VALID_COUNTRIES.has(fm.country)) fail(file, `country '${fm.country}' not in ${[...VALID_COUNTRIES].join('|')}`);
  if (!fm.logo || typeof fm.logo !== 'object') fail(file, `missing 'logo' object`);
  if (!VALID_LOGO_TYPES.has(fm.logo.type)) fail(file, `logo.type '${fm.logo.type}' invalid`);
  if (!fm.logo.slug || typeof fm.logo.slug !== 'string') fail(file, `logo.slug missing`);
  if (!/^#[0-9a-fA-F]{6}$/.test(fm.primary_color)) fail(file, `primary_color '${fm.primary_color}' not hex`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.verified)) fail(file, `verified '${fm.verified}' not YYYY-MM-DD`);
  // Optional `added` = the date this reference first landed (drives the time-windowed
  // NEW badge). Distinct from `verified` (last re-checked), which bumps on re-audits.
  if (fm.added !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(fm.added)) fail(file, `added '${fm.added}' not YYYY-MM-DD`);
  if (fm.ds) {
    if (typeof fm.ds !== 'object') fail(file, `ds must be object`);
    if (!fm.ds.name || !fm.ds.url || !fm.ds.type || !fm.ds.description) fail(file, `ds missing required subfields`);
    if (!VALID_DS_TYPES.has(fm.ds.type)) fail(file, `ds.type '${fm.ds.type}' invalid`);
  }
}

/** Lite validation for the optional DTCG-lite `tokens` block (forward-only). */
function validateTokens(t, file) {
  if (typeof t !== 'object' || Array.isArray(t)) fail(file, `tokens must be a mapping`);
  if (t.color) {
    if (typeof t.color !== 'object') fail(file, `tokens.color must be a mapping`);
    for (const [k, v] of Object.entries(t.color)) if (!/^#[0-9a-fA-F]{6}$/.test(String(v))) fail(file, `tokens.color.${k} '${v}' not #rrggbb`);
  }
  if (t.spacing !== undefined) {
    const arr = Array.isArray(t.spacing) && t.spacing.every(n => typeof n === 'number');
    const map = !Array.isArray(t.spacing) && typeof t.spacing === 'object' && Object.values(t.spacing).every(n => typeof n === 'number');
    if (!arr && !map) fail(file, `tokens.spacing must be number[] or { name: number }`);
  }
  if (t.radius) for (const [k, v] of Object.entries(t.radius)) if (typeof v !== 'number') fail(file, `tokens.radius.${k} must be a number`);
  if (t.font && typeof t.font !== 'object') fail(file, `tokens.font must be a mapping`);
  if (t.text && typeof t.text !== 'object') fail(file, `tokens.text must be a mapping of named type tokens`);
  if (t.components && typeof t.components !== 'object') fail(file, `tokens.components must be a mapping`);
  if (t.source && !['live-extract', 'design-system', 'manual', 'reconciled'].includes(t.source)) fail(file, `tokens.source '${t.source}' invalid`);
}

const ids = readdirSync(REFS_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(join(REFS_DIR, d.name, 'DESIGN.md')))
  .map(d => d.name)
  .sort();

const entries = [];
for (const id of ids) {
  const file = join(REFS_DIR, id, 'DESIGN.md');
  const md = readFileSync(file, 'utf-8');
  const fm = parseFrontmatter(md, file);
  if (fm.id !== id) fail(file, `id mismatch: frontmatter '${fm.id}' vs directory '${id}'`);
  validate(fm, file);
  // Optional DTCG-lite design tokens. Hand-rolled parseFrontmatter is 1-level
  // and string-only, so re-parse the frontmatter with full YAML just for `tokens`
  // (nested objects + numeric arrays). Forward-only: refs without it are unaffected.
  let tokens = null;
  const fmEnd = md.indexOf('\n---', 4);
  const fmYaml = md.slice(4, fmEnd === -1 ? undefined : fmEnd);
  // Only attempt the strict-YAML pass when a tokens block is actually present —
  // existing frontmatters were authored for the lenient hand-rolled parser and
  // may not be strict-YAML-clean, so we must not fail the build over them.
  if (/^tokens:/m.test(fmYaml)) {
    let full;
    try { full = yaml.load(fmYaml); }
    catch (e) { fail(file, `has a 'tokens:' block but frontmatter is not valid YAML: ${e.message}`); }
    if (full && full.tokens) { validateTokens(full.tokens, file); tokens = full.tokens; }
  }
  const entry = {
    id: fm.id,
    name: fm.name,
    displayName: (fm.display_name_kr && String(fm.display_name_kr).trim()) || fm.name,
    country: fm.country,
    category: fm.category,
    homepage: fm.homepage,
    primaryColor: fm.primary_color,
    logo: { type: fm.logo.type, slug: fm.logo.slug },
    verified: fm.verified,
  };
  if (fm.added) entry.added = fm.added;
  if (tokens) entry.tokens = tokens;
  if (fm.ds) {
    entry.ds = {
      name: fm.ds.name,
      url: fm.ds.url,
      type: fm.ds.type,
      description: fm.ds.description,
    };
    if (fm.ds.og_image) entry.ds.ogImage = fm.ds.og_image;
  }
  entries.push(entry);
}

mkdirSync(dirname(OUT_FILE), { recursive: true });

const header = `/* AUTOGENERATED by web/scripts/build-registry.mjs — do not edit.
 *
 * Single source of truth for all references. Schema lives in the
 * frontmatter of references/<id>/DESIGN.md. Run \`npm run build-registry\`
 * after editing any DESIGN.md to regenerate this file. The catalog-integrity
 * vitest plus the pre-commit hook will guard against drift.
 */`;

const TYPES = `export interface RefEntry {
  readonly id: string;
  readonly name: string;
  readonly displayName: string;
  readonly country: 'KR' | 'US' | 'JP' | 'TW' | 'CN' | 'UK' | 'DE' | 'FR' | 'IT';
  readonly category: string;
  readonly homepage: string;
  readonly primaryColor: string;
  readonly logo: { readonly type: 'favicon' | 'simpleicons' | 'github'; readonly slug: string };
  readonly verified: string;
  readonly added?: string;
  readonly tokens?: {
    readonly source?: 'live-extract' | 'design-system' | 'manual' | 'reconciled';
    readonly extracted?: string;
    readonly note?: string;
    readonly color?: Readonly<Record<string, string>>;
    readonly font?: Readonly<Record<string, string>>;
    readonly text?: Readonly<Record<string, { readonly size?: number; readonly weight?: number; readonly lineHeight?: number; readonly tracking?: number }>>;
    readonly spacing?: readonly number[] | Readonly<Record<string, number>>;
    readonly radius?: Readonly<Record<string, number>>;
    readonly shadow?: Readonly<Record<string, string>>;
    readonly components?: Readonly<Record<string, string>>;
  };
  readonly ds?: {
    readonly name: string;
    readonly url: string;
    readonly type: 'system' | 'brand';
    readonly description: string;
    readonly ogImage?: string;
  };
}`;

function literal(v) { return JSON.stringify(v); }

const entryLines = entries.map(e => {
  const dsBlock = e.ds
    ? `, ds: { name: ${literal(e.ds.name)}, url: ${literal(e.ds.url)}, type: ${literal(e.ds.type)}, description: ${literal(e.ds.description)}${e.ds.ogImage ? `, ogImage: ${literal(e.ds.ogImage)}` : ''} }`
    : '';
  return `  { id: ${literal(e.id)}, name: ${literal(e.name)}, displayName: ${literal(e.displayName)}, country: ${literal(e.country)}, category: ${literal(e.category)}, homepage: ${literal(e.homepage)}, primaryColor: ${literal(e.primaryColor)}, logo: { type: ${literal(e.logo.type)}, slug: ${literal(e.logo.slug)} }, verified: ${literal(e.verified)}${e.added ? `, added: ${literal(e.added)}` : ''}${e.tokens ? `, tokens: ${JSON.stringify(e.tokens)}` : ''}${dsBlock} }`;
}).join(',\n');

const out = `${header}\n\n${TYPES}\n\nexport const REGISTRY: readonly RefEntry[] = [\n${entryLines},\n] as const;\n\nexport const REGISTRY_BY_ID: Readonly<Record<string, RefEntry>> = Object.freeze(\n  Object.fromEntries(REGISTRY.map(e => [e.id, e]))\n);\n\n/** Convenience helper — single homepage URL by id (replaces homepage-urls.ts). */\nexport function getHomepageUrl(id: string): string | null {\n  return REGISTRY_BY_ID[id]?.homepage ?? null;\n}\n`;

writeFileSync(OUT_FILE, out, 'utf-8');
console.log(`[build-registry] wrote ${OUT_FILE} (${entries.length} entries, ${out.length} bytes)`);

// Emit the CLI (root) package version so the web footer stays in sync with npm.
// A committed baseline (version.generated.ts) guarantees the file always exists;
// this updates it whenever the repo-root package.json is reachable at build time.
try {
  const rootPkg = JSON.parse(readFileSync(resolve(WEB_ROOT, '..', 'package.json'), 'utf-8'));
  const VER_FILE = join(WEB_ROOT, 'src', 'data', 'version.generated.ts');
  writeFileSync(
    VER_FILE,
    `// AUTO-GENERATED by scripts/build-registry.mjs — root (CLI) package version.\nexport const PKG_VERSION = ${JSON.stringify(rootPkg.version)};\n`,
    'utf-8',
  );
  console.log(`[build-registry] wrote ${VER_FILE} (v${rootPkg.version})`);
} catch (e) {
  console.warn('[build-registry] skipped version.generated.ts:', e.message);
}
