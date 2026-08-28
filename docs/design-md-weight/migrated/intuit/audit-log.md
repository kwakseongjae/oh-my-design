# intuit 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/intuit/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/intuit/DESIGN.md`
검증 sibling: `web/references/intuit/.verification.md` — `find`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

QuickBooks Design은 `ds.type: brand` 브랜드 허브이지 Carbon/Pajamas급 1차 UI 사양이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Intuit-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 Scope ¶2 `:11` 한정이 green만 이름하고 authentication-surface orange/blue 제외를 빠뜨렸고, Elevation `:103`은 depth system만 이름하고 card-shadow/overlay 비추론을 빠뜨렸고, Motion `:107`은 five-kind gate만 이름하고 keep-purposeful 지시를 빠뜨렸고, Assets `:159`는 favicon/SSO만 이름하고 사진·일러스트 비대체를 빠뜨렸고, Capture `:170`은 applicability만 이름하고 promoted-because를 빠뜨렸다. 24는 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 5건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | "The single low-frequency orange and blue values … are likewise not promoted"는 세 번째 부류. 같은 단락의 기존 한정은 green만 가리킨다. | 기존 완전형에 authentication-surface orange and blue off the QuickBooks brand set를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:103` — Elevation | "Do not infer a card-shadow scale or overlay recipe"는 세 번째 부류. 기존 한정은 flat treatment / depth system만 가리킨다. | 기존 완전형에 card-shadow scale or overlay recipe non-inference를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:107` — Motion | "Keep implementation motion purposeful and verify … before treating it as QuickBooks guidance"는 세 번째 부류. 기존 한정은 five-kind gate / no token만 가리킨다. | 기존 완전형에 keep-purposeful and verify-against-an-official-surface를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:159` — Assets | "do not replace them with invented brand-color decoration"는 세 번째 부류. 기존 한정은 favicon pointer / SSO licence만 가리킨다. | 기존 완전형에 photography/illustration as first-party imagery, not invented decoration을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:170` — Capture record | "The selector-backed static component below is promoted because … values were measured"는 세 번째 부류. 기존 한정은 role-based applicability만 가리킨다. | 기존 완전형에 promoted-because-measured와 unobserved interaction treatments omitted as values를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not Intuit-authored` 24, `separately published UI specification` 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 54, 63, 76, 90, 99, 103, 107, 123, 132, 136, 159, 170, 174, 244, 249, 276, 310.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 24로 유지하고 내용을 맞췄다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | Scope ¶2 행 | green / house-palette만. 본문 `:11`이 이제 orange/blue 제외도 이름한다. | authentication-surface orange and blue stay off the QuickBooks brand set를 행에 추가. |
| 7 | Elevation 행 | flat treatment / depth system만. 본문 `:103`이 이제 card-shadow/overlay도 이름한다. | not inferring a card-shadow scale or overlay recipe를 행에 추가. |
| 8 | Motion 행 | five-kind / no token만. 본문 `:107`이 이제 keep-purposeful도 이름한다. | keep-purposeful and verify-against-an-official-surface instruction을 행에 추가. |
| 9 | Assets 행 | favicon / SSO만. 본문 `:159`가 이제 사진·일러스트 비대체도 이름한다. | photography/illustration kept as first-party imagery, not invented decoration을 행에 추가. |
| 10 | Capture 행 | applicability verdicts만. 본문 `:170`이 이제 promoted-because도 이름한다. | Promoted because measured / unobserved treatments omitted as values를 행에 추가. |

헤더 `24` / 데이터 행 **24** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 한 줄에 두 번이면 발생 수로 적음.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML identity 행 | homepage provenance를 Identity / Surfaces만 적음. P dest **4** at 13/23/49/57. | standalone DESIGN 9/21 + P dest 4. line 9 typography URL은 접두사 공유로 밝힘. |
| 12 | YAML colors 행 | `#ffffff` dest 3 at 11/35/80 · `#FFFFFF` dest 4 at 11/35/58/80 · `#6b6c72` dest 3 at 11/35/81 · `#6B6C72` dest 4 at 11/35/58/81. 76(Semantic keep-both 한정)을 빠뜨림. | `#ffffff` dest **4** at 11/35/76/80 · `#FFFFFF` dest **5** at 11/35/58/76/80 · `#6b6c72` dest **4** at 11/35/76/81 · `#6B6C72` dest **5** at 11/35/58/76/81. |
| 13 | §1 Visual Theme 행 | qualifier at 11을 keep-on-surface / green-as-narrative만 적음. | orange-and-blue-off-brand를 같은 한정에 추가. |
| 14 | §3 Typography 행 | Assets 152–159와 `:159` 사진 한정을 안 적음. | Assets 152–159 · qualifier at 159. |
| 15 | §4 Component 행 | capture selector `1`을 Use 202 + provenance만 적음. DESIGN dest **3** at 148/201/202. | dest **3** + P 82. 201은 따옴표 없는 `home::[data-omd-capture=1]`. |
| 16 | §6 Elevation / shadow 행 | `box-shadow: none` dest 3 at 40/103/203. `:103` 한정 확장 후 dest **4** (103에 두 번). qualifier는 flat-treatment만. | dest **4**. card-shadow/overlay non-inference를 한정 설명에 추가. |
| 17 | §11 Brand Narrative 행 | Scott Cook / Tom Proulx / Quicken dest 2 at 13/270·271·269. family checkbook dest 1 at 13. 줄 13에 각 이름이 두 번. | dest **3** / **3** / **3** / **2**. |
| 18 | §14 행 | qualifier at 170을 Reason cell만 덮는다고 적음. | promoted-because-measured와 unobserved-treatments-omitted를 한정 설명에 추가. |
| 19 | §15 Motion 행 | five-kind + no-token만. | keep-purposeful / verify-against-official-surface를 한정 설명에 추가. |
| 20 | Deviations · F1 · F2 · SHA | B2a 24=24를 「미한정 없음」으로 읽음. worker-close SHA만. | 24=24는 유지하되 다섯 한정이 좁았다고 적음. auditor SHA `17a8ebdd6daff00cafbc14978c36f208c7849e72e215f8297720623a055421ab`. |

