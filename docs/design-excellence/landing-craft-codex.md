# Landing craft codex — what makes a scroll one-pager overwhelming

**Status:** Measured · 2026-09-02 · **Viewport:** desktop 1440×900, `deviceScaleFactor: 1`, `colorScheme: light`
**Rig:** headless Chrome via playwright-core 1.61.1 (`channel: chrome`) — `measure-landing.mjs`, `probe-reveals.mjs`, `probe-easing.mjs`, `probe-reflexes.mjs`, `verify-fold.mjs`. Output: `measurements.json` + `captures/<id>/` in the session scratch dir `…/scratchpad/landing-research/` (168 screenshots, 5 sites).
**Purpose:** evidence base for an `omd:landing` skill. Every rule cites a site and a number; nothing is estimated.

## 0. Method and its blind spots

Sections are the children of the deepest wrapper spanning ≥80% of the document. Per section: height in vh; dominant background from **rendered pixels** (middle 70% of a viewport screenshot, quantised to 12-step RGB); text area from text-node line boxes; asset area from `img/video/canvas/svg/picture` plus non-gradient background images, clipped to the section box; largest type; media counts; sticky/fixed children; horizontal overflow. Reveals sample at **t+60 ms and t+1240 ms after each viewport jump**.

Four limits, stated rather than papered over:

1. **Toss section 4** (12.56 vh, depth 61–83%) measured 0 text and 0 asset area after a full 57-step journey; its content mounts by a mechanism the rig did not trigger. **Unmeasured, not empty.**
2. Section boundaries are derived: linear's wrapper yields 9 blocks, two of them a bare `h2` and a narrow `div`, against 8 authored `<section>` tags. Both counts are reported.
3. `apple.com/kr/iphone/` is a product **index**, not a scroll story — weakest fit for hero rules, strongest for rhythm and reveals.
4. Reveal counts are lower bounds: anything under 60 ms, or keyed to a scroll velocity a jump never produces, is invisible.

All five returned HTTP 200; none blocked the capture.

## 1. Corpus

| Site | URL | Chosen because | Captured (UTC) |
|---|---|---|---|
| affinity | www.affinity.studio | the reference named in the brief | 02:40:08Z |
| linear | linear.app | most-cited craft benchmark; dark-first | 02:40:54Z |
| stripe | stripe.com | dense editorial landing, best-in-class for years | 02:41:40Z |
| apple | www.apple.com/kr/iphone/ | product scroll rhythm; also a KR render | 02:42:27Z |
| toss | toss.im | Korean exemplar; all pinned scroll sequences | 02:44:27Z |

## 2. Measurements

**A — page and section rhythm**

| Site | Page | `<section>`/derived | Hero vh | Body section vh (min–max, median) | Text ratio (median) | Empty ratio (median) | Asset:text (median) |
|---|---|---|---|---|---|---|---|
| affinity | 14.66 vh | 14 / 9 | 4.56 pinned | 0.80–1.39, **1.02** | 0.059–0.383, 0.130 | 0.47 | 2.0 |
| linear | 11.07 vh | 8 / 9 | 1.14 | 0.25–1.37, **1.36** | 0.062–0.304, 0.136 | 0.57 | 5.8 |
| stripe | 16.30 vh | 15 / 8 | 0.76 | 0.42–5.12, **1.93** | 0.067–0.440, 0.125 | 0.46 | 4.3 |
| apple | 9.88 vh | 14 / 9 | 0.44 | 0.78–1.25, **1.04** | 0.058–0.159, 0.079 | 0.53 | 8.1 |
| toss | 56.35 vh | 7 / 6 | 10.85 pinned | 2.65–16.35, **9.38** | 0.015–0.075, 0.026 | 0.74 | 5.6 |

**B — the first fold** (at `scrollY === 0`)

| Site | Display px/weight/family | Top %vh | Left %vw | Align | Largest media | Viewport coverage | Bleeds |
|---|---|---|---|---|---|---|---|
| affinity | 112/700 Affinity Serif Var | 39.7 | 1.7 | center | `canvas` 1440×820 | **91.1%** | L R B |
| linear | 64/510 Inter Var | 30.2 | 5.4 | start | `img` 1440×804 | **89.3%** | L R B |
| stripe | 48/300 sohne-var | 28.3 | 14.4 | start | `img` 1392×975 | **104.7%** | R T |
| apple | 80/600 SF Pro KR | 17.6 | 6.3 | start | `img` 372×395 | 11.3% | B |
| toss | 80/700 Toss Product Sans | 83.1 | 5.0 | center | `video` 1732×974 | **130.2%** | all four |

