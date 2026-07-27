# oh-my-design CLI quickstart

oh-my-design gives your existing AI coding environment two things it can reuse across sessions:

- a local catalog of 440+ real-company `DESIGN.md` references; and
- skills and specialist roles for creating, applying, reviewing, and maintaining your own `DESIGN.md`.

The CLI is the installer and health check. It does not generate a UI by itself and it does not call a separate AI service. Claude Code, Codex, and OpenCode receive OmD skills and specialist roles. Cursor 2.4+ receives 19 compatible Agent Skills, a small project bootstrap rule, and the catalog; it does not receive OmD's separately generated sub-agent definitions.

When you do not know what to ask next, route one sentence locally:

```bash
npx oh-my-design-cli@latest workflows "이 가격 페이지를 검수하고 고쳐줘" --lang ko
```

The output tells you exactly what to paste into the coding-agent chat. Only installer, doctor, and workflows belong in the terminal; product prompts belong in Claude Code, Codex, OpenCode, or Cursor.

## Your first 60 seconds — Claude Code, Codex, or OpenCode

Run this from the root of the project you want to design:

```bash
npx oh-my-design-cli@latest
```

Choose the detected coding-agent channels and keep the default bundle selection. The installer writes only the capabilities each selected channel supports. When installation finishes:

1. Restart your coding agent so it discovers the new skills and roles. In Codex, trust the project when prompted; untrusted projects intentionally ignore project-local `.codex/agents` roles.
2. Confirm that the channel files and local reference catalog are complete:

   ```bash
   npx oh-my-design-cli@latest doctor
   ```

3. Give the skill-enabled agent this prompt:

   ```text
   Set up our design system — Toss-style, for a family meal-tracking app.
   ```

   The agent uses `omd:init` to recommend a reference, asks for confirmation, and writes `DESIGN.md` at the project root.

4. Build with the system:

   ```text
   Design the home screen using our DESIGN.md, then audit it with omd:feel.
   ```

Activation is complete when `DESIGN.md` exists and `doctor` reports the installed channel as ready.

## Your first 60 seconds — Cursor

Install the Cursor project channel explicitly:

```bash
npx oh-my-design-cli@latest install-skills --agent cursor --all
```

Restart Cursor, then verify the native skills, project rule, and 440-reference catalog:

```bash
npx oh-my-design-cli@latest doctor
```

Before a root `DESIGN.md` exists, `doctor` correctly reports that the bundle is installed but the project still needs activation.

Cursor receives `omd-init`, `omd-feel`, `omd-harness`, and the other portable skills under `.cursor/skills/`. Start naturally or invoke a skill explicitly:

```text
Set up our design system — Toss-style, for a family meal-tracking app.
```

The rule's minimal contract is deliberate: `DESIGN.md` has first priority, pending `.omd/preferences.md` corrections come next, and framework defaults come last. Do not substitute a plausible brand fact for an unresolved one. Older Cursor clients can opt into the former rule-only behavior with `--cursor-rule-only`.

## What is installed

| Coding agent | Project-local files | Runtime behavior |
|---|---|---|
| Claude Code | `.claude/skills/`, `.claude/agents/`, `.claude/data/`, and managed hooks | Skills, specialist roles, local references, and natural-language activation |
| Codex | `.agents/skills/`, `.codex/agents/`, and `.codex/data/` | Skills, embedded specialist-role definitions, and local references |
| OpenCode | `.opencode/skills/`, `.opencode/agents/`, and `.opencode/data/` | Skills, native sub-agents, and an offline-capable local reference catalog |
| Cursor | `.cursor/skills/`, `.cursor/rules/omd-design.mdc`, and shared references in `.claude/data/` | 19 native Agent Skills plus a small DESIGN.md bootstrap; no OmD sub-agent definitions or hooks |

The interactive installer detects available channels. To select one explicitly:

```bash
npx oh-my-design-cli@latest install-skills --agent codex
```

For a user-level installation available across projects:

