import type { DocsLocale, DocsPage } from "@/lib/docs/locales";

export const CLI_INSTALL_COMMAND = "npx oh-my-design-cli@latest";
export const CLI_DOCTOR_COMMAND = "npx oh-my-design-cli@latest doctor";

type Outcome = {
  title: string;
  description: string;
  prompt: string;
  result: string;
};

type Step = {
  title: string;
  body: string;
  command?: string;
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

type Trouble = {
  symptom: string;
  fix: string;
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

export interface CliDocsDictionary {
  localeName: string;
  metaDescription: string;
  ui: {
    product: string;
    docs: string;
    language: string;
    copy: string;
    copied: string;
    openBuilder: string;
    github: string;
    onThisPage: string;
    previous: string;
    next: string;
    actualOutput: string;
    prompt: string;
    result: string;
    files: string;
    verified: string;
    homeAria: string;
    pagination: string;
    skillsLabel: string;
    pipeline: string;
    pipelineNote: string;
    skipContent: string;
    copyFailed: string;
    copyPage: string;
    pageCopied: string;
    pageTools: string;
    morePageActions: string;
    viewMarkdown: string;
    copyForAgent: string;
    ready: string;
  };
  nav: Record<DocsPage, string>;
  overview: {
    eyebrow: string;
    title: string;
    lead: string;
    truthTitle: string;
    truthBody: string;
    proof: string;
    outcomesTitle: string;
    outcomesLead: string;
    outcomes: Outcome[];
    installTitle: string;
    installBody: string;
    afterInstall: string;
    differentiatorTitle: string;
    differentiators: string[];
  };
  gettingStarted: {
    eyebrow: string;
    title: string;
    lead: string;
    prerequisitesTitle: string;
    prerequisites: string[];
    stepsTitle: string;
    steps: Step[];
    channelsTitle: string;
    channels: Array<{ name: string; body: string; command: string }>;
    doneTitle: string;
    doneBody: string;
  };
  demo: {
    eyebrow: string;
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
    eyebrow: string;
    title: string;
    lead: string;
    workflows: Workflow[];
  };
  skills: {
    eyebrow: string;
    title: string;
    lead: string;
    countNote: string;
    groups: SkillGroup[];
    routingTitle: string;
    routingBody: string;
  };
  antiSlop: {
    eyebrow: string;
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
  showcase: {
    eyebrow: string;
    title: string;
    lead: string;
    productCase: {
      eyebrow: string;
      title: string;
      lead: string;
      beforeLabel: string;
      afterLabel: string;
      beforeAlt: string;
      afterAlt: string;
      videoLabel: string;
      videoSummary: string;
      metrics: string[];
      promptLabel: string;
      prompt: string;
      disclosure: string;
      historicalNote: string;
      promptLinkLabel: string;
      provenanceLinkLabel: string;
    };
    caseTitle: string;
    caseBrief: string;
    beforeTitle: string;
    before: string[];
    afterTitle: string;
    after: string[];
    prompt: string;
    changedFiles: string[];
    verification: string[];
    honesty: string;
    previewStats: string[];
  };
  troubleshooting: {
    eyebrow: string;
    title: string;
    lead: string;
    doctorTitle: string;
    doctorBody: string;
    cases: Trouble[];
  };
  ai: {
    eyebrow: string;
    title: string;
    lead: string;
    machineTitle: string;
    machineBody: string;
    machineLinks: Array<{ label: string; href: string; description: string }>;
    promptTitle: string;
    prompt: string;
    contractTitle: string;
    contract: string[];
    builderTitle: string;
    builderBody: string;
  };
}

const sharedSkillIds = {
  system: ["omd:init", "omd:apply", "omd:sync", "omd:remember", "omd:learn", "omd:taste"],
  build: ["omd:harness", "omd:orchestrator", "omd:asset-fetch", "omd:codex-image", "claude-design"],
  quality: ["omd:feel", "omd:slop-audit", "omd:designer-review", "omd:final-qa", "omd:experiment-gallery"],
  content: ["omd:kr-writer", "omd:locale-adapter", "omd:humanize"],
  evidence: ["omd:reference-capture"],
} as const;

const en: CliDocsDictionary = {
  localeName: "English",
  metaDescription: "Install oh-my-design, give your AI coding agent quality-graded design context, and ship a real interface with auditable workflows.",
  ui: {
    product: "oh-my-design CLI",
    docs: "Documentation",
    language: "Language",
    copy: "Copy",
    copied: "Copied",
    openBuilder: "Open Builder",
    github: "GitHub",
    onThisPage: "On this page",
    previous: "Previous",
    next: "Next",
    actualOutput: "Actual project output",
    prompt: "Prompt",
    result: "Result",
    files: "Changed files",
    verified: "Verification",
    homeAria: "oh-my-design home",
    pagination: "Documentation pagination",
    skillsLabel: "Skills",
    pipeline: "Quality-graded reference → DESIGN.md → build → verify",
    pipelineNote: "141 verified_v2 · 159 partial · 140 legacy. Use verified_v2 for demos.",
    skipContent: "Skip to documentation",
    copyFailed: "Copy failed",
    copyPage: "Copy page",
    pageCopied: "Page copied",
    pageTools: "Page tools",
    morePageActions: "More page actions",
    viewMarkdown: "View as Markdown",
    copyForAgent: "Copy for AI agent",
    ready: "Ready",
  },
  nav: {
    overview: "Overview",
    "getting-started": "Getting started",
    demo: "Live demo",
    workflows: "Workflows",
    skills: "Skills",
    "anti-slop": "AI slop",
    showcase: "Showcase",
    troubleshooting: "Troubleshooting",
    ai: "Docs for AI",
  },
  overview: {
    eyebrow: "DESIGN CONTEXT FOR CODING AGENTS",
    title: "Your agent already writes code. Give it design judgment and ground truth.",
    lead: "oh-my-design brings a quality-graded reference catalog and reusable design workflows into the coding tool you already use, with specialist agent roles on channels that support them. Then you work in natural language.",
    truthTitle: "The CLI prepares the environment your coding agent works in.",
    truthBody: "The bundle contains 20 skills, 18 agent definitions, and 440 quality-graded DESIGN.md references: 141 verified_v2, 159 partial, and 140 legacy snapshots. Use verified_v2 references for public demos. Claude Code, Codex, and OpenCode receive compatible skills, roles, and catalog data; Cursor receives a project rule and catalog.",
    proof: "20 product skills · 18 specialist agents · 141 verified_v2 / 159 partial / 140 legacy · zero AI calls during install",
    outcomesTitle: "Start with the result you need",
    outcomesLead: "You do not need to memorize skill names. Describe the product surface; the installed skill layer routes the work.",
    outcomes: [
      {
        title: "Create a design system",
        description: "Turn a product brief and one verified_v2 reference into a project-owned DESIGN.md without pretending unknown facts are known.",
        prompt: "Set up a calm, trustworthy design system for our family finance app. Use Toss as a reference, but keep our existing logo and copy.",
        result: "DESIGN.md, agent shims, explicit token deltas, and a confirmed first surface.",
      },
      {
        title: "Build a complete surface",
        description: "Run discovery, IA, wireframes, components, copy, accessibility, and validation as one checkpointed workflow.",
        prompt: "Design and implement the onboarding for this app. Keep the current stack and use our DESIGN.md as ground truth.",
        result: "A working surface, state coverage, validation notes, and handoff artifacts inside the repository.",
      },
      {
        title: "Improve an existing UI",
        description: "Audit what is already there, preserve product behavior, and fix hierarchy, rhythm, accessibility, and generic AI patterns.",
        prompt: "Improve the pricing page without changing its URLs or field names. Explain the high-impact design fixes and verify the result.",
        result: "Focused code changes, a before/after rationale, and deterministic quality checks.",
      },
    ],
    installTitle: "One command, then one product prompt",
    installBody: "Run this at the project root. The installer detects your coding agents and lets you choose the target channels.",
    afterInstall: "Restart the agent, run doctor once, then describe the interface you want. No daemon, API key, or MCP server is required.",
    differentiatorTitle: "What OmD adds to the current design-skill wave",
    differentiators: [
      "Taste-style anti-slop guidance, but anchored to a project-owned DESIGN.md instead of taste alone.",
      "Impeccable-style audit vocabulary and deterministic gates, plus reference evidence and multi-agent delivery.",
      "Catalog quality is explicit; public demos use verified_v2 evidence, and unknown values are omitted instead of replaced with plausible fallbacks.",
      "The builder remains the visual reference entry point; the CLI carries that context into the user’s own codebase.",
    ],
  },
  gettingStarted: {
    eyebrow: "FIRST 5 MINUTES",
    title: "Install, verify, make one visible change.",
    lead: "The fastest successful path is deliberately short. Install the bundle, let doctor check the real files, then ask for one product surface.",
    prerequisitesTitle: "Before you begin",
    prerequisites: ["Node.js 18 or newer", "A project repository", "Claude Code, Codex, OpenCode, or Cursor"],
    stepsTitle: "Quick start",
    steps: [
      { title: "Open your project root", body: "The project-level install keeps the design context versioned with the product." },
      { title: "Install the bundle", body: "Interactive mode detects the tools already present and defaults to the complete product bundle.", command: CLI_INSTALL_COMMAND },
      { title: "Reload and verify", body: "Restart your coding agent so it discovers the new skills. Doctor reports missing catalogs, agents, or DESIGN.md instead of declaring a false green.", command: CLI_DOCTOR_COMMAND },
      { title: "Ask for the first outcome", body: "Start with a concrete surface. The agent will inspect the repository before it asks for design decisions.", command: "Improve the home screen using our DESIGN.md. Preserve behavior and verify the result." },
    ],
    channelsTitle: "Non-interactive channel installs",
    channels: [
      { name: "Codex", body: "Installs skills, embedded agent roles, helpers, and the local reference catalog.", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "Claude Code", body: "Installs skills, sub-agents, catalog, and safely merged project hooks.", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "OpenCode", body: "Installs skills, native sub-agents, and the offline catalog. Project files live under `.opencode`; `--global` uses `~/.config/opencode`, verified with `doctor --global`.", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "Installs the rules shim and shared catalog used by the editor workflow.", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ],
    doneTitle: "You are done when the product changed, not when installation succeeded.",
    doneBody: "A healthy first run leaves a visible UI improvement, a project DESIGN.md, and a clear next prompt. The installer is only activation infrastructure.",
  },
  demo: {
    eyebrow: "LIVE DEMO PLAYBOOK",
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
    eyebrow: "RECIPES",
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
    eyebrow: "CAPABILITY MAP",
    title: "20 product skills, organized by outcome.",
    lead: "Skill names are useful for explicit control, but normal product requests should trigger them naturally. The release bundle ships the 20 product skills listed below.",
    countNote: "20 product skills · 18 specialist agents",
    groups: [
      { title: "Own the system", description: "Create, apply, synchronize, and evolve the project’s design ground truth.", skills: [...sharedSkillIds.system] },
      { title: "Build the surface", description: "Move from brief to a working, asset-aware interface and handoff.", skills: [...sharedSkillIds.build] },
      { title: "Prove quality", description: "Inspect feel, design consistency, accessibility, and final publish readiness.", skills: [...sharedSkillIds.quality] },
      { title: "Write for the audience", description: "Generate native Korean prose and adapt it across locales without literal translation.", skills: [...sharedSkillIds.content] },
      { title: "Ground references in evidence", description: "Capture live public surfaces into versioned evidence without inventing missing tokens.", skills: [...sharedSkillIds.evidence] },
    ],
    routingTitle: "You can name a skill, but you should not have to.",
    routingBody: "“Improve this checkout and verify it” is a better product prompt than manually chaining four skills. OmD keeps explicit names for experts while routing ordinary language to the right workflow.",
  },
  antiSlop: {
    eyebrow: "A WORKING DEFINITION",
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
  showcase: {
    eyebrow: "REAL OUTPUT, OPEN EVIDENCE",
    title: "See the working concept before you trust the promise.",
    lead: "Applepresso is a repository-owned, controlled redesign that exposes the full OmD loop: selected design context, real assets, working surfaces, specialist review, and final QA.",
    productCase: {
      eyebrow: "REPOSITORY-OWNED CONCEPT RUN",
      title: "Applepresso: from a generic order flow to a coherent three-page product.",
      lead: "A controlled experiment used selected design context, real image assets, specialist review, and final QA. Inspect the walkthrough, before-and-after screens, archived prompt, and provenance—not just a polished hero image.",
      beforeLabel: "Controlled baseline",
      afterLabel: "Design system applied",
      beforeAlt: "A deliberately generic yellow coffee-ordering interface used as the controlled baseline.",
      afterAlt: "The same Applepresso home surface after applying a graphite and cream design system with custom coffee imagery.",
      videoLabel: "Edited Applepresso concept walkthrough",
      videoSummary: "A silent 20-second presentation moves from the generic baseline through the prompt, generated imagery, DESIGN.md, order flow, and completion state. It is not a real-time coding-agent recording.",
      metrics: ["Initial 3-page build", "34 / 34 assets generated", "18-minute initial run", "0 blocking QA findings"],
      promptLabel: "The mission",
      prompt: "Redesign a fast Korean coffee-ordering app as Applepresso. Preserve the low-price, fast-pickup model, use Apple as the visual reference and Baemin as Korean F&B context, create landing, menu, and detail surfaces with real assets, then run design review and final QA.",
      disclosure: "Controlled demonstration, not a customer product or conversion study. Applepresso is a repository-owned fictional study with no affiliation to Apple, Baemin, or Banapresso and no official production assets from those companies. This case makes the workflow and its limitations inspectable; it does not prove exact reproducibility or business lift.",
      historicalNote: "Captured with OmD 1.4 on Codex. The 18-minute measurement covers the initial three-page, 34-asset generation; the mobile flow and walkthrough were edited later from those outputs. The archived prompt mentions older MCP and Claude paths, while OmD 1.9 no longer requires MCP. Use the current Getting Started and Live Demo pages for a new run.",
      promptLinkLabel: "Inspect the archived prompt",
      provenanceLinkLabel: "Inspect provenance and limitations",
    },
    caseTitle: "From inventory-first docs to a five-language activation path",
    caseBrief: "New users saw a long list of skills and agents before they understood what to do. The rebuild starts with outcomes, makes the installer’s role explicit, and gives humans and AI the same source-backed navigation.",
    beforeTitle: "Before",
    before: ["One 1,482-line client page", "Internals before outcomes", "No locale routes", "No reliable doctor story"],
    afterTitle: "After",
    after: ["Eight task-oriented documentation pages", "English, Korean, Japanese, Simplified and Traditional Chinese", "Copyable first prompts and channel install paths", "Real doctor and install contract"],
    prompt: "Rebuild the CLI experience so a new user understands the outcome before the internals, sees a real result, and can continue in five languages. Preserve /builder as the product creation path.",
    changedFiles: ["web/src/app/docs/[locale]/[[...slug]]/page.tsx", "web/src/components/cli-docs/*", "web/src/data/cli-docs.ts", "src/cli/doctor.ts", "src/cli/install-skills.ts"],
    verification: ["5-locale route completeness", "CLI clean-install tests", "doctor degraded-state tests", "Home → /builder regression", "Production build"],
    honesty: "The visual below is a schematic map of this repository-owned docs rebuild, not a screenshot of a generated app. It does not claim an unrelated app was produced by a one-shot prompt.",
    previewStats: ["20 skills", "18 agents", "10 phases"],
  },
  troubleshooting: {
    eyebrow: "RECOVERY",
    title: "When it fails, make the next action obvious.",
    lead: "Run doctor first. It checks channel-specific skills, agents, catalogs, and project activation instead of treating one discovered file as a healthy install.",
    doctorTitle: "Start with one diagnostic",
    doctorBody: "Use JSON output in CI or paste the human report into your coding agent. A degraded bundle exits non-zero.",
    cases: [
      { symptom: "The skill does not appear after install", fix: "Restart the coding agent. Skill discovery happens at session start in most tools, then rerun doctor." },
      { symptom: "Doctor says the catalog is missing", fix: "Rerun the latest installer for the exact channel. Do not copy a random reference into another channel’s data directory." },
      { symptom: "The agent says there is no design context", fix: "Ask it to set up the project design system. Confirm the proposal before DESIGN.md is written." },
      { symptom: "The result replaced behavior or content I wanted to keep", fix: "Revert that focused change, state the protected behavior explicitly, and record the correction with omd:remember." },
      { symptom: "A reference claims a font or component without evidence", fix: "Remove only the unresolved field or empty group. Never substitute a system font or generic component as brand fact." },
    ],
  },
  ai: {
    eyebrow: "HUMAN + MACHINE READABLE",
    title: "Give your agent the same documentation you can inspect.",
    lead: "Every documentation route has a stable information architecture. Machine indexes expose the raw catalog and product contract without requiring a browser session or deprecated MCP connector.",
    machineTitle: "Machine-readable entry points",
    machineBody: "Use the compact index for routing and the full file when the agent needs the product model, reference rules, and workflow details.",
    machineLinks: [
      { label: "llms.txt", href: "/llms.txt", description: "Compact English index for agents and crawlers." },
      { label: "llms.ko.txt", href: "/llms.ko.txt", description: "Korean product and catalog index." },
      { label: "llms-full.txt", href: "/llms-full.txt", description: "Expanded documentation and catalog context." },
      { label: "Raw DESIGN.md", href: "/toss/design.md", description: "Stable per-reference source path: /<id>/design.md." },
    ],
    promptTitle: "A strong agent handoff prompt",
    prompt: "Read DESIGN.md first. Preserve existing routes, behaviors, and user copy unless I explicitly ask to change them. Improve the checkout hierarchy and states, use only verified design tokens, omit unknown reference fields, and run the relevant accessibility and interface-feel checks before reporting.",
    contractTitle: "The contract your agent should retain",
    contract: ["DESIGN.md is project ground truth.", "Unknown reference data is absent, never replaced by a plausible fallback.", "Reference evidence and product facts stay in their correct domains.", "A UI task is complete only after the real product route is verified.", "User corrections become scoped preferences, not chat-only memory."],
    builderTitle: "Builder remains the visual preview.",
    builderBody: "These docs explain the CLI handoff. Reference discovery and visual preview still run through Home → Builder.",
  },
};

const ko: CliDocsDictionary = {
  ...en,
  localeName: "한국어",
  metaDescription: "oh-my-design을 설치하고 AI 코딩 에이전트에 품질 등급이 표시된 디자인 맥락을 연결해 실제 화면을 만드는 방법을 안내합니다.",
  ui: { product: "oh-my-design CLI", docs: "문서", language: "언어", copy: "복사", copied: "복사됨", openBuilder: "Builder 열기", github: "GitHub", onThisPage: "이 페이지에서", previous: "이전", next: "다음", actualOutput: "실제 프로젝트 결과", prompt: "프롬프트", result: "결과", files: "변경 파일", verified: "검증", homeAria: "oh-my-design 홈", pagination: "문서 페이지 이동", skillsLabel: "스킬", pipeline: "품질 등급 레퍼런스 → DESIGN.md → 구현 → 검증", pipelineNote: "verified_v2 141개 · partial 159개 · legacy 140개. 공개 데모는 verified_v2를 사용하세요.", skipContent: "문서 본문으로 건너뛰기", copyFailed: "복사 실패", copyPage: "페이지 복사", pageCopied: "페이지 복사됨", pageTools: "페이지 도구", morePageActions: "페이지 작업 더 보기", viewMarkdown: "Markdown으로 보기", copyForAgent: "AI 에이전트용으로 복사", ready: "준비 완료" },
  nav: { overview: "개요", "getting-started": "시작하기", demo: "라이브 데모", workflows: "워크플로", skills: "스킬", "anti-slop": "AI slop", showcase: "실제 사례", troubleshooting: "문제 해결", ai: "AI용 문서" },
  overview: {
    eyebrow: "코딩 에이전트를 위한 디자인 맥락",
    title: "코드는 이미 잘 씁니다. 이제 디자인 판단에 근거를 더하세요.",
    lead: "품질 등급이 표시된 레퍼런스와 반복 가능한 디자인 작업 흐름을 Claude Code·Codex·OpenCode·Cursor에 설치합니다. 이후에는 만들 화면과 지킬 조건만 말하면 됩니다.",
    truthTitle: "CLI는 에이전트가 일할 환경을 준비합니다.",
    truthBody: "번들은 제품 스킬 20개, 에이전트 정의 18개, 품질 등급이 표시된 DESIGN.md 레퍼런스 440개를 담습니다. 현재 verified_v2 141개, partial 159개, legacy snapshot 140개이며 공개 데모에는 verified_v2를 사용합니다. Claude Code·Codex·OpenCode에는 호환되는 스킬·역할·카탈로그가 들어가고, Cursor에는 프로젝트 규칙과 카탈로그가 들어갑니다.",
    proof: "제품 스킬 20개 · 전문 에이전트 18개 · verified_v2 141 / partial 159 / legacy 140 · 설치 중 AI 호출 0회",
    outcomesTitle: "필요한 결과부터 고르세요",
    outcomesLead: "스킬 이름을 외울 필요가 없습니다. 만들 화면과 지킬 조건을 말하면 필요한 스킬이 선택됩니다.",
    outcomes: [
      { title: "디자인 시스템 만들기", description: "제품 설명과 verified_v2 레퍼런스를 프로젝트 소유 DESIGN.md로 바꿉니다. 모르는 사실을 아는 척 채우지 않습니다.", prompt: "가족 자산관리 앱에 차분하고 신뢰감 있는 디자인 시스템을 잡아줘. Toss를 참고하되 기존 로고와 카피는 유지해줘.", result: "DESIGN.md, 에이전트 연결 파일, 명시적인 토큰 차이, 확정된 첫 화면." },
      { title: "완성된 화면 만들기", description: "발견·IA·와이어프레임·컴포넌트·카피·접근성·검증을 체크포인트가 있는 하나의 흐름으로 진행합니다.", prompt: "이 앱의 온보딩을 설계하고 구현해줘. 현재 스택을 유지하고 DESIGN.md를 정본으로 사용해줘.", result: "동작하는 화면, 상태 커버리지, 검증 기록, 저장소 안의 핸드오프 산출물." },
      { title: "기존 UI 개선하기", description: "제품 동작은 보존하면서 위계·리듬·접근성·전형적인 AI UI 패턴을 진단하고 고칩니다.", prompt: "URL과 폼 필드명은 바꾸지 말고 가격 페이지를 개선해줘. 영향이 큰 수정부터 적용하고 결과를 검증해줘.", result: "집중된 코드 수정, 전후 근거, 결정론적 품질 검사." },
    ],
    installTitle: "명령어 한 번, 제품 프롬프트 한 번",
    installBody: "프로젝트 루트에서 실행하세요. 설치기가 사용 중인 코딩 에이전트를 감지하고 설치할 채널을 고르게 합니다.",
    afterInstall: "에이전트를 재시작하고 doctor를 한 번 실행한 뒤 원하는 화면을 설명하세요. 데몬·API 키·MCP 서버가 필요하지 않습니다.",
    differentiatorTitle: "최근 디자인 스킬 흐름에 OmD가 더하는 것",
    differentiators: ["Taste 계열의 anti-slop 판단을 취향만이 아니라 프로젝트 DESIGN.md에 고정합니다.", "Impeccable 계열의 감사 어휘와 결정론적 게이트에 레퍼런스 증거와 멀티 에이전트 실행을 더합니다.", "검증되지 않은 브랜드 값은 그럴듯한 폴백으로 채우지 않고 비워 둡니다.", "Builder는 시각 레퍼런스 진입점으로 유지하고 CLI는 그 맥락을 사용자의 코드베이스로 옮깁니다."],
  },
  gettingStarted: {
    eyebrow: "첫 5분",
    title: "설치하고, 검증하고, 눈에 보이는 한 가지를 바꾸세요.",
    lead: "번들을 설치하고 doctor로 설치 상태를 확인한 뒤, 바꿀 화면 하나를 요청하세요.",
    prerequisitesTitle: "준비물",
    prerequisites: ["Node.js 18 이상", "제품 저장소", "Claude Code, Codex, OpenCode 또는 Cursor"],
    stepsTitle: "빠른 시작",
    steps: [
      { title: "프로젝트 루트 열기", body: "프로젝트 설치를 사용하면 디자인 맥락도 제품 코드와 함께 버전 관리됩니다." },
      { title: "전체 번들 설치", body: "대화형 설치는 이미 쓰는 도구를 감지하고 전체 제품 번들을 기본값으로 제안합니다.", command: CLI_INSTALL_COMMAND },
      { title: "재시작하고 검증", body: "코딩 에이전트를 재시작해 스킬을 다시 읽게 하세요. doctor는 일부 파일만 보고 성공이라 하지 않고 카탈로그·에이전트·DESIGN.md 누락을 알려줍니다.", command: CLI_DOCTOR_COMMAND },
      { title: "첫 결과 요청", body: "구체적인 화면부터 시작하세요. 에이전트는 디자인 질문 전에 저장소를 먼저 살펴봅니다.", command: "DESIGN.md를 적용해 홈 화면을 개선해줘. 동작은 보존하고 결과를 검증해줘." },
    ],
    channelsTitle: "채널별 비대화형 설치",
    channels: [
      { name: "Codex", body: "스킬, 본문이 내장된 에이전트 역할, 헬퍼, 로컬 레퍼런스 카탈로그를 설치합니다.", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "Claude Code", body: "스킬, 서브에이전트, 카탈로그와 안전하게 병합되는 프로젝트 훅을 설치합니다.", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "OpenCode", body: "스킬·네이티브 서브에이전트·오프라인 카탈로그를 설치합니다. 프로젝트는 `.opencode`, `--global`은 `~/.config/opencode`를 사용하며 `doctor --global`로 진단합니다.", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "에디터 흐름에서 쓰는 규칙 shim과 공유 카탈로그를 설치합니다.", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ],
    doneTitle: "첫 실행의 완료 기준은 눈에 보이는 UI 변화입니다.",
    doneBody: "좋은 첫 실행은 눈에 보이는 UI 개선, 프로젝트 DESIGN.md, 명확한 다음 프롬프트를 남깁니다. 설치기는 활성화 인프라일 뿐입니다.",
  },
  demo: {
    eyebrow: "라이브 데모 플레이북",
    title: "관객이 실제 제품의 변화를 보게 하세요.",
    lead: "좋은 oh-my-design 데모는 스킬 이름을 훑는 시간이 아닙니다. 눈에 보이는 문제 하나에서 시작해 제품이 의존하는 동작을 지키고, 누구나 확인할 수 있는 근거와 함께 실제 라우트에서 끝납니다.",
    formatsTitle: "결과를 증명할 수 있는 가장 작은 형식을 고르세요",
    formatsLead: "시간은 작업 범위만 줄일 뿐, 근거를 줄이지 않습니다. 데모 전에 형식을 하나 고르고 무엇을 바꾸지 않을지 먼저 선언하세요.",
    formats: [
      {
        duration: "5분",
        title: "눈에 띄는 문제 하나 고치기",
        when: "기존 페이지는 동작하지만 평범하거나 이해하기 어려울 때",
        goal: "동작을 보존하면서 위계·간격·상태·접근성 문제 중 영향이 큰 하나를 고칩니다.",
        proof: "수정 전 화면, 집중된 변경점, 그리고 같은 실제 라우트에서 동작하는 수정 후 화면.",
      },
      {
        duration: "15분",
        title: "완결된 화면 하나 출시하기",
        when: "기술 스택과 컴포넌트가 있고 흐름의 범위가 명확할 때",
        goal: "프로젝트 디자인 맥락으로 작은 화면 하나와 로딩·빈 화면·오류·성공 상태를 구현합니다.",
        proof: "동작하는 라우트, 상태 커버리지, 변경 파일, 실제로 실행한 검사.",
      },
      {
        duration: "30분",
        title: "체크포인트 기반 하네스 실행하기",
        when: "새롭거나 모호해서 조사와 디자인 시스템 결정이 필요한 화면일 때",
        goal: "필수 승인 단계를 건너뛰지 않고 발견·여정·DESIGN.md 제안·구현·검증까지 진행합니다.",
        proof: "사용자 여정, DESIGN.md 패치, 동작하는 UI, 검증 요약, 세 번의 사용자 체크포인트.",
      },
    ],
    runbookTitle: "반복해서 쓸 수 있는 6단계 진행표",
    runbookLead: "밋업·워크숍·화면 녹화에서 같은 순서를 사용하세요. CLI는 환경을 준비하고, 실제 UI 작업은 코딩 에이전트가 저장소 안에서 수행합니다.",
    steps: [
      {
        title: "눈에 보이는 문제 하나와 보존할 동작 하나를 정하기",
        body: "실제 라우트를 열어 관객이 확인할 문제를 정확히 가리키세요. URL·데이터 흐름·필드명·카피·상호작용 중 무엇을 바꾸면 안 되는지도 함께 선언합니다.",
      },
      {
        title: "번들을 설치하고 doctor로 실제 상태 확인하기",
        body: "프로젝트 루트에서 두 명령을 실행하고 설치 후 코딩 에이전트를 재시작하세요. 설치 성공 자체를 결과처럼 소개하지 않습니다.",
        command: `${CLI_INSTALL_COMMAND}\n${CLI_DOCTOR_COMMAND}`,
      },
      {
        title: "DESIGN.md와 verified_v2 근거 대조하기",
        body: "공개 데모에는 verified_v2 레퍼런스를 고르세요. 기존 DESIGN.md와 함께 읽게 한 뒤 해당 제품 화면에 속하는 근거만 승격하고, 모르는 폰트·토큰·컴포넌트 주장은 비워 둡니다.",
      },
      {
        title: "실제 화면과 핵심 상태 구현하기",
        body: "현재 기술 스택과 컴포넌트를 사용합니다. 새 흐름이라면 정적인 성공 목업만 다듬지 말고 사용자가 실제로 마주칠 상태를 포함하세요.",
      },
      {
        title: "제품 화면에서 직접 점검하기",
        body: "제품 라우트를 열고 보존하기로 한 동작을 직접 확인한 뒤 접근성과 interface-feel 검사를 실행하세요. 실제로 실행한 검사와 측정값만 보고합니다.",
      },
      {
        title: "관객의 교정을 기록하기",
        body: "사용자가 시각 결정을 교정하면 그 범위만 고치고 omd:remember로 남겨 다음 세션에서 같은 실수를 반복하지 않게 합니다.",
      },
    ],
    starterPromptTitle: "5분 라이브 개선에 쓸 프롬프트",
    starterPrompt: "먼저 DESIGN.md를 읽고 현재 제품 라우트를 확인해. URL, 데이터 흐름, 필드명, 기존 사용자 동작은 보존하면서 이 페이지에서 눈에 보이는 위계 또는 상태 문제 하나를 개선해. 공개 데모에는 verified_v2 레퍼런스를 사용하고 이 제품 화면에 해당하는 근거만 정합해. 모르는 값은 폴백으로 채우지 말고 생략해. 실제 화면에 구현하고 핵심 상태를 다룬 다음, 그 라우트에서 검증해서 변경 파일과 실제로 실행한 검사를 보고해. DESIGN.md 확장이나 필수 하네스 체크포인트를 넘기기 전에는 내게 확인해.",
    proofTitle: "관객이 직접 확인할 수 있어야 하는 근거",
    proofLead: "진행하면서 아래 증거를 남기세요. 추적 가능한 과정이 없는 멋진 스크린샷은 검토 가능한 데모가 아닙니다.",
    proof: [
      "수정 전 화면과 처음에 지목한 한 가지 문제",
      "보존할 동작까지 포함한 정확한 프롬프트",
      "DESIGN.md 변경점과 의도적으로 생략한 미확인 필드",
      "분리된 목업이 아닌 실제 제품 라우트와 핵심 상태",
      "변경 파일과 실제 실행한 검사 또는 측정",
      "지속되고 범위가 명확한 선호로 기록한 사용자 교정",
    ],
    guardrailsTitle: "와우 포인트를 정직하게 유지하세요",
    guardrails: [
      { title: "CLI는 설치하고 진단합니다", body: "설치된 맥락을 읽고 UI를 수정하는 주체는 코딩 에이전트입니다. 설치기만으로 화면을 생성했다고 말하지 않습니다." },
      { title: "모르면 여전히 비워 둡니다", body: "누락된 브랜드 사실을 시스템 폰트·일반 컴포넌트·추정 토큰·인접 마케팅 화면으로 채우지 않습니다." },
      { title: "성과 연출보다 증거가 먼저입니다", body: "실제 전후 측정 없이 속도·전환율·접근성·성능이 개선됐다고 주장하지 않습니다." },
      { title: "필수 체크포인트는 그대로입니다", body: "30분 하네스도 사용자 여정·DESIGN.md 패치·검증 승인을 위해 멈춥니다. 라이브 관객이 있다는 이유로 생략할 수 없습니다." },
    ],
  },
  workflows: {
    eyebrow: "실행 레시피",
    title: "바로 쓸 수 있는 작업 목표",
    lead: "아래 레시피는 자연어 작업 계약입니다. 목표와 제약은 유지하고 도메인과 화면만 제품에 맞게 바꾸세요.",
    workflows: [
      { title: "브랜드 맥락 시작", when: "새 프로젝트 또는 DESIGN.md 없음", prompt: "바쁜 부모를 위한 한국형 식단 앱 디자인 시스템을 잡아줘. verified_v2 레퍼런스를 추천하고 차이를 설명한 뒤 DESIGN.md 작성 전에 확인해줘.", outputs: ["레퍼런스 추천", "DESIGN.md 제안", "에이전트 연결 파일"], skills: ["omd:init", "omd:sync"] },
      { title: "새 화면 출시", when: "완성된 페이지나 흐름", prompt: "결제 완료 흐름을 성공·실패·부분 성공 상태로 만들어줘. DESIGN.md와 기존 컴포넌트를 사용하고 접근성을 검증해줘.", outputs: ["사용자 여정", "동작하는 UI", "핵심 상태 전체", "검증 요약"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
      { title: "기존 화면 개선", when: "동작하지만 너무 평범한 UI", prompt: "이 대시보드에서 제품 맥락 없이 반복된 UI 패턴, 위계, 밀도, 모션, 접근성을 점검해줘. 동작을 유지하고 영향이 큰 수정부터 적용한 뒤 차이를 보여줘.", outputs: ["우선순위 점검", "집중된 패치", "전후 근거"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
      { title: "취향 교정 기록", when: "에이전트에 선호를 가르칠 때", prompt: "우리는 CTA에 대문자를 쓰지 않아. 이 선호를 프로젝트에 기록하고 버튼 동작은 바꾸지 말고 현재 화면만 수정해줘.", outputs: ["대기 중 선호", "범위가 지정된 UI 수정", "DESIGN.md 반영 제안"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
    ],
  },
  skills: {
    eyebrow: "기능 지도",
    title: "결과별로 묶인 제품 스킬 20개",
    lead: "전문가는 스킬 이름을 직접 지정할 수 있습니다. 보통은 만들 화면과 조건만 말하면 됩니다. 배포 패키지에는 아래 제품 스킬 20개가 포함됩니다.",
    countNote: "제품 스킬 20개 · 전문 에이전트 18개",
    groups: [
      { title: "프로젝트 디자인 기준 세우기", description: "프로젝트의 디자인 정본을 만들고 적용하고 동기화합니다.", skills: [...sharedSkillIds.system] },
      { title: "실제 화면 만들기", description: "요구사항에서 동작하는 UI와 전달 가능한 결과물까지 이어갑니다.", skills: [...sharedSkillIds.build] },
      { title: "결과 점검하기", description: "화면의 인상과 완성도, 패턴 수렴, 디자인 정합성, 접근성, 출간 준비를 확인합니다.", skills: [...sharedSkillIds.quality] },
      { title: "자연스러운 문장 쓰기", description: "한국어 원고를 만들고 다섯 언어에서 뜻과 사실을 지키며 다시 씁니다.", skills: [...sharedSkillIds.content] },
      { title: "레퍼런스 근거 확인하기", description: "누락값을 만들지 않고 공개 화면을 출처와 버전이 남는 근거로 기록합니다.", skills: [...sharedSkillIds.evidence] },
    ],
    routingTitle: "스킬 이름은 선택 사항입니다.",
    routingBody: "‘체크아웃을 개선하고 검증해줘’가 네 개의 스킬을 수동으로 잇는 것보다 좋은 제품 프롬프트입니다. OmD는 전문가를 위한 명시적 이름과 일반 언어 라우팅을 함께 제공합니다.",
  },
  antiSlop: {
    eyebrow: "판정 기준",
    title: "판단 없이 반복된 패턴을 AI slop으로 봅니다.",
    lead: "누가 만들었는지는 판정하지 않습니다. 제품 목적과 근거 대신 익숙한 패턴이 겹쳐 화면의 위계와 신뢰를 흐리면 AI slop으로 분류합니다.",
    definitionTitle: "패턴 하나만으로 결론 내리지 않아요",
    definitionBody: "둥근 카드, 보라색, 중앙 정렬 히어로, 짧은 슬로건은 모두 쓸 수 있습니다. 문제는 이유 없는 기본값이 한 화면에서 반복되고 제품마다 다른 정보 구조와 브랜드 인상을 지울 때 생깁니다.",
    definitionNote: "작성 도구는 알 수 없습니다. 대신 이 구조와 문장이 왜 이 제품에 필요한지, 그 판단의 근거가 남아 있는지 확인합니다.",
    principlesTitle: "모든 판정에 적용하는 네 가지 원칙",
    principles: [
      { title: "제품을 먼저 읽기", body: "독자, 할 일, 기존 동작, DESIGN.md가 일반적인 안티패턴 목록보다 우선합니다." },
      { title: "단서보다 군집 보기", body: "패턴 하나로 판정하지 않습니다. 반복 횟수, 이웃 패턴, 실제 영향을 함께 봅니다." },
      { title: "품질 오류 분리하기", body: "대비, 포커스, 화면 넘침, 깨진 상태는 품질 문제입니다. AI 느낌이라는 말로 뭉개지 않습니다." },
      { title: "가장 작은 수정부터", body: "동작과 콘텐츠를 보존합니다. 새 스타일을 덮기 전에 가장 큰 반복 군집부터 끊습니다." },
    ],
    atlasTitle: "생성형 UI를 검토하는 열 가지 관점",
    atlasLead: "금지 목록이 아니라 디자인 리뷰 질문으로 사용합니다. 반복되는 기본값, 디자이너가 지키려는 판단, 그 패턴이 여전히 유효한 조건을 함께 적었습니다.",
    slopSignalLabel: "수렴하는 기본값",
    designerPreferenceLabel: "디자이너가 지키는 것",
    validWhenLabel: "이럴 때는 유효",
    lenses: [
      { id: "hierarchy", title: "우선순위가 구도를 정합니다", question: "모든 라벨을 읽기 전에 무엇이 중요한지 알 수 있나요?", slop: "모든 섹션에 같은 제목 크기, 카드 수, 정렬, 시각 무게를 배분합니다.", preference: "핵심 행동을 가장 강한 자리에 두고 보조 정보는 실제 중요도만큼 조용하게 만듭니다.", validWhen: "반복이 실제 절차, 비교 항목, 동일한 종류의 대상을 나타낼 때입니다.", ruleIds: ["LAYOUT-01", "LAYOUT-05", "TYPE-01"] },
      { id: "containers", title: "컨테이너는 경계를 설명합니다", question: "각 상자가 대상, 행동, 선택, 레이어 중 하나를 나타내나요?", slop: "섹션을 카드로 감싸고 그 안의 패널과 설명을 다시 카드로 감쌉니다.", preference: "먼저 여백, 정렬, 타이포, 구분선을 씁니다. 경계 자체가 의미를 가질 때만 상자를 추가합니다.", validWhen: "독립적으로 이동·선택·닫기·재사용되는 표면일 때입니다.", ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-03"] },
      { id: "typography", title: "타이포는 읽는 방식을 알려줍니다", question: "이 화면은 훑기, 읽기, 비교, 조작 중 무엇을 위한 것인가요?", slop: "유행하는 한 폰트, 비슷한 크기, 반복되는 eyebrow와 디스플레이 처리가 위계를 평평하게 만듭니다.", preference: "과업에 맞게 행 길이, 굵기, 행간, 대비를 조절하고 한 영역 안에서는 역할을 일정하게 유지합니다.", validWhen: "한 글꼴만 써도 의도된 위계가 분명하고 제품 목소리에 맞을 때입니다.", ruleIds: ["TYPE-01", "TYPE-02", "TYPE-03"] },
      { id: "color", title: "색과 깊이는 각자 할 일이 있습니다", question: "강조색, 표면, 그림자, radius가 맡은 역할을 설명할 수 있나요?", slop: "그라데이션 글자, 글로우, 유리 효과, 큰 radius, 넓은 그림자가 동시에 중요하다고 외칩니다.", preference: "색은 브랜드·행동·상태·선택에 연결하고, 한 레이어에는 하나의 경계나 elevation 방식만 씁니다.", validWhen: "재질과 팔레트가 브랜드 근거를 가지며 대비와 상태 구분을 지킬 때입니다.", ruleIds: ["COLOR-01", "VISUAL-04", "VISUAL-05"] },
      { id: "evidence", title: "장식보다 실제 증거를 보여줍니다", question: "제품의 주장을 화면에서 무엇으로 확인할 수 있나요?", slop: "아이콘 타일, 가짜 지표, 블러 원, placeholder 대시보드가 제품 내용을 대신합니다.", preference: "가능하면 실제 흐름, 에셋, 데이터 형태, 상태 변화, 확인된 제약을 보여줍니다.", validWhen: "일러스트가 브랜드 서사를 담거나 제품 화면만으로 설명하기 어려운 내용을 풀 때입니다.", ruleIds: ["EVIDENCE-01", "VISUAL-02", "VISUAL-06"] },
      { id: "density", title: "밀도는 과업을 따라갑니다", question: "관련된 것은 가깝고 다른 묶음은 충분히 떨어져 있나요?", slop: "설정, 표, 마케팅 문장, 모바일 버튼에 똑같이 넉넉한 padding을 적용합니다.", preference: "묶음 안은 촘촘하게, 묶음 사이는 분명하게 둡니다. 운영 화면은 쇼룸 여백보다 비교 효율을 우선합니다.", validWhen: "집중된 서비스 흐름이나 에디토리얼 장면에서 넓은 여백이 인지 부담을 줄일 때입니다.", ruleIds: ["LAYOUT-05", "DENSITY-01", "DENSITY-02"] },
      { id: "states", title: "제품에는 불완전한 상태도 포함됩니다", question: "성공 전후와 실패했을 때 무엇이 보이나요?", slop: "반듯한 성공 화면만 있고 빈 상태, 로딩, 오류, 권한, 긴 콘텐츠 상태는 없습니다.", preference: "상태 변화를 정보 구조의 일부로 설계하고 각 상태에서 가능한 다음 행동을 알려줍니다.", validWhen: "제작물이 정적인 시각 연구임을 명시하고 운영 준비가 됐다고 주장하지 않을 때입니다.", ruleIds: ["STATE-01", "STATE-02", "COPY-04"] },
      { id: "responsive", title: "반응형은 우선순위를 다시 배치합니다", question: "공간이 줄면 무엇을 옮기고, 쌓고, 접고, 덜어내야 하나요?", slop: "데스크톱 열을 그대로 줄여 문장이 잘리고 제어가 임의로 줄바꿈되며 다국어에서 틀이 깨집니다.", preference: "읽기 순서와 핵심 과업을 지키고 기존 관계가 맞지 않는 순간 구도 자체를 바꿉니다.", validWhen: "가로 넘김이 명확한 affordance를 가진 데이터·미디어 탐색 방식일 때입니다.", ruleIds: ["LAYOUT-06", "RESPONSIVE-01", "LOCALE-02"] },
      { id: "motion", title: "모션은 변화를 설명합니다", question: "움직임이 피드백, 출발점, 연속성, 공간 관계 중 무엇을 알려주나요?", slop: "정적인 화면을 고급스럽게 보이게 하려고 모든 요소가 뜨고, 튀고, 순서대로 나타납니다.", preference: "기억에 남는 장면 하나를 고르고 피드백은 빠르고 중단 가능하게, reduced motion을 존중해 만듭니다.", validWhen: "앰비언트 모션이 제품 경험의 일부이며 읽기나 조작과 경쟁하지 않을 때입니다.", ruleIds: ["MOTION-01", "MOTION-02", "MOTION-03"] },
      { id: "interaction", title: "제어는 일관된 약속을 지킵니다", question: "모든 제어가 실제 행동과 같은 모습, 이름, 결과를 갖나요?", slop: "서로 다른 동작 없이 pill, badge, 버튼, 탭, 모달 variant만 늘어납니다.", preference: "행동을 구체적으로 이름 붙이고 필요하면 상태를 URL에 남기며, 모달은 짧고 닫힌 과업에만 씁니다.", validWhen: "variant가 검증된 상태, 권한, 위험도, 반복되는 전문가 작업을 구분할 때입니다.", ruleIds: ["COMP-01", "COMP-02", "COMP-03"] },
    ],
    directionsTitle: "Anti-slop은 미니멀리즘의 다른 이름이 아닙니다",
    directionsLead: "디자이너가 몰래 선호하는 단 하나의 스타일은 없습니다. 과업에 맞고, 내부 논리가 일관되며, 템플릿보다 한 단계 더 실행된 방향을 선호합니다.",
    directions: [
      { id: "editorial", title: "표현적인 에디토리얼", body: "발견과 이야기 전달이 목적이라면 큰 글자, 낯선 구도, 이미지, 느린 호흡이 맞을 수 있습니다.", proof: "시각적 서명이 유행하는 랜딩 키트가 아니라 주제 자체에서 나옵니다." },
      { id: "product", title: "밀도 높은 제품 도구", body: "반복해서 비교하고 조작하는 화면이라면 표, 촘촘한 제어, 지속되는 내비게이션, 절제된 타이포가 맞습니다.", proof: "밀도 안에서도 묶음과 훑는 경로가 분명하고 실제 데이터와 상태를 견딥니다." },
      { id: "service", title: "집중된 서비스 흐름", body: "신뢰와 완료가 중요하다면 조용한 한 열, 익숙한 제어, 평이한 문장이 맞습니다.", proof: "단순함이 빠진 판단을 숨기는 대신 사용자의 불확실성을 줄입니다." },
    ],
    compareTitle: "같은 의도, 더 분명한 제품 판단",
    compareLead: "탭을 눌러 문장, 다국어, 화면 구조의 전후를 비교하세요. 수정 후 예시는 원래 하려던 일을 유지하면서 익숙한 장식을 구체적인 결정으로 바꿉니다.",
    beforeLabel: "기본 패턴",
    afterLabel: "OmD 방향",
    detectedLabel: "바꾼 이유",
    specimen: { nextGen: "차세대", verified: "검증됨", reference: "01 — 레퍼런스", output: "결과", nextStep: "다음 행동을 하나로" },
    specimenUi: {
      dashboard: "대시보드", release: "릴리스", settings: "설정", introducing: "새 문서",
      typographyTitle: "모든 팀을 위한 DESIGN.md", typographyBody: "제품 근거와 검증한 디자인 규칙을 한곳에서 관리합니다.",
      newLabel: "신규", docsLabel: "문서", checkout: "결제", verify: "검증", artifact: "산출물",
      time: "시간", route: "경로", status: "상태", desktop: "데스크톱", notifications: "알림", all: "전체", open: "진행 중",
    },
    examples: [
      {
        id: "writing",
        tab: "문장",
        beforeTitle: "사용자 경험을 혁신적으로 향상시키는 강력하고 매끄러운 솔루션을 만나보세요.",
        beforeBody: "하나의 지능형 솔루션으로 차세대 디자인을 시작하고 모든 프로젝트의 수준을 높일 수 있습니다.",
        afterTitle: "레퍼런스를 고르면 검증된 규칙을 DESIGN.md로 저장합니다.",
        afterBody: "확인되지 않은 폰트와 컴포넌트는 넣지 않습니다. 에이전트는 카탈로그가 뒷받침하는 정보만 읽습니다.",
        beforeSignals: ["추상적인 찬사", "사용자 행동 없음", "기계적인 호흡"],
        afterSignals: ["구체적인 행동", "확인 가능한 결과", "근거의 경계"],
        ruleIds: ["COPY-01", "COPY-03", "EVIDENCE-01"],
        reason: "더 큰 약속을 새로 만들지 않았습니다. 제품에 이미 있는 기능과 제한을 앞으로 옮겼습니다.",
      },
      {
        id: "locale",
        tab: "다국어",
        beforeTitle: "AI 에이전트를 통해 디자인 작업을 수행할 수 있습니다.",
        beforeBody: "영어 원문의 주어와 문장 순서를 그대로 옮기면 다섯 경로가 서로 다른 언어가 아니라 글자만 바꾼 원고처럼 보입니다.",
        afterTitle: "AI 에이전트가 DESIGN.md를 읽고 제품 화면을 고칩니다.",
        afterBody: "명령어와 제품 동작은 지킵니다. 주어, 호흡, 용어, 정보 순서는 각 언어에서 다시 씁니다.",
        beforeSignals: ["~을 통해", "~할 수 있다", "문장 구조 상속"],
        afterSignals: ["능동형 행동", "보호된 사실", "언어별 원고"],
        ruleIds: ["LOCALE-01", "LOCALE-02", "COPY-02"],
        reason: "다국어 정합성은 문장을 똑같이 맞추는 일이 아니라 같은 뜻을 자연스럽게 이해하게 하는 일입니다.",
      },
      {
        id: "interface",
        tab: "화면",
        beforeTitle: "장식이 레이아웃을 고르는 화면",
        beforeBody: "그라데이션 히어로, 아이콘 타일, 카드 안 카드, 좌측 강조선, 같은 3열 구성이 콘텐츠의 역할보다 먼저 보입니다.",
        afterTitle: "사용자가 할 일이 레이아웃을 고르는 화면",
        afterBody: "브랜드를 보여줄 장치는 하나만 남깁니다. 절차는 순서로, 비교는 양쪽 화면으로, 독립된 대상만 카드로 표현합니다.",
        beforeSignals: ["중첩 카드", "반복 아이콘 타일", "역할 없는 강조선"],
        afterSignals: ["콘텐츠 중심 위계", "적은 컨테이너", "하나의 시각 서명"],
        ruleIds: ["LAYOUT-02", "LAYOUT-03", "VISUAL-01", "VISUAL-02"],
        reason: "유행하는 다른 스타일로 갈아끼우지 않았습니다. 대상이나 행동을 나타내지 않는 컨테이너만 걷어냈습니다.",
      },
    ],
    classifierTitle: "세 가지 라벨을 섞지 않습니다",
    classifierLead: "패턴 수렴, 제품 품질, 취향을 나누면 감사 결과가 선명해지고 개인 취향을 표준처럼 강요하지 않게 됩니다.",
    classifications: [
      { label: "SLOP", title: "맥락 없는 패턴 군집", body: "제품 근거 없이 기본값이 겹쳐 위계, 신뢰, 브랜드 구별성을 약하게 만듭니다." },
      { label: "QUALITY", title: "측정 가능한 결함", body: "접근성, 화면 넘침, 깨진 상태, 성능, 동작이 검사나 제품 계약을 통과하지 못합니다." },
      { label: "PREFERENCE", title: "유효한 디자인 선택", body: "브리프와 DESIGN.md에 맞는 선택입니다. 다른 대안은 있어도 결함은 아닙니다." },
    ],
    workflowTitle: "스타일을 갈아엎지 않고 찾고, 고치고, 확인합니다",
    workflowLead: "감사는 근거에서 시작해 가장 작은 수정으로 끝납니다. 더 유행하는 미감을 먼저 고르지 않습니다.",
    workflow: [
      { title: "제품 화면 읽기", body: "독자, 핵심 행동, 보존할 동작, 디자인 근거를 먼저 적습니다." },
      { title: "측정 가능한 근거 모으기", body: "DOM, CSS, 반복 횟수, 코드 위치, 브라우저 결과를 기록한 뒤 문맥을 판단합니다." },
      { title: "군집 확인하기", body: "반복 빈도, 함께 나타나는 패턴, DESIGN.md 예외, 화면 영향을 대조하고 근거 없는 판정은 버립니다." },
      { title: "집중해서 고치기", body: "제품 위계를 회복하는 데 필요한 컨테이너, 문장, 시각 처리만 바꿉니다." },
      { title: "같은 화면 다시 확인하기", body: "수정 전과 같은 데스크톱·모바일·동작·접근성·언어별 화면 조건으로 검증합니다." },
    ],
    sourcesTitle: "이 기준을 만든 리서치",
    sourcesLead: "OmD의 분류 기준은 새로 정의했습니다. 아래 프로젝트에서 의미 보존, 군집 판단, 근거 우선 원칙을 참고했습니다.",
    sources: [
      { label: "im-not-ai", href: "https://github.com/epoko77-ai/im-not-ai", note: "한국어 번역투 분류와 의미를 지키는 국소 수정." },
      { label: "Humanizer", href: "https://github.com/blader/humanizer", note: "단어 하나가 아니라 겹치는 신호를 보고, 뜻을 지키며 고치는 방식." },
      { label: "stop-slop", href: "https://github.com/hardikpandya/stop-slop", note: "군더더기, 공식적인 대조법, 막연한 주장, 구체성과 독자 신뢰." },
      { label: "Impeccable Slop Detector", href: "https://impeccable.style/slop/", note: "slop 패턴과 일반 품질 문제를 분리한 공개 카탈로그." },
      { label: "Taste Skill", href: "https://github.com/leonxlnx/taste-skill", note: "제품 요구사항을 먼저 읽고 생성형 기본값을 억제하는 방식." },
      { label: "Anthropic frontend-design", href: "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md", note: "주제에서 출발한 방향, 근거 있는 시각 서명 하나, 절제, 구현 전후 비평." },
      { label: "Vercel Web Interface Guidelines", href: "https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md", note: "운영 환경의 상호작용, 긴 콘텐츠, 반응형, 상태, 모션, 다국어 점검." },
      { label: "Carbon Design System", href: "https://carbondesignsystem.com/elements/spacing/overview/", note: "과업별 밀도, 공간 묶음, 그리드 리듬, productive·expressive 타이포 구분." },
      { label: "W3C Cards", href: "https://design-system.w3.org/components/cards.html", note: "장식용 상자보다 콘텐츠 우선 순서와 접근 가능한 카드 경계." },
      { label: "GOV.UK Design System", href: "https://design-system.service.gov.uk/styles/layout/", note: "읽기 좋은 행 길이, 작은 화면 우선 구성, 구체적인 행동, 컴포넌트 사용 조건." },
      { label: "Apple Human Interface Guidelines", href: "https://developer.apple.com/design/human-interface-guidelines/layout", note: "우선순위, 묶음, 적응형 위계, 점진적 공개, 플랫폼 맥락." },
      { label: "Atlassian Elevation", href: "https://atlassian.design/foundations/elevation", note: "레이어와 상호작용에 근거한 깊이. 들림이 필요 없으면 여백이나 경계를 사용." },
      { label: "Microsoft 언어별 스타일 가이드", href: "https://learn.microsoft.com/globalization/reference/microsoft-style-guides", note: "한국어, 일본어, 간체, 번체를 서로 다른 언어 원고로 다루는 기준." },
      { label: "Primer 제품 UI 패턴", href: "https://primer.style/product/ui-patterns/", note: "빈 상태, 로딩, 기능 저하, 내비게이션, 저장을 실제 제품 흐름으로 설명하는 기준." },
      { label: "Carbon 데이터 테이블", href: "https://carbondesignsystem.com/components/data-table/usage/", note: "과업에 맞는 행 밀도, 헤더 정렬, 툴바 역할, 카드 대신 표를 써야 하는 조건." },
      { label: "Fluent 2 카드", href: "https://fluent2.microsoft.design/components/web/react/core/card/usage", note: "카드는 하나의 개념이나 객체를 담고, 내부 위계와 상호작용은 그 경계를 따라야 한다는 원칙." },
      { label: "Fluent 2 도형", href: "https://fluent2.microsoft.design/shapes", note: "사각형, 원, pill, popover의 역할과 크기·맥락에 따른 radius 선택." },
      { label: "USWDS 카드", href: "https://designsystem.digital.gov/components/card/", note: "카드는 모듈형 요약에 사용하며 장식, 단순 CTA, 표, 연속 본문을 대신하지 않는다는 조건." },
      { label: "Primer 빈 상태와 로딩", href: "https://primer.style/product/ui-patterns/empty-states/", note: "상태 설명, 복구 행동, 진행 범위와 로딩 시점을 화면 설계에 포함하는 기준." },
    ],
  },
  showcase: {
    eyebrow: "실제 결과, 공개된 근거",
    title: "Applepresso의 전 과정을 확인하세요.",
    lead: "Applepresso는 디자인 맥락을 선택하고 실제 에셋을 적용한 뒤, 구현·리뷰·최종 QA까지 이어지는 과정을 공개한 통제 실험입니다.",
    productCase: {
      eyebrow: "저장소 소유 통제 콘셉트",
      title: "Applepresso: 평범한 주문 흐름에서 일관된 3페이지 제품으로.",
      lead: "선택한 디자인 맥락과 실제 이미지 에셋을 적용하고 전문 리뷰와 최종 QA까지 실행한 통제 실험입니다. 완성 화면 한 장이 아니라 시연 영상, 전후 화면, 원본 프롬프트, provenance를 함께 확인할 수 있습니다.",
      beforeLabel: "통제된 기본 화면",
      afterLabel: "디자인 시스템 적용 후",
      beforeAlt: "통제된 기본 화면으로 만든 평범한 노란색 커피 주문 인터페이스.",
      afterAlt: "같은 Applepresso 홈 화면에 그래파이트·크림 디자인 시스템과 커스텀 커피 이미지를 적용한 결과.",
      videoLabel: "편집된 Applepresso 콘셉트 시연",
      videoSummary: "무음 20초 영상이 기본 화면, 프롬프트, 생성 이미지, DESIGN.md, 주문 흐름, 완료 상태를 순서대로 보여줍니다. 실시간 코딩 에이전트 녹화는 아닙니다.",
      metrics: ["초기 화면 3개", "생성 에셋 34 / 34", "초기 실행 18분", "차단 QA 이슈 0개"],
      promptLabel: "실행 미션",
      prompt: "빠른 한국형 커피 주문 앱을 Applepresso로 리디자인해줘. 저가·빠른 픽업 모델은 유지하고 Apple을 시각 레퍼런스로, 배민을 한국 F&B 맥락으로 사용해 랜딩·메뉴·상세 화면과 실제 에셋을 만든 뒤 디자인 리뷰와 final QA까지 진행해줘.",
      disclosure: "고객 제품이나 전환율 실험이 아닌 통제된 시연입니다. Applepresso는 저장소가 소유한 가상 연구이며 Apple·배민·바나프레소와 무관하고 해당 기업의 공식 프로덕션 에셋을 사용하지 않았습니다. 이 사례는 워크플로와 한계를 감사할 수 있게 공개하지만, 정확한 재현성이나 비즈니스 성과를 증명하지는 않습니다.",
      historicalNote: "Codex에서 OmD 1.4로 기록한 과거 실행입니다. 18분은 초기 3페이지와 에셋 34개 생성 기록이며 모바일 흐름과 시연 영상은 이후 그 결과로 편집했습니다. 보관된 프롬프트에는 예전 MCP·Claude 경로가 나오지만 OmD 1.9는 MCP가 필요하지 않습니다. 새 시연은 현재 시작하기와 라이브 데모 문서를 따르세요.",
      promptLinkLabel: "보관된 원본 프롬프트 보기",
      provenanceLinkLabel: "근거와 한계 보기",
    },
    caseTitle: "기능 나열 문서에서 5개 언어 활성화 경로로",
    caseBrief: "신규 사용자는 무엇을 해야 하는지 알기 전에 긴 스킬·에이전트 목록을 봤습니다. 새 구조는 결과부터 보여주고 설치기의 역할을 분명히 하며 사람과 AI가 같은 정보 구조를 사용하게 합니다.",
    beforeTitle: "이전", before: ["1,482줄 단일 클라이언트 페이지", "결과보다 내부 구조가 먼저", "언어별 경로 없음", "신뢰할 수 있는 doctor 설명 없음"],
    afterTitle: "이후", after: ["작업 중심 문서 8개", "영어·한국어·일본어·중국어 간체·번체", "복사 가능한 첫 프롬프트와 채널별 설치", "실제 doctor와 설치 계약"],
    prompt: "새 사용자가 내부 구조보다 결과를 먼저 이해하고 실제 결과를 본 뒤 5개 언어로 계속 읽을 수 있게 CLI 경험을 재구축해줘. /builder는 제품 생성 경로로 유지해줘.",
    changedFiles: ["web/src/app/docs/[locale]/[[...slug]]/page.tsx", "web/src/components/cli-docs/*", "web/src/data/cli-docs.ts", "src/cli/doctor.ts", "src/cli/install-skills.ts"],
    verification: ["5개 언어 경로 완전성", "CLI 클린 설치 테스트", "doctor degraded 상태 테스트", "Home → /builder 회귀 검사", "프로덕션 빌드"],
    honesty: "아래 시각 자료는 이 저장소에서 실제로 진행한 문서 재구축을 도식화한 맵이며, 생성된 앱의 스크린샷이 아닙니다. 무관한 앱을 원샷 프롬프트로 만들었다고 주장하지 않습니다.",
    previewStats: ["스킬 20개", "에이전트 18개", "10단계"],
  },
  troubleshooting: {
    eyebrow: "복구",
    title: "실패했을 때 다음 행동이 분명해야 합니다.",
    lead: "먼저 doctor를 실행하세요. 스킬 파일 하나만 보고 정상이라 하지 않고 채널별 스킬·에이전트·카탈로그·프로젝트 활성화를 확인합니다.",
    doctorTitle: "하나의 진단부터 시작", doctorBody: "CI에서는 JSON 출력을 쓰고 사람이 보는 결과는 코딩 에이전트에 그대로 붙여도 됩니다. degraded 번들은 0이 아닌 종료 코드를 반환합니다.",
    cases: [
      { symptom: "설치 후 스킬이 보이지 않음", fix: "코딩 에이전트를 재시작하세요. 대부분의 도구는 세션 시작 때 스킬을 찾습니다. 그다음 doctor를 다시 실행하세요." },
      { symptom: "doctor가 카탈로그 누락을 보고함", fix: "정확한 채널 대상으로 최신 설치기를 다시 실행하세요. 다른 채널 data 폴더에 임의 레퍼런스를 복사하지 마세요." },
      { symptom: "에이전트가 디자인 맥락이 없다고 함", fix: "프로젝트 디자인 시스템을 잡아달라고 요청하고 DESIGN.md가 작성되기 전에 제안을 확인하세요." },
      { symptom: "원하던 동작이나 콘텐츠까지 변경됨", fix: "해당 수정만 되돌리고 보존할 동작을 명시한 뒤 omd:remember로 교정을 기록하세요." },
      { symptom: "근거 없는 폰트나 컴포넌트가 레퍼런스에 표시됨", fix: "해결되지 않은 필드나 빈 그룹만 제거하세요. 시스템 폰트나 일반 컴포넌트를 브랜드 사실처럼 대체하지 마세요." },
    ],
  },
  ai: {
    eyebrow: "사람과 AI가 함께 읽는 문서",
    title: "내가 확인한 문서를 에이전트에도 그대로 주세요.",
    lead: "모든 문서 경로는 안정적인 정보 구조를 갖습니다. 브라우저 세션이나 deprecated MCP 없이도 원본 카탈로그와 제품 계약을 읽을 수 있는 machine index를 제공합니다.",
    machineTitle: "머신 리더블 진입점", machineBody: "라우팅에는 compact index를, 제품 모델·레퍼런스 규칙·워크플로 전체가 필요할 때는 full 파일을 사용하세요.",
    machineLinks: [
      { label: "llms.txt", href: "/llms.txt", description: "에이전트와 크롤러를 위한 영문 compact index." },
      { label: "llms.ko.txt", href: "/llms.ko.txt", description: "한국어 제품·카탈로그 index." },
      { label: "llms-full.txt", href: "/llms-full.txt", description: "확장 문서와 카탈로그 맥락." },
      { label: "Raw DESIGN.md", href: "/toss/design.md", description: "레퍼런스별 안정 경로: /<id>/design.md." },
    ],
    promptTitle: "좋은 에이전트 인계 프롬프트",
    prompt: "먼저 DESIGN.md를 읽어. 내가 명시하지 않으면 기존 라우트, 동작, 사용자 카피를 보존해. 체크아웃의 위계와 상태를 개선하고 검증된 디자인 토큰만 사용해. 모르는 레퍼런스 필드는 생략하고 보고 전에 접근성 및 interface-feel 검사를 실행해.",
    contractTitle: "에이전트가 유지해야 할 계약",
    contract: ["DESIGN.md가 프로젝트 정본입니다.", "모르는 레퍼런스 데이터는 폴백으로 채우지 않고 비워 둡니다.", "레퍼런스 증거와 제품 사실의 도메인을 구분합니다.", "실제 제품 라우트를 검증해야 UI 작업이 끝납니다.", "사용자 교정은 채팅 기억이 아니라 범위 있는 선호로 남깁니다."],
    builderTitle: "시각적 미리보기의 정본은 Builder입니다.",
    builderBody: "이 문서는 CLI가 에이전트로 문맥을 전달하는 과정을 설명합니다. 레퍼런스 탐색과 미리보기는 계속 Home → Builder에서 진행합니다.",
  },
};

function translatedLocale(
  localeName: string,
  metaDescription: string,
  nav: Record<DocsPage, string>,
  patches: Pick<CliDocsDictionary, "ui" | "overview" | "gettingStarted" | "demo" | "workflows" | "skills" | "antiSlop" | "showcase" | "troubleshooting" | "ai">,
): CliDocsDictionary {
  return { localeName, metaDescription, nav, ...patches };
}

const ja = translatedLocale(
  "日本語",
  "oh-my-design を導入し、品質グレード付きのデザイン文脈を AI コーディングエージェントに渡して、確認可能な手順で実際の製品画面を改善するためのドキュメントです。",
  { overview: "概要", "getting-started": "はじめに", demo: "ライブデモ", workflows: "ワークフロー", skills: "スキル", "anti-slop": "AI slop の判断基準", showcase: "実例", troubleshooting: "トラブルシューティング", ai: "AI 向けドキュメント" },
  {
    ui: { product: "oh-my-design CLI", docs: "ドキュメント", language: "言語", copy: "コピー", copied: "コピー済み", openBuilder: "Builder を開く", github: "GitHub", onThisPage: "このページ", previous: "前へ", next: "次へ", actualOutput: "実際のプロジェクト成果", prompt: "プロンプト", result: "結果", files: "変更ファイル", verified: "検証", homeAria: "oh-my-design ホーム", pagination: "ドキュメントのページ移動", skillsLabel: "スキル", pipeline: "品質グレード付きリファレンス → DESIGN.md → 実装 → 検証", pipelineNote: "verified_v2 141件 · partial 159件 · legacy 140件。公開デモには verified_v2 を使います。", skipContent: "本文へスキップ", copyFailed: "コピーできませんでした", copyPage: "ページをコピー", pageCopied: "コピーしました", pageTools: "ページツール", morePageActions: "その他のページ操作", viewMarkdown: "Markdown で表示", copyForAgent: "AI エージェント用にコピー", ready: "準備済み" },
    overview: { ...en.overview, eyebrow: "コーディングエージェントのためのデザイン文脈", title: "コードを書けるエージェントに、デザイン判断と根拠を渡す。", lead: "oh-my-design は、品質グレード付きリファレンスと再利用できるデザインワークフローを、普段使っているコーディングツールへ導入します。対応するツールには専門エージェントの役割も追加されます。導入後は、作りたい画面を自然言語で依頼できます。", truthTitle: "CLI はコーディングエージェントの作業環境を整えます。", truthBody: "バンドルには20の製品スキル、18のエージェント定義、品質グレード付き DESIGN.md 440件があります。内訳は verified_v2 141件、partial 159件、legacy snapshot 140件で、公開デモには verified_v2 を使います。Claude Code、Codex、OpenCode には互換スキル・役割・カタログが入り、Cursor にはプロジェクトルールとカタログが入ります。", proof: "製品スキル20個 · 専門エージェント18個 · verified_v2 141 / partial 159 / legacy 140 · インストール時の AI 呼び出し0回", outcomesTitle: "必要な成果から始める", outcomesLead: "スキル名を覚える必要はありません。作りたい画面と守る条件を伝えると、適切なワークフローが選ばれます。", outcomes: [
      { title: "デザインシステムを作る", description: "製品ブリーフと verified_v2 リファレンスから、プロジェクト所有の DESIGN.md を作ります。不明な事実は補完しません。", prompt: "家族向け資産管理アプリに、落ち着きと信頼感のあるデザインシステムを設定して。Toss を参考にしつつ、既存のロゴとコピーは維持して。", result: "DESIGN.md、エージェント用 shim、明示的なトークン差分、確認済みの最初の画面。" },
      { title: "完全な画面を作る", description: "Discovery、IA、ワイヤーフレーム、コンポーネント、コピー、アクセシビリティ、検証を一つのチェックポイント付きフローで進めます。", prompt: "このアプリのオンボーディングを設計・実装して。現在のスタックを維持し、DESIGN.md を正本として使って。", result: "動く画面、状態網羅、検証記録、リポジトリ内のハンドオフ成果物。" },
      { title: "既存UIを改善する", description: "製品の挙動を保ったまま、階層、リズム、アクセシビリティ、典型的なAI UIパターンを修正します。", prompt: "URLとフォーム名は変えずに料金ページを改善して。影響の大きい修正を適用し、結果を検証して。", result: "焦点を絞ったコード変更、前後の根拠、決定論的な品質チェック。" },
    ], installTitle: "1つのコマンド、その後に1つの製品プロンプト", installBody: "プロジェクトルートで実行します。インストーラーが利用中のエージェントを検出し、対象チャネルを選べます。", afterInstall: "エージェントを再起動し、doctor を一度実行してから欲しい画面を説明してください。デーモン、APIキー、MCPサーバーは不要です。", differentiatorTitle: "現在のデザインスキル潮流に OmD が加えるもの", differentiators: ["anti-slop の判断を、好みだけでなくプロジェクトの DESIGN.md に固定します。", "監査の語彙と決定論的ゲートに、リファレンス証拠とマルチエージェント実行を加えます。", "未検証のブランド値を、もっともらしいフォールバックで埋めません。", "Builder は視覚的リファレンスの入口として残し、CLI はその文脈をコードベースへ運びます。"] },
    gettingStarted: { ...en.gettingStarted, eyebrow: "最初の5分", title: "インストールして、一つの画面を改善する", lead: "バンドルを導入し、doctor で実際のファイルを確認したら、具体的な製品画面を一つ依頼します。", prerequisitesTitle: "準備", prerequisites: ["Node.js 18以上", "製品リポジトリ", "Claude Code、Codex、OpenCode、または Cursor"], stepsTitle: "クイックスタート", steps: [
      { title: "プロジェクトルートを開く", body: "プロジェクト単位で導入すると、デザイン文脈も製品コードと一緒にバージョン管理できます。" },
      { title: "バンドルを導入", body: "対話式インストーラーは利用中のツールを検出し、完全な製品バンドルを既定値にします。", command: CLI_INSTALL_COMMAND },
      { title: "再起動して検証", body: "エージェントを再起動し、新しいスキルを読み込ませます。doctor はカタログ、エージェント、DESIGN.md の不足を報告します。", command: CLI_DOCTOR_COMMAND },
      { title: "最初の成果を依頼", body: "具体的な画面から始めます。エージェントはデザイン質問の前にリポジトリを確認します。", command: "DESIGN.md を使ってホーム画面を改善して。挙動を保ち、結果を検証して。" },
    ], channelsTitle: "チャネル別の非対話インストール", channels: [
      { name: "Codex", body: "スキル、本文を内蔵したエージェント定義、ヘルパー、ローカル参照カタログを導入します。", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "Claude Code", body: "スキル、サブエージェント、カタログ、安全にマージされるプロジェクトフックを導入します。", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "OpenCode", body: "スキル、ネイティブのサブエージェント、オフライン対応カタログを導入します。プロジェクトは `.opencode`、`--global` は `~/.config/opencode` を使い、`doctor --global` で診断します。", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "エディタ用ルール shim と共有カタログを導入します。", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ], doneTitle: "最初の変更が製品画面に反映されたら完了です", doneBody: "初回実行では、目に見える UI 改善、プロジェクトの DESIGN.md、次に依頼する内容まで確認します。" },
    demo: {
      eyebrow: "ライブデモの進行ガイド",
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
    workflows: { ...en.workflows, eyebrow: "レシピ", title: "そのまま使える作業目的", lead: "目的と制約を保ったまま、ドメインと画面を自分の製品に合わせて書き換えてください。", workflows: [
      { title: "ブランド文脈を始める", when: "新規プロジェクト、または DESIGN.md がない場合", prompt: "忙しい保護者向け食事計画アプリのデザインシステムを設定して。verified_v2 リファレンスを推薦し、差分を説明して、DESIGN.md を書く前に確認して。", outputs: ["リファレンス推薦", "DESIGN.md 提案", "エージェント接続ファイル"], skills: ["omd:init", "omd:sync"] },
      { title: "新しい画面を出荷する", when: "ページやフローを完成させる場合", prompt: "決済完了フローを成功・失敗・部分成功の状態で作って。DESIGN.md と既存コンポーネントを使い、アクセシビリティを検証して。", outputs: ["ユーザージャーニー", "動作するUI", "主要状態の網羅", "検証サマリー"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
      { title: "既存ページを改善する", when: "動くが製品らしさが弱い UI", prompt: "このダッシュボードで、製品の根拠なく繰り返される UI パターン、階層、密度、モーション、アクセシビリティを確認して。挙動を保ち、影響の大きい修正から適用して差分を示して。", outputs: ["優先順位付きの指摘", "焦点を絞ったパッチ", "変更前後の根拠"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
      { title: "好みの修正を記録する", when: "エージェントに好みを教える場合", prompt: "CTA に大文字は使わない。この好みをプロジェクトに記録し、ボタンの動作は変えずに現在の画面を修正して。", outputs: ["保留中の好み", "範囲付きUI修正", "DESIGN.md 反映提案"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
    ] },
    skills: { ...en.skills, eyebrow: "機能マップ", title: "成果別に整理された20の製品スキル", lead: "スキル名を指定することもできますが、通常は作りたい画面と条件を伝えるだけで十分です。リリースパッケージには、以下の20スキルが含まれます。", countNote: "製品スキル20個 · 専門エージェント18個", groups: en.skills.groups.map((g, i) => ({ ...g, title: ["デザイン基準を整える", "画面を作る", "品質を確かめる", "各言語で自然に書く", "根拠のあるリファレンスを残す"][i], description: ["プロジェクトのデザイン基準を作成し、適用・同期します。", "要件を、実際に動くUIと引き継ぎ可能な成果物へつなげます。", "画面の印象、整合性、パターンの反復、アクセシビリティ、公開準備を確認します。", "韓国語の原稿を作り、意味と事実を保ったまま各言語で書き直します。", "不明なトークンを作らず、公開画面をバージョン付きの根拠として記録します。"][i] })), routingTitle: "スキル名の指定は任意です", routingBody: "「このチェックアウトを改善して検証して」と依頼すれば、必要なスキルが選ばれます。" },
    antiSlop: {
      eyebrow: "判断基準",
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
    showcase: {
      ...en.showcase,
      eyebrow: "実際の成果と公開された根拠",
      title: "説明を信じる前に、動くコンセプトを見る。",
      lead: "Applepresso は、デザイン文脈の選択から画像アセット、動作する画面、専門レビュー、最終 QA までを公開した、リポジトリ所有の統制実験です。",
      productCase: {
        eyebrow: "リポジトリ所有の統制コンセプト",
        title: "Applepresso：一般的な注文フローから、一貫した3ページのプロダクトへ。",
        lead: "選択したデザイン文脈と実画像アセットを使い、専門レビューと最終 QA まで実行した統制実験です。完成画像だけでなく、動画、前後画面、保存済みプロンプト、来歴を確認できます。",
        beforeLabel: "統制されたベースライン",
        afterLabel: "デザインシステム適用後",
        beforeAlt: "統制ベースラインとして作られた、一般的な黄色のコーヒー注文画面。",
        afterAlt: "同じ Applepresso ホーム画面に、グラファイトとクリームのデザインシステムと独自のコーヒー画像を適用した状態。",
        videoLabel: "編集された Applepresso コンセプト動画",
        videoSummary: "無音の20秒動画で、一般的なベースライン、プロンプト、生成画像、DESIGN.md、注文フロー、完了状態を順に示します。リアルタイムのコーディングエージェント録画ではありません。",
        metrics: ["初期3ページ", "生成アセット34 / 34", "初期実行18分", "ブロッキング QA 0件"],
        promptLabel: "実行ミッション",
        prompt: "高速な韓国向けコーヒー注文アプリを Applepresso として再設計してください。低価格・高速ピックアップのモデルを維持し、Apple を視覚リファレンス、Baemin を韓国 F&B の文脈として使い、実アセット付きの landing・menu・detail 画面を作成した後、デザインレビューと final QA を実行してください。",
        disclosure: "顧客製品やコンバージョン実験ではなく、統制されたデモです。Applepresso はリポジトリ所有の架空研究で、Apple・Baemin・Banapresso とは無関係であり、各社の公式プロダクション素材は使用していません。ワークフローと制約を監査可能にしますが、厳密な再現性やビジネス効果を証明するものではありません。",
        historicalNote: "Codex 上の OmD 1.4 で記録した過去の実行です。18分は初期3ページと34アセットの生成のみを計測し、モバイルフローと動画は後からその成果を編集したものです。保存済みプロンプトには旧 MCP・Claude パスがありますが、OmD 1.9 は MCP 不要です。新しい実行には現在の「はじめに」と「ライブデモ」を使ってください。",
        promptLinkLabel: "保存済みプロンプトを見る",
        provenanceLinkLabel: "来歴と制約を見る",
      },
      caseTitle: "機能一覧中心の文書から、5言語のアクティベーション導線へ",
      caseBrief: "新規ユーザーは何をするか理解する前に、長いスキルとエージェント一覧を見ていました。新構成は成果から始まり、人とAIが同じ情報構造を使います。",
      beforeTitle: "変更前",
      before: ["1,482行の単一クライアントページ", "成果より内部構造が先", "ロケール別ルートなし", "信頼できる doctor 説明なし"],
      afterTitle: "変更後",
      after: ["タスク中心の8ページ", "英・韓・日・簡体・繁体の5言語", "コピー可能な初回プロンプト", "実際の doctor とインストール契約"],
      prompt: "新規ユーザーが内部構造より先に成果を理解し、実例を見て、5言語で読み続けられるよう CLI 体験を再構築してください。製品作成ルートとして /builder を維持してください。",
      verification: ["5言語ルートの完全性", "CLI クリーンインストールテスト", "doctor の劣化状態テスト", "Home → /builder の回帰確認", "本番ビルド"],
      honesty: "下の図はこのリポジトリで実施したドキュメント再構築の構成を示す模式図であり、生成アプリのスクリーンショットではありません。無関係なアプリを一発生成したとは主張しません。",
      previewStats: ["スキル20個", "エージェント18個", "10フェーズ"],
    },
    troubleshooting: { ...en.troubleshooting, eyebrow: "復旧", title: "失敗したら、次の行動が明確であるべきです。", lead: "まず doctor を実行します。一つのスキルファイルだけで正常とせず、チャネル別のスキル、エージェント、カタログ、プロジェクト有効化を確認します。", doctorTitle: "一つの診断から始める", doctorBody: "CI では JSON 出力を使い、人向けレポートはそのままエージェントに貼れます。degraded は非0で終了します。", cases: en.troubleshooting.cases.map((c, i) => ({ symptom: ["インストール後にスキルが見えない", "doctor がカタログ不足を報告する", "デザイン文脈がないと言われる", "守りたい挙動まで書き換えられた", "根拠のないフォントや部品が表示された"][i], fix: ["エージェントを再起動してから doctor を再実行します。", "対象チャネルを指定して最新インストーラーを再実行します。", "プロジェクトのデザインシステム設定を依頼し、DESIGN.md 書き込み前に提案を確認します。", "その変更だけ戻し、守る挙動を明示して omd:remember に記録します。", "未解決のフィールドまたは空のグループだけを削除し、代替値をブランド事実として出しません。"][i] })) },
    ai: { ...en.ai, eyebrow: "人と AI が読めるドキュメント", title: "確認したページを、そのまま AI エージェントにも渡す", lead: "各ルートは安定した情報構造を持ちます。非推奨の MCP やブラウザセッションがなくても、原典カタログと製品上の決まりを読めます。", machineTitle: "機械可読の入口", machineBody: "ルーティングには compact index、製品モデルと規則全体には full ファイルを使います。", machineLinks: [{ label: "llms.ja.txt", href: "/llms.ja.txt", description: "日本語の製品契約とルーティング概要。" }, { label: "llms.txt", href: "/llms.txt", description: "英語の compact index。" }, { label: "llms-full.txt", href: "/llms-full.txt", description: "拡張ドキュメントとカタログ文脈。" }, { label: "Raw DESIGN.md", href: "/toss/design.md", description: "リファレンスごとの安定した原文パス。" }], promptTitle: "引き継ぎに使えるプロンプト", prompt: "最初に DESIGN.md を読んでください。明示しない限り既存ルート、挙動、ユーザーコピーを維持してください。検証済みトークンだけを使い、不明な参照フィールドは省略し、報告前にアクセシビリティと interface-feel を確認してください。", contractTitle: "エージェントが守る項目", contract: ["DESIGN.md をプロジェクトの基準として扱います。", "不明な参照データを代替値で埋めません。", "リファレンスの根拠と製品の事実を区別します。", "実際の製品ルートを確認してから完了します。", "ユーザーの修正は範囲付きの好みとして残します。"], builderTitle: "視覚プレビューは Builder で確認します", builderBody: "このドキュメントは CLI からエージェントへの引き継ぎを説明します。リファレンスの探索とプレビューは引き続き Home → Builder で行います。" },
  },
);

const zhCn = translatedLocale(
  "简体中文",
  "安装 oh-my-design，把带质量等级的设计上下文交给 AI 编程助手，再用可核验的流程改进实际产品界面。",
  { overview: "概览", "getting-started": "快速开始", demo: "现场演示", workflows: "工作流", skills: "技能", "anti-slop": "AI slop 判定", showcase: "案例", troubleshooting: "故障排查", ai: "面向 AI 的文档" },
  {
    ui: { product: "oh-my-design CLI", docs: "文档", language: "语言", copy: "复制", copied: "已复制", openBuilder: "打开 Builder", github: "GitHub", onThisPage: "本页内容", previous: "上一页", next: "下一页", actualOutput: "实际项目产出", prompt: "提示词", result: "结果", files: "变更文件", verified: "验证", homeAria: "oh-my-design 首页", pagination: "文档翻页", skillsLabel: "技能", pipeline: "质量分级参考 → DESIGN.md → 实现 → 验证", pipelineNote: "verified_v2 141 个 · partial 159 个 · legacy 140 个。公开演示请使用 verified_v2。", skipContent: "跳到文档正文", copyFailed: "复制失败", copyPage: "复制本页", pageCopied: "已复制本页", pageTools: "页面工具", morePageActions: "更多页面操作", viewMarkdown: "以 Markdown 查看", copyForAgent: "复制给 AI 编程助手", ready: "准备就绪" },
    overview: { ...en.overview, eyebrow: "给 AI 编程助手的设计上下文", title: "让会写代码的助手，也能读懂设计依据", lead: "oh-my-design 会把带质量等级的参考库和可复用设计工作流装进你正在使用的编程工具。支持的工具还会获得专业智能体角色。安装后，直接描述要改的产品界面即可。", truthTitle: "CLI 为 AI 编程助手准备工作环境", truthBody: "套件包含 20 个产品技能、18 个智能体定义和 440 份带质量等级的 DESIGN.md：verified_v2 141 份、partial 159 份、legacy snapshot 140 份。公开演示请使用 verified_v2。Claude Code、Codex 和 OpenCode 会获得兼容技能、角色与目录；Cursor 会获得项目规则和目录。", proof: "20 个产品技能 · 18 个专业智能体 · verified_v2 141 / partial 159 / legacy 140 · 安装过程 0 次 AI 调用", outcomesTitle: "从你要的结果开始", outcomesLead: "无需记住技能名。说明要改的界面和不能动的内容，系统会选择合适的工作流。", outcomes: [
      { title: "建立设计系统", description: "把产品需求和 verified_v2 参考转成项目自有的 DESIGN.md；未知事实不会被补写。", prompt: "为家庭财务应用建立冷静、可信的设计系统。参考 Toss，但保留现有标志和文案。", result: "DESIGN.md、代理连接文件、明确的 token 差异和已确认的首个界面。" },
      { title: "交付完整界面", description: "把调研、IA、线框、组件、文案、无障碍和验证串成带检查点的流程。", prompt: "设计并实现这个应用的引导流程。保留当前技术栈，以 DESIGN.md 为唯一依据。", result: "可运行界面、完整状态、验证记录和仓库内交付物。" },
      { title: "改进现有 UI", description: "保留产品行为，同时修复层级、节奏、无障碍和缺少产品依据的重复模式。", prompt: "不要更改 URL 或字段名，改进定价页。先应用影响最大的修复并验证结果。", result: "聚焦的代码改动、前后依据和确定性质量检查。" },
    ], installTitle: "运行一个命令，再描述一个产品任务", installBody: "在项目根目录运行。安装器会检测正在使用的 AI 编程工具，并让你选择安装目标。", afterInstall: "重启 AI 编程助手，运行一次 doctor，再描述要做的界面。无需守护进程、API Key 或 MCP 服务器。", differentiatorTitle: "OmD 为当前设计技能增加的能力", differentiators: ["anti-slop 判断会参考项目 DESIGN.md，不只依靠审美偏好。", "在审计词汇和确定性检查之外，增加参考证据和多智能体协作。", "未经验证的品牌值保持缺省，不用看似合理的 fallback 代替。", "Builder 仍是视觉参考入口，CLI 把上下文带入用户代码库。"] },
    gettingStarted: { ...en.gettingStarted, eyebrow: "前 5 分钟", title: "安装、验证，然后做出一个看得见的变化。", lead: "最快的成功路径很短：安装完整包，用 doctor 检查真实文件，然后提出一个具体界面需求。", prerequisitesTitle: "准备", prerequisites: ["Node.js 18 或更高版本", "产品代码仓库", "Claude Code、Codex、OpenCode 或 Cursor"], stepsTitle: "快速开始", steps: [
      { title: "打开项目根目录", body: "项目级安装会让设计上下文和产品代码一起版本化。" },
      { title: "安装完整包", body: "交互式安装会检测正在使用的工具，并默认选择完整产品包。", command: CLI_INSTALL_COMMAND },
      { title: "重启并验证", body: "重启 AI 编程助手以加载新技能。doctor 会报告缺失的目录、智能体角色或 DESIGN.md。", command: CLI_DOCTOR_COMMAND },
      { title: "请求第一个结果", body: "从具体界面开始。代理会在提出设计问题前先检查仓库。", command: "使用 DESIGN.md 改进首页，保留现有行为并验证结果。" },
    ], channelsTitle: "按渠道非交互安装", channels: [
      { name: "Codex", body: "安装技能、内嵌完整正文的代理角色、辅助脚本和本地参考目录。", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "Claude Code", body: "安装技能、子代理、目录和安全合并的项目 hooks。", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "OpenCode", body: "安装技能、原生子代理和离线参考目录。项目安装使用 `.opencode`，`--global` 使用 `~/.config/opencode`，并通过 `doctor --global` 检查。", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "安装编辑器规则 shim 和共享目录。", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ], doneTitle: "产品发生变化才算完成，而不是安装成功。", doneBody: "良好的首次运行会留下可见的 UI 改进、项目 DESIGN.md 和清晰的下一条提示词。" },
    demo: {
      eyebrow: "现场演示手册",
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
        { title: "对齐 DESIGN.md 与 verified_v2 证据", body: "公开演示请选择 verified_v2 参考。让代理与现有 DESIGN.md 一起读取，只采用属于当前产品界面的证据；未知字体、token 和组件声明保持缺省。" },
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
        { title: "未知信息保持缺省", body: "不要用系统字体、通用组件、推测 token 或相邻营销页面填补缺失的品牌事实。" },
        { title: "证据优先于表演", body: "没有真实前后测量，就不要宣称速度、转化率、无障碍或性能获得提升。" },
        { title: "必需检查点不得跳过", body: "30 分钟流程仍会在用户旅程、DESIGN.md 补丁和验证审批处停下。现场观众不是跳过它们的理由。" },
      ],
    },
    workflows: { ...en.workflows, eyebrow: "工作示例", title: "可直接改写的任务目标", lead: "保留目标和约束，再把业务领域和界面换成你的产品。", workflows: [
      { title: "建立品牌上下文", when: "新项目或没有 DESIGN.md", prompt: "为忙碌家长的餐食规划应用建立设计系统。推荐 verified_v2 参考，解释差异，并在写入 DESIGN.md 前让我确认。", outputs: ["参考推荐", "DESIGN.md 方案", "代理连接文件"], skills: ["omd:init", "omd:sync"] },
      { title: "交付新界面", when: "完整页面或流程", prompt: "构建支付完成流程，包含成功、失败和部分成功状态。使用 DESIGN.md 和现有组件，并验证无障碍。", outputs: ["用户旅程", "可运行 UI", "关键状态全覆盖", "验证摘要"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
      { title: "改进现有页面", when: "能用但缺少产品特征的 UI", prompt: "检查这个仪表盘中缺少产品依据的重复模式、层级、密度、动效和无障碍。保留行为，先应用影响最大的修复，再展示差异。", outputs: ["按优先级排列的问题", "聚焦补丁", "前后依据"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
      { title: "记录偏好修正", when: "教代理你的偏好", prompt: "我们的 CTA 不使用全大写。把这个偏好记录到项目中，保持按钮行为并修正当前页面。", outputs: ["待处理偏好", "有范围的 UI 修正", "DESIGN.md 合并建议"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
    ] },
    skills: { ...en.skills, eyebrow: "能力地图", title: "按结果整理的 20 个产品技能", lead: "需要精确控制时可以指定技能名。大多数时候，只要说明要做的界面和限制即可。发布包包含下列 20 个产品技能。", countNote: "20 个产品技能 · 18 个专业智能体", groups: en.skills.groups.map((g, i) => ({ ...g, title: ["建立项目设计依据", "构建实际界面", "检查产品质量", "写出自然的多语言文案", "记录有来源的参考"][i], description: ["创建、应用并同步项目的设计依据。", "把需求变成可运行、可交付的产品界面。", "检查界面观感、设计一致性、模式重复、无障碍和发布准备。", "先写好韩语原稿，再在五种语言中保留原意并重新组织表达。", "把公开界面记录成带版本的证据，不编造未知 token。"][i] })), routingTitle: "技能名可以不写", routingBody: "直接说“改进并验证这个结账页”，系统会选择完成任务所需的技能。" },
    antiSlop: {
      eyebrow: "判定标准",
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
    showcase: {
      ...en.showcase,
      eyebrow: "真实结果，公开证据",
      title: "先看可运行概念，再相信介绍。",
      lead: "Applepresso 是仓库自有的受控重设计，公开展示了从选择设计上下文、应用图片素材，到实现可运行界面、专业评审和最终 QA 的完整过程。",
      productCase: {
        eyebrow: "仓库自有受控概念",
        title: "Applepresso：从普通点单流程到一致的三页面产品。",
        lead: "这项受控实验使用选定的设计上下文与真实图片素材，并完成专业评审和最终 QA。你可以检查演示视频、前后界面、归档提示词和来源记录，而不只是看一张精修图。",
        beforeLabel: "受控基线",
        afterLabel: "应用设计系统后",
        beforeAlt: "作为受控基线制作的普通黄色咖啡点单界面。",
        afterAlt: "同一个 Applepresso 首页应用石墨灰与奶油色设计系统及定制咖啡图片后的状态。",
        videoLabel: "剪辑后的 Applepresso 概念演示",
        videoSummary: "这段 20 秒无声演示依次展示普通基线、提示词、生成图片、DESIGN.md、点单流程和完成状态；它不是编程代理的实时录屏。",
        metrics: ["初始 3 个页面", "生成素材 34 / 34", "初始运行 18 分钟", "阻断级 QA 问题 0 个"],
        promptLabel: "执行任务",
        prompt: "把一个快速的韩国咖啡点单应用重设计为 Applepresso。保留低价、快速自取的业务模式，以 Apple 作为视觉参考、Baemin 作为韩国餐饮语境，使用真实素材制作 landing、menu 和 detail 界面，然后完成设计评审与 final QA。",
        disclosure: "这是受控演示，不是客户产品或转化率实验。Applepresso 是仓库自有的虚构研究，与 Apple、Baemin、Banapresso 无关联，也未使用这些公司的官方生产素材。该案例让工作流及其限制可供审计，但不证明精确复现或业务提升。",
        historicalNote: "该运行由 Codex 与 OmD 1.4 记录。18 分钟仅测量初始 3 页面和 34 个素材的生成；移动流程与演示视频是之后基于这些输出剪辑的。归档提示词包含旧 MCP 和 Claude 路径，而 OmD 1.9 已不需要 MCP。新演示请使用当前的快速开始和现场演示文档。",
        promptLinkLabel: "查看归档提示词",
        provenanceLinkLabel: "查看来源与限制",
      },
      caseTitle: "从功能清单优先，转向五语言激活路径",
      caseBrief: "新用户过去在知道要做什么之前，先看到很长的技能和代理列表。新结构从结果开始，并让人和 AI 使用同一个信息架构。",
      beforeTitle: "之前",
      before: ["单个 1,482 行客户端页面", "内部结构先于结果", "没有语言路由", "没有可靠的 doctor 说明"],
      afterTitle: "之后",
      after: ["8 个任务型文档页", "英语、韩语、日语、简体和繁体中文", "可复制的首条提示词", "真实 doctor 和安装契约"],
      prompt: "重构 CLI 体验，让新用户先理解结果、看到真实案例，并能用五种语言继续阅读。保留 /builder 作为产品创建路径。",
      verification: ["五种语言路由完整性", "CLI 全新安装测试", "doctor 降级状态测试", "Home → /builder 回归检查", "生产构建"],
      honesty: "下方视觉内容是本仓库真实文档改造的结构示意图，不是生成应用的截图；这里也不声称用一次提示词生成了无关应用。",
      previewStats: ["20 个技能", "18 个智能体", "10 个阶段"],
    },
    troubleshooting: { ...en.troubleshooting, eyebrow: "恢复", title: "出现问题时，先确认下一步", lead: "先运行 doctor。它会按工具检查技能、智能体角色、参考目录和项目启用状态，不会因为发现一个文件就判定安装正常。", doctorTitle: "先运行一次诊断", doctorBody: "CI 使用 JSON 输出；面向用户的报告可以直接粘贴给 AI 编程助手。degraded 状态会返回非零退出码。", cases: en.troubleshooting.cases.map((c, i) => ({ symptom: ["安装后看不到技能", "doctor 报告目录缺失", "AI 编程助手说没有设计上下文", "想保留的行为也被改写", "参考中出现无依据的字体或组件"][i], fix: ["重启 AI 编程助手，再运行 doctor。", "选择正确的目标工具，重新运行最新版安装器。", "请求建立项目设计系统，并在写入 DESIGN.md 前确认方案。", "只回退相关改动，明确受保护行为并用 omd:remember 记录修正。", "只移除未解决字段或空组，不用系统字体或通用组件冒充品牌事实。"][i] })) },
    ai: { ...en.ai, eyebrow: "人和 AI 都能读取", title: "把已经确认的文档直接交给 AI 编程助手", lead: "每个文档路由都有稳定的信息结构。无需浏览器会话或已弃用的 MCP，也能读取原始目录和产品约定。", machineTitle: "机器可读入口", machineBody: "路由使用 compact index，需要完整产品模型和规则时使用 full 文件。", machineLinks: [{ label: "llms.zh-cn.txt", href: "/llms.zh-cn.txt", description: "简体中文产品约定与路由概要。" }, { label: "llms.txt", href: "/llms.txt", description: "英文 compact index。" }, { label: "llms-full.txt", href: "/llms-full.txt", description: "扩展文档和目录上下文。" }, { label: "Raw DESIGN.md", href: "/toss/design.md", description: "每个参考的稳定原文路径。" }], promptTitle: "可直接交给 AI 编程助手的提示词", prompt: "先读 DESIGN.md。除非我明确要求，否则保留现有路由、行为和用户文案。只使用已验证的设计 token，省略未知参考字段，并在汇报前运行无障碍和 interface-feel 检查。", contractTitle: "AI 编程助手需要遵守的约定", contract: ["DESIGN.md 是项目唯一的设计依据。", "未知参考数据保持缺省。", "参考证据和产品事实属于不同领域。", "验证实际产品页面后才算完成。", "用户修正应记录为有明确范围的偏好。"], builderTitle: "视觉预览仍以 Builder 为准", builderBody: "这些文档说明 CLI 如何把上下文交给 AI 编程助手。参考探索和视觉预览仍通过 Home → Builder 完成。" },
  },
);

const zhTw = translatedLocale(
  "繁體中文（台灣）",
  "安裝 oh-my-design，把有品質分級的設計脈絡交給 AI 程式助理，再用可追溯的流程改善實際產品介面。",
  { overview: "總覽", "getting-started": "快速開始", demo: "現場示範", workflows: "工作流程", skills: "技能", "anti-slop": "AI slop 判定", showcase: "案例", troubleshooting: "問題排解", ai: "給 AI 的文件" },
  {
    ui: { product: "oh-my-design CLI", docs: "文件", language: "語言", copy: "複製", copied: "已複製", openBuilder: "開啟 Builder", github: "GitHub", onThisPage: "本頁內容", previous: "上一頁", next: "下一頁", actualOutput: "實際專案產出", prompt: "提示詞", result: "結果", files: "變更檔案", verified: "驗證", homeAria: "oh-my-design 首頁", pagination: "文件換頁", skillsLabel: "技能", pipeline: "品質分級參考 → DESIGN.md → 實作 → 驗證", pipelineNote: "verified_v2 141 份 · partial 159 份 · legacy 140 份。公開示範請使用 verified_v2。", skipContent: "跳到文件正文", copyFailed: "複製失敗", copyPage: "複製本頁", pageCopied: "已複製本頁", pageTools: "頁面工具", morePageActions: "更多頁面操作", viewMarkdown: "以 Markdown 檢視", copyForAgent: "複製給 AI 程式助理", ready: "準備完成" },
    overview: { ...zhCn.overview, eyebrow: "給 AI 程式助理的設計脈絡", title: "讓會寫程式的助理，也能讀懂設計依據", lead: "oh-my-design 會把有品質分級的參考庫與可重複使用的設計工作流程，安裝到你正在用的程式工具。支援的工具還會加入專業角色。安裝完成後，直接說明要調整的產品介面即可。", truthTitle: "CLI 先把 AI 程式助理需要的環境準備好", truthBody: "套件包含 20 個產品技能、18 個代理定義與 440 份有品質分級的 DESIGN.md：verified_v2 141 份、partial 159 份、legacy snapshot 140 份。公開示範請使用 verified_v2。Claude Code、Codex 與 OpenCode 會取得相容技能、角色與參考目錄；Cursor 會取得專案規則與參考目錄。", proof: "20 個產品技能 · 18 個專業代理 · verified_v2 141 / partial 159 / legacy 140 · 安裝期間 0 次 AI 呼叫", outcomesTitle: "從想完成的成果開始", outcomesLead: "不用記技能名稱。說明要調整的介面與不能更動的內容，系統會選擇適合的工作流程。", outcomes: [
      { title: "建立設計系統", description: "把產品需求和 verified_v2 參考轉成專案自有 DESIGN.md；未知事實不會被補寫。", prompt: "為家庭財務 App 建立沉穩、可信的設計系統。參考 Toss，但保留現有標誌與文案。", result: "DESIGN.md、代理連接檔、清楚的 token 差異與確認過的第一個介面。" },
      { title: "交付完整介面", description: "把研究、IA、線框、元件、文案、無障礙與驗證串成有檢查點的流程。", prompt: "設計並實作這個 App 的 onboarding。保留目前技術堆疊，以 DESIGN.md 為唯一依據。", result: "可運作介面、完整狀態、驗證紀錄與程式庫內交付物。" },
      { title: "改善既有 UI", description: "保留產品行為，同時修正層級、節奏、無障礙與缺少產品依據的重複模式。", prompt: "不要改 URL 或欄位名稱，改善定價頁。先套用影響最大的修正並驗證。", result: "聚焦的程式變更、前後依據與確定性品質檢查。" },
    ], installTitle: "執行一個指令，再說明一項產品工作", installBody: "在專案根目錄執行。安裝器會偵測正在使用的 AI 程式工具，並讓你選擇安裝目標。", afterInstall: "重新啟動 AI 程式助理、執行一次 doctor，再說明要調整的介面。無需 daemon、API Key 或 MCP 伺服器。", differentiatorTitle: "OmD 為現有設計技能增加的能力", differentiators: ["anti-slop 判斷會參考專案 DESIGN.md，不只依靠審美偏好。", "在正式檢查詞彙與確定性檢查之外，加入參考依據與多代理協作。", "未經驗證的品牌值保持空缺，不用看似合理的 fallback 代替。", "Builder 維持為視覺參考入口，CLI 把脈絡帶入使用者的程式碼儲存庫。"] },
    gettingStarted: { ...zhCn.gettingStarted, eyebrow: "前 5 分鐘", title: "安裝後，先改善一個介面", lead: "安裝完整套件，用 doctor 檢查實際檔案，再提出一個具體的介面需求。", prerequisitesTitle: "準備", prerequisites: ["Node.js 18 或更新版本", "產品程式碼儲存庫", "Claude Code、Codex、OpenCode 或 Cursor"], stepsTitle: "快速開始", steps: zhCn.gettingStarted.steps.map((s, i) => ({ ...s, title: ["開啟專案根目錄", "安裝完整套件", "重新啟動並驗證", "提出第一項介面需求"][i], body: ["專案層級安裝會讓設計脈絡與產品程式碼一起納入版本控制。", "互動式安裝會偵測使用中的工具，並預設選取完整產品套件。", "重新啟動 AI 程式助理以載入新技能。doctor 會回報缺少的參考目錄、代理角色或 DESIGN.md。", "從具體介面開始。AI 程式助理會先檢查程式碼儲存庫，再提出設計問題。"][i], command: i === 3 ? "使用 DESIGN.md 改善首頁，保留既有行為並驗證結果。" : s.command })), channelsTitle: "依工具進行非互動安裝", channels: [
      { name: "Codex", body: "安裝技能、內嵌完整內容的代理角色、輔助腳本與本地參考目錄。", command: "npx oh-my-design-cli@latest install-skills --agent codex --all" },
      { name: "Claude Code", body: "安裝技能、子代理、目錄與安全合併的專案 hooks。", command: "npx oh-my-design-cli@latest install-skills --agent claude-code --all" },
      { name: "OpenCode", body: "安裝技能、原生子代理與離線參考目錄。專案安裝使用 `.opencode`，`--global` 使用 `~/.config/opencode`，並以 `doctor --global` 檢查。", command: "npx oh-my-design-cli@latest install-skills --agent opencode --all" },
      { name: "Cursor", body: "安裝編輯器規則 shim 與共享目錄。", command: "npx oh-my-design-cli@latest install-skills --agent cursor --all" },
    ], doneTitle: "產品發生改變才算完成，而不是安裝成功。", doneBody: "良好的第一次執行會留下可見 UI 改善、專案 DESIGN.md 與清楚的下一個提示詞。" },
    demo: {
      eyebrow: "現場示範指南",
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
    workflows: { ...zhCn.workflows, eyebrow: "工作範例", title: "可直接改寫的任務目標", lead: "保留目標與限制，再把產品領域和介面換成自己的情境。", workflows: [
      { title: "建立品牌脈絡", when: "新專案或沒有 DESIGN.md", prompt: "為忙碌家長的餐食規劃 App 建立設計系統。推薦 verified_v2 參考，說明差異，並在寫入 DESIGN.md 前讓我確認。", outputs: ["參考推薦", "DESIGN.md 方案", "代理連接檔案"], skills: ["omd:init", "omd:sync"] },
      { title: "交付新介面", when: "完整頁面或流程", prompt: "建立付款完成流程，包含成功、失敗與部分成功狀態。使用 DESIGN.md 和既有元件，並驗證無障礙。", outputs: ["使用者旅程", "可運作 UI", "關鍵狀態完整覆蓋", "驗證摘要"], skills: ["omd:harness", "omd:apply", "omd:final-qa"] },
      { title: "改善既有頁面", when: "可用但缺少產品特色的 UI", prompt: "檢查這個儀表板中缺少產品依據的重複模式、層級、密度、動效與無障礙。保留行為，先套用影響最大的修正，再展示差異。", outputs: ["依優先順序整理的問題", "聚焦修補", "前後依據"], skills: ["omd:slop-audit", "omd:feel", "omd:designer-review"] },
      { title: "記錄偏好修正", when: "教代理你的偏好", prompt: "我們的 CTA 不使用全大寫。把這項偏好記錄到專案中，保留按鈕行為並修正目前頁面。", outputs: ["待處理偏好", "有範圍的 UI 修正", "DESIGN.md 合併建議"], skills: ["omd:remember", "omd:learn", "omd:taste"] },
    ] },
    skills: { ...zhCn.skills, eyebrow: "功能地圖", title: "依成果整理的 20 個產品技能", lead: "需要精準控制時可以指定技能名稱。多數情況只要說明介面與限制即可。發布套件包含下列 20 個產品技能。", countNote: "20 個產品技能 · 18 個專業代理", groups: en.skills.groups.map((g, i) => ({ ...g, title: ["建立專案設計依據", "實作產品介面", "檢查產品品質", "寫出自然的多語文案", "留下可追溯的參考"][i], description: ["建立、套用並同步專案的設計依據。", "把需求做成可操作、可交付的產品介面。", "檢查介面感受、設計一致性、模式重複、無障礙與發布準備。", "先完成韓語原稿，再針對五種語言重寫，保留相同事實與操作。", "把公開介面記錄成含版本資訊的依據，不捏造未知 token。"][i] })), routingTitle: "技能名稱可以省略", routingBody: "直接說「改善並驗證這個結帳頁」，系統會選擇完成工作所需的技能。" },
    antiSlop: {
      eyebrow: "判定方式",
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
        { id: "editorial", title: "表現型編輯頁面", body: "以探索和敘事為目標時，大字、獨特構圖、影像與有節奏的留白都可以合理。", proof: "視覺特色來自主題本身，而不是當下流行的著陸頁套件。" },
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
    showcase: {
      ...zhCn.showcase,
      eyebrow: "真實成果，公開依據",
      title: "先看可操作概念，再相信介紹。",
      lead: "Applepresso 是專案儲存庫自有的受控重設計，公開呈現從選擇設計脈絡、套用圖片素材，到完成可操作介面、專業審查與最終 QA 的整個過程。",
      productCase: {
        eyebrow: "程式庫自有受控概念",
        title: "Applepresso：從普通點單流程到一致的三頁產品。",
        lead: "這項受控實驗使用選定的設計脈絡與真實圖片素材，並完成專業審查和最終 QA。你可以檢查示範影片、前後介面、封存提示詞與來源紀錄，而不只是看一張精修圖。",
        beforeLabel: "受控基準",
        afterLabel: "套用設計系統後",
        beforeAlt: "作為受控基準製作的普通黃色咖啡點單介面。",
        afterAlt: "同一個 Applepresso 首頁套用石墨灰與奶油色設計系統及自訂咖啡圖片後的狀態。",
        videoLabel: "剪輯後的 Applepresso 概念示範",
        videoSummary: "這段 20 秒無聲示範依序呈現普通基準、提示詞、生成圖片、DESIGN.md、點單流程與完成狀態；它不是程式代理的即時錄影。",
        metrics: ["初始 3 個頁面", "生成素材 34 / 34", "初始執行 18 分鐘", "阻斷級 QA 問題 0 個"],
        promptLabel: "執行任務",
        prompt: "把一個快速的韓國咖啡點單 App 重設計為 Applepresso。保留低價、快速取餐的商業模式，以 Apple 作為視覺參考、Baemin 作為韓國餐飲脈絡，使用真實素材製作 landing、menu 與 detail 介面，接著完成設計審查與 final QA。",
        disclosure: "這是受控示範，不是客戶產品或轉換率實驗。Applepresso 是程式庫自有的虛構研究，與 Apple、Baemin、Banapresso 無關，也未使用這些公司的官方正式素材。此案例讓工作流程與限制可供稽核，但不證明精確重現或商業提升。",
        historicalNote: "這次執行由 Codex 與 OmD 1.4 記錄。18 分鐘只計算初始 3 個頁面與 34 個素材的生成；行動流程和示範影片是之後以這些產出剪輯而成。封存提示詞包含舊 MCP 與 Claude 路徑，而 OmD 1.9 已不需要 MCP。新的示範請使用目前的快速開始與現場示範文件。",
        promptLinkLabel: "查看封存提示詞",
        provenanceLinkLabel: "查看來源與限制",
      },
      caseTitle: "從功能清單優先，轉向五語言啟用路徑",
      caseBrief: "新使用者以前在理解要做什麼之前，先看到很長的技能與代理清單。新結構從成果開始，讓人和 AI 使用同一套資訊架構。",
      beforeTitle: "之前",
      before: ["單一 1,482 行 client 頁面", "內部結構先於成果", "沒有語言路由", "沒有可靠 doctor 說明"],
      afterTitle: "之後",
      after: ["8 個任務型文件頁", "英、韓、日、簡中與繁中", "可複製的第一個提示詞", "真實 doctor 與安裝契約"],
      prompt: "重構 CLI 體驗，讓新使用者先理解成果、看到真實案例，並能以五種語言繼續閱讀。保留 /builder 作為產品建立路徑。",
      verification: ["五種語言路由完整性", "CLI 全新安裝測試", "doctor 降級狀態測試", "Home → /builder 回歸檢查", "正式環境建置"],
      honesty: "下方視覺內容是本程式庫真實文件改造的結構示意圖，不是生成應用程式的截圖；這裡也不宣稱一次提示就生成了無關應用。",
      previewStats: ["20 個技能", "18 個代理", "10 個階段"],
    },
    troubleshooting: { ...zhCn.troubleshooting, eyebrow: "排除問題", title: "遇到問題時，先確認下一步", lead: "先執行 doctor。它會依工具檢查技能、代理角色、參考目錄與專案啟用狀態，不會因為找到一個檔案就判定安裝正常。", doctorTitle: "先執行一次診斷", doctorBody: "CI 使用 JSON 輸出；給使用者看的報告可以直接貼給 AI 程式助理。degraded 狀態會回傳非零結束碼。", cases: [
      { symptom: "安裝後看不到技能", fix: "重新啟動 AI 程式助理，再執行 doctor。" },
      { symptom: "doctor 回報參考目錄缺失", fix: "針對正確工具重新執行最新版安裝程式。" },
      { symptom: "AI 程式助理表示沒有設計脈絡", fix: "請它建立專案設計系統，並在寫入 DESIGN.md 前確認方案。" },
      { symptom: "想保留的行為也被改寫", fix: "只還原相關變更，明確說明要保護的行為，並用 omd:remember 記錄修正。" },
      { symptom: "參考中出現沒有依據的字型或元件", fix: "只移除未解決欄位或空群組，不用系統字型或通用元件冒充品牌事實。" },
    ] },
    ai: { ...zhCn.ai, eyebrow: "人與 AI 都能讀取", title: "把確認過的文件直接交給 AI 程式助理", lead: "每個文件路徑都有穩定的資訊架構。不需要瀏覽器 session 或已停止使用的 MCP，也能讀取原始參考目錄與產品約定。", machineTitle: "機器可讀入口", machineBody: "路由使用 compact index；需要完整產品模型與規則時，改用 full 檔案。", machineLinks: [{ label: "llms.zh-tw.txt", href: "/llms.zh-tw.txt", description: "繁體中文產品約定與路由摘要。" }, { label: "llms.txt", href: "/llms.txt", description: "英文 compact index。" }, { label: "llms-full.txt", href: "/llms-full.txt", description: "擴充文件與參考目錄脈絡。" }, { label: "Raw DESIGN.md", href: "/toss/design.md", description: "每個參考的穩定原文路徑。" }], promptTitle: "可直接交給 AI 程式助理的提示詞", prompt: "先讀 DESIGN.md。除非我明確要求，否則保留現有路由、行為與使用者文案。只使用已驗證的設計 token，省略未知參考欄位，並在回報前執行無障礙與 interface-feel 檢查。", contractTitle: "AI 程式助理需要遵守的約定", contract: ["DESIGN.md 是專案唯一的設計依據。", "未知參考資料保持空缺。", "參考依據與產品事實分開處理。", "檢查實際產品頁面後才算完成。", "使用者修正應記錄為範圍明確的偏好。"], builderTitle: "視覺預覽仍以 Builder 為準", builderBody: "這些文件說明 CLI 如何把脈絡交給 AI 程式助理。參考探索與視覺預覽仍透過 Home → Builder 完成。" },
  },
);

export const CLI_DOCS: Record<DocsLocale, CliDocsDictionary> = {
  en,
  ko,
  ja,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
};
