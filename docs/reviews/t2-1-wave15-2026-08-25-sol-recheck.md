# T2-1 웨이브 15 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{class101,classting,classum,claude}/`
- 선행 판정: `docs/reviews/t2-1-wave15-2026-08-25-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-25 · 검증자: sol

## 건별 판정

### class101 — PASS (4/4)

1. **PASS — first-party mark-file 부재 문장 삭제.** Portable Assets에는 Google favicon lookup/non-promotion 경계만 남았고, first-party mark-file 부재와 ownership-unclaimed 주장은 삭제됐다(`DESIGN.md:151`; `provenance.md:28`; `audit-log.md:64,80`).
2. **PASS — 허용된 favicon 경계 유지.** Canonical의 Google favicon metadata를 catalog lookup으로만 보존하며, portable mark 또는 ownership evidence로 승격하지 않고 first-party file 존재 여부도 주장하지 않는다(`provenance.md:28`; `DESIGN.md:151`).
3. **PASS — current 원장/F2/SHA 동기화.** provenance, migration, audit current-class와 F2가 개정 disposition을 반영하고 과거 부정 claim은 supersede됐다(`provenance.md:28,178`; `migration-log.md:14,50-61,103-112`; `audit-log.md:9,35,64,80,86`). Current SHA `f62a7e23c1a3d7baa33ed730f311e4456065412ad787091bebc7c75297a555ac`가 실제 파일과 일치한다(`migration-log.md:112`).
4. **PASS — 두 기계 검사.** 현재 파일에서 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다. 기존 fresh F3 증거는 역사 기록으로 유지했고 새 F3는 실행하지 않았다(`migration-log.md:110-112`; `audit-log.md:92-94`).

**class101 판정: PASS.**

### classting — PASS (8/8)

1. **PASS — Proof와 prose-derived claim 분리.** Claim ledger가 exact Proof samples와 prose-derived/body reconstruction을 별도 행으로 나누고, Proof가 없는 field는 live-home sample이 아니라고 명시한다(`provenance.md:72-93`). Portable도 selector-bound Proof가 있는 Green CTA·card·mint tag만 해당 selector를 결속하고, black/orange/outline/banner 계열은 source/body/YAML field이며 Proof live-home sample이 아님을 분리한다(`DESIGN.md:248,253,273,278,297,302,322,327,345,357,382`).
2. **PASS — CT guideline evidence class.** CT Corp. guideline은 parent-corporate brand context이며 Classting product-use font evidence가 아니라고 분류됐다(`DESIGN.md:169,173-174`; `provenance.md:61`; `migration-log.md:18,20`).
3. **PASS — Orange CTA primitive 미발명.** Orange CTA에는 `Type: button`이 없고, CTA semantic은 interactive kind만 지지하며 primitive type은 unresolved로 남는다(`DESIGN.md:285-307`, 특히 `:296`; `migration-log.md:16,21`; `audit-log.md:39`).
4. **PASS — §9 및 §1/§11 관계 복원.** self-directed-learning context가 Distinctive·Avoid·Semantic에 복원됐고(`DESIGN.md:43,70,77,90`), cold/corporate·approachability·display/body comprehension·data visibility 관계와 founder problem→communication, communication→intelligence, mission→infrastructure, student mastery 관계가 인접 완전 B2a와 함께 Scope에 복원됐다(`DESIGN.md:13,15,17`; `provenance.md:70,140-142`; `migration-log.md:24,28`).
5. **PASS — linked Proof literal과 regional metadata 복원.** CT parent-logo gradient `#6EC090` → `#2B5CAA`, homepage `lang="ko"`, Webflow site-id, exact naver-site-verification hash가 provenance-only Proof에 보존됐고 portable token으로 승격되지 않았다(`provenance.md:87,101-127`; `migration-log.md:18,113`).
6. **PASS — first-party mark-file 부정 축소.** Portable과 provenance는 Google favicon lookup/not-captured/not-portable 경계만 유지하고 first-party mark-file 존재 여부는 주장하지 않으며 Named gaps에도 해당 부정 행이 없다(`DESIGN.md:211,446-457`; `provenance.md:23`; `migration-log.md:14,114`; `audit-log.md:9,35`).
7. **PASS — 세 source-row disposition 분리.** Empty-state label은 Capture `220`과 Content `412`, Noto Sans HK는 Distinctive `44`·Family `181/183`·Content `414`에 모두 기록됐다. Proof `.button` padding은 provenance `86/115`, body §4 Outline padding은 portable `319/322`로 별도 source row를 유지한다(`migration-log.md:18,21,26-27,115`; `audit-log.md:101`).
8. **PASS — current 원장/audit/F2/SHA/검사.** 개정 current-class와 supersession이 provenance·migration·audit에 동기화됐고(`provenance.md:135-178`; `migration-log.md:105-118`; `audit-log.md:9,35,39,101`), current SHA `c93c25b8c6171e6b7e42713009e95b8a641f5818f554dec225e3a384b8c90f7e`가 실제 파일과 일치한다(`migration-log.md:118`). 현재 파일에서 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다. Canonical Proof는 유지됐고 새 F3는 실행하지 않았다.

