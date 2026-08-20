# 1.9.87 live root interruption

`/tmp/u1986-private/execution-state.json` is frozen at 0/54.

The first Cursor/Grok invocation exited successfully in 50,936 ms and reported
the registered display label. Its final assistant content was one exact,
schema-valid judgment JSON object. Cursor's separate `result` summary prefixed
that JSON with an earlier Korean progress sentence, and the runner incorrectly
selected the summary transport field as the canonical response.

The strict parser rejected the prefixed summary and froze the root as designed.
There is no retry, rescore, resume, or judgment salvage. Raw events, stderr,
run-record, and the failed state remain retained under the private root.

The bounded 1.9.88 replacement changes only Cursor stream channel selection.
