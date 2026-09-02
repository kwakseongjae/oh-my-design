# mastercard 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mastercard/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mastercard/DESIGN.md`
검증 sibling: `web/references/mastercard/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-01

발행 1차 UI 사양 없음. Mastercard Brand Center는 원본 HTML 주석이 맞물린 원 색의 근거로만 인용한다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Mastercard-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic `:87`은 역할 페어링과 일부 비병합만 이름하고 Gray 100 not-a-YAML-colors-key와 `#FFFFFF` canvas/on-primary·`#141413` primary/foreground 같은-hex 비병합을 빠뜨렸다. Type roles `:219`은 표 keep-both만 이름하고 §9 hero eyebrow `#EB001B`를 빠뜨렸다. Standard Card `:459` §9-only 처분과 Content `:730` locale 미합성은 세 번째 부류인데 인접 완전형이 없었다.

문장 분류: 브랜드 발행 사실(연도·Interbank/Master Charge·Priceless 캠페인 라인·YAML 값·§표 수치) / 관측 기술(hex·Mark 스택·duration·컴포넌트 기하) / 편집적 해석·인과 판단(키 비병합, 분위기, 페르소나 삭제 읽기, §9-only 귀속, locale 미합성). 세 번째 부류와 원장 정확성만 수정.

## 수정 목록 (19건)

### B2a — 인접 한정 (본문 4건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:87` — Semantic color | Gray 100 not-a-YAML-colors-key와 `#FFFFFF` canvas/on-primary·`#141413` primary/foreground 같은-hex 비병합은 세 번째 부류. 기존 한정은 `primary_color`/`primary`·`#1A1A1A`/`#141413`·Error/Warning 비병합과 Gray scale 합성만. | 기존 완전형에 세 판단을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:219` — Type roles | §9 hero eyebrow `#EB001B`를 이 역할에 §9-only로 두는 것은 세 번째 부류. 기존 한정은 YAML/표 keep-both와 spacing 비병합만. | 기존 완전형에 그 판단을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:459` — Standard Card | §9 feature-card 수치를 이 카드에 §9-only로 두는 것은 세 번째 부류. Capture `:250`은 kind/applicability만이고 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:730` — Content locale | locale number/date/address/script를 합성하지 않는 것은 세 번째 부류. `:716`은 voice table / forbidden-pattern만. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not Mastercard-authored` 24, `separately published UI specification` 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 2는 use가 아니다.

한정 줄: 11, 13, 15, 21, 30, 34, 46, 59, 71, 87, 132, 140, 159, 163, 207, 215, 219, 237, 241, 250, 459, 663, 716, 730.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | 헤더 | 22 complete / 22 data rows. | **24** / **24**. |
| 6 | Semantic 행 10 | 역할·일부 비병합만. 본문 `:87`이 이제 canvas/on-primary·primary/foreground·Gray 100도 이름한다. | 그 판단을 행에 추가. |
| 7 | Type roles 행 17 | keep-both / heading-2 / body-large만. 본문 `:219`이 이제 Display Hero 56과 §9 eyebrow도 이름한다. | 그 판단을 행에 추가. |
| 8 | Standard Card 행 | 없음. 본문 `:459` 신설. | 행 23 신설. |
| 9 | Content locale 행 | 없음. 본문 `:730` 신설. | 행 24 신설. |

헤더 / 데이터 행 **22 → 24** at 173–196 (E1 1:1). `node scripts/check-limiter-ledger.mjs mastercard` → 본문=24 원장=24.

### A1 — 키 경로 복원 (1건)

문자열 grep으로 「값이 파일 어딘가에 있다」는 부족하다. YAML `tokens.components.<id>.<field>`가 대응 블록에 행으로 있어야 한다.

| # | 키 경로 | 무엇이 빠졌나 | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | `button-primary.disabled` | Primary (Dark) 블록은 `` `#CCCCCC` bg, `#767676` text ``로 쪼개 적혀 YAML 정확 문자열 `#CCCCCC bg, #767676 text`가 DESIGN dest **0**. 같은 hex는 Disabled 캡처 표에도 있어 grep「어딘가에 있다」는 통과(icook형). | 그 블록 Disabled 행에 token-set `disabled`: `#CCCCCC bg, #767676 text`. DESIGN dest **1**. 해석 없음 — 값 형태 복원. |

