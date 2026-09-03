# modusign 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/modusign/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/modusign/DESIGN.md`
검증 sibling: `web/references/modusign/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Modusign-authored or a separately published UI specification`을 요구한다. 기존 25건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 25 / 원장 25. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:9`는 URL·blog·primary_color·live-extract만 이름하고 같은 문단의 values-stay-attached를 빠뜨렸다. Application rules `:56`은 Do list만 이름하고 §9 once-per-viewport를 빠뜨렸다. Semantic `:87`은 canvas≠surface만 이름하고 `#ffffff`의 컴포넌트 fill/label 분리를 빠뜨렸다. Spacing `:132`는 unitless/비병합만 이름하고 80/52/44/38 local geometry를 빠뜨렸다. Motion `:173` 커브 생략은 세 번째 부류인데 `:163` 한정이 표 앞이고 durations/roles/rules만 이름한다(kyobobook `:186` 동형). Font evidence `:204`는 specimen/upstream/no-type-token만. Type principles `:234`는 “those principles”만. Capture `:266`은 kind/applicability만 이름하고 system-level 처리와 YAML `disabled` inactive-label을 빠뜨렸다. Content `:621`은 tone table만 이름하고 forbidden-register를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(미션·비전·CTA·YAML 값) / 관측 기술(hex·geometry·`box-shadow: none`) / 편집적 해석·인과 판단(키 비병합, 커브 생략, 과제 선정, kind/applicability). 세 번째 부류와 원장 정확성만 수정. 토큰 값·컴포넌트 표·상태 applicability·구조는 그대로.

## 수정 목록 (30건)

### B2a — 인접 한정 (본문 9건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Scope ¶1 | “Values stay attached to the surface and the writing that established them”는 세 번째 부류. 기존 한정은 URL/blog/primary_color/live-extract만. | 기존 완전형에 values-stay-attached를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:56` — Application rules | §9-only once-per-viewport 문장을 Do list에 둔 것은 세 번째 부류. 기존 한정은 “these rules”만. | 기존 완전형에 §9-only once-per-viewport를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:87` — Semantic color | `#ffffff`가 canvas / secondary fill / stepper fill / toggle-active / sub-tab selected / on-dark·plan·gov label text로 갈리는 것은 세 번째 부류. 기존 한정은 canvas≠surface만. | 기존 완전형에 그 분리를 접어 넣음. hex를 다시 쓰지 않음(DESIGN dest 불변). 발생 수 +0. |
| 4 | `DESIGN.md:132` — Spacing | 80px / 52px / 44px / 38px를 spacing-scale이 아닌 local geometry로 읽는 것은 세 번째 부류. `:134`에 읽기가 있고 `:132` 한정이 그것을 이름하지 않음. | 기존 완전형에 local-geometry를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:173` — Motion easing omission | “not traceable… so the curves are omitted”는 세 번째 부류. `:163`은 표 앞이고 생략을 이름하지 않음. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:204` — Font evidence | no exclusive family / no declared-only / no license notice는 세 번째 부류. 기존 한정은 specimen / upstream / no-type-token만. | 기존 완전형에 세 class 해상도를 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:234` — Type principles | 네 줄기(one family two weights / generous 1.4 / global -0.4px / size does the talking)는 세 번째 부류. 기존 한정은 “those principles”만. | 기존 완전형에 네 줄기를 접어 넣음. 발생 수 +0. |
| 8 | `DESIGN.md:266` — Capture record | §14 treatments at system level rather than per-control, YAML `disabled` as inactive-label은 세 번째 부류. 기존 한정은 kind/applicability/role reasons만. | 기존 완전형에 두 읽기를 접어 넣음. 발생 수 +0. |
| 9 | `DESIGN.md:621` — Content | forbidden-register 단락은 세 번째 부류. 기존 한정은 characterization / register / tone table만. | 기존 완전형에 forbidden-register를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **26**, `not Modusign-authored` **26**, `separately published UI specification` **26**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived` P dest **1**). `migration-log.md` mention dest **2**는 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 56, 70, 87, 132, 146, 159, 163, 173, 181, 204, 211, 215, 234, 243, 244, 266, 597, 599, 621.

### E1 — provenance derived 범위 (7건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | 헤더 | 25 complete / 25 data rows. | **26** / **26**. |
| 11 | Scope ¶1 행 | URL/blog/primary_color/live-extract만. 본문 `:9`가 이제 values-stay-attached도 이름한다. | 그 판단을 행에 추가. |
| 12 | Semantic color 행 | canvas≠surface만. 본문 `:87`이 이제 `#ffffff` 역할 분리도 이름한다. | 그 분리를 행에 적음(E1; krafton hex 귀속). 본문 역할은 고치지 않음. |
| 13 | Motion curve omission 행 | 없음. 본문 `:173` 신설. | 행 신설. |
| 14 | Font evidence 행 | specimen / upstream만. 본문 `:204`가 이제 no-type-token / no exclusive / no declared-only / no license도 이름한다. | 그 판단을 행에 추가. |
| 15 | Family 행 | sole family / fallback만. 본문 `:211`이 이미 refusing a second display font를 이름한다. | 그 판단을 행에 추가. |
| 16 | Capture 행 | YAML disabled / kind/applicability만. 본문 `:266`이 이제 system-level treatments도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **25 → 26** at 178–203 (E1 1:1).

