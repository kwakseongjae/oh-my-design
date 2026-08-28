# Gangnamunni 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/gangnamunni/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/gangnamunni/DESIGN.md` · 검증 sibling: `web/references/gangnamunni/.verification.md` (`find web/references/gangnamunni/ -type f`로 존재 확인, dotfile)
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v12 의 **B2·B2a** 와 **E1·E2·E2a–d** 만
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별), `grep -c` 미사용.
날짜: 2026-08-27

수정 금지 지킴: 토큰 값, 컴포넌트 표, 상태 applicability, 구조, 원본 — 손대지 않음.

---

## 수정 목록 (12건)

### B2a — 인접 한정 누락·미완 (본문 3건)

| # | 위치 | 분류 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Experience → Scope, 같은 단락 끝 | 편집적 해석. "It does not treat either consumer surface as a proxy for the native app or for the Welchis PC back office." 는 관측이 아니라 이 계약의 증거-도메인 거절인데, 17행 한정이 열거하는 다섯 읽기(연구 과제 우선 / quiet / compact·빠른 스캔 / 선택 자신감 / Cell·Welchis 기하 분리)에 **들어 있지 않았다.** | 같은 단락에 인접 완전형 한정: "That proxy refusal is a derived editorial implementation inference from the verified surfaces; it is not Gangnamunni-authored or a separately published UI specification." 줄 수 불변. |
| 2 | `DESIGN.md:75` — Foundations → Semantic color 머리 | 편집적 해석. "The role names are this contract's naming … rather than published Gangnamunni role names" 는 class를 가리키지만 `derived editorial implementation inference` / `separately published UI specification` 이 없어 B2a가 안 끝났다. | 같은 문장에 완전형 후단을 붙였다: "that naming is a derived editorial implementation inference from the verified surfaces, and it is not Gangnamunni-authored or a separately published UI specification." 다섯 hex·관측 요소 무변경. |
| 3 | `DESIGN.md:236` — Content → Terminology, Cell/Welchis 불릿 | 편집적 해석. 두 이름은 발행 사실인데 "Do not use either name for the other's surfaces" 는 이 계약의 적용 규칙이고, 216행 한정은 Layout 절에 있어 **인접하지 않다.** | 같은 불릿에 인접 완전형 한정: "That cross-name rule is a derived editorial implementation inference from the verified surfaces; it is not Gangnamunni-authored or a separately published UI specification. The two names themselves are published by the design team." |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **13**, `not Gangnamunni-authored` **13**. 닫는 명사: `separately published UI specification` 11 + `task model` 1 (23행) + `state specification` 1 (148행) = 13. 한정 위치: 11, 17, 23, 41, 45, 53, 62, 75, 125, 148, 216, 231, 236.

23행·148행의 명사 교체는 이미 evidence class를 끝까지 닫고 있어 예문 명사(`UI specification`)로 바꾸지 않았다. 이 브랜드는 1차 발행 디자인 시스템이 없다( `ds.type: brand`, 블로그 계정).

### E1 — provenance derived 범위가 실제보다 **좁았다** (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | `provenance.md` — 절 자체가 없음 | 본문 한정이 감사 전 10건인데 derived 원장 절이 **0행**(ferrari형). 좁은 쪽 FAIL. | 파일 끝에 `Portable derived-editorial scope (E1)` 를 신설하고 본문 13건을 (읽기 / `DESIGN.md` 줄 / legacy 출처 / 한정 배치) 4열로 1:1 열거. 기존 prov 줄번호(7–226)는 불변. `derived editorial` 이 이 절에 2회 등장하는 것은 원장의 **mention**이며, 부재를 단언하지 않았다(E2d). |

### E2 — 원장 계수·2차 목적지가 실측과 어긋남 (8건, 본문 아님)

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `provenance.md` Identity 불릿 `강남언니` | 원장 `provenance.md` = 6. `grep -oF '강남언니' provenance.md \| wc -l` = **5** (10, 11, 44, 44, 45). | 6 → **5**. |
| 6 | `provenance.md` Identity 불릿 `#d54300` | 원장 = 4. 실측 **3** (15, 38, 46). | 4 → **3**. |
| 7 | `provenance.md` Identity 불릿 `components_harvested` | 원장 = 4. 실측 **3** (21, 51, 221). | 4 → **3**. |
| 8 | `migration-log.md` `name: 강남언니` 행 | 같은 6회 주장. | `grep -oF` 방법으로 고치고 provenance **5**. |
| 9 | `migration-log.md` `primary_color` 행 | provenance = 4 주장. | **3**. |
| 10 | `migration-log.md` `components_harvested` 행 | provenance = 4 주장. | **3**. |
| 11 | `migration-log.md` `verification_v2.claims` 행 | `grep -cE 'tokens\.(colors\|…)' DESIGN.md` = 0 — **줄 수** 계수. | `grep -oE … \| wc -l` 로 교체. 실측: `DESIGN.md` **0**, `provenance.md` **37**. `data-omd-capture` 0/11, `home::` 0/13은 `grep -oF`로 재확인 후 유지. |
| 12 | `migration-log.md` Mid-file footer 행 | "The **Surface split** sentence also reaches the body at line 216, so it carries two destinations." 전문 2차 목적지 주장. 실측: `Home and events are consumer-product surfaces` → `DESIGN.md` **0** / provenance 1 (fitpet형). 둘째 절만 본문 1 (`The Welchis post is documentation context only` · `its typography and controls are not Cell/product tokens`, 216행). | 2차 목적지를 **둘째 절만** dual로 좁힘. Scope의 두 소비자 경로 문장은 이 푸터 문장이 아님을 명시. |

