# MIGRATION — 0.1.x → 1.0.0

1.0.0 is a deliberate breaking release. The CLI surface collapsed from 9 commands down to 1 (`install-skills`). Everything else is now skill + agent prose, executed inside Claude Code / Codex / OpenCode.

If you were on 0.1.x, the workflow inside your agent is unchanged or simpler. Only the CLI shape changed.

## At a glance

| 0.x command | 1.0 equivalent |
|---|---|
| `omd init recommend "..."` | Talk to your agent: "I want to design a B2C marketplace" — the omd-init skill + omd-harness skill match references natively. |
| `omd init prepare --ref vercel ...` | Talk to your agent: "Use vercel as the base". The master agent does the hybrid emit inline. |
| `omd remember "..."` | Just speak naturally: "we never use uppercase CTAs". The omd-remember skill captures it. |
| `omd learn` | "preference 정리해줘" or "fold preferences into DESIGN.md". |
| `omd sync` | "shim 동기화" or "CLAUDE.md 갱신해줘". |
| `omd harness "..."` | `/omd-harness <task>` inside Claude Code (or "디자인 하네스 돌려줘"). |
| `omd setup-blender` | The 3d-blender agent walks you through it when 3D is needed — install is on demand. |
| `omd reference list` | `ls node_modules/oh-my-design-cli/references/` |
| `omd reference show vercel` | `cat node_modules/oh-my-design-cli/references/vercel/DESIGN.md` |
| `omd generate` | Removed. Use `install-skills` + agent flow. The web wizard at the project site still works. |
| `omd preview` | Removed. Use the agent to open whatever HTML it built. |
| `omd context --internal` | Master Phase A does this inline. Optional `node scripts/context.cjs` is preserved as a deterministic backup. |

## What changed structurally

- **`src/index.ts` programmatic API removed**. Anyone importing `oh-my-design-cli` programmatically will break. There were no known external consumers; if you were one, please open an issue with your use case.
- **`postinstall` no longer pulls templates**. Templates were used by the old interactive wizard. Skill packages still ship under `skills/` and `agents/`.
- **`runs/` directory schema unchanged**. Your existing `.omd/runs/<id>/` from 0.x harness invocations are still readable by the new harness skill.
- **`.omd/preferences.md` schema unchanged**. The omd-remember skill writes the same `omd-meta` block format as the old `omd remember` CLI.
- **Sub-agents are now installed**. `install-skills` writes 11 canonical agents (master + 10 specialists) into `.claude/agents/`. If you previously ran 0.1.x, rerun `npx oh-my-design-cli@latest install-skills` to pick them up.

## How to upgrade

```bash
# In each project that had oh-my-design-cli@0.1.x:
cd my-project
npx oh-my-design-cli@latest install-skills
```

Then quit and relaunch your agent (Cmd+Q on macOS for Claude Code, restart Codex CLI, etc.) so the new agents and skills are loaded.

## Why this collapse

Over 0.1.x we noticed every CLI command was effectively a thin file-system wrapper that an LLM agent could perform itself with Read / Edit / Write / Bash. Keeping a parallel CLI surface meant maintaining two implementations of the same logic, doubling the test burden, and creating a confusing entry point for users ("do I run the CLI or just talk to my agent?").

1.0.0 picks one path: skill prose is the spec. The CLI exists only to install the skills.

## Reporting issues

If a flow that worked on 0.1.x feels worse on 1.0.0 — the skill prose is the source of truth and is fixable in markdown. Please open an issue with the prompt you used and the actual vs expected behavior.
