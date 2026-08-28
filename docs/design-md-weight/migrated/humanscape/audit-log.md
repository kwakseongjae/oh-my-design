# Humanscape 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/humanscape/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/humanscape/DESIGN.md`
검증 sibling: `web/references/humanscape/.verification.md` — `find web/references/humanscape -type f`와 `test -f web/references/humanscape/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 없음(getdesign.md/humanscape SPA shell; refero silent). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Humanscape-authored or a separately published UI specification`을 요구한다. 기존 33건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 33 / 원장 33. 숫자는 맞았으나 Font evidence Declared-only 칸과 Voice samples 괄호 읽기는 세 번째 부류인데 인접 한정이 없었다. 33은 과소였다.

## 수정 목록 (12건)

### B2a — 인접 한정 신설 (본문 2건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:179` — Font evidence / Declared-only | "Those names are fallbacks; they are not the brand face"는 증거 class 해상. 인접 칸 `:176`·`:178`·`:180` 한정은 Official product-use / Official distributed / License만 가리킨다. Family `:186` 치환 금지는 절이 달라 인접이 아니다. | 같은 칸 끝에 완전형 한정 신설. 새 줄 아님. |
| 2 | `DESIGN.md:441` — Content / Voice samples | 세 인용 뒤 괄호("(human-first, data-second framing)" / "(infrastructure register)" / "(data-for-decisions mission)")는 레지스터 읽기. `:431` 한정은 "the tone table below"까지만 이름을 붙이고, 표 다음 블록에는 인접하지 않는다. 인용 원문 자체는 라이브 표면 카피. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not Humanscape-authored` 35, `separately published UI specification` 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 15, 21, 32, 36, 49, 59, 72, 89, 116, 127, 137, 149, 166, 176, 178, 179, 180, 181, 186, 204, 210, 219, 220, 227, 369, 402, 404, 426, 431, 441, 486, 520.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Portable derived-editorial scope | 착수 원장 33행 = 본문 33. 본문에 한정 2건을 신설하면 원장이 좁아진다(fastcampus형). | 원장 33→**35**. 행 신설 2(Declared-only `:179` · Voice samples `:441`). 헤더 `35 = 35`. |

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | YAML typography 행 | `` `1.50 (24px)` dest 200 `` — `grep -oF` DESIGN **2**(200/204). | 200/204. |
| 5 | YAML metadata 행 | 푸터 **Verified:** dest `provenance.md` 36 — 36은 빈 줄. 실제 문장은 **37**. Freshness 표 데이터는 32–35. | **37**. 표 32–35. |
| 6 | Footer / Conflicts 행 | `Conflicts unresolved: none` dest `provenance.md` 38 — 38은 빈 줄. 실제는 **39**. Freshness 범위를 29–38로 묶어 Conflicts를 넣지 못함. | Conflicts **39**. Freshness **30–37**. |
| 7 | Sibling 절 | 전사 dest `71–98` — 98은 "source body does not" 도입문. 전사는 **71–96**. | **71–96**. |
| 8 | Sibling 절 | sibling-only 목록 dest `102–108` — `38px`·`#cde4ff`는 **100–101**. | **100–108**. |
| 9 | A5a 표 | document.title dest `98/106` — 두 줄 모두 제목 문자열이 없음(fitpet형 2차 목적지). 실제는 전사 **96** + 제외 목록 **104**. Strategic Technology dest `98/107` — 107은 method strings. 실제는 **105**. | titles **96/104**. phrase **105**. |
| 10 | §3 행 | 179 한정을 적지 않음. 180/204만. | 179 dest 추가. |
| 11 | §10 행 | 441 한정을 적지 않음. 431만. | 441 dest 추가. |
| 12 | §12 · Deviations | 로그가 B2a 33=33, inventory 160–192을 현재 상태로 남김. 본문·원장 35. | inventory **160–194 (35)**. Auditor 절: F1 35줄(179·441 추가) · `B2a 35=35`. worker-close 33은 이관 시점 측정으로 남기고 auditor 35를 병기. |

