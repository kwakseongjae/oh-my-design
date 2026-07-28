# Cursor/Grok incident geometry Reliability@3 replacement — 1.9.69

Status: **LOCKED; awaiting clean preparation**.

## Bounded hypothesis

The 1.9.66 incident OmD arm failed exact card-radius grounding in two of three
trials. Provider-free 1.9.67 added geometry-token closure, and fresh 1.9.68
recovered once at 85/85 without the hidden-focusable regression.

Across three fresh paired incident trials, OmD should now preserve or improve
Raw score on every pair, pass every automated and critical gate, use the exact
declared console/control radii in all three outputs, and keep every focusable
control visible and in view.

This matrix tests only the repeated incident failure cluster. It is not the
three-task Reliability@3 replacement and cannot establish general Skill Lift.

## Frozen denominator

- schema `0.3`; suite `ui-resolve-v0.2`; evaluator `0.5`;
- product version `1.9.69`;
- matrix SHA-256
  `5383519ded7c07c1e29a06e90f25c3bdaf67c9c5dd8619c0dc2cb2c213b24b72`;
- runtime Cursor Agent `2026.07.23-e383d2b`;
- selector `cursor-grok-4.5-high`;
- expected display name `Cursor Grok 4.5 High`;
- attribution display-name only, Internal;
- provider effort argument none; controller effort metadata `high`;
- task `incident-operations-v0.1`;
- Raw/OmD × trials 1–3, six cells total;
- balanced order Raw1 → OmD1 → OmD2 → Raw2 → Raw3 → OmD3;
- timeout 900 seconds per cell;
- concurrency 1, `max_new_cells=1`, no retry/fallback/substitution;
- fixed 120-second inter-cell pacing, accepted only at 120,000–125,000 ms
  with wall/monotonic disagreement no greater than 5,000 ms;
- fresh root `/tmp/u1969`.

## Frozen source equality

- incident starter index
  `0ea045c3b297e86dbee9a094da113e2b85f2d109daaf2c25631c2432d545217b`;
- incident product tree
  `ddea43b6588b7d3bf10fd0deb2a0c24d0dcb70f25f5ec5cee4604b7c2e5e5915`;
- incident DESIGN.md
  `bbeab902a6a23d0de5ce8c7d804923844f1e87f96a960d32f04f8e52de041b3a`;
- incident Raw/OmD prompts
  `a004d513d96e7826df6a1d001fc0daee81c05242aed29914a5aeeb1b291739c4` /
  `7b1b16cca519c9abb4f0779919909d68812e2f66cb28eb24e92493610ea50f2d`;
- OmD SKILL.md
  `2ce11fb14cee0c34c9707d15bb2583fe606401beca1c3b9f22129d49d85f0845`;
- OmD sidecar
  `f0ad5294de3f599bbed124708c61988be9098e20d4723ce3574023144751253e`.

No 1.9.66 or 1.9.68 workspace, output, score, or partial artifact may be
copied into the fresh root.

## Transmission boundary

Standing authorization applies only to each locked task workspace:
task-owned `index.html`; `DESIGN.md`; `.benchmark/PROMPT.md`,
`manifest.json`, and `matrix-cell.json`; local `AGENTS.md`; and, for OmD,
`.cursor/skills/omd-apply/SKILL.md` plus `agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, catalog data,
user documents, `web/public/llms-full.txt`, other skills, and historical
provider artifacts are excluded.

## Acceptance and stop

Pass only when all six cells and five cooldowns complete; every OmD score is
at least its paired Raw score; paired median delta is non-negative; OmD passes
automated, accessibility, all-critical, exact card/control radius, and
Evidence & Unknown gates 3/3; hidden/clipped/invisible/unresolved focusable
targets are zero in all OmD viewports; and every product diff is
`index.html`-only.

Freeze at the first source, preparation, preflight, lease, auth, quota,
selector, display-name, runtime, hash, process, timeout, pacing, product-diff,
evaluator, exporter, history, or attestation failure. No retry, same-root
resume after a stop, stale-lease deletion, score change, failed-cell
replacement, or model substitution is allowed.

If Grok stops for actual quota or capacity, Terra High and Luna High may be
opened only as separately preregistered model lanes. They do not complete or
replace `/tmp/u1969`.

Passing establishes only bounded Internal incident Reliability@3 evidence. It
does not establish general Skill Lift, three-task Reliability@3, public model
attribution, efficiency, cross-model superiority, or frontier status.
