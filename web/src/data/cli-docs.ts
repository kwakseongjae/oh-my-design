import type { DocsLocale, DocsNavGroup, DocsPage } from "@/lib/docs/locales";
import { PUBLIC_SKILL_COUNT, REFERENCE_COUNT, SKILL_COUNT, SUBAGENT_COUNT } from "@/lib/catalog-count";
import { REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { SHADCN_RECIPE, type ShadcnRecipeCopy } from "./docs-shadcn-recipe";

export const CLI_INSTALL_COMMAND = "npx oh-my-design-cli@latest";
export const CLI_DOCTOR_COMMAND = "npx oh-my-design-cli@latest doctor";

/**
 * Counts the copy states. They come from the generated catalog data (the same
 * source the landing reads), so no locale can drift from the shipped bundle.
 * The one literal left in prose is the Cursor Agent Skills count, which is
 * written in a phrasing scripts/check-counts.mjs verifies against SKILL.md.
 * `skills` is the full bundle the installer writes; `public` is the part
 * `npx skills add` lists (owner decision 2026-10-15), and the skills page
 * shows only those.
 */
const N = {
  refs: REFERENCE_COUNT,
  skills: SKILL_COUNT,
  public: PUBLIC_SKILL_COUNT,
  agents: SUBAGENT_COUNT,
  verified: REFERENCE_QUALITY_COUNTS.verified_v2,
  partial: REFERENCE_QUALITY_COUNTS.partial,
  legacy: REFERENCE_QUALITY_COUNTS.legacy_snapshot,
} as const;

type Outcome = {
  title: string;
  description: string;
  prompt: string;
  result: string;
};

/** A quick-start step. `command` is typed into a terminal; `prompt` is said to the coding agent. */
type Step = {
  title: string;
  body: string;
  command?: string;
  prompt?: string;
};

type Workflow = {
  title: string;
  when: string;
  prompt: string;
  outputs: string[];
  skills: string[];
};

type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

/** A skill's own page on this site (a launch page), linked after its description. */
type SkillPage = {
  href: string;
  label: string;
};

type DemoFormat = {
  duration: string;
  title: string;
  when: string;
  goal: string;
  proof: string;
};

type DemoStep = {
  title: string;
  body: string;
  command?: string;
};

type DemoGuardrail = {
  title: string;
  body: string;
};

type AntiSlopPrinciple = {
  title: string;
  body: string;
};

type AntiSlopExample = {
  id: "writing" | "locale" | "interface";
  tab: string;
  beforeTitle: string;
  beforeBody: string;
  afterTitle: string;
  afterBody: string;
  beforeSignals: string[];
  afterSignals: string[];
  ruleIds: string[];
  reason: string;
};

type AntiSlopClassification = {
  label: string;
  title: string;
  body: string;
};

type AntiSlopSource = {
  label: string;
  href: string;
  note: string;
};

type AntiSlopLens = {
  id: "hierarchy" | "containers" | "typography" | "color" | "evidence" | "density" | "states" | "responsive" | "motion" | "interaction";
  title: string;
  question: string;
  slop: string;
  preference: string;
  validWhen: string;
  ruleIds: string[];
};

type AntiSlopDirection = {
  id: "editorial" | "product" | "service";
  title: string;
  body: string;
  proof: string;
};

/** One of the two halves of oh-my-design on the overview: the archive, or the CLI. */
type DocsPart = {
  name: string;
  body: string;
  action: string;
};

type DocsLink = {
  label: string;
  href: string;
  description: string;
};

export interface CliDocsDictionary {
  localeName: string;
  metaDescription: string;
  ui: {
    docs: string;
    menu: string;
    language: string;
    copy: string;
    copied: string;
    copyFailed: string;
    copyPage: string;
    pageCopied: string;
    pageTools: string;
    onThisPage: string;
    previous: string;
    next: string;
    pagination: string;
    prompt: string;
    terminal: string;
    result: string;
    verified: string;
    skillsLabel: string;
  };
  nav: Record<DocsPage, string>;
  navGroups: Record<DocsNavGroup, string>;
  overview: {
    title: string;
    lead: string;
    partsTitle: string;
    archive: DocsPart;
    cli: DocsPart;
    installTitle: string;
    installBody: string;
    afterInstall: string;
    outcomesTitle: string;
    outcomesLead: string;
    outcomes: Outcome[];
    qualityTitle: string;
    qualityBody: string;
    nextTitle: string;
    next: Array<{ page: DocsPage; body: string }>;
  };
  gettingStarted: {
    title: string;
    lead: string;
    prerequisitesTitle: string;
    prerequisites: string[];
    stepsTitle: string;
    steps: Step[];
    channelsTitle: string;
    channelsLead: string;
    channels: Array<{ name: string; body: string; command: string }>;
    rawTitle: string;
    rawBody: string;
    rawLinks: DocsLink[];
    doneTitle: string;
    doneBody: string;
  };
  demo: {
    title: string;
    lead: string;
    formatsTitle: string;
    formatsLead: string;
    formats: DemoFormat[];
    runbookTitle: string;
    runbookLead: string;
    steps: DemoStep[];
    starterPromptTitle: string;
    starterPrompt: string;
    proofTitle: string;
    proofLead: string;
    proof: string[];
    guardrailsTitle: string;
    guardrails: DemoGuardrail[];
  };
  workflows: {
    title: string;
    lead: string;
    workflows: Workflow[];
  };
  skills: {
    title: string;
    lead: string;
    groups: SkillGroup[];
    /** One line per skill id, what it does for the user. Every shipped skill has one. */
    descriptions: Record<string, string>;
    /**
     * Skills with their own page, keyed like `descriptions`. /hangul's launch page is
     * `/ko/hangul` in Korean and `/hangul` (English) everywhere else, a fixed contract with
     * the page that ships under web/src/app (cli-docs.test.ts pins it).
     */
    pages: Record<string, SkillPage>;
    routingTitle: string;
    routingBody: string;
  };
  antiSlop: {
    title: string;
    lead: string;
    definitionTitle: string;
    definitionBody: string;
    definitionNote: string;
    principlesTitle: string;
    principles: AntiSlopPrinciple[];
    atlasTitle: string;
    atlasLead: string;
    slopSignalLabel: string;
    designerPreferenceLabel: string;
    validWhenLabel: string;
    lenses: AntiSlopLens[];
    directionsTitle: string;
    directionsLead: string;
    directions: AntiSlopDirection[];
    compareTitle: string;
    compareLead: string;
    beforeLabel: string;
    afterLabel: string;
    detectedLabel: string;
    specimen: {
      nextGen: string;
      verified: string;
      reference: string;
      output: string;
      nextStep: string;
    };
    specimenUi: {
      dashboard: string;
      release: string;
      settings: string;
      introducing: string;
      typographyTitle: string;
      typographyBody: string;
      newLabel: string;
      docsLabel: string;
      checkout: string;
      verify: string;
      artifact: string;
      time: string;
      route: string;
      status: string;
      desktop: string;
      notifications: string;
      all: string;
      open: string;
    };
    examples: AntiSlopExample[];
    classifierTitle: string;
    classifierLead: string;
    classifications: AntiSlopClassification[];
    workflowTitle: string;
    workflowLead: string;
    workflow: Array<{ title: string; body: string }>;
    sourcesTitle: string;
    sourcesLead: string;
    sources: AntiSlopSource[];
  };
  /** /docs/<locale>/shadcn — the copy lives in ./docs-shadcn-recipe.ts. */
  shadcn: ShadcnRecipeCopy;
}

/** A locale as written below, before its shadcn recipe copy and nav label are merged in. */
type BaseDictionary = Omit<CliDocsDictionary, "nav" | "shadcn"> & {
  nav: Record<Exclude<DocsPage, "shadcn">, string>;
};

/**
 * Public skill ids by group, shared by every locale (only titles and descriptions are
 * translated). Public skills only (owner decision 2026-10-15): the installer still
 * writes the full bundle, and skills marked `metadata.internal: true` keep working,
 * but they are not listed here, in the READMEs, in llms.txt or by `npx skills add`.
 */
export const SKILL_GROUP_IDS = {
  system: ["omd:init", "omd:apply"],
  build: ["omd:autopilot", "omd:landing", "omd:shader-hero", "omd:cjk-type-shader"],
  quality: ["omd:feel", "hangul", "omd:restraint", "omd:slop-audit"],
  content: ["omd:humanize"],
} as const;

const SKILL_GROUP_ORDER = ["system", "build", "quality", "content"] as const;

/** Builds the skill groups from translated titles and descriptions, in the shared order. */
function skillGroups(text: Record<(typeof SKILL_GROUP_ORDER)[number], { title: string; description: string }>): SkillGroup[] {
  return SKILL_GROUP_ORDER.map((id) => ({ ...text[id], skills: [...SKILL_GROUP_IDS[id]] }));
}

/** The raw-file links on the getting-started page; each locale reads its own llms index. */
function rawLinks(llms: { href: string; description: string }, rawDescription: string, fullDescription: string): DocsLink[] {
  return [
    { label: "/<id>/design.md", href: "/toss/design.md", description: rawDescription },
    { label: llms.href.slice(1), href: llms.href, description: llms.description },
    { label: "llms-full.txt", href: "/llms-full.txt", description: fullDescription },
  ];
}

const en: BaseDictionary = {
  localeName: "English",
  metaDescription: "How to use oh-my-design: take a DESIGN.md from the archive of real companies, install oh-my-design-cli, and have your coding agent build your UI with it.",
  ui: {
    docs: "Docs",
    menu: "Menu",
    language: "Language",
    copy: "Copy",
    copied: "Copied",
    copyFailed: "Copy failed",
    copyPage: "Copy page",
    pageCopied: "Page copied",
    pageTools: "Page tools",
    onThisPage: "On this page",
    previous: "Previous",
    next: "Next",
    pagination: "Documentation pagination",
    prompt: "Prompt",
    terminal: "Terminal",
    result: "Result",
    verified: "Verification",
    skillsLabel: "Skills",
  },
  nav: {
    overview: "Overview",
    "getting-started": "Getting started",
    workflows: "Workflows",
    demo: "Live demo",
    skills: "Skills",
    "anti-slop": "AI slop",
  },
  navGroups: {
    start: "Get started",
    guides: "Guides",
    reference: "Reference",
  },
  overview: {
    title: "The DESIGN.md archive and oh-my-design-cli",
    lead: `oh-my-design has two parts. The archive holds ${N.refs} DESIGN.md files written from real companies' products. oh-my-design-cli installs skills that make your coding agent read a DESIGN.md before it touches your UI.`,
    partsTitle: "The archive and the CLI",
    archive: {
      name: "The archive",
      body: "Each DESIGN.md describes one company's colors, type, spacing, components and voice; verified files also note where each value was read. Open one, then copy it, download it, or fetch the raw file from `oh-my-design.kr/<id>/design.md`. You don't need the CLI for any of this.",
      action: "Open the archive",
    },
    cli: {
      name: "oh-my-design-cli",
      body: `One command adds the ${N.skills}-skill bundle (${N.public} public skills and the internal ones they call), ${N.agents} specialist agents and an offline copy of the archive to Claude Code, Codex, OpenCode or Cursor, as far as each tool supports them. The skills set up your project's DESIGN.md and follow it on every UI change.`,
      action: "Install the CLI",
    },
    installTitle: "Install",
    installBody: "Run this at your project root. It finds the coding agents you use and asks which ones to set up.",
    afterInstall: "Then restart the agent, run doctor once, and describe the screen you want. No daemon, API key or MCP server is involved.",
    outcomesTitle: "What to ask for",
    outcomesLead: "You don't need skill names. Say what to build and what must not change; the installed skills pick the workflow.",
    outcomes: [
      {
        title: "Create a design system",
        description: "Turn a product brief and one verified_v2 reference into a DESIGN.md your project owns. Facts nobody verified stay out.",
        prompt: "Set up a calm, trustworthy design system for our family finance app. Use Toss as a reference, but keep our existing logo and copy.",
        result: "DESIGN.md, agent instruction files, the tokens that differ from the reference, and a first screen you approved.",
      },
      {
        title: "Build a complete screen",
        description: "Research, IA, wireframes, components, copy, accessibility and validation run as one workflow that stops for your approval.",
        prompt: "Design and implement the onboarding for this app. Keep the current stack and use our DESIGN.md as the source of truth.",
        result: "A working screen with its states, validation notes, and handoff files in the repository.",
      },
      {
        title: "Improve an existing UI",
        description: "Audit what is already there, keep the product's behavior, and fix hierarchy, rhythm, accessibility and generic AI patterns.",
        prompt: "Improve the pricing page without changing its URLs or field names. Explain the high-impact fixes and verify the result.",
        result: "Focused code changes, the reasoning behind them, and the checks that ran.",
      },
    ],
    qualityTitle: "How far to trust a file",
    qualityBody: `Every DESIGN.md carries a quality tier. ${N.verified} verified_v2 files were checked against the live product and give a source for each value, so use these for anything public. ${N.partial} partial files are verified in places, and ${N.legacy} legacy snapshots predate the current format. A value nobody could verify is left out rather than filled with a plausible default.`,
    nextTitle: "Next steps",
    next: [
      { page: "getting-started", body: "Install, check the install, and make one visible change." },
      { page: "workflows", body: "Ready-made prompts for common jobs." },
      { page: "skills", body: "The public skills, and what each one does." },
    ],
  },
  gettingStarted: {
    title: "Getting started",
    lead: "Install the CLI, check it, then ask for one change you can see. It takes about five minutes.",
    prerequisitesTitle: "Before you begin",
    prerequisites: ["Node.js 18 or later", "A project repository", "Claude Code, Codex, OpenCode or Cursor"],
    stepsTitle: "Quick start",
    steps: [
      { title: "Install the CLI", body: "Run this at the project root. Interactive mode finds the coding agents you already use and installs the full bundle into the ones you pick.", command: CLI_INSTALL_COMMAND },
      { title: "Restart your agent and run doctor", body: "Restart so the agent loads the new skills. doctor checks the files that were actually installed and names anything missing: the catalog, the agents or DESIGN.md.", command: CLI_DOCTOR_COMMAND },
      { title: "Set up DESIGN.md", body: "Pick a company close to your product in the archive, or ask the agent to recommend one. It shows you the DESIGN.md before writing it to the project root.", prompt: "Set up DESIGN.md for this project from the Toss reference. Keep our logo and copy." },
      { title: "Ask for one visible change", body: "Start with one real screen. The agent reads DESIGN.md and the code before it asks you anything.", prompt: "Improve the home screen using our DESIGN.md. Keep its behavior and verify the result." },
    ],
    channelsTitle: "Install for one tool",
    channelsLead: "Skip the questions and install into a single tool. These commands also work in scripts and CI.",
    channels: [
      { name: "Claude Code", body: "Installs skills, sub-agents and the catalog, and merges the project hooks into your existing settings.", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "Codex", body: "Installs skills, agent roles with their instructions built in, helpers, and the local reference catalog.", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "OpenCode", body: "Installs skills, native sub-agents and the offline catalog. A project install lives in `.opencode`; `--global` uses `~/.config/opencode`, and `doctor --global` checks it.", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "Installs 31 native Agent Skills, a small DESIGN.md bootstrap rule and the shared catalog. Use `--cursor-rule-only` only for older clients.", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ],
    rawTitle: "Use a DESIGN.md without the CLI",
    rawBody: "Every file in the archive is plain Markdown. Copy or download it from its page, or fetch it by URL. Agents can read these without a browser.",
    rawLinks: rawLinks(
      { href: "/llms.txt", description: "An index of these docs and the archive, for agents." },
      "One company's DESIGN.md as raw Markdown. The link opens Toss.",
      "The README, the main skills and the archive index in one file.",
    ),
    doneTitle: "You're done when the screen changed",
    doneBody: "A good first run leaves a visible improvement, a DESIGN.md in the project, and an obvious next prompt. A clean install on its own isn't the goal.",
  },
  demo: {
    title: "Make the audience see one real product change.",
    lead: "A strong oh-my-design demo is not a tour of skill names. It starts with a visible problem, protects behavior the product already relies on, and ends on the actual route with evidence anyone can inspect.",
    formatsTitle: "Choose the smallest format that can prove the outcome",
    formatsLead: "The clock limits scope, never honesty. Pick one format before the demo and say what will remain unchanged.",
    formats: [
      {
        duration: "5 min",
        title: "Rescue one visible flaw",
        when: "An existing page works but feels generic or unclear",
        goal: "Fix one high-impact hierarchy, spacing, state, or accessibility problem while preserving behavior.",
        proof: "Before view, focused diff, and the same working route after the change.",
      },
      {
        duration: "15 min",
        title: "Ship one complete surface",
        when: "The product already has a stack, components, and a scoped flow",
        goal: "Build one small surface with its loading, empty, error, and success states from project-owned design context.",
        proof: "A working route, state coverage, changed files, and the checks that actually ran.",
      },
      {
        duration: "30 min",
        title: "Run the checkpointed harness",
        when: "The surface is new, ambiguous, or needs research and system decisions",
        goal: "Move from discovery through journey, DESIGN.md proposal, implementation, and validation without skipping approval gates.",
        proof: "Journey, DESIGN.md patch, working UI, validation summary, and all three user checkpoints.",
      },
    ],
    runbookTitle: "A repeatable six-step runbook",
    runbookLead: "Use this sequence in a meetup, workshop, or screen recording. The CLI prepares the environment; the coding agent performs the UI work in the repository.",
    steps: [
      {
        title: "Name one visible problem and one protected behavior",
        body: "Open the real route. Point to the exact thing the audience should notice, then state what must not change: URL, data flow, field names, copy, or interaction behavior.",
      },
      {
        title: "Install the bundle and let doctor inspect it",
        body: "Run both commands in the project root. Restart the coding agent after install. Do not present a successful install as the outcome.",
        command: `${CLI_INSTALL_COMMAND}\n${CLI_DOCTOR_COMMAND}`,
      },
      {
        title: "Reconcile DESIGN.md with verified_v2 evidence",
        body: "For a public demo, choose a verified_v2 reference. Ask the agent to read it with the existing DESIGN.md, promote only evidence that belongs to this product surface, and leave unknown font, token, and component claims absent.",
      },
      {
        title: "Implement the real surface and its critical states",
        body: "Work in the existing stack and components. For a new flow, include the states a user can actually encounter rather than polishing a static happy-path mockup.",
      },
      {
        title: "Audit the actual route",
        body: "Open the product route, exercise the protected behavior, and run the relevant accessibility and interface-feel checks. Report only checks and measurements that really ran.",
      },
      {
        title: "Record the audience's correction",
        body: "If a user corrects a visual choice, fix that scoped decision and store it with omd:remember so the next session does not repeat the mistake.",
      },
    ],
    starterPromptTitle: "One prompt for a live rescue",
    starterPrompt: "Read DESIGN.md and inspect the current product route first. Improve one visible hierarchy or state problem on this page while preserving its URL, data flow, field names, and existing user behavior. For a public demo, use a verified_v2 reference and reconcile only evidence for this product surface; omit unknown values instead of using fallbacks. Implement the change in the real surface, cover the critical states, then verify that route and report the changed files and checks that actually ran. Ask before extending DESIGN.md or crossing a required harness checkpoint.",
    proofTitle: "What the audience should be able to inspect",
    proofLead: "Capture the evidence as you go. A polished screenshot without this trail is not an auditable demo.",
    proof: [
      "The original screen and the one visible problem you named",
      "The exact prompt, including the protected behavior",
      "The DESIGN.md delta and any unknown fields deliberately omitted",
      "The working product route with critical states, not a detached mockup",
      "Changed files and the exact checks or measurements that ran",
      "The user correction recorded as a durable, scoped preference",
    ],
    guardrailsTitle: "Keep the wow moment honest",
    guardrails: [
      { title: "CLI installs and diagnoses", body: "The coding agent reads the installed context and changes the UI. Do not claim the installer generated the interface by itself." },
      { title: "Unknown still means absent", body: "Never fill missing brand facts with a system font, generic component, heuristic token, or adjacent marketing surface." },
      { title: "Proof beats performance theater", body: "Do not claim speed, conversion, accessibility, or performance gains without a real before-and-after measurement." },
      { title: "Checkpoints stay mandatory", body: "The 30-minute harness still stops for journey, DESIGN.md patch, and validation approval. A live audience is not permission to skip them." },
    ],
  },
  workflows: {
    title: "Copy a goal, not a magic command.",
    lead: "These recipes are natural-language contracts. Keep the user goal and constraints; change the domain and surface to match your product.",
    workflows: [
      { title: "Bootstrap brand context", when: "New project or no DESIGN.md", prompt: "Set up the design system for a Korean meal-planning app for busy parents. Recommend a verified_v2 reference, explain the delta, and ask before writing DESIGN.md.", outputs: ["Reference recommendation", "DESIGN.md proposal", "Agent shims"], skills: ["omd:init", "omd:sync"] },
      { title: "Ship a new surface", when: "A complete page or flow", prompt: "Build the payment-complete flow with success, failure, and partial-success states. Use DESIGN.md, reuse existing components, and validate accessibility.", outputs: ["Journey", "Working UI", "All critical states", "Validation summary"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
      { title: "Improve an existing page", when: "The UI works but feels generic", prompt: "Audit this dashboard for context-free UI patterns, hierarchy, density, motion, and accessibility. Preserve behavior. Apply the highest-impact fixes and show what changed.", outputs: ["Prioritized audit", "Focused patch", "Before/after reasoning"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
      { title: "Capture a correction", when: "You teach the agent your taste", prompt: "We never use uppercase CTAs. Record that preference for this project and update the current buttons without changing their actions.", outputs: ["Pending preference", "Scoped UI correction", "Fold-in proposal"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
    ],
  },
  skills: {
    title: "Skills",
    lead: `These are the ${N.public} public skills. oh-my-design-cli installs them as a ${N.skills}-skill bundle, together with the internal skills they call, and ${N.agents} specialist agents. You rarely need their names: describe the result and the agent picks the skill. Name one when you want exact control.`,
    groups: skillGroups({
      system: { title: "Set up and keep DESIGN.md", description: "Create the project's DESIGN.md and apply it to every UI change." },
      build: { title: "Build screens", description: "Go from a brief to a working interface, with real assets and a handoff." },
      quality: { title: "Check quality", description: "Review feel, Korean typography, restraint and generated-UI patterns." },
      content: { title: "Write copy", description: "Make product copy read naturally in five languages without changing facts or commands." },
    }),
    descriptions: {
      "omd:init": "Sets up DESIGN.md from the closest real-company reference.",
      "omd:apply": "Applies your DESIGN.md to every UI change your agent makes.",
      "omd:autopilot": "Designs and builds a new screen from one prompt, then verifies it.",
      "omd:landing": "Builds a scroll-driven one-page landing from DESIGN.md.",
      "omd:shader-hero": "Builds a full-bleed launch hero in two colors from DESIGN.md and measures its text contrast.",
      "omd:cjk-type-shader": "Renders a large Korean, Japanese or Chinese headline as ink on hanji.",
      "omd:feel": "Applies or audits 113 measured interface-feel rules.",
      "hangul": "Fixes Korean typography and UI copy: line breaks, letter-spacing and font stacks, plus spelling, error messages, button labels and honorifics. Rules from W3C, Korean orthography, Korean design systems and 67 measured Korean services, with checkers for both.",
      "omd:restraint": "Measures focus, type sizes and whitespace, and removes what a page doesn't need.",
      "omd:slop-audit": "Finds generated-UI patterns that have no product reason, with rule IDs and line references.",
      "omd:humanize": "Edits copy in five languages so it reads naturally, keeping facts and commands intact.",
    },
    pages: { hangul: { href: "/hangul", label: "About /hangul" } },
    routingTitle: "Naming a skill is optional",
    routingBody: "“Improve this checkout and verify it” works better than chaining four skills by hand. Use a name when you want one particular skill.",
  },
  antiSlop: {
    title: "Slop is what remains when product decisions disappear.",
    lead: "We do not guess who made a screen. We look for clusters of familiar defaults that replace choices tied to the audience, content, task, and evidence.",
    definitionTitle: "A pattern is not a verdict",
    definitionBody: "A rounded card, purple accent, centered hero, or short slogan can all be valid. A surface becomes slop when several defaults repeat without a product reason and begin to flatten hierarchy, trust, or brand character.",
    definitionNote: "Authorship is unknown. The observable problem is decision debt: the screen cannot explain why this structure, wording, or visual treatment belongs to this product.",
    principlesTitle: "The rules behind every finding",
    principles: [
      { title: "Read the product first", body: "Audience, task, existing behavior, and DESIGN.md outrank a generic anti-pattern list." },
      { title: "Find clusters, not tells", body: "One pattern is rarely enough. Repetition, neighboring patterns, and visible impact determine the finding." },
      { title: "Keep quality separate", body: "Contrast, focus, overflow, and broken states are quality failures. They are not aesthetic evidence of AI." },
      { title: "Make the smallest honest fix", body: "Preserve behavior and content. Break the strongest cluster before proposing a new visual direction." },
    ],
    atlasTitle: "Ten lenses for reviewing generated UI",
    atlasLead: "Treat these as design review questions, not a blacklist. Each lens shows the repeated default, the preference designers tend to protect, and the condition that can make the pattern valid.",
    slopSignalLabel: "Converging default",
    designerPreferenceLabel: "Designer preference",
    validWhenLabel: "Still valid when",
    lenses: [
      { id: "hierarchy", title: "Composition follows priority", question: "Can a person tell what matters before reading every label?", slop: "Every section receives the same heading, card count, alignment, and visual weight.", preference: "Let the primary task occupy the strongest position; make supporting information visibly quieter.", validWhen: "repetition represents a real sequence, comparison, or repeated entity type.", ruleIds: ["LAYOUT-01", "LAYOUT-05", "TYPE-01"] },
      { id: "containers", title: "Containers express boundaries", question: "Does each box correspond to an object, action, selection, or layer?", slop: "Cards wrap sections, then panels, then more cards because a container is the default unit.", preference: "Use whitespace, alignment, type, and dividers first. Add a container only when its boundary carries meaning.", validWhen: "the surface is movable, selectable, dismissible, or independently reusable.", ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-03"] },
      { id: "typography", title: "Type reveals the reading mode", question: "Is this a page to scan, read, compare, or operate?", slop: "One fashionable face, similar sizes, repeated eyebrows, and display treatment everywhere flatten the page.", preference: "Tune measure, weight, leading, and contrast to the task; keep type roles stable inside each region.", validWhen: "a single family still provides a deliberate hierarchy and suits the product voice.", ruleIds: ["TYPE-01", "TYPE-02", "TYPE-03"] },
      { id: "color", title: "Color and depth have jobs", question: "Can every accent, surface, shadow, and radius explain its role?", slop: "Gradient text, soft glow, glass, large radii, and diffuse shadows all signal importance at once.", preference: "Map color to brand, action, status, or selection; use one edge or elevation model per layer.", validWhen: "the material or palette belongs to the brand and preserves contrast and state clarity.", ruleIds: ["COLOR-01", "VISUAL-04", "VISUAL-05"] },
      { id: "evidence", title: "Artifacts beat decoration", question: "What on the screen proves the product claim?", slop: "Generic icon tiles, fake metrics, blur orbs, and placeholder dashboards stand in for product substance.", preference: "Show a real workflow, asset, data shape, state transition, or cited constraint whenever possible.", validWhen: "illustration carries brand narrative or explains something the product cannot show directly.", ruleIds: ["EVIDENCE-01", "VISUAL-02", "VISUAL-06"] },
      { id: "density", title: "Density follows the task", question: "Are related items close and different groups separated?", slop: "The same generous padding is applied to settings, tables, marketing copy, and mobile controls.", preference: "Use tight local groups and clear sectional breaks; optimize operational screens for comparison, not showroom whitespace.", validWhen: "generous space reduces cognitive load in a focused service flow or editorial moment.", ruleIds: ["LAYOUT-05", "DENSITY-01", "DENSITY-02"] },
      { id: "states", title: "The product includes imperfect states", question: "What happens before, after, and when the happy path fails?", slop: "Only a polished success state exists; empty, loading, error, permission, and long-content states are absent.", preference: "Design state changes as part of the information architecture and give each state a useful next action.", validWhen: "the artifact is explicitly a static visual study and does not claim production readiness.", ruleIds: ["STATE-01", "STATE-02", "COPY-04"] },
      { id: "responsive", title: "Responsive means reprioritized", question: "What should move, stack, collapse, or disappear as space changes?", slop: "Desktop columns merely shrink until copy clips, controls wrap randomly, and locale text breaks the frame.", preference: "Preserve reading order and task priority; change composition when the original relationship no longer fits.", validWhen: "horizontal overflow is a deliberate, labelled data or media browsing pattern.", ruleIds: ["LAYOUT-06", "RESPONSIVE-01", "LOCALE-02"] },
      { id: "motion", title: "Motion explains a change", question: "Does movement clarify feedback, origin, continuity, or spatial relationship?", slop: "Every item fades, floats, bounces, or staggers to make a static layout feel premium.", preference: "Choose one orchestrated moment and keep feedback fast, interruptible, and respectful of reduced motion.", validWhen: "ambient motion is part of the product experience and does not compete with reading or control.", ruleIds: ["MOTION-01", "MOTION-02", "MOTION-03"] },
      { id: "interaction", title: "Controls keep a coherent contract", question: "Does every control look, sound, and behave like the action it performs?", slop: "Pills, badges, buttons, tabs, and modals multiply as visual variants without distinct behavior.", preference: "Name actions specifically, keep state in the URL when useful, and reserve modal depth for short contained tasks.", validWhen: "a variant communicates a tested state, permission, risk level, or repeated expert workflow.", ruleIds: ["COMP-01", "COMP-02", "COMP-03"] },
    ],
    directionsTitle: "Anti-slop is not a synonym for minimalism",
    directionsLead: "Designers do not secretly prefer one visual style. They prefer a direction that is internally coherent, appropriate to the task, and executed beyond the template level.",
    directions: [
      { id: "editorial", title: "Expressive editorial", body: "Large type, unusual composition, imagery, and deliberate pacing can be right when the goal is discovery or storytelling.", proof: "Its signature comes from the subject, not from the current fashionable landing-page kit." },
      { id: "product", title: "Dense product tool", body: "Tables, compact controls, persistent navigation, and restrained type can be right when people compare and operate repeatedly.", proof: "Density is grouped, scan paths are stable, and states remain legible under real data." },
      { id: "service", title: "Focused service flow", body: "A quiet single column, familiar controls, and plain language can be right when trust and completion matter most.", proof: "Simplicity removes uncertainty rather than hiding missing product decisions." },
    ],
    compareTitle: "Same intent, more product judgment",
    compareLead: "Switch between writing, localization, and interface structure. Each after state preserves the original task while replacing generic scaffolding with a specific decision.",
    beforeLabel: "Default pattern",
    afterLabel: "OmD direction",
    detectedLabel: "Why it changed",
    specimen: { nextGen: "NEXT-GEN", verified: "verified", reference: "01 — reference", output: "OUTPUT", nextStep: "One clear next step" },
    specimenUi: {
      dashboard: "Dashboard", release: "Release", settings: "Settings", introducing: "Introducing",
      typographyTitle: "DESIGN.md for every team", typographyBody: "Build thoughtful interfaces with one powerful design workflow.",
      newLabel: "New", docsLabel: "Docs", checkout: "Checkout", verify: "Verify", artifact: "Artifact",
      time: "Time", route: "Route", status: "Status", desktop: "Desktop", notifications: "Notifications", all: "All", open: "Open",
    },
    examples: [
      {
        id: "writing",
        tab: "Writing",
        beforeTitle: "Transform your workflow with a powerful, seamless experience.",
        beforeBody: "Unlock next-generation design and elevate every project with one intelligent solution.",
        afterTitle: "Pick a reference. Save its verified rules to DESIGN.md.",
        afterBody: "Unknown fonts and components stay out, so your agent only receives claims the catalog can support.",
        beforeSignals: ["abstract praise", "no user action", "formulaic cadence"],
        afterSignals: ["named action", "observable output", "evidence boundary"],
        ruleIds: ["COPY-01", "COPY-03", "EVIDENCE-01"],
        reason: "The revision uses functions and constraints already present in the product instead of adding a bigger promise.",
      },
      {
        id: "locale",
        tab: "Localization",
        beforeTitle: "A translated sentence can preserve every English turn of phrase and still lose the reader.",
        beforeBody: "Identical sentence order, contrast formulas, and product terms make five routes feel like one English draft wearing different scripts.",
        afterTitle: "Share the thesis and facts. Rewrite the route in its own language.",
        afterBody: "Commands and product behavior stay fixed; subject, rhythm, terminology, and information order belong to the locale.",
        beforeSignals: ["shared sentence skeleton", "literal product terms", "locale inheritance"],
        afterSignals: ["protected facts", "native terminology", "independent prose"],
        ruleIds: ["LOCALE-01", "LOCALE-02", "COPY-02"],
        reason: "Locale parity means equal understanding, not matching sentences or character counts.",
      },
      {
        id: "interface",
        tab: "Interface",
        beforeTitle: "Decoration chooses the layout",
        beforeBody: "Gradient hero, icon tiles, nested cards, accent rails, and identical three-column sections all compete before the content has a role.",
        afterTitle: "The task chooses the layout",
        afterBody: "One visual signature carries the brand. Steps become a sequence, comparisons become a split surface, and only independent objects remain cards.",
        beforeSignals: ["nested cards", "repeated icon tiles", "meaningless accents"],
        afterSignals: ["content-led hierarchy", "fewer containers", "one visual signature"],
        ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-01", "VISUAL-02"],
        reason: "The after state removes containers that do not represent entities or actions; it does not replace one fashionable style with another.",
      },
    ],
    classifierTitle: "Three labels, three different responses",
    classifierLead: "Separating pattern convergence, product quality, and preference keeps the audit useful and prevents taste from masquerading as a standard.",
    classifications: [
      { label: "SLOP", title: "Context-free pattern cluster", body: "Several defaults repeat without product evidence and weaken hierarchy, trust, or distinction." },
      { label: "QUALITY", title: "A measurable defect", body: "Accessibility, overflow, broken states, performance, or behavior fails a test or product contract." },
      { label: "PREFERENCE", title: "A valid design choice", body: "The choice fits the brief and DESIGN.md; another direction may exist, but it is not a defect." },
    ],
    workflowTitle: "Detect, revise, and verify without a style reset",
    workflowLead: "The audit moves from evidence to the smallest useful change. It never starts by picking a more fashionable aesthetic.",
    workflow: [
      { title: "Read the real route", body: "Name the audience, task, protected behavior, and design source before scanning patterns." },
      { title: "Collect deterministic signals", body: "Record DOM, CSS, repetition, line references, and browser evidence before making a contextual claim." },
      { title: "Confirm the cluster", body: "Check frequency, neighboring patterns, DESIGN.md exceptions, and visible impact. Drop unsupported findings." },
      { title: "Apply a focused correction", body: "Change the smallest set of containers, copy, or visual treatments that restores product hierarchy." },
      { title: "Verify the same route", body: "Repeat desktop, mobile, behavior, accessibility, and locale checks against the original acceptance contract." },
    ],
    sourcesTitle: "The research behind the definition",
    sourcesLead: "OmD uses an original taxonomy. These projects and style guides shaped its preservation, cluster, and evidence boundaries.",
    sources: [
      { label: "im-not-ai", href: "https://github.com/epoko77-ai/im-not-ai", note: "Korean translationese patterns and meaning-preserving edits." },
      { label: "Humanizer", href: "https://github.com/blader/humanizer", note: "Cluster-based editing that preserves meaning instead of reacting to isolated tells." },
      { label: "stop-slop", href: "https://github.com/hardikpandya/stop-slop", note: "Filler, formulaic contrast, vague claims, specificity, and reader trust." },
      { label: "Impeccable Slop Detector", href: "https://impeccable.style/slop/", note: "A public UI pattern catalog that separates slop from general quality." },
      { label: "Taste Skill", href: "https://github.com/leonxlnx/taste-skill", note: "Brief-first visual direction and anti-default discipline." },
      { label: "Anthropic frontend-design", href: "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md", note: "Subject-grounded direction, one justified signature, restraint, and critique before implementation." },
      { label: "Vercel Web Interface Guidelines", href: "https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md", note: "Production interaction, content handling, responsive, state, motion, and locale checks." },
      { label: "Carbon Design System", href: "https://carbondesignsystem.com/elements/spacing/overview/", note: "Task-aware density, spatial grouping, grid rhythm, and productive versus expressive typography." },
      { label: "W3C Cards", href: "https://design-system.w3.org/components/cards.html", note: "Content-first source order and accessible card boundaries rather than decorative containers." },
      { label: "GOV.UK Design System", href: "https://design-system.service.gov.uk/styles/layout/", note: "Readable measure, small-screen-first composition, specific actions, and component use conditions." },
      { label: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/layout", note: "Priority, grouping, adaptable hierarchy, progressive disclosure, and platform context." },
      { label: "Atlassian Elevation", href: "https://atlassian.design/foundations/elevation", note: "Surface depth tied to layering and interaction, with whitespace or borders preferred when lift is unnecessary." },
      { label: "Microsoft language style guides", href: "https://learn.microsoft.com/globalization/reference/microsoft-style-guides", note: "Independent guidance for Korean, Japanese, Simplified Chinese, and Traditional Chinese." },
      { label: "Primer Product UI Patterns", href: "https://primer.style/product/ui-patterns/", note: "Real product guidance for empty, loading, degraded, navigation, and saving states rather than detached component decoration." },
      { label: "Carbon Data Table", href: "https://carbondesignsystem.com/components/data-table/usage/", note: "Task-specific row density, aligned headers, toolbar roles, and when dense data needs a table instead of cards." },
      { label: "Fluent 2 Card", href: "https://fluent2.microsoft.design/components/web/react/core/card/usage", note: "Cards represent one concept or object; their internal hierarchy and interaction mode follow that boundary." },
      { label: "Fluent 2 Shapes", href: "https://fluent2.microsoft.design/shapes", note: "Rectangle, circle, pill, and popover shapes have component roles; corner radius changes with size and context." },
      { label: "USWDS Card", href: "https://designsystem.digital.gov/components/card/", note: "Cards are modular summaries in collections, not decoration, simple CTAs, tables, or sequential prose." },
      { label: "Primer Empty and Loading States", href: "https://primer.style/product/ui-patterns/empty-states/", note: "State copy, recovery actions, progress scope, and loading timing are part of the product surface." },
    ],
  },
};

const ko: BaseDictionary = {
  localeName: "한국어",
  metaDescription: "oh-my-design 사용법이에요. 실제 회사의 DESIGN.md를 아카이브에서 고르고, oh-my-design-cli를 설치해 코딩 에이전트가 그 파일대로 화면을 만들게 하는 방법을 안내해요.",
  ui: {
    docs: "문서",
    menu: "메뉴",
    language: "언어",
    copy: "복사",
    copied: "복사됨",
    copyFailed: "복사 실패",
    copyPage: "페이지 복사",
    pageCopied: "페이지 복사됨",
    pageTools: "페이지 도구",
    onThisPage: "이 페이지에서",
    previous: "이전",
    next: "다음",
    pagination: "문서 페이지 이동",
    prompt: "프롬프트",
    terminal: "터미널",
    result: "결과",
    verified: "검증",
    skillsLabel: "스킬",
  },
  nav: {
    overview: "개요",
    "getting-started": "빠른 시작",
    workflows: "워크플로",
    demo: "라이브 데모",
    skills: "스킬",
    "anti-slop": "AI slop 판정 기준",
  },
  navGroups: {
    start: "시작하기",
    guides: "가이드",
    reference: "참고 자료",
  },
  overview: {
    title: "DESIGN.md 아카이브와 oh-my-design-cli",
    lead: `oh-my-design은 두 부분으로 되어 있어요. 아카이브에는 실제 회사 제품에서 읽어 낸 DESIGN.md가 ${N.refs}개 있고, oh-my-design-cli는 코딩 에이전트가 화면을 고치기 전에 DESIGN.md부터 읽게 하는 스킬을 설치해요.`,
    partsTitle: "아카이브와 CLI",
    archive: {
      name: "아카이브",
      body: "DESIGN.md 하나에 한 회사의 색, 글꼴, 간격, 컴포넌트, 말투가 담겨 있어요. 검증된 파일에는 값마다 어디서 읽었는지도 적혀 있어요. 파일을 열어 복사하거나 내려받으면 되고, `oh-my-design.kr/<id>/design.md`에서 원본을 바로 가져올 수도 있어요. 여기까지는 CLI가 없어도 돼요.",
      action: "아카이브 열기",
    },
    cli: {
      name: "oh-my-design-cli",
      body: `명령어 한 줄이면 전체 번들 스킬 ${N.skills}개(공개 스킬 ${N.public}개와 이 스킬들이 부르는 내부 스킬), 전문 에이전트 ${N.agents}개, 오프라인 아카이브가 Claude Code·Codex·OpenCode·Cursor에 설치돼요. 도구마다 지원하는 만큼만 들어가요. 스킬은 프로젝트의 DESIGN.md를 만들고, UI를 고칠 때마다 그 파일을 따라요.`,
      action: "CLI 설치하기",
    },
    installTitle: "설치",
    installBody: "프로젝트 루트에서 실행하세요. 쓰고 있는 코딩 에이전트를 찾아서 어디에 설치할지 물어봐요.",
    afterInstall: "설치가 끝나면 에이전트를 다시 시작하고 doctor를 한 번 실행한 뒤, 원하는 화면을 말로 설명하면 돼요. 데몬, API 키, MCP 서버는 필요 없어요.",
    outcomesTitle: "이렇게 요청해 보세요",
    outcomesLead: "스킬 이름을 몰라도 돼요. 무엇을 만들지, 무엇은 바꾸면 안 되는지만 말하면 설치된 스킬이 알맞은 작업 흐름을 골라요.",
    outcomes: [
      {
        title: "디자인 시스템 만들기",
        description: "제품 설명과 verified_v2 레퍼런스 하나로 이 프로젝트의 DESIGN.md를 만들어요. 아무도 확인하지 않은 사실은 넣지 않아요.",
        prompt: "가족 자산관리 앱에 차분하고 믿음직한 디자인 시스템을 잡아줘. 토스를 참고하되 지금 로고와 문구는 그대로 둬.",
        result: "DESIGN.md, 에이전트 지침 파일, 레퍼런스와 달라진 토큰 목록, 확인을 마친 첫 화면.",
      },
      {
        title: "화면 하나 끝까지 만들기",
        description: "조사, 정보 구조, 와이어프레임, 컴포넌트, 문구, 접근성, 검증을 승인 단계가 있는 한 흐름으로 진행해요.",
        prompt: "이 앱의 온보딩을 설계하고 구현해줘. 지금 쓰는 스택은 유지하고 DESIGN.md를 기준으로 삼아줘.",
        result: "상태별 화면까지 갖춘 동작하는 화면, 검증 기록, 저장소 안의 인계 파일.",
      },
      {
        title: "지금 있는 UI 다듬기",
        description: "이미 있는 화면을 점검해서 제품 동작은 그대로 두고 위계, 리듬, 접근성, 흔한 AI 화면 패턴을 고쳐요.",
        prompt: "URL과 폼 필드 이름은 바꾸지 말고 가격 페이지를 개선해줘. 효과가 큰 수정부터 설명하고 결과를 검증해줘.",
        result: "범위를 좁힌 코드 수정, 그렇게 바꾼 이유, 실제로 돌린 검사.",
      },
    ],
    qualityTitle: "파일을 얼마나 믿어도 될까요",
    qualityBody: `DESIGN.md마다 품질 등급이 붙어 있어요. verified_v2 ${N.verified}개는 실제 제품과 대조해 확인했고 값마다 출처가 있으니, 공개하는 작업에는 이 등급을 쓰세요. partial ${N.partial}개는 일부만 확인됐고, legacy snapshot ${N.legacy}개는 지금 형식이 생기기 전에 만든 파일이에요. 아무도 확인하지 못한 값은 그럴듯한 기본값으로 채우지 않고 빼 둬요.`,
    nextTitle: "다음 단계",
    next: [
      { page: "getting-started", body: "설치하고 확인한 뒤 눈에 보이는 변화 하나를 만들어요." },
      { page: "workflows", body: "자주 하는 작업을 바로 쓸 수 있는 프롬프트로 모았어요." },
      { page: "skills", body: "공개 스킬과 각 스킬이 하는 일을 볼 수 있어요." },
    ],
  },
  gettingStarted: {
    title: "빠른 시작",
    lead: "CLI를 설치하고 확인한 다음, 눈에 보이는 변화 하나를 요청해요. 5분이면 충분해요.",
    prerequisitesTitle: "준비할 것",
    prerequisites: ["Node.js 18 이상", "제품 저장소", "Claude Code, Codex, OpenCode, Cursor 중 하나"],
    stepsTitle: "따라 하기",
    steps: [
      { title: "CLI 설치하기", body: "프로젝트 루트에서 실행하세요. 대화형 설치가 이미 쓰고 있는 코딩 에이전트를 찾아서, 고른 곳에 전체 번들을 설치해요.", command: CLI_INSTALL_COMMAND },
      { title: "에이전트를 다시 시작하고 doctor 실행하기", body: "다시 시작해야 에이전트가 새 스킬을 읽어요. doctor는 실제로 설치된 파일을 확인하고 카탈로그, 에이전트, DESIGN.md 중 빠진 것을 알려 줘요.", command: CLI_DOCTOR_COMMAND },
      { title: "DESIGN.md 정하기", body: "아카이브에서 제품과 가까운 회사를 고르거나 에이전트에게 추천해 달라고 하세요. 프로젝트 루트에 쓰기 전에 DESIGN.md를 먼저 보여 줘요.", prompt: "토스 레퍼런스로 이 프로젝트의 DESIGN.md를 잡아줘. 우리 로고와 문구는 그대로 둬." },
      { title: "눈에 보이는 변화 하나 요청하기", body: "실제 화면 하나로 시작하세요. 에이전트는 질문하기 전에 DESIGN.md와 코드를 먼저 읽어요.", prompt: "DESIGN.md를 적용해서 홈 화면을 개선해줘. 동작은 그대로 두고 결과를 검증해줘." },
    ],
    channelsTitle: "도구 하나에만 설치하기",
    channelsLead: "질문 없이 도구 하나에만 설치해요. 스크립트나 CI에서도 그대로 쓸 수 있어요.",
    channels: [
      { name: "Claude Code", body: "스킬, 서브에이전트, 카탈로그를 설치하고, 프로젝트 훅은 지금 설정과 안전하게 합쳐요.", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "Codex", body: "스킬, 지침이 들어 있는 에이전트 역할, 보조 도구, 로컬 레퍼런스 카탈로그를 설치해요.", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "OpenCode", body: "스킬, 네이티브 서브에이전트, 오프라인 카탈로그를 설치해요. 프로젝트 설치는 `.opencode`에, `--global`은 `~/.config/opencode`에 들어가고 `doctor --global`로 확인해요.", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "네이티브 Agent Skills 31개, 작은 DESIGN.md 부트스트랩 규칙, 공유 카탈로그를 설치해요. 오래된 클라이언트에서만 `--cursor-rule-only`를 쓰세요.", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ],
    rawTitle: "CLI 없이 DESIGN.md 쓰기",
    rawBody: "아카이브의 파일은 모두 평범한 Markdown이에요. 파일 페이지에서 복사하거나 내려받아도 되고, 주소로 바로 가져와도 돼요. 에이전트도 브라우저 없이 읽을 수 있어요.",
    rawLinks: rawLinks(
      { href: "/llms.ko.txt", description: "에이전트가 읽는 한국어 문서·아카이브 목차예요." },
      "회사 하나의 DESIGN.md 원본 Markdown이에요. 링크는 토스 파일을 열어요.",
      "README, 주요 스킬, 아카이브 목록을 한 파일에 모았어요. 영어로 되어 있어요.",
    ),
    doneTitle: "화면이 바뀌면 끝이에요",
    doneBody: "첫 실행이 잘 끝나면 눈에 보이는 개선, 프로젝트의 DESIGN.md, 다음에 할 요청이 남아요. 설치만 깔끔하게 끝났다고 목표를 이룬 건 아니에요.",
  },
  demo: {
    title: "관객에게 실제 제품이 바뀌는 걸 보여 주세요.",
    lead: "좋은 oh-my-design 데모는 스킬 이름을 훑어보는 시간이 아니에요. 눈에 보이는 문제 하나로 시작해 제품이 기대고 있는 동작은 그대로 지키고, 실제 라우트에서 누구나 확인할 수 있는 근거를 보여 주며 끝나요.",
    formatsTitle: "결과를 증명할 수 있는 가장 작은 형식을 고르세요",
    formatsLead: "시간에 맞춰 줄이는 건 작업 범위뿐이에요. 근거는 줄이지 않아요. 데모 전에 형식을 하나 고르고, 무엇을 바꾸지 않을지 먼저 밝혀 두세요.",
    formats: [
      {
        duration: "5분",
        title: "눈에 띄는 문제 하나 고치기",
        when: "기존 페이지는 동작하지만 평범하거나 이해하기 어려울 때",
        goal: "동작은 그대로 두고, 위계·간격·상태·접근성 문제 가운데 영향이 큰 하나를 고쳐요.",
        proof: "수정 전 화면, 범위를 좁힌 변경 내용, 같은 라우트에서 실제로 동작하는 수정 후 화면.",
      },
      {
        duration: "15분",
        title: "화면 하나 완성해서 출시하기",
        when: "기술 스택과 컴포넌트가 있고 흐름의 범위가 명확할 때",
        goal: "프로젝트의 디자인 맥락을 바탕으로 작은 화면 하나를 로딩·빈 화면·오류·성공 상태까지 구현해요.",
        proof: "동작하는 라우트, 다룬 상태, 변경 파일, 실제로 돌린 검사.",
      },
      {
        duration: "30분",
        title: "체크포인트가 있는 하네스 실행하기",
        when: "화면이 새롭거나 모호해서 조사와 디자인 시스템 결정이 필요할 때",
        goal: "필수 승인 단계를 건너뛰지 않고 발견부터 여정, DESIGN.md 제안, 구현, 검증까지 진행해요.",
        proof: "사용자 여정, DESIGN.md 패치, 동작하는 UI, 검증 요약, 세 번의 사용자 체크포인트.",
      },
    ],
    runbookTitle: "반복해서 쓸 수 있는 6단계 진행표",
    runbookLead: "밋업, 워크숍, 화면 녹화에서 모두 같은 순서로 진행하세요. CLI는 환경을 준비하고, 실제 UI 작업은 코딩 에이전트가 저장소 안에서 해요.",
    steps: [
      {
        title: "눈에 보이는 문제 하나, 지킬 동작 하나 정하기",
        body: "실제 라우트를 열고 관객이 봐야 할 문제를 정확히 짚어 주세요. URL, 데이터 흐름, 필드명, 카피, 상호작용 가운데 무엇을 바꾸면 안 되는지도 함께 밝혀 두세요.",
      },
      {
        title: "번들을 설치하고 doctor로 실제 상태 확인하기",
        body: "프로젝트 루트에서 두 명령을 실행하고, 설치가 끝나면 코딩 에이전트를 다시 시작하세요. 설치에 성공한 것 자체를 결과처럼 소개하지는 마세요.",
        command: `${CLI_INSTALL_COMMAND}\n${CLI_DOCTOR_COMMAND}`,
      },
      {
        title: "DESIGN.md와 verified_v2 근거 대조하기",
        body: "공개 데모에는 verified_v2 레퍼런스를 고르세요. 에이전트에게 기존 DESIGN.md와 함께 읽게 한 다음, 이 제품 화면에 속한 근거만 DESIGN.md에 반영하고 모르는 폰트·토큰·컴포넌트는 비워 두세요.",
      },
      {
        title: "실제 화면과 핵심 상태 구현하기",
        body: "지금 쓰는 기술 스택과 컴포넌트로 작업하세요. 새 흐름이라면 정적인 성공 화면 목업만 다듬지 말고, 사용자가 실제로 마주칠 상태까지 넣으세요.",
      },
      {
        title: "제품 화면에서 직접 점검하기",
        body: "제품 라우트를 열어 지키기로 한 동작을 직접 확인한 다음, 접근성과 interface-feel 검사를 돌리세요. 실제로 돌린 검사와 측정값만 보고하세요.",
      },
      {
        title: "관객의 교정 기록하기",
        body: "사용자가 시각적인 선택을 바로잡으면 그 범위만 고치고 omd:remember로 남겨 두세요. 그러면 다음 세션에서 같은 실수를 되풀이하지 않아요.",
      },
    ],
    starterPromptTitle: "5분 라이브 개선에 쓸 프롬프트",
    starterPrompt: "먼저 DESIGN.md를 읽고 지금 제품 라우트를 확인해. URL, 데이터 흐름, 필드명, 기존 사용자 동작은 그대로 두고 이 페이지에서 눈에 보이는 위계나 상태 문제 하나를 고쳐. 공개 데모에는 verified_v2 레퍼런스를 쓰고, 이 제품 화면에 해당하는 근거만 대조해서 반영해. 모르는 값은 폴백으로 채우지 말고 비워 둬. 실제 화면에 구현하고 핵심 상태까지 다룬 다음, 그 라우트에서 검증하고 변경 파일과 실제로 돌린 검사를 알려줘. DESIGN.md를 확장하거나 필수 하네스 체크포인트를 넘어가기 전에는 나한테 먼저 물어봐.",
    proofTitle: "관객이 직접 확인할 수 있어야 하는 근거",
    proofLead: "진행하면서 아래 증거를 남기세요. 과정을 되짚을 수 없는 멋진 스크린샷은 검토할 수 있는 데모가 아니에요.",
    proof: [
      "수정 전 화면과 처음에 짚은 문제 하나",
      "지킬 동작까지 담은 프롬프트 원문",
      "DESIGN.md 변경 내용과 일부러 비워 둔 미확인 필드",
      "따로 만든 목업이 아닌 실제 제품 라우트와 핵심 상태",
      "변경 파일과 실제로 돌린 검사나 측정",
      "범위를 정해 오래 남는 선호로 기록한 사용자 교정",
    ],
    guardrailsTitle: "와우 포인트도 정직해야 해요",
    guardrails: [
      { title: "CLI는 설치하고 진단해요", body: "설치된 맥락을 읽고 UI를 고치는 건 코딩 에이전트예요. 설치기가 혼자 화면을 만들었다고 말하지 마세요." },
      { title: "모르면 여전히 비워 둬요", body: "빠진 브랜드 사실을 시스템 폰트, 일반 컴포넌트, 추정한 토큰, 인접한 마케팅 화면으로 채우지 마세요." },
      { title: "성과 연출보다 증거가 먼저예요", body: "실제로 전후를 측정하지 않았다면 속도, 전환율, 접근성, 성능이 좋아졌다고 주장하지 마세요." },
      { title: "필수 체크포인트는 그대로예요", body: "30분 하네스도 사용자 여정, DESIGN.md 패치, 검증 단계에서 멈추고 승인을 기다려요. 라이브 관객이 있다고 건너뛸 수는 없어요." },
    ],
  },
  workflows: {
    title: "바로 쓸 수 있는 작업 목표",
    lead: "아래 레시피는 자연어로 쓴 작업 계약이에요. 목표와 제약은 그대로 두고, 도메인과 화면만 제품에 맞게 바꾸세요.",
    workflows: [
      { title: "브랜드 맥락 잡기", when: "새 프로젝트 또는 DESIGN.md 없음", prompt: "바쁜 부모를 위한 한국형 식단 앱의 디자인 시스템을 잡아줘. verified_v2 레퍼런스를 추천하고 차이를 설명한 다음, DESIGN.md를 쓰기 전에 먼저 물어봐줘.", outputs: ["레퍼런스 추천", "DESIGN.md 제안", "에이전트 지침 파일"], skills: ["omd:init", "omd:sync"] },
      { title: "새 화면 출시", when: "완성된 페이지나 흐름", prompt: "결제 완료 흐름을 성공·실패·부분 성공 상태로 만들어줘. DESIGN.md와 기존 컴포넌트를 쓰고 접근성도 검증해줘.", outputs: ["사용자 여정", "동작하는 UI", "모든 핵심 상태", "검증 요약"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
      { title: "기존 화면 개선", when: "동작하지만 너무 평범한 UI", prompt: "이 대시보드에서 제품 맥락 없이 반복된 UI 패턴, 위계, 밀도, 모션, 접근성을 점검해줘. 동작은 그대로 두고 효과가 큰 수정부터 적용한 다음, 무엇이 바뀌었는지 보여줘.", outputs: ["우선순위를 매긴 점검 결과", "범위를 좁힌 패치", "수정 전후 근거"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
      { title: "취향 교정 기록", when: "에이전트에게 선호를 가르칠 때", prompt: "우리는 CTA에 대문자를 안 써. 이 선호를 프로젝트에 기록하고, 버튼 동작은 그대로 둔 채 지금 화면만 고쳐줘.", outputs: ["대기 중인 선호", "범위를 정한 UI 수정", "DESIGN.md 반영 제안"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
    ],
  },
  skills: {
    title: "스킬",
    lead: `여기 있는 건 공개 스킬 ${N.public}개예요. oh-my-design-cli는 이 스킬들이 부르는 내부 스킬까지 더해 전체 번들 스킬 ${N.skills}개와 전문 에이전트 ${N.agents}개를 설치해요. 이름을 외울 필요는 없어요. 원하는 결과를 말하면 에이전트가 알맞은 스킬을 골라요. 꼭 그 스킬을 써야 할 때만 이름을 불러 주세요.`,
    groups: skillGroups({
      system: { title: "DESIGN.md 만들고 지키기", description: "프로젝트의 DESIGN.md를 만들고, UI를 고칠 때마다 적용해요." },
      build: { title: "화면 만들기", description: "요구사항에서 시작해 실제 에셋이 들어간 동작하는 화면과 인계 자료까지 만들어요." },
      quality: { title: "품질 확인하기", description: "인터랙션 감각, 한글 타이포그래피, 절제, 생성형 UI 패턴을 점검해요." },
      content: { title: "글쓰기", description: "사실과 명령어는 그대로 두고 다섯 언어의 제품 문장을 자연스럽게 다듬어요." },
    }),
    descriptions: {
      "omd:init": "실제 회사 레퍼런스 중 가장 가까운 것으로 DESIGN.md를 만들어요.",
      "omd:apply": "에이전트가 UI를 고칠 때마다 DESIGN.md를 따르게 해요.",
      "omd:autopilot": "프롬프트 하나로 새 화면을 설계하고 구현한 뒤 검증해요.",
      "omd:landing": "DESIGN.md로 스크롤형 원페이지 랜딩을 만들어요.",
      "omd:shader-hero": "DESIGN.md의 두 가지 색으로 전면 히어로를 만들고 글자 대비를 측정해요.",
      "omd:cjk-type-shader": "한국어·일본어·중국어 큰 제목을 한지에 번진 먹처럼 그려요.",
      "omd:feel": "측정으로 정한 인터페이스 감각 규칙 113개를 적용하거나 점검해요.",
      "hangul": "한글 줄바꿈·자간·행간·글꼴과 화면 문구(맞춤법, 에러 메시지, 버튼 이름, 높임말)를 W3C 명세, 한글 맞춤법, 국내 디자인 시스템, 한국 서비스 67곳 실측값에 맞춰 고치고 점검해요.",
      "omd:restraint": "초점, 글자 크기, 여백을 재고 페이지에 필요 없는 것을 덜어 내요.",
      "omd:slop-audit": "제품 근거 없이 반복된 생성형 UI 패턴을 규칙 ID와 코드 위치로 찾아요.",
      "omd:humanize": "다섯 언어의 문장을 자연스럽게 다듬고, 사실과 명령어는 그대로 지켜요.",
    },
    pages: { hangul: { href: "/ko/hangul", label: "/hangul 소개" } },
    routingTitle: "스킬 이름은 몰라도 돼요",
    routingBody: "‘결제 화면을 개선하고 검증해줘’라고 말하는 편이 스킬 네 개를 직접 이어 붙이는 것보다 나아요. 특정 스킬을 쓰고 싶을 때만 이름을 부르세요.",
  },
  antiSlop: {
    title: "판단 없이 반복된 패턴을 AI slop으로 봐요.",
    lead: "누가 만들었는지는 따지지 않아요. 제품의 목적과 근거 대신 익숙한 패턴이 겹쳐서 화면의 위계와 신뢰를 흐리면 AI slop으로 분류해요.",
    definitionTitle: "패턴 하나만으로 결론 내리지 않아요",
    definitionBody: "둥근 카드, 보라색, 가운데 정렬 히어로, 짧은 슬로건은 모두 써도 돼요. 문제는 이유 없는 기본값이 한 화면에서 되풀이되면서 제품마다 다른 정보 구조와 브랜드 인상을 지울 때 생겨요.",
    definitionNote: "어떤 도구로 작성했는지는 알 수 없어요. 대신 이 구조와 문장이 왜 이 제품에 필요한지, 그렇게 판단한 근거가 남아 있는지 확인해요.",
    principlesTitle: "모든 판정에 적용하는 네 가지 원칙",
    principles: [
      { title: "제품을 먼저 읽기", body: "독자, 할 일, 기존 동작, DESIGN.md가 일반적인 안티패턴 목록보다 먼저예요." },
      { title: "단서보다 군집 보기", body: "패턴 하나로 판정하지 않아요. 반복 횟수, 함께 나타나는 패턴, 실제 영향을 같이 봐요." },
      { title: "품질 오류 분리하기", body: "대비, 포커스, 화면 넘침, 깨진 상태는 품질 문제예요. ‘AI 느낌’이라는 말로 뭉뚱그리지 않아요." },
      { title: "가장 작은 수정부터", body: "동작과 콘텐츠는 그대로 지켜요. 새 스타일을 덮어씌우기 전에 가장 큰 반복 군집부터 끊어요." },
    ],
    atlasTitle: "생성형 UI를 검토하는 열 가지 관점",
    atlasLead: "금지 목록이 아니라 디자인 리뷰 질문으로 쓰세요. 관점마다 반복되는 기본값, 디자이너가 지키려는 판단, 그 패턴을 써도 되는 조건을 함께 적었어요.",
    slopSignalLabel: "수렴하는 기본값",
    designerPreferenceLabel: "디자이너가 지키는 것",
    validWhenLabel: "이럴 때는 써도 돼요",
    lenses: [
      { id: "hierarchy", title: "우선순위가 구도를 정해요", question: "모든 라벨을 읽기 전에 무엇이 중요한지 알 수 있나요?", slop: "모든 섹션의 제목 크기, 카드 수, 정렬, 시각적 무게가 똑같아요.", preference: "핵심 행동은 가장 눈에 띄는 자리에 두고, 보조 정보는 실제로 중요한 만큼만 드러나게 해요.", validWhen: "반복이 실제 절차나 비교 항목, 같은 종류의 대상을 나타낼 때예요.", ruleIds: ["LAYOUT-01", "LAYOUT-05", "TYPE-01"] },
      { id: "containers", title: "컨테이너는 경계를 드러내요", question: "각 상자가 대상, 행동, 선택, 레이어 중 하나를 나타내나요?", slop: "섹션을 카드로 감싸고, 그 안의 패널과 설명을 또 카드로 감싸요.", preference: "여백, 정렬, 타이포, 구분선부터 써요. 상자는 경계 자체에 의미가 있을 때만 더해요.", validWhen: "그 표면을 따로 옮기거나 선택하거나 닫거나 다시 쓸 수 있을 때예요.", ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-03"] },
      { id: "typography", title: "타이포는 읽는 방식을 알려 줘요", question: "이 화면에서 사용자는 훑어보나요, 읽나요, 비교하나요, 조작하나요?", slop: "유행하는 폰트 하나, 비슷비슷한 크기, 반복되는 eyebrow와 디스플레이 처리가 위계를 평평하게 만들어요.", preference: "과업에 맞춰 행 길이, 굵기, 행간, 대비를 조절하고, 한 영역 안에서는 타이포 역할을 흔들지 않아요.", validWhen: "글꼴 하나만 써도 의도한 위계가 분명하고 제품의 말투에 맞을 때예요.", ruleIds: ["TYPE-01", "TYPE-02", "TYPE-03"] },
      { id: "color", title: "색과 깊이에는 각자 할 일이 있어요", question: "강조색, 표면, 그림자, radius가 맡은 역할을 설명할 수 있나요?", slop: "그라데이션 글자, 글로우, 유리 효과, 큰 radius, 넓게 퍼진 그림자가 한꺼번에 중요하다고 외쳐요.", preference: "색은 브랜드·행동·상태·선택에 연결하고, 레이어 하나에는 경계나 elevation 방식을 한 가지만 써요.", validWhen: "재질과 팔레트에 브랜드 근거가 있고, 대비와 상태 구분도 지킬 때예요.", ruleIds: ["COLOR-01", "VISUAL-04", "VISUAL-05"] },
      { id: "evidence", title: "장식보다 실제 증거를 보여 줘요", question: "제품의 주장을 화면에서 무엇으로 확인할 수 있나요?", slop: "아이콘 타일, 가짜 지표, 블러 원, placeholder 대시보드가 제품 내용을 대신해요.", preference: "가능하면 실제 흐름, 에셋, 데이터 형태, 상태 변화, 확인된 제약을 보여 줘요.", validWhen: "일러스트가 브랜드 서사를 담거나, 제품 화면만으로는 설명하기 어려운 내용을 풀어 줄 때예요.", ruleIds: ["EVIDENCE-01", "VISUAL-02", "VISUAL-06"] },
      { id: "density", title: "밀도는 과업을 따라가요", question: "관련된 것끼리는 가깝고, 다른 묶음과는 충분히 떨어져 있나요?", slop: "설정, 표, 마케팅 문장, 모바일 버튼에 똑같이 넉넉한 padding을 줘요.", preference: "묶음 안은 촘촘하게, 묶음 사이는 분명하게 띄워요. 운영 화면에서는 쇼룸 같은 여백보다 비교 효율이 먼저예요.", validWhen: "집중된 서비스 흐름이나 에디토리얼 장면에서 넓은 여백이 인지 부담을 덜어 줄 때예요.", ruleIds: ["LAYOUT-05", "DENSITY-01", "DENSITY-02"] },
      { id: "states", title: "제품에는 불완전한 상태도 있어요", question: "성공 전후와 실패했을 때 무엇이 보이나요?", slop: "반듯한 성공 화면만 있고 빈 상태, 로딩, 오류, 권한, 긴 콘텐츠 상태는 없어요.", preference: "상태 변화를 정보 구조의 일부로 설계하고, 상태마다 할 수 있는 다음 행동을 알려 줘요.", validWhen: "결과물이 정적인 시각 연구라고 밝히고, 바로 운영에 쓸 수 있다고 주장하지 않을 때예요.", ruleIds: ["STATE-01", "STATE-02", "COPY-04"] },
      { id: "responsive", title: "반응형은 우선순위대로 다시 배치해요", question: "공간이 줄면 무엇을 옮기고, 쌓고, 접고, 덜어 내야 하나요?", slop: "데스크톱 열을 그대로 좁히기만 해서 문장이 잘리고, 컨트롤이 아무 데서나 줄바꿈되고, 다른 언어에서는 틀이 깨져요.", preference: "읽는 순서와 핵심 과업은 지키고, 원래 관계가 더는 맞지 않으면 구도 자체를 바꿔요.", validWhen: "가로 스크롤이 affordance가 분명한 데이터·미디어 탐색 방식일 때예요.", ruleIds: ["LAYOUT-06", "RESPONSIVE-01", "LOCALE-02"] },
      { id: "motion", title: "모션은 변화를 설명해요", question: "움직임이 피드백, 출발점, 연속성, 공간 관계 중 무엇을 알려 주나요?", slop: "정적인 화면을 고급스럽게 보이게 하려고 모든 요소가 뜨고, 튀고, 순서대로 나타나요.", preference: "기억에 남을 장면 하나만 고르고, 피드백은 빠르고 중간에 멈출 수 있게 만들어요. reduced motion도 존중해요.", validWhen: "앰비언트 모션이 제품 경험의 일부이고, 읽기나 조작을 방해하지 않을 때예요.", ruleIds: ["MOTION-01", "MOTION-02", "MOTION-03"] },
      { id: "interaction", title: "컨트롤은 일관된 약속을 지켜요", question: "모든 컨트롤의 모습, 이름, 결과가 실제 행동과 맞나요?", slop: "동작은 다르지 않은데 pill, badge, 버튼, 탭, 모달 variant만 늘어나요.", preference: "행동에는 구체적인 이름을 붙이고, 필요하면 상태를 URL에 남겨요. 모달은 짧고 그 안에서 끝나는 과업에만 써요.", validWhen: "variant가 검증된 상태, 권한, 위험도, 반복되는 전문가 작업을 구분할 때예요.", ruleIds: ["COMP-01", "COMP-02", "COMP-03"] },
    ],
    directionsTitle: "Anti-slop은 미니멀리즘의 다른 이름이 아니에요",
    directionsLead: "디자이너가 몰래 선호하는 단 하나의 스타일 같은 건 없어요. 과업에 맞고, 내부 논리가 일관되고, 템플릿보다 한 단계 더 나아간 방향을 선호해요.",
    directions: [
      { id: "editorial", title: "표현이 풍부한 에디토리얼", body: "발견과 이야기 전달이 목적이라면 큰 글자, 낯선 구도, 이미지, 느린 호흡이 맞을 수 있어요.", proof: "시각적 서명이 유행하는 랜딩 키트가 아니라 주제 자체에서 나와요." },
      { id: "product", title: "밀도 높은 제품 도구", body: "반복해서 비교하고 조작하는 화면이라면 표, 촘촘한 컨트롤, 늘 보이는 내비게이션, 절제된 타이포가 맞아요.", proof: "밀도가 높아도 묶음과 훑어보는 경로가 분명하고, 실제 데이터와 상태를 넣어도 무너지지 않아요." },
      { id: "service", title: "집중된 서비스 흐름", body: "신뢰와 완료가 중요하다면 조용한 한 열 레이아웃, 익숙한 컨트롤, 쉬운 문장이 맞아요.", proof: "단순함으로 빠진 판단을 가리지 않고, 사용자의 불확실성을 줄여요." },
    ],
    compareTitle: "같은 의도, 더 분명한 제품 판단",
    compareLead: "탭을 눌러 문장, 다국어, 화면 구조의 수정 전후를 비교해 보세요. 수정한 예시는 원래 하려던 일은 그대로 두고, 익숙한 장식을 구체적인 결정으로 바꿔요.",
    beforeLabel: "기본 패턴",
    afterLabel: "OmD 방향",
    detectedLabel: "바꾼 이유",
    specimen: { nextGen: "차세대", verified: "검증됨", reference: "01 — 레퍼런스", output: "결과", nextStep: "다음 행동을 하나로" },
    specimenUi: {
      dashboard: "대시보드", release: "릴리스", settings: "설정", introducing: "새 문서",
      typographyTitle: "모든 팀을 위한 DESIGN.md", typographyBody: "제품 근거와 검증한 디자인 규칙을 한곳에서 관리해요.",
      newLabel: "신규", docsLabel: "문서", checkout: "결제", verify: "검증", artifact: "산출물",
      time: "시간", route: "경로", status: "상태", desktop: "데스크톱", notifications: "알림", all: "전체", open: "진행 중",
    },
    examples: [
      {
        id: "writing",
        tab: "문장",
        beforeTitle: "사용자 경험을 혁신적으로 향상시키는 강력하고 매끄러운 솔루션을 만나보세요.",
        beforeBody: "하나의 지능형 솔루션으로 차세대 디자인을 시작하고 모든 프로젝트의 수준을 높일 수 있습니다.",
        afterTitle: "레퍼런스를 고르면 검증된 규칙을 DESIGN.md로 저장해요.",
        afterBody: "확인되지 않은 폰트와 컴포넌트는 넣지 않아요. 에이전트는 카탈로그가 뒷받침하는 정보만 읽어요.",
        beforeSignals: ["추상적인 찬사", "사용자 행동 없음", "기계적인 호흡"],
        afterSignals: ["구체적인 행동", "확인할 수 있는 결과", "근거의 경계"],
        ruleIds: ["COPY-01", "COPY-03", "EVIDENCE-01"],
        reason: "더 큰 약속을 새로 만들지 않았어요. 제품에 이미 있는 기능과 제한을 앞세웠어요.",
      },
      {
        id: "locale",
        tab: "다국어",
        beforeTitle: "AI 에이전트를 통해 디자인 작업을 수행할 수 있습니다.",
        beforeBody: "영어 원문의 주어와 문장 순서를 그대로 옮기면 다섯 경로가 서로 다른 언어가 아니라 글자만 바꾼 원고처럼 보여요.",
        afterTitle: "AI 에이전트가 DESIGN.md를 읽고 제품 화면을 고쳐요.",
        afterBody: "명령어와 제품 동작은 그대로 지켜요. 주어, 호흡, 용어, 정보 순서는 언어마다 새로 써요.",
        beforeSignals: ["~을 통해", "~할 수 있다", "문장 구조 상속"],
        afterSignals: ["능동형 행동", "보호된 사실", "언어별 원고"],
        ruleIds: ["LOCALE-01", "LOCALE-02", "COPY-02"],
        reason: "다국어 정합성은 문장을 똑같이 맞추는 게 아니라 같은 뜻을 자연스럽게 이해하게 하는 일이에요.",
      },
      {
        id: "interface",
        tab: "화면",
        beforeTitle: "장식이 레이아웃을 고르는 화면",
        beforeBody: "그라데이션 히어로, 아이콘 타일, 카드 안의 카드, 왼쪽 강조선, 똑같은 3열 구성이 콘텐츠의 역할보다 먼저 눈에 들어와요.",
        afterTitle: "사용자가 할 일이 레이아웃을 고르는 화면",
        afterBody: "브랜드를 보여 줄 장치는 하나만 남겨요. 절차는 순서로, 비교는 양쪽으로 나눈 화면으로 보여 주고, 카드는 독립된 대상에만 써요.",
        beforeSignals: ["중첩 카드", "반복 아이콘 타일", "역할 없는 강조선"],
        afterSignals: ["콘텐츠 중심 위계", "적은 컨테이너", "시각 서명 하나"],
        ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-01", "VISUAL-02"],
        reason: "유행하는 다른 스타일로 갈아끼우지 않았어요. 대상이나 행동을 나타내지 않는 컨테이너만 걷어냈어요.",
      },
    ],
    classifierTitle: "세 가지 라벨은 섞지 않아요",
    classifierLead: "패턴 수렴, 제품 품질, 취향을 나눠 보면 점검 결과가 선명해지고, 개인 취향을 표준처럼 밀어붙이지 않게 돼요.",
    classifications: [
      { label: "SLOP", title: "맥락 없는 패턴 군집", body: "제품 근거 없이 기본값이 겹쳐서 위계, 신뢰, 브랜드만의 개성을 약하게 만들어요." },
      { label: "QUALITY", title: "측정할 수 있는 결함", body: "접근성, 화면 넘침, 깨진 상태, 성능, 동작이 검사나 제품 계약을 통과하지 못해요." },
      { label: "PREFERENCE", title: "유효한 디자인 선택", body: "브리프와 DESIGN.md에 맞는 선택이에요. 다른 방향이 있을 수는 있어도 결함은 아니에요." },
    ],
    workflowTitle: "스타일을 갈아엎지 않고 찾고, 고치고, 확인해요",
    workflowLead: "점검은 근거에서 시작해 가장 작은 수정으로 끝나요. 더 유행하는 미감부터 고르지 않아요.",
    workflow: [
      { title: "제품 화면 읽기", body: "독자, 핵심 행동, 지킬 동작, 디자인 근거부터 적어요." },
      { title: "측정할 수 있는 근거 모으기", body: "DOM, CSS, 반복 횟수, 코드 위치, 브라우저 결과를 기록한 다음 문맥을 판단해요." },
      { title: "군집 확인하기", body: "반복 빈도, 함께 나타나는 패턴, DESIGN.md 예외, 화면에 주는 영향을 대조하고, 근거 없는 판정은 버려요." },
      { title: "집중해서 고치기", body: "제품 위계를 되살리는 데 필요한 컨테이너, 문장, 시각 처리만 바꿔요." },
      { title: "같은 화면 다시 확인하기", body: "수정 전과 같은 조건으로 데스크톱, 모바일, 동작, 접근성, 언어별 화면을 검증해요." },
    ],
    sourcesTitle: "이 기준을 만든 리서치",
    sourcesLead: "OmD의 분류 기준은 새로 정했어요. 의미 보존, 군집 판단, 근거 우선 원칙은 아래 프로젝트를 참고했어요.",
    sources: [
      { label: "im-not-ai", href: "https://github.com/epoko77-ai/im-not-ai", note: "한국어 번역투 분류와 의미를 지키는 국소 수정." },
      { label: "Humanizer", href: "https://github.com/blader/humanizer", note: "단어 하나가 아니라 겹치는 신호를 보고, 뜻을 지키며 고치는 방식." },
      { label: "stop-slop", href: "https://github.com/hardikpandya/stop-slop", note: "군더더기, 틀에 박힌 대조법, 막연한 주장, 구체성과 독자 신뢰." },
      { label: "Impeccable Slop Detector", href: "https://impeccable.style/slop/", note: "slop 패턴과 일반 품질 문제를 분리한 공개 카탈로그." },
      { label: "Taste Skill", href: "https://github.com/leonxlnx/taste-skill", note: "제품 요구사항을 먼저 읽고 생성형 기본값을 억제하는 방식." },
      { label: "Anthropic frontend-design", href: "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md", note: "주제에서 출발한 방향, 근거 있는 시각 서명 하나, 절제, 구현 전 비평." },
      { label: "Vercel Web Interface Guidelines", href: "https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md", note: "운영 환경의 상호작용, 긴 콘텐츠, 반응형, 상태, 모션, 다국어 점검." },
      { label: "Carbon Design System", href: "https://carbondesignsystem.com/elements/spacing/overview/", note: "과업별 밀도, 공간 묶음, 그리드 리듬, productive·expressive 타이포 구분." },
      { label: "W3C Cards", href: "https://design-system.w3.org/components/cards.html", note: "장식용 상자 대신 콘텐츠를 앞세운 순서와 접근성을 갖춘 카드 경계." },
      { label: "GOV.UK Design System", href: "https://design-system.service.gov.uk/styles/layout/", note: "읽기 좋은 행 길이, 작은 화면 우선 구성, 구체적인 행동, 컴포넌트 사용 조건." },
      { label: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/layout", note: "우선순위, 묶음, 적응형 위계, 점진적 공개, 플랫폼 맥락." },
      { label: "Atlassian Elevation", href: "https://atlassian.design/foundations/elevation", note: "레이어와 상호작용에 근거한 깊이, 띄울 필요가 없으면 여백이나 경계를 쓰는 방식." },
      { label: "Microsoft 언어별 스타일 가이드", href: "https://learn.microsoft.com/globalization/reference/microsoft-style-guides", note: "한국어, 일본어, 간체, 번체를 서로 다른 언어 원고로 다루는 기준." },
      { label: "Primer 제품 UI 패턴", href: "https://primer.style/product/ui-patterns/", note: "빈 상태, 로딩, 기능 저하, 내비게이션, 저장을 실제 제품 흐름으로 설명하는 기준." },
      { label: "Carbon 데이터 테이블", href: "https://carbondesignsystem.com/components/data-table/usage/", note: "과업에 맞는 행 밀도, 헤더 정렬, 툴바 역할, 카드 대신 표를 써야 하는 조건." },
      { label: "Fluent 2 카드", href: "https://fluent2.microsoft.design/components/web/react/core/card/usage", note: "카드 하나에는 개념이나 객체 하나를 담고, 내부 위계와 상호작용은 그 경계를 따라야 한다는 원칙." },
      { label: "Fluent 2 도형", href: "https://fluent2.microsoft.design/shapes", note: "사각형, 원, pill, popover의 역할과 크기·맥락에 따른 radius 선택." },
      { label: "USWDS 카드", href: "https://designsystem.digital.gov/components/card/", note: "카드는 모듈형 요약에 쓰고 장식, 단순 CTA, 표, 이어지는 본문을 대신하지 않는다는 조건." },
      { label: "Primer 빈 상태와 로딩", href: "https://primer.style/product/ui-patterns/empty-states/", note: "상태 설명, 복구 행동, 진행 범위와 로딩 시점을 화면 설계에 포함하는 기준." },
    ],
  },
};

const ja: BaseDictionary = {
  localeName: "日本語",
  metaDescription: "oh-my-design の使い方です。実在する企業の DESIGN.md をアーカイブから選び、oh-my-design-cli をインストールして、コーディングエージェントがそのファイルに沿って画面を作るまでを説明します。",
  ui: {
    docs: "ドキュメント",
    menu: "メニュー",
    language: "言語",
    copy: "コピー",
    copied: "コピー済み",
    copyFailed: "コピーできませんでした",
    copyPage: "ページをコピー",
    pageCopied: "コピーしました",
    pageTools: "ページツール",
    onThisPage: "このページ",
    previous: "前へ",
    next: "次へ",
    pagination: "ドキュメントのページ移動",
    prompt: "プロンプト",
    terminal: "ターミナル",
    result: "結果",
    verified: "検証",
    skillsLabel: "スキル",
  },
  nav: {
    overview: "概要",
    "getting-started": "クイックスタート",
    workflows: "ワークフロー",
    demo: "ライブデモ",
    skills: "スキル",
    "anti-slop": "AI slop の判断基準",
  },
  navGroups: {
    start: "はじめに",
    guides: "ガイド",
    reference: "参考資料",
  },
  overview: {
    title: "DESIGN.md アーカイブと oh-my-design-cli",
    lead: `oh-my-design は2つの部分からなります。アーカイブには、実在する企業の製品から読み取った DESIGN.md が ${N.refs}件あります。oh-my-design-cli はコーディングエージェントにスキルをインストールし、画面に手を入れる前に DESIGN.md を読むようにします。`,
    partsTitle: "アーカイブと CLI",
    archive: {
      name: "アーカイブ",
      body: "各 DESIGN.md には1社分の色、書体、余白、コンポーネント、トーンが書かれています。検証済みのファイルには、値ごとに読み取った場所も記録されています。ファイルを開いてコピーやダウンロードができるほか、`oh-my-design.kr/<id>/design.md` から原文を直接取得できます。ここまでは CLI なしで使えます。",
      action: "アーカイブを開く",
    },
    cli: {
      name: "oh-my-design-cli",
      body: `コマンド一つで、フルバンドルの ${N.skills} スキル（${N.public} の公開スキルと、それらが呼び出す内部スキル）、${N.agents}個の専門エージェント、アーカイブのオフライン版が Claude Code、Codex、OpenCode、Cursor にインストールされます。各ツールには、そのツールが対応しているものだけが入ります。スキルはプロジェクトの DESIGN.md を用意し、UI を変更するたびにその内容に従います。`,
      action: "CLI をインストール",
    },
    installTitle: "インストール",
    installBody: "プロジェクトルートで実行してください。お使いのコーディングエージェントを検出し、どれにインストールするかを尋ねます。",
    afterInstall: "インストールが終わったら、エージェントを再起動して doctor を一度実行し、作りたい画面を言葉で説明してください。デーモン、API キー、MCP サーバーは必要ありません。",
    outcomesTitle: "依頼できること",
    outcomesLead: "スキル名を覚える必要はありません。作るものと変えてはいけないものを伝えれば、インストールしたスキルが合うワークフローを選びます。",
    outcomes: [
      {
        title: "デザインシステムを作る",
        description: "製品の説明と verified_v2 のリファレンス一つから、プロジェクト専用の DESIGN.md を作ります。誰も確認していない事実は入れません。",
        prompt: "家族向けの資産管理アプリに、落ち着きと信頼感のあるデザインシステムを作って。Toss を参考にしつつ、今のロゴと文言は変えないで。",
        result: "DESIGN.md、エージェント用の指示ファイル、リファレンスと異なるトークンの一覧、承認済みの最初の画面。",
      },
      {
        title: "画面を一つ完成させる",
        description: "調査、情報設計、ワイヤーフレーム、コンポーネント、文言、アクセシビリティ、検証を一つのワークフローで進め、途中で承認を求めます。",
        prompt: "このアプリのオンボーディングを設計から実装までやって。今の技術スタックは変えずに、DESIGN.md を基準にして。",
        result: "状態ごとの表示まで備えた動く画面、検証の記録、リポジトリ内の引き継ぎファイル。",
      },
      {
        title: "既存の UI を改善する",
        description: "今ある画面を点検し、製品の挙動は保ったまま、階層、リズム、アクセシビリティ、AI が作りがちなパターンを直します。",
        prompt: "URL とフォームのフィールド名は変えずに、料金ページを改善して。効果の大きい修正から説明して、結果も検証して。",
        result: "範囲を絞ったコード変更、変更の理由、実際に実行したチェック。",
      },
    ],
    qualityTitle: "ファイルをどこまで信頼できるか",
    qualityBody: `DESIGN.md にはそれぞれ品質グレードが付いています。verified_v2 ${N.verified}件は実際の製品と照らし合わせて確認したもので、値ごとに出典があります。公開する作業にはこのグレードを使ってください。partial ${N.partial}件は一部だけ確認済みで、legacy snapshot ${N.legacy}件は現在の形式ができる前に作られたファイルです。誰も確認できなかった値は、もっともらしい既定値で埋めずに省いています。`,
    nextTitle: "次のステップ",
    next: [
      { page: "getting-started", body: "インストールして確認し、目に見える変更を一つ加えます。" },
      { page: "workflows", body: "よくある作業を、そのまま使えるプロンプトにまとめています。" },
      { page: "skills", body: "公開スキルと、それぞれでできることを確認できます。" },
    ],
  },
  gettingStarted: {
    title: "クイックスタート",
    lead: "CLI をインストールして確認し、目に見える変更を一つ依頼します。所要時間は5分ほどです。",
    prerequisitesTitle: "必要なもの",
    prerequisites: ["Node.js 18以上", "プロジェクトのリポジトリ", "Claude Code、Codex、OpenCode、Cursor のいずれか"],
    stepsTitle: "手順",
    steps: [
      { title: "CLI をインストールする", body: "プロジェクトルートで実行してください。対話式のインストーラーがお使いのコーディングエージェントを検出し、選んだものにバンドル一式をインストールします。", command: CLI_INSTALL_COMMAND },
      { title: "エージェントを再起動して doctor を実行する", body: "再起動すると、エージェントが新しいスキルを読み込みます。doctor は実際にインストールされたファイルを確認し、カタログ、エージェント、DESIGN.md のうち足りないものを示します。", command: CLI_DOCTOR_COMMAND },
      { title: "DESIGN.md を用意する", body: "アーカイブから製品に近い企業を選ぶか、エージェントにおすすめを聞いてください。プロジェクトルートに書き込む前に、エージェントが DESIGN.md の内容を見せます。", prompt: "Toss のリファレンスをもとに、このプロジェクトの DESIGN.md を作って。うちのロゴと文言はそのままにして。" },
      { title: "目に見える変更を一つ依頼する", body: "実際の画面を一つ選んで始めてください。エージェントは質問する前に、DESIGN.md とコードを読みます。", prompt: "DESIGN.md に沿ってホーム画面を改善して。動作は変えずに、結果も検証して。" },
    ],
    channelsTitle: "ツールを指定してインストール",
    channelsLead: "質問なしで、指定したツールだけにインストールします。スクリプトや CI でもそのまま使えます。",
    channels: [
      { name: "Claude Code", body: "スキル、サブエージェント、カタログをインストールし、プロジェクトのフックを既存の設定に安全にマージします。", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "Codex", body: "スキル、指示を組み込んだエージェントロール、補助ツール、ローカルのリファレンスカタログをインストールします。", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "OpenCode", body: "スキル、ネイティブのサブエージェント、オフラインで使えるカタログをインストールします。プロジェクト単位のインストール先は `.opencode` です。`--global` を付けると `~/.config/opencode` に入り、`doctor --global` で確認できます。", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "ネイティブの Agent Skills 31 個、DESIGN.md 用の小さなブートストラップルール、共有カタログをインストールします。`--cursor-rule-only` は古いクライアントでのみ使ってください。", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ],
    rawTitle: "CLI なしで DESIGN.md を使う",
    rawBody: "アーカイブのファイルはすべてプレーンな Markdown です。ファイルのページからコピーやダウンロードができ、URL を指定すれば直接取得できます。エージェントもブラウザなしで読めます。",
    rawLinks: rawLinks(
      { href: "/llms.ja.txt", description: "エージェントが読むための、日本語のドキュメントとアーカイブの目次です。" },
      "1社分の DESIGN.md を、Markdown の原文のまま取得できます。リンク先は Toss のファイルです。",
      "README、主なスキル、アーカイブの一覧を1つにまとめたファイルです。英語で書かれています。",
    ),
    doneTitle: "画面が変わったら完了です",
    doneBody: "初回の実行がうまくいくと、目に見える改善とプロジェクトの DESIGN.md が残り、次に何を頼めばよいかも見えてきます。インストールがきれいに終わっただけでは、目標を達成したことになりません。",
  },
  demo: {
    title: "実際のプロダクトが変わる瞬間を見せる。",
    lead: "良い oh-my-design のデモは、スキル名を順に紹介する場ではありません。目に見える課題を一つ選び、既存の大切な挙動を守りながら、誰でも確認できる根拠とともに実際のルートで完了させます。",
    formatsTitle: "成果を証明できる最小の形式を選ぶ",
    formatsLead: "時間で削るのは作業範囲であり、根拠ではありません。開始前に形式を一つ選び、変更しないものも明示します。",
    formats: [
      { duration: "5分", title: "目に見える問題を一つ直す", when: "既存ページは動くものの、平凡または分かりにくい場合", goal: "挙動を維持しながら、階層・余白・状態・アクセシビリティのうち影響の大きい課題を一つ修正します。", proof: "変更前の表示、焦点を絞った差分、同じ実ルートで動く変更後の表示。" },
      { duration: "15分", title: "小さな画面を完成させる", when: "技術スタックとコンポーネントがあり、フローの範囲が明確な場合", goal: "プロジェクトのデザイン文脈を使い、小さな画面と loading・empty・error・success の各状態を実装します。", proof: "動作するルート、状態の網羅、変更ファイル、実際に実行したチェック。" },
      { duration: "30分", title: "チェックポイント付きハーネスを動かす", when: "新規または曖昧で、調査とデザインシステム判断が必要な場合", goal: "承認ゲートを省略せず、Discovery から Journey、DESIGN.md 提案、実装、検証まで進めます。", proof: "Journey、DESIGN.md patch、動作する UI、検証サマリー、3回のユーザーチェックポイント。" },
    ],
    runbookTitle: "繰り返し使える6ステップ",
    runbookLead: "ミートアップ、ワークショップ、画面収録でも同じ順序を使えます。CLI は環境を整え、UI の変更はコーディングエージェントがリポジトリ内で行います。",
    steps: [
      { title: "目に見える課題と、守る挙動を一つずつ決める", body: "実際のルートを開き、観客が確認する箇所を正確に示します。URL、データフロー、フィールド名、コピー、操作のうち変更してはいけないものも宣言します。" },
      { title: "バンドルを導入し、doctor で実態を確認する", body: "プロジェクトルートで2つのコマンドを実行し、導入後にコーディングエージェントを再起動します。インストール成功そのものを成果として見せないでください。", command: `${CLI_INSTALL_COMMAND}\n${CLI_DOCTOR_COMMAND}` },
      { title: "DESIGN.md と verified_v2 根拠を整合させる", body: "公開デモには verified_v2 リファレンスを選びます。既存の DESIGN.md と一緒に読み込ませ、その製品画面に属する根拠だけを採用し、不明なフォント、トークン、コンポーネントは空欄のままにします。" },
      { title: "実際の画面と重要な状態を実装する", body: "既存のスタックとコンポーネントを使います。新しいフローでは、静的な成功画面だけでなく、利用者が実際に遭遇する状態まで扱います。" },
      { title: "実ルートで監査する", body: "製品ルートを開いて保護した挙動を操作し、必要なアクセシビリティと interface-feel のチェックを行います。実行した検査と測定値だけを報告します。" },
      { title: "利用者からの修正を記録する", body: "視覚的な判断について修正を受けたら、その範囲だけを直し、omd:remember に残します。次のセッションで同じ誤りを繰り返さないためです。" },
    ],
    starterPromptTitle: "5分の改善デモで使うプロンプト",
    starterPrompt: "最初に DESIGN.md を読み、現在の製品ルートを確認してください。URL、データフロー、フィールド名、既存のユーザー挙動を維持したまま、このページで目に見える階層または状態の問題を一つ改善してください。公開デモには verified_v2 リファレンスを使い、この製品画面に属する根拠だけを整合させます。不明な値はフォールバックで埋めずに省略します。実際の画面へ実装し、重要な状態を扱ったうえで、そのルートを検証し、変更ファイルと実行したチェックを報告してください。DESIGN.md の拡張や必須ハーネスチェックポイントを越える前には確認してください。",
    proofTitle: "観客がその場で確認できる証拠",
    proofLead: "進行中に次の記録を残します。追跡できる過程がない美しいスクリーンショットだけでは、監査可能なデモになりません。",
    proof: ["変更前の画面と、最初に指摘した一つの課題", "保護する挙動まで含めた正確なプロンプト", "DESIGN.md の差分と、意図的に省略した未確認フィールド", "切り離したモックではなく、重要な状態を含む実際の製品ルート", "変更ファイルと、実際に行った検査または測定", "範囲を定めた永続的な好みとして記録したユーザー修正"],
    guardrailsTitle: "驚きを誠実に伝えるためのルール",
    guardrails: [
      { title: "CLI は導入と診断を担当します", body: "導入された文脈を読み、UI を変更するのはコーディングエージェントです。インストーラー単体が画面を生成したとは説明しません。" },
      { title: "不明なものは空欄のままです", body: "欠けたブランド情報をシステムフォント、汎用コンポーネント、推測トークン、別のマーケティング画面で補いません。" },
      { title: "演出より証拠を優先します", body: "実測した前後比較がなければ、速度、コンバージョン、アクセシビリティ、性能の向上を主張しません。" },
      { title: "必須チェックポイントは省略しません", body: "30分のハーネスでも Journey、DESIGN.md patch、検証の承認で停止します。ライブであることは省略の理由になりません。" },
    ],
  },
  workflows: { title: "そのまま使える作業目的", lead: "目的と制約を保ったまま、ドメインと画面を自分の製品に合わせて書き換えてください。", workflows: [
    { title: "ブランド文脈を始める", when: "新規プロジェクト、または DESIGN.md がない場合", prompt: "忙しい保護者向け食事計画アプリのデザインシステムを設定して。verified_v2 リファレンスを推薦し、差分を説明して、DESIGN.md を書く前に確認して。", outputs: ["リファレンス推薦", "DESIGN.md 提案", "エージェント接続ファイル"], skills: ["omd:init", "omd:sync"] },
    { title: "新しい画面を出荷する", when: "ページやフローを完成させる場合", prompt: "決済完了フローを成功・失敗・部分成功の状態で作って。DESIGN.md と既存コンポーネントを使い、アクセシビリティを検証して。", outputs: ["ユーザージャーニー", "動作するUI", "主要状態の網羅", "検証サマリー"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
    { title: "既存ページを改善する", when: "動くが製品らしさが弱い UI", prompt: "このダッシュボードで、製品の根拠なく繰り返される UI パターン、階層、密度、モーション、アクセシビリティを確認して。挙動を保ち、影響の大きい修正から適用して差分を示して。", outputs: ["優先順位付きの指摘", "焦点を絞ったパッチ", "変更前後の根拠"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
    { title: "好みの修正を記録する", when: "エージェントに好みを教える場合", prompt: "CTA に大文字は使わない。この好みをプロジェクトに記録し、ボタンの動作は変えずに現在の画面を修正して。", outputs: ["保留中の好み", "範囲付きUI修正", "DESIGN.md 反映提案"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
  ] },
  skills: {
    title: "スキル",
    lead: `ここに載っているのは ${N.public} の公開スキルです。oh-my-design-cli は、これらが呼び出す内部スキルを含むフルバンドルの ${N.skills} スキルと、${N.agents}個の専門エージェントをインストールします。名前を覚える必要はありません。ほしい結果を伝えれば、エージェントが合うスキルを選びます。使うスキルを自分で決めたいときは、名前で指定してください。`,
    groups: skillGroups({
      system: { title: "DESIGN.md を作って維持する", description: "プロジェクトの DESIGN.md を作成し、UI を変更するたびに適用します。" },
      build: { title: "画面を作る", description: "要件から始めて、実際のアセットを使った動く画面と引き継ぎ資料まで作ります。" },
      quality: { title: "品質を確かめる", description: "操作感、韓国語の組版、抑制、生成 UI にありがちなパターンを点検します。" },
      content: { title: "文章を書く", description: "事実とコマンドを保ったまま、5 言語の製品文を自然に整えます。" },
    }),
    descriptions: {
      "omd:init": "いちばん近い実在企業のリファレンスから DESIGN.md を用意します。",
      "omd:apply": "エージェントが UI を変えるたびに DESIGN.md を適用します。",
      "omd:autopilot": "プロンプト一つで新しい画面を設計・実装し、検証まで行います。",
      "omd:landing": "DESIGN.md をもとに、スクロール連動型のワンページランディングを作ります。",
      "omd:shader-hero": "DESIGN.md の2色で画面いっぱいのヒーローを作り、文字のコントラストを測ります。",
      "omd:cjk-type-shader": "日中韓の大見出しを、和紙ににじむ墨のように描きます。",
      "omd:feel": "数値化した113のインターフェース細部ルールで仕上げ・点検します。",
      "hangul": "韓国語の改行・字間・行間・フォントと画面の文言（つづり、エラーメッセージ、ボタン名、敬語）を、W3C、韓国語の正書法、韓国のデザインシステム、韓国の67サービスの実測値に沿って直し、点検します。",
      "omd:restraint": "焦点、文字サイズ、余白を測り、ページに要らないものを削ります。",
      "omd:slop-audit": "製品上の理由がない生成 UI パターンを、ルール ID と行番号付きで見つけます。",
      "omd:humanize": "5言語の文章を自然に整えます。事実とコマンドはそのまま残します。",
    },
    pages: { hangul: { href: "/hangul", label: "/hangul の紹介（英語）" } },
    routingTitle: "スキル名の指定は任意です",
    routingBody: "「この決済画面を改善して、検証して」と頼むほうが、スキルを4つ手作業でつなぐよりうまくいきます。名前は、特定のスキルを使いたいときにだけ指定してください。",
  },
  antiSlop: {
    title: "製品に即した判断を欠くパターンの反復を AI slop と捉える",
    lead: "作り手や使用ツールは推定しません。製品の目的や根拠よりも見慣れた表現が優先され、情報の階層や信頼性が弱くなった箇所を AI slop として記録します。",
    definitionTitle: "一つのパターンだけでは判定しません",
    definitionBody: "角丸カード、紫色、中央揃えのヒーロー、短い見出しは、いずれも正当な選択になり得ます。理由のない既定パターンが同じ画面で重なり、製品固有の情報構造やブランドらしさを消しているかを確認します。",
    definitionNote: "制作に使われたツールは判定できません。確認するのは判断の痕跡です。なぜこの構造と文言がこの製品に必要なのか、説明できる根拠が残っているかを見ます。",
    principlesTitle: "すべての指摘に適用する四つの原則",
    principles: [
      { title: "まず製品を理解する", body: "対象ユーザー、目的、既存の挙動、DESIGN.md を、一般的なアンチパターン一覧より優先します。" },
      { title: "単発の特徴ではなく重なりを見る", body: "一つの特徴だけで結論を出しません。繰り返しの頻度、併存するパターン、実際の影響を合わせて判断します。" },
      { title: "品質上の不具合と分ける", body: "コントラスト、フォーカス、要素のはみ出し、壊れた状態は品質の問題です。「AI っぽい」という一言でまとめません。" },
      { title: "必要な範囲だけ直す", body: "挙動と内容は維持します。新しいスタイルを重ねる前に、影響の大きい反復だけを解消します。" },
    ],
    atlasTitle: "生成 UI を見直すための10の観点",
    atlasLead: "禁止事項ではなく、デザインレビューの問いとして使います。収束しやすい既定値、設計者が守る判断、その表現が妥当になる条件を並べました。",
    slopSignalLabel: "収束しやすい既定値",
    designerPreferenceLabel: "設計者が守る判断",
    validWhenLabel: "妥当になる条件",
    lenses: [
      { id: "hierarchy", title: "優先度が構図を決める", question: "ラベルをすべて読む前に、何が重要か分かりますか。", slop: "すべてのセクションに同じ見出し、カード数、配置、視覚的な重さを与えます。", preference: "主要な操作を最も強い位置に置き、補助情報は重要度に合わせて静かに扱います。", validWhen: "反復が実際の手順、比較、同種のエンティティを表す場合です。", ruleIds: ["LAYOUT-01", "LAYOUT-05", "TYPE-01"] },
      { id: "containers", title: "コンテナは境界を説明する", question: "各ボックスは対象、操作、選択、レイヤーのいずれかですか。", slop: "セクションをカードで囲み、その中のパネルや説明も再びカードで囲みます。", preference: "まず余白、整列、文字組み、区切り線を使い、境界に意味があるときだけ箱を足します。", validWhen: "個別に移動、選択、閉じる、再利用する面の場合です。", ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-03"] },
      { id: "typography", title: "文字組みが読み方を示す", question: "この画面は、拾い読み、熟読、比較、操作のどれに使われますか。", slop: "流行の書体、近いサイズ、反復する kicker、過剰な display 表現が階層を平らにします。", preference: "用途に合わせて行長、ウェイト、行間、対比を調整し、領域内の役割を安定させます。", validWhen: "一書体でも意図した階層が明確で、製品の声に合う場合です。", ruleIds: ["TYPE-01", "TYPE-02", "TYPE-03"] },
      { id: "color", title: "色と奥行きに役割を持たせる", question: "アクセント、面、影、角丸の役割を説明できますか。", slop: "グラデーション文字、発光、ガラス、大きな角丸、ぼかした影が同時に強調を求めます。", preference: "色をブランド、操作、状態、選択に対応させ、一つの層では境界か elevation の方式を一つに絞ります。", validWhen: "素材と配色にブランドの根拠があり、コントラストと状態の判別を保つ場合です。", ruleIds: ["COLOR-01", "VISUAL-04", "VISUAL-05"] },
      { id: "evidence", title: "装飾より実物を見せる", question: "製品の主張を、画面上の何で確かめられますか。", slop: "汎用アイコン、架空の数値、ぼかし球、仮のダッシュボードが製品の中身を代用します。", preference: "実際のフロー、アセット、データ形状、状態変化、確認済みの制約を見せます。", validWhen: "イラストがブランドの物語を担うか、製品画面だけでは説明しにくい内容を補う場合です。", ruleIds: ["EVIDENCE-01", "VISUAL-02", "VISUAL-06"] },
      { id: "density", title: "密度を作業に合わせる", question: "関係するものは近く、別のまとまりは十分離れていますか。", slop: "設定、表、紹介文、モバイル操作に同じ広い padding を当てます。", preference: "まとまりの中は密に、まとまりの間は明確に。運用画面では展示用の余白より比較しやすさを優先します。", validWhen: "集中した手続きや編集的な場面で、広い余白が認知負荷を下げる場合です。", ruleIds: ["LAYOUT-05", "DENSITY-01", "DENSITY-02"] },
      { id: "states", title: "不完全な状態まで製品に含める", question: "成功の前後や失敗時に何が表示されますか。", slop: "整った成功画面だけがあり、空、読込中、エラー、権限、長文の状態がありません。", preference: "状態変化を情報設計に含め、それぞれで取れる次の操作を示します。", validWhen: "静的な視覚研究であることを明示し、本番準備済みとは主張しない場合です。", ruleIds: ["STATE-01", "STATE-02", "COPY-04"] },
      { id: "responsive", title: "レスポンシブで優先度を組み替える", question: "空間が減ると、何を移動、積層、省略しますか。", slop: "デスクトップの列を縮めるだけで、文章や操作、ローカライズ文が枠を壊します。", preference: "読む順序と主要タスクを守り、関係が収まらなくなった時点で構図を変えます。", validWhen: "横スクロールが明示されたデータやメディアの閲覧方法である場合です。", ruleIds: ["LAYOUT-06", "RESPONSIVE-01", "LOCALE-02"] },
      { id: "motion", title: "動きで変化を説明する", question: "動きはフィードバック、起点、連続性、空間関係の何を伝えますか。", slop: "静的な画面を高級に見せるため、すべてが浮き、弾み、順番に現れます。", preference: "印象的な場面を一つ選び、反応は速く中断可能にし、reduced motion を尊重します。", validWhen: "環境的な動きが製品体験の一部で、読解や操作と競合しない場合です。", ruleIds: ["MOTION-01", "MOTION-02", "MOTION-03"] },
      { id: "interaction", title: "操作の契約を揃える", question: "各コントロールの見た目、名称、結果は実際の動作と一致しますか。", slop: "異なる振る舞いがないまま pill、badge、button、tab、modal の種類だけが増えます。", preference: "操作を具体的に命名し、必要な状態は URL に残し、モーダルは短く閉じた作業に限定します。", validWhen: "種類が検証済みの状態、権限、危険度、専門作業を区別する場合です。", ruleIds: ["COMP-01", "COMP-02", "COMP-03"] },
    ],
    directionsTitle: "Anti-slop はミニマリズムの別名ではない",
    directionsLead: "設計者が密かに好む単一の見た目はありません。作業に合い、内部の論理が通り、テンプレート以上に実行された方向を好みます。",
    directions: [
      { id: "editorial", title: "表現的なエディトリアル", body: "発見や物語が目的なら、大きな文字、独自の構図、画像、ゆっくりした間が適します。", proof: "印象が流行のランディングキットではなく、題材そのものから生まれています。" },
      { id: "product", title: "高密度の製品ツール", body: "繰り返し比較し操作するなら、表、コンパクトな操作、持続するナビゲーション、控えめな文字組みが適します。", proof: "密度の中でもまとまりと視線経路が明確で、実データと状態に耐えます。" },
      { id: "service", title: "集中したサービスフロー", body: "信頼と完了が重要なら、静かな一列、慣れた操作、平易な言葉が適します。", proof: "単純さが判断不足を隠すのではなく、利用者の迷いを減らします。" },
    ],
    compareTitle: "意図を保ち、製品に即した判断を明確にする",
    compareLead: "画面、文言、多言語の例を切り替えて比較できます。変更後の例は元の目的を保ちながら、慣習的な装飾を具体的な判断へ置き換えています。",
    beforeLabel: "ありがちなパターン",
    afterLabel: "OmD の改善案",
    detectedLabel: "変更した理由",
    specimen: { nextGen: "次世代", verified: "検証済み", reference: "01 — リファレンス", output: "出力", nextStep: "次のアクションを一つに絞る" },
    specimenUi: {
      dashboard: "ダッシュボード", release: "リリース", settings: "設定", introducing: "新しいドキュメント",
      typographyTitle: "チームで使う DESIGN.md", typographyBody: "プロダクトの根拠と確認済みルールを一か所で管理します。",
      newLabel: "新規", docsLabel: "ドキュメント", checkout: "支払い", verify: "検証", artifact: "成果物",
      time: "時刻", route: "パス", status: "状態", desktop: "デスクトップ", notifications: "通知", all: "すべて", open: "進行中",
    },
    examples: [
      {
        id: "writing",
        tab: "文言",
        beforeTitle: "パワフルでシームレスな体験で、ワークフローを次のレベルへ。",
        beforeBody: "一つのインテリジェントなソリューションで、すべてのプロジェクトを革新的に進化させます。",
        afterTitle: "リファレンスを選び、検証済みのルールを DESIGN.md に保存します。",
        afterBody: "未確認のフォントやコンポーネントは追加しません。エージェントが読むのは、カタログで裏づけられた情報だけです。",
        beforeSignals: ["抽象的な賛辞", "操作が不明", "定型的なリズム"],
        afterSignals: ["具体的な操作", "確認できる結果", "根拠の範囲"],
        ruleIds: ["COPY-01", "COPY-03", "EVIDENCE-01"],
        reason: "実際以上の効果をうたわず、すでにある機能と制約を先に示しました。",
      },
      {
        id: "locale",
        tab: "多言語",
        beforeTitle: "AI エージェントを通じて、デザイン作業を実行することができます。",
        beforeBody: "英語の主語や語順を保ったまま翻訳すると、五つの言語が独立した文章ではなく、文字だけを入れ替えたように見えます。",
        afterTitle: "AI エージェントが DESIGN.md を読み、製品画面を改善します。",
        afterBody: "コマンドと製品の挙動は変えません。主語、文の長さ、用語、情報の順序は各言語で組み直します。",
        beforeSignals: ["「を通じて」の直訳", "「することができます」の反復", "語順の継承"],
        afterSignals: ["明確な動作", "保護された事実", "言語ごとの原稿"],
        ruleIds: ["LOCALE-01", "LOCALE-02", "COPY-02"],
        reason: "多言語の整合性は文の形をそろえることではなく、同じ意味が各言語で自然に伝わることです。",
      },
      {
        id: "interface",
        tab: "画面",
        beforeTitle: "装飾がレイアウトを決める画面",
        beforeBody: "グラデーションのヒーローセクション、アイコンタイル、入れ子のカード、左側のアクセント線、同じ3列構成が、内容の役割より先に目に入ります。",
        afterTitle: "ユーザーの作業がレイアウトを決める画面",
        afterBody: "ブランドらしさを担う表現は一つに絞ります。手順は時系列に並べ、比較は左右に分け、独立した対象だけをカードにします。",
        beforeSignals: ["入れ子のカード", "繰り返されるアイコンタイル", "役割のないアクセント線"],
        afterSignals: ["コンテンツ中心の階層", "必要最小限のコンテナ", "一つに絞った視覚表現"],
        ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-01", "VISUAL-02"],
        reason: "別の流行へ置き換えたのではありません。対象や操作を表していないコンテナだけを減らしました。",
      },
    ],
    classifierTitle: "三つのラベルを混同しない",
    classifierLead: "パターンの収束、製品品質、好みを分けると、指摘の根拠が明確になり、個人の好みを基準として押しつけずに済みます。",
    classifications: [
      { label: "SLOP", title: "文脈のないパターンの重なり", body: "製品に即した根拠のない既定パターンが重なり、情報の階層、信頼性、ブランドの識別性を損ないます。" },
      { label: "QUALITY", title: "検証可能な不具合", body: "アクセシビリティ、要素のはみ出し、壊れた状態、性能、挙動のいずれかが、テストや製品仕様を満たしていません。" },
      { label: "PREFERENCE", title: "妥当なデザイン上の選択", body: "ブリーフと DESIGN.md に合う選択です。別案があっても、不具合ではありません。" },
    ],
    workflowTitle: "スタイルを全面変更せず、見つけて、直して、確かめる",
    workflowLead: "根拠の確認から始め、必要最小限の修正で終えます。先に別の流行を選ぶことはしません。",
    workflow: [
      { title: "製品画面を読む", body: "対象ユーザー、中心となる操作、守る挙動、デザイン上の根拠を最初に整理します。" },
      { title: "再現可能な観測結果を集める", body: "DOM、CSS、反復、行番号、ブラウザの結果を記録してから文脈を判断します。" },
      { title: "パターンの重なりを確認する", body: "頻度、隣接パターン、DESIGN.md の例外、画面への影響を照合し、根拠のない指摘は除きます。" },
      { title: "範囲を絞って直す", body: "製品の階層を取り戻すために必要なコンテナ、文言、視覚処理だけを変更します。" },
      { title: "同じ画面で再確認する", body: "変更前と同じ条件で、デスクトップとモバイルの表示、操作、アクセシビリティ、言語設定を検証します。" },
    ],
    sourcesTitle: "判断基準に使ったリサーチ",
    sourcesLead: "分類体系は OmD で定義しました。意味の保持、パターンの重なり、根拠を優先する考え方は、以下の公開プロジェクトを参照しています。",
    sources: [
      { label: "im-not-ai", href: "https://github.com/epoko77-ai/im-not-ai", note: "韓国語の翻訳調を分類し、意味を保ったまま局所的に直す方法。" },
      { label: "Humanizer", href: "https://github.com/blader/humanizer", note: "単語一つではなく、複数の兆候を見て意味を保ちながら直す方法。" },
      { label: "stop-slop", href: "https://github.com/hardikpandya/stop-slop", note: "不要な前置き、定型的な対比、曖昧な主張、具体性と読み手の信頼。" },
      { label: "Impeccable Slop Detector", href: "https://impeccable.style/slop/", note: "slop パターンと一般的な品質問題を分けた公開カタログ。" },
      { label: "Taste Skill", href: "https://github.com/leonxlnx/taste-skill", note: "依頼内容と対象ユーザーを先に読み、生成時の既定パターンを抑える考え方。" },
      { label: "Anthropic frontend-design", href: "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md", note: "題材に根ざした方向、一つの根拠ある特徴、抑制、実装前後の批評。" },
      { label: "Vercel Web Interface Guidelines", href: "https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md", note: "実運用の操作、長い内容、レスポンシブ、状態、動き、多言語の確認。" },
      { label: "Carbon Design System", href: "https://carbondesignsystem.com/elements/spacing/overview/", note: "作業に応じた密度、空間のまとまり、グリッド、productive と expressive の文字組み。" },
      { label: "W3C Cards", href: "https://design-system.w3.org/components/cards.html", note: "装飾的な箱より、内容を優先する順序とアクセシブルなカード境界。" },
      { label: "GOV.UK Design System", href: "https://design-system.service.gov.uk/styles/layout/", note: "読みやすい行長、小画面優先の構成、具体的な操作、部品の使用条件。" },
      { label: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/layout", note: "優先度、グルーピング、適応する階層、段階的な開示、プラットフォーム文脈。" },
      { label: "Atlassian Elevation", href: "https://atlassian.design/foundations/elevation", note: "レイヤーと操作に基づく奥行き。持ち上げる必要がなければ余白や境界を使う指針。" },
      { label: "Microsoft Language Style Guides", href: "https://learn.microsoft.com/globalization/reference/microsoft-style-guides", note: "韓国語、日本語、簡体字、繁体字を独立したロケールとして扱う指針。" },
      { label: "Primer Product UI Patterns", href: "https://primer.style/product/ui-patterns/", note: "空状態、読み込み、縮退、ナビゲーション、保存を実際のプロダクトフローとして扱う指針。" },
      { label: "Carbon Data Table", href: "https://carbondesignsystem.com/components/data-table/usage/", note: "作業に合った行密度、揃った見出し、ツールバーの役割、カードではなく表を選ぶ条件。" },
      { label: "Fluent 2 Card", href: "https://fluent2.microsoft.design/components/web/react/core/card/usage", note: "カードは一つの概念やオブジェクトを表し、内部の階層と操作もその境界に合わせるという原則。" },
      { label: "Fluent 2 Shapes", href: "https://fluent2.microsoft.design/shapes", note: "長方形、円、ピル、ポップオーバーの役割と、サイズや文脈に応じた角丸の使い分け。" },
      { label: "USWDS Card", href: "https://designsystem.digital.gov/components/card/", note: "カードはモジュール型の要約に使い、装飾、単純な CTA、表、連続文の代わりにはしないという条件。" },
      { label: "Primer Empty and Loading States", href: "https://primer.style/product/ui-patterns/empty-states/", note: "状態の説明、復旧操作、進行範囲、読み込みを表示する時機まで画面設計に含める指針。" },
    ],
  },
};

const zhCn: BaseDictionary = {
  localeName: "简体中文",
  metaDescription: "oh-my-design 使用指南：从资料库中选一份真实公司的 DESIGN.md，安装 oh-my-design-cli，再让 AI 编程助手按这份文件构建界面。",
  ui: {
    docs: "文档",
    menu: "菜单",
    language: "语言",
    copy: "复制",
    copied: "已复制",
    copyFailed: "复制失败",
    copyPage: "复制本页",
    pageCopied: "已复制本页",
    pageTools: "页面工具",
    onThisPage: "本页内容",
    previous: "上一页",
    next: "下一页",
    pagination: "文档翻页",
    prompt: "提示词",
    terminal: "终端",
    result: "结果",
    verified: "验证",
    skillsLabel: "技能",
  },
  nav: {
    overview: "概览",
    "getting-started": "快速开始",
    workflows: "工作流",
    demo: "现场演示",
    skills: "技能",
    "anti-slop": "AI slop 判定标准",
  },
  navGroups: {
    start: "入门",
    guides: "指南",
    reference: "参考资料",
  },
  overview: {
    title: "DESIGN.md 资料库与 oh-my-design-cli",
    lead: `oh-my-design 由两部分组成。资料库收录了 ${N.refs} 份 DESIGN.md，内容都取自真实公司的产品；oh-my-design-cli 会安装一组技能，让 AI 编程助手在修改界面之前先读取 DESIGN.md。`,
    partsTitle: "资料库与 CLI",
    archive: {
      name: "资料库",
      body: "每份 DESIGN.md 记录一家公司的颜色、字体、间距、组件和语气；经过验证的文件还会标明每个值的出处。打开文件后可以复制或下载，也可以直接从 `oh-my-design.kr/<id>/design.md` 获取原始文件。以上操作都不需要 CLI。",
      action: "打开资料库",
    },
    cli: {
      name: "oh-my-design-cli",
      body: `一条命令就能把完整套件的 ${N.skills} 个技能（${N.public} 个公开技能和它们调用的内部技能）、${N.agents} 个专业智能体和资料库的离线副本安装到 Claude Code、Codex、OpenCode 和 Cursor，每个工具只安装它支持的部分。这些技能会为项目建立 DESIGN.md，之后每次修改 UI 都以它为准。`,
      action: "安装 CLI",
    },
    installTitle: "安装",
    installBody: "在项目根目录运行这条命令。它会检测你正在使用的 AI 编程助手，并让你选择要安装到哪些工具。",
    afterInstall: "安装完成后，重启 AI 编程助手，运行一次 doctor，然后描述你想要的界面。无需守护进程、API Key 或 MCP 服务器。",
    outcomesTitle: "可以这样提需求",
    outcomesLead: "不需要知道技能名。说清楚要做什么、哪些地方不能改，已安装的技能会选择合适的工作流。",
    outcomes: [
      {
        title: "建立设计系统",
        description: "根据产品说明和一份 verified_v2 参考，为项目建立自己的 DESIGN.md。未经核实的事实不会写入。",
        prompt: "为我们的家庭理财应用建立一套沉稳、值得信赖的设计系统。参考 Toss，但保留现有的 Logo 和文案。",
        result: "DESIGN.md、AI 编程助手的指令文件、与参考不同的 token 清单，以及经你确认的第一个界面。",
      },
      {
        title: "完整交付一个界面",
        description: "调研、信息架构、线框图、组件、文案、无障碍和验证在同一个工作流里完成，需要审批的节点会停下来等你确认。",
        prompt: "设计并实现这个应用的新用户引导流程。保留现有技术栈，以 DESIGN.md 为准。",
        result: "覆盖各种状态的可运行界面、验证记录，以及仓库中的交接文件。",
      },
      {
        title: "打磨现有 UI",
        description: "先检查现有界面，在不改变产品行为的前提下，修正层级、节奏、无障碍问题和常见的 AI 界面套路。",
        prompt: "优化定价页，但不要改动 URL 和表单字段名。先说明效果最大的几处修改，再验证结果。",
        result: "范围明确的代码改动、每处改动的理由，以及实际运行过的检查。",
      },
    ],
    qualityTitle: "文件可信到什么程度",
    qualityBody: `每份 DESIGN.md 都标有质量等级。verified_v2 ${N.verified} 份已对照实际产品核实，每个值都附有来源，要公开发布的内容请使用这一等级。partial ${N.partial} 份只有部分内容经过核实；legacy snapshot ${N.legacy} 份制作于当前格式出现之前。无法核实的值会直接省略，不会用看似合理的默认值填补。`,
    nextTitle: "下一步",
    next: [
      { page: "getting-started", body: "安装并检查，然后做出一处看得见的改动。" },
      { page: "workflows", body: "把常见任务整理成可以直接使用的提示词。" },
      { page: "skills", body: "查看公开技能，以及每个技能的作用。" },
    ],
  },
  gettingStarted: {
    title: "快速开始",
    lead: "安装 CLI 并检查安装结果，然后提出一处看得见的改动。大约需要 5 分钟。",
    prerequisitesTitle: "准备工作",
    prerequisites: ["Node.js 18 或更高版本", "一个项目代码仓库", "Claude Code、Codex、OpenCode、Cursor 任选其一"],
    stepsTitle: "操作步骤",
    steps: [
      { title: "安装 CLI", body: "在项目根目录运行。交互式安装会检测你已经在用的 AI 编程助手，并把完整套件安装到你选中的工具中。", command: CLI_INSTALL_COMMAND },
      { title: "重启 AI 编程助手并运行 doctor", body: "重启后，AI 编程助手才会加载新技能。doctor 会检查实际安装的文件，并指出参考目录、智能体、DESIGN.md 中缺了哪些。", command: CLI_DOCTOR_COMMAND },
      { title: "建立 DESIGN.md", body: "在资料库里挑一家与你的产品相近的公司，或者让 AI 编程助手推荐。写入项目根目录之前，它会先把 DESIGN.md 展示给你。", prompt: "以 Toss 为参考，为这个项目建立 DESIGN.md。我们的 Logo 和文案保持不变。" },
      { title: "提出一处看得见的改动", body: "从一个真实的界面开始。AI 编程助手会先读取 DESIGN.md 和代码，然后才向你提问。", prompt: "按照 DESIGN.md 改进首页。保持现有行为不变，并验证结果。" },
    ],
    channelsTitle: "只安装到一个工具",
    channelsLead: "跳过交互提问，直接安装到指定工具。这些命令也可以在脚本和 CI 中使用。",
    channels: [
      { name: "Claude Code", body: "安装技能、子代理和参考目录，并把项目 hooks 安全地合并到现有设置中。", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "Codex", body: "安装技能、内置指令的智能体角色、辅助工具和本地参考目录。", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "OpenCode", body: "安装技能、原生子代理和离线参考目录。项目级安装位于 `.opencode`；使用 `--global` 时安装到 `~/.config/opencode`，并用 `doctor --global` 检查。", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "安装原生 Agent Skills 31 个、一条精简的 DESIGN.md 引导规则和共享参考目录。仅在旧版客户端上使用 `--cursor-rule-only`。", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ],
    rawTitle: "不安装 CLI 也能用 DESIGN.md",
    rawBody: "资料库里的文件都是普通的 Markdown。可以在文件页面复制或下载，也可以直接用 URL 获取。AI 编程助手不需要浏览器也能读取。",
    rawLinks: rawLinks(
      { href: "/llms.zh-cn.txt", description: "供 AI 编程助手读取的简体中文文档与资料库索引。" },
      "一家公司的 DESIGN.md 原始 Markdown。这个链接打开的是 Toss 的文件。",
      "README、主要技能和资料库清单汇总在一个文件里，内容为英文。",
    ),
    doneTitle: "界面变了才算完成",
    doneBody: "首次运行顺利的话，界面会有看得见的改进，项目里会多出一份 DESIGN.md，下一步该提什么需求也会很清楚。单纯安装成功并不是目标。",
  },
  demo: {
    title: "让观众看到真实产品发生变化。",
    lead: "优秀的 oh-my-design 演示不是逐个介绍技能名。它从一个看得见的问题开始，保护产品依赖的既有行为，最后回到真实路由，并给出任何人都能核验的证据。",
    formatsTitle: "选择能证明结果的最小演示规格",
    formatsLead: "时间限制的是范围，不是诚实程度。开始前先选一种规格，并说明哪些内容不会被更改。",
    formats: [
      { duration: "5 分钟", title: "修复一个可见缺陷", when: "现有页面能用，但显得普通或难以理解", goal: "保留行为，只修复一个影响最大的层级、间距、状态或无障碍问题。", proof: "修改前画面、聚焦差异，以及同一真实路由上的修改后效果。" },
      { duration: "15 分钟", title: "交付一个完整小界面", when: "项目已有技术栈和组件，流程范围也已明确", goal: "基于项目设计上下文，实现一个小界面及加载、空白、错误和成功状态。", proof: "可运行路由、状态覆盖、变更文件和实际执行的检查。" },
      { duration: "30 分钟", title: "运行带检查点的完整流程", when: "界面较新或模糊，需要调研与设计系统决策", goal: "不跳过审批门槛，从发现、用户旅程、DESIGN.md 提案推进到实现和验证。", proof: "用户旅程、DESIGN.md 补丁、可运行 UI、验证摘要和三次用户检查点。" },
    ],
    runbookTitle: "可重复使用的六步流程",
    runbookLead: "无论是技术聚会、工作坊还是录屏，都可以使用同一顺序。CLI 负责准备环境，真正的 UI 工作由 AI 编程助手在代码仓库中完成。",
    steps: [
      { title: "确定一个可见问题和一项受保护行为", body: "打开真实路由，准确指出观众需要观察的问题。然后声明 URL、数据流、字段名、文案或交互中哪些内容不得更改。" },
      { title: "安装套件并让 doctor 检查实际状态", body: "在项目根目录运行两个命令，安装后重启 AI 编程助手。安装成功只是准备工作，不是演示结果。", command: `${CLI_INSTALL_COMMAND}\n${CLI_DOCTOR_COMMAND}` },
      { title: "对齐 DESIGN.md 与 verified_v2 证据", body: "公开演示请选择 verified_v2 参考。让代理与现有 DESIGN.md 一起读取，只采用属于当前产品界面的证据；未知字体、token 和组件声明留空。" },
      { title: "实现真实界面及关键状态", body: "继续使用现有技术栈和组件。新流程不要只打磨静态成功画面，还要覆盖用户真正可能遇到的状态。" },
      { title: "在真实路由上审计", body: "打开产品路由，实际操作受保护行为，并运行相关无障碍与 interface-feel 检查。只报告真正执行过的检查和测量。" },
      { title: "记录用户的修正", body: "用户修正某个视觉决定时，只修正对应范围，并用 omd:remember 记录，避免下次会话重犯。" },
    ],
    starterPromptTitle: "适合现场修复的提示词",
    starterPrompt: "先阅读 DESIGN.md 并检查当前产品路由。在保留 URL、数据流、字段名和现有用户行为的前提下，修复这个页面中一个可见的层级或状态问题。公开演示请使用 verified_v2 参考，并只对齐属于该产品界面的证据；未知值不要用 fallback 填充，直接省略。在真实界面中实现改动并覆盖关键状态，然后验证该路由，报告变更文件和真正执行过的检查。扩展 DESIGN.md 或越过必需的流程检查点之前先征求我的确认。",
    proofTitle: "观众应当能够核验的证据",
    proofLead: "在演示过程中同步保留这些记录。只有精美截图而没有可追溯过程，并不算可审计演示。",
    proof: ["原始页面和一开始指出的可见问题", "包含受保护行为的完整提示词", "DESIGN.md 差异以及主动省略的未知字段", "包含关键状态的真实产品路由，而不是独立模型", "变更文件和真正运行的检查或测量", "作为持久且有明确范围的偏好记录下来的用户修正"],
    guardrailsTitle: "让惊喜建立在事实之上",
    guardrails: [
      { title: "CLI 负责安装和诊断", body: "AI 编程助手读取已安装的上下文并修改 UI。安装器本身不会生成界面。" },
      { title: "未知信息留空", body: "不要用系统字体、通用组件、推测 token 或相邻营销页面填补缺失的品牌事实。" },
      { title: "证据优先于表演", body: "没有真实前后测量，就不要宣称速度、转化率、无障碍或性能获得提升。" },
      { title: "必需检查点不得跳过", body: "30 分钟流程仍会在用户旅程、DESIGN.md 补丁和验证审批处停下。现场观众不是跳过它们的理由。" },
    ],
  },
  workflows: { title: "可直接改写的任务目标", lead: "保留目标和约束，再把业务领域和界面换成你的产品。", workflows: [
    { title: "建立品牌上下文", when: "新项目或没有 DESIGN.md", prompt: "为忙碌家长的餐食规划应用建立设计系统。推荐 verified_v2 参考，解释差异，并在写入 DESIGN.md 前让我确认。", outputs: ["参考推荐", "DESIGN.md 方案", "代理连接文件"], skills: ["omd:init", "omd:sync"] },
    { title: "交付新界面", when: "完整页面或流程", prompt: "构建支付完成流程，包含成功、失败和部分成功状态。使用 DESIGN.md 和现有组件，并验证无障碍。", outputs: ["用户旅程", "可运行 UI", "关键状态全覆盖", "验证摘要"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
    { title: "改进现有页面", when: "能用但缺少产品特征的 UI", prompt: "检查这个仪表盘中缺少产品依据的重复模式、层级、密度、动效和无障碍。保留行为，先应用影响最大的修复，再展示差异。", outputs: ["按优先级排列的问题", "聚焦补丁", "前后依据"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
    { title: "记录偏好修正", when: "教代理你的偏好", prompt: "我们的 CTA 不使用全大写。把这个偏好记录到项目中，保持按钮行为并修正当前页面。", outputs: ["待处理偏好", "有范围的 UI 修正", "DESIGN.md 合并建议"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
  ] },
  skills: {
    title: "技能",
    lead: `这里列出的是 ${N.public} 个公开技能。oh-my-design-cli 会安装完整套件的 ${N.skills} 个技能（含这些技能调用的内部技能）和 ${N.agents} 个专业智能体。不需要记住它们的名字：描述你想要的结果，AI 编程助手会选择合适的技能。需要精确控制时，再写出技能名。`,
    groups: skillGroups({
      system: { title: "建立并维护 DESIGN.md", description: "创建项目的 DESIGN.md，并在每次修改 UI 时应用它。" },
      build: { title: "构建界面", description: "从需求开始，做出使用真实素材、可以运行的界面，并完成交接。" },
      quality: { title: "检查质量", description: "检查交互手感、韩文排版、克制程度和生成式 UI 模式。" },
      content: { title: "撰写文案", description: "保留事实与命令，把五种语言的产品文案改得自然。" },
    }),
    descriptions: {
      "omd:init": "选出最接近的真实公司参考，据此建立 DESIGN.md。",
      "omd:apply": "让 AI 编程助手每次修改 UI 时都遵循 DESIGN.md。",
      "omd:autopilot": "根据一条提示词设计并实现新界面，然后完成验证。",
      "omd:landing": "根据 DESIGN.md 制作滚动式单页落地页。",
      "omd:shader-hero": "用 DESIGN.md 里的两种颜色制作全幅首屏，并测量文字对比度。",
      "omd:cjk-type-shader": "把韩文、日文或中文大标题渲染成韩纸上晕开的墨迹。",
      "omd:feel": "应用或检查 113 条基于测量的界面手感规则。",
      "hangul": "按照 W3C 规范、韩文正字法、韩国设计系统和 67 个韩国服务的实测值，修正并检查韩文的换行、字距、行高、字体和界面文案（拼写、错误信息、按钮名称、敬语）。",
      "omd:restraint": "测量焦点、字号和留白，删去页面不需要的元素。",
      "omd:slop-audit": "找出缺少产品依据的生成式 UI 模式，并标注规则 ID 和代码位置。",
      "omd:humanize": "润色五种语言的文案，让它读起来自然，同时保留事实和命令。",
    },
    pages: { hangul: { href: "/hangul", label: "/hangul 介绍（英文）" } },
    routingTitle: "技能名可以不写",
    routingBody: "直接说“改进这个支付页并验证结果”，比自己串联四个技能效果更好。只有想用某个特定技能时，才需要写出它的名字。",
  },
  antiSlop: {
    title: "我们把没有产品依据却反复套用的模式称为 AI slop",
    lead: "这里不判断作者，也不猜使用了哪种工具。只有当熟悉的默认模式代替了产品目的和依据，并开始削弱信息层级与信任时，才会记录为 AI slop。",
    definitionTitle: "单个视觉特征不足以定性",
    definitionBody: "圆角卡片、紫色、居中的首屏和短标题都可能适合某个产品。需要检查的是：没有理由的默认模式是否在同一页面反复叠加，并抹平了产品自己的信息结构和品牌特征。",
    definitionNote: "我们无法从页面判断制作工具，只能检查设计决定是否有迹可循。每条结论都应回答：为什么这个结构和这句话适合当前产品？",
    principlesTitle: "每条结论都遵循四项原则",
    principles: [
      { title: "先了解产品", body: "目标用户、核心任务、现有行为和 DESIGN.md，优先于通用的反模式清单。" },
      { title: "看组合，不看单个特征", body: "不会因为一个圆角或一种颜色就下结论。重复频次、同时出现的模式和实际影响都要一起判断。" },
      { title: "把质量问题单独标记", body: "对比度、焦点状态、内容溢出和异常状态属于质量问题，不用“像 AI”来笼统描述。" },
      { title: "只改必要的部分", body: "保留产品行为和内容。优先处理影响最大的重复组合，不另套一套新风格。" },
    ],
    atlasTitle: "审查生成式 UI 的十个角度",
    atlasLead: "把它们当作设计评审问题，而不是禁用清单。每项都列出容易趋同的默认做法、设计师通常会保护的判断，以及该模式仍然合理的条件。",
    slopSignalLabel: "趋同的默认做法",
    designerPreferenceLabel: "设计师会保护的判断",
    validWhenLabel: "仍然适用的条件",
    lenses: [
      { id: "hierarchy", title: "由优先级决定构图", question: "读完所有标签前，能否看出什么最重要？", slop: "每个区块使用相同的标题、卡片数量、对齐和视觉重量。", preference: "把核心任务放在最强位置，辅助信息按实际重要性降低存在感。", validWhen: "重复确实表示步骤、对比项或同类对象时。", ruleIds: ["LAYOUT-01", "LAYOUT-05", "TYPE-01"] },
      { id: "containers", title: "容器用来说明边界", question: "每个方框是否对应对象、动作、选择或层级？", slop: "区块外套卡片，内部面板和说明再套卡片。", preference: "优先用留白、对齐、文字和分隔线；只有边界本身有意义时才加容器。", validWhen: "该表面可以单独移动、选择、关闭或复用时。", ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-03"] },
      { id: "typography", title: "文字层级说明阅读方式", question: "这个页面用于浏览、阅读、比较还是操作？", slop: "流行字体、接近的字号、反复出现的小标题和满屏展示字让层级变平。", preference: "根据任务调整行宽、字重、行距和对比，并让同一区域的文字角色保持稳定。", validWhen: "单一字体仍有清楚层级，并符合产品语气时。", ruleIds: ["TYPE-01", "TYPE-02", "TYPE-03"] },
      { id: "color", title: "颜色和深度各有职责", question: "每个强调色、表面、阴影和圆角都能说明用途吗？", slop: "渐变文字、发光、玻璃、大圆角和扩散阴影同时争夺注意力。", preference: "把颜色映射到品牌、动作、状态或选择；同一层级只采用一种边界或 elevation 方式。", validWhen: "材质与配色有品牌依据，同时保持对比和状态可辨识时。", ruleIds: ["COLOR-01", "VISUAL-04", "VISUAL-05"] },
      { id: "evidence", title: "用真实内容代替装饰", question: "页面上的什么能证明产品主张？", slop: "通用图标、虚构指标、模糊光球和占位仪表盘代替产品内容。", preference: "尽量展示真实流程、素材、数据形态、状态变化或已确认的约束。", validWhen: "插图承载品牌叙事，或解释产品界面无法直接表达的内容时。", ruleIds: ["EVIDENCE-01", "VISUAL-02", "VISUAL-06"] },
      { id: "density", title: "密度服从任务", question: "相关内容是否靠近，不同组是否明显分开？", slop: "设置、表格、营销文案和移动端控件都使用同样宽松的留白。", preference: "组内紧凑、组间清楚；操作型页面优先比较效率，而不是展示型留白。", validWhen: "宽松留白能降低专注流程或编辑阅读的认知负担时。", ruleIds: ["LAYOUT-05", "DENSITY-01", "DENSITY-02"] },
      { id: "states", title: "把不完美状态也纳入产品", question: "成功之前、之后和失败时会看到什么？", slop: "只有精致的成功态，缺少空、加载、错误、权限和长内容状态。", preference: "把状态变化纳入信息架构，并为每个状态提供可执行的下一步。", validWhen: "明确说明它只是静态视觉研究，并不声称可直接上线时。", ruleIds: ["STATE-01", "STATE-02", "COPY-04"] },
      { id: "responsive", title: "响应式需要重新排序", question: "空间变小时，哪些内容应该移动、堆叠、折叠或减少？", slop: "只缩小桌面列，直到文字截断、控件乱换行、本地化内容撑破布局。", preference: "保留阅读顺序和核心任务；原有关系放不下时，直接改变构图。", validWhen: "横向滚动是有明确提示的数据或媒体浏览方式时。", ruleIds: ["LAYOUT-06", "RESPONSIVE-01", "LOCALE-02"] },
      { id: "motion", title: "动效用来解释变化", question: "运动在说明反馈、起点、连续性还是空间关系？", slop: "为让静态页面显得高级，所有元素都淡入、漂浮、弹跳或依次出现。", preference: "只选择一个编排重点；反馈快速、可中断，并尊重减少动态效果设置。", validWhen: "环境动效属于产品体验，且不干扰阅读和操作时。", ruleIds: ["MOTION-01", "MOTION-02", "MOTION-03"] },
      { id: "interaction", title: "控件遵守一致的交互约定", question: "控件的外观、名称和结果是否与实际动作一致？", slop: "没有行为差异，却不断增加 pill、badge、button、tab 和 modal 变体。", preference: "用具体动词命名动作，必要时让 URL 保存状态，只把短而封闭的任务放进弹窗。", validWhen: "变体区分已验证的状态、权限、风险或专家工作流时。", ruleIds: ["COMP-01", "COMP-02", "COMP-03"] },
    ],
    directionsTitle: "Anti-slop 不等于极简主义",
    directionsLead: "设计师并不暗中偏爱某一种外观。他们更在意方向是否符合任务、内部逻辑是否一致，以及执行是否超越模板。",
    directions: [
      { id: "editorial", title: "表现型编辑页面", body: "以发现和叙事为目标时，大字、独特构图、图像和有节奏的留白都可以合理。", proof: "视觉特征来自主题本身，而不是当下流行的落地页套件。" },
      { id: "product", title: "高密度产品工具", body: "需要反复比较和操作时，表格、紧凑控件、持久导航和克制字体更合适。", proof: "密度中仍有清楚分组和稳定扫视路径，也能容纳真实数据和状态。" },
      { id: "service", title: "聚焦式服务流程", body: "信任和完成率更重要时，安静的单列、熟悉控件和直白文案更合适。", proof: "简洁用于减少不确定性，而不是掩盖缺失的产品判断。" },
    ],
    compareTitle: "保持原意，让产品判断更明确",
    compareLead: "可在“界面”“文案”“多语言”三个示例之间切换。调整后的示例保留原有任务目标，只把套路化装饰替换为具体的设计决策。",
    beforeLabel: "默认模式",
    afterLabel: "OmD 建议",
    detectedLabel: "修改原因",
    specimen: { nextGen: "新一代", verified: "已验证", reference: "01 — 参考", output: "输出", nextStep: "只保留一个下一步" },
    specimenUi: {
      dashboard: "仪表盘", release: "发布", settings: "设置", introducing: "新文档",
      typographyTitle: "团队共用的 DESIGN.md", typographyBody: "集中管理产品依据与已验证的设计规则。",
      newLabel: "新增", docsLabel: "文档", checkout: "支付", verify: "验证", artifact: "产出",
      time: "时间", route: "路径", status: "状态", desktop: "桌面端", notifications: "通知", all: "全部", open: "进行中",
    },
    examples: [
      {
        id: "writing",
        tab: "文案",
        beforeTitle: "以强大、无缝的体验全面赋能你的工作流。",
        beforeBody: "借助一站式智能解决方案，开启下一代设计体验，让每个项目实现全新升级。",
        afterTitle: "选择参考后，把经过验证的规则保存到 DESIGN.md。",
        afterBody: "无法确认的字体和组件不会被写入。AI 编程助手只读取目录中有依据的信息。",
        beforeSignals: ["抽象赞美", "没有用户动作", "固定三段式"],
        afterSignals: ["明确动作", "可以核验的结果", "清楚的依据边界"],
        ruleIds: ["COPY-01", "COPY-03", "EVIDENCE-01"],
        reason: "没有添加新的效果承诺，只把产品已有的功能和限制提前说明。",
      },
      {
        id: "locale",
        tab: "多语言",
        beforeTitle: "通过 AI 编程代理可以进行设计工作的执行。",
        beforeBody: "如果照搬英文的主语和语序，五个语言路由看起来就只是换了文字，而不是分别为每种语言独立成稿。",
        afterTitle: "AI 编程助手读取 DESIGN.md，再改进实际产品页面。",
        afterBody: "命令和产品行为保持不变；主语、节奏、术语和信息顺序按每种语言的表达习惯重新组织。",
        beforeSignals: ["“通过”结构", "名词化表达", "继承英文语序"],
        afterSignals: ["动作清楚", "事实保持不变", "每种语言独立成稿"],
        ruleIds: ["LOCALE-01", "LOCALE-02", "COPY-02"],
        reason: "多语言一致不是让句子长得一样，而是让读者自然理解同一组事实和操作。",
      },
      {
        id: "interface",
        tab: "界面",
        beforeTitle: "由装饰决定布局的页面",
        beforeBody: "渐变首屏、图标方块、卡片套卡片、左侧强调线和重复的三列布局，比内容本身的作用更抢眼。",
        afterTitle: "由用户任务决定布局的页面",
        afterBody: "只保留一种品牌表达方式。步骤按顺序展示，对比并排展示；只有彼此独立的对象才使用卡片。",
        beforeSignals: ["嵌套卡片", "重复图标方块", "没有作用的强调线"],
        afterSignals: ["内容驱动的层级", "更少的容器", "单一视觉特征"],
        ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-01", "VISUAL-02"],
        reason: "这不是用另一种流行风格覆盖原页面，而是移除了不能说明对象或动作的容器。",
      },
    ],
    classifierTitle: "三类标签不要混用",
    classifierLead: "区分模式趋同、产品质量和个人偏好，能让检查结果更准确，也能避免把审美偏好包装成统一标准。",
    classifications: [
      { label: "SLOP", title: "缺少上下文的模式组合", body: "默认模式在没有产品依据的情况下叠加，削弱了层级、信任和品牌辨识度。" },
      { label: "QUALITY", title: "可以测量或复现的缺陷", body: "无障碍、内容溢出、异常状态、性能或交互未通过检查，或不符合产品约定。" },
      { label: "PREFERENCE", title: "有依据的设计选择", body: "选择符合设计简报和 DESIGN.md。即使还有其他方案，也不能算缺陷。" },
    ],
    workflowTitle: "不推翻整套风格，也能发现、修复并复查",
    workflowLead: "检查从产品依据开始，以最小修改结束。不会先选一种更流行的视觉风格。",
    workflow: [
      { title: "阅读产品页面", body: "先记录目标用户、核心操作、必须保留的行为和设计依据。" },
      { title: "收集可核验的证据", body: "记录 DOM、CSS、重复次数、代码位置和浏览器结果，再结合产品上下文判断。" },
      { title: "确认模式组合", body: "对照频次、同时出现的模式、DESIGN.md 例外和页面影响，删除没有依据的结论。" },
      { title: "针对性修复", body: "只修改恢复产品层级所需的容器、文案和视觉处理。" },
      { title: "在同一页面复查", body: "在与修改前相同的条件下，复查桌面端、移动端、交互、无障碍和各语言页面。" },
    ],
    sourcesTitle: "判定标准参考了哪些研究",
    sourcesLead: "分类体系由 OmD 定义。保留原意、综合多项信号判断和依据优先等原则参考了以下公开项目。",
    sources: [
      { label: "im-not-ai", href: "https://github.com/epoko77-ai/im-not-ai", note: "识别韩语翻译腔，并在保留原意的前提下局部修改。" },
      { label: "Humanizer", href: "https://github.com/blader/humanizer", note: "按多项信号共同判断，在保留原意的前提下修改。" },
      { label: "stop-slop", href: "https://github.com/hardikpandya/stop-slop", note: "减少赘词、套路化对比和空泛主张，补充具体信息。" },
      { label: "Impeccable Slop Detector", href: "https://impeccable.style/slop/", note: "将 slop 模式与一般质量问题分开整理的公开清单。" },
      { label: "Taste Skill", href: "https://github.com/leonxlnx/taste-skill", note: "先读设计简报和目标用户，再限制生成式默认模式。" },
      { label: "Anthropic frontend-design", href: "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md", note: "从具体主题确定方向，只保留一个有依据的特征，并在实现前后自我审查。" },
      { label: "Vercel Web Interface Guidelines", href: "https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md", note: "面向生产环境检查交互、长内容、响应式、状态、动效和多语言。" },
      { label: "Carbon Design System", href: "https://carbondesignsystem.com/elements/spacing/overview/", note: "按任务调整密度、空间分组、网格节奏，以及操作型和表现型字体。" },
      { label: "W3C Cards", href: "https://design-system.w3.org/components/cards.html", note: "优先安排内容顺序，并让卡片边界具有可访问的结构含义。" },
      { label: "GOV.UK Design System", href: "https://design-system.service.gov.uk/styles/layout/", note: "可读行宽、小屏优先构图、明确动作和组件适用条件。" },
      { label: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/layout", note: "优先级、分组、自适应层级、渐进披露和平台上下文。" },
      { label: "Atlassian Elevation", href: "https://atlassian.design/foundations/elevation", note: "让表面深度对应真实层级和交互；不需要抬升时优先使用留白或边界。" },
      { label: "Microsoft Language Style Guides", href: "https://learn.microsoft.com/globalization/reference/microsoft-style-guides", note: "将韩语、日语、简体中文和繁体中文分别作为独立的本地化版本处理。" },
      { label: "Primer 产品 UI 模式", href: "https://primer.style/product/ui-patterns/", note: "把空状态、加载、降级、导航和保存放进真实产品流程中说明。" },
      { label: "Carbon 数据表", href: "https://carbondesignsystem.com/components/data-table/usage/", note: "根据任务选择行密度、对齐表头和工具栏，并判断何时应使用表格而非卡片。" },
      { label: "Fluent 2 卡片", href: "https://fluent2.microsoft.design/components/web/react/core/card/usage", note: "卡片对应一个概念或对象，内部层级与交互方式也应服从这个边界。" },
      { label: "Fluent 2 形状", href: "https://fluent2.microsoft.design/shapes", note: "区分矩形、圆形、胶囊形和浮层指示形，并按尺寸与上下文选择圆角。" },
      { label: "USWDS 卡片", href: "https://designsystem.digital.gov/components/card/", note: "卡片用于集合中的模块化摘要，不应替代装饰、简单操作、表格或连续正文。" },
      { label: "Primer 空状态与加载", href: "https://primer.style/product/ui-patterns/empty-states/", note: "把状态说明、恢复操作、进度范围和加载时机作为产品界面的一部分。" },
    ],
  },
};

const zhTw: BaseDictionary = {
  localeName: "繁體中文（台灣）",
  metaDescription: "oh-my-design 使用說明：從典藏挑選一份真實企業的 DESIGN.md，安裝 oh-my-design-cli，再讓 AI 程式助理照著這份檔案實作介面。",
  ui: {
    docs: "文件",
    menu: "選單",
    language: "語言",
    copy: "複製",
    copied: "已複製",
    copyFailed: "無法複製",
    copyPage: "複製本頁",
    pageCopied: "已複製本頁",
    pageTools: "頁面工具",
    onThisPage: "本頁內容",
    previous: "上一頁",
    next: "下一頁",
    pagination: "文件換頁",
    prompt: "提示詞",
    terminal: "終端機",
    result: "結果",
    verified: "驗證",
    skillsLabel: "技能",
  },
  nav: {
    overview: "總覽",
    "getting-started": "快速開始",
    workflows: "工作流程",
    demo: "現場示範",
    skills: "技能",
    "anti-slop": "AI slop 判定標準",
  },
  navGroups: {
    start: "開始使用",
    guides: "指南",
    reference: "參考資料",
  },
  overview: {
    title: "DESIGN.md 典藏與 oh-my-design-cli",
    lead: `oh-my-design 分成兩個部分。典藏收錄了 ${N.refs} 份根據真實企業產品寫成的 DESIGN.md；oh-my-design-cli 則會安裝技能，讓 AI 程式助理在動手改 UI 之前，先讀過 DESIGN.md。`,
    partsTitle: "典藏與 CLI",
    archive: {
      name: "典藏",
      body: "一份 DESIGN.md 記錄一家企業的色彩、字型、間距、元件與語氣；經過驗證的檔案還會為每個數值註明出處。打開任一份就能複製或下載，也可以從 `oh-my-design.kr/<id>/design.md` 直接取得原始檔。這些都不需要 CLI。",
      action: "瀏覽典藏",
    },
    cli: {
      name: "oh-my-design-cli",
      body: `一行指令，就能把完整套件的 ${N.skills} 個技能（${N.public} 個公開技能與它們呼叫的內部技能）、${N.agents} 個專業代理和典藏的離線副本裝進 Claude Code、Codex、OpenCode 與 Cursor，每個工具只會裝進它支援的部分。這些技能會為專案建立 DESIGN.md，之後每次修改 UI 都會遵循它。`,
      action: "安裝 CLI",
    },
    installTitle: "安裝",
    installBody: "請在專案根目錄執行。指令會找出你正在使用的 AI 程式助理，並詢問要安裝到哪幾個。",
    afterInstall: "安裝完成後，重新啟動 AI 程式助理，執行一次 doctor，再描述你想要的畫面。整個流程不需要常駐程式、API 金鑰或 MCP 伺服器。",
    outcomesTitle: "可以這樣提出需求",
    outcomesLead: "不用記技能名稱。說清楚要做什麼、哪些地方不能動，已安裝的技能就會選出合適的工作流程。",
    outcomes: [
      {
        title: "建立設計系統",
        description: "用產品說明和一份 verified_v2 參考，建立專案自己的 DESIGN.md。沒有人確認過的事實不會寫進去。",
        prompt: "幫我們的家庭理財 App 建立一套沉穩、讓人信賴的設計系統。參考 Toss，但現有的 Logo 和文案不要動。",
        result: "DESIGN.md、給 AI 程式助理的指示檔、與參考不同的 token 清單，以及你確認過的第一個畫面。",
      },
      {
        title: "完整做出一個畫面",
        description: "研究、資訊架構、線框圖、元件、文案、無障礙與驗證串成同一個流程，並在需要你核准的地方停下來。",
        prompt: "幫這個 App 設計並實作新手引導流程。沿用目前的技術堆疊，以 DESIGN.md 為唯一依據。",
        result: "能實際操作且涵蓋各種狀態的畫面、驗證紀錄，以及放在程式碼儲存庫裡的交付檔案。",
      },
      {
        title: "改善現有的 UI",
        description: "先檢查現有畫面，保留產品原本的行為，再修正層級、節奏、無障礙問題，以及千篇一律的生成式 UI 模式。",
        prompt: "改善價格方案頁面，但 URL 和表單欄位名稱都不要改。從影響最大的修正開始說明，最後驗證結果。",
        result: "範圍明確的程式碼修改、這樣修改的理由，以及實際執行過的檢查。",
      },
    ],
    qualityTitle: "一份檔案可以信任到什麼程度",
    qualityBody: `每份 DESIGN.md 都標有品質等級。verified_v2 有 ${N.verified} 份，已和實際產品比對確認，每個數值也附上出處，對外公開的作品請使用這一級。partial 有 ${N.partial} 份，只有部分內容經過確認；legacy snapshot 有 ${N.legacy} 份，建立時間早於現行格式。沒有人能確認的數值會直接省略，不會用看似合理的預設值補上。`,
    nextTitle: "下一步",
    next: [
      { page: "getting-started", body: "安裝並確認安裝結果，再做出一個看得見的改變。" },
      { page: "workflows", body: "把常見工作整理成可以直接使用的提示詞。" },
      { page: "skills", body: "公開技能，以及每個技能的用途。" },
    ],
  },
  gettingStarted: {
    title: "快速開始",
    lead: "安裝 CLI 並確認安裝結果，再請 AI 程式助理做出一個看得見的改變。整個過程大約 5 分鐘。",
    prerequisitesTitle: "事前準備",
    prerequisites: ["Node.js 18 或更新版本", "專案的程式碼儲存庫", "Claude Code、Codex、OpenCode 或 Cursor"],
    stepsTitle: "操作步驟",
    steps: [
      { title: "安裝 CLI", body: "在專案根目錄執行。互動式安裝會找出你已經在用的 AI 程式助理，再把完整套件裝進你選的那幾個。", command: CLI_INSTALL_COMMAND },
      { title: "重新啟動 AI 程式助理並執行 doctor", body: "重新啟動後，AI 程式助理才會載入新技能。doctor 會檢查實際安裝的檔案，並告訴你參考庫、代理、DESIGN.md 之中缺了哪些。", command: CLI_DOCTOR_COMMAND },
      { title: "建立 DESIGN.md", body: "從典藏挑一家和你的產品相近的企業，或請 AI 程式助理推薦。寫入專案根目錄之前，它會先讓你看過 DESIGN.md。", prompt: "用 Toss 的參考幫這個專案建立 DESIGN.md，我們的 Logo 和文案不要動。" },
      { title: "提出一個看得見的修改", body: "從一個真實的畫面開始。AI 程式助理會先讀過 DESIGN.md 和程式碼，才向你提問。", prompt: "套用 DESIGN.md 改善首頁，原本的行為不要變，並驗證結果。" },
    ],
    channelsTitle: "只安裝到單一工具",
    channelsLead: "略過問答，直接安裝到指定的工具。這些指令也能用在腳本和 CI 中。",
    channels: [
      { name: "Claude Code", body: "安裝技能、子代理與參考庫，並把專案的 hooks 合併進你現有的設定。", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "Codex", body: "安裝技能、內含指示的代理角色、輔助工具，以及本機參考庫。", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "OpenCode", body: "安裝技能、原生子代理與離線參考庫。專案安裝會放在 `.opencode`；加上 `--global` 則放在 `~/.config/opencode`，並用 `doctor --global` 檢查。", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "安裝內容：原生 Agent Skills 31 個、精簡的 DESIGN.md 啟動規則，以及共用參考庫。只有舊版用戶端才需要 `--cursor-rule-only`。", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ],
    rawTitle: "不安裝 CLI，直接使用 DESIGN.md",
    rawBody: "典藏中的檔案都是一般的 Markdown。可以在檔案頁面複製或下載，也能直接用網址取得。AI 程式助理不必開瀏覽器也能讀取。",
    rawLinks: rawLinks(
      { href: "/llms.zh-tw.txt", description: "給 AI 程式助理讀的繁體中文索引，涵蓋這份文件與典藏。" },
      "單一企業 DESIGN.md 的原始 Markdown。此連結會開啟 Toss 的檔案。",
      "README、主要技能與典藏索引的合併檔案，內容為英文。",
    ),
    doneTitle: "畫面有改變，才算完成",
    doneBody: "順利的第一次執行，會留下看得見的改善、專案中的 DESIGN.md，以及明確的下一個提示詞。光是安裝成功，還不算達成目標。",
  },
  demo: {
    title: "讓觀眾親眼看見真實產品發生改變。",
    lead: "好的 oh-my-design 示範不是逐一介紹技能名稱。它從一個看得見的問題開始，保護產品原本依賴的行為，最後回到真實路由，並留下任何人都能檢查的依據。",
    formatsTitle: "選擇足以證明成果的最小規模",
    formatsLead: "時間限制的是範圍，不是誠實程度。開始前先選定一種形式，也清楚說明哪些內容不會更動。",
    formats: [
      { duration: "5 分鐘", title: "搶救一個明顯問題", when: "既有頁面能用，卻顯得普通或難以理解", goal: "保留原有行為，只修正一個影響最大的層級、間距、狀態或無障礙問題。", proof: "修改前畫面、聚焦的差異，以及同一真實路由上的修改後結果。" },
      { duration: "15 分鐘", title: "交付一個完整的小介面", when: "專案已有技術堆疊、元件與範圍清楚的流程", goal: "根據專案的設計脈絡，實作一個小介面以及載入、空白、錯誤與成功狀態。", proof: "可操作的路由、狀態覆蓋、變更檔案與確實執行的檢查。" },
      { duration: "30 分鐘", title: "執行含檢查點的完整流程", when: "介面全新或定義模糊，需要研究與設計系統決策", goal: "不略過核准關卡，從探索、使用者旅程、DESIGN.md 提案一路走到實作與驗證。", proof: "使用者旅程、DESIGN.md 修補內容、可操作 UI、驗證摘要與三次使用者檢查點。" },
    ],
    runbookTitle: "可重複使用的六步驟流程",
    runbookLead: "不論是社群聚會、工作坊或螢幕錄影，都能使用同一套順序。CLI 負責準備環境，實際的 UI 工作由 AI 程式助理在程式碼儲存庫內完成。",
    steps: [
      { title: "選定一個明顯問題與一項受保護行為", body: "打開真實路由，精準指出觀眾應該注意的地方。接著說明 URL、資料流程、欄位名稱、文案或互動中，哪些內容絕對不能更動。" },
      { title: "安裝套件，再讓 doctor 檢查實際狀態", body: "在專案根目錄執行兩個指令，安裝後重新啟動 AI 程式助理。安裝成功只是準備工作，不是示範成果。", command: `${CLI_INSTALL_COMMAND}\n${CLI_DOCTOR_COMMAND}` },
      { title: "對齊 DESIGN.md 與 verified_v2 依據", body: "公開示範請選擇 verified_v2 參考。請代理和既有 DESIGN.md 一起讀取，只採用屬於目前產品介面的證據；無法確認的字型、token 與元件仍保持空缺。" },
      { title: "實作真實介面與關鍵狀態", body: "沿用現有技術堆疊與元件。若是新流程，不要只打磨靜態成功畫面，也要涵蓋使用者實際可能遇到的狀態。" },
      { title: "在實際產品頁面檢查", body: "開啟產品頁面，實際操作受保護的行為，再執行相關的無障礙與 interface-feel 檢查。只回報確實跑過的檢查與量測。" },
      { title: "記錄使用者的修正", body: "當使用者修正某個視覺決定時，只調整對應範圍，並用 omd:remember 留下紀錄，避免下個工作階段重犯。" },
    ],
    starterPromptTitle: "現場搶救可直接使用的提示詞",
    starterPrompt: "先讀取 DESIGN.md，並檢查目前的產品路由。在保留 URL、資料流程、欄位名稱與既有使用者行為的前提下，改善這個頁面上一個看得見的層級或狀態問題。公開示範請使用 verified_v2 參考，並只對齊屬於該產品介面的證據；未知數值不要用替代值補上，直接省略。把變更實作在真實介面並涵蓋關鍵狀態，接著驗證該路由，回報變更檔案與確實執行的檢查。擴充 DESIGN.md 或跨過必要的 harness 檢查點前，先取得我的確認。",
    proofTitle: "觀眾應該能當場檢查的證據",
    proofLead: "示範進行時同步保留這些紀錄。只有漂亮截圖、卻沒有可追溯過程，觀眾就無法確認實際做了哪些工作。",
    proof: ["原始畫面與一開始指出的明顯問題", "包含受保護行為的完整提示詞", "DESIGN.md 差異與刻意省略的未知欄位", "包含關鍵狀態的真實產品路由，而非獨立 mockup", "變更檔案與確實執行的檢查或量測", "以持久且範圍明確的偏好記錄下來的使用者修正"],
    guardrailsTitle: "讓驚豔感建立在事實上",
    guardrails: [
      { title: "CLI 負責安裝與診斷", body: "AI 程式助理會讀取已安裝的脈絡並修改 UI；安裝器本身不會產生整個介面。" },
      { title: "未知資訊仍保持空缺", body: "不要用系統字型、通用元件、推測 token 或相鄰的行銷頁面補上缺少的品牌事實。" },
      { title: "證據優先於表演", body: "沒有真實的前後量測，就不宣稱速度、轉換率、無障礙或效能獲得提升。" },
      { title: "必要檢查點不能略過", body: "30 分鐘流程仍會在使用者旅程、DESIGN.md 修補內容與驗證核准處暫停。現場有觀眾不是略過它們的理由。" },
    ],
  },
  workflows: { title: "可直接改寫的任務目標", lead: "保留目標與限制，再把產品領域和介面換成自己的情境。", workflows: [
    { title: "建立品牌脈絡", when: "新專案或沒有 DESIGN.md", prompt: "為忙碌家長的餐食規劃 App 建立設計系統。推薦 verified_v2 參考，說明差異，並在寫入 DESIGN.md 前讓我確認。", outputs: ["參考推薦", "DESIGN.md 方案", "代理連接檔案"], skills: ["omd:init", "omd:sync"] },
    { title: "交付新介面", when: "完整頁面或流程", prompt: "建立付款完成流程，包含成功、失敗與部分成功狀態。使用 DESIGN.md 和既有元件，並驗證無障礙。", outputs: ["使用者旅程", "可運作 UI", "關鍵狀態完整覆蓋", "驗證摘要"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
    { title: "改善既有頁面", when: "可用但缺少產品特色的 UI", prompt: "檢查這個儀表板中缺少產品依據的重複模式、層級、密度、動效與無障礙。保留行為，先套用影響最大的修正，再展示差異。", outputs: ["依優先順序整理的問題", "聚焦修補", "前後依據"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
    { title: "記錄偏好修正", when: "教代理你的偏好", prompt: "我們的 CTA 不使用全大寫。把這項偏好記錄到專案中，保留按鈕行為並修正目前頁面。", outputs: ["待處理偏好", "有範圍的 UI 修正", "DESIGN.md 合併建議"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
  ] },
  skills: {
    title: "技能",
    lead: `這裡列出的是 ${N.public} 個公開技能。oh-my-design-cli 會安裝完整套件的 ${N.skills} 個技能（含這些技能呼叫的內部技能）與 ${N.agents} 個專業代理。名稱不必背：說出想要的結果，AI 程式助理就會選用合適的技能。需要精確控制時，再指定技能名稱。`,
    groups: skillGroups({
      system: { title: "建立並維護 DESIGN.md", description: "建立專案的 DESIGN.md，並在每次修改 UI 時套用它。" },
      build: { title: "製作畫面", description: "從需求說明出發，做出放進真實素材、可實際運作的介面，並備妥交付資料。" },
      quality: { title: "檢查品質", description: "檢查介面細節、韓文排版、設計是否節制，以及生成式 UI 模式。" },
      content: { title: "撰寫文案", description: "保留事實與指令，把五種語言的產品文案改得自然。" },
    }),
    descriptions: {
      "omd:init": "從最接近的真實企業參考建立 DESIGN.md。",
      "omd:apply": "AI 程式助理每次修改 UI，都會套用你的 DESIGN.md。",
      "omd:autopilot": "用一則提示詞設計並實作新畫面，最後再驗證。",
      "omd:landing": "依 DESIGN.md 製作隨捲動展開的一頁式到達網頁。",
      "omd:shader-hero": "用 DESIGN.md 的兩種顏色做出滿版主視覺，並量測文字對比。",
      "omd:cjk-type-shader": "把中日韓大標題畫成在宣紙上暈開的墨跡。",
      "omd:feel": "用 113 條量化的介面細節規則來打磨或檢查。",
      "hangul": "依 W3C 規範、韓文正書法、韓國設計系統與 67 個韓國服務的實測值，修正並檢查韓文的換行、字距、行高、字型與介面文案（拼寫、錯誤訊息、按鈕名稱、敬語）。",
      "omd:restraint": "量測視覺焦點、字級與留白，拿掉頁面不需要的元素。",
      "omd:slop-audit": "找出缺乏產品理由的生成式 UI 模式，附上規則 ID 與程式碼行號。",
      "omd:humanize": "潤飾五種語言的文案，讓文字讀來自然，事實與指令保持不變。",
    },
    pages: { hangul: { href: "/hangul", label: "/hangul 介紹（英文）" } },
    routingTitle: "技能名稱可以省略",
    routingBody: "直接說「改善這個結帳頁並驗證結果」，效果會比自己串接四個技能更好。只有想用特定技能時，才需要指名。",
  },
  antiSlop: {
    title: "我們把缺少產品判斷的重複模式稱為 AI slop",
    lead: "這裡不判斷作者，也不猜使用了哪一種工具。只有當熟悉的預設模式取代產品目標與依據，進而削弱資訊層級與信任時，我們才會標記為 AI slop。",
    definitionTitle: "單一視覺特徵不足以下結論",
    definitionBody: "圓角卡片、紫色、置中的主視覺和短標題，都可能是合理選擇。我們檢查的是：缺少理由的預設模式是否在同一個頁面反覆堆疊，讓產品原有的資訊結構與品牌特色消失。",
    definitionNote: "無法只看頁面就知道製作工具。我們能檢查的是設計決定是否有跡可循：為什麼這個結構與這句文案適合目前的產品？",
    principlesTitle: "每一項發現都遵守四個原則",
    principles: [
      { title: "先讀產品", body: "目標使用者、主要任務、既有行為與 DESIGN.md，優先於通用的反模式清單。" },
      { title: "綜合多個模式判斷", body: "一個圓角或一種顏色不會直接構成問題。必須綜合出現頻率、相鄰模式與實際影響後再判斷。" },
      { title: "品質問題另外標示", body: "對比、焦點、內容溢出與異常狀態屬於品質問題，不用「看起來像 AI」一語帶過。" },
      { title: "只修改必要範圍", body: "保留產品行為與內容。先拆掉影響最大的重複模式，不再蓋上一套新風格。" },
    ],
    atlasTitle: "檢視生成式 UI 的十個角度",
    atlasLead: "把它們當作設計審查問題，而不是禁用清單。每一項都列出容易趨同的預設做法、設計師通常會保留的判斷，以及該模式仍然合理的條件。",
    slopSignalLabel: "趨同的預設做法",
    designerPreferenceLabel: "設計師會保留的判斷",
    validWhenLabel: "仍然適用的條件",
    lenses: [
      { id: "hierarchy", title: "由優先順序決定構圖", question: "讀完所有標籤以前，能否先看出什麼最重要？", slop: "每個區塊使用相同的標題、卡片數量、對齊與視覺重量。", preference: "把主要任務放在最有力的位置，輔助資訊依實際重要性降低存在感。", validWhen: "重複確實代表步驟、比較項目或同類型物件時。", ruleIds: ["LAYOUT-01", "LAYOUT-05", "TYPE-01"] },
      { id: "containers", title: "容器用來說明邊界", question: "每個方框是否代表物件、操作、選擇或圖層？", slop: "區塊外套卡片，裡面的面板與說明又再套一層卡片。", preference: "先使用留白、對齊、字級與分隔線；只有邊界本身有意義時才加容器。", validWhen: "這個表面能單獨移動、選取、關閉或重複使用時。", ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-03"] },
      { id: "typography", title: "文字層級說明閱讀方式", question: "這個頁面用來瀏覽、閱讀、比較，還是操作？", slop: "流行字型、相近字級、重複的小標與滿版展示字讓層級變平。", preference: "依任務調整行寬、字重、行距與對比，並讓同一區域的文字角色保持穩定。", validWhen: "單一字型仍有清楚層級，且符合產品語氣時。", ruleIds: ["TYPE-01", "TYPE-02", "TYPE-03"] },
      { id: "color", title: "色彩與深度各有工作", question: "每個強調色、表面、陰影與圓角都能說明用途嗎？", slop: "漸層文字、發光、玻璃、大圓角與擴散陰影同時爭奪注意力。", preference: "把色彩對應到品牌、操作、狀態或選取；同一層級只採用一種邊界或 elevation 方式。", validWhen: "材質與配色有品牌依據，同時保有對比與狀態辨識時。", ruleIds: ["COLOR-01", "VISUAL-04", "VISUAL-05"] },
      { id: "evidence", title: "用實際內容取代裝飾", question: "頁面上的什麼能證明產品主張？", slop: "通用圖示、虛構指標、模糊光球與佔位儀表板取代產品內容。", preference: "盡可能展示真實流程、素材、資料形態、狀態變化或已確認的限制。", validWhen: "插圖承載品牌敘事，或補充產品介面難以直接說明的內容時。", ruleIds: ["EVIDENCE-01", "VISUAL-02", "VISUAL-06"] },
      { id: "density", title: "密度配合任務", question: "相關內容是否靠近，不同群組是否清楚分開？", slop: "設定、表格、行銷文案與行動裝置控制項都使用同樣寬鬆的留白。", preference: "群組內緊密、群組間清楚；操作型畫面優先比較效率，不追求展示型留白。", validWhen: "寬鬆留白能降低專注流程或編輯閱讀的認知負擔時。", ruleIds: ["LAYOUT-05", "DENSITY-01", "DENSITY-02"] },
      { id: "states", title: "把不完美的狀態也納入產品", question: "成功以前、之後和失敗時會看到什麼？", slop: "只有精緻的成功狀態，沒有空白、載入、錯誤、權限與長內容狀態。", preference: "把狀態變化納入資訊架構，並為每個狀態提供可執行的下一步。", validWhen: "明確說明它只是靜態視覺研究，且不宣稱已可上線時。", ruleIds: ["STATE-01", "STATE-02", "COPY-04"] },
      { id: "responsive", title: "響應式需要重新安排優先順序", question: "空間縮小時，哪些內容應移動、堆疊、收合或減少？", slop: "只把桌面欄位縮小，直到文字截斷、控制項亂換行、在地化內容撐破版面。", preference: "保留閱讀順序與主要任務；原本關係放不下時，直接改變構圖。", validWhen: "橫向捲動是有明確提示的資料或媒體瀏覽方式時。", ruleIds: ["LAYOUT-06", "RESPONSIVE-01", "LOCALE-02"] },
      { id: "motion", title: "動效用來解釋變化", question: "移動是在說明回饋、起點、連續性，還是空間關係？", slop: "為了讓靜態頁面顯得高級，所有元素都淡入、漂浮、彈跳或依序出現。", preference: "只選一個編排重點；回饋快速、可中斷，並尊重減少動態效果設定。", validWhen: "環境動效屬於產品體驗，且不干擾閱讀與操作時。", ruleIds: ["MOTION-01", "MOTION-02", "MOTION-03"] },
      { id: "interaction", title: "控制項遵守一致的互動約定", question: "控制項的外觀、名稱與結果是否符合實際動作？", slop: "沒有行為差異，卻不斷增加 pill、badge、button、tab 與 modal 變體。", preference: "用具體動詞命名操作，必要時讓 URL 保存狀態，只把短而封閉的任務放進彈窗。", validWhen: "變體區分已驗證的狀態、權限、風險或專業工作流程時。", ruleIds: ["COMP-01", "COMP-02", "COMP-03"] },
    ],
    directionsTitle: "Anti-slop 不等於極簡主義",
    directionsLead: "設計師並沒有暗中偏愛某一種外觀。他們更在意方向是否符合任務、內部邏輯是否一致，以及執行是否超越模板。",
    directions: [
      { id: "editorial", title: "表現型編輯頁面", body: "以探索和敘事為目標時，大字、獨特構圖、影像與有節奏的留白都可以合理。", proof: "視覺特色來自主題本身，而不是當下流行的到達網頁套件。" },
      { id: "product", title: "高密度產品工具", body: "需要反覆比較與操作時，表格、緊密控制項、持續導覽與節制字級更適合。", proof: "密度中仍有清楚群組與穩定瀏覽路徑，也能容納真實資料與狀態。" },
      { id: "service", title: "聚焦式服務流程", body: "信任與完成更重要時，安靜的單欄、熟悉控制項與直接文案更適合。", proof: "簡潔用來降低使用者的不確定，不是掩蓋缺少的產品判斷。" },
    ],
    compareTitle: "保留原本意圖，讓產品判斷更清楚",
    compareLead: "切換三個例子，查看修改前後的差異。每個修改後版本都保留原本要完成的工作，只把慣用裝飾換成更明確的產品決定。",
    beforeLabel: "預設模式",
    afterLabel: "OmD 方向",
    detectedLabel: "修改原因",
    specimen: { nextGen: "新世代", verified: "已驗證", reference: "01 — 參考", output: "產出", nextStep: "明確的下一步" },
    specimenUi: {
      dashboard: "儀表板", release: "版本發布", settings: "設定", introducing: "新文件",
      typographyTitle: "團隊共用的 DESIGN.md", typographyBody: "集中管理產品依據與已驗證的設計規則。",
      newLabel: "新增", docsLabel: "文件", checkout: "付款", verify: "驗證", artifact: "產出",
      time: "時間", route: "路徑", status: "狀態", desktop: "桌面版", notifications: "通知", all: "全部", open: "進行中",
    },
    examples: [
      {
        id: "writing",
        tab: "文案",
        beforeTitle: "用強大、無縫的體驗全面升級你的工作流程。",
        beforeBody: "透過一站式智慧解決方案，開啟新世代設計體驗，讓每個專案發揮全新潛力。",
        afterTitle: "選定參考後，把驗證過的規則儲存到 DESIGN.md。",
        afterBody: "無法確認的字型與元件不會寫入。AI 程式助理只讀取參考庫中有依據的資訊。",
        beforeSignals: ["抽象讚美", "沒有使用者動作", "制式三段句"],
        afterSignals: ["操作明確", "結果可以檢查", "依據範圍清楚"],
        ruleIds: ["COPY-01", "COPY-03", "EVIDENCE-01"],
        reason: "沒有新增成效承諾，只把產品既有功能與限制提到前面。",
      },
      {
        id: "locale",
        tab: "多語內容",
        beforeTitle: "透過 AI 程式代理可以進行設計工作的執行。",
        beforeBody: "如果沿用英文的主詞與語序，五種語言版本看起來只是在替換字形，讀起來不像為各語言獨立撰寫的內容。",
        afterTitle: "AI 程式助理會先讀 DESIGN.md，再改善實際產品頁面。",
        afterBody: "指令與產品行為維持不變；主詞、節奏、用語與資訊順序則依各語言重新安排。",
        beforeSignals: ["「透過」句型", "名詞堆疊", "沿用英文語序"],
        afterSignals: ["動作清楚", "事實受到保護", "各語言獨立成稿"],
        ruleIds: ["LOCALE-01", "LOCALE-02", "COPY-02"],
        reason: "多語一致不是讓句子長得一樣，而是讓不同語言的讀者自然理解相同事實與操作。",
      },
      {
        id: "interface",
        tab: "介面",
        beforeTitle: "由裝飾決定版面的頁面",
        beforeBody: "漸層主視覺、圖示方塊、卡片層層包覆、左側強調線和重複三欄，比內容本身的用途更搶眼。",
        afterTitle: "由使用者任務決定版面的頁面",
        afterBody: "品牌表現只留一個重點。步驟按順序呈現，比較內容放在兩側，只有獨立項目才使用卡片。",
        beforeSignals: ["巢狀卡片", "重複圖示方塊", "沒有用途的強調線"],
        afterSignals: ["內容帶動的層級", "更少的容器", "單一視覺特色"],
        ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-01", "VISUAL-02"],
        reason: "這不是換上另一種流行風格，而是移除無法說明項目或操作的容器。",
      },
    ],
    classifierTitle: "三種標籤不能混在一起",
    classifierLead: "把模式趨同、產品品質與個人偏好分開，檢查結果會更精準，也不會把審美偏好包裝成共同標準。",
    classifications: [
      { label: "SLOP", title: "缺少脈絡的模式群組", body: "沒有產品依據的預設模式反覆疊加，削弱資訊層級、信任與品牌辨識度。" },
      { label: "QUALITY", title: "可量測或可重現的缺陷", body: "無障礙、內容溢出、異常狀態、效能或互動沒有通過檢查，或不符合產品約定。" },
      { label: "PREFERENCE", title: "合理的設計選擇", body: "這項選擇符合設計需求與 DESIGN.md。即使有其他做法，也不表示目前的設計有缺陷。" },
    ],
    workflowTitle: "不用推翻整套風格，也能找出、修正並複查",
    workflowLead: "檢查從產品依據開始，以最小修改結束。不會先挑一種更流行的視覺風格。",
    workflow: [
      { title: "閱讀產品頁面", body: "先記下目標使用者、主要操作、必須保留的行為與設計依據。" },
      { title: "收集可量測的依據", body: "記錄 DOM、CSS、重複次數、程式碼位置與瀏覽器結果，再結合產品脈絡判斷。" },
      { title: "確認模式群組", body: "對照頻率、相鄰模式、DESIGN.md 例外與頁面影響，刪掉缺少依據的結論。" },
      { title: "聚焦修正", body: "只修改恢復產品層級所需的容器、文案與視覺處理。" },
      { title: "回到同一個頁面複查", body: "使用修改前相同的桌面、行動裝置、互動、無障礙與語言條件完成驗證。" },
    ],
    sourcesTitle: "判定方式參考了哪些研究",
    sourcesLead: "分類架構由 OmD 定義。保留語意、判斷模式群組與依據優先的原則，參考了以下公開專案。",
    sources: [
      { label: "im-not-ai", href: "https://github.com/epoko77-ai/im-not-ai", note: "辨識韓語翻譯腔，並在保留原意的前提下局部修改。" },
      { label: "Humanizer", href: "https://github.com/blader/humanizer", note: "以多項訊號共同判斷，不因單一詞彙重寫整段內容。" },
      { label: "stop-slop", href: "https://github.com/hardikpandya/stop-slop", note: "減少填充語、制式對比和缺少細節的泛化文案。" },
      { label: "Impeccable Slop Detector", href: "https://impeccable.style/slop/", note: "將 slop 模式與一般品質問題分開的公開目錄。" },
      { label: "Taste Skill", href: "https://github.com/leonxlnx/taste-skill", note: "先讀設計需求與目標使用者，再限制生成時的預設模式。" },
      { label: "Anthropic frontend-design", href: "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md", note: "從具體主題決定方向，只保留一個有依據的特色，並在實作前後自我檢查。" },
      { label: "Vercel Web Interface Guidelines", href: "https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md", note: "針對正式環境檢查互動、長內容、響應式、狀態、動效與多語內容。" },
      { label: "Carbon Design System", href: "https://carbondesignsystem.com/elements/spacing/overview/", note: "依任務調整密度、空間群組、網格節奏，以及操作型與表現型字體。" },
      { label: "W3C Cards", href: "https://design-system.w3.org/components/cards.html", note: "優先安排內容順序，並讓卡片邊界具有無障礙的結構意義。" },
      { label: "GOV.UK Design System", href: "https://design-system.service.gov.uk/styles/layout/", note: "可讀行寬、小螢幕優先構圖、明確操作與元件適用條件。" },
      { label: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/layout", note: "優先順序、群組、自適應層級、漸進揭露與平台脈絡。" },
      { label: "Atlassian Elevation", href: "https://atlassian.design/foundations/elevation", note: "讓表面深度對應真實層級與互動；不需要抬升時優先使用留白或邊界。" },
      { label: "Microsoft Language Style Guides", href: "https://learn.microsoft.com/globalization/reference/microsoft-style-guides", note: "將韓語、日語、簡體中文與繁體中文分別視為獨立的在地化版本。" },
      { label: "Primer 產品 UI 模式", href: "https://primer.style/product/ui-patterns/", note: "把空狀態、載入、降級、導覽與儲存放進實際產品流程中說明。" },
      { label: "Carbon 資料表", href: "https://carbondesignsystem.com/components/data-table/usage/", note: "依任務選擇列密度、對齊表頭和工具列，並判斷何時該用表格而不是卡片。" },
      { label: "Fluent 2 卡片", href: "https://fluent2.microsoft.design/components/web/react/core/card/usage", note: "卡片對應單一概念或物件，內部層級與互動方式也應遵循這個邊界。" },
      { label: "Fluent 2 形狀", href: "https://fluent2.microsoft.design/shapes", note: "區分矩形、圓形、膠囊形與浮層指示形，並依尺寸和脈絡選擇圓角。" },
      { label: "USWDS 卡片", href: "https://designsystem.digital.gov/components/card/", note: "卡片用於集合中的模組化摘要，不應取代裝飾、單一操作、表格或連續內文。" },
      { label: "Primer 空狀態與載入", href: "https://primer.style/product/ui-patterns/empty-states/", note: "把狀態說明、復原操作、進度範圍與載入時機視為產品介面的一部分。" },
    ],
  },
};
function withRecipe(base: BaseDictionary, locale: DocsLocale): CliDocsDictionary {
  const recipe = SHADCN_RECIPE[locale];
  return { ...base, nav: { ...base.nav, shadcn: recipe.navLabel }, shadcn: recipe };
}

export const CLI_DOCS: Record<DocsLocale, CliDocsDictionary> = {
  en: withRecipe(en, "en"),
  ko: withRecipe(ko, "ko"),
  ja: withRecipe(ja, "ja"),
  "zh-cn": withRecipe(zhCn, "zh-cn"),
  "zh-tw": withRecipe(zhTw, "zh-tw"),
};
