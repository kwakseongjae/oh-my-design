# maum.ai 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/maum-ai/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/maum-ai/DESIGN.md`
검증 sibling: `web/references/maum-ai/.verification.md` — `find web/references/maum-ai -name '.verification.md'`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-01

발행 1차 UI 사양 없음(getdesign SPA shell; refero silent). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not maum.ai-authored or a separately published UI specification`을 요구한다. 기존 20건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 20 / 원장 1:1 inventory **0**(Evidence-class 절은 출처 주석 4줄 요약뿐 — ferrari형 절 부재 + fastcampus형 과소). Spacing `~4px`/dominant-rhythm, Shape "workhorse"의 불완전형(`source's own wording`), Family heavier/sci-fi, Image "consistent with the flat system", Voice-sample 괄호 캡션은 세 번째 부류인데 인접 완전형이 없었다.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 10건, 발생 수 +5)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:107` — Foundations Spacing | `~4px` base / dominant `8/16/20/32` rhythm은 세 번째 부류. 인접 완전형 없음. 토큰 스텝 값은 관측. | 같은 문단에 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:116` — Foundations Shape | "Calling 20px the workhorse card radius is the source's own wording"는 증거 class를 끝까지 닫지 않음(B2a 불완전). | 완전형으로 교체. 발생 수 +1. |
| 3 | `DESIGN.md:148` — Foundations Motion | 기존 한정이 "this paragraph"의 reduced-motion·motion character만 이름함. 바로 위 duration/easing 표의 역할 배정은 세 번째 부류인데 한정 밖. | 기존 완전형에 duration roles + easing-use assignments를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:158` — Font evidence | 기존 한정이 sorting만. Resolution 칸(발행 사양 없음 / 배포 파일 없음 / declared-only 없음 / license 없음 / 포획 밖 타입값 없음)은 세 번째 부류. | 기존 완전형에 칸 해상을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:175` — Typography Family | "document default" / "heavier Korean face" / "geometric sci-fi face" / 세 job 배정은 세 번째 부류. `:158`은 표 sorting이고 `:191`은 표 뒤 읽기라 인접이 아니다. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:217` — Capture record | "The following applicability note"인데 노트는 위(`:211`–`:213`)에 있음. omit-kind 결정이 한정이 가리키는 범위 밖. | "above"로 방향을 고치고 omit-kind를 이름함. 발생 수 +0. |
| 7 | `DESIGN.md:378` — Layout Whitespace | 기존 한정이 "generous breathing room"만. Engineered breathing room / Flat segmentation / Two-track / `~4px` rhythm 읽기는 같은 절의 세 번째 부류. | 기존 완전형에 네 읽기를 접어 넣음. 발생 수 +0. |
| 8 | `DESIGN.md:406` — Touch targets | 기존 한정이 comfortable / unmistakable만. "easy touch entry"(`:401`)는 같은 종류의 형용사인데 이름되지 않음. | "easy"를 접어 넣음. 발생 수 +0. |
| 9 | `DESIGN.md:413` — Image behavior | "consistent with the flat system"은 인과 읽기. `:406`은 높이 형용사라 인접이 아니다. | 완전형 신설. 발생 수 +1. |
| 10 | `DESIGN.md:420` — Voice samples | "The parenthetical labels are the source's own captions"는 불완전형. 괄호(positioning / frontier-model framing / engineering identity)는 레지스터 읽기. | 완전형으로 교체. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 25, `not maum.ai-authored or a separately published UI specification` 25. `provenance.md`의 inventory는 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 15, 21, 31, 44, 48, 58, 71, 87, 107, 116, 128, 148, 158, 175, 191, 204, 217, 221, 378, 386, 406, 413, 420, 428, 440.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus) + 절 자체 부재에 가깝다(ferrari). 본문 20(감사 후 25)인데 원장은 1:1 표가 없었다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | `provenance.md` Derived editorial inventory | 착수 시 1:1 표 0. "Evidence-class boundaries" 4줄은 출처 HTML 주석의 층 분류이지 본문 한정 25건의 원장이 아니다. | **25** data rows (P 203–227). 헤더 `25 complete / 25 data rows`. |
| 12 | `provenance.md` claim-ledger 다음 | 같은 hex `#ffffff`가 canvas / on-primary / card hairline / top-nav background로 갈라지는데 원장이 그 분리를 적지 않음(krafton형 E1). 본문 Semantic color·컴포넌트 행에는 이미 갈라져 있음. | 네 job을 병합하지 않는다는 원장 문장 신설 (P 188). |

