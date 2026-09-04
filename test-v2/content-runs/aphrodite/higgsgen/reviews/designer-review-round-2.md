# Designer review — round 2

**Date:** 2026-09-04
**Artifact:** `test-v2/content-runs/aphrodite/higgsgen/render-r2.html` (1150 lines, 311 KB — 폰트 3종 116 KB + GSAP/ScrollTrigger 115 KB 인라인 포함)
**DESIGN.md:** `test-v2/content-runs/aphrodite/higgsgen/DESIGN.md` — **이 호출 시작 시점에 전문 재독**(§5 강제 재독), 2026-09-04
**Storyboard:** `storyboard-r2.md` — 섹션 표 10행을 실측으로 1:1 대조
**Prior:** `reviews/designer-review-round-1.md` (BLOCK 1 · WARN 13 · FYI 5)
**Viewport:** both — 1440×900 / 390×844, 헤드리스 Chromium(`test-v2/tools/lib/browser.mjs`)
**측정 스크립트:** `reviews/measure-r2.mjs` (스크롤 위치별 computed transform / clip-path / opacity 델타, 액센트 인벤토리, 탭 타깃, elementFromPoint)

## Summary

- **BLOCK: 2**
- **WARN: 15**
- FYI: 5

r2 는 r1 이 "구조는 있는데 강도가 없다"고 적은 지점을 실제로 공격했다. **이미지가 행동한다는 주장은 측정으로
확인된다** — S1 줌스루(clip `inset(22.5% 25.5%)`→`inset(0%)`, 안쪽 스케일 1.25→1.00 역방향), S2 부채
(`--fan` .06→1, 첫 카드 rect 313,519,210×254 → 141,−224,235×267), S3 스크럽(8프레임 크로스페이드 +
레일 1→6→8 + 캡션 교체), S5 가로 핀(트랙 x −361→−3411, 진행바 179→1264px), S6 매치컷(cutA 544×493→
1440×900 → 정확히 그 지점에서 cutB 로 교대 → 540×491 로 축소), S8 스케일+클립(circle 36%→150%,
안쪽 1.13→1.00). **7개 섹션의 "이미지의 동사"가 실재한다.** 액센트 규율도 r1 의 실패를 정확히 뒤집었다:
첫 뷰포트 라임 요소 **1개**(면적 0.45%), 문서 전체 라임 *면* **1개**(S9 `.plan-cta`), 태그·캡션 라임 **0**.

문제는 두 곳에 몰려 있다. ① **S10 의 안무는 문서 바닥에 닿지 못한다** — 최대 스크롤(13174px)에서 타임라인이
progress 0.74 에 얼어붙고, 선언된 브레이크아웃이 한 번도 실행되지 않는다. ② **모바일 탭 타깃이 r1 의 BLOCK 을
닫지 않고 옮겨갔다** — 헤더 링크는 `display:none` 으로 사라졌지만 주 CTA 는 42px, 푸터 링크 4개는 17px 이다.
그 외 WARN 15 건 중 절반은 r1 이 이미 지적한 축(라벨 크기·토큰 밖 hex·disabled·hover transform)이 **닫히지
않았거나 악화된** 것이다.

## r1 대비 (BLOCK 1 · WARN 13 · FYI 5 → 항목별)

| # | r1 항목 | 상태 | 근거(실측) |
|---|---|---|---|
| **BLOCK** | 390 nav 탭 타깃 35×16 | **UNRESOLVED — 이동** | `.nav-links{display:none}` (`:470`) 로 링크 4개는 제거. 그러나 `#navCta` **139×42**, `.foot-bar nav a` **42×17 / 59×17 / 59×17 / 25×17**. 실패 탭 타깃 24개 중 6개 |
| W1 | 128px 미사용 | 개선, 미완 | h1 실측 **113.76px**(`clamp(46px,7.9vw,124px)`, `:68`). 80→114 로 올랐으나 §3 최상단 128 은 여전히 0회 |
| W2 | h1 트래킹·리딩 이탈 | **CLOSED** | h1 `−4.5504/113.76 = −0.0400em`, `104.659/113.76 = 0.920` — §3 정확 일치 |
| W3 | 타입 스케일 밖 6종 | 개선, 형태 변경 | 크기 12종 → **7종**(11 / 16 / 20 / 24 / 48 / 113.76 / 178). h3 19→24 ✓. 그러나 §3 밖은 여전히 11 · 20 · 24 · 178 |
| W4 | 첫 뷰포트 라임 7개 | **CLOSED** | 실측 **1개**(`#navCta`, 0.45%/뷰포트). 문서 전체 라임 텍스트 = `.pname`(선택 상태) 1개뿐 |
| W5 | 토큰 밖 hex 2종 | **악화** | 6종: `#DDFF3D`(`:130`) `#3A3C3E`(`:307`) `#08090A`(`:334`,`:417`) `#1E2410`(`:412`) `#1A1C1F`(`:414`) `#6E7074`(`:209`). `--mute-dark/--line-dark` 는 `:root`(`:42`)로 승격됐으나 DESIGN.md §2 에는 없다 |
| W6 | radius 24px(`.lc`) | **CLOSED** | 실측 radius 4종 = `5px`×68 · `10px`×8 · `999px`×11 (전부 토큰) + `50%`×5(아래 W5-r2) |
| W7 | disabled 미구현 | **UNRESOLVED** | 문서 전체 `disabled` **0회** (r1 과 동일) |
| W8 | 390 마키 2줄 | **CLOSED** | r2 에 마키 없음 — 컴포넌트 자체가 제거됨 |
| W9 | 14px 미만 텍스트 8곳 | **악화** | 390 실측 **93개**(11px: cap 54 · mono 16 · 무클래스 14 · tok 8 · scramble 1) |
| W10 | 간격 토큰 이탈 18종 | **대부분 CLOSED** | 비토큰 값 18 → **8**(5 · 6 · 7 · 9 · 10 · 14 · 18 · 22px). `var(--sNN)` 75회 사용. 반복 위반이던 20/26/28/40/56/80 은 전멸 |
| W11 | hover transform 모순 | **UNRESOLVED** | `.fx-tilt` 는 `pointermove` 로 옮겼지만(`:1002`) 포인터가 카드 위에 있는 동안 `rotateX/Y` 가 걸리는 사실은 같다. DESIGN.md §2 "Hover never transforms" 는 개정되지 않았다(재독 확인) |
| W12 | 390 히어로 object-position 없음 | **UNRESOLVED** | `.shot{object-fit:cover}`(`:117`)만, `object-position` 0회 |
| W13 | 비교 슬라이더 손잡이 없음 | **CLOSED** | `.ba-knob` 44×44 추가(`:320-321`) + 진입 자동 스윕 때 sheen 1회(`:1103`) |
| FYI1 | `.sun` radius 50% | 악화 | `50%` ×5 (`.glow` `:103`, `.ba-knob` ×4) |
| FYI2 | `.cell .idx` 죽은 규칙 | **CLOSED** | 규칙 제거, 진행 표시는 `.rail` 이 담당 |
| FYI3 | ghost/nav `:active` 없음 | **악화** | `:active` **0회** — primary 가 갖고 있던 `brightness(.96)` 까지 사라짐 |
| FYI4 | 슬라이더 `touch-action` 없음 | **UNRESOLVED** | `.ba input{position:absolute;inset:0}`(`:322`), `touch-action` 0회 |
| FYI5 | S3 alt 8개 도입부 동일 | **악화** | 8개 alt 가 **바이트 단위로 동일**(`:590-597`) — 200자에서 잘려 차이(각도·시간·렌즈)가 통째로 사라짐 |

