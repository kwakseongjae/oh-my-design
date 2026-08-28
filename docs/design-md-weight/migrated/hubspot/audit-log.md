# HubSpot 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/hubspot/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/hubspot/DESIGN.md`
검증 sibling: `web/references/hubspot/.verification.md` — `find web/references/hubspot -type f`와 `test -f web/references/hubspot/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 있음(Canvas, `https://canvas.hubspot.com`, `ds.type: system`). B2a는 toss 예문을 그대로 요구하지 않음. 완전형은 `derived editorial implementation inference` / `not HubSpot-authored` / `taken from a separately published UI specification, including the published Canvas documentation`.

착수 실측: 본문 완전형 24 / 원장 24. 좁은 쪽은 아니었으나 본문에 인접 한정이 없는 편집 문장 2개가 있어 24가 과소였다.

## 수정 목록 (13건)

### B2a — 인접 한정 신설·범위 확장 (본문 3건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:13` — Experience / Scope | "they do not by themselves supply interface tokens"는 연혁을 토큰이 아니라고 읽는 **분류 판단**. 같은 줄의 기존 한정은 philosophy / publishing-house / usefulness 문장만 가리킨다. 연도·창업자·MIT·Hubs는 원본 §11 사실. | 기존 완전형에 narrative-not-token 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:90` — Semantic color | "the surface use above is the source's On-Surface / canvas pairing, not a second token"는 Pure White와 On-Primary를 한 hex·두 역할로 슬롯팅하는 **판단**. `:84` 한정은 역할명을 live-homepage 라벨로 읽는 것만 가리킨다. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |
| 3 | `DESIGN.md:553` — Layout / Breakpoints | "They describe the recorded marketing homepage and pricing layout"는 계약 도메인 **편집 읽기**. `:514` 한정은 YAML↔layout-scale 분할만 가리키고, 39줄 떨어져 인접이 아니다. 표의 이름·폭은 원본 §8 사실. | 같은 단락 끝에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 26, `not HubSpot-authored` 26, `including the published Canvas documentation` 26. `provenance.md`의 같은 절 인용 1회는 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 84, 90, 111, 122, 137, 150, 173, 189, 197, 222, 223, 230, 447, 460, 473, 479, 514, 553, 558.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | `provenance.md` Derived-editorial inventory | 착수 원장 24행 = 본문 24. 본문에 한정 2건을 신설하면 원장이 좁아진다(fastcampus형). 행 3은 narrative-not-token을 적지 않음. | 원장 24→**26**. 행 신설 2(Semantic slotting `:90` · Layout domain `:553`). 행 3 서술 확장. 헤더 `26 = 26`. |

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | YAML identity 행 | `#ff4800` 목적지 `DESIGN.md` (13) + P 14/19/28/38/101. DESIGN **13**은 줄이 아니라 발생 수. provenance 실제 7줄은 14/19/28/38/**68/88**/101. | 발생 수로 밝히고 68/88을 더함. |
| 6 | YAML `ds` 행 | `https://canvas.hubspot.com` provenance 22/45/66/**73**/84 — 73은 Surfaces 표 구분선. 실제 canvas 행은 **76**. DESIGN 9/23/222은 맞음(각 1, 합 3). | 22/45/66/76/84. |
| 7 | YAML colors 행 | 90의 슬롯팅 한정을 적지 않음. | 90 dest를 B2a로 병기. |
| 8 | YAML spacing 행 | compact `xs: 4` / `sm: 8` / `xl: 32` / `xxl: 48` DESIGN **0**. 키 줄은 backtick-split `tokens.spacing.xs`: 4. `md: 12`/`base: 16`/`lg: 24`/`section: 64`는 100 산문만. | 실측 표기로 교정. |
| 9 | YAML rounded 행 | `full: 9999` DESIGN **0** (fitpet형). 실제는 `tokens.rounded.full`: 9999 (9999px) at 120. bare `9999` 2 / `9999px` 1. | 정확 문자열·계수로 교정. |
| 10 | §5 행 | dest 514–522 — Whitespace 524–528을 빠뜨림. `1200px`는 518만이 아니라 537에도 있음. | 514–528. 1200px 518/537. |
| 11 | §8 행 | dest 530–551 — 닫는 도메인 문장 553을 빠뜨림. | 530–553. 553 한정 dest 추가. |
| 12 | §11 행 | 13 한정이 philosophy 문장만 가리킨다고 적음. | narrative-not-token 접기를 dest에 반영. |
| 13 | Deviations / F3 | 로그가 B2a 24를 현재 상태로 남김. 본문·원장 26. | Auditor 절: F1 26줄(90·553 추가, :13 접기) · inventory 26 · `B2a 26=26`. worker-close 24는 이관 시점 측정으로 남기고 auditor 26을 병기. |

