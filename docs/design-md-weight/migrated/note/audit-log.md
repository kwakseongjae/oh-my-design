# note 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/note/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/note/DESIGN.md`
검증 sibling: `web/references/note/.verification.md` — `find`로 경로 직접 확인. 파일 없음 (이 브랜드는 코퍼스 30개 무-sibling 쪽).
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음 (brand/help는 색 리소스, designer article은 black-primary 서사). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not note-authored or a separately published UI specification`을 요구한다. 기존 42건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 42 / 원장 데이터 행 42. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic color `:90` theme-dark를 색 역할에 두고 컴포넌트 `hover`/`focus-visible` 행으로 복사하지 않는 판단, Primary Button 표 Reason의 theme-dark-off-hover, §4 Disabled를 일곱 번째 YAML 컴포넌트가 아닌 처리 레시피로 읽는 판단이 인접 완전형 없이 세 번째 부류였다.

계수 규칙: 한 줄에 두 번 나오는 문자열(`#41C9B4` `:9`×2·`:88`×2, `つくる、つながる、とどける` `:408`×2, `Hiragino Kaku Gothic ProN` `:173`×3 등)은 줄 수가 아니라 출현 수다. 로그는 여러 곳에서 줄 수를 dest로 적었다.

## 수정 목록 (23건)

### B2a — 인접 한정 (본문 3건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:90` — Semantic color theme-dark | "This writing stays on the theme-color role. It is not copied onto a component `hover` row as `focus-visible` or hover treatment." 세 번째 부류. `:86` 한정은 keep-both·two-key·note-pro만 이름하고 이 keep-apart는 빠뜨렸다. `:230`은 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:247` — Primary Button keep-apart | 표 Reason `:252` "Theme-dark `#228D74` is not this row"는 세 번째 부류. `:247` 한정은 radius/fill/on-fill만. 표 자체는 수정하지 않음. | 기존 완전형에 theme-dark-off-hover를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:363` — §4 Disabled recipe | "not a seventh YAML component with its own map. No primitive type is attached." 세 번째 부류. `:361`은 Focus, `:230`/`:232`는 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 44, `not note-authored` 44, `separately published UI specification` 44.

한정 줄: 9, 11, 13, 19, 28, 32, 46, 56, 66, 70, 86, 90, 105, 116, 126, 130, 148, 157, 159, 161, 179, 187, 191, 202, 204, 211, 226, 228, 230, 247, 273, 282, 297, 306, 320, 332, 349, 361, 363, 368, 392, 404, 412, 446.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Semantic color theme-dark 행 | 없음. 본문 `:90` 신설. | 행 12 신설 (`provenance.md:133`). |
| 5 | Primary Button keep-apart 행 | radius/fill/on-fill만. 본문 `:247`이 이제 theme-dark-off-hover도 이름한다. | 그 판단을 행에 추가 (`:151`). |
| 6 | §4 Disabled recipe 행 | 없음. 본문 `:363` 신설. | 행 39 신설 (`provenance.md:160`). |
| 7 | 원장 머리 | "42 complete / 42 data rows". | **44 / 44**. 데이터 122–165. |

