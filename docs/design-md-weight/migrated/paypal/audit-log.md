# PayPal 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/paypal/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/paypal/DESIGN.md`
검증 sibling: `web/references/paypal/.verification.md` — `find web/references/paypal -maxdepth 1 -type f`와 `test -f web/references/paypal/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. `no matches found`는 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 DS 없음(원본에 `ds.name` / `ds.url` / `ds.type` 없음; getdesign 404, Refero 무결과). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not PayPal-authored or a separately published UI specification`을 요구한다. 기존 26건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 26 / 원장 26. 숫자는 맞았으나 Cookie Consent (Tertiary)·Log In·Sky Blue / Midnight Blue Section의 증거-class 분류는 세 번째 부류인데 인접 한정이 없었다(Capture record `:231`·`:248`은 200줄 이상 떨어져 인접이 아니다). Font evidence `:186`은 인접했으나 specimen/license 패킷 경계를 이름하지 않았다. 26은 과소였다.

토큰 값·컴포넌트 표·상태 applicability·절 구조는 수정하지 않았다. 본문 한정은 같은 줄에 붙여 기존 dest 줄 번호를 유지했다.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 4건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:186` — Font evidence | 기존 한정은 display/CTA·UI·fallback 치환 금지까지. Official product-use 칸의 “separately issued type specimen”과 Official distributed / License 미해상은 같은 표의 증거-class 해상인데 그 한정이 이름하지 않음. Family `:194`는 절이 달라 인접이 아니다. | 같은 줄에서 패킷 경계 읽기를 기존 완전형 목록에 포함. 새 줄 아님. 인스턴스 수 불변. |
| 2 | `DESIGN.md:452` — Cookie Consent (Tertiary) | “`not in the token set`. Primitive type is not invented from the Buttons heading…”는 편집적 분류. `:231`·`:248`이 같은 결정을 이름하나 200줄 이상 떨어짐. 인접 없이 coverage만 있으면 coverage가 아니다. | 같은 줄 끝에 완전형 한정 신설. |
| 3 | `DESIGN.md:478` — Log In (header) | “this slot holds only the Log In recipe. Primitive type is not invented.”는 편집적 분류. 값(white fill, 3px black border)은 원본 §9 사실. | 같은 줄 끝에 완전형 한정 신설. 값 바이트는 그대로. |
| 4 | `DESIGN.md:498` — Sky Blue / Midnight Blue Section | “source §4 color-section uses, not YAML component keys and not extra primitives”는 구조 분류. `:231`이 이름하나 인접이 아니다. | 같은 줄 끝에 완전형 한정 신설. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 29, `not PayPal-authored` 29, `separately published UI specification` 29. 한정 줄: 9, 11, 13, 19, 28, 32, 44, 54, 67, 83, 118, 131, 142, 146, 186, 194, 198, 215, 224, 231, 248, 377, **452**, **478**, **498**, 508, 557, 580, 614.

`provenance.md` / `migration-log.md`의 같은 문자열은 mention이지 본문 use가 아니다.

고의로 붙이지 않은 것: Spacing/Shape/Type roles/Nav Tab의 키 경로 분리 문장(A1 값 보존, 브랜드 해석 아님); Motion `:170`의 focus ≠ `focus-visible`(B1 증거 종류, `:248`이 본문 계약으로 유지); Principles·Do/Don't 항목(머리 한정이 덮음); 상태 Reason 칸(C 조항, 수정 범위 밖).

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `provenance.md` Derived editorial inventory | 착수 원장 26행 = 본문 26. 본문에 한정 3건을 신설하면 원장이 좁아진다(fastcampus형). `:186` 행은 인스턴스는 그대로이나 패킷 경계 읽기를 빠뜨림. | 원장 26→**29**. 행 신설 3(Cookie Consent `:452` · Log In `:478` · Sky Blue / Midnight Blue `:498`). Font evidence `:186` 설명을 본문과 1:1로 확장. 헤더 `29 = 29`. |

### E2 / E2a / E2c — 로그·원장 목적지 (15건)

본문이 아니라 로그(및 sibling 원장 행)만 고침. 이중 목적지는 둘 다. 없는 줄은 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | `provenance.md` Omission ledger Sibling file | `None in web/references/paypal/`. `find`+`test -f`로 `.verification.md` 존재. 부재 단언이 거짓. | 경로를 직접 적고, overlap은 원본에 이미 있으며 sibling-only는 본문에 승격하지 않았다고 적음. 그 행에 sibling-only 표제를 열거하지 않음(E2d). |
| 7 | 로그 헤더 sibling | `find … returns only DESIGN.md` — `find -type f`는 dotfile을 보여 준다. 실측 2파일. | `web/references/paypal/.verification.md`를 경로 그대로 기록. |
| 8 | 로그 Sibling handling | “No sibling file” 전체 절이 거짓. | 존재 확인 명령·경로·비승격만. sibling-only 표제를 세 파일 부재 단언에 넣지 않음. |
| 9 | 로그 A5a sibling 행 | Extracted 0 / No sibling file. | 파일 존재. overlap은 원본 분모. sibling-only는 본문 dest 0(승격 없음). |
| 10 | YAML `tokens.components` primitive type 줄 | `badge` (417) / `dialog` (431) — 417·431은 Role 행. Primitive type은 **418** / **432**. | 418 / 432. `not in the token set`는 452/478 + Capture record 231/248 (E2a). |
| 11 | YAML type-role dest | `202–208`이 Muted text(§3-only, **209**)를 “beside YAML”로 묶음. YAML 7역할은 202–208, Muted는 209. | `202–209`, Muted at 209. A5a YAML `use` 행의 202–208은 YAML 7역할 그대로 둠(Muted는 YAML `use`가 아님). |
| 12 | §3 Type rules dest | `215–219` — 4번째 원칙 Short copy는 **220**. 215는 한정, 규칙은 217–220. | `217–220`. Font-evidence 한정 186이 specimen/license를 이름한다고 병기. |
| 13 | §4 Cookie / Sky dest | Cookie tertiary `449–473` — 449는 빈 줄, heading 450, 마지막 success **474**. Sky `496–504` — 본문은 496–503, 504는 빈 줄. | `450–474`; `496–503` + B2a 498. |
| 14 | §5 Layout dest | `508–532` — 531은 Breakpoints 표제(§8 시작). 레이아웃 본문은 cadence **529**까지. | `508–529`. |
| 15 | §8 Responsive dest | Breakpoints `536–541` — `<640px`는 **535**, 데이터 행 535–538. 541은 빈 줄. Touch `545–547` — 52/48/40px는 **542–544**. 545–547은 빈 줄+Collapsing 표제. Collapsing `551–555` — hamburger **549**, `96px → 48px` **552**, 555는 Content 표제. fitpet형 2차 목적지. | `535–538` / `542–544` / `548–552`. dest 0 네 문자열 재실측 0. |
| 16 | §11 narrative dest | `provenance.md` 84–86 — 84는 Claim ledger `tokens.colors.primary`. 서사 문장은 **76**. 142는 Proof notes로 유지. | `76 / 142`. |
| 17 | §12 inventory dest | “26 data rows”. 본문·원장 29. | 29. 452/478/498 한정 dest 병기. |
| 18 | §15 Motion dest | Easing `157–160` — 157은 표 헤더, `ease-standard`는 **161**. Signature `164–168` — 164는 빈 줄, 항목은 **165–168**. | `159–161` / `165–168`. B3 전문은 여전히 `:170`(E2c 유지). |
| 19 | Footer Tier 1 / Tier 2 dest | Tier 1 `67–69` — 67은 `### Tier 2` 표제, 69는 getdesign 404. Tier 2 `71–73` — 빈 줄+디렉터리 설명. 실제 Tier 1 URL **64–65**(표제 62), Tier 2 **69–70**(표제 67). | 실측 줄로 교체. Conflicts 44는 유지. |
| 20 | Deviations · SHA | `wc -w` 8,116 / B2a 26=26 — 본문 한정 추가 후 `wc -w` **8,251**, B2a **29=29**. | 8,251 · 29=29. Auditor SHA `9f85243a0b904a90a84526c45cd88d1cb7f8086d17acca73693d7a747075e13c`. Worker-close SHA는 이관 시점 측정으로 병기. |

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — PayPal / PayPal Pro / Plain, 발행 카피(“Pay, send, and save smarter” 등), YAML `use`/`font`/hex, §7 Do/Don't, §12 원칙 줄기, §11 연혁 수치, §14 상태 표.
- **관측 기술** — live `99.4px` / `67.1px` / `13.93px 32.86px`, `blue-400-plate`, `rgb(96, 205, 255)`, primitive `type`, unitless line-height, `tokens.rounded.full: 1000`.
- **편집적 해석·인과 판단** — 두 URL을 계약 표면으로 읽기, Nike/Apple·cadence 읽기, 서사≠토큰, 과제/청중 선정, 원칙 UI implication, Do/Don't 이유, 같은 hex 역할 분리, 키 경로 비병합, 증거 class 해상(폴백 ≠ 브랜드 페이스, specimen/license 패킷 경계, `not in the token set`, color-section ≠ 컴포넌트), kind/applicability, 보이스 레지스터 읽기.

