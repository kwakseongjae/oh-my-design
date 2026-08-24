# T2-1 웨이브 7 전수 검토 — sol 의미 레인 (5/5 첫 판정)

- 대상: `docs/design-md-weight/migrated/{591,8percent,91app,accupass,acer}/`
- 원본: `web/references/{591,8percent,91app,accupass,acer}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7 전 조항
- 프로토콜: `docs/reviews/t2-1-protocol-2026-08-23-grok.md`
- 일시: 2026-08-24
- 검토 모드: 웨이브 7 첫 5/5 전수 판정. 첫 FAIL은 기대값이며, 아래 조건 목록만 다음 개정과 동일 sol 재확인의 입력이다.

## 판정 요약

| id | 판정 | 차단 조항 |
|---|---|---|
| 591 | **FAIL** | A1/A3/A4, B1, C2, D1, E1, E2/E2a/E2c, F2 |
| 8percent | **FAIL** | A1/A1c/A3/A4, E2/E2a/E2c, F2 |
| 91app | **FAIL** | D1, E1, E2/E2c, F2/F3 |
| accupass | **FAIL** | A1/A3, B2/B2a, C4, D1, E1, E2/E2a/E2c, F1/F2 |
| acer | **FAIL** | A1, B2/B2a, D1, E1, E2/E2a/E2c, F1/F2/F3 |

**웨이브 첫 판정: FAIL 5/5, PASS 0/5.**

기계 검사는 의미 판정을 대신하지 않는다. 아래 두 명령을 현재 파일에 직접 재실행했고 다섯 건 모두 통과했다.

1. `node test-v2/tools/migrate-reference.mjs --brand {id} --gate-only`
2. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/{id}/DESIGN.md --check --require-portable-core --json`

| id | gate-only | Core | DESIGN.md SHA-256 | F3 실행 증거 |
|---|---|---|---|---|
| 591 | PASS, problems 0 | exit 0, `portable_core: true` | `05899c6caf772de65e823896e2f9f4c597ed8f27c0ea66a728962dc835cb7d9d` | `audit-log.md`: `AUDIT_DONE fixes=23` |
| 8percent | PASS, problems 0 | exit 0, `portable_core: true` | `c91b25fecedcd5bbd21a5a77df647d4847e47838d43cd92da7c82bc78ebcfa66` | `audit-log.md`: `AUDIT_DONE fixes=32` |
| 91app | PASS, problems 0 | exit 0, `portable_core: true` | `7dbd3fcfa22c30dccc53f1f59525e08440b2a1ed57772300482b103a248a0aaa` | **없음** — `audit-log.md` 부재 |
| accupass | PASS, problems 0 | exit 0, `portable_core: true` | `624c24af48f30ed411d61fb4e206c094f342c08182c302e7998b175f350a93ca` | `audit-log.md`: `AUDIT_DONE fixes=20` |
| acer | PASS, problems 0 | exit 0, `portable_core: true` | `2b496740ad31f9dd8a842a561ce7c597a4098919a0d261d20379b7c73ccf04f8` | **없음** — `audit-log.md` 부재 |

591·8percent·accupass는 이관 워커와 분리된 신선 세션 F3를 이미 1회 실행했다. 프로토콜에 따라 이는 실행 증거 PASS이지 첫 의미 판정 PASS 보증이 아니다. 아래 잔존은 목록 개정 대상이며 이 세 건의 재제출에 새 F3를 요구하지 않는다.

91app·acer는 `audit-log.md`가 없고 각 `worker-log.txt`가 F3 대기라고 명시한다. 그런데 91app `migration-log.md` 9·37·41행은 Post-F3/F3 완료를, acer `migration-log.md` 77행은 “after this F3 scan”을 주장한다. 두 건은 개정 뒤 신선 세션 F3를 **처음이자 1회만** 실행해 실행 증거와 원장을 일치시켜야 한다.

## Rulebook v7 전 조항 매트릭스

