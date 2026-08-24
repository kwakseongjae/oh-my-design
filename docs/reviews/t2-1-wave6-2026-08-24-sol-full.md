# T2-1 웨이브 6 전수 검토 — sol 의미 레인 (5/5 첫 판정)

- 대상: docs/design-md-weight/migrated/{104,11st,17live,3o3,42dot}/
- 원본: web/references/{104,11st,17live,3o3,42dot}/DESIGN.md
- 기준: docs/design-md-weight/MIGRATION_RULEBOOK.md v7 전 조항
- 프로토콜: docs/reviews/t2-1-protocol-2026-08-23-grok.md
- 일시: 2026-08-24
- 검토 모드: 웨이브 6 첫 5/5 전수 판정. 첫 FAIL은 기대값이며, 아래 목록만 다음 개정과 동일 sol 재확인의 기준이다.

## 판정 요약

| id | 판정 | 차단 조항 |
|---|---|---|
| 104 | **FAIL** | A1, B2/B2a, D1, E1, E2/E2a/E2c, F1/F2 |
| 11st | **FAIL** | A1/A4, B2/B2a, C2, D1, E1, E2/E2a/E2c, F1/F2 |
| 17live | **FAIL** | A1, B2/B2a, C1/C2/C4, D1, E1, E2/E2c, F1/F2 |
| 3o3 | **FAIL** | A1, D1, E2/E2c, F2 |
| 42dot | **FAIL** | A1, C2, D1, E1, E2/E2a/E2c, F2 |

**웨이브 첫 판정: FAIL 5/5, PASS 0/5.**

기계 검사는 의미 판정을 대신하지 않았다. 아래 두 명령을 현재 파일에 직접 재실행했으며 모두 통과했다.

1. node test-v2/tools/migrate-reference.mjs --brand {id} --gate-only
2. node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/{id}/DESIGN.md --check --require-portable-core --json

| id | gate-only | Core | DESIGN.md SHA-256 | F3 실행 증거 |
|---|---|---|---|---|
| 104 | PASS, problems 0 | exit 0, portable_core true | fa9a5544acd4a844f286749fa7915cfdfa2c142bf20b32b7e6083773ad4f3048 | AUDIT_DONE fixes=28 |
| 11st | PASS, problems 0 | exit 0, portable_core true | 56d3fa18068a6b0d0658d9f37ef51b4de5401ea0888a03a76c5c277b03454c88 | AUDIT_DONE fixes=24 |
| 17live | PASS, problems 0 | exit 0, portable_core true | dea78983d7e2032ccab4f4f11af9f6d9cb4eebc10ee1e2fa854797229bf2a32f | AUDIT_DONE fixes=34 |
| 3o3 | PASS, problems 0 | exit 0, portable_core true | a40910a2e6096cdb7aac7e3c5b7f96c6fff35a88459d062d9ebfbf6548a5099e | AUDIT_DONE fixes=31 |
| 42dot | PASS, problems 0 | exit 0, portable_core true | e1a1fab289d2fec2390c85e060fed4613e82e318242efa71e6ce56576b54b4aa | AUDIT_DONE fixes=27 |

F3는 다섯 건 모두 이관 워커와 분리된 신선 세션으로 1회 실행됐다. 프로토콜 53–56행에 따라 이것은 실행 증거 PASS이며 첫 판정 PASS 보증이 아니다. 아래 B2a/E2 잔존은 목록 개정 대상이고, 재제출에 새 F3를 요구하지 않는다.

## Rulebook v7 전 조항 매트릭스

표의 FAIL은 아래 건별 차단점에 연결된다. “PASS”는 해당 조항을 전수 대조한 결과이며 전체 문서 판정 PASS를 뜻하지 않는다.

