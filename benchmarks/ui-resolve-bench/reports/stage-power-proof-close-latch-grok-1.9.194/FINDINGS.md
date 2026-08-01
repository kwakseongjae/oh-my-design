# Stage-power proof close-latch Grok transfer — findings

Status: **COMPLETE · quality pass · compliance fail · promotion HOLD**.

All six Cursor/Grok 4.5 High cells were valid and scored 85/85. Both proof-budget and close-latch arms reached UI-Resolved 3/3, so the latch had zero paired quality loss.

| arm | wall ms (mean / median / min / max) | tokens (mean / median / min / max) |
| --- | --- | --- |
| proof budget | 292,143 / 286,086 / 262,485 / 327,857 | 129,580 / 102,175 / 74,811 / 211,754 |
| close latch | 305,735 / 328,806 / 204,311 / 384,087 | 93,150 / 84,386 / 65,797 / 129,268 |

Against proof budget, close latch changed mean/median wall time by **+4.7% / +14.9%** and mean/median reported tokens by **−28.1% / −17.4%**. The token direction is useful, but latency regressed.

The compliance gate failed in all three latch trials. Their shell-call counts were 9, 5, and 9. The deterministic 1.9.195 trace classifier measured browser recovery `3/2/2`, duplicate static closure `3/1/2`, and verification-after-ready `1/1/5`. Therefore the required `0/0/0` was not jointly satisfied in any trial.

The revision-bound prose/state latch does not reliably control host tool execution. Adding more skill prose is rejected as the next move. The next bounded patch is a deterministic, provider-independent trace classifier that scores Cursor and Codex event streams under one explicit action taxonomy; host-native enforcement remains a separate harness capability.
