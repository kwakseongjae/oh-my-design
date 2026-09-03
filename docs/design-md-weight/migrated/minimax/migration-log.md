# MiniMax migration log

- Source: `web/references/minimax/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/minimax/.verification.md` — **존재함**(dotfile, 경로 직접 확인). 전문 판독, **증거 등급으로만 채택**.
- Destination: `docs/design-md-weight/migrated/minimax/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/minimax/provenance.md`
- Date: 2026-09-02
- Worker: grok-4.6 T2
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `inspectDesignMd`, `conformance.portable_core: true`, `level: "portable-core"`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: ai. **증거 영역이 넷**이다 — public marketing home, M3 model-launch, public audio tool, careers marketing. about / platform model documentation는 서사 출처. 원본 token note가 authenticated product / documentation-chrome 토큰을 세우지 않았고, 이관본도 값마다 표면을 붙여 병합하지 않았다. 발행 1차 UI 사양이 원본에 없으므로 B2a는 toss-form: `not MiniMax-authored or a separately published UI specification` (25=25).

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 출현 수는 파일 `str.count`이며, 로그 행을 적기 전에 해당 문자열을 산출 파일에서 확인했다(F2).

Source SHA-256 `f692346e0e7bee94db323b74c4a1a28d30803899e6dbfb07beaa4151531a1b78`. Sibling SHA-256 `43798ffdea7d2fda0780c5fdd772e9f7bb862e4ef12ea8fb9469894d4a53843c`.

## A5a — 발행 카피 손 대조 (규칙집 v12 / A5a)

게이트 `coverage`는 `--gate-only` 실행 결과를 이 파일 하단 Gate run에 적는다. 비라틴 인용 바늘이 `compared < candidates`이면 A5a가 의무다. `verdict: PASS`는 카피 보존의 증거가 아니다.

| 단계 | 수치 |
|---|---|
| 추출 (원본 `DESIGN.md` + sibling `.verification.md` 인용·고유 문자열) | 원본 인용·고유명사·YAML `use` + sibling 전수 |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **15**개 (사명, 모델명 3종, 능력 라벨, 회사 가치, YAML `use` 9종) |
| 바늘이 아니라고 판정해 제외 | hex·치수·CSS 선언·점 경로·폰트 스택·카피에 대한 서술·원본이 제외한 Tier 2 문자열·sibling rgb()/line-height·YAML 메타 `, captured:`·sibling 워크플로명 |
| 미생존 | **0**건 (산출 3파일에 15/15 바이트 생존, 실측) |

**보조 도구 대조.** `node test-v2/tools/latin-copy-audit.mjs --brand minimax --candidate docs/design-md-weight/migrated/minimax/DESIGN.md` → `withLoss: 1` / `totalLost: 3` / `candidates: 35`. Lost 3 medium: `, captured:` (YAML 메타); sibling `bold dark interface with neon accents.` (getdesign 충돌 서술, provenance Conflict matrix에 보관, portable 승격 없음); sibling `omd:add-reference` (워크플로명, provenance Sibling transcription에 보관). 발행 카피 손실 0.

발행 바늘 15 (손 대조, 전부 생존): Intelligence with Everyone, Coding & Agentic, 1M, MiniMax-M3, MiniMax Hailuo 2.3, Speech-2.8, No shortcuts, Repeated public home body and navigation context, M3 model-launch hero heading, Careers-marketing headline, Home marketing header action, selector home::[data-omd-capture=16], M3 launch paired dark action, selector surface-2::[data-omd-capture=20], M3 launch paired light action, selector surface-2::[data-omd-capture=21], Public audio-tool generate action, selector surface-3::[data-omd-capture=12], Careers-marketing primary action, selector surface-4::[data-omd-capture=18], Careers-marketing outline action, selector surface-4::[data-omd-capture=26].

