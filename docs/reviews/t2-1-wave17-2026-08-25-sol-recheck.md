# T2-1 웨이브 17 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{coinone,composio,cookpad,corca,cuboai}/`
- 선행 판정: `docs/reviews/t2-1-wave17-2026-08-25-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-25 · 검증자: sol

## 건별 판정

### coinone — FAIL (2/3)

1. **PASS — product-microcopy coverage negative 삭제.** Source-backed 규범만 남았다(`DESIGN.md:285`). Named gaps `:331-340`에는 complete guide, current exchange microcopy, synthetic sample coverage 항목이 없다. 삭제 disposition도 `provenance.md:147`, `migration-log.md:28,94-96`에 반영됐다.
2. **FAIL — audit current-class가 actual current와 동기화되지 않았다.** `audit-log.md:42,72,94`는 삭제된 Content `:297`의 complete-guide/current-exchange/synthetic negatives를 여전히 current 항목으로 기록한다. 실제 `DESIGN.md:297`은 Governance section marker다. `audit-log.md:101`의 current SHA `4f8056...`도 superseded 값이고, actual current `8e753d...`와 다르다. 따라서 선행 조건 2가 명시한 audit 대응 서술 교정이 남았다.
3. **PASS — SHA·검사 기록.** Actual/current SHA `8e753d349c567cbda9c437d4264e804081275ff082209c39fdc75fa90732ad2c`가 `migration-log.md:9,88,105`와 일치한다. 현재 파일에서 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다. 새 F3는 실행하거나 요구하지 않았다.

**coinone 판정: FAIL.** 잔여 범위는 삭제된 Content negative와 superseded SHA를 가리키는 `audit-log.md` current-class의 동기화다.

### composio — FAIL (7/8)

1. **PASS — evidence kind와 surface kind 교정.** YAML/§4 controls는 `Source-stated / prose-derived`로 돌아갔고(`DESIGN.md:291,317,340,363,386,400,412,421,440`), live overlay는 exact footer evidence-domain note에만 남는다(`DESIGN.md:274`). Home/pricing Sources kind도 marketing이다(`provenance.md:51-59`).
2. **PASS — source 관계·서사 복원.** Matching-padding Signal-Blue local relation(`DESIGN.md:303`), §8 image contrast/glow scaling(`:243`), 세 angels(`DESIGN.md:17`; `provenance.md:75`), color/type/layout causal relations(`DESIGN.md:99-104,162,211,449,455-457`)이 복원됐고 편집 해석은 인접 B2a를 가진다(`provenance.md:135-137`).
3. **PASS — primitive·Proof tuple·Navigation 결속 교정.** Phantom은 source primitive에 따라 `Type: button`을 보존한다(`DESIGN.md:354-364`). Proof CTA tuples는 control별 provenance에 분리돼 있고(`provenance.md:171-200`), footer aggregate renderable component는 evidence note로 내려갔다(`DESIGN.md:274`). Navigation container, links, white-fill CTA가 child 경계로 분리됐다(`DESIGN.md:405-442`).
4. **PASS — exact-role L/E/S 재판정.** Ghost와 Phantom은 미해상 L/E/S field를 생략한다(`DESIGN.md:343,352,366,375`). Navigation links는 destination role로 판정하고 CTA는 White-fill omission을 따른다(`DESIGN.md:415-442`).
5. **PASS — unsupported negative 삭제.** Official-typography-specification URL, exclusive family, synthetic voice negative가 portable에서 제거됐다(`DESIGN.md:191-200,477-494`; `migration-log.md:99`).
6. **PASS — adopted Proof lineage 복원.** Prior-B2 block은 `provenance.md:202-215`, prior-augmentation B2 batch는 `:234-242`, named angels는 `:232`에 canonical wording과 함께 보존됐다.
7. **FAIL — source-row/audit/F1/F2/current SHA가 actual current와 동기화되지 않았다.** `audit-log.md:9,45-49,66`은 Ghost/Phantom/Nav L/E/S를 계속 role-based `not-applicable`로 적지만 current는 Ghost/Phantom omission과 nav-child 판정이다. `migration-log.md:44,46,66-80`도 pre-resubmit 포인터를 유지한다. 예를 들어 button dest `:66`의 `282/331/355`는 current `282/309/333/358/439`와 다르고, `:80`의 Ghost/Phantom/Nav L/E/S rows는 current에 존재하지 않는 과거 범위다. `audit-log.md:116`과 `migration-log.md:89`의 SHA `a3f575...`는 actual current SHA `2a295147bcae61d1a00315096e72c427932d6c461d5bccc93c67b0e133f1b3a1`와 다르며 actual SHA는 packet에 기록되지 않았다.
8. **PASS — 현재 기계 검사.** 현재 파일에서 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다. Proof-only `39px`는 provenance에 exact 보존되고 portable aggregate에서 내려갔다(`provenance.md:173,177`; `migration-log.md:104`). 새 F3는 실행하거나 요구하지 않았다.

**composio 판정: FAIL.** 잔여 범위는 선행 조건 7의 current-class/F1/F2/pointer/SHA 동기화다.

### cookpad — FAIL (4/6)

1. **PASS — §11 founder narrative 복원.** Keio neural computing, local-farmer produce work, home-cooking decline→food-connection erosion→technology motivation, free conversion 뒤 pre-social-network community 관계가 인접 완전 B2a와 함께 복원됐다(`DESIGN.md:15`; `provenance.md:71,128`).
2. **PASS — Recipe Card child binding 복원.** Meta child `#4A4A4A`가 anatomy/field에 component-local로 결속됐다(`DESIGN.md:329-339`). §9 prompt wrapper는 복원되지 않았다(`migration-log.md:26,90`).
3. **FAIL — observed 표현이 packet에서 완전히 제거되지 않았다.** Portable과 provenance는 Category press와 Search Focus를 INFERRED/illustrative named-source-state로 교정했다(`DESIGN.md:219,325,363,375`; `provenance.md:139`). 그러나 `migration-log.md:21`은 Focus를 여전히 “additional named observed state”로 기록해 같은 파일의 재제출 기록 `:91`과 모순된다.
4. **PASS — asset ownership/replacement 발명 삭제.** Assets는 source-stated photo-forward primary-content role만 유지하고 ownership 또는 replacement prohibition을 주장하지 않는다(`DESIGN.md:193`; `migration-log.md:92`).
5. **PASS — locale negative 삭제.** Japanese です・ます調와 source-marked samples만 남았고(`DESIGN.md:418-440`), Named gaps `:472-486`에는 locale-profile negative가 없다.
6. **FAIL — affected current-class/F1/F2/SHA가 actual current와 동기화되지 않았다.** `audit-log.md:49`는 삭제된 `not-a-complete-locale-profile`을 current classification으로 유지한다. `migration-log.md:41,47-79`도 pre-resubmit pointer를 사용한다. 예를 들어 Recipe/Promoted/Search B2a `338/348/362`는 actual `339/349/363`, Search `Type` `354`는 actual `355`, Search omission `372`는 actual `373`이다. `audit-log.md:110`과 `migration-log.md:83`의 SHA `e7ee909...`는 actual current SHA `31a151505a0d676e9f0398e4ce4e78e96677f350aa507c02a360c24006df575b`와 다르며 actual SHA는 packet에 기록되지 않았다. 현재 gate/Core는 통과했지만 이 원장·SHA 조건은 남았다. 새 F3는 실행하거나 요구하지 않았다.

