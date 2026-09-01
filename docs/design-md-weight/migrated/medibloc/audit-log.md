# medibloc 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/medibloc/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/medibloc/DESIGN.md`
검증 sibling: `web/references/medibloc/.verification.md` — `find web/references/medibloc -type f`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 빈 출력은 dest 0(zsh `no matches found` 아님; `find`로 파일 존재 확인 후 계수).
날짜: 2026-09-01

발행 1차 UI 사양 없음(getdesign 0 files; refero silent). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MediBloc-authored or a separately published UI specification`을 요구한다. 기존 35건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 35 / 원장 35. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:157` 「That condition is set by this document, not by MediBloc」는 세 번째 부류인데 완전형이 아니었다. Layout Notable `:388` generous/confident hit area는 인접 완전형이 없었다. Semantic `:87`은 pressed/emphasis·hover/fill만 이름하고 cross-surface confirmation / warmer-softer / default reading grey / long-form / lowest-emphasis를 빠뜨렸다. How-to-read `:227`은 kind/applicability만 이름하고 YAML `#ffffff`↔transparent fill keep-both와 YAML `fg` `#333333`↔§9 title keep-both를 본문 한정이 말하지 않았다(원장은 이미 이름함). Primary tasks `:21` persona-off, Responsive `:398` tap-area 형용사, Governance `:510` curve-omit classing도 한정이 이름하지 않았다.

로그: `https://blog.medibloc.org/` P 45는 homepage 행(실측 46). `Primitive type: \`button\`` dest 3를 표제 231/258/284에 적었으나 문자열은 234/261/287. §9 2차 목적지 `26px Pretendard SemiBold #1c1e1f`는 DESIGN dest **0**(fitpet형) — 실제 본문은 `26px Pretendard SemiBold `#1c1e1f`` dest **3**.

