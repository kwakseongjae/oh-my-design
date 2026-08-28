# IICOMBINED 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/iicombined/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/iicombined/DESIGN.md`
검증 sibling: `web/references/iicombined/.verification.md` — `find web/references/iicombined -type f`와 `find web/references/iicombined/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not IICOMBINED-authored or a separately published UI specification`을 요구한다. 기존 33건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 33 / 원장 33. 숫자는 맞았으나 Scope ¶2 `:11` 한정이 분위기 다섯만 이름하고 expressive/near-silent 분리와 chrome-reduces-to-hairline을 빠뜨렸고, Shape `:127`은 경로 분리만 이름하고 missing-`none`-as-component-writing을 빠뜨렸고, Top Nav `:318` 90px-not-a-YAML-field와 Content voice-sample `:453` 괄호 해설에는 인접 한정이 없었다. 33은 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (18건)

### B2a — 인접 한정 (본문 4건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | "one expressive display voice from one near-silent sans"와 "Interactive chrome reduces to the hairline pill"는 세 번째 부류. 같은 단락의 기존 한정은 분위기 다섯만 가리킨다. | 기존 완전형에 expressive display vs near-silent sans와 chrome reduced to the hairline pill을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:127` — Shape | "The YAML set has no `none` step; the 0px tile/band radius is a component writing"는 세 번째 부류. 같은 소절의 기존 한정은 키 경로 분리만 가리킨다. | 기존 완전형에 missing-`none`-as-component-writing을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:318` — Top Nav Item | "that height is not a YAML field on this component"는 세 번째 부류. 232 절 한정은 kind/applicability만 이름한다. | 같은 행에 완전형 신설. 발생 수 +1. 줄 수 +0. |
| 4 | `DESIGN.md:453` — Voice samples | "exhibition-named collection" / "view-the-campaign, art-first framing" / "concept-first collection copy"는 세 번째 부류. `:437`은 characterization·register·tone table만 이름한다. | 완전형 신설. 발생 수 +1. 줄 수 +1 (520→521). |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not IICOMBINED-authored` 35, `separately published UI specification` 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 56, 69, 85, 105, 114, 127, 137, 141, 178, 180, 181, 182, 183, 190, 205, 214, 221, 232, 318, 383, 397, 409, 411, 437, 453, 480, 482, 516.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 신설을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `provenance.md` Scope ¶2 행 | 분위기 다섯만. 본문 `:11`이 이제 expressive/near-silent·hairline-pill도 이름한다. | expressive display vs near-silent sans / chrome reduced to the hairline pill을 행에 추가. |
| 6 | `provenance.md` Shape 행 | `none` 부재를 "no invented key"로만. 본문 `:127`이 이제 component writing으로 이름한다. | missing `none` step is a component writing on tiles and bands로 맞춤. |
| 7 | `provenance.md` inventory | 본문 `:318` 90px-not-YAML-field가 원장에 없음. | 행 26 Top Nav Item 신설. |
| 8 | `provenance.md` inventory | 본문 `:453` voice-sample 괄호가 원장에 없음. | 행 32 Content voice-sample glosses 신설. |

헤더 `33` → `35` / 데이터 행 **35** at 172–206 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | YAML identity 행 | homepage를 DESIGN 9/238, P 14/47/52로 적음. 47/52는 tamburins URL. `grep -o` dest **4** at 9×2+21+238 / P **4** at 14/46/51/72. `#111111`을 9줄만 적음. dest **19** at 11/35/39/49/58/63/76/89/101/137/239/264/311/335/346/366/387/391. P 15/62/64 → 15/61/63. `아이아이컴바인드` 455 → **457**. Identity table 9–24 → **9–23**. | 실측 줄·dest로 교체. |
| 10 | YAML metadata 행 | Freshness 35–38, Verified 40, `live-extract` 22, `components_harvested` 24. 실제 Freshness **33–36**, Verified **38**, live-extract **21**, harvested **23 / 211**. | 실측 줄로 교체. |
| 11 | YAML `tokens.note` 행 | 전문을 P 64로 적음. 인용 블록은 **63**. | **63**. |
| 12 | YAML spacing/shape 행 | `tokens.rounded.full: 9999` dest 3 at 118/125/519. 519는 시프트 전. 실제 **118/125/521**. `9999px`를 pill 3줄만 적음. dest **8** at 11/38/62/125/291/407/521. | dest 3 · dest 8. |
| 13 | Footer 행 | Tier 1 52–53 / Tier 2 57–58 / Conflicts 42 / homepage P 14/47/52 / tamburins P 48/53. 실제 51–52 / 56–57 / **40** / 14/46/51/72 / **47/52/84**. | 실측 줄로 교체. |
| 14 | §10 행 | 발행 문자열 447–476 · forbidden 478 · byte-exact 480. 신설 453 이후 발행 목록은 **455–478**, forbidden **480**, byte-exact **482**. | 453 한정 병기. |
| 15 | §11 행 | narrative-not-token P 211. inventory +2 뒤 **213**. | **213**. |
| 16 | §12 행 | inventory 172–204 (33). 실제 **172–206 (35)**. | **172–206 (35)**. |
| 17 | Sibling 절 | 전사 73–87 · sibling-only 91–100. 실제 전사 **71–90** · 목록 **94–103**. | 71–90 · 94–103. |
| 18 | Deviations · F1 · F2 | B3 516 · 33=33. B3 재진술은 **518**. 본문·원장 **35=35**. F1 목록에 318·453이 없음. | 518 · 35=35 · F1에 318·453 추가. |

