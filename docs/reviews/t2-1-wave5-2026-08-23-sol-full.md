# T2-1 웨이브 5 전수 검토 — sol 의미 레인 (나머지 3/5)

- 대상: `docs/design-md-weight/migrated/{pinterest,airtable,abema}/`
- 원본: `web/references/{pinterest,airtable,abema}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v7 전 조항**
- 일시: 2026-08-23
- 기계 검증 1: `node test-v2/tools/migrate-reference.mjs --brand <id> --gate-only`를 직접 재실행했다. Pinterest, Airtable, ABEMA 모두 `PASS`, problems 0이다.
- 기계 검증 2: `node scripts/migrate-design-md-core.cjs --input <DESIGN.md> --check --require-portable-core --json`을 직접 재실행했다. Pinterest와 Airtable은 `portable_core: true`; ABEMA는 exit 1, `portable_core: false`, `missing-actionable-foundations-or-known-constraints`다.
- F3 실행 증거: 세 건 모두 이관 워커와 별도 `auditor-log.txt`가 있고 `audit-log.md`가 Pinterest 13건 / Airtable 25건 / ABEMA 14건의 B2a·E2 수정을 기록한다. 세 감사 모두 `AUDIT_DONE`이다.
- sol 범위: 기계 게이트와 F3 실행 여부를 전제로, 최종 산출물을 원본의 값-필드/역할 결합, 문장별 evidence class, source-row별 disposition까지 처음부터 다시 대조했다.

## 판정 요약

| 대상 | 판정 | 차단 조항 |
|---|---|---|
| Pinterest | **FAIL** | A1, A2, A4, B2/B2a, C2, E1, E2/E2a/E2c, F1/F2/F3 |
| Airtable | **FAIL** | A1, B2/B2a, C2, D1, E1, E2/E2a/E2c, F1/F2/F3 |
| ABEMA | **FAIL** | A1, B2/B2a, C2, D1, E1, E2/E2a/E2c, F1/F2/F3 |

**전수 결과: PASS 0/3, FAIL 3/3.** F3가 이 세 건에서 합계 52건을 고쳤지만 최종 산출물 모두에 B2a와 E2 계열이 남았다. 선행 표본 Duolingo·Ably의 FAIL 2/2와 합치면 웨이브 5 최초 산출물은 **FAIL 5/5**다. F3는 웨이브 전체에서 합계 102건을 수정했으나, “신선 세션 감사 뒤 B2a·E2 재발이 끊기는가”라는 구조 실험 기준을 한 건도 충족하지 못했다. 이는 F3 미실행이 아니라 **F3 실행 후 결함 제거 결과의 FAIL**이다.

## v7 전 조항 대조표

| 조항 | Pinterest | Airtable | ABEMA |
|---|---|---|---|
| A1 | **FAIL** — generic business action에 destination behavior와 filled-action shadow 결합 발명 | **FAIL** — typography `use`/tracking 손실, prose-derived token의 live-surface Proof 승격 | **FAIL** — CSS-only hover/accent를 outage-day live surface에도 매핑하고 generic control behavior 발명 |
| A1a | PASS — unitless `1.50` 보존 | PASS — unitless 8개 비율 보존 | PASS — unitless `1.5` 보존 |
| A1b | PASS — button×4, input, tab 구분 | PASS — button×3, input, card×2, badge 구분 | PASS — button×5, input/card/badge/tab×2/toggle/toast 구분 |
| A1c | PASS — `ds.type: system`, `tokens.source: reconciled` 보존 | PASS — `ds.type: brand`, `tokens.source: prose-derived`, harvest metadata 보존 | PASS — `tokens.source: live-extract`, dates, harvest metadata 보존 |
| A2 | **FAIL** — §14는 보존했으나 §9 prompt imperatives가 Experience에 잔존 | PASS — §14 11행 보존 | PASS — §14 10행 보존 |
| A3 | PASS — §9의 source-domain 경계값은 portable에 유지 | PASS — §9 추정값·충돌값을 비승격 상태로 보존 | PASS — §9-only inactive Panel Tab `#999999` 보존 |
| A4 | **FAIL** — selector 근거 없는 2px shadow를 filled action local field로 고정 | PASS — 주요 색/경계/오류 역할은 비합침 | PASS — hover/color/radius/font 충돌은 역할별 보존 |
| B1 | PASS — `focus-visible` treatment 비승격 | PASS — generic Focus 값 비승격 | PASS — Round Tab generic `Focus`와 `focus-visible` 분리 |
| B2 / B2a | **FAIL** — Scope/Avoid/Elevation 해석에 인접 완전 한정 없음 | **FAIL** — source가 `inferred`라고 명시한 Input/Badge에 완전 한정 없음 | **FAIL** — Pure White/Assets/thumbnail 해석에 인접 완전 한정 없음 |
| B3 | PASS — 다섯 evidence kind + per-component computed gate | PASS — 다섯 evidence kind + per-component computed gate | PASS — 다섯 evidence kind + per-component computed gate |
| C1 | PASS — capture 부재를 비적용 사유로 쓰지 않음 | PASS — capture 부재와 applicability 분리 | PASS — capture 부재를 비적용 사유로 쓰지 않음 |
| C2 | **FAIL** — generic Business actions를 destination으로 닫음 | **FAIL** — generic marketing CTA/Input을 navigation/form/sync/autosave 의미로 닫음 | **FAIL** — mixed/generic buttons, input, checkbox를 전역 page/error/toast 상태로 닫음 |
| C3 | PASS — coverage 완료 주장 없음 | PASS — coverage 완료 주장 없음 | PASS — coverage 완료 주장 없음 |
| C4 | PASS — 근거 없는 surface map 없음 | PASS — Card/Badge kind/map 생략 | PASS — Floating/Title/Notification/Modal kind/map 생략 |
| D1 | PASS — 원본 밖 새 coverage domain 없음 | **FAIL** — docs/native/unpublished route·typography 부재를 새 claim으로 작성 | **FAIL** — native-app/TIMES typography·inventory 부재를 새 claim으로 작성 |
| D2 | PASS — placeholder persona 비승격 | PASS — fictional biographies 삭제, 독립 state/homepage tasks만 유지 | PASS — fictional biographies 삭제, exclusion boundary만 유지 |
| E1 | **FAIL** — derived 범위가 잔존 B2a site를 누락 | **FAIL** — live Proof 과승격 + derived 범위 누락 | **FAIL** — live Proof 과승격 + derived 범위 누락 |
| E2 | **FAIL** — §9 삭제/이동, verification/font, §14/§15 disposition 불일치 | **FAIL** — ds/primary_color/shadow disposition 불일치 | **FAIL** — Core 결과·fallback 원천·task/TIMES disposition 불일치 |
| E2a | **FAIL** — verification font assets와 Named gaps 목적지 누락 | **FAIL** — ds/primary_color와 homepage hero의 실제 다중 목적지 누락 | **FAIL** — TIMES Typography 및 task 원천의 실제 목적지 누락 |
| E2b | PASS — §13 placeholder wrapper provenance 보관 | PASS — curve omission ledger 일치 | PASS — 해당 placeholder/omitted-curve 없음 |
| E2c | **FAIL** — F1/F2/C2 준수 주장이 본문보다 강함 | **FAIL** — F1/F2/C2/D1 준수 주장이 본문보다 강함 | **FAIL** — F1/F2/C2/Core 준수 주장이 본문보다 강함 |
| F1 | **FAIL** — F3 뒤에도 문장 단위 B2a 잔존 | **FAIL** — F3 뒤에도 component inference B2a 잔존 | **FAIL** — F3 뒤에도 문장 단위 B2a 잔존 |
| F2 | **FAIL** — source-row와 Named gaps 목적지를 놓침 | **FAIL** — source field와 실제 다중 목적지를 놓침 | **FAIL** — 현재 Core 결과와 실제 목적지를 놓침 |
| F3 | **FAIL (결과)** — 별도 감사 실행 후 B2a·E2 잔존 | **FAIL (결과)** — 별도 감사 실행 후 B2a·E2 잔존 | **FAIL (결과)** — 별도 감사 실행 후 B2a·E2 잔존 |

