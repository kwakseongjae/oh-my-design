# jobplanet 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/jobplanet/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/jobplanet/DESIGN.md`
검증 sibling: `web/references/jobplanet/.verification.md` — `find web/references/jobplanet/.verification.md`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Jobplanet-authored or a separately published UI specification`을 요구한다. 기존 34건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 34 / 원장 34. 숫자는 맞았으나 Scope ¶2 `:11` 한정이 trustworthy / compare-at-a-glance / information-architecture-over-spectacle만 이름하고, 같은 단락 앞의 bright data-dense / flat-scannable / confident-spring-green 읽기를 빠뜨렸다. 34는 과소가 아니라 인접 한정의 범위가 좁았다(icook형).

## 수정 목록 (18건)

### B2a — 인접 한정 범위 확장 (본문 1건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Experience Scope ¶2 | "reads like a bright, data-dense information utility rather than a glossy marketing site" / "so content organizes itself into flat, scannable blocks" / "a single confident spring-green"는 세 번째 부류. 같은 단락의 기존 한정은 뒤쪽 atmosphere 세 항만 가리킨다. | 기존 완전형 목록에 세 읽기를 접어 넣음. 발생 수 +0. 줄 수 불변. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 34, `not Jobplanet-authored` 34, `separately published UI specification` 34. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 56, 69, 86, 117, 131, 141, 145, 180, 183, 184, 185, 186, 188, 196, 210, 219, 226, 237, 350, 427, 446, 448, 474, 484, 520, 522, 556.

### E1 — provenance derived 범위 (1건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | `provenance.md` inventory 행 2 | Trustworthy / compare-at-a-glance / information-architecture-over-spectacle만. 본문 `:11`이 이제 앞 세 읽기도 이름한다. | bright data-dense rather than glossy; flat scannable blocks; confident spring-green을 행에 추가. |

헤더 `34` / 데이터 행 **34** at 152–185 유지 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (16건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | YAML identity 행 | `#00c362` provenance 15/31/113. 31은 Freshness 표제, 113은 빈 줄. dest **6** at 15/29/80/87/114/144. | P dest 6. DESIGN dest 14는 맞음. |
| 4 | YAML identity 행 | Favicon slug provenance 17/27. slug URL dest **1** at 17. 27은 `logo.type: favicon`이지 slug가 아님. | slug DESIGN 223 + P 17. type는 223 + 27로 분리. |
| 5 | YAML identity 행 | 잡플래닛 dual: H1/Scope/Content. H1 `# Jobplanet Design System`에 잡플래닛 dest **0** (fitpet형 2차 목적지). DESIGN dest **5** at 9/13/486/492/509. | H1 제거. Scope/Content + identity P 11. |
| 6 | YAML identity 행 | welcome/index와 companies를 한 줄 목록 9/21/22/243/…로 묶음. 22·356은 companies. welcome DESIGN dest **7** at 9/21/243/274/305/337/384. companies dest **3** at 9/22/356. techspace base dest **2** at 9. `/category/product` dest **1** at 9. | URL별 dest로 분리. |
| 7 | YAML metadata 행 | **Verified:** P 41 (빈 줄). Token note P 31 (표제). `live-extract` P 21/68/190. Freshness 33–41. 실측 Verified **40**. Token note **29**. `live-extract` dest **4** at 21/68×2/190. Freshness 표 **33–38**. | 실측 줄·계수로 교체. |
| 8 | YAML family 행 | Family 191–195 (191은 빈 줄). Product stack 181/192 (192에 Roboto 없음). Blog stack 182/194 (194에 fallback 없음). | Family **192–196**. Product stack 181/193. Blog stack 182/195. |
| 9 | YAML typography 행 | `1.5` dest at 63/202/203/207/210/215 (줄만). `1.0` dest at 9/208/210. `grep -o` `1.5` dest **11** (210×6). `1.0` dest **5** (210×3). | dest 11 / dest 5. |
| 10 | YAML components 행 | Token-set use 258/289/**319**/347/368/396/423. `14px / 700` at 256. `16px / 700` at 287. 319는 height. 256·287은 height. | use **320**. fonts dest 2 each at 249/257 · 280/288 · 359/366 · 387/394 · 416/422. |
| 11 | Footer 행 | Conflicts P 43 (빈 줄). Tier 2 61–63 (61 표제, 64 refero 누락). | Conflicts **42**. Tier 2 **63–64**. |
| 12 | §4 행 | Nav extras 387–391. 387은 Font(YAML). | **388–391**. |
| 13 | §8 행 | viewport `1440×900` P 97 (Sibling-only 표제). dest **2** at 76/101. | 76/101. |
| 14 | §10 행 | tone table 477–482. 477은 구분선. | **478–482**. |
| 15 | Opening 행 | 9–11에 Pretendard Variable을 2차 목적지로 적음. 9–11 dest **0** (fitpet형). 첫 착지 **35**. | dest 0 in 9–11, first at 35. `#00c362`는 11 유지. |
| 16 | HTML comment 행 | Inspected URLs and method P 70–76. 70은 Sibling handling 표제. | URLs Surfaces 48–51 · Tier 1 55–57/59. Method **76**. |
| 17 | Sibling 절 | transcript 76–99. 99는 sibling-only 머리글. 전사 본문은 **76–95**. | **76–95**. sibling-only 목록 101–112는 유지. |
| 18 | §1 · Deviations · F1 · F2 · SHA | §1 atmosphere가 확장 전 세 항만. `wc -w` 7,101. worker-close SHA만. | 11의 여섯 읽기. `wc -w` **7,125**. F1에 11 확장. auditor SHA `4d31b8c8022fd79c37ac197f74dafd664cb2295a45486dfdddb3446352d0d2a0`. |

