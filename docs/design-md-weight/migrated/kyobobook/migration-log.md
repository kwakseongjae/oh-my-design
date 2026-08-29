# Kyobo Book Centre migration log

- Source: `web/references/kyobobook/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/kyobobook/.verification.md` — **존재함**(dotfile, 경로 직접 확인). `design-md/kyobobook/.verification.md`는 동일 바이트 크기 복사. 전문 판독, **증거 등급으로만 채택**.
- Destination: `docs/design-md-weight/migrated/kyobobook/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/kyobobook/provenance.md`
- Date: 2026-08-29
- Worker: grok-4.6 T2
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: ecommerce. **증거 영역이 셋**이다 — portal (`www.kyobobook.co.kr`, NotoSansKR), storefront (`store.kyobobook.co.kr`, Pretendard), **공개 발행 디자인 시스템 KDS** (`design.kyobobook.co.kr`). company.kyobobook.co.kr은 서사 출처. 원본 token note와 conflict matrix가 portal/storefront 패밀리와 KDS 색을 분리해 두었고, 이관본도 값마다 도메인을 붙여 병합하지 않았다. 발행 1차 DS가 있으므로 B2a는 toss-form이 아니라 published-spec form: `not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS)` (33=33).

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 출현 수는 Python `str.count` / 줄 스캔이며 `grep -c`와 `grep -o | wc -l`을 쓰지 않았다.

Source SHA-256 `5be8e7242a6e7deb35c1bf20edcb3ea7450fbb97a465e8cd9ff67ddcde358cdb`. Sibling SHA-256 `d54fa9bbe5df9fe8ca34e279796fcebf5c6b469eb1457874cdd6e0270137de56`.

## A5a — 발행 카피 손 대조 (규칙집 v12 / A5a)

게이트 `coverage`는 `--gate-only` 실행 결과를 이 파일 하단 Gate run에 적는다. 비라틴 인용 바늘이 `compared < candidates`이면 A5a가 의무다. `verdict: PASS`는 카피 보존의 증거가 아니다.

| 단계 | 수치 |
|---|---|
| 추출 (게이트와 동일한 `QUOTED_COPY` 정규식) | 원본 `DESIGN.md` **260**개 인용 문자열 + sibling `.verification.md` **102**개 = 두 파일 전수 |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **54**개 (CTA·카테고리·보이스 원칙·톤 속성·사명·모토·KDS 경고문·유틸리티 라벨·sibling이 측정 대상으로 명기한 카피·회사 핵심가치) |
| 바늘이 아니라고 판정해 제외 | 나머지 — hex·치수·CSS 선언·점 경로·폰트 스택·카피에 대한 서술·원본이 제외한 Tier 2 문자열 |
| 미생존 | **0**건 (산출 3파일에 54/54 바이트 생존, 실측) |

**보조 도구 대조.** `node test-v2/tools/latin-copy-audit.mjs --brand kyobobook` → `withLoss: 0` / `totalLost: 0`.

발행 바늘 54 (손 대조, 전부 생존): 바로구매, 구매하기, 장바구니, UI 기본컬러, 핫트랙스, 상반기결산, 주말특가, 로그인, 회원가입, 오늘의 선택, 온라인 주간 베스트, 국내도서, 외국도서, eBook, 구어체, 해요체, 문어체, 간결하고 명확한, 책임감 있는, 공감하는, 존중하는, 동기부여하는, 한 문장에 한 가지 정보만, 위트있는, 고객을 잘 아는, 정돈된, 다양한, 지혜로운, 포용적인, 영감이 가득한, 고급스러운, 사람은 책을 만들고 책은 사람을 만든다, 광화문글판, 사용자 경험을 가치있게, 고객의 삶을 흥미롭게, 신용호, 교보생명, sam, 핫트랙스 red-700과 부정의 의미 red를 혼동하지 않도록 주의, Kyobobook Design System, -하기, -보기, 교보문고, Kyobo Book Centre, Hot Tracks, Positive/Accent, Informative/Accent, 도전과 창의, 고객중심, 정직과 성실, 리스트형, 섬네일, 교보문고인의 핵심가치, 교보문고 | 대한민국 최고의 도서쇼핑몰, 온라인 주간 베스트 | 전체 - 교보문고.