Destination SHA `40327a03…` → `17a8ebdd6daff00cafbc14978c36f208c7849e72e215f8297720623a055421ab` (한정 범위 확장 후). 줄 수 DESIGN `wc -l` **322** (한정은 기존 줄에 접어 넣음, 신설 줄 0).

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 그룹 `small businesses`만. 페르소나 동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic 역할 행의 원본 use 문장 — `:76` 포괄절이 슬롯팅·keep-both·green·orange/blue를 덮음. `:84` green-therefore는 그 한정이 이름한 판단의 재진술.
- Spacing `:90` "not a universal product grid" — 같은 단락 한정이 local measured relationships / not a complete scale을 이미 이름함.
- Type roles `:136` keep-both — 원본 수치 보존. 한정이 `52`/`24`와 body/nav `16`을 덮음.
- B3 준수 주장 — `DESIGN.md` 107이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 319는 재진술).
- 2차 목적지 전수: standalone homepage DESIGN dest 2 at 9/21 · `#0d333f` dest 4 · `logo.type: favicon` dest 1 at 154 · tokens.note 사실 dest 1 at 9 · capture selector dest 3 at 148/201/202 · `#0D333F` dest 8 · `Brand-hub global-navigation tab with role=button` dest 1 at 201 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- A1 키 경로: 원본 `tokens.components.global-nav-tab`의 type/bg/fg/radius/padding/height/font/states/use가 Global Navigation Tab 블록에 행으로 있음. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/intuit/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — QuickBooks, Intuit, QuickBooks Design, Avenir Next for Intuit, Quicken, Scott Cook, Tom Proulx, 1983, family checkbook, green light, Champion small businesses, friendly and understanding, sentence case, customer obsession, integrity without compromise, falls in love with customer problems, See what needs your attention today., Keep your cash flow in view., Review the details before you continue.
- **관측 기술** — hex · `Avenir Next forINTUIT` · 203 visible uses · unitless `52`/`24`/`16`/`40`/`20`/`28`/`0`/`4` · `84px`/`52px`/`28px 0px`/`0px 28px` · `box-shadow: none` · 1440×900 · `Primitive type: button` · `home::[data-omd-capture="1"]`.
- **편집적 해석·인과 판단** — 세 경로를 토큰 표면으로 읽기, 값의 표면 귀속, 허브≠인증 앱 사양, generic bank dashboard / working hub, green·orange/blue 비토큰, 서사≠토큰, 과제 선정, small businesses 청중, 특성 묶기, 원칙·Do/Don't, 팔레트 keep-both, spacing/shape 키 분리, elevation flat·card-shadow 비추론, motion five-kind·keep-purposeful, 폰트 증거 class, no-substitution, type-role keep-both, favicon pointer·사진 비대체, promoted-because, applicability, state-record 비부착, layout 1440×900 not responsive, voice/byte-exact, unresolved 프레이밍.

