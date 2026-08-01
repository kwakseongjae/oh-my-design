# Caption cue host-policy findings — 1.9.216 / completion audit 1.9.218

## Verdict

The six-cell comparison is provider-valid and complete. The installed policy reliably prevented unblocked duplicate or post-ready proof execution, but it did not improve UI-Resolved reliability and one of three installed trials terminated with delivery still blocked and no browser attempt. Keep the policy opt-in. Default/broader promotion is **HOLD**.

## Quality and cost

| Measure | Controller | Installed policy |
|---|---:|---:|
| Valid cells | 3/3 | 3/3 |
| UI-Resolved | 0/3 | 0/3 |
| Objective points | 81, 81, 79 | 79, 79, 83 |
| Objective mean / median | 80.3 / 81 | 80.3 / 79 |
| Proof compliant | 0/3 | 3/3 by the original trace classifier |
| Duplicate static closure, mean | 2.0 | 0 unblocked |
| Mean wall time | 312.1 s | 278.0 s (-10.9%) |
| Median wall time | 273.1 s | 269.6 s (-1.3%) |
| Mean tokens | 456,683 | 538,085 (+17.8%) |
| Median tokens | 480,697 | 520,785 (+8.3%) |

Paired objective deltas are `-2, -2, +4`: W/T/L `1/0/2`, mean `0`, median `-2`. UI-Resolved W/T/L is `0/3/0` because neither arm resolved any trial. The preregistered promotion requirement of installed UI-Resolved 3/3 and zero paired objective loss was not met.

## Execution-policy result

Controller trials performed 5, 4, and 2 static closures, producing 3, 2, and 1 duplicate closures. Installed trials left zero duplicate, recovery, or post-ready commands unblocked. Two installed trials reached `delivery: ready` with one browser attempt.

The third installed trial stopped after one static closure. Its state was `static_closure: closed`, `browser_proof: open`, `browser_attempts: 0`, `delivery: blocked`. The original matrix gate checked state validity and unblocked violations but not completion, so it reported pass. This is a gate-definition miss, not evidence that browser proof occurred.

## 1.9.218 bounded correction

State summaries now expose ready/blocked state counts and browser-attempt totals. Future host-policy matrices can preregister `require_delivery_ready: true` and `require_browser_attempt: true`; the observed third trial then fails with `installed-policy-delivery-incomplete` and `installed-policy-browser-attempt-missing`. Existing 1.9.216 scores and gates remain immutable; the completion audit is reported separately rather than retroactively rewriting the experiment.

Artifact hashes: execution state `2bd1c9be…`, run records `b36478c8…`, aggregate `cd854793…`.
