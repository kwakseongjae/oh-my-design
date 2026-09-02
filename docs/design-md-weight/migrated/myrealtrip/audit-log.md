# myrealtrip 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/myrealtrip/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/myrealtrip/DESIGN.md`
검증 sibling: `web/references/myrealtrip/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o` / `str.count`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MyRealTrip-authored or a separately published UI specification`을 요구한다. 기존 28건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 28 / 원장 28. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Distinctive traits `:32`는 restatement/groupings만 이름하고 리스트 항목의 header-action-not-generalised-palette를 빠뜨렸다. Family `:141`은 UI-family/alias/substitute만 이름하고 `:139`의 FontFace 인과를 빠뜨렸다. Layout `:274`는 local geometry / source no-claim만 이름하고 `:272`의 desktop-capture ≠ cross-viewport를 빠뜨렸다. Principles 원장은 UI implication을 derived로 적었으나 본문은 그것을 source’s own editorial reading으로 분류한다(넓은 쪽).

문장 분류: 브랜드 발행 사실(사명·2012·Lee Dong-geon·한국어 라벨·YAML 값) / 관측 기술(hex·px·selector·interactionCount) / 편집적 해석·인과 판단(키 비병합, 토큰 표면 범위, 페르소나 슬롯 삭제 읽기, FontFace 인과, 높이≠그리드/크로스뷰포트). 세 번째 부류만 수정 대상.

## 수정 목록 (17건)

### B2a — 인접 한정 (본문 3건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:32` — Distinctive traits | 리스트 항목의 “repeated header action on a white canvas rather than a generalised brand palette”는 세 번째 부류. 기존 한정은 restatement / groupings만. | 기존 완전형에 그 grouping을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:141` — Family | “canonical only because computed visible use and loaded FontFace/source evidence agree”는 세 번째 부류. 기존 한정은 UI-family / alias / substitute 거부만. | 기존 완전형에 public-web surfaces + FontFace 인과를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:274` — Layout & Platforms | “desktop-capture measurements, not cross-viewport specifications”는 세 번째 부류. 기존 한정은 local geometry / source no-claim만. | 기존 완전형에 cross-viewport 비승격을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 28, `not MyRealTrip-authored or a separately published UI specification` 28. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 52, 60, 72, 85, 95, 107, 111, 117, 125, 141, 145, 155, 162, 184, 201, 227, 255, 274, 279, 287, 321.

### E1 — provenance derived 범위 (4건)

좁은 쪽과 넓은 쪽 모두 FAIL. 본문 한정이 이름하는 판단을 원장이 빼거나, 본문이 source’s own으로 둔 것을 derived로 적으면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Distinctive traits 행 | groupings만. 본문 `:32`가 이제 palette grouping도 이름한다. | 그 판단을 행에 추가. |
| 5 | Principles 행 | “The three items and every *UI implication*”. 본문 `:44`는 3 items만 derived이고 UI implication은 source’s own editorial reading. | **The three items**. |
| 6 | Family 행 | UI-family / alias / substitute만. 본문 `:141`이 이제 FontFace 인과도 이름한다. | 그 판단을 행에 추가. |
| 7 | Layout 행 | local geometry / no-claim만. 본문 `:274`가 이제 cross-viewport도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **28** 유지 (E1 1:1). 내용만 본문에 맞춤.

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o` / `str.count`로 확인했다. 착수 로그는 고유 줄 수(grep -c형)를 써서 한 줄 두 회를 과소 집계했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML identity 행 | Homepage `https://www.myrealtrip.com/` DESIGN dest at 9/21/151 · P dest at 51/52/61/62/69/70. 패턴 dest DESIGN **7** at 9×2/21×2/149/150/151 · P **7** at 51/52/61/62/69/70/86. | dest **7** / **7**. `/hotels`·`/about/realguide` 접두 매치를 명시. |
| 9 | YAML identity 행 | `#2b96ed` DESIGN dest **4** lines at 34/74/85/190. 74에 2회. | dest **5** at 34/74×2/85/190. |
| 10 | YAML identity 행 | `#2B96ED` DESIGN dest **5** lines at 11/34/54/74/190. 11에 2회. | dest **6** at 11×2/34/54/74/190. |
| 11 | YAML token note 행 | Exact sentences DESIGN 9 · P 27. 문장은 P **26**. | P dest **1** at 26. |
| 12 | YAML typography 행 | `18.6px` DESIGN 145/151/155/248/255 (고유 줄). 145·255에 각 2회. | dest **7** at 145×2/151/155/248/255×2. |
| 13 | §11 행 | February 2012 DESIGN dest **1** at 13. 13에 2회. | dest **2** at 13×2. |
| 14 | §11 행 | Lee Dong-geon DESIGN dest **2** at 13/287. 13에 2회. | dest **3** at 13×2/287. |
| 15 | §13 행 | Disposition **삭제**만. 미완성 슬롯은 삭제, source-named groups는 Audience로 옮김 (DESIGN dest **1** at 28 · P dest **1** at 146). | 삭제 (미완성 슬롯) + 옮김 → Audience (source-named groups). |
| 16 | C2 / A1b | `not in the token set` dest **1** at 216. 소문자 패턴 dest **2** at 184/227. 대문자 `Not in the token set` dest **1** at 216. | 두 표기를 분리해 실측. |
| 17 | 헤더 SHA / Pass 1·2 | Worker SHA만. dest 표를 착수 숫자로 적음. | Auditor SHA `ec1bf3b7e656b556e9869f934dc9697c5d5c07a03daf1512aa5fe0f5530a60db`. Pass 1: 28=28 + fold 3 / Principles 축소. Pass 2 dest 재실측. |