## 1. Pinterest — FAIL

### 1.1 generic Business action에 destination behavior와 shadow role을 부여 — A1 / A4 / C2 / E2c FAIL

원본이 확인한 것은 `Business marketing action`과 `Business marketing outline action`의 default styling/selector뿐이다(`web/references/pinterest/DESIGN.md` 142–144, 216–244행). Exact label, destination, request, validation, outcome behavior는 없다. 그런데 이관본은 두 action 모두를 destination control로 단정해 loading/error/success를 전부 `not-applicable`로 닫는다(`docs/design-md-weight/migrated/pinterest/DESIGN.md` 260–262, 284–286행). 같은 파일에서 exact label/behavior가 없는 consumer header action은 세 field를 생략했다(183, 209행). 동일한 최소-field 원칙을 Business action에도 적용해야 한다.

원본 Elevation은 business action **samples**에 2px `#111111` outline-like shadow가 있다고만 기록한다(원본 259행). 특정 filled selector와의 결합은 없다. 이관본은 이를 filled Business marketing action의 local observed field로 고정하고(252행), provenance/log도 그 이중 목적지를 확정한다(`provenance.md` 145행; `migration-log.md` 26행). Selector-level 근거가 없으면 component field 결합을 제거하거나 exact selector evidence를 붙여야 한다.

