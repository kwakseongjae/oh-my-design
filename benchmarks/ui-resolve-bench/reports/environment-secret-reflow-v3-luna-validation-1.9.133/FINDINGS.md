# Environment-secret reflow v3 Luna validation — findings

Status: **COMPLETE; v3 candidate rejected**.

All 6/6 preregistered cells completed valid with no retry, fallback, repair,
replacement, or model substitution. Previous scores were 81/75/65; v3 scores
were 79/81/81. The paired v3 W/T/L is 2/0/1 and its median is 81 versus 75,
but both arms are UI-Resolved 0/3 and Reliability@3 0%. The candidate therefore
misses the release gate and cannot be promoted from this result.

The v3 rule did prevent injected break markers and repaired the original secret
row fragmentation in every trial. It still failed three different closure
edges:

1. trial 1 made all responsive checks green by introducing a scrollable table
   region that was not keyboard-focusable, causing serious axe and keyboard
   failures at 200%;
2. trial 2 preserved mapping-row keys but allowed the selected source filename
   `release-secrets-august.env` to wrap at 320px and 200%;
3. trial 3 kept a fixed 64px generated-label column, so `Requirement` exceeded
   its declared box at 320px and 200%.

The previous arm was more variable and also never resolved: generated-label
overflow repeated 3/3, accessibility failed 2/3, and trial 3 lost a protected
hook. v3 is directionally better but not reliable enough.

The next revision must refine the existing closure rather than append a new
task-specific rule: cover every atomic identifier in the decision context,
prefer label-above-value/full-width rows before internal scrolling, require any
necessary scroll region to be named and keyboard reachable, and make generated
label tracks content-sized or full-width rather than fixed-width. Validate that
revision on another unseen family; this task is now a seen diagnostic artifact.
