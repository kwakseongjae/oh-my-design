# MongoDB 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mongodb/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mongodb/DESIGN.md`
검증 sibling: `web/references/mongodb/.verification.md` — `find web/references/mongodb -type f`와 `test -f web/references/mongodb/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches found`는 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 DS 있음(LeafyGreen, `ds.type: system`, `https://www.mongodb.design`). B2a 예문 전제(v12)가 깨지므로 toss형 「부재 주장」을 요구하지 않는다. 본문 22건은 모두 `not MongoDB-authored or taken from a separately published UI specification, including the published LeafyGreen documentation`로 class를 닫는다. 형태만으로 FAIL하지 않음.

착수 실측: 본문 완전형 22 / 원장 inventory 데이터 행 22. 1:1. DESIGN.md SHA-256 `29a67efeaa47e741a6fde8d2c0f8b259cea74be01eb022de87b7f07ed68c61df` (워커-close와 동일 — 본문은 수정하지 않음).

문장 분류에서 세 번째 부류 22곳은 인접 완전형이 있었다. 본문에 한정을 신설하지 않았다. 결함은 E2 로그 dest 불일치와 E1 claim-ledger 귀속 누락이다.

## 수정 목록 (10건)

### B2a — 인접 한정 신설 (본문 0건)

없음. Scope·Primary tasks·Audience·Distinctive traits·Principles·Application rules·Avoid·Semantic color·Spacing·Shape·Elevation·Motion·Font evidence·Family·Type roles·Assets·Capture record·Layout·Content·Named gaps 22곳 모두 인접 완전형. 토큰 값·컴포넌트 표·상태 applicability·절 구조는 손대지 않음.

### E1 — provenance derived / claim 범위 (3건)

Derived-editorial inventory는 22=22이라 행을 늘리거나 줄이지 않음. 같은 hex가 서로 다른 역할로 붙은 분리가 claim ledger에 없거나 좁았다 (krafton형). 본문 값은 그대로 두고 원장 목적지 칸만 실제에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 1 | `provenance.md` claim ledger `tokens.colors.canvas` | 휴대 목적지를 “local Canvas observation”만 적음. 본문은 `#ffffff` dest **5**: Canvas 86, feature-panel Background 220, token-set `bg` 226, icon-control Background 268, LeafyGreen utility Text 293. 배경과 전경이 갈라지는데 원장이 좁음. | 목적지에 feature-panel background · documentation icon-control background · LeafyGreen utility-control text를 병기. |
| 2 | 같은 표 `tokens.colors.forest-chrome` | “Forest Green chrome”만. 본문 `#00684a` dest **6** 안에 announcement-strip background와 documentation icon-control text가 같이 있다. `docs-muted` 행은 이미 이중 쓰임을 적었는데 forest-chrome만 빠짐. | icon-control text kept on that component를 병기. |
| 3 | 같은 표 `tokens.colors.ink` | “local Ink observation”만. 본문 `#000000` dest **4** 중 feature-panel Text/`fg`가 있다. | feature-panel text (`fg`)를 병기. |

Inventory 헤더 `22 complete B2a` / `This table is 22 data rows`는 본문 실측과 일치. 건드리지 않음.

### E2 / E2a / E2c — 로그 목적지 (7건)

본문이 아니라 로그만 고침. `grep -oF` 재실측. 로그 mention은 use가 아니다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | YAML `tokens.colors` 행 | `#00684a` dest **5** / `#e7eeec` dest **3** / `#3d4f58` dest **3**. `grep -oF` DESIGN **6** / **4** / **4**. 줄 수(`grep -c`)로 세면 과소다. Semantic color B2a 73이 한 줄에 hex를 반복한다. | dest **6** / **4** / **4**. `#e8edeb`(YAML 키 아님) dest **3**을 같은 행에 명시. |
| 5 | YAML typography + §3 표 행 | “LeafyGreen page title `48px` dest **4**”. `48px` DESIGN **4**는 page-title size **1** (167) + section-heading line-height **1** (165) + feature-panel padding **2** (224, 226). 값 grep을 page-title 보존으로 읽은 icook/krds형. | 네 자리를 역할별로 나눔. `0.16px` dest **2**를 tracking `0.16` dest **4** 옆에 실측으로 적음. |
| 6 | §3 Typography Rules 행 | `SIL OFL 1.1` dest **1**. DESIGN dest **0** (fitpet형 2차 목적지). 실제는 `SIL Open Font License 1.1` dest **1** (139), B2a의 `OFL 1.1` dest **1** (143). Evidence 범위를 133–141로 적어 B2a 143을 빠뜨림. | 실제 두 문자열과 dest. `SIL OFL 1.1`은 DESIGN dest **0**이라고 분모를 DESIGN으로 명시. 범위 133–143. |
| 7 | §4 Component Stylings 행 | `#e8edeb` dest **2** — DESIGN **3** (73, 88, 270). Feature panel 목적지를 `"15"`로 적어 capture 15와 다른 15를 섞을 수 있음. | `#e8edeb` dest **3**. 셀렉터를 `home::[data-omd-capture="15"]` 등 전문으로. `50px` dest **4**, icon shadow dest **2**, `1px 6px` dest **1** 재실측 유지. |
| 8 | §10 Voice & Tone 행 | 목적지 325–339. 340 `Reproduce those strings byte-exact rather than translating or re-casing them.`가 빠져 범위가 짧다. | 325–340. `Get Started` dest **3** 등은 본문 불변이므로 재실측 그대로. |
| 9 | §14 States 행 | 인용 “These states are intentionally omitted rather than reconstructed from public baseline screenshots.” dest **2**. DESIGN 그 전문 dest **1** (183). 377은 “They are …”로 주어만 다름. | 전문 dest **1**. 변이 dest **1**. 공통 어간 dest **2**. |
| 10 | §15 Motion 행 | 두 문장 전문 dest **2**. DESIGN 전문 dest **1** (123). 383은 `No motion token is asserted`만. | 전문 dest **1**. 부분문자열 dest **2**. |

