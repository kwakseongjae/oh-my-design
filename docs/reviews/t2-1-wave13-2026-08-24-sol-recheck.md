# T2-1 웨이브 13 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{cakeresume,cal,cashapp,catchtable,cathay}/`
- 선행 판정: `docs/reviews/t2-1-wave13-2026-08-24-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### cakeresume — FAIL (4/5)

1. **PASS — canonical Proof 연결.** canonical `.verification.md`의 heading/date/method/세 source/raw samples가 provenance에 연결됐고 false-absence가 삭제됐다(`provenance.md:105-128`; `migration-log.md:82,90`).
2. **PASS — Font evidence class.** Font table은 Inter와 Apple SD Gothic Neo의 live surface-use 및 같은 face를 이름 붙이는 YAML declaration만 유지한다. unsupported official/distributed negative와 `Declared-only` 오분류는 current table에서 삭제됐다(`DESIGN.md:126-135`; `provenance.md:151`; `audit-log.md:106`).
3. **PASS — §7 다섯 Do와 `#378060` 분리.** 다섯 Do는 `DESIGN.md:57-63`, §2/§9 supporting-only rule은 `:65`에 별도 귀속됐다(`provenance.md:149`; `migration-log.md:84,94`).
4. **PASS — persona literal 제거.** 선행 판정의 persona-derived literal은 migrated 네 파일에서 0건이고 generic deletion disposition만 남는다(`provenance.md:135`; `migration-log.md:30,85,100`; `audit-log.md:106`).
5. **FAIL — current provenance/F2 동기화.** SHA와 두 기계 검사는 맞지만 provenance current 포인터가 개정 전 위치를 유지한다. `provenance.md:21`의 Brand green `83`, capture `165/166`, Primary `186`, Secondary `213`은 실제 `DESIGN.md:84,162-163,183,210`이고, `provenance.md:23`의 Assets `156` / Named gaps `327`은 실제 `:153/:324`다. `provenance.md:27,151,155`도 각각 Semantic `81/83`, Font `125`, B3 `117`을 가리키지만 실제는 `:82/:84`, `:126`, `:118`이다. audit의 포괄 supersede는 별도 provenance의 unmarked current claim을 동기화하지 않는다.

**cakeresume 판정: FAIL.**

### cal — FAIL (3/5)

1. **PASS — §9 local recipe 다섯 건.** White Hero, Scheduling Card, Sticky Nav, Trust Bar, Feature Section의 exact local binding이 portable Components에 복원됐고 prompt wrapper만 삭제됐다(`DESIGN.md:502-556`; `provenance.md:97-107`; `migration-log.md:46,55`).
2. **PASS — fictional-persona 입력 label 제거.** 선행 세 input-segment literal은 migrated 네 파일에서 0건이며 generic deletion만 남는다(`DESIGN.md:34`; `provenance.md:127`; `migration-log.md:47,58,60`; `audit-log.md:136`).
3. **PASS — independently verified task 축소.** Primary task는 `count=1`의 homepage CTA `Get started`뿐이고 §14 empty-state copy는 독립 task가 아니라고 분리됐다(`DESIGN.md:22-30`; `provenance.md:72,122,127`; `migration-log.md:48,54`).
4. **FAIL — unsupported negative 삭제 미완료.** portable의 선행 네 negative row는 삭제됐지만, `provenance.md:126`이 retained-current interpretive claim으로 `no-authored-type-token-document / naming-not-FontFace / distribution-not-load`를 계속 승인한다. 이는 `migration-log.md:49,57`의 삭제/ABSENT current claim과 충돌하며 독립 coverage proof도 없다.
5. **FAIL — provenance/current pointer 동기화.** SHA와 두 기계 검사는 맞지만 `provenance.md:123-126`의 current destination/derived inventory가 개정 전 줄을 유지한다. 예를 들어 Capture `234` / Font `158` / Type-rule `201`은 실제 `DESIGN.md:230/:159/:199`, Default Badge `472/478`은 실제 `:468/:474`, Font `165` / Family `177` / Assets `207` / Layout `509` / Content `541`은 실제 `:155/:175/:203/:561/:593`이다.

**cal 판정: FAIL.**

### cashapp — FAIL (3/4)

1. **PASS — canonical §6/§11 관계.** anti-corporate / fast-confident / culturally-current / legacy-card-stack 관계가 인접 완전 B2a 아래 복원됐고(`DESIGN.md:131,141`), email/text P2P에서 Card·direct deposit·stocks·bitcoin·tax로의 진화, branchless alternative, 2024 Index Studio infinite-canvas와 push/defy 관계도 Scope에 복원됐다(`DESIGN.md:17,19`).
2. **PASS — sidecar-only Proof.** Secondary typeface의 Display/Novelty/Bespoke 역할은 family 발명 없이 기록됐고, YAML/body 14px와 live-computed 14.8 px가 분리됐으며, favicon 756-byte 16×16 PNG record도 provenance에 남았다(`provenance.md:89-98`).
3. **FAIL — Default Input/§14/§15 다중 목적지 원장.** migration revision/F2는 주요 목적지를 고쳤지만 provenance current rows가 완결되지 않았다. Default Input의 실제 목적지 `DESIGN.md:238,329,616` 중 `provenance.md:124,146,169`에는 Named gaps `616`이 없다. easing 이름의 `DESIGN.md:157-159,611` 중 `provenance.md:128,136-142`에는 `611`이 없고, §14 추가 Named gaps `:612/:614/:615`도 provenance `:127,170-173`에 반영되지 않았다. 따라서 조건이 명시한 migration/provenance/F2 동기화가 닫히지 않았다.
4. **PASS — audit/SHA/검사.** affected audit current-class는 supersede됐고(`audit-log.md:111`), 현재 SHA `3871ca7f8067f32a2e0e8d376aa5f8e59f849ca25932872e7baa264f21659ca4`가 `migration-log.md:69`와 일치한다. 두 기계 검사도 PASS다.