표의 FAIL은 아래 건별 차단점에 연결된다. PASS는 해당 조항의 전수 대조 결과이지 문서 전체 PASS를 뜻하지 않는다.

| 조항 | 591 | 8percent | 91app | accupass | acer |
|---|---|---|---|---|---|
| A1 값 손실 0 / 발명 0 | FAIL — §11·Filter Label 손실 | FAIL — metadata·§9 mixed label 손실 | PASS | FAIL — §11·footer-link tuple 손실 | FAIL — §11 관계 손실·imagery/label 발명 |
| A1a unitless ratio | PASS | PASS | PASS | PASS | PASS |
| A1b primitive type | PASS | PASS | PASS | PASS | PASS |
| A1c metadata | PASS | FAIL — `button-primary.states` identity 손실 | PASS | PASS | PASS |
| A2 §14 보존 / §9 prompt 삭제 | PASS | PASS | PASS | PASS | PASS |
| A3 §9-only 고유값 | FAIL — Filter Label tuple | FAIL — Soft pill mixed anatomy | PASS | FAIL — footer-link 14px tuple | PASS |
| A4 field-role 비결합 | FAIL — Filter Label role 소실 | FAIL — states·mixed label 결합 | PASS | PASS | PASS |
| B1 관측 evidence kind 비승격 | FAIL — live-homepage로 승격 | PASS | PASS | PASS | PASS |
| B2/B2a 인접 완전 한정 | PASS | PASS | PASS | FAIL | FAIL |
| B3 motion 5종 gate | PASS | PASS | PASS | PASS | PASS |
| C1 capture absence ≠ N/A | PASS | PASS | PASS | PASS | PASS |
| C2 exact role별 L/E/S | FAIL | PASS | PASS | PASS | PASS |
| C3 coverage 완료 주장 금지 | PASS | PASS | PASS | PASS | PASS |
| C4 kind 근거와 kind/map | PASS | PASS | PASS | FAIL | PASS |
| D1 새 negative coverage 금지 | FAIL | PASS | FAIL | FAIL | FAIL |
| D2 fictional persona 금지 | PASS | PASS | PASS | PASS | PASS |
| E1 provenance/portable evidence boundary | FAIL | PASS | FAIL | FAIL | FAIL |
| E2 source-row 실제 disposition | FAIL | FAIL | FAIL | FAIL | FAIL |
| E2a 모든 다중 목적지 | FAIL | FAIL | PASS | FAIL | FAIL |
| E2b omission ledger | PASS | PASS | PASS | PASS | PASS |
| E2c 준수 주장 강도 | FAIL | FAIL | FAIL | FAIL | FAIL |
| F1 최종 B2a scan 결과 | PASS | PASS | PASS | FAIL | FAIL |
| F2 최종 E2 grep 결과 | FAIL | FAIL | FAIL | FAIL | FAIL |
| F3 별도 세션 1회 실행 | PASS | PASS | FAIL | PASS | FAIL |

## 1. 591 — FAIL

### 1.1 §11의 제품 진화·공공데이터 관계 손실 — A1 / E2 / E2c / F2 FAIL

원본 `web/references/591/DESIGN.md` 371–373행은 다음 관계를 기록한다.

- classified property listing board가 Taiwan real-estate marketplace로 진화했다.
- 實價登錄은 정부가 의무화한 가격 투명성 체계다.
- 그 데이터는 asking price가 아니라 actual transaction price를 보여 주며, 이 신뢰층이 제품의 moat다.

이관본 `DESIGN.md` 15–17행은 설립연도·사업 범주·實價登錄 명칭은 남겼지만 위 진화와 actual-versus-asking-price 관계를 잃었다. `provenance.md` 70–72행에도 복원되지 않았고 `migration-log.md` 28행은 §11을 옮겼다고만 적어 삭제와 사유가 없다.

