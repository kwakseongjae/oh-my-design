# T2-1 웨이브 11 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{bbc,beusable,bigin,bithumb,bito}/`
- 선행 판정: `docs/reviews/t2-1-wave11-2026-08-24-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### bbc — PASS (5/5)

1. **PASS — §9 Surface Content local tuple.** Full-width `#f6f6f6` parent와 inside heading `20px / 700 / #202224`가 Surface Content의 local field/Use recipe로 복원됐고 전역 `heading-md`/GEL H1로 승격되지 않았다(`DESIGN.md:458-463`; `migration-log.md:22-23,30`).
2. **PASS — Reith 관계.** Matched pair에 optical sizing, open letterforms, device·vision-ability legibility 관계가 기존 narrative authority 아래 복원됐다(`DESIGN.md:17`; `migration-log.md:19,21`).
3. **PASS — font evidence class와 unsupported negatives.** 현재 분류는 home/news getComputedStyle + GEL curl + CDN corroboration이며 FontFaceSet 승격이 아니다. Universal-sheet 및 cross-product typography negatives도 현 본문에서 제거됐다(`DESIGN.md:202,206-210`; `provenance.md:78,150`; `audit-log.md:33,88,118`).
4. **PASS — asset authority.** Editorial photography/programme stills를 first-party content로 분류한 주장은 제거됐고, ownership을 주장하지 않는 reconstruction boundary만 남았다(`DESIGN.md:249`; `provenance.md:119,156`; `audit-log.md:38,118`).
5. **PASS — 원장·검사 동기화.** §1/§3/§9 disposition, 구 current-class/F1/F2 및 post-F3 SHA가 supersede됐고 현재 SHA `7bb424c7ec1da36845b7501e6196f7752e89d2c6144bc8d29ff917476ab220c9`가 원장과 일치한다(`migration-log.md:19,21,30,44-63,96`; `audit-log.md:116-118`). Gate/Core도 통과했다.

**bbc 판정: PASS.**

### beusable — PASS (6/6)

1. **PASS — RGB tuple 교정.** Provenance가 `rgb(236,0,71)`과 `rgb(246,225,54)`를 정확히 기록하고, 종전 invented tuple 및 “not dual/별도 값” 주장을 supersede했다(`provenance.md:61-62,66,88`; `migration-log.md:62,75,88-89`).
2. **PASS — Observed/derived 분리.** `왜인지 알아보기`와 `직접 물어보기`는 Observed에서 빠지고 derived voice에만 남았다(`DESIGN.md:510-517,523-525,532`; `provenance.md:79`).
3. **PASS — fictional-persona segment 제거.** Audience와 provenance에는 generic deletion boundary만 남고 세 persona-derived segment label은 재수록되지 않았다(`DESIGN.md:36-38`; `provenance.md:121-123,143`).
4. **PASS — Primary-task authority 축소.** Inspected UX Heatmap URL만 independently verified로 한정했고, Get Started와 named feature labels는 harvested strings/controls로 낮췄다(`DESIGN.md:29-33`; `provenance.md:123,142`).
5. **PASS — §9·§11 관계 복원.** White light-page nav의 14px/500 links, active rose, right-aligned 21px Get Started pill이 local composition으로 복원됐고, heatmaps/journey maps/funnels/session analysis가 hesitate/scroll/click/drop-off를 보게 한다는 관계도 복원됐다(`DESIGN.md:21,257-258,432-433`; `provenance.md:77,115`).
6. **PASS — 원장·검사 동기화.** 영향받은 source-row/current claim이 supersede됐고 현재 SHA `a323c0063d58dfdfc04d77ed549068032b23d63ec00e7c3bf3f90b7b9497e645`가 원장과 일치한다(`migration-log.md:67,69-80,114`; `audit-log.md:134-136`). Gate/Core도 통과했다.

**beusable 판정: PASS.**

### bigin — PASS (6/6)

1. **PASS — §9 local constructions.** White Feature Card child tuple, Tinted Section child tuple, white top-nav의 right-aligned blue CTA 관계가 각 receiving component/local recipe에 복원됐다(`DESIGN.md:369,385,441`).
2. **PASS — Navigation parent/child 분리.** `#ffffff`은 Header / Navigation band parent Background에 있고 Nav Link child에는 Background field가 없다(`DESIGN.md:432-441,445-470`, 특히 `:436,458`).
3. **PASS — verification Proof 연결.** 실제 `.verification.md`의 heading, method, 세 surface가 provenance에 연결됐고 종전 부재 주장은 supersede됐다(`provenance.md:66-71,147`).
4. **PASS — fictional segment 제거.** Portable Audience와 provenance는 generic deletion disposition만 유지하며 세 persona-derived segment label은 재수록하지 않는다(`DESIGN.md:36-38`; `provenance.md:156`).
5. **PASS — B2a 인접화.** Distinctive limiter는 bullets 직전, state characterization limiter는 table 직전, signature-motion limiter는 list 직전에 배치됐다(`DESIGN.md:42-51,166-173,231-243`).
6. **PASS — 원장·검사 동기화.** §9/Proof/D2/F1/F2의 과거 current claim과 구 SHA가 supersede됐고 현재 SHA `cff360f291eb360e45ef92fcfb8f3054c003f41b2e76688623bf832c92eaf5f7`가 일치한다(`migration-log.md:37,41,45,49,51-78`; `audit-log.md:126-141`). Gate/Core도 통과했다.