Destination SHA `3e0e5f80…` → `5de5b511e435d10138767650673ca49cd246e44231cc009645581d6eb0d3a21a` (한정 신설 후). 줄 수 DESIGN 525 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 DS 없음, v12 전제 주석).
- Scope ¶1 계약 범위 — `:9` 한정이 "Reading those two inspected pages as this contract's token surfaces"를 이미 이름함.
- Scope ¶3 narrative-not-token — `:13` 한정이 그 분류를 가리킴.
- Type roles "never converted to a single px form" / Spacing·Shape 키 경로 분리 — A1 값 보존, 브랜드 해석 아님.
- B3 준수 주장 — `DESIGN.md` 157이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음. 522는 다섯 종류+게이트만, 부분확인 문장 없음 (E2c 유지).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/humanscape/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Humanscape / 휴먼스케이프, RareNote / 레어노트, MamiTalk / 마미톡, LifeX, March 2016, Jang Min-hoo / 장민후, eXploring human Life…, eXplore Life, Decide Better., The Foundation for Scalable Innovation., 1,800+ / 2.5M+ / 230M+, YAML `use`/`font` 바이트.
- **관측 기술** — 라이브 hex·치수·Pretendard·`Primitive type`·unitless `1.2`/`1.5`·`full: 9999`·`box-shadow: none`.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 증거 class 해상(폴백 ≠ 브랜드 페이스), kind/applicability, 보이스·괄호 읽기.

세 번째 부류 중 33곳은 착수 시 인접 완전형이 있었고, Declared-only와 Voice-sample 괄호 2곳은 한정이 없어 그 자리에 붙였다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 35 | 1 | 1 |
| `not Humanscape-authored` | 35 | 2 | 1 |
| `separately published UI specification` | 35 | 2 | 1 |
| inventory 데이터 행 | — | 35 | — |
| `Kind: non-interactive` | 3 | 0 | 1 |
| `Token-set use:` | 9 | 0 | 1 |
| `1.50 (24px)` | 2 | 0 | 1 |
| `loading \| not-applicable` | 3 | 0 | 1 |
| `loading \| applicable` | 0 | 0 | 1 |
| `김서연` / `박준호` / `판교` / `서울` | 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 | 1 / 1 / 1 / 1 |
| `38px` / `#cde4ff` / `Strategic Technology Investors` | 0 / 0 / 0 | 2 / 2 / 2 | 3 / 3 / 3 |
| B3 다섯 종류+게이트+부분확인 배제 (`DESIGN.md` 157) | 1 | 0 | 1 |

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다.

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 3 / candidates 200 (1.5%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`eXploring human Life through data-driven Intelligence Across the Life Journey` DESIGN 2 · `The Foundation for Scalable Innovation.` 1 · `eXplore Life, Decide Better.` 2 · `eXplore Our Business` 5 · `eXplore About Us` 4 · `1,800+ Healthcare Network` 3 · `2.5M+ Global User Base` 3 · `230M+ Data Intelligence` 3 · `AI Growth Monitoring` 2 · `Developmental Care & Treatment` 2 · `Care Navigation for Serious Illness` 3 · `we're hiring` 6 · `Growth Layers` 6 · `text-[#00ADF7]` 2 · `휴먼스케이프` 3 · `레어노트` 3 · `마미톡` 2 · `장민후` 3 · YAML `use` 10+9): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. latin-copy-audit lost 1(`eXploring human Life through data-driven...`)은 원본 HTML 주석 말줄임이고 전문은 본문에 있다. 고치지 않음.
- **B1.** sibling 전용 `38px` / `#cde4ff` / `#deecfc` / `#d2d4d9` / `#d7dde5` / `데이터 기반 헬스케어` / `사업 영역` / `Strategic Technology Investors` / `playwright`: DESIGN 0 / provenance mention. 본문 `24px H3 category heads`(`DESIGN.md` 391)는 원본 §5 문구(원본 2)이지 sibling H3 표본 승격이 아니다. sibling 전용 구 `Strategic Technology Investors` DESIGN 0. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger `:126`)은 인원·필드 종류만. 식별자(`김서연` / `박준호` / `판교` / `Arun Patel` / `singapore`) DESIGN/provenance 0. Primary tasks는 표면 라벨. §13 전기·동기(`Distrusts fragmented` / `cross-border data` / `healthcare-focused VC` / `restraint as maturity`) DESIGN 0. Audience 그룹(`rare-disease patients and guardians, healthcare partners, and investors`)은 원본 §13 면책 문구와 바이트 동일. **로그 A5a 칸**이 삭제 식별자(`김서연`, `서울`, `박준호`, `판교`)를 다시 열거 — 원장 재수록. 고치지 않음.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). 발명 도메인 dest 0도 DESIGN 분모. "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=12
