# Deletion matched-trial owner review — 1.9.109

Status: **COMPLETE; practitioner judgment hash-locked**.

## Frozen comparison

- source root: immutable completed `/tmp/u19108`;
- task: `deletion-approval-v0.1@0.1.0`;
- exactly three same-trial control ↔ experimental comparisons;
- desktop and mobile evaluator screenshots shown together;
- salted, identity-hidden side assignment;
- no rerun, repair, rescore, relabel, or artifact replacement.

## Decision boundary

- normalize identities only after the complete owner export is received;
- keep Functionality, Usability, Fidelity, and Ship Preference separate;
- do not synthesize a composite score;
- `both_fail` is a valid diagnostic result and cannot promote either arm;
- the experimental rule is promotable only if it preserves Functionality and
  produces repeated Usability or Ship Preference lift on this unseen holdout;
- one owner, one task family, and three trials authorize no public frontier
  winner or model claim.

