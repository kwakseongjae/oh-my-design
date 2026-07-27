# Cursor live attribution — 1.9.41

Locked before provider execution on 2026-07-27.

## Question

Does the authenticated Cursor Agent runtime execute each of the two fixed pilot
IDs without routing fallback, and does its retained output contain enough
evidence to attribute the requested model?

## Frozen cells

Run exactly one no-write probe for each ID:

1. `cursor-grok-4.5-high`
2. `composer-2.5`

The binary is the collision-safe `~/.local/bin/cursor-agent` snapshot already
recorded in `runtime-inventory/cursor-2026-07-27.json`.

## Privacy and execution boundary

- Use a newly created empty `/tmp` workspace.
- Transmit only: `Return exactly OMD_ATTRIBUTION_OK. Do not use tools.`
- Do not transmit repository files, diffs, benchmark tasks, DESIGN.md,
  credentials, account identifiers, or user content.
- Use print + stream-json + ask/read-only mode + enabled sandbox + exact model.
- Do not use Cursor Auto/Router, Fast variants, GPT/Codex models, or the
  malformed Claude catalog entry.
- Do not score quality, speed, token efficiency, cost, or aesthetics.

## Fail-closed acceptance

Each cell passes only if:

1. process exit is zero and a terminal response exists;
2. the exact requested ID is accepted without fallback/error;
3. provider output is retained and sanitized of account/session identifiers
   before repository storage;
4. the response text is exactly `OMD_ATTRIBUTION_OK`;
5. model evidence is labelled honestly:
   - `provider-observed` only when the stream reports the exact model ID;
   - otherwise `cli-argument` and the result remains Internal/unverified;
6. available usage telemetry is retained; missing usage is explicit, not zero;
7. the second model is never substituted after a first-cell failure.

Any auth, quota, keychain, model, stream, terminal-result, or attribution
failure stops that cell without retry.

## Claim boundary

Passing proves only that the named Cursor account gateway accepted a no-write
probe at this time. It does not prove immutable provider snapshots, UI quality,
model lift, skill lift, runtime parity, or benchmark eligibility.
