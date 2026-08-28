# kkday 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kkday/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kkday/DESIGN.md`
검증 sibling: `web/references/kkday/.verification.md` — `find`로 경로 직접 확인. 파일 없음(미측정이지 dest 0이 아님). provenance Sibling handling이 그 부재를 적는다.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KKday-authored or a separately published UI specification`을 요구한다. 기존 42건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 42 / 원장 42. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:150` "They are not easing curves"는 세 번째 부류인데 `:179` 한정이 표·spring·signature·reduce-motion 뒤에 있어 인접하지 않았다. Assets `:240` "do not replace it with invented brand-color decoration"은 `:239` favicon 한정 밖에 있었다(kintone형). Content `:558` "Published names … kept byte-exact"는 `:556` voice-sample class 한정 밖에 있었다.

## 수정 목록 (19건)

### B2a — 인접 한정 (본문 4건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:150` — Motion durations | "kept as duration tokens. They are not easing curves."는 세 번째 부류. `:179`는 표·spring·signature·reduce-motion 뒤라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:179` — Motion wrap | 기존 한정이 duration-not-curve까지 이름했다. `:150`이 그 판단을 가져갔다. | duration-not-curve 절을 빼 생략·signature·reduce-motion·five-kind만 남김. 발생 수 +0. |
| 3 | `DESIGN.md:240` — Assets photography | "do not replace it with invented brand-color decoration"는 세 번째 부류. `:239`는 favicon identity pointer만. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:558` — Published names | "Published names and lines the source records, kept byte-exact"는 세 번째 부류. `:556`은 voice-sample verified/illustrative class만. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 45, `not KKday-authored` 45, `separately published UI specification` 45. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 1은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 47, 58, 69, 84, 104, 120, 133, 146, 150, 168, 179, 189, 210, 214, 228, 235, 239, 240, 264, 266, 281, 305, 326, 351, 373, 395, 407, 417, 428, 450, 471, 488, 501, 505, 528, 533, 556, 558, 592.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | 헤더 / 행 수 | 42 complete / 42 data rows. | **45** / **45**. |
| 6 | Motion 행 16 | durations-as-tokens / omit-curves / signatures / five-kind. 본문 `:150`이 duration-not-curve를, `:179`가 나머지를 이름한다. | 행 16에서 duration-not-curve를 빼고 reduced-motion을 명시. |
| 7 | Motion durations 행 | 없음. 본문 `:150` 신설. | 행 43 신설. |
| 8 | Assets photography 행 | 없음. 본문 `:240` 신설. | 행 44 신설. |
| 9 | Published names 행 | 없음. 본문 `:558` 신설. | 행 45 신설. |

헤더 / 데이터 행 **42 → 45** (E1 1:1). 데이터 133–178.

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | YAML identity 행 | homepage P dest **4** at 13/47/56 plus en-us 48/57. `grep -o 'https://www.kkday.com'`는 `/en-us` 접두까지 센다. 실측 DESIGN **2** / P **5**. | P dest **5** at 13/47/48/56/57. |
| 11 | YAML identity 행 | `#FF5C00` dest with `#ff5c00` **19** (줄 수). 실측 `#FF5C00` **18** · `#ff5c00` **17**. | 두 hex를 따로 dest **18** / **17**. |
| 12 | YAML metadata 행 | `prose-derived` DESIGN dest **2** at 9/247. 9에 2회. | dest **3** at 9×2/247. Exact `tokens.source: prose-derived` DESIGN dest **0** 유지. |
| 13 | YAML colors 행 | `#BDBDBD` dest **4** at 84/95/262/280/288 (5줄을 dest 4로 적음). | dest **5**. |
| 14 | YAML spacing 행 | `tokens.spacing.md: 12` dest at 114/120. 114는 표 키 `tokens.spacing.md`이지 colon-12가 아님. 실측 dest **4** at 120/326/373/501. | dest **4** at 120/326/373/501. |
| 15 | YAML spacing 행 | `tokens.spacing.base: 16` dest at 115/120/281/305/351/373. 115는 표 키. 실측 dest **5**. | dest **5** at 120/281/305/351/373. |
| 16 | YAML rounded 행 | `full: 9999` dest **2** at 131/133. 133에 2회. | `9999` dest **3** at 131/133×2. |
| 17 | §11 행 | 2014 dest **2** at 13/558 — 558에 연도 없음(13×2). Ming Chen dest **2** — 실측 **3** at 13×2/558. Star Travel / Ezfly / 90+ / 300,000 / H.I.S. / Rezio 묶음을 dest **1** at 13으로 적음. | 2014 dest **2** at 13×2. Ming Chen **3**. Star Travel **3**. Ezfly **3**. 90+ **2**. 300,000 **2**. US$250 million **2**. Series D **2**. H.I.S. **3**. Rezio / FineDayClub / ActivityJapan 각 **2**. |
| 18 | Pass 1 | Count **42** = inventory **42**. | **45** = **45**. 신설 3을 목록에 반영. |
| 19 | Pass 2 / 헤더 SHA | dest를 착수 숫자로 적음. worker SHA만. | 실측 dest를 Pass 2에 적음. Auditor SHA `021d3bc0209aa9cb22775647cca90a89f05c9d4f4a70cf5b5d3f08030ac038be`. |

