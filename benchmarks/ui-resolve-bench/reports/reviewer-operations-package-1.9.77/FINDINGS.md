# Frozen-epoch reviewer operations package — 1.9.77 findings

Status: **accepted, provider-free**.

## One plan prepares the whole round

`prepare-review-round.mjs` accepts one private schema `0.1` plan containing a
frozen methodology epoch, opaque reviewer IDs, and task run directories. It
stages every reviewer×task gallery before publishing three separate outputs:

- public galleries, addressed only by `slot-###` and task ID;
- private reveal maps, named by review-unit ID;
- a private round manifest binding reviewer, task, assignment hash, and reveal
  hash.

The blind salt is read from a file by both the round preparer and gallery
builder. Its value is never placed in a subprocess command line or copied into
the public tree.

The 2-task×2-reviewer dry run produced four galleries and four reveals. Each
reviewer retained one stable hash across both tasks while receiving two
different review-unit IDs. A recursive public-tree inspection found no raw
reviewer ID, salt, or candidate label.

## Intake is resumable but preference is not partial

`intake-review-round.mjs` checks every submitted judgment against the private
round manifest and reveal hashes. With three of four expected submissions it
reported:

- completed: 3;
- expected: 4;
- remaining: 1;
- the exact slot, task, and review-unit ID still needed.

It did not write an aggregate or lock. After the final judgment arrived, intake
ran the accepted schema `0.3` aggregator and wrote the preference artifact plus
an immutable lock over the round manifest, aggregate, judgments, and reveals.

Re-running unchanged input returned `lock_status=unchanged`. Changing one valid
judgment choice caused the existing lock comparison to fail before any new lock
was accepted.

## Fail-closed boundaries

The dry run rejected:

- unexpected and duplicate judgment review units;
- task-version mismatch;
- legacy schema `0.2`;
- an existing destination;
- a private reveal root nested inside the public gallery root.

Preparation uses a temporary staging root and removes it whether the operation
succeeds or fails. No provider or synthetic reviewer generated product output.
The synthetic judgment files exist only inside unit-test temporary directories.

## Validation

- focused gallery, aggregation, and reviewer-operations tests: 18/18;
- 2×2 public/private preparation: pass;
- 3/4 progress and exact resume unit: pass;
- complete aggregate and lock: pass;
- unchanged recheck / one-choice mutation: pass / fail closed;
- TypeScript, build, four Node syntax checks, and diff check: pass;
- provider generation: zero.

## Human boundary

The repository can now prepare, distribute, resume, aggregate, and lock a real
review round. The next missing input is actual practitioner judgment. No
Diagnostic, Preview, Verified, OmD preference, or public rank claim exists
until those human exports are collected under the frozen epoch.
