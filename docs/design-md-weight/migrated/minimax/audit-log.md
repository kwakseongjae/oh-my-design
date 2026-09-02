# MiniMax 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/minimax/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/minimax/DESIGN.md`
검증 sibling: `web/references/minimax/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음 (`ds.name` / `ds.url` / `ds.type` 원본 frontmatter 부재). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MiniMax-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22 (`check-limiter-ledger.mjs` 1:1). 숫자는 맞았으나 양쪽이 함께 좁았다. Semantic `:76`은 역할 비병합만 이름하고 YAML token note를 사실로 둔 분류와 home-light-action text `#181e25` ≠ action-dark fill을 빠뜨렸다. Capture record `:185`는 kind/applicability만 본문 한정이 말하고, 원장이 이미 적은 YAML `states` beside §4는 본문 한정이 말하지 않았다. `:92` catalog `primary_color` `#000000` ≠ M3 dark-action fill, `:96` YAML unitless spacing beside §4/§5 `px`, `:166` control fonts not extra YAML type-role keys는 세 번째 부류인데 인접 완전형이 없었다. 원장 `:406`은 본문의 "named values"를 "unnamed values"로 적어 범위를 틀렸다.

## 문장 분류 (F1)

Portable `DESIGN.md` 전 문장을 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 분류했다. 세 번째 부류이고 인접 완전형이 없거나, 인접 완전형이 그 읽기를 이름하지 않으면 그 자리에서 고쳤다.

- 브랜드 발행 사실: 사명 `Intelligence with Everyone`, 모델명 3종, `Coding & Agentic`, `1M`, `No shortcuts`, about/careers/model-doc 문장, YAML `use` 9종.
- 관측 기술: 네 표면 URL, hex/치수/셀렉터, FontFace 421/43/9, `boxShadow: none`, `1440×900`, §14 zero-interaction 계약, YAML 경로·값.
- 편집적 해석: 계약 표면 선정, 캡처층 성격 읽기, 서사를 토큰 아닌 맥락으로 두기, Primary-task 선정, Audience 묶기, Distinctive-traits/Do/Don't 묶기, hex·키 비병합, YAML/§3 keep-both, B3 승격 게이트, kind/applicability 판정, 1440×900을 브레이크포인트가 아니라 캡처 크기로 읽기, "direct, technical" 레지스터 분류. Governance 보일러플레이트(Authority/priority/Unknowns/Changes)는 Core v2 계약 문구라 MiniMax 파생 한정 대상이 아니다.

기존 완전형 22줄: 9, 11, 13, 19, 29, 33, 42, 51, 60, 76, 106, 119, 123, 129, 137, 154, 158, 174, 185, 356, 361, 406.

## 수정 목록 (18건)

### B2a — 인접 한정 (본문 6건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:76` — Semantic color | YAML token note를 "the facts it names"로 두는 분류는 세 번째 부류. 기존 한정은 hex 페어링·비병합만. | 기존 완전형에 그 분류를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:76` — Semantic color | home-light-action text `#181e25` ≠ action-dark fill은 같은 hex의 서로 다른 역할. 기존 한정은 ink ≠ action-dark만. | 기존 완전형에 그 비병합을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:92` — catalog `primary_color` | identity `#000000` ≠ M3 dark-action fill `#000000`은 세 번째 부류. `:76`은 색 목록 앞이라 인접하지 않고, 그 한정이 이 읽기를 이름하지 않음. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:96` — Spacing keep-both | YAML unitless spacing과 §4/§5 `px`를 서로 바꾸지 않기는 세 번째 부류. `:106`은 두 `12` 비병합 / outline `32px`이고 표 뒤라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:166` — Type roles after table | home-header-action `16px / 400 / MiSans`와 careers-outline `16px / 500 / MiSans`를 extra YAML type-role key로 올리지 않기는 세 번째 부류. `:158`은 표 앞 YAML/§3 keep-both. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:185` — Capture record | YAML `states` beside §4 capitalized writing은 세 번째 부류. 원장은 이미 이름했으나 본문 한정이 말하지 않음. | 기존 완전형에 그 병기를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 25, `not MiniMax-authored or a separately published UI specification` 25, `separately published UI specification` 25. 완전형 줄: 9, 11, 13, 19, 29, 33, 42, 51, 60, 76, 92, 96, 106, 119, 123, 129, 137, 154, 158, 166, 174, 185, 356, 361, 406. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 원장이 본문보다 넓게 적은 `:406` "unnamed"도 FAIL.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | 헤더 / 행 수 | 22 complete / 22 data rows. | **25** / **25**. |
| 8 | Semantic `:76` 행 | 역할·비병합만. 본문 `:76`이 이제 token-note-as-facts와 `#181e25` text≠fill도 이름한다. | 그 판단을 행에 추가. |
| 9 | Semantic `:92` 행 | 없음. 본문 `:92` 신설. | 행 신설. |
| 10 | Spacing `:96` 행 | 없음. 본문 `:96` 신설. | 행 신설. |
| 11 | Type roles `:166` 행 | 없음. 본문 `:166` 신설. | 행 신설. |
| 12 | Governance `:406` 행 | "unnamed values". 본문은 "named values the source already opened". | **named** values. |

헤더 / 데이터 행 **22 → 25** at 236–260 (E1 1:1). `node scripts/check-limiter-ledger.mjs minimax` → 본문 25 = 원장 25.

