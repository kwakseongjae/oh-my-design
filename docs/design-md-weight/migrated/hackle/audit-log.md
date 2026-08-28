# Hackle F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/hackle/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/hackle/DESIGN.md`
sibling: `web/references/hackle/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -oF <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.
날짜: 2026-08-28

발행 1차 DS 없음(getdesign.md no data; refero not listed). toss형 닫힘 `not Hackle-authored or a separately published UI specification`을 요구한다. 기존 한정이 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 핵클 / 올인원 AI 그로스 플랫폼, 라이브 카피(데모 둘러보기, 상담 신청하기, 간편발송, 수락/거부, document.title EN), SDK org URL, 개발자 문서 트랙.
- **관측 기술** — 네 표면의 hex·치수·family·`Primitive type`, YAML use/font/states 바이트, `box-shadow: none`, `120ms`/`200ms`/`320ms`, 경로 분리(`md: 12` ≠ `lg: 12`).
- **편집적 해석·인과 판단** — 표면 귀속·GitHub 비토큰, 분위기/거부·포용, 과제/청중 선정, 원칙·Do/Don't 이유, 역할 수식, 커브 생략 근거, Outside-captures 경계, 폴백 금지, kind/applicability, 플랫 시스템과의 일관, 보이스 읽기.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not Hackle-authored` + `separately published UI specification`)이 없던 자리, 또는 기존 한정이 그 읽기를 이름하지 않던 자리만 고쳤다.

감사 전 본문 완전형: 세 조각 각 **26**. provenance Derived editorial inventory **26행** — 본문 26과 숫자는 맞았으나, 한정이 없던 편집 문장 4건이 원장 밖이었다 (좁은 쪽, E1).

## 수정 목록

1. `DESIGN.md:11` Scope ¶2 — 기존 한정은 engineered-but-friendly / single-blue / calmer docs만 가리켰다. 「confident, clean SaaS console」 읽기를 같은 한정 문장에 접어 넣음(+0 발생).
2. `DESIGN.md:156` Motion easing — 「not traceable to Hackle evidence, so the curves are omitted」는 증거 분류·인과인데 인접 완전형이 없었다. 같은 줄에 완전형 신설.
3. `DESIGN.md:190` Font evidence / Outside these captures — 「sits outside this contract」는 계약 경계인데 인접 완전형이 없었다. 같은 칸에 완전형 신설.
4. `DESIGN.md:228` Assets — 「consistent with the flat system」은 인과 읽기인데 `:227` 파비콘 한정만 있고 이 문장을 가리키지 않았다. 같은 줄에 완전형 신설.
5. `DESIGN.md:502` State record — 기존 한정이 per-control 관측 부정을 이름하지, 목적지 컨트롤에 treatment를 붙이지 않는다는 닫는 문장(`:515`)을 이름하지 않았다. 같은 한정에 접어 넣음(+0 발생).
6. `DESIGN.md:553` Layout image — 「consistent with the flat system」은 `:527`·`:535`와 인접하지 않다. 같은 줄에 완전형 신설.
7. `provenance.md` Portable derived-editorial scope — **26행 → 30행**. Motion omitted-curves · Font Outside · Assets image · Layout image 4행 추가, Scope ¶2·State 서술 확장. 본문 30 = 원장 30.
8. `migration-log.md` YAML spacing/shape — `full: 9999` dest 123/131/525를 정확 문자열 DESIGN **1**(131) / bare `full 9999` 123/525 / `9999px` 129로 갈라 적음 (gogoro형).
9. `migration-log.md` YAML components — `Token-set use:` 442/462/473/495 → **443/463/474/497**.
10. `migration-log.md` Footer GitHub — `https://github.com/hackle-io` dest 9/13/645 → **9/645**. 13은 scheme 없는 `github.com/hackle-io`.
11. `migration-log.md` §5 — Whitespace 불릿 `529–531` → **531–533**.
12. `migration-log.md` §7 Do's — `61–66` → **61–68** (여덟 항목).
13. `migration-log.md` §4 — Marketing Feature Card `477–483` → **477–485**.
14. `migration-log.md` §10 — further published strings `575–600` → **575–601**.
15. `migration-log.md` §12 — inventory `150–175` (26행) → **152–181** (30행).
16. `migration-log.md` §14 C2 — Accept L/E/S `381–383` → **384–386**; Search `406–408` → **410–412**; C4 `463/474/483` → **464/475/485**; badge 이유 `499` → `Kind: non-interactive` **490** + 이유 **498**.
17. `migration-log.md` sibling 절 — 전사 `70–88` → **70–90**; sibling-only `91–99` → **91–100**.
18. `migration-log.md` Deviations·F1·F2 — 워커 26 / SHA `95576040…`를 superseded로 두고 사후 30 / SHA `7bbad3f6…`.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 30 | 1 | 2 |
| `not Hackle-authored` | 30 | 2 | 2 |
| `separately published UI specification` | 30 | 2 | 2 |
| inventory 데이터 행 | — | 30 | — |
| `box-shadow: none` | 2 | 1 | 3 |
| `full: 9999` | 1 | 2 | 1 |
| `full 9999` | 2 | 0 | 1 |
| `9999px` | 1 | 0 | 1 |
| `https://github.com/hackle-io` | 2 | 2 | 2 |
| `Kind: non-interactive` | 1 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 0 |
| `38px` / `복사` / `핵클 사용 가이드` / `oklab` | 0 / 0 / 0 / 0 | 3 / 2 / 4 / 2 | 2 / 3 / 4 / 2 |
| `박지훈` / `이서연` / `최민수` | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| `cubic-bezier` | 0 | 3 | 4 |
| `measures 1440px` | 0 | 0 | 0 |
| B3 다섯 종류+게이트 (`DESIGN.md` 164) | 1 | 0 | 1 |

