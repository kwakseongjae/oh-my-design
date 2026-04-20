/**
 * Narrative templates, persona copy, voice Do/Don't tables, and state-copy
 * templates used by `generate.ts` to build a 15-section DESIGN.md from a
 * PlaygroundState. All user-facing strings carry implicit <!-- illustrative -->
 * status since the Playground has no live surface to verify against.
 */

import type { MoodPreset, PersonaArchetype, VoiceAdjective } from "./state";

/* ─────────── §11 Brand Narrative templates ─────────── */

export const MOOD_NARRATIVE: Record<MoodPreset, { paragraph: string; refusal: string; embrace: string }> = {
  warm: {
    paragraph:
      "The visual language leads with warmth as a credibility signal — soft neutrals, measured saturation, human-first pacing. Where other products talk over the user, this one sits beside them.",
    refusal:
      "cold-institutional aesthetics, blame-forward error copy, decorative-but-empty chrome",
    embrace:
      "warm neutrals as the canvas, primary color as a precise accent, and the kind of spacing that suggests the page isn't in a hurry",
  },
  sharp: {
    paragraph:
      "The register is engineering-first: crisp corners, disciplined weight, no ornamental motion. Every token either does work or gets cut. The aesthetic argues that clarity is the whole product.",
    refusal:
      "theatrical motion, rounded softness on utility surfaces, prose that hedges past its own confidence",
    embrace:
      "2-4px corners, two weights not three, and the kind of restraint that reads as competence rather than reluctance",
  },
  playful: {
    paragraph:
      "The product has permission to bounce. Pill-shaped controls, expressive motion on delight surfaces, and high-chroma primary that signals: this isn't trying to be enterprise software.",
    refusal:
      "conservative corporate chrome, neutral-gray CTAs, motion that apologizes for its own existence",
    embrace:
      "pill radii as the tactile signature, spring easing where it's earned, and copy that trusts the reader to share the joke",
  },
  luxurious: {
    paragraph:
      "The canvas skews dark-calm. Low-saturation palette, generous whitespace, motion that takes its time. The register is closer to a well-edited magazine than a product page.",
    refusal:
      "flash-sale exuberance, loud red sale badges, typography that competes with the content",
    embrace:
      "editorial pacing, near-black bodies, and the kind of motion that lets the user finish a thought before the next thing loads",
  },
  editorial: {
    paragraph:
      "Content-first throughout. Typography does the work; chrome stays flat. Section breaks are visible but never loud. The reader is assumed to be reading.",
    refusal:
      "feature-bullet product pages, engagement-bait micro-interactions, dark patterns posing as affordances",
    embrace:
      "one-column reading rhythm, considered line-height, and headlines heavy enough to pace the page",
  },
};

/* ─────────── §10 Voice Do/Don't per mood ─────────── */

export const MOOD_VOICE_RULES: Record<MoodPreset, { do: string[]; dont: string[] }> = {
  warm: {
    do: ["Use second-person (you/your) on onboarding", "Lead with outcome, not feature", "Match politeness register to locale"],
    dont: ["`Oops`", "`We're so sorry for the inconvenience`", "Exclamation marks on routine CTAs"],
  },
  sharp: {
    do: ["Verb + noun CTAs", "State the exact failure and the exact recovery", "Plain declaratives on hero"],
    dont: ["`Revolutionary`", "`Cutting-edge`", "`Just` as a softener", "Sentences starting with `Simply...`"],
  },
  playful: {
    do: ["One joke per surface, never two", "Stickers/emoji licensed on social surfaces only", "First-person plural for in-product voice"],
    dont: ["Humor on payment / refund / dispute surfaces", "Sarcasm on error copy", "Pop-culture references with a short half-life"],
  },
  luxurious: {
    do: ["Past-tense success toasts", "Specific over general", "Lower-case display type is allowed if deliberate"],
    dont: ["`Amazing deals`", "`Best-in-class`", "Exclamation marks anywhere on product surfaces"],
  },
  editorial: {
    do: ["Headlines that carry their own rhythm", "Formal on legal/policy; plain on product", "Byline-feel for long-form"],
    dont: ["`Unleash`", "`Discover`", "Pull-quotes larger than the article opener"],
  },
};

/* ─────────── §10 Voice sample templates per mood ─────────── */
/** Brand-name-aware samples. {{name}} gets replaced at generate-time. Each
 *  sample is marked illustrative in the output; these are tone exemplars,
 *  not verified live copy. */
