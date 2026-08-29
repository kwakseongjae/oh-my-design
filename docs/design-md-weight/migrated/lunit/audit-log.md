# lunit 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/lunit/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/lunit/DESIGN.md`
검증 sibling: `web/references/lunit/.verification.md` — `find`로 경로 직접 확인. **ABSENT** (dotfile 경로를 직접 적음; `ls`/`*`에 안 보이는 것과 별개로 파일이 없다). 원본 §14가 가리키는 원 검수 파일은 `web/references/lunit/assets/_reference/.live-inspect-proof.json`.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양은 수집되지 않음(`design.lunit.io` DNS 실패; 원본 §15 음성 조회). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Lunit-authored or a separately published UI specification`을 요구한다. 기존 26건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 `derived editorial implementation inference` 26 / `not Lunit-authored` 26 / `separately published UI specification` 26 / `separately published` **27**. 원장 표는 26행이었으나 절 제목이 `## B2a inventory (portable body)`라 `check-limiter-ledger.mjs`가 **원장=절없음**(ferrari). 행 수는 맞았으나 양쪽이 함께 좁았다(fastcampus). Principles `:45`가 완전형 뒤에 불완전 닫힘(`not as a separately published Lunit UI specification`만)을 한 번 더 썼다. Scope `:11`은 YAML/prose keep-both만 이름하고 홈페이지 층≠발행 토큰 사양·canvas/inverse 두 역할은 한정 밖. Semantic `:81`은 canvas≠on-dark YAML 키만 이름하고 Blue band Text `#ffffff`(서명 블루 위 라벨)과 Secondary nav Color `#000000`은 한정 밖. Spacing `:98`은 패딩 비해합만 이름하고 eight-step map ≠ complete scale은 한정 밖. Motion `:135`는 다섯 종류+부분 확인 거부는 있으나 official framework/vendor document 일치는 한정 문장 밖. Font `:143`은 정렬만 이름하고 official-use 음성 조회·fallback≠브랜드 페이스·license=font-author는 표 안의 세 번째 부류. Capture `:203`은 C2/YAML type/`focus-visible`만 이름하고 C4 Surface/Blue band 생략·static default-only+card-hover ink-shift는 한정 밖. Content `:342`은 보이스 과독 거부만 이름하고 `:340`의 `루닛` beside `Lunit` keep-both는 인접 세 번째 부류.

문장 분류: 브랜드 발행 사실(루닛·INSIGHT 제품명·Contact Us·Allow all·통계 밴드·voice 동사·YAML 값) / 관측 기술(hex·px·AOS 클래스·캡처 기하) / 편집적 해석·인과 판단(표면 귀속, 비해합, 스케일 거부, 승격 게이트, 페르소나 삭제 읽기, 같은-hex 역할 분리). 세 번째 부류만 수정 대상.

## 수정 목록 (21건)

### B2a — 인접 한정 (본문 8건, 발생 수 +0 / `separately published` 27→26)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | YAML/prose keep-both만. 홈페이지 층≠발행 토큰 사양, canvas/inverse 같은-hex 두 역할은 세 번째 부류인데 한정 밖. | 기존 완전형에 captured English-homepage layer ≠ declared global/INSIGHT palette · canvas/inverse two roles · 2026-06-09 set = drawn from the record's own prose (YAML 키 `prose-derived`는 본문에 넣지 않음)을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:45` — Principles | 완전형 다음 문장이 stems를 `not as a separately published Lunit UI specification`만으로 닫음. 불완전 한정. | stems + UI implication을 완전형 한 문장에 접음. 불완전 닫힘 제거. `separately published` 27→**26**. |
| 3 | `DESIGN.md:81` — Semantic color | canvas `#ffffff` ≠ on-dark `#ffffff`만. Blue band Text `#ffffff`(서명 블루 위 라벨, 세 번째 색 키 아님)과 Secondary nav Color `#000000`은 세 번째 부류. | 기존 완전형에 세 `#ffffff` 귀속(canvas/Surface Background · on-dark/Primary CTA Text · Blue band Text)과 dark `#000000` ≠ nav `#000000`을 접어 넣음. `#ffffff` DESIGN dest 10→**11**. `#000000` 7→**8**. |
| 4 | `DESIGN.md:98` — Spacing | 키 비해합만. eight-step map ≠ complete mathematical scale은 세 번째 부류. | 그 판단을 한정 안에 넣음. |
| 5 | `DESIGN.md:135` — Motion | 다섯 종류 게이트는 있으나 official framework/vendor document 일치 ≠ 게이트는 한정 문장 밖. | 그 판단을 한정에 접어 넣음. B3 전문 문장은 유지. |
| 6 | `DESIGN.md:143` — Font evidence | 정렬만. official-use 음성 조회, `system-ui`/`Arial` fallback≠브랜드 페이스, License=font-author not Lunit은 표 안의 세 번째 부류. | 세 판단을 기존 완전형에 접어 넣음. |
| 7 | `DESIGN.md:203` — Capture record | C2/YAML type/`focus-visible`/complete-coverage 거부만. C4 Surface/Blue band 생략과 static default-only+card-hover ink-shift는 세 번째 부류. | 두 판단을 기존 완전형에 접어 넣음. |
| 8 | `DESIGN.md:342` — Content | 보이스 과독 거부만. `:340` `루닛` beside `Lunit` keep-both는 인접 세 번째 부류. | 그 keep-both를 기존 완전형에 접어 넣음. `루닛` DESIGN dest 2→**4**. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 26, `not Lunit-authored` 26, `separately published UI specification` 26, `separately published` 26, `not a separately published UI specification` 0. `prose-derived` DESIGN dest **0** / P dest **4** (YAML 키는 원장만). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 66, 81, 86, 92, 98, 115, 127, 133, 135, 143, 164, 166, 170, 181, 194, 203, 327, 342.

