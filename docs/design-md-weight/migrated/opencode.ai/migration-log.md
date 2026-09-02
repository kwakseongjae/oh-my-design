# OpenCode AI migration log

- Source: `web/references/opencode.ai/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/opencode.ai/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/opencode.ai/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/opencode.ai/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: ai (US open-source AI coding agent). 토큰 표면은 공개 홈 `https://opencode.ai/` + 문서 `https://opencode.ai/docs/`. YAML `ds.type: brand` — OpenCode Brand page는 logo/brand assets이지 발행 컴포넌트 토큰 사양이 아님. YAML `tokens.source: prose-derived`. sibling 전용 측정(Inverse `8×12×8×20` / 42px, install-tab 50px / 16px·400 / `0px text-only`, sidebar 0px / 4×24 / 28px / 14px·600, Light Cream, 60% Charcoal)은 portable 토큰으로 올리지 않았다. A5a 손 대조 발행 카피 아래 목록 / 미생존 0.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep`한 뒤에 썼다(F2).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`) | 분리 → provenance · `name` 옮김 → DESIGN.md H1 | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# OpenCode AI Design System`. `OpenCode AI` DESIGN dest ≥1 · provenance dest ≥1. `id`/`country`/`category`/`homepage`는 provenance Identity 표. |
| YAML `primary_color: "#000000"` | 옮김 → Foundations catalog identity row · 분리 → provenance Identity | 이중 목적지. `tokens.colors.primary` `#201d1d`와 합치지 않음(A4). `#000000` DESIGN dest **6** · provenance dest **6**. |
| YAML `logo.type: github` / slug `opencode-ai` | 분리 → provenance · 옮김 → DESIGN.md Assets | 이중 목적지. `opencode-ai` DESIGN dest **1** · provenance dest **1**. |
| YAML `verified` / `omd` / `tokens.source: prose-derived` / `tokens.extracted` / `components_harvested` | 분리 → provenance · `prose-derived`는 Scope에도 옮김 | 이중 목적지(E2a). `prose-derived` DESIGN dest **2** · provenance dest **5**. `components_harvested` DESIGN dest **0** · provenance dest **2**. |
| YAML `ds.name` / `ds.url` / `ds.type: brand` / `ds.description` / `ds.og_image` | 옮김 → Typography & Assets · 분리 → provenance Identity | 이중 목적지(A1c). `ds.type` DESIGN dest **2** · provenance dest **6**. `social-share.png` DESIGN dest **1** · provenance dest **1**. |
| YAML `tokens.colors` (**16키** — `primary` `canvas` `foreground` `on-primary` `muted` `surface` `surface-light` `hairline` `body` `accent` `accent-hover` `accent-active` `error` `success` `warning`) | 옮김 → Foundations `Semantic color` | 16키 전부. canvas `#fdfcfc`와 on-primary `#fdfcfc`를 합치지 않음. primary `#201d1d`와 foreground `#201d1d`를 합치지 않음. surface-light `#f1eeee`와 input-email `#f1eeee`와 §4/sidebar `#f8f7f7`를 합치지 않음. |
| §2 extra hex (`#d70015` `#a50011` `#cc7f08` `#995f06` `#6e6e73`) + Border Warm + Border Tab + Border Outline | 옮김 → Foundations recorded body writings | YAML 키가 아님. `#d70015` DESIGN dest **3**. `#6e6e73` DESIGN dest **1**. `rgba(15, 0, 0, 0.12)` DESIGN dest **8** · `rgba(15,0,0,0.12)` DESIGN dest **3** (keep-both). |
| YAML `tokens.typography` family sans+mono + 6 roles (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 | 옮김 → Typography & Assets `Type roles` / `Family` | A1a: YAML `1.50` · `1.00` · `2.00`를 px로 바꾸지 않고 비율 그대로. `2.38rem` / `0.88rem` / `1.00rem` 병기. YAML use 6/6 착지. |
| YAML `tokens.spacing` (xs 4 … section 96) | 옮김 → Foundations `Spacing` | 단위 없는 YAML 스텝을 §5 px 목록 옆에 병기. `xs: 4` DESIGN dest **2**. `section: 96` DESIGN dest **2**. spacing 4를 rounded sm/md 4와 합치지 않음(A4). spacing 16을 type 16과 합치지 않음. |
| YAML `tokens.rounded` sm 4 / md 4 / lg 6 / full 9999 | 옮김 → Foundations `Shape` (+ Components) | 이중 목적지(값). sm와 md를 한 키로 합치지 않음. `full: 9999` DESIGN dest **2**. `lg: 6` DESIGN dest **2**. |
| YAML `tokens.shadow.flat: "none"` | 옮김 → Foundations `Elevation` | §6 네 레벨 표와 함께. |
| YAML `tokens.components` 4개 (`type: button` ×1, `input` ×1, `badge` ×1, `tab` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` 1 · `input` 1 · `badge` 1 · `tab` 1 = YAML과 동수. YAML `use`를 각 블록 Token-set use 행으로 병기. |
| §4 Primary line-height 2.00 / Outline `rgb(253, 252, 252) none 0px` | 옮김 → Components Primary (Dark Fill) | YAML font `16px / 500` 옆에 긴 쪽을 병기(웨이브 37). |
| §4 Email Input bg `#f8f7f7` | 옮김 → Components Email Input + Foundations recorded writings | YAML `input-email.bg` `#f1eeee`와 합치지 않음. `#f8f7f7` DESIGN dest **11**. |
| §4 Light Link / Muted Link / Navigation / Terminal Hero / Feature List / Email Capture / Image Treatment | 옮김 → Components & States | YAML 키 없음. `Not in the token set` DESIGN dest **8**. primitive type 발명 없음. |
| source footer live-DOM Primary `8×16×8×10` / 40-42px / Coffee Charcoal / Inverse 4px / install-snippet / sidebar `#f8f7f7` / warm-cast | 옮김 → Components + Foundations | YAML `4px 20px`와 합치지 않음(웨이브 35 표면 귀속). `8×16×8×10` DESIGN dest **2** · provenance dest **3**. `40-42px` DESIGN dest **2** · provenance dest **3**. `Coffee Charcoal` DESIGN dest **4**. |
| sibling-only Inverse `8×12×8×20` / 42px, install-tab 50px / 16px·400 / `0px text-only`, sidebar 0px / 4×24 / 28px / 14px·600, Light Cream, 60% Charcoal | 분리 → provenance sibling table | portable 토큰 승격 0. `8×12×8×20` DESIGN dest **0** · provenance dest **1**. `Light Cream` DESIGN dest **0** · provenance dest **1**. `0px text-only` DESIGN dest **0** · provenance dest **2**. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 8px base, 1px/2px/4px fine, 20px/40px/64px/80px extra scale, 800-900px, whitespace notes. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Flat / Border Subtle / Border Tab / Border Outline 표. |
| §1 Do 6항 | 옮김 → Experience `Application rules` | 산출 6항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 배치. |
| §1 Don't 5항 | 옮김 → Experience `Avoid` | 산출 5항. B2a 완전형 한정을 절 머리에 배치. 원본 Don't만. 원본에 없는 도메인 부정 claim 없음(D1). |
| §7 Interaction & Motion (hover sequences / focus hedge / 100-150ms) | 옮김 → Foundations color hover keys + Motion + Capture record Focus 경계 | generic Focus를 `focus-visible`로 승격하지 않음(B1). `100-150ms` DESIGN dest **3**. `motion-fast` 150ms와 합치지 않음. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms `Responsive behavior` | 원본 표 Mobile `<640px` / Tablet `640-1024px` / Desktop `>1024px`. 38px → 28px → 24px. 96px → 64px → 48px. 원본 표이지 live computed breakpoint가 아님을 한정. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique §9 sticky `#201d1d` DESIGN dest **1** · provenance dest **1** (Navigation). Unique 16px vertical gap DESIGN dest **1** · provenance dest **1** (Feature List). Unique footer 16px/400 `#9a9898` + weight 700 headers + Border-top `rgba(15, 0, 0, 0.12)` → Muted Link. Unique Iteration Guide contrast `use `#201d1d` not `#000000`, use `#fdfcfc` not `#ffffff`` → Foundations Semantic color (A1 / A3). `#ffffff` DESIGN dest **1** · provenance dest **1**. 겹치는 색·타입·radius·버튼 값은 이미 Foundations/Components에 있음(A3). |
| §10 Voice & Tone — 표 + 라이브 샘플 + forbidden | 옮김 → Content & Locales | "다운로드" · "문서 읽기" · "Try it" · `curl -fsSL https://opencode.ai/install | sh` · "오픈 소스 AI 코딩 에이전트" · "Model not configured. Run `opencode setup`." · "Revolutionary AI coding" 바이트 그대로(A5). B2a 완전형 한정을 표 앞에 붙였다. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) · URL은 분리 → provenance `Narrative` | 문단 **마지막 문장까지**: "Position: serious developer tool that respects CLI heritage while integrating LLM capabilities." 2021 Y Combinator, $1M, June 19 2024, 650,000 MAU, 25,000 GitHub stars, profitable in 2025, University of Waterloo, Anomaly, server-client architecture, terminal/desktop/web/mobile, Zen 알아보기. `June 19 2024` DESIGN dest **1** · provenance dest **3**. |
| §12 Principles 5항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출 5항. B2a 완전형 한정을 머리에 배치. |
| §13 Personas 3 가상 아키타입 (이름·나이·도시 포함) | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 §13 머리글이 fictional archetypes라고 명시. Experience `Audience`에는 그 머리글의 그룹 원문(terminal-first developers, OSS-enthusiast engineers, indie SaaS)만 남겼다. 식별자는 DESIGN dest 0 · provenance dest 0 · 이 로그 dest 0. |
| §14 States 11행 | 옮김 → Components & States `Capture record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). Empty×2 · Loading×3 · Error×2 · Success×2 · Skeleton · Disabled 경계 그대로. graph 위임 없음. generic Focus `likely`는 `focus-visible`로 승격하지 않음(B1). |
| §15 Motion & Easing — durations / "Standard cubic-bezier; no bounce" / reduced-motion | 옮김 → Foundations `Motion` | 0ms / 150ms / 250ms 유지(T1-3 제약 5). `prefers-reduced-motion: reduce` DESIGN dest **1**. 숫자 cubic-bezier 튜플은 원본에 없음 — 삭제할 무출처 커브 없음. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance Named gaps | 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 이 전문이 산출 DESIGN.md에 실제로 존재함을 확인한 뒤 이 행을 적었다 (`transition properties` DESIGN dest **2**). |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 | 옮김 → Experience `Scope` | `https://opencode.ai/` / `https://opencode.ai/docs/` 를 토큰 표면으로, Brand page를 에셋으로, GitHub를 서사로 분리 명시. |
| §1 인과·해석 문장(terminal-native, lived-in, everything is code) | 옮김 → Experience `Scope`, 한정 부착 | B2a 완전형 인접 배치. 원본 측정 문장은 사실 인용으로 같은 절에 남김. |
| §1 Key Characteristics 10항 | 옮김 → Experience `Distinctive traits` | 산출 10항. B2a 완전형 한정을 머리에 배치. |
| §3 Typography principles 4항 | 옮김 → Typography & Assets Type roles 아래 | B2a 완전형 한정. |
| §4 하단 footer 블록 (**Verified** / Tier 1 / Tier 2 / Conflicts / Style ref stripe) | 분리 → provenance | freshness·출처 원장(E1). `stripe` DESIGN dest **0** · provenance dest **1**. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. 한정을 붙인 자리 **29곳**을 provenance `Derived editorial inventory`에 색인했다(본문 완전형 `"derived editorial implementation inference from the verified surfaces"` + `"not OpenCode-authored or a separately published UI specification"` 짝 29 = 원장 29). Principles 안팎: Scope 표면 귀속 · Scope 레이어 읽기 · Scope 서사 비토큰 · Primary tasks 선정 · Audience drop · Distinctive traits 분류 · Principles · Application rules · Avoid · Semantic color 비해합 · Spacing keep-both · Shape 로컬 키 · Elevation 플랫 · Motion 커브 생략+B3 · Font evidence 분류 · Family unresolved specimen URL · Type roles keep-both · Type roles Primary font 비해합 · Type principles · Assets Brand page · Capture record Focus 경계 · Capture record Hover 정성 · Capture record 역할 판정 · Light Link 장식 비해합 · Components chrome C4·Email Capture 매핑 · Layout 클러스터 · Responsive 표 · Content 큐 해석 · Named gaps. 발행 컴포넌트-토큰 사양 없음(`ds.type: brand`은 logo/assets) — 예문 형태 `not OpenCode-authored or a separately published UI specification`.

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `str.count`로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity name, `#000000`, github slug, `prose-derived`, `ds.type`, §14 상태, B3, sibling-only 기하). `components_harvested` · `stripe` · sibling `8×12×8×20` · `Light Cream` · `0px text-only` 은 provenance only(DESIGN dest 0; `0px text-only` provenance dest **2**). 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회(`transition properties`+`animation name`+`duration`+`easing`+`reduced-motion behavior`, Motion · Named gaps), primitive type 4종 동수, lineHeight 비율 3종, YAML `use` 4/4 + typography use 6/6, §14 11행. F3 재실측(본문 한정 4건 신설 후, `grep -o` 파일별): dest 리터럴 표 수치는 불변. B2a 짝 본문 29 = 원장 29.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| YAML hex 16종 + catalog `#000000` + §2 extra + §9 unique `#ffffff` | 16/16 YAML hex + `#000000` + `#d70015` `#a50011` `#cc7f08` `#995f06` `#6e6e73` `#f8f7f7` + §9 unique contrast `#ffffff` 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. |
| portable 본문의 hex 발명 | 0건. 본문의 모든 `#rrggbb`가 legacy 토큰/§2/footer 집합의 부분집합. |
| unitless lineHeight (A1a) | YAML `1.50` dest 10 · `1.00` 9 · `2.00` 7 비율로 생존. |
| primitive type (A1b) | button 1 · input 1 · badge 1 · tab 1 — legacy YAML 실측과 동수. |
| spacing 키 경로 | `xs: 4` `sm: 8` `md: 12` `base: 16` `lg: 24` `xl: 32` `xxl: 48` `section: 96` 각 dest ≥2. 값 16이 type size와 같은 숫자여도 키를 합치지 않음. |
| rounded 키 경로 | `sm: 4` dest 3 · `md: 4` dest 3 · `lg: 6` dest 2 · `full: 9999` dest 2. sm와 md를 합치지 않음. |
| `[FILL IN]` | 원본 0건, 산출 DESIGN.md 0건. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 행은 전부 역할 사유(destination CTA · tab · value field). 머리의 "Absence of a capture is not a `not-applicable` reason" 1회는 금지 사유가 아님. |
| C2 | Primary / Inverse / Links / Docs sidebar 의 L/E/S는 destination 역할로 `not-applicable`. 두 tab의 L/E/S는 tab 역할로 `not-applicable`. Email Input error는 form field로 `applicable`, loading/success는 value-field 역할로 `not-applicable`. primitive 일괄 개방 아님. `loading \| not-applicable` dest **9** · `error \| applicable` dest **1**. |
| C3 | "This is not a complete state-coverage claim." 를 Components Capture record에 명시. 완료 주장 0건. |
| C4 | Navigation chrome · Terminal Hero · Feature List 는 applicability map 없음. Inverse / Light Link / Muted Link / Install-snippet / Docs sidebar 는 YAML type이 없어 primitive type 발명 없음. |
| D2 / D2a | §13 식별자·동기 스케치 본문 0 · provenance 0 · 이 로그 0. 삭제 행은 절·인원·필드 종류만. Audience는 머리글 원문 세 그룹만. |
| D1 | `native-application` / `storefront` / `authenticated` / `mobile app` / `back-office` DESIGN dest 0. 원본이 세운 home / docs / Brand page / Mobile `<640px` / `terminal, desktop, web, mobile`(서사) 만 유지. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문과 sibling에서 발행 문자열을 추출해 산출 3파일에 대조 — 미생존 **0건**. 분모는 아래 목록. |

