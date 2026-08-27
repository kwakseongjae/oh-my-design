# Transit semantic-carrier transfer — checkpoint 1.9.260

Pair 2 completed valid and policy-green:

| arm | score | UI-Resolved | wall | tokens |
| --- | ---: | --- | ---: | ---: |
| semantic-carrier | 85/85 | true | 288,968ms | 681,520 |
| close-latch | 75/85 | false | 195,535ms | 570,838 |

Candidate delta: **+10**. The candidate closed contrast and all scored responsive geometry while the paired baseline again preserved content but retained narrow reflow and contrast failures. Both used one product revision, one static closure, one browser mechanism, and passed proof/host-policy gates.

Across two pairs, candidate W/T/L is **1/0/1** and UI-Resolved is candidate **1/2** versus baseline **0/2**. Direction has flipped, showing material run variance. Promotion remains impossible due pair 1, but the final pair is necessary to estimate recurrence and avoid selecting the next instruction delta from one outlier.

Next locked cell: `luna-transit-r3-close`, followed by `luna-transit-r3-carrier`. Same root retry is forbidden.
