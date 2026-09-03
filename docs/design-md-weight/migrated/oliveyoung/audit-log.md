# Olive Young 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/oliveyoung/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/oliveyoung/DESIGN.md`
검증 sibling: `web/references/oliveyoung/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Olive Young-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 양쪽이 함께 좁았다. Semantic `:89` 고립 값 비승격, Assets `:161` 카탈로그 사진 대체 거부, Capture `:174` generic Focus≠`focus-visible`·치수≠적합성 감사, Wishlist `:244` 미캡처 아이콘 생략, Outline `:295` 전경 토큰 비주장, Skip `:320` 기업 접근성 크롬 분류, Layout `:339` 미해상 도메인을 기업 마케팅으로 채우지 않기는 세 번째 부류인데 인접 완전형이 없거나 그 읽기를 이름하지 않았다.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 7건, 발생 수 +5)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:89` — Semantic color 고립 값 | 고립 blues/reds를 semantic palette로 올리지 않기는 세 번째 부류. `:79`는 표 앞 페어링·비병합만 이름하고 표 뒤 문장과는 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:161` — Assets 카탈로그 콘텐츠 | 1차 카탈로그 사진을 발명 브랜드색 장식으로 바꾸지 않기는 세 번째 부류. `:159`는 favicon URL만. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:174` — Capture record | generic Focus≠`focus-visible` treatment, 기록된 치수·대비 조합≠적합성 감사는 세 번째 부류. 기존 한정은 kind/applicability/`not in the token set`/비완결만. | 기존 완전형에 두 읽기를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:244` — Wishlist 아이콘 | 미캡처 active/selected 아이콘을 생략하는 처분은 세 번째 부류. `:174`는 70줄 위라 인접하지 않다. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:295` — Outline 전경 | 그 샘플에서 전경·재사용 버튼색 토큰을 주장하지 않기는 세 번째 부류. 해당 블록에 한정 없음. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:320` — Skip chrome | 기업 접근성 크롬이지 스토어프론트 증거·일반 primary-action 토큰이 아니라는 분류는 세 번째 부류. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:339` — Layout 미해상 도메인 | authenticated-product / documentation / mobile을 기업 마케팅·레거시로 채우지 않기는 세 번째 부류. 기존 한정은 캡처 크기·빈도 목록·24px/40px만. | 기존 완전형에 그 읽기를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 29, `not Olive Young-authored` 29, `separately published UI specification` 29. 완전형 29. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 52, 60, 64, 71, 79, 89, 98, 108, 112, 116, 124, 143, 155, 159, 161, 174, 244, 295, 320, 339, 357, 391.

### E1 — provenance derived 범위 (9건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 같은 hex의 역할 분리도 원장에 없으면 E1.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | 헤더 / 행 수 | 24 complete / 24 data rows. | **29** / **29**. |
| 9 | Semantic `:89` 행 | 없음. 본문 `:89` 신설. | 행 신설. |
| 10 | Assets `:161` 행 | 없음. 본문 `:161` 신설. | 행 신설. |
| 11 | Capture record 행 | Kind/applicability / `not in the token set` / 비완결만. 본문 `:174`이 이제 generic Focus≠`focus-visible`·치수≠감사도 이름한다. | 그 판단을 행에 추가. |
| 12 | Wishlist `:244` 행 | 없음. 본문 `:244` 신설. | 행 신설. |
| 13 | Outline `:295` 행 | 없음. 본문 `:295` 신설. | 행 신설. |
| 14 | Skip `:320` 행 | 없음. 본문 `:320` 신설. | 행 신설. |
| 15 | Layout 행 | 캡처 크기·빈도·24px/40px만. 본문 `:339`이 이제 미해상 도메인 비충전도 이름한다. | 그 판단을 행에 추가. |
| 16 | Proof notes same-hex | `#ffffff` canvas vs wishlist `#FFFFFF` 케이싱만. 실제는 canvas `#ffffff` / YAML `pagination-current.fg` `#ffffff`(text) / wishlist Background `#FFFFFF` / skip-link Text `#FFFFFF`. | 역할 분리를 원장에 실측대로 적음. |

헤더 / 데이터 행 **24 → 29** at 178–206 (E1 1:1).