### 1.2 F3 뒤에도 남은 editorial/causal judgment — B2 / B2a / E1 / E2c / F1 / F3 FAIL

완전 B2a 한정은 Scope atmosphere(11행), numbered Principles(39행), capture-bound list(48행) 세 곳뿐이다. 그 밖에 다음 판단이 한정 없이 남는다.

- Scope의 evidence-domain/token application과 `That narrative evidence explains ...` 인과 결론(`DESIGN.md` 9, 13, 15행)
- Audience의 `Use stakeholder groups only` / `Observable work follows ...` application(27행)
- official badge prohibition과 다른 evidence class인 consumer/business/font/capture Avoid 규칙(59–64행)
- semantic-role 비일반화, local Shape/Elevation, font-use/imagery application 판단(77–84, 96, 100, 127, 142행)
- legacy-removal 인과와 cross-viewport/conservative-layout 읽기(155, 316–320행)

이들은 first-party 문장이나 raw measurement가 아니라 source evidence를 portable application으로 읽은 판단이다. F3 audit은 이를 `class 1 or 2, or reconstruction boundary`로 면제했다(`audit-log.md` 11–18행). Provenance의 derived 범위는 세 한정 블록만 열거하고(`provenance.md` 141–142행), migration F1은 나머지 Avoid/경계 문장을 한정 불필요로 분류한다(`migration-log.md` 42행). Rulebook B2a에는 `reconstruction boundary` 면제가 없으며, 해석을 유지하면 해당 문장에 인접한 완전 한정이 필요하다.

### 1.3 §9 prompt가 남고 삭제/이동·다중 목적지가 맞지 않음 — A2 / E2 / E2a / E2c / F2 FAIL

Rulebook A2는 §9의 도구 명령·프롬프트를 삭제하고, A3에 따라 고유 근거값만 적절한 slot으로 옮기게 한다. 원본 §9의 `For a consumer ... use`, `For a Pinterest Business ... use`, `Do not blend ...` imperative(원본 285–287행)는 Experience capture-bound 50–53행에 거의 같은 prompt form으로 남았다. 값/도메인 경계는 Foundations·Typography·Scope에서 보존하되, agent-prompt wrapper와 명령형 조합은 제거해야 한다.

