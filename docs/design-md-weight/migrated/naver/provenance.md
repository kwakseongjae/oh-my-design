# Naver provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/naver/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | naver |
| name | Naver |
| country | KR |
| category | consumer-tech |
| homepage | https://www.naver.com |
| primary_color | `#03c75a` |
| logo | simpleicons slug `naver` |
| omd format (source) | 0.1 |
| ds.name | NAVER Brand Resource |
| ds.url | https://www.navercorp.com/company/brandGuide |
| ds.type | brand |
| ds.description | Official NAVER logo, color, and usage guidance; it is not a public product design system. |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |

Catalog logo metadata is Simple Icons identity (`naver`), not a captured first-party mark. Dual destination (E2a): this identity ledger and portable Typography & Assets boundary sentence. It is not a captured first-party mark file.

Catalog `primary_color` `#03c75a` is dual destination (E2a): this identity ledger and portable Experience / Foundations / Assets identity hex (`#03C75A`). Not provenance-only.

YAML `ds.name` is NAVER Brand Resource (`https://www.navercorp.com/company/brandGuide`). YAML `ds.type` is `brand`. The source separately labels portal/search product UI and the corporate brand-resource page. YAML `ds.description`: Official NAVER logo, color, and usage guidance; it is not a public product design system.

Token note from source: Portal/search and NAVER Corp brand surfaces are separate domains. System is the live portal/search family; InterVariable is loaded on the corporate brand page. Declared-only Naver fonts are not promoted.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-11 (omd:migrate) |
| verification_v2.checked | 2026-07-11 |
| surfaces inspected | 2026-07-11 |
| sources captured | 2026-07-11 |
| tokens.extracted | 2026-07-11 |

Footer metadata from the source: `Verified: 2026-07-11 (omd:migrate)`. The `(omd:migrate)` mark is preserved here as verification-method metadata (A1c).

Conflicts unresolved: none.
Migration depth (source footer): Apple-tier evidence graph; visual smoke pending.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| portal-home | product | https://www.naver.com/ | 2026-07-11 |
| search-results | product | https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8 | 2026-07-11 |
| corporate-brand | brand | https://www.navercorp.com/company/brandGuide | 2026-07-11 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| portal-live | product-surface | https://www.naver.com/ | 2026-07-11 |
| search-live | product-surface | https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8 | 2026-07-11 |
| brand-live | product-surface | https://www.navercorp.com/company/brandGuide | 2026-07-11 |
| brand-guide | official-doc | https://www.navercorp.com/company/brandGuide | 2026-07-11 |
| company-about | official-doc | https://www.navercorp.com/company/about | 2026-07-11 |

### Tier 1

- https://www.naver.com/
- https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8
- https://www.navercorp.com/company/brandGuide
- https://www.navercorp.com/company/about

### Tier 2 (no usable record)

- https://getdesign.md/naver (no importable record in available path)
- https://styles.refero.design/?q=naver (no importable result in available path)

Tier 2 status: unavailable; no Tier 2 value promoted.

### Narrative (not interface tokens)

- Official company about: https://www.navercorp.com/company/about
- Official brand guide: https://www.navercorp.com/company/brandGuide
- Corporate InterVariable file: https://www.navercorp.com/font/InterVariable.woff2

## Claim ledger

Claims use YAML anchors from the source: `brand_doc` = corporate-brand / brand-guide / official-doc / 2026-07-11; `portal_style` = portal-home / portal-live / computed-style / 2026-07-11; `search_style` = search-results / search-live / computed-style / 2026-07-11; `brand_style` = corporate-brand / brand-live / computed-style / 2026-07-11; `portal_search` = portal-home / portal-live / computed-style / 2026-07-11; `serp_component` = search-results / search-live / computed-style / 2026-07-11; `corporate_component` = corporate-brand / brand-live / computed-style / 2026-07-11.

| claim | surface |
|---|---|
| tokens.colors.brand | corporate-brand (`brand_doc`) |
| tokens.colors.canvas | portal-home |
| tokens.colors.portal-ink | portal-home |
| tokens.colors.search-ink | search-results |
| tokens.colors.search-link | search-results |
| tokens.colors.search-muted | search-results |
| tokens.colors.hairline | search-results |
| tokens.colors.corporate-ink | corporate-brand |
| tokens.colors.corporate-muted | corporate-brand |
| tokens.typography.family.portal | portal-home |
| tokens.typography.family.corporate | corporate-brand |
| tokens.typography.portal-search.size / weight / lineHeight / tracking | portal-home |
| tokens.typography.portal-ui.size / weight / lineHeight / tracking | portal-home |
| tokens.typography.search-tab.size / weight / lineHeight / tracking | search-results |
| tokens.typography.search-title.size / weight / lineHeight / tracking | search-results |
| tokens.typography.corporate-tab.size / weight / lineHeight / tracking | corporate-brand |
| tokens.spacing.xs / sm | search-results / portal-home |
| tokens.spacing.md / lg / xl | search-results / portal-home / search-results |
| tokens.rounded.sm / full | portal-home |
| tokens.rounded.md / lg | search-results |
| tokens.components.search-input.* | portal-home |
| tokens.components.search-submit.* | portal-home |
| tokens.components.serp-tab.* | search-results |
| tokens.components.filter-chip.* | search-results |
| tokens.components.result-card.* | search-results |
| tokens.components.paging-button.* | portal-home |
| tokens.components.corporate-tab.* | corporate-brand |
| tokens.components.portal-menu.* | portal-home |

