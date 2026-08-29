# Lamborghini 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/lamborghini/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/lamborghini/DESIGN.md`
검증 sibling: `web/references/lamborghini/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. `setopt NO_NOMATCH`.
날짜: 2026-08-29

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Lamborghini-authored or a separately published UI specification`을 요구한다. 기존 21건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형은 복수 주어 `are derived editorial implementation inferences` (Font evidence `:109`, Capture record `:153`) — 완전형.

착수 실측: 본문 완전형 21 / 원장 21. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:11`은 editorial-marketing / universal-product-system만 이름하고 같은 문단의 yellow-on-accent-not-semantic-palette를 빠뜨렸다. Scope `:13`은 2024 refresh / brand-context만 이름하고 first-party-assign-no-token과 older-snapshot-not-universal을 빠뜨렸다. Semantic `:73`은 키 비병합·local-list unmerge만 이름하고 `:83`의 semantic/error/success/link/global-surface 거부 인과를 빠뜨렸다. Spacing `:87`은 키 비병합만 이름하고 `:89` strongest-local-pattern을 빠뜨렸다(Layout `:272`는 다른 절). Elevation `:97`은 photography attribution만. Motion `:101`은 부재-비승격·five-kind gate만 이름하고 cinematic-imagery 거부를 빠뜨렸다. Font evidence `:109`는 sorting / sole family / declared-only / no-substitute만 이름하고 표의 official-context-not-reusable-asset·specimen-unavailable을 빠뜨렸다. Capture record `:153`은 kind/applicability / collector labels만 이름하고 C4 news-card omit과 unobserved menu open/close not-computed-paint를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(사명·1963·Sant’Agata Bolognese·manifesto brave/unexpected/authentic·“Driving Humans Beyond”·“MODELS”/“OWNERSHIP”/“NEWS”) / 관측 기술(hex·`0px`·LamboType 805·FontFace·selector 측정) / 편집적 해석·인과 판단(토큰 표면 선정, 키 비병합, 역할 거부, kind/applicability, 레지스터 읽기). 세 번째 부류와 원장 정확성만 수정. 토큰 값·컴포넌트 표·상태 applicability·구조는 그대로.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 8건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | yellow-on-accent rather than a general semantic palette는 세 번째 부류. 기존 한정은 editorial-marketing / universal-product-system만. | 기존 완전형에 yellow-on-accent-not-semantic-palette를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:13` — Scope ¶3 | first-party statements assign no interface token, older site snapshot as not a universal product system은 세 번째 부류. 기존 한정은 2024 refresh / brand-context만. | 기존 완전형에 두 판단을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:73` — Semantic color | `:83` "not promoted to semantic, error, success, link, or global-surface tokens because the capture does not establish those roles"는 세 번째 부류. 기존 한정은 페어링·키 비병합·`#917300` off hover·local-list unmerge만. | 기존 완전형에 local-list role-refusal 인과를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:87` — Spacing | `:89` "The strongest observed local pattern is 24px"는 세 번째 부류. `:87`은 YAML 키 비병합만. Layout `:272`는 다른 절이라 인접하지 않다. | 기존 완전형에 strongest-local-pattern rather than a site-wide grid를 접어 넣음. 값 `24px`는 중복하지 않음. 발생 수 +0. |
| 5 | `DESIGN.md:97` — Elevation | "Treat depth beyond the observed no-shadow samples as unresolved"는 세 번째 부류. 기존 한정은 photography attribution만. | 기존 완전형에 treat-depth-beyond-no-shadow as unresolved를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:101` — Motion | "Do not derive a motion scale from cinematic imagery or the corporate narrative"는 세 번째 부류. 기존 한정은 부재-비승격과 five-kind gate만. | 기존 완전형에 cinematic-imagery / corporate-narrative 거부를 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:109` — Font evidence | 표 `:114` official-context-supports-live-family-not-reusable-asset, `:117` specimen-unavailable-unless-licensed는 세 번째 부류. 기존 한정은 sorting / sole family / declared-only / no-substitute만. | 기존 완전형에 두 판단을 접어 넣음. 발생 수 +0. |
| 8 | `DESIGN.md:153` — Capture record | C4 news-card kind+map omit (`:267`), unobserved menu open/close not copied as computed paint (`:220`)는 세 번째 부류. 기존 한정은 kind/applicability / collector labels만. | 기존 완전형에 두 판단을 접어 넣음. 복수 주어 `inferences` 유지. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 21 (그중 `inferences` 2가 접두로 포함됨; 복수 전용 `inferences` 2). `not Lamborghini-authored` 21. `separately published UI specification` 22 (`:43` UI implication 부가 닫힘 1 포함). 완전형 줄 21. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial` P dest **0**). `migration-log.md` mention dest **1**은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 51, 60, 73, 87, 93, 97, 101, 109, 126, 140, 153, 272, 274, 287.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 21=21로 유지하고 행 텍스트를 본문에 맞췄다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | Scope 행 2 | editorial-marketing / universal-product-system만. 본문 `:11`이 이제 yellow-on-accent-not-semantic-palette도 이름한다. | 그 판단을 행에 추가. |
| 10 | Scope 행 3 | 2024 refresh / brand-context만. 본문 `:13`이 이제 first-party-assign-no-token과 older-snapshot-not-universal도 이름한다. | 그 판단을 행에 추가. |
| 11 | Semantic 행 | 페어링·비병합만. 본문 `:73`이 이제 local-list semantic/error/success/link/global-surface 거부를 이름한다. | 그 판단을 행에 추가. |
| 12 | Spacing 행 | 키 비병합만. 본문 `:87`이 이제 strongest-local-pattern도 이름한다. | 그 판단을 행에 추가. |
| 13 | Elevation 행 | photography attribution만. 본문 `:97`이 이제 treat-depth-beyond-no-shadow도 이름한다. | 그 판단을 행에 추가. |
| 14 | Motion 행 | 부재-비승격 / five-kind만. 본문 `:101`이 이제 cinematic-imagery 거부를 이름한다. | 그 판단을 행에 추가. |
| 15 | Font evidence 행 | sorting / sole family / declared-only / no-substitute만. 본문 `:109`이 이제 official-context-not-reusable-asset과 specimen-unavailable을 이름한다. | 그 판단을 행에 추가. |
| 16 | Capture record 행 | kind/applicability / collector labels만. 본문 `:153`이 이제 C4 news-card omit과 menu open/close not-computed-paint를 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **21 = 21** at 140–160 (E1 1:1). `check-limiter-ledger.mjs lamborghini` 본문=21 원장=21.

### E2 / E2a / E2c — 로그 목적지 (4건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 준수 주장은 본문 실재 시에만. 본문 한정 확장 후 dest 표를 `grep -oF | wc -l`로 재실측(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | YAML `tokens.colors` 행 | `#ffc000`만 P dest를 적음. 실측 `#000000` D **4** / P **2** at 132/149. `#969696` D **3** / P **2** at 123/149. `#917300` D **5** / P **1** at 149. `#202020` D **4** / P **1** at 149. `#ffffff` D **8** / P **0**. | 각 hex에 P dest를 출현 수로 적음. `#c4c4c4` P dest **2** at 122 유지. |
| 18 | YAML `menu-link` padding 행 | `16px 0px` DESIGN dest **2**만. 실측 P dest **1** at 159 (B2a ledger mention). | P dest **1** at 159. |
| 19 | §5 Layout 행 | `40px` DESIGN dest **3**만. 실측 P dest **1** at 150 (B2a ledger mention). `80px 0px`는 이미 D **3** / P **1**. | `40px` P dest **1** at 150. |
| 20 | F1 / F2 / SHA | 착수 SHA `6e2f06d3…`; 한정이 이름하는 판단을 F1이 빠뜨림; dual dest 목록이 `#000000`/`#969696`을 빠뜨림. | F1에 `:11`/`:13`/`:73`/`:87`/`:97`/`:101`/`:109`/`:153` 확장을 적음. Dual dest 목록에 `#000000` D4/P2 · `#969696` D3/P2를 추가. DESIGN SHA `cddde149f46a01f686ca3573ee1a10624fe8571f8db677caa45e3a601441adec`. provenance SHA `203ac547438fefb7c6a4123800cf8db4b8d95358124e76c4f42f97bf7c0352b8`. |

