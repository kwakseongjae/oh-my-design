# Parallel work: worktrees, workers, agents

How this repo runs several lanes at once without them stepping on each other. Written 2026-11-09 from what batches
4–6 and the November skill work actually did (owner 11/9: 「우리 워크트리 전략이랑 병렬로 작업 처리하는 방식과 관련해서는 어떻게 하고 있어 ?」).

## Lanes and where each one writes

| Lane | Who runs it | Writes to | Git? |
|---|---|---|---|
| Orchestration, state docs, re-measuring | the main session | main checkout (`oh-my-design/`), on a short `chore/*` branch | yes |
| Reference workers | Codex `gpt-6.1-sol`, ≤ 4 at a time (`run-queue.sh`) | their own folder `~/.omd-workers/<wave>/<id>/`; the capture service writes `artifacts/reference-evidence/` | **no** — workers never touch the repo |
| Reference landing | the main session, one at a time | landing worktree `.claude/worktrees/reverify-w1`, one branch per batch (`feat/refs-batchN`) | yes |
| Skill work (3D, shaders, hangul) | the main session or one background agent | skill worktree `../oh-my-design-3d` (`feat/skill-batch-nov`) | yes, commit only |
| A second skill lane | one background agent | its own worktree from main, one branch | yes, commit only |

Rules that keep these apart:
- **One writer per worktree.** Two agents never share a worktree; a new lane gets a new worktree from `origin/main`.
- **Workers are not worktrees.** A reference worker only reads the repo's scripts and writes its own folder. That is
  why four can run at once: nothing they write can conflict.
- **Landing is serial.** Every reference regenerates the same files (registry, quality, counts, llms, fingerprints),
  so landings happen in one worktree, in sequence. `land-batch.sh` lands several in one pipeline pass.
- **Agents commit, the main session pushes.** Background agents and tmux teammates never push (their push approval
  never reaches the main session). The main session reviews, pushes the branch and opens the PR.
- **Main is PR-only** (global hook since 2026-11-07/09). Merges into main are batched and need the owner's GO;
  UI changes also need the owner to open a preview.
- **Generated files are regenerated, not hand-merged.** After merging branches that both landed references or
  changed skill counts: `node web/scripts/build-registry.mjs && node web/scripts/sync-catalog.mjs`, then
  `node scripts/check-counts.mjs` (it does not read the Chinese "N 个兼容 / N 個相容" phrasing: check by hand).
- **Before a skill branch's PR, run the root suite too** (`npm test`), not only the skill's own verify: the doctor's
  required-skills list lives in `src/cli/doctor.ts` (missed once, 2026-11-06).

## Shared resources (serialize or label)

- **GPU / Chrome.** Reference workers and 3D/shader verification share one machine. Frame times measured while
  workers run are an upper bound; re-measure on an idle machine before publishing a number.
- **Test timeouts under load.** With four workers running, 4–6 root tests time out (5–15 s). Rerun those files alone
  (`--testTimeout=180000`) before believing a failure.
- **Long-running scripts.** A runner attached to a Monitor dies when the Monitor expires (30 min). Start runners
  detached (`nohup … > log &`), make them restartable (skip items that already have a run directory), and watch the
  log with a Monitor.
- **The git stash is shared** by every worktree and session: never `git stash pop`.

## Worktree inventory (2026-11-09)

20 worktrees. In use: main checkout, `reverify-w1` (landing), `../oh-my-design-3d` (skills). Branches already merged
into main and otherwise clean (removable, branch kept): `first-party-icons`, `go-links`, `state-reel`, `eu-wave5`,
`hangul-uxw`, `mcp-sem`, `r14-content`, and the four `r14-*` that hold only an untracked `.r11-build.log`.
Open: `feat/brand-svg-tw-jp`, `feat/brand-svg-jp`, `feat/hangul-launch-page`, `feat/mcp-connector-docs` (pushed,
waiting on decisions) and two local-only agent branches with unmerged commits (blog post 2026-09-29, Chromium link
colours) — not to be removed without a look.