B3 다섯 증거 종류 문구 `transition properties, animation name, duration, easing, and reduced-motion behavior` dest **2** (127, 383)는 맞다. 전문(부분확인 거부 + 벤더 문서 매칭 거부)은 127에만 있다. E2c 준수 주장은 127 실재로 유지.

규칙 대조 B2/B2a `dest inference **22** = not-authored **22** = provenance inventory **22**`는 본문 미수정이라 그대로.

A5a dest 표(`Get Started` dest **3** 등)는 본문 불변 → 재실측 동일.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 4항·Do/Don't 본문 — 원본 §12/§7. 머리 한정이 항목을 덮음. 발행 1차 DS가 있어 LeafyGreen을 이름 붙여 닫는 적응형(v12 전제 주석).
- Scope ¶1 계약 범위 — `:9` 한정이 three inspected pages as token surfaces · values attached to the establishing surface · named sources that do not automatically supply tokens를 이미 이름함. “keeps those three public domains separate rather than treating the public website as an authenticated Atlas UI”는 원본 §1 문장이며 Distinctive traits `:37`이 Domain boundary 라벨을 한정함.
- Scope ¶2 type-by-role = LeafyGreen official product-use — 공식 타이포 가이던스 귀속이지 편집 추론이 아님. Font evidence `:143`이 그 class를 닫음.
- Type roles “Neither writing was chosen as a replacement” / Spacing·Shape 키 경로 분리 — A1 값 보존, 브랜드 해석 아님.
- Capture record 상태 절차 — `:187` 한정이 role-based decision procedure · kind · applicability를 덮음. 상태 Reason 칸은 C 조항 영역, 이 감사의 수정 범위 밖.
- Named gaps 불릿이 Capture record/Motion을 재진술하는 것 — 절 머리 `:374`가 목록 구성을 한정함. 원본 미해상 필드를 새 도메인으로 열거하지 않음.
- `intentionally omitted rather than reconstructed` (원본 §14) — 합성 금지 자기 진술. 웨이브 39 kmong 관례. 되살리지 않음.
- Motion에 duration/easing 없음 — 원본 §15에 값이 없다. 없는 채로 옮긴 것이 정답.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조, 원본 `web/references/mongodb/DESIGN.md` · sibling `.verification.md` — 손대지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — MongoDB / LeafyGreen, `Get Started`, `Our journey`, North Star 문장, `Empower innovators by unleashing the power of software and data.`, Euclid Circular A / MongoDB Value Serif / Source Code Pro, Spring Green / MongoDB Navy / Forest Green, 창립 연도·10gen·Atlas 공식 서사, YAML `use` 바이트.
- **관측 기술** — 라이브 hex·치수·`interactionCount: 0`·`1440×900`·capture 셀렉터·unitless `72`/`16`/`20`/`9999`·컴포넌트 필드 행.
- **편집적 해석·인과 판단** — 세 페이지를 계약 표면으로 읽기, 서사≠토큰, 과제/청중 선정, 원칙·Do/Don't, hex 병합 거부, kind/applicability, simpleicons 분류, 바이트 재현 요구.

세 번째 부류 22곳은 착수 시 인접 완전형이 있었고 신설하지 않았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 22 | 1 | 0 |
| `not MongoDB-authored` | 22 | 1 | 0 |
| `taken from a separately published UI specification` | 22 | 1 | 0 |
| `including the published LeafyGreen documentation` | 23 | 1 | 0 |
| inventory 데이터 행 | — | 22 | — |
| `#00684a` | 6 | 3 | 2 |
| `#e7eeec` | 4 | 1 | 2 |
| `#3d4f58` | 4 | 1 | 2 |
| `#e8edeb` | 3 | 1 | 2 |
| `#ffffff` | 5 | 0 | 1 |
| `SIL OFL 1.1` | 0 | 0 | 1 |
| `SIL Open Font License 1.1` | 1 | 0 | 1 |
| `OFL 1.1` | 1 | 1 | 1 |
| 전문 These states are intentionally omitted… | 1 | 0 | 1 |
| 전문 No duration, easing curve… No motion token… | 1 | 0 | 1 |
| `No motion token is asserted` | 2 | 0 | 2 |
| B3 다섯 종류 문구 | 2 | 1 | 1 |
| `Get Started` | 3 | 0 | 2 |

