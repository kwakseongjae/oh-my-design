# FuriosaAI 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/furiosaai/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/furiosaai/DESIGN.md` · 검증 sibling: `web/references/furiosaai/.verification.md` (`find`로 존재 확인, dotfile)
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별), `grep -c` 미사용.
날짜: 2026-08-26

## 수정 목록 (8건)

### B2a — 인접 한정 누락 (본문 2건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:21` — Experience / Primary tasks 머리 | "These five outcomes are read out of the controls, labels, and surfaces this record captures, since the source declares no task list of its own." — 파생임은 말하되 **evidence class를 끝까지 구분하지 않았다**. 원본에 task 목록 자체가 없으므로 이 다섯 항목은 전량 편집적 추론인데, "verified surfaces에서 derived"까지만 적힌 상태였다(B2a 후단 미완). | 같은 줄 앞에 승인 형식 전문을 붙였다: "These five outcomes are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification." 기존 파생 근거 문장은 뒤에 그대로 남겼다. 줄 수 불변(한 줄 안에서 처리). |
| 2 | `DESIGN.md:205` — Typography & Assets / Assets 두 번째 bullet | "Blog and newsroom cards carry flat category chips rather than decorative imagery." — 원본 §1 "Where the system permits itself color, it does so in sharp, flat chips rather than **decoration**"의 편집적 대조를 그대로 이어받은 판단문인데, Assets 절에는 evidence-class 표시가 **하나도 없었다**(§1 대조 판단이 한정 없는 절로 이주). | bullet 안에 인접 한정을 붙였다: "— that contrast is a derived editorial implementation inference from the verified surfaces; it is not FuriosaAI-authored or a separately published UI specification. The chips and their values are live-computed." 칩 값 자체는 관측이므로 값과 판단을 분리해 적었다. 줄 수 불변. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 18, `FuriosaAI-authored` 18 (수정 전 16/16).
한정 위치: 15, 21, 45, 49, 59, 72, 88, 137, 157, 167, 184, 200, 205, 221, 435, 439, 472, 484.

### E1 — provenance의 derived 범위가 실제보다 **좁았다** (2건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md:175` | derived로 선언한 항목이 10개(§1 atmosphere, §3 typography principles, §5, §6, §7 do/don't, §8, §10 voice+tone, §12, §14, §15)뿐이었다. 본문에는 그 10개로 설명되지 않는 한정이 **5개 더** 있었다 — Distinctive traits(45, §1 Key Characteristics 형용), Semantic color(88, §2 role naming), font-evidence class sorting(167, 이관이 새로 만든 분류), Family character reading(184, §3), Forbidden register(484, §10). 원장 10 : 본문 16으로 **원장이 좁은 쪽 불일치**(웨이브 24 fastcampus와 같은 계열). | 실제 집합으로 다시 적었다: 본문 한정 18개 각각을 원본 절 → `DESIGN.md` 줄번호로 1:1 열거하고, 실측 근거(`derived editorial implementation inference` 18 / `FuriosaAI-authored` 18)를 같이 박았다. 감사에서 새로 붙인 2건(21, 205)도 포함. 한 줄 안에서 재작성해 provenance 줄번호 전체(로그가 prov 5–190을 참조한다) 불변. |
| 4 | `provenance.md:183` | "Sibling verification file (not adopted)" 절이 sibling 전용 항목들을 열거한 뒤 "None of these appears in `DESIGN.md`, `provenance.md`, or `migration-log.md`."라고 적었다. **그 문장 자신이 provenance.md 안에서 그 항목들을 열거하고 있으므로 자기모순**이고, 실측과도 어긋난다. 실측(`grep -oF … \| wc -l`, 파일별): `Renegade 2026 Keynote`·`Tensor contraction, not matmul`·`FuriosaAI and Broadcom partner`·`div.category-label`·`section.cc-blogs`·`1440×900`·`54px`·`×1255`·`×116`·`document.title` = 각각 DESIGN.md 0 / provenance.md 1 / migration-log.md 1. migration-log는 같은 사실을 이미 "1 (named as not adopted)"로 정확히 적고 있어 두 원장이 서로 어긋난 상태였다. | 실측대로 고쳤다: "None of these appears in `DESIGN.md`" + 파일별 0/1/1 수치 + "그 1은 non-adoption을 기록하는 **mention**이지 use가 아니다"라는 구분을 명시. 한 줄 안에서 처리해 줄번호 불변. |