**cashapp 판정: FAIL.**

### catchtable — FAIL (2/3)

1. **PASS — `on-brand`/merchant on-fill 분리.** YAML `on-brand`는 careers orange-action text로만 제한됐고(`DESIGN.md:81,90`), Merchant `#FFFFFF`은 component-local text/on-fill로만 유지된다(`:264,270`; `provenance.md:91,103`; `migration-log.md:84,90-92`).
2. **PASS — 새 color-negative 삭제.** sale/selected-filter/promotional/dark-surface color 부정문과 해당 Named-gap은 삭제됐다. 현재 Named gaps는 `DESIGN.md:368-379`이며, 남은 `sales dashboard` 문장은 source-derived consumer-discovery 설명이지 해당 color-negative가 아니다(`DESIGN.md:41,48,57`; `migration-log.md:85,93-94`).
3. **FAIL — provenance/current pointer 동기화.** SHA·검사·audit supersede는 맞지만 provenance가 두 줄 삭제 전 위치를 계속 가리킨다. `provenance.md:28`의 Merchant field `272`, Careers background/field `289/296`은 실제 `DESIGN.md:270/:287/:294`; `provenance.md:106`의 Merchant `265/272`, Careers `296`도 실제 `:263/:270/:294`다. `provenance.md:130,155`는 존재하지 않는 Named gaps `382/381`을 가리키며 실제 motion/prior-claims gap은 `DESIGN.md:378/379`다. `provenance.md:138`의 current portable inventory도 같은 구 포인터를 유지한다.

**catchtable 판정: FAIL.**

### cathay — FAIL (5/7)

1. **PASS — Type Notes와 Primary CTA Use.** 각 role의 YAML `use`와 body Notes가 별도 field로 복원됐고(`DESIGN.md:203-207`), Primary CTA의 body §4 네 문자열도 component-local Use/C2에 모두 있다(`:254,265`).
2. **PASS — source-confirmed kind/primitive/map.** Quiet Nav는 `Kind: interactive` / `Type: link`와 역할별 map(`DESIGN.md:316-339`), Utility Sign-in은 같은 primitive/map(`:341-365`), Glass Tile은 YAML `Type: card`를 보존한 Proof `(a)` 기반 interactive map(`:382-404`)을 갖는다. 미관측 visual treatment는 발명하지 않았다.
3. **PASS — asset ownership 분리.** `first-party catalog content` ownership은 삭제됐고, captured imagery와 구현 판단이 ownership class에서 분리됐다. 완전 B2a가 판단보다 앞서며 ownership을 주장하지 않는다(`DESIGN.md:212`).
4. **PASS — Audience B2a 순서.** derived limiter가 exclusion 판단보다 먼저 온다(`DESIGN.md:34`).
5. **PASS — `想轉就轉` evidence class.** Observed 목록 `DESIGN.md:530-543`에서는 제거됐고 derived voice table에만 남는다(`:547-557`).
6. **FAIL — Proof frequency exact 값.** canonical `.verification.md:25`는 `rgb(0, 0, 0) → #000000 — 45`인데 provenance는 `rgb(0, 0, 0) — 45`만 기록한다(`provenance.md:104`). 고정 조건의 `#000000 — 45` proof-only observation이 복원되지 않았고, `migration-log.md:88`도 sidecar hex form을 의도적으로 복사하지 않았다고 확인한다.
7. **FAIL — current provenance/pointer 동기화.** SHA와 두 검사는 맞지만 `provenance.md:27`은 stale Named gaps `571` / Content Observed `507`을 유지한다. `provenance.md:128`은 body Notes가 rows 204-207에 없다는 현재 본문과 반대이며, `provenance.md:150`은 stale Named gaps `574`와 five-kinds 열거 과장을 유지한다. 실제 위치·내용은 `DESIGN.md:204-207,534-535,594-603`이다.

**cathay 판정: FAIL.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| cakeresume | PASS, problems `[]` | exit 0, `portable_core: true` | `5b44da4936ada1c813450aaea948216cfd6e9f1cc9d2c338546d0dbb28de5035` |
| cal | PASS, problems `[]` | exit 0, `portable_core: true` | `3e6be0da36e14543491dbcf4b912b13c6c248ee4c5c75c17679b1bf8b73df4a3` |
| cashapp | PASS, problems `[]` | exit 0, `portable_core: true` | `3871ca7f8067f32a2e0e8d376aa5f8e59f849ca25932872e7baa264f21659ca4` |
| catchtable | PASS, problems `[]` | exit 0, `portable_core: true` | `facafe53ba098fc836a330de7329d0cc011a19f57e1dc23405fb3be4650a4dc1` |
| cathay | PASS, problems `[]` | exit 0, `portable_core: true` | `cafa12233729a0b3830fd37cb6481d348faa254f18b1206ddc4354dbf8b0d583` |

**전체: FAIL — cakeresume FAIL / cal FAIL / cashapp FAIL / catchtable FAIL / cathay FAIL (선행 재제출 조건 17/24 PASS, 새 기준·새 F3 없음).**
