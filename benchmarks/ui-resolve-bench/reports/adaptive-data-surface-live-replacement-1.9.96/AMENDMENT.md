# 1.9.96 preparation amendment

The committed run matrix misspelled the already-preregistered infrastructure
policy value as `retain-freeze-and-reregister`. The controller rejected the plan
before creating the output root and before any provider call.

This amendment changes only that enum spelling to the controller's canonical
`retain-freeze-and-repreregister`. Task, arms, commits, order, model, effort,
timeout, pacing, review ladder, and stop conditions are unchanged.