문장 분류: 브랜드 발행 사실(히어로·CTA·§10 인용·창립 서사) / 관측 기술(hex·치수·primitive type) / 편집적 해석·인과 판단(분위기, 과제 선정, 청중 묶기, 원칙·Do/Don't, 역할 수식, 키 분리, B3 게이트 권위, keep-both, generous/confident, tap-area, voice). 세 번째 부류와 원장 정확성만 수정. 토큰 값·컴포넌트 표·상태 applicability·구조는 그대로.

## 수정 목록 (30건)

### B2a — 인접 한정 (본문 7건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:21` — Primary tasks | 「They do not come from the source's persona section」는 세 번째 부류. 기존 한정은 과제 선정만. | 기존 완전형에 persona-off를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:87` — Semantic color | cross-surface action confirmation, warmer/softer than pure black, default reading grey, warmer grey for long-form, lowest-emphasis meta는 세 번째 부류. 기존 한정은 single action / warm counter-accent / hover/fill / pressed/emphasis만. | 기존 완전형에 다섯 읽기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:157` — Motion B3 | 「That condition is set by this document, not by MediBloc」는 세 번째 부류. `:149`는 표 앞 곡선 생략, `:167`은 모션 규칙이라 인접하지 않다. 불완전 닫힘. | 완전형으로 교체(문서가 세운 승격 조건이지 MediBloc-authored motion specification이 아님). 발생 수 +1. B3 다섯 증거 종류·컴포넌트별 게이트·`confirming a single curve` dest 1은 같은 줄에 유지(E2c). |
| 4 | `DESIGN.md:227` — How to read | YAML `#ffffff`↔transparent/white fill keep-both와 YAML feature-card `fg` `#333333`↔§9 title 26px Pretendard SemiBold `#1c1e1f` keep-both는 세 번째 부류. 원장 행은 이미 이름했으나 본문 한정이 kind/applicability만. | 기존 완전형에 두 keep-both를 접어 넣음. 주어를 복수(`inferences` / `they are not`)로 맞춤. 발생 수 +0. |
| 5 | `DESIGN.md:388` — Spacing notable | 「generous 50px」「wide, confident hit area」는 세 번째 부류. `:396`은 whitespace 세 읽기이고 하위절이 달라 인접하지 않다. | 같은 불릿에 완전형 신설. 발생 수 +1. 줄 수 불변. |
| 6 | `DESIGN.md:398` — Responsive | 「a large, confident target」「unmistakable tap area」는 세 번째 부류. 기존 한정은 breakpoints/collapsing/image/target *sizes* as system-level만. | 기존 완전형에 62px/48px tap-area 읽기를 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:510` — Recorded unresolved | 첫 불릿의 untraceable-omit은 세 번째 부류. 기존 한정은 source-opened framing만. | 기존 완전형에 curve-omit classing을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **37**, `not MediBloc-authored` **37**, `separately published UI specification` **37**. 완전형 정규식 37(단수 36 + 복수 `inferences` 1). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(P `derived editorial implementation inference` dest **1**). `migration-log.md` mention dest **2**는 use가 아니다.

한정 줄: 9, 11, 13, 15, 21, 32, 36, 49, 59, 71, 87, 115, 127, 137, 149, 157, 167, 177, 179, 180, 181, 182, 188, 204, 210, 219, 220, 227, 361, 388, 396, 398, 419, 424, 434, 476, 510.

`node scripts/check-limiter-ledger.mjs medibloc` → 본문=37 원장=37 (168–204) 1:1 OK.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | 헤더 / 행 수 | 35 complete / 35 data rows. | **37** / **37**. |
| 9 | Primary tasks 행 | 과제 선정만. 본문 `:21`이 이제 persona-off도 이름한다. | 그 판단을 행에 추가. |
| 10 | Semantic 행 | pressed/emphasis·hover/fill만. 본문 `:87`이 이제 cross-surface / warmer-softer / default reading / long-form / lowest-emphasis도 이름한다. | 그 판단을 행에 추가. |
| 11 | Motion / B3 gate 행 | 없음. 본문 `:157` 신설. | 행 신설. |
| 12 | Layout Spacing notable 행 | 없음. 본문 `:388` 신설. | 행 신설(whitespace 행 앞, 문서 순서). |
| 13 | Layout Responsive 행 | system-level만. 본문 `:398`이 이제 tap-area 읽기도 이름한다. | 그 판단을 행에 추가. |
| 14 | Governance 행 | framing만. 본문 `:510`이 이제 curve-omit classing도 이름한다. | 그 판단을 행에 추가. |
| 15 | Byte-form notes | `#ffffff` 역할 분리가 원장에 없음(krafton). 본문은 canvas / outlined-action bg / Visit·nav text / feature-card bg로 갈린다. | 원본이 이미 붙인 분리를 원장에 적음. `#131313` surface-dark≠Visit-pill bg≠nav bg, `#0066ff` primary≠outlined/text-link/tag/nav-active도 같이. 본문 역할은 고치지 않음. |

헤더 / 데이터 행 **35 → 37** at 168–204 (E1 1:1).

### A1 키 경로

YAML `tokens.components.<id>.<field>` 6레코드 전 필드가 대응 블록에 **행으로** 있다. 값 grep만으로 「파일 어딘가에 있다」를 쓰지 않았다.

- `button-outline` type/bg/fg/border/radius/padding/height/font/shadow/use → Outlined Action
- `button-pill` type/bg/fg/radius/padding/height/shadow/font/use → Visit Pill
- `button-text` type/fg/radius/padding/height/font/use → Text Link Button (YAML에 bg/border/shadow 없음)
- `card-feature` type/bg/fg/radius/shadow/use → Feature / Product Card (`Token-set font record` 없음 — YAML에 font 없음)
- `nav-link` type/fg/active/font/use → Nav Link
- `badge-info` type/bg/fg/radius/padding/font/use → Light-Blue Info Tag

icook형 hex-elsewhere 소실 없음. 복원 0. §9 title `26px Pretendard SemiBold `#1c1e1f``는 Feature 블록 `:318`과 How-to-read `:227`에 귀속되어 있다(값 소실 아님; 로그가 백틱 없는 문자열을 2차 목적지로 적은 것이 E2).

### E2 / E2a / E2c — 로그 목적지 (15건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 16 | YAML identity 행 | `#0066ff` P dest **12**. 실측 P dest **13**(byte-form 역할 분리 행 추가 후). homepage DESIGN 9/182 + P 14/45/50/53/69는 맞음. | P dest **13**. |
| 17 | YAML components 행 | `Primitive type: \`button\`` dest 3 at 231/258/284. 실측 **234/261/287**(231 등은 표제). `card` 308 → 문자열 `Primitive type: \`card\`` **311**. `tab` 335 → **338**. `badge` 321 → **324**. | 문자열 줄로 고침. 표제는 표제로 병기. |
| 18 | Footer / blog URL 행 | `https://blog.medibloc.org/` P 45/51/53/69. 실측 **46**/51/53/69 (45는 homepage 행). | **46**. |
| 19 | `weavrlog.care` | dest 4 / dest 7 계수는 맞음. P 마지막 줄이 155→**156**. | 줄 9/13×2/182 · P 46/53/68/69/91/111/156. |
| 20 | §5 Layout 행 | qualifier at 395. 실측 whitespace **396**, notable **388**. 범위 380–395는 396 한정을 빠뜨림. | **380–396**; 388/396. |
| 21 | §8 Responsive 행 | qualifier at 397. 실측 **398**. | **398**. |
| 22 | §9 행 | 2차 목적지 `26px Pretendard SemiBold #1c1e1f` at 227/318. 실측 DESIGN dest **0** / P dest **0**(fitpet). 실제 본문은 `26px Pretendard SemiBold `#1c1e1f`` dest **3** at 227×2/318, P dest 1 at 138. | 바늘을 백틱 있는 실측 문자열로. 백틱 없는 형은 dest 0이며 로그 mention≠use. check 줄 **138**. |
| 23 | §12 행 | inventory `provenance.md` 161–201 (35 rows). | **162–204** (37 rows, data 168–204). |
| 24 | §13 행 | Disposition `provenance.md` 133. 실측 **134**. | **134**. |
| 25 | §15 행 | easing roles at 155–157. 실측 표 **151–155**, B3 **157**. | **151–155** / 157. |
| 26 | Pass 1 | complete-form **35** = ledger **35** at 167–201. | **37** = **37** at 168–204. |
| 27 | Uniqueness | 복원 바늘을 백틱 없는 `26px Pretendard SemiBold #1c1e1f`로 적고 dest 0 among 147 = 0이라 함. 그 바늘은 복원 후에도 DESIGN dest **0**. | 실측 바늘 dest 3. 백틱 없는 형은 portable 문자열이 아님. |
| 28 | YAML colors 행 | qualifier at 87이 pressed/emphasis·hover/fill만 이름한다고 적음. 본문이 더 이름함. | 본문이 이름하는 집합으로. |
| 29 | §2 행 | 「qualifier at 87」만. | YAML colors 행과 같은 named set. |
| 30 | F2 재실측 | 본문 수정 후 dest가 바뀐다(lablup). `#ffffff` DESIGN dest 12→**13**(227 keep-both 추가). `#0066ff` DESIGN dest **20** / P dest **13**. `weavrlog.care` DESIGN dest **4** / P dest **7**. | 위에 반영. |

Destination SHA DESIGN `4b745e45e8965c287f433d829e55466141c5be95027400a352965bd103eb9480` → `e2364c87c8b7e04707a6bc7f58fc1f2192bbfcd41080eba8979d0f7307425fae`. provenance `0a6e41534b0df80f8dc82a56d07ed9f5ca61804ca524b4646ec3e324401c835c`. migration-log `9eb703291c72aa04b0a44465f1296162799515b1af89b609626bfcf67729841e`. 줄 수 DESIGN `wc -l` **515** 불변. provenance **201 → 204**. `wc -w` DESIGN **6886**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 35개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구(`This document is an evidence-backed reconstruction` 등)는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 157 (`computed transition properties` dest 2 / `animation name` dest 2 / `reduced-motion behavior` dest 2 / `confirming a single curve` dest **1**). Principles 형태 `:49` dest 1. 준수 주장 유지.
- `loading | applicable` dest **1** at 254. `error | applicable` dest **1** at 255. `success | applicable` dest **1** at 256. `loading | not-applicable` dest **3** at 280/304/355. `Kind: non-interactive` dest **1** at 325.
- `live-extract` DESIGN dest 0 / P dest 2. `components_harvested` DESIGN dest 0 / P dest 2. `FILL IN` dest 0.
- 무출처 커브 3개 DESIGN dest 0 / P dest 0. duration `120ms`/`200ms`/`320ms` DESIGN dest 1 each — T2 관례(역할 서술 + 값 인용). 되살리지 않음.
- `1.2` dest 2 · `1.3` dest 2 · `1.5` dest 6 · `1.6` dest 2. unitless 유지(A1a).
- YAML `use` 6문자열 각 대응 블록 `Token-set use:` dest ≥1.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — MediBloc / 메디블록, Dr.Palette / 닥터팔레트, "Own your health data. It's rightfully yours.", Validator Guide / Delegator Guide / Apply for Token swap / Visit / See more company news / Circulating Supply, 모두가 그리는 클라우드EMR·닥터팔레트 2.0 출시, 닥터팔레트는 웹 기반으로…, 2017 / 고우균 / Allen Ko / 이은솔 / Eunsol Lee, Panacea / MED token / Medipass / 메디패스 / Weavr / 위버케어, YAML use 6문자열, §7 Do/Don't, §12 다섯 원칙 문장, §14 `오류`/`필수`.
- **관측 기술** — `#0066ff`/`#ffffff`/`#131313`/`#1c1e1f`/`#333333` 등 hex, 60px/41px/26px/16px, 4px/7px/28px/9999, `0 10px 20px rgba(0,0,0,0.07)`, Pretendard / Roboto, unitless `1.2`/`1.3`/`1.5`, `Primitive type`, 두 표면 URL.
- **편집적 해석·인과 판단** — 두 페이지를 토큰 표면으로 읽기, engineering-led vs clinical, blue as action, Korean-premium / de-facto hangul product font, dark-hero distinction, atmospheric depth, 서사≠토큰, refusal/embrace as design instruction, 과제 선정·persona-off, 청중 묶기, 특성 묶기, 원칙·Do/Don't, 역할 수식, spacing/shape 키 분리, 곡선 생략, B3 문서 게이트, keep-both, generous/confident hit area, tap-area, voice register, byte-exact 규칙.

세 번째 부류 중 35곳은 착수 시 인접 완전형이 있었고, 그중 5곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 2곳은 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **6** / candidates **172**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다이지 카피 보존이 아니다. 기계가 안 본 166개는 라틴. 손 대조 발행 라틴(히어로, CTA, nav 라벨, Circulating Supply, 사명, 창립자 영문)은 본문 dest ≥1. 발행 한국어(`메디블록` dest 3 · `닥터팔레트` dest 7 · 출시 제목 dest 3 · 기능 카피 dest 1 · `오류`/`필수` dest 2)도 dest ≥1. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음. CJK 손 스윕에서 dest 0인 6런은 §13 식별자(이름 3 · 도시 3)이며 발행 카피가 아니다.
- **B1.** sibling 전용 `1440×900` / `36.6px` / `22.65px` / `28.8px` / `#892bf5` / `Poppins` / `weavr.care` / `공지사항` / `공식홈페이지` / `개인정보처리방침` / `2021-09-23` / `닥터팔레트는 의료진과 환자 모두를 생각합니다` / `Checking your browser` / `medipass.me` / `위버로그` / `MediBloc Limited - Own your health data` / `-apple-system` / `rgb(57,57,57)` / `rgb(34,34,34)` DESIGN dest **0**. `hero H2` DESIGN dest 0. `H2` DESIGN dest 0 / P dest 2(sibling 전사). `portal H2` dest 0. `H3` DESIGN dest 4는 원본 표 `Article Lead H3`이지 sibling 구조 분류 승격이 아님. `7px`/`13px` DESIGN dest는 spacing/caption 원본 값이지 sibling radius frequency가 아님.
- **D2a.** 식별(`김민재`/`박수현`/`이도현`/`서울`/`경기`/`대전`) DESIGN/P/L dest **0**. 동기(`private-clinic director`/`aging on-premise`/`between rooms`/`re-explaining`/`MED-token holder`) dest **0**. 소속 분류 신조어 dest 0. Audience는 원본 §13 머리글 `Korean clinic operators, patients managing their own records, blockchain participants`만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. 처분 행(`provenance.md:134`, 로그 §13)은 절·인원·필드 종류만. 원형 라벨은 원본에 없어 로그에 적을 대상이 없다.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN/P를 분모로 두고 로그 자신을 넣지 않는다. sibling-only DESIGN dest 0 목록은 분모가 DESIGN. 백틱 없는 `26px Pretendard SemiBold #1c1e1f` DESIGN dest 0 / P dest 0 — 로그 dest 2는 mention이며 문장이 그렇게 적는다.
- **`#ffffff` 역할 분리 (wave 39 krafton).** 같은 hex가 canvas·outlined-action Background·Visit/nav Text·feature-card Background에 붙는다. 원본 §2 + YAML 필드가 이미 갈랐고, 원장 Byte-form에 그 분리를 적음(수정 #15). 고친 것은 원장이지 본문 역할이 아니다.
- **충돌 처리 (wave 40 item 5).** YAML outlined `bg: #ffffff` vs 본문 "transparent fill" / "transparent/white fill" — keep-both. YAML card `fg: #333333` vs §9 title `#1c1e1f` — keep-both. sibling `36.6px` vs 표 36px, sibling outlined `Pretendard-SemiBold` vs YAML `15px / 400` — sibling 미승격. 세 자리 모두 「원본 이중 표기는 병기, sibling 전용은 원장」으로 같다.
- **A1 열/귀속.** 원본 §2는 토큰명 CSS 변수 열이 없다(krds형 열 삭제 해당 없음). Blue Deep `(pressed/emphasis)`, Surface Blue `(hover/fill)` 귀속 수식어는 Foundations 행에 남아 있다.

AUDIT_DONE fixes=30

## 개정 — 의미 검토 FAIL 1 (2026-09-01)

대상: `docs/design-md-weight/migrated/medibloc/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정.

### 결함 1 — A1 / 항목 11 — §3 Notes를 버리고 YAML `use`만 골랐다

원본 §3 표 Notes와 YAML `tokens.typography.*.use`는 같은 역할의 이중 기록이다. Type roles 마지막 열이 Token-set use뿐이라 Notes가 빠졌다. 컴포넌트는 이미 Role(긴 쪽)과 Token-set use(YAML)를 병기하고 있었다.

Type roles에 `§3 notes` 열을 붙이고 원본 Notes를 그대로 넣었다. YAML `use`는 Token-set use와 `:206` 재서술에 dest 2로 유지. `:204` 한정에 YAML/`use`·§3 Notes keep-both를 접어 넣음(완전형 dest 37 불변). §9 `60px Pretendard Bold white headline`은 Type roles `:206`에 착지(Scope가 아니라 받을 슬롯).

`grep -oF -e` 실측 (파일별; 이 절 기록 전 DESIGN/P/L):

| 문자열 | 원본 | sibling | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `Hero headline, white on dark` | 1 | 0 | 1 | 1 | 3 |
| `"Panacea", blue` | 1 | 0 | 1 | 0 | 2 |
| `Blog article title` | 1 | 0 | 1 | 0 | 2 |
| `"MediBloc Wallet", "MediBloc Explorer"` | 1 | 0 | 1 | 0 | 2 |
| `Blog section lead` | 1 | 0 | 1 | 0 | 2 |
| `Secondary body, outlined-button labels` | 1 | 0 | 1 | 0 | 2 |
| `Button / nav labels` | 1 | 0 | 1 | 0 | 2 |
| `Standard reading text` | 2 | 0 | 3 | 0 | 2 |
| `Fine print, meta, timestamps` | 2 | 0 | 3 | 0 | 2 |
| `60px Pretendard Bold white headline` | 1 | 0 | 1 | 1 | 3 |
| `Hero headline, Pretendard Bold cut` | 1 | 0 | 2 | 1 | 3 |
| `Secondary body / outlined-button label` | 1 | 0 | 2 | 0 | 0 |

YAML `use` 9문자열 DESIGN dest **2** 불변. `derived editorial implementation inference` DESIGN dest **37** 불변.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML type-roles | `Hero headline, white on dark` DESIGN / P | 0 / 0 | **1** / **1** |
| YAML type-roles | `"Panacea", blue` DESIGN | 0 | **1** |
| YAML type-roles | `Blog article title` DESIGN | 0 | **1** |
| YAML type-roles | `"MediBloc Wallet", "MediBloc Explorer"` DESIGN | 0 | **1** |
| YAML type-roles | `Blog section lead` DESIGN | 0 | **1** |
| YAML type-roles | `Secondary body, outlined-button labels` DESIGN | 0 | **1** |
| YAML type-roles | `Button / nav labels` DESIGN | 0 | **1** |
| YAML type-roles | `Standard reading text` DESIGN | 2 | **3** |
| YAML type-roles | `Fine print, meta, timestamps` DESIGN | 2 | **3** |
| YAML type-roles | `Hero headline, Pretendard Bold cut` P | 0 | **1** |
| §9 | `60px Pretendard Bold white headline` DESIGN | 0 | **1** |
| uniqueness | 위 Notes 바늘 DESIGN dest 0 잔여 | dest 0 | dest 1 / 3 |

로그 표 행: YAML typography · §3 Typography · §9 · uniqueness. provenance Type roles 원장 행은 keep-both를 이름(E1, 행 수 37 불변). §9 deletion check 목적지를 Type roles Display Hero로 고침.

`node scripts/check-limiter-ledger.mjs medibloc` → 본문 **37** / 원장 **37** (168–204) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs medibloc` → use 15/15 OK.
`node test-v2/tools/migrate-reference.mjs --brand medibloc --gate-only` → PASS.

Destination SHA DESIGN `e2364c87c8b7e04707a6bc7f58fc1f2192bbfcd41080eba8979d0f7307425fae` → `e71aaf65465fa620ca340b2ee4b762b85cc9770a814edb4e5e6a404b18f19ad0`. provenance `0a6e41534b0df80f8dc82a56d07ed9f5ca61804ca524b4646ec3e324401c835c` → `f50a7443d6757b8c0cf7a2e20dbcd71aa800de8d64f406da3415a7ba0f540e68`. migration-log `167196f55cf316e081cc30561996ecd5845632a7efbbbba7c0364332322a229e`. 줄 수 DESIGN `wc -l` **515** 불변. `wc -w` DESIGN **6886 → 6986**.

FIX_DONE medibloc fixed=1 logdest=12
