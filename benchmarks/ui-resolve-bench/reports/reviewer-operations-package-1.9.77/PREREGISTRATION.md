# Frozen-epoch reviewer operations package — 1.9.77

Status: **ACCEPTED; provider-free implementation complete**.

## Bounded problem

Schema `0.3` can collect and grade valid preference evidence, but an operator
still has to run one gallery command at a time, manually separate public
galleries from reveal maps, infer missing reviewer-task units, and trust that
submitted JSON was not changed after intake.

## Frozen implementation

- one strict round plan declares a methodology epoch, opaque reviewer slots,
  and frozen task run directories;
- a secret salt is read from a file, never a command-line value;
- preparation creates public galleries and private reveals in separate output
  roots;
- a private round manifest binds every reviewer slot, task, review unit,
  assignment hash, and reveal hash;
- preparation is staged and refuses to overwrite any destination;
- intake accepts only expected schema `0.3` review units and private reveals;
- incomplete intake writes deterministic progress and exact missing
  reviewer-task units without calculating preference;
- complete intake runs the accepted 1.9.76 aggregator;
- a lock manifest records judgment, reveal, round-manifest, and aggregate
  hashes;
- rechecking an existing lock passes only when every hash is unchanged.

No provider, reviewer simulation, deterministic score, visual result, task, or
historical preference changes.

## Acceptance

Pass only when:

- a 2-task×2-reviewer plan creates four separate public galleries and four
  private reveals;
- the same reviewer hash is stable across tasks while review-unit IDs differ;
- the public root contains no reveal maps, raw reviewer identifiers, salt, or
  candidate labels;
- missing one judgment reports 3/4 complete and the exact remaining unit;
- an unexpected, duplicate, task-mismatched, or schema-`0.2` judgment fails;
- complete intake writes aggregate and lock artifacts;
- unchanged lock recheck passes and one-byte judgment mutation fails;
- destination overwrite and reveal-inside-gallery paths fail before work;
- focused tests, lint, build, Node syntax, and diff checks pass.

## Claim limit

The dry run uses synthetic judgments only to validate operations. It does not
replace real practitioners or satisfy Diagnostic, Preview, Verified, or overall
benchmark publication requirements.
