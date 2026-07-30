# Adaptive data surface rollback — 1.9.99 findings

Status: **accepted; preceding skill contract restored**.

The current `omd-apply` skill is byte-identical to exact control commit
`c285d25515ec8959e66ceeb7703417aad531cd95`. The adaptive-data-surface closure,
its interactive-closure exception, acceptance bullet, and current-contract test
assertions were removed. Historical 1.9.95–1.9.98 evidence remains intact.

This is a hill-climb rollback, not a claim that responsive data-surface guidance
is generally harmful. In the locked pricing family:

- functionality was tie in 3/3 blind owner comparisons;
- usability favored the preceding control 2/3 with one tie;
- fidelity split one candidate, one control, one tie;
- ship preference favored the preceding control 2/3 with one tie.

Validation:

- exact control skill diff: pass;
- OmD install-channel tests: 36/36 pass;
- focused portable skill tests: 3/3 pass for Codex, Cursor, and Claude;
- the combined test invocation also passed 52/54 checks; its two unrelated
  competitor-fixture checks were blocked because the local `/tmp` Taste and UI
  UX Pro Max copies were not Git repositories;
- TypeScript: pass;
- build: pass;
- provider calls: 0.

The useful responsive behavior remains covered by the existing same-route
overflow acceptance and semantic-table guidance. A future replacement must
start from a new holdout and show human usability or ship lift without losing
functionality; these seen pricing examples cannot be reused to validate it.
