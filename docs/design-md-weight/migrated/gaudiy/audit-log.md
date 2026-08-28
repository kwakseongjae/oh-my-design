# Gaudiy 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/gaudiy/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/gaudiy/DESIGN.md` · 검증 sibling: `web/references/gaudiy/.verification.md` (`find`로 존재 확인, dotfile)
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건 D2a·E2d는 원장 정확성)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본·sibling만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별), `grep -c` 미사용.
날짜: 2026-08-27

## 수정 목록 (10건)

### B2a — 인접 완전형 한정 누락·불완전 (본문 4건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:174` — Typography & Assets / Family | "The two scripts keep two fonts and do not swap roles. Do not substitute another family…" — 역할 고정·대체 금지·제네릭 fallback을 브랜드 디스플레이로 쓰지 말라는 **편집적 구현 규칙**인데, Type roles(다른 표제)의 한정만 있고 Family 인접에는 evidence class가 없었다. | 같은 문단 끝에 완전형 한정: "Keeping the scripts on separate faces, refusing a substitute family, and refusing to present the generic fallback as a brand display face are a derived editorial implementation inference from the verified surfaces; they are not Gaudiy-authored or a separately published UI specification." |
| 2 | `DESIGN.md:106` — Foundations / Semantic color | 역할명 독해에는 완전형 한정이 있었으나, 바로 다음 문단의 "Do not add one" / "retained as separate variants, not reconciled"는 같은 절의 편집 판단인데 한정이 그 판단까지 이름을 대지 않았다. | 기존 한정에 "together with the constraint that follows (do not add a saturated hue; retain the corporate/recruit split as two variants rather than reconciling them)"를 넣어 인접 범위를 닫았다. 새 자리는 아님(1자리 확장). |
| 3 | `DESIGN.md:193` — Typography & Assets / Assets | favicon을 브랜드 이미지로 올리지 않은 처분, "consistent with the flat system" 인과 — 둘 다 편집 판단. Image behavior 쪽 Breakpoints 한정은 다른 표제라 Assets 인접이 아니었다. | 목록 뒤에 완전형 한정 한 문장: "Declining to promote the third-party favicon pointer as a brand image, and reading the no-shadow imagery rule as consistent with the flat system, are a derived editorial implementation inference … not Gaudiy-authored or a separately published UI specification." |
| 4 | `DESIGN.md:444` — Governance / Recorded unresolved decisions | "intentional two-surface split" — 원본은 variance를 "not a conflict" / "retained as separate variants"로만 적는다. "intentional"은 편집적 인과. | 같은 문단 끝에 완전형 한정: "Reading that variance as an intentional two-surface split, rather than as a conflict to reconcile, is a derived editorial implementation inference … it is not Gaudiy-authored or a separately published UI specification." |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, `not Gaudiy-authored` 22, `separately published UI specification` 22 (수정 전 19/19/19).

### E1 — provenance derived 범위가 실제보다 좁았다 (1건) + 1440px 목적지 서술 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `provenance.md` Derived editorial inventory | 원장 19행 / 본문 한정 19. F3가 본문에 3자리를 신설하면 원장이 다시 좁아진다(fastcampus형). | 본문 실측 22에 맞춰 Family·Assets·Governance 3행을 넣고 Semantic color 행에 constraint를 적었다. 헤더를 **22 qualifier sites across 21 headings**로 바꾸고 파일별 `grep -o` 22/22/22를 같이 박았다. |
| 6 | `provenance.md` Sibling-only 표 — grey band `1440×4474px` | "the 1440px width appears in the portable body only through the legacy's own Desktop breakpoint range (1024-1440px)" — 거짓. 실측 `1440px` DESIGN **2** (`1024-1440px` 1 + `measures 1440px` 1). `measures 1440px`는 레거시 본문 0 / sibling `1440×4474px` 1. | 이중 목적지(E2a)로 고쳤다: sibling raw sample + portable Breakpoints 측정 주장. 레거시가 가진 것은 `~4474px`와 `1024-1440px`뿐이라고 실측대로 적었다. 본문 값은 지우지 않음(B1은 보고만). |

### D2a · E2d — 삭제 처분 행이 식별자를 재수록하고 부재를 자기분모로 단언 (2건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | `provenance.md` Omission ledger 페르소나 행 | Item 칸에 이름 3인을 삭제 식별자로 다시 적고, 같은 행이 "Ages, cities, and biographies are carried in neither file"을 단언했다. 이름 재수록은 D2a. | 「fictional personas 3인, §13, D2 삭제」로 무식별화. 이름·나이·도시·전기를 이 원장에 다시 쓰지 않는다고만 적었다. |
| 8 | `migration-log.md` §13 행 | 이름·나이·도시를 열거한 뒤 본문 0회·전기 문구 세 파일 0회를 단언했다. 그 행이 그 문자열을 담고 있으므로 부재 단언은 거짓(E2d). | 같은 무식별 표기. 재수록하지 않는다는 처분만 남겼다. 부재 단언을 그 문자열로 증명하지 않는다. |

수정 후 실측(파일별 `grep -oF`): 세 이름·전기 문구 3종 · `東京` · `大阪` = DESIGN 0 / provenance 0 / migration-log 0. (`Tokyo` DESIGN 2 · provenance 1은 회사 소재 서술이며 페르소나 도시가 아니다.)

