# Ordered reflow v6 portable candidate — findings

Status: **PINNED; provider generation has not started**.

`omd-portable-reflow-v6-candidate` resolves to exact detached commit
`d971174a857827d58f11dac58ebb5fb6370d9c35` in
`/tmp/ui-frontier-19103/vendors/omd-1.9.142`. The source is clean,
detached, publishable, and MIT-licensed. The Cursor-adapted installed skill tree
SHA is `e0c111e02638e129e4f501d5f59204ca79cb74a9a9398230310d87940fb91e19`.

The activation remains identical to exact previous canonical after runtime
adaptation. The only intended arm difference in the next matrix is the
installed `omd-apply` source tree. The diagnostic preparation made zero provider
calls and is excluded from the comparison denominator.

Next, prepare exact previous versus v6 as two arms × three Luna High/Codex
trials on locked `certificate-rotation-plan-v0.1`, verify task/prompt/starter/
DESIGN/runtime/model/effort/timeout/activation equality and source attestation,
then execute serially with fixed pacing and no retry or substitution.
