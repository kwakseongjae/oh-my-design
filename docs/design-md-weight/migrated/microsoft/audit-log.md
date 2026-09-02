# Microsoft F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/microsoft/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/microsoft/DESIGN.md`
sibling: `web/references/microsoft/.verification.md` (`find web/references/microsoft -type f` 및 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고 · A1 키 경로)
계수: 파일별 `grep -oF -- <pat> <file> | wc -l`. `grep -c` 미사용. 파일 부재면 미측정.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.
날짜: 2026-09-02

발행 1차 DS 있음(Fluent 2, `https://fluent2.microsoft.design`, `ds.type: system`). toss형 「발행 사양 부재」 예문을 요구하지 않음. 완전형은 `derived editorial implementation inference` + `not Microsoft-authored` + `taken from a separately published UI specification, including the published Fluent 2 documentation`.

착수 실측: 본문 완전형 **22** / 원장 데이터 행 **22**. 숫자는 맞았으나 Type roles 표 뒤 `16` 경로 분리와 Capture의 YAML `type: tab`·Focus 증거종류가 인접 한정이 이름하지 않아 **좁음**(E1, B2a 불완전). 로그 dest는 `#0078d4` 8(실측 9), Cascadia dest 2(실측 4), 미션 문장 dest 2(실측 1+1), Hero CTA `data-omd-capture="14"` 2차 목적지 누락.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다. Scope·Content·Principles 안팎을 같이 보았다.

- **브랜드 발행 사실** — Microsoft 사명·About 약속, Fluent 2 존재와 `ds.description`, Communication Blue / Segoe UI / Segoe UI Variable 패밀리, FAQ·Monotype 라이선스 경계, §12 원칙 줄기, §7 Do/Don't, §10 보이스와 세 인용 카피.
- **관측 기술** — 두 마케팅 표면의 hex·px·selector, YAML 키, 797/242/58 로드 횟수, 8개 컴포넌트 레코드, desktop-only 1440×900, 캡처 공백.
- **편집적 해석·인과 판단** — 계약 표면 선정, 분위기/서사≠토큰, 과제 선정, Audience 제한, 특성 묶기, UI implication·Do/Don't 그룹, 팔레트 슬롯, 단위 없는 간격 vs px, shape 키 분리, elevation/motion 게이트, 폰트 증거 class, no-substitution, type-role keep-both, body `16` vs spacing `16`, github slug, applicability·Focus 증거종류, 1440×900-capture, byte-exact, Named gaps 목록.

세 번째 부류인데 인접 완전형이 없던 자리, 또는 기존 한정이 그 읽기를 이름하지 않던 자리만 고쳤다.

## 수정 목록

### B2a — 인접 한정 (본문 2건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:165` — Type roles 표 뒤 | "Body `16` is a type size. It is not a spacing step"는 세 번째 부류. `:144` 한정은 unitless/px · Display 행 · footer `11px` · Fluent ramp만 가리키고, 표 뒤에 인접하지 않음. | 같은 문단에 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:180` — Capture record | 기존 한정은 procedure/kind/applicability만. 같은 절의 YAML `type: tab` only-on-Active-pill-tab과 generic `Focus` ≠ `focus-visible`은 이름하지 않음 (google Capture와 동형). | 기존 완전형에 두 읽기를 접어 넣음. 주어를 복수 `inferences`로 맞춤. 발생 수 +0. |

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 같은 hex의 귀속 분리가 원장에 없으면 원장을 실제에 맞춘다(krafton).

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Derived editorial inventory | 22행. 본문 `:165` 신설 한정이 가리키는 body-`16`-off-spacing-`16` 행이 없음. | 행 추가. **22 → 23**. |
| 4 | 같은 표 Capture record 행 | YAML `type: tab`만. 본문 `:180`이 이제 Focus ≠ `focus-visible`도 이름함. | Focus 읽기를 행에 추가. |
| 5 | Byte-form notes | `#ffffff` / `#091f2c`가 canvas·CTA Text / primary-dark·Outline border로 갈라지는데 원장은 unmerged만 적음. | 원본이 이미 적는 용도(marketing and action foreground; CTA bg + outline border)를 원장에 실측으로 적음. |

### E2 / E2a — 로그 목적지 (본문이 아니라 로그)

