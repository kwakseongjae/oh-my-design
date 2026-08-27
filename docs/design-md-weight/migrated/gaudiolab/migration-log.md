# Gaudio Lab migration log

- Source: `web/references/gaudiolab/DESIGN.md` (legacy, omd 0.1) — not modified
- Sibling: `web/references/gaudiolab/.verification.md` — **adopted as evidence grading only**. Detail in provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/gaudiolab/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/gaudiolab/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v11**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: `scripts/design-md-core.cjs` `inspectDesignMd` → `format: core-v2` · `cleanTop: true` · `level: portable-core` · `portable_core: true` · `reasons: []` · placeholder 0
- 게이트: `node test-v2/tools/migrate-reference.mjs --brand gaudiolab --gate-only` → `verdict: PASS`, `problems: []`. **이 PASS는 적합성 증거가 아니다** — 같은 게이트가 A5 손실·E1 좁은 원장·E2 허위 목적지·B1 분류 승격을 통과시킨 전력이 있고, 이 브랜드에서는 `copy-loss` 커버리지가 6/201(3.0%)에 그친다. 아래 A5a 손 스윕이 그 나머지를 담당한다.
- 도메인: KR AI-audio 기업의 **마케팅 웹 3표면**(EN 홈 / EN brand / KO brand). 브랜드 소유 제품 앱(`studio.gaudiolab.io`)은 sibling이 존재만 기록했고 미조사라 별도 증거 영역으로 provenance에만 둔다.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a).

## 이 브랜드의 갈림길 세 개

