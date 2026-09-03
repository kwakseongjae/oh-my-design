# plaid 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/plaid/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/plaid/DESIGN.md`
검증 sibling: `web/references/plaid/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches found`는 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-03

Plaid는 내부 디자인 시스템 **Threads**(Platform + Brand, WCAG 2.1 AA)를 블로그와 `threads.plaid.com/brand`에 문서화한다. B2a 예문 전제(v12)의 「발행 사양 부재」는 이 브랜드에 성립하지 않는다. 한정이 인접하고 evidence class를 끝까지 닫는지만 봤다. 본문이 쓰는 완전형은 `derived editorial implementation inference from the verified surfaces; … not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation`이다. 토큰 값·컴포넌트 표·상태 applicability·구조는 건드리지 않았다.

착수 실측: 본문 `derived editorial` 32 / `not Plaid-authored` 32, 원장 데이터 행 32. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus형). 한정 목록이 이름하지 않은 세 번째 부류가 네 줄에 있었고, Scope `:11` 목록은 같은 단락의 편집 읽기를 빼먹었다.

## 수정 목록 (18건)

### B2a — 인접 한정 (본문 7건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나/고쳤나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope 분위기 | 인접 완전형은 있었다. 이름한 읽기는 approachable / plumbing / restrained chrome / rationed color / pill geometry / flat-fast / one hit of color뿐. 같은 단락의 defining-gesture · single most distinctive · brand thesis · eclectic playful palette · essentially no drop shadows · separation entirely through tints/hairlines/whitespace는 세 번째 부류인데 목록 밖. | 기존 완전형의 읽기 목록을 그 문장들까지 확장. 발생 수 +0. |
| 2 | `DESIGN.md:118` — Semantic color leftover | `Input text #4b4b4b is a component field on tokens.components.input-text, not a tokens.colors.* key`는 경로 분류. `:85` 한정은 역할명·`#ffffff`/`#02294b` 비해제·ink/ink-button·gradient stops만 이름한다. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:173` — Motion B3 | 같은 줄 끝의 `Generic Focus named as a motion-fast use is not a focus-visible treatment`는 B1 비승격 판단. 기존 한정은 다섯 종류 게이트·부분 확인 거부·공식 문서 매치 거부만. | Focus 문장을 한정 앞으로 옮기고, 그 문장을 비승격으로 분류한다고 기존 완전형에 이름을 넣음. `Focus`/`motion-fast`/`focus-visible` 발생 수 +0. |
| 4 | `DESIGN.md:248` — Capture record | 한정이 `The following applicability note`라고 적었으나 노트는 위에 있다. generic-Focus 비승격은 242에 있고 한정 목록에 없음. | `The capture-record notes above, including the generic-Focus non-promotion`으로 고침. 발생 수 +0. |
| 5 | `DESIGN.md:359` — Ghost Pill | `YAML button-ghost records no background and no height; §4 adds padding 0px 18px. Both writings stay`는 Foundations에서 한 비해제와 같은 증거-종류 판단인데 인접 완전형이 없음. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:386` — Top Nav Item | `That height is a §8 writing, not a YAML component field`는 Type roles `:203`이 Nav Link에 대해 한 분류와 동형. 인접 완전형 없음. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:414` — Mega-Menu Row | `~50px`에 대해 386과 같은 분류, 인접 완전형 없음. | 같은 줄에 완전형 신설. 발생 수 +1. |

수정 후 실측 (`grep -o` / 파일별):

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial` | 36 | 1 | 1 |
| `not Plaid-authored` | 36 | 1 | 0 |
| `including the published Threads documentation` | 37 | 2 | 0 |

본문 한정 줄(36): 9, 11, 13, 19, 28, 32, 45, 55, 68, 85, 118, 126, 139, 151, 155, 163, 171, 173, 181, 199, 203, 223, 235, 248, 252, 359, 386, 414, 491, 499, 518, 526, 533, 541, 554, 588.
`:173`이 Threads 문구를 읽기 안과 닫힘에 한 번씩 써서 `including the published Threads documentation`은 본문 37이다. provenance의 같은 절 인용은 색인이지 휴대 한정이 아니다.