```bash
npx oh-my-design-cli@latest install-skills --global
```

Global paths stay native to each channel: Claude Code uses `~/.claude/`; Codex uses `~/.agents/skills/` with roles and data under `~/.codex/`; OpenCode uses `~/.config/opencode/{skills,agents,data}/`. Cursor rules are project-scoped and deliberately reject `--global`. Verify a global installation separately:

```bash
npx oh-my-design-cli@latest doctor --global
```

Global installation does not modify global hooks or settings. Each project still needs its own `DESIGN.md`.

## Work inside your agent

Once installed, prompts—not repeated CLI commands—are the main interface.

| Goal | Available in | Example prompt |
|---|---|---|
| Create the project system | All skill-enabled channels | `Set up our design system — Linear-style, for a B2B operations dashboard.` |
| Apply it to existing UI | All channels, once root `DESIGN.md` exists | `Redesign the billing page using our DESIGN.md. Preserve all behavior.` |
| Run the full design pipeline | All skill-enabled channels | `/omd-harness Checkout completion screen — success, failure, and partial-success states` |
| Review interface quality | All skill-enabled channels | `Audit this screen with omd:feel and fix the high-confidence issues.` |
| Keep a correction | All skill-enabled channels | `Remember this preference: cards should use borders, not decorative shadows.` |
| Capture a new reference | Claude Code / Codex / OpenCode | `Capture a design reference from this first-party product URL and keep unresolved facts absent.` |

The full harness includes explicit user checkpoints. It does not silently approve information architecture, design-system changes, or final validation.

Across these paths, specialist roles are advisory. A single main agent owns product edits, and implementation is complete only after the same consumer route, viewport, and state have been checked again. `omd workflows --json` exposes this capability graph for automation and benchmark attribution.

## Diagnose and recover

Run the doctor whenever a skill, role, or reference does not appear:

```bash
npx oh-my-design-cli@latest doctor
```

It checks the real files for each installed channel, the reference count and fingerprint, required activation files, and the project `DESIGN.md`. For automation, use:

```bash
npx oh-my-design-cli@latest doctor --json
```

Common recovery paths:

- **No installation found:** run `npx oh-my-design-cli@latest` from the intended project root.
- **Installation is incomplete:** run the scoped repair command printed by `doctor`, then run `doctor` again.
- **The files exist but the agent cannot see them:** fully restart the agent. Claude Code, Codex, and OpenCode discover skills/roles at session start; Cursor must reload the project rule. In Codex, also confirm that the project is trusted.
- **The bundle is healthy but no `DESIGN.md` exists:** in Claude Code, Codex, or OpenCode, ask the agent to set up the design system. In Cursor, use the Builder download or explicit local-catalog prompt above. This is an activation step, not an installation failure.
- **A managed upgrade skipped a file:** oh-my-design preserves files without its managed marker. Review the local edits before deciding whether to rerun with `--force`.
- **A managed Claude hook is stale:** use the `--repair-hooks` command printed by `doctor`; it refreshes the managed hook bundle without overwriting other unmarked files.
- **You checked the wrong folder:** pass `--dir <project-root>` to both `install-skills` and `doctor`.

## Next steps

- [English documentation](https://oh-my-design.kr/docs/en)
- [한국어 문서](https://oh-my-design.kr/docs/ko)
- [日本語ドキュメント](https://oh-my-design.kr/docs/ja)
- [简体中文文档](https://oh-my-design.kr/docs/zh-cn)
- [繁體中文（台灣）文件](https://oh-my-design.kr/docs/zh-tw)
- [Reference catalog](https://oh-my-design.kr/design-systems)
- [Migration guide for 0.1.x](../MIGRATION.md)
- [GitHub repository](https://github.com/kwakseongjae/oh-my-design)

For command flags, run `npx oh-my-design-cli@latest --help`, `npx oh-my-design-cli@latest doctor --help`, or `npx oh-my-design-cli@latest workflows --help`.
