# kdan 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kdan/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kdan/DESIGN.md`
검증 sibling: `web/references/kdan/.verification.md` — `find web/references/kdan -type f`와 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

`ds.type: system` — 발행 토큰 라이브러리(kdan-ui-revamp)가 있다. B2a 예문 전제(v12)가 깨지므로 toss형 부재 주장을 요구하지 않는다. 기존 27건은 published-spec form `not Kdan-authored or taken from a separately published UI specification, including the published kdan-ui-revamp token library`로 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 27 / 원장 27. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Primary tasks `:19`는 surface-or-control / not-biography만 이름하고 persona-section 경계를 빠뜨렸다. Motion `:126`은 unnamed-set / overlay-not-curve / five-kind-held만 이름하고 qualitative-claim-not-restored-duration과 gate-in-full / partial-confirmation을 빠뜨렸다. Font evidence `:138`은 "evidence-class application readings"만 이름하고 표 칸의 not-a-typography-spec / declared-only / no-license를 빠뜨렸다. Capture `:190`은 절차·평결만 이름하고 Error/Link semantic-roles-not-button-treatment를 빠뜨렸다.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 4건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:19` — Primary tasks | "They do not come from the source's persona section"는 세 번째 부류. 기존 한정은 surface-or-control / not-biography만. | 기존 완전형에 recording that they do not come from the source's persona section를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:126` — Motion | `:128` qualitative-claim-not-restored-duration과 `:130` gate-in-full / partial-confirmation은 세 번째 부류. 기존 한정은 unnamed-set / reduced-motion / overlay-not-curve / five-kind-held만. | 기존 완전형에 세 판단을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:138` — Font evidence | 표 칸 "not a typography specification" / declared-only `SF Mono` / no license sentence는 세 번째 부류. 기존 한정은 총칭 evidence-class readings만. | 기존 완전형에 칸별 읽기를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:190` — Capture record | `:188` Error/Link "are semantic color roles… not a button error treatment and not a declared link component"는 세 번째 부류. 기존 한정은 절차·kind·applicability·not-complete만. | 기존 완전형에 reading Error and Link as semantic color roles rather than as a button error treatment or a declared link component를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 27, `not Kdan-authored` 27, `including the published kdan-ui-revamp token library` 27. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 53, 63, 76, 105, 118, 122, 126, 138, 153, 157, 166, 173, 190, 204, 228, 252, 275, 294, 299, 335.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | Primary tasks 행 | surface-or-control / not-biography만. 본문 `:19`가 이제 persona-section 경계도 이름한다. | 그 판단을 행 4에 추가. |
| 6 | Motion 행 | unnamed-set / overlay-not-curve / five-kind만. 본문 `:126`이 이제 qualitative-claim과 gate-in-full도 이름한다. | 두 판단을 행 14에 추가. |
| 7 | Font evidence 행 | 총칭 readings만. 본문 `:138`이 이제 칸별 읽기를 이름한다. | 칸별 읽기를 행 15에 추가. |
| 8 | Capture 행 | 절차·평결만. 본문 `:190`이 이제 Error/Link semantic-roles도 이름한다. | 그 판단을 행 20에 추가. |

헤더 / 데이터 행 **27 = 27** 유지 (E1 1:1). 데이터 166–192.