**닫힘: WARN 13 중 6 (W2 · W4 · W6 · W8 · W10 · W13). BLOCK 1 은 이동, 악화 4(W5 · W9 · FYI1 · FYI3 · FYI5).**

## Issues

### [BLOCK] S10 의 안무가 문서 바닥에 닿지 못한다 — 페이지의 마지막 프레임이 중간 트윈 상태로 얼어붙는다
- **Location:** `render-r2.html:1139-1144` (`trigger:".stage--out", start:"top bottom", end:"bottom top"`)
- **Rule:** `storyboard-r2.md` S10 — "**관통**: 헤드라인 글자 속에 이미지, 스크롤로 **글자 밖으로 흘러나옴**" / §1.6 Layout
- **Evidence:** 문서 높이 14074px, 뷰포트 900px → **최대 스크롤 13174px**. 트리거 범위는 11843~13643px 이므로
  사용자가 도달할 수 있는 최대 progress 는 **0.739**. 스크롤 위치별 실측:
  `y=12700` scale 1.000 / opacity 1 / `#bleed` 0 → `y=13000` scale 1.031 / 0.990 / 0.157 →
  **`y=13174`(바닥) scale 1.2487 / opacity 0.9225 / `#bleed` 0.289**.
  타임라인이 지시한 종점은 `scale:4.2, opacity:0` 과 `#bleed opacity:.62` 다(`:1143-1144`).
  즉 **선언된 브레이크아웃은 한 번도 실행되지 않고**, 페이지의 마지막 화면은 1.25배로 부풀어 화면 밖으로
  373px 넘쳐 나간(rect `−108, −167, 1656×373`) 헤드라인이다. `body{overflow-x:hidden}`(`:59`)이
  가로 스크롤을 숨기기 때문에 §1.5 의 "가로 스크롤" 검사에는 걸리지 않는다.
- **Fix suggestion:** 트리거 범위를 문서가 실제로 줄 수 있는 스크롤에 맞춘다 —
  `trigger:"#s10", start:"top bottom", end:"bottom bottom"` (s10 은 12743~14074 이므로 종점이
  정확히 13174 = 최대 스크롤). 또는 `.stage--out` 뒤에 `min-height:60vh` 의 여유 트랙을 두고
  현재 트리거를 유지한다. 전자는 예산(15.64vh)을 늘리지 않으므로 §5 위반을 키우지 않는다.

### [BLOCK] 390 에서 주 CTA 42px · 푸터 링크 17px — r1 BLOCK 이 닫힌 게 아니라 옮겨갔다
- **Location:** `render-r2.html:231` (`.nav .btn{padding:9px 18px;font-size:16px}`) · `:440-442` (`.foot-bar nav`, `.foot-bar a`) · `:892-894` 마크업
- **Rule:** §1.5 Mobile responsiveness — 최소 hit area 44×44 (iOS HIG) → 미달 시 BLOCK
- **Evidence:** 390×844 실측, 인터랙티브 요소 24개 중 6개 미달 —
  `#navCta` **139×42**(세로 2px 부족) · 푸터 `Range 42×17` · `Control 59×17` · `Gallery 59×17` · `Fit 25×17` ·
  `.brand 142×30`. 헤더 링크 4개는 `.nav-links{display:none}`(`:470`)으로 제거돼 r1 의 그 4개는 사라졌지만,
  **같은 결함이 푸터 nav 로 그대로 옮겨갔고 주 CTA 는 새로 미달한다.**
  (`.skip` 1×1 은 `:focus` 에서 확장되므로 제외했다. `.preset` 8개와 `.ba input` 4개는 통과.)
- **Fix suggestion:** `.nav .btn{padding:11px 18px}` (42→46px, 바 높이 +4px). 푸터는
  `.foot-bar nav a{display:inline-flex;align-items:center;min-height:44px}` + `.foot-bar nav{gap:var(--s16)}`
  (4개 링크 + 워드마크가 390 한 줄에 남는다). `.brand` 도 같은 `min-height:44px` 를 받는다.

### [WARN] 라벨이 전부 11px — §3 의 13px 라벨 토큰이 페이지에서 사라졌다 (r1 대비 악화)
- **Location:** `render-r2.html:75-79` (`.mono{font-size:11px;letter-spacing:.16em}` / `.cap{font-size:11px;letter-spacing:.1em}`) · 주석 `:67` "라벨은 11px 모노"
- **Rule:** DESIGN.md §3 — "Labels **13px** mono uppercase tracking **.14em**" / §1.5 — 텍스트 14px 미만 → WARN
- **Evidence:** 1440 크기 히스토그램에서 **11px 가 93개**로 페이지 최다 크기다(16px 17 · 20px 11 · 48px 8 ·
  113.76px 6 · 24px 4 · 178px 2). 390 에서도 동일하게 93개가 14px 미만이다(cap 54 · mono 16 · 기타 14 ·
  tok 8 · scramble 1). 트래킹도 `.mono` 1.76/11 = **0.16em**(스펙 .14em), `.cap` 은 `text-transform:none`
  으로 uppercase 규정에서도 벗어난다. r1 은 13px 라벨 51곳이 스펙 일치라 예외 처리됐던 항목이다 — **회귀**.
- **Fix suggestion:** `.mono{font-size:13px;letter-spacing:.14em}` 로 되돌린다(§3 그대로). `.cap` 은
  라벨이 아니라 캡션이므로 §3 에 슬롯이 없다 — 13px mono 로 통일하거나, "caption 13px mono tracking .10em,
  sentence case" 를 §3 에 4번째 타입 등급으로 추가한다(체크포인트 #2 경로). 11px 은 어느 쪽도 아니다.