### E1 — provenance derived 범위 (9건)

좁은 쪽 FAIL(fastcampus) + 절 제목 미검출(ferrari). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | 절 제목 | `## B2a inventory (portable body)` — 체커 LEDGER_HEADING 미매칭, `원장=절없음`. 헤더 셀 `Line`은 skip 목록 밖. | `## Derived editorial inventory`. 표 머리 `Location` / `Qualified reading`. |
| 10 | Scope ¶2 행 | YAML/prose keep-both만. | homepage-layer ≠ published token spec; canvas/inverse two roles; 2026-06-09 = drawn from the record's own prose. |
| 11 | Principles 행 | (5) including the published-spec close만. | stems = source thesis/voice rule; UI implication attached; toss-form close. |
| 12 | Semantic color 행 | role pairing and keep-both of same-hex keys만. | canvas/Surface · on-dark/CTA Text · Blue band Text `#ffffff`; dark ≠ Secondary nav `#000000`. |
| 13 | Spacing 행 | unitless YAML map kept off the two px paddings만. | eight-step map ≠ complete mathematical scale. |
| 14 | Motion `:135` 행 | B3 five-kind promotion gate만. | official framework/vendor document match ≠ that gate. |
| 15 | Font evidence 행 | class sorting만. | official-use negative lookup; fallbacks ≠ brand faces; license = font-author. |
| 16 | Capture record 행 | kind verdicts, applicability reasons, C4 omissions만(이름만 있고 내용 좁음). | C4 Surface/Blue band omit kind/map; static default-only + card-hover ink-shift. |
| 17 | Content 행 | Voice rules as structural instructions만. | `루닛` kept beside `Lunit` rather than as a replacement. |

헤더 / 데이터 행 **26 = 26** at 179–204 (E1 1:1, 이름 범위 정렬). `scripts/check-limiter-ledger.mjs lunit` 본문 26 = 원장 26.

### E2 / E2a / E2c — 로그 목적지 (4건)

본문이 아니라 로그(와 거짓 목적지 원장 행)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 18 | YAML `components_harvested: true` | 목적지 `P 21 (A1c)`. 실측 표 칸 dest 1 at **20**. | P 20. |
| 19 | Frontmatter Identity / Freshness 범위 | Identity P 7–21 · Freshness P 27–34. 실측 Identity 표 8–20, Freshness 표 28–33. | 8–20 / 28–33. |
| 20 | `logo.type: favicon` 이중 목적지 | 「DESIGN Assets and P Identity」로 exact 키를 둘 다에 둔 것처럼 읽힘. exact `logo.type: favicon` DESIGN dest **1** / P dest **0** (표 칸은 `type: favicon`). fitpet형 2차 목적지. | exact dest 1/0로 바로잡고, 단어 `favicon` DESIGN **5** / P **4**, URL은 Assets+Identity 이중 목적지로 분리. |
| 21 | F2 dest 표 + C2 소문자 kind | 본문 수정 뒤 재실측 없음(lablup). C2 표가 exact `kind: non-interactive`를 본문 표기처럼 적음 — DESIGN dest **0**, 실제 표기는 `Kind: non-interactive` dest **3**. | `grep -oF -- \| wc -l` 재실측. `#ffffff` DESIGN **11** / P **8**. `#000000` **8** / **4**. `#2a4eef` 7 / **3**. `Lunit` **42** / **16**. `루닛` **4** / **2**. `Lexend` **38** / **13**. `ClashGrotesk` **22** / **6**. `0px` 23 / **5**. `100px` 9 / **2**. `3.75px` 2 / **3**. `9999` 8 / **3**. `28px` 6 / **2**. `20px` 7 / **1**. `1.08` 3 / **3**. `1.40` 3 / **3**. C2: `Kind: non-interactive` dest 3. SHA DESIGN `8b7504e3…` · provenance `31e82641…`. 확장 8자리를 F1에 적음. 자리 수 26=26 유지. |

