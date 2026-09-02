# nhn 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/nhn/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/nhn/DESIGN.md`
검증 sibling: `web/references/nhn/.verification.md` — `find web/references/nhn -type f`로 경로 직접 확인. 파일 존재.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o` / `grep -oF` `<패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 리터럴(`[FILL IN]`, `Weaving New Play.`)은 `-oF`.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not NHN-authored or a separately published UI specification`을 요구한다. 기존 30건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 복수 주어 변형(`are … inferences` / `they are not`)은 완전형이다.

착수 실측: 본문 완전형 30 / 원장 30. 숫자는 맞았으나 (1) Spacing `:93` YAML-vs-§5 keep-both, Transparent-action `:224` YAML-nav-use/§3 keep-both, Layout `:311` flat-layout 읽기가 인접 한정이 이름하지 않았고 (lablup형 접힘), (2) 원장 Location이 Spacing부터 20행이 한 줄씩 밀려 있었으며 (3) `tokens.components.previous-control.use` 키 경로가 대응 블록에 행으로 없었다(값은 `Token-set use:`에만). 로그 dest는 freshness/Verified/Conflicts/Tier 1·2/`not in the token set`/`logo.type: favicon`/`tokens.source: reconciled`/`1440×900` 2차 목적지가 실측과 달랐다.

## 수정 목록 (16건)

### B2a — 인접 한정 (본문 3건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:95` — Spacing | `:93` "Both writings stay"(YAML unitless cluster ≠ §5 measured-observation restatement)는 세 번째 부류. `:95`는 패딩·타입 사이즈 비병합만 이름했다. | 기존 완전형에 YAML-vs-§5 keep-both를 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |
| 2 | `DESIGN.md:224` — Transparent action label | "Both writings stay"(YAML nav `use` ≠ §3 `Transparent action-label control`)는 세 번째 부류. 기존 한정은 geometry≠spacing만. 원장은 이미 keep-both를 이름했으나 한정 본문이 말하지 않음. | 기존 완전형에 그 읽기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:315` — Layout | `:311` "flat corporate information layout"는 세 번째 부류. `:315`는 spacing-clusters / 1440×900만 이름했다. | 기존 완전형에 flat-layout 읽기를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 30, `not NHN-authored` 30, `not NHN-authored or a separately published UI specification` 30 (`they are not` 17 + `it is not` 13). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 3은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 50, 60, 74, 95, 104, 108, 112, 114, 122, 126, 141, 145, 159, 168, 180, 202, 224, 246, 273, 296, 315, 320, 354.

### E1 — provenance derived 범위 (3건)

좁은 쪽도 FAIL. 본문 한정이 이름하는 판단을 원장이 빼거나, Location이 다른 줄을 가리키면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Location 열 20행 | Spacing `:96`부터 Named gaps `:355`까지 실제 한정 줄보다 +1 (공백 줄을 가리킴). | `:95` `:104` `:108` `:112` `:114` `:122` `:126` `:141` `:145` `:159` `:168` `:180` `:202` `:224` `:246` `:273` `:296` `:315` `:320` `:354`. |
| 5 | Spacing 행 | 비병합만. 본문 `:95`가 이제 YAML-vs-§5 keep-both도 이름한다. | 그 판단을 행에 추가. |
| 6 | Layout 행 | spacing-clusters / viewport만. 본문 `:315`가 이제 flat-layout도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **30 = 30** at 211–240 (E1 1:1). Location이 본문 한정 줄과 1:1.

### A1 — 키 경로 복원 (1건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 7 | Previous control `DESIGN.md:272` | YAML `tokens.components.previous-control.use`가 대응 블록에 키 경로 행으로 없음(착수 DESIGN dest 0). 값 `Observed previous-navigation control on the services surface`만 `Token-set use:`에 있었다. type/fg/radius/font/states는 같은 블록에 경로가 있어 grep「값이 어딘가에 있다」는 통과(icook형). | `Token-set use: \`tokens.components.previous-control.use\` \`Observed previous-navigation control on the services surface\``. DESIGN dest **1** at 272. 해석 없음 — 경로 복원. |

