# Cursor review registry lock — 1.9.89

Status: **LOCKED; provider-free registry lock accepted**.

## Incident

The fresh 1.9.88 automated review root completed 14/54 invocations. Before
invocation 15, Cursor changed the registered label for the unchanged selector
`cursor-grok-4.5-high`:

- prior event label: `Cursor Grok 4.5 High`;
- current `cursor-agent models` label: `Cursor Grok 4.5`;
- selector: unchanged;
- invocation 15 process: success;
- invocation 15 exact judgment: retained but rejected;
- root: frozen at 14/54, never resumed or filled.

This is registry drift, not evidence of a fallback. It still invalidates the
frozen attribution contract.

## Bounded correction

The next root must not use a source-code display-name constant.

1. At fresh state creation, query `cursor-agent models`.
2. Require exactly one row for the requested selector.
3. Store that row's display label in the private execution contract.
4. Repeat the registry probe before every provider invocation.
5. If selector or label differs, freeze before sending the packet.
6. Require provider events to report either the exact selector or the
   root-locked label.

No completed judgment from the frozen 1.9.88 root is transferred. After
provider-free tests and commit, a fresh 54-invocation root starts from packet 1.