### E2 / E2a / E2c — 로그 목적지 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다. 본문을 고친 뒤 A5a·F2 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | YAML family 행 | `Pretendard` DESIGN **23** / `Jamsil` **14** / `Orbitron` **14**. `grep -oF` 착수 실측 28 / 15 / 15 — 줄 수(라인 히트 22 / 14 / 14)를 센 것. 감사 후 본문 한정이 가족명을 더 써서 **29 / 16 / 16**, P **12 / 8 / 5**. | 발생 수로 고침. |
| 14 | A5a `MAUM.AI Foundation Model` | DESIGN dest **4**. 실측 **5** (Scope / Font evidence / Family / Type-roles notes / Voice samples). | dest **5**. |
| 15 | A5a `maum.ai BRAIN Team` | P dest **7**. 실측 **8**. | P dest **8**. |
| 16 | Elevation / Shape dest | Shadow token dest **127**, 한정 dest **129**, Shape **111–117**. 127·129·117은 빈 줄(humanscape형). 실제 Shadow token **126**, 한정 **128**, Shape 내용 **111–116**. | 126 / 128 / 111–116. |
| 17 | §10 Voice samples 2차 목적지 | 처분이 「분리 → provenance」. `마음AI - Physical AI 플랫폼` DESIGN **1** / P **0** (fitpet형: 본문 0회인 문자열을 2차 목적지로 적음). 원장은 그룹명 "Voice samples (3, §10)"만. | 그 문자열의 provenance dest를 철회. 그룹 원장 P 182만 분리 목적지로 남김. |
| 18 | §15 cubic-bezier | dest **P 198**. 198은 inventory 도입문. 곡선 세 문자열은 **P 234**. | P **234**. |
| 19 | 본문 삽입 후 dest 표 | Family(+2)·Image(+2) 삽입으로 컴포넌트·Layout·Content 줄이 밀렸는데 로그가 착수 줄을 유지. Type roles 181–187(실제 183–189), Primary CTA 233(235), Charcoal 260(262), Contact 286(288), Product 311(313) / Title 321(323), Tinted 323(325), Accent 333(335), Nav 343 / labels 350 / active 349·363 (345 / 355 / 354·369), Layout 372(376), Image 404–405(410–413), Voice samples 414–416(422–424), Voice tone 418–428(426–436), Forbidden 432(440), States 223–231 한정 219 (225–233 / 221). | 재실측 줄로 전부 갱신. |
| 20 | B2a 행 · A5a P dest · Identity · hashes | B2a **20**. Identity dest P **7–21**(7은 표 머리). `https://maum.ai/` dest ≥1. `favicon` P 8; `revolutionary`/`game-changing` P 0 — inventory mention 후 P 9 / 1. Destination SHA 구값. | B2a **25**, inventory P **203–227**. Identity data P **8–21**. URL DESIGN 1 / P 5. favicon P 9. refused-register P dest는 mention으로 표기. DESIGN SHA `5f71db74…`, provenance SHA `cfad90df…`. |

