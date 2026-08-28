# Imweb 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/imweb/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/imweb/DESIGN.md`
검증 sibling: `web/references/imweb/.verification.md` — `find web/references/imweb -type f`와 `test -f web/references/imweb/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Imweb-authored or a separately published UI specification`을 요구한다. 기존 35건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 35 / 원장 35. 숫자는 맞았으나 Scope ¶2 `:11` 한정이 분위기 아홉 가지만 이름하고 product-promise·no-fashionable-tracking·essentially-flat·sterile-wildcard를 빠뜨렸고, Elevation `:145`는 shadow-free·drama-to-customer-sites만 이름하고 color-as-elevation(원장 14행은 이미 적음)을 빠뜨렸다. 35는 과소가 아니라 **같은 단락의 판단을 덜 이름한 쪽**이었다.

## 수정 목록 (12건)

### B2a — 인접 한정 (본문 2건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | "reads like the product promise itself", "no fashionable negative tracking", "Depth is essentially flat", "playful wildcard / sterile"는 세 번째 부류. 같은 단락의 기존 한정은 clean/friendly/easy·cyan-as-evidence·8px workhorse·magenta splash만 가리킨다. | 기존 완전형에 product-promise / no-fashionable-tracking / essentially-flat / magenta-as-playful-wildcard를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:145` — Elevation | "when Imweb wants a section to feel important, it floods the background with cyan"는 세 번째 부류. 같은 단락의 기존 한정은 shadow-free·drama-to-customer-sites만 가리킨다. 원장 14행은 이미 color-as-elevation을 이름함(넓은 쪽). | 기존 완전형에 saturated-cyan-as-elevation을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not Imweb-authored` 35, `separately published UI specification` 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 30, 34, 47, 57, 70, 87, 114, 120, 134, 145, 149, 186, 188, 189, 190, 191, 197, 213, 222, 229, 240, 463, 478, 490, 492, 513, 518, 537, 579, 581, 615.

### E1 — provenance derived 범위 (1건)

원장 행 수는 35=35였으나 2행이 본문 `:11`이 이제 이름하는 판단을 빼 두었다. 14행은 본문보다 넓었고, 본문 `:145`를 맞춘 뒤 1:1이 된다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Scope ¶2 행 | 분위기 아홉 가지만. 본문 `:11`이 이제 product-promise·tracking·flat·wildcard도 이름한다. | 그 네 판단을 행에 추가. 데이터 행 35 유지. |

헤더 `35` / 데이터 행 **35** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | YAML identity 행 | standalone `https://imweb.me`(접두사 `/price`/`/blog`/`/story` 제외)를 DESIGN 9/21 + P 14/45/52로 적음. 실측 DESIGN dest **3** at **9/21/246** · P dest **4** at **14/46/52/73**. 45는 표 구분선. Favicon slug를 P 17만 적음. 실측 P dest **2** at **17/27**. | **9/21/246** + **14/46/52/73**. Favicon **17/27**. |
| 5 | YAML spacing 행 | `tokens.spacing.base: 16` dest 3 (120/134/487). `grep -oF` dest **4** (120에 두 번). | dest **4**. |
| 6 | YAML components 행 | `16px / 400 Pretendard` dest 2 at 352/411. 실측 dest **6** at 351/352/372/410/411/433. `14px / 600 Pretendard` dest 1 at 388. 실측 dest **2** at 387/388. | dest **6** · dest **2**. |
| 7 | Footer URL 행 | homepage를 DESIGN 9/21 + P 14/45/52, price를 P 46/53으로 적음. 46은 home 행. 실측 price P dest **3** at **47/53/73**. | homepage **9/21/246** + **14/46/52/73**. price **47/53/73**. |
| 8 | §1 분위기 행 | qualifier at 11이 이름하는 판단을 네 개만 적음. | product-promise / tracking / flat / wildcard를 병기. |
| 9 | §5 Layout 행 | 범위를 482–488, 48px action height를 250/500으로 적음. 482는 `## 5` 표제. 실측 불릿 **483–488**. `Height: 48px` dest **1** at **251**. `48px` DESIGN dest **4** at 11/204/251/500. | **483–488**. 48px action **251/500**. |
| 10 | §13 행 | Disposition at `provenance.md` 136. 136은 표 머리. 페르소나 처분은 **138**. | **138**. |
| 11 | §15 curve 행 | Ledger at `provenance.md` 137–139. 137은 구분선, 곡선 생략 행은 **139–141**. | **139–141**. |
| 12 | F1·F2·Deviations·SHA | F1은 35=35만 적고 `:11`/`:145` 범위 밖 판단을 현재 상태로 남김. worker-close SHA `84a10c90…`. | F1에 11·145 확장 기록. F2에 dest 교정 목록. Auditor SHA `4371016c96d1d5a5c952a2fd2cae3099d58550f7b839f29c73b692726db32baa`. |

