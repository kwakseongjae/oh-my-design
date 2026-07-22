# Claude Code print-mode runner feasibility

Verified locally on 2026-07-22 with Claude Code `2.1.212`.

## Short answer

Yes. Claude Code supports non-interactive `-p/--print` execution, a pinned
`--model`, `--effort`, JSON or streaming JSON output, `--max-budget-usd`,
`--no-session-persistence`, tool allowlists, and non-interactive permission
modes. It can therefore become a UI-Resolve runner after authentication and a
separate runtime calibration.

The current machine is not authenticated (`claude auth status` reports
`loggedIn: false`). The currently documented first-party Opus model is **Opus
4.7**, not 4.8. A future 4.8 run must use its exact released model id rather
than the moving `opus` alias.

## Subscription-safe shape

For subscription usage, sign in through Claude Code and keep
`ANTHROPIC_API_KEY` unset. An environment API key takes precedence and creates
pay-as-you-go API charges. Do not use `--bare` for this path: bare mode does not
read OAuth or keychain credentials. Use an isolated prepared workspace,
`--safe-mode`, a tool allowlist without web tools, and no session persistence.

Illustrative invocation after login and model pinning:

```text
claude -p \
  --model claude-opus-4-7 \
  --effort xhigh \
  --output-format json \
  --no-session-persistence \
  --safe-mode \
  --permission-mode acceptEdits \
  --tools Read Edit Write Glob Grep
```

The benchmark runner should pass `PROMPT.md` through stdin, execute inside an
ephemeral prepared workspace, hash product-only diffs, and normalize Claude's
JSON usage/cost fields into the existing run-record schema. Exact tool names
and candidate-skill activation must be calibration-tested before a scored run.

## What it saves — and what it does not

- It can reduce **Codex/OpenAI quota consumption** by moving runs to the Claude
  subscription's rolling allowance.
- It does not reduce the model's actual token work merely because `-p` is used.
- Opus may consume subscription allowance faster than a smaller model. The
  cheapest reliable pipeline is deterministic local collection/evaluation,
  lower-cost model passes for routine work, and Opus only for ambiguous design
  judgment or a deliberately measured Opus benchmark cell.
- Prompt caching can reduce provider cost or quota pressure, but benchmark
  records must still preserve cached and uncached token fields separately.

## Benchmark classification

Do not merge Claude Opus results into the current Terra Skill Lift estimate.
First add it as a **Transfer Matrix** cell with the same raw DESIGN.md and OmD
conditions. Claude Code and Codex differ in both model and agent runtime, so a
cross-provider result is a model×runtime observation unless a runtime-neutral
runner is later established.