B3 준수 주장 — `DESIGN.md:150`이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 "Official documentation of a single curve or duration is not that gate"를 전문으로 담음 (E2c 유지).

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 DS 없음, v12 전제 주석).
- Scope ¶1–3 — `:15` 한정이 경계·분위기·refuses/embraces를 이미 이름함.
- Semantic color 역할 산문 — `:87`이 역할명과 넓은 use 서술을 이름함.
- Type roles 표 값 · 컴포넌트 anatomy 행 — 관측/토큰. 한정 대상 아님.
- 치환 금지(`:177`) · Unknowns · Named gaps · Governance — 카탈로그 규칙.
- Motion 곡선 값 — 본문에 역할만 남고 곡선 문자열 DESIGN 0 (T2 관례). 되살리지 않음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/maum-ai/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — `마음AI` / `구 마인즈랩` / `시작하기` / `Contact Us` / `Chatbot Inquiry` / `Physical AI 플랫폼` / `MAUM.AI Foundation Model` / `maum.ai BRAIN Team` / `JINDO BOT` / `AIden` / `MAIED` / `Defense` / `Company` / `Physical AI` / YAML `use` 바이트.
- **관측 기술** — 라이브 hex·치수·Pretendard/Jamsil/Orbitron·`Type: button|input|card|badge|tab`·unitless `1.01`/`1.25`/`1.40`/`1.19`·`full: 9999`·`box-shadow: none`.
- **편집적 해석·인과 판단** — 두 표면을 계약 범위로 읽기, 분위기/refuses·embraces, 과제/청중 선정, 원칙·Do/Don't 이유, 색 역할명, spacing rhythm, workhorse radius, elevation/motion 철학, font-class 해상, Family job, type-hierarchy, kind/applicability, 보이스·괄호 읽기.

