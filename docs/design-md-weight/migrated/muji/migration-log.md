# MUJI migration log

- Source: `web/references/muji/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/muji/.verification.md` — **존재함**(dotfile, 경로 직접 확인). 전문 판독, **증거 등급으로만 채택**. portable 토큰 승격 0건 (B1).
- Destination: `docs/design-md-weight/migrated/muji/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/muji/provenance.md`
- Date: 2026-09-02
- Worker: grok-4.6 T2
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: ecommerce. 원본 token-set `tokens.source: prose-derived`. 발행 1차 UI 사양이 원본에 없으므로 B2a는 toss-form: `not MUJI-authored or a separately published UI specification` (26=26). Sibling은 `https://www.muji.us/` playwright 샘플이며 원본 본문의 muji.com 크롬 기록과 호스트·패밀리·잉크가 다르다 — portable 본문에 승격하지 않음.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 출현 수는 파일 `str.count`이며, 로그 행을 적기 전에 해당 문자열을 산출 파일에서 확인했다(F2).

Source SHA-256 `54915df6a025b6def8d5e8dce88b356dcc924dc1006c0d208c16c610215a5c67`. Sibling SHA-256 `ebc9b41da418fba5a7e4dea42c50e61f951a6a6bb41c19b5da785bd099216281`.

## A5a — 발행 카피 손 대조 (규칙집 v12 / A5a)

게이트 `coverage`는 `--gate-only` 실행 결과를 이 파일 하단 Gate run에 적는다. 비라틴 인용 바늘이 `compared < candidates`이면 A5a가 의무다. `verdict: PASS`는 카피 보존의 증거가 아니다.

| 단계 | 수치 |
|---|---|
| 추출 (원본 `DESIGN.md` + sibling `.verification.md` 인용·고유 문자열) | 원본 인용·고유명사·YAML `use`/`states`/`active` + sibling 전수 |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **36**개 (표시명, 사명·슬로건, CTA, 빈 상태, 확인, 재고, 금지어, YAML `use` 18종, 세그먼트 머리글 3종) |
| 바늘이 아니라고 판정해 제외 | hex·치수·CSS 선언·점 경로·폰트 스택·카피에 대한 서술·sibling 전용 computed 샘플·§13 가상 전기 안의 식별 문자열 |
| 미생존 | **0**건 (산출 3파일에 36/36 바이트 생존, 실측) |

**보조 도구 대조.** `node test-v2/tools/latin-copy-audit.mjs --brand muji --candidate docs/design-md-weight/migrated/muji/DESIGN.md` → `withLoss: 1` / `totalLost: 1` / `candidates: 64`. Lost 1 medium은 삭제된 가상 전기 안의 인용이며 브랜드 발행 카피가 아니다. D2로 삭제했고 바늘 분모에 넣지 않았다.

발행 바늘 36 (손 대조, 전부 생존): 無印良品, Mujirushi Ryohin, no-brand quality goods, no-mark quality goods, 「わけあって、安い」, Lower priced for a reason, 「これがいい」, 「これでいい」, カートに入れる, ご購入手続きへ, お気に入り, 続けて見る, もっと見る, 期間限定価格, 商品詳細, レビュー, カートに追加しました, 該当する商品はありません, カートに商品がありません, お買い物を続ける, 在庫切れ, 続けてお買い物, オーガニックコットン100%。, 最高, 革命的, amazing, luxury, 今だけ!急いで!, NEW, MUJI passport, Quiet authority page title, Catalog grid card, photo is the card, Single primary action (add to cart / checkout), Sale / campaign CTAs only, design-conscious urban professionals, minimalist-lifestyle adopters, students furnishing first apartments.

