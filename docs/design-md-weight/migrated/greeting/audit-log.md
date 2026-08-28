# Greeting F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/greeting/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/greeting/DESIGN.md`
sibling: `web/references/greeting/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -oF <pat> <file> | wc -l`. `grep -c` 미사용. 하이픈 선행 값은 `grep -oF -e`.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.
날짜: 2026-08-28

발행 1차 DS 없음(getdesign.md no data; refero no Greeting match). toss형 닫힘 `not Greeting-authored or a separately published UI specification`을 요구한다. 기존 한정이 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 자기기술 #1 ATS, 두들린/Doodlin 운영, 홈페이지 카피·각주·document.title, 공식 블로그·운영사 URL의 존재.
- **관측 기술** — 두 표면의 라이브 hex·치수·family·`Primitive type`, YAML use/font/states 바이트, `box-shadow: none`, 경로 분리(`md: 16` ≠ `lg: 16`).
- **편집적 해석·인과 판단** — 표면 비호환·서사≠토큰, 분위기/거부·포용, 과제/청중 선정, 원칙·Do/Don't 이유, 역할명·호흡/기하, 폴백 금지, kind/applicability, 보이스 읽기.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not Greeting-authored` + `separately published UI specification`)이 없던 자리, 또는 기존 한정이 그 읽기를 이름하지 않던 자리만 고쳤다.

감사 전 본문 완전형: 세 조각 각 **24**. provenance Derived editorial inventory **24행** — 본문 24와 숫자는 맞았으나, 한정이 없던 편집 문장 2건이 원장 밖이었다 (좁은 쪽, E1).

## 수정 목록

1. `DESIGN.md:9` Scope ¶1 — 기존 한정은 proxy refusal만 가리켰다. 표면 귀속·블로그/운영사 비토큰 읽기를 같은 한정 문장에 접어 넣음(+0 발생).
2. `DESIGN.md:13` Scope ¶3 — 「official history … do not by themselves supply interface tokens」는 증거 분류인데 인접 완전형이 없었다. 같은 줄에 완전형 신설.
3. `DESIGN.md:91` Semantic color — 기존 한정이 hairline-as-separator / dramatic proof-band를 이름하지 않았다. 같은 한정에 접어 넣음(+0 발생).
4. `DESIGN.md:211` Family — 시스템 폴백을 브랜드 얼굴로 제시하지 말라는 금지는 원본 Don't가 아니다(마지막 문장 Poppins 전용만 Don't). 인접 완전형 신설.
5. `DESIGN.md:433` Layout — 기존 한정에 「azure accent word as the focal anchor」 읽기를 포함(+0 발생).
6. `provenance.md` Derived editorial inventory — **24행 → 26행**. Scope ¶3 · Family 2행 추가, ¶1·Semantic·Layout 서술 확장. 경계표의 Scope ¶3 행은 이제 B2a이므로 제거. 본문 26 = 원장 26.
7. `migration-log.md` YAML family 행 — Family 205–211 목적지에 `:211` 한정 존재를 보탬.
8. `migration-log.md` §5 — 레이아웃 불릿 `424–428` / 한정 `430` → **426–431 / 433**.
9. `migration-log.md` §7 Don'ts — `72–82` → **72–83** (마지막 항목 83).
10. `migration-log.md` §8 — 표 `434–438` / 주 `432` / touch `440` / collapsing `442–447` / image `449` → **437–441 / 435 / 443 / 445–450 / 452**. `measures 1440px` dest 0을 dest **1**(452 부재 단언문) / provenance **2**로 교정 (fitpet형 2차 목적지 + E2d 자기분모).
11. `migration-log.md` §10 — 본문 `455–485` / 표 `456–462` / 샘플 `464–468` / 추가 `470–480` / 금지 `483` / 한정·gloss `454` → **455–488 / 459–465 / 467–471 / 473–484 / 486 / 457**, 닫는 줄 **488**.
12. `migration-log.md` §13 행 — Scope ¶3 한정이 `:13`에 있음을 보탬.
13. `migration-log.md` §14 C2 — C4 포인터 `378/389/403` → **380/391/403**. `kind: non-interactive`는 DESIGN **0**; 실제 문자열은 `Kind: non-interactive` **2**.
14. `migration-log.md` sibling 절 — Desktop 행 포인터 `438` → **441**. `measures 1440px` dest 0을 dest 1(단언문)로 동일 교정.
15. `migration-log.md` Deviations — `Named gaps`는 DESIGN **0** / provenance **0**. 목적지를 Scope + Recorded unresolved로 철회. B2a 계수 24→**26**.
16. `migration-log.md` F1·F2·SHA — 워커 24 / SHA `371bcd33…`를 superseded로 두고 사후 26 / SHA `e431af98…`.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 26 | 2 | 3 |
| `not Greeting-authored` | 26 | 1 | 5 |
| `separately published UI specification` | 26 | 1 | 5 |
| inventory 데이터 행 | — | 26 | — |
| `box-shadow: none` | 3 | 0 | 2 |
| `rgba(255,255,255,0.12)` | 3 | 2 | 3 |
| `measures 1440px` | 1 | 2 | 2 |
| `Named gaps` | 0 | 0 | 1 |
| `Kind: non-interactive` | 2 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 0 |
| `박지현` / `김도윤` / `이서연` / `서울` / `경기` | 0 | 0 | 0 |
| `174.851px` / `14px 20px 14px 25px` / `1440×900` | 0 / 0 / 0 | 2 / 2 / 3 | 1 / 1 / 1 |
| `cubic-bezier` | 0 | 4 | 5 |
| B3 다섯 종류+게이트+partial 배제 (`DESIGN.md` 180) | 1 | 0 | 1 |

