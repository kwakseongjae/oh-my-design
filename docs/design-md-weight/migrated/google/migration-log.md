# Google migration log

- Source: `web/references/google/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/google/.verification.md` — **존재함**(`find`로 확인), 전문 판독, **증거 등급으로만 채택**. 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/google/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/google/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `inspectDesignMd` + `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: consumer-tech. **증거 영역이 셋**이다 — dark Search (`https://www.google.com/`), light Advanced Search (`https://www.google.com/advanced_search?hl=ko`), light Business Profile (`https://business.google.com/kr/business-profile/`). Material Design 3는 발행 디자인 시스템이되 원본 자신이 문서/베이스라인 팔레트를 제품 토큰 대체물로 쓰지 말라고 못박았다. B2a 예문은 그 전제에 맞춰 `including the published Material Design 3 documentation`으로 닫았다.

`provenance.md`의 `Claim ledger`가 YAML 클레임의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a).

## A5a — 발행 카피 손 대조 (규칙집 v12)

게이트 `copy-loss` 바늘은 이 브랜드에서 전량 라틴이라 기계 대조가 카피 보존의 증거가 아니다. 원본과 sibling에서 인용 문자열을 추출한 뒤, 브랜드가 발행한 문자열만 산출 3파일과 손 대조했다.

| 단계 | 수치 |
|---|---|
| 추출 (게이트와 동일한 따옴표 정규식) | 원본 `DESIGN.md` **193**개 인용 문자열 + sibling `.verification.md` **13**개 |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **28**개 (사명 1, philosophy 인용 3, "Ten things we know to be true", 원칙명 3, 패밀리/아이콘 페이스명 8, `Google Blue`, YAML `use` 문자열 5, 타입 역할 use 4, `SIL Open Font License 1.1`, `Material Design 3`) |
| 바늘이 아니라고 판정해 제외 | hex·치수·CSS·셀렉터·점 경로·URL·카피에 대한 서술·토큰 키 경로·Tier 2 부재 문장 |
| 미생존 | **0** |

