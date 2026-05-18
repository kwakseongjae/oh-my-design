import { z } from 'zod';
import { getReference, getDisplayName } from '../data.js';

export const designFromRefSchema = {
  refId: z
    .string()
    .min(1)
    .describe('Reference id (e.g. "toss", "stripe"). Use list_references to discover ids.'),
  task: z
    .string()
    .min(1)
    .describe('What to build, e.g. "a pricing page", "a settings screen", "an onboarding flow".'),
};

const InputSchema = z.object(designFromRefSchema);

// Pull a labeled section by heading match (case-insensitive partial match).
function extractSection(body: string, needle: string): string | null {
  const lines = body.split(/\r?\n/);
  const need = needle.toLowerCase();
  let inSection = false;
  let collected: string[] = [];
  for (const line of lines) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h) {
      if (inSection) break;
      if (h[1]!.toLowerCase().includes(need)) {
        inSection = true;
        collected.push(`## ${h[1]}`);
        continue;
      }
    }
    if (inSection) collected.push(line);
  }
  const out = collected.join('\n').trim();
  return out.length > 0 ? out : null;
}

export function buildDesignFromRefPrompt(input: z.infer<typeof InputSchema>) {
  const ref = getReference(input.refId);
  if (!ref) {
    throw new Error(
      `Unknown reference id "${input.refId}". Use list_references to discover available ids.`,
    );
  }
  const name = getDisplayName(ref);
  const fm = ref.frontmatter;
  const sections: string[] = [];
  for (const label of [
    'Visual Theme',
    'Color Palette',
    'Typography',
    'Voice',
  ]) {
    const s = extractSection(ref.body, label);
    if (s) sections.push(s);
  }
  const fmLine = [
    fm.country ? `country=${fm.country}` : null,
    fm.category ? `category=${fm.category}` : null,
    fm.primary_color ? `primary=${fm.primary_color}` : null,
    fm.ds?.name ? `official-ds=${fm.ds.name}` : null,
  ]
    .filter(Boolean)
    .join(' · ');

  const text = [
    `You are building UI in the visual + verbal style of **${name}** (${fmLine}).`,
    '',
    `Task: ${input.task}`,
    '',
    `Apply these brand rules strictly. Do not invent tokens — pull values from the spec below.`,
    `When the task is ambiguous, default to the brand's documented patterns rather than generic Tailwind/Material defaults.`,
    '',
    '---',
    '',
    sections.length > 0
      ? sections.join('\n\n')
      : ref.raw.slice(0, 4000),
    '',
    '---',
    '',
    `If you need additional sections (Components, Layout, Motion, Personas), call the \`get_design_md\` tool with id="${ref.id}" to fetch the full spec.`,
  ].join('\n');

  return text;
}
