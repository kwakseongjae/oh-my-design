# Greencar F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/greencar/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/greencar/DESIGN.md`
sibling: `web/references/greencar/.verification.md` (`find web/references/greencar -type f` = `DESIGN.md` + `.verification.md`. `test -f` 직접 경로로 존재 확인. dotfile은 `ls`/`*`에 안 보임.)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -o <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.
날짜: 2026-08-28

발행 1차 DS 없음. toss 완전형(`derived editorial implementation inference` + `not Greencar-authored` + `separately published UI specification`)을 요구. 예문의 「발행 사양 부재」 전제가 이 브랜드에서는 참이다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 홈페이지 카피(`Create a Better Life`, `그린카는 고객 중심의…`, `채용 바로가기` 등), 2011·2015·롯데렌탈 연혁, 제품명 G car / Movus / Clingwash, 문서 제목.
- **관측 기술** — hex·radius·shadow·type roles·primitive type·YAML use 바이트, 두 표면 URL, sibling이 기록한 `롯데렌터카 G car` / `그린카의 이동은`.
- **편집적 해석·인과 판단** — 분위기·거부/포용, 역할 이름, 그룹핑, applicability Reason, 파비콘·서체 분류, 브레이크포인트를 선언으로 읽는 문장, 발행 카피 옆 괄호 gloss, 8px를 action workhorse로 부르는 읽기, 시스템 폰트 대체 금지.

세 번째 부류인데 인접 완전형이 없던 자리, 또는 기존 한정이 그 읽기를 이름하지 던 자리만 고쳤다.

감사 전 본문 완전형: `derived editorial implementation inference` **25** / `not Greencar-authored` **25** / `separately published UI specification` **25**.
provenance Derived-inference ledger **25행** — 본문 25와 숫자는 맞았으나, 한정이 없거나 주어가 좁은 해석 6건을 세면 **좁음**(E1).

## 수정 목록

1. `DESIGN.md:9` Scope ¶1 — 「Every value stays attached」와 G car 제목을 sibling observation으로 읽는 판단이 기존 한정의 주어(표면 경계) 밖이었다. 같은 한정 문장에 접어 넣음(+0).
2. `DESIGN.md:129` Shape — 「the action workhorse」는 8px 스텝에 대한 편집적 이름인데, 기존 한정은 no-pill 읽기만 가리켰다. 같은 한정에 접어 넣음(+0).
3. `DESIGN.md:181` Family — 「Do not substitute a system font… as the Greencar face」는 원본 Don't가 아니다. 기존 한정의 주어를 대체 금지까지 넓힘(+0).
4. `DESIGN.md:218` Surface state contract — 「not a second token-inspection pass」는 증거 종류 분류. 기존 한정의 주어를 그 분류까지 넓힘(+0).
5. `DESIGN.md:381` Layout breakpoints — 「declared behavior rather than an observation」에 인접 완전형 한정 신설(+1).
6. `DESIGN.md:398` Content published strings — 「(aspirational brand statement)」 gloss에 인접 완전형 한정 신설(+1).
7. `provenance.md` Derived-inference ledger — **25행 → 27행**. breakpoints · published-string gloss 2행 추가, Scope ¶1 · Shape · Family · Surface state 주어를 본문과 맞춤. 본문 27 = 원장 27 (E1 1:1).
8. `migration-log.md` YAML spacing/rounded 행 — `full: 9999` provenance 2→**3**, bare `9999` provenance 2→**4**. 실측: DESIGN 1 / 2. 본문 값 불변.
9. `migration-log.md` §15 durations 행 — 「each DESIGN 1」은 `motion-standard`에 거짓. 실측 `motion-fast` 1 · `motion-standard` **2**(표+fade-in 규칙) · `motion-slow` 1.
10. `migration-log.md` F1 · §8 · SHA — 워커 25/`8130014e…`를 27 / SHA `4f0058f6…`로 교체. §8의 「declared behavior note」를 본문 완전형 한정을 가리키도록 고침.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 27 | 1 | 2 |
| `not Greencar-authored` | 27 | 1 | 2 |
| `separately published UI specification` | 27 | 1 | 2 |
| inventory 데이터 행 | — | 27 | — |
| `full: 9999` | 1 | 3 | 3 |
| bare `9999` | 2 | 4 | 4 |
| `motion-standard` | 2 | 0 | 1 |
| `cubic-bezier` | 0 | 4 | 3 |
| `김도윤` / `이서연` / `박준호` / `서울` / `경기` / `부산` | 0 | 0 | 0 |
| `h3` / `H3` | 0 / 0 | 0 / 0 | 0 / 0 |
| `220px` / `6px 0px` | 0 / 0 | 1 / 1 | 1 / 1 |
| `그린카의 이동은` | 1 | 2 | 2 |
| `롯데렌터카 G car` | 2 | 2 | 2 |
| B3 다섯 종류+게이트 전문 (`DESIGN.md` 156) | 1 | 0 | 1 |

한정 줄: 9, 11, 13, 15, 17, 23, 32, 36, 49, 59, 72, 89, 118, 129, 140, 144, 173, 181, 200, 209, 218, 234, 379, 381, 389, 398, 425.
DESIGN.md 469행 불변. SHA-256 `4f0058f6364b3e4ca47bec810beabf9297026af0eed54db7b203e167864d41d3`.
토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그 기재 `coverage.copy-loss` compared **25** / candidates **170**. `verdict: PASS`는 대조한 25개 바늘에 손실 없음. 발행 카피 손 대조: `Create a Better Life` DESIGN 8 · `그린카는 고객 중심의 모빌리티 풀 라인업을 열어갑니다.` 3 · `채용 바로가기` 5 · `더 알아보기` 5 · `그린카(Greencar) 공식사이트` 2 · `G car zone` / `Movus` / `Clingwash` 각 2. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`220px`, `6px 0px`, `font-weight: 500`, `50%`, `100px`, `1012`) DESIGN.md **0**. sibling `section H3` 분류는 원본 HTML comment에 `Section H3` 1 · sibling 1 · DESIGN **0**(본문은 `Section heading`). 구조 관측 승격 없음. `그린카의 이동은` / `롯데렌터카 G car`는 sibling 발행 카피로 Content에 채택(A5)되었고 원본 `롯데렌탈` 철자와 병합되지 않음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger · DESIGN Audience)은 필드 종류만 적음. 식별자 세 파일 0. Primary tasks는 모듈·라벨(`그린카는 고객 중심의…`, `채용 바로가기`, `회사소개`)이지 §13 전기(`city dweller` / `working parent` / `small-business owner`) 승격이 아님. `deal banners` DESIGN 1은 원본 §11 refuse 문장.
- **E2d.** 「세 파일 어디에도 없다」 0. Audience 「appear in neither output」는 식별자를 나열하지 않음. sibling-only 행은 「portable body에 승격하지 않음」으로 DESIGN.md만 분모로 닫음. `cubic-bezier` 행은 DESIGN 0을 단언하고 로그가 그 문자열을 처분 지목으로 적는다고 문장에 밝힘.
- **E2c.** B3 준수 주장은 `DESIGN.md` 156에 transition properties · animation name · duration · easing · reduced-motion + per-component 게이트 전문이 있어 유지. `공식 출처로 검증될 때까지` DESIGN 0.

AUDIT_DONE fixes=10
