# Claude Code print-mode runner

Initial model/auth smoke verified locally on 2026-07-22 with Claude Code
`2.1.212`. Scored sandbox runs require `2.1.217` or newer.

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

Switching from the npm-distributed `2.1.212` binary to the native `2.1.217`
binary cleared the local login session. A fresh `claude auth login` is required
before the post-update sandbox probe; the preflight reports this as not ready.

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
- https://code.claude.com/docs/en/sandboxing
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

## Implemented local path

### Runtime floor

Claude Code `2.1.212` has a macOS sandbox defect that made absolute
`sandbox.filesystem.allowWrite` entries ineffective. Anthropic's later
changelog records fixes for absolute allow-write paths and redirection into
allowlisted temp directories. The preflight therefore refuses versions older
than `2.1.217`.

The first frozen Opus cell exposed this defect: both raw and OmD artifacts were
generated, but both contained tool-level sandbox failures and OmD timed out.
The corrected disposition is `invalid-infrastructure`, not a raw/OmD
comparison. See `reports/opus-transfer-1.9.2/FINDINGS.md`.

The preparation adapter installs the same frozen OmD source into
`.claude/skills/` and writes a `CLAUDE.md` sandbox contract:

```text
node benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs \
  --task incident-operations-v0.1 \
  --variant omd-portable \
  --runtime claude-code \
  --out /tmp/ub/incident-o1
```

Preflight refuses unauthenticated, API-key-shadowed, provider-routed, or moving
model-alias runs:

```text
npm run bench:ui:claude:check -- --model claude-opus-4-8
```

After login, run the prepared workspace:

```text
npm run bench:ui:claude:run -- \
  --workspace /tmp/ub/incident-o1 \
  --model claude-opus-4-8 \
  --effort xhigh
```

The runner loads only project setting sources, disables Chrome and MCP, pins
the exact model, requires Claude's native OS sandbox, blocks its unsandboxed
escape hatch, denies web tools, strips provider credentials from Bash children,
and disables session persistence. Raw events, normalized token usage, reported
model, wall time, product-only diff, tool-level sandbox diagnostics, and
provider price-equivalent telemetry when supplied are written to the existing
run-result schema. A sandbox error invalidates the run even when Claude's
top-level child process exits zero. The price-equivalent value is not a claim
that the subscription account was billed that amount.

`CLAUDE_CODE_TMPDIR` points to a short `.t` directory inside the prepared
workspace. This keeps cwd tracking inside the same write boundary and avoids
Unix socket path-length fallback. Use short `/tmp/ub/<run>` output paths for
scored cells.

Do not pair that boundary with `Read(../**)` or `Edit(../**)` deny rules. Claude
merges those permission rules into the native filesystem sandbox, and a parent
glob also contains the current workspace. The 2026-07-22 post-login probe
identified this runner-policy collision when cwd bookkeeping under `.t` was
denied despite an explicit allow-write. `dontAsk` plus workspace-scoped allow
rules already fails closed for built-in file tools outside the workspace.

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
context fields. The model path is proven, but scored Transfer Matrix work
resumes only after a post-update read-only sandbox probe reports zero tool and
sandbox errors.

## Benchmark classification

Do not merge Opus results into the Terra Skill Lift estimate. Record Claude Code
as a separate **Transfer Matrix** cell with raw DESIGN.md and OmD conditions.
Until the same model is available through a runtime-neutral runner, it is a
model×agent-runtime observation, not a pure model effect.