| 조항 | 104 | 11st | 17live | 3o3 | 42dot |
|---|---|---|---|---|---|
| A1 값 손실 0 / 발명 0 | FAIL — known selector를 unknown으로 반전 | FAIL — body use 결합 손실 | FAIL — §11 고유 서사 손실 | FAIL — product-origin thesis 손실 | FAIL — blog 관측 손실·surface mapping 발명 |
| A1a unitless ratio | PASS | PASS | PASS | PASS | PASS |
| A1b primitive type | PASS | PASS | PASS | PASS | PASS |
| A1c metadata | PASS | PASS | PASS | PASS | PASS |
| A2 §14 보존 / §9 prompt 삭제 | PASS | PASS | PASS | PASS | PASS |
| A3 §9-only 고유값 | PASS | PASS | PASS | PASS | PASS |
| A4 field-role 비결합 | PASS | FAIL — body/list/button/dialog use 축소 | PASS | PASS | PASS |
| B1 generic Focus 경계 | PASS | PASS | PASS | PASS | PASS |
| B2/B2a 인접 완전 한정 | FAIL | FAIL | FAIL | PASS | PASS |
| B3 motion 5종 gate | PASS | PASS | PASS | PASS | PASS |
| C1 capture absence ≠ N/A | PASS | PASS | FAIL | PASS | PASS |
| C2 exact role별 L/E/S | PASS | FAIL | FAIL | PASS | FAIL |
| C3 coverage 완료 주장 금지 | PASS | PASS | PASS | PASS | PASS |
| C4 kind 근거 없으면 kind/map 생략 | PASS | PASS | FAIL | PASS | PASS |
| D1 새 negative coverage 금지 | FAIL | FAIL | FAIL | FAIL | FAIL |
| D2 fictional persona 금지 | PASS | PASS | PASS | PASS | PASS |
| E1 provenance/portable evidence class | FAIL | FAIL | FAIL | PASS | FAIL |
| E2 source-row 실제 disposition | FAIL | FAIL | FAIL | FAIL | FAIL |
| E2a 모든 다중 목적지 | FAIL | FAIL | PASS | PASS | FAIL |
| E2b omission ledger | PASS | PASS | PASS | PASS | PASS |
| E2c 준수 주장 강도 | FAIL | FAIL | FAIL | FAIL | FAIL |
| F1 최종 B2a scan 결과 | FAIL | FAIL | FAIL | PASS | PASS |
| F2 최종 E2 grep 결과 | FAIL | FAIL | FAIL | FAIL | FAIL |
| F3 별도 세션 1회 실행 | PASS | PASS | PASS | PASS | PASS |

## 1. 104 — FAIL

### 1.1 알려진 selector를 unresolved로 반전 — A1 / D1 / E2 / E2c / F2 FAIL

원본은 Search Action과 Outline Action의 exact selector를 각각 web/references/104/DESIGN.md 215, 223행에 기록한다. 이관 provenance도 docs/design-md-weight/migrated/104/provenance.md 126–127행에 그대로 보존한다.

그런데 portable은 DESIGN.md 180, 207, 230행과 Named gaps 378행에서 “exact selector/label/destination/request/outcome is unresolved”라고 쓴다. provenance.md 142행, migration-log.md 32·58행도 같은 false negative로 C2 준수를 설명한다. loading/error/success 세 필드의 생략 자체는 label/destination/request/outcome 미해상으로 유지할 수 있지만, selector는 알려진 값이므로 unresolved 집합에서 빠져야 한다.

### 1.2 인접 완전 한정 없는 편집 판단 — B2 / B2a / E1 / E2c / F1 FAIL

- DESIGN.md 15행의 “It extends that social framing…”은 children/working-age adults/healthy older adults와 Be A Giver facts 사이의 관계를 만든 editorial synthesis다.
- DESIGN.md 39행의 네 색을 “as the information hierarchy”로 읽는 문장은 raw hex 관측이 아니라 역할·성격 해석이다.

두 문장 모두 해당 판단에 인접한 “derived editorial implementation inference / not 104人力銀行-authored or a separately published UI specification” 완전 한정이 없다. provenance.md 183행과 migration-log.md 42행은 이들을 first-party/observed 범위로 제외했고, audit-log.md의 최종 분류도 놓쳤다.

### 1.3 §10 inline evidence의 mixed disposition 누락 — E2 / E2a / E2c / F2 FAIL

