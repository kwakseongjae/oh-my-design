# Heptabase 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/heptabase/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/heptabase/DESIGN.md`
검증 sibling: `web/references/heptabase/.verification.md` — `find web/references/heptabase -type f`와 `test -f web/references/heptabase/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 없음(getdesign 404; refero silent). B2a는 toss-form 완전형: `derived editorial implementation inference` / `not Heptabase-authored` / `separately published UI specification`. 예문 전제 주석에 따라 발행 사양 닫힘을 요구하지 않음.

착수 실측: 본문 완전형 29 / 원장 29. 좁은 쪽은 아니었으나 본문에 인접 한정이 없거나 이름을 안 붙인 편집 문장이 있어 29가 과소였다.

## 수정 목록 (16건)

### B2a — 인접 한정 신설·범위 확장 (본문 6건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:13` — Scope ¶3 | 기존 한정이 「서사를 토큰 출처로 읽지 않는다」만 이름했다. 같은 단락의 operating-base `country: TW` 인과와 「design-led founder's hand is visible in the restraint」는 세 번째 부류인데 한정이 가리키지 않음. | 기존 완전형에 그 두 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:31` — Audience | 기존 한정이 청중 선정만 가리켰다. 같은 단락의 Taipei-built → 繁體中文 fallback-scope 인과는 세 번째 부류. | 기존 완전형에 그 인과를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:130` — Shape | 기존 한정이 workhorse·키경로만 가리켰다. `:128`의 「10px는 `tokens.rounded` 스텝이 아니다」는 분류 판단. | 기존 완전형에 10px 컴포넌트 측정을 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:209` — Type roles | 「They are not converted to a single px form」은 형태 분류 판단. `:215` Type-rules 한정은 계층 원칙만 가리킨다. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |
| 5 | `DESIGN.md:414` — Accent Treatment | 「color is information, not decoration」은 원칙 재서술. `:232`는 kind/applicability, `:48`은 Principles 머리라 인접이 아님. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |
| 6 | `DESIGN.md:550` — Recorded unresolved | 「not permissions to invent, and not a list of domains the source never established」는 목록 프레이밍 판단. 인접 한정 없음. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 32, `not Heptabase-authored` 32, `separately published UI specification` 32. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 15, 26, 31, 44, 48, 58, 71, 88, 117, 130, 140, 152, 170, 180, 185, 186, 194, 209, 215, 224, 225, 232, 414, 418, 450, 452, 473, 478, 550.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | `provenance.md` Portable derived-editorial scope | 착수 원장 29행 = 본문 29. 본문에 한정 3건을 신설하면 원장이 좁아진다(fastcampus형). Scope ¶3·Audience·Shape 행은 본문이 이제 덮는 재료를 적지 않음. | 원장 29→**32**. 행 신설 3(Type roles `:209` · Accent Treatment `:414` · Recorded unresolved `:550`). Scope ¶3·Audience·Shape 행 서술 확장. 헤더 `32 = 32`. inventory `154–185`. |

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML identity 행 | favicon slug 목적지 `provenance.md` 15/23 — 23은 slug URL 바이트 없음(논의문). 정확 URL은 P **15** + DESIGN **224**. | 15. 23은 URL 없는 논의로 병기. |
| 9 | YAML family 행 | load names 182/188–189 — 188은 `### Family` 표제, 189는 빈 줄. 실제 `__instrumentSans`/`__Inter`는 182/190–191. | 182/190–191. 본문 경로 190–192. |
| 10 | YAML type 행 | 209 한정을 적지 않음. | 209 dest 추가. |
| 11 | YAML spacing/shape 행 | 10px dest `128/267/291` — 291은 Ghost `Border`. 실제 Radius는 **267/292**. | 128/267/292. 130 확장 반영. |
| 12 | YAML components 행 | `card` ×3를 381/394/405로 적음 — 실제 **380/391/402**. `Token-set use:`를 248/271/295/317/341/363…으로 적음 — 271/295는 font record·Font 줄. 실제 use **248/272/297/318/341/365/385/396/407**. font record 247/270/294 → **247/271/296**. | 실측 줄로 교정. |
| 13 | §3 행 | 209 한정을 적지 않음. family를 188–194로 묶음. | 209 dest + family 190–194. |
| 14 | §4 행 | 414 한정을 적지 않음. | 414 dest 추가. |
| 15 | §10 행 | Forbidden register dest 515 — 실제 **514**. | 514. |
| 16 | §12 · Deviations · F1 · F2 | B2a 29=29, inventory 154–182. 본문·원장 32. | F1 32줄(209·414·550 추가) · inventory 154–185 · F2 `B2a 32=32`. worker-close 29는 이관 시점 측정으로 남기고 auditor 32를 병기. |

