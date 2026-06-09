---
id: jumpit
name: Jumpit
country: KR
category: productivity
homepage: "https://www.jumpit.co.kr"
primary_color: "#00dd6d"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=jumpit.co.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    brand: "#00dd6d"
    heading: "#000000"
    heading-soft: "#222222"
    body: "#444444"
    muted: "#888888"
    inverse: "#ffffff"
    canvas: "#ffffff"
    footer-plate: "#fbfbfb"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    hero-title:  { size: 32, weight: 700, lineHeight: 1.3, use: "Hero carousel card title over photo, white" }
    section-h3:  { size: 24, weight: 700, lineHeight: 1.3, use: "Section heading titles" }
    cta:         { size: 15, weight: 700, use: "Primary auth CTA label" }
    body:        { size: 16, weight: 400, lineHeight: 1.5, use: "Body, link, chip rest state" }
    chip-active: { size: 16, weight: 700, use: "Active filter chip label" }
    footer-link: { size: 14, weight: 400, use: "Footer nav link" }
    eyebrow:     { size: 13, weight: 700, use: "Brand Notice eyebrow, always green" }
  spacing: { xs: 8, sm: 16, md: 24, base: 32, lg: 40 }
  rounded: { sm: 8, md: 20, lg: 100, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: "8px", padding: "0px 16px", font: "15px / 700", use: "회원가입/로그인 auth CTA — black, never green" }
    chip-role-active: { type: badge, bg: "#00dd6d", fg: "#ffffff", radius: "20px", padding: "7px 16px", font: "16px / 700", use: "Single-selected job-role filter chip" }
    chip-role-rest: { type: badge, bg: "#ffffff", fg: "#444444", radius: "20px", padding: "7px 16px", font: "16px / 400", use: "Unselected role chips in 22-chip filter row" }
    dropdown-filter: { type: tab, bg: "#ffffff", fg: "#000000", radius: "100px", padding: "8px 30px 8px 12px", font: "16px / 400", use: "Outlined multi-select filter dropdown trigger" }
    card-hero: { type: card, bg: "#ffffff", fg: "#ffffff", radius: "0px", font: "32px / 700", use: "Hero carousel promo card, full-bleed photo, no shadow, 340px tall" }
    card-job: { type: card, bg: "#ffffff", fg: "#444444", radius: "0px", use: "Result-grid JobCard on /positions, no shadow, hairline border" }
    eyebrow-brand: { type: badge, bg: "#ffffff", fg: "#00dd6d", font: "13px / 700", use: "Notice eyebrow above announcement card" }
    heading-section: { type: badge, bg: "#ffffff", fg: "#222222", font: "24px / 700", use: "Section H3 title on canvas" }
    link-footer: { type: listItem, bg: "#ffffff", fg: "#444444", radius: "0px", font: "14px / 400", use: "Footer nav link" }
    link-viewall: { type: listItem, bg: "#ffffff", fg: "#888888", font: "16px / 400", use: "전체 보기 inline affordance at section header edge" }
  components_harvested: true
---

# Design System Inspiration of Jumpit (점핏)

## 1. Visual Theme & Atmosphere

Jumpit (점핏) is the developer-only recruitment channel run by **Saramin HR** (사람인HR, KOSDAQ 143240) — a separate brand spun out so that engineering hiring would not share chrome with the parent's generalist job marketplace. The visual identity reads as a deliberate inversion of two adjacent Korean references: it rejects Wanted's saturated `#0066FF` "growth blue" trust signal **and** the maximalist gradients of fintech marketing — substituting a single high-key green `#00DD6D` used so sparingly that across two surfaces and 112 live element samples it appears on chrome exactly **twice** (one active filter chip, one section eyebrow). Everything else is a tight three-stop greyscale stack on a `#FFFFFF` canvas with `#FBFBFB` footer relief. The product feels closer to a developer terminal than to an HR portal — sharp 0px card corners, no box-shadows, and a vocabulary that reads "요즘 폼 미친 기업s" / "#꿀 피드" / ".zip" in casual recruiter-to-engineer register.

