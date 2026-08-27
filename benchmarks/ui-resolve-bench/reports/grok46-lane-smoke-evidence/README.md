# grok-4.6 lane — smoke-call evidence (durable, workspace-local)

This directory is the **durable, in-workspace** copy of the two permitted live
`grok-4.6` smoke calls that validate the isolated `run-grok.mjs` lane end to end
(WP1–WP4 of `docs/OMD_2_0_GROK_RESTART_SEED.md`). It exists so the smoke
receipts and raw output are citable with workspace-relative paths and are not
lost when the ephemeral `/private/tmp/omd-grok46-wow-smoke/` scratch tree is
reclaimed. The `/private/tmp` originals are **preserved, never deleted**.

## Smoke budget

Seed cap: **at most 2 live grok smoke calls total**. Both were used:

| call | prompt | response | exit | wall_ms | infra_invalid |
|------|--------|----------|------|---------|---------------|
| smoke-01 | `Reply with exactly: SMOKE-PASS-1` | `SMOKE-PASS-1` | 0 | 3176 | false |
| smoke-02 | `Reply with exactly: SMOKE-PASS-2` | `SMOKE-PASS-2` | 0 | 3934 | false |

Both calls are **excluded from the benchmark denominator** (`denominator_calls: 0`)
per the seed. No benchmark cell was executed. Any further live call requires
explicit WP5 user approval.

## Raw output (per call, under `.benchmark/`)

- `PROMPT.md` — exact fixed prompt sent
- `events.jsonl` — raw provider event stream
- `final-message.txt` — raw model final message (`SMOKE-PASS-1` / `SMOKE-PASS-2`)
- `run-result.json` — runner run-record (isolation, byte-gate, retry_count 0, model grok-4.6)
- `manifest.json` — task/variant/workspace manifest
- `models-cache.post-provider.bin` — per-home cache byte-gate artifact (4471 B)
- `stderr.log` — captured stderr

## Receipts (`receipts/`)

`STATIC-RUNTIME-CAPABILITY`, `RUNTIME-ATTRIBUTION-PREFLIGHT`,
`GROK-BUILD-CLI-IDENTITY`, `EVALUATION-RUNTIME-RECEIPT`, `SMOKE-02-SUPPLEMENT`,
and the roll-up `SMOKE-EVIDENCE-SUMMARY.json`.

## Integrity

Every file's SHA-256 is recorded in `SHA256SUMS` (workspace-relative). Re-verify:

```
shasum -a 256 -c SHA256SUMS        # inside this directory
```

The declared `run-result`/`events` hashes inside
`receipts/SMOKE-EVIDENCE-SUMMARY.json` match the on-disk raw output byte-for-byte.

Machine check for this AC (also asserts the docs record WP5-pending-approval):

```
node benchmarks/ui-resolve-bench/scripts/verify-grok46-smoke-evidence.mjs
```

Source commit at capture time: `9a6d22fab50ae18998b3782c5576e00f7e626125`.
Lane status: `smoke-validated-pending-wp5-approval`.
Next exact action: **WP5 — order1 cell execution, pending explicit user approval.**