Destination SHA `931f7a79074c72407e2e35da94f2e6400ebaa5caad398ca35d7aed548eace075` → `8b7504e3347db5430eab0e16816d2254b8f00bde29d7c8eaef08400824d65dcb` (한정 확장·불완전 닫힘 제거 후). 줄 수 DESIGN `wc -l` **401** 불변. `wc -w` 5,165→**5,376**. provenance 226 불변(제목·행 텍스트만).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 26개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법 변형(복수 `are derived editorial implementation inferences`)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, Recorded conflicts의 keep-both는 Shape/Family/Type roles 한정과 같은 정책의 재진술. Named gaps의 B3 다섯 종류는 Motion 한정과 같은 게이트의 재진술.
- YAML vs prose 충돌은 문서 전체 keep-both. proof-file vs source DESIGN.md는 source 유지·proof는 원장 — 충돌 종류가 달라 항목 5 비일관에 해당하지 않는다.
- E2c: B3 전문 `computed transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest 2 (Motion `:135` · Named gaps `:399`). `transition properties` dest 2 · `animation name` dest 2 · `reduced-motion` dest 3.
- E2d: `There is no web/references/lunit/.verification.md`는 파일시스템 부재이지 「이 문자열은 이 파일에 없다」가 아니다. `prose-derived` count in the portable body: 0 — 분모는 본문, DESIGN dest 0. `getdesign`/`refero` portable-body 0 — 분모는 본문. 부재 단언이 자기 자신을 분모에 넣어 거짓이 된 행 0.
- D2a: §13은 에이전트 선택 브리프. 이름·나이·도시·전기 문구 처분 행에 없음. 원형 라벨을 D2a로 지목하지 않음.
- A1 키 경로: `cta-pill` type/bg/fg/radius/use가 Primary CTA 블록 행으로 존재. `surface` type/bg/fg/radius/use가 Surface 블록 행으로 존재. `blue-band` type/bg/fg/radius/use가 Blue band 블록 행으로 존재. icook형 타 블록 hex 차용 없음. 복원 0. YAML `use` 9/9 (`check-yaml-use-landing.mjs`).
- 원본 §15 곡선·duration 없음. 값이 어디에도 없는 경우만 손실 — 합성하지 않음(kmong).
- `#ffffff` canvas ≠ on-dark ≠ Blue band Text 귀속 분리는 정상이며, 감사 후 원장 Semantic 행에 적혀 1:1.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **0** / candidates **128**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 기계 바늘이 빈 이유: 유일한 Hangul `루닛`이 2자라 바닥 4에 못 미친다. 손 대조 발행/인용 카피 12 (`Contact Us` DESIGN dest 6 · `Allow all` 1 · `10,000+ Customer Sites` 3 · `65+ Countries` 2 · `700+ Publications` 2 · `루닛` 4 · `INSIGHT CXR / DBT / MMG` 4 · `detect`/`stratify`/`screen`/`support` 각 2 · `battle`/`fight` 각 2 · `transform lives` 3 · `diverse smiling teams` 1 · `amazing` 1) DESIGN dest 각 ≥1, 미생존 0. YAML use 9/9. `latin-copy-audit` withLoss 0. 발행 라틴 손실은 안 보인다. Live H1 `Conquer Cancer Through Cutting-Edge AI`는 원본이 DESIGN.md에 복사하지 말라고 한 sidecar 문자열 — 손실이 아니다.
- **B1.** sibling `.verification.md` 없음(find 경로 직접, ABSENT). proof-only `92px` DESIGN dest 0 / P 3 · `7px` 0 / 2 · `100+ Partnerships` 0 / 2 · `Conquer Cancer` 0 / 1 · `#141414` 0 / 2 · `INVESTORS` 0 / 1 · `1280` 0 / 2 · `h1.lunit-hero` 0 / 1 · `CybotCookiebot` 0 / 1. `portal H2` / `h3` sibling 0(파일 없음), 본문 승격 0. 값만이 아니라 구조 분류 침투도 0.
- **D2a.** `Choose Lunit-style` / `consumer fintech` / `lifestyle commerce` / `institutional buyers` / `clinicians` DESIGN dest 0. `scientific composure` DESIGN dest 1은 원본 §1 특성화(Scope `:13` 한정 안). 동기·소속 분류가 Primary tasks/Audience에 재구성되지 않음. 로그 §13 처분 행은 절·필드 종류만; 이름·나이·도시를 예시로 재수록하지 않음.
- **A1 열 구조.** Semantic 역할행에 `tokens.colors.*` 경로가 붙어 있다. Type roles Token-set use 열이 YAML `use`를 병기한다. krds형 토큰명 열 삭제는 없다.

AUDIT_DONE fixes=21
