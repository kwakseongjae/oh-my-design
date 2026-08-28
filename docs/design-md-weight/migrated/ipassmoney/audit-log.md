# ipassmoney 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/ipassmoney/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/ipassmoney/DESIGN.md`
검증 sibling: `web/references/ipassmoney/.verification.md` — `find web/references/ipassmoney -type f`와 `test -f web/references/ipassmoney/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not iPASS MONEY-authored or a separately published UI specification`을 요구한다. 기존 36건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 36 / 원장 36. 숫자는 맞았으나 Type roles `:207` 한정이 경로 유지·16.64px/35.2px 컴포넌트 착지만 이름하고 unitless-ratio-stay-ratio(A1a)를 빠뜨렸다. 36은 과소가 아니라 인접 한정의 범위가 좁았다.

## 수정 목록 (12건)

### B2a — 인접 한정 범위 확장 (본문 1건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:207` — Type roles | "They are never converted to a replacement px (A1a)"는 세 번째 부류. 같은 단락의 기존 한정은 여섯 토큰 경로와 16.64px / 35.2px 컴포넌트 착지만 가리킨다. | 기존 완전형에 unitless line-height ratios stay ratios를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 36, `not iPASS MONEY-authored` 36, `separately published UI specification` 36. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 30, 34, 45, 55, 67, 83, 110, 114, 128, 138, 140, 144, 182, 184, 185, 186, 187, 194, 207, 217, 224, 235, 299, 392, 398, 413, 426, 428, 447, 497, 499, 533.

### E1 — provenance derived 범위 (1건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | `provenance.md` Type roles 행 | "Six token-set roles kept on their paths; 16.64px and 35.2px stay on components"만. 본문 `:207`이 이제 unitless-ratio keep도 이름한다. | unitless line-height ratios stay ratios를 행에 추가. |

헤더 `36` / 데이터 행 **36** at 138–173 유지 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | YAML metadata 행 · Footer 행 | `omd`/`verified`/`live-extract`/`extracted`/`harvested`를 provenance **18–21**, 32–35에 있다고 적음. 18은 `verified`. `omd format`은 **17**. freshness 표 데이터는 **31–33**, **Verified:**는 35, 34는 빈 줄. Footer도 Freshness를 32–35로 적음. | **17–21**, **31–33**, **35**. `live-extract` 19 · `components_harvested` 21/178 유지. Footer Freshness **31–33, 35**. |
| 4 | YAML typography 행 | Navigation Active 16.64px를 `DESIGN.md` **319**로 적음. 319는 `Text (active): #10a83b`. 16.64px는 **320**. | **320**. |
| 5 | YAML spacing/shape 행 | `tokens.rounded.full: 100` dest 3 at 128/423/536. 423은 `full: 100`만. 실측 dest **3** = 128×2 + 536. | 128×2/536. 423은 `full: 100` only. |
| 6 | Footer 행 | Conflicts unresolved를 `provenance.md` **39**로 적음. 39는 `## Surfaces and sources`. 문장은 **37**. | **37**. |
| 7 | §5 행 | 12-column grid 등을 `DESIGN.md` **419–424**로 적음. 12-column은 **418**. | **418–424**. |
| 8 | §12 행 | inventory를 `provenance.md` **136–171** (36 rows)로 적음. 136은 표 헤더, 137은 구분선, 데이터는 **138–173**. 171은 행 34. | **138–173** (36 data rows). |
| 9 | §15 행 | ease 역할을 **156–158**, motion rules를 **164–168**로 적음. 156은 `\| Token \| Use \|` 헤더. 역할 3행은 **158–160**. 164는 도입문, 규칙 5항은 **166–170**. | **158–160** · **166–170**. |
| 10 | §10 행 | Voice qualifier를 `DESIGN.md` **446**으로 적음. 446은 빈 줄. 한정은 **447**. | **447**. |
| 11 | F1 | Type-roles A1a 판단을 이름하지 않음. | unitless-ratio keep을 F1에 넣음. |
| 12 | SHA | worker-close `e736a9a8…`만. | auditor `d34d85c83ad2f7260a7788df4ade82c81460eb1dad44ba190940d555f31faa8a`. |

