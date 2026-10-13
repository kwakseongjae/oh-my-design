---
name: Nota AI
colors:
  primary: '#3264f0'
  ink: '#101218'
  navy: '#252a39'
  white: '#ffffff'
  hairline: '#ececf1'
  surface: '#f6f6f8'
  border: '#cccccc'
  hero-link: '#e7e7e7'
  muted: '#aaaaaa'
typography:
  display-hero:
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.35
    use: Largest home headline, 70.2px line
  display-section:
    fontSize: 43.2px
    fontWeight: 400
    lineHeight: 1.38
    use: Section-level h1 headlines, 59.6px line
  eyebrow:
    fontSize: 21.36px
    fontWeight: 400
    lineHeight: 1.46
    use: Newsroom and Tech Blog labels over the home feed, 31.3px line
  list:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    use: 'Feature lists on the NetsPresso page, 28.8px line, in #101218'
  card-title:
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0.17px
    use: 'Blog card titles on home, 24.65px line, in #252a39'
  nav:
    fontSize: 16.68px
    fontWeight: 400
    lineHeight: 1.5
    use: Header folder titles (NetsPresso®, AI Solutions, Company), 25px line
  tab:
    fontSize: 16px
    fontWeight: 700
    use: Product tabs in the home hero
  small:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Default small text in cards, 18px line
  tag:
    fontSize: 11.5px
    fontWeight: 600
    use: Category tag on blog cards
rounded:
  control: 4px
  slider: 8px
  card: 10px
  tag: 999px
spacing:
  card-y: 10
  card-x: 22
  button-y: 16
  button-x: 30
  tag-y: 3
  tag-x: 9
components:
  blog-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#101218'
    border: '1px solid #ececf1'
    rounded: 10px
    size: 383px x 333px
    hover: 'border #3264f0, shadow rgba(37, 42, 57, 0.1) 0px 6px 12px, lifts 4px'
    pressed: same as hover
    states: 'probe: border, shadow and a 4px lift over 0.18s ease; focus not measured'
    use: 'Blog feed cards on home (Newsroom and Tech Blog), thumbnail on #f6f6f8, title in #252a39'
  blog-tag:
    type: badge
    backgroundColor: rgba(50, 100, 240, 0.08)
    textColor: '#3264f0'
    rounded: 999px
    padding: 3px 9px
    height: 24px
    typography: 11.5px / 600
    use: Category tag (Tech and others) at the top of each blog card
  hero-tab:
    type: tab
    textColor: rgba(255, 255, 255, 0.55)
    selected: 'fg #ffffff'
    typography: 16px / 700
    hover: fg rgba(255, 255, 255, 0.85)
    pressed: fg rgba(255, 255, 255, 0.85)
    states: 'probe on an inactive tab: label brightens from 55% to 85% white over a 0.3s ease-out colour transition; the active tab computes #ffffff; focus not measured'
    use: Product tabs in the home hero (NetsPresso®, Nota Vision Agent, Industrial Safety) over the dark hero
  hero-link:
    type: button
    textColor: '#e7e7e7'
    padding: 0px 0px 2px
    typography: 16px / 700
    hover: a 1px ::after underline grows to full width
    pressed: same as hover
    states: 'probe: the underline grows over up to 600ms; focus not measured'
    use: Learn More → under the hero tabs
  netspresso-button:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.95)
    textColor: '#101218'
    rounded: 8px
    padding: 16px 30px
    height: 50px
    states: the bundle marks a pressed frame but stores no changed value, and the button was not probed, so no hover or pressed value is declared
    use: Try NetsPresso® on the NetsPresso page, 183 x 50; the label sits in a child element the collector did not record, so no label font is declared
  lang-button:
    type: button
    textColor: '#aaaaaa'
    rounded: 4px
    padding: 6px
    typography: 15px / 400
    states: rest only; the bundle's focus frame is not used to declare a focus style
    use: KOR / ENG switch in the header of all three pages
  nav-folder:
    type: button
    textColor: '#ffffff'
    typography: 16.68px / 400
    states: 'rest only; the same titles compute #101218 over the light NetsPresso header'
    use: Header folder titles over the dark home and company heroes
  partner-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 10px
    padding: 10px 22px
    shadow: rgba(141, 141, 141, 0.15) 10px 10px 28px 0px
    use: Partner logo cards on home (40 instances)
  slider-card:
    type: card
    border: '1px solid #cccccc'
    rounded: 8px
    size: 463px x 477px
    use: Use-case slider cards on the NetsPresso page, with a rgba(0, 0, 0, 0.5) title bar in 20px white Roboto
fonts:
  roles:
    display: Roboto
    body: Roboto
---

# Design System Inspiration of Nota AI

