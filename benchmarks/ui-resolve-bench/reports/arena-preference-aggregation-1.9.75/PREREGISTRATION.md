# Arena-style preference aggregation — 1.9.75

Status: **LOCKED; provider-free implementation pending**.

## Frontier gate and bounded hypothesis

Schema `0.2` can collect blind Functionality, Usability, Fidelity, and Ship
Preference judgments, but the repository cannot yet validate multiple reviewer
exports or calculate the statistics promised by the protocol.

The bounded hypothesis is that one strict offline aggregator can turn locked
schema `0.2` judgment/reveal pairs into reproducible descriptive and
Bradley–Terry evidence while preserving the distinction between primary votes
and hidden order-bias probes.

## Frozen inputs and rules

- product experiment `1.9.75`;
- accepted judgment/reveal schema `0.2`;
- axes exactly `functionality`, `usability`, `fidelity`, `ship_preference`;
- choices exactly `a`, `b`, `tie`, `both_fail`;
- all inputs must share one methodology epoch;
- task id, version, and core prompt hash are retained as task strata;
- reversed duplicates are excluded from primary vote counts and ratings;
- reversal pairs are used only for identity-normalized consistency;
- ties contribute half a win to each candidate;
- both-fail contributes to its reported rate and not to Bradley–Terry fitting;
- Bradley–Terry uses deterministic regularized fitting with the regularization
  recorded in output;
- confidence and rank intervals resample tasks and reviewers with a frozen seed;
- no visual result, provider, deterministic score, or historical run changes.

## Acceptance

Pass only when:

- every reviewer has exactly one reveal map and vice versa;
- schema, epoch, reviewer hash, task metadata, assignment set, axis set, and
  choice vocabulary fail closed on mismatch, omission, or duplication;
- side-relative A/B choices normalize to candidate identity before aggregation;
- hidden reversed duplicates never increase primary vote count;
- consistent and inconsistent reversed pairs are counted deterministically;
- axis vote totals, tie rate, both-fail rate, and modal agreement are reported;
- Bradley–Terry order follows a calibrated synthetic majority and ties remain
  symmetric;
- seeded bootstrap output is byte-stable and contains 95% rating plus rank
  intervals;
- an epoch mismatch, missing axis, unknown assignment, and duplicate reviewer
  each fail;
- focused tests, lint, build, syntax, and diff checks pass.

## Claim limit

The calibration uses synthetic judgments and proves only the statistics
pipeline. It cannot support an OmD preference result, public rank, practitioner
agreement claim, or confidence statement until real blind reviewers complete
the accepted gallery.
