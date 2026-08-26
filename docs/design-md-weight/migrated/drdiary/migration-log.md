# Dr.diary migration log

Source: `web/references/drdiary/DESIGN.md` (legacy OmD 0.1, 15 sections)
Destination: `docs/design-md-weight/migrated/drdiary/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/drdiary/provenance.md`
Rulebook: **v9** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-26

Every row below was checked by grepping the actual destination file before it was written (F2). Where one value landed in two files, both destinations are named.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| Frontmatter identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance Identity (+ `logo`는 portable Typography & Assets에도) | Portable file carries no frontmatter. `name` becomes the H1 `Dr.diary Design System`; `display_name_kr` 닥터다이어리 also survives in the portable Scope; `primary_color` `#3eaeff` also survives as Foundations Sky Blue. `logo`는 이중 목적지다(E2a): 값(favicon 프록시 URL)은 provenance Identity에만 있고, 그 처분—프록시는 브랜드 소유 에셋이 아니므로 로고로 승격하지 않는다는 경계—은 portable Typography & Assets 마지막 항목에 실재한다. |
| Frontmatter `verified`, `added`, `omd`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance Identity + Freshness | 검증 메타데이터도 값이므로 원장에 전부 보존(A1c). |
| Frontmatter `tokens.note` | 분리 → provenance Identity (verbatim) | 출처 주석. 그 안의 색·그라디언트 사실 자체는 Foundations에도 있다. |
| Frontmatter `tokens.colors` (14 roles incl. `on-primary`) | 옮김 → Foundations Semantic color (+ provenance Claim ledger) | 14개 역할 전부 값과 함께. |
| Frontmatter `tokens.typography` (family + 6 roles with size/weight/lineHeight/use) | 옮김 → Typography & Assets Type roles (+ provenance Claim ledger) | unitless lineHeight 1.4 / 1.2 / 1.5는 비율 그대로 보존(A1a). |
| Frontmatter `tokens.spacing` (xs–section) | 옮김 → Foundations Spacing | 4 / 8 / 12 / 16 / 24 / 40 / 64px. |
| Frontmatter `tokens.rounded` (sm/md/pill/full) | 옮김 → Foundations Shape | 8px / 16px / 100px / 9999px. pill은 careers 표면 귀속을 유지. |
| Frontmatter `tokens.shadow.none` | 옮김 → Foundations Elevation (+ provenance Claim ledger) | `box-shadow: none` 관측 범위 그대로. |
| Frontmatter `tokens.components` (news-card, value-card, store-cta, nav-link, gradient-pill) | 옮김 → Components & States | 각 컴포넌트의 `type` 값(card ×2, button, tab, badge)을 Primitive로 보존(A1b). |
| §1 Visual Theme & Atmosphere — 제품/회사 정체, 표면 범위 | 옮김 → Experience `scope` claim | 회사 성격, 두 표면 한정, 앱/CGM/B2B 콘솔 비대리 선언. |
| §1 Key Characteristics 8항 | 옮김 → Experience Distinctive traits | 값 포함 8항 그대로. |
| §1 "flat, fast, mobile-native" 등 분위기 반복 문장 | 삭제 | 범위에 기여하지 않는 반복. 같은 사실은 Distinctive traits와 Foundations Elevation에 값과 함께 남았다. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | Primary/Gradient, Text & Ink, Surface & Border 세 묶음 전부. |
| §3 Font Family + fallback stack | 옮김 → Typography & Assets Family / Font evidence | Pretendard Fallback → `-apple-system` / `system-ui`는 fallback이지 브랜드 페이스가 아니라는 경계와 함께. |
| §3 Hierarchy 표 (6 roles, rem 포함) | 옮김 → Typography & Assets Type roles | 2.50rem / 1.13rem / 1.25rem / 1.00rem 포함 전 행. |
| §3 Principles 4항 | 옮김 → Typography & Assets Type rules | 한 문단으로 압축, 값·규칙은 손실 없음. |
| §4 Buttons / Cards / Navigation / Badges | 옮김 → Components & States | 6개 컴포넌트 anatomy·값·용도. 이 중 More Link는 frontmatter `components` 맵에 항목 자체가 없어 `type`이 없다 — 따라서 `Primitive:` 필드를 생략했다(A1b의 반대 방향: 없는 primitive를 이름에서 추론하지 않는다. 원본은 `nav-link`를 `type: tab`으로 타이핑해 "-link"→link 추론을 스스로 반박한다). `Kind: interactive`와 역할 사유 applicability map은 유지했다. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts unresolved | 분리 → provenance Freshness + Surfaces and sources + Proof notes | freshness·원장. |
| §5 Spacing System | 옮김 → Foundations Spacing | base 4px와 스케일, 패딩 예시. |
| §5 Grid & Container | 옮김 → Layout & Platforms | hero, 교대 밴드, 373px 프레스 타일, CTA 쌍. |
| §5 Whitespace Philosophy | 옮김 → Layout & Platforms | 세 항목 전부. |
| §5 Border Radius Scale | 옮김 → Foundations Shape | 8 / 16 / 100 / 9999px. Layout이 아니라 Foundations 슬롯. |
| §6 Depth & Elevation 표 4행 | 옮김 → Foundations Elevation | hero scrim `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))` 포함. |
| §6 Shadow Philosophy | 옮김 → Foundations Elevation 본문 | 관측 범위(hero·nav·headings·value cards·press cards)를 그대로 유지. |
| §7 Do 7항 | 옮김 → Experience Principles / Foundations / Typography | 브랜드 적용 규칙. Governance 통제 문구에는 넣지 않았다. |
| §7 Don't 7항 | 옮김 → Experience Avoid | 7항 그대로. |
| §8 Breakpoints 표 | 옮김 → Layout & Platforms | 640 / 1024 / 1440px 3행. 파생 편집 추론 한정을 인접에 붙였다(B2a). |
| §8 Touch Targets | 옮김 → Layout & Platforms | 48px 행, 54px CTA, ~373px 타일 — 데스크탑 렌더링 측정치라는 한정과 함께. |
| §8 Collapsing Strategy / Image Behavior | 옮김 → Layout & Platforms (Image Behavior 2항은 Typography & Assets에도) | Collapsing 4항 + Image Behavior 3항 전부 Layout에 있다. 이중 목적지(E2a): "히어로 사진의 다크 top-scrim"과 "카드·앱 스크린샷 무그림자"는 Typography & Assets Assets 항목에도 실재한다. 카드 16px radius 유지 항목은 Layout에만 있다. |
| §9 Quick Color Reference | 삭제 | 같은 색이 Foundations에 역할·값과 함께 이미 있다(grep 확인: 11개 색 전부 §2 이관분에 존재). 도구용 요약표. |
| §9 Example Component Prompts 4개 | 삭제 (단, 표에만 있던 고유값은 이관) | 복붙용 프롬프트 포장. **단** 이 프롬프트에만 있던 그라디언트 정지점 `linear-gradient(270deg, #ff5a8c 60%, #dc6eff 75%, #00c8fa 100%)`와 `linear-gradient(to right, #3eaeff, #ff5a8c, #dc6eff)`는 A3에 따라 Foundations Semantic color로 옮겼고, provenance 삭제 원장에도 그 처리를 기록했다. |
| §9 Iteration Guide 7항 | 삭제 | 같은 규칙의 도구별 재진술. 원 규칙은 Experience Principles / Avoid와 Foundations에 있다. |
| §10 Voice & Tone 서술 | 옮김 → Content & Locales | warm/clear/empowering 성격 규정은 파생 편집 해석이라는 한정을 인접에 붙였다(B2a). |
| §10 Context/Tone 표 5행 | 옮김 → Content & Locales | 한국어 원문 5행 바이트 그대로(A5). |
| §10 Voice samples 4개 | 옮김 → Content & Locales (+ provenance Claim ledger) | 원문 그대로. 이중 목적지 확인: 네 문자열 전부 provenance에도 있다 — 히어로 H2와 섹션 H2는 `typography.heading` 행의 측정 대상으로, 페이지 타이틀과 careers 문장은 전용 행으로. 검증 일자·URL은 provenance로만. |
| §10 Forbidden register | 옮김 → Content & Locales | 5항 그대로. |
| §11 Brand Narrative — 회사·제품·파트너십·글루어트 | 옮김 → Experience `scope` (+ provenance Evidence-domain boundaries) | 보건소·서울대병원·글루어트 원문 그대로. 원본이 "general public knowledge"로 등급 매긴 사실을 본문에도 함께 적었다. |
| §11 "What Dr.diary refuses" 해석 문단 | 옮김 → Experience Scope 마지막 문단 + Avoid | 파생 편집 추론 한정을 인접에 붙였다(B2a). |
| §12 Principles 5항 | 옮김 → Experience Principles | 5항 전부와 각 항의 UI implication. implication 문구는 압축했다 — 1항의 "never the heavy chrome of legacy medical software"는 Avoid의 "legacy medical institutions" 항목으로만 남았고, 3항의 열거 중 `DSR-style metrics`, 4항의 "the visual argument that the data underneath is rigorous", 5항의 "don't dilute either"는 본문에 없다. `DSR-style metrics`의 사유는 압축이 아니라 판단이다 — `DSR`은 원본 `DESIGN.md`·자매 `.verification.md`를 통틀어 이 한 자리에서만 쓰이고 어디에도 정의·출처가 없는 임상 약어이므로(grep 확인: 두 파일 통산 1회, 정의 0회), 의료 도메인에서 의미 미상의 약어를 이관하지 않는 쪽이 보수적 정답이라고 보아 생략했다. 머리에 B2a 한정. |
| §13 Personas 3인 | 삭제 | 원본 스스로 fictional archetypes / illustrative names라고 명시. 검증된 task로 승격하지 않았고 provenance에도 이름·나이·도시·세그먼트를 재수록하지 않았다(D2). Audience에는 집단 수준 서술만 남겼다. |
| §14 States 표 9행 | 옮김 → Components & States "Declared state contract" (+ 컴포넌트별 applicability) | 본문 보존(A2). "오류가 발생했습니다"·"필수"는 바이트 그대로. 앱 표면 상태를 포함한 파생 편집 계약이라는 한정을 인접에 붙였다. graph 위임 없음. |
| §14 error/empty 카피 규칙 | 옮김 → Components & States 표 **및** Content & Locales | 이중 목적지: 상태 계약과 카피 규칙 양쪽에 실재한다. |
| §15 Durations 3행 | 옮김 → Foundations Motion | 120 / 220 / 320ms — 브랜드별 값이므로 삭제 대상이 아니다. 파생 편집 한정 인접. |
| §15 Easings 3행 (`ease-enter`·`ease-exit`·`ease-standard` curve 값) | 삭제 | 무출처 커브. 라이브 인스펙션은 모션을 캡처하지 않았고, 셋 중 `ease-exit`가 `spec/omd-v0.1.md`의 비브랜드 예시 커브와 바이트 동일하다(provenance 생략 원장도 같은 토큰명을 명시한다 — 토큰명 명시는 값 재수록이 아니다). 토큰 이름은 Foundations와 Named gaps에 남았고, 세 커브 **값**은 portable 본문에도 `provenance.md`에도 재수록하지 않았다 — 값은 정본 `web/references/drdiary/DESIGN.md`(363-365행)에만 남아 있어 재주입 경로를 만들지 않았다. 유일한 예외는 `audit-log.md`가 자기 정정 문단에서 인용하는 한 자리이며, 그 사실도 거기에 함께 적혀 있다. |
| §15 Motion rules + reduced-motion | 옮김 → Foundations Motion | `prefers-reduced-motion: reduce` 계약 포함. 승격 조건은 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 전부 명시해 본문에 적었다(B3). |
| 문서 말미 `<!-- OmD v0.1 Sources -->` 주석 블록 | 분리 → provenance (Method · Claim ledger · Evidence-domain boundaries · Derived-inference register) | 원장·freshness·증거 등급. standalone 해석에 필요한 한정(파생 편집 여부, 표면 귀속, general-public-knowledge 등급)은 본문에도 남겼다(E1). |
| 없음 — `[FILL IN]` | 해당 없음 | 원본에 플레이스홀더가 0개다. 본문에도 0개. |

