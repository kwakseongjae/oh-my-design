---
id: flex
name: flex
country: KR
category: saas
homepage: "https://flex.team"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=flex.team&sz=256"
verified: "2026-05-14"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    ink: "#1d1d1f"
    canvas: "#ffffff"
    page-dark: "#000000"
    card-graphite: "#2d3338"
    soft-white: "#fdfdfd"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    display:  { size: 52, weight: 700, lineHeight: 1.20, tracking: -1.56, use: "In-page h2 argument display" }
    hero-h1:  { size: 28, weight: 700, lineHeight: 1.00, use: "Compact hero banner h1" }
    card:     { size: 17, weight: 600, lineHeight: 1.53, use: "Manifesto card body" }
    pill:     { size: 15, weight: 600, lineHeight: 1.40, use: "Service pill / button label" }
    meta:     { size: 14, weight: 500, lineHeight: 1.00, use: "Meta / nav text" }
  spacing: { xs: 6, sm: 8, md: 12, base: 16, lg: 30, xl: 60, section: 96 }
  rounded: { sm: 8, md: 10, lg: 16, full: 9999 }
  shadow:
    halo: "rgba(0,0,0,0.06) 0px 8px 20px -4px"
    ring-active: "rgba(29,29,31,0.24) 0px 0px 0px 1px inset"
    ring-inactive: "rgba(29,29,31,0.10) 0px 0px 0px 1px inset"
  components:
    pill-active: { type: tab, bg: "#ffffff", fg: "#1d1d1f", radius: "10px", padding: "9px 12px", font: "15px / 700", active: "rgba(29,29,31,0.24) inset ring", use: "Currently-selected service category in SERVICES filter row" }
    pill-inactive: { type: tab, bg: "#ffffff", fg: "#1d1d1f", radius: "10px", padding: "9px 12px", font: "15px / 600", use: "Other tabs in the SERVICES row" }
    header-cta: { type: button, bg: "#000000", fg: "#ffffff", radius: "8px", padding: "8px 6px 8px 8px", font: "14px / 700", use: "Top navigation items over dark hero" }
    card-manifesto: { type: card, bg: "#2d3338", fg: "#fdfdfd", radius: "16px", padding: "30px", font: "17px / 600", use: "Three-beat narrative cards in main-intro" }
  components_harvested: true
---

# flex — Design Reference

> **모든 HR 데이터, flex 하나로.** (Observed on flex.team, 2026-05-14)
>
> Korean HR SaaS reference: dark-mode authority hero → light-mode manifesto cards → service pill navigation. Pretendard 52px display with -1.56px tracking. Quietly confident; one-color discipline (graphite + ink); no rainbow accents.

---

## 1. Visual Theme & Atmosphere

