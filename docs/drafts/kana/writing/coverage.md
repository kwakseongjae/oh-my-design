# /kana writing — coverage of the 57 candidates

Every candidate in [`rules.md`](./rules.md) (UW-01 … UW-57), its verdict in [`verdicts.md`](./verdicts.md), what it became in [`../references/writing-rules.md`](../references/writing-rules.md), and what `scripts/lang/kana-copy-check.mjs` does with it. 2026-11-21.

| Candidate | Verdict | Becomes | Checker |
|---|---|---|---|
| UW-01 | supported | KW-01 | judgment only |
| UW-02 | supported | KW-02 | KW-02 FYI |
| UW-03 | supported | KW-03 | judgment only (menu items not traceable) |
| UW-04 | supported | KW-04 | judgment only (checkbox labels not traceable) |
| UW-05 | supported | KW-05 | judgment only |
| UW-06 | supported | KW-06 | KW-06 FYI |
| UW-07 | weaker than stated | KW-07 (rewritten to the verdict) | KW-07 FYI |
| UW-08 | supported | KW-08 | judgment only |
| UW-09 | supported | KW-09 | KW-09 WARN |
| UW-10 | supported | left out: states no rule (examples only) | — |
| UW-11 | supported | KW-11 | KW-11 FYI |
| UW-12 | supported | KW-12 | KW-12 FYI |
| UW-13 | supported | KW-13 | KW-13 FYI |
| UW-14 | supported | KW-14 | KW-14 FYI |
| UW-15 | weaker than stated | KW-15 (rewritten to the verdict) | KW-15 FYI |
| UW-16 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-17 | supported | KW-17 | KW-17 FYI |
| UW-18 | supported | KW-18 | KW-18 FYI |
| UW-19 | weaker than stated | KW-19 (rewritten to the verdict) | judgment only (screen order depends on CSS) |
| UW-20 | supported | KW-20 | KW-20 FYI |
| UW-21 | supported | KW-21 | judgment only |
| UW-22 | supported | KW-22 | judgment only |
| UW-23 | supported | KW-23 | KW-23 FYI |
| UW-24 | weaker than stated | KW-24 (rewritten to the verdict) | KW-24 FYI |
| UW-25 | supported | KW-25 | KW-25 FYI |
| UW-26 | supported | KW-26 | KW-26 WARN + FYI |
| UW-27 | supported | KW-27 | judgment only (no sourced firing string) |
| UW-28 | weaker than stated | KW-28 (rewritten to the verdict) | judgment only |
| UW-29 | supported | KW-29 | judgment only (the NG verb is right for real bookings) |
| UW-30 | weaker than stated | not a rule: "The project's DESIGN.md decides" (the verdict: not a real disagreement, and neither side is a general rule) | — |
| UW-31 | supported | KW-31 | judgment only |
| UW-32 | supported | KW-32 | KW-32 FYI |
| UW-33 | supported | KW-33 | KW-33 FYI |
| UW-34 | supported | KW-34 | judgment only (the kanji has other readings) |
| UW-35 | supported | KW-35 | KW-35 FYI |
| UW-36 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-37 | supported | KW-37 | judgment only (compound vs list) |
| UW-38 | weaker than stated | KW-38 (rewritten to the verdict) | judgment only |
| UW-39 | supported | KW-39 | judgment only (no sourced firing string; asked team-lead about JTF quotes in references/rules.md) |
| UW-40 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-41 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-42 | weaker than stated | not a rule: "The project's DESIGN.md decides" (rewritten to the verdict: Ubie's page contradicts itself on the question mark) | — |
| UW-43 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-44 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-45 | not supported | left out: not supported (the one counted source prescribes three half-width dots) | — |
| UW-46 | supported | KW-46 | KW-46 FYI |
| UW-47 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-48 | supported | KW-48 | judgment only (no sourced firing string) |
| UW-49 | supported | KW-49 | judgment only |
| UW-50 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-51 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-52 | supported | KW-52 | judgment only (no sourced firing string) |
| UW-53 | supported | not a rule: "The project's DESIGN.md decides" | — |
| UW-54 | supported | KW-54 | KW-54 FYI |
| UW-55 | supported | KW-55 | KW-55 FYI |
| UW-56 | supported | KW-56 | KW-56 FYI |
| UW-57 | supported | KW-57 | KW-57 FYI |

Counts: 43 rules (KW), 6 of them rewritten to the verdict (UW-07, 15, 19, 24, 28, 38; UW-30 and UW-42 were rewritten too but sit with the house choices); 12 candidates in "The project's DESIGN.md decides"; 2 left out (UW-10, UW-45). The checker tests 24 of the 43 rules: 2 with a WARN level (KW-09, and KW-26's first check), the rest FYI only. A test (`test/unit/scripts/kana-copy-check.test.mjs`) checks that this table has every candidate once.
