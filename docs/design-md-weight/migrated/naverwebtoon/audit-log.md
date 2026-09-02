# naverwebtoon 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/naverwebtoon/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/naverwebtoon/DESIGN.md`
검증 sibling: `web/references/naverwebtoon/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches found`는 0이 아니라 미측정 — 파일은 `find`로 먼저 확인했다.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Naver Webtoon-authored or a separately published UI specification`을 요구한다. 기존 21건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 21 / 원장 21. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Header search `:179`, Creator entry `:205`, Tag link `:262`, Pagination `:289`의 keep-path 읽기(표면 hex를 YAML 키에 붙이기, §4-only 메트릭, tag.size `14` 비병합)는 세 번째 부류인데, Semantic color `:72` / Shape `:90` / Type roles `:126` 한정이 다른 절이라 인접하지 않다(fugle Fix 2 · lablup Assets 동형).

토큰 값·컴포넌트 표·상태 applicability·구조는 수정하지 않았다. 네 한정은 기존 줄에 접어 줄 수를 유지했다(`wc -l` DESIGN **361** before/after).

---

## 수정 목록 (19건)

### B2a — 인접 한정 (본문 4건, 발생 수 +4)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:179` — Header search keep-path | `#FFFFFF`를 `tokens.colors.surface`로 붙이고 세 번째 `#ffffff` 키로 읽지 않기, `0px`를 `tokens.rounded.square`에 두기, `14px / 400 Pretendard`를 §4-only로 두기는 세 번째 부류. `:72`/`:90`/`:126`은 다른 절. | 기존 노트 줄 끝에 완전형 접음. 발생 수 +1. 줄 수 불변. |
| 2 | `DESIGN.md:205` — Creator entry keep-path | `#00DC64`를 `tokens.colors.primary`에, `4px`를 `tokens.rounded.compact`에, `12px / 400 Pretendard`를 YAML typography 키가 아닌 §4 writing으로 두는 읽기. 인접 완전형 없음. | 기존 노트 줄 끝에 완전형 접음. 발생 수 +1. |
| 3 | `DESIGN.md:262` — Tag link keep-path | `4px`를 `tokens.rounded.compact`에, `tokens.typography.tag.size` `14`를 이 컨트롤의 14px writing으로, 16px/500/37px를 옆에 두는 읽기. `:126`은 Type roles 절. | 기존 노트 줄 끝에 완전형 접음. 발생 수 +1. |
| 4 | `DESIGN.md:289` — Pagination keep-path | 이 컨트롤의 `14px / 500 Pretendard`를 `tokens.typography.tag.size` `14`와 붙이지 않기. 값 grep만으로는 tag.size가 「어딘가에 있다」로 읽힌다(easywallet/icook 동형). | 기존 노트 줄 끝에 완전형 접음. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **25**, `not Naver Webtoon-authored` **25**, `separately published UI specification` **25**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial implementation inference` provenance dest **1** at 183 — mention). `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 43, 51, 59, 72, 90, 94, 98, 114, 122, 126, 143, 161, **179**, **205**, **262**, **289**, 308, 315, 349.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | 헤더 / 행 수 | 21 complete / 21 data rows. | **25** / **25**. |
| 6 | Header search keep-path 행 | 없음. 본문 `:179` 신설. | 행 19 신설. |
| 7 | Creator entry keep-path 행 | 없음. 본문 `:205` 신설. | 행 20 신설. |
| 8 | Tag link keep-path 행 | 없음. 본문 `:262` 신설. | 행 21 신설. |
| 9 | Pagination keep-path 행 | 없음. 본문 `:289` 신설. | 행 22 신설. |

