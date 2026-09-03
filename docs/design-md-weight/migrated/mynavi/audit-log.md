# mynavi 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mynavi/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mynavi/DESIGN.md`
검증 sibling: `web/references/mynavi/.verification.md` — `find web/references/mynavi -type f`와 `test -f web/references/mynavi/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음(getdesign.md/mynavi · Refero 시도, usable record 없음). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Mynavi-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 23. 숫자는 맞았으나 Capture 표 앞 `:156`·`:158`과 Service filter tab `:193`은 세 번째 부류인데 인접 한정이 없었다. `:175`는 표 뒤라 `:156`에 닿지 않고, Core C2 applicability를 derived-editorial로 이름했다(cookpad Capture 과잉명명동형). 23은 과소였다.

## 수정 목록 (15건)

### B2a — 인접 한정 (본문 4건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:156` — Capture record ¶1 | "Only the latter is promoted because…" / "remain raw evidence rather than inferred components"는 인과·편집 판단. `:175`는 §14 표 뒤라 인접이 아니다. | 같은 줄 끝에 완전형 한정 신설. 새 줄 아님. |
| 2 | `DESIGN.md:158` — Capture record ¶2 | "The static default geometry remains useful and is retained"는 유용성 판단. `:175`는 이름하지 않고 표 너머에 있다. | 같은 줄 끝에 완전형 한정 신설. 새 줄 아님. |
| 3 | `DESIGN.md:175` — Capture record after §14 table | 한정이 illustrative §14 + "judging applicability by the tab's filter role" + "refusing to infer a generic row or button component"를 한 데 묶음. C1/C2는 Core 정책이지 브랜드 파생이 아니고, row/button 거부는 `:156`이 맡는다. | illustrative §14 rows only로 좁힘. 발생 수 +0. |
| 4 | `DESIGN.md:193` — Service filter tab | "Keep the `#DDDDDD` tab’s 4px radius and 38px measured height tied to the service-directory context"는 Application rules `:55`의 Do 재진술. `:55`는 절이 달라 인접이 아니다(fugle Imagery동형). | 같은 줄 끝에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 26 (`grep -o` 어간이 복수 `inferences` 접두도 포함; 단수 23 + 복수 3 = 완전형 26), `not Mynavi-authored or a separately published UI specification` 26. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 55, 64, 77, 93, 99, 103, 107, 124, 132, 142, 149, **156**, **158**, 175, **193**, 212, 217, 241, 275.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문에 한정 3건을 신설하고 `:175`를 좁히면 원장 23은 실제보다 좁다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | Derived editorial inventory 헤더 | 23 complete / 23 data rows. 본문은 26. | **26 = 26**. |
| 6 | Capture record `:156` 행 | 없음. | 행 신설(promotion / raw-evidence). |
| 7 | Capture record `:158` 행 | 없음. | 행 신설(static default useful). |
| 8 | Capture record `:175` 행 | illustrative §14 + applicability-by-filter-role + generic row/button. 본문 `:175`는 이제 §14 prompts only. | 행을 illustrative §14로 좁힘. |
| 9 | Service filter tab `:193` 행 | 없음. | 행 신설(measured radius/height bound to captured context). |