A5 분모: 발행 바늘 15 추출 / 미생존 0. latin-copy-audit published-copy lost 0 (3 lost는 발행 카피가 아님).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# MiniMax Design System` (`DESIGN.md` 1). `homepage` `https://www.minimaxi.com`는 `DESIGN.md` 9 + Identity 표. Catalog `primary_color` `#000000`는 `DESIGN.md` 9/92 + `provenance.md` 14 (E2a). `logo.type: simpleicons` DESIGN dest **1** / P dest **1** (E2a). slug `minimax`는 Assets 분류. |
| YAML `omd: "0.1"`, `verified`, `verification_v2`, `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance · `components_harvested: true` 옮김 → Capture record | A1c: exact `reconciled` DESIGN dest **0** / provenance dest **2**. exact `components_harvested: true` DESIGN dest **1** / P dest **2** (E2a). Conflicts unresolved: none — `provenance.md` Freshness. |
| YAML `tokens.note` | 분리 → provenance (전문) · 제약 옮김 → Experience Scope + Foundations | 이중 목적지. note 전문 `provenance.md` Identity. 안의 제약(four surfaces named separately; no authenticated product or documentation-chrome token)은 `DESIGN.md` 9 및 Foundations `DESIGN.md` 74 (verbatim YAML note). |
| YAML `tokens.colors` (**10키**) | 옮김 → Foundations `Semantic color` · 분리 → provenance claim ledger | canvas `#ffffff` `tokens.colors.canvas` DESIGN dest **2** · ink `#18181b` dest **2** · secondary-text `#45515e` dest **1** · muted `#86909c` dest **1** · surface `#f5f5f5` dest **2** · border `#e5e7eb` dest **1** · action-dark `#181e25` dest **3** · action-on-dark `#ffffff` dest **2** · audio-accent `#7659fa` dest **2** · audio-on-accent `#f8f8f8` dest **1**. A4: canvas `#ffffff`를 action-on-dark / m3-light-action bg와 합치지 않음 (`DESIGN.md` 76). ink `#18181b`를 action-dark / `#000000` / `#222222`와 합치지 않음. |
| YAML `tokens.typography.family.ui` / `display` + §3 Font evidence | 옮김 → Typography & Assets `Font evidence` · `Family` | `MiSans` `tokens.typography.family.ui` dest **1**. `Outfit` `tokens.typography.family.display` dest **1**. 421 visible uses dest **1**. 43 MiniMax-hosted dest **1**. Outfit 9 uses dest **1**. JetBrains Mono dest **5**. Declared-only DM Sans / Inter / Plus Jakarta Sans / Roboto / Font Awesome dest 각 1+. `-apple-system` dest **4**. SIL OFL 1.1 dest **2**. |
| YAML `tokens.typography` 3역할 (size / weight / px lineHeight / use) + §3 표 3행 | 옮김 → Typography & Assets `Type roles` | A1a: YAML lineHeight `"24px"` / `"85.8px"` / `"60px"` 유지, 비율로 바꾸지 않음. YAML `use` 3종 verbatim (`DESIGN.md` 162–164). 키 경로 `tokens.typography.public-body.size` `16` dest **1** · `m3-display.size` `78` dest **1** · `careers-display.size` `60` dest **1**. YAML `16` ≠ careers-outline font `16px` (`DESIGN.md` 158). m3-display는 M3 launch, careers-display는 careers (`DESIGN.md` 166). |
| YAML `tokens.spacing` 5키 | 옮김 → Foundations `Spacing` + Components padding | `tokens.spacing.home-action-x: 28` dest **1**. `tokens.spacing.m3-action-x: 12` dest **3**. `tokens.spacing.audio-action-x: 20` dest **1**. `tokens.spacing.careers-action-x: 24` dest **1**. `tokens.spacing.careers-action-y: 12` dest **2**. `m3-action-x: 12` ≠ `careers-action-y: 12` (`DESIGN.md` 106). Outline `12px 32px`는 해당 컨트롤. |
| YAML `tokens.rounded` 4키 | 옮김 → Foundations `Shape` + Components radius | `tokens.rounded.home-action: 32` dest **5**. `tokens.rounded.m3-action: 8` dest **2**. `tokens.rounded.audio-action: 100` dest **1**. `tokens.rounded.careers-action: 9999` dest **2**. `home-action: 32` ≠ outline padding `32px` (`DESIGN.md` 106/119). |
| YAML `tokens.components` 6키 전부 `type: button` | 옮김 → Components & States | A1b: `Primitive type: \`button\`` dest **6**. YAML `type: button` dest **3**. YAML `states` `default only; no interaction event or pseudo-state captured` dest **1** (Capture record) beside §4 `Default only; no interaction event or pseudo-state captured.` dest **7**. YAML `use` 6종 verbatim Token-set use 칸. Selector dual dest provenance Capture selectors (E2a). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 35–38. general-AI company / proprietary multimodal models / four named surfaces / 32px·8px·100px·full pills / 78px Outfit / 60px MiSans. 성격 규정은 각 문단 끝 B2a. |
| §1 4 bullets | 옮김 → Experience `Distinctive traits` | 실측 4항. `DESIGN.md` 33 B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations `Semantic color` | Repeated public-web roles 7항 + Audio-tool-local role. audio-tool-local not a global MiniMax brand-primary claim `DESIGN.md` 90. Qualified at 76. |
| §3 Typography Rules | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 139–145; family 149–154; hierarchy 162–164. Adjacent complete qualifiers at 137, 154, 158. |
| §4 Component Stylings | 옮김 → Components & States | Home header light action · M3 dark paired · M3 light paired · audio generate · careers primary · careers outline. 값·셀렉터·font 문자열 본문 보존. Capture selector는 provenance `Capture selectors`에도 이중 (E2a). Footer **Verified** / Tier 1 / Tier 2 / Conflicts는 provenance. |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance | Freshness; Tier 1 list; Tier 2 getdesign “bold dark/neon” + sibling “bold dark interface with neon accents.”; Refero internal error. Conflicts unresolved: none. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing | `1440×900 desktop bundle` dest **1** at Layout. local action padding 28px / 12px / 20px / 24px/32px. `company/model marketing, an M3 launch, an audio tool, and recruitment` dest **1**. `responsive breakpoints, authenticated-app navigation, or documentation layout conventions` dest **1**. `measures 1440px` dest **0** (D1). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `boxShadow: none` dest **1**. `old purple glow and broad product-card shadow` dest **3**. Qualified at 123. |
| §7 Do 4항 | 옮김 → Experience `Application rules` | 실측 4항. Governance 통제 문구에 넣지 않음(제약 3). `DESIGN.md` 51 B2a. |
| §7 Don't 4항 | 옮김 → Experience `Avoid` | 실측 4항 + §9 고유 제약 1항. `DESIGN.md` 60 B2a. 원본이 세운 표면만 (D1). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `Only one 1440×900 desktop capture was supplied. No breakpoint, mobile navigation, reflow, touch target, or reduced-motion behavior is verified here.` `DESIGN.md` 351. 원본 문장 — 새 도메인 발명 아님. |
| §9 Agent Prompt Guide | 삭제 + 고유 제약 이동(A3) | 도구용 프롬프트. 흰 필드·near-black hierarchy·route-specific rounded action·MiSans/Outfit은 이미 Foundations/Typography/Components에 있음. §9에만 있던 문장 — Do not copy an M3 launch button into the audio tool or careers surface; leave product, documentation, and error-state decisions open — 은 Avoid `DESIGN.md` 66. large display type only when the observed font is actually available — Typography `DESIGN.md` 147. 확인 `provenance.md` Omission ledger. |
| §10 Voice & Tone | 옮김 → Content & Locales | 사명 `Intelligence with Everyone` dest **3** · `Coding & Agentic` dest **1** · `1M` dest **1** · `MiniMax-M3` dest **1** · `MiniMax Hailuo 2.3` dest **1** · `Speech-2.8` dest **1**. 표 3행 verbatim (`DESIGN.md` 367–369). “supports a direct, technical register” 읽기는 `DESIGN.md` 361 B2a. |
| §11 Brand Narrative | 옮김 → Experience `scope` 3번째 문단 | `founded in early 2022` dest **1**. `pursuing AGI` dest **1**. `Intelligence with Everyone` dest **3**. `enterprise/developer open platform` dest **1**. `text, video, speech, image, and music` dest **3**. `deliberately local launch, tool, and careers treatments rather than one uniformly styled application` dest **1**. `technology, product, content, and aesthetics as intersecting disciplines` dest **1**. `curiosity and exploration as valued qualities` dest **1**. `That supports a narrative of technical work that still attends to expression and usability` dest **1**. 문단 마지막 문장까지 한 단위 (`DESIGN.md` 13). |
| §12 Principles 4항 (+ Reference UI implication) | 옮김 → Experience principles | 실측 4항. `DESIGN.md` 42 B2a toss-form. 원문 `The UI implications are this reference's constrained interpretations of official positioning, not published MiniMax component rules.` dest **1**. |
| §13 Personas | 옮김 → Experience audience (공식 그룹 원문만) | 원본이 가상 페르소나를 세우지 않음. Audience `DESIGN.md` 29는 원문 그룹 4종: individual users · enterprises · developers using the open platform · prospective team members across technical, product, content, and aesthetic disciplines. 동기·소속 분류를 새 표현으로 재구성하지 않음. 이름·나이·도시는 원본에 없음. Disposition `provenance.md` Omission ledger (D2, D2a). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 이중 목적지(둘 다 portable 본문). 원문 보존: No authenticated application state…; audio page is a public tool surface; zero interaction events and zero observed states; must not be expanded into an application-state specification (`DESIGN.md` 181). graph 위임 없음. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | 6개 전부 interactive 7상태 표. Home / M3 paired / careers primary·outline의 loading/error/success는 역할 사유로 `not-applicable` (C2: 커밋 연산 없음). Audio generate는 loading/error/success `applicable`, 시각 treatment 생략 (C1: 생성 연산). 미관측을 `not-applicable` 사유로 쓰지 않음(C1). `Not captured` dest **0**. state coverage 완료 주장 없음 (`DESIGN.md` 185). B1: no focus-visible row carries a hex. `loading \| not-applicable` dest **5**. `loading \| applicable` dest **1**. |
| §15 Motion & Easing | 옮김 → Foundations `Motion` | 원문 제약 보존: No motion token, duration, easing curve, or reduced-motion behavior is measured; transition utilities exist; zero-interaction capture does not establish what changes, when it changes, or how it behaves under user preferences (`DESIGN.md` 125). 삭제할 무출처 커브 없음. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations `Motion` | E2c 대조: 전문 “…transition properties, animation name, duration, easing, and reduced-motion behavior have been observed”가 산출 `DESIGN.md` **1회** (`DESIGN.md` 129) 존재함을 확인한 뒤 이 행을 적는다. 약화 문구는 쓰지 않았다. |
| 원본 H1 `# MiniMax — Design Reference` | 삭제 → provenance `Omission ledger` | Core v2 identity 라인 `# MiniMax Design System`. |
| Sibling `.verification.md` — Proof·raw samples·Conflict matrix | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건**. sibling 전용: coverage score 76 · 5 component types · 35 variants · rgb() writings · M3 21px line-height · audio 28px · careers primary 20px · outline 24px / transparent · JetBrains Mono Google Fonts sources · Xiaomi “free commercial-use” · research blog URL · Poppins / `prose-derived` 제거 목록 · `omd:add-reference`. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

