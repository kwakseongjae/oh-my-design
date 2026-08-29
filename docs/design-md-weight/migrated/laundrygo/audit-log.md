# LaundryGo 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/laundrygo/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/laundrygo/DESIGN.md`
검증 sibling: `web/references/laundrygo/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not LaundryGo-authored or a separately published UI specification`을 요구한다. 착수 시 기존 13건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 13 / 원장 13. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic / Spacing / Shape / Font evidence / Family / Type roles / Assets / State record / Responsive에 편집적 해석이 있고 인접 완전형이 없었다. YAML `use:` 16개 중 13개가 산출 DESIGN.md에 없었다(착지 3/16).

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 13건: 확장 4 + 신설 9)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:13` — Experience Scope | 부착(두 페이지에 값 고정)·서사 분리는 세 번째 부류. 기존 한정은 calm/infrastructure/trust/logistics만. | 기존 완전형에 부착·서사 분리를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:34` — Audience | 페르소나 삭제·세그먼트 목록 부재는 세 번째 부류. 기존 한정은 세 그룹 읽기만. | 기존 완전형에 drop·no demographic list를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:90` — Semantic color | canvas/on-primary 공유 흰값, Ink 이중 행, Hairline≠muted fill, primary green≠eyebrow, 역할명 명명은 세 번째 부류. 한정이 없었다. | 완전형 신설. hex를 반복하지 않음(역할명으로). |
| 4 | `DESIGN.md:130` — Spacing | 단위 없는 YAML 스케일 vs 원본 캡처 px, spacing step≠padding/type size는 세 번째 부류. | 기존 스케일 문장에 완전형을 붙임. |
| 5 | `DESIGN.md:139` — Shape | “local defaults, not every surface”는 세 번째 부류였고 class가 닫히지 않았다. | 같은 줄에 완전형으로 닫음. |
| 6 | `DESIGN.md:154` — Motion | 커브 3개 생략은 세 번째 부류. 기존 한정은 duration·역할·rules·signature만. | 기존 완전형에 커브 생략을 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:186` — Font evidence | 여섯 class 해상도는 세 번째 부류. 한정이 없었다. | 완전형 신설(product-use history / live Pretendard / no FontFace / specimen+G-arrow outside). |
| 8 | `DESIGN.md:202` — Family | “canonical because computed use” / 대체 거부는 세 번째 부류. | 기존 금지 문장에 완전형을 붙임. |
| 9 | `DESIGN.md:206` — Type roles | 단위 없는 비율 병기·YAML `use` 병기는 세 번째 부류. | 완전형 신설. |
| 10 | `DESIGN.md:234` — Assets | G-arrow를 서사 자산으로 읽는 것과 사진 대체 거부는 세 번째 부류. | 기존 증거-등급 문장에 완전형을 붙임. |
| 11 | `DESIGN.md:241` — How to read | YAML `use` Token-set use 병기·YAML font/padding 병기는 세 번째 부류. 기존 한정은 kind/applicability만. | 기존 완전형에 두 읽기를 접어 넣음. 발생 수 +0. |
| 12 | `DESIGN.md:396` — State record | §14를 시스템 진술로 두는 것은 세 번째 부류. 한정이 불완전했다. | 기존 문장에 완전형을 붙임. |
| 13 | `DESIGN.md:423` — Responsive | “layout contract, not live cross-viewport”는 세 번째 부류. class가 닫히지 않았다. | 같은 절에 완전형으로 닫음. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, `not LaundryGo-authored` 22, `separately published UI specification` 22. 완전형 정규식 22. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 13, 25, 34, 38, 51, 61, 74, 90, 130, 139, 150, 154, 186, 202, 206, 223, 234, 241, 396, 419, 423, 438.

`node scripts/check-limiter-ledger.mjs laundrygo` → 본문 22 / 원장 22 (184–205) 1:1 OK.

### A1 — YAML `use` · 키 경로 병기 (3건)

문자열 grep 「값이 어딘가에 있다」로 대체하지 않음. 대응 블록에 **행으로**. 표 쪽 표기가 있으면 둘 다(항목 11). 표기 정책은 문서 전체에서 같다: 쓰임이 다를 때만 병기, 동일하면 한 번.

