# PIXNET 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/pixnet/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/pixnet/DESIGN.md`
검증 sibling: `web/references/pixnet/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-03

발행 1차 UI 사양 없음 (`ds.type` 원본 0). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not PIXNET-authored or a separately published UI specification`을 요구한다. 기존 29건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 29 / 원장 29 (197–225). 숫자는 맞았으나 양쪽이 함께 좁았다. Color usage rules(`DESIGN.md:119`)와 Ghost/tag-pill 비해합(`DESIGN.md:316`)은 세 번째 부류인데 인접 완전형이 없었다. Motion 본문 한정(`:179`)은 durations/named roles/B3만 이름하고, 원장 Motion 행이 이미 적고 있는 signature pairings·reduced-motion keep는 본문이 말하지 않았다(E1 본문 좁음). 로그 §10 타이틀 전문 provenance dest **2**는 실제 dest **1**(fitpet형 2차 목적지 과대).

토큰 값·컴포넌트 표 구조·상태 applicability는 건드리지 않았다.

## 수정 목록 (9건)

### B2a — 인접 한정 (본문 3건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:119` — Semantic color → Color usage rules | 「as the source states them」만 있고 완전형이 없음. 같은 문서의 Application rules / Type-role principles / Whitespace notes는 원본 규칙 목록에 완전형을 붙이는데 여기만 빠짐. 절머리 `:90` 비해합 한정은 표 앞이라 인접하지 않다. | 완전형 신설: "Keeping the source's Color Usage Rules, plus the source §1 no-corporate-blue sentence, as portable color rules rather than as a PIXNET-authored palette manual, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification." 발생 수 +1. `There is no corporate blue anywhere in the palette` 전문은 반복하지 않음(dest 2 유지). |
| 2 | `DESIGN.md:179` — Motion | 본문 한정이 durations / named roles / B3 게이트만. 원장 Motion 행은 signature pairings·reduced-motion keep를 이미 이름함. | 기존 완전형에 "keeping durations, named easing roles, signature pairings, and reduced-motion writings"를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:316` — Ghost / secondary | 「This is not the trending-tag pill below」는 YAML `button-ghost` ≠ `tag-pill` 비해합인데 인접 완전형 없음. 원본 §4는 Ghost / Tag를 한 표제로 씀. Capture `:277` 한정은 Primary 블록 앞이라 인접하지 않다. | 완전형 신설: "Keeping YAML `tokens.components.button-ghost` unmerged from `tokens.components.tag-pill`, even though source §4 writes them under one Ghost / Tag heading, is a derived editorial implementation inference from the verified surfaces; it is not PIXNET-authored or a separately published UI specification." 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **31**, `not PIXNET-authored` **31**, `separately published UI specification` **31**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 58, 72, 90, 95, 119, 129, 146, 159, 179, 213, 217, 219, 220, 221, 228, 232, 251, 255, 277, 316, 465, 473, 477, 501.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Derived editorial inventory 헤더 | 29 complete / 29 data rows. | **31** / **31** at `provenance.md` 197–227. `node scripts/check-limiter-ledger.mjs pixnet` → `1:1 OK`. |
| 5 | Color usage 행 | 없음. 본문 `:119` 신설. | 행 신설. |
| 6 | Ghost / secondary 행 | 없음. 본문 `:316` 신설. | 행 신설. |

Motion 행은 착수 시점부터 signature pairings / reduced-motion을 이름하고 있었다. 본문 `:179`를 그에 맞춰 넓혔으므로 원장 행 추가는 없다.

### E2 / E2a — 로그 목적지 (3건)

본문이 아니라 로그만 고침. 본문을 고친 뒤 dest 표를 재실측했다(lablup). 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | §10 타이틀 전문 | 로그 「痞客邦PIXNET-掌握最新熱門話題貼文、短影音，讓生活充滿靈感！」 provenance dest **2**. 실제 provenance dest **1** at raw samples `:166`. claim-ledger `:119`는 `title`이라고만 이름하고 전문이 없다. DESIGN dest **2** at 501/512 은 맞음. | provenance dest **1**. |
| 8 | YAML `tokens.components` dest | `button-ghost` dest 2 · `tag-pill` dest 1 · 마지막 키를 `card`로만 적음. F3 B2a 이후 `tokens.components.button-ghost` DESIGN dest **3** · `tokens.components.tag-pill` dest **2** · `tokens.components.card` dest **1**. 짧은 키 `card`는 본문에 다수. | 네 path를 풀네임으로 적고 dest 3 / 2 / 1. |
| 9 | F1 / F2 29=29 주장 | 워커 종결 29. F3 후 본문 31 / 원장 31 at 197–227. 본문을 고치고 dest 표를 안 고치면 lablup형 E2. | DESIGN dest **31** / inventory **197–227**. F1 목록에 Color usage · Ghost/tag-pill 비해합. |

Destination SHA `3a846da354aa499936a8e7509232b2aea7360f193b9e1650db03bcbdcaa68935` (DESIGN, F3).

재실측 (파일별 `grep -o | wc -l`):

| 문자열 | DESIGN | provenance | log |
|---|---:|---:|---:|
| `derived editorial implementation inference` | **31** | 0 (색인이지 한정 아님) | 1 (mention) |
| `not PIXNET-authored` | **31** | 2 | 2 |
| `separately published UI specification` | **31** | 2 | 2 |
| 타이틀 전문 | **2** | **1** | 2 |
| `tokens.components.button-ghost` | **3** | 2 | 1 |
| `tokens.components.tag-pill` | **2** | 2 | 1 |
| `tokens.components.card` | **1** | 1 | 1 |
| `#ff7200` | **22** | 12 | 10 |
| `2px solid #ff7200` | **5** | 3 | 3 |
| `transition properties` | **2** | 0 | 3 |
| `apps.apple.com` | **0** | 2 | 2 |
| `痞客邦股份有限公司` | **0** | 2 | 4 |
| `networkidle` | **0** | 2 | 2 |