Destination SHA `a9db3b64…` → `8fcf8324cf6dceff847147c56227325e5f52184143cbaffbfe0cd9236bc5e251` (한정 신설·범위 확장 후). 줄 수 DESIGN 520→**521**.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 세 개만 (`design-aware fashion buyers, fragrance enthusiasts, art-and-retail followers`). 페르소나 동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic `:85` — "Where a line also characterizes a value" 포괄절이 campaign-scoped navy / one-warm-note를 덮음. Ink Black 불릿의 "softer, premium read"는 원본에 있고 산출 불릿에는 없음(범위 밖).
- Motion `:168` — "already covered by the motion-section qualifier above"는 원격 포인터이지 새 판단이 아님. 141이 durations/roles/rules를 덮음.
- Layout image `:428–432` — "as the source states it". 원본 §8 Image Behavior 문장. 411은 breakpoints/collapsing/targets를 이름하고, 이 불릿은 출처 귀속이라 신설하지 않음.
- B3 준수 주장 — `DESIGN.md` 159가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음 (E2c 유지, 518은 재진술).
- 2차 목적지 전수: homepage own-URL DESIGN dest 4 at 9/21/238 · tamburins dest 3 at 9/24/287 · `#111111` dest 19 · favicon slug 218 · `아이아이컴바인드` dest 3 · `Kind: non-interactive` dest 1 · `구매하기` dest 8 · `캠페인 보기` dest 9 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- `1.17` dest 2 · `1.00` dest 5 · `1.57` dest 2 · `1.50` dest 5 · `1.38` dest 2 · `1.42` dest 2 — `grep -o` 실측과 로그 dest 일치.
- A1 키 경로: 원본 `tokens.components` 8레코드의 type/fg/bg/radius/padding/height/font/border/use/active가 대응 블록에 **행으로** 있음. `product-card.fg` `#111111`은 Product / Campaign Tile `Text` at 335. icook형 이탈 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/iicombined/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — IICOMBINED, 아이아이컴바인드, Hankook Kim, 김한국, 2011, Gentle Monster, Tamburins, Nudake, make a new dream, 구매하기, 캠페인 보기, ACCEPT ALL COOKIES, 모두 수락 - ACCEPT ALL COOKIES, 2026 Veggie Collection, BOLD COLLECTION, SUMMER TAILS, 토피 02, 베르 02, 아덴 02, 새로운 헤어 퍼퓸 컬렉션, 선글라스/안경/베스트셀러/2026 컬렉션/선물, Home | 젠틀몬스터 공식 온라인 스토어, TAMBURINS 탬버린즈 공식 온라인 스토어.
- **관측 기술** — hex · Gentle Monster Serif / GentleSans 350·400 / Pretendard · unitless `1.17`/`1.00`/`1.57`/`1.50`/`1.38`/`1.42` · `tokens.spacing` 8스텝 · `tokens.rounded` 4스텝 · `box-shadow: none` · 25px/9999px/8px/90px/36px/45px/48px · YAML `use`/font/border.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 과제 선정, 청중 그룹, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화, canvas/on-dark 미분합, spacing/shape 키 분리, missing-`none` 판정, elevation/motion 게이트, 폰트 증거 class, type-role keep-both, favicon-pointer·photography, applicability, 90px-not-YAML-field, state-record 비관측, layout imagery-over-chrome, breakpoint system-level, voice 해설·sample 괄호, byte-exact, unresolved 프레이밍.

