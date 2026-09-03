# PayPay 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/paypay/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/paypay/DESIGN.md`
검증 sibling: `web/references/paypay/.verification.md` — `find web/references/paypay -type f`로 경로 직접 확인. dotfile.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not PayPay-authored or a separately published UI specification`을 요구한다. 기존 38건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 38 / 원장 38. 숫자는 맞았으나 Live computed 행 `:208`의 「prose-derived YAML을 live-computed 칸에 두되 computed-style harvest로 승격하지 않는다」는 읽기가 본문 인접 완전형 없이 `provenance.md` 64에만 있었다 (B2: 권위 한정을 provenance로만 민 것). 로그 목적지는 줄 번호·dest 수가 여러 행에서 본문과 달랐다.

## 수정 목록 (25건)

### B2a — 인접 한정 (본문 1건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:208` — Font evidence Live computed | YAML `tokens.typography.family.sans: Noto Sans JP`와 `tokens.source: prose-derived`를 Live computed 칸에 두는 분류는 세 번째 부류. 같은 표의 다른 다섯 칸은 인접 완전형이 있는데 이 칸만 없었고, 그 읽기(computed-style harvest로 승격하지 않음)는 `provenance.md` 64에만 있었다. | 완전형 신설: "Placing that YAML sans family on this live-computed row, without promoting it as a computed-style harvest of every app screen, is a derived editorial implementation inference from the verified surfaces; it is not PayPay-authored or a separately published UI specification." 발생 수 +1. `prose-derived` 문자열은 기존 1회를 유지(같은 칸에 두 번 넣지 않음). |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **39**, `not PayPay-authored` **39**, `separately published UI specification` **39**. `provenance.md` 같은 구 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 45, 58, 70, 86, 130, 144, 163, 167, 207, 208, 209, 210, 211, 212, 221, 225, 243, 259, 272, 274, 296, 496, 604, 630, 683, 715, 738, 751, 761, 782, 795, 849, 883.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | Derived editorial inventory | 38 complete / 38 data rows. 본문 `:208` 신설을 원장이 없음. | 행 신설. **39** / **39** at `provenance.md` 129–167. `node scripts/check-limiter-ledger.mjs paypay` → `1:1 OK`. |
| 3 | Token source 절 (`provenance.md` 64) | `prose-derived` 본문 dest를 Scope + Font evidence만 이름. 실제 DESIGN dest **3** at 9 / **167** / 208. Motion `:167`이 빠짐. | Motion `:167`을 분모에 넣음. |
| 4 | Proof notes | `#ffffff`가 `tokens.colors.canvas`(page / card / text on red) · Background Float · red-fill component fg로 갈라지는데 원장이 그 분리를 적지 않음 (krafton형, E1). | Proof note 1행 추가 (`provenance.md` 176). 토큰 값·귀속은 본문에서 건드리지 않음. |

