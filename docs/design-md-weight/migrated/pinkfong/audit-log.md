# pinkfong 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/pinkfong/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/pinkfong/DESIGN.md`
검증 sibling: `web/references/pinkfong/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-03

발행 1차 UI 사양 없음. YAML `ds.type: brand`이고 identity page는 public product-component specification이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not The Pinkfong Company-authored or a separately published UI specification`을 요구한다. 기존 21건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 21 / 원장 21. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:11`의 corporate-shell / identity-versus-shell / selector-backed-not-blanket / display-family-off-UI-family / 2026-07-13-selector-only는 세 번째 부류인데 `:9` 한정이 앞 단락이고 토큰 표면 선정만 이름한다. Distinctive `:32`는 restatement만. Semantic `:78`은 역할 페어링·`#08c7ff`·`#8c8c8c`만 이름하고 BI-not-palette를 빠뜨렸다. Spacing `:89`와 Layout `:269`는 no-generic-card-rule을 한정이 이름하지 않는다. Capture `:162`는 kind/applicability만 이름하고 collector-label≠`focus-visible`을 말하지 않으며, 한정이 "The following"인데 그 노트는 위에 있다.

로그 E2: YAML `use` 3문자열을 dual dest로 적었으나 provenance dest **0**(fitpet형 2차 목적지 과대). `type: brand`와 typography token-set path는 DESIGN+provenance 양쪽인데 로그가 DESIGN만 적음(E2a).

토큰 값·컴포넌트 표·상태 applicability·구조는 수정하지 않았다. 본문 한정은 기존 줄에 접거나 같은 줄 끝에 붙였다. 줄 번호는 유지.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 6건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | corporate shell rather than universal consumer-product interface, identity-asset vs captured-shell distinction, selector-backed-not-blanket, display family off UI family, machine tokens only where 2026-07-13 supplies a selector — 세 번째 부류. `:9`는 앞 단락이고 토큰 표면 선정만. | 완전형 신설. 발생 수 +1. hex·공식 폰트명을 다시 적지 않음. |
| 2 | `DESIGN.md:32` — Distinctive traits | 기존 한정은 restatement / groupings만. 불릿의 selector-backed-not-blanket와 display-family-off-UI-family는 세 번째 부류. | 기존 완전형에 두 읽기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:78` — Semantic color | BI downloads as asset availability rather than a UI palette는 세 번째 부류. 기존 한정은 역할 페어링·`#08c7ff`·`#8c8c8c`만. `:149`는 Assets 절이라 인접하지 않다. | 기존 완전형에 BI-not-palette를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:89` — Spacing | "no generic card or page-spacing rule is inferred"는 세 번째 부류. 기존 한정은 YAML/px 비병합과 xs≠compact, action≠pill만. | 기존 완전형에 control-local padding을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:162` — Capture record | collector labels ≠ `focus-visible` treatment는 세 번째 부류. 기존 한정은 kind/applicability만 이름하고 "The following"인데 노트는 위에 있다. | "The preceding"로 고치고 collector-label versus `focus-visible` evidence-class split을 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:269` — Layout | no-generic-card-rule 재진술은 세 번째 부류. 기존 한정은 desktop capture / 1440×900-as-viewport만. | 기존 완전형에 control-local padding을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **22**, `not The Pinkfong Company-authored` **22**, `separately published UI specification` **22**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial` P dest **0**). `migration-log.md` mention은 use가 아니다.

한정 줄: 9, **11**, 13, 19, 28, 32, 42, 50, 63, 78, 89, 93, 97, 103, 111, 128, 132, 149, 162, 269, 276, 310.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | 헤더 / 행 수 | 21 complete / 21 data rows. | **22** / **22** at 159–180. |
| 8 | Experience Scope `:11` | 없음. 본문 `:11` 신설. | 행 신설. |
| 9 | Distinctive traits `:32` | restatement만. 본문 `:32`가 이제 selector-backed-not-blanket / display-family-off-UI-family도 이름한다. | 그 판단을 행에 추가. |
| 10 | Semantic color `:78` | 역할·비병합만. 본문 `:78`이 이제 BI-not-palette도 이름한다. | 그 판단을 행에 추가. |
| 11 | Spacing `:89` | YAML/px 비병합만. 본문 `:89`가 이제 control-local padding도 이름한다. | 그 판단을 행에 추가. |
| 12 | Capture `:162` / Layout `:269` | kind/applicability만 · desktop/viewport만. | collector-label versus `focus-visible`; control-local padding. |