## Copy verification URLs

| Sample | URL |
|---|---|
| “검색하기” | https://www.navercorp.com/company/brandGuide |
| “브랜드 리소스” | https://www.navercorp.com/company/brandGuide |
| “기술과 서비스로 세상의 모든 가능성을 연결합니다” | https://www.navercorp.com/company/about |

## Placeholder omission ledger

Source placeholders are omitted from the portable file. Quoted here as the omission record, not as values to fill:

- §14: `[FILL IN — no safe representative live evidence captured in this run.]`
- §15: `[FILL IN — official product motion tokens were not found in the inspected public sources.]`

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- YAML `ds.type`: `brand`
- Footer `Verified: 2026-07-11 (omd:migrate)` keeps the `(omd:migrate)` mark in this freshness ledger (A1c).
- Font evidence class for minority `나눔고딕` on four search elements with no matching loaded FontFace is `Unresolved claim` (captured but uncorroborated), not `Outside this capture`.
- Uncaptured empty/loading/error/success/disabled treatments are omitted. Capture absence is not a `not-applicable` reason. Applicability follows control meaning. State coverage is not claimed complete.
- Generic `focus` on Search Input is an additional observed named state, not a `focus-visible` treatment. No `focus-visible` color is assigned.
- Search Submit and Paging Button record hover/pressed not retained; §14 also records hover/pressed on search tabs and utility actions. Both statements are preserved.
- Filter Chip (`type: badge`) and Result Card (`type: card`) have no interactive-kind evidence; kind and a state-applicability map were omitted (C4).
- Search Input loading/error/success follow query-entry meaning. Search Submit loading/error/success applicability is omitted at the field boundary: source names the control only as Portal AI/search submit; exact selector/label/request/outcome is unresolved, so those three fields stay omitted rather than closed as a query-or-navigate destination (C2 omission, not a complete C2 close). Vertical Tab and Section Tab loading/error/success follow selection meaning. Paging Button loading/error/success follow carousel previous/next meaning. Overflow Menu loading/error/success follow option-selection meaning. Identified-role maps are role judgments, not primitive-type bulk assignment (C2).
- Checked/unchecked was captured for portal display controls and a search switch. Those are not harvested components and were not invented here.
- Source §13 states NAVER has not published validated product personas. The three usage contexts were absorbed as primary-tasks from the inspected surfaces. No fictional demographic segments were recorded here and none were moved to a persona sidecar (D2).
- Official company timeline and brand-guide green meanings are narrative context in the portable file, not inferred unpublished principles.
- No canonical motion duration or easing is promoted. Any exact animation value remains a local extension until a per-component computed observation records transition properties, animation name, duration, easing, and reduced-motion behavior.
- InterVariable URL is a portable Typography & Assets loaded-source fact and is also listed in this ledger (E2a dual destination).
- Catalog Simple Icons logo is dual provenance identity + portable Typography & Assets boundary sentence; it is not a captured first-party mark (E2a).
- Catalog `primary_color` `#03c75a` is dual provenance identity + portable Experience / Foundations / Assets identity hex (`#03C75A`) (E2a).
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not NAVER-authored or a separately published UI specification`): Scope connective-tissue / surface-optimization / surface-attachment; Scope product-chrome atmosphere; Scope sourced-context; Scope useful-tension; Audience tasks-only / no-invented-biographies / validate-before-personas; Distinctive trait readings (dense composition, live-computed controls, separate-domain measurements); numbered Principles (three items + UI implications); capture-bound application list; Avoid remaining Don'ts (native-app, declared-only fonts, surface-claim, invent-product-DS, older-hex, unmerged Search Input text — first-party logo Don’t is outside this set); Semantic color identity-use; Semantic color unmerged-role and older-hex; Spacing scale and hierarchy; Shape local-geometry and scale; Elevation use-priority; Motion-use; Font evidence specimen-availability / declaration-is-not-visible-use / D2Coding-not-UI-use; Assets identity-asset / catalog-logo / InterVariable-not-system-stack; Capture-record omitted-rather-than-synthesized; Layout compact-composition and density; Layout narrow-layout; Content voice and application guidance; Content samples-not-complete-guide / no-synthetic-voice (B2/B2a). Governance reconstruction sentence is not a substitute for those adjacent limiters. There is no reconstruction-boundary exemption.