시각 필드(type/bg/fg/radius/height/padding/font/hover/active/use)와 나머지 16 YAML 레코드는 착수 시 이미 대응 블록에 값+키 힌트가 있었다. input-error / search focus / tab fg·font / alert border는 해당 블록 안에 YAML 정확 문자열이 있다.

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF -- | wc -l`로 확인했다. 본문을 고친 뒤 A5a·F2 dest를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML identity 행 | Catalog `primary_color` `#EB001B` dual DESIGN **34** / P **7**. 착수 `#EB001B` DESIGN dest **31** / P **7**. `primary_color` 문자열은 DESIGN dest **4** / P **5**. `#141413` DESIGN dest **26** / P **6**로 적었으나 착수는 DESIGN **25** / P **6**. | `primary_color` 문자열 DESIGN dest **4** / P **5**. 값 `#EB001B` DESIGN dest **32** / P **8** (한정 확장 후). `#141413` DESIGN dest **26** / P **7**. |
| 12 | YAML family 행 | `SF Mono` DESIGN ≥1. | dest **4**. |
| 13 | §1 HTML-comment 행 | `editorial syntheses` DESIGN dest **1**. 실측 dest **3** (Scope / Semantic / Spacing). P dest **2**. | DESIGN dest **3** / P dest **2**. |
| 14 | YAML `tokens.components` 행 | `disabled` 정확 문자열이 본문 dest 0이었다. | exact `#CCCCCC bg, #767676 text` DESIGN dest **1**. |
| 15 | §12 행 | inventory 22 data rows. | **24** at **173–196**. |
| 16 | Deviations | `wc -w` 8,777 · B2a 22=22 · worker SHA만. | `wc -w` **8,912**. 24=24. Auditor DESIGN SHA `6919a3417429308082130504ec28da59a014bb40ffcb154b0d6ba52b5e6cc897` · P SHA `26685933c82af61c79313ad392161534b0fbf4b4dbda570110f77c9c7da37a19`. |
| 17 | F1 | 22 closes without the two named expansions. | 확장 2 + 신설 2를 목록에 반영. 22 → 24. |
| 18 | F2 | 22=22. dual dest를 착수 숫자로 적음. | 24=24. `#EB001B` 32/8 · `#141413` 26/7 · `editorial syntheses` 3/2 · `SF Mono` 4 · disabled exact 1. |
| 19 | Unique-expression / SHA 머리 | restored 4. worker SHA만. | restored **5**. Auditor SHA를 머리에 병기. |

Destination SHA `4c19b62ca3e503a56acc3b0007815c7de38f97956c4cca0fc5d61d22bca8cad2` → `6919a3417429308082130504ec28da59a014bb40ffcb154b0d6ba52b5e6cc897` (한정 확장·신설·키 경로 복원 후). 줄 수 DESIGN `wc -l` **776** 불변. provenance 194→**196**. migration-log 108→**110**.

