# meituan 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/meituan/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/meituan/DESIGN.md`
검증 sibling: `web/references/meituan/.verification.md` — `find`로 경로 직접 확인. 파일 없음 (exit 0, 출력 0행). `ls`/`*`에 안 보이는 dotfile이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Meituan-authored or a separately published UI specification`을 요구한다. 기존 완전형은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: `grep -o` phrase-1 DESIGN dest **53**, phrase-2 dest **51**. `grep -c`는 둘 다 51 — 한 줄에 phrase-1이 두 번인 58·191을 과소 집계한다. 완전형 사이트 51 / 원장 행 51. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:171`의 §6 Animation 이름 ≠ §15 토큰 표는 세 번째 부류인데 `:169` 한정이 duration/easing/생략 커브만 이름한다. Semantic `:91`은 card≠page-ground만 이름하고 같은 `#FFFFFF`의 버튼·검색·서비스타일·딜태그 텍스트 직업을 빠뜨렸다. Merchant `:397`은 omit-kind만 이름하고 subtle-lift ≠ `focus-visible`을 빠뜨렸다. Layout `:472`는 YAML-without-px만 이름하고 `:481` 본문 간격 표 비병합을 빠뜨렸다. Avoid `:71`은 Don’ts·voice-forbidden만 이름하고 HTML 주석 79번을 빠뜨렸다. Content `:532`는 illustrative/영문 병기만 이름하고 byte-exact 중국어를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(사명·슬로건·2010/왕싱/단핑 서사·YAML 값·§표 수치) / 관측 기술(hex·px·Type 행·live fetch 2026-05-19) / 편집적 해석·인과 판단(비병합, 과제 선정, 페르소나 삭제 읽기, 역할 귀속, 승격 게이트). 세 번째 부류만 수정 대상.

## 수정 목록 (24건)

### B2a — 인접 한정 (본문 6건, 발생 수 +1 사이트)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:71` — Avoid | HTML 주석 «approximate hexes ≠ verbatim tokens»(79)는 세 번째 부류. 기존 한정은 Don’ts + voice-forbidden만. | 기존 완전형에 그 금지를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:91` — Semantic color | 같은 `#FFFFFF`가 card fill / button-secondary fill / search-input fill / service-entry fill / deal-tag on-red text이고, 같은 `#222222`가 on-brand / primary text / secondary fg / search fg / deal-tag on-yellow인 것은 세 번째 부류. 기존 한정은 card≠page-ground와 on-brand≠white-on-yellow만. | 기존 완전형에 그 직업 비병합을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:171` — Motion §6≠§15 | «Those §6 names stay unmerged from the §15 token table»는 세 번째 부류. `:169`는 duration 표·easing 이름·생략 커브만. | 완전형 신설(같은 줄에 접음, 줄 번호 불변). 발생 수 +1 사이트. |
| 4 | `DESIGN.md:397` — Merchant Card | subtle lift on hover (web) ≠ Core applicability row ≠ `focus-visible`는 세 번째 부류. 기존 한정은 padding/name/price keep-both와 omit-kind만. | 기존 완전형에 그 판단을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:472` — Layout | 본문 간격 표 ≠ YAML 숫자 스케일은 세 번째 부류. 기존 한정은 YAML-without-px와 density 읽기만. `:481`이 그 비병합을 말하는데 `:472`가 이름하지 않음. | 기존 완전형에 body-spacing-table-unmerged-from-YAML-numbers를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:532` — Content samples | quoted Chinese byte-exact ≠ translated/re-cased는 세 번째 부류. 기존 한정은 illustrative ≠ verbatim와 영문 병기만. | 기존 완전형에 byte-exact를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **54**, `not Meituan-authored or a separately published UI specification` **52**. 완전형 사이트 52. phrase-1이 54인 이유: 58·191이 같은 문장 안에 phrase-1을 한 번 더 품는다. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다 (phrase dest 1 / 1). `migration-log.md` mention dest 2 / 2는 use가 아니다.

