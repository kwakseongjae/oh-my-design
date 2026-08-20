# Arena-style Ship Preference contract — 1.9.74

Status: **ACCEPTED; provider-free**.

## Frontier gate and bounded hypothesis

The existing blind gallery already hides identities, randomizes sides, creates
one reversed duplicate, and allows A/B/tie/both-fail. It records only one
overall choice, admits any process-complete artifact even when deterministic
critical gates fail, and has no methodology epoch.

The bounded hypothesis is that a versioned preference contract can adopt the
useful Code Arena review structure without allowing visual preference to
override correctness:

1. only deterministic `automated_gate_pass=true` artifacts enter a preference
   pair;
2. reviewers judge Functionality, Usability, and Fidelity separately before
   recording overall Ship Preference;
3. every axis permits A, B, tie, and both-fail;
4. assignment, export, and reveal files bind one explicit methodology epoch;
5. identity, automatic score, gate result, and reversed-pair metadata remain
   absent from the reviewer payload and HTML.

## Frozen denominator

- product experiment `1.9.74`;
- builder `benchmarks/ui-resolve-bench/scripts/build-gallery.mjs`;
- current assignment/export/reveal schema `0.1`;
- existing salt, reviewer hashing, opaque candidate IDs, pair randomization,
  reversed duplicate, same-task/version/prompt checks, and external reveal-file
  boundary unchanged;
- provider generation zero;
- Bradley–Terry fitting and multi-reviewer aggregation deferred to a separate
  patch after the judgment contract is accepted.

## Permitted delta

- require `--epoch <opaque-methodology-epoch>`;
- emit schema `0.2` with rubric axes `functionality`, `usability`, `fidelity`,
  and `ship_preference`;
- filter candidates to deterministic gate-eligible completed artifacts before
  pairing and report only the excluded count in process output;
- render neutral axis definitions and four choices per axis;
- export one complete axis object per assignment;
- retain repeat-pair metadata only in the reveal map.

No deterministic evaluator, task, score, skill, run artifact, historical
result, or public leaderboard value may change.

## Acceptance

Pass only when:

- fewer than two gate-eligible candidates fails before gallery creation;
- mixed eligible/ineligible inputs create pairs from eligible candidates only;
- assignment and judgment payloads bind the exact epoch and schema;
- all four axes require a choice before local export;
- Functionality, Usability, Fidelity, and Ship Preference use the same
  A/B/tie/both-fail vocabulary;
- reviewer-visible files contain no variant labels, deterministic scores,
  automated gate values, or reversal markers;
- reveal data remains outside the gallery and retains candidate mapping plus
  reversal linkage;
- same salt/reviewer/epoch is deterministic, reviewer change changes order,
  and epoch change changes assignment identity;
- focused tests, lint, build, syntax, and diff checks pass.

## Next

Acceptance unlocks a separate provider-free multi-reviewer aggregator patch:
strict judgment/reveal validation, identity-normalized reversal consistency,
axis vote distributions, both-fail rate, agreement, and Bradley–Terry rating
with reviewer/task bootstrap confidence intervals.
