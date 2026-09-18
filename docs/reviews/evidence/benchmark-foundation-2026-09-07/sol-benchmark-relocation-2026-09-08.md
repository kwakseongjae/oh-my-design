# Four-arm epoch task relocation

Status: **PASS for provider-zero preregistration; BLOCKED for live launch.** This is a storage-layout correction, not a benchmark restart or a model change.

The strict public task inventory under `benchmarks/ui-resolve-bench/tasks/` contains 123 flat task directories, each with its own `task.json`. The four epoch-only tasks previously occupied a nested container named `tasks/four-arm-2026-09-07/`. That container was not a public task contract and caused the legacy inventory audit to see 124 entries and then fail because the container itself had no `task.json`.

The task files moved byte-for-byte to `benchmarks/ui-resolve-bench/epoch-tasks/four-arm-2026-09-07/`. The historical v0.1 epoch config remains unchanged at SHA-256 `cde6c005a2896c8a3be0c5032dbe85f5ab975fda837b09b5aed71a57ff1c7963`, preserving both controller input snapshots. Its old `tasks/four-arm-2026-09-07/...` paths describe the historical input and are no longer current filesystem paths.

The current provider-zero preflight contract is `config/grok46-four-arm-epoch-2026-09-07-v0.2.json`. It binds the unchanged task and follow-up hashes at their `epoch-tasks/` paths and explicitly supersedes the frozen v0.1 config. The validator verifies the v0.1 hash before validating v0.2. Grok remains the historical provider/model name in this epoch; activation is still unverified and live launch remains blocked.

Verification:

```sh
node --test benchmarks/ui-resolve-bench/scripts/test-benchmark-foundation-relocation.mjs
node benchmarks/ui-resolve-bench/scripts/validate-benchmark-foundation.mjs
npx vitest run test/unit/bench/ui-resolve-task-contract-mutations.test.mjs
```

This fix does not filter missing entries, add a symlink, mutate task bytes, rewrite historical snapshots, or claim a new service benchmark run.
