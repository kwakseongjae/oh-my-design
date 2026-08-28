# Hogangnono 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/hogangnono/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/hogangnono/DESIGN.md`
검증 sibling: `web/references/hogangnono/.verification.md` — `find web/references/hogangnono -type f`와 `test -f web/references/hogangnono/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 없음. B2a는 toss-form 완전형: `derived editorial implementation inference` / `not Hogangnono-authored` / `separately published UI specification`.

착수 실측: 본문 완전형 27 / 원장 27. 좁은 쪽은 아니었으나 본문에 인접 한정이 없는 편집 문장 4개가 있어 27이 과소였다.

## 수정 목록 (15건)

### B2a — 인접 한정 신설·범위 확장 (본문 5건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:176` — Motion / Photoswipe | "It is not a Hogangnono token-set easing step"는 귀속·슬롯 분류. `:157` 한정은 기록을 motion contract로 읽는 것만 가리킨다. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |
| 2 | `DESIGN.md:204` — Font evidence Official distributed | "No Hogangnono-exclusive distributed type family was verified"는 증거 종류 해상. 같은 표의 Official product-use·Declared-only·License는 칸 안 한정이 있는데 이 칸만 없음. | 같은 칸에 완전형 한정 신설. 새 줄 아님. |
| 3 | `DESIGN.md:207` — Font evidence Outside these captures | "sits outside this contract"는 계약 경계 판단. `:202`는 no-published-type-token만 가리킨다. | 같은 칸에 완전형 한정 신설. 새 줄 아님. |
| 4 | `DESIGN.md:464` — Layout YAML scale restatement | "Those restatements are the YAML scales, not the 3px / 8px / 10 px component radii"는 Spacing/Shape와 같은 재료이나 Layout 칸이라 `:123`·`:136`이 인접이 아님. | 같은 단락 끝에 완전형 한정 신설. 새 줄 아님. |
| 5 | `DESIGN.md:229` — Type roles | 기존 한정이 YAML 단수 ↔ §3 범위만 가리켰다. `:227`의 "parenthetical 40px … not a replacement of the YAML ratio 1.33"은 세 번째 부류인데 한정이 이름을 안 붙임. | 기존 완전형에 40px/1.33 잔여를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 31, `not Hogangnono-authored` 31, `separately published UI specification` 31. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 40, 44, 54, 66, 81, 123, 136, 140, 157, 176, 202, 204, 205, 206, 207, 214, 229, 240, 252, 441, 455, 464, 468, 473, 494, 500.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | `provenance.md` Portable derived-editorial scope | 착수 원장 27행 = 본문 27. 본문에 한정 4건을 신설하면 원장이 좁아진다(fastcampus형). Type roles 행은 40px/1.33을 적지 않음. | 원장 27→**31**. 행 신설 4(Motion/Photoswipe `:176` · Official distributed `:204` · Outside-captures `:207` · Layout YAML `:464`). Type roles 행 서술 확장. 헤더 `31 = 31`. |

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML identity 행 | `#584de4` 목적지 `dest 20` — 20은 Primary tasks 다음 빈 줄이고 hex가 없다. 첫 휴대 줄은 **11**. `grep -oF` dest **19**. fitpet형 허위 2차 목적지. | `DESIGN.md` 11 + Foundations/components, dest 19. 20은 빈 줄이라고 적음. |
| 8 | YAML colors 행 + §2 행 | 범위 `79–105` — danger 행은 **106**. | 79–106. |
| 9 | YAML spacing/shape 행 | `tokens.spacing.md: 12` dest 3→**2**; `rounded.lg: 12` 4→**3**; `spacing.xs: 4` 4→**3**; `rounded.sm: 4` 4→**3**; `spacing.base: 16` 2→**1**; `spacing.xxl: 48` 2→**1**. Layout 재서술을 463으로 적음 — 463은 빈 줄, 본문은 **464**. card ≠ rounded.md를 412로 적음 — 그 문장은 **411**(412는 C4). | 실측 횟수·줄. 464. 411. |
| 10 | §3 행 | 204·207 신설 한정과 229 확장을 적지 않음. Official product-use/Declared-only/License만 적음. | 202/204/205/206/207/229 dest 반영. |
| 11 | §5 행 | 범위 453–463 — YAML 재서술·새 한정은 **464**. | 453–464. 464 한정 dest 추가. |
| 12 | §7 Do's 행 | 범위 52–61 — 일곱 번째 항목(`#f3f4fc` tint)은 **62**. | 52–62. |
| 13 | §15 Motion 행 | 176 Photoswipe 슬롯 한정을 적지 않음. 157만 가리킴. | 157 계약 읽기 + 176 슬롯 읽기. |
| 14 | §15 무출처 커브 행 · F2 | F2가 `184 and 538`을 같이 "전문"으로 묶음. 184는 다섯 종류+게이트+부분확인 배제. 538은 다섯 종류+게이트만, 부분확인 문장 없음. | 184를 전문, 538을 부분으로 나눔 (E2c). |
| 15 | §12 · Deviations · F1 · F2 | 로그가 B2a 27=27, inventory 27을 현재 상태로 적음. 본문·원장 31. | F1 31줄(176·204·207·464 추가, 229 접기) · inventory 31 · F2 `B2a 31=31`. worker-close 27은 이관 시점 측정으로 남기고 auditor 31을 병기. |

