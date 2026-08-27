# T2-1 웨이브 16 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{clickhouse,cloudflare,codeit,cohere,coinbase}/`
- 선행 판정: `docs/reviews/t2-1-wave16-2026-08-25-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-25 · 검증자: sol

## 건별 판정

### clickhouse — FAIL (3/5)

1. **FAIL — 채택 Proof의 selector-bound raw tuple이 1건 누락됐다.** Lineage와 counts는 복원됐고(`provenance.md:177-179`), quoted raw samples도 대부분 복원됐다. 그러나 canonical `.verification.md:25`의 expanded-select tuple — `surface-2::[data-omd-interaction-capture="menu-0-0"]`, `#282828` / `#dfdfdf`, `0px 1px 1px` `#faff69`, lower 6px corners, `4px 0px`, Inter 14px/400 — 은 provenance에 없다. 현재 quoted block은 `:21`, `:22`, `:23`, `:24` 다음에 `:26`, `:27`로 건너뛴다(`provenance.md:185-195`). 따라서 selector-bound tuples를 provenance에 byte-exact 보존하라는 조건을 충족하지 못했다. `migration-log.md:96`은 실제와 달리 `:21-27` 전부가 `185-195`에 있다고 기록한다.
2. **PASS — imagery·locale/synthetic negative 삭제.** Portable Assets에는 Simple Icons identity boundary만 남고(`DESIGN.md:165-167`), Content에는 official writing과 wording samples만 남는다(`DESIGN.md:390-407`). Named gaps에도 imagery ownership, complete locale profile, synthetic samples가 없다(`DESIGN.md:439-455`; `migration-log.md:97,146`; `audit-log.md:110-111`).
3. **PASS — Select Menu·Cookie Dialog kind/map 최소 생략.** Pricing Select Menu는 visual tuple과 expanded/menu-open·selected 관측만 유지하고 Kind/map을 생략한다(`DESIGN.md:313-327`). Cookie Dialog도 visual tuple과 open 관측만 유지하고 Kind/map을 생략한다(`DESIGN.md:353-365`; 공통 경계 `DESIGN.md:188`).
4. **FAIL — §11 다중 목적지는 복원됐지만 Proof disposition 원장이 실제와 불일치한다.** `direct minimalism`과 `built for engineers and trusted by leaders`는 Scope와 Content에 이중 결속됐다(`DESIGN.md:19,403-407`; `provenance.md:90`; `migration-log.md:30,99,139`; `audit-log.md:114`). 그러나 위 `.verification.md:25` 누락에도 `migration-log.md:96`은 `:21-27` 전체 보존, `audit-log.md:115`는 Proof raw 보존 완료로 기록한다. 따라서 Proof disposition의 provenance/migration/audit/F2 동기화 조건은 미충족이다.
5. **PASS — current SHA와 두 검사.** 실제 SHA `60cb67aa2497bf9243ea21ad9ff25c567e208263ad709cbff03f228dfa6d1c57`가 원장과 일치한다(`migration-log.md:150`; `audit-log.md:117`). 현재 파일에서 `--gate-only` PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다. 새 F3는 실행하지 않았다.

**clickhouse 판정: FAIL.** 잔여 재제출 범위는 canonical `.verification.md:25`의 exact tuple을 provenance에 복원하고, Proof current-class 원장을 실제 disposition에 맞춰 재동기화하는 것이다.

### cloudflare — PASS (6/6)