Discrete media ≥24 px in the first viewport: linear 1, toss 1, affinity 8, apple 27, stripe 40.

**C — typography**

| Site | Display/body | Ratio | Scale (top 6 of the ≥3-use steps) | Display step | Weights | Column | p50 |
|---|---|---|---|---|---|---|---|
| affinity | 112/16 | **7.0** | 112 80 56 38 32 24 … | 1.40 | 400 401 500 600 700 | bleed | 584 |
| linear | 64/14 | 4.6 | 64 48 24 15 14 13 … | 1.33 | 300 400 500 510 590 | 672 | 340 |
| stripe | 48/16 | 3.0 | 48 32 26 22 16 14 … | 1.50 | 300 400 500 | 1232 | 326 |
| apple | 56/17 | 3.3 | 56 32 28 24 20 19 … | 1.75 | 400 600 | 1264 | 289 |
| toss | 48/14 | 3.4 | 48 32 28 20 19 18 … | 1.50 | 400 500 600 700 | bleed | 391 |

Steps inside the UI range cluster at 1.05–1.20. Display tracking: linear −0.022 em, stripe −0.020 em; KR faces and the serif run `normal`.

**D — ground, inversion, scroll devices**

| Site | Tone sequence | Dark | Grounds (measured pixels) | Sticky ≥40px | H-scrollers | V-snap | Gutters (px) |
|---|---|---|---|---|---|---|---|
| affinity | D D D **L** D **L** D **L** D | 6/9 | `0,0,0` · `252,252,252` | header + fixed 1440×820 layer | 1 | none | 0 |
| linear | D D D D D D D D D | 9/9 | `12,12,12` | 0 (fixed header 73px) | 0 | none | 48×7, 720×5 |
| stripe | L L L L L **D** L L | 1/8 | `252,252,252`; inversion `12,24,60` | 0 | 1 | none | 88×8, 104×8 |
| apple | L L L L L **D** L L L | 1/9 | `252,252,252`, tint `240,240,252`; inversion `12,12,12` | 0 | 3 | none | 92×9 |
| toss | L L L L L L | 0/6 | `252,252,252`, tint `240,240,252` | **14, each exactly 900px** | 0 | none | 0 |

Pure-ground gap between sections: linear 136–301 px; affinity one 100 px gap; the rest 0 (sections carry their own padding).

**E — motion tokens and reveal cadence** (counts are declarations)

| Site | Primary token (share of all durations) | Long token | opacity/transform decls | Reveals on enter (per vh, steps hit) | reduced-motion |
|---|---|---|---|---|---|
| affinity | `100ms linear` ×282 (47%) | `300ms ease-in-out` ×19 | 264 / 31 | 50 (**3.6**, 11/14) | yes + visible "Reduce motion" control |
| linear | `100ms cubic-bezier(.25,.46,.45,.94)` ×241 (64%) | `700ms cubic-bezier(.32,.72,0,1)` ×30 | 0 / 48 | **1** (0.1, 1/11) | yes |
| stripe | `300ms cubic-bezier(.25,1,.5,1)` ×627 (70%) | `800ms cubic-bezier(.165,.84,.44,1)` ×58 | 169 / 152 | 13 (0.8, 4/16) | **no** |
| apple | `320ms cubic-bezier(.4,0,.6,1)` ×198 (33%) | `240ms ease` ×93 | 299 / 60 | 61 (**6.8**, 7/9) | yes |
| toss | `300ms ease` ×292 / `400ms ease` ×251 (49%) | `400ms cubic-bezier(.175,.885,.32,1.1)` ×245 | 284 / 23 | 96 (1.7, 22/56) | **no** |

Across 221 reveals: opacity 202, transform 54, **clip-path 0, filter 0**. No site uses an ease-in primary; four decelerate, toss overshoots (also `cubic-bezier(.34,1.56,.64,1)` ×20).

Hero video exists on two sites only — affinity 1159×652 / 7.30 s and toss 1732×974 / 4.05 s, both `autoplay muted loop playsinline`. Linear and stripe ship none. After a full journey, 11 of 13 below-fold videos are still paused.