로그 §1 / §2 행은 위 1–3의 새 한정 자리를 목적지에 병기했다(F2 동기화, 별도 계수 아님). 로그 끝에 `Revision 2026-08-27 (F3 B2a·E2 audit)` 을 덧붙였다.

## 수정하지 않은 것 (검토 후 위반 아님)

- **23행 `task model` / 148행 `state specification`.** 완전형 세 조각이 닫혀 있고, 닫는 명사만 그 절의 대상에 맞춰져 있다. B2a는 class를 끝까지 구분하라는 것이지 toss 예문 명사 복사를 요구하지 않는다.
- **103행 Motion 게이트.** "its own rule rather than as a Gangnamunni-published one" 로 이미 귀속된 B3 계약 규칙. 브랜드 표면의 인과 해석이 아니다.
- **146행 Core §4.4 / C1 정책 문장.** 규칙집 적용. 표 판단은 148행 한정이 덮는다.
- **9행 서비스 서술.** "widely documented public knowledge … rather than as a Gangnamunni statement" — 공개 지식의 증거 class이지 구현 추론이 아니다.
- **값·표·구조.** `| applicable |` 11, `| not-applicable |` 3, `focus-visible` 3, `Type: button` 2, `PretendardVariable` 11, `[FILL IN]` 0. 본문 줄 수 278 불변.

## D2a · E2d (이 브랜드)

- **D2a.** 원본 §13은 가상 페르소나를 세우지 않는다. 삭제 처분 행(§9 삭제, §13 옮김, Placeholder omission)에 이름·나이·도시·전기 없음. `, 32` 는 sibling-only 표의 `32px` 기하이지 나이 식별자가 아니다.
- **E2d.** 부재 단언 전수: provenance 135("nowhere in the portable body") · 199("absent from the portable body and from the ledger above, named here") · 로그 74("nowhere in DESIGN.md"). 단언의 분모가 그 문장이 앉아 있는 파일이 아니고, 지목된 문자열의 `DESIGN.md` 실측은 0. 자기분모 거짓 단언 없음.

## 범위 밖 관찰

- **A5a.** 로그가 기록한 `--gate-only` `coverage.copy-loss` 는 `compared: 1 / candidates: 91` (1.1%). `verdict: PASS` 는 대조한 1개(`강남언니`)의 생존이지 카피 전량 보존이 아니다. 원본은 컴포넌트 CTA·에러·슬로건을 인용하지 않는다. 손 대조한 발행 문자열 — `강남언니`, `Gangnamunni (강남언니)`, `Cell`, `Welchis`, 원칙 표제 3종 — 은 본문 또는 provenance에 바이트 생존. **눈에 띄는 라틴 카피 손실 없음.** `Gangnamunni Blog` 는 본문 0 / provenance 1 (ledger-only `ds.name`). 고치지 않음.
- **B1.** sibling `web/references/gangnamunni/.verification.md` (find 확인) 전용 항목의 본문 침투를 값과 분류 양쪽에서 셌다. `DESIGN.md`: `data-omd-capture="33"` 0, `data-omd-capture="4"` 0, `13px/400` 0, `187 occurrences` 0, `coverage score 84` 0, `interactionKinds: 0` 0, `official documentation chrome` 0, `h3` 0, `home::h3` 0, `dialog` 0, `no separate public marketing page` 0. 본문의 documentation-context 경계는 원본 **Surface split** 푸터(둘째 절)와 §1에서 온다. finda형 구조-관측 승격 없음.
- **형제 4브랜드 D2a (이 산출물은 미수정).** 감사 착수 시점 실측: `gaudiy` 로그·Omission ledger가 페르소나 3인(이름·나이·도시)을 삭제 식별자로 담고 있었고, `gaudiolab` 로그 §13 행이 같은 형태, `gitlab` 로그 §13 행은 이름·도시를 열거한 채 「세 파일 0회」를 단언(D2a+E2d). `genie` 는 착수 시점부터 무식별. 종료 시점 재grep: 네 브랜드의 세 산출 파일에서 그 식별자 0 — 각 브랜드 F3가 이미 닫은 상태로 보인다. 이 세션은 gangnamunni만 고쳤다.

AUDIT_DONE fixes=12