### 1.2 §9-only Filter Label tuple 삭제·역할 결합 — A1 / A3 / A4 / E2 / E2c / F2 FAIL

원본 336행은 Filter Label을 `#666666` / 14px로 명시한다. 이 조합은 일반 Body Large 16px/400이나 Filter Input 13px와 다른 role-specific tuple이다.

현재 이관본에는 `#666666`과 14px가 각각 다른 일반 역할로 남아 있을 뿐 Filter Label이라는 결합이 없다. `provenance.md` 175–177행과 `migration-log.md` 26행은 §9 고유값을 listing-title 16px bold와 attached search composition뿐이라고 적어 실제 고유값 하나를 누락했다.

### 1.3 서로 다른 evidence kind를 “live homepage”로 승격 — B1 / E1 / E2 / E2c / F2 FAIL

원본에서 live homepage voice sample로 명시된 것은 362–365행의 title/H3 세 문구이고, HTML evidence comment 433–456행도 title/H3만 voice sample이라고 닫는다. 반면 `我的詢問`은 §14 success-state row 405행에만 있고, `社區找房`은 rent surface inspect 448행이다.

이관본 `DESIGN.md` 558–568행은 이들을 한꺼번에 “Observed live homepage strings (playwright inspect)”로 묶고 `我的詢問`까지 566행에 넣었다. `migration-log.md` 27행도 같은 승격을 반복한다. 문구 자체를 지우는 것이 아니라 live homepage, live rent, source tone table, §14 implementation-guidance의 evidence class를 분리해야 한다.

### 1.4 Search·map/community·validation 상태 역할 오판 — C2 / E2c FAIL

- `DESIGN.md` 260–262·285–287행은 listing-results loading과 search-failed error를 page-level paint라는 이유로 두 Search CTA에서 N/A 처리한다. Applicability는 paint 위치가 아니라 검색 요청을 시작하는 역할로 판정해야 한다.
- Secondary Text Button 301행은 live `社區找房`과 body의 `地圖找房`을 한 컴포넌트로 묶고 310–312행에서 map loading을 N/A 처리한다. 원본은 map loading을 402행에 기록하므로 두 역할을 분리하거나 exact mapping이 미해상이면 해당 field만 생략해야 한다.
- 원본 404행의 generic form validation은 exact field를 특정하지 않는다. 그런데 이관본은 Homepage/Listing Search Input error를 N/A로 닫고 Filter Range Input error를 applicable로 결박한다. exact mapping evidence가 없으면 field boundary에서 생략해야 한다.

`provenance.md` 191행, `migration-log.md` 31행, `audit-log.md` 9행의 C2 준수 주장도 실제 재판정과 맞춰야 한다.

### 1.5 원본 밖 font-domain 부정 claim — D1 / E1 / E2 / E2c FAIL

원본은 captured surface의 system stack, no webfont/custom face 관측만 기록한다. 이관본 `DESIGN.md` 176·178–179행은 별도 근거 없이 official type announcement/design guideline, 591-exclusive distributed family, declared-only webfont라는 새 도메인의 부재까지 주장한다. Named gaps 627–628행의 first-party logo/591-owned webfont 부정도 같은 범위 확장이다.

미해상은 최소 field를 적지 않는 것이다. 원본 관측 범위만 유지하고 새 부정 도메인은 삭제하거나 독립 근거를 추가해야 한다.

### 1.6 원장·최종 grep 과대 완료 — E2 / E2a / E2c / F2 FAIL

위 §11·§9·Content·state·negative 불일치 때문에 `migration-log.md` 26–28·31·37–38행과 provenance/audit의 목적지·준수 주장은 실제 본문보다 강하다. 복원 값의 portable/provenance 이중 목적지와 evidence class를 source-row 단위로 다시 적고, F2는 실제 grep hit만 기록해야 한다.

### 591에서 확인된 통과 항목

