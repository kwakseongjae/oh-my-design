# Elastic UI migration log

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9** (2026-08-26 — includes A5). The dispatching prompt named v9 and the file header reads `v9 · 2026-08-26`; v9 is what was read and applied.

Source: `web/references/elastic/DESIGN.md` (legacy, omd 0.1) — **not modified**.
Canonical siblings read: `web/references/elastic/.verification.md`, `web/references/elastic/_research.md`.
Destination: `docs/design-md-weight/migrated/elastic/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/elastic/provenance.md`
Date: 2026-08-26
Worker: Claude Opus 5 T2 (host subagent lane)
Portable Core: `scripts/design-md-core.cjs` `inspectDesignMd` reports `format: core-v2`, `level: portable-core`, `structurally_valid: true`, `portable_core: true`, `reasons: []`, all thirteen checks pass, and each of the seven claim markers appears exactly once. No `[FILL IN]` in the portable body (the source carries none either).
Gate: `node migrate-reference.mjs --brand elastic --gate-only` → PASS, problems `[]`.
Migrated DESIGN SHA-256: `3b1a2cd8dcf57815ce056d0d0d8a28d9badb545eb4e9685f1211762709de9e8a` (updated by the F3 audit pass; pre-audit `f3f1610be016a3af2695333d7ee1a9a50efdce2c3bfcb84eb605c73311719377`)
Source SHA-256 before and after this run: `4aa67cc6729e652561b0e2c5a72dbfef2adb524190140395d9ba30d90d06b384` (unchanged).

Every row below was grep-checked against the actual output files before it was written. A value that landed in two files has both destinations recorded (E2a).

