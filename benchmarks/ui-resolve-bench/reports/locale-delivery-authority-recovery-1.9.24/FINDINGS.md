# 1.9.24 findings — delivery recovered, locale oracle exposed false negatives

## Outcome

The fresh candidate recovery completed normally but did not satisfy the frozen
85/85 quality gate.

- Scheduled/attempted/valid complete: 1/1/1
- Timeout: 0
- Final response: present
- Replacement verifier: 0
- Objective score: 72/85
- UI-Resolved: false
- Calibration decision: failed under the frozen 1.9.24 oracle

`/tmp/u1924` is complete and remains immutable. 1.9.24 is not retroactively
promoted.

## Process recovery

The verification-authority and delivery contract fixed the 1.9.23 binding
failure:

- exact parent model: `claude-opus-4-8` / `xhigh`
- child exit: 0
- wall time: 450,127ms
- uncached input + output tokens: 99,905
- first product write: 355,947ms
- last product write: 421,593ms
- final result: 450,127ms
- replacement verifier authored: false
- Agent calls: 0
- infrastructure/sandbox/cwd errors: 0
- recoverable tool errors: 2
- product diff: `index.html`

Relative to the stopped 1.9.23 candidate, wall time fell by 50.0%, uncached
tokens by 41.4%, and the run produced a final response without a replacement
verification program. The bounded process contract is recovered.

## What the candidate got right

The frozen evaluator confirms:

- every required locale pattern passes;
- every forbidden cross-locale pattern passes;
- the command, 12, 3, and `DESIGN.md` are preserved in all five locales;
- all five locale panels are distinct and carry exact `lang` values;
- navigation among five tabs and restored KO state pass;
- all four responsive geometry profiles pass with no clipped or overlapping
  controls;
- design grounding passes;
- Evidence & Unknown passes with zero unsupported claims;
- axe serious/critical violations are zero at every viewport.

There is no observed linguistic-rule, evidence, design-token, geometry, or axe
failure in this recovery artifact.

## Frozen failures and oracle diagnosis

The 72/85 result comes from three evaluator false negatives and one ambiguous
task contract:

1. **Roving tabs.** The implementation uses the standard ARIA tabs pattern:
   one selected tab has `tabindex="0"` and the other four use `-1`, with arrow
   navigation. The generic keyboard collector's selector includes every
   `button` before applying the `tabindex != -1` branch, so it incorrectly
   expects all five tabs in the sequential Tab order.
2. **Live-region initial state.** Each copy result uses an initially empty
   `role="status" aria-live="polite"` and announces a localized success after
   activation. The oracle requires the pre-action status to be non-empty even
   though the user contract only requires a changed, announced result.
3. **Document language.** The initial and restored panel is KO and the
   implementation correctly sets the document root to `lang="ko"`, then
   updates it as locale tabs change. The task metadata freezes `locale: en` and
   only checks that static value.
4. **Navigation landmark.** The implementation retains a header and brand link
   but removes an otherwise empty `<nav>`. The user prompt protects the five
   tabs, panels, copy actions, facts, and responsive behavior; it does not
   require a navigation landmark. The hidden oracle does.

The first three are evaluator defects. The fourth is an underspecified oracle
that should either be stated in the prompt or removed for this single-purpose
handoff.

## Decision

1.9.24 remains `calibration_failed` because its frozen evaluator scored 72/85.
The next bounded patch is evaluator-only:

- enumerate actual sequential-focus controls using computed `tabIndex >= 0`;
- test arrow-key reachability separately for a roving tablist;
- allow an empty initial live region when activation produces a non-empty,
  changed localized result;
- make document language track the active locale and verify it during the
  journey;
- remove the unstated navigation landmark requirement from this task;
- bump the evaluator/task suite contract and mutation-test all four cases.

Retained 1.9.24 replay may calibrate those changes but cannot change this
decision. Fresh provider generation waits until the new oracle is frozen.
