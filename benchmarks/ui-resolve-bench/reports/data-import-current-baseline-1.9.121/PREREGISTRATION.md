# Data import mapping current-skill baseline — preregistration

## Question

Can the exact current canonical `omd-apply` skill repair an unseen
data-configuration surface reliably across three independent runs while
preserving every supplied fact and interaction?

## Frozen system

- Task: `data-import-mapping-v0.1` `0.1.0`
- Arm: opaque `jade`
- Variant: `omd-portable-jade`
- Exact source commit:
  `f013dbd9f94a1e018f7cf8a4e500207fe982b00a`
- Installed Cursor skill tree SHA:
  `d7a890ac08f8a4cce8c541b186039c9fcd4245a363f7f97132a2bbf8f46f52d5`
- Runtime/model: Cursor / registered Grok 4.5 High
- Effort: high
- Timeout: 900 seconds
- Trials: 3
- Concurrency: 1
- Inter-cell pacing: 120 seconds
- Retry, fallback, repair, replacement, and model substitution: forbidden
- Attribution: Internal registered display name only

The core prompt, starter, DESIGN.md, activation text, installed skill, task
version, runtime, effort, and timeout must be identical across all three cells.

## Primary outcome

- UI-Resolved@1 per cell
- Reliability@3 across the three cells
- Deterministic score and critical-gate profile
- Registered text-geometry and decision-hierarchy checks at every declared
  viewport

Wall time, token use, and step counts are descriptive only. This one-task run
does not authorize cross-provider efficiency or public model claims.

## Decision boundary

- **3/3 valid UI-Resolved with no repeated visible defect:** retain canonical
  skill; do not add a task-specific rule.
- **Repeated objective failure:** diagnose the smallest common cause on this
  now-seen task, create a bounded non-canonical hypothesis only if needed, and
  validate it on another unseen family.
- **Objective ceiling but unresolved visual tradeoff:** prepare an anonymous
  owner review only if the screenshots contain a real subjective decision.
- **Infrastructure failure before a cell starts:** freeze the root and
  re-preregister; do not replace or silently rerun a cell.

Provider execution begins only after preparation proves exact detached source,
within-arm identity, untouched product trees, and evaluator preflight.
