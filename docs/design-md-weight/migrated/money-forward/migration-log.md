# Money Forward migration log

- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- Source: `web/references/money-forward/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/money-forward/.verification.md` — **없음** (경로 직접 확인). A5a는 원본 DESIGN.md만 분모.
- Destination: `docs/design-md-weight/migrated/money-forward/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/money-forward/provenance.md`
- Date: 2026-09-02
- Worker: grok-4.6 T2
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, claim `lang` 전부 `en`
- Source SHA-256 `4dcbf537f46cb398229776b09126646759d1601afaddc495354fc1e1b8c73be3`
- 도메인: fintech (JP). 토큰 출처는 발행 1차 DS **Money Forward Cloud UI** (`cloud-react-ui`, `ds.type: system`, `tokens.source: prose-derived`). `design.moneyforward.com`은 User Focus / 법인 오렌지 `#ED7100` 레이어. 발행 1차 DS가 있으므로 B2a는 toss-form이 아니라 published-spec form: `not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (\`cloud-react-ui\`) documentation` (25=25).

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 grep한 뒤에 썼다(F2).

## A5a — 발행 카피 손 대조 (규칙집 v12 / A5a)

게이트 `copy-loss` 바늘은 sibling이 없어 원본 DESIGN.md만. `verdict: PASS`는 카피 보존의 증거가 아니다.

| 단계 | 수치 |
|---|---|
| 추출 | 원본 `DESIGN.md` 인용 문자열 330개(고유 196) + bold 131개(고유 115). sibling 없음. |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **21**개 (제품명·JP 마이크로카피·사명/스탠스·금지어·영문 gloss· pallete 밖 발행 카피) |
| 바늘이 아니라고 판정해 제외 | hex·치수·CSS 선언·점 경로·폰트 스택·카피에 대한 서술·§13 가상 전기 |
| 미생존 | **0**건 (산출 3파일 21/21). 중간 점검에서 latin-copy-audit `press me, this is safe.` 1건 미생존 → Scope ¶2에 원문 복원 후 `withLoss: 0` / `totalLost: 0`. |

발행 바늘 21 (손 대조, 전부 생존): マネーフォワード, お金の見える化, 保存, 登録, 次へ, 保存しました, 該当するデータがありません, User Focus, 丁寧語, 業界No.1, 革新的, Money Forward ME, Money Forward Cloud, Money Forward X, Money Forward Cloud UI, ヒラギノ角ゴ ProN W3, making money visible, move users' lives and the world forward, Save / Submit, your money, your future, don't worry.

보조 도구: `node test-v2/tools/latin-copy-audit.mjs --brand money-forward --dest …/migrated/money-forward` → `withLoss: 0` / `totalLost: 0` (복원 후).

