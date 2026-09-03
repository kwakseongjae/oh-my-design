# PicCollage — F3 separate-session audit

Scope: **B2·B2a** and **E1·E2·E2a–c** (plus the orchestrator’s A1 key-path / D2a / E2d / B1 / A5a checks, acted on only when they fall in those two families). No other clause was edited.
Auditor input: `docs/design-md-weight/migrated/piccollage/{DESIGN.md, provenance.md, migration-log.md}`, source `web/references/piccollage/DESIGN.md`, sibling `web/references/piccollage/.verification.md` (dotfile — path written out; confirmed with `find`; invisible to `ls` and to a `*` glob). The migration worker’s report was **not** an input.

Not touched: token values, component tables, state applicability maps, document structure. Body edits were appended onto existing lines so previously recorded line numbers still resolve.

Counting rule: `grep -o <pattern> <file> | wc -l`, per file. `grep -c` was not used. File existence was confirmed with `find` before any zero was recorded. A log/provenance mention is not a portable-body use.

---

## B2a — sentence classification

Every sentence in the portable body was classified as **brand-published fact / recorded observation / editorial reading**. Twenty-nine readings already carried the complete adjacent form (`derived editorial implementation inference` / `not PicCollage-authored or a separately published UI specification`). PicCollage has no named first-party UI specification, so the toss-form close is the right evidence class (rulebook v12 B2a 전제 주석). Three third-class readings had no adjacent complete qualifier. Four section-head qualifiers named a narrower reading than the sentences they sat over.

Left unqualified (brand-published or observed-technical):
- Scope product identity, inspected URLs, YAML `tokens.source: prose-derived`, hexes, family names, mission/tagline strings
- Primary-task bullets (source labels/surfaces)
- Distinctive-trait field values
- Principles / Do / Don’t / voice-sample strings as source-recorded text (the *classification* of those lists is what was qualified)
- Token tables, YAML field rows, §3/§4/§5/§6/§8 measurements
- Capture-record §14 body; C4 kind/map omissions; Core applicability Reason cells (clause C, out of edit scope)
- Governance boilerplate

### Fix 1 — `DESIGN.md` line 119, Foundations → Semantic color

“Those four writings are not extra color keys” (skeleton `#e2ddcf`, error-network `#f19daf`, Focus visible `#298e7d`, display text-shadow `#AB7624`) is an editorial keep-out of the color token-set. The section-head qualifier at 82 names role pairing and YAML/§2 unmerges, not this classification, and sits 37 lines away.

Appended on the same line:

> Classifying them as surface-contract and §3 writings rather than as extra `tokens.colors` keys is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

### Fix 2 — `DESIGN.md` line 176, Foundations → Motion (section head)

Line 194 keeps the §14 Success confetti 0.7s writing beside the §15 700ms writing. The qualifier at 176 named only “motion contract / not a separately published motion specification,” so it did not cover that keep-both.

Expanded the existing complete form on 176 so it also names keeping 0.7s beside 700ms rather than choosing one as a replacement. No second hedge phrase was added.

### Fix 3 — `DESIGN.md` line 232, Typography → Type roles (section head)

Line 248 (“That 32px writing stays on Layout. It is not a replacement for the display 60 / 67px row”) is a keep-both inside the Type roles section. The qualifier at 232 named YAML-vs-§3 unmerges, not the §8 hero-headline 32px writing.

Expanded 232 to name keeping the §8 hero-headline 32px writing on Layout rather than as a replacement for display 60 / 67px.

### Fix 4 — `DESIGN.md` line 404, Card / Feature Panel

The unmerge of YAML `tokens.shadow.card` from `#E8E8E8`, of 16px from `tokens.spacing.base: 16`, and of `#ffffff` from `tokens.colors.on-primary` had no adjacent qualifier. Primary CTA / Nav Download / Icon Button / Nav Menu Item already qualify the same class of reading on their own blocks.

Appended, before the untouched C4 sentence:

> Reading the YAML shadow, the 16px radius, and the `#ffffff` fill as this panel’s own records rather than as those YAML spacing or on-primary keys is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

### Fix 5 — `DESIGN.md` line 415, Collage Thumbnail

“YAML `tokens.shadow.thumbnail` … stays beside this ordering” is the same keep-both class, with no adjacent qualifier.

Appended after the keep-both clause, before the source §15 note and the untouched C4 sentence:

> Keeping both orderings rather than choosing one as a replacement is a derived editorial implementation inference from the verified surfaces; it is not PicCollage-authored or a separately published UI specification.

### Fix 6 — `DESIGN.md` line 430, Layout (section head)

