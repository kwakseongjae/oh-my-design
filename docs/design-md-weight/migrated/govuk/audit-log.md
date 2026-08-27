# GOV.UK 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/govuk/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/govuk/DESIGN.md`
검증 sibling: `web/references/govuk/.verification.md` — `find web/references/govuk -type f`와 `test -f web/references/govuk/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 있음(GOV.UK Design System). B2a는 toss 예문을 그대로 요구하지 않음. 완전형은 `derived editorial implementation inference` / `not GOV.UK-authored` / `taken from a separately published UI specification, including the published GOV.UK Design System documentation`.

착수 실측: 본문 완전형 24 / 원장 24. 좁은 쪽은 아니었으나 본문에 인접 한정이 없는 편집 문장 2개가 있어 24가 과소였다.

## 수정 목록 (19건)

### B2a — 인접 한정 신설·범위 확장 (본문 4건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:15` — Experience / Scope | "This contract does not treat the two captured surfaces as a proxy for every UK government department service…"는 계약 범위에 대한 **편집적 거부**. 같은 절 `:9` 한정은 homepage↔DS 이표면 분리만 가리킨다. NHS/HMRC/Home Office를 토큰 출처로 쓰지 않는다는 두 번째 문장은 원본 사실. | 같은 단락 끝에 완전형 한정 신설: "Treating the two captured surfaces as not a proxy … is a derived editorial implementation inference … including the published GOV.UK Design System documentation." 새 줄 아님. |
| 2 | `DESIGN.md:47` — Principles 머리 | 기존 한정이 *UI implication* 문장만 이름 붙였다. 번호 항목 안의 인과 문장("exists because… not because it looks good", "anchors every token decision", "all derive from this legal mandate, not from stylistic preference")은 세 번째 부류인데 한정이 가리키지 않음. | 기존 완전형에 그 인과 문장을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:212` — Font evidence / Outside these captures | "Typography on department services … remains outside this contract"는 범위 판단. `:15`와 같은 계열이지만 Typography 칸이라 `:15`가 인접이 아님. | 같은 칸에 완전형 한정 신설. 새 줄 아님. |
| 4 | `DESIGN.md:520` — Content & Locales | 기존 한정이 "institutional clarity…"만 가리켰다. 같은 단락의 "users scan, not read"와 "Every word must justify its presence"는 인용 GDS 원칙에 붙인 **편집 gloss**. | 기존 완전형에 두 gloss를 접어 넣음. 주어를 they로 맞춤. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 26, `not GOV.UK-authored` 26, `published GOV.UK Design System documentation` 26. `provenance.md`의 같은 절 인용 1회는 색인이지 한정이 아니다.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `provenance.md` Portable derived-editorial scope | 착수 원장 24행 = 본문 24. 본문에 한정 2건을 신설하면 원장이 좁아진다(fastcampus형). Principles·Voice 행은 본문이 이제 덮는 재료를 적지 않음. | 원장 24→**26**. 행 신설 2(Scope proxy `:15` · Outside-captures `:212`). Principles·Voice 행 서술 확장. 헤더 `26 = 26`. |

### E2 / E2a — 로그 목적지·줄 포인터 (14건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | YAML identity 행 | `#1d70b8` 목적지 `DESIGN.md` 13 — 13행에 그 hex 없음(서사 단락). favicon `provenance.md` 15/27/93/96 — 27은 빈 줄, slug 문자열은 P **3**(15/93/96). `https://www.gov.uk` P 13/45/51 — 45는 표 구분선, URL은 46. | `#1d70b8` DESIGN 9 + P 14/28. favicon DESIGN 245 + P 15/93/96. `https://www.gov.uk` DESIGN 9 + P 13/46/51. |
| 7 | YAML metadata 행 | 토큰 노트 `provenance.md` 29 — 29는 빈 줄, 노트는 28. Proof `195–196`은 원장 2행 삽입 후 197–198. | 토큰 노트 28. Proof 197–198. |
| 8 | YAML colors 행 | `#1a65a6` `DESIGN.md` 11/38/98 — 38은 `#ffdd00` focus 행. 세 번째는 Distinctive `:42`. 본문 횟수 3은 맞음. | 11/42/98. |
| 9 | YAML typography 행 | `1.25` at 227/229 — 229는 Body L `1.31`. `1.25`는 Heading M 227과 Body M **230**. | 227/230. |
| 10 | YAML components 행 | padding `8px 10px 7px` 285/311/336/482 — 실제 286/313/338/483. font record 287/313/338/386/412/438 — 실제 289/316/341/388/416/438. `2px solid #0b0c0c` 382/409 — 바이트 형식은 383/411. | 실측 줄로 교정. `Token-set use:` 9줄(293…)은 맞아서 유지. |
| 11 | Footer URL 행 | `https://design-system.service.gov.uk` P 22/46/52 — 46은 homepage `www.gov.uk`. | P 22/52. DESIGN 9/565 유지. |
| 12 | §4 행 | `#003a2e` 291/301 — 301은 disabled 행. hover 적용 행은 299. | 291/299. |
| 13 | §6 행 | `provenance.md` 200 focus-visible 원장 — 원장 삽입 후 202. | 202. |
| 14 | §11 행 | `provenance.md` 199 narrative-not-token — 삽입 후 201. | 201. |
| 15 | §13 행 | Disposition `provenance.md` 132 — 132는 ease-enter 곡선 행. §13 삭제 행은 134. | 134. 무식별 표기는 유지. |
| 16 | §14 행 | 12행 본문 `256–268` — 268은 Skeleton, Disabled는 **269**. 12행을 빼먹으면 A2 보존 주장이 한 행 짧다. | 256–269. |
| 17 | §15 durations 행 | `168–174`가 네 duration이라고 적음 — 174는 `govuk-motion-standard`, `govuk-motion-slow`는 **175**. easing `176–183` — 176은 빈 줄. | 168–175 · 177–183. |
| 18 | §15 cubic 행 + sibling 행 | cubic ledger `129–131` — 129는 표 머리, 세 곡선은 131–133. sibling-only `106–117` — 106은 빈 줄, 목록은 107–118. | 131–133 · 107–118. |
| 19 | F1 / F2 준수 주장 | 로그가 B2a 24=24, F1 줄 목록 24개를 현재 상태로 적음. 본문·원장 26. | F1 26줄(15·212 추가) · inventory 166–193 · F2 `B2a 26=26`. worker-close 24는 이관 시점 측정으로 남기고 auditor 26을 병기. |

