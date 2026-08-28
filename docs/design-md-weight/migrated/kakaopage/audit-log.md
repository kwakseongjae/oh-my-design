# kakaopage 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kakaopage/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kakaopage/DESIGN.md`
검증 sibling: `web/references/kakaopage/.verification.md` — `find web/references/kakaopage -type f`와 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KakaoPage-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 23. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus·inflearn). Scope ¶2 `:11`은 atmosphere 여섯 항만 이름하고 constraint-first를 빠뜨렸고, Semantic `:83`은 role-names / keep-both / Kakao-yellow만 이름하고 skeleton-ghost-not-a-colors-key를 빠뜨렸고, Motion `:145`는 durations / roles / rules / 생략만 이름하는데 원장은 이미 five-kind gate를 적고 있어 본문이 좁았고, Assets `:215`는 favicon / OFL만 이름하고 cover-art-not-invented-decoration을 빠뜨렸고, Capture `:240`은 절차·destination/form maps·content-card kind-omission만 이름하고 네 placeholder/overlay의 Kind:non-interactive를 빠뜨렸고, Layout `:483`은 surface-attachment / whitespace만 이름하고 breakpoint / touch-target / collapsing을 빠뜨렸다. Distinctive / Application rules / Avoid는 본문이 이미 restatement·reasons를 이름하는데 원장 행이 더 좁았다.

## 수정 목록 (26건)

### B2a — 인접 한정 (본문 6건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | "constraint-first palette"는 세 번째 부류. 기존 한정은 atmosphere 여섯 항만 가리킨다. | 기존 완전형에 a constraint-first palette를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:83` — Semantic color | `:98` "this fill is the live observation named on `tokens.components.card-skeleton`; it is not a `tokens.colors.*` key"는 세 번째 부류. 기존 한정은 role-names / keep-both / Kakao-yellow만 가리킨다. | 기존 완전형에 treating the skeleton ghost fill as the live observation named on `tokens.components.card-skeleton` rather than as a `tokens.colors.*` key를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:145` — Motion | `:164` 다섯 종류 승격 게이트는 세 번째 부류. 기존 한정은 durations / roles / rules / 곡선 생략만 가리킨다. 원장 행은 이미 five-kind를 적고 있어 본문이 좁은 쪽이었다. | 기존 완전형에 the five-kind promotion gate below를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:215` — Assets | `:218` cover art / do not replace with invented decoration은 세 번째 부류. 기존 한정은 favicon 경계와 OFL-not-brand만 가리킨다. | 기존 완전형에 treating cover art, character spreads, and title imagery as first-party catalog content that must not be replaced with invented brand-color decoration를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:240` — Capture record | Skeleton / BEST / 무료 / comment chip의 Kind:non-interactive 판정은 세 번째 부류. 기존 한정은 절차·destination/form maps·content-card kind-omission만 가리킨다. | 기존 완전형에 the Kind:non-interactive readings on the skeleton, BEST, free-episode, and comment-chip records를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:483` — Layout | breakpoint 표 · touch-target 특성 · collapsing strategy를 원본 레이아웃 규칙으로 읽는 것은 세 번째 부류. 기존 한정은 surface-attachment와 whitespace만 가리킨다. | 기존 완전형에 reading the breakpoint table, touch-target characterizations, and collapsing strategy as the source’s own layout rules rather than a new responsive specification를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 23, `not KakaoPage-authored` 23, `separately published UI specification` 23. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 45, 55, 67, 83, 116, 131, 141, 145, 179, 193, 197, 215, 240, 483, 515, 532, 568.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. Motion 행은 착수 시 이미 five-kind를 적고 있어 본문만 맞췄다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | Scope ¶2 행 | atmosphere 여섯 항만. 본문 `:11`이 이제 constraint-first도 이름한다. | Constraint-first palette를 행에 추가. |
| 8 | Distinctive traits 행 | groupings만. 본문 `:33`은 이미 restatement와 readings를 이름한다. | classifying the list as a restatement of recorded values; grouping the seven traits and the readings inside them으로 맞춤. |
| 9 | Application rules 행 | grouping만. 본문 `:55`는 이미 reasons를 이름한다. | and the reasons attached to them을 행에 추가. |
| 10 | Avoid 행 | grouping만. 본문 `:67`은 이미 reasons를 이름한다. | and the reasons inside them을 행에 추가. |
| 11 | Semantic 행 | role-names / keep-both / Kakao-yellow만. 본문 `:83`이 이제 skeleton-ghost-not-a-colors-key도 이름한다. | 그 판단을 행에 추가. |
| 12 | Assets 행 | favicon / OFL만. 본문 `:215`가 이제 cover-art-not-invented-decoration도 이름한다. | 그 판단을 행에 추가. |
| 13 | Capture 행 | 절차·maps·content-card omit만. 본문 `:240`이 이제 네 Kind:non-interactive도 이름한다. | 그 판단을 행에 추가. |
| 14 | Layout 행 | surface-attachment / whitespace만. 본문 `:483`이 이제 breakpoint / touch / collapsing도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **23 = 23** (E1 1:1). 발생 수는 그대로, 행 내용이 본문과 같아졌다.

