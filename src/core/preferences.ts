import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from 'node:fs';
import { randomBytes } from 'node:crypto';
import { dirname, join } from 'node:path';

export const PREFERENCES_PATH = '.omd/preferences.md';
export const PREFERENCES_SCHEMA = 'omd.preferences/v1';

export type PreferenceScope =
  | 'visualTheme'
  | 'color'
  | 'typography'
  | 'spacing'
  | 'voice'
  | 'motion'
  | 'layout'
  | `components.${string}`;

export type PreferenceSignal =
  | 'user-correction'
  | 'user-statement'
  | 'inferred-from-revert'
  | 'inferred-from-edit';

export type PreferenceConfidence = 'explicit' | 'inferred';

export type PreferenceStatus =
  | 'pending'
  | 'applied'
  | 'rejected'
  | 'superseded';

export interface PreferenceMeta {
  id: string;
  timestamp: string;
  scope: PreferenceScope;
  signal: PreferenceSignal;
  confidence: PreferenceConfidence;
  status: PreferenceStatus;
  source_agent?: string;
  source_context?: string;
  applied_design_md_hash?: string;
  applied_at?: string;
  rejected_reason?: string;
  superseded_by?: string;
}

export interface PreferenceEntry {
  meta: PreferenceMeta;
  heading: string;
  body: string;
}

export interface PreferencesFile {
  schema: string;
  design_md_hash_at_creation: string;
  entries: PreferenceEntry[];
}

function prefPath(projectRoot: string): string {
  return join(projectRoot, PREFERENCES_PATH);
}

export function generateId(): string {
  const ts = Date.now().toString(36);
  const rand = randomBytes(4).toString('hex');
  return `pref_${ts}_${rand}`;
}

export function slugify(input: string, max = 40): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max) || 'entry';
}

const SCOPE_KEYWORDS: Array<[RegExp, PreferenceScope]> = [
  [/\b(buttons?|ctas?|btns?)\b/i, 'components.button'],
  [/\b(cards?)\b/i, 'components.card'],
  [/\b(dialogs?|modals?)\b/i, 'components.dialog'],
  [/\b(inputs?|fields?|forms?)\b/i, 'components.input'],
  [/\b(nav|navigation|headers?|menus?)\b/i, 'components.navigation'],
  [/\b(badges?|chips?|pills?|tags?)\b/i, 'components.badge'],
  [/\b(tables?|rows?|cells?)\b/i, 'components.table'],
  [/\b(dropdowns?|selects?|comboboxes?)\b/i, 'components.dropdown'],
  [/\b(toasts?|notifications?|snackbars?)\b/i, 'components.toast'],
  [/\b(tabs?)\b/i, 'components.tabs'],
  [/\b(colors?|palette|hex|hue|saturation|shades?|tints?|gradients?)\b/i, 'color'],
  [/\b(font|typography|typeface|weight|leading|tracking|letter-?spacing)\b/i, 'typography'],
  [/\b(spacing|gap|padding|margin|grid)\b/i, 'spacing'],
  [/\b(voice|tone|copy|microcopy|wording|language)\b/i, 'voice'],
  [/\b(motion|animation|transition|easing|duration)\b/i, 'motion'],
  [/\b(layout|structure|hierarchy)\b/i, 'layout'],
  [/\b(theme|aesthetic|vibe|mood|look|feel)\b/i, 'visualTheme'],
];

export function inferScope(note: string): PreferenceScope {
  for (const [re, scope] of SCOPE_KEYWORDS) {
    if (re.test(note)) return scope;
  }
  return 'visualTheme';
}

function renderMeta(meta: PreferenceMeta): string {
  const lines: string[] = [];
  lines.push(`id: ${meta.id}`);
  lines.push(`timestamp: ${meta.timestamp}`);
  lines.push(`scope: ${meta.scope}`);
  lines.push(`signal: ${meta.signal}`);
  lines.push(`confidence: ${meta.confidence}`);
  lines.push(`status: ${meta.status}`);
  if (meta.source_agent) lines.push(`source_agent: ${meta.source_agent}`);
  if (meta.source_context)
    lines.push(`source_context: ${JSON.stringify(meta.source_context)}`);
  if (meta.applied_design_md_hash)
    lines.push(`applied_design_md_hash: ${meta.applied_design_md_hash}`);
  if (meta.applied_at) lines.push(`applied_at: ${meta.applied_at}`);
  if (meta.rejected_reason)
    lines.push(`rejected_reason: ${JSON.stringify(meta.rejected_reason)}`);
  if (meta.superseded_by) lines.push(`superseded_by: ${meta.superseded_by}`);
  return lines.join('\n');
}

export function renderEntry(entry: PreferenceEntry): string {
  return (
    `## ${entry.heading}\n\n` +
    '```omd-meta\n' +
    renderMeta(entry.meta) +
    '\n```\n\n' +
    entry.body.trim() +
    '\n'
  );
}

export function renderFile(file: PreferencesFile): string {
  const header =
    `---\n` +
    `schema: ${file.schema}\n` +
    `design_md_hash_at_creation: ${file.design_md_hash_at_creation}\n` +
    `---\n\n` +
    `# Preference Log\n\n`;
  const body = file.entries.map(renderEntry).join('\n');
  return header + body;
}

const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n?/;
const ENTRY_SPLIT_RE = /^## /m;
const META_BLOCK_RE = /```omd-meta\n([\s\S]*?)\n```/;

function parseFrontmatter(raw: string): {
  fields: Record<string, string>;
  rest: string;
} {
  const m = FRONTMATTER_RE.exec(raw);
  if (!m) return { fields: {}, rest: raw };
  const fields: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    fields[key] = val;
  }
  return { fields, rest: raw.slice(m[0].length) };
}

