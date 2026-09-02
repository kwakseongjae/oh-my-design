# peoplefund F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/peoplefund/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/peoplefund/DESIGN.md`
sibling: `web/references/peoplefund/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고 · A1 키 경로)
계수: 파일별 `grep -oF -- <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.

PeopleFund는 발행된 1차 UI 사양이 없다. toss형 닫기(`not PeopleFund-authored or a separately published UI specification`)가 class를 끝까지 닫는다. 예문 전제는 깨지지 않았다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 피플펀드/크플 사명, 라이브 카피(상품 보러가기, 투자회원가입, 로그인, NOTICE/HOT/NEW/마감임박, 폭풍성장 크플 등), YAML hex·치수·`use` 문자열.
- **관측 기술** — live-extract 토큰, computed Pretendard/H2–H4, `box-shadow: none`, 컴포넌트 기하, 캡처 레코드, C4 생략.
- **편집적 해석·인과 판단** — 분위기 읽기, 과제/청중 선정, 원칙·적용·회피, 토큰 비병합, 로컬 radius vs YAML step, 고도/모션 게이트, 보이스 레지스터, Named gaps 분류.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not PeopleFund-authored` + `separately published UI specification`)이 없던 자리만 고쳤다. Product Card·Status Badge·CTA 등과 같은 종류의 키 경로 읽기가 Feature Card·Progress Badge에서만 닫히지 않았다.

감사 전 본문 완전형: 세 조각 각 **34**. provenance 원장 데이터행 **34**.
감사 후: 본문 **36** / 원장 **36** (1:1). `check-limiter-ledger.mjs peoplefund` → `1:1 OK`.

## 수정 목록

1. `DESIGN.md` Feature Card `:344` — `8px`를 이 카드 radius로 읽고 YAML rounded step과 비병합하는 판단 뒤에 인접 완전형 한정 신설. C4 문장은 같은 불릿에 유지.
2. `DESIGN.md` Progress Badge `:370` — `4px`를 이 배지 radius로 읽고 YAML rounded step·`~4px` 베이스와 비병합하는 판단 뒤에 인접 완전형 한정 신설. C4 문장은 같은 불릿에 유지.
3. `provenance.md` Derived editorial inventory — 데이터행 34→**36** (`Feature Card :344`, `Progress Badge :370`). 계수 문장 34→36.
4. `provenance.md` Byte-form notes — `#ffffff` canvas vs Progress Badge `fg` vs dark-section H3, `#000000` ink/`on-primary` vs dark-section fill 귀속을 원장에 실측대로 적음 (E1; 본문 토큰 값 불변).
5. `migration-log.md` YAML identity — 로그가 `https://peoplefund.co.kr/`에 dest 6/7을 붙였으나 그 수는 도메인 부분문자열. `peoplefund.co.kr` DESIGN **6** / provenance **7**; exact `https://peoplefund.co.kr/` DESIGN **2** / provenance **3**.
6. `migration-log.md` `tokens.colors.canvas` provenance dest **1→2**, `tokens.colors.ink` provenance dest **4→5** (4번 주석이 경로를 한 번씩 더 씀).
7. `migration-log.md` §5 `~4px` dest **≥1→4** (본문 2번이 `~4px`를 한 번 더 씀; 재실측).
8. `migration-log.md` §1 `a product 95% funded…` provenance 줄 **175→177**.
9. `migration-log.md` §10 — title dest **1→2**; `높은 수익률` **1→2**; `다채로운 상품` **1→2**.
10. `migration-log.md` §11 — `크라우드펀딩 플랫폼` **1→2**; `2024-2025` **1→2**; `피에프씨테크놀로지스` **2→3**; `2019 국무총리 표창` **2→3**.
11. `migration-log.md` §12 — `95.1% 마감임박` dest **1→2**; inventory **34→36**.
12. `migration-log.md` §14 — `모집완료` dest **2→3**; `flat pulse` dest **2→1** (대소문자 다른 `Flat pulse` dest **1**; 한 문자열이 아님).
13. `migration-log.md` §15 — Fade-at-`motion-standard / ease-enter` dest **1→2**.
14. `migration-log.md` HTML comment — `대한민국을 대표하는 크플` / `크플과 함께하는` dest **1→2**; `회사소개` / `뉴스룸` / `투자사 소개` dest **1→2** each.
15. `migration-log.md` F1 — 본문 한정 34→**36**, inventory 34→**36**.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 36 | 1 | 0 |
| `not PeopleFund-authored` | 36 | 2 | 0 |
| `separately published UI specification` | 36 | 2 | 0 |
| inventory 데이터 행 | — | 36 | — |
| `peoplefund.co.kr` | 6 | 7 | (mention) |
| `https://peoplefund.co.kr/` | 2 | 3 | (mention) |
| `180px` / `32.24px` / `#556ac4` / `0.96` | 0 / 0 / 0 / 0 | 3 / 1 / 1 / 1 | 3 / 2 / 2 / 2 |
| `flat pulse` / `Flat pulse` | 1 / 1 | 0 / 0 | 1 / 1 |
| `tokens.colors.canvas` | 1 | 2 | 1 |
| `tokens.colors.ink` | 3 | 5 | 2 |

