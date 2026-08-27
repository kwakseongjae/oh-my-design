# Goodpatch migration log

- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- Source: `web/references/goodpatch/DESIGN.md` (legacy, omd 0.1) — not modified. SHA-256 `a776a89994100754f47b3f4c43aec27b83db8295eba19c71e502d2cbfa60f879`
- Sibling: `web/references/goodpatch/.verification.md` — **adopted as evidence grading only**. Detail in provenance `Sibling verification file (E2)`. SHA-256 `399237bcd1d6aaddb10e4ba306cf2274ab251c7133613fd9e7c15ce59b0d3774`
- Destination: `docs/design-md-weight/migrated/goodpatch/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/goodpatch/provenance.md`
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 조건 5 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: `scripts/design-md-core.cjs` `inspectDesignMd` → `format: core-v2` · `cleanTop: true` · `level: portable-core` · `portable_core: true` · `reasons: []` · placeholder 0
- 게이트: `node test-v2/tools/migrate-reference.mjs --brand goodpatch --gate-only` → `verdict: PASS`, `problems: []`, `copy-loss` coverage 15/207. **이 PASS는 적합성 증거가 아니다.** A5a 손 스윕 분모는 아래 35/35.
- 도메인: JP 디자인 스튜디오의 **마케팅 웹 3표면**(homepage / Company / company profile). 원본이 이름으로만 적는 제품 Prott·ReDesigner의 제품 UI는 미조사이며 별도 증거 영역이다.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a).

## 이 브랜드의 갈림길 세 개

