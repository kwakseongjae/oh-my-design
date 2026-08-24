# T2-1 웨이브 7 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{591,8percent,91app,accupass,acer}/`
- 선행 판정: `docs/reviews/t2-1-wave7-2026-08-24-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다. 91app·acer의 F3 판정은 선행 목록에 이미 있던 “개정 뒤 아직 수행하지 않은 첫 F3 1회” 조건의 충족 여부만 확인한 것이다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### 591 — FAIL (5/6)

1. **PASS — §11 관계 복원.** classified-board → marketplace 진화, mandated price-transparency, actual transaction price와 asking price의 차이, data-trust moat가 인접 완전 B2a 아래 Scope에 복원되고 provenance/§11 목적지와 맞는다(`DESIGN.md:15`; `provenance.md:72`; `migration-log.md:28,46`).
2. **PASS — Filter Label 별도 role 복원.** `#666666` / 14px tuple이 Body Large·Filter Range Input과 합쳐지지 않은 Type role로 남고 §9 mixed disposition/F2에도 반영됐다(`DESIGN.md:200,204`; `provenance.md:177,220`; `migration-log.md:26,47,57`).
3. **PASS — Content evidence class 분리.** live homepage voice sample, 추가 homepage chrome, live rent, source tone table, §14 implementation guidance가 분리됐고 `我的詢問`의 live-homepage 승격이 제거됐다(`DESIGN.md:557-582`; `migration-log.md:27,48,57`).
4. **PASS — C2 역할별 재판정.** 두 Search CTA의 loading/error는 applicable, success는 생략됐고, community/map 및 generic validation은 최소 미해상 field만 생략됐다. 기존 audit C2 문장도 supersede됐다(`DESIGN.md:258-261,284-287,301-311,337,362,388`; `provenance.md:191`; `migration-log.md:31,49`; `audit-log.md:11`).
5. **FAIL — negative 삭제 뒤 원장/F2 동기화가 남음.** `migration-log.md:13`은 Named gaps에 URL-free first-party-mark 문장이 있다고 계속 주장하지만 현재 Named gaps에는 그 행이 없고(`DESIGN.md:626-642`), 후발 개정표는 해당 row를 삭제했다고 적는다(`migration-log.md:50`). 또한 기존 F2는 Search CTA/Secondary/search-input L/E/S가 `not-applicable` rows라고 계속 기록해 현재 본문·후발 F2와 충돌하며 명시적으로 supersede되지 않았다(`migration-log.md:38,49,57`).
6. **PASS — 두 기계 검사 재통과.** 현재 파일에서 gate는 PASS/problems 0, Core는 exit 0/`portable_core: true`; SHA-256은 `866a65df67ec20d40760d95a77ddadd9b739001c6fe6110e5cbdb30313c6e73c`다.

**591 판정: FAIL.**

### 8percent — PASS (4/4)

1. **PASS — `button-primary.states` identity 복원.** 원 문자열이 Primary (EdsButton)의 legacy `states` field와 provenance ledger에 있고 Use로 합쳐지지 않았다(`DESIGN.md:240-243`; `provenance.md:30,95,135`; `migration-log.md:16,49`).
2. **PASS — Soft pill mixed anatomy 복원.** near-ink base label + `#3282f0` emphasis word가 인접 완전 B2a 아래 별도 anatomy로 남았다(`DESIGN.md:254-269`; `provenance.md:96,120`; `migration-log.md:27,50,56`).
3. **PASS — 다중 목적지/F2 교정.** Credit-Grade의 `#3282f0`, `에잇퍼센트`의 Scope+provenance, rem 값별 실제 목적지가 원장과 F2에 맞는다(`DESIGN.md:9,17,192-195,384`; `provenance.md:28,30,132-135`; `migration-log.md:13-16,41,51,58`).
4. **PASS — 두 기계 검사 재통과.** 현재 파일에서 gate는 PASS/problems 0, Core는 exit 0/`portable_core: true`; SHA-256은 `329a0289179eb8bf87d12d72c5b2d45b6abe09f66e3b4a78ba63c6d16e8c177e`다.

