# Automated blind review contract — 1.9.86

Status: **LOCKED; provider-free preparation accepted**.

## Purpose

Complete the preregistered reduced-human ladder for the complete 1.9.85
versioned-skill matrix without mixing repeated trials or asking a person to
score every successful cell.

## Frozen review denominator

- source: `/tmp/u1985/execution-state.json`, status `complete`, 18/18;
- exact comparisons: same task × same trial × slate/ember, nine pairs;
- three opaque automated judge identities;
- each judge receives each pair twice in separate invocations with A/B reversed;
- four axes: functionality, usability, fidelity, ship preference;
- valid choices: A, B, tie, both fail;
- 27 review units, 54 isolated invocations;
- candidate identities, skill commits, automatic scores, and reversal linkage
  are private operator data;
- judge packets contain only the neutral task brief and four anonymous
  screenshots.

The initial judge runtime is Cursor/Grok 4.5 High under Internal registered
display-name attribution. This does not create a public model leaderboard row.

## Fail-closed rules

Preparation requires a complete 18-cell state, valid/UI-Resolved/evidence-safe
cells, exactly two distinct arms per task/trial pair, identical task contracts,
and all desktop/mobile screenshots.

Each reversal is a fresh provider invocation. A judge cannot see both orders in
one context. JSON output must match the assignment and four-axis schema exactly.
No retry, response repair, fallback, model substitution, or manual judgment is
allowed inside the automated denominator. The first provider, parse, identity,
or artifact failure freezes the automated root.

## Escalation boundary

Human review receives only:

- cross-judge modal disagreement;
- side-reversal inconsistency;
- tie or both-fail uncertainty;
- a deterministic bounded audit sample of otherwise resolved pairs.

Automated votes remain diagnostic calibration evidence. They do not count as
practitioners for Preview or Verified publication gates.
