# Task-contract mutation audit — 1.9.685

## Result

All 78 current public task contracts pass a strengthened core validator with exact directory identity. Eleven deliberate mutations are rejected: bad identity or version, network enablement, path escape, viewport duplication or invalid size, protected-hook drift, empty unknown boundaries, a missing design oracle, and directory/ID mismatch.

The core validator now also requires non-empty track, grounding, locale, and behavior adapter; positive viewport geometry; exact protected-selector/count key parity; valid integer or total/visible expectations; and repository-relative HTML entrypoints.

## Why this matters

Previously, specialized text-geometry and approval checks were strict while several common task fields were only assumed by downstream preparation. A malformed task could therefore look structurally valid until a later phase. The mutation suite moves those failures to task admission.

## Claim boundary

This is a local author/evaluator robustness check. It does not provide an independent sample, a broken-task-rate estimate, or the required under-5% external audit. Gate 7 remains external and open.