Destination SHA `87403fbfdda1994301a1d6d19807db9855826395e4c4ce768edcae6db5566140` → `021d3bc0209aa9cb22775647cca90a89f05c9d4f4a70cf5b5d3f08030ac038be` (한정 신설·재정렬 후). 줄 수 DESIGN `wc -l` **598** 불변. provenance 184→**187**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본 미수정.
- 기존 42개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- B3 전문 `DESIGN.md` 181: `transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1. `:179`가 five-kind gate를 이름하고 한 줄 간격으로 인접.
- `:533` register-as-voice와 `:546` Forbidden phrases는 원본 §10 목록 재수록(관측). 금지 목록을 이 계약의 Don'ts로 다시 읽는 문장은 없다.
- `loading \| applicable` DESIGN dest **1** at 289. `Not in the token set` dest **3** at 448/469/487. favicon dest 1/1. Exact `tokens.source: prose-derived` DESIGN dest 0. `components_harvested` DESIGN dest 0 / P dest 3.
- E2d: sibling 부재 문장(`provenance.md:76`)은 파일 없음을 적고 「세 파일 어디에도 없다」고 단언하지 않는다. 로그의 DESIGN dest 0 측정은 다른 파일을 분모로 둔다.

## 범위 밖 관찰

- **A5a.** 로그 `compared` 0 / `candidates` 247. 발행 라틴(`Book Now` dest 8 / `Add to Cart` dest 5 / `See availability` dest 2 / `View Details` dest 4 / `See more` dest 4 / `Instant confirmation` dest 9 / `Free cancellation` dest 7 / `Mobile voucher` dest 3 / `Only 2 left` dest 3 / `Selling fast` dest 2 / `EXPLORE. DREAM. DISCOVER` dest 3 / `Explore. Dream. Discover.` dest 2 / `View cart` dest 2 / `HURRY!` dest 2 / `LAST CHANCE!` dest 2 / `BUY NOW OR MISS OUT!` dest 2 / `Oops! Something went wrong` dest 2 / `No results found.` dest 2 / `the best tour in the world` dest 2 / `SIM/WiFi` dest 3)은 본문에 있다. 발행 라틴 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 파일 없음(`find` 직접 경로, 미측정). `pinkoi` DESIGN dest 0 / P dest 2 — 원장 style-ref, 본문 승격 없음. 값·h3/섹션 표제 분류 침투 0.
- **D2a.** 식별(`怡君` / `Yi-Jun` / `Kenji` / `Wing`) DESIGN/P dest 0. 동기(`weeks before` / `theme-park` / `Budget-conscious` / `skip ticket` / `mobile app almost` / `night before flying`) DESIGN dest 0. 소속 분류 신조어(`Solutions Partner`) dest 0. `wishlist` DESIGN dest 1 at 254는 원본 §14 Empty (wishlist) 상태 행이지 페르소나 동기 승격이 아님. Audience는 원본 그룹 `TW/HK/JP independent travelers and APAC outbound tourists`만. **로그 §13 행은 `怡君` / `Yi-Jun` / `Kenji` / `Wing`을 dest 0 측정용으로 다시 열거한다 — D2a 재수록. 고치지 않음(범위 밖).**
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN/P를 분모로 두고 로그 자신을 넣지 않는다.
- **A1 키 경로.** YAML `tokens.components` 9레코드의 type/bg/fg/radius/padding/font/use 및 기록된 hover/focus/states/border/active가 각 대응 블록에 행으로 있다(`button-primary` `:271–279`, `button-outline` `:296–304`, `button-ghost` `:320–325`, `input` `:341–350`, `card-experience` `:366–371` padding YAML `0`, `badge-sale` `:388–394`, `badge-trust` `:400–406`, `badge-urgency` `:412–416`, `tab-nav` `:422–426`). icook형 소실 없음. 복원 없음.

AUDIT_DONE fixes=19
