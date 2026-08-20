# Versioned Matrix Preparation — 1.9.80 Preregistration

## Purpose

1.9.79 proved that one sandbox can install either exact detached OmD skill
arm. The live runner prepares a whole matrix through
`prepare-run-matrix.mjs`, but that controller cannot currently forward a
reviewed vendor root to `prepare-sandbox.mjs`. The preregistered 18-cell
patch-isolation matrix therefore cannot be prepared without bypassing the
controller or copying mutable skill bytes.

1.9.80 closes only that infrastructure gap. It does not execute a provider and
does not change the live denominator.

## Allowed delta

- accept one optional absolute `vendors_root` on a run-matrix plan;
- reject relative or malformed vendor roots before creating a matrix;
- forward that root as `--vendors` to every sandbox preparation;
- preserve the root in the locked controller plan, while relying on the
  1.9.79 per-arm exact-commit, clean-source, detached-HEAD, and skill-hash
  attestations inside each workspace;
- add focused argument, validation, and real two-arm preparation tests;
- prepare the locked 18-cell 1.9.80 root only after the controller patch is
  accepted and committed.

No task, starter, DESIGN.md, prompt, activation, skill byte, evaluator, score,
model, effort, timeout, pacing, retry, fallback, substitution, or cell order
change is allowed.

## Provider-free acceptance

1. A plan without `vendors_root` produces the existing argument list exactly.
2. A plan with an absolute `vendors_root` forwards exactly one
   `--vendors <root>` pair to each cell.
3. A relative root fails validation before output-root creation.
4. A real minimal slate/ember matrix prepares from two clean detached pinned
   checkouts and records the expected source commits, `detached: true`, equal
   task inputs, equal runtime activation, and distinct skill hashes.
5. Focused tests, lint, build, syntax, and diff checks pass.
6. Provider generation remains zero.

## Next live denominator

After a clean acceptance commit, create a fresh `/tmp/u1980` root with:

- onboarding `0.3.0`, incident `0.4.0`, locale `0.5.0`;
- opaque slate and ember OmD arms;
- three trials per task and arm, 18 cells total;
- one frozen Cursor/Grok 4.5 High selector if capacity preflight succeeds;
- globally serial execution, one durable cell per invocation;
- balanced rotation and 120-second retained inter-cell pacing;
- 900-second timeout;
- no retry, fallback, substitution, failed-cell replacement, or manual product
  edit.

If Grok capacity fails before cell 1, freeze the root unstarted and
preregister Luna High as a separate denominator. If any failure occurs after
cell 1 begins, freeze the root and do not resume it with another model.

## Stop conditions

- Reject an unpinned, dirty, attached, missing, or path-escaping vendor source.
- Reject model-readable old/new, control/candidate, or version identity.
- Reject a matrix that cannot reproduce exact task and skill attestations.
- Do not call a provider before 1.9.80 provider-free acceptance is committed.
- Do not claim preference lift from preparation alone.
