# millie migration log

- Source: `web/references/millie/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/millie/.verification.md` — **존재함**(dotfile, 경로 직접 확인). 전문 판독, **증거 등급으로만 채택**.
- Destination: `docs/design-md-weight/migrated/millie/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/millie/provenance.md`
- Date: 2026-09-02
- Worker: grok-4.6 T2
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: education. **증거 영역이 둘**이다 — public home (`www.millie.co.kr`), B2B marketing (`www.millie.co.kr/v4/brand/b2b`). company / 10th-anniversary / careers는 서사 출처. Pretendard upstream README·LICENSE는 폰트 자산·라이선스. 원본 token note가 universal accent / application state system / native reader UI를 세우지 않았고, 이관본도 값마다 표면을 붙여 병합하지 않았다. 발행 1차 UI 사양이 원본에 없으므로 B2a는 toss-form: `not Millie-authored or a separately published UI specification` (26=26).

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 출현 수는 파일 `str.count` / 줄 스캔이며, 로그 행을 적기 전에 해당 문자열을 산출 파일에서 확인했다(F2).

Source SHA-256 `f35df45b4a2783164aff517ab88492a4933177fc2250c031aa93c93abb133f59`. Sibling SHA-256 `18dc10a502c7c3c65281af1adbb339de699ede5e2839fbdfdbedfb094d7ca913`.

## A5a — 발행 카피 손 대조 (규칙집 v12 / A5a)

게이트 `coverage`는 `--gate-only` 실행 결과를 이 파일 하단 Gate run에 적는다. 비라틴 인용 바늘이 `compared < candidates`이면 A5a가 의무다. `verdict: PASS`는 카피 보존의 증거가 아니다.

| 단계 | 수치 |
|---|---|
| 추출 (원본 `DESIGN.md` + sibling `.verification.md` 인용·고유 문자열) | 원본 인용·고유명사·YAML `use` + sibling 전수 |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **14**개 (표시명, 연혁 문장, 카탈로그 규모, 포맷 목록, 기념 사이트 야망 문장, B2B 프레이밍, YAML `use` 4종) |
| 바늘이 아니라고 판정해 제외 | hex·치수·CSS 선언·점 경로·폰트 스택·카피에 대한 서술·원본이 제외한 Tier 2 문자열·sibling 축약 padding (`0 12px` 등)·`observedStates: 0` |
| 미생존 | **0**건 (산출 3파일에 14/14 바이트 생존, 실측) |

**보조 도구 대조.** `node test-v2/tools/latin-copy-audit.mjs --brand millie --candidate docs/design-md-weight/migrated/millie/DESIGN.md` → `withLoss: 1` / `totalLost: 6` / `candidates: 33`. Lost 4 high는 sibling 축약 padding (`0 12px` / `16 24px` / `4 10px` / `45 24 30px`) — 원본 본문은 `0px 12px` / `16px 24px` / `4px 10px` / `45px 24px 30px`로 생존. Lost 2 medium은 `, captured:` (YAML 메타)와 `observedStates: 0` (sibling 필드; provenance `provenance.md` 112에 보관, portable 승격 없음). 발행 카피 손실 0.

발행 바늘 14 (손 대조, 전부 생존): 밀리의서재, Millie, making reading an ordinary part of daily life, asking how reading could become more enjoyable, 240,000 reading-content titles, e-books, audio formats, chat books, web novels, and webtoons, decade spent making reading more enjoyable and ordinary, access to reading content and recommendations for employee benefits, Observed public home body and list text., Observed public B2B heading specimen., Observed public B2B section heading specimen., Observed compact home utility button., Pretendard Variable, SIL Open Font License 1.1.

