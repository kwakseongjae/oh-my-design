# Digital master carrier-inventory transfer — findings

Status: **4/6 cells complete — promotion gate already unreachable**

## Preparation checkpoint

Six independent Git workspaces were prepared from detached, clean, publishable
sources. All cells share the task, prompt, starter, DESIGN.md, Codex/Luna/high
runtime, 900-second timeout, installed proof policy, and host-policy contract.
The only arm difference is the exact installed skill tree:

- control `3a414a0a…` / `2d577464…`
- candidate `a57c374…` / `b9edc281…`

Task, prompt, product, runtime, model, effort, timeout, proof policy, Git-root,
detached-source, and publishability equality attestations are green. No
provider call has been made. The only allowed next cell is
`luna-master-r1-control`, run with `--max-new-cells 1`.

## Checkpoint 1 — control trial 1

`luna-master-r1-control` completed valid at **75/85** and is not UI-Resolved.
Task facts, all three carrier families, state journeys, design grounding,
evidence honesty, desktop geometry, targets, controls, labels, and keyboard
traversal pass. The 390px, 320px, and 200% conditions retain page overflow,
clipped geometry, mid-token fragmentation, and atomic one-line failures. The
handoff target `PACKAGE-OTT-502 + QC-MANIFEST-610` wraps at all three narrow
conditions; the `7 assets · 7 parent links · 2 checksums` summary also wraps at
320px and 200%. Supplied muted text remains at **4.42:1**, producing serious
axe `color-contrast` findings.

- wall time: **400,988ms**
- provider-reported total tokens: **448,479**
- input / cached input / output / reasoning output: **427,321 / 367,360 /
  21,158 / 9,734**
- deterministic proof execution: pass
- installed host policy: pass
- model-authored browser attempt: failed to attach; retained without retry

No paired claim is available until `luna-master-r1-inventory` completes. This
spend is retained in Tokens-to-Target attempt 3.

## Pair 1

The carrier-inventory candidate tied the control at **75/85**; both remain
unresolved. Unlike control, candidate closed page overflow and clipped control
geometry at 390px, 320px, and 200%. It still left the same handoff target
`PACKAGE-OTT-502 + QC-MANIFEST-610` fragmented and two-line at all three narrow
conditions, plus the summary line at 320px and 200%. The supplied muted color
also remained at **4.42:1** in both arms.

- candidate wall: **306,022ms** vs control **400,988ms** (**-23.68%**)
- candidate tokens: **592,908** vs control **448,479** (**+32.20%**)
- candidate input / cached / output / reasoning: **577,262 / 519,168 /
  15,646 / 6,112**
- both deterministic proof execution and installed host-policy gates: pass
- cumulative attempt-3 experimental tokens: **1,041,387**

Candidate UI-Resolved 3/3 is now impossible, so this patch cannot be promoted.
The remaining two pairs are diagnostic evidence for recurrence and the next
smallest repair; they cannot restore promotion eligibility.

## Checkpoint 3 — candidate trial 2

`luna-master-r2-inventory` completed valid at **73/85** and is not
UI-Resolved. It again closed page overflow and clipped controls while repeating
the handoff target and summary atomic-line failures at the same narrow
conditions. This trial also failed keyboard traversal and retained serious axe
findings, adding an accessibility regression to the repeated responsive
failure.

- wall time: **295,346ms**
- provider-reported total tokens: **960,428**
- input / cached / output / reasoning: **946,220 / 881,152 / 14,208 / 8,198**
- candidate UI-Resolved recurrence: **0/2**
- deterministic proof execution and installed host policy: pass
- cumulative attempt-3 experimental tokens: **2,001,815**

Pair-2 quality and efficiency deltas are withheld until
`luna-master-r2-control` completes.

## Pair 2

The candidate scored **73/85** against control **77/85**, and both remain
unresolved. Control closed the handoff target at 390px and left only the
summary atomic-line failure at 320px and 200%. Candidate retained the handoff
target failure across all narrow conditions and added a keyboard traversal
failure. Serious axe findings remained in both arms.

- candidate wall: **295,346ms** vs control **365,026ms** (**-19.09%**)
- candidate tokens: **960,428** vs control **560,575** (**+71.33%**)
- two-pair candidate/control mean wall: **300,684ms / 383,007ms**
  (**-21.49%**)
- two-pair candidate/control mean tokens: **776,668 / 504,527**
  (**+53.94%**)
- candidate quality W/T/L: **0/1/1**
- cumulative attempt-3 experimental tokens: **2,562,390**

The final pair remains diagnostic only. It cannot restore the failed quality
or token-efficiency promotion gates.
