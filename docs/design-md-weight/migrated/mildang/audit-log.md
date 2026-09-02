# Milddang 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mildang/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mildang/DESIGN.md`
검증 sibling: `web/references/mildang/.verification.md` — `find web/references/mildang -type f`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 파일별 `grep -oF <패턴> <파일> | wc -l`. `grep -c` 미사용. `1.40`처럼 `.`가 있는 패턴은 `-F`가 아니면 `1440`을 센다.
날짜: 2026-09-02

발행 1차 DS 없음(getdesign.md/mildang SPA shell; refero first result AngelList). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Milddang-authored or a separately published UI specification`을 요구한다. 기존 34건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 34 / 원장 데이터 행 34. 숫자는 맞았으나 Layout `:435`의 §9 히어로 병기 keep-both는 세 번째 부류인데 인접 한정이 없었다. 34는 그 한 문장만큼 과소였다.

## 수정 목록 (15건)

### B2a — 인접 한정 신설 (본문 1건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:435` — Layout hero pairing | "Both the white-on-image / `#111111`-on-white pairing and the white-on-hero observation stay." 는 원본 §9 표기와 라이브 주석 표기를 둘 다 남기는 편집 판단. `:469` 한정은 세 구간·collapsing·touch-target·whitespace만 이름하고, 히어로 병기는 가리키지 않는다. 중간 절(Breakpoints / Touch / Collapsing)이 있어 인접이 아니다. Type-role·CTA font·nav padding keep-both는 같은 줄에 한정이 있다. | 같은 줄 끝에 완전형 한정 신설. 새 줄 아님. 토큰·표·applicability·구조 불변. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not Milddang-authored` 35, `separately published UI specification` 35.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 68, 84, 120, 133, 144, 148, 158, 173, 181, 196, 200, 213, 226, 247, 264, 291, 318, 345, 370, 387, 403, 428, 435, 469, 474, 494, 528.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | `provenance.md` Derived editorial inventory | 착수 원장 34행 = 본문 34. 본문에 한정 1건을 신설하면 원장이 좁아진다(fastcampus형). | 헤더 34→**35**. 행 신설 1 (`Layout hero pairing` `:210`). 데이터 행 179–213. 헤더 `:175` `35 = 35`. 본문 공식 문구는 원장에 반복하지 않음(원장 phrase 0은 mention 부재이지 행 부재가 아님). |

### E2 / E2a / E2c — 로그 목적지 (13건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김. 로그·audit-log에 문자열이 있는 것은 mention이지 본문 use가 아니다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | YAML identity `#00b29d` | 로그 "DESIGN dest 16 at 11/13/35/48/58/88/141/144" + provenance 15/29/83/94/124/130. `grep -oF` DESIGN **17**(16줄; 88이 2회) / provenance **7**. 2차 목적지 본문 컴포넌트 줄과 provenance `:171` A3 점검이 빠짐(fitpet형 축소 목록). | DESIGN 17 occ / 16줄 11/13/35/48/58/88/141/144/237/243/253/258/280/285/377/382. provenance 15/29/83/94/124/130/**171**. |
| 4 | YAML spacing/shape `50%` | dest `36/133/466`. 36은 Magenta 특성(값 없음). 466은 no-shadow 이미지 불릿. | **39/63/126/131/133/467**. occ 7(133이 2회). |
| 5 | YAML colors scan counts | `~14×`와 `×138` dest `94/102`. 94는 magenta ~14×로 맞음. 102는 Slate. `×138`은 Body **101**. | 94 / **101**. |
| 6 | YAML typography family | `sans: Pretendard` dest 185/192 — 그 정확 문자열 DESIGN **0**. `sans-serif` dest 185/193 — 185는 Official product-use, 193은 빈 줄. Family 범위 192–196은 표제·빈 줄을 포함. | `tokens.typography.family.sans` **186/194**. `sans-serif` **181/186/195**. Family **194–196**. |
| 7 | §3 evidence classes | dest 183–189. 183–184는 표 머리. Outside 행은 **190**. | **185–190**. |
| 8 | §5 Layout dest | dest 432–466이 `Base unit: ~4px`·`28px inset`·`9999px`를 담는다고 적음. `Base unit: ~4px`는 **118**. 28px inset는 118/370. 9999px는 Shape 124–133. | Grid+whitespace **433–441**. Spacing **116–120**(28px도 370). Shape **124–133**. `50%` 이미지 **467**. 히어로 한정 **435**. 측정 한정 **469**. |
| 9 | §8 Responsive dest | dest 441–466. 441은 whitespace "Color as structure"(§5). | **443–467** (표 447–449; 50% avatars 467). |
| 10 | Sibling 전사 | dest `77–107`. 전사는 **76–103**. 107은 sibling-only 도입문. | **76–103**. |
| 11 | Sibling-only 목록 | dest `111–122`. `For public education` / `For private education`은 **109–110**. 111은 `163px`. | **109–122**. |
| 12 | HTML comment document.title | 2차 목적지를 DESIGN 223만 적음. Pass 2는 dual이라고 주장. 정확 문자열 `document.title` DESIGN **0**(223은 `document titles`). 제목 값은 223 + provenance **90/91/124**. | DESIGN 223 + provenance 90/91/124 (E2a). |
| 13 | §11 블로그 줄 | Pass 2가 `밀당PT와 스쿨PT를 개발하는 IHFB R&D팀`을 dual로 적었으나 §11 행은 DESIGN만. 실측 DESIGN **2**(9/13) / provenance **2**(100/124). | DESIGN 9/13 + provenance 100/124. |
| 14 | §15 cubic-bezier | "portable body에서 omit" — 곡선 값 세 개 DESIGN **0**은 맞음. 그러나 `cubic-bezier` 단어는 Named gaps **530**에 1회(gap name, 값 아님). | 값 DESIGN 0 / 단어 530 mention / 값 provenance 169. |
| 15 | §12 · Deviations · F1 | 로그 B2a 34=34, inventory 177–212, `wc -w` 7,713을 현재 상태로 남김. | inventory **179–213 (35)**. F1 35줄(435 추가). `B2a 35=35`. `wc -w` **7,745**. worker-close 34는 이관 시점 측정으로 남기고 auditor 35를 병기. |