줄 수는 595로 유지. 새 한정은 기존 줄에 이어 붙였다.

### E1 — provenance derived 범위 (5건)

착수 때 원장 32 / 본문 32는 같이 좁았다. 본문을 넓힌 뒤 원장을 맞추지 않으면 좁은 쪽 FAIL.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | Experience Scope `:11` 행 | 본문 `:11`이 이제 이름하는 defining-gesture / no-drop-shadows / eclectic palette가 원장 목록에 없음. | 행의 읽기 목록을 본문과 같게 확장. |
| 9 | Semantic color leftover `:118` | 행 없음. | 데이터 행 신설. |
| 10 | Motion B3 `:173` / Capture `:248` | 게이트만 / following-note만. generic-Focus 비승격이 없음. | 두 행에 그 분류를 이름. |
| 11 | Ghost `:359` · Top Nav `:386` · Mega-Menu `:414` | 행 없음. | 데이터 행 3개 신설. |
| 12 | 푸터 계수 | `32 complete B2a qualifications` / `32 data rows`. | `36` / `36`. 표 줄 번호와 본문 한정 줄이 1:1. |

### E2 — migration-log dest (6건)

각 행의 값을 세 파일에서 `grep -o`로 재실측. 로그 mention은 use가 아니다.

| # | 무엇이 틀렸나 | 실측 | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | YAML colors 행: `#00172e` hex dest 8, `#0d0d3f` hex dest 6 | DESIGN `#00172e` 9, `#0d0d3f` 7 | hex dest 9 / 7 |
| 14 | `tokens.colors.ink` dest 1, `surface` dest 1, `hairline` dest 1 | `grep -o`는 접두라 ink 3 (ink-teal/ink-button), surface 2 (surface-grey), hairline 2 (hairline-alt) | 접두 dest와 unsuffixed 키를 분리해 적음 |
| 15 | Input `#4b4b4b` "stays on the component"만. dest 없음 | DESIGN 2 / provenance 1 (감사 후 E2a) | DESIGN dest 2 / provenance dest 1, qualified at 118 |
| 16 | §13: `fintech developers` src 1, `product engineers` src 1, `builder, not a lead to be closed` dest 1 | src `fintech developers` 2, `product engineers` 2; builder DESIGN dest 2 (Audience 28 + Voice 541) | src 2 / dest 1, src 2 / dest 1, src 1 / dest 2 |
| 17 | §12: 원장 32 data rows; unique-phrase: RGB 6종을 Scope / Semantic color에 복원 | `derived editorial` DESIGN dest 36. `Explore pills` DESIGN dest 1 / provenance dest 3 (Scope). RGB 5종은 Semantic color에만 DESIGN dest 1 each, Scope 0 | 원장 36; Explore pills → Scope; RGB → Semantic color not Scope |
| 18 | 컴포넌트 행: Ghost `0px 18px` dest 없음. 48px / ~50px dest 없음. §15 B3가 Focus를 이름하지 않음 | `0px 18px` DESIGN dest 2; `48px` DESIGN dest 4 / provenance dest 1; `~50px` DESIGN dest 2 / provenance dest 1 | dest와 386/414/359 한정 위치를 적고, 173이 generic-Focus 비승격을 이름한다고 보탬 |

A5a dest 표의 발행 카피 24종은 본문 한정이 그 문자열을 추가·삭제하지 않아 재실측 값이 착수와 같다 (`Start building` DESIGN 7, `Read the docs` 8, `Plaid Sans` 38, `Cern` 19). `derived editorial`만 32→36으로 로그 §12에 반영.

## 분류에서 한정하지 않고 둔 것

