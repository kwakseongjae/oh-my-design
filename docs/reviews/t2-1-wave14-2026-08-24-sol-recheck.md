# T2-1 웨이브 14 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{cgv,channeltalk,china-airlines,chunghwa,cjonstyle}/`
- 선행 판정: `docs/reviews/t2-1-wave14-2026-08-24-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### cgv — PASS (4/4)

1. **PASS — asset ownership 경계.** `first-party catalog content`를 삭제하고 movie artwork를 `captured/recorded surface imagery; ownership unclaimed`로 교정했다(`DESIGN.md:163`; `provenance.md:149`; `migration-log.md:22,92`).
2. **PASS — 새 elevation/toast negative 삭제.** Elevation은 YAML `shadow.flat: none`만 남고(`DESIGN.md:110,114`), modal/sheet/dropdown/sticky/promotional 및 toast negative는 현재 본문에서 삭제됐다(`provenance.md:144`; `migration-log.md:23,64,93`; `audit-log.md:26`).
3. **PASS — current 원장/F2/SHA.** affected ownership/elevation disposition이 provenance·migration·audit current classification과 일치하고(`provenance.md:144,149`; `migration-log.md:22-23,64,92-94`; `audit-log.md:26,32`), current SHA `9f9ca84aaf5b0941945ca0b205851b777b8fa8e2f806d60281e4a63a55897792`가 실제 파일과 일치한다(`migration-log.md:97`).
4. **PASS — 두 기계 검사.** 현재 파일에서 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다. 기존 fresh F3만 유지했고 새 F3는 실행하지 않았다.

**cgv 판정: PASS.**

### channeltalk — PASS (3/3)

1. **PASS — asset ownership 경계.** Assets가 `captured/recorded marketing-surface imagery; ownership unclaimed`로 교정됐다(`DESIGN.md:170`; `provenance.md:140`; `migration-log.md:110`).
2. **PASS — §1 다중 목적지.** generous photography의 Scope `15`와 Assets `170` 두 목적지가 모두 current migration/F2에 기록됐고 provenance inventory도 실제 ownership 문구와 일치한다(`migration-log.md:17,57,111`; `provenance.md:140`).
3. **PASS — audit/F2/SHA/검사.** affected audit classification과 F2가 개정 disposition을 반영하고(`audit-log.md:37`; `migration-log.md:57,108-112`), current SHA `a9e42f8dc69f0e98c60b81da2753a7918073a04e6626c78f9c7a03e0fbdcb1bf`가 실제 파일과 일치한다(`migration-log.md:114`). 두 기계 검사도 PASS다.

**channeltalk 판정: PASS.**

### china-airlines — PASS (3/3)

1. **PASS — `verification_v2.schema: 2`.** provenance Identity와 Freshness에 복원됐다(`provenance.md:17,30,37,168`; `migration-log.md:15,81`).
2. **PASS — selector-bound Proof와 lineage.** utility-control exact tuple은 field-role/selector 결합을 유지하고(`provenance.md:98,101`), pipeline/packet/raw-bundle lineage(`:87`), `dialog-2-1`(`:105,142`), surface별 menu×2 + dialog×1 breakdown(`:108,110`)이 provenance-only로 복원됐다. Portable global token으로 승격하지 않는 경계도 명시돼 있다(`:98,101,108,110,169`; `migration-log.md:34,82`).
3. **PASS — current 원장/F2/SHA/검사.** provenance와 migration disposition이 맞고, F3 당시 schema-absence 기록은 current-class에서 명시적으로 supersede됐다(`migration-log.md:79,83`). `audit-log.md:66,82`는 그 이전 F3의 역사 기록이며 current closure로 재주장되지 않는다. DESIGN은 불변이고 SHA `8fb4175f0f87db792a2438ecb4bba6db47e751e79b62965be288a1b8ba245d8f`가 실제 파일과 일치한다(`migration-log.md:85`). 두 기계 검사도 PASS다.

**china-airlines 판정: PASS.**

### chunghwa — FAIL (4/5)

1. **PASS — carousel motion field 분리.** Slide는 `motion-standard`, `motion-slow`는 page/sheet/dropdown, `ease-standard`는 two-way/carousel easing, slow auto-advance는 cadence prose로 각각 분리됐다(`DESIGN.md:149-167`).
2. **PASS — §11 사실·관계.** network/fiber/5G 사실, phones-to-digital-life evolution, backbone/challenger 및 institutional/playful posture, stable blue·dense IA·dual-language navigation 관계가 Scope `17/19/21/23`에 복원됐고 각 derived 관계에 인접 완전 B2a가 있다(`DESIGN.md:17,19,21,23`; `provenance.md:118`; `migration-log.md:29,85`).
3. **PASS — Proof-only 실측.** active-tab padding 6 px, sub-nav height 69 px, search 13.33 px, independent radius scan `20px`×86 / `50px`×26이 provenance-only로 정확히 보존됐고 portable 값과 합쳐지지 않았다(`provenance.md:85,87,91,110`; `migration-log.md:86`).
4. **PASS — `live-extract`와 F3 서술.** literal은 provenance-only이고(`provenance.md:17,29,122,126`; `migration-log.md:15,55`), 과거 `F3 was not run` 서술은 supersede됐다(`migration-log.md:38,87`). 새 F3는 실행하지 않았다.
5. **FAIL — current 원장 동기화.** SHA와 두 기계 검사는 PASS지만 affected current 목적지가 개정 전 위치를 유지한다. `provenance.md:135`는 signature limiter를 `159`로 가리키나 실제는 `DESIGN.md:163`이고, `provenance.md:149,181`은 B3 gate를 `175`로 가리키나 실제는 `:171`이다. current inventory인 `provenance.md:165`도 Motion `141`→실제 `145`, Font `175`→`:179`, Family `188`→`:192`, Type `192`→`:196`, Capture `217`→`:221` 등 stale pointer를 유지한다. `migration-log.md:33` 역시 duration `145-147`/easing `153-155`/B3 `167 또는 175`를 기록하지만 실제는 `149-151`/`157-159`/`171`이다. `audit-log.md:9,94`도 B3를 `175`로 둔다. 따라서 `migration-log.md:88`의 current-files 전수 grep 주장은 닫히지 않았다. current SHA `4f7e86db6b88651f60654f90feb355d87472e8e674883e16b942c94f1fa4c488` 자체는 실제와 일치한다(`migration-log.md:90`).

**chunghwa 판정: FAIL.**

### cjonstyle — FAIL (4/5)

1. **PASS — linked Proof raw/lookup.** H1 57 px, GNB 약 55 px, utility 51 px, directional carousel radii와 pause-only border, PDP 400 px/64 px, price 14 px/400/Nanum/no-decoration, radius frequency, Tier-2 lookup 결과가 provenance-only로 복원됐다(`provenance.md:91-103,123,125`).
2. **PASS — Carousel local fields.** prev `18px 0 0 18px`, next `0 18px 18px 0`, pause 50%, pause-only `rgb(209, 209, 209)`가 서로 분리되고 body §4 combined border와도 합쳐지지 않았다(`DESIGN.md:461,467-476`; `provenance.md:98-99`).
3. **PASS — §11 관계.** TV/mobile/web unification, ON+STYLE name semantics, retail-TV urgency, curated positioning, refusal/embrace가 Scope `17/19/21/23/25`에 복원됐고 각 derived 관계에 인접 완전 B2a가 있다(`DESIGN.md:17,19,21,23,25`; `provenance.md:131`; `migration-log.md:29,84`).
4. **PASS — badge hairline source/destinations.** `rgba(255,255,255,0.3)`은 canonical §4, portable Component Observed `430`, provenance Proof `96` 및 claim-ledger `144`로 일치하며 §6/Elevation으로 귀속되지 않는다(`DESIGN.md:430`; `provenance.md:96,144`; `migration-log.md:58,85`).
5. **FAIL — current 원장 동기화.** SHA와 두 기계 검사는 PASS지만 current inventory가 Scope 삽입 전 위치를 유지한다. `provenance.md:179`은 Scope `19`를 refusal/embrace로 기록하지만 실제 refusal/embrace는 `DESIGN.md:25`이고, 새 derived Scope `19/21/23`을 누락한다. 같은 행의 Primary tasks/Audience `25/34`도 실제 `31/40`이다. `provenance.md:190,192-194`의 component/state pointer도 pre-insertion 위치이며, `audit-log.md:90`의 “current three files” grep은 Utility/Carousel `440/464`, field note `441/465`, Layout `548/550/552`를 유지하지만 실제는 `446/475`, `447/476`, `559/561/563`이다. 따라서 `migration-log.md:86`의 전수 current grep 주장은 과대다. current SHA `0f39717dbc6a5997d9bf9a0b5ff5591d65af064ad4e5a030da6f58fd6c19826d` 자체는 실제와 일치한다(`migration-log.md:88`).

**cjonstyle 판정: FAIL.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| cgv | PASS, problems `[]` | exit 0, `portable_core: true` | `9f9ca84aaf5b0941945ca0b205851b777b8fa8e2f806d60281e4a63a55897792` |
| channeltalk | PASS, problems `[]` | exit 0, `portable_core: true` | `a9e42f8dc69f0e98c60b81da2753a7918073a04e6626c78f9c7a03e0fbdcb1bf` |
| china-airlines | PASS, problems `[]` | exit 0, `portable_core: true` | `8fb4175f0f87db792a2438ecb4bba6db47e751e79b62965be288a1b8ba245d8f` |
| chunghwa | PASS, problems `[]` | exit 0, `portable_core: true` | `4f7e86db6b88651f60654f90feb355d87472e8e674883e16b942c94f1fa4c488` |
| cjonstyle | PASS, problems `[]` | exit 0, `portable_core: true` | `0f39717dbc6a5997d9bf9a0b5ff5591d65af064ad4e5a030da6f58fd6c19826d` |

**전체: FAIL — cgv PASS / channeltalk PASS / china-airlines PASS / chunghwa FAIL / cjonstyle FAIL (대상 3/5, 선행 재제출 조건 18/20 PASS, 새 기준·새 F3 없음).**