1. **PASS — C4 field 자체 생략.** `Type: omitted`, `Kind: omitted`, `Kind: non-interactive` field는 portable에서 모두 제거됐다. 미확인 surface는 field/map 자체를 생략하고, Marketing Feature Card·Pagination만 확인된 interactive kind를 가진다(`DESIGN.md:290-292`; `migration-log.md:79,99`; `audit-log.md:140`).
2. **PASS — 확인된 interaction evidence와 map 복원.** Marketing Feature Card는 hover-lift가 interactive cue라는 관계와 역할 map을 복원했다(`DESIGN.md:202,627-647`). Pagination은 numbered compact buttons와 역할 map을 복원했다(`DESIGN.md:755-771`).
3. **PASS — exact-role L/E/S 재판정.** Primary Save/Deploy와 Destructive Delete/Purge는 loading/error/success가 applicable이고 treatment만 생략한다(`DESIGN.md:318-326,388-396`). Ghost와 Dark CTA는 mixed/unresolved destination 경계에서 L/E/S field를 생략한다(`DESIGN.md:366-373,453-460`). Text/Mono/Select는 error applicable, loading/success 생략이다(`DESIGN.md:509-517,534-542,558-566`; `audit-log.md:141`).
4. **PASS — source 밖 negative 삭제.** native-app typography/chrome, Cloudflare-exclusive font, first-party mark-file absence, non-English locale-profile negative와 관련 Named gaps가 current portable에서 제거됐다. Simple Icons는 identity-only로만 남는다(`DESIGN.md:260-262`; `migration-log.md:82,109`; `audit-log.md:142`).
5. **PASS — asset B2a와 signature-motion 관계.** Logomark-never-recolors와 partner-logo grayscale/mono 규칙 모두 인접 완전 B2a를 가진다(`DESIGN.md:264,806`); source 밖 replacement ban은 없다. Hover interactive cue, accessibility-first/never suppress, leaving-quicker, never-hard-swap 관계도 복원됐다(`DESIGN.md:202-205`; `migration-log.md:80,83`; `audit-log.md:143-144`).
6. **PASS — card×6·원장·SHA·검사.** Actual six are card/panel `617`, YAML surface `625`, stat `652`, table `664`, code block `677`, tooltip `747`; provenance/migration/audit current-class가 card×6으로 동기화됐다(`provenance.md:131`; `migration-log.md:84,99`; `audit-log.md:145`). 실제/current SHA는 `7993d30533db894c224c32192771f7ace4adbf9961e4a1d557f5948955eb842b`이며 두 검사를 통과했다(`migration-log.md:111`; `audit-log.md:146`). 새 F3는 실행하지 않았다.

**cloudflare 판정: PASS.**

### codeit — PASS (7/7)

1. **PASS — E3 incident·repro·자연 문장 원복·row-aware gate.** 원 우회 자인은 `worker-log.txt:1`에 남아 있고, exact false-positive shape는 “state-table row가 아닌 prose 한 줄의 `focus-visible` + hex”로 기록됐다(`migration-log.md:109`; `provenance.md:162`). 자연 문장은 literal `focus-visible`과 `#760dde`를 같은 물리 행에 복원했고 `keyboard-focus` 동의어를 제거했다(`DESIGN.md:94,232`). Gate는 focus-visible table row만 검사하도록 좁혀졌다(`test-v2/tools/migrate-reference.mjs:204-215`; negative fixture `:252`). 현재 자연 prose fixture와 codeit gate는 PASS/problems `[]`, 잘못된 hex-bearing state row는 `focus-visible-promotion`으로 BLOCK됨을 재확인했다.
2. **PASS — source forms·§9 local recipe·field binding 복원.** Source `-1px`는 YAML `-1.0`/`-1.0px`와 분리 보존됐다(`DESIGN.md:44,186,191,201`). `8px–10px` en-dash range도 복원됐다(`DESIGN.md:118,121`). White header의 right-aligned membership chip은 local recipe로 복원됐고(`DESIGN.md:277,499`), Course Card의 flat/hairline/no-shadow는 해당 component field에 있다(`DESIGN.md:439-445`). §9 prompt wrapper는 복원하지 않았다(`migration-log.md:111,125-129,151`).
3. **PASS — Image Behavior 관계와 ownership 경계.** `at all sizes`가 Assets와 Layout에 복원됐고(`DESIGN.md:207,511`), first-party catalog-imagery ownership 승격은 삭제됐다(`migration-log.md:113,130`; `provenance.md:160,182`).
4. **PASS — evidence class 교정.** `tech.codeit.kr`와 `about.codeit.com/ko/`는 official engineering blog와 official company intro로 기록되고 token-capture surface와 분리된다(`DESIGN.md:11,17`; `provenance.md:61-62,70-71,80-81`). `official history` class는 portable에 없다(`migration-log.md:115,131`).
5. **PASS — unsupported negatives 삭제.** Font에는 observed family/use와 declared-only fallbacks만 남고(`DESIGN.md:170-182`), favicon은 lookup/not-captured/not-promoted 경계일 뿐 first-party file 부재 주장이 아니다(`DESIGN.md:205`; `provenance.md:28`). Content와 Named gaps에 complete-microcopy/locale negative가 없으며(`DESIGN.md:516,566-575`), current 원장도 삭제 disposition과 일치한다(`migration-log.md:117,132-135`; `provenance.md:179-189`).
6. **PASS — Tier-2 literal exact 복원.** `getdesign.md/codeit`, `styles.refero.design`가 canonical form 그대로 남고 scheme을 발명하지 않는다(`provenance.md:75-76`; `migration-log.md:119,136`).
7. **PASS — current-class/F2/SHA/검사.** Current provenance와 post-edit F2는 개정 disposition을 반영하고 과거 F3 current-class를 supersede한다(`provenance.md:145-189`; `migration-log.md:103-153`; `audit-log.md:105-107`). 실제/current SHA는 `c64a9f0258b6db622480a2116af5eb1d6e9ff9d9c367c24f86640390f6538286`이며, gate-only PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다(`migration-log.md:153`). 새 F3는 실행하지 않았다.

