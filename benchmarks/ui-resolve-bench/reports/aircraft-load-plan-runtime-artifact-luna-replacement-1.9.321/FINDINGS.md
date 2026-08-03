# Aircraft runtime-artifact proof-order replacement — findings

Status: **fresh 6/6 preparation complete; provider not started**

The experiment retains the same attempt, task, two skill sources, Luna/high runtime contract, balanced order, and gates. The sole shared infrastructure change is exact host policy `e5f1e307…`, applied equally to both arms.

All six cells share one task/prompt/product/DESIGN/activation/runtime/model/effort/timeout/host-policy contract. Each starts from a committed, detached, clean Git baseline; both source vendors are detached, clean, and publishable. Exact installed skill tree is the sole arm delta: `2d577464…` vs `bb3ac833…`. Provider calls: **0**.

The only allowed next cell is `luna-load-r1-control-proof-order` with canonical `--max-new-cells 1`. No retry, fallback, substitution, or same-root repair is allowed.
