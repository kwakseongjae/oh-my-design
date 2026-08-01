# Print-proof reflow v13 Grok transfer — 1.9.177

## Decision

Reject v13. It failed UI-Resolved 3/3 and incurred one paired loss against the simpler previous canonical arm.

## Result

| Arm | Scores | UI-Resolved | Reliability@3 | Mean wall | Mean tokens |
| --- | --- | ---: | ---: | ---: | ---: |
| previous canonical | 81, 85, 85 | 2/3 | 66.7% | 186,887 ms | 86,816 |
| reflow v13 | 81, 83, 85 | 1/3 | 33.3% | 232,530 ms | 144,008 |

- paired v13 W/T/L: `0/2/1`
- wall time: v13 `24.4%` higher
- reported non-cached tokens: v13 `65.9%` higher
- six valid runs; provider, timeout, quota, retry, fallback, repair, replacement, and substitution failures: `0`

## Failure pattern

v13 trial 1 repaired the relational compact-control copy but still left the dynamic route state wrapped at 320px and 200%. Trial 2 forced all scoped rows to one line but created page-level horizontal overflow at 200%, exactly the unsafe no-wrap outcome the contract was intended to prevent. Trial 3 reached 85/85.

The previous arm reached 85/85 twice without the extra closure. Its only failed trial left both state and compact copy wrapped. v13 therefore improved one residual in its weakest run but traded that for higher complexity, substantially higher token cost, and a new overflow regression.

## Conclusion

Do not add v14 as another prose rule. The current long closure has crossed the point where more instructions reliably improve execution. The next work should simplify or operationalize the closure: derive a compact machine-readable work packet/checklist before editing, or reduce the skill to a smaller ordered invariant set. Preserve v13 as rejected evidence and use a fresh task only after that structural change.