**cookpad 판정: FAIL.** 잔여 범위는 observed-state 서술 제거와 affected current-class/F1/F2/pointer/SHA 동기화다.

### corca — FAIL (3/4)

1. **PASS — visual/type causal relation 복원.** Young lab→credible/playful와 optimistic multi-hue→not-grey는 `DESIGN.md:13`, navy warmth→human과 15–17px→comfortable dense Hangul은 `:199`에 인접 완전 B2a로 복원됐다(`provenance.md:229,242`).
2. **PASS — Baby Unicorn designation 의미 복원.** 2024 아기유니콘은 Korean government-backed high-potential-startup designation으로 portable narrative와 provenance에 남는다(`DESIGN.md:15`; `provenance.md:80`).
3. **PASS — White Feature Card child tuples 복원.** Heading 32px display webfont/`#1a2352`, Body 16px Pretendard/`#324158`가 component-local로 결속됐다(`DESIGN.md:319,323-324`). §9 prompt wrapper는 복원되지 않았고 disposition도 실제 목적지를 기록한다(`migration-log.md:29,112`).
4. **FAIL — provenance/migration/audit current-class·F2·SHA가 actual current와 동기화되지 않았다.** `audit-log.md:16,77`은 optimistic multi-hue를 trim했다고 계속 기록해 current `DESIGN.md:13`과 반대다. 같은 audit의 포인터와 SHA도 pre-resubmit 상태이며(`audit-log.md:38-42,89-100`), `migration-log.md:104`의 SHA `4483983...`도 actual current SHA `eed43b5b5143884bba35562216717631b9c67fd90a9c715795cf71019ccaf067`와 다르다. `migration-log.md:113`은 SHA/gate/Core 기록을 선언하지만 actual SHA를 기록하지 않았다. 현재 gate-only와 portable Core는 통과했다. 새 F3는 실행하거나 요구하지 않았다.