한정 줄: 9, 11, 13, 15, 21, 30, 34, 49, 58, 60, 71, 91, 131, 144, 150, 165, 169, **171**, 191, 201, 211, 226, 230, 243, 252, 254, 261, 279, 281, 285, 287, 304, 315, 331, 340, 356, 372, 382, 397, 407, 409, 434, 441, 445, 457, 472, 491, 509, 511, 523, 532, 566.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 웨이브 39 krafton형 같은 hex 다른 역할도 원장에 없으면 E1.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | 헤더 / 행 수 | 51 complete / 51 data rows. `grep -c` 51/51. | **52** / **52**. phrase-1 54 / phrase-2 52를 헤더에 명시. |
| 8 | Audience 행 (30) | group labels만. 본문 `:30`이 merchant/Dianping listing side 읽기도 이름한다. | 그 읽기를 행에 추가. |
| 9 | Avoid 행 (71) | Don’ts + voice-forbidden만. | HTML-comment-approximate-not-verbatim를 행에 추가. |
| 10 | Semantic 행 (91) | card≠page-ground 등. `#FFFFFF`/`#222222` 직업 분리를 빠뜨림. | 그 직업 비병합을 행에 추가. |
| 11 | Freshness pairs | card vs page-ground, on-brand vs primary text만. | `#FFFFFF` 다섯 직업 · `#222222` 다섯 직업을 쌍으로 추가. |
| 12 | Motion 행 | 169 / 191 / 201만. 본문 `:171` 신설. | 행 신설: §6-animation-names-unmerged-from-§15-table (171). |
| 13 | Merchant 행 (397) | omit-kind 등. subtle-lift ≠ focus-visible 없음. | 그 판단을 행에 추가. |
| 14 | Layout (472) · Content (532) | spacing-without-px · illustrative만. | body-spacing unmerge · byte-exact-Chinese를 각 행에 추가. |

헤더 / 데이터 행 **51 → 52**. inventory 줄 참조와 phrase-2 사이트 집합이 같다.

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 한정 수정 후 A5a·F2 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 15 | YAML identity 행 | `#FFC300` 줄 목록이 dest 15 중 60·91×3을 빠뜨림. Homepage를 Scope 9/11로 묶어 full URL dest 1과 `meituan.com` dest 7을 섞음. `favicon` dest를 252만. | `#FFC300` dest **15**. `https://www.meituan.com` DESIGN dest **1** at 9 / P dest **6**. `meituan.com` DESIGN dest **7**. `favicon` DESIGN dest **3** at 252×2/579. |
| 16 | YAML tokens 행 | `Type: input` 365 (실제 362). `Type: badge` 345 (실제 346). Layout spacing 481 (실제 482). lowercase hex를 줄 범위로만 적음. | 실측 dest. `Type: input` **362**. `Type: badge` **346/425**. spacing **131/482**. |
| 17 | §1 URL · Footer 행 | `meituan.com` Scope 9/11, Font 213, Content 525. Font는 215, Content는 527. dest 과소. | dest **7** at 9 / 11×3 / 215 / 281 / 527. |
| 18 | §4 행 | Search `Type: input` 365. Coupon/Deal badge 345/425. | **362** · **346/425**. |
| 19 | §5 · §15 행 | YAML spacing 481. Durations 175–178 (실제 177–180). §6≠§15 한정 없음. `0ms` dest 4는 200/300/450 부분 문자열. | spacing **482**. `200ms`/`300ms`/`450ms` dest 1 each at 178/179/180. `motion-instant` `0ms` at 177. B2a **171**. |
| 20 | §7 · §12 행 | Avoid가 HTML 주석 항목을 안 이름. Principles 사이트를 51로 둠. | Avoid 71이 79를 이름. complete sites **52**. |
| 21 | F1 | `grep -c` 51/51. Motion 171 없음. | `grep -o` phrase-1 **54** / phrase-2 **52** / sites **52** including 171. |
| 22 | F2 hex dest | `#FFFFFF` → 110 (실제 dest 12). `#F5F5F5` → 109/397 (dest 7). `#FF4B10` line 102 (실제 103). `#FFB000` 439 (실제 440). `#FF4D4F` 127/271/378 (실제 126/272/380). 다수 off-by-one. | 파일별 `grep -o` dest로 전면 교체. `#FFFFFF` dest **12**. |
| 23 | F2 Type / Use / focus-visible | `Type: input` 365. Use 301/329/353/371/393. focus-visible 행 311/462. | `Type: input` **362**. Use **302/329/354/370/395/432**. focus-visible 표 행 **310/337/378/415/463**. |
| 24 | F2 부재 단언 | Homepage dual Scope 9/11 (full URL은 9만). Cubic-bezier values dest 0은 유지(실측 0). | full URL dest **1**. `meituan.com` dest **7**. values DESIGN dest **0** / P dest 1 each. |

`grep -oF 'google.com/s2' DESIGN.md` = 0, `prose-derived` DESIGN dest 0, `baemin` DESIGN dest 0, `cubic-bezier(0.4, 0.0, 1, 1)` DESIGN dest 0 — 로그 주장과 맞다. 그 문자열이 로그·원장에 있는 것은 mention이다.

