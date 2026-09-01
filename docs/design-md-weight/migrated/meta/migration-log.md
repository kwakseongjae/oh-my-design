# Meta migration log

- Source: `web/references/meta/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/meta/.verification.md` — **존재** (`find` 경로 직접 확인; dotfile은 `ls`/`*`에 안 보임). A5a 손 대조는 원본 인용 + sibling. sibling 따옴표·백틱 추출 **0**, 발행 카피 바늘 **0** (live-DOM hex/px/font만). 그 샘플은 provenance Sibling 절에 원장으로만 두고 portable 본문에 승격하지 않음(B1).
- Destination: `docs/design-md-weight/migrated/meta/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/meta/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `inspectDesignMd` + `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: consumer-tech. 증거 영역이 **둘**이다 — Meta marketing brand (`about.meta.com` / `meta.com`)와 Facebook/Instagram product lineage (documented Facebook system neutrals). YAML에 `ds` 필드 없음. 1차 발행 UI 사양이 원본에 없으므로 B2a는 예문 전제 그대로 `not Meta-authored or a separately published UI specification`으로 닫음.

`provenance.md`의 `Claim ledger`가 YAML 클레임의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a).

## A5a — 발행 카피 손 대조 (규칙집 v12)

게이트 `copy-loss` 바늘은 이 브랜드에서 전량 라틴·백틱이라 `compared < candidates`로 본다. 원본 `DESIGN.md` 인용/백틱 + sibling `web/references/meta/.verification.md`를 추출한 뒤, 브랜드가 발행했거나 sibling이 측정 대상으로 명기했을 카피·YAML `use` 문자열만 산출 3파일과 손 대조했다.

| 단계 | 수치 |
|---|---|
| 추출 (따옴표·백틱) | 원본 `DESIGN.md` **334**개 · sibling **0**개 |
| 그중 **브랜드 발행 문자열 / YAML `use` / 공식 서사 인용**으로 판정한 바늘 | **45**개 (CTA·토스트·에러·미션 카피 15, 금지 슈퍼레이티브 2, 사명/서사 `beyond`·`unlimited potential` 2, 패밀리명 3, YAML `use` 13, 타입 역할 Notes 10). sibling 발행 카피 바늘 **0** (computed hex/px/font만) |
| 바늘이 아니라고 판정해 제외 | hex·치수·CSS·토큰 키·URL·카피에 대한 서술·§9 프롬프트 문장 전체·페르소나 전기·sibling live-DOM 샘플 |
| 미생존 | **0** (1차 0-hit 5개 YAML `use` 정확 문자열은 본문 Role/Notes에 원문 병기 후 재검 1) |

분모: 추출 334+0 / 바늘 45 / 미생존 0. `verdict: PASS`를 카피 보존의 증거로 쓰지 않는다. 본문 수정 후 바늘 45종 `grep -oF` DESIGN dest ≥1 재실측.