Line 449 keeps three footer-height writings, dual §5/§8 690px and 622px, and unmerges `bottom: 24px` / hero 32px / `md:px-[71px]` from YAML spacing. The qualifier at 430 named only “recorded measurements rather than a specification invented on top of them.”

Expanded 430 to name those keep-both and unmerge readings. Plural close (`are` / `they are not`) matches the other multi-item heads.

### Fix 7 — `DESIGN.md` line 460, Content voice (section head)

Line 458 keeps the §9 tone line beside the §10 register. The Do/Don’t table at 462–468 is the same evidence class as the Application-rules list, which already has a head qualifier. Line 460 named only the register reading and the “not a complete microcopy guide” refusal.

Expanded 460 to name the §9/§10 keep-both and the Do/Don’t table as this public-voice record.

After Fixes 1–7, `grep -o 'derived editorial implementation inference' DESIGN.md | wc -l` = **32**, `grep -o 'not PicCollage-authored' DESIGN.md | wc -l` = **32**, `grep -o 'separately published UI specification' DESIGN.md | wc -l` = **32**, on thirty-two distinct lines: 9, 11, 13, 19, 28, 32, 43, 53, 65, 82, **119**, 136, 149, 153, 176, 204, 212, 216, 228, 232, 252, 270, 298, 328, 354, 380, **404**, **415**, 430, 460, 480, 514.

---

## E1 — provenance derived scope vs body

Before the audit the inventory listed **29** rows against **29** body qualifications — 1:1 at that moment. Fixes 1, 4, and 5 add three complete forms. Leaving the ledger at 29 would be the fastcampus failure (ledger narrower than the body).

### Fix 8 — `provenance.md` Derived editorial inventory

- Header count 29 → **32** data rows.
- New rows: Semantic color `:119`; Card / Feature Panel `:404`; Collage Thumbnail `:415`.
- Expanded Qualified-reading cells for Motion `:176`, Type roles `:232`, Layout `:430`, Content voice `:460` so they name the readings Fixes 2, 3, 6, 7 attached.

Measured: inventory data rows **32**; body complete forms **32**; locations 1:1 with the line list above.

---

## E2 / E2a / E2c — migration-log dests grepped in the three files

Every log row was re-grepped. Several claimed destinations did not match the files.

### Fix 9 — YAML spacing / rounded / shadow row

Claimed `tokens.rounded.full: 9999` DESIGN dest 1 at 147. Measured: colon-form DESIGN **0**, provenance **0**; `tokens.rounded.full` DESIGN **1** at 147 (Value column `9999`, Token-set path column `tokens.rounded.full`). Fitpet-class false dest — the log, not the body, was corrected.

Same row claimed the §6 table at 163–168 including `slide-out drawer`. Measured: table body 165–170; `slide-out drawer` dest **1** at **169**.

### Fix 10 — §6 row (`slide-out drawer` dest 1 at 167)

Same false line number as Fix 9’s table claim, on its own section row. Corrected to dest 1 at 169 (Level 4 Use cell).

### Fix 11 — §7 Don’ts dest range 63–73

The six source Don’ts are 67–72; the two §9-only Avoid items are 73–74 (`Don't use serif body text` is 74). Range corrected to 63–74.

### Fix 12 — §5 dest range 432–437

The row named footer 550/900 and `32px 0 96px`, which sit at 438 and 439. Range corrected to 432–439.

### Fix 13 — §8 dest range 439–447

439 is still §5 Spacing rhythm. §8 starts at 441. Range corrected to 441–447.

### Fix 14 — §4 dest ranges

Mobile Sticky claimed 279–288 (279 is blank). Values are 278–287. Feature Card `#E8E8E8` claimed 392–403; the keep-both reading that uses that hex is 404. Thumbnail keep-both dest 415 added. Block span 272–425.

### Fix 15 — §14 / colors E2a

`#e2ddcf` / `#f19daf` / `#298e7d` / `#AB7624` live on the capture record (and `#AB7624` on the type-roles table) **and** at Semantic color 119. The log named only the capture-record home. Both homes now listed (E2a).

### Fix 16 — B2a count claims in the log (29 → 32)

§12 inventory “29 data rows”, deviations measure “DESIGN = 29”, Pass 1 “Count: 29 complete forms, 29 inventory rows” were true when written and became stale after Fixes 1/4/5. All three updated to 32, with the hedge line list copied into deviations.

### Fix 17 — deviations `wc -w` and colon-form phrasing; SHA; 1440px absence sentence

