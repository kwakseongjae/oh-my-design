# Proof-trace pipeline integration — findings

Status: **provider-free integration complete**.

Cursor and Codex cells now write `.benchmark/proof-trace.json` during normalized run export. The same object is embedded at `run-record.json#runtime_diagnostics.proof_trace`, referenced from the evidence block, included in checkpoint summaries, and covered by explicit artifact hashes and benchmark-tree integrity checks.

Unstarted-cell integrity treats a stray proof-trace artifact as execution dirtiness. Existing Claude Code runs remain `proof_trace: null`; Cursor/Codex streams without recognizable edit evidence fail closed with `analyzable: false` rather than receiving a passing compliance score.

Focused proof-trace, exporter, Cursor runtime, and provider-neutral controller coverage is 58/58. Checkpoint/resume integrity and TypeScript lint remain green. No provider call was made.