Destination SHA `84a10c90…` → `4371016c96d1d5a5c952a2fd2cae3099d58550f7b839f29c73b692726db32baa` (한정 범위 확장 후). 줄 수 DESIGN 619 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 `Korean small-brand founders, creators, and SMB operators`만. 페르소나 동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic `:87` — "Where a line also characterizes a value" 포괄절이 아래 역할 해설(cyan-not-on-CTA / magenta-as-single-warm / hairline-as-separation)을 덮음. 예시를 늘리지 않음.
- Motion `:149`/`:176` — 원본 §15 규칙. 149가 durations/roles/rules를 덮고, 176은 원격 포인터이지 새 판단이 아님.
- B3 준수 주장 — `DESIGN.md` 167이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 617은 재진술).
- 2차 목적지 전수: standalone homepage DESIGN dest 3 at 9/21/246 · price dest 6 at 9/23/271/295/346/406 · blog dest 1 at 9 · `#00b9ff` DESIGN dest 9 / P dest 7 · favicon slug DESIGN 226 / P 17/27 · `아임웹` DESIGN dest 11 · `Kind: non-interactive` dest 2 · `loading \| applicable` dest 0 — 각 주장된 2차 목적지의 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- A1 키 경로: YAML `tokens.components` 6레코드의 type/bg/fg/border/radius/padding/height/font/use/active/disabled가 대응 블록에 행으로 있음. icon-button·badge-promo YAML에 bg 없음(§4만 보유). `recipe-card.fg`형 이탈 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/imweb/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 아임웹, 주식회사 아임웹, 이수모, We serve the underserved, 브랜드 빌더, 매출내기, 쉬워요, 디자인이 쉬워요 / 운영이 쉬워요 / 마케팅이 쉬워요, 지금 무료로 시작하기, 14일 무료 체험 시작하기, 시작부터 성장까지 쉬워집니다, 시작이 쉬워서 성장이 쉬운, PG 가입비 면제, 80만 개, 2025 누적 사이트 개설 수, YAML use/font 바이트.
- **관측 기술** — hex · Pretendard / imweb Sans · unitless `1.00`/`1.25`/`1.48`/`1.33`/`1.50` · `8`/`12`/`16`/`9999` · `box-shadow: none` · 95-of-~108 · `Primitive type` · `48px`/`40px`/`32px`.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 블로그≠토큰, 분위기/서사≠토큰, 과제 선정, 청중 그룹, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화, canvas/Cyan Mist 미분합, spacing/shape 키 분리, elevation color-as-elevation, motion class, 폰트 증거 class, type-role keep-both, favicon-pointer·photography, applicability, state-record 비관측, layout titles, breakpoint system-level, voice/forbidden-register, byte-exact, unresolved 프레이밍.

세 번째 부류 35곳은 착수 시 인접 완전형이 있었고, 그중 2곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. 신설 0. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 35 | 0 | 2 |
| `not Imweb-authored` | 35 | 1 | 3 |
| `separately published UI specification` | 35 | 2 | 5 |
| inventory 데이터 행 | — | 35 | — |

`find`로 5파일 확인 후 파일별 `grep -o … | wc -l`. provenance의 `not Imweb-authored` / `separately published UI specification`은 Proof notes 인용(색인)이지 휴대 한정이 아니다. migration-log는 mention.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 36 / candidates 211 (17.1%, 이관본 평균 4.4%보다 높고 50% 미만). 손 대조 발행 라벨 36/0/0. latin-copy-audit lost 4 = `?q=아임웹` / `?q=imweb` / `1px solid #dbdee3` / `none available` (sibling/tool; 발행 카피 0). 발행 라틴 `We serve the underserved` DESIGN dest 2 · `Starter`/`Global` dest 2. 발행 라틴 손실은 안 보임. 고치지 않음.
- **B1.** sibling 전용 `48.96px`/`41.44px`/`aria-selected`/`blog.imweb.me`/`github.com/imweb`/`40/80/160/320` DESIGN dest 0. `요금제를 선택해 보세요` DESIGN dest 3는 원본 전문 `브랜드 운영에 꼭 맞는 요금제를 선택해 보세요`의 부분문자열. h3/섹션 표제 분류 침투 0. 고치지 않음.
- **D2a.** 식별자 `박민지`/`김도현`/`이은영` · 도시 `성남`/`대구` · 동기 `fashion-brand`/`YouTuber`/`100K`/`smart-store`/`merch`/`academy` DESIGN/provenance/migration-log dest 0. 처분 행은 `§13 페르소나 3인 (이름·나이·도시 포함)` 무식별. Audience는 원본 그룹만. 소속 분류 재구성 0. 고치지 않음.
- **E2d.** 부재 단언은 DESIGN dest 0을 분모로 적음(`48.96px` 등). 「세 파일 어디에도 없다」고 쓰면서 그 행이 문자열을 담은 형태 0. 고치지 않음.
- **A1 키 경로.** YAML 6 컴포넌트 필드가 대응 블록에 행으로 있음. 값 grep만으로 다른 카드의 동일 hex를 보존으로 읽는 icook형은 이 브랜드에서 안 보임. 고치지 않음.

AUDIT_DONE fixes=12