- **A1 / A1a / A1b / A1c.** 검증된 값 손실 0. YAML px lineHeight 3종 본문 실재. YAML `type: button` 6키 → Primitive type 6회 모두 `button`. `reconciled`는 provenance에만 (portable 슬롯 없음).
- **A2.** §14 본문 보존. §9 도구 프롬프트 삭제, 보편 규칙은 Governance 통제 문구, 브랜드 제약은 Experience.
- **A3.** §9 고유 제약 2문장은 Avoid로, display-type-when-available은 Typography로 이동. 렌더 값은 Components에 이미 있음.
- **A4.** `#ffffff` canvas ≠ action-on-dark ≠ m3-light-action bg. `#18181b` ink ≠ `#181e25` ≠ `#000000` ≠ `#222222`. rounded `32` ≠ outline padding `32px`. spacing `12` 두 키 미병합.
- **A5 / A5a.** 발행 바늘 15 / 미생존 0. latin-copy-audit 3 lost는 발행 카피 아님.
- **B1.** sibling 21px/28px/20px/24px line-height, rgb() writings, coverage 76를 portable 본문으로 승격하지 않음. focus-visible 행에 색값 없음.
- **B2 / B2a.** 완전형 25 = 원장 25 (`node scripts/check-limiter-ledger.mjs minimax` 1:1 OK). 발행 1차 UI 사양 없음 → toss-form. F3 인접 한정 3건 신설(`:92` catalog `primary_color` `#000000` ≠ M3 dark-action fill; `:96` YAML unitless spacing beside §4/§5 `px`; `:166` control fonts not extra YAML type-role keys) + 기존 `:76`/`:185`에 이름되지 않은 읽기 접음.
- **B3.** 다섯 증거 종류 + 컴포넌트별 computed 관측 게이트가 `DESIGN.md` 129에 실재. 이 행은 그 확인 뒤에 적음 (E2c).
- **C1.** applicability 표에 `Not captured`를 `not-applicable` 사유로 쓰지 않음.
- **C2.** loading/error/success를 primitive만으로 일괄 개방하지 않음. audio generate만 생성 연산으로 applicable. 나머지 5개는 역할 사유로 not-applicable.
- **C3.** “This is not a complete state-coverage claim.” `DESIGN.md` 185.
- **C4.** 해당 없음 — 6개 모두 YAML `type: button`.
- **D1 / D1a.** Recorded unresolved는 원본이 연 값만. `native application` / `back-office` / `product application` / `measures 1440px` / `mobile app` DESIGN dest **0** / P dest **0**.
- **D2 / D2a.** 가상 페르소나 없음. Audience grep: `individual users` src=1 des=1 / `developers using the open platform` src=1 des=1 / `prospective team members across technical, product, content, and aesthetic disciplines` src=1 des=1. 원장 Item 칸에 이름·나이·도시 없음.
- **E1.** freshness / Proof / claim ledger / sibling raw samples는 provenance. standalone 한정은 본문.
- **E2 / E2a / E2c / E2d.** 이중 목적지는 둘 다. B3 준수는 본문 129 실재 확인 후. 부재 단언이 같은 행에서 항목을 재수록하지 않음.
- **E3.** 게이트 회피 표기 왜곡 없음. Scope의 YAML note는 `no authenticated product`가 Portable Core 스코프 자기부정 창에 걸리므로, 같은 사실을 `The source records no authenticated product…`로 출처 귀속하고 verbatim note는 Foundations 클레임(제품 스코프 검사 밖)과 provenance에 두었다.

