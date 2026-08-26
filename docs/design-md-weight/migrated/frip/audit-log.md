# Frip — B2a·E2 audit log

Auditor: separate session (F3), opus5. Date: 2026-08-26.
Scope: **B2·B2a and E1·E2·E2a–c only.** No other clause was applied.
Inputs: the three migrated artifacts plus `web/references/frip/DESIGN.md` and the sibling
`web/references/frip/.verification.md`. The migration worker's own account of what it did was
not treated as evidence — every row below was re-measured against the files.

Counting rule used throughout: `grep -o <pattern> <file> | wc -l`, per file, never `grep -c`.
Where a shell returned nothing, file existence was confirmed with `find` before writing a zero.
The sibling was addressed by its full dotfile path, `web/references/frip/.verification.md`
(6,341 bytes, SHA-256 `887d5ad7443c8f080c178d6e1e76fd3416e020c851cf2c06dcffaa6410dadc6d`,
19 `^- ` raw-sample bullets — all three figures match the ledger).

**No token value, component field, state applicability verdict, or table structure was
changed.** The one portable-body edit replaced a single line in place, so `DESIGN.md` is still
502 lines and every line reference in `provenance.md` and `migration-log.md` still resolves.
The gate still returns `verdict: PASS`, `problems: []`, and `inspectDesignMd(...).conformance`
still returns `portable_core: true`, `level: "portable-core"`, `reasons: []`.

---

## B2a — one defect, in the portable body

### Fix 1 · `DESIGN.md` line 453, Content & Locales → Terminology

**Was:** `- Trusted hosts carry the 슈퍼호스트 badge; first-party inventory carries the 프립단독 tag.`