## 3. Rules

### Composition

- **LC-1 The fold is a stage, not a card.** One continuous asset covers 89–130% of the first viewport and bleeds off ≥2 edges. Only the product index departs (apple 11.3).
- **LC-2 Headline in the upper third.** Display block top: 17.6 / 28.3 / 30.2 / 39.7 %vh. Nothing vertically centred in a box.
- **LC-3 Left-anchor unless the composition supplies its own symmetry.** Three of five use `text-align: start` at x = 5.4–14.4 %vw; affinity centres only because 8 artworks ring the type, toss only because it sits on video.
- **LC-4 Sections run about half empty.** Non-text, non-asset area: median 0.46–0.74.
- **LC-5 Text is a minority tenant.** Text area is 1.5–44% of a section, per-site median 2.6–13.6%. Asset:text median 2.0–8.1; extremes 1.2:1 and 22.4:1.
- **LC-6 Two lanes, not one grid.** A 1440 bleed lane plus a reading lane at 672 / 1232 / 1264. Body measure p50 289–584 px.
- **LC-7 One gutter, held page-wide.** stripe 88/104 px across 8 sections, apple 92 px across 9, linear 48 px plus a hard 720 px half-split for two-column headers.

### Scroll choreography

- **LC-8 Budget 10–16 vh** (9.88 → 16.30). Exceed it only by pinning (toss 56.35).
- **LC-9 Body sections land on ~1 viewport.** Median non-hero height 1.02–1.93 vh.
- **LC-10 A hero earns extra height only by pinning.** Unpinned 0.44–1.14 vh; pinned 4.56 vh (affinity `fixed` 1440×820) and 10.85 vh (toss `sticky` 900px).
- **LC-11 A pinned stage is exactly one viewport tall.** All 14 toss sticky elements are 900 px; affinity's fixed layer is 820 px — viewport minus its 80 px header.
- **LC-12 Reveal cadence is a dial with a real zero.** Reveals per viewport: 0.1 / 0.8 / 1.7 / 3.6 / 6.8. Linear ships a benchmark landing on one measured reveal.
- **LC-13 Reveal by opacity, optionally transform — never clip-path or filter** (202 / 54 / 0 / 0).
- **LC-14 No vertical scroll-snap.** `none` on root and body, 5 of 5. Snap appears only in horizontal carousels (`x mandatory`).
- **LC-15 Horizontal scrollers are the density valve.** 0–3 per page; affinity's holds 14 assets in 0.98 vh, stripe's spans 5.12 vh.
- **LC-16 Hero video: short, silent, looped, inline — and optional.** 4.05–7.30 s with all four attributes; two of five ship none. Below-fold video stays paused until entry.

### Asset direction

- **LC-17 29–63 images per page**, 3–7 per section. Video 0–6, canvas 0–12.
- **LC-18 Bleed assets are 16:9.** 1.76 / 1.78 / 1.79 across the three bleed heroes; stripe's 1.43 mesh bleeds off the top instead.
- **LC-19 Two placements only: bleed or inset.** Heroes bleed off ≥2 edges; section assets sit in a rounded surface, cropped by its bottom.
- **LC-20 The asset is the product or the customer's work.** Affinity's fold shows eight pieces of real user artwork wearing the app's own selection handles; the rest show product UI and photography. Zero stock across 275 images (§4).

### Typography

- **LC-21 Display:body 3.0–4.6×; 7× only with a display serif** (3.0 / 3.3 / 3.4 / 4.6 / 7.0).
- **LC-22 Body is 14–17 px.** No exemplar ships larger.
- **LC-23 Dense scale below, one jump at the top.** UI steps 1.05–1.20, then 1.33–1.75 into display.
- **LC-24 Weight contrast is small, and may be zero.** 510/400, 600/400, 700/400, 700/401 — and **stripe 300/300**, separating headline from continuation by colour.
- **LC-25 Negative tracking on Latin display only** (−0.020 to −0.022 em); KR faces and the serif stay `normal`.

### Colour and sectioning

- **LC-26 Choose one ground and hold it.** linear 9/9 dark, toss 6/6 light, stripe 7/8, apple 8/9. Alternation is the minority strategy (affinity).
- **LC-27 The single inversion is the emphasis device.** Stripe inverts one section (navy, 62% depth); apple one (near-black, 45%).
- **LC-28 Grounds are near-absolute, tints barely tints.** Dominants are `252,252,252` or `12,12,12`/`0,0,0`; the only tint measured is `240,240,252`.