### E2 / E2a / E2c — 로그 목적지 (21건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | YAML identity — homepage | `DESIGN.md` 9 + `provenance.md` 13/24/45/50/54/67/73/83. 실제 DESIGN dest **3** at 9(×2)/717. provenance URL dest **7** at 13/40/47/51/55/73/80. 24는 dual을 이름만 하고 URL 없음. 45/50/54/67/83은 그 문자열이 없다. | DESIGN dest **3** at 9/717 + provenance dest **7** at 13/40/47/51/55/73/80. |
| 6 | YAML identity — favicon slug | `DESIGN.md` 253 + `provenance.md` 16/25. 실제 전문 dest DESIGN **1** at 253, provenance **1** at 16. 25는 URL이 없다. | dest **1** / **1**. 24는 dual 언급만. |
| 7 | YAML `prose-derived` | 옮김 → Scope + Font evidence. dest 3이라고만 적음. 실제 9/167/208. Motion이 2차 목적지인데 로그 처분 칸에 없음 (E2a). `components_harvested` provenance 22/169 → 원장 삽입 후 **22/172**. | 처분에 Motion을 넣고 dest **3** at 9/167/208 + provenance dest **6** at 20/64/102/171/178 (64는 2회). harvested 22/172. |
| 8 | YAML shadows | `DESIGN.md` 152/156/158. 실제 card **151**, toast **154**, dialog **155**. 152는 §6-only Level 2. 156/158은 빈 줄. | 151/154/155. |
| 9 | §6 Level 2 / 2r | 154–155라고 적음. 실제 154–155는 YAML toast/dialog. Level 2/2r는 **152–153**. | 152–153. |
| 10 | §6 extra local shadows | at 160. 실제 **157**. 160은 빈 줄. | 157. |
| 11 | §2 White Wordmark | 101 and 255. 실제 **100** and **254**. | 100/254. |
| 12 | §3 qualifiers | 207/209/… — 208이 없음. | 208을 넣음. |
| 13 | §4 reconstruction note | at 268. 268은 Focus≠focus-visible 문장. 재건 노트는 **270**. HTML-comment 행도 268을 2차 목적지로 적음. | 두 행 모두 **270**. |
| 14 | §4 Tier 1 URL | `DESIGN.md` 9/717 + `provenance.md` 13/45/50/54. DESIGN 줄은 맞으나 dest 3(9에 2회)을 안 적음. provenance 45/50/54는 URL 없음. | DESIGN dest **3** at 9/717 + provenance dest **7** at 13/40/47/51/55/73/80. |
| 15 | §9 PayPay残高 13px | `DESIGN.md` 490. 490은 `Padding: 20px`. 실제 **492**. | 492. |
| 16 | §9 transaction-row anatomy | `DESIGN.md` 518. 518은 Token-set use. 실제 **519**. | 519. |
| 17 | §14 C4 줄 | `DESIGN.md` 479/496/507/520/669/683/713. 479/507/520은 빈 줄, 713은 point-grant 탄. 실제 withheld는 **480/496/508/521/669/683/715**. | 그 일곱 줄. |
| 18 | §14 12행 범위 | `DESIGN.md` 723–734. 723은 표 머리, 725–734는 10행뿐. Disabled·Loading-inside-button은 735–736. | **725–736**. |
| 19 | §15 four curves | 값 문자열이 `DESIGN.md` 167/184/885에 있다고 적음. 실제 네 값 DESIGN dest **0**. `cubic-bezier` DESIGN dest **1** at 167. 184/885는 생략만 말하고 베지어 문자열이 없다. 값은 provenance 117–120 dest 1 each. | DESIGN dest **0** / 생략 명명 167 / 원장 117–120. B3 전문은 189·885에 실재(E2c 유지). |
| 20 | HTML comment | provenance 54–56. 실제 WebFetch+Wikipedia는 **55–56**. 54는 절 머리 빈 줄. | 55–56. |
| 21 | §11 narrative 원장 | `provenance.md` 174. 원장 삽입 후 Official history는 **175**. | 175. |
| 22 | Sibling `6px` | 「DESIGN에 unrelated paddings/borders로 나타난다」. 실제 단독 sibling-radius `6px` DESIGN dest **0**. `grep -oF 6px`는 `16px`/`26px`/`36px`/`56px` 부분 문자열. | standalone dest **0**로 고침. |
| 23 | B2a 38=38 주장 (Deviations / F1 / F2) | 워커 종결 38. F3 후 본문 39 / 원장 39. 본문을 고치고 dest 표를 안 고치면 lablup형 E2. | DESIGN dest **39** / inventory **129–167**. F1 목록에 208. |
| 24 | `wc -w` | 9,903. F3 한정 추가 후 **9,943**. | 9,943. |
| 25 | YAML identity homepage 2차 목적지 | Components Tier 1 (`DESIGN.md` 717)이 같은 URL의 2차 목적지인데 identity 행이 Scope만 적음. | 처분 칸에 Components Tier 1을 병기 (E2a). |

