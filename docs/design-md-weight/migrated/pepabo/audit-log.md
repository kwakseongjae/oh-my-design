# pepabo F3 audit (B2a · E1 · E2)

Auditor did not read a worker report. Inputs: `docs/design-md-weight/migrated/pepabo/{DESIGN,provenance,migration-log}.md`, source `web/references/pepabo/DESIGN.md`, sibling `web/references/pepabo/.verification.md` (path written; `find` confirmed the dotfile). Counts: `grep -o <pat> <file> | wc -l` per file, never `grep -c`. A shell `no matches found` would have been unmeasured, not zero.

Not touched: token values, component tables, state applicability, document structure. After body and ledger edits the dest table was remeasured.

Pepabo publishes Inhouse (`design.pepabo.com/inhouse/`), so every close uses the published-spec form `not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation` (rulebook v12 B2a 전제 주석). That form is complete; the toss no-DS example was not required.

## Sentence class (portable DESIGN.md)

Every sentence was classified as **brand-published / source-verbatim fact**, **recorded observation**, or **editorial interpretation / causal judgement**. Third-class readings already carrying an adjacent complete close were left as-is. After the three attachments below: `derived editorial implementation inference` DESIGN = 27 at 9/11/13/19/28/32/46/56/69/84/138/148/158/162/195/214/218/237/247/249/367/421/481/516/521/539/573. Provenance inventory data rows = 27 (heading `## Derived editorial inventory`; closing paragraph at 172). 1:1.

Left unqualified on purpose (not a reconstruction-boundary exemption): YAML/catalog identity restatements; Flavor names, Sass signatures, hex values, type metrics, radii, and the mission line marked as the source's own; §7 Do/Don't lists as the source's own lists; §10 wording samples and forbidden register; §11 founding/2021 recordings marked as publicly documented facts; §14 source state contract; B3 five-kind gate as Core policy sitting next to the Motion close at 162; Core C1/C2 applicability sentences after the Capture close at 249; Governance boilerplate; Named-gaps inventory items under the close at 573.

Third class found without an adjacent complete limiter (fixed below):
- Capture record `:247` — classifying the Textfield `#1f7ccc` ring as generic Focus rather than a `focus-visible` treatment (the `:249` qualifier names only "the following applicability note")
- Textfield Observed Focus `:367` — the same classification on the component record, not adjacent to `:247`
- Content locale omit `:539` — omitting locale claims beyond the Japanese-first stack / YakuHanJP / verbatim samples

## Fixes

1. **`DESIGN.md` Capture record `:247` (B2a).** Attached: classifying that ring as a generic Focus observation rather than a focus-visible treatment, and keeping the observation on the Textfield record rather than on a focus-visible row, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

2. **`DESIGN.md` Textfield Observed Focus `:367` (B2a).** Attached the same complete close on the Observed Focus bullet, because `:247` is not adjacent to that record (Hairline Card already had this two-site pattern).

3. **`DESIGN.md` Content locale omit `:539` (B2a).** Attached a complete close on omitting locale claims beyond the Japanese-first stack, the YakuHanJP punctuation layer, and the verbatim samples.

4. **`provenance.md` Derived editorial inventory (E1).** Was 24 data rows / body 24, then narrow after the three body closes. Added Capture record Focus `:247`, Textfield Observed Focus `:367`, Content locale omit `:539`. Table is now 27 rows at 144–170. Closing sentence restated: 27 complete B2a qualifications; Motion `:180` is the B3 gate, not a 28th B2a row.

5. **`migration-log.md` YAML identity dest (E2 / E2a).** `#1f7ccc` was DESIGN dest 13 at 11/36/60/92/132/247/259/262/367/369/**376**/378 + "later mint-adjacent uses". Line 376 has no `#1f7ccc` (fitpet-class false 2nd dest). Remeasured DESIGN dest 14 at 11/11/36/60/92/92/132/247/259/262/367/369/378/577 + provenance dest 10 at 14/23/46/47/47/96/162/186/186/194. Homepage remesured DESIGN dest 2 at 9/9 + provenance dest 3 at 13/69/81. Display `GMO Pepabo (Inhouse)` provenance dest 2 at 1/10 (was dest 1 at 11).

6. **`migration-log.md` YAML `omd` / harvest dest (E2).** `tokens.source` provenance dest 2 at 17/191 (was 17/188). `components_harvested` dest 2 at 19/190 (was 19/187). Pointers drifted when the inventory grew.

7. **`migration-log.md` YAML colors dest (E2).** Header said 21 keys / "All twenty-one roles" while the same cell listed 22 keys including `ink-black`. Corrected to 22 / twenty-two.

8. **`migration-log.md` YAML type dest (E2).** Densities `28/24/20px` dest 2 at 220/228 (was dest at 220 only). `1.33` dest 4 at 226/230/233/233 (was "XL and XS" with no count).

9. **`migration-log.md` YAML components dest (E2).** Filled radius dest at 388 (was 386). Textfield Large dest at 370 (was 371). 2px border dest at 303 (was 301). Medium button dest at 280 (was 279). `not in the token set` dest 3 at 249/417/421 (was 417/421).

