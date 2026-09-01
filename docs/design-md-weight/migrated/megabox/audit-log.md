# MEGABOX 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/megabox/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/megabox/DESIGN.md`
검증 sibling: `web/references/megabox/.verification.md` — `find web/references/megabox -type f`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-01

발행 1차 UI 사양 없음(getdesign Internal Error; refero Internal Error). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Megabox-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Distinctive `:38`은 Key characteristics 재진술만 이름하고 다섯 번째 항목(`interactionCount: 0`)은 이름하지 않았다. Semantic `:80`은 canvas/on-primary/`#FFFFFF` 비병합만 이름하고 YAML `movie-like-button.bg` `#ffffff` 병기를 빠뜨렸다. `:88`은 `#EBEBEB` 비승격만 이름하고 YAML `#ebebeb`를 빠뜨렸다. Family `:136` Do-not-replace와 reservation/theater/carousel의 4px-as-compact-control · proof-only · no-component-token은 세 번째 부류인데 인접 완전형이 없었다. YAML `tokens.components.movie-like-button.bg` `#ffffff`와 `border` `1px solid #ebebeb`는 Movie list action 블록에 키 경로 행이 없었다(icook; 같은 hex가 Semantic에 있어도 보존이 아니다). 로그 dest는 줄 목록과 출현 수가 어긋났다.

문장 분류: 브랜드 발행 사실(Life Theater·공감/창조/재미·YAML 값·§표 수치) / 관측 기술(hex·geometry·`type: button`) / 편집적 해석·인과 판단(토큰 표면 읽기, 다섯 번째 distinctive, YAML/§4 대소문자 병기, Family 치환 금지, proof-record 비토큰화). 세 번째 부류와 원장 정확성만 수정. 토큰 역할 표·상태 applicability·구조는 그대로.

## 수정 목록 (29건)

### B2a — 인접 한정 (본문 5건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:38` — Distinctive traits | 다섯 번째 항목 `interactionCount: 0` / default-enabled movie-list `button`은 세 번째 부류. 기존 한정은 Key characteristics 재진술과 분위기 읽기만. | 기존 완전형에 그 항목이 §1 Key characteristic이 아니라 캡처 경계라고 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:80` — Semantic color | YAML `movie-like-button.bg` `#ffffff`를 source-body Background `#FFFFFF` 옆에 두는 것은 세 번째 부류. 기존 한정은 canvas / on-primary / `#FFFFFF` 비병합만. | 기존 완전형에 YAML `bg` `#ffffff` 병기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:88` — `#EBEBEB` field | YAML `1px solid #ebebeb`를 source-body `#EBEBEB` 옆에 두는 것은 세 번째 부류. 기존 한정은 색 역할 비승격만. | 기존 완전형에 YAML `#ebebeb` 병기를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:134` — Family | “Do not replace… outside the public-web scope” / Roboto·text-security-disc 비대체는 세 번째 부류. `:122`는 표 앞 evidence-class 해상이라 인접이 아니다. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:200` — proof-record controls | reservation 4px as compact-control geometry not a second button token, theater lookup proof-only, carousel no component token은 세 번째 부류. `:168`은 Capture record 머리라 표·서브섹션과 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **26**, `not Megabox-authored` **26**, `separately published UI specification` **26**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived` P dest **1** at 182). `migration-log.md` mention은 use가 아니다.

한정 줄: 11, 13, 15, 21, 30, 38, 48, 59, 67, 80, 88, 94, 104, 108, 112, 122, 134, 147, 151, 153, 168, 200, 224, 229, 231, 277.

### A1 — 키 경로 복원 (3건)

문자열 grep으로 「값이 파일 어딘가에 있다」는 부족하다. YAML `tokens.components.movie-like-button.<field>`가 Movie list action 블록에 행으로 있어야 한다.

| # | 키 경로 | 무엇이 빠졌나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | `movie-like-button.bg` | 블록은 `#FFFFFF`만. YAML `#ffffff`는 Semantic canvas/on-primary에만 있음 (icook). | Background 행에 `/ token-set \`bg\` \`#ffffff\`` 병기. |
| 7 | `movie-like-button.border` | 블록은 `1px solid #EBEBEB`만. YAML `1px solid #ebebeb`는 산출 DESIGN dest **0**이었다. | Border 행에 `/ token-set \`border\` \`1px solid #ebebeb\`` 병기. |
| 8 | `movie-like-button.states` | YAML 전문은 Capture record `:160`에만. 대응 블록 Observed는 §4 본문 문구. | Movie list action에 YAML states 행 복원 (`:187`). |

