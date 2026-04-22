import type { Overrides, StylePreferences } from './types';

/**
 * Encode user config into a URL-safe base64 hash.
 *
 * Format (pipe-separated, all positional — additive only):
 *   0: refId
 *   1: primaryColor
 *   2: fontFamily
 *   3: headingWeight
 *   4: borderRadius
 *   5: darkMode (1/0)
 *   6: components (comma-separated)
 *   7: stylePreferences (semicolon-separated key=value pairs) -- added v2
 *
 * Backward compatibility rule: NEVER reorder slots, only append. Old hashes
 * lacking parts[7] still decode cleanly with empty stylePreferences.
 */
export function encodeConfig(
  refId: string,
  overrides: Overrides,
  components?: string[],
  stylePreferences?: StylePreferences,
): string {
  const parts = [
    refId,
    overrides.primaryColor || '',
    overrides.fontFamily || '',
    overrides.headingWeight || '',
    overrides.borderRadius || '',
    overrides.darkMode ? '1' : '0',
    (components || []).join(','),
    encodeStylePreferences(stylePreferences),
  ];
  // Drop trailing empty slots so old hashes (no prefs) and new ones with empty
  // prefs round-trip to the same shape; keeps URLs short for common cases.
  while (parts.length > 7 && parts[parts.length - 1] === '') parts.pop();

  const raw = parts.join('|');
  if (typeof window !== 'undefined') {
    return btoa(raw).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  return Buffer.from(raw).toString('base64url');
}

/**
 * Decode a config hash back into refId + overrides + components + stylePreferences.
 * Tolerates hashes produced by older versions (missing parts[7]).
 */
export function decodeConfig(hash: string): {
  refId: string;
  overrides: Overrides;
  components: string[];
  stylePreferences: StylePreferences;
} {
  let b64 = hash.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) b64 += '=';

  let decoded: string;
  if (typeof window !== 'undefined') {
    decoded = atob(b64);
  } else {
    decoded = Buffer.from(b64, 'base64').toString('utf-8');
  }

  const parts = decoded.split('|');
  return {
    refId: parts[0] || 'vercel',
    overrides: {
      primaryColor: parts[1] || '',
      fontFamily: parts[2] || '',
      headingWeight: parts[3] || '',
      borderRadius: parts[4] || '',
      darkMode: parts[5] === '1',
    },
    components: parts[6] ? parts[6].split(',').filter(Boolean) : [],
    stylePreferences: decodeStylePreferences(parts[7]),
  };
}

/**
 * Generate the npx command string.
 */
export function generateNpxCommand(
  refId: string,
  overrides: Overrides,
  components?: string[],
  stylePreferences?: StylePreferences,
): string {
  const hash = encodeConfig(refId, overrides, components, stylePreferences);
  return `npx github:kwakseongjae/oh-my-design --config=${hash}`;
}

// ── StylePreferences serialization ─────────────────────────────────
//
// Encoded as `key=value;key=value`. Keys/values are restricted to
// [a-z0-9_-] in practice (controlled by the wizard), so no escaping
// is needed. Empty/undefined collapses to '' to keep hashes compact.

const STYLE_PREF_KEYS: (keyof StylePreferences)[] = [
  'buttonStyle',
  'inputStyle',
  'headerStyle',
  'cardStyle',
  'depthStyle',
  'density',
];

function encodeStylePreferences(prefs?: StylePreferences): string {
  if (!prefs) return '';
  const pairs: string[] = [];
  for (const key of STYLE_PREF_KEYS) {
    const v = prefs[key];
    if (v) pairs.push(`${key}=${v}`);
  }
  // Pick up any extra keys not in the canonical list (forward-compat)
  for (const [k, v] of Object.entries(prefs)) {
    if (!v) continue;
    if ((STYLE_PREF_KEYS as string[]).includes(k)) continue;
    pairs.push(`${k}=${v}`);
  }
  return pairs.join(';');
}

function decodeStylePreferences(raw: string | undefined): StylePreferences {
  if (!raw) return {};
  const out: StylePreferences = {};
  for (const pair of raw.split(';')) {
    const [k, v] = pair.split('=');
    if (k && v) out[k] = v;
  }
  return out;
}
