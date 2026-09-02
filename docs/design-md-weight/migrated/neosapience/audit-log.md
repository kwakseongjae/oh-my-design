# neosapience 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/neosapience/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/neosapience/DESIGN.md`
검증 sibling: `web/references/neosapience/.verification.md` — `find web/references/neosapience -name '.verification.md'`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. **EXISTS**.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches found` / `No such file`은 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 UI 사양은 원본에 없다 (`ds.name` / `ds.url` / `ds.type` 부재는 provenance Identity에만 기록). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Neosapience-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형(복수 `are derived editorial implementation inferences`)은 완전형.

착수 실측: 본문 `derived editorial implementation inference` 24 / `not Neosapience-authored` 24 / `separately published UI specification` 24. 원장 `## Derived editorial inventory` 데이터행 24 (153–176). `node scripts/check-limiter-ledger.mjs neosapience` 본문 24 = 원장 24. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Primary tasks `:19`는 「these four」만 이름하고 네 일의 내용은 한정 밖. Semantic `:85`는 역할 페어링·두 오렌지 분리만 이름하고 같은 hex의 canvas vs Typecast CTA text vs emotion-chip / corporate-nav background는 한정 밖. Spacing `:119`는 `16`/`24`/`30`/`40`/`48`/`64` 비해제만 이름하고 `:117`의 32–40px notable ≠ spacing key는 한정 밖. Family `:184`는 네 원리만 이름하고 trailing fallback/system-face 금지는 한정 밖. Type roles `:195`는 Button 18 vs Lead 18만 이름하고 inline demo CTA 16px / 700 Roboto ≠ Button type-role은 한정 밖. Capture `:218`은 kind/applicability만 이름하고 컴포넌트-로컬 height/padding/radius/font ≠ spacing/type/rounded 병합은 한정 밖. Content `:477`은 forbidden-register만 이름하고 `:479`의 no-further-locale는 한정 밖.

문장 분류: 브랜드 발행 사실(TRY FOR FREE·Try me·네오사피엔스·KO title/H1·voice samples) / 관측 기술(hex·px·unitless line-height·YAML `type`/`use`) / 편집적 해석·인과 판단(계약 표면 지정, 분위기 수식, 같은-hex 키 분리, keep-both, locale 경계). 세 번째 부류만 수정 대상. Core C1/C2/C3/B1 문장과 B3 다섯 종류 게이트(`:169`)는 정책이지 브랜드 해석이 아니므로 한정 발생 수를 늘리지 않았다.

## 수정 목록 (16건)

### B2a — 인접 한정 (본문 7건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:19` — Primary tasks | 「these four」만. 네 일의 내용은 세 번째 부류인데 한정 밖. | 기존 완전형에 corporate mission-and-publication reading / Typecast hero/demo invitation / Typecast feature-and-emotion switching / corporate top-nav destinations를 접어 넣음. 발생 수 +0. 발행 카피 문자열을 한정에 되풀이하지 않음. |
| 2 | `DESIGN.md:85` — Semantic color | 역할 페어링·두 오렌지 분리만. 같은 hex의 canvas vs Typecast CTA text vs emotion-chip / corporate-nav background는 세 번째 부류. | 기존 완전형에 canvas role off Typecast CTA text and off emotion-chip / corporate-nav background as component-field attachments rather than extra colors keys를 접어 넣음. `#ffffff` DESIGN dest **8** 불변(hex를 한정에 다시 쓰지 않음). |
| 3 | `DESIGN.md:119` — Spacing | `16`/`24`/`30`/`40`/`48`/`64` 비해제만. `:117` notable ≠ `tokens.spacing` key는 세 번째 부류. | 기존 완전형에 32–40px hero-padding notable과 10px / 20–30px CTA padding notable off the key list를 접어 넣음. `32–40px` DESIGN dest 1→**2**. |
| 4 | `DESIGN.md:184` — Family | 네 원리만. trailing do-not-present-fallback-or-system-face / do-not-mix-display-into-corporate는 세 번째 부류. | 그 읽기를 기존 완전형에 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:195` — Type roles | Button 18 vs Lead 18만. inline demo CTA 16px / 700 Roboto ≠ Button type-role은 표 안의 세 번째 부류. | 그 keep-both를 기존 완전형에 접어 넣음. 발행 라벨 `Try me`를 한정에 되풀이하지 않음. `Try me` DESIGN dest **10** 불변. |
| 6 | `DESIGN.md:218` — Capture record | kind/applicability만. 컴포넌트-로컬 height/padding/radius/font ≠ spacing/type/rounded 병합은 세 번째 부류. | 기존 완전형에 그 keep-both를 접어 넣음. 상태 applicability 표는 건드리지 않음. |
| 7 | `DESIGN.md:477` — Content forbidden-register | 금지 레지스터만. `:479` no-further-locale는 세 번째 부류. | 기존 완전형에 adding no further locale behavior beyond the recorded voice samples, KO mirror title, and hangul-first body size를 접어 넣음. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not Neosapience-authored` 24, `separately published UI specification` 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 45, 55, 68, 85, 119, 135, 147, 151, 167, 184, 195, 210, 218, 418, 452, 457, 477, 513.

