---
omd: 0.1
brand: Airbnb
---

# Design System Inspiration of Airbnb

## 1. Visual Theme & Atmosphere

Airbnb's website is a warm, photography-forward marketplace that feels like flipping through a travel magazine where every page invites you to book. The design operates on a foundation of pure white (`#ffffff`) with the iconic Rausch Red (`#ff385c`) — named after Airbnb's first street address — serving as the singular brand accent. The result is a clean, airy canvas where listing photography, category icons, and the red CTA button are the only sources of color.

The typography uses Airbnb Cereal VF — a custom variable font that's warm and approachable, with rounded terminals that echo the brand's "belong anywhere" philosophy. The font operates in a tight weight range: 500 (medium) for most UI, 600 (semibold) for emphasis, and 700 (bold) for primary headings. Slight negative letter-spacing (-0.18px to -0.44px) on headings creates a cozy, intimate reading experience rather than the compressed efficiency of tech companies.

What distinguishes Airbnb is its palette-based token system (`--palette-*`) and multi-layered shadow approach. The primary card shadow uses a three-layer stack (`rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px`) that creates a subtle, warm lift. Combined with generous border-radius (8px–32px), circular navigation controls (50%), and a category pill bar with horizontal scrolling, the interface feels tactile and inviting — designed for browsing, not commanding.

**Key Characteristics:**
- Pure white canvas with Rausch Red (`#ff385c`) as singular brand accent
- Airbnb Cereal VF — custom variable font with warm, rounded terminals
- Palette-based token system (`--palette-*`) for systematic color management
- Three-layer card shadows: border ring + soft blur + stronger blur
- Generous border-radius: 8px buttons, 14px badges, 20px cards, 32px large elements
- Circular navigation controls (50% radius)
- Photography-first listing cards — images are the hero content
- Near-black text (`#222222`) — warm, not cold
- Luxe Purple (`#460479`) and Plus Magenta (`#92174d`) for premium tiers

## 2. Color Palette & Roles

### Primary Brand
- **Rausch Red** (`#ff385c`): `--palette-bg-primary-core`, primary CTA, brand accent, active states
- **Deep Rausch** (`#e00b41`): `--palette-bg-tertiary-core`, pressed/dark variant of brand red
- **Error Red** (`#c13515`): `--palette-text-primary-error`, error text on light
- **Error Dark** (`#b32505`): `--palette-text-secondary-error-hover`, error hover

### Premium Tiers
- **Luxe Purple** (`#460479`): `--palette-bg-primary-luxe`, Airbnb Luxe tier branding
- **Plus Magenta** (`#92174d`): `--palette-bg-primary-plus`, Airbnb Plus tier branding

### Text Scale
- **Near Black** (`#222222`): `--palette-text-primary`, primary text — warm, not cold
- **Focused Gray** (`#3f3f3f`): `--palette-text-focused`, focused state text
- **Secondary Gray** (`#6a6a6a`): Secondary text, descriptions
- **Disabled** (`rgba(0,0,0,0.24)`): `--palette-text-material-disabled`, disabled state
- **Link Disabled** (`#929292`): `--palette-text-link-disabled`, disabled links

### Interactive
- **Legal Blue** (`#428bff`): `--palette-text-legal`, legal links, informational
- **Border Gray** (`#c1c1c1`): Border color for cards and dividers
- **Light Surface** (`#f2f2f2`): Circular navigation buttons, secondary surfaces

### Surface & Shadows
- **Pure White** (`#ffffff`): Page background, card surfaces
- **Card Shadow** (`rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px`): Three-layer warm lift
- **Hover Shadow** (`rgba(0,0,0,0.08) 0px 4px 12px`): Button hover elevation

## 3. Typography Rules