브랜드 발행 / 원본 기록: 라이브 카피, YAML 값, §2 역할 문장(`The anchor of the system`, `Warmer than navy, distinctly Plaid`), §7 Do/Don't 본문(섹션 머리 55·68이 덮음), §12 다섯 줄기(45가 덮음), Key Characteristics 불릿(32가 덮음).
관측 기술: hex, radius, padding, `box-shadow: none`, live `58px`.
상태 Reason 칸: C 조항·수정 금지.
Governance 보일러플레이트.
곡선 생략: 원본 §15 곡선은 provenance omission ledger에 있고 본문은 이름·Use만 남김(T2 관례 / kmong형 의도적 생략). 되살리지 않음.

## 범위 밖 관찰

- **A1 키 경로.** 원본 YAML `tokens.components.<id>.<field>` 10개 블록을 산출 대응 `###` 블록의 행으로 대조. Background/Text/Border/Radius/Padding/Height/Font/Token-set path/Token-set use/Primitive type 행이 각 블록에 있다. Ghost YAML은 padding/bg/height가 없고 §4 `0px 18px`만 있다 — 산출이 그 이중 기록을 보존. 필드 소실 없음. 복원 없음.
- **A5a.** 게이트 `copy-loss` compared 0 (라틴 전용, 바늘 공집합). 손 스윕 발행 카피 24 extracted / 0 missing. `Turn data into revolutionary financial products` / `Powered by the largest financial network` / `Everything you need to build intelligent finance` / CTA 4종 / nav·menu 라벨 / `ALL PRODUCTS` / 통계 3종 / `Bank payments designed for fast connections.` 본문 생존. 라틴 카피 손실 눈에 띄지 않음. `verdict: PASS`는 대조분모가 비어 있다는 뜻이지 카피 보존의 증거가 아니다 — 로그가 그 분모를 이미 적음.
- **B1 sibling.** sibling 전용 문자열 DESIGN dest 0: `The AI infrastructure behind smarter finance` 0, `A network that makes your products better` 0, `Explore Protect` 0, `Previous items` 0, `85.12px` 0, `66.12px` 0, `1440×900` 0, `13px 11px 13px 16px` 0, `rgb(39,69,92)` 0, `Enabling all companies to build fintech solutions` 0. `portal H2` 세 파일 0. 구조 분류 승격 없음. `1440px` DESIGN dest 1은 원본 §8 `1024-1440px`.
- **D2a.** 원본 §13 3인의 이름·나이·도시 문자열은 DESIGN/provenance/log에서 0. 그 절에만 있던 동기 구·소속 분류 구도 본문 0. 원형 라벨 `fintech developers` / `product engineers` / `founders building on financial APIs`는 원본이 페르소나 앞머리에서 공개 관측 세그먼트로 적은 문장이며 로그 삭제 행에 처분 근거로 남아 있다(게이트 copy-loss 경계). 삭제 행은 이름·나이를 열거하지 않음.
- **E2d.** `live-extract` 부재 단언은 provenance Identity가 **portable body**로 범위를 닫고, DESIGN dest 0 / provenance dest 4. 단언 문장이 「세 파일 어디에도 없다」고 하지 않음. §13 원장은 필드 종류만 적고 식별자 문자열을 다시 넣지 않음.
- **같은 hex 다른 역할.** `#ffffff`는 canvas(111) · on-primary(112) · Outline Pill fill(324) · Product Card fill(431) · Text Input fill(454). `#02294b`는 dark-section fill · Dark Feature Card · Primary Pill · input border. 원장 Semantic color `:85`가 비해제를 이미 이름함. 고치지 않음.
- **충돌 처리 일관성.** `100px` / `999px` / `9999px`, YAML `8` vs rounded `8`, live `58px` vs YAML `70`/`60`는 문서 전체에서 비해제. 자리마다 다른 정책 없음.
- **A5 발행 카피.** `Auth, Identity, Balance, Transfer, Signal, Protect, Identity Verification` DESIGN dest 1. 원본 HTML 주석 `IDV`는 본문 정식명이 아니며 산출은 본문 표기를 유지.

AUDIT_DONE fixes=18
