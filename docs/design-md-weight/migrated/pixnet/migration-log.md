# PIXNET migration log

- Source: `web/references/pixnet/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/pixnet/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/pixnet/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/pixnet/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: content (TW blogging / UGC). 토큰 표면은 공개 홈 `https://www.pixnet.net`. `https://www.pixnet.net/about` 은 원본 footer Tier 1 브랜드 소스. YAML `ds.type` 없음 — 발행 1차 DS 사양 없음. sibling 전용 측정(iOS App Store listing, 痞客邦股份有限公司, lab() 원값, h1 weight 400, `networkidle` timeout)은 portable 토큰으로 올리지 않았다. A5a 손 대조 발행 카피 아래 목록 / 미생존 0.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep`한 뒤에 썼다(F2).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`) | 분리 → provenance · `name` 옮김 → DESIGN.md H1 · `痞客邦` 옮김 → Experience Scope | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# PIXNET Design System`. `痞客邦` DESIGN dest 6 · provenance dest 6. `id`/`country`/`category`/`homepage`는 provenance Identity 표. |
| YAML `primary_color: "#ff7200"` | 옮김 → Foundations Semantic color · 분리 → provenance Identity | 이중 목적지. DESIGN.md `#ff7200` dest **22**, provenance dest **12**. |
| YAML `logo.type: favicon` / `https://www.google.com/s2/favicons?domain=www.pixnet.net&sz=128` | 분리 → provenance · 옮김 → DESIGN.md Assets (identity metadata) | 이중 목적지. Google favicon-service URL이지 `www.pixnet.net` 1차 파일이 아님. 해당 URL DESIGN dest 1 · provenance dest 1. |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `tokens.note` / `components_harvested` | 분리 → provenance · YAML note의 `unusual for a content platform` 은 Distinctive traits에도 병기 | `live-extract` DESIGN dest 0 · provenance dest 2. `components_harvested` DESIGN dest 0 · provenance dest 2. `unusual for a content platform` DESIGN dest 1 · provenance dest 1. 68 DOM uses DESIGN dest 1. |
| YAML `ds.*` | 없음 | 원본에 `ds.type` 필드 없음. A1c 대상 없음. provenance가 부재를 기록(`ds.type` DESIGN dest 0 · provenance dest 4, 부재 서술). |
| YAML `tokens.colors` (**15키** — `primary` `primary-deep` `accent-red` `accent-tint` `canvas` `surface-muted` `heading` `body` `label` `muted` `muted-2` `on-primary` `hairline` `border-soft` `ink`) | 옮김 → Foundations `Semantic color` | 15키 전부. 산출 hex: `#ff7200` `#e85f00` `#ff432b` `#fcdfda` `#ffffff` `#f4f4f4` `#423e3c` `#575451` `#817f7d` `#969492` `#000000` `#eaeae9` `#c0bfbe`. canvas `#ffffff`와 on-primary `#ffffff`를 합치지 않음(A4). heading `#423e3c`와 body `#423e3c`를 합치지 않음. muted `#817f7d`와 muted-2 `#969492`를 합치지 않음. ink `#000000`과 heading/body를 합치지 않음. primary `#ff7200`과 primary-deep `#e85f00`를 합치지 않음. |
| §2 사용 규칙 + DOM 빈도 (68 / 48 / 902 / 1083) + `There is no corporate blue anywhere in the palette` | 옮김 → Foundations Semantic color | `68 DOM` DESIGN dest 2 (occurrences + uses). `1083 DOM` dest 1. `902 DOM` dest 1. `48 DOM` dest 1. `There is no corporate blue anywhere in the palette` DESIGN dest 2. |
| YAML `tokens.typography` family + 7 roles (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 | 옮김 → Typography & Assets `Type roles` / `Family` | A1a: YAML `1.33` · `1.50` · `1.43` · `1.00`를 px로 바꾸지 않고 비율 그대로. live 16px / 24px를 body `1.50` 옆에 병기. YAML use 7/7 착지. §3 Notes 긴 쪽 (`gogo+香港`, `大試用時代`, inline h1/h2) 병기(웨이브 37). caption YAML lineHeight 없음 — 생략, §3 `normal` 병기. |
| YAML `tokens.spacing` (xs 4 … section 64) | 옮김 → Foundations `Spacing` | 단위 없는 YAML 스텝을 §5 px 목록 옆에 병기. `Base unit: 8px (with a 4px sub-step)` DESIGN dest 1. spacing 16을 type 16과 합치지 않음(A4). spacing 12를 rounded.lg 12와 합치지 않음. spacing 4를 rounded.sm 4와 합치지 않음. |
| YAML `tokens.rounded` sm 4 / md 6 / lg 12 / full 9999 | 옮김 → Foundations `Shape` (+ Components) | 이중 목적지(값). 로컬 기하로 한정. 0px thumbnails는 YAML 키가 아님 — Shape에 §5 글 그대로. A1a keep-both: YAML unitless `9999` + source §5 `9999px`. `tokens.rounded.full` DESIGN dest 2. `9999` DESIGN dest 5 · provenance dest 4. `9999px` DESIGN dest 2 · provenance dest 1. |
| YAML `tokens.shadow` ambient / standard / elevated | 옮김 → Foundations `Elevation` | `rgba(66,62,60,0.08) 0px 2px 8px` DESIGN dest 1. `rgba(66,62,60,0.12) 0px 4px 16px` dest 2. `rgba(66,62,60,0.16) 0px 8px 28px` dest 1. |
| §6 Focus Ring `2px solid #ff7200` | 옮김 → Foundations Elevation + Components Capture record | 이중 목적지(둘 다 portable). generic Focus이지 `focus-visible`가 아님(B1). `2px solid #ff7200` DESIGN dest 5. |
| YAML `tokens.components` 4개 (`type: button` ×2, `badge` ×1, `card` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` 2 · `badge` 1 · `card` 1 = YAML과 동수. YAML `use`를 각 블록 Token-set use 행으로 병기 (`Primary CTA (login)` dest 1 · `Secondary action, 1px #eaeae9 hairline border` dest 1 · `Tag / channel label, hairline border` dest 1 · `Article/content card, hairline #eaeae9 border, low warm shadow` dest 1). `tokens.components.button-primary` dest 1 · `tokens.components.button-ghost` dest 3 · `tokens.components.tag-pill` dest 2 · `tokens.components.card` dest 1. Ghost 블록 B2a가 YAML 두 키를 비해합으로 이름해서 앞 두 path dest가 각각 +1. |
| §4 Quiet / Nav, Inputs, Hot/new badge, Tint badge, Navigation chrome | 옮김 → Components & States | YAML 컴포넌트 키 없음. `Primitive type: not in the token set` dest 5. primitive type 발명 없음. |
| §5 Layout Principles | 옮김 → Layout & Platforms | Editorial density / Hairlines over gaps / Reading column comfort. Header ~73px. `73px` DESIGN dest 3 · provenance dest 5. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Flat / Ambient / Standard / Elevated / Focus Ring 표 + decorative depth. |
| §7 Do 7항 + §16 Do 추가 | 옮김 → Experience `Application rules` | 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 배치. |
| §7 Don't 7항 + §16 Don't 추가 (`English-first, hype-startup tone` · `bury content under heavy chrome`) | 옮김 → Experience `Avoid` | B2a 완전형 한정을 절 머리에 배치. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms `Responsive behavior` | 원본 표 Mobile `<640px` / Tablet `640–1024px` / Desktop `1024–1280px` / Large Desktop `>1280px`. 터치 36px. 원본 표이지 live computed breakpoint가 아님을 한정. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 겹치는 `#ff7200` / 73px / trending-tag 36px / footer `#f4f4f4` 는 이미 Foundations/Components/Layout에 있음. Unique §9 hot-badge Noto Serif TC 13px weight 700 `熱門` DESIGN dest ≥1 (Hot / new badge; A3). Unique §9 article-card meta 14px weight 400 `#817f7d` DESIGN dest ≥1 (Article / content card; A3). |
| §10 Voice & Tone — 표 + 타이틀 + 「台灣人的生活文創平台」 + 세로 카테고리 + CTA | 옮김 → Content & Locales | 「痞客邦PIXNET-掌握最新熱門話題貼文、短影音，讓生活充滿靈感！」 DESIGN dest 2 · provenance dest 1 (sibling raw-sample 전재 1행; claim-ledger는 문자열 전문이 아니라 `title`이라고만 이름). 「台灣人的生活文創平台」 DESIGN dest 2 · provenance dest 2. `登入` / `註冊` / `寫文章` / `熱門` / 旅遊 / 美食 / 影視 / 親子 / 寵物 바이트 그대로(A5). B2a 완전형 한정을 표 앞에 붙였다. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) | mid-2000s DESIGN dest 2 · provenance dest 5. `synonymous with "blog"` dest 1. `nearly two decades` dest 2. `社群影響力` DESIGN dest 3 · provenance dest 4. `大試用時代` DESIGN dest 5 · provenance dest 6. `That heritage explains the design` dest 1. `swipe-driven feed` dest 1. `English-first global-startup polish` dest 1. `homey, decades-deep blogging roots` dest 1. 문단 마지막 문장(embrace/avoid)까지 착지. |
| §12 Principles 7항 | 옮김 → Experience `Principles` | 산출 7항. 원본에 UI implication 없음 — 발명하지 않음. B2a 완전형 한정을 머리에 배치. |
| §13 Personas 4 가상 아키타입 (이름·나이·도시 포함) | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 §13 머리글이 fictional archetypes라고 명시. Experience `Audience`에는 원본이 독립적으로 세우는 그룹 수준 표현(`lifestyle bloggers`, `travel/food creators`, `parenting writers`, `Taiwanese readers researching real experiences`)만 남겼다. 식별자는 DESIGN dest 0 · provenance dest 0 · 이 로그 dest 0. |
| §14 States 9행 | 옮김 → Components & States `Capture record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). Empty×2 · Loading×2 · Error×2 · Success · Disabled · Hot/trending 경계 그대로. graph 위임 없음. generic Focus `2px solid #ff7200`는 `focus-visible`로 승격하지 않음(B1). |
| §15 Motion & Easing — durations / named roles / signature / reduced-motion | 옮김 → Foundations `Motion` | 0ms / 150ms / 220ms / 320ms 유지(T1-3 제약 5). `prefers-reduced-motion: reduce` DESIGN dest 1. `motion-fast / ease-standard` · `motion-standard / ease-enter` 유지. |
| §15 무출처 cubic-bezier 3값 | 삭제(커브 값 경계) · 역할명·Use는 유지 · 원장은 생략 값을 보관 | `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` 은 템플릿 예시와 일치. 나머지 두 커브는 live computed 증거 없음. 세 값은 생략 표기로 DESIGN Motion에 남고 provenance Omission에도 있음. 승격 토큰 아님. `cubic-bezier(0.4, 0.0, 1, 1)` DESIGN dest 1 · provenance dest 1. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance Named gaps | 원본에는 다섯 증거 종류 게이트 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 이 전문이 산출 DESIGN.md에 실제로 존재함을 확인한 뒤 이 행을 적었다 (`transition properties` DESIGN dest 2). |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 | 옮김 → Experience `Scope` | `https://www.pixnet.net` 를 토큰 표면으로, about를 서사/브랜드 소스로 분리 명시. `明體/宋體` DESIGN dest 1. |
| §1 인과·해석 문장(warm editorial, ink-on-paper, reader-first) | 옮김 → Experience `Scope`, 한정 부착 | B2a 완전형 인접 배치. 원본 측정 문장은 사실 인용으로 같은 절에 남김. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 산출 8항. B2a 완전형 한정을 머리에 배치. |
| §3 Typography principles 4항 | 옮김 → Typography & Assets Type roles 아래 | B2a 완전형 한정. |
| §4 하단 footer 블록 (**Verified** / Tier 1 2개 URL / Method) | 분리 → provenance | freshness·출처 원장(E1). |
| Sibling `.verification.md` — Proof 머리말·raw samples·Country sources | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건, 구조 분류 승격 0건**(B1). sibling 전용 `apps.apple.com` DESIGN dest 0 · provenance dest 2. `痞客邦股份有限公司` DESIGN dest 0 · provenance dest 2. `networkidle` DESIGN dest 0 · provenance dest 2. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. 한정을 붙인 자리 **31곳**을 provenance `Derived editorial inventory`에 색인했다(본문 완전형 `"derived editorial implementation inference from the verified surfaces"` + `"not PIXNET-authored or a separately published UI specification"` 짝 31 = 원장 31 at 197–227). Principles 안팎: Scope 표면 귀속 · Scope 레이어 읽기 · Scope 서사 비토큰 · Primary tasks 선정 · Audience drop · Distinctive traits 분류 · Principles · Application rules · Avoid · Semantic color 비해합 · Orange Deep step-down · Color usage rules · Spacing keep-both · Shape 로컬 기하 · Elevation 헤어라인-우선 · Motion 커브 생략+B3+signature/reduced-motion keep · Font evidence 분류 · Official product-use · Official distributed asset · Declared-only utility · License · Family fallback · Type roles keep-both · Type principles · Assets 파비콘 · Capture record 역할 판정 · Ghost/tag-pill 비해합 · Layout 클러스터 · Whitespace notes · Responsive 표 · Content 큐 해석. 발행 1차 DS 사양 없음 — 예문 형태 `not PIXNET-authored or a separately published UI specification`.

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `grep -oF`로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity name, `#ff7200`, favicon URL, §14 상태, B3, 생략 커브, 73px, 社群影響力, 大試用時代). `live-extract` · `ds.type` 부재 서술 · `apps.apple.com` · `痞客邦股份有限公司` 는 provenance only(DESIGN dest 0). 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회(`transition properties`+`animation name`+`duration`+`easing`+`reduced-motion behavior`, Motion · Named gaps), primitive type 3종 동수, lineHeight 비율 4종, YAML `use` 4/4 + typography use 7/7, §14 9행, cubic-bezier는 생략 표기만. 타이틀 전문 provenance dest는 raw-sample 1행뿐(로그가 dest 2로 적었던 것을 F3가 dest 1로 정정). B2a 본문 31 / 원장 31.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 hex 13종 (`#ff7200` `#e85f00` `#ff432b` `#fcdfda` `#ffffff` `#f4f4f4` `#423e3c` `#575451` `#817f7d` `#969492` `#000000` `#eaeae9` `#c0bfbe`) | 13/13 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. |
| portable 본문의 hex 발명 | 0건. 본문의 모든 `#rrggbb`가 legacy 토큰 집합의 부분집합. |
| YAML `tokens.*` 키 경로 | colors 15/15 · spacing 8/8 · rounded 4/4 · shadow 3/3 · family 2/2 · components 4/4. 같은 숫자 다른 스케일(spacing 16 ≠ type 16 ≠ rounded 아님) 키 경로별로 확인. |
| unitless lineHeight (A1a) | YAML `1.33` dest 2 · `1.50` dest 5 · `1.43` dest 2 · `1.00` dest 2 비율로 생존. |
| primitive type (A1b) | button 2 · badge 1 · card 1 — legacy YAML 실측과 동수. §4-only는 `not in the token set` dest 5. |
| `[FILL IN]` | 원본 0건, 산출 DESIGN.md 0건. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 행은 전부 역할 사유(secondary action · destination pill · destination card · destination nav · query field). 머리의 "Absence of a capture is not a `not-applicable` reason" 1회는 금지 사유가 아님. |
| C2 | Primary `登入` 의 loading/error/success는 login commit으로 `applicable`. Ghost 의 L/E/S는 secondary-action 역할로 `not-applicable`. Tag pill · article card · Quiet/Nav 의 L/E/S는 destination 역할로 `not-applicable`. Search input error는 form field로 `applicable`, loading/success는 query-field 역할로 `not-applicable`. primitive 일괄 개방 아님. |
| C3 | "This is not a complete state-coverage claim." 를 Components Capture record에 명시. 완료 주장 0건. |
| C4 | Hot / new badge · Tint badge 는 `Kind: non-interactive`. Navigation chrome은 kind 생략. Search/Quiet는 YAML type이 없으나 §4가 필드/링크로 관측 — kind interactive, type 발명 없음. |
| D2 / D2a | §13 식별자·동기 스케치·소속 분류 본문 0 · provenance 0 · 이 로그 0. 삭제 행은 절·인원·필드 종류만. Audience 항목 4개는 원본 §13 머리글 원문이며 원본 grep ≥1. |
| D1 | `native-client` / `native application` / `mobile app` / `product application` / `back-office` / `authenticated` DESIGN dest 0. 원본이 세운 homepage / about / Mobile `<640px` 만 유지. 「없다」로 닫는 측정 틀 발명 없음. `There is no corporate blue anywhere in the palette` 는 원본 §1 문장 그대로. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문과 sibling에서 발행 문자열을 추출해 산출 3파일에 대조 — 미생존 **0건**. 분모는 아래 목록. |

