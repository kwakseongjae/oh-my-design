# nota 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/nota/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/nota/DESIGN.md`
검증 sibling: `web/references/nota/.verification.md` — `find web/references/nota -maxdepth 1 -type f`와 `test -f web/references/nota/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches`는 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 UI 사양 없음(getdesign.md/nota "No designs found"; refero no Nota AI match). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Nota AI-authored or a separately published UI specification`을 요구한다. 기존 33건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 33 / 원장 33. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:11` 한정 목록은 일부 분위기 읽기만 이름하고 `workhorse neo-grotesque` / `which keeps long technical copy readable` / size-and-weight hierarchy / chapter-marker eyebrow / `Depth is handled with restraint`를 빠뜨렸다. Family `:185`는 치환 금지만 이름하고 do-not-replace-unavailable과 `the roles never cross`를 빠뜨렸다. Capture `:228`은 applicability만 이름하고 Generic `focus` ≠ `focus-visible` 경계를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(사명·슬로건·YAML 값·§표 수치·NetsPresso®·수직 솔루션명) / 관측 기술(hex·Roboto/Pretendard·radius·live 70.2px) / 편집적 해석·인과 판단(계약 표면 선정, 분위기, 키 비병합, 승격 게이트, 페르소나 자리 읽기, focus vs focus-visible). 세 번째 부류만 수정 대상.

수정 금지 준수: 토큰 값, 컴포넌트 표, 상태 applicability, 구조는 바꾸지 않음. 한정 문장과 원장 정확성만.

## 수정 목록 (21건)

### B2a — 인접 한정 (본문 3건, 발생 수 +0)

