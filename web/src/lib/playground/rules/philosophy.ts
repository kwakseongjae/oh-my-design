/**
 * Philosophy layer derivation — turns a PlaygroundState into the auto-derived
 * parts of sections 10-15:
 *   §11 Brand Narrative  (template interpolation with name/tagline/mood)
 *   §12 Principles       (rule-based pick from a principle library)
 *   §14 States           (11-row table with density/motion-aware copy)
 *
 * User-picked sections — §10 voice adjectives/samples, §13 personas, §15 motion
 * preset — are surfaced directly by `generate.ts`; this file focuses on the
 * auto-derived triad.
 */

import type { PlaygroundState } from "../state";
import { MOOD_NARRATIVE, STATE_BASE_ROWS, MOOD_VOICE_SAMPLES } from "../samples";
import { MOTION_RULES } from "./motion";
import { DENSITY_RULES } from "./density";
import { RADIUS_RULES } from "./radius";

/* ─────────── §11 Brand Narrative ─────────── */

export function renderNarrative(state: PlaygroundState): string {
  const mn = MOOD_NARRATIVE[state.mood];
  const [v0, v1, v2] = state.voice;
  const name = state.name || "This brand";

  const voiceLine =
    [v0, v1, v2].filter(Boolean).length >= 2
      ? `${name} sounds ${v0}, ${v1}${v2 ? `, and ${v2}` : ""}.`
      : `${name} has an intentional voice.`;

  const descBlock = state.description
    ? state.description
    : state.tagline
      ? state.tagline
      : `${name} is designed to feel deliberately ${state.mood}.`;

  return `${voiceLine} ${descBlock}

${mn.paragraph}

What ${name} refuses: ${mn.refusal}. What it embraces: ${mn.embrace} — from the ${state.radius} corners to the ${state.motion} motion vocabulary, every token argues for the same register.`;
}

/* ─────────── §12 Principles ─────────── */

interface Principle {
  id: string;
  title: string;
  rationale: string;
  uiImplication: string;
  /** Match test — returns true when the state activates this principle. */
  matches: (s: PlaygroundState) => boolean;
  /** Higher weight wins in tiebreak (pick 5-8 total). */
  weight: number;
}

const PRINCIPLES: Principle[] = [
  {
    id: "semantic-color-tokens",
    title: "Color resolves through semantic tokens",
    rationale:
      "No component hardcodes a hex. Primary/secondary/attention/success all flow through token aliases that can be themed without a refactor.",
    uiImplication: "Components reference `--color-primary`, never `#xxxxxx`. A theme swap is a `:root` redefinition, not code change.",
    matches: () => true,
    weight: 10,
  },
  {
    id: "primary-is-finite",
    title: "Primary is a signal, not a decoration",
    rationale:
      "The primary color appears only where a user can tap or where attention is earned. Used decoratively it stops meaning anything.",
    uiImplication: "Primary-tinted surfaces are reserved for CTAs, active states, and brand mark. Illustrations and dividers use neutrals.",
    matches: () => true,
    weight: 9,
  },
  {
    id: "one-action-per-screen",
    title: "One primary action per surface",
    rationale:
      "Two primary buttons on the same viewport is two screens. Secondary actions are allowed; two primaries never are.",
    uiImplication: "Enforced via a single `Button.primary` per route or modal; additional commits use `Button.secondary` or `Button.ghost`.",
    matches: () => true,
    weight: 8,
  },
  {
    id: "no-spring-on-money",
    title: "Commerce motion has no spring",
    rationale:
      "Spring easing reads as uncertain — acceptable on stickers and delight surfaces, wrong on amounts, payments, and confirmations.",
    uiImplication: "Success on money-moves uses `ease-standard` with slow duration; overshoot is forbidden regardless of preset.",
    matches: (s) => s.motion !== "expressive",
    weight: 7,
  },
  {
    id: "breathing-room",
    title: "Breathing room is earned, not decorative",
    rationale:
      "Spacing around key surfaces (balance, price, headline) is 1.5× the surrounding body spacing. Tight money reads as cheap.",
    uiImplication: "Hero numbers carry double-scale margin; body text stays in the base rhythm.",
    matches: (s) => s.density !== "compact",
    weight: 6,
  },
  {
    id: "two-weights-not-three",
    title: "Two weights, never three",
    rationale:
      "Heading uses one weight, body/CTA another. Middle weights muddy the hierarchy between scan-value and read-value.",
    uiImplication: "Disable font's medium (500, 550) weights in the token layer; only heading weight and body weight are exported.",
    matches: () => true,
    weight: 7,
  },
  {
    id: "pill-is-tactile",
    title: "Pill radius is the tactile signature",
    rationale:
      "Pill-shaped buttons and chips are the brand's fingerprint when picked; a 4px corner on a button reads as 'not us'.",
    uiImplication: "All interactive controls ship at `radius-control: 9999px`; cards cap at 16px (pill cards are kitsch).",
    matches: (s) => s.radius === "pill",
    weight: 6,
  },
  {
    id: "sharp-is-utility",
    title: "Sharp corners are utility, not aesthetic",
    rationale:
      "2-4px corners signal 'scan the catalog efficiently'. Playful rounding would read as social, not transactional.",
    uiImplication: "Component radii stay sharp even when users drag the radius slider; brand consistency beats per-component craft.",
    matches: (s) => s.radius === "sharp",
    weight: 6,
  },
  {
    id: "flat-depth",
    title: "Depth comes from background layering, not shadow stacking",
    rationale:
      "Surface elevation is expressed by a 3-step background ladder (base → muted → elevated). Multi-layer shadows are reserved for floating overlays only.",
    uiImplication: "Cards ship shadowless; dropdowns and popovers use a single 0-2-6 shadow — never a 3-stack.",
    matches: (s) => s.mood === "sharp" || s.mood === "editorial",
    weight: 5,
  },
  {
    id: "reduce-motion-respected",
    title: "Motion is decoration, never load-bearing",
    rationale:
      "Every animation respects `prefers-reduced-motion: reduce`. Information conveyed only via motion (order, relationship, state change) also has a static equivalent.",
    uiImplication: "Under reduce-motion, all `motion-*` tokens collapse to `motion-instant`; transitions become crossfades.",
    matches: () => true,
    weight: 9,
  },
  {
    id: "near-black-not-pure",
    title: "Near-black, not pure black",
    rationale:
      "Pure `#000000` on pure `#ffffff` is an institutional-cold pairing. Body text in a warm near-black reads softer without losing contrast.",
    uiImplication: "Foreground text uses `#141413` / `#1e1e1e` / `#18181b` depending on temperature; `#000000` is reserved for brand mark.",
    matches: (s) => s.mood === "warm" || s.mood === "luxurious" || s.mood === "editorial",
    weight: 5,
  },
  {
    id: "typography-carries-weight",
    title: "Typography does the work; chrome stays flat",
    rationale:
      "Headlines and display type carry the hierarchy. Decorative surfaces (heavy shadows, gradient strokes, glassmorphism) are absent.",
    uiImplication: "Heading tier uses 2.25× body line-height multiplier, bold or heavy per weight scale. Surface styles remain minimal.",
    matches: (s) => s.mood === "editorial" || s.mood === "luxurious",
    weight: 6,
  },
];

