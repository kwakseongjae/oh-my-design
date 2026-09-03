# petfriends 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/petfriends/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/petfriends/DESIGN.md`
검증 sibling: `web/references/petfriends/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v12 의 B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches found`는 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인했다.
날짜: 2026-09-03

발행 1차 UI 사양 없음(getdesign 0 files; refero no genuine entry). B2a 예문 전제(v12)가 성립하므로 toss-form close를 요구한다. 기존 한정이 그 형태로 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형(복수 주어 `they are not Pet Friends-authored`)은 완전형이다.

착수 실측: 본문 완전형 25 / 원장 데이터 행 25. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion rules `:181`의 인과 읽기는 `:159`가 system-level vs per-component만 이름하고, Family `:208` 시스템 대체 금지는 Font evidence `:202`가 폴백 비승격만 이름하며, Forbidden register `:428`은 Content `:408`이 목소리·톤 표만 이름한다. Shape `:144`는 `19px`/`50%`만 이름하고 같은 문장의 `18.5px` 세 번째 표기를 빼먹었다.

문장 분류: 브랜드 발행 사실(라벨·CTA·포지셔닝·voice samples) / 관측 기술(hex·geometry·`box-shadow: none`·YAML 키) / 편집적 해석·인과 판단(키 비병합, 커브 생략, 목적 읽기, 금지, kind/applicability). 세 번째 부류만 수정 대상. 토큰 값·컴포넌트 표·상태 applicability·구조는 건드리지 않았다. 본문 수정은 기존 줄에 한정을 접어 넣거나 같은 줄에 붙여 줄 수(466)를 유지했다.

## 수정 목록 (31건)

### B2a — 인접 한정 (본문 8건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:144` — Shape | 본문이 키워드 필 `18.5px`(원본 닫는 주석)를 세 번째 표기로 남기는데, 기존 한정은 `19px`와 `50%`만 이름함. | 기존 완전형 주어에 source-closing-comment `18.5px`를 세 번째 표기로 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:181` — Motion rules | "friendly but quick / consistent with the bright, fast commerce feel / would slow browsing"는 세 번째 부류. `:159`는 durations and rules를 system-level로 읽는 판단만 이름하고 규칙 블록의 인과를 덮지 않음(fugle `:169` 동형). | 완전형 신설(같은 줄). 발생 수 +1. durations / `motion-standard / ease-enter` / reduced-motion은 기록값으로 분리. |
| 3 | `DESIGN.md:208` — Family | "Do not replace Lific with a system substitute"는 임퍼러티브. `:202`는 증거 클래스 정렬·Noto Sans KR 비브랜드 페이스만 이름함. | 완전형 신설(같은 줄). 발생 수 +1. |
| 4 | `DESIGN.md:236` — Assets | 같은 문단의 "do not replace it with invented brand-color decoration"는 세 번째 부류. 기존 한정은 favicon identity pointer만. | 기존 완전형에 사진-장식 금지 규칙을 접어 넣음. `they are not` 복수 주어. 발생 수 +0. |
| 5 | `DESIGN.md:243` — How to read | 기존 한정은 kind/applicability만. `:245` §14 철학층 보존, C4 "open question not inert", 칩 `#000000`/`#2d3035` keep-both, 검색 20px 폰트, 필 `19px` vs `full: 9999`, 오버레이 `20px`는 세 번째 부류인데 주어 밖. | 기존 완전형에 그 판단들을 접어 넣음. 발생 수 +0. 표·applicability 칸은 수정하지 않음. |
| 6 | `DESIGN.md:401` — Responsive | `:397` "comfortably tappable"는 세 번째 부류. 기존 한정은 breakpoint / collapsing / image만. | 기존 완전형에 touch-target 읽기를 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:408` — Content voice | `:406` Hangul-vs-English reading-aid는 세 번째 부류. 기존 한정은 목소리 성격·톤 표만. | 기존 완전형에 reading-aid 규칙을 접어 넣음. 발생 수 +0. |
| 8 | `DESIGN.md:428` — Forbidden register | 원본 §10 금지 목록이 휴대 계약으로 서 있는데 한정이 없음. `:408`은 20줄 위이고 목소리·톤만 이름함. | 완전형 신설(같은 줄). 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **28**, `not Pet Friends-authored or a separately published UI specification` **28**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial implementation inference` P dest **1** = 완전형 예문 mention). `migration-log.md` `not Pet Friends-authored…` dest **1**은 헤더 toss-form mention이지 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 68, 85, 130, 144, 155, 159, 177, **181**, 202, **208**, 223, 227, 236, 243, 387, 401, 408, 410, **428**, 462.