### Motion

- **LC-29 One dominant duration carries the page** — 33–70% of all declarations: 100 / 300 / 320 / 400 ms.
- **LC-30 Two or three durations cover the rest**, the second 1.3–1.6× the first.
- **LC-31 "Transform-only" is a myth; "opacity and transform only" survives** — opacity 169–299 declarations against transform 23–152.
- **LC-32 Ship `prefers-reduced-motion`.** Three of five do; affinity adds a visible "Reduce motion" control. Stripe and toss ship neither — a defect, not a licence.

### The overwhelm moment

- **LC-33 The peak is early, and it is scale, not count.** Affinity peaks in section 0 — 4.56 vh, 8 media in the fold, a pinned 1440×820 canvas resolving into full-bleed product video. Toss peaks at 24% depth, in a 16.35 vh pinned sequence.
- **LC-34 Build to it by starving, then flooding.** Affinity's fold holds the page's lowest text ratio (0.059); the next section holds the highest (0.383) with 17 images. Contrast is the effect.
- **LC-35 After the peak, drop to metronome.** Affinity settles to 0.80–1.39 vh, 1–6 images a section; apple never leaves 0.78–1.25 vh.
- **LC-36 Overwhelm must stay legible.** Every peak keeps one reading lane — affinity's 869 px hero sub-headline, toss's 326–495 px measure over full-bleed video.

## 4. The generated-design reflexes, measured as absences

Definitions (exact form in `probe-reflexes.mjs`): **card grid** = ≥3 siblings >120×80 px, each radius >3 px with a background or border, same size to an 8 px bucket; **icon tile** = a 28–96 px square surface whose only child is an `svg`/`img`; **nested card** = such a surface inside another within two levels; **glow** = `box-shadow` blur ≥24 px, coloured at ≥40 units of RGB spread.

| Reflex | affinity | linear | stripe | apple | toss |
|---|---|---|---|---|---|
| Uniform card grids (largest group) | **0** | 2 (5) | **0** | **0** | 1 (7) |
| Icon tiles | **0** | 5 | 14 | 19 | 6 |
| Nested cards | **0** | 9 | 6 | **0** | 2 |
| Gradient fills (large) | 2 (**0**) | 61 (11) | 24 (13) | **0 (0)** | 17 (15) |
| Glows (coloured) | 6 (1) | 5 (**0**) | 19 (11) | **0 (0)** | 10 (8) |
| Third-party stock image hosts | **0** | **0** | **0** | **0** | **0** |

- **Stock imagery is absent everywhere.** All 275 images resolve to first-party hosts — `www.affinity.studio` 109, `static.toss.im` 45, `images.stripeassets.com` 44, `linear.app` 39, `www.apple.com` 38. Not one stock CDN; the corpus's most unanimous finding.
- **The uniform card grid is genuinely rare** — three of five have zero. Caveat: affinity's 3-up platform row (`captures/affinity/step-08.png`) has unequal heights and so fails the signature. The rule is "no *uniform* grid", not "no cards".
- **Icon tiles and gradients are not universally avoided.** Apple ships zero of both; linear ships 61 gradient fills, stripe 11 coloured glows. The rule is *role*, not abstinence.
- **A defect at an exemplar is still a defect.** `toss.im` has **no `<h1>`**; stripe and toss ship no reduced-motion rule.

## 5. Mechanically checkable — the `landing-integrity` set