### [WARN] S3 의 토큰 점등이 캡션과 어긋난다 — 인과가 아니라 진행바다
- **Location:** `render-r2.html:1082-1083` (`ticks.forEach((t,n)=>t.classList.toggle("on", n<=i)); toks.forEach((t,n)=>t.classList.toggle("on", n<=i))`) · 캡션 배열 `:1024` · 토큰 마크업 `:585`
- **Rule:** `storyboard-r2.md` S3 — "프롬프트 토큰이 프레임 변화와 **점등으로 결합**" / DESIGN.md §1 — "every section proves range or **control**"
- **Evidence:** 프레임 06 지점(scrollY 3917) 실측 — 캡션은 **"frame 06 / 08 · bench height · midday · 85mm"**,
  같은 순간 점등된 토큰은 `a narrow ceramics workshop · long birch bench · white plastered wall ·
  one unglazed vessel · **eye level** · **morning**` 이고 `35mm` `hold the frame` 은 꺼져 있다.
  **캡션이 "bench height / midday" 라고 읽는 순간 화면의 라임 아닌 점등 토큰은 "eye level / morning" 을 가리킨다.**
  누적 점등(`n<=i`)이라 토큰 열은 프레임 인덱스의 진행바일 뿐, 어느 축이 바뀌었는지를 말하지 않는다.
  r1 의 "90점까지 ②"가 요구한 인과가 형태만 이식된 상태다.
- **Fix suggestion:** 프레임마다 **바뀐 축의 토큰만** 켜고 이전 축은 끈다. 토큰을 축별로 묶고
  (`data-axis="height|hour|lens"`) `SEQ_CAPS[i]` 를 파싱하는 대신 프레임별 축 값 배열을 하나 더 두어
  `tok[axis].textContent = value` 로 **토큰 텍스트 자체를 교체**한다 — "eye level"→"bench height" 로 글자가
  바뀌는 순간이 곧 프레임이 바뀌는 순간이 된다. 누적 진행은 이미 `.rail` 이 정확히 하고 있다.

