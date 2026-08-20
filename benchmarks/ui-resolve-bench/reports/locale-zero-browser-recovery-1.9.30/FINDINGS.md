# 1.9.30 findings — browser authority recovered, quality unresolved

## Outcome

The fresh exact-Opus candidate completed provider execution, external
evaluation, and export without retry, resume, or manual product edits.

- Scheduled/attempted/completed denominator: 1/1/1
- Matrix status and validity: `complete` / `valid`
- Objective score: 78/85
- UI-Resolved: false
- Critical gates: 4/6
- Direct headless-browser commands: 0
- Replacement verifier: false

`/tmp/u1930` is frozen. Its product artifact must not be edited, resumed, or
retried.

## Process recovery

- Claude Code: 2.1.217
- exact parent model/effort: `claude-opus-4-8` / `xhigh`
- provider and child exit: 0 / 0
- timeout: false
- wall time: 471,976ms
- uncached input + output tokens: 105,886
- first and last product write: 366,818ms
- final response: present
- product diff: `index.html`
- direct browser commands: 0
- replacement verifier authored: false
- explicit/recoverable/infrastructure/sandbox/cwd errors: 0/0/0/0/0

This closes the process-authority defect observed in 1.9.26 and 1.9.28. The
provider performed no browser acceptance; the independent evaluator remained
the sole browser authority.

## Objective quality result

The candidate passed:

- exact five-locale click and roving-keyboard navigation;
- active panel, body locale, root language, and KO restoration;
- five copy actions and live-status transitions;
- protected command, `12`, `3`, and `DESIGN.md` literals;
- all forbidden locale patterns and distinct locale copy;
- desktop, 390px, and 320px geometry;
- minimum target sizes at every viewport;
- task contract, design grounding, Evidence & Unknown;
- axe serious/critical zero at all four viewports.

It failed two gates.

### 1. Locale terminology oracle was too literal

The English panel used “project folder” where the oracle required the exact
word `repository`. The Japanese panel used `AI コーディングアシスタント`
where the oracle required `コーディングエージェント`.

Both phrases preserve the requested concept and are natural independently
adapted product terminology. Rejecting them is an evaluator ambiguity, not
evidence that the locale handoff is wrong. The next evaluator revision must
accept bounded semantic alternatives while continuing to reject a panel that
omits the concept.

### 2. Wrapped tabs had a real 2px hit-area overlap

At the 200% CSS-zoom surrogate, the first tab row ended at `924px` and the
second began at `922px`. Four control pairs therefore overlapped by exactly
2px. The source used a wrapping flex tablist with `row-gap: 0` and a `2px`
bottom selection border.

This is not a coordinate-rounding false positive. The interactive rectangles
actually intersect, so the same strip can belong to two controls. The
evaluator remains unchanged. The locale activation needs a static responsive
check that wrapped control rows reserve vertical gap greater than or equal to
their selection treatment, or switch to a non-overlapping layout.

## Decision

1.9.30 is `calibration_failed`: provider browser authority is recovered, but
the preregistered 85/85 and six-gate quality contract did not pass.

The next bounded calibration is 1.9.31:

1. replace exact locale synonyms with bounded semantic-alternative groups and
   retain a missing-concept negative mutation;
2. add a static wrapped-control overlap check to the benchmark locale
   activation without granting browser authority;
3. replay the frozen 1.9.30 artifact only for evaluator calibration;
4. keep its genuine 200% geometry failure intact;
5. require the seeded invalid starter to remain rejected.

A fresh provider recovery, if unlocked, uses a new version and output root.
No model, skill, locale-lift, efficiency, or frontier claim follows from this
single failed cell.
