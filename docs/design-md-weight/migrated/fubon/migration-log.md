# Fubon migration log

Source: `web/references/fubon/DESIGN.md`
Sibling read (not the migration input): `web/references/fubon/.verification.md`
Destination: `docs/design-md-weight/migrated/fubon/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/fubon/provenance.md`
Date: 2026-08-26
Worker: opus5 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as committed in this directory.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + components; `logo.slug` 옮김 → Typography & Assets | Portable file has no frontmatter; H1 is `# Fubon Design System`. Identity table `provenance.md` 9–20. `https://www.fubon.com/banking/` is dual: `DESIGN.md` 9 + `provenance.md` 13/40/45 (E2a). `#0093c1` is dual: `DESIGN.md` 11/35/51/56/72/87/111/225(×2)/284/285/290/358 — 13 occurrences on 12 lines, 225 carries it twice — + `provenance.md` 14/23/34/65/67/102/125 (E2a). Counted with `grep -o '#0093c1' <file> | wc -l`, not `grep -c`. Favicon URL is dual: `DESIGN.md` 193 + `provenance.md` 15/107 (E2a). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 16–19, 29–32, 143. These are ledger keys with no portable slot. |
| YAML `tokens.note` | 분리 → provenance; 내용 옮김 → Experience Scope | Verbatim note at `provenance.md` 23. Its substance — bank `#0093c1` vs group `#008fc7`, ink `#0c0e1f`, secondary `#494a57`, "Fubon blue is the anchor across bank and holding group" — is at `DESIGN.md` 11 (E2a). |
| YAML `tokens.colors` (15 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 87–109. `sky-light` byte form `"#3cbeE7"` vs visible `#3cbee7` recorded at `provenance.md` 111 (E3: the ledger keeps the source spelling rather than normalising it away). `#eef0f0` is not given a palette role; it stays on the cancel control at `DESIGN.md` 245 (A4). `#aeafb4` (Neutral) and `#7d7f87` (Text) stay unmerged — `DESIGN.md` 103/109/111. |
| YAML `tokens.typography.family` (`sans`, `tc`, `fallback`) | 옮김 → Typography & Assets Family | `DESIGN.md` 163–168. The token-set fallback `Microsoft JhengHei` and the visible-section stack `Arial, Helvetica, 微軟正黑體, Microsoft JhengHei, Apple LiGothic, 蘋果儷中黑` are both kept as separate records (A1, A5). |
| YAML `tokens.typography.h1 / h2-title / h2-small / body / nav / cta-link / label / button` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 172–183. Unitless line heights 1.4 / 1.33 / 1.5 / 1.25 stay ratios, never converted to px (A1a) — `DESIGN.md` 174–181, `provenance.md` 113. All eight YAML `use` strings are restored verbatim at `DESIGN.md` 183, alongside the §3 table's own Use column at 174–181 (A1, A3). |
| YAML `tokens.spacing` / `tokens.rounded` | 옮김 → Foundations spacing + shape; also Layout | Unitless steps and px forms both kept: `DESIGN.md` 115 (spacing), 119 (`sm 4 · md 12 · lg 16 · full 9999`), 372 (Layout). `full: 9999` is kept as the YAML step and is not converted to a px value. The `lg` step (16) has no named surface in the visible sections; that is stated at `DESIGN.md` 126 and named as an unresolved item at 455. |
| YAML `tokens.shadow.card` / `soft` | 옮김 → Foundations elevation | `DESIGN.md` 137. Also on White Content Card 337 and the Floating Digital-service Button 320 (E2a). |
| YAML `tokens.components` (10 records) | 옮김 → Components & States | `DESIGN.md` 220–367. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Type: button` ×3 (222/242/262), `Type: tab` (280), `Type: card` ×3 (335/343/350), `Type: badge` ×2 (357/364), `Type: input` (299). All ten YAML `use` strings restored verbatim (`Token-set use:` lines at 227/247/266/284/304/338/345/352/359/366). `nav-link.active` verbatim record `text #0093c1 underline on hover` at 284. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Key Characteristics as Distinctive traits 35–42. The atmosphere readings ("clear, accessible, dependably institutional", the motto as optimism) carry an adjacent complete qualifier at 11; the trait list carries one at 33 (B2/B2a). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 85–111. All 14 named roles kept (source §2 declares 3 Primary + 3 Accent + 5 Neutral & Surface + 3 Text = 14; the earlier count of 15 in this log was wrong), including `#aeafb4` which the YAML block does not carry. |
| §3 Typography Rules (family, hierarchy) | 옮김 → Typography & Assets | Family 161–168; hierarchy 172–181; evidence classes 153–159. |
| §3 Principles (bilingual first, 700 ceiling, functional sizing, no negative tracking) | 옮김 → Typography & Assets Type rules | `DESIGN.md` 189, under an adjacent complete qualifier. The observable half (default tracking, no negative letter-spacing, 700 as the heaviest weight in the scale) is stated plainly at 185; the interpretive half (equal visual weight, comfort/accessibility rationale, "no 800 or 900 display weight in this system") sits inside the qualified sentence at 189, which the B2a audit extended to cover the pairing instruction that used to trail it unqualified (B2/B2a). |
| §4 Component Stylings (buttons, cards, nav, badges, inputs) | 옮김 → Components & States | `DESIGN.md` 220–367. §4 body Use text and YAML `use` strings are both kept where they differ. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | `DESIGN.md` 372–374 (spacing, container, 2×4 icon grid, footer grid), 115 (spacing scale), 119–125 (radius scale). The whitespace-philosophy reading and the 8-icon-affordance reading carry an adjacent complete qualifier at 384 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Four-level table `DESIGN.md` 130–135; token values 137. The Shadow Philosophy paragraph is carried as a qualified reading in the same sentence as the values at 137 (B2/B2a). |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | `DESIGN.md` 56–63, with the grouping qualifier at 54. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 69–77, under the qualifier the B2a audit added at 67. Eight source Don'ts plus one scope-boundary line at 77 that restates the Scope limit at 9 rather than adding a new brand rule; 67 qualifies the eight rationales and the ninth boundary line separately (B2/B2a). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoint table `DESIGN.md` 376–380; touch and collapsing 382. The thumb-target / distinct-from-content reading moved into the qualified sentence at 384, and 386 records that the two inspects are desktop web surfaces and the breakpoint table is the source's stated contract rather than measurements at those widths (B2/B2a). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | 삭제 | Tool-facing copy-paste prompts and restatements; no receiving slot and no delegation. Deletion and its check are recorded at `provenance.md` 123/125: every hex, radius, size, weight, family, and height §9 names was verified present elsewhere in the portable body before deleting (A2, A3). |
| §10 Voice & Tone | 옮김 → Content & Locales | Observed strings `DESIGN.md` 395–399; register table 407–413; forbidden register 415. The qualifier precedes the derived material at 403 rather than following it, so the table and the forbidden-register list are inside its scope (B2/B2a). English glosses are marked as reader aids that never replace the label at 401 (A5). |
| §11 Brand Narrative | 옮김 → Experience Scope; 서사 성격 → provenance | Public history at `DESIGN.md` 13, marked as narrative context that supplies no interface tokens; the civic-professional reading carries an adjacent complete qualifier in the same paragraph. The source's own "widely documented public facts" statement is at `provenance.md` 78, and the narrative-not-token-source note at 145 (E2a). |
| §12 Principles (5 numbered + UI implications) | 옮김 → Experience principles | `DESIGN.md` 48–52 under the fixed B2a form at 46: "These five items are a derived editorial implementation inference from the verified surfaces; they are not Fubon-authored or a separately published UI specification." |
| §13 Personas (4 entries) | 삭제 | Self-declared illustrative archetypes. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar: no name, age, city, occupation, or segment appears in either output (D2). Disposition recorded at `provenance.md` 122. Audience at `DESIGN.md` 29 carries only the group-level references the source narrative states, under an adjacent qualifier. The four `primary-tasks` at 21–24 come from observed CTA labels and modules; 19 says so and, after the B2a audit, also qualifies the step from label to "primary task" as a derived editorial implementation inference that is not Fubon-authored. |
| §14 States (10 rows) | 옮김 → Components & States surface state contract + per-component applicability | Full ten-row body preserved at `DESIGN.md` 203–214 (A2; graph is still 0/440, so nothing is delegated). The applicability rule is stated at 218, whose qualifier the B2a audit extended over every Reason cell in the tables that follow. Non-observation is never used as a `not-applicable` reason (C1); `not-applicable` appears only with a role reason — the cancel button 256–258, the large group CTA 274–276, and the nav link 293–295 commit no operation. The primary button 236–238 and the input 312–314 keep loading/error/success `applicable` with treatments omitted, and the floating button 329–331 stays open because the source names the control but not what it commits (C2 v10). Cards and badges get no `kind` and no map because the source supplies no interaction evidence for them — 339/346/353/360/367 (C4). |
| §15 Motion & Easing — durations, easing token names, motion rules, reduced-motion | 옮김 → Foundations motion | `DESIGN.md` 141 (150ms / 250ms / 400ms with their uses), 143 (three easing token names and roles), 145 (motion rules, sub-100ms press feedback, `prefers-reduced-motion: reduce` → instant cut). |
| §15 Motion & Easing — three `cubic-bezier` values | 삭제 → provenance omission ledger | No observation stands behind them: the method captured computed style on two static pages and recorded no transition, animation, or easing sample. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` is byte-identical to the example table in `spec/omd-v0.1.md`, the documented re-injection path. Ledger at `provenance.md` 119–121; occurrence counts by `grep -o cubic-bezier <file> | wc -l` (not `grep -c`, which counts lines) → `DESIGN.md` 0, `provenance.md` 3, `migration-log.md` 3. B3 is held: the promotion condition at `DESIGN.md` 143 names all five evidence kinds (transition properties, animation name, duration, easing, reduced-motion behavior) and the per-component computed-observation gate, in full text (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts unresolved (`web/references/fubon/DESIGN.md` 213–216) | 분리 → provenance | Freshness `provenance.md` 27–34; Tier 1 43–48; Tier 2 50–53; conflict resolution 34. |
| Philosophy-layer HTML comment (source lines 406–438) | 분리 → provenance; 고유 컴포넌트 값 옮김 → Components & States | Raw computed observations at `provenance.md` 59–78. Three values in that block had a receiving slot and were moved as well (A3): the popup confirm's `border-radius: 0px 0px 12px`, the popup cancel's `0px 0px 0px 12px`, and the cookie CTA's `12px` at 16px / 500 are on the component entries at `DESIGN.md` 228 and 248; the digital FAB's `#ffffff` / 50% / `rgba(0, 0, 0, 0.11) 5px 5px 30px 0px` became the Floating Digital-service Button at 316–321; the 112px header height is at 374 (E2a — all also remain in the provenance raw list). |

## Sibling handling (`web/references/fubon/.verification.md`)

The sibling exists — confirmed with `find web/references/fubon -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

- Its values are recorded at `provenance.md` 82–105 and are **not** promoted into `DESIGN.md`. Values it carries that the migration source does not: `#eef0ef`, `#156b9b`, `#2a2a2a`, `rgb(0,158,156)`, `rgb(114,114,114)`, 34px button heights, `border-radius: 0px 0px 16px 16px`. Byte forms, measured: the sibling writes the first two only as `rgb(238,240,239)` and `rgb(21,107,155)` — the hex spellings are this ledger's conversion and exist at `provenance.md` 84. An earlier draft of this row named the fourth value `#009e9c`; that string occurs 0 times in the sibling and 0 times in all three outputs, so the rgb form the sibling and `provenance.md` 86 actually carry is used instead.
- Its structural classifications (H1, `H2.title-primary`, selector names) were likewise not promoted (B1). The same classifications that do appear in the portable provenance come from the source's own philosophy-layer comment, not from the sibling.
- One earlier draft of the Font-evidence row stated the bank body font stack as `Roboto, "Noto Sans TC", sans-serif, Arial, Helvetica, 微軟正黑體`. That full stack exists only in the sibling. It was corrected to the source comment's own record (`DESIGN.md` 156) and the sibling form stays in `provenance.md` 88.
- Three published strings appear only in the sibling — `金控成員`, `台北富邦銀行官網`, `富邦人壽官網`. They are preserved byte-for-byte at `provenance.md` 94–96 (A5).

## A5 verification

The gate's copy-loss needles come only from contiguous non-Latin runs of four characters or more. Measured at audit time, it compared 24 of the 165 quoted strings it extracted — `coverage.copy-loss compared 24 / candidates 165`, 14.5% — with no `unchecked` entry. That machine check is narrower than A5, so both a wider non-Latin sweep and a quoted-string sweep were run by hand.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Handling |
|---|---|---|---|
| All CJK runs in the source, any length | **37 distinct, 74 total** — settled by a third count in the wave-26 revision (method and the disposal of the earlier `39` are recorded under `## Wave-26 revision` below). | 5 (re-counted against the settled 37) | `陳小美`, `林建國`, `吳麗華`, `新竹`, `台中` — persona names and cities, deleted under D2 and deliberately not re-hosted in `DESIGN.md` or `provenance.md`. An earlier draft of this row also listed `台北.`; re-measured, the run `台北` is **not** missing — it occurs 5 times on `DESIGN.md` 9/13/201/210 inside `台北富邦銀行` and `台北市產物保險`, which are not persona material. The trailing period in that needle was a run-extraction artefact, not a CJK run. |
| All CJK runs in the sibling | 14 distinct | 0 | — |
| All backtick- and quote-delimited strings in the source, 2–120 chars | 90 | 1 | `正向力量 成就可能.` — the tagline followed by a sentence period inside the source's quotation marks. The label itself survives in four places in `DESIGN.md` (11, 395, 403, 409) and once in `provenance.md` (138); only the trailing punctuation differs. |

Sub-needle labels the machine check could not see were confirmed present individually: `確認`, `同意`, `取消`, `信用卡`, `富邦人壽`, `蔡`, `蔡明忠`, `必填`, `微軟正黑體`, `蘋果儷中黑`.

## Gate run

`gateTexts(legacy, DESIGN.md, provenance.md, migration-log.md)` → `PASS`, `problems: []`, no `unchecked` entry. Re-run at audit time via `node test-v2/tools/migrate-reference.mjs --brand fubon --gate-only`: same verdict, and `coverage` reports `copy-loss compared 24 / candidates 165` — the machine collated 14.5% of the quoted strings, the rest being Latin and therefore never needles. This is a run result only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so it is not cited here as evidence that the migration is correct; the three sweeps above and the two mandatory passes are.

## Deviations recorded

- `DESIGN.md` is 5,144 words by `wc -w` (the 4,963 recorded here before the B2a audit was already 35 short of the 4,998 the file then held), above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: ten declared components, a ten-row state contract, and dual `use` records cannot be compressed without dropping verified values. Recorded rather than silently accepted.
- The source's own `#008fc7`/`#0093c1` and 12px/0px radius differences are kept as two surfaces rather than reconciled, matching the source's stated resolution (`provenance.md` 34 and the sibling conflict matrix at 100–105).

## Mandatory passes

- **F1 (B2a scan).** `DESIGN.md` was re-read from line 1 and every causal, interpretive, or judgement sentence was classified. Eleven edits followed. Line numbers are post-edit positions in `DESIGN.md`.
  1. Scope proxy boundary (9) — gained an adjacent complete qualifier; the boundary is a derived reading, not a Fubon statement.
  2. Font-evidence live-computed row (156) — the draft stated the full body font stack, which exists only in the sibling. Corrected to the source comment's own record (B1).
  3. Distributed-asset row (157) — the "both families are third-party faces" judgement was removed; the source makes no such statement.
  4. Type roles (185) and Type rules (189) — the "no 800 or 900 display weight in this system" reading moved out of the plain sentence into the qualified one; 185 now carries only what the type scale shows.
  5. Assets — a noun-phrase list naming illustration-set, photography-direction, and logo-file domains the source never establishes was deleted (D1a). Nothing replaced it; Assets is now the favicon line plus the circular icon containers (193–194).
  6. Foundations semantic color (111) — a `No dark-surface palette is established` sentence was deleted for the same D1a reason.
  7. Shape (119) — the workhorse-radius and authoritative-CTA readings gained a qualifier that precedes the labelled list.
  8. Primary-button hover reason (233) — now reports what the source names rather than attributing `#005c7a` to that control.
  9. Input loading reason (312) — now names the surface state contract behind the inference.
  10. Layout (382–386) — the touch reading joined the qualified sentence, and the capture-class sentence was split so the breakpoint table is described as the source's stated contract rather than a measurement at those widths.
  11. Content & Locales (401–415) — the qualifier was moved to precede the register table and the forbidden-register list instead of trailing them, and the label/gloss boundary was stated at 401 (A5).
- **F2 (E2 collation).** Every row above was grepped against the three files before it was written. Dual destinations are recorded on both sides. The only compliance claim made in this log is B3, and it is made because `DESIGN.md` 143 carries the five evidence kinds and the per-component gate in full text (E2c).
- **B2a / E2 audit (2026-08-26, separate auditor).** Four qualification fixes were made in `DESIGN.md` and the ledger errors they exposed were corrected here and in `provenance.md`; the full list is in `audit-log.md`. Every `DESIGN.md` citation in this log was re-measured afterwards — body lines at or beyond the pre-audit line 66 shifted by +2. Occurrence counts in this log are `grep -o <pattern> <file> | wc -l`, per file; `grep -c` is not used anywhere, because it counts lines and undercounts a line that carries the same value twice (`DESIGN.md` 225 is such a line).

## Wave-26 revision (rulebook v11)

Reviser: opus5, 2026-08-26 — a third lane after the F3 audit. The audit's 19
fixes were left standing. Token values, component-table values, state
applicability, document structure, and the two source files were not touched.
The `Rulebook` field at the top of this log still reads **v10** because it
records which rulebook the migration execution ran under; v11 applies to this
section only.

Counting rule unchanged: `grep -o <pattern> <file> | wc -l`, per file. `grep -c`
is not used anywhere — `DESIGN.md` 225 carries `#0093c1` twice on one line,
which is exactly the case it undercounts. The sibling is addressed by its
literal dotfile path `web/references/fubon/.verification.md`, since a dotfile is
invisible to `ls` and to a `*` glob.

All four `DESIGN.md` edits below are in-place rewrites of existing single lines.
The file is 458 lines before and after, so every line citation elsewhere in this
log and in `audit-log.md` remains valid; this was verified rather than assumed.

### O1 (B1) — `DESIGN.md` 156, a family attributed to elements never observed

Measured: a computed `font-family` exists for **exactly two** elements in the
whole evidence base — `body` and H1 `個人金融` (source philosophy comment lines
414 and 415; sibling lines 13 and 14). `grep -o "font-family" <file> | wc -l` →
source 1, sibling 2; source 415 carries the H1 family as `/ Roboto/Noto Sans TC`
without the literal property name. **Seven** further captured selectors carry
colour, size and weight only: `.title-primary` (three captures), `.nav-link-p`,
`.art-more-btn`, `.ann-more-btn`, `.blue-btn`, `.gray-btn`, `.main-btn`.

Handling: the row was **narrowed, not qualified**. Its claim that "the
`.title-primary` headings, the nav link, the more-links, and the popup buttons
all compute in that pairing" was deleted; the H1 stayed, because it is one of
the two elements a family was actually recorded for, and the row now names those
two and nothing else. No `derived editorial` qualifier was attached — a qualifier
on an over-claim launders it. The seven selectors' non-observation is recorded
in `provenance.md` under `## Evidence-class note — extent of the font-family
observation`. No value was lost: those selectors' captured colour, size and
weight remain in the provenance raw list and in the §3 and §4 tables, and the
declared family token (§3 Family, and the Family column of the §3 Type roles
table) is the source's own token record — a separate evidence class, untouched.

### O2 (A5 / A5a) — nine deletions absent from the ledger

Extraction: exact-string comparison of the source's §2 role descriptors and §3
Font Family rationales against the three outputs, with
`grep -o -F "<phrase>" <file> | wc -l`, per file.

- **extracted for this sweep: 9** phrases — source lines 90, 91, 96, 97, 98,
  102, 109, 110, 111.
- **non-surviving: 9** — measured before the ledger rows were written, each
  measured 1 in `web/references/fubon/DESIGN.md` and 0 in `DESIGN.md`, 0 in
  `provenance.md`, 0 in `migration-log.md`. Re-measured after ledgering:
  `DESIGN.md` 0 and `migration-log.md` 0 are unchanged, `provenance.md` is now
  **1 each**, because the ledger row quotes the phrase it disposes of. That
  quotation is the disposition record, not a survival (E2b).
- **restored: 0.** All nine are the reference author's characterizations of a
  value, not Fubon-published strings. A5a restores published copy only, and
  quotation is not publication.
- **ledgered: 9**, one row each, in `provenance.md` under `## Omission ledger —
  A5a addendum (wave-26 revision)`, each naming the boundary of the deletion and
  the portable line that still carries the value the phrase described.

The addendum is appended below the original omission ledger rather than
interleaved into it, so that the line citations the F3 audit measured into
`provenance.md` stay valid. Verified after appending: `provenance.md` 119–125,
138 and 143–145 are unchanged.

### O3 (D2) — untouched, pending a ruling

`陳小美`, `林建國`, `吳麗華`, `新竹`, `台中` occur 0 times in `DESIGN.md`, 0 times in
`provenance.md`, and 1 time each in this log. Whether a migration log counts as
a re-hosting surface under D2 is before the final approver; nothing was changed
here in either direction while that is pending.

### O4 (B1 / B3) — `DESIGN.md` 141 and 145, motion asserted as fact

Measured: the source **does record** these values — the durations table at
source 388–394 and the motion-rules paragraph at source 404, the latter
including the `prefers-reduced-motion: reduce` behaviour. What the evidence does
not contain is any motion sample (`provenance.md` 144).

Handling: attribution, not deletion — the source recorded them, so they are
carried as a record and not as an observation. 141 now opens "Durations, as the
source records them rather than as anything the capture measured"; 145 now opens
"Motion rules, on the same footing — the source's record, not an observation".
Every duration, every rule, and the reduced-motion behaviour are kept verbatim.
143 gained the parity statement that nothing in the Motion subsection rests on
an observation, so the one absent sample no longer yields two treatments in the
same document, and the three curve values are now withheld on the ground that
actually distinguishes them: one is byte-identical to the example table in the
legacy specification template. The curve disposition itself and its ledger rows
(`provenance.md` 119–121) were not re-decided. The B3 promotion sentence at 143
is untouched and still names all five evidence kinds plus the per-component
computed-observation gate, so the E2c claim in the §15 row above still stands.

### `39 distinct` — settled at 37, by a third method

Method, independent of both earlier counts: **property-based rather than
range-based.** A character is CJK iff `unicodedata.name(ch)` begins with
`CJK UNIFIED IDEOGRAPH` or `CJK COMPATIBILITY IDEOGRAPH`; maximal runs of such
characters were taken over the whole source file. No codepoint range appears in
the method. Result: **74 total, 37 distinct**, and the distinct set is
character-for-character identical to the audit's range-based
`[Ext-A + URO + Compat]+` extraction. Two independent implementations agree, so
the figure is settled and the unverified marker in the sweep table above is
replaced by it.

The earlier `39` is withdrawn as an extraction artefact, and its origin is
reproducible: a pattern that allows a run to continue across `,`, `：` and
spaces returns exactly 39, by manufacturing **7** composite pseudo-runs —
`確認, 同意` · `正向力量 成就可能` · `富邦銀行, 富邦證券` · `個人金融, 信用卡` ·
`了解更多, 更多最新公告` · `詐騙手法：請提高警覺` · `線上申辦, 預約諮詢, 查詢據點` —
while consuming **5** genuine ones (`成就可能`, `富邦銀行`, `富邦證券`,
`請提高警覺`, `預約諮詢`). 37 − 5 + 7 = 39. That is the same artefact family as
the `台北.` needle the audit already withdrew, which a punctuation-tolerant
pattern likewise reproduces.

Re-counted against the settled 37: **5** distinct runs are missing from
`DESIGN.md` + `provenance.md` — unchanged, and the same five (`陳小美`, `林建國`,
`吳麗華`, `新竹`, `台中`). The sibling sweep re-run under the same method returns
**14 distinct, 15 total, 0 missing**, so the row-2 figure holds as well.

### Verification after the revision (run results only)

- `node test-v2/tools/migrate-reference.mjs --brand fubon --gate-only` →
  `verdict: PASS`, `problems: []`, `coverage.copy-loss compared 24 /
  candidates 165` — unchanged from before the revision.
- `node scripts/migrate-design-md-core.cjs --input
  docs/design-md-weight/migrated/fubon/DESIGN.md --check
  --require-portable-core --json` → exit 0, `status: pass`,
  `portable_core: true`, `validation.errors: []`, roundtrip and reconstruction
  both equal, 0 dropped and 0 unmapped segments. SHA-256 of the file as revised:
  `16ef6631c69c561b63e06a0b9ae94264c236e08ab48f99c0e1869c5be934673f`.

Neither result is offered as evidence that this revision is adequate. Of the 19
defects the F3 audit found, **0** were machine-visible, and the four
observations it reported out of scope (O1–O4) all passed the gate untouched,
both before this revision and after it. What supports the revision is the
measurement recorded under each heading above.

Post-revision structural check: `DESIGN.md` is 458 lines before and after, and
the derived-inference ledger's own counts still measure exactly as recorded —
`DESIGN.md` 18 occurrences on 17 lines (9, 11, 13, 19, 29, 33, 46, 54, 67×2,
119, 137, 145, 189, 201, 218, 384, 403), `provenance.md` 1,
`migration-log.md` 2. `provenance.md` 119–125, 138 and 143–145 are unchanged, so
every line citation in this log and in `audit-log.md` still resolves.

DONE migrated=1