원본 web/references/104/DESIGN.md 316–319행의 네 voice sample에는 official URL과 2026-07-14 날짜가 inline evidence로 붙어 있다. 실제 이관은 문구를 portable DESIGN.md 335–338행으로, URL/date를 provenance.md 32–36·59–62행으로 나눴다.

하지만 migration-log.md 28행은 §10을 Content-only로 기록하고, 17행은 해당 official URL 원천을 §1/§11로만 적는다. F2 53–54행도 URL의 실제 §10 source-row split을 닫지 못한다. §10 row는 “문구 → Content / citation URL·date → provenance”의 mixed disposition이어야 한다.

### 1.4 favicon URL의 목적지 수를 과장 — E2 / E2a / E2c / F2 FAIL

migration-log.md 13·49행과 provenance.md 149행은 catalog Google favicon을 provenance + Assets + Named gaps의 triple로 주장한다. 그러나 literal URL은 provenance identity에만 있고, portable DESIGN.md 165행과 384행에는 URL 없는 evidence-boundary/first-party-mark gap 문장만 있다. migration-log.md 49행 자체도 “URL string is provenance-only”라고 인정한다.

URL 값의 목적지와 URL-free boundary 문장의 목적지를 분리해 기록해야 한다. 현재 “triple metadata” 주장은 실제 grep 결과보다 강하다.

### 104에서 확인된 통과 항목

- YAML unitless lineHeight 1.43/2.14/1.4, button×2/tab×2/card/dialog type, tokens.source live-extract가 보존됐다.
- §14 capture record, generic Focus 경계, B3 다섯 evidence kind/per-component gate가 남아 있다.
- Search/Outline의 세 L/E/S 필드는 생략됐고 Topic tabs는 grouping-selection 역할로 판정됐다. Company Card/Login Dialog는 kind와 map을 생략했다.
- fictional persona를 만들거나 sidecar에 재수록하지 않았다. unattributed motion curve도 새로 만들지 않았다.

### 104 재제출 조건

1. DESIGN.md 180·207·230·378, provenance.md 142, migration-log.md 32·58의 unresolved 집합에서 known selector를 제거하고, L/E/S 생략 사유를 실제 미해상 label/destination/request/outcome으로 좁힌다.
2. DESIGN.md 15·39행의 판단을 직접 first-party/observed 사실로 재작성하거나 각각 바로 인접한 완전 B2a 아래 둔다. provenance derived inventory와 F1 기록을 동기화한다.
3. §10 source row를 “sample text → Content / citation URL·date → provenance” mixed disposition으로 고치고 F2를 다시 맞춘다.
4. Google favicon의 literal URL destination과 URL-free boundary/gap destination을 분리해 migration-log/provenance/F2의 triple 주장을 교정한다.
5. 두 기계 검사를 다시 통과시킨 뒤 같은 sol에 위 네 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 2. 11st — FAIL

### 2.1 typography body use 결합 손실 — A1 / A4 / E2c FAIL

원본 web/references/11st/DESIGN.md 109행은 14/400/1.50 body role의 use를 “Repeated public product-home body, list, button, and dialog samples”로 기록한다. portable DESIGN.md 140행은 이를 “Repeated product home and /main samples”로 축소해 body/list/button/dialog 결합을 잃었다.

DESIGN.md 118행의 Noto Sans KR 전체 사용처 열거는 이 특정 body role/use field를 복원하지 않는다. migration-log.md 15행의 token 이동·보존 설명도 실제보다 강하다.

### 2.2 Principles 전체를 first-party quote로 과분류 — B2 / B2a / E1 / E2c / F1 FAIL

portable DESIGN.md 45–49행은 세 numbered items 전체를 first-party company-profile/brand-page “quote”로 분류하고 UI implication만 derived로 한정한다. 그러나 “Guide the shopping journey”, “Keep identity recognizable across surfaces”, “Support both customers and sellers”라는 principle stems와 조합 자체가 catalog editorial reconstruction이다.

Rulebook B2a는 Principles 전체 앞의 완전 인접 한정을 요구한다. provenance.md 148행, migration-log.md 32·39행, audit-log.md 13·76행도 같은 과분류를 반복한다.