### E2 / E2a / E2c — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 15 | YAML identity 행 | `https://page.kakao.com/`을 9/21/22/24로 적음. 24는 URL 없음. dest **9** at 9×2/21/22/23/184×2/246/324. `#ffd618` P 줄 미기재. | dest **9**. `#ffd618` P dest **6** at 15/29/72/75/127/179. |
| 16 | YAML metadata 행 | `live-extract` dest **0** / P **2**. 본문 145에 있음(fitpet 역형). P dest **1** at 21. | DESIGN dest **1** at 145 / P dest **1** at 21 (`E2a`). harvested P dest **2** at 23/168. |
| 17 | YAML colors 행 | `tokens.colors.ink` dest 2 · canvas dest 3 at 11/93/110 · on-primary dest 2 at 83/88. | ink dest **5** at 11/83/88/92/110 · canvas dest **4** at 11/83/93/110 · on-primary dest **3** at 83/88/110. |
| 18 | YAML type roles 행 | `1.24` dest 2 · `1.40` dest 2 · `1.38` dest 3 · `1.43` dest 2 · `1.33` dest 3 · `1.45` dest 3. body / tab-active dest 1 each. | `1.24` dest **3** · `1.40` dest **3** · `1.38` dest **4** · `1.43` dest **3** · `1.33` dest **5** · `1.45` dest **4**. `tokens.typography.body` dest **2** at 116/202 · `tab-active` dest **2** at 116/203. |
| 19 | YAML spacing / shape 행 | `tokens.spacing` dest 2 · `rounded.pill: 16` dest 1 at 128 · xs/sm/md/lg/pill dest 1 · `7px 14px` dest 1 · `0px 20px` dest 1. | spacing dest **8** at 114/116×5/131/475 · `pill: 16` dest **2** at 116/131 · xs/sm/md/lg dest **2** · pill dest **3** · `7px 14px` dest **2** at 116/305 · `0px 20px` dest **2** at 116/279 · `0px 14px` dest **2** at 116/332. |
| 20 | YAML components 행 | `tokens.components.card-skeleton` dest 2 at 98/370. | dest **4** at 83/98/131/370. |
| 21 | §2 행 | rgba dest 5 at 39/98/231/236/367. 한정 범위 구식. | dest **6** at 39/98/231/236/367/369. skeleton-ghost 한정을 83에 반영. |
| 22 | §5 / §11 행 | 56px dest 3 at 476/480/483. Wait for Free dest 1 at 13. | 56px dest **5** at 253/476/480/483/501. Wait for Free dest **2** at 13×2. |
| 23 | §15 행 | `0ms` dest 1 at 151. 한정이 five-kind를 이름하지 않는다고 읽힘. | `0ms` dest **4** at 151–154 (100/200/250ms 접미). 145가 five-kind를 이름한다고 고침. B3 전문 164 유지 (`E2c`). |
| 24 | §1 / §3 / §14 행 | atmosphere / Assets / applicability 한정이 착수 범위. | constraint-first · cover-art · Kind:non-interactive를 각 행에 반영. |
| 25 | Deviations | `wc -w` 6315 · worker SHA만. | `wc -w` **6394**. auditor SHA `2940daa4e787fb9f8a41d004214efb0f1cf8597fedfc1f2d2c7900ad2d53acc7`. |
| 26 | F1 / F2 | inventory 23항목을 착수 범위로 적음. dual dest를 착수 숫자로 적음. | 확장 6 + 원장 8을 목록에 반영. homepage dest 9 · `live-extract` dest 1/1 · `#ffd618` dest 8/6. |