바늘 목록 (본문 `grep -oF` ≥1 확인): `Get started`, `Learn more`, `Build with Meta`, `Sign up`, `Link copied`, `Changes saved`, `Something went wrong. Try again.`, `Build the future with us`, `Connect with the people and things you love`, `Bringing the metaverse to life`, `No results found`, `Saved`, `Posted`, `Clear filters`, `New`, `unlimited potential`, `beyond`, `revolutionary`, `game-changing`, `Optimistic Display`, `Optimistic Text`, `SF Mono`, `Product-surface primary action`, `Neutral secondary`, `Tertiary CTA Sign up`, `Standard form input`, `Search bars, dense forms`, `Feed cards, content panels`, `Unread count red dot`, `Soft informational label New`, `In-page section nav`, `Mode switching`, `Transient confirmation Link copied`, `Confirmations, composer dialogs`, `Boolean settings, on=blue off=#bcc0c4`, `Marketing hero, Optimistic Display`, `Section headers`, `Feature titles`, `Card headings, modal titles`, `Sub-section, list headers`, `Lead paragraphs`, `Standard reading text`, `Secondary info`, `Timestamps, fine print`, `CTA labels`.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Meta Design System` (DESIGN 1 · provenance 1). `primary_color` `#0064E0`은 provenance Identity와 DESIGN Foundations/Components (`grep -oF '#0064E0'` DESIGN 다수). `type: simpleicons` / `slug: meta`는 DESIGN Assets 1 · provenance Identity 1. |
| YAML `verified` / `added` / `omd` / `tokens.source: prose-derived` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). `tokens.source: prose-derived` Proof notes 1 · DESIGN.md 0. `components_harvested` Identity 표 + Proof notes · DESIGN.md 0. |
| YAML `tokens.colors` 19키 | 옮김 → Foundations Semantic color / Neutral scale / Surface · 일부는 Components | 18키는 Foundations에 역할명과 함께 존재. `primary-pressed` `#0058C4`는 Foundations Semantic 0 · Capture Hover + Primary (Solid) hover + Primary (Gradient) pressed (DESIGN dest **4**). YAML 소문자는 provenance Identity 주에 동일 값이라고 적음. 같은 hex 역할 분리는 provenance Same-hex role split. |
| YAML `tokens.typography.family` + 10역할 | 옮김 → Typography Family / Type roles | Optimistic Display/Text, SF Mono, 10행 메트릭. A1a: `60px (1.07)` 등 비율 병기 유지 (`grep` 1). |
| YAML `tokens.spacing` `{ xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 28, xxl: 32, section: 48 }` | 옮김 → Foundations Spacing · Layout | 이중 목적지. `xs: 4` `xl: 28` `section: 48` verbatim DESIGN Spacing (`grep` 1). §5의 20/64/96은 YAML 키가 아니며 같은 Spacing/Layout 문장에 보존. |
| YAML `tokens.rounded` `{ sm: 6, md: 8, lg: 16, full: 9999 }` | 옮김 → Foundations Shape | YAML 키 행 `sm: 6` `md: 8` `lg: 16` `full: 9999` DESIGN dest **1** each (Shape). Compact/Standard/Comfortable/Large/Pill 라벨과 12·20·28은 §5 본문 값(A3). 키와 라벨은 비병합(B2a Shape). |
| YAML `tokens.shadow` (standard / featured / gradient / dialog) | 옮김 → Foundations Elevation · matching components | 이중 목적지. YAML 키 행이 Elevation에 복원됨 (`standard`=`Level 1 Subtle`, `featured`=`Level 2`, `gradient`=`Brand Glow`, `dialog`=`Level 4 Modal` — 키와 Level 라벨 비병합). 값 dest: `0 1px 2px rgba(28,43,51,0.10)` DESIGN **4** · `0 4px 16px rgba(28,43,51,0.12)` **3** · `0 8px 32px rgba(0,100,224,0.30)` **3** · `0 12px 28px rgba(28,43,51,0.20)` **3**. Level 3 `0 8px 24px rgba(28,43,51,0.16)`는 YAML에 없고 §6 본문 → Foundations Elevation (DESIGN **1** · provenance Claim ledger **1**). Toast `0 4px 12px rgba(28,43,51,0.24)`는 YAML 아님 → Toast + Elevation 주 (DESIGN **2** · provenance **1**). |
| YAML `tokens.components` 13개 | 옮김 → Components & States | A1b: `Primitive type: \`button\`` 5 · `input` 2 · `card` 4 · `badge` 3 · `tab` 2 · `toast` 1 · `dialog` 1 · `toggle` 1. YAML `use` 문자열은 해당 Role 행. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` · Distinctive traits | October 2021, Facebook, Inc., Greek "beyond", infinity mark, `#1877F2` → `#0064E0`/`#0082FB`, Optimistic, `#1C2B33`, 28px+, "not the flat, single-blue Facebook of 2012", "warm, slightly humanist letterforms", "a nod to immersive computing". 3차원/분위기 읽기는 인접 B2a. |
| §1 공식 재브랜드 URL·Verified 줄 | 분리 → provenance | Tier 1 / Freshness. 본문은 토큰이 아니라고 밝힌 경계를 Scope에 유지. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color / Brand gradient / Neutral / Surface | Always blue-to-blue, Overlay Scrim `rgba(28,43,51,0.6)`, Surface Raised, Legacy Facebook green. |
| §3 Typography Rules | 옮김 → Typography & Assets | 스택 4종, Display ≥ 24px / Text < 24px, 10행 표, 네 type principles. 폴백을 브랜드 페이스로 쓰지 않는 경계 유지. |
| §4 Component Stylings | 옮김 → Components & States | 버튼 5, 인풋 2+Error 상태, 카드 4, 뱃지 3, 탭 2, 토스트, 다이얼로그, 토글. 셀렉터 없음(원본에 collector 없음). |
| §4-only (YAML 없음): Primary (Gradient), Ghost/Text, Featured, Gradient Hero, Compact, Success Pill, Input Error | 옮김 → Components (A3) | `#0A8CFF` `#D8DADF` `14px 28px` `rgba(0,100,224,0.06)` Brand Glow 카드 `20px` / `32px` 등. |
| §4 하단 **Verified** / Tier 1 / Tier 2 / Surface split | 분리 → provenance · 경계는 본문 유지 | Surface split 문장(marketing vs product parallel systems)은 Scope에 보존. |
| §5 Layout Principles | 옮김 → Layout & Platforms · Foundations Spacing/Shape | 4px base, 12-col ~1200px, three-column shell, ~500–600px, 96px+, 8–12px / 32–48px, radius scale. 공백 철학 라벨에 B2a. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation / Blur | Level 0–4 + Brand Glow. `backdrop-filter: blur(8px)`. 3차원 야심 읽기는 인접 B2a. |
| §7 Do's | 옮김 → Experience Application rules | 7항. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience Avoid | 7항 + §10 forbidden patterns. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 브레이크포인트 표 4행, 44px/40px/48px+, right rail drops first, bottom tab bar, avatars 40/24/56px+. |
| §9 Agent Prompt Guide | 삭제 (고유값은 옮김) | 도구별 명령·프롬프트. Quick Color 값은 이미 Foundations에 있음. §9-only: feed-card header `avatar 40px circle` + name 15px/600 `#1C2B33` + timestamp 12px `#8A8D91` → Standard card (`grep` 1). notification `anchored top-right` → Notification badge (`grep` DESIGN 1). 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | 보이스 문단 + Context/Tone 7행 + 인용 카피 바이트 보존. 보이스 문단·레지스터 분할에 B2a. D1: 원본에 없는 도메인을 Content에 부정 claim으로 신설하지 않음. |
| §11 Brand Narrative | 옮김 → Experience `scope` | October 2021, "beyond", unlimited potential, heritage blue, product family, `#F0F2F5` packed cards, connective tissue, refusal list, planet-scale. `strategic pivot` DESIGN dest **1**. `single social network` DESIGN dest **1** (원본 §11 FROM·행위, Scope `:9`). URL은 provenance. |
| §12 Principles | 옮김 → Experience Principles | 8항. 절 머리 B2a 완전형 (`These 8 items are a derived editorial implementation inference…`). |
| §13 Personas | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 3인 가상 아키타입(이름·나이·도시·전기 필드). Audience는 제품군 그룹만. provenance Omission ledger는 절·인원·필드 종류만(무식별). 본문과 원장에 그 식별 문자열을 다시 쓰지 않음. |
| §14 States 12행 | 옮김 → Components Capture record + 컴포넌트별 applicability | 이중 목적지(둘 다 portable). Empty/Loading/Error/Success/Disabled/Focus/Hover 전문 보존. Focus 관측은 `focus-visible` treatment로 승격하지 않음(B1). `Not captured`를 `not-applicable` 사유로 쓰지 않음 (`Not captured` DESIGN 0). graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 6행 유지 (`motion-page` **350ms**, `motion-brand` **600ms**). Signature 4 + `prefers-reduced-motion: reduce` 유지. `ease-enter`/`ease-exit`/`ease-standard` **이름** 유지; cubic-bezier 값은 spec 템플릿 일치로 생략(T1-3 제약 5) → provenance Omitted easing curves (E2a: 이름/Named gaps는 DESIGN, 곡선 바이트는 provenance). `ease-brand` `cubic-bezier(0.22, 1, 0.36, 1)` 유지 with extrapolation limiter (DESIGN 1 · provenance 1). |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations Motion | 다섯 증거 종류 + 「컴포넌트별 computed 관측 후에만」이 DESIGN.md에 실재 (`grep` 1: “transition properties, animation name, duration, easing, and reduced-motion behavior”). 약화 문구 없음. E2c: 이 행은 그 전문이 본문에 있는 뒤에만 적음. |
| 원본 H1 `# Design System Inspiration of Meta` | 삭제 → provenance `Omission ledger` | Core identity `# Meta Design System`으로 대체. |
| 원본 HTML comment (WebSearch/WebFetch/persona·해석 한정) | 분리 → provenance `Source HTML comment` | 3차원=편집 해석, §13=fictional archetypes 한정을 본문 B2a와 Audience에 반영. 코멘트 원문은 sidecar. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 이 이관에서의 처리 | 실측 근거 |
|---|---|---|
| A1 / A1a | 검증 hex·치수·use 문자열 보존. line-height는 `60px (1.07)` 형태로 비율 병기 | `#0064E0` `#0082FB` `#0A8CFF` `60px (1.07)` `22px (1.47)` `-0.02em` DESIGN.md 존재 |
| A1b | primitive type 컴포넌트별 보존 | `button` 5 · `input` 2 · `card` 4 · `badge` 3 · `tab` 2 · `toast` 1 · `dialog` 1 · `toggle` 1 |
| A1c | `tokens.source: prose-derived`, `components_harvested: true` | provenance Identity/Proof. DESIGN.md 0 |
| A2 / A3 | §14 본문 보존. §9 고유값(avatar anatomy, top-right badge)은 Components로 이동 | Capture record 12행 · `avatar 40px circle` 1 · `anchored top-right` 1 |
| A4 | `#0064E0`을 일반 Ink로 합치지 않음 | Foundations는 Meta Blue vs Meta Ink `#1C2B33` 분리 |
| A5 / A5a | 발행 카피·YAML use 45/45 생존 | 위 A5a 표. 분모 334/45/0 |
| B1 | Focus 캡처를 `focus-visible` treatment 행에 넣지 않음 | Capture record Focus 행 + 각 컨트롤 `no focus-visible treatment is carried` |
| B2 / B2a | 파생 해석에 완전형 한정. 발행 사양 없음 → 예문 전제 유지 | `derived editorial implementation inference` DESIGN.md **17**. `not Meta-authored` **16**. `none of them is Meta-authored` DESIGN dest **1** at 282 (not a complete site). `separately published UI specification` **17**. provenance Derived editorial inventory **16**행 (E1 1:1 with the complete form). Principles 머리 `These 8 items are a derived editorial implementation inference from the verified surfaces; they are not Meta-authored or a separately published UI specification.` dest **1**. |
| B3 | 다섯 증거 + 컴포넌트별 computed 관측 게이트 본문 1회 | 위 B3 행. “공식 출처로 검증될 때까지” 0 |
| C1 | `not captured`를 `not-applicable` 사유로 쓰지 않음 | `Not captured` DESIGN 0. `not-applicable` 23행은 전부 역할 사유 |
| C2 | 역할 판단. Gradient/Solid/Secondary/Outline CTA는 commit/destination 미해상 → L/E/S 개방. Ghost는 destination/low-emphasis → 닫음. Input은 error 개방·loading/success 닫음. Tab/Segmented/Toggle은 비커밋 → L/E/S 닫음. Feed/Featured card는 destination → L/E/S 닫음 | `not-applicable` 사유에 “Not captured” 0 |
| C3 | 완료 주장 없음 | “This is not a complete state-coverage claim.” 1 |
| C4 | Compact card는 interactive-kind 근거 없음 → kind/map 생략 + B2a | Compact 절 `Omitting \`kind\` and a state-applicability map` DESIGN dest **1** |
| D1 / D1a | 원본에 없는 도메인(native-client, authenticated-app 등)을 Named gaps에 열거하지 않음. Content에 locale 도메인을 부정 claim으로 신설하지 않음 | Named gaps 3항: template curves, focus-visible treatment, first-party audience segment. `locale profile` DESIGN dest **0**. `adjacent locale` DESIGN dest **0**. `No adjacent locale is claimed` DESIGN dest **0**. `locale` DESIGN dest **1** (`content-locales` 섹션 마커만) |
| D2 / D2a | 가상 페르소나 승격 0, 원장 재수록 0 | Omission ledger는 절·인원·필드 종류만. 식별 문자열을 로그/원장에 심어 부재를 증명하지 않음 |
| E1 | 출처 원장·freshness·HTML comment는 provenance. standalone 한정은 본문 | provenance Identity/Freshness/Sources. B2a는 DESIGN.md. Derived editorial inventory **16**행 = 본문 완전형 **16** (`not Meta-authored`). Same-hex role split 표. Sibling 절은 파일 실재 + live-DOM 샘플 원장(본문 승격 0). |
| E2 / E2a–d | 이중 목적지 병기. 준수 주장은 본문 실재 시에만. 부재 단언이 자기 나열을 분모에 넣지 않음 | 이 표. sibling 경로 dest는 **존재**(find). ease-brand 곡선 DESIGN **1** · provenance **1**. 템플릿 곡선 DESIGN **0** · provenance **1** each. `#0058C4` DESIGN dest **4** (Foundations Semantic **0**). |
| E3 | 값 표기 왜곡 없음 | `#0064E0` 공백 삽입 없음. 템플릿 곡선 provenance에 원문 바이트 |