Destination SHA DESIGN `4d01765d…`(worker-close) → `3057cf08f0ca6744d7ef6c7ddf6375a3f3c99aff39023b622e3631cbe4c51aba`. 줄 수 DESIGN 531 newline / 본문 마지막 Named gaps 불릿 532. 구조 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 DS 없음, v12 전제 주석).
- Scope ¶1 계약 범위 — `:9` 한정이 "Reading those two inspected routes as this contract's token surfaces"를 이미 이름함.
- Scope ¶2 분위기 — `:11` 한정이 calm editorial / product-as-color / deliberately flat을 이름함.
- Scope ¶3 narrative-not-token — `:13` 한정이 그 분류를 가리킴.
- Type roles "never flatten a unitless ratio" / Spacing·Shape 키 경로 분리 — A1 값 보존, 브랜드 해석 아님. `:120`·`:133`·`:200`이 인접.
- Voice samples 괄호 `(mission-framed)` / `(product promise)` / `(what the product is)` — 원본 §10 바이트. 신규 읽기 아님. `:494`가 세 줄을 verbatim sample로 분류.
- `:492` nav/segment "kept as published strings" — 다음 문단 `:494`가 KOR/ESP를 같은 닫힘으로 덮고 Content 닫힘에 인접.
- B3 준수 주장 — 로그가 "B3" 단어를 본문 준수로 적지 않음. `DESIGN.md` 173이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음 (E2c 유지).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/mildang/DESIGN.md` · sibling `.verification.md` — 읽기만.
- 원본에 없는 모션 곡선을 합성하지 않은 것 — Named gaps에 이름만 남김. kmong형 모범. 되돌리지 않음.
- §15 duration 120ms/220ms/320ms가 `:<n>` 역할 서술과 함께 본문에 있는 것 — T2 관례. 값 소실로 읽지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Milddang / 밀당 / I Hate Flying Bugs / IHFB, "High-Quality Education for Equal Opportunity", "High-Quality Personalized…", "AI-based 1:1 Personalized…", "Who we are" / "What we do" / "Newsroom", KOR / ESP, Students / Lecturers / Parents / Ontact Teachers, `밀당PT와 스쿨PT를 개발하는 IHFB R&D팀`, YAML `use`/`font`/`type` 바이트, 오류가 발생했습니다 / 필수.
- **관측 기술** — 라이브 hex·치수·Pretendard·`Primitive type`·unitless `1.40`/`1.50`·`full: 9999`·`box-shadow: none`·`20px 16px`·`30px 0px`.
- **편집적 해석·인과 판단** — 두 라우트를 계약 표면으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, keep-both(히어로 병기 포함), kind/applicability, 보이스 레지스터.

세 번째 부류 중 34곳은 착수 시 인접 완전형이 있었고, Layout `:435` keep-both 1곳은 한정이 없어 그 자리에 붙였다. Scope·Content·Principles 안팎을 같이 보았다.

## A1 키 경로 (컴포넌트 필드)

원본 YAML `tokens.components.<id>.<field>` 8레코드 전 필드를 대응 블록의 **행**으로 대조했다. 값 grep만으로 「어딘가에 있다」고 읽지 않음.

| id | 필드 | 대응 블록 행 |
|---|---|---|
| card-mildang | type/bg/fg/radius/padding/use | Mildang PT Entry Card Primitive type · Background · Text · Radius · Padding · Token-set * |
| card-school | type/bg/fg/radius/padding/use | School PT Entry Card 동형 |
| card-neutral | type/bg/fg/radius/padding/use | Neutral Entry Card 동형 |
| card-tinted | type/bg/fg/radius/use | Tinted-Teal Segment Card (padding YAML 없음) |
| cta-pill | type/bg/fg/radius/font/use | Teal CTA Pill |
| nav-link | type/fg/font/active/use | Top Nav Item |
| badge-teal | type/bg/fg/radius/font/use | Teal Emphasis Label |
| footer-band | type/bg/fg/font/use | Dark Corporate Band |

필드 소실 없음. 복원 없음. 색·타입·spacing·rounded 키 경로(`tokens.colors.*` / `tokens.typography.*` / `tokens.spacing.*` / `tokens.rounded.*` / `tokens.shadow.none`)도 본문에 키로 남아 있다. krds형 토큰명 열 삭제는 이 레퍼런스에 해당 열이 원본에 없다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 35 | 0 | 3 |
| `not Milddang-authored` | 35 | 0 | 4 |
| `separately published UI specification` | 35 | 0 | 3 |
| inventory 데이터 행 | — | 35 | — |
| `#00b29d` | 17 | 7 | 4 |
| `50%` | 7 | 5 | 4 |
| `sans: Pretendard` | 0 | 0 | 1 |
| `tokens.typography.family.sans` | 2 | 1 | 1 |
| `1.40` (`-F`) | 3 | 0 | 1 |
| `loading \| applicable` | 1 | 0 | 1 |
| `For public education` | 0 | 3 | 3 |
| `163px` | 0 | 2 | 3 |
| `AngelList` | 0 | 3 | 2 |
| `cubic-bezier(0.2, 0.6, 0.25, 1)` | 0 | 1 | 1 |
| `cubic-bezier` (단어) | 1 | 5 | 6 |
| `document.title` | 0 | 2 | 3 |
| `김서연` / `이준호` / `박지은` / `대구` / `인천` / `서울` | 0 | 0 | 0 |
| B3 다섯 종류+게이트+부분확인 배제 (`DESIGN.md` 173) | 1 | 0 | 1 |

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다.

