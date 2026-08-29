# kurly 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kurly/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kurly/DESIGN.md`
검증 sibling: `web/references/kurly/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. 파일 존재.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Kurly-authored or a separately published UI specification`을 요구한다. 기존 13건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 13 / 원장 13. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:9`의 계약 범위 읽기는 한정이 없었다. Scope `:11`은 분위기/서사 분류만 이름하고 corporate-story-related와 intro/profile vs live surfaces를 빠뜨렸다. Semantic `:70`은 pairing/muted만 이름하고 같은 hex의 키 분리를 빠뜨렸다. Spacing `:87`의 `3px` not-a-token은 `:85` YAML 비병합 뒤에 있어 인접하지 않았다. Shape `:91`의 not-universal-scale + 2px/4px pairing은 `:99` 0px 비병합 앞에 있어 인접하지 않았다. Font evidence / Assets / Capture / Layout 두 판단은 한정이 없었다. Type roles `:133`은 14/18/16 비병합만 이름하고 line-height-not-ratio와 compact `13px`를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(`컬리 / 마켓컬리` · `Something Better` · `나와 내 가족이 사고 싶은 상품을 판매합니다.` · `더 나은 삶을 위한 유통 혁신` · Market Kurly / Beauty Kurly · 2015 · YAML hex/size) / 관측 기술(computed hex · Pretendard 761 · selector · `box-shadow: none`) / 편집적 해석·인과 판단(계약 범위, 콤팩트 커머스 읽기, 서사≠토큰, 과제 선정, 청중 묶기, 특성 묶기, 원칙·Do/Don't, hex 키 귀속, 3px 필드, radius 스케일, 폰트 evidence class, type-role 비병합, applicability, 1440/249 게이트). 세 번째 부류만 수정 대상.

## 수정 목록 (36건)

### B2a — 인접 한정 (본문 12건, 발생 수 +8)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Scope ¶1 | 세 쇼핑 URL을 계약 범위로 읽는 것은 세 번째 부류. 한정이 없었다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:11` — Scope ¶2 compact | corporate story와 shopping UI를 related-without-filling-tokens로 읽는 것은 세 번째 부류. 기존 한정은 compact-commerce만. | 기존 완전형에 그 읽기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:11` — Scope ¶2 classifying | introduction/company profile = business context, live surfaces = UI values는 세 번째 부류. 기존 한정은 2015 서사 분류만. | 기존 완전형에 그 분류를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:70` — Semantic color | canvas `#ffffff` ≠ form-input `bg` ≠ list-control background, foreground `#333333` ≠ form-input `fg` ≠ article `fg`, control-muted `#b5b5b5` ≠ category-tab `fg`는 세 번째 부류. 기존 한정은 pairing / muted 비병합만. | 기존 완전형에 같은-hex 키 분리를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:87` — Spacing 3px | compact `3px`를 spacing token이 아닌 그 컨트롤 필드로 두는 것은 세 번째 부류. `:85`는 YAML 2/4/8/16 비병합만. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:91` — Shape opening | unitless 2/4를 universal radius scale이 아니라고 읽고 compact `2px`/`4px`를 YAML 키에 pairing하는 것은 세 번째 부류. `:99`는 리스트 뒤 0px 비병합만. | 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:123` — Font evidence | live-computed Pretendard = UI-family, license = reusable not Kurly-owned, Noto/swiper-icons declared-only, fallbacks not brand face는 세 번째 부류. 한정이 없었다. | 완전형 신설(표 뒤 wrap). 발생 수 +1. |
| 8 | `DESIGN.md:133` — Type roles | YAML line-height px 문자열을 비율로 바꾸지 않기와 compact `13px` not-a-YAML-type-role은 세 번째 부류. 기존 한정은 14/18/16 비병합만. | 기존 완전형에 두 판단을 접어 넣음. 발생 수 +0. |
| 9 | `DESIGN.md:145` — Assets | Pretendard를 third-party webfont이지 Kurly-owned brand-font가 아니라고 읽는 것은 세 번째 부류. `:123`은 Font evidence 절이라 Assets에 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 10 | `DESIGN.md:169` — Capture | applicability-by-meaning, Focus ≠ focus-visible, pressed not a Core row, primitive type only when YAML records one, article omits kind+map은 세 번째 부류. 한정이 없었다. | 완전형 신설. 발생 수 +1. |
| 11 | `DESIGN.md:285` — Layout 1440/249 | 1440px를 responsive specification이 아니라고 읽고 249px를 site-wide grid가 아니라고 읽는 것은 세 번째 부류. 한정이 없었다. | 완전형 신설. 발생 수 +1. |
| 12 | `DESIGN.md:289` — Layout YAML spacing | YAML 2/4/8/16을 converted px sheet / responsive grid가 아니라고 읽는 것은 세 번째 부류. `:285`는 249px 문단이고 `:287`이 사이에 있다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 21, `not Kurly-authored` 21, `separately published UI specification` 21. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11×2, 17, 26, 30, 39, 48, 57, 70, 85, 87, 91, 99, 123, 133, 145, 169, 285, 289, 294.

### E1 — provenance derived 범위 (13건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | 헤더 / 행 수 | 13 complete / 13 data rows. | **21** / **21**. |
| 14 | Scope compact 행 | compact-commerce만. 본문 `:11`이 이제 related-without-filling도 이름한다. | 그 판단을 행에 추가. |
| 15 | Scope classifying 행 | 2015 서사 분류만. 본문 `:11`이 이제 intro/profile vs live surfaces도 이름한다. | 그 판단을 행에 추가. |
| 16 | Semantic 행 | pairing / muted만. 본문 `:70`이 이제 같은-hex 키 분리도 이름한다. | 그 판단을 행에 추가. |
| 17 | Type roles 행 | 14/18/16 비병합만. 본문 `:133`이 이제 line-height-not-ratio · compact `13px`도 이름한다. | 그 판단을 행에 추가. |
| 18 | Scope contract 행 | 없음. 본문 `:9` 신설. | 행 신설. |
| 19 | Spacing 3px 행 | 없음. 본문 `:87` 신설. | 행 신설. |
| 20 | Shape pairing 행 | 없음. 본문 `:91` 신설. | 행 신설. |
| 21 | Font evidence 행 | 없음. 본문 `:123` 신설. | 행 신설. |
| 22 | Assets 행 | 없음. 본문 `:145` 신설. | 행 신설. |
| 23 | Capture 행 | 없음. 본문 `:169` 신설. | 행 신설. |
| 24 | Layout 1440/249 행 | 없음. 본문 `:285` 신설. | 행 신설. |
| 25 | Layout YAML spacing 행 | 없음. 본문 `:289` 신설. | 행 신설. |

헤더 / 데이터 행 **13 → 21** at 141–161 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 26 | YAML identity 행 | Homepage `https://www.kurly.com` P dest **1** at 13. 실측 exact dest **2** at 13/21. DESIGN exact dest **0**(fitpet형 2차 목적지 위험). Prefix dest **6** at 9×3/19/20/21. | Bare homepage DESIGN dest **0** · P dest **2**. Prefix dest **6**. 쇼핑 URL 각 dest **2**. |
| 27 | §1 행 | `desktop-only`를 Distinctive traits에 있다고 적음. `desktop-only` DESIGN dest **0**. introduce/company URL을 P 52–54, 71–75로 묶음. 54/71/75는 Pretendard license·Narrative 표제. | `desktop captures only` dest **2** at 9/35. introduce P dest **3** at 52/61/73. newsroom URL P dest **3** at 53/62/74. DESIGN dest **0** both. |
| 28 | §3 행 | License URL P 55/75. 55는 빈 줄. | P dest **2** at 54/75. DESIGN dest **0**. OFL 1.1 dest **2** at 118/145 유지. |
| 29 | §5 행 | 1440px dest 1 at 285. 한정 추가 후 285에 2회. 249px dest를 적지 않음. | 1440px dest **2** at 285×2. 249px dest **6** at 222/231/232/278/285×2. |
| 30 | §8 행 | Distinctive traits restates `desktop-only` (`DESIGN.md` 35). 그 문자열 dest **0**. | `desktop captures only` dest **2** at 9/35. |
| 31 | §11 행 | Market Kurly / Beauty Kurly P 77, 133 (dest 2로 읽힘). 실측 dest **3** at 77/133/143. URLs P 71–75는 license 표제. | dest **3**. introduce/newsroom URL을 52/61/73 · 53/62/74로. |
| 32 | §13 행 | FILL IN wrappers P 161–162. 원장 확장 후 표는 169–170. | **169–170**. |
| 33 | §14 행 | Empty…Focus wrappers P 163–168. 실측 171–176. | **171–176**. |
| 34 | §15 행 | `[FILL IN: product-specific motion evidence]` P 169. 169는 §13 표 행. | **177**. B3 exact phrase dest **2** at 107/352. |
| 35 | F1 | Count **13** = inventory **13**. | **21** = **21**. 신설 8 + 확장 4를 목록에 반영. |
| 36 | F2 | dest를 착수 숫자로 적음. worker SHA 없음. | 실측 dest를 Pass 2에 적음. Auditor DESIGN SHA `b2c6da0b8135630b80cdf2060be25398aa4f47c6728773f3d8b7aec9ff1b110a`. |