| ID | Check | Fails when |
|---|---|---|
| LI-1 | page height | <8 or >18 vh with no full-viewport pinned stage |
| LI-2 | section height | outside 0.8–2.0 vh |
| LI-3 | fold media | <60% and no pinned hero |
| LI-4 | display top | >45 %vh, or centred in a bordered box |
| LI-5 | text ratio | >0.45 (max measured 0.44) |
| LI-6 | empty ratio | <0.30 (lowest median measured 0.46) |
| LI-7 | display:body | <2.5 or >7.5 |
| LI-8 | body size | <13 or >17 px |
| LI-9 | gutters | more than 3 dominant left edges |
| LI-10 | measure | >700 px |
| LI-11 | tone sequence | >1 inversion on ≤9 sections, unless alternating |
| LI-12 | durations | >4 values each above 5% of declarations |
| LI-13 | easing | an ease-in curve is the most-used token |
| LI-14 | properties | non-opacity/transform/colour animated >200 ms |
| LI-15 | reduced motion | no `prefers-reduced-motion` rule |
| LI-16 | v-snap | set on root or body |
| LI-17 | reveal channel | any clip-path or filter reveal |
| LI-18 | hero video | missing `muted`/`playsinline`/`loop`, or >12 s |
| LI-19 | lazy video | playing before entry |
| LI-20 | image hosts | any stock-photo CDN |
| LI-21 | card grids | ≥2 groups of ≥4 identical sibling surfaces |
| LI-22 | nested cards | >9 (worst exemplar: linear) |
| LI-23 | semantics | no `<h1>`, or more than one |

LI-1…LI-19 come from `measure-landing.mjs`, `probe-reveals.mjs` and `probe-easing.mjs`; LI-20…LI-23 from `probe-reflexes.mjs`.

## 6. What the skill must generate, per section type

"Bleed" = off ≥2 viewport edges; "inset" = in a rounded surface, cropped by its bottom edge.

| Section type | Asset kind | Count | Aspect / size | Placement | Text ratio |
|---|---|---|---|---|---|
| Hero, unpinned | product render or UI capture | 1 | 16:9, ≥89% of viewport | bleed L/R/B | 0.06–0.26 |
| Hero, pinned | canvas or 4–8 s muted mp4 | 1 + up to 8 satellites | 16:9; stage exactly 1 viewport | fixed/sticky full-bleed | 0.02–0.06 |
| Proof / logo band | first-party marks | 6–17 | uniform height, unequal widths | h-scroller, ~1 vh | 0.10–0.38 |
| Feature, single | product UI capture | 1–3 | bleed, or 672–1264 px inset | inset, cropped bottom | 0.06–0.17 |
| Feature, comparative | UI captures | 3–7 | equal width, **unequal heights** | inset row or `x mandatory` | 0.10–0.24 |
| Data / mechanism | diagram of real product nouns | 1 | ≥1200 px wide | bleed right | 0.08–0.17 |
| Inversion / peak | photo or 3D render on inverted ground | 1–2 | full-bleed | all edges | 0.02–0.13 |
| Platform / CTA | device or platform imagery | 1–3 | cropped by card bottom | inset | 0.11–0.31 |

The skill needs **first-party capture** (screenshot the product, never stock), one **16:9 bleed render** per hero, **unequal-height** comparative assets so the uniform-grid signature never forms, and a **4–8 s silent loop** only for a pinned hero. No icon tiles as filler; emit `prefers-reduced-motion` with the motion tokens.

## 7. 마감 규칙 (LC-37~46) — 2026-09-03 추가

LC-1~36은 **무엇을 어디에 놓는가**(기하·리듬·배치)를 규정한다. 그 규칙을 전부 지킨 페이지가
여전히 밋밋할 수 있다는 것이 실측으로 드러났다 — 우리 최고 산출물은 OS 기본 폰트에
그림자·블러·마스크·블렌드·3D·클립패스·그레인이 **전부 0**이었다
(`docs/reviews/landing-craft-gap-2026-09-03.md`). 아래는 그 위에 얹는 **마감** 층이다.
근거는 2026-09-03 수상작 시각 마감 조사다(내부 리서치 노트 — 공개 레포에 넣지 않는다. `.gitignore: research/`).
각 규칙은 그 조사에서 출처 URL과 함께 확인된 기법만 옮긴 것이다.

- **LC-37 줄바꿈을 제어한다.** 디스플레이 헤딩엔 `text-wrap: balance`, 본문 문단엔 `text-wrap: pretty`.
  끝줄에 한 단어만 남는 상태는 두 경우 모두 결함이다.
- **LC-38 넓은 단색·그래디언트 면에는 그레인을 얹는다.** 인라인 SVG `feTurbulence` 오버레이
  (opacity 0.05–0.15, `mix-blend-mode: overlay`). 밴딩이 보이면 결함. 그레인 없는 그래디언트는
  "명백히 CSS스러운" 배경으로 읽힌다.
- **LC-39 글래스 표면은 2겹이다.** 베이스 블러 + 밝은 엣지 블러, 둥근 모서리는 SVG 마스크로 자른다.
  단일 `blur()` + `border-radius`는 미완성 신호이며 스크롤 시 플리커가 남는다.