A5 분모: 발행 바늘 21 추출 / 미생존 0. latin-copy-audit lost 0. 감사 후 재실측: 발행 바늘 21/21 모두 DESIGN dest ≥ 1 (`grep -o | wc -l`, 파일별). 게이트 `copy-loss`는 `compared 8 / candidates 248`. `verdict: PASS`는 대조한 8개 바늘 중 손실 없음이지 카피 전수 보존이 아니다.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Money Forward Design System` (DESIGN dest 1). `id` `money-forward` DESIGN dest **0** / provenance dest **4**. `homepage` `https://moneyforward.com` DESIGN dest **1** + provenance dest **1** (E2a). `primary_color` `#3B7DE9` DESIGN + provenance Identity. favicon slug DESIGN Assets + provenance Identity (E2a). |
| YAML `ds.name` / `ds.url` / `ds.type: system` / `ds.description` | 분리 → provenance · 본문 한정 옮김 → DESIGN.md Scope | 이중 목적지. A1c: `ds.type: system` DESIGN dest **1** (`DESIGN.md` Scope) · provenance dest **2**. `ds.description` 전문은 provenance Identity. |
| YAML `verified` / `omd` / `tokens.source: prose-derived` / `tokens.extracted: 2026-06-09` / `components_harvested: true` | 분리 → provenance · `prose-derived` / `components_harvested: true`는 본문에도 | `tokens.extracted` `2026-06-09` DESIGN dest **0** / provenance dest **2**. `prose-derived` DESIGN dest **2** / provenance dest **4**. `components_harvested: true` DESIGN dest **1** / provenance dest **1**. |
| YAML `tokens.colors` (**14키**) | 옮김 → Foundations Semantic color | 키 경로 보존. `primary` `#3b7de9` unmerged from `brand` `#3b7de9`. `canvas` `#ffffff` unmerged from `on-primary` `#ffffff`. 동일 hex 대소문자 keep-both (`#3b7de9` / `#3B7DE9`). |
| §2 Color Palette & Roles (named color.ts 표) | 옮김 → Foundations Named `cloud-react-ui` swatches | royalBlue…lightSlateGrey 전부. YAML 키가 아닌 이름은 named swatch로만 (새 `tokens.colors.*` 발명 없음). `veryRightGray` DESIGN dest **1**. `redSnow` DESIGN dest **2** (named 표 + Error Notice bg keep-both). |
| YAML `tokens.typography.family` (`sans` / `mono` 둘 다 `Noto Sans JP`) + §3 Font Stack | 옮김 → Typography & Assets Family | `tokens.typography.family.sans` dest **1** · `mono` dest **1**. 스택 `"Noto Sans JP", -apple-system, … "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", … Meiryo` 보존. |
| YAML `tokens.typography` 8역할 (xSmall…xxxxLarge) + §3 Type Scale 표 | 옮김 → Typography & Assets Type roles | YAML `use` verbatim + §3 Typical Use keep-both. `large` weight `400`; `xxlarge`/`xxxLarge`/`xxxxLarge` weight `700`. line-height 없음 → 발명하지 않음. |
| §3 Weights / Conventions | 옮김 → Typography & Assets Type roles | two-weight; 14px working default; tabular 12–14px; Latin-only 금지. |
| YAML `tokens.spacing: [12, 16, 52]` | 옮김 → Foundations Spacing | DESIGN dest **1** (`tokens.spacing: [12, 16, 52]`). 버튼 padding `0 12px` / `0 16px` / `0 52px`는 컨트롤 padding이지 spacing 키와 병합하지 않음. |
| YAML `tokens.rounded` (`sm`/`md`/`lg`: 4, `full: 9999`) | 옮김 → Foundations Shape | 네 키 유지. `tokens.rounded.full` DESIGN dest **1**. `4px everywhere` 규칙과 `full: 9999`를 충돌로 보존(선택하지 않음). |
| YAML `tokens.shadow.active` + §6 | 옮김 → Foundations Elevation | YAML `0 0 2px rgba(212,216,221,0.3)` + §6 `box-shadow: 0 0 2px rgba(212, 216, 221, 0.3)` keep-both. 결합 문자열 `backdrop \`zIndex\` \`200\`` DESIGN dest **0** (fitpet형). 분리 실측: `backdrop \`200\`` DESIGN dest **2** (Elevation 한 줄에 두 번) · `zIndex 200` DESIGN dest **1** (Motion signature 3). |
| YAML `tokens.components` 8개 (`type: button` ×4, `card` ×3, `input` ×1) | 옮김 → Components & States | A1b: `Primitive type: \`button\`` dest **4** = source `type: button` 4. `card` dest **3**. `input` dest **1**. YAML `use` 8종 Token-set use + provenance Token-block verbatim. 키 경로: `tokens.components.button-primary` DESIGN dest **2** (Button sizes YAML 인용 + Primary Token-set path) · 나머지 7개 dest **1** each. YAML `states` 복합 문자열 `hover gradient flips, active 0 0 2px rgba(212,216,221,0.3)` DESIGN dest **1** (Primary States 행) + provenance Token-block dest **1** (E2a). |
| §4 Settings / Error Field / Success Notice / Sizes | 옮김 → Components | Settings·Error Field·Success Notice·Transaction table은 `not in the token set` (Primitive type 없음). Sizes 28/32/42 + padding 세 값은 Button sizes + Layout Touch. |
| §4 하단 없음; HTML 주석 color.ts / theme.ts / values.ts | 옮김 → Capture record · 분리 → provenance Sources | `src/theme/color.ts` DESIGN dest **1** / provenance dest **1**. `theme.ts` DESIGN dest **1** / provenance dest **2**. `values.ts` DESIGN dest **3** / provenance dest **2**. `src/theme/values.ts` DESIGN dest **2** / provenance dest **1**. |
| §5 Layout Principles | 옮김 → Layout & Platforms | high-density, 200 transactions, app-shell, cloudGrey/whiteSmoke. Density 인과는 `DESIGN.md` B2a. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | gradient-led 읽기는 Elevation B2a. light shadow + scrim, backdrop 200. |
| §7 Do 8항 | 옮김 → Experience Application rules | 실측. Governance 통제 문구에 넣지 않음. `DESIGN.md` Application rules B2a. |
| §7 Don't 8항 | 옮김 → Experience Avoid | 실측. `DESIGN.md` Avoid B2a. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms Responsive / Touch | Desktop/Tablet/Mobile 표, ME mobile-first, Cloud desktop-first, 28/32/42 tap. `DESIGN.md` Responsive B2a (표 머리, Touch 포함): 원본이 진술한 의도이지 교차 뷰포트 캡처가 아님. |
| §9 Agent Prompt Guide — Quick Color Reference · Example Component Prompts 4개 · Iteration Guide 8항 | 삭제 + 고유값 2건은 이동(A3) | 도구용 재진술. 열거 hex는 Foundations에 이미 있음. §9에만 있던 값: helper text 12px `#999999` → Text Field (`DESIGN.md` dest 1); transaction table 13–14px / alternating `#F7F7F7` / right-aligned tabular → Transaction table (`right-aligned tabular` DESIGN dest 1). |
| §10 Voice & Tone | 옮김 → Content & Locales | 표 8행, Forbidden (`業界No.1`, `革新的`), 샘플 3건과 증거 등급(illustrative / verified / editorial paraphrase) 보존. 영어 성격 규정은 Content B2a. |
| §11 Brand Narrative | 옮김 → Experience Scope 3번째 문단 | 창업 문장부터 닫는 `methodical and trustworthy by design`까지 한 단위. お金の見える化, ME / Cloud / X, One / Two / Three, User Focus, visual impairments. 연도 없음(원본에 없음 → 발명하지 않음). |
| §12 Principles 5항 (+ UI implication) | 옮김 → Experience Principles | 실측 5항. Principle 4 stem은 design.moneyforward.com User Focus. UI implication 전부 B2a (published-spec form). |
| §13 Personas 3인 | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 머리글이 fictional archetypes라고 명시. 처분 행은 무식별(인원·빠진 필드 종류만). Audience는 원본 머리글 원문 `Japanese individuals and SME owners/finance staff` (DESIGN dest **2**, 같은 Audience 문단에 두 번) + voice 표 Consumer (ME) / Business (Cloud). |
| §14 States 10행 | 옮김 → Components Capture record + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). 10행 값·카피 그대로 (`該当するデータがありません`, `保存しました`, never one-tap-destructive). graph 위임 없음. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Primary·Danger는 커밋 면이라 L/E/S 개방. Default는 Secondary/cancel이라 L/E/S 닫힘. Settings는 affordance라 L/E/S 닫힘. Disabled 레코드는 unavailable-action. Input은 필드라 loading/success 닫고 error 개방. Block·Notices는 `Kind: non-interactive`. 미관측을 `not-applicable` 사유로 쓰지 않음(C1). state coverage 완료 주장 없음. generic Focus `border #3b7de9`는 `focus-visible` 행에 올리지 않음(B1). `focus-visible` 표 행 hex dest **0**. YAML `focus: "border #3b7de9"` DESIGN dest **1** (Text Field Observed Focus). `visual treatment omitted. Generic Focus is a different evidence class` DESIGN dest **1**. |
| §15 Durations 4행 (`0ms` / `150ms` / `250ms` / `300ms`) | 옮김 → Foundations Motion | 4행 그대로. 원본 HTML 주석이 illustrative라고 한 증거 등급을 본문에 유지. 삭제 범위는 **무출처 커브뿐**. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations Motion | `ease-standard` / `ease-enter` / `ease-exit`와 각 용도 보존. |
| §15 Easings — 커브 값 3개 (`cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0, 0, 0.2, 1)`, `cubic-bezier(0.4, 0, 1, 1)`) | **삭제 → provenance Omission ledger에 verbatim 보관** | 무출처 커브. 산출 `DESIGN.md` cubic-bezier **0회**. provenance `cubic-bezier(0.4, 0, 1, 1)` dest **2** · 나머지 각 1. `cubic-bezier(0.4, 0, 1, 1)`은 `spec/omd-v0.1.md` 비브랜드 예시. 역할과 용도는 본문에 남김. 부재 단언의 분모는 DESIGN.md이지 원장 자신(E2d). |
| §15 Spring stance / Signature 4항 / Reduce motion | 옮김 → Foundations Motion | `Spring / overshoot easing is **forbidden**` DESIGN dest **1**. `restrained and confidence-building` dest **1**. `prefers-reduced-motion: reduce` dest **1**. 인과(calm-competence)는 Motion (register) B2a — B3 문단 앞, 같은 문단에 인접. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations Motion | E2c 대조: 전문 “transition properties, animation name, duration, easing, and reduced-motion behavior” + “Official documentation of a single curve or duration is not that gate.”가 산출 `DESIGN.md` **1회** (`DESIGN.md` Motion) 존재함을 확인한 뒤 이 행을 적는다. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope 1·2문단 + Distinctive traits | 제품 범위, Cloud UI 토큰 출처, 법인 오렌지 분리. `"press me, this is safe."` DESIGN dest 1. 성격 규정은 각 문단 끝 B2a. |
| §1 Key Characteristics 10항 | 옮김 → Experience Distinctive traits | 실측 10항. `DESIGN.md` Distinctive traits B2a. |
| 원본 H1 `# Design System Inspiration of Money Forward` | 삭제 → provenance Omission ledger | Core v2 identity 라인 `# Money Forward Design System`. |
| 원본 닫는 HTML 주석 | 분리 → provenance Source closing note | VERIFIED / NOTE·CONFLICT / INFERRED / Personas 증거 등급 인용 보존. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·출처 원장(E1). |
| Sibling `.verification.md` | 해당 없음 | 경로 확인, 파일 없음. portable 토큰 승격 0건. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 본문 실재 | 확인 |
|---|---|---|
| A1 값 손실 0 / 발명 0 / `[FILL IN]` 0 | placeholder 0. YAML 14색·8타입·spacing 3·rounded 4·shadow.active·컴포넌트 8의 키 경로가 DESIGN에 있음. `button-primary.states` 복합 문자열은 Primary `States:` 행 DESIGN dest **1** | grep |
| A1a | YAML에 unitless line-height 없음. 발명하지 않음 | grep line-height 토큰 0 |
| A1b | `Primitive type: \`button\`` dest 4 = YAML `type: button` 4. Settings 등 §4-only는 Primitive type 없음 | grep |
| A1c | `ds.type: system` DESIGN dest 1 · provenance dest 2 | grep |
| A2 | §14 10행 Capture record. graph 위임 없음 | grep 該当するデータがありません / 保存しました |
| A3 | §9 고유값 2건 이동 (helper 12px `#999999`, right-aligned tabular) | grep dest 1 each |
| A4 | `primary`/`brand` 미병합. `canvas`/`on-primary` 미병합. input `fg #333333`을 일반 Ink로 합치지 않음 | Semantic color B2a |
| A5 / A5a | 발행 바늘 21/21. latin-copy-audit lost 0 | 위 A5a 표 |
| B1 | generic Focus `border #3b7de9`는 Text Field Observed Focus. `focus-visible` 표 행 hex dest **0**. YAML `focus: "border #3b7de9"` DESIGN dest **1**. Capture 정책 문장 `focus: border #3b7de9` DESIGN dest **1** (표 행 아님). `visual treatment omitted. Generic Focus is a different evidence class` DESIGN dest **1** | Capture record · Text Field 표 |
| B2a | 완전형 25회, inventory 25행 (153–177), published-spec form (`cloud-react-ui` 포함) | grep 25=25 |
| B3 | 다섯 증거 종류 + per-component computed + “Official documentation of a single curve or duration is not that gate.” DESIGN dest 1 | grep |
| C1 | `not captured`를 `not-applicable` 사유로 쓰지 않음 | Capture record 문장 |
| C2 | Default/Settings/Disabled/Input은 역할 사유로 L/E/S 일부 닫음. Primary/Danger는 커밋이라 개방. 일괄 Interactive control 개방 없음 | 각 표 |
| C3 | “This is not a complete state-coverage claim.” dest 1 | grep |
| C4 | Block·Error Notice·Warning Notice·Success Notice·Transaction table은 non-interactive + reason, map 없음 | 본문 |
| D1 / D1a | Named gaps는 원본이 세운 미해상 값만 (커브, light green tint hex, `#316AD6`). native application / back-office 0 | grep 0 |
| D2 / D2a | 페르소나 식별자 DESIGN 0 · provenance 0. Audience는 원본 머리글 원문만. 처분 행은 무식별 | 원본 §13 식별자 0 (처분 행에 성씨·이름을 바늘로 심지 않음) |
| E1 | freshness / sources / claim ledger / closing note는 provenance | 파일 |
| E2 / E2a / E2c / E2d | 이 표의 목적지·준수 주장은 위 grep 후 기재. 곡선 부재 단언의 분모는 DESIGN.md | 절차 |
| E3 | hex/커브 표기 왜곡 없음. provenance 곡선은 원문 그대로 | grep cubic-bezier |