분모: 추출 206 / 바늘 28 / 미생존 0. `verdict: PASS`를 카피 보존의 증거로 쓰지 않는다.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Google Design System`. `primary_color` `#1a73e8`은 provenance Identity 표와 DESIGN.md Foundations `Semantic color` / Components 양쪽(`grep -oF`: DESIGN 9 · provenance 10). `type: simpleicons` / `slug: google` 연속 문자열은 DESIGN.md Assets 1 · provenance Identity 1. Logo decision은 `simpleicons` 1회만(그 키 경로 0). |
| YAML `verified` / `added` / `omd` / `tokens.source: reconciled` / `tokens.extracted` / `components_harvested: true` / `verification_v2` | 분리 → provenance | freshness·증거 등급 원장(E1). Identity 표는 칸 분리(`tokens.source` \| `reconciled`, `components_harvested` \| `true`). 연속 문자열 `tokens.source: reconciled` · `components_harvested: true`는 Proof notes 각 1 · DESIGN.md 0. |
| YAML `ds` (`name: Material Design 3`, `url`, `type: system`, `description`) | 분리 → provenance · 이름·경계는 옮김 → DESIGN.md | 이중 목적지. `ds.type: system` 연속 문자열은 Proof notes 1 · DESIGN.md 0(Identity 표는 칸 분리). `Material Design 3` 이름은 DESIGN.md 다수(Scope·Foundations·한정 문장). 경계 전문 “documentation and baseline guidance are context, not a substitute for observed Google product tokens”는 DESIGN.md **1**(Scope만; Foundations 0). Foundations는 원본 §2 문장(“Material Design 3 publishes its own typography guidance, but no Material documentation chrome or baseline palette is promoted here…”). `ds.url` `https://m3.material.io`는 DESIGN Scope 1 · provenance 3. |
| YAML `tokens.note` (전문) | 분리 → provenance (인용 블록) · 값은 옮김 → DESIGN.md | 이중 목적지. 세 표면 분리와 Material/logo/declared-only 경계가 Scope·Foundations에 별도로 있음. note 전문은 provenance Identity 아래 인용. |
| YAML `tokens.colors` 7키 (`primary` `#1a73e8`, `canvas` `#ffffff`, `canvas-dark` `#22242a`, `foreground` `#3c4043`, `foreground-inverse` `#e8e8e8`, `muted` `#5f6368`, `outline` `#dadce0`) | 옮김 → Foundations `Semantic color` | grep 확인: 일곱 hex 전부 DESIGN.md Foundations에 역할명과 함께 존재. muted는 원본 §2대로 Search utility + Business Profile secondary. |
| YAML `tokens.typography.family` (`ui` Google Sans, `text` Google Sans Text, `display` Google Sans Display, `search-system` Arial) | 옮김 → Typography `Family` · `Type roles` | 네 패밀리 전부 Family 불릿과 Type roles 표. Arial을 브랜드 페이스로 대체하지 않는 경계 유지. |
| YAML `tokens.typography` 4역할 (display/body/action/search-field) + §3 표 6행 | 옮김 → Typography `Type roles` | 6행. display `48px` / `400` / `56px` / `-0.5px` / “Business Profile section heading only.”; action `16px` / `500` / `24px` / `0.5px` / “Business Profile CTA and action labels.”; body `16px` / `400` / `24px` / “Business Profile cards, lists, and body copy.”; search-field `16px` / `400` / `22px` / “Advanced Search text input; Arial system face.”; §3-only Business navigation `14px` / `500` / `20px`; Search compact `14px` / `500` / `normal`. A1a: 원본이 이미 px line-height로 적어 비율 변환 없음. |
| YAML `tokens.spacing` `{ xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }` + §5 `12`·`48` | 옮김 → Foundations `Spacing` · Layout | 이중 목적지. YAML 5키는 Spacing 문장에 `xs: 4` 형태로 verbatim(grep 1). §5 관측 12·48은 같은 문장과 Layout에 보존(YAML 키가 아님). |
| YAML `tokens.rounded` `{ nav: 4, search-key: 8, card: 24, full: 1000 }` | 옮김 → Foundations `Shape` | Shape 표 4행. `full: 1000`은 값 칸에 `full: 1000 (1000px)`로 착지(grep 1). 컴포넌트 radius는 원본대로 `1000px`. |
| YAML `tokens.shadow` (`flat: none`, `search-key-hover: rgba(23,23,23,0.24) 0px 1px 3px 0px`) | 옮김 → Foundations `Elevation` · Components submit-key hover | 이중 목적지. `none`과 rgba 문자열 바이트 보존(grep: DESIGN Elevation 1 · submit-key 1). |
| YAML `tokens.components` 5개 (`type: button` ×4, `type: card` ×1) | 옮김 → Components & States · states 전문은 분리 → provenance | 이중 목적지(E2a). A1b: `Primitive type: \`button\`` 4 · `Primitive type: \`card\`` 1. `use` 문자열은 DESIGN Role 행. YAML `states` 전문 5건(`default, hover, pressed, and focus observed on…` 4 · `disabled observed on the captured inactive image card` 1)은 provenance Token-block only — DESIGN.md **0**. Advanced Search text field는 YAML에 없고 §4에만 있음 → 별도 레코드(A3). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` · Distinctive traits | 사명, 1998, Larry Page / Sergey Brin, Search/YouTube/Android/Gmail 생태계, 세 표면 분리, dark `#22242a` / light, Google Sans 3종 + Arial, Google Blue `#1a73e8`, 42px or 50px, 24px 카드. Scope 도메인 분리·정체성 읽기·타입롤 확인, Distinctive 그룹핑에 각 인접 B2a 완전형. |
| §1 공식 히스토리·철학·Google Design·brand-resource·Material URL | 분리 → provenance · 경계는 본문 유지 | 서사 출처는 provenance `Narrative`. 본문은 토큰이 아니라고 밝힌 경계를 Scope에 유지. |
| §2 Color Palette & Roles | 옮김 → Foundations `Semantic color` | 7역할. Material 문서 크롬/베이스라인 비승격 문장 보존. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 5행(107/145/4 uses, Product Sans / Google Symbols / Material Icons 선언-only, Material Symbols Outlined 아이콘 1회, Google Sans Code OFL 1.1 · Gemini · Android Studio, 라이선스 URL 부재). |
| §4 Component Stylings 6레코드 | 옮김 → Components & States | high-emphasis(`#1a72e7` hover, `#185abc` pressed/focus, `1px solid transparent`), medium-emphasis(`#e8f1fd` pressed, `#e4eefc` focus), nav(`#202124`, 변경 토큰 없음), inactive card(disabled only), search-key(hover border+shadow), Advanced Search field(transparent, `#474747`, 12px 16px, 48px). 셀렉터는 본문 한 줄 + provenance `Capture selectors` (E2a). |
| §4 하단 **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장. Tier 2 두 시도 “no value adopted” 보존. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 36px keys, 50px text area, 48px inputs, 12px/16px field padding, 42px and 50px pills, 48px nav, 24px cards, spacing 4/8/12/16/24/32/48. |
| §6 Depth & Elevation | 옮김 → Foundations `Elevation` | Flat / state shadow / 2px blue ring(medium- and low-emphasis). “all Google product surfaces are shadowless” 부정과 Material elevation 비승격 문장 보존. |
| §7 Do's | 옮김 → Experience `Application rules` | 5항. Governance 통제 문구에 넣지 않음. 항목 안 근거에 B2a 완전형 절 머리. |
| §7 Don'ts | 옮김 → Experience `Avoid` | 5항 원문. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `desktop-only (1440x900)` 원문 보존(grep 1). mobile breakpoint / layout-collapse / touch-target 미주장 보존. |
| §9 Agent Prompt Guide (Quick reference 5불릿) | 삭제 | 도구용 재진술. 열거된 값(`#1a73e8`, 42px full pill, `8px 16px`, Google Sans 16px/500, `#dadce0`, `#303134`, `#e8eaed`, 8px/36px, Arial 14px/500, transparent `#474747` 12px 16px 48px, Google Sans Text 16px/400/24px, 24px card)은 전부 Foundations/Components에 이미 있음. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | 철학 문단, Context/Tone 3행, 샘플 3건 바이트 그대로. “short, plain register…” 제품 함의는 인접 B2a 완전형. |
| §11 Brand Narrative | 옮김 → Experience `scope` | 1998 창립, 사명, Search/YouTube/Android/Gmail, Product Sans addressed product lockups after the 2015 identity update → Google Sans → Google Sans Text. 연표 URL은 provenance. 2015 리브랜드 절은 `Revision 2026-08-28 (wave28 review)`에서 복원. |
| §12 Principles | 옮김 → Experience `Principles` | 4항 + UI implication. 헤드라인 1–3은 Google 발행, 4는 Google Design 문서. UI implication과 “이 계약의 원칙으로 읽기”에 B2a 완전형. |
| §13 Personas | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본은 1차 리서치 부재를 말하고 `[FILL IN]`만 둔다. 이름·나이·도시·전기는 원본에도 없다. Audience는 그 부재 문장만 옮김. provenance Omission ledger는 절·필드 종류만(무식별). |
| §14 States 10행 | 옮김 → Components `Capture record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable). Default/Hover/Pressed/Focus/Disabled/Expanded menu와 Empty/Loading/Error/Success 부재를 표로 보존. `[FILL IN]` 래퍼는 생략하고 이름만 Named gaps. Focus 관측은 `focus-visible` treatment로 승격하지 않음(B1). graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations `Motion` | “interaction states but no duration or easing measurement”와 Material typography ≠ motion token 문장 보존. `[FILL IN]` 생략. 삭제할 무출처 커브 없음(원본에 cubic-bezier 0). |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` | 원본에 승격 조건 문장 없음. 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」이 DESIGN.md에 실재함(`grep` 1회: “transition properties, animation name, duration, easing, and reduced-motion behavior have been observed”). 약화 문구 없음. E2c: 이 행은 그 전문이 본문에 있는 뒤에만 적음. |
| 원본 H1 `# Design System Inspiration of Google` | 삭제 → provenance `Omission ledger` | Core identity `# Google Design System`으로 대체. |
| Sibling `.verification.md` Proof / raw samples / font corroboration / conflict matrix / logo | 분리 → provenance | 증거 등급만. **portable 승격 0건**인 sibling-only: menu item 38px, primary pressed 이중 shadow, secondary pressed `rgb(23, 78, 166)`, nav tracking `0.25px`, surface-kind 라벨. 본문 0(의도). |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 이 이관에서의 처리 | 실측 근거 |
|---|---|---|
| A1 / A1a | 검증 hex·치수·use 문자열 보존. line-height는 원본이 px라 비율 변환 없음 | `#1a73e8` `#22242a` `#1a72e7` `#185abc` `56px` `24px` `22px` `normal` `-0.5px` `0.5px` `full: 1000` DESIGN.md 존재 |
| A1b | primitive type 컴포넌트별 보존 | `Primitive type: \`button\`` 4 · `Primitive type: \`card\`` 1 |
| A1c | `ds.type: system`, `tokens.source: reconciled`, `components_harvested: true` | Identity 표는 칸 분리. 연속 문자열은 Proof notes 각 1. DESIGN.md 0 |
| A2 / A3 | §14 본문 보존. §9 고유값은 이미 §4에 있어 삭제. §4-only Advanced Search field는 컴포넌트 레코드로 이동 | Capture record 10행 · Advanced Search text field 절 존재 |
| A4 | `#1a73e8`을 일반 Ink로 합치지 않음 | Foundations는 Primary action blue, Components는 해당 액션 필드 |
| A5 / A5a | 발행 카피 28/28 생존 | 사명·3인용·원칙명·페이스명·use 문자열 grep 통과 |
| B1 | Focus 캡처를 `focus-visible` treatment 행에 넣지 않음 | 각 액션의 Focus는 레코드 본문, `focus-visible` 행은 “no treatment is carried” |
| B2 / B2a | 파생 해석 16곳에 완전형 한정. Material 3를 포함해 닫음 | `derived editorial implementation inference` DESIGN.md **16** · provenance 원장 **16행**. 예문 전제 주석 준수(발행 사양 명시) |
| B3 | 다섯 증거 + 컴포넌트별 computed 관측 게이트 본문 1회 | 위 B3 행. “공식 출처로 검증될 때까지” 0 |
| C1 | `not captured`를 `not-applicable` 사유로 쓰지 않음 | 미관측은 omit. `not-applicable` 5행은 전부 역할 사유(nav destination 3 · field loading/success 2) |
| C2 | 역할 판단. 액션 2개는 commit/destination 미해상 → L/E/S 개방. nav는 destination → 닫음. submit은 commit → 개방. field는 필드 자체 비커밋 → loading/success 닫고 error 개방 | `not-applicable` 5행 전부 의미 사유. “Not captured” 0 |
| C3 | 완료 주장 없음 | “This is not a complete state-coverage claim.” 1 |
| C4 | inactive card는 kind·map 생략 | 카드 레코드에 Kind 행 없음 · applicability 표 없음 |
| D1 / D1a | 원본에 없는 도메인을 gap으로 열거하지 않음 | Named gaps는 empty/loading/error/success, motion, audience, mobile breakpoint, webfont license URL, enabled-card, Material chrome — 전부 원본이 세운 이름. `native-app` / `storefront` / `authenticated` DESIGN.md 0 |
| D2 / D2a | 가상 persona 없음. 삭제 표기는 무식별 | 이름·나이·도시 세 파일 0. Omission ledger는 “§13 / `[FILL IN]` audience placeholder”만 |
| E1 | 원장·freshness·Proof·claim ledger는 provenance. standalone 한정은 본문 | 본문 상단 vendor metadata 0 |
| E2 / E2a–d | 이 표의 목적지는 grep 후 기재. 이중 목적지는 둘 다. 부재 단언이 자기 목록을 분모에 넣지 않음 | sibling-only는 “본문 0(의도)”이지 “이 파일에 없다”가 아님 — 같은 행이 그 값을 provenance에 나열함 |
| E3 | 값 표기 왜곡 없음 | hex를 `# 1a73e8`처럼 나누지 않음 |

