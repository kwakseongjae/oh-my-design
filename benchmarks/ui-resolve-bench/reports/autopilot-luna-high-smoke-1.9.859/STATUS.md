# Autopilot Luna/high smoke 1.9.859 — preregistered

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

This smoke remains diagnostic and non-promotional. It may proceed only after a
clean prepare/audit and exact named in-app browser admission. Valid terminal
failures remain in the denominator and may not be retried or replaced.