세 번째 부류 중 26곳은 착수 시 인접 완전형이 있었고, Cookie Consent / Log In / Sky Blue 3곳은 한정이 없어 그 자리에 붙였으며, Font evidence는 인접 한정의 이름을 패킷 경계까지 닫았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 29 | 1 | 1 |
| `not PayPal-authored` | 29 | 2 | 2 |
| `separately published UI specification` | 29 | 2 | 2 |
| inventory 데이터 행 | — | 29 | — |
| `not in the token set` | 5 | 2 | 2 |
| `Token-set use:` | 9 | 0 | 1 |
| `Primitive type: \`badge\`` | 1 | 0 | 0 |
| `web/references/paypal/.verification.md` | 0 | 1 | 4 |
| B3 다섯 종류+게이트 (`DESIGN.md` 170) | 1 | 0 | 1 |

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다.

토큰·표·applicability·구조·원본 무변경. 본문 줄 수 불변(한정은 기존 줄에 부착).

## 범위 밖 관찰

- **A1 키 경로.** 원본 YAML `tokens.components.<id>.<field>` 9컨트롤 전 필드를 해당 블록의 행으로 대조. 값과 필드 라벨(Background/Text/Radius/Padding/Height/Font/Border/Shadow/Active/Primitive type/Token-set use)이 그 블록 안에 있음. 같은 hex가 다른 블록에만 있는 icook형은 없음. 색 15키·family 3·type-role 7·spacing 8·rounded 4·shadow 2의 `tokens.*` 경로가 Semantic color / Family / Type roles / Spacing / Shape / Elevation에 열로 남아 있음. YAML `use` 16문자열 본문 dest ≥ 1. 복원 없음.
- **A5a.** 게이트 `copy-loss` compared 0 / candidates 186. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 라틴 카피 손 대조(위 표 24종 + YAML `use` 16): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 고치지 않음.
- **B1 sibling 승격.** sibling-only 실측 DESIGN dest 0: `Shop in stores and online` 0, `Get rewards from the brands you love` 0, `55.3393px` 0, `99.4464px` 0, `fgFreq` 0, `text-section` 0, `2026-06-23` 0, `H3 "Pay in 4"` 0. 본문에 sibling 구조 분류(“h3다”, “섹션 표제다”)를 사실로 넣은 문장 없음. DES `Accept` 2는 원본 §4 `accept/decline`의 문두 대문자(`Accept/decline writes a preference`)이지 sibling 버튼 라벨 `Accept` 승격이 아니다.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 인원·필드 종류만. 식별자 DESIGN/provenance/log dest 0. Primary tasks는 표면 라벨. 동기·소속 분류 잔존 0. Audience 그룹 `peer-to-peer senders, online shoppers, small merchants, enterprise checkout integrators`는 원본 §13 헤더와 바이트 동일. `San Jose` DES 2 / PROV 3는 §11 HQ 서사이지 페르소나 도시 재수록이 아니다. 고치지 않음.
- **E2d.** 착수 provenance sibling 행은 파일을 없다고 했을 뿐, sibling-only 문자열을 나열하며 “세 파일 어디에도 없다”고 하지는 않았다. 수정 후에도 표제를 그 행에 다시 열거하지 않음. “세 파일 어디에도 없다”면서 그 문장이 항목을 담는 단언은 없음.
- **같은 hex 역할 분리 (wave 39 krafton).** `#ffffff` canvas ≠ on-primary, `#60cdff` primary-light ≠ accent-sky, `#0070e0` link ≠ active-tab `rgb(0, 0, 238)`. 본문 `:101`과 provenance Semantic color 행·Claim ledger가 분리. 원장에 적혀 있음. 고치지 않음.
- **충돌 처리 일관 (wave 40 krds).** 같은 hex는 전 문서에서 비병합. 무출처 cubic-bezier 세 값은 모두 생략(값 dest 0; 이름·use 유지). radius 16px는 YAML 스텝이 아니라 `card-surface` 로컬. 자리마다 다른 정책 없음.
- **B3 / E2c.** `:170`이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음.
- **Wave 39.** 원본에 있는 곡선 값은 역할 서술과 함께 생략 원장에만 처분됨(본문에 값 없음 = 손실이 아니라 무출처 생략). 원본에 없는 규칙을 합성하지 않음.