## Overview

### Visual Theme & Atmosphere

Nota AI (노타, Nota Inc.) is a Korean on-device AI company whose company page states its mission in four words: "Democratizing the use of AI". Its milestones trace the path. It began in 2015 building an AI tool for reducing typing errors, raised seed funding, and pivoted to on-device AI; it opened a Berlin subsidiary and raised Series A; it launched the NetsPresso® model-optimization platform and signed Arm, Renesas and Deutsche Telekom; it opened Nota America in Sunnyvale and raised Series B; and in 2024–2025 it integrated NetsPresso with Qualcomm AI Hub, signed a multi-year contract with Samsung Electronics and raised Series C. The same page lists the headquarters in Daejeon and an office in Gangnam, Seoul.

The website reads as an engineering vendor's catalogue. Headlines are set in Roboto: 52px / 700 for the largest home line and 43.2px / 400 for section heads such as "Stay Ahead with the Latest AI Insights". Dark heroes carry white navigation and product tabs that brighten from 55% to 85% white under the pointer. Below them, white bands hold partner-logo cards with one soft offset shadow and a blog feed of 10px-radius cards. Text on light ground is near-black `#101218`; card titles are navy `#252a39`.

Colour is almost absent. The one chromatic colour on the three captured pages is cobalt `#3264f0`, which the site's own card stylesheet names `--blue` in a block headed "Nota 브랜드 카드 스타일". It colours the category tag on each blog card and becomes the card border on hover. Everything else is navy, near-black, white and light greys.

**Key Characteristics:**
- Roboto throughout, with size and weight carrying hierarchy
- Near-black `#101218` text and navy `#252a39` card titles on white
- Cobalt `#3264f0` as the only chromatic colour: blog-card tags and hover borders
- Dark heroes with translucent white tabs that brighten on hover
- 10px cards, 8px slider cards and buttons, 4px small controls
- One soft card shadow (`rgba(141, 141, 141, 0.15) 10px 10px 28px`) on partner cards; blog cards lift 4px on hover

### Primary tasks

- Read the Tech Blog and Newsroom for concrete results
- Evaluate NetsPresso® for a model that has to run on a device
- Explore the AI solution built for an industry (Vision Agent, Industrial Safety, Surveillance, ITS, DMS & FR)
- Check the company's milestones and offices
- Reach the team through Contact Us

### Brand Narrative

Nota's company page tells its history in four eras. 2015–2017, "Initiation and Foundation": founded to build an AI-based solution for reducing typing errors, seed funding, Nota Inc. established. 2018–2020, "Strategic Pivot to On-device AI": a Berlin subsidiary, pre-Series A and Series A. 2021–2023, "Product Development & Product Market Fit": NetsPresso® launched and integrated with NVIDIA TAO; contracts with Deutsche Telekom, Arm and Renesas; on-device solutions commercialised for ITS, DMS and FR; Nota America established in Sunnyvale; Series B. 2024–2025, "Globalization & Business Expansion": NetsPresso on Qualcomm AI Hub, a multi-year Samsung Electronics contract, collaborations with NVIDIA, Sony, Renesas, Qualcomm, MediaTek, NXP and Advantech, and Series C.

NetsPresso has its own site, whose title is "NetsPresso - Empower Your AI Chip with Optimized Model Deployment", and the company publishes an insights blog at blog.nota.ai. The restrained website fits that position: a hardware-facing optimisation vendor presenting itself through milestones, partners and technical writing rather than visual spectacle.

### Principles

1. **Democratize, don't gatekeep.** *UI implication:* plain, capability-first copy; outcomes named before features.
2. **Engineered restraint.** *UI implication:* monochrome surfaces, one small accent, one soft shadow.
3. **Evidence over spectacle.** *UI implication:* lead with partners, milestones and technical posts.

### Personas

*Personas below are fictional archetypes informed by the audiences the site addresses (embedded AI engineers, automotive and industrial buyers, ML researchers), not individual people.*

**Dohyun Park, 34, Seoul.** An embedded-systems engineer fitting a vision model onto an edge device with tight memory and latency budgets. Evaluates NetsPresso because cloud inference is not an option for his hardware.

**Lena Brandt, 41, Berlin.** A product lead at an automotive supplier exploring driver monitoring and ITS. Wants industry-specific evidence she can put into a procurement process.

**Aarav Shah, 29, Sunnyvale.** An ML researcher comparing model-optimisation toolchains who reads the Tech Blog for benchmarks and methods.

## Colors

