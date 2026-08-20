# Digital master carrier-inventory transfer — findings

Status: **6/6 cells complete — candidate rejected**

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

## Checkpoint 5 — control trial 3

`luna-master-r3-control` completed valid at **77/85** and is not UI-Resolved.
It reproduces control trial 2: 390px passes, while the summary
`7 assets · 7 parent links · 2 checksums` exceeds its one-line budget at 320px
and 200%. Supplied muted text remains at 4.42:1. Task, states, design,
evidence, keyboard, proof execution, and installed host policy pass.

- wall time: **342,420ms**
- provider-reported total tokens: **395,684**
- input / cached / output / reasoning: **377,936 / 329,472 / 17,748 / 8,253**
- cumulative attempt-3 experimental tokens: **2,958,074**

Final-pair claims are withheld until `luna-master-r3-inventory` completes.

## Pair 3 and final decision

The candidate scored **81/85** against control **77/85**, but both remain
unresolved. Candidate closed contrast, keyboard traversal, the handoff target,
and 390px geometry; it still left the supplied-count summary two-line at 320px
and 200%. Control retained the same summary failure plus 4.42:1 contrast.

- candidate wall: **335,490ms** vs control **342,420ms** (**-2.02%**)
- candidate tokens: **493,917** vs control **395,684** (**+24.82%**)
- candidate/control score mean: **76.33 / 76.33**
- candidate quality W/T/L: **1/1/1**
- candidate/control UI-Resolved: **0/3 / 0/3**
- candidate/control mean wall: **312,286ms / 369,478ms** (**-15.48%**)
- candidate/control mean tokens: **682,417.67 / 468,246** (**+45.74%**)
- candidate/control/total attempt-3 tokens: **2,047,253 / 1,404,738 /
  3,451,991**

The carrier-inventory patch is rejected. The immutable inventory and closure
manifest are described by the skill but are not runtime-enforced artifacts:
all candidate trials reached a static closure without materializing a
machine-checkable carrier inventory, and all three remained unresolved. The
next bounded repair must move this contract out of advisory prose. The
installed proof policy should require a versioned `.omd` reflow-closure
artifact before accepting static closure, validate immutable carrier/row
cardinality and per-carrier 390px/320px/200% outcomes, and fail closed when the
artifact is absent or contains unresolved rows. It must not add another
planning phase or rely on model-authored grep assertions.
