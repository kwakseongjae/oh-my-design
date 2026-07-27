# Cursor runtime and model evaluation plan

Status: account gateway connected; runner work remains gated behind the
provider-neutral `1.9.39` contract.

## 0. Primary intent

The primary use of Cursor in this benchmark is as one authenticated account
gateway to several frontier models. Keeping those models inside the same Cursor
Agent runtime makes an initial Model Track comparison cleaner than comparing a
Codex-hosted model with a Claude-Code-hosted model.

Cursor product integration remains a second, separately measured outcome:
install OmD's actual Agent Skills into Cursor rather than only a legacy rule
shim. The gateway experiment and the product capability must never share one
score or release hypothesis.

## 1. What is being integrated

Cursor must not be represented as a model. The benchmark records four separate
factors:

| Factor | Examples | Comparison rule |
|---|---|---|
| Agent runtime | Codex CLI, Claude Code, Cursor Agent CLI | Keep the model fixed when the exact same snapshot is available |
| Model snapshot | Exact IDs returned by each runtime | Keep runtime, tools, prompt, budget, and environment fixed |
| Routing policy | Cursor Auto / Router mode | Report as a routing-policy condition, never as a named model |
| Capability package | no skill, raw DESIGN.md, OmD skill, full harness | Keep model and runtime fixed |

This separation prevents a Cursor result from being described as a pure model
effect when Cursor's own harness, tools, routing, or context behavior changed.

## 2. Local discovery and account connection on 2026-07-27

- Cursor desktop is installed and its editor launcher reports `3.12.17`.
- Cursor Agent CLI `2026.07.23-e383d2b` is installed collision-safely as
  `~/.local/bin/cursor-agent`.
- `~/.local/bin/agent` already points to Grok CLI `0.2.33`.
- Cursor's official installer removes both `~/.local/bin/agent` and
  `~/.local/bin/cursor-agent` before recreating them. It was not run; the Grok
  command remains intact.
- Browser authentication with the user's Cursor account is complete. No account
  identifier or credential is stored in the repository.
- The binary SHA-256 is
  `eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831`.
- The exact account-visible catalog is recorded in
  [`runtime-inventory/cursor-2026-07-27.json`](./runtime-inventory/cursor-2026-07-27.json).

The integration uses `cursor-agent`, never the ambiguous `agent` command. The
runner accepts an explicit `OMD_CURSOR_AGENT_BIN` path and records the binary
hash and version before every run.

## 3. Cursor runner contract

The future `run-cursor.mjs` adapter must:

1. require a workspace prepared with `runtime_target: cursor`;
2. execute the explicit Cursor binary in non-interactive print mode;
3. request `stream-json` and one exact `--model` ID;
4. use an OS-level submission sandbox and a fresh workspace;
5. capture the initialization event's runtime-reported model;
6. fail when requested and reported models differ;
7. retain non-zero exits, stderr, incomplete streams, timeouts, and missing
   terminal result events without retry or fallback;
8. normalize file writes, terminal calls, elapsed time, session ID, available
   usage telemetry, and product-only diffs into the common run record;
9. disable MCP and network for scored runs after reviewed dependencies exist;
10. keep Cursor-specific hidden prompts, hooks, browser tools, and subagents out
    of the portable Skill Lift track.

If Cursor reports only a display name rather than an immutable provider
snapshot, the result stays `Internal` and records
`model_attribution: runtime-reported-display-name`. It cannot become a Verified
Model Track row.

## 4. Cursor skill-channel modernization

The current OmD Cursor channel installs a `.cursor/rules` shim and catalog only.
That reflects an older Cursor capability boundary. Cursor now supports Agent
Skills in its editor and CLI, so a separate product patch should:

1. install reviewed OmD skills into Cursor's supported project skill path;
2. preserve the existing always-on DESIGN.md rule as a small bootstrap;
3. keep Claude-only hooks out unless Cursor parity is explicitly implemented;
4. add Cursor-aware `doctor` checks for skill discovery and version drift;
5. verify manual slash invocation and automatic discovery in Cursor CLI;
6. retain the rule-only channel behind a compatibility flag for older clients.

This product capability must be tested independently from benchmark quality.
Installing more OmD capability is not evidence that Cursor or a model scored
better.

## 5. Model test ladder

### A. Inventory and attribution

The version and account model inventory are now snapshotted. After the fake
adapter passes, run one no-write probe per selected model and require the
initialization event to match the requested ID. No quality score is produced.

### B. Cursor Model Track pilot

Use one Cursor runtime version and these three exact, manually selected
non-Fast model IDs:

- `cursor-grok-4.5-high`;
- `composer-2.5`;
- `gpt-5.3-codex-xhigh`.

Run model-only and model-plus-raw-DESIGN.md as separate conditions. Start with
one calibrated task and three trials per model; expand to the standard task set
only after attribution and failure retention are stable.

This first trio samples xAI/Cursor Grok, Cursor Composer, and OpenAI Codex while
holding the Cursor runtime constant. It does not include Opus under the current
user policy. The account catalog emitted a bare, apparently incomplete
`claude-opus-5-thinki` entry without a label; it remains excluded until Cursor
reports an attributable immutable ID in an initialization event.

### C. Runtime crossover

Only when an identical immutable model snapshot is available in two runtimes,
compare Cursor against the other runtime with prompt bytes, permissions, tools,
reasoning budget, and environment fixed. Otherwise label the observation
`model × runtime` and do not infer a runtime effect.

### D. Skill transfer

After the Model Track pilot, run the preregistered transfer subset:

```text
3 model families × no skill / OmD / strongest eligible external skill
× 6 representative tasks × 3 trials
```

This tests whether OmD lift transfers across models. It does not merge model,
skill, and harness scores into one leaderboard.

### E. Cursor Auto / Router

Auto is evaluated only as a routing policy. Record the optimization mode,
runtime-reported routed model for every run, distribution of routed models,
quality, wall time, and cost telemetry. Auto results never occupy a named-model
leaderboard row and are not mixed with fixed-model trials.

## 6. Patch queue

| Patch | Bounded outcome |
|---|---|
| `1.9.39` | Fake Claude/Codex no-fallback dispatch and common provenance |
| `1.9.40` | Fresh live Claude/Codex attribution smoke; no quality comparison |
| `1.9.41` | Fake Cursor stream contract, runtime dispatch, and failure retention |
| `1.9.42` | Live no-write attribution for Grok 4.5, Composer 2.5, and Codex 5.3 xhigh |
| `1.9.43` | Internal Cursor fixed-runtime three-model Model Track pilot |
| `1.9.44` | Cursor OmD skill-channel modernization and deterministic doctor tests |
| `1.9.45` | Fixed-model no-skill/raw DESIGN.md/OmD Skill Lift pilot |
| later | Runtime crossover when snapshots match, then the repeated transfer matrix |

Every patch is preregistered separately. Authentication, quota, missing model,
model fallback, or attribution ambiguity stops the patch and remains visible.