## Unique-expression audit (제출 전 자가 대조)

원본 §별 고유 표현(연도·고유명사·인용구, §1/§11 인과, 값 수식어, §5/§15 제약)을 뽑아 `grep -oF`로 DESIGN.md를 셌다.

- 뽑은 표현 수: **228** (기존 226 + 개정 §11 `strategic pivot` / `single social network`)
- 0이었다가 복원한 수: **13** (`Soft informational label` / `Unread count red dot` / `on=blue off=#bcc0c4` / `a nod to immersive computing` / `planet-scale` / `Marketing hero, Optimistic Display` / `Tertiary CTA Sign up` / `Soft informational label New` / `Transient confirmation Link copied` / `Boolean settings, on=blue off=#bcc0c4` / connective-tissue·refusal-list 원문 / `strategic pivot` / `single social network`)
- 의도적 0 (규칙 삭제, 본문 복원 금지): **3** — `cubic-bezier(0.0, 0.0, 0.2, 1)` · `cubic-bezier(0.4, 0.0, 1, 1)` · `cubic-bezier(0.4, 0.0, 0.2, 1)` (T1-3 무출처 템플릿 커브; 이름은 Foundations에 남김, 바이트는 provenance Omitted easing curves)

## F1 / F2

- F1 B2a 스캔: DESIGN.md 전편 재독. 완전형 16곳 (`not Meta-authored`) — Scope `:19`, Primary tasks `:25`, Audience `:34`, Distinctive `:38`, Principles `:50`, Spacing `:138`, Shape `:142`, Elevation `:165`, Motion `:174`, Signature `:196`, Font evidence `:211`, Type roles `:245`, Assets `:260`, Compact `:505`, Layout `:643`, Content `:690`. Components how-to-read `:282` has phrase-1 and `separately published` but `none of them is Meta-authored` instead of `not Meta-authored`, so it is not a complete site. 근거 class가 브랜드 발행인 값(hex, 카피, October 2021, Optimistic 이름)에는 한정을 붙이지 않음.
- F2 E2 대조: 이 로그의 각 행은 본문 수정 후 `grep -o <패턴> <파일> | wc -l` 파일별 재실측 뒤에 기록함. sibling은 `find`로 파일 존재를 확인함.

