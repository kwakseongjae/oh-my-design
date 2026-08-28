# Genie Music 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/genie/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/genie/DESIGN.md`
검증 sibling: `web/references/genie/.verification.md` (`find web/references/genie -type f`로 존재 확인. dotfile이라 `ls`/`*` 글로브로는 안 보인다.)
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (및 이번 세션 추가 조건 D2a·E2d 검사)
감사 방식: 이관 워커 보고를 입력으로 쓰지 않음. 산출 3파일 + 원본 + sibling만 대조.
계수: 전부 `grep -o <패턴> <파일> | wc -l` 파일별. `grep -c` 미사용.
날짜: 2026-08-27

원본·토큰 값·컴포넌트 표·state applicability·절 구조는 읽기만 했다. DESIGN.md 501줄 불변(한정은 기존 줄에 붙임).

## 문장 분류 (B2a 스캔)

`DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실:** 지니뮤직 사명·KT 계열·태그라인 원문, 차트/내비/검색/행 액션 한국어 라벨, YAML·§2–§8·§14가 기록한 hex/px/ms/type/`use` 문자열.
- **관측 기술:** 단일 홈 캡처(`https://www.genie.co.kr`, 2026-06-09), `dotum` 12px 베이스, 스케일 표의 관측 절반, 컴포넌트 토큰 행, 브레이크포인트 표를 "declared behavior"로 표시한 증거-종류 문장, Governance 보일러플레이트.
- **편집적 해석·인과 판단:** 표면 경계, 주크박스/밀도/`#fa4065`=press 읽기, 포털 유산 대비, primary-tasks 승격, audience 제약, Distinctive 형용, Principles 7, Do/Don't 묶기와 이유, Semantic 역할 형용, Spacing 배급, Ring 범위, shadow philosophy, Motion 샘플 없는 계약, `dotum` 선택 이유, Type rules 읽기, artwork first-party 읽기, state-contract 읽기, Reason 셀, 레이아웃 밀도-first, voice/register, **License에서 `dotum`을 플랫폼 페이스로 취급**, **영문 gloss를 reader aid로 읽는 판단**.

세 번째 부류 중 인접 완전형 한정이 없던 자리는 아래 1–2. 나머지 21곳은 이미 `derived editorial implementation inference` + `not Genie Music-authored` + `separately published UI specification`을 같은 문장/바로 앞에 갖고 있었다. Genie는 1차 발행 디자인 시스템이 없으므로 toss형 예문 전제를 적용했다.

## 수정 목록 (8건)

### B2a — 인접 한정 누락 (본문 2건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:198` — Font evidence / License | "`dotum` is treated here as a platform-supplied Korean Gothic face, not a Genie brand asset." — 페이스의 증거 종류(플랫폼 공급 vs 브랜드 자산)를 편집적으로 닫는 문장인데 한정이 없었다. 바로 위 Official-distributed-asset 행("No Genie-distributed type asset is claimed here")은 문서 처분이라 그대로 뒀다. | 같은 셀에서 처리 문장을 완전형으로 바꿨다: "Treating `dotum` as a platform-supplied Korean Gothic face, not a Genie brand asset, is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification." 값·표 구조 불변. |
| 2 | `DESIGN.md:438` — Content / published strings | "the gloss is a reader aid and never replaces the label" — 원본이 붙인 영문 대역의 증거 종류를 닫는 판단인데, 절 한정(`:448` "Everything from here to the end")보다 **앞에** 있어 그 범위 밖이었다. 태그라인 원문과 영문 문자열은 바이트 그대로 남겼다. | 같은 줄에서 판단을 완전형으로 바꿨다: "Reading that gloss as a reader aid that never replaces the label is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification." |

수정 후 실측 (`grep -o … \| wc -l`, 파일별):

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | **23** (9, 11, 13, 19, 29, 33, 45, 57, 80, 108, 142, 162, 164, 168, 198, 204, 225, 230, 237, 256, 416, 438, 448) | 1 (원장 머리 — mention, not use) | 1 (§12 행 인용) |
| `not Genie Music-authored` | **23** (같은 23줄) | 0 | 1 |
| `separately published UI specification` | **23** (같은 23줄) | 0 | 1 |