대표적인 source-row 불일치는 다음과 같다.

| Source row | 실제 목적지 | 로그 불일치 |
|---|---|---|
| §9 source-domain prompt와 `Do not blend`(원본 285–287) | Experience capture-bound 50–53 | `migration-log.md` 32행은 disposition을 `삭제`로 두고 A3 고유값 없음이라 기록 |
| `verification_v2.sources` font URLs(원본 30–31) | Typography & Assets 117 + provenance Sources 62–63 | YAML `verification_v2` 행(15)은 capture/brand URLs만 이중 목적지로 기록; font asset source-row 누락 |
| §14 unobserved state/variant 목록(원본 246, 312) | Capture record 151–153 + Named gaps 361–363 | §14 행(37)은 Named gaps 목적지 누락 |
| §15 motion absence(원본 316) | Foundations Motion 104 + Named gaps 367 | §15 행(38)은 Named gaps 목적지 누락 |

§7 imagery/font-substitution과 §8 responsive gaps도 Named gaps/Family에 추가 destination이 있지만 §7/§8 행은 이를 닫지 않는다(`migration-log.md` 28, 30–31행; portable 60, 127, 365–366행). 따라서 F2의 grep 목록과 C2/F1 준수 기록(42–43행)은 실제 source-row disposition보다 강하다.

### Pinterest에서 확인된 통과 항목

- YAML unitless line-height `1.50`, six primitive types, `ds.type: system`, `tokens.source: reconciled`, component-local foreground/border roles는 보존됐다.
- §14 본문, generic Focus/`focus-visible` 분리, B3 다섯 evidence kind/per-component gate는 남아 있다.
- §13 placeholder wrapper는 provenance omission ledger에만 있고 fictional persona/task로 승격되지 않았다.

### Pinterest 재제출 조건

1. 두 Business action의 exact label/behavior를 확보하거나 loading/error/success applicability 세 field를 생략한다.
2. 2px shadow를 특정 filled action에 결합할 selector evidence를 추가하거나 component-local 결합을 철회한다.
3. 전체 body를 다시 F1 스캔해 Scope/Avoid/Elevation 판단을 제거하거나 각각 인접 완전 B2a 아래 둔다. Provenance derived 범위를 실제 site와 맞춘다.
4. §9 agent-prompt wrapper/imperatives를 삭제하되 고유 사실은 적절한 slot에 보존하고, disposition을 실제 mixed move/delete에 맞춘다.
5. Verification font URLs, §7/§8/§14/§15 Named gaps 등 모든 실제 목적지를 source-row 단위로 기록한다.
6. 새 신선 세션 F3와 두 기계 검사를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 2. Airtable — FAIL

### 2.1 typography 값 손실과 live-surface Proof 발명 — A1 / E1 FAIL

원본 YAML typography 열 개 role은 각각 `use` 값을 가진다(`web/references/airtable/DESIGN.md` 36–45행). 이관 Type roles 표에는 `Use` 열이 없어 hero headlines, emphasized body, button labels, captions/small labels 등의 결합이 사라졌다(`docs/design-md-weight/migrated/airtable/DESIGN.md` 169–180행). 또한 원본 body table의 Sub-heading letter spacing `normal`(111행)은 이관본에서 `—`가 된다(174행). Role 이름이 일부 의미를 암시해도 검증된 field/value 보존을 대신하지 않는다.

원본 증거는 `tokens.source: prose-derived`와 전역 footer live-DOM 메모(round 50% icon buttons, ghost 12px, Sign up CTA)뿐이다(원본 19–22, 310–314행). 그런데 provenance는 모든 token/component claim을 `airtable-live`에 매핑하고 그 URL을 한 곳에서는 marketing surface, 다른 곳에서는 `product-surface`로 분류한다(`provenance.md` 45, 54, 87–109행). 이는 source에 없는 per-claim live Proof다. Exact legacy evidence가 없으면 claim-surface mapping을 제거하고 prose-derived reconstruction과 limited live notes를 분리해야 한다.

