# Dabang migration log

Ruleset: `MIGRATION_RULEBOOK.md` v8 (2026-08-25)

Source: `web/references/dabang/DESIGN.md`
Destination: `docs/design-md-weight/migrated/dabang/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/dabang/provenance.md`
Date: 2026-08-25
Worker: GPT-5.6-sol T2-1 Wave 18
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd: `portable_core: true`; `test-v2/tools/migrate-reference.mjs --gate-only`: PASS, problems `[]`)
DESIGN SHA-256: `e6abe9072eae1785087ab668ed1620b83f5c56f55ce768ca85a8dab2097bade8`

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, country/category/homepage) | 분리 → provenance; name 이중 목적지 → H1/Scope | Portable frontmatter removed; exact identity preserved. |
| YAML `primary_color: #ff3478` | 이중 목적지 → Foundations identity boundary + provenance | Value retained as catalog identity metadata and explicitly not promoted to a product-control role. |
| YAML favicon | 분리 → provenance; asset-authority boundary → Typography & Assets | Exact URL retained in ledger; portable file does not claim an official distributed logo/licence. |
| YAML verified/omd/verification_v2/claims | 분리 → provenance | Freshness, surfaces, sources, conflicts, methods, and bindings remain proof metadata. |
| YAML token note/source/extracted/harvested | 분리 → provenance; domain boundary 이중 목적지 → Scope | Exact metadata stays in provenance; home/map versus FAQ boundary remains standalone. |
| YAML colors | 옮김 → Foundations; ledger → provenance | All six token colors plus bounded identity pink/black context preserved without semantic merging. |
| YAML typography | 옮김 → Typography & Assets; ledger → provenance | Family and every size/weight/line-height/use preserved; support-only metrics stay support-bounded. |
| YAML spacing/rounded | 옮김 → Foundations; ledger → provenance | All 4/8/16 and 2/8/6/32/42 values retained without averaging. |
| YAML components | 옮김 → Components & States; exact records → provenance | All four component records, their two source primitive types, and every field/state/use/selector meaning are preserved. Applicability follows role meaning; no static pseudo-state promotion. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope/traits | Product/service scope and evidence domains retained; visual reading has adjacent complete B2a classification. |
| §2 Color Palette & Roles | 옮김 → Foundations | All roles and identity/action boundaries preserved. `#f5f5f5` static hover sample is not generalized. |
| §3 Typography Rules | 옮김 → Typography & Assets; proof counts/URLs → provenance | Font evidence classes, 376 uses, 92 sources, OFL boundary, roles, and unresolved native/font-owner fields retained. |
| §4 Components | 옮김 → Components & States; selectors/raw sidecar tuples → provenance | Defaults for four product controls and FAQ row retained. Home pill/map-tool geometry stays separate; C4 omits unknown kind/maps. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 32/42 route distinction, conservative 4/8/16 spacing, FAQ padding boundary, and absent grid/breakpoint constraints retained. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Selector-bounded `none` retained; no universal zero-shadow claim. |
| §7 Do’s and Don’ts | source-domain, observed-font, geometry, action-color, system-font substitution, and invention boundaries → Experience derived principles/Avoid + Foundations/Assets; generic runtime-fallback instruction 삭제 | The source claim against substituting a system font as loaded `Pretendard Variable` is restored in Experience Avoid (`DESIGN.md:58`) under adjacent complete derived-editorial classification. Only the generic instruction to retain a normal runtime fallback is deleted; provenance retains the observed/system-fallback evidence boundary. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 1440×900-only boundary and unresolved mobile/drawer/safe-area/density behavior retained. |
| §9 Agent Prompt Guide | 고유 account/search/dock 값 → Components; copy-ready prompt and generic unlisted-component extension wrapper 삭제 | The component values exist in portable records. The tool-specific packaging and unsourced generic extension instruction are not retained as Dabang-authored guidance. |
| §10 Voice & Tone | 옮김 → Content & Locales | Property task, actor, content-source, transaction-party, and forbidden-register rules retained. |
| §11 Brand Narrative | 옮김 → Experience Scope + Content | Station3 service family, terms boundary, and neutral operational UI interpretation retained; editorial interpretation carries B2a. |
| §12 Principles | 옮김 → Experience derived principles | Four principles retained with complete adjacent B2a and without doctrine promotion. |
| §13 Personas | 옮김 → Experience Audience + Primary tasks | Source explicitly says service-role contexts, not invented demographics; three groups/tasks retained without biography. |
| §14 States | 옮김 → Components & States observed-state record | Default boundaries are preserved in the observed-state table. They do not supply the separately derived per-component applicability maps; missing treatments remain absent and no completeness claim is made. |
| §15 Motion & Easing | 옮김 → Foundations Motion | No source values promoted; full five-kind B3 promotion condition and local-extension/reduced-motion boundary retained. |
| Footer Verified/Tier sources/conflicts/rollback | 분리 → provenance | Exact source attempts, conflict resolution, and rolled-back legacy claim classes retained. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof | Raw selectors/tuples, font evidence, counts, domain boundaries, and static pseudo-state `#eef8ff` retained; sibling-only values are not invented into portable tokens. |

## Required final passes

- F1 B2a scan: completed across Scope, principles, avoidances, foundations, components, layout, content, and governance; derived editorial claims have adjacent complete evidence-class text.
- F2 E2 scan: re-completed after the Opus 5 revision against the source, portable DESIGN.md, and provenance.md via exhaustive grep; the §7 system-font substitution boundary resolves to `DESIGN.md:58`, the rolled-back `universal 8px layout system` resolves to `provenance.md:108`, and every identity/asset/domain dual destination plus selector/value disposition exists as logged.
- E3: no token, hex, URL, selector, or wording is distorted for gate behavior. Gate false positives will be reported instead of evaded.

Revision (2026-08-25, Opus 5): restored the §7 system-font substitution boundary at `DESIGN.md:58`, completed the rollback ledger at `provenance.md:108`, and re-grepped all 26 ledger destinations; no stale current-file pointer remains.