10. **`migration-log.md` §9 / §11 / §12 provenance pointers (E2).** §9 deletion check `provenance.md` 186 (was 183). Narrative-not-token-source 195 (was 192). Derived inventory 144–170, 27 data rows (was 144–167, 24).

11. **`migration-log.md` §13 deletion row (D2a / E2d).** The disposition cell listed 佐藤 / 美咲 / 田中 / 山本 涼 while asserting DESIGN dest 0 / provenance dest 0. That is re-listing identifiers in a deletion row, and the absence claim contained the strings it denied. Replaced with unidentified form: source §13, 3 slots (name, age, and city were present). Pointer `provenance.md` 180. Archetype-header wording kept (gate copy-loss / D2a boundary).

12. **`migration-log.md` §10 / §14 dest after body edits (E2).** Content range 519–539; locale-omit close recorded at 539. Focus classification closes recorded at 247 and 367. Generic Focus `#1f7ccc` dest at 247/367/369/577.

13. **`migration-log.md` Deviations (E2c / E1).** Word count remesured 7,523. Color-key count 22. B2a measure DESIGN inference = 27 at the line list above; `including the published Inhouse documentation` DESIGN = 28 because Motion `:180` is the B3 gate; provenance ledger 27 rows at 144–170.

No token values, component tables, state applicability, or section structure were changed.

## 범위 밖 관찰

- **A1 key path (wave 33).** YAML `tokens.components.<id>.<field>` for all eleven records (`button-primary` / `button-outline` / `button-pill` / `button-small` / `textfield` / `textfield-filled` / `card` / `nav-link` / `badge-positive` / `badge-negative` / `avatar`) are present as rows in the matching blocks (type / bg / fg / border / radius / padding / height / font / shadow / active / use as the source records them). `Token-set use:` restores each YAML `use` byte-exact. Not treated as field loss. Same-hex values that also appear in other blocks (`#ffffff`, `#585c63`, `#000000`) keep their own rows on the owning record.

- **B1 sibling promotion.** Sibling `web/references/pepabo/.verification.md` exists. Sibling-only strings measured DESIGN dest 0: `Pepabo Design`, `Inhouse - Pepabo Design`, `get-image-overlay-color`, `$blue-600`, `$informative-color`, `get-implication-color`, `No designs found for`, `tech.pepabo.com/2021/04/30`, `font-size: 64px`, `hero H2`, `0px 16px`, `portal H2`. Live H1 21px/700 is source-body (`SRC` type table / `DES` 200/227), not a sibling H1-text promotion. `hero H2` is source closing-comment + sibling; DES 0 / PROV 0.

- **D2a (after fix 11).** Identifiers DESIGN dest 0 / provenance dest 0 / log dest 0. Motivations (`maker-celebrating`, `theme survives`, `Guards the neutrality`, `@pepabo-inhouse`, `design-systems lead`, `product designer on minne`, `front-end engineer on SUZURI`) DESIGN dest 0 / provenance dest 0. Audience keeps only the source §13 header wording (`Pepabo product designers and engineers building across multiple service brands`, src 1 / dest 1). Primary tasks name captured documentation/corporate controls, not persona motivations. Founding `Fukuoka` in Scope `:13` is source §11 narrative, not a persona city.

- **E2d (after fix 11).** No remaining absence claim asserts "nowhere in the three files" while reprinting a dropped identifier. Sibling dest-0 list in the log names DESIGN.md dest 0, not three-file absence. `cubic-bezier` DESIGN dest 0 is true (provenance omission ledger still names the easing *roles*).

- **A5a.** Gate `copy-loss` compared 11 / candidates 234, so A5a was mandatory. Log hand sweep 12 extracted / 0 missing; YAML `use` 19 / 0. Sampled published strings survive in DESIGN.md: `人類のアウトプットを増やす`, `Increase humanity's output`, `便利な制約`, `保存`, `無料診断中`, `必須`, `Inhouse`, `Foundation`, `Flavors`, `Components`, `get-primitive-color($name, $level)`, `get-semantic-color($intention, $level)`, `ペパボのデザインシステムのドキュメントを公開します`, `1px solid #585c63`. No Latin published-copy loss spotted. `verdict: PASS` was not treated as "all copy preserved."

- **B3 / E2c.** Foundations Motion `:180` names transition properties, animation name, duration, easing, reduced-motion behavior, the per-component computed-observation gate, and the partial-confirmation clause (including a match against the published Inhouse documentation), in full text.

- **Wave 39/40.** Exact cubic-bezier values are omitted; duration tokens and easing *roles* remain (T2 keep-role). No motion/spacing rule was synthesized. Token-set path column remains beside each color/elevation value; Pepper Gray 800–100 step attributions sit in Recorded use. `#ffffff` as `tokens.colors.canvas` and `tokens.colors.on-primary`, `#585c63` as body and outlined `fg`, `#000000` as ink-black / pepper fill / hero canvas, are already split in portable Foundations `:113` and provenance Proof notes `:196`. Conflict-handling is consistent (source footer: conflicts unresolved none; same-hex roles kept unmerged rather than mixed).

AUDIT_DONE fixes=13
