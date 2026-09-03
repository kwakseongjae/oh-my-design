# Designer review — round 1

**Date:** 2026-09-04
**Artifact:** `test-v2/content-runs/aphrodite/higgsgen/render.html` (828 lines, 183 KB, 61 images inline-referenced)
**DESIGN.md:** `test-v2/content-runs/aphrodite/higgsgen/DESIGN.md` — **re-read in full at the start of this call** (§5 강제 재독)
**Viewport:** both — measured at 1440×900 and 390×844 (headless Chromium, `test-v2/tools/lib/browser.mjs` runtime)

## Summary

- BLOCK: 1
- WARN: 13
- FYI: 5

측정 근거는 모두 실행값이다. 렌더 높이 13122px(1440) / 11816px(390), 가로 스크롤 0
(`scrollWidth 1440 = innerWidth`, `390 = 390`), 핀 스테이지는 390에서 `position: static`(스택으로 전환 ✓),
첫 페인트 오버레이 없음. 이 페이지의 골격·모션 시스템·이미지 3층 처리는 DESIGN.md를 정확히 따른다 —
아래 이슈는 그 위에서 어긋난 지점만이다.

## Issues

### [BLOCK] 390에서 네비게이션 링크 탭 타깃이 44×44에 한참 못 미친다
- **Location:** `render.html:110-111` (`.nav ul{gap:26px}` / `.nav a{font-size:13px}`), 모바일 오버라이드 `render.html:345-347`
- **Rule:** §1.5 Mobile responsiveness — 최소 hit area 44×44 (iOS HIG) → 미달 시 BLOCK
- **Evidence:** 390×844 실측 — `Range 35×16` · `Control 40×16` · `Compare 50×16` · `Presets 42×16`.
  네 개 모두 세로 16px. 1440에서도 `38×17 / 44×17 / 54×17 / 45×17`로 세로 17px이다.
  `<a>`가 인라인이라 `.nav-in`의 `padding:14px`이 링크 자체의 히트 박스에 들어가지 않는다.
- **Fix suggestion:** `.nav a{display:inline-flex;align-items:center;min-height:44px}` +
  `.nav-in{padding:2px var(--gutter)}` (바 높이는 48px 근처로 유지된다). 390에서는 `.nav ul{gap:16px}`로
  줄여 4개 링크 + 워드마크가 한 줄에 남게 한다. 토큰 밖 `gap:26px`도 이때 같이 해소된다.

### [WARN] 디스플레이 스케일의 최상단 128px이 페이지 어디에도 없다
- **Location:** `render.html:55` `h1{font-size:clamp(40px,5.55vw,80px)}`
- **Rule:** DESIGN.md §3 — Display sizes **128 / 80 / 48**
- **Evidence:** 1440 실측 h1 = **79.92px**. 파일 전체 `font-size` 값 12종 중 128px은 0회.
  h2가 48px(실측 48.00px)이므로 실제 위계는 80/48/19 — 시스템이 정의한 3단 중 위 한 칸이 통째로 비어 있다.