## F1 / F2

- **F1 (B2a 스캔):** DESIGN.md를 제출 전 처음부터 재독. 인과·해석·판단 문장 16곳(Scope 도메인 분리, Scope 정체성 읽기, Scope 타입롤 확인, Primary tasks 명명, Distinctive 그룹핑, Principles UI implication, Application-rule 근거, Semantic 역할명 읽기, Spacing 비그리드, Font live-UI 승격, Family 폴백 금지, Assets Simple Icons 분류, Components kind/applicability+Focus 증거종류, card C4 생략, Layout 비그리드, Content register 읽기)에 인접 완전형 한정을 붙임. Google 발행 사명·철학 인용·§7 Don't 원문에는 한정을 붙이지 않음.
- **F2 (E2 대조):** 이 로그의 각 목적지 문자열은 쓰기 전에 `grep`으로 DESIGN.md / provenance.md에서 확인했다. 기억으로 적은 행 없음.

## Hashes (post-write)

- DESIGN.md SHA-256 `440d3d2db53d3b21826178ac0fac4edfbbad9ae9fb098574733297f947cdbe2e`
- provenance.md SHA-256 `3067ada4ef9f1790274624cf75cd60094be61957ec55a331da268108a12eb656`
- `--gate-only` `verdict: PASS`, `problems: []`
- `copy-loss` compared 0 / candidates 159 — A5a 손 대조 분모는 위 표(28/28/0)