착수 때 이미 맞았던 dual dest (재실측, 유지): `https://www.mastercard.com` DESIGN 6 / P 9 · `simpleicons` DESIGN 2 / P 3 · `prose-derived` DESIGN 0 / P 47 · `components_harvested` DESIGN 0 / P 3 · `HTTP 403` DESIGN 4 / P 6 · `tokens.extracted` DESIGN 1 · `1.14` DESIGN 4 · `9999` DESIGN 10 · `Primitive type` DESIGN 16 · `button-primary` DESIGN 2 · `input-error` DESIGN 2 · `350ms` DESIGN 1 · `ease-brand` DESIGN 5 · `cubic-bezier(0.33, 1, 0.68, 1)` DESIGN 2 · `transition properties` DESIGN 2 · `loading | not-applicable` DESIGN 7 · `loading | applicable` DESIGN 7 · `Kind: non-interactive` DESIGN 4 · `#1A1A1A` DESIGN 4 · `#D11124` DESIGN 3 · `tokens.spacing.hero: 96` DESIGN 1 · `Times` DESIGN 0 / P 4.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. Brand Center는 색/마크 인용이지 컴포넌트 UI 사양이 아니다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다. Do list는 Application rules에만 있고 Governance dest 0.
- E2c: B3 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest **2** (Motion + Named gaps). Principles 형태 `:46` dest 1. 준수 주장 유지.
- `focus-visible` 표 행에 hex 없음. Capture 문장 `:250`이 두 단어를 같이 적는 것은 표 행이 아니다.
- 무출처 커브 4개는 이름·Use·인용된 `cubic-bezier(...)`만 남김(T2 관례). 값 소실로 되살리지 않음.
- E2d: `provenance.md:24` 「portable body does not contain `prose-derived`」의 분모는 portable body. DESIGN dest 실제 0. 「세 파일 어디에도 없다」 단언이 아님. `:64`는 원장 자신에 대한 부재를 단언하지 않는다.
- D2a 처분 행(`provenance.md` Omission ledger, migration-log §13)은 절·인원·필드 종류만. 이름·나이·도시·전기를 Item에 옮기지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — not a bank / 210+ countries / Interbank / Master Charge / Priceless 캠페인 라인 / Get started / Learn more / Find a card / Contact us / Payment complete. / You're all set. / YAML 색·타입·간격·컴포넌트 값 / §7 Do/Don't / §12 여덟 원칙 문장.
- **관측 기술** — hex · Mark / FF Mark / MarkPro · unitless `1.14`… · `Primitive type` · duration 0/150/250/400/350ms · 24px pill / 8px product.
- **편집적 해석·인과 판단** — named surface / 403과 live-DOM 비선택, 분위기(institutional-but-warm / quiet / red not a workhorse), 서사를 토큰 공급이 아니라고 읽기, 과제 선정, 페르소나 삭제, 특성 묶기, 원칙·Do/Don't, 역할 페어링·같은-hex 비병합·Gray 100, spacing/shape 비병합, elevation/motion 게이트, 폰트 class·fallback 거부, YAML/표 keep-both, §9-only 귀속, applicability, layout harvest 거부, voice register, locale 미합성.

세 번째 부류 중 22곳은 착수 시 인접 완전형이 있었고, 그중 2곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 2곳은 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** / candidates **242**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다이지 카피 보존이 아니다. 손 대조 발행 라틴 21 distinct / DESIGN dest ≥1 / missing 0. `node test-v2/tools/latin-copy-audit.mjs --brand mastercard` scanned 61 / lost 2 — 둘 다 §13 가상 아키타입 인용(medium/low). 발행 제품 카피가 아니므로 복원하지 않음(D2). 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 live body/page/root `#000000`, heading Times 32px/700, body Times 16px, 「DESIGN.md token roles were reconciled against these measurements」 DESIGN dest **0** / P dest ≥1. `Times` DESIGN dest **0** / P dest **4**. `H3`/`h3`/`portal H2` DESIGN dest **0**. 값·섹션 표제 분류 침투 없음. 본문 `#000000` dest 1은 Primary (Dark) Active/Pressed(원본 §4). `getComputedStyle` DESIGN dest 2는 원본 Tier 1 문장이지 sibling 승격이 아님.
- **D2a.** §13 식별자 3 · 도시 3 · 직업/동기 문구 DESIGN/P/L dest **0**. 소속 분류 신조어 dest 0. Audience는 원본이 페르소나 절 밖에서 독립 기록한 그룹(consumers, merchants, banks, governments, businesses; global, multilingual, all-ages)만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. 처분 행은 무식별.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN/P를 분모로 두고 로그 자신을 넣지 않는다.
- **`#FFFFFF` 역할 분리 (wave 39 krafton 보고).** 같은 hex가 canvas(`tokens.colors.canvas`) · on-primary · Primary Dark/Red/Badge text · Button on Dark Surface background · card/modal fill · spinner on dark CTA · Switch thumb에 붙는다. 원본 §2가 Pure White를 page background / card surface로 적고 YAML은 canvas와 on-primary 두 키다. 그 두 키 비병합은 본문 `:87`과 원장 행 10에 적음(E1). 컴포넌트 fg/bg는 YAML 필드 행. 고치지 않음.
- **충돌 처리 일관 (wave 40 krds).** 이중 표기는 keep-both(`#1A1A1A`/`#141413`, Error `#EB001B`/`#D11124`, Search `9999`/`24px (pill)`, Neutral Tag `9999`/`16px (pill)`, Comfortable 12px ≠ `rounded.lg` 16). 무출처 커브만 승격 생략+인용. 자리마다 정책이 바뀌지 않음.
- **열 구조 (wave 40 krds).** YAML `tokens.colors.*` 키 경로가 Semantic 불릿 옆에 행으로 있다. 토큰명 열 삭제는 없음.

AUDIT_DONE fixes=19
