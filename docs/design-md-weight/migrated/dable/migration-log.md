# Dable migration log

Ruleset: `MIGRATION_RULEBOOK.md` v9 (2026-08-26) — re-audited under A5 (brand-published strings move as bytes). Original migration ran under v8, which had no A5 clause and no `copy-loss` gate.

Source: `web/references/dable/DESIGN.md`
Destination: `docs/design-md-weight/migrated/dable/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/dable/provenance.md`
Date: 2026-08-25
Worker: GPT-5.6-sol T2-1 Wave 18
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd → `format: core-v2` with all seven `coreSectionIds`; `test-v2/tools/migrate-reference.mjs --gate-only`: PASS, problems `[]` — re-measured 2026-08-26 after the A5 restoration)
DESIGN SHA-256: `f6c4c650b692de68f448bf9c8b3799f5837f750119ac145f669dbd9e3db9b760` (2026-08-26, after A5 restoration; was `113348a6665dad987e079f9ee1029b4e3924591d5bc65f1d48acf256ceab9450`)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity | 분리 → provenance; name/display name 이중 목적지 → H1/Scope | Portable frontmatter removed; exact identity retained. |
| YAML GitHub logo | 이중 목적지 → Typography & Assets + provenance | Portable file states brand-owned catalog identity boundary; provenance keeps slug and the full selection/rejection proof. |
| YAML verified/added/omd/token extraction/harvest metadata | 분리 → provenance | Freshness and process metadata remain outside portable top matter. |
| YAML note | 이중 목적지 → Scope/Foundations/Typography + provenance | Blue/mint, flat/pill, and Poppins/Open Sans boundaries remain standalone and exact. |
| YAML colors | 옮김 → Foundations; exact ledger → provenance | All 16 role/value fields preserved without hue-role merging. |
| YAML typography | 옮김 → Typography & Assets; exact ledger → provenance | All nine role metrics and unitless `1.0`, `1.5`, `3.0` forms retained. |
| YAML spacing/rounded/shadow | 옮김 → Foundations; exact ledger → provenance | Every value preserved; 50 and 9999 roles stay distinct. |
| YAML components | 옮김 → Components & States; exact ledger → provenance | Four buttons, tab, and two card primitives plus every field retained. C4 omits kind/maps for unverified compact-pill primitive. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience/Foundations/Typography/Layout | Surface scope and verified traits retained; presentation/adtech interpretations carry complete adjacent B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations | Every color and semantic boundary retained. |
| §3 Typography Rules | 옮김 → Typography & Assets | Full hierarchy and role split retained with unitless ratios. |
| §4 Component Stylings | 옮김 → Components & States; sibling-only raw differences → provenance | Buttons/nav/cards/footer/compact pill retained. YAML 17×44 and sidecar advertising 17×36 are not merged; sidecar-only tuple remains provenance. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations | Band/pill layout, spacing, exact desktop control sizes, and presentation grouping retained. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | `none` and color-band separation retained with captured-surface boundary. |
| §7 Do’s and Don’ts | 옮김 → Experience derived principles/Avoid | All font/color/pill/depth rules retained under complete adjacent B2a. |
| §8 responsive values | 분리 → provenance unresolved ledger; desktop measurements → Layout & Platforms | `<640`, `640–1024`, `1024–1440`, and collapse recipes lack multi-viewport proof; exact claims survive outside prescriptive Core. |
| §9 Agent Prompt Guide | 고유 값은 Core 슬롯으로 옮김; prompt/example wrapper 삭제 | All unique values are present in Foundations, Typography, Components, or Layout. No slotless delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales | Hero/product/CTA/proof patterns, live samples, and forbidden register retained. |
| §11 Brand Narrative | 옮김 → Experience Scope/Audience + Content; evidence caveat → provenance | Founding, mission, products, 500M+/3,000+/10+ APAC context retained as narrative, never token proof. The source §11 editorial refusals “banner-heavy chrome” and “dark-pattern urgency” (`web/references/dable/DESIGN.md:342`) are distributed into the Content & Locales forbidden register (`DESIGN.md:343`). |
| §12 Principles | 옮김 → Experience derived principles | Five principles preserved under complete adjacent B2a, not published-doctrine promotion. |
| §13 Personas | source-backed groups → Experience; fictional biographies 삭제 | D2 forbids the three invented names/biographies from portable and provenance. |
| §14 States | 옮김 → Components & States legacy derived guidance | Full table meaning/values are preserved in the legacy-guidance table with adjacent complete derived-editorial classification. They do not supply the separately derived per-component applicability maps, and no measured-state or coverage claim is made. |
| §15 motion | exact values 분리 → provenance unresolved ledger; B3 → Foundations Motion | Unproven durations/curves/rules remain losslessly recorded but not Dable tokens; portable B3 contains all five evidence kinds. |
| Footer/source comment | 분리 → provenance | Tier sources, proof method, narrative/persona/interpretation disclosures, and conflicts retained. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof | Selected raw samples and frequency counts, the 17×36 variant, logo decision, and Tier 2 dispositions are retained, with a pointer to the canonical full sibling Proof; sibling-only values do not become portable inventions. |

