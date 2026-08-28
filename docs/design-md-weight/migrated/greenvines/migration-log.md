# Greenvines migration log

- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- Source: `web/references/greenvines/DESIGN.md` (legacy, omd 0.1) — not modified. SHA-256 `710c83ec06c6aaf2b5c1c7fbc95b65343a9490398fe6bd9c2870a30e5ccb39ef`
- Sibling: `web/references/greenvines/.verification.md` — **adopted as evidence grading only**. Detail in provenance `Sibling verification file (E2)`. SHA-256 `a943c9a31ee787818837bab7c167dfd67eab060399a9542306296579370b00c9`
- Destination: `docs/design-md-weight/migrated/greenvines/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/greenvines/provenance.md`
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 조건 5 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: `scripts/design-md-core.cjs` `inspectDesignMd` → `format: core-v2` · `cleanTop: true` · `level: portable-core` · `portable_core: true` · `reasons: []` · placeholder 0
- 게이트: `node test-v2/tools/migrate-reference.mjs --brand greenvines --gate-only` → `verdict: PASS`, `problems: []`, `copy-loss` coverage 33/181. **이 PASS는 적합성 증거가 아니다.** A5a 손 스윕 분모는 아래 42/42.
- 도메인: TW 클린뷰티 이커머스의 **라이브 웹 3표면**(homepage / product / brand-story) + philosophy WebFetch 2면 + 브랜드 소유 블로그. 발행 1차 디자인 시스템 문서 없음.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a).

## 이 브랜드의 갈림길 세 개