### Font Family
- **Primary**: `Airbnb Cereal VF`, fallbacks: `Circular, -apple-system, system-ui, Roboto, Helvetica Neue`
- **OpenType Features**: `"salt"` (stylistic alternates) on specific caption elements

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Section Heading | Airbnb Cereal VF | 28px (1.75rem) | 700 | 1.43 | normal | Primary headings |
| Card Heading | Airbnb Cereal VF | 22px (1.38rem) | 600 | 1.18 (tight) | -0.44px | Category/card titles |
| Card Heading Medium | Airbnb Cereal VF | 22px (1.38rem) | 500 | 1.18 (tight) | -0.44px | Lighter variant |
| Sub-heading | Airbnb Cereal VF | 21px (1.31rem) | 700 | 1.43 | normal | Bold sub-headings |
| Feature Title | Airbnb Cereal VF | 20px (1.25rem) | 600 | 1.20 (tight) | -0.18px | Feature headings |
| UI Medium | Airbnb Cereal VF | 16px (1.00rem) | 500 | 1.25 (tight) | normal | Nav, emphasized text |
| UI Semibold | Airbnb Cereal VF | 16px (1.00rem) | 600 | 1.25 (tight) | normal | Strong emphasis |
| Button | Airbnb Cereal VF | 16px (1.00rem) | 500 | 1.25 (tight) | normal | Button labels |
| Body / Link | Airbnb Cereal VF | 14px (0.88rem) | 400 | 1.43 | normal | Standard body |
| Body Medium | Airbnb Cereal VF | 14px (0.88rem) | 500 | 1.29 (tight) | normal | Medium body |
| Caption Salt | Airbnb Cereal VF | 14px (0.88rem) | 600 | 1.43 | normal | `"salt"` feature |
| Small | Airbnb Cereal VF | 13px (0.81rem) | 400 | 1.23 (tight) | normal | Descriptions |
| Tag | Airbnb Cereal VF | 12px (0.75rem) | 400–700 | 1.33 | normal | Tags, prices |
| Badge | Airbnb Cereal VF | 11px (0.69rem) | 600 | 1.18 (tight) | normal | `"salt"` feature |
| Micro Uppercase | Airbnb Cereal VF | 8px (0.50rem) | 700 | 1.25 (tight) | 0.32px | `text-transform: uppercase` |

### Principles
- **Warm weight range**: 500–700 dominate. No weight 300 or 400 for headings — Airbnb's type is always at least medium weight, creating a warm, confident voice.
- **Negative tracking on headings**: -0.18px to -0.44px letter-spacing on display creates intimate, cozy headings rather than cold, compressed ones.
- **"salt" OpenType feature**: Stylistic alternates on specific UI elements (badges, captions) create subtle glyph variations that add visual interest.
- **Variable font precision**: Cereal VF enables continuous weight interpolation, though the design system uses discrete stops at 500, 600, and 700.

## 4. Component Stylings

### Buttons

**Primary Dark**
- Background: `#222222` (near-black, not pure black)
- Text: `#ffffff`
- Padding: 0px 24px
- Radius: 8px
- Hover: transitions to error/brand accent via `var(--accent-bg-error)`
- Focus: `0 0 0 2px var(--palette-grey1000)` ring + scale(0.92)

**Circular Nav**
- Background: `#f2f2f2`
- Text: `#222222`
- Radius: 50% (circle)
- Hover: shadow `rgba(0,0,0,0.08) 0px 4px 12px` + translateX(50%)
- Active: 4px white border ring + focus shadow
- Focus: scale(0.92) shrink animation

### Cards & Containers
- Background: `#ffffff`
- Radius: 14px (badges), 20px (cards/buttons), 32px (large)
- Shadow: `rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px` (three-layer)
- Listing cards: full-width photography on top, details below
- Carousel controls: circular 50% buttons

### Inputs
- Search: `#222222` text
- Focus: `var(--palette-bg-primary-error)` background tint + `0 0 0 2px` ring
- Radius: depends on context (search bar uses pill-like rounding)

### Navigation
- White sticky header with search bar centered
- Airbnb logo (Rausch Red) left-aligned
- Category filter pills: horizontal scroll below search
- Circular nav controls for carousel navigation
- "Become a Host" text link, avatar/menu right-aligned

### Image Treatment
- Listing photography fills card top with generous height
- Image carousel with dot indicators
- Heart/wishlist icon overlay on images
- 8px–14px radius on contained images

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 2px, 3px, 4px, 6px, 8px, 10px, 11px, 12px, 15px, 16px, 22px, 24px, 32px

### Grid & Container
- Full-width header with centered search
- Category pill bar: horizontal scrollable row
- Listing grid: responsive multi-column (3–5 columns on desktop)
- Full-width footer with link columns

### Whitespace Philosophy
- **Travel-magazine spacing**: Generous vertical padding between sections creates a leisurely browsing pace — you're meant to scroll slowly, like browsing a magazine.
- **Photography density**: Listing cards are packed relatively tightly, but each image is large enough to feel immersive.
- **Search bar prominence**: The search bar gets maximum vertical space in the header — finding your destination is the primary action.