**8percent 판정: PASS.**

### 91app — FAIL (2/4)

1. **PASS — unsupported typography negative 삭제.** Font evidence에는 live computed Noto Sans TC와 Helvetica fallback만 남고 official-product-use/exclusive-distributed 부재 claim은 제거됐다(`DESIGN.md:120-132`; `migration-log.md:19,53,59`).
2. **PASS — §3/provenance/D1·E2c·F2 및 허위 F3 기록 교정.** 구 SHA는 supersede됐고 Post-F3/F3-complete 주장은 제거됐으며 현재 원장은 F3 미실행 상태를 정확히 말한다(`provenance.md:123`; `migration-log.md:9,19,37,45,54,59-61`).
3. **FAIL — 선행 조건의 최초 F3 1회가 미실행.** `audit-log.md`가 없고 원장과 worker 기록도 F3 pending을 명시한다(`migration-log.md:9,54,61`; `worker-log.txt:7`). 이번 재심이 새 F3를 추가 요구하는 것이 아니라 선행 조건 3이 아직 충족되지 않은 것이다.
4. **FAIL — “F3 후” 검사·SHA 조건 미충족.** 현재 gate/Core/SHA 자체는 통과·일치하지만(`migration-log.md:55`), 선행 조건이 요구한 첫 F3 뒤의 검사 기록은 아니다(`migration-log.md:54`).

**91app 판정: FAIL.**

### accupass — FAIL (2/6)

1. **PASS — §11 관계 복원.** engineering/Foxconn, AccuSeats→Accupass, third-space/regional connector, NT$200M/birthday bankruptcy, long-term versus quick-money, event scale이 인접 완전 B2a 아래 Scope와 provenance/§11에 맞는다(`DESIGN.md:13`; `provenance.md:83`; `migration-log.md:29`).
2. **FAIL — Footer Link tuple의 기존 F2 미동기화.** 본문과 §9 row에는 `#f5faff` / 14px 별도 role이 복원됐지만(`DESIGN.md:195,201`; `migration-log.md:27`), 기존 active F2의 같은 hex 목적지 집합은 Type role을 누락한 채 남고 후발 요약도 이를 명시적으로 supersede하지 않았다(`migration-log.md:62,98`).
3. **PASS — 새 negative claim 삭제.** font/license/logo/microcopy 부재 claim은 portable body와 Named gaps에서 제거됐고 computed/fallback 사실만 남았다(`DESIGN.md:170-182,566-578`; `migration-log.md:19,28,89`).
4. **FAIL — Distinctive B2a audit/F1 inventory 미동기화.** 현재 본문과 provenance는 soft/mixed-radius/near-black-icy까지 list-head B2a에 포함하지만(`DESIGN.md:32`; `provenance.md:146`), 기존 audit와 F1은 multi-step/saturation/pink만 교정한 기록을 유지하며 명시적 correction/supersede가 없다(`audit-log.md:60-69`; `migration-log.md:16,42`).
5. **FAIL — restored kind와 provenance/audit가 정면 충돌.** 본문은 Event Card·Keyword Chip·Inline/Organizer Link를 interactive, Category Tag를 non-interactive로 복원했지만(`DESIGN.md:233,394-425,452-483`; `migration-log.md:21,91`), provenance와 audit는 이들의 kind/map이 omitted라고 계속 기록한다(`provenance.md:131`; `audit-log.md:9,38,55,68,88`).
6. **FAIL — source-row/F2 원장 불일치 잔존.** §2 row가 실제 Distinctive/Components 목적지를 빠뜨리고 존재하지 않는 Named-gaps 목적지를 유지한다(`migration-log.md:18`). favicon URL-free Named-gaps 목적지도 실제 본문과 어긋나며(`provenance.md:23,137`; `migration-log.md:50`; `DESIGN.md:566-578`), 기존 F2의 Footer Link 목적지도 미완료다(`migration-log.md:62`). 두 기계 검사 자체는 통과했다.

