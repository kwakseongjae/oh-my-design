# Versioned Matrix Preparation — 1.9.80 Findings

## Status

**PROVIDER-FREE ACCEPTED**

The matrix controller can now prepare the two exact detached OmD arms accepted
in 1.9.79 without bypassing the locked run plan or copying mutable skill bytes.
Provider generation remained zero.

## Controller delta

Run-matrix plans may declare one optional absolute `vendors_root`. Validation
rejects a relative or malformed root before matrix creation. The controller
forwards the reviewed root to every cell's sandbox preparer, where the existing
1.9.79 controls still enforce:

- path containment;
- exact pinned commit;
- detached HEAD;
- clean and publishable source;
- runtime-native declared skill name;
- opaque condition identity; and
- installed skill hash attestation.

Plans without `vendors_root` retain their previous argument shape exactly.

## Acceptance evidence

- focused vendor-root and two-arm matrix checks: 5/5 passed
- real local detached clone preparation through the matrix controller: passed
- slate/ember task prompt and activation equality: passed
- slate/ember exact source commits and `detached: true`: passed
- slate/ember distinct installed skill hashes: passed
- relative vendor-root rejection: passed
- TypeScript lint: passed
- build: passed
- Node syntax: passed
- `git diff --check`: passed
- provider calls: 0

## Claim boundary

This acceptance proves controller propagation and reproducible preparation
only. It does not measure the 1.9.78 patch effect.

After this acceptance commit, the next step is to freeze and prepare the fresh
18-cell `/tmp/u1980` matrix. Provider execution may open only after that root's
task inputs, source attestations, opaque labels, cell order, controller
checkpoint contract, runtime selector, and capacity probe are locked.
