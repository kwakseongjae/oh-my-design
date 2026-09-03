# perplexity 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/perplexity/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/perplexity/DESIGN.md`
검증 sibling: `web/references/perplexity/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. 파일 존재.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-03

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Perplexity-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 23. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Capture `:270` 「catalog graph is not adopted」는 세 번째 부류인데 한정은 표 뒤 `:288`이고 그 문장은 이 읽기를 이름하지 않음(kyobobook Motion 표-앞 한정 동형). Semantic `:86`은 `:100` surface-white off light-mode page background를 이름하지 않음. Shape `:147` Distinctive-traits 8–12px 문장은 Keeping-한정 밖. Font evidence `:211`은 `:215` no-licence/specimen을 이름하지 않음. `:288`은 Focus ≠ `focus-visible` / 추가 관측 상태 / footer evidence-boundary를 including-list에 넣지 않음. 로그 dest는 `grep -o` 실측과 어긋남(`#20808D` 27≠29, homepage provenance line 51 허위 착지, `pplxSans` P dest 2≠3).

문장 분류: 브랜드 발행 사실(사명·창립 연도·발행 카피·YAML 값·§표 수치) / 관측 기술(hex·radius·duration 전사) / 편집적 해석·인과 판단(키 비병합, 범위 설정, graph-not-adopted, Focus ≠ `focus-visible`, 커브 생략). 세 번째 부류만 수정 대상.

## 수정 목록 (23건)

### B2a — 인접 한정 (본문 5건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:86` — Semantic color | `:100` 「is not a light-mode page background」는 세 번째 부류. 기존 한정은 `surface-white` unmerged from `on-primary`만. | 기존 완전형에 surface-white off the light-mode page background를 접어 넣음. hex를 다시 쓰지 않음. 발생 수 +0. |
| 2 | `DESIGN.md:147` — Shape | Distinctive-traits 「Generous radii (8–12px)」 is not a replacement for the YAML map는 세 번째 부류. Keeping-한정은 네 YAML 키 / `12`·`8` off-map만. | 그 읽기를 Keeping-절에 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:211` — Font evidence | `:215` 「No Perplexity-authored font licence or public type specimen assigning a general product role」는 세 번째 부류. 기존 한정은 FontFaceSet URL 부재·fallback 거부만. | 기존 완전형에 no-licence/specimen을 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:270` — Capture record 머리 | 「preserved here in full while the catalog graph is not adopted」는 세 번째 부류. `:288`은 표 뒤이고 이 읽기를 이름하지 않음. | 완전형 신설(같은 줄). 발생 수 +1. |
| 5 | `DESIGN.md:288` — Capture / applicability | `:286–287` Focus ≠ `focus-visible`, Streaming / Focus mode active / Hover (source card) / Pressed as additional observed states, `:290` footer as evidence boundary는 세 번째 부류. 기존 including-list는 kind/applicability·rest-fill 충돌만. | 기존 완전형에 그 세 읽기를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **24**, `not Perplexity-authored` **24**, `separately published UI specification` **24**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived` P dest **1**). `migration-log.md` mention dest **1**은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 57, 70, 86, 133, 147, 169, 201, 211, 229, 233, 256, 263, **270**, 288, 635, 686, 736.

`node scripts/check-limiter-ledger.mjs perplexity` → 본문 24 / 원장 24 (137–160) 1:1 OK.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | Semantic 행 `:86` | 역할·비병합만. 본문 `:86`이 이제 surface-white off light-mode page background도 이름한다. | 그 판단을 행에 추가. |
| 7 | Shape 행 `:147` | 네 YAML 키 / `12`·`8`만. 본문 `:147`이 이제 Distinctive-traits 8–12px도 이름한다. | 그 판단을 행에 추가. |
| 8 | Font evidence 행 `:211` | FontFaceSet / fallback만. 본문 `:211`이 이제 no-licence/specimen도 이름한다. | 그 판단을 행에 추가. |
| 9 | Capture record `:270` 행 | 없음. 본문 `:270` 신설. | 행 신설. 데이터 **23 → 24** at 137–160. |
| 10 | Capture / applicability 행 `:288` | kind/applicability·Focus ring 일반 문구. 본문 `:288`이 이제 Composer/Text Field Focus, 추가 관측 상태, footer evidence-boundary도 이름한다. | 그 판단을 행에 추가. |

### E2 / E2a — 로그 목적지 (13건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 본문 한정 확장 후 dest 재실측(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML identity 행 | `https://www.perplexity.ai` provenance dest ≥3 at 13 / 43 / **51**. Line 51 has no URL. DESIGN dest ≥3. | DESIGN dest **3** at 9 / 216 / 290. provenance dest **8** at 13 / 35 / 43 / 47 / 59 / 83 / 86 / 102. |
| 12 | YAML `primary_color` 행 | `#20808D` DESIGN dest 27 · P dest 4. `#20808d` DESIGN dest 8. | `#20808D` DESIGN dest **29** · P dest **6** at 14 / 24 / 131 / 146. `#20808d` DESIGN dest **9** · P dest **2**. |
| 13 | YAML metadata 행 | `prose-derived` P dest 4 at 20 / 35 / 55 / **163**. `components_harvested` P dest 3 at 22 / 55 / **164**. inventory 행 신설로 줄이 밀림. | P dest **164** / **165**. |
| 14 | YAML `tokens.colors` 행 | `tokens.colors.primary` DESIGN dest 7. `grep -o` dest **8** (primary-hover/deep/tint 접두 포함). | dest **8**. 접두 포함을 적어 부분문자열을 숨기지 않음. |
| 15 | YAML typography 행 | `22px` DESIGN dest 2. | dest **3** at 233 / 240 (240에 2회). |
| 16 | YAML rounded 행 | `9999` DESIGN dest 5. | dest **7** (379·620에 각 2회). |
| 17 | YAML vs §4 rest-fill 행 | `button-secondary.bg` P dest 2 at 146 / **156**. | 146 / **157**. |
| 18 | §4 Discover / Feed Card 행 | `not in the token set` P dest 1 at **156**. | dest **157**. |
| 19 | §11 Brand Narrative 행 | `Smith & Diction` DESIGN dest 1 at 13. 같은 줄에 2회. | dest **2** at 13. P dest 2 at 139 / **168**. |
| 20 | §15 Motion 행 | `ease-cursor` `steps / linear` DESIGN dest 2 at 192 / 201. `ease-cursor` dest **3**. | `ease-cursor` dest **3** at 190 / 192 / 201; `steps / linear` dest **2** at 192 / 201. |
| 21 | §14 States 행 | 2차 목적지에 B2a `:270`이 없음. | B2a at 270 · 288. |
| 22 | Sibling handling | `pplxSans` P dest 2 at 84 / 92. Line 84에 2회 → dest **3**. `11px`/`88px` dest 없음. | P dest **3**. sibling border-radius `11px`와 source badge font `11px`(DESIGN dest **6**)를 역할로 분리. `88px` DESIGN dest **0** · P dest **2**. `playwright getComputedStyle` DESIGN dest **0** · P dest **3**. |
| 23 | Deviations / F2 | B2a 23=23, 9,527 words, dest를 쓰기 전 grep이라고 적음. | **24=24** (137–160). words **9,636**. F2를 한정 확장 후 `grep -o` 재실측으로 고침. |

