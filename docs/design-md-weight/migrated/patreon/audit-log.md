# patreon 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/patreon/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/patreon/DESIGN.md`
검증 sibling: `web/references/patreon/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음 (`ds.name` / `ds.url` / `ds.type` 원본 frontmatter 부재, `prov` 24). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Patreon-authored or a separately published UI specification`을 요구한다. 기존 40건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 40 / 원장 데이터 행 40. 숫자는 맞았으나 두 자리가 함께 좁았다(fastcampus). Assets `:224`는 favicon·Dinamo·photography만 이름하고, 같은 절 `:222`의 planned creator-mark tool = narrative name ≠ harvested asset file을 빠뜨렸다. Capture `:249`는 kind/applicability / kind-omission / not-complete / Primitive type만 이름하고, 같은 문단의 generic Focus ≠ `focus-visible` · named hover ≠ keyboard-focus · absence ≠ `not-applicable` · loading/error/success follow role을 원장이 말하지 않았다.

문장 분류: 브랜드 발행 사실(인용 카피·연도·파트너명·YAML 값) / 관측 기술(hex·1,556·pill 수치·`box-shadow: none`) / 편집적 해석·인과 판단(키 비병합, 도구를 수확 에셋이 아니라고 읽기, Focus≠focus-visible, 페르소나 삭제 읽기). 세 번째 부류만 수정 대상.

## 수정 목록 (12건)

### B2a — 인접 한정 (본문 2건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:224` — Assets | planned creator-mark tool을 source-narrative name이지 harvested asset file이 아니라고 읽는 것은 세 번째 부류. 기존 한정은 favicon pointer / Dinamo partner page / photography not replaceable만. `:222`가 그 읽기를 이미 적었으나 인접 완전형이 그것을 이름하지 않음. | 기존 완전형에 planned-tool 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:249` — Capture / applicability | generic Focus ≠ `focus-visible`, named hover rgba ≠ keyboard-focus, absence of capture ≠ `not-applicable`, loading/error/success follow product role은 세 번째 부류. 기존 한정은 kind/applicability / kind-omission / not-complete / Primitive type / no §4-only만. 같은 문단 뒤에 그 문장이 있으나 한정 목록이 이름하지 않음. | 기존 완전형 목록에 네 판단을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 40 (그중 복수 `inferences` 7), `not Patreon-authored` 40, `separately published UI specification` 42 (완전형 40; `:21`·`:95`가 같은 한정 안에서 spec 구를 한 번 더 씀). 완전형 사이트 40. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 15, 21, 27, 36, 40, 53, 64, 78, 95, 124, 138, 149, 153, 170, 180, 196, 200, 215, 224, 231, 233, 247, 249, 268, 295, 322, 349, 374, 398, 400, 414, 437, 439, 444, 493, 509, 547.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | Assets 행 `:224` | favicon / Dinamo / photography만. 본문 `:224`가 이제 planned-tool도 이름한다. | 그 판단을 행에 추가. |
| 4 | Capture / applicability 행 `:249` | kind/applicability / kind-omission / not-complete / Primitive type / no §4-only만. 본문 `:249`가 이제 Focus ≠ `focus-visible` · hover ≠ keyboard-focus · absence ≠ `not-applicable` · role-not-kind도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **40 = 40** at 162–201 (E1 1:1). 행 수 불변.