복원은 YAML 바이트 병기이다. keep-both 판단은 `:80`/`:88` 한정이 이름한다.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | 헤더 | 24 complete / 24 data rows. | **26** / **26**. |
| 10 | Distinctive 행 191 | Key characteristics·분위기만. 본문 `:38`이 이제 캡처 경계도 이름한다. | `interactionCount: 0` not-a-fifth-Key-characteristic를 행에 추가. |
| 11 | Semantic 행 195 | 역할·비병합만. 본문 `:80`이 이제 YAML `bg` 병기도 이름한다. | 그 판단을 행에 추가. |
| 12 | `#EBEBEB` 행 196 | 비승격만. 본문 `:88`이 이제 YAML `#ebebeb`도 이름한다. | 그 판단을 행에 추가. |
| 13 | Family 행 | 없음. 본문 `:134` 신설. | 행 202 신설. |
| 14 | proof-record controls 행 | 없음. 본문 `:200` 신설. | 행 207 신설. |
| 15 | Type roles→Named gaps 포인터 | DESIGN.md 145/149/151/166/219/224/226/272. 삽입 후 실제 147/151/153/168/224/229/231/277. | 포인터를 실측 줄로 갱신. 데이터 186–211. |
| 16 | Byte-form notes | canvas/on-primary/`#FFFFFF` 비병합과 `#EBEBEB` 필드만. YAML `bg`/`border` 대소문자 병기가 없음. | YAML `#ffffff`/`#ebebeb`를 source-body 대문자 옆에 둔다고 적음. |