### E2 / E2a / E2c — 로그 목적지 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | YAML `ds.type: brand` | DESIGN dest 1만. 실측 DESIGN dest **1** / P dest **1** (`ds.type: brand` 접두 포함). | P dest **1** (E2a). |
| 14 | YAML typography `use` 3문자열 | "verbatim dual dest". 실측 DESIGN dest **1** each / P dest **0**. | dual dest 취소. DESIGN dest 1 / P dest 0. |
| 15 | typography token-set paths | "each DESIGN dest 1"만. 실측 각 전체 경로 DESIGN dest **1** / P dest **1** (claim ledger). | P dest **1** (E2a). |
| 16 | §1 Visual Theme | qualified at 9만. 본문 `:11` 신설, `:32` 범위 확대. | qualified at 11 · Distinctive 32가 두 읽기를 이름함. |
| 17 | §12 Principles | inventory 21 data rows. | **22** data rows at 159–180. `derived editorial implementation inference` DESIGN dest **22** / P dest **0**. |
| 18 | §5 Layout | Qualified at 269만. | control-local padding도 Spacing 89에서 이름함. |
| 19 | §2 Color | Qualified at 78만. | BI-not-palette named at 78. |
| 20 | §14 applicability | qualifier at 162. `focus-visible` dest 미기재. 본문 수정 후 DESIGN dest **7** / P dest **5**. | 한정이 collector-label versus `focus-visible`를 이름함. dest 7 / 5 (E2a). 한정·원장 mention은 treatment value가 아님. |

본문 수정 뒤 재실측한 dest(로그와 일치, 변하지 않은 바늘): `#ff66af` DESIGN 9 / P 2 · `#ffffff` 7 / 1 · `#000000` 4 / 1 · `#5a5a5a` 3 / 1 · `#08c7ff` 3 / 1 · `#8c8c8c` 2 / 1 · `Spoqa Han Sans Neo` 15 / 5 · `Pinkfong Baby Shark Font` 19 / 4 · `더핑크퐁컴퍼니` 3 / 2 · `1440×900` 2 / 1 · `tokens.spacing.xs: 8` 4 / 2 · `swiper-icons` DESIGN dest **0** / P dest **1**. A5a 표의 발행 라벨 dest는 본문 한정이 hex·공식명을 재수록하지 않아 그대로다.

E2c: B3 전문 `DESIGN.md` 103 (`transition properties` dest 1 · `animation name` dest 1 · `duration` dest 3 · `easing` dest 3 · `reduced-motion behavior` dest 1, plus per-component computed-observation gate and partial-confirmation clause). Principles 형태 `:42` dest 1. 준수 주장 유지.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 21개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- Motion "intentionally absent"는 원본 §15에 규칙이 없는 브랜드의 모범 표기(wave 39 kmong). 합성을 유도하지 않음.
- `loading \| not-applicable` 표 행 3+3+3=9 / `applicable` 0. default/hover/focus-visible/disabled `applicable` 12. Mobile-menu dialog kind/map 생략(C4).
- `live-extract` DESIGN dest 0 / P dest 0. `components_harvested` DESIGN dest 0 / P dest 2. `FILL IN` dest 0.
- `cubic-bezier` DESIGN dest 0 / P dest 1 (omission ledger — 원본에 무출처 커브가 없어 삭제할 것이 없었다).
- E2d: 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN/P를 분모로 두고 로그 자신을 넣지 않는다. provenance `No focus-visible treatment value appears in the portable body`의 분모는 portable body.
- D2a 처분 행(`provenance.md` Omission ledger Source §13)은 절·필드 종류만. 이름·나이·도시·전기를 Item에 옮기지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — The Pinkfong Company / 더핑크퐁컴퍼니 / Pinkfong / Baby Shark / Bebefinn / Pinkfong Baby Shark Font / 공식 미션 `connect people through joyful content and entertaining experiences` / `content that connects people through joy` / 2025 font release · 9-language · 13,200 · fin-inspired form / YAML `use`·`states` 문자열 / §7 Do/Don't / §12 세 원칙 줄기.
- **관측 기술** — `#ff66af` `#ffffff` `#000000` `#5a5a5a` `#08c7ff` `#8c8c8c` · Spoqa Han Sans Neo loaded · computed `BabyShark` 48px/700/48px · unitless `1.5715` / `16` / `38` / `48` · `32px 15px` / `4px 20px` / `30px 15px` · `box-shadow: none` · `Primitive type` · selectors `data-omd-capture` · 1440×900 collector viewport.
- **편집적 해석·인과 판단** — 세 라우트를 토큰 표면으로 읽기, English/identity/font를 토큰이 아닌 named source로 두기, corporate shell ≠ universal consumer UI, identity asset ≠ app type scale, selector-backed ≠ blanket, display family off UI family, 2026-07-13 selector-only 유지, 서사를 brand context로 분류, primary tasks 선정, 페르소나 비승격, Key Characteristics restatement, 원칙·Do/Don't·§9 unique constraints, 역할 페어링·`#08c7ff`/`#8c8c8c` 비승격·BI-not-palette, spacing/shape 비병합, elevation 로컬 관측, B3 게이트, font class sorting, Family 경계, YAML/표 keep-both, favicon catalog pointer, applicability·Focus≠focus-visible·omit-kind, desktop capture ≠ cross-viewport spec, optimistic/clear voice, Named gaps as unnamed values.

