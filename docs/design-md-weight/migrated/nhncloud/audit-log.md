# nhncloud F3 audit (B2a · E1 · E2)

Auditor did not read a worker report. Inputs: `docs/design-md-weight/migrated/nhncloud/{DESIGN,provenance,migration-log}.md`, source `web/references/nhncloud/DESIGN.md`, sibling `web/references/nhncloud/.verification.md` (path written; `find` confirmed). Counts: `grep -oF -- <pat> <file> | wc -l` per file, never `grep -c`. After body/ledger edits the dest table was remeasured.

## Sentence class (portable DESIGN.md)

Brand-issued / source-verbatim facts (company history, YAML notes, selector-backed values, Do/Don't lists, §10–§15 sentences) keep their source wording. Observed measurements sit in Foundations / Components rows. Editorial/causal readings already carried a complete adapted B2a close (derived editorial implementation inference + not NHN Cloud-authored + separately published UI specification, including the published TOAST UI catalog) except one act in the capture record.

Complete B2a after fix: DESIGN.md 26 (`not NHN Cloud-authored` = 26). Provenance inventory data rows = 26. 1:1.

## Fixes

1. **DESIGN.md Capture record line 173 (B2a).** Class: editorial interpretation. The source sentence “It is not promoted as the corporate CTA token” (docs-chrome CTA at `surface-3::[data-omd-capture="3"]`) had no adjacent complete close; line 177’s qualifier covers applicability/kind, not that non-promotion. Attached, same sentence: “Not promoting that documentation-chrome sample as the corporate CTA token is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.”

2. **provenance.md Derived editorial inventory (E1).** Range was 25 rows against a 25-close body; after (1) that would have been narrow. Added data row `Capture record :173` for the docs-chrome CTA non-promotion. Preamble now: portable DESIGN.md carries 26 complete B2a qualifications; table is 26 data rows.

3. **provenance.md Proof notes (E1).** Same-hex role splits were in the body and not in the ledger: `#FFFFFF` / `#ffffff` as CTA on-primary label and as Resource Menu panel text; `#727781` as trigger text and as menu/hairline border; `#125DE6` / `#125de6` as corporate CTA fill/border and as a separate documentation-chrome CTA; `#E9F1FF` documentation-chrome only. Recorded there, not as a 27th inventory row (no extra B2a).

4. **migration-log.md YAML `ds.description` dest (E2).** Claimed `distinct developer/documentation surface, not a published token sheet` DESIGN dest 2 / provenance dest 2. Remeasured: DESIGN 2 / provenance 1. Log set to provenance dest 1.

5. **migration-log.md YAML `tokens.colors` dest table (E2 / E2a).** Remeasured after (3): `tokens.colors.on-primary` DESIGN 1 / P 1; `tokens.colors.dark` DESIGN 1 / P 1 (both were DESIGN-only); `tokens.colors.muted` DESIGN 2 / P 2 (was P 1); `tokens.colors.border` DESIGN 2 / P 2 (was P 1); `#125de6` DESIGN 7 / P 3; `#125DE6` DESIGN 10 / P 2; `#ffffff` DESIGN 3 / P 2; `#FFFFFF` DESIGN 4 / P 1 (was P 0); `#727781` DESIGN 10 / P 3; `#E9F1FF` DESIGN 2 / P 2.

6. **migration-log.md YAML typography dest table (E2 / E2a).** `tokens.typography.family.ui` DESIGN 2 / P 1; `tokens.typography.body.size` DESIGN 2 / P 1 (was DESIGN dest 1 — two hits on Type roles line 151); `tokens.typography.cta.size` DESIGN 1 / P 1; `tokens.typography.cta-lg.size` DESIGN 1 / P 1; `Corporate-marketing body sample` DESIGN 1 / P 2; `40px corporate header CTA` DESIGN 1 / P 1; `48px corporate section CTA` DESIGN 1 / P 1.

7. **migration-log.md §12 inventory count (E2c).** “25 data rows” → “26 data rows” to match the ledger.

8. **migration-log.md §14 dest + qualifier pointer (E2 / E2a).** Selector `surface-3::[data-omd-capture="3"]` DESIGN dest 1 / P dest 2 (was P 1 — inventory row). Notes the adjacent B2a at 173.

9. **migration-log.md F1 line (E2c).** “25 complete adjacent qualifications” / “Inventory rows = 25” → 26 / 26.

10. **migration-log.md §9 unique-constraint dests (E2a).** `15px-400` DESIGN dest 1 / provenance dest 1; `17px-500` DESIGN dest 1 / provenance dest 1 (were DESIGN-only).

## 범위 밖 관찰

- **A1 key path (wave 33).** YAML `tokens.components.corporate-header-cta|corporate-section-cta|resource-menu-trigger` fields are present as values in the matching component blocks; full `tokens.components.<id>.<field>` paths are listed on each block’s “YAML fields on this component” line. Header/section Text rows also write `YAML fg`; the trigger Text row is `Text: #727781` with the fg path only on that inventory line. Not treated as field loss (value + path remain in that block). Not edited (component table out of B2a/E2 write scope unless a field is missing).
- **B1 sibling promotion.** Sibling-only strings measured DESIGN dest 0: `rgb(0, 0, 0)`, `24px`, `#00A9FF`, `14px/300`, `authenticated`, `role="menu"`, `rounded-30`, `bg-blue-700`, `home::body`, historical hexes `#0088D9` `#E5F6FF` `#009BF2` `#FA2828` `#F7F9FC`. No sibling-only structural class (e.g. portal H2) in the portable body.
- **D2a.** Source §13 has three constructed role labels and motivations, no name/age/city. Portable DESIGN dest 0 for those labels and motivations. Deletion row is unidentified (role labels not re-listed). Labels are not brand-issued published copy; not re-hosted as Audience affiliation.
- **E2d.** Absence claims are portable-body dest 0 (`authenticated` “not copied into the portable body”; sibling dest-0 list). They do not assert “nowhere in the three files” while reprinting the string as a surviving token.
- **A5a.** Log records hand sweep 18/18, unsurvived 0; no gate `compared`/`candidates` pair. Sampled published strings (Pretendard Variable, TOAST UI application list, company/catalog phrases, OFL, `continuously maintained`) survive in DESIGN.md. No Latin published-copy loss spotted. `verdict: PASS` was not treated as “all copy preserved.”
- **B3 / E2c.** Foundations Motion still names transition properties (DESIGN 2), animation name (3), duration (4), easing (4), reduced-motion behavior (3), per-component computed observation (2), partial-confirmation clause (1), in full text.
- **Wave 39/40.** No unattributed cubic-bezier invented. Token-name paths for YAML colors/type/spacing/rounded/shadow remain as columns/keys beside values. Casing policy is consistent (YAML lowercase kept beside body uppercase). Hex role splits now sit in provenance Proof notes (fix 3).

AUDIT_DONE fixes=10

## Mechanical correction (use-landing)

Gate already PASS; limiter already 1:1 (본문 26 / 원장 26, heading `## Derived editorial inventory`). `portable_core` already true. Body claim sentences not rewritten. No limiter was missing; no DESIGN.md qualifier attached.

Cause: YAML `tokens.components.*.use` 3 strings were not a contiguous byte match in portable DESIGN.md. Existing Use lines wrapped the selector in backticks (`selector \`home::[data-omd-capture=13]\``), so `includes()` missed the YAML form `Corporate-marketing … selector home::[data-omd-capture=N]`. Typography YAML `use` three (`Corporate-marketing body sample`, `40px corporate header CTA`, `48px corporate section CTA`) already dest 1.

### Fixes

1. **DESIGN.md Corporate Header CTA `:193` (착지).** Class: YAML `use` landing, not a new limiter. Inserted `Token-set use: Corporate-marketing header CTA, selector home::[data-omd-capture=13]` immediately above the keep-both Use line. Dual-form Use line at 194 kept (backticked unquoted + quoted `home::[data-omd-capture="13"]`). Token values / applicability table untouched. `grep -oF --` DESIGN dest **1** (was 0). Selector `home::[data-omd-capture=13]` DESIGN dest **2** / P dest 1; quoted form DESIGN dest 1 / P dest 1.

2. **DESIGN.md Corporate Section CTA `:220` (착지).** Same class. Inserted `Token-set use: Corporate-marketing section CTA, selector home::[data-omd-capture=29]`. Use line at 221 kept. DESIGN dest **1** (was 0). Selector `home::[data-omd-capture=29]` DESIGN dest **2** / P dest 1; quoted form DESIGN dest 1 / P dest 1.

3. **DESIGN.md Resource Menu Trigger `:246` (착지).** Same class. Inserted `Token-set use: Corporate-marketing resource/menu trigger, selector home::[data-omd-capture=130]`. Use line at 247 kept. DESIGN dest **1** (was 0). Selector `home::[data-omd-capture=130]` DESIGN dest **2** / P dest 1; quoted form DESIGN dest 1 / P dest 1.

4. **provenance.md Derived editorial inventory Locations (원장, 줄만).** Three insertions sit after Capture record `:173`/`:177` and before Resource Menu. Data-row count unchanged (26). Location pointers after the insert remapped to the same qualifier sentences: Resource Menu `:272`→`:275`; Layout `:281`→`:284`; Content `:288`→`:291`; Named gaps `:322`→`:325`. Heading remains `## Derived editorial inventory`; header remains `| Location in DESIGN.md | Qualified reading |`. No extra/missing row.

5. **migration-log.md dest 재실측 (E2a).** YAML component rows now record the three verbatim `use` dest 1 at 193/220/246 and unquoted-selector DESIGN dest 2 (was dest 1). Layout/responsive/content line ranges shifted by the same +3: §5 `274–278` / qualified 281 → `280–282` / 284; §8 `276` → `282`; §10 `283–288` / 288 → `289–291` / 291. Dest counts for those body phrases rechecked unchanged.

Limiter still 26:26. No governance claim rewrite.

FIX_DONE nhncloud mech