export function pickPrinciples(state: PlaygroundState, minCount = 5, maxCount = 8): Principle[] {
  const matches = PRINCIPLES.filter((p) => p.matches(state)).sort((a, b) => b.weight - a.weight);
  // Cap to maxCount; ensure at least minCount even if only trivial matches
  return matches.slice(0, Math.max(minCount, Math.min(maxCount, matches.length)));
}

export function renderPrinciples(state: PlaygroundState): string {
  const picked = pickPrinciples(state);
  return picked
    .map(
      (p, i) =>
        `${i + 1}. **${p.title}.** ${p.rationale} *UI implication:* ${p.uiImplication}`,
    )
    .join("\n\n");
}

/* ─────────── §14 States ─────────── */

export function renderStates(state: PlaygroundState): string {
  const name = state.name || "This brand";
  const density = DENSITY_RULES[state.density];
  const radius = RADIUS_RULES[state.radius];
  const motion = MOTION_RULES[state.motion];

  // Interpolate {{name}} in base rows and surface density/motion decisions in relevant rows.
  const rows = STATE_BASE_ROWS.map((r) => {
    let t = r.treatment.replaceAll("{{name}}", name);
    // Append density/motion qualifiers on loading/skeleton rows
    if (r.label.includes("Loading (first paint)")) {
      t = t.replace(
        "Density-scaled radii.",
        `Density-scaled radii (${radius.surface}px).`,
      );
      t = t.replace(
        "Shimmer per the motion preset.",
        `Shimmer ≈${motion.durations.slow}ms per the ${state.motion} motion preset.`,
      );
    }
    if (r.label.includes("Success (inline flash)")) {
      t = t.replace(
        "300ms fade",
        `${motion.durations.standard}ms fade`,
      );
    }
    return `| ${r.label} | ${t} |`;
  });

  return [
    "| State | Treatment |",
    "|---|---|",
    ...rows,
  ].join("\n");
}

/* ─────────── §15 Motion ─────────── */

export function renderMotion(state: PlaygroundState): string {
  const m = MOTION_RULES[state.motion];
  const springLine = m.springLicensed
    ? `Spring is licensed in exactly these scopes: ${m.springScopes!.map((s) => `*${s}*`).join(", ")}. Outside these scopes overshoot is forbidden.`
    : `Spring and overshoot are forbidden system-wide. No \`cubic-bezier\` with y-values outside \`[0, 1]\`.`;

  const easings = Object.entries(m.easings)
    .map(([k, v]) => `| \`ease-${k}\` | \`${v}\` | ${easingUseHint(k)} |`)
    .join("\n");

  return `**Durations.**

| Token | Value | Use |
|---|---|---|
| \`motion-instant\` | 0ms | Toggle flips, checkbox state changes |
| \`motion-fast\` | ${m.durations.fast}ms | Hover, focus, button press overlay |
| \`motion-standard\` | ${m.durations.standard}ms | Sheet open/close, tab switches, card expand |
| \`motion-slow\` | ${m.durations.slow}ms | Emphasized transitions — success checkmarks |
| \`motion-page\` | ${m.durations.page}ms | Full-screen route transitions |

**Easings.**

| Token | Curve | Use |
|---|---|---|
${easings}

**Spring stance.** ${springLine}

**${m.rationale}**

**Reduce motion.** Under \`prefers-reduced-motion: reduce\`, all \`motion-*\` tokens collapse to \`motion-instant\`. Transitions become crossfades. The app stays fully functional; motion is never load-bearing for comprehension.`;
}

function easingUseHint(name: string): string {
  switch (name) {
    case "enter":
      return "Things appearing — sheets, toasts, screen pushes";
    case "exit":
      return "Dismissals, pops, toast auto-close";
    case "standard":
      return "Two-way transitions — expandable cards, tab content";
    case "spring":
      return "Reserved. Success confirmation / favorite toggle only.";
    default:
      return "";
  }
}