### 2.2 source가 `inferred`라고 한 components의 evidence class가 불완전 — B2 / B2a / E1 / E2c / F1 / F3 FAIL

원본은 Default Input과 Badge를 `Inferred from §1–§2 baseline (no explicit DS variant in source)`라고 명시한다(원본 157, 185행). 이관본도 `inferred`라는 단어는 남기지만(`DESIGN.md` 215, 301–313, 355–365행), Rulebook v7이 요구하는 `derived editorial implementation inference / not Airtable-authored or a separately published UI specification`의 완전한 인접 evidence-class 한정은 없다.

F3 audit의 already-qualified 목록과 provenance derived inventory는 이 두 component inference를 누락한다(`audit-log.md` 19행; `provenance.md` 154–158행). Migration F1도 모든 해석 site가 닫혔다고 주장하면서 이를 열거하지 않는다(`migration-log.md` 37행).

같은 class 누락은 live-DOM의 round icon / ghost notes에 fill·padding·state matrix가 없다는 사실에서 `not harvested components`라는 causal conclusion을 만든 Capture record 213행에도 있다.

### 2.3 generic style role을 navigation/form/sync/autosave behavior로 닫음 — A1 / C2 / E2c FAIL

원본 §4는 Primary/White button과 inferred Default Input의 styling/use만 기록하고, §10 homepage strings와 §14 product state table은 별도 evidence다(원본 123–157, 242–253, 281–295행). 이관본은 다음 behavior를 추가한다.

- Primary Blue를 Sign up / Talk to sales page action과 destination navigation으로 연결(242–244행)
- White를 page action / destination navigation으로 단정(268–270행)
- inferred Default Input을 form validation, sync loading, implicit autosave와 결합(321–323행)

Exact selector/label/request/outcome mapping 없이 서로 다른 evidence domains를 합쳐 applicability를 닫을 수 없다. 해당 역할 근거를 추가하거나 loading/error/success를 최소 field 경계에서 생략해야 한다. `migration-log.md` 31행의 C2 준수 주장은 실제 근거보다 강하다.

### 2.4 source에 없는 negative coverage와 Trademark 결론 — A1 / D1 FAIL

Portable Scope는 `Docs, native, and unpublished routes`를 reconstruction 밖으로 선언하고, Font evidence/Named gaps는 native/unpublished typography 부재를 반복한다(`DESIGN.md` 9, 157, 447행). 원본에는 이 coverage claim이 없다. `docs`는 브랜드 거부 서사에 한 번 나오지만 route coverage가 아니며, native/unpublished domain은 없다. 미해상은 적지 않는 것이 최소 경계 생략이다.

또한 Scope와 Font evidence는 Trademark Guidelines가 interface tokens를 publish하지 않는다고 단정한다(11, 151행). 원본이 확인한 것은 `ds.type: brand`와 “trademark usage and brand guidelines” 설명뿐이다(원본 13–17행). 문서 내용의 부재를 독립적으로 확인한 evidence를 붙이거나 packet에서 interface-token evidence가 unresolved라는 더 작은 경계로 처리해야 한다.

### 2.5 migration-log의 source field와 실제 목적지가 다름 — E2 / E2a / E2c / F2 FAIL

- `ds.name`/`ds.description`은 provenance-only로 기록됐지만(`migration-log.md` 15행), portable Scope와 Font evidence가 Trademark Guidelines 이름/설명을 사용한다(`DESIGN.md` 11, 151행).
- Catalog `primary_color` `#fcb400`은 identity + Foundations dual이라고 기록됐지만(`migration-log.md` 13행; `provenance.md` 28, 150행), portable Scope/Avoid/capture-bound에도 catalog value로 명시된다(`DESIGN.md` 13, 62, 71, 85행).
- §2 행은 두 shadow 문자열이 모두 Primary Blue/Standard Card field에도 간다고 적는다(`migration-log.md` 18행). 실제 soft shadow는 Elevation/Avoid에만 있고, component field에는 standard composite만 있다(`DESIGN.md` 70, 116–117, 232, 334행).
- Homepage hero는 Scope, Primary tasks, Content, provenance에 있지만(`DESIGN.md` 19, 29, 385행; `provenance.md` 81행), §10/§11 log와 provenance destination summary는 Primary tasks를 누락한다(`migration-log.md` 27–28행; `provenance.md` 153행).
- `#e5e7eb`은 §14 skeleton뿐 아니라 Semantic color와 Capture record field note에도 있다(`DESIGN.md` 98, 207, 211행). F2는 skeleton row만 기록한다(`migration-log.md` 38행).

