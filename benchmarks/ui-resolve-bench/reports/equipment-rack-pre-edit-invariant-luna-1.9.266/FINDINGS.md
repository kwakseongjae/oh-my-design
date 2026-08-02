# Equipment rack pre-edit invariant transfer — final findings

Status: **REJECTED**

All six preregistered Codex/Luna/high cells completed valid. The pre-edit-invariant candidate won every paired deterministic comparison and achieved one complete transfer, but did not meet the preregistered reliability or wall-time gates.

| trial | close-latch | pre-edit invariant | candidate delta |
| --- | ---: | ---: | ---: |
| 1 | 73 | 83 | +10 |
| 2 | 75 | 81 | +6 |
| 3 | 81 | 85 | +4 |

- candidate W/T/L: **3/0/0**
- mean score: close **76.33**, invariant **83.00**
- median score: close **75**, invariant **83**
- UI-Resolved: close **0/3**, invariant **1/3**
- serious/critical contrast clean: close **0/3**, invariant **2/3**
- proof execution green: close **2/3**, invariant **3/3**
- installed host-policy green: close **2/3**, invariant **3/3**

The successful candidate trial preserved all twelve rack units, six device identifiers, three reserved gaps, all interactions, exact evidence, and the shared rack carrier while repairing exact foreground contrast and 390/320/200% geometry in one revision. This confirms the bound foreground/carrier/browser direction can produce a fully resolved result on an unseen non-tabular topology.

The two incomplete candidate trials split the remaining failure rather than repeating one defect. Trial 1 fixed contrast and 390/320 geometry but left atomic rack and decision metadata at 200% unresolved. Trial 2 fixed all responsive geometry but left exact foreground contrast red. The instruction therefore raises the score floor and attainable ceiling, but the foreground and carrier outcomes are not yet reliably conjunctive in the same first edit.

Efficiency was mixed:

- mean wall: close **215,866ms**; invariant **273,989ms** (**+26.92%**, cap +10%)
- mean provider-reported tokens: close **572,334**; invariant **505,001** (**-11.77%**, passes cap)

Promotion gate verdict:

- candidate UI-Resolved 3/3: **fail (1/3)**
- serious/critical contrast 0/3: **fail (1/3 trials still red)**
- paired objective losses 0: **pass (0 losses)**
- proof execution 3/3: **pass**
- installed host policy 3/3: **pass**
- mean wall ratio ≤1.10: **fail (1.2692)**
- mean token ratio ≤1.10: **pass (0.8823)**

The 1.9.263 pre-edit-invariant candidate is not promoted. The next bounded delta should keep the same three-field invariant but make the two edit outcomes conjunctive: before the first static closure, require a numeric exact foreground result and a 390/320/200% carrier result; either missing or failing result keeps the first edit transaction incomplete. This is a tightening of the existing release boundary, not a new phase or benchmark-specific recipe.
