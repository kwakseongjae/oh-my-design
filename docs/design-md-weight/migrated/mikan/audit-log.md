# mikan 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mikan/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mikan/DESIGN.md`
검증 sibling: `web/references/mikan/.verification.md` — `find web/references/mikan -type f`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 있음(mikan designers가 문서화한 public Figma DesignSystem). B2a 예문 전제(v12)가 깨지므로 toss형을 요구하지 않는다. 기존 26건은 published-spec form(`not mikan-authored or taken from a separately published UI specification, including the Figma DesignSystem described by mikan designers`)으로 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형(복수 `inferences`, Distinctive traits 줄의 em-dash)은 완전형.

착수 실측: 본문 완전형 26 / 원장 26 (`check-limiter-ledger.mjs` 1:1 OK). 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Shape `:112`는 6px/10px control-local과 conservative-ladder만 이름하고, 원본 §5의 XSmall/Medium/XLarge 단계 이름 페어링과 rounded≠spacing 같은 수 비병합을 이름하지 않았다. Family `:175`는 gothic/friendly/Oswald-only만. Capture `:226`은 kind/applicability/Focus≠focus-visible만 이름하고 YAML `active` extra-canonical은 `:228`에만 있었다. Layout `:408`은 philosophy/breakpoint/desktop-capture만 이름하고 `:406` sit-flat consistent-with-flat을 빠뜨렸다. Assets `:203`은 catalog pointer / sit-flat만 이름하고 keyed-to-`mikan.com` / not-`mikan.link`를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(CTA·미션·섹션 라벨·YAML 값) / 관측 기술(hex·geometry·`box-shadow: none`) / 편집적 해석·인과 판단(키 비병합, 단계 이름 페어링, kind/applicability, sit-flat 읽기). 세 번째 부류만 수정 대상.

## 수정 목록 (25건)

### B2a — 인접 한정 (본문 5건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:112` — Shape | YAML 다섯 키 / 6px·10px control-local / conservative-ladder만. 원본 §5 XSmall·Medium·XLarge 이름 페어링과 `rounded.md: 8`≠`spacing.sm: 8` 류는 세 번째 부류인데 한정이 이름하지 않음. | 기존 완전형에 named-ladder pairing + rounded-off-same-number-spacing을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:175` — Family | gothic / friendly / Oswald-numeral-only만. `:172` "the Google CJK web standard"는 세 번째 부류. | 기존 완전형에 source-label-not-published-family-token을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:226` — Capture record | kind/applicability/Focus≠focus-visible만. `:228` YAML nav `active` as extra-canonical은 세 번째 부류이고 한정이 앞이라 이름하지 않음. | 기존 완전형에 YAML `active` extra-canonical을 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:408` — Layout | philosophy / breakpoint / desktop-capture만. `:406` "sit flat (no shadow) … consistent with the flat system"는 세 번째 부류. Assets `:203`은 인접하지 않음. | 기존 완전형에 sit-flat consistent-with-flat을 접어 넣음. 발생 수 +0. `sit flat (no shadow)` DESIGN dest 3→**4**. |
| 5 | `DESIGN.md:203` — Assets | catalog pointer / sit-flat만. `:199` keyed to `mikan.com` / not `mikan.link`는 세 번째 부류. | 기존 완전형에 keyed-to-`mikan.com` rather-than-`mikan.link`를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **26**, `not mikan-authored` **26**, `separately published UI specification` **26**, `including the Figma DesignSystem described by mikan designers` **26**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다. `node scripts/check-limiter-ledger.mjs mikan` → 본문 26 = 원장 26 (183–208).

한정 줄: 9, 11, 13, 15, 21, 30, 34, 47, 57, 70, 87, 104, 108, 112, 123, 127, 147, 157, 175, 179, 195, 203, 226, 408, 431, 467.

### A1 — 키 경로·단계 이름 복원 (1건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 6 | `DESIGN.md:112` — Shape | YAML `sm: 4` / `md: 8` / `xl: 20` 값은 본문에 있었으나 원본 §5 단계 이름 `XSmall (4px)` · `Medium (8px)` · `XLarge (20px)` · `the card workhorse`가 통째로 없음(krds 열/귀속 소실 동형). `Small (6px)`과 `Large (10–12px)`만 남아 단계 이름이 자리마다 달랐다. | 원본 §5 이름 사다리를 YAML 키 옆에 복원. 페어링은 해석이므로 #1 한정과 원장 Shape 행을 같이 갱신. `XSmall (4px)` DESIGN dest **1**. `Medium (8px)` dest **1**. `XLarge` dest **3** / P dest **1**. `the card workhorse` dest **1**. |

