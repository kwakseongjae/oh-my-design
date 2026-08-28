# jandi 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/jandi/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/jandi/DESIGN.md`
검증 sibling: `web/references/jandi/.verification.md` — `find web/references/jandi -type f`와 `test -f web/references/jandi/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 대괄호 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not JANDI-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 23. 숫자는 맞았으나 Scope `:11` 한정이 네 분위기 문구를 source statements로 분류한 판단을 빠뜨렸고, Primary tasks `:19`는 과제 선정만 이름하고 각 과제가 기록된 표면·컨트롤을 가리킨다는 판단을 빠뜨렸고, Semantic `:74`는 키 분리만 이름하고 role names-from-keys를 빠뜨렸고, Applicability `:164`는 절차·평결만 이름하고 not-complete-coverage를 빠뜨렸고, Unresolved `:334`는 목록 선정만 이름하고 named-values-not-permissions를 빠뜨렸다. 23은 과소가 아니라 인접 한정의 범위가 좁았다.

## 수정 목록 (20건)

### B2a — 인접 한정 범위 확장 (본문 5건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | "are source statements"는 세 번째 부류. 같은 단락의 기존 한정은 six-records-not-authenticated-product만 가리킨다. | 기존 완전형에 classifying those four wordings as source statements를 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |
| 2 | `DESIGN.md:19` — Primary tasks | "Each names a surface or control the source records"는 세 번째 부류. 기존 한정은 과제 선정만 가리킨다. | 기존 완전형에 each naming a recorded surface or control을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:74` — Semantic color | "Role names below follow the source's own token-set keys"는 세 번째 부류. 같은 단락의 기존 한정은 pairing / canvas·on-dark / ink·action-ink / ink-muted·muted만 가리킨다. | 기존 완전형에 taking those role names from the source token-set keys를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:164` — Applicability | `:162` "This is not a complete state-coverage claim"은 세 번째 부류. 인접 `:164`는 절차·kind·applicability 평결만 가리킨다. | 기존 완전형에 refusal to treat this as a complete state-coverage claim을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:334` — Recorded unresolved | "These are named values, not permissions to invent"는 세 번째 부류. 기존 한정은 naming the list from the source's own unresolved fields만 가리킨다. | 기존 완전형에 treating the list as named values rather than permissions to invent를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 23, `not JANDI-authored` 23, `separately published UI specification` 23. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 52, 61, 74, 88, 98, 102, 108, 125, 133, 145, 153, 160, 164, 274, 300, 334.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | Scope ¶2 행 | six-records-not-authenticated-product만. 본문 `:11`이 이제 four wordings-as-source도 이름한다. | classifying the four atmosphere wordings as source statements를 행에 추가. |
| 7 | Primary tasks 행 | 과제 선정만. 본문 `:19`가 이제 each naming a recorded surface or control도 이름한다. | 그 판단을 행에 추가. |
| 8 | Semantic 행 | pairing / 키 분리만. 본문 `:74`가 이제 role names-from-keys도 이름한다. | Role names taken from the source token-set keys를 행에 추가. |
| 9 | Applicability 행 | 절차·평결만. 본문 `:164`가 이제 not-complete-coverage도 이름한다. | refusal to treat the map as a complete state-coverage claim을 행에 추가. |
| 10 | Unresolved 행 | 목록 선정만. 본문 `:334`가 이제 named-values-not-permissions도 이름한다. | Named values rather than permissions to invent를 행에 추가. |

