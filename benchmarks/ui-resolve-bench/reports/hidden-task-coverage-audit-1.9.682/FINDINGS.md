# Hidden-task coverage audit — 1.9.682

## Result

**Block the hidden-task coverage claim.** The repository contains 78 task directories, but none is explicitly both hidden and independently audit-eligible. A public task committed with its prompt and oracle cannot be retroactively described as unseen.

The inventory is also structurally imbalanced:

- locales: English and Korean only; Japanese, Simplified Chinese, and Traditional Chinese are absent;
- tracks: 77 repair tasks and one landing redesign, with no explicit creation or open-brief track;
- objective coverage: responsive, accessibility, state, and evidence contracts are common;
- absent contracts: screenshot-fidelity oracle and open-brief oracle.

## New enforcement

The coverage contract requires at least 24 tasks, all five locales, and all eight normative dimensions. A task counts only when its private manifest explicitly marks `benchmark_visibility: hidden` and `independent_audit: eligible`.

The auditor derives coverage from task files and fails closed. Its positive fixture demonstrates that 24 eligible tasks spanning five locales and every dimension can pass, while the real repository remains blocked.

## Queue consequence

Do not relabel the existing 78 public tasks as hidden. Build a separate non-public denominator registry and author fresh creation, screenshot-fidelity, open-brief, and JA/ZH-CN/ZH-TW tasks before requesting independent audit. Until then, gate 4 remains open regardless of task count.
