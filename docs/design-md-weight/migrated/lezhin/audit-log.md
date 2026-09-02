# lezhin 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/lezhin/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/lezhin/DESIGN.md`
검증 sibling: `web/references/lezhin/.verification.md` — `find web/references/lezhin -type f`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 선행 `-` 패턴은 `--`로 보호.
날짜: 2026-08-29

발행 1차 UI 사양 없음 (`ds.name` / `ds.url` / `ds.type` 원본 frontmatter 0). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Lezhin-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 23. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope ¶1 `:9`는 토큰 표면 경계만 이름하고 같은 문단의 오프닝 제품 성격 읽기를 빠뜨렸다. Scope ¶2 `:11`은 분위기만 이름하고 dual-mode 분류를 빠뜨렸다. Semantic `:79`는 Level-5 / thumbnail-inset / overlay(이 절에 없는 고도 항목)를 색 본문 기록으로 적고, 실제 본문 기록(selected-chip wash / primary-disabled / AI-gradient)과 canvas/on-primary 밖 `#ffffff` 역할을 빠뜨렸다. Spacing `:120`은 “those unitless steps” 지시어만이고 원장은 `md`/`section` 두 비교만. Motion `:163` 초 단위·밀리초 병기는 `:153` 표 앞 한정에 인접하지 않았다. Capture는 B1 keep-off를 같은 문단에 쓰고도 한정 목록에서 빼 두었다. Layout은 컨트롤 높이를 같은 문단에 쓰고도 한정에서 빼 두었다.

