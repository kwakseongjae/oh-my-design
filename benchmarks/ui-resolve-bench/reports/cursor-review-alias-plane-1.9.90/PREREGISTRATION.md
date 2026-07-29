# Cursor review alias plane — 1.9.90

Status: **LOCKED; provider-free alias plane accepted**.

## Incident

The 1.9.89 fresh root locked the current registry row:

`cursor-grok-4.5-high - Cursor Grok 4.5`

Its first provider event reported `Cursor Grok 4.5 High`, the previous
registered label for the same unchanged selector. The root froze at 0/54.

Across retained evidence, Cursor alternates these two display strings for the
same exact selector. Display text is therefore not a stable exact-model
attribution primitive.

## Internal-only correction

The automated judge plane is calibration evidence, not a public model
leaderboard. A fresh root may accept:

- the exact requested selector;
- the fresh-root registry label;
- the source-registered historical label for that exact selector.

The accepted set is recorded in the private state and every invocation record.
The current registry row itself remains locked and is probed before every
provider call. Any other label, selector change, or registry drift freezes the
root.

This evidence mode is `internal-selector-plus-registered-alias`. It is never
eligible for public model attribution and cannot be reused for a public Model
Track row.

No judgments from the frozen 1.9.88 or 1.9.89 roots transfer to the replacement.
