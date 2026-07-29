# Versioned Skill Control — 1.9.79 Preregistration

## Purpose

1.9.78 changed the OmD apply contract. A Raw DESIGN.md comparison cannot
identify whether that patch improved or harmed OmD because Raw changes both the
skill and the activation path. The next denominator therefore requires two
versioned OmD variants with the same declared skill name and activation:

- control: canonical `omd-apply` at
  `1aa81ddb1aa15defbd12b4af36b4dd6784131c9f`
- candidate: canonical `omd-apply` at
  `c285d25515ec8959e66ceeb7703417aad531cd95`

The only intended skill delta is the accepted 1.9.78 visual equity ledger and
closure plus its empty-ledger/precedence corrections.

## Provider-free infrastructure hypothesis

The sandbox preparer can install a pinned historical local skill checkout as a
reviewed competitor without:

- copying an unversioned `/tmp` snapshot into a scored workspace;
- changing its declared skill name or activation;
- accepting a dirty source;
- confusing the historical commit with the current repository commit; or
- exposing a special prompt that reveals control/candidate identity.

## Allowed implementation delta

- one versioned OmD competitor entry in
  `benchmarks/ui-resolve-bench/competitors.json`;
- preparation tests proving the pinned commit, clean-source attestation,
  identical activation, and distinct skill hashes;
- version-control/provenance support only if the existing vendor mechanism
  cannot express this contract safely;
- this report's provider-free findings and summary.

No task, starter, evaluator, score, provider, timeout, retry, or fallback change
is allowed.

## Provider-free acceptance

1. Prepare the historical control from a clean detached checkout at the exact
   preregistered commit.
2. Prepare the current candidate from the clean current commit.
3. Both manifests report declared skill `omd-apply`, the same activation, the
   correct source commit, clean/publishable source, and different skill hashes.
4. The installed prompt does not say “old,” “new,” “control,” “candidate,”
   `1.9.77`, or `1.9.78`.
5. Existing competitor, sandbox, Cursor adaptation, lint, build, syntax, and
   diff checks remain green apart from the already-known missing external
   vendor Git-metadata fixtures.
6. Provider generation count remains zero.

## Later live matrix (not opened by this preregistration)

After provider-free acceptance and a clean commit, prepare a fresh root. Freeze:

- tasks: onboarding `0.3.0`, incident `0.4.0`, locale `0.5.0`;
- conditions: historical OmD control and 1.9.78 OmD candidate;
- trials: 3 per task and condition, 18 cells total;
- provider/model: one exact approved selector and reported label;
- global serial execution with durable one-cell checkpoints;
- balanced order, 900-second cell timeout, no retry/fallback/substitution;
- retained 120–125 second inter-cell pacing;
- deterministic eligibility and blind preference as separate evidence planes.

Raw DESIGN.md may be added in a later anchor matrix. It is excluded from the
patch-isolation denominator.

## Stop conditions

- Reject a dirty, unpinned, or display-only historical source.
- Reject prompt or artifact labels that reveal version identity to the model or
  blind reviewer.
- Do not reuse, resume, rescore, or relabel `/tmp/u1972`.
- Do not run a provider before provider-free acceptance is committed.
- Do not claim preference lift without a fresh blind practitioner round.