**bigin 판정: PASS.**

### bithumb — PASS (4/4)

1. **PASS — verification Proof 연결.** 실제 sidecar의 Proof heading, getComputedStyle/raw-source method, 네 Tier 1 source와 raw samples가 provenance에 연결됐고 종전 부재 claim은 supersede됐다(`provenance.md:61,72-95`).
2. **PASS — unsupported negatives 삭제.** Cross-surface values-unattached, official-history URL absence, type-spec/FontFaceSet/distributed-file negatives가 현 본문에서 제거됐으며 Bithumb Trading Sans의 proprietary/brand-owned/rebrand-signature 긍정 사실은 유지됐다(`DESIGN.md:11,17,136-142`; `provenance.md:70,106,115`).
3. **PASS — B2a 인접화.** Distinctive complete limiter가 bullets 직전에, state-characterization limiter가 table 직전에 있다(`DESIGN.md:36-48,179-188`).
4. **PASS — 원장·검사 동기화.** D1/B2a/Proof/F1/F2의 과거 current claim과 구 SHA가 supersede됐고 현재 SHA `7828fca1af6a9395bfaf1c28c9f8cb6efee86e8ff50901d440efc692a48f69ad`가 일치한다(`migration-log.md:41,45,49,51-89`; `audit-log.md:107,113-124`). Gate/Core도 통과했다.

**bithumb 판정: PASS.**

### bito — FAIL (4/6)

1. **PASS — §9 contact-footer tuple.** 일반 Footer Link는 black `#000000`을 유지하고, 별도 Contact Footer Block이 full-bleed `#e74118` parent + white `#ffffff` Neue Haas Unica 16px links + Facebook/Instagram/Behance/`info@bito.tv` + 0px/no-shadow 관계를 복원했다(`DESIGN.md:380-414`).
2. **PASS — Observed/derived 분리.** `Typography`와 `TAIWAN Tourism Rebranding`은 Observed에서 제거되고 derived tone table에만 남았다(`DESIGN.md:452-465,477,479`).
3. **PASS — font negatives와 asset ownership.** Font evidence는 live computed surface-use만 남기고 official/distributed/declared-only/license/specimen negatives를 제거했다. Assets도 ownership을 분류하지 않는다고 명시한다(`DESIGN.md:182-190,211-215`; `audit-log.md:126-127`).
4. **FAIL — persona-derived label 제거 미완결.** Portable Audience는 generic deletion만 남겼지만(`DESIGN.md:38-40`), provenance의 superseded 주석이 삭제 대상 네 label `cultural-event organizers / brand directors / motion-design talent / agency peers`를 그대로 재수록한다(`provenance.md:95`). 따라서 같은 파일의 “not in this file”/“absent” 현행 주장(`provenance.md:153,168`)과 `migration-log.md:65`가 사실과 충돌한다. 선행 조건 4의 “portable/provenance에서 제거하고 generic deletion disposition만 남김”을 충족하지 못한다.
5. **PASS — Golden Horse 관계.** Visual identity와 title sequences, multiple editions, Taiwan’s premier film awards 관계가 기존 public-knowledge authority 아래 복원됐다(`DESIGN.md:23`; `provenance.md:84-89`).
6. **FAIL — 원장 동기화 미완결.** Footer Verified/Tier-2/copyright/`#ffffff` 목적지, 구 SHA, 그 밖의 선행 stale map은 supersede됐고 현재 SHA `c0be520beb698a941cfb7a737c9a85297937477533b5fa23579d27391e2dc9f5`와 Gate/Core도 맞다(`migration-log.md:55-106`; `audit-log.md:120-132`). 그러나 조건 4의 provenance 재수록과 이를 부정하는 current rows가 동시에 남아 “모든 잘못된 current row” 동기화가 끝나지 않았다.

**bito 판정: FAIL.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| bbc | PASS, problems `[]` | exit 0, `portable_core: true` | `7bb424c7ec1da36845b7501e6196f7752e89d2c6144bc8d29ff917476ab220c9` |
| beusable | PASS, problems `[]` | exit 0, `portable_core: true` | `a323c0063d58dfdfc04d77ed549068032b23d63ec00e7c3bf3f90b7b9497e645` |
| bigin | PASS, problems `[]` | exit 0, `portable_core: true` | `cff360f291eb360e45ef92fcfb8f3054c003f41b2e76688623bf832c92eaf5f7` |
| bithumb | PASS, problems `[]` | exit 0, `portable_core: true` | `7828fca1af6a9395bfaf1c28c9f8cb6efee86e8ff50901d440efc692a48f69ad` |
| bito | PASS, problems `[]` | exit 0, `portable_core: true` | `c0be520beb698a941cfb7a737c9a85297937477533b5fa23579d27391e2dc9f5` |

## 남은 재제출 조건

- **bito:** `provenance.md:95`의 superseded 주석에서도 네 persona-derived label literal을 제거해 generic deletion disposition만 남기고, `provenance.md:153,168` 및 `migration-log.md:65`의 absent/deleted 현행 주장과 실제 파일을 일치시킨다.

이는 선행 판정의 bito 조건 4·6 안에 있는 잔여 사항이다. 새 기준이나 새 F3는 요구하지 않는다.

**전체: FAIL — bbc PASS / beusable PASS / bigin PASS / bithumb PASS / bito FAIL (선행 재제출 조건 25/27, 새 F3 없음).**