- **LC-40 스크롤 리빌은 네이티브 타임라인을 먼저 쓴다.** `animation-timeline` / `view-timeline`.
  미지원 환경에는 opacity 리빌로 폴백한다. JS 스크롤 리스너의 프레임 지연이 곧 "저렴해 보임"이다.
- **LC-41 이징의 다양성은 국소적이다.** 페이지를 지배하는 하나의 duration(LC-29)은 유지하고,
  `linear()` 스프링·오버슈트 곡선은 히어로 정착이나 CTA 도착 같은 **한 순간에만** 쓴다.
- **LC-42 브라우저 기본값을 남기지 않는다.** `::selection`, `:focus-visible`, 스크롤바 썸을 브랜드 액센트로
  지정한다. 하나라도 기본값이면 아트디렉션이 닿지 않은 구석이 드러난다.
- **LC-43 모든 미디어에 같은 색보정 프리셋을 건다.** 공통 클래스의 `filter: contrast()/saturate()`.
  에셋마다 색온도가 다른 것이 가장 값싸 보이는 신호다.
- **LC-44 커스텀 커서는 미디어 표면에만.** 본문 텍스트 위에서는 네이티브 커서로 되돌리고,
  `@media (hover: hover)`로 터치 기기에서는 완전히 끈다. 상태는 최대 3개(기본·링크·드래그).
- **LC-45 풀블리드 히어로에는 비네트를 얹는다.** `radial-gradient(ellipse, transparent 50%, rgba(0,0,0,.7) 100%)`
  수준으로 코너만 은은히 죽인다. 눈에 띄는 링은 금지.
- **LC-46 메시 그래디언트는 반투명 radial 3겹 이상이다.** 2-스톱 단일 `linear-gradient` 배경은
  가장 흔한 AI-slop 신호로 취급해 금지한다.

### LC-47 서체는 조달한다 (파이프라인 규칙)

단독 HTML은 렌더 시 외부 요청이 금지지만, **생성 시점에 폰트를 받아 base64로 인라인하면 요청은 0건이다.**
실측: `@fontsource-variable`의 latin woff2(65–75KB)를 data URI로 심으면 HTML 87KB, 옵티컬 사이즈 축과
굵기 축이 모두 작동하고 외부 요청 0건이다. **OS 기본 폰트로 디스플레이 헤딩을 쓰지 않는다.**
Google Fonts `css2` API는 UA에 따라 정적 인스턴스를 주므로, 가변 축이 필요하면 `@fontsource-variable`
파일을 직접 받는다. 라이선스는 임베딩이 허용되는 OFL 계열만 쓴다.

## 8. 이미지 주도 페이지 부록 (IL-1~7) — 2026-09-03, 낮은 신뢰도 표기

WebFetch(서버 렌더 HTML)로 8개 사이트를 잰 결과다. 헤드리스 크롬 리그를 거치지 않았으므로 LC 번호에 넣지 않고 IL 로 둔다.
- **IL-1 래스터는 하나의 변환 파이프라인만 지난다.** 6/8. 직접·미최적화 URL 이 섞이면 그 사진만 값싸 보인다(LC-43 의 근거).
- **IL-2 번호 매긴 필름스트립(4~6장, 균일 비율)로 과정을 서술한다.** 4/8, 업종 무관. 번호 자체가 장치다.
- **IL-3 craft/catalog 업종은 중반 갤러리 플러드(7~40장, 혼합 비율)를 히어로 규모와 함께 둔다.** LC-33 의 업종 의존 수정.
- **IL-4 긴 이미지 스크롤에는 구조 라벨(장·단계 카운터·연대)을 단다.** 4/8.
- **IL-5 alt 는 구체적으로 쓴다 — 빈 alt·generic 금지.** 이 코퍼스에서 alt 의 구체성은 자체 촬영 소재와 함께 갔다.
- **IL-6 탭/모드 전환형 히어로(캐러셀 세트 통째 교체)를 스크롤 리빌 대안으로 고려한다.**
- **IL-7 이미지 개수는 와우를 예측하지 않는다.** 6장(twofold)도 70장(nabil issa)도 의도가 읽히면 강하다. 공통은 한 종류·한 파이프라인·의도된 배치.