## Wave 45 E1 — derived-editorial ledger 17→16

Checker counted provenance 17 vs DESIGN complete sites 16. Complete form requires the `not Meta-authored` token. DESIGN.md body not edited.

| Ledger row | Body line | `not Meta-authored` | Verdict |
|---|---|---|---|
| 1 Experience Scope `:19` | 19 | yes | KEEP |
| 2 Primary tasks `:25` | 25 | yes | KEEP |
| 3 Audience `:34` | 34 | yes | KEEP |
| 4 Distinctive traits `:38` | 38 | yes | KEEP |
| 5 Principles `:50` | 50 | yes | KEEP |
| 6 Foundations Spacing `:138` | 138 | yes | KEEP |
| 7 Foundations Shape `:142` | 142 | yes | KEEP |
| 8 Foundations Elevation `:165` | 165 | yes | KEEP |
| 9 Foundations Motion `:174` | 174 | yes | KEEP |
| 10 Signature motions `:196` | 196 | yes | KEEP |
| 11 Typography Font evidence `:211` | 211 | yes | KEEP |
| 12 Type roles `:245` | 245 | yes | KEEP |
| 13 Assets `:260` | 260 | yes | KEEP |
| former 14 Components how-to-read `:282` | 282 | no (`none of them is Meta-authored`) | DELETE — not a complete site; limiter is present as a variant token, so no body limiter was added |
| 14 Compact (Bordered) card `:505` | 505 | yes | KEEP (renumbered from 15) |
| 15 Layout `:643` | 643 | yes | KEEP (renumbered from 16) |
| 16 Content & Locales `:690` | 690 | yes | KEEP (renumbered from 17) |

Remeasured: phrase-1 DESIGN dest **17** at 19/25/34/38/50/138/142/165/174/196/211/245/260/282/505/643/690. `not Meta-authored` DESIGN dest **16** (same list minus 282). `none of them is Meta-authored` DESIGN dest **1** at 282 / provenance dest **1** at 157 (mention). `separately published UI specification` DESIGN dest **17**. provenance Derived editorial inventory dest 1 at 155; data rows **16** at 161–176. `node scripts/check-limiter-ledger.mjs meta` → 본문 16 = 원장 16. `--gate-only` PASS.

## Wave 46 — D1 Content 부정 claim 삭제 · A1 §11 FROM/행위 복원

본문만 고침. 토큰 값·컴포넌트 표·applicability·원본·provenance 불변. F1 완전형 줄 번호 불변 (모두 삭제 줄 앞). dest 재실측은 위 D1/D1a 행, §11 Brand Narrative 행, Unique-expression 복원 13.