Destination SHA `0e9c01a4…` → `627667194272f0d0d1c63afe1984e9e1a66b4994a3a351492078c12d384b960e` (한정 신설·확장 후). 줄 수 DESIGN 538 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss-form 적용(발행 1차 DS 없음, v12 전제 주석).
- Elevation "neither replaces the other" / card "stay on their own writings" / Filter Chip·FAB 로컬 반경 재서술 — A1 값 보존, 브랜드 해석 아님. Shape `:136`이 로컬 반경 분리를 이미 한정함.
- B3 준수 주장 — `DESIGN.md` 184가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음 (E2c 유지, 538은 축소).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/hogangnono/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 호갱노노, Korea's #1 … map-first, data-honest…, 확인하기/비교하기/문의하기, 네 줄 상태 카피, 창립 2015 / Shim Sang-min / Zigbang 2018 / 2 million / 사명 문장, YAML `use`/`font`.
- **관측 기술** — 라이브 hex·치수·Pretendard·`Primitive type`, unitless `1.33`/`1.3`, `full: 9999`, Photoswipe `cubic-bezier(0.4, 0, 0.22, 1)`, 표면 여덟 행.
- **편집적 해석·인과 판단** — 표면 부착·App Store 비토큰, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 팔레트 역할 수식, 키 경로 분리, Photoswipe≠token-set step, 배포 서체 부재·계약 밖 타이포, kind/applicability, 보이스 읽기.

세 번째 부류 중 27곳은 착수 시 인접 완전형이 있었고, Photoswipe 슬롯·Official distributed·Outside-captures·Layout 재서술 4곳은 한정이 없어 그 자리에 붙였고, Type roles 1곳은 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 31 | 1 | 2 |
| `not Hogangnono-authored` | 31 | 2 | 2 |
| `separately published UI specification` | 31 | 2 | 2 |
| inventory 데이터 행 | — | 31 | — |

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 9 / candidates 146 (6.2%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(호갱노노 / 호갱 / 조건에 맞는 매물이 없어요 / 데이터를 불러오지 못했어요 — 다시 시도해 주세요 / 공식 거래 기록이 없어요 / 문의가 전송되었어요 / 확인하기 / 비교하기 / 문의하기 / Korea's #1 apartment real-estate transparency platform — map-first, data-honest, free of paid-listing distortion. / advancing the real estate industry through IT by providing honest information / no more being a fool / YAML `use` 7종): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다.
- **B1.** sibling 전용 `line-height: 48px` / `line-height: 49px` / `#0000003d` / `Apple SD 산돌고딕 Neo` / `나눔고딕` / `(주)호갱노노` / `1.09 MB` / `css-c4krkq` / `.btn-basic.fill` / `--gray900` / `#FFF` / `founded Seoul`: DESIGN 0 / provenance mention. 본문에 sibling 구조 분류("h3다", "섹션 표제다", "line 429")를 사실로 넣은 문장 없음. 원본 `focus-visible` 0; 이관본은 applicability 칸 이름으로만 쓰고 행에 색값을 붙이지 않음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 인원·필드 종류만 적고 이름·나이·도시를 열거하지 않음. 식별자 `지영`/`민준`/`수진`/`재원`/`순자` 및 동기 문구(`information asymmetry` / `school-zone registration` / `non-resident-ratio` / `rural property`) DESIGN/provenance/migration-log 0. Primary tasks는 검색·실거래가·상세 카드·문의 전송 — 페르소나 동기 승격 없음.
- **E2d.** 부재 단언은 dest 0 / provenance 0으로 분모를 닫고, 그 행이 항목을 나열한 채 "세 파일 어디에도 없다"고 하지 않음. `ds.type` / `measures 1440px` / `cubic-bezier(0.4, 0.0, 1, 1)` / sibling-only / 페르소나 식별자는 로그 mention일 뿐 use가 아니다.

AUDIT_DONE fixes=15