A5 분모: 발행 바늘 36 추출 / 미생존 0. latin-copy-audit published-copy lost 0 (가상 전기 안의 인용은 발행 카피가 아님).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# MUJI Design System` (`DESIGN.md` dest **1** / `provenance.md` dest **1**). `homepage` `https://www.muji.com` DESIGN dest **1** + provenance dest **6** (E2a). `primary_color` `#7f0019` DESIGN dest **19** + provenance dest **11** (E2a; Source closing note가 원본 HTML 주석의 encycolorpedia 행을 원문 복원하면서 +1). favicon slug DESIGN dest **1** + provenance dest **1** (E2a). |
| YAML `omd: "0.1"`, `verified`, `added`, `tokens.source: prose-derived`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). A1c: exact `prose-derived` DESIGN dest **2** / provenance dest **3** (E2a; Scope가 토큰 출처 등급으로 본문에 남김). exact `components_harvested` DESIGN dest **0** / provenance dest **2**. |
| YAML `tokens.colors` (**13키**) | 옮김 → Foundations `Semantic color` | primary `#333333` DESIGN dest **42** · brand `#7f0019` dest **19** · canvas `#ffffff` dest **25** · surface `#f7f7f7` dest **17** · muted `#666666` dest **6** · hairline `#dddddd` dest **8** · border-strong `#cccccc` dest **5** · error `#c0392b` dest **6** · success `#4a7c59` dest **2** · primary-hover `#000000` dest **8** · brand-hover `#6b0015` dest **6**. 키 경로 `tokens.colors.primary` dest **9** ≠ catalog `primary_color`. A4: `#333333` primary와 foreground를 한 키로 합치지 않음. |
| §2 Color Palette & Roles | 옮김 → Foundations `Semantic color` | YAML 13키 + §2-only `#f4e6e9` dest **2** · `#999999` dest **8** · `#eeeeee` dest **11** · `#e5e5e5` dest **2** · footer `rgba(255,255,255,0.7)` dest **2** · RGB 127, 0, 25 dest **1**. 발명 YAML 키 없음. |
| YAML `tokens.typography.family` (`sans` / `mono` 둘 다 `Helvetica Neue`) + §3 Font Family | 옮김 → Typography & Assets `Font evidence` · `Family` | `Helvetica Neue` DESIGN dest **37** = source dest **37**. `ヒラギノ角ゴ ProN` DESIGN dest **4**. YAML `sans`/`mono` 두 키 유지 (`tokens.typography.family.sans` dest **2** · `family.mono` dest **2**). 폴백을 브랜드 페이스로 제시하지 않음 (`DESIGN.md` 195 B2a). |
| YAML `tokens.typography` 9역할 (size / weight / **unitless** lineHeight / tracking / use) + §3 Hierarchy 표 11행 | 옮김 → Typography & Assets `Type roles` | A1a: unitless `1.4` dest **4** · `1.7` dest **6** · `1.0` dest **3**. YAML `use` 9종 verbatim (`Quiet authority page title` dest **2**). §3-only Price Large / Nav Link keep-both (`Price Large` dest **4** · `Nav Link` dest **4**). YAML `price` use + §3 `Product price, never bolded loud` dest **2**. YAML section weight `400`과 §9 prompt weight `300` keep-both. 키 경로 9종 dest ≥1 (`tokens.typography.page-title` dest **2** · `section` dest **1** · `body-small` dest **1** · `button` dest **1**). |
| YAML `tokens.spacing` 배열 9키 + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout) | unitless `4, 8, 12, 16, 24, 32, 48, 64, 96` + px 병기. `tokens.spacing` dest **14**. `tokens.spacing` `16` ≠ body size `16` ≠ `14px 24px` (`DESIGN.md` 126 B2a). |
| YAML `tokens.rounded` 4키 + §5 Border Radius Scale | 옮김 → Foundations `Shape` | sm/md/lg `2` · `full: 9999` dest **13**. body `0px` dest **27**은 YAML에 `0` 키가 없어 컴포넌트-로컬 (`DESIGN.md` 130). |
| YAML `tokens.shadow.subtle` / `modal` + §6 Depth & Elevation | 옮김 → Foundations `Elevation` | `0 2px 8px rgba(0,0,0,0.08)` DESIGN dest **4** + provenance dest **1** (E2a). `0 4px 24px rgba(0,0,0,0.16)` DESIGN dest **3** + provenance dest **2**. §4 toast `0.12` dest **2** ≠ YAML subtle `0.08`. `blur(8px)` dest **3**. `rgba(0,0,0,0.4)` dest **4**. |
| YAML `tokens.components` 18개 (`type: button` ×5, `input` ×2, `card` ×3, `badge` ×2, `tab` ×2, `toast` ×1, `dialog` ×1, `toggle` ×2) | 옮김 → Components & States | A1b: `Primitive type: \`button\`` dest **5** = source `type: button` 5. `input` dest **2**=2. `card` dest **3**=3. `badge` dest **2**=2. `tab` dest **2**=2. `toast` dest **1**=1. `dialog` dest **1**=1. `toggle` dest **2**=2. YAML `use` 18종 verbatim. YAML `states`/`active` 원문 병기 (`hover #000000` dest **1** · `hover bg #f7f7f7` dest **1** · `#333333 fill, white check` dest **1** · `track #333333, white thumb` dest **1**). |
| §4 Buttons / Inputs / Cards / Tags / Tabs / Toasts / Dialogs / Toggles | 옮김 → Components & States | Primary·Secondary·Tertiary·Brand·Input·Product Card·Editorial Card·Sale/Neutral Tag·Underline Tabs·Segmented·Toast·Inline Notice·Centered Modal·Checkbox·Toggle. §4-only Filled input / Banner Card / Outline Tag는 `Primitive type: not in the token set` dest **4**(레코드 3 + Input recipes 한정 1). YAML `button-disabled` / `input-error`는 레시피이지 다섯 번째/두 번째 인터랙티브 맵이 아님 (`DESIGN.md` 290 / 417). |
| §4 하단 footer 블록 (**Verified** / Tier 1 / Tier 2 / Conflicts / Note) | 분리 → provenance | freshness·출처 원장(E1). Note 전문 Identity + Source closing note. |
| §5 Layout Principles (Spacing / Grid / Whitespace / Radius) | 옮김 → Layout & Platforms + Foundations | `~1180px` dest **4** · `~720px` dest **2** · 64px–96px · 8px–16px. Whitespace 4불릿 원문. `DESIGN.md` 675 B2a. |
| §6 Shadow Philosophy + Blur | 옮김 → Foundations `Elevation` | 본문 보존 + B2a. |
| §7 Do 8항 | 옮김 → Experience `Application rules` | 실측 8항. Governance 통제 문구에 넣지 않음(제약 3). `DESIGN.md` 58 B2a. |
| §7 Don't 8항 | 옮김 → Experience `Avoid` | 실측 8항. `DESIGN.md` 71 B2a. 원본에 없는 도메인 부정 claim 없음 (D1). `native application` DESIGN dest **0** / source dest **0**. `mobile app` dest **0** / **0**. |
| §8 Responsive Behavior (Breakpoints 4행 / Touch / Collapsing / Image) | 옮김 → Layout & Platforms | `<768px` / `768–1024px` / `1024–1280px` / `>1280px`. `44px` dest **2**. `5→4→3→2` dest **1**. `DESIGN.md` 675 B2a: 원본이 진술한 의도이지 교차 뷰포트 캡처가 아님. |
| §9 Agent Prompt Guide — Quick Color Reference · Example Component Prompts 6개 · Iteration Guide 8항 | 삭제 + 고유값 이동(A3) | 도구용 재진술. 열거 hex는 Foundations에 이미 있음. §9에만 두드러진 값: product-card hover `#f7f7f7` tint → Product Card + signature motion 3. section prompt heading 22px weight **300** → Type roles keep-both with YAML section **400**. section prompt `64px vertical padding` DESIGN dest **1** / P dest **1**. `64px` DESIGN dest **4** / P dest **2**. section `body 14px line-height 1.7 `#666666`` → Layout Section local recipe (`DESIGN.md` 689); `14px line-height 1.7` DESIGN dest **1** / P dest **1**. `centered content ~1180px` DESIGN dest **1**. |
| §10 Voice & Tone | 옮김 → Content & Locales | 슬로건·표 7행·Forbidden register 바이트 보존. `わけあって、安い` dest **3** · `これがいい` dest **1** · `これでいい` dest **1** (원본 2회 중 1회는 §13 페르소나 — D2로 삭제, Content 1회 유지). `オーガニックコットン100%。` dest **1**. 영어 성격 규정은 `DESIGN.md` 730 B2a. |
| §11 Brand Narrative | 옮김 → Experience `Scope` 3번째 문단 | 문단 **마지막 문장까지** 착지 (`get out of the way` dest **1**). `December 1980` DESIGN dest **1** + provenance dest **1** (E2a). `40-item` DESIGN dest **1** + provenance dest **1**. `Seiyu` dest **2**. `Kenya Hara` dest **4**. `2017` dest **2**. `空 / 無` dest **3**. 두 영어 글로스 keep-both. 원본 닫는 주석의 증거 등급은 본문과 provenance Source closing note 양쪽(E2a). |
| §12 Principles 8항 | 옮김 → Experience `Principles` | 실측 8항. `These 8 items are a derived editorial…` (`DESIGN.md` 45). 원본 닫는 주석의 interpretive-claims 등급을 인접에 유지. |
| §13 Personas 3인 | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. fictional archetypes 3인. 식별자·전기 문구는 처분 행에 재수록하지 않음. Audience는 원본 머리글 원문 `design-conscious urban professionals, minimalist-lifestyle adopters, students furnishing first apartments` (각 dest **1**). 페르소나 동기를 Primary tasks로 옮기지 않음. |
| §14 States 11행 | 옮김 → Components & States `Capture record` + 컴포넌트별 applicability 사유 | 이중 목적지(둘 다 portable 본문). 11행 값·카피 그대로 (`該当する商品はありません` dest **2** · `カートに追加しました` dest **4** · `1.2s` dest **1** · `3s` dest **1**). graph 위임 없음. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Primary·Secondary·Brand는 커밋 면이라 L/E/S 개방. Tertiary는 `もっと見る` 로딩만 개방, error/success 닫힘. Input은 필드라 E 개방. Product Card는 목적지 셀이라 L/E/S/disabled 닫힘(재고는 카드가 아니라 버튼). Tab·Segmented·Outline Tag는 선택 컨트롤이라 L/E/S 닫힘. Checkbox는 로컬 커밋이라 loading/success 닫힘, terms error 개방. Toggle은 로컬 커밋이라 L/E/S 닫힘. Dialog는 confirmation/login 커밋이라 L/E/S 개방. Editorial Card는 kind/map 생략(C4). Sale/Neutral Tag·Toast·Notice는 `Kind: non-interactive`. 미관측을 `not-applicable` 사유로 쓰지 않음(C1). state coverage 완료 주장 없음 (`not a complete state-coverage claim` dest **2**). |
| §15 Durations 4행 (`motion-instant` 0ms / `motion-fast` 150ms / `motion-standard` 250ms / `motion-slow` 400ms) | 옮김 → Foundations `Motion` | 4행 그대로. `150ms` dest **1** · `250ms` dest **1** · `400ms` dest **1**. 삭제 범위는 **무출처 커브뿐**. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 보존. |
| §15 Easings — 커브 값 3개 (`cubic-bezier(0.0, 0.0, 0.2, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.4, 0.0, 0.2, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. 산출 `DESIGN.md` **0회** · `provenance.md` 각 dest **2**. 세 값 모두 `spec/omd-v0.1.md` 비브랜드 예시와 일치. 역할과 용도는 본문에 남김. 부재 단언의 분모는 DESIGN.md이지 원장 자신(E2d). |
| §15 Explicitly avoided + Signature motions 4 + Reduce motion | 옮김 → Foundations `Motion` | no spring/bounce/overshoot · control value above `1.0` · image crossfade · drawer · hover tint not lift · `prefers-reduced-motion: reduce` dest **1**. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations `Motion` | E2c 대조: 전문 “transition properties, animation name, duration, easing, and reduced-motion behavior”가 산출 `DESIGN.md` **1회** 존재함을 확인한 뒤 이 행을 적는다. 약화 문구는 쓰지 않았다. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 8항. `negative space` dest **1**. 성격 규정은 각 문단 끝 B2a. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 실측 8항. `DESIGN.md` 32 B2a. |
| 원본 H1 `# Design System Inspiration of MUJI (無印良品)` | 삭제 → provenance `Omission ledger` | Core v2 identity 라인 `# MUJI Design System`. 無印良品은 Scope에 유지. |
| 원본 닫는 HTML 주석 | 분리 → provenance `Source closing note` | 증거 등급 배정 3건(서사 / persona / interpretive claims) 인용 보존. 원본 주석의 encycolorpedia/colorswall 행 원문 복원: `related tints #8c1a30, #993347 reported by registries` provenance dest **1** / DESIGN dest **0** (A1: 레지스트리 보고 tint이지 팔레트 토큰이 아님. portable 본문에 승격하지 않음). |
| Sibling `.verification.md` — muji.us computed samples 5건 | 분리 → provenance `Raw samples` | 증거 등급으로만 채택. **portable 토큰 승격 0건**. sibling 전용: `#4d4d4d` DESIGN dest **0** / P dest **1** · `Roboto` DESIGN dest **0** / P dest **2** · muji.us button maroon-on-white. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 본문 실재 | 로그 주장 |
|---|---|---|
| A1 / A1a | unitless line-height `1.4`/`1.7`/`1.0` 본문 실재. px로 치환 없음 | 값 형태 보존 |
| A1b | YAML `type` 18회 = Primitive type 18회 (button 5 / input 2 / card 3 / badge 2 / tab 2 / toast 1 / dialog 1 / toggle 2). §4-only 3건은 `not in the token set` | primitive type 보존 |
| A1c | `prose-derived` · `components_harvested` provenance 실재. `ds.type` 원본 부재를 채우지 않음 | 메타데이터 보존 |
| A2 | §14 11행 본문 보존. graph 위임 없음 | 상태 본문 보존 |
| A3 | §9 고유값(hover tint, section weight 300, `64px vertical padding`, section body `14px line-height 1.7` `#666666`) 이동 | 슬롯 있는 고유값 이동 |
| A4 | `#333333` primary ≠ foreground 키. `#7f0019` brand ≠ error. toast `0.12` ≠ shadow.subtle `0.08` | 필드 결합 금지 |
| A5 / A5a | 발행 바늘 36 / 미생존 0 | 바이트 보존 |
| B1 | 원본에 `focus-visible` 0. 산출 focus-visible 행에 색값 없음. sibling muji.us 샘플 portable 0 | 승격 없음 |
| B2a | 완전형 26회 = 원장 26행. toss-form (발행 1차 DS 없음) | 인접 완전형 |
| B3 | 다섯 증거 종류 전문 1회 + “Official documentation of a single curve or duration is not that gate” | B3 유지 |
| C1 | `not captured`를 `not-applicable` 사유로 쓰지 않음 | applicability = 역할 |
| C2 | Tab/Segmented/Outline Tag/Product Card destination은 L/E/S 역할 사유로 닫음. Primary 커밋은 개방 | 일괄 개방 없음 |
| C3 | `not a complete state-coverage claim` dest **2** | 완료 주장 없음 |
| C4 | Editorial Card·Banner Card kind/map 생략 | 미확정 kind 생략 |
| D1 / D1a | `native application` dest **0**. Named gaps는 원본이 연 값만 | 도메인 발명 없음 |
| D2 / D2a | 페르소나 식별자 본문 0 / 원장 0. Audience는 원본 머리글 그룹 원문 | 삭제 = 무식별 |
| E1 | freshness·Tier·sibling·claim ledger는 provenance | 원장 분리 |
| E2 / E2a–d | 이중 목적지는 이 표에 둘 다. 준수 주장은 본문 실재 후에만. 원장이 부재를 단언하며 그 문자열을 재수록하지 않음 | 처분 일치 |
| E3 | hex/커브 표기 왜곡 없음 | 게이트 회피 없음 |

## Gate run

`scripts/design-md-core.cjs` `evaluatePortableCore` on `docs/design-md-weight/migrated/muji/DESIGN.md`: `portable_core: true`, `level: "portable-core"`, `reasons: []`, placeholders 0.

`node test-v2/tools/migrate-reference.mjs --brand muji --gate-only` first blocked on `token-loss: hex:#8c1a30, hex:#993347` (source HTML comment registry tints; A1). Restored the source sentence in `provenance.md` Source closing note. Re-run → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 21, candidates: 226 }]`. `node scripts/check-limiter-ledger.mjs muji` → 본문 26 / 원장 26 1:1 OK. `node scripts/check-yaml-use-landing.mjs muji` → use 27/27 미착지 0. Neither gate result is cited as semantic adequacy (E2c).

## 제출 전 자가 대조 (웨이브 43)

뽑은 고유 표현 80 / 0이었다가 복원한 수 6 (YAML `states`/`active` 원문 5 + §1 `"negative space"` 1). 가상 전기 안의 인용은 복원하지 않음 (D2).