### 2.3 Billboard Control 행동을 발명해 세 상태를 닫음 — C2 / E2c FAIL

원본 web/references/11st/DESIGN.md 117, 175–184행은 selector/default styling과 generic “billboard control”만 확인한다. exact label, action, request, outcome은 없다.

portable DESIGN.md 221–223행은 “operates/advancing the billboard”를 새 behavior로 만든 뒤 loading/error/success를 모두 not-applicable로 닫는다. provenance.md 135행과 migration-log.md 34행의 C2 준수 주장도 과하다. Exact behavior를 추가하거나 이 세 applicability field를 최소 경계에서 생략해야 한다.

### 2.4 원본 밖 negative coverage — D1 / E2 / E2c FAIL

- DESIGN.md 83·307행의 “dark-surface color” 부재는 원본의 gradient/filled CTA/product-status와 철회된 #F43142 범위를 넘는다.
- DESIGN.md 312행의 “support copy”와 storefront CTA/error/empty-state copy 부재는 원본 §10의 checkout/service-recovery/notification copy 경계보다 넓다.

미해상은 적지 않는 것이 최소 경계 생략이다. 해당 새 domain을 제거하거나 독립 evidence를 붙여야 하며 migration-log.md 29·41행도 같은 최소 범위로 줄여야 한다.

### 2.5 source-row disposition과 실제 목적지 불일치 — E2 / E2a / E2c / F2 FAIL

- 원본 §9의 prompt wrapper는 삭제됐지만 search/billboard/card의 고유 값은 Distinctive, Foundations, Components로 이동했다. migration-log.md 28행의 disposition은 단독 “삭제”라 실제 mixed delete/move와 다르다.
- 원본 footer Tier 1 product/design-system URLs(web/references/11st/DESIGN.md 208–212행)은 portable Scope 11·13행과 provenance 67–73행에 함께 있다. migration-log.md 21행은 footer 전체를 provenance-only로 기록한다.

F2 41행의 “각 행 grep/all destinations” 주장은 이 source-row 불일치보다 강하다.

### 11st에서 확인된 통과 항목

- unitless lineHeight 1.50/2.44/1.85, input/button/card/dialog type, tokens.source reconciled가 보존됐다.
- §9 prompt wrapper 자체는 portable에서 삭제됐고 §14 네 행, generic Focus/Pressed와 focus-visible의 분리, B3 전문이 유지됐다.
- Global Search는 catalog-query-entry라는 식별된 역할로 C2를 통과한다. Deal Card/Header Inventory Dialog는 kind/map을 생략했다.
- fictional persona/biography가 없고 unattributed curve도 새로 만들지 않았다.

### 11st 재제출 조건

1. 14/400/1.50 body role에 원본 body/list/button/dialog use 결합을 복원한다.
2. 세 Principles 전체 앞에 완전 B2a를 붙이고 provenance derived inventory, migration-log F1, audit 기록을 실제 class와 맞춘다.
3. Billboard Control의 loading/error/success 세 필드를 생략하거나 exact label/action/request/outcome evidence를 추가한다.
4. dark-surface, support copy, 새 storefront CTA/error/empty-state copy negative를 제거하거나 독립 evidence를 붙인다.
5. §9을 mixed delete/move로, footer URL을 Scope+provenance dual로 source-row별 교정하고 F2를 다시 쓴다.
6. 두 기계 검사를 다시 통과시킨 뒤 같은 sol에 위 다섯 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 3. 17live — FAIL

### 3.1 §11 고유 서사값 손실 — A1 / E2 / E2c / F2 FAIL

원본 web/references/17live/DESIGN.md 361·365행의 다음 값·관계가 portable DESIGN.md 15–17행과 provenance에서 사라졌다.

- Jeffrey Huang의 “musician-entrepreneur”
- Joseph Phua의 “co-founder of Paktor”
- “headquartered across Japan, Taiwan, and beyond”
- “ranking among the largest live-broadcasting platforms”
- “17”이 going-live shorthand가 됐다는 관계

