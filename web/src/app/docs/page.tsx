"use client";

import { useState } from "react";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Check,
  Copy,
  ExternalLink,
  FileCode,
  GitBranch,
  Layers,
  Palette,
  Pencil,
  Search,
  ShieldCheck,
  Star,
  Terminal,
  TestTube,
  Workflow,
  Zap,
} from "lucide-react";
import { V2Nav } from "@/components/landing-v2/nav";
import { V2 } from "@/components/landing-v2/tokens";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-v2" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono-v2",
});

const INSTALL_CMD = "npx oh-my-design-cli install-skills";

/* ──────────────────────────── DATA ──────────────────────────── */

interface Skill {
  id: string;
  trigger: string;
  title: string;
  desc: string;
  icon: typeof Brain;
}

const SKILLS: Skill[] = [
  {
    id: "omd:apply",
    trigger: "Any UI task",
    title: "Apply DESIGN.md",
    desc:
      "Authoritative brand context for every UI request. Routes complex tasks (assets, charts, full screens, a11y audit) to specialist sub-agents.",
    icon: Layers,
  },
  {
    id: "omd:init",
    trigger: "First-time setup",
    title: "Bootstrap a project",
    desc:
      "Pick from 67 reference design systems. Hybrid variation — preserves the reference voice while shifting only the axes you name.",
    icon: Zap,
  },
  {
    id: "omd:harness",
    trigger: "/omd-harness <task>",
    title: "Run the design pipeline",
    desc:
      "Spawns omd-master to run the 10-phase pipeline (Discovery → Handoff). Sub-agents dispatched in parallel where independent.",
    icon: Workflow,
  },
  {
    id: "omd:remember",
    trigger: "User correction detected",
    title: "Capture preferences",
    desc:
      "Append-only log at .omd/preferences.md. Auto-fires when you say things like \"we never use uppercase CTAs\" or \"stop using emoji icons\".",
    icon: Brain,
  },
  {
    id: "omd:learn",
    trigger: "Fold corrections",
    title: "Merge preferences into DESIGN.md",
    desc:
      "Folds pending preferences back into DESIGN.md by scope (global / page / component). Keeps your brand spec the single source.",
    icon: GitBranch,
  },
  {
    id: "omd:sync",
    trigger: "Maintain shims",
    title: "Sync agent pointers",
    desc:
      "Keeps CLAUDE.md, AGENTS.md, .cursor/rules/omd-design.mdc up-to-date so every coding agent reads the same DESIGN.md.",
    icon: FileCode,
  },
];

interface Agent {
  id: string;
  model: "opus" | "sonnet" | "haiku";
  role: string;
  desc: string;
  icon: typeof Brain;
}