The brand colour is a single, decisive **`#00DD6D`** — saturated, high-luminance, intentionally closer to a terminal-prompt green than to a Spotify-style brand green. It is held back from the primary call-to-action: the global "회원가입 / 로그인" pill is `#000000` with white 15/700 type at 8px radius, not green. Green appears only on the *active-state* role-filter chip in `/positions` and on the small "Notice" eyebrow above the announcement card. The result is that green never competes with content density — it is reserved as the system's way of saying "you chose this filter" or "we want you to look at this once."

The signature surface is the **role-filter chip row** on `/positions` — twenty-two horizontally-arrayed 40px-tall pill buttons (서버/백엔드 / 프론트엔드 / 웹 풀스택 / 안드로이드 / iOS / DBA / 빅데이터 / AI·ML / DevOps / 정보보안 / QA / 개발PM / HW·임베디드 / 블록체인 / …) at 20px radius, single-select, where the chosen chip flips from transparent-on-`#444` rest to `#00DD6D`-on-white active. Below it sits a second filter row of four 100px-radius **outlined** dropdowns (기술스택 / 경력 / 지역 / 태그) — a deliberate radius-scale separation so the two filter classes never visually merge.

**Key Characteristics:**
- Single brand green `#00DD6D` — chrome use restricted to active state + one eyebrow (2 observed instances across 112 samples)
- Pretendard Variable across 100% of UI text — no proprietary display face
- Three-stop ink ladder: `#000` heading → `#444` body → `#888` muted (no hex in between)
- Three-pill radius scale: **8px** (primary CTA only) / **20px** (role chips) / **100px** (outlined filter dropdowns)
- Cards at `0px` radius — sharpness is the architectural default, pills are reserved for controls
- Zero `box-shadow` observed — depth is surface-tint only (`#FBFBFB` footer vs `#FFF` page)
- Binary weight policy — 400 body, 700 emphasis; no 600 in between
- Stack: Next.js (App Router) + styled-components — no public `:root` token contract

---

## 2. Color Palette & Roles

### Primary (Brand)
- **Jumpit Green** (`#00DD6D` / `rgb(0, 221, 109)`): The sole brand accent. Restricted to two chrome uses — active role-filter chip background and the 13/700 "Notice" eyebrow above the announcement card. **Never** on the primary CTA, never on body text, never as a hover wash.

### Ink (text)
- **Heading Black** (`#000000`): Primary CTA background, h3 hero card body text. The most saturated ink — used as much for the primary button fill as for type.
- **Heading Soft** (`#222222`): Section h3 titles ("테마별 모음.zip", "회원님을 위한 AI 추천 포지션을 보고싶다면?"). Softer than pure black to relax page rhythm.
- **Body** (`#444444`): Default reading ink — footer nav, filter-chip rest state, secondary body. The dominant link colour.
- **Muted Tertiary** (`#888888`): "전체 보기" affordance, metadata. The bottom of the three-stop ladder.
- **Inverse** (`#FFFFFF`): CTA text, hero carousel overlay titles (32/700 over photos), active filter chip text.

### Surface
- **Canvas** (`#FFFFFF`): Page background, header, card surface.
- **Footer Plate** (`#FBFBFB`): The only surface elevation in the system — a near-imperceptible warm-grey tint that signals "you are below the content."

### Semantic
- **Inferred** — Jumpit's home + positions surfaces did not expose an error/success/warning ladder this pass. Job-status badges (마감 / D-day / 신규) and form-validation states require an UPDATE capture on a saved-job or application-form surface. Until then, downstream designs should adopt a Toss-family semantic ladder (`#F04452` error / `#1FA463` success / `#FFA940` warning) rather than re-tinting `#00DD6D`.

### Discipline rule
**Green is a binary signal, not a colour ladder.** Jumpit does not ship `#00DD6D-light` / `#00DD6D-dark` / `#00DD6D-tint` derivatives. When you need attention without choice-selection semantics, use weight (700) and size (24/32px) — not a green tint.

