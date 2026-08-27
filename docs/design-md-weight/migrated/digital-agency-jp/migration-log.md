# Digital Agency Design System (DADS) migration log

Ruleset: `MIGRATION_RULEBOOK.md` v8 (2026-08-25)

Source: `web/references/digital-agency-jp/DESIGN.md`
Destination: `docs/design-md-weight/migrated/digital-agency-jp/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/digital-agency-jp/provenance.md`
Date: 2026-08-26
Worker: Opus 5 T2 migration worker
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd: `portable_core: true`, reasons `[]`; `test-v2/tools/migrate-reference.mjs --gate-only`: PASS, problems `[]`)
DESIGN SHA-256: `6fec8ab1aee6be2c551bb165c46015dcc1fcf7c7f9815043ba227c1d878b1016` (post-wave-20-revision; post-F3-audit it was `77f88e2b283c50d96ec1cad7649b686eb08e4a5a5934f9960598af894b530cc9`; as delivered by the migration worker it was `d735571759930239a450e190e49bc1f8fd81ebaf6486a4919ec94b52290a32cd` — the audit's three qualification edits are listed in `audit-log.md`, the revision's one body edit under "웨이브 20 개정" below)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `country`, `category`, `homepage`, `primary_color`) | 분리 → provenance Identity; `name` 이중 목적지 → provenance Identity + portable H1; `homepage` 이중 목적지 → provenance Identity + Experience Scope; `primary_color` 이중 목적지 → provenance Identity + Foundations `primary` row | No portable frontmatter. Every exact identity value is retained in the ledger; the product name is also the visible title, the homepage host is named in the Scope capture list (`design.digital.go.jp/`), and `#0017c1` also stands as the Foundations `primary` token value (E2a). |
| YAML `logo` (`type: favicon`, Google s2 slug) | 분리 → provenance Identity; asset-authority boundary → Typography & Assets | The exact third-party favicon-service URL stays in provenance. The portable Assets bullet states it is an identity pointer only and is not promoted as an official distributed logo asset. |
| YAML `verified` / `added` / `omd` / `tokens.source` / `tokens.extracted` / `components_harvested` | 분리 → provenance Identity | Freshness and extraction metadata are barred from the portable top matter by Core §3; all values are retained in the ledger, including `ds.type: system` (A1c). |
| YAML `ds.*` (`name`, `url`, `type`, `description`) | 분리 → provenance Identity; DS existence and CC BY 4.0 publication → Experience Scope + Typography & Assets | The verbatim `ds.description` string stays in the ledger. The fact that DADS is an officially published, CC BY 4.0 government design system carrying Figma and HTML/React resources is a first-party fact and stays portable. |
| YAML `tokens.note` | 이중 목적지 → provenance ("Token note from source") + Foundations Semantic color / Experience Scope | The two-step blue characterization, `rgb()` pairs, surface greys, and confirmed semantic pair are preserved in both places. The ledger keeps the note in substance rather than byte-exact — it reads `primary is` for `primary =`, spaces the `#f2f2f2` / `#e6e6e6` pair, and spells `colour` for `color` — and every value the note carries is byte-exact (E2c). |
| YAML `tokens.colors` (17 entries) | 옮김 → Foundations Semantic color table; exact ledger → provenance Token record | Every token key and value is preserved, key by key, alongside the §2 role name and use. |
| YAML `tokens.typography` (family + 6 roles) | 옮김 → Typography & Assets Type roles; exact ledger → provenance Token record | Token keys `display` / `heading` / `body-lg` / `body` / `nav` / `button` and their `use` strings are preserved. Unitless line heights survive as ratios `1.50` and `1.70` (A1a), with the captured 48px and 28.9px results shown beside them. |
| YAML `tokens.spacing` / `rounded` / `shadow` | 옮김 → Foundations Spacing / Shape / Elevation; exact ledger → provenance | All scale keys and values retained, including `full: 9999` rendered as 9999px in the shape and layout sections and `shadow.none`. |
| YAML `tokens.components` (8 entries) | 옮김 → Components & States; exact ledger → provenance Component token record | Each component keeps its source id and verified primitive type — button ×3, input, card, tab, badge ×2 (A1b) — plus every field: bg, fg, border, radius, height, padding, font, use, and the named `states` / `active` / `focus` strings. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits + Foundations + Typography & Assets | The two-surface scope, the eight key characteristics, and every value are retained. The civic-mission, two-step-blue, CJK-leading, and "design as public infrastructure" readings carry adjacent complete B2a qualification. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All 17 roles with their `rgb()` equivalents and stated uses retained. The "minimum AA-passing grey" characterization is kept and marked as a derived contrast reading, not a published threshold. |
| §3 Typography Rules | 옮김 → Typography & Assets | The full declared stack, all six hierarchy rows with px, rem, weight, and line-height forms, and the four type principles retained; the principles sit under an adjacent complete B2a qualifier, and the "mandated typeface" characterization is qualified in the Font-evidence block. |
| §4 Component Stylings | 옮김 → Components & States | All eight component records retained with source ids and primitive types. Core §4.4 applicability is judged from each control's role; no row uses observation absence as a `not-applicable` reason (C1), and no primitive kind is used to blanket-apply loading/error/success (C2). |
| §4 footer block (`Verified:`, Tier 1 sources, Tier 2 sources, `Conflicts unresolved: none`) | 분리 → provenance Sources and proof method + Conflict matrix | Freshness, both source URLs, both Tier 2 attempts, and the no-conflict finding are recorded in the ledger (E1). |
| §5 Layout Principles | 옮김 → Layout & Platforms; spacing/radius scales 이중 목적지 → Foundations | Base unit, full spacing scale, container and card-grid description, the left-rail docs layout, whitespace direction, and the three-step radius scale are all retained; the scales appear in both Foundations and Layout because both sections need them. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | The three-level table and the observed `box-shadow: none` finding retained verbatim in substance. The shadow-philosophy causal reading carries an adjacent complete B2a qualifier. |
| §7 Do's and Don'ts | Do's 옮김 → Foundations "Derived application rules"; Don'ts 옮김 → Experience Avoid | Brand rules stay in Experience/Foundations under adjacent complete B2a qualification. None of these Do/Don't rules was pushed into Governance; the only brand-specific content in Governance is the reconstruction's own authority boundary (DADS's CC BY 4.0 publication authority belongs to the Digital Agency and does not transfer). |
| §8 Responsive Behavior | breakpoints·collapse·cross-viewport claims 분리 → provenance unresolved ledger; measured control heights 옮김 → Layout & Platforms; image no-shadow claim 옮김 → Typography & Assets (Assets) | `<768px`, `768-1024px`, `>1024px`, the collapse sequence, the "16px radius across breakpoints" and "no shadow at any size" claims have no multi-viewport proof, so their exact bytes are kept outside the prescriptive contract. The 44px, 48px, 56px, and 48px-icon measurements are single-viewport observations and stay portable in Layout & Platforms. The image no-shadow half of the Image-behavior claim sits in Typography & Assets (Assets), not in Layout & Platforms, and is attributed there to the legacy record — the recorded `box-shadow: none` observations name the hero, header, navigation cards, and buttons, not images or diagrams. |
| §9 Agent Prompt Guide | 고유 값 없음 → 슬롯으로 이미 이관; prompt/example/iteration wrapper 삭제 | Verified by value-by-value comparison and recorded in provenance ("Tool-facing §9 material"): every colour, type step, radius, height, border, and the 2px active border in §9 already exists in Foundations, Typography & Assets, Components & States, or Layout & Platforms. The tool-facing prose is deleted with no skill or adapter delegation (A2). |
| §10 Voice & Tone | 옮김 → Content & Locales | The register description, all five context rows, the three verbatim JA site strings with their live-verification notes, and the forbidden register are retained. Byte-identical JA strings confirmed by grep against the source. |
| §11 Brand Narrative | 옮김 → Experience Scope + Audience + Typography & Assets Assets; 출처·성격 규정 → provenance | Establishment date, CC BY 4.0 publication, the Figma/HTML/React resources, and the β/version posture stay portable as first-party facts with their evidence class named. The refusal/embrace paragraph is preserved as a qualified editorial reading in Scope and Distinctive traits. |
| §12 Principles | 옮김 → Experience "Derived implementation principles" | All five principles and their UI implications retained under an adjacent complete B2a qualifier that also cites the source's own disclosure that readings of this kind are editorial. |
| §13 Personas | source-backed segments 옮김 → Experience Audience; 이름·나이·지역·전기 삭제; 네 번째 그룹 "service designers in national and local government bodies" 삭제 (D2) | D2: the source itself discloses these as fictional archetypes, so the named biographies are deleted and are not recopied into provenance. Portable Audience carries exactly the three segments the source's §13 preamble names as publicly observable (source `:362`) — government service teams, ministry developers, citizens. A fourth group, "service designers in national and local government bodies", was shipped by the migration worker and is **deleted under D2** in this revision: `service designer` occurs only in the §13 archetype 田中 美咲 (source `:366`), so the group promoted a fictional archetype's occupation — and "national" widened it past the archetype's local-government setting. D2 bars the promotion itself, so a B2a qualification does not cure it; the group and its justifying sentence are both gone from portable Audience. Recorded in provenance "Persona disposition". |
| §14 States | 옮김 → Components & States "Legacy derived state guidance" | All ten recipe rows are preserved with their values and conditions under an adjacent complete derived-editorial classification. They are explicitly not measured evidence and supply no treatment to the per-component applicability tables (A2, T1-3 constraint 4). |
| §15 Motion & Easing | exact durations·curves·rules 분리 → provenance unresolved ledger; B3 promotion condition → Foundations Motion | The three durations and three curves are byte-exact in the ledger. The legacy motion rules including the reduced-motion sentence are retained there in substance rather than byte-exact — re-punctuated into one semicolon-separated line, with two editorial asides ("consistent with an accessibility-first government system", "public infrastructure signals steadiness and predictability") dropped; that drop is a loss and is flagged for the A-family reviewer (E2c). None is promoted, because the proof holds computed static styles only and the source ledger attributes no origin to this table. The portable Foundations Motion rule names all five evidence kinds — transition properties, animation name, duration, easing, reduced-motion behavior — and the component-specific observation gate (B3 verified present in the body before this row was written). |
| Trailing HTML source comment (OmD v0.1 Sources) | 분리 → provenance Sources and proof method + Proof notes | The Tier 1 method and per-URL sample summary, the §10 verbatim-source statement, the §11 sourcing statement, the §13 fictional-persona disclosure, and the interpretive-claims disclosure are all retained in the ledger; the disclosures also drive the portable evidence-class qualifiers. |
| Sibling `web/references/digital-agency-jp/.verification.md` | 분리·채택 → provenance Raw live samples + Conflict matrix + Proof notes | Method, all 17 raw sample lines (13 element-level samples plus four frequency scans), the conflict matrix, the Tier 2 attempts, and the Proof Gate statement are retained. The sidecar-only values (~154px card height, computed `padding: 8px 0px` on the submit button) stay in the ledger and are not promoted to the portable body; the `A` element notation is cited in the ledger as the interactive-kind evidence used for the portable Navigation card. |

## Required final passes

- **F1 (B2a scan).** The whole body was re-read after drafting. Qualifiers were added or completed in four places as a result: the elevation paragraph now covers the "depth carried by tint/hairline" and "reaches for blue instead of elevation" readings as well as the accessibility-and-performance reading; the forbidden-register list carries the complete limitation rather than the short form; each of the six interactive components carries its own adjacent applicability qualifier; and the two non-interactive classifications carry theirs. Public-institution evidence classes are separated explicitly: agency-published facts and verbatim JA strings are labelled as such, live-computed observations are labelled as observations, and every causal or interpretive sentence carries "derived editorial implementation inference … not Digital Agency-authored or a separately published UI specification".
- **F2 (E2 contrast).** Every row above was checked by grep against the three output files before being written, not from memory. Dual destinations are recorded on both sides for `name`, `tokens.note`, the spacing and radius scales, and DADS's CC BY 4.0 publication fact. The B3 compliance claim in the §15 row was written only after confirming the full five-evidence-kind sentence exists in the portable Foundations Motion section (E2c).
- **E3.** No value, hex, curve, selector, URL, or line break was distorted to influence any gate. One wording change was made for a non-value reason and is disclosed here: the Foundations sentence "…is an explanation of the pair, not a quoted rule" was reworded to "…rather than a quoted Digital Agency statement" because `scripts/design-md-core-conformance.cjs`'s `explicitlyNegatesClaim('foundations', …)` heuristic read the literal string "not a quoted rule" as a declaration that no foundation rules exist. The change touches only my own qualifying prose and alters no source value or claim. A second placement was likewise checker-driven and is disclosed here: `governance_authority` compares the Authority claim body to the canonical sentence byte-for-byte (`design-md-core-conformance.cjs`, `authorityBody === expectedAuthority`), so the DADS-specific qualification could not live inside the claim block. It sits immediately after `claim-end` in the same Governance section — the two captured surfaces, the not-the-official-DADS-specification boundary, and the non-transfer of the Digital Agency's CC BY 4.0 publication authority — so the DADS-specific meaning is adjacent and intact, not dropped.
- **F3 (separate-session audit).** Run against Rulebook v9, B2a and E2 families only; results in `audit-log.md`. It found three unqualified editorial readings in the body (the hairline "primary separation device" role reading, the image-behavior "consistent with the flat system" reading, and the Audience "source-backed … only" evidence-class claim) and nine migration-log rows and three provenance corrections (twelve) worth of ledger inaccuracies, so the F1 and F2 claims above should be read as the worker's own record, not as verified completeness.

## 규칙집 버전 기록 (2026-08-26, 오케스트레이터)

이 이관은 **v8** 규칙집으로 수행됐다(위 기록 그대로가 사실이다). 작업 중 규칙집이
**v9**로 올라가며 A5(브랜드 발행 문자열 바이트 보존)와 게이트 `copy-loss` 검사가
신설됐다. 소급 재검증 결과 이 산출물은 A5 위반 **0건**이며, 정착 빌드
(`migrate-reference.mjs` SHA `3170bb7e…`, 자체테스트 10/10)에서 게이트 PASS다.
v8 표기를 v9로 고쳐 쓰지 않는다 — 어느 규칙집으로 만들었는지와 어느 규칙집으로
검증했는지는 다른 사실이고, 원장은 둘 다 보여야 한다.

## 웨이브 20 개정 (2026-08-26, 규칙집 v9)

의미 검토가 확정한 FAIL 3건을 반영했다. 토큰 값, 컴포넌트 표의 값, 상태 applicability
판정, 섹션 구조, 원본(`web/references/digital-agency-jp/`)은 손대지 않았다.

1. **D2 — Audience의 네 번째 그룹 삭제 (본문 값 편집).** 이관본은 "service designers in
   national and local government bodies"를 네 번째 이해관계자 그룹으로 실었다.
   `service designer`는 원본에서 §13 가상 아키타입 田中 美咲(원본 `:366`)에만 존재하고,
   §13 서문(원본 `:362`)은 관측 가능한 세그먼트를 government service teams / ministry
   developers / citizens **셋으로 명시 열거**한다. "national"은 아키타입의 local-government
   설정보다도 넓다. D2는 가상 페르소나의 **승격 자체**를 금지하므로 B2a식 한정으로
   치유되지 않는다(karrot §13 선례와 동형). 그룹과 그 정당화 문장을 함께 삭제하고 원본이
   명명한 3개 세그먼트만 남겼다. F3 감사(`audit-log.md` 항목 1)의 "left in place and flagged
   for D2 review" 처분과 항목 13이 comprises 목록에 넣은 "service-designer role
   generalization"은 이 개정으로 대체된다 — provenance "Persona disposition"과 §13 행이
   `deleted under D2`로 갱신됐고, comprises 목록에서 해당 항목이 빠졌다.
   본문 완전형 B2a 한정은 28 → 27개(삭제된 정당화 문장 1개분).

2. **E2 — F3 요약행의 자기 감사 결과 불일치.** "Required final passes"의 F3 항목이
   "six ledger inaccuracies"라고 적었으나 `audit-log.md`는 migration-log 9건(항목 4–12)과
   provenance 3건(항목 13–15), 합계 12건을 기록하고 헤더도 "(9 in `migration-log.md`)"다.
   "nine migration-log rows and three provenance corrections (twelve)"로 정정했다.

3. **E2c — provenance comprises 목록의 완전 열거 주장 보정.** `provenance.md` Proof notes의
   "Derived editorial scope in the portable document comprises …"가 완전 열거를 주장하면서
   본문의 완전형 한정 두 블록을 빠뜨렸다: Experience "Derived implementation principles"
   (§12 5원칙)와 Experience "Avoid"(§7 Don'ts 8항). 기존 항목 "the derived application rules"는
   Foundations의 Do's 블록 이름이라 Avoid를 덮지 못했다. 두 항목을 추가하고 Do's 항목을
   "in Foundations"로 명시해 중복 해석을 없앴다. Proof notes 앞 항목(evidence-domain 목록)은
   이미 "the five principles and their UI implications"와 "the do/don't rules"를 담고 있으므로
   두 목록의 정합이 확보됐다. 본문 완전형 한정 27개가 comprises 목록에 1:1 대응함을
   grep 전수 대조로 확인했다.

### 개정하지 않은 것 (검토자가 정당하다고 판정)

- **`authority` claim 재배치.** `design-md-core-conformance.cjs`의 `governance_authority`가
  정본 문장 바이트 일치(`authorityBody === expectedAuthority`)를 강제하므로 DADS 고유 단서는
  claim 블록 안에 들어갈 수 없다. 옮긴 문장은 `claim-end` 직후(`DESIGN.md:422`)에 인접하고
  Scope(`:11`)에도 중복 보존돼 의미 유실이 없다. 그대로 둔다.
- **"not a quoted rule" 리워딩.** 게이트 오탐(`explicitlyNegatesClaim('foundations', …)`,
  `design-md-core-conformance.cjs:305`의 `BOUNDARY` 가드가 구제하지 못함)을 유발하지만
  현재 표현("…rather than a quoted Digital Agency statement")이 B2a가 요구하는 완전형이고
  브랜드를 명명한다. 상류 게이트 수정 항목으로 접수돼 있다. 그대로 두고 보고한 감사자
  판단이 옳다(E3).

### 원장 재검증 (F2 재수행)

위 표의 각 행을 실측 grep으로 전수 재대조했다. migration-log에는 수치 줄번호 포인터가
없으며(파일·섹션 이름 포인터만 사용), 이번에 새로 도입한 원본 줄번호 두 개(`:362` 서문,
`:366` 田中 美咲)와 기존 `audit-log.md`의 두 개(`web/references/digital-agency-jp/DESIGN.md:366`,
`scripts/design-md-core-conformance.cjs:305`)는 모두 현재 파일과 일치한다. 실측 확인한 수치:
색 토큰 17개(Foundations 표 17행 = provenance `colors` 17항), 타입 역할 6개, 컴포넌트 레코드
8개(button ×3 · input · card · tab · badge ×2), §14 레시피 10행, 사이드카 raw sample 17줄
(`.verification.md:12–28` = 원소 13 + 빈도 스캔 4), elevation 3단계, `image` 히트 1건
(`DESIGN.md:191`, typography-assets 내부), B3 5증거종 문장 1건(`DESIGN.md:128`).
밀린 줄번호는 없었다.

게이트: `node migrate-reference.mjs --brand digital-agency-jp --gate-only` → **PASS**,
problems `[]`. 오탐 없음.
