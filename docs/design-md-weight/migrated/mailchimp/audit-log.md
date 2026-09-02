# mailchimp 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mailchimp/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mailchimp/DESIGN.md`
검증 sibling: `web/references/mailchimp/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양은 수집되지 않음. Mailchimp brand-assets와 content style guide는 색 이름·보이스 출처이지 1차 UI 컴포넌트 사양이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Mailchimp-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형 복수 `are derived editorial implementation inferences` 14건은 완전형.

착수 실측: 본문 `derived editorial implementation inference` 22 / `not Mailchimp-authored` 22 / `separately published UI specification` **23** / `separately published` **23**. 원장 데이터 행 22 (159–180). `not a separately published UI specification` DESIGN dest **0**. 23번째 `separately published UI specification`는 Scope `:9` 완전형 줄 안의 읽기(`content style guide` ≠ UI specification)이고 같은 줄이 toss형으로 닫힌다(lovable `separately published copy manual`과 동형). 자리 수는 맞았으나 네 절의 이름 범위가 본문 세 번째 부류보다 좁았다(fastcampus). Semantic `:86`는 키 병기·ink/on-primary 두 키·refero 이름 거부만 이름하고, `#ffffff` canvas/page/card/nav ≠ Secondary-on-Dark Text ≠ Trust Badge Text · `#231e15` ink/on-primary ≠ Trust Badge Background · `#000000` ink-pure ≠ Option Card Text는 세 번째 부류인데 한정 밖. Spacing `:120`은 키 비해합만 닫고 `complete mathematical scale` 거부는 완전형 문장 밖. Motion `:158`은 다섯 종류+부분 확인 거부는 있으나 official framework/vendor document 일치는 한정 문장 밖. Capture `:228` including-list는 C2/C4/keep-apart/`focus-visible`만 이름하고 option/featured 관측이 default-only인 판단은 닫힘 주어 밖.

문장 분류: 브랜드 발행 사실(Start Free Trial·Log In·Cavendish/Peppercorn 문장·사명 인용·보이스 가이드) / 관측 기술(hex·px·Means Web/Graphik Web·캡처 기하) / 편집적 해석·인과 판단(표면 귀속, 비해합, 스케일 거부, 승격 게이트, 페르소나 비승격, 같은-hex 역할 분리). 세 번째 부류만 수정 대상.

## 수정 목록 (17건)

### B2a — 인접 한정 (본문 4건, 발생 수 +0 / `separately published UI specification` 23 유지)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:86` — Semantic color | 키 병기·ink/on-primary 두 키·refero 이름 거부·sibling hex 제외만. `#ffffff` 세 역할과 badge bg `#231e15`, option-card `#000000`은 세 번째 부류인데 한정 밖. | 기존 완전형에 canvas/page/card/nav `#ffffff` ≠ Secondary-on-Dark Text `#ffffff` ≠ Trust Badge Text `#ffffff`; ink/on-primary `#231e15` ≠ Trust Badge Background `#231e15`; Pure Black `#000000` ≠ Option Card Text `#000000`을 접어 넣음. 발생 수 +0. `#ffffff` DESIGN dest 13→**16**. `#231e15` 22→**24**. `#000000` 5→**7**. |
| 2 | `DESIGN.md:120` — Spacing | 키 비해합만 닫힘. `They are observed values rather than an assertion of a complete mathematical scale`는 같은 문단의 세 번째 부류인데 완전형 밖. | 그 판단을 한정 안에 넣음. `complete mathematical scale` DESIGN dest **1**. |
| 3 | `DESIGN.md:158` — Motion | 다섯 종류 게이트·부분 확인 거부는 있으나 official framework/vendor document 일치 ≠ 게이트는 한정 문장 밖. | 그 판단을 한정에 접어 넣음. B3 전문 문장은 유지. `official framework` DESIGN dest 1→**2**. |
| 4 | `DESIGN.md:228` — Capture record | C2/C4/3–32px keep-apart/`focus-visible`만. option/featured 관측이 default-only인 판단은 닫힘 주어 밖. | 그 판단을 including-list에 접음. `default-only` DESIGN dest **1**. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, 복수 `…inferences from the verified surfaces` **14**, `is a derived editorial implementation inference…` **4**, `are a derived editorial implementation inference…` **4**, `not Mailchimp-authored` 22, `separately published UI specification` 23, `separately published` 23, `not a separately published UI specification` 0. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 69, 86, 120, 134, 146, 158, 175, 182, 186, 207, 228, 416, 421, 473.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus). Spacing 원장의 `radius 4px (sibling-only)`는 본문 `xs: 4` is not a radius step보다 넓다. 헤더/데이터 행 수는 22=22로 유지하고 행 텍스트를 본문에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | Semantic color 행 | 키 병기·ink/on-primary·refero 이름만. | `#ffffff` canvas/page/card/nav ≠ Secondary-on-Dark Text ≠ Trust Badge Text; `#231e15` ink/on-primary ≠ Trust Badge Background; `#000000` ink-pure ≠ Option Card Text. |
| 6 | Spacing 행 | 키 비해합 + sibling-only 4px radius(본문이 이름하지 않음). | px samples ≠ complete mathematical scale; sibling-only 4px를 빼고 본문 keep-apart에 맞춤. |
| 7 | Motion 행 | 다섯 종류 게이트·부분 확인 거부만. | official framework/vendor document match ≠ that gate. |
| 8 | Capture record 행 | C2/C4/keep-apart/`focus-visible`만. | option/featured observations treated as default-only. |