---

## 3. Typography Rules

### Font family
- **UI / Display (single stack)**: `"Pretendard Variable", Pretendard, -apple-system, system-ui, sans-serif` — verified on 100% (112/112) of sampled elements. No `Wanted Sans`-style brand display face is layered over body.
- **Licence**: SIL OFL 1.1 (open-source). Self-hosted via Next.js static assets.

### Hierarchy

| Role | Size | Weight | Line height | Notes |
|------|------|--------|-------------|-------|
| Hero card title (over photo) | 32px | 700 | ~1.3 | White, 84px tall block — h3 used semantically as card label |
| Section h3 | 24px | 700 | ~1.3 | Ink `#222222` |
| Primary CTA | 15px | 700 | 48px button | White on `#000` |
| Body / link / chip rest | 16px | 400 | ~1.5 | Ink `#444444` |
| Filter chip active | 16px | 700 | — | White on `#00DD6D` |
| Footer link | 14px | 400 | — | Ink `#444444` |
| Brand eyebrow ("Notice") | 13px | 700 | — | The only 13px appearance, always `#00DD6D` |

### Principles
- **One family, three weights.** 400 (body), 500 (sparing — ~12% of samples), 700 (heading + active + CTA). No 600.
- **Emphasis is binary, not graduated.** Either you are content (400) or you are an instruction / heading / active state (700). The skipped 600 weight is intentional — it forces interface labels to commit.
- **Type does the brand work, not colour.** Because `#00DD6D` is restricted, hierarchy must come from size and weight alone. 32/700 white-over-photo card titles are the loudest typographic moment.
- **No <h1> on the home page.** Observed and flagged in §8 a11y — the global header's logo image and the hero carousel use h3 directly. Anyone porting this pattern should add a semantic h1 to the announcement section.

---

## 4. Component Stylings

### Button

**Primary (Auth CTA)**
- Background: `#000000`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Height: 48px
- Padding: 0px 16px
- Font: 15px / 700 / Pretendard Variable
- Use: 회원가입 / 로그인 — the single 8px-radius pill in the chrome. Auth-funnel exclusive.

**Role Filter Chip — Active**
- Background: `#00DD6D`
- Text: `#FFFFFF`
- Border: none
- Radius: 20px
- Height: 40px
- Padding: 7px 16px
- Font: 16px / 700 / Pretendard Variable
- Use: Single-selected job-role chip in `/positions` (전체 / 서버백엔드 / 프론트엔드 / iOS / DBA / 빅데이터 / AI·ML / DevOps / QA / etc.)

**Role Filter Chip — Rest**
- Background: transparent
- Text: `#444444`
- Border: none
- Radius: 20px
- Height: 40px
- Padding: 7px 16px
- Font: 16px / 400 / Pretendard Variable
- Use: All unselected role chips in the 22-chip filter row.

**Outlined Filter Dropdown**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: 1px solid (border colour not captured cleanly — flagged for UPDATE, likely `#E5E5E5`-tier hairline)
- Radius: 100px
- Height: 40px
- Padding: 8px 30px 8px 12px (asymmetric — right padding holds the caret)
- Font: 16px / 400 / Pretendard Variable
- Use: 기술스택 / 경력 / 지역 / 태그 multi-select dropdown triggers — the second filter class.

### Card

**Hero Carousel Card** (Inferred — outer chrome captured, inner spacing pending)
- Background: photographic image (full-bleed)
- Overlay title text: `#FFFFFF`, 32px / 700, 84px tall block
- Eyebrow text inside card: `#000000`, 16px / 400
- Radius: 0px
- Box shadow: none
- Height: 340px
- Use: Sliding 3-up promotion row on home — company-page entry points.

**JobCard** (Inferred — needs UPDATE pass)
- Background: `#FFFFFF`
- Radius: 0px (consistent with no-rounded-card discipline observed)
- Box shadow: none
- Border: hairline tint (exact value pending capture)
- Use: Result-grid card on `/positions`. Inner anatomy (thumbnail / position title / company / location / D-day) requires a focused capture pass.