Destination SHA `b2c6da0b8135630b80cdf2060be25398aa4f47c6728773f3d8b7aec9ff1b110a`. 줄 수 DESIGN `wc -l` **352** 불변. provenance 169→**177**. `wc -w` DESIGN **4298**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 13개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다(v12 전제 주석). 복수 주어 `they are not`(Principles/Do/Don't)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 107 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per-component gate). Named gaps 352는 재진술. dest 2.
- Motion 생략 자기 진술(`No motion token is promoted`)은 원본에 커브가 없는 브랜드의 모범(웨이브 39 kmong). 합성하지 않음.
- E2d: sibling-only 머리(`provenance.md:122`)는 원장에 남기고 portable fact가 아니라고 적는다. 「세 파일 어디에도 없다」고 단언하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:165` 머리 + 169–177 표)은 절·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. 원본 §13 자체에 식별 페르소나가 없다.
- `live-extract` DESIGN dest 0 / `components_harvested` DESIGN dest 0 / `desktop-only` DESIGN dest 0 / Pretendard license URL DESIGN dest 0 은 정정 후 로그와 맞다.
- A5a 발행 바늘 생존 계수(`Something Better` 4/2, `나와 내 가족이 사고 싶은 상품을 판매합니다.` 1/0, `더 나은 삶을 위한 유통 혁신` 2/0, `Market Kurly` 2/3, `Beauty Kurly` 2/3, `컬리 / 마켓컬리` 1/0, `tenacity, integrity, diversity, and sustainability` 1/1)는 실측과 같다.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 컬리 / 마켓컬리, Something Better, 나와 내 가족이 사고 싶은 상품을 판매합니다., 더 나은 삶을 위한 유통 혁신, Market Kurly, Beauty Kurly, 2015, tenacity/integrity/diversity/sustainability, 이해관계자 그룹(customers and families, producers, partners, shareholders, employees).
- **관측 기술** — `#5f0080` dest 10 · `#ffffff` dest 5 · `#333333` dest 6 · `#b5b5b5` dest 4 · Pretendard 761 · 18 FontFace · YAML sizes 14/18/16 · line-height `14px`/`23.94px`/`20px` · spacing 2/4/8/16 · rounded 2/4 · `box-shadow: none` · selectors · 1440px · 249px.
- **편집적 해석·인과 판단** — 계약 범위, compact commerce, 서사≠토큰, 과제 선정, 청중 묶기, Key Characteristics 재진술, UI implication, Do/Don't를 capture-bound로 읽기, hex 키 귀속, 3px 필드, radius 스케일, 폰트 evidence class, type-role 비병합, Assets 소유 거절, applicability 매핑, 1440/249 게이트, YAML spacing not-grid, voice 읽기.

세 번째 부류 중 13곳은 착수 시 인접 완전형이 있었고, 그중 4곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 8곳은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 3 / candidates 105 (2.9%). `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨: `Something Better` dest 4 / `나와 내 가족이 사고 싶은 상품을 판매합니다.` dest 1 / `더 나은 삶을 위한 유통 혁신` dest 2 / `Market Kurly` dest 2 / `Beauty Kurly` dest 2 / `컬리 / 마켓컬리` dest 1 / `tenacity, integrity, diversity, and sustainability` dest 1. 발행 라틴 손실은 안 보인다. 고치지 않음.
- **B1.** sibling 전용 `2026-07-13T11:04:52.389Z` / `1440×900` / `1.3.9` / `score 90` / `37 component` / `four observed states` / `KPDS-like` / `rgb(51, 51, 51)` / `rendered height` / `playwright_cli` DESIGN dest 0. sibling의 h3/섹션 표제 분류가 본문에 사실로 들어온 흔적 없음. 값만이 아니라 분류 침투 0.
- **D2a.** 원본 §13은 식별 페르소나 없음(FILL IN 2 + 이해관계자 그룹). 식별자·동기·소속 분류 신조어 DESIGN dest 0. Audience는 원본 그룹 `customers and families, producers, partners, shareholders, and employees`만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. Primary tasks는 캡처된 쇼핑 URL이지 페르소나 동기가 아님.
- **E2d.** 이 브랜드 0. 부재 단언 행이 자기 나열을 분모에 넣는 형태 없음.
- **A1.** 원본 YAML 컴포넌트 3레코드의 필드가 각 대응 블록에 행으로 있다. category-tab 5필드(type/fg/font/states/use) `:175–181`, form-input 6필드(type/bg/fg/font/error/use) `:200–207`, product-list-article 5필드(type/fg/radius/font/use) `:273–278`. icook형 키 경로 소실 없음 — 같은 hex가 다른 블록에만 있는 형태 없음. 복원 없음. (같은 hex의 역할 분리는 Semantic `:70`에서 E1로 원장에 맞춤.)
- **웨이브 39 hex 역할.** `#ffffff`는 canvas(`tokens.colors.canvas` `:73`) / form-input `bg` `:202` / list-control background `:225`. `#333333`는 foreground `:74` / form-input `fg` `:203` / article `fg` `:275`. `#b5b5b5`는 control-muted `:77` / category-tab `fg` `:177`. 귀속 분리는 정상이며, 착수 시 원장이 적지 않아 E1로 본문 한정과 원장 행을 실제에 맞췄다(고친 것은 위 #4·#16).

AUDIT_DONE fixes=36

## 개정 — E1 1:1 only (2026-08-29)

착수: `node scripts/check-limiter-ledger.mjs kurly` → 본문 20 / 원장 22 (139–161) MISMATCH.

계수 단위는 스크립트와 같다. 본문 = 세 조각이 **같은 줄**에 있는 완전형 줄. 원장 = B2a 절의 파이프 데이터행(머리말·구분행 제외). `grep -c` 미사용. 본문 문장 의미·토큰·표·applicability·구조·원본 무변경.

본문 완전형 줄 20: 9, 11, 17, 26, 30, 39, 48, 57, 70, 85, 87, 91, 99, 123, 133, 145, 169, 285, 289, 294. 세 조각이 빠진 줄 0.

체커가 센 22행(139–161) ↔ 본문:

| 원장 줄 | Location | 본문 | 세 조각 한 문장 | 판정 |
|---|---|---|---|---|
| 139 | 표 머리 `Location in DESIGN.md` | 없음 | 해당 없음 | 데이터행이 아님. 첫 셀이 `location` 다음에 바로 `\|`가 아니라 체커가 데이터로 센다. `Location`으로 바꿔 머리말로 건너뛰게 함. 한정 행이 아니라서 삭제하지 않음. |
| 141 | Experience Scope (세 URL = 계약 범위) | `:9` | 있음. `Treating those three captured shopping URLs…` | 유지. 본문 한 줄·한 문장. |
| 142 | Experience Scope (compact commerce + related-without-filling) | `:11` 첫 완전형 문장 | 있음 | **143과 합침.** 같은 본문 줄 `:11`. 체커 단위는 줄이므로 본문 1건. 읽기 두 개를 한 행에 적음. |
| 143 | Experience Scope (intro/profile vs live vs 2015 서사) | `:11` 둘째 완전형 문장 | 있음 | **142로 합침.** 별도 줄이 아님. 대응 본문 줄을 이미 142가 씀. |
| 144 | Primary tasks | `:17` | 있음 | 유지 |
| 145 | Audience | `:26` | 있음 | 유지 |
| 146 | Distinctive traits | `:30` | 있음 | 유지 |
| 147 | Principles | `:39` | 있음 | 유지 |
| 148 | Application rules | `:48` | 있음 | 유지 |
| 149 | Avoid | `:57` | 있음 | 유지 |
| 150 | Semantic color | `:70` | 있음 | 유지 |
| 151 | Spacing (YAML 2/4/8/16 비병합) | `:85` | 있음 | 유지. Spacing 두 행의 후보는 여기와 `:87`. **합치지 않음** — 본문 두 줄, 각 줄에 완전형. |
| 152 | Spacing (`3px` 필드) | `:87` | 있음 | 유지 |
| 153 | Shape (not-universal-scale + 2px/4px pairing) | `:91` | 있음 | 유지. Shape 후보는 여기와 `:99`. **합치지 않음** — 본문 두 줄. |
| 154 | Shape (0px 비병합, `rounded.none` 비발명) | `:99` | 있음 | 유지 |
| 155 | Font evidence | `:123` | 있음 | 유지 |
| 156 | Type roles | `:133` | 있음 | 유지 |
| 157 | Assets | `:145` | 있음 | 유지 |
| 158 | Capture record | `:169` | 있음 | 유지 |
| 159 | Layout (1440/249) | `:285` | 있음 | 유지. Layout 후보는 여기와 `:289`. **합치지 않음** — 본문 두 줄. |
| 160 | Layout (YAML spacing not-grid) | `:289` | 있음 | 유지 |
| 161 | Content & Locales | `:294` | 있음 | 유지 |

본문에 한정이 빠진 자리 0 — 본문 문장은 안 고침. 과잉 한정 데이터행 0(머리말은 한정이 아님). 합친 것은 `:11`을 가리키던 원장 두 행뿐.

수정 후: `node scripts/check-limiter-ledger.mjs kurly` → 본문 **20** / 원장 **20** (141–160) 1:1 OK. `node test-v2/tools/migrate-reference.mjs --brand kurly --gate-only` → PASS, `problems []`. DESIGN SHA 불변 `b2c6da0b8135630b80cdf2060be25398aa4f47c6728773f3d8b7aec9ff1b110a`. 줄 수 DESIGN 352 불변. provenance 177→**176**.

FIX_DONE kurly e1=0