수정 전 본문 21. 부분 한정 0.

### E1 — provenance derived 범위가 본문보다 좁았다 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Derived-inference ledger | 원장 18행 / 본문 완전형 21. 빠진 3: Foundations Semantic color (`:108`), Elevation Ring 범위 읽기(`:162`, philosophy와 한 행으로 뭉개짐), Typography Assets (`:230`). 감사에서 본문 2건을 더 붙이면 21→23이 되므로, 그대로 두면 원장이 더 좁아진다. 좁은 쪽도 FAIL (fastcampus·ferrari형). | 본문 23 한정과 1:1인 23행 표로 다시 썼다. 문서 순: Scope¶1–3, Primary tasks, Audience, Distinctive, Principles, Application, Avoid, Semantic, Spacing, Elevation Ring, Elevation philosophy, Motion, License, Family, Type rules, Assets, Surface state, Applicability, Layout, tagline gloss, voice/register. 머리말에 실측 23=23을 적었다. 이 표는 파일 끝이라 로그가 가리키는 provenance 1–124 줄번호는 안 움직인다. |

### E2 / D2a — 로그 행이 실제와 어긋남 (5건)

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | `migration-log.md` A5 스윕 표 + disposition 4–5 + "quotes six" 문장 | 삭제 처분 행이 §13 전기 문구를 다시 적었다(D2a). 그 두 문자열은 원본 페르소나 인용이지 발행 카피가 아니다. 로그가 "six of the seven non-survivors"를 인용한다고 썼으나 목록은 5항. | 두 전기 문구를 행에서 빼고 `fictional-persona prose` 2건·D2 삭제로만 적었다(D2a). 생존 문장을 "quotes three of the five"로 맞췄다. 실측 후 세 파일에서 해당 전기 문구 0. 이름·나이·도시(Seo-yeon / Min-jae / Hyun-woo / Ji-woo / Seoul 페르소나 행 / Busan / Daegu / Incheon)도 세 파일 0. |
| 5 | `migration-log.md` §3 행 | 목적지 `192–199`은 맞지만, License 읽기에 붙인 한정을 적지 않아 F2가 본문보다 약했다. | 198의 인접 완전형 한정을 그 행 목적지에 추가. |
| 6 | `migration-log.md` §10 행 | "qualifier at 448"만 적혀 있어 438 gloss 판단이 한정 없이 A5 표시만 있는 것처럼 읽혔다. 실측: 발행 원문+영문은 438에 있고, 판단은 이제 같은 줄 한정 아래다. | 438 한정을 2차 목적지로 명시. 448은 표·forbidden-register 범위로 남김. |
| 7 | `migration-log.md` Deviations 단어 수 | `6,161`은 본문 수정 전 `wc -w`. 수정 후 **6,202**. | `6,202`로 바꾸고 6,161은 pre-F3라고 적었다. |
| 8 | `migration-log.md` F2 꼬리 | 워커 F2는 B3만 준수 주장으로 적었고(본문 179에 다섯 종류+컴포넌트 게이트 전문 실재 — 유지), 본문 한정 수와 원장 1:1을 기록하지 않았다. | `Revision 2026-08-27 (F3)`를 덧붙여 23=23, D2a, §3/§10, 단어 수를 실측으로 적었다. 워커 F1 8건 목록은 이력으로 보존. |

## 수정하지 않은 것 (검토 후 위반 아님)

