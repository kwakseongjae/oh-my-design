# pchome 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/pchome/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/pchome/DESIGN.md`
검증 sibling: `web/references/pchome/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. 파일 존재.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not PChome-authored or a separately published UI specification`을 요구한다. 기존 33건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 33 / 원장 33. 숫자는 맞았으나 Semantic `:93`이 같은 절 `:106`의 link-deep = Hover/visited, not `focus-visible` 판단을 이름하지 않았다(인접 한정 공백). provenance Sibling pointer와 로그 footer/A5a는 sibling이 없다고 단언했으나 파일은 존재(E2·E2d). 로그 §13 삭제 행이 식별자를 열거(D2a). exact `tokens.spacing.section: 64` dest를 **2** at 126/128로 적었으나 실측 dest **1** at 128(E2).

문장 분류: 브랜드 발행 사실(사명·창립 연도·발행 카피·YAML 값·§표 수치) / 관측 기술(live hex·radius·duration 전사) / 편집적 해석·인과 판단(키 비병합, 분위기, 승격 게이트, 페르소나 삭제 읽기, Hover/visited ≠ focus-visible). 세 번째 부류만 수정 대상.

선행 게이트 정정(`22px` YAML `22` 병기)은 이미 트리에 있었고 이번 계수에 넣지 않는다.

## 수정 목록 (7건)

### B2a — 인접 한정 (본문 1건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:93` — Semantic color | `:106` 「Hover / visited writing … not a `focus-visible` treatment」는 세 번째 부류. 기존 한정은 hex 경로 비병합만. Navigation `:418`은 인접이 아니다. | 기존 완전형에 link-deep = Hover/visited, not `focus-visible` treatment를 접어 넣음. hex를 다시 쓰지 않음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33, `not PChome-authored` 33, `separately published UI specification` 33. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 58, 73, 93, 128, 141, 152, 180, 190, 205, 209, 230, 234, 235, 255, 268, 290, 312, 335, 358, 401, 418, 442, 489, 494, 509, 543.

`node scripts/check-limiter-ledger.mjs pchome` → 본문 33 / 원장 33 (147–179) 1:1 OK.

### E1 — provenance derived 범위 (1건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 33 유지.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | Semantic 행 | 역할·비병합만. 본문 `:93`이 이제 link-deep ≠ `focus-visible`도 이름한다. | 그 판단을 행에 추가. |

### E2 / E2a / E2d / D2a — 로그·원장 목적지 (5건)

본문이 아니라 원장·로그만 고침. 이중 목적지는 둘 다. 부재 단언은 자기 자신을 분모에 넣는다. 삭제 처분 행은 무식별.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Sibling pointer | `find web/references/pchome -type f` returns only `DESIGN.md`. 직접 경로 `find`는 `.verification.md`를 반환. 「No sibling-only value」는 거짓 부재 단언(E2d). | sibling 존재를 기록. 휴대 사실이 아니라고만 적음. sibling-only 값을 열거하지 않음. |
| 4 | migration-log YAML spacing 행 | exact `tokens.spacing.section: 64` DESIGN dest **2** at 126/128. 실측 dest **1** at 128. 표 경로 `tokens.spacing.section`(콜론 없음) dest **2** at 126/128. | exact dest **1** at 128. 표 경로 dest **2**를 분리 기재(E2a). |
| 5 | migration-log §2 footer 행 | Sibling file is named as a missing pointer. 파일 존재. | Dual: ledger. sibling 존재(direct-path `find`; dotfile). 휴대 사실로 승격하지 않음. |
| 6 | migration-log §13 행 | 삭제 처분 행이 식별자를 열거한 뒤 dest **0**을 주장(D2a 재수록 + E2d 자기부정). | 페르소나 4인(이름·나이·도시·동기·소속 분류 포함)만. 식별자 문자열을 행에 다시 쓰지 않음. Audience는 원본이 전기와 독립적으로 적은 집단 표현만. |
| 7 | migration-log A5a | sibling `.verification.md` is named … but is not on disk. 파일 존재. Gate compared/candidates를 「no sibling」로 적음. | sibling 존재·손 스윕 분모에 포함. Gate **7 / 152**. 발행 UI 카피 미생존 0(원본에 있는 바늘). |

본문 한정 확장 후 dest 재실측(wave 40 lablup): `https://www.pchome.com.tw` DESIGN dest **4** / P dest **4**. `#ea1717` DESIGN dest **27** / P dest **11**. `live-extract` DESIGN dest **3** / P dest **5**. `rgb(234,23,23)` DESIGN dest **4** / P dest **4**. `components_harvested` DESIGN dest **0** / P dest **3**. `22px` DESIGN dest **2** at 214/230 / P dest **1** at 164. `1998` DESIGN dest **2** / P dest **2**. `Jan Hung-tze` DESIGN dest **3** / P dest **2**. `詹宏志` / `網路家庭` 각 DESIGN dest **3** / P dest **2**. `These 8 items are a derived editorial implementation inference` DESIGN dest **1** at 45. B3 조각 `transition properties` / `animation name` / `reduced-motion behavior` / `A partial confirmation` 각 DESIGN dest **1** at 182. `not in the token set` DESIGN dest **5**. `focus-visible` DESIGN dest **13**(본문 확장 +1) / P dest **4**. 발행 카피 dest는 불변.