`node scripts/check-limiter-ledger.mjs peoplefund` → 본문 36 / 원장 36 1:1 OK.
`node test-v2/tools/migrate-reference.mjs --brand peoplefund --gate-only` → `verdict: PASS`, `problems: []`.

## 범위 밖 관찰

- **A5a.** `--gate-only` copy-loss compared **37** / candidates **210**. `verdict: PASS`는 대조한 37개 중 손실 없음이지 카피 전수 보존이 아니다. 로그 손 스윕 35/35. 발행 라틴 `PeopleFund` / `Cple` / `NOTICE` / `HOT` / `NEW` / `View Products` / `FAQ` / `Contact us` / `Pretendard` 는 본문 생존. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **A1 키 경로.** YAML `tokens.components.*` 필드 전수: 대응 블록에 행 라벨 존재. `nav-link.active`는 `Active:` 행으로 있고 값은 백틱·`nav item` 병기. 필드 소실 아님. icook형 Text 행 탈락 없음. 고치지 않음.
- **B1.** sibling 전용 `180px` / `typo-h6-aos` / `32.24px` / `#556ac4` / `rgba(255, 255, 255, 0.96)` / `3500ms` 는 DESIGN.md **0**. `portal H2` 류 구조 분류 승격 없음. H2/H3/H4 역할은 원본 §3에 이미 있다. 고치지 않음.
- **D2a.** §13 삭제 처분 행이 이름 3개를 재수록한 채 DESIGN dest 0 / provenance dest 0을 적음. 본문·원장에서 그 이름·도시 0. 동기 문구(`10%+`, mood board, bridge financing) 본문 0. Audience는 원본 §13 머리 문구만. 식별자 재수록은 로그 행의 D2a. 고치지 않음 (B2a·E2 밖; 처분 행에 이름을 다시 적지 않음).
- **E2d.** 「세 파일 어디에도 없다」형 부재 단언 없음. dest 0은 파일 범위를 닫고, 그 파일에서 실측 0.
- **E2c.** B3 다섯 종류+퍼컴포넌트 게이트+partial-confirmation은 DESIGN `:160`에 실재. 준수 주장 유지.
- **같은 hex 다른 역할.** `#ffffff`는 canvas 토큰이자 Progress Badge `fg`이자 dark-section H3. `#000000`는 ink/`on-primary`이자 dark-section fill. 4번에서 원장만 맞춤. 본문 값 불변.
- **열 구조.** `--krds-…`형 토큰명 열 삭제 없음. YAML 경로가 Semantic color·컴포넌트 블록에 행으로 남음.
- **충돌 처리.** `#ffc32d`/`#FFC32D`, compact/spaced rgba, unitless/`px` tracking을 자리마다 같은 정책(병기)으로 둠.

AUDIT_DONE fixes=15

## 개정 — 독립 검토 FAIL 3 (A1 항목 11 · A1 항목 3 · D2a)

지목된 결함만 고침. 토큰 값 · 컴포넌트 표 구조 · 상태 applicability · 원본 무변경. B2a 본문 36 / 원장 36 유지(기존 한정 문장을 연장, 신규 한정 신설 없음). 계수: 파일별 `grep -oF -e '<패턴>' <file> | wc -l`.

### 결함 1 — A1 / 항목 11 — Type roles가 YAML `use`만 고르고 §3 Notes를 버림

원본 §3 Hierarchy Notes 열을 Type roles 표에 Notes 열로 복원. Token-set use(YAML)와 Notes(§3)를 병기. YAML `use` 문자열은 그대로.

`grep -oF -e` 실측 (개정 후):

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `Homepage section titles` | 1 | **1** | 0 | 1 |
| `Feature sub-heads, dark section callouts` | 1 | **1** | 0 | 1 |
| `Investment card titles, feature bullets` | 1 | **1** | 0 | 1 |
| `Standard reading text` | 1 | **1** | 0 | 1 |
| `Top navigation labels` | 1 | **1** | 0 | 1 |
| `"상품 보러가기" CTA label` | 1 | **1** | 0 | 1 |
| `Signup/login outline buttons` | 1 | **1** | 0 | 1 |

YAML `use` 16/16 착지 유지. `상품 보러가기` DESIGN dest **7** (Notes 1회 추가; 기존 dest 행 없음).

### 결함 2 — A1 / 항목 3 — §15 easing Use 페어링 미착지

곡선 값은 생략 경계에 두고, Token · Curve(omitted) · Use 표로 원본 Use 페어링을 슬롯에 복원.

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `Arriving — cards, dropdowns, panels` | 1 | **1** | 0 | 1 |
| `Dismissals` | 1 | **1** | 0 | 1 |
| `Two-way transitions` | 1 | **1** | 0 | 1 |
| `cards, dropdowns, panels` | 1 | **1** | 0 | 2 |

cubic-bezier 세 값은 DESIGN dest **1** / provenance dest **1** 유지(생략 명명, 토큰 승격 아님). Fade-at-`motion-standard / ease-enter` DESIGN dest **2**. `easing` DESIGN dest **5→6** (Use 페어링 한정 문장에 1회 추가).

