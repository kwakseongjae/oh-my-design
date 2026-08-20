# Automated blind review stream fix — 1.9.88

Status: **LOCKED; provider-free correction accepted**.

## Incident

The first 1.9.87 live invocation completed successfully and emitted one exact
JSON object in Cursor's final `assistant.message.content`. The Cursor stream's
separate summary `result` field prefixed that same JSON with an earlier Korean
progress sentence. The runner treated the summary field as canonical and
correctly froze `/tmp/u1986-private/execution-state.json` at 0/54.

That root remains frozen. Its response is not rescored or resumed.

## Bounded correction

For Cursor stream-json only:

1. the last assistant text content is the canonical model response;
2. the result event remains retained raw transport evidence;
3. result-event text is used only when no assistant content exists;
4. the selected source is written into the invocation record;
5. strict JSON validation remains unchanged—no substring extraction, fence
   removal, prefix trimming, parsing repair, or model retry is introduced.

Provider-free tests must reproduce the exact live event shape: valid assistant
JSON plus a prefixed result summary. Only the assistant channel may pass.

After acceptance and commit, create a fresh execution state under a new private
root while reusing the immutable identity-free 1.9.86 packets and reveals.