sibling 전용 5건(리스트형/섬네일, 교보문고인의 핵심가치, 두 document.title)은 provenance Raw samples에만 두고 portable 본문으로 승격하지 않았다(B1). §13 가상 전기 안의 식별 문자열은 브랜드 발행 카피가 아니라 D2/D2a로 삭제했고 바늘 분모에 넣지 않았다.

A5 분모: 발행 바늘 54 추출 / 미생존 0. latin-copy-audit lost 0.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Kyobo Book Centre Design System` (`DESIGN.md` 1). `display_name_kr` 교보문고는 `DESIGN.md` 9 + `provenance.md` 11 (E2a). `homepage` `https://www.kyobobook.co.kr`는 `DESIGN.md` 9 + Identity 표. `primary_color` `#5055b1`는 `DESIGN.md` dest 15 (14줄; 한 줄에 2회) + `provenance.md` dest 12 (E2a). favicon slug는 `DESIGN.md` 252 + `provenance.md` 16/147 (E2a). |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). A1c: exact `tokens.source: live-extract` P dest **0** / DESIGN dest **0**; 표 칸 `| tokens.source | live-extract |` P dest **1** at 18. exact `components_harvested: true` P dest **0** / DESIGN dest **0**; 표 칸 `| components_harvested | true |` P dest **1** at 20. |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance (인용 블록, 전문) · 값은 옮김 → DESIGN.md | 이중 목적지. note 전문 `provenance.md` Identity. 안의 값(`#5055b1` `#4dac27`, Pretendard/NotoSansKR 표면 분할)은 Experience Scope·Foundations·Typography에 별도로 실려 있다. |
| YAML `tokens.colors` (**20키**) | 옮김 → Foundations `Semantic color` | 5개 표 = primary 3 / green 3 / reds 3 / neutrals 5 / surface 6 = **20 데이터 행**. 키 경로를 `Recorded use`와 경로-분리 문장(`DESIGN.md` 133)에 보존. `#5055b1` dest 15 · `#4dac27` dest 5 · `#da2128` dest 4 · `#ec1f2d` dest 6 · `#c71e24` dest 8 · `#767676` dest 10. A4: `#767676` muted text와 장바구니 fill을 한 Ink로 합치지 않음. |
| §2 Color Palette & Roles | 옮김 → Foundations `Semantic color` | 소제목 5개를 표 5개로. KDS 경고문 "핫트랙스 red-700과 부정의 의미 red를 혼동하지 않도록 주의" `DESIGN.md` 1회 (Semantic Reds 머리). |
| YAML `tokens.typography.family` (`primary: NotoSansKR`, `commerce: Pretendard`) + §3 Font Family | 옮김 → Typography & Assets `Font evidence` · `Family` | `NotoSansKR` DESIGN dest **14** · `Pretendard` DESIGN dest **15** (Font evidence 한정이 Pretendard-not-universal을 이름해 +1). 폴백을 브랜드 페이스로 제시하지 않는다는 경계를 Family 불릿과 B2a 한정(`DESIGN.md` 225)에 남김. |
| YAML `tokens.typography` 7역할 (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 7행 | 옮김 → Typography & Assets `Type roles` | A1a: unitless `1.2` dest **1** at 233 (`1.25rem` dest 1 at 235는 다른 값). `1.4` dest 1 at 234. `1.3` dest 1 at 235. unitless `1.5` dest **4** at 236–239 (`1.50rem` dest 1 at 234는 다른 값). rem 등가 `2.50rem` dest 1 at 233. YAML `body-sm` weight `400`과 §3 `400-500` keep-both (`DESIGN.md` 229/238, `400-500` dest 2). YAML `use` 7종 verbatim. |
| §3 Principles 4항 | 옮김 → Typography & Assets `Typography rules` | 실측 4항. 인과는 `DESIGN.md` 243 B2a. |
| YAML `tokens.spacing` 7키 + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout) | `{ xs: 4, sm: 8, md: 14, base: 16, lg: 24, xl: 32, xxl: 48 }`. Source §5 scale spelling `4px, 8px, 14px, 16px, 24px, 32px, 48px` (`32px` dest 1 at `DESIGN.md` 137). `tokens.spacing.md: 14` dest 2 ≠ button `9px 14px` dest **8** ≠ tab `0px 14px` dest 2. `tokens.spacing.xxl: 48` ≠ search height 48px. |
| YAML `tokens.rounded` 4키 + §5 Border Radius Scale | 옮김 → Foundations `Shape` | sm 4 / md 8 / lg 24 / `full: 9999` dest 2 · `9999px` dest 2 (`DESIGN.md` 160/162; YAML unitless + §5 `9999px` keep-both). `tokens.rounded.lg: 24` ≠ `tokens.spacing.lg: 24`. |
| YAML `tokens.shadow.none` + §6 Depth & Elevation | 옮김 → Foundations `Elevation` | 3행 표 + `box-shadow: none` dest 3. Philosophy의 목적 읽기는 `DESIGN.md` 172 B2a. |
| YAML `tokens.components` 8개 (`type: button` ×2, `tab` ×2, `input` ×1, `card` ×1, `badge` ×2) | 옮김 → Components & States | A1b: `Primitive type: \`button\`` dest 2 = source `type: button` 2 (`DESIGN.md` 287/312). `tab` dest 2=2 (362/385). `input` dest 1=1 (337). `card` dest 1=1 (408). `badge` dest 2=2 (421/432). YAML `use` 8종은 각 레코드 `Token-set use` + provenance `Token-block component strings` verbatim (`provenance.md` 177–). |
| §4 Buttons / Inputs / Cards / Tabs / Badges | 옮김 → Components & States | Buy Now · Add to Cart · Integrated Search · Category Tab · View Toggle · Product Card · Sale Price badge · Positive Status badge. §4에만 있는 padding/height(탭 `0px 14px` / 42px, 토글 38px)는 컴포넌트 레코드로. |
| §4 하단 footer 블록 (**Verified** / Tier 1 4개 URL / Tier 2 / Conflicts unresolved: none) | 분리 → provenance | freshness·출처 원장(E1). |
| §5 Layout Principles (Spacing / Grid / Whitespace / Radius) | 옮김 → Layout & Platforms + Foundations | Grid 4불릿·Whitespace 3불릿은 Layout. Whitespace 목적 읽기는 `DESIGN.md` 456 B2a. |
| §6 Shadow Philosophy | 옮김 → Foundations `Elevation` | 본문 보존 + B2a. |
| §7 Do 7항 | 옮김 → Experience `Application rules` | 실측 7항. Governance 통제 문구에 넣지 않음(제약 3). `DESIGN.md` 58 B2a. |
| §7 Don't 7항 | 옮김 → Experience `Avoid` | 실측 7항. `DESIGN.md` 70 B2a. |
| §8 Responsive Behavior (Breakpoints 3행 / Touch Targets / Collapsing / Image) | 옮김 → Layout & Platforms `Responsive behavior` | `<768px` / `768-1024px` / `1024-1440px`, KDS MO 3-4 / KDS PC 3-6. `DESIGN.md` 460 B2a: 원본이 진술한 의도이지 교차 뷰포트 캡처가 아님. |
| §9 Agent Prompt Guide — Quick Color Reference · Example Component Prompts 4개 · Iteration Guide 6항 | 삭제 + 고유값 1건은 이동(A3) | 도구용 재진술. 열거 hex는 Foundations 20행에 이미 있음. §9에만 있던 렌더 값 1건 — product card title 16px Pretendard 400 `#000000` + price `#c71e24` 12px 700 — 은 Components `Product Card` (`DESIGN.md` 415). |
| §10 Voice & Tone | 옮김 → Content & Locales | KDS 구어체(해요체)·다섯 원칙·한 문장에 한 가지 정보만·톤 표 5행·톤 속성 8종·Forbidden register 바이트 보존. 영어 성격 규정은 `DESIGN.md` 489 B2a. Voice samples `DESIGN.md` 501–510. |
| §11 Brand Narrative | 옮김 → Experience `Scope` 3번째 문단 | 1980-06-01, 신용호, 교보생명, 창업 지시 `profit center` / `welcome everyone` / `only to read` / `not to buy` DESIGN dest 1 each · P dest 1 each, `largest bookstore chain` DESIGN dest 1 · P dest 1, 모토, 광화문글판 1991, sam, 핫트랙스, KDS 미션. `cultural institution` DESIGN dest 2 (Principles 7 `40-year cultural institution` + §11 대비문). 원본 닫는 주석의 “widely documented public facts” 증거 등급은 본문과 provenance Narrative 양쪽(E2a). refuses/embraces는 같은 문단 B2a. |
| §12 Principles 7항 (+ UI implication) | 옮김 → Experience `Principles` | 실측 7항. 2·3·5·6은 KDS 규칙으로 귀속. 1·4·7과 UI implication은 `DESIGN.md` 46 B2a (published-spec form). |
| §13 Personas 3인 | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. fictional archetypes 3인. §13 페르소나 3인의 식별자(이름·나이·도시·전기)가 본문·원장에 0회임을 확인. Audience는 원본이 그룹으로 남긴 `Korean book buyers, students, gift shoppers, eBook readers` (`DESIGN.md` 29) DESIGN dest 1. `builders reading KDS` DESIGN dest 0 · `people searching and buying` DESIGN dest 0. |
| §14 States 9행 | 옮김 → Components & States `State record` + 컴포넌트별 applicability 사유 | 이중 목적지(둘 다 portable 본문). 9행 값·카피 그대로 (`DESIGN.md` 268–). KDS Empty Page / Input Focused / Error / Success 포함. graph 위임 없음. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Buy Now·Add to Cart는 커밋 면이라 L/E/S 개방 (`loading \| applicable` dest 2 at 305/330). Search는 필드라 loading 닫고 error/success 개방 (`loading \| not-applicable` dest 1 at 355 · `error \| applicable` dest 1 at 356). Category Tab·View Toggle은 그룹 선택이라 L/E/S 닫힘 (`loading \| not-applicable` dest 2 at 378/401). Product Card는 kind/map 생략(C4, 416). 배지 2개는 `Kind: non-interactive` (421/432). 미관측을 `not-applicable` 사유로 쓰지 않음(C1). state coverage 완료 주장 없음 (`DESIGN.md` 266). |
| §15 Durations 3행 (`motion-fast` 120ms / `motion-standard` 200ms / `motion-slow` 320ms) | 옮김 → Foundations `Motion` | 3행 그대로. 삭제 범위는 **무출처 커브뿐**. sibling method/raw sample에 transition 관측이 없으므로 B2a를 절 머리(`DESIGN.md` 176)에 붙이고 주어를 motion contract 자체로 둠. 커브 생략 판단은 표 뒤 `DESIGN.md` 186 B2a (인접 완전형). |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 보존. |
| §15 Easings — 커브 값 3개 (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. 산출 `DESIGN.md` **0회** · `provenance.md` `cubic-bezier(0.4, 0.0, 1, 1)` dest 2 · 나머지 각 1 (`provenance.md` 238). `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md` 비브랜드 예시. 역할과 용도는 본문에 남김. 부재 단언의 분모는 DESIGN.md이지 원장 자신(E2d). |
| §15 Motion rules 4항 | 옮김 → Foundations `Motion` | 기능적/quiet, 탭 underline `motion-standard / ease-standard`, no bounce/spring, `prefers-reduced-motion: reduce` dest 1. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations `Motion` | E2c 대조: 전문 “…transition properties, animation name, duration, easing, and reduced-motion behavior have been observed”가 산출 `DESIGN.md` **1회** (`DESIGN.md` 194) 존재함을 확인한 뒤 이 행을 적는다. 약화 문구는 쓰지 않았다. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `Scope` 1·2문단 + Distinctive traits | 네 표면 분리, 값에 도메인. 정체성 수식어 `Korea's largest and oldest book retailer` DESIGN dest 1 at `DESIGN.md` 11 · P dest 1. 성격 규정은 각 문단 끝 B2a. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 실측 8항. `DESIGN.md` 33 B2a. |
| 원본 H1 `# Design System Inspiration of Kyobo Book Centre` | 삭제 → provenance `Omission ledger` | Core v2 identity 라인 `# Kyobo Book Centre Design System`. |
| 원본 닫는 HTML 주석 | 분리 → provenance `Source closing note` | 증거 등급 배정 3건(서사 / persona / interpretive claims) 인용 보존. 회사 핵심가치 도전과 창의 / 고객중심 / 정직과 성실은 이 주석에만 있어 provenance Narrative에 보관(본문 Principles로 승격하지 않음). |
| Sibling `.verification.md` — Proof·method·raw samples 21건·Conflict matrix 6행·Logo 판정 | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건**. sibling 전용: search input `46px` DESIGN 0 / P 4 · `24px 0px 0px 24px` · `리스트형/섬네일` · company `Spoqa Han Sans` DESIGN 0 / P 5 · document.title 2건 · `product.kyobobook.co.kr` DESIGN 0 / P 4. KDS uppercase `#5055B1` 등은 provenance Raw sample 16. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 이 이관에서의 처리 | 실측 근거 |
|---|---|---|
| A1 / A1a / A1b / A1c | 검증 값 보존. unitless lineHeight 유지. primitive type 컴포넌트별 보존. `components_harvested`·`live-extract` 원장 보존 | unitless `1.2` dest 1 · `1.4` dest 1 · `1.3` dest 1 · `1.5` dest 4. Primitive type dest = source type dest. 표 칸 `components_harvested` P dest 1 · `live-extract` P dest 1. exact colon 표기 P dest 0 |
| A2 | §14 9행 본문 보존. graph 위임 없음 | State record `DESIGN.md` 268 |
| A3 | §9 고유 값 1건을 Product Card로 이동 | `DESIGN.md` 415 |
| A4 | `#767676` muted와 장바구니 fill을 합치지 않음 | Foundations muted 행 + Add to Cart 레코드 |
| A5 / A5a | 발행 바늘 54/0. 원문 비라틴 바이트 보존, 영문는 병기 | 위 A5a 표. `바로구매` DESIGN 10 · `장바구니` DESIGN 7 · 모토 DESIGN 2 · `eBook` DESIGN dest 6 |
| B1 | generic Focus `#5055b1` ring을 `focus-visible` 행에 넣지 않음. sibling 전용 **값** 미승격. 구조 분류 `portal H2` 본문 미승격 | Search 레코드 관찰 문장 `DESIGN.md` 345–346. `46px`/`Spoqa Han Sans`/`product.kyobobook.co.kr` DESIGN dest 0. `portal H2` DESIGN dest 0 / P dest 1. `오늘의 선택 — portal H2` DESIGN dest 0. `H2` DESIGN dest 0. Voice sample is `portal section heading` DESIGN dest 1. sibling 분류는 provenance sibling-only set과 Raw samples (`H2 "오늘의 선택"`, Surface=portal)에만 |
| B2 / B2a | published-spec form 33문장. KDS 사실과 편집 해석을 구분 | `derived editorial implementation inference` DESIGN 33 = provenance inventory 33행 (데이터 `provenance.md` 200–232). `not Kyobo Book Centre-authored` 33. 모두 KDS close |
| B3 | 다섯 증거 종류 + 컴포넌트별 computed 관측 + partial confirmation 배제 | `DESIGN.md` 194 dest 1. E2c: 이 행은 그 전문이 본문에 실재한 뒤에만 적음 |
| C1 | `not captured`를 `not-applicable` 사유로 쓰지 않음 | applicability Reason 열 실측 |
| C2 | 역할 판단. 커밋 버튼 L/E/S 개방, 탭/토글 닫힘, Search error만 | `loading \| applicable` dest 2 at 305/330 · `loading \| not-applicable` dest 3 at 355/378/401 |
| C3 | 완료 주장 없음 | `This is not a complete state-coverage claim` `DESIGN.md` 266 |
| C4 | Product Card kind/map 생략 | `DESIGN.md` 416 |
| D1 / D1a | 원본에 없는 도메인 부정 claim 없음 | `native application` / `mobile app` / `back-office` / `product application` DESIGN 0 |
| D2 / D2a | 가상 persona 삭제, 무식별. Audience는 원본 세그먼트 | §13 페르소나 3인의 식별자(이름·나이·도시)가 본문·원장에 0회임을 확인. Omission ledger는 인원·필드 종류만. `Korean book buyers, students, gift shoppers, eBook readers` DESIGN dest 1. `builders reading KDS` DESIGN dest 0 · `people searching and buying` DESIGN dest 0 |
| E1 | 원장·freshness·Proof를 provenance로. standalone 한정은 본문 | 본문 B2a 33 · provenance inventory 33행 (200–232) · Identity/Freshness/Raw samples |
| E2 / E2a–d | 이 표의 목적지는 실측 후 기재. 이중 목적지는 둘 다. 부재 단언이 자기 나열을 분모에 넣지 않음 | favicon D 1 + P 2. 커브는 P에만 있고 DESIGN 0 |
| E3 | hex/표기 왜곡 없음 | `#5055b1` 유지. KDS uppercase는 provenance raw sample |
| T1-3 제약 5 | 무출처 커브만 삭제. duration·signature·reduced-motion 보존. persona sidecar 재수록 없음 | 커브 DESIGN 0. duration 120/200/320ms dest 1 each |

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand kyobobook --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 21, candidates: 191 }]`. 첫 실행은 `token-loss: px:32px, px:9999px`로 BLOCK — 원본 §5 `32px` / `9999px` 철자를 Spacing·Shape에 keep-both로 복원한 뒤 PASS. `scripts/design-md-core.cjs` `evaluatePortableCore` → `level: portable-core`, `portable_core: true`, `reasons: []`, placeholder 0. 둘 다 실행 결과일 뿐 의미 보존의 증거가 아니다. A5a는 `compared` 21 < `candidates` 191 이라 의무였고, 위 손 대조 54/0이 그 분모다.

## Deviations recorded

- Three unsourced easing curves omitted (T1-3 제약 5). Durations 120/200/320ms and signature motions kept. B3 full text at `DESIGN.md` 194.
- §13 three fictional archetypes omitted (D2, D2a). Audience keeps the source's own publicly observable segments (`Korean book buyers, students, gift shoppers, eBook readers` DESIGN dest 1). `builders reading KDS` DESIGN dest 0.
- Sibling-only measurements (search `46px`, `Spoqa Han Sans`, `product.kyobobook.co.kr` redirect, document.title) not promoted as portable token values (B1). Sibling structural classification `portal H2` DESIGN dest 0 / P dest 1.
- No invented out-of-scope domain (`native application` / `mobile app` / `back-office` / `product application` DESIGN 0).
- `Primitive type` attached only to the YAML component that holds that type.
