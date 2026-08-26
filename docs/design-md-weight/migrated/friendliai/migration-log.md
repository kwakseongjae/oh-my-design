# FriendliAI migration log

Source: `web/references/friendliai/DESIGN.md` (unmodified)
Destination: `docs/design-md-weight/migrated/friendliai/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/friendliai/provenance.md`
Rulebook version: **v10** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-26

Every row below was checked by grepping the three output files before it was written; the line numbers are the grep results, not recollection. Bare numbers are DESIGN.md lines; provenance lines are marked `prov`.

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `country`, `category`, `homepage`, `added`, `verified`, `omd: "0.1"` | 분리 → provenance | provenance Identity (prov 7–21) and Freshness (prov 27–34). The portable file carries no frontmatter and no source URL: `friendli.ai` appears 7× in provenance and 0× in DESIGN.md. |
| `name: FriendliAI` | 옮김 → DESIGN.md H1 · 분리 → provenance | H1 `# FriendliAI Design System` (line 1) and provenance Identity (prov 9). |
| `display_name_kr: 프렌들리에이아이` | 옮김 → Experience Scope + Content Locale · 분리 → provenance | Byte-exact Korean at lines 9 and 453, with the Latin name alongside rather than replacing it (A5); also prov 11. Counted: 2 in DESIGN.md, 1 in provenance. |
| `primary_color: "#2a62db"` | 옮김 → Foundations · 분리 → provenance | Semantic color `Friendli Blue` (line 89) and provenance Identity + claim ledger. |
| `logo.type: favicon` / `logo.slug` | 분리 → provenance | prov 16, with the reason at prov 23: the slug is a third-party favicon-proxy URL, not a FriendliAI-published asset, so it is not presented as a brand asset in the body. `favicon` count: 0 in DESIGN.md, 3 in provenance. |
| `tokens.source: live-extract`, `tokens.extracted` | 분리 → provenance | prov Identity + Freshness. `live-extract` count: 0 in DESIGN.md, 1 in provenance. |
| `tokens.note` | 분리 → provenance | Quoted verbatim at prov 25. Its four values (`#2a62db`, `#2453ba`, `#0a101a`, `#f7f8fa`) and the 530 / 650 weight pair all stand independently in the body. |
| `tokens.colors` (15 values) | 옮김 → Foundations Semantic color (lines 89–104) · 분리 → provenance claim ledger | Every hex kept with its role name and use, in both destinations. `#e5ebf2` (hairline-soft) is at line 103, its only role statement anywhere in the source. |
| `tokens.typography.family.sans: Saans` | 옮김 → Typography & Assets Family (line 174) · 분리 → provenance claim ledger | Kept with the `SaansLocalFont` serving detail from §3 (2× in DESIGN.md, 2× in provenance). |
| `tokens.typography.*` role metrics (7 roles) | 옮김 → Typography & Assets Type roles (table lines 182–188) | Sizes, weights, and the unitless line heights `1.10` / `1.20` / `1.30` / `1.40` / `1.55` preserved as ratios rather than converted to px (A1a), each verified present. The rem equivalents from §3 sit in the same cells. |
| `tokens.spacing` (7 named steps) | 옮김 → Foundations Spacing (line 108) · Layout (line 397) | Named steps `xs`…`section` in Foundations; the §5 scale, including the 30px that only §5 records, in Layout. Both destinations carry it. |
| `tokens.rounded` (5 steps) | 옮김 → Foundations Shape (lines 112–116) | Named steps merged with the §5 usage notes. The out-of-scale 5px card radius is called out at line 118. |
| `tokens.shadow.elevated` / `.none` | 옮김 → Foundations Elevation (table lines 124–127, token line 129) | Both tokens named at line 129; `elevated` also appears on the Elevated Spotlight Card (line 366). |
| `tokens.components.*` (8 records, each with a `type:`) | 옮김 → Components & States (lines 225–390) | One entry per record. Each `type:` survives verbatim as a `Type:` field — counted in DESIGN.md: `Type: button` 2, `Type: card` 2, `Type: badge` 2, `Type: input` 1, `Type: tab` 1 (A1b). |
| `nav-link.active: "text #2453ba"` | 옮김 → Components Top Navigation Item (lines 332 and 344) | Recorded as the observed `active` state, the record's only interaction expansion. |
| `components_harvested: true` | 분리 → provenance | prov 21 (A1c — a verification-ledger field is a value). Count: 0 in DESIGN.md, 1 in provenance. |