- YAML unitless line-height 1.31/1.5, primitive type, metadata와 그 밖의 unmerged 값은 유지됐다.
- §14 표 10행, §9 prompt wrapper 삭제, B2a/F1의 현존 문장, B3 다섯 evidence kind가 유지됐다.
- kind 근거 없는 card/badge 계열은 kind/map을 생략했고 fictional persona와 무출처 motion curve는 승격하지 않았다.
- 신선 세션 F3는 1회 실행됐다.

### 591 재제출 조건

1. 원본 371–373행의 board→marketplace 진화, mandated price-transparency, actual transaction-versus-asking-price 관계를 Scope에 복원하고 인접 완전 B2a 및 provenance/§11 disposition을 맞춘다.
2. Filter Label `#666666` / 14px tuple을 별도 role로 복원해 Body Large와 Filter Input에 합치지 않고, §9 mixed delete/move 원장을 고친다.
3. Content 문구를 live homepage/live rent/source tone table/§14 implementation guidance로 나누고 `我的詢問`의 live-homepage 승격을 제거한다.
4. Search CTA, map/community option, generic validation의 loading/error/success를 exact role별로 재판정한다. exact component 연결이 미해상이면 그 field만 생략한다.
5. 새 font/logo 부정 도메인을 삭제하거나 독립 근거를 추가하고 DESIGN/provenance/migration/audit/F2를 동기화한다.
6. 두 기계 검사를 다시 통과시킨 뒤 같은 sol에 위 다섯 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 2. 8percent — FAIL

### 2.1 `button-primary.states` 메타데이터 identity 손실 — A1 / A1c / A4 / E2 FAIL

원본 `web/references/8percent/DESIGN.md` 45행은 `button-primary.states: "EdsButton variants primary/secondary/tertiary, sizes xs/s/m/l"`라는 검증 필드를 가진다. 이관본 `DESIGN.md` 66·240행은 variants/sizes 내용을 Use 또는 EDS 설명에 흡수하지만, legacy `states` 필드라는 metadata identity를 보존하지 않는다.

`provenance.md` 85–100행의 보존 ledger와 `migration-log.md` 16·21행도 이 field disposition을 닫지 못한다. 값 문자열이 다른 문장에 보이는 것만으로 원장 field 보존이 되지 않는다.

### 2.2 §9 Soft pill mixed-label anatomy 손실 — A1 / A3 / A4 / E2 / F2 FAIL

원본 312행의 Soft pill은 “near-ink label with a `#3282f0` emphasis word”다. 즉 한 label 안의 near-ink base와 blue emphasis가 함께 있는 고유 anatomy다.

이관본 `DESIGN.md` 259–268행은 Soft Blue-Tint label 전체를 `#3282f0`으로 만든다. `provenance.md` 116–118행과 `migration-log.md` 27행은 §9-only 고유값이 없다고 주장한다. mixed anatomy를 별도 field로 복원하고, 일반 blue foreground와 합치지 않으며, §9 유래 판단에는 인접 완전 B2a를 붙여야 한다.

### 2.3 다중 목적지·identity·rem grep 원장 불일치 — E2 / E2a / E2c / F2 FAIL

- `#3282f0`은 이관본 `DESIGN.md` 383행의 Credit-Grade field note에도 있지만 `provenance.md` 28·130행과 `migration-log.md` 13행 목적지 집합은 이를 누락한다. `migration-log.md` 41행은 이 hit를 인지해 같은 로그 안에서도 모순된다.
- 원본 identity의 `display_name_kr: 에잇퍼센트`는 portable Scope 9행과 provenance 11행에 모두 있다. 그러나 `provenance.md` 30행과 `migration-log.md` 14행은 provenance-only라고 적는다. H1 key와 Scope의 실제 value destination을 구분해야 한다.
- `migration-log.md` 41행은 2.50/1.50/1.00/0.88rem 모두 Type roles+Scope에 있다고 주장하지만 `1.00rem`은 이관본 194행에만 있고 Scope 17행에는 없다.