### 원본 밖에서 들어온 한 줄 (투명 기록)

| 추가된 것 | 목적지 | 출처와 사유 |
|---|---|---|
| Font evidence 표의 "Careers surface" 행 — careers 표면이 제3자 페이지 플랫폼 호스팅이라 그 base text color와 generic sans stack은 호스트 기본값이며 거기서 타입 토큰을 가져오지 않는다 | 옮김 → Typography & Assets Font evidence (+ provenance Evidence-domain boundaries) | legacy `DESIGN.md`에는 없고 자매 정본 `web/references/drdiary/.verification.md`가 명시한 사실이다(원본 `DESIGN.md`에는 "Notion" 문자열이 0회). Scope가 careers 표면을 범위에 넣었으므로, 이 경계가 없으면 소비자가 그 표면에서 타입 토큰을 가져갈 수 있다. 값 승격이 아니라 표면 귀속 제한이며, 새 hex·px·rem 토큰을 하나도 도입하지 않는다(E1: standalone 해석에 필요한 경계는 본문에 남긴다). |

## 준수 메모 (본문에 전문이 실재하는 것만 기재 — E2c)

- **B3 전문**: Foundations Motion 마지막 문장에 다섯 증거 종류가 전부 나열되어 있고, "per-component computed observation" 게이트도 함께 있다.
- **B2a 한정**: 본문에서 "derived editorial implementation inference" 문구가 **17회** 실재한다(grep 확인). 위치 — Experience Scope 말미 / Audience 머리 / Distinctive traits 머리 / Principles 머리 / Avoid 머리, Foundations Semantic color 머리 · gradient 규칙 · Spacing+Shape 말미 · Elevation 말미 · Motion, Typography Type rules, Components & States Evidence record, Declared state contract 머리, Layout Whitespace · 말미, Content & Locales 머리 · 말미. provenance의 Derived-inference register는 이 17개 자리를 **전부** 행으로 갖고 있다(17행, grep 확인) — 원장 범위와 본문 한정 개수가 일치한다.
- **C1/C2**: `not-applicable` 행은 **13행**이고(grep 확인) 전부 컨트롤 역할 사유다 — App-Store CTA loading/error/success(외부 스토어 핸드오프), Top Nav Link loading/error/success(내비게이션 항목), Press Card disabled/error/success(발행된 항목의 등재 여부, 섹션 단위 보고), More Link disabled/loading/error/success(빈 상태 대체, 순수 이동). 미관측·미명명을 사유로 쓴 행은 0이다. Press Card loading은 반대로 `applicable`로 두었다 — 원본이 그 타일에 skeleton 처치를 선언했기 때문이다. Value / Feature Card는 interactive 근거가 없어 kind와 applicability map 자체를 생략했다(C4).
- **A5**: 인용된 한국어 문자열 10종 전부 원문 그대로 이관됐고, 영문 설명이 필요한 자리는 원문 옆에 병기했다(예: "데이터로 선도하는 초개인화 만성질환 케어" ("data-driven, hyper-personalized chronic-disease care")).
- **D1a**: Named gaps는 두 항목뿐이고 둘 다 원본이 존재를 세운 도메인이다 — 원본이 이름을 붙인 easing 토큰 3종, 그리고 원본 서사가 명시한 consumer app / CGM / B2B 서비스 인터페이스. 원본이 세우지 않은 도메인은 열거하지 않았다.