| # | 위치 | 무엇이 틀렸나 (실측 `grep -oF`) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | YAML identity 행 | `#0078d4` DESIGN dest **8**. 실측 **9** (Scope×2, Primary tasks, Distinctive, Do, Semantic 한정, Semantic 불릿, Standard CTA, Hero CTA). provenance dest **4**는 맞음. | dest **9**. |
| 7 | YAML `tokens.colors` 행 | primary `#0078d4` dest **8**. 실측 **9**. | dest **9**. |
| 8 | §3 행 | Declared-only 5종 dest **2** each. Cascadia Code DESIGN **4** (Avoid + Font evidence + 한정 + Named gaps). 나머지 4종은 **2**. | Cascadia dest **4**. 나머지 dest **2**. |
| 9 | §4 행 | 셀렉터 이중 목적지에 `data-omd-capture="17"`만. Hero CTA `data-omd-capture="14"`는 DESIGN **1** / provenance **1**인데 로그 **0** (fitpet형 2차 목적지 누락). | `data-omd-capture="14"` dest **1** / P dest **1**을 둘 다 적음. |
| 10 | §11 행 | "Mission sentence dest **2**". `empower every person and every organization on the planet to achieve more` DESIGN **1**; `empowering every person…` DESIGN **1**. 한 문자열 dest 2가 아님. | 두 원문 쓰기를 각각 dest **1**. |
| 11 | §12 행 · Deviations · F1 | inventory / 완전형 **22**. 감사 후 본문 23 = 원장 23. | **23**. `wc -w` 6115 → **6169**. |
| 12 | Sibling handling · A5a sibling 칸 | 로그가 sibling 문구 `no display face`를 provenance sibling-only에 있다고 적음. 실측 그 문자열 DESIGN **0** / provenance **0**. provenance는 `denies a display face` dest **1**. | 원장 표기에 맞추고, sibling 완전 일치는 DESIGN dest **0** / provenance dest **0**(로그 mention ≠ use)로 분리. |
| 13 | F2 단락 | dest를 본문 수정 전에 쓴 채로 둠. | 본문·원장 수정 후 재실측했다고 고침. Hero CTA `14` 이중 목적지를 명시. |

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 23 | 0 | 1 |
| `not Microsoft-authored` | 23 | 1 | 1 |
| `including the published Fluent 2 documentation` | 23 | 1 | 1 |
| inventory 데이터 행 | — | 23 | — |
| `#0078d4` | 9 | 4 | 4 |
| `#091f2c` | 8 | 4 | 2 |
| `#ffffff` | 10 | 6 | 2 |
| `Cascadia Code` | 4 | 2 | 3 |
| `data-omd-capture="14"` | 1 | 1 | 2 |
| `empower every person and every organization on the planet to achieve more` | 1 | 1 | 2 |
| `empowering every person and every organization on the planet to achieve more` | 1 | 0 | 1 |
| `no display face` | 0 | 0 | 3 |
| `denies a display face` | 0 | 1 | 4 |
| `loading \| not-applicable` | 8 | 0 | 0 (로그 표기는 백슬래시 이스케이프; dest **8**은 본문 실측과 일치) |
| B3 다섯 종류+게이트 전문 (`computed transition properties, animation name, duration, easing, and reduced-motion behavior`) | 2 | 0 | 0 (로그는 종류를 풀어 씀; Foundations Motion 본문에 전문) |
| sibling-only `home::h1` / `#fae9ec` / `Azure portal` / `Store checkout` / `transparent background` / `16px / 600 / 24px` | 0 | 1 each | mention |

한정 줄: 9, 11, 13, 19, 28, 32, 43, 52, 61, 74, 96, 106, 110, 114, 131, 140, 144, **165**, 169, 180, 382, 402, 436.

DESIGN.md SHA-256 `943597a86706eb43b682be09f49b6c1a48b11c2b16cefd69edd2b2875a0f9111`.
provenance.md SHA-256 `91e104e5df369c74c273ad387d75ec7490b374c6d0076d029394b4810d3f9a7f`.
migration-log.md SHA-256 `00587f6d160a1968772a9cae10251fb0fc755fc8de2836c2a5bd289dc95ef5ac`.
줄 수 DESIGN 448 불변(제자리 문장 편집). 토큰·표·applicability·구조·원본 무변경.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7. 머리 한정이 항목을 덮음. toss 예문 비적용(v12 전제 주석; Fluent 2 발행 사양). 닫힘은 `including the published Fluent 2 documentation`.
- Audience — 원본 §13의 no-research 문장. 필드 종류(name/age/city)만 적고 식별자를 재수록하지 않음.
- Scope ¶2 "These are public-web observations, not a claim…" — 원본 §1 문장.
- Semantic `:90` `#051118` not a color key — `:74` 한정이 outline-CTA text를 이미 이름함.
- B3 / E2c — Foundations Motion이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음. 「공식 출처로 검증될 때까지」 DESIGN **0**.
- `1.4` dest **6** — `grep -oF '1.4'`가 `1.47` 접두를 포함. 로그 dest 6과 일치. 정규식 `grep -o '1.4'`는 `.` 때문에 과다 계수되므로 `-F`를 유지.
- A1 키 경로 `tokens.components.m365-tab-active.{type,bg,fg,radius,padding,height,font,active,use}` — Active pill tab 블록에 Primitive type / Background / Text / Radius / Padding / Height / Font / Token-set use / `active: true` 행으로 있음. icook형 값-다른-블록 잔존 없음. YAML `font`와 §4 `Font:` 슬래시 표기는 원본 keep-both.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** / candidates **138**. `verdict: PASS`는 대조한 바늘이 없음. 발행 카피 손 대조: "We empower the world" DESIGN **1** · "Your everyday AI companion" **1** · "What will you do with Copilot?" **1** · `empower every person and every organization on the planet to achieve more` **1** · Communication Blue **6**. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값·분류(`home::h1` / `home::h2`, `transparent background`, `#fae9ec`, `Azure portal`, `Store checkout`, `16px / 600 / 24px`, `score: 100`) DESIGN.md **0**. 구조 분류("h1다", 섹션 표제) 승격 없음. 고치지 않음.
- **D2a.** §13 삭제 행은 무식별(`[FILL IN]` 자리, 인원·이름 없음). 이름·나이·도시 0. Primary tasks는 캡처 표면/컨트롤이지 페르소나 동기 승격이 아님. Audience에 원본 없는 소속 분류 없음. 원형 라벨 재수록 없음(원본에 원형 라벨 자체가 없음).
- **E2d.** 「세 파일 어디에도 없다」 0. `cubic-bezier(0.4, 0.0, 1, 1)` 행은 **source** 부재 + DESIGN/provenance dest 0이고, 로그 mention을 분모에서 빼지 않은 채 세 파일 부재를 단언하지 않음. sibling dest 0은 DESIGN.md만 닫음.
- **A1 / wave 40.** 토큰명 열(`tokens.colors.*` / `tokens.typography.*` / `tokens.spacing` / `tokens.rounded`)은 compact 줄·Semantic 불릿·Type roles 표에 남아 있음. `#FFB114`형 단계 귀속 소실은 이 브랜드에 해당 값 없음.
- **#ffffff / #091f2c 귀속 분리.** canvas vs CTA Text, primary-dark vs Outline border — 원본이 이미 그 용도를 적음. 원장 Byte-form에 실측을 맞춰 두었고 본문 값은 건드리지 않음.