## Revision 2026-08-28 (wave28 review)

Confirmed defect only: A1 unique-fact loss of the source §11:361 clause `Product Sans addressed product lockups after the 2015 identity update`. Orchestrator reconfirmed the absence; existence is not re-litigated.

- Restore: Experience Scope type-evolution sentence `DESIGN.md` 15 (same line that already carried Product Sans → Google Sans → Google Sans Text). Source wording restored as a source-stated Google Design fact, not as a derived reading — no new B2a qualifier, no new provenance derived row. B2a remains **16 = 16**.
- Not touched: token values, component tables, state rows, existing B2a sentences, provenance 1:1, `web/references/google/**`.
- Line count: `DESIGN.md` still **388** (in-place edit). Audit-log pointers 11 · 15 · 34 · 77 · 91 · 129 · 140 · 177 · 323 re-read against the current file and still land on Scope surface-split / Scope type-role confirmation / Distinctive / Semantic / Spacing / Font live-UI / Family fallback / Capture record / Layout. Provenance derived inventory still 16 data rows (233–248). No dest moved.

실측 (`find`로 산출 4파일·원본·sibling 존재 확인 후 `grep -o <패턴> <파일> | wc -l`, 파일별. `no matches found` 아님):

| 패턴 | 원본 | sibling | DESIGN.md | provenance.md | migration-log.md | audit-log.md |
|---|---:|---:|---:|---:|---:|---:|
| `2015 identity update` | 1 | 0 | **1** | 0 | 4 | 0 |
| `2015` | 1 | 0 | **1** | 0 | 6 | 0 |
| `identity update` | 1 | 0 | **1** | 0 | 5 | 0 |
| `addressed product lockups after the 2015 identity update` | 1 | 0 | **1** | 0 | 3 | 0 |

Review-time portable-body counts were DESIGN **0**. After this revision the portable body is **1** (line 15). The log's extra hits are the §11 dest row plus this revision section (E2d: this file is in its own denominator). Provenance 0 is correct: the clause is a source fact, not a derived inference.

`--gate-only` `verdict: PASS`, `problems: []`. `portable_core: true`.

Post-revision DESIGN.md SHA-256: `611fa4c768c810d57f51c521a6c7125239ab593e824bea737d7fe52854f4387b`. provenance.md SHA unchanged `3067ada4ef9f1790274624cf75cd60094be61957ec55a331da268108a12eb656`.