헤더 / 데이터 행 **21 → 25** at 175–201 (E1 1:1). 본문 줄 번호는 접힘이라 기존 `:308`/`:315`/`:349`가 그대로 맞다.

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 한정 접힘 뒤 A5a·F2 dest를 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | YAML identity 행 Catalog `#00dc64` DESIGN dest **14** | dest 14는 YAML hex `#00dc64` 전량이다. 카탈로그 필드 `primary_color`는 dest **4** at 9/72/74. 값 grep을 필드 보존으로 읽으면 icook/easywallet 동형. | `primary_color` dest **4** / hex `#00dc64` dest **14**로 분리. provenance hex dest **9** at 14/23/121/141/177. |
| 11 | YAML metadata 행 `tokens.source: reconciled` provenance dest 2 at 77/205 | 원장 4행 삽입 후 Proof notes가 밀림. 실측 dest **2** at **77/209**. | 줄 번호 77/209. DESIGN dest **0** 유지. |
| 12 | 같은 행 `components_harvested` provenance dest 3 at 21/77/202 | 실측 dest **3** at **21/77/206**. | 줄 번호 21/77/206. DESIGN dest **0** 유지. |
| 13 | typography 행 `hind` / `NanumBarunGothic` / `NanumSquare` / `Volte` dest at 110/122/141 | 세 줄만 적음. 실측 `hind` dest **4** at 110/122/141/**359**; `NanumBarunGothic` dest **4** 동줄; `Volte` dest **4** 동줄; `NanumSquare` dest **6** at **62**/110/**120**/122/141/359. | 파일별 dest와 줄을 분리해 적음. |
| 14 | type-roles 행 `24 / 24px` dest at 126/130 | 결합형 dest **1** at **130**뿐. 126은 (`24`, `20`, `15`, `14`)이지 `24 / 24px`가 아니다. | dest **1** each at 130/131/132/133. 126의 표기를 구별. |
| 15 | 같은 행 `tokens.typography.tag.size` at 126/135 | dest **4** at 126/135/**262/289**. 두 줄만 적으면 컴포넌트 노트 목적지가 빠진다. | dest **4**. |
| 16 | components 행 `not in the token set` (`DESIGN.md` 168/194) | Primitive type 행은 168/194. 문구 dest **4** at 161/163/168/194. | dest **4**. |
| 17 | Footer 행 getdesign / Refero lookups DESIGN dest **0** | 조회 URL `https://getdesign.md/naverwebtoon` DESIGN dest **0** / provenance dest **1** at 72는 맞다. 그러나 본문 Named gaps가 `getdesign.md` / `styles.refero.design` dest **1** at 361을 갖고 있다. dest 0만 적으면 2차 목적지를 지운 것(fitpet 역형). | URL은 DESIGN dest 0. 라벨은 DESIGN dest 1 at 361 + provenance dest 1 at 72–73 (E2a). |
| 18 | §11 행 provenance.md **204** | 원장 삽입 후 서비스-맥락 노트는 **208**. | 208. |
| 19 | §12 행 inventory 21 / deviations 4,968 words / B2a = 21; A5a padding 「both present in 174/255」 | 본문 한정 뒤 실측: inventory **25** at 175–201; words **5,064**; B2a DESIGN **25**; `0px 10px` dest **2** at 174/255; `0px 65px 0px 10px` dest **1** at 174. | 로그 dest·계수·Pass 1/2·F3 SHA를 재실측에 맞춤. |

E2c: B3 전문 `DESIGN.md` 98 (`computed transition properties, animation name, duration, easing, and reduced-motion behavior` dest **1**). `B3 is held` DESIGN dest **0** / provenance dest **1** at 210 — mention이지 본문 use가 아니다. 준수 주장은 본문 전문이 있으므로 유지.

Destination SHA F3-audit `0a9d09b4b4894a76a64dad5bb80836ddaccfcae8b255686378f0025bb3dd8014` (DESIGN). 줄 수 DESIGN **361** (불변). provenance 206→**210**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 21개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다(v12 전제 주석).
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- Distinctive traits 불릿 `:37`/`:39`, Avoid `:61–64`, Semantic color 불릿 `:75`/`:79`, Family `:120`, Type roles 표 뒤 `:135`, Assets `:140`은 각 절 머리 한정이 같은 소절에서 그 읽기를 이름한다. 표/불릿 아래 재서술은 인접 단위로 봤다.
- `:81` 「No hover color… is promoted because it was not established」는 원본 §2 문장(발행/관측 기술). 새 인과가 아니다.
- `:260` 「not a generalized size scale」은 원본 §4 문장.
- State-applicability Reason 칸은 C 영역이고 `:161`이 이미 덮는다. 표는 수정 금지.
- `loading | not-applicable` dest **5**. `This is not a complete state-coverage claim` dest **1** at 161.
- `tokens.source: reconciled` DESIGN dest **0** / P dest **2**. `components_harvested` DESIGN dest **0** / P dest **3**. `[FILL IN]` DESIGN dest **0**.
- 무출처 커브 없음. duration/easing 원본 부재 — 「was captured」 부정은 원본 §15 문장. 합성하지 않음(wave 39 kmong).
- YAML `tokens.components.content-tab|tag-link|pagination` 각 필드(`type`/`fg`/`bg`/`radius`/`padding`/`font`/`states`/`use`)는 대응 블록에 행으로 있다. icook형 키 경로 소실 없음. 복원하지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — NAVER WEBTOON / 네이버웹툰 / WEBTOON Entertainment / BEST CHALLENGE; Korea's largest webcomic platform; launched in 2005; both creator-audience wordings; both BEST CHALLENGE self-publishing wordings; story-oriented entertainment service; discover, create, and share stories; YAML `use` 7문자열; §7 Do/Don't; §9 bound; §12 세 원칙과 UI implication.
- **관측 기술** — hex·`Pretendard` 1,371·unitless `1.05`/`1.40`/`2.14`·`box-shadow: none`·`interactionCount: 7`·selectors·1440×900 치수·§14 상태 표.
- **편집적 해석·인과 판단** — 세 URL을 토큰 표면으로 읽기, catalog `primary_color`≠두 번째 초록, inherited shell 제외, compact-white-shell 성격, 서사를 토큰 근거가 아니라고 분류, 과제 선정, 청중 묶기, 특성 묶기, 원칙·Do/Don't, 역할 페어링·두 `#ffffff` 키 유지, local radius, elevation-only-record, 다섯 증거 게이트, 폰트 class·canonical-only-here, YAML/§3 keep-both, favicon/licence 경계, applicability, 네 keep-path 부착, 1440×900 읽기, microcopy 가이드가 아님, Named gaps를 원본-unnamed catalog로 읽기.

세 번째 부류 중 21곳은 착수 시 인접 완전형이 있었고, 4곳은 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **2** / candidates **109**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다이지 카피 보존이 아니다. 손 대조 발행 라벨 11종(NAVER WEBTOON / 네이버웹툰 / WEBTOON Entertainment / BEST CHALLENGE / Pretendard / Pretendard Variable / hind / NanumBarunGothic / NanumSquare / Volte / 나눔고딕) DESIGN dest ≥1. latin-copy-audit lost 3건은 padding 메타(`0 10px` / `0 65px 0 10px`)와 YAML 구두점. 발행 라틴 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 `coverage score 91` / `14.04px` / `-0.5px` / `ssl.pstatic.net` / `NanumGothic` / `global storytech` / `28px` / `14px/500/20px` / `surface-2::h3` / `WeekdayMainView__heading` DESIGN dest **0**. `h3` DESIGN dest **0**. 값·섹션 표제 분류 침투 없음. Weekday heading은 원본 §2 색 역할·§5 45px로만 있고 컴포넌트 절로 승격되지 않았다.
- **D2a.** 원본 §13은 인구 페르소나를 만들지 않는다. 이름·나이·도시·전기 문구 DESIGN/P dest 0. 처분 행은 절·필드 종류만(`provenance.md:165`). 원형 라벨 삭제 대상 없음. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. Audience 세 그룹 문자열은 원본 §13과 바이트 일치. Primary tasks는 원본이 기록한 표면/컨트롤이며 `:19`가 Personas에서 오지 않는다고 한정한다.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 `Measured DESIGN.md 0 for those sibling-only strings`는 분모가 portable body. 그 문자열 DESIGN dest 실제 0. 로그 mention은 분모 밖.
- **A1 키 경로.** YAML `tokens.components.content-tab` `{type, fg, font, states, use}` · `tag-link` `{type, bg, fg, radius, padding, font, use}` · `pagination` `{type, fg, font, states, use}` 각 필드가 대응 블록에 행으로 있다. 색 6키·rounded 2키·typography 4역할+family.ui도 해당 절에 경로가 있다. 값만 다른 블록에 있는 소실 없음. 고치지 않음.
- **`#ffffff` 역할 분리 (wave 39 krafton 보고).** 같은 hex가 Surface white(header-search background + 초록 weekday heading 위 텍스트)와 YAML `tokens.colors.on-primary`에 붙는다. 원본 §2가 Surface white 한 불릿에 두 쓰임을 적었고, YAML은 두 키다. Semantic color 한정 `:72`와 원장 행 186이 두 키 유지를 이름한다. 원장에 없는 파생 분리는 아님. 고치지 않음.
- **충돌 처리 일관성 (wave 40 krds).** YAML `conflicts: []`. 한 문서 안에서 자리마다 다른 충돌 처분은 없다.
- **열 구조 (wave 40 krds).** 원본 §3 표 열(Role/Size/Weight/Line height/Captured use)은 유지되고 Token-set use·Family가 YAML keep-both로 더해졌다. 토큰명 열 삭제는 없다.

AUDIT_DONE fixes=19
