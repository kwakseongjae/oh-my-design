# IGAWorks 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/igaworks/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/igaworks/DESIGN.md`
검증 sibling: `web/references/igaworks/.verification.md` — `find web/references/igaworks -type f`와 `test -f web/references/igaworks/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 웹 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not IGAWorks-authored or a separately published UI specification`을 요구한다. 기존 33건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 33 / 원장 데이터 행 33. 인접 한정이 세 번째 부류를 이름하고 있어 본문 신설·범위 확장은 없음. E1 1:1.

## 수정 목록 (7건)

### B2a — 본문 한정

없음. 한정 줄: 9, 11, 13, 19, 30, 34, 47, 57, 70, 87, 113, 117, 129, 139, 143, 181, 183, 184, 185, 186, 192, 209, 218, 226, 237, 400, 414, 426, 428, 450, 493, 495, 529.

### E1 — provenance derived 범위

없음. 헤더 `33` / 데이터 행 **33** (`provenance.md` 147–179). 본문 33과 1:1.

### E2 / E2a / E2c — 로그 목적지 (7건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 1 | YAML components 행 | `Primitive type: \`button\``을 241/269/295, `input` 321, `card` 343/354, `badge` 364로 적음. 실제 242/267/293 · 318 · 342/354 · 365. `tab` 377은 맞음. | 실측 줄로 교체. `Token-set use:` 251/277/302/327/347/358/372/385는 유지. |
| 2 | §5 Layout 행 | 범위를 420–424로 적고 centered hero를 그 안에 넣음. centered hero는 **419**. `43px`/`41px`를 248/274/300/325/437로 적음. `43px`는 248/274/324/436 dest **5**(436에 2회). `41px`는 299/436 dest **2**. 300·325·437은 해당 문자열 0. | **419–424**. `43px` 248/274/324/436 · `41px` 299/436. |
| 3 | §7 Do 행 | 여덟 규칙을 61–68로 적음. 실제 불릿은 **59–66**. | **59–66**. 한정 57은 유지. |
| 4 | §7 Don't 행 | 여덟 금지를 74–81로 적음. 실제 불릿은 **72–79**. | **72–79**. 한정 70은 유지. |
| 5 | §8 Responsive 행 | 높이를 437, collapsing을 439–443으로 적음. 터치 타깃 문장은 **436**(437은 빈 줄). collapsing 불릿은 **440–443**. | 436 · 440–443. 표 432–434 · 이미지 445 · 한정 428은 유지. |
| 6 | §14 applicability 행 | Subscribe L/E/S를 304–310으로 적음. 304–310은 표 머리~disabled. L/E/S는 **311–313**. 눈썹이 `kind: non-interactive`를 선언한다고 적음 — 그 문자열 DESIGN **0**. 본문은 `Kind: non-interactive` dest 1 at 366. | 311–313. `Kind:`만 dest로 남기고 소문자는 DESIGN 0으로 밝힘. `error \| applicable` dest 2 at 312/336. |
| 7 | F2 | 워커 F2는 B3 161 전문 / 531 재진술·B2a 33=33은 맞으나, 위 여섯 행의 틀린 줄을 현재 상태로 남김. | Auditor 절: dest 교정 목록. worker-close DESIGN SHA `ab4a33d7…` 유지. |

