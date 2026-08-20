# Reduced-human selection — 1.9.91

Status: **LOCKED**.

## Purpose

Turn a complete anonymous automated review round into the smallest deterministic
set of task×trial pairs that still needs practitioner calibration.

## Selection contract

- select every pair with cross-judge disagreement on any axis;
- select every pair with side-reversal inconsistency on any axis;
- select every pair with a primary tie or both-fail on any axis;
- select a seeded SHA-256 sample of at most one otherwise resolved pair;
- never alter, repair, rescore, retry, or substitute an automated judgment;
- keep candidate identities and source directories in the private operator
  manifest;
- group selected trials by task family when building the later human UI.

The human result calibrates the automated judge plane. It does not replace
deterministic gates or count automated judges as practitioners.
