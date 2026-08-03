# Aircraft runtime-artifact proof-order replacement — findings

Status: **first cell infrastructure-invalid; root frozen**

The experiment retains the same attempt, task, two skill sources, Luna/high runtime contract, balanced order, and gates. The sole shared infrastructure change is exact host policy `e5f1e307…`, applied equally to both arms.

All six cells share one task/prompt/product/DESIGN/activation/runtime/model/effort/timeout/host-policy contract. Each starts from a committed, detached, clean Git baseline; both source vendors are detached, clean, and publishable. Exact installed skill tree is the sole arm delta: `2d577464…` vs `bb3ac833…`.

The first and only provider cell, `luna-load-r1-control-proof-order`, changed `index.html` and produced an analyzable proof trace, but local browser-harness could not establish an active CDP connection. The model recorded the failed browser attempt honestly and did not claim resolution. The installed host-policy gate remained false (`installed-policy-delivery-incomplete`), so objective 81/85 and `ui_resolved=false` are excluded from quality comparison.

Retained infrastructure cost is 693,461ms and 2,036,343 provider-reported tokens. Combined with the previously retained 2,932,219-token invalid attempt, the known invalid spend minimum is **4,968,562 tokens**, plus one earlier usage-unavailable cell. Remaining cells were not started. `/private/tmp/u19321` has a root `STOP` sentinel and must not be resumed.

1.9.323 repairs the three infrastructure defects exposed here: provider-before-browser-preflight spend, unresolved artifact accounting deadlock, and host-policy-failed score admission.
