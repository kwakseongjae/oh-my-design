# 1.9.745 — terminal browser runner

Status: **PROVIDER_FREE_CONTRACT_PASS**

The 1.9.744 council-on cell resolved the product but mistyped a long terminal browser command and then searched for the executable before retrying. The repair moves artifact, product, helper, redirect, and browser-harness wiring into one shipped shell entrypoint.

Agents now execute only:

- plan: `OMD_REFLOW_MODE=plan sh <current-skill-dir>/scripts/reflow-browser-runner.sh`
- acceptance: `sh <current-skill-dir>/scripts/reflow-browser-runner.sh`

The runner reads the locked product path from the sealed artifact, derives its sibling helper and Python source, and performs one `exec browser-harness`. The proof classifier recognizes the runner as browser work, while `command -v browser-harness` is explicitly a recovery probe rather than a second static closure.

Provider-free checks passed: 53 proof/skill/runner tests, 43 install-channel tests across Claude Code, Codex, and OpenCode, shell syntax, TypeScript, and the full suite at 794 passed / 3 skipped. No model was called.

The next evidence step uses only fresh tasks and requires objective resolution and proof compliance together; the 1.9.744 task will not be replayed.
