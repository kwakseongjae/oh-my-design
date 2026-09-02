# Omnichat 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/omnichat/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/omnichat/DESIGN.md`
검증 sibling: `web/references/omnichat/.verification.md` — `find web/references/omnichat -type f`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음(getdesign.md 404; refero not listed). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Omnichat-authored or a separately published UI specification`을 요구한다. 기존 29건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 29 / 원장 29. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Elevation `:177` YAML `0px` / Level 2–3 keep-both, Motion `:194` 미귀속 곡선 생략, How-to-read `:269` system-level≠per-control, State-record `:530` destination 비부착은 세 번째 부류인데 인접 완전형이 없거나, 원장이 그 판단을 다른 줄에 붙여 넓었다. How-to-read `:267`은 kind/applicability만 이름하고 YAML/§4 keep-both와 generic `focus`≠`focus-visible`을 한정 문장이 말하지 않았다.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 5건, 발생 수 +4)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:177` — Elevation YAML/Level keep-both | YAML trailing `0px`와 Level 2 / Level 3 표기를 같은 두 그림자로 두고 어느 쪽도 대체하지 않기는 세 번째 부류. `:179`는 whisper-quiet / drama-delegated이고 철학 문단이라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:194` — Motion curve omission | `ease-enter` / `ease-exit` 곡선을 생략하고 역할·use만 남기기는 세 번째 부류. `:183`은 Durations 표 앞이라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:267` — How to read | YAML token-set 표기와 더 긴 §4 본문을 붕괴하지 않기, generic `focus`≠`focus-visible`은 세 번째 부류. 기존 한정은 kind/applicability만. | 기존 완전형에 두 판단을 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |
| 4 | `DESIGN.md:269` — State-record system-level | system-level rather than measured per control은 세 번째 부류. `:267` 한정은 그 앞 문단 끝이라 이 문장을 덮지 않는다. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:530` — State-record non-attachment | destination 컨트롤에 시각 treatment로 붙이지 않기(역할이 이미 해당할 때 제외)는 세 번째 부류. `:515`는 표 앞이라 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33, `not Omnichat-authored or a separately published UI specification` 33. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 56, 69, 86, 144, 166, 177, 179, 183, 194, 214, 216, 217, 218, 219, 227, 246, 250, 260, 267, 269, 515, 530, 548, 550, 577, 598.

### E1 — provenance derived 범위 (7건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼거나, 원장이 본문 한정이 말하지 않는 판단을 다른 줄에 붙이면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | 헤더 / 행 수 | 29 complete / 29 data rows. | **33** / **33**. |
| 7 | Elevation 행 | `:179` 한 행이 keep-both와 philosophy를 함께 적음. 본문 keep-both는 `:177`. | `:177` 행 신설. `:179`는 philosophy만. |
| 8 | Motion 행 | `:183`이 미귀속 cubic 생략과 five-kind gate까지 이름함. 생략 한정은 `:194`. five-kind는 B3(E2c)이지 B2a가 아니다. | `:194` 행 신설. `:183`은 editorial/illustrative 절 한정만. |
| 9 | Capture / applicability 행 | Kind/applicability / not-complete. 본문 `:267`이 이제 YAML/§4 keep-both와 focus≠focus-visible도 이름한다. | 그 판단을 행에 추가. |
| 10 | State-record system-level 행 | 없음. 본문 `:269` 신설. | 행 신설. |
| 11 | State record 행 | `:515` 한 행이 editorial/illustrative와 non-attachment를 함께 적음. non-attachment 한정은 `:530`. | `:530` 행 신설. `:515`는 editorial/illustrative만. |
| 12 | Proof notes `#ffffff` | Canvas / Header Outline fill / Pricing Product Switcher fill / Pricing Plan Card fill로 같은 hex가 갈라지는데 원장이 그 분리를 적지 않음(krafton형, E1). | Proof note 1행. 값은 복원하지 않음 — 원본이 이미 필드를 따로 적는다. |

헤더 / 데이터 행 **29 → 33**.

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | YAML `tokens.colors` `#c5c5c5` | dest **3**. 실측 dest **4** (Input Border · Lead-Form Border · Token-set border · State record). | dest **4**. |
| 14 | §11 `Malaysia, Singapore, Thailand and Indonesia` | dest **2**. 실측 dest **3** (narrative · classification list · Audience). | dest **3**. |
| 15 | §11 `faceless automation` | dest **1**. 실측 dest **2** (refusal sentence · classification list). | dest **2**. |
| 16 | §11 `有溫度的顧客體驗` | dest **3**. 실측 dest **4** (belief quote · classification list · Principle 3 · Forbidden register). | dest **4**. |
| 17 | §15 `motion-standard` | dest 1 each. 실측 `motion-fast` **1** · `motion-standard` **2** · `motion-slow` **1** · `motion-ambient` **1**. | 토큰별 실측. |
| 18 | Deviations / F1 B2a 계수 | DESIGN 29 · inventory 29행. | **33** · inventory **33**. |
| 19 | §6 Elevation 행 | 목적지 `:179`만. | `:177` keep-both + `:179` philosophy. |
| 20 | §4 Component Stylings 행 | YAML/§4 keep-both를 적었으나 한정 위치를 안 적음. | 한정 at 267. |
| 21 | §14 States 행 | 목적지 `:515`·`:267`만. | `:269` system-level + `:530` non-attachment. |
| 22 | §15 Motion 행 | 목적지 `:183`만. 곡선 생략 한정이 본문에 생긴 뒤에도 로그가 `:194`를 안 적음. | `:194` 추가. |