**codeit 판정: PASS.** E3 분할 문장 원복과 수정 gate의 양방향 동작까지 확인했다.

### cohere — PASS (6/6)

1. **PASS — Proof-confirmed anchor primitive 3건 복원.** Dark solid, Inverse solid, Outlined pricing action 각각 `Type: anchor`를 가진다(`DESIGN.md:181,187,211,235`; `provenance.md:193`; `migration-log.md:93`).
2. **PASS — Home marketing media interactive kind/map 복원.** `Kind: interactive`, `Type: card`, default/hover/focus-visible/disabled 역할 map을 복원하고, unresolved L/E/S는 field 자체를 생략한다(`DESIGN.md:283-301`; `migration-log.md:94`; `provenance.md:193,198`).
3. **PASS — exact sidecar lineage.** Current packet이 sibling sidecar를 채택하고 raw artifact pointer는 sidecar `:5`에서 오며 canonical footer에서 오지 않는다고 교정됐다(`provenance.md:184,188`; `migration-log.md:33,95`; `audit-log.md:117`).
4. **PASS — support/legal copy negative 삭제.** Content에는 canonical sidecar가 실제 기록한 signed-in application UI/documentation chrome capture boundary만 남고 support/legal copy negative는 없다(`DESIGN.md:333`; `migration-log.md:96`; `audit-log.md:118`).
5. **PASS — broad font gap 축소.** `Cohere-exclusive redistributable brand font`는 삭제됐고, sidecar의 exact CohereText/CohereMono discovery result만 유지한다(`DESIGN.md:377`; `provenance.md:124`; `migration-log.md:97`; `audit-log.md:119`).
6. **PASS — current-class/SHA/검사.** Current revision/F2와 audit correction이 실제 disposition에 맞고(`migration-log.md:89-126`; `audit-log.md:107-120`), 실제/current SHA는 `cd7e0cbcac1b55926fd881939eb64e55fa83026b2e3026d7c7c93521ac15ffde`다. Gate-only PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다(`migration-log.md:126`). 새 F3는 실행하지 않았다.

**cohere 판정: PASS.**

### coinbase — PASS (8/8)

