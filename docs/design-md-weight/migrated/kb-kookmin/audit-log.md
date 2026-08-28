# kb-kookmin 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kb-kookmin/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kb-kookmin/DESIGN.md`
검증 sibling: `web/references/kb-kookmin/.verification.md` — `find web/references/kb-kookmin/.verification.md -type f`와 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 대괄호 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KB국민은행-authored or a separately published UI specification`을 요구한다. 기존 28건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 28 / 원장 28. 숫자는 맞았으나 세 곳이 같은 단락의 다른 판단을 이름하지 않아 양쪽이 함께 좁았다(fastcampus). Motion `:113`은 zero-interaction·reduced-motion만 이름하고 다음 문장 B3 다섯 종류 게이트를 빠뜨렸고, Family `:135`는 fallback 금지만 이름하고 `tokens.typography.family` 생략을 빠뜨렸고, Selected `:245`는 geometry만 이름하고 C4 omit·not-a-tab을 빠뜨렸다.

E2: 로그가 본문 2차 목적지로 적은 `getdesign` / `refero`는 `DESIGN.md` dest **0** (fitpet). `Token-set use` 241은 실제 242, `states` 239는 실제 241, WCAG 272는 실제 274, **Verified:** 41은 실제 39.

## 수정 목록 (18건)

### B2a — 인접 한정 (본문 3건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:113` — Motion | "An exact curve may be promoted… five evidence kinds"는 세 번째 부류. 기존 한정은 zero-interaction constraint / reduced-motion unnamed만 가리킨다. | 기존 완전형에 stating the five-kind per-component promotion gate rather than promoting a curve를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:135` — Family | "No `tokens.typography.family` path is promoted"는 세 번째 부류. 기존 한정은 fallback prohibition만 가리킨다. | 기존 완전형에 Omitting a `tokens.typography.family` path를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:245` — Selected list item | C4 omit과 "it is not promoted as a tab"은 세 번째 부류. 기존 한정은 14px / 28px geometry만 가리킨다. | 기존 완전형에 omitting kind and applicability because the source supplies no interaction evidence for the row와 not promoting the row as a tab를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 28, `not KB국민은행-authored` 28, `separately published UI specification` 28. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 41, 56, 65, 78, 101, 105, 109, 113, 131, 135, 139, 147, 151, 178, 195, 220, 245, 251, 253, 257, 270, 310.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Motion 행 | zero-interaction / reduced-motion만. 본문 `:113`이 이제 five-kind gate도 이름한다. | stating the five-kind per-component promotion gate rather than promoting a curve를 행에 추가. |
| 5 | Family 행 | fallback prohibition만. 본문 `:135`가 이제 omitting `tokens.typography.family`도 이름한다. | 그 판단을 행에 추가. |
| 6 | Selected list item 행 | geometry만. 본문 `:245`가 이제 C4 omit과 not-a-tab도 이름한다. | 두 판단을 행에 추가. |

헤더 / 데이터 행 **28 = 28** (E1 1:1; 행 수 불변, 범위만 닫음).

### E2 / E2a / E2c — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML identity 행 | `logo.slug` 필드명 P dest를 16만 적음. 실제 dest **2** at 16/25. homepage dest 수가 줄만 있고 회수가 없음. | 필드명 P dest **2** at 16/25. homepage DESIGN dest **2** at 9/21 · P dest **5** at 13/47/49/55/66. |
| 8 | YAML metadata 행 | **Verified:** 를 `provenance.md` 41로 적음. 41은 Conflicts 행. | **39**. freshness 블록 **33–37** (`verification_v2.checked` 34). |
| 9 | YAML spacing 행 | inline 분별 101/218 · outline 101/194. 218은 Observed, 194는 Claim surface. | inline **101/220** · outline **101/195**. `toggle-inline` dest 2 at 99/101 유지. |
| 10 | YAML components 행 | `Token-set use` 191/216/241 · `states` 239. 241은 states, 239는 Font. | use **191/216/242**. states **241**. |
| 11 | §8 행 | WCAG 문장을 272로 적음. | **274**. |
| 12 | §9 행 | getdesign / Refero가 `DESIGN.md` 9에도 착지한다고 적음. `getdesign` DESIGN dest **0** · `refero` DESIGN dest **0**. | provenance-only로 정정: `getdesign.md` / `refero` P dest **1** at 77. 본문 2차 목적지 철회 (fitpet). |
| 13 | §10 행 | Do/Don't 표를 260–262로 적음. 262는 첫 데이터 행. | **260–264**. |
| 14 | §14 행 | 본문을 159–173으로 적음. Pressed 행은 174. | **159–174**. |
| 15 | Sibling 절 | 전사 91–104 · sibling-only 106–115. 103–104는 sibling-only 머리, 목록은 105–114. | 전사 **91–101**. sibling-only **105–114**. |
| 16 | F1 | Motion / Family / Selected가 착수 범위만 이름함. | 세 항목에 five-kind gate · family-path omit · C4/not-a-tab을 반영. 28=28 유지. |
| 17 | F2 | dual dest를 착수 숫자·틀린 줄로 적음. getdesign/Refero를 본문 생존처럼 읽음. | homepage dest 2/5 · `logo.slug` P dest 2 · spacing 220/195 · Tier 2 DESIGN dest 0. |
| 18 | Deviations + SHA | `wc -w` 4,608 · worker SHA만. | **4,644**. auditor SHA `2de860350e9fae4583405cf7ef2bf335da456d84dece2324b141e0d87f6b9bc7`. worker-close `74261c08…` 유지. |

