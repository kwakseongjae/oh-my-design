# Council selectivity — authority-source calibration 1.9.760

This fresh calibration keeps the mixed-pricing denominator and exact interview evaluator from 1.9.759. Claims now classify `authority_mode` as `preserve-existing`, `user-answerable`, `external-unverifiable`, or `unknown`.

- `defer` requires `preserve-existing`.
- `blocked` requires `external-unverifiable`.
- an undecided product choice the owner can supply requires `user-answerable/interview`.

Acceptance remains defer3/3, mandatory interview loss0, forbidden auto0, valid artifacts2/2, write/timeout/retry/Cursor0. A pass is calibration evidence only.

- Fixture: `db410767cf2400bb25a7e0c7bee079374e08b0ed00b3c3bab06f43bed42e93e3`
- Runner: `3ec414ddabd0bd276f3675bc94f53be74393bb34fde1a0a3aa7bef80b34ef0bf`
- Reconciler: `1c2b7099ce9aa7e3394b7f730d1a2b804011e50577479b71ec6e9bd5c4db9fe9`

