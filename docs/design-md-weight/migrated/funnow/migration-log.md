# FunNow migration log

- Source: `web/references/funnow/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/funnow/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/funnow/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/funnow/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: consumer-tech(TW 라스트미닛 예약 마켓플레이스). 소비자 표면 2종과 머천트 SaaS 표면 1종은 서로 다른 증거 영역이라 값마다 표면을 붙였고, 두 영역이 갈리는 유일한 지점(radius 4px / 5px)은 병합하지 않고 도메인과 함께 남겼다.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`) | 분리 → provenance · 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# FunNow Design System`. `primary_color` `#ff5537`은 provenance Identity 표와 DESIGN.md Foundations 브랜드 표 양쪽. |
| YAML `logo.type: favicon` / `logo.slug` | 분리 → provenance · 옮김 → DESIGN.md Assets | 이중 목적지. 3rd-party 프록시가 아니라 사이트 자신의 `<link rel="icon">` CDN 자산이라 브랜드 자산으로 portable Assets에 남겼다(doc 1회 · provenance 2회). 517 B / HTTP 200 / Google 프록시 비교 / `fill="#FF5537"` 속성 문자열은 provenance `Logo decision`에만. |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested` | 분리 → provenance | freshness·증거 등급 원장(E1). 단, `live-extract`가 무엇을 덮는지(computed colour·type·spacing·radius·border·shadow)는 standalone 해석에 필요해 DESIGN.md Foundations `Motion` 머리에도 문장으로 남겼다 — 이중 목적지. |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance | 원문 그대로 인용 블록. 안의 값(`#ff5537` `#4dcbcb` `#5a69eb`, favicon fill 귀속, Vuetify/Material chrome, flat v-cards, 4px radius)은 전부 DESIGN.md Scope·Foundations·Components에 별도로 실려 있다. |
| YAML `tokens.colors` (**12키** — `grep -c` 아님, `awk`로 `colors:` 블록의 들여쓰기 4칸 키를 세어 12) | 옮김 → Foundations `Semantic color` | brand/action 2 (`primary` `on-primary`) / secondary accent 3 (`teal` `flash-indigo` `amber`) / neutral·surface 5 (`ink` `ink-pure` `muted` `canvas` `surface`) / tint 2 (`tint-peach` `tint-blush`) = 12. 네 표의 데이터 행 합계도 12(헤더 4행 제외). §2의 role 이름과 설명 문자열은 `Recorded use` 열에 보존. |
| §2 Material 87%-black `rgba(0,0,0,0.87)` | 옮김 → Experience `Scope` · Foundations `Semantic color` · Components `Hero Search Field` | 세 자리(doc 2회 + 컴포넌트 Text 행). §2가 `#252729`와 87%-black을 표면별로 나눠 둔 것을 병합하지 않고 "keep that split" 문장으로 유지. |
| YAML `tokens.typography.family` (`sans: "Helvetica Neue"`, `tc: "PingFang TC, Microsoft JhengHei"`) + §3 전체 스택(`Helvetica, Tahoma, Arial`, `PMingLiU`, WenQuanYi) | 옮김 → Typography & Assets `Family` | §3의 긴 스택이 YAML보다 넓어 §3 쪽을 정본으로 썼다. `PMingLiU`·`WenQuanYi` 각 doc 1회·provenance 1회. fallback을 브랜드 페이스로 제시하지 않는다는 경계를 `Font evidence`에 별도 행으로 남겼다. |
| YAML `tokens.typography` 7역할 (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 | 옮김 → Typography & Assets `Type roles` | A1a: `lineHeight` 5종(`1.22` `1.50` `1.41` `1.00` `1.30`)을 px로 바꾸지 않고 비율 그대로. 원본이 스스로 적은 px 등가(`44px`, `22.5px`)만 괄호로 병기. Badge 행의 `400–500`은 §3 표기(YAML은 500)이라 둘 다 살리려 §3 표기를 쓰고 컴포넌트 레코드에 12px/500·12px/400을 각각 남겼다. |
| §3 Principles 4항 | 옮김 → Typography & Assets `Typography rules` | B2a 완전형 한정 인접 배치. |
| YAML `tokens.spacing` 4키 (`xs: 2` `sm: 8` `md: 12` `base: 16`) + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout & Platforms 높이) | 이중 목적지. 4px Material 그리드, 관측 스케일 2/8/12/16, 패딩 표기 `0 8px / 0 12px / 0 16px`, 그리고 "높이가 진짜 리듬"(36px/40px/48px)까지 함께. |
| YAML `tokens.rounded` 2키 (`sm: 4` `md: 5`) + §5 Border Radius Scale | 옮김 → Foundations `Shape` | 4px는 소비자 제품, 5px는 events/merchant CTA로 도메인을 붙여 보존. "nothing rounder than 5px" 제약도 같은 절. |
| YAML `tokens.shadow` 2키 (`flat: "none"`, `raised: "Material elevation stack …"`) | 옮김 → Foundations `Elevation` (+ Components `Search / Primary CTA Button`) | 이중 목적지(둘 다 portable 본문). `rgba(0,0,0,0.2)` / `rgba(0,0,0,0.14)` 문자열 그대로, doc 2회. |
| §6 Depth & Elevation 3행 표 + Shadow Philosophy | 옮김 → Foundations `Elevation` | 3행 그대로. `rgba(0,0,0,0.4)` scrim은 Elevation과 Assets 2자리에 값으로. Philosophy의 인과("framework ships elevation, product flattens it")는 원본 주석이 스스로 editorial reading이라 밝힌 문장이라 B2a 완전형 한정을 인접에 붙였다. |
| YAML `tokens.components` 8개 (`type: button` ×3, `badge` ×2, `card` ×1, `tab` ×1, `input` ×1 — `grep -o 'type: [a-z]*' \| sort \| uniq -c` 실측) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 `Primitive type: \`button\`/\`badge\`/\`card\`/\`tab\`/\`input\``으로 보존(산출물 실측 button 3 · badge 2 · card 1 · tab 1 · input 1 = 원본과 동수). `type: favicon` 1건은 컴포넌트가 아니라 `logo.type`이라 위 logo 행에서 처리. |
| §4 Buttons / Badges / Cards & Containers / Tabs / Inputs | 옮김 → Components & States | 8개 컴포넌트 레코드. 타일 측정 `360×135` / `233×146`도 보존. |
| §4 Navigation (흰 toolbar, 좌측 오렌지 로고타입, city selector 17px/400 + Material ripple, 우측 클러스터, 40px booking parameter 텍스트 버튼 행) | 옮김 → Components & States `Header and booking-toolbar record` (+ Typography & Assets `Assets` 로고타입 색) | YAML 컴포넌트가 아니라 배치 서술이라 별도 레코드로. 로고타입 오렌지-레드는 Assets에도 — 이중 목적지. |
| §5 Layout Principles (Grid & Container, Whitespace Philosophy) | 옮김 → Layout & Platforms | 흰 toolbar/중앙 컬럼, 예약 퍼널이 곧 hero, 캐러셀("Top Brands", "Trending Themes")과 카드 리스트, 카테고리 페이지 구성, 회색 거터가 보더를 대신함, 64px급 toolbar. 해석 3건("density over air", 회색 거터가 보더·그림자를 대신한다는 인과, 얇은 chrome이 세로 공간을 리스팅에 쓴다는 읽기)에는 불릿 바로 뒤 문단에 B2a 완전형 한정을 인접 배치. |
| §7 Do 7항 | 옮김 → Experience `Application rules` | 산출물 실측 7항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. |
| §7 Don't 6항 | 옮김 → Experience `Avoid` | 산출물 실측 6항. 이유까지 원문대로. |
| §8 Responsive Behavior (Breakpoints 3행, Touch Targets, Collapsing Strategy, Image Behavior) | 옮김 → Layout & Platforms `Responsive behavior` | 3행 그대로(`<600px` / `600–960px` / `960–1440px`). 터치 타깃·접힘·이미지 거동 전부 보존. |
| §9 Agent Prompt Guide — Quick Color Reference (불릿 9행 · hex 10개, `awk` 블록 + `grep -o` 실측) | 삭제 | 같은 값의 도구용 재진술. hex 10개 전부 Foundations `Semantic color`에 role·value·use로 이미 실려 있음(실측 대조: `#ff5537` `#5a69eb` `#4dcbcb` `#ffb107` `#f4f4f5` `#ffffff` `#252729` `#a7a7a9` `#ffd8d1` `#ffeeeb`). |
| §9 Example Component Prompts 5개 · Iteration Guide 6항 | 삭제 + 고유값 2건은 이동(A3) | 복붙용 프롬프트 포장과 도구별 workflow는 받을 슬롯이 없으므로 삭제. 다만 §9에만 있던 렌더 가능한 값 2건은 옮겼다 — filter tab bar의 `white background`(legacy 306행, 파일 전체에서 1회) → Components `Header and booking-toolbar record`; 텍스트 버튼의 `no border`(legacy 307행, 파일 전체에서 1회) → Components `Quiet Header Text Button`. 나머지 §9 값(4px, 40px, 17px, 16px, `#ff5537` 등)은 §2·§3·§4·§5에 이미 존재. |
| §10 Voice & Tone — 성격 규정 문단 + Context/Tone 6행 표 | 옮김 → Content & Locales | 표 6행(헤더 제외) 그대로. voice 해석("spontaneous, friendly, deal-smart", "energy is part of the brand")은 원본 주석이 editorial reading이라 밝힌 계열이라 B2a 완전형 한정을 표 바로 앞에 붙였다. |
| §10 Voice samples 5건 (verbatim) | 옮김 → Content & Locales | A5: 5건 전부 바이트 그대로. TC 2건("線上一鍵預訂，線下即刻出發！", "尖峰有優惠，離峰更划算！")은 원문이 라벨이고 영문은 읽기 보조라고 명시했으며, 원본이 붙여 둔 영문 대역("One-click booking online, head out instantly offline!", "Deals at peak, even better off-peak!")도 verbatim 유지. `*(verified live 2026-06-10)*` / `*(fetched 2026-06-10)*` 표기만 provenance Freshness·Sources로 분리. |
| §10 Forbidden register 4항 | 옮김 → Content & Locales | 원문 그대로("plan your itinerary" 포함). |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) | 창업(Taipei, November 2015), TK Chen (陳庭寬), Zoek / "© Zoek", 亞洲首款主打「最後一分鐘」的預訂平台, "Last minute unlimited", 即時預訂都會享樂的第一選擇, 尖峰有優惠，離峰更划算！, 免排隊、免打電話, 隨心所欲享受生活, $5M Series A 2018 / $15M Series B 2021 / 2023 Eatigo 합병 / HK·말레이시아·일본·SEA 확장까지 보존. 증거 등급은 원본 주석대로 3분할해 본문에 적었다 — 브랜드 발행 슬로건·미션 / 파라프레이즈된 창업자 스토리 취재 / 3자 언론 기록. 출처 URL·매체명·날짜는 provenance `Narrative sources`로 분리(이중 목적지). |
| §11 HTML 주석의 미션 전문 "我們希望讓你透過簡單、可靠的預訂，隨興成行，達到隨心所欲享受生活的願景。" | 옮김 → Experience `Scope` (+ provenance `Narrative sources`) | 이중 목적지. A5: 비라틴 원문 그대로. |
| §12 Principles 5항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출물 실측 5항. B2a 완전형 한정을 머리에 배치하고, 원본 주석이 editorial이라 지목한 "off-peak is a win, not a discount bin"을 그 한정 문장에서 이름으로 지목했다. |
| §13 Personas 4인 (林佳穎 27 台北 / Marcus Tan 33 Kuala Lumpur / 張媽媽 & family 45 宜蘭 / Kenji 38 Okinawa) | **삭제 (sidecar 재수록도 안 함)** | D2. 원본 §13 머리글과 닫는 주석이 둘 다 fictional archetypes이며 이름은 illustrative라고 명시. 이름·나이·도시·전기 전부 삭제했고, provenance에도 옮기지 않았으며 인구통계 세그먼트 목록도 두 파일 어디에도 두지 않았다(provenance `Omission ledger` 해당 행이 이 처분을 기록). Experience `Audience`에는 라이브 표면 2종이 독립적으로 세우는 이해관계자 그룹(소비자 / 머천트)만 남겼다. |
| §14 States 9행 | 옮김 → Components & States `State record` + 컴포넌트별 applicability 사유 | 이중 목적지(둘 다 portable 본문). 9행 값·카피 그대로(산출물 실측 9행). 같은 내용을 근거로 6개 interactive 컴포넌트의 disabled/loading/error/success 사유를 채웠다 — 예: orange CTA의 opacity 페이드(disabled), CTA 라벨을 대체하는 인라인 스피너(loading), CTA 위 인라인 메시지(error), 예약 확인 화면(success). graph 위임 없음. |
| §14 Empty / Loading / Error / Success / Skeleton / Disabled의 **값 없는 서술**(muted sold-out state, flat pulse, opacity fade) | 옮김 → State record · 이름만 → Governance `Recorded unresolved decisions` | 이중 목적지. 서술은 본문에 남기고, 값이 없다는 사실만 Governance에 값 없이 이름으로. 그럴듯한 값으로 채우지 않음. |
| §15 Durations 3행 (`motion-fast` 100ms / `motion-standard` 200ms / `motion-slow` 300ms) | 옮김 → Foundations `Motion` | 3행 그대로. 규칙집 E항(제약 5)의 삭제 범위는 **무출처 커브뿐**이고 duration은 브랜드마다 다르므로 보존. 다만 sibling이 transition/animation/duration/easing 샘플을 0건 기록했으므로 증거 등급 한정(B2a 완전형)을 이 절 머리에 붙였다. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-standard` / `ease-decelerate` / `ease-accelerate`와 각 용도 3행 보존. |
| §15 Easings — 커브 값 3개 (`cubic-bezier(0.4, 0.0, 0.2, 1)`, `cubic-bezier(0.0, 0.0, 0.2, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. sibling의 method·raw samples 어디에도 transition·animation·duration·easing 관측이 없고, 세 값 모두 `spec/omd-v0.1.md` 265–268행의 예시 표(그 파일이 스스로 "비브랜드 구현 기본값"이라 규정하고 reference로 옮기는 것을 금지한 자리)와 동일하다. 원장 행에 세 값을 그대로 적었으므로 값 자체는 산출물에 살아 있다. |
| §15 Motion rules 4항 (Material 상속·ripple·탭 전환·캐러셀 스냅 / 펄스는 되고 스크롤 애니메이션은 안 됨 / no spring or bounce / `prefers-reduced-motion: reduce`) | 옮김 → Foundations `Motion` | 4항 그대로. reduced-motion 계약 포함. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance | 원본에는 승격 조건 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 이 전문이 산출 DESIGN.md에 실제로 2회 존재함을 `grep -o` 로 확인한 뒤 이 행을 적었다. |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하·프레임워크 기술 | 옮김 → Experience `Scope` | 세 표면(homepage / category listing / merchant)을 분리 명시하고 값은 표면에 붙여 뒀다. |
| §1 인과·해석 문장("traffic-light economy of color", "utilitarian, app-like crispness rather than an editorial mood", "a tool you operate at 9pm … speed-first, spontaneity-flavored") | 옮김 → Experience `Scope` 3문단, 한정 부착 | B2a 완전형 인접 배치: "Reading that colour distribution as a 'traffic-light accent economy' … are derived editorial implementation inferences from the verified surfaces; they are not FunNow-authored or a separately published UI specification." 값 손실 없음 — 같은 관측(색 배치, 4px, flat 타일, 15px 본문)은 Foundations·Typography·Components에 값으로 남아 있다. 원본 닫는 주석이 "traffic-light accent economy"를 스스로 editorial reading으로 지목한 사실도 본문에 적었다. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 산출물 실측 8항. 항목 안에 든 해석(Material conservatism, rationed, traffic-light, density as a feature)에 B2a 완전형 한정을 머리에 배치. |
| §4 하단 footer 블록 (**Verified** / Tier 1 5개 URL / Tier 2 attempts / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). Tier 1 5개 URL과 각 URL의 원문 범위 주석, Tier 2 두 시도의 결과 문자열("No designs found", 무관 브랜드 목록)까지 provenance `Sources`에 보존. |
| Sibling `.verification.md` — Proof 머리말·method·18 raw samples·Country sources 4개·Tier 2 attempts·Conflict matrix 3행·Logo decision | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건, 구조 분류 승격 0건**(B1). sibling 전용 값 `88px` `46px` `38px` `128px`은 산출 DESIGN.md에서 각각 0회임을 실측했고, `36px`·`40px`은 legacy가 세운 컨트롤 높이로만 등장한다. sibling raw samples 18행은 provenance에 18행으로 보존(실측 18 = 18). |
| Sibling 전용 발행 라벨 `"Get Started"` · `"FunNow Booking — Help you stay on top"` · `"Taipei｜TaoyuanHot Spring"` · `"FunNow｜生活玩樂誌"` | 분리 → provenance (바이트 그대로) | A5는 sibling이 측정 대상으로 명기한 문자열에도 걸리므로 4건 모두 바이트 그대로 보관. legacy 본문이 스스로 담은 라벨만 portable 본문에 올렸다. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. 한정을 붙인 자리 11곳과, 한정과 구분되는 evidence-class 경계 문장 6곳을 provenance `Derived editorial inventory`에 색인해 두었다. Principles 밖에서 잡힌 자리: Scope의 "traffic-light" 3문단, Distinctive traits 머리, Audience의 그룹 재진술, Foundations Elevation의 "framework ships elevation" 인과, Foundations Motion의 시스템 레벨 해석, Typography rules, Components의 kind/applicability 판정, Layout의 "density over air", Content & Locales의 voice 성격 규정과 tone 표.

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `grep -o … | wc -l`(파일별)과 `awk` 블록 카운트로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity, logo, `live-extract` 범위 문장, spacing, shadow, scrim, 로고타입 색, §14 상태, §11 서사, 미션 전문). 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회, primitive type 5종 동수, lineHeight 비율 5종, 비라틴 needle 12건, §14 9행, voice sample 5건.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 토큰 38종(hex 11 · px 23 · ms 3 · pct 2) | 38/38 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. provenance/log까지 합친 대조도 동일. |
| portable 본문의 토큰 발명 | 0건. 본문의 모든 hex/px/ms/pct가 legacy 토큰 집합의 부분집합. |
| unitless lineHeight (A1a) | `1.22` `1.50` `1.41` `1.00` `1.30` 5종 전부 비율로 생존. px 변환 0건. |
| primitive type (A1b) | button 3 · badge 2 · card 1 · tab 1 · input 1 — legacy YAML 실측과 동수. |
| A5 비라틴 (게이트 바늘) | 12/12 생존. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문·주석과 sibling에서 발행 문자열 **39건**을 추출해 산출 3파일에 대조 — 라틴 27건(`Available now` · `Book For 06:00` · `Flash Sales Now` · `06:00 Flash Sale` · `Download App` · `Login / Sign Up` · `Search for products or locations` · `All` · `Beitou Hot Spring Hotel` · `Jiaoxi Hot Spring Hotel` · `Top Brands` · `Trending Themes` · `Reach Out to Us` · `Grow with Us` · `Help you stay on top` · hero H1 · hero H2 · section heading · `Last minute unlimited` · `© Zoek` · `Category / Now / Date / Time / Pax` · `Error occurred` · `v-card--flat` · `plan your itinerary` · 영문 대역 2건 · `the first choice for instant booking of urban pleasures`), 비라틴 8건, sibling 전용 4건(`Get Started` · `FunNow Booking — Help you stay on top` · `Taipei｜TaoyuanHot Spring` · `FunNow｜生活玩樂誌`). 1차 대조에서 영문 대역 2건이 의역으로 바뀐 것을 발견해 verbatim으로 복원했고, 재대조 결과 **미생존 0건**. |
| `[FILL IN]` | legacy 0건, 산출 0건. 신규 작성 없음. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 8행은 전부 역할 사유(destination link / picker·auth 진입 / tab의 질의 변경)로 닫혔다. |
| C3 | "This is not a claim that state coverage is finished." 를 Components 머리에 명시. 완료 주장 0건. |
