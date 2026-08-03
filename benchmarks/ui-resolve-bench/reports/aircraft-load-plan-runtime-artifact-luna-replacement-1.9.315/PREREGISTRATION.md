# Aircraft load-plan runtime-artifact transfer replacement — 1.9.315

This is the clean infrastructure replacement for the frozen 1.9.311 matrix. It keeps exact conjunctive-release control `3a414a0a…`, exact runtime-artifact-aware candidate `8f8cec6e…`, the locked `aircraft-load-plan-review-v0.1` task, Luna/high, and every quality/efficiency gate unchanged. Both arms now receive exact hook-safe installed host policy source `7d21ea23…` from the 1.9.314 pin.

The replacement is still Tokens-to-Target attempt 4, not a new bounded skill patch. The infrastructure-invalid first cell's 2,932,219 tokens remain charged to attempt 4, while its score and behavior are excluded. Replacement spend is added to the same attempt. No frozen root, output, or result may be copied into this matrix.

The balanced order remains C/N, N/C, C/N. Timeout is 900 seconds, concurrency is 1, inter-cell pacing is 120 seconds, and every call uses `--max-new-cells 1`. There is no retry, fallback, same-root repair, or post-hoc substitution. Promotion still requires candidate UI-Resolved 3/3, zero serious/critical contrast violations 3/3, no paired objective loss, proof plus installed host-policy passes 3/3, and candidate mean wall time plus provider-reported tokens each at most 1.1× control.

Provider calls at replacement preregistration: 0.
