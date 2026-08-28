# kbank 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kbank/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kbank/DESIGN.md`
검증 sibling: `web/references/kbank/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not K bank-authored or a separately published UI specification`을 요구한다. 기존 30건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 30 / 원장 30. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:102` 다섯 종류 게이트, Assets `:140` 아이콘-라이브러리 분류, Assets `:142` 로고-가시성≠대조 증거가 인접 완전형 없이 세 번째 부류였다. Font `:118`은 alternate/system/declared-only/license-unnamed만 이름하고 official-use-not-license · sole-UI-family-because · no-rehost를 빠뜨렸다. Capture `:167`은 절차·평결만 이름하고 white-on-blue≠a11y-audit를 빠뜨렸다. Content `:322`은 voice-register만 이름하고 여는 단락의 copy-rules bound를 빠뜨렸다.

## 수정 목록 (32건)

### B2a — 인접 한정 (본문 6건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:102` — Motion B3 | 다섯 증거 종류 게이트와 부분 확인 불충분은 세 번째 부류. `:100` 한정은 selected-tab-as-state / reduced-motion unnamed만 가리킨다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:118` — Font evidence | official-use "not a license grant", sole-UI-family-because-computed+FontFaceSet, "does not authorize rehosting"는 세 번째 부류. 기존 한정은 alternate / system / declared-only / license-unnamed만. | 기존 완전형에 세 판단을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:140` — Assets icon-library | "rather than a general application icon library"와 `swiper-icons` 비치환은 세 번째 부류. `:141` 한정은 favicon pointer만. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:142` — Assets logo-visibility | "not evidence for control contrast, accessible names, landmarks, or mobile behavior"는 세 번째 부류. 인접 한정 없음. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:167` — Capture record | `:165` white-on-blue pairing "does not substitute for a contrast or accessibility audit"는 세 번째 부류. 기존 한정은 절차·kind·applicability·not-complete만. | 기존 완전형에 refusal to treat the white-on-blue pairing as a contrast or accessibility audit를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:322` — Content & Locales | `:316` "does not establish copy rules for regulated disclosures…"는 세 번째 부류. 기존 한정은 voice-register만. | 기존 완전형에 그 opening bound를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33, `not K bank-authored` 33, `separately published UI specification` 33. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 42, 51, 59, 73, 84, 92, 96, 100, 102, 118, 124, 128, 136, 140, 141, 142, 167, 182, 207, 231, 257, 281, 304, 309, 311, 322, 358.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | Motion B3 행 | 없음. 본문 `:102` 신설. | 행 15 신설. |
| 8 | Font evidence 행 | alternate / system / declared-only / license만. 본문 `:118`이 이제 official-use-not-license · sole-UI-family · no-rehost도 이름한다. | 세 판단을 행에 추가. |
| 9 | Assets icon-library 행 | 없음. 본문 `:140` 신설. | 행 20 신설. |
| 10 | Assets logo-visibility 행 | 없음. 본문 `:142` 신설. | 행 22 신설. |
| 11 | Capture 행 | 절차·평결만. 본문 `:167`이 이제 white-on-blue≠a11y-audit도 이름한다. | 그 판단을 행에 추가. |
| 12 | Content 행 | voice-register만. 본문 `:322`가 이제 copy-rules bound도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **30 → 33** (E1 1:1). 데이터 177–209.

### E2 / E2a / E2c — 로그 목적지 (20건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | YAML identity 행 | inspected home P 47/57/69. 69는 deposit-index URL. | DESIGN dest 1 at 9 / P dest **4** at **23/47/57/68**. |
| 14 | YAML identity 행 | favicon slug P dest 2 at 16/27. URL 문자열은 16만. | DESIGN dest 1 at 141 / P dest **1** at 16. 23/25는 field-name mention. |
| 15 | YAML metadata 행 | 35–41; `verification_v2.checked` 36; **Verified:** 41; harvested at 21 only. | freshness 33–37; checked **34**; Verified **39**; Conflicts **41**; `components_harvested` dest **3** at 21/148/214. exact `tokens.source: reconciled` dest 0. |
| 16 | YAML `tokens.note` 행 | 전사 87. | **86**. |
| 17 | YAML family 행 | 58-use 111 · 181-use 112. | 58 at **113** · 181 at **114**. |
| 18 | YAML spacing 행 | `wide-action-inline` P dest 3 at 131/164/197. 197은 구 inventory. | P dest **3** at 131/164/**200**. |
| 19 | §3 행 | Evidence classes 107–114. Official distributed는 116. | **112–116**. |
| 20 | §4 행 | compact use 178 · tab aria-selected 226 · medium-confidence 255. | use **180** · aria-selected dest **2** at 163/228 · medium-confidence **254**. |
| 21 | §10 행 | Voice Don'ts 63–64. 63은 §7 swiper-icons. | **64–65**. |
| 22 | §11 행 | narrative-not-token P 215. | **218**. |
| 23 | §12 행 | inventory 177–206 (30). | **177–209** (33). |
| 24 | §13 행 | disposition P 146 (motion 행). | **144**. |
| 25 | §14 행 | table 149–161 (Pressed까지). Placeholder "146–150"은 E2b 거짓 포인터. | table **153–163**. 래퍼는 Deviations에만; 원장 행을 지어내지 않음. |
| 26 | Footer 행 | Freshness 35–43 · Tier 1 69–76 · Tier 2 80–81 · Conflicts 43. | table **33–37** · Verified **39** · Conflicts **41** · Tier 1 **68–75** · Tier 2 **79–80**. |
| 27 | Sibling 절 | 전사 93–106 · sibling-only 108–117. | 전사 **94–101**. sibling-only **105–113**. |
| 28 | A5a latin-copy-audit | selectors dest 178/203/226/255/279. | **180/203/229/255/279**. |
| 29 | Deviations | B2a 30=30 · `wc -w` 5,481. | 33=33. `wc -w` **5,684**. |
| 30 | F1 | 30항목 = 30. | 33항목 = 33. 신설 3 + 확장 3을 목록에 반영. |
| 31 | F2 | 30=30. dual dest를 착수 숫자로 적음. 페르소나 146. | 33=33. inspected / slug / note 86 / spacing dest / 페르소나 **144**를 실측으로 갱신. |
| 32 | 헤더 SHA | worker-close만. | auditor DESIGN SHA `539fb1f72ad6336eade3ccd4ed91464d8f2771b65258072671a0ea856d2f0241`. |

Destination SHA `36de545776f31a0ff9407b953ddf4949d4cce16ec2b49c3ffb18c0988543c4f7` → `539fb1f72ad6336eade3ccd4ed91464d8f2771b65258072671a0ea856d2f0241` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **371** 불변. provenance 215→**218**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 30개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2d: sibling-only 머리(`provenance.md:103`)는 부재를 단언하지 않고 field kind만 이름한다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:144`)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 0 / candidates 96. `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨: K bank / “pleasant financial life” / Pretendard K Edition / Pretendard / ONE card / `swiper-icons` / `-apple-system` / “closer, easier, and more pleasant” — 원본·산출 모두 dest ≥1. 발행 라틴 손실은 안 보인다. latin-copy-audit 10 lost는 YAML 메타·`[FILL IN]`·셀렉터·도구명(발행 카피 0).
- **B1.** sibling 전용 `66` / `#B6F23D` / `케미코드` / `56px` / ExtraLight / `playwright_cli` / compact·primary `oklch(0.571…)` / `oklch(0.343…)` DESIGN dest 0. sibling의 h3/섹션 표제 분류가 본문에 사실로 들어온 흔적 없음.
- **D2a.** 식별자·동기 발명·소속 재구성 DESIGN dest 0. Audience/Primary tasks는 원본 그룹 네 개(Everyday banking customer / Customer exploring savings, cards, or investment / Customer seeking reassurance / Internal contributor)만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음.
- **A1.** 원본 YAML `tokens.components.public-home-shell` 5필드가 Public home shell 블록에 행으로 있다: `type: card` → `Primitive type: \`card\``; `bg: transparent` → `Background: \`transparent\``; `radius: "0px"` → `Radius: \`0px\``; `shadow: "none"` → `Shadow: \`none\``; `use` verbatim → `Token-set use:`. icook형 키 경로 소실 없음. YAML 컴포넌트 레코드는 이 하나뿐.

AUDIT_DONE fixes=32