### A1 — 키 경로

10 YAML 레코드 `tokens.components.<id>.<field>`를 대응 블록에서 **행으로** 대조. 값 grep 「어딘가에 있다」로 대체하지 않음.

| id | 필드 | 대응 행 |
|---|---|---|
| button-primary | type/bg/fg/border/radius/padding/height/font/use | Primitive type · Background · Text · Border `1px solid` + `#ffc533` · Radius/Padding/Height YAML 병기 · Font YAML `16px / 700 Pretendard` · Token-set use |
| button-secondary | type/bg/fg/border/radius/padding/height/font/use | 동형. Border `1px solid` + `#cccccc` |
| button-dark | type/bg/fg/radius/padding/height/font/use | YAML에 border 키 없음 — 발명 없음 |
| button-plan-blue | type/bg/fg/radius/padding/height/font/use | 동형 |
| button-gov-navy | type/bg/fg/radius/padding/height/font/use | Padding YAML `8px 24px` · Height YAML `44px`가 이 블록에 있음 |
| input-stepper | type/bg/fg/border/radius/height/font/use | Font YAML `16px / 400 Pretendard` · Border `1px solid` + `#e6e6e6` |
| card-step | type/bg/fg/border/radius/padding/use | Padding YAML `24px 24px 36px`. kind/map 없음 (C4) |
| banner-cta | type/bg/fg/border/radius/padding/use | Border `1px solid` + `#ffb90a`. kind/map 없음 (C4) |
| toggle-billing | type/active/disabled/use | YAML `active` 행 · YAML `disabled` inactive-label 행. 그 값이 disabled-state paint가 아님을 같은 블록이 적음 |
| tab-industry | type/active/disabled/use | 동형 |

YAML `border: "1px solid #ffc533"` 연속 문자열은 마크다운 백틱으로 `1px solid` + `#ffc533`로 갈라져 있다. Border **행**은 해당 블록에 있고 hex가 다른 블록에만 있는 icook형이 아니다. 복원 없음.

타이포 10역할은 Type roles 표의 그 행에 size/weight/lineHeight/tracking/`use`가 있다. 색 24키는 Semantic color에 `tokens.colors.<k>` 경로와 hex가 함께 있다.

### E2 / E2a / E2c — 로그 목적지 (14건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -oF -- | wc -l`로 확인했다. 본문 한정 확장 후 dest가 바뀐 바늘은 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | YAML identity 행 | 모두싸인 DESIGN dest “in Scope 9/13”; `display_name_kr` provenance dest 1 at 11; `#fed05f` dest ≥1. 실측 모두싸인 DESIGN dest **11** / P dest **9**. 필드명 `display_name_kr` DESIGN dest **0** / P dest **2** at 11/25. `#fed05f` DESIGN dest **15** / P dest **6**. | dest를 출현 수로 고침. |
| 18 | YAML metadata 행 | Exact `tokens.source: live-extract` DESIGN dest **2**; provenance dest **13**. 실측 exact DESIGN dest **1** at 9 / P dest **3**. dest 13은 단어 `live-extract` P dest. | exact와 단어를 분리. P 줄은 inventory 삽입 후 **91/208/212**. |
| 19 | YAML spacing/rounded 행 | 일곱 spacing 경로를 dest 1로 묶음. `tokens.rounded.full: 100` dest **2**. 실측 `xs: 4` **1** · `sm: 8` **2** · `md: 12` **2** · `base: 16` **3** · `lg: 24` **2** · `xl: 30` **1** · `xxl: 36` **2**. `tokens.rounded.full: 100` dest **1** at 146. 80px dest **3** (한정 확장 후). | 경로별 dest. |
| 20 | YAML components 행 | `Not in the token set` dest 5 at 484/506/528/548/565. 실측 **485/507/529/549/566**. | 줄 번호. |
| 21 | YAML family 행 | Pretendard dest ≥1. 실측 dest **43**. | dest **43**. |
| 22 | YAML type-roles 행 | `700 active / 400 inactive` dest **1**; `400–500` dest **1**. 실측 각 dest **2** (표 + `:215` 한정). | dest **2**. |
| 23 | §3 행 | qualifier at 216/235. 실측 Type roles **215** / Type principles **234**. | 줄 번호. |
| 24 | §5 행 | conversion-first dest 587–591, qualifier 593. 실측 dest **593–595**, qualifier **597**. | 줄 번호. |
| 25 | §8 행 | qualifier at 595. 실측 **599**. | 줄 번호. |
| 26 | §11 행 | 320,000 dest 1; 9.6 million dest 1. 실측 각 dest **2**. | dest **2**. |
| 27 | §12 행 | inventory 172–202 (25 data rows). 실측 데이터 **178–203** (26행). | 범위·계수. |
| 28 | §15 행 | `nothing bounces` dest ≥1. 실측 `Nothing bounces` dest **1**; lowercase dest **0**. 커브 생략 한정 `:173` 누락. | 대소문자 dest. `:173`을 2차 목적지로 적음(본문 dest **1**). `cubic-bezier` DESIGN dest **0**의 분모는 DESIGN.md (E2d). |
| 29 | Deviations | `wc -w` 8,963; B2a dest 25; worker SHA만. | `wc -w` **9,117**. B2a dest **26**. Auditor DESIGN SHA `c676fe0b1d5c912c89d12c82f54becf48fe5c2bd7a571d647e773a9a49662bea` · P SHA `4292780b9b87b5452978096b59de2a853db13617ca5e65bbe9034a095a458250`. |
| 30 | F1 / F2 | Count 25. 본문이 이제 이름하는 values-stay-attached / once-per-viewport / `#ffffff` 분리 / local geometry / curve omission / font classes / four type stems / system-level+disabled / forbidden-register를 목록이 빼 둠. dest를 착수 숫자로 적음. | 목록을 본문에 맞춤. Count **26**. F2 dest 재실측. |