migration-log.md 33행은 §11을 Scope로 옮겼다고만 쓰고 삭제+사유가 없으며, 44행은 Wikipedia facts가 portable에 있다는 범위를 실제보다 넓게 적는다.

### 3.2 Motion/Components 편집 판단의 인접 한정 누락 — B2 / B2a / E1 / E2c / F1 FAIL

- DESIGN.md 182–188행 easing 표의 “quiet and platform-native”, “Reaction layer ONLY”는 source-stated name/use를 넘어 motion character/application을 말하지만 해당 표에 인접한 완전 B2a가 없다. 163·175행의 다른 블록 한정은 이 표-cell 판단을 대신하지 않는다.
- DESIGN.md 262행의 “representative reconstruction pixels; exact internal design-token names may differ”도 evidence/application 판단이지만 인접 완전 한정이 없다.

audit-log.md 43–57·95–97행과 migration-log.md 43행의 F1 inventory가 두 위치를 놓쳤다.

### 3.3 capture absence와 외부 treatment를 이유로 상태를 N/A 처리 — C1 / C2 / E2c FAIL

- Follow DESIGN.md 311–313행은 loading/error를 “not documented”라서 N/A로 닫고, 원본 §14의 Follow success(web/references/17live/DESIGN.md 402행; portable capture 257행)를 “button paint가 아님”이라는 이유로 success N/A로 뒤집는다.
- Gift DESIGN.md 359–360행은 원본의 exact insufficient-coins error와 gift-sent success(원본 401·403행; portable capture 256·258행)를 prompt/animation이 button 밖이라는 이유로 N/A 처리한다.
- Secondary는 원본의 mixed “Secondary actions, Maybe later” 역할(45·177행)을 dismiss 하나로 좁혀 DESIGN.md 337–339행의 세 상태를 모두 닫는다.
- Chat error DESIGN.md 407행도 “not documented”를 N/A 사유로 쓴다.

Applicability는 paint 위치가 아니라 exact component role의 의미를 따른다. migration-log.md 36행, provenance.md 117행, audit-log.md 9·95행의 C1/C2 준수 주장도 수정해야 한다.

### 3.4 근거 없는 Kind: non-interactive — C4 / E2c FAIL

원본 LIVE Badge, Rank Badge, Avatar는 type/use/geometry만 기록한다(web/references/17live/DESIGN.md 51–53, 219–236행). Explicit interaction-kind evidence는 없다.

portable은 DESIGN.md 264, 434, 446, 456행에서 세 항목을 descriptive/non-interactive로 확정한다. C4에 따라 kind와 map을 모두 생략해야 한다. migration-log.md 24·36행, provenance.md 113행, audit-log.md 9·95행도 같은 과대 준수를 고정한다.

### 3.5 원본 밖 font/native negative coverage — D1 / E1 / E2c FAIL

원본은 inferred locale stack, no custom display typeface, live inspect 미완료를 기록한다(web/references/17live/DESIGN.md 117–125, 441–457행). 이관본은 별도 근거 없이 다음 domain을 신설한다.

- DESIGN.md 204행: no type specimen / official product font token
- DESIGN.md 207행: no exclusive distributed family
- DESIGN.md 209·575행: native-app metrics outside scope
- DESIGN.md 572행: exclusive loadable webfont gap

독립 evidence가 없다면 이 행/field만 생략하고 원본의 inferred-stack/no-custom-face/live-inspect 경계는 유지해야 한다.

### 17live에서 확인된 통과 항목

- primitive types와 핵심 값, §9-only 15px/28px 값, §14 11행, B3 전문이 유지됐다.
- generic Focus는 focus-visible treatment로 승격되지 않았고 state coverage 완료 주장도 없다.
- Primary/Default Input mixed L/E/S는 생략됐고 Stream/Profile cards는 kind/map을 생략했다.
- fictional Sakura/A-Zhe/Kevin biography는 portable/provenance에 재수록되지 않았다. 세 unattributed cubic-bezier는 provenance omission ledger에만 있다.

### 17live 재제출 조건

