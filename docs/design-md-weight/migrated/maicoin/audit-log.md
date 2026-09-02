# maicoin 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/maicoin/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/maicoin/DESIGN.md`
검증 sibling: `web/references/maicoin/.verification.md` — `find`로 경로 직접 확인. **PRESENT**.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양은 원본 YAML에 `ds.name` / `ds.url` / `ds.type`이 없다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MaiCoin / MAX-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 `derived editorial implementation inference` 22 / `not MaiCoin / MAX-authored` 22 / `separately published UI specification` 22 / `separately published` **23** (Content `:506` `separately published copy manual`이 완전형 안의 명사구). 원장 `## Derived editorial inventory` 22행 at 155–176. `check-limiter-ledger.mjs` 본문 22 = 원장 22. 양쪽이 함께 좁았다(fastcampus): 본문 한정이 이름하지 않는 세 번째 부류가 인접에 남아 있었다.

문장 분류: 브랜드 발행 사실(立即註冊·註冊帳號·立即購買·電子信箱 / 密碼·步驟 라벨·About 2014/Alex Liu/AMIS/MAX·YAML 값) / 관측 기술(hex·px·Iosevka·`box-shadow: none`·캡처 기하) / 편집적 해석·인과 판단(표면 귀속, 같은-hex 역할 분리, 비해합, 스케일 거부, 승격 게이트, 페르소나 삭제 읽기, homepage-layer≠발행 사양). 세 번째 부류만 수정 대상.

## 수정 목록 (25건)

### B2a — 인접 한정 (본문 8건, 발생 수 +0 / 완전형 22=22)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | 분위기 읽기·`#ffffff` canvas≠on-primary≠buy-pill/404·YAML sans≠§3 Helvetica는 닫혀 있음. 캡처한 consumer homepage layer ≠ MAX를 덮는 발행 토큰 사양은 세 번째 부류인데 한정 밖. | 기존 완전형에 captured consumer homepage layer = inspected surface rather than a published token specification covering MAX를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:85` — Semantic color | canvas/on-primary/`#ffffff` 컴포넌트 필드는 닫혀 있음. `#000000` ink-pure ≠ body는 세 번째 부류. | ink-pure occasional headings rather than body text를 접어 넣음. `#000000` DESIGN dest 2→**3**. |
| 3 | `DESIGN.md:131` — Spacing | 키 비해합은 닫혀 있음. 「observed values rather than a complete mathematical scale」이 완전형 **앞** 문장에 떨어져 있음. | 그 판단을 Keeping 문장(완전형) 안으로 접음. |
| 4 | `DESIGN.md:171` — Motion | 다섯 종류 게이트는 있으나 official framework/vendor document 일치 ≠ 게이트는 완전형 **앞** 문장. | 부분 확인 거부를 완전형 안에 접음. B3 전문 문장은 유지. |
| 5 | `DESIGN.md:187` — Font evidence | 정렬·YAML/§3 keep-both만. official-distributed 음성 확인과 Helvetica=관측 스택 쓰기는 표 안의 세 번째 부류. | official-distributed = negative confirmation; declared stack including §3 Helvetica = observed live/stack writing, not a MaiCoin-authored face. |
| 6 | `DESIGN.md:195` — Family | 「two sans-stack writings」만. YAML은 Roboto에서 멈추고 §3는 Helvetica를 더한다는 keep-both가 한정 밖. | YAML sans (stopping at Roboto) / §3 sans (adding Helvetica) as two writings. |
| 7 | `DESIGN.md:243` — Capture record | 높이/40px 이중 기록은 목록에 있었으나 목록 문장이 동사 없이 `claim.`으로 끊기고, 완전형은 문단 끝 em-dash 뒤에만 있음. buy-pill `12px` / MAX `16px` 패딩 비해합은 목록 밖. | 목록에 패딩 비해합을 넣고 목록의 동사+완전형을 복원. 꼬리 이중 닫힘(`those readings are a derived…`)을 제거해 같은 줄 완전형 1. |
| 8 | `DESIGN.md:501` — Layout | 소스 표 아래 읽기·whitespace/image radii는 닫혀 있음. `640–1024px`/`1024–1366px` 철자 ≠ `1024px` 토큰, 샘플 ≠ complete scale, desktop ≠ mobile-only는 한정 밖. | 세 판단을 기존 완전형에 접어 넣음. `1024px` DESIGN dest 2→**4**. `1366px` 2→**3**. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, `not MaiCoin / MAX-authored` 22, `separately published UI specification` 22, `separately published` 23, `not a separately published UI specification` 0. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 68, 85, 131, 148, 159, 171, 187, 195, 199, 220, 243, 501, 506, 558.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 22=22였으나 이름 범위가 본문보다 좁았다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | Scope ¶2 행 | 분위기 + canvas/stack keep-both만. | homepage-layer ≠ published token spec covering MAX. |
| 10 | Semantic color 행 | `#ffffff` 역할 분리는 있었음. `#000000` ink-pure ≠ body 없음. | ink-pure occasional headings rather than body. |
| 11 | Spacing 행 | 키 비해합만. | unitless map ≠ complete mathematical scale; px samples = observed values. |
| 12 | Motion 행 | five-kind + ease-enter 비승격만. | official framework/vendor document match ≠ that gate. |
| 13 | Font evidence 행 | class sorting + YAML/§3만. | official-distributed negative; Helvetica = observed stack writing. |
| 14 | Family 행 | two writings만. | YAML stops at Roboto; §3 adds Helvetica. |
| 15 | Capture 행 | 높이/40px 이중은 있었음. `12px`/`16px` 패딩 비해합 없음. | buy-pill padding `12px` off spacing.md; MAX padding `16px` off spacing.base. |
| 16 | Layout 행 | 소스 표 + whitespace/radii만. | `640–1024px`/`1024–1366px` spellings; samples ≠ complete scale; desktop ≠ mobile-only. |