## A5 copy restoration (2026-08-26, rulebook v9)

The v8 migration carried every token but dropped three brand-published Korean strings: two were simply omitted, and the mission line was replaced by its English reading at `DESIGN.md:13`. Wave 18 passed both lanes because neither lane compared published copy byte-for-byte. Each row below was located by grep in the source before it was written (F2).

| Legacy string (bytes) | Legacy location | Disposition | Destination / reason |
|---|---|---|---|
| `데이블 네이티브 애드란?` | `web/references/dable/DESIGN.md:40` — YAML typography `heading.use` observed section title | 복원 → portable | `DESIGN.md:136`, §3 Type roles “Section heading” row `Use` cell, byte-exact with the English role name beside it, not replacing it. Row metrics (26 / 400 / unitless `1.0`) untouched. |
| `사용자와 미디어, 콘텐츠` / `사용자와 미디어, 콘텐츠를 연결하자` | `web/references/dable/DESIGN.md:319` (§10 voice), `:338` (§11 narrative), `:418` (source comment) | 복원 → 이중 목적지 (E2a) | `DESIGN.md:341`, §6 Content & Locales as a published voice sample; and `DESIGN.md:13`, §1 Scope, where the v8 text had shipped only the English “the mission to connect users, media, and content”. Both keep the Korean as published with the source’s own English reading beside it. |
| `상품소개서 다운로드` | `web/references/dable/DESIGN.md:406` — §15 source comment, live-inspect record of the `#0071ce` advertiser-page CTAs | 복원 → 이중 목적지 (E2a) | `provenance.md:81`, Raw proof samples, alongside the other two blue labels from the same record; and `DESIGN.md:171`, §4 Primary blue CTA as a separate bullet. The existing `Use` bullet at `DESIGN.md:170` is left byte-identical: this label is a live-inspect record, not part of the legacy component `use` field, and the boundary is stated inline. No component geometry, table value, or state applicability row was touched. |

### E3 — two `copy-loss` flags reported as gate false positives, not evaded

`copy-loss` also flagged `자세히 보기, 광고계정 생성하기, 시작하기` and `서비스 문의하기, 광고주 지원`. Measured, not assumed: every one of those five labels is present byte-exact in the portable doc — `DESIGN.md:170` and `:339` for the first three, `DESIGN.md:213` for the other two.

Neither run is a brand-published string. Both are legacy authoring artifacts: the source comma-joins several separate CTA labels inside one `use:` description (`web/references/dable/DESIGN.md:52`, `:54`), and the gate’s `NONLATIN_RUN` treats `,` and space as run-internal, so it extracts the joined list as if it were one published string. Core v2 quotes each label individually, which breaks the joined run while losing no bytes. The A5 unit here is the label, and every label survives.

Per E3 the notation was not distorted to clear the flag — no quote style was changed and no label was re-joined into a fake published string. The two runs are recorded verbatim in this ledger, which is the gate’s documented path for a run whose disposition is accounted for. Suggested gate fix: split an extracted run on `, ` before the presence test, or require the run to be present as a whole only when the legacy quotation is a single label.

## Required final passes

- F1 B2a scan: completed across Scope, principles, avoidances, state guidance, foundations, layout, content, components, and governance; derived claims have adjacent complete evidence-class text.
- F2 E2 scan: re-completed after the Opus 5 ledger revision against the source, portable DESIGN.md, and provenance.md via exhaustive grep; the §11 “banner-heavy chrome” / “dark-pattern urgency” disposition resolves to the Content & Locales forbidden register at `DESIGN.md:343`, and all dual identity/note/logo plus responsive/motion/state destinations match the current files.
- E3: no token, hex, curve, URL, or wording is distorted for gate behavior. Two `copy-loss` false positives are reported above rather than evaded.

Revision (2026-08-25, Opus 5): recorded source §11 (`web/references/dable/DESIGN.md:342`) at the forbidden register (`DESIGN.md:340`) and re-grepped all 25 ledger destinations; no stale current-file pointer remains.

Revision (2026-08-26, Opus 5, rulebook v9 A5): restored three brand-published Korean strings and reported two gate false positives, per the A5 section above. Re-grepped every current-file pointer in this ledger against the edited files; the forbidden-register pointer had drifted from `DESIGN.md:340` to `DESIGN.md:343` and is updated in the §11 row and in the F2 line. The legacy-side pointer `web/references/dable/DESIGN.md:342` was re-verified unchanged, and the source file was not modified. No token value, component table value, state applicability judgment, or section structure was changed.