### E2 — 로그 목적지가 실측과 어긋남 (2건)

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | `migration-log.md` Sibling 행 | disposition이 `분리 → provenance` 단일. sibling 전용 `80px`·`100px`·`136px`·`30px`는 DESIGN 각 **0**으로 맞고, `1440px` 밴드 폭은 DESIGN **1**(`measures 1440px`)인데 2차 목적지가 없었다(fitpet형). | disposition에 portable Breakpoints를 두 번째 목적지로 적고, `measures 1440px` DESIGN 1 / 레거시 본문 0 / sibling `1440×4474px` 1을 파일별로 박았다. |
| 10 | `migration-log.md` F1·F2 수치 | F1이 완전형 한정 **19자리 / 18개 표제**, 원장 19행. F3 후 본문 22와 불일치. | F1을 22/21·원장 22행으로 맞추고, F2 이중 목적지 목록에 sibling `1440px`를, 준수 주장에 B2a 22/22를 넣었다. |

## 수정하지 않은 것 (검토 후 위반 아님으로 판단)

- **Scope 첫 문단의 표면 경계·증거 등급 포인터, Font evidence Record scope, Motion philosophy-layer, Content "Japanese is the published string".** 해석이 아니라 증거-class 진술. provenance가 별도로 열거한다.
- **Touch targets / Collapsing / Image behavior.** Breakpoints 한정이 세 하위절을 이름으로 덮는다.
- **Type roles의 never-swap 한정.** Family와 같은 독해이나 표제가 다르므로 Family에 별도 한정을 둔 것이지 Type roles 한정을 지우지 않았다.
- **상태 applicability Reason 열.** 수정 금지.
- **값·표·구조 일절 무수정.** hex / primitive type / applicability 맵 / 절 구조 불변. 원본 `web/references/gaudiy/DESIGN.md` 읽기만.

## E2 행 전수 대조 (로그를 고친 행 외 — 실측이 로그와 일치)

- YAML identity / freshness / `tokens.source: live-extract`: DESIGN `live-extract` **0**, provenance **1**. 단일 목적지 맞음(허위 2차 없음).
- YAML logo URL: DESIGN `google.com/s2` **0**, Assets에 third-party 판단 **1**, provenance URL **2**. 이중 목적지 맞음.
- B3 다섯 종류 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior`: DESIGN **2**, provenance **0**. 로그 2회 주장 맞음. `공식 출처로 검증될 때까지` DESIGN **0**.
- `1.40` DESIGN **4**, `1.50` DESIGN **3**. `Primitive type: \`button\`` **3**, `\`card\`` 선언 **3**, `\`tab\`` **1**.
- §9 삭제 문자열 `Quick Color Reference` / `Example Component Prompt` / `Iteration Guide` / `omd-apply` / `npx omd`: DESIGN 각 **0**.
- cubic-bezier 3값: DESIGN 각 **0**, provenance 각 **1**.
- H1 `Gaudiy Design System` DESIGN **1**. `Use the solid black inversion CTA sparingly` DESIGN **1**.
- `~4474px` DESIGN **1**. `エラーが発生しました` DESIGN **1**. `必須` DESIGN **1** (원본도 `必須`; 한글 `필수`는 세 파일 0).

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 coverage는 `compared 18 / candidates 152` (11.8%). `verdict: PASS`는 대조한 바늘의 비손실이지 카피 전량 보존이 아니다. 발행 카피 손 대조(원본·sibling이 측정 대상으로 명기한 라벨·슬로건): `With fans, advance the era.` DESIGN 3, `creating a nation of fans` 3, `Tech Blog` 4, `Gaudiy AI Lab` 3, `Member note` 4, `CEO'S note` 4, `PdM` 3, `Gaudiy Fanlink` 4, `Yuya Ishikawa` 1, `Shochiku` 1, `Toei Animation` 1, `Toho` 1, sibling 전용 `Corporate IT`는 provenance에 바이트 보존. **눈에 띄는 라틴 카피 손실 없음.** `必須`는 원본 §14가 거부하는 예시로 인용한 문자열이지 브랜드 발행 CTA가 아니다(A5 바늘 여부 판단은 이 감사 범위 밖, 값 미수정).
- **B1.** sibling-only **값** `80px` / `100px` / `136px` / `30px`는 DESIGN 각 0. sibling-only **분류** `h2` / `h3` / `Section heading`는 DESIGN 각 0. **예외(값):** sibling `1440×4474px`의 폭이 본문 Breakpoints에 "the grey band measures 1440px across"로 사실 주장되어 있다. 레거시는 `~4474px`와 `1024-1440px`만. finda형(분류 승격)은 아니고, sibling 측정폭의 본문 사실화다. 본문은 고치지 않았고 원장만 실측 기록(#6·#9).
- **D2a 형제 4브랜드 (삭제 처분 행만, 미수정).** `gaudiolab` 로그 §13 행이 페르소나 3인의 이름·나이·도시를 삭제 식별자로 유지(D2a). `gitlab` 로그 §13 행이 이름·도시를 열거한 뒤 산출 3파일 0회를 단언(D2a+E2d; 그 행이 분모에 들어간다). `genie` §13 행·provenance Omission은 무식별. `gangnamunni`는 원본에 가상 페르소나 없음·이름 재수록 없음.
- **E2d 이 브랜드.** 고친 두 행 외에 「세 파일 어디에도 / neither file / appear here once」 잔존 0.

AUDIT_DONE fixes=10
