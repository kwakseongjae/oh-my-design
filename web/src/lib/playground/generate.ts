/**
 * Playground → OmD v0.1 DESIGN.md generator.
 *
 * Produces a complete 15-section DESIGN.md (tokens §1-9 + Philosophy §10-15)
 * from a PlaygroundState. Every byte is deterministic: primitive choices map
 * through rule tables (./rules/*.ts), voice samples and narrative come from
 * ./samples.ts, and Philosophy-layer auto-derivation goes through
 * ./rules/philosophy.ts.
 *
 * Contract: the output is a valid OmD v0.1 file with `omd: 0.1` frontmatter,
 * brand-name section titles, and every Playground-authored string marked
 * `<!-- illustrative: not verified as live <name> copy -->` so downstream
 * consumers (Claude Code, Cursor, agents) know which strings are authorial
 * exemplars vs observed live copy.
 */

import { generateColorScale, contrastForeground } from "@/lib/core/color";
import type { PlaygroundState } from "./state";
import { MOOD_DEFAULTS } from "./rules/mood";
import { DENSITY_RULES } from "./rules/density";
import { RADIUS_RULES } from "./rules/radius";
import { WEIGHT_RULES } from "./rules/weight";
import { MOTION_RULES } from "./rules/motion";
import {
  MOOD_NARRATIVE,
  MOOD_VOICE_RULES,
  MOOD_VOICE_SAMPLES,
  PERSONA_COPY,
} from "./samples";
import { renderNarrative, renderPrinciples, renderStates, renderMotion } from "./rules/philosophy";

