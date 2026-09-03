# Naver Pay 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/naverpay/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/naverpay/DESIGN.md`
검증 sibling: `web/references/naverpay/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행된 1차 UI 사양이 있다(bridge UI design spec + logo guide). B2a 예문 전제(v12)가 깨지므로 toss형을 요구하지 않고, 인접 한정 + evidence class를 끝까지 닫는지 + 그 사양을 이름하는지만 봤다. 기존 닫힘은 `not Naver Pay-authored or taken from a separately published UI specification, including the published bridge UI design spec and logo guide` — 완전형이다.

착수 실측: 본문 완전형 40 / 원장 40. 숫자는 맞았으나 (1) 세 번째 부류 문장이 인접 한정의 읽기 목록 밖에 있고 (2) 로그 dest가 `grep -c`(줄 수)로 적혀 `grep -o`(발생 수)와 어긋났다.

## 수정 목록 (23건)

### B2a — 인접 한정 (본문 4건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:56` — Application rules | "kept as brand rules rather than as universal governance"는 세 번째 부류. 기존 한정은 justifications만. | 기존 완전형에 brand-rules 분류를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:388` — Benefit Badge | `12px` font / `9999px` radius keep-apart는 세 번째 부류. 기존 한정은 status-marker만이고 그 문장 *뒤*에 keep-apart가 있었다. 원장은 이미 geometry를 이름함. | keep-apart를 한정 앞으로 옮기고 "reading those figures as this badge's geometry"를 완전형에 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:439` — Top Nav | `8px` / 16px / 44px keep-apart는 세 번째 부류. 기존 한정은 destination-select만이고 keep-apart가 그 뒤. 원장은 이미 geometry를 이름함. | keep-apart를 한정 앞으로 옮기고 geometry 읽기를 완전형에 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:525` — Brand-published lines | "never replace them" keep-both는 세 번째 부류. Voice `:529`는 레지스터 성격이고 Locale `:549`는 hangul-first라 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 41, `not Naver Pay-authored` 41, `including the published bridge UI design spec and logo guide` 41. `provenance.md`의 같은 절은 색인이지 한정이 아니다(각각 0). `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 56, 69, 85, 135, 149, 159, 163, 173, 181, 197, 212, 216, 231, 244, 251, 266, 283, 308, 332, 353, 364, 376, 388, 399, 415, 439, 471, 501, 525, 529, 541, 545, 549, 583.

### E1 — provenance derived 범위 (3건)

좁은 쪽도 FAIL. 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | 헤더 / 행 수 | 40 complete / 40 data rows. | **41** / **41**. |
| 6 | Application rules 행 | Eight Do rules and the reasons. 본문 `:56`이 이제 brand-rules 분류도 이름한다. | 그 판단을 행에 추가. |
| 7 | Content gloss keep-both 행 | 없음. 본문 `:525` 신설. | 행 신설. |

헤더 / 데이터 행 **40 → 41**. 본문 한정 줄 41과 원장 데이터 행 41이 1:1.