### Primary
- **Nota Blue** (`#3264f0`): The primary colour because it is the only colour the site renders in an accent role. It is the text of the category tag on every blog card (on a `rgba(50, 100, 240, 0.08)` wash) and the border a blog card takes on hover and press. The evidence is thin: no action button on the three pages is filled with it. The one filled call to action, Try NetsPresso®, is near-white `rgba(255, 255, 255, 0.95)` with `#101218` text on a dark band, and the pages are otherwise monochrome.

### Neutral & Ink
- **Ink** (`#101218`): Body and list text on light bands; the NetsPresso button label.
- **Navy** (`#252a39`): Blog card titles and five recorded fills across the three pages (one is the Squarespace skip link).
- **White** (`#ffffff`): Card and page ground; hero navigation and the active hero tab.
- **Muted** (`#aaaaaa`): The KOR / ENG switch.
- **Hero Link** (`#e7e7e7`): Learn More → over the hero.

### Surface & Borders
- **Surface** (`#f6f6f8`): Blog card thumbnail ground.
- **Hairline** (`#ececf1`): 1px border of blog cards.
- **Border** (`#cccccc`): 1px border of the NetsPresso use-case slider cards.

## Typography

### Font Family
- **Live surface use:** Roboto (221 uses), served from `fonts.gstatic.com`. Headings, navigation, tabs, lists and body all compute Roboto.
- **Declared only:** Pretendard leads the blog-card stack (`Pretendard, Roboto, -apple-system, "system-ui", sans-serif`) but no Pretendard file was found loading (`unresolved / low`), so the cards render in Roboto. Gilroy is declared on four text elements (`unresolved / low`). MathJax faces (`MJXTEX*`) and Squarespace icon fonts are declared with 0 uses.
- **Official product use:** no Nota page opened names a typeface.

### Hierarchy

| Role | Font | Size | Weight | Line height | Use |
|------|------|------|--------|-------------|-----|
| Display hero | Roboto | 52px | 700 | 70.2px | Largest home headline |
| Display section | Roboto | 43.2px | 400 | 59.6px | Home section heads |
| Eyebrow | Roboto | 21.36px | 400 | 31.3px | Newsroom, Tech Blog |
| List | Roboto | 18px | 400 | 28.8px | NetsPresso feature lists |
| Card title | Roboto | 17px | 700 | 24.65px | Blog card titles |
| Nav | Roboto | 16.68px | 400 | 25px | Header folder titles |
| Tab | Roboto | 16px | 700 | — | Hero product tabs |
| Small | Roboto | 12px | 400 | 18px | Card small text |
| Tag | Roboto | 11.5px | 600 | — | Blog card tag |

### Principles
- **Weight contrast in one family**: bold 700 hero against regular 400 section heads.
- **Plain technical English**: headlines name outcomes ("High-performance AI on Any Device").

## Layout

### Spacing System
- Measured paddings: 3px / 9px (tag), 6px (language switch), 10px / 22px (partner card), 16px / 30px (NetsPresso button)

### Grid & Container
- Full-width dark hero with product tabs, then white bands of card grids
- Blog feed cards at about 383px wide; partner logos in a dense card grid
- The NetsPresso page stacks feature lists and a card slider

### Border Radius Scale
- 4px: small controls
- 8px: slider cards and the NetsPresso button
- 10px: blog and partner cards
- 999px: tags

### Responsive Behavior

This pass captured the desktop layout at 1440 × 900 only. No breakpoint was measured, so none is declared.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow, 1px `#ececf1` border | Blog cards at rest |
| Soft | `rgba(141, 141, 141, 0.15) 10px 10px 28px 0px` | Partner cards |
| Hover lift | `rgba(37, 42, 57, 0.1) 0px 6px 12px` and 4px rise | Blog cards on hover |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.card`: `rgba(141, 141, 141, 0.15) 10px 10px 28px 0px`
- `shadow.card-hover`: `rgba(37, 42, 57, 0.1) 0px 6px 12px 0px`

## Motion & Easing

Measured by the probe on the home page:
- Blog card: `transform, box-shadow, border-color 0.18s ease`
- Hero tab: `color 0.3s ease-out, transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)`
- Hero link: the longest transition in its scope is 600ms (the underline)

No other duration or easing was read.

## Components

### Cards

**Blog Card**
- Background: `#ffffff`
- Text: `#101218` (title `#252a39`)
- Border: 1px solid `#ececf1`
- Radius: 10px
- Hover: border `#3264f0`, shadow `rgba(37, 42, 57, 0.1) 0px 6px 12px`, lifts 4px over 0.18s
- Use: Newsroom and Tech Blog feed on home

**Partner Card**
- Background: `#ffffff`
- Radius: 10px
- Padding: 10px 22px
- Shadow: `rgba(141, 141, 141, 0.15) 10px 10px 28px 0px`
- Use: Partner logo grid on home

