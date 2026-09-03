# pega F3 audit (B2a · E1 · E2)

Auditor did not read a worker report. Inputs: `docs/design-md-weight/migrated/pega/{DESIGN,provenance,migration-log}.md`, source `web/references/pega/DESIGN.md`, sibling `web/references/pega/.verification.md` (path written; `find` confirmed the dotfile). Counts: `grep -oF -- <pat> <file> | wc -l` per file, never `grep -c`. A shell `no matches found` would have been unmeasured, not zero.

Not touched: token values, component tables, state applicability, document structure. `DESIGN.md` byte-identical after the audit (SHA-256 `5e68e17e6e7187378499a90052c782576e7640bd3ef327e0f08f7ddeacafd104`). After ledger edits the dest table was remeasured.

Pega publishes a UX Design System (`ds.type: system`), so every close uses the published-spec form `not Pega-authored or taken from a separately published UI specification, including the published Pega UX Design System documentation` (rulebook v12 B2a 전제 주석). That form is complete; the toss no-DS example was not required.

## Sentence class (portable DESIGN.md)

Every sentence was classified as **brand-published / source-verbatim fact**, **recorded observation**, or **editorial interpretation / causal judgement**. Third-class readings already carried an adjacent complete close. Measured: `derived editorial implementation inference` DESIGN = 24 at 9/11/13/19/28/32/43/52/59/63/70/80/101/111/115/119/127/141/145/160/169/258/277/311; `not Pega-authored` DESIGN = 24 on the same lines. Provenance inventory data rows = 24 (heading `## Derived editorial inventory` at 150). 1:1. No portable qualifier was attached.

Left unqualified on purpose (not a reconstruction-boundary exemption): YAML/catalog identity restatements; hex and geometry observations; §7 Do/Don’t lists as the source’s own lists; §10 wording samples; §11 founding/Constellation/2021 recordings marked as the source’s own; §14 source state contract; B3 five-kind gate as Core policy sitting next to the Motion close at 119; Core C1/C2 applicability sentences after the Capture close at 169; Governance boilerplate; Named-gaps inventory items under the close at 311.

## Fixes

1. **`provenance.md` Derived editorial inventory, Semantic color `:80` (E1).** The body close at DESIGN 80 names canvas `#ffffff` off dark-link-action fg **and off header utility text `#ffffff`**. The inventory row named only canvas off dark-link-action fg — narrower than the body. Header utility text added to that row. Row count stays 24.

2. **`provenance.md` Proof notes (E1, wave 39).** Same hex, different roles, as the body actually uses them, were not in the ledger: `#ffffff` as `tokens.colors.canvas`, header utility text on `#1a3a5c`, `tokens.components.dark-link-action.fg`, `tokens.components.dark-link-action.border` (`1px solid #ffffff`), and `tokens.components.header-search.fg`. Recorded there, not as a 25th inventory row (no extra B2a). `#03102e` action fill / dark-link-action background and `#050505` foreground / menu-row text are the same role and are noted as such.

3. **`migration-log.md` YAML identity dest (E2 / E2a).** Homepage prefix `https://design.pega.com/` was DESIGN dest 4 unique lines / provenance dest 12. Remeasured occurrences: DESIGN dest 8 at 9/9/9/9/9/21/23/149 + provenance dest 13 at 13/23/51/52/53/57/58/59/64/65/66/132/132. Exact homepage URL (not followed by an extra path) DESIGN dest 4 at 9/9/9/21 + provenance dest 6 at 13/23/51/52/57/64. `#1a3a5c` was DESIGN dest 4 at 11/34/80/82 (unique lines; line 11 has two hits). Remeasured DESIGN dest 5 at 11/11/34/80/82 + provenance dest 4 at 14/116/136/167 (Proof-notes insert added 116).

4. **`migration-log.md` YAML `tokens.typography.family.ui` dest (E2).** `Roboto Flex` was DESIGN dest 22 (unique lines). Remeasured dest 25 at 9/11/11/36/56/59/66/127/131/131/132/133/138/139/139/141/145/149/150/152/157/158/183/209/232. `UX System ’25` was dest at 36/131/139, missing Font-evidence `:127`. Remeasured dest 4 at 36/127/131/139; `Pega UX System ’25` dest 1 at 131.

5. **`migration-log.md` YAML heading/body dest (E2).** `24.64px` was dest 2 at 145/150. Remeasured dest 3 at 145/145/150. `14px / 400 / Roboto Flex` was dest 152/209. Remeasured dest 3 at 145/152/209.

6. **`migration-log.md` YAML spacing/rounded dest (E2).** Log claimed full path `tokens.spacing.version-button-x: 12` disambiguated at 93. Line 93 uses the shortened `version-button-x: 12` / `search-input-x: 12`. Full path `tokens.spacing.version-button-x` dest 1 at 96; `tokens.spacing.search-input-x` dest 2 at 97/208; `tokens.spacing.dark-action-y` dest 3 at 98/145/182; `tokens.spacing.dark-action-x` dest 3 at 99/105/182.

