# /kana evaluation, arm A (no skill): the baseline is clean, so arm B was not run (2026-11-14)

Plan: `docs/research/2026-11-13-kana-eval-plan.md`. Runner and report: `scripts/lang/kana-eval/`. Raw runs (workspaces,
logs) are on this Mac only, `~/.omd-workers/kana-eval/20261114`; the per-run table is
`docs/research/raw/kana-eval/arm-a-20261114.json`, the pinned inputs `meta-a-20261114.json` beside it.

**Prompts were not read by a native speaker. Nothing here is publishable as it stands.**

## What was run

3 prompts × 3 runs, Codex CLI, `gpt-6.1-sol` at medium, no skill. Each run had an empty `HOME` and `CODEX_HOME` holding
only the login file, and a fresh copy of the `create-next-app` 16.4.3 template (`lang="en"`, Geist through `next/font`,
no `AGENTS.md`) in a workspace outside the repository. All 9 finished (3.5 to 5 minutes each); no log names a skill
file outside its workspace.

Two departures from the plan: the template is the October one (SHA-256 `f1654d1c…`), because the September tarball
the plan names (`7616f2ba…`) is no longer on this machine; and the model is the one the project's workers use now,
not the September eval's `gpt-6-astra`.

## Result

| prompt | WARN, median (min–max) | without JT-22 / JT-25 | FYI, median | rules that fired |
|---|---|---|---|---|
| 1 fintech hero | 0 (0–0) | 0 | 0 | JT-22 in 1 of 3 (FYI) |
| 2 settings page | 0 (0–0) | 0 | 1 | JT-22 in 2 of 3 (FYI) |
| 3 pricing section | 0 (0–0) | 0 | 1 | JT-22 in 2 of 3 (FYI) |

Read from the source of each run, not from the checker: all 9 changed `<html lang>` to `ja`; all 9 name a Japanese
face (Hiragino in 7, Noto Sans JP in 2); the line-height values they wrote for running text sit between 1.4 and 2.1.
None used italic on Japanese text or a negative letter-spacing the checker reports.

The checker was tried on a seeded file the same day (Tailwind classes in TSX: `leading-[1.2]`, `tracking-[-0.05em]`,
`italic`, `lang="en"`): it reported 2 WARN and 2 FYI, so a clean result is not the checker failing to read TSX.

## What it means

The plan's stop rule applies: with a median of 0 WARN on every prompt, the typography half of the skill has nothing
to show on this model, and arm B was not run. The Korean eval of September found defects in its baseline; that was
an older model and a language whose defects come from Latin habits. Whether the Korean baseline is still as dirty on
the current model is not known and is cheap to find out (9 runs with the same runner).

What this does not say: nothing about how the pages render (which face loads, where lines break), nothing about the
writing (register, punctuation, mixed scripts), nothing about other models or about Claude. Those are where a
Japanese skill could still earn its place, and the writing half needs its own checker and a native reader.
