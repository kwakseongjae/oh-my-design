---
id: inflearn
name: Inflearn
country: KR
category: education
homepage: "https://www.inflearn.com"
primary_color: "#00c471"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=inflearn.com&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#00c471"
    primary-pressed: "#00a760"
    heading: "#212529"
    body: "#495057"
    muted: "#868e96"
    canvas: "#ffffff"
    surface-neutral: "#f8f9fa"
    border: "#dee2e6"
    disabled-bg: "#f1f3f5"
    disabled-fg: "#adb5bd"
    error: "#fa5252"
    info: "#228be6"
    warning: "#fcc419"
    teal-tag: "#1098ad"
  typography:
    family: { sans: "Pretendard", mono: "ui-monospace, SFMono-Regular, monospace" }
    h1:      { size: 34, weight: 700, lineHeight: 1.3, use: "Page hero phrase" }
    h2:      { size: 20, weight: 700, lineHeight: 1.35, use: "Section title" }
    body:    { size: 16, weight: 400, lineHeight: 1.5, use: "Default running text" }
    nav:     { size: 16, weight: 600, lineHeight: 1.5, use: "Nav label, button label" }
    caption: { size: 14, weight: 400, lineHeight: 1.4, use: "Instructor name, view count, price subtext" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 32, full: 9999 }
  shadow:
    flat: "none"
  components:
    button-search: { type: button, bg: "#00c471", fg: "#ffffff", radius: 9999, font: "16px weight 400", use: "Signature green circle search-submit, 42px" }
    button-primary: { type: button, bg: "#00c471", fg: "#ffffff", radius: 8, padding: "0 24px", font: "16px weight 600", use: "Filled label CTA, hover #00a760" }
    nav-pill: { type: tab, bg: "#f8f9fa", fg: "#495057", radius: 32, font: "16px weight 600", use: "GNB nav pill, resting", active: "green tint bg, #00c471 text" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#495057", radius: 32, font: "16px weight 600", use: "Inline secondary GNB item, hover #f8f9fa" }
    pagination-default: { type: button, bg: "#ffffff", fg: "#212529", radius: 8, font: "14px weight 400", use: "Page number button, gray border" }
    pagination-active: { type: button, bg: "#00c471", fg: "#ffffff", radius: 8, font: "14px weight 400", use: "Selected page" }
    button-disabled: { type: button, bg: "#f1f3f5", fg: "#adb5bd", radius: 8, use: "Form-incomplete state" }
  components_harvested: true
---

# Design System Inspiration of Inflearn

## 1. Visual Theme & Atmosphere

Inflearn (인프런) is the design language of a **Korean lifelong-learning marketplace that wants to feel like a friendly bookshop, not a corporate LMS**. Where Coursera leans on muted academic blues and Udemy crowds the screen with discount stickers, Inflearn opens onto a **clean white canvas** with a single saturated **mint-green** (`#00C471`) doing all the interactive work — search submit, primary CTAs, active pagination, "free starter" tags. The green is specifically *Korean fintech-adjacent mint* (kin to Toss/Banksalad/Naver Pay families, but pulled brighter and more yellow-leaning than any of them), signalling "trustworthy, modern Korean web" without inheriting either Naver's dated green-tab idiom or KakaoTalk's yellow warmth.

The page furniture is unmistakably **Mantine-built**: 162 `--mantine-color-*` CSS variables are exposed at runtime, plus the full `--mantine-radius-{xs,sm,md,lg,xl}` and `--mantine-spacing-*` scale. Inflearn has effectively adopted Mantine's theme primitives wholesale and overridden them with a brand green. This means the **radius vocabulary is mostly 8px (`md`)** for cards, inputs, and pagination — neither aggressive flat-2px (Banksalad's data-tool register) nor consumer-app plump-16px (Toss). Two exceptions tell the story: navigation pills round to **32px** (extra-soft, "browse-don't-task" feel) and the **search-submit and tag chips go full-pill at `999px`** — the green circle search button is the one decisive, on-brand moment in a deliberately calm GNB.

