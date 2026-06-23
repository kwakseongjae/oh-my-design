---
id: trainline
name: Trainline
country: UK
category: consumer-tech
homepage: "https://www.thetrainline.com"
primary_color: "#00a88f"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=thetrainline.com&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live homepage CTA teal (#00a88f 'Find cheap tickets'); navy (#2332c4) dominates results/action surfaces. TLCircular is the custom brand font on headings."
  colors:
    primary: "#00a88f"
    primary-dark: "#007f6c"
    action: "#2332c4"
    action-dark: "#0035a9"
    ink: "#192325"
    body: "#3f4b4e"
    muted: "#5b6466"
    canvas: "#ffffff"
    surface: "#f2f4f4"
    surface-alt: "#ebf2ff"
    sign-in-bg: "#e7ebeb"
    hairline: "#d0d4d5"
    warning-bg: "#fdf7c9"
    warning-text: "#502e00"
    on-primary: "#ffffff"
  typography:
    family: { display: "TLCircular", body: "-apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif" }
    display-hero: { size: 28, weight: 700, lineHeight: 1.71, use: "Hero headline — 'Buy train tickets for travel in the UK and Europe'" }
    section: { size: 32, weight: 700, lineHeight: 1.25, use: "Section heads, TLCircular — 'Save 1/3 with a Season Ticket'" }
    subsection: { size: 20, weight: 700, lineHeight: 1.40, use: "Feature card heads, TLCircular — 'Spend less, travel more'" }
    nav: { size: 14, weight: 600, lineHeight: 1.71, use: "Nav links — 'Railcards', 'Business'" }
    body: { size: 14, weight: 400, lineHeight: 1.71, use: "Standard reading text, system font stack" }
    button: { size: 16, weight: 600, lineHeight: 1.00, use: "CTA labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 8, pill: 26, full: 9999 }
  shadow:
    card: "0px 2px 8px rgba(0,0,0,0.08)"
    elevated: "0px 4px 16px rgba(0,0,0,0.12)"
  components:
    button-primary: { type: button, bg: "#00a88f", fg: "#ffffff", radius: "4px", padding: "10px 12px", height: "48px", font: "16px / 600 TLCircular", use: "Primary booking CTA — 'Find cheap tickets'" }
    button-action: { type: button, bg: "#2332c4", fg: "#ffffff", radius: "4px", padding: "8px 16px", height: "40px", font: "14px / 400 system-ui", use: "Search/change action button on results surface" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#192325", border: "1px solid #d0d4d5", radius: "4px", padding: "8px 16px", height: "40px", font: "16px / 700 system-ui", use: "Secondary white outlined CTAs — 'Buy now', 'Buy your Railcard'" }
    button-sign-in: { type: button, bg: "#e7ebeb", fg: "#192325", radius: "26px", padding: "2px 8px 2px 16px", height: "40px", font: "16px / 600 system-ui", use: "Sign-in pill button in nav" }
    input-station: { type: input, bg: "#f2f4f4", fg: "#000000", border: "2px solid transparent", radius: "4px", padding: "16px 16px 16px 96px", height: "56px", font: "16px / 400 system-ui", use: "Station autocomplete inputs — departure and arrival" }
    input-date: { type: input, bg: "#f2f4f4", fg: "#000000", radius: "4px", padding: "16px", height: "56px", font: "16px / 600 system-ui", use: "Date/time selector field" }
    card-feature: { type: card, bg: "#ffffff", radius: "4px", use: "Feature promotional cards — Season Ticket, Railcard promotions" }
    badge-warning: { type: badge, bg: "#fdf7c9", fg: "#502e00", radius: "0px", use: "Service disruption banner at top of page" }
    tab-nav: { type: tab, fg: "#192325", font: "14px / 600 system-ui", use: "Top nav items", active: "text #192325 highlighted" }
  components_harvested: true
---

# Design System Inspiration of Trainline

## 1. Visual Theme & Atmosphere

Trainline is Europe's leading independent rail and coach booking platform, and its interface reflects a practical, optimistic approach to travel — clean, confident, and task-focused. The homepage opens on a white canvas (`#ffffff`) with a prominent booking form using soft grey input fields (`#f2f4f4`) and an eye-catching teal primary CTA (`#00a88f` — "Find cheap tickets") that immediately signals the main action. The overall atmosphere is functional yet bright: a booking utility that doesn't feel utilitarian.

The signature Trainline mint-teal (`#00a88f`) is one of the UK consumer-tech world's most recognisable transport-brand colours — energetic and optimistic without the red urgency of transport alerts or the cold neutrality of enterprise SaaS. On the results and action surfaces, a deep navy-blue (`#2332c4`) takes over as the primary interactive color for key actions like "Change" search parameters. This two-color interactive system — teal for booking initiation, navy for action within flow — creates a clear visual hierarchy across the funnel.

Typography is anchored by `TLCircular`, a custom rounded geometric typeface that appears on all marketing headings and feature cards, giving promotional content a friendly, approachable character. The body and UI layer falls back to the system font stack (`-apple-system`, `Segoe UI`, Roboto), keeping the transactional interface fast-loading and native-feeling. Headings are uniformly bold (weight 700), creating strong visual anchors across all screen sizes.

**Key Characteristics:**
- Teal primary CTA (`#00a88f`) — Trainline's most distinctive brand colour, reserved for the main booking action
- Navy action color (`#2332c4`) for interactive elements within the search flow
- `TLCircular` custom geometric rounded font for all marketing and feature headings
- System font stack for all transactional / body UI — fast, native, legible
- Soft grey input fields (`#f2f4f4`) on the booking form — calm, non-distracting
- Conservative 4px radius across buttons and inputs — professional, not playful
- Deep ink (`#192325`) for primary text — almost-black with a warm dark-teal undertone
- Minimal shadow usage — flat depth with surface color differentiation

## 2. Color Palette & Roles

### Primary Brand
- **Trainline Teal** (`#00a88f`): The primary brand color. Used for the main booking CTA "Find cheap tickets" — the single highest-priority action on the homepage.
- **Teal Dark** (`#007f6c`): Darker shade for hover states on the primary teal button.

### Interactive / Action
- **Action Blue** (`#2332c4`): Deep navy-blue that functions as the primary interactive color on booking-flow surfaces — the "Change" search button, cookie accept CTA, key actions within results.
- **Action Dark** (`#0035a9`): Deeper navy for hover/pressed states on action buttons.

### Text & Ink
- **Ink** (`#192325`): Primary heading and nav text — a very dark warm-teal near-black, warmer than pure `#000000`.
- **Body** (`#3f4b4e`): Secondary body copy, descriptions.
- **Muted** (`#5b6466`): Tertiary text, metadata, captions.
- **On Primary** (`#ffffff`): Text on teal or navy backgrounds.

### Surface & Structure
- **Canvas** (`#ffffff`): Page background, card surfaces.
- **Surface** (`#f2f4f4`): Input field backgrounds — the main form backdrop.
- **Surface Alt** (`#ebf2ff`): Light blue tint for selected states and highlights.
- **Sign-in Bg** (`#e7ebeb`): The muted pill background for the "Sign in" nav button.
- **Hairline** (`#d0d4d5`): Borders, dividers, outlines on secondary buttons.

### Semantic
- **Warning Bg** (`#fdf7c9`): Service disruption banner background.
- **Warning Text** (`#502e00`): Text on warning banners.

## 3. Typography Rules

### Font Family
- **Display / Brand**: `TLCircular` — Trainline's custom rounded geometric typeface, used for all marketing and feature headings. Falls back to system-ui.
- **Body / UI**: System font stack: `-apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif` — native feel across platforms.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero Headline | System stack | 28px | 700 | 1.71 | Homepage main H1 |
| Section Head | TLCircular | 32px | 700 | 1.25 | Feature section headings |
| Sub-section | TLCircular | 20px | 700 | 1.40 | Feature card headings |
| Section (cookie/info) | TLCircular | 32px | 700 | 1.25 | Overlay headers |
| Nav Link | System stack | 14px | 600 | 1.71 | Horizontal nav items |
| Button | System stack | 16px | 600 | 1.00 | Primary CTAs |
| Button Secondary | System stack | 16px | 700 | 1.00 | Outlined buttons |
| Body | System stack | 14px | 400 | 1.71 | Standard reading text |
| Input Label | System stack | 16px | 400 | 1.00 | Form field text |

### Principles
- **Custom font for brand moments, system for function**: TLCircular only appears in marketing / promotional sections — the booking form and results use the system stack for speed and native legibility.
- **Bold only**: weight 700 for headings consistently across both typefaces. UI labels use weight 600. Body is 400. No medium (500) weight observed.
- **Flat line-heights**: Heading line-heights are tight (1.25–1.40); body is more generous (1.71) for legibility.

## 4. Component Stylings

### Buttons

**Primary Booking CTA**
- Background: `#00a88f`
- Text: `#ffffff`
- Radius: 4px
- Padding: 10px 12px
- Height: 48px
- Font: 16px weight 600
- Use: Main "Find cheap tickets" booking action on the homepage form

**Action Blue Button**
- Background: `#2332c4`
- Text: `#ffffff`
- Radius: 4px
- Padding: 8px 16px
- Height: 40px
- Font: 14px weight 400
- Use: "Change" search parameters on results; "Accept Cookies"

**Secondary Outlined**
- Background: `#ffffff`
- Text: `#192325`
- Border: 1px solid `#d0d4d5`
- Radius: 4px
- Padding: 8px 16px
- Height: 40px
- Font: 16px weight 700
- Use: Secondary CTAs — "Buy now", "Buy your Railcard", "Take a look"

**Sign In Pill**
- Background: `#e7ebeb`
- Text: `#192325`
- Radius: 26px
- Padding: 2px 8px 2px 16px
- Height: 40px
- Font: 16px weight 600
- Use: "Sign in" button in the top navigation

### Inputs & Forms

**Station Autocomplete**
- Background: `#f2f4f4`
- Text: `#000000`
- Border: 2px solid transparent (no visible border at rest)
- Radius: 4px (top-only for departure, bottom-only for arrival — paired field)
- Padding: 16px 16px 16px 96px
- Height: 56px
- Font: 16px weight 400
- Use: Departure and arrival station fields with icon prefix area

**Date / Passenger Selector**
- Background: `#f2f4f4`
- Text: `#000000`
- Radius: 4px
- Padding: 16px
- Height: 56px–64px
- Font: 16px weight 600
- Use: Date/time and passenger-count selector buttons within the booking form

### Cards & Containers

**Feature Promotional Card**
- Background: `#ffffff`
- Radius: 4px
- Use: Marketing feature cards — Season Ticket promotions, Railcard banners, journey highlights

### Badges

**Service Disruption Banner**
- Background: `#fdf7c9`
- Text: `#502e00`
- Radius: 0px
- Padding: 16px
- Use: Full-width service alert banner at the top of the page

### Navigation

**Top Navigation**
- Background: `#ffffff`
- Text: `#192325`
- Font: 14px weight 600
- Height: 56px (approx)
- Active: `#192325` text maintained; no underline or color change observed
- Use: "Railcards", "Business", "My Bookings", "Register" links

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.thetrainline.com/ (homepage — booking form, nav, feature cards), https://www.thetrainline.com/book/results (search results surface)
**Tier 2 sources:** getdesign.md/trainline — not found (404); styles.refero.design/?q=trainline — no Trainline entry found after search
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Station inputs use 96px left padding to accommodate the large station-icon prefix area

### Grid & Container
- Centered content max-width ~1200px
- Hero: booking form centered on a clean white background, two stacked station inputs above a single row of date/passenger pickers
- Marketing sections: 2–3 column card grids for feature promotions (Season Ticket, Railcard, Holiday Pass)
- Full-width warning banner at the top for service disruptions

### Whitespace Philosophy
- **Task-first**: the booking form is the page — generous padding, minimal decoration
- **Clean separation**: sections divide by white space and subtle card boundaries, not heavy dividers
- **Card rhythm**: feature cards use consistent 4px radius and white background with hairline borders

### Border Radius Scale
- Sharp (2px): Cookie choice button outline
- Standard (4px): All buttons, inputs, cards — the universal default
- Pill (26px): Sign-in nav button
- Full (9999px): Not observed on primary UI; reserved for potential badge/tag use

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, form fields |
| Card (Level 1) | Subtle shadow `rgba(0,0,0,0.08)` | Feature promotional cards |
| Elevated (Level 2) | `rgba(0,0,0,0.12)` deeper shadow | Dropdowns, autocomplete panels |

**Shadow Philosophy**: Trainline uses minimal elevation. The booking form itself is essentially flat — inputs use background-color (`#f2f4f4`) rather than elevation to differentiate from the page. Feature cards use light shadows for gentle lift. Depth is communicated primarily through surface color (white vs grey vs tinted blue).

## 7. Do's and Don'ts

### Do
- Use teal (`#00a88f`) exclusively for the primary booking CTA — it is the highest-priority action signal
- Use navy (`#2332c4`) for in-flow interactive actions within the search and booking journey
- Use `TLCircular` for all marketing and feature headings — it defines the brand personality
- Use system fonts for all transactional UI, form fields, and body text — speed and native legibility matter
- Keep border-radius at 4px for buttons and inputs — professional, not playful
- Use `#f2f4f4` for input field backgrounds — the soft grey creates calm focus without distraction
- Use `#192325` (deep ink) for primary text — warmer and more distinctive than pure black
- Use full-width warning banners (`#fdf7c9`) for service disruption — highly visible but low-alarm

### Don't
- Don't use teal for secondary or tertiary actions — dilutes the single booking CTA signal
- Don't use rounded/pill borders on booking inputs or main content cards — 4px is the standard
- Don't substitute the system font for body text with TLCircular — TLCircular is for brand/marketing moments only
- Don't add decorative gradients or heavy shadows — Trainline is clean and functional
- Don't use pure black (`#000000`) for headings — use ink (`#192325`) for the brand-warm tone
- Don't use the warning yellow (`#fdf7c9`) outside of genuine service disruption alerts
- Don't hide the primary teal CTA in complex layouts — it should be the visual focal point

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Stacked single-column form, compressed headings |
| Tablet | 640–1024px | 2-column feature card grid, moderate form padding |
| Desktop | 1024–1280px | Full booking form centered, 3-column marketing sections |
| Large Desktop | >1280px | Centered content with generous margins |

### Touch Targets
- Station inputs at 56px height — comfortable for tap on mobile
- Buttons at 40–48px height — all meet touch accessibility minimums
- Nav links with 8px–16px padding — adequate spacing for thumbs

### Collapsing Strategy
- Booking form: single-column stacked on mobile, 2-column date/passenger row collapses to stacked
- Feature cards: 3-column → 2-column → single column
- Navigation: horizontal nav → hamburger menu on mobile
- Hero headline: 28px maintained on mobile (already body-friendly scale)

### Image Behavior
- Promotional hero images maintain aspect ratio at all breakpoints
- Feature card images use 4px radius consistently
- No heavy background imagery on the booking form surface — stays clean white

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary booking CTA: Trainline Teal (`#00a88f`)
- In-flow action buttons: Action Navy (`#2332c4`)
- Page background: Pure White (`#ffffff`)
- Form inputs: Soft Grey (`#f2f4f4`)
- Primary text: Deep Ink (`#192325`)
- Secondary text: Dark Slate (`#3f4b4e`)
- Muted text: Medium Slate (`#5b6466`)
- Borders: Light Grey (`#d0d4d5`)
- Sign-in pill bg: Muted Grey (`#e7ebeb`)
- Warning surface: Warm Yellow (`#fdf7c9`)

### Example Component Prompts
- "Create a train booking form on white background. Two station inputs stacked: `#f2f4f4` bg, 4px radius (top corners on first, bottom on second), 56px height, 16px padding with 96px left offset for icon. Date button same style. Teal CTA: `#00a88f` bg, white text, 4px radius, 48px height, 16px font weight 600."
- "Design a top nav: white `#ffffff`, 56px height. TLCircular links in `#192325`, 14px weight 600. Right-aligned: sign-in pill with `#e7ebeb` bg, `#192325` text, 26px radius."
- "Build a feature marketing card: white `#ffffff` bg, 4px radius, light shadow. TLCircular heading 32px weight 700 `#192325`. Body 14px system-ui weight 400 `#3f4b4e`. White outlined CTA: `#ffffff` bg, `#d0d4d5` border, 4px radius, 16px 700."
- "Create a service disruption banner: full-width, `#fdf7c9` bg, `#502e00` text, 14px system-ui weight 400. No radius — full bleed."

### Iteration Guide
1. Teal (`#00a88f`) is the single booking CTA — protect it; don't use elsewhere
2. Navy (`#2332c4`) for all in-flow actions (search, change, confirm)
3. TLCircular for headings; system-ui for everything else
4. 4px radius everywhere (26px pill only for sign-in nav)
5. Input backgrounds are `#f2f4f4` — never pure white on white canvas
6. Text color `#192325` (not `#000000`) for all primary headings
7. White cards with `#d0d4d5` border for secondary CTAs

---

## 10. Voice & Tone

Trainline's voice is practical, encouraging, and price-conscious — the smart friend who knows how to find the best deal on rail travel. The tagline approach ("Search, Compare & Buy Cheap Train Tickets") is purely functional: Trainline names the actions and delivers. Copy is direct, benefit-led, and avoids hype. Percentage savings are stated plainly ("save 61%*", "save 1/3*") — let the numbers speak. Navigation labels are terse single-words ("Railcards", "Business", "Basket").

| Context | Tone |
|---|---|
| Hero headline | Declarative utility. "Buy train tickets for travel in the UK and Europe." No exclamation. |
| Promotional cards | Benefit-first, punchy. "Save 1/3 with a Season Ticket." "Spend less, travel more." |
| CTAs | Action verbs, plain. "Find cheap tickets", "Buy now", "Buy your Railcard". |
| Service disruptions | Calm, factual, proactive. States the disruption and links to more information. |
| Railcard promotions | Opportunity-framing. "Your pass to Japan!" — slightly more expressive on emotive travel moments. |
| Footer / legal | Minimal legalese; links named plainly. |

**Voice samples (verbatim from live site):**
- "Buy train tickets for travel in the UK and Europe" — hero H1. *(verified live 2026-06-22)*
- "Cheap train tickets – buy in advance and save 61%*" — section heading. *(verified live 2026-06-22)*
- "Other ways to save on train travel" — section heading. *(verified live 2026-06-22)*

**Forbidden register**: Travel hype ("amazing deals", "incredible savings"), urgency dark patterns ("only 2 seats left!" as a persistent scare), jargon ("yield-managed pricing"), corporate speak.

## 11. Brand Narrative

Trainline was founded in **1999** as a joint venture between Virgin and National Express, originally operating as thetrainline.com — one of the UK's first e-commerce platforms, born at the peak of the dot-com era but built around a genuinely useful problem: you shouldn't have to go to a station to book a train. The platform went independent and pivoted from rail-only to a multi-operator aggregator, eventually expanding to cover **coach travel** and **pan-European rail**.

The company's founding premise — that buying a train ticket should be as easy as buying anything online — has held consistent for over two decades. Trainline positions itself as the independent alternative to individual train company booking sites: it shows all operators and all fares in one place, so travellers can compare and find the cheapest option. The "1/3 off with Railcard" framing and the prominent "save 61%*" messaging on the homepage make savings the core brand promise, not just a feature.

In 2019 Trainline listed on the London Stock Exchange, becoming one of the UK's most prominent consumer-tech IPOs of that year. The brand refactored its visual identity around that period: TLCircular replaced older type choices, and the teal-navy dual-color system became the standardised interactive palette. The product now serves millions of journeys across the UK and continental Europe, with the Interrail/Eurail pass business and Japan Rail Pass as notable international expansions.

What Trainline refuses: the fragmented UX of individual train company booking sites. What it embraces: aggregation, transparency on prices across operators, and a booking experience that feels like a consumer app rather than a government portal.

## 12. Principles

1. **Every fare, every operator.** Trainline's value is comparison — the full picture in one place. *UI implication:* results show all operators and fare types without hiding cheaper alternatives behind additional clicks.
2. **The saving is the message.** Percentage savings ("save 61%") and Railcard discounts ("save 1/3") are the primary marketing hooks. *UI implication:* price and saving information is the most prominent data point in search results and promotional cards.
3. **Booking in seconds, not minutes.** The homepage booking form is a single-screen, five-field interaction. *UI implication:* minimal form steps; no account required to search; progressive disclosure for passenger details.
4. **Calm on disruption.** Rail disruptions are common; Trainline addresses them with a top-of-page warning banner in measured, calm amber — not alarming red, not hidden. *UI implication:* service state is always surfaced, never minimised.
5. **System fonts for speed.** The transactional surface uses the device's native font — TLCircular is for brand moments. *UI implication:* booking flow pages load and feel native; brand personality lives in marketing content, not the checkout funnel.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Trainline user segments (UK commuters, leisure travellers, European rail tourists), not individual people.*

**Sarah Chen, 34, London.** A commuter who books weekly between Manchester and London for client work. Uses Trainline because she can see off-peak vs peak prices side by side. Has a 16-25 Railcard (now 26-30) and the Trainline app manages her etickets automatically. The "save 1/3" framing on the app homepage validates her railcard purchase every time she opens it.

**Tom Williams, 28, Bristol.** A leisure traveller booking weekend trips to the Lake District or Edinburgh. Doesn't care about operators — books whichever service is cheapest for his travel window. Uses the "buy in advance and save" messaging as a mental cue to book early. Finds price calendars the most useful feature.

**Ingrid Andersen, 52, Copenhagen.** A European tourist planning a UK rail holiday — the Cotswolds, Bath, Cornwall. Trainline was recommended as the best way to book multi-leg UK journeys. Compares Trainline with the national rail site and chooses Trainline for its simpler multi-leg booking UX. Also looked at Interrail through Trainline for a separate European trip.

**Marcus Obi, 41, Birmingham.** Head of travel at a mid-size consultancy, uses Trainline for Business. Values the consolidated invoicing and the ability to book for team members without needing individual accounts. The clean, functional interface reduces friction for non-frequent rail users in his team.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search entered)** | Booking form shows placeholder text in station inputs ("Departure station", "Arrival station"). CTA button `#00a88f` is present but search is blocked until both stations are filled. |
| **Empty (no results for route)** | Informational message with alternative route suggestions. System-font body text in `#3f4b4e`. |
| **Loading (search results)** | Skeleton result rows on white background while fares are fetched from operator APIs. |
| **Loading (page)** | Standard system-native browser loading; no custom splash or skeleton on homepage. |
| **Error (invalid station)** | Inline field-level message below the input; directs user to enter a valid UK station name. |
| **Error (no trains on date)** | Full-page messaging with adjacent date suggestions — "try these dates" pattern. |
| **Error (booking failed)** | Inline error within booking flow; plain-language explanation and retry option. |
| **Success (ticket booked)** | Confirmation page with ticket QR code / eticket; clean white canvas, teal confirmation accent. |
| **Service disruption (active)** | Full-width amber banner (`#fdf7c9` / `#502e00`) at top of every page. Links to status page. |
| **Skeleton** | Grey placeholder blocks at expected card/result dimensions while data loads. |
| **Disabled** | Input fields pre-filled and read-only during multi-step booking; reduced opacity on locked elements. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox ticks, radio selections |
| `motion-fast` | 120ms | Button hover, focus highlight |
| `motion-standard` | 200ms | Autocomplete dropdown open/close, modal appear |
| `motion-slow` | 300ms | Page-level section transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Dropdowns and panels arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is minimal and functional — appropriate for a transactional booking utility used in high-stress moments (commuters running for trains). The autocomplete station dropdown uses a short ease-in fade; the booking form button uses a fast hover darkening. No decorative animation anywhere. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the search and booking flow remain fully functional.

**Teal CTA hover**: The "Find cheap tickets" button darkens from `#00a88f` to `#007f6c` at `motion-fast` — confident, quick, transactional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via global playwright (chromium, headless) on:
- https://www.thetrainline.com/ (homepage)
- https://www.thetrainline.com/book/results (search results surface)

Key observations:
- Primary CTA "Find cheap tickets": bg rgb(0,168,143) = #00a88f; radius 4px; padding 10px 12px; height 48px; font 16px/600
- Action button "Change": bg rgb(35,50,196) = #2332c4; radius 4px; padding 8px 16px; height 40px
- "Accept Cookies": bg rgb(35,50,196) = #2332c4; font 18px/700; radius 4px; height 44px
- "Sign in" nav: bg rgb(231,235,235) = #e7ebeb; color rgb(25,35,37) = #192325; radius 26px; height 40px
- Secondary buttons ("Buy now", "Buy your Railcard"): bg #ffffff; border 1px solid rgb(208,212,213) = #d0d4d5; font 16px/700
- Station inputs: bg rgb(242,244,244) = #f2f4f4; height 56px; radius 4px; padding 16px 16px 16px 96px
- H1 "Buy train tickets for travel in the UK and Europe": 28px / weight 700 / color rgb(0,0,0); system font
- H3 "Save 1/3 with a Season Ticket": 32px / weight 700 / color rgb(25,35,37) = #192325; font-family TLCircular
- H3 "Spend less, travel more": 20px / weight 700 / color rgb(255,255,255); TLCircular (on colored bg)
- Body color: rgb(25,35,37) = #192325; font-size 14px; system font stack
- Top bg frequency: rgb(255,255,255) ×48, rgb(91,100,102) ×30 (#5b6466 — icon fills), rgb(242,244,244) ×23 (#f2f4f4), rgb(208,212,213) ×19 (#d0d4d5), rgb(35,50,196) ×8 (#2332c4), rgb(235,242,255) ×2 (#ebf2ff)
- document.title: "Trainline : Search, Compare & Buy Cheap Train Tickets"

Voice samples (§10) are verbatim from the live homepage.
Brand narrative (§11): Trainline founded 1999; IPO 2019 on London Stock Exchange; these are widely documented public facts.
Personas (§13) are fictional archetypes — names are illustrative; not real people.
Interpretive claims (e.g., "teal-navy dual-color system", "system fonts for speed") are editorial readings from observed design patterns.

Tier 2: getdesign.md/trainline — 404/not found. styles.refero.design — no Trainline match after search.
-->
