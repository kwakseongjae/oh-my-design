# T2-1 웨이브 1 전수 검토 — sol 의미 레인 (표본 제외 3/3)

- 대상: `docs/design-md-weight/migrated/{apple,baemin,linear.app}/`
- 원본: `web/references/{apple,baemin,linear.app}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v3 전 조항**
- 일시: 2026-08-23
- 전제: `node test-v2/tools/migrate-reference.mjs --brand <id> --gate-only`는 3건 모두 PASS다. 이 문서는 기계 게이트가 식별하지 못하는 값 종류, 증거 권위, motion 승격 조건, 실제 disposition을 원본과 수동 대조한다.

## 판정 요약

| 대상 | 판정 | 차단 조항 |
|---|---|---|
| Apple | **FAIL** | A1, B2/B2a, B3, E2/E2a/E2c |
| Baemin | **FAIL** | A1, B3, E2/E2a/E2c |
| Linear.app | **FAIL** | A1, B2/B2a, B3, E2/E2a |

**확대 검토 결과: PASS 0/3, FAIL 3/3.** 선행 표본 판정(Toss FAIL / Bilibili FAIL)과 합치면 웨이브 1의 최초 의미 검토 결과는 **FAIL 5/5**다. 표본 2건의 v3 개정본은 별도 동일-sol 재검증 대기이며, 이 문서는 그 개정본을 재심하지 않는다.

## B3 다섯 증거 종류 전문 대조

Rulebook v3 B3는 `transition properties`, `animation name`, `duration`, `easing`, `reduced-motion behavior` 다섯 종류와 **컴포넌트별 computed 관측 후에만** 승격한다는 조건을 Foundations 본문에 모두 요구한다(`MIGRATION_RULEBOOK.md` 39–44행).

| 대상 | transition properties | animation name | duration | easing | reduced-motion behavior | per-component computed-only |
|---|---|---|---|---|---|---|
| Apple | 없음 | 없음 | 미승격 대상으로만 언급 | 미승격 대상으로만 언급 | 일반적 지원 지침만 있음 | 없음 |
| Baemin | 일반적 `web transitions`만 있음; properties 아님 | 없음 | 미승격 대상으로만 언급 | 미승격 대상으로만 언급 | 없음 | 없음 |
| Linear.app | 없음 | 없음; `universal animation token`은 animation name 관측이 아님 | 미승격 대상으로만 언급 | 미승격 대상으로만 언급 | 없음 | 없음 |

세 문서 모두 curve나 duration 하나만 확인해도 풀릴 수 있는 약화 문구에 머문다. 따라서 **B3는 3/3 FAIL**이다.

## 1. Apple — FAIL

### 1.1 검증된 metadata·component 값 손실 — A1 FAIL

원본 YAML은 HIG pointer의 `ds.type: system`을 명시한다(`web/references/apple/DESIGN.md` 13–18행). Migration log는 YAML `ds` 전체를 provenance로 분리했다고 기록하지만(`docs/design-md-weight/migrated/apple/migration-log.md` 14행), provenance는 name, URL, description, `og_image`만 보존하고 `type=system`을 누락한다(`docs/design-md-weight/migrated/apple/provenance.md` 22–24행). 이는 현재 literal token bag이 잡지 못하는 검증 metadata 손실이다.

또한 원본 claim ledger와 token body는 세 marketing component의 `type: button` 관계를 개별 검증한다(원본 77–104, 145–147행). Portable component는 `Kind: interactive`와 `Anatomy: label`만 두어 button primitive를 남기지 않는다(이관본 151–225행). `interactive`는 button, link, tab을 구분하지 못한다. Gallery의 `tab`과 HIG card의 `card`는 각각 `Anatomy: tab/card`로 의미가 남지만, 세 `button` 값은 어느 산출물에도 연결되지 않는다. 그런데 로그는 YAML component token을 검증된 최소 필드 단위로 옮겼다고 기록한다(`migration-log.md` 16, 21행).

### 1.2 파생 구현 원칙의 권위 한정이 불완전 — B2/B2a FAIL

Principles 바로 위에 “implementation principles derived from the verified public surfaces”라는 문장은 있다(`docs/design-md-weight/migrated/apple/DESIGN.md` 35–43행). 따라서 한정의 **위치** 자체는 인접하다. 그러나 이 문장은 해당 다섯 항목이 편집적 구현 해석이며 Apple/HIG가 발행한 공식 doctrine 또는 cross-surface product-system 규격이 아니라는 evidence class를 끝까지 구분하지 않는다.

Governance의 일반 문구(`DESIGN.md` 291–294행)는 v3 B2a가 명시한 대체 불가 문구다. §12 로그도 단순히 다섯 구현 원칙을 옮겼다고만 기록한다(`migration-log.md` 32행). 인접 본문에 `editorial implementation inference / not Apple-authored or separately published UI specification`에 해당하는 권위 경계를 보강해야 한다.

### 1.3 motion 승격 게이트 약화 + 과도한 준수 주장 — B3 / E2c FAIL

Foundations Motion은 exact token 비승격, native HIG, reduced-motion support, web duration/easing의 local extension만 적는다(`DESIGN.md` 97–100행). `transition properties`, `animation name`, 실제 `reduced-motion behavior`, 컴포넌트별 computed 관측 조건이 없다. Named gaps도 duration/easing만 적는다(`DESIGN.md` 317–329행).

그런데 §15 로그는 이 부분을 명시적으로 `(B3)`라고 기록한다(`migration-log.md` 35행). 본문보다 강한 준수 주장이므로 E2c도 FAIL이다.

### 1.4 §11의 실제 다중 목적지 누락 — E2/E2a FAIL

원본 §11은 HIG의 living-system 맥락, Liquid Glass, SF optical-family 역할을 함께 담는다(원본 302–308행). 로그는 이를 `Experience scope`로 옮기고 URL만 provenance로 분리했다고 기록한다(`migration-log.md` 31행).

실제 disposition은 Experience뿐 아니라 Typography & Assets의 font evidence/assets(`DESIGN.md` 105–136행), Content & Locales의 HIG 원칙(`DESIGN.md` 279–285행), provenance의 narrative/family 경계(`provenance.md` 69–72, 127행)로 나뉜다. 로그의 단일 portable 목적지와 “URL만 분리”라는 설명은 실제 분기를 모두 기록하지 못한다.

### 확인된 통과 항목

- **A2/A3/A4:** §14 3행을 capture record로 보존했고, §9 prompt-only 문장은 삭제하면서 CTA 값·transparent outline·native HIG 경계는 Components/Experience에 남겼다.
- **B1/C1–C4:** `focus-visible` treatment를 발명하지 않았고, 다섯 컴포넌트의 applicability는 역할 이유로 판정하며 state coverage 완료를 주장하지 않았다.
- **D1/D2:** 새 도메인 부정 claim을 만들지 않았고, HIG의 네 공식 design context를 가상 인구통계나 primary task로 승격하지 않았다.
- **E1/E2b:** freshness·sources·claim ledger는 provenance에 분리됐다. 원본에는 provenance omission ledger가 필요한 `[FILL IN]` wrapper가 없다.

### Apple 재제출 조건

1. provenance에 원본 `ds.type: system`을 복원한다.
2. 세 marketing component의 검증된 `Type: button` 또는 동등하게 명시적인 button semantics를 portable에 남긴다.
3. Principles 인접 본문에 편집적 구현 해석이며 Apple/HIG가 별도 발행한 UI doctrine이 아니라는 B2/B2a 한정을 둔다.
4. Foundations Motion에 B3 다섯 증거 종류와 컴포넌트별 computed-only 승격 게이트를 전문으로 적는다.
5. §11의 실제 portable/provenance 목적지와 §15의 실제 B3 문구를 migration log에 모두 맞추고 규칙집 버전을 v3로 기록한다.
6. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 2. Baemin — FAIL

### 2.1 검증된 component `type` 손실 — A1 FAIL

원본은 7개 component 모두의 `.type` claim을 개별 검증하고, 값은 모두 `button`이다(`web/references/baemin/DESIGN.md` 86–144, 176–182행). Portable은 각 항목을 `Kind: interactive`와 label/trigger/control anatomy로만 투영한다(`docs/design-md-weight/migrated/baemin/DESIGN.md` 183–347행). 어느 산출물에도 7개 component와 `button` primitive의 관계가 남지 않는다.

Migration log는 YAML component token을 검증된 최소 필드 단위로 옮겼고 7개 component를 보존했다고 기록한다(`docs/design-md-weight/migrated/baemin/migration-log.md` 16, 22행). 실제 값 손실과 맞지 않는다.

### 2.2 motion 승격 게이트 약화 + 과도한 준수 주장 — B3 / E2c FAIL

Foundations Motion은 duration/easing 비승격과 web transition을 explicit capture 전까지 local implementation으로 둔다는 문장만 갖는다(`DESIGN.md` 106–109행). `transition properties`, `animation name`, `reduced-motion behavior`, 컴포넌트별 computed 관측 조건이 없다. Named gaps도 같은 약한 범위다(`DESIGN.md` 402–412행).

그런데 §15 로그는 “승격 조건은 Foundations에 유지 (B3)”라고 주장한다(`migration-log.md` 35행). 실제 본문보다 강한 준수 주장이므로 E2c도 FAIL이다.

### 2.3 §13의 실제 이중 disposition과 로그·provenance 불일치 — E2/E2a FAIL

원본 §13은 customers, restaurant owners, riders라는 공식 stakeholder context와 필요를 적는다(`web/references/baemin/DESIGN.md` 400–406행). Portable은 이 내용을 Audience뿐 아니라 Primary tasks에도 사용한다. 특히 restaurant-owner와 rider task는 원본 §13의 필요를 직접 claim한다(`docs/design-md-weight/migrated/baemin/DESIGN.md` 16–26행).

그러나 §13 로그는 목적지를 `Experience audience` 하나로만 적고(`migration-log.md` 33행), provenance는 세 그룹이 “Audience only”라고 단정한다(`docs/design-md-weight/migrated/baemin/provenance.md` 126–135행). 실제 `Primary tasks + Audience` 이중 disposition과 정면으로 다르다.

이 세 그룹은 원본이 first-party reporting의 공식 stakeholder context라고 명시하므로 현재 결함을 가상 persona 승격(D2)으로 판정하지 않는다. 다만 task로 유지하려면 독립 검증 근거의 정확한 source mapping을 남기고, 로그와 provenance가 실제 두 목적지를 말해야 한다.

### 확인된 통과 항목

- **A2/A3/A4:** §14 4행과 §9의 고유 control/font/surface-local 값을 보존했다. WORK, System, Pretendard Variable, corporate disabled, app-download typography의 역할 결합도 분리돼 있다.
- **B1/B2/B2a:** `focus-visible` treatment를 발명하지 않았다. Principles 바로 위의 “evidence-derived … not a separately published Baemin UI specification”은 인접 권위 한정을 충족한다(`DESIGN.md` 36–44행).
- **C1–C4:** 7개 component의 loading/error/success를 역할별로 판정했고, 관측 부재를 `not-applicable` 사유로 쓰거나 coverage 완료를 주장하지 않았다.
- **D1/D2:** 원본 밖 도메인을 만들지 않았고 가상 biography를 승격·재호스팅하지 않았다.
- **E1/E2b:** source/freshness/claim ledger는 provenance에 분리됐다. 원본에 `[FILL IN]` wrapper가 없다. Favicon·catalog·license의 portable/provenance 이중 목적지는 로그에 기록돼 있다.

### Baemin 재제출 조건

1. 7개 component에 검증된 `Type: button` 또는 동등하게 명시적인 button semantics를 보존한다.
2. Foundations Motion에 B3 다섯 증거 종류와 컴포넌트별 computed-only 승격 게이트를 전문으로 적는다.
3. §13을 Primary tasks에 유지한다면 migration log를 `Primary tasks + Audience`로 고치고 provenance의 “Audience only”를 제거하며 task의 first-party source mapping을 명시한다. Audience-only가 의도라면 §13에서 파생한 task 승격을 제거하고 independently verified task만 남긴다.
4. §15 로그를 실제 B3 본문과 맞추고 규칙집 버전을 v3로 기록한다.
5. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 3. Linear.app — FAIL

### 3.1 검증된 unitless line-height와 button type 손실 — A1 FAIL

원본 YAML typography는 `lineHeight`를 각각 `1`, `1.33`, `1.6`, `1.5`, `1.71`로 검증하고 각 필드에 evidence claim을 둔다(`web/references/linear.app/DESIGN.md` 43–68, 134–140행). Portable은 `48px`, `31.92px`, `24px`, `19.5px`, `24px`라는 fixed line height만 남긴다(`docs/design-md-weight/migrated/linear.app/DESIGN.md` 115–123행). Unitless 비율은 글자 크기 변화에 따라 스케일하지만 fixed px는 그렇지 않으므로 동치가 아니다. 특히 14 × 1.71은 23.94이며 24px는 원값을 반올림한 legacy 본문 표기일 뿐이다. Provenance도 다섯 비율을 보존하지 않는다.

원본은 primary action, secondary action, nav trigger의 `type: button` 관계를 개별 검증한다(원본 78–105, 147–149행). Portable은 세 항목에 `Kind: interactive`만 두어 button primitive를 잃는다(이관본 142–212행). Product menu의 `tab`은 `Anatomy: tab / menu row`로, customer card의 `card`는 `Type: card`로 의미가 남으므로 그 둘은 손실로 세지 않는다.

로그는 YAML typography/component group과 component styling을 옮겼다고 기록하므로(`docs/design-md-weight/migrated/linear.app/migration-log.md` 15, 19–20행), 이 누락은 E2의 실제 disposition 불일치이기도 하다.

### 3.2 파생 구현 원칙에 인접 권위 한정 없음 — B2/B2a FAIL

네 Principles는 reconstruction이 만든 구현 원칙, 특히 evidence-domain 적용 해석을 prescriptive하게 제시하지만 그 바로 앞이나 뒤에 `derived editorial interpretation / not quoted Linear doctrine or a separately published product-system specification`이라는 한정이 없다(`docs/design-md-weight/migrated/linear.app/DESIGN.md` 36–49행).

`Capture-bound application`은 적용 범위일 뿐 evidence class가 아니며, Governance의 일반 authority 문구(`DESIGN.md` 264–270행)는 B2a의 대체물이 아니다. §12 로그도 단순히 네 원칙을 옮겼다고만 적는다(`migration-log.md` 31행).

### 3.3 motion 승격 게이트 전문 누락 — B3 FAIL

Foundations Motion은 duration/easing과 universal animation token을 승격하지 않는다는 문장뿐이다(`DESIGN.md` 89–92행). `transition properties`, 실제 `animation name`, `reduced-motion behavior`, 컴포넌트별 computed 관측 조건이 없다. Named gaps 역시 duration/easing/universal token만 적는다(`DESIGN.md` 293–310행).

§15 로그는 현재 약한 원문을 그대로 인용할 뿐 B3 준수를 주장하지 않는다(`migration-log.md` 34행). 따라서 **현재 B3 관련 E2c는 추가 FAIL로 세지 않는다.** 다만 v3 개정 후에는 새 전문과 실제 목적지를 로그에 기록해야 한다.

### 3.4 route URL의 이중 목적지 누락 — E2/E2a FAIL

Homepage와 네 public route URL은 portable Scope에 직접 남고(`DESIGN.md` 7–13행), provenance의 identity/surfaces/sources/Tier 1에도 남는다(`docs/design-md-weight/migrated/linear.app/provenance.md` 5–24, 38–63행).

그러나 로그의 YAML identity, verification/freshness, footer 행은 이를 provenance-only로 기록하고, Experience 이중 목적지는 brand URL에 대해서만 언급한다(`migration-log.md` 13–14, 35행). Homepage 및 home/Method/customers/pricing URL의 실제 `Experience + provenance` 분기를 모두 기록해야 한다.

### 확인된 통과 항목

- **A2/A3/A4:** §14 문장을 capture record로 보존하고 §9 wrapper만 삭제했다. primary-action foreground와 Canvas, identity indigo와 CTA fill의 역할은 분리돼 있다.
- **B1:** generic focus는 additional observed state로 남고 `focus-visible` treatment로 승격되지 않았다(`DESIGN.md` 132–140, 189–236행).
- **C1–C4:** nav/menu의 부정 applicability와 두 CTA의 양의 applicability 모두 primitive 이름이 아니라 각 navigation/selection/conversion 역할로 설명된다. Customer card는 kind와 map을 생략했고 coverage 완료를 주장하지 않았다.
- **D1/D2:** 원본 밖 도메인 부정 claim이나 가상 persona를 만들지 않았고, 원본의 public task context만 Primary tasks/Audience에 사용했다.
- **E1/E2b/E2c(B3):** sources/freshness/claim ledger는 provenance로 분리됐다. 원본에 `[FILL IN]` wrapper가 없고, 현재 §15 로그는 불완전한 본문을 B3 준수라고 과장하지 않는다.

### Linear.app 재제출 조건

1. 다섯 verified unitless line-height 값과 그 role 관계를 보존하고, fixed px 관측과 같은 값으로 합치지 않는다.
2. primary/secondary/nav 세 component의 `Type: button` 또는 동등하게 명시적인 button semantics를 보존한다.
3. Principles 인접 본문에 파생 편집 해석이며 Linear가 별도 발행한 doctrine/product-system 규격이 아니라는 B2/B2a 한정을 둔다.
4. Foundations Motion에 B3 다섯 증거 종류와 컴포넌트별 computed-only 승격 게이트를 전문으로 적는다.
5. 누락 값과 route URL의 실제 이중 목적지를 migration log에 반영하고 규칙집 버전을 v3로 기록한다.
6. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 전 조항 종합

- **A2/A3/A4, B1, C1–C4, D1/D2, E1:** 세 건 모두 통과했다.
- **A1:** Apple metadata/button, Baemin button, Linear unitless line-height/button 값에서 실패했다. 현재 token bag gate가 보지 않는 문자열·bare-number field 관계다.
- **B2/B2a:** Baemin만 통과했다. Apple은 인접 문구가 불완전하고 Linear는 인접 한정 자체가 없다.
- **B3:** 세 건 모두 전문 미달이다.
- **E2a:** Apple §11, Baemin §13, Linear route URL의 실제 이중 목적지가 로그에 완전히 기록되지 않았다.
- **E2b:** 세 원본 모두 적용 대상 placeholder wrapper가 없다.
- **E2c:** Apple과 Baemin은 불완전한 본문을 B3 준수라고 과장했다. Linear는 과장하지 않아 이 세부 조항은 통과했다.

## 웨이브 판정

**최종 판정: Apple FAIL / Baemin FAIL / Linear.app FAIL.** 기계 게이트 PASS 3/3은 의미 보존 PASS를 대신하지 못한다.

이번 결함은 모두 Rulebook v3의 기존 A1·B2/B2a·B3·E2/E2a/E2c 적용 문제다. 새 결함 계층이나 v4 조항을 만들 사안은 아니다. 세 건을 v3로 개정하고 gate를 재통과시킨 뒤 같은 sol 의미 레인에 재제출할 때까지 다음 웨이브는 계속 정지한다. 카탈로그 채택은 아니다.