1. **§14·§15에 출처가 없다.** 원본 닫는 주석은 §1–9(라이브 인스펙트), §10(verbatim), §11(라이브 페이지 + 추론된 창업연도 + 공지 사실), §13(가상)에 각각 출처를 배정하고 **§14 States와 §15 Motion에는 아무 출처도 배정하지 않는다**. 두 절은 본문에 보존하되(A2) 각각 인접에 B2a 완전형 한정을 붙였다. 삭제는 무출처 커브 3개뿐이다.
2. **로고가 브랜드 자산이 아니다.** frontmatter `logo.slug`가 Google favicon 프록시인데, sibling이 스스로 "Google favicon은 KR 브랜드 소유 요건에 포함하지 않는다"고 못박았다. portable Assets에 브랜드 자산으로 올리지 않고 provenance `Identity`/`Logo decision`에 원장으로 남겼다.
3. **§9가 완전히 중복은 아니었다.** hex 10종·px 15종·`rgba(0,0,0,0.87)` 1종은 전부 §2–§5에 이미 있었지만 outline 버튼의 `transparent` 배경은 파일 전체에서 §9(295행)에만 있었다. A3에 따라 삭제 대신 Components `Outline (Secondary)`로 옮겼다.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`) | 분리 → provenance · 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Gaudio Lab Design System`. `display_name_kr` `가우디오랩`은 provenance Identity 표와 DESIGN.md `Scope` 첫 문장 양쪽(doc 1회 · provenance 6회 — Identity·sibling 전용 문자열·raw samples·Country sources에 각각). `primary_color` `#00b7ff`도 양쪽. |
| YAML `logo.type: favicon` / `logo.slug` | 분리 → provenance (**브랜드 자산으로 승격하지 않음**) | Google favicon 프록시 URL. sibling `Country sources` 말미가 이 서비스를 브랜드 소유 출처에서 명시 제외한다. portable Assets에는 "카탈로그의 logo 항목은 3자 favicon 서비스이며 여기서 브랜드 자산으로 제시하지 않는다"는 경계 문장만 남겼다 — `favicon` 문자열은 doc 1회(그 경계 문장)이고 slug URL 자체는 doc 0회 · provenance 1회(`Identity` 표), 그 판단 근거는 provenance `Logo decision`. `type: favicon`은 컴포넌트가 아니라 `logo.type`이므로 A1b primitive type 집계에서 제외. |
| YAML `verified` / `added` / `omd: 0.1` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). 단 `live-extract`가 무엇을 덮는지(computed color·type·spacing·radius·border·shadow)는 standalone 해석에 필요해 DESIGN.md Foundations `Motion` 머리 문장으로도 남겼다 — 이중 목적지. |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance | 원문 그대로 인용 블록. 안의 값(`#00b7ff`, `#111214`, `rgba(0,0,0,0.87)`, 3종 패밀리, shadowless)은 전부 DESIGN.md Foundations·Typography에 별도로 실려 있음을 같은 절에 대조해 적었다. |
| YAML `tokens.colors` **10키** (`awk`로 `colors:` 블록의 들여쓰기 4칸 키를 세어 10) | 옮김 → Foundations `Semantic color` | brand/action 2 (`primary` `on-primary`) / ink·text 3 (`ink` `muted` `faint`) / surface 3 (`canvas` `surface` `hairline`) / dark 2 (`night` `ocean`) = 10. 네 표의 데이터 행 합계도 10(헤더 4행 제외). §2의 role 이름·설명과 `rgb(...)` 병기 표기까지 `Recorded use` 열에 보존. |
| §2에 없는 11번째 ink `rgba(0,0,0,0.87)` (frontmatter `colors`에는 없고 §1·§2·§3 본문에만 있음) | 옮김 → Foundations `Semantic color` 별도 행 + Typography rules + Experience `Scope` | doc 5회(Scope 1 · Distinctive traits 1 · Application rules 1 · Semantic color 1 · Typography rules 1). §2가 두 검정을 레이어별로 나눠 둔 것을 병합하지 않고 "keep that split" 문장으로 유지. |
| YAML `tokens.typography.family` 3키 + §3 Font Family | 옮김 → Typography & Assets `Family` · `Font evidence` | Poppins / Roboto / Noto Sans KR. `Helvetica, Arial` fallback과 `-apple-system, system-ui` 스택도 원문대로. fallback을 브랜드 페이스로 제시하지 않는다는 경계를 `Family` 말미에 남겼다. |
| YAML `tokens.typography` **7역할** (size / weight / **unitless** lineHeight / tracking / use) + §3 Hierarchy 표 7행 | 옮김 → Typography & Assets `Type roles` | A1a: `lineHeight` 5종(`1.00` `1.46` `1.11` `1.56` `1.50`)을 px로 바꾸지 않고 비율 그대로. 원본이 스스로 적은 px 등가(`40px` `28px` `24px`)와 rem 등가(`5.00rem` `3.00rem` `2.25rem` `1.13rem` `1.00rem` `0.88rem`)만 괄호로 병기. `0.15px` tracking도 그대로. |
| §3 Principles 4항 | 옮김 → Typography & Assets `Typography rules` | 산출물 실측 4항. 측정치를 원칙으로 읽는 행위가 편집적 해석이라 B2a 완전형 한정을 절 머리에 인접 배치. |
| YAML `tokens.spacing` **7키** (`xs:4 sm:8 md:12 base:16 lg:24 xl:40 section:64`) + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout & Platforms 높이/패딩) | 이중 목적지. 8px MUI 기반 단위와 4px 마이크로 스텝, 스케일 7값, 특징적 패딩 2건(`8px 16px`, `16px 40px`)까지. |
| YAML `tokens.rounded` **5키** (`sm:4 md:6 lg:12 xl:16 full:9999`) + §5 Border Radius Scale 5항 | 옮김 → Foundations `Shape` | 5항 그대로. 필/소반경 병존을 "의도된 혼합"으로 읽는 부분에만 B2a 한정을 붙이고 값 자체는 그대로 뒀다. |
| YAML `tokens.shadow.none: "none"` | 옮김 → Foundations `Elevation` + Components `News Card` | 이중 목적지(둘 다 portable 본문). |
| §6 Depth & Elevation 4행 표 + Shadow Philosophy | 옮김 → Foundations `Elevation` | 4행 그대로. Philosophy의 관측(`box-shadow: none`)은 사실로, 그 뒤 인과("elevation 거부", "빠르고 기술적으로 느껴진다", "소리에 사는 회사에 적합")는 B2a 완전형 한정을 같은 문단에 붙여 보존. |
| YAML `tokens.components` **8개** (`type: button` ×5, `tab` ×1, `card` ×1, `listItem` ×1 — `grep -o 'type: [a-zA-Z]*' \| sort \| uniq -c` 실측; `favicon` 1건은 `logo.type`이라 제외) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 `Primitive type: \`button\`/\`tab\`/\`card\`/\`listItem\``으로 보존. 산출물 실측 `Primitive type` 8행 = button 5 · tab 1 · card 1 · listItem 1 = 원본과 동수. |
| §4 Buttons / Navigation / Cards & Containers / List Items | 옮김 → Components & States | 8개 컴포넌트 레코드. 값(bg/fg/border/radius/padding/height/font/active)은 전부 원문대로. |
| §9에만 있던 outline 버튼 `transparent` 배경 (legacy 295행, 파일 전체 1회) | **옮김 → Components `Outline (Secondary)`** (A3) | §9 삭제 시 함께 사라질 뻔한 유일한 고유 렌더 필드. §4 Outline 레코드에는 배경이 없었다. 산출 doc 1회. |
| §9 Quick Color Reference (hex 10개 + `rgba(0,0,0,0.87)`) · Example Component Prompts 4개 · Iteration Guide 6항 | 삭제 | 도구용 재진술·복붙 프롬프트·도구별 workflow는 받을 슬롯이 없다. 삭제 전 §9의 토큰 전량을 나머지 파일과 기계 대조했고 **`transparent` 외 고유값 0건**이었다(§9 토큰 26종 — hex 10 · px 15 · `rgba(0,0,0,0.87)` 1 — 전부 §2–§5에 존재). 위 A3 행이 그 1건의 처분이다. |
| §14 States **9행** | 옮김 → Components `State record` (+ 컴포넌트별 applicability 사유) | 이중 목적지(둘 다 portable 본문). 9행 값·카피 그대로(산출물 실측 9행). 원본 닫는 주석이 이 절에 출처를 배정하지 않으므로 표 바로 앞에 B2a 완전형 한정을 붙였다. 같은 내용을 근거로 6개 interactive 컴포넌트의 disabled/loading 사유를 채웠다(파란 액션의 opacity 페이드 = disabled, `motion-slow`/`motion-standard` 전환 = loading). graph 위임 없음. |
| §14의 `"오류가 발생했습니다"` · `"필수"` | 옮김 → `State record` (바이트 그대로) | A5. 두 문자열은 브랜드 발행 카피가 아니라 **원본이 금지 예시로 쓴 문자열**이지만, §14 본문 보존 의무(A2) 대상이라 원문 그대로 남겼다. 각 doc 1회. |
| §15 Durations 3행 (`motion-fast` 120ms / `motion-standard` 240ms / `motion-slow` 400ms) | 옮김 → Foundations `Motion` | 3행 그대로. 규칙집의 삭제 범위는 **무출처 커브뿐**이고 duration은 브랜드마다 다르므로 보존. 절 머리에 B2a 완전형 한정. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 3행 보존. |
| §15 Easings — **커브 값 3개** (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. sibling의 method·19 raw samples 어디에도 transition·animation·duration·easing 관측이 없다. 특히 `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md` 266행 예시 표의 값과 동일하며, 그 파일 259–263행이 스스로 이 커브들을 "비브랜드 구현 기본값"으로 규정하고 reference DESIGN.md로 옮기는 것을 금지한다. 원장 행에 세 값을 그대로 적었으므로 값 자체는 산출물에 살아 있다. |
| §15 Motion rules 6문장 (functional·composed / Swiper 캐러셀 / hover·press opacity·scale / 밴드 crossfade / no bounce or spring / `prefers-reduced-motion: reduce`) | 옮김 → Foundations `Motion` | 6항 그대로. reduced-motion 계약 포함. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance | 원본에는 승격 조건 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트, 그리고 부분 확인(커브 하나 / 프레임워크 문서 일치)이 이를 충족하지 못한다는 배제 문장을 본문에 적었다. **E2c 대조:** 이 전문이 산출 `DESIGN.md`에 실제로 2회 존재함을 `grep -o` 로 확인한 뒤 이 행을 적었다(Foundations `Motion` 1회 + Governance `Recorded unresolved decisions` 1회). |
| §1 Visual Theme & Atmosphere — 표면 기술·색·타입·기하 | 옮김 → Experience `Scope` 2문단 | 값은 전부 보존하고 표면 3종에 붙여 뒀다. |
| §1 인과·해석 문장(연구소가 소비자 제품에서 절제를 배웠다 / "blue means act" / engineered and trustworthy / 하이브리드 스택이 engineering-led의 tell / refusal of elevation / science-forward가 콘텐츠에 말하게 한다) | 옮김 → Experience `Scope` 3문단, 한정 부착 | B2a 완전형 인접 배치. 값 손실 없음 — 같은 관측(색·폰트·radius·shadow)은 Foundations·Typography·Components에 값으로 남아 있다. 원본 닫는 주석이 "one color, one action"·flat-and-fast·"sound is science first"를 스스로 editorial reading으로 지목한 사실도 그 문단에 적었다. |
| §1 Key Characteristics **8항** | 옮김 → Experience `Distinctive traits` | 산출물 실측 8항. 항목 안에 든 해석(rationed, deliberate duality, MUI softness)에 B2a 완전형 한정을 머리에 배치. |
| §5 Layout Principles (Grid & Container 4항, Whitespace Philosophy 3항) | 옮김 → Layout & Platforms | 6개 불릿으로 통합 보존(full-bleed 밴드/중앙 컬럼, 풀필 제품 행, 12px 카드 그리드, 가로 스탯 행, 배경 스왑 분절, 다크 밴드). "content over chrome"·flat segmentation·immersive rhythm 읽기에는 바로 뒤 문단에 B2a 완전형 한정. |
| §8 Responsive Behavior (Breakpoints 3행, Touch Targets 3항, Collapsing Strategy 4항, Image Behavior 2항) | 옮김 → Layout & Platforms `Responsive behavior` | 3행 그대로(`<640px` / `640-1024px` / `1024-1440px`). 터치 타깃·접힘·이미지 거동 전부 보존. 다만 sibling의 method가 **desktop Chrome UA 단일 실행**이라 이 절 전체에 B2a 완전형 한정을 앞 문단에 붙였다. |
| §7 Do **8항** | 옮김 → Experience `Application rules` | 산출물 실측 8항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. 항목 안의 이유(MUI chrome 수용, `#fafafa`가 "softer by intent")가 편집적 읽기라 B2a 완전형 한정을 절 머리에 인접 배치. |
| §7 Don't **7항** | 옮김 → Experience `Avoid` | 산출물 실측 7항. 이유까지 원문대로. 그 이유(단일 액션 신호 희석, 의도된 평면성, 로케일별 스택 유지)가 편집적 읽기라 B2a 완전형 한정을 절 머리에 인접 배치. |
| §10 Voice & Tone — 성격 규정 문단 + Context/Tone **5행** 표 | 옮김 → Content & Locales | 표 5행(헤더 제외) 그대로. voice 해석(precise·wonder-tinged·quietly authoritative, KO의 "warmer, almost poetic", evidence-over-adjectives)에 B2a 완전형 한정을 표 바로 앞에 붙였다. |
| §10 Voice samples **3건** (verbatim) | 옮김 → Content & Locales | A5: 3건 전부 바이트 그대로. 한국어 원문이 라벨이고 영문 병기는 읽기 보조라는 경계를 목록 머리에 적었다. `*(verified live 2026-07-02, /company/brand)*` 류 표기만 provenance `Freshness`·`Surfaces`로 분리. |
| §10 Forbidden register | 옮김 → Content & Locales | 원문 그대로(`"magic"` 포함). |
| §11 Brand Narrative | 옮김 → Experience `Scope` 4문단 (+ provenance `Evidence class`) | 이중 목적지. Seoul 본사, 10주년 2025, 창업 circa 2015, 미션 전문, 태그라인, "Sound is science, from smartphone to movie theaters", "over 40 audio experts including 9 Ph.D", 제품 6종(GSA / Gaudio Sing / GTS·Gaudio Text Sync / LM1 / Gaudio Studio Pro / Gaudio Developers), 50M daily users, 16.9 billion KRW (~$13M) Series B, 119 IP, 35 partners, Genie Music·Melon·KT Alpha Shopping·META48, CES Innovation Awards 2026 4년 연속까지 전부 보존. **증거 등급을 원본 주석대로 3분할해 본문에 적었다** — 자사 페이지 인용 / 창업연도는 10주년에서 파생한 추론 / Seoul HQ는 "widely documented public knowledge". |
| §12 Principles **5항** (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출물 실측 5항. B2a 완전형 한정을 머리에 배치하고, 원본 주석이 editorial이라 지목한 "one color, one action"과 "sound is science first"를 그 한정 문장에서 이름으로 지목했다. |
| §13 Personas **3인** (정민호 34 서울 / Sarah Nguyen 29 Los Angeles / 김하윤 41 판교) | **삭제 (sidecar 재수록도 안 함)** | D2. 원본 §13 머리글과 닫는 주석이 둘 다 fictional archetypes이며 이름은 illustrative라고 명시. 이름·나이·도시·전기를 portable 본문에서 전부 삭제했다(산출 `DESIGN.md`에서 세 이름 각 0회, `provenance.md`에서도 각 0회 — 실측). 이름·나이·도시는 **삭제 대상 식별자로 이 로그 행에만** 1회 남아 있다. Experience `Audience`에는 원본이 "publicly observable Gaudio Lab audiences"로 적은 그룹(audio/ML engineers · media & broadcast partners · consumer product teams)만 그룹 단위로 남겼고, 그 그룹을 이 제품의 audience로 읽는 행위에 B2a 한정을 붙였다. |
| 하단 footer 블록 (**Verified** / Tier 1 3개 URL / Tier 2 2개 시도 / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). Tier 1 3개 URL과 각 URL의 원문 범위 주석, Tier 2 두 시도의 결과 문자열(`0 DESIGN.md files — empty`, `not listed — generic trending grid only`)까지 provenance `Sources`에 보존. |
| 닫는 HTML 주석 (Philosophy Layer 출처 배정) | 분리 → provenance `Evidence class` · 옮김 → DESIGN.md 각 절의 한정 | 이중 목적지. 이 주석이 이 마이그레이션의 뼈대다 — §1–9 / §10 / §11 / §13에는 출처를 배정하고 §14·§15에는 배정하지 않는다는 사실 자체를 provenance 표로 옮기고, 그 결과인 한정 문장을 해당 절 인접에 배치했다. |
| Sibling `.verification.md` — Proof 머리말·method·**19 raw samples**·Tier 2 cross-check·Conflict matrix 5행·Country sources 4개 | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건, 구조 분류 승격 0건**(B1). sibling 전용 값 `rgb(238,238,238)` · `rgba(255,255,255,0.2)` · `50%` · `0.15008px` · `Suit` · nav의 `rgb(0,0,0)`/`rgb(255,255,255)` 2면 판독 · `studio.gaudiolab.io`는 산출 `DESIGN.md`에서 각각 0회임을 실측했다. raw samples 19행은 provenance에 19행으로 보존(실측 19 = 19). |
| Sibling 전용 발행 문자열 `Our Milestone` · `Gaudio Lab \| AI Audio Technology` · `가우디오랩 \| 가우디오랩` · `Products/제품` · `우리는 좋은 소리를 만들고…` | 분리 → provenance (바이트 그대로) | A5는 sibling이 측정 대상으로 명기한 문자열에도 걸리므로 5건 모두 바이트 그대로 보관. legacy 본문이 스스로 담은 라벨만 portable 본문에 올렸다. |
| Sibling이 스스로 제3자로 배제한 문자열 (`"gaudiolab — 0 DESIGN.md files \| getdesign.md"`, `#ffb1ee`/`#f5a623`/`#ededed`, `Browse 2,000+`, `"Minimal Design / Clean SaaS"`) | 분리 → provenance (바늘 아님으로 명기) | 원본이 스스로 "getdesign.md 자신의 사이트 테마이지 Gaudio의 것이 아니다"라고 배제한 문자열. A5a 바늘에서 제외하되 배제 사실을 원장에 남겼다. |

## State applicability 판정 근거 (C1·C2·C4)

원본에는 컴포넌트별 상태 관측이 없다. 따라서 applicability는 **역할 의미**로만 판정했고, 미해상 시각 treatment는 값만 생략했다(C1). `not captured` / `not named`를 사유로 쓴 행은 0건이다.

| 컴포넌트 | Kind | error / success | 의미상 사유 |
|---|---|---|---|
| Header CTA (Primary) | interactive | not-applicable | 연락 표면으로 데려가는 진입점이지 스스로 커밋하는 연산이 없다. §14의 form-validation / submitted는 그 표면의 필드가 보고한다. |
| Hero CTA (Primary) | interactive | not-applicable | 같은 역할. |
| Outline (Secondary) | interactive | not-applicable | 제품 목록으로 가는 목적지 링크. 요청 실패는 목록이 보고한다. |
| Watch the Film (Overlay) | interactive | not-applicable | 필름을 여는 트리거. 재생 실패는 재생 표면이 보고한다. |
| App Launcher (Icon) | interactive | not-applicable | 메뉴를 여는 dialog trigger. |
| Nav Menu Item | interactive (`tab`) | not-applicable | 목적지 이동. 규칙집 C2가 tab·목적지 링크를 명시적으로 이 부류로 든다. active는 상태가 아니라 variant로 남겼다. |
| News Card | **미선언 (C4)** | — | 원본이 표면 값과 그리드 내 위치만 적고 action·target·interaction treatment를 전혀 붙이지 않았다. interactive도 non-interactive도 근거가 없으므로 kind와 applicability map 자체를 생략했다. |
| Product Row | **미선언 (C4)** | — | 같은 사유. §15의 "app-launcher pill rows … hover/press opacity/scale" 문장은 그룹 서술이라 Motion rules에 남기고 이 행의 상태 treatment로 승격하지 않았다. |

interactive 6개 × 7상태 = 42행(실측 applicable 30 + not-applicable 12 = 42). `default`·`focus-visible`은 6개 전부 applicable. C3: "This is not a claim that state coverage is finished." 를 Components 머리에 명시했고 완료 주장 0건.

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 Principles 안팎을 불문하고 인과·해석·판단 문장마다 근거 class를 자문했다. 한정을 붙인 자리는 **17곳**(산출 `DESIGN.md` 실측 17회)이고 — `provenance.md`의 같은 문자열 1회는 색인 표 머리에서 조문을 인용한 것이지 한정 자체가 아니다 —, 한정과 구분되는 evidence-class 경계 문장 9곳은 provenance `Derived editorial inventory`에 별도 표로 색인했다 — 두 계열을 합산해 세지 않는다. 재독에서 **새로 잡아 고친 자리 4곳**: (a) Scope 2문단의 "only chromatic accent"를 무조건 단언에서 출처 귀속으로, (b) Foundations `Semantic color`의 "palest echo of the brand blue"를 출처 귀속으로, (c) Foundations `Shape`의 "Two ideas are mixed deliberately"에서 의도 귀속 부분에 B2a 완전형 한정 신설, (d) `Font evidence`의 Poppins-900 행을 sibling 관측 기반 서술에서 legacy가 스스로 적은 "pushed to 900" 기반 + B2a 한정으로 교체(sibling 구조 관측이 본문 사실로 넘어가는 것을 막기 위함, B1). Principles 밖에서 잡힌 자리: Scope 3문단, Primary tasks 선정, Distinctive traits 머리, Audience 그룹화, Foundations Shape·Elevation·Motion, Typography rules와 Font evidence, Components의 kind/applicability 판정, State record, Layout의 두 문단, Content & Locales의 voice 성격 규정.

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `grep -o … | wc -l`(파일별)과 `awk` 블록 카운트로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity, logo, `live-extract` 범위 문장, spacing, shadow, §14 상태, §11 서사, 닫는 주석). 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회, primitive type 4종 동수(button 5 · tab 1 · card 1 · listItem 1), lineHeight 비율 5종, §14 9행, voice sample 3건, sibling raw samples 19행, 한정 17회.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 토큰 **42종** (hex 10 · px 23 · rem 6 · ms 3 · pct 0) | 42/42 가 산출물에 존재 — 손실 0. |
| portable 본문의 토큰 발명 | 0건. 본문의 모든 hex/px/rem/ms가 legacy 토큰 집합의 부분집합이고, `%` 토큰은 legacy 0종·산출 doc 0종. sibling 전용 `0.15008px`·`50%`·`#eeeeee` 계열은 provenance에만 있다. |
| unitless lineHeight (A1a) | `1.00` `1.46` `1.11` `1.56` `1.50` 5종 전부 비율로 생존. px 변환 0건(원본이 스스로 적은 px 등가만 괄호 병기). |
| primitive type (A1b) | `Primitive type` 8행 = button 5 · tab 1 · card 1 · listItem 1 — legacy YAML 실측과 동수. |
| `[FILL IN]` | legacy 0건, 산출 0건. 신규 작성 없음. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 12행은 전부 역할 사유(목적지 링크 / dialog trigger / tab의 목적지 이동)로 닫혔다. |
| C3 | 완료 주장 0건. |
| D1a (원본에 없는 도메인을 미해상 목록으로 열거) | Governance `Recorded unresolved decisions` 6항은 전부 원본이 존재를 세운 값이다 — easing curve, hover/press opacity·scale, disabled opacity, skeleton pulse, in-place progress indicator 두께, XL 16px 컨테이너. 원본에 없는 도메인(native-app·help-center·authenticated 류)은 명사구로도 열거하지 않았다. |

## A5 / A5a — 발행 카피 보존과 그 분모

**게이트 기계 대조 (A5).** `--gate-only` 의 `coverage`는 `copy-loss` 검사가 **인용 문자열 201개 중 6개**만 대조했다고 보고한다(`compared: 6` / `candidates: 201`, 3.0%). 바늘은 연속 비라틴 런에서만 만들어지므로 이 브랜드 카피의 대부분(라틴)은 분모에만 들어간다. `verdict: PASS`는 **「대조한 바늘 중 잃은 것이 없다」**이지 카피가 보존됐다는 뜻이 아니다.

**손 스윕 (A5a).** `compared < candidates` 이므로 원본과 검증 sibling 양쪽에서 인용 문자열을 전수 추출했다 — legacy 201개 + sibling 122개. 그중 **브랜드가 발행한 문자열 62건**을 바늘로 선별해 산출 3파일 생존을 대조했다.

| 항목 | 수 |
|---|---|
| 추출한 인용 문자열 (legacy 201 + sibling 122) | 323 |
| 그중 발행 카피로 선별한 바늘 | **62** |
| 1차 대조에서 미생존 | **1** |
| 복원 후 재대조 미생존 | **0** |

바늘 62건의 구성: CTA·버튼 라벨 5 (`Contact us` · `문의하기` · `All products` · `Watch the Film` · `Open app launcher`) / 내비 라벨 7 (`Products` · `Technology` · `Blog & News` · `Careers` · `About us` · `제품` · `기술`) / 섹션 표제 3 (`The Science of Sound` · `Wherever Sound Goes` · `Our Milestone`) / 슬로건·미션·히어로 7 / 마일스톤 카피 12 / 제품·서비스명 11 / 파트너명 4 / 사명·문서 제목 4 / sibling 전용 형태 2 / 서사 수치 5 / §14 금지 예시 문자열 2.

**미생존 1건과 그 처분:** `Over 40 audio experts including 9 Ph.D` — §10이 대문자 O로 인용한 형태. 초안은 §11·주석의 소문자 형태(`over 40 audio experts…`)만 옮기고 §10의 evidence-framing 인용을 산문으로 압축했는데, A5는 대소문자 정규화도 손실로 본다. Content & Locales 첫 문단에 §10의 인용 형태를 그대로 복원했다(doc 1회). 나머지 61건은 1차 대조에서 이미 생존.

**바늘에서 제외한 것과 그 이유:** 카피에 대한 서술(`nav, milestone stats, blog cards`, `Top nav menu items (light surface)` 같은 legacy 자신의 `use:` 라벨), UI 메타(`<h1>` `<h2>` `<h3>` `<a>` `<button>`), 점 경로·메서드(`document.fonts` · `getComputedStyle` · `waitUntil: domcontentloaded`), 폰트 스택(`Poppins` · `Roboto` · `Noto Sans KR` · `swiper-icons` · `__Poppins`), CSS·토큰 이름(`prefers-reduced-motion: reduce` · `motion-fast` · `ease-enter` · `cubic-bezier(...)`), 라이브러리명(`Swiper`), 그리고 **원본이 스스로 제3자로 배제한 문자열**(getdesign.md 페이지 제목과 테마 hex, refero.design의 `Browse 2,000+` / `"Minimal Design / Clean SaaS"`). 이들은 발행된 적 없는 산문이거나 브랜드 문자열이 아니므로 바늘로 세지 않았다.
