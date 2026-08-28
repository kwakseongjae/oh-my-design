# ikala 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/ikala/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/ikala/DESIGN.md`
검증 sibling: `web/references/ikala/.verification.md` — `find web/references/ikala -type f`와 직접 경로로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o` / `grep -oF --` `<패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not iKala-authored or a separately published UI specification`을 요구한다. 기존 35건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 35 / 원장 35. 숫자는 맞았으나 Shape `:137` 한정이 키 경로 분리만 이름하고 Standard 8px workhorse 판단을 빠뜨렸다. 35는 개수로는 1:1이었고, 이름하지 않은 세 번째 부류 1건이 있었다.

## 수정 목록 (8건)

### B2a — 인접 한정 (본문 1건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:137` — Shape | "the workhorse"는 세 번째 부류. 같은 단락의 기존 한정은 키 경로 분리만 가리킨다. Distinctive traits `:34`는 목록 안의 읽기만 덮는다. | 기존 완전형에 Standard 8px workhorse 판단을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not iKala-authored` 35, `separately published UI specification` 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 30, 34, 47, 58, 71, 88, 114, 124, 137, 150, 154, 190, 192, 193, 194, 195, 201, 216, 226, 233, 244, 326, 375, 386, 398, 400, 418, 423, 458, 460, 494.

### E1 — provenance derived 범위 (1건)

이름하지 않은 본문 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | `provenance.md` Shape 행 | `full: 9999` 경로 분리만. 본문 `:137`이 이제 workhorse도 이름한다. | Standard 8px workhorse를 행에 추가. |

헤더 `35` / 데이터 행 **35** 유지 (E1 1:1).

### E2 / E2a — 로그 목적지 (6건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | YAML `tokens.note` 행 | 사실 착지를 `DESIGN.md` 9/11/37/92/98/199로 적음. 9는 Scope URL만 (`#061232` / `Get in Touch` / `Noto Sans TC` 없음). | **11/37/92/98/199**. |
| 4 | YAML spacing/shape 행 | `tokens.rounded.full: 9999` dest 4 at 135/137/396/497. `grep -oF` dest **3** at 135/137/497. 396은 `full: 9999`. | dest **3** (135/137/497). |
| 5 | §13 행 | Disposition at `provenance.md` 118. 118은 공백. 페르소나 처분 행은 **123**. | **123**. |
| 6 | §15 curve 행 | Ledger at `provenance.md` 119–121. 119는 안내 문장. 곡선 생략 행은 **124–126**. | **124–126**. |
| 7 | Sibling handling | sibling-only 전사 `provenance.md` 86–92. 86은 공백. 항목은 **87–93**. | **87–93**. |
| 8 | Sibling handling DESIGN 0 목록 | `1440×900`·`Wei-Chen`을 sibling-only로 적음. sibling `find` 후 `grep -oF`: `1440` 0 · `Wei-Chen` 0. `Home`은 sibling 1 / DESIGN 0. | sibling-only 바늘만: `95.67px` / `50.4px` / `kolradar.com` / `Home`. 식별자 바늘은 삭제 처분 행에 심지 않음 (D2a). |

Destination SHA `b7c8dd31…` → `bc7e06196b6999bc1675ae6c5eddf830812e67dfb82e3b5f7bd45e14371044f4` (Shape 한정 확장 후). 줄 수 DESIGN **498** 불변. `wc -w` 6,659 → **6,666**.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 여섯 항목·Do/Don't 본문 — 원본 §12/§16 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 세 개만. 페르소나 동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic `:88` — "Where a line also characterizes a value" 포괄절이 아래 역할 해설(gravitas / interactive signal / comfortable long-form / blue-tinted divider)을 덮음. 예시를 늘리지 않음.
- Motion `:154` — source가 easing curve에 method를 안 붙인다는 점을 이름하고 durations/roles/signature motions/rules를 덮음. `:165` 생략은 그 판단의 시행. `:173` B3 게이트는 규칙집 승격 조건.
- Governance 일반 문구 — 대체물이 아님(B2a). 한정 미추가.
- B3 준수 주장 — `DESIGN.md` 173이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 496은 재진술).
- 2차 목적지 전수: standalone `https://ikala.ai` DESIGN dest **3** at 9/154/250 · `https://ikala.tw` dest **2** at 9/154 · `#061232` dest **8** · favicon slug dest **1** at 230 · `Get in Touch` dest **10** · `Kind: non-interactive` dest **2** — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- A1 키 경로: 원본 YAML `tokens.components` 6레코드의 type/bg/fg/radius/padding/height/font/active/border/shadow/hover/use가 대응 블록에 **행으로** 있음. `button-primary.fg #ffffff` → Primary Text. `card.hover` → Feature Card Hover. `nav-link.active` → Token-set active. `link-inline.fg #2563eb` → Text. `section-title.fg #333333` → Color. icook형 필드 소실 0. 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/ikala/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — iKala, 2015, Sega Cheng, Data → Intelligence → Impact, Total AI Transformation Solutions and Services, Get in Touch, Contact, Try it Now, Manufacturing, Retail, Finance, iKala Commerce, KOL Radar, learn more, Google Cloud partner.
- **관측 기술** — hex · `Noto Sans TC` / `Noto Sans` · unitless `1.14`/`1.40`/`1.00`/`1.55` · `4`/`8`/`12`/`16`/`24`/`30`/`48`/`80` · `9999` · `0px 0px` glow · YAML `use` · `~58px` / `20px 30px`.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 과제 선정, 특성 묶기, 원칙·Do/Don't, 팔레트 슬롯, spacing/shape 키 분리와 8px workhorse, elevation/motion 게이트, 폰트 증거 class, no-substitution, type-role keep-both, favicon pointer, applicability, layout whitespace·image, voice 해설, byte-exact, unresolved 목록.

세 번째 부류 중 35곳은 착수 시 인접 완전형이 있었고, 그중 1곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** / candidates **155**. 이관본 130개 평균 4.4%보다 낮고, `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 대조 발행 라틴(Get in Touch / Contact / Try it Now / Data → Intelligence → Impact / Total AI Transformation Solutions and Services / Manufacturing / Retail / Finance / iKala Commerce / KOL Radar / learn more)은 DESIGN dest ≥ 1. 발행 라틴 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 `Home` / `95.67px` / `50.4px` / `kolradar.com` / `disable-http2` / `1500-element` / `document.title` / rgb() / `h3` 분류 — DESIGN dest **0**. 구조 관측(`h3다`) 침투 없음.
- **D2a.** 삭제 처분 행은 무식별(`§13 페르소나 4인`). 본문 식별자·동기(`benchmark scores` / `vet creators` / `hype startup` / `long reports readable`)·소속 분류 dest **0**. 원본에 없는 새 소속 표현 없음.
- **E2d.** 부재 단언은 `DESIGN.md` 0으로만 적혀 있고, 그 문자열이 단언 파일 자신을 분모에 넣는 「세 파일 어디에도 없다」 형태가 아님. 이 브랜드 0.
- **`1.00` dest 5.** 로그가 line-height `1.00` dest 5로 적음. `grep -oF '1.00'`은 `-1.00` tracking 2회를 포함. 실제 line-height `1.00`은 dest **3**. 부분문자열 과대. 고치지 않음(보고만).

AUDIT_DONE fixes=8