Destination SHA `49a52f79…` → `2940daa4e787fb9f8a41d004214efb0f1cf8597fedfc1f2d2c7900ad2d53acc7` (한정 확장 후). 줄 수 DESIGN `wc -l` **572** 불변. provenance 227 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목과 reasons를 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 그룹 `Korean webtoon and web-novel readers`만. 이름·나이·도시·동기·소속 분류를 재구성하지 않음.
- Type principles `:211` · whitespace `:487–489` · breakpoint 표 — 원본 §3/§5/§8 문장. 인접 절 머리가 분류를 덮음.
- Motion `:164` B3 다섯 종류+게이트 — 본문 전문 실재 (E2c 유지).
- 2차 목적지 전수: inspected `https://page.kakao.com/` DESIGN dest 9 · `#ffd618` dest 8 · favicon dest 1 · `live-extract` dest 1 · closing sentence dest 1 · `Wait for Free` dest 2 · `not in the token set` dest 0 · `loading | not-applicable` dest 6 · `error | applicable` dest 1 — fitpet형 0회 2차 목적지 없음(착수 시 `live-extract` dest 0 주장이 그 형태였다).
- A1 키 경로: 원본 `tokens.components` 11레코드의 type/bg/fg/radius/padding/height/font/active/use가 각 블록에 행으로 있음. `card-content`는 YAML에 fg 없음 — 산출도 Text 행 없음. `search-input`은 YAML에 bg/radius 없음 — §4 extras는 별행. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/kakaopage/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 카카오페이지 / KakaoPage, 첫 화 보기 / 이어보기 / 홈으로 가기 / 지금핫한 / 실시간 랭킹 / 충전 / 무료 / 제목, 작가를 입력하세요. / 기다리면 무료 / Wait for Free / BEST, 2013 / 2021 / Tapas / Piccoma / Kakao M, 원본 §12 원칙 · §7 Do/Don't · §10 보이스 · §11 결론 `engineered to serve hundreds of distinct visual identities without diluting any of them`, YAML `use` 바이트.
- **관측 기술** — hex · unitless `1.24`/`1.40`/`1.38`/`1.43`/`1.33`/`1.45` · 96/152×274/1200/84/56 geometry · `7px 14px` / `0px 14px` / `0px 20px` · `Primitive type` · §14 treatments · duration tokens.
- **편집적 해석·인과 판단** — 두 경로를 토큰 표면으로 읽기, constraint-first / near-invisible frame, 서사≠토큰, 과제 선정, 청중 그룹·전기 거부, 특성 묶기, 원칙·Do/Don't, role names-from-keys, skeleton-ghost 키 분리, spacing/shape 키 분리, elevation 철학, motion 생략·다섯 종류 게이트, 폰트 증거 class, fallback 금지, type-role keep-both, favicon pointer, cover-art 비치환, applicability·Kind:non-interactive, 레이아웃 표면 귀속, 보이스 레지스터, sample gloss, named-values-not-permissions.

세 번째 부류 중 23곳은 착수 시 인접 완전형이 있었고, 그중 6곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 신설은 없었다.

## 사후 실측