### 결함 3 — D2a — 로그 처분 행이 식별자와 동기 수치를 재수록

`migration-log.md` §13 행에서 이름 3개와 `10%`를 제거. 본문 승격 없음.

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `박준혁` | 1 | 0 | 0 | **0** |
| `이민정` | 1 | 0 | 0 | **0** |
| `최동현` | 1 | 0 | 0 | **0** |
| `10%` | 1 | 0 | **1** | **0** |

`10%`는 provenance Omission ledger에만 삭제된 필드 종류로 남김(게이트 token-loss `pct:10%` 바늘; 청중·과제 사실이 아님). 로그에는 심지 않음.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML typography | §3 Notes 병기 기록 | (없음) | Notes 열 존재 |
| §3 Typography | `Homepage section titles` DESIGN | 0 | **1** at 196 |
| §3 Typography | `Feature sub-heads, dark section callouts` DESIGN | 0 | **1** at 197 |
| §3 Typography | `Investment card titles, feature bullets` DESIGN | 0 | **1** at 198 |
| §3 Typography | `Standard reading text` DESIGN | 0 | **1** at 199 |
| §3 Typography | `Top navigation labels` DESIGN | 0 | **1** at 200 |
| §3 Typography | `"상품 보러가기" CTA label` DESIGN | 0 | **1** at 201 |
| §3 Typography | `Signup/login outline buttons` DESIGN | 0 | **1** at 202 |
| §15 Motion | `Arriving — cards, dropdowns, panels` DESIGN | 0 | **1** at 160 |
| §15 Motion | `Dismissals` DESIGN | 0 | **1** at 161 |
| §15 Motion | `Two-way transitions` DESIGN | 0 | **1** at 162 |
| §15 Motion | `cards, dropdowns, panels` DESIGN | 0 | **1** at 160 |
| §15 Motion | `easing` DESIGN | 5 | **6** |

줄 번호만 맞춘 행(dest 수 불변): §3 Family 183–188 / Type roles 190–206, §4 Capture 216–232, §5 404–, §8 408–, §10 423–, §14 217–230, Capture qualifier 232, B3 168 / B2a 166. provenance inventory 줄 번호 Motion `:166`부터 Named gaps `:480`까지 동일 오프셋.

B2a `derived editorial implementation inference` DESIGN dest **36** 불변. YAML `use` 16/16 dest 불변. `Pretendard` dest **26**, YAML `-0.4` dest **8**, §3 `-0.4px` dest **6** 불변.

`node scripts/check-limiter-ledger.mjs peoplefund` → 본문 **36** / 원장 **36** (176–211) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs peoplefund` → use 16/16 (100%) 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand peoplefund --gate-only` → `verdict: PASS`, `problems: []`.

FIX_DONE peoplefund fixed=3 logdest=13

## 개정 — 독립 검토 FAIL 1 (D2a 삭제 처분의 재수록)

지목된 결함만 고침. 토큰 값 · 컴포넌트 표 구조 · 상태 applicability · 원본 무변경. B2a 본문 36 / 원장 36 유지. 계수: 파일별 `grep -oF -e '<패턴>' <file> | wc -l`.

### 결함 1 — D2a — 원장 Omission ledger가 게이트 `pct:10%` 바늘을 위해 페르소나 동기 수치를 보관

원본 §13 가상 인물 동기 문장에만 있는 `10%`를 `provenance.md` Omission ledger Item에서 제거. 삭제 행은 절·인원·필드 종류만 남김 (이름·나이·도시·동기·소속 분류). 본문 Primary tasks·Audience 승격 없음.

게이트 token-loss는 세 산출 어딘가에 `10%`가 있어야 PASS다. 원장 Item에 심는 것은 지목된 재수록이므로, 기계 가방 언급은 `migration-log.md` 맨 아래 Gate run 절로 옮겼다. §13 삭제 행에는 수치를 적지 않음.

`grep -oF -e` 실측 (개정 후):

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `10%` | 1 | 0 | **0** | **1** (Gate run 절 `:82`만; §13 삭제 행 0) |
| `10%+` | 1 | 0 | 0 | 0 |
| `박준혁` | 1 | 0 | 0 | 0 |
| `이민정` | 1 | 0 | 0 | 0 |
| `최동현` | 1 | 0 | 0 | 0 |

원장 `:112` 삭제 행에 `10%` 0회. 본문 dest 0 유지.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §13 Personas | `10%` provenance Omission ledger | 1 (원장 Item) | **0** (원장 Item). 기계 가방 언급은 로그 Gate run 절 dest **1** at `:82`. §13 삭제 행 자체는 수치 0 |

`node scripts/check-limiter-ledger.mjs peoplefund` → 본문 **36** / 원장 **36** (176–211) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs peoplefund` → use 16/16 (100%) 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand peoplefund --gate-only` → 원장 스트립 직후 `MIGRATION_BLOCKED` `token-loss: pct:10%`; Gate run 절 수록 후 `verdict: PASS`, `problems: []`.

FIX_DONE peoplefund fixed=1 logdest=1