Destination SHA DESIGN `7c253f36775ae38f28a12cc164242e15544ecc58fbf89add9d2e15e1dd5d77d4`. 줄 수 DESIGN **545** 불변(한정 확장, 줄 추가 없음). provenance **179** 불변(행 텍스트만).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 33개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 182 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:45` dest 1. 준수 주장 유지.
- Kind: non-interactive 5건은 Capture record `:255`가 kind/applicability 판결을 이름함. 컴포넌트 블록마다 한정을 복제하지 않음.
- 곡선 값 세 개는 역할명만 남고 수치는 Omission ledger — T2 관례(웨이브 39 kkday). 되살리지 않음.
- 원본에 없는 모션 합성을 유도하는 자기 진술 없음. 생략이 모범(웨이브 39 kmong).
- `#ffffff`는 Card Surface와 On-Primary White로 귀속이 갈라지고, 원장 Byte-form notes가 두 키를 모두 이름함(웨이브 39 krafton). E1 범위는 이미 맞음.
- 충돌 처리: Soft CTA YAML `9999` / §4 `8px` / `tokens.rounded.full: 9999` keep-both. Tab YAML `fg` `#000000` / §4 active·inactive split keep-both. 문서 전체 keep-both. krds형 자리마다 다른 정책 없음.
- D2a 본문: 식별자·동기(commute / reading glasses / office supplies / ten laptops) dest **0**. 집단 라벨 `3C enthusiasts` 등은 원본 §13 머리의 독립 문구. Audience에 원본에 없는 소속 분류를 새로 만들지 않음.
- A1 키 경로: YAML `tokens.components` 6레코드의 type/bg/fg/radius/font/use/active를 **대응 블록 행**으로 대조. icook형 타 블록 hex 차용으로 가린 필드 소실 없음. 복원 없음.

### A1 — 키 경로 (복원 없음)

| id | 필드 | 대응 블록 행 |
|---|---|---|
| button-primary | type/bg/fg/radius/font/use | Primitive type `button` · Background `#ea1717` · Text `#ffffff` · Radius 4px · YAML font `weight 700` · Token-set use `Add to cart / Buy now` |
| button-soft | type/bg/fg/radius/use | Primitive type `button` · Background `#fe3b52` · Text `#ffffff` · YAML radius `9999` · Token-set use `Portal hero CTA / banner actions` |
| card | type/bg/radius/use | Primitive type `card` · Background `#ffffff` · Radius 8px · Token-set use `Dense product grid card, soft card shadow`. YAML에 fg/font 없음 — 발명 없음 |
| price-tag | type/fg/font/use | Primitive type `badge` · YAML `fg` `#ea1717` · Token-set font `18px weight 600` · Token-set use `Product price, strike-through #969696 for list price` |
| badge-promo | type/bg/fg/radius/use | Primitive type `badge` · Background `#ea1717` · Text `#ffffff` · Radius 4px · Token-set use `P幣 / 折扣 promo flags` |
| tab-bar | type/bg/fg/font/use/active | Primitive type `tab` · Background `#f2f2f2` · YAML `fg` `#000000` · YAML font `16px weight 400` · Token-set use `Category switcher` · YAML active `black active text` |

colors 17 / typography 7 roles + sans/display/fallback / spacing 8 / rounded 4 / shadow 3 — 각 표의 키 경로 열에 행으로 존재.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 加入購物車 / 立即購買 / 結帳 / 每天一起變更好 / 購物車是空的 / 找不到符合的商品 / 已售完 / 折扣 / 限時 / 24h到貨 / P幣回饋 / 網路家庭 / 詹宏志 / PChome 24h購物 / YAML `use` 13문자열 / §7·§12·§16 규칙.
- **관측 기술** — live hex 17키, unitless spacing/rounded, 8px cards, 93px tiles, 52px tabs, duration 0/150/250/400ms.
- **편집적 해석·인과 판단** — 위 33개 완전형이 가리키는 비병합·분위기·게이트·삭제 읽기. `:106` 판단은 `:93`에 접어 넣음.

## 범위 밖 관찰

- **A5a.** Gate `copy-loss` compared **7** / candidates **152**. `verdict: PASS`는 대조한 바늘 중 손실 0이지 카피 전수 보존이 아니다. 이관본 평균 4.4%와 같은 층. 손 스윕 발행 UI 카피(원본 바늘 26) 미생존 0. 직접 고치지 않음.
- **A5a latin gloss.** `Add to cart` SRC **3** / DES **2**. 빠진 1회는 §9 프롬프트 예문의 영어 괄호 gloss. 발행 중국어 `加入購物車` SRC **3** / DES **5**. 라틴 카피 손실로 보고만 함 — 본문 미복원.
- **B1.** sibling 전용 값·분류는 본문에 사실로 들어오지 않음. `h3` DES **0** / SRC **0** / SIB **2**. `#008ce0` DES **0**. `34.468px` DES **0**. `$490` DES **0**. `PChome 網路家庭國際資訊股份有限公司` DES **0** / SRC **0** / SIB **1**. `corp.pchome.com.tw` DES **0**. 값 grep 전량 0이고 구조 분류(`portal H2`형) 승격도 없음. 결함은 부재 단언(위에서 수정)이지 본문 승격이 아니다.
- **D2a 본문.** 동기·소속 분류의 재구성 없음. hubspot/gitlab형 Audience 신조어 없음.

AUDIT_DONE fixes=7