기존 33개 완전형에 이름되지 않은 세 번째 부류를 같은 줄 목록에 접어 넣음. 새 한정 문장 없음.

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Experience Scope | `workhorse neo-grotesque`; `which keeps long technical copy readable`; hierarchy built on size and weight contrast rather than many type families; 21px blue eyebrow as a chapter marker; `Depth is handled with restraint`는 세 번째 부류. 기존 한정 목록은 engineering-grade / eye-trained / precise-and-industrial / measured-as-product / diffuse-and-quiet / white-and-navy만. | 기존 완전형 목록에 그 다섯 읽기를 접어 넣음. `derived editorial` 발생 수 +0. |
| 2 | `DESIGN.md:185` — Family | `:183` "Do not replace an unavailable or unobserved brand type"와 "The roles never cross; each font owns its locale"는 세 번째 부류. 기존 한정은 ENG/KOR 가족 지정·가중치·system-font 치환 금지만. | 기존 완전형에 do-not-replace-unavailable과 roles-never-cross를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:228` — Capture record | `:222` "Generic `focus` is named as a `motion-fast` use; that mention is not `focus-visible` treatment evidence"는 세 번째 부류. `:228`은 applicability / kind / not-complete만. | 기존 완전형에 Generic `focus` ≠ `focus-visible` 경계를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33, `not Nota AI-authored` 33, `separately published UI specification` 33. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 30, 34, 48, 58, 71, 88, 119, 123, 136, 140, 148, 156, 158, 166, 185, 189, 203, 215, 228, 232, 453, 461, 480, 487, 494, 503, 515, 519, 553.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Experience Scope `:11` | 여섯 분위기 읽기만. 본문 `:11`이 이제 workhorse / readable / size-and-weight hierarchy / chapter-marker / restraint도 이름한다. | 그 판단을 행에 추가. |
| 5 | Family `:185` | ENG/KOR 가족·가중치·system-font 치환만. 본문 `:185`는 do-not-replace-unavailable과 roles-never-cross도 이름한다. | 그 판단을 행에 추가. |
| 6 | Capture `:228` | applicability / kind / not-complete만. 본문 `:228`은 Generic `focus` ≠ `focus-visible`도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **33 = 33** (E1 1:1). 데이터 156–188.

### E2 / E2a / E2c — 로그 목적지 (15건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 줄 수가 아니라 출현 수. 본문 한정 확장 후 dest를 재실측함(웨이브 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML identity 행 | Exact `category: ai` DESIGN dest 0 / P dest 0. 표는 `| category | ai |` P dest 1. "lives in provenance Identity only"는 그 정확한 문자열이 있는 것처럼 읽힘. | 표 형태 P dest **1**. Exact colon form DESIGN dest **0** / P dest **0**. |
| 8 | YAML colors 행 | path dest를 DESIGN만 적음. 각 `tokens.colors.*` P dest 1. `#ffffff` dest 없음. | path dual dest (E2a). `#ffffff` DESIGN dest **16** / P dest **3** (canvas off on-primary). |
| 9 | YAML family 행 | `Roboto` dest 40 / P 13. F3 한정 확장 후 **41** / **14**. `Pretendard` 15 / 6 → **16** / **7**. | 재실측 dest. |
| 10 | YAML typography 행 | `70.2px` DESIGN dest 4만. P dest 3. `43.2px` P dest 3, `21.36px` P dest 2 누락. 토큰 경로 dest 없음. | `70.2px` DESIGN **4** / P **3**. `43.2px` **3** / **3**. `21.36px` **3** / **2**. 일곱 경로 각 DESIGN dest **1** / P dest **1**. |
| 11 | YAML spacing 행 | `sm: 8` / `xl: 24` / `xxl: 48` / `section: 64` DESIGN dest 1만. 네 문자열 모두 P dest 1 (claim ledger). | 각각 DESIGN dest **1** / P dest **1** (E2a). |
| 12 | YAML shadow 행 | `box-shadow: none` DESIGN dest 2만. P dest 1. | DESIGN dest **2** / P dest **1**. |
| 13 | §1 행 | 한정 목록 확장 후 dest를 안 고침. | `workhorse neo-grotesque` DESIGN dest **2** / P dest **1**. `which keeps long technical copy readable` **2** / **1**. `The result reads as precise and industrial` **2** / **1**. size-and-weight hierarchy **2** / **1**. `Depth is handled with restraint` **2** / **1**. |
| 14 | §3 행 | `one family per locale` DESIGN dest 1만 (P dest 1). `the roles never cross` dest 1 — F3 후 lowercase dest **2** / P dest **1**. | dual dest. Family close 185가 roles-never-cross를 이름한다고 적음. |
| 15 | §6 행 | `quiet and atmospheric rather than dramatic` dest 1. 134 관측 + 136 한정 = **2**. | dest **2**. |
| 16 | §10 행 | 보이스 샘플 DESIGN dest만. `Industry-tailored Vision Intelligence` P dest 1, `High-performance AI on Any Device` P dest 1, `Democratizing the use of AI` P dest 1. `Stay Ahead with the Latest AI Insights` P dest 0. | 이중은 둘 다. P dest 0은 0으로 남김. |
| 17 | §11 행 | `feel as engineered as the on-device models it ships` dest 1. 13 본문 + 13 한정 = **2**. P dest 1. | DESIGN dest **2** / P dest **1**. |
| 18 | §14 행 | `not in the token set` DESIGN dest 5만. P dest 1. Capture 한정이 focus 경계를 이름한 뒤 dest 미갱신. | DESIGN dest **5** / P dest **1**. `Generic \`focus\`` DESIGN dest **2** / P dest **1**. `focus-visible` DESIGN dest **12** / P dest **4**. `motion-fast` DESIGN dest **6** / P dest **2**. |
| 19 | §15 행 | `` `motion-fast` `120ms` DESIGN dest 3 `` — `120ms`는 **3**이 맞고 `motion-fast`는 F3 후 **6**. | `120ms` dest **3**. `motion-fast` DESIGN dest **6** / P dest **2**. |
| 20 | B2a 절 | 33=33만. F3가 세 한정을 제자리에서 넓힌 사실이 없음. | 33=33 유지, `:11`·`:185`·`:228` 확장과 원장 정렬을 병기. |
| 21 | Unique-phrase 절 | 복원 6종의 dest 없음. F3 후 출현 수가 바뀜. | 파일별 dest를 적음 (`workhorse` 2/1, precise-industrial 2/1, eye-trained 1/1, one-family 1/1, quiet-atmospheric 2/0, readable 2/1). |