## F1 / F2 / 고유 표현 대조

- **F1 B2a 스캔:** DESIGN.md 전편 재독. 완전형 한정 25곳(감사 후 실측). Scope·Principles·Content·Motion register/durations·Elevation·Layout·Semantic corporate layer·Button sizes. 원문 복원(`restrained and confidence-building` dest **1**, `Spring / overshoot easing is **forbidden**` dest **1**, `"press me, this is safe."` dest **1**).
- **F2 E2 대조:** 감사 후 각 dest를 `grep -o <패턴> <파일> | wc -l`로 파일별 재실측해 이 표를 고쳤다. 이중 목적지(homepage, favicon, ds.type, prose-derived, color.ts / theme.ts / values.ts, `states` 복합 문자열, 커브)는 둘 다 적음. 결합 문자열 `backdrop \`zIndex\` \`200\`` dest 0이라 분리해 적음. “B3 유지”는 본문 전문 DESIGN dest 1 확인 후 기재.
- **고유 표현 대조 (웨이브 43):** 원본에서 연도·고유명사·인용·근거 수식어·제약 문장 **64**개를 뽑아 `grep -oF` 동치 `str.count`로 대조. 0이었던 **3**개를 복원 (`restrained and confidence-building`, `Spring / overshoot easing is **forbidden**`, `"press me, this is safe."`). 복원 후 해당 64개 중 원본 출현>0인 항목의 산출 0건은 0. latin-copy-audit 후속 lost 0.