Destination SHA `6237d717…` → `daae28f9e5b214f443d4f7df88850f5301cd261ba76915cc6ae2b796497384f8` (한정 신설·확장 후). 줄 수 DESIGN 556 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss-form 닫힘(1차 DS 없음; v12 전제 주석).
- Scope ¶3 창업 서사(Alan Chan / Taipei / Delaware / Y Combinator W22) — 원본 §11 발행·공개 사실. 한정이 가리키는 것은 분류·읽기.
- B3 준수 주장 — `DESIGN.md` 160이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음. 552는 다섯 종류+게이트만 (E2c 유지).
- `loading \| applicable` DESIGN 0 · `https://heptabase.com` homepage dest 9(224는 favicon path segment, 로그가 이미 제외) · B3 160 전문 — 2차 목적지 허위 아님.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/heptabase/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Alan Chan, Taipei / Delaware / Y Combinator W22, vision 문장, 라이브 카피(Master anything you learn / Get started / 繁體中文 등), YAML use/font 바이트.
- **관측 기술** — 라이브 hex·치수·`box-shadow: none`·Instrument Sans 500 / Inter · unitless `1.30`/`1.50`/`1.00` · `pill 9999` · `Primitive type`.
- **편집적 해석·인과 판단** — 표면 경계·Wiki 비토큰, 분위기 읽기, TW 분류 인과·founder's hand, 거절/포용·thesis 시연, 과제/청중 선정, 원칙·Do/Don't 이유, 팔레트 수식, 키경로 분리, 10px 비스텝, 커브 생략, kind/applicability, 액센트=정보, 보이스 읽기, unresolved 프레이밍.

세 번째 부류 중 29곳은 착수 시 인접 완전형이 있었고, Type roles·Accent·Unresolved 3곳은 한정이 없어 그 자리에 붙였고, Scope ¶3·Audience·Shape 3곳은 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 32 | 1 | 2 |
| `not Heptabase-authored` | 32 | 2 | 2 |
| `separately published UI specification` | 32 | 2 | 2 |
| inventory 데이터 행 | — | 32 | — |
| `Token-set font record:` | 3 | 0 | 1 |
| `token-set font record` | 0 | 0 | 0 |
| `loading \| applicable` | 0 | 0 | 1 |
| `loading \| not-applicable` | 6 | 0 | 1 |
| `https://heptabase.com` (접두 포함) | 2 | 9 | 2 |
| `https://wiki.heptabase.com` | 2 | 4 | 1 |
| `Chen Yi-Hsuan` / `Daniel Okafor` / `Mizuki Tanaka` | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| `1440×900` / `50%` / `Pricing \| Heptabase` / `playwright` | 0 / 0 / 0 / 0 | 2 / 1 / 2 / 3 | 1 / 1 / 2 / 2 |
| B3 다섯 종류+게이트+부분확인 배제 (`DESIGN.md` 160) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 0 / candidates 170 (0%). `verdict: PASS`는 대조한 바늘이 없어서 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`Master anything you learn` DESIGN 4 · `Get started on mobile` 4 · `For anyone building a lifelong knowledge base` 2 · `Trusted by customers from the` 2 · `Ask AI to explain any sources you bring` 2 · `create a world where anyone can effectively` 3 · `Save 25%` 4 · `繁體中文` · `Get started` · `Hero headline, Instrument Sans Medium`): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 로그가 적는 latin-copy-audit lost 6은 sibling title 1 + 설명문/§13 5(발행 카피 아님).
- **B1.** sibling 전용 `1440×900` / `420×676` / `50%` / `0.72` / `7px 18px 7px 22px` / `100 AI credits` / `AI TutorNew` / `Pricing | Heptabase` / `playwright`: DESIGN 0 / provenance mention. `h3`/`H3` DESIGN 0. **분류 침투 1(값 아님, 미수정):** `DESIGN.md:224`가 sibling의 「TW brand-owned count」 제외를 본문 사실로 인용한다. 값은 원본 logo slug와 같고, 한정이 classing만 가리킨다.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 인원·필드 종류만. 식별자(`Chen Yi-Hsuan` / `Daniel Okafor` / `Mizuki Tanaka` / `London` / `Kyoto`) 세 파일 0. Primary tasks는 hero 라인 / Get started / pricing toggle / top nav. §13 전기·동기(`matches how she actually thinks` / `desk, not a dashboard`) DESIGN 0. **로그 A5a 행이 `this is an AI feature.`를 삭제 처분 인용으로 다시 적음(LOG 1 / DESIGN 0 / PROV 0) — 재수록 형태, 미수정.**
- **E2d.** 로그 "`loading | applicable` DESIGN 0"은 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음. Omission ledger "not restated here"는 필드 종류만 적고 식별자를 열거하지 않음.

AUDIT_DONE fixes=16
