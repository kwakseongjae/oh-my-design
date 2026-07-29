# Cursor project-cache preflight — 1.9.84 findings

Status: **accepted; fresh replacement preparation unlocked**.

## Outcome

The matrix controller now proves that Cursor can create and write its
per-project cache before it creates invocation state, waits for pacing, or
starts a provider process. The probe uses a unique directory and removes it
immediately.

Frozen or drifted execution state is still rejected before the environmental
probe, so the new check cannot mask an existing benchmark-integrity failure.

## Acceptance evidence

- isolated writable cache fixture: passed;
- missing cache fixture: stable `ENOENT` fail-before-provider;
- actual restricted environment: stable `EPERM` fail-before-provider;
- actual authorized environment: writable probe passed;
- focused matrix/runtime tests: 59/59 passed;
- TypeScript lint, CLI build, and Node syntax: passed;
- provider generation during calibration: 0.

## Decision boundary

The repair is orchestration-only. The retained 1.9.83 9/18 partial remains
incomplete and cannot support Reliability@3, preference, skill-lift, public
model attribution, or frontier claims.

A fresh root may reuse the locked 18-cell denominator only after this repair is
committed. Provider execution must run in the same authorized environment that
passed the cache probe. The first subsequent failure still freezes that fresh
root without retry, fallback, or model substitution.