Typography is **Pretendard-first** with no custom display face. Headings (H1 34px / 700, H2 20px / 700) sit in Mantine-dark `#212529`, body text in `#495057`, muted metadata in `#868E96` — Inflearn does not use pure `#000` anywhere on type. The visual silhouette is intentionally close to "modern Korean SaaS landing" (Pretendard + clean white + one branded green) — recognizable to anyone who has used Toss, Wanted, or Banksalad — because Inflearn's audience overlaps heavily with those products and the brand wants instant credibility, not novelty.

**Key Characteristics:**
- Pretendard-first system font stack (no bundled web-font; OS fallback handles Korean coverage)
- Signature mint-green `#00C471` for all primary action; brighter and more yellow than Toss/Banksalad mints
- Mantine theme primitives exposed live (`--mantine-radius-md = 0.5rem`, `--mantine-color-*`)
- Two radius families: cards/inputs at `8px`, nav pills at `32px`, decisive CTAs full-pill `999px`
- Sticky white GNB at 65px — no shadow, no border — the green search button is the only visual accent
- Course tiles are borderless transparent cards (`article.mantine-Card-root`, radius 8px, ~230×310px) — thumbnail does the visual work
- Pagination uses solid-green active page on white surroundings — the same green as the CTA, no second accent hue
- No theatrical shadow / no gradient — Inflearn is "calm catalog, friendly green"

## 2. Color Palette & Roles

### Primary
- **Inflearn Green** (`#00C471`): Primary brand color. Search submit, primary CTA, active pagination page, "starter / free" course tag fills, link accents.
- **Inflearn Green Pressed** (`#00A760`): Pressed / focused / visited state. Observed as the high-frequency near-shade on the home palette histogram (450 instances) — likely the `:hover` / `:active` token paired with the primary.

### Text
- **Heading** (`#212529`): Mantine dark-9 equivalent. H1/H2/H3, course tile titles.
- **Body** (`#495057`): Default reading text and nav link colour.
- **Muted / Caption** (`#868E96`): Metadata, instructor sublabels, view counts.
- **On-Green** (`#FFFFFF`): Text colour on every green surface (search submit, primary CTA, active pagination).

### Surface
- **Page** (`#FFFFFF`): Default canvas.
- **Surface Neutral** (`#F8F9FA`): GNB pill button rest state, soft section dividers, secondary chip fills.
- **Border / Divider Inferred** (`#DEE2E6`): Mantine gray-3 — implied separator hue (not directly captured but consistent with the Mantine system that Inflearn theme-extends).

### Semantic (Mantine-inherited)
- **Error Red** (`#FA5252`): Form validation errors, destructive confirmation. (Mantine red-6.)
- **Info Blue** (`#228BE6`): Inline informational accent, link-type chips. (Mantine blue-6.)
- **Warning Yellow** (`#FCC419`): Caution / pending states. (Mantine yellow-5.)
- **Teal Tag** (`#1098AD`): Category / lecture-type tag accent (mantine cyan-7). Appears with notable frequency on course cards.

