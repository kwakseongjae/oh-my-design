# Farfetch — F3 별도 세션 감사 로그

감사자: 신선한 세션(이관 워커와 분리). 범위: **B2·B2a** 및 **E1·E2·E2a–c** 전용.
규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9**.
원본 `web/references/farfetch/DESIGN.md` 는 읽기만 했고 수정하지 않았다.
수정 금지 대상(토큰 값, 컴포넌트 표, 상태 applicability, 섹션 구조)은 전부 그대로다 —
고친 문장은 모두 한정·원장 산문이다.

일자: 2026-08-26

## 검증 결과 (수정 후 실측)

| 검사 | 결과 |
|---|---|
| `migrate-reference.mjs --brand farfetch --gate-only` | **PASS**, problems `[]` |
| `inspectDesignMd` | `portable_core: true` · `level: portable-core` · `cleanTop: true` · failed checks 0 |
| `process-leak-check.mjs` `findProcessLeaks` (E1, portable 본문) | **0 hits** |
| A5 인용 문자열 바이트 대조 (원본 83종) | 누락 4종 = YAML 이스케이프 잔재 3종 + 페르소나 전용 `only 3 left!` — 로그에 기재된 그대로 |
| 원본 hex 7종 본문 잔존 | 7/7 |

## 수정 목록 (8건)

### B2a 계열 — 편집적 해석에 인접 한정 미비 (본문 4건)

