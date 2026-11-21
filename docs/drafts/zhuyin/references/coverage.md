# /zhuyin writing — coverage of the 55 candidates

Every candidate in [`../research/rules.md`](../research/rules.md) (TW-01 … TW-55), its verdict in [`../research/verdicts.md`](../research/verdicts.md), what it became in [`writing-rules.md`](./writing-rules.md), and what `scripts/lang/zhuyin-copy-check.mjs` does with it. 2026-11-21. No native reader from Taiwan has reviewed this file.

How the columns were decided:

- **Becomes.** A rule (ZW-nn, same number as the candidate) when the verdict is "supported", or "weaker than stated" and the rule is rewritten to what the verdict says the source supports. A candidate that records a disagreement goes whole into [The project's DESIGN.md decides](./writing-rules.md#the-projects-designmd-decides), its agreed part included. Left out: candidates that state no rule, and passages that name no region (or only another region) when the verdict does not say they hold in Taiwan.
- **Addendum.** [`../research/addendum-2026-11-21.md`](../research/addendum-2026-11-21.md) replaces the superseded CLREQ quotes of TW-45 to TW-49 and TW-55 with the current text, and adds the Ministry of Education punctuation handbook (MOE-hb) and the Executive Yuan number rules (EY-num). Where the handbook takes a side the candidate lacked, the rule shows it.
- **Checker.** A rule is checked only if it passes three gates: it is not a disagreement; if it is about width or spacing, it rests on a quote whose tier is "web"; and a quoted string fires it, with a quoted near-miss beside it. Otherwise "judgment only". Rendering and CSS rules (half B) are "not in the copy checker": the checker reads strings, not styles or rendered lines.
- **Tiers.** For quotes in `rules.md` the tier is the one in [`../research/raw-check-2026-11-21.md`](../research/raw-check-2026-11-21.md). For quotes that sit only in `verdicts.md` or the addendum, the tier comes from running `scripts/lang/check-quotes-raw.mjs` on those two files against the same cache on 2026-11-21; those two reports were not committed.

| Candidate | Verdict | Becomes | Checker |
|---|---|---|---|
| TW-01 | supported | ZW-01 | ZW-01 FYI |
| TW-02 | supported | ZW-02 | ZW-02 FYI |
| TW-03 | supported (records a disagreement) | not a rule: "The project's DESIGN.md decides" | — |
| TW-04 | weaker than stated | ZW-04 (rewritten to the verdict: "in most cases", a preference; the bare verb is not called wrong) | ZW-04 FYI |
| TW-05 | supported | ZW-05 | ZW-05 FYI |
| TW-06 | weaker than stated | left out: states no rule (the verdict: one sample translation uses 我們; the "more personal feel" comment belongs to another row) | — |
| TW-07 | supported | ZW-07 | ZW-07 FYI |
| TW-08 | supported | ZW-08 | ZW-08 FYI (the click/select pair is not checked: Microsoft uses the click verb in its own examples, per the verdict) |
| TW-09 | supported | ZW-09 | ZW-09 FYI |
| TW-10 | supported | ZW-10 | ZW-10 FYI |
| TW-11 | supported | ZW-11 | judgment only (the source gives no count) |
| TW-12 | supported | left out: states no rule (the verdict: a term list from one vendor, not a stated rule) | — |
| TW-13 | supported | ZW-13 (the half-width part is not confirmed against page bytes: WordPress's rule sentence is tier "stripped", its examples "none") | judgment only (a width rule with no web-tier quote) |
| TW-14 | supported | ZW-14 (the spacing part is not confirmed against page bytes: Microsoft extract only) | judgment only (desktop resource strings; spacing has no web-tier quote) |
| TW-15 | supported | ZW-15 | judgment only (the link target's language cannot be read from the string) |
| TW-16 | supported | ZW-16 (the rule is the order; the space in the example is extract-tier and not part of it) | judgment only (no quoted wrong form) |
| TW-17 | supported | left out: states no rule (a key-name table with no rule sentence, read in the Microsoft extract; treated like TW-12) | — |
| TW-18 | supported | ZW-18 | ZW-18 FYI |
| TW-19 | weaker than stated | ZW-19 (rewritten to the verdict: sample translations and an encouragement, no rule on order) | judgment only |
| TW-20 | supported | ZW-20 | judgment only (no quoted string breaks it) |
| TW-21 | weaker than stated | ZW-21 (rewritten to the verdict: the principle rests on Mozilla and WordPress; the MOE table is descriptive) | ZW-21 FYI (only words confirmed in served bytes: Mozilla's wrong example and three page-1 rows of the MOE table) |
| TW-22 | supported | ZW-22 | ZW-22 FYI (three listed items are not checked; ZW-22 says why) |
| TW-23 | supported | ZW-23 | ZW-23 FYI (the plural s only) |
| TW-24 | supported | ZW-24 (width rests on the WordPress and Mozilla web-tier quotes; the MOE handbook gives each mark one character, centred) | judgment only (no quoted string breaks it) |
| TW-25 | supported (records a disagreement) | not a rule: "The project's DESIGN.md decides" (the guides agree on a half-width colon in software UI, but Microsoft points web pages to the full-width colon, and the MOE handbook, which does not speak of UIs, prints full-width marks; not settled) | — |
| TW-26 | weaker than stated | ZW-26 (rewritten to the verdict: corner brackets in place of English quotation marks, 2 of 3 guides; the nesting half, unsourced in the verdict, now rests on the MOE handbook, addendum B) | judgment only (no quoted string breaks it) |
| TW-27 | supported (records a disagreement) | not a rule: "The project's DESIGN.md decides". **Settled at the authority level**: the MOE handbook gives the angle bracket for article and chapter titles, so that is the default when DESIGN.md is silent; Microsoft's full-width less-than signs and WordPress's angle brackets stay listed | — |
| TW-28 | supported (records a disagreement) | not a rule: "The project's DESIGN.md decides" (both guides give the enumeration comma between Chinese items; they differ on items written in English) | — |
| TW-29 | supported (records a disagreement) | not a rule: "The project's DESIGN.md decides" (the MOE handbook gives a third form; not settled, because it matches neither guide's rule for UI strings) | — |
| TW-30 | supported | ZW-30 (Microsoft only, scoped to translated software; the MOE handbook lists the dash as a mark of its own, shown beside it) | judgment only (the authority uses the dash) |
| TW-31 | supported | ZW-31 (2 of 3 guides, as the verdict counts; the MOE handbook prints full-width parentheses, shown beside it; Microsoft's no-inner-space sentence is not confirmed against page bytes) | judgment only (the authority uses the other width) |
| TW-32 | supported | ZW-32 | ZW-32 FYI |
| TW-33 | supported (records a disagreement) | not a rule: "The project's DESIGN.md decides" | — |
| TW-34 | supported | ZW-34 (the spacing rests on the Mozilla and WordPress web-tier quotes) | ZW-34 FYI (Han next to a Latin letter or digit; a digit beside 年, 月 or 日 is skipped, as that is TW-36; the half about full-width punctuation is not checked, no quoted string breaks it) |
| TW-35 | weaker than stated | ZW-35 (rewritten to the Microsoft rule only; not confirmed against page bytes, Microsoft extract only. `rules.md` lists it among the disagreements; the verdict finds none established) | judgment only (spacing with no web-tier quote) |
| TW-36 | supported (records a disagreement) | not a rule: "The project's DESIGN.md decides" | — |
| TW-37 | supported | ZW-37 | judgment only (no quoted string breaks it) |
| TW-38 | supported | left out: states no usage rule (the verdict: locale data exists; no source says when to use it) | — |
| TW-39 | supported | ZW-39 | judgment only (no quoted string breaks it) |
| TW-40 | supported | ZW-40 | judgment only |
| TW-41 | supported | ZW-41 (with the Executive Yuan rule for government documents, addendum C) | judgment only (no quoted string breaks it) |
| TW-42 | weaker than stated | ZW-42 (rewritten to the verdict: Microsoft only) | ZW-42 FYI (a plus sign right after Chinese text) |
| TW-43 | supported | ZW-43 (with the MOE handbook's position lines) | not in the copy checker (glyph position comes from the font) |
| TW-44 | supported | ZW-44 | not in the copy checker (rendered width) |
| TW-45 | supported | ZW-45 (the two-cell width, which the MOE handbook states for Taiwan; the no-split half names no region and is not a Taiwan rule) | not in the copy checker (line breaking) |
| TW-46 | weaker than stated | ZW-46 (rewritten to the current CLREQ, which names 港台; the superseded "not strict in Traditional Chinese" notes are gone; with the MOE handbook's rule for paired marks) | not in the copy checker (line breaking) |
| TW-47 | weaker than stated | ZW-47 (rewritten to the current CLREQ 6.3.2, which names Taiwan; the superseded Simplified-only exceptions are gone; the bracket-adjacency sentence names no region and is left out) | not in the copy checker (rendering) |
| TW-48 | weaker than stated | ZW-48 (rewritten to the current CLREQ 6.1.3, which names 港台) | not in the copy checker (CSS) |
| TW-49 | weaker than stated | left out: no region named (the current CLREQ 6.3.3 names none); ZW-34 covers the typed space | — |
| TW-50 | supported | ZW-50 (the Taiwan passage: the MOE handbook does not list the mark; the placement sentence names no region) | not in the copy checker |
| TW-51 | weaker than stated | ZW-51 (rewritten to the verdict: Taiwan is named only for Kai in official documents) | judgment only |
| TW-52 | supported | ZW-52 | not in the copy checker (CSS font stacks) |
| TW-53 | supported | ZW-53 | not in the copy checker (Windows resource strings) |
| TW-54 | weaker than stated | ZW-54 (rewritten to the verdict: one agency's own site, a recommendation, with a 13px row of its own) | not in the copy checker (CSS) |
| TW-55 | weaker than stated | left out: no region named, and the passage is about the type area of a printed book (current CLREQ 7.1.1.5) | — |

Counts: 42 rules (ZW), 11 of them rewritten to the verdict (TW-04, 19, 21, 26, 35, 42, 46, 47, 48, 51, 54); 7 candidates in "The project's DESIGN.md decides" (TW-03, 25, 27, 28, 29, 33, 36), one of them settled at the authority level (TW-27); 6 left out (TW-06, 12, 17, 38 state no rule; TW-49, 55 name no region). The checker tests 15 of the 42 rules, all at FYI. No rule reaches WARN: none rests on an authority or two non-translation sources that also give the matched form as wrong. A test (`test/unit/scripts/zhuyin-copy-check.test.mjs`) checks that this table has every candidate once and agrees with the rule file and the checker.
