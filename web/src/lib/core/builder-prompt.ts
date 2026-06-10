import type { Overrides, StylePreferences } from './types';

/**
 * Compose the "first prompt" copied from the builder preview step's InstallCta.
 *
 * Unlike the generic per-brand prompt on detail pages, this one carries the
 * user's actual step-2 customizations so the handoff to the coding agent
 * (omd:init) doesn't lose them. Rules:
 *
 * - Base sentence is always `Set up our design system — <brand>-style.`
 * - Only NON-DEFAULT selections are appended, as short English sentences.
 *   An override slot equal to its reference-seeded default (or empty string,
 *   the "use as-is" contract) is not a customization and is omitted.
 * - Ends with a provenance pointer to the preview URL (the cfg param encodes
 *   the same config) so the agent can attribute — but never needs to fetch.
 * - One paragraph, no markdown.
 */

export const DEFAULT_BUILDER_COMPONENTS = [
  'button', 'input', 'table', 'card', 'badge', 'tabs', 'dialog',
];

export interface BuilderPromptInput {
  /** Display name / reference id ("11st", "toss", ...). */
  brandName: string;
  overrides: Overrides;
  components: string[];
  stylePreferences?: StylePreferences;
  /**
   * Reference-seeded defaults for the slots the wizard pre-fills
   * (selectRef seeds primaryColor/borderRadius from the reference detail).
   * An override matching its default means "unchanged".
   */
  defaults?: { primaryColor?: string; borderRadius?: string };
  /** Full preview URL (with cfg param) appended as provenance. */
  url?: string;
}

/** Order-insensitive set equality for the component list. */
function sameComponents(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const set = new Set(b);
  return a.every((c) => set.has(c));
}

/** "buttonStyle" → "button" — keys are camelCase axis names ending in Style,
 *  plus bare axes like "density". */
function humanizePrefKey(key: string): string {
  return key.replace(/Style$/, '').replace(/([A-Z])/g, ' $1').toLowerCase().trim();
}

export function buildBuilderPrompt(input: BuilderPromptInput): string {
  const { brandName, overrides, components, stylePreferences, defaults, url } = input;
  const parts: string[] = [`Set up our design system — ${brandName}-style.`];

  if (components.length > 0 && !sameComponents(components, DEFAULT_BUILDER_COMPONENTS)) {
    parts.push(`Components: ${components.join(', ')}.`);
  }

  const customized = (value: string, def?: string) =>
    value !== '' && value !== (def ?? '');

  if (customized(overrides.primaryColor, defaults?.primaryColor)) {
    parts.push(`Primary color: ${overrides.primaryColor}.`);
  }
  if (customized(overrides.fontFamily)) {
    parts.push(`Font: ${overrides.fontFamily}.`);
  }
  if (customized(overrides.headingWeight)) {
    parts.push(`Heading weight: ${overrides.headingWeight}.`);
  }
  if (customized(overrides.borderRadius, defaults?.borderRadius)) {
    parts.push(`Border radius: ${overrides.borderRadius}.`);
  }
  if (overrides.darkMode) {
    parts.push('Dark mode enabled.');
  }

  const prefPairs = Object.entries(stylePreferences ?? {})
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => `${humanizePrefKey(k)} ${v}`);
  if (prefPairs.length > 0) {
    parts.push(`Style preferences: ${prefPairs.join(', ')}.`);
  }

  let prompt = parts.join(' ');
  if (url) prompt += ` (builder config: ${url})`;
  return prompt;
}
