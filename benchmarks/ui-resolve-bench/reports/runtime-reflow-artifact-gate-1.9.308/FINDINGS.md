# Runtime reflow artifact gate — 1.9.308

## Outcome

The installed proof policy now fail-closes product edits and static verification around a versioned `.omd/reflow-closure.json` artifact.

This patch does **not** promote a skill candidate or claim a UI quality gain. It removes the specific enforcement gap observed through 1.9.307: a model could describe an inventory and closure in prose or shell output without materializing a stable, machine-checkable record.

## Enforced contract

- Before the first product edit, the artifact must use schema `0.1`, contain ordered non-empty carrier and row IDs, bind every carrier to existing rows, and lock an exact SHA-256 inventory digest.
- Once editing begins, a changed inventory digest is denied.
- Before static proof, every registered carrier and row must report pass at 390px, 320px, and 200% reflow.
- The closure manifest must match the locked digest and exact registered/measured counts, with zero unresolved carriers and rows.
- The managed Claude Code and Codex proof-policy commands opt into this gate with `OMD_PROOF_POLICY_REFLOW_ARTIFACT=1`.
- The proof policy remains an explicit install option; ordinary installs without `--proof-policy` are unchanged.

## Verification

- Proof-policy state, mapper, runtime, CLI install, and doctor: 106/106 tests green.
- Canonical/experimental skill parity: 1/1 focused test green.
- Benchmark host-policy render parity: 2/2 focused tests green.
- Matrix prepare/resume contracts: 30/30 tests green.
- Type-check: green.
- Production build: green.
- `git diff --check`: green.
- Provider calls: 0.

## Next bounded experiment

Pin this source as a candidate, prepare fresh detached installs, and run it against the same exact control on a new unseen topology. Quality promotion still requires preregistered Reliability@3, zero unresolved outcomes, no paired loss, and bounded wall/token cost.