Destination SHA DESIGN `6e2f06d38526c3a8f3bca5ec35e7f1d0a45a12fdd4a1027a149ac655a865ad98` → `cddde149f46a01f686ca3573ee1a10624fe8571f8db677caa45e3a601441adec` (한정 확장 후). 줄 수 DESIGN `wc -l` **334** 불변. provenance **171** 불변. migration-log **62** 불변.

E2c: B3 전문 `DESIGN.md` 101 + Named gaps 331. exact phrase `transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest **2**. “공식 출처로 검증될 때까지” 약화 문구 dest 0.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 역할 표, 컴포넌트 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 21개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다 (v12 전제 주석). 복수 주어 `inferences`는 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- `:43` "Every *UI implication* below is the source's own editorial reading, not a separately published UI specification"는 같은 줄의 3-item 완전형이 이미 닫는다. 부가 닫힘을 두 번째 완전형으로 세지 않음.
- A1 키 경로: YAML `tokens.components.<id>.<field>` 전량이 대응 블록에 행으로 있다. `accent-cta` type/bg/fg/radius/padding/font/states/use. `outline-action` type/fg/border/radius/padding/font/states/use. `menu-link` type/fg/radius/padding/font/states/use. `selected-tab` type/fg/border/radius/padding/font/states/use. `news-card` type/fg/radius/padding/use (states 필드 원본 없음). 같은 hex가 다른 블록에 있어 보존으로 읽히는 icook형은 없음.
- 원본 §15에 곡선·duration 값이 없다. Foundations Motion의 부재 진술 + B3 게이트는 kmong형 모범이지 합성 유도가 아니다. 값을 되살리지 않음.
- 원본 type 표 `120px / 400 / 110px`가 Size/Weight/Line height 열로 갈린 채 역할 서술이 남는 것은 T2 관례(kkday). 값 소실로 읽지 않음.
- `focus-visible` 원본 dest 0. 본문은 행에 값을 붙이지 않음 (B1).

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** / candidates **117**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다. 손 대조 발행 카피 9 (`Driving Humans Beyond` D4/P1 · `MODELS` D1/P0 · `OWNERSHIP` D1/P0 · `NEWS` D1/P0 · `brave, unexpected, and authentic` D2/P1 · `leadership position in the unexpected` D1/P0 · `Automobili Lamborghini` D1/P0 · `Lambotype` D1/P2 · `Sant’Agata Bolognese` D1/P0) — 미생존 0. 라틴 발행 카피 손실은 눈에 띄지 않음. §9 예시 프롬프트 `Create a public automotive editorial action…`는 도구 명령이지 발행 카피가 아니다. 고치지 않음.
- **B1.** sibling `web/references/lamborghini/.verification.md` 존재(경로 직접). sibling 전용 값 DESIGN dest **0**: `Ferruccio` 0/0 · `26px` 0/2(P) · `0px 0px 1px` 0/2(P) · `tab-0-16` 0/1(P) · `Ultracompressed` 0/1(P) · `btn-primary` 0/2(P) · `cookie` 0/3(P) · `lam-tag` 0/2(P) · `surface-2` 0/1(P) · `https://www.lamborghini.com/company` 0/1(P) · `https://www.lamborghini.com/en-en/design` 0/1(P) · `clear contours` 0/1(P) · `hexagon` 0/2(P). `portal H2` 원본/sibling/산출 dest **0**. `h3` DESIGN dest **3** — 원본 type 표 `surface-3::h3.card-bt__title-primary` / `home::h3.card-news__title`에 있어 sibling-only 분류 승격이 아니다. `automotive` DESIGN dest **1** at 11은 원본 §1 `editorial automotive marketing`이지 YAML `category` 승격이 아니다. 고치지 않음.
- **D2a.** 원본 §13은 FILL IN placeholder뿐, 가상 biography 없음. 식별(이름·나이·도시) DESIGN/P dest **0**. 동기·소속 분류 재구성 없음. Audience `:28`는 원본 부정 문장만. Primary tasks 3건은 캡처된 마케팅 표면이지 페르소나 동기가 아니다. 원장 Omission ledger는 위치·필드 종류만 (D2a 무식별). 로그 sibling 행이 `Ferruccio`를 dest 0 측정용으로 적는다 — 분모는 DESIGN/P이며 로그 mention이다. 고치지 않음.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. `Ferruccio` DESIGN dest 0 / P dest 0은 DESIGN.md와 provenance.md를 분모로 둔다. `hexagon` DESIGN dest 0 · P dest 2는 부재 단언이 아니라 sibling extras의 원장 보관.
- **hex 귀속 (krafton).** `#ffffff`는 Light fill (`tokens.colors.surface-light`) · Inverse text (`tokens.colors.inverse`) · outline-action Text/Border. `#ffc000`는 Accent action (`tokens.colors.primary` / accent-cta Background) · selected-tab Border. `#202020`는 Foreground · news-card Text. `#000000`는 On accent / accent-cta Text. Semantic `#ffffff` unmerge와 `#000000`≠foreground는 본문 `:73` 한정이 이름하고 원장 Semantic 행에 있다. 컴포넌트 필드 재사용은 YAML 키 경로. 본문 역할은 고치지 않음.
- **열 구조 (wave 40).** 원본 §2는 토큰명 열이 없다. 산출이 `tokens.colors.*` 경로를 역할 행에 붙인 것은 열 삭제가 아니다. 원본 type 표 Size/weight/line height 결합 셀이 Size·Weight·Line height·Tracking으로 갈라졌고 값은 역할 행에 남는다. krds형 토큰명 열 삭제는 없음. 고치지 않음.
- **충돌 처리 일관성 (wave 40 항목 5).** `#ffffff` 두 YAML 키는 병기. `#917300`은 observed variant로 남기고 hover로 올리지 않음. sibling `26px` / `0px 0px 1px`는 원장만. 세 자리가 같은 keep-observed / don't-promote-sibling 정책. 고치지 않음.