따라서 F2 38행은 value grep을 했어도 source field/role과 모든 목적지를 닫지 못했다.

### 2.6 narrative 값과 §1 Atmosphere disposition 손실 — A1 / E2 FAIL

원본 Brand Narrative는 Duke connections, Etacts의 YC W2010/age 20/Gmail 맥락, Ofstad의 Android/Google Maps 역할, Nicholas의 Stack Overflow 3+ years, ease-of-use 대 structural-rigor에서 hybrid를 제안했다는 thesis, pre-seed 인물의 Bebo/Gusto 결합을 기록한다(원본 259행). Portable Scope 19행과 provenance 69–79행은 이를 압축하면서 일부 값/관계를 잃었다. 그런데 §11 log는 narrative를 Scope/provenance로 옮겼다고만 기록한다(`migration-log.md` 28행).

원본 §1의 `sophisticated simplicity`도 portable에서 사라졌다(원본 64행). F1 note는 이 문장을 retained하지 않았다고 뒤늦게 적지만(37행), §1 disposition 행은 Atmosphere를 옮겼다고만 하고 field 삭제+사유를 기록하지 않는다(17행). 검증된 narrative 값을 정확한 evidence class로 복원하거나, 규칙상 허용되는 삭제라면 source-row에 실제 이유를 기록해야 한다.

### Airtable에서 확인된 통과 항목

- YAML unitless line-height 여덟 비율, primitive types, `ds.type: brand`, `tokens.source: prose-derived`, component-local 색/경계 충돌은 보존됐다.
- §14 11행, generic Focus/`focus-visible` 분리, B3 다섯 evidence kind/per-component gate, Card/Badge kind-map omission은 유지됐다.
- Fictional persona biographies는 portable/provenance에 재수록되지 않았고 Primary tasks는 §14/homepage 근거에서 왔다. 두 unattributed cubic-bezier 값은 provenance omission ledger에만 남았다.

### Airtable 재제출 조건

1. 열 개 typography `use` field와 Sub-heading `normal` tracking을 정확한 role 결합으로 복원한다.
2. `airtable-live` per-claim mapping을 제거하거나 claim별 exact live evidence를 붙이고 marketing/product evidence domains를 분리한다.
3. Input/Badge inference마다 완전 인접 B2a를 붙이고 provenance/log derived inventory를 맞춘다.
4. Primary/White/Input의 exact behavior를 확인해 role별로 분리하거나 loading/error/success field를 생략한다.
5. docs/native/unpublished negative coverage와 근거 없는 Trademark no-token 결론을 제거하거나 독립 evidence를 추가한다.
6. 누락된 narrative 값/관계를 정확한 evidence class로 복원하고 `sophisticated simplicity`의 실제 disposition을 §1 row에 기록한다.
7. ds, `primary_color`, shadows, `#e5e7eb`, homepage hero를 포함해 source-row별 모든 목적지를 다시 기록한다.
8. 새 신선 세션 F3와 두 기계 검사를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 3. ABEMA — FAIL

### 3.1 현재 Core checker FAIL과 migration-log PASS 주장 충돌 — E2 / E2c / F2 FAIL