### E2 / E2a / E2c / D2a / E2d — 로그 목적지 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | §13 삭제 행 | 처분 행이 식별자 네 이름을 열거한 채 `DESIGN.md` 0 / `provenance.md` 0을 단언(D2a 재수록 + 웨이브 41 부수 교훈). 목적지 `prov` 152는 §9 행이고 §13은 `prov` 153. | 이름을 빼고 필드 종류만 남김. dest `prov` **153**. 수정 후 네 이름 DESIGN 0 / prov 0 / log 0. |
| 6 | Sibling-only 묶음 dest 0 | `7.5px`·`22.5px`를 다른 sibling-only 문자열과 묶어 `DESIGN.md` 0이라 함. `grep -o '7.5px'` DESIGN dest **7** (source-shared `187.5px`/`127.5px` 접미). `grep -o '22.5px'` DESIGN dest **2** at 210 (원본 §3 Subhead live computed, radius-scan bin이 아님). fitpet형 2차 목적지 0 주장. | 문자열별로 dest를 적음. body rem `font-size: 7.5px`와 radius-scan `22.5px`만 sibling-only로 남기고, 접미·Subhead 값은 출처를 분리. 목록 줄 `prov` 112–127. |
| 7 | F1 조각 계수 | "all three fragments = 40". 실측 spec 구 DESIGN dest **42**. | derived 40 / not-authored 40 / spec 42, 완전형 사이트 40으로 고침. |
| 8 | Footer URL 행 | Home/pricing dual을 Scope `DESIGN.md` 9, 31만. Font evidence 185 누락. Tier 2 `prov` 59–61은 refero 행 62를 자름. | DESIGN **9 / 31 / 185**. `grep -o 'https://www.patreon.com'` dest **5** (`/pricing`가 접두를 공유; exact `/pricing` dest **3**). Tier 2 **59–62**. |
| 9 | §5 Layout 행 | dest 444–487. 마지막 Image Behavior 줄은 488. | **444–488**. |
| 10 | A5a sibling 목록 줄 | `prov` 111–127. 목록 본문은 112–127 (111은 빈 줄). | **112–127**. |
| 11 | F2 | dual dest를 착수 줄로만 적음. | 9/31/185 dest 5·3과 B2a 40=40을 재실측으로 갱신. |
| 12 | favicon 행 | Assets qualifier를 catalog pointer만. 본문 `:224`가 이제 planned-tool도 이름한다. | 그 읽기를 행에 추가. |

Destination SHA DESIGN `d43f626d45076f1262152e548f86c9fe5e28719efb0e26bad93a474f84731eeb`. 줄 수 DESIGN `wc -l` **552** 불변 (한정은 기존 줄에 접힘). provenance 216 불변. migration-log 105.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 40개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 172 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1; "Official documentation of a single curve or duration is not that gate" dest 1). Principles 형태 `:53` dest 1. 준수 주장 유지.
- E2d: sibling-only 머리(`provenance.md:110`)는 원장에 남기고 portable fact가 아니라고 적는다. 「이 파일에 없다」고 단언하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:153`, 로그 §13)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. 본문 동기·소속 분류 0.
- `components_harvested` DESIGN dest 0 / 곡선 값 `0.2, 0.6, 0.25, 1` DESIGN dest 0 / `prov` 154 only 는 로그 주장과 맞다. 본문의 `cubic-bezier` 6회는 이름·omit 표기이지 곡선 값 재수록이 아니다.
- A1 키 경로: YAML `tokens.components` 8레코드의 type/bg/fg/radius/padding/height/font/border/use/active가 대응 블록에 **행으로** 있다. icook형 hex-elsewhere 없음. 복원 없음.
- `#ffffff` canvas / on-primary / dark-CTA fill / card fill 귀속 분리는 Semantic `:95`와 컴포넌트 field note에 적혀 있다. `#000000` primary / black 비병합도 `:95`.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` `compared: 0` / `candidates: 182`. 발행 카피 손 대조(Get started / Get Started / Get Started for Free / Start Your Patreon for Free / Find a Creator / Log in / Updates / Creators / Features / Pricing / Resources / PATREON / Where podcasts grow / Your wildest creative reality / Make it making art / Creator is now a career / Complete creative control / Earning made easy / Where Creator Communities Thrive / Secure payments handled for you / We handle taxes / No setup headaches / 10% / visual-language quote / no-canonical-form quote / motion-first 구 / spotlight 구)는 DESIGN dest ≥ 1. 라틴 카피 손실은 이 바늘 집합에서 보이지 않았다. `verdict: PASS`는 대조 분모 0의 「잃은 것 없음」이지 카피 보존 증명이 아니다.
- **A5 / unique-phrase.** 원본 §2 Obsidian 역할 산문 `Slightly softened from pure black for long-form reading` DESIGN dest 0 (한정 `:95`가 hyphenated mention만 가짐). 원본 §1 `calm and unobtrusive` DESIGN dest 0. 둘 다 발행 CTA가 아니라 설명문. 같은 종류의 역할 산문(`a hair warmer than pure black` dest 1 at 107, `closest thing to a "Patreon color"` dest 1 at 111)은 본문에 남아 처리가 자리마다 다르다 — wave 40 krds 항목 5 동형. 고치지 않음.
- **D1.** `DESIGN.md:513` "The source does not name a locale matrix beyond that chip." 원본이 세우지 않은 locale-matrix 도메인의 부정 claim. 언어 칩 자체는 수확된 컨트롤.
- **B1.** sibling 전용 분류 `H2` DESIGN dest 0 / prov dest 5 (mention at 115–119). `English (United States)` DESIGN dest 0. 구조 분류의 본문 승격 없음.
- **T2 곡선.** §15 cubic-bezier 값 3종은 본문 0 / `prov` 154. 역할·이름·duration은 본문에 남음. 값 소실로 되살리지 않음 (wave 39 kkday).