한정 줄: 9, 11, 13, 15, 26, 31, 45, 49, 59, 74, 91, 133, 145, 158, 162, 198, 202, 211, 230, 239, 247, 407, 433, 435, 457, 486.
DESIGN.md 528행 불변(제자리 문장 편집). SHA-256 `e431af98a1543af89fcf48c06ccbc90b46f87e15568295e4c0f5e3336e5dc3c9`.
토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그 기재 `copy-loss` compared **41** / candidates **207**. `verdict: PASS`는 대조한 41개 바늘에 손실 없음. 발행 카피 손 대조: `채용 관리를 넘어 채용 성공으로` DESIGN 5 · `Beyond recruitment management` 1 · `국내 1위 채용 관리 솔루션` · `10,000+` 8 · `모집부터 선발까지` 2 · `오류가 발생했습니다` 1 · `필수` 1. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`174.851px`, `-8.74254px`, `14px 20px 14px 25px`, `1440×900`, `원하는 인재를 빠르게 채용하고 싶은 기업에 그리팅 ATS를 추천합니다.`, `그리팅 블로그 | 채용 관리를 넘어, 채용 성공으로`, `rgb(0,0,0)` ×880, `h1/h2/h3` 방법 문자열) DESIGN.md **0**. `Feature H3` DESIGN 1은 원본 HTML comment 라벨이지 sibling 구조 관측 승격이 아님. 고치지 않음.
- **D2a.** §13 삭제 행·Omission ledger는 절·인원·필드 종류만. 이름·나이·도시 세 파일 0. Primary tasks는 발행 라벨/표면이지 페르소나 동기(`Tired of tracking` / `present to executives`) 승격이 아님(DESIGN 0).
- **E2d.** 로그의 `measures 1440px` dest 0은 그 문자열이 DESIGN 452·provenance 51/218 단언문에 있어 거짓이었다 — 위 10·14에서 dest 1/2로 고침. sibling-only 표 머리 「absent from the portable body」는 DESIGN만 분모로 닫고, 해당 값은 DESIGN 0.
- **E2c.** B3 다섯 종류+퍼컴포넌트 게이트+partial-confirmation 배제 전문 DESIGN **180**. 「공식 출처로 검증될 때까지」 DESIGN **0**. 준수 주장 유지.

AUDIT_DONE fixes=16