### 8percent에서 확인된 통과 항목

- unitless line-height 1.10/1.50/1.15, primitive types와 나머지 metadata가 유지됐다.
- §14 9행, prompt wrapper 삭제, generic Focus와 focus-visible 경계, B2a/F1, B3 전문이 유지됐다.
- C1–C4 role/kind 처리, D1/D2 범위, omission ledger가 통과했다.
- 신선 세션 F3는 1회 실행됐다.

### 8percent 재제출 조건

1. `button-primary.states`를 legacy metadata field identity와 원 문자열이 드러나는 ledger/portable 경계에 복원하고 다른 Use field로 합치지 않는다.
2. Soft pill을 near-ink base label + `#3282f0` emphasis word의 mixed anatomy로 복원하고 인접 완전 B2a를 붙인다.
3. `#3282f0` Credit-Grade 목적지, `에잇퍼센트` Scope+provenance dual destination, rem 값별 실제 destination을 source-row ledger와 F2에 정확히 기록한다.
4. 두 기계 검사를 다시 통과시킨 뒤 같은 sol에 위 세 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 3. 91app — FAIL

### 3.1 원본 밖 typography negative coverage — D1 / E1 / E2 / E2c / F2 FAIL

원본 `web/references/91app/DESIGN.md` 65–70행은 Noto Sans TC/Helvetica stack과 관측 metric만 제공한다. 이관본 `DESIGN.md` 124–127행은 독립 근거 없이 다음 새 부정 도메인을 만든다.

- official product-use typography specification 부재
- exclusive distributed type family 부재

`migration-log.md` 19행은 이를 원본 §3의 evidence grades가 이동한 것으로 기록하고, 27행은 새 negative domain이 없다고 주장한다. 새 행을 삭제하거나 실제 독립 evidence를 추가하고 provenance/log/F2를 같은 범위로 맞춰야 한다.

### 3.2 F3 미실행과 상충하는 완료 기록 — F3 / E2c FAIL

`docs/design-md-weight/migrated/91app/audit-log.md`는 존재하지 않고 `worker-log.txt` 7행은 F3가 다음 단계라고 명시한다. 반면 `migration-log.md` 9·37·41행은 Post-F3 SHA와 F3 scan/완료를 주장한다. 이는 실행 증거가 없는 절차 완료 선언이다.

### 91app에서 확인된 통과 항목

- 원본 spacing 숫자의 unit 비발명, primitive type, metadata, component field roles가 유지됐다.
- source YAML의 `padding: "48px height"`/`"40px height"`는 이관본 160행과 각 component field note에 원 문자열로 보존되고 별도 Height도 유지돼 A1/A4 위반이 아니다.
- §14, §9 prompt 처리, B1/B2a/F1, B3, C1–C4, D2, E2a/E2b가 통과했다.

### 91app 재제출 조건

1. `DESIGN.md` 124–127행의 unsupported official-product-use/exclusive-distributed negative를 삭제하거나 독립 evidence를 추가한다.
2. §3 source-row disposition, provenance, D1/E2c/F2 기록을 실제 evidence 범위에 맞추고 미실행 F3/Post-F3 주장을 제거한다.
3. 개정 뒤 신선한 별도 세션에서 F3를 처음이자 1회 실행한다. 감사 범위는 B2a·E2뿐이며 값·표·applicability·구조는 바꾸지 않고 `audit-log.md`에 0 fixes라도 기록한다.
4. F3 후 두 기계 검사와 현재 SHA를 다시 기록해 같은 sol에 위 세 조건만 목록-only로 재제출한다.

## 4. accupass — FAIL

### 4.1 §11 고유 founder/product 관계 대량 손실 — A1 / E2 / E2c / F2 FAIL

원본 `web/references/accupass/DESIGN.md` 399–403행에는 다음 고유 사실·관계가 있다.