**flex** is a Korean HR SaaS targeting mid-market and enterprise teams (founded 2019-05, Seongnam HQ, Series B, ~213 employees as of 2026-03). The product unifies employee management, attendance, contracts, workflow, payroll, and HR analytics. The 2024 site refresh ("l2024-c-*" class system observed live) signaled a deliberate pivot upmarket — away from the playful color-block aesthetic of early Korean SaaS toward a quieter, Apple-adjacent surface: black hero, white manifesto, dark graphite cards (#2D3338).

What's design-noteworthy:

- **One ink color**: nearly every text element resolves to `#1D1D1F` or one of its alpha variants (`0.96`, `0.72`, `0.04`). No semantic color soup.
- **52px display with -1.56px letter-spacing**: tight, confident, very deliberate (Pretendard Variable handles both hangul and latin at this weight).
- **Pill nav with inset ring shadows**: instead of borders. Active pill uses `rgba(29,29,31,0.04)` fill + `rgba(29,29,31,0.24)` 1px inset ring; inactive uses white fill + `0.10` ring. No filled blue/primary.
- **Manifesto cards on white**: `#2D3338` graphite cards, 16px radius, 30px padding, `0 8px 20px -4px rgba(0,0,0,0.06)` halo. Three-card narrative beat ("문제 → 해결 → 효과").

---

## 2. Layout & Grid

- **Container width**: 1280px viewport observed; section content clamps near 1024px (h1/h2 widths).
- **Outer gutter**: `60px` left/right (`padding: 160px 60px` on hero, `172px 60px 96px` on service section).
- **Vertical rhythm**: hero `860px` total height; service block `993px`; sections breathe with 96-172px top padding.
- **Card grid**: three side-by-side cards inside `main-intro` (~315 / 349 / 335px widths — visibly asymmetric on purpose, not equal-thirds).
- **Header**: `117px` tall, dark theme over hero, fades to light on light sections (`.l2024_dark` / `.l2024_light` toggle).

---

## 3. Color & Typography

### Color tokens (from `tokens.json`)

**Ink scale (single hue, alpha-stepped):**
- `#1D1D1F` — primary text on light
- `rgba(29,29,31,0.96)` — h2 (slight softening)
- `rgba(29,29,31,0.72)` — secondary copy
- `rgba(29,29,31,0.04)` — active pill fill / ghost button
- `rgba(29,29,31,0.10)` — inactive pill ring
- `rgba(29,29,31,0.24)` — active pill ring

**Surfaces:**
- `#FFFFFF` — light page
- `#000000` — hero pageDark
- `#2D3338` — graphite card (manifesto)
- `#FDFDFD` — soft white (card text)

**On-dark:**
- `#FFFFFF` text
- `rgba(255,255,255,0.48)` — muted on-dark

No blue. No green. No yellow. flex's 2024 refresh deliberately deletes the SaaS accent-color habit.

### Typography

- **Family**: `Pretendard Variable` (variable axis) with full system fallback chain.
- **Weights observed live**: 500, 600, 700.
- **Display h2**: `52px / 62.4px line-height / -1.56px letter-spacing / 700`. The negative tracking is the visual signature.
- **Card body**: `17px / 26px / 600`.
- **Pill / button**: `15px / 21px / 600-700`.
- **Meta / nav**: `14px / 14px / 500`.
- **Hero h1**: `28px / 28px / 700` — note the *compact* h1 (smaller than h2 below). flex inverts the usual hierarchy — the hero is a banner, the in-page h2 is the argument.

---

## 4. Components

### Button — primary pill (active service tab)

**Active**
- Background: `rgba(29, 29, 31, 0.04)`
- Text: `#1D1D1F`
- Border: none
- Shadow: `rgba(29, 29, 31, 0.24) 0px 0px 0px 1px inset`
- Radius: `10px`
- Padding: `9px 12px`
- Height: `39px`
- Font: `15px / 21px / 700 / Pretendard Variable`
- Use: currently-selected service category in the SERVICES filter row

**Inactive**
- Background: `#FFFFFF`
- Text: `#1D1D1F`
- Border: none
- Shadow: `rgba(29, 29, 31, 0.10) 0px 0px 0px 1px inset`
- Radius: `10px`
- Padding: `9px 12px`
- Height: `39px`
- Font: `15px / 21px / 600 / Pretendard Variable`
- Use: other tabs in the same row (rest of SERVICES)

### Button — header CTA (gnb)

**Default (transparent over dark hero)**
- Background: `rgba(0, 0, 0, 0)`
- Text: `#FFFFFF`
- Border: none
- Radius: `8px`
- Padding: `8px 6px 8px 8px`
- Height: `33px`
- Font: `14px / normal / 700 / Pretendard Variable`
- Use: top navigation items (서비스 / 리소스 / 플렉스팀 채용 / 로그인)

### Card — manifesto (dark on light)

**Default**
- Background: `#2D3338`
- Text: `#FDFDFD`
- Border: none
- Radius: `16px`
- Padding: `30px`
- Shadow: `rgba(0, 0, 0, 0.12) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.06) 0px 8px 20px -4px`
- Height: `380px` (fixed in observed grid)
- Font: `17px / 26px / 600 / Pretendard Variable`
- Use: three-beat narrative cards in `main-intro` section ("문제 → 해결 → 효과")

### Section — hero (dark)

**Default**
- Background: `#000000`
- Text: `#FFFFFF`
- Padding: `160px 60px`
- Height: `860px` (observed)
- Use: top of marketing landing; carries h1 + subhead + primary CTA

### Section — manifesto (light)

**Default**
- Background: `#FFFFFF`
- Text: `#1D1D1F`
- Padding: `240px 60px 96px`
- Height: `877px` (observed)
- Use: directly under hero; carries the company's "why" + three dark cards

### Header — page chrome

**Default (dark theme over hero)**
- Background: `rgba(0, 0, 0, 0)` (transparent over black hero)
- Text: `#FFFFFF`
- Border: none
- Height: `117px`
- Nav padding: `0px 60px`
- Use: persistent top bar; theme flips light/dark via `.l2024_dark` / `.l2024_light` class on the parent section

---

**Verified:** 2026-05-14
**Tier 1 sources:** `https://flex.team/` live CDP inspect (40 samples → `assets/_reference/.live-inspect-proof.json` curates 9), `https://thevc.kr/Flex` (corporate facts)
**Tier 2 sources:** `https://getdesign.md/flex` → no entry; `https://styles.refero.design/?q=flex.team` → no results (KR-coverage gap, same pattern as 2026-05-13 KR-10 batch)
**Conflicts unresolved:** none

---

## 5. Iconography

Site uses primarily inline SVG for service-category pictograms and arrow glyphs (`→` in CTA "flex 도입 문의하기 →"). No icon-set library brand signal observed in live capture. Hairline weight, monochrome ink-color matched to surrounding text — no two-tone or color-fill icons.

---

## 6. Imagery & Illustration

- **Product UI snapshots** dominate downstream sections (employee directory, attendance calendar, contract flow). Captured at 1:1 product fidelity — no faux-3D, no isometric.
- **No stock photography** of "diverse smiling team" — the page leans on UI screenshots and ambient gradients instead.
- **Manifesto cards are pure type** — no illustration, no icon, no image inside the dark cards. The graphite-on-white card itself is the visual.

---

## 7. Motion

Not directly observable from a single static getComputedStyle pass — but the `l2024-c-*` class system uses Stitches/CSS-in-JS, and scroll-triggered fade/translate on section entry is the dominant pattern on the live site (subtle, ~200-300ms). No spring-bounce, no parallax. Treat motion as **assist, not perform**.

---

## 8. Accessibility

- Pretendard Variable carries strong hangul + latin glyph parity → handles weight 500-700 cleanly at 14-52px.
- Text contrast on white: `#1D1D1F` on `#FFFFFF` = 18.27:1 (AAA).
- Card body `#FDFDFD` on `#2D3338` = 13.21:1 (AAA).
- On-dark muted `rgba(255,255,255,0.48)` on `#000000` ≈ 4.7:1 — passes WCAG AA for body, fails AAA. flex uses this for de-emphasized chrome only.
- Header overlay (`#FFFFFF` over hero black) = 21:1.
- Service pill rings (1px inset) are a contrast-safe alternative to filled borders — but rely on shadow not border, so screen-reader / forced-color-mode users get focus from native button styles + the inner shadow degrades gracefully to outline.

---

## 9. Content & Voice

The product hierarchy (live observed):

1. **Hero h1**: "모든 HR 데이터, flex 하나로." — declarative, no verb, period at end.
2. **Hero subhead**: "데이터가 유기적으로 흐를 때 팀은 더 똑똑하게 성장합니다." — second-clause-first structure.
3. **Manifesto h2**: "flex는 조직이 일하는 방식을 바꿉니다." — first-person company statement.
4. **Card 1**: identify the friction ("담당자 의존적인 조직 운영과 반복 업무는 …").
5. **Card 2**: state the mechanism ("flex는 흩어진 HR 데이터를 한 곳에 모아 연결하고, AI로 자동화하고 …").
6. **Card 3**: name the outcome ("이제 팀은 정보의 불균형과 반복 업무 부담에서 벗어나, … 몰입할 수 있습니다.").

The pattern is **friction → mechanism → outcome**, told in three cards. CTAs are operational: "도입 문의하기" / "무료 체험하기" / "자세히 알아보기".

---

## 10. Voice & Tone

**Voice adjectives:** 차분한 권위 · 운영자 시선 · 명사형 단정

**Do / Don't**

| ✅ Do | ❌ Don't |
|---|---|
| 마침표로 끝낸다. ("flex는 조직이 일하는 방식을 바꿉니다.") | 느낌표·물음표 남발 ("일하는 방식, 진짜 바뀝니다!") |
| 운영자 화자 시점 ("팀이 몰입할 수 있습니다") | 사용자에게 명령 ("지금 시작하세요!") |
| 짧은 호흡 + 평서형 | 마케팅 슬로건 톤 |
| 데이터·자동화·맥락 같은 구체 명사 | "혁신적인", "최고의" 류 형용사 |
| 한 화면에 1개 메시지 | 카드 안에 3가지 USP 욱여넣기 |

**Voice samples** *(observed on flex.team, 2026-05-14 — illustrative, used for style anatomy not redistribution)*

1. **Hero**: "모든 HR 데이터, flex 하나로." — 4어절. 동사 없음. 마침표.
2. **Manifesto**: "flex는 조직이 일하는 방식을 바꿉니다." — 주어-목적어-서술어, 격언적 평서형.
3. **Card 3 outcome**: "이제 팀은 정보의 불균형과 반복 업무 부담에서 벗어나, 효율을 넘어 더 큰 성장을 위해 몰입할 수 있습니다." — 긴 호흡 1문장으로 인과 묶음, 결말은 "있습니다"로 가능성 제시 (단정하지 않음).

**Voice when adopted for fresh copy** (catalog-safe, no verbatim borrow): 운영자 관점 + 마침표 + 명사형 + 단정형. 사용자 직접호명·명령형은 회피.

---

## 11. Brand Narrative

**Origin (2019).** 장해남 대표가 2019년 5월 성남에서 창업. 초기 타깃은 한국 스타트업·중견기업의 HR 운영 — 엑셀과 메신저로 흩어진 인사 데이터를 한 시스템으로 모으는 게 출발점.

**Mission.** "데이터가 유기적으로 흐를 때 팀은 더 똑똑하게 성장합니다" (flex.team 2026-05-14 관찰). 흩어진 HR 데이터를 모으고, AI로 자동화하고, 맥락을 더해 **근본부터** 해결한다는 시각. 단순 SaaS가 아니라 'Human Relations Platform'으로 포지셔닝.

**Why now.** 2023→2025 매출 ₩160억 → ₩279억 (연 +30%대 성장), 2026-03 기준 213명, Series B 후 valuation ₩5,000억. 한국 HR SaaS 시장이 분절(근태/급여/평가 각각 별도 SaaS)에서 통합 플랫폼으로 재편되는 시점에, flex는 "AI 기반 통합 HR" 포지션을 선점. 2024년 사이트 리프레시(`l2024-c-*` 클래스 체계)는 이 업마켓 이동을 시각적으로 선언한 변화 — 컬러풀했던 초기 SaaS 아이덴티티를 graphite + ink 단색 체계로 정리.

*Source: thevc.kr/Flex (corporate facts), flex.team (live copy & visual signal).*

---

## 12. Principles

1. **One ink, many alphas.** 색이 의미를 만들지 않는다. `#1D1D1F`를 0.04 / 0.10 / 0.24 / 0.72 / 0.96으로 단계화해서 위계를 만든다. *UI implication:* semantic blue/green/red를 본문에 쓰지 말 것. 상태는 weight + alpha로 표현.
2. **Display tight, body loose.** 52px h2는 `-1.56px` 트래킹으로 단단하게, 17px 카드 본문은 `26px` line-height로 숨 쉬게. *UI implication:* 큰 글자일수록 트래킹 음수, 작을수록 line-height 1.5+.
3. **Section flips theme, not palette.** 다크 hero → 라이트 manifesto → 다크 카드는 *같은 ink + 같은 graphite*를 surface 반전으로 쓴 것. *UI implication:* light/dark variant는 token 교체가 아니라 `_dark` / `_light` 클래스 토글.
4. **Ring, not border.** 1px 테두리 대신 1px inset shadow ring (`0 0 0 1px inset`). *UI implication:* hover/active 전환 시 `box-shadow`만 바꾸면 layout shift 0.
5. **Friction → mechanism → outcome.** 모든 manifesto는 세 카드 구조. *UI implication:* 마케팅 hero 아래 첫 섹션은 USP 리스트가 아니라 3-beat narrative.

---

## 13. Personas

> *Personas below are derived from flex's observed positioning and TheVC corporate data — they are illustrative of who flex appears to design for, not official customer segments.*

- **운영팀 리더 (HR ops lead) at 50-300명 규모.** 엑셀 + 메신저 + 별도 근태 SaaS로 매달 결산하는 사람. flex의 "통합" 약속과 graphite 무채색 톤이 "장난감이 아닌 도구"라는 신호로 작동한다.
- **CHRO / COO at Series B-D 스타트업.** 임원에게 보고할 데이터 신뢰성이 중요. AI·자동화 카피와 manifesto의 마침표형 단정 문장이 "결정자 톤"으로 읽힌다.
- **백오피스 헤드 at 전통 중견기업.** SaaS 첫 도입. 한 화면에 1개 메시지·운영자 시점 카피·과장 없는 비주얼이 "한국 회사 정서에 맞는다"고 느낀다.

---

## 14. States

| Surface | Empty | Loading | Error | Success | Skeleton | Disabled |
|---|---|---|---|---|---|---|
| Service filter pill | n/a — 항상 5개 고정 | n/a | n/a | active pill: `rgba(29,29,31,0.04)` fill + 0.24 ring + weight 700 | n/a | inactive pill: white fill + 0.10 ring + weight 600 |
| CTA "도입 문의하기" | n/a | submit 중 → 동일 chrome 유지 (라이브 관찰 한정) | 폼 단위 inline 메시지 (페이지 단위 toast 회피) | 별도 thank-you 페이지 라우팅 | n/a | `rgba(29,29,31,0.04)` 유지 + cursor not-allowed |
| Manifesto card | 항상 3개 고정 — 1-2개 fallback 패턴은 관찰되지 않음 | n/a (정적 콘텐츠) | n/a | n/a | possibility: 동일 dims `#2D3338` + 16px radius + 30px padding의 빈 박스 | n/a |
| Header CTA | n/a | n/a | n/a | active 페이지 표시는 underline·dot 없이 weight 700 토글로 추정 | n/a | `rgba(255,255,255,0.48)` text on dark |

States 카탈로그가 사이트에 명시되지 않은 곳은 **observed shape 유지 + Pretendard weight·alpha만 조정**하는 것이 flex 톤 보존의 안전 룰.

---

## 15. Motion & Easing

라이브 관찰 한 패스 기준 — 단정적 듀레이션·이징 값은 추출하지 못함. 일반 패턴으로부터 권장 토큰:

**Duration**
- `instant`: 0ms — 토글 즉시 반영 (pill active 전환)
- `short`: 150ms — hover ring 두께 변화
- `default`: 240ms — section fade-in on scroll
- `long`: 400ms — 카드 stagger (3개 카드가 80ms 간격으로 enter)

**Easing**
- `out-quart` (`cubic-bezier(0.25, 1, 0.5, 1)`) — scroll-trigger fade (자연스러운 도착감)
- `in-out-cubic` (`cubic-bezier(0.65, 0, 0.35, 1)`) — pill 전환

**Motion rules**
1. *Translate ≤ 12px.* flex는 parallax·과한 슬라이드를 쓰지 않는다.
2. *Opacity is the primary verb.* fade-in + tiny translateY가 거의 모든 entry 모션.
3. *No spring bounce.* 항상 ease-out 류. overshoot 0.
4. *Stagger ≤ 100ms.* 3-card grid stagger는 잘게.


## 16. Do's and Don'ts

### Do
- Build hierarchy from a single ink hue `#1D1D1F` stepped through alpha values (0.04 / 0.10 / 0.24 / 0.72 / 0.96) instead of introducing semantic colors
- Set the 52px display h2 with tight `-1.56px` letter-spacing in Pretendard Variable 700 — the negative tracking is flex's visual signature
- Define component edges with a 1px inset ring (`rgba(29,29,31,0.24) 0 0 0 1px inset` for active pills, `0.10` for inactive) rather than CSS borders, so hover/active transitions cause zero layout shift
- Render the first section under the hero as a three-beat narrative (friction → mechanism → outcome) using `#2D3338` graphite cards with 16px radius and 30px padding
- Flip light/dark by toggling `.l2024_dark` / `.l2024_light` surface classes while keeping the same ink and graphite tokens, rather than swapping the palette
- Keep motion as assist: opacity fade plus a translateY of ≤12px on scroll entry, ease-out only, with 3-card stagger ≤100ms

### Don't
- Introduce blue, green, or yellow accent colors — flex's 2024 refresh deliberately deletes the SaaS accent-color habit and resolves nearly every element to the ink scale
- Fill the active service pill with a solid primary color — it uses a quiet `rgba(29,29,31,0.04)` fill with an inset ring, never a filled blue/primary
- Make the hero h1 larger than the in-page h2 — flex inverts the usual hierarchy with a compact 28px h1 banner under the 52px h2 argument
- Use spring-bounce, parallax, or slides with overshoot — motion is always ease-out with overshoot 0 and translate capped at 12px
- Put illustrations, icons, or images inside the manifesto cards — they are pure type on `#2D3338`, where the graphite-on-white card itself is the visual
- Cram multiple USPs into one card or screen — flex holds to one message per screen across its three-card structure

---

**Verified:** 2026-05-14
**Pipeline:** omd:add-reference CREATE (3-tier)
**Catalog position:** KR · saas · hr