### A5a 손 스윕 목록 (추출 22 / 미생존 0)

발행 카피만. 설명문·점 경로·폰트 스택·제3자 매체명·declared-only 페이스 이름은 바늘이 아니다.

Legacy 본문 (20): `痞客邦` · `PIXNET` · `登入` · `註冊` · `寫文章` · `熱門` · `痞客邦PIXNET-掌握最新熱門話題貼文、短影音，讓生活充滿靈感！` · `台灣人的生活文創平台` · `旅遊` · `美食` · `影視` · `親子` · `寵物` · `社群影響力` · `大試用時代` · `gogo+香港` · `#長榮航空` · `#親子旅遊` · `#日本旅遊` · `Fill life with inspiration`

Sibling 전용 (2, provenance 생존, portable 승격 0): `痞客邦股份有限公司` · App Store 앱명 `痞客邦` (이미 본문 `痞客邦`과 동일 문자열로 본문에도 생존)

## 제출 전 고유 표현 대조 (웨이브 43)

뽑은 표현 48 / 0이었다가 복원한 수 4 (`Secondary action, 1px #eaeae9 hairline border` · `Article/content card, hairline #eaeae9 border, low warm shadow` · `8px (with a 4px sub-step)` · `There is no corporate blue anywhere in the palette`). `unusual for a content platform` 은 YAML note와 Distinctive traits에 병기. §11 마지막 문장(`What it avoids: the cold institutional aesthetics… decades-deep blogging roots`) 착지 확인.
