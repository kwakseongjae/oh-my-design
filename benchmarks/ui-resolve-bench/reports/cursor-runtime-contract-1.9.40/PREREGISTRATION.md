# Cursor runtime contract — 1.9.40

Locked before implementation on 2026-07-27.

## Question

Can the prepared-matrix controller dispatch a `cursor` cell only to a dedicated
Cursor Agent adapter, retain exact requested/reported model provenance, and
freeze every malformed or failed stream without retry or fallback?

## Scope

- Deterministic fake Cursor executable only.
- No Cursor account request, provider generation, repository transmission,
  quality evaluation, timing/token comparison, or model claim.
- The fixed live-model allowlist remains exactly `cursor-grok-4.5-high` and
  `composer-2.5`; this calibration uses a fake model ID.
- Cursor Auto/Router and every GPT/Codex model are outside this patch.

Success is `calibration_complete`. A failed mutation blocks live attribution.

## Frozen adapter contract

Matrix schema `0.2` adds runtime `cursor` with:

- runner `run-cursor.mjs`;
- expected agent `cursor-agent`;
- explicit binary path from `OMD_CURSOR_AGENT_BIN`, falling back only to the
  collision-safe `~/.local/bin/cursor-agent` path;
- non-interactive print mode, `stream-json`, exact `--model`, enabled sandbox,
  trusted prepared workspace, and no Auto/Router;
- no provider effort flag. The adapter records the frozen matrix effort without
  pretending Cursor accepted a separate effort argument;
- binary version and SHA-256 captured before execution;
- raw stdout events and stderr retained;
- common runtime/process/usage/diagnostic envelope;
- product-only tree diff identical to the existing runners.

Provider-observed model evidence requires a model field from a retained stream
event. The requested CLI model remains `cli-argument` evidence and is never
promoted. Unsupported diagnostics stay `null`.

## Deterministic acceptance

A fake Cursor executable must prove:

1. only `run-cursor.mjs` handles a `cursor` cell;
2. the provider command contains print, stream-json, exact model, sandbox, and
   workspace arguments but no Claude/Codex effort flag;
3. reported model, requested model, runtime, effort, binary version/hash, raw
   events, and suite version survive export;
4. non-zero exit, timeout, empty terminal result, wrong model, malformed usage,
   missing executable, and runtime mismatch fail closed;
5. first-cell failure retains all later cells as explicit `not-started`;
6. no real Cursor binary, keychain, credential, network, or provider is touched.

Focused/full tests, TypeScript, CLI build, Node syntax, JSON checks, and
`provider_generation: false` evidence are required.

## Claim boundary

This patch may claim only deterministic Cursor adapter routing, provenance, and
failure retention under fake execution. It cannot claim that Grok or Composer
is available, attributable, useful, fast, economical, or better.

If accepted, 1.9.41 may run two separate no-write live attribution cells after
the user explicitly approves sending those prompts and minimal repository
context to Cursor.