### E2 / E2a / E2c — 로그 목적지 (16건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 출현 수는 `grep -o` (한 줄 복수 출현을 센다).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML identity 행 | `#41C9B4` DESIGN dest 9 / P dest 8. 실제 DESIGN 11 (9×2, 88×2, 228 누락), P 9 (110×2). `favicon` DESIGN dest 1 → 2 at 202×2. `logo.type` DESIGN dest 0. | DESIGN dest **11** at 9 (2)/11/13/34/50/60/86/88 (2)/228 + P dest **9**. type `favicon` dest 1; word `favicon` dest **2**; field `logo.type` DESIGN dest 0 / P dest 1 at 15. |
| 9 | YAML metadata 행 | `prose-derived` P dest 9 at 19/25/66/73–77. 실제 dest 12 at 19/25×3/66/73–77/171×2. colon form dest 1 at 25 → dest 2 at 25/171. harvested 168 → 170. **Verified:** 를 35로 적음. | P dest **12**; colon form dest **2** at 25/171; harvested **21/25/66/170**; **Verified:** **36** (표 필드 34). |
| 10 | YAML colors 행 | note pro per-publication theme dest 1 at 99. `per-publication theme` dest 2 at 86/99. | dest **2** at 86/99. |
| 11 | YAML family 행 | Hiragino dest 8; JP-first dest 3 at 172/176/179. 실제 dest 10 (173×3 포함); dest 4 at 172/176/179/**228**. | dest **10**; dest **4**. |
| 12 | YAML spacing 행 | Body `pill or 8px+` dest 2 — 그 문자열 DESIGN dest 0. 실제 `pill or \`8px\`+` dest 2 at 116/242. editor-canvas no-radius dest 1 at 329/332 — `has no radius`는 330. | 본문 표기 dest **2** at 116/242; `has no radius` dest 1 at **330**; not given rounded 8 dest 1 at 332. |
| 13 | YAML components 행 | YAML `use` "dest 1 each" at 22/243 등 두 줄. 실제 dest 2. fitpet형 2차 목적지. | Primary / Secondary / article-card / editor-canvas / text-field use dest **2**. Brand-context dest 1 at 293은 유지. |
| 14 | §1 행 | thesis dest 6. 실제 dest 7 (408×2). `note.com/note_dsn` dest 미기재, 실제 DESIGN dest 2 at 9/171. | dest **7**; URL dest **2** at 9/171. |
| 15 | §2 행 | "Theme-dark stays on the color role dest 1 at 90". 그 문자열 dest 1 at **302**. 90은 "This writing stays on the theme-color role" + 신설 한정. | 90 한정 dest 1; 정확 문자열 dest 1 at 302. |
| 16 | §9 행 | `thumbnail + title (bold)` dest 2 at 310/320. 실제 dest 1 at 310. 320은 `Title (bold)`. | dest **1** at 310; `Title (bold)` dest 1 at 320. |
| 17 | §10 행 | thesis dest 6; `フォロー` dest 5; `スキ` dest 11; page title dest 1 at 9/408. 실제 7 / 7 (297×3) / 13 / dest **2**. | dest **7** / **7** / **13** / **2**. |
| 18 | §12 행 | inventory 42 data rows. | **44** at `provenance.md` 122–165. |
| 19 | §13 행 | `Japanese creators and readers — writers, illustrators, makers` dest 1 at 28. 실제 dest 2 at 28 (2). | dest **2**. |
| 20 | §15 행 | "computed transition properties dest 2 at 161/459" — 그 연속 문자열 DESIGN dest 0 (fitpet형). `duration-values-illustrative` dest 1 at 130/161 — dest 2. B3 restatement P 177 → 179. | 다섯 종류 전문 dest **2** at 161/459; `duration-values-illustrative` dest **2**; P **179**. |
| 21 | Sibling 절 | `ls -la`만. dotfile은 경로 직접 `find`. | `find` on `web/references/note/.verification.md` — 파일 없음. |
| 22 | A5a Audience self-check | `individual creators` DESIGN 1 at 13/28; `Japanese creators and readers` DESIGN 1 at 28. 실제 dest 2 / dest 2 at 28 (2). | dest **2** / dest **2**. |
| 23 | Deviations / F1 / F2 | 7,170 words; B2a 42=42; F2 dest를 착수 숫자로 적음. harvested/colon form 줄이 inventory 삽입 후 이동. | **7,263** words. 44=44. F1에 `:90`/`:247`/`:363` 반영. F2를 F3 후 `grep -o`로 재실측. |

Destination SHA `ddfb15907770cab1d02f7b0124c52c4dd8e83f2dc3e2f8c4d8e6497c2306879d` → `c7766e62174daa342afe5d8f1025f35f48664a3c00aa586e2f3b1237c0897737` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **459** 불변. provenance 180→**182**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정 (`:252` Reason 칸은 한정만 `:247`에 접음).
- 기존 42개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- Line 99 "rather than a hard-locked single accent"는 원본 §2 Notes 전문이고 `:86`이 그 판단을 이름한다.
- Line 355 "Named Focus is not this row"는 `:349` 한정이 표 직전에 이름한다.
- E2d: sibling 머리(`provenance.md:114`·`169`)는 부재를 단언하지 않고 sidecar class만 이름한다. 로그의 DESIGN dest 0 (`google.com/s2/favicons`)은 다른 파일을 분모로 둔다. 페르소나 처분 행은 이름·나이·도시를 열거하지 않는다.
- D2a 처분 행(`provenance.md:106`, 로그 §13): 절·인원·필드 종류만. 원형 라벨은 원본에 이름과 분리되어 있지 않아 처분 행에 라벨을 재수록하지 않았다(게이트 copy-loss는 발행 한국어 문자열을 요구하고, 여기서 삭제된 것은 식별자라 D2a가 우선).

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 14 / candidates 121. `verdict: PASS`는 대조한 바늘 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨 12종(つくる、つながる、とどける / note ――つくる、つながる、とどける。 / 投稿する / フォロー / スキ / 今日のおすすめ / 今すぐ / 見逃すな / バズる / 話題沸騰 / コンテンツにより集中できるデザインに。noteのプライマリーカラーが黒色になるまで / です・ます調) + 영어 gloss `create, connect, deliver` dest 3 at 11/13/392 — 원본·산출 모두 dest ≥1. 발행 라틴 손실은 안 보인다.
- **B1.** sibling 파일 없음 (`find` 직접 경로, 미측정이 아님). sibling 전용 구조 분류의 본문 승격 없음.
- **D2a.** 식별자·동기·소속 분류 DESIGN dest 0 / provenance dest 0 / log dest 0 (원본 §13만). Audience는 원본 그룹(`individual creators — writers, illustrators, musicians, photographers`; `Japanese creators and readers — writers, illustrators, makers`)만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음.
- **A1 키 경로.** YAML `tokens.components` 6레코드 필드가 대응 블록에 행으로 있다: `button-primary` type/bg/fg/radius/use; `button-secondary` type/bg/fg/radius/use; `button-theme` type/bg(Background or text)/fg(Text when fill)/radius/use; `article-card` type/bg/fg/radius/use; `editor-canvas` type/bg/fg/use (YAML에 radius 없음); `text-field` type/bg/fg/radius/use. icook형 키 경로 소실 없음. 곡선 값은 원본 §15에 있으나 본문은 이름·duration·역할을 남기고 cubic-bezier는 생략 원장 — T2 관례(wave 39), 값 소실로 되살리지 않음.
- **같은 hex 다른 역할 (wave 39 krafton, 보고만).** `#ffffff` / `#FFFFFF`는 `tokens.colors.surface`, `tokens.colors.on-primary`, Secondary/Article/Text-field fill에 붙는다. 원장 Semantic color `:86`이 canvas off surface off on-primary를 적고, 컴포넌트 keep-apart 행이 fill off canvas를 적는다. 분리는 원장에 있다.
- **충돌 처리 불일치 (wave 40 item 5, 보고만).** 색·대부분 컨트롤은 YAML 소문자 / §2·§4 대문자 hex를 keep-both한다. Writing Canvas Background만 `#FFFFFF` (or `#F7F9F9` ambient)이고 YAML `editor-canvas.bg` `#ffffff` 소문자는 그 행에 없다. 값은 대문자로 그 블록에 있다. 고치지 않음.
- **E2d.** 처분 행·sibling 머리가 자기 안의 문자열로 세 파일 부재를 단언하지 않는다.

AUDIT_DONE fixes=23

## 개정 — 의미 검토 FAIL 3 (2026-09-02)

대상: `docs/design-md-weight/migrated/note/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 줄 수 44 불변 (기존 한정에 접어 넣음). DESIGN `wc -l` 459 불변.

### 결함 1 — A1 — §1 고유 구 소실

원본 `:49`·`:51`의 `unusual and memorable in a sea of social-platform blues` / `flood its product chrome` / `legible Japanese long-form reading` / `content is the point`를 Experience Scope `:11` 원문 문장으로 복원. hex·black-primary·`calm + sincere`·Avoid `Don't flood the UI with teal`의 대체물이 아님. 한정 source-own 목록에 그 네 문장을 분류하고, 파생 목록은 그대로 둔다.

### 결함 2 — A1 · 항목 11 — §3 Font Stack 긴 쪽을 HTML 주석 짧은 쪽으로 교체

원본 `:89` `system/web font chain (Hiragino / Noto-class Japanese fonts with platform fallbacks)` + `not decorative display type`를 Family `:187`에 복원. HTML 주석 `representative JP-first chain` dest 4 (172/176/179/228)는 유지. 짧은 쪽이 긴 쪽을 대체하지 않는다.

### 결함 3 — A3 — §9 전용 카드 제약 미착지

원본 `:204` `Minimal chrome — the title and image lead.`를 Article / Note Card Role `:310`에 복원. §4 `content-led, minimal chrome` dest 1은 그대로. 원장 A3 점검 `:105`·`:110`에 착지를 적음.

`grep -oF -e` 실측 (파일별; 개정 후; audit-log 이 절 기록 전):

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `unusual and memorable in a sea of social-platform blues` | 1 | **1** | 0 | 2 |
| `flood its product chrome` | 1 | **1** | 0 | 2 |
| `legible Japanese long-form reading` | 1 | **1** | 0 | 2 |
| `content is the point` | 1 | **1** | 0 | 2 |
| `system/web font chain` | 1 | **1** | 0 | 2 |
| `Hiragino / Noto-class Japanese fonts with platform fallbacks` | 1 | **1** | 0 | 2 |
| `Noto-class` | 1 | **1** | 0 | 3 |
| `platform fallbacks` | 1 | **1** | 0 | 3 |
| `decorative display` | 2 | **2** | 0 | 3 |
| `not decorative display type` | 1 | **1** | 0 | 1 |
| `representative JP-first chain` | 1 | 4 | 2 | 1 |
| `the title and image lead` | 1 | **1** | **2** | 3 |
| `title and image` | 1 | **1** | **2** | 4 |
| `Minimal chrome — the title and image lead.` | 1 | **1** | **2** | 1 |
| `content-led, minimal chrome` | 1 | 1 | 0 | 0 |
| `content-forward` | 1 | **2** | 0 | 1 |
| `quiet, trustworthy frame` | 2 | **2** | 0 | 1 |
| `Hiragino Kaku Gothic ProN` | 3 | 10 | 1 | 3 |

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §1 Visual Theme | `unusual and memorable in a sea of social-platform blues` DESIGN | 0 | **1** at 11 |
| §1 Visual Theme | `flood its product chrome` DESIGN | 0 | **1** at 11 |
| §1 Visual Theme | `legible Japanese long-form reading` DESIGN | 0 | **1** at 11 |
| §1 Visual Theme | `content is the point` DESIGN | 0 | **1** at 11 |
| §1 Visual Theme | `content-forward` DESIGN | 1 at 191 | **2** at 11/191 |
| §1 Visual Theme | `quiet, trustworthy frame` DESIGN | 1 at 39 | **2** at 11/39 |
| §3 Typography | `system/web font chain` DESIGN | 0 | **1** at 187 |
| §3 Typography | `Hiragino / Noto-class Japanese fonts with platform fallbacks` DESIGN | 0 | **1** at 187 |
| §3 Typography | `Noto-class` DESIGN | 0 | **1** at 187 |
| §3 Typography | `platform fallbacks` DESIGN | 0 | **1** at 187 |
| §3 Typography | `not decorative display type` DESIGN | 0 | **1** at 187 |
| §3 Typography | `decorative display` DESIGN | 0 | **2** at 11/187 |
| §9 Agent Prompt Guide | `the title and image lead` DESIGN / P | 0 / 0 | **1** at 310 / **2** at 105/110 |
| §9 Agent Prompt Guide | `Minimal chrome — the title and image lead.` DESIGN / P | 0 / 0 | **1** at 310 / **2** at 105/110 |
| §9 Agent Prompt Guide | `title and image` DESIGN / P | 0 / 0 | **1** at 310 / **2** at 105/110 |
| Deviations `wc -w` | DESIGN word count | 7,263 | **7,443** |

B2a `derived editorial implementation inference` DESIGN dest **44** 불변. `representative JP-first chain` DESIGN dest **4** 불변. YAML `use` 8/8 dest 불변. `Hiragino Kaku Gothic ProN` dest **10** 불변.

`node scripts/check-limiter-ledger.mjs note` → 본문 **44** / 원장 **44** (122–165) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs note` → use 8/8 (100%) 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand note --gate-only` → PASS.

FIX_DONE note fixed=3 logdest=16
