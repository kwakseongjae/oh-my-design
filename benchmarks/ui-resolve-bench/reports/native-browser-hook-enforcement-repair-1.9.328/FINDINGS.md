# Native browser hook enforcement repair — 1.9.328

Status: **provider-free infrastructure repair accepted; 1.9.325 is frozen**

The paired 1.9.325 candidate exposed an installed-host enforcement gap. The policy knew how to classify native browser tools during final trace reconciliation, but the Claude Code and Codex hook matchers did not subscribe to those tool namespaces. The runtime therefore executed three native browser navigations before Stop could report the violation.

## Root cause

The managed matchers covered shell, edit, write, and node-repl tools only. Native calls under `mcp__agent-browser__browser_*`, `mcp__browser-harness__browser_*`, and `mcp__browser__browser_*` bypassed PreToolUse and PostToolUse enforcement. Final reconciliation was honest, but it was necessarily too late to prevent repeated proof attempts and their token/time cost.

## Repair

- Claude Code, Codex, and benchmark-contract matchers now include all three native browser namespaces.
- Every intercepted native browser PreToolUse increments the installed policy's observed-call count and records `host-hook` as its source.
- The first native browser proof remains allowed. A failed first attempt may close as unresolved.
- A second native browser proof attempt is denied before execution. It remains visible as attempted recovery in the proof trace, so it can fail the skill-quality proof-execution gate without falsely failing the shared infrastructure gate.
- Stop reconciliation subtracts the hook-observed attempts from native trace calls, preventing a correctly intercepted denial from being mislabeled `native-browser-unintercepted`.

This preserves the scientific boundary: shared enforcement defects invalidate a cell, while a model or skill that attempts prohibited recovery under working enforcement can receive a valid quality failure.

## Acceptance

- focused hook/install/doctor contract: 101/101 passed;
- wider proof/prepare/run/report/runtime regression: 94/94 passed;
- TypeScript lint, build, and diff check: passed;
- provider calls during repair: 0;
- quality promotion: none.

The next live attempt requires an exact committed 1.9.328 host-policy pin, a fresh preregistration, and fresh committed/detached/clean cells. `/private/tmp/u19325` is permanently excluded from resumption.

## Exact host-policy pin — 1.9.329

Committed source `682c094d…` is pinned in `HOST-POLICY-PIN.json` with the managed Codex config hash, all four source and rendered installed hook hashes, the three native-browser matcher namespaces, and the executable proof sequence. A same-permission browser-harness doctor run confirmed Chrome, daemon, and one active connection before any provider call; optional cloud authentication remains irrelevant to local proof. This is an infrastructure pin, not a treatment or quality promotion.