Destination SHA `8aa3b85d…` → `60b439539f54a61d7b05ca02136f8f70f0fadf559757cd16448890ec90aeaa1c` (한정 신설·확장 후). 줄 수 DESIGN 614 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 UI implication을 덮음. toss 예문 비적용(v12 전제 주석); 닫힘은 `including the published Canvas documentation`.
- Application rules / Avoid "source's own" — 출처 표시.
- Type roles "Those two button sizes are not converted" / Spacing·Shape "kept as separate steps" / Elevation "They are not merged" — A1 값 보존, 브랜드 해석 아님.
- Motion `:158` — B3 다섯 종류(transition properties · animation name · duration · easing · reduced-motion behavior)와 per-component 게이트가 같은 줄에 전문. E2c 유지.
- Font Official product-use "Canvas … does not … publish a universal current typography token table" — `:189` 한정이 그 분류를 가리킴.
- Capture `:232` "the same role-closing inference as the sentence above" — `:230`을 인접 참조.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/hubspot/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Canvas 다섯 원칙, "We design for clarity and focus.", "We foster a sense of joy…", Grow better, 2006 / Halligan / Shah / MIT / Inbound / five Hubs, YAML use·CTA 라벨.
- **관측 기술** — 라이브 hex·치수·HubSpot Sans/Serif·`Primitive type`, unitless `1.19`/`1.56`/`1.00`, `9999`/`9999px`, 표면 상태 표.
- **편집적 해석·인과 판단** — 두 경로를 계약 도메인으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·UI implication, Pure White 슬롯팅, kind/applicability, 보이스 읽기, 브레이크포인트 도메인.

세 번째 부류 중 24곳은 착수 시 인접 완전형이 있었고, Pure White 슬롯팅과 Layout 도메인 2곳은 한정이 없어 그 자리에 붙였고, Scope 연혁≠토큰은 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 26 | 1 | 0 |
| `not HubSpot-authored` | 26 | 1 | 0 |
| `including the published Canvas documentation` | 26 | 1 | 0 |
| inventory 데이터 행 | — | 26 | — |
| `Kind: non-interactive` | 1 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 0 |
| `full: 9999` | 0 | 0 | 1 |
| `tokens.rounded.full` | 1 | 0 | 1 |
| `ds.type: system` | 0 | 1 | 2 |
| `Priya Nair` / `Marcus Osei` / `Jess Thornton` / `Tomás Ferrara` | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 |
| `About Us` / `rgb(18, 69, 72)` / `140px` | 0 / 0 / 0 | 2 / 1 / 2 | 2 / 1 / 3 |
| B3 다섯 종류+게이트 (`DESIGN.md` 158) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 0 / candidates 171 (0%). `verdict: PASS`는 대조한 바늘이 없어서 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(The HubSpot Customer Platform · Get a demo of HubSpot's premium software · Get started free with HubSpot's free tools · Grow better · We design for clarity and focus. · We foster a sense of joy… · You haven't added any contacts yet. · Import contacts · Create a contact. · No deals in this pipeline. · Generating your report... · You're all set! · Deal marked as Closed Won. · Manage your pipeline · By Use Case · By Team Size · Why HubSpot? · Learn more about Revenue Hub · YAML `use` 11+9): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 원본 Whitespace "generous, editorial cadence" / Touch "generous tap targets"는 설명문이라 발행 카피가 아니다.
- **B1.** sibling 전용 `About Us` / `rgb(18, 69, 72)` / `#124548` / `Skip-to-content` / `140px` / `3e100552-a8ad-4179-b89a-6aa5113b92e1` / `rgba(255,255,255,0.62)` / `Warm cream paper`: DESIGN 0 / provenance mention. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. sibling H2 `font-size: 18px` on "The HubSpot Customer Platform"을 Display Hero 사실로 승격하지 않음(표의 18px는 원본 Subheading/Button LG).
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 인원·필드 종류만. 식별자(Priya Nair / Marcus Osei / Jess Thornton / Tomás Ferrara / Austin / London / Chicago / Buenos Aires) 세 파일 0. Primary tasks는 홈 CTA / pricing / Canvas 원칙. §13 전기·동기(`Sequences` / `360-degree` / `who owns this customer`) DESIGN 0. Audience의 `Solutions Partner agencies`는 원본 §13 도입 목록에 없고 삭제된 네 번째 페르소나 전기에서 온 그룹명 — 값 승격은 아니나 분류 잔존. 고치지 않음.
- **E2d.** provenance `:58`·`:128`은 자기 부재를 단언하지 않고 mention/use를 닫음. 로그 "DESIGN.md 0 for those ledger keys / sibling-only strings / cubic-bezier / native application"은 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=13
