# Hahow 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/hahow/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/hahow/DESIGN.md`
검증 sibling: `web/references/hahow/.verification.md` — `find web/references/hahow -type f`와 `test -f web/references/hahow/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 있음(`hahow-design`, `ds.type: system`). B2a는 toss 예문을 그대로 요구하지 않음. 완전형은 `derived editorial implementation inference` / `not Hahow-authored` / `taken from a separately published UI specification, including the published hahow-design documentation`.

착수 실측: 본문 완전형 24 / 원장 24. 좁은 쪽은 아니었으나 본문에 인접 한정이 없는 편집 문장 2개가 있어 24가 과소였다.

## 수정 목록 (16건)

### B2a — 인접 한정 신설·범위 확장 (본문 4건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:96` — Semantic color | "Those steps stay palette roles. They are not promoted onto any component hover or pressed row."는 팔레트↔컴포넌트 행 슬롯팅 판단. `:79` 한정은 역할 수식어("signature teal" 등)만 가리킨다. | 같은 단락 끝에 완전형 한정 신설. 새 줄 아님. |
| 2 | `DESIGN.md:154` — Type roles | "`16px / 600` on the component, not as a fourth type-role key"는 분류 판단. `:158` Type-rules 한정은 계층 원칙만 가리킨다. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |
| 3 | `DESIGN.md:169` — Surface state contract | 기존 한정이 네 행을 state contract로 읽는 것만 이름했다. `:178`의 "remain palette roles; they are not written onto component hover or pressed rows"는 세 번째 부류인데 한정이 가리키지 않음. | 기존 완전형에 그 팔레트-역할 잔여를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:255` — Layout | 기존 한정이 generous/browsable만 가리켰다. 같은 절 `:253`의 "letting … read as the foreground"와 "used sparingly … never as a flood"는 편집 읽기. | 기존 완전형에 두 읽기를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 26, `not Hahow-authored` 26, `including the published hahow-design documentation` 26. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 46, 56, 65, 79, 96, 100, 110, 114, 120, 132, 136, 142, 154, 158, 162, 169, 184, 255, 257, 262.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `provenance.md` Portable derived-editorial scope | 착수 원장 24행 = 본문 24. 본문에 한정 2건을 신설하면 원장이 좁아진다(fastcampus형). Surface state·Layout 행은 본문이 이제 덮는 재료를 적지 않음. | 원장 24→**26**. 행 신설 2(Semantic palette-role `:96` · Type roles `:154`). Surface state·Layout spacing 행 서술 확장. 헤더 `26 = 26`. |

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | YAML metadata 행 | `ds.type: system` 목적지 `provenance.md` 23/123/130 — 23은 표 칸 `ds.type` / `system`. 정확 문자열은 P **2**(123/130). | 123/130. 23은 split form으로 병기. |
| 7 | YAML family 행 | `DESIGN.md` 135/141을 Family로 묶음 — 135는 Font evidence Declared-only. | Declared-only 135 + Family 141. |
| 8 | YAML spacing/shape 행 | Disposition이 "also Layout"인데 dest 줄이 Foundations만(100/104–108). 같은 스케일이 Layout `:253`에 재진술됨(`full 9999` 콜론 없음). | 253을 이중 목적지로 추가. `full: 9999`(콜론) 40/108/110과 `full 9999` 253을 갈라 적음. |
| 9 | YAML components 행 | `token-set font record` DESIGN **0**. 실제 문자열은 `Token-set font record:` **2**(197/245). | 대소문자 실측으로 교정. |
| 10 | §14 applicability 행 | `kind: non-interactive` DESIGN **0**. 실제는 `Kind: non-interactive` **1**(237). fitpet형 2차 목적지. | `Kind: non-interactive`. |
| 11 | §15 행 | B3 "122 and 310 … in full text" — 122는 다섯 종류+게이트+부분확인 배제. 310은 다섯 종류+게이트만, 부분확인 문장 없음. | 122를 전문, 310을 부분으로 나눔 (E2c). |
| 12 | §2 행 | 96/178 슬롯팅을 79 한정 아래 있는 것처럼 적음. | 96 신설·169 확장을 dest에 반영. |
| 13 | §3 행 | 154 한정을 적지 않음. | 154 dest 추가. |
| 14 | §5 행 | 255가 generous/browsable만 가리킨다고 적음. | 확장된 읽기(foreground / never-as-flood)를 dest에 반영. |
| 15 | §14 States 행 | 178 팔레트-역할 잔여의 한정을 적지 않음. | 169 확장을 dest에 반영. |
| 16 | §12 · Deviations · F1 · F2 | B2a 24=24, inventory 139–162. 본문·원장 26. | F1 26줄(96·154 추가) · inventory 139–164 · F2 `B2a 26=26`. worker-close 24는 이관 시점 측정으로 남기고 auditor 26을 병기. |

Destination SHA `de5355d8…` → `15fea53a84fa8fa3a3a320ce2a060ed51df64e1082e5516096cc1be65105bd8e` (한정 신설·확장 후). 줄 수 DESIGN 311 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 비적용(v12 전제 주석); 닫힘은 `including the published hahow-design documentation`.
- Font Official product-use "`hahow-design` publishes Primary/Secondary color scales" — 발행 객체 사실. "not Hahow-authored"를 그 사실 위에 얹으면 거짓이 된다. 칸의 한정은 classing만 가리킨다.
- B3 준수 주장 — `DESIGN.md` 122가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음 (E2c 유지, 310은 축소).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/hahow/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 好學校, everyone has something to learn and something to teach, hahow-design 테마 URL·Primary/Secondary 스케일 발행, YAML use/font 바이트.
- **관측 기술** — 라이브 hex·치수·PingFang TC·`Primitive type`, unitless `1.3`/`1.5`/`1.4`, `full: 9999`, 표면 네 행.
- **편집적 해석·인과 판단** — 표면 비호환, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 팔레트↔컴포넌트 슬롯팅, 네 번째 타입롤 거부, kind/applicability, 보이스 읽기.

세 번째 부류 중 24곳은 착수 시 인접 완전형이 있었고, palette-role과 Type-roles 2곳은 한정이 없어 그 자리에 붙였고, Surface state·Layout 2곳은 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 26 | 1 | 2 |
| `not Hahow-authored` | 26 | 2 | 2 |
| `including the published hahow-design documentation` | 26 | 2 | 2 |
| inventory 데이터 행 | — | 26 | — |
| `Kind: non-interactive` | 1 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 1 |
| `Token-set font record:` | 2 | 0 | 1 |
| `token-set font record` | 0 | 0 | 1 |
| `ds.type: system` | 0 | 2 | 2 |
| `full: 9999` | 3 | 3 | 2 |
| `Curious Learner` / `Knowledge-Sharing` / `Returning Member` | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| `theme.js` / `rgb(245,247,249)` / `playwright getComputedStyle` | 0 / 0 / 0 | 3 / 2 / 2 | 2 / 1 / 2 |
| B3 다섯 종류+게이트+부분확인 배제 (`DESIGN.md` 122) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 0 / candidates 55 (0%). `verdict: PASS`는 대조한 바늘이 없어서 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`好學校` DESIGN 7 · `everyone has something to learn and something to teach` 3 · `the good school` 2 · `hahow-design` · `Section headings` · `Primary body text` · `Tag / chip labels` · `Teal outline primary CTA` · `Neutral white card-level action` · `Metadata, category, filter tags`): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다.
- **B1.** sibling 전용 `theme.js` / `rgb(245,247,249)` / `rgb(0,204,180)` / `playwright getComputedStyle` / `non-Western`: DESIGN 0 / provenance mention. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. `h3`/`H3` DESIGN 0.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 인원·필드 종류만. 식별자(`Curious Learner` / `Knowledge-Sharing Instructor` / `Returning Member`) 세 파일 0. Primary tasks는 마켓플레이스 browse / teal CTA / tag scan. §13 전기·동기(`new skill` / `publishing courses` / `lower the barrier` / `pick up quickly` / `scannable surface`) DESIGN 0.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음. Omission ledger "not restated here"는 필드 종류만 적고 식별자를 열거하지 않음.

AUDIT_DONE fixes=16
