# Versioned Skill Control — 1.9.79 Findings

## Status

**PROVIDER-FREE ACCEPTED**

The benchmark can now isolate the 1.9.78 `omd-apply` patch from the preceding
OmD skill without changing the task, declared skill, activation, runtime
adapter, or product starter. Provider generation remained zero.

## Locked arms

Two private controller mappings point to exact clean detached checkouts:

- `omd-portable-slate` → `1aa81ddb1aa15defbd12b4af36b4dd6784131c9f`
- `omd-portable-ember` → `c285d25515ec8959e66ceeb7703417aad531cd95`

The opaque IDs carry no old/new, control/candidate, or version semantics. Both
arms expose the same user-visible label and activation and install the same
runtime-native skill name:

- Codex: `omd:apply`
- Cursor: `omd-apply`

The preparer rejects a vendor checkout whose HEAD is attached even when the
branch is clean and points at the exact pinned commit. Successful manifests
attest `detached: true`, the exact source commit, a clean status, and a
publishable source.

## Acceptance evidence

- opaque paired-preparation and attached-branch rejection tests: 2/2 passed
- Codex and Cursor paired preparation: passed
- paired core prompt, activation, and instructions: byte-identical per runtime
- path, prompt, instructions, and serialized-manifest identity leak scan:
  passed
- TypeScript lint: passed
- build: passed
- independent review: BLOCK 0 / WARN 0
- provider calls: 0

Manual fresh preparation reproduced the fixed source commits and distinct
installed skill hashes:

| Runtime | Slate SHA-256 | Ember SHA-256 |
| --- | --- | --- |
| Codex | `ea2966e52a59e4ea52ac10451c333ebc8d22182cb472ba5a0cacf4c367547da1` | `a8128ccca897a52a89d21d7c790b6b382cc8579e6769a4f1ad623a3b641486e4` |
| Cursor | `793eefab03fb0563a017fe370c8e05b93941aae83e7c4420d8ab5b9c667920b5` | `d7a890ac08f8a4cce8c541b186039c9fcd4245a363f7f97132a2bbf8f46f52d5` |

The broader benchmark-file suite still has the two previously known invalid
external Git-metadata fixtures. The two new versioned-control tests pass and
do not widen that existing failure set.

## Claim boundary

This acceptance proves provenance, identity neutrality, and reproducible
installation only. It does not prove that 1.9.78 improves practitioner
preference.

The next valid live denominator is the preregistered 18-cell matrix:
onboarding `0.3.0`, incident `0.4.0`, and locale `0.5.0`, each run with both
opaque OmD arms for three trials under one fixed provider. Raw DESIGN.md stays
outside this patch-isolation denominator. Preference claims remain closed
until fresh artifacts pass deterministic eligibility and a blind practitioner
round.
