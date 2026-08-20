# Deterministic proof-trace classifier — findings

Status: **provider-free implementation validated**.

The classifier normalizes Cursor `tool_call.started` and Codex `item.started` event schemas into product edits and commands. Consecutive product edits before a command form one revision transaction; a corrective edit after verification opens a new revision without erasing violations from the prior revision.

For each revision it records static closures, browser mechanisms, browser discovery/recovery probes, repeated browser mechanisms, duplicate static closures, and any verification command after the first browser proof. Instruction, benchmark, agent, and DESIGN.md edits do not create product revisions. Missing or mixed runtime evidence fails closed.

Applied retrospectively to the three 1.9.194 close-latch trials, the classifier reports:

| trial | revisions | post-edit commands | browser recovery | duplicate static | after-ready | pass |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| r1 | 3 | 9 | 3 | 3 | 1 | no |
| r2 | 3 | 5 | 2 | 1 | 1 | no |
| r3 | 2 | 7 | 2 | 2 | 5 | no |

The same code successfully parsed three real Codex/Luna event streams, so the result is not Cursor-schema-specific. Unit coverage is 6/6 and TypeScript lint is green. The classifier observes compliance; it does not claim to enforce host tool policy.

