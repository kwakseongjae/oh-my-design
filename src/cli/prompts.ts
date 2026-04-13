import * as p from '@clack/prompts';
import pc from 'picocolors';
import { listReferences, loadReference } from '../core/reference-parser.js';
import type { ReferenceEntry } from '../core/reference-parser.js';

// ── Types ────────────────────────────────────────────────────────

export interface CustomOverrides {
  primaryColor?: string;   // override primary color hex
  headingWeight?: string;  // override heading weight
  borderRadius?: string;   // override base radius
  fontFamily?: string;     // override primary font
  darkMode: boolean;
  additionalNotes?: string;
}

export interface PromptResult {
  reference: ReferenceEntry;
  overrides: CustomOverrides;
  outputMode: 'as-is' | 'customized';
}

// ── Main ─────────────────────────────────────────────────────────

export async function runPrompts(): Promise<PromptResult> {
  p.intro(`${pc.bold('oh-my-design')} — Generate your DESIGN.md from real design systems`);

  // Step 1: List all references grouped by category
  const refs = listReferences();
  const categories = [...new Set(refs.map((r) => r.category))];

  // Step 1a: Pick category
  const category = await p.select({
    message: 'Pick a category:',
    options: categories.map((cat) => {
      const count = refs.filter((r) => r.category === cat).length;
      return { value: cat, label: `${cat}`, hint: `${count} references` };
    }),
  });
  if (p.isCancel(category)) { p.cancel('Cancelled.'); process.exit(0); }

  // Step 1b: Pick reference within category
  const categoryRefs = refs.filter((r) => r.category === category);
  const refId = await p.select({
    message: `Select a design system reference:`,
    options: categoryRefs.map((r) => ({
      value: r.id,
      label: `${r.name}`,
      hint: `${r.primaryColor}`,
    })),
  });
  if (p.isCancel(refId)) { p.cancel('Cancelled.'); process.exit(0); }

  const reference = loadReference(refId as string);

  p.log.info(`${pc.bold(reference.name)} loaded`);
  p.log.info(`  Primary: ${pc.bold(reference.colors.primary)} ${reference.colors.primaryName}`);
  p.log.info(`  Font: ${reference.typography.primary}`);
  p.log.info(`  Radius: ${reference.radius}`);
  if (reference.mood) {
    p.log.info(`  Mood: ${reference.mood.slice(0, 120)}...`);
  }

  // Step 2: Use as-is or customize?
  const mode = await p.select({
    message: 'How do you want to use this design system?',
    options: [
      { value: 'as-is', label: 'Use as-is', hint: 'Copy the reference DESIGN.md directly' },
      { value: 'customized', label: 'Customize', hint: 'Modify colors, fonts, radius, etc.' },
    ],
  });
  if (p.isCancel(mode)) { p.cancel('Cancelled.'); process.exit(0); }

  if (mode === 'as-is') {
    const darkMode = await p.confirm({
      message: 'Include dark mode notes?',
      initialValue: false,
    });
    if (p.isCancel(darkMode)) { p.cancel('Cancelled.'); process.exit(0); }

    return {
      reference,
      overrides: { darkMode },
      outputMode: 'as-is',
    };
  }

  // Step 3: Customization prompts
  const overrides = await p.group(
    {
      primaryColor: () =>
        p.text({
          message: `Primary color (current: ${reference.colors.primary}):`,
          placeholder: 'Press enter to keep, or type a hex like #6366f1',
          validate: (val) => {
            if (val && !/^#[0-9a-fA-F]{6}$/.test(val)) return 'Invalid hex color';
          },
        }),

      fontFamily: () =>
        p.select({
          message: `Primary font (current: ${reference.typography.primary}):`,
          options: [
            { value: '', label: `Keep "${reference.typography.primary}"`, hint: 'No change' },
            { value: 'Inter', label: 'Inter', hint: 'Clean, geometric sans-serif' },
            { value: 'system-ui', label: 'System UI', hint: 'Native OS fonts' },
            { value: 'JetBrains Mono', label: 'JetBrains Mono', hint: 'Monospace, technical' },
            { value: 'Geist', label: 'Geist', hint: 'Vercel\'s modern sans' },
          ],
        }),

      headingWeight: () =>
        p.select({
          message: `Heading weight (current: ${reference.typography.headingWeight}):`,
          options: [
            { value: '', label: `Keep ${reference.typography.headingWeight}`, hint: 'No change' },
            { value: '300', label: '300 — Light', hint: 'Whisper authority (Stripe style)' },
            { value: '400', label: '400 — Regular' },
            { value: '500', label: '500 — Medium', hint: 'Balanced emphasis' },
            { value: '600', label: '600 — Semibold', hint: 'Strong headings' },
            { value: '700', label: '700 — Bold', hint: 'Maximum impact' },
          ],
        }),

      borderRadius: () =>
        p.select({
          message: `Border radius (current: ${reference.radius}):`,
          options: [
            { value: '', label: `Keep "${reference.radius}"`, hint: 'No change' },
            { value: '2px', label: 'Sharp (2px)', hint: 'Technical, precise' },
            { value: '4px', label: 'Tight (4px)', hint: 'Conservative' },
            { value: '6px', label: 'Moderate (6px)', hint: 'Balanced' },
            { value: '8px', label: 'Comfortable (8px)', hint: 'Friendly' },
            { value: '12px', label: 'Rounded (12px)', hint: 'Soft, approachable' },
            { value: '9999px', label: 'Pill', hint: 'Fully rounded' },
          ],
        }),

      darkMode: () =>
        p.confirm({
          message: 'Generate dark mode variant?',
          initialValue: false,
        }),

      additionalNotes: () =>
        p.text({
          message: 'Any additional customization notes? (optional)',
          placeholder: 'e.g. "Use more warm tones" or press enter to skip',
        }),
    },
    {
      onCancel: () => { p.cancel('Cancelled.'); process.exit(0); },
    },
  );

  return {
    reference,
    overrides: {
      primaryColor: overrides.primaryColor || undefined,
      fontFamily: overrides.fontFamily || undefined,
      headingWeight: overrides.headingWeight || undefined,
      borderRadius: overrides.borderRadius || undefined,
      darkMode: overrides.darkMode,
      additionalNotes: overrides.additionalNotes || undefined,
    },
    outputMode: 'customized',
  };
}