1. 누락된 §11 고유 facts/relations를 원 출처와 권위 한정 아래 Scope에 복원하고 필요 시 provenance dual을 맞춘다. §11/F2 disposition도 갱신한다.
2. easing 표와 representative-pixels 판단 각각에 인접 완전 B2a를 붙이고 derived inventory/F1 기록을 동기화한다.
3. Follow success와 Gift error/success를 exact role 결과로 반영한다. 미근거 Follow loading/error, Chat error, mixed Secondary의 세 필드는 exact behavior가 없으면 생략한다.
4. LIVE Badge, Rank Badge, Avatar의 Kind를 생략하고 maps 생략은 유지한다. 또는 explicit kind evidence를 추가한다.
5. 새 font/license/native coverage를 제거하거나 독립 evidence를 붙이고 body/provenance/log의 과대 준수 문장을 맞춘다.
6. 두 기계 검사를 다시 통과시킨 뒤 같은 sol에 위 다섯 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 4. 3o3 — FAIL

### 4.1 원본 밖 negative coverage와 거짓 “옮김” disposition — D1 / E2 / E2c / F2 FAIL

원본 typography는 first-party Poppins/Pretendard split과 Noto funnel exception을 기록한다(web/references/3o3/DESIGN.md 120–124행). Footer/comment도 FontFace, reproduction kit, logo-file gap, microcopy-guide gap을 주장하지 않는다.

그런데 portable은 다음 새 negative claims를 만든다.

- DESIGN.md 192행: “No FontFace URL table”
- DESIGN.md 195행: loadable third-party reproduction kit 부재
- DESIGN.md 543–544행: FontFace/source-URL corroboration과 first-party logo mark file gap
- DESIGN.md 548행: complete product-microcopy guide 부재

migration-log.md 13행은 source YAML logo에 없던 “logo 공백 문구”를 Named gaps로 “옮김”이라고 쓰고, 17행은 새 D1 coverage가 없다고 주장한다. provenance.md 24·130행도 invented gap을 disposition처럼 기록한다.

### 4.2 핵심 Brand Narrative 관계 손실 — A1 / E2 / F2 FAIL

원본 web/references/3o3/DESIGN.md 369행은 product-origin/problem thesis를 다음처럼 기록한다: gig workers, freelancers, platform laborers가 accountant를 전제한 환급 절차 때문에 과납 세금을 찾지 못했고, 3o3이 그 recovery를 consumer app으로 바꿨다.

portable Scope DESIGN.md 19–21행은 founding/Jarvis/3.3%/launch/metrics는 보존하지만 이 핵심 문제-해결 관계를 남기지 않는다. migration-log.md 29행은 §11을 Scope/provenance로 옮겼다고만 적고 삭제+사유가 없다.

### 4.3 사업자등록번호의 source-row를 오기 — E2 / E2c / F2 FAIL

158-86-00171은 원본 §11 본문이 아니라 HTML evidence comment(web/references/3o3/DESIGN.md 434행)에만 있다. 실제 이관 목적지는 Compliance Footnote DESIGN.md 445행과 provenance 70·85·138행이다.

migration-log.md 29행은 이 값을 §11 source row에 넣고, HTML comment row 34행은 exact dual destination을 닫지 않는다. F2 39행은 grep hit만 확인해 source-row provenance를 놓쳤고 audit-log.md 88·92·96행도 완료 처리했다.

### 3o3에서 확인된 통과 항목

- unitless ratios 1.50/1.00/1.40/1.22/1.60, button×5/badge/card×2/listItem types, metadata와 component field roles가 보존됐다.
- §9 48px floor, §14 11행, B1, B3 전문, unattributed curve omission ledger가 유지됐다.
- 다섯 buttons의 L/E/S는 exact mapping 미해상으로 생략됐고 Chip/Card/Band/Footnote는 kind/map을 생략했다.
- 현존 editorial sentences의 B2a, evidence-class 분리, fictional persona 삭제는 통과했다.

### 3o3 재제출 조건