Destination SHA `b5a07a11c5819b8fe4fa8916881b9a1c6db94e3c03a36545ec4549934ce4720d` → `ec1bf3b7e656b556e9869f934dc9697c5d5c07a03daf1512aa5fe0f5530a60db` (한정 확장 후). 줄 수 DESIGN `wc -l` **330** 불변. provenance **193** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 28개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 117 (`transition properties` 1, `animation name` 2, `duration` 2, `easing` 2, `reduced-motion behavior` 2, per-component computed observation). Principles 형태 `:44` dest 1. 준수 주장 유지.
- E2d: dest **0** 주장은 분모가 `DESIGN.md`이다. 로그/원장 mention을 「세 파일 어디에도 없다」로 읽지 않는다. Omission ledger는 필드 종류만 적고 부재 단언에 식별 문자열을 넣지 않는다.
- D2a: 원본 §13에 이름·나이·도시 없음. 처분 행은 절·미완성 슬롯 종류만. 원형 라벨도 없음.
- A1 키 경로: YAML `primary-header-action` 9필드(type/bg/fg/radius/padding/height/font/states/use)와 `selected-locale-tab` 9필드(type/bg/fg/radius/padding/height/font/active/use)가 대응 블록에 **행으로** 있다. icook형 타 블록 hex 오인 없음. 복원 없음.
- A5a 발행 카피 8종(MyRealTrip, 마이리얼트립, Lee Dong-geon, Real Partner, `무엇을 도와드릴까요?`, `문의하기`, `여행자와의 약속을 성실히 이행해요`, AI-native travel platform) DESIGN dest > 0. 라틴 발행 카피 손실 없음. §9 프롬프트는 도구 명령으로 삭제·로그 처분.
- sibling 전용 (`surface-2::body`, `rgb(26, 26, 26)`, `27.2px`, `home::[data-omd-capture="23"]`, `slick`, `swiper-icons`, `4px radius`, coverage 75)은 provenance Sibling handling에만 있고 본문에 사실로 승격되지 않음. `product-surface` DESIGN dest 1 at 6은 Core claim 마크업.
- Motion placeholder는 원본 `[FILL IN]` 경계에서 생략. 합성 문장 없음 (kmong 관례).
- `18.6px`는 본문에 인용된 채 역할 서술. T2 관례 — 값 소실로 읽지 않음.

## 범위 밖 관찰

- **A5a.** Gate `coverage.copy-loss` compared **4** / candidates **102**. `verdict: PASS`는 대조한 4개 바늘의 무손실이지 카피 전수 보존이 아니다. 손 스윕 8종은 생존. 라틴 발행 카피 손실은 보이지 않음.
- **같은 hex 다른 역할 (wave 39 krafton, 고치지 않음).** `#ffffff` / `#FFFFFF`가 `tokens.colors.canvas`(White canvas), `tokens.colors.on-primary`(Action text), `tokens.components.selected-locale-tab.fg`(탭 Text) 세 자리에 붙는다. canvas≠on-primary는 본문 `:72`/`:85`와 원장 path-separation 행에 있다. 탭 fg는 컴포넌트 필드로 기록됐을 뿐 세 번째 비병합 문장은 없다.
- **충돌 처리 비일관 (wave 40 항목 5, 고치지 않음).** 색은 YAML 소문자 hex와 §2 대문자 hex를 병기한다. 타입 사이즈는 YAML 키가 있는 body/control을 unitless `14`/`15`로 두고 §3의 `14px`/`15px` 표기는 그 칸에서 빼며, YAML 키가 없는 locale tab만 `15px`를 남긴다. 값 존재는 통과, 열 형태는 자리마다 다르다.
- **B1.** sibling 전용 구조 분류(`portal H2` 류)의 본문 승격은 없다. `White outlined control` 본문 잔존은 원본 §2 “Static white outlined control”이다.
- **D2a 본문 잔존.** 이름·나이·도시 0회. 원본 그룹 문구(`travellers seeking travel products` 등)는 Audience에 남아 있고 원본 §13과 바이트가 같다. 동기/소속 분류의 신규 표현은 없음.

AUDIT_DONE fixes=17