1. **§14·§15에 출처가 없다.** 원본 닫는 주석은 §1–9(라이브 인스펙트), §10(verbatim), §11(profile WebFetch + 공지 사실), §13(가상)에 각각 출처를 배정하고 **§14 States와 §15 Motion에는 아무 출처도 배정하지 않는다**. 두 절은 본문에 보존하되(A2) 각각 인접에 B2a 완전형 한정을 붙였다. 삭제는 무출처 커브 3개뿐이다.
2. **로고가 브랜드 자산이 아니다.** frontmatter `logo.slug`가 Google favicon 프록시이고, sibling이 그 서비스를 Tier 1 증거에서 제외한다. portable Assets에 브랜드 자산으로 올리지 않고 provenance `Identity`/`Logo decision`에 원장으로 남겼다.
3. **sibling 수치가 원본과 어긋난다.** CTA/consent/footer `14.55px` vs 원본 `15px`, News `53.33px`/`17.78px` vs `53px`/`18px`, Contact 높이 `210px`(원본 없음). 원본 수치를 본문에 두고 sibling 수치는 provenance에만 둔다(B1). sibling viewport `1440×900`을 본문 측정으로 쓰지 않는다.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`) | 분리 → provenance · 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Goodpatch Design System`. `グッドパッチ`는 DESIGN.md `Scope` **2** · provenance **5**(sibling-only titles 2 · raw samples titles 2 · Evidence class `株式会社グッドパッチ` 1). Identity 표 `name` 칸은 `Goodpatch`만 — 그 칸에 `グッドパッチ` **0**. `primary_color` `#096fc8`도 양쪽(DESIGN 21 · provenance 13 — `grep -oF`). |
| YAML `logo.type: favicon` / `logo.slug` | 분리 → provenance (**브랜드 자산으로 승격하지 않음**) | Google favicon 프록시 URL. sibling이 이 서비스를 Tier 1에서 제외. portable Assets에는 그 경계 문장만. slug URL은 DESIGN.md **0** · provenance `Identity` 1. |
| YAML `verified` / `added` / `omd: 0.1` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). `live-extract`는 DESIGN.md **0** · provenance `Identity` 1. |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance | 원문 그대로 인용 블록. 안의 값(`#096fc8`, `#81b0da`, `#333333`, `#f6f6f6`, `1584px`, My Galano Grotesque, Yu Gothic Pr6N, `A+EqpB-游ゴシック体 Pr6N`)은 DESIGN.md Foundations·Typography·Components에 별도로 실려 있음을 같은 절에 대조해 적었다. |
| YAML `tokens.colors` **16키** (`primary` `primary-light` `sky` `ink` `ink-pure` `body` `muted` `faint` `canvas` `paper` `dark` `dark-chrome` `coral` `coral-tint` `plum` `on-primary`) | 옮김 → Foundations `Semantic color` | 네 표 데이터 행 16. hex 전량 DESIGN.md에 존재(`#096fc8` 21 · `#81b0da` 7 · `#76b7ed` 1 · `#333333` 10 · `#000000` 2 · `#6e6e6e` 1 · `#9096a2` 2 · `#8f95a1` 2 · `#ffffff` 14 · `#f6f6f6` 8 · `#191b1f` 1 · `#45474a` 1 · `#ff776b` 4 · `#ffaba3` 1 · `#534c97` 4). §2 role 이름·`rgb(...)` 병기까지 `Recorded use`에 보존. |
| YAML `tokens.typography.family` 3키 + §3 Font Family | 옮김 → Typography & Assets `Family` · `Font evidence` | My Galano Grotesque / Yu Gothic Pr6N / `sans-serif` fallback. 계산 패밀리 `"A+EqpB-游ゴシック体 Pr6N"` DESIGN 3. fallback을 브랜드 페이스로 제시하지 않는다는 경계를 `Family` 말미에 남겼다. "Geometric humanist sans"는 원본 §3 분류라 `Family`에 바이트 보존하고 인접 B2a. |
| YAML `tokens.typography` **9역할** (size / weight / **unitless** lineHeight / tracking / use) + §3 Hierarchy 표 9행 | 옮김 → Typography & Assets `Type roles` | A1a: `0.85` `1.13` `1.10` `1.23` `1.25` `1.58` `2.00` `2.20`를 px로 바꾸지 않음. 원본이 적은 px 등가와 rem 등가만 괄호 병기. tracking `-5.25px` / `-1.33px` / `-1px` 보존. |
| §3 Principles 5항 | 옮김 → Typography & Assets `Typography rules` | 산출 5항. 측정치를 원칙으로 읽는 행위에 B2a 완전형 한정을 절 머리에 인접 배치. |
| YAML `tokens.spacing` **7키** (`xs:4 sm:8 base:16 md:24 lg:40 xl:66 section:120`) + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout 66px 패딩) | 이중 목적지. 스케일 7값과 Contact/Careers 66px 특징 패딩. DESIGN `66px` 4 · `120px` 1. |
| YAML `tokens.rounded` **3키** (`sm:8 pill:9999 full:9999`) + §5 Border Radius Scale | 옮김 → Foundations `Shape` | 8px / 9999px. 계산 `1584px`는 Shape와 Primary/Outline CTA에 이중 목적지(DESIGN `1584px` 5 · `9999px` 6). |
| YAML `tokens.shadow.none: "none"` | 옮김 → Foundations `Elevation` + Components `Contact / Careers Panel` | 이중 목적지(값 `none`, 둘 다 portable 본문). Contact 패널은 `Shadow: none`이지 `box-shadow: none`이 아님. 정확 문자열 `box-shadow: none`은 DESIGN **3**(Scope · Distinctive · Elevation) · provenance **0**. |
| §6 Depth & Elevation 2행 표 + Shadow Philosophy | 옮김 → Foundations `Elevation` | 2행 그대로. 관측(`box-shadow: none`)은 사실로, 그 뒤 인과(editorial-flat, restraint-as-confidence, work-not-chrome)는 B2a 완전형 한정을 같은 문단에 붙여 보존. |
| YAML `tokens.components` **8개** (`type: button` ×3, `card` ×2, `badge` ×1, `tab` ×1, `listItem` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 `Primitive type: \`button\`/\`card\`/\`badge\`/\`tab\`/\`listItem\``으로 보존. 산출 `Primitive type` 8행 = 원본 8. |
| §4 Buttons / Cards / Badges / Navigation / Footer | 옮김 → Components & States | 8개 컴포넌트 레코드. bg/fg/border/radius/padding/height/font/active/use와 발행 라벨을 원문대로. |
| §9 Quick Color Reference · Example Component Prompts 4개 · Iteration Guide 7항 | 삭제 | 도구용 재진술·복붙 프롬프트. 삭제 전 §9 hex·px·라벨을 나머지 파일과 대조했고 **고유 렌더 필드 0건**(A3 해당 없음). |
| §14 States **9행** | 옮김 → Components `State record` (+ 컴포넌트별 applicability 사유) | 이중 목적지(둘 다 portable 본문). 9행 값·카피 그대로. 원본 닫는 주석이 이 절에 출처를 배정하지 않으므로 표 바로 앞에 B2a 완전형 한정. `"エラーが発生しました"` · `"必須"` DESIGN 각 1. graph 위임 없음. |
| §15 Durations 3행 (`motion-fast` 120ms / `motion-standard` 240ms / `motion-slow` 400ms) | 옮김 → Foundations `Motion` | 3행 그대로. 규칙집 삭제 범위는 **무출처 커브뿐**. 절 머리에 B2a 완전형 한정. DESIGN `120ms` 1 · `240ms` 1 · `400ms` 1. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 3행 보존. |
| §15 Easings — **커브 값 3개** (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. sibling raw samples에 transition·animation·duration·easing 관측 0. `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md` 예시 표와 동일. DESIGN `cubic-bezier` **0** · provenance 3. |
| §15 Motion rules 6문장 (composed·editorial / fade-in / hover blue / hero fade / no bounce / `prefers-reduced-motion: reduce`) | 옮김 → Foundations `Motion` | 6항 그대로. `prefers-reduced-motion` DESIGN 1. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance | 원본에는 승격 조건 문장이 없다. 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트는 DESIGN.md **2회**(Foundations `Motion` · Governance `Recorded unresolved decisions`). 부분 확인 배제 문장(`partial confirmation`)은 DESIGN.md **1회**(Foundations `Motion`만). 게이트+배제 전문을 2회라고 적지 않는다. |
| §1 Visual Theme & Atmosphere — 표면 기술·색·타입·기하 | 옮김 → Experience `Scope` 2문단 | 값은 전부 보존하고 표면 3종에 붙여 뒀다. |
| §1 인과·해석 문장(gallery-wall calm / type as instrument / blue means act / paper-vs-white / "design has the power to move business") | 옮김 → Experience `Scope` 3문단, 한정 부착 | B2a 완전형 인접 배치. 원본 닫는 주석이 "type carries the conviction"·"flat as confidence"·"the website is the proof"를 editorial reading으로 지목한 사실도 그 문단에 적었다. |
| §1 Key Characteristics **9항** | 옮김 → Experience `Distinctive traits` | 산출 9항. 항목 안 해석에 B2a 완전형 한정을 머리에 배치. |
| §5 Layout Principles (Grid 4항, Whitespace Philosophy 3항, 66px) | 옮김 → Layout & Platforms | 5개 불릿 + 해석 문단. scale-over-density / exhibition-catalog 읽기에 B2a. |
| §8 Responsive Behavior (Breakpoints 3행, Touch Targets 3항, Collapsing 4항, Image Behavior 2항) | 옮김 → Layout & Platforms | 3행 그대로(`<640px` / `640-1024px` / `1024-1440px`). sibling `1440×900`은 DESIGN **0**. 절 전체에 B2a 완전형 한정. |
| §7 Do **8항** | 옮김 → Experience `Application rules` | 산출 8항. Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 인접 배치. |
| §7 Don't **8항** | 옮김 → Experience `Avoid` | 산출 8항. B2a 완전형 한정을 절 머리에 인접 배치. |
| §10 Voice & Tone — 성격 규정 + Context/Tone **5행** 표 | 옮김 → Content & Locales | 표 5행. voice 해석에 B2a 완전형 한정을 표 바로 앞에. |
| §10 Voice samples **3건** (verbatim) | 옮김 → Content & Locales | A5: 3건 전부 바이트 그대로. 일본어 원문이 라벨이고 영문 병기는 읽기 보조. freshness 표기는 provenance로 분리. |
| §10 Forbidden register | 옮김 → Content & Locales | 원문 그대로. 설득 성격 규정에 B2a. |
| §11 Brand Narrative | 옮김 → Experience `Scope` 4문단 (+ provenance `Evidence class`) | 이중 목적지. 株式会社グッドパッチ, 2011年9月, 土屋尚史, ミッション, 事業範囲 원문, Prott, ReDesigner, TSE IPO 2020. `ソフトウェア開発`는 원본 §11 본문에 없고 닫는 주석·sibling에만 있어 DESIGN **0** · provenance sibling-only 1. |
| §12 Principles **5항** (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출 5항. B2a 완전형 한정을 머리에 배치. |
| §13 Personas — fictional archetypes, §13, D2 삭제 | **삭제 (sidecar 재수록도 안 함)** | D2·D2a. 원본 §13 머리글과 닫는 주석이 fictional archetypes이며 이름은 illustrative라고 명시. 이름·나이·도시·전기는 승격도 원장 재수록도 하지 않는다(무식별 표기). Experience `Audience`에는 원본이 적은 그룹 3종만 그룹 단위로 남겼고, 그 그룹을 audience로 읽는 행위에 B2a 한정을 붙였다. 식별 문자열은 DESIGN·provenance **0**. |
| 하단 footer 블록 (**Verified** / Tier 1 3개 URL / Tier 2 2개 시도 / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). |
| 닫는 HTML 주석 (Philosophy Layer 출처 배정) | 분리 → provenance `Evidence class` · 옮김 → DESIGN.md 각 절의 한정 | 이중 목적지. §1–9 / §10 / §11 / §13에는 출처를 배정하고 §14·§15에는 배정하지 않는다는 사실을 provenance 표로 옮기고, 그 결과인 한정 문장을 해당 절 인접에 배치했다. |
| Sibling `.verification.md` — Proof 머리말·method·raw samples·Conflict matrix·Company facts | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건**(B1). sibling 전용 `14.55px` · `53.33px` · `17.78px` · `210px` · `1440×900` · `スズキ株式会社` · 자본금·번지 · `ソフトウェア開発`는 DESIGN 각 **0**. |

## State applicability 판정 근거 (C1·C2·C4)

원본에는 컴포넌트별 상태 관측이 없다. 따라서 applicability는 **역할 의미**로만 판정했고, 미해상 시각 treatment는 값만 생략했다(C1). `not captured` / `not named`를 사유로 쓴 행은 0건이다. state coverage 완료를 주장하지 않는다(C3).

| 컴포넌트 | Kind | loading / error / success | 의미상 사유 |
|---|---|---|---|
| Primary Pill CTA | interactive (`button`) | not-applicable | Services / selected works / Why design으로 가는 목적지. 스스로 커밋하는 연산이 없다. C2가 destination link를 이 부류로 든다. |
| Outline Pill CTA | interactive (`button`) | not-applicable | career information으로 가는 목적지. |
| Consent Confirm | interactive (`button`) | applicable | "同意する"는 쿠키 동의를 커밋한다. 진행·실패·성공이 역할상 의미 있다. 시각값은 생략(C1). |
| Contact / Careers Panel | kind 생략 (`card`) | map 없음 | C4. `type: card`만 있고 인터랙션 처리가 없다. |
| Work Card | kind 생략 (`card`) | map 없음 | C4. 제목 secondary read `#81b0da`는 variant로만 기록. |
| Section Eyebrow | non-interactive (`badge`) | map 없음 | 섹션 라벨. 커밋·이동 컨트롤이 아니다. |
| Nav Link | interactive (`tab`) | not-applicable | 목적지 이동. C2가 tab을 이 부류로 든다. active는 variant. |
| Footer Link | interactive (`listItem`) | not-applicable | Company 표면 목적지 링크. |

DESIGN `loading \| applicable` **1**(Consent Confirm만). `loading \| not-applicable` **4**.

## F1 — B2a 스캔

본문 완성 후 DESIGN.md를 처음부터 다시 읽었다. Principles 안팎을 가리지 않고 인과·해석·판단 문장마다 근거 class를 물었다. 편집 해석이면 인접에 완전형 한정을 붙였다.

실측: `derived editorial implementation inference` DESIGN **22** = `not Goodpatch-authored` **22** = `separately published UI specification` **22** = provenance inventory 데이터 행 **22**. provenance의 같은 절 문자열 2회는 이 원장의 인용·계수 문장이지 portable 한정이 아니다.

1. Scope 프록시 거부
2. Scope 표면 읽기(gallery-wall / type-as-instrument / blue-means-act 등)
3. Scope 상장 성격 규정
4. Primary tasks 선정
5. Audience 그룹 읽기
6. Distinctive traits 안의 성격 규정
7. Principles 5항 + UI implication
8. Application rules (Do)
9. Avoid (Don't)
10. Semantic color 역할 명명과 읽기
11. Shape 이원 기하
12. Elevation editorial-flat
13. Motion 절 전체(출처 미배정)
14. Family "Geometric humanist sans"
15. Typography rules 5항
16. Assets 이미지 역할
17. Components kind/applicability 판정
18. State record 9행
19. Layout whitespace 읽기
20. Layout responsive(단일 데스크톱 패스)
21. Content voice 성격
22. Forbidden register 성격

Goodpatch는 발행된 1차 디자인 시스템 문서(Pajamas형)가 없으므로 B2a 예문의 「separately published UI specification」 전제가 성립한다. 예문을 그 브랜드에 맞게 `Goodpatch-authored`로만 닫았다.

## F2 — E2 대조

로그 각 행을 쓰기 전에 해당 값이 어느 파일 어느 절에 있는지 `grep -oF`로 확인했다. 기억으로 쓰지 않았다.

이중 목적지(E2a)로 확인한 것:

- `#096fc8` DESIGN 21 · provenance 13
- `グッドパッチ` DESIGN 2 · provenance 5(sibling-only titles · raw samples titles · Evidence class). Identity 표 **0**
- `1584px` DESIGN 5 · provenance token note / raw samples
- `box-shadow: none` DESIGN 3 · provenance **0**. raw samples는 `box-shadow: \`none\`` · conflict matrix는 `none` (shadowless) — 동일 문자열이 아니므로 2차 목적지로 쓰지 않음
- 사업 범위 일본어 문자열 DESIGN 1 · 원본 §11 1 (provenance는 sibling 확장 목록을 별행으로 보관)
- B3 다섯 종류 DESIGN 2 · 부분확인 배제 DESIGN 1
- 발행 카피 3건(`Design to empower` / `デザインの力を証明する` / `一緒にデザインの力を証明しませんか？`) DESIGN + provenance raw samples. `デザインの力を証明する` DESIGN 4 · 원본 6.

허위 이중 목적지로 쓰지 않은 것:

- `live-extract` DESIGN **0** — provenance만
- favicon slug URL DESIGN **0** — provenance만
- sibling `14.55px` / `53.33px` / `17.78px` / `210px` / `1440×900` / `スズキ株式会社` DESIGN **0**
- `ソフトウェア開発` DESIGN **0** — sibling/주석 전용, 원본 §11 본문에도 없음

준수 주장(E2c): "B3 유지"를 적지 않는다. 본문이 담고 있는 것은 다섯 종류+게이트 2회와 부분확인 배제 1회다. "B2a 22=22"는 위 실측과 같다.

D2a: §13 삭제 행은 인원·필드 종류만 적는다. 이름·나이·도시를 Item에 옮기지 않았다. DESIGN·provenance에서 해당 식별 문자열 0.

E2d: "이 파일에 없다"고 쓰면서 같은 행에 그 항목을 나열하지 않았다. mention과 use를 갈라 적었다.

## A5a — 바늘 밖 발행 카피 손 대조

게이트 `copy-loss`의 `compared < candidates`가 예상되므로, 원본과 sibling에서 브랜드가 발행한 문자열을 손으로 추출해 산출 3파일과 대조했다. 카피에 대한 서술·UI 메타·점 경로·폰트 스택 설명·원본이 제외한 제3자 문자열은 바늘이 아니다.

| 분모 | 수 |
|---|---:|
| 원본+sibling 인용 문자열(기계 추출) | 152 + 25 |
| 그중 발행 카피·sibling이 측정 대상으로 명기한 문자열(손 범위) | 35 + sibling-only 4 |
| 손 범위 생존(DESIGN 또는 provenance) | 35 / 35 · sibling-only 4는 provenance 바이트 보존, DESIGN 0 |
| 미생존 | 0 |
| 처분(제3자 제외 문자열) | getdesign `"No designs found for 'goodpatch'"` · refero generic cards — provenance에 배제 사실만 |

`verdict: PASS`는 「대조한 바늘 중 잃은 것이 없다」이지 「카피가 보존됐다」가 아니다. A5 준수 분모는 위 손 스윕 35/35이다.

## F1/F2 절차 기록

- F1: DESIGN.md 전수 재독. Scope의 상장 성격 규정, Content voice, Docs/sibling 인용의 성격, Principles 안팎을 포함해 해석 문장 22곳에 인접 완전형 한정을 달았다. "quiet" 수식은 관측이 아니라 해석이라 Scope 2문단에서 제거하고 3문단 읽기로 옮겼다. Galano를 "licensed commercial"로 단정한 문장은 원본에 없는 라이선스 주장이라 삭제하고, 원본이 적은 Morisawa-delivered와 Geometric humanist sans만 남겼다.
- F2: 위 표의 hex·type·duration·카피·이중 목적지를 파일별 `grep -oF`로 확인한 뒤에야 행을 적었다.

## Current SHA

Portable `DESIGN.md` SHA-256 `b9ef7611c7809ba219f73e8bb7e6d6a04d49d971722489f68465fd1b911e900b` (474 lines). Source SHA unchanged. Catalog adoption is not claimed.
