/**
 * Canonical EN FAQ — single source of truth for BOTH consumers (issue #28):
 *
 *   1. /docs page FAQ section (src/app/docs/page.tsx) — renders ALL entries;
 *   2. root layout JSON-LD FAQPage schema (src/app/layout.tsx) — renders only
 *      the `jsonLd: true` subset (keep it small and SEO-focused — search
 *      engines read this set as the site-wide FAQ rich result).
 *
 * The KR /faq page (src/app/faq/page.tsx) is distinct Korean AEO content with
 * its own 20 questions and is intentionally NOT generated from this list.
 */

import { REFERENCE_COUNT } from "@/lib/catalog-count";

export interface FaqEntry {
  q: string;
  a: string;
  /** Include this entry in the layout.tsx JSON-LD FAQPage schema. */
  jsonLd: boolean;
}

export const FAQ_EN: FaqEntry[] = [
  {
    q: "What is DESIGN.md?",
    a: "DESIGN.md is a structured markdown file that defines your project's brand spec — tokens (colors, typography, spacing, radius), voice, narrative, principles, personas, states, and motion. AI coding agents (Claude Code, Codex, OpenCode, Cursor) read it as authoritative context before generating any UI, so the output looks like your brand instead of generic 'modern minimalist' slop.",
    jsonLd: true,
  },
  {
    q: "How does oh-my-design work?",
    a: "Run `npx oh-my-design-cli install-skills` once in your project. It installs 17 skills (core flow + live-capture + asset + the v0.2 agent layer: orchestrator, kr-writer, locale-adapter, designer-review, final-qa, codex-image), 16 sub-agents (master orchestrator + 15 specialists), 4 hooks, and " + REFERENCE_COUNT + " reference DESIGN.md files. After restarting your AI coding agent, you just talk in natural language — skills route to the right sub-agents automatically.",
    jsonLd: true,
  },
  {
    q: "Does it call any AI provider during install?",
    a: "No. The install is a pure markdown copy — zero API calls, zero data leaves your machine. Your AI coding agent (Claude Code, Codex, OpenCode, or Cursor) is the inference layer; install just teaches it where to look.",
    jsonLd: true,
  },
  {
    q: "How do I upgrade when a new release drops?",
    a: "Re-run `npx oh-my-design-cli@latest install-skills` in your project. It's idempotent — managed files (those with the `<!-- omd:installed-skill -->` marker) refresh in place; your edits without the marker stay untouched (status `skipped-drift`). Pass `--force` to overwrite custom edits. Then restart your agent. See CHANGELOG.md for what changed each release.",
    jsonLd: false,
  },
  {
    q: "Which AI coding agents are supported?",
    a: "Claude Code, Codex, OpenCode, and Cursor — Cursor has a dedicated install channel (--agent cursor) that writes the .cursor/rules shim plus the shared reference catalog. The skill markdown files are agent-agnostic; hooks ship for Claude Code specifically.",
    jsonLd: true,
  },
  {
    q: "Can my agent read a reference without installing anything?",
    a: "Yes. Every reference has a raw markdown twin at oh-my-design.kr/<id>/design.md (e.g. oh-my-design.kr/toss/design.md) — agents can fetch the full DESIGN.md directly over HTTP. Curated sets by use case live at oh-my-design.kr/collections.",
    jsonLd: false,
  },
  {
    q: "I customized a reference in the web builder — how do I hand it to my agent?",
    a: "The builder preview composes your first prompt from your live config (reference, components, token overrides, dark mode). Copy it from the install CTA and paste it into your agent — omd:init reads the prompt and bootstraps a matching DESIGN.md.",
    jsonLd: false,
  },
  {
    q: "Can I bring my own DESIGN.md?",
    a: "Yes. If a DESIGN.md exists at repo root, omd:apply uses it as-is. Otherwise omd:init proposes a hybrid from one of the " + REFERENCE_COUNT + " references.",
    jsonLd: false,
  },
  {
    q: "How do preferences differ from DESIGN.md?",
    a: '.omd/preferences.md is the running log of corrections (append-only). DESIGN.md is the canonical spec. Run "fold preferences" to merge by scope.',
    jsonLd: false,
  },
  {
    q: "What is the design harness?",
    a: "The omd-harness skill runs a 10-phase design pipeline (Discovery → Research → IA → Wireframes → Design system → Components → Asset sourcing → Microcopy → Validation → Handoff). It dispatches sub-agents in parallel where independent, asks 3 mandatory user checkpoints, and emits a v0/Cursor-ready package. Trigger it by saying things like 'design the entire onboarding from scratch' or '/omd-harness <task>'.",
    jsonLd: true,
  },
  {
    q: "What's a harness run?",
    a: "Invoking /omd-harness <task> creates .omd/runs/<id>/ and steps through the 10 phases. Each phase emits artifacts. The final zip is v0/Cursor-ready.",
    jsonLd: false,
  },
  {
    q: "Is it free?",
    a: "Yes — MIT licensed, open source, no signup, no API key, no paid tier. The references in the bundle belong to their respective companies and are reproduced for educational reference only.",
    jsonLd: true,
  },
];