헤더 / 데이터 행 **23 → 26** at 150–175 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (6건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 준수 주장은 본문 실재 시에만. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | 머리글 | "Gate output is recorded below" — 파일에 gate transcript / `verdict` / `compared` 런 결과 없음(E2c 과잉 주장). | `--gate-only` 미실행, transcript 없음, 그 부재는 PASS가 아니라고 고침. |
| 11 | YAML `tokens.typography.family.display` 행 | 처분이 옮김 only. 키 경로 DESIGN dest 1 / provenance dest **2**(claim preamble + ledger). E2a 누락. | 분리 → provenance claim ledger. DESIGN dest 1 / provenance dest 2. |
| 12 | YAML typography `use` 행 | 둘째 `use` `Observed service-directory and corporate-information page title only.` DESIGN dest 1만. provenance claim ledger dest **1**(fitpet형 2차 목적지 누락). | DESIGN dest 1 / provenance dest 1 (E2a). |
| 13 | 같은 행 `not in the token set` | "DESIGN dest 2 / dest 2 / dest 2 for those three strings"가 `34px`/`500`/`59.5px`인지 `not in the token set`인지 모호. `not in the token set` DESIGN dest **1**. | `34px` dest 2 / `500` dest 2 / `59.5px` dest 2; `not in the token set` dest 1. |
| 14 | B2a 절 · §12 행 | 본문 23 / inventory 23 data rows. 실측 26. | **26** / 26 data rows. 한정 줄 목록을 26줄로. |
| 15 | §4 · §8 · F1/F2 | 새 한정 156/158/193과 `:175` 재조준이 dest 표에 없음. F1이 23 sites 완전을 주장(E2c). | §4에 193, §8에 156/158/175, F1을 26 sites·재실측으로. |

본문 한정 추가 후에도 기존 dest 바늘(`マイナビ` 4/3, `#323746` 5/1, `Noto Sans JP` 14/5, `tab-show-item` 4/3 등)은 불변. 한정 문장이 그 바늘을 반복하지 않도록 썼다.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 DS 없음, v12 전제 주석).
- Scope ¶1 계약 범위 — `:9` 한정이 세 공개 경로를 token surfaces로 읽는 판단을 이미 이름함.
- Distinctive traits 불릿 — `:32`가 restatement/readings inside를 이름함.
- Semantic color 경계 문단 `:85` — `:77`이 orange/green/`#3D3D3D`/cookie-consent를 shared palette 밖으로 두는 판단을 이미 이름함.
- Type roles 표 뒤 `:142` — 표 셀 `not in the token set`을 그 한정이 이름함(표 뒤 한정 관례).
- B3 준수 주장 — `DESIGN.md` 107이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음 (E2c 유지).
- Motion "this reference deliberately provides no motion token" — 원본 §15 문장. 원본에 없는 규칙을 합성하지 않은 모범(웨이브 39 kmong).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/mynavi/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — マイナビ / Mynavi, 2007 portal-brand unification, 2011 Mainichi Communications rename, purpose/top-message 문장, `Noto Sans JP` 로딩 주장의 1차 출처 서술, YAML `use`/`states` 바이트.
- **관측 기술** — `#323746` / `#000000` / `#0071bb` / `#dddddd` / `#e7f6fd`, `14`/`40`/`1.75`, `4px` / `2px 3px` / `38px`, `box-shadow: none`, `Primitive type: tab`, `1440×900`.
- **편집적 해석·인과 판단** — 세 공개 경로를 계약 표면으로 읽기, restrained/information-led, 과제/청중 선정, 원칙·Do/Don't 이유, 증거 class 해상, tab-only 승격, static default useful, §14 illustrative, radius/height를 service-directory에 묶기.

세 번째 부류 중 23곳은 착수 시 인접 완전형이 있었고, Capture ¶1·¶2와 Service filter tab Keep 문장 3곳은 한정이 없어 그 자리에 붙였고, `:175`는 Core C2를 빼도록 좁혔다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 26 | 0 | 1 |
| `not Mynavi-authored or a separately published UI specification` | 26 | 0 | 1 |
| inventory 데이터 행 | — | 26 | — |
| `tokens.typography.family.display` | 1 | 2 | 2 |
| `Observed service-directory and corporate-information page title only.` | 1 | 1 | 1 |
| `not in the token set` | 1 | 0 | 1 |
| `Career explorer` | 0 | 0 | 1 |
| `OneTrust` / `26.25px` / `foresight/imagination` | 0 / 0 / 0 | 1 / 1 / 1 | 2 / 2 / 1 |
| B3 다섯 종류+게이트+부분확인 배제 (`DESIGN.md` 107) | 1 | 0 | 1 |

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다.

토큰·표·applicability·구조·원본 무변경. DESIGN.md 줄 수 289 불변(한정은 기존 줄에 접어 넣음).

## 범위 밖 관찰