`find`로 5파일 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. 카피는 `grep -oF`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 23 | 1 | 1 |
| `not KakaoPage-authored` | 23 | 2 | 1 |
| `separately published UI specification` | 23 | 2 | 1 |
| inventory 데이터 행 | — | 23 | — |
| `Primitive type: \`button\`` | 2 | 0 | 0 |
| `Primitive type: \`tab\`` | 2 | 0 | 0 |
| `Primitive type: \`card\`` | 2 | 0 | 0 |
| `Primitive type: \`badge\`` | 4 | 0 | 0 |
| `Primitive type: \`input\`` | 1 | 0 | 0 |
| `not in the token set` | 0 | 0 | 1 |
| `#ffd618` | 8 | 6 | 4 |
| `https://page.kakao.com/` | 9 | 6 | 1 |
| `live-extract` | 1 | 1 | 3 |
| `tokens.colors.canvas` | 4 | 2 | 1 |
| `tokens.colors.on-primary` | 3 | 2 | 1 |
| `tokens.spacing` | 8 | 4 | 8 |
| `tokens.components.card-skeleton` | 4 | 2 | 2 |
| `rgba(153,153,153,0.15)` | 6 | 2 | 2 |
| `56px` | 5 | 2 | 1 |
| `Wait for Free` | 2 | 2 | 2 |
| `loading \| not-applicable` | 6 | 0 | 0 |
| `error \| applicable` | 1 | 0 | 0 |
| `components_harvested` | 0 | 2 | 2 |
| `272px` | 0 | 2 | 2 |
| `284px` | 0 | 2 | 2 |
| `transition properties` | 1 | 0 | 2 |

provenance·migration-log의 같은 문자열은 mention이지 본문 use가 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **17** / candidates **189**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아님. 손 대조 발행 라벨 18 KO + 11 EN/use / 0 / 0 (카카오페이지 / 첫 화 보기 / 이어보기 / 홈으로 가기 / 지금핫한 / 실시간 랭킹 / 충전 / 무료 / 제목, 작가를 입력하세요. / 추천 / 웹툰 / 웹소설 / 책 / 요일연재 / 완결추천 / 기다리면 무료 / BEST / Wait for Free / Start Reading / Go Home / Hot Right Now). 발행 라틴 손실은 안 보임. `Subscribe`는 §9 예시 프롬프트 — DESIGN dest 0 / provenance mention 1.
- **B1.** sibling 전용 `272px` / `284px` / `0px 14px 0px 6px` / `21.08.17` / `마법학교 마법사로 살아가는 법` / BEST `height 16px` / CTA outer `font-size: 16px` / bgFreq·fgFreq DESIGN dest **0**. sibling `h3`/`H3`/`섹션 표제` dest 0 (sibling에도 0). 값·구조 관측 침투 없음.
- **D2a.** 삭제 처분 행은 무식별(§13 허구 원형 3인, 이름·나이·도시를 행에 다시 열거하지 않음). `이하나` / `박민준` / `김서연` / `서울` / `부산` / `대전` DESIGN/provenance/migration-log dest **0**. 동기(`university student` / `subway` / `working parent` / `보관함` / `visually overwhelming`) dest **0**. 소속 분류 발명 0. Audience는 원본 그룹만. hubspot형 새 그룹명 없음. gitlab형 Primary-tasks 동기 잔존 없음.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 mention-not-use를 적고 부재를 단언하지 않음. 「Measured DESIGN.md 0」은 DESIGN을 분모로 하고 로그 자신을 분모에 넣지 않음. `live-extract` dest 0은 DESIGN 분모가 거짓이었으므로 E2로 고침.
- **A1.** 원본 YAML 컴포넌트 11레코드의 type/bg/fg/radius/padding/height/font/active/use가 각 블록에 행으로 있음. `card-content.fg` YAML 없음 — Text 행 없음. `search-input` YAML은 type/fg/font/use — 그 네 칸이 행. 필드 소실 없음.

원본 `web/references/kakaopage/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=26