Destination SHA `7761a30e9c3f1c2c60ff9487dfc2235fb65dae2181a941690c39a84d32b6ca9d` (DESIGN, F3). 워커 종결 SHA `8b289fc0f7fc95522b5a0421aea5af9ec8395622015f8e08e8e0e3cfa76af55a`는 로그에 역사 값으로 남김.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **30** / candidates **285** (`verdict: PASS`는 대조한 바늘만). 손 스윕 발행 라벨 38 extracted / 0 missing은 재실측으로 유지. 라틴 설명문 dest 0 (고치지 않음, 발행 CTA가 아님): `single non-negotiable brand asset` SRC 1 / DES 0 · `pill or large-radius rectangles` SRC 1 / DES 0 · `Official brand red` SRC 1 / DES 0. 페르소나 인용 `this works.` SRC 1 / DES 0 — 로그 A5a 행이 원형 인용으로 처분했고 식별자가 아니다 (D2a 경계, laftel).
- **A1 키 경로.** YAML `tokens.components.<id>.<field>` 20레코드 전 필드가 대응 블록에 **행으로** 있다 (`Token-set use:` 20, primitive type button×4 / input×2 / card×3 / listItem×1 / badge×4 / tab×2 / toast×1 / dialog×2 / toggle×1). icook형 타 블록 hex 차용 없음. 색 토큰 19키 path+값 본문 생존. typography `use` 11문자열 Token-set use 열에 바이트 보존. 복원할 필드 소실 0.
- **D2a.** 이름·나이·도시 식별자 세 파일 dest 0 (`ゆうき`/`Yuki`/`田中さん`/`Tanaka`/`あや`/`Aya`/`Tokyo`/`Osaka`/`Fukuoka`/`Shibuya`). 동기·소속 분류 구 (`Office worker`/`Working parent`/`ramen shop`/`lives for the point campaigns`) DESIGN dest 0. 삭제 행은 `§13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함)`로 무식별. Audience는 원본 헤더 문구 `publicly described Japanese mobile-payment user segments`만. Primary tasks는 支払う / チャージ / 送る / PayPay残高.
- **E2d.** sibling-only 목록 행은 「this file에 없다」를 단언하지 않고 field kind를 이름한다고 적혀 있다. 부재 단언이 자기 분모를 포함하는 행 0.
- **B1.** sibling 전용 값 DESIGN dest 0: `#242323` 0 · `#3895ff` 0 · `55px` 0 · `playwright getComputedStyle` 0 · `#000000` 0 · `58px` 0. 구조 분류(`portal H2`류) 승격 없음. 본문 `live DOM getComputedStyle`은 원본 §4 푸터 문구(원본 1 / sibling의 `playwright` 0).
- **충돌 처리.** 소스 본문 CTA `#FF0033` vs sibling live-DOM `#3895ff` — 본문은 소스를 유지, sibling은 provenance에만. 자리마다 다른 정책 없음.
- **T2 관례.** §15 곡선 값은 역할·duration·signature만 남기고 생략. 값이 어디에도 없는 손실이 아니라 인용된 채 역할만 남는 형태. 원본에 없는 모션 규칙 합성 없음.

AUDIT_DONE fixes=25

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/paypay/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (39=39, 129–167).

### 결함 1 — A1 · item 11 — YAML `use` ↔ §4 Use 절단

원본 `:289` `Point campaigns, あげる/もらえる offers — bright, image-forward`를 Campaign / Promo Role `:500`에 복원. Token-set use는 YAML `:65` `Point campaigns, あげる/もらえる offers`를 유지. 한쪽으로 고치지 않음. 줄 삽입 없음.

판정: **사실 인용**, 한정 불필요. 근거 — YAML `use`와 §4 Use가 같은 promo-card를 두 표기로 적고, 잘린 것은 §4 고유 접미 `bright, image-forward`이다. 값(`#ffebef`, `16`, `20px`)은 이미 착지했다.

`node scripts/check-limiter-ledger.mjs paypay` → 본문 **39** / 원장 **39** (129–167) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs paypay` → use 31/31.
`node test-v2/tools/migrate-reference.mjs --brand paypay --gate-only` → PASS, `problems: []`.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용; AUD는 이 절 작성 전):

| 문자열 | SRC | SIB | DST | PROV | LOG |
|---|---:|---:|---:|---:|---:|
| `bright, image-forward` | 1 | 0 | **1** | 0 | 6 |
| `image-forward` | 1 | 0 | **1** | 0 | 8 |
| `Point campaigns, あげる/もらえる offers` | 2 | 0 | **1** | 0 | 5 |
| `point campaigns, あげる/もらえる offers` | 0 | 0 | **1** | 0 | 2 |

DST Role `:500` = 소문자 Role + 복원 접미. YAML Token-set use dest **1** 불변. `wc -w` **9,946**.

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 / dest | 옛 | 새 |
|---|---|---|---|
| YAML `tokens.components` | Campaign / Promo YAML use / §4 suffix | Token-set use 20줄만 | YAML dest **1** at 506; `bright, image-forward` dest **1** at Role 500 |
| §4 Component Stylings | Campaign / Promo longer Use | wave 37 일반 문장만 | Role 500 suffix dest **1**; YAML short dest **1** at 506 |
| Deviations wc -w | DESIGN.md words | 9,943 | **9,946** |
| Revision dest | `bright, image-forward` | 없음 0/0 | DESIGN **1** / P **0** |
| Revision dest | `image-forward` | 없음 0/0 | DESIGN **1** / P **0** |

Hashes: DESIGN.md `ce427b53e4926ee84bc4efb842b13343171314669364a0a989ed65489389c2b9`. provenance `2b419a4e4013da43986375b57d788e10f39a02c14ddfed9925f7789d87e00964`.

FIX_DONE paypay fixed=1 logdest=5