A5 분모: 발행 바늘 14 추출 / 미생존 0. latin-copy-audit published-copy lost 0 (6 lost는 발행 카피가 아님).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Millie Design System` (`DESIGN.md` 1). `display_name_kr` 밀리의서재는 DESIGN dest **1** at 9 + provenance dest **3** at 11/174×2 (E2a). `homepage` `https://www.millie.co.kr`는 DESIGN dest **5** at 9×3/21/23 (substring; trailing-slash URL 포함) + Identity 표. `primary_color` `#242424`는 DESIGN dest **7** at 9/11/34/53/74/78×2 + provenance dest **5** at 15/122/123/140/158 (E2a; identity 원장은 15). favicon slug는 `DESIGN.md` 150 + `provenance.md` 17 (E2a). |
| YAML `omd: "0.1"`, `verified`, `verification_v2`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: false` | 분리 → provenance | freshness·증거 등급 원장(E1). A1c: exact `live-extract` DESIGN dest **0** / provenance dest **2** at 20/215. exact `components_harvested` DESIGN dest **1** at 167 (`false`) / provenance dest **3** at 22/164/216 (E2a). |
| YAML `tokens.note` | 분리 → provenance (전문) · 제약 옮김 → Foundations | 이중 목적지. note 전문 `provenance.md` Identity. 안의 제약(universal accent color, application state system, native reader UI)은 `DESIGN.md` 76. |
| YAML `tokens.colors` (**5키**) | 옮김 → Foundations `Semantic color` | ink `#242424` `tokens.colors.ink` DESIGN dest **2** at 74/78 · canvas `#FFFFFF` `tokens.colors.canvas` dest **2** at 74/79 · `#FFFFFF` DESIGN dest **7** at 74×3/79/174/219/264 (canvas ≠ utility text 174 ≠ pagination text 219 ≠ benefit-card fill 264) · surface-subtle `#F7F7F7` `tokens.colors.surface-subtle` 80 · muted `#6F6F6F` `tokens.colors.muted` 81 · divider `#ECECEC` `tokens.colors.divider` DESIGN dest **1** at 82 (B2a 74 절 삭제 후; P dest **1** at 158). A4: canvas `#FFFFFF`를 utility/pagination 텍스트와 합치지 않음 (`DESIGN.md` 74). |
| §2 Color Palette & Roles | 옮김 → Foundations `Semantic color` + 컴포넌트 | `rgba(0,0,0,0.3)` home-hero overlay DESIGN dest **4** at 74/84/196/218. `#FEF08C` B2B campaign DESIGN dest **3** at 74/84/277. `#333333` utility fill DESIGN dest **3** at 74/84/173. 이전 `#1B6DDA` “reading blue” / coral / yellow / `#A451F7` 비유지 DESIGN dest **3** each at 74/86/351. |
| YAML `tokens.typography.family.sans` + §3 Font evidence | 옮김 → Typography & Assets `Font evidence` · `Family` | `Pretendard Variable` DESIGN dest **18** at 11/36/54/119/123/126/132/133×2/141/142/143/144/177/199/222/267/280 (Family 133 B2a가 그 가족을 `that family`로 닫아 dest 불변). `tokens.typography.family.sans` dest **1** at 132. 176 visible / 29 Millie CloudFront dest 1 at 123. SIL Open Font License 1.1 dest **3** at 9/124/152. Declared-only 6종 dest 1 at 125. Unresolved `Pretendard` dest at 126 (표 칸 제목은 `Unresolved computed observation` — 칸 값이 Bare `UNRESOLVED` placeholder가 되지 않게 함). |
| YAML `tokens.typography` 4역할 (size / weight / **unitless** lineHeight / use) + §3 표 4행 | 옮김 → Typography & Assets `Type roles` | A1a: unitless `1.7143` dest **2** at 141/146 · `1.2273` dest 2 at 142/146 · `1.3571` dest 2 at 143/146 · `1.5` dest 2 at 144/146. §3 px `24px` / `54px` / `38px` / `18px` keep-both. YAML `use` 4종 verbatim (`DESIGN.md` 141–144). 키 경로 `tokens.typography.body.size` `14` dest 2 at 137/146 · `heading-xl.size` `44` dest 1 at 146 · `heading.size` `28` dest 1 at 146 · `utility.size` `12` dest 2 at 137/146. `utility.size` `12` ≠ 12px gap ≠ `0px 12px` padding (`DESIGN.md` 137). heading-xl / heading는 B2B, body / utility는 home (`DESIGN.md` 146). |
| YAML `tokens.rounded` 2키 | 옮김 → Foundations `Shape` + 컴포넌트 | `tokens.rounded.utility-button` `4` dest 3 at 98/101/175. `tokens.rounded.carousel-pagination` `100` dest 4 at 99/101/197/220. §4 `4px` / `100px` keep-both (`DESIGN.md` 101). Hero `20px` / skeleton `16px` / benefit `10px` / campaign `4px`는 해당 컨트롤 (`DESIGN.md` 101). |
| YAML `tokens.components: {}` / `components_harvested: false` | 옮김 → Components & States | A1b: YAML에 `type` 키가 없으므로 7개 레코드 모두 `Primitive type: not in the token set` dest **7** at 172/195/217/240/251/263/276. YAML type을 다른 컴포넌트로 옮기지 않음. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 34–38. 2016 / 밀리의서재 / public home / B2B / signed-in library, checkout, reader, or native app. 성격 규정은 각 문단 끝 B2a. |
| §1 Key Characteristics 5항 | 옮김 → Experience `Distinctive traits` | 실측 5항. `DESIGN.md` 32 B2a. |
| §3 Typography Rules | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 121–126; family 131–133; hierarchy 141–144. Adjacent complete qualifiers at 119, 133, 137. |
| §4 Component Stylings | 옮김 → Components & States | Home utility button · play control · pagination control · hero slide · skeleton card · B2B benefit card · B2B campaign action. 셀렉터·클래스·치수 본문 보존. Capture selector는 provenance `Capture selectors`에도 이중 (E2a). C4 한정 DESIGN dest 1 each at 246/258/271. Campaign route-local 한정 dest 1 at 285. Footer **Verified** / Tier 1 / Tier 2 / Conflicts는 provenance. |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance | Freshness `provenance.md` 30–41 (표 34–39; Conflicts unresolved: none — `provenance.md` 41, 원장 재수록 175). Tier 1 64–70; Tier 2 74–75. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing (키 없음) | `1392px × 400px` dest **3** at 242/300/304 · `32px-high` dest **2** at 300/304 · `12px gaps` dest **2** at 90/300 · `297px-wide` dest **2** at 300/304 · `318px × 56px` dest **3** at 281/300/304. YAML `tokens.spacing` DESIGN dest **2** at 90×2 (부재 진술 + B2a; 스케일 발명 없음) / P dest **1** at 195 (E2a). `measures 1440px` DESIGN dest **0** (D1). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | 홈 `no box shadow` · B2B `0px 4px 16px rgba(0,0,0,0.22)` dest 2 at 105/279. 일반화 금지 `DESIGN.md` 105 B2a. |
| §7 Do 4항 | 옮김 → Experience `Application rules` | 실측 4항. Governance 통제 문구에 넣지 않음(제약 3). `DESIGN.md` 51 B2a. |
| §7 Don't 4항 | 옮김 → Experience `Avoid` | 실측 4항 + §9 고유 제약 1항. `DESIGN.md` 60 B2a. 원본이 세운 표면만 (D1). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `No responsive viewport comparison was supplied. The desktop dimensions above must not be scaled into mobile, tablet, native-app, or e-ink-reader layout rules.` `DESIGN.md` 302. `e-ink-reader` dest 1. 원본 문장 — 새 도메인 발명 아님. |
| §9 Agent Prompt Guide | 삭제 + 고유 제약 이동(A3) | 도구용 프롬프트. pagination `rgba(0,0,0,0.3)` / 16px/400 / 100px / `4px 10px`와 utility `#333333` / 12px/400 / 4px / `0px 12px`는 이미 Components에 있음. §9에만 있던 문장 — do not add interaction states; signed-in reading or payment flow — 은 Avoid `DESIGN.md` 66. 확인 `provenance.md` 173. |
| §10 Voice & Tone | 옮김 → Content & Locales | 기념 사이트 `decade spent making reading more enjoyable and ordinary` · B2B `access to reading content and recommendations for employee benefits` · 표 3행 verbatim (`DESIGN.md` 313–315). “supports warm, direct…” 읽기는 `DESIGN.md` 309 B2a. |
| §11 Brand Narrative | 옮김 → Experience `scope` 3번째 문단 | 2016 DESIGN dest **2** at 13×2 · P dest **1** at 149 (E2a). 240,000 DESIGN dest **2** at 13×2 · P dest **1** at 148 (E2a). May 2026 DESIGN dest **2** at 13×2 · P dest **1** at 148 (E2a). asking how reading could become more enjoyable · expansion from subscription e-books to a wider digital-reading catalogue · does not establish the design of the signed-in library or reader · deliberately limited to content-led home chrome… 문단 마지막 문장까지 한 단위 (`DESIGN.md` 13). |
| §12 Principles 4항 (+ UI implication) | 옮김 → Experience principles | 실측 4항. `DESIGN.md` 42 B2a toss-form: “These 4 items are a derived editorial implementation inference from the verified surfaces; they are not Millie-authored or a separately published UI specification.” |
| §13 Personas 3 entries | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 머리글 “These are first-party stakeholder groups, not fictional personas.”는 Audience에 원문 인용 (`DESIGN.md` 28) DESIGN dest **1**. 세 항목의 그룹 라벨 `Readers seeking a broad digital catalogue` / `Employer and organisation benefit teams` / `product and company teams` DESIGN dest **0** / P dest **0** (Audience 승격 없음; 이 행의 라벨 명명은 게이트 copy-loss 처분 근거이며 본문 use가 아니다). 동기·소속 분류를 Audience/Primary tasks로 재구성하지 않음. 이름·나이·도시는 원본에 없음. careers 문장 `customer experience, service planning, content, design, development, marketing, and operations`는 커리어 페이지가 세운 조직 맥락으로 Scope에 원문 보존 (`DESIGN.md` 13) — Audience 항목이 아님. Disposition `provenance.md` 172. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 이중 목적지(둘 다 portable 본문). 원문 보존: no state system, zero interaction expansions, zero observed states, skeleton 클래스명은 shell only (`DESIGN.md` 161–167). graph 위임 없음. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Utility / play / pagination / B2B campaign은 interactive 7상태 표. loading/error/success는 역할 사유로 `not-applicable` (C2: 커밋 연산 없음 / HubSpot destination). Hero slide · skeleton · benefit card는 kind/map 생략 (C4). 미관측을 `not-applicable` 사유로 쓰지 않음(C1). state coverage 완료 주장 없음 (`DESIGN.md` 167). |
| §15 Motion & Easing | 옮김 → Foundations `Motion` | 원문 제약 보존: No duration, easing, autoplay timing, reduced-motion behaviour, or transition; hero control markup does not establish carousel motion rules; No Millie motion token is specified (`DESIGN.md` 109). 삭제할 무출처 커브 없음. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations `Motion` | E2c 대조: 전문 “…transition properties, animation name, duration, easing, and reduced-motion behavior have been observed”가 산출 `DESIGN.md` **1회** (`DESIGN.md` 111) 존재함을 확인한 뒤 이 행을 적는다. 약화 문구는 쓰지 않았다. |
| 원본 H1 `# Design System Inspiration of Millie (밀리의서재)` | 삭제 → provenance `Omission ledger` | Core v2 identity 라인 `# Millie Design System`. |
| Sibling `.verification.md` — Proof·raw samples·Conflict matrix | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건**. sibling 전용: `2026-07-12T16:32:58.946Z` · coverage score 64 · 26 component variants · `observedStates: 0` DESIGN dest **0** / P dest **1** at 112 · 127 high-confidence text observations · pagination `16px/400/24px` line-height · campaign `16px/400/56px` cluster · rgb() writings. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