- `wc -w` 7,099 → **7,316** (remeasured after the body edits; wave 40 lablup class).
- Deviations no longer treat colon-form `tokens.rounded.full: 9999` as a body string; they name the Shape table’s `tokens.rounded.full` step `9999`.
- §8 D1 aside that embedded `measures 1440px` while asserting it “is not written” was removed (E2d shape: the asserting sentence was the only home of that string). The source never records that measure, so a negative claim is not required.
- F3 DESIGN SHA-256 `ed06d93b2f13c607ec3b3bd2e0cf3baf5cb65fb7e79a0baa5634e7078ac1f508`.

E2c check left in place: B3 five-kind gate is in full text at `DESIGN.md` 204 (transition properties, animation name, duration, easing, reduced-motion behavior, per-component gate). Dual dests that already matched (`https://piccollage.com` DESIGN 2 / provenance 5; `#4FC3C4` DESIGN 7 / provenance 7; `logo.type: favicon` 1/1; `s2/favicons` 1/1; `prose-derived` 2/5; `--color-pic-*` 1/2) were not rewritten.

---

## 범위 밖 관찰

**A1 key-path (YAML `tokens.components.<id>.<field>` → matching component block as a row).** All six records’ fields are present as rows on their own blocks, not merely as hexes elsewhere:

| id | fields in YAML | present as rows on that block |
|---|---|---|
| button-primary | type, bg, fg, radius, font, use | YAML sub-block 291–296 |
| button-nav | type, bg, fg, radius, padding, font, use | Token-set lines 321–327 |
| icon-button | type, bg, radius, use (no fg/padding/font in YAML) | Token-set lines 350–353; no invented fg/padding/font |
| nav-item | type, fg, radius, padding, font, use | Token-set lines 374–379 |
| card | type, bg, radius, use | Token-set lines 400–403 |
| thumbnail | type, radius, use (no bg in YAML) | Token-set lines 412–414 |

Color / type / spacing / rounded / shadow keys likewise keep token-set path columns beside values (not the krds “value survives, name column deleted” failure). No field was restored.

**A5a.** Gate `copy-loss` `compared: 0` < `candidates: 147`, so the hand sweep was mandatory. `verdict: PASS` means “none of the compared needles were lost,” not “copy was preserved.” Independent sweep of published labels (hero tagline, mission, company tagline, `Create & Celebrate.`, `Try PicCollage now!`, empty/error/`Try again`, `Download the App`, Cardinal Blue Software, Inc., Creative AI, OnBeat / BEAM / Noodle / MemeMe, YAML `use` strings) — DESIGN dest ≥ 1 each after this audit. No Latin published-copy loss to report. Sibling-only rating/CSS strings correctly stay off the portable body.

**B1 / sibling.** Sibling exists at `web/references/piccollage/.verification.md`. Sibling-only strings measured DESIGN 0 (`#604BB6`, `#7B2E8E`, `1.82M`, `100M+`, `4.8 stars`, `overflow:hidden`, `--color-pic-teal-200`, `bg-pic-beige-50`, `TW-based`, `headquartered`). No sibling-only structural classification (`portal H2` class) was promoted as a body fact. `headquartered` appears in provenance’s sibling transcript only.

**D2a.** Deletion rows name field kinds (이름·나이·동기·소속 분류) without given names, ages, cities, or biography. Word-boundary given-names in DESIGN and provenance: 0. Persona motivations and affiliation classifications were not reconstructed in Audience or Primary tasks. Archetype labels were not re-listed in the deletion rows; they are not published Korean copy the copy-loss gate requires named, and they are DESIGN dest 0.

**E2d.** Omission ledger does not assert “this file does not contain X” in the same row that lists X. Sibling-only “DESIGN.md 0” names DESIGN as the denominator and DESIGN measures 0. The §8 `measures 1440px` is-not-written sentence was removed under Fix 17 rather than left as a self-false three-file absence claim.

**Same hex, two roles (wave 39 krafton — report only).** `#ffffff` is `tokens.colors.on-primary` and Feature Card fill; `#e8e4d9` is surface-hover / card border / icon-button hover; `#ece9df` is `tokens.colors.surface` and icon-button default fill; `#292929` is `tokens.colors.body` and nav-download fg; `#4d4d4d` is `tokens.colors.body-secondary` and nav-item fg. Those splits are named in the Semantic color qualifier at 82, in the Card qualifier at 404, and in the provenance inventory. Not edited further.

**Conflict-handling policy (wave 40 item 5 — report only).** YAML vs §2 hex casing, YAML `9999` vs §4 `30px`, YAML `rgba(0,0,0,0.10) 0px 0px 12px` vs Level 1 `#E8E8E8` are all keep-both, consistently, not mixed 병기/삭제/overwrite.

**Wave 39 T2 convention.** `scale(1.02)` remains the source’s unmeasured follow-standard note, cited with that role, not revived as a token.

AUDIT_DONE fixes=17
