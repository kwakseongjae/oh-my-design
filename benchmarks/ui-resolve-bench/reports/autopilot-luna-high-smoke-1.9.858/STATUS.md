# Autopilot Luna/high smoke 1.9.858 — frozen diagnostic

- Source commit: `662a571994ca45211b95537ae85cf0e28707ee48`
- Locked plan SHA-256: `9912a82988c815dc26e7f90c07e09213ac84b3dd1dd7fda23714b620a92d942e`
- Runtime: exact `gpt-5.6-luna/high`, three serial cells
- Retry / replacement / fallback / model substitution / effort substitution: `0`
- Bounded same-mission repair calls: maximum `2` after the initial call
- Provider / model / Cursor calls during preregistration: `0 / 0 / 0`

One Luna/high provider call completed for the landing cell (`647,162 ms`,
input `2,340,317`, cached input `2,246,912`, output `31,133`). The generated
surface received `70/100`, with the objective failures limited to primary-action
uniqueness, reservation state transition, and focus transfer. Local DESIGN.md
and mission proof passed.

The controller then stopped before writing a terminal benchmark record because
its product-tree recomputation excluded installed runtime assets while the
mission proof correctly included them. The root is now permanently
`stopped-preregistered`: completed benchmark cells `0/3`, provider exposures
`1`, repair calls `0`. It must not be resumed, retried, or counted as a valid
terminal cell. The controller now uses the mission's exact tree algorithm and
freezes any post-start controller exception; a fresh epoch is required.