AUDIT_DONE fixes=13

## 개정 — 의미 검토 FAIL 2 (2026-09-02)

대상: `docs/design-md-weight/migrated/microsoft/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (23=23, 194–216).

### 결함 1 — A1 / 웨이브27-9 슬래시 측정 융합

Layout가 `13px / 11px chrome type`으로 nav 13px와 footer 11px를 size/line-height 표기에 붙였다. 원본 §3은 `13px / normal`(nav)과 `11px / 16px`(footer)를 따로 적는다. 융합을 풀고 그 두 원본 표기로 되돌렸다. `13px Segoe UI global chrome and 11px footer treatment` Do 문장은 dest **1** 유지.

| 문자열 | 원본 | sibling | DESIGN | P |
|---|---:|---:|---:|---:|
| `13px / 11px` | 0 | 0 | 0 | 0 |
| `13px / normal` | 1 | 0 | 2 | 0 |
| `11px / 16px` | 1 | 0 | 3 | 0 |
| `13px Segoe UI global chrome and 11px footer treatment` | 1 | 0 | 1 | 0 |

### 결함 2 — D1 `curve` 틀 부정 claim

원본 §15는 `does not provide a source-backed Microsoft-wide duration or easing table`만 말한다. `curve` 원본 0 / sibling 0. Foundations Motion의 `The source lists no curve values.`를 삭제했고, Named gaps의 `Promote a curve only after…`를 `Promote a motion token only after…`로 바꿨다. duration or easing table과 다섯 종류 게이트는 유지.

| 문자열 | 원본 | sibling | DESIGN | P |
|---|---:|---:|---:|---:|
| `curve` | 0 | 0 | 0 | 0 |
| `The source lists no curve values` | 0 | 0 | 0 | 0 |
| `Promote a curve` | 0 | 0 | 0 | 0 |
| `does not provide a source-backed Microsoft-wide duration or easing table` | 1 | 0 | 1 | 0 |
| `Promote a motion token` | 0 | 0 | 2 | 0 |

`node scripts/check-limiter-ledger.mjs microsoft` → 본문 23 = 원장 23 (194–216).
`node scripts/check-yaml-use-landing.mjs microsoft` → 7/7 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand microsoft --gate-only` → PASS.

갱신한 dest 행 (`grep -oF -e` 실측): `13px / normal` 1→2 · `11px / 16px` 2→3 · `Promote a motion token` dest **2** (신설 dest 칸). §15 행에서 `The source lists no curve values` 서술을 삭제. F2 단락에 이번 패스 재실측을 적음.

DESIGN.md SHA-256 `22421dbeccb32ff55614cfd114ef72fe65065b74a8f8c4c3b3ae101ec879b5ac`.
provenance.md SHA-256 `91e104e5df369c74c273ad387d75ec7490b374c6d0076d029394b4810d3f9a7f` (불변).
migration-log.md SHA-256 `11082b1b2f454e6971d9adb624af541daa178c02bb7a9dd2add3c51852108d39`.
줄 수 DESIGN 448 불변. `wc -w` 6169 불변.

FIX_DONE microsoft fixed=2 logdest=3