The clause "first-party inventory carries the 프립단독 tag" is an editorial reading, not a
recorded value and not a published string. 프립단독 is a published label meaning *Frip-only*;
that it *flags first-party inventory that cannot be had elsewhere* is the legacy §2 gloss on
the Exclusive Red role. The same reading is attributed everywhere else in this document —
Foundations → Semantic color line 94 ("The reviewed material reads it as flagging first-party
inventory that cannot be had elsewhere") and the Exclusive Tag record line 338 ("which the
reviewed material reads as flagging first-party inventory") — and Pass 1 item 3 of
`migration-log.md` deliberately **removed** the same classification from Experience → Audience
for exactly this reason. Terminology was the one site where it survived as a flat product fact
with no attribution and no evidence class.

**Now:** the bullet attributes the reading, closes the evidence class in the fixed B2a form
(*derived editorial implementation inference … not Frip-authored or a separately published UI
specification*), and names the two published tag strings and their recorded values as the
recorded parts. Kept to one line so no line reference shifted.

Post-fix measurement: `grep -o 'derived editorial' DESIGN.md | wc -l` = **14** and
`grep -o 'not Frip-authored' DESIGN.md | wc -l` = **14**, on the same 14 lines
(15, 17, 47, 57, 70, 159, 181, 203, 220, 243, 412, 414, 433, 453). Thirteen use the fixed
interface form; line 17 is the brand-history variant closing as *not Frip-authored or a
separately published brand statement*. Published-string counts are unchanged by the edit —
프립단독 still 8, 슈퍼호스트 still 10 — so the A5 table in `migration-log.md` remains valid.

**Nothing else in the body was qualified.** The full sentence-by-sentence pass classified every
sentence as brand-published fact / recorded observation / editorial reading. The remaining
readings outside the 14 are attributed in place to the reviewed material and were left alone
deliberately: Foundations → Semantic color's head sentence (89) with its two glosses (93, 94),
Foundations → Spacing's "dense, tap-friendly commerce spacing" (133), and Terminology's "terse
trust and urgency signals" (456). Calibration for that threshold is the approved toss
migration, which carries exactly **1** `derived editorial` occurrence across 356 lines and
opens its own Scope with a flatly stated editorial characterization; frip at 14 is far above
that bar, and rulebook v5 records that over-application blocked an approved sample. The
residual ambiguity is noted under *범위 밖 관찰* rather than edited.

---

## E1 — provenance derived scope was narrower than the body

### Fix 2 · `provenance.md` → *Portable derived-editorial scope (E1)*, head sentence

Counts and the line list moved 13 → 14 with the added line 453, and "Twelve use the fixed form"
became "Thirteen". A paragraph records that row 14 came from this audit rather than the worker,
and why.

### Fix 3 · `provenance.md` → same section, occurrence table

Row **14 | 453 | §6 Content & Locales → Terminology** added, naming what it covers and what the
recorded parts are. The table is again 1:1 with the body: every body occurrence is listed and
nothing is listed that the body does not carry.

### Fix 4 · `provenance.md` → same section, closing paragraph

**Was:** "Foundations → Semantic color, Spacing, Shape, and the Elevation table itself hold role
names and recorded values; … the Brand-published lines, Terminology, and Locale subsections
hold published strings and the source's own statements about them."

Measurably not so. Semantic color holds two evaluative readings at 93 and 94 — the log's own
Pass 1 calls them "the two evaluative glosses" — Spacing holds one at 133, and Terminology held
the unattributed one now fixed. Claiming those subsections hold only role names, recorded
values, and published strings understates the derived scope, and a scope written narrower than
the body is as wrong as one written broader.

**Now:** Shape, the Elevation table, the component records, Brand-published lines, and Locale
keep the clean description; Semantic color and Spacing are named as holding in-place-attributed
readings that are deliberately not counted, with their line numbers; and Terminology is
identified as the one restatement of that class that carried no attribution, which is why it
became row 14 instead of a third entry in that paragraph. The trailing line-count note now says
the numbers are the post-audit build and that the fix shifted no reference.

---

## E2 — six ledger defects

### Fix 5 · `migration-log.md`, trailing-HTML-comment row — a missing second destination (E2a)

**Was:** "3개 항목은 옮김 → portable body … Three things reach the portable body … The
§-numbered addressing, the `.verification.md` pointer, and the observation list itself stay in
the ledger."

There is a fourth. The comment's method-and-scope line is the **only** place in the source file
that carries the four product-detail surface paths — `grep -oF '/165667'
web/references/frip/DESIGN.md | wc -l` = **1**, at line 411, and the same for `/121737`,
`/191730`, `/188510` — and all four reach portable Experience → Scope line 11:
`grep -oF '/165667' DESIGN.md | wc -l` = **1** each. They are dual, and the row recorded them
as ledger-only. **Now** the row says four, enumerates the paths, and carries the greps on both
sides. The `.verification.md` pointer claim was re-measured and holds: **0** in the body.

### Fix 6 · `provenance.md` → *Deletions*, footer/trailing-comment bullet

The same defect in the sidecar's own words ("Three things inside them are dual (E2a)").
Corrected to four with the same measurements, and it now also records that the footer's two
Tier-1 URLs appear in the body but arrive from their other legacy carriers rather than from the
footer.

### Fix 7 · `migration-log.md`, §4 mid-file footer row

**Was:** "Only the 2026-07-02 date is dual (E2a)."

`grep -oF 'https://www.frip.co.kr/' DESIGN.md | wc -l` = **2** (lines 11, 121) and
`grep -oF 'medium.com/frientrip' DESIGN.md | wc -l` = **2** (lines 11, 441) — both strings the
footer's Tier-1 line names do occur in the body, so "only the date" was not the whole
measurement. The attribution is still correct (they reach the body from the YAML `homepage`
field and §10's voice-sample marker at source line 343), and the row now states both facts.
The rest of the footer was verified absent: `getdesign` **0**, `refero` **0**, `Conflicts`
**0** in the body.

### Fix 8 · `migration-log.md`, §15 `cubic-bezier` deletion row — a measured claim that was false

**Was:** "`grep -oF 'cubic-bezier' web/references/frip/DESIGN.md | wc -l` = 3; the same count
across all three outputs is **0**."

Re-measured: the string `cubic-bezier` is **0** in `DESIGN.md`, **3** in `provenance.md`, and
**3** in `migration-log.md` — not 0 across all three outputs. What *is* 0 everywhere is the
three curve **values**: `cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, and
`cubic-bezier(0.25, 0.1, 0.25, 1)` each return 1 in the source and 0 in all three outputs. The
six ledger occurrences are mentions inside deletion records, not carriage. **Now** the row
measures the values, states the token-name counts separately, and says which is which.

### Fix 9 · `migration-log.md`, Pass-2 re-measured table

The row `| cubic-bezier in the source / in the three outputs | 3 / 0 |` carried the same wrong
unit. Relabelled to the curve values, with the token-name spread `3 / 0 / 3 / 3` recorded beside
it.

### Fix 10 · `migration-log.md`, A5 Latin-side check, CSS-shaped values bullet (E2c)

**Was:** "`box-shadow: none`, `rgba(0,0,0,0.4)`, `1px solid #e6e6e6`, `1px solid #dddddd`,
`prefers-reduced-motion: reduce`. **All present.**"

`grep -oF '1px solid #dddddd' DESIGN.md | wc -l` = **0**. The value is not lost — the body sets
the hex in inline code where the source did not — but "all present" was a literal-presence claim
the grep does not support, and a presence claim written stronger than the file is the E2c
failure. Measured per form and now recorded that way: ``1px solid `#dddddd` `` **1** (line 310),
``1px `#dddddd` `` **1** (line 251), ``` `1px #dddddd` ``` **2** (lines 243, 323);
`1px solid #e6e6e6` **2** (lines 153, 159) plus ``1px solid `#e6e6e6` `` **1** (line 332). The
other three are literal: `box-shadow: none` **3**, `rgba(0,0,0,0.4)` **3**,
`prefers-reduced-motion: reduce` **1**.

### Fix 11 · `migration-log.md`, Gate section — the emitted result was transcribed in part

**Was:** "→ **PASS**, `problems: []`, no `unchecked` entry."

The gate also emits a `coverage` block, and the row that claimed to record the gate result
dropped it. Re-run: `copy-loss`, `compared: 32`, `candidates: 206` — the machine compared
**32 of 206** quoted strings, **15.5%**. **Now** transcribed verbatim, with the note that the
15 non-Latin needles counted elsewhere in the log are runs *inside* those 32 quotations, so 15
and 32 are different units and neither is the coverage ratio, and that PASS means "nothing lost
among the 32 compared".

### Fix 12 · `migration-log.md`, Pass-1 closing paragraph — stale counts

"thirteen readings remain … = 13 and … = 13, on the same 13 lines" was true when written and is
now false. Rewritten to keep the worker's Pass-1 account intact, name the fourteenth occurrence
it missed and why the miss was structural (the same author had already stripped that exact
classification out of Audience), and give the current measurement of 14/14 with the line list.

---

## Verified and left alone

Checked against the files and found accurate, so not touched:

- **A5 string table** — all 25 rows re-counted with `grep -oF … | wc -l` against `DESIGN.md`.
  Every figure matches: 프립 20, 대한민국 1등 취미여가 탐색 플랫폼 3, the full title tag 1,
  주간 인기 BEST 🏆 2, 주간 인기 BEST 5, 참여하기 7, 신청마감 5, 앱 다운로드 6, 프립단독 8,
  슈퍼호스트 10, 신규프립 에너지x2 3, 프립 정보 2, 신규 프립 3, 기획전 3,
  크루님을 위한 고감도 경험 3, 이런 모임은 어때요? 1, 고감도 경험 5, 크루 7, 프렌트립 2,
  카테고리 3, 피드/메시지/찜/마이 5 each, 오류 2, 혼자여행 0.
- **Multi-destination table (E2a)** — every claimed line number resolves exactly, including the
  two-occurrences-on-one-line case for the positioning line at 439.
- **혼자여행 disposition** — source 1 (line 369), body 0, `provenance.md` 3, `migration-log.md` 6,
  every ledger occurrence inside a deletion record. Matches the log.
- **§9 deletion (A3 check)** — the four Korean strings occur outside §9 in the source at
  프립단독 10, 참여하기 10, 주간 인기 BEST 6, 앱 다운로드 6. Exactly as claimed.
- **§14 States, §10 Voice table, §6 Elevation table** — byte-identical to the source under
  `diff`. The "preserved in full" and "all five rows verbatim" claims hold.
- **B3 compliance claim (E2c)** — the log claims it because the body carries it, and the body
  does: line 183 names all five evidence kinds (transition properties, animation name, duration,
  easing, reduced-motion behavior), the per-component computed-observation gate, and the "a
  single named curve or duration is not that gate" clause. **C3** likewise: line 235 reads
  "State coverage is not complete here."
- **15 non-Latin needles** — replayed the gate's own `QUOTED_COPY` and `NONLATIN_RUN` regexes
  against the source: **15** distinct runs. The log's figure is right.
- **Structural counts** — re-measured with `grep -o` rather than the log's `grep -c`:
  `^- Type: ` = **7**, `^| State | Applicability | Reason |` = **4**. Both figures correct.
- **Sibling ledger** — bytes, SHA-256, heading, grade, method quote, Sources list, conflict
  matrix, KR regional statement, and the 19 raw samples all match the dotfile.

---

## 범위 밖 관찰

Findings outside B2a·E2. **Not fixed** — recorded with the clause and the measurement.

**A5 / A5a — Latin hand sweep, no loss found.** The orchestrator asked for Latin copy loss to be
reported even though it is out of scope. Extracted all distinct Latin quoted strings from
`web/references/frip/DESIGN.md`: **111**. Of those, **13** are absent from both `DESIGN.md` and
`provenance.md`. None is brand-published copy. Breakdown: three are the dispositioned
`cubic-bezier(...)` curve values; one is `1px solid #dddddd`, present in the backticked form
(Fix 10); six are YAML `use:` field prose that the body carries in the source's own §3/§4
wording instead (`"Product-detail H1 title, SUIT"` → `Product-detail H1`,
`"Hero discount percentage in sale red"` → `Hero sale percentage, in sale red`,
`"Standard reading + UI text, SUIT"` → `Standard reading + nav text`,
`"Quantity / option selector pill on booking panel"`, `"Top navigation / category tab"`,
`"text #7a29fa on active nav/category item"` — all present with different casing or spacing);
one is `"UI Frip, Noto Sans KR"`, the YAML fallback pair, present inside the full computed stack;
one is `"motion-standard / ease-enter"`, present at line 179 split into two code spans; one is
`"the next step."`, present at line 15 without the trailing period inside the quotes. **The
log's claim "No brand-published Latin string was lost" holds.** The gate's own denominator
(32/206, 15.5%) is now recorded in the Gate section per Fix 11; it is above the 4.4% corpus
average but far below 50%, so it is not conformance evidence for A5.

**B1 — clean, including the finda failure mode.** No sibling-only value and no sibling-side
structural classification crossed into the portable body. Values: `22px` 0, `64%` 0, `rgb(` 0,
`1 / 7` 0, `강릉갈래` 0, `Flowmapp` 0, `×1489` 0, `×62` 0, `×60` 0, `×25` 0, `×40` 0, `×95` 0,
`×109` 0, `×11` 0, `6px 10px` 0, `cccccc` 0, `HTTP 200` 0, and the instrumentation vocabulary
(`playwright`, `getComputedStyle`, `chromium`, `headless`, `domcontentloaded`, `lazy-load`,
`Escape`, `frequency scan`) 0 each. Classifications: the sibling names its samples by DOM level
— `section H2` 0, `product H2` 0, `product H1` 0 in the body. The one structural phrase the body
carries, `Product-detail H1` (**1**, line 211), is the source's own Notes-column wording at
`web/references/frip/DESIGN.md` line 118, not the sibling's naming. `focus-visible` is 0 in the
source and no `focus-visible` row in the body carries a treatment value.

**A5 — three source glosses dropped in §8 Touch Targets.** The legacy §8 bullets read "…full-width
— an unmistakable tap target", "…7px 15px padding — comfortably tappable", and "…~56px header,
spaced for touch". In Layout & Platforms → Recorded touch measurements the measurements survive
and the three glosses do not: `unmistakable tap target` **0**, `comfortably tappable` **0**,
`spaced for touch` **0** in the body. They are legacy evaluative prose, not brand-published
strings and not values, so this is not an A5 or A1 loss — recorded for the reviewer's judgment,
not fixed.

**Ledger method inconsistency, numbers correct.** `migration-log.md` states its own rule ("Counts
are occurrences, measured per string with `grep -oF … | wc -l` — not `grep -c`, which would
report matching lines") and then uses `grep -c` in **4** places; `provenance.md` uses it in **3**.
Re-measured every one with `grep -o`: the figures are right, because both patterns
(`^- Type: `, `^| State | Applicability | Reason |`) are line-anchored and occur at most once per
line. Not corrected — no number is wrong — but the stated method and the usage disagree.

**Structure vs. qualification tension in §5.** The heading `### Recorded breakpoint bands` and its
`Recorded behavior` column header assert recordedness, while the adjacent line 412 states that
the band names, widths, per-band behavior, and collapsing statements are a derived editorial
inference and names the eight measurements that *are* recorded. The qualification is adjacent and
complete, so B2a is satisfied; the headings pull the other way. Headings and table structure are
outside this audit's edit mandate, so this is reported rather than changed.

**"The reviewed material" is never defined in the portable body.** The phrase carries **34**
occurrences and does the attribution work for every reading not counted in the 14. A standalone
reader has no in-body statement that "the reviewed material" is the legacy record being migrated
rather than material Frip itself published, which is the distinction B2a exists to close. Not
treated as a violation here — the approved toss migration is looser still — but if B2a is ever
tightened, this phrase is where frip's remaining exposure sits, and one defining clause in Scope
would close it for all 34 sites at once.

---

AUDIT_DONE fixes=12
