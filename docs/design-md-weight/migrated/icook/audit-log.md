# iCook 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/icook/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/icook/DESIGN.md`
검증 sibling: `web/references/icook/.verification.md` — `find web/references/icook -type f`와 `test -f web/references/icook/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not iCook-authored or a separately published UI specification`을 요구한다. 기존 33건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 33 / 원장 33. 숫자는 맞았으나 Family `:190` 한정이 fallback prohibition만 이름하고 display/body 키 분리를 빠뜨렸고, Motion `:143`은 durations/roles/rules만 이름하고 커브 생략(not traceable) 판단을 빠뜨렸다. 33은 과소가 아니라 인접 한정의 범위가 좁았다.

## 수정 목록 (18건)

### B2a — 인접 한정 범위 확장 (본문 2건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:190` — Family | "stay unmerged keys"는 세 번째 부류. 같은 절의 기존 한정은 fallback prohibition만 가리킨다. | 기존 완전형에 display/body 키 분리를 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |
| 2 | `DESIGN.md:143` — Motion | "omission of the listed curves as not traceable to iCook-computed samples"는 세 번째 부류. 같은 단락의 기존 한정은 durations / easing roles / motion rules만 가리킨다. | 기존 완전형에 커브 생략 판단을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33, `not iCook-authored` 33, `separately published UI specification` 33. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 56, 68, 84, 103, 114, 129, 139, 143, 180, 182, 183, 184, 185, 190, 205, 213, 220, 231, 423, 438, 450, 452, 471, 514, 516, 550.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Family 행 | "Fallback prohibition"만. 본문 `:190`이 이제 display/body 키 분리도 이름한다. | unmerged display/body keys를 행에 추가. |
| 4 | `provenance.md` Motion 행 | Unattributed durations/roles/rules만. 본문 `:143`이 이제 커브 생략도 이름한다. | listed curves omitted as not traceable을 행에 추가. |

헤더 `33` / 데이터 행 **33** 유지 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (14건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | YAML family 행 | Shared stack을 `DESIGN.md` **188**로 적음. 188은 `### Family` 표제. 스택·경로는 **189**. | **189**. Qualifier 190 병기. |
| 6 | YAML metadata 행 | **Verified:** 를 `provenance.md` 37로 적음. 실측 36. | **36**. |
| 7 | YAML `tokens.note` 행 | 사실 목록에 live `rgb(240,70,70)`를 넣고 DESIGN 11/35–42/88–111에 착지한다고 적음. `rgb(240,70,70)` DESIGN dest **0** (fitpet형 2차 목적지). | hex 사실만 DESIGN 착지로. rgb는 ledger-only DESIGN 0 / provenance 2 (59/61). |
| 8 | YAML spacing/shape 행 | `9999px` dest 5 · `50%` dest 4 · `tokens.shadow.none` 139/553. 실측 `9999px` dest **7** (126/127/129/448/554) · `50%` dest **7** (127/129/311/448/554) · `tokens.shadow.none` dest **1** at 139 only. | dest 7 / dest 7 / 139 only. `tokens.shadow.card` dest 4 at 139/553. |
| 9 | YAML components 행 | `16px / 700` dest 1. 실측 dest **2** at 402/406. | dest 2 (402/406). |
| 10 | §4 행 | Search placeholder `#89817d` at 330 · Ghost height 32px at 311. 330은 Background `#ffffff`. 311은 Radius `50%`. | placeholder **332** · height **313**. Tab active 405/407. |
| 11 | Footer 행 | Freshness 32–35 (35는 빈 줄) · Tier 1 48–50 (48은 빈 줄) · Conflicts 39 (39는 빈 줄) · popular URL provenance 45/50. | Freshness **32–34** · Tier 1 **49–50** · Conflicts **38** · popular **45/50/69**. |
| 12 | §5 행 | 44px search height at 336/459 · `50%` dest 4 at 127/129/311/448. 459는 빈 줄. `50%` dest **7**. | 44px **336/460**. `50%` dest **7** at 127/129/311/448/554. |
| 13 | §10 행 | Published strings 483–513 (513은 빈 줄) · tone table 475–481 (481은 Voice samples 표제). | strings **483–512** · tone table **473–479**. |
| 14 | §11 행 | narrative-not-token-source at `provenance.md` 194. 194는 `components_harvested: true`. | **196**. |
| 15 | §13 행 | Disposition at `provenance.md` 141. 141은 표 헤더. | **143**. |
| 16 | §9 행 | itemised check at `provenance.md` 147. 147은 삭제 행. 항목 대조는 149. | 삭제 행 147 · 항목 대조 **149**. |
| 17 | §15 curves 행 | Ledger at `provenance.md` 142–144. 142는 구분선, 커브 3행은 144–146. F2는 B3를 550으로 적음. 550은 unresolved 머리, 다섯 종류 재진술은 **552**. | Ledger **144–146**. B3 **161 and 552**. |
| 18 | Sibling · F1 · F2 · SHA | sibling-only 92–100. 101의 `愛料理 iCook`이 빠짐. F1이 Family 키 분리·Motion 커브 생략을 이름하지 않음. F2가 B3를 550으로, token-note rgb를 DESIGN 착지로 읽음. | sibling-only **92–101**. F1에 두 확장 판단을 넣음. F2 dest 교정. worker-close DESIGN SHA `f9cbdeee…` 유지, auditor `c3457961801ccda71c9326ae11dff4e5856cafc0f4e92852b5afee843caf086c`. |

Destination SHA `f9cbdeee…` → `c3457961801ccda71c9326ae11dff4e5856cafc0f4e92852b5afee843caf086c` (한정 범위 확장 후). 줄 수 DESIGN 555 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 세 개만. 식별자·동기·소속 분류를 만들지 않음. 한정 유지.
- Semantic "single decisive action color" / "workhorse interactive radius" / type-rule titles — 원본 §2/§5/§3 문장. 절 머리 한정이 특성화를 덮음.
- B3 준수 주장 — `DESIGN.md` 161이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 552는 재진술).
- 2차 목적지 전수: homepage own URL · `#f04646` · favicon slug · `愛料理` · token-note hex · popular URL · `consumer app` `:139` · `56px` `:443` · `已加入收藏` · `升級 VIP` · `anyone can post a recipe` · `curated editorial voice` — 각 DESIGN dest ≥ 1 (fitpet형 0회는 rgb만, 위에서 정정).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/icook/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 愛料理, 開啟美好生活，愛料理, 都丟給電鍋, 300,000 道食譜，每天都有新食譜！, 人氣食譜, 最新食譜, 低卡瘦身, 簡單快速, 飲料冰品, 下載APP, 在 iCook App 開啟, 更多, 醬料運用, 排骨湯, 鑄鐵鍋燜油飯-一鍋到底, 已加入收藏, 升級 VIP, 生活誌, 市集, 愛料理 TV, iGood, 2011, Polydice Inc., Taipei, 書面語.
- **관측 기술** — hex · system-ui / PingFang TC / Microsoft JhengHei · unitless `1.4`/`1.0`/`1.15`/`1.5` · spacing `base: 15` · `full: 9999` / `9999px` / `50%` · `shadow: none` · 56px header · primitive types.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 과제 선정, 청중 묶기, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화, canvas/on-primary·spacing/shape·family display/body 키 분리, elevation/motion 게이트와 커브 생략, 폰트 증거 class, type-role 비율 유지, favicon·photography, applicability, photography-first, byte-exact, unresolved 목록.