1. **`DESIGN.md:54` — Do 적용 규칙 리드인.** 완전형이 아니라 역참조("the same
   qualification as the five items above")로만 한정하고 있었다. B2a는 인접 + 증거
   class 완전 구분을 요구하므로(apple §1.2 — 인접해도 불완전하면 FAIL) 완전형으로
   교체: "The reasoning attached to each is a derived editorial implementation
   inference from the verified surfaces; it is not Farfetch-authored or a separately
   published UI specification:". 규칙 8줄 자체는 바이트 그대로 두었다.

2. **`DESIGN.md:42` — Distinctive traits.** 한정이 "zero radius와 shadow-absence를
   luxury signal로 읽는 것" **하나만** 덮고 있었는데, 목록 안에 한정 밖의 편집적
   읽기가 둘 더 있었다 — "as though the UI were printed on heavy stock card",
   "as the singular visual drama". 한정 범위를 그 값들에 붙은 읽기 전체로 넓혔다.
   목록 8줄의 값·문구는 건드리지 않았다.

3. **`DESIGN.md:193` — Type rules.** 한정이 "size ceiling"만 덮고 있었으나 같은
   블록의 "Farfetch Basis is neutral by design"(브랜드 의도 귀속)과 "creating a
   calm typographic evenness"(평가)가 한정 밖이었다. 세 읽기를 모두 덮도록 넓혔다.
   두 weight·30px·15px 값은 recorded로 명시한 채 유지.

4. **`DESIGN.md:99` — 보존된 원본 내부 충돌(`#f5f5f5` nav hover)의 표기.**
   기존 문장은 "Reading them as an open tension rather than as a settled rule is a
   derived editorial implementation inference…"였다. 이건 분류가 뒤집혀 있었다 —
   두 문장이 서로 모순한다는 것과 이 문서가 그것을 고르지 않았다는 것은 **문서
   사실**이지 편집적 추론이 아니다. 이대로 두면 독자가 "미해결"이 아니라 "미해결로
   보는 것도 하나의 해석"으로 읽고, 어느 한쪽이 실은 정답일 수 있다고 추론할 여지가
   남는다. 미해결을 사실로 못박고("this contract does not resolve which of the two
   governs: whether a nav item takes a `#f5f5f5` hover fill is undetermined here,
   not settled in either direction"), 완전형 한정은 실제 해석 행위(둘을 화해시키는
   것)에 옮겨 붙였다. 두 원본 문장은 여전히 그대로 보존되어 있고 어느 쪽도 승격되지
   않았다.

한정을 **제거한 곳은 없다.** 네 건 모두 추가 또는 범위 확대다.
수정 후 완전형 한정은 19개 → **20개**(본문 라인 11·15·42·46·54·67·97·99·119·130·
151·153·193·199·207·392·417·424·437·452), 약화형("derived from verified surfaces"에서
멈춘 형태)은 0개.

### E2 계열 — 로그 disposition 불일치 (migration-log 2건)

5. **`tokens.components` 행 — E2c 과대 주장.** "each keeps its verbatim `use`
   string on a `Declared use:` line"이라고 적혀 있었으나 본문의 `Declared use:`
   줄은 **7개가 아니라 6개**다(grep 실측). button-outline 에는 그 줄이 없고, 그
   `use` 문자열 `Secondary actions, ghost variant` 는 컴포넌트의 Role 줄
   (`Role: Secondary actions, ghost variant on white canvas`) 안에 바이트 그대로
   살아 있다. **A5 손실은 아니다** — 문자열은 보존되어 있고 로그의 서술만 본문보다
   강했다. 실제 disposition을 적도록 행을 고쳤다. 컴포넌트 표는 손대지 않았다.

6. **`tokens.typography.family` 행 — 목적지 좌표 부정확.** `provenance:46 and :92`
   로 적혀 있었는데 :92는 fallback 한 행만 가리킨다. sans/fallback 두 claim 행을
   모두 가리키도록 고쳤고, provenance 편집으로 행 번호가 밀린 뒤 재실측해
   `provenance:46`(computed `body` 줄) + `provenance:93–94`(두 claim 행)로 확정했다.

### provenance derived 범위 (1건, E2 계열)

7. **`provenance.md` "Evidence-class boundary recorded by the source" — 범위가
   실제보다 좁게 적혀 있었다.** 원문 단락은 "luxury is restraint", "white-cube
   gallery aesthetic" 같은 **편집적 주장**만 한정 대상으로 서술한다. 그러나 본문의
   한정은 그보다 넓게 걸려 있다 — 원본이 시스템 사실처럼 제시하지만 2026-06-22
   inspect가 측정하지 않은 재구성물까지 덮는다: 11개 state treatment, duration 4종 +
   easing role 3종과 motion rules·`prefers-reduced-motion` 계약, 4행 breakpoint 표와
   collapsing sequence·cross-breakpoint image behavior, 팔레트 role 이름과
   monochrome-ladder 프레이밍, Do 8·Don't 8·Principles 5, type rules 근거,
   España 기록에서의 cross-storefront 일반화. 실제 범위를 기재하는 단락을 추가했다
   (좁게 적힌 것도 결함 — 감사 지시 3). 값·claim ledger·생략 원장은 손대지 않았다.

### F2 재대조 (8건째 — Pass 1 은 E2c 결함이기도 하다)

8. `migration-log.md` "Final passes" 두 문단을 실측으로 다시 썼다.

- **Pass 1.** 기존 문단은 "Nineteen adjacent qualifications … Each uses the complete
  form"이라고 적고 라인 54를 그 19개에 **포함**하면서 라인 99(`#f5f5f5` tension
  한정)를 **누락**했다. 즉 grep 카운트(19)와 열거된 집합(19)이 서로 다른 19였고,
  라인 54는 당시 완전형이 아니었다 — E2c. 수정 #1 이후 재실측해 20개로 갱신하고
  20개 라인 번호를 전부 명시했으며, 원래 문단이 왜 틀렸는지도 남겼다.
- **Pass 2.** 이중 목적지 행 수를 재실측했다. `이중 목적지` 라벨이 붙은 행은 **5개**
  (`logo`, `tokens.typography.family`, `tokens.typography.*` roles, §10 voice
  samples, §11 brand narrative)이고, §2 vs §7 `#f5f5f5` tension 행은 라벨 없이 두
  목적지를 적고 있어 실질 6번째다. 기존 문단의 "six dual-destination rows"는 결과적
  숫자는 맞았지만 근거가 불명확했으므로 어느 5개 + 1개인지 명시했다. `Declared use:`
  6개 정정, family 좌표 정정도 함께 기록했다. 감사 본문 수정 4건이 한정 산문만
  바꿨고 토큰·표·applicability·섹션 경계를 옮기지 않았음을 확인해, 위 목적지 행이
  전부 그대로 resolve됨을 재확인했다.

## 워커가 검토에 올린 항목 — 감사 판정

