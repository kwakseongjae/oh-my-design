# Hyundai Card 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/hyundaicard/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/hyundaicard/DESIGN.md`
검증 sibling: `web/references/hyundaicard/.verification.md` — `find web/references/hyundaicard -type f`와 `test -f web/references/hyundaicard/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI DS 없음. Design Library는 `ds.type: brand` 문화 공간. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Hyundai Card-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22. 숫자는 맞았으나 세 번째 부류 문장 7곳이 인접 한정에 이름이 없거나 한정이 없었다. 22는 과소였다.

## 수정 목록 (18건)

### B2a — 인접 한정 신설·범위 확장 (본문 7건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:13` — Experience / Scope ¶3 | "broader than one web page" / "clearest continuity thread" / "not merely historical"는 인과·순위·분류 판단. 같은 줄의 기존 한정은 founding-and-typeface narrative ≠ tokens만 가리킨다. 연도·technology-company·variable-font는 원본 §11 사실. | 기존 완전형에 세 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:77` — Semantic color | "so neither is promoted as a universal brand primary"는 승격 거부 판단. 기존 한정은 pairing / 대소문자 / inverse 경로만 가리킨다. | 같은 줄 완전형에 universal-primary 거부를 접어 넣음. |
| 3 | `DESIGN.md:87` — Semantic color / DIVE omission | "cannot describe the current product token set"는 관측 부재에서 토큰 경계로 가는 인과. `:77`과는 표가 가로막아 인접라 할 수 없다. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |
| 4 | `DESIGN.md:106` — Elevation | "This supports a flat default for the retained components only"는 범위 판단. 기존 한정은 다음 문장(never-uses-shadows)만 "that sentence"로 가리킨다. | 같은 줄 완전형에 flat-default-for-retained를 접어 넣음. |
| 5 | `DESIGN.md:130` — Font evidence | Live computed "only verified branded family"와 System use "not a substitute / not a brand-font claim"은 증거 class 해상. 기존 한정은 Official product-use / Official distributed / Declared-only / License / Outside만 가리킨다. Family `:138`은 절이 달라 인접이 아니다. | 같은 줄 완전형에 Live computed · System use를 접어 넣음. |
| 6 | `DESIGN.md:167` — Capture record | "Reinspect the relevant live surface before specifying"는 미관측을 재검사 이유로 읽는 판단. `:186` 적용 절차 한정은 표 너머라 인접이 아니다. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |
| 7 | `DESIGN.md:271` — Layout | "establishes hierarchy through … rather than a documented card-container recipe"는 구성 읽기. 기존 한정은 surface-specific / 1440×900 / YAML 경로만 가리킨다. | 같은 줄 완전형에 hierarchy-not-card-recipe를 접어 넣음. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not Hyundai Card-authored` 24, `separately published UI specification` 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 54, 63, 77, 87, 93, 102, 106, 112, 130, 138, 151, 160, 167, 186, 260, 271, 284.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | `provenance.md` Derived-editorial inventory | 착수 원장 22행 = 본문 22. 본문에 한정 2건을 신설하면 원장이 좁아진다(fastcampus형). 행 3·10·13·15·21은 확장한 읽기를 적지 않음. | 원장 22→**24**. 행 신설 2(Semantic DIVE omission `:87` · Capture reinspect `:167`). 행 3·10·14·16·23 서술 확장. 헤더 `24 = 24`. |

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | YAML identity 행 | Homepage를 `index.jsp` 줄(50/81/92/100/107)로 적음. YAML 필드는 `https://www.hyundaicard.com` (`provenance.md` 13). `#000000` provenance 15 — 실제 **14**. | homepage 필드 13과 product-home URL을 분리. `#000000` 14/126. |
| 10 | YAML metadata 행 | freshness/verified dest 19–21 · 37–42. 실제 identity 메타 17–20, freshness 표 36–40, producer 44. | 17–20 / 36–40 / 44. |
| 11 | YAML `ds` 행 | `ds.type: brand` provenance dest 2 (23/85). 정확 문자열 dest **1**(85). 23은 표 칸 `ds.type` / `brand`. | dest 1 at 85. 표 칸 23을 별기. |
| 12 | YAML colors · §2 행 | `tokens.colors.inverse` dest 1 at 83. 실제 dest **2**(77/83). 87 한정 없음. | 77/83. 77·87 B2a dest 병기. |
| 13 | YAML type roles 행 | px 철자 dest 123/124. `40px/600/52px`·`18px/500/26px`·`54px/700/80px`는 123/**149**. `16px/500/22px`는 124/**149**. | 123/149 · 124/149. |
| 14 | YAML components 행 | `Token-set use:` dest 219 · fg 221. 실제 use **221** · fg **222**. | 221 / 222. font shorthand dest 4 줄을 151/219/220/245로 적음. |
| 15 | §3 URL 행 | overview dest provenance 110만. 실제 **84/110**. Design Library 111만 — 실제 **22/111**. | 84/110 · 22/111. |
| 16 | §11 · §13 · §14 행 | `broader than one web page` / `not merely historical` dest 1 (한정 접기 후 각 **2**). 페르소나 처분 dest 164 — 164는 표 머리, 실제 행 **166**. 167 한정 없음. | dest 2. 처분 166. 167 dest 추가. |
| 17 | Footer 행 | Resolution dest 157 — 실제 **158**. Conflicts dest 43 — 실제 **42**. Freshness를 37–42로 묶어 Conflicts를 넣음. | Resolution 158. Conflicts 42. Freshness 표 36–40. |
| 18 | §12 · Deviations / F1 | 로그가 B2a 22=22, inventory 176–197을 현재 상태로 남김. 본문·원장 24. | inventory **176–199 (24)**. Auditor 절: F1 24줄(87·167 추가, :13·:77·:106·:130·:271 접기) · `B2a 24=24`. worker-close 22는 이관 시점 측정으로 남기고 auditor 24를 병기. |

Destination SHA `614e8bd7…` → `7d818565cea5447d947e15a9218d4f8322991cc5d68ef6db805fbb8e9bd78325` (한정 신설·확장 후). 줄 수 DESIGN 326 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 세 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI DS 없음, v12 전제 주석). Design Library는 문화 공간이지 발행 사양이 아니다.
- Application rules / Avoid "source's own" — 출처 표시.
- Type roles "They do not replace the unitless token-set figures" / Spacing·Shape 키 경로 분리 — A1 값 보존, 브랜드 해석 아님.
- Motion `:112` — B3 다섯 종류(transition properties · animation name · duration · easing · reduced-motion behavior)와 per-component 게이트가 같은 줄에 전문. 323은 다섯 종류 재서술. E2c 유지.
- Governance `:295` Design Library 문장 — 원본 YAML `ds.description`의 내용. 새 편집 추론 아님.
- Named gaps "not permissions to invent" — Core 계약 문구.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/hyundaicard/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Youandi / YouandiNew / YouandiNewKr, 2003 / 2021, card-plate construction, technology-company identity, libraries / performance programs / branded spaces, official overview framing, YAML `use`·`font` 바이트, Design Library `ds.description`.
- **관측 기술** — 라이브 hex·치수·YouandiNewKr / platform stack·`Primitive type`·unitless `52`/`80`/`26`/`22`·`nav-inline: 20`·`corporate-action-inline: 29`·`box-shadow: none`·`1440×900`·`interactionCount: 0`.
- **편집적 해석·인과 판단** — 세 경로를 계약 표면으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·UI implication, 파랑 승격 거부, DIVE 생략 경계, kind/applicability, reinspect 지시, 보이스 읽기, hierarchy-not-card-recipe.

세 번째 부류 중 22곳은 착수 시 인접 완전형이 있었고, DIVE omission과 Capture reinspect 2곳은 한정이 없어 그 자리에 붙였고, Scope ¶3·Semantic pairing·Elevation·Font evidence·Layout 5곳은 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 24 | 0 | 3 |
| `not Hyundai Card-authored` | 24 | 0 | 3 |
| `separately published UI specification` | 24 | 0 | 3 |
| inventory 데이터 행 | — | 24 | — |
| `Token-set use:` | 1 | 0 | 1 |
| `tokens.colors.inverse` | 2 | 1 | 1 |
| `ds.type: brand` | 0 | 1 | 4 |
| `broader than one web page` | 2 | 0 | 2 |
| `loading \| not-applicable` | 3 | 0 | 1 |
| `loading \| applicable` | 0 | 0 | 1 |
| `16px / 700` / `13px / 400` / `46px` | 0 / 0 / 0 | 2 / 2 / 2 | 2 / 2 / 2 |
| `Card product visitor` / `needs a product route` | 0 / 0 | 0 / 0 | 0 / 0 |
| B3 다섯 종류+게이트 (`DESIGN.md` 112) | 1 | 0 | 1 |

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다.

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 기록한 gate `copy-loss`는 `compared` 0 / `candidates` 77. 기계가 안 본 차이는 77. 발행 카피 손 대조: Principles 3제목·Voice Do/Don't 6셀·Youandi 계열 이름 전량 본문 dest ≥ 원본. `latin-copy-audit.mjs --brand hyundaicard` lost 1 / scanned 22, sample `omd:add-reference`(sibling 파이프라인 문자열, 발행 카피 아님). 발행 라틴 손실은 안 보임.
- **B1.** sibling 전용 `16px / 700` · `13px / 400` · `46px` · `.btn_dep2` · `score 71` DESIGN dest 0. sibling 절 표제(`Proof — Tier 1 live inspect`, `Raw samples`, `Surface-domain boundary`)와 "h3다"/"섹션 표제다" 분류가 본문에 사실로 들어오지 않음.
- **D2a.** 삭제 처분 행(provenance 166, migration-log §13)은 인원·필드 종류만. 이름·나이·도시 원본에도 없음. 동기(`needs a product route` / `high-contrast informational` / `must not be mistaken`)와 소속 분류(`Card product visitor` / `Corporate-information reader` / `Culture-program visitor`) DESIGN / provenance / migration-log dest 0. Audience는 원본 §1·§11 그룹 서술만.
- **E2d.** 부재 단언 전수: provenance 65는 "does not assert that they are absent from itself". migration-log sibling 절은 DESIGN.md 0을 분모로 적고 로그 자신을 분모에 넣지 않음. 이 브랜드 0.
