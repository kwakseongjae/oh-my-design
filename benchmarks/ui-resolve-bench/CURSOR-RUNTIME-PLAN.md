# Cursor runtime and model evaluation plan

Status: fake runner calibrated; no-write attribution and six-cell fixed-runtime
Internal pilot completed; Cursor native Agent Skill channel deterministically
accepted; live discovery canary and 1.9.44 Skill Lift pending.

## 0. Primary intent

The primary use of Cursor in this benchmark is as one authenticated account
gateway to several frontier models. Keeping those models inside the same Cursor
Agent runtime makes an initial Model Track comparison cleaner than comparing a
Codex-hosted model with a Claude-Code-hosted model.

Cursor product integration remains a second, separately measured outcome.
Patch 1.9.43 installs actual Agent Skills rather than only a legacy rule shim.
The gateway experiment and the product capability never share one score or
release hypothesis.

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

Patch 1.9.43 modernizes the older rule-only Cursor capability boundary:

1. 19 compatible reviewed OmD skills install under `.cursor/skills`;
2. a small always-on DESIGN.md bootstrap rule remains;
3. Claude-only hooks and separately generated sub-agent definitions stay out;
4. Cursor-aware `doctor` checks native skill contracts and drift;
5. `--cursor-rule-only` retains explicit compatibility for older clients.

Manual slash invocation and automatic discovery in live Cursor remain a
separately approved external-transmission canary. Deterministic install success
does not imply provider discovery or quality lift.

This product capability must be tested independently from benchmark quality.
Installing more OmD capability is not evidence that Cursor or a model scored
better.

## 5. Model test ladder

### A. Inventory and attribution

The version and account model inventory are now snapshotted. After the fake
adapter passes, run one no-write probe per selected model and require the
initialization event to match the requested ID. No quality score is produced.

The 1.9.41 probes accepted both exact CLI selectors and returned
`OMD_ATTRIBUTION_OK`, but the stream reported only `Cursor Grok 4.5 High` and
`Composer 2.5`. These are stored as `runtime-reported-display-name`, not
provider-observed immutable IDs. Both cells may enter an Internal pilot, while
public Model Track eligibility remains `invalid-attribution`.

### B. Cursor Model Track pilot

Use one Cursor runtime version and these two exact, manually selected non-Fast
model IDs:

- `cursor-grok-4.5-high`;
- `composer-2.5`.

Run model-only and model-plus-raw-DESIGN.md as separate conditions. Start with
one calibrated task and three trials per model; expand to the standard task set
only after attribution and failure retention are stable.

This pair compares xAI/Cursor Grok and Cursor Composer while holding the Cursor
runtime constant. OpenAI models are intentionally excluded from this Cursor
pilot because Luna, Terra, and Sol will be evaluated through the Codex runtime
in the final system matrix. The account catalog emitted a bare, apparently
incomplete `claude-opus-5-thinki` entry without a label; it remains excluded
until Cursor reports an attributable immutable ID in an initialization event.

The 1.9.42 pilot completed 6/6 provider and evaluator runs. Grok returned
81/85 in all three cells; Composer returned 81/85, 81/85, and 79/85. Expansion
is blocked because all six failed the accessibility critical gate and model
evidence remains display-name-only. The common failure was declared
`signal-orange #E7683D` used as small status text on light surfaces. This is a
procedural Skill Lift target, not grounds to alter the frozen Raw DESIGN.md
control after observing results.

### Final eight-system matrix

The eventual public comparison targets these named model/runtime systems:

| Runtime family | Model labels to preflight |
|---|---|
| Codex | Luna, Terra, Sol |
| Claude Code | Opus 5, Fable 5, Sonnet 5 |
| Cursor Agent | Composer 2.5, Grok 4.5 |

Exact immutable IDs, runtime versions, reasoning settings, and availability are
frozen only after a no-write attribution preflight. Because the three runtime
families expose different harnesses and possibly different provider snapshots,
the public cross-family view is labelled **model × runtime system**, not a pure
model leaderboard.

The benchmark publishes two complementary cuts:

1. within-runtime model comparisons where the shell and tools are fixed;
2. end-to-end system comparisons where each named model uses its documented
   runtime, with runtime provenance shown beside every result.

No blended global score may hide the runtime distinction.

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
| `1.9.40` | Fake Cursor stream contract, runtime dispatch, and failure retention |
| `1.9.41` | Live no-write attribution for Grok 4.5 and Composer 2.5 |
| `1.9.42` | Internal Cursor fixed-runtime two-model Model Track pilot |
| `1.9.43` | Cursor OmD skill-channel modernization and deterministic doctor tests |
| `1.9.44` | Fixed-model no-skill/raw DESIGN.md/OmD Skill Lift pilot |
| later | Eight-system attribution, runtime-labelled comparison, then the repeated transfer matrix |

Every patch is preregistered separately. Authentication, quota, missing model,
model fallback, or attribution ambiguity stops the patch and remains visible.