시각 필드(type/fg/radius/font/states)와 colors/typography/spacing/rounded/shadow 키는 착수 시 이미 대응 블록·표에 행으로 있었다.

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다. 본문을 고친 뒤 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML identity 행 | Exact `logo.type: favicon` provenance dest 1 at 15. 15는 표 칸 `logo.type`이지 콜론 문자열 아님. 실측 P dest 1 at **27**. | at 27. |
| 9 | YAML metadata 행 | `tokens.source: reconciled` P dest 3 at 21/29/79. 21은 표 칸 `tokens.source`. 실측 at **29/79/198**. | at 29/79/198. DESIGN dest 0 유지. |
| 10 | YAML metadata 행 | `components_harvested` P dest 2 at 23/198. 198은 `tokens.source: reconciled`. 실측 at **23/197**. | at 23/197. |
| 11 | YAML metadata 행 | freshness table 32–38; **Verified:** at 40. 32는 공백, 40은 `sources captured`. 실측 freshness **33–40**, **Verified:** at **42**. | 33–40 / 42. |
| 12 | Footer 행 | Tier 1 list 83–90, Tier 2 94–95, Conflicts at 42. 83–90은 Claim ledger. 실측 Tier 1 **63–68**, Tier 2 **72–73**, Conflicts **44**. | 실측 줄로 옮김. |
| 13 | YAML `tokens.components` 행 | `not in the token set` dest 6 at 168/173/195/217/239/288. 168에 2회. `grep -o` DESIGN dest **7**. `use` 키 경로 dest 0. | dest **7** at 168×2/…. `tokens.components.previous-control.use` dest **1** at 272. |
| 14 | §8 / Sibling `1440×900` | "dual"이라고 적고 DESIGN dest 2 at 313/315만. 실측 P dest **3** at 131/149/238. 2차 목적지가 로그에 없음(fitpet형). | DESIGN dest 2 + provenance dest 3 (E2a). |
| 15 | §15 Motion 행 | dest `111–114`. 111은 공백. 본문은 **112–114**. | 112–114. |
| 16 | Pass 1 / Pass 2 | Count 30 = inventory 30은 맞으나 dest를 착수 숫자로 적음(freshness 32–38, Verified 40, Conflicts 42). | 접힌 읽기를 F1 목록에 반영. Pass 2를 재실측 dest로 갱신. |

Destination SHA `ddc69d5932849239c3b5989b119e2f316617aaa980500a7bca803ed71907fda0` → `6d704115f07ba6422dec8acacccd74c6b00cec369516dbd8f0034441c0bf36bb` (한정 접힘 + `use` 경로). 줄 수 DESIGN `wc -l` **362** 불변. provenance 240 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본 미수정.
- 기존 30개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- B3 전문 `DESIGN.md` 114: `computed transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1. 같은 줄에 완전형. E2c 유지.
- `:93` "they are observations rather than a complete spacing scale"와 `:311` 나머지 절은 원본 §5 재수록(관측). 한정이 이름하는 것은 그 위의 keep-both / flat-layout 판단이다.
- `loading | not-applicable` DESIGN dest **6** at 188/210/232/254/281/304. `loading | applicable` dest **0**. `Primitive type: \`button\`` dest 1 at 261. favicon dest 1/1. Exact `tokens.source: reconciled` DESIGN dest 0. `components_harvested` DESIGN dest 0 / P dest 2.
- E2d: 원장 부재 단언은 소스 YAML에 `ds.name` 필드가 없다는 기록과 §15 곡선이 원본에 없다는 처분이다. 「세 파일 어디에도 없다」고 적으며 그 문장이 그 문자열을 담는 행은 없다. 로그 dest 0은 DESIGN/P를 분모로 두고 로그 자신을 넣지 않는다.
- `#ffffff` canvas / on-primary 두 키는 Semantic color `:74` 한정과 원장 행이 이미 분리한다.

## 범위 밖 관찰

- **A5a.** 로그 `compared` 0 / `candidates` 106. `verdict: PASS`는 대조 바늘 0개. 발행 라틴 손 대조(`Weaving New Play` DESIGN dest 4 / `“Weaving New Play”` dest 2 / `“Weaving New Play,”` dest 1 / `Hangame Communication` dest 2 / `NHN Sans` dest 12 / `Pretendard Variable` dest 25 / `Main Pretendard Variable` dest 7 / `Connection becomes weaving` dest 1 / `Achromatic identity leaves room for variety` dest 1 / `CI and typography are controlled brand assets` dest 1 / `corporate information surface` dest 1 / `Canvas / On Ink` dest 1 / YAML `use` 4종 dest ≥1 / `Observed previous-navigation control on the services surface` dest 2)는 본문에 있다. 발행 라틴 손실은 눈에 띄지 않음. `[FILL IN]` DESIGN dest 0 / 원본 dest 1은 미완성 페르소나 슬롯 삭제(D2)이지 발행 카피가 아니다. 고치지 않음.
- **B1.** sibling 존재(`web/references/nhn/.verification.md`). sibling 전용 문자열 DESIGN dest 0 (`66` / `17 component variants` / `Playwright` / `document.fonts` / `text-grayscale-2` / `mainLink` / `pr-80` / `py-7` / `opacity-40` / `#dbdbdb` / `Weaving New Play.` / `0 80px 0 0` / `surface-2::[data-omd-capture="45"]` / `three weights` / `rgb(33, 33, 38)` / `artifacts/reference-evidence/nhn.json` / `interactionCount`). `h2`/`h3`는 원본 §3에도 있음(sibling 전용 구조 분류 승격 아님). `portal H2` dest 0. 고치지 않음.
- **D2a.** 원본 §13은 미완성 슬롯이지 이름·나이·도시가 없다. 처분 행(`provenance.md:188`, 로그 §13)은 필드 종류만. 식별자 DESIGN/P dest 0. 동기·소속 분류 신조어(`Solutions Partner agencies`) dest 0. Audience는 그룹을 발명하지 않음. 고치지 않음.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음.
- **A1 키 경로 (복원 외).** YAML `tokens.colors` 9키, `typography.family/body/nav/label/title`, `spacing` 7, `rounded` 2, `shadow.none`, `previous-control` type/fg/radius/font/states는 대응 블록·표에 행으로 있다. icook형 hex-elsewhere 소실은 `use` 한 필드뿐이었고 위에서 복원.
- **열 구조 / 충돌 처리.** 원본 색 표에 토큰명 열이 없고, Conflicts unresolved: none. krds형 열 삭제·자리마다 다른 충돌 처리 없음.
- **모션 규칙 부재.** 원본 §15에 곡선·duration이 없다. 본문 `:112`가 미해상으로 두고 합성하지 않음(kmong형 모범). 고치지 않음.

