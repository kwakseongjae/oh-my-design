# MIGRATION — 0.1.x → 1.9.x

The current release is a skill-driven, bin-only package. The CLI installs and diagnoses the OmD bundle; design work happens through natural-language prompts inside your coding agent. It ships 20 skills, 18 specialist roles, and a local catalog of 440+ `DESIGN.md` references.

This guide is for projects that used `oh-my-design-cli` 0.1.x. Existing project `DESIGN.md`, `.omd/preferences.md`, and `.omd/runs/` files remain useful; do not delete them.

## Upgrade each project

From the project root:

```bash
npx oh-my-design-cli@latest
```

Choose the project-local channels you actually use, restart those coding agents, and verify the installed files:

```bash
npx oh-my-design-cli@latest doctor
```

`doctor` reports the real channel paths, catalog/fingerprint coverage, specialist roles, hooks, and whether the project has a root `DESIGN.md`. If it finds an incomplete managed install, run the exact repair command it prints and then run `doctor` again. A stale managed Claude hook is repaired with the targeted `--repair-hooks` flag; unrelated unmarked files remain untouched.

For a user-level Claude Code, Codex, or OpenCode installation, use `install-skills --global` and verify it with `doctor --global`. Cursor rules are intentionally project-scoped and reject `--global`.

## The important break

The 0.1.x operational CLI commands were removed in 1.0.0. The supported CLI surface is now:

- `npx oh-my-design-cli@latest` — guided installer;
- `npx oh-my-design-cli@latest install-skills ...` — explicit/non-interactive installation; and
- `npx oh-my-design-cli@latest doctor` — health check and scoped repair instruction.

The package no longer exposes a programmatic TypeScript API. Code that imported `oh-my-design-cli` must migrate to the installed markdown skills/data or invoke the bin as an installer/doctor.

## 0.1.x command map

The following prompt-based replacements apply to **Claude Code, Codex, and OpenCode**, where OmD skills are installed:

| Removed 0.1.x command | Current workflow |
|---|---|
| `omd init recommend "..."` | Ask: `Set up our design system — Linear-style, for a B2B operations dashboard.` The agent uses `omd:init`, recommends a reference, asks for confirmation, and writes root `DESIGN.md`. |
| `omd init prepare --ref vercel ...` | Ask: `Create our DESIGN.md using Vercel as the reference; keep unverified facts absent.` |
| `omd remember "..."` | Say the correction naturally, for example: `Remember this preference: cards use borders, not decorative shadows.` The `omd:remember` skill records it. |
| `omd learn` | Ask: `Fold confirmed preferences into DESIGN.md.` The `omd:learn` skill presents the proposal before changing the system. |
| `omd sync` | Ask: `Sync DESIGN.md into the agent instruction shims.` The `omd:sync` skill updates managed blocks. |
| `omd harness "..."` | Run `/omd-harness <task>` or ask for the full OmD design harness. Mandatory user checkpoints remain in place. |
| `omd generate` | Removed. Create/download `DESIGN.md` in the [Builder](https://oh-my-design.kr/builder), or ask a skill-enabled agent to set it up. |
| `omd preview` | Removed. Ask the coding agent to build and open the actual product route. |
| `omd reference list/show` | Browse the [reference catalog](https://oh-my-design.kr/design-systems), read an installed channel catalog, or fetch `https://oh-my-design.kr/<id>/design.md`. |
| `omd context --internal` | Context discovery is part of the installed skills/harness. The deterministic helper remains bundled for internal skill use. |
| `omd setup-blender` | Removed from the public CLI. Asset workflows guide optional tooling only when it is actually needed. |

## Channel capabilities and paths

| Channel | Project installation | What can run |
|---|---|---|
| Claude Code | `.claude/{skills,agents,data}/` plus managed project hooks/settings | 20 skills, 18 specialist roles, local catalog |
| Codex | `.agents/skills/`, `.codex/agents/`, `.codex/data/` | 20 skills, 18 embedded specialist-role definitions, local catalog; the project must be trusted |
| OpenCode | `.opencode/{skills,agents,data}/` | 20 skills, 18 native agents, local catalog |
| Cursor | `.cursor/rules/omd-design.mdc` plus `.claude/data/` | One project rule and the local catalog; **no OmD skills or sub-agents** |

Codex's old OmD-managed `.codex/skills/` entrypoints are retired. A current reinstall migrates installer-owned files to `.agents/skills/` while preserving private, unowned files. OpenCode now uses its native `skills`, `agents`, and `data` directories.

### Cursor migration is different

Do not ask Cursor to run `omd:init`, `omd:feel`, or `/omd-harness`: the Cursor channel does not install those skills or specialist roles.

Use one of these supported paths instead:

1. Select/customize a reference in the [Builder](https://oh-my-design.kr/builder), download `DESIGN.md`, and save it at the project root; or
2. ask Cursor explicitly:

   ```text
   Read .claude/data/references/toss/DESIGN.md and create a root DESIGN.md
   for this product using confirmed values only. Keep unknown facts absent.
   ```

Then ask Cursor to build against `@DESIGN.md`. The installed rule's contract is intentionally small: read root `DESIGN.md` before UI work, apply pending `.omd/preferences.md` corrections, and use framework defaults only after those two sources.

## Managed upgrades and local edits

Current installs are idempotent:

- installer-owned skills, roles, catalog entries, and hooks carry managed markers/hashes and refresh when unchanged;
- same-ID reference edits, private references, and unmarked user files are preserved;
- retired installer-owned files can be cleaned up without deleting user sidecars;
- `--repair-hooks` refreshes the managed Claude hook bundle only; and
- `--force` is an explicit last resort for overwriting drift. Review local edits before using it.

After every bundle upgrade, restart the coding agent and run:

```bash
npx oh-my-design-cli@latest doctor
```

## Data retained from 0.1.x

- Root `DESIGN.md` remains the authoritative project design specification.
- `.omd/preferences.md` remains the preference/correction store and should be retained.
- Existing `.omd/runs/<id>/` directories remain learning artifacts; do not delete them.
- The npm package is bin-only. The removed `src/index.ts` exports have no replacement public API.

For the current first-run flow, see [docs/CLI_QUICKSTART.md](docs/CLI_QUICKSTART.md). For release-by-release changes, see [CHANGELOG.md](CHANGELOG.md).
