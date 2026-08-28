# GitLab F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/gitlab/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/gitlab/DESIGN.md`
sibling: `web/references/gitlab/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -oF <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 라이브 표면 카피, Pajamas가 공급하는 컴포넌트 토큰, 원본이 인용한 발행 문자열, 원본 §11이 공공 사실로 닫은 연혁.
- **관측 기술** — 측정값, 도메인 귀속, 표·레코드의 선언 필드, sibling을 *인용으로* 귀속한 분류, 범위 경계.
- **편집적 해석·인과 판단** — 성격 규정, 역할/규율로 읽는 문장, 그룹핑, named jobs, 적용 이유, kind/applicability 판정, 로고 증거 판단.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not GitLab-authored` 또는 동치 `none of them is GitLab-authored` + `separately published UI specification, including the published Pajamas documentation`)이 없던 자리만 고쳤다. Pajamas가 발행되어 있으므로 toss형 예문의 「발행 사양 부재」 주장을 요구하지 않았다. 기존 13건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

감사 전 본문 완전형: `derived editorial implementation inference` **13** / `not GitLab-authored` **12** + `none of them is GitLab-authored` **1** / `separately published UI specification` **13**.
provenance `Derived editorial inventory` **10행** — 본문 13보다 좁음 (E1).

## 수정 목록

1. `DESIGN.md` Scope 3번째 문단 (refuses/embraces 뒤) — 마지막 문단을 가리키는 거짓 포인터(`named in the final paragraph… not a GitLab-published statement`)를 인접 완전형 한정으로 교체. 마지막 문단은 그 쌍을 이름하지 않는다.
2. `DESIGN.md` Primary tasks 머리 — 세 named job 앞에 인접 완전형 한정 신설.
3. `DESIGN.md` Avoid 머리 — Application rules를 가리키는 포인터를 인접 완전형 한정으로 교체.
4. `DESIGN.md` Assets · Logo file — `this migration's evidence judgment… not a GitLab statement`를 완전형으로 닫음.
5. `DESIGN.md` Status Badge · Declaration shape — 6 variant 그룹핑 이유 뒤에 인접 완전형 한정 신설.
6. `provenance.md` Derived editorial inventory — **10행 → 18행**. 빠져 있던 기존 3(Scope 2문단 성격 규정 · Audience 그룹핑 · Foundations 절 머리) + 신설 5를 실제 본문 한정과 1:1로 맞춤.
7. `provenance.md` Omission ledger §9 행 — 「Dark Proof-Stat Card로 옮겼다」를 실측에 맞춤. 원본 인용형 `Large stat in GitLab Sans 660, caption in 16px/400`은 DESIGN.md **0** / provenance **1**. 본문 재진술 `the large stat is set in GitLab Sans 660 and the caption at 16px / 400`은 DESIGN.md **1**.
8. `migration-log.md` A5a 미생존 처분 문단 — 페르소나 이름·전기 인용 제거. 바늘 이름만 남김 (D2a).
9. `migration-log.md` §13 삭제 행 — 이름·도시 열거와 「3파일 어디에도 없다」자기분모 단언을 제거하고 `fictional personas 3인, §13, D2 삭제`로 무식별화 (D2a · E2d).
10. `migration-log.md` 규칙 대조 D2 행 — 식별자 재열거 없이 같은 무식별 표기로 맞춤.
11. `migration-log.md` §2 `#ececef` / `#a4a3a8` / `#fbfafd` 행 — 세 hex를 한 묶음 세 목적지로 적은 것을 hex별 실측으로 갈랐다. `#ececef` DESIGN **3** (Foundations 말미 + Default Button; State record **0**). `#a4a3a8` DESIGN **4** (Foundations 말미 + Elevation 표·산문 + Default Button; State record **0**). `#fbfafd` DESIGN **7** (Foundations 말미 + Default Button + State record).
12. `migration-log.md` §9 고유값 행 — 「인용형 실측 1회」를 본문 0 / 재진술 1 / 원장 1로 교정.
13. `migration-log.md` `full: 9999` — provenance **1회 → 2회** (같은 Claim ledger 행에 두 번). DESIGN.md **0**.
14. `migration-log.md` B2a 준수 행 — 10위치/10행 → **18/18**. 본문 `derived editorial implementation inference` **18**.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 18 | 0 | 1 |
| `not GitLab-authored` | 17 | 0 | 0 |
| `none of them is GitLab-authored` | 1 | 0 | 0 |
| `separately published UI specification` | 18 | 0 | 0 |
| inventory 데이터 행 | — | 18 | — |
| `Priya` / `Marcus` / `Ana Sousa` / `Bangalore` / `Berlin` / `Lisbon` | 0 | 0 | 0 |
| B3 다섯 종류+게이트 전문 | 1 | 0 | 1 |

DESIGN.md SHA-256 `dce6fdca09f81c3e7bfe51bd0ab9d68263432c3f207b84364087a208476a927a`.

## 범위 밖 관찰

- **A5a.** 로그 기재 `coverage` compared **0** / candidates **252**. `verdict: PASS`는 대조한 바늘이 없음. 발행 카피 손 대조: "Ship faster. With trust." DESIGN 4 · "Finally, AI for the entire software lifecycle." 1 · "Get free trial" 5 · "Try for free" 4 · "Request a demo" 4 · "4 hours saved per engineer per week" 3 · "82% decrease" 5 · "revolutionary"/"game-changer"/"Something went wrong" 각 1. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 구조 관측(`1372`, `1440`, `.btn-confirm`, `.gl-button`, `.gl-badge`, frequency)은 DESIGN.md **0**. `official first-party DS`는 DESIGN.md **1** — sibling 문장을 따옴표로 귀속한 인용이지 값 승격이 아님. 고치지 않음.
- **D2 (본문).** Primary tasks 세 번째 항목("matches GitLab's own product UI")이 원본 §13 세 번째 전기의 동기를 메아리친다. 한정은 붙였고 문장 자체는 범위 밖이라 고치지 않음.
- **D2a 형제 (검사만).** `gaudiy/migration-log.md:46`과 `gaudiy/provenance.md` Omission ledger 한 행이 이름 3인을 삭제 식별자로 남김. `gaudiolab/migration-log.md:62`도 이름·나이·도시 3인. `genie`·`gangnamunni` 삭제 행은 무식별. 이 감사 대상이 아니라 미수정.
- **E2d 잔여.** 파일 한정 0회 단언(`full: 9999` DESIGN 0, cubic-bezier DESIGN 0, `verified live` DESIGN 0)은 분모를 그 파일로 닫고 있어 자기분모 거짓이 아님.
- **규칙집 버전.** 로그 머리 v11, 정본은 v12. 이관 당시 기록이라 고치지 않음.

AUDIT_DONE fixes=14
