# State-routed checkpoint canary — 1.9.773

## Question

Can the installed harness avoid provider calls for already-materialized user
questions and external-evidence blocks, while preserving the exact checkpoint
contract and using Luna/high only for the ready design-judgment cell?

## Fixed design

- Same three tasks, oracle, order, model, effort, timeout, and retry-0 policy as
  1.9.770.
- Fresh workspaces. Cursor is forbidden.
- The deterministic handoff and context planner run before any provider call.
- `ask_user` relays the exact `questions_file`; `blocked` relays the exact
  blocking identifiers. Neither state invokes a model.
- Only `PROPOSE_PLAN` may invoke Codex-native Luna/high, with the master kernel
  and `master-execution-phases.md` selected by `context-plan.json`.
- Only `master-decision.json` may be written by the live provider cell.

## Gates

Exact ready/interview/blocked oracle 3/3, live gate 3/3, provider calls exactly
1, Cursor 0, timeout 0, unauthorized write 0, retry/replacement 0. The ready
cell must select only the execution sidecar; the other two cells must select no
master and no sidecars. Any failure freezes the run.

## Claim boundary

The result may establish checkpoint-routing correctness and provider-call
reduction for these three fixed cells. Aggregate token reduction is expected
because two provider calls are removed, so it is not evidence of improved model
quality or prompt efficiency. Only the ready cell may be compared descriptively
with its 1.9.770 counterpart, and replay/cache/runtime variance must be disclosed.
No UI-quality, model-ranking, skill-superiority, or 2.0-readiness claim follows.
