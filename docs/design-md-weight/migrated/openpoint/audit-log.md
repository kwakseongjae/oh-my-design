# openpoint 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/openpoint/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/openpoint/DESIGN.md`
검증 sibling: `web/references/openpoint/.verification.md` — `find`로 경로 직접 확인. 존재함. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches`는 0이 아니라 미측정으로 두고, 그 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 UI 사양 없음(getdesign.md/openpoint 404, refero 0). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not OPENPOINT-authored or a separately published UI specification`을 요구한다. 기존 29건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 29 / 원장 29. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:152` "kept as duration tokens. They are not easing curves"는 세 번째 부류인데 `:171` 한정이 표 두 개 뒤의 conservative/functional·cookie·five-kind만 이름한다. Assets `:225` "do not replace them with invented brand-color decoration"은 `:224` favicon 한정 밖에 있다(kkday/kintone형). Event See-More `:274` 기하 분리는 Primary `:250`과 같은 종류인데 한정이 없다. Dropdown `:438` "Those writings stay unmerged"는 Elevation `:148`과 같은 종류인데 한정이 없다. Type-role `:220` 표 뒤 재진술은 `:200`과 표·원칙 블록을 사이에 둔다. Content `:550` "kept byte-exact"는 `:534` voice 한정과 `:586` gloss-beside 한정 밖에 있다.

토큰 값, 컴포넌트 표, 상태 applicability, 절 구조는 건드리지 않았다. DESIGN.md `wc -l` **625** 불변(한정을 기존 줄에 붙임). provenance 199→**205**.

## 수정 목록 (31건)

### B2a — 인접 한정 (본문 6건, 발생 수 +6)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:152` — Motion durations | "kept as duration tokens. They are not easing curves."는 세 번째 부류. `:171`은 표 두 개 뒤에서 conservative/functional·cookie·five-kind만 이름한다. | 같은 줄에 완전형. 발생 수 +1. |
| 2 | `DESIGN.md:220` — Type-role sizes | 표 뒤 "16px Body size is not `tokens.spacing.sm: 16`" 재진술. `:200`은 표 앞, `:218`은 원칙 제목만. | 같은 줄에 완전형. 발생 수 +1. |
| 3 | `DESIGN.md:225` — Assets photography | "do not replace them with invented brand-color decoration"는 세 번째 부류. `:224`는 favicon identity pointer만. | 같은 줄에 완전형. 발생 수 +1. |
| 4 | `DESIGN.md:274` — Event See-More keep-apart | 33px / `8px 24px`를 이 컨트롤 기하로 읽는 판단. Primary `:250`은 같은 종류에 한정이 있고 여기는 없다. | 같은 줄에 완전형(250과 동형). 발생 수 +1. |
| 5 | `DESIGN.md:438` — Dropdown unmerge | §9 overlay / YAML 배경 생략 / live `rgba(0, 0, 0, 0)`를 병합하지 않는 판단. Elevation `:148`은 같은 종류에 한정이 있다. | 같은 줄에 완전형. 발생 수 +1. |
| 6 | `DESIGN.md:550` — Published strings | "kept byte-exact"는 세 번째 부류. `:534`는 voice·tone table, `:586`은 reproduce/gloss-beside. 목록 머리에는 인접하지 않다. | 같은 줄에 완전형. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **35**, `not OPENPOINT-authored` **35**, `separately published UI specification` **35**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial` P dest **1** at 166 = Principles 행 mention). `migration-log.md` mention 1은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 67, 83, 108, 124, 137, 148, 152, 171, 181, 196, 200, 218, 220, 224, 225, 236, 250, 274, 438, 484, 489, 512, 534, 550, 584, 586, 620.

### E1 — provenance derived 범위 (7건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | 헤더 / 행 수 | 29 complete / 29 data rows. | **35** / **35**. 데이터 `provenance.md` 160–194. |
| 8 | Motion durations 행 | 없음. 본문 `:152` 신설. | 행 신설. |
| 9 | Type-role sizes 행 | 없음. 본문 `:220` 신설. | 행 신설. |
| 10 | Assets photography 행 | 없음. 본문 `:225` 신설. | 행 신설. |
| 11 | Event See-More keep-apart 행 | 없음. 본문 `:274` 신설. | 행 신설. |
| 12 | Dropdown unmerge 행 | 없음. 본문 `:438` 신설. | 행 신설. |
| 13 | Published strings 행 | 없음. 본문 `:550` 신설. | 행 신설. |

### E2 / E2a / E2c — 로그 목적지 (18건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 준수 주장은 본문 실재 시에만. 본문 한정 추가 후 dest를 재실측함(웨이브 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 14 | YAML identity 행 | Exact `logo.type: favicon`을 P 15로 적음. P 15는 표 분리 `logo.type` \| `favicon`. 정확 문자열은 P **26**. | DESIGN 224 · P **26**. 표 분리 P 15를 병기. |
| 15 | YAML metadata 행 | `live-extract` P dest **3** at 20/194. 194는 재배치 전 Proof. 실측 20 / inventory **160** / Proof **200**. 9에 2회. | 20/160/200. DESIGN dest **2** at 9×2. |
| 16 | YAML metadata 행 | `components_harvested` P dest **2** at 22/193. 재배치 후 Proof는 **199**. | 22/199. DESIGN dest **0**. |
| 17 | YAML colors 행 | canvas / on-primary를 `DESIGN.md` 101–102로 적음. 101은 Light Grey, 102는 Surface Light. | **99–100**, 108. |
| 18 | YAML rounded 행 | `full: 9999` dest **2** at 135/137. 137에 2회, Layout 508에 1회. 실측 dest **4**. | dest **4** at 135 / 137×2 / 508 (E2a). |
| 19 | YAML components 행 | `not in the token set` dest **5**. 232에 2회 + 라벨 4 = dest **6**. | dest **6** at 232×2 / 289 / 344 / 400 / 453. |
| 20 | §2/§4 footer 행 | Conflicts를 `provenance.md` 37로 적음. 37은 **Verified:** 전문. Conflicts는 **39**. Tier 1 48–49는 표제+빈 줄(URL은 50–51). Tier 2 53–54는 표제+빈 줄(행은 55–56). | Conflicts **39**. **Verified:** 37. Tier 1 URL 50–51. Tier 2 55–56. |
| 21 | §3 행 | 220·225 한정을 적지 않음. | 220 dest, 225 dest 추가. |
| 22 | §4 행 | 274·438 한정을 적지 않음. | 274 dest, 438 dest 추가. |
| 23 | §10 행 | Published strings를 546–582로 묶음. 546–548은 voice samples, 목록은 552–580, 550이 목록 한정. | 546–548 / 550 / 552–580 / 582. |
| 24 | §11 행 | `6,800` P dest **1** 줄 없음. 실측 P **202**. DESIGN 13에 2회. | DESIGN dest **2** at 13×2 · P dest **1** at 202. |
| 25 | §12 행 | inventory 29=29. | **35**=**35**, `provenance.md` 160–194. worker-close 29는 이관 시점 측정으로 병기. |
| 26 | §15 행 | duration-not-curve 한정·cubic-bezier P 줄을 적지 않음. 표 156–159는 150/250/300/2000ms 네 행으로 맞음 — 유지. | B2a at 152. cubic-bezier DESIGN dest **1** at 166 · P dest **1** at 152. |
| 27 | Key-path 행 | `tokens.colors.primary` dest **3** at 9/83/87. 9에 2회. 실측 dest **4**. | dest **4** at 9×2 / 83 / 87. |
| 28 | Key-path 행 | `9999`를 Shape만으로 적음. Layout 508 2차 목적지 누락. | dest **4** at 135 / 137×2 / 508. |
| 29 | C2 / A1b 행 | `not in the token set` dest **5**. | dest **6**. |
| 30 | Pass 1 / Pass 2 | Count **29** = inventory **29**. dest를 착수 숫자로 남김. | **35** = **35**. 신설 6을 목록에 반영. B3는 173이 다섯 종류+게이트+부분확인 거부를 담고 625가 다섯 종류를 재진술할 때만 주장. |
| 31 | 헤더 SHA | worker-close만. | Auditor-close `1e11d69e078801f316f6abccc007bfc721731aa0a3627f833f3d359a2f6c90dd`. |

Destination SHA `07844cdf…` → `1e11d69e078801f316f6abccc007bfc721731aa0a3627f833f3d359a2f6c90dd` (한정 신설 후). 줄 수 DESIGN `wc -l` **625** 불변. provenance 199→**205**.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — OPENPOINT, 統一超商紅利點數平台, 統一超商股份有限公司, 「OPENPOINT優惠活動」, 「查看更多優惠」, 「登入」, 「OPENPOINT點數說明」, YAML `use`/`font` 바이트, 푸터 저작권.
- **관측 기술** — live hex·치수·`Primitive type`·unitless `1.5`/`1`·`full: 9999`·카드 그림자·38px/33px/247px.
- **편집적 해석·인과 판단** — 두 URL을 계약 표면으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, duration≠easing, 사진≠장식, 기하≠spacing step, 표기 비병합, kind/applicability, 보이스·byte-exact 규칙.

세 번째 부류 중 29곳은 착수 시 인접 완전형이 있었고, 위 6곳은 한정이 없어 그 자리에 붙였다. Scope·Content·Principles 안팎을 같이 보았다.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 DS 없음, v12 전제 주석).
- Scope ¶1 계약 범위 — `:9` 한정이 inspected URL / `primary_color` / `live-extract`를 이미 이름함.
- Scope ¶2 분위기 — `:11` 한정이 cheerful/teal/app-native 읽기를 이름함.
- Scope ¶3 narrative-not-token — `:13` 한정이 그 분류를 가리킴.
- Applicability 표 Reason 칸 — Core §4.4 역할 판정. `:236`이 procedure·kind·applicability를 덮음. 상태 applicability는 이 감사의 수정 범위 밖.
- B3 준수 주장 — `DESIGN.md` 173이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음. 625는 다섯 종류+게이트. E2c 유지.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/openpoint/DESIGN.md` · sibling `.verification.md` — 읽기만.
- Motion 표 156–159는 150/250/300/2000ms 네 값이 맞다. duration-not-curve 한정은 152에 붙였고 표 범위는 고치지 않았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 35 | 1 | 1 |
| `not OPENPOINT-authored` | 35 | 0 | 1 |
| `separately published UI specification` | 35 | 0 | 1 |
| inventory 데이터 행 | — | 35 | — |
| `#8081ff` | 22 | 11 | (mention) |
| `9999` | 4 | 2 | (mention) |
| `not in the token set` | 6 | 1 | (mention) |
| `tokens.colors.primary` | 4 | 4 | (mention) |
| `https://www.openpoint.com.tw` | 4 | 10 | (mention) |
| `live-extract` | 2 | 3 | (mention) |
| `components_harvested` | 0 | 2 | (mention) |
| `OPENPOINT點數說明` | 1 | 2 | (mention) |

