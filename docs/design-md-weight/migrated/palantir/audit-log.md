# palantir F3 audit (B2a · E1 · E2)

Auditor did not read a worker report. Inputs: `docs/design-md-weight/migrated/palantir/{DESIGN.md, provenance.md, migration-log.md}`, source `web/references/palantir/DESIGN.md`, sibling `web/references/palantir/.verification.md` (dotfile — path written; `find` confirmed existence). Counts: `grep -oF -- <pat> <file> | wc -l` per file, never `grep -c`. A shell `no matches found` was treated as unmeasured until `find` showed the file. After body/ledger edits the dest table was remeasured.

Not touched except where A1 key-path restoration required a path label on an existing row: token values, component tables as tables, state applicability, document structure. Line count of portable `DESIGN.md` stayed 284; every previously recorded line pointer still resolves.

Brand has a published developer surface (Blueprint documentation at `https://blueprintjs.com/docs/`, YAML `ds.type: system`). B2a closes already used the adapted form that names that documentation. Completeness of the adjacent close was the test, not the toss example that would deny a published specification.

Complete B2a after fix: DESIGN.md `derived editorial implementation inference` = 26, `not Palantir-authored` = 26, `including the published Blueprint documentation` = 26. Provenance inventory data rows = 26. 1:1.

## Sentence class (portable DESIGN.md)

Every sentence was classified as brand-published fact / recorded observation / editorial reading. Twenty-four editorial readings already carried a complete adjacent close. Two subsections did not. Four existing closes scoped themselves past a reading that sat on the same line or in the same subsection.

## Fixes

1. **DESIGN.md Experience Scope line 11 (B2a).** Class: editorial interpretation. The paragraph opens “Its public face is unusually direct for a design-system site.” The close at the end of the same line listed dark-wireframe / sparse-white / restrained-actions, Docs as a light compact reading environment, purposeful-split, and measured-utility-not-promotional-elevation, and did not name that first characterization. Adjacency without coverage is not coverage. Inserted “of the public face as unusually direct for a design-system site” into the existing readings list. No new qualifier sentence.

2. **DESIGN.md Semantic color line 82 (B2a).** Class: editorial interpretation. The per-swatch clauses “retained as the canonical primary color only for this captured Blueprint scope” and “it is not evidence that every Blueprint application uses a dark canvas” sat under a close that named pairing, domain split, and unmerge only. Extended that close to keep those per-swatch scope clauses. Same line.

3. **DESIGN.md Type roles line 147 (B2a).** Class: editorial interpretation. Line 161 already said the card font stays on `tokens.components.docs-welcome-card.font` and is not a type-role row. The subsection close at 147 named dual tables and body-`16`-off-spacing and did not name that reading, while the inventory already claimed it — a wide ledger against a narrower close. Extended the close at 147 to keep the card font on that component path rather than as a type-role row.

4. **DESIGN.md Capture record line 185 (B2a).** Class: editorial interpretation. Line 172’s “does not authorize a general menu component token” was not in the close that named token-limit, `not in the token set`, Kind: non-interactive, and incomplete coverage. Extended that close to include not taking the observed menu interaction as authorization for a general menu component token.

5. **DESIGN.md Measured but non-tokenized controls line 213 (B2a).** Class: editorial interpretation. The subsection had no close. “These values remain raw evidence rather than general button tokens” (206) and “not a general-purpose button” (213) are implementation inferences. Capture-record 185 labels the actions `not in the token set` and does not reach this subsection. Attached, same line: “Keeping those measured actions as raw evidence rather than general button tokens, and keeping the captured menu row off a general-purpose button, is a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.”

6. **DESIGN.md Layout line 218 (B2a).** Class: editorial interpretation. The first Layout paragraph is the source §5 application list (sparse introduction versus application canvases, Docs as the denser reference, list-row versus button, unmeasured groups left absent). Line 220’s close scopes itself to 1440×900 captures and “not mobile-first” as product-positioning. Adjacent paragraph, different reading. Attached, same line: “Those layout readings — sparse introduction versus application canvases, Docs as the denser reference, list-row versus button, unmeasured groups left absent — are derived editorial implementation inferences from the verified surfaces; they are not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation.”

7. **DESIGN.md Documentation card lines 198–199 (A1 key path).** YAML `tokens.components.docs-welcome-card.shadow` and `.font` values were already on those rows; the key paths were not. `.shadow` lived as a path only in Elevation `:116`; `.font` only in Type roles `:161`. Same-hex / same-string elsewhere is not preservation of the key path (icook / krds). Restored as row labels, values unchanged: Shadow · Token-set path `tokens.components.docs-welcome-card.shadow`; Font · Token-set path `tokens.components.docs-welcome-card.font`. No extra B2a (paths are source YAML keys, not a new reading).

8. **provenance.md Derived editorial inventory (E1, narrow).** Body after (5)(6) carries 26 closes; the table had 24 data rows. Added `Measured but non-tokenized controls :213` and `Layout :218`. Preamble now: portable DESIGN.md carries 26 complete B2a qualifications; table is 26 data rows.

9. **provenance.md Derived editorial inventory (E1, wide / mismatch).** Existing Qualified-reading cells were aligned to the actual closes: `:11` now names unusually-direct; `:82` the per-swatch scope clauses; `:147` the card-font path (was claimed, close now matches); `:185` the menu-token non-authorization. Named gaps `:273` said “unnamed values”; the body says “named values, not permissions to invent.” Ledger set to the body wording.

