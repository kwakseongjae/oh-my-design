# Payout approval task contract — 1.9.102 findings

Status: **accepted; unseen frontier-comparison family ready**.

`payout-approval-v0.1` adds a high-consequence financial decision flow that the
previous task families did not measure. Its generic `approval-v1` adapter checks
dialog intent and focus restoration without prescribing a visual composition.

The untouched starter at `/tmp/u19102-payout-starter` passed:

- deterministic score: 85/85;
- critical gates: 6/6;
- filter, evidence disclosure, and approval-decision groups: 3/3;
- dialog initially closed, opened with focus inside, cancelled with trigger
  focus restored, and confirmed with status change and trigger focus restored;
- desktop, 390px, 320px, and 200% zoom-surrogate geometry: no document
  overflow, clipped controls, or overlapping controls;
- keyboard traversal and visible in-view focus: pass at every viewport;
- axe serious/critical findings: 0;
- unsupported claims and unsupported proof structures: 0;
- provider calls: 0.

Immutable task inputs:

- starter SHA-256:
  `4de76062342609cc3a1b84d5087ef3704ce1c629ae55d79c51740270cfdb6f10`;
- core prompt SHA-256:
  `5682362e5f1d08d1ac4d5c362f92e3b4c83f14cc803570519c62dd5902dddc0e`.

The result proves that the task and evaluator agree on a measurable approval
contract. It does not establish skill quality. The next step is a fresh,
balanced current-OmD versus frontier-repair matrix with exact pinned sources.
