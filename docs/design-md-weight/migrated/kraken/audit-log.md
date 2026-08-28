# kraken 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kraken/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kraken/DESIGN.md`
검증 sibling: `web/references/kraken/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Kraken-authored or a separately published UI specification`을 요구한다. 기존 40건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 40 / 원장 40. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic `:72`는 two-key / catalog-hex만 이름하고 Purple Subtle·Light Secondary의 not-a-YAML-key 읽기를 빠뜨렸다. Font wrap `:169`는 licence / fallback / outside만 이름하고 live-computed 칸의 "not a new computed extract"를 빠뜨렸다. Family `:179`는 fallback prohibition만 이름하고 IBM Plex keep-both를 빠뜨렸다. Capture `:215`는 kind / applicability / not-complete만 이름하고 generic `Focus` ≠ `focus-visible`을 빠뜨렸다. Layout `:539`는 §5 lists / breakpoints만 이름하고 footer Primary 36 / 48-52 keep을 빠뜨렸다.

## 수정 목록 (24건)

### B2a — 인접 한정 (본문 5건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:72` — Semantic color | Purple Subtle "not a YAML colors key"와 Light Secondary `#f5f5f5` "footer verification writing"은 세 번째 부류. 기존 한정은 two-key / `#5741d9` off `#5741d8`만. | 기존 완전형에 Purple Subtle §2-not-YAML-key · Light Secondary footer-not-YAML-key를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:169` — Font-evidence wrap | `:164` "The type roles below are the source's YAML / §3 writings, not a new computed extract"는 세 번째 부류. 기존 한정은 licence / fallback / outside만. | 기존 완전형에 YAML/§3-not-new-computed-extract를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:179` — Family | `:177` "Neither writing was chosen as a replacement"는 세 번째 부류. 기존 한정은 fallback prohibition만. | 기존 완전형에 IBM Plex YAML-mono / §3 Display-fallback keep-both를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:215` — Capture record | Generic `Focus` capture를 `focus-visible` treatment로 읽지 않는 것은 세 번째 부류. 기존 한정은 kind / applicability / not-complete만. | 기존 완전형에 Focus-not-focus-visible을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:539` — Layout | `:541` "They stay on the Primary Purple record"는 세 번째 부류. 기존 한정은 §5 lists / breakpoints만. `:235`는 Primary 블록이라 `:541`에 인접하지 않다. | 기존 완전형에 footer Primary 36 / 48-52 / 8-15×12-16 keep을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 40, `not Kraken-authored` 40, `separately published UI specification` 40. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 53, 61, 72, 107, 122, 132, 136, 153, 163, 169, 179, 183, 204, 215, 235, 263, 291, 319, 345, 371, 387, 407, 426, 446, 456, 475, 494, 508, 539, 546, 559, 561, 597.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | Semantic 행 10 | two-key / catalog-hex만. 본문 `:72`가 이제 Purple Subtle·Light Secondary not-YAML-key도 이름한다. | 그 판단을 행에 추가. |
| 7 | Font wrap 행 17 | licence / fallback / outside만. 본문 `:169`가 이제 not-new-computed-extract도 이름한다. | 그 판단을 행에 추가. |
| 8 | Family 행 18 | fallback prohibition만. 본문 `:179`가 이제 IBM Plex keep-both도 이름한다. | 그 판단을 행에 추가. |
| 9 | Capture 행 21 | kind / applicability / not-complete만. 본문 `:215`가 이제 Focus-not-focus-visible도 이름한다. | 그 판단을 행에 추가. |
| 10 | Layout 행 36 | lists / breakpoints만. 본문 `:539`가 이제 footer Primary keep도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **40 = 40** (E1 1:1). 데이터 143–182.

