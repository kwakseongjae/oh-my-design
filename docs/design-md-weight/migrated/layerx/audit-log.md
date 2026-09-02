# LayerX 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/layerx/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/layerx/DESIGN.md`
검증 sibling: `web/references/layerx/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not LayerX-authored or a separately published UI specification`을 요구한다. 기존 한정이 elevation/motion specification으로 도메인 명사만 바꾼 자리는 완전형으로 읽었다.

착수 실측: 본문 `derived editorial implementation inference` **46** / `not LayerX-authored` **46** / 원장 inventory **46**행. 숫자는 맞았으나 Capture record가 모든 applicability verdict를 덮는다고 적고도 Select / Underline Tab / Segmented Tab 표 앞에 인접 한정이 없었다. 필드·토글 표의 기존 한정은 geometry만 이름하고 loading/success 역할 판단을 빠뜨렸다. provenance Sibling handling은 sibling 파일을 없다고 단언했는데 `web/references/layerx/.verification.md`는 존재한다. migration-log dest는 `grep -c`(줄 수)를 쓴 자국 — `#534DFF` DESIGN 23줄/24회, `prose-derived` P 15줄/16회.

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **49**, `not LayerX-authored` **49**, `separately published (UI|elevation|motion )?specification` **49**. `provenance.md` inventory **49** data rows (E1 1:1). provenance의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 11, 13, 15, 21, 30, 34, 46, 59, 71, 86, 116, 127, 144, 157, 171, 187x2, 197, 216, 220, 236, 238, 242, 243, 268, 284, 309, 333, 357, 382, 405, 427, 443, 465, 478, 491, 504, 529, 567, 589, 613, 627, 648, 668, 683, 685, 700, 705, 753.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 7건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:382` — Text Field | 세 번째 부류(standard form field는 in-place commit이 아니라 loading/success not-applicable). 기존 한정은 padding + Focus≠focus-visible만. | 기존 완전형에 그 역할 판단을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:405` — Error input | 같은 부류(invalid-input variant의 loading/success). 기존 한정은 red help text만. | 기존 완전형에 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:427` — Select / Dropdown | 표의 loading/success not-applicable 이유가 세 번째 부류. 인접 완전형 없음. Capture record `:268`은 표와 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:443` — Textarea | 같은 부류. 기존 한정은 96px≠section 96만. | 기존 완전형에 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:567` — Underline Tab | 섹션 내비게이션 탭의 L/E/S 닫힘이 세 번째 부류. 인접 완전형 없음. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:589` — Segmented Tab | 뷰 전환 탭의 L/E/S 닫힘이 세 번째 부류. 인접 완전형 없음. | 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:668` — Toggle | 세 번째 부류(boolean settings는 in-place L/E/S가 아님). 기존 한정은 `9999px`/18px geometry만. | 기존 완전형에 접어 넣음. 발생 수 +0. |

### E1 — provenance derived 범위 (4건)

좁은 쪽도 FAIL. 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. sibling 부재 단언은 실제보다 좁다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | Sibling handling | 「`.verification.md` is not present」. `find`로 파일 존재. | 존재·withhold 처분으로 교체. sibling-only live family / live Primary geometry / live root / live heading size는 본문에 승격하지 않음(B1). |
| 9 | Portable derived-editorial scope 헤더 | 46 complete / 46 data rows. | **49** / **49**. |
| 10 | inventory 행 | Select / Underline Tab / Segmented Tab 행 없음. Text Field·Error·Textarea·Toggle 행은 geometry만. 본문 삽입 뒤 줄 번호도 구버전. | 3행 신설(`:427` `:567` `:589`). 4행에 L/S 역할 판단을 추가. 나머지 행 줄 번호를 재실측 줄에 맞춤. |
| 11 | Byte-form `#ffffff` | `canvas` / `on-primary` 두 키만. 같은 hex가 Secondary·input·card·modal·segmented-active bg와 Primary·toast·toggle-thumb text로도 붙는다. | 그 컴포넌트 키 귀속을 세 번째 YAML color key가 아니라고 원장에 적음. |

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문을 고친 뒤 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 12 | YAML identity `#534DFF` | DESIGN dest **23**. 실측 **24** (`:86`에 2회). 줄 수 계수. | dest **24** + 줄 목록(86x2). |
| 13 | `prose-derived` | P dest **15**. 실측 **16** (`:61`에 2회). | P dest **16** at 20/59/61x2/92–108. |
| 14 | homepage URL | P dest **4**. Sibling handling이 URL을 한 번 더 써서 실측 **5**. | P dest **5** at 13/42/48/65/119. |
| 15 | YAML `#534dff` | P dest **3**. Sibling handling이 소문자 hex를 한 번 더 써서 실측 **4**. | P dest **4** at 24/65/69/91. DESIGN dest **0** 유지. |
| 16 | A5a sibling | 「There is no sibling `.verification.md`」. 파일 존재. | 경로 직접 기재. sibling 추가 발행 카피 바늘 0(computed hex/px·family는 바늘 아님). |
| 17 | §2 footer `Tier 1` | 「provenance-only」. 실측 DESIGN **0** · P **0** · LOG mention **2**. | process-leak 라벨 dest 0/0. 산 값은 `getComputedStyle` P dest **3** at 48/65/119. |
| 18 | §11 / §10 줄 | 본문 삽입 전 줄(mission `:716`, tagline `:711/:716`, voice `702–716`). | mission **2** at 9/719. tagline **3** at 9/714/719. voice `705–719`. |
| 19 | §15 `ease-enter` 2차 목적지 | 로그는 본문 185 + P 84만. Named gaps `:755`에도 역할명이 있음(fitpet형 2차 목적지 누락). 곡선값 `cubic-bezier(0.0, 0.0, 0.2, 1)`은 185/84만. | `ease-enter` DESIGN dest **2** at 185/755 · P dest **1** at 84. 곡선값 dest **1**/**1**. |
| 20 | B2a dest / F2 | dest **46** = inventory **46**. F2가 구 dest를 고정. | dest **49** = inventory **49**. F2를 본문 수정 후 `grep -o \| wc -l` 재실측으로 고침. |

B3 전문 주장은 `DESIGN.md:189`에 transition properties · animation name · duration · easing · reduced-motion behavior가 실재하므로 유지.

Destination SHA `3faac2833a4b6297c81d131242ebd0fb1dfd1c810c9e3b2960cc746015ed24e0` (DESIGN). 줄 수 DESIGN **759** (착수 756 → 한정 3줄 신설; 4건은 기존 줄에 접힘).

## 범위 밖 관찰

- **A1 키 경로.** YAML `tokens.components` 18레코드의 type/bg/fg/radius/padding/font/use/active가 대응 블록에 행으로 있다. `tab-underline.active` / `tab-segmented.active`는 §4 Active text·Indicator / Active 행으로 분해돼 값이 그 블록에 있다(icook형 타 블록 hex 차용 아님). colors 20 path, spacing 8, rounded 4, shadow 4, typography 11 roles 행 보존. 복원 없음.
- **A5a.** gate `compared` 21 < `candidates` 275. 손 대조 발행 카피 24 생존. 라틴 발행 카피 `digitize all economic activity` SRC 3 / DES 1, `let's implement a future full of hope` SRC 1 / DES 1. 손실 안 보임. `verdict: PASS`는 바늘 21개에 대한 것이지 카피 전수 보존이 아니다.
- **B1 sibling 전용.** sibling-only: `TazuganeGothicStdN-Regular` SIB 2 / SRC 0 / DES 0; live root `#000000` SIB 1 / DES 0; live Primary `border-radius 9999px` / `font 16px / 400`(본문 Primary는 소스 8px·44px·15px/600, `lg` 52px는 소스 size scale). 구조 분류(`heading: 16px / 400`)도 본문에 사실로 안 들어갔다. 원장 withhold만 고침.
- **D2a.** 본문·provenance Item에 이름·나이·도시·동기(`approval queues`, `consumer-cute`, `Engineering candidate`)·소속 분류 0. Audience `finance and accounting teams` / recruiting·investor는 원본 §10·§11 독립 문구. **로그 D1/D2a 절이 삭제 처분 행에 식별자를 다시 열거**한다(dest **0** 증명용 재수록). 당시 범위 밖이라 로그에서 이름을 지우지는 않음. 2026-08-29 의미 검토 FAIL 3 개정에서 무식별 표기로 고침.
- **E2d.** provenance `:61` 「portable body does not contain `prose-derived`」는 DESIGN dest 0이 참이고 분모는 본문이다. 「세 파일 어디에도 없다」형 자기부정은 없음. 곡선 생략 행은 곡선값을 처분으로 이름할 뿐 부재를 세 파일 전부에 단언하지 않는다.
- **D2a 무식별 원장 본문**은 이름 없이 3인·필드 종류만 적혀 있다.
- **충돌 처리.** identity `#534DFF`와 YAML `#534dff`는 양쪽 보존. prose-only hex는 일관되게 `No YAML color key`. toast 0.16과 standard 0.10은 두 표기. 자리마다 다른 충돌 정책은 없음.
- **모션 곡선.** 원본 §15 곡선값은 생략 문장 `:185`에 인용된 채 역할만 Foundations에 남음(T2 관례). 없는 규칙을 합성하지 않음.
- **토큰·표·applicability·구조는 수정하지 않음.**

AUDIT_DONE fixes=20

---

## E1 1:1 only — 2026-08-29

대상: `docs/design-md-weight/migrated/layerx/{DESIGN.md,provenance.md,migration-log.md}`
원본 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정.
착수: `node scripts/check-limiter-ledger.mjs layerx` → 본문 **48** / 원장 **50** (142–192) MISMATCH.
체커는 완전형 세 조각이 **같은 줄**에 있는 본문 줄을 세고, 원장 절 `## Portable derived-editorial scope`의 `|` 데이터행을 센다. 헤더 첫 셀이 `(#|no.|section|location|위치|절|항목)`가 아니면 헤더도 데이터로 잡힌다.

완전형 정의(세 조각이 한 문장): `derived editorial … inference` (또는 task model / state specification 변형) + `not LayerX-authored` + `separately published`.

### 원장 50행(142–192) 판정

체커가 센 50행 = 헤더 142 + 데이터 144–192 (구분행 143은 스킵). 각 데이터행의 본문 자리를 문장 단위로 실측했다.

| P행 | 원장 위치 (착수 줄번호) | 본문 자리 | 판정 | 이유 |
|---|---|---|---|---|
| 142 | 헤더 `Portable location` | 없음 | **과잉(데이터 아님)** | 표 머리말. 완전형 문장 없음. 첫 셀을 `Location`으로 바꿔 스킵 정규식이 받게 함. 표 자체는 지우지 않음. |
| 143 | 구분행 | — | 스킵 | 체커가 이미 제외. 50에 안 들어감. |
| 144 | Scope ¶2 (`11`) | `:11` 완전형 1문장 | 유지 | 세 조각 한 문장. |
| 145 | Scope ¶3 (`13`) | `:13` | 유지 | 동일. |
| 146 | Scope ¶4 (`15`) | `:15` | 유지 | 동일. |
| 147 | Primary tasks (`21`) | `:21` | 유지 | 동일. |
| 148 | Audience (`30`) | `:30` | 유지 | 동일. |
| 149 | Distinctive traits (`34`) | `:34` | 유지 | 동일. |
| 150 | Principles (`46`) | `:46` | 유지 | 동일. |
| 151 | Application rules (`59`) | `:59` | 유지 | 동일. |
| 152 | Avoid (`71`) | `:71` | 유지 | 동일. |
| 153 | Semantic color (`86`) | `:86` | 유지 | 동일. |
| 154 | Semantic color indigo (`116`) | `:116` | 유지 | 동일. |
| 155 | Evidence-domain (`127`) | `:127` | 유지 | 동일. |
| 156 | Spacing (`144`) | `:144` | 유지 | 동일. |
| 157 | Shape (`157`) | `:157` | 유지 | 동일. |
| 158 | Elevation (`171`) | `:171` | 유지 | 동일. |
| 159 | Motion overshoot (`187`) | `:187` 문장 1 | **유지 + 줄 분리** | 완전형 한 문장(overshoot / motion specification). 같은 줄에 문장 2가 붙어 체커가 두 문장을 1로 셈. 문장 경계에서 줄을 나눔. 한정 문구는 추가하지 않음. |
| 160 | Motion gate (`187`) | `:187` 문장 2 → `:188` | **유지 + 줄 분리** | 완전형 한 문장(curve omit / five-kind gate / UI specification). 문장 1과 다른 문장이므로 합치지 않음. 분리 후 `:188`로 재실측. |
| 161 | Font evidence (`197`) | `:198` | 유지 | 줄번호만 +1. |
| 162 | Family (`216`) | `:217` | 유지 | 줄번호만 +1. |
| 163 | Type roles (`220`) | `:221` | 유지 | 줄번호만 +1. |
| 164 | Conventions (`236`) | `:237` | 유지 | 줄번호만 +1. |
| 165 | Type roles sizes (`238`) | `:239` | 유지 | 줄번호만 +1. |
| 166 | Assets favicon (`242`) | `:243` | 유지 | 줄번호만 +1. |
| 167 | Assets imagery (`243`) | `:244` | 유지 | 줄번호만 +1. |
| 168 | Capture record (`268`) | `:269` | 유지 | 줄번호만 +1. |
| 169 | Primary (`284`) | `:285` | 유지 | 줄번호만 +1. |
| 170 | Secondary (`309`) | `:310` | 유지 | 줄번호만 +1. |
| 171 | Ghost (`333`) | `:334` | 유지 | 줄번호만 +1. |
| 172 | Danger (`357`) | `:358` | 유지 | 줄번호만 +1. |
| 173 | Text Field (`382`) | `:383` | 유지 | 줄번호만 +1. |
| 174 | Error input (`405`) | `:406` | 유지 | 줄번호만 +1. |
| 175 | Select (`427`) | `:428` | 유지 | 줄번호만 +1. |
| 176 | Textarea (`443`) | `:444` | 유지 | 줄번호만 +1. |
| 177 | Standard Card (`465`) | `:466` | 유지 | 줄번호만 +1. |
| 178 | Featured Card (`478`) | `:479` | 유지 | 줄번호만 +1. |
| 179 | Compact Card (`491`) | `:492` | 유지 | 줄번호만 +1. |
| 180 | Brand Badge (`504`) | `:505` | 유지 | 줄번호만 +1. |
| 181 | Success Badge (`529`) | `:530` | 유지 | 줄번호만 +1. |
| 182 | Underline Tab (`567`) | `:568` | 유지 | 줄번호만 +1. |
| 183 | Segmented Tab (`589`) | `:590` | 유지 | 줄번호만 +1. |
| 184 | Toast (`613`) | `:614` | 유지 | 줄번호만 +1. |
| 185 | Dialog (`627`) | `:628` | 유지 | 줄번호만 +1. |
| 186 | Drawer (`648`) | `:649` | 유지 | 줄번호만 +1. |
| 187 | Toggle (`668`) | `:669` | 유지 | 줄번호만 +1. |
| 188 | Layout (`683`) | `:684` | 유지 | 줄번호만 +1. |
| 189 | whitespace (`685`) | `:686` | 유지 | 줄번호만 +1. |
| 190 | targets (`700`) | `:701` | 유지 | 줄번호만 +1. |
| 191 | voice (`705`) | `:706` | 유지 | 한 문장 안 `separately published` 2회(가이드 거절 + 한정). 완전형은 1. 합치거나 지우지 않음. 줄번호만 +1. |
| 192 | Named gaps (`753`) | `:754` | 유지 | 줄번호만 +1. |

합침 0. 삭제 0(헤더는 데이터 표기가 아니므로 셀 이름만 교정). 본문 한정 신설 0.

### 수정 후 실측

- 본문 완전형 줄 **49** = 원장 데이터행 **49** (144–192). `check-limiter-ledger.mjs` 1:1 OK.
- `derived editorial implementation inference` dest **49** / `not LayerX-authored` dest **49**.
- `--gate-only` `verdict: PASS`, `problems: []`.
- A5a 발행 카피 dest 불변(줄 분리만, 바늘 가감 없음). F2 dest **횟수** 불변. DESIGN 줄 목록만 재실측: homepage `203` · `#534DFF` 251/260/267/269/275/302/303/382/473/499/562/563/665 · favicon `243` · voice `706–720` · mission `720` · tagline `715/720` · states `255–267` · `ease-enter` `185/756` · B3 `190`.
- DESIGN SHA `207174e6403654d8a477f545f83ac09fa64c4bded986fbab49f5b09259ea4599`. 줄 수 759→760 (Motion 완전형 두 문장을 한 줄씩).

FIX_DONE layerx e1=2

---

## 개정 — 의미 검토 FAIL 3 (2026-08-29)

대상: `docs/design-md-weight/migrated/layerx/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정.

### 결함 1 — §11 고유 정체성 구절 (A1)

원본 `:524` 태그라인 수식 `engineer-led, mission-forward identity`를 Experience Scope `:9`에 복원. provenance Proof notes `:123`에 같은 구를 서사 색인으로 병기. 판정: 사실 인용, 한정 불필요. 태그라인 자체 dest 3은 유지.

### 결함 2 — §15 Easings Use · 시그니처 이징 짝 (A1 · 항목 3)

곡선값은 생략 문장 `:185`에 인용만 유지. Use 열 4칸을 Token|Use 표 `:189–192`에 원문 그대로 복원. 시그니처 3항에 `motion-* / ease-*` 짝 복원 (`:196` / `:197` / `:198`). Named gaps 역할명 `:770` 유지.

### 결함 3 — 로그 dest 0 증명용 식별자 재수록 (D2a)

`migration-log.md` D1/D2a 절에서 삭제 대상 식별자 3건의 dest 0 열거를 지움. 처분은 무식별(3인; 이름·나이·도시·소속 분류). 이 감사 기록 F3 범위밖 관찰의 같은 인용도 지움. 네 산출물 dest 0.

### dest 재실측 (`grep -oF -e '<패턴>' | wc -l`)

| 문자열 | DESIGN | P | L | AUD |
|---|---:|---:|---:|---:|
| `engineer-led, mission-forward identity` | 1 | 1 | 2 | 2 |
| `Appearing — modals, drawers, toasts, dropdowns` | 1 | 0 | 1 | 1 |
| `Leaving — dismissals, pops` | 1 | 0 | 1 | 1 |
| `Two-way — hover-lift, tab content, collapsibles` | 1 | 0 | 1 | 1 |
| `Hero reveals on scroll, featured-card entrances` | 1 | 0 | 1 | 1 |
| `motion-standard / ease-standard` | 1 | 0 | 1 | 1 |
| `motion-slow / ease-enter` | 1 | 0 | 1 | 1 |
| `motion-fast / ease-exit` | 1 | 0 | 1 | 1 |
| `motion-slow / ease-emphasis` | 1 | 0 | 1 | 1 |
| `ease-enter` | 4 | 1 | 3 | 6 |
| `cubic-bezier(0.0, 0.0, 0.2, 1)` | 1 | 1 | 2 | 2 |
| `#534DFF` | 24 | 10 | 4 | 6 |
| `prose-derived` | 0 | 16 | 2 | 4 |
| 삭제 식별자 3건 | 0 | 0 | 0 | 0 |

갱신한 로그 dest 행: YAML identity(homepage/`#534DFF`/favicon 줄) · §10 voice 줄 · §11 identity dest + mission/tagline 줄 · §14 states 줄 · §15 `ease-enter` 2→4 + Use 4칸 + 시그니처 짝 4 + B3 줄 · B2a/B3 줄 · F2 · D1/D2a 무식별.

`check-limiter-ledger.mjs layerx` → 본문 49 = 원장 49. `--gate-only` PASS. DESIGN SHA `54f142750aee8ba7ce4d97416e501ae6f0c29e4bec115c52e032db9db7658cb5`. 줄 수 760→774.

FIX_DONE layerx fixed=3 logdest=13