### E2 / E2a / E2c — 로그 목적지 (16건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 계수는 `grep -o | wc -l` 파일별. 2차 목적지 문자열은 `DESIGN.md` 발생 수를 다시 셌다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML identity `네이버페이` | dest **2** at 9/13. 실측 dest **3** (2 at 9, 1 at 13). `grep -c` 줄 수. | dest **3**. |
| 9 | YAML metadata `tokens.source: live-extract` | provenance dest at 19/37/250/266. 정확 문자열 dest **3** at 37/251/267. 19는 표 칸 `tokens.source` \| `live-extract`. | dest **3** at 37/251/267. 19는 콜론형이 아님을 적음. |
| 10 | YAML metadata `components_harvested` | dest at 21/38/250. 실측 dest **4** at 21/38/251 (2 at 251). | dest **4**. |
| 11 | YAML components `Top nav item` / `text #09aa5c on active` | use dest 1 each; active dest 1 at 436. `Top nav item` dest **2** at 223/437 (`Top nav items` 접두). active는 **438**. | dest **2** / 438. |
| 12 | §5 `420px` | dest 1. 실측 dest **2** at 363/461 (Benefit Showcase Card + Layout). | dest **2**. 이중 목적지 (E2a). |
| 13 | §5 `208px` | dest 1. 실측 dest **2** at 352/461 (Surface Feature Card + Layout). | dest **2**. 이중 목적지 (E2a). |
| 14 | §5 `480px` | dest 1. 실측 dest **3** at 352/461/471. | dest **3**. 이중 목적지 (E2a). |
| 15 | §5 `18px vertical` / `62px` | 공유 dest at 135/278/283/462. `18px vertical` dest **3** at 135/278/462. `62px` dest **6** at 135/279/283/462/491/501. | 문자열을 분리하고 실측 줄을 적음. |
| 16 | §6 `Finda` | dest 1 at 159. 실측 dest **2** at 11/159. `Toss` dest **2** at 11/159. `Toss mobile-web` dest 1 at 159. `KakaoBank` dest 1 at 159. | 이중 목적지. Finda/Toss dest **2**. |
| 17 | §10 `취급불가상품안내` | dest 2 at 109/518. 실측 116/518. | 116/518. |
| 18 | §11 `2015` / `2019` / `Naver Financial Corp` | dest 1 each. 실측 dest **2** each at 13 (한 줄에 두 번). | dest **2**. `네이버파이낸셜` dest 1은 유지. |
| 19 | §12 inventory | 40 data rows. | **41**. |
| 20 | §15 `computed transition properties` | dest 2 at 181/586. 실측 dest **1** at 181. 586은 `transition properties`(Named gaps). B3 전문은 181에 실재(E2c 준수 주장은 유지, dest만 수정). | dest **1**. `transition properties` dest **2** at 181/586을 따로 적음. |
| 21 | §15 `cubic-bezier(` | provenance dest 3 exact curves. 세 곡선 각각 dest **2** (188–190 + 247) = 6 writings. `cubic-bezier(` provenance dest **7** (192 mention 포함). DESIGN dest 0. | dest 6 + dest 7. |
| 22 | HTML comment / A5a `nid.naver.com` | DESIGN dest 2 + provenance. provenance dest **3** at 41/144/220. | 양쪽 dest를 적음 (E2a). |
| 23 | Deviations / F2 절 | Measure 40 / 40. F2가 구 dest를 인용. | 41 / 41. F2 재실측 목록을 `grep -o` 기준으로 갱신. |

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` `compared` 21 / `candidates` 173. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다. 손 스윕 발행 한국어·영문 gloss·YAML `use`는 본문에 생존. 라틴 발행 카피 손실은 보이지 않음. `네이버 스마트스토어`는 페르소나 전기의 타 표면 언급으로 로그 삭제 행에만 남김(게이트 copy-loss 처분 근거; D2a 식별자가 아님).
- **A1 키 경로.** 원본 YAML `tokens.components.<id>.<field>` 11레코드 전 필드가 대응 블록에 **행으로** 있다(type/bg/fg/radius/padding/font/border/use/active). `input-focus`는 Default Input 블록에 `Focused text input — green border` + `1px solid #09aa5c`로 남음. icook형 타 블록 hex 차용은 없음. 복원 없음.
- **D2a.** 식별자 4이름 DESIGN/provenance/log dest 0. 도시 문자열 dest 0. 동기·소속 분류(reseller / restaurant / freelance web developer 등) 본문 dest 0. Audience는 원본 헤더의 원형 라벨만. 삭제 행이 이름·나이·도시를 재수록하지 않음. `네이버 스마트스토어`는 원형 라벨이 아니라 전기 안의 타 표면 이름이지만 게이트가 요구하는 삭제 처분 근거로 로그에만 적혀 있다.
- **E2d.** provenance `:79`·`:192`는 부재를 **portable body**에 한정한다. 그 문장이 같은 파일에 문자열을 담아도 단언의 분모가 DESIGN.md이므로 거짓 원장이 아니다. 세 파일 어디에도 없다 형태는 없음.
- **B1.** sibling 전용 `네이버페이 네이버페이센터` / `공지사항` / `18px 0px` / `#eefff2` / `-apple-system` / `10px 12px 12px` / `rgb(156, 169, 188)` DESIGN dest 0. 구조 분류 `H1` 승격 없음. 본문 `H3s`는 원본 HTML comment에 이미 있다.
- **#ffffff 귀속.** canvas / on-primary 비병합은 원장 Semantic color 행에 있다. 같은 hex가 Primary CTA Text · Secondary Background · Green Payment Button Text · Dark Label Badge Text · Default Input Background · Top Nav Background로도 붙는다 — YAML 컴포넌트 필드이고 키 경로가 다르다. 원장 추가는 하지 않음(보고만).
- **열 구조.** Green 500 / Grayscale 900 등 공식 단계명과 YAML 키 경로는 본문에 남아 있다. krds형 토큰명 열 삭제는 없음.
- **충돌 처리.** live `#eefff2` vs spec `#eef9f3`는 spec 유지·live는 sibling-only 원장. YAML `18px 24px` vs sibling `18px 0px`는 YAML 유지. 자리마다 다른 정책은 없음.
- **모션 커브.** 원본 §15 곡선 3개는 본문에서 역할만 남고 값은 provenance Curve omission ledger(E2b). T2 관례. 값이 없는 것이 아니라 원장에 있다. 되살리지 않음.