1. **§14·§15는 원본이 editorial이라고 적는다.** 닫는 주석이 §1–9(라이브 인스펙트), §10(verbatim), §11(브랜드 스토리·benefit report), §13(가상)에 출처를 배정하고, §14 States와 §15 Motion은 「editorial extrapolations … design guidance, not measured values」라고 표시한다. 두 절은 본문에 보존하되(A2) 각각 인접에 B2a 완전형 한정을 붙였다. 삭제는 무출처 커브 3개뿐이다.
2. **로고가 브랜드 자산이 아니다.** frontmatter `logo.slug`가 Google favicon 프록시이고, sibling이 그 서비스를 TW brand-owned 증거에서 제외한다. portable Assets에 브랜드 자산으로 올리지 않고 provenance `Identity`/`Logo decision`에 원장으로 남겼다.
3. **sibling 수치가 원본과 어긋난다.** offer-link `46px` / `1px` border vs 원본 accent 48px / `2px`; helper `15px` / `28px`(원본 역할만); body `14px / 20px` vs 토큰 `body` 1.43. 원본 수치를 본문에 두고 sibling 수치는 provenance에만 둔다(B1). sibling viewport `1440×900`을 본문 측정으로 쓰지 않는다.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`) | 분리 → provenance · 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Greenvines Design System`. `綠藤生機`는 DESIGN.md `Scope` 등 · provenance Identity/raw samples. `primary_color` `#002d18`도 양쪽(DESIGN 28 · provenance 8 — `grep -oF`). |
| YAML `logo.type: favicon` / `logo.slug` | 분리 → provenance (**브랜드 자산으로 승격하지 않음**) | Google favicon 프록시 URL. sibling이 이 서비스를 TW brand-owned에서 제외. portable Assets에는 그 경계 문장만. slug `s2/favicons`는 DESIGN.md **0** · provenance `Identity` 1. |
| YAML `verified` / `added` / `omd: 0.1` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). `live-extract`는 DESIGN.md **0** · provenance `Identity` 1. |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance | 원문 그대로 인용 블록. 안의 값(`#002d18`, `#c84600`, 0px, weight 100, shadowless)은 DESIGN.md Foundations·Components에 별도로 실려 있음을 같은 절에 대조해 적었다. |
| YAML `tokens.colors` **13키** (`primary` `accent` `canvas` `sage` `sage-pale` `sage-button` `green-soft` `ink-alt` `stepper-grey` `footer-heading` `footer-muted` `helper-grey` `on-primary`) | 옮김 → Foundations `Semantic color` | 세 표. hex 전량 DESIGN.md에 존재(`#002d18` 28 · `#c84600` 10 · `#ffffff` 9 · `#9caba3` 7 · `#e6eae8` 11 · `#ced5d1` 2 · `#3b5647` 1 · `#0a2d1b` 2 · `#f1f1f1` 2 · `#9b9b9b` 4 · `#aaaaaa` 2 · `#666464` 1). `canvas`와 `on-primary`는 같은 hex를 공유하되 키를 합치지 않음. §2 role 이름·용도를 `Recorded use`에 보존. |
| §2 `#e67600` (토큰 키 없음) | 옮김 → Foundations `Semantic color` + Governance unresolved | 이중 목적지(둘 다 portable). 희귀 promotional ribbon 관측. 두 번째 accent 역할로 승격하지 않음. DESIGN 3. |
| YAML `tokens.typography.family` 3키 + §3 Font Family | 옮김 → Typography & Assets `Family` · `Font evidence` | `gv` / `"Noto Sans TC", 微軟正黑體, serif` / `"Helvetica Neue", Helvetica, Arial, sans-serif`. fallback을 브랜드 페이스로 제시하지 않는다는 경계를 `Family` 말미에 남겼다. `Insider-Poppins`는 declared-only. |
| YAML `tokens.typography` **10역할** (size / weight / **unitless** lineHeight / tracking / use) + §3 Hierarchy 표 10행 | 옮김 → Typography & Assets `Type roles` | A1a: `1.10` `1.23` `1.25` `1.30` `1.36` `1.60` `1.20` `1.43` `1.40` `2.40`를 px로 바꾸지 않음. 원본이 적은 px 등가만 괄호 병기. `body` 1.43과 `button` 1.40은 두 키(A4). tracking `2px` / `1px` 보존. 표의 Sub-heading weight `100–400`는 토큰 키 100 옆에 병기. |
| §3 Principles 4항 | 옮김 → Typography & Assets `Typography rules` | 산출 4항. 측정치를 원칙으로 읽는 행위에 B2a 완전형 한정을 절 머리에 인접 배치. |
| YAML `tokens.spacing` **8키** (`xs:4 sm:8 md:12 base:15 lg:20 xl:32 xxl:50 section:80`) + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout 12px 20px / 50px / 15px 패딩) | 이중 목적지. 스케일 8값이 Spacing 슬롯 한 줄에 키 경로로 남아 있음. `section` 80을 Shape의 80px cart 높이와 합치지 않음. |
| YAML `tokens.rounded` **2키** (`none:0 full:9999`) + §5 Border Radius Scale | 옮김 → Foundations `Shape` | 0 / 9999 / `9999px`. 채팅 FAB `50%`는 Shape와 Chat FAB에 이중 목적지(DESIGN `full: 9999` **1** · `9999px` **1** · `50%` **2**). `grep -oF '9999'`는 `9999px` 안의 부분문자열까지 잡아 2가 되나, 키 경로 `full: 9999`는 1이다. |
| YAML `tokens.shadow.none: "none"` | 옮김 → Foundations `Elevation` | 정확 문자열 `box-shadow: none`은 DESIGN **2**(Scope · Elevation) · provenance **1**(Evidence class of the legacy sections — raw samples는 `box-shadow \`none\`` 콜론 없는 표기라 이 문자열이 아니다). |
| §6 Depth & Elevation 3행 표 + Shadow Philosophy | 옮김 → Foundations `Elevation` | 3행 그대로. 관측(`box-shadow: none`)은 사실로, 그 뒤 인과(daylight-into-foliage, printed-rather-than-layered)는 B2a 완전형 한정을 같은 문단에 붙여 보존. |
| YAML `tokens.components` **8개** (`type: button` ×5, `input` ×1, `card` ×1, `listItem` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 `Primitive type: \`button\`/\`input\`/\`card\`/\`listItem\``으로 보존. 산출 `Primitive type` button 5 · input 1 · card 1 · listItem 1 = 원본 8. |
| §4 Buttons / Inputs / Cards / Navigation / Footer / Chat FAB | 옮김 → Components & States | 8개 harvested + Chat FAB·Pale Surface Band·Photo Overlay Card·Mega Menu Product Link. bg/fg/border/radius/padding/height/font/use와 발행 라벨을 원문대로. 17px / 400 섹션 헤드(更多綠藤, 加入綠藤)는 Mega Menu 레코드에 보존(A3). |
| §9 Quick Color Reference · Example Component Prompts 5개 · Iteration Guide 8항 | 삭제 | 도구용 재진술·복붙 프롬프트. 삭제 전 §9 hex·px·라벨을 나머지 파일과 대조했고 **고유 렌더 필드 0건**(A3 해당 없음). |
| §14 States **10행** | 옮김 → Components `State record` (+ 컴포넌트별 applicability 사유) | 이중 목적지(둘 다 portable 본문). 10행 값·카피 그대로. 원본 닫는 주석이 이 절을 editorial이라고 표시하므로 표 바로 앞에 B2a 완전형 한정. `所有產品` DESIGN 1. graph 위임 없음. |
| §15 Durations 3행 (`motion-fast` 150ms / `motion-standard` 250ms / `motion-slow` 400ms) | 옮김 → Foundations `Motion` | 3행 그대로. 규칙집 삭제 범위는 **무출처 커브뿐**. 절 머리에 B2a 완전형 한정. DESIGN `150ms` 1 · `250ms` 1 · `400ms` 1. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-standard` / `ease-enter` / `ease-exit`와 각 용도 3행 보존. |
| §15 Easings — **커브 값 3개** (`cubic-bezier(0.25, 0.1, 0.25, 1)`, `cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. sibling raw samples에 transition·animation·duration·easing 관측 0. `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md` 예시 표와 동일. DESIGN `cubic-bezier` **0** · provenance 3. |
| §15 Motion rules (breath/bounce, outline hover, mega-menu fade, photography crossfade, no spring, `prefers-reduced-motion: reduce`) | 옮김 → Foundations `Motion` | 원문 그대로. `prefers-reduced-motion` DESIGN 1. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance | 원본에는 승격 조건 문장이 없다. 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트는 DESIGN.md **2회**(Foundations `Motion` · Governance `Recorded unresolved decisions`). 부분 확인 배제 문장(`partial confirmation`)은 DESIGN.md **1회**(Foundations `Motion`만). 게이트+배제 전문을 2회라고 적지 않는다. |
| §1 Visual Theme & Atmosphere — 표면 기술·색·타입·기하 | 옮김 → Experience `Scope` 2–3문단 | 값은 전부 보존하고 표면 3종에 붙여 뒀다. |
| §1 인과·해석 문장(botanical manifesto / writes in the color of leaves / green is the voice / apothecary / 減法 as typography) | 옮김 → Experience `Scope` 2–3문단, 한정 부착 | B2a 완전형 인접 배치. |
| §1 Key Characteristics **8항** | 옮김 → Experience `Distinctive traits` | 산출 8항. 항목 안 해석에 B2a 완전형 한정을 머리에 배치. |
| §5 Layout Principles (Grid, Whitespace Philosophy, 12/20/50/15/64) | 옮김 → Layout & Platforms | 7개 불릿 + 해석 문단. subtraction-as-layout / photography-as-container 읽기에 B2a. |
| §8 Responsive Behavior (Breakpoints 3행, Touch Targets 3항, Collapsing 4항, Image Behavior 2항) | 옮김 → Layout & Platforms | 3행 그대로(`<768px` / `768–1200px` / `>1200px`, `1440px-class`). sibling `1440×900`은 DESIGN **0**. 절 전체에 B2a 완전형 한정. |
| §7 Do **8항** | 옮김 → Experience `Application rules` | 산출 8항. Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 인접 배치. |
| §7 Don't **8항** | 옮김 → Experience `Avoid` | 산출 8항. B2a 완전형 한정을 절 머리에 인접 배치. |
| §10 Voice & Tone — 성격 규정 + Context/Tone **7행** 표 | 옮김 → Content & Locales | 표 7행. voice 해석에 B2a 완전형 한정을 표 바로 앞에. |
| §10 Voice samples **6건** (verbatim) | 옮김 → Content & Locales | A5: 6건 전부 바이트 그대로. 중국어 원문이 라벨이고 영문 병기는 읽기 보조. freshness 표기는 provenance로 분리. |
| §10 Forbidden register | 옮김 → Content & Locales | 원문 그대로. `限時搶購` DESIGN 1. 설득 성격 규정에 B2a. |
| §11 Brand Narrative | 옮김 → Experience `Scope` 4문단 (+ provenance `Evidence class`) | 이중 목적지. 2010 Taipei 창업, 鄭涵睿/Harris Cheng, 廖怡雯/Patricia Liao, 許偉哲/Wei-Che Hsu, NT$5 million, 林碧霞博士/Dr. Lin Bi-Hsia, 活芽菜, 2015 B Corporations, Best for the World, 2024 永續報告書 CEO, 1% for the Planet, 空瓶回收計畫, 창립 질문 원문, 3,200+, FAITH, 「我們並不盲目信仰天然…」. 닫는 주석 전용 항목(ex-UBS/ABN AMRO, 公平貿易辣木油, 98%+ natural origin, 66,000+ letters, DBS Asia Business Impact Award)는 DESIGN **0** · provenance Evidence class mention. |
| §12 Principles **5항** (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출 5항. B2a 완전형 한정을 머리에 배치. |
| §13 Personas — fictional archetypes, §13, D2 삭제 | **삭제 (sidecar 재수록도 안 함)** | D2·D2a. 원본 §13 머리글과 닫는 주석이 fictional archetypes이며 이름은 illustrative라고 명시. 이름·나이·도시·전기는 승격도 원장 재수록도 하지 않는다(무식별 표기). Experience `Audience`에는 원본이 적은 그룹 2종만 그룹 단위로 남겼고, 그 그룹을 audience로 읽는 행위에 B2a 한정을 붙였다. 식별 문자열은 DESIGN·provenance **0**. |
| 하단 footer 블록 (**Verified** / Tier 1 4개 URL / Tier 2 2개 시도 / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). |
| 닫는 HTML 주석 (Philosophy Layer 출처 배정) | 분리 → provenance `Evidence class` · 옮김 → DESIGN.md 각 절의 한정 | 이중 목적지. §1–9 / §10 / §11 / §13에는 출처를 배정하고 §14·§15는 editorial이라고 표시한 사실을 provenance 표로 옮기고, 그 결과인 한정 문장을 해당 절 인접에 배치했다. |
| Sibling `.verification.md` — Proof 머리말·method·raw samples·Conflict matrix·Logo verification | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건**(B1). sibling 전용 `1440×900` · `46px` · `活萃三日精華雙入組` · 전체 `document.title`은 DESIGN 각 **0**. |

## State applicability 판정 근거 (C1·C2·C4)

원본에는 컴포넌트별 상태 관측이 없다(§14는 시스템 레벨 editorial). 따라서 applicability는 **역할 의미**로만 판정했고, 미해상 시각 treatment는 값만 생략했다(C1). `not captured` / `not named`를 사유로 쓴 행은 0건이다. state coverage 완료를 주장하지 않는다(C3).

| 컴포넌트 | Kind | loading / error / success | 의미상 사유 |
|---|---|---|---|
| Outline CTA | interactive (`button`) | not-applicable | 深入了解 / 閱讀文章 / 純淨保養組合으로 가는 목적지. 스스로 커밋하는 연산이 없다. C2가 destination link를 이 부류로 든다. |
| Accent Fill CTA | interactive (`button`) | not-applicable | sustainability / 88-折 offer로 가는 목적지. |
| Add-to-Cart | interactive (`button`) | applicable | 加入購物車는 장바구니 커밋. §14가 loading(bar holds size)과 success(inline confirmation)를 이 역할에 둔다. 시각값은 해당 행에 있고 error는 역할만 열고 treatment는 State record. |
| Quantity Stepper | interactive (`button`) | not-applicable | +/− 수량 증감. 카트·폼을 커밋하지 않는다. |
| Newsletter Submit | interactive (`button`) | applicable | 訂閱電子報는 구독 커밋. §14 success가 폼을 확인 줄로 교체한다. |
| Newsletter Field | interactive (`input`) | loading/success not-applicable · error applicable | 필드는 값을 담는다. 진행·성공은 submit이 보고하고, §14 form validation은 필드 아래 메시지. |
| Chat FAB | interactive (harvested type 없음) | not-applicable | 고객 채팅을 여는 dialog trigger. C2가 이 부류를 든다. |
| Sage Section Band | kind 생략 (`card`) | map 없음 | C4. `type: card`만 있고 인터랙션 처리가 없다. |
| Pale Surface Band | kind 생략 | map 없음 | C4. harvested type 없고 인터랙션 처리 없음. |
| Photo Overlay Card | kind 생략 | map 없음 | C4. 제목만 기록. |
| Mega Menu Product Link | interactive (harvested type 없음) | not-applicable | 제품 목적지. |
| Footer Link | interactive (`listItem`) | not-applicable | footer 목적지 링크. |

DESIGN `loading \| applicable` **2**(Add-to-Cart · Newsletter Submit만). `loading \| not-applicable` **7**.

## F1 — B2a 스캔

본문 완성 후 DESIGN.md를 처음부터 다시 읽었다. Principles 안팎을 가리지 않고 인과·해석·판단 문장마다 근거 class를 물었다. 편집 해석이면 인접에 완전형 한정을 붙였다.

실측: `derived editorial implementation inference` DESIGN **26** = `not Greenvines-authored` **26** = `separately published UI specification` **26** = provenance inventory 데이터 행 **26**. provenance의 같은 절 문자열 2회는 이 원장의 인용·계수 문장이지 portable 한정이 아니다.

1. Scope 미조시 표면 프록시 거부
2. Scope 표면 읽기(botanical manifesto / color of leaves / green is the voice)
3. Scope 타입=減法 / apothecary
4. Scope 「design system *is* the philosophy」
5. Primary tasks 선정
6. Audience 그룹 읽기
7. Distinctive traits 안의 성격 규정
8. Principles 5항 + UI implication
9. Application rules (Do)
10. Avoid (Don't)
11. Semantic color 역할 명명과 읽기
12. Shape 0px / chat-only curve
13. Elevation daylight-into-foliage / printed
14. Motion 절 전체(원본이 editorial이라고 표시)
15. Typography rules 4항
16. Assets 사진=브랜드 텍스처
17. Components kind/applicability 판정
18. State record 10행
19. Layout subtraction-as-layout
20. Layout responsive(단일 데스크톱 패스)
21. Content voice 성격
22. Forbidden register 성격
23. Semantic color `#e67600` 두 번째 accent 역할 보류
24. Spacing 슬롯 ≠ radius scale
25. Font evidence 여섯 행 분류
26. Family fallback 규칙

Greenvines는 발행된 1차 디자인 시스템 문서(Pajamas형)가 없으므로 B2a 예문의 「separately published UI specification」 전제가 성립한다. 예문을 그 브랜드에 맞게 `Greenvines-authored`로만 닫았다.

스캔에서 고친 것: Scope ¶1의 `retail counter` / `account screen` / `checkout step`는 원본이 세우지 않은 도메인이라 D1로 빼고 「surface the source did not inspect」로 좁혔다. sibling `1440×900`을 Layout 본문에 넣었던 문장은 캡처 맥락이라 본문에서 제거하고 provenance에만 둔다.

## F2 — E2 대조

로그 각 행을 쓰기 전에 해당 값이 어느 파일 어느 절에 있는지 `grep -oF`로 확인했다. 기억으로 쓰지 않았다.

이중 목적지(E2a)로 확인한 것:

- `#002d18` DESIGN 28 · provenance 8
- `#c84600` DESIGN 10 · provenance 7
- `綠藤生機` DESIGN · provenance (Identity/raw samples/title)
- `box-shadow: none` DESIGN 2 · provenance 1 (Evidence class; raw samples는 콜론 없는 `box-shadow \`none\``)
- `full: 9999` DESIGN 1 · `9999px` DESIGN 1 · `50%` DESIGN 2 (Shape · Chat FAB)
- B3 다섯 종류 DESIGN 2 · 부분확인 배제 DESIGN 1
- 발행 카피 6건(「沒有減法，何來精華」 DESIGN 3 · 「現在，保養從減法開始 #二減一加」 2 · 「超過兩萬則真實好評，23 款純淨保養洗沐產品」 2 · `More is Less. 多，即是少。` 1 · 「讓肌膚熟悉的，應該純淨」 1 · `The more we know, the less we need.` 1)
- §11 2010/2015/NT$5 million/鄭涵睿/廖怡雯/許偉哲/林碧霞博士/活芽菜/B Corporations/3,200+/FAITH DESIGN 각 ≥1

허위 이중 목적지로 쓰지 않은 것:

- `live-extract` DESIGN **0** — provenance만
- favicon slug URL DESIGN **0** — provenance만
- sibling `1440×900` / `46px` / `活萃三日精華雙入組` DESIGN **0**
- 닫는 주석 전용 `66,000+` / `公平貿易辣木油` / `DBS Asia Business Impact Award` DESIGN **0**

준수 주장(E2c): "B3 유지"를 적지 않는다. 본문이 담고 있는 것은 다섯 종류+게이트 2회와 부분확인 배제 1회다. "B2a 26=26"은 위 실측과 같다.

D2a: §13 삭제 행은 인원·필드 종류만 적는다. 이름·나이·도시를 Item에 옮기지 않았다. DESIGN·provenance에서 해당 식별 문자열 0.

E2d: "이 파일에 없다"고 쓰면서 같은 행에 그 항목을 나열하지 않았다. mention과 use를 갈라 적었다. sibling-only 표의 부재 주장은 portable body를 분모로 하고, 항목 자체는 이 원장에 보관한다.

## A5a — 바늘 밖 발행 카피 손 대조

게이트 `copy-loss`의 `compared < candidates`가 예상되므로, 원본과 sibling에서 브랜드가 발행한 문자열을 손으로 추출해 산출 3파일과 대조했다. 카피에 대한 서술·UI 메타·점 경로·폰트 스택 설명·원본이 제외한 제3자 문자열은 바늘이 아니다.

| 분모 | 수 |
|---|---:|
| 원본+sibling 인용 문자열(기계 추출) | 원본 본문 인용 + sibling raw samples |
| 그중 발행 카피·sibling이 측정 대상으로 명기한 문자열(손 범위) | 42 + sibling-only 4 |
| 손 범위 생존(DESIGN 또는 provenance) | 42 / 42 · sibling-only 4는 provenance 바이트 보존, DESIGN 0 |
| 미생존 | 0 |
| 처분(제3자 제외 문자열) | getdesign `"No designs found for 'greenvines'"` · refero adjacent cards · `Insider-Poppins` embed — provenance에 배제 사실만 |

손 범위 42 (원본 본문이 발행했다고 적거나 sibling이 측정 대상으로 명기한 것, DESIGN 생존): 「沒有減法，何來精華」 · 「現在，保養從減法開始 #二減一加」 · 「超過兩萬則真實好評，23 款純淨保養洗沐產品」 · `More is Less. 多，即是少。` · 「讓肌膚熟悉的，應該純淨」 · `The more we know, the less we need.` · 深入了解 · 閱讀文章 · 加入購物車 · 純淨保養組合 · 非必要成分清單 · 希望綠藤怎麼稱呼您 · 您的電子郵件地址 · 擁抱需要 · 減去非必要 · 活萃三日修護精華 · 綠色海洋精華油 · 入夢 θ 呼吸精萃 · 品牌故事 · 永續報告書 · 訂閱電子報 · 客戶服務 · 關注我們 · 純淨保養主張 · 非必要成份清單 · 所有產品 · 更多綠藤 · 加入綠藤 · 45 天無條件退貨 · 綠色生活 21 天 · 配方架構 透明解析 · 減法保養「荷包蛋保養法」 · 綠藤生機空瓶回收計畫 · 「如果肌膚只需要水和油…」 · 「承襲自林碧霞博士的啟發」 · 「我們並不盲目信仰天然…」 · 純淨生活提案部落格 · 綠藤生機 · 限時搶購 · 88-折 · FAITH · 1% for the Planet.

sibling-only 4 (provenance, DESIGN 0): `綠藤生機 Greenvines｜沒有減法，何來精華` · `活萃三日精華雙入組・88 折優惠中 ⟶` · `了解更多：非必要成分清單 →` · `沒有減法 ，何來精華` (여분 공백).

`verdict: PASS`는 「대조한 바늘 중 잃은 것이 없다」이지 「카피가 보존됐다」가 아니다. A5 준수 분모는 위 손 스윕 42/42이다.

## 값 소실 자가 점검 (키 경로)

같은 숫자가 다른 스케일에 있다고 보존된 것이 아니다.

| 키 경로 | 원본 | 산출 슬롯 | dest `grep -oF` |
|---|---|---|---|
| `tokens.colors.primary` `#002d18` | YAML | Semantic color Forest Ink | 28 |
| `tokens.colors.accent` `#c84600` | YAML | Semantic color Burnt Orange | 10 |
| `tokens.colors.sage` `#9caba3` | YAML | Semantic color Sage | 7 |
| `tokens.spacing.base` 15 | YAML | Spacing `base 15` (탭 패딩 15px와 병기, Shape가 아님) | scale line 1 |
| `tokens.spacing.section` 80 | YAML | Spacing `section 80` (Add-to-Cart 높이 80px와 슬롯 분리) | scale line 1 |
| `tokens.rounded.full` 9999 | YAML | Shape `full: 9999` / `9999px` | `full: 9999` 1 / `9999px` 1 |
| `tokens.typography.body.lineHeight` 1.43 | YAML | Type roles Body 행 | 3 (값+구분 주석) |
| `tokens.typography.button.lineHeight` 1.40 | YAML | Type roles Button 행 | 2 |
| `tokens.components.button-cart.height` 80px | YAML | Add-to-Cart Height | Components 슬롯 |
| `tokens.components.button-outline.height` 48px | YAML | Outline CTA Height | Components 슬롯 |

easywallet형 오판 없음 — `section` 80은 Spacing, cart 80px는 Components, `full` 9999는 Shape.

## F1/F2 절차 기록

- F1: DESIGN.md 전수 재독. Scope의 서사·철학 읽기, Content voice, sibling 인용의 성격, Principles 안팎을 포함해 해석 문장 26곳에 인접 완전형 한정을 달았다. D1 후보 도메인 명사와 sibling viewport를 본문에서 제거했다.
- F2: 위 표의 hex·type·duration·카피·이중 목적지를 파일별 `grep -oF`로 확인한 뒤에야 행을 적었다.

## Current SHA

Portable `DESIGN.md` SHA-256 `58baa2b7be56a0eb98de976fb3a3ea34e5d5dbcc6ad9fa2bbe752ed948fa8607` (544 lines; Font evidence 한정 삽입으로 +2). Source SHA unchanged. Catalog adoption is not claimed. 워커 SHA `4a9e3b8d…` / 542 lines는 superseded.
