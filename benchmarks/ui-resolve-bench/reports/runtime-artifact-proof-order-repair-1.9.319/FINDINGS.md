# Runtime reflow artifact proof-order repair — 1.9.319

Status: **provider-free repair accepted; 1.9.317 remains infrastructure-invalid**

The first clean-baseline replacement cell, `luna-load-r1-control-clean`, changed the product but timed out at 900,026ms with no final response. Its event stream contains no usage event, so no token total is inferred. No score was produced. The remaining five cells were never started.

## Root cause

Two policy defects formed a deadlock:

1. `isPreStaticProof` classified any PreToolUse payload by its text, including an `apply_patch` whose artifact content mentioned static verification. The artifact update was therefore rejected as if it were a second proof command.
2. Static proof required a fully measured 390/320/200% closure artifact before the one browser proof that could honestly produce those measurements.

The model created a valid locked inventory, changed `index.html`, and then spent the remaining wall time trying to satisfy an impossible ordering. This is infrastructure-invalid evidence, not a control loss or timeout-quality failure.

## Repaired executable order

1. lock carrier and row inventory before the first product edit;
2. preserve the same inventory before static proof;
3. run one static proof;
4. run one browser proof and measure 390px, 320px, and 200%;
5. update the existing artifact with measured outcomes;
6. validate full closure at Stop, then mark delivery ready.

Only `Bash` can now be classified as a static proof command. Artifact patches containing proof vocabulary remain artifact edits. A Stop with open or changed closure fails closed; valid measured closure makes the already-complete static/browser state deliverable.

## Acceptance

- executable proof-policy state/hook/runtime: 37/37 passed;
- provider-neutral/prepare/run/Cursor/bench: 159/161 passed; the two unchanged failures are external Taste and UI UX Pro vendor directories without Git metadata;
- TypeScript lint, build, and diff check: passed;
- provider calls during repair: 0;
- 1.9.317 provider calls retained: 1; quality score excluded; token usage unavailable.

No skill, model, reliability, efficiency, or frontier claim follows. A new exact policy pin and a fresh preregistered root are required before any more provider cells run.
