# nexon 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/nexon/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/nexon/DESIGN.md`
검증 sibling: `web/references/nexon/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF --` | `wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Nexon-authored or a separately published UI specification`을 요구한다. 기존 34건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 34 / 원장 34. 숫자는 맞았으나 Type roles 표 뒤 `:217` 크기≠간격 비병합이 `:204` 한정(표 앞, YAML/§3 keep-both와 `1.20`만)에 인접하지 않았다(krafton Motion keep-both형). Ghost `:302`는 원장이 이미 retry 유지를 이름하는데 한정 본문은 geometry만 말했다.

문장 분류: 브랜드 발행 사실(연도·프랜차이즈명·CTA 라벨·YAML 값·§표 수치) / 관측 기술(live hex·padding·GNB underline) / 편집적 해석·인과 판단(키 비병합, keep-both, 분위기, 승격 게이트, 페르소나 삭제 읽기, retry를 ghost 증명으로 읽지 않기). 세 번째 부류만 수정 대상.

## 수정 목록 (11건)

### B2a — 인접 한정 (본문 2건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:217` — Type roles size-off-spacing | YAML `nav-link.size` `16` is not `tokens.spacing.base: 16`, YAML `body.size` `12` is not `tokens.spacing.md: 12`는 세 번째 부류. `:204`는 표 앞이고 YAML/§3 keep-both와 unitless `1.20`만 가리킨다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:302` — Ghost / Text Action | retry 문구를 capture record에 두고 ghost-only 증명으로 다시 쓰지 않기는 세 번째 부류. 원장은 이미 이름했으나 한정 본문은 geometry만. | 기존 완전형에 retry keep-on-capture를 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not Nexon-authored` 35, `separately published UI specification` 35. 완전형 정규식 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 55, 73, 93, 122, 135, 147, 151, 174, 176, 184, 200, 204, 217, 221, 234, 252, 266, 289, 302, 326, 350, 375, 388, 399, 413, 469, 474, 517.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 본문 +1이면 원장도 +1.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | Type roles 행 / 신설 행 | 한 행이 keep-both와 size-off-spacing을 묶었는데, 본문은 표 앞 `:204`와 표 뒤 `:217` 두 한정. | Type roles 행은 YAML/§3 keep-both만. `Type roles size-off-spacing` 행 신설. |
| 4 | 헤더 / 행 수 | 34 complete / 34 data rows. | **35** / **35**. |