`node test-v2/tools/migrate-reference.mjs --brand pixnet --gate-only` → `verdict: PASS`, `problems: []`.
`node scripts/check-yaml-use-landing.mjs pixnet` → use 11/11.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **7** / candidates **152** (`verdict: PASS`는 대조한 바늘만, 카피 전수 보존이 아님). 손 스윕 발행 카피: 로그 목록 22 / 미생존 0을 재실측으로 유지 (`痞客邦` D6 · `登入` D9 · `註冊` D2 · `寫文章` D2 · `熱門` D7 · 타이틀 전문 D2 · `台灣人的生活文創平台` D2 · `社群影響力` D3 · `大試用時代` D5 · `gogo+香港` D3 · `#長榮航空`/`#日本旅遊`/`#親子旅遊` 본문 생존 · `Fill life with inspiration` D1). 라틴 설명문 소실로 보이는 것은 발행 CTA가 아님 — `rgba(66,62,60,α)` SRC 1 / DES 0 (§9 Iteration Guide, 도구 프롬프트 삭제; 숫자 alpha 섀도 값은 본문 생존). 고치지 않음.
- **A1 키 경로.** YAML `tokens.components.<id>.<field>` 4레코드 전 필드가 대응 블록에 **행으로** 있다 (`button-primary` type/bg/fg/radius/font/use, `button-ghost` type/bg/fg/radius/use, `tag-pill` type/bg/fg/radius/font/use, `card` type/bg/radius/use). icook형 타 블록 hex 차용 없음. colors 15/15 path 본문 생존. typography `use` 7문자열 Type roles 열에 바이트 보존. 복원할 필드 소실 0.
- **D2a.** 이름·나이·도시 식별자 세 파일 dest 0. 동기·소속 분류 구(`food and travel blogger` / `weekend trip` / `sponsored listicles` / `parenting blogger` / `short-video creator` / `copy of a Western platform`) DESIGN dest 0. 삭제 행은 `§13 Personas — 4 fictional archetypes (name, age, city included)`로 무식별. Audience 4구(`lifestyle bloggers` / `travel/food creators` / `parenting writers` / `Taiwanese readers researching real experiences`)는 원본 §13 머리글 원문(SRC ≥1). Primary tasks는 홈 그리드 / 트렌딩 태그 / `登入` / 검색. `real person wrote this.` SRC 1 / DES 0 — 페르소나 전기 문구, 원형 라벨이 아님. 로그에 식별자를 예시로 다시 넣지 않음.
- **E2d.** 부재 단언 행이 그 문자열을 자기 분모에 넣는 형태 0. sibling-only 표는 「DESIGN.md에 새 토큰으로 들어가지 않았다」이지 「세 파일 어디에도 없다」가 아니다. 생략 커브 값은 원장이 보관(E2b)하고 본문 Motion에도 생략 표기로 있다.
- **B1.** sibling 전용 값 DESIGN dest 0: `apps.apple.com` 0 · `痞客邦股份有限公司` 0 · `networkidle` 0 · `domcontentloaded` 0 · `lab(65.21` 0 · `font-weight: 400` 0. 구조 분류(`portal H2`류) 승격 없음. `Noto Serif TC Fallback` D2는 원본 §3에도 있다(SRC 2).
- **충돌 처리.** YAML `9999` / §5 `9999px` keep-both, heading/body·canvas/on-primary 같은 hex 비해합, Ghost/Tag YAML 두 키 비해합 — 자리마다 한쪽 삭제·한쪽 병기가 섞이지 않음.
- **T2 관례.** §15 곡선 세 값은 역할·duration·signature만 남긴 채 생략 표기. 값이 어디에도 없는 손실이 아니다. 원본에 없는 모션 규칙 합성 없음.
- **`#ffffff` 귀속.** canvas / on-primary / ghost·tag·card 표면. 원장 Semantic color 행이 canvas ≠ on-primary를 적음 (krafton형 원장 누락 아님).

AUDIT_DONE fixes=9
