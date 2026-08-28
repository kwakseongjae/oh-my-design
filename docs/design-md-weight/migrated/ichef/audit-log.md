# iCHEF 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/ichef/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/ichef/DESIGN.md`
검증 sibling: `web/references/ichef/.verification.md` — `find web/references/ichef -type f`는 `DESIGN.md`만 반환. `find web/references/ichef/.verification.md`는 `No such file or directory`. 경로를 직접 적었고, 파일은 없다. 코퍼스 440 중 sibling 없는 쪽에 속한다.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음(수상 이력은 공예 서사, 토큰 시트 아님). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not iCHEF-authored or a separately published UI specification`을 요구한다. 기존 31건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 31 / 원장 31. 숫자는 맞았으나 Motion `:132` 한정이 durations/roles/signature/spring/reduced-motion만 이름하고 템플릿 커브 생략 판단을 빠뜨렸고, Components `:246` "That bound travels with every component value below"는 세 번째 부류인데 인접 한정이 없었다. 31은 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (14건)

### B2a — 인접 한정 (본문 2건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:132` — Motion | "the specific curve values … match the `spec/omd-v0.1.md` example table … so the curves are omitted"는 세 번째 부류. 같은 절의 기존 한정은 durations / roles / signature / spring / reduced-motion만 가리킨다. | 기존 완전형에 템플릿 커브 생략 판단을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:246` — Components bound | "That bound travels with every component value below"는 세 번째 부류. `:244`는 applicability 절차이지 근사 클래스 전파가 아니다. Scope `:9`의 같은 판단은 237줄 떨어져 인접이 아니다. | 같은 줄에 toss형 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 32, `not iCHEF-authored` 32, `separately published UI specification` 32. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 47, 58, 70, 84, 107, 118, 128, 132, 174, 176, 177, 178, 179, 186, 192, 224, 233, 244, 246, 454, 470, 485, 487, 509, 548, 582.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL. 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 32건을 원장 31로 적으면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Portable derived-editorial scope 헤더 | **31** / **31**. 본문이 이제 32. | **32** / **32**. |
| 4 | `provenance.md` Motion 행 | "template curves omitted"은 있었으나 본문 `:132`가 이제 match-spec 사유까지 이름한다. | omitting-because-spec-example-table을 행에 맞춤. |
| 5 | `provenance.md` inventory | Components approximation-bound 행 없음. | `DESIGN.md` 246 행 신설. 데이터 행 **32**. |

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김. 2차 목적지는 `DESIGN.md`에서 `grep -oF | wc -l`로 세었다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | YAML identity / colors | `#e8552d` dest **6**을 11/86/261만 적음. 실측 11/84/86/261/313/341. | 여섯 줄 전부. |
| 7 | YAML identity | `logo.type: favicon`을 `DESIGN.md` 229로 적음. 229는 photography 행. 실측 228. | **228**. |
| 8 | YAML metadata | `tokens.source: prose-derived`를 DESIGN 9/132/175/246/454/487로 적음. 정확 문자열 dest **1** at 9 (fitpet형). 나머지 다섯은 `prose-derived`만. provenance dest **2** at 61/63. | dest 1 at 9 + provenance 61/63. |
| 9 | YAML rounded | `tokens.rounded.full: 9999` dest **2** at 116/118. 정확 문자열 dest **1** at 118. 116은 키만. | dest 1 at 118. `tokens.rounded.full` dest 2 at 116/118은 병기. |
| 10 | YAML components / §4 | `not in the token set` 네 번째를 Tables 447로 적음. 447은 빈 줄. 실측 dest **4** at 398/418/435/450. §4 범위를 249–447로 잘라 Tables를 빠뜨림. | Tables **450**. §4 249–450. |
| 11 | §5 / §14 | Structure를 476–485, state table을 456–466으로 적음. `### Structure`는 475. 표는 Disabled까지 468. | 475–485. 456–468. |
| 12 | §14 applicability | `loading \| applicable` dest **1** at 273. 273은 success 행. 실측 271. | **271**. |
| 13 | §10 / A5a | 예시 카피를 526–527로 적음. 526은 검증 CTA `專人到店免費體驗`. 예시 행은 527–528. | **527–528** / 587 (Voice 행 + A5a 표). |
| 14 | §12 · Deviations · F1 · F2 · SHA | inventory/Deviations가 31. F1이 246과 커브 생략을 빠뜨림. | 32. F1 32줄(확장+신설). F2 dest 교정. worker-close SHA `3f0250af…` 유지, auditor `ec5f31c264761f7e2ea9281bbac6604530c47bd75b1418e9a225622442e392dc`. |

