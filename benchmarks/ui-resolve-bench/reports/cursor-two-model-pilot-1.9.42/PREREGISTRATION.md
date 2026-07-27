# Cursor fixed-runtime two-model pilot — 1.9.42

Locked before preparation and provider execution on 2026-07-27.

## Question

Can Grok 4.5 and Composer 2.5 each complete the same calibrated UI task three
times inside one fixed Cursor Agent runtime without attribution, process, or
evaluation failure?

This is an Internal execution pilot, not a public model ranking.

## Frozen design

- Runtime: Cursor Agent `2026.07.23-e383d2b`
- Binary SHA-256:
  `eed61c5224668c9236334c4c68936a16aecc37374b592f59e31eb50433817831`
- Models:
  - `cursor-grok-4.5-high`
  - `composer-2.5`
- Task: `pricing-conversion-v0.1`
- Variant: `raw-design-md`
- Trials: 3 per model
- Total cells: 6, interleaved by trial/model order
- Timeout: 900 seconds per cell
- Controller effort metadata: `high`
- Provider effort argument: none
- Root: `/tmp/u1942`

No-skill and OmD Skill Lift arms are deliberately deferred to 1.9.44. This
patch varies only the selected model inside the Cursor runtime.

## Attribution boundary

The 1.9.41 stream reported display names rather than immutable IDs. Therefore:

- requested IDs are retained as CLI-argument evidence;
- reported labels are retained as `runtime-reported-display-name`;
- every run remains `invalid-attribution` for public Verified Model Track;
- objective/evaluator results may be inspected only as Internal diagnostics;
- no W/T/L, Reliability@k, winner, model-lift, or frontier claim is allowed.

An exact-ID stream in a future runtime may unlock a fresh Verified experiment;
it cannot retroactively promote these cells.

## Files that provider execution would transmit

Each fresh prepared workspace contains only:

- the task-owned `index.html` starter;
- the task-owned `DESIGN.md`;
- `.benchmark/PROMPT.md`;
- the local `AGENTS.md` sandbox instruction;
- benchmark manifest metadata required by the local runner.

It does not contain the oh-my-design repository history, unrelated source,
reference catalog, user documents, credentials, or `web/public/llms-full.txt`.
Actual execution requires the user's explicit approval for this named file
scope to be sent to Cursor.

## Fail-closed gates

Stop the matrix at the first:

- auth/keychain/quota/model error;
- runtime or agent mismatch;
- unexpected display name;
- missing or malformed usage;
- empty terminal response;
- non-zero exit, timeout, or spawn error;
- product-tree or prepared-workspace drift;
- evaluator/export failure.

Later cells remain explicit `not-started`; no retry, resume, fallback, manual
product edit, or failed-cell evaluation is permitted.

## Descriptive acceptance

The pilot is execution-complete only when all six cells:

1. complete provider execution and local evaluation;
2. retain exact requested ID, expected display name, runtime version/hash,
   usage, raw stream, stderr, and product-only diff;
3. use no provider effort flag and no Auto/Router;
4. preserve Evidence & Unknown;
5. produce an evaluator score without serious/critical accessibility failure.

Scores, time, and tokens are descriptive diagnostics only. Expansion beyond
one task requires a separate decision after all failures are reviewed.