AUDIT_DONE fixes=20

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/paypal/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (29=29, 148–176).

### 결함 1 — A1 · item 11 — YAML `use` ↔ §4 Use 절단

원본 `:188` `Login email/phone, form fields`를 Input Form Body use `:388`에 복원. Token-set use는 YAML `:53` `Login and form inputs, focus ring #0070e0`를 유지. 한쪽으로 고치지 않음.

판정: **사실 인용**, 한정 불필요. 근거 — YAML `use`와 §4 Use가 같은 input을 두 표기로 적고, 잘린 것은 §4 고유 항 `email/phone`이다. 값(`#0070e0`, `8px`, `16px`)은 이미 착지했다.

`node scripts/check-limiter-ledger.mjs paypal` → 본문 **29** / 원장 **29** (148–176) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs paypal` → use 16/16.
`node test-v2/tools/migrate-reference.mjs --brand paypal --gate-only` → PASS, `problems: []`.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| 문자열 | SRC | SIB | DST | PROV | LOG |
|---|---:|---:|---:|---:|---:|
| `Login email/phone, form fields` | 1 | 0 | **1** | 0 | 6 |
| `Login email/phone` | 1 | 0 | **1** | 0 | 7 |
| `email/phone` | 1 | 0 | **1** | 0 | 9 |
| `form fields` | 1 | 0 | **1** | 0 | 7 |
| `Login and form inputs, focus ring #0070e0` | 1 | 0 | **1** | 0 | 2 |
| `Body use:` | 0 | 0 | **9** | 0 | 1 |