Destination SHA DESIGN auditor `c676fe0b1d5c912c89d12c82f54becf48fe5c2bd7a571d647e773a9a49662bea`. 줄 수 DESIGN `wc -l` **707** 불변. provenance 213→**214**.

## 수정하지 않은 것 (검토 후 위반 아님)

- **A1 Border 연속 문자열.** YAML `"1px solid #ffc533"`이 산출에 백틱으로 갈라져 있으나 Border 행은 그 블록에 있다. 값 소실이 아니다.
- **§15 곡선 값.** `cubic-bezier(...)` DESIGN dest **0**. 역할 표와 duration은 본문에 남고 곡선 숫자는 인용되지 않는다. 원본에 있어도 “unattributed → omit as promoted value”는 T2 관례(kkday). 되살리지 않음.
- **원본에 없는 규칙의 자기 진술.** 모션 승격 게이트 다섯 증거 종류는 B3 전문으로 본문에 있다. 합성을 유도하지 않음.
- **D2a.** 삭제 처분 행은 `§13 페르소나 4인 (이름·나이·도시 포함)` 무식별. 식별자·동기·소속 분류 문자열 세 파일 dest **0**. Audience는 원본 §13 헤더 원형 라벨(HR/legal teams / SMB operators / public-sector administrators) src 1 / dest 1 — 원형 라벨은 게이트 copy-loss가 요구하는 기록이다. Primary tasks에 전기 문구 없음.
- **E2d.** 부재 단언은 DESIGN dest 0만 가리킨다. 그 단언 행이 세 파일 부재를 주장하며 문자열을 나열하지 않는다.
- **B1 sibling 전용.** `모두싸인 요금제` / `요금제별 기능 비교` / `AI 계약 관리 솔루션 모두싸인 캐비닛` / `1년~50%할인` / `모두싸인 도입 문의` / `rgb(225,223,255)` / `rgb(233,242,255)` DESIGN dest **0**. 본문의 H1/H2/H3는 원본 §3 Notes·§10 voice samples 표기다. sibling 전용 분류 승격 없음.
- **충돌 처리.** YAML/§3 가중·px/unitless keep-both를 Caption·Tab Label·type table에서 같은 정책으로 적용. 자리마다 다른 처리 없음.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **35** / candidates **229**. `compared < candidates`이므로 바늘 밖 손 대조가 의무다. 로그 손 스윕: published labels 31 extracted / 0 missing; YAML `use` 20 / 0; sibling issued 8 / 0 from the three-file set (provenance 보유, 본문 미승격). `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다. 발행 한국어 카피 31종과 YAML `use` 20종을 파일별 `grep -oF`로 확인했고 DESIGN dest ≥1. 눈에 띄는 라틴 발행 카피 손실은 없다(YAML `use` 영어 설명은 보존).
- **단어 예산.** `wc -w` **9,117**, spec SHOULD 600–1,800을 넘는다. 로그 Deviations가 기록한다. B2a/E2 범위 밖.
- **`#ffffff` 역할 분리.** canvas / secondary-button fill / stepper fill / toggle-active / sub-tab selected / on-dark·plan·gov label text. 정상 귀속 분리. 원장에 적히지 않았던 것은 E1으로 본문 한정·provenance 행에 반영했다. 본문 역할 값은 바꾸지 않음.

AUDIT_DONE fixes=30