### A5a 손 스윕 목록 (추출 16 / 미생존 0)

발행 카피만. 설명문·점 경로·폰트 스택·제3자 매체명·declared-only 페이스 이름은 바늘이 아니다.

Legacy 본문 (12): `다운로드` · `문서 읽기` · `Try it` · `curl -fsSL https://opencode.ai/install | sh` · `오픈 소스 AI 코딩 에이전트` · `Model not configured. Run \`opencode setup\`.` · `Revolutionary AI coding` · `Open a folder` · `Try \`opencode chat\`` · `Zen 알아보기` · `OSS-AI-coding-direct` · `CLI-fluent`

Sibling 추가 (2, 원본 0 / 산출 생존): `소개` · `curl / npm / bun / brew / paru`

(중복 제외 16. `다운로드` / `문서 읽기` / `Zen 알아보기` 는 원본+sibling 겹침 — 한 바늘로 셈.)

## 고유 표현 대조 (웨이브 43)

뽑은 표현 48 / 0이었다가 복원한 수 0 (초안에 이미 착지: 연도·고유명사·인용구·§11 인과 전체·값 수식어 rgb(32, 29, 29) / 8×16×8×10 / 40-42px / Coffee Charcoal · §15 제약 Standard cubic-bezier; no bounce / prefers-reduced-motion · YAML use 6종 · §14 11행).

## 개정 (의미 검토 FAIL 1)

Shape drops sibling-only `0px text-only`. Source footer Header/Hero Primary 4px and Inverse 4px stay. Component Install-snippet block keeps `install-snippet text-only tabs color-state`. Sibling `0px text-only` stays in provenance sibling table. `0px text-only` DESIGN dest **0** · provenance dest **2**.
