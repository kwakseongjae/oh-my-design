# Panasonic 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/panasonic/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/panasonic/DESIGN.md`
검증 sibling: `web/references/panasonic/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. `SIBLING_EXISTS`.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches`/`No such file`은 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 UI 사양 없음(`ds.type` 원본 필드 없음, 패킷에 public component specification 없음). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Panasonic-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 24 / 원장 데이터 행 24. 숫자는 맞았으나 두 한정은 읽기를 덜 이름했고(좁은 쪽, lablup `:93`형), 로그 dest는 본문 실측과 달랐다.

## 문장 분류 (절차 1)

`DESIGN.md` 전 문장을 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 분류했다. 세 번째 부류 24곳이 이미 인접 완전형을 갖고 있었다. 완전형이 아예 없는 문장은 없었다. 불완전했던 두 곳만 접어 넣었다.

세 번째 부류 위치(착수=수정 후 줄, 발생 수 24 유지): 9, 11, 13, 19, 28, 32, 42, 55, 63, 75, 85, 91, 95, 101, 118, 126, 135, 144, 166, 181, 209, 230, 247, 281.

그 밖의 본문은 브랜드 발행 사실(1918 / Future Craft / GREEN IMPACT / CCO 문장 / integrity / fairness and honesty), 관측 기술(hex·Noto Sans 로드·0px/2px·컴포넌트 기하), 원본 표·Do/Don't·§14 가이던스 원문, 또는 Core Governance 템플릿이다. 원본 분위기 수식(quiet, document-like 등)은 원본 §1의 재구성이므로 세 번째 부류로 보고 이미 `:11` 한정이 덮고 있었다.

## 수정 목록 (15건)

### B2a — 인접 한정 (본문 2건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | 분위기 수식은 세 번째 부류. 기존 한정은 quiet/document-like · charcoal · small regular-weight · restrained blue만. 같은 콜론 목록의 pale-gray canvas는 이름하지 않음. | 기존 완전형에 `of pale-gray canvas`를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:75` — Semantic color | 역할 페어링·link/`primary_color` 비병합·foreground≠navigation≠muted·canvas 귀속은 이름함. 같은 hex의 다른 키(`#1a1a1a` Foreground ≠ search-toggle `fg`, `#4d4d4d` Navigation ≠ header-nav `fg`)는 본문이 이미 두 블록에 두고도 한정이 말하지 않음(krafton·lablup 불완전 한정). | 기존 완전형에 두 비병합을 접어 넣음. 발생 수 +0. 토큰 값·표·applicability는 그대로. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not Panasonic-authored` 24, `separately published UI specification` 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | Scope ¶2 행 `:11` | 분위 네 항. 본문 `:11`이 이제 pale-gray canvas도 이름한다. | 그 판단을 행에 추가. |
| 4 | Semantic 행 `:75` | 역할·다른-hex 비병합만. 본문 `:75`이 이제 같은-hex 이중 역할 비병합도 이름한다. | 그 판단을 행에 추가. |
| 5 | Proof notes | `#1a1a1a`/`#4d4d4d`의 표면별 역할 분리가 원장에 없음(웨이브 39 krafton — 분리가 없으면 E1). | Proof note 한 줄로 실제 키 경로 분리를 기록. inventory `:75`과 1:1. |

