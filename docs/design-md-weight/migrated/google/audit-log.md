# Google F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/google/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/google/DESIGN.md`
sibling: `web/references/google/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -oF <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.
날짜: 2026-08-28

발행 1차 DS 있음(Material Design 3). toss형 「발행 사양 부재」 예문을 요구하지 않음. 완전형은 `derived editorial implementation inference` + `not Google-authored` / `none of them is Google-authored` + `separately published UI specification, including the published Material Design 3 documentation`.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 사명, 1998·Page/Brin 연혁, Ten things 인용, Google Design 타입 역할 서사, Material Design 3 존재, OFL 1.1 / Google Sans Code 배포 사실.
- **관측 기술** — 세 표면 캡처 값, YAML 키, 컴포넌트 레코드, FontFaceSet 횟수, desktop-only 1440x900, 증거 공백(empty/loading 미관측).
- **편집적 해석·인과 판단** — 도메인 비호환 읽기, unusually disciplined / 정체성 읽기, 타입롤 「확인」, named jobs, Distinctive 그룹핑, Principles UI implication, Do 근거, Semantic 역할명 읽기, 비그리드, live-UI 승격, 폴백 금지, Simple Icons 분류, kind/applicability/Focus 증거종류, C4 생략, register 읽기.

세 번째 부류인데 인접 완전형이 없던 자리, 또는 기존 한정이 그 읽기를 이름하지 않던 자리만 고쳤다.

감사 전 본문 완전형: `derived editorial implementation inference` **9** / `not Google-authored` **8** + `none of them is Google-authored` **1** / `separately published UI specification` **9** / `including the published Material Design 3 documentation` **9**.
provenance `Portable derived-editorial scope` **9행** — 본문 9와 숫자는 맞았으나, 한정이 없는 해석 7건을 세면 **좁음**(E1).

## 수정 목록

1. `DESIGN.md:11` Scope 표면 분리 — 「not one interchangeable template」은 편집적 도메인 판단인데 인접 완전형이 없었다. 같은 문단에 완전형 신설.
2. `DESIGN.md:15` Scope 타입롤 확인 — 「live evidence confirms … remain separated rather than collapsed」는 인과 판단. 같은 문단에 완전형 신설.
3. `DESIGN.md:34` Distinctive traits — 기존 한정은 그룹핑만 가리켰다. 첫 불릿의 non-interchangeable-template 읽기를 같은 한정 문장에 접어 넣음(+0 발생).
4. `DESIGN.md:77` Semantic color — 「observation labels rather than Material Design 3 baseline roles」를 원본 경계인 양 적었으나 원본 §2는 MD3 크롬 비승격만 말한다. 그 읽기에 완전형을 붙이고, 원본 경계 문장은 뒤에 분리.
5. `DESIGN.md:91` Spacing — 「not a universal Google grid declaration」에 완전형 신설.
6. `DESIGN.md:129` Font evidence — 「therefore usable live UI families」 승격에 완전형 신설(같은 셀).
7. `DESIGN.md:140` Family — 「Do not present a system or fallback stack as the Google Sans family」는 Don't 원문이 아니다. 둘째 금지에 완전형 신설. 첫째(Arial 대체 금지)는 원본 Don't라 한정하지 않음.
8. `DESIGN.md:177` Capture record — 기존 한정이 kind/applicability만 가리켰다. Focus vs `focus-visible` 증거종류 구분을 같은 한정에 접어 넣음(+0 발생).
9. `DESIGN.md:323` Layout — Spacing과 같은 비그리드 읽기. 같은 불릿에 완전형 신설.
10. `provenance.md` Portable derived-editorial scope — **9행 → 16행**. 신설 7 + Distinctive/Capture 서술 확장. 본문 16 = 원장 16.
11. `migration-log.md` YAML identity 행 — `type: simpleicons` / `slug: google`을 Logo decision에도 있다고 적음. 실측: DESIGN Assets **1** · provenance Identity **1**. Logo decision은 `simpleicons` **1**, 그 키 경로 **0**.
12. `migration-log.md` YAML `ds` 행 — 경계 전문을 Scope · Foundations 이중으로 적음(fitpet형). 실측 그 문자열 DESIGN **1**(Scope만) · provenance **1**. Foundations는 원본 §2 다른 문장.
13. `migration-log.md` YAML freshness / A1c 행 — `tokens.source: reconciled` · `components_harvested: true` · `ds.type: system`을 Identity 표와 Proof notes에 「각 기록」으로 적음. 연속 문자열은 Proof notes 각 **1**, Identity는 칸 분리, DESIGN **0**.
14. `migration-log.md` YAML components 행 — use/states를 Components에 「바이트 보존」으로 적음. `use`는 DESIGN Role 행. YAML `states` 전문 5건은 provenance Token-block only — DESIGN.md **0**.
15. `migration-log.md` B2a 준수 행 · F1 · §1 행 — 9곳/9행 → **16/16**.
16. `migration-log.md` Hashes — DESIGN SHA `9c33d8ef…` → `440d3d2d…`, provenance `01203f87…` → `3067ada4…`.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 16 | 1 | 1 |
| `not Google-authored` | 15 | 0 | 0 |
| `none of them is Google-authored` | 1 | 0 | 0 |
| `separately published UI specification` | 16 | 0 | 0 |
| `including the published Material Design 3 documentation` | 16 | 0 | 1 |
| inventory 데이터 행 | — | 16 | — |
| B3 다섯 종류+게이트 전문 | 1 | 0 | 1 |
| 경계 전문 `documentation and baseline guidance are context…` | 1 | 1 | 1 |
| `type: simpleicons` | 1 | 1 | 1 |
| YAML states 전문 (`…high-emphasis action`) | 0 | 1 | 0 |
| sibling-only `38px` / `0.25px` / `rgb(23, 78, 166)` | 0 / 0 / 0 | 2 / 2 / 2 | (mention) |

DESIGN.md SHA-256 `440d3d2db53d3b21826178ac0fac4edfbbad9ae9fb098574733297f947cdbe2e`.
줄 수 388 불변(제자리 문장 편집). 토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그 기재 `copy-loss` compared **0** / candidates **159**. `verdict: PASS`는 대조한 바늘이 없음. 발행 카피 손 대조: "Focus on the user and all else will follow." DESIGN 1 · "It is best to do one thing really, really well." 1 · "Fast is better than slow." 2 · "Ten things we know to be true" 4 · `Google Blue` 2 · `SIL Open Font License 1.1` 1. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`38px`, pressed 이중 shadow, `rgb(23, 78, 166)`, nav tracking `0.25px`, surface-kind 라벨) DESIGN.md **0**. 구조 분류("h3다", 섹션 표제) 승격 없음. 고치지 않음.
- **D2a.** §13 삭제 행은 무식별(`[FILL IN]` audience placeholder). 이름·나이·도시 페르소나 없음. `Larry Page` / `Sergey Brin`은 원본 §1/§11 발행 연혁이라 삭제 식별자가 아님(DESIGN 1 · log mention 1). Primary tasks는 세 캡처 표면이지 §13 전기 승격이 아님.
- **E2d.** 「세 파일 어디에도 없다」/「이 파일에 없다」 0. sibling-only 행은 「본문 0(의도)」로 DESIGN.md만 분모로 닫고, 같은 행이 그 값을 나열함을 mention으로 구분.
- **B3 / E2c.** 다섯 증거+컴포넌트별 computed 관측 게이트 전문 DESIGN **1**. 「공식 출처로 검증될 때까지」 DESIGN **0**.

AUDIT_DONE fixes=16
