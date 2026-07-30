# 1.9.106 findings — deletion approval task contract

## Outcome

ACCEPTED.

The fresh untouched starter reached 85/85 deterministic points with all six
critical gates green. The existing `approval-v1` adapter correctly observed:

- all → blocked → all filtering with 4 → 2 → 4 visible requests;
- two evidence disclosures opening and closing with exact ARIA state;
- dialog open with focus inside;
- cancel and confirm both closing the dialog and restoring trigger focus;
- a changed live status after confirmation;
- no horizontal overflow, clipped controls, or overlapping controls across all
  four viewports;
- complete keyboard traversal, visible focus, zero serious/critical axe issues,
  and no unsupported claims.

The first diagnostic run scored 80/85 because the task's unknown-claim regex
incorrectly classified its own supplied file counts as marketing proof. The
task contract, not the product fixture or evaluator, was corrected by removing
`files` and `workspaces` from that generic social-proof pattern. A fresh root
then passed 85/85. The failed diagnostic root remains outside future
denominators.

## Locked identity

- Core prompt SHA-256:
  `c482379f0d69eb3f03dc2ff9717234c626e59c7a29a579451557bf8ae16e9d0f`
- Starter product SHA-256:
  `9b3263243d6039e47d6d0adc5c6c8bf39430490f8bee5317270135087fe34fed`
- Starter `index.html` SHA-256:
  `850ca43ac05594e95356ffc638f052fcf000187e1aa25f2d5529ace55c6add39`
- Starter `DESIGN.md` SHA-256:
  `09c4e9ad73161da4b76b1b80a2b100ee33e0b2e40539298813a36b83e76e4ae4`
- Task JSON SHA-256:
  `bb3f60e8c93d24741d4c8fd6bf42d1c6a27459ee4999268197cbfd5e18a96d68`
- Accepted evaluation root: `/tmp/u19106-deletion-starter-v2`

## Next gate

Prepare two exact arms on this locked holdout: the current canonical OmD apply
skill as control and a non-canonical experimental copy containing only the
bounded decision-context hierarchy rule. Canonical skill files remain
unchanged until repeated objective eligibility and blind owner preference both
support promotion.