### E2 / E2a — 로그 목적지 (6건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 한정 추가 뒤 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | YAML `pagination-current.type: tab` | Exact `tokens.components.pagination-current.type: tab` DESIGN dest **2** / P dest **2**. 실측 dest **1** / P dest **1** (경로만 있는 출현을 `: tab` 문자열로 합산). | dest **1** / P dest **1**. |
| 18 | Coral Orange | §2 `Coral Orange` dest **3**. 실측 이름 dest **4** (`:79` 한정 + `:87` 두 번 + Named gaps). hex `#ff7878` dest **3** / P dest **2**는 맞음. | 이름 dest **4** / P dest **2**. hex와 이름을 분리. |
| 19 | §8 keyboard / `focus-visible styling` / screen-reader | dest **1**. 실측 DESIGN dest **2** (Capture record `:172` + Named gaps `:400`). 2차 목적지 누락(fitpet형). | dest **2**, Capture record + Named gaps (E2a). |
| 20 | F1 / inventory 행 수 | 24 complete · 24 data rows. | **29** · inventory **29**. |
| 21 | `isolated browser/vendor-like blues` | DESIGN dest **1**만. 원장 `:89` 행 추가 후 P dest **1**. | dest **1** / P dest **1** (E2a). |
| 22 | `corporate accessibility chrome` | DESIGN dest **1**만. 원장 `:320` 행 추가 후 P dest **1**. | dest **1** / P dest **1** (E2a). |

A1 키 경로: 원본 YAML `tokens.components.pagination-current`의 type/bg/fg/radius/font/active/use가 Current item 블록에 **행으로** 있다. 값만 다른 블록에 있는 icook형은 없음. 복원 없음.

E2c: Foundations Motion은 B3 다섯 종류 승격 게이트를 주장하지 않는다. 로그의 비주장과 본문이 일치. 유지.

E2d: 부재 단언 행 전수 검사. 삭제 처분 행이 드롭 문자열을 재수록한 채 「이 파일에 없다」고 단언하지 않음. sibling 전용 값의 dest 0은 DESIGN을 분모로 적었고, 그 문자열이 있는 로그/원장을 「세 파일 0」으로 읽지 않음.

D2a 삭제 처분 행: 이름·나이·도시는 원본에도 없었고 처분 행에도 없다. 본문에서 동기(`inspire and empower`)·소속 분류(`Brand and business partners`) dest 0 / sidecar 0.

## 범위 밖 관찰

- **A1 / 발명 문장.** `Product photography and brand imagery` — 원본 0 / sibling 0 / 산출 1. B2a 한정을 붙였으나 문장 자체는 토큰·표·구조가 아니라서 삭제하지 않음. 원본에 없는 규칙이다.
- **A5a.** 게이트 `compared`/`candidates`가 세 파일에 없다. 손 바늘 14종은 산출 `DESIGN.md`에 생존. 다만 원본 §15 경계문 `official mission, Healthy Beauty, New Discoveries Everyday, and ALL LIVE BETTER language`는 단위로 안 옮겨졌다. `Healthy Beauty` SRC 4 / DES 3, `New Discoveries Everyday` SRC 4 / DES 3, `ALL LIVE BETTER` SRC 2 / DES 1. 발행 문자열 자체는 Content·Principles 샘플로 남아 있어 바이트 소실은 아니다. 라틴 카피 손실로 복원하지 않음.
- **D2a / copy-loss 경계.** 처분 행이 원형 라벨(`Beauty & Health customers` / `Local-store and online shoppers` / `Brand and business partners`)을 이름하지 않는다. 식별자 재수록은 아니다. 게이트가 라벨 명명을 요구하면 로그 쪽 기록 공백이다 — 라벨을 처분 행에 넣지 않음(D2a 식별자 예시 금지와 충돌하지 않게).
- **B1 sibling 승격.** sibling 전용 값(`21.6px`, `score: 73`, `#82DC28`, `48px × 48px`, `ONLYONE_KR`, `swiper-icons`, `cjnews.cj.net`) DESIGN dest 0. `product-surface`는 산출 HTML claim 마커이며 원본 YAML `kind`에도 있다. `portal H2`형 구조 분류 승격 없음.
- **A1 열/귀속.** pagination-current 토큰명·YAML 경로가 대응 블록에 남아 있다. krds형 토큰명 열 삭제는 없음.

AUDIT_DONE fixes=22
