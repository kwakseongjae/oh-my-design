# instacart 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/instacart/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/instacart/DESIGN.md`
검증 sibling: `web/references/instacart/.verification.md` — `find web/references/instacart -type f`와 `test -f web/references/instacart/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 대괄호 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Instacart-authored or a separately published UI specification`을 요구한다. 기존 33건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 33 / 원장 33. 숫자는 맞았으나 Semantic `:84` 한정이 ink slightly-warm을 빠뜨렸고, Shape `:122`는 경로 분리만 이름하고 workhorse를 빠뜨렸고, Elevation `:132` keep-both에는 인접 한정이 없었고, Motion `:138`은 커브 생략을 빠뜨렸고, Layout `:501`은 anchoring을 빠뜨렸다. 33은 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 5건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:84` — Semantic color | "slightly warm, not pure black"는 세 번째 부류. 같은 단락의 기존 한정은 green/Kale/forest/cool-grey만 가리킨다. | 기존 완전형에 ink-as-slightly-warm-not-pure-black를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:122` — Shape | "the workhorse"와 "kept on their own rows"는 세 번째 부류. 같은 단락의 기존 한정은 키 경로 분리만 가리킨다. | 기존 완전형에 named-uses-on-own-rows와 Medium 8px workhorse를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:132` — Elevation keep-both | 두 inset 철자를 합치지 않은 것과 card inset을 드롭 섀도로 붙이지 않은 것은 세 번째 부류. `:134`는 clean/fast/mobile-native만 이름한다. | 완전형 신설. 발생 수 +1. 같은 줄에 붙였으므로 줄 수 불변. |
| 4 | `DESIGN.md:138` — Motion | 세 커브를 추적 불가로 생략한 것은 세 번째 부류. 기존 한정은 durations/roles/rules만 가리킨다. | 기존 완전형에 three untraceable curve values omitted를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:501` — Layout | "anchoring the user journey"는 세 번째 부류. 기존 한정은 utilitarian density / grey-as-separator / full-width hero만 가리킨다. | 기존 완전형에 search-bar anchoring을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 34, `not Instacart-authored` 34, `separately published UI specification` 34. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 30, 34, 47, 57, 69, 84, 104, 108, 122, 132, 134, 138, 175, 177, 178, 179, 180, 186, 199, 209, 216, 227, 474, 488, 501, 503, 523, 583, 585, 619.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 신설을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | `provenance.md` 헤더 | `33` complete / `33` data rows. | `34` / `34`. |
| 7 | Semantic 행 | green/Kale/forest/cool-grey만. 본문 `:84`가 이제 ink slightly-warm도 이름한다. | ink-as-slightly-warm-not-pure-black를 행에 추가. |
| 8 | Shape 행 | `full: 999` 경로 분리만. 본문 `:122`가 이제 workhorse도 이름한다. | named uses on own rows / Medium 8px workhorse를 행에 추가. |
| 9 | inventory | 본문 `:132` keep-both 한정이 원장에 없음. | 행 14 Elevation keep-both 신설. 이후 번호 +1. |
| 10 | Motion 행 | durations/roles/rules만. 본문 `:138`이 이제 커브 생략도 이름한다. | three untraceable curve values omitted를 행에 추가. |
| 11 | Layout 행 | utilitarian / grey / full-width hero만. 본문 `:501`이 이제 anchoring도 이름한다. | search bar anchoring the user journey를 행에 추가. |

헤더 `33` → `34` / 데이터 행 **34** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 12 | YAML identity 행 | homepage with-slash provenance를 43/48만, storefront provenance를 44/49만, `#108910` DESIGN을 Foundations 88+components만 적음. standalone homepage DESIGN dest **4** at 9/138/233/358 (333은 storefront 접두사). provenance with-slash dest **4** at 23/43/48/68. storefront P dest **3** at 44/49/68. `#108910` DESIGN dest **10** at 11/37/51/59/88/234/259/310/334 / P dest **15**. | 실측 줄·횟수로 교체. |
| 13 | YAML metadata 행 | **Verified:** 를 `provenance.md` 37, `components_harvested` 를 21/173으로 적음. 37은 Conflicts 행. | **Verified:** **35**. harvest **21/174**. |
| 14 | YAML typography 행 | `1.00` dest 3. Search 15px를 364/199. dest **4** at 196/197/199 (199에 두 번). `15px` 는 **365/367/199**. 364는 Height 56px. | dest **4**. 15px **365/367/199**. |
| 15 | YAML spacing/shape 행 | `full 999` 를 112/499로 적음. 499는 `full: 999`. | bare `full 999` dest **1** at 112. `full: 999` dest **3** at 122/499/622. `tokens.rounded.full: 999` dest **2** at 122/622 유지. |
| 16 | YAML components 행 | `16px / 400 Instacart Sans` dest 4. dest **5** at 240/265/291/315/457. `not in the token set`을 383만. DESIGN dest **3** (223에 두 번 + 383). | dest **5**. 라벨 dest 3을 밝힘. |
| 17 | Footer 행 | homepage/storefront provenance 43/48·44/49, Conflicts 39. | P 23/43/48/68 · 44/49/68. Conflicts **37**. |
| 18 | §4 / §14 행 | Storefront Search 381–390. `error \| applicable` dest 2 at 377/402. 391은 Use. dest **3** at 326/377/402. | **381–391**. dest **3**. |
| 19 | §11 / inventory / §5 / §6 | official-history P 175. inventory 136–168 (33). 501에 anchoring 없음. 132 keep-both 없음. 175는 inventory 끝. | P **176**. inventory **136–169 (34)**. 501 anchoring · 132 keep-both. |
| 20 | Deviations · F1 · F2 · SHA | B2a 33=33. `wc -w` 7,185. worker-close SHA만. | 34=34. `wc -w` **7,270**. auditor SHA `12b7a71385a8da332dd378d8038f7f1175724f4827834cbea2345c6fb246f8ce`. worker-close `9afaebf6…` 유지. |

