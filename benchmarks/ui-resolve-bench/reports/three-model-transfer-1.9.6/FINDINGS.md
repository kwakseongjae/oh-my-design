# Three-model/runtime transfer smoke — 1.9.6 findings

Run on 2026-07-22 against the preregistration in this directory.

## Decision

Accept the bounded model-transfer hypothesis and mark `1.9.6` calibration
complete. All six scheduled cells were valid and attributable, all six passed
the frozen Evidence & Unknown gate, and OmD recorded two paired wins, one tie,
and no loss against raw DESIGN.md.

This is an **internal, one-task compatibility smoke**. It is not a model
leaderboard, a runtime-neutral causal estimate, an efficiency result, or a
public claim that OmD is the best UI skill.

## Frozen result

| Model/runtime row | Raw DESIGN.md | OmD portable | Paired result | Objective delta |
|---|---:|---:|---:|---:|
| `gpt-5.6-terra` / Codex | UI-Resolved · 85/85 | UI-Resolved · 85/85 | tie | 0 |
| `claude-fable-5` / Claude Code | not resolved · 66/85 | UI-Resolved · 85/85 | OmD win | +19 |
| `claude-opus-4-8` / Claude Code | not resolved · 61/85 | UI-Resolved · 85/85 | OmD win | +24 |

- Scheduled / valid / attributable: **6 / 6 / 6**
- Raw UI-Resolved: **1 / 3**
- OmD UI-Resolved: **3 / 3**
- Paired win / tie / loss: **2 / 1 / 0**
- Raw mean objective: **70.67 / 85**
- OmD mean objective: **85 / 85**
- Evidence ledger complete: **6 / 6**
- Protected unknown claims: **0 / 6**
- Unsupported proof structures: **0 / 6**
- Infrastructure / sandbox / cwd failures: **0 / 6**

The canonical machine result is `SUMMARY.final.json`. The local normalized
records and full run evidence remain under `/tmp/u196`; they are not copied into
the repository because they include large generated workspaces and event logs.

## What changed in the two winning pairs

The Fable raw cell expanded the protected FAQ contract from two items to three
and reused `#e7683d` for 13px status text on white, producing a serious
3.25:1 color-contrast failure. Its OmD pair preserved the two-item contract and
passed every critical gate.

The Opus raw cell expanded three protected price hooks to six and two FAQ hooks
to four. That broke the frozen billing and FAQ state oracles. It also introduced
the same serious 3.25:1 status-text contrast failure. Its OmD pair preserved the
original cardinalities and passed every critical gate.

Terra already preserved the complete contract in the raw cell. OmD neither
improved nor regressed it, which is the expected transfer result for an already
resolved control.

## Evidence & Unknown boundary

Every artifact retained a complete evidence ledger and introduced neither a
protected unknown claim nor testimonial, logo-wall, or social-proof structures
without evidence. The acceptance criterion therefore passes independently of
the UI-Resolved result.

This task only measures evidence honesty in the downstream apply workflow. It
does **not** invoke semantic catalog search, compare reference ranking, or test
the transfer of `verified_v2`, `partial`, and `legacy_snapshot` statuses. Those
remain separate task-pack work, currently scheduled for the locale/evidence
expansion patch.

## Runtime and token observations

| Row | Raw wall | OmD wall | Delta | Raw uncached tokens | OmD uncached tokens | Delta |
|---|---:|---:|---:|---:|---:|---:|
| Terra | 322,884ms | 414,881ms | +28.49% | 471,317 | 693,801 | +47.20% |
| Fable | 502,963ms | 532,385ms | +5.85% | 98,651 | 108,843 | +10.33% |
| Opus | 687,508ms | 828,360ms | +20.49% | 130,620 | 169,621 | +29.86% |

OmD was slower and used more uncached tokens in all three single observations.
This must remain visible, but one trial cannot establish stable overhead. Claude
Code also records a small internal Haiku helper allocation; exact Fable and Opus
usage is preserved in the machine summary. Provider price-equivalent telemetry
is not evidence that the subscription account was billed that amount.

Cross-row comparison is invalid because Terra used Codex while Fable and Opus
used Claude Code. Only raw-versus-OmD comparisons inside the same row are
paired.

## Acceptance audit

1. Six valid and attributable runs — **pass**.
2. Evidence & Unknown gate in all six runs — **pass**.
3. No within-row OmD UI-Resolved loss — **pass**.
4. No unsupported claim or proof structure in an OmD cell — **pass**.

The deterministic aggregate emits degenerate 0% or 100% bootstrap intervals
because each group contains one task and one trial. Those intervals are not
reported as inferential evidence.

## Next experiment

`1.9.7` should move to the Harness Track: install and attribute the specialist
agent bundle, run repeated trials across multiple task contracts, and measure
whether specialist handoffs recover enough quality to justify their time and
token cost. Keep `1.9.6` fixed; do not tune it after observing these results.