헤더 / 데이터 행 **34 → 35** at 193–227 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (7건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 본문 한정 추가 뒤 dest를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | YAML type-roles 행 | `tokens.spacing.base: 16` / `tokens.spacing.md: 12` dest 미기재. 신설 원장 행이 P 출현을 바꿈. | `tokens.spacing.base: 16` DESIGN dest **5** / P dest **1**. `tokens.spacing.md: 12` DESIGN dest **5** / P dest **2**. 표 뒤 한정 명기. |
| 6 | YAML spacing 행 | `md: 12` P dest **1**. 실측 P dest **2**. `base: 16` P dest 미기재였는데 원장 신설 후 P dest **1** (이중 목적지). | `md: 12` dest 6 / P dest **2**. `base: 16` dest 6 / P dest **1**. exact path dest도 병기. |
| 7 | §3 행 | Type roles 한정만. | 표 뒤 size-off-spacing 한정을 목적지 목록에 추가. |
| 8 | §12 행 | inventory 34 data rows. | **35**. |
| 9 | Closing §16 행 | "Both §8 and §16 writings stay where they differ". `Apply NEXON Gothic Bold on CTAs and emphasis` SRC 1 / DESIGN dest **0** / P dest **0**. | 유지 4문자열 dest 1. 미유지 바늘 dest 0으로 고침. §8 `Use NEXON Gothic Bold for CTAs and emphasis` dest **1**. |
| 10 | Deviations | B2a 34=34 · `wc -w` 6,972 · worker SHA만. | 35=35. `wc -w` **7,023**. auditor SHA `5fe631a554e1460c9db0ab32226dd0b6ae0ba6091d58db5ca6779039eeeffa05`. |
| 11 | F1 / F2 / unique-phrase | 34 한정. dual dest를 착수 숫자로 적음. Apply dest 0이 잔여 zero 목록에 없음. | 35 한정. `md: 12` 6/2 · `base: 16` 6/1. Apply dest 0을 잔여 zero에 추가. |

Destination SHA `3e0258a74e65d1cc249ce8b628d19938f7d9822559e3b4d1b49e097783f6340a` → `5fe631a554e1460c9db0ab32226dd0b6ae0ba6091d58db5ca6779039eeeffa05` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **522** 불변. provenance 228→**229**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 34개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- A1 키 경로: 원본 YAML `tokens.components` 9레코드의 type/bg/fg/radius/padding/font/use/active가 대응 블록에 행으로 있다. icook형 hex-elsewhere 없음. 15 YAML `use` 문자열 전부 DESIGN dest ≥1 (Token-set use 행).
- E2c: B3 전문 `DESIGN.md` 176 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:44` dest 1. 준수 주장 유지.
- E2d: cubic-bezier 전체 문자열 DESIGN dest 0 / P dest 1. 분모는 portable body. 「세 파일 어디에도 없다」고 단언하지 않는다. Named gaps의 `cubic-bezier` 단어는 역할 인용(T2 관례).
- D2a 처분 행(`provenance.md:164`)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. `Min-jun Park` / `Soo-yeon Lee` / `David Chen` / `Hana Kim` / `Busan` / `Singapore` DESIGN dest 0 / P dest 0. `Seoul` DESIGN dest 1은 §11 창립 서사. Primary tasks는 표면·컨트롤이지 페르소나 동기가 아니다. Audience 그룹 문구는 원본 §13 머리 dest 1 = DESIGN dest 1.
- Sibling-only `35.98px` / `14.4px` / `15px` / `넥슨` / `company.nexon.com` / `sans serif` DESIGN dest 0. 구조 분류(`portal H2`류) 승격 없음.
- `prose-derived` 해당 없음. `live-extract` DESIGN dest 0 / `components_harvested` DESIGN dest 0 / `consumer-tech` DESIGN dest 0 은 로그 주장과 맞다.

## 범위 밖 관찰

- **A5 / 항목 5.** 원본 §16 Do `Apply NEXON Gothic Bold on CTAs and emphasis` SRC 1 / DESIGN dest 0 / P dest 0. 같은 규칙의 §8 표기 `Use NEXON Gothic Bold for CTAs and emphasis` dest 1은 있다. 한 문서 안에서 §8/§16 이중 기록은 대체로 keep-both인데 이 한 줄만 빠짐. 라틴 발행 지시문이므로 본문에 되살리지 않고 로그만 dest 0으로 맞췄다.
- **A5a.** 게이트 `copy-loss` compared 6 / candidates 117. `verdict: PASS`는 대조한 바늘 분모일 뿐 카피 전수 보존이 아니다. 손 스윕 발행 한국어 라벨(다운로드 / 게임 시작 / 지금 플레이 / 사전등록 / 예정된 이벤트가 없습니다. / 바람의나라)은 DESIGN dest ≥1.
- **같은 hex 다른 역할 (보고만).** `#ffffff`는 Semantic color canvas(페이지·카드·nav 배경)와 Disabled CTA Text, Ghost/Menu/Card/Input Background에 붙는다. `#000000`은 `on-primary`/`pure-black` 두 colors 키와 CTA/Badge Text. 원장은 `#000000` 두 키와 `#9fa1a7` disabled≠footer-label만 비병합으로 적는다. 본문이 「canvas ≠ disabled-text」를 편집 판단으로 말하지 않아 한정을 새로 만들지 않았다.
- **B1 인접.** sibling `Korean home page` SIB 1 / 원본은 `Korean home` / DESIGN `Korean home page` dest 1. `title "넥슨"`은 DESIGN dest 0. 값 승격은 없고 표제어 한 단어(`page`)만 겹친다. `getComputedStyle`은 원본 HTML 주석 SRC 1.

AUDIT_DONE fixes=11