### Eyebrow

**Brand Eyebrow ("Notice")**
- Text: `#00DD6D`
- Font: 13px / 700 / Pretendard Variable
- Use: 18px-tall label above the home Notice announcement card — the only 13px-size and the second authorised brand-green chrome use.

### Heading

**Section H3 Title**
- Text: `#222222`
- Font: 24px / 700 / Pretendard Variable
- Padding: 0px (or 0px 10px on "이번주 인기 포지션" variant)
- Use: All home section heads — sit on `#FFF` canvas.

### Link

**Footer Link (Default)**
- Text: `#444444`
- Font: 14px / 400 / Pretendard Variable
- Border: none
- Radius: 0
- Use: 14-link footer nav grid.

**Section "View all" Affordance**
- Text: `#888888`
- Font: 16px / 400 / Pretendard Variable
- Use: "전체 보기" inline link at the right edge of section headers.

---

**Verified:** 2026-05-15
**Tier 1 sources:** CDP `:9222` live capture on `jumpit.saramin.co.kr/` (52 samples) + `/positions?sort=popular` (60 samples); `assets/_reference/.live-inspect-proof.json` (10 raw_samples retained)
**Tier 2 sources:** `getdesign.md/jumpit` → "No designs found"; `styles.refero.design/?q=jumpit` → no result cards (both verified 2026-05-15)
**Conflicts unresolved:** none. JobCard inner spacing + hover/pressed/focus/disabled states + semantic ladder flagged for UPDATE pass.

---

## 5. Layout Principles

