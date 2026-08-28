# Hwahae 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/hwahae/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/hwahae/DESIGN.md`
검증 sibling: `web/references/hwahae/.verification.md` — `find web/references/hwahae -type f`와 `test -f web/references/hwahae/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS가 있다. Hwahae product-design team이 공식 테크 블로그에 HDS(`hds-`) 구축을 공개했다. B2a 예문 전제(v12)가 깨지므로 toss형 닫힘을 요구하지 않는다. 기존 30건은 `not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (\`hds-\`) construction documented on the official tech blog`로 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 30 / 원장 30. 숫자는 맞았으나 Forbidden register 인과·canvas/on-brand 키 비병합·Recorded unresolved 프레이밍이 세 번째 부류인데 인접 한정이 없었다. 30은 과소였다.

## 수정 목록 (18건)

### B2a — 인접 한정 신설·범위 확장 (본문 6건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Experience / Scope ¶1 | "Korea's dominant cosmetics-review and ingredient-analysis platform"은 시장 위치 편집 판단. 같은 단락의 기존 한정은 토큰 표면·값 귀속·DS-post-not-tokens만 가리킨다. | 기존 완전형에 dominant-platform 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:11` — Experience / Scope ¶2 | 문단 첫 인과("so the imagery … chrome stays quiet")가 한정 목록에 없었다. hex·패밀리·반경은 관측. | 기존 완전형 목록 앞에 imagery-carries-color / chrome-stays-quiet를 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:119` — Semantic color / On-Brand | "Same hex as Canvas White; the keys stay unmerged."는 키 경로 편집 결정. `:88` 한정은 값의 성격 읽기만 가리킨다. | 같은 줄 끝에 완전형 한정 신설. 새 줄 아님. |
| 4 | `DESIGN.md:201` — Family | `:200` "Two surfaces, two fonts … They never mix"는 편집 재서술. `:201` 한정은 fallback prohibition만 가리킨다. | 기존 완전형에 two-surfaces-never-mix 재서술을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:513` — Content / Forbidden register | "Hwahae's whole premise is decoding, so copy explains rather than dazzles"는 인과. `:472`는 tone table, `:515`는 byte-exact 규칙만 가리킨다. | 같은 줄 끝에 완전형 한정 신설. 새 줄 아님. |
| 6 | `DESIGN.md:549` — Recorded unresolved | "These are named values, not permissions to invent"는 목록의 권한 프레이밍. 인접 한정 없음. | 같은 줄 끝에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33, `not Hwahae-authored` 33, `separately published UI specification` 33. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 47, 58, 71, 88, 119, 123, 138, 148, 152, 189, 191, 192, 193, 194, 201, 215, 224, 232, 243, 423, 437, 449, 451, 472, 513, 515, 549.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | `provenance.md` Derived editorial inventory | 착수 원장 30행 = 본문 30. 본문에 한정 3건을 신설하면 원장이 좁아진다(fastcampus형). 행 1·2·20은 확장된 읽기를 적지 않음. | 원장 30→**33**. 행 신설 3(On-Brand `:119` · Forbidden register `:513` · Recorded unresolved `:549`). 행 1·2·21 서술 확장. 헤더 `33 = 33`. |

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML metadata 행 | **Verified:** `provenance.md` 39 — 39는 Conflicts 빈 줄 다음. 실제는 **37**. | **37**. |
| 9 | Footer 행 | Conflicts `provenance.md` 41 — 실제는 **39**. | **39**. |
| 10 | YAML spacing/shape 행 · §5 행 | `50%` dest 3 (136/138/447) — `grep -oF '50%'` DESIGN **5**. 11 Scope 기하와 552 Unresolved가 빠짐. | dest **5** (11/136/138/447/552). |
| 11 | YAML identity 행 | `#00d5ce` P 15/63/65 — `grep -oF '#00d5ce'` provenance **6**. 94/102/152가 빠짐. | 15/63/65/94/102/152. DESIGN dest 8은 11/35/52/61/92/148/229/250과 일치. |
| 12 | YAML metadata 행 | `components_harvested` P 22/194 — inventory 삽입 후 Proof 행이 **197**. | 22/197. |
| 13 | §11 행 | narrative-not-token `provenance.md` 196 — 삽입 후 **199**. | 199. |
| 14 | §12 행 | inventory `160–189 (30 rows)` — 실제 데이터 행은 `160–192` 33행. | **160–192 (33)**. |
| 15 | Sibling 절 | sibling-only `98–105` — `hds-absolute hds-left-12`가 106. | **98–106**. 클래스명 항목을 목록에 추가. |
| 16 | §2 행 | 119 키 비병합 한정을 적지 않음. 88만. | 119 dest 추가. |
| 17 | §10 행 | 513을 "forbidden register 513"으로만 적고 한정이 472에 있다고 읽힘. 472는 tone table. | 513에 자체 완전형이 있다고 갈라 적음. |
| 18 | Deviations · F1 · F2 · SHA | B2a 30=30, inventory 30. 본문·원장 33. | inventory **160–192 (33)**. F1 33줄(119·513·549 추가, :9·:11·:201 접기). F2 `B2a 33=33`. worker-close SHA `80ac7377…` 유지, auditor `10d6e6906076f080d58b35554e600a957698cbe0742e056508373aa8ec68eb4c`. |

Destination SHA `80ac7377…` → `10d6e6906076f080d58b35554e600a957698cbe0742e056508373aa8ec68eb4c` (한정 신설·확장 후). 줄 수 DESIGN 553 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 여섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. HDS 구축을 명시한 닫힘(발행 1차 DS 있음, v12 전제 주석).
- Spacing / Shape의 "not merged" — A1 값 보존, 브랜드 해석 아님. 인접 완전형 있음.
- Official product-use "do not publish a universal current typography token" — 같은 칸에 완전형 있음.
- B3 준수 주장 — `DESIGN.md` 170이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음 (E2c 유지, 551은 다섯 종류+게이트만).
- `화해` identity dual 9/13/490 — dest 12의 부분집합. identity 슬롯 지정이지 dest 과소 주장 아님.
- `kind: non-interactive` 소문자 DESIGN 0. 로그 dest는 `` `Kind: non-interactive` dest 3 `` — 실측 3.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/hwahae/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 화해, 2013, 화장품 정보 비대칭, 샘플체험, January 2023, HDS/`hds-`, Foundation→Components→Templates, Figma, Storybook, TestApp, 발행 한글 라벨 22종, YAML use/font 바이트.
- **관측 기술** — 라이브 hex·치수·Pretendard Variable / Spoqa Han Sans·`Primitive type`·unitless `1.44`/`1.33`/`1.5`·`full: 99999`·`50%` circle.
- **편집적 해석·인과 판단** — dominant-platform, 두 페이지를 계약 표면으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 키 비병합, 증거 class 해상, kind/applicability, 보이스·Forbidden-register 인과, unresolved 프레이밍.

세 번째 부류 중 30곳은 착수 시 인접 완전형이 있었고, On-Brand·Forbidden register·Recorded unresolved 3곳은 한정이 없어 그 자리에 붙였고, Scope ¶1 dominant·¶2 imagery-carries-color·Family two-surfaces는 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 33 | 0 | 2 |
| `not Hwahae-authored` | 33 | 0 | 3 |
| `separately published UI specification` | 33 | 0 | 3 |
| inventory 데이터 행 | — | 33 | — |
| `Kind: non-interactive` | 3 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 1 |
| `50%` | 5 | — | — |
| `#00d5ce` | 8 | 6 | — |
| `loading \| applicable` | 0 | — | — |
| `332px` | 0 | — | — |
| `카테고리 전체` | 0 | — | — |
| `화해 블로그` | 0 | — | — |

`provenance.md`의 derived 0은 원장이 한정 전문을 반복하지 않고 위치·읽기만 적기 때문. mention(로그·원장 색인)이지 use(본문 한정)가 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` `compared` 17 < `candidates` 204. 워커 손 대조 발행 라벨 22/0/0 + latin-copy-audit 0/17. 발행 라틴(`decoding cosmetics` · `experiment fast, validate` · `Tech` · `honest trust signal` · `dark-pattern urgency`) DESIGN dest 각 1. 눈에 띄는 발행 라틴 손실 없음. `verdict: PASS`는 대조분 무손실이지 카피 전수 보존이 아니다. 고치지 않음.
- **B1.** sibling 전용 `332px` / `카테고리 전체` / `0px 0px 16px 16px` / `#00d6cf` / `#00dad4` / `#00d7d0` / `화해 블로그` / `hds-absolute` DESIGN dest 0. sibling H3 분류(`homepage H3 "카테고리 전체"`, blog H3 `"추천 아티클"` / `"Tech"`)를 본문이 사실로 승격하지 않음 — `Tech`/`추천 아티클`은 원본 §3 Notes·발행 카피로 이미 있음. 값·분류 침투 0.
- **D2a.** 삭제 처분 행은 무식별(`§13 페르소나 3인 (이름·나이·도시 포함)`). `이서연`/`박지호`/`최유진`/`서울`/`부산`/`경기`/`acne-prone`/`Distrusts brand marketing`/`trial-and-error`/`affordable products` — DESIGN / provenance / migration-log dest 0. Audience는 원본이 독립 기록한 그룹 `Korean beauty shoppers comparing ingredients and reviews`만. 소속 분류 재구성 없음.
- **E2d.** 부재 단언이 자기 분모에 그 문자열을 넣는 행 없음. sibling-only 목록은 "source body does not / kept here and not promoted"이지 "세 파일 어디에도 없다"가 아니다.

AUDIT_DONE fixes=18