헤더 / 데이터 행 **24 → 26** at 186–211 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (13건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 줄 수가 아니라 출현 수. 본문을 고친 뒤 A5a·F2 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | YAML identity 행 | homepage DESIGN 9/23/24/25 dest 7 — line 9에 4회. `#503396` 8줄 목록 dest 9(80에 2회). `메가박스` P dest를 11만. favicon DESIGN 149. | homepage dest **7** at **9×4**/23/24/25 · P dest **20**. `#503396` DESIGN dest **9** at 9/11/40/**80×2**/82/164/178/208 · P dest **6** at 15/27/**61×2**/186/195. `메가박스` P dest **3** at 11/217/219. favicon DESIGN **151**. |
| 18 | YAML metadata 행 | exact `tokens.source: reconciled` P 19/27/153. 콜론 표기는 P dest **2** at 27/153. 19는 표 칸. `components_harvested: true` 동형. | exact colon DESIGN dest **0** / P dest **2**. 표 칸 dest **1** at 19 / 21. |
| 19 | YAML colors 행 | canvas `#ffffff` 80/83/84/203 (줄 목록). `#444444` 13/41/85 dest를 3줄로 적음. | `#ffffff` dest **8** at 80×3/83×2/84/177/208. `#FFFFFF` dest **5**. `#444444` dest **4** at **13×2**/41/85. `#666666` dest **3** at 41/86/213. `#EBEBEB` dest **4**. YAML `#ebebeb` dest **2**. |
| 20 | YAML typography 행 | Family 134; `22.5px` 142/145; `27.999px` 143; B2a 145. | Family 136 (B2a **134**). `22.5px` dest **3** at **144×2**/147. `30.7989px` dest **3** at **145×2**/147. `27.999` dest **3**; `27.999px` dest **1** at 145. B2a **147**. |
| 21 | YAML spacing / shadow 행 | `0px 5px` 94/179; `box-shadow: none` 108/283. | `0px 5px` dest **2** at 94/**181**. `box-shadow: none` dest **2** at 108/**288**. |
| 22 | YAML components 행 | type 172; fields 175–182; states 158; kind 171; selector 23/183/184. YAML `bg`/`border`/`states`가 블록 행이 아님. | type **174**. fields **177–184** (bg/border 병기). states dest **2** at **160/187**. kind **173**. selector dest **3** at 23/**185/186**. |
| 23 | §2–§10 행 | Layout 9/217/219; imagery 151; a11y 162; official language 224; voice 228–238. 삽입 후 밀림. | `1440×900` dest **4** at 9/222/**224×2**. sizes **222**. imagery B2a **153**. a11y **164**. language **229**. voice 233–235 / table 237–241 / copy **243** / B2a **231**. `a.button.purple.bokdBtn` dest **2** at 162/**206**. |
| 24 | §12 / §14 / §15 행 | inventory 24=24; `interactionCount: 0` 44/158; C1 164; Named gaps 275. | inventory **26** at P 186–211. `interactionCount: 0` dest **3** at **38**/44/**160**. C1/C3 dest **1** at **166**. Named gaps motion **280**. Capture-record B2a **168**. |
| 25 | Footer 행 | getdesign/refero P 114–115 only. 실측 각 dest **2** (Proof notes 158). | `getdesign` P dest **2** at 114/158. `refero` P dest **2** at 115/158. Company/recruit/Naver DESIGN dest **0** / P dest **3**. |
| 26 | A5a dest 표 | NanumBarunGothic DESIGN dest 15. Family 한정 신설 후 dest **16**. | dest **16**. 다른 21개 바늘 dest는 착수와 동일(>0, 미생존 0). |
| 27 | F1 | 24/24/24 at 구 줄 목록. | **26/26/26**. 한정 줄 목록을 실측으로 교체. 신설 2 + 확장 3을 적음. |
| 28 | F2 | dest를 착수 줄 목록으로 적음. 본문 수정 후 재실측 없음(lablup). | 출현 수·줄 다중도를 재실측해 갱신. B2a DESIGN dest **26** / P dest **1** (색인). |
| 29 | SHA | Worker DESIGN `ed6277a9…` / P `4d5a123a…`만. | Auditor DESIGN `b869b52aab36c183e5f21ba7c8bce518573ce65b3d09e2c7e49aa2ba02aba4f9`. Auditor P `ddc966692d5fe22b92137d454bfbb581a04124f48c44ed9bf91741adf96545d3`. |

Destination SHA DESIGN `ed6277a9dd6d003e2c5d4d8a93b181253b8e3b5c9ae20a28c7d6b65c4ab39b7e` → `b869b52aab36c183e5f21ba7c8bce518573ce65b3d09e2c7e49aa2ba02aba4f9`. provenance `4d5a123aa58929aa24886c5bc9e46d2f3a47bd4fe013a9562b7edc096c168bf2` → `ddc966692d5fe22b92137d454bfbb581a04124f48c44ed9bf91741adf96545d3`. 줄 수 DESIGN `wc -l` 286→**291**. provenance 219→**221**. `wc -w` DESIGN **4359**.

E2c: B3 전문 `DESIGN.md` 114 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:48` dest 1. 「B3 유지」를 원본 문장에 대해 주장하지 않음.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 역할 표, 컴포넌트 상태 applicability, 절 구조. 원본·sibling 미수정.
- 기존 24개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다 (v12 전제 주석).
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- Motion 부재 문장(`intentionally omitted rather than inferred`)은 원본 §15. 합성을 유도하지 않음 (kmong).
- YAML `type: button` dest 1 at 174. Kind: interactive dest 1 at 173.
- `focus-visible` 행에 hex 없음 (B1).
- 원본 §15에 곡선·duration 값이 없음. 되살릴 값 없음 (kkday T2 관례 해당 없음).

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — MEGABOX / 메가박스 / Life Theater / 공감·창조·재미 / Empathy·Creation·Fun / 상영 시간 확인하기 등 세 일러스트 / YAML `use` 바이트 / 공식 연혁·mission.
- **관측 기술** — `#503396` `#ffffff` `#FFFFFF` `#444444` `#666666` `#EBEBEB` / `22.5px` `30.7989px` `13.0005px` / `type: button` / `surface-2::[data-omd-capture="29"]` / `box-shadow: none`.
- **편집적 해석·인과 판단** — 세 URL을 토큰 표면으로 읽기, 2017 BI를 현재 표현으로 부르기, 과제/청중 선정, 다섯 번째 distinctive, 색 역할 비병합, YAML/§4 대소문자 병기, Family 치환 금지, proof-record 비토큰화, Named gaps 프레이밍.

세 번째 부류 중 24곳은 착수 시 인접 완전형이 있었고, 이름되지 않은 판단 3곳은 기존 한정에 접어 넣었으며, 인접하지 않은 2곳은 그 자리에 신설했다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **3** / candidates **86**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다. 손 대조 발행 카피 22종 DESIGN dest >0, 미생존 0. 라틴 발행 카피 손실은 눈에 띄지 않음 (`Life Theater` dest 5 · `MEGABOX` dest 2 · `Empathy`/`Creation`/`Fun` dest 2 · `seven golden-ratio boxes` dest 2 · `purple-indigo` dest 1 · `meet, play, and share` dest 2). 고치지 않음.
- **B1.** sibling `web/references/megabox/.verification.md` 존재(경로 직접). sibling 전용 값 `74px` / `72px` / `rgb(34, 34, 34)` / `rgb(216, 217, 219)` / `106px × 30px` / `16px × 30px` / `197px × 34px` / `coverage score 80` / `2026-07-13T15:02:11.071Z` / capture id `30`/`91`/`73` / `surface-2::h2` / `home::body` DESIGN dest **0**. **`0px 10px` DESIGN dest 1 at 94 / 원본 dest 0 / sibling dest 1** — 검색 입력 padding 표기가 sibling raw sample에서 본문으로 승격된 값. 구조 분류 `portal H2` dest 0. 고치지 않음(B1 보고).
- **D2a.** 식별자·나이·도시 원본에 없음. Audience는 Cinema visitor / Member / Employee or candidate (원본 §13 그룹). 동기·소속 신조어 DESIGN/P dest 0. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. 처분 행은 필드 종류만.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. sibling-only 머리와 Omission ledger는 「this file에 없다」고 단언하지 않는다. 로그 dest 0은 DESIGN.md를 분모로 둔다.
- **hex 귀속.** `#ffffff`는 canvas (`:83`) · on-primary (`:84`, reservation text `:208`) · YAML component `bg` (`:177`). `#FFFFFF`는 source-body component Background. `#503396`는 catalog primary / `tokens.colors.primary` / movie-list Text / reservation fill. 분리를 `:80` 한정과 Byte-form·inventory에 적음. 본문 역할은 고치지 않음.
- **충돌 처리 (항목 5).** 착수 시 색 토큰은 YAML 소문자, 컴포넌트 필드는 §4 대문자만 — 같은 대소문자 충돌을 자리마다 다르게 처리. A1 병기 후 bg·border 모두 keep-both. 고친 범위는 키 경로 복원이다.

AUDIT_DONE fixes=29

## 개정 — E1 1:1 only (2026-09-01)

착수: `node scripts/check-limiter-ledger.mjs megabox` → 본문 26 / 원장 27 (184–211) MISMATCH.

계수 단위는 스크립트와 같다. 본문 = 세 조각이 **같은 줄**에 있는 완전형 줄 (`derived editorial implementation inference` / `not Megabox-authored` / `separately published`). 원장 = `## Portable derived-editorial scope`의 `|` 데이터행(머리말·구분행 제외). `grep -c` 미사용. 본문 문장 의미·토큰·표·applicability·구조·원본 무변경.

본문 완전형 줄 26: 11, 13, 15, 21, 30, 38, 48, 59, 67, 80, 88, 94, 104, 108, 112, 122, 134, 147, 151, 153, 168, 200, 224, 229, 231, 277. 각 줄 inf=1 / auth=1 / sep=1, 완전형 문장 1. 세 조각이 빠진 줄 0.

체커가 센 27행(184–211) ↔ 본문:

| 원장 줄 | Location | 본문 | 세 조각 한 문장 | 판정 |
|---|---|---|---|---|
| 184 | 표 머리 `Portable location` | 없음 | 해당 없음 | 데이터행이 아님. 첫 셀이 `location` 다음에 바로 `\|`가 아니라 체커가 데이터로 센다. `Location`으로 바꿔 머리말로 건너뛰게 함. 한정 행이 아니라서 삭제하지 않음. |
| 185 | 구분행 | — | — | 스킵. 27에 안 들어감. |
| 186 | Experience — Scope token-surface (`DESIGN.md` 11) | `:11` | 있음. 세 URL = 토큰 표면 / `#503396` not filled-CTA | 유지. 본문 한 줄·한 문장. |
| 187 | Experience — Scope Life Theater (`DESIGN.md` 13) | `:13` | 있음. 2017 Life Theater current expression | 유지. `:11`과 다른 줄. **합치지 않음**. |
| 188 | Experience — Scope §11 narrative (`DESIGN.md` 15) | `:15` | 있음. 2000–2017 narrative not product CSS | 유지 |
| 189 | Experience — Primary tasks (`DESIGN.md` 21) | `:21` | 있음 | 유지 |
| 190 | Experience — Audience (`DESIGN.md` 30) | `:30` | 있음 | 유지 |
| 191 | Experience — Distinctive traits (`DESIGN.md` 38) | `:38` | 있음. Key characteristics + `interactionCount: 0` 캡처 경계 | 유지 |
| 192 | Experience — Principles (`DESIGN.md` 48) | `:48` | 있음 | 유지 |
| 193 | Experience — Application rules (`DESIGN.md` 59) | `:59` | 있음 | 유지 |
| 194 | Experience — Avoid (`DESIGN.md` 67) | `:67` | 있음 | 유지 |
| 195 | Foundations — Semantic color (`DESIGN.md` 80) | `:80` | 있음 | 유지 |
| 196 | Foundations — Semantic `#EBEBEB` (`DESIGN.md` 88) | `:88` | 있음 | 유지. `:80`과 다른 줄. **합치지 않음**. |
| 197 | Foundations — Spacing (`DESIGN.md` 94) | `:94` | 있음 | 유지 |
| 198 | Foundations — Shape (`DESIGN.md` 104) | `:104` | 있음 | 유지 |
| 199 | Foundations — Elevation (`DESIGN.md` 108) | `:108` | 있음 | 유지 |
| 200 | Foundations — Motion absence (`DESIGN.md` 112) | `:112` | 있음 | 유지 |
| 201 | Typography — Font evidence (`DESIGN.md` 122) | `:122` | 있음 | 유지 |
| 202 | Typography — Family (`DESIGN.md` 134) | `:134` | 있음 | 유지. `:122`와 다른 줄. **합치지 않음**. |
| 203 | Typography — Type roles form (`DESIGN.md` 147) | `:147` | 있음 | 유지 |
| 204 | Typography — Assets favicon (`DESIGN.md` 151) | `:151` | 있음 | 유지 |
| 205 | Typography — Assets imagery (`DESIGN.md` 153) | `:153` | 있음 | 유지. `:151`과 다른 줄. **합치지 않음**. |
| 206 | Components — Capture record (`DESIGN.md` 168) | `:168` | 있음 | 유지 |
| 207 | Components — proof-record controls (`DESIGN.md` 200) | `:200` | 있음 | 유지. `:168`과 다른 줄. **합치지 않음**. |
| 208 | Layout & Platforms (`DESIGN.md` 224) | `:224` | 있음 | 유지 |
| 209 | Content & Locales — official language (`DESIGN.md` 229) | `:229` | 있음 | 유지 |
| 210 | Content & Locales — voice table (`DESIGN.md` 231) | `:231` | 있음 | 유지. `:229`와 다른 줄. **합치지 않음**. |
| 211 | Governance — Named gaps (`DESIGN.md` 277) | `:277` | 있음 | 유지 |

본문에 한정이 빠진 자리 0 — 본문 문장은 안 고침. 과잉 한정 데이터행 0(머리말은 한정이 아님). 합친 원장 행 0.

수정 후: `node scripts/check-limiter-ledger.mjs megabox` → 본문 **26** / 원장 **26** (186–211) 1:1 OK. `node test-v2/tools/migrate-reference.mjs --brand megabox --gate-only` → PASS, `problems []`. DESIGN SHA 불변 `b869b52aab36c183e5f21ba7c8bce518573ce65b3d09e2c7e49aa2ba02aba4f9`. provenance SHA `ddc966692d5fe22b92137d454bfbb581a04124f48c44ed9bf91741adf96545d3` → `4e3b2c88d0ac8ee249f67280ad36c6ded4c40da33f028d0b28b5857496236c89`. 줄 수 DESIGN 291 불변. provenance 221 불변. A5a·F2 dest 횟수 불변(본문 미수정).

FIX_DONE megabox e1=0

## 개정 — 의미 검토 FAIL 2 (2026-09-01)

대상: `docs/design-md-weight/migrated/megabox/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (26=26, 186–211).

### 결함 1 — sibling 전용 padding을 원본 dual-write인 것처럼 승격 (A1)

Foundations spacing에서 `0px 10px`를 빼고, 원본 쌍(unitless `search-input-inline: 10` + `10px`)만 남김. sibling 표기는 provenance sibling-only 표 `:66`에만 둠.

| 문자열 | 원본 | sibling | DESIGN | P |
|---|---:|---:|---:|---:|
| `0px 10px` | 0 | 1 | 0 | 2 |
| `search-input-inline: 10` | 1 | 0 | 2 | 2 |
| `10px` (본문 관찰; `0px 10px` 부분문자열 제외 후 dest 4) | — | — | 4 | — |
| `197px × 34px` | 0 | 1 | 0 | 2 |

### 결함 2 — 예약 링크 4px를 “이 링크에서 관측”으로 융합 (A1 · 항목 9)

B2a `:200`과 proof-record `:209`에서 4px-on-this-link 주장을 제거하고, 원본 표기 `36px-high purple reservation **link**`로 되돌림. sibling `74px × 36px` / `15px/400/36px`는 본문 dest 0 유지.

| 문자열 | 원본 | sibling | DESIGN | P |
|---|---:|---:|---:|---:|
| `Radius observed at 4px on this link` | 0 | 0 | 0 | 0 |
| `reservation link’s 4px radius` | 0 | 0 | 0 | 0 |
| `compact-control geometry` | 0 | 0 | 0 | 0 |
| `36px-high purple reservation **link**` | 1 | 0 | 2 | 1 |
| `36px-high` | 1 | 0 | 3 | 1 |
| `4px` | — | — | 8 | — |
| `74px × 36px` | 0 | 1 | 0 | 1 |

`node scripts/check-limiter-ledger.mjs megabox` → 본문 26 = 원장 26 (186–211). `migrate-reference.mjs --brand megabox --gate-only` → PASS.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML spacing / F2 / sibling-only | `0px 10px` DESIGN / P | 1 / 1 | **0** / **2** |
| YAML spacing / F2 | `10px` DESIGN | (미표기 4) | **4** |
| §4 / F2 | `36px-high` DESIGN | 2 | **3** |
| §4 / F2 | `36px-high purple reservation **link**` DESIGN | 1 | **2** |
| §4 / F2 / sibling-only | `Radius observed at 4px on this link` DESIGN | 1 | **0** |
| §4 / F2 | `reservation link’s 4px radius` DESIGN | 1 | **0** |
| §4 / F2 | `compact-control geometry` DESIGN / P | 2 / 1 | **0** / **0** |
| F2 | `4px` DESIGN | 10 | **8** |
| F2 | `proof-record geometry` DESIGN | 1 | **2** |
| F2 | `search-input padding` DESIGN | 1 | **0** |
| YAML spacing | `0px 5px` DESIGN | 2 | **2** |
| YAML spacing | `search-input-inline: 10` DESIGN | 2 | **2** |

로그 표 행: YAML spacing · §4 Components · Sibling handling · F2 spacing · F2 reservation/fusion · SHA. provenance sibling-only `:61`/`:66`과 inventory `:207`은 원문 귀속을 이름(E1, 행 수 26 불변).

Destination SHA DESIGN `b869b52aab36c183e5f21ba7c8bce518573ce65b3d09e2c7e49aa2ba02aba4f9` → `e941b0e17e465170dfc6a38177ec08c36cee7af335e0b3a1f75feba7cc402509`. provenance `4e3b2c88d0ac8ee249f67280ad36c6ded4c40da33f028d0b28b5857496236c89` → `0ac88f32c100f6b03a20d3f64d2761d682404fda896795782aa604119a3fddbc`. 줄 수 DESIGN `wc -l` **291** 불변. `wc -w` DESIGN **4359 → 4391**.

FIX_DONE megabox fixed=2 logdest=12