- founders가 engineering careers를 떠났고, Hsieh는 그 전에 Foxconn Shenzhen software engineer로 일했다. 이후 AccuSeats(2009)에서 Accupass(2012)로 pivot했다.
- event를 home/work 바깥의 “third space”로 보고 regional organizer와 audience를 연결했다.
- 약 NT$200M을 조달했고 생일에 bankruptcy를 고민했다.
- quick-money보다 long-term infrastructure를 택했고 hundreds of thousands of events를 서비스했다.

이관본 Scope 9–15행과 `provenance.md` 83행은 founders/dates/mission/near-bankruptcy/Taiwan refocus만 일부 남기고 위 관계를 잃었다. `migration-log.md` 17·54행은 §11 unique narrative/F2를 완료했다고 과대 주장한다.

### 4.2 §9-only footer-link tuple 손실 — A1 / A3 / E2 / F2 FAIL

원본 364행은 footer links를 `#f5faff` / 14px로 결합한다. 현재 이관본은 색 자체는 보존하지만 footer-link 14px role을 보존하지 않는다. `migration-log.md` 27행은 §9-only unique를 Event Card 하나로 한정한다.

### 4.3 원본 밖 font/logo/microcopy 부정 claim — D1 / E1 / E2 / E2c FAIL

이관본 `DESIGN.md` 174·177–178행은 official/distributed/license font 부재를, 207·565행은 first-party logo gap을, 504행은 complete product microcopy guide 부재를 신설한다. 원본에는 이 도메인 부정을 뒷받침할 evidence가 없다. Catalog Google-favicon identity도 first-party mark 부재로 확장할 근거가 아니다.

`migration-log.md` 13·19행은 이를 이동한 값처럼 적고 28행은 D1 준수를 주장한다. 미해상 field를 삭제하거나 독립 근거를 추가해야 한다.

### 4.4 Distinctive 편집 판단의 인접 완전 한정 누락 — B2 / B2a / E1 / E2c / F1 FAIL

`DESIGN.md` 36–39행의 “soft”, “mixed radius vocabulary”, near-black/icy character reading은 raw value가 아니라 편집 판단이다. 41행의 한정은 multi-step/saturation/pink 문장만 대상으로 하며 앞의 네 bullet을 덮지 않는다.

`audit-log.md` 60–63·92행과 `migration-log.md` 42행의 F1 inventory가 이 위치를 놓쳤다. 각 판단을 source-stated fact로 좁히거나 bullet 묶음 바로 앞에 완전 B2a를 붙이고 derived inventory 전부를 맞춰야 한다.

### 4.5 확인된 interaction kind를 “근거 없음”으로 삭제 — C4 / E2c FAIL

원본 §8 327–331행은 Keyword chip을 comfortably tappable, Event Card를 parent tap target, category tags를 display-only metadata라고 구분한다. 원본 §4 243–253행은 Inline Action Link와 Organizer Link의 role/use도 확인한다.

이관본 Category 396–410행, Keyword 423–424행, Event Card 438–448행, Links 458–472행은 kind/map을 생략하고 interactive confirmation이 없다고 주장한다. Event Card·Keyword·Inline/Organizer Link는 근거에 맞는 kind를 유지해야 하고 role별 L/E/S가 미해상이면 그 field만 생략한다. Category Tag는 non-interactive와 source reason을 기록해야 한다.

### 4.6 source-row 원장·최종 grep 과대 완료 — E2 / E2a / E2c / F2 FAIL

`migration-log.md` 18행의 §2 destination은 일부 실제 Distinctive/Components 목적지를 빠뜨리고 존재하지 않는 Named-gaps 목적지를 포함한다. 위 §11·§9·D1·B2a·C4 불일치까지 있어 42·54행의 F1/F2 완료 주장은 현재 body보다 강하다.

### accupass에서 확인된 통과 항목