`including the published LeafyGreen documentation` DESIGN **23**: B2a 22 + Motion 게이트 문장 127의 벤더-문서 매칭 거부 1. 23번째 한정이 아니다.

provenance.md / migration-log.md의 패턴은 mention이지 본문 use가 아니다. `SIL OFL 1.1` LOG 1은 「DESIGN dest 0」을 적는 처분 언급이다.

DESIGN.md SHA 불변 `29a67efe…`. provenance `301e734ef7be115884bf57cc3cba5f3c72c8846b5e471f4e32c6f16ebe2cd074`. migration-log `118fc06e53117a473531aced70fac05753b7434cc683977b2bb84b3b80920751`.

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** `latin-copy-audit.mjs --brand mongodb`: candidates **35**, lost **2** (medium) `interactions[]`, `omd:add-reference UPDATE`. 둘 다 sibling 파이프라인/메서드 문자열. DESIGN dest **0** / sibling dest **1**. 발행 카피가 아니다. 손 대조 발행 라틴 — `Get Started` DESIGN **3**, `Our journey` **1**, `The needs of developers have always served as the company’s North Star.` **1**, `Empower innovators by unleashing the power of software and data.` **1**, `Euclid Circular A` **12**, `MongoDB Value Serif` **7**, `Source Code Pro` **16**, YAML use 3종 각 **1** — 본문 생존. 눈에 띄는 발행 라틴 카피 손실 없음. `verdict` 분모는 대조한 바늘이지 「카피 보존됨」이 아니다. 고치지 않음.
- **B1.** sibling 전용: `rgb(232, 237, 235)` DESIGN **0** / provenance **3** / sibling **2**; `data-omd-capture="23"` DESIGN **0** / provenance **1**; `aria-selected` DESIGN **0** / provenance **1**; `ChartsIcons` DESIGN **0** / provenance **1**; `19 source URLs` DESIGN **0** / provenance **1**; Akzidenz `55` DESIGN **0** / provenance 127만; `public header primary action` / `large feature panel` / `dark compact utility control` / `small bordered documentation control` / `circular documentation icon control` DESIGN **0** / 원본 **0** / sibling **1**. `portal H2` 세 파일 **0**. 본문에 sibling 구조 분류를 사실로 넣은 문장 없음.
- **D2a.** 가상 페르소나 식별자 없음. 삭제 처분 행은 §9 도구 문장뿐이고 무식별. provenance Omission ledger §13 행은 「No name, age, or city was present to delete」로 필드 종류만. 창립자 이름은 원본 §11 공식 서사(원본 dest ≥1)이지 페르소나 전기가 아니다. 그룹 라벨 `Developers and builders` / `Innovators and application teams` / `Organizations operating across environments` 원본 **1** / DESIGN **1** — 원형 라벨이라 로그에 적는 것이 맞다. Primary tasks는 Get Started · LeafyGreen URL · docs chrome. 동기/소속 분류를 새로 만들지 않음.
- **E2d.** 「세 파일 어디에도 없다」면서 그 행이 항목을 나열하는 단언 없음. dest **0**은 DESIGN 분모. sibling-only 행은 dest **0** / prov **N**.
- **A1 키 경로.** YAML `tokens.components.marketing-feature-panel` 필드 `type`/`bg`/`fg`/`border`/`radius`/`padding`/`shadow`/`use`가 Public marketing feature panel 블록(215–228)에 행으로 있다: Primitive type `card`, Background `#ffffff`, Text `#000000`, Border, Radius, Padding, Shadow, token-set path의 `use: Observed public-home feature panel`. icook형(같은 hex가 다른 블록에만 있는 채 해당 블록 Text 행 소실) 아님. 복원하지 않음.
- **웨이브 40 열/귀속.** 원본 §2에 CSS 커스텀 프로퍼티 열 없음. YAML 키는 `Token-set path tokens.colors.*`로 보존. `conflicts: []` — 자리마다 다른 충돌 처리 없음.
- **`tokens.spacing.primary-action-y` 전문 경로** DESIGN dest **0**. 값은 `tokens.spacing` 줄의 `primary-action-y: 15` dest **2**로 남아 있다. 키를 spacing 경로에 둔 표기이지 다른 자리의 `15`로 바꿔 읽은 손실이 아니다.
- **`#ffffff` 역할 분리** (고치지 않음, 원장만 맞춤): Canvas · feature-panel background · documentation icon-control background · LeafyGreen utility-control text. 배경/전경 분리는 정상. E1 원장은 위 1번에서 실제에 맞춤.

AUDIT_DONE fixes=10
