# Claude Code print-mode runner

Verified locally on 2026-07-22 with Claude Code `2.1.212`.

## Decision

Claude Code can run a subscription-backed UI-Resolve cell non-interactively.
The exact model id is **`claude-opus-4-8`**; `opus` is a moving alias and is not
accepted by the benchmark preflight. Local usage history contains real
`claude-opus-4-8` and `claude-fable-5` entries, and Anthropic's current model
configuration documents the same Opus id.

The machine was authenticated with the Claude subscription on 2026-07-22, and
the no-repository probe returned exactly `OMD_OPUS_48_PROBE` from
`claude-opus-4-8`. `ANTHROPIC_API_KEY`,
`ANTHROPIC_AUTH_TOKEN`, provider flags, or a separate OAuth-token environment
must not shadow the intended interactive subscription login.

## Quota finding

`claude -p` shifts these runs away from Codex/OpenAI quota, but it does not make
the work token-free. Anthropic announced a separate monthly Agent SDK credit,
then paused that change on June 15, 2026. **For now `claude -p` still draws from
the subscription's usage limits.** Claude can expose session, weekly, and Opus
limits separately; use `/usage` after login as the account-specific source of
truth. Higher effort consumes limits faster.

This still makes Opus useful for the project when its available allowance is
underused, but the scheduler must record quota state rather than assume that
Fable and Opus are independent pools.

Sources:

- https://www.anthropic.com/news/claude-opus-4-8
- https://support.claude.com/en/articles/11940350-claude-code-model-configuration
- https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan
- https://code.claude.com/docs/en/authentication
- https://code.claude.com/docs/en/errors

## Implemented local path

The preparation adapter installs the same frozen OmD source into
`.claude/skills/` and writes a `CLAUDE.md` sandbox contract:

```text
node benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs \
  --task incident-operations-v0.1 \
  --variant omd-portable \
  --runtime claude-code \
  --out /tmp/ui-resolve-claude/incident-omd-1
```

Preflight refuses unauthenticated, API-key-shadowed, provider-routed, or moving
model-alias runs:

```text
npm run bench:ui:claude:check -- --model claude-opus-4-8
```

After login, run the prepared workspace:

```text
npm run bench:ui:claude:run -- \
  --workspace /tmp/ui-resolve-claude/incident-omd-1 \
  --model claude-opus-4-8 \
  --effort xhigh
```

The runner loads only project setting sources, disables Chrome and MCP, pins
the exact model, requires Claude's native OS sandbox, blocks its unsandboxed
escape hatch, denies web tools, strips provider credentials from Bash children,
and disables session persistence. Raw events, normalized token usage, reported
model, wall time, product-only diff, and provider cost when supplied are written
to the existing run-result schema.

`--safe-mode` is intentionally absent from scored skill runs because it disables
project Skills. The same `--setting-sources project` isolation is used for both
raw and OmD conditions, so user-global Skills are not loaded.

## Login smoke before repository work

The first no-tools call was made from an empty temporary directory with:

```text
claude -p "Return exactly OMD_OPUS_48_PROBE" \
  --model claude-opus-4-8 \
  --effort xhigh \
  --output-format json \
  --no-session-persistence \
  --safe-mode \
  --tools ""
```

This confirmed authentication, exact model access, print-mode JSON, and quota
behavior without exposing repository content. The JSON also reported a small
Claude Code helper-model allocation in addition to Opus. The runner therefore
records and sums every `modelUsage` entry, while preserving per-model cost and
context fields. The Claude Transfer Matrix may now begin.

## Benchmark classification

Do not merge Opus results into the Terra Skill Lift estimate. Record Claude Code
as a separate **Transfer Matrix** cell with raw DESIGN.md and OmD conditions.
Until the same model is available through a runtime-neutral runner, it is a
model×agent-runtime observation, not a pure model effect.