- **A1 / A1a / A1b / A1c.** 검증된 값 손실 0. unitless lineHeight 4종 본문 실재. YAML `type` 없음 → Primitive type 7회 모두 `not in the token set`. `live-extract`는 provenance에만 (portable 슬롯 없음).
- **A2.** §14 본문 보존. §9 도구 프롬프트 삭제, 보편 규칙은 Governance 통제 문구, 브랜드 제약은 Experience.
- **A3.** §9 고유 제약 2문장은 Avoid로 이동. 렌더 값은 Components에 이미 있음.
- **A4.** `#FFFFFF` canvas ≠ utility/pagination 텍스트. `#242424` ink ≠ `#333333` / `rgba(0,0,0,0.3)`. rounded `4` ≠ campaign `4px`.
- **A5 / A5a.** 발행 바늘 14 / 미생존 0. latin-copy-audit 6 lost는 발행 카피 아님.
- **B1.** sibling pagination 24px line-height, campaign 56px-as-font, 127 observations, coverage 64를 portable 본문으로 승격하지 않음.
- **B2 / B2a.** 완전형 26 = 원장 26 (`node scripts/check-limiter-ledger.mjs millie` 1:1 OK, 185–210). 발행 1차 UI 사양 없음 → toss-form. Spacing 90 · hero-slide 246 · skeleton 258 · benefit-card 271 · campaign 285 한정을 본문 같은 줄에 접음.
- **B3.** 다섯 증거 종류 + 컴포넌트별 computed 관측 게이트가 `DESIGN.md` 111에 실재. 이 행은 그 확인 뒤에 적음 (E2c).
- **C1.** applicability 표에 `Not captured`를 `not-applicable` 사유로 쓰지 않음. `#ECECEC`의 “precise component role was not captured”는 원본 색 역할 문장. DESIGN dest **1** at 82 / SRC **1** / P dest **0**.
- **C2.** loading/error/success를 primitive만으로 일괄 개방하지 않음. play/pagination은 캐러셀 컨트롤, campaign은 HubSpot destination, utility는 기록된 commit 없음.
- **C3.** “This is not a complete state-coverage claim.” `DESIGN.md` 167.
- **C4.** hero slide / skeleton / benefit card는 kind와 map 생략.
- **D1 / D1a.** Named gaps는 원본이 연 값만. `native application` / `back-office` / `product application` 발명 없음. `e-ink-reader` / `native-app` / `mobile-app`은 원본 §7·§8 문장. Semantic color B2a가 원본 Divider 문장 `precise component role was not captured`를 `keeping` / `every` / `refusing` / `derived`와 한 부정 claim으로 묶은 절은 삭제(D1). 삭제 문자열 `rather than as a divider token for every surface` DESIGN dest **0** / P dest **0**. 원본 문장은 Divider 항목에만 남김 (`DESIGN.md` 82 dest **1**).
- **D2 / D2a.** 세 항목 그룹 라벨 DESIGN dest 0. 원장 Item 칸에 이름·나이·도시 없음. Audience grep: `public home` src>0 / `B2B marketing page` src>0 / `employer reading benefits` src=1. `Readers seeking a broad digital catalogue` src=1 des=0.
- **E1.** freshness / Proof / claim ledger / sibling raw samples는 provenance. standalone 한정은 본문.
- **E2 / E2a / E2c / E2d.** 이중 목적지는 둘 다. B3 준수는 본문 111 실재 확인 후. 부재 단언이 같은 행에서 항목을 재수록하지 않음.
- **E3.** 게이트 회피 표기 왜곡 없음.