### E1 — provenance derived 범위 (7건)

좁은 쪽 FAIL(fastcampus). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 24로 유지하고 이름 범위만 맞췄다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | Primary tasks 행 `:19` | 네 표면 선택만. | 네 일 이름. |
| 9 | Semantic color 행 `:85` | 역할 페어링·두 오렌지만. | canvas role off Typecast CTA text and off emotion-chip / corporate-nav background as component-field attachments rather than extra colors keys. |
| 10 | Spacing 행 `:119` | 비해제 숫자만. | 32–40px notable / CTA padding notable off the spacing key list. |
| 11 | Family 행 `:184` | 네 원리만. | trailing fallback/system-face and do-not-mix-display-into-corporate. |
| 12 | Type roles 행 `:195` | Button vs Lead만. | inline demo CTA 16px / 700 Roboto off the Button type-role. |
| 13 | Capture record 행 `:218` | kind/applicability만. | component-local height/padding/radius/font kept off spacing, type, or rounded keys. |
| 14 | Content `:477` 행 | forbidden-register만. | no further locale behavior beyond recorded samples / KO title / hangul-first body size. |

헤더 / 데이터 행 **24 = 24** at 153–176 (E1 1:1, 이름 범위 정렬). `node scripts/check-limiter-ledger.mjs neosapience` 본문 24 = 원장 24.

### E2 / E2a / E2c — 로그 목적지 (2건)