헤더 / 데이터 행 **24 / 24** 유지 (`provenance.md` 156–179). 본문 한정 수와 행 수는 착수와 같다. 내용이 좁았던 두 행을 본문에 맞췄다.

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다. 본문 한정 접힘 뒤 hex 출현이 바뀌므로 dest 표를 재실측했다(웨이브 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | YAML `tokens.colors` | `#1a1a1a` dest **6**, `#4d4d4d` dest **6**. 한정 접힘 후 dest **8** / **8**. 키 경로 `tokens.colors.foreground`/`navigation` dest **3**. | dest 8 / 8, foreground·navigation dest 3, muted/link dest 2. |
| 7 | YAML typography | `24px` dest **1**, `22.5px` dest **1**. 실측 표 행 + YAML 경로 문장 dest **2** each. | dest **2** / **2**. |
| 8 | YAML spacing + §5 | `4px, 12px, 20px, and 26px` dest **1**, `The 26px value is specifically the observed right margin` dest **1**. 실측 dest **2** (Spacing `:85` + Layout `:224`). 처분 칸은 이미 `(+ Layout)`인데 계수가 1. | dest **2** each, 이중 목적지 명시. |
| 9 | §4 footer Surface split | `no native product UI is inferred`를 provenance 이중 목적지(E2a)로 적음. 실측 DESIGN dest **1** / P dest **0**. 원장 `:156`은 읽기 색인이지 전문이 아님(fitpet형 2차 목적지 허위). | DESIGN dest 1. P 전문 dest 0. |
| 10 | §7 Don't | `zero-interaction packet` dest **1**. 실측 dest **2** (Avoid `:66` + Named gaps `:285`). | dest **2**, 이중 목적지. |
| 11 | §11 Brand Narrative | Group CCO 문장 dest **1**만. 실측 DESIGN dest **1** / P dest **1**. `Future Craft` dest 미기재, 실측 DESIGN dest **7** / P dest **2**. | 둘 다 적음. |
| 12 | §13 Personas | `lasting customer connections` DESIGN dest **1**. 실측 dest **2** (Scope `:13` + Audience `:28`). | dest **2**, 이중 목적지. |
| 13 | Sibling raw | Noto Sands use count `10`은 sibling에만. 실측 `visible first-family use count 10` DESIGN dest **0** / P dest **1**. | DESIGN 0 / P 1 (원장 Sibling file). |
| 14 | A4 준수 행 | `#1a1a1a` 이중 역할만 적고 dest는 구 계수. 접힘 후 dest 8. `#4d4d4d` 이중 역할은 누락. | 두 hex 비병합 + dest 8/8. |
| 15 | F2 자가 대조 | dest 숫자가 착수 `grep -oF`라고 적혀 있으나 7·8·9·10·12·13이 불일치. | F3 재실측 후로 고치고 고친 dest를 나열. |

E2c: B3 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior have been observed` DESIGN dest **1** (`:101`). 준수 행 유지.

수정 후 본문 한정 수: 24. 원장 행: 24.

## 범위 밖 관찰

### A1 키 경로
원본 YAML `tokens.components.header-navigation-item` 7필드(`type`/`fg`/`radius`/`margin`/`size`/`font`/`use`)와 `search-toggle` 10필드(`type`/`bg`/`fg`/`border`/`radius`/`padding`/`size`/`font`/`states`/`use`)는 각각 Header Navigation Item / Search Toggle 블록에 **행으로** 있다. icook형(값은 다른 블록, 키 경로는 소실) 없음. 복원하지 않음.

### A5a
게이트 `--gate-only` 산출 파일은 panasonic 이관 디렉터리에 없다(`find` 3파일만). 로그 분모는 발행 바늘 9 / 미생존 0. 손 대조 9바늘(`パナソニック` · `Future Craft` · `Panasonic GREEN IMPACT` · `Konosuke Matsushita` · `Matsushita Electric Housewares Manufacturing Works` · `creating with care, consideration, and attention to future generations` · `integrity` · `fairness and honesty` · `seeking truth, and transforming the future`)은 산출 DESIGN dest ≥1. 라틴 발행 카피 손실로 보이는 것은 아래 Those→These뿐이며 브랜드 CTA가 아니다. 고치지 않음.

원본 §1 닫힘 `Those are verified corporate and design narratives, not evidence that…`가 산출 `:13`에서 `These are…`로 바뀌었다. 원본 설명문이지 발행 카피가 아니므로 A5 바늘이 아니다. 보고만.

원본 §1 머리 `Panasonic is a Japan-founded`가 산출 `:9`에서 `パナソニック (Panasonic) is a Japan-founded`로 카탈로그 `name`을 접두했다. 고치지 않음.

### B1 sibling 전용
sibling-only 문자열 DESIGN dest 0: `12.992` / `19.488px` / `122px x 40px` / `12px 30px` / `rgb(204, 204, 204)` / `ambient solutions` / `Basic Management Objective` / `Seven Principles` / `anticipatory-behavior` / `row/link-list pattern` / `not button semantics` / `40 component variants` / `coverage 71`. 구조 분류(`portal H2`형) 본문 승격 없음. kyobobook형 아님.

### D2a / 페르소나
원본 §13 역할 라벨 `Household or individual` / `Business customer or partner` / `Society-facing` DESIGN dest 0 / P dest 0. 동기 문구(`People looking for products and services` · `Organizations need to understand Panasonic` · `Employees, customers, business partners, shareholders` · `generic green styling`) DESIGN dest 0 / P dest 0. 소속 재구성(hubspot `Solutions Partner agencies`형) 없음. 로그 삭제 행은 역할 라벨만 적고 이름·나이·도시·전기는 없음(원본에도 식별자 없음). 라벨을 지운 D2a 오탐 없음.

### E2d
부재 단언 행 전수: provenance Omission은 「세 파일 어디에도 없다」고 같은 행에 드롭 문자열을 재수록하지 않음. Sibling file의 count 10은 source DESIGN.md가 그 계수를 안 적었다고 하지, provenance 자기 부재를 단언하지 않음. 로그 dest 0 행은 DESIGN/P만 분모로 두고 로그 자신을 「세 파일」에 넣지 않음. furiosaai형 아님.

### 같은 hex 이중 역할 (웨이브 39)
`#1a1a1a`는 Semantic Foreground이자 Search Toggle Text. `#4d4d4d`는 Navigation이자 Header Navigation Item Text. `#0041c0`는 link이자 catalog `primary_color`. 값 합치기는 하지 않음(A4). 분리는 본문 한정 `:75`과 provenance Proof / inventory에 맞춤(E1, 위 2·4·5).

### D1a Named gaps
Named gaps 목록의 `native-product palette` 등은 원본 §2가 이미 「they do not establish」로 이름한 생략이지, 원본 0회 도메인을 새로 세운 목록이 아니다. 고치지 않음.

### 모션
원본 §15에 duration/easing 값이 없다. 산출 Motion의 no-token 문장은 원문이고, B3 게이트는 `:101` 한정 옆에 있다. 합성하지 않은 것은 모범(웨이브 39 kmong). 값 되살리지 않음.

AUDIT_DONE fixes=15