- **Motion `:179` "That condition is set by this document, not by Genie Music."** 하위 절은 이미 `:168` 완전형 아래. 중첩 한정은 1:1을 부풀린다.
- **Font evidence `:196` "No Genie-distributed type asset is claimed here."** 문서 처분. 소스 진술과 이미 분리됨.
- **Layout `:418` declared vs observed.** 증거 종류 표지. 브랜드 해석 아님.
- **Audience `:29` / omission `:97` / §13 로그 행.** "이름·나이·도시"는 무식별 범주(승인 형태). 식별자 0.
- **B3 준수 주장.** `DESIGN.md:179`에 transition properties · animation name · duration · easing · reduced-motion behavior + per-component 게이트 전문. `B3` 문자열은 본문 0 / 로그 3(mention).
- **2차 목적지 실측 (fitpet형 허위 없음).** `https://www.genie.co.kr` DESIGN **2** (9, 21); `https://company.genie.co.kr` DESIGN **3** (9, 199, 501); `#fa4065` DESIGN **16** (11×2, 35, 49, 61, 72, 112, 160, 210, 248, 249, 263, 342, 343, 381, 497); favicon slug DESIGN **1** (229); `rgba(0,0,0,0.12) 0px 4px 12px` DESIGN **3** (159, 183, 399). `live-extract` DESIGN **0** / provenance **1** — 로그가 본문 2차로 주장하지 않음.
- **값·표·구조.** `| applicable |` 40, `| not-applicable |` 9, `Type: button` 2 / `badge` 2 / `tab` 2 / `input` 1 / `listItem` 1 / `card` 1. `#fa4065` 16, `#fa406580` 1, unitless `1.30`/`1.71`/`2.08` 각 1. 원본 미수정.

## 범위 밖 관찰

- **A5a.** `--gate-only` `coverage.copy-loss compared 7 / candidates 144` (4.9%). `verdict: PASS`는 대조한 7개 바늘에 손실이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조: 태그라인 원문·영문 gloss `Genie: Music, and the flutter of excitement`(DESIGN 1, 원본 1), YAML `use` 9종, 한국어 라벨(종합/국내/국외, 듣기/담기/다운/검색, 차트/최신음악/라디오/매거진, 인기검색어/최근검색어/최근검색어 전체삭제, 검색 결과가 없습니다, 오류가 발생했습니다, 실시간 차트, 로그인·회원가입, 지니 : 음악, 그리고 설레임) 본문 생존. **눈에 띄는 라틴 발행 카피 손실 없음.** sibling 전용 `지니(genie) - 음악, 노래, 비디오`와 `로그인/회원가입`(슬래시형)은 provenance에만 있고 본문 0 — 미승격이 맞다.
- **B1 (보고만).** sibling 구조 분류의 본문 사실 승격 없음. 실측 DESIGN: `.gnb a` 0, 요소명으로서의 `h1` 0, `rgb(` 0, `line-height 18px` 0, `0px 18px 0px 5px` 0, `×6138` 0, `chip (link)` 0. 본문 `link` 4회는 Account/utility links·footer links(원본 §3/§5/§10)이지 sibling의 칩=`link` 분류가 아니다. 칩 Kind: interactive는 원본 §8 터치 타깃(25px / 12px)에서 온다고 본문 300이 적는다.
- **D2a 형제 4브랜드 (보고만, 미수정).** 감사 시점 파일: `gaudiy` 로그·Omission ledger는 `fictional personas 3인, §13, D2 삭제`(이름·나이·도시 0). `gaudiolab` 같은 무식별. `gitlab` §13 행도 무식별; 전기 인용 제거됨. `gangnamunni`는 이름 있는 페르소나 없음. 현재 4파일 삭제 행에서 D2a 식별자 재수록 없음.
- **E2d.** genie 부재 단언 전수: provenance 122는 `focus-visible`이 **원본**에 0회라고 적는다(분모=source). 실측 `web/references/genie/DESIGN.md` 0, sibling 0. 그 문장은 provenance에 있어 자기분모 거짓이 아니다. "세 파일 어디에도 없다" + 같은 행 열거 형태는 이 브랜드 0.
- **게이트.** `verdict: PASS`, `problems: []`. 의미 적합성의 증거가 아님.

Post-F3 DESIGN SHA-256 `2e8160852b88beff468bb4b275a64291be68b7eaa8cdda5e39d53b03df3503dd`.

AUDIT_DONE fixes=8