한정 줄: 9, 11, 13, 15, 26, 31, 44, 48, 59, 72, 88, 119, 133, 144, 156, 174, 184, 189, 190, 198, 218, 227, 228, 235, 502, 527, 535, 553, 558, 603.
DESIGN.md 645행 불변(제자리 문장 편집). SHA-256 `7bbad3f64dba38a6943277f8e58aa36b46769c5366dd4a6670ae641e26396c5d`.
토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그 기재 `copy-loss` compared **32** / candidates **210**. `verdict: PASS`는 대조한 32개 바늘에 손실 없음. 발행 카피 손 대조: `데모 둘러보기` / `Explore Demo` DESIGN 6 · `상담 신청하기` · `올인원 AI 그로스 플랫폼` · `앞서가는 기업들은 이미 핵클의 고객사입니다.` · `Leading brands are already using Hackle.` 1 · `AI-powered growth` 1 · `View Guides` 2 · `오류가 발생했습니다` 2. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`38px`, `복사`, `핵클 사용 가이드`, `핵클 서비스`, `핵클 가격 안내`, `oklab`, `font-size: 16px` docs body, `2962B`, `#f5f5f5` / `#e2eeff`) DESIGN.md **0**. sibling 방법 문자열 `h1/h2/h3` DESIGN **0** / provenance 1(전사). 본문 `H2/H3` 1은 원본 §2 「hero H1, section H2/H3」이지 sibling 구조 관측 승격이 아님. 고치지 않음.
- **D2a.** §13 삭제 행·Omission ledger는 절·인원·필드 종류만. 이름·나이·도시 세 파일 0. Primary tasks는 발행 라벨/표면이지 페르소나 동기(`integrating Hackle` / `patchwork stack` / `data-minded PM`) 승격이 아님(DESIGN 0).
- **E2d.** sibling-only 머리 「source body does not, kept here and not promoted」는 mention/use를 가르고 부재 분모를 원본·portable로 닫는다. 로그 `DESIGN.md` 0 목록(`38px`·`복사`·`핵클 사용 가이드`·`oklab`)은 DESIGN 분모이며 그 파일 0이 맞다. 「세 파일 어디에도 없다」 자기분모 단언 없음.
- **E2c.** B3 다섯 종류+퍼컴포넌트 게이트+단일 커브 배제 전문 DESIGN **164**. 「공식 출처로 검증될 때까지」 DESIGN **0**. 준수 주장 유지.

AUDIT_DONE fixes=18
