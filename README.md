<p align="center">
  <img src=".github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>One-command bootstrap for skill-driven design with your AI coding agent.</strong> 107 real company design systems. Zero AI calls in the install. Then you just talk to your agent.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-107-7c5cfc?style=flat-square" alt="107 References" />
  <img src="https://img.shields.io/badge/CLI%20commands-1-blue?style=flat-square" alt="One CLI command" />
</p>

---

## What is oh-my-design?

**oh-my-design (OmD)** turns your AI coding agent (Claude Code / Codex / OpenCode / Cursor) into a senior product designer with a working memory of your brand. You install once. After that, you just describe what you want — components, screens, copy, assets, charts — and the agent applies your project's design system, picks the right asset medium, and ships.

`DESIGN.md` is the brand spec ([Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) tokens + the brand-philosophy layer: Voice / Narrative / Principles / Personas / States / Motion). 107 real-company DESIGN.md files ship in this package. Pick one, customize through conversation, ship.

**No API keys. No external infra. Everything runs inside your existing CLI session.**

## Install

```bash
npx oh-my-design-cli install-skills
```

Then restart your agent (Cmd+Q in Claude Code, then relaunch) so the new skills + agents are loaded.

That is the only CLI command you will run. Everything else is natural language to your agent.

## Upgrading

Skills and agents evolve every release. To pick up the latest bundle in an existing project:

```bash
npx oh-my-design-cli@latest install-skills
```

Idempotent. Managed files (those carrying the `<!-- omd:installed-skill -->` marker at the top) are refreshed in place. Files you edited that don't have the marker are left untouched (status `skipped-drift`). Pass `--force` if you really want to overwrite your custom edits.

Restart your agent after re-running so the refreshed skills + agents are loaded.

**Check what's installed vs what's latest:**

```bash
npx oh-my-design-cli --version       # what your project currently uses
npm view oh-my-design-cli version    # latest on the registry
```

**What's new each release:** [CHANGELOG.md](./CHANGELOG.md). Every release entry says what changed in the skills, agents, hooks, CLI, and data. If a change requires anything beyond a re-install — for example a migration of `DESIGN.md` frontmatter — it will be called out at the top of that entry.

## How to use omd with your AI

Open Claude Code (or Codex / OpenCode) in your project. Just talk:

> "Set up the design system for a calm B2B fintech dashboard."
> Agent picks a reference from 107 (likely Linear or Stripe), proposes a hybrid DESIGN.md, asks for confirmation, writes the file plus shims.

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

## What's in the install

| Path | Owner | Purpose |
|---|---|---|
| `.claude/skills/omd-*/SKILL.md` | install-skills | Claude Code skill bundle (apply / harness / init / learn / remember / sync / reference-capture / asset-fetch / experiment-gallery) |
| `.codex/skills/omd-*/SKILL.md` | install-skills | Codex skill bundle |
| `.opencode/agents/omd-*.md` | install-skills | OpenCode agent bundle |
| `.claude/agents/omd-*.md` | install-skills | 11 canonical sub-agents (master + 10 specialists) |
| `.claude/data/*` | install-skills | 107-reference fingerprints, vocabulary, opt-out corpus |
| `.claude/hooks/*.cjs` | install-skills | UserPromptSubmit / SessionStart / PostToolUse hooks |
| `.claude/skills/skill-rules.json` | install-skills | Skill activation rules |
| `references/*/DESIGN.md` | bundled | 107 real design systems |
| `DESIGN.md` | your agent (after init flow) | Your project's authoritative brand spec |
| `CLAUDE.md` / `AGENTS.md` / `.cursor/rules/omd-design.mdc` | omd-sync skill | Pointers so every agent reads DESIGN.md |
| `.omd/preferences.md` | omd-remember skill | Append-only design correction log |
| `.omd/runs/<id>/` | omd-harness skill | Per-harness-run artifacts (briefs, wireframes, eval, handoff zips) |

## The 9 skills + 11 agents

Skills (loaded into your agent's context based on prompt triggers):

**Core flow**
- **omd:apply** — DESIGN.md as authoritative context for every UI task. Routes complex requests (assets, charts, full screens, a11y audit) to specialized sub-agents.
- **omd:init** — Bootstrap DESIGN.md from a reference + project description. 107 references, hybrid variation that preserves the reference voice while shifting only user-named axes.
- **omd:harness** — `/omd-harness <task>` to run the 10-phase design pipeline. 7 hero archetypes (rule 9) match brand vibe to layout (center-text / carousel / split-screen / editorial / dashboard / quote-led / left-character). Reveal safety net (rule 10), wordmark-only logo (rule 5), container-inner consistency (rule 7), decomposed hero (rule 8).
- **omd:remember** — Captures user corrections to `.omd/preferences.md` automatically when the agent detects them.
- **omd:learn** — Folds pending corrections back into DESIGN.md by scope.
- **omd:sync** — Maintains the shim files (CLAUDE.md / AGENTS.md / Cursor mdc) so every agent reads your DESIGN.md.

**Live capture + assets** (v1.3.x)
- **omd:reference-capture** — Live brand site CDP/playwright inspect → `assets/_reference/<id>/` with tokens.json + structure.json + fonts.json + `.live-inspect-proof.json` + screenshots + LICENSE-NOTE/attribution. Phase 3.9 browser-harness fast-path: 3-5× faster than playwright MCP when available.
- **omd:asset-fetch** — Free-license asset catalog with verified URLs. DiceBear CC0 (notionists/lorelei avatars), Lucide ISC icons, Picsum CC0 / Loremflickr Flickr-CC photos, SIL OFL display fonts (Bricolage Grotesque / Space Grotesk / DM Serif Display / Fraunces). Strict anti-patterns: handcrafted character SVG forbidden, brand creative work never in product DOM.
- **omd:experiment-gallery** — N-brand experiment results in a single comparison index.html. iframe scaled previews + wow ratings + multi-turn deltas + per-brand IP audit. Reusable across batches.

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

## What it is not

- It is not a collection of CLI commands. There is one bootstrap command. Everything else is skill prose.
- It is not an SDK. If you need the matching algorithm or shim format, look at the skill markdown directly.
- It does not generate emojis as icons. Asset agent prefers inline SVG (Lucide-matched or custom).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history. Migrating from 0.1.x: see [MIGRATION.md](MIGRATION.md).

## License

MIT — see [LICENSE](LICENSE). References belong to their respective companies; reproduced for educational reference.