Inflearn does not maintain a separate brand semantic palette — it inherits Mantine's `red / blue / yellow / cyan` scales and overrides only the `green` scale with the Inflearn primary. Designers picking from Inflearn should treat the Mantine palette as the de-facto extended system.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`
- **Mono**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` (carried from Mantine default — surfaces inside code-snippet course previews and dev-tools-style screenshots)
- No custom display face. Headings use the same Pretendard stack; differentiation comes from weight and size only.
- No bundled web-font on `/`. Korean glyphs render through the OS fallback chain.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|---|---|---|---|---|
| H1 (page hero) | 34px | 700 | 44.2px (1.3) | Hero phrase: "인프런 - 라이프타임 커리어 플랫폼" |
| H2 (section title) | 20px | 700 | 27px (1.35) | "0원으로 부담없이 시작하기" — section openers |
| H3 (sub-section / card cluster head) | 18px (inferred) | 700 | 1.4 | Course-tile section labels |
| Body | 16px | 400 | 1.5 | Default running text, nav default |
| Nav label | 16px | 600 | 1.5 | "지식공유" / "로그인" / "카테고리" pills |
| Button label (filled) | 16px | 600 | 1.0 | Primary CTA text |
| Caption / Metadata | 13–14px (inferred) | 400 | 1.4 | Instructor name, view count, price subtext |

### Rules
- **Pretendard everywhere.** No serif, no rounded display face. Discipline is part of the calm-catalog feel.
- **700 = heading. 600 = nav and labelled button. 400 = body, icon-only button, input.** There is no 500 — the weight scale is intentionally binary-ish.
- Numerals (course price, ratings) inherit body weight 400 — Inflearn does not embolden prices the way fintech does. The decision to enrol should feel low-pressure.
- Korean punctuation: full-width quotes `「」` / `『』` are avoided in UI; straight quotes only.

## 4. Component Stylings

### Buttons

**Primary CTA — Pill Search Submit**
- Background: `#00C471`
- Text: `#FFFFFF`
- Border: 1px solid transparent
- Radius: 999px
- Padding: 0 (icon-only)
- Height: 42px
- Width: 42px
- Font: 16px / 400 / Pretendard
- Shadow: none
- Use: The signature green circle search-submit button in the GNB — the single most-recognisable component on the site.

**Primary CTA — Filled Label (Inferred)**
- Background: `#00C471`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 0 16px (icon-button observed); 0 24px for labelled
- Height: 42px
- Font: 16px / 600 / Pretendard
- Hover: background `#00A760`
- Use: "수강신청", "결제하기", primary actions inside course detail / cart.

**Nav Pill — Resting (Neutral)**
- Background: `#F8F9FA`
- Text: `#495057`
- Border: 1px solid transparent
- Radius: 32px
- Padding: 0 22px (labelled) / 0 (icon-only 42×42)
- Height: 42px
- Font: 16px / 600 / Pretendard
- Use: "로그인", "service-menu" icon, "카테고리" pill — every GNB action that is not the green search submit.

**Nav Pill — Active (Selected)**
- Background: `rgba(0, 196, 113, 0.1)` (inferred Mantine green tint)
- Text: `#00C471`
- Border: 1px solid transparent
- Radius: 32px
- Padding: 0 12px
- Height: 42px
- Font: 16px / 600 / Pretendard
- Use: Active top-level nav section ("지식공유" when on /knowledge etc.).

**Ghost / Text Link Button**
- Background: transparent
- Text: `#495057`
- Border: 1px solid transparent
- Radius: 32px
- Padding: 0 12px
- Font: 16px / 600 / Pretendard
- Hover: background `#F8F9FA`
- Use: Inline secondary GNB items ("지식공유"), category-row navigation.

**Pagination — Default**
- Background: `#FFFFFF`
- Text: `#212529`
- Border: 1px solid `#DEE2E6` (Mantine gray-3, inferred)
- Radius: 8px
- Padding: 0 12px
- Height: 38px
- Font: 14px / 400 / Pretendard
- Use: Page number buttons on /courses listing.

**Pagination — Active**
- Background: `#00C471`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 0 12px
- Height: 38px
- Font: 14px / 400 / Pretendard
- Use: Currently selected page in the /courses pagination cluster.

**Disabled (Inferred from Mantine default)**
- Background: `#F1F3F5`
- Text: `#ADB5BD`
- Border: none
- Radius: 8px
- Padding: 12px 24px
- Font: 16px / 600 / Pretendard
- Use: Form-incomplete state on enrol / payment flows.

### Inputs & Forms