### E1 — provenance derived 범위 (11건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | Derived editorial inventory 헤더 | 25 complete / 25 data rows. | **28** / **28**. |
| 10 | Shape 행 | `19px`와 `50%`만. 본문 `:144`가 이제 `18.5px` 세 번째 표기도 이름한다. | 그 표기를 행에 추가. |
| 11 | Motion rules 행 | 없음. 본문 `:181` 신설. | 행 신설. |
| 12 | Family 행 | 없음. 본문 `:208` 신설. | 행 신설. |
| 13 | Assets 행 | favicon identity만. 본문 `:236`이 이제 사진-장식 금지도 이름한다. | 그 판단을 행에 추가. |
| 14 | Capture / applicability 행 | kind/applicability만. 본문 `:243`이 이제 §14 철학층, C4 열린 질문, 칩 keep-both, 검색 20px, 필 `19px`, 오버레이 `20px`도 이름한다. | 그 판단들을 행에 추가. |
| 15 | Layout responsive 행 | breakpoint / collapsing / image만. 본문 `:401`이 이제 "comfortably tappable"도 이름한다. | 그 읽기를 행에 추가. |
| 16 | Content voice 행 | 목소리·톤 표만. 본문 `:408`이 이제 Hangul reading-aid도 이름한다. | 그 규칙을 행에 추가. |
| 17 | Forbidden register 행 | 없음. 본문 `:428` 신설. | 행 신설. |
| 18 | Sibling verification 문단 | keyword-pill `18.5px`를 sibling 전용·본문 비승격처럼 적었으나 본문 Shape dest **2**(원본 닫는 주석 표기 + 한정 주어). E2 불일치. | 본문 출현은 source-comment keep-both이지 sibling 승격이 아님을 명시. `체험단`은 레거시 본문 머천다이징 문자열. sibling 전용 목록에서 `18.5px`를 빼고 overlay sibling height `20px`를 레거시 radius `20px`와 분리. |
| 19 | Omission ledger sibling 행 | `keyword 18.5px`·`#f9f9f9`를 본문 비승격으로 묶음. `#f9f9f9`는 sibling에 없고 sibling은 `rgb(249, 249, 249)`. | sibling 표기로 되돌리고 `18.5px`는 source-comment 표기라고 분리. |

헤더 / 데이터 행 **25 → 28**.

