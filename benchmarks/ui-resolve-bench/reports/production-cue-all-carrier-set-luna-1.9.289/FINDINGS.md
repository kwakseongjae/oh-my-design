# Production cue all-carrier-set transfer — findings

Status: **1/6 cells complete**

## Checkpoint 1 — control trial 1

`luna-cue-r1-control` completed valid at **79/85** and is not UI-Resolved.
It fixed exact foreground contrast and removed page overflow while preserving
all eight cues, seven dependencies, three lane carriers, interactions, and
evidence. The separate handoff carrier remains outside the atomic one-line
closure: its target wraps at 390px, 320px, and 200%; its evidence also wraps at
320px and 200%.

- wall time: **205,552ms**
- provider-reported total tokens: **380,768**
- input / cached input / output / reasoning output: **370,624 / 314,368 /
  10,144 / 5,667**
- proof execution: pass
- installed host policy: pass

No paired claim is available until `luna-cue-r1-carrier-set` completes. This
spend is retained in Tokens-to-Target attempt 2.