- **A5a.** 로그가 게이트 `copy-loss` compared를 돌리지 않았다고 적는다. `verdict: PASS`는 파일에 없다. 손 스윕 분모는 발행 라벨 11 extracted / 0 missing. 발행 카피 손 대조(`マイナビ` DESIGN 4 · `Mynavi` 본문 생존 · `Mainichi Communications` 3 · `Noto Sans JP` 14 · `游ゴシック体` 3 · `Find the service that fits your next step.` 2 · `Explore options at your own pace.` 2 · `Let’s make the next possibility visible.` 2): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 고치지 않음.
- **B1.** sibling 전용 `home::body` / `home::li` / `surface-2::h1` / `surface-3::h2` / `a.tab-show-item` / `OneTrust` / `26.25px` / `0px 10px 0px 39px` / `2026-07-13T15:03:04.431Z` / `foresight/imagination` / `signed-in` / `mobile-app visual system` / `0 interaction kinds`: DESIGN 0 / provenance mention. 본문 `h1`/`h2`/`listItem`은 원본 §2·§3·§8 문구이지 sibling 구조 분류 승격이 아니다. 본문에 sibling 전용 분류("portal H2", "섹션 표제다")를 사실로 넣은 문장 없음.
- **D2a.** 원본 §13은 이름·나이·도시 없이 원형 라벨 4개. 식별자 DESIGN/provenance 0. 동기 문구(`clear distinctions between service routes` / `calm, legible explanations` / `direct route to the relevant corporate contact` / `durable narrative context`) DESIGN 0. 소속 분류 신규 표현 DESIGN 0. 로그 삭제 행은 `Career explorer`만 dest 0으로 재고하고 나머지 세 라벨은 안 적음 — 웨이브 41은 원형 라벨을 삭제 행에 적으라고 한다(copy-loss 분모). 로그가 그 라벨 부재를 D2a로 묶은 것은 경계 오적용. 고치지 않음.
- **E2d.** "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음. 로그 `Career explorer` DESIGN dest 0 / provenance dest 0은 DESIGN·provenance 분모이고 로그 mention은 use가 아니다.
- **A1 키 경로.** YAML `tokens.components.service-filter-tab.{type,bg,fg,radius,padding,height,states,use}` 값이 Service filter tab 블록에 행으로 있다: Primitive type/`type: tab`, Background `#dddddd`, Text `#000000`, Radius `4px`, Padding `2px 3px`, Height `38px`, YAML states, Token-set use. icook형(값이 다른 블록에만 있고 해당 블록 행이 없음) 아님. 점 경로 `.bg` `.fg` `.radius` `.padding` `.height` `.use` 문자열은 provenance claim ledger에만 있고 본문 Anatomy 행은 원본 §4 표제(Background/Text/Radius/Padding/Height)를 따른다. 값·열 구조 소실로 보지 않음. 고치지 않음.
- **같은 hex 다른 역할 (웨이브 39 krafton).** `#000000`은 `tokens.colors.heading`(page-title ink)과 `tokens.components.service-filter-tab.fg`(tab Text). `#dddddd`는 `tokens.colors.tab-fill`과 `tokens.components.service-filter-tab.bg`. 원장 claim ledger가 두 귀속을 모두 적음. E1 범위 밖 추가 수정 없음.
- **충돌 처리 일관성 (웨이브 40 krds).** `conflicts: []` / "Conflicts unresolved: none". 자리마다 다른 충돌 정책 없음.

AUDIT_DONE fixes=15

---

## 기계검사 정정 (2026-09-02)

검사 출력: limiter 26=26 1:1 OK · use 2/2 OK · gate PASS · `portable_core=false failed=no_prescriptive_placeholders`.

원장 1:1·YAML `use:` 착지·7앵커·governance claim 정본 문안은 이미 맞았다. 헤더 `## Derived editorial inventory` / `| Location in DESIGN.md | Qualified reading |` 26행 유지. Authority / Application priority / Unknowns / Changes 본문은 정본 바이트 그대로 — 되돌릴 자리 없음.

### 원인

`scripts/design-md-core-conformance.cjs` `BARE_PLACEHOLDER`가 Type roles Font 칸 전체가 `unresolved`인 두 행을 처방 placeholder로 읽음 (expo evidence-class 표 동형). `prescriptivePlaceholderLines` 실측: `:138` Public body baseline, `:140` Company blue section heading. 원본 §3 Observed hierarchy는 Font 칸이 없고 Boundary에 `family unresolved`를 쓴다.

### 정정 (1건)

| # | 위치 | 무엇이었나 | 어떻게 고쳤나 | 근거 |
|---|---|---|---|---|
| 1 | `DESIGN.md:138,140` Type roles Font | 칸 전체가 `unresolved` → `no_prescriptive_placeholders` FAIL | 원본 §3 Boundary 문구 `family unresolved`로 치환. 토큰 값·YAML `use`·px/단위·컴포넌트 표·상태 applicability 불변 | expo `BARE_PLACEHOLDER` 선례. 원본 dest: `family unresolved` SRC 2 |

본문 한정 추가·원장 행 병합/삭제 없음 (한정이 빠진 자리 0). provenance inventory 불변.

### dest 재실측 (`indexOf` 전수, `grep -c` 미사용)

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `family unresolved` | 2 | **3** | 0 | 1 |
| `\| unresolved \|` | 0 | **0** | 0 | 0 |
| `derived editorial implementation inference` | 0 | 26 | 0 | 1 |
| `not Mynavi-authored or a separately published UI specification` | 0 | 26 | 0 | 1 |

`family unresolved` DESIGN 3 = Font 칸 2 + Company heading Boundary 1. migration-log §3 dest를 이 실측으로 갱신.

### 검증

- `node scripts/check-limiter-ledger.mjs mynavi` → 본문 26 = 원장 26 (150–175) 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list mynavi` → use 2/2 (100%) 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand mynavi --gate-only` → PASS, problems []
- `inspectDesignMd` → `portable_core: true`, placeholders []

토큰 값·컴포넌트 표·상태 applicability·원본·CURRENT_STATE 미수정.

FIX_DONE mynavi mech