Destination SHA `1d95c654…` → `4d31b8c8022fd79c37ac197f74dafd664cb2295a45486dfdddb3446352d0d2a0` (한정 범위 확장 후). 줄 수 DESIGN `wc -l` **562** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 세 개만 (`Korean job-seekers researching employers, career-movers comparing salaries, HR/employer-branding teams`). 식별자·동기·소속 분류를 만들지 않음. 한정 유지.
- Semantic 역할 행의 원본 use 문장 — `:86` 포괄절이 특성화를 덮음.
- Motion `:155` 커브 생략 — `:145`가 untraceable-curve omission을 이미 이름함.
- Type principles `:214–217` — `:219`가 네 항목을 덮음.
- Brand narrative `:13` — 원본 §11 문장을 source narrative facts로 두고, 토큰 아님 분류에 완전형.
- B3 준수 주장 — `DESIGN.md` 163이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 558은 재진술).
- 2차 목적지 전수: welcome/index DESIGN dest 7 · companies dest 3 · techspace base dest 2 · `/category/product` dest 1 · `#00c362` dest 14 · favicon slug dest 1 · `live-extract` dest 2 · `잡플래닛` dest 5 · `NO.1` dest 4 · `BrainCommerce` dest 3 · `오류가 발생했습니다` dest 1 · `필수` dest 1 · `Kind: non-interactive` dest 1 — 각 DESIGN dest ≥ 1 (fitpet형 0회는 잡플래닛-H1과 9–11 Pretendard뿐, 위에서 정정).
- A1 키 경로: 원본 `tokens.components` 7레코드의 type/bg/fg/radius/padding/height/font/border/active/use가 대응 블록에 **행으로** 있음. `search-input` YAML에 placeholder 없음(Placeholder 행은 §4 값, 키 경로 신설 없음). `nav-link` YAML에 bg 없음. `card-content`에 fg 행 있음. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/jobplanet/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 잡플래닛, NO.1 기업 정보 플랫폼, 바로가기, 더 보기, 오늘의 추천, 커뮤니티 인기글, 782개의 전∙현직자 리뷰, 15개의 채용정보, 기업, 공고, 콘텐츠 검색, 기업 랭킹, 커뮤니티, 채용, 콘텐츠, 연봉, 로그인, 회원가입, 전∙현직자가 직접 평가한 '사내문화가 좋은 기업', 이직러가 꼽은 '네카라쿠배' 중 1위는?, 네카라쿠배, 이직러, 기업 정보, 기업 회원 서비스, 전·현직자, YAML use/font 바이트, §7 Do/Don't, §12 다섯 원칙 문장.
- **관측 기술** — hex · Pretendard Variable / IBM Plex Sans / Roboto / Noto Sans KR · unitless `1.5`/`1.4`/`1.0` · spacing `xs: 4`…`xl: 24` · `full: 9999` · `box-shadow: none` · 5px CTA · 8px chip · 12px card · Primitive types · token-set keys.
- **편집적 해석·인과 판단** — 두 제품 URL을 계약 토큰 표면으로 읽기, tech blog를 editorial-type로 두기, 값의 표면 귀속, bright/data-dense·flat-scannable·confident-green·trustworthy atmosphere, 서사≠토큰, 과제 선정, 청중 그룹 읽기, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화, canvas/on-primary·spacing/shape 키 분리, elevation modern-flat, motion 귀속·커브 생략, 폰트 증거 class, fallback prohibition, type-role keep-both, favicon-as-pointer, applicability, state-record 비부착, layout segmentation, breakpoint system-level, voice/forbidden-register, voice-sample not-complete-guide, byte-exact, unresolved 프레이밍.

세 번째 부류 중 34곳은 착수 시 인접 완전형이 있었고, 그중 1곳(Scope ¶2)은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` `compared` 27 < `candidates` 162. `verdict: PASS`는 대조분 손실 없음이지 카피 전량 보존이 아니다. 손 대조: 발행 라벨 24 + YAML use 7, DESIGN 결손 0. 라틴 발행 카피 `Glassdoor` DESIGN dest 3 / `engineering culture` dest 1 / `NO.1` dest 4 / `BrainCommerce` dest 3 / Pretendard Variable dest 24 / IBM Plex Sans dest 14 — 눈에 띄는 라틴 발행 카피 손실 없음. 고치지 않음.
- **B1.** sibling 전용 `1440×900` / `300px` / `3.35544e+07px` / `이용약관` / `잡플래닛 테크블로그` / `rgb(246,251,254)` / `rgb(9, 9, 11)` / `#F5A623` / `hasJobplanet` DESIGN dest 0. `H1`/`H2`/`h3` DESIGN dest 0 (sibling H1/H2 구조 분류 미승격). 고치지 않음.
- **D2a.** 삭제 행 `provenance.md` 138은 `§13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함)` — 무식별. `김도현`/`이서연`/`박준혁`/`서울`/`판교`/`기업 인사팀`/`developer`/`product manager`/`HR lead`/`switch jobs`/`comparing two offers` DESIGN·provenance dest 0. Audience는 원본 그룹만. 동기·소속 분류 재구성 없음. 고치지 않음.
- **E2d.** 「세 파일 어디에도 없다」형 부재 단언 0. sibling-only 목록은 ledger mention이지 three-file 부재 단언이 아님. `ds.name` 부재는 source frontmatter에 대한 기록. 고치지 않음.
- **A3 참고.** 원본 §1 `warmer, more legible` / `Korean-product-modern` / `de-facto hangul UI font` / `unintimidating` 이 산출 DESIGN dest 0. 발행 카피가 아니라 원본 편집 gloss. 고치지 않음.

AUDIT_DONE fixes=18
