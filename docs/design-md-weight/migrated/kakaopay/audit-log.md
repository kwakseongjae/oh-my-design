# kakaopay 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kakaopay/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kakaopay/DESIGN.md`
검증 sibling: `web/references/kakaopay/.verification.md` — `find web/references/kakaopay -type f`와 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

`ds.type: brand` — 발행 1차 UI 사양 아님. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KakaoPay-authored or a separately published UI specification`을 요구한다. 기존 28건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 28 / 원장 28. 숫자는 맞았으나 Service card `:235`는 16px ≠ `tokens.spacing.control: 16`만 이름하고, 같은 단락의 14px / 400 / KakaoSmall ≠ public-body type-role 읽기를 빠뜨렸다. 원장 행 23도 그 판단을 빠뜨렸다 — 좁은 쪽(icook·kakaobank형).

## 수정 목록 (17건)

### B2a — 인접 한정 (본문 1건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:235` — Service card | "The 14px / 400 / KakaoSmall font is this card's font; it is not only the public-body type-role row"는 세 번째 부류. 기존 한정은 16px ≠ `tokens.spacing.control: 16`만 가리킨다. | 기존 완전형에 reading the 14px / 400 / KakaoSmall font as this card's font rather than as a shared public-body type-role row를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 28, `not KakaoPay-authored` 28, `separately published UI specification` 28. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 51, 60, 73, 95, 109, 113, 117, 135, 142, 146, 154, 161, 174, 188, 212, 235, 250, 265, 267, 272, 308.

### E1 — provenance derived 범위 (1건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | Service card 행 | 16px ≠ spacing.control만. 본문 `:235`가 이제 14px ≠ public-body type-role도 이름한다. | 그 판단을 행 23에 추가. |

헤더 / 데이터 행 **28 = 28** 유지 (E1 1:1). 발생 수 +0.

### E2 / E2a / E2c — 로그 목적지 (15건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | YAML identity 행 | `#ffeb00` P dest 4 at 14/27/149/191. 줄 27에 두 번. | P dest **5** at 14/27×2/149/191. |
| 4 | YAML identity 행 | favicon URL P dest 16/27/29/200. URL 문자열은 P dest 1 at 16. 27/200은 mention. | DESIGN dest **1** at 158 + P dest **1** at 16. Host `t1.kakaocdn.net` dest 2 at 16/29. |
| 5 | YAML `ds` 행 | `public component library` P dest 2 at 25/31. | dest **3** at 25/31/218. `graphic-accessibility work` dest 2 at 25/31는 유지. |
| 6 | YAML spacing 행 | `tokens.spacing.control: 16` 줄 95/109/188/235. 줄 235에 두 번. | DESIGN dest **5** at 95/109/188/235×2. |
| 7 | YAML rounded 행 | menu `999px` at 188만. | `999px` DESIGN dest **4** at 109/182/188/267. |
| 8 | YAML components 행 | YAML `states` strings kept on Observed lines. | `hover and pressed labels observed on .item_menu` / `.btn_search` DESIGN dest **0**. §4 collector labels land at 186/210 (E2c). |
| 9 | §11 행 | Year `2024` dest 3 at 9/11/42. 줄 11에 두 번. | dest **4** at 9/11×2/42. |
| 10 | §12 행 | inventory 175–209. 175는 공백. | **176–209** (데이터 182–209, 28행). |
| 11 | §14 행 | body 169–171. 169/171은 공백. | **170/172**. |
| 12 | Sibling 절 | 전사 91–102. 91은 공백, 94부터 목록. | **94–102**. |
| 13 | Sibling 절 | sibling-only 104–113. 목록은 106–115. | **106–115**. |
| 14 | Deviations | `wc -w` 4,582 · worker SHA만. | `wc -w` **4,603**. auditor SHA `b365e99e55a35f3a4c9fa7810ddad4e80ad680f1f2b233792239d8cb11105217`. worker-close `af2028eecbc07e347065f2182fd6329051d2e39e51efa2e6fba944c7dab2c602` 유지. |
| 15 | F1 | 28항목 = 28. Service card는 16px만. | 28=28. Service card `:235`가 두 읽기를 이름한다고 적음. |
| 16 | F2 | `#ffeb00` P dest 4 · favicon 16/27/29/200 · library-boundary dest 2. | `#ffeb00` P dest 5 · favicon DESIGN 1 / P 1 · `public component library` P dest 3. YAML `states` dest 0. |
| 17 | §12 행 (Service card 원장) | 행 23이 16px만. | 행 23이 14px ≠ public-body type-role도 이름한다고 적음. |