세 번째 부류 중 20곳은 착수 시 인접 완전형이 있었고, 5곳은 없어 그 자리에 붙였다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---|
| `derived editorial implementation inference` | 25 | 0 | 2 |
| `not maum.ai-authored or a separately published UI specification` | 25 | 0 | 1 |
| inventory 데이터 행 | — | 25 | — |
| `Pretendard` | 29 | 12 | 4 |
| `Jamsil` | 16 | 8 | 5 |
| `Orbitron` | 16 | 5 | 4 |
| `MAUM.AI Foundation Model` | 5 | 1 | 2 |
| `maum.ai BRAIN Team` | 2 | 8 | 5 |
| `마음AI - Physical AI 플랫폼` | 1 | 0 | 2 |
| `Type: button` | 2 | 0 | 1 |
| `90px` / `Roboto` / `Log in` | 0 / 0 / 0 | 2 / 3 / 2 | 2 / 2 / 3 |
| `cubic-bezier(0.2, 0.6, 0.25, 1)` | 0 | 1 | 0 |
| B3 다섯 종류+게이트+부분확인 배제 (`DESIGN.md` 150) | 1 | 0 | 1 |

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다.

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 8 / candidates 170 (4.7%, 이관본 평균 4.4% 근처). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`시작하기` DESIGN 11 · `Contact Us` 9 · `Chatbot Inquiry` 9 · `마음AI - Physical AI 플랫폼` 1 · `Physical AI 플랫폼` 4 · `MAUM.AI Foundation Model` 5 · `maum.ai BRAIN Team` 2 · `MAIED` 10 · `AIden` 5 · `JINDO BOT` 5 · `Defense` 4 · `Company` 2 · `마음AI` 3 · `마인즈랩` 3 · `구 마인즈랩` 2 · `MindsLab` 3 · `유태준` 1 · `Taejun Yoo` 1 · `잠실체` 2 · `AI Human` 1 · `오류` 1 · `필수` 1): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 고치지 않음.
- **B1.** sibling 전용 `90px` / `115.2px` / `116.64px` / `48px` / `56px` / `10px` / `Roboto` / header `Log in` / `Guide`(헤더 버튼) / `zzznotabrandxyz` / `rgb(28, 30, 33)`: DESIGN 0 / provenance mention. 본문 `H1`은 원본 §10 Voice samples 캡션(원본 5)이지 sibling 구조 분류 승격이 아니다. sibling 전용 `portal H2` / `H2` / `H3` DESIGN 0 / 원본 0 / sibling 0. 본문에 sibling 구조 분류를 사실로 넣은 문장 없음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger `:233`)은 인원·필드 종류만. 식별자 문자열 DESIGN/provenance/log 0. Primary tasks는 표면 라벨. 원본 §13 동기·소속 분류 문구 DESIGN 0. Audience 그룹은 원본 §13 면책 문구와 바이트 동일. 원형 라벨을 처분 행에서 지울 대상 없음.
- **E2d.** 부재 단언 행이 그 문자열을 다시 열거하며 「세 파일 어디에도 없다」고 하는 형태 없음. sibling-only 표는 "Not promoted"이지 전 파일 부재 단언이 아니다.
- **A1 키 경로.** `tokens.components.<id>` 7레코드의 type/bg/fg/radius/height/padding/border/use/active는 대응 블록에 행으로 있다. YAML `font: "16px / 700 Pretendard"`는 DESIGN dest **0** — Primary CTA는 `16px / 700 / Pretendard`(슬래시 하나 추가) 1회, Nav·Badge는 `16px Pretendard weight 700`(§4 표기). Font **행**은 있으므로 icook형 열 소실은 아니다. 자리마다 YAML 바이트와 §4 표기를 섞은 것은 웨이브 40 항목 5(충돌 처리 비일관)에 가깝다. 컴포넌트 표를 건드리지 않음.
- **같은 hex 다른 역할.** `#ffffff`는 canvas / on-primary / card hairline / nav background. 본문에 이미 분리돼 있었고, 원장 P 188에 그 분리를 적었다(E1 #12).
- **충돌 처리.** sibling 90px vs source 65px, 115.2px vs 115px, header 버튼, `10px` radius, `Roboto` — 전부 source 유지. 문서 안에서 정책을 자리마다 다르게 쓰지 않음.

AUDIT_DONE fixes=20

## 개정 — 의미 검토 FAIL 2 (2026-09-01)

대상: `docs/design-md-weight/migrated/maum-ai/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (25=25, 203–227).

### 결함 1 — YAML `use` ↔ §표 use 절단 (A1 · 항목 11 / 형태 11)

Type roles Notes에 YAML `use`를 남기고 원본 §3 Notes 고유 표기를 병기. Charcoal Use에 YAML `use`를 남기고 원본 §4 Use를 병기. 한쪽으로 고치지 않음.

| 문자열 | 원본 | DESIGN | P |
|---|---:|---:|---:|
| `"MAIED" oversized wordmark` | 1 | 1 | 0 |
| `Feature section titles` | 1 | 1 | 0 |
| `Charcoal round CTA labels` | 1 | 1 | 0 |
| `Top navigation items` | 1 | 1 | 0 |
| `Secondary actions —` | 1 | 1 | 0 |

### 결함 2 — YAML↔§4 폰트 충돌을 자리마다 다르게 닫음 (항목 5)

Primary·Charcoal·Nav·Badge Font를 원본 YAML `font`와 §4 Font 병기. 원본·sibling에 없는 슬래시 추가형은 제거.

| 문자열 | 원본 | DESIGN | P |
|---|---:|---:|---:|
| `16px / 700 Pretendard` | 3 | 3 | 0 |
| `16px / 700 / Pretendard` | 0 | 0 | 0 |
| `20px / 600 Pretendard` | 1 | 1 | 0 |
| `20px / 600 / Pretendard` | 0 | 0 | 0 |
| `16px Pretendard weight 700` | 5 | 3 | 0 |
| `20px Pretendard weight 600` | 2 | 1 | 0 |

`node scripts/check-limiter-ledger.mjs maum-ai` → 본문 25 = 원장 25 (203–227). `migrate-reference.mjs --brand maum-ai --gate-only` → PASS.

갱신한 dest 행 (`grep -oF -e` 실측): `"MAIED" oversized wordmark` D1 · `Feature section titles` D1 · `Charcoal round CTA labels` D1 · `Top navigation items` D1 · `Secondary actions —` D1 · `16px / 700 Pretendard` D3 · `20px / 600 Pretendard` D1 · `16px Pretendard weight 700` D3 · `20px Pretendard weight 600` D1 · `16px / 700 / Pretendard` D0 · `20px / 600 / Pretendard` D0 · `Top navigation item` D2 · `Pretendard` 29→33 · `Contact Us` 9→10 · `Chatbot Inquiry` 9→10 · `MAIED` 10→11.

FIX_DONE maum-ai fixed=2 logdest=16