줄 수 DESIGN `wc -l` **581** 불변(한정을 기존 줄에 접음). provenance **150**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 절 구조. 원본 미수정.
- 기존 51개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 58·191의 문장 내부 중복 phrase-1은 같은 문장이 phrase-2로 닫히므로 별도 사이트 아님.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 203. five-kind 연결 구 dest 2 at 203/581. “Official documentation of a single curve or duration is not that gate” dest 1 at 203. Principles 형태 `:49` dest 1. 준수 주장 유지.
- 무출처 커브 4개 DESIGN dest 0 / P dest 1 each. duration 값은 표에 인용된 채 역할만 남김(T2 관례, 웨이브 39 kkday). 되살리지 않음.
- E2d: `prose-derived` / `baemin` / s2 URL 부재 단언의 분모는 portable body. 원장 자신이 그 문자열을 담아도 분모 밖. «세 파일 어디에도 없다» 단언 없음.
- D2a 처분 행은 절·필드 종류·원형 라벨(`everyday urban consumers` / `value-seekers` / `merchants` / 로그의 `美团买菜`)만. 이름·나이·도시를 Item에 옮기지 않음. §13 인물 식별자 DESIGN dest 0 / provenance dest 0 / 로그 dest 0 (로그는 라벨만 처분). 창립지 지명은 §11 Brand Narrative dest 1이며 페르소나 도시 재수록이 아니다.
- `prose-derived` DESIGN dest 0 / `components_harvested` DESIGN dest 0 / `tokens.source: prose-derived` DESIGN dest 0 은 로그 주장과 맞다.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 美团, 吃得更好，生活更好, 立即下单 / 去支付 / 抢购, 2010 / 王兴 / 团购 / 百团大战 / 大众点评 2015 / 美团外卖, YAML use 6문자열, §7 Do/Don't, §12 여섯 원칙 문장, 슬로건 인용.
- **관측 기술** — hex·8px/20px/9999·PingFang SC / 思源黑体 · Type: button/input/card/badge · 2026-05-19 live fetch · duration 0/200/300/450ms.
- **편집적 해석·인과 판단** — catalog homepage ≠ consumer-app token sheet, 노란 verified ≠ approximate 비병합, yellow-because-food, 과제 선정, 페르소나 삭제 읽기, 원칙·Do/Don't, `#FFFFFF`/`#222222` 직업 분리, YAML/본문 keep-both, §6≠§15, applicability 생략, byte-exact.

## 범위 밖 관찰

- **A5a.** sibling `web/references/meituan/.verification.md`는 `find`로 없음. 로그가 적은 gate `copy-loss` coverage compared 23 / candidates 263 (`compared < candidates`). 이 감사는 게이트를 다시 돌리지 않았다. 발행 카피 손 대조에서 라틴 gloss (`Eat better, live better` DESIGN dest 5 / SRC dest 5, `Order now` dest 2/2, `Grab the deal` dest 1/1)는 중국어 옆에 병기되어 소실로 보이지 않는다. `verdict: PASS`는 대조한 바늘에 대한 것이지 카피 전량 보존이 아니다.
- **A1 키 경로.** YAML `tokens.components.*.{type,bg,fg,radius,padding,font,use}`는 대응 블록에 행으로 있다 (icook형 필드 소실 없음). Search YAML `font: "14px/400"` 콤팩트 문자열은 DESIGN dest **0**이고 블록은 `Font: \`14px / 400\``만 둔다. Primary/Coupon/Deal은 YAML 콤팩트 폼을 병기하고 Secondary/Search는 병기하지 않는다(웨이브 40 항목 5, 자리마다 다른 처리). 필드 행 자체는 있어 값을 되살리지 않았다. Coupon YAML `#fff8e0`/`#ff4b10` 소문자는 블록에 없고 Semantic에만 있다 — 대문자 행은 블록에 있다.
- **D2a 소속 분류.** Audience `:30` `merchant/Dianping listing side` — 원본 §13 인트로 라벨은 `merchants`이고, `Dianping listing side`는 페르소나 문장의 소속 재구성에 가깝다 (hubspot `Solutions Partner agencies`형). 원형 라벨 `merchants`는 게이트 copy-loss용으로 남겨야 한다. 식별자 dest 0. 본문 소속 표현은 고치지 않고 보고만 한다. 원장 Audience 행은 본문이 그 읽기를 이름하므로 E1로 실제에 맞췄다.
- **B1 sibling.** sibling 파일 없음. sibling 전용 구조 분류(`portal H2`류)의 본문 승격은 측정 불가(파일 부재).
- **충돌 처리.** `#FFC300` vs `#FFD100`는 문서 전체에서 close-variant, not a second primary. approximate non-yellow는 일관되게 flagged. radius 8 vs 20은 비병합으로 일관. 자리마다 다른 충돌 정책은 없음.
- **같은 hex 다른 역할.** `#FFFFFF` canvas/card fill vs deal-tag on-red text vs button/search fill — 정상이며, 착수 시 원장이 card vs page-ground만 적어 E1로 원장을 실제에 맞췄다 (`#FFFFFF` DESIGN dest 12).

AUDIT_DONE fixes=24

## 개정 개정 (독립 검토 FAIL 2 — D2 Audience · A1 cubic-bezier)