YAML `tokens.components.<id>.*` 필드는 착수 시 이미 대응 블록에 행으로 있었다(9레코드, `use`/`type`/`bg`/`fg`/`radius`/`padding`/`height`/`font`/`shadow`/`border`/`active`). icook형 hex-elsewhere는 없음.

### E1 — provenance derived 범위 (7건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | Shape 행 14 | 다섯 키 / 6px·10px / conservative만. 본문 `:112`가 이제 named-ladder pairing과 rounded≠spacing도 이름한다. | 그 판단을 행에 추가. |
| 8 | Family 행 19 | gothic / Oswald-only만. 본문 `:175`가 이제 Google-CJK-label도 이름한다. | 그 판단을 행에 추가. |
| 9 | Assets 행 22 | catalog pointer / sit-flat만. 본문 `:203`이 이제 keyed-to-`mikan.com` / not-`mikan.link`도 이름한다. | 그 판단을 행에 추가. |
| 10 | Capture 행 23 | kind/applicability/Focus만. 본문 `:226`이 이제 YAML `active` extra-canonical도 이름한다. | 그 판단을 행에 추가. |
| 11 | Layout 행 24 | philosophy / breakpoint / heights만. 본문 `:408`이 이제 sit-flat consistent-with-flat도 이름한다. | 그 판단을 행에 추가. |
| 12 | Semantic color 행 11 | "same-hex keys kept separate"만. 본문 `:87`은 `canvas` `#ffffff` ≠ `on-primary` `#ffffff`를 이름한다. | 그 분리를 행에 적음(E1; krafton hex 귀속). |
| 13 | Byte-form notes `#ffffff` | color-token 두 역할만. 같은 hex가 School secondary `bg` · 세 card `bg` · Top Nav background(§4, YAML color 키 없음)에도 붙는다. | 컴포넌트 경로를 원장에 적어 비병합을 실제에 맞춤. `#ffffff` P dest 5→**7**. |

헤더 / 데이터 행 **26 = 26** at 183–208 (E1 1:1). 사이트 수는 그대로, 셀이 본문이 이름하는 판단을 따라갔다.

### E2 / E2a / E2c — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 14 | YAML identity 행 | `https://mikan.link/` DESIGN dest 2 / P dest 3. 실측 D **3** (Scope 2회 + Primary tasks) / P **5**. | dest **3** / **5**. |
| 15 | YAML colors 행 | `#ffffff` P dest 5. E1 원장 확장 후 P dest **7**. | P dest **7**. D dest **14** 유지. |
| 16 | YAML family 행 | `Noto Sans JP` DESIGN dest 11 / P dest 6. Family 한정 확장 후 D **12** / P **7**. | dest **12** / **7**. |
| 17 | YAML rounded 행 | `Pill (320px / full)` DESIGN dest 1. Shape 복원 후 dest **2**. XSmall/Medium/XLarge dest 없음. | Pill dest **2**. `XSmall (4px)` dest **1**. `Medium (8px)` dest **1**. `XLarge` dest **3** / P dest **1**. |
| 18 | YAML shadow 행 | `#e26f00 0px 4px 0px 0px` DESIGN dest 10+. 실측 dest **12** / P dest **2**. | dest **12** / **2**. |
| 19 | nav-link 행 | exact `active: "brand orange #ff4c0a text on active"` DESIGN dest 1 / P dest 1. 실측 D **2** (Capture `:228` + Top Nav `:377`) / P dest **0**. Provenance는 `tokens.components.nav-link.active` P dest **1**. | colon form D dest **2** / P dest **0**. path form P dest **1** (E2a; two writings). |
| 20 | Footer 행 | 두 URL을 "DESIGN + provenance"로만 적음(fitpet형 결합). `https://school.mikan.com/` 실측 D **3** / P **4**. | school URL dest **3** / **4**. homepage 계수는 identity 행. |
| 21 | §8 행 | `sit flat (no shadow)` DESIGN dest 2. Layout 한정 확장 후 D **4** / P **2**. | dest **4** / **2**. |
| 22 | §11 행 | `the design is the mission rendered visually` DESIGN dest 2. `grep -oF`는 대소문자 구분: lowercase dest **1** / capitalized dest **1**. | 두 표기를 분리. lowercase D dest **1** / P dest **2**. capitalized D dest **1** / P dest **0**. |
| 23 | §15 행 | `motion-fast` / `motion-standard` / `motion-slow` dest 1 each. `motion-standard` 실측 dest **2** (표 + fade-in use). | `motion-fast` dest **1** · `motion-standard` dest **2** · `motion-slow` dest **1**. |
| 24 | Deviations 단어 수 | 7,775 words. F3 복원·한정 접기 후 Python `split()` **7,920**. | 7,920. |
| 25 | Hashes | 착수 SHA. | DESIGN `a3844b341a556a023d9d1f9249308c9151e640b9e30ef2b9639ff8cb5ba7ee1c`. provenance `fff18895e3955ff017a31d247d12b13ac5c6dccead432f3d44bb42a6e7fbbc4a`. |