Destination SHA `e736a9a822d8d655647361c9f4f762fc65081f4e120bd54a367647af73137532` → `d34d85c83ad2f7260a7788df4ade82c81460eb1dad44ba190940d555f31faa8a` (한정 범위 확장 후). 줄 수 DESIGN 537 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 세 개만 (`Taiwanese daily commuters, urban households, cross-border travelers`). 페르소나 동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic `:83` — "Where a line also characterizes a value" 포괄절이 아래 역할 해설을 덮음. 예시를 늘리지 않음.
- Motion `:144` — durations / roles / rules / 커브 생략을 이름함. `:172`는 그 한정을 가리키는 포인터.
- B3 준수 주장 — `DESIGN.md` 162가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 535는 재진술).
- identity `logo.type` provenance 15 · favicon slug 16 · `#53b232` DESIGN dest 12 / provenance dest 10 · introduce URL DESIGN dest 4 / provenance dest 5 · standalone `https://www.i-pass.com.tw/` DESIGN dest 2 — 실측과 일치해 유지.
- 2차 목적지 전수: introduce / download / standalone URL · `#53b232` · favicon slug · `logo.type: favicon` · token-note hex · `Kind: non-interactive` dest 1 · `not in the token set` dest 3 · `Here We Go!!` dest 2 · `ID card + bank account = ready.` dest 2 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/ipassmoney/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 一卡通 MONEY, 一卡通票證股份有限公司, iPASS MONEY, iPASS Corporation, 立即下載 一卡通 iPASS MONEY APP, 了解更多, 立即下載, Here We Go!!, 實現生活簡單自由！, 智在生活隨時掌握！, 一卡通 iPASS MONEY APP 之間轉帳免手續費！, 電子支付工具也是票卡管理小幫手, TWQR付款, 儲值簡單又安全, 生活繳費最方便, 轉帳可跨機構最方便, 請準備好身分證及銀行帳戶，註冊後即可開始使用！, 隨時隨地都可以轉帳，簡單快速又安全！, 一卡通跟你一起用行動愛地球, 免手續費, 一卡通綠點, TWQR, PayPay, LINE Pay, ID card + bank account = ready.
- **관측 기술** — hex · stolzl / Noto Sans TC · unitless `1.25`/`1.35`/`1.40`/`1.50` · spacing `4`/`8`/`16`/`24`/`40`/`48`/`64` · `full: 100` / `circle: 200` · `rgba(0, 0, 0, 0.25) 0px 0px 5px 0px` · primitive types · YAML `use`.
- **편집적 해석·인과 판단** — 세 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 과제 선정, 청중 묶기, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화, canvas/on-primary·spacing/shape 키 분리, elevation/motion 게이트와 커브 생략, 폰트 증거 class, type-role 비율 유지, favicon·Noto classing, applicability, whitespace/wayfinding, byte-exact, unresolved 목록.

세 번째 부류 중 36곳은 착수 시 인접 완전형이 있었고, 그중 1곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 36 | 0 | 3 |
| `not iPASS MONEY-authored` | 36 | 1 | 4 |
| `separately published UI specification` | 36 | 2 | 6 |
| inventory 데이터 행 | — | 36 | — |
| `#53b232` | 12 | 10 | 5 |
| `https://www.i-pass.com.tw/Page/iPMIntroduce` | 4 | 5 | 2 |
| standalone `https://www.i-pass.com.tw/` (not `/Page`) | 2 | 4 | 1 |
| `tokens.rounded.full: 100` | 3 | 0 | 2 |
| `loading \| applicable` | 0 | 0 | 0 |
| `Kind: non-interactive` | 1 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 1 |
| `優惠活動` / `認識儲值卡` / `追蹤一卡通社群平台` / `Here We Go！！` | 0 / 0 / 0 / 0 | mention | mention |
| B3 다섯 종류+게이트 (`DESIGN.md` 162) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 17 / candidates 169. 기계가 안 본 차이는 152. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(一卡通 MONEY · 一卡通票證股份有限公司 · iPASS MONEY · iPASS Corporation · 立即下載 一卡通 iPASS MONEY APP · 了解更多 · 立即下載 · Here We Go!! · 實現生活簡單自由！ · 智在生活隨時掌握！ · 一卡通 iPASS MONEY APP 之間轉帳免手續費！ · 電子支付工具也是票卡管理小幫手 · TWQR付款 · 儲值簡單又安全 · 免手續費 · 一卡通綠點 · ID card + bank account = ready. · Limited time offer expires now! · convenience-list · YAML `use` 8종 dest 1): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 고치지 않음.
- **B1.** sibling 전용 `服務介紹` / `優惠活動` / `認識儲值卡` / `追蹤一卡通社群平台` / `Here We Go！！` / `立即下載一卡通 iPASS MONEY APP` / `服務介紹 - iPASS一卡通` / `立即下載 - iPASS一卡通` / `line-height: 24px` / `rgba(244,244,244,0.9)`: DESIGN 0 / provenance mention. `playwright` / `getComputedStyle` DESIGN 0. DESIGN `H3` dest 2는 원본 §2 `H2/H3 level`과 §3 `H2/H3/H4`(원본 86·115)이지 sibling H1 `服務介紹` 분류가 아님. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger `:124`)은 절·인원·필드 종류만. 식별자 `林小美`/`陳大明`/`黃美玲`/`王小凱`/`台北`/`高雄`/`台中`/`新竹` DESIGN/provenance/migration-log 0 as use. 동기 `automatic top-up`/`乘車碼`/`TPASS`/`parking fees`/`supplier transfers`/`automatic recharge`/`university student`/`small business owner`/`frequent traveler`/`daily MRT` DESIGN/provenance/migration-log 0. Audience는 원본 §13 헤더 그룹 세 개만. Primary tasks는 표면 라벨. 소속 분류 발명 없음.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). provenance `:89`는 "does not assert that those strings are absent from this file"로 mention/use를 가른다. "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.
- **A1 키 경로.** 원본 YAML `tokens.components` 8레코드 필드가 산출 대응 블록에 행으로 있다. button-primary `bg`/`fg`/`radius`/`padding`/`font`/`height`/`use`/`type` → Primary Action. button-social 동형 → Social Platform Link. button-cookie(height 없음) → Accent Consent Button. nav-link `fg`/`font`/`use`/`active`/`type` → Nav Link. card-surface / card-white / badge-green / toggle-menu 각 필드 행. 같은 hex가 다른 블록에만 있는 icook형은 없음. 고치지 않음.

AUDIT_DONE fixes=12