audit-log·migration-log 등장은 mention이지 use가 아니다.

## 범위 밖 관찰

- **A5a.** 로그 `compared` 20 / `candidates` 184. 차 164는 기계가 안 본 분모. 이관본 평균 4.4% 대비 20/184 ≈ 10.9%, 50%를 넘지 않는다. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다. 발행 라틴(`See more promotions` DESIGN dest 2 / `Login` dest 1 / `All rights reserved` dest 1)은 본문에 있다. 발행 라틴 손실은 눈에 띄지 않음. 고치지 않음.
- **A1 키 경로.** YAML `tokens.components` 9레코드의 type/bg/fg/radius/padding/font/use 및 기록된 `active`/`focus`/`shadow`/`border`가 각 대응 블록에 **행으로** 있다(`button-primary` `:241–249`, `button-cta` `:265–272`, `event-card` `:307–315`, `card-text` `:332–337`, `badge-teal` `:377–383`, `nav-link` `:408–414`, `dropdown-item` `:430–436`, `input-default` `:351–359`, `gradient-badge` `:387–394`). icook형 소실 없음. 복원 없음.
- **A3 (키 경로 밖).** 원본 §4 **Disabled / Secondary (Muted Purple)** 밴드(`Use: Disabled or deactivated action states`)는 산출에 독립 블록이 없다. `#9696ad`/`#ffffff`는 Muted Badge와 Primary disabled 행에 남아 값 grep은 통과한다. YAML `tokens.components` 키가 아니므로 A1 복원 대상이 아니다. 고치지 않음.
- **B1.** sibling 전용: `index.css` DESIGN dest 0 / P dest 4; `line-height: 60px` DESIGN dest 0 / P dest 1; `.t-purple` DESIGN dest 0 / P dest 1; `.cookie-popin` DESIGN dest 0 / P dest 1; H2 `height: 50px` DESIGN dest 0 / P dest 1. 본문에 사실·구조 분류로 승격되지 않음. `portal H2` 세 파일 dest 0. YAML h1 `lineHeight: 1.5`는 60px로 치환되지 않음.
- **D2a.** 식별자(`林雅婷` / `陳建宇` / `黃小芸` / `台北市` / `台中市` / `高雄市`) DESIGN/P/로그 dest 0. 동기(`Office worker` / `small business owner` / `University student` / `gift certificates` / `airline miles`) DESIGN dest 0. 소속 분류 신조어 dest 0. Audience는 원본 그룹 `Taiwan's mobile-first consumer who shops at 7-ELEVEN multiple times per week`만. 처분 행은 `페르소나 3인(이름·나이·도시·동기·소속 분류 포함)`으로 무식별. 로그 D1/D2a 절의 `uniopen` / `PRIMA` dest **0**은 원본 §13 전용 제품명 측정이며 이름·나이·도시 재수록은 아니다.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. `[FILL IN]` 행은 **원본** 부재를 적고 산출 부재를 단언하지 않는다. 로그 dest 0은 DESIGN을 분모로 두고 로그 자신을 넣지 않는다.
- **E1 hex 귀속 (krafton형, 보고만).** `#ffffff`는 canvas(`:99`) / on-primary(`:100`) / 버튼·배지 Text / Event Card Background / Header background로 역할이 갈린다. canvas↔on-primary 분리는 원장 `:83`·`:108`에 있다. 컴포넌트 fg/bg는 YAML 필드. 고치지 않음.
- **충돌 처리 일관성 (웨이브 40 항목 5).** canvas/on-primary 두 키 유지, hover `0.20`/`0.2` 비병합, `50`/`50px+` 두 표기 유지 — 한 문서 안에서 비병합이 같다. 자리마다 다른 처분은 보이지 않음.