const AGENTS: Agent[] = [
  {
    id: "omd-master",
    model: "opus",
    role: "Orchestrator",
    desc:
      "Conversational state machine. Runs the harness phases, asks the 3 mandatory user checkpoints, dispatches sub-agents.",
    icon: Bot,
  },
  {
    id: "omd-ux-researcher",
    model: "opus",
    role: "Research",
    desc:
      "Reads bundled references, validates Tier-1 official design system URLs, drafts the brief.",
    icon: Search,
  },
  {
    id: "omd-ui-junior",
    model: "sonnet",
    role: "Wireframes & components · generator",
    desc:
      "Generates wireframes and component manifests strictly from DESIGN.md tokens. Defines all 5 states for every screen.",
    icon: Pencil,
  },
  {
    id: "omd-ux-engineer",
    model: "opus",
    role: "Section UX audit · advisor",
    desc:
      "Section-level interaction / motion / IA / mobile / Web Vitals / WAI-ARIA audit + code-level fixes. NN/g + Refactoring UI integrated. Pairs with ui-junior (generator).",
    icon: Workflow,
  },
  {
    id: "omd-asset-curator",
    model: "sonnet",
    role: "Asset medium picker",
    desc:
      "Picks medium (inline SVG / chart library / Lottie / Rive / Unsplash / 3D). Stack-aware (recharts vs chartjs, lucide vs heroicons).",
    icon: Palette,
  },
  {
    id: "omd-3d-blender",
    model: "opus",
    role: "3D renderer",
    desc:
      "Blender MCP renderer with just-in-time install walkthrough. Renders with materials cited from DESIGN.md §2 + §6.",
    icon: Layers,
  },
  {
    id: "omd-microcopy",
    model: "sonnet",
    role: "Voice copy · generator",
    desc:
      "Voice-consistent copy generation strictly tied to DESIGN.md §10. Refuses forbidden phrases.",
    icon: Pencil,
  },
  {
    id: "omd-ux-writer",
    model: "opus",
    role: "Copy audit · advisor",
    desc:
      "Section-level copy audit + 2-3 strong alternatives + A/B hypothesis. Podmajersky / Mailchimp / Stripe / GitHub voice docs integrated. Pairs with microcopy (generator).",
    icon: FileCode,
  },
  {
    id: "omd-a11y-auditor",
    model: "haiku",
    role: "Accessibility",
    desc:
      "Deterministic WCAG checks. axe-core + lighthouse + Tier-1 DS URL liveness. Pass/fail is binary.",
    icon: ShieldCheck,
  },
  {
    id: "omd-persona-tester",
    model: "sonnet",
    role: "Adversarial QA",
    desc:
      "Walks the generated UI under 4 strict personas (V/J/F/S) with hard turn budget. Emits 6 quantitative metrics.",
    icon: TestTube,
  },
  {
    id: "omd-critic",
    model: "opus",
    role: "Root-cause review",
    desc:
      "Reads full run output, user feedback, persona ABANDONs. Writes a critique that re-enters at the lowest broken phase, not surface patches.",
    icon: Brain,
  },
];

interface Phase {
  num: string;
  name: string;
  output: string;
  agent: string;
  /** Mandatory user checkpoint right after this phase. */
  checkpoint?: boolean;
}

interface Stage {
  id: string;
  label: string;
  desc: string;
  parallel?: boolean;
  phases: Phase[];
}

const STAGES: Stage[] = [
  {
    id: "plan",
    label: "Plan",
    desc: "Define the brief and the constraints.",
    phases: [
      {
        num: "01",
        name: "Discovery",
        output: "Brief · constraints · success metrics",
        agent: "master",
        checkpoint: true,
      },
      {
        num: "02",
        name: "Research",
        output: "Tier-1 DS scan · competitor URLs",
        agent: "ux-researcher",
      },
      {
        num: "03",
        name: "IA",
        output: "Information architecture · sitemap",
        agent: "ux-researcher",
      },
    ],
  },
  {
    id: "system",
    label: "System",
    desc: "Lock the brand tokens and components.",
    phases: [
      {
        num: "04",
        name: "Wireframes",
        output: "ASCII wireframes · 5 states / screen",
        agent: "ui-junior",
      },
      {
        num: "05",
        name: "Design system",
        output: "DESIGN.md · tokens · philosophy",
        agent: "master",
      },
      {
        num: "06",
        name: "Components",
        output: "Component manifest · variants",
        agent: "ui-junior",
        checkpoint: true,
      },
    ],
  },
  {
    id: "make",
    label: "Make",
    desc: "Generate artifacts in parallel.",
    parallel: true,
    phases: [
      {
        num: "07",
        name: "Asset sourcing",
        output: "Inline SVG / chart / 3D / image picks",
        agent: "asset-curator",
      },
      {
        num: "08",
        name: "Microcopy",
        output: "Voice-consistent copy · §10 cited",
        agent: "microcopy",
      },
    ],
  },
  {
    id: "validate",
    label: "Validate & Ship",
    desc: "Catch issues, package the deliverable.",
    phases: [
      {
        num: "09",
        name: "Validation",
        output: "axe-core + 4-persona walkthrough",
        agent: "a11y-auditor + persona-tester",
      },
      {
        num: "10",
        name: "Handoff",
        output: "Zip · v0/Cursor-ready package",
        agent: "master + critic",
        checkpoint: true,
      },
    ],
  },
];

