# Shared browser operator protocol v0.1

This protocol connects isolated benchmark workers to one external Codex Computer Use Chrome operator. Workers never receive a browser handle, screenshot, DOM, tab list, history, or another cell's request/result. The bridge is provider-neutral and does not make a benchmark contract live-ready by itself. The request and completion shapes are recorded in `config/browser-request-bridge-v0.1.schema.json` and enforced again by the broker at runtime.

## Initialize an epoch queue

Prepare a JSON array whose entries contain only `cellId` and `ownerId`, then create a new queue root:

```sh
node benchmarks/ui-resolve-bench/scripts/browser-request-broker.mjs init \
  --root /absolute/path/to/new-browser-queue \
  --cells /absolute/path/to/cells.json
```

The root must not already exist. Queue roots are permanent benchmark artifacts: never initialize over, mutate, or delete an earlier run. The broker derives separate result and download directories beneath `cells/<cellId>/`; workers cannot nominate arbitrary output paths. Each lease creates a fresh `cells/<cellId>/downloads/<transactionId>/` directory, and earlier transaction directories and receipts remain in place.

## Worker request

A worker writes one request JSON in its own workspace and submits it. `transactionId`, `cellId`, and `ownerId` are explicit. `operation` is one of `navigate`, `inspect`, `generate-image`, `generate-video`, or `download`. `payload` contains only the mechanical browser instruction. Generation requests must include `payload.prompt` and the SHA-256 of those exact UTF-8 bytes as `promptSha256`.

```json
{
  "schemaVersion": "0.1",
  "transactionId": "karrot-hallmark-r1-image-01",
  "cellId": "karrot-hallmark-r1",
  "ownerId": "worker-karrot-hallmark-r1",
  "operation": "generate-image",
  "payload": { "service": "approved-service", "prompt": "exact worker-authored prompt" },
  "promptSha256": "<64 lowercase hex characters>",
  "expectedDownloads": [{ "id": "hero", "fileName": "hero.png", "required": true }]
}
```

Submission returns only the caller's transaction status and FIFO position. Polling requires the same cell and owner identity and returns only that transaction. A waiting worker gets no browser state.

The provider-zero contract test also starts four independent local CLI processes against the same broker root. Their submissions contend through the filesystem lock, and the operator can hold only one lease at a time. Lease order must match the recorded `request-queued` event order. This proves process-level serialization in the local fixture; it does not prove that a provider sandbox cannot read the broker root directly.

## Operator lease and service

The operator requests the next lease:

```sh
node benchmarks/ui-resolve-bench/scripts/browser-request-broker.mjs next \
  --root /absolute/path/to/browser-queue \
  --operator root-cua
```

Only the active lease exposes the request to the operator. The lease includes `downloadDirectory`, a broker-created absolute directory owned by that transaction. The operator performs its instructions serially through Computer Use Chrome. For generation, copy the prompt exactly; do not rewrite, enhance, interpret, or add creative advice. Place each declared download directly in the returned `downloadDirectory` using its exact locked filename. Do not write to or reuse a file from the cell-level `downloads` parent. A later transaction may legitimately produce identical bytes, so attribution comes from the transaction directory rather than a changed hash or modification time.

To complete, write a JSON object containing the lease's exact `transactionId`, `cellId`, `ownerId`, `operatorId`, and `leaseToken`, plus a result:

```json
{
  "transactionId": "karrot-hallmark-r1-image-01",
  "cellId": "karrot-hallmark-r1",
  "ownerId": "worker-karrot-hallmark-r1",
  "operatorId": "root-cua",
  "leaseToken": "<returned token>",
  "result": {
    "status": "completed",
    "response": { "serviceReceipt": "operator-recorded value" },
    "downloads": [{ "id": "hero", "relativePath": "hero.png" }]
  }
}
```

The broker rejects identity mismatches, undeclared or missing downloads, path escapes, symlinks, and prompt-hash mismatches. A `completed` result must supply every required expected download. A leased operator may record `failed` after confirming the service operation ended in failure even when no required output exists; every partial output it does list is still ownership-checked, hashed, and retained. The broker validates the complete result object before appending a terminal result event or writing a receipt, then writes the receipt only below the owning cell's result directory.

## Cancellation, timeout, and reconciliation

Cancelling or timing out a queued request removes only that request. An explicit timeout becomes `timed_out`; a user cancellation becomes `cancelled`, regardless of the free-form reason text. Cancelling or timing out an active request quarantines the owner and the global capacity-one lease while retaining that explicit terminal intent. The broker will not infer that a browser operation stopped, accept a late result, or lease the next request.

The operator must inspect the active browser operation and reconcile using the exact lease identity. Use `resolution: "terminated"` only after confirming the active operation is stopped and no result/download can arrive. Use `resolution: "completed"` with a complete result only when the result is attributable to that lease. A mismatching or lost lease token remains blocked for manual evidence review.

Queue wait and browser-active time are recorded separately with monotonic timestamps. Benchmark active-time accounting may exclude queue wait only when the run controller also records that the worker was actually suspended while queued.

## Live admission still required

Before calibration, prove one real request and one real owned download through Computer Use Chrome, record the operator identity and service receipt, and verify that waiting workers cannot observe the browser. Also complete current-runtime skill discovery, no-skill negative discovery, and the existing isolated `HOME`/auth/cache/fixed-flag/prompt-audit checks. Separate `cwd` or `GROK_HOME` values are not isolation proof.

Cell/owner checks are capability boundaries in the broker API: even a worker that knows another transaction ID cannot poll its request, lease, or result. Filesystem isolation remains a separate admission gate because all fixture processes run as the same local user. A live benchmark must restrict each worker to its workspace and its broker client surface; directory layout and mode bits alone are insufficient OS isolation.
