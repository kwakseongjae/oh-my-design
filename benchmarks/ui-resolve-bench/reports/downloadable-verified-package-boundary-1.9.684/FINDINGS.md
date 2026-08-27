# Downloadable Verified package boundary — 1.9.684

## Result

The benchmark now has a deterministic acceptance contract for downloadable run packages. It covers successful, failed, and timed-out runs without allowing missing failure evidence to disappear from a published row.

Every run must retain hash-verified manifest, run result, and normalized run record. Complete runs additionally require a score, screenshot manifest, and product archive; failed and timed-out runs require stderr. Task/system/trial tuples must be unique, and a representative artifact must be a complete run.

A Verified-scale group passes only with exactly ten trials numbered 1–10 and at least one representative complete artifact. Positive tests include success, failure, and timeout artifacts in one ten-run group. Negative tests reject partial scale, missing roles, tampering, duplicate trials, and a failed run labeled representative.

## Claim boundary

This is packaging infrastructure, not a completed package. Real Verified groups packaged: 0. The 24×10 artifact gate remains open, and provider/model usage remains zero.
