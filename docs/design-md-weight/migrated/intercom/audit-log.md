# intercom 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/intercom/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/intercom/DESIGN.md`
검증 sibling: `web/references/intercom/.verification.md` — `find`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Intercom-authored or a separately published UI specification`을 요구한다. 기존 34건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 34 / 원장 34. 숫자는 맞았으나 Type roles `:202`는 extra-key만 이름하고 unitless-ratio / dual-spelling을 빠뜨렸고, Family `:175`는 fallback prohibition만, Assets `:209`는 Simple Icons만, Hero `:335`는 YAML-type 배치만 이름했다. Nav Link `:314`의 「§4 body facts, not a second YAML type」에는 인접 한정이 없었다. 34는 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (18건)

### B2a — 인접 한정 (본문 5건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:175` — Family | "These are not `tokens.typography.family.*` keys"는 세 번째 부류. 기존 한정은 fallback prohibition만 가리킨다. | 기존 완전형에 MediumLL / LLMedium not-family-keys를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:202` — Type roles | unitless-ratios-stay-ratios와 tracking / Body `1.5`·`1.50` keep-both는 세 번째 부류. 기존 한정은 extra-key만 가리킨다. | 기존 완전형에 비율 유지와 철자 병기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:209` — Assets | "Fin Orange and the Fin name are brand-narrative and accent facts; they are not a hosted mark URL"는 세 번째 부류. 기존 한정은 Simple Icons slug만 가리킨다. | 기존 완전형에 Fin-name-not-hosted-mark를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:314` — Nav Link | "Those sit on this nav record as §4 body facts; they are not a second YAML type"는 세 번째 부류. `:220`은 applicability 절차만 가리킨다. | 완전형 신설(같은 줄에 붙임, 이후 줄 번호 불변). 발생 수 +1. |
| 5 | `DESIGN.md:335` — Hero Primary | "canvas-inverted on the fin.ai dark canvas"는 세 번째 부류. 기존 한정은 footer-not-YAML-type만 가리킨다. | 기존 완전형에 canvas-inverted 읽기를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not Intercom-authored` 35, `separately published UI specification` 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 65, 78, 107, 111, 124, 128, 132, 162, 164, 165, 166, 167, 175, 202, 209, 220, 259, 281, 314, 335, 349, 370, 372, 381, 420, 422, 456.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 신설을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | `provenance.md` inventory 헤더 | **34**. 본문이 이제 35다. | **35**. 데이터 행 132–166. |
| 7 | `provenance.md` Family · Type roles · Assets | fallback / extra-key / Simple Icons만. | 세 행을 본문에 맞춤. |
| 8 | `provenance.md` Hero | YAML-type 배치만. | canvas-inverted를 행에 추가. |
| 9 | `provenance.md` inventory | Nav Link `:314` 한정이 원장에 없음. | 행 신설 1. 이후 29–35로 재번호. |
| 10 | `provenance.md` Proof 포인터 | 행 삽입으로 `prose-derived` 170→**171**, `components_harvested` 171→**172**, narrative 173→**174**. | 로그 dest를 실측 줄로 옮김(아래 E2). |