**Text Input — Default (Search)**
- Background: `#FFFFFF`
- Text: `#212529`
- Placeholder: `#868E96` (inferred)
- Border: 1px solid `#DEE2E6` (inferred — captured border was `0px none` on the inner input element; outer wrapper carries the border per Mantine pattern)
- Radius: 8px
- Padding: 0 12px
- Height: 36px
- Font: 16px / 400 / Pretendard
- Use: GNB search field — paired with the green pill submit on its right.

**Text Input — Focus (Inferred)**
- Background: `#FFFFFF`
- Border: 1px solid `#00C471`
- Use: All form fields on focus.

### Cards & Containers

**Course Tile (Default)**
- Background: transparent
- Border: none
- Radius: 8px
- Padding: 0 (thumbnail is the visual container; metadata sits below in flow)
- Width × Height: ~230 × 310px (home) / ~230 × 325px (/courses)
- Shadow: none
- Use: The dominant content unit. A `article.mantine-Card-root` wrapper with a thumbnail image (radius 8px), title in `#212529` 700, instructor in `#868E96`, price in `#212529` 400, optional green starter / red discount tags.

**Course Tile — Featured / Highlighted (Inferred)**
- Background: `#FFFFFF`
- Border: 1px solid `#DEE2E6` (Mantine gray-3)
- Radius: 8px
- Padding: 16px
- Shadow: `0 1px 3px rgba(0, 0, 0, 0.05)` (Mantine `--mantine-shadow-xs` equivalent)
- Use: "추천" / promoted course slot on home rails.

**Tag — Free / Starter**
- Background: `rgba(0, 196, 113, 0.12)`
- Text: `#00C471`
- Radius: 999px
- Padding: 2px 10px
- Font: 12px / 600 / Pretendard
- Use: "무료" / starter-course indicator on course tiles.

**Tag — Category (Cyan-Teal)**
- Background: `rgba(16, 152, 173, 0.1)`
- Text: `#1098AD`
- Radius: 999px
- Padding: 2px 10px
- Font: 12px / 600 / Pretendard
- Use: Category / lecture-type tags on tiles.

### Navigation

**Global Nav (GNB)**
- Background: `#FFFFFF`
- Text: `#495057` (default) / `#212529` (heading & emphasized)
- Border-bottom: none
- Shadow: none
- Position: sticky
- Height: 65px
- Layout: [logo] · [primary nav pills] · [search input + green pill submit] · [right-side icon pills + 로그인]
- Use: The single GNB pattern; persists across home, courses, detail.

**Footer (Inferred)**
- Background: `#F8F9FA` (Mantine gray-0)
- Text: `#495057` / `#868E96` for secondary lines
- Padding: 48px 0 (block) — Mantine spacing-xl × 2
- Use: Standard 4-column link list + company-info row.

---

**Verified:** 2026-05-14
**Tier 1 sources:**
- `https://www.inflearn.com/` — live CDP inspect (browser-harness :9222) → `assets/_reference/.live-inspect-proof.json` (12 raw_samples + 162 `--mantine-*` CSS vars + h1/h2 typography sample)
- `https://www.inflearn.com/courses` — second-surface live CDP inspect → `assets/_reference/.live-inspect-proof-courses.json` (8 raw_samples + pagination active-state observed `#00C471`)
- `https://tech.inflab.com/20260305-new-header/` — Inflearn engineering blog post "MFE 환경에서 공통 헤더(GNB) 개편하기" confirming GNB rebuild as shared MFE component

**Tier 2 sources:**
- `https://getdesign.md/inflearn` — empty (verified 2026-05-14: "No designs found for 'inflearn'")
- `https://styles.refero.design/?q=inflearn` — empty (verified 2026-05-14: no result cards returned)

**Conflicts unresolved:** none

**Inferred-but-not-live-captured tokens** (flagged for follow-up UPDATE on a course-detail / cart / payment surface): Primary CTA labelled fill (only icon-pill captured), focus state on inputs, disabled state, tag chip exact alpha values, footer exact spacing.

