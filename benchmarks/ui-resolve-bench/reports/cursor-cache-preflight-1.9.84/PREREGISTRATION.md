# Cursor project-cache preflight — 1.9.84

Status: **LOCKED; provider-free calibration only**.

## Failure being repaired

The fresh 1.9.83 versioned-skill replacement completed 9/18 cells. Cell 10
passed its 120-second pacing gate, then the Cursor process exited in 398ms
before emitting an event because it could not create its project cache under
`~/.cursor/projects`. The product tree was unchanged.

The 1.9.83 root is frozen. It must not be resumed, retried, rescored, relabelled,
or continued with another model.

## Bounded change

- Before creating invocation state or starting pacing/provider work, inspect the
  runtimes declared by the locked matrix.
- For a Cursor matrix, create, write inside, and remove a uniquely named probe
  directory under the exact Cursor projects-cache root.
- Fail with a stable `runtime-preflight-failure` reason when the cache is not
  writable.
- Permit an explicit cache-root override only for deterministic tests.
- Do not change prompts, tasks, arms, evaluator rules, scoring, pacing, timeout,
  retry, fallback, attribution, or historical artifacts.

## Acceptance

Pass only when:

1. an unavailable cache root fails before execution state and provider output;
2. a writable isolated cache root passes and removes its probe;
3. the real restricted execution reproduces EPERM before provider work;
4. the real authorized execution passes the same probe;
5. focused controller/runtime tests, TypeScript lint, build, and Node syntax
   checks pass.

A pass permits a separately committed fresh 18-cell replacement with the same
opaque arms and denominator. It creates no quality, efficiency, model, skill,
or frontier claim.
