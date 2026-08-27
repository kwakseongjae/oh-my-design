# Fugle — F3 separate-session audit

Scope: **B2·B2a** and **E1·E2·E2a–c** only. No other clause was acted on.
Auditor input: `docs/design-md-weight/migrated/fugle/{DESIGN.md, provenance.md, migration-log.md}` and the source
`web/references/fugle/DESIGN.md`, plus the sibling `web/references/fugle/.verification.md` (dotfile — path written out
directly; invisible to `ls` and to a `*` glob). The migration worker's report was **not** an input.

Not touched, per the audit contract: token values, the component tables, state applicability, document structure.
Both body edits were written to preserve the file's line count (460 before, 460 after), so every line number already
recorded in `migration-log.md` and `provenance.md` still resolves.

Counting rule used throughout: `grep -o <pattern> <file> | wc -l`, per file. `grep -c` was not used — it counts
matching lines, which under-counts a string that occurs twice on one line. A shell `no matches found` was treated as
*unmeasured*, not as zero; file existence was confirmed with `find` first.

---

## B2a — readings that stood without an adjacent complete qualification

Every sentence in the portable body was classified as **brand-published fact / recorded observation / editorial
reading**. Ten readings already carried the complete adjacent form. Two did not.

### Fix 1 — `DESIGN.md` line 169, Foundations → Motion, the `**Rules:**` lead-in

The four rules at 171–174 are the reviewed material's own author-side prescriptions — one of them
("never animate data values themselves") is a bare imperative. They are the same evidence class as the §7 Do and
§7 Don't blocks, which this migration *did* qualify at lines 56 and 67. The qualification two lines above, at 167,
scopes itself explicitly to "the readings the reviewed material attaches to **those three curves**", so it does not
reach the Rules block; adjacency without coverage is not coverage.

Added, on line 169 so the line count is unchanged:

> **Rules:** The four rules below are the reviewed material's own prescriptions and are a derived editorial
> implementation inference from it; they are not Fugle-authored or a separately published motion specification.
> The durations and the custom-property name inside them are recorded values.

The final sentence is deliberate: it keeps the measured durations and `--layoutDuration` from being demoted along
with the prescription, the same split the Elevation qualification at 138 already uses. No token value, count or
name was added or changed — the custom property is referred to, not restated, so no value's occurrence count moved.

### Fix 2 — `DESIGN.md` line 217, Typography & Assets → Imagery and assets

The bullet ended with the flat assertion "The chart data is the visual." — an editorial reading with no evidence
class attached. It is a restatement of the §7 Don't carried at line 73, whose qualification lives at line 67, i.e.
150 lines away in a different section. B2a requires the qualification to sit **adjacent** to the reading, so a
standalone reader of §3 got no signal at all.

Rewritten in place (one line, line count unchanged):

> - The record establishes no illustration or gradient treatment to apply, and its own boundary rule keeps
>   decorative illustration and gradient washes off the trading canvas **on the reading that the chart data is
>   the visual. That reading is a derived editorial implementation inference from the reviewed material; it is not
>   Fugle-authored or a separately published art-direction specification.**

### Checked and deliberately not changed

