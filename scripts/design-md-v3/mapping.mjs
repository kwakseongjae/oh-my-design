// Legacy OmD 0.1 → DESIGN.md v3 mapping (spec/design-md-v3.md §11).
// Pure functions shared by the converter and the value comparator.

export const TYPO_RENAMES = { size: 'fontSize', weight: 'fontWeight', lineHeight: 'lineHeight', tracking: 'letterSpacing', family: 'fontFamily' };
export const COMPONENT_RENAMES = { bg: 'backgroundColor', fg: 'textColor', radius: 'rounded', font: 'typography' };
// Legacy component fields that have no Google property. They stay on the component under their
// legacy name (Google lint: warning, never error) so that values and claims map 1:1.
export const COMPONENT_KEPT = new Set(['type', 'border', 'hover', 'pressed', 'active', 'focus', 'disabled', 'states', 'use', 'shadow', 'padding', 'height', 'width', 'size']);
export const TOKEN_META_KEYS = new Set(['source', 'extracted', 'note', 'components_harvested']);
export const SUPPORTED_GROUPS = new Set(['colors', 'typography', 'spacing', 'rounded', 'components']);

const DIMENSION_RE = /^-?\d*\.?\d+(px|em|rem)$/;

/** Number → `<n>px`; strings pass through. Used for size/radius/tracking. */
export function toDimension(v) {
  if (typeof v === 'number') return `${v}px`;
  return v;
}

/** Google lineHeight accepts a Dimension or a unitless number; anything else (e.g. `normal`) cannot be a token. */
export function lineHeightIsTokenable(v) {
  if (typeof v === 'number') return true;
  if (typeof v === 'string' && (DIMENSION_RE.test(v) || /^\d*\.?\d+$/.test(v))) return true;
  return false;
}

/**
 * Map one legacy token path (without the `tokens.` prefix) to its v3 location.
 * Returns { path, kind } where kind is 'token' | 'fonts' | 'prose' | 'meta'.
 */
export function mapLegacyPath(parts, legacyValue) {
  const [group, a, b] = parts;
  if (TOKEN_META_KEYS.has(group)) return { path: `tokens.${group}`, kind: 'meta' };
  if (!SUPPORTED_GROUPS.has(group) && group !== 'radius') throw new Error(`unsupported legacy token group: ${group}`);
  if (group === 'colors' || group === 'spacing') return { path: `${group}.${a}`, kind: 'token' };
  if (group === 'rounded' || group === 'radius') return { path: `rounded.${a}`, kind: 'token' };
  if (group === 'typography') {
    if (a === 'family') return { path: `fonts.roles.${b}`, kind: 'fonts' };
    if (b === undefined) throw new Error(`typography.${a} is not a role map`);
    if (b === 'lineHeight' && !lineHeightIsTokenable(legacyValue)) return { path: `typography.${a}.lineHeight`, kind: 'prose' };
    if (b === 'use') return { path: `typography.${a}.use`, kind: 'token' };
    const renamed = TYPO_RENAMES[b];
    if (!renamed) throw new Error(`unsupported typography field: ${b}`);
    return { path: `typography.${a}.${renamed}`, kind: 'token' };
  }
  if (group === 'components') {
    if (b === undefined) throw new Error(`components.${a} is not a component map`);
    const renamed = COMPONENT_RENAMES[b] || (COMPONENT_KEPT.has(b) ? b : null);
    if (!renamed) throw new Error(`unsupported component field: ${b}`);
    return { path: `components.${a}.${renamed}`, kind: 'token' };
  }
  throw new Error(`unmapped path ${parts.join('.')}`);
}

/** Normalise a value as it is written in v3 (number→px where the Google type requires a Dimension). */
export function v3Value(parts, v) {
  const [group, , b] = parts;
  if (group === 'rounded' || group === 'radius') return toDimension(v);
  if (group === 'typography' && (b === 'size' || b === 'tracking')) return toDimension(v);
  if (group === 'components' && b === 'radius') return toDimension(v);
  return v;
}

/** Walk a nested object and yield [pathParts, leafValue]. Arrays are leaves. */
export function* leaves(obj, prefix = []) {
  for (const [k, v] of Object.entries(obj ?? {})) {
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) yield* leaves(v, [...prefix, k]);
    else yield [[...prefix, k], v];
  }
}

export function getPath(obj, dotted) {
  return dotted.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

/** Legacy H2 title (number stripped) → [v3 H2, mode]. mode 'merge' keeps inner headings; 'sub' nests under an H3. */
export const SECTION_MAP = {
  'Visual Theme & Atmosphere': ['Overview', 'sub'],
  'Primary tasks': ['Overview', 'sub'],
  'Brand Narrative': ['Overview', 'sub'],
  Principles: ['Overview', 'sub'],
  Personas: ['Overview', 'sub'],
  'Color Palette & Roles': ['Colors', 'merge'],
  'Typography Rules': ['Typography', 'merge'],
  'Layout Principles': ['Layout', 'merge'],
  'Responsive Behavior': ['Layout', 'sub'],
  'Depth & Elevation': ['Elevation & Depth', 'merge'],
  'Motion & Easing': ['Motion & Easing', 'merge'],
  'Component Stylings': ['Components', 'merge'],
  'Component Patterns': ['Components', 'merge'],
  States: ['Components', 'sub'],
  "Do's and Don'ts": ["Do's and Don'ts", 'merge'],
  'Voice & Tone': ['Voice & Tone', 'merge'],
  'Agent Prompt Guide': ['Agent Prompt Guide', 'merge'],
};

export const V3_ORDER = [
  'Overview', 'Colors', 'Typography', 'Layout', 'Elevation & Depth', 'Shapes', 'Motion & Easing',
  'Components', "Do's and Don'ts", 'Voice & Tone', 'CJK Typesetting', 'Agent Prompt Guide', 'Governance',
];
