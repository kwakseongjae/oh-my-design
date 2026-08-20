# Text-geometry oracle scope — 1.9.163

## Outcome

The deterministic evaluator now separates three concerns that were previously conflated:

- `scope_selectors` define the complete surface used for presence, controls, and generated-label checks;
- optional `atomic_scope_selectors` define which visible copy is allowed to fail the atomic-text and token-fragmentation gate;
- optional `compact_copy_selectors` add visible copy that names a related compact control even when that copy is not inside the control element.

Legacy tasks without the new fields retain their exact previous behavior. Historical locked task results are not rescored.

## Why

The research-sample v10 holdout used the full decision-context root as a text-geometry scope. Its 40-character mobile hero heading was therefore classified as short atomic text, despite a separately declared 34/38 mobile display role and a contract that only required identifiers, short labels, and controls to remain on one line. All six valid provider cells failed UI-Resolved on that mismatch.

The fix narrows future oracles rather than teaching a design skill to shrink, nowrap, or rewrite a valid multiline heading for benchmark points.

## Provider-free acceptance

- focused browser contract: `6/6` assertions pass;
- a multiline display heading inside the broad surface is excluded from the atomic gate when explicit atomic scopes are supplied;
- wrapped evidence and relational compact-control copy inside explicit scopes remain failures;
- missing explicit atomic scopes fail closed;
- legacy scope-only behavior still observes the same heading;
- all existing `21` task contracts validate;
- evaluator and task-contract syntax checks pass.

## Compatibility

No evaluator weight, score threshold, task result, task prompt, model output, or provider artifact changed. New fields are optional and will be used only in future provider-zero task locks.
