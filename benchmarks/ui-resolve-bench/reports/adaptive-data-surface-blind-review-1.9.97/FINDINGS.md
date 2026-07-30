# Adaptive data-surface blind review — 1.9.97 findings

Status: **COMPLETE; human escalation required**.

## Execution

- 18/18 isolated invocations completed;
- three exact pricing pairs × three opaque judges × primary/reversal;
- cache, registry, provider, display alias, strict JSON, and artifact checks
  passed on every invocation;
- retry, response repair, fallback, substitution, manual fill, and failed-call
  replacement remained zero;
- reported label was consistently `Cursor Grok 4.5 High`;
- 1,588,885 ms total provider wall time;
- 1,151,639 input, 553,984 cached-input, and 42,690 output tokens were
  reported.

## Diagnostic preference result

| Axis | 1.9.95 rating | 1.9.78 rating | Primary modal agreement | Reversal consistency |
|---|---:|---:|---:|---:|
| Functionality | 1150.67 | 849.33 | 88.89% | 77.78% |
| Usability | 1095.42 | 904.58 | 66.67% | 44.44% |
| Fidelity | 1053.77 | 946.23 | 100% | 44.44% |
| Ship preference | 1255.75 | 744.25 | 100% | 100% |

Ship preference is the clearest automated signal: all nine primary votes point
to the 1.9.95 arm and all nine side reversals preserve that identity-normalized
choice. No both-fail vote occurred.

This is not a winner claim. The established Grok reviewer plane is
triage-only, has low prior agreement with a practitioner, and this round has
only one task family and three automated judge identities.

## Why escalation remains necessary

Overall reversal consistency is 24/36 (66.67%):

- functionality: 7/9;
- usability: 4/9;
- fidelity: 4/9;
- ship preference: 9/9.

Usability has two primary ties and fidelity has six. Trial 2 and trial 3 also
contain cross-judge disagreement. The deterministic selector therefore marks
all three exact pairs unresolved; resolved pairs and audit samples are zero.

## Next gate

Present the three blind pricing comparisons as one task-family practitioner
gallery. The human evaluates Functionality, Usability, Fidelity, and Ship
Preference without seeing arm identity. Only after exact intake may the private
reveal be joined.