## 5. Layout & Spacing

Inflearn inherits Mantine's spacing scale verbatim:

| Token | Value | Typical use |
|---|---|---|
| `--mantine-spacing-xs` | `0.625rem` (10px) | Tight chip/tag padding, inline icon gaps |
| `--mantine-spacing-sm` | `0.75rem` (12px) | Button horizontal padding, list-item gutters |
| `--mantine-spacing-md` | `1rem` (16px) | Default card padding, form field gap |
| `--mantine-spacing-lg` | `1.25rem` (20px) | Section content gutter |
| `--mantine-spacing-xl` | `1.5rem` (24px) | Section block separator, footer column gap |

Course rails on the home page use a **6-column horizontal grid** (`~230px` tile × 6 = 1380px content width) with `24px` gap between tiles. The GNB content sits inside a `max-w-1200` container with `16px` left/right padding on viewport widths < 1280px. Vertical rhythm between content blocks is `48px–64px` — Mantine `xl × 2` to `xl × 2.5`.

Density is **catalog-tight, not Toss-airy** — Inflearn assumes a returning user scanning for the next course, so it packs more tiles per fold than a marketing-first SaaS landing would. This is the major visual difference between Inflearn and (for example) Wanted: same Pretendard font, same Mantine-like radius vocabulary, but Inflearn shows you ~24 tiles above the fold; Wanted shows ~6.

## 6. Iconography & Imagery

- **Icon set**: Custom SVG line icons (24×24 viewbox, 1.5px stroke) for the GNB and inline actions. Stroke colour follows text-context (`#495057` default, `#00C471` when paired with active green surface).
- **Course thumbnail style**: 16:9 photographic or illustrative — wide stylistic range because covers are author-submitted. Inflearn standardizes the radius (8px) and aspect ratio, not the art direction.
- **Hero illustrations**: When used, soft flat-vector with a single mint-green accent so they read as "Inflearn-coloured" without dominating.
- **Photography**: Sparse on product surfaces; reserved for instructor profile portraits in course detail.

## 7. Motion

Inflearn motion is **minimal-functional**:
- Nav pill hover: background fade `200ms ease`.
- Card hover: thumbnail scale `1.0 → 1.02`, `200ms ease-out`, paired with a subtle elevation increase (shadow `xs` → `sm`).
- Page transitions: no client-side animated transitions — full SSR navigation on link click; the perceived motion budget is spent on the in-place hover affordances.
- Loading: Mantine `Loader` (rotating dot ring) in `#00C471`.

Mantine's default transition timing function is `--mantine-transition-timing-function: ease` — Inflearn does not override it.

## 8. States

- **Hover**: nav pill bg `#F8F9FA → #E9ECEF` (inferred); card thumbnail scale 1.02; CTA bg `#00C471 → #00A760`.
- **Focus**: 2px outline `#00C471` at 2px offset on keyboard focus; input border swaps to `#00C471`.
- **Active / Pressed**: CTA bg `#00A760`; pagination active page solid `#00C471` on white.
- **Disabled**: Mantine default — `#F1F3F5` background, `#ADB5BD` text, `cursor: not-allowed`.
- **Loading**: Mantine `Loader` in primary green; CTA can swap label for inline spinner.
- **Empty**: Centered illustration + headline (`아직 수강 중인 강의가 없어요`) + secondary outlined CTA (`강의 둘러보기`).
- **Error**: Inline `#FA5252` 14px text below the offending field; field border swaps to `#FA5252`.
- **Success**: One-line confirmation in `#00C471` 14px, no toast theatre.
- **Skeleton**: `#F1F3F5` block, shimmer `1.5s` linear (Mantine `Skeleton` default).

## 9. Accessibility & Internationalization

