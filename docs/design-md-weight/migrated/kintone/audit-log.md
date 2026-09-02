# kintone 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kintone/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kintone/DESIGN.md`
검증 sibling: `web/references/kintone/.verification.md` — `find` 직접 경로 → 파일 존재 (21줄).
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 대괄호 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. Brand Guidelines PDF는 named hues 출처이지 published UI specification이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not kintone-authored or a separately published UI specification`을 요구한다. 기존 40건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 40 / 원장 40. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Assets `:222`의 not-invented-decoration은 한정이 없었고, Semantic `:86`은 two-key 한 쌍만 이름했다. 원장은 Distinctive·Do/Don't reasons·Motion signatures·Capture catalog-graph/not-complete를 빼 본문보다 좁았다.

## 수정 목록 (15건)

### B2a — 인접 한정 (본문 2건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:86` — Semantic color | “`tokens.colors.on-primary` is the same hex on a second key” 등 네 쌍의 keep-both는 세 번째 부류. 기존 한정은 `primary`/`brand` 한 쌍만 가리킨다. | 기존 완전형에 `canvas`/`on-primary`, `accent-green`/`success`, `accent-cerulean`/`info`, `accent-sunshine`/`warning` keep-both를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:222` — Assets mascot | “do not replace them with invented brand-color decoration”는 세 번째 부류. `:220` favicon·`:221` PDF 한정 밖에 있었다. | 완전형 신설: Refusing to replace those recorded mascot, illustration, and customer-logo spots with invented brand-color decoration. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 41, `not kintone-authored` 41, `separately published UI specification` 41. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 57, 70, 86, 108, 125, 138, 150, 165, 175, 193, 197, 216, 220, 221, 222, 247, 261, 285, 309, 356, 381, 403, 425, 440, 463, 534, 548, 568, 649, 683, 685, 700, 705, 753.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | 헤더 | **40** = **40**. 본문이 이제 41. | **41** = **41**. |
| 4 | Distinctive 행 | restatement만. 본문 `:32`가 groupings and the readings inside them도 이름한다. | 두 판단을 행에 추가. |
| 5 | Application rules 행 | Grouping the eight Do-list rules만. 본문 `:57`이 reasons attached도 이름한다. | and the reasons attached to them. |
| 6 | Avoid 행 | Grouping the seven Don’t-list rules만. 본문 `:70`이 reasons inside도 이름한다. | and the reasons inside them. |
| 7 | Semantic 행 | two-key pairs stay named. 본문 `:86`이 이제 다섯 쌍을 이름한다. | 다섯 쌍을 행에 적음. |
| 8 | Motion gate 행 | omit-curves / duration tokens / five-kind만. 본문 `:165`가 signature motions와 single-curve-not-sufficient도 이름한다. | 두 판단을 행에 추가. |
| 9 | Assets mascot 행 | 없음. 본문 `:222` 신설. | 원장 1행 신설. |
| 10 | Capture 행 | Applicability / Focus-vs-focus-visible / kind-omission만. 본문 `:247`이 catalog-graph, every verdict, not-complete-coverage도 이름한다. | 본문이 이름하는 판단을 행에 맞춤. |

헤더 / 데이터 행 **41 = 41** at 154–194 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML identity 행 | Homepage P dest **4** at 13/42/49/52 — 49는 scheme 없는 `kintone.cybozu.co.jp`, 52는 PDF. `#ef3f24` DESIGN dest **12** / P dest **4** — DESIGN **13**(507×2), P **5**. | Homepage P dest **4** at 13/42/51/66. `#ef3f24` DESIGN dest **13** at 9/11/34/59/88/105/253/278/279/507×2/667/683 · P dest **5** at 14/50/79/99/141. |
| 12 | YAML metadata 행 | Exact `tokens.source: prose-derived` P dest **1** at 20 (fitpet형 2차). 실측 DESIGN **0** / P **0**. `components_harvested` P dest **2** at 22/62 — 실측 **3**. | Exact colon 문자열 DESIGN dest **0** / P dest **0**. `prose-derived` DESIGN dest **1** at 9 · P dest **14**. `components_harvested` P dest **3** at 22/62/130. |
| 13 | §11 행 | 1997 / 2011 DESIGN dest **1** at 13. 실측 각 **2** at 13×2. | 1997 DESIGN dest **2** at 13×2 · P dest **3** at 121/133/156. 2011 DESIGN dest **2** at 13×2 · P dest **3** at 121/133/156. サイボウズ株式会社 DESIGN dest **2** at 13/719 · P dest **1** at 121. チームワークあふれる社会を創る DESIGN dest **2** at 13/719 · P dest **2** at 121/133. |
| 14 | C2 절 | `loading \| applicable` dest **3** at 266/364/556. 266은 hover 행. | dest **3** at 269/364/556. |
| 15 | 헤더 SHA | worker SHA만, B2a 40. | Auditor SHA `be741e05efc0d908122fa13d1814e400aeec0cbc38de21931fad9f8e35967557`. B2a **41**=**41**. worker-close `c603874c…` 유지. |