- **Fix suggestion:** S1 히어로만 `clamp(44px,8.9vw,128px)`로 올리고 카피를 2줄로 끊는다("Write one line. /
  Direct the frame."). 나머지 h2는 그대로 두면 80은 자연히 중간 등급으로 살아난다.

### [WARN] h1의 트래킹·리딩이 스펙에서 벗어난다
- **Location:** `render.html:53-54` `h1,h2,h3{letter-spacing:-.035em;line-height:.94}`
- **Rule:** DESIGN.md §3 — Syne tracking **−0.04em**, line-height **0.92**
- **Evidence:** 실측 h1 `letter-spacing: -2.7972px / 79.92px = −0.0350em`, `line-height: 75.1248 / 79.92 = 0.940`.
  h2도 동일(−1.68/48 = −0.035em, 45.12/48 = 0.94).
- **Fix suggestion:** `letter-spacing:-.04em;line-height:.92`로 되돌린다. 80px에서 4px 더 조이고 1.6px 더 눕는
  차이라 디스플레이의 "판때기" 느낌이 눈에 띄게 달라진다.

### [WARN] 타입 스케일 밖의 크기가 6종
- **Location:** `render.html:57` h3 19px · `:111` nav 13px→모바일 12px(`:346`) · `:115` `.btn` 15px ·
  `:160` `.world .tag` 11px · `:292` `.plan ul` 15px · `:347` `.brand` 17px
- **Rule:** DESIGN.md §3 — display 128/80/48 · body 16/18 · label 13px mono. 그 외 크기는 정의가 없다.
- **Evidence:** 실측 h3 = 19px Syne 800 (디스플레이 등급도 바디 등급도 아니다), `.btn` 15px, 워드마크 17/19px,
  hero world 라벨 11px, 모바일 nav 12px.
- **Fix suggestion:** h3 → 18px(바디 상단)로 내리거나 24px(48의 절반)로 올려 등급을 하나 만든다.
  `.btn`/`.plan li` 15 → 16, `.brand` → 19px 고정, `.world .tag`/모바일 nav → 13px(라벨 토큰).

### [WARN] 색 예산 — 면적은 통과하지만 첫 뷰포트에 라임 요소가 7개다
- **Location:** `render.html:61` `.tag{color:var(--accent)}` (문서 전체 `.tag` 33회 중 18회가 라임),
  히어로 `:704-736`의 world 라벨 4개, `:118` `.btn--primary`, `:109` `.brand b`
- **Rule:** DESIGN.md §2 — accent는 **CTA · focus · selection · live indicator**, **≤5%/viewport**.
  §1.2 Toss 룰은 뷰포트당 saturated 2개, >4면 BLOCK.
- **Evidence:** 픽셀 실측 — 라임 점유율 **1440 히어로 0.59%**, **390 히어로 2.31%**, 스크롤 지점
  (1.0/3.6/5.2/7.0/9.2 vh) 0.04~0.52%. **면적 예산은 여유 있게 통과한다.**
  그러나 첫 뷰포트의 라임 *요소*는 7개다: `GEN`(워드마크) · `Still image engine`(섹션 태그) ·
  `Start a frame`(CTA 배경) · `Shelter` · `Pool hall` · `Glasshouse` · `Salt flat`.
  bbox 합은 뷰포트의 2.62%(1440) / 6.47%(390). 카운트 기준으로는 §1.2의 BLOCK 임계(>4)를 넘지만,
  DESIGN.md §7 우선순위상 브랜드 파일의 면적 예산이 상위 규칙이므로 **WARN으로 채점한다.**
  실질 문제는 위반이 아니라 효과다 — 라임이 라벨의 기본색이 되어서 라임 CTA가 화면에서 이기지 못한다.
- **Fix suggestion:** `.tag`의 기본색을 `var(--mute)`로 내리고, 라임은 (1) CTA, (2) `.progress i`·`.tick[data-first]`,
  (3) `.ba-bar`, (4) 섹션 최상단 태그 1개 — 뷰포트당 최대 2개만 남긴다. 히어로 world 라벨 4개는 `--mute`가 맞다.

### [WARN] DESIGN.md에 없는 hex 2종이 밝은 밴드에서 직접 쓰인다
- **Location:** `render.html:80` `.s--light .tag{color:#4A5A05}` · `:81` `.s--light .note{color:#3D3F42}`
  (같은 `#3D3F42`가 `:292` `.plan ul`에도)
- **Rule:** §1.2 — DESIGN.md에 없는 hex 직접 사용 → WARN. DESIGN.md §2의 밝은 밴드 토큰은
  `bg-light #F3F3F1` · `ink-dark #0B0C0E` 둘뿐이다.
- **Evidence:** `#4A5A05`는 라임의 어두운 파생색으로, 사실상 **새 브랜드 색이 토큰 밖에서 생겼다.**
  `#3D3F42`는 다크의 `mute #9A9B9E`에 대응하는 라이트 mute인데 시스템에 그 슬롯이 없다.
- **Fix suggestion:** 두 값을 `--mute-dark` / `--accent-dark`로 `:root`에 승격하고 DESIGN.md §2에
  밝은 밴드 3번째·4번째 토큰으로 추가(체크포인트 #2 경로). 그때까지는 `.s--light .note`를
  `color-mix(in srgb, var(--ink-dark) 74%, transparent)`로 파생시켜 토큰 밖 리터럴을 없앤다.

### [WARN] 반경 토큰 밖의 값 — light-copy 24px
- **Location:** `render.html:95-96` `.lc{... border-radius:24px}`
- **Rule:** DESIGN.md §2 Shape — **5px 카드 · 10px 스테이지 · 999 필 · No larger**
- **Evidence:** 문서 전체 `border-radius` 8종 중 `var(--r-card)`×4, `var(--r-stage)`×3, `999px`×2, `5px`×1은 정합.
  이탈은 `24px`(`.lc`) 1건과 `50%`(`.sun`, 아래 FYI) 1건.
- **Fix suggestion:** `.lc`는 `blur(40px)`로 형태가 어차피 뭉개지므로 `border-radius:var(--r-stage)`로 낮춘다
  (렌더 결과는 사실상 동일하고 토큰 위반만 사라진다).

### [WARN] disabled 상태가 시스템에 있는데 구현에는 없다
- **Location:** `render.html:115-124` (`.btn` 계열 전체)
- **Rule:** DESIGN.md §4 — Button primary "**disabled 40%**" / §1.4 Component states
- **Evidence:** 파일 전체에서 `disabled` 문자열 **0회**. default ✓ / hover ✓(`:119` brightness 1.06) /
  active ✓(`:120` .96) / focus ✓(`:50` 전역 `:focus-visible` 2px `--focus` offset 2, 밝은 밴드에서
  `--focus: --ink-dark`로 반전까지 `:75`) — disabled만 없다.
  이 랜딩에는 실제로 비활성 컨트롤이 없으므로 **접근성 결함은 아니고 시스템 미구현이다** → BLOCK이 아니라 WARN.
- **Fix suggestion:** `.btn[aria-disabled="true"],.btn:disabled{opacity:.4;pointer-events:none}` 한 줄을 추가해
  §4와 구현을 맞춘다.

### [WARN] 390에서 마키가 2줄로 남는다 — §5는 1줄을 규정한다
- **Location:** `render.html:246-252` (`.mq`, `.mq + .mq{margin-top:16px}`), 모바일 블록 `:342-372`에 `.mq` 오버라이드 없음
- **Rule:** DESIGN.md §5 — 390: "single col; hero cover keeps subject; **marquee 1 row**; pinned stages become stacked steps"
- **Evidence:** 390×844 실측 — `.mq` 2개 모두 `display:block`, 각 **높이 252px**. 두 줄이 화면 높이의 60%를 먹는다.
  같은 스펙의 다른 두 조항(단일 컬럼, 핀→스택)은 지켜졌다: 390에서 `.pin{position:static}`, `.grid8`/`.plans` 1열.
- **Fix suggestion:** `@media (max-width:760px){ .mq--rev{display:none} }` (역방향 줄을 버린다) 또는
  `.mq + .mq{display:none}`. 남는 한 줄은 `--h`를 168px로 낮춰 세로 예산을 회수한다.

### [WARN] 14px 미만 텍스트 8곳
- **Location:** `render.html:160` `.world .tag{font-size:11px}` (히어로 world 라벨 4개) ·
  `render.html:346` `.nav a{font-size:12px}` (390에서 링크 4개)
- **Rule:** §1.5 — 텍스트 14px 미만 → WARN
- **Evidence:** 실측 — 11px×4(양 뷰포트, 히어로 안), 12px×4(390 nav). 13px 라벨(총 51곳)은
  DESIGN.md §3이 명시한 크기이므로 예외로 둔다.
- **Fix suggestion:** `.world .tag`를 13px로 올리고 `letter-spacing`을 `.12em → .1em`으로 조여 폭을 보전한다.
  390 nav는 위의 BLOCK 수정과 함께 13px로 되돌린다.

### [WARN] 간격 토큰 이탈이 18종
- **Location:** `:106` `padding:14px` · `:110` `gap:26px` · `:115` `gap:10px;padding:15px 26px` ·
  `:153` `gap:22px` · `:157` `gap:14px` · `:161` `bottom:28px` · `:174-175` `gap:18px;padding:80px … 48px` ·
  `:207` `gap:6px` · `:243` `gap:10px` · `:260` `gap:20px` · `:262` `gap:14px` · `:287` `gap:20px` ·
  `:288` `padding:28px 26px` · `:291` `gap:14px` · `:292` `gap:9px` · `:305-306` `gap:40px;padding-bottom:56px` ·
  `:309` `gap:20px` · `:775` 인라인 `gap:20px` · 모바일 `:349` `bottom:210px`
- **Rule:** DESIGN.md §2 Spacing — **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128**
- **Evidence:** 파일에 등장하는 간격값 26종 중 토큰은 9종(4·8·12·16·24·32·48·64·96),
  토큰 밖이 **18종**: 2 · 6 · 9 · 10 · 14 · 15 · 18 · 20 · 22 · 26 · 28 · 34 · 40 · 56 · 80 · 120 · 196 · 210px.
  특히 `gap:20px`은 4곳(`.grid8` `.plans` `.foot-bar` 인라인)에 반복돼 사실상 비공식 토큰이 됐고,
  `.plan{padding:28px 26px}`는 §1.6의 "한 컴포넌트 안에서 padding-x/y 혼재"에 그대로 해당한다.
- **Fix suggestion:** 20→24, 26→24, 28→32, 22→24, 18→16, 14→16, 10→12, 9→8, 40→48(또는 32), 56→48,
  80→96(`.pin` 상단), 15px 버튼 패딩→`padding:16px 24px`. `.plan`은 `padding:32px`(단일값)로 통일.
  치환 후 남는 예외는 2px(진행 바)·6px(도트/틱)뿐이고, 이 둘은 헤어라인 계열로 §2 Elevation 쪽에 명시하면 된다.

### [WARN] 프리셋 그리드가 hover에서 transform 한다 — §2의 불변식과 정면 충돌
- **Location:** `render.html:262-265` `.tilt-c{transform:rotateX(…) rotateY(…)}` / `.tilt:hover .tilt-c{transition-duration:var(--now)}`, 스크립트 `:790-800`
- **Rule:** DESIGN.md §2 Motion — "**Hover never transforms** — brightness/background only."
- **Evidence:** 포인터가 카드 위에 있는 동안 `--tx/--ty`가 갱신되며 `rotateX(±6deg) rotateY(±6deg)`가 걸리고,
  전환 시간도 `:hover`에서 160ms로 바뀐다. 즉 transform이 hover 상태에 직접 묶여 있다.
  (§5가 "tilt grid 2×4"를 허용하므로 의도된 기법이긴 하나, §2의 문장은 예외를 두지 않았다.)
- **Fix suggestion:** 둘 중 하나로 모순을 없앤다 — (a) DESIGN.md §2에 "except the S7 preset grid
  (pointer parallax, not a hover state)" 예외를 명문화(체크포인트 #2), 또는 (b) 틸트를 지우고
  `.spot` 커서 스포트라이트 + `filter:brightness(1.06)`만 남긴다. 지금처럼 문서와 구현이 어긋난 채 두지 않는다.

### [WARN] 390 히어로 크롭에 `object-position`이 없다
- **Location:** `render.html:401` `<img class="shot hero-img" src="assets/hero-01.png" width="2048" height="1152">` / `:145` `.hero-img{width:100%;height:100%}` + `:93` `.shot{object-fit:cover}`
- **Rule:** DESIGN.md §5 — 390에서 "hero cover **keeps subject**" / §1.8 히어로 크롭
- **Evidence:** 소스는 16:9(2048×1152), 390×844 히어로는 0.46:1. cover로 맞추면 세로를 채우느라
  **원본 가로의 약 26%만 남는다.** 지금은 중앙 크롭이라 "천장을 담은 수면"이라는 피사체가 우연히 살아 있고,
  실제로 첫 페인트에서 h1·CTA 모두 가려지지 않는다(아래 §1.8 항목) — 그래서 BLOCK이 아니다.
  다만 이미지를 교체하는 순간 깨지는 종류의 통과다.
- **Fix suggestion:** `.hero-img{object-position:62% 50%}`처럼 의도를 코드에 적어 고정하거나,
  390용 세로 크롭(4:5) 변형을 `<picture>`의 `media="(max-width:760px)"` 소스로 붙인다.

### [WARN] 비교 슬라이더에 보이는 손잡이가 없다
- **Location:** `render.html:222-225` (`.ba input` 44×44 투명 thumb) / `:219-221` `.ba-bar` 2px
- **Rule:** DESIGN.md §4 Slider — "handle 44px hit area; keyboard arrows step 2%"
- **Evidence:** 히트 영역 44×44 ✓, `step="2"` ✓(`:545` 등 3개 입력 모두), `aria-label` ✓.
  그러나 시각적으로 존재하는 것은 폭 2px 라임 바뿐이고, `cursor:ew-resize`는 마우스에서만 단서가 된다.
  터치 사용자는 "드래그할 수 있다"는 신호를 카피(`:534` "Drag the handle")에서만 얻는다.
- **Fix suggestion:** `.ba-bar`에 중앙 원형 노브를 붙인다 —
  `.ba-bar::after{content:"";position:absolute;top:50%;left:50%;translate:-50% -50%;width:44px;height:44px;border-radius:999px;background:rgba(11,12,14,.62);border:1px solid var(--accent);backdrop-filter:blur(6px)}`
  (999 토큰 안, 라임은 테두리 1px만 쓰므로 색 예산에 거의 영향 없음.)

### [FYI] `.sun` 광원이 `border-radius:50%`
- **Location:** `render.html:148-151`
- **Rule:** DESIGN.md §2 Shape — 5 / 10 / 999만
- **Evidence:** 원형 radial glow라 `50%`와 `999px`의 렌더 결과가 동일하다.
- **Fix suggestion:** `999px`로 바꿔 토큰 밖 값을 0으로 만든다(무비용).

### [FYI] `.cell .idx` 규칙이 아무것도 매치하지 않는다
- **Location:** `render.html:188` `.cell .idx{… color:var(--accent)}` vs 마크업 `:499-506`
- **Evidence:** S3의 8개 `.cell` 안에 `.idx` 요소가 없다. 프레임 번호는 `.caps`(`:512-521`)가 대신 낸다.
- **Fix suggestion:** 규칙을 지우거나, 90점 항목 ②처럼 프레임 번호를 필름 안으로 되살린다.

### [FYI] ghost 버튼과 nav 링크에 `:active`가 없다
- **Location:** `render.html:121-124`, `:111-112`
- **Evidence:** primary만 `:active{filter:brightness(.96)}`(`:120`)를 갖는다. DESIGN.md §4도 ghost의 active를
  규정하지 않았으므로 위반은 아니다.
- **Fix suggestion:** `.btn--ghost:active{background:rgba(255,255,255,.14)}` — 160ms 안에서 눌린 느낌을 맞춘다.

### [FYI] 비교 슬라이더가 이미지 전면을 덮는데 `touch-action` 선언이 없다
- **Location:** `render.html:222` `.ba input{position:absolute;inset:0;width:100%;height:100%}`
- **Evidence:** 390에서 S4의 range 입력 3개가 각각 이미지 전체(약 260px 높이)를 덮는다.
  브라우저 기본값에 세로 스크롤을 맡기고 있다.
- **Fix suggestion:** `.ba input{touch-action:pan-y}` — 세로 스와이프는 페이지로, 가로 드래그는 슬라이더로.

### [FYI] S3의 8개 alt가 같은 문장으로 시작한다
- **Location:** `render.html:499-506`
- **Evidence:** 8개 `.cell` 모두 "A narrow ceramics workshop: a long birch bench…"로 시작한다.
  차이(각도·시간·렌즈)는 문장 끝에 있어 스크린리더 사용자는 같은 도입부를 8번 듣는다.
- **Fix suggestion:** 첫 셀만 전체 장면을 서술하고, 2~8번은 차이만 적는다("same room — bench height, midday, lens 85").

## 검사 항목별 판정

| 항목 | 판정 | 근거 |
|---|---|---|
| §1.1 Typography | WARN ×3 | 128 미사용 · tracking/leading 이탈 · 스케일 밖 6종. h1→h2→h3 스킵 없음(h1×1, h2×9, h3×11), 본문 weight 400/500 ✓ |
| §1.2 Color budget | WARN ×2 | 라임 면적 0.59%(1440) / 2.31%(390) — ≤5% **통과**. 요소 카운트 7 · 토큰 밖 hex 2종 |
| §1.3 Radius | WARN ×1, FYI ×1 | 5/10/999 정합 8건 중 이탈 `24px`·`50%` |
| §1.4 Component states | WARN ×2, FYI ×2 | focus 전역 존재 ✓(밝은 밴드 반전 포함) · disabled 미구현 · hover transform 모순 |
| §1.5 Mobile | **BLOCK ×1**, WARN ×1 | 탭 타깃 35×16 · 가로 스크롤 없음 ✓ · 11/12px 텍스트 |
| §1.6 Spacing | WARN ×1 | 토큰 밖 18종 |
| §1.7 Text contrast | PASS(인용) | **text-contrast PASS — 오케스트레이터 실행.** 이 리뷰는 재측정하지 않았다. 사진 위 텍스트에는 받침이 있다: 히어로 4겹(`:147-152` read/vig/base + beam), 카드 `scrim--b`/`scrim--soft`, 밝은 밴드는 사진 없음 → §1.7의 "받침 없음 WARN" 해당 없음 |
| §1.8 Overlay occlusion | PASS | 첫 페인트 오버레이 없음(쿠키·모달·시트 0). 실측 `elementFromPoint`: 1440에서 h1 중심(88,258,720×225)·CTA 중심(88,610,146×55) 모두 자기 자신을 반환, 390에서도 h1(20,354,350×99)·CTA(20,580,146×55) 동일. 고정 nav는 상단 48px 바로 h1과 겹치지 않는다 |

## 90점까지

r0 평(`FEEDBACK.md`)의 세 문장 — "이미지를 그냥 단순히 사용한 느낌", "시각적 와우 부족", "브랜드 성격이 밋밋" —
을 이 페이지에 대고 다시 읽었다. r1은 세 가지를 **구조로는** 이미 해결했다: 이미지가 행동하는 섹션이 5개
(S3 스크럽 시퀀스 · S5 다층 패럴랙스 · S6 마키 · S7 틸트+스포트라이트 · S8 마스크 리빌), 빛이 움직이고
(conic 빔 8s/19s, 호흡 광원 13s, light-copy 61개), 명암 뒤집기 4회가 실제로 있다.
남은 격차는 **연출의 강도와 인과**다 — 기법은 다 있는데 서로를 가리키지 않고, 가장 센 등급을 쓰지 않는다.
아래 6개는 새 이미지 생성 없이(61장 그대로) 실행 가능한 순서로 적었다.

**① 디스플레이 락업을 이미지 *안으로* — 128px + 피사체 앞뒤 마스크 레이어링 (S1)**
지금 h1(79.9px)은 좌측 스크림(`:147` `.hero-read` 92%→18%) 위에 얌전히 얹혀 있다. 이 구성이 정확히
"이미지 위에 글자를 놓았다"로 읽힌다. 힉스필드·어피니티 폴드의 공통점은 **타입과 이미지가 한 레이어가 아니라는 것**이다.
h1을 128px/−0.04em/0.92로 올려 화면 폭의 판으로 만들고, 히어로 원본의 전경(수면 반사선 아래)만 오려낸
복제 `<img>`를 h1 **위** z-index에 얹어 물이 글자를 가로지르게 한다. 도구는 이미 파일에 있다 —
`.detail .fine`(`:280-283`)이 쓰는 `mask-image` 그대로다. 추가 에셋은 알파 마스크 1개.

**② 프롬프트 토큰 점등 — 스크럽과 카피의 인과를 묶는다 (S3)**
`.prompt` 타이핑(`:200-205`), `.caps` 8구간 페이드(`:190-198`), `.strip` 스크럽(`:181-185`)은 모두 같은
`--pin` 타임라인을 쓰면서 **서로를 가리키지 않는다.** 프롬프트를 토큰 `<span>`으로 쪼개고, 각 프레임 구간에서
해당 토큰(`dusk` · `lens 85` · `bench height`)만 라임으로 점등 + 밑줄을 슬라이드시킨다.
그 순간 S3는 "이미지 8장 스크럽"이 아니라 **"지시가 프레임을 바꾼다"**가 된다. r0의 1번 지적에 대한 가장 직접적인 답이고,
색에만 거는 키프레임이라 새 스크립트도 라이브러리도 필요 없다.

**③ 증거의 벽에 브레이크아웃 하나 (S2)**
`.wall`(`:167-176`)은 `--w`/`--ar`만 다른 균질한 타일 벽이라 "갤러리"로 읽힌다. 큐레이션된 벽의 문법은
**하나가 크다**는 것이다. 중앙 1장을 2×2로 승격하고 그 타일에서만 같은 프롬프트의 4개 시드가 720ms로
크로스페이드하게 한다(나머지는 지금의 `brightness(1.06)` 유지). 위계가 생기는 순간 벽이 "늘어놓은 것"에서
"고른 것"으로 바뀐다 — 사람 손이 닿았다는 신호가 곧 브랜드 성격이다.

**④ 라임을 사건으로 되돌리고, 페이지에서 딱 한 번 *면*으로 쓴다 (전 섹션 + S9)**
측정된 밋밋함의 기계적 원인: 첫 뷰포트 라임 요소 7개, 면적 0.59%. 라임이 라벨의 **기본색**이라 어디에도 사건이 없다.
`.tag`를 `--mute`로 내려 라임을 CTA·진행·슬라이더로 좁히고(위 WARN), 대신 **S9 밝은 밴드의 가운데 플랜 카드
하나를 통째로 라임 면**(`background:var(--accent)`, `--ink-dark` 텍스트)으로 만든다.
페이지 전체에서 라임이 *면*으로 나타나는 유일한 지점 — 그 뷰포트의 라임 면적은 3% 남짓으로 §2 예산 안이고,
"기억나는 한 화면"이 생긴다. 다크 9섹션 사이에 라임 카드 1장이 박힌 밝은 밴드는 스크린샷 한 장으로도 브랜드가 된다.

**⑤ 핀 스테이지의 퇴장 프레임을 다음 섹션이 물려받는다 — 컷 연결 (S3→S4, S8→S9)**
지금 명암 뒤집기 4회는 그냥 섹션 배경색이 바뀌는 것이다(`.s--light` `:74-79`). 스테이지의 마지막 프레임
(seq-08 / `.detail .fine`)을 다음 섹션 상단 40vh로 끌고 가 흰 배경으로 크로스페이드하면 뒤집기가
**장면 전환**이 된다. "영상 같다"는 인상은 여기서 나온다. 도구는 이미 있다 — `animation-timeline:view()`(`:314`)에
`animation-range: entry 0% entry 60%`로 다음 섹션의 상단 레이어를 하나 더 얹으면 끝이고, 이미지도 재사용이다.

**⑥ 프리셋 그리드에 결과를 준다 (S7)**
8개 카드는 틸트하고 스포트라이트가 따라오지만(`:790-800`) **누르면 아무 일도 일어나지 않는다.**
만질 수 있어 보이는데 응답이 없는 그리드는 와우를 깎는다(그리고 지금 `<article>`이라 키보드로는 닿지도 않는다).
카드를 `<button aria-pressed>`로 바꾸고 선택 시 — (a) 테두리 라임 1px, (b) S3 필름 8프레임이 그 프리셋
세트로 교체(61장 안에 군별 세트가 이미 있다), (c) `.prompt` 꼬리에 프리셋 이름이 이어 타이핑.
페이지에 **상태**가 하나 생기면 데모가 제품처럼 보인다. 부수 효과로 위 WARN 두 건(disabled 미구현,
hover transform 모순)이 같은 커밋에서 닫힌다.

> 순서 제안: ④ → ① → ② 가 점수 대비 비용이 가장 좋다(에셋 추가 0, CSS 국소 수정).
> ⑥은 상호작용 설계가 붙으므로 별도 라운드로 미뤄도 된다.

## Verdict

- **BLOCK** (BLOCK=1, WARN=13, FYI=5) — 출간 불가, writer revision round 1.

BLOCK은 하나뿐이고 2줄이면 닫힌다(`.nav a`에 `display:inline-flex;min-height:44px`).
그 외에는 기계 합격선(LI 32/32 · text-contrast PASS · 렌더 무결성 — 모두 오케스트레이터 실행)을
이 리뷰가 뒤집는 항목이 없다. WARN 13건 중 **⑤색 예산 요소 수 · ⑨마키 2줄 · ②h1 트래킹/리딩 ·
①128px 미사용**은 아래 `## 90점까지`와 같은 지점을 가리키므로 함께 처리하는 편이 싸다.

### 취향 후보 (§8 — 기록하지 않음, 제안만)

같은 axis가 2회 이상 나온 항목 3개. **자동 기록 금지 규칙에 따라 `.omd/preferences.md`에 아무것도 쓰지 않았다.**
사용자에게 물을지는 오케스트레이터가 판단한다.

- `spacing` ×1(18종 이탈) + `radius` ×2 — "토큰 밖 값을 쓸 바에는 토큰을 늘리자"는 축. 20px·40px은 실제로
  4회·2회 반복돼 사실상 비공식 토큰이 됐다 → 스케일에 20/40을 추가할지, 24/48로 강제할지가 취향 결정이다.
- `color` ×2 — 액센트를 라벨 기본색으로 쓸지, 사건으로만 남길지.
- `typo` ×3 — 디스플레이 최상단 등급을 실제로 쓰는지(128), 스펙 수치(−0.04em/0.92)를 반올림해도 되는지.

**Screenshots:** `reviews/screenshots/round-1-desktop-1440.png` · `reviews/screenshots/round-1-mobile-390.png` (첫 뷰포트, 헤드리스 캡처)