### E2 / E2a / E2c / E2d / D2a — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 준수 주장은 본문 실재 후에만.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 20 | 헤더 toss-form `(25=25)` | 감사 후 본문 28. | `(28=28)`. |
| 21 | YAML family + §3 Font Family 행 | dest를 Font evidence `:202`만 적음. Family `:208` 한정이 없음. | `DESIGN.md` 208 B2a를 두 번째 dest로 병기(E2a). |
| 22 | YAML rounded + §5 행 | `19px`와 Full 50% keep-both만. 본문 `:144`가 `18.5px`를 이름한다. | 세 표기와 144 B2a dest를 적음. |
| 23 | YAML identity 행 | Assets `:236`을 favicon 제외만으로 적음. | 236 B2a가 사진-장식 금지도 이름함을 병기. |
| 24 | §8 Responsive 행 | 401 B2a를 breakpoint/redirect만으로 적음. | "comfortably tappable" dest를 병기. |
| 25 | §10 Voice 행 | 410 B2a(플레이스홀더 분리)만. 408·428 한정이 로그 dest에 없음. | 408 Hangul reading-aid, 428 Forbidden register dest를 병기. |
| 26 | §13 Personas 행 | 삭제 처분 행이 식별자 이름을 다시 열거한 채 「본문·원장 0회」를 단언(D2a + E2d). | 무식별로 다시 씀. 필드 종류(이름·나이·도시·전기·동기·소속 분류)만 남김. Audience dest `Korean dog and cat owners buying food and supplies online` DESIGN 1 / source 1은 유지. |
| 27 | §14 applicability 행 | dest를 `:243` coverage 부정만으로 적음. | 243 B2a가 실제로 이름하는 keep-both·C4·§14 철학층을 dest에 적음. |
| 28 | §15 Motion rules 행 | "규칙 6항"만. 181 B2a dest 없음. | 181 dest와 `:159`가 규칙 인과를 덮지 않음을 적음. |
| 29 | Sibling 행 | `keyword 18.5px`·`avatar #f9f9f9`를 본문 비승격 sibling 전용으로 적음. `18.5px` DESIGN dest 2. `#f9f9f9` sibling dest 0. | sibling 표기 `rgb(249, 249, 249)`로 되돌리고, 본문 `18.5px`는 원본 닫는 주석 표기라고 분리. |
| 30 | 규칙 대조 B2a | 완전형 25회 / 원장 25행. | 28회 / 28행. 신설 3자리 기록. |
| 31 | A5a dest 표 | 본문 수정 후 미재실측이면 lablup E2. | 감사 후 재실측: 발행 바늘 26 / 3파일 연합 미생존 0. sibling 전용 3건 DESIGN dest 0 / provenance Raw samples dest 1. 발행 카피 dest 변동 없음. |

E2c 유지 확인: B3 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest **2** (`:179`, `:464`). 로그가 2회를 주장하는 행과 일치. cubic-bezier DESIGN dest **0**(파일 존재 확인 후 무매칭). 역할 3행·duration 3행은 본문에 실재.

## 범위 밖 관찰

