// Loads bundled DESIGN.md files from data/references/ at server init.
// Fully offline, no network, no env vars.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// dist/index.js → ../data/references  (post-build layout)
// src/data.ts   → ../data/references  (dev/test layout)
function resolveDataDir(): string {
  const candidates = [
    path.resolve(__dirname, '..', 'data', 'references'),
    path.resolve(__dirname, '..', '..', 'data', 'references'),
  ];
  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isDirectory()) return c;
  }
  return candidates[0]!;
}

export const DATA_DIR = resolveDataDir();

export interface Frontmatter {
  id?: string;
  name?: string;
  displayName?: string;
  country?: string;
  category?: string;
  homepage?: string;
  primary_color?: string;
  verified?: string;
  omd?: string;
  ds?: {
    name?: string;
    url?: string;
    type?: string;
    description?: string;
  };
  [k: string]: unknown;
}

export interface Reference {
  id: string;
  filePath: string;
  raw: string;
  frontmatter: Frontmatter;
  body: string;
  sections: string[];
}

// Minimal YAML frontmatter parser — handles flat key:value, quoted strings,
// and one level of nested object (e.g. `ds:` with indented children).
// Sufficient for our canonical DESIGN.md schema; we don't need full YAML.
function parseFrontmatter(raw: string): { fm: Frontmatter; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { fm: {}, body: raw };
  const block = m[1]!;
  const body = m[2] ?? '';
  const fm: Record<string, unknown> = {};
  const lines = block.split(/\r?\n/);
  let currentObjKey: string | null = null;
  let currentObj: Record<string, unknown> | null = null;

  const stripQuotes = (v: string) => {
    const t = v.trim();
    if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
      return t.slice(1, -1);
    }
    return t;
  };
  const coerce = (v: string): unknown => {
    const t = stripQuotes(v);
    if (t === 'true') return true;
    if (t === 'false') return false;
    if (t === 'null' || t === '') return null;
    return t;
  };

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    // nested child line: starts with whitespace + "key: value"
    if (/^\s+\S/.test(line) && currentObj) {
      const cm = line.match(/^\s+([A-Za-z0-9_\-]+):\s*(.*)$/);
      if (cm) {
        currentObj[cm[1]!] = coerce(cm[2] ?? '');
        continue;
      }
    }
    // top-level
    const tm = line.match(/^([A-Za-z0-9_\-]+):\s*(.*)$/);
    if (!tm) continue;
    const key = tm[1]!;
    const rest = (tm[2] ?? '').trim();
    if (rest === '') {
      // start a nested object
      currentObj = {};
      currentObjKey = key;
      fm[key] = currentObj;
    } else {
      fm[key] = coerce(rest);
      currentObj = null;
      currentObjKey = null;
    }
  }
  void currentObjKey;
  return { fm: fm as Frontmatter, body };
}

function extractSections(body: string): string[] {
  const sections: string[] = [];
  for (const line of body.split(/\r?\n/)) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) sections.push(m[1]!);
  }
  return sections;
}

let cache: Map<string, Reference> | null = null;

export function loadAllReferences(): Map<string, Reference> {
  if (cache) return cache;
  const map = new Map<string, Reference>();
  if (!existsSync(DATA_DIR)) {
    cache = map;
    return map;
  }
  const ids = readdirSync(DATA_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
  for (const id of ids) {
    const filePath = path.join(DATA_DIR, id, 'DESIGN.md');
    if (!existsSync(filePath)) continue;
    const raw = readFileSync(filePath, 'utf8');
    const { fm, body } = parseFrontmatter(raw);
    const sections = extractSections(body);
    map.set(id, {
      id,
      filePath,
      raw,
      frontmatter: fm,
      body,
      sections,
    });
  }
  cache = map;
  return map;
}

export function getReference(id: string): Reference | undefined {
  return loadAllReferences().get(id);
}

export function listReferenceIds(): string[] {
  return Array.from(loadAllReferences().keys()).sort();
}

export function getDisplayName(ref: Reference): string {
  const fm = ref.frontmatter;
  return (fm.displayName as string) || (fm.name as string) || ref.id;
}

export function hasOfficialDs(ref: Reference): boolean {
  const ds = ref.frontmatter.ds;
  return !!(ds && (ds.name || ds.url));
}

// Short summary = first non-empty paragraph in body (clipped).
export function summarize(ref: Reference, max = 160): string {
  const paras = ref.body.split(/\r?\n\r?\n/).map((p) => p.trim()).filter(Boolean);
  // skip headings
  const first = paras.find((p) => !p.startsWith('#'));
  if (!first) return '';
  const flat = first.replace(/\s+/g, ' ');
  return flat.length > max ? flat.slice(0, max - 1) + '…' : flat;
}