E2c: B3 전문 `DESIGN.md` 158 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). 준수 주장 유지.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 33개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음.
- Color role 형용사("action" color, "grounds the brand")는 원본 §2 역할 서술. Semantic `:88`이 pairing/unmerge만 편집 추론으로 닫고 hex·use는 source's own으로 가른다.
- 원본에 없는 모션 규칙을 합성하지 않음. 무출처 커브는 생략 + B3 게이트가 본문에 있다(웨이브 39 kmong).
- YAML `use` 14종과 §3 70px는 본문에 인용된 채 역할이 남는다. T2 관례 — 값 소실로 읽지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Nota AI / 노타 / Nota Inc., "Democratizing the use of AI", 네 보이스 샘플, NetsPresso®, Vision Agent / ITS / DMS & FR / Industrial Safety / Surveillance, YAML `use`/`font` 바이트, 네비 라벨, CTA.
- **관측 기술** — 라이브 hex·치수·Roboto/Pretendard·`Primitive type`·unitless spacing/rounded·`box-shadow: none`·70.2px / 43.2px / 21.36px.
- **편집적 해석·인과 판단** — 세 페이지를 계약 표면으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 키 비병합, 증거 class 해상, kind/applicability, Generic `focus` ≠ `focus-visible`, 보이스 읽기.

세 번째 부류 중 33곳은 착수 시 인접 완전형이 있었고, 그 중 3곳은 목록이 본문 읽기보다 좁아 그 자리에 접어 넣었다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 33 | 0 | 1 |
| `not Nota AI-authored` | 33 | 0 | 1 |
| `separately published UI specification` | 33 | 0 | 1 |
| inventory 데이터 행 | — | 33 | — |
| `Roboto` | 41 | 14 | 2 |
| `Pretendard` | 16 | 7 | 2 |
| `70.2px` | 4 | 3 | 4 |
| `not in the token set` | 5 | 1 | 5 |
| `feel as engineered as the on-device models it ships` | 2 | 1 | 1 |
| `quiet and atmospheric rather than dramatic` | 2 | 0 | 2 |
| `workhorse neo-grotesque` | 2 | 1 | 3 |
| `the roles never cross` | 2 | 1 | 1 |
| `Generic \`focus\`` | 2 | 1 | 1 |
| `focus-visible` | 12 | 4 | 3 |
| `motion-fast` | 6 | 2 | 3 |
| `Accept` | 0 | 2 | 3 |
| `Across Industries—Turning On-Device AI into Reality` | 0 | 2 | 3 |
| B3 다섯 종류+게이트 (`DESIGN.md` 158) | 1 | 0 | 1 |
| `loading \| applicable` | 5 | 0 | 0 |
| `loading \| not-applicable` | 2 | 0 | 0 |

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다. `Accept`·sibling 헤드라인의 로그/원장 출현은 처분 지목이지 portable use가 아니다.