세 번째 부류 중 33곳은 착수 시 인접 완전형이 있었고, 그중 2곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 33 | 0 | 3 |
| `not iCook-authored` | 33 | 1 | 4 |
| `separately published UI specification` | 33 | 1 | 4 |
| inventory 데이터 행 | — | 33 | — |
| `rgb(240,70,70)` | 0 | 2 | 2 |
| `9999px` | 7 | 2 | 3 |
| `50%` | 7 | 4 | 4 |
| `tokens.shadow.none` | 1 | 1 | 2 |
| `16px / 700` | 2 | 0 | 1 |
| `loading \| applicable` | 0 | 0 | 0 |
| `loading \| not-applicable` | 6 | 0 | 0 |
| `搜尋食譜名` / `一日三餐，美國雞肉陪伴你` / `0px 4px 4px 0px` | 0 / 0 / 0 | 2 / 2 / 2 | 3 / 3 / 2 |
| B3 다섯 종류+게이트 (`DESIGN.md` 161) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 21 / candidates 172 (12.2%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(愛料理 DESIGN 11 · 開啟美好生活，愛料理 4 · 下載APP · 在 iCook App 開啟 · 都丟給電鍋 · 人氣食譜 · 300,000 道食譜，每天都有新食譜！ · 已加入收藏 2 · 升級 VIP 2 · 生活誌 3 · 市集 3 · 愛料理 TV 3 · iGood 3 · YAML `use` 10종 dest 1 each): DESIGN.md에서 생존. 원본 §1의 영어 gloss `(Download App)`는 산출 Scope에서 빠졌으나 발행 표면 카피는 `下載APP`이고 라틴 발행 카피 손실로 보이지 않는다. 고치지 않음.
- **B1.** sibling 전용 `搜尋食譜名` / `一日三餐，美國雞肉陪伴你` / `0px 4px 4px 0px` / `rgba(0, 0, 0, 0)` / `rgba(0, 0, 0, 0.32)` / `© 2011-2026` / `16.1px` / `homepageStoryCard` / `愛料理 iCook`: DESIGN 0 / provenance mention. `H3` DESIGN 3은 원본 §3 hierarchy 표 "Section H3" / YAML `use` "Section headers (H3)"이지 sibling 구조 분류가 아님. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. `h3`/`playwright`/`getComputedStyle` DESIGN 0.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger `:143`)은 절·필드 종류만. 식별자 `陳小雯`/`林媽媽`/`黃阿志`/`王同學` · 도시 `台北`/`台中`/`高雄`/`台南` · 동기 `real cook`/`weekday dinners`/`commuting`/`nutrition labeling`/`university student`/`mobile UX is the core` DESIGN/provenance 0 as use. Audience는 원본 그룹 세 개만. Primary tasks는 표면 라벨. 소속 분류 발명 없음. 로그 A5a 칸이 잃은 바늘로 `real cook`을 mention — use 아님.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). `rgb(240,70,70)` DESIGN 0 · `loading \| applicable` DESIGN 0도 DESIGN 분모. "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=18