1. FontFace/reproduction-kit/first-party-logo-file/microcopy-guide negative claims를 삭제하거나 독립 evidence를 추가한다.
2. migration-log logo row의 “공백 문구 옮김”을 제거하고 실제 생성·삭제 사유를 기록한다. D1 준수/F2 주장도 body 수준으로 낮춘다.
3. 누락된 product-origin/problem thesis를 정확한 evidence class와 인접 B2a 아래 Scope에 복원하고 §11 disposition을 맞춘다.
4. 158-86-00171을 HTML evidence-comment source row의 “Compliance Footnote + provenance” dual destination으로 기록하고 §11 row의 오귀속을 제거한다.
5. 두 기계 검사를 다시 통과시킨 뒤 같은 sol에 위 네 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 5. 42dot — FAIL

### 5.1 blog violet 관측 손실과 claim ledger evidence 승격 — A1 / E1 / E2 / E2c FAIL

원본 §2는 homepage active pills #786efa 16회를 기록하고(web/references/42dot/DESIGN.md 74행), live-inspect comment는 blog active pills #786efa ×16을 별도로 기록한다(368–370행). portable DESIGN.md 90행은 homepage 16회만 남기고, provenance claim ledger 84·88행도 tokens.colors.primary를 home에만 매핑한다.

두 surface 관측을 모두 분리해 보존해야 한다. 불일치로 판단한다면 한쪽을 고르지 말고 conflict로 남겨야 한다.

또 provenance.md 84·97행은 tokens.typography.family.sans / kr을 하나의 home live-inspect anchor로 묶는다. 원본과 portable DESIGN.md 174행은 Noto Sans KR을 declared fallback으로 분류한다. AstaSans live use와 Noto declared-only evidence를 분리하거나 unsupported per-claim mapping을 제거해야 한다.

### 5.2 원본 밖 font/license/reproduction coverage — A1 / D1 / E1 / E2c FAIL

원본 typography는 AstaSans live use와 Noto fallback만 기록한다(web/references/42dot/DESIGN.md 30–37, 92–106, 362–370행). 다음 portable claims에는 독립 근거가 없다.

- DESIGN.md 173행: no 42dot-exclusive public redistribution right
- DESIGN.md 175·182행: loadable third-party reproduction과 “officially known but unavailable” 적용
- DESIGN.md 438행: loadable AstaSans third-party reproduction gap

provenance.md 150행과 migration-log.md 24행도 이를 정상 disposition으로 고정한다. 해당 domain을 삭제하거나 exact official evidence를 추가해야 한다.

### 5.3 source 밖 viewport/capture negative — A1 / D1 / E2c FAIL

원본은 Responsive 표와 “playwright getComputedStyle on 2 surfaces”만 말한다(web/references/42dot/DESIGN.md 228–248, 362–370행). Inspect viewport는 기록하지 않는다.

portable DESIGN.md 343행은 이를 “desktop getComputedStyle”과 “not newly measured mobile pass”로 바꾸고, 351·371행에서 mobile/cross-viewport 부정을 반복한다. migration-log.md 31·44행, provenance.md 152행, audit-log.md 35·60행도 이를 준수 site로 기록한다. 원본 breakpoint/measurement 행은 유지하되 새 desktop/mobile/cross-viewport 판정은 제거하거나 exact evidence를 붙여야 한다.

### 5.4 Nav Item을 unsupported destination behavior로 닫음 — C2 / E2c FAIL

원본은 Nav Item을 type tab, dark-hero top nav, active/dimmed appearance로 기록하고(web/references/42dot/DESIGN.md 47, 145–155행), 별도 dropdown이 “a top-nav item” 아래 열린다고만 한다. Exact label, selector, destination인지 dropdown trigger인지가 해상되지 않았다.

portable DESIGN.md 308–310행은 “selects a destination”/selection으로 단정해 loading/error/success를 모두 not-applicable로 닫는다. migration-log.md 37·44–45행의 C2/F2 준수 주장도 과하다. Exact behavior를 확보해 역할을 분리하거나 세 필드를 생략해야 한다.