### E2 — migration-log 행이 실제 disposition과 어긋남 (4건, 전부 이중 목적지·과대 준수 주장)

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `migration-log.md:25` — `typography.*.use` strings (9) | disposition이 `분리 → provenance` **단일 목적지**, 사유가 "The §3 Notes column restates them in slightly different words". 그러나 9개 중 2개는 본문에 **바이트 동일**로 존재한다. 실측: `Section titles, newsroom heads` → DESIGN.md **1** (line 193) / provenance 1; `Blog / news card titles` → DESIGN.md **1** (line 194) / provenance 1; 나머지 7개 → DESIGN.md 0. 사유("전부 다른 말로 restate")가 2행에 대해 거짓이고 이중 목적지가 누락(E2a). | disposition에 `· 그중 2건은 옮김 → Type roles Notes (lines 193, 194)`를 추가하고, 사유를 "7/9은 paraphrase, 2/9은 바이트 동일이라 목적지 둘"로 고쳐 파일별 실측치를 박았다. |
| 6 | `migration-log.md:32` — `components.*.use` strings (9) | 같은 형태. disposition `분리 → provenance` 단일, 사유 "the Role lines in Components paraphrase them". 실측: `Furiosa Access Program form field` → DESIGN.md **2** (line 332 Role, line 25 primary task) / provenance 1. 나머지 8개는 DESIGN.md 0으로 사유가 맞다. 1행만 이중 목적지 누락(E2a). | disposition에 `· 그중 1건은 옮김 → Components / Primary tasks (lines 332, 25)` 추가, 사유를 8/9과 1/9로 갈라 실측치와 함께 적었다. |
| 7 | `migration-log.md:39` — §1 Visual Theme & Atmosphere | disposition이 `옮김 → Experience Scope (line 13)` 단일이고 사유가 "The observed interface layer, **with every hex and metric it names**". line 13은 §1이 지명한 13개 hex 중 9개만 담는다. 실측(line 13에서 `grep -oF … \| wc -l`): `#7f7f7f` **0**, `#d4d4d4` **0**, `#30343b` **0**, `#c0d0de` **0**, `rgba(0,0,0,0.18) 0px 18px 50px` **0**. 이 다섯은 실제로 Foundations Semantic color(100, 101, 112, 113)와 Distinctive traits(41)·Elevation(133, 135)로 갔고, §1의 flat-chips 판단은 Assets(205)로 갔다. 준수 주장이 본문보다 강했고(E2c) 목적지 4곳이 누락(E2a). | disposition을 실제 네 목적지로 확장(`line 13` · `lines 100, 101, 112, 113` · `line 41` + `lines 133, 135` · `line 205`)하고, 사유를 "line 13은 9/13 + `-2.1px`/72px/84px/16px/1.6"으로 실측화한 뒤 나머지 다섯의 0회 실측과 실제 착지점을 명시했다. |
| 8 | `migration-log.md:57` — §8 Breakpoints / Touch Targets / Collapsing / Image Behavior | disposition이 `옮김 → Layout & Platforms (lines 439–457)` 단일. 그러나 Image Behavior 첫 절은 **Assets에도** 있다. 실측: `grep -oF 'Product renders and chip photography' DESIGN.md \| wc -l` = **2** (line 204 Assets, line 451 collapsing list). 이중 목적지 누락(E2a) — `DESIGN.md` 204–205행은 로그 어느 행의 목적지로도 잡히지 않던 미기재 구간이었다(§1은 #7로, §8은 이 행으로 각각 흡수). | disposition에 `· Image Behavior 1행은 Typography & Assets에도 (line 204)`를 추가하고 사유에 2회 실측을 박았다. |

## 수정하지 않은 것 (검토 후 위반 아님으로 판단)

- **Motion durations 머리글(`DESIGN.md:141`)·Easing 머리글(`149`).** "as this record states them, with no computed transition observation behind them" 은 값에 대한 **증거-class 진술**이지 인과·해석 문장이 아니다. provenance:176이 이 class를 별도로 기록하고 있어 §15 motion **character**(157, 한정 있음)와 이미 분리돼 있다. B2a 대상 아님.
- **State applicability Reason 열(248–378행).** C2가 요구하는 역할 판정 사유이고, 감사 범위(`수정 금지: 상태 applicability`) 밖.
- **Audience(32) / Named gaps(520–528) / Governance(496–517).** FuriosaAI에 귀속시키는 해석이 아니라 이관 자신의 정책·부재 기록.
- **값·표·구조 일절 무수정.** 수정 전후 실측 동일: `| applicable |` 30, `| not-applicable |` 12, `focus-visible` 9, `Type: button` 3 / `card` 2 / `badge` 2 / `input` 1 / `tab` 1. 13개 hex 계수 전부 동일. `DESIGN.md` 528줄·`provenance.md` 201줄로 줄 수 불변 → 로그가 참조하는 줄번호 39개를 재검증해 **miss 0**.

## 범위 밖 관찰

- **A5 / A5a — 게이트 coverage 실측.** `node test-v2/tools/migrate-reference.mjs --brand furiosaai --gate-only` → `verdict: PASS`, `problems: []`, `coverage.copy-loss` = **compared 1 / candidates 181 (0.55%)**. 즉 이 브랜드의 `PASS`는 라틴 카피 보존의 증거가 아니다. 감사자 독립 스윕(원본에서 backtick·직선/곡선 큰따옴표 2–60자 인용문 추출, 중복 제거 **104개**)을 산출 2파일(`DESIGN.md`+`provenance.md`)에 대조한 결과 **미생존 0**. 눈에 띄는 라틴 카피 손실은 없다. 규칙집이 이 세션 중 **v11**로 올라가며 신설된 **A5a**(분모 명시 + 손 스윕 수치 기록)는 migration-log 137–145행이 이미 충족한다(181 추출 / 27 미생존 / 26 복원 / 1 처분). 로그의 `Rulebook version: v10`은 이관 시점 사실이라 고치지 않았다.
- **A5 경미 표기 드리프트(값 손실 아님, 미수정).** 원본 §4의 역할 서술 두 개가 바이트 그대로는 산출물에 없다: `Primary call-to-action`(본문은 "primary call to action", 하이픈·대소문자 차이) → DESIGN.md 0 / provenance 0; `Accessibility skip link revealed on keyboard focus`(본문이 Role 282행과 관측 노트 296행으로 분리) → DESIGN.md 0 / provenance 0. 둘 다 브랜드 발행 카피가 아니라 레코드의 컴포넌트 서술이고 A5a가 바늘에서 제외한 부류(카피에 대한 서술·UI 메타)라 A5 needle로 보지 않았다. 반면 브랜드 발행 문자열은 전부 살아 있다 — `Furiosa Access Program form fields (name, email, company)` DESIGN.md 1(line 25), 나머지 §4 use 문자열 4종 각 1.
- **B1 — 위반 없음(실측).** sibling(`web/references/furiosaai/.verification.md`, `find`로 확인, 70줄)에만 있는 항목의 본문 침투를 값과 **분류** 양쪽으로 셌다. `DESIGN.md` 기준: `54px` 0, `H2` 0, `h3` 0, `div.category-label` 0, `section.cc-blogs` 0, `1440×900` 0, `×1255` 0, `×116` 0, `document.title` 0, `apple-touch-icon` 0, `256×256` 0, `3284` 0, `rgb(` 0, `playwright` 0, `chromium` 0, `Furo` 0, `getdesign` 0, `refero` 0, `uncontested` 0. 유일한 `H1` 1회(line 468)는 sibling이 아니라 **원본 §10:358**의 자기 표현("RNGD product page H1")이라 침투가 아니다. 카드 폭 `384px`/`420px`도 sibling의 per-component 측정이 아니라 원본 §5:243의 범위 표기 `≈384px–420px`로만 line 433에 있다. finda형 구조-관측 승격 없음.
- **원본 보존 확인.** `web/references/furiosaai/DESIGN.md`는 이 감사에서 읽기만 했다(미수정).
- **표 무결성 재확인(참고).** 원본 대비 §14 states 7행, §6 elevation 3행, §15 duration 3행, §10 tone 5행, §8 breakpoint 3행, §3 hierarchy 9행, §7 Do 8행, §12 principles 5행 — `diff` 전부 완전 일치. §7 Don't 1행만 `700+` → `` `700+` `` 백틱 추가(값 동일).

AUDIT_DONE fixes=8