## State applicability (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Home header light action | not-applicable | Home marketing header action does not itself present in-place progress, validation, or completion |
| M3 launch paired dark action | not-applicable | M3 launch paired action does not itself present in-place progress, validation, or completion |
| M3 launch paired light action | not-applicable | M3 launch paired action does not itself present in-place progress, validation, or completion |
| Audio-tool generate action | applicable | Public audio-tool generate action is a committing operation; visual treatments omitted |
| Careers-marketing primary action | not-applicable | Careers-marketing action does not itself present in-place progress, validation, or completion |
| Careers-marketing outline action | not-applicable | Careers-marketing action does not itself present in-place progress, validation, or completion |

Absence of an observation is not a `not-applicable` reason. This is not a complete state-coverage claim.

## B2a

Portable body: `derived editorial implementation inference` **25** · `not MiniMax-authored or a separately published UI specification` **25**. Inventory is provenance `## Derived editorial inventory` (25 data rows, 236–260). No published first-party UI specification; the example form is used as-is.

Pass 1 (F1) re-read the finished body from the title down. Causal/interpretive sentences outside Principles (Scope token-surface bound, captured-layer characterizations, narrative-as-context including each §11 last sentence, Primary-task selection, Audience grouping, Distinctive-traits restatement, Do/Don't grouping, color pairing including YAML-note-as-facts and home-light-action text `#181e25` ≠ action-dark fill, catalog `primary_color` `#000000` ≠ M3 dark-action fill, YAML spacing unitless/`px` keep-both, spacing/shape keep-both, elevation unresolved bound, B3 gate, font-class sorting, Family substitutes, type-role keep-both, control fonts not extra YAML type-role keys, simpleicons pointer, capture/applicability including YAML `states` beside §4, layout 1440×900, voice direct/technical, Recorded unresolved framing) each have an adjacent full-form bound. Company-stated about/careers/model-doc facts and the official wording samples are first-party strings and were not qualified as derived.

## D1 / D2

- `native-client` DESIGN dest 0 / P dest 0. `storefront` 0 / 0. `mobile app` 0 / 0. `back-office` 0 / 0. `200%` 0 / 0. `measures 1440px` 0 / 0.
- No personas to promote or re-host. §13 was official audience boundaries; drop of invented individuals is unidentifying.

## 제출 전 자가 대조 (웨이브 43)

원본 §별로 고유 표현을 뽑아 산출 `DESIGN.md`에 `str.count` / `grep -oF`로 대조했다. 특히 (a) §11/§1 서사 연결문, (b) 값에 붙은 근거·수식어, (c) §15/§5 제약.

- 뽑은 표현: **82** (1차) + 추가 서사/제약 묶음.
- 0이었다가 복원한 수: **3** — (1) YAML `states` 원문 `default only; no interaction event or pseudo-state captured`; (2) §12 원문 `constrained interpretations of official positioning`; (3) `components_harvested: true`를 Capture record에 복원.
- 0으로 남기고 처분한 수: YAML `tokens.source: reconciled`는 portable 슬롯이 없어 provenance-only (A1c). sibling-only 21px/28px/20px line-height와 rgb() writings는 portable 승격 없음.

키 경로 대조: `tokens.colors.*` 10 · `tokens.typography.family.ui` / `display` · `tokens.typography.{public-body,m3-display,careers-display}.{size,weight,lineHeight}` · `tokens.spacing.{home-action-x,m3-action-x,audio-action-x,careers-action-x,careers-action-y}` · `tokens.rounded.{home-action,m3-action,audio-action,careers-action}` 모두 산출 `DESIGN.md`에 경로 문자열이 있다. `tokens.rounded.home-action: 32`를 outline padding `32px`나 careers-action-y `12`와 세지 않음. `tokens.spacing.m3-action-x: 12`를 `tokens.spacing.careers-action-y: 12`와 세지 않음.

## Gate run

- `inspectDesignMd` on the migrated `DESIGN.md` → `conformance.portable_core: true`, `level: portable-core`, `reasons: []`, `structurally_valid: true`, `cleanTop: true`, placeholders 0
- `node scripts/check-limiter-ledger.mjs minimax` → 본문 25 = 원장 25 (236–260)
- `node scripts/check-yaml-use-landing.mjs minimax` → use 9/9 (100%) OK
- `node test-v2/tools/latin-copy-audit.mjs --brand minimax --candidate docs/design-md-weight/migrated/minimax/DESIGN.md` → `withLoss: 1` / `totalLost: 3` / `candidates: 35` (3 lost are YAML meta / sibling getdesign characterization / sibling workflow name — not published copy)
- `node test-v2/tools/migrate-reference.mjs --brand minimax --gate-only` → **PASS**, `problems: []`, copy-loss `compared` 0 / `candidates` 173

All are run results only. A5a was mandatory because `compared` 0 < `candidates` 173.

## Deviations recorded

- `DESIGN.md` is 5,635 words by Python `split()`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: ten color keys, three type roles with YAML+§3 keep-both, six component records with seven-state applicability, the full §11 founding-and-portfolio narrative including each paragraph’s last sentence, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- No separately published MiniMax UI specification is named in the source, so every derived-editorial close uses the toss-form `not MiniMax-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). Measure: `derived editorial implementation inference` DESIGN = `not MiniMax-authored` DESIGN = 25. Provenance derived ledger 25 rows at 236–260 (E1 1:1).

## Hashes

| File | SHA-256 |
|---|---|
| `web/references/minimax/DESIGN.md` (source, unmodified) | `f692346e0e7bee94db323b74c4a1a28d30803899e6dbfb07beaa4151531a1b78` |
| `web/references/minimax/.verification.md` | `43798ffdea7d2fda0780c5fdd772e9f7bb862e4ef12ea8fb9469894d4a53843c` |
| `docs/design-md-weight/migrated/minimax/DESIGN.md` | `35a94c88eff7fa26ce5da2b3c8859bb1549e0e54e081f1a950e120ae2f330c4a` |
| `docs/design-md-weight/migrated/minimax/provenance.md` | `76dbe3c14a4901d4ab6778e1d6a0899546971f455977472ab099832c43642809` |