**corca 판정: FAIL.** 잔여 범위는 선행 조건 4의 current-class/F2/pointer/SHA 동기화다.

### cuboai — FAIL (5/7)

1. **PASS — footer operation metadata 복원.** `omd:add-reference CREATE`가 provenance freshness와 source-row correction에 복원됐다(`provenance.md:29,39`; `migration-log.md:106`).
2. **PASS — non-adopted sidecar 경계 교정.** Sidecar는 존재하지만 canonical/current packet이 path/SHA로 채택하지 않았고 내용은 편입하지 않았다고 기록한다(`provenance.md:123`; `migration-log.md:107`).
3. **PASS — §11·Motion 관계 복원.** Taiwan HQ, award-winning hardware, legacy problem→proactive AI, soft industrial design, emotional thesis/founding premise 분리, support-not-police, trust-at-scale/reassuring-not-boastful은 `DESIGN.md:15`, no-surveillance-grid는 `:17`, steadiness/reassurance-not-playful-surprise는 Motion `:156`에 canonical 역할과 인접 B2a로 복원됐다(`provenance.md:93,144`).
4. **PASS — 근거 없는 per-surface binding 제거.** Provenance는 grouped inspect와 per-claim anchor 부재를 명시하고 portable `Surface` fields를 생략한다(`provenance.md:79`; `migration-log.md:109`). Current portable에 component `Surface` field가 없다.
5. **PASS — Compact Add·Region Selector 재판정.** Compact Add loading/error/success는 add-to-cart/quantity role에 따라 applicable이고 paint만 생략한다(`DESIGN.md:255-280`). Region Selector Row는 `Kind: interactive`, `Type: listItem`, selector role map을 가진다(`DESIGN.md:381-406`).
6. **FAIL — provenance/migration/audit current-class와 F2가 actual disposition에 동기화되지 않았다.** `migration-log.md:33,44`와 `audit-log.md:9,37,40,85`는 Compact Add L/E/S omission과 Region/listItem kind/map omission을 계속 current처럼 기록해 actual `DESIGN.md:278-280,384,396-406`과 충돌한다. `migration-log.md:71`의 source-prose destinations도 `DESIGN 252/352 + provenance 145`로 남아 actual `DESIGN 251/351 + provenance 126`과 다르다.
7. **FAIL — current SHA 기록이 없다.** `migration-log.md:100`과 `audit-log.md:83,87`의 SHA `c2760a...`는 actual current SHA `fa2a1cc3638b507036dfab77792ae445992d80a8d10cefd6dcd34254bf2a6901`와 다르다. `migration-log.md:112`는 SHA/gate/Core 기록을 선언하지만 actual SHA를 적지 않았다. 현재 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다. 새 F3는 실행하거나 요구하지 않았다.

**cuboai 판정: FAIL.** 잔여 범위는 선행 조건 6-7의 current-class/F2/pointer/SHA 동기화다.

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | actual DESIGN SHA-256 |
|---|---|---|---|
| coinone | PASS, problems `[]` | exit 0, `portable_core: true` | `8e753d349c567cbda9c437d4264e804081275ff082209c39fdc75fa90732ad2c` |
| composio | PASS, problems `[]` | exit 0, `portable_core: true` | `2a295147bcae61d1a00315096e72c427932d6c461d5bccc93c67b0e133f1b3a1` |
| cookpad | PASS, problems `[]` | exit 0, `portable_core: true` | `31a151505a0d676e9f0398e4ce4e78e96677f350aa507c02a360c24006df575b` |
| corca | PASS, problems `[]` | exit 0, `portable_core: true` | `eed43b5b5143884bba35562216717631b9c67fd90a9c715795cf71019ccaf067` |
| cuboai | PASS, problems `[]` | exit 0, `portable_core: true` | `fa2a1cc3638b507036dfab77792ae445992d80a8d10cefd6dcd34254bf2a6901` |

**전체: FAIL — coinone FAIL / composio FAIL / cookpad FAIL / corca FAIL / cuboai FAIL (PASS 0/5, 선행 재제출 조건 21/28, 새 기준·새 F3 없음).**