헤더 `34` → `35` / 데이터 행 **35** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML metadata `prose-derived` | DESIGN 9/132/163/349. 실제 dest **5줄 6회** at 9×2/132/163/349/**372**. provenance 170은 행 삽입 후 **171**. | 9/132/163/349/372 · P 19/106/132/171. |
| 12 | YAML spacing/shape | `tokens.rounded.full: 9999` dest **4** at 122/124/**368**/459. 368은 `full: 9999`이지 키 경로가 아니다(easywallet형). dest **3** at 122/124/459. | dest 3. 368은 `full: 9999` restatement로 분리. |
| 13 | YAML `components_harvested` | provenance **171**. 실제 **172**. | **172**. |
| 14 | Footer Tier lists | Tier 1 **49** / Tier 2 **53** / Philosophy **57–63**. 49·53은 빈 줄. 실제 48 / 52 / 56–61. Style ref는 **63**. Freshness 32–37은 verified YAML **31**을 빠뜨림. | 31–37 · 48 · 52 · 56–61 · 63. |
| 15 | Sibling 전사 | provenance **76–86**. 76은 빈 줄. 내용은 **77–86**. | **77–86**. |
| 16 | §11 narrative | provenance **173**. 행 삽입 후 **174**. | **174**. |
| 17 | §12 inventory | 132–165 (34). | **132–166 (35)**. |
| 18 | F1·Deviations·SHA | F1 34=34. `wc -w` 5,569는 확장 전. | F1 35=35. `wc -w` 5,660. worker-close SHA `c801cac98d96…` 유지, auditor `1a6b6ae42954cf74305885bd9aea5ec413473f45b3e050c7dc7674518bc8958d`. |

Destination SHA `c801cac98d96…` → `1a6b6ae42954cf74305885bd9aea5ec413473f45b3e050c7dc7674518bc8958d` (한정 신설·범위 확장 후). 줄 수 DESIGN 461 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더 그룹만: support team leads, RevOps, AI/Fin admins. 페르소나 동기·소속 분류를 재구성하지 않음.
- B3 준수 주장 — `DESIGN.md` 145가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트·partial-confirmation 배제를 전문으로 담음 (E2c 유지, 458은 재진술).
- 2차 목적지 전수: homepage URL DESIGN dest 4 at 9/226/308/330 · `prose-derived` dest 6 · `https://www.intercom.com` provenance dest 3 · `not in the token set` dest 3 at 216×2+329 · `Token-set use:` dest 5 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- E2d — sibling-only 행 `:88`이 「does not assert that those strings are absent from this file」로 자기부정을 피함. 부재 단언이 자기 분모에 그 문자열을 넣는 행 0.
- `tokens.note` DESIGN dest 0은 키가 아니라 사실이 11/82/85에 착지한 것으로 로그가 이미 분리함.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 0 / candidates 147. 발행 라벨 손 대조 22/0/0(The only helpdesk designed for the AI Agent era / Get started / Try Fin / Book a demo / Conversation not synced. Refresh to retry. / Welcome to your Inbox / Enable Fin to deflect tickets / Searching knowledge base... 본문 dest ≥ 1). 발행 라틴 손실 안 보임. `aggression on all fronts`는 sibling 인용, provenance mention.
- **B1.** sibling 전용 값 `Start free trial` / `Contact sales` / `53px` / Cream Card `0px` DESIGN dest 0. 구조 분류(h3/섹션 표제) 침투 0. **분류 잔존 1:** `canvas-inverted` 원본 0 / sibling 1 (`web/references/intercom/.verification.md` 58) / DESIGN dest 2 at 333/335. 값은 원본 footer의 `#fff` / dark canvas이고 라벨은 sibling. 고치지 않음 — 한정의 대상일 뿐 토큰이 아니다.
- **D2a.** 식별자 `Aisha Patel` / `Marcus Webb` / `Priya Krishnan` / `Bengaluru` DESIGN·provenance dest 0. 동기 `product-led growth` / `keyboard shortcuts` / `deflect 60%` DESIGN dest 0. Audience는 원본 그룹 세 개만. 로그 §13 행이 게이트 바늘 `60%`를 mention으로 적음(식별자 재수록 아님). 고치지 않음.
- **A1.** 원본 YAML `tokens.components` 5레코드 필드가 대응 블록에 행으로 있음: button-primary bg/fg/radius/padding/use · button-outlined bg/fg/radius/use · button-warm bg/fg/padding/use · card bg/radius/use · nav-link fg/font/use. icook형 키 경로 소실 0. 고치지 않음.
- **D1.** `native application` / `mobile app` / `back-office` / `product application` / `measures 1440` DESIGN dest 0.

AUDIT_DONE fixes=18
