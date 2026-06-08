---
id: jobkorea
name: "JobKorea"
country: KR
category: consumer-tech
homepage: "https://www.jobkorea.co.kr"
primary_color: "#083ccc"
logo:
  type: favicon
  slug: "https://www.jobkorea.co.kr/display/images/favicon.png"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#083ccc"
    primary-hover: "#012ca2"
    primary-500: "#1b55f6"
    primary-400: "#4c7afb"
    primary-50: "#f0f2fa"
    point-orange: "#ff6d12"
    text: "#1a1a1e"
    text-secondary: "#292c32"
    text-tertiary: "#575f6c"
    placeholder: "#949ba8"
    border: "#e6e8ea"
    canvas: "#f6f7f8"
    error: "#fc3b3b"
    success: "#0dbc7c"
    white: "#ffffff"
  typography:
    family: { sans: "Pretendard", fallback: "Apple SD Gothic Neo, Malgun Gothic, sans-serif" }
    display: { size: 48, weight: 700, lineHeight: 1.33, tracking: -0.5, use: "Display 1" }
    h1:      { size: 32, weight: 700, lineHeight: 1.31, tracking: -0.5, use: "H1 heading" }
    h4:      { size: 20, weight: 600, lineHeight: 1.4, use: "H4 sub-heading" }
    body:    { size: 16, weight: 400, lineHeight: 1.5, use: "Body 2 reading text" }
    caption: { size: 13, weight: 400, lineHeight: 1.38, use: "Caption 1" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 10, lg: 16, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.06) 0px 2px 8px"
  components:
    button-primary: { type: button, bg: "#083ccc", fg: "#ffffff", radius: 10, padding: "0 16px", font: "16px weight 700", use: "Primary CTA, 48px tall, hover #012ca2" }
    chip-selected: { type: badge, bg: "#f0f2fa", fg: "#083ccc", use: "Selected chip / brand-tinted pill tag fill" }
    badge-urgent: { type: badge, fg: "#ff6d12", use: "Urgency badge, deadline label" }
    input: { type: input, bg: "#ffffff", fg: "#1a1a1e", border: "#e6e8ea", use: "Default input, gray border" }
    card: { type: card, bg: "#ffffff", border: "#e6e8ea", use: "Job-listing card surface, subtle elevation" }
    badge-error: { type: badge, fg: "#fc3b3b", use: "Form error / destructive indicator" }
    badge-success: { type: badge, fg: "#0dbc7c", use: "Application success / offer received" }
  components_harvested: true
---

# JobKorea

South Korea's leading AI career platform connecting 9+ million active job seekers with employers through personalized matching, salary intelligence, and community-driven career guidance.

## 1. Visual Theme & Atmosphere

JobKorea's visual language is confident and data-forward — the UI is built around a deep royal blue (`#083ccc`, JK Blue 600) that signals authority and trust in a crowded recruitment market. Surfaces stay crisp white with an understated gray-scale hierarchy (`#f6f7f8` background through `#1a1a1e` near-black) so that job listings and CTA buttons read at a glance without fatigue. An accent orange (`#ff6d12`, AM Orange 500) is reserved sparingly for urgency cues — deadline badges, highlighted pay rates — creating a clear urgency hierarchy without overwhelming the functional tone. Since the 2023 "Dreammark" brand refresh the product has leaned into a more youthful, mobile-first energy with pill-radius search bars (border-radius: 999px), gradient-glowing AI search inputs, and subtle card elevation — moving away from its legacy portal feel toward a modern career-management platform.

## 2. Color Palette & Roles

- **JK Blue 600 (Primary):** `#083ccc` — primary CTAs, active states, links, focus rings
- **JK Blue 500:** `#1b55f6` — hover surfaces, secondary brand tint
- **JK Blue 400:** `#4c7afb` — lighter interactive states, selected chip backgrounds
- **JK Blue 50:** `#f0f2fa` — brand-tinted backgrounds, pill tag fills
- **AM Orange 500 (Point):** `#ff6d12` — urgency badges, deadline labels, job-ad highlights
- **Gray 950 (Near-Black):** `#1a1a1e` — primary body text, headings
- **Gray 900:** `#292c32` — secondary text, card content
- **Gray 700:** `#575f6c` — tertiary labels, meta information
- **Gray 500:** `#949ba8` — placeholder text, disabled labels
- **Gray 100:** `#e6e8ea` — dividers, default input borders
- **Gray 50:** `#f6f7f8` — page background, search bar fill
- **Red 500 (Error):** `#fc3b3b` — form errors, destructive indicators
- **Green 500 (Success):** `#0dbc7c` — application success, offer received
- **Base White:** `#ffffff` — card surfaces, modal backgrounds