- **Primary tasks (18–26).** The `kind=user-outcomes` block carries no qualification, but each of the five bullets
  traces to a recorded artifact (§14's empty-state and submitted-order records, the `Search / trade input` component
  `use` string, §11's REST/WebSocket portal), and three of them hedge to the record in their own wording. The
  approved `toss` migration leaves its `primary-tasks` block unqualified in the same shape. Adding one here would be
  the mechanized-heuristic false positive the rulebook withdrew at v5.
- **Audience (32).** "The stakeholder groups that remain are the ones Fugle's own published material names" reads
  as an authority claim, but each group is individually and correctly attributed in the same sentence — investors to
  the brand-published mission line, developers to "the record says". Left as is.
- **State-applicability Reason cells (257–312).** These are derivations by control meaning, which Core §4.4 mandates
  and which line 226 already frames as such. They are clause-C territory and explicitly out of this audit's edit scope.

Result: `grep -o 'derived editorial' DESIGN.md | wc -l` = **12**, `grep -o 'not Fugle-authored' DESIGN.md | wc -l`
= **12**, on twelve distinct lines — 15, 36, 46, 56, 67, 138, 167, **169**, **217**, 362, 369, 405.

---

## E1 — provenance's derived scope measured against the body

Before the audit the *Portable derived-editorial scope* table listed **10** rows against a body carrying **10**
qualifications — a correct 1:1 map at that moment. The two B2a fixes above move the true count to 12, so the ledger
would have been **narrower than reality**, which is the fastcampus failure mode and fails just as hard as being wider.

### Fix 3 — `provenance.md`, *Portable derived-editorial scope (E1)* table

Two rows added and the table renumbered 1–12 so its order matches body-line order:

- new **#8** — Foundations → Motion, `**Rules:**` lead-in (body 169)
- new **#9** — Typography & Assets → Imagery and assets (body 217)

Old #7 was relabelled "Foundations → Motion, curve note" so the two Motion rows are distinguishable; old #8–#10
became #10–#12.

### Fix 4 — `provenance.md`, the count line under that table

`= 10 … = 10` → `= 12 … = 12`, and the twelve line numbers are now listed in the ledger itself, so the 1:1 map can
be re-measured against the body without re-deriving it.

---

## E2 / E2a / E2c — migration-log rows checked against the files

Every row of the log was re-grepped against the three outputs rather than read. **The claimed destinations all
exist** — no phantom second destination of the fitpet kind. Every line number in the *Multi-destination values*
table and in the *Traditional Chinese, string by string* table resolves exactly (spot-verified across 28 values:
`#f4af1c` 9 occurrences at 15/38/58/84/100/237/249/448×2, `#eaeaea` 8, `Lato` 11, `新增自選股` 3 at 22/236/386,
`富果` 2 at 9/387, and so on). Eleven rows were nonetheless wrong or incomplete.

### Fix 5 — A5 section, opening measurement (log line 13)

Claimed "13 contiguous Traditional-Chinese runs exist in the file, 12 of which … the gate builds a needle from".
Measured with a contiguous-non-Latin-run extraction over the source: **11** runs, one occurrence each. The gate's own
`coverage` object reports `compared: 10`. The log's *reasoning* held — the single unseen run is the 2-character
`富果` — but both counts were too high. Corrected to 11 / 10, with the eleven runs named and the gate figure cited.

### Fix 6 — E2c: a compliance claim the log itself contradicts (log line 17)

The log asserted "`grep -c` is not used anywhere in this log." It was used — as the stated measurement command three
times in the C2 section and once (`grep -icE`) in the `focus-visible` check. Measured before the fix:
`grep -o 'grep -c' migration-log.md | wc -l` = **4** (three uses plus the disclaimer itself),
`grep -o 'grep -ic' … | wc -l` = **1**. This is E2c exactly: a conformance claim written stronger than the artifact.
The claim was rewritten to state what is true and to disclose the correction.

### Fixes 7–8 — the affected measurements restated in occurrence form

Both were re-run as `grep -o … | wc -l`. **The numbers did not change**, because each pattern is line-anchored and
cannot match twice on a line — state-table headers **3**, `- Kind:` **3**, `- Type:` **6**, `not-applicable` **4**
(311, 312 and two inside the line-226 policy sentence), `applicable` rows **19**, focus-visible-with-hex **0**.
Restated anyway so the log's method matches its own stated method.

### Fix 9 — E2: the frontmatter row's prose-collision disclosure was one-sided

The row already disclosed that the `category` value `fintech` returns 1 from the body (line 403, inside §11 prose,
not the field). The identical situation for the other two fields was undisclosed. Measured and added:
`TW` = **2** (lines 96, 97 — the source's own "(TW convention: red = up)" / "(green = down)" parentheticals);
`fugle` = **5** (11 ×2, 216, 316, 403 — brand domains, the favicon slug, and the `fugle-trade-box` class the
source itself names). The row's "ledger-only **as fields**" claim survives; its evidence is now symmetric.

### Fixes 10–12 — E2a: three section rows named only one of two destinations

E2a requires both destinations when a value lands twice. Measured in the body:

| Legacy section | Logged destination | Missing destination | Measurement |
|---|---|---|---|
| §7 Do's (6) | Experience → Recorded application rules (54–63) | Content & Locales → Locale (411, 412) | `Taiwan Stock Exchange` = 2 (59, 411); `data-dense` = 2 (61, 412); `Latin numerals` = 2 (61, 412) |
| §7 Don'ts (6) | Experience → Avoid (65–74) | Typography & Assets → Imagery and assets (217) | `decorative illustration` = 2 (73, 217); `gradient washes` = 2 (73, 217); `chart data is the visual` = 2 (73, 217) |
| §3 Typography Rules | Font evidence / Family / Type roles | Icons (212) and Content & Locales → Script pairing (412) | `Material Icons` = 2 (188, 212); `Microsoft JhengHei` = 3 (187, 196, 412) |

The §7 Don't case is the one that matters most: the second destination is precisely the sentence B2a Fix 2 had to
qualify, and nothing in the log recorded that the rule travelled there at all.

### Fix 13 — §15 row records the new qualification

The §15 Motion & Easing row now states that the three curve characterizations sit under the qualification at 167 and
the four Rules under the one at 169, matching how the §7 rows already cite 56 and 67.

### Fix 14 — Pass 1 (B2a) closing paragraph

"After the fixes, **ten** readings remain … = **10** … on ten distinct lines" was true when written and is now stale.
Updated to twelve with the corrected line list, plus a two-row table naming the two the audit added and why the
worker's own pass could not see them.

### Fix 15 — E2c: the Gate paragraph now cites the gate's real coverage

The paragraph claimed the gate checked "12 non-Latin needles". Replaced with the gate's own reported object —
`compared: 10`, `candidates: 151`, i.e. **6.6%** — and with the reading that `verdict: PASS` means "nothing was lost
among the ten", not "copy preserved".

---

## Verification after the fixes

| Check | Result |
|---|---|
| `wc -l DESIGN.md` | 460 — unchanged, so all recorded line numbers still resolve |
| `grep -o 'derived editorial' DESIGN.md \| wc -l` | 12 (15, 36, 46, 56, 67, 138, 167, 169, 217, 362, 369, 405) |
| `grep -o 'not Fugle-authored' DESIGN.md \| wc -l` | 12 — same twelve lines |
| provenance E1 table rows | 12, in body-line order, 1:1 with the above |
| `grep -o 'grep -c' migration-log.md \| wc -l` | 1 — the disclosure of the correction only |
| Core claim markers / `claim-end` / section anchors | 7 / 7 / 7 |
| `not-applicable` cells, `applicable` rows | 4 / 19 — unchanged, untouched |
| `node test-v2/tools/migrate-reference.mjs --brand fugle --gate-only` | `verdict: PASS`, `problems: []` |

---

## 범위 밖 관찰

Reported, not fixed — these are B1 and A5, outside this audit's mandate.

### B1 — sibling classification carried into the portable body as fact (3 items)

The value-level check is clean: every sibling-only *value* returns 0 from the portable body — `#ff3737` 0,
`#6fda1a` 0, `#545454` 0, `--t20` 0, `156,854` / `54,782` / `129,961` / `1,649,565` 0, `富果股份有限公司` 0,
`Taipei` 0, `zh-Hant` 0, `tw.fugle.flutter.app` 0, `manifest.json` 0, `Docusaurus` 0, `NOT LISTED` 0,
`raw source-file` 0. But B1 covers **classification**, not only values — the finda case failed with every value
grep at 0 — and three classifications did cross over.

1. **`DESIGN.md` line 13** — "The App Store listing is where the record takes its published Traditional Chinese
   copy." The source ties the App Store to the *tone of its illustrative samples* only (§10: "modelled on App Store
   copy tone") and attributes the published mission line to Fugle's own mission framing (§11). The link between the
   store listing and the **published** line exists only in the sibling, raw sample 14. The log's own B1 section
   states this rule and claims the attribution was removed: *"The source's §11 attributes it to Fugle's mission
   framing and does not tie it to the store listing; only the sibling does. Both now say what §11 says."* — yet this
   sentence still says it, and the log records it as B2a fix #1, i.e. one unsupported judgment was swapped for a
   sibling-derived one. Measured: `App Store` = 5 in the body (11, 13, 106, 362, 393), = 1 in the source (218).

2. **`DESIGN.md` lines 11 and 448** — "meta tags" / "the site's `theme-color` **meta tag**". Measured:
   `meta tag` = **2** in the portable body, **0** in the source, **1** in the sibling. The source footer says
   "HTML `theme-color`" and "(HTML, inline CSS, manifest.json)"; the sibling says "(full HTML, inline `<style>`,
   **meta tags**)" and quotes `<meta name="theme-color" content="#f4af1c">`. `provenance.md` line 109 itself lists
   the tag form under *Sibling-only values* and says outright *"The source names the `theme-color` attribute in its
   footer conflict note but not the tag"* — while the body promotes exactly that classification twice. This is the
   finda shape: value grep 0, classification crossed.

3. **`provenance.md` line 254** — the brand-published-strings table classes
   `認真的投資人值得更好的工具` as "published **App Store line**, sample 14". `migration-log.md` line 21 classes the
   same string as "published — the belief §11 says Fugle frames its mission around; corroborated by sibling raw
   sample 14". The provenance class is the sibling-derived one the log says was withdrawn; the two ledgers
   disagree. Measured: `published App Store line` = 1 in provenance, 0 in the other three files.

### A5 — Latin coverage is 6.6%, and a full hand sweep found no loss

Per the standing instruction to distrust the gate: `coverage` for fugle is `compared: 10 / candidates: 151` =
**6.6%**, in line with the 4.4% corpus average. `verdict: PASS` therefore certifies only that nothing was lost among
ten non-Latin needles.

I ran the Latin sweep independently rather than trusting the log's. Extracting every distinct backticked, bolded and
double-quoted string from the source: **176** strings; **155** survive verbatim in the portable body; **172** in the
body or `provenance.md`; **4** absent from both — and those four are exactly the D2-deleted persona headings
(`Illustrative: The Research-First Investor (個人投資者)` and its three siblings). The log's 174 / 153 / 170 / 4
differs from mine only in the denominator, which is an extraction-rule difference; the absent set is identical.

**No A5 copy loss beyond the recorded D2 deletions.** The fifteen §2 role labels with their trailing colons are
byte-exact in the body, the seven §9 colon-less declaration forms are quoted verbatim in provenance, the four
Traditional Chinese published strings and the three illustrative lines are byte-exact with English kept as gloss
beside them and never as replacement, and the source's `--p` / `--p60` / `--p20` / `--s` / `--s60` /
`--ifm-color-primary` attributions survive in the record's own line form.

---

AUDIT_DONE fixes=15