7. **`migration-log.md` YAML components dest (E2 / E2a).** YAML `states` was dest 187/213. Remeasured dest 4 at 187/188/213/214 (YAML-states line and Observed line on each of the two records). `59px` was “dest on the dark action” with no count; remesured DESIGN dest 7 at 11/11/35/37/101/181/253.

8. **`migration-log.md` §4 dest (E2).** `listItem` / `row/menuitem` were collapsed as dest 167/236. `listItem` DESIGN dest 3 at 167/229/229; `row/menuitem` dest 2 at 167/236.

9. **`migration-log.md` §12 dest (E2 / E2c).** Log claimed source closing sentence dest 1 at 43. `grep -oF` of the source sentence starting “The UI implications are…” DESIGN dest 0. `:43` restates it inside the qualifier (“The source’s own closing sentence already says the UI implications are…”). Log no longer claims a contiguous dest of the source sentence.

10. **`migration-log.md` YAML colors dest (E2a).** `#ffffff` DESIGN dest 10 at 11/34/55/80/80/80/84/178/179/205 + provenance dest 5 at 116/116/167/167/167, after the Proof-notes split.

11. **`migration-log.md` provenance pointers after the Proof-notes insert (E2).** Sibling masthead shadow `provenance.md` 127 → 128. §9 deletion check 147 → 148. Sibling-only transcript 125–131 → 126–132.

## 범위 밖 관찰

- **A1 key path (wave 33).** YAML `tokens.components.dark-link-action|header-search|menu-row` fields are present as rows in the matching blocks (type/bg/fg/border/radius/height/padding/font/states/use as the source records them). Full `tokens.components.<id>.<field>` paths also sit on each block’s “YAML fields on this component” line. Not treated as field loss. Dotted typography subpaths `tokens.typography.heading.size` / `.weight` / `.lineHeight` and `tokens.typography.body.weight` / `.lineHeight` are DESIGN dest 0 as strings; the Size / Weight / Line-height columns of the Type-roles table still hold `38.4` / `500` / `48px` and `16` / `400` / `24.64px`. That is T2 keep-both of YAML numbers beside §3 px writings, not an icook missing-Text-row. Not edited.

- **B1 sibling promotion.** Sibling `web/references/pega/.verification.md` exists. Sibling-only strings measured DESIGN dest 0: `60px`, `17.6px`, `rgb(15, 37, 64)`, `6.4px 20px`, `coverage score`, `artifacts/reference-evidence`, `https://www.pega.com/about`, `https://design.pega.com/about/get-started/`, `https://www.pega.com/de/insights/articles/go-behind-scenes-how-pega-brand-evolving`, `https://design.pega.com/patterns/forms/`, `data-omd-capture`, `#masthead`, `.version-btn`, `.search-field`, `.link-as-button` (class selector; the source’s `link-as-button` classname is in the body), `surfaceCount`, `componentTypes`, `componentVariants`, `observedStates`, `portal H2`. `masthead` as a word is source-body (`SRC 1 / DES 1`). No sibling-only structural class promoted.

- **D2a.** Source §13 has no named personas. Deletion/omission rows name field kinds (name, age, city, motivation, affiliation classification) and do not re-list identifiers. `Alan Trefler` is a kept §11 narrative dest (DESIGN dest 1 at 13), not a deletion-row identifier. Primary tasks are captured surfaces, not persona motivations. Audience keeps the source’s own stakeholder wording (`Cases` / `Assignments` / application designers and authors).

- **E2d.** Absence claims are portable-body dest 0 (sibling-only list; source closing sentence not contiguous). They do not assert “nowhere in the three files” while reprinting the string as a surviving token. Provenance sibling section marks mention as disposition, not portable use.

- **A5a.** Gate `copy-loss` compared 0 / candidates 94, so A5a was mandatory. Log hand sweep 11 extracted / 0 missing; YAML `use` 3 / 0; official wording samples 3 / 0. Sampled published strings survive in DESIGN.md: `Pega UX Design System`, `Roboto Flex`, `Constellation`, `link-as-button`, `SIL Open Font License 1.1`, `Patterns and components for building enterprise applications.`, `The fastest path to an accurate outcome.`, `Build for Change®.`, `Cases`, `Assignments`, `Pega UX System ’25`. No Latin published-copy loss spotted. `verdict: PASS` was not treated as “all copy preserved.”

- **B3 / E2c.** Foundations Motion `:119` names transition properties, animation name, duration, easing, reduced-motion behavior, the per-component computed-observation gate, and the partial-confirmation clause (including a match against the published Pega UX Design System documentation), in full text.

- **Wave 39/40.** No unattributed curve invented; source has no motion values and the body keeps that omission. Token-set paths remain as keys beside values. `#ffffff` role split now sits in provenance Proof notes (fix 2). Conflict-handling policy is consistent (same-hex roles kept apart rather than mixed).

AUDIT_DONE fixes=11