**Slider Card**
- Border: 1px solid `#cccccc`
- Radius: 8px
- Size: 463 × 477
- Use: NetsPresso use cases, with a half-black title bar

### Badges

**Blog Tag**
- Background: `rgba(50, 100, 240, 0.08)`
- Text: `#3264f0`
- Radius: 999px
- Padding: 3px 9px
- Font: 11.5px / 600
- Use: Category tag on blog cards

### Buttons & Links

**Try NetsPresso®**
- Background: `rgba(255, 255, 255, 0.95)`
- Text: `#101218`
- Radius: 8px
- Padding: 16px 30px
- Height: 50px
- Use: The filled call to action on the NetsPresso page

**Hero Link (`Learn More →`)**
- Text: `#e7e7e7`
- Font: 16px / 700
- Hover: a 1px underline grows to full width
- Use: Under the hero tabs

**Language Switch**
- Text: `#aaaaaa`
- Radius: 4px
- Padding: 6px
- Font: 15px / 400
- Use: KOR / ENG in the header

### Navigation

**Hero Tab**
- Text: `rgba(255, 255, 255, 0.55)`; active `#ffffff`
- Font: 16px / 700
- Hover: 85% white over 0.3s
- Use: Product tabs in the home hero

**Header Folder**
- Text: `#ffffff` over dark heroes (`#101218` on the light NetsPresso header)
- Font: 16.68px / 400
- Use: NetsPresso®, AI Solutions, Company

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of nota.ai, fixed keyboard probe on the home page, and first-party context)
**Tier 1 sources:** https://www.nota.ai/ ; https://www.nota.ai/aboutus ; https://www.nota.ai/netspresso ; https://netspresso.ai/ ; https://blog.nota.ai/insights
**Tier 2 sources:** not attempted in this pass
**Conflicts unresolved:** none

### States

| State | Treatment (measured) |
|---|---|
| **Hover (blog card)** | Border `#3264f0`, navy shadow at 10%, 4px lift, 0.18s ease |
| **Hover (hero tab)** | Label 55% → 85% white, 0.3s ease-out |
| **Hover (hero link)** | 1px underline grows to full width |
| **Active hero tab** | `#ffffff` label |

Focus, disabled, empty, loading, error and success states were not measured in this pass and are not declared.

## Do's and Don'ts

### Do
- Keep `#3264f0` for small accents: tags and hover borders
- Set everything in Roboto and use weight for contrast
- Use `#101218` for text and `#252a39` for card titles
- Keep cards at 10px radius with a hairline or one soft shadow

### Don't
- Fill large areas or buttons with blue; the site never does
- Add gradients or extra accent colours
- Mix in a second display face

## Voice & Tone

Nota AI writes confident, capability-first English for engineers and technical buyers. Headlines name an outcome and a place it runs.

| Context | Tone |
|---|---|
| Home headlines | Outcome-framed. "High-performance AI on Any Device", "Across Industries— Turning On-Device AI into Reality". |
| Feed | Plain labels. "Newsroom", "Tech Blog", "Stay Ahead with the Latest AI Insights". |
| Company | Mission-first. "Democratizing the use of AI". |
| Product page | Structured. "Customer Value", "Model Development", "Model Optimization", "Model Testing". |

**Voice samples (verbatim, 2026-09-30):**
- "High-performance AI on Any Device" — home headline
- "Stay Ahead with the Latest AI Insights" — home feed heading
- "Democratizing the use of AI" — company page
- "Try NetsPresso®" — NetsPresso page call to action

**Forbidden register**: AI hype with no deployment claim, fear-based marketing, unexplained jargon.

## Agent Prompt Guide

### Quick Color Reference
- Accent: `#3264f0`
- Text: `#101218`; card titles `#252a39`
- Surfaces: `#ffffff`, `#f6f6f8`
- Borders: `#ececf1`, `#cccccc`
- Muted: `#aaaaaa`; hero link `#e7e7e7`

### Example Component Prompts
- "Blog card: white, 1px solid #ececf1, 10px radius, #f6f6f8 thumbnail, 17px / 700 Roboto title in #252a39, a pill tag in #3264f0 on an 8% blue wash. On hover the border turns #3264f0, a 0 6px 12px navy shadow at 10% appears and the card rises 4px over 0.18s."
- "Dark hero tabs: 16px / 700 Roboto labels at 55% white, the active one pure white; hover brightens to 85% over 0.3s."

### Iteration Guide
1. One accent, used small
2. Roboto only
3. Near-black text, navy titles
4. 10px cards, soft shadow or hairline

---

## Governance

### Known Gaps

- **Contrast, `blog-tag`.** Text `#3264f0` on `#3264f014` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
