<p align="center">
  <img src="https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/.github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>Give your coding agent a project-owned DESIGN.md workflow.</strong> Guided installer + doctor, 20 reusable skills, 18 specialist roles, and 440+ quality-graded company references. Local workflows need no separate API key or MCP server.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-440%2B-7c5cfc?style=flat-square" alt="440+ References" />
  <img src="https://img.shields.io/badge/CLI-install%20%2B%20doctor-blue?style=flat-square" alt="Install and doctor CLI" />
</p>

<p align="center">
  English | <a href="README.ko.md">한국어</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## What is oh-my-design?

**oh-my-design (OmD)** installs local design workflows into the coding tool you already use. Claude Code, Codex, and OpenCode receive reusable skills and specialist roles; Cursor receives a focused project rule that applies the same `DESIGN.md`. The file is a portable brand specification built from [Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) tokens plus Voice, Narrative, Principles, Personas, States, and Motion. The package also includes 440+ quality-graded company references. **Core install and local workflows need no separate API key, daemon, or MCP server; inference stays inside your existing coding-agent session. The optional `claude-design` skill opens your logged-in claude.ai/design session in Chrome.**

## Install

```bash
npx oh-my-design-cli@latest
```

Then restart your agent so it discovers the newly installed channel files, and verify those files once. Codex users must also trust the project before project-local roles are loaded:

```bash
npx oh-my-design-cli@latest doctor
```

The CLI only bootstraps and diagnoses the bundle. Every design task after that is natural language to your agent.

The installer asks **where** to install: **Project** (channel-local files in this repository, the default) or **Global** (user-level files available across projects). OpenCode uses `.opencode/` for project installs and `~/.config/opencode/` for global installs. Global installation leaves hooks/settings untouched. Use `npx oh-my-design-cli@latest install-skills --global` to select that scope non-interactively, then verify it with `npx oh-my-design-cli@latest doctor --global`.

## Your first 60 seconds — Claude Code, Codex, or OpenCode

This is the shortest path from install to a visible result.

1. Install (above), then **restart your agent** (Cmd+Q, relaunch) so it loads the new skills.

2. In your project, type your first prompt — copy this exactly:

   > Create a project-owned DESIGN.md for a family meal-tracking app. Use Toss as a reference, keep only verified reference facts, and ask before deciding product-specific facts.

   Your skill-enabled agent runs **`omd:init`**: it recommends a reference from the 440+ quality-graded company catalog, asks you to confirm, and writes **`DESIGN.md`** to your project root. (`omd:sync` can then update the managed agent-instruction shims.)

   **That file is the handoff.** It stays in your repository, so later sessions can read the same decisions again.

3. Now build against it:

   > Read DESIGN.md and design the home screen. Preserve the current behavior and logo.

   The agent reads `DESIGN.md`, works against the recorded decisions, and leaves a result you can inspect in the project.

Don't want Toss? Any brand works — `Stripe-style`, `Linear-clone B2B SaaS`, `Karrot-style marketplace`. Browse the full catalog at [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems).

## Supported agents

| Agent | Channel | What gets installed |
|---|---|---|
| **Claude Code** | `--agent claude-code` (default) | Full bundle — skills, 18 sub-agents, hooks, data under `.claude/` |
| **Codex** | `--agent codex` | Skills at `.agents/skills/`, embedded sub-agent roles under `.codex/agents/`, and the local catalog under `.codex/data/` |
| **OpenCode** | `--agent opencode` | Project: skills, native sub-agents, and catalog under `.opencode/{skills,agents,data}/`; global: the same bundle under `~/.config/opencode/{skills,agents,data}/` |
| **Cursor** | `--agent cursor` | Project rule `.cursor/rules/omd-design.mdc` + shared `.claude/data` catalog; no OmD skills, sub-agents, or hooks |

The default install targets every detected agent. For one non-interactive channel, run `npx oh-my-design-cli@latest install-skills --agent <name> --all`.

### Cursor's supported path

Cursor is a rules-only channel, not a host for `omd:init`, `omd:feel`, or the OmD sub-agents. Create the project spec in one of two ways:

1. Choose/customize a reference in the [Builder](https://oh-my-design.kr/builder), download `DESIGN.md`, and save it at the project root; or
2. ask Cursor: `Read .claude/data/references/toss/DESIGN.md and create a root DESIGN.md for this product using confirmed values only. Keep unknown facts absent.`

Then prompt Cursor: `Read @DESIGN.md and redesign the home screen without changing behavior.` The installed rule enforces the minimal contract: `DESIGN.md` first, pending `.omd/preferences.md` corrections second, framework defaults last.

## What's inside

**20 skills · 18 sub-agents · 440+ quality-graded references · activation hooks** make up the full skill-enabled bundle. Cursor intentionally receives only its rule and catalog.

- **Skills** — core flow (`omd:init` / `omd:apply` / `omd:harness` / `omd:sync` / `omd:remember` / `omd:learn` / `omd:taste` — say "what are my preferences" to see everything the loop has learned, pending, or snoozed), live capture + assets (`omd:reference-capture` / `omd:asset-fetch` / `omd:experiment-gallery`), the writing and review layer (`omd:orchestrator` / `omd:kr-writer` / `omd:locale-adapter` / `omd:humanize` / `omd:designer-review` / `omd:final-qa` / `omd:codex-image`), interface quality (`omd:feel` / `omd:slop-audit`), plus the standalone `claude-design` skill that drives claude.ai/design from your terminal.
- **Sub-agents** — `omd-master` + 17 specialists (UX research, UI generation, asset curation, copy humanization, slop auditing, a11y audit, persona testing, critique, …).
- **References** — 440+ company `DESIGN.md` files with explicit evidence and quality status. Every reference is also served as raw markdown at `oh-my-design.kr/<id>/design.md`, so agents can fetch it directly.
- **Hooks** — UserPromptSubmit / SessionStart / PostToolUse activation so the skills trigger on natural language, not just slash commands.

Outcome-first workflows, reproducible examples, and all five locales: **[oh-my-design.kr/docs/en](https://oh-my-design.kr/docs/en)** · [한국어](https://oh-my-design.kr/docs/ko) · [日本語](https://oh-my-design.kr/docs/ja) · [简体中文](https://oh-my-design.kr/docs/zh-cn) · [繁體中文](https://oh-my-design.kr/docs/zh-tw).

The old catalog MCP transport is retired. Skills and agents consume the local catalog or the raw `/<id>/design.md` route directly; the historical implementation remains under `packages/mcp/` as an archive.

## Upgrading

```bash
npx oh-my-design-cli@latest
```

Idempotent. Managed files (those carrying OmD markers/hashes) are refreshed in place; files you edited are left untouched (`skipped-drift`). Run `doctor` and prefer the exact scoped repair command it prints. For stale managed Claude hooks that command includes `--repair-hooks`, which does not overwrite other unmarked files. Use `--force` only after reviewing intentional local drift. Restart your agent after re-running, then verify the refreshed bundle:

```bash
npx oh-my-design-cli@latest doctor
```

```bash
npx oh-my-design-cli --version       # what your project currently uses
npm view oh-my-design-cli version    # latest on the registry
```

What changed each release — including anything that needs more than a re-install — is in [CHANGELOG.md](./CHANGELOG.md).

## Links

- **Catalog** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems) (every reference, with raw `.md` twins for agents)
- **Collections** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections) (curated sets by use case)
- **Docs** — [oh-my-design.kr/docs/en](https://oh-my-design.kr/docs/en) (install options, skills, agents, FAQ)
- **Live demo playbook** — [oh-my-design.kr/docs/en/demo](https://oh-my-design.kr/docs/en/demo) (5-, 15-, and 30-minute formats with an evidence checklist)
- **Changelog** — [CHANGELOG.md](CHANGELOG.md) · migrating from 0.1.x: [MIGRATION.md](MIGRATION.md)

## License

MIT — see [LICENSE](LICENSE). References belong to their respective companies; reproduced for educational reference.