대상만 고침. 토큰 값·컴포넌트 표 구조·상태 applicability·원본 미수정. DESIGN.md `wc -l` **581** 불변.

### FAIL 1 — D2 Audience 소속 승격 제거

Audience `:30`에서 삭제 페르소나 소속의 융합 승격 `merchant/Dianping listing side` / `component and voice records`를 본문에서 뺐다. 원본 §13 머리글 그룹 `everyday urban consumers, value-seekers, merchants`와 Brand Narrative의 value-conscious everyday local-life user만 남긴다. 식별자 `李强` / `Li Qiang` / `Chengdu` DESIGN dest 0 / provenance dest 0. `Meituan/Dianping merchant side` / `manages his listing` DESIGN dest 0 / provenance dest 0.

원장 Audience 행에서 `merchant-Dianping-listing-side-read-from-Brand-Narrative-and-merchant-records`를 지우고 Brand-Narrative group만 이름한다 (E1). 위 범위 밖 관찰 «본문 소속 표현은 고치지 않고 보고만 한다»는 이 개정으로 대체.

### FAIL 2 — A1 §15 cubic-bezier 본문 인용

웨이브 39 kkday T2 관례: 곡선 값을 본문에 **인용한 뒤** 토큰으로 안 올린다. Motion `:182`에 원본 표기 4값을 인용. 템플릿 3개는 `catalog template`로 이름하고, 템플릿에 없는 `ease-fly` `cubic-bezier(0.45, 0, 0.2, 1.2)`는 source-reserved fly로 구분해 같은 "unattributed"로 지우지 않는다. Curve 칸은 토큰 승격이 아니다. duration 0/200/300/450ms 표는 그대로.

실측 (`grep -oF -- | wc -l`; `grep -c` 미사용):

| 문자열 | 원본 | DESIGN | provenance | migration-log |
|---|---:|---:|---:|---:|
| `merchant/Dianping listing side` | 0 | **0** | 0 | 2 (dest 0 기록) |
| `component and voice records` | 0 | **0** | 0 | 2 (dest 0 기록) |
| `cubic-bezier(0.4, 0, 0.2, 1)` | 1 | **1** (`:182`) | 1 (`:110`) | 2 |
| `cubic-bezier(0.0, 0.0, 0.2, 1)` | 1 | **1** (`:182`) | 1 (`:111`) | 2 |
| `cubic-bezier(0.4, 0.0, 1, 1)` | 1 | **1** (`:182`) | 1 (`:112`) | 2 |
| `cubic-bezier(0.45, 0, 0.2, 1.2)` | 1 | **1** (`:182`) | 1 (`:113`) | 2 |
| `catalog template` | 0 | **1** (`:182`) | 0 | 2 |
| `omitted (unattributed cubic-bezier` | 0 | **3** (`:186–188`) | 0 | 2 |
| `200ms` / `300ms` / `450ms` | 1 / 1 / 1 | 1 / 1 / 1 | 1 / 1 / 1 | 2 / 2 / 2 |
| phrase-1 / phrase-2 | — | 54 / 52 | 1 / 1 | 2 / 2 |

B2a 사이트 52 불변. `node scripts/check-limiter-ledger.mjs meituan` → 본문 52 = 원장 52. `node test-v2/tools/migrate-reference.mjs --brand meituan --gate-only` → PASS.

### 갱신한 dest 행

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §13 Personas | `merchant/Dianping listing side` DESIGN / P | (미수록, 본문 1) | **0** / **0** |
| §13 Personas | `component and voice records` DESIGN / P | (미수록, 본문 1) | **0** / **0** |
| §15 Motion | `cubic-bezier(0.4, 0, 0.2, 1)` DESIGN | 0 | **1** at 182 |
| §15 Motion | `cubic-bezier(0.0, 0.0, 0.2, 1)` DESIGN | 0 | **1** at 182 |
| §15 Motion | `cubic-bezier(0.4, 0.0, 1, 1)` DESIGN | 0 | **1** at 182 |
| §15 Motion | `cubic-bezier(0.45, 0, 0.2, 1.2)` DESIGN | 0 | **1** at 182 |
| §15 Motion | `catalog template` DESIGN | 0 | **1** at 182 |
| §15 Motion | `omitted (unattributed cubic-bezier` DESIGN | 4 | **3** at 186–188 |
| F2 cubic | 위 4 cubic-bezier DESIGN | 0 | **1** at 182 each |
| F2 cubic | `catalog template` DESIGN | 미수록 | **1** at 182 |
| F2 cubic | `omitted (unattributed cubic-bezier` DESIGN | 미수록 | **3** |
| F2 persona | `merchant/Dianping listing side` DESIGN / P | 미수록 | **0** / **0** |
| F2 persona | `component and voice records` DESIGN / P | 미수록 | **0** / **0** |

FIX_DONE meituan fixed=2 logdest=13