- **A1 키 경로.** YAML `tokens.components` 7키의 각 필드(`type`/`bg`/`fg`/`radius`/`padding`/`height`/`border`/`font`/`use`)는 대응 컴포넌트 블록에 **행으로** 있다. 값 grep만으로 보존을 읽지 않았다. `card-product`에 `fg`가 없는 것은 원본 YAML에도 없어서 손실이 아니다. typography YAML `use` 6종은 Type roles Use 열에 있다(`emphasis`/`discount`의 hex는 마크다운 백틱 포장, 키 경로는 Use 열). 복원 없음.
- **A5a 게이트 coverage.** 이관 디렉터리에 `--gate-only` 산출이 없다. 이 세션에서 게이트를 돌리지 않았다. 손 대조 분모는 로그의 26/26이며, 감사 재실측도 26/26이다. `verdict: PASS`를 「카피 보존됨」으로 읽지 않았다. 라틴 발행 카피 손실은 보이지 않았다(발행 바늘이 한국어 라벨·CTA·포지셔닝).
- **B1 sibling 전용 분류.** `product H3` SRC 1 / SIB 1 / DES 1 — 원본 닫는 주석과 sibling 양쪽의 구조 관측이라 sibling-only 승격이 아니다. `portal H2` 세 파일 0. `14.5px` DESIGN dest 0. `사료샘플`/`터키츄`/오리젠 표본 DESIGN dest 0, provenance Raw samples dest 1.
- **D2a 본문.** 식별자 이름 본문 0 / 원장 0(로그는 #26에서 무식별화). 페르소나 동기·소속 분류의 신규 재구성(`Solutions Partner agencies` 류) 본문 0. Primary tasks는 검색/칩/담기 표면이지 페르소나 동기가 아니다. 원형 라벨은 원본에 없어 로그 삭제 행에 적을 대상이 없다.
- **같은 hex 다른 역할.** `#ffffff`는 `tokens.colors.canvas`와 `tokens.colors.on-primary` 두 키(본문 path dest 각 3). `#000000`는 ink-pure와 칩 YAML `fg`. 이 분리는 감사 전부터 provenance Proof notes에 적혀 있어 E1 추가는 하지 않았다.
- **충돌 처리 일관성.** 키워드 필 `19px` / 닫는 주석 `18.5px` / §5 Full `9999px / 50%`는 한쪽으로 고치지 않고 병기. 칩 텍스트 YAML `#000000`과 라이브 라벨 `#2d3035`도 병기. Warning-삭제 vs radius-한쪽수정 같은 자리별 정책 분열은 없다.
- **T2 관례.** §15 커브 값은 본문 0, 역할·duration은 본문에 남음. 값 소실로 되살리지 않았다. 원본에 모션 규칙이 있으므로 `intentionally omitted rather than synthesized` 자기 진술은 없다.
- **E2d.** 곡선 삭제 행은 분모를 DESIGN.md로 한정하고 원장 자신에 verbatim 보관을 명시한다. 감사 전 §13 로그 행만 자기모순이었고 #26에서 고쳤다.

AUDIT_DONE fixes=31

## Mechanical correction (use-landing)

Gate already PASS; limiter already 1:1 (본문 28 / 원장 28, heading `## Derived editorial inventory`, header `| Location in DESIGN.md | Qualified reading |`). `portable_core` already true. Body claim sentences not rewritten. No limiter was missing; no DESIGN.md qualifier attached. Tokens / component tables / applicability / source / CURRENT_STATE / JOURNAL not edited.

Cause: YAML `tokens.typography.emphasis.use` (`Emphasized phrase inside a heading, pink #ff4081`) and `tokens.typography.discount.use` (`Discount percentage, signal red #f33f46`) were not a contiguous byte match in portable DESIGN.md. Existing Type-roles Use cells wrapped the hex in backticks (`pink `#ff4081`` / `red `#f33f46``), so `includes()` missed the YAML form. The other 11 YAML `use` strings already dest 1.

### Fixes

1. **DESIGN.md Type roles `:214`–`:215` (착지).** Class: YAML `use` landing, not a new limiter. Inserted `Token-set use: Emphasized phrase inside a heading, pink #ff4081` and `Token-set use: Discount percentage, signal red #f33f46` immediately above the keep-both Use table. Dual-form Use cells at 220/221 kept (backticked hex). Token values / applicability table untouched. Python `str.count` DESIGN dest **1** each (was 0). Backticked Use-cell forms remain dest 1 and are not that byte string.

2. **provenance.md Derived editorial inventory Locations (원장, 줄만).** Two insertions sit after Type roles intro `:212` and before the type-role table. Data-row count unchanged (28). Location pointers after the insert remapped to the same qualifier sentences: Type roles `:223`→`:226`; Typography rules `:227`→`:230`; Assets `:236`→`:239`; Capture `:243`→`:246`; Layout whitespace `:387`→`:390`; Layout responsive `:401`→`:404`; Content voice `:408`→`:411`; Content placeholders `:410`→`:413`; Forbidden register `:428`→`:431`; Named gaps `:462`→`:465`. Heading remains `## Derived editorial inventory`; header remains `| Location in DESIGN.md | Qualified reading |`. No extra/missing row.

3. **migration-log.md dest 재실측 (E2a).** YAML `emphasis`/`discount` `use` verbatim dest 1 at 214/215. Type roles B2a 226. Typography rules 230. Assets 239. Capture 246. Product Card pairing 336 (was 333). State table 363–373. Layout 390/404. Content 411/413/431. B3 179, 467 (was 179, 464). Forbidden-register B2a list `:431`. Body/display YAML `use` without hex already dest 1 in the Use column.

Limiter still 28:28. No governance claim rewrite. 줄 수 DESIGN **469** (착수 466 → Token-set use 행 +2 + 구분 공행 +1).

검증:
- `node scripts/check-limiter-ledger.mjs petfriends` → 본문= 28 원장= 28 (178–205) 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list petfriends` → use 13/13 (100%) 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand petfriends --gate-only` → PASS, problems []

FIX_DONE petfriends mech