Destination SHA `af2028eecbc07e347065f2182fd6329051d2e39e51efa2e6fba944c7dab2c602` → `b365e99e55a35f3a4c9fa7810ddad4e80ad680f1f2b233792239d8cb11105217` (한정 확장 후). 줄 수 DESIGN `wc -l` **318** 불변. provenance 219 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(`ds.type: brand`, 발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 두 그룹 원문. 이름·나이·도시·동기·소속 분류를 재구성하지 않음.
- Semantic 역할 행 — `:73`이 pairing / role-names / `#ffeb00` off / YAML-anchor를 덮음. "does not publish hexadecimal values"는 원본 §2 문장.
- Motion `:119` B3 다섯 종류+게이트 — 본문 전문 실재 (E2c 유지).
- Type roles 표 px 철자 — 원본 §3. `:146`이 unitless keep-both를 덮음.
- Layout `:265` — 원본 §5/§8 문장. `:265`/`:267`이 관측·측정 읽기를 덮음.
- B3 준수 주장 — `DESIGN.md` 119가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음.
- 2차 목적지 전수: inspected `https://www.kakaopay.com/main` DESIGN dest 2 at 9/21 · YAML homepage는 P 13 · `#ffeb00` DESIGN dest 2 · `does not substantiate historical, market-share, or user-persona claims` DESIGN dest 1 · `mobile app` DESIGN dest 1 · `graphic-accessibility work` DESIGN dest 1 · `tokens.rounded.action: 24` DESIGN dest 1 · `not in the token set` DESIGN dest 0 · `loading \| not-applicable` dest 3 · `loading \| applicable` dest 0 — fitpet형 0회 2차 목적지 없음.
- A1 키 경로: 원본 `tokens.components` 4레코드의 type/bg/fg/radius/padding/font/states/use가 각 블록에 행으로 있음. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/kakaopay/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — KakaoPay, “마음 놓고 금융하다”, 2024 design article 3:1 / filled forms / icon·2D·3D / simple-and-clear·warm-and-soft·rounded-and-soft, KakaoSmall / KakaoBig / KakaoDigitLatin / OFL, 원본 §12 원칙 · §7 Do/Don't · §10 보이스 · §11 결론 `does not substantiate historical, market-share, or user-persona claims`, YAML `use` 바이트.
- **관측 기술** — hex · unitless `1.38`/`1.5` · 26/17/14/13 type · `4px 16px 6px` / `0px` / `0px 15px` · 999/18/16/34 radius · `156` / `45` · `Primitive type` · `interactionCount: 0`.
- **편집적 해석·인과 판단** — corporate-service를 토큰 표면으로 읽기, URL을 named source로 두기, everyday-finance framing, 그래픽 원칙≠payment-app kit, 서사≠토큰, 과제 선정·not-biography, 청중 그룹·개인 페르소나 거부, 특성 묶기, 원칙·Do/Don't, role names-from-labels, spacing/shape 키 분리, 카드 14px ≠ public-body, elevation 경계, motion 게이트, 폰트 증거 class, fallback 금지, type-role keep-both, favicon pointer, applicability·not-complete-coverage, 보이스 레지스터, named-values-not-permissions.

세 번째 부류 중 28곳은 착수 시 인접 완전형이 있었고, 그중 1곳(Service card)은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. 신설 0. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 산출 3 + 원본 + sibling 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. 카피는 `grep -oF`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 28 | 1 | 2 |
| `not KakaoPay-authored` | 28 | 2 | 3 |
| `separately published UI specification` | 28 | 2 | 2 |
| inventory 데이터 행 | — | 28 | — |
| `Primitive type: \`button\`` | 2 | 0 | 0 |
| `Primitive type: \`card\`` | 1 | 0 | 0 |
| `Primitive type: \`badge\`` | 1 | 0 | 0 |
| `not in the token set` | 0 | 0 | 1 |
| `#ffeb00` | 2 | 5 | 4 |
| `192-brand.png` | 1 | 1 | 0 |
| `public component library` | 1 | 3 | 4 |
| `graphic-accessibility work` | 1 | 2 | 3 |
| `tokens.spacing.control: 16` | 5 | 1 | 4 |
| `999px` | 4 | 4 | 3 |
| `2024` | 4 | — | — |
| `마음 놓고 금융하다` | 4 | 1 | 3 |
| `loading \| applicable` | 0 | 0 | 0 |
| `components_harvested` | 0 | 3 | 2 |
| `playwright_cli` | 0 | 2 | 2 |
| `27px` | 0 | 3 | 2 |
| B3 다섯 종류+게이트 (`DESIGN.md` 119) | 1 | 0 | 1 |

provenance·migration-log의 같은 문자열은 mention이지 본문 use가 아니다. `loading \| not-applicable` 본문 dest 3 at 196/220/258 — 로그는 이스케이프 표기라 `grep -oF` dest 0.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **2** / candidates **123**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아님. 손 대조 발행 라벨 13/0/0 (KakaoPay / 마음 놓고 금융하다 / KakaoSmall / KakaoBig / Kakao Big / Kakao Small / KakaoDigitLatin / Apple SD Gothic Neo / Malgun Gothic / 맑은 고딕 / Helvetica Neue / OFL / 3:1) + YAML `use` 7/0/0. `latin-copy-audit` 1 lost = `omd:add-reference`(sibling/tool; 발행 카피 0). 발행 라틴 `simple and clear, warm and soft in color, and rounded and soft in line` / `accessible, reusable graphic communication` / `card- and cash-free payment` / `four-step online-payment journey` DESIGN dest 1씩. 발행 라틴 손실은 안 보임.
- **B1.** sibling 전용 `83` / `27px` / `playwright_cli` / `rgb(` / `27 component variants` / `three observed state labels` / `coverage score` DESIGN dest **0**. sibling `h3`/`H3` dest 0 (sibling에도 0). 값·구조 관측 침투 없음. 태그 `34px`는 원본 반지름이지 sibling line-height가 아님.
- **D2a.** 삭제 처분 행은 무식별(원본 §13이 이름·나이·도시를 만들지 않음; 두 그룹만 Audience에 원문). 이름·나이·도시 dest **0**. 동기·소속 분류 발명 0. hubspot형 새 그룹명 없음.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 mention-not-use를 적고 부재를 단언하지 않음. 「Measured DESIGN.md 0」은 DESIGN을 분모로 하고 로그 자신을 분모에 넣지 않음.
- **A1.** 원본 YAML 컴포넌트 4레코드의 type/bg/fg/radius/padding/font/use와 menu·search `states`가 각 블록에 행으로 있음. `corporate-card`·`corporate-tag`는 YAML에 states 없음 — 산출도 card는 C4 omit, tag는 Observed default only. Search YAML `bg: #eeeeee`는 Search 블록 Background 행. icook형 필드 소실 없음.

원본 `web/references/kakaopay/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=17