세 번째 부류 중 33곳은 착수 시 인접 완전형이 있었고, 그중 2곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 2곳은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 35 | 1 | 3 |
| `not IICOMBINED-authored` | 35 | 1 | 4 |
| `separately published UI specification` | 35 | 1 | 4 |
| inventory 데이터 행 | — | 35 | — |
| `https://www.gentlemonster.com` | 4 | 4 | 2 |
| `#111111` | 19 | 12 | 6 |
| `아이아이컴바인드` | 3 | 1 | 4 |
| `tokens.rounded.full: 9999` | 3 | 0 | 1 |
| `9999px` | 8 | 6 | 1 |
| `Primitive type: \`button\`` | 3 | 0 | 0 |
| `Kind: non-interactive` | 1 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 1 |
| `loading \| applicable` | 1 | 0 | 0 |
| `loading \| not-applicable` | 4 | 0 | 0 |
| `전체보기` | 0 | 2 | 3 |
| B3 다섯 종류+게이트 (`DESIGN.md` 159) | 1 | 0 | 1 |

`provenance.md`의 derived 1 · `not IICOMBINED-authored` 1 · spec 1은 원장 색인(mention)이지 portable 한정이 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 10 / candidates 185 (5.4%, 이관본 평균 4.4%대). `verdict: PASS`는 대조한 10개 중 손실 없음이지 발행 카피 전량 보존이 아님. 손 대조: 아이아이컴바인드 / 구매하기 / 캠페인 보기 / ACCEPT ALL COOKIES / 모두 수락 - ACCEPT ALL COOKIES / 2026 Veggie Collection / BOLD COLLECTION / SUMMER TAILS / 토피 02 / 베르 02 / 아덴 02 / 새로운 헤어 퍼퓸 컬렉션 / 선글라스 / 안경 / 베스트셀러 / 2026 컬렉션 / 선물 / Home | 젠틀몬스터 공식 온라인 스토어 / TAMBURINS 탬버린즈 공식 온라인 스토어 / make a new dream / 김한국 / Hankook Kim — DESIGN dest ≥ 1. 발행 라틴 손실은 눈에 띄지 않음. 고치지 않음.
- **A1 (키 경로).** 원본 YAML `tokens.components` 8레코드 필드가 대응 블록에 행으로 있음. `button-outline.fg` Text 239 · `button-solid.bg/fg` 264/265 · `button-pill-dark.fg` 288 · `nav-link.fg/active` 311/315 · `product-card.fg` Text 335 · `surface-card.fg` Text 346 · `overlay-label.fg` 357 · `footer-link.fg` 366. icook형 이탈 없음. 고치지 않음.
- **A1 (설명문 드롭).** 원본 `:81` "Near-black rather than pure black for a softer, premium read" DESIGN dest **0** / SRC 1. 원본 `:104` "This is the house's expressive, art-directed voice" dest **0**. 원본 `:106` "the de-facto Korean product sans" dest **0**. 한정 `:85`는 softer-premium을 이름하나 불릿 본문에는 없다. 토큰 값이 아니라 역할 해설이라 복원하지 않음.
- **B1.** sibling 전용 `전체보기` / `SCRUNCHIE SUMMER TAILS` / `Sandoll GothicNeo1 Md` / `0.13px` / `__gentleSansRegularKo` / `rgb(191,191,191)` / `thick standalone storefront` DESIGN dest **0**. `H3` DESIGN dest **0** (sibling의 product H3 / H3 SCRUNCHIE 분류 미승격). 값·분류 침투 없음.
- **D2a.** 삭제 처분 행은 `§13 페르소나 3인 (이름·나이·도시 포함)`으로 무식별. `정유진` / `Marcus Lee` / `한소희` / `싱가포르` / `flagship installations on social` / `fragrance collector` / `creative director who studies` / `discount banners` / `badge clutter` DESIGN 0 / provenance 0 / migration-log 0. 소속 분류 발명 없음. Audience는 원본 헤더 그룹만.
- **E2d.** 「세 파일 어디에도 없다」형 단언 0. `not in the token set` dest 0은 DESIGN 실측 0과 일치하고, 그 행이 식별 대상을 재수록하지 않음. sibling-only 0회 주장은 DESIGN.md에 한정.

원본 `web/references/iicombined/**` 미수정. 카탈로그 채택 아님.

DESIGN SHA `8fcf8324cf6dceff847147c56227325e5f52184143cbaffbfe0cd9236bc5e251`
provenance SHA `14de8a6a5e3363a907fa0294babaa110443da4b19b91239d338ae96ba61d1c05`
migration-log SHA `1ff10dcb802d70af44bc6a71374234fd3287f12750560372d649ec0f93b0828e`

AUDIT_DONE fixes=18