AUDIT_DONE fixes=12

---

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/patreon/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. provenance 본문 무변경. 한정·원장 행 추가 없음 (40=40).

### 결함 1 — D1 locale-matrix 도메인 부정 claim

원본 locale matrix 0. YAML `:52` / §4 `:188` Language / utility chip만 세움. Content `:513` 두 번째 문장 `The source does not name a locale matrix beyond that chip.`를 삭제. 칩 문장 `The language / utility chip on dark is a captured control.`은 수확 컨트롤이라 유지. 미해상은 안 적는 것.

`node scripts/check-limiter-ledger.mjs patreon` → 본문 **40** / 원장 **40** (162–201) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs patreon` → use 16/16, 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand patreon --gate-only` → PASS.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `locale matrix` | 0 | 0 | **0** | 0 | 2 |
| `does not name` | 0 | 0 | **0** | 0 | 2 |
| `locale` | 0 | 0 | **1** (`content-locales` 마커만) | 0 | 7 |
| `The language / utility chip on dark is a captured control.` | 0 | 0 | **1** | 0 | 0 |

로그 extra hits는 이 파일 분모가 아니라 migration-log §10·F2 dest 행 (E2d). provenance **0** — 원본이 세우지 않은 도메인을 원장에 재수록하지 않음.

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §10 Voice & Tone | `locale matrix` DESIGN | (행에 없음 / 본문 1) | **0** |
| §10 Voice & Tone | `does not name` DESIGN | (행에 없음 / 본문 1) | **0** |
| §10 Voice & Tone | `locale` DESIGN | (행에 없음 / 본문 2) | **1** |
| F2 | `locale matrix` DESIGN / P | 없음 | **0** / **0** |
| F2 | `does not name` DESIGN | 없음 | **0** |
| F2 | `locale` DESIGN | 없음 | **1** |

Forbidden register 줄 포인터 513→**511** (같은 §10 셀; 바늘 dest가 아님). DESIGN.md SHA `d43f626d45076f1262152e548f86c9fe5e28719efb0e26bad93a474f84731eeb` → `eee383b4128830cac06ec05af336445a08c2a0064d8ad43ba256196ba180b4ad`. provenance SHA 불변. `wc -l` DESIGN **552** 불변. `derived editorial implementation inference` **40** · `not Patreon-authored` **40** · `separately published UI specification` **42** 불변.

FIX_DONE patreon fixed=1 logdest=6
