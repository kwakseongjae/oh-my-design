# ollama 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/ollama/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/ollama/DESIGN.md`
검증 sibling: `web/references/ollama/.verification.md` — `find web/references/ollama/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches found`는 0으로 치지 않고, 파일 존재를 `find`로 먼저 확인함.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Ollama-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22. 숫자는 맞았으나 Documentation chrome `:94`에 한정이 없고, Scope `:13`·Semantic `:81`·Spacing `:102`·Font evidence `:132`·Type roles `:167`·Assets `:177`·Capture `:190`·Layout `:408`·Voice `:433`은 인접 한정이 이름하는 판단이 본문 편집 판단보다 좁았다. 22는 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (34건)

### B2a — 인접 한정 (본문 10건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:13` — Scope ¶3 | `rather than replacing the local workflow` / `That evolution is echoed`는 세 번째 부류. 기존 한정은 deliberately direct · restrained · not ornament · closing causal만 이름했다. | 기존 완전형에 local-first-not-replaced와 evolution-echoed-in-pricing를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:81` — Semantic | catalog `primary_color`를 Ink와 안 합치는 것과 pill-input `#6b7280` is not a palette token은 세 번째 부류. 기존 한정은 shared-hex·hairline만 이름했다. | 기존 완전형에 primary_color-unmerged-from-Ink와 `#6b7280` control-local을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:94` — Documentation chrome | docs-chrome 색/`#6f6f6f`/oklab을 그 컨트롤에 두고 gradient token을 안 세운다는 분류는 세 번째 부류. `:81`은 다른 소절이다. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:102` — Spacing | `These are observed values, not a published Ollama spacing scale`는 세 번째 부류. 기존 한정은 YAML unmerge와 `10px 12px`만 이름했다. | 기존 완전형에 observed-cluster-not-a-published-scale을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:132` — Font evidence | `therefore not evidence for the homepage/pricing typography system`과 Apple SF material is not a license는 세 번째 부류. 기존 한정은 class sorting·promotion decision만 이름했다. | 기존 완전형에 두 분류를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:167` — Type roles | unitless ratios와 §3 px를 서로 변환하지 않는다는 판단은 세 번째 부류. 기존 한정은 extra-key unmerge만 이름했다. | 기존 완전형에 keep-both-not-converted를 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:177` — Assets | `Terminal and command language is used as product content, not ornament`는 세 번째 부류. 기존 한정은 simpleicons pointer만 이름했다. `:13`·`:32`는 다른 절이다. | 기존 완전형에 not-ornament를 접어 넣음. 발생 수 +0. |
| 8 | `DESIGN.md:190` — Capture record | `no Primitive type field is attached`는 세 번째 부류. 원장은 이미 이름했는데 본문 한정은 applicability만 가리켰다(원장이 넓은 쪽). | 기존 완전형에 empty-`tokens.components` → no Primitive type을 접어 넣음. 발생 수 +0. |
| 9 | `DESIGN.md:408` — Layout | spacing-not-a-published-scale, cloud-follows-local, 12px/16px confinement, `narrow set of entry points`는 세 번째 부류. 기존 한정은 install-command lead·docs-not-dictating·1440×900만 이름했다. | 기존 완전형에 네 분류를 접어 넣음. 발생 수 +0. |
| 10 | `DESIGN.md:433` — Voice and tone | `direct developer language`는 세 번째 부류. 기존 한정은 concise/action-first와 Do/Don't table만 이름했다. | 기존 완전형에 direct-developer-language를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 23, `not Ollama-authored or a separately published UI specification` 23. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 13, 19, 28, 32, 42, 55, 65, 81, **94**, 102, 110, 118, 124, 132, 151, 167, 177, 190, 408, 415, 433, 467.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 신설을 행으로 안 세면 1:1이 아니다. `#ffffff`의 charcoal-CTA-text 귀속도 원장 same-hex 문장에 없었다(krafton형, E1).

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | `provenance.md` inventory 헤더 | **22**. 본문이 이제 23이다. | **23**. 데이터 행 169–191. |
| 12 | `provenance.md` inventory | Documentation chrome `:94` 한정이 원장에 없음. | 행 신설 1. |
| 13 | `provenance.md` Scope `:13` · Semantic `:81` · Spacing `:102` · Font `:132` · Type roles `:167` · Assets `:177` · Layout `:408` · Voice `:433` | 본문이 이제 이름하는 판단을 행이 빼거나 좁게 적음. | 여덟 행을 본문 한정에 맞춤. |
| 14 | `provenance.md` same-hex `:142` | `#ffffff`를 canvas와 docs fill만 이름함. charcoal Download/Hero CTA text는 다른 자리다. | charcoal CTA text 귀속을 병기. |
| 15 | `provenance.md` Evidence-class `:162` | `§12`·`§7`·`§11`만 적혀 본문 23건보다 좁음. | 본문 한정 전 범위를 가리키고 inventory가 1:1이라고 닫음. |
| 16 | `provenance.md` Omission | §13 삭제 행이 원형 라벨을 안 적음(laftel 경계: 라벨은 copy-loss 처분 근거로 **적는다**). | `Local-model developer` / `Integration builder` / `Cloud-scale team member`를 disposition mention으로 적고, use가 아니라고 구별함. 이름·나이·도시는 원본에도 없어 적지 않음. |
| 17 | `provenance.md` Capture `:190` | Primitive type을 원장만 이름하고 본문 한정은 안 이름함(넓은 쪽). | 본문 `#8`과 맞춰 1:1. 원장 행 문구는 유지. |
| 18 | `migration-log.md` B2a 절 | 22=22 / P 169–190. | 23=23 / P 169–191. Heading P 165. |

