# Pricing practitioner gallery — 1.9.98 findings

Status: **accepted; owner judgment locked, candidate not promoted**.

- source: immutable 1.9.97 selection, three unresolved pricing pairs;
- reviewer hash: `35b8fbb03626391d`;
- exact intake: 1 family, 3 comparisons, 12 axis judgments;
- schema, methodology epoch, reviewer hash, comparison IDs, trials, and axis
  coverage all matched the private reveal;
- missing, duplicate, repaired, rescored, or relabelled responses: 0.

The blind owner result was:

| Axis | 1.9.95 candidate | preceding control | tie | both fail |
| --- | ---: | ---: | ---: | ---: |
| Functionality | 0 | 0 | 3 | 0 |
| Usability | 0 | 2 | 1 | 0 |
| Fidelity | 1 | 1 | 1 | 0 |
| Ship preference | 0 | 2 | 1 | 0 |

The adaptive-data-surface addition therefore produced no observed functionality
lift. The preceding control was preferred for usability and shipping in two of
three trials and never lost either axis. Fidelity was mixed. Because this is
one practitioner on an uncertainty-selected family, it does not establish a
general superiority claim. It is sufficient for the local hill-climb decision:
do not promote the 1.9.95 skill delta and restore the preceding contract.

The automated modal matched the practitioner on 0/3 functionality comparisons,
0/2 comparable usability comparisons, 2/3 fidelity comparisons, and 0/3 ship
comparisons. The automated judge remains triage-only and cannot decide skill
promotion.

The immutable intake artifacts are `/tmp/u1998-intake/summary.json` and
`/tmp/u1998-intake/lock.json`.