Destination SHA `ab4a33d7db3ad0ab0f54b3c226da3f910e70531d4da3abff87306156e7aafdf2` 불변 (본문 무수정). 줄 수 DESIGN 533 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 웹 UI 사양 없음, v12 전제 주석).
- Scope ¶2 `deliberate scarcity` / `genuinely chromatic` / `direct echo` — 원본 §1 문장. 같은 단락 한정 11이 infrastructure-substrate / restraint / single-font / dashboard-behind-the-marketing을 이름함.
- Motion `:171` — "steadiness, not playfulness"는 원본 §15 규칙. 143이 durations/roles/rules를 덮고, 171은 원격 포인터이지 새 판단이 아님.
- Assets `:222` favicon-pointer — 226이 이름함. 소절 인접.
- Semantic color 행의 "up" direction / workhorse radius — 원본 역할·named-use 문장. 87·123이 특성화를 덮음.
- B3 준수 주장 — `DESIGN.md` 161이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음 (E2c 유지, 531은 재진술).
- 2차 목적지 전수: homepage own-URL DESIGN 9/143/243 · solutions 9/143 · blog 9 · `#1a1d23` DESIGN dest 19 / P dest 20 · favicon slug 222/17 · `아이지에이웍스` 9/13/487 · tokens.note 사실 11/36–41/91–99 · §11 닫는 문장 13 + P 186 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- `1.1` dest 4 · `1.2` dest 4 · `1.3` dest 3 · `1.4` dest 3 · `1.5` dest 5 — `grep -oF` 실측과 일치(203의 `1.13rem`이 `1.1`에 포함). 카운트 주장과 맞으므로 로그만 두고 본문은 안 고침.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/igaworks/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — IGAWorks, 아이지에이웍스, Built on Data. Driven by AI., Solutions by IGAWorks, Data Infrastructure, AI Action & Creative, Media & Network, 01 Data: The AI Moat, 02 The AI-Synthetic Audience, 03 AI Solutions, Built on the Data., 문의하기, 바로가기, 구독, 솔루션 자세히 보기, 매주 뉴스레터로 인사이트를 받아보세요, with 4000+ Global Brands, MobileIndex, iGA, YAML use/font 바이트.
- **관측 기술** — hex · Pretendard Variable · 88px/900 · unitless `1.1`/`1.2`/`1.3`/`1.4`/`1.5` · `full: 9999` · `box-shadow: none` · 43px/41px · `Primitive type`.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 블로그≠토큰, 분위기/서사≠토큰, 과제 선정, 청중 그룹, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화, canvas/on-primary 미분합, spacing/shape 키 분리, elevation/motion class, 폰트 증거 class, type-role keep-both, favicon-pointer·photography, applicability, state-record 비관측, layout airy/tint, breakpoint system-level, voice/forbidden-register, byte-exact, unresolved 프레이밍.

세 번째 부류 33곳은 착수 시 인접 완전형이 있었고, 같은 단락의 판단을 이름하지 않은 한정이 없어 본문을 늘리지 않았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 33 | 0 | 2 |
| `not IGAWorks-authored` | 33 | 1 | 3 |
| `separately published UI specification` | 33 | 1 | 3 |
| inventory 데이터 행 | — | 33 | — |
| `Primitive type: \`button\`` | 3 | 0 | 0 |
| `Kind: non-interactive` | 1 | 0 | 2 |
| `kind: non-interactive` | 0 | 0 | 2 |
| `#1a1d23` | 19 | 20 | 3 |
| `tokens.rounded.full: 9999` | 3 | 0 | 2 |
| `loading \| applicable` | 1 | 0 | 0 |
| `loading \| not-applicable` | 4 | 0 | 0 |
| `43px` | 5 | 4 | 4 |
| `41px` | 2 | 2 | 4 |
| B3 다섯 종류+게이트 (`DESIGN.md` 161) | 1 | 0 | 1 |

로그·audit-log의 숫자 등장은 mention이지 use가 아니다.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 10 / candidates 183 (5.5%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(Built on Data. Driven by AI. DESIGN 7 · Solutions by IGAWorks 4 · Data Infrastructure 5 · AI Action & Creative 3 · Media & Network 3 · 01 Data: The AI Moat 2 · 문의하기 8 · 바로가기 7 · 구독 7 · 솔루션 자세히 보기 2 · 매주 뉴스레터로 인사이트를 받아보세요 3 · with 4000+ Global Brands 3 · MobileIndex 3 · 아이지에이웍스 3 · we are the data layer 2 · look at us 2 · YAML `use` 8종 dest 1): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 고치지 않음.
- **B1.** sibling 전용 `194px` / `Built on Data.Driven by AI.` / `Solutions by IGAWorks→` / `모바일 시장의 흐름을 한눈에` / `1440×900` / `솔루션 | IGAWorks` / `https://www.igaworks.com/favicon.png`: DESIGN 0 / provenance mention. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. `h3`/`H3`/`playwright`/`getComputedStyle` DESIGN 0. three-act 라벨은 서사 문자열로만 있고 H3로 승격되지 않음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger 133)은 절·인원·필드 종류만. 식별자(`정민호`/`Sarah Kim`/`이지현`/`서울`/`Singapore`/`판교`) DESIGN/provenance/migration-log 0. 동기(`measurement tool, not a sales funnel` / `English-forward capability labels` / `zero visual noise`) 0. 소속 분류(`growth marketer` / `performance-marketing lead` / `data analyst at an agency`) 0. Audience는 원본 헤더 그룹 `app marketers, growth teams, market analysts, agency planners`만. Primary tasks는 표면 라벨. 고치지 않음.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). F1 invented-domain dest 0도 DESIGN 분모. "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=7