### Border Radius Scale
- Subtle (4px): Small links
- Standard (8px): Buttons, tabs, search elements
- Badge (14px): Status badges, labels
- Card (20px): Feature cards, large buttons
- Large (32px): Large containers, hero elements
- Circle (50%): Nav controls, avatars, icons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text blocks |
| Card (Level 1) | `rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px` | Listing cards, search bar |
| Hover (Level 2) | `rgba(0,0,0,0.08) 0px 4px 12px` | Button hover, interactive lift |
| Active Focus (Level 3) | `rgb(255,255,255) 0px 0px 0px 4px` + focus ring | Active/focused elements |

**Shadow Philosophy**: Airbnb's three-layer shadow system creates a warm, natural lift. Layer 1 (`0px 0px 0px 1px` at 0.02 opacity) is an ultra-subtle border. Layer 2 (`0px 2px 6px` at 0.04) provides soft ambient shadow. Layer 3 (`0px 4px 8px` at 0.1) adds the primary lift. This graduated approach creates shadows that feel like natural light rather than CSS effects.

## 7. Do's and Don'ts

### Do
- Use `#222222` (warm near-black) for text — never pure `#000000`
- Apply Rausch Red (`#ff385c`) only for primary CTAs and brand moments — it's the singular accent
- Use Airbnb Cereal VF at weight 500–700 — the warm weight range is intentional
- Apply the three-layer card shadow for all elevated surfaces
- Use generous border-radius: 8px for buttons, 20px for cards, 50% for controls
- Use photography as the primary visual content — listings are image-first
- Apply negative letter-spacing (-0.18px to -0.44px) on headings for intimacy
- Use circular (50%) buttons for carousel/navigation controls

### Don't
- Don't use pure black (`#000000`) for text — always `#222222` (warm)
- Don't apply Rausch Red to backgrounds or large surfaces — it's an accent only
- Don't use thin font weights (300, 400) for headings — 500 minimum
- Don't use heavy shadows (>0.1 opacity as primary layer) — keep them warm and graduated
- Don't use sharp corners (0–4px) on cards — the generous rounding (20px+) is core
- Don't introduce additional brand colors beyond the Rausch/Luxe/Plus system
- Don't override the palette token system — use `--palette-*` variables consistently

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <375px | Single column, compact search |
| Mobile | 375–550px | Standard mobile listing grid |
| Tablet Small | 550–744px | 2-column listings |
| Tablet | 744–950px | Search bar expansion |
| Desktop Small | 950–1128px | 3-column listings |
| Desktop | 1128–1440px | 4-column grid, full header |
| Large Desktop | 1440–1920px | 5-column grid |
| Ultra-wide | >1920px | Maximum grid width |

*Note: Airbnb has 61 detected breakpoints — one of the most granular responsive systems observed, reflecting their obsession with layout at every possible screen size.*

### Touch Targets
- Circular nav buttons: adequate 50% radius sizing
- Listing cards: full-card tap target on mobile
- Search bar: prominently sized for thumb interaction
- Category pills: horizontally scrollable with generous padding

### Collapsing Strategy
- Listing grid: 5 → 4 → 3 → 2 → 1 columns
- Search: expanded bar → compact bar → overlay
- Category pills: horizontal scroll at all sizes
- Navigation: full header → mobile simplified
- Map: side panel → overlay/toggle

### Image Behavior
- Listing photos: carousel with swipe on mobile
- Responsive image sizing with aspect ratio maintained
- Heart overlay positioned consistently across sizes
- Photo quality adjusts based on viewport

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Pure White (`#ffffff`)
- Text: Near Black (`#222222`)
- Brand accent: Rausch Red (`#ff385c`)
- Secondary text: `#6a6a6a`
- Disabled: `rgba(0,0,0,0.24)`
- Card border: `rgba(0,0,0,0.02) 0px 0px 0px 1px`
- Card shadow: full three-layer stack
- Button surface: `#f2f2f2`