function parseMetaBlock(text: string): Record<string, string> {
  const m = META_BLOCK_RE.exec(text);
  if (!m) return {};
  const fields: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      try {
        val = JSON.parse(val);
      } catch {
        // keep as-is
      }
    }
    fields[key] = val;
  }
  return fields;
}

function parseEntry(chunk: string): PreferenceEntry | null {
  const newline = chunk.indexOf('\n');
  const heading = (newline === -1 ? chunk : chunk.slice(0, newline)).trim();
  const rest = newline === -1 ? '' : chunk.slice(newline + 1);
  const metaFields = parseMetaBlock(rest);
  if (!metaFields.id) return null;

  const bodyStart = rest.search(META_BLOCK_RE);
  const metaEnd =
    bodyStart >= 0
      ? bodyStart + (META_BLOCK_RE.exec(rest.slice(bodyStart))?.[0].length ?? 0)
      : 0;
  const body = rest.slice(metaEnd).trim();

  return {
    heading,
    body,
    meta: {
      id: metaFields.id,
      timestamp: metaFields.timestamp ?? '',
      scope: (metaFields.scope as PreferenceScope) ?? 'visualTheme',
      signal: (metaFields.signal as PreferenceSignal) ?? 'user-statement',
      confidence:
        (metaFields.confidence as PreferenceConfidence) ?? 'explicit',
      status: (metaFields.status as PreferenceStatus) ?? 'pending',
      source_agent: metaFields.source_agent,
      source_context: metaFields.source_context,
      applied_design_md_hash: metaFields.applied_design_md_hash,
      applied_at: metaFields.applied_at,
      rejected_reason: metaFields.rejected_reason,
      superseded_by: metaFields.superseded_by,
    },
  };
}

export function parseFile(raw: string): PreferencesFile {
  const { fields, rest } = parseFrontmatter(raw);
  const schema = fields.schema || PREFERENCES_SCHEMA;
  const design_md_hash_at_creation = fields.design_md_hash_at_creation ?? '';

  const chunks = rest.split(ENTRY_SPLIT_RE).slice(1);
  const entries = chunks
    .map((c) => parseEntry(c))
    .filter((e): e is PreferenceEntry => e !== null);

  return { schema, design_md_hash_at_creation, entries };
}

export function readFile(projectRoot: string): PreferencesFile | null {
  const path = prefPath(projectRoot);
  if (!existsSync(path)) return null;
  return parseFile(readFileSync(path, 'utf8'));
}

export function writeFile(
  projectRoot: string,
  file: PreferencesFile
): void {
  const path = prefPath(projectRoot);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, renderFile(file), 'utf8');
}

export interface CreateEntryInput {
  note: string;
  scope?: PreferenceScope;
  signal?: PreferenceSignal;
  confidence?: PreferenceConfidence;
  source_agent?: string;
  source_context?: string;
  now?: Date;
}

export function buildEntry(input: CreateEntryInput): PreferenceEntry {
  const now = input.now ?? new Date();
  const timestamp = now.toISOString();
  const scope = input.scope ?? inferScope(input.note);
  const slug = slugify(input.note);
  const heading = `${timestamp} — ${slug}`;

  return {
    heading,
    body: input.note.trim(),
    meta: {
      id: generateId(),
      timestamp,
      scope,
      signal: input.signal ?? 'user-statement',
      confidence: input.confidence ?? 'explicit',
      status: 'pending',
      source_agent: input.source_agent,
      source_context: input.source_context,
    },
  };
}

export interface UpdateStatusInput {
  id: string;
  status: PreferenceStatus;
  applied_design_md_hash?: string;
  rejected_reason?: string;
  superseded_by?: string;
  now?: Date;
}

export function updateEntryStatus(
  projectRoot: string,
  input: UpdateStatusInput
): PreferenceEntry {
  const file = readFile(projectRoot);
  if (!file) {
    throw new Error(
      `no preferences file found at ${projectRoot}/${PREFERENCES_PATH}`
    );
  }

  const entry = file.entries.find((e) => e.meta.id === input.id);
  if (!entry) {
    throw new Error(`preference id not found: ${input.id}`);
  }

  const now = (input.now ?? new Date()).toISOString();
  entry.meta.status = input.status;

  if (input.status === 'applied') {
    entry.meta.applied_at = now;
    if (input.applied_design_md_hash) {
      entry.meta.applied_design_md_hash = input.applied_design_md_hash;
    }
  }
  if (input.status === 'rejected' && input.rejected_reason) {
    entry.meta.rejected_reason = input.rejected_reason;
  }
  if (input.status === 'superseded' && input.superseded_by) {
    entry.meta.superseded_by = input.superseded_by;
  }

  writeFile(projectRoot, file);
  return entry;
}

export function groupByScope(
  entries: PreferenceEntry[]
): Map<PreferenceScope, PreferenceEntry[]> {
  const map = new Map<PreferenceScope, PreferenceEntry[]>();
  for (const entry of entries) {
    const bucket = map.get(entry.meta.scope);
    if (bucket) bucket.push(entry);
    else map.set(entry.meta.scope, [entry]);
  }
  return map;
}

export function filterByStatus(
  entries: PreferenceEntry[],
  status: PreferenceStatus
): PreferenceEntry[] {
  return entries.filter((e) => e.meta.status === status);
}

export function appendEntry(
  projectRoot: string,
  input: CreateEntryInput,
  designMdHashIfNew = ''
): PreferenceEntry {
  const existing = readFile(projectRoot);
  const entry = buildEntry(input);

  const file: PreferencesFile = existing ?? {
    schema: PREFERENCES_SCHEMA,
    design_md_hash_at_creation: designMdHashIfNew,
    entries: [],
  };

  file.entries.push(entry);
  writeFile(projectRoot, file);
  return entry;
}
