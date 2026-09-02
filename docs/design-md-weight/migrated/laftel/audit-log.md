# Laftel 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/laftel/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/laftel/DESIGN.md`
검증 sibling: `web/references/laftel/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 선행 `-` 패턴은 `--`로 보호.
날짜: 2026-08-29

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Laftel-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 23. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Primary tasks `:19`는 선정만 이름하고 persona-off를 한정 본문에 넣지 않았다. Distinctive traits `:32`는 grouping만 한정에 있고 restatement는 앞문장에만 있었다. Semantic `:77`은 공유 hex·disabled 비병합만 이름하고 Purple 100 / Purple Gray 900 / Red 500 not-YAML-colors와 Background 2≠light toast를 빠뜨렸다. Motion `:140`은 게이트만 이름하고 CSS `ease` bezier 전개를 빠뜨렸다. Font evidence `:179`는 “the following readings”만. Capture `:239`는 Kind/applicability만 이름하고 YAML `use` beside Role과 disabled fg keep-both를 빠뜨렸다.

## 수정 목록 (21건)

### B2a — 인접 한정 (본문 6건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:19` — Primary tasks | “They do not come from the persona section”은 세 번째 부류. 기존 한정은 과제 선정만. | 기존 완전형에 persona-off를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:32` — Distinctive traits | restatement of recorded values는 세 번째 부류. 기존 한정은 groupings만. | 기존 완전형에 restatement를 접어 넣음. 주어를 단수에 맞춤. 발생 수 +0. |
| 3 | `DESIGN.md:77` — Semantic color | Purple 100 / Purple Gray 900 / Red 500 not YAML `tokens.colors.*` keys, Background 2 unmerged from light-mode toast fill은 세 번째 부류. 기존 한정은 공유 hex·disabled 비병합만. | 기존 완전형에 두 읽기를 접어 넣음. hex를 다시 쓰지 않음(dest 불변). 발생 수 +0. |
| 4 | `DESIGN.md:140` — Motion | cubic-bezier beside CSS `ease` as keyword expansion, not a brand token은 세 번째 부류. `:159`에 읽기가 있고 `:140` 한정이 그것을 이름하지 않음. | 기존 완전형에 그 읽기를 접어 넣음. 베지어 수치를 반복하지 않음. 발생 수 +0. |
| 5 | `DESIGN.md:179` — Font evidence | 표의 여섯 class 해상도는 세 번째 부류. 기존 한정은 “the following readings”만. | 기존 완전형에 App Store≠type token / live Pretendard / jsDelivr corroboration / no exclusive family / fallbacks remain fallbacks / clients+Store outside capture를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:239` — Capture record | YAML `use` beside Role, YAML button-disabled foreground unmerged from body disabled text는 세 번째 부류. `:336` 재진술은 Semantic `:77`과 인접하지 않음. | 기존 완전형(컴포넌트 절 머리)에 두 읽기를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 23, `not Laftel-authored` 23, `separately published UI specification` 23. 완전형 정규식 23. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 52, 63, 77, 113, 123, 136, 140, 179, 194, 199, 221, 239, 428, 435, 450, 492.

`node scripts/check-limiter-ledger.mjs laftel` → 본문 23 / 원장 23 (165–187) 1:1 OK.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 23 유지, 행 텍스트를 본문에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | Semantic 행 | 공유 hex·disabled 비병합만. 본문 `:77`이 이제 not-YAML-colors 셋과 Background 2≠toast도 이름한다. | 그 판단을 행에 추가. |
| 8 | Motion 행 | CSS 모션·reduced-motion 생략·게이트만. 본문 `:140`이 이제 ease bezier 전개도 이름한다. | 그 판단을 행에 추가. |
| 9 | Font evidence 행 | “Evidence-class application readings”만. 본문 `:179`이 이제 여섯 class를 이름한다. | 그 판단을 행에 추가. |
| 10 | Capture 행 | Kind/applicability / nav L/E/S만. 본문 `:239`이 이제 YAML `use` beside Role과 disabled fg keep-both도 이름한다. | 그 판단을 행에 추가. |

Primary tasks 행과 Distinctive traits 행은 착수 시 이미 persona-off / restatement를 이름하고 있어 원장 수정 없음(본문 한정이 따라갔다).

### A1 — 키 경로

7 YAML 레코드 `tokens.components.<id>.<field>`를 대응 블록에서 **행으로** 대조. 값 grep 「어딘가에 있다」로 대체하지 않음.

