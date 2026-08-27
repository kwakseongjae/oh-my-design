# 1.9.733 findings — council-first intake boundary

## Outcome

The first 2.0 council slice passes its local contract. `omd-harness` now creates
an evidence packet and typed decision ledger before discovery. Explicit user
intent and grounded reversible process choices may be automatic; product-owned
unknowns remain interviews; unsupported visual defaults are deferred.

This is deliberately not a claim that six model agents debated. The packet
declares those lanes as read-only and `not-dispatched`, and `omd-master` remains
the sole implementation owner.

## Grok 4.5 review

The read-only critique supported the ledger-first boundary and rejected an
immediate six-lane fan-out. Its primary risks were confidence drift, expensive
rubber-stamping, and plausible defaults leaking through `auto` or `defer`.
The implementation therefore adds provenance labels and executable invariants:

- every automatic decision must have a value and evidence;
- non-user automatic decisions must be low-impact, easy to reverse, and at
  least `0.75` confidence;
- a deferred decision cannot carry a proposed value.

## Verification

- focused council/frontier tests: 9 passed;
- installer parity tests: 43 passed;
- full suite: 784 passed, 3 skipped;
- TypeScript type-check: pass;
- production build: pass;
- catalog consistency: 440 references, 21 skills, 18 sub-agents, 9 surfaces.

## Honest boundary

The `council-first-human-escalation` frontier gate remains `partial`. Slice A
proves deterministic question gating, not lower human intervention or better
design outcomes. The mandatory plan, DESIGN.md, and validation checkpoints are
unchanged.

## Next execution queue

1. **1.9.734 — disposition calibration:** exercise explicit, ambiguous,
   conflicting, locale-specific, and evidence-missing briefs; require zero
   unsupported automatic decisions.
2. **1.9.735 — bounded council dispatch:** dispatch only lanes implicated by
   the ledger, with citations and independent rejection of unsupported claims;
   use Grok 4.5 as the primary runtime.
3. **1.9.736 — intervention-lift comparison:** compare fixed intake with the
   ledger/council path on question count, unplanned intervention, elapsed time,
   and resolved-surface quality. Do not promote the 2.0 gate without repeated
   positive evidence.