AUDIT_DONE fixes=31

## 개정 — 의미 검토 FAIL 2 (2026-09-02)

대상: `docs/design-md-weight/migrated/openpoint/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 35=35 불변. DESIGN `wc -l` 625 불변. provenance 205 불변.

### 결함 1 — A1 · 항목 9·11 — Event Card Role 융합 / §4 use 절단

원본 §4 `:160` `Promotion/event listing cards; image fills 48% height, text area below`를 Event Card Role `:307`에 복원. YAML `use` `:49` `Promotion/event listing card`는 Token-set use `:315`에 유지. YAML 단수 머리에 §4 치수를 붙인 융합문 dest **0**.

### 결함 2 — A1 · 항목 9·11 — Default Input Role 융합 / §4 use 절단

원본 §4 `:180` `Member center login/register forms`를 Default Input Role `:351`에 복원. YAML `use` `:54` `Member center form fields`는 Token-set use `:359`에 유지. `login/register`와 `form fields`를 합친 융합문 dest **0**.

`grep -oF -e` 실측 (파일별; 개정 후; audit-log 이 절 기록 전):

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `Promotion/event listing cards; image fills 48% height, text area below` | 1 | **1** | 0 | 1 |
| `Promotion/event listing card; image fills 48% height, text area below` | 0 | **0** | 0 | 0 |
| `Promotion/event listing cards` | 1 | **1** | 0 | 1 |
| `Promotion/event listing card` | 2 | **2** | 0 | 2 |
| `image fills 48% height` | 1 | **1** | 0 | 1 |
| `48% height` | 2 | **1** | 1 | 2 |
| `Member center login/register forms` | 1 | **1** | 0 | 1 |
| `Member center login/register form fields` | 0 | **0** | 0 | 0 |
| `Member center form fields` | 1 | **1** | 0 | 1 |
| `login/register` | 1 | **1** | 0 | 1 |

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML `tokens.components` | Event Card / Default Input Role DESIGN | 융합 1+1 | **1** at 307 / **1** at 351 (§4 Use) |
| §4 Component Stylings | `Promotion/event listing cards; image fills 48% height, text area below` DESIGN | 0 | **1** at 307 |
| §4 Component Stylings | `Promotion/event listing card` DESIGN | 2 (융합 Role 접두+Token-set use) | **2** at 307/315 (Role `cards` 접두+Token-set use; 명시) |
| §4 Component Stylings | `Member center login/register forms` DESIGN | 0 | **1** at 351 |
| §4 Component Stylings | `Member center form fields` DESIGN | 1 at 359 | **1** at 359 (불변; 명시) |
| Unique-phrase contrast | restored §4 Use as Role | Restored 0 | dest **1** at 307 / dest **1** at 351 |
| Header | DESIGN SHA | `1e11d69e…` | `a29b489f5d70fb5d08944b5da5ed5472feae8620a920f6211b4ce8cadcf974a1` |

B2a `derived editorial implementation inference` DESIGN dest **35** 불변. YAML `use` 15/15 dest 불변. `not in the token set` dest **6** 불변. 융합문 두 종 DESIGN dest **0**.

`node scripts/check-limiter-ledger.mjs openpoint` → 본문 **35** / 원장 **35** (160–194) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs openpoint` → use 15/15 (100%) 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand openpoint --gate-only` → PASS.

FIX_DONE openpoint fixed=2 logdest=7

---

## 개정 — 의미 검토 FAIL 1 (A1 · sibling 측정 승격)

대상: `docs/design-md-weight/migrated/openpoint/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 35=35 불변. DESIGN `wc -l` 625 불변. provenance 205 불변.