| id | 필드 | 대응 행 |
|---|---|---|
| button-primary | type/bg/fg/radius/height/padding/font/states/use | Primitive type · Background · Text · Radius · Height · Padding · Font · Hover background + Observed YAML `hover #6e58ff` · Token-set use |
| button-primary-sm | type/bg/fg/radius/height/padding/font/use | 동형. YAML에 states 없음 — 호버 값 발명 없음 |
| button-slight | type/bg/fg/radius/height/font/states/use | Font YAML 병기 · Hover `#D9D3FF` / `hover #d9d3ff`. padding 키 없음 |
| button-disabled | type/bg/fg/radius/height/use | YAML fg `#8a8a8a` 행 + body text `#D0D0D0` 별행. 합치지 않음 |
| nav-bar | type/bg/fg/height/padding/border/font/active/use | YAML bg/fg 행 · Height 64px · Padding 50px · border YAML `1px solid #eeeeee` · Active `link color #816bff` |
| badge-notification | type/bg/fg/radius/height/font/use | Body radius 50% 행 + YAML `9999px` 행 · Font `10px / 700` |
| toast | type/bg/fg/radius/padding/height/font/use | YAML bg `#242537` 병기 · Padding YAML `16px 12px` · height YAML `48px` · Font YAML `14px / 400` |

icook형 타 블록 hex 차용으로 가린 필드 소실 없음. 복원 없음.

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -oF -- | wc -l`로 확인했다. 본문 한정 확장 후 dest가 바뀐 바늘은 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML spacing 행 | `tokens.spacing.xs` dest **2** / `sm` **2** / `md` **1** / `base` **1** / `lg` **1**. 실측 dest **3 / 3 / 2 / 2 / 2** (111 목록 + 113 비병합 + 123 Shape 교차). | dest를 실측에 맞춤. |
| 12 | YAML type-roles 행 | `40px` · `32px` · `28px` dest **1**로 묶음(fitpet형 결합). 실측 `40px` dest **5** · `32px` dest **3** · `28px` dest **1** · `13px` dest **1**. | 행 분리. |
| 13 | YAML family 행 | Pretendard dest **12**. Font evidence 확장이 본문에 Pretendard를 한 번 더 이름. 재실측 dest **13**. | dest **13**. |
| 14 | §4 행 | 컴포넌트 블록 `243–410`. 실측 `241–408`. | **241–408**. |
| 15 | §5 행 | `414–420`. 실측 Layout principles `413–419`. | **413–419**. |
| 16 | §11 행 | May 2017 / Ridi / Aniplus / SVOD / TVOD / AVOD를 DESIGN만 적음. Proof notes에 같은 문자열이 있음(P dest 1, Aniplus P dest **2**). | 이중 목적지 (`E2a`). |
| 17 | §14 행 | 본문 `227–235`. 실측 머리+불릿 `227–237`. | **227–237**. |
| 18 | §15 행 | `transition:color 0.4s` dest **2**. 실측 dest **1** at 152. | dest **1**. |
| 19 | F2 dual 목록 | May 2017 · Ridi · Aniplus · SVOD/TVOD/AVOD 누락. | 목록에 넣음. |
| 20 | Deviations | `wc -w` 5413 · worker SHA만. | **5541**. Auditor SHA `47f42e108de3b145af916009dd324eb267adad5c1a6b401613d667a16e2e9acd`. |
| 21 | F1 목록 | 본문이 이제 이름하는 persona-off / restatement / not-YAML-colors / Background 2 / ease bezier / font classes / use beside Role을 목록이 빼 둠. | 목록을 본문에 맞춤. Count **23** 유지. |

Destination SHA worker `805ebcc…` → auditor `47f42e108de3b145af916009dd324eb267adad5c1a6b401613d667a16e2e9acd` (DESIGN). 줄 수 DESIGN **495** 불변. provenance **187** 불변(행 텍스트만).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 23개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 171 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:42` dest 1. 준수 주장 유지.
- `loading | applicable` dest **3**. `loading | not-applicable` dest **2**. `Kind: non-interactive` dest **2**. `default | applicable` dest **5**. `focus-visible | applicable` dest **5**. `This is not a complete state-coverage claim` dest **1**.
- `live-extract` DESIGN dest 0 / P dest 0. `components_harvested` DESIGN dest 0 / P dest 2. `FILL IN` DESIGN dest 0 / P dest 1 (omission 원장).
- duration `200ms` / `400ms` / `0.4s` / `0.2s` / `1.4s` / `1.5s`는 본문에 값+역할로 남음 — T2 관례(웨이브 39 kkday). 되살리지 않음.
- 원본에 없는 reduced-motion은 `:171`에서 omitted rather than invented — 모범(웨이브 39 kmong). 합성하지 않음.
- E2d: provenance `:154` 「Identifier strings are not copied into this file」은 필드 종류만 말하고 이름을 열거하지 않음. 「세 파일 어디에도 없다」 단언이 아님. `:75` sibling extras는 분모가 visible source body.
- D2a 처분 행(`provenance.md` Omission ledger)은 절·인원·필드 종류만. 이름·나이·도시·전기를 Item에 옮기지 않음.
- 충돌 처리: 공유 hex·YAML/본문 이중 표기·`50%`/`9999px`/`9999`·`≤1280`/`>1280`·YAML 400 vs 700-only를 문서 전체에서 keep-both. krds형 자리마다 다른 정책 없음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 라프텔, 세상 모든 애니를 라프텔에서 :D, 추억의 애니부터…, 뭘 볼지 모를 땐…, 어떤 애니를 좋아하세요?…, 잠시 후 다시 시도해 주세요, 이 작품은 현재 지역 서비스 불가, Super Secret, 덕후, staff pick / Recommended for you / Popular, October 2014 / Kim Beom-jun / 마지막 화까지 봤다, May 2017, Ridi, Aniplus, 87.75 %, SVOD/TVOD/AVOD, §7 Do/Don't, §12 다섯 원칙, YAML `use` 10+7문자열.
- **관측 기술** — hex·4px/48px/56px/50%/9999px · Pretendard · unitless `1.5` · `Primitive type` · `.ksUJkh` · `transition:color 0.4s` · 두 표면 URL · §14 상태 트리트먼트.
- **편집적 해석·인과 판단** — 홈을 토큰 표면으로 읽기, App Store≠토큰 표면, 클라이언트를 가용성으로 읽기, dark-first/otaku-authentic 분위기, 서사≠토큰, 과제 선정·persona-off, 청중 묶기·전기 삭제, 특성 restatement, 원칙·Do/Don't, 역할 페어링·not-YAML-colors·Background 2≠toast, spacing/shape 비병합, YAML none≠무그림자, ease bezier≠브랜드 토큰, 폰트 class, family 두 키, YAML/표 keep-both, favicon pointer, applicability·use beside Role, ≤1280/ >1280 keep-both, voice register, sample gloss, Named-gaps 분류.