문장 분류: 브랜드 발행 사실(태그라인·미션 문장·§7/§12 원문·YAML `use`) / 관측 기술(hex·치수·CSS 클래스·§14 트리트먼트) / 편집적 해석·인과 판단(표면 경계, dual-mode, 분위기, 서사≠토큰, 과제 선정, 키 비병합, keep-both, 승격 게이트, applicability). 세 번째 부류와 원장 정확성만 수정. 토큰 값·컴포넌트 표·상태 applicability·구조는 그대로.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 7건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Scope ¶1 | 오프닝 제품 성격(Korea's first… bold, content-first, unapologetically direct)은 세 번째 부류. 기존 한정은 토큰 표면·about 서사·가용성만. | 기존 완전형에 opening-characterization-as-catalog-reconstruction을 접어 넣음. 슬로건을 반복하지 않음. 발생 수 +0. |
| 2 | `DESIGN.md:11` — Scope ¶2 | dual-mode 분류는 세 번째 부류. 기존 한정은 dark/immersive/premium-unadorned만. | 기존 완전형에 light canvas + inverted near-black = dual-mode를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:79` — Semantic color | Level-5 / thumbnail-inset / overlay는 Elevation 절 판단. selected-chip wash / primary-disabled / AI-gradient와 control/snackbar/dark-mode inverted text는 이 절의 세 번째 부류인데 한정이 빠뜨림. | 고도 항목을 빼고 실제 색 본문 기록과 세 번째 `#ffffff` YAML 키 금지를 접어 넣음. hex를 다시 쓰지 않음. 발생 수 +0. |
| 4 | `DESIGN.md:120` — Spacing | 여덟 개의 same-number 비병합은 세 번째 부류. 기존 한정은 “those unitless steps”만. | 기존 완전형에 md/sm/xs/base/lg/xl/section/xxl 비병합을 이름함. 경로 문자열을 반복하지 않음. 발생 수 +0. |
| 5 | `DESIGN.md:163` — Motion keep-both | §9 `0.2s` / `0.25s`를 밀리초 스케일 옆에 두는 것은 세 번째 부류. `:153`은 표 앞이고 게이트·키워드만. | 완전형 신설. 값을 반복하지 않음. 발생 수 +1. |
| 6 | `DESIGN.md:244` — Capture record | 두 focus/active 기록을 `focus-visible` 행에 쓰지 않는 것은 세 번째 부류(B1). 기존 한정은 Kind/L/E/S/`use`/compact font/28px xs만. | 기존 완전형에 keep-off-focus-visible을 접어 넣음. hex를 반복하지 않음. 발생 수 +0. |
| 7 | `DESIGN.md:554` — Layout | 컨트롤 높이는 컨트롤 측정이지 cross-viewport 사양이 아니라는 읽기는 세 번째 부류. 기존 한정은 breakpoint/`calc`/max-width/touch/53 queries/dark swap/§5·§8 tablet만. | 기존 완전형에 control-heights-not-viewport를 접어 넣음. px를 반복하지 않음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not Lezhin-authored` 24, `separately published UI specification` 24. 완전형 정규식 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 52, 64, 79, 120, 131, 149, 153, 163, 188, 203, 207, 227, 244, 554, 563, 579, 615.

`node scripts/check-limiter-ledger.mjs lezhin` → 본문 24 / 원장 24 (178–201) 1:1 OK.

### E1 — provenance derived 범위 (7건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | Scope ¶1 행 | 토큰 표면·about·가용성만. 본문 `:9`이 이제 opening-characterization도 이름한다. | 그 판단을 행에 추가. |
| 9 | Scope ¶2 행 | 분위만. 본문 `:11`이 이제 dual-mode도 이름한다. | dual-mode를 행에 추가. |
| 10 | Semantic 행 | Level-5 / thumbnail-inset / overlay + canvas/on-primary만. 본문 `:79`이 이제 색 본문 기록 셋과 세 번째 YAML 키 금지도 이름한다. | 고도 항목을 빼고 본문이 이름하는 판단을 행에 맞춤. `#ffffff` 역할 분리(wave 39 krafton)를 원장에 적음. |
| 11 | Spacing 행 | `md`/`section` 두 비교만. 본문 `:120`이 이제 여덟 비교를 이름한다. | 여덟 비병합을 행에 적음. |
| 12 | Motion keep-both 행 | 없음. 본문 `:163` 신설. | 행 신설. 헤더 23→24. |
| 13 | Capture 행 | Kind/`use`/compact font/28px만. 본문 `:244`이 이제 keep-off-focus-visible도 이름한다. | 그 판단을 행에 추가. |
| 14 | Layout 행 | breakpoint/`calc`/tablet keep-both만. 본문 `:554`이 이제 control-heights-not-viewport도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **23 → 24** at 178–201 (E1 1:1).

### A1 — 키 경로

12 YAML 레코드 `tokens.components.<id>.<field>`를 대응 블록에서 **행으로** 대조. 값 grep 「어딘가에 있다」로 대체하지 않음.

| id | 필드 | 대응 행 |
|---|---|---|
| button-primary | type/bg/fg/radius/padding/font/use | Primitive type · Background · Text · Radius · Padding · YAML `font` · Token-set use |
| button-primary-large | type/bg/fg/radius/padding/font/use | 동형 |
| button-secondary | type/bg/fg/radius/padding/font/use | 동형 |
| button-tertiary | type/bg/fg/radius/padding/font/use | 동형. disabled `#fafafa`/`#dadadd`는 본문 기록, YAML 키 아님 |
| button-outlined | type/bg/fg/radius/padding/font/use | Background transparent · Padding `0 20px` |
| card-thumbnail | type/bg/radius/use | Primitive type `card`. fg/padding/font YAML에 없음 — 발명 없음 |
| card-circle | type/radius/use | Radius `9999px`. bg/fg YAML에 없음 |
| badge-chip | type/bg/fg/radius/padding/use | YAML radius `9999` 행 + 본문 `999px` 병기 |
| badge-chip-selected | type/fg/radius/use | YAML radius `9999` 행. bg YAML에 없음 |
| tab-default | type/fg/radius/padding/use | Height 36px는 `use` 문자열 |
| tab-selected | type/fg/radius/use | 동형 |
| dialog-dropdown | type/bg/radius/padding/use | Padding `12px 0` |

icook형 타 블록 hex 차용으로 가린 필드 소실 없음. 복원 없음. `node scripts/check-yaml-use-landing.mjs lezhin` → use 19/19.

### E2 / E2a / E2c — 로그 목적지 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -oF -- | wc -l`로 확인했다. 본문 한정 확장 후 dest가 바뀐 바늘은 재실측했다(wave 40 lablup). 바이트 바늘(`#ffffff` dest **18**, `0.2s ease-in-out` dest **1**, `0.25s linear` dest **1**)은 불변.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 15 | YAML type-roles 행 | `tokens.typography.label` dest **1** · `caption` dest **1**. `grep -oF`는 `label-medium` / `caption-small` 접두를 포함해 dest **2** / **2**. (`tokens.colors.primary` dest **3**은 같은 접두 규칙을 이미 씀.) | dest **2** / **2**. 접두 포함을 행에 적음. |
| 16 | §10 행 | `Direct` dest **1**. 실측 dest **2** (voice heading + Governance “Direct user instructions”). | dest **2**. |
| 17 | Footer CSS 행 | 다섯 번들 DESIGN dest **1** each인데 이중 목적지는 1번째·5번째만. 실측 `9161416b11db8c9e.css` / `06e1ad77298be69d.css` / `0427f27bd4442fbd.css`도 DESIGN dest **1** + provenance dest **2**. | 다섯 모두 `E2a`. |
| 18 | Gate run | limiter 본문 23 / 원장 23 (178–200). | **24** / **24** (178–201). |
| 19 | Deviations | `wc -w` 6679 · B2a 23=23 · worker SHA만. | `wc -w` **6834**. 24=24. Auditor DESIGN SHA `937393836178ec1e06601ab8014cceb04ceec21b9d2bd4d4f9390983be6b8e68`. |
| 20 | F1 목록 | 본문이 이제 이름하는 opening-characterization / dual-mode / 색 본문 기록 / 여덟 비병합 / second-unit keep-both / keep-off-focus-visible / control-heights를 목록이 빼 둠. Count **23**. | 목록을 본문에 맞춤. Count **24**. |
| 21 | F2 dual 목록 | 중간 CSS 세 번들 누락. label/caption/Direct dest를 착수 숫자로 적음. | 다섯 CSS · label dest **2** · caption dest **2** · Direct dest **2**. |
| 22 | §15 행 | second-unit dest는 맞았으나 keep-both 한정을 목적지 설명에서 빼 둠. | Motion keep-both 한정을 행에 적음. dest **1** / **1** 유지. |

Destination SHA worker `28d80e55654d9c7eff8c232f4ebae938e7e78f418138cd402f5f3d7c95806df4` → auditor `937393836178ec1e06601ab8014cceb04ceec21b9d2bd4d4f9390983be6b8e68` (DESIGN). 줄 수 DESIGN `wc -l` **618** 불변. provenance 200→**201**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 23개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 신설 1건도 같은 닫힘.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 180 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:42` dest 1. 준수 주장 유지.
- `loading | applicable` dest **5**. `loading | not-applicable` dest **5**. `default | applicable` dest **10**. `focus-visible | applicable` dest **10**. C4 Kind 생략 dest **2**.
- `prose-derived` DESIGN dest 0 / provenance dest 4. `components_harvested` DESIGN dest 0 / provenance dest 2. `2026-06-03` DESIGN dest 0 / provenance dest 10. `[FILL IN]` DESIGN dest 0.
- duration `125ms` / `200ms` / `250ms` / `0.2s` / `0.25s` / `1.8s` / `3s`는 본문에 값+역할로 남음 — T2 관례(웨이브 39 kkday). 되살리지 않음.
- 원본에 없는 reduced-motion은 Motion에서 omitted rather than invented — 모범(웨이브 39 kmong). 합성하지 않음.
- 충돌 처리: `#c40017`/`#9e0018`, `999px`/`9999`/`9999px`, YAML `"0 0 0 …"` vs §6 rgba, `0.2s` vs `200ms`, §5 4-col tablet vs §8 4–6-col를 문서 전체에서 keep-both. sibling `padding:0 20px` / `border-radius:2px`는 본문에 안 넣고 원본 YAML을 씀. krds형 자리마다 다른 정책 없음.
- E2d: 로그 dest 0은 DESIGN을 분모로 둔다. 「세 파일 어디에도 없다」 자기부정 행 없음. provenance Omission 「Identifier strings are not copied into this file」은 필드 종류만.
- D2a 처분 행(provenance Omission ledger)은 절·인원·필드 종류만. 이름·나이·도시·전기를 Item에 옮기지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 솔직한 재미 대폭발, 솔직한, 당신이 찾던 진짜 웹툰, 매일 업데이트. 오늘 뭐 읽을까?, 재미있는 만화를, 쉽게 결제해서, 편하게 보게 하자., stories can make the world a better place, April 2012 / Han Hee-sung / Kwon Jung-hyuk / June 7, 2013 / KidariStudio / December 2020, 네 가치, §7 Do/Don't 원문, §12 다섯 원칙, YAML `use` 12+7문자열.
- **관측 기술** — `#eb0014` / `#ff5254` / `#c40017` / `#111115` / 16-step px / Pretendard Variable / `lzButtonPrimary` / `lzCard` / `lzChip` / unitless `1.35`/`1.4`/`1.5` / §14 상태 트리트먼트 / 125ms·200ms·250ms.
- **편집적 해석·인과 판단** — 홈을 토큰 표면으로 읽기, about≠토큰 표면, 앱/Studio/Shop을 가용성으로 읽기, 오프닝 성격을 catalog reconstruction으로 읽기, dual-mode, dark/immersive/premium-unadorned, 서사≠토큰, 과제 선정·persona-off, 청중 묶기·전기 삭제, 특성 restatement, 원칙·Do/Don't, 역할 페어링·본문 전용 색 기록·세 번째 `#ffffff` 키 금지, spacing/shape 비병합, YAML offset≠§6 rgba, second-unit≠밀리초 변환, 폰트 class, family 두 키, favicon pointer, applicability·use beside Role·keep-off-focus-visible, §5/§8 tablet keep-both·control-heights-not-viewport, voice register, sample gloss, Named-gaps 분류.

세 번째 부류 중 23곳은 착수 시 인접 완전형이 있었고, 그중 6곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 표 뒤 keep-both 1곳은 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **4** / candidates **181**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다이지 카피 보존이 아니다. 손 대조 발행 한국어 5종(솔직한 재미 대폭발 / 솔직한 / 당신이 찾던 진짜 웹툰 / 매일 업데이트. 오늘 뭐 읽을까? / 재미있는 만화를, 쉽게 결제해서, 편하게 보게 하자.) DESIGN dest ≥1. YAML `use` 19/19. 미션 영문 `stories can make the world a better place` dest **1**. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 `레진코믹스` / `#18181b` / `BlinkMacSystemFont` / `Helvetica Neue` / `system-ui` / `Roboto` / `Segoe UI` / `Apple SD Gothic Neo` / `about.lezhin.com/ko` / `padding:0 20px` / `border-radius:2px` / `0 24px` / `237 KB` / `19,988` DESIGN dest **0**. `H2`/`H3`/`h3`/`portal H2` DESIGN dest **0**. 값·섹션 표제 분류 침투 없음. 각각 provenance dest ≥1 (inspect context).
- **D2a.** 식별(이름·나이·도시) DESIGN dest **0** / provenance dest **0**. 동기(page-stamp / friction = bad / Price sensitivity / lezhinus.com) DESIGN dest **0**. 소속 신조어 dest **0**. Audience는 원본 그룹 adult readers / creators / KR / United States / Japan services만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. `Seoul` DESIGN dest **1**은 §11 `Seoul-listed KidariStudio`(원본 dest 1)이지 페르소나 도시가 아니다. **로그 §13 행**은 원형 라벨 4종을 처분 바늘로 적지 않음. 게이트 copy-loss 바늘은 비라틴 인용 4자 이상이라 이 영어 라벨은 바늘이 아니다. 라벨 재수록을 D2a로 지목하지 않음. 처분 행에 식별자를 예시로 넣지 않음.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN/P를 분모로 두고 로그 자신을 넣지 않는다.
- **`#ffffff` 역할 분리 (wave 39 krafton 보고).** 같은 hex가 `tokens.colors.canvas`(light default background), `tokens.colors.on-primary`(text on primary red), Primary/Secondary/Selected-tab Text, snackbar text, dropdown paper Background, dark-mode `--text-default`에 붙는다. canvas vs on-primary는 착수 시 Semantic 한정·원장이 공유 hex keep-both로 이름했다. control/snackbar/dark-mode inverted text는 착수 시 원장이 빼 두었고, 이번 Semantic 한정·원장 행에 맞춰 넣었다. 본문 역할 부착은 고치지 않음.
- **`styles.refero.design`.** Named gaps DESIGN dest **1**. 원본·sibling은 `refero`만(원본 dest 1 / sibling dest 1 / `styles.refero.design` 원본 0). 도메인 문자열 승격. D1 인접. 고치지 않음.
- **서사 절단.** 원본 §1 `keeps the spotlight firmly on cover art` / `signals every interactive action` DESIGN dest **0**. 값·컴포넌트 필드가 아니라 분위기 서술 재배치(한정된 분위기 읽기로 흡수). 고치지 않음.

AUDIT_DONE fixes=22

## 개정 — 의미 검토 FAIL 3 (2026-08-29)

대상: `docs/design-md-weight/migrated/lezhin/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 24=24.

### 결함 1 — §9 고유 거터 `8–12px` 착지 (A3)

원본 `:258` `Card gutters are 4px (dense) or 8–12px (standard)`를 Spacing `:120`과 Layout `:540`에 병기. §5 `4px or 8px` dense / `12–16px` sparser는 다른 구간이라 대체하지 않음. provenance §9 삭제 점검 행을 같은 원문 구로 맞춤.

### 결함 2 — §3 Label 긴 쪽 병기 (A1 item 11)

Type roles Additional `:219`에 원본 `:91` `Label / UI text: 14px / weight 500 (medium) or 600 (semibold)`를 Caption·Section과 같은 방식으로 병기. YAML `Label / UI text, button labels`(600) · `Medium UI text`(500) dest **1** 유지.

### 결함 3 — Named gaps 발명 도메인 제거 (D1a)

Named gaps `styles.refero.design`을 원본 표기 `refero — not checked`로 되돌림. 원본이 이름하지 않은 도메인을 미해상 도메인으로 열거하지 않음.

`grep -oF -e` 실측:

| 문자열 | 원본 | sibling | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `8–12px` | 1 | 0 | 2 | 1 | 4 |
| `4px (dense)` | 1 | 0 | 2 | 1 | 4 |
| `Card gutters` | 1 | 0 | 2 | 1 | 3 |
| `14px / weight 500` | 1 | 0 | 1 | 0 | 3 |
| `500 (medium) or 600` | 1 | 0 | 1 | 0 | 3 |
| `Label / UI text, button labels` | 1 | 0 | 1 | 0 | 2 |
| `Label / UI text: 14px / weight 500 (medium) or 600 (semibold)` | 0 | 0 | 1 | 0 | 2 |
| `refero — not checked` | 1 | 0 | 1 | 1 | 3 |
| `styles.refero.design` | 0 | 0 | 0 | 0 | 0 |
| `12–16px` | 2 | 0 | 3 | 0 | 1 |

원본 Label 줄은 `**Label / UI text:**` 마크다운이라 콜론 포함 연속 문자열 SRC 0. 본문은 볼드 없이 같은 사실을 복원.

### 갱신한 dest 행

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML type-roles | Source §3 Label 긴 쪽 DESIGN | 0 | **1** |
| YAML type-roles | `14px / weight 500` DESIGN | 0 | **1** |
| YAML type-roles | `500 (medium) or 600` DESIGN | 0 | **1** |
| Footer Tier 2 | `refero — not checked` DESIGN / P | 0 / 1 | **1** / **1** |
| §5 Layout | `8–12px` DESIGN | 0 | **2** |
| §5 Layout | `4px (dense)` DESIGN | 0 | **2** |
| §5 Layout | `Card gutters` DESIGN | 0 | **2** |
| §5 Layout | `12–16px` DESIGN | 3 (미기록) | **3** |
| §9 | `8–12px` DESIGN / P | 0 / 1 | **2** / **1** |
| §9 | `4px (dense)` DESIGN / P | 0 / 0 | **2** / **1** |
| Deviations | `wc -w` | 6834 | **6870** |
| Header / Deviations | DESIGN SHA | `93739383…` | `00c5023a…` |
| F2 | 위 바늘 dual 목록 | 미수록 | E2a 수록 |

B2a `derived editorial implementation inference` DESIGN dest **24** 불변. `#eb0014` dest **10**. `Direct` dest **2**. YAML `use` 19/19 dest 불변.

`node scripts/check-limiter-ledger.mjs lezhin` → 본문 **24** / 원장 **24** (178–201) 1:1 OK.
`node test-v2/tools/migrate-reference.mjs --brand lezhin --gate-only` → PASS.

FIX_DONE lezhin fixed=3 logdest=13