헤더 `22` → `23` / 데이터 행 **23** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (16건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김. 본문 한정 추가 뒤 A5a·F2 dest 표를 재실측함(lablup형 방지).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 19 | YAML identity | `https://ollama.com` DESIGN dest **4**. `grep -oF`는 `:9`×3 + `:22` + `:175` = **5** (한 줄 3회는 `grep -c`면 1). | dest **5**. |
| 20 | YAML `primary_color` | `#000000` DESIGN 7 / P 4. Catalog 지목을 `:83`(Ink 행)에 둠. 실측 DESIGN **8** / P **5**, 이름은 `:84`와 `:81` 한정. | 8 / 5 · `:81`/`:84`. |
| 21 | YAML colors | 같은 `#000000` 횟수 7/4. `#ffffff` charcoal-CTA-text 귀속 없음. | 8/5. same-hex 세 자리. |
| 22 | verification conflicts | "Conflicts unresolved: none" at P **37**. 실측 P **36**. | **36**. |
| 23 | Footer | SF Pro vs Tier 2 문장을 P **39**에 있다고 적음. 실측 P **38**. | **38**. |
| 24 | §1 July 2026 | DESIGN 4 / P 3. 실측 DESIGN **5** / P **5**. Voice `:433` 한정이 2차 dest인데 로그에 없음(fitpet형 위험). | 5/5. 이중 dest Scope + Voice. |
| 25 | §2 `#6b7280` | dest를 `:317`만 적고 DESIGN 2. 실측 DESIGN **3** at `:81`/`:90`/`:317`. | 세 자리 (E2a). |
| 26 | §2 docs chrome | `#6f6f6f` DESIGN 2 · oklab DESIGN 2 · `No gradient token is asserted` DESIGN **2**. 실측 3 / 3 / **1**. 2는 named-gaps의 `a gradient token`을 같은 문자열로 센 것. | 3 / 3 / 1. |
| 27 | §3 fonts | `Inter` DESIGN 3 each · `FontFaceSet` DESIGN 2. `grep -oF Inter` DESIGN **11** (`Interactive` 8셀). FontFaceSet DESIGN **1**. | typeface Inter 3 / `grep -oF` 11. FontFaceSet 1 / P 3. |
| 28 | §3 command UI | `14px / 400 / 22.75px` DESIGN 2. 실측 DESIGN **1** / P **1** (표 칸은 문자열이 쪼개짐). | DESIGN 1 / P 1 (E2a). `22.75px` DESIGN 2는 유지. |
| 29 | §10 `Download` | P **1**. 실측 P **3**. A5a 표도 1. | P 3, A5a 표 재실측. |
| 30 | §13 삭제 행 | 원형 라벨을 안 적고 `Local-model developer` DESIGN 0 / P 0으로 부재를 단언함. 라벨은 copy-loss 처분 근거로 적어야 하고, 부재 단언 행이 그 문자열을 담으면 E2d 형태다. | 세 라벨을 삭제 행에 적음. 부재 단언 삭제. mention ≠ use. |
| 31 | §15 | `No duration, easing, or motion token is asserted` DESIGN 2. 실측 대문자 문자열 **1** (`:122`). `:124`는 소문자 재진술. | DESIGN 1. B3 전문은 `:124`에 실재(E2c 유지). |
| 32 | D1/D2 절 | `Local-model developer` DESIGN 0 / P 0. | 라벨 부재 단언을 지우고 처분 행 포인터만 남김. |
| 33 | 고유 표현 대조 | persona role labels를 "deleted, unidentifying"로만 적음. | 본문 0, 처분 행에만 명명. |
| 34 | Hashes | 워커 SHA `90589a26…` / `d947036c…`. | DESIGN `ff1bb196e72fd07c3e5361fed7d136e8c936a2f56381b8ad973a1622a7db539e` · provenance `1b70febd257485af0ca70b4c48a06357d5173ec5c42ba307343de47d70148983`. |

Destination SHA 워커본 → 감사본. 줄 수 DESIGN 476 불변(한정은 기존 줄에 접어 넣음).

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §11 문구 `developers should be able to run` / `on their own machine`만. 페르소나 동기·소속 분류를 재구성하지 않음. `Jeff and Michael`은 원본 §11 1차 서사이지 페르소나 식별자가 아니다.
- State-applicability Reason 셀 — C 영역, 이 감사의 수정 금지. Capture `:190` 한정이 판결·이유를 덮음.
- B3 준수 주장 — `DESIGN.md:124`가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트·single-curve 배제를 전문으로 담음 (E2c 유지).
- 2차 목적지 전수: `https://ollama.com` DESIGN dest 5 · `Start local. Scale with cloud.` dest 3 · `Get started` dest 2 · `Download` dest 6 · `The easiest way to build with open models` dest 1 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- 원본에 없는 모션 토큰을 `intentionally omitted`으로 둔 것 — 원본 §15가 토큰을 안 세움. 합성하지 않음(kmong 관례).
- `1440×900`·duration 부재를 `:<n>` 인용+역할로 둔 것 — 값이 본문에 있다. T2 관례, 되살리지 않음.

## 범위 밖 관찰

- **A1 키 경로.** 원본 YAML `tokens.components`는 `{}`. 복원할 `tokens.components.<id>.<field>` 행이 없다. `tokens.colors.*` / `tokens.typography.body-sm|body|nav|section` / `tokens.spacing.*` / `tokens.rounded.full` / `tokens.shadow.none`는 산출에서 해당 블록의 행·YAML 경로로 남아 있다. 값 grep만으로 통과시킨 구멍은 이 브랜드에서 안 열렸다.
- **A5a.** 게이트 `compared` 0 / `candidates` 110 (`compared < candidates`). 발행 카피 손 대조 9행(`Start local. Scale with cloud.` · `The easiest way to build with open models` · `Your model. Your machine. Your data.` · `Get started` · `Download` · 엔트리 리스트 · `Sign in` · `Free, Pro, Max` · `announced Team`)은 본문 dest ≥ 1. 라틴 카피 손실은 눈에 띄지 않음. `verdict: PASS`는 바늘 0개를 대조한 결과일 뿐 카피 보존의 증거가 아니다.
- **B1 sibling 승격.** sibling 전용 값(`score: 71`, `componentTypes: 4`, `componentVariants: 23`, `interactionKinds: 0`, `letterSpacing: -1.2px`, docs-card `lineHeight: 28px`, input `rgba(0, 0, 0, 0)`, `Terminal-first, monochrome simplicity.`, `surface-2::h1`)은 DESIGN dest 0. 본문의 `28px`는 원본 §3 Product navigation line-height이지 sibling docs-card 값이 아니다. `h1` / `portal H2` 구조 분류 승격 없음.
- **D2a 본문.** 이름·나이·도시 원본 0 / 산출 0. 페르소나 동기(`wants to install`, `coding agent`, `without treating a remote service as the default`) 산출 0. 소속 분류 신규 표현 없음. Primary tasks는 캡처 표면·라벨이지 동기 재수록이 아니다.
- **E2d.** 수정 후 처분 행은 라벨을 mention으로 적고 부재를 단언하지 않는다. D1의 `native application` DESIGN 0 / P 0은 그 두 파일에 대한 횟수이며 "세 파일 어디에도 없다"가 아니다.
- **같은 hex 다른 역할.** `#ffffff`는 canvas(페이지·inverted pricing CTA), charcoal CTA text, docs-search/docs-card background 세 자리. 분리는 정상이고, 원장 same-hex 문장을 실제에 맞췄다(`#14`). `#000000`은 Ink와 catalog `primary_color`. `#262626`은 header download와 hero CTA(패딩·웨이트가 다름).

AUDIT_DONE fixes=34