### [WARN] S5 의 카드별 원근 변주가 GSAP 동일 트윈에 덮인다
- **Location:** `render-r2.html:1114-1117` (`gsap.utils.toArray(".gal-card").forEach(c => gsap.fromTo(c,{"--pz":"-90px"},{"--pz":"40px"}, 같은 트리거·같은 범위))` vs 마크업 `:675-717` 의 카드별 `--pz:-40px / 30px / -70px / 10px / -20px / 40px / -55px / 20px / -35px / 5px / -15px`
- **Rule:** `storyboard-r2.md` S5 — "카드 크기가 **원근으로 변주**"
- **Evidence:** 마크업은 11장에 서로 다른 `--pz`(−70 ~ +40px)와 `--py`(−4 ~ +4deg)를 부여하지만, 스크립트가
  **11장 전부에 −90px→40px 라는 하나의 곡선**을 같은 스크롤 범위로 덮어쓴다. 실측 카드 폭 358 → 385 → 394px
  (p=.06/.45/.9) 로 세 지점 모두 균일하게 커진다 — 카드 사이의 깊이 차이가 아니라 트랙 전체의 한 번 숨쉬기다.
  `--py` 만 인라인 값이 살아 남는다(matrix3d 의 회전항 고정).
- **Fix suggestion:** 인라인 값을 시작점으로 삼는다 —
  `gsap.fromTo(c, {"--pz": getComputedStyle(c).getPropertyValue("--pz")}, {"--pz": (i%2? "48px":"-48px")})`
  형태로 카드마다 시작·끝을 다르게 하거나, 트리거를 카드별(`trigger:c, containerAnimation:hTween`)로 바꿔
  **지나갈 때** 호흡하게 한다. 지금은 마크업의 11개 값이 렌더에 아무 영향도 주지 않는다.

### [WARN] S1 핀 215vh 중 후반 40% 가 무사건 — 줌스루가 끝난 뒤 774px 동안 아무것도 움직이지 않는다
- **Location:** `render-r2.html:492` (`<section id="s1" class="track" style="--track:215vh">`) · 타임라인 `:1059-1066`
- **Rule:** `storyboard-r2.md` B3 — "피크 = S1 줌스루 완료 지점" / DESIGN.md §5 — 페이지 예산
- **Evidence:** S1 높이 1935px. 실측 p=0.45(scrollY 871)에서 이미 `#zoom` 은 `inset(0%)`, `.cut-a` 는 scale 1.0
  · opacity 0.256 로 매치컷이 진행 중이고, p=0.9(scrollY 1742)까지 바뀌는 값은 `.cut-a` opacity 0.256→0 과
  `#heroCopy` opacity 0.40→0 뿐이다. **약 774px(0.86 뷰포트) 동안 화면은 정지한 풀블리드 사진 한 장이다** —
  텍스트는 이미 퇴장했고 다음 섹션은 아직 없다. 피크 직후에 가장 긴 침묵이 온다.
- **Fix suggestion:** 둘 중 하나. (a) `--track` 을 **150vh** 로 줄여 줌스루 종료와 핀 해제를 붙인다
  (페이지 예산도 15.64 → 15.0vh 로 내려간다). (b) 후반을 두 번째 사건으로 채운다 — 매치컷 직후
  `hero-02` 에 느린 수평 패럴랙스(±3%)를 걸고 하단에 mono 스펙 한 줄(`seed · camera · light`)을
  80ms 스태거로 들여보낸다. 어느 쪽이든 "완료 후 침묵"을 없앤다.

### [WARN] §5 레이아웃 예산 2개 조항 초과 — 핀 4개(허용 2), 페이지 15.64vh(허용 11–14)
- **Location:** `render-r2.html:492` `:577` `:666` `:797` (`.track` 4개: S1 215vh · S3 255vh · S5 230vh · S8 170vh)
- **Rule:** DESIGN.md §5 — "Page budget **11–14 vh**; **two pinned stages allowed (S3, S8)**" / §7 Governance — 우선순위 `this file → storyboard`
- **Evidence:** 실측 문서 높이 14074px / 900px = **15.64vh**(1440), 390 에서 12381 / 844 = **14.67vh**.
  두 뷰포트 모두 상한 14 를 넘는다. 핀은 sticky 스테이지 4개(S1·S3·S5·S8)로 storyboard 선언과는 일치하지만
  DESIGN.md 가 허용한 2개의 두 배다. §7 의 우선순위상 **storyboard 가 DESIGN.md 를 덮을 수 없다.**
- **Fix suggestion:** 문서와 구현 중 하나를 고른다 — (a) S1 을 비핀으로 되돌리고(위 항목의 fix (a)와 같은 커밋)
  S5 트랙을 180vh 로 줄이면 핀 3개 · 예산 ≈13.9vh 로 §5 안에 들어온다, 또는 (b) §5 를 "up to four pinned
  stages; budget 11–16 vh" 로 개정하고 체크포인트 #2 승인을 받는다. 지금처럼 어긋난 채 두지 않는다.

### [WARN] DESIGN.md 밖 hex 6종 — 토큰 2개는 `:root` 로 승격됐지만 시스템에는 등록되지 않았다
- **Location:** `:130` `#DDFF3D` · `:307` `#3A3C3E` · `:334`/`:417` `#08090A` · `:412` `#1E2410` · `:414` `#1A1C1F` · `:209` `#6E7074` · `:42` `--mute-dark:#5A5C5E; --line-dark:rgba(11,12,14,.14)`
- **Rule:** §1.2 — DESIGN.md 에 없는 hex 직접 사용 → WARN. §2 Foundations 의 팔레트는 `#0B0C0E · #121316 · #F2F2F0 · #9A9B9E · line · #D1FE17 · #FFFFFF · #F3F3F1 · #0B0C0E(ink-dark)` 뿐
- **Evidence:** r1 은 2종이었다. r2 는 6종이며 그중 `#DDFF3D`(액센트 hover)는 §4 가 규정한
  `hover brightness(1.06)` 을 **새 브랜드 색으로 대체**한 것이다(1.06 배는 `#DEFF18` 근처로, `#DDFF3D` 는
  채도가 다른 별개 색이다). `#08090A` 는 S5·S10 의 배경으로 두 섹션에 걸쳐 `--bg` 보다 어두운 4번째 지면을
  만들었고, `#1E2410`·`#1A1C1F` 는 라임 면과 그 안 버튼 전용 색이다. r1 이 제안한 `--mute-dark`/`--line-dark`
  승격은 반영됐지만 **DESIGN.md §2 에는 여전히 없다** — 승격이 등록으로 이어지지 않았다.
- **Fix suggestion:** `#DDFF3D` → `filter:brightness(1.06)`(§4 원문), `#1A1C1F` → `color-mix(in srgb,var(--ink-dark) 92%,var(--ink))`,
  `#3A3C3E` → `var(--mute-dark)` 로 즉시 소거. 남는 `--bg-3:#08090A` · `--mute-dark` · `--line-dark` ·
  `--on-accent-2:#1E2410` 4개는 §2 에 정식 토큰으로 추가(체크포인트 #2). `#6E7074` 는 워드마크 그라디언트
  중간값이므로 `var(--mute)` 로 대체 가능하다.

### [WARN] `disabled` 0회 · `:active` 0회 — §4 의 상태 2개가 구현에 없고, active 는 r1 대비 회귀했다
- **Location:** `render-r2.html:126-134` (`.btn` 계열 전체) · `:229-231` (`.nav-links a`, `.nav .btn`)
- **Rule:** DESIGN.md §4 — Button primary "hover brightness(1.06); focus 2px ink ring offset 2; **active brightness .96**; **disabled 40%**" / §1.4 Component states
- **Evidence:** 문서 전체 `disabled` **0회**, `:active` **0회**. r1 에는 `.btn:active{filter:brightness(.96)}`
  가 있었고 이번 라운드에서 사라졌다. 현재 상태 커버리지: default ✓ / hover ✓(`:130`,`:132`,`:414`) /
  focus ✓(전역 `:focus-visible` `:64`, 밝은 밴드 반전 `:65`) / **active ✗ / disabled ✗**.
  실제 비활성 컨트롤이 없으므로 a11y 결함은 아니다 → BLOCK 이 아니라 WARN.
- **Fix suggestion:** 두 줄. `.btn:active{filter:brightness(.96)}` · `.btn[aria-disabled="true"],.btn:disabled{opacity:.4;pointer-events:none}`.
  `.preset:active`, `.foot-bar a:active` 도 같은 160ms 안에서 눌린 느낌을 받게 한다.

### [WARN] 포인터가 카드 위에 있는 동안 transform 이 걸린다 — §2 "Hover never transforms" 는 그대로다
- **Location:** `render-r2.html:176-180` (`.fx-tilt{transform:perspective(760px) rotateX() rotateY() scale()}`) · `:995-1005` (`pointermove` / `pointerenter` 에서 `--fx-tilt-scale` 1.012)
- **Rule:** DESIGN.md §2 Motion — "**Hover never transforms** — brightness/background only." (2026-09-04 재독, 문장 그대로 유지됨)
- **Evidence:** 리스너가 `:hover` 에서 `pointermove` 로 바뀌었고 주석(`:175`)은 "호버만으로는 움직이지 않는다"
  라고 적었지만, `pointerenter` 가 `scale(1.012)` 를 걸고 `pointermove` 가 ±16deg 범위의 회전을 갱신한다 —
  **포인터가 카드 위에 있다는 조건은 hover 와 동일하다.** r1 이 제시한 두 출구(§2 개정 또는 틸트 제거) 중
  어느 것도 실행되지 않았다. `@media (hover:none)`(`:179`)·`prefers-reduced-motion`(`:180`) 가드는 정상.
- **Fix suggestion:** §2 에 "except a pointer-parallax surface (S7 preset grid): ≤8deg, never on `:hover` alone"
  한 줄을 추가해 체크포인트 #2 로 승인받거나, 틸트를 지우고 `.fx-spot` 스포트라이트 + `filter:brightness(1.06)`
  만 남긴다. 문서와 구현이 어긋난 상태를 세 번째 라운드로 넘기지 않는다.

### [WARN] 390 첫 화면에 헤드라인이 없다 — h1 이 뷰포트의 87% 지점에서 시작한다
- **Location:** `render-r2.html:452-457` (`@media (max-width:900px){.zoom{position:relative;height:70vh} .hero-copy{position:relative;padding:var(--s32) var(--gutter) 0}}`)
- **Rule:** §1.8 — 히어로 크롭이 모바일에서 브리프가 요구한 정보를 못 보여 주면 / `storyboard-r2.md` B2 — "히어로 헤드라인 좌 상단 1/3"
- **Evidence:** 390×844 실측 `#heroH1` rect = **(20, 733, 350×169)**. 뷰포트 높이 844 이므로 h1 의 **첫 111px만
  화면에 들어오고 나머지 58px 는 접힘 아래**다. 첫 화면은 사실상 `.zoom` 591px(70vh) + 태그 한 줄이 전부다.
  오버레이 가림은 없다(§1.8 통과 — `elementFromPoint` 가 h1·CTA 모두 자기 자신 반환). 데스크톱은
  좌상단 1/3(88, 173, 980×419)로 스토리보드 B2 를 지킨다 — **모바일에서만 구도가 뒤집힌다.**
  덧붙여 `object-position` 이 없어(`:117` `.shot{object-fit:cover}`) 2048×1152 원본이 390×591 로 잘릴 때
  원본 가로의 약 33%만 남고 그 선택이 코드에 적혀 있지 않다(r1 W12 미해결).
- **Fix suggestion:** `@media(max-width:900px){.zoom{height:46vh} .hero-copy{margin-top:-14vh;position:relative;z-index:4} .hero-veil{display:block;background:linear-gradient(to top,rgba(11,12,14,.92),transparent 62%)}}`
  — 이미지 위로 헤드라인을 절반 겹치면 접힘 위에서 사진과 주장이 함께 보인다. 동시에
  `.hero-img{object-position:62% 50%}` 로 크롭 의도를 코드에 고정한다.

### [WARN] radius `50%` 5회 — §2 Shape 밖 (r1 FYI 대비 악화)
- **Location:** `render-r2.html:103` `.glow{border-radius:50%}` · `:321` `.ba-knob{border-radius:50%}`(비교 슬라이더 4개에 각각)
- **Rule:** DESIGN.md §2 Shape — "radius **5px** cards · **10px** stage panels · **999** pills. **No larger.**"
- **Evidence:** 실측 radius 인벤토리 = `5px`×68 · `999px`×11 · `10px`×8 · **`50%`×5**. 토큰 3종의 사용은
  완벽하고 이탈은 `50%` 하나뿐이다. r1 은 1회(`.sun`)였다.
- **Fix suggestion:** 두 곳 다 `var(--r-pill)` 로 바꾼다. 정원이므로 렌더 결과가 동일하고 이탈이 0 이 된다(무비용).

### [WARN] §2 Motion 이 규정한 이징 2종이 페이지에 한 번도 쓰이지 않는다
- **Location:** `render-r2.html:46` (`--e-in:cubic-bezier(.16,1,.3,1); --e-settle:cubic-bezier(.22,1,.36,1)`) — 선언부 외 사용 0회
- **Rule:** DESIGN.md §2 Motion — "Easings: UI `(.4,0,.2,1)`, **entrance `(.16,1,.3,1)`**, one **easeOutQuint `(.22,1,.36,1)` for hero settle only**"
- **Evidence:** `var(--e-ui)` **6회**, `var(--e-in)` **0회**, `--e-settle` 는 정의 1회뿐. 진입 모션은 대신
  `cubic-bezier(.16,.84,.24,1)`(`:188` split-rise)·`cubic-bezier(.25,.6,.35,1)`(`:143` sheen)·
  `cubic-bezier(.2,.8,.25,1)`(`:178` tilt)로 **세 개의 비공식 이징**이 들어왔고, GSAP 쪽은
  `power1.inOut` / `power2.in` / `power2.inOut`(`:1064`,`:1065`,`:1099`,`:1143`)를 쓴다.
  히어로 세틀에 배정된 easeOutQuint 는 히어로에 없다.
- **Fix suggestion:** 진입 계열 3종을 `var(--e-in)` 으로 통일하고, S1 매치컷 종료(`:1066` `#zoom .cut-b`)에
  `ease:"quint.out"` 를 얹어 `--e-settle` 을 규정대로 히어로에 한 번만 쓴다. GSAP 이징은
  `CustomEase` 없이도 `power4.out ≈ (.22,1,.36,1)` 로 근사된다.

### [WARN] 간격 비토큰 값 8종이 남았다
- **Location:** `:127` `.btn{padding:12px 22px}` · `:231` `.nav .btn{padding:9px 18px}` · `:224` `.nav-in{padding:14px}` · `:282` `.prompt{gap:6px}` · `:284` `.tok{padding:5px 9px}` · `:298` `.rail{gap:6px}` · `:273` `.fan-card .cap{left:10px;bottom:8px}` · `:369` `.cut-chip .cap{left:8px;bottom:7px}` · `:372` `.cut-note{padding:6px 12px}` · `:755` 등 `--w:calc(23% - 14px)` ×8
- **Rule:** DESIGN.md §2 Spacing — 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128px
- **Evidence:** 비토큰 값 **8종**(5 · 6 · 7 · 9 · 10 · 14 · 18 · 22px) — r1 의 18종에서 크게 줄었고
  `var(--sNN)` 은 75회 쓰인다(24 ×27 · 48 ×10 · 16 ×9 · 32 ×8 · 12 ×8 · 96 ×4 · 64 ×4 · 128 ×3 · 8 ×1 · 4 ×1).
  남은 이탈은 대부분 버튼/칩의 광학 보정이다. 다만 `.preset` 8개의 `calc(N% - 14px)` 는 `gap:var(--s16)`(`:376`)
  와 어긋나 **한 컴포넌트 안에서 간격이 16 과 14 로 혼재**한다(§1.6).
- **Fix suggestion:** `calc(N% - 14px)` → `calc(N% - 12px)` 로 gap 산식과 맞추거나 `gap:var(--s12)` 로 통일.
  버튼은 `padding:12px 24px` / `.nav .btn{padding:12px 16px}`(위 BLOCK fix 와 같은 줄), `.tok{padding:4px 8px}`,
  `gap:6px`→`var(--s8)`. 남는 예외는 헤어라인 계열(2px 레일)뿐이 된다.

### [WARN] S3 의 alt 8개가 완전히 동일하다 (r1 FYI 대비 악화)
- **Location:** `render-r2.html:590-597`
- **Rule:** §1.4/a11y — 서로 다른 이미지에 동일 대체텍스트
- **Evidence:** 8개 `alt` 가 모두 `"A narrow ceramics workshop: a long birch bench along a white plastered wall,
  a single tall unglazed vessel standing at the bench's two-thirds mark, a wire cutter and a folded grey cloth besi"`
  로 **바이트 단위 동일**하다 — 200자에서 잘려 r1 때 문장 끝에 있던 차이(각도·시간·렌즈)가 통째로 사라졌다.
  스크린리더 사용자에게 S3 은 같은 문장 8번이고, 이 섹션의 논지("한 방, 여덟 결정")가 정확히 전달되지 않는다.
- **Fix suggestion:** 첫 프레임만 장면 전체를 서술하고 2~8은 차이만 적는다 —
  `alt="Same workshop, bench height, midday, 85mm"`. 이미 `SEQ_CAPS`(`:1024`)에 그 8줄이 있으니 그대로 쓰면 된다.

### [WARN] 텍스트 마스크(S10)와 워드마크가 §3 타입 스케일 밖의 두 등급을 새로 만든다
- **Location:** `render-r2.html:423-424` `.breakout{font-size:clamp(52px,12.4vw,178px);line-height:.84;letter-spacing:-.05em}` · `:225` `.brand{20px}` · `:382` `.pname{20px}` · `:439` `.foot-mark{20px}` · `:74` `.lead{20px}`
- **Rule:** DESIGN.md §3 — Display **128 / 80 / 48**, body **16/18**, labels 13px
- **Evidence:** 실측 178px ×2, 20px ×11. 178 은 §3 최상단(128)보다 크고 `line-height .84`/`−0.05em` 은
  §3 의 0.92/−0.04em 밖이며, 20px 은 body 16/18 밖의 4번째 본문 등급이 됐다(lead·워드마크·프리셋명·푸터마크).
  h1 이 113.76 이라 **128 만 비어 있고 그 위아래로 두 등급이 새로 생긴 상태**다.
- **Fix suggestion:** `.breakout` 은 마스크 전용 디스플레이이므로 §3 에 "breakout display: 178, lh .84, −.05em"
  을 4번째 사이즈로 등록(체크포인트 #2)하거나 `clamp(52px,8.9vw,128px)` 로 내려 128 토큰을 실제로 쓴다 —
  후자면 h1 을 124→128 로 올리는 것보다 싸게 §3 최상단이 채워진다. `.lead` 20 → 18(§3 body 상단),
  워드마크·프리셋명은 24px(h3 등급)로 올려 20px 등급 자체를 없앤다.

### [WARN] h2 · h3 의 트래킹·리딩이 §3 에서 벗어난다 (h1 만 고쳐졌다)
- **Location:** `render-r2.html:70-72` (`.h2{line-height:.96;letter-spacing:-.035em}` / `.h3{line-height:1.05;letter-spacing:-.02em}`)
- **Rule:** DESIGN.md §3 — Display: Syne, tracking **−0.04em**, line-height **0.92** (사이즈별 예외 없음)
- **Evidence:** 실측 h2 `−1.68/48 = −0.0350em`, `46.08/48 = 0.960` · h3 `−0.48/24 = −0.0200em`, `25.2/24 = 1.050`.
  h1 은 `−0.0400em / 0.920` 으로 정확하다 — 같은 파일 안에서 디스플레이 서체가 세 가지 트래킹을 쓴다.
- **Fix suggestion:** `.h2{line-height:.92;letter-spacing:-.04em}` 로 맞춘다(48px 에서 −0.24px·−1.92px 차이라
  줄바꿈 위험 없음). h3 은 24px 로 작아 −0.04em 이 과하면 §3 에 "24px 이하 −0.02em / 1.05" 예외를 명문화한다.

### [FYI] 비교 슬라이더가 이미지 전면을 덮는데 `touch-action` 선언이 없다 (r1 FYI 유지)
- **Location:** `render-r2.html:322` `.ba input[type=range]{position:absolute;inset:0;width:100%;height:100%}`
- **Evidence:** 390 에서 S4 의 range 입력 4개가 각각 이미지 전체를 덮고, 세로 스와이프를 브라우저 기본값에 맡긴다.
- **Fix suggestion:** `.ba input{touch-action:pan-y}` — 세로는 페이지로, 가로 드래그는 슬라이더로.

### [FYI] 두 CTA 가 서로를 가리킨다
- **Location:** `render-r2.html:486` (nav CTA `href="#s9"`) · `:844` (S9 CTA `href="#s1"`)
- **Evidence:** "Start a render" 를 누르면 S9 로 가고, 거기서 같은 문구를 누르면 히어로로 돌아온다 — 목적지가 순환한다.
- **Fix suggestion:** 실제 목적지가 없는 데모라면 S9 CTA 는 `#s3`(Control, 제품을 보여주는 섹션)로 보내거나 `aria-disabled` 데모 라벨을 붙인다.

### [FYI] `.anim .zoom` 의 CSS 시작 상태가 렌더에 한 번도 나타나지 않는다
- **Location:** `render-r2.html:236` `clip-path:inset(52% 7% 8% 54% round 10px)` vs `:1061` GSAP `fromTo` `inset(30% 34% round 10px)`
- **Evidence:** `domcontentloaded` 시점 실측 computed `clip-path` = `inset(30% 34% round 10px)` — GSAP 이 첫 페인트 전에 덮으므로 **팝은 없다**. 다만 `:236` 은 죽은 규칙이고, 스토리보드가 적은 "썸네일(28%)"은 실제로는 화면 중앙의 32%×40%(면적 12.8%) 창이다.
- **Fix suggestion:** `:236` 을 GSAP from-state 와 같은 값으로 맞추거나(no-JS 폴백으로도 정합) 스토리보드 S1 행의 기하를 실제 값으로 고쳐 둔다.

### [FYI] 미디어 카드에 hover 상태가 없다
- **Location:** `.gal-card`(`:341`) · `.fan-card`(`:263`) · `.foot-chip`(`:433`) — `:hover` 규칙 없음
- **Evidence:** DESIGN.md §4 Card (media) 는 "scrim on hover (brightness only)" 를 규정한다. 커서가 51장의 카드 위를 지나도 아무 응답이 없다(S7 프리셋만 예외).
- **Fix suggestion:** `.frame:hover .scrim{background:rgba(11,12,14,.18)}` 또는 `.frame:hover{filter:brightness(1.06)}` — §2 의 "brightness only" 안에서 끝난다.

### [FYI] 앰비언트 루프 2종이 §2 Light 의 지속시간 목록 밖
- **Location:** `render-r2.html:162` `fx-beam-spin 5s` · `:212` `fx-gt-flow 9s`
- **Evidence:** §2 는 conic beam 8s(S1)/19s(S10), breathing 13s, marquee 40s/52s 를 명시한다. 실제 빔은 8s·19s 로 정확하지만(`:495`,`:854`), 선택 카드 테두리 5s 와 워드마크 그라디언트 9s 는 목록에 없는 값이다.
- **Fix suggestion:** 5s→8s, 9s→13s 로 맞추면 새 규정 없이 §2 목록 안에 들어온다(체감 차이 없음).


## 검사 항목별 판정

| 항목 | 판정 | 근거(실측) |
|---|---|---|
| §1.1 Typography | WARN ×4 | 크기 12종→**7종**으로 정리 ✓ · h1 −0.04em/0.92 정확 ✓ · 128 미사용 · 라벨 11px(스펙 13) · h2/h3 트래킹 이탈 · 178/20px 신규 등급. h-level 스킵 없음(h1 ×1, h2 ×8, h3 ×4), 본문 weight 400/500 ✓ |
| §1.2 Color budget | WARN ×1 | 첫 뷰포트 라임 **1개 / 0.45%** ✓✓ · 문서 전체 라임 *면* **1개**(S9) ✓ · 태그·캡션 라임 **0** ✓ · 토큰 밖 hex **6종** |
| §1.3 Radius | WARN ×1 | 5/10/999 사용 87건 전부 정합 ✓ · 이탈은 `50%` ×5 |
| §1.4 Component states | WARN ×2 | focus 전역 ✓(밝은 밴드 반전 포함) · `aria-pressed` 8개 + 배타 선택 ✓ · `<button>` 전환 ✓ · **active 0 / disabled 0** · hover transform 모순 |
| §1.5 Mobile | **BLOCK ×1**, WARN ×2 | 가로 스크롤 0 ✓(scrollWidth 390 = innerWidth) · 핀 해제 ✓(`.stage` 5개 전부 `position:relative`, html `.static`) · 단일 컬럼 ✓ · **탭 타깃 6개 미달** · 11px 텍스트 93개 · h1 y=733 |
| §1.6 Spacing / layout | WARN ×2 | 비토큰 18종→**8종** ✓ · `var(--sNN)` 75회 · 예산 15.64vh(허용 14) · 핀 4개(허용 2) |
| §1.7 Text contrast | PASS(인용) | **text-contrast PASS — 오케스트레이터 실행.** 이 리뷰는 재측정하지 않았다. 사진 위 텍스트 받침 확인: 히어로 `hero-veil` 2겹(`:240-243`), S6 `.cut-copy` `rgba(11,12,14,.86)` 실측, S8 `.deliver-copy` 동일, `.cut-note` `rgba(11,12,14,.72)`, 카드 `scrim--b`/`--soft`, 캡션 `text-shadow 0 1px 8px rgba(11,12,14,.9)`, `.ba-labels` 솔리드 칩 — **§1.7 의 "받침 없음" 조항 해당 없음** |
| §1.8 Overlay occlusion | PASS | 첫 페인트 오버레이 0(쿠키·모달·시트 없음). `elementFromPoint` 실측 — 1440: h1(88,173,980×419)·CTA(1213,14,139×42)·lead(88,615,477×58) 모두 자기 자신 반환. 390: h1(20,733,350×169)·CTA(185,14,139×42) 동일. 고정 nav 는 상단 70px 바로 h1 과 겹치지 않는다. **가림은 없다** — 위 WARN 은 가림이 아니라 구도 문제다 |

## 스토리보드 이행 (섹션 표 10행 × 실측)

| # | 선언된 "이미지의 동사" | 판정 | 스크롤 위치별 실측 델타 |
|---|---|---|---|
| S1 | 줌스루 + 매치컷 | **이행 (후반 무사건)** | clip `inset(22.49% 25.49%)`→`inset(0%)`, `.cut-a` scale 1.2549→1.000(역방향 ✓), `.cut-a` opacity 1→0.256→0, `.cut-b` 1.14→1.00, `#heroCopy` opacity 1→0.403→0 · p=0.45 이후 774px 정지 |
| S2 | 3D 카드 팬 | **이행** | `--fan` .06→1, 첫 카드 rect (313,519,210×254)→(190,187,228×263)→(141,−224,235×267), matrix3d 회전항 −0.2213→−0.3295. 진입 `mask-wipe`(`animation-timeline:view()`) ✓ |
| S3 | 스크럽 + 토큰 점등 | **이행 (매핑 오류)** | 프레임 가시열 `10000000`→`00000100`→`00000001`, 레일 on 1→6→8, 토큰 on 1→6→8, 캡션 `frame 01`→`frame 06`→`frame 08` 스크램블 교체 ✓ · **토큰↔캡션 불일치(위 WARN)** |
| S4 | 자동 스윕 후 조작 | **이행** | 진입 시 `--p` 52→88→14→52 (`:1098-1104`), 노브 sheen 1회, `step="2"` ×4, `aria-label` ×4 ✓ |
| S5 | 가로 이동 + 원근 | **이행 (변주 무효)** | `#galTrack` x −361→−2716→−3411px, `#galBar` 179→1018→1264px, 카드 폭 358→385→394 · **카드별 `--pz` 덮어씀(위 WARN)** |
| S6 | 매치컷 | **이행** | `#cutA` 544×493 →(y8100) 861×637 →(y8400) 1178×781 →**(y8648) 1440×900** 에서 opacity 1→0, 같은 지점에 `#cutB` 등장 후 1174×779→857×635→540×491 축소. `#cutNote` 도 그 지점에서 `arch-01`→`arch-02` 로 교체 ✓ |
| S7 | 틸트 + 스포트라이트 + 선택 | **이행** | `<button aria-pressed>` ×8, 배타 선택(`:1037-1041`), 선택 시 `.pname` 라임 + 프레임 라임 링 + `fx-beam` 회전. `@media (hover:none)` 가드 ✓ · §2 hover 조항과 충돌(위 WARN) |
| S8 | 스케일 + 클립 열림 | **이행** | `clip-path` `circle(36.36%)`→`circle(149.73%)`→`circle(150%)`, 내부 이미지 scale 1.1282→1.0003→1.000(역방향 ✓) |
| S9 | 라임 면 1회 | **이행** | 문서 전체 라임 배경 요소 = `.plan-cta` 1개(+CTA 필·레일·진행바). 이미지 0장 ✓, 명도 반전 3회(S4·S9 밝게 / S5·S10 암전) ✓ |
| S10 | 텍스트 브레이크아웃 | **미이행 (BLOCK)** | y12700 scale 1.000 → y13000 1.031 → **y13174(바닥) 1.2487 / opacity 0.9225 / `#bleed` 0.289** 에서 정지. 선언된 종점 4.2 / 0 / .62 에 도달 불가 |

**정지 이미지 비율 0%** — 61장 전부가 어떤 형태로든 움직이거나 스크롤에 반응한다(스토리보드 C4 ✓).
**리듀스드 모션·모바일:** `html.static` 에서 ScrollTrigger 를 하나도 만들지 않고(`:1053`) 전 섹션이 정지
레이아웃으로 성립한다 — 이 게이트 설계(`:11-13`)는 이 페이지에서 가장 잘 만든 부분이다.

## 90점까지

r2 는 r1 의 "이미지가 행동하지 않는다"를 **닫았다.** 7개 섹션의 동사가 실측으로 확인되고, 액센트는 라벨의
기본색에서 사건으로 되돌아왔으며(첫 뷰포트 1개 / 면 1회), 명도 반전 3회가 실제로 있다. 남은 격차는 이제
"효과가 있느냐"가 아니라 **효과가 무엇을 증명하느냐, 그리고 끝까지 가느냐**다. 아래 6개는 새 이미지 없이
(61장 그대로) 실행 가능한 순서로 적었다. 업종·색과 무관한 기법 층위다.

**① 마지막 화면을 되찾는다 — timeline-range clamping (S10)**
지금 페이지의 **마지막 인상은 중간 트윈에서 멈춘 헤드라인**이다(scale 1.2487 / opacity 0.9225 / 배경 0.289).
와우는 첫 3초와 마지막 3초에서 결정되는데, 마지막 3초가 미완성 프레임이다. `end:"bottom bottom"` 한 줄이면
브레이크아웃이 완주하고 `amb-01` 이 62%로 켜지며 푸터가 그 위로 올라온다 — **비용 1줄, 회수는 페이지 전체의 종결부.**
가장 싼 항목이자 유일한 BLOCK 이므로 여기서 시작한다.

**② 스크럽을 "진행"에서 "인과"로 — token swap + underline travel (S3)**
누적 점등은 진행바다. 프레임이 바뀔 때 **바뀐 축의 토큰 글자 자체가 교체되고**(eye level → bench height)
밑줄이 그 자리로 미끄러져 오면, 사용자는 "8장을 스크럽했다"가 아니라 **"내가 쓴 한 단어가 프레임을 바꿨다"**를
본다. 이 페이지의 논지(*control*)를 유일하게 증명할 수 있는 지점이고, 지금은 그 증명이 캡션과 어긋나 있어
오히려 신뢰를 깎는다. 색·라이브러리 추가 없이 텍스트 노드 교체만으로 된다.

**③ 피크 직후의 침묵을 없앤다 — pin chaining / second beat (S1→S2)**
줌스루가 p≈0.45 에 끝나고 774px(0.86 뷰포트) 동안 아무 일도 없다. 피크 직후의 긴 침묵은 "끝난 줄 알았는데
안 끝났네"로 읽히고, 이 지점이 대부분의 이탈이 생기는 자리다. 핀을 150vh 로 줄여 줌 완료와 해제를 붙이거나,
후반을 **다음 섹션의 첫 카드가 핀 안으로 들어오는 인계 동작**으로 채운다. 부수 효과로 §5 예산 초과(15.64vh)도
같이 줄어든다.

**④ 위계를 하나 만든다 — hero tile / focal promotion (S2 · S5)**
S2 의 12장과 S5 의 11장은 모두 "크기만 다른 같은 것"이다(측정: S5 카드 11장이 동일한 깊이 곡선을 공유).
큐레이션된 벽의 문법은 **하나가 크다**는 것이다. 각 섹션에서 한 장을 2배로 승격하고 그 카드에만 다른 사건을
준다(예: 같은 프롬프트의 다른 시드가 720ms 로 교차). "늘어놓은 것"이 "고른 것"으로 바뀌는 순간이 곧
사람 손이 닿았다는 신호이고, 그게 브랜드 성격으로 읽힌다. r1 의 같은 제안이 아직 미이행이다.

**⑤ 첫 화면에 "반응한다"는 증거 하나 — hero micro-interaction (S1)**
현재 첫 뷰포트에서 스크롤 전에 움직이는 것은 conic beam(8s)과 grain 뿐이다. 스크롤을 시작하기 전의 3초가
정지 사진 + 텍스트로 읽히면, 그 아래의 안무가 아무리 좋아도 첫인상은 r1 과 같아진다. 이미 파일에 있는
`fx-tilt`·`fx-spot` 을 히어로 프레임에 ±1.5deg 로 걸거나, `split-text-rise` 직후 mono 스펙 3줄을 80ms
스태거로 들여보내면 **"이건 문서가 아니라 도구다"**가 첫 화면에서 성립한다.

**⑥ 모바일을 정지 레이아웃에서 꺼낸다 — coarse-pointer choreography (전 섹션)**
게이트가 `innerWidth < 900` 이라(`:13`) 390 에서는 **모든 안무가 0** 이고, 이미지가 행동하지 않는 유일한
뷰포트가 된다 — r1 이 60점을 받은 그 상태 그대로다. 폭이 아니라 `prefers-reduced-motion` + 성능 예산으로
게이트를 다시 긋고, 모바일에는 가벼운 것 2개만 남긴다(S3 스크럽 = 프레임 8장 opacity 전환, S8 클립 열림 =
`animation-timeline:view()` 로 GSAP 없이). 같은 커밋에서 h1 을 접힘 위로(현재 y=733) 올리면 모바일
첫인상이 데스크톱과 같은 주장을 하게 된다.

> 순서: ① → ② → ③ 이 점수 대비 비용이 압도적으로 좋다(에셋 0, 각각 1~15줄).
> ⑥ 은 별도 라운드로 미뤄도 되지만, 심사·공유가 모바일에서 일어난다면 ①과 같은 등급이다.

## Verdict

- **BLOCK** (BLOCK=2, WARN=15, FYI=5) — 출간 불가, writer revision round 2.

두 BLOCK 모두 국소 수정이다: S10 트리거 종점 1줄(`end:"bottom bottom"`), 탭 타깃 3줄
(`.nav .btn` 세로 +4px · `.foot-bar nav a` `min-height:44px` · `.brand` 동일). 기계 합격선
(LI 32/32 · text-contrast PASS · 렌더 무결성 · 콘솔 에러 0 · 트리거 18 — 전부 오케스트레이터 실행)을
이 리뷰가 뒤집는 항목은 **없다**. 다만 오케스트레이터의 "트리거 18개 생성"은 18개가 **완주한다**는 뜻이
아니었다 — S10 의 트리거는 생성되고 실행되지만 문서가 그 범위만큼 스크롤되지 않는다.

WARN 15 중 **①라벨 11px · ②토큰 밖 hex 6종 · ③active/disabled · ④hover transform**은 r1 이 이미
같은 문장으로 지적한 항목이다. 효과에 집중하느라 시스템 정합이 뒤로 밀린 라운드였고, 그 넷은 합쳐서
CSS 20줄 안쪽이다. 반대로 **간격(18종→8종) · 라임 규율(7개→1개) · 반경 · 슬라이더 손잡이 · 마키**는
깨끗이 닫혔다.

### 취향 후보 (§8 — 기록하지 않음, 제안만)

같은 axis 가 2회 이상 나온 항목 3개. **자동 기록 금지 규칙에 따라 `.omd/preferences.md` 에 아무것도 쓰지 않았다.**
사용자에게 물을지는 오케스트레이터가 판단한다.

- `typo` ×4 — 라벨을 13px(시스템)로 볼 것인가 11px(이 빌드가 두 라운드 연속 선택한 값)로 볼 것인가.
  디스플레이 최상단을 128 로 쓸 것인가 178(브레이크아웃)로 갈 것인가. **두 라운드 연속 같은 축에서 이탈한다.**
- `color` ×2 — 액센트 hover 를 `brightness(1.06)`(시스템)로 둘지 별도 hex(`#DDFF3D`)로 둘지.
  어두운 4번째 지면(`#08090A`)을 토큰으로 승격할지.
- `motion` ×2 — 포인터 패럴랙스를 "hover transform 금지"의 예외로 명문화할지, 아니면 페이지에서 뺄지.
  이 결정은 r1 에서 이미 한 번 미뤄졌다.