토큰·표·applicability·구조·원본 무변경. DESIGN.md 줄 수 559 불변.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 0 / candidates 0 (unquoted `노타`, empty needle). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 손 대조 발행 라벨 24 extracted / 0 missing: Democratizing the use of AI DESIGN dest 4 · Industry-tailored Vision Intelligence dest 4 · High-performance AI on Any Device dest 2 · Stay Ahead with the Latest AI Insights dest 1 · Turning On-Device AI into Reality dest 1 · Newsroom dest 6 · Tech Blog dest 9 · AI Solutions dest 4 · Company dest 2 · Contact Us dest 2 · Read More → dest 5 · Learn more → dest 4 · Subscribe to our newsletter → dest 4 · Decline dest 3 · Send dest 4 · NetsPresso® dest 2 · Vision Agent dest 1 · Intelligent Transportation Systems (ITS) dest 1 · Driver Monitoring & Face Recognition (DMS & FR) dest 1 · Industrial Safety dest 2 · Surveillance dest 2 · 노타 dest 5 · Nota Inc. dest 1 · Nota AI dest 45. 눈에 띄는 라틴 발행 카피 손실은 없다. sibling-only `Accept` / `Across Industries—Turning On-Device AI into Reality`는 원장만. 고치지 않음.

- **B1.** sibling 전용 `59.616px` / `51.84px` / `31.271px` / `1031` / `1566` / `Escape-dismiss` / `document.title` / `font-size: 12px` / `Accept` / `Across Industries—Turning On-Device AI into Reality`: DESIGN dest 0 / provenance mention. 본문 `section H1` / `blue eyebrow H4`는 원본 HTML 주석(`hero H1` / `section H1` / `eyebrow H4`)이지 sibling 구조 분류 승격이 아니다. `portal H2` sibling 0 / 원본 0 / 산출 0. sibling 전용 분류의 본문 승격 없음.

- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. 식별자 문자열은 본문·원장 dest 0(감사 로그에도 재수록하지 않음). 원본 페르소나 절의 동기 문장·소속 분류 신조어는 본문 dest 0. Audience는 원본 §13 헤더의 공개 관측 그룹(`embedded/edge AI engineers` / `automotive and industrial buyers` / `ML researchers`)만. Primary tasks는 표면 라벨이지 페르소나 동기가 아님. gitlab형 동기 잔존·hubspot형 소속 신조어 없음.

- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0(`Accept`, `59.616px`, exact `category: ai`, `getdesign.md` DESIGN dest 0)은 DESIGN을 분모로 두고 로그 자신을 넣지 않는다. Omission ledger의 커브 세 값은 처분 수록이지 「이 파일에 없다」 단언이 아니다.

- **A1 키 경로.** YAML `tokens.components` 7키 전수: `button-primary` / `button-dark` / `input-text` / `card-elevated` / `card-outline` / `eyebrow-label` / `nav-link`의 `type`·`fg`/`bg`·`border`·`radius`·`padding`·`font`·`height`·`shadow`·`active`·`use`가 대응 블록에 **행으로** 있다. `border: "1px solid #3264f0"` 등은 `Border: 1px solid \`#3264f0\``로 같은 블록 행에 있고, hex 백틱은 Core v2 표기이지 icook형 Text 행 소실이 아니다(같은 hex가 다른 컴포넌트에만 있는 경우가 아님). colors 14키 / typography family+7 roles / spacing 8 / rounded 4 / shadow.card·none 이 각 절의 경로로 있다. 복원 없음.

- **hex 귀속 분리 (웨이브 39 krafton).** `#ffffff` = canvas (feature-band/page) / on-primary (navy fill·dark hero text). `#000000` = catalog black (field border·accents) off ink `#101218`. `#e7e7e7` hairline off `#eaeaee` border-soft. 본문 한정 `:88`과 원장 Semantic 행이 그 분리를 이름한다. 값을 합치지 않음. 고치지 않음.

- **충돌 처리 일관 (웨이브 40 krds).** 같은 hex 두 키는 전부 병기·비병합. radius YAML unitless off prose px, `9999` off `50%`. 자리마다 다른 정책 없음.

- **웨이브 39 T2 관례.** 원본 §15 커브는 본문에서 역할·토큰명만 남고 값은 생략 처분됨. 값이 원장 Omission ledger에 있다. 「값 소실」로 되살리지 않음.

AUDIT_DONE fixes=21
