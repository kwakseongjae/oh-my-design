import type { Overrides } from './types';

/**
 * Encode user config into a URL-safe base64 hash.
 * Format: refId|primary|font|weight|radius|darkMode|comp1,comp2,...
 * Compact enough for CLI flags.
 */
export function encodeConfig(
  refId: string,
  overrides: Overrides,
  components?: string[],
): string {
  const parts = [
    refId,
    overrides.primaryColor || '',
    overrides.fontFamily || '',
    overrides.headingWeight || '',
    overrides.borderRadius || '',
    overrides.darkMode ? '1' : '0',
    (components || []).join(','),
  ];
  const raw = parts.join('|');
  if (typeof window !== 'undefined') {
    return btoa(raw).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  return Buffer.from(raw).toString('base64url');
}

/**
 * Decode a config hash back into refId + overrides + components.
 */
export function decodeConfig(hash: string): {
  refId: string;
  overrides: Overrides;
  components: string[];
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
  };
}

/**
 * Generate the npx command string.
 */
export function generateNpxCommand(
  refId: string,
  overrides: Overrides,
  components?: string[],
): string {
  const hash = encodeConfig(refId, overrides, components);
  return `npx oh-my-design --config=${hash}`;
}