**accupass 판정: FAIL.**

### acer — FAIL (0/6)

1. **FAIL — §11 관계의 F2 목적지 미동기화.** 두 관계와 B2a는 Scope 및 derived inventory에 복원됐지만(`DESIGN.md:11`; `provenance.md:144`; `migration-log.md:30,85`), 기존 F2는 실제 derived-inventory 목적지를 빠뜨리고 Narrative row만 가리킨다(`migration-log.md:70,96`; `provenance.md:80,144`).
2. **FAIL — invented-evidence 삭제가 sidecar/F1까지 닫히지 않음.** 본문 imagery 발명 삭제와 layout scope 축소는 반영됐지만(`DESIGN.md:156-160,291-295`), provenance/F1은 현재 존재하지 않는 imagery 문장과 no-complete-product-microcopy-guide 항목을 계속 열거해 삭제 완료 주장과 충돌한다(`provenance.md:165,171`; `migration-log.md:29,43,86`).
3. **FAIL — 네 B2a 위치의 F1/derived inventory 미동기화.** Audience·Shape·native-select·Layout 본문과 provenance 항목은 반영됐지만(`DESIGN.md:30,102,192,293`; `provenance.md:146-149`), 기존 F1은 stale imagery/microcopy 항목과 옛 line map을 유지한 채 supersede되지 않았다(`migration-log.md:43,87,94`).
4. **FAIL — destination 교정이 일부만 완료.** exact homepage, interaction count, §4→Primary tasks, §13→Audience는 맞지만(`DESIGN.md:9,21-30,169`; `provenance.md:13,20,125,131`; `migration-log.md:21,32,33,48,88,96`), 두 green hex가 실제로 등장하는 provenance derived inventory 목적지가 기존 F2에서 누락됐다(`provenance.md:145`; `migration-log.md:47,56`).
5. **FAIL — 선행 조건의 최초 F3 1회가 미실행.** `audit-log.md`가 없고 원장/worker 기록도 F3 pending을 명시한다(`migration-log.md:10,77,89`; `worker-log.txt:16`). 이번 재심이 새 F3를 추가 요구하는 것이 아니라 선행 조건 5가 아직 충족되지 않은 것이다.
6. **FAIL — “F3 후” 검사·SHA 조건 미충족.** 현재 gate/Core/SHA 자체는 통과·일치하지만(`migration-log.md:90`), 선행 조건의 첫 F3 뒤 검사 기록이 아니다(`migration-log.md:89`).

**acer 판정: FAIL.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| 591 | PASS, problems 0 | exit 0, `portable_core: true` | `866a65df67ec20d40760d95a77ddadd9b739001c6fe6110e5cbdb30313c6e73c` |
| 8percent | PASS, problems 0 | exit 0, `portable_core: true` | `329a0289179eb8bf87d12d72c5b2d45b6abe09f66e3b4a78ba63c6d16e8c177e` |
| 91app | PASS, problems 0 | exit 0, `portable_core: true` | `a50f126f9660fb87b571e566b697cbf1aa410d42e419f0a39b80d474fdd2f629` |
| accupass | PASS, problems 0 | exit 0, `portable_core: true` | `7724b82253031b367c9a920889994f09fbc7014243ceb011416995d91405cf7c` |
| acer | PASS, problems 0 | exit 0, `portable_core: true` | `7ebdf2c88555d5723f74288fcb338f2a72d350e3042d9fe1475a65a0bdfa1f17` |

**전체: FAIL — 591 FAIL / 8percent PASS / 91app FAIL / accupass FAIL / acer FAIL (선행 재제출 조건 13/26).**
