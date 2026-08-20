# Assay plate host-policy findings — 1.9.225

## Verdict

The locked six-cell Codex/Luna high comparison completed with valid model attribution, unchanged preparation hashes, no timeout, and no retry. The installed policy eliminated unblocked duplicate static verification and improved paired objective points in two of three trials, but neither arm produced a UI-Resolved result. Installed-policy delivery acceptance was only 2/3. Keep proof policy opt-in; broader/default installation is **HOLD**.

## Quality, proof, and cost

| Measure | Controller observation | Installed policy |
|---|---:|---:|
| Valid cells | 3/3 | 3/3 |
| UI-Resolved | 0/3 | 0/3 |
| Objective points | 79, 63, 81 | 81, 77, 79 |
| Objective mean / median | 74.3 / 79 | 79.0 / 79 |
| Proof compliant | 0/3 | 3/3 |
| Duplicate static closure | 1, 4, 3 | 0 unblocked in every trial |
| Host-policy acceptance | observation only | 2/3 |
| Mean wall time | 324.9 s | 339.7 s (+4.5%) |
| Median wall time | 311.6 s | 371.3 s (+19.2%) |
| Mean tokens | 537,519 | 617,973 (+15.0%) |
| Median tokens | 581,697 | 537,520 (-7.6%) |

Paired objective deltas are `+2, +14, -2`: W/T/L `2/0/1`, mean `+4.7`, median `+2`. UI-Resolved W/T/L is `0/3/0`. The preregistered promotion requirement of installed UI-Resolved 3/3, installed delivery acceptance 3/3, and zero paired objective loss was not met.

## Failure clusters

- Accessibility was the common hard failure: every cell retained serious `color-contrast` findings. The number of affected nodes varied, so the evaluator is distinguishing implementation quality rather than merely detecting a fixture constant.
- Responsive geometry passed only one trial per arm. Remaining failures were concentrated at 320px and the 200%-zoom surrogate; the weakest controller trial also broke protected hook cardinality and all responsive viewports.
- Controller trials repeated static closure 1, 4, and 3 times. Installed policy left zero duplicate, browser-recovery, or after-ready commands unblocked.

## Native browser observability gap

Installed R2 did attempt a real native `agent-browser.browser_navigate` call after static closure, and the call returned `ERR_NAME_NOT_RESOLVED`. Codex emitted it as an `mcp_tool_call`, outside the current `Bash|apply_patch|Edit|Write` hook matcher and outside the shell-command proof-trace classifier. The policy state therefore recorded zero browser attempts and stayed `delivery: blocked`, even though the agent made an honest browser attempt.

This is a host-policy observability defect, not evidence that the model never tried browser verification. The 2/3 acceptance result remains immutable because the preregistered gate correctly evaluated the installed state it was given. The next bounded patch should add native browser-tool event coverage to both the installed hook contract and the offline proof trace before any new scored matrix.

Execution state SHA-256: `bfd52f6c9e4d77ea2259aa43699067530b768f9aea163fa6a5e2d9a5b5acbe86`.
