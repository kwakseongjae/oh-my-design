# 1.9.33 calibration — clipboard behavior, not a hidden marker

## Outcome

The evaluator-only calibration is complete. It generated no new model output
and does not alter the frozen 1.9.32 score or decision.

- Source commit: `3990ff1`
- Evaluator schema: `0.3` → `0.4`
- Locale task contract: `0.3.0` → `0.4.0`
- Retained 1.9.32 artifact replay: 85/85, all six critical gates
- Retained 1.9.30 overlap control: 83/85, responsive gate still fails
- Seeded invalid starter: 57/85, automated gate fails
- Provider generation: none
- 1.9.32 retroactive promotion: none

## Clipboard standards correction

For the locale task only, the independent browser evaluator now:

1. grants `clipboard-read` and `clipboard-write` to its localhost origin;
2. clears clipboard state before each locale action;
3. records the value before and after the click;
4. requires the after value to equal the protected command exactly;
5. separately requires a non-empty localized live-status transition.

The starter-only `data-copied` attribute remains observable as
`copied_marker`, but it has no scoring authority. Provider browser authority
remains zero; these permissions exist only inside the external evaluator.

## Fail-closed mutations

The pure locale oracle rejects:

- no clipboard write;
- a wrong clipboard value;
- a localized success status without a write;
- `data-copied="true"` without a write.

The exact command stays in the task's protected-literal ledger and is now also
the explicit `clipboard_literal` in the journey contract.

## Real-browser replay

### Retained 1.9.32 artifact

The unchanged product artifact passes:

- 85/85 deterministic points;
- all six critical gates;
- exact clipboard value and localized status in every locale;
- all click and roving-keyboard locale states;
- desktop, 390px, 320px, and 200% geometry;
- axe serious/critical zero;
- Evidence & Unknown.

### Retained 1.9.30 overlap control

The unchanged overlap artifact scores 83/85. Clipboard, locale content, and
state journey pass; the real 200% control overlap remains the only failed
critical gate. The new clipboard oracle therefore does not hide responsive
defects.

### Seeded invalid starter

The starter remains 57/85 and fails state journey, responsive, accessibility,
and Evidence & Unknown. Its clipboard action passes, but the unrelated known
invalid signals remain rejected.

## Verification

- focused benchmark tests: 27/27
- full root tests: 217 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- Node syntax: pass
- JSON and diff checks: pass
- real-browser retained 1.9.32 artifact: 85/85
- real-browser retained overlap control: 83/85, layout fail retained
- real-browser seeded starter: 57/85, fail as expected
- clipboard negative mutations: fail as expected
- clean prepared activation: task `0.4.0`, publishable source

## Decision

Mark 1.9.33 `calibration_complete`. The locale task and evaluator schema `0.4`
are suitable for a fresh provider recovery under a new preregistration and
root. That run must preserve zero provider browser authority, resolve all six
objective gates, and copy the command through the platform API.

No superiority, locale-lift, model, skill, efficiency, or frontier claim
follows from this evaluator-only calibration.