2차 목적지 재실측(본문 수정 후, mention≠use): `https://www.omnichat.ai/tw/` D **4** / P **11**; `/pricing/` D **1** / P **4**; `/about/` D **2** / P **3**; `blog.omnichat.ai/tw/` D **2** / P **3**; `#006aff` D **21** / P **8**; `webiconlogo.png` D **1** / P **2**. B3 전문은 `DESIGN.md:202`에 다섯 증거 종류 + per-component gate + partial-confirmation exclusion이 실재한다(E2c).

Auditor SHA-256 DESIGN `0ffd2d6f9108b40bb15e2ddf6cbff2ad4755c96b9a09fb3ef172d61c62e08582`. 줄 수 DESIGN **637** (착수와 동일 — 한정은 기존 줄에 접힘). provenance 187→**191**.

## 범위 밖 관찰

- **A5a.** `migrate-reference.mjs --gate-only` coverage `copy-loss` compared **38** / candidates **228**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 발행 카피 전수 보존이 아니다. 손 대조한 발행 zh-TW 라벨·CTA·사명·샘플은 DESIGN dest ≥1. 라틴 발행 카피 손실은 이 감사에서 눈에 띄지 않음. 직접 고치지 않음.
- **A1 키 경로.** 원본 YAML `tokens.components.<id>.<field>` 8레코드(type/bg/fg/border/radius/height/padding/font/states/use, 있는 필드만)는 대응 블록에 행으로 있다. `Token-set use:` 8문자열 dest **1** each. `tokens.colors.*` 24키·`tokens.typography.*` 9역할·spacing/rounded/shadow 경로 dest ≥1. icook형 필드 소실 없음. 복원 없음.
- **B1.** sibling 전용 값·분류는 DESIGN dest **0**: `1440×900`, `704px`, `全方位自動化客服`, `自主代理型 AI`, `價格方案`, `進階行銷商務`, `企業旗艦方案`, `聯絡專員`, `Omnichat Blog 2.0`, `No designs found for 'omnichat'`, `Agentic AI 建立 LINE`, `線上對話商務價格方案`, `rgb(6,199,85)`, `background: transparent`. provenance mention이며 portable 사실이 아니다. `portal H2` dest **0**.
- **D2a.** 이름·도시 문자열 DESIGN/provenance/migration-log dest **0**, 원본 dest **1** each. 동기·소속 분류(`Shopline`, `門市`, `60-store`, `beauty D2C`, `apparel brand`, `this quarter`, `without training`, `open-rate dashboards`) 본문 dest **0**. Primary tasks는 헤더/가격/사례/폼 라벨이지 페르소나 동기가 아니다. 삭제 행은 무식별(`§13 페르소나 3인` + 필드 종류).
- **E2d.** `measures 1440px` DESIGN dest **0** / provenance dest **0**. 로그가 dest 0 / provenance 0이라고 적었고 세 파일 부재를 단언하지 않는다. `cubic-bezier` DESIGN dest **0** / provenance dest **2**(처분 원장). 부재 단언이 자기 자신을 분모에 넣는 행은 없음.
- **충돌 처리.** Header Outline 소스 `#ffffff` vs sibling `transparent`; `聯絡專人` vs sibling `聯絡專員`; 플랜명 소스 `高效客服方案, 基本行銷商務…` vs sibling `進階行銷商務` / `企業旗艦方案` — 세 자리 모두 소스를 본문에 두고 sibling을 provenance에만 적는다. 한쪽으로 고쳐 쓰거나 양쪽 삭제하지 않음. krds형 자리마다 다른 정책은 아님.
- **T2 관례.** YAML `lineHeight: 1.40` 원본 5회 / 산출 4회는 프론트매터+표가 한 표로 접힌 것. 비율 `1.40`은 Type roles 표에 있다. 값 소실로 되살리지 않음.
- **sibling 전용 수치.** `更多成功案例` sibling height `44px`는 원본 §4에 없고 산출에도 없음. 승격하지 않은 것이 맞다.

AUDIT_DONE fixes=22
