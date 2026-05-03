<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>One-command bootstrap for skill-driven design with your AI coding agent.</strong> 67 real company design systems. Zero AI calls in the install. Then you just talk to your agent.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-67-7c5cfc?style=flat-square" alt="67 References" />
  <img src="https://img.shields.io/badge/CLI%20commands-1-blue?style=flat-square" alt="One CLI command" />
</p>

---

## What is this?

**oh-my-design (OmD)** turns your AI coding agent (Claude Code / Codex / OpenCode / Cursor) into a senior product designer with a working memory of your brand. You install once. After that, you just describe what you want — components, screens, copy, assets, charts — and the agent applies your project's design system, picks the right asset medium, and ships.

`DESIGN.md` is the brand spec ([Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) tokens + the OmD v0.1 brand-philosophy layer: Voice / Narrative / Principles / Personas / States / Motion). 67 real-company DESIGN.md files ship in this package. Pick one, customize through conversation, ship.

**No API keys. No external infra. Everything runs inside your existing CLI session.**

## Install

```bash
cd my-project
npx oh-my-design-cli install-skills
```

Then restart your agent (Cmd+Q in Claude Code, then relaunch) so the new skills + agents are loaded.

That is the only CLI command you will run. Everything else is natural language to your agent.

## How you use it

Open Claude Code (or Codex / OpenCode) in your project. Just talk:

> "Set up the design system for a calm B2B fintech dashboard."
> Agent picks a reference from 67 (likely Linear or Stripe), proposes a hybrid DESIGN.md, asks for confirmation, writes the file plus shims.

> "Make the empty-state for the search results page."
> Agent reads DESIGN.md, builds the component with brand tokens, picks an inline SVG illustration matching the voice, drops in microcopy that follows the §10 voice rules.

> "Design the entire onboarding from scratch — Toss-style for a family meal-tracking app."
> Agent invokes the harness — runs the 10-phase pipeline (discovery, research, IA, wireframes, components, assets, microcopy, validation, handoff), spawns sub-agents in parallel where possible, asks you 3 mandatory checkpoints, hands back a v0/Cursor-ready package.

> "Render a 3D water glass for the hero."
> Agent recommends Blender, walks you through install-on-demand (it does not bundle it in the upfront bootstrap), then renders with materials cited from DESIGN.md §2 and §6.

> "Add a daily-intake line chart."
> Agent reads your `package.json`, sees `recharts` is installed, builds the chart with brand colors, no library mismatch.

> "We never use uppercase CTAs."
> Agent silently appends to `.omd/preferences.md`. Next time anyone makes a CTA, that rule applies. Later you can say "fold preferences into DESIGN.md" and the agent merges by scope.

## What gets installed

| Path | Owner | Purpose |
|---|---|---|
| `.claude/skills/omd-*/SKILL.md` | install-skills | Claude Code skill bundle (apply / harness / init / learn / remember / sync) |
| `.codex/skills/omd-*/SKILL.md` | install-skills | Codex skill bundle |
| `.opencode/agents/omd-*.md` | install-skills | OpenCode agent bundle |
| `.claude/agents/omd-*.md` | install-skills | 11 canonical sub-agents (master + 10 specialists) |
| `.claude/data/*` | install-skills | 67-reference fingerprints, vocabulary, opt-out corpus |
| `.claude/hooks/*.cjs` | install-skills | UserPromptSubmit / SessionStart / PostToolUse hooks |
| `.claude/skills/skill-rules.json` | install-skills | Skill activation rules |
| `references/*/DESIGN.md` | bundled | 67 real design systems |
| `DESIGN.md` | your agent (after init flow) | Your project's authoritative brand spec |
| `CLAUDE.md` / `AGENTS.md` / `.cursor/rules/omd-design.mdc` | omd-sync skill | Pointers so every agent reads DESIGN.md |
| `.omd/preferences.md` | omd-remember skill | Append-only design correction log |
| `.omd/runs/<id>/` | omd-harness skill | Per-harness-run artifacts (briefs, wireframes, eval, handoff zips) |

## The 6 skills + 11 agents

Skills (loaded into your agent's context based on prompt triggers):

- **omd:apply** — DESIGN.md as authoritative context for every UI task. Routes complex requests (assets, charts, full screens, a11y audit) to specialized sub-agents.
- **omd:init** — Bootstrap DESIGN.md from a reference + project description. 67 references, hybrid variation that preserves the reference voice while shifting only user-named axes.
- **omd:harness** — `/omd-harness <task>` to run the 10-phase design pipeline with checkpoints. Spawns sub-agents in parallel.
- **omd:remember** — Captures user corrections to `.omd/preferences.md` automatically when the agent detects them.
- **omd:learn** — Folds pending corrections back into DESIGN.md by scope.
- **omd:sync** — Maintains the shim files (CLAUDE.md / AGENTS.md / Cursor mdc) so every agent reads your DESIGN.md.

Sub-agents — 1 orchestrator + 10 specialists (invoked by the master or directly by skills):

- **omd-master** — Conversational state machine, runs the harness phases. opus.
- **omd-ux-researcher** — Reads bundled references, validates Tier-1 official design system URLs. opus.
- **omd-ui-junior** — Generates wireframes and component manifests from DESIGN.md. sonnet.
- **omd-ux-engineer** — Section-level interaction / motion / IA / mobile / perceived-perf audit + code-level fixes. NN/g heuristics + Refactoring UI + Web Vitals + WAI-ARIA. Senior advisor; pairs with `omd-ui-junior` (generator). opus.
- **omd-asset-curator** — Picks asset medium (inline SVG / chart library / Lottie / Rive / Unsplash / 3D), generates inline code or sources external. Stack-aware (recharts vs chartjs vs custom SVG, lucide vs heroicons, etc.). sonnet.
- **omd-3d-blender** — Blender MCP renderer with just-in-time install walkthrough. opus.
- **omd-microcopy** — Voice-consistent copy generation tied to DESIGN.md §10. sonnet.
- **omd-ux-writer** — Section-level copy audit + 2-3 strong alternatives + A/B hypothesis. Podmajersky / Erika Hall / Mailchimp / Stripe / GitHub voice docs integrated. Senior advisor; pairs with `omd-microcopy` (generator). opus.
- **omd-a11y-auditor** — WCAG checks. haiku.
- **omd-persona-tester** — Adversarial 4-persona walkthrough (V/J/F/S). sonnet.
- **omd-critic** — Root-cause analysis when the user iterates. opus.

## What 1.0.0 is not

- It is not a collection of CLI commands. There is one bootstrap command. Everything else is skill prose.
- It is not an SDK. The `dist/index.js` programmatic API is gone. If you need the matching algorithm or shim format, look at the skill markdown directly.
- It does not generate emojis as icons. Asset agent prefers inline SVG (Lucide-matched or custom).

If you were on 0.1.x: see [MIGRATION.md](MIGRATION.md). All your old CLI commands are now spoken to your agent.

## Status

`v1.0.0` — first skill-first release. Surface area collapsed by ~92% versus 0.1.x. Stable for the install bootstrap; the harness is improving every release as the agent prose tightens.

## License

MIT. References belong to their respective companies — they are reproduced for educational reference.