AUDIT_DONE fixes=16

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/nhn/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (30=30, 211–240).

### 결함 1 — A1 · 검사 11 (YAML↔§ 절단) · 검사 5 (keep-both 불일치)

같은 Previous control에서 YAML `font: "16px / 400 Pretendard Variable"`과 §4 `Font: 16px / 400 / Pretendard Variable`이 길이가 다른데, 산출은 짧은 YAML만 `Font:`에 남겼다. 같은 블록의 `states`는 keep-both다. 한쪽으로 고치지 않고 병기.

- `DESIGN.md` 265 `Font:` → 원본 §4 슬래시형 `16px / 400 / Pretendard Variable`
- `DESIGN.md` 270 Token-set font → YAML 짧은 쪽 `16px / 400 Pretendard Variable` 유지
- `DESIGN.md` 273 기존 한정에 YAML-font / §4-Font keep-both를 접어 넣음 (발생 수 +0)
- `provenance.md` 236 Previous control 행에 같은 keep-both를 이름함 (E1)

`node scripts/check-limiter-ledger.mjs nhn` → 본문 **30** / 원장 **30** (211–240) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs nhn` → use 5/5, 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand nhn --gate-only` → PASS, `problems: []`.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| 문자열 | SRC | SIB | DST | PROV | LOG |
|---|---:|---:|---:|---:|---|
| `16px / 400 / Pretendard Variable` | 3 | 0 | **4** | **1** | 3 |
| `16px / 400 Pretendard Variable` | 1 | 2 | **2** | **2** | 3 |
| `Font: 16px / 400 / Pretendard Variable` | 3 | 0 | **3** | 0 | 0 |
| `Font: 16px / 400 Pretendard Variable` | 0 | 0 | **0** | 0 | 0 |
| `tokens.components.previous-control.font` | 1 | 0 | **1** | 0 | 0 |

Previous 블록 (`:259–273`): 슬래시형 **2** (`:265` Font, `:273` 한정) / YAML 짧은 쪽 **2** (`:270` Token-set, `:273` 한정). Primary `:178` · Secondary `:200` 슬래시형 불변.

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML `tokens.components` | `16px / 400 Pretendard Variable` DESIGN / P | 2 / 1 | DESIGN **2** at 270/273 / P **2** at 180/236 |
| YAML `tokens.components` | `16px / 400 / Pretendard Variable` DESIGN / P | 2 / 0 | DESIGN **4** at 178/200/265/273 / P **1** at 236 |
| §4 Component Stylings | `16px / 400 / Pretendard Variable` DESIGN | 2 | DESIGN **4** |
| §4 Component Stylings | `16px / 400 Pretendard Variable` DESIGN | 2 | DESIGN **2** |
| Deviations | `wc -w` | 5,445 | **5,521** |
| Deviations | DESIGN SHA | `6d704115…` | `e451df4189853113674afe361cb72e6f619141dae0f4f40727bb4032ac33826a` |
| F2 | YAML font `16px / 400 Pretendard Variable` | 없음 | DESIGN **2** / P **2** |
| F2 | §4 `16px / 400 / Pretendard Variable` | 없음 | DESIGN **4** / P **1** |

F1에 Previous-control YAML-font / §4-Font keep-both를 이름함. 원장 행 수 30 불변.

FIX_DONE nhn fixed=1 logdest=8