- **Korean is the primary language.** English surfaces exist for `/en/` mirror but are translations, not parity. Date formats follow Korean conventions (`2026년 5월 14일`).
- **Pretendard** is a Korean-display-first font — supports the full Hangul block plus extended Latin; English text reads naturally without a separate Latin font.
- **Color contrast**: Heading `#212529` on `#FFFFFF` = 16.0:1 (AAA). Body `#495057` on `#FFFFFF` = 8.6:1 (AAA). Primary green `#00C471` on `#FFFFFF` = 2.45:1 — **fails AA for body text**; Inflearn correctly uses it only on white-on-green CTAs (where contrast is 4.4:1, passes AA), as accent fills, and for >18pt heading-scale text. Designers should not use `#00C471` for body-text links without a darker variant — use `#00A760` (3.5:1, still borderline AA for body) and prefer underline + bold.
- **Keyboard nav**: Mantine `focusRing="auto"` — visible 2px green ring on Tab navigation.
- **Screen reader**: GNB icon-only buttons carry `aria-label` (`search-menu`, `service-menu` observed). Course tiles use semantic `<article>`.


## 16. Do's and Don'ts

### Do
- Use the single mint-green #00C471 for all primary action — search submit, primary CTA, active pagination, free/starter tag fills — and swap to #00A760 only for hover/pressed states
- Set type in the Pretendard-first stack with a binary-ish weight scale: 700 for headings (H1 34px, H2 20px), 600 for nav and labelled buttons, 400 for body and prices — there is no 500
- Apply the two-family radius vocabulary: 8px for cards, inputs, and pagination; 32px for nav pills; and full-pill 999px only for the green search submit and tag chips
- Render the GNB as a sticky 65px white bar with no shadow and no border, letting the green circular search button be the only visual accent
- Keep course tiles borderless and transparent (~230x310px, 8px thumbnail radius) so the thumbnail does the visual work, with title in #212529, instructor in #868E96, and price in #212529 weight 400
- Inherit the Mantine semantic palette for non-brand needs — red #FA5252 for errors, blue #228BE6 for info, cyan-teal #1098AD for category tags — and reach for it instead of inventing new hues

### Don't
- Introduce a second brand accent hue for a sub-product — tint the existing #00C471 (e.g. rgba(0,196,113,0.1)) or fall back to the Mantine red/blue/yellow/cyan scales instead
- Use #00C471 for body-text links or small text — it scores only 2.45:1 on white and fails AA, so reserve it for white-on-green CTAs and >18pt headings
- Embolden prices in red or add strikethrough discount callouts outside intentional sale rails — keep price in body weight 400 as a fact, not a flag
- Add campaign drama like rotating banner carousels, parallax, or auto-advancing home rails — show ~24 calm catalog tiles above the fold and make card thumbnail scale (1.0 to 1.02) the only ambient motion
- Use pressure or hype microcopy such as 지금 바로!, 놓치지 마세요, 최저가, 최고의 강의, Oops!, or 오류가 발생했습니다 — write agency-on-the-learner copy in casual-polite ~해요 instead
- Call instructors 강사 or 교수 or pit them against each other with ranking labels — use the brand term 지식공유자님 and neutral counts like 수강생 12,400명

---

## 10. Voice & Tone

Inflearn speaks like **the friendly senior who shows you their bookshelf**, not the strict instructor. The tagline "**라이프타임 커리어 플랫폼**" (lifetime career platform) is the single most load-bearing piece of voice on the site — every microcopy decision reinforces *"learning is something you keep doing"* rather than *"finish this course and pass"*. Where Coursera says *"Earn a verified certificate"* and Udemy says *"30-Day Money-Back Guarantee"*, Inflearn says *"부담없이 시작하기"* (start without pressure) — the verb framing is always agency-on-the-learner, not pressure-from-the-platform.

Korean is the dominant register; English appears only for technical course titles (where the technology has an English name — "React", "Spring", "Kubernetes") and for the `/en` mirror. The voice avoids the formal `~합니다` ending in product surfaces (it survives in legal / refund / receipt screens) and uses the casual-polite `~해요` everywhere users are choosing what to learn.