## Section dispositions

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity `id`, `country`, `category` | 분리 → provenance | Identity table. Portable file carries no frontmatter. |
| YAML `name: Elastic UI` | 이중 목적지 → H1 + provenance | H1 is `# Elastic UI Design System`; the same name is the provenance identity row. |
| YAML `homepage: https://eui.elastic.co/` | 이중 목적지 → Experience Scope + Primary tasks + provenance | Portable Scope and the first primary task both name the URL; provenance repeats it as identity, surface `home`, source `eui-home-live`, and Tier 1. |
| YAML `primary_color: "#0b64dd"` | 이중 목적지 → Foundations + Experience + provenance | Portable: Distinctive traits, Foundations **Action**, Principle 4, application rule 3. Provenance: identity row and exact token record. |
| YAML `logo` (`type: favicon`, Google s2 slug) | 분리 → provenance (URL) + 옮김 → Typography & Assets (URL 없는 경계 문장) | The exact slug appears only in the provenance identity row. Portable Assets carries the boundary — third-party favicon-service capture, catalog identity record, not an Elastic-distributed brand asset — with adjacent B2a and without the URL. |
| YAML `verified`, `omd` | 분리 → provenance | Freshness table and identity table. Process metadata stays out of the portable top matter. |
| YAML `verification_v2` schema / checked / surfaces / sources / conflicts / claims | 분리 → provenance | Verification v2 tables: schema `2`, checked `2026-07-13`, three surfaces with their `kind` values, eight sources with their `kind` values, `conflicts: []`, and every claim path with its anchor. |
| YAML `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Identity table (A1c — ledger metadata is a value; none dropped). |
| YAML `tokens.note` | 이중 목적지 → Experience Scope + Typography & Assets + provenance | Provenance quotes the note verbatim. Portable Scope carries the UI-token limit and the corporate-history / product-brand-writing / EUI-documentation half of the boundary in prose. The declared-only-font half is not in Scope — grep confirms it lands in Typography & Assets, in the five-way evidence split and its `Declared-only` row (“it is not a UI-family token here”). |
| YAML `tokens.colors` (7 values) | 이중 목적지 → Foundations Semantic color + provenance exact token record | All seven hexes survive in both files. No role merge: `docs-sidebar-category.fg` stays the component's own field and is not collapsed into general Foreground (A4). |
| YAML `tokens.typography.family.ui: Inter` | 이중 목적지 → Typography & Assets + provenance | Portable Family/hierarchy rows; provenance token record plus the claim path with its `computed-style-and-official-token-doc` method. |
| YAML `tokens.typography.body` / `heading` / `control` | 이중 목적지 → Typography & Assets 표 + provenance | Sizes/weights/line heights appear as `px` in the portable hierarchy table and as the source's unitless numbers in the provenance token record; the three `use:` strings are quoted verbatim in provenance. No unitless ratio line-height exists in this source, so A1a required no conversion. |
| YAML `tokens.spacing` (xs 4, sm 6, md 8, lg 12, xl 16, xxl 24) | 이중 목적지 → Foundations Spacing + Layout & Platforms + provenance | The six values recur in Foundations and in the Layout rhythm sentence; the named xs–xxl mapping is preserved in the provenance token record. |
| YAML `tokens.rounded.control: 4` | 이중 목적지 → Foundations Shape + provenance | Portable Shape lists Control 4px; provenance records the raw `4`. |
| YAML `tokens.components.docs-sidebar-category` | 이중 목적지 → Components & States + provenance | Portable Sidebar Category Row keeps `type: listItem` as **Primitive type** (A1b), `transparent` background, `#1d2a3e` text, 0px radius, `0px` padding, `14px / 500 / 16px / Inter`, and the source `use:` sentence. Provenance keeps the full raw record and the seven claim paths. |
| §1 Visual Theme & Atmosphere — opening definition | 옮김 → Experience Scope | Framework definition sentence carried verbatim. |
| §1 — "feel deliberately operational" reading, "framework-level expression" | 옮김 → Experience Scope, 한정 부착 | Rewritten as a qualified derived reading; every descriptor (white surfaces, dense blue-gray type, 4px control geometry, blue action color, maintainable application chrome) survives. |
| §1 — 2010 / 2012 / 2015 history, design-writing and Borealis mentions | 옮김 → Experience Scope | Consolidated with the fuller §11 wording, which is carried verbatim. |
| §1 Key characteristics (5 bullets) | 옮김 → Experience Distinctive traits | Verbatim. |
| §2 Selector-backed public EUI colors (7 roles) | 옮김 → Foundations Semantic color | Verbatim role lines with their surface descriptions; the role labels carry an adjacent B2a qualifier. |
| §2 Brand boundary | 옮김 → Foundations Semantic color | Verbatim, plus an adjacent B2a qualifier on the evidence-domain reading. |
| §3 Evidence classes table (5 rows) | 옮김 → Typography & Assets | Verbatim table, with an adjacent B2a qualifier on the classification itself. |
| §3 Captured hierarchy table (3 rows) | 옮김 → Typography & Assets | Verbatim. `20.0004px` / `24.0002px` / `450` all survive in both output files. |
| §3 license paragraph | 이중 목적지 → Typography & Assets Licensing + provenance | Portable keeps the Elastic License 2.0 / SSPL v1 statement and the "not an Inter font license" boundary with an adjacent B2a qualifier; provenance holds the two license URLs and the `_research.md` SSPL row. |
| §4 Sidebar Category Row field list | 옮김 → Components & States | Verbatim fields; selector kept inline in the `Use:` line and repeated in the provenance selector table (E2a). |
| §4 State boundary | 옮김 → Components & States Evidence boundary | `interactionCount: 0`, the retention reason, the unpublished hover/focus/pressed/active/disabled/transition list, and the "honest component set" toggle sentence are carried verbatim, with an adjacent B2a qualifier on the causal readings. One word differs from the source and only one: the deictic `above` → `below`, because the row now follows this paragraph instead of preceding it. |
| §4 component kind | 옮김 → Components & States, C4 처리 | The source promotes `listItem` and explicitly refuses button semantics, and establishes no interactive control role. Per C4 no interactive kind and no canonical state-applicability map is asserted; the question is left open. This is recorded as a decision, not an omission. |
| Footer **Verified** / Tier 1 / Tier 2 / **Conflicts unresolved: none** | 분리 → provenance | Freshness table, Tier 1 list, Tier 2 attempt list with the exact internal-error outcome, and the conflict statement (`[]` structured, `none` in the canonical footer). The three Tier 1 route URLs are also dual-destination — they appear in the portable Scope and Primary tasks. |
| §5 Layout Principles | 이중 목적지 → Layout & Platforms + Foundations Spacing | Portable Layout keeps the rhythm sentence, the 14px docs-text / 20.0004px card-title contrast, and the no-marketing-grid / no-authenticated-layout / no-responsive-container non-inference verbatim; the spacing set is also in Foundations. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Verbatim, plus an adjacent B2a qualifier on the depth-method and no-shadow-token readings. |
| §7 Do's (4) | 옮김 → Experience Principles (application rules) | Verbatim bullets under a complete B2a qualifier. |
| §7 Don'ts (4) | 옮김 → Experience Avoid | Verbatim bullets, apostrophes included, under a complete B2a qualifier. Don't #1 is also echoed in Typography & Assets (marketing-logo colors and artwork are not EUI component facts) — dual destination. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `1440×900` and the no-breakpoint / no-mobile-navigation / no-touch-target / no-responsive-state sentence are carried verbatim in the portable body only; provenance does not repeat them. |
| §9 Agent Prompt Guide — recipe sentence | 삭제 | Tool-facing recipe. Each value it names already exists at a semantic destination, verified by grep: `#ffffff` and `#1d2a3e` in Foundations Semantic color, Inter and the 14px body/control sizes in the Typography hierarchy table, `#0b64dd` in Foundations Action, `#cad3e2` in Foundations Hairline, 4px control corners in Foundations Shape, and the sidebar row's flatness in Foundations Elevation with its `14px / 500 / 16px / Inter` figures in the Components field list. No slot-less delegation. |
| §9 — "Do not call this Elastic marketing, Kibana product UI, or an authenticated application surface; omit all unmeasured interactive and responsive behavior." | 옮김 → Experience Avoid | This sentence is the only place `Kibana` appears in the source (A3), so it moved rather than being deleted. `Kibana` also appears in Governance Named gaps as an out-of-scope surface. |
| §10 Voice & Tone — framing paragraph | 옮김 → Content & Locales | First two observation sentences verbatim; the "supports a direct, technical, and scope-aware tone" conclusion and the "not a claim about the full Elastic marketing voice" limit are carried under an adjacent B2a qualifier. |
| §10 Context / Supported direction table (3 rows) | 옮김 → Content & Locales | Verbatim; covered by the same adjacent qualifier. |
| §10 documentation framing examples | 옮김 → Content & Locales | “Setup,” “Styling your application,” and “Customizing the style tokens.” carried byte-for-byte, curly quotation marks and internal punctuation included (A5). Byte equality was verified by string comparison against the source, not by eye. |
| §11 Brand Narrative | 옮김 → Experience Scope | 2010 / 2012 / Apache Lucene / 2015 rename sentences verbatim; the 2019 design account sentence verbatim; the `EUI_THEME_BOREALIS` sentence and its "does not infer an unobserved Borealis token set" limit preserved. The narrative source URLs are provenance-only. |
| §11 — "EUI sits on the framework/documentation side of the ecosystem…" | 옮김 → Experience Scope | Verbatim; the positioning reading is named in the adjacent B2a qualifier. |
| §12 Principles (4, with UI implications) | 옮김 → Experience Principles | Verbatim, under the B2a-예문 qualifier naming both the items and their *UI implication* notes. |
| §13 Personas | 옮김 → Experience Audience | The source's own framing — "evidence-bounded stakeholder groups, not synthetic satisfaction claims" — and the three group descriptions are carried verbatim. There is no fictional biography, demographic, or satisfaction claim in the source, so none was dropped and none was re-hosted in provenance (D2). |
| §14 States | 옮김 → Components & States State record + Governance Named gaps | The whole §14 paragraph is preserved verbatim in the body (A2), em-dashes included. The absent-state list is repeated in Named gaps as unresolved values. |
| §15 Motion & Easing | 옮김 → Foundations Motion + Governance Named gaps | Both source sentences verbatim. B3: the portable body additionally states the promotion gate naming all five evidence kinds — transition property, animation name, duration, easing, and reduced-motion behavior — and the per-component computed-observation condition, with the note that official documentation of a single curve or duration does not satisfy it. This gate is not in the source; it is stated as this reconstruction's constraint and carries an adjacent B2a qualifier. |
| Canonical `.verification.md` | 분리·채택 → provenance | Packet path and scope (3 surfaces, coverage 93, 94 component variants, 0 interaction events), all seven raw samples with their selectors and `rgb()` values, the font resolution table (810 uses, 7 gstatic source URLs, Roboto Mono's 12 declared source URLs, fallback resolution), the component provenance rows (17 occurrences), the Tier 2 conflict matrix, and the reconciliation notes. Sibling SHA-256 recorded. |
| Canonical `_research.md` | 분리·채택 → provenance | Three additional sources the frontmatter does not list — the `v101.4.0` setup page, `SSPL-LICENSE.md`, and `celebrating-lucene` — plus their boundaries. Research SHA-256 recorded. |

## Deletions

| Deleted | Reason |
|---|---|
| §9 recipe sentence and its restatement of already-placed values | Tool-facing prompt wrapper. Every value it names was grep-confirmed at a semantic destination before deletion; the one sentence carrying unique vocabulary (`Kibana`, the authenticated-surface prohibition) was moved to Experience Avoid instead of deleted. |
| Legacy 15-section headings and YAML frontmatter | Core v2 emits seven anchored sections and forbids frontmatter in the visible file. |

Nothing else was dropped. No `[FILL IN]` exists in the source, so none was quoted or emitted, and no placeholder wrapper is held in the provenance omission ledger (E2b does not apply here).

## Required final passes

- **F1 (B2a scan).** The full body was re-read sentence by sentence and classified as brand-published fact / observation / editorial interpretation. Twenty interpretive or causal passages were found without adjacent complete qualification and were fixed in place: the ecosystem-positioning reading in Scope, the operational-character reading, the contract-boundary and evidence-domain split, the primary-task selection, the audience *needs* statements, the colour role labels, the brand-asset domain reading, the spacing rhythm, the shape locality, the elevation depth-method and no-shadow-token causality, the font evidence-class split, the Inter agreement condition, the software-versus-font licensing split, the logo-record classification, the component retention and toggle causality, the component kind judgment, the refusal to generalize the three static observations, the layout rhythm reading, the documentation-tone reading, and the out-of-scope placement in Named gaps. Each qualifier names both halves of the class: *derived editorial implementation inference from the verified surfaces* and *not Elastic-authored or a separately published UI specification*.
- **F2 (E2 collation).** Every row above was grep-checked across `DESIGN.md` and `provenance.md` before it was written, not recalled. Fifteen values were confirmed dual-destination and are recorded with both destinations. Values confirmed provenance-only: Tier 1/Tier 2 lists, conflict status, claim anchors, capture selectors and raw `rgb()` samples, packet counts (coverage 93, 94 variants, 17 occurrences), the logo URL, `reconciled`, `components_harvested`, and the three extra research sources. Values confirmed portable-only: `1440×900`, `Kibana`, and the three documentation framing strings. The B3 compliance claim above is written only because the body actually carries all five evidence kinds and the per-component condition (E2c) — verified by reading the Motion paragraph, not by assuming it.
- **E3.** No gate false positive was encountered. No hex, px value, URL, selector, count, quoted string, or state label was reformatted, spaced, or reworded to change gate behaviour.

## Rule-specific notes

- **A5.** The source's Latin brand-published strings are the three EUI documentation framing labels, `euiTheme.font.family`, `EUI_THEME_BOREALIS`, `Elastic License 2.0`, `SSPL v1`, and the primitive type `listItem`. All are carried byte-for-byte; the three framing labels were verified by exact string comparison. The source contains no non-Latin copy, so the mechanical `copy-loss` check had nothing to test and this was checked by hand.
- **C1 / C2 / C4.** Non-observation is nowhere used as a `not-applicable` reason, and no applicability was invented in the other direction either. The single declared component has no interactive-kind evidence, so C4 applies: kind and applicability map are omitted rather than decided.
- **C3.** State coverage is explicitly not claimed complete.
- **D1 / D1a.** Named gaps lists only domains the source itself establishes as existing and unresolved: the sidebar row's interaction treatments, the §14 absent-state list, the toggle token, the §15 motion values, the §6 shadow/elevation scale, and the §8 responsive set. Elastic marketing, Kibana product UI, and authenticated Elastic-product surfaces are named as out-of-scope surfaces rather than listed as unresolved values. A locale-coverage sentence drafted for Content & Locales was removed before submission because the source establishes no locale domain at all.
- **D2.** No fictional persona exists in the source; nothing was promoted and nothing was re-hosted in provenance.
- **E1.** The portable body contains no migration vocabulary — no rulebook clause identifiers, wave numbers, catalog concepts, or legacy section numbers. Authority, evidence class, and boundary limiters are what remain in the body; ledgers, freshness, and proof are in provenance.


### F2 정정 (2026-08-26, 의미 검토 반영)

위 F2 요약 문단의 두 주장이 실측으로 반증된다. F3 감사 수정이 본문·provenance를 바꾸면서
F2 목록을 함께 갱신하지 않아 생긴 불일치다.

- `Kibana`는 **portable-only가 아니다** — `DESIGN.md` 2회, `provenance.md:177`("Kibana
  product UI") 1회. 실제 처분은 portable Avoid + Named gaps + provenance Derived scope의
  **삼중 목적지**이며 §9 행과 함께 그렇게 읽어야 한다.
- capture selectors는 **provenance-only가 아니다** — `surface-2::li`가 `DESIGN.md:167`에
  있고, 같은 로그의 §4 행이 스스로 이중 목적지라고 적는다(로그 내부 자기모순이었다).
  정확한 표현은 "capture selectors(`surface-2::li` 제외) and raw `rgb()` samples"다.

구조적 교훈: **F3가 본문을 고치면 F2의 목적지 목록이 낡는다.** 감사자는 자기 수정의
로그 파급을 보지 않는다 — 웨이브 4가 "같은 저자는 자기 문장을 못 본다"로 F3를 낳았듯,
여기서는 감사 후 F2 재대조 절차가 필요하다(v10 후보).