Destination SHA `74261c08…` → `2de860350e9fae4583405cf7ef2bf335da456d84dece2324b141e0d87f6b9bc7` (한정 확장 후). 줄 수 DESIGN `wc -l` **319** 불변. provenance 211 불변. migration-log 119 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13이 이름·나이·도시를 만들지 않음. 원본 그룹 `customers broadly` / `people and businesses`만. 카테고리 표제 dest 0.
- Semantic 역할 행의 원본 use — `:78` 포괄절이 슬롯팅을 덮음.
- Motion `:115` B3 다섯 종류+게이트 — 본문 전문 실재 (E2c 유지). `:113`이 이제 그 게이트를 이름한다.
- Type roles 표 px 철자 — YAML 철자. `:139`가 keep-px를 덮음.
- Layout `:251` — 원본 §5·§8 문장. `:251`/`:253`가 측정 읽기를 덮음.
- B3 준수 주장 — `DESIGN.md` 115가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음.
- 2차 목적지 전수: `https://www.kbstar.com/` DESIGN dest 2 · `#ffcc00` DESIGN dest 6 · favicon slug URL DESIGN dest 1 · `completed 2025 UI values` DESIGN dest 2 at 13/318 · `tokens.rounded.square` dest 1 · `tokens.shadow.none` dest 1 · `not in the token set` DESIGN dest 0 · `loading \| not-applicable` dest 2 at 203/228 · `loading \| applicable` dest 0 — fitpet형 0회 2차 목적지는 §9 getdesign/Refero 한 줄이었고 철회함.
- A1 키 경로: 원본 `tokens.components` 3레코드의 type/bg/fg/border/radius/padding/height/font/use/states가 각 블록에 행으로 있음. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/kb-kookmin/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — KB국민은행 / KB Kookmin Bank / KB Financial Group / KB금융체 / Star-b / “finance that changes the world” / most trusted lifetime financial partner / 원본 §12 원칙 · §7 Do/Don't · §10 보이스 · §11 합병·미션·비전·2024 보고와 결론 `completed 2025 UI values`, YAML `use` 바이트.
- **관측 기술** — hex · `21px`/`26px`/`14px` line-height · 14/20/13 type · 28/24 height · `0px 10px` / `0px 8px 0px 9px` · `Primitive type: listItem` · `interactionCount: 0` · `1440×900`.
- **편집적 해석·인과 판단** — 두 표면을 계약 표면으로 읽기, 중복 홈, 값의 표면 귀속, 그룹 자료를 brand-context, practical visual language / trust / legibility, 서사≠토큰, 과제 선정·persona-off, 청중 그룹·개인 페르소나 거부, 특성 묶기, 원칙·Do/Don't, role names-from-labels, spacing/shape 키 분리, 역할 크기 ≠ 공유 숫자, elevation 경계, motion 게이트, 폰트 증거 class, family-path 생략·fallback 금지, type-role keep-px, Google pointer, applicability·C4·not-a-tab, 보이스 레지스터, named-values-not-permissions.