### E2 / E2a / E2c — 로그 목적지 (14건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 줄 수 대신 `grep -o | wc -l` 발생 수.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML identity 행 | homepage prefix dest 6 at 9/21/22/221/472/491 — `/prices` 줄을 홈으로 셈. home-only dest **4** at 9/21/221 (9×2). P dest 3 at 13/48/49는 prices를 포함. | home-only DESIGN dest **4** + P dest **2** at 13/48. |
| 12 | YAML identity 행 | prices dest 4 at 5줄. | dest **5** at 9/22/221/472/491 + P dest 1 at 49. |
| 13 | YAML identity / colors | `#5741d9` DESIGN dest 3 at 9/72/97. 9에 2회. colors 행은 9/78/97 — 78은 `#5741d8`. | dest **4** at 9/72/97. |
| 14 | YAML identity 행 | `logo.type: github` / `krakenfx` DESIGN dest 1 at 204. Named gaps `:602`에도 있음. | dest **2** at 204/602. |
| 15 | YAML metadata 행 | Verified 18/36/40 — 36은 `tokens.extracted`, 40은 Conflicts. freshness 33–38은 표+빈줄+문단을 섞음. | table **33–36**; Verified **18/34/38**. |
| 16 | YAML metadata 행 | `prose-derived` DESIGN dest 2 at 9/136. 9에 2회. P dest 5 — 27·67에 각 2회. | DESIGN dest **3**; P dest **7**. Exact `tokens.source: prose-derived` DESIGN dest 0 (fitpet). |
| 17 | YAML colors 행 | `#7132f5` P dest 6 at …/143. 143은 inventory `#5741d9` 행. 135에 2회. rgba / `#f5f5f5`는 줄만. | P dest **6** at 53/76/77/105/135. rgba DESIGN dest **5**. `#f5f5f5` DESIGN dest **5** at 72/99/453/455/456. |
| 18 | YAML family 행 | `IBM Plex Sans` at 166/175/177만. | dest **10** at 11/166/169/173/175/177/179. |
| 19 | YAML type-roles 행 | `1.17` dest 2 / `1.22` 1 / `1.29` 1 / `1.38` 3 / `1.43` 2 / `1.33` 1 / `1.00` 1 — 표 칸+notes 이중 출현을 줄로 셈. | dest **3 / 2 / 2 / 6 / 4 / 2 / 2**. YAML `1.2` dest 2는 그대로 두고 `1.20`과 분리. |
| 20 | YAML spacing 행 | `tokens.rounded.full: 9999` dest 2; `9999px` dest 3. 119에 각 2회. | dest **3** / dest **4**. |
| 21 | YAML components 행 | `not in the token set` dest 7. 215에 2회. | dest **8**. |
| 22 | Footer 행 | Verified paragraph 40 · Conflicts 42 · stripe 44 · measurements at 235만. | Verified **38** · Conflicts **40/186** · stripe **42/186** · `8-15×12-16` / `48-52` dest **4** at 235/539/541. |
| 23 | §12 / Deviations | inventory 141–183 (헤더+빈줄). | **143–182** (40 data rows). |
| 24 | §15 곡선 행 / Deviations | omit at 148 — 실제 생략 문장은 147. `wc -w` 7,613 · worker SHA만. | **147**. `wc -w` **7,720**. auditor SHA `0ec5b9bc94c51a29706253c3b8d792a4be168fbcc78c64cfb1b8edfd6d508cdd`. |

Destination SHA `96742df493474fd569351966355c4995ad90737cd04f40b4d280a6531fffa852` → `0ec5b9bc94c51a29706253c3b8d792a4be168fbcc78c64cfb1b8edfd6d508cdd` (한정 확장 후). 줄 수 DESIGN `wc -l` **602** 불변. provenance 186 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 40개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 153 (transition properties · animation name · duration · easing · reduced-motion behavior + per-component gate).
- E2d: sibling-only 머리(`provenance.md:90`)는 원장에 남기고 「세 파일이 생략한다」고 단언하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:131`)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. `5%`는 삭제 필드 종류로만 적힘.
- `components_harvested` DESIGN dest 0 / `tokens.source: prose-derived` DESIGN dest 0 은 로그 주장과 맞다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 0 / candidates 138. `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨: Kraken / Payward, Inc. / Own the Power of Your Money / Crypto, Stocks & more / Sign up / Try Kraken / Sign in with Apple / Two-factor authentication required for withdrawals / Make your first trade / Your transaction history will appear here. / Insufficient USD. Deposit funds or convert from another asset. / Deposit / Kraken Learn / still here / still here since 2011 / Get rich quick / to the moon / Robinhood — 원본·산출 모두 dest ≥1. 발행 라틴 손실은 안 보인다. sibling 전용 `Sign-up now` / `Get Kraken` / `Log in` / `Open your free account` 는 원본 0 / DESIGN 0.
- **B1.** sibling 전용 `#0d0d0d` / `#855bfb` / `rgb(113, 50, 245)` / `Sign-up now` / `Get Kraken` / `Tradable (661)` / `filter pill toolbar` / `consumer home` DESIGN dest 0. sibling의 h3/섹션 표제 분류가 본문에 사실로 들어온 흔적 없음.
- **D2a.** 식별자(`Daniel Schmidt`/`Aisha Khan`/`Marcus Davies`/`Berlin`/`Dubai`/`London`) · 동기(`cold storage`/`API uptime`/`order book depth`/`Cautious crypto`/`regulatory track record`) · 소속(`Kraken Pro`/`Professional crypto trader`/`Recently retired`) DESIGN/P/L dest 0. Audience는 원본 그룹 `long-term holders, professional traders, institutional clients`만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음.
- **A1.** 원본 YAML 컴포넌트 10레코드의 `type`/`bg`/`fg`/`radius`/`padding`/`font`/`border`/`shadow`/`use`가 각 대응 블록에 행으로 있다. button-primary 7필드, button-outline 6필드(`padding`/`font`/`shadow` 없음), button-subtle 6필드, button-white 6필드(`padding`/`font` 없음), button-secondary 5필드, badge-success 5필드, badge-neutral 5필드, card 7필드, card-stat 5필드(`fg`/`border`/`shadow`/`font` 없음 — YAML에 없음), card-featured 7필드. icook형 키 경로 소실 없음 — 같은 hex가 다른 블록에만 있는 형태 없음.

AUDIT_DONE fixes=24