1. **PASS — §8 field·relation 복원.** CDS open-sourced 관계(`DESIGN.md:11,13,192`), Data Table row/column spans(`:531`), ProgressCircle `% overlay`와 ProgressBar fixed/floating labels(`:627`), Chart `XAxis`/`YAxis`/`Scrubber`(`:638`)가 복원됐다(`migration-log.md:28,52,63-66`).
2. **PASS — §11 값·관계 복원.** Fred Ehrsam의 직업, Reddit/HN 경로, `$150K`, `$100B`, most-regulated→positioning advantage, Wallet non-custodial, Prime institutional 관계가 portable narrative와 provenance에 보존된다(`DESIGN.md:11,17`; `provenance.md:97`; `migration-log.md:32,53,67`).
3. **PASS — evidence/task 승격 해소.** Typography는 named families와 YAML/body §3 metrics를 source-stated evidence로만 기록한다(`DESIGN.md:145-150`). Primary tasks는 exact live component id 결속 없이 source §8의 top-nav Sign up/search/category chips 수준이다(`DESIGN.md:25-29`; `migration-log.md:54`).
4. **PASS — sidecar existence/adoption 경계.** Sidecar가 존재하지만 canonical/current packet이 채택·연결하지 않아 내용은 source가 아니라고 기록한다(`provenance.md:31,147`; `migration-log.md:17,55`; `audit-log.md:9,99`). Hidden Proof는 편입하지 않았다.
5. **PASS — unsupported font/locale negatives 삭제.** Current Font evidence는 source-stated family/metrics만 남고(`DESIGN.md:145-152`), Named gaps에도 FontFace/distribution/license/Declared-only/locale-profile 행이 없다(`DESIGN.md:771-782`; `migration-log.md:22,31,56,69`).
6. **PASS — Banner success·List Cell C4 교정.** Banner error는 applicable이고 success field는 최소 경계에서 생략됐다(`DESIGN.md:601-620`). List Cell은 `Type: listItem`만 유지하고 Kind/map을 생략한다(`DESIGN.md:537-546`; 공통 경계 `:216`; `migration-log.md:57,70-71`).
7. **PASS — E3 gate-directed 분할 원복.** Incident와 exact prose false-positive repro, row-aware gate fix가 기록됐다(`worker-log.txt:1`; `migration-log.md:58`). 자연 문장은 `#0052ff` 등 hex와 literal `focus-visible`을 같은 물리 행에 복원했다(`DESIGN.md:233,375,469`). Gate는 state-table row만 검사하며(`test-v2/tools/migrate-reference.mjs:204-215`), 자연 prose fixture와 coinbase gate는 PASS/problems `[]`, 잘못된 state-row fixture는 BLOCK됨을 재확인했다.
8. **PASS — current-class/F2/SHA/검사.** Revision/F2와 audit supersession이 실제 disposition에 맞고(`migration-log.md:48-86`; `audit-log.md:9,99`), 실제/current SHA는 `1a11310828b0a579a9a596c6aaba42a427a9e7d2a0f344cfdaf05cd171318e4f`다. Gate-only PASS/problems `[]`, portable Core exit 0/`portable_core: true`를 재확인했다(`migration-log.md:86`). 새 F3는 실행하지 않았다.

**coinbase 판정: PASS.** E3 분할 문장 원복과 수정 gate의 양방향 동작까지 확인했다.

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| clickhouse | PASS, problems `[]` | exit 0, `portable_core: true` | `60cb67aa2497bf9243ea21ad9ff25c567e208263ad709cbff03f228dfa6d1c57` |
| cloudflare | PASS, problems `[]` | exit 0, `portable_core: true` | `7993d30533db894c224c32192771f7ace4adbf9961e4a1d557f5948955eb842b` |
| codeit | PASS, problems `[]` | exit 0, `portable_core: true` | `c64a9f0258b6db622480a2116af5eb1d6e9ff9d9c367c24f86640390f6538286` |
| cohere | PASS, problems `[]` | exit 0, `portable_core: true` | `cd7e0cbcac1b55926fd881939eb64e55fa83026b2e3026d7c7c93521ac15ffde` |
| coinbase | PASS, problems `[]` | exit 0, `portable_core: true` | `1a11310828b0a579a9a596c6aaba42a427a9e7d2a0f344cfdaf05cd171318e4f` |

**전체: FAIL — clickhouse FAIL / cloudflare PASS / codeit PASS / cohere PASS / coinbase PASS (대상 4/5, 선행 재제출 조건 30/32, codeit·coinbase E3 자연 문장 원복 확인, 새 기준·새 F3 없음).**