`--gate-only`는 PASS/problems 0이지만 현재 Core checker는 ABEMA에서 exit 1이다. 결과는 `structurally_valid: true`, `portable_core: false`, reason `missing-actionable-foundations-or-known-constraints`, input SHA-256 `abc109c1689c5795ca8bb1441baa78ffc318421028e57528c9db8916e770b6a3`다. Foundations 99–101행의 `do not reuse ... constraint`가 현재 conformance negation pattern(`scripts/design-md-core-conformance.cjs` 290–297행)에 걸린다.

`migration-log.md` 9행은 `portable_core: true`를 기록하므로 현재 파일/검사 결과와 일치하지 않는다. 완전 B2a 한정을 약화하지 않으면서 현재 checker를 통과하고, 실행한 정확한 command/result를 다시 기록해야 한다.

### 3.2 CSS-only 값을 outage-day live surface에도 배정 — A1 / E1 FAIL

Provenance claim ledger는 `primary / primary-hover / accent / accent-hover`를 `abema-css + abema-live`에 함께 배정한다(`docs/design-md-weight/migrated/abema/provenance.md` 85행). 원본은 전체 token system을 archived CSS bundle에서 복구했다고 명시한다(`web/references/abema/DESIGN.md` 15–17, 505–513행). Outage-day live shell에서 확인한 것은 black canvas, translucent chrome, yellow links, 4px radius, CopyRight stack이다. `primary-hover`, LIVE accent, accent-hover의 live observation은 없다.

Only live-measured claim만 `abema-live`에 두고 나머지는 CSS-only로 분리하거나 exact live evidence를 추가해야 한다.

### 3.3 F3 뒤에도 남은 derived judgments — B2 / B2a / E1 / E2c / F1 / F3 FAIL

다음은 complete limiter 밖의 editorial character/purpose/application reading이다.

- Pure White의 `maximum-contrast moments only`(`DESIGN.md` 124행)
- program thumbnails를 first-party catalog content로 단정하고 invented brand-color decoration으로 대체하지 말라는 Assets 지시(227행)
- thumbnail hover veil이 이미지를 “lifts”한다는 성격 읽기(564행)

원본의 값/관측은 123, 385–387행에 있고 brand refusal narrative는 446행에 있지만, 위 wording은 별도 ABEMA-published doctrine이 아니다. Provenance derived inventory는 이 site를 누락한다(`provenance.md` 118행). Migration F1은 unqualified reading이 남지 않았다고 선언하고(`migration-log.md` 39행), F3 audit은 9곳 수정 후 종료했다(`audit-log.md` 7–15, 28행).

### 3.4 generic/mixed controls를 전역 page/error/toast 상태로 닫음 — A1 / C2 / E2c FAIL

원본 button/input 역할은 generic 또는 mixed이며(원본 159–216행), §14의 page/card loading, SorryPage/field error, toast success는 전역 state contract다(466–479행). 전역 state가 각 control의 loading/error/success 의미를 부정하지 않는다.

- Primary는 plan signup과 confirm actions를 합친 채 세 상태를 닫는다(`DESIGN.md` 255, 275–277행).
- Secondary, Dark, Primary Dark도 exact behavior 없이 전역 waiting/error/toast를 이유로 닫는다(283–302, 306–348행).
- Danger unsubscribe/delete는 실제 request/failure/outcome 가능성이 있는데 모두 비적용이다(352, 369–371행).
- Text Field는 default/search variant를 합친 채 form error와 toast success를 단정한다(375–396행).
- Checkbox는 settings/consent와 radio twin을 합친 채 세 상태를 닫는다(497–515행).

Exact selector/label/request/outcome evidence로 역할을 나누거나 unresolved applicability field를 생략해야 한다. `migration-log.md` 33행의 C2 준수 주장은 실제보다 강하다.

### 3.5 새 negative domains와 실제 destination 누락 — D1 / E2 / E2a FAIL