### 5.5 source-row별 실제 목적지 불일치 — E2 / E2a / E2c / F2 FAIL

대표적인 누락·오기:

| source row | 실제 목적지 | 로그 문제 |
|---|---|---|
| §3 family/fallback | Typography + Avoid 79행 | migration-log.md 24행이 Avoid 누락 |
| §15 no-bounce | Motion 148행 + Avoid 80행 | log 30행이 §7 Don’ts로 오귀속, §15 row 38행은 Avoid 누락 |
| §1/§4/§5 hero·card·filter evidence | Primary tasks 25–27행 | log 22·25·27행에 Primary tasks 누락 |
| YAML token note | Scope/Distinctive/Foundations/Typography + provenance | provenance 29행과 log 18행이 Typography 등 실제 목적지 누락 |
| shadow field | Scope/Elevation/Nav Panel + provenance claim/proof | log 19·28·45행과 audit 67·73·84행이 provenance hit 누락 |

같은 방식으로 transparent와 warm-error-tone의 provenance 저장도 portable dual만 적은 표보다 넓다(provenance.md 142·149행; migration-log.md 32·37행). Source-row 단위로 모든 실제 destination을 다시 맞춰야 한다.

### 5.6 준수 주장이 실제보다 강함 — E2c / F2 FAIL

migration-log.md 33행은 D1 신규 coverage 없음, 37행은 C2 역할 판정 준수, 45행은 F2 grep 정합을 주장한다. 위 5.1–5.5와 모순된다. 각 claim을 실제 body/disposition 수준으로 낮추고 F2 결과를 다시 써야 한다.

### 42dot에서 확인된 통과 항목

- unitless lineHeight 1.45/1.60/1.50/1.40, badge×2/card×2/tab/button type, metadata와 주요 role 분리가 보존됐다.
- §14 9행, §9 transparent, B1, 현재 body의 B2/B2a, B3 전문이 유지됐다.
- Inactive Tag Filter와 Carousel Control의 role map은 통과한다. Active Tag/Blog Card/Nav Dropdown은 kind/map을 생략했다.
- fictional persona biography는 portable/provenance에 없고 unattributed curve는 omission ledger에만 있다.

### 42dot 재제출 조건

1. homepage/blog #786efa ×16 관측을 surface별로 모두 보존하고 claim ledger를 맞춘다. AstaSans live와 Noto declared-only evidence를 분리한다.
2. font license/redistribution/third-party reproduction negative를 제거하거나 exact official evidence를 붙인다.
3. 근거 없는 desktop/mobile/cross-viewport 검증 판정을 제거하고 원본 responsive rows와 측정값은 그대로 유지한다.
4. Nav Item의 세 L/E/S 필드를 생략하거나 exact destination/dropdown-trigger behavior evidence로 역할을 분리한다.
5. fallback, no-bounce, Primary tasks, token note, shadow, transparent, warm-error-tone을 source-row별 모든 실제 destination과 맞추고 provenance/F2를 동기화한다.
6. D1/C2/F2 준수 주장을 실제 body 수준으로 낮춘다.
7. 두 기계 검사를 다시 통과시킨 뒤 같은 sol에 위 여섯 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 웨이브 판정과 다음 단계

**최종 판정: 104 FAIL / 11st FAIL / 17live FAIL / 3o3 FAIL / 42dot FAIL.**

다섯 건 모두 gate-only PASS와 portable_core true지만 v7 의미 보존·evidence class·state role·source-row disposition을 통과하지 못했다. 새 결함 계층을 만든 판정이 아니라 기존 A1/A4, B2/B2a, C1/C2/C4, D1, E1, E2/E2a/E2c, F1/F2의 반복 적용 결과다.

다음 개정은 위 건별 재제출 조건만 받는다. 동일 sol은 목록-only로 재확인하며 새 기준을 추가하지 않는다. 프로토콜에 따라 새 F3는 요구하지 않는다. 같은 sol 재확인 PASS 5/5 전에는 다음 웨이브로 진행하지 않으며, T2-1 전체 완료와 별도 최종 승인 전에는 web/references 정본을 교체하지 않는다.
