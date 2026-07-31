# Environment-secret reflow v3 validation — findings

Status: **FROZEN on preregistered infrastructure stop; no quality result**.

The first scheduled cell, `secret-t1-previous`, exited after 1,026ms with
Cursor HTTP 503. It emitted zero events, made no product write, and preserved
the initial and final product SHA exactly. All five remaining cells are
not-started. No retry, fallback, repair, replacement, resume, or model
substitution occurred inside this root.

This is neither a previous-arm loss nor candidate evidence. The exact matrix
preparation remains valid, but `/tmp/u19132` is permanently frozen. A future
attempt must use a fresh root and a newly locked execution plan; it may use a
different available provider only if both arms change together and the result
is reported as a separate provider-scoped experiment.
