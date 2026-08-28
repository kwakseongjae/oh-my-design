# jkopay 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/jkopay/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/jkopay/DESIGN.md`
검증 sibling: `web/references/jkopay/.verification.md` — `find web/references/jkopay/.verification.md`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `1.5`와 발행 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not JKOPay-authored or a separately published UI specification`을 요구한다. 기존 36건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 36 / 원장 36. 숫자는 맞았으나 Content `:408` voice-sample의 "illustrative, not a complete product-microcopy guide"는 세 번째 부류이고, 같은 절 `:399` 한정은 characterization·register·tone table만 가리킨다. 36은 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (15건)

### B2a — 인접 한정 (본문 1건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:408` — Voice samples | "they are not promoted as a complete product-microcopy guide"는 세 번째 부류. `:399`는 voice characterization / register / tone table만 이름한다. | 같은 행에 완전형 신설. 발생 수 +1. 줄 수 불변. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 37, `not JKOPay-authored` 37, `separately published UI specification` 37. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 56, 69, 84, 106, 110, 125, 135, 139, 177, 179, 180, 181, 182, 188, 200, 202, 210, 221, 265, 290, 314, 356, 367, 374, 376, 399, 408, 433, 435, 469.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus형). 본문 신설을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | `provenance.md` 헤더 | `36` complete / `36` data rows. | `37` / `37`. |
| 3 | inventory | 본문 `:408` voice-sample 한정이 원장에 없음. | 행 37 Content voice-sample 신설. |

헤더 `36` → `37` / 데이터 행 **37** at 135–171 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | YAML identity 행 | `#C9191D` DESIGN dest 12 / P dest 6. `grep -o` DESIGN dest **13** (367에 두 번) / P dest **7** (127에 두 번). | dest 13 at 11/35/58/75/88/228/256/257/339/361/363/367×2 · P dest 7 at 14/73/74/102/127×2/164. |
| 5 | YAML metadata 행 | `prose-derived` P 19/64/175. dest **4** at 19/64×2/176 (64에 두 번; Proof는 행 삽입 후 176). `components_harvested` 21/176 → **21/177**. | dest 4 · harvest 21/177. |
| 6 | YAML family 행 | `微軟正黑體`를 187만. dest **3** at 180/187/430. | dest 3. |
| 7 | YAML typography 행 | `1.5` dest 5 at 194/195/196/200/202. `grep -oF` dest **6** (200에 두 번). | dest 6. |
| 8 | YAML spacing/shape 행 | `tokens.rounded.full: 9999` dest 4 at 122/125/372/472. 372는 `full: 9999`. dest **3** at 122/125/472. | dest 3. `full: 9999` dest 4 · `full 9999` dest 1 at 114를 밝힘. |
| 9 | YAML components 행 | `not in the token set` dest 2. dest **3** at 217×2+337. | dest 3. |
| 10 | Footer 행 | Press and download를 DESIGN 9/24로 묶음. `press.html` DESIGN dest **1** at 9. `download_app.html` dest **2** at 9/24. | press 9 / download 9/24로 분리. |
| 11 | §10 행 | 399·433·435만. 신설 408이 없음. | 408 voice-sample 한정 병기. |
| 12 | §11 행 | official-history P 178. 행 삽입 후 **179**. | **179**. |
| 13 | §12 행 | inventory 133–169 (36). 헤더를 데이터로 센 줄. | **135–171 (37)**. |
| 14 | Sibling 절 | sibling-only 89–97. 마지막 `No designs found for 'jkopay'`는 **98**. | **89–98**. |
| 15 | Deviations · F1 · F2 · SHA | B2a 36=36. `wc -w` 6,249. worker-close SHA만. | 37=37. `wc -w` **6,277**. F1에 408. auditor SHA `bdc7c11fa1ee204725e561553a268078147c9ad1267106d922ca74302039d5c6`. |