### E2 / E2a / E2c — 로그 목적지 (6건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 수정 후 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | YAML `tokens.colors` 행 | `tokens.colors.action-dark` DESIGN dest **2**. `:76`에 경로를 한 번 더 적힌 뒤 dest **3**. | dest **3**. |
| 14 | §11 행 | `text, video, speech, image, and music` dest **2**. 실측 dest **3** (Scope 두 문단 + Principles 2항). | dest **3**. |
| 15 | §6 행 | `old purple glow and broad product-card shadow` dest **1**. 실측 dest **3** (`:123` 본문+한정 2회 + Recorded unresolved 1). | dest **3**. |
| 16 | YAML `tokens.components` 행 | §4 `Default only; no interaction event or pseudo-state captured.` dest **6**. 실측 dest **7** (Capture record 1 + 컴포넌트 6). | dest **7**. |
| 17 | B2 / B2a · Gate run · Deviations | DESIGN 22 · inventory 22행 236–257. | **25** · inventory **236–260**. |
| 18 | Hashes | DESIGN `c96c8672…` / provenance `fdc0ebd8…`는 본문·원장 수정 전 값. | DESIGN `35a94c88eff7fa26ce5da2b3c8859bb1549e0e54e081f1a950e120ae2f330c4a` · provenance `76dbe3c14a4901d4ab6778e1d6a0899546971f455977472ab099832c43642809`. |

확인만 하고 숫자가 맞던 행(경로:값 spacing/rounded, YAML `type: button` dest 3, Primitive type dest 6, `components_harvested: true` DESIGN 1 / P 2, `reconciled` DESIGN 0 / P 2, B3 전문 dest 1, `Not captured` dest 0, `loading \| not-applicable` dest 5, `Intelligence with Everyone` dest 3, 셀렉터 이중 목적지)은 그대로 두었다. 준수 주장 B3는 본문 `:129`에 다섯 증거 종류 전문이 실재한다(E2c).

## 범위 밖 관찰

고치지 않음. 조항 이름과 실측만.

- **A5a.** `--gate-only` copy-loss `compared` 0 / `candidates` 173. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 대조 발행 바늘을 로그가 **15**로 적었으나 같은 목록을 세면 **16**(사명·모델 3·능력 라벨·회사 가치·YAML `use` 3·컴포넌트 `use` 6). 발행 문자열 자체는 DESIGN에 생존: `Intelligence with Everyone` DES 3 / `Coding & Agentic` 1 / `MiniMax-M3` 1 / `MiniMax Hailuo 2.3` 1 / `Speech-2.8` 1 / `No shortcuts` 1 / YAML `use` 9종 각 ≥1. 라틴 카피 손실로 보이는 발행 문자열은 없음. `latin-copy-audit` lost 3(`, captured:` YAML 메타 · sibling getdesign 서술 · `omd:add-reference`)은 발행 카피가 아니다. `, captured:` DESIGN dest 0 / provenance dest 0.
- **A1 키 경로.** YAML `tokens.components.<id>.<field>` 6키의 type/bg/fg/radius/padding/font/states/use(outline는 border, bg 없음)가 대응 블록에 **행으로** 있다. 같은 hex가 다른 블록에만 있는 icook형은 없음. 값 복원 없음.
- **A1 구조 필드 추가.** 각 컴포넌트 블록 `Anatomy: label` 6회는 원본 YAML·§4에 0회. 구조라 이 감사가 고치지 않음.
- **B1.** sibling 전용 값·분류의 본문 승격 없음. `score 76` sibling 1 / 원본 0 / DESIGN 0. `5 component types` sibling 1 / 원본 0 / DESIGN 0. `bold dark interface with neon accents.` sibling 1 / DESIGN 0 (provenance Conflict matrix에만). `free commercial-use` sibling 1 / 원본 0 / DESIGN 0. `Poppins` sibling 3 / 원본 0 / DESIGN 0 / provenance 2(Earlier-claims 처분). `model-launch marketing` / `public product tool` / `portal H2` DESIGN dest 0. sibling `21px` line-height DESIGN dest 0. DESIGN의 `28px` 4회는 원본 §4/§5 home-action padding이지 sibling audio line-height가 아니다.
- **D2a.** 삭제 처분 행은 무식별. 이름·나이·도시 문자열 DESIGN/provenance/log dest 0. Audience는 원본 그룹 4종 원문. 원본에 없는 소속 분류 재구성 없음. `motivation` DESIGN dest 1은 Audience의 필드 종류 한정("No name, age, city, motivation, or affiliation classification is carried beyond those source wordings")이지 페르소나 동기 승격이 아니다.
- **E2d.** 부재 단언 행이 그 문자열을 재수록한 채 「세 파일 어디에도 없다」고 하지 않음. provenance `:182`는 sibling-only를 이 원장에 두고 portable 본문으로 승격하지 않았다고 적는다(mention ≠ 세 파일 부재). `:23` `ds.name` 부재는 원본 frontmatter A1c 기록.
- **D1.** `measures 1440px` / `native-client` / `storefront` / `mobile app` / `back-office` DESIGN dest 0 / provenance dest 0 (로그 mention은 use가 아님).
- **웨이브 39 hex 귀속.** `#ffffff`는 canvas · action-on-dark · m3-light-action background로 갈라지고, 그 분리는 `:76` 한정이 이름한다. m3-dark-action text / careers-primary text의 `#ffffff`는 on-dark와 같은 역할. `#000000` catalog vs M3 dark-action fill과 `#181e25` text vs fill은 위 B2a·E1에서 원장에 맞췄다.

AUDIT_DONE fixes=18