세 번째 부류 중 23곳은 착수 시 인접 완전형이 있었고, 그중 6곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **10** / candidates **186**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다이지 카피 보존이 아니다. 손 대조 발행 한국어 9종·영문/YAML `use` 18종 DESIGN dest ≥1. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **A1 서사 절단 (키 경로 밖).** 원본 §11 `enshrining the complete, satisfying anime experience in the brand itself` DESIGN dest **0**. `Korea's leading digital content platform` dest **0**. `Korea’s largest anime broadcaster` dest **0**. `bringing engineering scale and content licensing resources` dest **0**. `deeper ties to broadcast rights` / `simulcast programming` dest **0**. 값·컴포넌트 필드가 아니라 서술 절단. 고치지 않음.
- **B1.** sibling 전용 `#C0B5FF` / `#A797FF` / `ganiTH` / `hpaRNO` / `라프텔 - 애니 추천` / `Helvetica Neue` / `v1.3.6` / `67 501` / `--foreground-slight` / `Apple SD Gothic Neo` / `og:image` DESIGN dest **0**. `H2`/`H3`/`h3`/`portal H2` DESIGN dest **0**. 값·섹션 표제 분류 침투 없음. sibling `NavBar color:#FFFFFF`를 링크 색으로 승격하지 않음(본문 nav는 §4 themed background + `var(--foreground-1)`).
- **D2a.** 식별(이름·나이·도시) DESIGN dest **0**. 동기 DESIGN dest **0**. 소속 신조어 dest **0**. Audience는 원본 그룹 `Korean anime viewers and fans` / `mainstream Korean OTT audience`만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. **로그 §13 행**이 삭제 바늘로 §13 페르소나 3인의 라벨을 dest 0 증명용으로 다시 적음 — 원장 Item 재수록(D2a). 착수 실측 본문 0 / P 0 / L 1 each. 이 감사의 수정 범위(B2a·E2) 밖이라 당시에는 지우지 않음. provenance Omission 행은 무식별. **2026-08-29 의미 검토(FAIL 1)가 지목해 개정했다. `migration-log.md` `:41`과 이 칸을 무식별 표기로 다시 씀. 네 산출물에서 그 라벨 dest 0.**
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN/P를 분모로 두고 로그 자신을 넣지 않는다.
- **`#ffffff` 역할 분리 (wave 39 krafton 보고).** 같은 hex가 `tokens.colors.canvas`(Background 1 Light)와 `tokens.colors.on-primary`(text on purple)와 Primary CTA/Badge/Toast Text와 nav YAML bg에 붙는다. canvas vs on-primary는 Semantic 한정·원장이 공유 hex keep-both로 이름한다. 컴포넌트 Text는 원본 §4 기록. **`#000000`** Background 2 vs light-mode toast fill은 착수 시 원장이 빼 두었고, 이번 Semantic 한정·원장 행에 맞춰 넣었다.
- **`styles.refero.design`.** Named gaps DESIGN dest **1**. 원본·sibling은 `refero ?q=Laftel`만(원본 dest 1 / sibling dest 1 / `styles.refero.design` 원본 0). 도메인 문자열 승격. D1 인접. 고치지 않음.

