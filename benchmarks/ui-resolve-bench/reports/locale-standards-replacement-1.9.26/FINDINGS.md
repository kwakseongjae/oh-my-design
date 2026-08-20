# 1.9.26 findings — quality passed, browser authority contract failed

## Outcome

Both fresh exact Opus/xhigh cells completed and were independently evaluated.
The candidate passed every objective quality gate, but the experiment remains
`calibration_failed` because it exceeded the preregistered direct-browser
authority.

- Scheduled/attempted/valid complete: 2/2/2
- Raw: 83/85, UI-Resolved false
- OmD locale stack: 85/85, UI-Resolved true
- Candidate first product write: 313,841ms
- Candidate replacement verifier authored: false
- Candidate direct headless-Chrome invocations: 2
- Preregistered maximum direct browser invocations: 1
- Retry or resume: none

`/tmp/u1926` is complete and immutable. The automatic matrix state says
`complete` because the runner did not yet encode the direct-browser-count
contract. The final release decision applies the full preregistration and is
therefore failed rather than retroactively weakening that contract.

## Controlled setup

Both cells used:

- Claude Code 2.1.217;
- exact parent `claude-opus-4-8` with `xhigh`;
- the same task `locale-cli-handoff-v0.1` version `0.2.0`;
- evaluator score schema `0.3`;
- the same starter, prompt, DESIGN.md, 900-second timeout, no-network sandbox,
  and external evaluator;
- no hooks, Agent tool, MCP, or third-party installer.

The candidate read both installed skill files:
`omd:locale-adapter`, then `omd:humanize`.

## Objective results

| Metric | Raw DESIGN.md | OmD locale stack |
|---|---:|---:|
| Valid process | yes | yes |
| Deterministic score | 83/85 | 85/85 |
| UI-Resolved | no | yes |
| Wall time | 678,193ms | 406,986ms |
| Uncached input + output tokens | 136,021 | 98,360 |
| First product write | 356,116ms | 313,841ms |
| Evidence & Unknown | pass | pass |
| Axe serious/critical | 0 | 0 |
| Replacement verifier | 0 | 0 |
| Infrastructure/sandbox/cwd errors | 0/0/0 | 0/0/0 |

The candidate observation is 40.0% lower in wall time, 27.7% lower in uncached
tokens, and 11.9% earlier to first product write. These are descriptive
single-cell observations only, not efficiency estimates.

## Quality comparison

The candidate passed:

- all five locale click states;
- Right Arrow reachability and wrap plus Left Arrow reverse wrap;
- exact active tab, panel, body locale, root language, and restored KO state;
- every required and forbidden locale terminology pattern;
- command, 12, 3, and `DESIGN.md` in all five locales;
- localized copy actions with changed, non-empty results;
- 1440, 390, 320, and 200%-surrogate geometry;
- platform-correct sequential keyboard traversal;
- design grounding;
- Evidence & Unknown with zero unsupported claims;
- axe serious/critical zero at every viewport.

Raw passed the same content, state, accessibility, design, and evidence gates,
but its locale tab buttons overlapped at the 200% CSS-zoom surrogate. That
single responsive critical gate accounts for 83/85 and the unresolved result.

## Binding failure

The candidate activation and preregistration allowed one direct browser command
and required blocked proof to become unresolved without a retry.

The trace records:

1. a headless Chrome `--dump-dom` command with `--no-sandbox`, which completed
   with no output;
2. three seconds later, a second headless Chrome `--dump-dom` command with
   changed options, which surfaced Crashpad and ProcessSingleton environment
   failures.

Neither call authored verification software, and both tool results were
recorded as non-errors because their shell pipelines exited successfully.
Consequently, the existing replacement-verifier and tool-error gates did not
stop the matrix.

This is a runner coverage gap, not a product-quality failure. The process
contract nevertheless fails exactly as preregistered.

## Decision

1.9.26 is `calibration_failed` with
`direct-browser-command-budget-exceeded`. Its 85/85 candidate score remains
valid forensic quality evidence but does not unlock the repeated locale matrix.

The next bounded patch must:

- count actual direct headless-browser invocations from linked Bash tool uses;
- ignore discovery commands that merely mention an installed browser;
- apply a preregistered maximum to selected variant kinds;
- mutation-test zero, one, and repeated invocations;
- replay the retained 1.9.26 candidate as count 2 and fail closed;
- leave explicit tool-error and replacement-verifier totals unchanged.

After that classifier calibration, a new fresh candidate recovery may run under
a new version and root. No result in `/tmp/u1926` may be resumed or retried.