## 제출 전 자가 대조 (웨이브 43)

원본 §별로 고유 표현을 뽑아 산출 `DESIGN.md`에 `str.count`로 대조했다. 특히 (a) §11/§1 서사 연결문, (b) 값에 붙은 근거·수식어, (c) §15/§5 제약.

- 뽑은 표현: **101** (2차 전수) + 1차 토큰/치수 묶음.
- 0이었다가 복원한 수: **3** — (1) careers 원문 `customer experience, service planning, content, design, development, marketing, and operations`를 Scope에 원문 복원(Audience 승격 아님); (2) `high-confidence` 원문 하이픈 표기; (3) §13 머리글 원문 “These are first-party stakeholder groups, not fictional personas.”
- 0으로 남기고 처분한 수: YAML `live-extract`는 portable 슬롯이 없어 provenance-only (A1c). 세 페르소나 그룹 라벨은 D2로 삭제(des=0이 준수).

키 경로 대조: `tokens.colors.*` 5 · `tokens.typography.family.sans` · `tokens.typography.{body,heading-xl,heading,utility}.{size,weight,lineHeight}` · `tokens.rounded.{utility-button,carousel-pagination}` 모두 산출 `DESIGN.md`에 경로 문자열이 있다. `tokens.rounded.utility-button: 4`를 spacing의 4나 campaign `4px`로 세지 않음.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand millie --gate-only` → `verdict: PASS`, `problems: []`. coverage `copy-loss` compared **1** / candidates **88**.

`node scripts/check-limiter-ledger.mjs millie` → 본문 **26** = 원장 **26** (185–210) 1:1 OK.

`node scripts/check-yaml-use-landing.mjs millie` → use 4/4 미착지 0.

## Deviations recorded

- `DESIGN.md` is 5,301 words by `wc -w` split, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: five color keys, four type roles with YAML+§3 keep-both, seven component records, a seven-state applicability matrix on four interactive controls, the full §11 founding-and-catalogue narrative including each paragraph’s last sentence, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- No separately published Millie UI specification is named in the source, so every derived-editorial close uses the toss-form `not Millie-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). Measure: `derived editorial implementation inference` DESIGN dest **26** / `not Millie-authored` DESIGN dest **26** / `separately published UI specification` DESIGN dest **26**. Provenance derived ledger 26 rows at 185–210 (E1 1:1). provenance.md mention of the toss-form is 1 (Proof notes) — mention이지 한정 use가 아니다. migration-log mention dest 2 / 4 / 4.
- Worker-close portable DESIGN SHA-256 `577707b9d8ecbe46779e9ea410b96dcea9bc7d76375752231add4df697e119bc`. Gate-fix DESIGN SHA-256 `68b07733f938a230771b015f6e44786543c93245b568413837323dc2c421ce5a`. Auditor DESIGN SHA-256 `6799dc091a4e28e12099e6c13701515950f06bd1a382434eeb4f96da5bc976f4`. Auditor provenance SHA-256 `eb2950b5abdcd4a7225f4eab689675bdca56f7cd254a10a43bbffdabae079a5b`.
