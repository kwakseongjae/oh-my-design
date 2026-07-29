# 1.9.89 live root interruption

`/tmp/u1989-private/execution-state.json` is frozen at 0/54.

The root correctly locked the current registry row label `Cursor Grok 4.5`.
Its first provider event reported the prior label `Cursor Grok 4.5 High` for
the unchanged selector `cursor-grok-4.5-high`. The exact assistant judgment and
successful process are retained but rejected.

This proves that the current registry row can remain stable while Cursor event
telemetry alternates between two historical labels for the same selector.
1.9.90 bounds those two strings to an Internal-only alias set.
