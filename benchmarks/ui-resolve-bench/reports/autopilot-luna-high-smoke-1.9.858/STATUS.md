# Autopilot Luna/high smoke 1.9.858 — preregistered

- Source commit: `662a571994ca45211b95537ae85cf0e28707ee48`
- Locked plan SHA-256: `9912a82988c815dc26e7f90c07e09213ac84b3dd1dd7fda23714b620a92d942e`
- Runtime: exact `gpt-5.6-luna/high`, three serial cells
- Retry / replacement / fallback / model substitution / effort substitution: `0`
- Bounded same-mission repair calls: maximum `2` after the initial call
- Provider / model / Cursor calls during preregistration: `0 / 0 / 0`

This fresh epoch tests the controller-owned closed repair loop introduced after
the failed 1.9.857 diagnostic. Each objective failure must be written as a
hash-bound controller receipt and returned to the same active mission. Initial
and repair artifacts, wall time, and tokens remain separate and additive.

The epoch is diagnostic and non-promotional. It may proceed only after a clean
prepare/audit and exact named in-app browser admission. Every valid terminal
failure remains in the denominator; no retry, replacement, fallback, or stale
workspace reuse is allowed.