AUDIT_DONE fixes=21

## 개정 — 의미 검토 FAIL 1 (2026-08-29)

대상: `docs/design-md-weight/migrated/laftel/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정.

### 결함 1 — §11 고유 사실 복원 (A1)

원본 `:237` `enshrining the complete, satisfying anime experience in the brand itself`, `:239` `Korea's leading digital content platform` / `bringing engineering scale and content licensing resources` / `Korea’s largest anime broadcaster` / `deeper ties to broadcast rights` / `simulcast programming`, `:241` `anime merchandise` / `ambitions beyond licensing`를 Experience Scope 서사(`DESIGN.md` 13)에 복원. provenance Proof notes에도 같은 여덟 구를 색인.

판정: **사실 인용**, 한정 불필요. 날짜·고유명사·지분·3티어는 Scope에 남아 있었고, 잘린 것은 그 수식어·효과·스토어 기능이다. 문단 말 기존 한정은 서사를 토큰이 아니라고 *읽는* 편집이며, 복원한 구 자체는 그 읽기가 아니다. 원장 행 추가 없음 (23=23).

`grep -oF -e` 실측 (DESIGN / provenance):

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `enshrining the complete, satisfying anime experience in the brand itself` | 1 | 1 | 1 |
| `Korea's leading digital content platform` | 1 | 1 | 1 |
| `bringing engineering scale and content licensing resources` | 1 | 1 | 1 |
| `Korea’s largest anime broadcaster` | 1 | 1 | 1 |
| `deeper ties to broadcast rights` | 1 | 1 | 1 |
| `simulcast programming` | 1 | 1 | 1 |
| `anime merchandise` | 1 | 1 | 1 |
| `ambitions beyond licensing` | 1 | 1 | 1 |

부수 dest: `Laftel Store` DESIGN 2→**3**; `Super Secret` 1→**2**; `original productions` 1→**2**; `webtoon adaptations` 0→**1**. `simulcast programming`은 원본 §11 고유 명제이지 §13 페르소나 동기가 아니다. 식별자 문자열 dest 0 유지.

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §11 Brand Narrative | 여덟 고유 구 DESIGN / P | (없음) | 1 / 1 each |
| §11 Brand Narrative | `Super Secret` DESIGN | 1 | 2 |
| §11 Brand Narrative | `Laftel Store` DESIGN | (표에 없음; 본문 2) | 3 |
| §11 Brand Narrative | `original productions` DESIGN | (표에 없음; 본문 1) | 2 |
| §11 Brand Narrative | `webtoon adaptations` DESIGN | (없음) | 1 |
| Deviations | `wc -w` DESIGN | 5541 | 5608 |
| header / Deviations | A1 restore SHA | (없음) | `f60be69518c026f7cdacd3b9f7143d8bb70f1d62d8a5fd0326ca3cd18844f8b0` |

`node scripts/check-limiter-ledger.mjs laftel` → 본문 23 / 원장 23 (165–187) 1:1 OK.

`node test-v2/tools/migrate-reference.mjs --brand laftel --gate-only` → `verdict: PASS`, `problems: []`.

FIX_DONE laftel fixed=1 logdest=13

---

## 개정 — 의미 검토 FAIL 1 (2026-08-29) — D2a only

대상: `docs/design-md-weight/migrated/laftel/{migration-log.md,audit-log.md}`. `DESIGN.md` 본문·토큰·표·원본·provenance 미수정.

### 결함 1 — 삭제 처분 행의 식별 라벨 재수록 (D2a)

`migration-log.md` `:41`(§13 처분)과 이 파일 범위 밖 관찰 D2a 칸이 삭제 대상 라벨을 dest 0 증명용으로 다시 적음. 본문 승격은 없음(항목 7 위반 아님). 삭제 사실·조항·계수(본문·원장 0회)는 남기고 식별 표기는 지움. 원장 Omission ledger `§13 Personas — 4 illustrative archetypes (name, age, city included)` 표기를 기준으로 무식별화 — 「§13 페르소나 3인의 라벨이 본문·원장에 0회임을 확인」.

실측 (`str.count`, 산출 4파일; `grep -c` 미사용): §13 페르소나 3인의 라벨 전부 DESIGN 0 / provenance 0 / migration-log 0 / audit-log 0.

`node scripts/check-limiter-ledger.mjs laftel` → 본문 23 / 원장 23 (165–187) 1:1 OK (본문 미수정).

FIX_DONE laftel d2a=2