export const MOOD_VOICE_SAMPLES: Record<MoodPreset, { context: string; text: string }[]> = {
  warm: [
    { context: "Empty state (no items)", text: "Nothing here yet. Take a minute — we'll wait." },
    { context: "Success (confirmation)", text: "Done. We sent you a copy at the email on file." },
    { context: "Error (blameless)", text: "That didn't go through. Try again in a moment, or reach out if it keeps happening." },
  ],
  sharp: [
    { context: "CTA (primary)", text: "Start →" },
    { context: "Error (specific)", text: "Your message is 12,000 tokens; the limit is 10,000. Trim or try a different model." },
    { context: "Success (past tense, one line)", text: "Deploy completed. 143 files changed." },
  ],
  playful: [
    { context: "Empty state", text: "Looks empty. That's on purpose, or we haven't loaded yet." },
    { context: "Success (inline flash)", text: "Saved. (Really.)" },
    { context: "Error (light touch)", text: "The server shrugged. Retry?" },
  ],
  luxurious: [
    { context: "Onboarding", text: "Welcome. Let's set up your workspace." },
    { context: "Success (past tense)", text: "Your plan was changed to Studio." },
    { context: "Error (quiet)", text: "We couldn't reach the server. Your work is saved locally." },
  ],
  editorial: [
    { context: "Hero", text: "Notes on making things that last." },
    { context: "Success (publishing)", text: "Published. It's live at your domain." },
    { context: "Error (policy)", text: "This content violates the community guidelines. Here's the specific clause: §4.2." },
  ],
};

/* ─────────── §13 Persona copy (canned archetypes) ─────────── */

export const PERSONA_COPY: Record<
  PersonaArchetype,
  { emoji: string; short: string; name: string; role: string; goal: string; productRole: string }
> = {
  "engineer-who-skims": {
    emoji: "⚡",
    short: "Skim & ship",
    name: "The Engineer Who Skims",
    role: "Staff engineer at a mid-size startup",
    goal: "Ship one specific thing and return to deep work without getting product-pitched",
    productRole: "The product has to load fast, let them scan, and never waste a click explaining why it's great",
  },
  "designer-who-hunts": {
    emoji: "🔍",
    short: "Hunt craft",
    name: "The Designer Who Hunts",
    role: "Senior product designer, freelance or agency",
    goal: "Find a reference that matches a specific craft problem — a particular radius, a particular motion feel",
    productRole: "The product surfaces craft details honestly (tokens, values, source) rather than marketing them",
  },
  "pm-who-approves": {
    emoji: "✅",
    short: "Review & roll out",
    name: "The PM Who Approves",
    role: "Product manager rolling out a new design system internally",
    goal: "Show the team something concrete that looks production-ready and passes a quick review",
    productRole: "Exports cleanly, respects existing conventions, and doesn't force a rewrite of something they already shipped",
  },
  "student-who-learns": {
    emoji: "📚",
    short: "Learn the why",
    name: "The Student Who Learns",
    role: "Early career, possibly their first design system project",
    goal: "Understand *why* a token is shaped the way it is — principle > pattern",
    productRole: "Each decision comes with a rationale sentence next to the value; no unexplained magic",
  },
  "exec-who-signs-off": {
    emoji: "🖊️",
    short: "Sign off fast",
    name: "The Exec Who Signs Off",
    role: "VP or director approving a brand direction",
    goal: "Confirm the direction matches the company's positioning without spending 40 minutes on it",
    productRole: "The top of every surface signals the brand before any detail. No buried lede",
  },
  "buyer-who-audits": {
    emoji: "🔐",
    short: "Audit & certify",
    name: "The Buyer Who Audits",
    role: "Enterprise procurement or compliance evaluator",
    goal: "Verify the system meets accessibility + safety bars before org-wide rollout",
    productRole: "Contrast ratios surfaced inline, motion respects `prefers-reduced-motion`, no dark patterns",
  },
  "creator-who-ships": {
    emoji: "🚀",
    short: "Ship solo",
    name: "The Creator Who Ships",
    role: "Solo founder or indie builder, shipping weekly",
    goal: "Get a believable-looking product out the door without a dedicated designer",
    productRole: "Picks a mood, tweaks a color, exports — total time under 10 minutes to a usable DESIGN.md",
  },
  "explorer-who-browses": {
    emoji: "🧭",
    short: "Browse & learn",
    name: "The Explorer Who Browses",
    role: "Anyone who clicked through without a task in mind",
    goal: "Learn what a design system is and leave with a mental model, not a purchase decision",
    productRole: "The Browse surface invites wandering; nothing demands commitment",
  },
};