헤더 `23` / 데이터 행 **23** 유지 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML metadata 행 | **Verified:** 를 `provenance.md` 39, freshness `verified` cell을 33, 메타 블록을 17–21/33–37로 적음. 39는 Conflicts. | **Verified:** **37**. freshness table **31–35**. `verified` cell **31**. |
| 12 | YAML spacing/shape 행 | `nav-action-x: 14` dest 3 · `landing-action-x: 30` dest 3 · `tokens.rounded.action: 6` dest 3 at 92/178/202 · `tokens.rounded.floating-nav: 10` dest 2 at 92/224 · `tokens.rounded.security-card: 16` dest 3 at 92/98/247. | `nav-action-x: 14` dest **4** at 86/88×2/177. `landing-action-x: 30` dest **4** at 86/88×2/201. `tokens.rounded.action: 6` dest **2** at 178/202 (`tokens.rounded.action` dest 3 at 94/178/202). `tokens.rounded.floating-nav: 10` dest **1** at 224. `tokens.rounded.security-card: 16` dest **2** at 98/251 (247은 padding). |
| 13 | YAML security-card 행 | 블록 237–253, Token-set 246–251, YAML `use` 251. 253은 AI 표제. 251은 shape. | **237–251**. Token-set **246–250**. `use` **250**. |
| 14 | YAML AI-card 행 | 블록 255–266, Token-set 261–266, YAML `use` 266. 261은 Font. `use`는 267. | **255–267**. Token-set **263–267**. `use` **267**. |
| 15 | §3 Noto URL 행 | Noto licence URL dual `DESIGN.md` 9 + P 59/71. `https://notofonts.github.io/noto-docs/website/use/` DESIGN dest **0** (fitpet형). Scope 9는 “Noto’s licence documentation”만. | DESIGN dest 0. provenance-only 59/71. |
| 16 | §4 행 | 166–266. selectors 176/200/223/245/261. 261은 Font. AI selector는 262. | **166–267**. selectors **176/200/223/245/262**. |
| 17 | §11 행 | closing sentence dest 2 (13). 정확 문자열 dest **1** at 13 (같은 줄의 부연은 다른 문자열). | dest **1**. `2015` dest 3 at 9/13×2 유지. |
| 18 | Footer 행 | Freshness 33–37, producer 39, Conflicts 41. 41은 `## Surfaces`. | Freshness **31–35**. producer **37**. Conflicts **39**. |
| 19 | Sibling 절 | 전사 89–107 (102부터 sibling-only). sibling-only 109–118 (112는 Byte-form). `NotoSans-Thin` / `score 71`을 sibling-only로 적음 — 그 정확 문자열은 sibling dest 0 (`NotoSans-{Thin,…}` / `coverage score \`71\``). selectors 261. | 전사 **89–100**. sibling-only **102–110**. 정확 문자열을 `coverage score`로 교체. selectors **262**. |
| 20 | Deviations · F1 · F2 · SHA | B2a 23=23을 범위 닫힘으로 적음. `wc -w` 4,447. worker-close SHA만. | 23=23 유지·5곳 확장. `wc -w` **4,484**. auditor SHA `140445153fbccc43faa84d3fac7dbced4c934995bcf6c4bfccb2c8869ca28064`. worker-close `1629ad8c…` 유지. |

Destination SHA `1629ad8c…` → `140445153fbccc43faa84d3fac7dbced4c934995bcf6c4bfccb2c8869ca28064` (한정 범위 확장 후). 줄 수 DESIGN `wc -l` **342** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§16 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 세 개만 (`individual contributors, team managers, teams`). 페르소나 동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic 역할 행의 원본 use 문장 — `:74` 포괄절이 슬롯팅을 덮음. "These are public-surface roles only"는 원본 §3 문장.
- Motion `:104` "intentionally undocumented" — 원본 §7. 108이 five-kind gate와 refusal to invent를 덮음.
- Type roles `:143` 계층 노트 — 원본 관측 px 철자. 145가 unitless `1.43` keep-both와 landing-action `15`를 덮음.
- Distinctive traits 항목 6 unpromoted-states — `:32` "groupings and the readings inside them"이 덮음. 신설하지 않음.
- B3 준수 주장 — `DESIGN.md` 108이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 340은 재진술).
- 2차 목적지 전수: standalone landing `https://www.jandi.com/landing/kr` DESIGN dest 2 at 9/21 · P dest 4 at 23/45/46/63 (접두사 `/features/…`는 별개) · `#00c473` dest 7 at 34/45/55/76/170/172/179 · favicon slug dest 1 at 149 · company/Project 2.0/support URL 각 DESIGN dest 1 at 9 · `Noto Sans` dest 19 · `1.43` dest 5 · `676` dest 2 · `SIL Open Font License` dest 3 · `icomoon` dest 6 · `swiper-icons` dest 6 · `not in the token set` dest 3 · `Kind: non-interactive` dest 2 · `kind: non-interactive` DESIGN 0 · `loading \| applicable` dest 0 · YAML `use` 5/5 · closing sentence dest 1 — Noto licence URL만 DESIGN dest 0 (로그에서 철회). 그 외 fitpet형 0회 없음.
- A1 키 경로: 원본 `tokens.components.security-environment-card` / `ai-environment-card`의 type/bg/radius/padding/use가 각 블록에 행으로 있음. YAML에 `fg` 없음. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/jandi/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — JANDI / 잔디, Toss Lab, 2015 launch, June 2026 Project 2.0, Noto Sans / SIL Open Font License, icomoon / swiper-icons, 원본 §12 원칙 · §16 Do/Don't · §10 보이스 · §9 "practical collaboration infrastructure" · §11 결론 문장, YAML use 바이트.
- **관측 기술** — hex · unitless `1.43` · `7`/`14`/`12`/`30` padding · `6`/`10`/`16` radius · `56px/700/80px` · `42px/700/60px` · `56px/700/66px` · 676 uses · seven JANDI-CDN OTF URLs · selectors · `Primitive type`.
- **편집적 해석·인과 판단** — 여섯 캡처/다섯 URL을 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 네 분위기 문구를 source statements로 분류, 과제 선정, 청중 그룹 읽기, 특성 묶기, 원칙·Do/Don't, role names-from-keys, canvas/on-dark 미분합, spacing/shape 키 분리, elevation 경계, motion 게이트, 폰트 증거 class, no-substitution, type-role keep-both, favicon pointer, applicability·not-complete-coverage, desktop-sample, byte-exact, unresolved named-values.