Destination SHA `9afaebf6…` → `12b7a71385a8da332dd378d8038f7f1175724f4827834cbea2345c6fb246f8ce` (한정 신설·범위 확장 후). 줄 수 DESIGN `wc -l` **623** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 세 개만 (`busy professionals, parents, elderly or mobility-limited shoppers`). 페르소나 동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic 역할 행의 원본 use 문장 — `:84` 포괄절이 특성화를 덮음.
- Motion `:165` — "task, not a delight"는 원본 §15 규칙. 138이 durations/roles/rules/curve-omission을 덮고, 165는 원격 포인터.
- Type roles `:201` 계층 노트 — 원본 표 Notes. 199가 여섯 역할+15px keep-both를 덮음.
- Voice-sample 괄호 `hero H1` / `hero CTA` / `section H2` — 원본 역할 라벨이지 편집 gloss가 아님. 신설하지 않음.
- B3 준수 주장 — `DESIGN.md` 156이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 621은 재진술).
- 2차 목적지 전수: homepage standalone DESIGN dest 4 at 9/138/233/358 · storefront dest 3 at 9/138/333 · `#108910` dest 10 · `rgb(16,137,16)` dest 1 · `Kind: non-interactive` dest 2 · `kind: non-interactive` DESIGN 0 · `We couldn't find that.` dest 3 · `Shop at [Retailer]` dest 3 (`grep -oF`) · YAML `use` 10/10 · `Token-set active:` dest 1 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- A1 키 경로: 원본 `tokens.components.<id>.<field>` 10레코드 전 필드가 대응 블록에 행으로 있음. `store-tab.active`는 `:458` `Token-set active:` 행. `tokens.shadow.card`는 `:132`. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/instacart/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Instacart, 2012, Apoorva Mehta, Y Combinator, Sequoia Capital, Costco/Kroger/Safeway/Whole Foods, 2022 rebrand, Instacart Plak, carrot orange, 2023 NASDAQ/CART, Shop at [Retailer], Order groceries for delivery or pickup today, Sign up to get $0 delivery fee*, Stores to help you save, Add, EBT, Fastest, Offers, Grocery, We couldn't find that., You haven't saved any items yet., Out of stock, YAML use/font 바이트.
- **관측 기술** — hex · Instacart Sans · unitless `1.25`/`1.17`/`1.50`/`1.43`/`1.00` · `full: 999` · inset shadows · `20px`/`28px`/`999px` · `40px`/`56px`/`36px`/`32px` · `Primitive type`.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 과제 선정, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화(ink slightly-warm 포함), canvas/on-primary/on-dark 미분합, spacing/shape 키 분리, workhorse, elevation keep-both·mobile-native, motion 귀속·커브 생략, 폰트 증거 class, no-substitution, type-role keep-both, Simple Icons pointer·Plak narrative, applicability, state-record 비부착, layout density/anchoring, breakpoint system-level, voice/forbidden-register, byte-exact, unresolved 프레이밍.

세 번째 부류 중 33곳은 착수 시 인접 완전형이 있었고, 그중 4곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 1곳은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 5파일 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. `Shop at [Retailer]`는 `grep -oF`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 34 | 0 | 3 |
| `not Instacart-authored` | 34 | 1 | 4 |
| `separately published UI specification` | 34 | 1 | 3 |
| inventory 데이터 행 | — | 34 | — |
| `Primitive type: \`button\`` | 5 | 0 | 0 |
| `Kind: non-interactive` | 2 | 0 | 2 |
| `kind: non-interactive` | 0 | 0 | 2 |
| `#108910` | 10 | 15 | 5 |
| `16px / 400 Instacart Sans` | 5 | 1 | 2 |
| `1.00` | 4 | 0 | 2 |
| `tokens.rounded.full: 999` | 2 | 0 | 3 |
| `error \| applicable` | 3 | 0 | 2 |
| `loading \| applicable` | 1 | 0 | 0 |
| `230px` | 0 | 2 | 2 |
| `Shop at [Retailer]` (`-oF`) | 3 | 1 | 3 |
| B3 다섯 종류+게이트 (`DESIGN.md` 156) | 1 | 0 | 1 |

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** / candidates **131**. 발행 라벨 손 대조에서 손실은 안 보임. 원본 §1 `digital-native and earthy`(원본 1 / DESIGN 0)와 §2 `trained into user muscle-memory`(원본 1 / DESIGN 0)는 설명문·편집 gloss이지 발행 카피가 아니라 직접 고치지 않음.
- **B1.** sibling 전용 `230px` / `72px` / `rgb(255,220,35)` / body `rgb(0, 0, 0)` / h1 `rgb(255, 255, 255)` / `No designs found for instacart.` / 빈도수 DESIGN dest **0**. sibling 방법 문구의 `h3`도 DESIGN 0. 구조 관측 침투 없음.
- **D2a.** 삭제 처분 행은 무식별(`§13 페르소나 3인`). 이름·나이·도시·동기(`Thursday evening` / `hip replacement` / `weekend cooking` / `Instacart+ subscriber`)·소속 분류 DESIGN/provenance/migration-log dest **0**. Audience는 원본 그룹 세 개만.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 「이 파일에 없다」를 명시적으로 거부함.
- **A1.** 원본 YAML 컴포넌트 10레코드의 type/bg/fg/border/radius/padding/height/font/active/use가 대응 블록에 행으로 있음. 필드 소실 없음.

원본 `web/references/instacart/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=20
