# Carrier inventory closure — 1.9.297

## Hypothesis

An immutable, pre-edit carrier inventory plus a count- and hash-bound closure
manifest will prevent a model from declaring static closure after measuring
only the primary visual carrier.

## Sole delta

- Add `carrier_inventory` to the existing reflow work packet.
- Lock ordered carrier/row bindings with `inventory_sha256` before product edit.
- Require the existing consolidated static closure command to assert that all
  registered carriers have 390px, 320px, and 200% measurements and zero
  unresolved carriers.

No new phase, verifier, benchmark selector, task literal, token, or browser
attempt is introduced.

## Deterministic acceptance

- OmD apply contract: 9/9 pass.
- TypeScript lint: pass.
- CLI build: pass.
- Fresh Codex install contains the inventory and closure-manifest contract.
- Diff check: pass.

This is contract-complete, not quality-promoted. The next step is an exact
source pin followed by a fresh unseen topology and preregistered Reliability@3.
