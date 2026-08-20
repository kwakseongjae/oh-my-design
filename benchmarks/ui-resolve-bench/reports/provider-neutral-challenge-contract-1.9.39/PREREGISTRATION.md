# Provider-neutral challenge contract — 1.9.39

Locked before implementation on 2026-07-27.

## Question

Can the prepared-matrix controller honor each cell's frozen runtime, invoke only
that runtime's runner with its native argument contract, export explicit
runtime/model/effort provenance, and retain every failure without fallback?

## Scope

- Supported runtimes remain exactly `claude-code` and `codex`.
- Calibration uses deterministic fake executables only.
- No provider auth, network, live generation, quality evaluation, score
  aggregate, W/T/L, timing comparison, token comparison, or model claim.
- Existing task and evaluator thresholds do not change.
- Any unavailable, malformed, mismatched, or unattributed runtime freezes the
  matrix. It never falls back to another runner.
- This defines technical intake for a later independent challenge. It does not
  claim that an independent audit occurred.

Success is `calibration_complete`. Any routing, attribution, normalization, or
failure-retention mutant that does not fail closed makes the patch
`calibration_failed` and blocks 1.9.40.

## Existing defect

Matrix preparation accepts `claude-code` and `codex`, but execution currently:

- always selects `run-claude.mjs`;
- always emits Claude's `--effort` arguments although Codex requires
  `--reasoning`;
- requires Claude-shaped model usage from every runtime;
- hardcodes export suite version `1.9.7`;
- lets missing provider diagnostics become fabricated zeroes in export.

## Frozen implementation contract

Introduce matrix schema `0.2` for new work with:

```json
{
  "suite_version": "ui-resolve-v0.1",
  "product_version": "1.9.39",
  "execution_purpose": "runtime-contract-calibration"
}
```

Historical schema `0.1` remains readable. A frozen runtime registry maps:

| Runtime | Runner | Agent | Native effort flag |
|---|---|---|---|
| `claude-code` | `run-claude.mjs` | `claude-code` | `--effort` |
| `codex` | `run-codex.mjs` | `codex-cli` | `--reasoning` |

One pure `runnerSpecForCell(cell, workspace)` returns runner, arguments, and
expected agent. There is no default branch.

Both runners emit a common envelope containing:

- runtime target and agent/version;
- requested model, provider-reported model or `null`, and evidence mode;
- requested effort;
- first-party auth mode and provider route where knowable;
- exit, child exit, signal, timeout, and spawn error;
- explicit usage/diagnostic availability.

`cli-argument` evidence must never be relabelled as provider-observed model
evidence. Unsupported diagnostics are `null` with availability metadata, never
zero.

Before evaluation, fail closed on:

- `prepared-runtime-mismatch`
- `executed-runtime-mismatch`
- `runtime-agent-mismatch`
- `requested-model-mismatch`
- `reported-model-mismatch`
- `requested-effort-mismatch`
- `incomplete-runtime-attribution`
- `incomplete-usage-attribution`

The locked plan supplies the export suite version. Raw provider events and
stderr remain retained.

## Deterministic acceptance

A temporary two-cell fake-runtime matrix must prove:

1. the Claude cell invokes only fake Claude with `--effort`;
2. the Codex cell invokes only fake Codex with `--reasoning`;
3. both produce the common envelope and distinct raw logs;
4. exact runtime/model/effort attribution survives export;
5. suite version comes from the locked plan;
6. no real provider executable, credential, network, or generation is touched.

Mutations cover wrong dispatch/flag/runtime/agent/model/effort, empty final,
non-zero exit, timeout, missing executable, malformed usage, and first-cell
failure. A stopped first cell must freeze the matrix and retain later cells as
explicitly not started.

Acceptance also requires focused and full root tests, TypeScript, CLI build,
Node syntax, JSON/schema checks, and a fake-only audit with
`provider_generation: false`.

## Claim boundary and next patch

1.9.39 may claim only deterministic no-fallback dispatch, explicit provenance,
and retained failure state under fake-runtime calibration. It cannot claim
Claude/Codex parity, provider or model lift, equivalent tool permissions,
Cursor support, hidden-task coverage, Preview/Verified status, or a winner.

If calibration passes, 1.9.40 separately preregisters one fresh live attribution
smoke per runtime. Those cells validate stream parsing only and are not compared
for quality, speed, tokens, or cost.
