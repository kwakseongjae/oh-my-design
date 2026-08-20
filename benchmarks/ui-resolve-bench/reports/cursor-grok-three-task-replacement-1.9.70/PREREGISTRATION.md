# Cursor/Grok three-task replacement — 1.9.70

Status: **LOCKED; awaiting fresh preparation**.

## Question

After the 1.9.67 geometry closure passed fresh incident recovery and incident
Reliability@3, what do the frozen three-task Raw DESIGN.md and OmD conditions
show when repeated three times with the same Cursor/Grok runtime?

This experiment makes two separate decisions:

1. **Reliability decision:** report UI-Resolved@1 and task Reliability@3 for
   Raw and OmD. OmD must pass automated, accessibility, all-critical, task
   behavior, and Evidence & Unknown gates in all nine cells. A task-level
   ceiling tie is a tie, not a reliability failure.
2. **Skill Lift decision:** report nine exact task/trial pairs, UI-Resolved
   lift, objective score lift, and task W/T/L under `PROTOCOL.md`. A zero
   median at a ceiling does not retroactively redefine Reliability@3.

This is a bounded Internal replacement. It is not the 24-task × 10-run Verified
gate and is not a public leaderboard or cross-model claim.

## Frozen denominator

- schema `0.3`; suite `ui-resolve-v0.2`; evaluator `0.5`;
- product version `1.9.70`;
- locked matrix SHA-256
  `97d5a73cef774bff6ddd8f0aca0a68b7ae6ca07ed3b587b50355d0bf23446bc0`;
- fresh root `/tmp/u1970`;
- onboarding, incident operations, and five-locale CLI handoff;
- Raw DESIGN.md and OmD portable at trial indices 1–3;
- Cursor Agent with selector `cursor-grok-4.5-high`;
- expected display name `Cursor Grok 4.5 High`;
- display-name-only attribution, Internal;
- provider effort argument none; controller effort metadata `high`;
- 900-second per-cell timeout;
- global provider concurrency 1;
- exact balanced order in `RUN-MATRIX.json`;
- fixed 120-second inter-cell pacing;
- `max_new_cells=1` per invocation;
- retry, fallback, model substitution, failed-cell replacement, and manual
  product edit none.

The 2026-07-28 repository-free probe returned exact `OMD_CAPACITY_OK`, exit 0,
usage evidence, and no tool call. Grok is therefore the active lane. Luna High
may open only after an actual Grok quota/capacity stop and only as a fresh,
separately preregistered denominator.

## Candidate and equality

The only Raw-to-OmD candidate is:

- canonical OmD SKILL.md
  `2ce11fb14cee0c34c9707d15bb2583fe606401beca1c3b9f22129d49d85f0845`;
- OmD sidecar
  `f0ad5294de3f599bbed124708c61988be9098e20d4723ce3574023144751253e`.

Fresh preparation must reproduce the frozen task starter, DESIGN.md, and
condition prompt hashes. No output, score, execution state, or artifact from
1.9.66, 1.9.68, or 1.9.69 enters this denominator.

## Transmission boundary

Standing authorization covers only each prepared cell's task-owned
`index.html`; `DESIGN.md`; `.benchmark/PROMPT.md`, `manifest.json`, and
`matrix-cell.json`; local `AGENTS.md`; and, for OmD,
`.cursor/skills/omd-apply/SKILL.md` plus `agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, catalog data, user
documents, `web/public/llms-full.txt`, other skills, and historical provider
artifacts are excluded.

## Acceptance and stop

Complete only when all 18 cells and 17 retained cooldowns finish, product diffs
remain task-owned, all checkpoints revalidate the completed prefix and untouched
suffix, and every OmD cell passes the frozen critical gates.

Freeze at the first source, preparation, preflight, lease, auth, quota,
selector, display-name, runtime, hash, process, timeout, pacing, product-diff,
evaluator, exporter, history, or attestation failure. Never resume a failed
root and never complete it with Luna.

Report Reliability and Skill Lift separately according to `PROTOCOL.md`. Do not
invent an extra positive-median reliability gate and do not promote this small,
display-name-attributed Internal matrix to a public frontier claim.