Destination SHA DESIGN `be9b3286…` → `a3844b341a556a023d9d1f9249308c9151e640b9e30ef2b9639ff8cb5ba7ee1c`. provenance `4b6fee0d…` → `fff18895e3955ff017a31d247d12b13ac5c6dccead432f3d44bb42a6e7fbbc4a`. 줄 수 DESIGN `wc -l` **470** 불변(접기는 기존 줄). provenance **226** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 섹션 구조. YAML 9 컴포넌트 필드는 대응 블록에 행으로 있음.
- Principles 머리 26건 published-spec form. 공식 Figma DesignSystem이 있으므로 toss형 부재 주장을 요구하지 않음.
- §15 커브 생략 + 역할·duration 유지. 값이 `provenance.md` Omission ledger에 인용됨(T2 관례; kkday).
- D2a: 삭제 처분 행은 무식별. 이름·나이·도시 DESIGN/P/L dest 0. 페르소나 동기(`flashcards` / `on the train` / `felt like a game`) 본문 dest 0. Audience는 원본 헤더의 publicly observable segments 문구.
- E2d: 부재 단언은 DESIGN dest 0 / P dest 0으로 파일을 한정한다. 그 문장이 세 파일 부재를 단언하며 식별자를 재수록하지 않음.
- B3 전문: `transition properties` dest 1 · `animation name` dest 1 · `reduced-motion behavior` dest 1 + per-component gate. E2c 준수 주장과 본문이 일치.
- sibling 전용 값 `rgb(0, 0, 0)` / `小さな「できた」の` / `View More　→`(전각 공백) / `1000万DL` / `Hero H2` / `School feature H3` — DESIGN dest 0. 구조 분류 H2/H3 본문 승격 없음.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` `compared` 29 / `candidates` 216 (`compared < candidates`). 발행 카피(미션, CTA `採用情報`/`無料トライアルのお申し込み`/`資料請求する`/`資料ダウンロード`/`View More →`, 섹션 라벨 `Service`/`英語アプリmikan`, 파트너십 `真・英文法大全`/`速読速聴・英単語`)는 본문에 있다. latin-copy-audit leftover 1은 로그가 적은 font-stack substring. 고치지 않음.
- **A5 영어 원본 서술(발행 카피 아님).** 원본 dest 1 / 산출 dest 0: `friendlier, more energetic toB tone`; `the standard macOS/Windows Japanese ladder`; `numbered-tutorial rhythm`(Key Characteristics는 `numbered-tutorial cadence`로 dest 1); `What distinguishes mikan from its ed-tech peers`. 발행 라벨이 아니라 원본 편집 서술. 고치지 않음.
- **B1.** `DESIGN.md:127` "the sibling verification file records no transition, animation, duration, or easing observation" — sibling 전용 방법 기록을 본문 사실로 인용. `sibling verification file` DESIGN dest **1** / 원본 dest **0**. 값 hex가 아니라 관측 부재의 증거 종류 승격에 가깝다. 고치지 않음.
- **항목 5 충돌 처리.** corporate `#ff4c0a` flat vs School `#ff7f09` 3D는 문서 전체에서 variant subgroup으로 일관. radius 6px/10px는 control-local로 일관. 자리마다 다른 충돌 정책은 없음.
- **`#ffffff` 귀속.** canvas / on-primary / School secondary bg / card bg / Top Nav bg. 분리는 이제 원장 Byte-form에 있음(#13).

AUDIT_DONE fixes=25