세 번째 부류 중 21곳은 착수 시 인접 완전형이 있었고, 그중 5곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 1곳(Scope `:11`)은 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** (unquoted `더핑크퐁컴퍼니`라 바늘 집합이 비어 있음). `verdict: PASS`가 있었다면 「대조한 바늘 중 잃은 것이 없다」이지 카피 보존이 아니다. 손 대조 발행 라벨 10종(The Pinkfong Company / 더핑크퐁컴퍼니 / Pinkfong / Baby Shark / Bebefinn / Pinkfong Baby Shark Font / BabyShark / Spoqa Han Sans Neo / connect people through joyful content and entertaining experiences / content that connects people through joy)은 DESIGN dest ≥1. YAML `use` 7 / 0 missing. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **A1 키 경로.** 원본 YAML `tokens.components.<id>.<field>` 전수: corporate-primary-action·family-site-pill·business-outline-action의 type/bg/fg/radius/padding/font/states/use가 각 블록에 `Primitive type` / Background / Text / Radius / Padding / Font / Token-set states / Token-set use 행과 전체 경로 행으로 있다. mobile-menu-dialog는 YAML에 radius·states가 없고 산출도 그 경로를 만들지 않음(DESIGN dest 0 / SRC dest 0). icook형 hex-elsewhere 소실은 없음. `4px 20px` SRC dest 2 / DESIGN dest 1은 YAML과 §4가 동일 문자열이라 블록에 한 행으로 남은 T2 관례이지 필드 소실이 아님. 고치지 않음.
- **B1.** sibling 전용 `documentation chrome` DESIGN dest 0 / P dest 1. `public corporate marketing` DESIGN dest 0 / P dest 1. `82px` / `19px` / `swiper-icons` / `Pretendard` / `pbs-light.otf` full URL DESIGN dest 0. `H3`/`h3`/`portal H2` DESIGN dest 0. `kind=product-surface`는 Core claim 주석이지 sibling 구조 분류 승격이 아님. 값·섹션 표제 분류 침투 없음.
- **D2a.** 식별자(이름·나이·도시) DESIGN/P/L dest 0. 동기·소속 분류 신조어 dest 0. Audience는 원본 그룹 **kids and families worldwide**만(원본 §13 dest 1 / 산출 dest 2). gitlab형 동기 잔존·hubspot형 소속 신조어 없음. `affiliation`/`motivation`은 무식별 필드 종류 표기. 원형 라벨을 D2a로 지목하지 않음.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음.
- **`#ffffff` 역할 분리 (wave 39 krafton 보고).** 같은 hex가 Canvas(family-site pill / business outline / mobile-menu bg)와 Corporate primary action Text에 붙는다. 원본 YAML이 `tokens.colors.canvas`와 `corporate-primary-action.fg`로 갈랐고, claim ledger도 color 행과 component fg/bg 행으로 가른다. 원장에 없는 파생 분리는 아님. 고치지 않음.
- **충돌 처리 일관 (wave 40 krds 항목 5).** YAML unitless와 §3/§5 px keep-both는 Spacing·Shape·Type roles에서 같다. Warning/radius를 자리마다 다르게 처리한 충돌은 없음.
- **열 구조 (wave 40 krds).** 토큰명 경로(`tokens.colors.primary` 등)와 귀속 수식어(corporate-action, not muted)가 본문에 남아 있다. 값만 남고 열이 사라진 자리는 없음.

