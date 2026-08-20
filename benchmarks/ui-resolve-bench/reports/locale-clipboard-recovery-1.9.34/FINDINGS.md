# 1.9.34 findings — clipboard passed, scroll region inaccessible

## Outcome

The fresh exact-Opus candidate completed provider execution, external
evaluation, and export without retry, resume, or manual product edits.

- Scheduled/attempted/completed denominator: 1/1/1
- Matrix status and validity: `complete` / `valid`
- Objective score: 79/85
- UI-Resolved: false
- Critical gates: 5/6
- Direct headless-browser commands: 0
- Replacement verifier: false

`/tmp/u1934` is frozen. Its product artifact must not be edited, resumed, or
retried.

## Process result

- Claude Code: 2.1.217
- exact parent model/effort: `claude-opus-4-8` / `xhigh`
- provider and child exit: 0 / 0
- timeout: false
- wall time: 530,552ms
- uncached input + output tokens: 121,357
- first product write: 371,381ms
- final response: present
- product diff: `index.html`
- direct browser commands: 0
- replacement verifier authored: false
- explicit/recoverable/infrastructure/sandbox/cwd errors: 0/0/0/0/0

The process, browser-authority, delivery, and clipboard-oracle contracts all
bound correctly.

## Quality result

The candidate passed:

- exact Clipboard API command copy and localized status in all five locales;
- all click and roving-keyboard locale states;
- bounded locale concepts, forbidden terms, and protected literals;
- root and panel language synchronization;
- all four responsive geometry profiles;
- 200% no-overflow, no-clipping, and no-overlap;
- task contract, design grounding, and Evidence & Unknown.

It failed only accessibility.

## Actual accessibility defect

The command block uses `overflow-x: auto` and `white-space: nowrap`. At 390px,
320px, and the 200% surrogate it becomes a scrollable region, but the `<code>`
element has no explicit keyboard focus target or focus treatment.

Consequences:

- axe reports serious `scrollable-region-focusable` at all three constrained
  viewports;
- Chrome's responsive native focus behavior introduces the scroll region into
  Tab traversal without the evaluator's declared control ID;
- the region has no authored `:focus-visible` delta;
- keyboard traversal and axe serious/critical gates fail together.

This is not an evaluator ambiguity. A horizontally scrollable command is
content the user may need to inspect, so it must contain focusable content or
be explicitly focusable with a visible focus state. The external evaluator
and accessibility gates remain unchanged.

## Decision

1.9.34 is `calibration_failed`. The next bounded source change adds a static
scrollable-region accessibility contract to the locale task/activation:

- any `overflow: auto|scroll` region that can contain clipped content must
  contain a reachable control or use an explicit keyboard focus target;
- an explicit target must have a visible `:focus-visible` treatment and a
  useful accessible name where the element's content does not provide one;
- do not make non-scrollable decorative containers unnecessary Tab stops;
- keep provider browser authority at zero.

A retained replay may demonstrate the frozen defect, but only a fresh provider
run under a new version/root can recover the lane. No model, skill,
locale-lift, efficiency, or frontier claim follows from this failed cell.