/* ─────────── §14 State table templates ─────────── */

export interface StateRow {
  label: string;
  treatment: string;
}

/** State-copy templates that interpolate {{name}} and reflect mood/density/motion
 *  choices. Consumed by `rules/philosophy.ts` which further refines based on
 *  the full primitive set. */
export const STATE_BASE_ROWS: StateRow[] = [
  {
    label: "**Empty (first use)**",
    treatment:
      "White canvas. One line of body copy in the mood's register explaining what {{name}} does, plus one primary CTA. No illustration. <!-- illustrative -->",
  },
  {
    label: "**Empty (search, no results)**",
    treatment:
      "Single line of muted body text: *No results for '<query>'.* Suggested categories follow immediately. Never a \"sorry\" apology. <!-- illustrative -->",
  },
  {
    label: "**Loading (first paint)**",
    treatment:
      "Skeleton blocks at the final layout's structure. Density-scaled radii. Shimmer per the motion preset. Never shown over price/amount fields — those render placeholders.",
  },
  {
    label: "**Loading (action committed)**",
    treatment:
      "Pressed button text is replaced by a 3-dot animation. Button width does not change. User cannot double-submit.",
  },
  {
    label: "**Error (inline field)**",
    treatment:
      "Red border on the input, one actionable sentence directly below. Example: *\"Email looks off. Check the domain.\"* Never *\"An error occurred.\"* <!-- illustrative -->",
  },
  {
    label: "**Error (toast)**",
    treatment:
      "Dark-bg / white-text toast at the bottom edge. 3-second auto-dismiss. Single sentence. No icon.",
  },
  {
    label: "**Error (blocking)**",
    treatment:
      "Reserved for server outages or auth failures. Full-screen centered message, retry button in primary color. No illustration.",
  },
  {
    label: "**Success (inline flash)**",
    treatment:
      "Brief tint of primary-50 behind the updated element, 300ms fade to default. For routine actions — a save, a toggle, a favorite.",
  },
  {
    label: "**Success (emphasized)**",
    treatment:
      "Dedicated confirmation surface — not a toast. Checkmark + amount or subject, single primary CTA. Money-moves and account-level actions belong here.",
  },
  {
    label: "**Skeleton**",
    treatment:
      "Muted blocks at exact final dimensions. Shimmer timing matches `motion-standard`. Typography skeleton lines match the actual line-heights, not fixed heights.",
  },
  {
    label: "**Disabled**",
    treatment:
      "Opacity reduced on text and surface together. Geometry preserved — the radius does not change when a button disables. Re-enable is frame-stable.",
  },
];

/* ─────────── Randomize weights (corpus-informed) ─────────── */

/** Weighted random. Picks that match the OmD corpus median are slightly more
 *  likely than edge-case picks. Used by the Randomize button. */
export const RANDOMIZE_WEIGHTS = {
  mood: { sharp: 0.3, warm: 0.2, editorial: 0.2, luxurious: 0.15, playful: 0.15 },
  density: { comfortable: 0.55, compact: 0.25, airy: 0.2 },
  radius: { soft: 0.5, sharp: 0.35, pill: 0.15 },
  weight: { regular: 0.5, heavy: 0.35, light: 0.15 },
  motion: { standard: 0.55, subtle: 0.3, expressive: 0.15 },
} as const;

/** Neutral hex pool for Randomize color seed — avoids the bright-yellow /
 *  pure-red extremes that usually need accompanying content choices. */
export const RANDOMIZE_PRIMARY_POOL: string[] = [
  "#2563eb", "#6366f1", "#7c3aed", "#8b5cf6",
  "#ec4899", "#f43f5e", "#f97316", "#22c55e",
  "#06b6d4", "#0ea5e9", "#18181b", "#3b3b3b",
];

/** Canonical voice-adjective sets per mood. Kept here (not in state.ts) so
 *  the language lives next to the other narrative copy. */
export const MOOD_VOICE_DEFAULTS: Record<MoodPreset, VoiceAdjective[]> = {
  warm: ["Warm", "Friendly", "Grounded"],
  sharp: ["Precise", "Direct", "Considered"],
  playful: ["Irreverent", "Bright", "Candid"],
  luxurious: ["Quiet", "Considered", "Precise"],
  editorial: ["Deliberate", "Confident", "Quiet"],
};