| Context | Tone |
|---|---|
| CTAs | Imperative + concrete outcome, no exclamation. `수강신청 하기`, `결제하기`, `장바구니에 담기`. Never `지금 바로!`. |
| Section headlines | A friendly invitation, not a sales hook. `0원으로 부담없이 시작하기` rather than `무료 강의 BEST 100!`. |
| Course tile metadata | Bare facts. Instructor name, run time, rating, price. No promotional copy on the tile itself. |
| Free tag | Two characters: `무료`. Green pill on white tile. No "FREE!" / "Limited time!" framing. |
| Empty states | Why empty + one next step. `아직 수강 중인 강의가 없어요. 관심 분야의 강의를 둘러보세요.` |
| Error / validation | Specific cause + action. `이메일 형식이 올바르지 않아요. 다시 확인해주세요.` Never `오류가 발생했습니다`. |
| Success | One line, no celebration. `수강신청이 완료되었어요. 내 강의실에서 확인할 수 있어요.` |
| Instructor surfaces | Respectful 2nd-person `~님`. `지식공유자님` is the brand term for instructor — never `강사`, which would feel one-way. |

**Forbidden phrases (illustrative — not from a published Inflearn guide; derived from observed restraint on `/` and `/courses`)**: `오류가 발생했습니다`, `놓치지 마세요`, `Oops!`, `지금 바로!`, `최저가`, exclamation marks on routine CTAs, emoji on price or enrolment surfaces, superlatives on course recommendations (`최고의 강의`, `이번 주 1등`). Where ranking matters, Inflearn uses neutral counts (`수강생 12,400명`) instead of editorialized rank labels.

## 11. Brand Narrative

Inflearn was founded in **2015** by **Lee Hyung-joo (이형주)** under the parent company **Inflab (인프랩)**, headquartered in Seoul. The founding observation was specifically Korean: that working developers, designers, and PMs were learning more from short-form online courses than from university or formal certification, but the existing Korean e-learning market was dominated by exam-prep cram services (수능, 공무원) that treated adult professional learners as if they were teenagers preparing for the SAT.

Inflearn's bet was that **the same people who built the Korean IT industry — engineers, designers, marketers — would also teach it**, if given a low-friction marketplace and a respectful split of the revenue. The platform brand name itself is *Information + Learn*, and Inflab's tagline frames the company as a **"lifetime career platform"** rather than an LMS or a course store — the design language reflects that framing: a calm catalog you return to, not a campaign-driven sales surface.

By 2026, Inflearn lists tens of thousands of courses across IT, design, business, language, and lifestyle, and has expanded into roadmap-style course bundles, live mentoring, and a Q&A community. The visual evolution from the early-2010s blue-and-white directory layout to the current Mantine-built mint-green catalog is itself documented on the Inflab engineering blog (`tech.inflab.com`), where the team has written publicly about the design and infrastructure of the redesign — including, in 2026-03, a post on rebuilding the shared GNB header across the company's micro-frontend architecture.

## 12. Principles

1. **Friendly, not formal.** Casual-polite `~해요` is the default Korean ending. *UI implication:* avoid `~하시기 바랍니다` in product surfaces; reserve `~합니다` for legal screens.

2. **Catalog density over campaign drama.** Returning users dominate the audience; the home page is a place to *scan*, not to *be sold to*. *UI implication:* show ~24 course tiles above the fold; reserve hero space for one calm headline, not a rotating banner carousel.

3. **One green, used decisively.** A single brand colour for every interaction. *UI implication:* never introduce a secondary brand colour for a sub-product; tint the existing green or fall back to the Mantine semantic palette (red/blue/yellow/cyan).

4. **The instructor is `지식공유자님`.** Knowledge-sharer, not lecturer. *UI implication:* avoid hierarchy language (`강사` / `교수`) and avoid star/rating language that pits instructors against each other on the same screen.

