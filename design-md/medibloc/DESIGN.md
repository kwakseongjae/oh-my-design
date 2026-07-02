---
id: medibloc
name: MediBloc (Dr.Palette)
display_name_kr: 메디블록 (닥터팔레트)
country: KR
category: healthcare
homepage: "https://medibloc.com/"
primary_color: "#0066ff"
logo:
  type: favicon
  slug: "https://i0.wp.com/medibloc.com/wp-content/uploads/2021/07/cropped-%EB%A6%AC%EB%AF%B8%ED%8B%B0%EB%93%9C-%ED%8C%8C%EB%B9%84%EC%BD%98.png?fit=192%2C192&ssl=1"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live corporate CTA/link blue (#0066ff on medibloc.com); the Dr.Palette/Weavr blog uses a near-identical link blue (#0b7aff). Headings near-black (#1c1e1f), body grey (#333333). Magenta (#cc3366) is a sparse inline-link accent. Pretendard is the system font across both surfaces."
  colors:
    primary: "#0066ff"
    primary-alt: "#007aff"
    primary-deep: "#0045ff"
    blue-link: "#0b7aff"
    surface-blue: "#ebf1ff"
    accent: "#cc3366"
    ink: "#1c1e1f"
    body: "#333333"
    body-soft: "#434343"
    muted: "#767676"
    muted-alt: "#999999"
    faint: "#9d9d9d"
    canvas: "#ffffff"
    surface-dark: "#131313"
    black: "#000000"
  typography:
    family: { sans: "Pretendard", alt: "Roboto" }
    display-hero: { size: 60, weight: 700, lineHeight: 1.2, use: "Hero headline, Pretendard Bold cut" }
    headline:     { size: 41, weight: 600, use: "Section headline (Panacea), Pretendard Medium" }
    title:        { size: 36, weight: 500, use: "Article / page H1, Pretendard" }
    subhead:      { size: 26, weight: 600, use: "Product card title (MediBloc Wallet), Pretendard SemiBold" }
    lead:         { size: 22, weight: 400, lineHeight: 1.3, use: "Article H3 lead, Pretendard" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, Pretendard" }
    body-sm:      { size: 15, weight: 400, use: "Secondary body / outlined-button label" }
    label:        { size: 14, weight: 500, use: "Button / nav label, Pretendard Medium" }
    caption:      { size: 13, weight: 400, use: "Fine print, meta, timestamps" }
  spacing: { xs: 4, sm: 7, base: 12, md: 14, lg: 24, xl: 25, xxl: 50 }
  rounded: { sm: 3, md: 4, lg: 8, pill: 28, full: 9999 }
  shadow:
    card: "0 10px 20px rgba(0,0,0,0.07)"
    none: "none"
  components:
    button-outline: { type: button, bg: "#ffffff", fg: "#0066ff", border: "2px solid #0066ff", radius: "4px", padding: "0px 50px", height: "62px", font: "15px / 400 Pretendard", shadow: "0 10px 20px rgba(0,0,0,0.07)", use: "Outlined primary action — Validator Guide, Apply for Token swap" }
    button-pill: { type: button, bg: "#131313", fg: "#ffffff", radius: "28px", padding: "14px", height: "48px", shadow: "0 10px 20px rgba(0,0,0,0.07)", font: "14px / 500 Pretendard", use: "Rounded ghost Visit pill on dark hero" }
    button-text: { type: button, fg: "#0066ff", radius: "3px", padding: "12px 24px", height: "39px", font: "15px / 500 Pretendard", use: "Text-link button — See more company news" }
    card-feature: { type: card, bg: "#ffffff", fg: "#333333", radius: "8px", shadow: "0 10px 20px rgba(0,0,0,0.07)", use: "Product / feature card — MediBloc Wallet, Explorer" }
    nav-link: { type: tab, fg: "#ffffff", active: "text #0066ff", font: "14px / 500 Roboto", use: "Top nav / social links on dark header (Blog, Telegram, Github)" }
    badge-info: { type: badge, bg: "#ebf1ff", fg: "#0066ff", radius: "4px", padding: "4px 7px", font: "14px / 500 Pretendard", use: "Light-blue info tag / highlight pill" }
  components_harvested: true
---

# Design System Inspiration of MediBloc (Dr.Palette)

## 1. Visual Theme & Atmosphere

MediBloc (메디블록) is the Korean healthcare-data company behind Dr.Palette (닥터팔레트), a web-based cloud EMR for clinics, and the Panacea blockchain that lets patients own their own medical records. Its corporate surface reads as a confident, engineering-led health-tech brand rather than a clinical hospital site: a crisp white canvas (`#ffffff`) alternates with immersive near-black sections (`#131313` over pure `#000000`), and a single electric blue (`#0066ff`) does all the interactive work — outlined CTAs, links, key metrics, and the "Panacea" wordmark. The tone is trustworthy and technical, the blue signalling "action" the way a well-behaved SaaS product does, never shouting.

The typographic voice is unmistakably Korean-premium: everything is set in **Pretendard**, the de-facto hangul product font, loaded as named weight cuts (Pretendard-Bold, -SemiBold, -Medium). The hero runs a 60px Pretendard Bold headline ("Own your health data. It's rightfully yours."), section headlines land at 41px, product-card titles at 26px SemiBold, and body copy settles at a quiet 16px / 1.5 in grey `#333333`. Only the social/utility nav borrows `Roboto`. Headings on the Dr.Palette/Weavr blog use a near-black `#1c1e1f` with grey `#434343` body — the same restrained ink-on-white hierarchy, confirming a consistent system across the two brand-owned surfaces.

What distinguishes MediBloc from typical fintech-adjacent sites is its comfort with the dark hero. Rather than a solid-blue button system, the flagship surface leans on **outlined** blue buttons (2px `#0066ff` border, transparent fill, 4px radius) and rounded white "Visit" pills (28px radius) floating on dark, each carrying a soft ambient shadow (`0 10px 20px rgba(0,0,0,0.07)`). Depth is minimal and atmospheric — the elevation comes from the dark/light section cadence, not heavy card stacks.

**Key Characteristics:**
- Pretendard across the system (Bold/SemiBold/Medium cuts), with `Roboto` only on utility/social nav
- A single electric blue (`#0066ff`) as the sole interactive/action color — CTAs, links, "Panacea" wordmark
- Outlined-button system (2px `#0066ff` border, transparent fill, 4px radius) rather than solid fills
- Rounded 28px "Visit" pills with soft ambient shadow on the dark hero
- Dark immersive sections (`#131313` / `#000000`) alternating with a white (`#ffffff`) canvas
- Near-black headings (`#1c1e1f`) over a cool grey text ladder (`#333333` → `#767676` → `#999999` → `#9d9d9d`)
- Sparse magenta (`#cc3366`) reserved for tiny inline text links — a warm counter-accent to the blue
- Minimal, atmospheric depth: one ambient shadow, no heavy elevation

## 2. Color Palette & Roles

### Primary
- **MediBloc Blue** (`#0066ff`): The primary brand and action color. Outlined-CTA borders and text, links, the "Panacea" wordmark, and key metric buttons. The system's single "do this" color.
- **Blue Alt** (`#007aff`): A secondary blue that appears on a handful of interactive accents and icons.
- **Blue Deep** (`#0045ff`): A deeper blue variant used sparingly for pressed/emphasis blue states.
- **Blog Link Blue** (`#0b7aff`): The near-identical link blue used on the Dr.Palette/Weavr blog for category labels and inline links — confirms blue as the cross-surface action color.

### Accent
- **Magenta** (`#cc3366`): A warm pink-red reserved for small inline text links (e.g. "Visit" text links) — a rare, deliberate counter-accent to the dominant blue.
- **Surface Blue** (`#ebf1ff`): A very light blue tint used as a hover/fill base for text buttons and info tags.

### Text Hierarchy
- **Ink** (`#1c1e1f`): Near-black heading color on the blog/content surfaces — warmer and softer than pure black.
- **Body** (`#333333`): The corporate body text color — the default reading grey.
- **Body Soft** (`#434343`): The blog body text color — a slightly warmer grey for long-form reading.
- **Muted** (`#767676`): Muted nav and utility text.
- **Muted Alt** (`#999999`): Secondary/tertiary grey for supporting labels.
- **Faint** (`#9d9d9d`): Lowest-emphasis meta — timestamps, dates, fine print.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white cards, and text on dark/blue.
- **Surface Dark** (`#131313`): The near-black background of the immersive hero and dark sections.
- **Pure Black** (`#000000`): The deepest background layer beneath the dark sections.

## 3. Typography Rules

### Font Family
- **System**: `Pretendard` (loaded as named cuts — Pretendard-Bold, Pretendard-SemiBold, Pretendard-Medium) — used for all headlines, body, cards, and primary UI labels.
- **Utility**: `Roboto` — used only for the compact social/utility nav links (Blog, Telegram, Twitter, Github).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard | 60px | 700 (Bold cut) | 1.2 | Hero headline, white on dark |
| Section Headline | Pretendard | 41px | 600 (Medium cut) | tight | "Panacea", blue |
| Article / Page H1 | Pretendard | 36px | 500 | tight | Blog article title |
| Product Card Title | Pretendard | 26px | 600 (SemiBold cut) | tight | "MediBloc Wallet", "MediBloc Explorer" |
| Article Lead H3 | Pretendard | 22px | 400 | 1.3 | Blog section lead |
| Body | Pretendard | 16px | 400 | 1.5 | Standard reading text |
| Body Small | Pretendard | 15px | 400 | 1.6 | Secondary body, outlined-button labels |
| Label | Pretendard | 14px | 500 | 1.5 | Button / nav labels |
| Caption | Pretendard | 13px | 400 | normal | Fine print, meta, timestamps |

### Principles
- **One font, many cuts**: Pretendard carries the whole system; hierarchy comes from named weight cuts (Bold → SemiBold → Medium → Regular), not from font-family switches.
- **Bold display, quiet body**: 60px Bold headlines persuade; 16px / 1.5 Regular body informs. The weight contrast is the primary hierarchy signal.
- **Hangul-first sizing**: Body sits at a generous 16px with 1.5 line-height for dense hangul legibility.
- **Roboto stays in its lane**: `Roboto` appears only on the utility/social nav; it never touches display or body.

## 4. Component Stylings

### Buttons

**Outlined Action (Primary)**
- Background: `#ffffff`
- Text: `#0066ff`
- Border: 2px solid `#0066ff`
- Radius: 4px
- Padding: 0px 50px
- Height: 62px
- Font: 15px Pretendard weight 400
- Shadow: `0 10px 20px rgba(0,0,0,0.07)`
- Use: Outlined primary action — "Validator Guide", "Delegator Guide", "Apply for Token swap"

**Visit Pill (Ghost on Dark)**
- Background: `#131313`
- Text: `#ffffff`
- Radius: 28px
- Padding: 14px
- Height: 48px
- Font: 14px Pretendard weight 500
- Shadow: `0 10px 20px rgba(0,0,0,0.07)`
- Use: Rounded "Visit" pill on the dark hero product cards

**Text Link Button**
- Text: `#0066ff`
- Radius: 3px
- Padding: 12px 24px
- Height: 39px
- Font: 15px Pretendard weight 500
- Use: Inline text-link button — "See more company news"

### Cards & Containers

**Feature / Product Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 8px
- Shadow: `0 10px 20px rgba(0,0,0,0.07)`
- Use: Product / feature card (MediBloc Wallet, MediBloc Explorer)

### Badges

**Light-Blue Info Tag**
- Background: `#ebf1ff`
- Text: `#0066ff`
- Radius: 4px
- Padding: 4px 7px
- Font: 14px Pretendard weight 500
- Use: Light-blue info tag / highlight pill

### Navigation
- Background: `#131313` (dark header)
- Text: `#ffffff`
- Font: 14px Roboto weight 500
- Active: blue `#0066ff` text on active item
- Use: Top nav / social links (Blog, Telegram, Twitter, Github)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://medibloc.com/ , https://blog.medibloc.org/
**Tier 2 sources:** getdesign.md/medibloc (0 DESIGN.md files — not listed); styles.refero.design/?q=medibloc (no MediBloc-specific style — search returned only the default catalog)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, with a loose scale measured from live padding
- Scale: 4px, 7px, 12px, 14px, 24px, 25px, 50px
- Notable: outlined buttons carry a generous 50px horizontal padding, giving them a wide, confident hit area; small tags use 4px 7px

### Grid & Container
- Centered single-column hero anchored by the 60px Pretendard Bold headline over a dark background
- Product entries (MediBloc Wallet, MediBloc Explorer, Panacea) presented as cards with a "Visit" pill each
- Full-width dark sections (`#131313`) alternate with white (`#ffffff`) content bands for a light/dark cadence
- Blog/content surfaces use a comfortable single reading column with near-black headings

### Whitespace Philosophy
- **Section cadence over card stacks**: separation comes from alternating dark (`#131313`) and white (`#ffffff`) full-width bands, not from heavy borders or stacked shadows.
- **Airy hero, dense stats**: the hero breathes, while token/metric buttons pack tightly into rows.
- **Blue as the wayfinding cue**: because `#0066ff` is the only saturated action color, the eye always knows where the next step is.

### Border Radius Scale
- Extra-small (3px): text-link buttons
- Small (4px): outlined buttons, info tags — the workhorse
- Medium (8px): feature / product cards
- Pill (28px): rounded "Visit" buttons
- Full (9999px): fully-round elements where used

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Section (Level 1) | Dark `#131313` band over `#000000` | Immersive hero / dark content sections |
| Ambient (Level 2) | `0 10px 20px rgba(0,0,0,0.07)` | Buttons, "Visit" pills, feature cards |

**Shadow Philosophy**: MediBloc's depth is intentionally minimal and atmospheric. A single soft ambient shadow (`0 10px 20px rgba(0,0,0,0.07)`) lifts buttons, pills, and cards a hair off the surface; there is no multi-layer elevation system. The real sense of depth comes from the alternating dark (`#131313` / `#000000`) and white (`#ffffff`) full-width bands, which frame content cinematically without stacking cards. When emphasis is needed, the system reaches for the blue (`#0066ff`) or the dark section, not heavier shadow.

## 7. Do's and Don'ts

### Do
- Set the whole system in Pretendard, using named weight cuts (Bold / SemiBold / Medium) for hierarchy
- Reserve blue (`#0066ff`) for interactive elements — CTAs, links, key metrics — keep it the single action color
- Use the outlined button (2px `#0066ff` border, transparent/white fill, 4px radius) as the primary action style
- Use near-black (`#1c1e1f`) or grey (`#333333`) for text instead of pure black on white
- Alternate dark (`#131313`) and white (`#ffffff`) full-width bands for section rhythm
- Apply the single ambient shadow (`0 10px 20px rgba(0,0,0,0.07)`) for gentle lift on buttons and cards
- Keep magenta (`#cc3366`) to tiny inline text links only — a rare counter-accent

### Don't
- Spread blue (`#0066ff`) across decorative elements — it dilutes the single-action signal
- Introduce a second saturated brand color beyond the sparse magenta accent
- Use heavy, multi-layer shadows or stacked cards for depth — depth is section-based and minimal
- Set headlines in a light weight — display is always the Pretendard Bold/SemiBold cut
- Use `Roboto` for display or body — it is a utility/social-nav font only
- Use pure black (`#000000`) as body text — reserve it for the deepest section backgrounds
- Force a solid-blue-fill button where the outlined blue button is the brand's real primary

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, product cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up product cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Outlined buttons at 62px height with 50px horizontal padding — a large, confident target
- "Visit" pills at 48px height, fully rounded for an unmistakable tap area
- Nav/social links spaced within the dark header

### Collapsing Strategy
- Hero: 60px Pretendard headline scales down on mobile, Bold cut maintained
- Product cards (Wallet, Explorer, Panacea): multi-column → stacked single column
- Dark/white alternating sections maintain full-width treatment, reduce internal padding
- Blog/content column narrows while keeping the near-black heading hierarchy

### Image Behavior
- Product illustrations and screenshots carry the soft ambient shadow at larger sizes
- Cards maintain 8px radius across breakpoints
- The dark hero maintains its `#131313` framing at all widths

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / interactive: MediBloc Blue (`#0066ff`)
- Secondary blue: Blue Alt (`#007aff`)
- Blog link blue: (`#0b7aff`)
- Light-blue tint: Surface Blue (`#ebf1ff`)
- Accent (tiny links): Magenta (`#cc3366`)
- Heading: Ink (`#1c1e1f`)
- Body: (`#333333`) / blog body (`#434343`)
- Muted: (`#767676`) / secondary grey (`#999999`) / faint meta (`#9d9d9d`)
- Canvas: Pure White (`#ffffff`)
- Dark section: (`#131313`) over Pure Black (`#000000`)

### Example Component Prompts
- "Create a dark hero: `#131313` background, 60px Pretendard Bold white headline. Below it, product cards each with a rounded 'Visit' pill: `#131313` fill (ghost on dark), white text, 28px radius, 14px padding, 14px Pretendard, soft shadow `0 10px 20px rgba(0,0,0,0.07)`."
- "Design an outlined primary button: white `#ffffff` fill, `#0066ff` text, 2px solid `#0066ff` border, 4px radius, 0px 50px padding, 62px height, 15px Pretendard."
- "Build a feature card: white `#ffffff` background, 8px radius, `0 10px 20px rgba(0,0,0,0.07)` shadow. Title 26px Pretendard SemiBold `#1c1e1f`, body 16px Pretendard `#333333`."
- "Create a light-blue info tag: `#ebf1ff` background, `#0066ff` text, 4px radius, 4px 7px padding, 14px Pretendard."

### Iteration Guide
1. Pretendard everywhere; hierarchy from Bold/SemiBold/Medium cuts, not family switches
2. Blue (`#0066ff`) is the single action color — don't spread it
3. Primary button is outlined (2px `#0066ff`, 4px radius), not solid fill
4. Depth is section-based: alternate `#131313` dark and `#ffffff` white bands; one ambient shadow only
5. Text is `#1c1e1f`/`#333333`, never pure black on white
6. Magenta (`#cc3366`) is a rare tiny-link accent only
7. `Roboto` is utility/social nav only

---

## 10. Voice & Tone

MediBloc's voice is **confident, empowering, and rights-forward** — it frames health data as something that belongs to the patient, not the institution. The corporate hero line "Own your health data. It's rightfully yours." sets the register: declarative, ownership-framed, a little activist, never clinical or fear-based. On the Dr.Palette product side the tone shifts to **practical and reassuring** for clinicians ("모두가 그리는 클라우드 EMR" — "a cloud EMR everyone draws"), emphasizing speed, mobility, and ease over jargon. Both voices treat the reader — patient or doctor — as a capable owner of their own workflow and data.

| Context | Tone |
|---|---|
| Corporate hero | Declarative, ownership-framed. "Own your health data. It's rightfully yours." Confident, not hype. |
| Product (Dr.Palette) | Practical, reassuring, clinician-first. Emphasizes speed and mobility of the cloud EMR. |
| Feature descriptions | Benefit-first, plainly stated. Explains what the product removes (servers, downloads, upgrades). |
| Blockchain / Panacea | Technical but accessible. Metrics ("Circulating Supply") stated plainly, guides linked. |
| Notices / blog | Announcement register — dated, factual, forward-looking. |

**Voice samples (verbatim from live surfaces):**
- "Own your health data. It's rightfully yours." — corporate hero headline, medibloc.com. *(verified live 2026-07-02)*
- "모두가 그리는 클라우드EMR, 닥터팔레트 2.0 출시" — Dr.Palette 2.0 launch notice, blog.medibloc.org. *(verified live 2026-07-02)*
- "닥터팔레트는 웹 기반으로 서버를 별도로 구축하지 않아도 되며, 다운로드, 업그레이드를 위해 시간을 낭비하지 않아도 됩니다." — Dr.Palette feature copy (no servers, no downloads). *(verified live 2026-07-02)*

**Forbidden register**: fear-based health messaging, opaque medical/blockchain jargon left unexplained, aggressive sales urgency, exclamation-heavy hype.

## 11. Brand Narrative

MediBloc (메디블록) was founded in **2017** by **고우균 (Allen Ko)** and **이은솔 (Eunsol Lee)** — a software engineer and a practicing radiologist — to solve a problem both had lived: a patient's medical records are fragmented across every hospital they have ever visited, owned by the institutions rather than the person. MediBloc's founding premise reframes that relationship: your health data is *"rightfully yours."* The company built the **Panacea** blockchain as the backbone for patient-owned records and the MED token economy around it.

That mission produced two consumer/clinical products. **Medipass (메디패스)** lets patients gather and carry their own records, prescriptions, and insurance claims on their phone. **Dr.Palette (닥터팔레트)** is a web-based **cloud EMR** for clinics — no on-premise server to build, no downloads or upgrade downtime, with a mobile companion that syncs to the chart in real time so a clinician can review or photograph a patient's condition from anywhere. In 2021 Dr.Palette 2.0 shipped with a stated focus on "speed, design, and usability." (The consumer brand has since been consolidated under the **Weavr (위버케어)** umbrella, which is why the official blog now resolves to weavrlog.care.)

What MediBloc refuses, visible in its design: the heavy, intimidating chrome and institutional blue-and-grey of legacy hospital software, and the fear-based framing of much health marketing. What it embraces: a clean white-and-blue system, a single confident action color, near-black-on-white typography set entirely in Pretendard, and copy that puts ownership and ease in the reader's hands.

## 12. Principles

1. **The data is the patient's.** Ownership is the founding idea. *UI implication:* frame health data around the person ("rightfully yours"); the primary CTA is always the user's next step, marked by the single blue.
2. **One action, one color.** Blue (`#0066ff`) means "do this." *UI implication:* reserve saturated blue exclusively for interactive elements so the next step is never ambiguous.
3. **Remove the friction, not the trust.** Dr.Palette's pitch is "no servers, no downloads, no upgrades." *UI implication:* surfaces should feel fast and light — minimal depth, generous spacing, clear labels — never heavy or gated.
4. **Clean over clinical.** Reject legacy-hospital chrome. *UI implication:* white canvas, near-black text, Pretendard throughout; alternate dark and white bands for rhythm instead of stacked cards.
5. **Consistent across surfaces.** Corporate, EMR, and blog share one type and color language. *UI implication:* Pretendard + blue + near-black hierarchy carry from medibloc.com to the Dr.Palette blog unchanged.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable MediBloc / Dr.Palette user segments (Korean clinic operators, patients managing their own records, blockchain participants), not individual people.*

**김민재, 44, 서울.** A private-clinic director evaluating a cloud EMR to escape an aging on-premise system. Values that Dr.Palette needs no server build and updates itself; wants to review charts from his phone between rooms. Chose it for speed and the mobile companion.

**박수현, 31, 경기.** A patient who has bounced between hospitals and is tired of re-explaining her history. Uses Medipass to carry her own records and claims. Trusts MediBloc because the brand's whole premise is that the data is hers, not the hospital's.

**이도현, 29, 대전.** A developer and MED-token holder who follows the Panacea chain. Reads the validator and delegator guides, checks circulating supply, and appreciates that the technical metrics are stated plainly with guides linked rather than buried.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no records yet)** | White canvas. Single Ink (`#1c1e1f`) line at body size explaining nothing is stored yet, with one blue (`#0066ff`) CTA to connect a hospital or add a record. No clutter. |
| **Empty (chart list, none)** | Muted (`#767676`) single line: nothing here yet, plus a path to add. Calm and honest. |
| **Loading (record / chart fetch)** | Skeleton blocks at final dimensions on white, 8px radius. Flat pulse consistent with the minimal-depth system; no heavy shimmer. |
| **Loading (blockchain metric)** | Inline progress near the metric button; previous value stays visible until refreshed. |
| **Error (sync failed)** | Inline message in Ink (`#1c1e1f`) with a plain-language explanation and a retry — states what to do next, never a bare "오류". |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (record saved / claim submitted)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | White blocks at final dimensions, 8px radius, flat pulse. |
| **Disabled** | Faint (`#9d9d9d`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, dark-section crossfade |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, pills |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, consistent with the clean, minimal-depth aesthetic. Buttons and "Visit" pills respond to press with a subtle opacity/scale shift; content and product cards fade-in from below at `motion-standard / ease-enter`. Transitioning into a dark (`#131313`) section uses a `motion-slow` background crossfade — cinematic once, not fidgety. No bounce or spring: a health-data product signals steadiness and trust. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://medibloc.com/ (corporate, headless) — hero H2 "Own your health data. It's rightfully yours."
  Pretendard-Bold 60px; "Panacea" H2 41px/600 Pretendard-Medium color rgb(0,102,255) #0066ff;
  product card H3 "MediBloc Wallet"/"MediBloc Explorer" 26px Pretendard-SemiBold; outlined buttons
  ("Validator Guide","Delegator Guide","Apply for Token swap") 2px solid rgb(0,102,255) #0066ff,
  4px radius, transparent fill, blue text; "Visit" pill radius 28px white text shadow
  rgba(0,0,0,0.07) 0 10px 20px; "See more company news" text button #0066ff 3px radius;
  body rgb(51,51,51) #333333; magenta links rgb(204,51,102) #cc3366; dark bg rgb(19,19,19) #131313
  over rgb(0,0,0) #000000; muted rgb(153,153,153) #999999.
- https://blog.medibloc.org/timeline/products/drpalette/17876 (Dr.Palette/Weavr blog, headed Chrome
  channel to pass the wp.com browser challenge; resolves to weavrlog.care) — Pretendard body
  rgb(67,67,67) #434343; headings rgb(28,30,31) #1c1e1f; blue category/link rgb(11,122,255) #0b7aff;
  muted nav rgb(118,118,118) #767676; date meta rgb(157,157,157) #9d9d9d.

Token-level claims (§1-9) are sourced from these live inspections. See web/references/medibloc/.verification.md
for the full raw-sample proof block and the Tier-2 conflict matrix.

Voice samples (§10): the English hero line is verbatim from medibloc.com; the Dr.Palette Korean lines
are verbatim from the blog post body captured live.

Brand narrative (§11): MediBloc founded 2017 by 고우균 (Allen Ko) and 이은솔 (Eunsol Lee); Panacea
blockchain, MED token, Medipass, and Dr.Palette cloud EMR are the company's documented products;
Dr.Palette 2.0 launched 2021 (per the captured launch notice). The consumer brand's consolidation under
Weavr (위버케어) is inferred from the live redirect blog.medibloc.org → weavrlog.care observed this turn.
These founding details beyond the captured pages are widely documented public facts, not quoted from a
verified MediBloc statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable MediBloc/Dr.Palette user
segments (clinic operators, patients, token holders). Names are illustrative; they do not refer to
real people.

Interpretive claims (e.g., "one action, one color", "clean over clinical as a rejection of legacy
hospital chrome") are editorial readings connecting MediBloc's observed design to its positioning,
not directly sourced MediBloc statements.
-->
