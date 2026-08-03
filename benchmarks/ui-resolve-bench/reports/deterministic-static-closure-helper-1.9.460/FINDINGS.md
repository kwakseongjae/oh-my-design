# Deterministic static closure helper — 1.9.460

Status: **provider-free repair implemented; exact pin and unseen transfer remain pending**.

The 1.9.459 radiotherapy candidate repaired the UI and accessibility contract at 85/85, but lost system proof by authoring and debugging an ad-hoc post-edit static script. This repair moves that work before the product edit. The reflow artifact now locks a declarative `static_closure_manifest` containing the product path, required and forbidden literals, forbidden patterns, and exact literal cardinalities.

After the single planned product edit, the only permitted static command is the shipped `reflow-artifact.mjs static-close` helper. It reads the locked product file once, records one passed or failed attempt, refuses a second invocation, and prevents finalization unless that one deterministic attempt passed. A failed attempt may be followed by a safe product correction and terminal browser accounting, but the run remains proof-noncompliant and cannot be made green by rerunning or repairing the verifier.

The canonical and experimental skills now share the same static-closure contract; the experimental copy differs only by its decision-context hierarchy paragraph. No task selector, task fact, provider-specific instruction, or benchmark answer was added.

Validation:

- reflow artifact helper: 19/19, including failed-attempt persistence through the CLI;
- OmD apply contract: 9/9;
- proof policy, trace, and runtime hook: 62/62;
- targeted benchmark/candidate contract: 31/31;
- TypeScript and diff checks: green.

No model provider was called. This repair is not promoted on its own. The next steps are an exact immutable source pin and a genuinely unseen task transfer under the same runtime-bound Reliability@3 protocol.
