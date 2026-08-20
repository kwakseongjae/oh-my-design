# Autopilot Luna/high smoke 1.9.859 — complete diagnostic

- Source commit: `65fa4323aaf8ce9d14c8de168baedfc0f18642f2`
- Locked plan SHA-256: `748a40e88cbf09caa296eefd012db04384687acf2d25eb7e1fbf46adece5acb2`
- Runtime: exact `gpt-5.6-luna/high`, three serial cells
- Retry / replacement / fallback / model substitution / effort substitution: `0`
- Bounded same-mission repair calls: maximum `2` after the initial call
- Provider / model / Cursor calls during preregistration: `0 / 0 / 0`

This fresh epoch replaces the permanently frozen 1.9.858 root. The controller
and mission now recompute one exact product-tree authority, including installed
runtime assets, and any post-start controller exception permanently freezes the
root. Initial and bounded-repair artifacts, time, and tokens remain separately
observable and additive.

The clean prepare/audit and exact named in-app browser admission passed. All
three cells completed as valid terminal failures with exactly one initial call
and two same-mission repair calls each. Scores changed `30→30→50`, `20→20→40`,
and `30→30→40`; all three project-owned design-system proofs passed, but no cell
passed its objective UI contract.

The block consumed 9 model calls, 3,937,228 ms of provider wall time and
11,175,693 input-plus-output tokens. It remains diagnostic and non-promotional.
No cell may be retried or replaced, and this completed root is non-resumable.
The next fresh epoch must embed bounded evaluator observations inside the
hash-bound feedback rather than relying on assertion names and a sibling score
path that the workspace sandbox cannot reliably inspect.
