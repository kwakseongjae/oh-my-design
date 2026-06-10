<p align="center">
  <img src=".github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>One-command bootstrap for skill-driven design with your AI coding agent.</strong> 246 real company design systems. Zero AI calls in the install. Then you just talk to your agent.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-246-7c5cfc?style=flat-square" alt="246 References" />
  <img src="https://img.shields.io/badge/CLI%20commands-1-blue?style=flat-square" alt="One CLI command" />
</p>

<p align="center">
  English | <a href="README.ko.md">한국어</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## What is oh-my-design?

**oh-my-design (OmD)** is a design system for AI coding agents. It turns Claude Code / Codex / OpenCode / Cursor into a senior product designer with a working memory of your brand. You install once. After that, you just describe what you want — components, screens, copy, assets, charts — and the agent applies your project's design system and ships. `DESIGN.md` is the brand spec ([Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) tokens + a brand-philosophy layer: Voice / Narrative / Principles / Personas / States / Motion), and 246 real-company DESIGN.md files ship in this package. **No API keys. No external infra. Everything runs inside your existing CLI session.**

## Install

```bash
npx oh-my-design-cli install-skills
```

Then restart your agent (Cmd+Q in Claude Code, then relaunch) so the new skills + agents are loaded.

That is the only CLI command you will run. Everything else is natural language to your agent.

The installer asks **where** to install: **Project** (`./.claude/skills` — this project only, the default) or **Global** (`~/.claude/skills` — every project; skills + sub-agents, leaves your global hooks/settings untouched). Skip the prompt with `--global` for the user-level install.

## Your first 60 seconds

This is the whole point: one prompt turns into a `DESIGN.md` your agent remembers across every future session.

1. Install (above), then **restart your agent** (Cmd+Q, relaunch) so it loads the new skills.

2. In your project, type your first prompt — copy this exactly:

   > Set up our design system — Toss-style, for a family meal-tracking app.

   Your agent runs **`omd:init`**: it recommends a reference from the 246 real-company catalog, asks you to confirm, and writes **`DESIGN.md`** to your project root. (`omd:sync` then wires up the `CLAUDE.md` / `AGENTS.md` / Cursor shims so every agent reads it automatically.)

   **That `DESIGN.md` is your activation — your agent now remembers your brand.**

3. Now build against it:

   > Design the home screen.

   The agent reads `DESIGN.md` and ships brand-correct UI. No re-explaining your design system, ever again.

Don't want Toss? Any brand works — `Stripe-style`, `Linear-clone B2B SaaS`, `Karrot-style marketplace`. Browse the full catalog at [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems).

## Supported agents

| Agent | Channel | What gets installed |
|---|---|---|
| **Claude Code** | `--agent claude-code` (default) | Full bundle — skills, 16 sub-agents, hooks, data under `.claude/` |
| **Codex** | `--agent codex` | Skill bundle at `.agents/skills/` (official discovery path) |
| **OpenCode** | `--agent opencode` | Skill bundle at `.opencode/skills/` |
| **Cursor** | `--agent cursor` | First-class rules channel — `.cursor/rules/omd-design.mdc` shim + the shared `.claude/data` catalog (no skills/hooks) |

The default install targets every detected agent; pass `--agent <name>` to install a single channel.

## What's inside

**17 skills · 16 sub-agents · 246 verified references · activation hooks** — installed by the one command above.

- **Skills** — core flow (`omd:init` / `omd:apply` / `omd:harness` / `omd:sync` / `omd:remember` / `omd:learn` / `omd:taste` — say "what are my preferences" to see everything the loop has learned, pending, or snoozed), live capture + assets (`omd:reference-capture` / `omd:asset-fetch` / `omd:experiment-gallery`), the v0.2 agent layer (`omd:orchestrator` / `omd:kr-writer` / `omd:locale-adapter` / `omd:designer-review` / `omd:final-qa` / `omd:codex-image`), plus the standalone `claude-design` skill that drives claude.ai/design from your terminal.
- **Sub-agents** — `omd-master` + 15 specialists (UX research, UI generation, asset curation, microcopy, a11y audit, persona testing, critique, …).
- **References** — 246 real-company `DESIGN.md` files, each verified against live sources. Every reference is also served as raw markdown at `oh-my-design.kr/design-systems/<id>.md`, so agents can fetch it directly.
- **Hooks** — UserPromptSubmit / SessionStart / PostToolUse activation so the skills trigger on natural language, not just slash commands.

Full skill-by-skill and agent-by-agent reference: **[oh-my-design.kr/docs](https://oh-my-design.kr/docs)**.

Prefer MCP? **[oh-my-design-mcp](./packages/mcp/)** exposes the same catalog as MCP resources/tools for Claude Desktop, Cursor, Cline, Continue, and Codex — see [`packages/mcp/README.md`](./packages/mcp/README.md).

## Upgrading

```bash
npx oh-my-design-cli@latest install-skills
```

Idempotent. Managed files (those carrying the `<!-- omd:installed-skill -->` marker) are refreshed in place; files you edited are left untouched (`skipped-drift`) unless you pass `--force`. Restart your agent after re-running.

```bash
npx oh-my-design-cli --version       # what your project currently uses
npm view oh-my-design-cli version    # latest on the registry
```

What changed each release — including anything that needs more than a re-install — is in [CHANGELOG.md](./CHANGELOG.md).

## Links

- **Catalog** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems) (every reference, with raw `.md` twins for agents)
- **Collections** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections) (curated sets by use case)
- **Docs** — [oh-my-design.kr/docs](https://oh-my-design.kr/docs) (install options, skills, agents, FAQ)
- **Changelog** — [CHANGELOG.md](CHANGELOG.md) · migrating from 0.1.x: [MIGRATION.md](MIGRATION.md)

## License

MIT — see [LICENSE](LICENSE). References belong to their respective companies; reproduced for educational reference.