### 결함 1 — A1 · 항목 4·9 — Dropdown Sub-Item sibling 측정 승격 / §9 아이템 fill 소실

원본 YAML `dropdown-item` (`:53`)은 `bg`가 없다. 원본 HTML 주석 Nav dropdown item은 color/radius/padding/font만 적는다. 원본 §9 `:309`는 `dark overlay background`와 Items as `<a>` with `#8081ff background`를 병기한다.

산출 `DESIGN.md:438`이 sibling `.verification.md:17` 전용 `background-color: rgba(0, 0, 0, 0)`와 body 주석의 `transparent`를 본문 세 번째 표기로 승격했고, §9 아이템 fill `#8081ff background`는 없었다.

본문에서 sibling 측정·`live transparent background`를 빼고, §9 overlay / §9 `#8081ff background` / YAML `bg` 생략을 병합하지 않고 병기. sibling 전사는 provenance `:74`(body) · `:78`(dropdown, sibling-only 표기)에만 둔다.

`grep -oF -e` 실측 (파일별; 개정 후; audit-log 이 절 기록 전):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `background-color: rgba(0, 0, 0, 0)` | 0 | 2 | **0** | **2** | 4 |
| `rgba(0, 0, 0, 0)` | 0 | 2 | **0** | **2** | 5 |
| `transparent` | 0 | 1 | **0** | **1** | 4 |
| `live transparent background` | 0 | 0 | **0** | **0** | 3 |
| `#8081ff background` | 1 | 0 | **1** | **1** | 5 |
| `#8081ff` | 30 | 7 | **23** | **12** | 8 |

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML identity | `#8081ff` DESIGN / P | 22 / 11 | **23** / **12** |
| §4 Component Stylings / §9 | `#8081ff background` DESIGN / P | 0 / 0 | **1** at 438 / **1** at 186 |
| Sibling `.verification.md` | `background-color: rgba(0, 0, 0, 0)` DESIGN / P | 1 / 2 | **0** / **2** at 74/78 |
| Sibling `.verification.md` | `rgba(0, 0, 0, 0)` DESIGN / P | 1 / 3 | **0** / **2** |
| Sibling `.verification.md` | `transparent` DESIGN / P | 1 / 1 | **0** / **1** at 74 (body page bg) |
| Sibling `.verification.md` | `live transparent background` DESIGN / P | 1 / 0 | **0** / **0** |
| Header | DESIGN SHA | `a29b489f…` | `efbed5a7eb722a2667b7143668ab25620ba513d66bfe5b58dfb7078a28d7a816` |

B2a `derived editorial implementation inference` DESIGN dest **35** 불변. YAML `use` 15/15 dest 불변. `not in the token set` dest **6** 불변. Dropdown 표 구조·상태 applicability 불변.

`node scripts/check-limiter-ledger.mjs openpoint` → 본문 **35** / 원장 **35** (160–194) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs openpoint` → use 15/15 (100%) 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand openpoint --gate-only` → PASS.

FIX_DONE openpoint fixed=1 logdest=7