### Example Component Prompts
- "Create a listing card: white background, 20px radius. Three-layer shadow: rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px. Photo area on top (16:10 ratio), details below: 16px Airbnb Cereal VF weight 600 title, 14px weight 400 description in #6a6a6a."
- "Design search bar: white background, full card shadow, 32px radius on container. Search text at 14px Cereal VF weight 400. Red search button (#ff385c, 50% radius, white icon)."
- "Build category pill bar: horizontal scrollable row. Each pill: 14px Cereal VF weight 600, #222222 text, bottom border on active. Circular prev/next arrows (#f2f2f2 bg, 50% radius)."
- "Create a CTA button: #222222 background, white text, 8px radius, 16px Cereal VF weight 500, 0px 24px padding. Hover: brand red accent."
- "Design a heart/wishlist button: transparent background, 50% radius, white heart icon with dark shadow outline."

### Iteration Guide
1. Start with white — the photography provides all the color
2. Rausch Red (#ff385c) is the singular accent — use sparingly for CTAs only
3. Near-black (#222222) for text — the warmth matters
4. Three-layer shadows create natural, warm lift — always use all three layers
5. Generous radius: 8px buttons, 20px cards, 50% controls
6. Cereal VF at 500–700 weight — no thin weights for any heading
7. Photography is hero — every listing card is image-first

---

## 10. Voice & Tone

Airbnb's voice is hospitality made legible — warm, unhurried, grounded in human scale. The anchor phrase is *"Belong Anywhere,"* adopted as the company's official tagline in July 2014 at the same time the **Bélo** logo launched. That phrase locates the entire voice: not transactional ("Book a room"), not distantly aspirational ("Luxury redefined"), but universal and present-tense. Headlines read like invitations. Error messages read like apologies from someone who genuinely cares. Even legal and safety surfaces preserve the Host-Guest metaphor rather than slipping into corporate passive voice.

| Context | Tone |
|---|---|
| Hero headlines | Warm, inviting, second-person. "Find a place to stay." |
| Listing descriptions | Specific, human-scale. "Sleeps 4" not "Max occupancy: 4". |
| CTAs | Gentle imperative. "Continue", "Reserve", "Send message". Never "Buy now". |
| Host-facing copy | Partnered, respectful. Hosts are capitalized (Host, Superhost), not "providers" or "suppliers". |
| Error messages | Apologetic-but-specific. Explains what happened and how to recover. |
| Onboarding (guest) | Encouraging without being sycophantic. Walks first-time guests through trust features. |
| Trust & Safety copy | Serious but warm. Reads like a thoughtful letter, not a legal document. |
| Marketing long-form | Travel-magazine-editorial. Stories of specific Hosts and Guests. |

**Forbidden phrases.** "Revolutionary", "disrupt", "next-generation", "game-changer" — the voice is human, not tech-industry. "Book now!" with exclamation — Airbnb treats booking as a trust decision, not a shopping impulse. "Unlock" (as in "Unlock amazing stays") — unlocking is a transactional metaphor and this product is about belonging. Cold-booking vocabulary: "accommodations", "units", "properties" where "homes" works. Scarcity pressure ("Only 2 left!") on product surfaces — this would betray the hospitality thesis.

## 11. Brand Narrative

Airbnb was founded in 2008 in San Francisco by Brian Chesky, Joe Gebbia, and Nathan Blecharczyk. The founding was famously accidental: Chesky and Gebbia couldn't make rent, a design conference was in town, hotels were full, and they put air mattresses in their living room. The first three guests each paid $80 a night. That origin — a home, a Host, a Guest who could not find a traditional place to stay — stayed the company's center of gravity as it grew into a global platform.

In **July 2014**, Airbnb launched its first major rebrand: the **Bélo** logo (a universal symbol intended to evoke belonging) and the tagline *"Belong Anywhere."* Brian Chesky's launch essay framed the thesis directly: *"A house is just a space, but a home is where you belong. And what makes this global community so special is that for the very first time, you can belong anywhere."* The campaign framed belonging as *"the universal human yearning to belong — the desire to feel welcomed, and respected, and appreciated for who you are, no matter where you might be."*

That 2014 thesis is still the company's foundation, but the positioning has evolved substantially. In **May 2024**, the **Icons Release** introduced a new category — *"extraordinary experiences from the world's greatest icons"* — with partnerships across sports, music, and film, alongside group-trip features (shared wishlists, a redesigned Messages tab). In **2025**, the **Summer Release** expanded Airbnb into a three-pillar platform — **Homes, Experiences, and Services** — launching 10 service categories across 260 cities and a curated "Airbnb Originals" line. Brian Chesky framed the shift verbatim: *"With the launch of services and experiences, we're changing travel again. Now you can Airbnb more than an Airbnb."* The 2025 release shipped with a **visual-language refresh toward 3D, skeuomorphic, Pixar-inspired iconography** — *"vibrant, tactile, and full of depth"*, with *"smooth animations, subtle lighting, soft curves, and drop-shadows"* — while deliberately preserving the **Cereal** typeface, **Rausch Red** accent, and the underlying Belong-Anywhere thesis. The brand evolved into what Airbnb now frames as an "everything app" without abandoning any of the 2014 foundation.

What Airbnb refuses: the "hotel booking site" aesthetic (stock photography, star ratings as the only trust signal, "Book Now" pressure tactics), the gig-economy aesthetic (minimalist-cold, platform-as-intermediary), and any design choice that would reduce a home to a commodity. What it embraces: photography-first listing cards where the Host's own photos are the hero content, Rausch Red (`#ff385c`) — named after the company's early office address on Rausch Street, so the brand color is a personal reference rather than a committee decision — generous border-radius that reads as soft rather than precise, and a Bélo logo designed so anyone, anywhere, could draw it.

## 12. Principles

1. **Belong anywhere.** *(Airbnb's official tagline since July 2014, verbatim.)* Every surface should feel like an invitation, not a transaction. If a design move reads as transactional pressure ("Only 2 left! Book now!"), it violates the thesis.
2. **Home, not accommodation.** *(Brian Chesky, 2014, verbatim: "A house is just a space, but a home is where you belong.")* Copy, illustration, and imagery refer to "homes", never "units", "properties", or "accommodations".
3. **Hosts are capital H.** Hosts are partners, not suppliers. Product copy capitalizes the role (Host, Superhost) as a form of respect. Guest is lowercase when used as a common noun; guests are universal, Hosts are individual.
4. **Photography is the hero.** Listing cards, search results, marketing pages — the Host's photography is the primary visual. The chrome's job is to get out of the way of that photography.
5. **Warm minimalism.** White canvas, Rausch Red as singular accent, near-black (`#222222`) text with a whiff of warmth, generous radius throughout. The palette refuses the "cool gray institutional" default of travel-tech.
6. **Trust is designed.** Every trust-signaling element — reviews, Host verification, cancellation policies, identity verification — is a first-class UI element, not buried in small print. Warmth without trust is hospitality theater.
7. **Pay attention to the in-between moments.** Empty states, error states, between-booking follow-ups — these are where belonging is either reinforced or broken. A generic "No results found" state is an Airbnb failure.
8. **The Bélo is universal on purpose.** The 2014 Bélo was designed so anyone, anywhere, could draw it. Brand marks are not decoration — they are symbols of the community they represent, and community symbols must be replicable by the community.
9. **Hospitality is more than a look.** Design decisions are judged against whether a real Host would feel dignified showing their listing inside this chrome. If the answer is "not quite", the chrome is wrong.
10. **The super-app is an extension of hospitality, not a pivot from it.** *(Contemporary, 2024–2025 era.)* The 2024 **Icons Release** and 2025 expansion to **Homes + Experiences + Services** inherit the 2014 "Belong Anywhere" thesis — the unit of belonging scales from a home stay to an experience or a service, but the emotional register stays hospitable. The 2025 shift to 3D / skeuomorphic / Pixar-inspired iconography kept Cereal, Rausch Red, and the warm-minimalist chrome intact precisely because the brand is evolving, not rebooting. A redesign that introduced a cold palette or a sans-serif brand type would violate the thesis, no matter how "modern" it looked.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Airbnb user segments (leisure travelers, Hosts, long-stay remote workers, multigenerational family travelers), not individual people.*

**Léa Dubois, 31, Paris.** Marketing manager at a fashion startup. Books 4–6 Airbnb stays a year, mostly short European weekends with her partner. Reads listing descriptions carefully; checks the Host's review history *before* the listing photos. Would rather pay 20% more for a Superhost with a long review history than save money on a new listing. Notices when Airbnb's empty-state copy is warm or cold and judges the product accordingly.

**Dimitri Stavros, 58, Thessaloniki.** Retired and runs a 2-bedroom Superhost listing in his family's village home. Uses the Host app daily. Values that the Host-facing copy treats him as a partner, not a gig-economy worker. Reads every update to Airbnb's cancellation policies carefully because they affect his household income. Would leave the platform if the Host tools ever felt more extractive than collaborative.

**Aisha Mohammed, 27, Cairo.** Software engineer working fully remote. Uses Airbnb for 30–90 day "slow travel" stays — Lisbon, Mexico City, Medellín. Filters aggressively for listings with workspace photos and fiber internet mentions. Has written a Medium post about her personal rotation of Superhosts in four cities. Sees Airbnb more as "a distributed home network" than a travel product.

**Kenji and Yuki Watanabe, 44 and 41, Yokohama.** Family of four. Book 2–3 Airbnb stays per year for multigenerational trips where hotel rooms would require 2–3 separate rooms. Value the "entire home" filter specifically because it lets grandparents and grandchildren share a kitchen. Read reviews filtered by the "Families" tag. Distrust listings that use professional staging photography — they prefer the slightly-imperfect real-Host photos as a trust signal.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | Single warm line in near-black (`#222222`): "We couldn't find any homes matching all your filters." One soft-CTA link in Rausch Red: "Clear filters". No illustration. Filter chips visible above so users can adjust in place. |
| **Empty (wishlist, first use)** | Warm-gray body text: "Save places you love by tapping the heart on any home." One ghost CTA: "Explore homes". No illustration, no sparkles, no tour. |
| **Empty (messages, new user)** | Near-black headline + warm-gray body: "Your conversations with Hosts will appear here." Nothing more — Airbnb trusts that this becomes obvious once you book. |
| **Loading (search results)** | Warm-tone skeleton cards preserving the listing-card shape (image area + 3 text lines + price). 1.2s shimmer in a lighter warm tone. Skeletons use the same 12px+ radius as real cards — no geometric surprise on paint-in. |
| **Loading (map pan)** | Result pins fade at `motion-fast` as the user drags; map tiles load underneath. No blocking overlay, no "Loading..." text on the map. |
| **Error (booking failed)** | Warm apology + specific cause + recovery path. *"Your booking didn't go through. Please try again, or contact the Host directly."* Rausch Red used only on the "Try again" button. Never a bright red banner. |
| **Error (form validation)** | Field-level. Ultra-thin border switches from warm gray to Rausch Red. 13px warm message below: what's invalid and what would be valid. |
| **Error (Host decline)** | Warm, explanatory surface. Not framed as failure — framed as "this Host isn't available; here are similar homes". The rejection is never hidden, but the alternative is immediate and present. |
| **Success (booking confirmed)** | Dedicated confirmation screen. Host's first name + photo + welcome note if they wrote one. Check-in details prominent. Rausch Red only on the "Message Host" button. Past tense: "You're booked." |
| **Success (review submitted)** | Brief warm-gray inline confirmation: "Thanks for your review." 4s auto-dismiss. No toast spam; reviews are a small ritual, treated quietly. |
| **Skeleton** | Warm-tone blocks at exact final card dimensions. Shimmer in a lighter warm tone, never cool blue. Photography placeholder is a subtle warm gradient, never a blank gray square — even skeletons respect the photography-first principle. |
| **Disabled** | Opacity on text and warm-border together. Rausch Red actions become `rgba(255,56,92,0.3)` — faded warm red, not switched to gray. |
| **Loading (Host publishing a listing)** | Multi-step progress with named steps ("Photos uploaded", "Description saved", "Calendar synced"). Warm, specific, never abstract "Loading..." text. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection, keyboard confirm |
| `motion-fast` | 160ms | Hover, focus, heart-icon toggle, map pin interactions |
| `motion-standard` | 260ms | Sheet, modal, gallery swipe, card expand |
| `motion-slow` | 400ms | Full-screen photo gallery transitions, rare hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, modals, filter drawers |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |
| `ease-warm` | `cubic-bezier(0.25, 0.8, 0.25, 1)` | Heart-icon toggle, Wishlist save — slightly more settled at the end, matching the emotional register of saving a home |

**Signature motions.**

1. **Heart-icon save (Wishlist).** The heart transitions from outline to filled Rausch Red over `motion-fast` with `ease-warm`. A small scale pulse (`0.9 → 1.05 → 1.0`) accompanies the color fill. This is the one place Airbnb's UI allows a tiny "joy" motion — saving a home to come back to later is an emotional act, not a neutral bookmark.
2. **Photo gallery swipe.** Full-screen photos swipe at `motion-standard` with `ease-standard`. No parallax on the photos themselves; the user should feel like they're looking at real photographs, not a marketing carousel.
3. **Search filter drawer.** Filter drawer rises at `motion-standard` with `ease-enter`. Backdrop fades in synchronously. Dismissal at `motion-fast` with `ease-exit`.
4. **Map pin selection.** When a result pin is tapped, the corresponding listing card slides into focus at the bottom of the screen at `motion-standard` with `ease-enter`. The pin itself scales `1.0 → 1.15` over `motion-fast` to confirm selection.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. The heart-icon pulse becomes an instant color switch. Gallery transitions become cuts. The product stays fully functional; hospitality voice is preserved through copy, not through motion.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch / WebSearch (2026-04-19):

Historical (2014 era) — the foundation still in force:
- Brian Chesky, "Belong Anywhere" (Medium, July 2014) — confirms the tagline
  launch and this verbatim framing used directly in §10 and §11:
    "really, we're about home. You see, a house is just a space, but a
     home is where you belong. And what makes this global community so
     special is that for the very first time, you can belong anywhere."
  https://medium.com/@bchesky/belong-anywhere-ccf42702d010
- "How Airbnb Found a Mission—and a Brand" (Fortune longform) — confirms
  the July 2014 rebrand context, the Bélo logo naming (by then-CMO
  Jonathan Mildenhall), and the campaign framing verbatim:
    "the universal human yearning to belong — the desire to feel
     welcomed, and respected, and appreciated for who you are, no
     matter where you might be."
  https://fortune.com/longform/airbnb-travel-mission-brand/

Contemporary (2024–2025 era) — the current positioning:
- Airbnb 2024 Summer Release (Icons launch) — WebSearch confirms verbatim:
    "extraordinary experiences from the world's greatest icons"
  Also confirmed: the Icons category launch with partners across sports,
  music, and film; group-trip features (shared wishlists, redesigned
  Messages tab). Announced by Brian Chesky in a 34-minute video release.
  https://news.airbnb.com/airbnb-2024-summer-release/
- Airbnb 2025 Summer Release — WebSearch confirms Brian Chesky verbatim:
    "With the launch of services and experiences, we're changing travel
     again. Now you can Airbnb more than an Airbnb."
  Three-pillar expansion confirmed (Homes + Experiences + Services), 10
  launch categories (including Chefs) across 260 cities, Airbnb Originals
  line.
  https://news.airbnb.com/airbnb-2025-summer-release/
  https://www.airbnb.com/release
- Medium / Design Bootcamp, "Airbnb Summer 2025 update" — confirms the
  visual-language refresh verbatim:
    "3D, skeuomorphic, Pixar-inspired icons — vibrant, tactile, and full
     of depth"
    "smooth animations, subtle lighting, soft curves, and drop-shadows"
    "playful, utility-driven icon set with consistent visual language —
     curved, bold, and full of personality"
  Also confirms that Cereal typeface and existing logo were preserved
  through the 2025 redesign — evolution, not reboot.

Note: Direct WebFetch of https://news.airbnb.com/ and https://www.airbnb.com/
returned HTTP 403 (likely bot protection), so 2024–2025 release quotes
above were captured via WebSearch against the same underlying source pages
and cross-confirmed against the Medium analysis piece.

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(Rausch Red #ff385c, Airbnb Cereal VF typeface, three-layer shadow stacks,
generous radius scale 8px–32px, Near-Black #222222, Luxe Purple #460479
and Plus Magenta #92174d for premium tiers).

Not independently verified via WebFetch — widely documented public facts used:
- Airbnb was founded in 2008 in San Francisco by Brian Chesky, Joe Gebbia,
  and Nathan Blecharczyk; the origin story involving air mattresses during
  a San Francisco design conference is widely documented.
- Rausch Red (#ff385c) is reported to be named after Rausch Street, the
  location of an early Airbnb office.
- Airbnb's Host / Superhost program terminology is widely used in
  the company's own product and Host-facing surfaces.

Personas (§13) are fictional archetypes informed by publicly observable
Airbnb user segments (leisure travelers, Hosts / Superhosts, long-stay
remote workers, multigenerational family travelers). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "hospitality is more than a look", "the Bélo is
universal on purpose", "warm minimalism refuses the cool-gray institutional
default") are editorial readings connecting Airbnb's stated 2014 brand
thesis to the design system, not directly sourced Airbnb statements.
-->

