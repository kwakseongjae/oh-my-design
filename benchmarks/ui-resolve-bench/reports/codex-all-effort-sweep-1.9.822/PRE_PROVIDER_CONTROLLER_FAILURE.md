# 1.9.822 pre-provider controller failure

- Status: frozen before provider exposure
- Provider/model/browser/Cursor/Claude calls for the failed matrix invocation: 0/0/0/0/0
- Error: `prepared-matrix-admission:execution-artifact-present`
- Cause: the runner acquired `.matrix-execution.lock` before invoking the full provider-zero prepared-admission audit, while the audit correctly required that execution artifacts be absent.
- Outcome: no cell produced `run-result.json`; the 1.9.822 root is retained and will not be reused. A code-fixed plan must use a fresh version and root.