## 3. Typography Rules

JobKorea's UI type is set exclusively in **Pretendard**, with Korean fallbacks to Apple SD Gothic Neo and Malgun Gothic. The type scale is named by variant with an embedded px size.

| Role | Token | Size / Line-height | Weight |
|---|---|---|---|
| Display 1 | d1-48 | 48px / 64px | 700 |
| Display 2 | d2-36 | 36px / 48px | 700 |
| H1 | h1-32 | 32px / 42px | 700 |
| H2 | h2-28 | 28px / 34px | 700 |
| H3 | h3-24 | 24px / 32px | 700 |
| H4 | h4-20 | 20px / 28px | 600 |
| H5 | h5-18 | 18px / 24px | 600 |
| Body 1 | b1-17 | 17px / 25px | 400 |
| Body 2 | b2-16 | 16px / 24px | 400 |
| Body 3 | b3-15 | 15px / 22px | 400 |
| Body 4 | b4-14 | 14px / 20px | 400 |
| Caption 1 | c1-13 | 13px / 18px | 400 |
| Caption 2 | c2-12 | 12px / 17px | 400 |
| Caption 3 | c3-11 | 11px / 15px | 400 |

Heading tokens carry `letter-spacing: -0.5` for tighter display. Body and caption tokens use `letter-spacing: 0`.

## 4. Component Stylings

### Buttons

**Primary (size-48)**
- Background: `#083ccc`
- Text: `#ffffff`
- Height: 48px
- Radius: 10px
- Font: 16px / 700
- Padding: 0 16px

**Primary Hover**
- Background: `#012ca2`
- Text: `#ffffff`
- Height: 48px
- Radius: 10px
- Font: 16px / 700

**Secondary Outlined (size-48)**
- Background: `#ffffff`
- Text: `#1a1a1e`
- Border: 1px solid `#d5d8dc`
- Height: 48px
- Radius: 10px
- Font: 16px / 400

**Disabled Filled**
- Background: `#d5d8dc`
- Text: `#949ba8`
- Height: 48px
- Radius: 10px
- Font: 16px / 400

**Small (size-40)**
- Background: `#083ccc`
- Text: `#ffffff`
- Height: 40px
- Radius: 10px
- Font: 14px / 700

**Ghost Text Button**
- Background: `#f6f7f8`
- Text: `#083ccc`
- Height: 40px
- Radius: 10px
- Font: 14px / 500

### Text Fields

**Default (size-52)**
- Background: `#ffffff`
- Border: 1px solid `#e6e8ea`
- Radius: 10px
- Padding: 0 16px
- Height: 52px
- Font: 15px / 400

**Focused**
- Background: `#ffffff`
- Border: 1px solid `#1a1a1e`
- Radius: 10px
- Height: 52px
- Font: 15px / 400

**Error**
- Background: `#ffffff`
- Border: 1px solid `#f11e1e`
- Radius: 10px
- Height: 52px
- Font: 15px / 400

**Disabled**
- Background: `#f6f7f8`
- Border: 1px solid `#e6e8ea`
- Radius: 10px
- Height: 52px
- Font: 15px / 400

### Search Bar

**AI Search (pill)**
- Background: `#f6f7f8`
- Border: 1px solid gradient (animated pink → amber → blue)
- Radius: 999px
- Height: 48px
- Padding: 0 16px
- Font: 15px / 400

**Standard Search**
- Background: `#f6f7f8`
- Radius: 999px
- Height: 48px
- Padding: 0 16px
- Font: 15px / 400

### Job Cards

**Default Card**
- Background: `#ffffff`
- Border: 1px solid `#e6e8ea`
- Radius: 10px
- Padding: 16px