본문이 아니라 로그(와 원장 행의 이름 범위)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 본문을 고친 뒤 dest 표를 재실측함(lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 15 | YAML metadata 행 | Exact `tokens.source: live-extract` 「provenance dest 3」. `grep -o` DESIGN **0** / provenance **2** / migration-log **2**. Identity 표는 `tokens.source \| live-extract`라 콜론 정확형이 아니다. | provenance dest **2**. |
| 16 | F2 dest 표 + SHA + `split()` 단어 수 | 본문 한정 확장 뒤 재실측 없음(lablup). Worker SHA `daec9d4152…`. `split()` 7,010. `32–40px` dest 미기재. `Try me` dest 미기재. 한정 커버리지 서술이 구버전. | `grep -o` 재실측. Homepage exact DESIGN **2** / provenance **4**. `primary_color` **4**/**2**. `favicon` **3**/**4**. 네오사피엔스 **8**/**4**. `box-shadow: none` **1**/**1**. omitted `cubic-bezier(0.4, 0.0, 1, 1)` / `cubic-bezier(0.2, 0.6, 0.25, 1)` DESIGN **0** / provenance **1**. Tier-2 세 문자열 DESIGN **0** / provenance **1**. `32–40px` DESIGN **2**. `TRY FOR FREE` DESIGN **11**. `Try me` DESIGN **10**. `tokens.colors.primary` DESIGN **4**. `tokens.colors.product-cta` DESIGN **3**. `tokens.rounded.full: 9999` DESIGN **2**. B3 다섯 종류 전문 `:169` dest 1. `split()` 7,010→**7,153**. 줄 수 DESIGN **517** 불변. F3 DESIGN SHA `4de20821573e031d8264aa507be64466e7e25451bf52f2dff0078049da1daa03`. |

2차 목적지 재실측(본문에 남겼다는 주장): B2a 예문 `These 5 items…` DESIGN dest **1** at 45; B3 다섯 종류 전문 dest 1 at 169; `the split is the whole story` dest 2; `What unifies the two systems` dest 1; §14 본문 222–231 실재. fitpet형 본문 0회 2차 목적지 0.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 24개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니다. Application priority / Unknowns / Changes는 Core 보일러플레이트.
- YAML vs §3 rem, YAML `use` vs §4 Use, spacing `16` vs rounded `16` vs type size 16, 두 오렌지는 문서 전체 keep-both — 항목 5 비일관에 해당하지 않는다.
- E2c: B3 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior` + `A single confirmed curve does not satisfy that condition` DESIGN dest 1 at 169. 준수 주장은 그 줄이 전문을 담을 때만 유지.
- E2d: 부재 단언이 자기 자신을 분모에 넣어 거짓이 된 행 0. Sibling-only는 「DESIGN dest 0」이지 「세 파일 어디에도 없다」가 아니다. Omission ledger §13은 필드 종류만 적고 식별자를 나열하지 않는다. `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`는 provenance dest 1 / DESIGN dest 0 — 로그가 그 문자열의 DESIGN dest를 주장하지 않으므로 거짓 목적지가 아니다.
- D2a: 처분 행에 이름·나이·도시·전기 문구 없음. 원형 라벨은 원본 §13 헤더의 source-named groups(`creators using AI voice, ML researchers, and recruits` DESIGN dest 2 / source dest 1)뿐이고 게이트 copy-loss가 요구하는 기록이다. 본문에 식별자·동기·소속 분류의 신규 재구성 0 (`YouTube creator` / `e-learning producer` / `speech-ML researcher` DESIGN dest 0 / provenance dest 0 / log dest 0 / source dest 1).
- A1 키 경로: `cta-primary` type/bg/fg/radius/padding/height/font/use, `cta-inline` 동형, `nav-link` type/fg/radius/padding/font/active/use, `feature-tab` type/fg/radius/border/active/disabled/use, `emotion-chip` type/bg/fg/radius/padding/height/font/use, `usecase-card` type/bg/radius/padding/height/use, `corporate-card` type/bg/fg/radius/use, `research-item` type/fg/border/height/use가 각 컴포넌트 블록 **행으로** 존재. icook형 타 블록 hex 차용으로 값을 메운 소실 0. 복원 0.
- 원본 §15 곡선 값은 이름·use만 남고 cubic-bezier는 생략(T2 관례, kkday). 값이 어디에도 없는 손실이 아니라 인용된 채 역할만 남은 것. 합성하지 않음(kmong).
- `#ffffff`는 canvas(페이지/카드 표면)와 Typecast CTA text와 emotion-chip / corporate-nav background로 키가 갈린다. 분리를 본문 `:85`와 원장 Semantic 행에 적어 E1 1:1.

## 범위 밖 관찰

- **A5a.** `--gate-only` `coverage.copy-loss` compared **3** < candidates **193**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 스윕 발행 라벨 DESIGN dest: 네오사피엔스 8, TRY FOR FREE 11, Try me 10, "We invent the future of creativity with AI" 4, "The world's most expressive AI voice" 4, "What are you making? Let's bring it to life" 3, "an AI startup at the forefront" 1, Happy · Paige 2, Sad · Nia 2, Angry · Riley 2, Whisper · Chad 2, Text-to-Speech 3, Smart Emotion 2, Voice Cloning 3, Kid 1, TikTok 1, 네오사피엔스 소개 3, KO title 3. 라틴 카피 손실은 눈에 띄지 않았다. 설명문·use 라벨·편집 gloss는 손 대조 대상이 아니다.
- **B1 sibling 전용.** `About Neosapience` DESIGN dest **0** / sibling dest **1**; `회사 소개` **0**/**1**; `미션` **0**/**1**; `Happy  Paige`(middot 없음) **0**/**1**; `line-height: 24px` **0**/**1**; `padding: 32px 0px 40px` **0**/**1**; `rgba(254,126,67,0.1)` **0**/**1**; `657 bytes` **0**/**1**; `AI Voice Generator` **0**/**1**. 구조 분류(`H1 "About Neosapience"`, sibling method의 `h1/h2/h3`)도 본문에 사실로 승격되지 않음. finda형 0. `an AI startup at the forefront`는 원본 §10 dest 1 / 산출 dest 1 — sibling H2 샘플의 승격이 아니라 원본 본문.
- **A1 열 구조(wave 40).** YAML에 `--css-var` 토큰명 열이 없다. Type roles는 Size/Weight/Line height/Token-set use 열에 YAML 값이 행으로 있다. 단계 귀속 수식어 소실 0. `corporate-card` YAML `use`는 전용 `YAML use:` 행이 아니라 C4 문장 안에 실려 있다 — 값은 같은 블록에 있고 icook형 타 블록 차용이 아니므로 복원하지 않았다.
- **항목 5 충돌 처리.** 두 오렌지·unitless vs rem·YAML use vs §4 Use는 전 문서 keep-both. Primary Deep 병기 / Warning 삭제 / radius 한쪽 수정 같은 자리마다 다른 처리는 없음.

AUDIT_DONE fixes=16