AUDIT_DONE fixes=20

---

## 기계검사 정정 — portable_core actionable_foundations_or_known_constraints (2026-09-03)

검사 출력: limiter 22=22 1:1 OK · use 4/4 OK · gate PASS · `portable_core=false failed=actionable_foundations_or_known_constraints`.

원인: Foundations claim Spacing `:89`의 드리프트 복제 문장 `The measured controls preserve their own padding; no generic card or page-spacing rule is inferred.` 가 `explicitlyNegatesClaim('foundations')`에 걸림. `no` 뒤 32자 안에 `\brule\b` (`no generic card or page-spacing rule`). 같은 문장에 evidence-boundary 어휘(`verified` / `capture` / `derived editorial` / `-authored`)가 없어 ATTRIBUTED 가드가 못 막음.

한정이 빠진 자리가 아님 — 본문 완전형 22 / 원장 22 유지. 헤더 `## Derived editorial inventory` / `| Location in DESIGN.md | Qualified reading |` 22행 (159–180) 유지. 7앵커·governance 정본 문안(authority / application-priority / unknowns / changes)은 이미 바이트 동일 — 되돌릴 자리 없음. 토큰 값·컴포넌트 표·상태 applicability·원본·원장 행 내용(줄 번호 포함) 미수정. 원문 문장을 고쳐 쓰지 않음 (E3).

정정: 그 한 문장만 foundations claim에서 제거. 원본 §5 바이트 `The measured controls above preserve their own padding; no generic card or page-spacing rule is inferred.` 는 Layout `:265`에 그대로 남음 (claim 밖). Spacing `:89` B2a는 같은 읽기(`keeping measured control padding as control-local rather than inferring a generic card or page-spacing rule`)를 이미 이름하므로 한정 신설 없음. 시각 줄 수 DESIGN **317** 유지.

판정 근거 (행):
- Spacing `:89` — YAML/px 비병합·xs≠compact·action≠pill 한정이 claim 본문. 드리프트 복제(`above` 탈락)만 제거. 원장 유지.
- Layout `:265` — 원본 §5 완전 문장. claim 밖. 원장 유지.
- Layout `:269` — desktop capture / 1440×900-as-viewport / control-local padding 한정. 원장 유지.
원장 병합·삭제 0. 본문 한정 신설 0.

실측 (`python` substring count, 파일별; `grep -c` 미사용):

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `The measured controls preserve their own padding; no generic card or page-spacing rule is inferred.` | 0 | **0** | 0 | 0 |
| `The measured controls above preserve their own padding; no generic card or page-spacing rule is inferred.` | 1 | **1** | 0 | 1 |
| `no generic card or page-spacing rule is inferred` | 1 | **1** | 0 | 1 |
| `generic card or page-spacing rule` | 1 | **3** | 2 | 2 |
| `derived editorial implementation inference` | 0 | **22** | 0 | 1 |
| `not The Pinkfong Company-authored or a separately published UI specification` | 0 | **22** | 0 | 0 |

`generic card or page-spacing rule` DESIGN 3 = Spacing 89 B2a + Layout 265 원문 + Layout 269 B2a. provenance 2 = inventory Spacing `:89` + Layout `:269`.

검증:
- `node scripts/check-limiter-ledger.mjs pinkfong` → 본문 22 = 원장 22 (159–180) 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list pinkfong` → use 4/4 (100%) 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand pinkfong --gate-only` → PASS, problems `[]`
- `inspectDesignMd` → `portable_core: true`, failed `[]`

줄 수 DESIGN **317**. provenance **192**. 원본·CURRENT_STATE 미수정.

FIX_DONE pinkfong mech