| # | 위치 | 무엇이 빠졌나 | 무엇을 붙였나 |
|---|---|---|---|
| 14 | Type roles Notes | YAML `use` 9개 중 3개만 표 Notes와 바이트 일치(`Service/card titles` · `Top-level nav item` · `Primary CTA label`). 나머지 6개는 표 짧은/다른 쪽만. | 다른 쪽 6행에 `YAML use: "..."` 병기. 일치 3행은 그대로(충돌 없음). |
| 15 | §4 7 YAML 레코드 | YAML `use` 7개가 대응 블록에 행으로 없었다. Role은 §4 의역. | 각 블록에 `Token-set use:` 행. Inquiry Form Field·Beige Surface는 YAML `use` 없음 — 만들지 않음. |
| 16 | Primary padding / 6 font / Nav active | 키는 행으로 있었으나 YAML 바이트가 없었다. `0 40px` DESIGN dest 0. `17px / 700 Pretendard` dest 0. `green #0ac290 text on active` dest 0. | §4 표기 옆에 YAML 바이트 병기. 토큰 값·applicability 표 미수정. |

`node scripts/check-yaml-use-landing.mjs laundrygo` → **16/16 OK**.

A1 키 경로(값 행): `button-primary` type/bg/fg/radius/padding/font/height/use · `button-emphasis` type/bg/fg/radius/font/height/shadow/use · `button-muted` type/bg/fg/radius/padding/font/height/use · `nav-link` type/fg/font/use/active · `eyebrow-badge` type/fg/font/use · `service-card` type/bg/fg/radius/use · `stat-block` type/fg/font/use. icook형 타 블록 hex 차용으로 가린 필드 소실 없음. YAML에 없는 bg를 nav/eyebrow에 발명하지 않음(§4 Navigation 배경은 본문 값).

### E1 — provenance derived 범위 (1건)

좁은 쪽 FAIL(fastcampus형). 본문 13=원장 13이었으나 본문이 이름하지 않은 해석이 남아 있었다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | Derived editorial inventory | 13행. 본문이 22가 되면서 1:1이 깨짐. Semantic `#ffffff` canvas/on-primary 분리가 원장에 없었다(krafton형). | 표 22데이터행(184–205). 기존 4행 텍스트를 본문 확장에 맞춤. 신설 9행. `#ffffff` 역할 분리를 Semantic 행에 적음. evidence-class 목록에서 이제 완전형을 가진 Font/State/Responsive를 빼 혼동을 막음. |

### E2 / E2a / E2c — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -oF -- | wc -l`로 확인했다. 본문 수정 후 dest가 바뀐 바늘은 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 18 | YAML `primary_color` 행 | `#0ac290` dest **15**. Nav YAML active 병기 후 dest **16**. | dest **16**. |
| 19 | §11 Brand Narrative 행 | 출처 URL을 「이중 목적지」로 적음. 실측 `kyeongin.com` DESIGN dest **0** / P dest **1**(fitpet형 2차 목적지). | 서사 사실은 Scope, URL은 provenance only. |
| 20 | F1 / F2 | B2a **13=13**. 본문 22. | **22=22**, 신설 9·확장 4를 목록에 적음. §11 URL을 dual 목록에서 뺌. |
| 21 | YAML typography·components 행 | `use` 착지·`0 40px`·YAML font/active 병기를 적지 않음. | 착지 dest 각 1, keep-both를 행에 적음. |
| 22 | F2 dest 표 | 게이트 개정 표가 옛 dest. 본문 수정 후 미갱신. | F3 dest 표를 재실측해 붙임. |

