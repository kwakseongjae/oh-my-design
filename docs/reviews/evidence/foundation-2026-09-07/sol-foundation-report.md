# Sol foundation implementation report

Date: 2026-09-07  
Scope: F-1 worker lifecycle, F-2 Aphrodite distribution closure, F-3 content-hash receipts and gate classification.  
Provider calls made by this implementation: 0.

## Acceptance

| Unit | Status | Evidence |
| --- | --- | --- |
| F-1 | PASS | Reusable Opus/Grok lifecycle runner; 13 provider-zero tests; separate CLI termination/process-group probe PASS in `cli-cancellation-probe.json`; runtime/model/browser attribution is in `runtime-preflight.json` and `browser-connectivity.json`. |
| F-2 | PASS | Clean tarball consumer installs the skill and required files, runs the packaged font inventory, builds the bundled GSAP references, and completes a real installed Chrome render check. |
| F-3 | PASS for foundation | Receipt binds source, brief, assets (or an explicit asset-free reason), output, and checker bytes. Verification ignores timestamps and rejects byte mutation. The release quality gate now reports hard failure, style rejection, review pending, checker error/pending, missing receipt, and stale receipt separately. Existing fixtures remain unverified until generated with contemporaneous receipts; this is expected F-4 work. |

## F-1 lifecycle contract

`scripts/execution/worker-lifecycle.mjs` accepts a JSON spec with explicit `taskId`, `provider` (`claude-code` or `grok-build`), requested `model`, absolute executable `command`, exact `argv`, `cwd`, `attemptsDir`, `timeoutMs`, and owned output paths/formats.

Run it with:

```sh
node scripts/execution/worker-lifecycle.mjs run --spec /absolute/path/to/worker-spec.json
```

Cancel an independently running attempt with:

```sh
node scripts/execution/worker-lifecycle.mjs cancel --status /absolute/path/to/attempt-0001/status.json
```

Each attempt durably writes `manifest.json`, `status.json`, `stdout.log`, and `stderr.log`. Status binds both log hashes and admitted output hashes. Requested model and provider-reported IDs parsed from raw JSON/JSONL stdout are separate fields; raw stdout stays hash-bound when the provider does not expose a reported ID.

The runner creates a new attempt only after proving the prior process group is dead. A live leader, unresolved process identity, live/unresolved group, task-lineage mismatch, output symlink, unchanged pre-existing output, missing/invalid JSON output, nonzero exit, spawn failure, timeout, or incomplete group cleanup cannot become success. Cancellation and timeout send TERM then KILL to the process group, including TERM-ignoring descendants. CLI SIGINT/SIGTERM is trapped and reconciled through the same path.

## F-2 distribution closure

The installer copies these package-owned resources under each installed `omd-aphrodite` skill root while preserving their source-relative layout:

- `docs/design-excellence/landing-craft-codex.md`
- `docs/design-excellence/storyboard-review.md`
- `docs/design-excellence/fx-library/**`, including `scroll-gsap/lib/LICENSES.md`

The skill calls `omd font inline` and `omd check render|contrast|landing`; those commands resolve tools from the installed npm package. `font-inline.mjs`, all render checkers, and their browser resolver ship in the tarball. `playwright-core` is an exact required runtime dependency (`1.61.1`), because the clean-consumer test proved an optional dependency did not close the render path.

## F-3 receipt and gate behavior

Create and verify a receipt with:

```sh
node scripts/execution/artifact-receipt.mjs create --spec /absolute/path/to/receipt-spec.json --out /absolute/path/to/receipt.json
node scripts/execution/artifact-receipt.mjs verify --receipt /absolute/path/to/receipt.json
```

Every diagnostic has an ID, concrete checker/rule scope, class (`hard` or `style`), and status (`pass`, `fail`, `pending`, or `error`). Only explicit pass results pass a gate. Pending/error never become style pass. Asset-free UI is represented by `groups.assets: []` plus a non-empty `emptyReasons.assets`, avoiding fake asset evidence.

`test-v2/tools/quality-gate.mjs` no longer compares mtimes. For each fixture it requires a receipt (explicit path or `<artifact>.receipt.json`), verifies every byte hash, and checks that the receipt binds the exact fixture output, configured skill sources, and invoked checker sources. Missing receipts are `UNVERIFIED`; content drift is `STALE`. Current pre-receipt fixtures were not retroactively attested.

Current execution worker routing is recorded in `docs/PROVIDER_ROUTING_POLICY.md` and `current_worker_routing` in the machine policy: Sol/Codex for implementation, Opus 5/Claude Code for creative direction and review, and Grok 4.6/Grok Build for isolated generation. Frozen benchmark result directories and historical epoch manifests were not edited.

## Commands and results

```text
npx vitest run test/unit/scripts/worker-lifecycle.test.mjs
  13 passed

npx vitest run test/unit/scripts/worker-lifecycle.test.mjs test/unit/scripts/artifact-receipt.test.mjs test/unit/scripts/quality-gate-policy.test.mjs test/unit/cli/install-skills.test.ts test/unit/cli/check.test.ts
  5 files passed, 81 tests passed

npx vitest run test/unit/cli/packaged-aphrodite-smoke.test.ts
  1 file passed, 1 test passed; clean tarball install and real Chrome render

npm install --package-lock-only --ignore-scripts --offline --no-audit --no-fund
  PASS; lock root is 2.0.1, playwright-core is a production dependency, node_modules entry is not dev-only

npm ci --omit=dev --ignore-scripts --offline --no-audit --no-fund
  PASS in a new temp directory containing only final package.json + package-lock.json; 6 packages installed

npm ls --omit=dev --depth=0 --json
  PASS; playwright-core 1.61.1 present with @clack/prompts, commander, and picocolors; vitest/typescript absent

npm run lint
  PASS (tsc --noEmit)

npm run build
  PASS (tsup)

npm run sync:runtime-mirrors:check
  PASS: 476 managed files current, 98 explicit overlays preserved, 0 optional local files absent

git diff --check
  PASS
```

The root-owned CLI cancellation probe additionally sent SIGTERM to the runner while its worker ignored TERM and verified `state=cancelled`, `processGroupCleanup=dead`, and no surviving process group. No paid Opus/Grok tests were repeated; the earlier file-I/O and four-Grok receipts remain the live-provider evidence.

## Remaining work outside this unit

- F-4 must generate new fixture outputs and contemporaneous receipts. Until then the strict quality gate correctly blocks them as unverified/stale rather than treating old artifacts as proof of the updated skill.
- Benchmark-specific context isolation, shared-browser broker, media attribution, and full four-condition calibration remain B-1/B-2 work.
- Actual A-0 creative work and all provider/model runs were intentionally not launched during this foundation unit.