**Elevated Card**
- Background: `#ffffff`
- Radius: 12px
- Padding: 16px

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.jobkorea.co.kr (homepage HTML), https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/ff9addcaa74e70a7.css (main CSS bundle with full token system), https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/fd29aacb4b8b02e0.css, https://fe-static-cdn.jobkorea.co.kr/display/web/_next/static/css/fa90ad3a5df82bc3.css, https://www.jobkorea.co.kr/company/1517115 (Worxphere/JobKorea company page)
**Tier 2 sources:** getdesign.md/jobkorea — NOT LISTED (no data). refero — no results for JobKorea.
**Conflicts unresolved:** The 2023 Sodiumpartners rebrand narrative describes "JOBKOREA Black" as the primary brand color, but the live CSS token system (`data-brand-theme=jk`) clearly maps `--themecolor-brand-primary` to `--color-jkblue-600` (#083ccc). The deep blue is used for all primary buttons and interactive states in the current production build; the near-black (#1a1a1e) functions as the primary text color, not the brand color.

## 5. Layout Principles

JobKorea uses a single max-width content container of **1024px** on desktop, centering all content with full-bleed section backgrounds. The page has two primary breakpoints: mobile-first (≤600px) and desktop (≥1024px), with no intermediate tablet breakpoint declared. Job listing grids use CSS grid or flex with 8px base spacing unit (multiples: 4, 8, 12, 16, 20, 24, 32, 40, 48px). Navigation is sticky with a white background and bottom divider. The GNB maintains a fixed height and collapses into a hamburger on mobile.

## 6. Depth & Elevation

JobKorea's elevation system has four named shadow levels:

- **List shadow** (subtle rows): `0 4px 8px rgba(0,0,0,0.02)` — used on list items
- **Secondary shadow** (card rest): `0 4px 16px rgba(0,0,0,0.07)` — default card state
- **Default shadow** (interactive card): `0 4px 16px rgba(0,0,0,0.12)` — hovered cards, modals
- **Up shadow** (bottom sheet): `0 -2px 12px rgba(0,0,0,0.12)` — bottom sheet, sticky CTAs
- **Button Big shadow**: `0 0 12px rgba(0,0,0,0.20)` — large floating action buttons

Modals use a `rgba(0,0,0,0.6)` dimmer overlay. Tooltips use `#1a1a1ed9` (85% near-black) background.

## 7. Do's and Don'ts

### Do
- Use JK Blue 600 (`#083ccc`) for all primary interactive elements — buttons, active tabs, checked states
- Apply Pretendard at the specified weight/size tokens; never mix ad-hoc font sizes outside the named scale
- Use pill-radius (999px) for search inputs and tag chips; use 10px radius for cards and form controls
- Reserve AM Orange (`#ff6d12`) strictly for urgency signals — deadline countdowns, urgent-hire badges
- Keep body copy at Gray 950 (`#1a1a1e`) on white; use Gray 700 (`#575f6c`) for secondary metadata
- Use `0 4px 16px rgba(0,0,0,0.12)` elevation for interactive cards; flat (no shadow) for static content
- Provide skeleton loaders matching the exact card height/radius before content loads

### Don't
- Don't use AM Orange for primary buttons or general interactive states — it belongs to AlbaMon's brand
- Don't apply the gradient search border animation to non-AI-powered inputs; it signals AI capability
- Don't use border-radius values outside the token set (avoid ad-hoc 5px, 15px, 20px)
- Don't place body text below Gray 700 (`#575f6c`) on white — fails WCAG AA at small sizes
- Don't stack more than two elevation levels in the same scroll context (list + modal is fine; list + card + modal is not)
- Don't use the gray-950 near-black (#1a1a1e) as a button background except for the "inverse" button variant

## 8. Responsive Behavior

JobKorea is a mobile-first Next.js application (React server components). Below 600px the layout shifts to single-column with full-width cards; the search bar transitions from 600px fixed-width to fluid 100%. Navigation collapses from a full horizontal GNB to a bottom tab bar on mobile. The 1024px container clamps on desktop. Font sizes scale down one step at mobile: Display tokens are avoided; H3 (24px) is the largest practical heading. Button heights prefer the 48px variant on desktop, 40px on mobile for comfortable touch targets.

## 9. Agent Prompt Guide

When building JobKorea-style UI:
- Scaffold the layout with a max-width 1024px centered container, background `#f6f7f8`
- Primary button: background `#083ccc`, text `#ffffff`, height 48px, border-radius 10px, font-weight 700, font-size 16px (Pretendard)
- Secondary button: border 1px solid `#d5d8dc`, background `#ffffff`, same radius/height
- Input field: border 1px solid `#e6e8ea`, background `#ffffff`, height 52px, radius 10px, 16px padding, placeholder color `#949ba8`
- Search pill: background `#f6f7f8`, radius 999px, height 48px
- Card: background `#ffffff`, border 1px solid `#e6e8ea`, radius 10px, padding 16px, shadow `0 4px 16px rgba(0,0,0,0.12)` on hover
- Body text: `#1a1a1e` (primary), `#575f6c` (secondary), `#949ba8` (placeholder)
- Error text/border: `#fc3b3b`; Success: `#0dbc7c`; Urgency badge: `#ff6d12` background

## 10. Voice & Tone

JobKorea's voice is **direct, encouraging, and data-grounded** — it speaks like a well-informed career advisor who respects the user's time.

| Do | Don't |
|---|---|
| Lead with concrete benefit ("AI가 맞춤 공고 5개를 찾았어요") | Vague aspiration without specificity ("당신의 꿈을 펼치세요") |
| Use short, active sentences in informal Korean (-해요 register) | Jargon-heavy HR speak ("핵심 역량 기반 매칭 알고리즘") |
| Acknowledge the user's current situation before offering next step | Jump straight to a CTA without context |
| State numbers — application rates, salary percentiles, recruiter views | Use superlatives without proof ("최고의", "가장 좋은") |

Voice samples (illustrative):
- *"지난주보다 지원자가 30% 늘었어요. 지금 지원하면 더 눈에 띌 수 있어요."*
- *"딱 맞는 공고 3개가 생겼어요. 한번 확인해볼까요?"*
- *"이력서를 업데이트하면 채용담당자에게 더 잘 보여요. 5분이면 충분해요."*

## 11. Brand Narrative

JobKorea was established in 1996 and launched its employment portal in 1998 as one of Korea's first dedicated online job boards. Over nearly three decades it grew into the nation's largest HR platform — now part of the Worxphere group — hosting 9.32 million active resumes and connecting approximately one million monthly active job seekers with employers across every industry and region.

In 2023, JobKorea unveiled its "Dreammark" brand identity, created by branding agency Sodiumpartners. The refresh moved the platform's narrative from a utilitarian job-listing site toward a personalized career manager, with a bold JK Blue identity system and a new brand mascot "Jobko" that embodies the mission: guiding people toward jobs that fit their real selves. The company articulates its purpose as making "people's dreams become jobs, and companies' jobs become dreams," with a social-responsibility dimension — donating 100 KRW per submitted resume and per job posting to welfare programs for people with disabilities and economically marginalized youth.

Today, Worxphere operates JobKorea alongside AlbaMon (part-time), GameJob, NineHire (ATS), and JobPlanet (employer reviews), building toward a full-stack AI HR tech platform. The platform has ranked #1 in Korean employment portal brand power (K-BPI) for three consecutive years (2023–2025), and its AI-powered "LOOP AI" recommendation engine now powers the core job-discovery experience on both web and mobile.

## 12. Principles

1. **Personalization over volume.** JobKorea surfaces fewer, better-matched opportunities rather than an overwhelming list. *UI implication:* The default job feed shows AI-ranked picks, not raw chronological listings; chip filters and saved preferences shape what the user sees from the first visit.*

2. **Transparency builds trust.** Salary data, recruiter view counts, application-to-hire ratios, and company reviews are surfaced inline on job cards — not behind a paywall. *UI implication:* Job cards include a salary indicator and a "N명 지원" (N applied) count next to the title.*

3. **Speed respects the user.** A resume can be submitted in two taps from a job card; the full application flow targets under 60 seconds. *UI implication:* Destructive or multi-step actions require confirmation, but forward-direction actions — apply, save, share — are single-tap with immediate feedback.*

4. **Data earns the right to advise.** JobKorea uses behavioral signals (viewed jobs, resume completeness, location) before making AI recommendations, never cold. *UI implication:* Empty states prompt profile completion rather than showing random content; progress indicators show how close the user is to unlocking personalized matches.*

5. **Inclusive access.** The platform serves job seekers at every career stage — new graduates, mid-career transitioners, seniors, and part-timers — with differentiated content lanes rather than a one-size feed. *UI implication:* Specialized channels (IT, Design, Senior, Startup) are surfaced in persistent GNB tabs and not buried in filter menus.*

## 13. Personas

*Illustrative — not based on published JobKorea research.*

**신입 취준생 (First-time Graduate)** — 24, finishes university in February, applying to large conglomerates and IT firms. Checks the app daily on commute; motivated by application counters and peer benchmarks. Needs resume templates, accepted cover letter examples, and aptitude test prep links within one tap.

*Illustrative — not based on published JobKorea research.*

**경력 이직자 (Mid-Career Switcher)** — 33, 8 years in marketing, wants to move from agency to in-house. Has a complete profile but is selective; visits weekly, not daily. Values salary benchmarking, company culture reviews, and recruiter contact over raw listing volume.

*Illustrative — not based on published JobKorea research.*

**채용담당자 (HR Manager)** — 40, in-house recruiter at a 300-person tech company. Uses the employer dashboard to post jobs, review applicants, and send messages. Needs fast bulk-action tools, applicant status tracking, and analytics on listing performance.

*Illustrative — not based on published JobKorea research.*

**긱 워커 (Gig / Part-time Seeker)** — 28, freelancer top-up income via AlbaMon integration. Wants quick-apply shifts near their location, hourly rate transparency, and immediate availability confirmation.

## 14. States

- **Empty (no results):** Illustrated character (Jobko mascot) with headline "맞는 공고가 없어요" + sub-copy suggesting filter adjustment and a ghost CTA to reset filters; never a blank white box
- **Loading skeleton:** Cards render as gray shimmer blocks matching the exact height and border-radius of the real card (radius 10px, height ~120px); page background remains `#f6f7f8`
- **Error — network:** Inline banner alert with Red 50 (`#fbf5f5`) background, red border, and retry button; page content beneath is not unmounted
- **Error — form validation:** Input border shifts to `#f11e1e`, an error message in Red 500 (`#fc3b3b`) at 13px appears below the field; focus moves to the first error field
- **Success — application submitted:** Full-bleed success toast (Green 500 `#0dbc7c` left-border snackbar) with "지원 완료!" message; job card gains a "지원완료" gray badge and the apply button becomes disabled
- **Skeleton (list):** Job listing rows show as stacked shimmer bars (title 16px height, company 12px height) with 8px gap; no spinner overlay
- **Disabled:** Buttons use Gray 200 background (`#d5d8dc`) with Gray 500 text (`#949ba8`); inputs use Gray 50 background (`#f6f7f8`) with normal border; cursor: not-allowed
- **Hover (card):** Card elevates from flat border to `0 4px 16px rgba(0,0,0,0.12)` shadow; transition 200ms cubic-bezier(0.4, 0, 0.2, 1)

## 15. Motion & Easing

**Duration scale:**
- 150ms — micro interactions (button press ripple, checkbox check, tab underline shift)
- 200ms — component state changes (card hover elevation, input focus ring)
- 300ms — panel transitions (filter drawer slide, dropdown open)
- 6s — AI search gradient animation (continuous loop, `ease-in-out`)

**Easing:**
- Standard: `cubic-bezier(0.4, 0, 0.2, 1)` (Material "standard" / ease-in-out) — used for virtually all UI transitions
- Decelerate: `cubic-bezier(0, 0, 0.2, 1)` — elements entering the screen (drawer slide-in, toast appear)

**Rules:**
- All color, background-color, border-color, box-shadow, opacity, and transform transitions use the standard easing
- The AI search bar gradient (`animation: gradient-flow-dynamic 6s ease-in-out infinite`) is the only always-on animation; all other motion is user-triggered
- Respect `prefers-reduced-motion`: disable the gradient animation and reduce all durations to ≤50ms
- Skeleton shimmers use a CSS `animation: shimmer` keyframe (opacity 0.4→1→0.4), 1.5s linear infinite
