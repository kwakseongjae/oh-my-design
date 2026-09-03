# pixiv 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/pixiv/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/pixiv/DESIGN.md`
검증 sibling: `web/references/pixiv/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-03

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not pixiv-authored or a separately published UI specification`을 요구한다. 기존 53건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 53 / 원장 53. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion 표 뒤 `:202` duration keep-apart(`motion-pop` ≠ `motion-fast` ≠ `motion-standard`)와 Type roles 표 뒤 `:269` size-vs-spacing(Caption 12 ≠ `tokens.spacing.md: 12` 등)은 세 번째 부류인데 인접 완전형이 없었다. `:192`는 computed-CSS 분류이고 `:253`은 YAML/표 keep-both라, 표 너머의 그 읽기를 이름하지 않는다.

## 수정 목록 (16건)

### B2a — 인접 한정 (본문 2건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:202` — Motion duration keep-apart | `` `motion-pop` `200ms` is not `motion-fast` `` 등은 세 번째 부류. `:192`는 표를 source-stated로 읽는 분류이고 `:220`/`:222`는 signature·B3라 인접하지 않다. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:269` — Type roles size-vs-spacing | Caption 12 ≠ `tokens.spacing.md: 12` 등은 세 번째 부류. `:253`은 표 앞 YAML/표 keep-both이고 Spacing `:155`는 다른 절이다. | 같은 줄에 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 55, `not pixiv-authored` 55, `separately published UI specification` 55. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

### A1 — 키 경로 복원 (1건; 해석은 기존 한정에 접음)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 3 | Follow (Toggle) `:401` / keep-apart `:408` | YAML `tokens.components.button-follow.fg` `#ffffff`가 Unfollowed 행에 없고 "white text"만 있었다. 같은 블록의 `#ffffff`는 Following **bg**(YAML `active`)라 icook형(값 grep은 통과, 키 경로 소실). 원본 §4 문구 `white text`는 A5라 대체하지 않음. | Unfollowed 행에 YAML `fg` `#ffffff`를 원문 옆에 병기. `:408` 기존 완전형에 「unfollowed text이지 following background가 아니다」를 접어 넣음. 발생 수 +0. |

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | 헤더 / 행 수 | 53 complete / 53 data rows. | **55** / **55**. |
| 5 | Motion duration keep-apart 행 | 없음. 본문 `:202` 신설. | 행 신설. |
| 6 | Type roles size-vs-spacing 행 | 없음. 본문 `:269` 신설. | 행 신설. |
| 7 | Follow keep-apart 행 | YAML `type: toggle` / most-pressed만. 본문 `:408`이 이제 YAML `fg` keep-both도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **53 → 55** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문을 고친 뒤 dest 표를 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML identity 행 | homepage URL DESIGN dest **2** at 9/233. 실측 dest **4** (L9×3 + L233×1). 줄 수(`grep -c`)로 센 형태. | dest **4** at 9 (×3) / 233 (×1) + provenance dest 6. |
| 9 | YAML family 행 | `Representative` / `no-custom-face` dest 2 at 227/249. 두 바늘 모두 DESIGN dest **0** (fitpet형 거짓 2차 목적지). | 실재 문자열 `no custom brand typeface` dest **2** at 232/249. |
| 10 | §14 applicability 행 | YAML `type: card` dest **2**. 실측 dest **1** at 575. | dest **1** at 575. `Primitive type: \`card\`` dest **2** at 536/565를 이중으로 적음. |
| 11 | §4 행 | Named Focus dest 2 at 490/**502**. `:502`에 `Named Focus` 없음. Text Field 안 dest 2는 490/496. 전체 dest **5**. | dest 2 at 490/496; overall dest **5**. |
| 12 | §15 행 | `ease-pop dest.`(계수 없음). `interpretive-reconstruction class` dest **2** at 192/222. 실측 dest **3** (192/222/303). | `ease-pop` dest **3** at 211/215/865. interpretive dest **3**. |
| 13 | §15 행 (재실측) | `motion-pop` dest 3 / `350ms` dest 2. `:202` 한정이 그 토큰을 다시 말해 dest **4** / **3**. | dest **4** / dest **3**. |
| 14 | §12 · Deviations | B2a DESIGN = 원장 = 53. | **55** / inventory **55** data rows. colon form 줄번호 26/193 → **26/195**(원장 행 2개 삽입). |
| 15 | YAML metadata 행 | `components_harvested` / `tokens.extracted` provenance dest 계수 없음. | provenance dest **4** / dest **2**. |
| 16 | identity slug 바늘 | `slug \`pixiv\``는 브랜드명 전량과 섞인다. | 바늘 `slug: pixiv` DESIGN dest 1 at 273 + `logo.slug` provenance dest at 16. |

수정 후 핵심 dest (`grep -o | wc -l`): homepage URL DESIGN 4 / provenance 6; `derived editorial implementation inference` DESIGN 55; `motion-pop` DESIGN 4; `350ms` DESIGN 3; `ease-pop` DESIGN 3; `YAML \`type: card\`` DESIGN 1; `Named Focus` DESIGN 5; `no custom brand typeface` DESIGN 2; `Representative` DESIGN 0.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 15 / candidates 254. 분모는 기록되어 있고 평균(4.4%) 근처다. `verdict: PASS`를 카피 보존으로 읽지 않았다. 발행 카피 손 대조: 投稿 / フォロー / ブックマークしました / 作品を投稿してみよう / 好きな作品を見つけよう / おすすめのタグ / ログイン / キャンセル / フォロー中 / + フォロー / もっと見る / R-18 / 12P 및 라틴 gloss(`show more` / `try posting a work` / `find works you love` / `Hurry!` / `anyone can post` / `never weaponized`) DESIGN dest >0. 라틴 카피 손실로 보이는 자리는 없었다. 직접 고치지 않음.
- **B1 / sibling.** `web/references/pixiv/.verification.md` 존재. sibling 전용 `#464a4d` DESIGN dest 0 / 원본 dest 0 / provenance dest 2; `#669fc2` DESIGN 0; root `#000000` DESIGN 0; sibling page-background `#eeeeee`는 본문에서 Grey 200(card fills)로만 쓰이고 page background로 승격되지 않음. `system-ui`는 원본 YAML 값. 구조 분류(`portal H2` 류) 승격 없음.
- **D2a.** 삭제 처분 행은 `§13 페르소나 3인 (이름·나이·도시 포함)`로 무식별. 본문에서 원형 동기·소속 분류 재구성 없음. 식별자 바늘은 원본에만 있고 산출 3파일 dest 0. `Mei` DESIGN dest 4는 전부 `Meiryo`.
- **E2d.** 부재 단언 행이 그 문자열을 분모에 넣는 형태 없음. Sibling 절은 항목을 원장에 두고 「이 파일에 없다」고 단언하지 않는다.
- **hex 귀속.** `#ffffff`는 canvas / on-primary / 버튼 텍스트 / Following bg 등으로 갈린다. Semantic 한정·원장이 canvas off on-primary를 이름하고, Secondary 한정이 fill off dark-theme를 이름한다. 고치지 않음.
- **A1 나머지.** 16 YAML 컴포넌트의 type/bg/fg/radius/padding/font/use/active는 Follow `fg`를 제외하면 대응 블록에 행으로 있었다. 토큰명 열(`tokens.colors.*` / `tokens.spacing.*`)은 살아 있다. §15 cubic-bezier는 원장에 이름·값으로 있고 본문은 이름만(T2 관례). 원본에 없는 모션 규칙 합성 없음.

AUDIT_DONE fixes=16