헤더 / 데이터 행 **22 = 22** at 155–176 (E1 1:1, 이름 범위 정렬). `scripts/check-limiter-ledger.mjs maicoin` 본문 22 = 원장 22.

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 본문 수정 뒤 `grep -oF -- | wc -l` 재실측(lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | `#000000` | 목적지 dest 2 at 74/109. 실측 DESIGN **3** at 74/85/109 (Semantic 한정). | dest 3. |
| 18 | `1024px` / `1366px` | §8 dest 2/2. 실측 `1024px` **4** at 492/501 · `1366px` **3** at 493/501. `1024–1366px`는 `1024px`가 아님. | dest 4 / 3. |
| 19 | Identity / Freshness 줄 | metadata Identity 8–23 · Verified P **37** · Footer Freshness 32–35 · Conflicts **39**. 실측 Identity 표 9–23 · Freshness 31–34 · Verified **36** · Conflicts **38**. | 9–23 / 31–34 / 36 / 38. |
| 20 | exact `tokens.source: live-extract` | 착수 dest 3 at 20/72/181. 실측 exact **2** at 72/181. 표 칸 20은 `tokens.source \| live-extract`. | dest 2 + 표 칸 분리(로그에 이미 반영된 뒤 재확인). |
| 21 | YAML `type: button` | 착수 「dest 4」. 실측 exact DESIGN dest **0**. 본문 표기는 `Primitive type: \`button\`` dest **4**. lotteon형. | exact dest 0 · Primitive type dest 4 at 249/273/298/323. |
| 22 | `Kind: non-interactive` | 착수 dest 2 at 439/451. 실측 dest **3** at 243/439/451 (Capture 한정 mention=use). | dest 3. |
| 23 | Principles 짧은 인용 | 착수 로그가 "These 5 items are a derived editorial implementation inference from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification."를 본문 전문처럼 적음. 실측 그 문자열 DESIGN dest **0**. 본문은 em-dash 형태 dest 1 at 45. fitpet형 2차 목적지. | 짧은 인용 dest 0 · em-dash 형태 dest 1. |
| 24 | 착수 hex/URL 줄 수 dest | 착수 `#ffffff` dest **14** / `#ee5457` **12** / `Iosevka` **14** / `Roboto` **9** / `https://www.maicoin.com` dest **3**(줄) / MAX URL P dest **5** / `box-shadow: none` dest **2**. `grep -oF` 발생 수: `#ffffff` **23**/P **2** · `#ee5457` **13**/P **8** · `Iosevka` **22** · `Roboto` **15** · homepage **4**(9×2) · MAX P **8**(signup/signin 접두 포함) · `box-shadow: none` **4**. | F2 표에 발생 수로 고침. |
| 25 | F2 재실측 + `6px` | 본문 수정 뒤 dest 미갱신은 lablup. grep -oF `6px` dest **39**(16px/1366px 과대). Python `split()` 8,055. SHA DESIGN `5e73b989…` · provenance `bf4d8e46…`. | `6px` dest 39. word count 8,055. 확장 8자리를 F1에 적음. 자리 수 22=22 유지. |

Destination SHA worker `5e1707d085094214029a353d36b9f10df6473c998f2bb352ef3c6ee762474a09` → F3 `5e73b989f70d58f6353ccb258afabe412e49d2ce86196242db9bd90b69a48328` (한정 확장·Capture 동사 복원 후). 줄 수 DESIGN `wc -l` **563** 불변. `wc -w` 7,606→**8,060** (Python `split()` 8,055). provenance 188 불변(행 텍스트만).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법 변형(복수 `are derived editorial implementation inferences`, 브랜드 `MaiCoin / MAX-authored`)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니다. Named gaps의 B3 다섯 종류는 Motion 한정과 같은 게이트의 재진술.
- YAML vs §3 스택, navy vs navy-alt, canvas vs on-primary, 20px vs 22px는 문서 전체 keep-both / keep-apart. 무출처 커브 3개는 값 경계에서 일관 생략(kmong). 충돌 처리 정책은 일관.
- E2c: B3 전문 `computed transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest 2 (Motion `:171` · Named gaps `:560`). `transition properties` dest 2 · `animation name` dest 2 · `reduced-motion` dest 4.
- E2d: sibling-only 절은 「this file에 없다」를 단언하지 않고 field kind만 이름함. `There is no ds.name`은 소스 YAML 필드 부재이지 「이 문자열이 이 파일에 없다」가 아니다. 부재 단언이 자기 자신을 분모에 넣어 거짓이 된 행 0.
- D2a: §13 처분 행은 절·필드 종류만. 이름·나이·도시를 처분 행에 재수록하지 않음. 원형 라벨을 D2a로 지목하지 않음. Audience는 Brand Narrative의 두 그룹(`retail first-timer` / `active trader`).
- A1 키 경로: YAML `tokens.components` 12레코드의 type/bg/fg/radius/height/padding/font/use/active/border가 대응 블록에 **행으로** 존재. icook형 타 블록 hex 차용 없음. 복원 0. YAML `use` 19/19 (`check-yaml-use-landing.mjs`).
- 원본 §15 곡선 값은 본문에 없고 duration `120ms`/`200ms`/`320ms`는 표에 인용된 채 역할만 남음(T2 관례, kkday). 합성하지 않음.
- `#ffffff` canvas ≠ on-primary ≠ buy-pill/404/nav/CTA 귀속 분리는 정상이며, 감사 후 원장 Semantic 행에 적혀 1:1.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **26** / candidates **214**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피 27+use 19: 立即註冊 DESIGN dest 17 · 註冊帳號 7 · 立即購買 5 · 了解更多 1 · 電子信箱 5 · 密碼 5 · 鏈上鎖倉 5 · 交易機器人 5 · 收益懶人躺賺 2 · 查看幣價 5 · 回首頁 5 · 常見問題 4 · 步驟一 註冊 MaiCoin 2 · 步驟四 買虛擬貨幣 2 · title dest 1 · 24 小時自動交易 1 · 電話客服 dest 1 · 裝置綁定 2 · 身分驗證 2 · 發送接收 2 · 產品服務 2 · 必填 1 · 錯誤 1. 미생존 0. YAML use 19/19. **발행 라틴:** `Register now` SRC 3 / DESIGN **2** (Scope `:11`의 「立即註冊」 옆에 영어 병기가 빠짐). `Learn more`는 원본 본문 dest 0(sibling gloss). 라틴 손실은 이 한 점만 눈에 띈다 — 고치지 않음.
- **A1 서사 (키 경로 밖).** `optimized for dense Traditional-Chinese` SRC 1 / DESIGN 0. §11 `direct expression of that mission` / `intimidating new asset class` / `dark-pattern urgency` / `neon hype` / `shadow-stacked` / `one disciplined action color` / `screen-native` SRC 각 1 / DESIGN 0 — Scope는 refuse-hype / embrace-flat을 **분류**만 하고 원문 문장은 없음. `so the next step is unambiguous` / `unmistakable tap target` SRC 1 / DESIGN 0. 값 복원 범위가 아니라 보고만.
- **B1.** sibling `.verification.md` PRESENT (경로 직접). sibling-only `248px` DESIGN dest 0 / P 2 · `81×40` 0 / 2 · `1200×126` 0 / 2 · `Times` 0 / 1 · `Arial` 0 / 2 · compact register `40px` 두 번째 변종은 본문에 승격되지 않음(accent/carousel 40px는 소스 YAML). `h3` sibling 1은 method 문자열 `h1–h3` · DESIGN dest 0. `portal H2` dest 0. 값·구조 분류 침투 0.
- **D2a.** 식별자 3인·세 도시 DESIGN/P/LOG dest 0. 동기(`casino` / `compliance-minded` / `without getting scammed`) DESIGN dest 0. 소속 분류를 Audience에 새 표현으로 재구성하지 않음. 로그 처분 행은 무식별. `first-time buyer` DESIGN dest 1은 원본 §10 보이스 문장.
- **A1 열 구조.** Semantic 역할행에 `tokens.colors.*` 경로가 붙어 있다. Type roles Token-set use 열이 YAML `use`를 병기한다. krds형 토큰명 열 삭제는 없다.

AUDIT_DONE fixes=25

## 개정 — 의미 검토 FAIL 4 (2026-08-29)

대상: `docs/design-md-weight/migrated/maicoin/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (22=22). 무출처 커브 3개는 생략 유지.

### 결함 1 — §11 고유 서사 절단 (A1)

원본 `:389` `:391` `:393` 고유 구를 Experience Scope `:13`에 사실 인용으로 복원. refuse-hype 분류 명사만 있던 자리를 원문 명사로 채움. Elevation `:159`에 원본 §6 `screen-native` 시장-터미널 문장도 복원(SRC 2). provenance Narrative에 같은 구 색인.

### 결함 2 — 시스템 산스 고유 제약 절단 (A1)

원본 §1 `:77` `optimized for dense Traditional-Chinese (zh-TW) legibility`를 Scope 스택 문장 한가운데에 복원. 원본 §3 `:132` `tuned for dense Traditional-Chinese (zh-TW) rendering`를 Family Sans 문장 끝에 복원.

### 결함 3 — §15 모션 제약 미착지 (A1 · 항목 3)

원본 `:447` `Motion is functional and restrained` / `signals steadiness, not delight` / `slow animation on a price would be misleading`를 Motion `:171` 시그니처 문장에 복원. `ease-enter` 페어링은 무출처 커브라 붙이지 않음. 원본 §10 `:385` `A regulated TW exchange signals steadiness`를 Forbidden register `:524` 닫는 문장으로 복원.

### 결함 4 — §5 레이아웃 제약 미착지 (A1 · 항목 3)

원본 `:262` Notable을 Layout `:485`에 복원하고, laundrygo recorded-use형으로 Dark Promo Card `:352` / Stat Card `:363` 패딩 옆에 목적 절을 붙임. 원본 `:271` `so the next step is unambiguous`를 Whitespace `:487`에 복원.

`node scripts/check-limiter-ledger.mjs maicoin` → 본문 22 = 원장 22 (159–180). `migrate-reference.mjs --brand maicoin --gate-only` → PASS.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §11 Brand Narrative | 고유 10바늘 DESIGN / P | 0 / 0 | **1** / **1** |
| §11 / Elevation | `screen-native` DESIGN / P | 0 / 0 | **2** / **1** |
| §1 stack | `optimized for dense Traditional-Chinese` DESIGN / P | 0 / 0 | **1** / **1** |
| Family | `tuned for dense` DESIGN / P | 0 / 0 | **1** / **1** |
| Motion | 제약 3바늘 DESIGN / P | 0 / 0 | **1** / **1** |
| Forbidden register | `A regulated TW exchange signals steadiness` DESIGN / P | 0 / 0 | **1** / **1** |
| Layout / cards | padding 목적 4바늘 DESIGN / P | 0 / 0 | **2** / **1** |
| Whitespace | `so the next step is unambiguous` DESIGN / P | 0 / 0 | **1** / **1** |
| YAML family | `Iosevka` DESIGN | 22 | **23** |
| Deviations | `wc -w` | 8058 | **8301** |
| Header / Deviations | DESIGN SHA | `5e73b989…` | `b27e27ed…` |
| E1 | 원장 행 범위 | 155–176 | **159–180** |
| YAML metadata | `live-extract` P lines | 72/181 | **76/185** |

B2a `derived editorial implementation inference` DESIGN dest **22** 불변. `#ffffff` dest **23** / P dest **2**. `#ee5457` dest **13** / P dest **8**. YAML `use` 19/19 dest 불변. `Register now` dest **2** 불변.

FIX_DONE maicoin fixed=4 logdest=13