Destination SHA `c603874c…` → `be741e05efc0d908122fa13d1814e400aeec0cbc38de21931fad9f8e35967557` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **759** 불변. provenance 193→194.

## 수정하지 않은 것 (검토 후 위반 아님)

- Subtle / Success·Info·Danger pills / Underline Tabs / Textarea / Select / Flat Section / Data Table / Success Banner / Checkbox: `is not` 키경로 판단 문장이 없어 한정을 신설하지 않음. 값 행은 관측. C4·applicability는 Capture `:247`이 이름함.
- Scope ¶3 `:13` 인과(“thesis is why the brand looks”)는 원본 §11 문장. 한정은 그 서사를 token이 아니라고 분류하는 편집만 가리키며 이미 닫혀 있음.
- Motion `:163` “calm and unfussy”는 원본 §15 문장. `:165`가 duration-not-curve / signatures / five-kind를 이름함.
- B3 전문 `DESIGN.md` 167: `transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1. 로그 포인터 유지.
- D2a 삭제 행: 무식별(4인; 이름·나이·도시·동기·소속 분류). `田中` / `Tanaka` / `佐藤` / `Maria Santos` / `山本` / `Nagoya` / `Manila` DESIGN/P/L dest 0.
- E2d: 「세 파일 어디에도 없다」 자기부정 행 없음. provenance `:75`는 inspect를 이름하고 부재를 단언하지 않음.

## 범위 밖 관찰

- **A5a.** 로그 `compared` 26 / `candidates` 248. 발행 라틴(`Everyone can create` dest 3 / `Start free` dest 1 / `Create app` dest 1 / `Add a record` dest 1 / `No records match` dest 1 / `Create a society overflowing with teamwork` dest 1 / `Cybozu, Inc.` dest 1 / `Pantone 485` dest 2)은 본문에 있다. `Shamrock`/`Cerulean`/`Sunshine` 원본 6 / 산출 3은 이름 생존(손실 아님). 발행 라틴 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling `#231200` DESIGN dest 0 / P dest 5 / sibling dest 4. `Roboto` DESIGN dest 1 at 193은 “sibling Roboto reading is not the product-UI face” 거절이지 제품 서체 승격이 아님. `64px` DESIGN dest는 원본 spacing common value(`64px` / `tokens.spacing.section: 64`)이지 sibling button height가 아님. 값·h3/섹션 표제 분류 침투 0.
- **D2a.** 식별·동기(`defect-tracking` / `auto-parts` / `onboarding workflow` / `resident-request`) / 소속 분류(`non-technical business builders` / `SMB operations` / `Operations analyst`) DESIGN/P/L dest 0. Audience는 원본 §1·§11 그룹만.
- **E2d.** 이 브랜드 0.
- **A1 키 경로.** YAML `tokens.components` 17레코드의 type/bg/fg/radius/padding/font/use 및 기록된 hover/active/disabled/focus/border/shadow가 각 대응 블록에 행으로 있다. icook형 소실 없음. 복원 없음.

AUDIT_DONE fixes=15