- unitless line-height 1.50/1.33, primitive type, metadata와 그 밖의 component field roles는 유지됐다.
- §14, prompt wrapper 삭제, generic Focus 경계, B3, C1–C3, D2, omission ledger가 유지됐다.
- F3는 신선 세션에서 1회 실행됐다. 이번 잔존은 첫 sol 목록 개정 대상이다.

### accupass 재제출 조건

1. 원본 399–403행의 engineering-career/Foxconn·AccuSeats→Accupass 경로, third-space thesis, regional connector, NT$200M 조달/생일 bankruptcy, long-term-vs-quick-money, event-scale 관계를 Scope에 복원하고 인접 완전 B2a와 §11/provenance 목적지를 맞춘다.
2. footer-link `#f5faff` / 14px tuple을 별도 role로 복원하고 §9 mixed disposition/F2를 고친다.
3. 새 font/license/logo/microcopy negative를 삭제하거나 독립 evidence를 추가한다.
4. Distinctive 36–39행 판단에 인접 완전 B2a를 붙이거나 관측 사실로 좁히고 DESIGN/provenance/migration/audit의 derived inventory를 동기화한다.
5. Event Card·Keyword chip·Inline/Organizer Link와 display-only Category Tag의 kind를 source evidence에 맞춰 복원한다. exact L/E/S가 미해상이면 그 field만 생략한다.
6. §2를 포함한 각 source-row 실제 목적지와 F2를 다시 맞추고 두 기계 검사를 통과시킨 뒤 같은 sol에 위 다섯 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 5. acer — FAIL

### 5.1 §11 portfolio·responsibility 관계 손실 — A1 / E2 / E2c / F2 FAIL

원본 `web/references/acer/DESIGN.md` 275행은 broad device/solution portfolio가 laptop-only 설명을 넘어선다는 관계를, 277행은 단순 hardware access를 넘어 technology가 people/work와 social·environmental responsibility를 연결한다는 현재 서사를 기록한다.

이관본 Scope 9–17행은 milestone·mission·Conscious Technology/Vero 사실을 남겼지만 두 관계는 목록형 사실로 축약했다. `migration-log.md` 18·30·70행은 §11 unique propositions가 복원됐다고 과대 주장한다.

### 5.2 imagery·control-label/support-copy evidence 발명 — A1 / D1 / E1 / E2c FAIL

- `DESIGN.md` 162행은 product photography/brand imagery를 first-party catalog content라고 확정하지만 원본 Assets 252–257행에는 이 사실이 없다.
- `DESIGN.md` 315·367행은 “harvested control labels”를 보유한 것처럼 쓰지만 원본 Components 160–205행에는 실제 label 문자열이 없다. 이를 근거로 CTA/error/empty/support-copy coverage까지 부정하는 것도 새 도메인이다.
- `DESIGN.md` 293행의 “Body layout repeats…”는 원본 218행의 supplied-surface observation을 body-general observation으로 다시 분류한다.

원본 범위로 좁히거나 독립 evidence를 추가하고, support-copy negative는 최소 field omission으로 되돌려야 한다.

### 5.3 여러 편집 판단의 인접 완전 B2a 누락 — B2 / B2a / E1 / E2c / F1 FAIL

- `DESIGN.md` 30행의 “Official material names…”는 evidence-bounded stakeholder archetype을 official classification으로 올린다.
- 104행 첫 문장 “Two observed shape families coexist…”는 뒤의 local-geometry 한정 앞에 놓여 그 한정의 적용을 받지 않는다.
- 194행의 native-select 구현 지시는 원본 §8 prompt-derived constraint인데 인접 완전 B2a 없이 source instruction으로 남았다.
- 293행의 body-layout 관측 재분류에도 인접 완전 B2a가 없다.

278행 한정은 Locale Select의 unmerged color field에만 붙어 native-select directive를 덮지 않는다. `migration-log.md` 43행은 위 위치를 빠뜨린 채 F1 완료를 주장한다.

### 5.4 실제 목적지보다 강한 source-row·F2 원장 — E2 / E2a / E2c / F2 FAIL