AUDIT_DONE fixes=20

## 개정 — 의미 검토 FAIL 1 (2026-08-29)

대상: `docs/design-md-weight/migrated/lamborghini/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정.

### 결함 1 — D1 / 검토항목 4 (근거 없는 플랫폼 귀속)

원본 §8 `:226`은 viewport matrix와 mobile/desktop comparison을 미해상으로 닫는다. sibling에도 desktop/viewport/1440 기록이 없다. 산출 Layout `:274`가 그 미해상 문장 뒤에 `24px` 액션·탭 패딩, `16px 0px` 메뉴 패딩, 타입 사이즈를 desktop-capture measurements로 읽었고, provenance Layout 행과 로그 §8이 같은 읽기를 반복했다.

원본 표기로 되돌림. `:274`는 원본 §8 문장만 남기고 플랫폼을 적지 않음. provenance Layout desktop-capture 행 삭제. 완전형 21→**20** = 원장 21→**20** (140–159). Layout B2a는 `:272` 로컬 측정만.

`grep -oF -e` 실측:

| 문자열 | 원본 | sibling | DESIGN | provenance |
|---|---:|---:|---:|---:|
| `desktop-capture` | 0 | 0 | 0 | 0 |
| `desktop-capture measurements` | 0 | 0 | 0 | 0 |
| `16px 0px` | 2 | 2 | 1 | 0 |
| `mobile/desktop comparison` | 1 | 0 | 2 | 0 |
| `1440` / `1440×900` / `1440x900` | 0 | 0 | 0 | 0 |

`mobile/desktop comparison` DESIGN dest **2**는 원본 §8 문장(`:274`)과 Named gaps(`:330`)이다. 같은 줄에서 desktop으로 뒤집히지 않는다.

갱신한 dest 행:

| 바늘 | 위치 | 옛 dest | 새 dest |
|---|---|---|---|
| `16px 0px` | YAML `menu-link` | DESIGN **2** · P **1** at 159 | DESIGN **1** at 215 · P **0** |
| `desktop-capture` | §8 Responsive Behavior | Adjacent B2a at 274 (D **1** / P **1**) | DESIGN **0** · P **0**; 플랫폼 미귀속 |
| complete-form / ledger | F1 | 21줄 (…272, **274**, 287); P 140–160 | **20**줄 (…272, 287); P 140–159 |
| limiter / SHA | F2 | 본문=21 원장=21; DESIGN `cddde149…adec`; P `203ac547…352b8` | 본문=**20** 원장=**20**; DESIGN `7877ec0ec8b3106c9062bb6633d05a5a7eaa221167ae54e1e1bf97cb054f2ba0`; P `92c4befb993e63f58c0e8dd3ec4711e1af713bc597f0bf13bf497cc65a0db3a0`. `16px 0px` D1/P0 · `desktop-capture` D0/P0 |

`node scripts/check-limiter-ledger.mjs lamborghini` → 본문 **20** / 원장 **20** (140–159) 1:1 OK
`node test-v2/tools/migrate-reference.mjs --brand lamborghini --gate-only` → PASS

FIX_DONE lamborghini fixed=1 logdest=4
