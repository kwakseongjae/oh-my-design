# Arena-style preference aggregation — 1.9.75 findings

Status: **accepted, provider-free**.

## What changed

`scripts/aggregate-ship-preference.mjs` closes the gap between the accepted
blind review UI and a reproducible multi-reviewer result. It accepts separate
judgment and reveal directories, requires exactly one matching pair per
reviewer, and fails closed before calculating statistics when schema, epoch,
reviewer, task, candidate, assignment, reversal, axis, or choice data is
inconsistent.

The output is a deterministic JSON evidence package plus a readable Markdown
companion. The same inputs, bootstrap seed, and iteration count produce
byte-identical JSON because the artifact deliberately contains no wall-clock
timestamp.

## Side position no longer means candidate identity

A and B are normalized through each reviewer's reveal map before aggregation.
The synthetic calibration used three reviewers with changing side order:

- two reviewers preferred the same revealed candidate from opposite A/B sides;
- one reviewer returned ties, with one both-fail axis;
- three hidden reversed assignments generated twelve axis-level consistency
  probes;
- one probe was deliberately inconsistent.

The aggregator reported 11/12 consistent probes and counted only three primary
assignments—not six. The hidden repeats therefore diagnose order sensitivity
without adding votes or changing Bradley–Terry ratings.

## Statistics are separated instead of collapsed

Every axis reports its own:

- primary vote count;
- tie count and rate;
- both-fail count and rate;
- identity-normalized modal agreement;
- regularized Bradley–Terry rating and rank per candidate;
- seeded task→reviewer bootstrap 95% rating and rank intervals.

Ties contribute half a win to each candidate. Both-fail remains visible but is
not treated as a win, loss, or tie in the Bradley–Terry fit. The sparse fit
records its observed-pair Jeffreys prior in the output.

The synthetic majority placed its intended candidate above the comparison
candidate. A separate all-tie mutation returned equal ratings and the same
average rank for both, proving that side order and lexical candidate order do
not break tie symmetry.

## Fail-closed calibration

The focused suite rejects:

- an epoch mismatch;
- a missing rubric axis;
- an unknown assignment;
- a duplicated reviewer export.

It also covers CLI JSON/Markdown output, byte stability at 2,000 bootstrap
iterations, side normalization, reversed-repeat exclusion, deliberate
reversal inconsistency, both-fail handling, majority order, and exact tie
symmetry.

## Validation

- focused preference and gallery/report tests: 8/8;
- TypeScript, build, Node syntax, and diff checks: pass;
- provider generation: zero.

## Claim boundary

These are synthetic judgments designed to exercise the pipeline. They do not
show that practitioners prefer OmD, establish a public rank, or satisfy the
Preview/Verified reviewer minimum. The next preference result must use locked
blind exports from real reviewers under one declared methodology epoch.