헤더 / 데이터 행 **22 = 22** at 159–180 (E1 1:1, 이름 범위 정렬). `scripts/check-limiter-ledger.mjs mailchimp` 본문 22 = 원장 22.

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그(와 거짓 목적지 원장 행)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | YAML spacing 행 | exact `tokens.spacing.xs: 4` dest **2** at 118/120. 실측 dest **1** at **120**. 118은 맵 표기 `xs: 4`. | dest 1 at 120. |
| 10 | YAML spacing/shape 행 | exact `tokens.rounded.pill: 32` dest **3** at 120/124/186. 실측 dest **2** at **120/186**. 124는 맵 표기 `pill: 32`. | dest 2 at 120/186. |
| 11 | §11 Brand Narrative | `2001` dest **1** / `Atlanta` dest **1**. 실측 둘 다 dest **2** at 13(서술+한정 재진술). 같은 문장이 Ben Chestnut 등은 dest 2로 세고 이 둘만 1. | dest 2 / dest 2. |
| 12 | §3 Typography | Font-evidence 한정을 `176`으로 적음. 실측 완전형은 **175**. | 175. |
| 13 | §7 Don'ts | qualifier at **68**. 실측 `:68`은 `### Avoid` 빈 줄, 완전형은 **69**. | 69. |
| 14 | §14 C2 행 | `C4` dest **2** at 342/355. 실측 dest **3** at **228/342/355**(한정 줄 포함). | dest 3 at 228/342/355. |
| 15 | §14 C2 행 | YAML `type: button` dest **3** / `tab` dest 1 / `card` dest 2 / `badge` dest 1 / `input` dest 1. exact `type: button` DESIGN dest **0** (lotteon/lunit형). 실제 표기는 `Primitive type: \`button\`` dest **3** at 234/260/285. | Primitive type dest로 바로잡고 exact dest 0. |
| 16 | F1 준수 주장 | Docs-licence classification이 한정을 받았다고 적음. `Docs-licence` DESIGN dest **0** (E2c). | 본문에 그 분류가 없다고 고침. |
| 17 | F2 dest 표 + SHA | 본문 수정 뒤 재실측 없음(lablup). | `grep -oF -- \| wc -l` 재실측. `#ffffff` DESIGN **16** / P **4**. `#231e15` **24** / **12**. `#000000` **7** / **3**. `official framework` **2** / **1**. `complete mathematical scale` **1** / **1**. `default-only` **1** / **1**. SHA DESIGN `a90fc772…`. 확장 4자리를 F1에 적음. 자리 수 22=22 유지. |

