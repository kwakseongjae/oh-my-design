# Access review task contract — 1.9.100 findings

Status: **accepted; unseen family ready for a current-skill baseline**.

`access-review-v0.1` adds a compact security-team workflow without reusing the
seen pricing examples. It runs through the existing `dashboard-v1` evaluator,
so the task expands coverage without moving the scoring target toward a
candidate skill rule.

The first diagnostic starter run caught two fixture defects:

- muted text measured just below the required contrast boundary;
- the evidence-honesty pattern read ticket copy (`PRM-104 requests`) as a
  fabricated “104 requests” metric.

The task data was corrected at the smallest boundary: muted text changed to
`#626C67` (4.77075:1 against the paper surface), and the exact ticket sentence
was registered as known evidence. No evaluator, skill, weight, or historical
result changed. That diagnostic root is not reused as a denominator.

The fresh root `/tmp/u19100-access-starter-v2` passed:

- deterministic score: 85/85;
- critical gates: 6/6;
- filter, disclosure, and acknowledgement journeys: exact;
- desktop, 390px, 320px, and 200% zoom-surrogate geometry: no overflow,
  clipped controls, or overlapping controls;
- keyboard traversal and visible in-view focus: pass at every viewport;
- axe serious/critical findings: 0;
- unsupported claims: 0;
- focused benchmark contracts: 4/4;
- TypeScript and build: pass;
- provider calls: 0.

Immutable input identity:

- starter SHA-256:
  `95da4fc7acca0cd95809c31c72ad373a42d8e5b4f2c17a9bd2dee4d9e559bc84`;
- prompt SHA-256:
  `a3041c9fc7e21a32c0f4d026685ed02095dcbf19bc3d383221559ac617392142`.

The result proves only that the new task is measurable and internally
consistent. It does not establish that the current skill improves the task or
that any generated output is preferable. The next valid step is an exact,
versioned current-skill Reliability@3 baseline.