토큰·표·applicability·구조·원본 무변경.

DESIGN SHA-256 `3057cf08f0ca6744d7ef6c7ddf6375a3f3c99aff39023b622e3631cbe4c51aba`
provenance SHA-256 `ed6d7a62da088960f6810c2fb16483c8ba73d01dd359b6cdfd81de31ea775a98`
migration-log SHA-256 `97144c1a75d204a9032597683f9a23a9405afa038c16975270167f65bd4fe8b0`

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared **3** / candidates **170** (1.8%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`High-Quality Education for Equal Opportunity` DESIGN 6 · `High-Quality Personalized…` 2 · `AI-based 1:1 Personalized…` 2 · `Who we are` 5 · `What we do` 5 · `Newsroom` 14 · `Students` 9 · `Lecturers` 8 · `Parents` 8 · `Ontact Teachers` 6 · KOR/ESP 각 7 · `I Hate Flying Bugs Inc.` 6 · `밀당PT와 스쿨PT를 개발하는 IHFB R&D팀` 2 · `오류가 발생했습니다` 2 · `필수` 2 · YAML `use` 12종 각 1): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. DESIGN 0인 인용은 YAML token note(프로듀서), §9 에이전트 프롬프트(삭제 처분·값은 본문 재수록), AngelList(Tier-2 miss, 원장), 페르소나 절의 `equal opportunity` 포장(발행 미션 줄은 생존), HTML 주석 줄바꿈 블로그 인용(한 줄 형태는 본문에 있음). 고치지 않음.
- **B1.** sibling 전용 `For public education` / `For private education` / `163px` / `0px 200px 0px 28px` / `font-weight: 600`(KOR/ESP 부착) / fg ×80·×26·×11 / `portal H2`: DESIGN 각 **0**. 본문 `H2·H3`는 원본 §3 역할명(원본 표). sibling 구조 분류("h2다", "h3다")를 사실로 넣은 문장은 없음. **보고만:** `DESIGN.md:148`이 sibling verification file이 transition/animation/duration/easing 관측이 없다고 본문에 적어 모션을 derived로 분류하는 근거로 쓴다. 값은 승격되지 않았고 한정이 붙어 있다. 고치지 않음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger `:167`)은 인원·필드 종류만. 식별자 DESIGN/provenance/log 0. Primary tasks는 표면·컨트롤. 동기 문구(`Values that the plan adapts` / `Distrusts grade-guarantee` / `first-class audience`) DESIGN 0. Audience 그룹은 원본 §11 바이트(students, lecturers, parents, Ontact teachers). 원형 라벨을 처분 행에서 지워 copy-loss를 만든 일은 없음. 고치지 않음.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음. 곡선 값의 부재 단언은 값 문자열을 본문에 다시 심지 않고 provenance Item에만 둔다.
- **A1 / wave 39 hex.** `#ffffff`는 Canvas(페이지 배경)와 On-Primary(틸/블루/다크 위 텍스트)와 컴포넌트 `fg`(카드 텍스트)에 서로 다른 키로 붙는다. 본문 `:84`·`:112`와 원장 colors 행이 두 키 분리를 적는다. 고치지 않음(귀속 분리는 정상; 원장에 적혀 있음).
- **wave 40 열/귀속.** 원본 §2는 CSS 커스텀 프로퍼티 열을 갖지 않는다. 단계 귀속 수식어 삭제는 없음. 충돌 처리는 keep-both로 문서 전체에서 같다(9999 vs 50%, YAML font vs §4 font, `-0.2` vs `-0.2px`). 고치지 않음.

AUDIT_DONE fixes=15