Destination SHA `8249137d…` → `bdc7c11fa1ee204725e561553a268078147c9ad1267106d922ca74302039d5c6` (한정 신설 후). 줄 수 DESIGN `wc -l` **475** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §11·§12가 독립 기록한 그룹(Chinese-speaking users / night-market vendors / grandmother·Tuofu Bao / university student·sixty-year-old vendor). 페르소나 이름·동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic 역할 행의 원본 use 문장 — `:84` 포괄절이 특성화를 덮음.
- Voice-sample 영문 괄호 — 원본 §10 병기이지 이관자 gloss가 아님. 435가 gloss-beside를 덮음.
- Brand Tag / Informational Link `Kind: non-interactive` — `:221`이 every interactive-kind verdict와 사유를 이름함. 344·350은 그 절차의 적용.
- B3 준수 주장 — `DESIGN.md` 159가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 471은 재진술).
- 2차 목적지 전수: token-surface standalone DESIGN dest 5 at 9/21/227/253/281 · CSS bundle dest 1 at 9 · press dest 1 at 9 · download dest 2 at 9/24 · `#C9191D` dest 13 · favicon slug dest 1 at 206 · logo SVG dest 1 at 207 · `Kind: non-interactive` dest 2 · `kind: non-interactive` DESIGN 0 · `不止支付` dest 5 · `解鎖生活` dest 6 · `尚無交易記錄` dest 2 · `返回首頁` dest 2 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- A1 키 경로: 원본 `tokens.components` 6레코드의 type/bg/fg/radius/padding/font/use가 대응 블록에 행으로 있음. `card` YAML에 fg 없음(Text 행 불필요). icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/jkopay/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — JKOPay, 街口支付, 2015, Kevin Hu, 街口 / jiē kǒu, 2023, 掃碼行動支付, 不止支付, 解鎖生活, 尚無交易記錄, 返回首頁, 你, Tuofu Bao, 微軟正黑體, PingFang TC, "For me, the value of entrepreneurship lies in whether it makes people's lives more convenient.", YAML use/font 바이트, §7 Do/Don't, §12 다섯 원칙 문장.
- **관측 기술** — hex · PingFang TC · unitless `1.5` · `full: 9999` · `12`/`20px`/`30px` 카드 반지름 · `12px 29px` · 17px / 500 · `rgba(255,255,255,0.80)` · `Primitive type` · token-set keys.
- **편집적 해석·인과 판단** — 검사 홈페이지를 계약 토큰 표면으로 읽기, press/download≠토큰, 값의 표면 귀속, 서사≠토큰, 과제 선정, 청중 그룹 읽기, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화, white/`#FFFFFF` 미분합, spacing/shape 키 분리, elevation keep-both·frosted-as-translucency, motion 귀속·커브 생략, 폰트 증거 class, no-substitution, type-role keep-both, favicon/SVG/photography 읽기, applicability, ghost/nav/card keep-both, state-record 비부착, error keep-both, layout rhythm, breakpoint system-level, voice/forbidden-register, voice-sample illustrative-not-complete-guide, byte-exact, unresolved 프레이밍.

세 번째 부류 중 36곳은 착수 시 인접 완전형이 있었고, 1곳(voice-sample)은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 5파일 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. `1.5`는 `grep -oF`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 37 | 0 | 2 |
| `not JKOPay-authored` | 37 | 1 | 3 |
| `separately published UI specification` | 37 | 1 | 2 |
| inventory 데이터 행 | — | 37 | — |
| `Primitive type: \`button\`` | 2 | 0 | 0 |
| `Kind: non-interactive` | 2 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 1 |
| `#C9191D` | 13 | 7 | 5 |
| `1.5` (`-oF`) | 6 | 0 | 1 |
| `tokens.rounded.full: 9999` | 3 | 0 | 2 |
| `error \| applicable` (`-oF` DESIGN; 로그는 escaped) | 1 | 0 | 1 |
| `loading \| applicable` (`-oF` DESIGN; 로그는 escaped dest 0) | 0 | 0 | 1 |
| `238 KB` | 0 | 2 | 2 |
| `不止支付` (`-oF`) | 5 | 1 | 4 |
| B3 다섯 종류+게이트 (`DESIGN.md` 159) | 1 | 0 | 1 |

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **9** / candidates **139**. 발행 라벨 손 대조에서 손실은 안 보임. latin-copy-audit lost=`No designs found for 'jkopay'.`는 getdesign.md miss page(sibling/tool); DESIGN dest **0** / provenance dest **2**. 발행 카피 아님. 직접 고치지 않음.
- **B1.** sibling 전용 `238 KB` / `v3.3.2` / `#FFFFFF4D` / `#0000001f` / `rgb(201 25 29)` / `街口電子支付股份有限公司` / `Jkopay Co., Ltd.` / `Taipei` DESIGN dest **0**. sibling에 h3·섹션 표제 분류 없음. 구조 관측 침투 없음.
- **D2a.** 삭제 처분 행은 무식별(`§13 페르소나 4인`). 이름(`小美`/`阿伯`/`志豪`/`雅雯`)·나이 표기(`, 28`/`, 55`/`, 22`/`, 42`)·도시(`Taipei office`)·동기(`找錢`/`FamilyMart`/`cashback balance`/`peer transfers`/`merchant dashboard`)·소속 분류(`Urban Commuter`/`Night Market Merchant`/`Student Saver`/`SME Owner`) DESIGN/provenance/migration-log dest **0**. Audience는 원본 그룹만.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 「이 파일에 없다」를 명시적으로 거부함.
- **A1.** 원본 YAML 컴포넌트 6레코드의 type/bg/fg/radius/padding/font/use가 대응 블록에 행으로 있음. `link-blue`는 YAML bg 없음(Background 행 없음이 생략). 필드 소실 없음.

원본 `web/references/jkopay/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=15