Destination SHA `79f310e418f4e56a4f46875250bce307d30406d6ae2ec2d4a76c5612925e8e9c` (DESIGN). 줄 수 DESIGN **488→498**. provenance 원장 13→22행. 토큰 hex·applicability 표·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared 32 / candidates 192 (16.7%, 전수 평균 4.4%보다 높고 50% 미만). `verdict: PASS`는 대조한 바늘 손실 0. 발행 카피 손 대조(라틴 포함): `Vision` / `Our Business` / `Growth` / `Quality` / `Infra` / `Uisikju Company` / `Laundrette` / `Baemin Fresh` / `Cho Sung-woo` / 세 영문 gloss 전부 DESIGN dest ≥1. 발행 라틴 손실 안 보임. 로그 A5a 52/0은 mention이며, 이번 감사가 그 분모를 재추출하지는 않았다.
- **B1.** sibling `web/references/laundrygo/.verification.md` 경로 직접. sibling 전용 `49px`/`71px`/`32px` DESIGN dest 0. `H4`/`H3`/`H2`/`CTA A`/`NinjaFirewall`/`referenced in nav` DESIGN dest 0. 구조 분류 본문 승격 없음.
- **D2a.** 삭제 처분 행은 무식별(§13 3인, 이름·나이·도시·전기). 식별자 `김도현`/`이서연`/`박준호`/`서울`/`경기`/`부산` DESIGN·P·L dest 0. 동기·소속(`dry cleaner`/`officete`/`dual-income`/`Operations manager`/`B2B hotel partners`) DESIGN dest 0. Audience는 라이브 서비스명·CTA가 세우는 그룹만.
- **E2d.** 부재 단언은 「portable body 0」로 분모를 DESIGN에 한정. 그 행이 문자열을 담아도 세 파일 부재를 주장하지 않음. furiosaai형 자기부정 없음.
- **T2 커브.** §15 곡선 값은 provenance Omission ledger에 verbatim, 본문은 역할만(kkday 관례). 되살리지 않음. `cubic-bezier` DESIGN dest 0 / P dest 3.
- **같은 hex 역할 분리.** `#ffffff`는 canvas / on-primary / 다크 밴드 헤드라인 텍스트. `#0ac290`는 CTA 배경과 eyebrow 텍스트. `#dfdfdf`는 Hairline과 muted-button fill. `#000000`는 Primary Pure Black과 Text Hierarchy Ink. 분리를 Semantic B2a와 원장 행 8에 적음(고친 범위는 E1).

AUDIT_DONE fixes=22

## 개정 — 의미 검토 FAIL 4 (2026-08-29)

대상: `docs/design-md-weight/migrated/laundrygo/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (22=22).

### 결함 1 — §11 글로벌 비전 문장 (A1)

원본 `:344` 비전 문장과 `begins with laundry`를 Experience Scope 미션·비전 불릿에 사실 인용으로 복원.

### 결함 2 — §11 가치 목록 (A1)

원본 `:346` 가치 목록을 Scope 회사·리브랜드 불릿에 복원. Principles(원본 §12)와 합치지 않음.

### 결함 3 — §1 Pretendard hangul 근거 (A1)

원본 `:66` hangul 근거를 Typography Family 현재 가시 페이스 행에 복원.

### 결함 4 — §11 창업 직업 표기 (A1)

원본 `:342` `former corporate-comms professional`을 Scope 창업 문장에 복원. `ex-배민프레시 대표`와 병기. `on-demand logistics product`는 판정문이 별도 결함으로 세지 않아 추가하지 않음.

`node scripts/check-limiter-ledger.mjs laundrygo` → 본문 22 = 원장 22. `migrate-reference.mjs --brand laundrygo --gate-only` → PASS.

갱신한 dest 행 (`grep -oF -e` 실측): `The vision extends globally` D1/P1/L3 · `universal problem` 1/1/2 · `global service` 1/1/2 · `begins with laundry` 1/1/2 · `The values the system encodes` 1/1/3 · `convenient, considerate service` 1/1/2 · `reliability proven through laundry quality` 1/1/2 · `practicality` 1/1/2 · `de-facto Korean product font optimized for dense hangul legibility` 1/1/3 · `hangul` 1/1/5 · `de-facto` 1/1/4 · `Korean product font` 1/1/4 · `former corporate-comms professional` 1/2/3 · `corporate-comms` 1/2/4 · F3 `배민프레시 대표` P0→1 L6→8 · `배민프레시` P0→1 L10→14.

FIX_DONE laundrygo fixed=4 logdest=16

## 개정 — 의미 검토 FAIL 1 (2026-08-29)

대상: `docs/design-md-weight/migrated/laundrygo/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (22=22).

### 결함 1 — §2 Pure Black 제약 (A1 · 항목 3)

원본 `:84` 사용 제약 `Used directly (not a softened navy) for maximum-contrast headlines and body`를 Semantic color Pure Black Recorded use에 복원. `; nav` keep-both 유지.

판정: **사실 인용**, 한정 불필요. 원본 표기 그대로이므로 완전형 한정을 붙이지 않음. provenance Claim ledger ink 행 색인만.

`node scripts/check-limiter-ledger.mjs laundrygo` → 본문 22 = 원장 22. `migrate-reference.mjs --brand laundrygo --gate-only` → PASS.

세 바늘 dest (`split` 비겹침, `grep -c` 미사용): `not a softened navy` D1/P1/L3/AUD2 · `maximum-contrast` D1/P1/L3/AUD2 · `Used directly` D1/P1/L3/AUD2. SRC 각 1 / SIB 각 0. A5a dest 불변. 기존 F2 dest 횟수 불변.

FIX_DONE laundrygo fixed=1 logdest=3