10. **migration-log.md YAML `tokens.shadow.docs-card` dest (E2 / E2a).** Claimed exact `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 0px 5px 0px` DESIGN dest 2 / provenance dest 2 (E2a). Remeasured: DESIGN 2 / provenance 0. The combined string is DESIGN-only. Path `tokens.shadow.docs-card` remains dest 1 / P dest 1 (E2a). Dual component path `tokens.components.docs-welcome-card.shadow` DESIGN dest 2 / P dest 0 after (7).

11. **migration-log.md YAML `docs-welcome-card` field dests (E2 / E2a).** “each DESIGN dest ≥1” replaced with per-field remeasurement: `.bg` 1; `.fg` 2 / P 1; `.radius` 1; `.padding` 1; `.height` 1; `.shadow` 2 / P 0; `.font` 3 / P 1 (E2a); `.use` 1. Paths now sit as rows on the Documentation card block.

12. **migration-log.md §4 measured-controls dest (E2 / E2a).** `4px 16px` DESIGN dest 2 / P dest 3 (E2a) — dest 2 was hanging off the whole landing-action phrase, which is DESIGN dest 1. `raw evidence rather than general button tokens` DESIGN dest 2 / P dest 1 (E2a) after (5). Qualifier pointer 213.

13. **migration-log.md §5 Layout dest (E2).** “Qualified at 220” covered only the responsive paragraph. Split: layout-application readings at 218; 1440×900 / not-mobile-first at 220.

14. **migration-log.md §15 Motion dest (E2).** Claimed `No duration, easing curve, transition, animation, or reduced-motion observation` dest 1. That truncated form is DESIGN dest 0. Actual body sentence `The supplied evidence contains no duration, easing curve, transition, animation, or reduced-motion observation.` DESIGN dest 1. Log now quotes the surviving sentence. B3 dests remeasured unchanged: computed transition properties 2, animation name 2, duration 4, easing 4, reduced-motion behavior 2, `that component's own` 1, partial-confirmation clause 1, in full text (E2c).

15. **migration-log.md §12 inventory count + F1 line (E2c).** “24 data rows” / “24 complete adjacent qualifications” / “Inventory rows = 24” → 26 / 26 / 26.

## 범위 밖 관찰

- **A5a.** Gate `--gate-only` `coverage: [{ check: "copy-loss", compared: 0, candidates: 89 }]`. `compared` 0 < `candidates` 89; `verdict: PASS` is “none of the compared needles were lost,” not “copy preserved.” Hand sweep of brand-issued strings (product/toolkit name, three quoted samples, Apache 2.0, three declared icon-font names, v6.x, identity name Palantir Blueprint) survives in DESIGN.md: `A React-based UI toolkit for the web.` dest 1; `Optimized for building complex data-dense interfaces.` dest 1; `The Best Idea Wins.` dest 1; `Apache 2.0` dest 1; `v6.x` dest 3; `blueprint-icons-16` dest 2. No Latin published-copy loss spotted. Not edited.

- **B1 sibling promotion.** Sibling-only strings measured DESIGN dest 0: `187px`, `rgba(255, 255, 255, 0.7)`, `Own The Outcome`, `Focus on the Mission`, `authenticated Palantir platform`, `coverage score 63`, `rgb(17, 20, 24)`, `rgb(45, 114, 210)`, `home::body`, `data-omd-capture`. No sibling-only structural class (`portal H2` dest 0) in the portable body. Source already had `twelve detected variants` and `surface-2`; those are not sibling promotions.

- **D2a.** Source §13 has two usage-archetype slots (role labels and motivations; no name, age, or city). Portable DESIGN dest 0 for the role labels and for the motivations. Deletion rows in provenance Omission ledger and migration-log §13 are unidentified (no name/age/city reprint; labels not re-listed). Audience does not reconstruct an affiliation classification. Labels are catalog archetypes, not brand-issued published copy; not treated as a copy-loss restore.

- **E2d.** Absence claims are portable-body dest 0 (`187px`, sibling slogans, `authenticated Palantir platform`) or source-side (“Unattributed cubic-bezier curves | None in the source”). They do not assert “nowhere in the three files” while reprinting the string as a surviving token. Mention/use is distinguished on provenance Sibling file.

- **Same-hex role splits (wave 39 krafton / E1).** Already in provenance Proof notes: `#ffffff` is `tokens.colors.on-primary` (landing action and headline) and, separately, `tokens.colors.canvas` (expanded Docs version menu); `#215db0` is `tokens.colors.link` and, separately, `tokens.components.docs-welcome-card.fg`; card `oklch(1 0 257.113)` is not Docs canvas `#ffffff`. Same-number splits for `16` / `30` / `20` also recorded there. Not a missing ledger. Not edited beyond dest remeasurement.

- **Wave 39/40 motion/rules.** Source §15 has no duration/easing/transition observation. Portable Motion creates no token and states the five-kind gate. That omission is correct (kmong), not a defect to fill.

- **Column structure (wave 40 krds).** Color/type/spacing/rounded keys remain as named paths beside values. The only missing key-path-on-block cases were the two restored in fix 7. Conflict handling is consistent: same-hex and same-number writings stay unmerged rather than mixed (one merged, one deleted, one rewritten).

- **A1 remainder.** YAML `tokens.components.docs-welcome-card.{type,bg,fg,radius,padding,height,use}` already had a row with path on Documentation card. Typography/spacing/rounded/color keys remain as rows in their Foundations/Type-roles blocks.

AUDIT_DONE fixes=15