### E2 / E2a / E2c — 로그 목적지 (14건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | YAML identity 행 | favicon URL P dest 2 at 16/29. 슬러그 문자열은 16만. 29는 field-kind mention. | DESIGN dest 1 at 170 / P dest **1** at 16. |
| 10 | YAML metadata 행 | freshness 39–45; **Verified:** 45. | 39–**44**. Verified **44**. |
| 11 | YAML rounded 행 | exact `tokens.rounded.full: 9999` dest 2 at 116/118. 콜론 접합 문자열 dest **1** at 118. 116은 표 칸 `9999` + path. | dest **1** at 118. |
| 12 | §1 행 | "the signer and the integrating engineer" land at 9/11. 9 dest 0. | DESIGN dest **2** at **11/28**. |
| 13 | §1 URL 행 | Identity/source URLs P 49–70. 49는 절 뒤 빈 줄. | **50–70**. |
| 14 | §11 행 | `Tainan` DESIGN dest 3 at 9/11/13. 출현은 6. | dest **6** at 9/11/13. |
| 15 | §13 행 | disposition P 132 (표 구분선). | **133**. |
| 16 | §14 행 | Error/Link `DESIGN.md` 186. | **188**. |
| 17 | Footer 행 | Freshness 37–47; Conflicts 47. | Freshness **37–46**. Conflicts **46**. |
| 18 | Sibling 절 | 전사 85–94; sibling-only 96–101. 94·96·101은 빈 줄/머리. | 전사 **85–93**. sibling-only **97–100**. |
| 19 | Deviations | `wc -w` 4,934. worker-close 실측 4,932. 감사 후 5,065. | **5,065**. |
| 20 | 헤더·Deviations SHA | worker-close만. | auditor DESIGN SHA `f1d091895645c04ebd67714a79ca2e1a8f26f5cfab611a996ca1c4d83236e4ed`. |
| 21 | F1 | 27항목 = 27. 빠진 판단을 목록에 안 적음. | 27=27 유지. persona-section / qualitative-claim / Font 칸 / Error-Link를 목록에 반영. |
| 22 | F2 | favicon dest·페르소나 132를 착수 숫자로 적음. | favicon P dest 1 at 16. 페르소나 **133**. |

Destination SHA `7ab6ad140fbfd471711afb483d6c6a65ec761edd98f90e46e090ce82ee1ab70d` → `f1d091895645c04ebd67714a79ca2e1a8f26f5cfab611a996ca1c4d83236e4ed` (한정 확장 후). 줄 수 DESIGN `wc -l` **338** 불변. provenance 201 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 27개 완전형은 evidence class를 끝까지 닫음. 발행 DS(kdan-ui-revamp) 있음 — published-spec form이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: `DESIGN.md` 130이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component gate를 전문으로 담는다. "B3 유지"는 본문 실재.
- E2d: sibling-only 머리(`provenance.md:95`)는 부재를 단언하지 않고 field kind만 이름한다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a: 삭제 처분 행(`provenance.md:133`, 로그 §13)은 역할 라벨·served-by 종류만. 이름·나이·도시·전기 문구 재수록 없음.

## 범위 밖 관찰

- **A5a.** gate `copy-loss` compared 0 / candidates 64. 발행 라틴 이름 8종(Kdan Mobile / kdanGreen / kdan-ui / kdan-ui-revamp / Clear Sans / SF Mono / Gray 1000 / Gray 100)과 YAML `use` 8종이 DESIGN에 있다. 라틴 카피 손실은 눈에 띄지 않음. `verdict: PASS`는 대조 0건의 「잃은 것 없음」이지 카피 보존 증명가 아니다.
- **B1.** sibling 전용 `playwright` / `rgb(0,45,55)` / `rgb(202,255,0)` / `raw source-file fetch` DESIGN dest 0. h3·섹션 표제 분류 침투 없음.
- **D2a 본문.** `business user` / `decision-maker` / `needs to move documents` / `evaluates Kdan` / `drawn in by` / `scanning the hero` / `served by` DESIGN dest 0 / P dest 0. Audience는 원본 §1·§10 그룹 `the signer and the integrating engineer`만 (dest 2 at 11/28).
- **A1 키 경로.** YAML `tokens.components` 4레코드 type/bg/fg/border/radius/height/font/hover/use/disabled가 각 블록에 행으로 있다. icook형 필드 소실 없음. `tokens.spacing.xs: 4` ≠ `tokens.rounded.sm: 4` ≠ component `4px`. `tokens.spacing.base: 16` ≠ type 16. canvas/on-primary 둘 다 `#ffffff`. foreground/body 둘 다 `#191919`.
- **E2c dest-0.** `native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `not in the token set` / `loading | applicable` DESIGN dest 0 (로그 mention이지 본문 use가 아님).

AUDIT_DONE fixes=22