AUDIT_DONE fixes=23

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/naverpay/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (41=41, 200–240).

### 결함 1 — A1 · 항목 11 — `input-focus` YAML `use`만 남기고 §4 긴 Use를 잘랐다

원본 YAML `:57` `Focused text input — green border`와 원본 §4 `:215` `Active/focused text field — green border is the pay brand's focus signal`은 같은 항목의 이중 기록이다. 산출은 YAML 짧은 `use`만 `:412`에 두었다. 원본이 세운 §4에 긴 Use를 병기. 한쪽으로 고치지 않음. 한정 신설 없음.

`DESIGN.md` 412: YAML `use` 옆에 `Source §4 Focus Input Use: Active/focused text field — green border is the pay brand's focus signal`.

`grep -oF -e` 실측 (파일별; 개정 후):

| 문자열 | SRC | SIB | DESIGN | provenance | log | audit |
|---|---:|---:|---:|---:|---:|---:|
| `Focused text input — green border` | 1 | 0 | **1** | 0 | 7 | 5 |
| `Active/focused text field` | 1 | 0 | **1** | 0 | 13 | 8 |
| `green border is the pay brand's focus signal` | 1 | 0 | **1** | 0 | 13 | 8 |
| `Active/focused text field — green border is the pay brand's focus signal` | 1 | 0 | **1** | 0 | 7 | 7 |

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML `tokens.components` | `Focused text input — green border` DESIGN / P | dest 1 each (implied) | **1** / **0** |
| YAML `tokens.components` | `Active/focused text field — green border is the pay brand's focus signal` DESIGN / P | 0 | **1** / **0** |
| §4 Component Stylings | `Active/focused text field — green border is the pay brand's focus signal` DESIGN | (없음) | **1** |
| A5a YAML `use` strings | `Focused text input — green border` DESIGN / P | (implied 1) | **1** / **0** |
| A5a YAML `use` strings | `Active/focused text field — green border is the pay brand's focus signal` DESIGN / P | (없음) | **1** / **0** |
| uniqueness | `Active/focused text field — green border is the pay brand's focus signal` DESIGN | 0 | **1** |
| Deviations | Python `split()` words | 9,259 | **9,348** |

F2 E2 절에도 같은 dest를 적음 (YAML short dest 1 / §4 long dest 1). 원장 행 수 41 불변.

`node scripts/check-limiter-ledger.mjs naverpay` → 본문 **41** / 원장 **41** (200–240) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs naverpay` → use 17/17, 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand naverpay --gate-only` → PASS, `problems: []`.

FIX_DONE naverpay fixed=1 logdest=7