export function generateDesignMd(state: PlaygroundState): string {
  const name = state.name.trim() || "Untitled";
  const scale = generateColorScale(state.primary);
  const fg = contrastForeground(state.primary);
  const density = DENSITY_RULES[state.density];
  const radius = RADIUS_RULES[state.radius];
  const weight = WEIGHT_RULES[state.weight];
  const motion = MOTION_RULES[state.motion];
  const moodNarr = MOOD_NARRATIVE[state.mood];
  const moodVoice = MOOD_VOICE_RULES[state.mood];
  const moodSamples = MOOD_VOICE_SAMPLES[state.mood];

  const frontmatter =
    `---\nomd: 0.1\nbrand: ${name}${state.tagline ? `\ntagline: ${JSON.stringify(state.tagline)}` : ""}\n---\n`;

  const title = `# Design System of ${name}\n`;

  /* ─────────── §1 Visual Theme & Atmosphere ─────────── */
  const section1 = [
    `## 1. Visual Theme & Atmosphere`,
    "",
    `${name} registers as **${state.mood}** — ${MOOD_DEFAULTS[state.mood].tagline.toLowerCase()}. Primary accent \`${state.primary}\` pairs with ${fg === "#09090b" ? "a near-black foreground" : "a near-white foreground"} on the default canvas. ${moodNarr.paragraph}`,
    "",
    `**Key Characteristics:**`,
    `- Primary \`${state.primary}\` — used only where the user can tap or where attention is earned`,
    `- ${state.radius === "sharp" ? "2-4px" : state.radius === "soft" ? "4-10px" : "pill (9999px) controls, 16px cap on cards"} radii as the interactive-signature shape`,
    `- ${state.density} density — ${density.tagline.toLowerCase()}`,
    `- Typography weight ladder ${weight.body} body / ${weight.heading} heading — ${weight.tagline.toLowerCase()}`,
    `- Motion vocabulary is **${state.motion}**: ${motion.rationale.split(".")[0]}.`,
    `- ${motion.springLicensed ? "Spring easing licensed narrowly (see §15)" : "Spring and overshoot are forbidden system-wide"}`,
    "",
  ].join("\n");

  /* ─────────── §2 Color Palette & Roles ─────────── */
  const section2 = [
    `## 2. Color Palette & Roles`,
    "",
    `The palette is built around the single primary \`${state.primary}\`. All other tokens derive from this anchor via a deterministic 11-stop scale and semantic role mapping.`,
    "",
    `### Primary`,
    `- **${name} Primary** (\`${state.primary}\`): \`--color-primary\` — CTAs, active states, brand mark. Never decorative.`,
    "",
    `### Derived scale (generateColorScale)`,
    Object.entries(scale)
      .map(([stop, hex]) => `- **${stop}** (\`${hex}\`): \`--color-primary-${stop}\``)
      .join("\n"),
    "",
    `### Surface & Background`,
    `- **Canvas** (\`#ffffff\`): \`--color-background\` — primary page background (light mode)`,
    `- **Muted** (\`#f5f5f5\`): \`--color-muted\` — grouped sections, input backgrounds`,
    `- **Border** (\`#e5e7eb\`): \`--color-border\` — 1px dividers, card outlines`,
    "",
    `### Text Scale`,
    `- **Primary** (\`${fg}\`): \`--color-foreground\` — body text`,
    `- **Secondary** (\`#52525b\`): \`--color-muted-foreground\` — descriptions, helper copy`,
    `- **Tertiary** (\`#a1a1aa\`): \`--color-disabled\` — placeholders, disabled text`,
    "",
    `### Status`,
    `- **Success** (\`#0aa466\`): \`--color-success\` — confirmation states`,
    `- **Warning** (\`#f59e0b\`): \`--color-warning\` — alerts`,
    `- **Error** (\`#dc2626\`): \`--color-destructive\` — errors, destructive CTAs`,
    "",
  ].join("\n");

  /* ─────────── §3 Typography Rules ─────────── */
  const section3 = [
    `## 3. Typography Rules`,
    "",
    `### Family`,
    `- **Primary**: \`Geist, -apple-system, system-ui, sans-serif\`${state.weight === "light" ? " (consider a serif display face for editorial-register hero typography)" : ""}`,
    `- **Monospace**: \`Geist Mono, ui-monospace, monospace\`${state.weight === "light" ? "" : ""}`,
    "",
    `### Weight ladder (${state.weight})`,
    `- Heading: **${weight.heading}** — display and hero type`,
    `- Body: **${weight.body}** — paragraphs, form fields, descriptions`,
    `- CTA: **${weight.cta}** — primary and secondary buttons`,
    `- ${weight.lightHeadingPermitted ? "Light headings are permitted — pair with serif or with generous size (≥40px) to avoid anemic display." : "Middle weights (500/550/600 variants) are deliberately disabled — two weights, never three."}`,
    "",
    `### Size scale`,
    `| Tier | Size | Line-height | Weight |`,
    `|---|---|---|---|`,
    `| Display | 48px | 1.1 | ${weight.heading} |`,
    `| Heading XL | 36px | 1.15 | ${weight.heading} |`,
    `| Heading L | 28px | 1.2 | ${weight.heading} |`,
    `| Heading M | 20px | 1.3 | ${weight.heading} |`,
    `| Body | 16px | 1.5 | ${weight.body} |`,
    `| Small | 14px | 1.45 | ${weight.body} |`,
    `| Caption | 12px | 1.4 | ${weight.body} |`,
    "",
  ].join("\n");

  /* ─────────── §4 Component Stylings ─────────── */
  const section4 = [
    `## 4. Component Stylings`,
    "",
    `### Buttons`,
    `- Corner: \`border-radius: ${radius.control}${typeof radius.control === "number" ? "px" : ""}\``,
    `- Height: ${density.interactiveMinHeight}px (desktop) / ${density.mobileTouchFloor}px (mobile touch floor)`,
    `- Padding: \`${density.scale[3]}px ${density.scale[4]}px\``,
    `- Primary: \`--color-primary\` bg with contrast-foreground text, weight ${weight.cta}`,
    `- Secondary: transparent bg, \`--color-border\` 1px outline, foreground text`,
    "",
    `### Inputs`,
    `- Corner: \`${radius.control}px\``,
    `- Height: ${density.interactiveMinHeight}px`,
    `- Padding: \`${density.scale[2]}px ${density.scale[3]}px\``,
    `- Border: 1px \`--color-border\` default, 2px \`--color-primary\` on focus`,
    "",
    `### Cards`,
    `- Corner: \`${radius.surface}px\` (capped even when other radii are pill-shaped)`,
    `- Padding: \`${density.cardPadding}px\``,
    `- Border: 1px \`--color-border\`, shadowless by default${state.motion === "expressive" ? " (hover may lift with a 0-2-6 shadow)" : ""}`,
    "",
    `### Badges`,
    `- Corner: \`${radius.badge}${typeof radius.badge === "number" ? "px" : ""}\``,
    `- Padding: \`2px ${density.scale[2]}px\``,
    `- Typography: 12px weight ${weight.cta}`,
    "",
    `### Tabs`,
    `- Style: ${state.radius === "pill" ? "pill-shaped segmented control" : "underline with bottom border animation"}`,
    `- Active: \`--color-primary\` text${state.radius === "pill" ? " + bg tint" : ""}`,
    "",
    `### Avatars`,
    `- Shape: ${radius.avatar}`,
    `- Sizes: 24px / 32px / 40px / 56px`,
    "",
  ].join("\n");

  /* ─────────── §5 Layout Principles ─────────── */
  const section5 = [
    `## 5. Layout Principles`,
    "",
    `### Spacing scale (${state.density})`,
    `Base unit: \`${density.unit}px\`. Scale: \`${density.scale.join(" / ")}\`.`,
    "",
    `### Rhythm`,
    `- Row padding (Y): ${density.rowPaddingY}px`,
    `- Section gap: ${density.sectionGap}px`,
    `- Card padding: ${density.cardPadding}px`,
    `- Container max-width: 1280px (dense) / 1440px (comfortable+)`,
    "",
    `### Grid`,
    `- 12-column grid on desktop (>=1024px)`,
    `- 4-column on tablet (640-1023px)`,
    `- Single column on mobile (<640px)`,
    "",
  ].join("\n");

  /* ─────────── §6 Depth & Elevation ─────────── */
  const flat = state.mood === "sharp" || state.mood === "editorial";
  const section6 = [
    `## 6. Depth & Elevation`,
    "",
    flat
      ? `Depth is expressed through background-color layering rather than shadow stacking. The 3-step ladder — canvas \`#ffffff\` → muted \`#f5f5f5\` → elevated \`#fafafa\` — provides visual hierarchy without interactive cost.`
      : `Depth comes from single-layer shadows and selective background layering. Cards stay flat by default; dropdowns and popovers lift with a single 0-2-6 shadow.`,
    "",
    `### Shadow tokens`,
    flat
      ? `- \`--shadow-none\`: \`none\` (cards, rows)`
      : `- \`--shadow-sm\`: \`0 1px 2px rgba(0,0,0,0.04)\` — hover lift`,
    `- \`--shadow-md\`: \`0 2px 6px rgba(0,0,0,0.08)\` — dropdowns, popovers`,
    `- \`--shadow-lg\`: \`0 8px 24px rgba(0,0,0,0.12)\` — modals, drawers`,
    "",
    `### Z-index`,
    `- 10: sticky header`,
    `- 50: dropdowns, popovers`,
    `- 100: modals, drawers`,
    `- 1000: toasts, snackbars`,
    "",
  ].join("\n");

  /* ─────────── §7 Do's and Don'ts ─────────── */
  const section7 = [
    `## 7. Do's and Don'ts`,
    "",
    `**DO**:`,
    `- Reserve \`${state.primary}\` for CTAs, active states, and brand mark`,
    `- Use density-scaled spacing tokens; never hardcode margin/padding values`,
    `- Use ${state.radius === "pill" ? "pill radii on buttons but cap card radius at 16px" : state.radius === "sharp" ? "2-4px corners consistently across components" : "4-10px corners — default soft radius family"}`,
    `- Respect \`prefers-reduced-motion: reduce\` — collapse all \`motion-*\` to \`motion-instant\``,
    `- ${motion.springLicensed ? `Use spring easing only for: ${motion.springScopes!.join(", ")}` : "Leave spring/overshoot out of the system entirely"}`,
    `- Contrast: primary on canvas must meet WCAG 4.5:1 for body text, 3:1 for large display`,
    "",
    `**DON'T**:`,
    `- Use \`${state.primary}\` as a decorative fill or illustration accent`,
    `- Mix three font-weight variants on the same surface`,
    `- Stack more than one shadow on a single element`,
    `- ${state.radius === "pill" ? "Ship pill-radius cards (kitsch — cap at 16px)" : state.radius === "sharp" ? "Round components to match a reference aesthetic — sharp is the brand's utility signature" : "Oversize corners beyond 12px on interactive controls"}`,
    `- Add gradients, glassmorphism, or purple-on-white — these are AI-slop defaults`,
    "",
  ].join("\n");

  /* ─────────── §8 Responsive Behavior ─────────── */
  const section8 = [
    `## 8. Responsive Behavior`,
    "",
    `### Breakpoints`,
    `| Name | Range |`,
    `|---|---|`,
    `| Mobile | <640px |`,
    `| Tablet | 640-1023px |`,
    `| Desktop | 1024-1439px |`,
    `| Large | 1440px+ |`,
    "",
    `### Touch targets`,
    `All interactive controls respect a **${density.mobileTouchFloor}px minimum height on touch surfaces**, regardless of the active density preset. Mobile geometry overrides compact-density preferences.`,
    "",
    `### Collapsing strategy`,
    `- Multi-column grids collapse to single column below 640px`,
    `- Navigation collapses to a drawer (\`@base-ui/react\` Dialog) or bottom-sheet pattern on mobile`,
    `- Tables convert to stacked cards below 640px`,
    "",
  ].join("\n");

  /* ─────────── §9 Agent Prompt Guide ─────────── */
  const section9 = [
    `## 9. Agent Prompt Guide`,
    "",
    `### Quick Color Reference`,
    `- Primary: \`${state.primary}\` — CTAs, brand mark`,
    `- Canvas: \`#ffffff\` / \`#18181b\` (dark)`,
    `- Foreground: \`${fg}\``,
    `- Muted: \`#f5f5f5\``,
    `- Border: \`#e5e7eb\``,
    "",
    `### Example Component Prompts`,
    `1. "Design a primary button for ${name}: \`${typeof radius.control === "number" ? radius.control : "9999"}px\` radius, \`${weight.cta}\` weight, \`${state.primary}\` bg with contrast foreground, ${density.interactiveMinHeight}px height, \`${density.scale[3]}px ${density.scale[4]}px\` padding."`,
    `2. "Build a ${name} card: \`${radius.surface}px\` radius, \`${density.cardPadding}px\` padding, ${flat ? "shadowless" : "single 0-2-6 shadow on hover"}, 1px \`#e5e7eb\` border. Header 20px weight ${weight.heading}, body 14px weight ${weight.body}."`,
    `3. "Create a ${name} empty state: white canvas, single ${state.density === "airy" ? "generous" : "measured"}-spaced paragraph of 14px body copy, one primary CTA at \`${typeof radius.control === "number" ? radius.control : "9999"}px\` radius. No illustration."`,
    "",
    `### Iteration Guide`,
    `- Always reference tokens (\`--color-primary\`, \`--space-unit\`), never raw hex/px`,
    `- Two weights only: ${weight.heading} and ${weight.body}/${weight.cta}. No middle weights.`,
    `- Spring/overshoot: ${motion.springLicensed ? "licensed for " + motion.springScopes!.join(" and ") + " only" : "forbidden system-wide"}`,
    `- Prefer single primary action per surface — secondary CTAs are outline/ghost`,
    `- On mobile: enforce ${density.mobileTouchFloor}px touch-floor even when compact density is active`,
    "",
  ].join("\n");

  /* ─────────── §10 Voice & Tone ─────────── */
  const voiceLine =
    state.voice.length >= 2
      ? `${name}'s voice is **${state.voice.join(", ").replace(/,([^,]*)$/, ", and$1").toLowerCase()}**`
      : `${name}'s voice reflects its ${state.mood} register`;

  const section10 = [
    `## 10. Voice & Tone`,
    "",
    `${voiceLine}. The register favors ${state.mood === "sharp" || state.mood === "editorial" ? "plain declaratives, exact amounts, and refusal of hype vocabulary" : state.mood === "warm" ? "second-person phrasing, outcome-over-feature framing, and warmth without sycophancy" : state.mood === "playful" ? "permission to be clever (once per surface), primary-color moments of delight, and honest error copy when humor would be wrong" : "measured cadence, past-tense success toasts, and the kind of specificity that respects the reader's time"}.`,
    "",
    `| Context | Tone |`,
    `|---|---|`,
    `| Headlines | ${state.mood === "editorial" ? "Heavy weight, full sentences, one idea" : state.mood === "playful" ? "Short, with a turn — never two ideas" : "Declarative, short, no superlatives"} |`,
    `| CTAs | Verb + noun. Plain, not clever. (${weight.cta} weight) |`,
    `| Success | Past-tense single sentence |`,
    `| Error (inline) | Specific, blameless, one actionable next step |`,
    `| Onboarding | One idea per screen, never bullet-listed feature dump |`,
    `| Legal / policy | Formal register — the one allowed deviation from the body voice |`,
    `| Empty states | Explain the *why* in one line, offer one action |`,
    "",
    `**Do**:`,
    moodVoice.do.map((d) => `- ${d}`).join("\n"),
    "",
    `**Don't**:`,
    moodVoice.dont.map((d) => `- ${d}`).join("\n"),
    "",
    `**Representative voice samples** (illustrative — to be replaced with observed live copy before shipping):`,
    "",
    moodSamples
      .map(
        (s) =>
          `- ${s.context}: *"${s.text.replaceAll("{{name}}", name)}"* <!-- illustrative: not verified as live ${name} copy -->`,
      )
      .join("\n"),
    "",
  ].join("\n");

  /* ─────────── §11 Brand Narrative ─────────── */
  const section11 = [`## 11. Brand Narrative`, "", renderNarrative(state), ""].join("\n");

  /* ─────────── §12 Principles ─────────── */
  const section12 = [`## 12. Principles`, "", renderPrinciples(state), ""].join("\n");

  /* ─────────── §13 Personas ─────────── */
  const section13 = [
    `## 13. Personas`,
    "",
    `*Personas below are fictional archetypes informed by publicly described product-user segments, not individual people.*`,
    "",
    state.personas.length === 0
      ? `*(No personas selected. Pick 2-4 from the Playground's persona list — ${name}'s Philosophy layer needs at least two archetypes for coherence.)*`
      : state.personas
          .map((id) => {
            const p = PERSONA_COPY[id];
            return `**${p.name}.** ${p.role}. ${p.goal}. ${p.productRole}.`;
          })
          .join("\n\n"),
    "",
  ].join("\n");

  /* ─────────── §14 States ─────────── */
  const section14 = [
    `## 14. States`,
    "",
    `*Copy strings below are illustrative treatments of ${name}'s tone applied to each state. A production team should replace them with actually-observed live copy before shipping.*`,
    "",
    renderStates(state),
    "",
  ].join("\n");

  /* ─────────── §15 Motion & Easing ─────────── */
  const section15 = [`## 15. Motion & Easing`, "", renderMotion(state), ""].join("\n");

  /* ─────────── Footer ─────────── */
  const footer = [
    "",
    `<!--`,
    `OmD v0.1 file generated via oh-my-design Playground on ${new Date().toISOString().slice(0, 10)}.`,
    ``,
    `Primitives (user-picked): mood=${state.mood} · primary=${state.primary} · density=${state.density} · radius=${state.radius} · weight=${state.weight} · motion=${state.motion}`,
    `Voice adjectives (user-picked): ${state.voice.join(", ") || "(none)"}`,
    `Personas (user-picked): ${state.personas.join(", ") || "(none)"}`,
    `Seed: ${state.base.kind}${state.base.kind === "clone" ? ` (from ${(state.base as { refId: string }).refId})` : state.base.kind === "personality" ? ` (from ${(state.base as { code: string }).code})` : ""}`,
    ``,
    `Sections 10-15 carry illustrative copy marked inline. Section 11 narrative is template-interpolated from mood + voice picks. Section 12 principles are rule-picked from a library based on the primitives; section 14 state copy is density- and motion-aware. Section 15 motion tokens and spring stance are direct from the motion preset.`,
    ``,
    `This file was authored by a selection-based UI with zero LLM calls. For brand-critical surfaces, cross-check against live product microcopy.`,
    `-->`,
    "",
  ].join("\n");

  return [
    frontmatter,
    title,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10,
    section11,
    section12,
    section13,
    section14,
    section15,
    footer,
  ].join("\n");
}