- **A5 (이 건의 핵심 위험) — 통과.** 직접 grep으로 확인했다. `- Role: "SALE", "NEW IN"
  label on product tiles`(:361)와 `"SS26 sale: up to 60% off"`(:387, :424, :440)가
  공존하고, :444가 그 대비를 명시적으로 못박는다("Preserve capitalisation exactly —
  "SALE" and "NEW IN" are set as tile labels in caps while "SS26 sale: up to 60% off"
  is not."). 원본 인용 문자열 83종을 스크립트로 바이트 대조한 결과 누락은 로그가
  기재한 4종(YAML 이스케이프 3 + 페르소나 전용 1)뿐이며, `use:` 문자열 12종은
  12/12 바이트 일치. 워커가 첫 패스에서 의역했다가 원복했다는 컴포넌트 `use` 문자열은
  현재 전부 원문대로다 — 다만 그 원복이 `Declared use:` 줄로 이루어진 것은 7개 중
  6개이고, 나머지 하나는 Role 줄 안에 있다(수정 #5).
- **정본 claim 바이트 일치 — 통과.** `authority`(evidence-backed-reconstruction 변형)와
  `changes` 두 본문을 `spec/fixtures/design-md-core-v2/DESIGN.md` 및 승인본
  toss·apple·29cm·karrot과 대조했다. `changes` 는 옥스퍼드 콤마 포함
  "Record, review, and validate changes before adoption." 로 바이트 일치, `authority`
  는 카탈로그 정본 문안 "This document is an evidence-backed reconstruction, not
  authority for an unrelated target project." 로 바이트 일치. `portable_core` 검사도
  두 claim 모두 pass. 워커가 다른 워커에게 알리라고 한 발견(정본 claim 본문의 바이트
  불일치는 마이그레이션 게이트가 못 잡고 `portable_core` 검사만 잡는다)은 이 건에서는
  실제 위반 없이 확인만 됐다.
- **§9 전용 값을 프롬프트 블록 삭제 **전에** 이동 — 통과.** 네 값 모두 본문에 있다:
  64px 헤더 바(:385), product-tile 브랜드명 13px/700(:270), 푸터 컬럼 그룹핑
  (:386, 원본 :305와 바이트 일치), "slight opacity reduction" hover 변형(:235, 두
  wording 병기). §9 Quick Color Reference 9매핑과 Iteration Guide 7항목도 각각
  삭제 전 잔존처를 확인했다.
- **Named gaps 를 2개로 축소 — 통과 (D1a 관점에서도 옳다).** 폰트 파운드리·라이선스
  열거를 스스로 제거한 판단이 맞다. 원본은 그 도메인의 존재 자체를 세우지 않으므로
  열거했다면 D1a 위반이었다. 남은 2개(easing curve 값, 라이브 form-validation error
  관측)는 원본이 §15와 §14/`tokens.colors.error`로 도메인을 세운 것들이다.
- **§15 커브 3종 삭제 + 생략 원장 기재 — 통과.** 세 `cubic-bezier(...)` 원값이
  생략 원장(provenance:112–114)에 정확히 기재되어 있고, 본문은 토큰 이름·용도를
  유지한 채 B3 다섯 증거 종류를 전부 명시하며("transition properties, animation name,
  duration, easing, and reduced-motion behavior") "A single curve confirmed elsewhere
  does not satisfy that condition." 로 약화 문구를 차단한다. 로그의 B3 준수 주장이
  본문보다 강하지 않다(E2c 통과).
- **보존된 원본 내부 충돌 — 표기가 부정확했다.** 수정 #4 참조. 보존 자체는 옳았고
  어느 쪽도 승격되지 않았지만, 미해결이 독자에게 "미해결"로 읽히지 않았다.

## 범위 밖 발견 (보고만, 수정하지 않음)

- **내부 충돌 2건의 처리가 서로 다르다.** `#f5f5f5` nav hover 충돌(§2 vs §7)은
  미해결로 보존했는데, newsletter input 밑줄 충돌(§9 프롬프트의
  `bottom underline 1px #b6b6b6` vs `tokens.components.input-email.border: 0px` +
  §4 `Border: 0px (none)`)은 삭제로 **해소**했다(로그 :44). 후자의 사유
  ("Contradicted inside the source itself")는 사실이고 값 `1px`/`#b6b6b6`는 Search
  Field에 살아 있으므로 A1 손실은 아니다. 다만 같은 종류의 원본 내부 모순에 대해 한
  건은 보존·한 건은 선택이라는 비대칭이며, 어느 쪽이 규칙집의 기본값인지 v9에는
  조항이 없다. A/E1 범위 밖이라 손대지 않았다.
- **E1 검사기 전역 현황.** `process-leak-check.mjs` 전체 스캔은 115개 중 **93개**가
  누출(총 199 hits)이라고 보고한다. farfetch 는 0이지만, 최다 빈발 항목은
  `catalog graph`(단독 1 hit 브랜드 다수)와 `legacy spec template`이다. 이 감사
  범위 밖이나, 웨이브 전체에 걸린 계열 결함으로 보인다.
- **A5 게이트 공백(로그가 이미 자진 보고).** `copy-loss` 검사가 비라틴 런에서만
  needle 을 만들기 때문에 이 레퍼런스처럼 라틴 브랜드 카피만 있는 건은 기계 검증이
  안 된다. 이번 감사는 스크립트 바이트 대조로 대신했고 통과했지만, v9 A5 가 태어난
  datadog 사례(`SEE THE PLATFORM` 의역)와 정확히 같은 사각이다 — 게이트 쪽 보강
  후보.
- **`Declared use:` 표기 일관성.** 7개 토큰 컴포넌트 중 6개만 그 줄을 갖는다.
  값 손실은 없으나(수정 #5), 컴포넌트 표 수정이 금지되어 있어 button-outline 에
  줄을 추가하지 않고 로그에만 실태를 적었다. 표 수정이 허용되는 후속 패스에서
  일관화 가능.

## 오탐 보고 (E3)

게이트 오탐을 피하려고 표기를 왜곡한 곳은 발견되지 않았고, 감사자 본인도 그런 회피를
하지 않았다. 게이트·`portable_core`·E1 세 검사 모두 수정 전후로 동일하게 통과한다.
보고할 신규 오탐 없음.

AUDIT_DONE farfetch fixes=8

## 정정 부기 (웨이브 23 개정, 2026-08-26)

이 감사 기록은 **고쳐 쓰지 않는다.** 아래는 웨이브 23 개정 워커가 실측으로 확인한
좌표 정정 1건이며, 위 본문은 감사 당시 그대로 둔다.

- **`audit-log.md:136` — `provenance:112–114` → 실제 `provenance:114–116`.**
  해당 문장은 §15 easing 커브 3종의 생략 원장 좌표를 가리킨다. 실측하면
  `provenance.md:112` 는 표 헤더(`| Item | Disposition |`), `:113` 은 구분선이고,
  세 커브 원값은 `:114`(`ease-enter` = `cubic-bezier(0.2, 0.6, 0.25, 1)`),
  `:115`(`ease-exit` = `cubic-bezier(0.4, 0.0, 1, 1)`),
  `:116`(`ease-standard` = `cubic-bezier(0.25, 0.1, 0.25, 1)`)에 있다. 헤더 2줄을
  포함한 오프셋 오류이며, 감사의 판정("커브 3종 삭제 + 생략 원장 기재 — 통과")
  자체는 실측으로 다시 확인해 그대로 유효하다.
- 같은 재검증에서 이 감사 기록의 나머지 좌표는 전부 유효했다:
  `DESIGN.md` :42·:54·:99·:193·:235·:270·:361·:385·:386·:387·:424·:440·:444,
  그리고 `provenance:46`·`provenance:93–94`. 웨이브 23 개정은 줄 수를 바꾸지 않는
  제자리 치환만 했으므로(개정 전후 `DESIGN.md` 489줄 동일) 이 좌표들은 개정 이후에도
  같은 줄을 가리킨다.
- 감사자의 8건 수정은 하나도 되돌리지 않았다 — `:99`의 문서사실 재분류 포함.
  웨이브 23이 건드린 자리는 `:9`·`:78`(D1/D1a), `:223` 총칙, `:261–263`·`:336–338`·
  `:355–357`(C2)뿐이고, 감사 수정 대상 줄과 겹치지 않는다.