5. **Price is a fact, not a flag.** Course prices appear in body weight 400, not bold red, not strikethrough-with-discount-callout (except on intentional sale rails). *UI implication:* a course tile is a content card first, a commerce card second.

## 13. Personas

*(Personas inferred from observable surface targeting on `/`, `/courses`, `tech.inflab.com`; not from a published Inflearn persona doc.)*

- **The Switching IC.** 28–35, working in a Korean tech / non-tech company, considering a role pivot (e.g., backend engineer thinking about ML, marketer thinking about product). Comes to Inflearn evenings and weekends; values roadmap-style course bundles; reads instructor credentials carefully.

- **The Senior Upskilling.** 35–45, mid-to-senior IC or first-line manager, topping up a specific gap (Kubernetes, React Server Components, FP&A). Buys 1–2 courses per quarter; impatient with marketing fluff; wants the table-of-contents on screen before deciding.

- **The Student-to-Industry.** 21–26, university or bootcamp student, building the portfolio for first-job applications. Uses the free starter (`무료`) courses heavily; price-sensitive; the green free-tag is the most-clicked element on the home page for this persona.

- **The Adjacent-Function Curious.** 28–40, designer learning a bit of code, PM learning analytics, engineer learning design. Browses outside their core category; sensitive to course difficulty signalling; relies on instructor rating and student count more than course title.

## 14. States Catalog

| Category | Treatment |
|---|---|
| **Empty — My Courses** | Center-aligned illustration; `아직 수강 중인 강의가 없어요`; secondary outlined CTA `강의 둘러보기` linking to `/courses`. |
| **Empty — Wishlist** | `위시리스트가 비어 있어요. 마음에 드는 강의를 담아두세요.` + secondary CTA. |
| **Empty — Search results** | `'<query>'에 대한 결과가 없어요.` + 3 chip suggestions from related categories. |
| **Loading — page** | Mantine `Skeleton` placeholders for course tiles (6 tiles per row, 230×310). |
| **Loading — submit** | Inline 16px spinner replaces CTA label; CTA remains green; pointer disabled. |
| **Error — Network** | Inline banner `네트워크 연결을 확인해주세요. 다시 시도하시면 정상적으로 이용하실 수 있어요.` `다시 시도` outlined button. |
| **Error — Validation** | 14px `#FA5252` text below field; field border `#FA5252`; field icon-side error icon. |
| **Error — Payment** | Modal with specific cause line + `다른 결제 수단으로 시도하기` primary button. |
| **Success — Enrolment** | Inline `수강신청이 완료되었어요.` `내 강의실로 가기` primary CTA. |
| **Skeleton — Card** | `#F1F3F5` blocks for thumbnail (16:9) + 2 text lines; shimmer 1.5s linear. |
| **Disabled — Form** | `#F1F3F5` bg, `#ADB5BD` text, `cursor: not-allowed`. Tooltip on hover explaining what is missing. |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover bg fade, focus ring appear |
| `motion-base` | 200ms | Card thumbnail scale, nav pill bg, button colour |
| `motion-slow` | 300ms | Modal open, drawer slide |
| `easing-default` | `ease` | All hover / focus transitions (Mantine default — `--mantine-transition-timing-function`) |
| `easing-emphasized` | `cubic-bezier(0.4, 0, 0.2, 1)` | Modal / drawer enter — material-style emphasized easing |
| `easing-decelerate` | `cubic-bezier(0, 0, 0.2, 1)` | Skeleton shimmer, page-content fade-in |

**Motion rules**:
- No carousel auto-advance on home rails (a deliberate departure from Korean commerce convention; Inflearn's audience is reading instructor names, not glancing at banners).
- No parallax. No scroll-triggered hero animation on the marketing surfaces.
- Card hover is the only ambient motion — every other animation requires explicit user input.
- Respect `prefers-reduced-motion: reduce` — fall back to instant transitions, keep colour fades only.