const USE_CASES: { quote: string; whatHappens: string }[] = [
  {
    quote: "Set up the design system for a calm B2B fintech dashboard.",
    whatHappens:
      "Agent picks a reference (likely Linear or Stripe), proposes a hybrid DESIGN.md, asks for confirmation, writes the file plus shims.",
  },
  {
    quote: "Make the empty-state for the search results page.",
    whatHappens:
      "Reads DESIGN.md, builds the component with brand tokens, picks an inline SVG matching the voice, drops microcopy that follows §10 voice rules.",
  },
  {
    quote:
      "Design the entire onboarding from scratch — Toss-style for a family meal-tracking app.",
    whatHappens:
      "Invokes the harness — runs the 10-phase pipeline, spawns sub-agents in parallel, asks 3 user checkpoints, hands back a v0/Cursor-ready package.",
  },
  {
    quote: "Render a 3D water glass for the hero.",
    whatHappens:
      "Recommends Blender, walks through install-on-demand (not bundled in upfront bootstrap), then renders with materials cited from §2 + §6.",
  },
  {
    quote: "Add a daily-intake line chart.",
    whatHappens:
      "Reads your package.json, sees recharts is installed, builds with brand colors. No library mismatch.",
  },
  {
    quote: "We never use uppercase CTAs.",
    whatHappens:
      "Silently appends to .omd/preferences.md. Next CTA anywhere in the project applies the rule. Run \"fold preferences\" later to merge by scope.",
  },
];

const INSTALL_FILES: { path: string; owner: string; purpose: string }[] = [
  {
    path: ".claude/skills/omd-*/SKILL.md",
    owner: "install-skills",
    purpose: "Claude Code skill bundle",
  },
  {
    path: ".codex/skills/omd-*/SKILL.md",
    owner: "install-skills",
    purpose: "Codex skill bundle",
  },
  {
    path: ".opencode/agents/omd-*.md",
    owner: "install-skills",
    purpose: "OpenCode agent bundle",
  },
  {
    path: ".claude/agents/omd-*.md",
    owner: "install-skills",
    purpose: "11 canonical sub-agents (master + 10 specialists)",
  },
  {
    path: ".claude/data/*",
    owner: "install-skills",
    purpose: "67-reference fingerprints, vocabulary, opt-out corpus",
  },
  {
    path: ".claude/hooks/*.cjs",
    owner: "install-skills",
    purpose: "UserPromptSubmit / SessionStart / PostToolUse hooks",
  },
  {
    path: "references/*/DESIGN.md",
    owner: "bundled",
    purpose: "67 real design systems",
  },
  {
    path: "DESIGN.md",
    owner: "your agent",
    purpose: "Your project's authoritative brand spec",
  },
  {
    path: "CLAUDE.md / AGENTS.md / .cursor/rules/omd-design.mdc",
    owner: "omd:sync",
    purpose: "Pointers so every agent reads DESIGN.md",
  },
  {
    path: ".omd/preferences.md",
    owner: "omd:remember",
    purpose: "Append-only design correction log",
  },
  {
    path: ".omd/runs/<id>/",
    owner: "omd:harness",
    purpose: "Per-harness-run artifacts (briefs, wireframes, eval, handoff zips)",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Does it call any AI provider during install?",
    a: "No. Install copies skill markdown, hooks, and 67 DESIGN.md files. Zero API calls. Your AI agent (Claude Code, Codex, OpenCode, Cursor) is the inference layer — install just teaches it where to look.",
  },
  {
    q: "Which agents are supported?",
    a: "Claude Code, Codex, OpenCode, and Cursor (via .cursor/rules). Hooks ship for Claude Code; the SKILL.md files are agent-agnostic markdown.",
  },
  {
    q: "Can I bring my own DESIGN.md?",
    a: "Yes. If a DESIGN.md exists at repo root, omd:apply uses it as-is. Otherwise omd:init proposes a hybrid from one of the 67 references.",
  },
  {
    q: "How do preferences differ from DESIGN.md?",
    a: ".omd/preferences.md is the running log of corrections (append-only). DESIGN.md is the canonical spec. Run \"fold preferences\" to merge by scope.",
  },
  {
    q: "What's a harness run?",
    a: "Invoking /omd-harness <task> creates .omd/runs/<id>/ and steps through the 10 phases. Each phase emits artifacts. The final zip is v0/Cursor-ready.",
  },
  {
    q: "Is it really free?",
    a: "Yes. MIT licensed. The npm tarball is the only package. No paid tier exists or is planned. References belong to their respective companies — reproduced for educational reference only.",
  },
];

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function DocsPage() {
  return (
    <div
      className={`${geist.variable} ${geistMono.variable}`}
      style={{
        fontFamily: "var(--font-geist-v2), system-ui, sans-serif",
        background: V2.bgDark,
        color: V2.textOnDark,
      }}
    >
      <V2Nav />

      <DocsHero />
      <QuickStart />
      <SkillsSection />
      <AgentsSection />
      <PipelineSection />
      <UseCasesSection />
      <InstallLayout />
      <FaqSection />
      <DocsFooter />
    </div>
  );
}

