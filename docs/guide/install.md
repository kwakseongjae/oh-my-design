# Install

```bash
npx oh-my-design-cli@latest
```

The installer finds the coding agents you use, asks where to install, and
writes the bundle. Restart your agent afterwards (Cmd+Q and relaunch): skills
and sub-agents only load when a session starts. Then check what actually landed:

```bash
npx oh-my-design-cli@latest doctor
```

`doctor` names anything missing and prints the exact command that fixes it.
Codex users also need to trust the project before its project-local roles load.

No API key, daemon or MCP server is involved. The CLI installs and checks; the
design work happens in your agent's own session.

## What each agent gets

| Agent | Flag | Installed |
|---|---|---|
| **Claude Code** | `--agent claude-code` (default) | Skills, sub-agents, activation hooks and the catalog under `.claude/` |
| **Codex** | `--agent codex` | Skills in `.agents/skills/`, sub-agent roles in `.codex/agents/`, the catalog in `.codex/data/` |
| **OpenCode** | `--agent opencode` | Skills, native sub-agents and the catalog in `.opencode/{skills,agents,data}/`; a global install uses `~/.config/opencode/` |
| **Cursor** | `--agent cursor` | Compatible Agent Skills in `.cursor/skills/`, a small `.cursor/rules/omd-design.mdc` rule and the shared `.claude/data` catalog. No sub-agents or hooks |

By default the installer targets every agent it detects. To install one agent
without questions:

```bash
npx oh-my-design-cli@latest install-skills --agent <name> --all
```

## Project or global

**Project** (the default) writes into this repository. **Global** writes
user-level files that every project can use, and leaves hooks and settings
alone.

```bash
npx oh-my-design-cli@latest install-skills --global
npx oh-my-design-cli@latest doctor --global
```

## Cursor

Cursor 2.4+ reads the skills from `.cursor/skills/`. Restart Cursor, then ask
in plain words, for example `Set up our design system — Toss-style, for a family
meal-tracking app.`, or call `/omd-init` yourself.

The always-on rule sets the order of authority: pending corrections in
`.omd/preferences.md`, then DESIGN.md, then framework defaults. Unknown facts
stay absent. For older Cursor clients, `--cursor-rule-only` installs the rule
and the catalog without Agent Skills.

## Not sure what to ask?

```bash
npx oh-my-design-cli@latest workflows "improve our existing pricing page"
```

It prints one prompt to paste into your agent and names the workflow that will
own the work. It doesn't call another AI service. Add `--lang ko` for Korean.

## Update

```bash
npx oh-my-design-cli@latest update
```

The updater finds the scope and the agents you installed and refreshes only
that bundle. It doesn't add agents, turn on optional hooks or force anything.
Files you edited stay as they are (`skipped-drift`), and `doctor` tells you
what to do about them. Restart your agent and run `doctor` again.

```bash
npx oh-my-design-cli --version      # the version this project uses
npm view oh-my-design-cli version   # the latest release
```

What changed in each release, including anything that needs more than a
reinstall, is in the [changelog](../../CHANGELOG.md). Coming from 0.1.x? See
[MIGRATION.md](../../MIGRATION.md).

## Without the CLI

Every archive file is plain Markdown at `https://oh-my-design.kr/<id>/design.md`
([Toss](https://oh-my-design.kr/toss/design.md), for example), so any agent
can fetch one directly. The old catalog MCP transport is retired; its code
stays in `packages/mcp/` as an archive.