**classting 판정: PASS.**

### classum — PASS (5/5)

1. **PASS — Large CTA L/E/S 최소 경계 생략.** Large CTA 상태표에는 default/hover/focus-visible/disabled만 있고, exact destination/request/outcome이 미해상이라 loading/error/success 세 applicability field를 생략한다(`DESIGN.md:289-296`; `provenance.md:158`; `migration-log.md:21`; `audit-log.md:30`).
2. **PASS — capture absence와 applicability 분리.** §14 capture record는 별도 보존되고, capture absence는 `not-applicable` 사유가 아니며 Large CTA의 L/E/S는 §14 absence에서 닫지 않았다고 명시한다(`DESIGN.md:166-181,296`; `provenance.md:158`; `migration-log.md:31`).
3. **PASS — 확장 font/logo negative 삭제.** Canonical의 authenticated product/documentation family capture 경계만 유지한다. Classum-exclusive family 및 first-party mark-file 부정과 대응 Named gaps는 삭제됐고 Google favicon은 lookup/non-promotion 경계만 남았다(`DESIGN.md:128-137,157,366-376`; `provenance.md:25`; `migration-log.md:85`; `audit-log.md:9,28`).
4. **PASS — freshness/current 원장/F2/SHA 동기화.** Freshness pointer가 실제 `provenance.md:35,36,39,40`을 가리키고(`migration-log.md:15`), affected F2와 audit current-class가 개정 disposition을 반영한다(`migration-log.md:53,63,65,80-90`; `audit-log.md:96-98`). Current SHA `25616be02cf9cf05bb041d3c15acf193b5439f783f55dbc36d597aeeba637d16`가 실제 파일과 일치한다(`migration-log.md:90`).
5. **PASS — 두 기계 검사.** 현재 파일에서 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다(`migration-log.md:88-90`). 기존 fresh F3의 `471e…` SHA는 명시된 Post-F3 역사 증거이며 current SHA 주장이 아니다(`audit-log.md:103-105`). 새 F3는 실행하지 않았다.

**classum 판정: PASS.**

### claude — PASS (6/6)

1. **PASS — `#faf9f5` Proof 복원.** 값은 selector/route-bound provenance-only observation으로 exact 복원됐고 `#f5f4ed` canvas와 합쳐지거나 portable/global token으로 승격되지 않았다(`provenance.md:78,164,177`; `migration-log.md:33,90`).
2. **PASS — §11 product/category 관계 복원.** Product/category와 marketing/authenticated-product 관계가 인접 완전 B2a와 함께 portable Scope에 복원됐다(`DESIGN.md:17`; `provenance.md:112,172`; `migration-log.md:28,91`).
3. **PASS — Audience 발명 삭제.** Portable Audience에는 official stakeholder groups만 남고 source-absent field list와 product-brief requirement가 삭제됐다(`DESIGN.md:30-34`; `provenance.md:168`; `migration-log.md:30,92`).
4. **PASS — homepage exact role 분리.** `https://claude.com`은 Scope `9`의 exact homepage identity이고 longer captured route prefixes는 Scope `11`의 별도 surface 범위로 기록됐다(`DESIGN.md:9,11`; `provenance.md:26,71`; `migration-log.md:59,93`).
5. **PASS — schema 다중 목적지와 raw lineage.** `verification_v2.schema: 2`의 Identity `20`, Claim ledger `121`, Proof notes `176` 목적지가 모두 기록됐고, canonical footer/raw artifact/sidecar lineage도 provenance와 migration에 보존됐다(`provenance.md:20,82,84,121,176,180-181`; `migration-log.md:33,94`).
6. **PASS — current 원장/audit/F2/SHA/검사.** Wave15 revision이 current disposition과 current SHA를 기록하고 이전 F3 SHA는 날짜가 고정된 역사 증거로 유지한다(`migration-log.md:86-97`; `audit-log.md:3,5,105`). Current SHA `37a5dbc275c0ad90741b1799b3dd175c7463e1f06abffb9f456dbe9fae31836b`가 실제 파일과 일치한다(`migration-log.md:97`). 현재 파일에서 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했고 새 F3는 실행하지 않았다.

**claude 판정: PASS.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| class101 | PASS, problems `[]` | exit 0, `portable_core: true` | `f62a7e23c1a3d7baa33ed730f311e4456065412ad787091bebc7c75297a555ac` |
| classting | PASS, problems `[]` | exit 0, `portable_core: true` | `c93c25b8c6171e6b7e42713009e95b8a641f5818f554dec225e3a384b8c90f7e` |
| classum | PASS, problems `[]` | exit 0, `portable_core: true` | `25616be02cf9cf05bb041d3c15acf193b5439f783f55dbc36d597aeeba637d16` |
| claude | PASS, problems `[]` | exit 0, `portable_core: true` | `37a5dbc275c0ad90741b1799b3dd175c7463e1f06abffb9f456dbe9fae31836b` |

**전체: PASS — class101 PASS / classting PASS / classum PASS / claude PASS (대상 4/4, 선행 재제출 조건 23/23, 새 기준·새 F3 없음).**