DST `Body use:` **9** = 기존 8 + Input `:388`. YAML Token-set use dest **1** 불변.

### 갱신한 dest 행 (migration-log · provenance)

| 행 | 바늘 / dest | 옛 | 새 |
|---|---|---|---|
| YAML `tokens.components` | range / types / Cookie B2a | 250–448; card 405; badge 418; dialog 432; 452/478 | 250–449; card 406; badge 419; dialog 433; 453/479. Input Body use 388 병기 |
| §4 Component Stylings | range / Cookie / Sky / Input Use | 250–504; 450–474; 496–503; 498; Input Focus 248/387 | 250–505; 451–475; 497–504; 499; Token-set 387 + Body use 388 |
| §5 Layout | range | 508–529 | 509–530 |
| §8 Responsive | Breakpoints / Touch / Collapsing | 535–538 / 542–544 / 548–552 | 536–539 / 543–545 / 549–553 |
| §9 Agent Prompt | Log In / cadence / card composition | 478/484; 529; 412 | 479/485; 530; 413 |
| §10 Voice | range / qualifier | 557–580; 557/580 | 558–581; 558/581 |
| §12 Principles | Cookie / Log In / Sky B2a | 452, 478, 498 | 453, 479, 499 |
| Deviations wc -w | DESIGN.md words | 8,251 | 8,258 |
| Deviations B2a sites | current dest after insert | 452/478/498 | current 453/479/499 (auditor SHA 스냅샷 줄은 유지) |
| provenance inventory | Cookie / Log In / Sky / Layout / Content×2 / Named gaps | `:452` `:478` `:498` `:508` `:557` `:580` `:614` | `:453` `:479` `:499` `:509` `:558` `:581` `:615` |
| Revision dest | `Login email/phone, form fields` | 없음 0/0 | DESIGN **1** / P **0** |
| Revision dest | `email/phone` | 없음 0/0 | DESIGN **1** / P **0** |
| Revision dest | `form fields` | 없음 0/0 | DESIGN **1** / P **0** |
| Revision dest | `Body use:` | DESIGN 8 | DESIGN **9** |

Hashes: DESIGN.md `07767026eb83fdd40158b5305aa8c69baeb5afbe4e0ae6e2d96cca2323aa396c`. provenance `b1d40169edcb1bf497d9630d2c548deab7e1382c40ea77dc2f423c32112fea9c`.

FIX_DONE paypal fixed=1 logdest=14