- catalog homepage literal `https://www.acer.com/`은 portable Scope 9행과 provenance identity 13·20행에 있다. `provenance.md` 20행과 `migration-log.md` 14·48행이 말하는 Surfaces/Sources/Tier 1에는 하위 URL만 있어 exact literal 목적지가 아니다.
- `#80c343`과 `#40810c`은 `provenance.md` derived inventory 144행에도 있으나 `migration-log.md` 47·56행의 destination set은 이를 빠뜨린다.
- interaction count 0은 `DESIGN.md` 171행과 `provenance.md` 125행의 dual destination인데 `migration-log.md` 33행은 provenance를 누락한다.
- Primary tasks 23–25행은 §4 controls/captured surfaces에서 나온다. `migration-log.md` §4 rows 16·21·22행은 이 목적지를 누락하고 §13 row 32행에 묶어 source provenance를 뒤바꾼다. §13 stakeholder groups→Audience와 §4/capture→Primary tasks를 분리해야 한다.

### 5.5 F3 미실행·구 SHA와 상충하는 완료 기록 — F3 / E2c FAIL

`audit-log.md`가 없고 `worker-log.txt` 16행 및 `migration-log.md` 10행은 F3 대기와 SHA `e3d95b…a96ff8`을 기록한다. 현재 DESIGN SHA는 `2b4967…f04f8`이다. 그런데 `migration-log.md` 77행은 “after this F3 scan”이라고 쓴다. 유효한 신선 세션 감사, 현재 SHA, Post-F3 기록이 모두 없다.

### acer에서 확인된 통과 항목

- line-height `normal`/`28.368px`, primitive types, metadata와 unmerged component fields가 유지됐다.
- §14 10행, §8 prompt wrapper 삭제와 native-select 고유 constraint 자체, generic Focus 경계, B3 전문이 남아 있다.
- C1–C4 role/kind 처리, D2, omission ledger는 통과했다.
- unattributed motion curve를 새로 만들지 않았다.

### acer 재제출 조건

1. 원본 275·277행의 broad-portfolio-versus-laptop-only와 hardware-beyond/people-work-responsibility 관계를 Scope에 복원하고 인접 완전 B2a, provenance derived inventory, §11/F2 목적지를 동기화한다.
2. unsupported first-party imagery, harvested-control-label, support-copy negative를 삭제하거나 독립 evidence를 추가한다. body-layout evidence scope도 원본 수준으로 좁힌다.
3. Audience 30행, Shape 104행 첫 문장, native-select 194행, Layout 293행을 사실 범위로 재작성하거나 각각 바로 인접한 완전 B2a 아래 둔다. F1/derived inventory를 다시 맞춘다.
4. homepage exact URL, 두 green hex의 provenance inventory, interaction count 0, §4→Primary tasks와 §13→Audience의 실제 다중 목적지를 source-row별로 교정하고 F2를 다시 수행한다.
5. 미실행/구 SHA/Post-F3 모순을 제거한 뒤 신선한 별도 세션에서 F3를 처음이자 1회 실행한다. 값·표·applicability·구조는 바꾸지 않고 `audit-log.md`를 남긴다.
6. F3 후 두 기계 검사와 현재 SHA를 기록해 같은 sol에 위 다섯 조건만 목록-only로 재제출한다.

## 정본 결론

- 웨이브 7 첫 전수는 **FAIL 5/5, PASS 0/5**다.
- 다음 개정 입력은 각 건의 「재제출 조건」뿐이다. 동일 sol은 새 기준을 추가하지 않고 그 목록만 5/5 재확인한다.
- 591·8percent·accupass에는 새 F3를 요구하지 않는다. 91app·acer만 개정 뒤 아직 수행하지 않은 첫 F3를 정확히 1회 실행한다.
- 5건 전부 같은 sol PASS 전에는 웨이브 8 진입과 카탈로그 채택을 진행하지 않는다.