세 번째 부류 중 23곳은 착수 시 인접 완전형이 있었고, 그중 5곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 5파일 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. 카피는 `grep -oF`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 23 | 1 | 2 |
| `not JANDI-authored` | 23 | 2 | 2 |
| `separately published UI specification` | 23 | 2 | 2 |
| inventory 데이터 행 | — | 23 | — |
| `Primitive type: \`card\`` | 2 | 0 | 2 |
| `not in the token set` | 3 | 1 | 2 |
| `Kind: non-interactive` | 2 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 0 |
| `#00c473` | 7 | 1 | 3 |
| `1.43` | 5 | 3 | 1 |
| `Noto Sans` | 19 | 7 | 5 |
| `https://notofonts.github.io/noto-docs/website/use/` | 0 | 2 | 0 |
| `This reference keeps that product evolution separate from the measured public-marketing styles` | 1 | 0 | 1 |
| `loading \| applicable` | 0 | 0 | 0 |
| `2014` | 0 | 2 | 4 |
| `rgba(0, 18, 47` | 0 | 4 | 3 |
| B3 다섯 종류+게이트 (`DESIGN.md` 108) | 1 | 0 | 1 |

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** / candidates **99**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아님. 손 대조 발행 라벨 12/0/0. `latin-copy-audit` 1 lost = `site:styles.refero.design JANDI`(검색 질의; 발행 카피 0). 원본 태그라인 `direct, green-led, and operational`(원본 1 / DESIGN 0)는 설명문·편집 gloss이지 발행 카피가 아니라 직접 고치지 않음. 발행 라틴 손실은 안 보임.
- **B1.** sibling 전용 `2014` / `rgba(0, 18, 47` / `cdn.jandi.com` / `rgb(0, 196, 115)` / `floatingNavButton` / `coverage score` DESIGN dest **0**. sibling FontFaceSet 역할 목록의 `h3`(sibling 42)도 DESIGN 0. 값·구조 관측 침투 없음.
- **D2a.** 삭제 처분 행은 무식별(원본이 가상 전기를 만들지 않음; 그룹 세 개만 Audience에 원문). 이름·나이·도시 dest **0**. 동기(`weekly workload` / `member work status` / `connected collaboration`)는 원본 §13 문장이고 Audience에 원문 착지. 소속 분류 발명 0. hubspot형 새 그룹명 없음.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 mention-not-use를 적고 부재를 단언하지 않음. 「Measured DESIGN.md 0」은 DESIGN을 분모로 하고 로그 자신을 분모에 넣지 않음.
- **A1.** 원본 YAML 컴포넌트 2레코드의 type/bg/radius/padding/use가 대응 블록에 행으로 있음. `tokens.colors` 7키 · spacing 4 · rounded 3 · typography hero/section/nav-action이 각 역할 행. 필드 소실 없음.

원본 `web/references/jandi/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=20