- **Single-canvas page model**. `#FFFFFF` from header to last section, then `#FBFBFB` for the footer plate. No alternating section backgrounds, no coloured banners, no full-bleed brand-green strips.
- **Filter-row pattern is the layout fingerprint**. On `/positions`, two stacked filter rows (22 role chips + 4 outlined dropdowns) precede the result grid — a horizontal-scrolling chip row above a `flex-wrap` dropdown row. The visual contract: pill class signals taxonomy class.
- **Sticky 121px header** on home — global nav (개발자 채용 / 이력서 / #꿀 피드 / 개발자 인터뷰) on the left, secondary auth (회원가입/로그인) and 기업 서비스 on the right.
- **Section vertical rhythm** uses ~24/32/40px steps (inferred from sampling, not measured). Card grids appear at 8-up on home, n-up on positions.
- **No `<h1>` on home**. The semantic heading tree starts at h2 (`Notice`) → h3 (section titles + 12 carousel-card titles). Flagged in §8.
- **Footer = 363px tall**, padding `40px 0px 30px`, 14/400 `#444` links arranged in 6-7 columns.

---

## 6. Depth & Elevation

- **No box-shadow on any sampled element.** Zero. Across 112 raw samples (buttons, cards, inputs, nav, header, footer) every `box-shadow: none`.
- Depth is communicated entirely by **surface tint**: `#FBFBFB` footer plate against `#FFFFFF` page is the single elevation tier.
- Cards on photo carousels rely on the photo itself + a black-on-photo overlay text contrast, not on shadow stacking.
- Borders, where present, are hairline tints rather than `1px solid black` — but the dominant pattern is "no border, no shadow, content separated by whitespace alone."

This is a deliberate stylistic position: by withholding depth tokens, the system signals "we are a terminal, not a banking app."

---

## 7. Do's and Don'ts

### Do
- Keep `#00DD6D` to two semantic uses: active state + brand eyebrow. Two appearances per screen is the comfortable max.
- Use weight (400 → 700) and size (16 → 24 → 32) to communicate hierarchy. Skip 600.
- Maintain the three-pill radius scale: 8 (primary CTA), 20 (role chip), 100 (outlined dropdown).
- Keep cards at 0px radius — this is what makes Jumpit feel like a developer tool, not an HR app.
- Default body ink to `#444`, not `#000`. Pure black is reserved for primary CTA and the loudest hero card text.

### Don't
- **Don't introduce a green ladder.** No `#00DD6D-tint`, no `#00DD6D-pressed-darker`. If you need a softer surface, use the `#FBFBFB` footer tint or whitespace.
- Don't put `#00DD6D` on a primary CTA — Jumpit's CTA is `#000`, that's the signature.
- Don't add `box-shadow` to cards. If you need separation, add whitespace.
- Don't reach for 600 weight. 400 or 700, commit.
- Don't add rounded corners to cards (16px / 20px / 24px). Cards = 0.
- Don't lift verbatim Jumpit voice — phrases like "요즘 폼 미친 기업s" / "#꿀 피드" are voice **shape** evidence, not adoptable copy.

---

## 8. Responsive Behavior

- **Home + positions both inspected at 1280×720 desktop**. Mobile viewport not captured this pass.
- The 22-chip role-filter row on `/positions` is wider than 1280px content area → horizontal scroll is the inferred behaviour (CSS `overflow-x: auto` typical for this pattern, not validated by this capture).
- Hero carousel sliding cards retain 340px height at desktop; mobile breakpoint behaviour pending.
- Footer 6-7 column nav grid is expected to collapse to 2-3 cols at mobile (standard pattern, not validated).
- No `prefers-color-scheme: dark` support detected — Jumpit ships light-mode only on web.
- Saramin parent ships a separate mobile app for Jumpit (App Store / Google Play CTAs present in the footer area) — design system for the native app is out of scope for this reference.

**UPDATE pass should capture**: 390×844 iPhone viewport with iOS UA, chip-row scroll affordance, mobile filter sheet (likely a bottom-sheet pattern for 기술스택/경력/지역/태그 on mobile).

---

## 9. Agent Prompt Guide

When generating Jumpit-styled surfaces, hold these constraints:

1. **One brand green, two chrome uses.** If a screen has more than two appearances of `#00DD6D`, you have failed the system. Audit before shipping.
2. **CTA is black, not green.** The primary action pill is `#000000` / `#FFFFFF` / 8px radius / 15/700.
3. **Three pill radii encode role.** 8 = primary CTA. 20 = single-select role chip. 100 = outlined multi-select dropdown. Don't mix.
4. **Cards have 0 corner radius and no shadow.** If you need depth, use whitespace or the `#FBFBFB` footer tint — that's the only elevation tier you have.
5. **Pretendard Variable, 400 or 700 — pick one per element.** Skip 500 unless you have a justified reason (footnotes, micro-meta).
6. **Three-stop ink ladder.** `#000` for the loudest moment (primary CTA, hero card text), `#222` for section heads, `#444` for body, `#888` for tertiary muted. No greys outside this set.
7. **Voice = developer-vernacular Korean with English keyword inlining.** Don't slip into corporate-HR register ("귀하의 지원이 …"). Don't lift Jumpit verbatim either — write fresh copy in the same register (see §10 samples).
8. **A11y caveat to fix downstream**: Jumpit ships home without an `<h1>` — your port should not. Add a semantic h1 to the announcement / hero region. Audit colour contrast on `#888` body text (it is below WCAG AA at 14px).
9. **Semantic ladder is yours to add.** Jumpit's production code does not expose error/success/warning tokens publicly. Adopt a Toss-family semantic palette rather than re-tinting `#00DD6D`.

---

## 10. Voice & Tone

Jumpit speaks **developer-to-developer in casual recruiter-vernacular Korean**, with English keyword inlining for technical signals. The register is "사람인이 우리 들으면 좀 의외다" — playful, slightly self-aware, never corporate-HR. Compare to Wanted's polished "growth blue" voice or Saramin's neutral marketplace tone — Jumpit deliberately sounds like a Slack message from a tech recruiter who codes on the weekend.

### Voice adjectives
1. **Vernacular** — casual contractions, trailing 's' for English-style plurals on Korean nouns, hashtag-style section names.
2. **Tech-fluent** — assumes the reader knows what DevOps, QA, K-유니콘, 부트캠프, AI School mean without unpacking.
3. **Slightly playful** — emoji-adjacent without using emoji; ".zip" / "꿀" / "T다" / "MZ" idiom adjacent to factual labels.

### Do / Don't

| Do | Don't |
|----|-------|
| "이번주 인기 포지션" | "금주 추천 채용공고를 확인하세요" (corporate-HR) |
| "내 연봉 앞자리가 바뀌는 포지션" | "고연봉 채용 정보 확인" (generic-marketplace) |
| "신입 개발자를 위한 더.루키 포지션" | "신입 개발자 대상 채용" (formal) |
| "기술스택 / 경력 / 지역 / 태그" filter labels (single-word, comma-aligned) | "원하시는 기술 스택을 선택해 주세요" (formal-imperative) |

### Voice samples *(OmD-original characterisations in the same register — not lifted from Jumpit)*

1. "이번주 가장 떡상하는 포지션 모음"
2. "프론트인데 백엔드도 좀 보고싶다면"
3. "팀 분위기 좋다 소문난 회사들"

All three are illustrative — derived from the *shape* of Jumpit voice (English-keyword inlining + trailing slang + section-as-curation framing), but no observed Jumpit phrasing was reproduced verbatim.

---

## 11. Brand Narrative

Jumpit launched as Saramin HR's answer to a specific market gap: by 2019, Korea's developer-recruitment funnel had bifurcated into "premium curated" (Wanted, Programmers) and "high-volume listings" (the parent Saramin marketplace), with no Saramin-operated channel speaking directly to engineers in their own vocabulary. Saramin's challenge: how do you build credibility with developers who associate the parent brand with résumé spam and recruiter cold-outreach? The answer was operational separation — a different domain (`jumpit.co.kr`, later consolidated to `jumpit.saramin.co.kr`), a different voice (developer-vernacular, not corporate-HR), and a visual language (sharp 0px corners, terminal-prompt green, binary type weight) that signals "this is not the same product as the parent."

The colour choice itself is a positioning statement. Where Wanted owns `#0066FF` "growth blue" and Programmers leans into a clean blue-and-white code-academy aesthetic, Jumpit picked `#00DD6D` — a green that reads closer to a terminal cursor than to a brand-marketing palette. Then they made the bold move: **restrict it to two appearances per surface.** Most Korean services treat brand colour as something to splash; Jumpit treats it like a syntax highlight. The discipline reads as taste to engineers and as confidence to recruiters.

Parent context (factual, not narrative): Saramin HR (KOSDAQ 143240) is the operator. Founded 2005, headquartered in Guro-gu Seoul. Jumpit positions itself within Saramin's portfolio as the engineer-facing channel — companion brands at the parent include the generalist Saramin marketplace, the freelance platform Saramin 잡스, and the headhunter-network Saramin 서치. Specific founder/launch quotes were not located at OmD attribution fidelity in public English-language sources — flagged for future re-research if needed.

---

## 12. Principles

1. **One brand colour, two appearances.**
   *UI implication*: `#00DD6D` is reserved for the active state of single-select controls and a single eyebrow accent per surface. Audit-fail if it appears more than twice on a screen.

2. **Sharp by default, pilled by role.**
   *UI implication*: Cards and surfaces are 0px-radius. Pill radii (8 / 20 / 100) are reserved for interactive controls and encode control class — never use a pill radius on a static surface.

3. **Type carries hierarchy, not colour.**
   *UI implication*: Build hierarchy with weight (400 vs 700) and size (16 → 24 → 32). Don't tint a section heading green to make it pop — make it 24/700 `#222` like everything else.

4. **Depth via tint, never shadow.**
   *UI implication*: `box-shadow: none` is the default. If you need to indicate "this is a different surface tier," use `#FBFBFB` against `#FFFFFF`. No card lift, no hover shadow.

5. **Speak in developer vernacular, write in fresh copy.**
   *UI implication*: Section labels are one or two Korean words plus an optional English keyword inline. Avoid honorific imperatives ("선택해 주세요"). Don't lift Jumpit copy verbatim — write in the same register.

---

## 13. Personas

*Personas below are inferred from publicly observable Jumpit + Saramin positioning. They are not sourced from a published Jumpit research artefact and should be treated as illustrative downstream context, not as ground truth.*

1. **연차 3-7년 백엔드 개발자, 이직 탐색 모드**
   Currently employed at a Series-B SaaS in Pangyo. Browses `/positions` filtered to 서버/백엔드 + 5-10년 차 + 강남/판교/원격. Reads the "꿀 피드" weekly because it shows comp data she can't get from her manager.

2. **3년차 프론트엔드, MZ vocabulary native**
   Reads section labels like "요즘 폼 미친 기업s" without irony. Filters by 기술스택 React + TypeScript and ignores any posting that doesn't list a comp range. Treats Jumpit and Wanted as competing tabs in the same browser window.

3. **부트캠프 신입, "더.루키" hunter**
   Just finished 위코드 / 크래프톤 정글 / 우아한테크코스. Lives in the "신입 개발자를 위한 더.루키 포지션" thematic curation row on the home page. Uses Jumpit's "개발자 인터뷰" content as their primary "what's that company actually like" channel.

4. **테크 리크루터 at a Saramin enterprise customer**
   Manages the company-side dashboard (out of scope for this reference). Logs in to the 기업 서비스 surface to post and review applicants. Cares that Jumpit's brand looks credible enough to engineers that the inbound funnel converts.

---

## 14. States

| Category | Observed | Notes |
|---|---|---|
| **Empty** | inferred | Empty-state visuals (no filtered results / empty 이력서) not captured this pass. Likely follows the same `#FFF` / `#444` 14/400 typography rule with no illustration — flagged for UPDATE. |
| **Loading** | inferred | No skeleton screens captured. Likely uses Next.js streaming SSR — flagged for UPDATE. |
| **Error (form)** | not captured | No form errors triggered. Downstream should adopt a Toss-family `#F04452` error ink at 14/700 below the failing input. |
| **Error (page)** | not captured | 404 / 500 page chrome not inspected. |
| **Success** | not captured | Application-submitted state pending UPDATE pass. |
| **Skeleton** | not captured | — |
| **Disabled (button)** | not captured | Likely a `#444` / 50% alpha pattern (inferred) — flagged. |
| **Active (filter chip)** | ✓ captured | `#00DD6D` bg + `#FFF` text + 16/700 — the canonical active-state token in the system. |
| **Hover** | not captured | No mouse-interaction simulated. Likely a `#222` tint on the black primary CTA + a soft `#F5F5F5` plate on chips — flagged. |
| **Focus (a11y)** | not captured | Keyboard focus-ring colour and width pending — important UPDATE candidate. |

---

## 15. Motion & Easing

Motion tokens were **not captured** this pass (single static page-load CDP inspection). Observable behaviours:

- Hero carousel auto-rotates 3-up promotion cards (timing not measured — likely 4-6s dwell).
- Filter-chip selection transition is instant or very short (<150ms inferred from styled-components default behaviour).
- No page-load fade / hero parallax / scroll-triggered reveal observed in the rendered snapshot.

**Recommended downstream defaults** (Toss style-ref per skill rule P-1, since Jumpit publishes no motion table):

| Token | Duration | Easing | Use |
|---|---|---|---|
| `motion/instant` | 0ms | none | filter chip active flip |
| `motion/fast` | 120ms | `cubic-bezier(0.4, 0, 0.2, 1)` | button press, hover wash |
| `motion/standard` | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` | dropdown open, modal slide |
| `motion/slow` | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` | carousel slide |

These are **inferred placeholders** — Jumpit's actual production durations should be captured in a follow-up pass with CDP `Animation.enable` + `transitionstart` event recording.