Font evidence/Named gaps는 `Native-app typography`, `TIMES editorial type`, TIMES harvested inventory 부재를 새 claim으로 만든다(`DESIGN.md` 197, 628–629행). Scope도 TIMES가 harvested component inventory가 아니라고 단정한다(9행). 원본은 web/CSS evidence와 TIMES dark-canvas inspect만 기록하며(원본 301–302, 505–515행), native-app/TIMES typography coverage를 판정하지 않는다.

TIMES font 문장을 유지한다면 Typography & Assets가 실제 목적지인데 provenance와 migration destination inventory는 이를 누락한다(`provenance.md` 51, 110행; `migration-log.md` 16, 22, 40행). 같은 source-row 정확성 문제로 §5 home rails와 VOD width, §11 free-linear fact가 Primary tasks에도 쓰였지만 각 §5/§8/§11 disposition은 Primary tasks를 기록하지 않는다(`migration-log.md` 23, 27, 30행; portable tasks 23–25행).

### 3.6 fallback 원천과 F1/F2 준수 기록이 실제 source보다 강함 — E2 / E2c FAIL

`migration-log.md` 26행은 Hiragino/system fallback 금지를 원본 §3의 금지로 설명한다. 원본 §3은 fallback stack을 선언할 뿐 금지 규칙을 발행하지 않는다(원본 130–133행). No-substitution은 migration/runtime evidence boundary로 기록해야지 ABEMA source Don't로 귀속할 수 없다. 같은 log 39–40행의 F1/F2 및 body-matching compliance도 위 결함 때문에 성립하지 않는다.

### ABEMA에서 확인된 통과 항목

- Literal token inventory, unitless `1.5`, primitive types, harvest metadata, §14 10행은 보존됐다.
- Round Tab generic Focus/`focus-visible` 분리, §9-only inactive label, B3 전문, noninteractive/surface map omission은 유지됐다.
- Fictional persona names/biographies는 portable/provenance에 재수록되지 않았다. Search-suggest cubic-bezier는 shipped CSS attribution이 있어 보존 대상이다.

### ABEMA 재제출 조건

1. Claim ledger를 exact evidence surface로 분리해 hover/accent 계열의 unsupported `abema-live` 매핑을 제거한다.
2. 전체 body를 다시 F1 스캔하고 남은 derived 판단을 제거하거나 각각 인접 완전 B2a 아래 둔다. Provenance derived inventory를 동기화한다.
3. mixed/generic controls를 exact behavior evidence로 분리하거나 loading/error/success applicability를 최소 field 경계에서 생략한다.
4. native-app/TIMES negative claims를 제거하거나 독립 evidence를 붙이고, 유지하는 모든 destination을 기록한다.
5. fallback prohibition의 원천과 §5/§8/§11 task 목적지를 포함해 migration log를 source-row 단위로 다시 맞춘다.
6. complete B2a limiter를 약화하지 않고 현재 Core checker를 exit 0으로 만들고, `--gate-only`와 함께 정확한 결과를 기록한다.
7. 새 신선 세션 F3를 실행한 뒤 같은 sol 의미 레인에 재제출한다.

## 웨이브 판정

**최종 판정: Pinterest FAIL / Airtable FAIL / ABEMA FAIL.** 기계 `--gate-only` PASS 3/3은 의미 보존 PASS를 대신하지 못하며, ABEMA는 현재 Core checker에서도 별도로 FAIL이다.

선행 표본 Duolingo·Ably를 포함한 웨이브 5 최초 산출물은 **FAIL 5/5**다. F3 감사가 총 102건을 고쳤지만 다섯 건 모두에서 B2a 또는 E2가 재확인됐다. 새 의미 결함 계층이라기보다 기존 A1/A4·B2/B2a·C2·D1·E1·E2/E2a/E2c의 반복 적용 실패이며, ABEMA의 Core 결과 불일치는 E2c의 기계적 증상이다.

각 FAIL 조건을 해소한 개정본을 동일 sol 레인에서 재검증하기 전까지 웨이브 5 채택, 다음 웨이브, 카탈로그 채택을 정지한다.