Destination SHA `bad0feb3…` → `35cf91ebfee32fb68ae42568a4ba1e6e5a62114f39a24cc20c296ab35bcb85c9` (한정 확장 후). 줄 수 DESIGN 600 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목의 GDS 귀속("Start with needs", WCAG 2.2 AA, Content Design Manual, progressive enhancement, NHS/HMRC/Home Office) — 발행 사양을 원본이 붙인 것. toss 예문 비적용(v12 전제 주석).
- Font Official product-use "The published GOV.UK Design System names it as the product face" — 발행 객체 사실. "not GOV.UK-authored"를 붙이면 거짓이 된다.
- Family "It is a fallback, not the brand face" / "Do not substitute" — 카탈로그 unknown-means-absent 규칙. `:218` 한정이 Arial-only fallback 읽기를 이미 덮음.
- B3 준수 주장 — `DESIGN.md` 185가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지). `cubic-bezier` DESIGN 0 / provenance 3.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/govuk/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다. 세 번째 부류 중 24곳은 착수 시 인접 완전형이 있었고, Scope proxy와 Outside-captures 2곳은 한정이 없어 그 자리에 붙였고, Principles 인과·Content gloss 2곳은 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 0 / candidates 217 (0%). `verdict: PASS`는 대조한 바늘이 없어서 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`The best place to find government services`, `Save and continue`, `Start now`, `Check your State Pension`, `Cannot start yet`, `There are no results matching your search`, `Sorry, the service is unavailable`, `Application submitted`, `For example, 27 3 2007`, `so simple, clear, and fast`, `the single online shop window for government`, `writing for the web as people actually read it`): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다.
- **B1.** sibling 전용 `Accept additional cookies` / `#00703c` / `HMRC account: sign in` / `Popular on GOV.UK` / `rgb()` / `.govuk-button` / `/default/index.html` / frequency ×18·×927: DESIGN 0 / provenance mention. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. Type roles의 `H3 sub-section headings`는 원본 hierarchy 표. `30px` DESIGN 4는 spacing/gutter(139/499)뿐, sibling wordmark 30px는 타입롤이 아님. 원본 `focus-visible` 0; 이관본 Focus 관측은 `focus-visible` 행에 값을 붙이지 않음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 인원·이름·나이·도시 없이 무식별. 식별자(`Margaret Holt` / `Damilola Okonkwo` / `Sara Johansson` / `Tom Bashford` / `Sheffield` / `Birmingham` / `Edinburgh` / `Bristol` / `QQ 12 34 56 C` / `National Insurance` / `Requires review`) 세 파일 0. Primary tasks는 H1·CTA·DS 페이지 라벨. §13 전기·동기 승격 없음.
- **E2d.** provenance `focus-visible` 0회는 **원본 파일**을 분모로 하고 원본 실측 0. 로그 "DESIGN.md **0** for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=19
