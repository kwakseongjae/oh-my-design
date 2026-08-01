# Media-clearance packet Grok transfer — findings

Status: **6/6 valid complete; quality transfer passed, strict efficiency gate held**.

## Result

| Arm | Scores | UI-Resolved | Mean wall | Median wall | Mean tokens | Median tokens |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Previous canonical | 85 / 81 / 85 | 2/3 | 294,496 ms | 288,201 ms | 115,971 | 93,041 |
| Reflow packet | 85 / 85 / 85 | 3/3 | 327,842 ms | 351,649 ms | 105,258 | 85,889 |

- Paired score deltas are `0 / +4 / 0`; packet W/T/L is `1 / 2 / 0`.
- Packet Reliability@3 is 100%; Evidence & Unknown and every critical gate pass 3/3.
- Previous trial 2 fragments `asset-social-cut-vertical-2411.mov` and `asset-retail-loop-window-2412.mp4` at both 320px and the 200% surrogate. Packet has no atomic, dynamic-state, compact-copy, overflow, clipping, overlap, target, evidence, state, hierarchy, accessibility, or protected-hook failure in any trial.
- Packet mean wall time is +11.3% and median wall time is +22.0% versus previous. Paired wall deltas are `-107,892 / +119,743 / +88,187 ms`.
- Packet mean reported tokens are -9.2% and median tokens are -7.7%. Paired token deltas are `-84,249 / -10,063 / +62,174`.
- All six cells report Cursor Grok 4.5 High and are Internal registered-display-name results; they are not public model-attribution evidence.

## Decision

The compact packet clears the preregistered quality and zero-loss gates, but not the strict no-wall-time-regression gate. Promotion remains held. The quality improvement, lower mean tokens, and higher wall time form a material efficiency interaction, so the exact 2×3 comparison is replicated under Luna xhigh in a fresh root and separate denominator. Grok and Luna results must not be pooled.