세 번째 부류 중 24곳은 착수 시 인접 완전형이 있었고, 그중 5곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 5파일 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 24 | 1 | 2 |
| `not Intuit-authored` | 24 | 2 | 2 |
| `separately published UI specification` | 24 | 2 | 2 |
| inventory 데이터 행 | — | 24 | — |
| `Primitive type: \`button\`` | 1 | 0 | 0 |
| `not in the token set` | 2 | 1 | 2 |
| `#0d333f` | 4 | 1 | 3 |
| `#0D333F` | 8 | 2 | 4 |
| `#ffffff` | 4 | 0 | 1 |
| `#FFFFFF` | 5 | 1 | 1 |
| `Scott Cook` | 3 | 3 | 3 |
| `family checkbook` | 2 | 2 | 2 |
| `home::[data-omd-capture` | 3 | 3 | 2 |
| `box-shadow: none` | 4 | 1 | 1 |
| `tokens.shadow.flat` | 2 | 1 | 2 |
| `1440×900` | 6 | 1 | 3 |
| `loading \| applicable` | 0 | 0 | 0 |
| `loading \| not-applicable` | 2 | 0 | 0 |
| `rgb(0, 0, 0)` | 0 | 4 | 1 |
| `ds-tile__heading` | 0 | 2 | 3 |
| B3 다섯 종류+게이트 (`DESIGN.md` 107) | 1 | 0 | 2 |

provenance `derived` 1 / `not Intuit-authored` 2는 원장 색인·Proof notes mention이지 본문 한정이 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** / candidates **76**. 발행 라벨 손 대조(QuickBooks / Intuit / Avenir Next for Intuit / Quicken / Scott Cook / Tom Proulx / Champion small businesses / friendly and understanding / customer obsession / integrity without compromise / See what needs your attention today. 등)에서 손실은 안 보임. 원본 §9 `optimistic, supportive`(원본 1 / DESIGN 0)는 Agent Prompt Guide 설명문이지 발행 카피가 아니라 직접 고치지 않음. `latin-copy-audit` lost=`", captured:"` / `", inspected:"`는 YAML 메타.
- **B1.** sibling 전용 `rgb(0, 0, 0)` / `rgb(5, 83, 147)` / `rgb(13, 51, 63)` / `AvenirNext forINTUIT` / `ds-tile__heading` / `coverage score 71` / `font-weight: 500` / `ProximaNovaBold` DESIGN dest **0**. sibling `h3`/`H3` dest **0**. 구조 관측 침투 없음. Type roles `home::h2`는 원본 §3 표 문구.
- **D2a.** 삭제 처분 행은 무식별(`§13 페르소나` / product-context archetypes). 식별·동기·소속(`Small-business owner` / `Self-employed operator` / `Accounting partner` / `financial work to feel tractable` / `routine financial decisions` / `professional service relationship`) DESIGN/provenance/migration-log dest **0**. Audience는 원본 그룹 `small businesses`만.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 mention≠use를 적고 부재를 단언하지 않음. `cubic-bezier` dest 0은 DESIGN/provenance에 대한 단언이지 로그 자신을 분모에 넣지 않음.
- **A1.** 원본 YAML 컴포넌트 1레코드(`global-nav-tab`)의 type/bg/fg/radius/padding/height/font/states/use가 대응 블록에 행으로 있음. Outlined Action은 YAML에 없어 `not in the token set`. 필드 소실 없음.

원본 `web/references/intuit/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=20
