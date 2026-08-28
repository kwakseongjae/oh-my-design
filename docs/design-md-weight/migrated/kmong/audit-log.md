# kmong 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kmong/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kmong/DESIGN.md`
검증 sibling: `web/references/kmong/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Kmong-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 23. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic `:74`는 역할명·hex keep-both만 이름하고 YAML-note-as-facts를 빠뜨렸다. Family `:153`은 sole-family / slick-refuse만 이름하고 canonical-because / do-not-replace-unavailable을 빠뜨렸다. Type roles `:157`은 pairing / YAML use / surface-boundary만 이름하고 size≠spacing keep-apart를 빠뜨렸다. Capture `:186`은 applicability만 이름하고 Primitive-type attachment / no-§4-only를 빠뜨렸다.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 4건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:74` — Semantic color | YAML 토큰 노트를 사실로 두는 읽기(`:96`)는 세 번째 부류. 기존 한정은 역할명 / hex keep-both / house-palette만. | 기존 완전형에 YAML-note-as-facts / selector-backed / route-local / no-logged-in-checkout-support-doc를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:153` — Family | `:151` "canonical here only because computed visible use and loaded FontFace agree"와 "Do not replace unavailable or unobserved brand type"는 세 번째 부류. 기존 한정은 sole-family / slick-refuse만. | 기존 완전형에 canonical-because-computed/FontFace와 do-not-replace-unavailable을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:157` — Type roles | `:167` hero `40` / search `20` / marketplace-body `16` / header-action `14`를 spacing·radius와 가르는 읽기는 세 번째 부류. 기존 한정은 pairing / YAML use / surface-boundary만. | 기존 완전형에 size≠spacing keep-apart를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:186` — Capture | `:188` Primitive-type 부착 규칙과 "no §4-only component outside the six token-set records"는 세 번째 부류. 기존 한정은 applicability / kind-omission만. | 기존 완전형에 Primitive-type-only-when-YAML와 no-§4-only를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 23, `not Kmong-authored` 23, `separately published UI specification` 23. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 52, 61, 74, 102, 117, 126, 130, 145, 153, 157, 175, 186, 335, 344, 349, 383.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | Semantic 행 10 | 역할명 / hex keep-both만. 본문 `:74`가 이제 YAML-note-as-facts도 이름한다. | 그 판단을 행에 추가. |
| 6 | Family 행 16 | sole-family / slick-refuse만. 본문 `:153`이 이제 canonical-because / do-not-replace도 이름한다. | 그 판단을 행에 추가. |
| 7 | Type roles 행 17 | pairing / use / surface-boundary만. 본문 `:157`이 이제 size≠spacing도 이름한다. | 그 판단을 행에 추가. |
| 8 | Capture 행 19 | applicability만. 본문 `:186`이 이제 Primitive-type attachment / no-§4-only도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **23 = 23** (E1 1:1). 데이터 176–198.

### E2 / E2a / E2c — 로그 목적지 (14건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | YAML identity 행 | `https://kmong.com/` DESIGN dest 7 / P dest 2. `grep -oF`는 category 접두까지 센다. | DESIGN dest **11** at 9×2/21/22/23/192/218/243/270/297/324 · P dest **4** at 48/49/56/57. Standalone home dest 7 / P dest 2는 병기. |
| 10 | YAML identity 행 | `#92fa72` DESIGN dest 5 at 11/35/84/194 (4줄). | dest **4**. |
| 11 | YAML identity 행 | `#92FA72` P dest 미기재. | P dest **3** at 110/138/168. |
| 12 | YAML metadata 행 | exact `tokens.source: reconciled` P dest 3 at 21/69/207. 21은 표 칸 `tokens.source \| reconciled`. | dest **2** at 69/207. Token note 29→**27**. Freshness 35–41→**33–38**. Verified 43→**40**. |
| 13 | YAML typography 행 | Pretendard dest at 36/46/53/… 46·53은 Pretendard 0(fitpet). | dest **22** at 36/55/64/140/141/149/151×2/153/161–165/172/175/199/224/251/278/305/329. |
| 14 | YAML typography 행 | `slick` P dest 3 at 119/136/138. 191에도 1. | P dest **4**. |
| 15 | YAML spacing 행 | `tokens.rounded.home-search: 36` dest 2 at 114/117. 114는 키만. | dest **1** at 117. `home-search: 36` dest 2 at 106/117 병기. |
| 16 | Footer 행 | Freshness 35–41 · Verified 43 · Conflicts 45. | table **33–38** · Verified **40** · Conflicts **42**. |
| 17 | §11 행 | `2025` dest 2 at 9/13. 13에 2회. | dest **3** at 9/13×2. |
| 18 | §12 행 | inventory 175–197 (머리 포함). | **176–198** (23 data rows). |
| 19 | §13 행 | disposition P 164 (표 머리). | **165**. |
| 20 | Sibling 절 | transcription 101–123 · sibling-only 129–136. | **108–122** · **128–136**. |
| 21 | Deviations | `wc -w` 4,745. | **4,839**. |
| 22 | Deviations | worker SHA만. | auditor SHA `f8f97d2d8a3cf599b66225f4159d046ab86206e87296dc9814df7b31b64e7ab0`. |

Destination SHA `fe636e6a1fe3cab71b527e582b8cc48a752cddd03a97a2369b2614db13caed13` → `f8f97d2d8a3cf599b66225f4159d046ab86206e87296dc9814df7b31b64e7ab0` (한정 확장 후). 줄 수 DESIGN `wc -l` **390** 불변. provenance 207 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 23개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2d: sibling-only 머리(`provenance.md:126`)는 원장에 남기고 portable fact가 아니라고 적는다. 「이 파일에 없다」고 단언하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:165`)은 절·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. 원본 §13 자체에 식별 페르소나가 없다.
- `tokens.source: reconciled` DESIGN dest 0 / `components_harvested` DESIGN dest 0 / `not in the token set` dest 0 / `loading | applicable` dest 0 / `error | applicable` dest 1 at 265 은 정정 후 로그와 맞다.
- B3 다섯 종류 게이트는 `DESIGN.md:130`에 전문이 있다(E2c).

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 0 / candidates 172. `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨: 크몽 / Kmong / Pretendard / slick / SIL Open Font License 1.1 / corporate-card payment / tax-invoice issuance / escrow payment / Clients commissioning expert work / Experts offering services / Companies commissioning external work — 원본·산출 모두 dest ≥1. 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 `16px 0px` / `coverage score 80` / `rgb(146` / `Thin through Black` / `artifacts/reference-evidence` / `16px/500/16px` DESIGN dest 0. sibling `h1` / `Not interactive` DESIGN dest 0. 값·h3/섹션 표제 분류 침투 없음.
- **D2a.** 원본 §13은 source-grounded groups 3건(이름·나이·도시 없음). 식별자·동기·소속 분류 DESIGN/P/L dest 0(원본 그룹명 `Clients commissioning expert work` / `Experts offering services` / `Companies commissioning external work`만 Audience에 원문). gitlab형 동기 잔존·hubspot형 소속 신조어 없음.
- **A1.** 원본 YAML 컴포넌트 6레코드의 각 필드가 대응 블록에 행으로 있다. home-primary-cta 9필드, header-action 8필드(padding 없음), home-search 10필드, home-outline-cta 10필드, category-filter-control 10필드, category-panel 6필드(`fg`/`states` YAML에 없음 — Text 행 없음). icook형 키 경로 소실 없음.

AUDIT_DONE fixes=22