/* ──────────────────────────── HERO ──────────────────────────── */

function DocsHero() {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };
  return (
    <section
      className="relative overflow-hidden border-b"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(85,70,255,0.12), transparent 60%), #0a0a0f",
        borderColor: V2.borderDark,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
          style={{
            borderColor: V2.borderDark,
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: V2.accent }}
          />
          Docs · v1.0.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-tight"
        >
          The skill-driven{" "}
          <span
            className="inline-block pb-1"
            style={{
              backgroundImage: `linear-gradient(135deg, ${V2.primary} 0%, ${V2.primaryGlow} 55%, #c4b9ff 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            design harness.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          <strong className="text-white">6 skills</strong>,{" "}
          <strong className="text-white">11 sub-agents</strong>, a{" "}
          <strong className="text-white">10-phase pipeline</strong>, and{" "}
          <strong className="text-white">67 reference DESIGN.md files</strong>{" "}
          — installed into your AI coding agent in one command. No API keys.
          No external infra. Then you just talk to your agent.
        </motion.p>

        {/* install snippet */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-7 flex max-w-md items-center gap-2 rounded-xl border bg-black/40 px-3 py-2.5 font-mono text-sm backdrop-blur"
          style={{ borderColor: V2.borderDark }}
        >
          <span className="select-none" style={{ color: V2.accent }}>$</span>
          <code className="flex-1 truncate text-white/85">{INSTALL_CMD}</code>
          <button
            type="button"
            onClick={onCopy}
            aria-label={copied ? "Copied" : "Copy install command"}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/55 transition-colors hover:bg-white/5 hover:text-white"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" style={{ color: V2.accent }} />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </motion.div>

        {/* anchor jump nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-2 text-xs"
        >
          {[
            ["#quick-start", "Quick start"],
            ["#skills", "6 skills"],
            ["#agents", "11 sub-agents"],
            ["#pipeline", "Pipeline"],
            ["#use-cases", "Use cases"],
            ["#install-layout", "Install layout"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 font-medium text-white/65 transition-all hover:bg-white/5 hover:text-white"
              style={{ borderColor: V2.borderDark }}
            >
              {label}
            </a>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}

/* ──────────────────────────── QUICK START ──────────────────────────── */

function QuickStart() {
  return (
    <Section id="quick-start" eyebrow="Quick start" title="Three steps · two minutes">
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          {
            num: "01",
            title: "Install in your project",
            body: (
              <>
                In your project root:
                <CodeLine>npx oh-my-design-cli install-skills</CodeLine>
                Restart your agent (Cmd+Q in Claude Code, then relaunch) so
                the new skills + agents are loaded.
              </>
            ),
          },
          {
            num: "02",
            title: "Bootstrap a DESIGN.md",
            body: (
              <>
                Open Claude Code / Codex / OpenCode / Cursor in the project,
                then say:
                <Quote>
                  &ldquo;Set up the design system for a calm B2B fintech
                  dashboard.&rdquo;
                </Quote>
                Agent picks a reference, proposes a hybrid DESIGN.md, asks
                you to confirm, writes the file plus shims.
              </>
            ),
          },
          {
            num: "03",
            title: "Talk in natural language",
            body: (
              <>
                That&apos;s it. From here on, you describe what you want —
                components, screens, copy, charts, 3D — and the agent applies
                your DESIGN.md, picks the right asset medium, and ships.
                <Quote>
                  &ldquo;Make the empty-state for the search results
                  page.&rdquo;
                </Quote>
              </>
            ),
          },
        ].map((s) => (
          <div
            key={s.num}
            className="rounded-2xl border p-6"
            style={{
              borderColor: V2.borderDark,
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              className="mb-4 inline-flex h-7 items-center rounded-full px-2.5 font-mono text-[11px] font-semibold"
              style={{ background: V2.primary + "22", color: V2.accent }}
            >
              step {s.num}
            </div>
            <div className="text-base font-semibold text-white">{s.title}</div>
            <div className="mt-2 text-sm leading-relaxed text-white/60">
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ──────────────────────────── SKILLS ──────────────────────────── */

function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills · 6"
      title="Loaded into your agent's context, fired by triggers"
      desc="Skills are markdown rule files that activate based on what you say. They route complex tasks to the right sub-agents."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILLS.map((s) => (
          <SkillCard key={s.id} skill={s} />
        ))}
      </div>
    </Section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-2xl border p-6 transition-colors hover:bg-white/[0.03]"
      style={{
        borderColor: V2.borderDark,
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: V2.primary + "1a", color: V2.primaryGlow }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <code
          className="rounded-md px-2 py-0.5 font-mono text-[11px]"
          style={{
            color: V2.accent,
            background: "rgba(168,156,255,0.08)",
          }}
        >
          {skill.id}
        </code>
      </div>
      <div className="mt-5 text-base font-semibold text-white">
        {skill.title}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/40">
        Trigger · {skill.trigger}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {skill.desc}
      </p>
    </motion.div>
  );
}

/* ──────────────────────────── AGENTS ──────────────────────────── */

function AgentsSection() {
  return (
    <Section
      id="agents"
      eyebrow="Sub-agents · 11"
      title="Specialists, dispatched by the master orchestrator"
      desc="omd-master runs the harness phases and dispatches specialists in parallel where independent."
      light
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {AGENTS.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </div>
    </Section>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const Icon = agent.icon;
  const modelColor =
    agent.model === "opus"
      ? "#5546ff"
      : agent.model === "sonnet"
      ? "#22c55e"
      : "#f59e0b";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border p-5"
      style={{
        borderColor: V2.borderLight,
        background: "rgba(0,0,0,0.02)",
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ background: V2.primary + "12", color: V2.primary }}
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
        <span
          className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: modelColor, background: modelColor + "1a" }}
        >
          {agent.model}
        </span>
      </div>
      <code
        className="mt-3 block font-mono text-[12px] font-bold"
        style={{ color: V2.textOnLight }}
      >
        {agent.id}
      </code>
      <div className="text-[10px] uppercase tracking-wider opacity-50 mt-0.5">
        {agent.role}
      </div>
      <p className="mt-3 text-[13px] leading-relaxed opacity-75">
        {agent.desc}
      </p>
    </motion.div>
  );
}

/* ──────────────────────────── PIPELINE ──────────────────────────── */

function PipelineSection() {
  return (
    <Section
      id="pipeline"
      eyebrow="Pipeline · 4 stages · 10 phases"
      title="What happens on /omd-harness <task>"
      desc="omd-master spawns the right specialists at each phase, asks 3 mandatory user checkpoints, and emits artifacts to .omd/runs/<id>/."
    >
      {/* legend */}
      <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/55">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: V2.primary }}
          />
          Phase
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold"
            style={{
              background: V2.accent + "22",
              color: V2.accent,
            }}
          >
            ✓
          </span>
          User checkpoint
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
          <span
            className="inline-flex items-center rounded px-1 py-0.5"
            style={{ background: "rgba(168,156,255,0.1)", color: V2.accent }}
          >
            agent
          </span>
          Dispatched sub-agent
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span style={{ color: V2.accent }}>∥</span>
          Parallel stage
        </span>
      </div>

      {/* lanes — 4 stages on lg, stacked on mobile */}
      <div className="relative grid gap-6 lg:grid-cols-4 lg:gap-4">
        {STAGES.map((stage, sIdx) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: sIdx * 0.08 }}
            className="relative"
          >
            {/* stage header */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex h-6 items-center rounded-full border px-2 font-mono text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    borderColor: V2.primary,
                    background: V2.primary + "12",
                    color: V2.accent,
                  }}
                >
                  {String(sIdx + 1).padStart(2, "0")} · {stage.label}
                </span>
                {stage.parallel && (
                  <span
                    className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider"
                    style={{
                      borderColor: V2.accent + "55",
                      color: V2.accent,
                      background: V2.accent + "0d",
                    }}
                    title="Phases run in parallel"
                  >
                    ∥ parallel
                  </span>
                )}
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-white/55">
                {stage.desc}
              </p>
            </div>

            {/* phase cards in this stage */}
            <ul className="space-y-2.5">
              {stage.phases.map((p) => (
                <PhaseCard key={p.num} phase={p} />
              ))}
            </ul>

            {/* connector arrow to next stage (lg+ only) */}
            {sIdx < STAGES.length - 1 && (
              <div
                aria-hidden
                className="hidden lg:block absolute top-3 -right-3 z-10"
                style={{ color: V2.primary }}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{
                    background: V2.bgDark,
                    border: `1px solid ${V2.primary}66`,
                  }}
                >
                  →
                </span>
              </div>
            )}

            {/* mobile: down arrow between stages */}
            {sIdx < STAGES.length - 1 && (
              <div
                aria-hidden
                className="lg:hidden mt-4 flex justify-center"
                style={{ color: V2.primary }}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{
                    background: V2.bgDark,
                    border: `1px solid ${V2.primary}66`,
                  }}
                >
                  ↓
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* footnote — parallel + checkpoint summary */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {/* PARALLEL DISPATCH */}
        <div
          className="rounded-xl border p-6"
          style={{
            borderColor: V2.borderDark,
            background: "rgba(168,156,255,0.04)",
          }}
        >
          <div
            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: V2.accent }}
          >
            <span className="text-base">∥</span>
            Parallel dispatch
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Once the system is locked, <strong className="text-white">Asset
            sourcing</strong> and <strong className="text-white">Microcopy</strong>{" "}
            dispatch in parallel.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            Both agents read the same DESIGN.md but emit independent
            artifacts — fastest end-to-end.
          </p>
        </div>

        {/* USER CHECKPOINTS */}
        <div
          className="rounded-xl border p-6"
          style={{
            borderColor: V2.borderDark,
            background: "rgba(168,156,255,0.04)",
          }}
        >
          <div
            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: V2.accent }}
          >
            <span className="text-base">✓</span>
            User checkpoints · 3
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Three points where the harness pauses for your OK:
          </p>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-white/65">
            <li>
              <strong className="text-white">Discovery</strong> — does the
              brief look right?
            </li>
            <li>
              <strong className="text-white">Components</strong> — system
              tokens locked?
            </li>
            <li>
              <strong className="text-white">Handoff</strong> — ready to
              ship?
            </li>
          </ul>
          <p className="mt-3 text-xs text-white/45">
            Skipping any aborts the run cleanly.
          </p>
        </div>
      </div>
    </Section>
  );
}

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <li
      className="group relative rounded-xl border p-4 transition-colors hover:bg-white/[0.04] sm:p-5"
      style={{
        borderColor: V2.borderDark,
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {/* Identity row — number + name + checkpoint */}
      <div className="flex items-center gap-2.5">
        <span
          className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold"
          style={{
            background: V2.primary + "1a",
            color: V2.accent,
            border: `1px solid ${V2.primary}55`,
          }}
        >
          {phase.num}
        </span>
        <span className="text-[14px] font-semibold leading-tight text-white">
          {phase.name}
        </span>
        {phase.checkpoint && (
          <span
            title="Mandatory user checkpoint"
            className="ml-auto inline-flex h-5 items-center gap-1 rounded-full px-1.5 text-[9px] font-bold uppercase tracking-wider"
            style={{
              background: V2.accent + "1f",
              color: V2.accent,
              border: `1px solid ${V2.accent}33`,
            }}
          >
            <span className="text-[10px] leading-none">✓</span>
            check
          </span>
        )}
      </div>

      {/* Output — what this phase emits */}
      <p
        className="mt-3.5 text-[12.5px] leading-relaxed text-white/65"
        style={{ wordBreak: "keep-all" }}
      >
        {phase.output}
      </p>

      {/* Agent — separated by hairline */}
      <div
        className="mt-4 flex items-center gap-2 border-t pt-3"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-white/35">
          agent
        </span>
        <span
          className="rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold"
          style={{
            background: "rgba(168,156,255,0.1)",
            color: V2.accent,
          }}
        >
          {phase.agent}
        </span>
      </div>
    </li>
  );
}

/* ──────────────────────────── USE CASES ──────────────────────────── */

function UseCasesSection() {
  return (
    <Section
      id="use-cases"
      eyebrow="Use cases"
      title="Real prompts that route through real skills"
      desc="What you say · what the agent does. No magic — every transition is a skill firing."
      light
    >
      <div className="grid gap-3 md:grid-cols-2">
        {USE_CASES.map((u, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
            className="rounded-2xl border p-5"
            style={{
              borderColor: V2.borderLight,
              background: "rgba(0,0,0,0.02)",
            }}
          >
            <div className="flex items-start gap-3">
              <Terminal
                className="mt-0.5 h-4 w-4 flex-shrink-0"
                style={{ color: V2.primary }}
                strokeWidth={2}
              />
              <div
                className="text-sm font-medium leading-relaxed"
                style={{ color: V2.textOnLight }}
              >
                &ldquo;{u.quote}&rdquo;
              </div>
            </div>
            <div
              className="mt-3 border-t pt-3 text-[13px] leading-relaxed opacity-70"
              style={{ borderColor: V2.borderLight }}
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider opacity-60">
                ↳ what happens
              </span>
              <p className="mt-1">{u.whatHappens}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ──────────────────────────── INSTALL LAYOUT ──────────────────────────── */

function InstallLayout() {
  return (
    <Section
      id="install-layout"
      eyebrow="Install layout"
      title="Exactly what gets written to your project"
      desc="Nothing hidden. Every path is documented; every owner is named."
    >
      <div
        className="overflow-hidden rounded-xl border"
        style={{ borderColor: V2.borderDark }}
      >
        <div
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-3 text-[10px] font-semibold uppercase tracking-wider"
          style={{
            background: "rgba(255,255,255,0.04)",
            color: "rgba(255,255,255,0.55)",
            borderBottom: `1px solid ${V2.borderDark}`,
          }}
        >
          <span>Path</span>
          <span>Owner</span>
          <span>Purpose</span>
        </div>
        <div>
          {INSTALL_FILES.map((f, i) => (
            <div
              key={f.path}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-3 text-[13px] transition-colors hover:bg-white/[0.02]"
              style={{
                borderBottom:
                  i === INSTALL_FILES.length - 1
                    ? "none"
                    : `1px solid ${V2.borderDark}`,
              }}
            >
              <code className="font-mono text-white/85">{f.path}</code>
              <span
                className="rounded-md px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider"
                style={{
                  color: V2.accent,
                  background: "rgba(168,156,255,0.08)",
                }}
              >
                {f.owner}
              </span>
              <span className="text-white/55">{f.purpose}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────────────── FAQ ──────────────────────────── */

function FaqSection() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Common questions" light>
      <div
        className="overflow-hidden rounded-2xl border"
        style={{ borderColor: V2.borderLight, background: "rgba(0,0,0,0.015)" }}
      >
        {FAQ.map((f, i) => (
          <details
            key={i}
            className="group border-b last:border-b-0 px-6 py-5 transition-colors open:bg-black/[0.02]"
            style={{ borderColor: V2.borderLight }}
          >
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold"
              style={{ color: V2.textOnLight }}
            >
              {f.q}
              <span
                className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-full transition-transform group-open:rotate-45"
                style={{ color: V2.primary }}
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed opacity-70">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ──────────────────────────── FOOTER (slim) ──────────────────────────── */

function DocsFooter() {
  return (
    <footer
      style={{
        background: V2.bgDark,
        color: V2.textOnDark,
        borderTop: `1px solid ${V2.borderDark}`,
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-white.png"
                alt="oh-my-design"
                className="h-7"
                draggable={false}
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Found a doc that&apos;s wrong, missing, or stale?{" "}
              <a
                href="https://github.com/kwakseongjae/oh-my-design/issues/new?labels=docs&template=feature_request.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 underline underline-offset-4 hover:text-white"
              >
                Open an issue
              </a>
              .
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
              style={{ borderColor: V2.borderDark }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Back to landing
            </Link>
            <a
              href="https://github.com/kwakseongjae/oh-my-design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
              style={{ borderColor: V2.borderDark }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              GitHub
              <Star className="h-3 w-3" style={{ color: V2.accent }} />
            </a>
          </div>
        </div>
        <div
          className="mt-8 flex items-center justify-between border-t pt-4 text-xs text-white/45"
          style={{ borderColor: V2.borderDark }}
        >
          <span>
            &copy; {new Date().getFullYear()} oh-my-design · MIT
          </span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            v1.0.0 · live
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────── PRIMITIVES ──────────────────────────── */

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
  light,
}: {
  id: string;
  eyebrow: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28"
      style={{
        background: light ? V2.bgLight : V2.bgDark,
        color: light ? V2.textOnLight : V2.textOnDark,
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: light ? V2.primary : V2.accent }}
        >
          {eyebrow}
        </div>
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: light ? V2.textOnLight : V2.textOnDark }}
        >
          {title}
        </h2>
        {desc && (
          <p
            className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base"
            style={{
              color: light
                ? "rgba(10,10,15,0.6)"
                : "rgba(255,255,255,0.6)",
            }}
          >
            {desc}
          </p>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-2 mb-3 inline-flex max-w-full items-center gap-2 rounded-md border bg-black/40 px-2.5 py-1.5 font-mono text-xs text-white/85"
      style={{ borderColor: V2.borderDark }}
    >
      <span style={{ color: V2.accent }}>$</span>
      <code className="truncate">{children}</code>
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-2 border-l-2 pl-3 text-[13px] italic leading-relaxed text-white/75"
      style={{ borderColor: V2.primary }}
    >
      {children}
    </blockquote>
  );
}
