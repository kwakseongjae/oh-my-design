# Work order: <one-line goal>

<!-- Template for scripts/workers/spawn.sh (docs/WORKER_PLAN_2026-10-29.md). Write it in English for the worker.
     Keep it to one page. Fill every section; delete these comments. -->

You are a worker in <a git worktree of the oh-my-design repository | a research folder outside the repository>. The repo's AGENTS.md applies, except as follows.

**Do not:**
- edit `docs/CURRENT_STATE.md`, `docs/JOURNAL.md`, `JOURNAL.md` or any other state or journal file (the orchestrator owns them);
- commit, push or switch branches;
- run a build (`npm run build`) unless this order asks for it;
- touch files outside: <paths>.

Leave your changes in the working tree, where the orchestrator reviews them.

## Why

<who needs this and what goes wrong today, with a real example>

## Changes

<numbered, concrete; say what must stay unchanged, e.g. default output byte-identical>

## Constraints

<dependencies, budgets, naming, things not to change>

## Verify

Run each command and quote its last lines in your final message:
- <command>
- <command>

For anything you cannot run in your sandbox (for example a real browser), say so, and say what the orchestrator should run instead.

## Final message

The final message is your report, under <N> lines. Include:
- **Changed files:** one line per file, saying what changed.
- **Commands:** each command you ran, with its result.
- **Doubts:** any decision you were unsure about.
- **Not done:** anything you could not do.

Do not claim anything you did not run.

<!-- Browser work: spawn with `--mcp capture` and tell the worker it has one MCP tool, `probe_page`
     (mode survey | states). It must not try to start Chrome itself. -->