Destination SHA `3f0250af…` → `ec5f31c264761f7e2ea9281bbac6604530c47bd75b1418e9a225622442e392dc` (한정 신설·확장 후). 줄 수 DESIGN 590 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 여섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §1/§3/§11 그룹 문구(`restaurant owners and serving staff`, `TW restaurant operators`, `small restaurants across Asia`). 페르소나 소속 분류를 만들지 않음. 한정 미추가.
- Motion `:134` "minimal and operational" · spring `:155` — 원본 §15 문장. `:132`가 절을 덮음.
- Font evidence Live computed `:175` — 관측 기술. 읽기(reading)가 아니라 한정 없음이 맞다.
- Feature / Order / Tables C4 withhold — `:240` 절차 + `:244` 한정이 역할 판결을 덮음.
- B3 준수 주장 — `DESIGN.md` 153이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 588은 재진술).
- 2차 목적지 전수: homepage URL dest 6 (줄 9 복수 + 21; about/story는 접두) · `#E8552D` dest 13 · favicon slug dest 1 at 228 · Conflicts 582 · `pinkoi` DESIGN 0 / provenance 1 — 각 주장 문자열 DESIGN dest ≥ 1이거나 provenance-only로 정정됨. fitpet형 0회는 `tokens.source: prose-derived`의 다섯 줄 과대 주장뿐이었고 고쳤다.
- `tokens.colors.primary` dest 2 / `tokens.colors.surface` dest 2는 `primary-hover` / `surface-hover` 접두 일치. 로그 dest 1 at 86 / 90은 전용 경로 행으로 유지.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/ichef/DESIGN.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — iCHEF, 2012, Taipei, Sean Hsu, Mazendo, four other specialists, technology should help / turn enterprise-level…, iF Gold Award (2016), German Design Award grand prize (2017), Red Dot, 10,000, 科技用得更好，餐廳業績更好, We build the best restaurant POS…, 專人到店免費體驗, Free in-store demo, Learn more.
- **관측 기술** — `#E8552D` / `#e8552d` · PingFang TC / Microsoft JhengHei · unitless `1.15`/`1.20`/`1.25`/`1.30`/`1.50`/`1.40` · spacing 4/8/12/16/24/48/80 · rounded 4/8/12/`full: 9999` · shadow 세 쓰기 · `prose-derived` · WebFetch / browser redirect.
- **편집적 해석·인과 판단** — 표면 경계, 분위기 읽기, 서사≠토큰, 과제 선정, 청중 묶기, 특성·원칙·Do/Don't, 팔레트 슬롯, spacing/shape 경로 분리, elevation 읽기, 모션 재구성·커브 생략, 폰트 증거 class, no-substitution, type-role keep-both, favicon pointer, applicability, 근사 클래스 전파, state non-attachment, layout density, byte-exact, unresolved 목록.

세 번째 부류 중 31곳은 착수 시 인접 완전형이 있었고, 그중 1곳은 같은 절의 다른 판단을 이름하지 않아 범위를 닫았고, 1곳은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 32 | 1 | 2 |
| `not iCHEF-authored` | 32 | 2 | 2 |
| `separately published UI specification` | 32 | 2 | 2 |
| `tokens.source: prose-derived` | 1 | 2 | 3 |
| `logo.type: favicon` | 1 | 0 | 2 |
| `loading \| applicable` | 1 | 0 | 2 |
| `not in the token set` | 4 | 1 | 3 |
| `tokens.rounded.full: 9999` | 1 | 1 | 3 |

provenance `derived editorial` 1 · `not iCHEF-authored` 2는 헤더 인용이지 본문 한정이 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 3 / candidates 243. 발행 라틴·한자 카피 손 대조에서 `Free in-store demo` dest 5, `Learn more` dest 5, `We build the best restaurant POS in the world, and keep making it better.` dest 2, `technology should help, not handicap, entrepreneurship` dest 3, `iF Gold Award` dest 2, `Mazendo` dest 3, `Sean Hsu` dest 4, `專人到店免費體驗` dest 5, `科技用得更好，餐廳業績更好` dest 3. `German Design Award` 원본 5 / DESIGN 3, `Red Dot` 원본 7 / DESIGN 4 — 차이는 원본 footer·HTML 주석 반복이며 발행명은 본문에 있다. 발행 라틴 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 파일 없음. 값·h3/섹션 표제 분류 침투 0 (분모 없음).
- **D2a.** 식별자 `陳老闆`/`Boss Chen`/`Mei`/`Aaron` DESIGN 0 / provenance 0 / migration-log 0. 동기 `accurate end-of-day`/`laggy`/`cross-outlet`/`daily sales`/`part-time server`/`30-seat`/`multi-outlet` 3파일 0. 소속 분류 발명 0. Audience는 원본 그룹만. `front-of-house` DESIGN dest 1은 원본 §11 `kitchen and front-of-house move`(원본 해당 절 + 페르소나 표제에 각 1)이지 페르소나 승격이 아니다. `90%`는 provenance/log 삭제 처분 행의 mention-as-disposition(E2d 주석 있음). 고치지 않음.
- **E2d.** 부재 단언 행 전수: `90%` 행은 「this file에 없다」를 쓰지 않고 mention-as-disposition을 명시. `ds.type` 부재는 원본에 대한 단언이지 산출 3파일에 대한 단언이 아님. 자기부정 원장 0.

AUDIT_DONE fixes=14
