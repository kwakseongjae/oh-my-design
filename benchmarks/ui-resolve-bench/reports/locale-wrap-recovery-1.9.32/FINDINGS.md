# 1.9.32 findings — geometry recovered, hidden clipboard marker failed

## Outcome

The fresh exact-Opus candidate completed provider execution, external
evaluation, and export without retry, resume, or manual product edits.

- Scheduled/attempted/completed denominator: 1/1/1
- Matrix status and validity: `complete` / `valid`
- Objective score: 80/85
- UI-Resolved: false
- Critical gates: 5/6
- Direct headless-browser commands: 0
- Replacement verifier: false

`/tmp/u1932` is frozen. Its product artifact must not be edited, resumed, or
retried.

## Process result

- Claude Code: 2.1.217
- exact parent model/effort: `claude-opus-4-8` / `xhigh`
- provider and child exit: 0 / 0
- timeout: false
- wall time: 517,279ms
- uncached input + output tokens: 113,725
- first product write: 377,911ms
- last product write: 480,965ms
- final response: present
- product diff: `index.html`
- direct browser commands: 0
- replacement verifier authored: false
- explicit/recoverable/infrastructure/sandbox/cwd errors: 0/0/0/0/0

The zero-browser process contract recovered again under the calibrated task.

## Quality result

The candidate resolved the 1.9.30 layout defect:

- desktop, 390px, 320px, and 200% surrogate geometry all pass;
- no horizontal overflow, clipped control, or overlapping hit area;
- minimum control targets pass;
- all five locale click and roving-keyboard states pass;
- bounded locale concepts, forbidden terms, and protected literals pass;
- root and panel languages pass;
- task contract, accessibility, design grounding, and Evidence & Unknown pass;
- axe serious/critical is zero at every viewport.

The only failed state was `every_action_marks_copied`. Every localized status
changed to a non-empty success message, but the evaluator observed
`data-copied=null` on all five buttons.

## Standards diagnosis

The task asks the interface to copy the protected command and announce a
localized result. It does not require a `data-copied` implementation marker.
The marker existed in the starter but is not a `data-bench` hook or a
user-facing behavior contract.

A separate read-only browser diagnostic granted standard `clipboard-read` and
`clipboard-write` permissions, exercised all five visible buttons, and read
the clipboard after each action. Every locale contained the exact protected
command:

`npx northstar-ui@1.4 setup --agent claude-code`

Every corresponding live status also changed to its localized success text.
The product behavior is therefore correct; the current oracle is coupled to a
starter implementation detail.

## Decision

1.9.32 remains `calibration_failed` under its preregistered schema `0.3`
decision. The result is not retroactively promoted.

The next bounded calibration replaces the hidden marker with platform
behavior:

1. grant clipboard permissions only inside the independent evaluator context;
2. clear clipboard state before each locale action;
3. read the clipboard after the click and require the exact protected command;
4. keep the localized non-empty live-status transition;
5. add negative mutations for no-write, wrong-value, status-only, and
   attribute-only implementations;
6. replay the unchanged 1.9.32 artifact and invalid starter.

Provider browser authority remains zero. No model, skill, locale-lift,
efficiency, or frontier claim follows from this single failed cell.