Destination SHA DESIGN `d96cc185b0a4e9093bb10ee70263b94209009764df5cb2c2a04fc2bcf54fd8b3`. 줄 수 DESIGN `wc -l` **739** 불변(한정 확장·신설 모두 같은 줄). provenance 168→**169**. `wc -w` 9527→**9636**. 토큰 값·컴포넌트 표·상태 applicability·구조 미변경.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 23개 + 신설 1개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 203 (`transition properties, animation name, duration, easing, and reduced-motion behavior`). `transition properties` DESIGN dest **2** at 203 / 738. Principles 형태 `:44` dest 1. 준수 주장 유지.
- Kind: non-interactive / per-control Reason 칸은 Capture `:288`이 kind/applicability 판결을 이름함. 컴포넌트 블록마다 한정을 복제하지 않음.
- 곡선 값 세 개는 역할명만 남고 수치는 Omission ledger — T2 관례(웨이브 39 kkday). 되살리지 않음.
- 원본에 없는 모션 합성을 유도하는 자기 진술 없음. 생략이 모범(웨이브 39 kmong).
- `#ffffff`는 `surface-white`와 `on-primary`로 귀속이 갈라지고, `:86`과 원장이 두 키를 모두 이름함(웨이브 39 krafton). `#20808D`는 primary / Info / Source Teal 역할을 `:86`이 이름함.
- 충돌 처리: Secondary/Ghost YAML rest vs §4 `transparent` keep-both. YAML 소문자 hex vs §2 혼합 대소 keep-both. toast `0.18` vs Elevated (3) `0.12` keep-both. 문서 전체 keep-both. krds형 자리마다 다른 정책 없음.
- D2a: 식별자·동기·소속 분류 DESIGN dest **0** / P dest **0** / 이 로그 dest **0**(이름 문자열 기준). 처분 행은 `§13 페르소나 3인(이름·나이·도시 포함)` 무식별. Audience/Primary tasks에 원본에 없는 소속 분류를 새로 만들지 않음. 원형 라벨 재수록을 D2a로 지목하지 않음.
- E2d: 부재 단언 행이 그 문자열을 분모에 넣고 「이 파일에 없다」고 하지 않음. provenance Sibling-only 절이 mention≠use를 문장에 적음.