세 번째 부류 중 28곳은 착수 시 인접 완전형이 있었고, 그중 3곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 5파일 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. 카피는 `grep -oF`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 28 | 1 | 3 |
| `not KB국민은행-authored` | 28 | 2 | 4 |
| `separately published UI specification` | 28 | 2 | 3 |
| inventory 데이터 행 | — | 28 | — |
| `Primitive type: \`listItem\`` | 3 | 0 | 0 |
| `not in the token set` | 0 | 0 | 1 |
| `#ffcc00` | 6 | 4 | 6 |
| `https://www.kbstar.com/` | 2 | 5 | 1 |
| `logo.slug` | 1 | 2 | 2 |
| `tokens.spacing.inline-link-left` | 3 | 2 | 2 |
| `tokens.spacing.outline-link-inline` | 3 | 0 | 1 |
| `tokens.spacing.toggle-inline` | 2 | 0 | 1 |
| `completed 2025 UI values` | 2 | 0 | 2 |
| `loading \| not-applicable` | 2 | 0 | 0 |
| `loading \| applicable` | 0 | 0 | 0 |
| `components_harvested` | 0 | 3 | 2 |
| `getdesign` | 0 | 1 | 3 |
| `refero` | 0 | 1 | 3 |
| `straight forms for trust` | 0 | 1 | 3 |
| B3 다섯 종류+게이트 (`DESIGN.md` 115) | 1 | 0 | 1 |

provenance·migration-log의 같은 문자열은 mention이지 본문 use가 아니다. `tokens.spacing.outline-link-inline` / `toggle-inline` provenance dest 0은 결합 경로 `inline-link-left / inline-link-right / outline-link-inline / toggle-inline` 표 행(129/162)이라 단독 키 문자열이 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **4** / candidates **116**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아님. 손 대조 발행 라벨 생존: KB국민은행 / KB Kookmin Bank dest 2 / KB Financial Group dest 6 / KB금융체 dest 9 / Star-b dest 5 / finance that changes the world dest 2 / most trusted lifetime financial partner dest 1 / 맑은 고딕 dest 4 / Malgun Gothic dest 2 / Roboto / 확인할 내용을 먼저 보여드립니다 dest 1 / 필요한 금융 정보를 차분하게 안내합니다 dest 1 / 변경 사항과 다음 단계를 함께 확인하세요 dest 1. 발행 라틴 손실은 안 보임. `_research.md` DESIGN dest 0은 원장 파일명(P dest 1 at 87).
- **B1.** sibling 전용 `80` / `352` / `Times` / `420` / `straight forms for trust` / `home::[data-omd-capture="59"]` / `artifacts/reference-evidence` DESIGN dest **0**. sibling `h3` dest 0 (sibling에도 0). 값·구조 관측 침투 없음. 다만 `:246` "it is not promoted as a tab"은 원본 본문 0 / sibling 1 — 분류 문장이 sibling에서 본문으로 옮겨진 형태. 값 grep은 전량 0이 아니므로 finda형 구조 관측과는 급이 다르고, `:245`가 이제 그 판단을 편집 한정으로 닫는다. 직접 삭제는 하지 않음.
- **D2a.** 삭제 처분 행은 무식별(`provenance.md` 141: 3 headings as a count; name/age/city/motivation/affiliation as field kinds). 이름·나이·도시 DESIGN dest **0**. `Individual banking customer` / `Business customer` / `Branch and consultation` DESIGN dest **0** · P dest **0**. `motivation` DESIGN dest 1은 Audience `:28`의 필드 종류 부정이지 전기 재수록이 아님. 동기·소속 분류 발명 0. hubspot형 새 그룹명 없음. Primary tasks는 표면·컨트롤만 (gitlab형 동기 잔존 없음).
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 mention-not-use를 적고 부재를 단언하지 않음. 「Measured DESIGN.md 0」은 DESIGN을 분모로 하고 로그 자신을 분모에 넣지 않음.
- **A1.** 원본 YAML 컴포넌트 3레코드: `home-outline-list-item` type/bg/fg/border/radius/padding/height/font/use가 Outline 블록 행으로 있음 (`Text: #222222` + YAML `fg` 병기). `home-inline-list-item` type/fg/radius/padding/height/font/use. `online-selected-list-item` type/fg/radius/padding/height/font/states/use. YAML에 없는 bg/border/states는 해당 블록에도 없음. 필드 소실 없음.

원본 `web/references/kb-kookmin/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=18
