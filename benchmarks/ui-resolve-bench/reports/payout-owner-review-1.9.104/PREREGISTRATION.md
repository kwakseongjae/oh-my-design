# Payout matched-trial owner review — 1.9.104

Status: **LOCKED; practitioner judgment not yet collected**.

## Purpose

Resolve the visual-preference plane left open by the 1.9.103 deterministic
ceiling tie. This review does not rerun, repair, rescore, or relabel any model
artifact.

## Frozen comparisons

- source root: immutable completed `/tmp/u19103`;
- task: `payout-approval-v0.1@0.1.0`;
- exactly three comparisons:
  - trial 1 OmD ↔ trial 1 Impeccable;
  - trial 2 OmD ↔ trial 2 Impeccable;
  - trial 3 OmD ↔ trial 3 Impeccable;
- no cross-trial pair and no best/worst-run cherry-picking;
- desktop and mobile evaluator screenshots are shown together;
- side assignment is salted and identity-hidden;
- automatic score, wall time, token use, variant label, and tool identity stay
  outside the public gallery until export and lock.

## Owner axes

1. **Functionality** — fulfills the task and exposes the necessary states.
2. **Usability** — makes hierarchy, scanning, and the next action clearer.
3. **Fidelity** — is more coherent with the supplied product context.
4. **Ship preference** — is the result the practitioner would ship.

`A`, `B`, `Tie`, and `Both fail` are all valid. Functionality is judged from
visible task/state communication, not by repeating the already-complete
automated interaction gate.

## Decision boundary

- identity-normalize the three primary comparisons through the private reveal;
- report per-axis OmD / Impeccable / tie / both-fail counts;
- do not combine axes into a synthetic single score;
- do not declare a public frontier winner from one task family and one owner;
- a repeated OmD loss may propose a future rule, but that rule must be tested
  on a new holdout before promotion;
- a tie or mixed result retains the current skill unchanged.

## Stop condition

Stop after the browser-validated gallery is opened. The next valid input is the
actual owner export. Do not manufacture a synthetic judgment or reveal
identities before the export is locked.