### A1 — 키 경로 (복원 없음)

YAML `tokens.components` 15키의 type/bg/fg/radius/padding/font/use/active를 **대응 블록 행**으로 대조. 값이 다른 블록에만 있는 icook형은 없음.

| id | 대응 블록 | 필드 행 |
|---|---|---|
| button-primary | Primary (Submit / Ask) | Primitive type `button` · YAML bg/fg/radius/padding/font · Token-set use `Ask / submit primary CTA` |
| button-secondary | Secondary (Outline) | Primitive type `button` · YAML rest background `#fcfcf9` · YAML fg/radius/padding/font · Token-set use |
| button-ghost | Ghost / Quiet | Primitive type `button` · YAML rest background `#efefe9` · YAML fg/radius/padding/font · Token-set use |
| pill | Pill (Focus mode / Filter) | Primitive type `badge` · YAML bg/fg/radius/padding/font · Token-set use · Token-set active `#20808d` border, `#13343b` text, `#e5f2f2` bg |
| composer | Composer (the Ask box) | Primitive type `input` · YAML bg/fg/radius/padding/font · Token-set use |
| text-field | Text Field | Primitive type `input` · YAML bg/fg/radius/padding/font · Token-set use |
| answer-card | Answer Card | Primitive type `card` · YAML bg/radius/padding · Token-set use (YAML에 fg/font 없음 — 발명 없음) |
| source-card | Source Card | Primitive type `card` · YAML bg/radius/padding · Token-set use |
| citation-chip | Citation Chips | Primitive type `badge` · YAML bg/fg/radius/padding/font · Token-set use |
| badge-pro | Pro / Model Badge | Primitive type `badge` · YAML bg/fg/radius/padding/font · Token-set use |
| badge-status | Status Badge (Weak) | Primitive type `badge` · YAML bg/fg/radius/padding/font · Token-set use |
| tab | Top Nav Tab | Primitive type `tab` · YAML fg/font · Token-set use · Token-set active `#091717` text, 2px bottom border `#20808d` |
| toast | Toast | Primitive type `toast` · YAML bg/fg/radius/padding/font · Token-set use |
| dialog | Centered Modal | Primitive type `dialog` · YAML bg/fg/radius/padding · Token-set use |
| toggle | Switch | Primitive type `toggle` · YAML bg/radius · Token-set use `Settings switch, #ffffff thumb` |

## 범위 밖 관찰

- **A5a.** Gate `copy-loss` compared **0** / candidates **259**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 스윕: 발행 라벨 34 extracted / 0 missing; YAML use 15 / 0. latin-copy-audit lost 2 (`AI magic`, `feels like a magazine that answers back.`)는 원본 §13 페르소나 문자열 — 발행 카피 아님, 복원하지 않음(D2). 발행 라틴 카피(`Ask anything…`, `Where knowledge begins`, `creating an invisible brand`, `an invisible brand.`, `Start a thread to see it here.`, `Copied to clipboard`, `Couldn't reach that source. Try again.`, `Pro gives you more sources and stronger models.`, `sonar-pro`) DESIGN dest ≥1. 라틴 카피 손실로 보이는 발행 문자열은 없음. 고치지 않음.
- **B1 sibling.** sibling 전용 `pplxSans` DESIGN dest **0** / 원본 dest **0** / sibling dest **2**. `#016a71` DESIGN dest **0**. `88px` DESIGN dest **0**. `playwright getComputedStyle` DESIGN dest **0**. 구조 분류(`portal H2`류) sibling 전용 승격 없음. sibling `11px`는 primary-button border-radius; DESIGN `11px` dest **6**은 source badge font `11px / 600` — 값 grep이 같아도 역할이 다르다. 본문에 sibling 분류를 사실로 올리지 않음.
- **A1 열/귀속.** YAML spacing 8키는 Foundations Spacing에 `xs: 4` · `sm: 8` … `section: 64`로 남음. `tokens.spacing.xs` 점 경로 문자열 dest 0이지만 키 이름·값이 그 절에 행으로 있다(krds 토큰명 열 삭제와 다름). 복원 없음.

AUDIT_DONE fixes=23