## Body sections

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §1 Visual Theme & Atmosphere — identity, canvas/ink/blue description | 옮김 → Experience Scope (lines 9–11) | Product scope, the two captured surfaces, and the observed interface layer. |
| §1 interpretive framing ("technical, exact, quietly confident", "engineered rather than decorated") | 옮김 → Experience Scope (line 15) + Distinctive traits (line 44) | Kept as a derived editorial implementation inference with the adjacent qualification, not as a FriendliAI statement (B2a). |
| §1 Key Characteristics (8 bullets) | 옮김 → Experience Distinctive traits (lines 35–42) | Values verbatim; the characterizing adjectives qualified adjacently at line 44. |
| §2 Color Palette & Roles (4 groups, 15 entries) | 옮김 → Foundations Semantic color (lines 89–104) | All values and role prose. Line 87 separates the observed uses from the editorial role naming rather than qualifying both alike. |
| §3 Font Family and serving detail | 옮김 → Typography & Assets Family (lines 174–176) | `Saans` served as `SaansLocalFont` with a local fallback; the one-family observation kept as an observation. |
| §3 Hierarchy table (7 roles) | 옮김 → Typography & Assets Type roles (table lines 182–188) | Includes `24.8px` for the 1.55 body line height (1× in DESIGN.md, 2× in provenance). |
| §3 Principles (4 items) | 옮김 → Typography & Assets (line 190) | Condensed into one paragraph and qualified there as a derived editorial reading. |
| §4 Buttons — Get Started / Talk to an Engineer / Log in | 옮김 → Components (lines 225, 250, 275) | The Log in (Quiet) control exists only in §4 prose, never in frontmatter; its five values are in the body and its origin is noted at prov 110. |
| §4 Search (Pill), Feature Card, Elevated Spotlight Card, Topic Tag Pill, HIGHLIGHTS Badge, Navigation | 옮김 → Components (lines 298, 346, 358, 368, 380, 322) | Anatomy, geometry, and labels preserved. Nav item labels `Product`…`Pricing` are byte-exact at line 331 and again at line 25 as a primary task (A5). |
| §5 Spacing System, Grid & Container | 옮김 → Layout & Platforms (line 397) | Scale, hero column, feature grid, announcement banner, dark sections. |
| §5 Whitespace Philosophy | 옮김 → Layout & Platforms (line 399) | Qualified adjacently as a derived editorial reading (B2a). |
| §5 Border Radius Scale | 옮김 → Foundations Shape (lines 112–116) | Merged with `tokens.rounded`: same meaning, same authority, so merged rather than restated twice. |
| §6 Depth & Elevation table + Shadow Philosophy | 옮김 → Foundations Elevation (table lines 124–127, qualification line 131) | The four levels verbatim; the philosophy paragraph qualified adjacently at line 131. |
| §7 Do's (8 rules) | 옮김 → Experience Application rules (lines 60–67) | Qualified at line 58. Deliberately not folded into the controlled Governance copy. |
| §7 Don'ts (7 rules) | 옮김 → Experience Avoid (lines 73–79) | Qualified at line 71. |
| §8 Breakpoints, Touch Targets, Collapsing Strategy | 옮김 → Layout & Platforms (lines 403–419) | Qualified at line 403 as derived, because the inspections behind every value in this contract were single-viewport. |
| §8 Image Behavior | 옮김 → Typography & Assets Assets (line 194) · Layout (line 415) | The diagram-in-card rule is an asset rule and landed in Assets; the "32px radius across breakpoints" half is a responsive claim and sits under the Layout qualification instead. Both destinations recorded. |
| §9 Quick Color Reference | 삭제 | A prompt-form restatement of §2. All 15 hexes were grepped against DESIGN.md before this row was written; every one is present in Foundations, so nothing unique was lost. |
| §9 Example Component Prompts — Feature Card `Title in #0a101a, body in #6e7a84`; `Right-aligned` primary button | 옮김 → Components (line 356) + Layout (line 397) | The only two values that existed nowhere but §9, so they were moved rather than deleted (A3). Also recorded at prov 110 and prov 125. |
| §9 Example Component Prompts — remainder, and §9 Iteration Guide | 삭제 | Tool-facing prompt wrappers and a restatement of rules already carried by Foundations, Components, and Experience. No delegation to a skill or adapter. |
| §10 Voice & Tone prose + tone table | 옮김 → Content & Locales (lines 437–445) | The register reading is qualified at line 437, which names the table explicitly so the rows fall inside the qualification. |
| §10 Voice samples (4, verbatim) | 옮김 → Content & Locales Voice samples (lines 428–431) · 분리 → provenance | Byte-exact (A5), and quoted again in the provenance raw live-inspect record and claim ledger. The per-sample verification dates went to provenance Freshness only. |
| §10 Forbidden register | 옮김 → Content & Locales (line 449) | `revolutionary`, `game-changing`, and `Request a demo` byte-exact, under an adjacent qualification because the exclusion list is the record's editorial rule. |
| §11 Brand Narrative — product thesis and structure | 옮김 → Experience Scope (line 9) | Dedicated endpoints, serverless endpoints, self-hosted containers, carried with the source's own note that the structure is read from the site navigation. |
| §11 founding / heritage framing | 옮김 → Experience Scope (line 13) · 분리 → provenance | Carried with the source's own evidence class: general public background about the company, not a quoted FriendliAI statement. Also at prov "Evidence-class boundaries". |
| §11 "what it refuses / what it embraces" reading | 옮김 → Experience Scope (line 15) + Application rules (lines 60–67) | Qualified in both places (B2a). |
| §12 Principles (5, with UI implications) | 옮김 → Experience Principles (lines 50–54) | Qualified at line 48 with the full evidence-class limitation. The source itself labels three of these as editorial readings; that is recorded in provenance. |
| §13 Personas (3 named archetypes) | 삭제 | Fictional biography (D2). Not promoted and not re-recorded in provenance, not even as names — grepped for all three names across the three files, 0 hits. The group-level segments survive at line 31. The string "Book a demo" went with them; it occurs in the source only inside persona reasoning and is attributed to other vendors, while the FriendliAI-attributed contrast "Request a demo" survives at line 449. Both facts are at prov 123. |
| §14 States (9 rows) | 옮김 → Components & States State treatments (table rows 215–223) | Body preserved in full (A2), qualified at line 211 as derived editorial inference composing values established elsewhere. The `Something went wrong` and `Required` negative examples are byte-exact. |
| §15 Durations (3 tokens) | 옮김 → Foundations Motion (table rows 139–141) | `120ms` / `200ms` / `320ms` with their uses, each verified present, framed as stated by the record rather than computed. |
| §15 Easings — three exact `cubic-bezier` curves | 삭제 (값) · 분리 → provenance omission ledger | The curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer, and `ease-exit` repeats the value carried by the legacy authoring template. All three curve strings are recorded at prov 124; the token names and uses stay in the body (table rows 147–149), so only the unattributed value is dropped. |
| §15 Motion rules + reduced motion | 옮김 → Foundations Motion (line 151) | Both the reduced-motion rule and the motion character sit inside one adjacent qualification, which names both so neither escapes it. |
| §15 promotion condition | 신설 근거 규칙 → Foundations Motion (line 153) | B3 is written out in full at line 153, verified by reading the line: transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component computed-observation gate and the "official documentation of a single curve is not that gate" clause. This row claims only what line 153 actually contains (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | provenance Freshness and Sources; "Conflicts unresolved: none" quoted verbatim at prov 36. |
| Trailing HTML sources comment (live-inspect record, evidence-class notes) | 분리 → provenance | provenance "Raw live-inspect record" and "Evidence-class boundaries carried into the body". The evidence-class limits themselves are also written into the body beside the sentences they qualify — the ledger moves out, the qualification stays portable (E1). |

## Sibling files (E2)

> **SUPERSEDED 2026-08-26 — the paragraph below is false in every clause, including its stated method. It is kept verbatim because an audit record that is edited to look correct stops being an audit record. The correction, the cause, and the re-judgment are in [Revision 2026-08-26](#revision-2026-08-26-wave25--e2-sibling-adoption-a5-latin-sweep) at the end of this file. Read that section, not this paragraph.**

`web/references/friendliai/` contains exactly one file, `DESIGN.md` (checked with `ls`). The source's trailing comment points at a sibling `.verification.md` for raw samples; that file does not exist in the repository. **No sibling was adopted, and the single non-adopted item is that absent `.verification.md`.** No value in these three outputs comes from a sibling file, and no sibling promotion occurred. The pointer itself is recorded in provenance so the gap is visible rather than silent.

## State applicability decisions (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Get Started (Primary), Talk to an Engineer (Secondary) | applicable | The control commits a step that can pend, fail, and confirm. |
| Search (Pill) | applicable | A field that submits a query, and a form field for error/success. |
| Log in (Quiet) | not-applicable | The source calls it a text link in the header: a destination link commits no operation of its own. Semantic reason, never absence of observation. |
| Top Navigation Item | not-applicable | Active versus inactive is the item's whole meaning; navigation is not an action outcome. Semantic reason, never absence of observation. |
| Feature Card, Elevated Spotlight Card, Topic Tag Pill, HIGHLIGHTS Badge | map omitted entirely | No interactive-kind evidence, so kind is not confirmed either way (C4). |

Counted in DESIGN.md: 30 `applicable` rows, 6 `not-applicable` rows, plus one prose use of each term in the capture record.

> **Count corrected 2026-08-26 — the sentence above is kept as written and is wrong by one.** The rows are **29** `applicable` and 6 `not-applicable`; 30 and 7 are the *word* totals, each being the rows plus one prose use in the Capture record. The `applicable` figure counted the word total, called it a row count, and then added the prose use again. Measurement, both methods, and the per-component breakdown are in [§10 of the revision](#10-ledger-counts-re-synced-f2). No applicability verdict changes and the table above this note is unaffected.

## Checks run

- `node test-v2/tools/migrate-reference.mjs --brand friendliai --gate-only` → `PASS`, problems 0
- `inspectDesignMd` portable-core conformance on the migrated `DESIGN.md` → `portable_core: true`, `level: portable-core`, reasons 0
- `node test-v2/tools/process-leak-check.mjs` (E1) over the migrated body → 0 hits

> The "Checks run" block above was run before the 2026-08-26 revision. Both checks were re-run after it; the results are at the end of the revision section below.

## Revision 2026-08-26 (wave25 — E2 sibling adoption, A5 Latin sweep)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**. Clauses engaged: **E2** (log disposition must match reality), **A5** (brand-published strings), **B1** (evidence-class promotion), **E1** (verification record stays out of the portable body), **D1a** (gap lists are existence claims).

### 1. The false statement, and why the measurement produced it

The **Sibling files (E2)** section above states that `web/references/friendliai/` "contains exactly one file, `DESIGN.md` (checked with `ls`)" and that the sibling `.verification.md` "does not exist in the repository."

**Both clauses are false, and so is the method clause.**

```
$ ls -a web/references/friendliai/
.  ..  .verification.md  DESIGN.md

$ find web/references/friendliai -name '.verification.md' -exec wc -c {} \;
    6380 web/references/friendliai/.verification.md
```

The file is 6,380 bytes, 67 lines, SHA-256 `1415e992dc2bc5c17bbdffbf21b35505824d68b03db372aa62996ddd61a1e967`.

**Cause: the instrument, not the repository.** `.verification.md` begins with a dot. Plain `ls` hides dotfiles, and a `*` glob does not expand to them. So `ls` returned exactly one name and the worker read that as the directory's contents. The evidence sentence "(checked with `ls`)" is therefore not merely wrong in its conclusion — **it names the method that caused the error**, and it made the claim look verified. `ls` cannot answer "what files are in this directory"; only `ls -a` or `find … -name` can.

**Corrected evidence sentence.** Where the superseded paragraph says "checked with `ls`", read: *checked with `ls -a` and with `find web/references/friendliai -name '.verification.md'`, which is what a dotfile requires; the original `ls` did not measure the directory's contents and its result is void, not zero.*

This is a repository-wide trap rather than a one-off: `test-v2/tools/README.md` records under "sibling은 dotfile이다" that **410 of 440** references carry this dotfile, and that a shell answering `no matches found` is reporting *not measured*, not *zero*. The identical failure was found on `finda` in wave 24.

**Not a rewrite.** The superseded paragraph is left byte-for-byte with a marker above it. An audit trail that is edited until it reads correctly records nothing.

### 2. E2 re-judgment: the sibling is adopted

Adopted, on the evidence rather than on its existence. It is a legitimate FriendliAI verification record: `## Proof — Tier 1 live inspect`, dated 2026-07-02 — the same date as the source's `verified`, `added`, and `tokens.extracted` — carrying 20 raw samples taken by `playwright getComputedStyle` at 1440×900 across three brand-owned surfaces (`friendli.ai`, `friendli.ai/blog`, `docs.friendli.ai`), plus two full-DOM colour frequency scans, a radius frequency scan, a conflict matrix, and a country-sources block. Its date, method family, and three URLs agree with what the source `DESIGN.md` footer and trailing comment state in short form, and the source's own trailing comment points at it by name. It corroborates the source rather than widening it.

Landed in **`provenance.md` § Canonical proof — sibling verification file**, with the bytes, hash, heading, grade, sample count, quoted method, and quoted source list. Four subsections follow it: the Korean regional requirement, the third-party consent widget, the Tier 2 record, and the sibling-only non-promotion table.

**Nothing was promoted.** Not one token value, component-table value, type-role metric, or state verdict changed. The portable body's three edits are listed in §4 below and none of them is a value.

### 3. Non-promotion list — 23 checks, all 0

Verified against the post-revision portable body, `grep -oF … | wc -l` per value, plus `grep -oE '(^|[^0-9])(3|6)px'` for the two lengths that would otherwise match inside `13px` and `16px`/`36px`/`56px`:

`How Kilo Code` · `FriendliAI | The Frontier AI Inference Cloud` · `FriendliAI Blog` · `0px 16px` · `30px 30px 0px` · `box-shadow` · `document.title` · `domcontentloaded` · `getComputedStyle` · `playwright` · `HEAD 200` · `rgb(` · `×822` · `×292` · `getdesign` · `refero` · `Accept` · `Decline` · `Preferences` · `Roboto` · `003afa` — **21 literals, each 0.** Word-boundary `3px` and `6px` — **2 lengths, each 0.**

**One deliberate exception.** `SaansLocalFont Fallback` now occurs **1×** in the portable body, in Named gaps only, under the explicit instruction to write both sides of the family-name divergence rather than select one. It is carried as the marker of an unresolved question and is used as a family value by no type role, no component record, and no rule. It is also the sibling's literal spelling of what the source itself already establishes in paraphrase ("served as `SaansLocalFont` with a local fallback"). Recorded with its authorization in provenance.

### 4. Portable body — three edits, no values

| # | Line | Was | Now | Why |
|---|---:|---|---|---|
| 1 | 166 | "Both captured surfaces compute visible text as Saans, served as `SaansLocalFont` with a local fallback." | "The homepage computes visible text through the stack this record names `Saans`… The record states one family across every text role rather than recording a separate computed family for the blog surface." | The sibling records a `font-family` only on homepage elements — body, hero h1, nav link. None of its four blog samples carries one. The claim asserted a computation for a surface no record measures. |
| 2 | 176 | "Saans is canonical here because computed visible use on both captured surfaces agrees on it." | "Saans is the family this record names for visible use, and the served face behind that name is `SaansLocalFont` with a local fallback; what the two names leave unresolved is stated under Named gaps." | Same defect, and a second one: the computed samples agree on `SaansLocalFont`, not on `Saans`. The prohibition itself — do not substitute a system font or another grotesk — is unchanged. |
| 3 | 495 | — | New Named gaps entry: the family name to record for visible UI, with `Saans` and `SaansLocalFont, "SaansLocalFont Fallback"` both stated and neither selected. | Instructed treatment for the typography divergence. Also the reason edits 1 and 2 do not leave the body silent. |

Edits 1 and 2 are single-line replacements and edit 3 appends after the last line, so **every line reference in this log and in `provenance.md` still resolves.** Re-checked rather than assumed: 166, 176, 356 (`Title text: #0a101a; body text: #6e7a84`), 365 (`Padding: 30px`), 397 (right-aligned primary button), 494 (last pre-existing Named gap). Body length 494 → 495 lines.

The Elevated Spotlight Card padding contradiction was **not** given a Named gaps entry, deliberately. The source establishes no four-side question for that card, so a portable gap there would rest entirely on a sibling-only value — the D1a shape, where a gap list asserts a domain the source never sets up. It is recorded in the ledger instead.

### 5. Source ↔ sibling divergences — 8 found

Full text in `provenance.md` § "Where the sibling and the source diverge". Summary:

| # | Class | Finding |
|---|---|---|
| 1 | Direct contradiction | Elevated Spotlight Card: sibling `padding: 30px 30px 0px` (asymmetric, bottom 0) vs source `30px`. Neither selected; portable value unchanged at line 365. |
| 2 | Direct contradiction | Family naming: sibling computes `SaansLocalFont, "SaansLocalFont Fallback"`; the token `Saans` is in no computed sample. Both sides in Named gaps, neither selected. |
| 3 | Portable overclaim | "Both captured surfaces compute…" — the sibling records a family only for the homepage. Corrected (edit 1). |
| 4 | Portable overclaim | Claim ledger marks five line heights "live computed". Only body's `1.55` has a raw sample (`line-height: 24.8px`); `1.10` / `1.20` / `1.30` / `1.40` have none. Ledger rows left as the source's own `live-extract` assertion, with a boundary note added. |
| 5 | Sibling-only | Radius frequency records `6px ×1`, outside the source's 4 / 8 / 12 / 32 / 360 scale and its card-local 5px. Unexplained by both records. Not promoted; portable 0. |
| 6 | Source-only | Topic Tag Pill `Border: 1px solid #d9e2ec` — the sibling's tag-pill sample records no border. Value unchanged. |
| 7 | Source-only | Log in (Quiet) `Font: 14px / 530 / Saans` — the sibling's Log in sample records no font. Value unchanged. |
| 8 | Source-only | Body `font-weight: 400` and secondary-button `padding: 0 12px` — neither appears in the corresponding sibling sample. Values unchanged. |

**The consent-widget exclusion is agreement, not divergence, and is now grounded.** The sibling states in its own words that the cookie-consent buttons (`Accept` / `Decline` / `Preferences`, `Roboto`, `#003afa`, 3px radius) are "a third-party consent tool, NOT FriendliAI's brand system, and was excluded from the palette and component tokens." The migration already reflected that exclusion in full — because the source author applied it upstream, so the values never reached the source `DESIGN.md`. What the sibling changes is the **ground**: an explicit quoted decision replaces a silent absence. Portable counts for all seven markers: 0.

**The Tier 2 cross-check is verification record, not brand fact (E1).** The sibling's finding that `getdesign.md/friendliai` and `styles.refero.design/?q=friendli` hold no FriendliAI data describes this catalog's coverage, and its two quoted strings (`friendliai — 0 DESIGN.md files | getdesign.md`, `Browse 2,000+ AI-readable design systems`) are third-party page copy, not FriendliAI copy. Kept in provenance; portable counts 0 for `getdesign`, `refero`, and both strings.

### 6. A5 — exhaustive Latin sweep across source **and** sibling

The gate needle does not reach this brand: FriendliAI's published copy is Latin, so nothing here trips a non-Latin loss check. The sweep was therefore done by extraction, not by needle.

**Method.** Every double-quoted run of 2–120 characters was extracted from both source files with `re.findall(r'"([^"\n]{2,120})"')` plus the curly-quote variant, deduplicated, then counted with `str.count()` against all three outputs. `grep -c` was not used anywhere: it counts matching lines, and several of these strings occur more than once on a line.

**Extraction.** 87 unique from the source, 19 from the sibling, 10 shared → **96 unique strings**. `node test-v2/tools/latin-copy-audit.mjs --brand friendliai` was run first and reported 50 candidates / 17 lost; it is a low-precision assist and the judgment below is not its output. Of its 17, eight are the source's own descriptive `use:` labels or editorial glosses, four are third-party strings the sibling explicitly excludes, three are punctuation variants of strings that do survive (`The Frontier AI Inference Cloud.` etc., the tone table's sentence-final periods), and one is `0 12px`, a token value that survives in the portable body as `0px 12px`, the source's own §4 spelling.

**Classification of the 96.** 27 are brand-published strings in A5 scope — 24 from the source, 3 from the sibling only. The remaining 69 are token values (hexes, lengths, font specs), the source frontmatter's `use:` descriptions, the source author's editorial glosses in quotes (`ship-now`, `look here`, `do this`, `go here`), and third-party strings.

**Survival: 23 of 27 survive in the portable body. 4 do not, each with a recorded disposition. 0 unaccounted.**

| String | Origin | Portable | Disposition |
|---|---|---:|---|
| `Book a demo` | source §13 | 0 | Deleted with the personas (D2), and deliberately not re-recorded as a persona artifact. It appears in the source only inside persona reasoning and is attributed to *other* vendors, not to FriendliAI. Recorded in the provenance omission ledger (prov `§13 personas` row) and in the §13 row of the section table above. The FriendliAI-attributed contrast, `Request a demo`, survives at portable line 449. |
| `How Kilo Code and FriendliAI Bring…` | sibling only | 0 | A FriendliAI-published blog headline, and truncated with an ellipsis in the sibling itself, so the sibling does not hold the complete string either. Sibling-only: it is in the live-DOM domain and the portable contract reconstructs the source `DESIGN.md`. Non-promotion instructed. Recorded byte-exact in the provenance sibling-only table. |
| `FriendliAI \| The Frontier AI Inference Cloud` | sibling only | 0 | Homepage `document.title`. Same class. Recorded byte-exact in the provenance sibling-only table and, unescaped, in its verification line. Its brand-bearing half, `The Frontier AI Inference Cloud`, survives 3× in the portable body as the hero H1. |
| `FriendliAI Blog` | sibling only | 0 | Blog `document.title`. Same class. Recorded byte-exact in the provenance sibling-only table. |

Nothing was restored, because nothing was lost without a disposition. The 23 survivors were counted individually and every count is ≥1: `The Frontier AI Inference Cloud` 3, `Inference performance drives profitability` 2, `GLM-5.2 is live. #1 throughput on OpenRouter` 2, `Get started` 9, `Talk to an engineer` 6, `Log in` 3, `Search blogs` 1, `GLM-5.2` 3, `Inference` 6, `NVIDIA` 1, `HIGHLIGHTS` 6, `Product` 4, `Solutions` 3, `Models` 2, `Developers` 2, `Customers` 2, `Company` 2, `Pricing` 2, `Something went wrong` 1, `Required` 1, `Request a demo` 1, `revolutionary` 1, `game-changing` 1.

Two source-side editorial glosses in quotes do not survive as quoted phrases: `ship-now` (source §1, "the loud 'ship-now' banner") and `look here` (source §6, elevation "a deliberate signal of 'look here'"). Neither is brand-published copy — both are the source author's own figures of speech about the design — so neither is in A5 scope. Their content survives as the portable body's banner and elevation readings at lines 39 and 131.

### 7. Not changed

No token value, no component-table value, no state applicability verdict, no section structure. Neither source file was touched: `web/references/friendliai/DESIGN.md` SHA-256 `9b8b5ee61763549aa1e872faf6b35b005676831792897578783bcc4f8d61159f`, sibling `1415e992dc2bc5c17bbdffbf21b35505824d68b03db372aa62996ddd61a1e967`.

Specifically preserved: the two A3 rescues (Feature Card `Title text: #0a101a; body text: #6e7a84` at line 356, and the right-aligned header placement of the primary button at line 397); the D2 persona deletion, including the choice not to re-record the three names — re-grepped across all three outputs after this revision, 0 hits each; and the C2 verdicts closing `loading` / `error` / `success` as `not-applicable` on `Log in (Quiet)` and `Top Navigation Item` for role reasons, which the sibling gives no ground to reopen since it records no interaction states at all.

Applicability counts re-measured after the revision: 30 `applicable` rows and 6 `not-applicable` rows, unchanged.

### 8. E3

No gate false positive was encountered, and no notation was reshaped to avoid one. The `\|` inside one provenance table cell is markdown table escaping, not value distortion; the same string is written unescaped on the verification line directly below that table.

### 9. Checks re-run after the revision

- `node test-v2/tools/migrate-reference.mjs --brand friendliai --gate-only` → **PASS**, `problems: []`
- `inspectDesignMd` portable-core conformance → `portable_core: true`, `level: portable-core`, `reasons: []`
- `node test-v2/tools/process-leak-check.mjs` (E1) over the migrated body → 0 hits

**The gate is not evidence of conformance for this defect.** The gate never reads sibling files, so it returned the same `PASS` when the log asserted the sibling did not exist and after the sibling was read and adopted. It also does not evaluate E2 disposition accuracy, A5 survival for Latin copy, B1 in its class form, or D1a. Every finding in this revision lives outside what the gate checks; the two results above say only that nothing in the repair broke a mechanical rule.

### 10. Ledger counts re-synced (F2)

Every count this log asserts was re-measured after the revision with `grep -oF … | wc -l` (never `grep -c`, which counts lines). Four provenance-side counts moved because the revision added text to `provenance.md`; none of them is a portable-body count, and no portable-body count changed except the two that the three edits touch.

| Row | Asserted | Now | Why |
|---|---|---|---|
| Frontmatter `id`… | `friendli.ai` 7× in provenance, 0× in DESIGN.md | **11×** in provenance, 0× in DESIGN.md | The adopted sibling's source list repeats the three brand-owned URLs. Portable side unchanged at 0. |
| `logo.type` / `logo.slug` | `favicon` 0 in DESIGN.md, 3 in provenance | 0 in DESIGN.md, **5** in provenance | The sibling's own exclusion of the Google favicon proxy from the Korean requirement is now quoted. |
| `tokens.source` | `live-extract` 0 in DESIGN.md, 1 in provenance | 0 in DESIGN.md, **3** in provenance | The divergence note and the Proof note both name the source's `live-extract` assertion when qualifying the line-height rows. |
| §3 Hierarchy | `24.8px` 1× in DESIGN.md, 2× in provenance | 1× in DESIGN.md, **4×** in provenance | The divergence note and the Proof note each cite the sibling's `line-height: 24.8px` as the one corroborated line height. |
| `family.sans: Saans` | `SaansLocalFont` 2× in DESIGN.md, 2× in provenance | **6×** in DESIGN.md, **10×** in provenance | Portable: 1 each at lines 166, 174, 176 and 3 in the new Named gaps entry (the bare name, then the two members of the computed stack). Provenance: the family divergence, the non-promotion exception, and the quoted raw record. |
| `display_name_kr` | 2 in DESIGN.md, 1 in provenance | unchanged | — |
| `components_harvested` | 0 in DESIGN.md, 1 in provenance | unchanged | — |
| `tokens.components.*` | `Type: button` 2, `card` 2, `badge` 2, `input` 1, `tab` 1 | unchanged | Re-measured individually. |
| §13 personas | three names, 0 hits across the three outputs | unchanged — `Daniel Cho` 0/0/0, `Priya Nair` 0/0/0, `Marcus Feld` 0/0/0 | Re-grepped after the revision. |

**One pre-existing count was wrong and is corrected here.** The *State applicability decisions (C2)* section above ends: "Counted in DESIGN.md: 30 `applicable` rows, 6 `not-applicable` rows, plus one prose use of each term in the capture record." The `applicable` figure is off by one, and it double-counts.

Measured two ways, as the counting rule requires:

```
$ grep -oE '^\| [a-z-]+ \| applicable \|'     DESIGN.md | wc -l   → 29
$ grep -oE '^\| [a-z-]+ \| not-applicable \|' DESIGN.md | wc -l   → 6
```

and independently, parsing each state table's second column in Python: `Counter({'applicable': 29, 'not-applicable': 6})`. Both agree.

The rows are **29 applicable / 6 not-applicable**: Get Started 7/0, Talk to an Engineer 7/0, Log in (Quiet) 4/3, Search (Pill) 7/0, Top Navigation Item 4/3. The word `applicable` standing alone occurs 30 times and `not-applicable` 7 times — in each case the table rows plus exactly one prose use in the Capture record. So the original row counted the *word* total for `applicable` (29 + 1 prose = 30), called it a row count, and then added "plus one prose use" on top, counting that prose occurrence twice. The `not-applicable` side (6 rows + 1 prose) was right.

The correct sentence is: **29 `applicable` rows and 6 `not-applicable` rows, plus one prose use of each term in the Capture record — 30 and 7 as word totals.** No verdict changes; this is an arithmetic correction to the ledger, not to the contract. The distribution across the five components is identical to what the C2 table above states, and that table is unaffected.

### 11. Hashes

| File | SHA-256 |
|---|---|
| `web/references/friendliai/DESIGN.md` (source, unmodified) | `9b8b5ee61763549aa1e872faf6b35b005676831792897578783bcc4f8d61159f` |
| `web/references/friendliai/.verification.md` (sibling, unmodified) | `1415e992dc2bc5c17bbdffbf21b35505824d68b03db372aa62996ddd61a1e967` |
| `docs/design-md-weight/migrated/friendliai/DESIGN.md` (post-revision, 495 lines) | `890968ea0bd42a2076109ca18128e095353e53fb5ee73b9d140bae90a8b9527c` |
| `docs/design-md-weight/migrated/friendliai/provenance.md` (post-revision, 242 lines) | `83fc4a35d35590d2ffff15ea41ebdf207425f2663d336c2aa921b60f99fefe5d` |