Destination SHA `b8658b21a3200c1d7526e67a473fb4d5b1ee824dec34a26aa9206e1d553ae33a` → `a90fc7724b7ba9aed9e59ce7ed6d0e40a8884ceeab13230423f2ceda82b59fd4` (한정 확장 후). 줄 수 DESIGN `wc -l` **478** 불변. `wc -w` 7,060→**7,144**. provenance 192 불변(행 텍스트만).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법 변형(복수 `are derived editorial implementation inferences`)은 완전형.
- Scope `:9`의 23번째 `separately published UI specification`는 닫힘이 아니라 읽기(style guide ≠ UI spec)이고 같은 줄이 toss형으로 끝난다.
- Governance 일반 문구는 B2a 대체물이 아니다. Named gaps의 B3 다섯 종류는 Motion 한정과 같은 게이트의 재진술.
- YAML vs §3 표기는 문서 전체 keep-both. 무출처 커브 3개는 다른 종류의 충돌(attribution 없음)이라 항목 5 비일관에 해당하지 않는다. refero Press Black / Voltage Yellow는 대체명이 아니라 원장 대조 이름.
- E2c: B3 전문 `computed transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest 2 (Motion `:158` · Named gaps `:475`).
- E2d: sibling-only 머리(`provenance.md` 112)는 DESIGN.md를 분모로 두고 「this file에 없다」를 명시적으로 거부한다. 곡선 DESIGN dest 0 / P dest 1 — 로그 mention은 분모가 아니다. `Given-name strings … dest 0`는 이름을 열거하지 않는다.
- D2a: §13 처분 행은 절·인원·필드 종류만. 이름·나이·도시·전기 문구 없음. 원형 라벨을 D2a로 지목하지 않음.
- A1 키 경로: `button-primary` type/bg/fg/radius/padding/height/font/shadow/use가 Start Free Trial 블록 행으로 존재. `button-outline` 8필드. `button-outline-light` 8필드. `nav-link` type/fg/radius/padding/font/use/active. `card` type/bg/fg/radius/padding/border/use. `card-elevated` type/bg/fg/radius/padding/shadow/use. `badge-peppercorn` 7필드. `input-radio` type/border/radius/use. icook형 타 블록 hex 차용 없음. 복원 0. YAML `use` 15/15 (`check-yaml-use-landing.mjs`).
- 원본 §15 곡선 3개는 본문에서 생략되고 duration 120/200/320ms는 표로 남음. 값이 어디에도 없는 경우만 손실 — 합성하지 않음(kmong). duration은 T2 인용+역할이 아니라 표 값으로 보존.
- `#ffffff` canvas ≠ on-dark CTA text ≠ badge text, `#231e15` ink ≠ on-primary ≠ badge bg 귀속 분리는 정상이며, 감사 후 원장 Semantic 행에 적혀 1:1.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **0** / candidates **198**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피(Start Free Trial DESIGN dest 7 · Log In 6 · Customize my experience 5 · Industries and Solutions 1 · Integrations 1 · Resources 1 · Pricing 2 · Risk-Free • No Credit Card Required 3 · Email & SMS marketing minus the learning curve 2 · Marketing that delivers results 1 · Cavendish Yellow is Mailchimp's hero color. 1 · We use Peppercorn for accents 2 · We're weird but not inappropriate, smart but not snobbish. 1 · the wry over the farcical 3 · fluffy metaphors and cheap plays to emotion 1 · an alternative to the oversized, expensive email software of the early 2000s 1 · Today, we continue to empower the underdog… 1 · Something went wrong 1 · do this. 1) DESIGN dest 각 ≥1, 미생존 0. YAML use 15/15. 발행 라틴 손실은 안 보인다. 원본 Brand Narrative의 `built to give small-business owners the marketing tools their larger competitors took for granted`는 발행 슬로건이 아니라 원본 서술이라 A5 바늘이 아니다(DESIGN dest 0).
- **B1.** sibling 전용 `Email & SMS Marketing Platform | Mailchimp` / `Recommended for your business` / `Reach more customers with SMS` / `Brand Assets` / `Our colors` / `rgb(85,85,85)` / frequency-scan `4px`×143 / `50%` / `.ctaPrimary` / nav BUTTON DESIGN dest 0. `#555555` SIB dest **0** (sibling은 `rgb(85,85,85)`만 씀; 원장이 hex로 전사). `portal H2` dest 0. 본문 `h3` dest 2는 원본 §3 `h3 at 24px`(SRC dest 1)이지 sibling h3 표제의 승격이 아니다.
- **D2a.** 식별자·동기 스케치(`specialty coffee` / `freelance marketer` / `handmade goods` / `without reading a manual`) DESIGN·P·LOG dest 0. Primary tasks는 캡처 공개 컨트롤 세 개. Audience는 Brand Narrative/About의 그룹 두 줄. 로그 삭제 행은 원형 라벨을 적지 않음 — 발행 한국어 원형 라벨이 아님. 라벨 재수록을 D2a로 지목하지 않음(웨이브 41).
- **E2d.** 부재 단언 행이 자기 자신을 분모에 넣는 형태 없음. sibling-only 절은 「this file에 없다」를 명시적으로 거부한다.
- **같은 값 다른 역할.** `#ffffff` canvas / card / nav bg ≠ Secondary-on-Dark Text ≠ Trust Badge Text. `#231e15` ink ≠ on-primary ≠ Trust Badge Background. `#000000` ink-pure ≠ Option Card Text. E1로 원장·본문 한정을 실제에 맞춤(고침 #1·#5).
- **열 구조.** 원본 색 표는 이름·hex·use. 토큰명 열(`--mailchimp-…`)은 원본에 없음. 산출 Semantic color는 YAML 경로를 병기. krds형 토큰명 열 삭제는 해당 없음. 충돌 없음(`conflicts: none`); sibling 추가 기하(`4px` radius scan, `50%`)는 provenance-only로 일관.
- **모션.** 원본 §15 duration 3 + 무출처 커브 3. 커브는 생략, duration은 표로 보존. `intentionally omitted rather than synthesized` 자기 진술은 본문에 없고, 합성도 없다(kmong).
- **D1.** `native-client` / `storefront` / `authenticated` / `mobile app` DESIGN dest 0.

AUDIT_DONE fixes=17

---

## 의미 검토 FAIL 2 개정 (2026-08-29)

대상: `docs/design-md-weight/migrated/mailchimp/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/mailchimp/DESIGN.md`
기준: 독립 검토 판정문 FAIL 2만. 토큰 값·표 구조·applicability·원본 무변경.

### 결함 1 — §11 고유 서사 연결문 소실 (A1)

원본 `:350` `:352` `:354` 연결문을 Experience Scope `:13`에 사실 인용으로 복원. 날짜·이름·인용만 남던 자리에 기원→포지션 문장을 원문 표기로 채움. provenance Narrative에 같은 구 색인.

### 결함 2 — §15 easing Use·시그니처 페어링 소실 (A1 항목 3)

원본 `:402`–`:404` Use 칸과 `:406` 시그니처 페어링·제약 문장을 Motion `:158`에 복원. 무출처 cubic-bezier 3개는 생략 유지. duration 120/200/320ms 유지.

`node scripts/check-limiter-ledger.mjs mailchimp` → 본문 22 = 원장 22 (161–182). `migrate-reference.mjs --brand mailchimp --gate-only` → PASS.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §11 Brand Narrative | 고유 10바늘 DESIGN / P | 0 / 0 | **1** / **1** |
| §15 Motion | Use·시그니처 6바늘 DESIGN / P | 0 / 0 | **1** / **1** |
| Motion / Named gaps | `ease-enter` DESIGN / P | 2 / 1 | **4** / **2** |
| Scope / traits | `outsider-art` DESIGN | 2 | **3** |
| Identity | `https://mailchimp.com` DESIGN | 8 | **9** |
| Identity | `https://mailchimp.com/` DESIGN | 4 | **5** |
| Identity | `https://mailchimp.com/about/` DESIGN | 3 | **4** |
| Audience substring | `small-business owner` DESIGN / P | 1 / 2 | **2** / **3** |
| YAML metadata | `tokens.source: reconciled` P lines | 81/185 | **83/187** |
| YAML metadata | `components_harvested` P lines | 23/81/186 | **23/83/188** |
| §15 / §9 | `120ms`·cubic / `right-aligned` P lines | 149 / 147/151/178 | **151** / **149/153/180** |
| Deviations | `wc -w` | 7144 | **7352** |
| Header / Deviations | DESIGN SHA | `a90fc772…` | `7c398bec…` |
| E1 | 원장 행 범위 | 159–180 | **161–182** |

B2a `derived editorial implementation inference` DESIGN dest **22** 불변. `#ffffff` dest **16** / P dest **4**. `#231e15` dest **24** / P dest **12**. YAML `use` 15/15 dest 불변. 줄 수 DESIGN 478 불변.

FIX_DONE mailchimp fixed=2 logdest=14
