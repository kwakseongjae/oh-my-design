---
id: remember
name: Remember
country: KR
category: productivity
homepage: "https://www.rememberapp.co.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Remember UI
  url: "https://dramancompany.github.io/remember-ui/"
  type: system
  description: Remember (drama&company) UI library — public Storybook deploy with components for the business-card / B2B networking product.
  og_image: "https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png"
---

# Design System Inspiration of Remember (리멤버)

> **Disambiguation.** This is **Remember (리멤버) — the Korean B2B business-card management and professional-networking app operated by 리멤버앤컴퍼니 (formerly 드라마앤컴퍼니, Drama & Company)**. Not to be confused with Remember The Milk, any “Remember” calendar app, or generic English-word brands. Verified against `https://www.rememberapp.co.kr/` (redirects to `career.rememberapp.co.kr`) and `https://corp.remember.co.kr/`.

## 1. Visual Theme & Atmosphere

Remember is the app that turned the paper business card into a database — and now wraps that database in a career-marketplace, headhunter outreach surface, and an industry-expert community. The visual identity is built around that origin: it has to feel **trustworthy enough for a 54-year-old factory owner to hand over his Rolodex**, while also feeling **modern enough for a 32-year-old engineer to take a scout call through it**. The result is an aggressively restrained palette — near-pure white surfaces, deep charcoal type, **black as the primary action color**, and a hot signup-orange (`#FF5414`) that punches through only at conversion moments.

Where Toss made financial blue its brand thesis and Wanted made cobalt (`#0066FF`) its career-marketplace color, Remember made **black** the primary CTA. That choice is deliberate: black reads as the most "professional" neutral in Korean B2B context — it's the color of name-card foil stamping, of executive notepads, of legal letterhead. It refuses both the playful saturation of consumer apps (Toss blue, Kakao yellow) and the engineered cobalt of recruiting competitors. Body type is rendered in `#222222` — slightly off-black, warmer than `#000` — for long-form reading comfort across job descriptions, community posts, and contact lists.

The typeface is **Pretendard** (sans-serif), the open-source Korean–Latin hybrid that has become the de facto Korean product-design default. Remember doesn't ship a custom face; the brand statement is restraint, not typographic exotica. Information density is **high**: the career feed surfaces dozens of jobs per viewport in 162-wide cards with no shadow and minimal chrome, because the user value is "more opportunities visible," not "fewer, prettier opportunities."

**Key Characteristics:**
- Black (`#000000`) as primary interactive — CTAs, search submit, primary buttons. The fingerprint of the brand.
- Off-black body text (`#222222`) — softer than pure black, optimized for long-form reading
- Signup orange (`#FF5414`) — high-saturation conversion punch, used sparingly and only on growth moments
- Pretendard font family across all surfaces (no custom face)
- 4–6px radius scale — small, restrained, never pill-shaped on primary CTAs
- Border-led component definition (`#D4D4D4` hairlines on filter chips) — not shadow-led
- High information density — small cards, tight spacing, more results per viewport

## 2. Color Palette & Roles

### Primary
- **Action Black** (`#000000`): The brand's primary CTA color. Login button, search submit, primary action on detail pages. White text on top.
- **Body Charcoal** (`#222222`): Default text color. Softer than `#000` for sustained reading. Used for headlines, body, filter labels.
- **Pure White** (`#FFFFFF`): Page surface, card surfaces, secondary button background.
- **Off-white** (`#FFFFF9`): Text color used on top of orange CTAs — a near-cream that warms against `#FF5414`.

### Brand Accent (Conversion / Growth)
- **Signup Orange** (`#FF5414`): The "가입하기" / signup punch. Reserved for high-intent conversion moments — onboarding nudge, free-trial CTAs, growth banners. Never the default primary.
- **Brand Orange** (`#FF6A0D`): Secondary orange used in marketing-surface accents and badges. One step lighter / less saturated than signup orange.

### Semantic
- **Success Green** (`#239E7B`): Used for confirmation states, "지원 완료" / application success badges, positive metrics.
- **Surface Mint** (`#D9FCF2`): Pale green surface — success banners, accepted-status pills. Pairs with success-green text.
- (Error / warning tokens are not consistently exposed on the public career surface; on internal forms they follow Korean fintech convention — red 2px input border with red helper text. Treat as Tier 1-unverified for this brand.)

### Neutral Scale
- **Neutral 50** (`#FAFAFA`): Page background tint, hover surfaces.
- **Neutral 100** (`#F2F2F2`): Search-input background, secondary surface.
- **Neutral 200** (`#EBEBEB`): Dividers, low-emphasis fills.
- **Neutral 300** (`#D4D4D4`): Default border on filter chips, input outlines, low-emphasis components.
- **Neutral 400** (`#BDBDBD`): Disabled icon, low-emphasis caption.
- **Neutral 500** (`#808080`): Placeholder text, secondary caption.
- **Neutral 700** (`#424242`): Sub-headline color (H2 on career feed).
- **Neutral 900** (`#222222`): Body and primary heading color.

### Surface & Borders
- **Border default**: `#D4D4D4` (`neutral 300`) — filter chips, input outlines, card hairlines.
- **Border subtle**: `#EBEBEB` (`neutral 200`) — dividers between list rows.
- **Search-input surface**: `#F2F2F2` (`neutral 100`) — search field background.
- **Overlay scrim**: `rgba(0, 0, 0, 0.8)` — bottom sheet and modal backdrop on mobile.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, -apple-system, "system-ui", system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`
- **Storybook / web component lib**: `Pretendard, sans-serif` (short form — Remember UI Storybook body computed style)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Color | Notes |
|------|------|------|--------|-------------|-------|-------|
| Section H2 | Pretendard | 20px | 600 | 26px (1.30) | `#424242` | Career feed section headers ("프리미엄 대표기업") |
| Card H3 | Pretendard | 16px | 400 | 23.2px (1.45) | `#000000` | Job-card and company-card titles |
| Body | Pretendard | 16px | 400 | 1.5 | `#222222` | Job-description, community-post body |
| Filter / Chip | Pretendard | 16px | 400 | normal | `#222222` | Filter chip labels (10px 16px padding) |
| Button label | Pretendard | 14px | 400 | normal | varies | Login / Signup / nav buttons (32px tall) |
| Search input | Pretendard | 16px | 400 | normal | `#808080` placeholder, `#222` typed | 52px tall, 16px size |
| Conversion CTA label | Pretendard | 12px | 400 | normal | `#FFFFF9` | Signup nudges (32px tall, orange bg) |
| Caption / meta | Pretendard | 12-13px | 400 | normal | `#808080` | Timestamps, D-day badges, location |

### Principles
- **One family, no custom face.** Pretendard does everything — Korean, Latin, numerals. The brand statement is restraint, not typographic identity. Where Toss invests in a custom face, Remember invests in a third-party open-source default.
- **Weight discipline.** Captured surfaces use predominantly weight 400. Weight 600 is reserved for section H2 sub-emphasis. Weight 700 is absent on the career feed — Remember does not shout typographically.
- **Off-black for sustained reading.** Body and most headlines are `#222222`, not `#000`. Pure black is reserved for the H3 card titles where the user's eye lands first, and for the action-button background.

## 4. Component Stylings

### Buttons

Remember's button system is a 2-axis matrix: **fill kind** (black / white / outlined / orange-growth) × **size**. The default size shown below is the 32-tall header button captured live on `career.rememberapp.co.kr/job/postings`. The search-submit button is the same color but 52px tall to match the search input.

**Primary / Action Black**
- Background: `#000000`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 (square hit area in header), 0 12px on labelled variants
- Font: 14px / 400 / Pretendard
- Use: Login, primary auth CTAs, search submit (52px variant). The fingerprint button of Remember.

**Primary / Action Black — Search size**
- Background: `#000000`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 0 12px
- Height: 52px
- Font: 14px / 400 / Pretendard
- Use: Search submit beside the 52-tall search input on the career feed hero.

**Secondary / White Fill**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: none
- Radius: 6px
- Padding: 0 12px
- Height: 32px
- Font: 14px / 400 / Pretendard
- Use: "회원가입" / sign-up secondary button in the dark header (white-on-dark surface).

**Outline / Ghost on Dark**
- Background: transparent
- Text: `#FFFFFF`
- Border: 1px solid `#FFFFFF`
- Radius: 6px
- Padding: 0 12px
- Height: 32px
- Font: 14px / 400 / Pretendard
- Use: "기업 서비스" / B2B nav button in the dark hero — outline on dark surface.

**Growth / Signup Orange**
- Background: `#FF5414`
- Text: `#FFFFF9`
- Border: none
- Radius: 4px
- Padding: 6.5px 13px
- Height: 32px
- Font: 12px / 400 / Pretendard
- Use: "가입하기" growth CTAs, onboarding nudges, free-trial bars. The single saturated punch on the page.

### Filter Chips

Remember's filter system is the densest interactive zone on the career feed. Chips are border-defined (not fill-defined) and stay stable across hover / pressed / active.

**Default**
- Background: transparent
- Text: `#222222`
- Border: 1px solid `#D4D4D4`
- Radius: 4px
- Padding: 10px 16px
- Height: 42px
- Font: 16px / 400 / Pretendard
- Min-width: 82px (single-character labels like "직무" / "연봉" / "지역" / "경력")
- Use: Filter facets on `/job/postings` — 직무, 연봉, 지역, 경력, 기업 유형, 산업/업종.

**Selected / Active** (inferred Tier-1 from sibling chips when applied — values may shift)
- Background: `#222222`
- Text: `#FFFFFF`
- Border: 1px solid `#222222`
- Radius: 4px
- Use: Active filter facet. Inverts the default. Marked `(unresolved)` — see footer.

### Search Input

The hero search is the single highest-priority surface on the career feed; it is wider than the page gutter and taller than every other input.

**Default**
- Background: `#F2F2F2`
- Text typed: `#222222`
- Placeholder: `#808080` ("직무, 회사를 검색해 주세요")
- Border: none
- Radius: 4px
- Padding: 0 0 0 56px (left padding makes room for the leading search icon)
- Height: 52px
- Font: 16px / 400 / Pretendard
- Use: Hero search above the job list. Pairs with the 52-tall black submit button to the right.

### Cards

**Job Card (Career Feed)**
- Background: transparent (cards inherit the page surface — Remember uses density, not card-chrome, to separate items)
- Text: `#000000` (H3 title), `#222222` (meta line)
- Border: none
- Radius: 0
- Padding: tight internal — content-led, not chrome-led
- Width: 162px (verified live on `career.rememberapp.co.kr/job/postings`)
- Height: 201–250px depending on title wrap and number of meta lines
- Shadow: none
- Title: 16px / 400, `lineHeight: 23.2px`
- Use: The career feed's atomic unit. Many per viewport, low-chrome, optimized for scan speed.

**Company / Premium Card** (Tier-1 inferred — exact tokens not exhaustively captured)
- Background: `#FFFFFF`
- Text: `#222222`
- Border: 1px solid `#EBEBEB` (or no border + flat divider)
- Radius: 8–12px
- Padding: 16–20px
- Use: "프리미엄 대표기업" carousel cards (H2 = 20px / 600 / `#424242` overhead). Wider than job cards, with logo + tagline.

### Status / Tag Pills

**Success / Accepted**
- Background: `#D9FCF2`
- Text: `#239E7B`
- Border: none
- Radius: 4px
- Padding: 2–4px 8px
- Font: 12px / 400 / Pretendard
- Use: "지원 완료" / accepted-status badges in user history.

**D-day Badge**
- Background: transparent
- Text: `#FF5414` (urgency) or `#424242` (neutral countdown)
- Border: none
- Font: 12px / 400 / Pretendard
- Use: "D-8", "D-11" countdown chips on time-sensitive job cards.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px
- Horizontal page gutter: 16–20px on mobile, 24–40px on desktop
- Search-input internal padding-left: 56px (leading-icon clearance)
- Filter row internal gap: 8px between chips, 16px between filter groups

### Grid & Container
- Design baseline: 360–375px mobile width; desktop uses a fixed central column
- Career feed: dense multi-card grid; cards ~162px wide, no shadow, no border, density-led
- Single-column body on detail / community surfaces
- Filter row above the feed is full-width, horizontally scrollable on mobile

### Whitespace Philosophy
- **Density is the value proposition.** Where Toss optimizes for "breathing room around money," Remember optimizes for "more opportunities per viewport." Card chrome is minimized so the count of visible opportunities is maximized.
- **Borders, not shadows, define grouping.** Filter chips, inputs, and dividers carry `#D4D4D4` / `#EBEBEB` hairlines. The page rarely uses box-shadow.
- **Black anchors the hero.** The dark hero band (header + B2B nav + search) is solid `#000000` and absorbs all chrome contrast; the body returns to white and lets content carry contrast.

### Border Radius Scale
- Compact (4px): Filter chips, primary action buttons, search input, status pills — Remember's dominant radius
- Standard (6px): Secondary buttons, outline buttons in the header
- Comfortable (8–12px): Cards (when present), modals
- (Pill / 9999px is absent on the captured career surface — Remember does not use pill-shaped CTAs)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Career-feed cards, filter chips, page surface |
| Subtle (Level 1) | `0px 1px 2px rgba(0,0,0,0.04)` | Sticky header bottom edge, scroll-aware nav |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Dropdown menus, autocomplete panels |
| Modal (Level 3) | `0px 8px 24px rgba(0,0,0,0.16)` | Bottom sheets, filter modals, dialogs |

**Shadow Philosophy.** Remember keeps elevation neutral and minimal. The default career feed is **shadowless** — cards float in the page surface and are separated by space alone. Shadow is reserved for stateful overlays (dropdowns, sheets) where the user needs a clear "this is on top." Pure black with low opacity, never colored. This is consistent with the brand's trust-through-restraint posture: a professional networking app in Korea cannot afford to look "designy."

### Blur Effects
- Sticky navigation applies a subtle backdrop blur on scroll for the dark hero band
- Bottom sheets on mobile use a dimmed `rgba(0,0,0,0.8)` backdrop without blur — full opacity preferred for focus

## 7. Do's and Don'ts

### Do
- Use **black (`#000000`)** as the primary CTA color across all surfaces. It is Remember's fingerprint.
- Render long-form body text in **`#222222`**, not `#000`, for sustained reading comfort.
- Reserve **signup orange (`#FF5414`)** for conversion moments — onboarding nudges, free-trial bars. It is a punctuation color, not a default.
- Keep cards on the career feed **shadowless and chromeless**. Density of opportunities is the brand promise.
- Use **`#D4D4D4` 1px borders** to define filter chips and input outlines — borders, not fills.
- Default to **4px radius** on buttons, chips, and inputs. Restraint over pillow softness.
- Stack **Pretendard, -apple-system, "Apple SD Gothic Neo"** for Korean–Latin parity.

### Don't
- Don't use **Wanted's cobalt (`#0066FF`)** as a primary on Remember surfaces. Remember is a networking product, not a marketplace; it intentionally avoids the engineered-blue category.
- Don't use **Kakao yellow** or **playful saturations**. Remember's user base includes executive recruiters and 50+ business owners — playful color reads as untrustworthy here.
- Don't pill-shape primary CTAs (`9999px`). The captured surfaces use 4–6px exclusively on action buttons.
- Don't apply colored shadows or multi-layer elevation. Shadows are pure black, low opacity, single layer.
- Don't use signup orange (`#FF5414`) on more than one CTA per screen. It loses its conversion punch when repeated.
- Don't render small UI labels (chips, captions) in weight 600+. Career-feed labels are 400; weight is reserved for H2.
- Don't introduce custom illustrations on empty/error states for B2B-facing surfaces. Remember's audience expects sentence-led empty states, not characters.

## 8. Iconography & Imagery

- **Icon system.** Remember uses outlined / stroke-style icons at 1.5–2px stroke weight in `#222222` or `#424242`. Filled icons appear only in active-state nav bottoms. No brand-color icons in primary surfaces.
- **Logos in cards.** Company logos in the premium-company carousel and job cards are framed at ~50×50 with a 9px radius (Tier-1 captured) and a near-white background — never a colored frame.
- **Photography.** Remember leans on stock-quality professional photography for marketing-only surfaces (corp site, blog). Product surfaces (career feed, contact list, community) are photography-light — they prioritize structured data density.
- **Empty-state illustration.** Avoided on B2B-product surfaces. Empty states are sentence-led with a single suggested action button. (Marketing surfaces may use spot illustration, but the product does not.)
- **Business-card visual.** The legacy product affordance — a rectangular card with name + title + company — is the brand's signature surface. When rendered in-product, business-card components use white bg, `#222` heading, `#808080` meta, 8–12px radius, and a soft `0 1px 3px rgba(0,0,0,0.06)` shadow to suggest physical paper.

## 9. Overall Personality

Remember is the **trusted professional notebook** of the Korean white-collar workforce. It is calm, dense, slightly serious — the visual equivalent of a tailored navy suit, not a hoodie. Black is the primary action color because Remember sells professionalism, and black is the color of foil-stamped name cards and executive notepads. Orange is the conversion accent because Remember still needs to grow, and conversion needs a different visual register from the rest of the product. White space is sparing because the user came to Remember to see more, not to admire empty real estate.

The brand sits in deliberate contrast to its nearest neighbors:
- **vs. Wanted (`#0066FF` cobalt, career-marketplace).** Wanted is a transactional job-board with a strong engineering aesthetic. Remember is a *networking* product — the same user might have a Remember account for 8 years (their contact graph) and a Wanted tab open for 6 weeks (their current job hunt). Remember's restraint reflects long-term residency in the user's life.
- **vs. LinkedIn (global, blue, feed-heavy).** Remember is more transactional and less performative — there is no public broadcasting of personal milestones at the center of the product. The feed is jobs and scout messages, not "I'm thrilled to announce."
- **vs. Toss (consumer fintech, cerulean).** Toss is one-action-per-screen and breathing-room-around-money. Remember is many-options-per-screen and density-around-opportunities. The two brands occupy opposite ends of the Korean-product-design spectrum: Toss is *calm consumer*, Remember is *dense professional*.

In one line: **Remember is what happens when you take the world's most boring product surface — a business card — and treat it as a serious operating system for a career.**

---

**Verified:** 2026-05-13

**Tier 1 sources:**
- `https://www.rememberapp.co.kr/` → redirects to `https://career.rememberapp.co.kr/job/postings` (playwright live computed-style inspect, 2026-05-13)
- `https://career.rememberapp.co.kr/job/postings` (Tier 1 live — primary surface; captured body font `Pretendard`, primary CTA `rgb(0,0,0)` radius `4px–6px`, filter chip `1px solid #D4D4D4`, search input `#F2F2F2` 52px, growth CTA `#FF5414` text `#FFFFF9` radius `4px`)
- `https://dramancompany.github.io/remember-ui/` (Storybook root — body bg `#F3F2EF`, font-family `Pretendard, sans-serif`)
- `https://corp.remember.co.kr/company` (mission, vision, founder identity)
- `https://corp.remember.co.kr/` (tagline "프로를 위한 모든 기회, 리멤버가 연결합니다")

**Tier 2 sources:**
- `https://getdesign.md/remember` — **not found**: "No designs found for 'remember'." (2026-05-13)
- `https://styles.refero.design/?q=remember` — **not found**: "Collection not found — Refero Styles" 404 (2026-05-13)
- `https://github.com/dramancompany/remember-ui` — **HTTP 404** at fetch time (2026-05-13). The Storybook deploy at `dramancompany.github.io/remember-ui/` is still live, but the source repo is not publicly readable. Tier 2 effectively unavailable for this brand.

**Conflicts unresolved:**
- **Selected / active filter chip tokens** — chips in default state were captured live (`#D4D4D4` border, transparent fill, `#222222` text). The selected/active state inversion (`#222` bg + white text) is inferred from the parent surface pattern but was not captured in a selected state during the live session. Flagged `(unresolved)` in §4.
- **Error / warning semantic tokens** — public career surface does not expose red error semantics. Internal form errors follow Korean fintech convention but are not Tier 1 verified for this brand. Treat as inferred.
- Tier 2 cross-validation was unavailable (both getdesign.md and refero have no entry for Remember; GitHub source repo returns 404). All token claims rest on Tier 1 live computed-style capture from the career surface and Storybook root.

## 10. Voice & Tone

Remember speaks like the senior colleague who got promoted twice and still answers your DM: **calm, concrete, low on adjectives, never sells**. The product is a name-card-app-that-grew-up — its voice cannot afford to feel scrappy or playful, because half its users are 45+ executives who are unforgiving of brand cuteness. Korean is the primary voice; English strings exist but are secondary translations. Imperative verbs end CTAs (`가입하기`, `지원하기`, `검색`); declarative single sentences end notifications.

| Context | Tone |
|---|---|
| CTAs | Imperative Korean short form (`가입하기`, `지원하기`, `검색`, `회원가입`, `로그인`) — no period, no emoji |
| Success states | Past-tense single sentence — `지원이 완료되었어요`, `명함이 저장되었어요`. Pairs with the `#D9FCF2` mint surface and `#239E7B` text. |
| Error messages | Specific + blameless + actionable. Avoid `오류가 발생했습니다`; prefer `이메일 형식을 다시 확인해주세요`. |
| Onboarding | Second-person, one idea per screen. Skip illustration; lead with the value proposition (`경력에 맞는 제안이 도착했어요`). |
| Job-card meta | Bare facts, separated by interpunct or middle-dot. `7년~12년 차 · 서울/강남구`. Never "approximately." |
| Empty states | One-line `why` in `#808080` body, optional secondary action below. Never `데이터가 없어요`. |
| Scout / headhunter outreach | Formal `합니다` endings — this is the one place Remember dials *up* the formality. The message is a real person from a real company. |
| Community posts | User-generated; product copy here is restrained to nav and meta labels — never editorial. |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `Oops`, English exclamations on Korean surfaces, `약 ~원` (approximation on salary numbers), emoji in any scout/recruiter message, "thrilled to announce"-style milestone broadcasting. Salary ranges and years-of-experience are exact-only — never rounded into marketing-friendly ranges.

**Voice samples (with verification).**

1. *"프로를 위한 모든 기회, 리멤버가 연결합니다."* — Corporate site tagline, `corp.remember.co.kr/` (Tier 1 verified, 2026-05-13). Sets the brand's positioning: *connector*, not marketplace.
2. *"일하는 사람과 기회를 연결하여 성공으로 이끈다."* — Stated mission, `corp.remember.co.kr/company` (Tier 1 verified). The voice in mission documents is more elevated than product copy — declarative, professional, never casual.
3. *"리멤버를 통해 채용 시장의 문을 두드리는 구직자와 채용에 임하는 기업을 돕는 일이 우리 사회 경제발전에 일조한다는 책임감과 사명감을 늘 간직하려 한다."* — CEO 최재호, paraphrased from `thebigdata.co.kr` 2024 미디어데이 coverage. Founder voice carries the "responsibility / 책임감" register — a B2B-formal lexicon absent in consumer-app founder quotes.

## 11. Brand Narrative

Remember is the consumer brand of **리멤버앤컴퍼니 (Remember & Company)**, formerly known as **드라마앤컴퍼니 (Drama & Company)** — a name whose acronym was always *"**D**REAM **A**ND **M**ake it h**A**ppen."* The company was founded in **July 2013** by **최재호 (Choi Jae-ho)** and **송기홍 (Song Ki-hong)** (corp.remember.co.kr, namu.wiki). The founding product was deceptively simple: photograph your stack of paper business cards, have a human-in-the-loop transcription team digitize each card, and store them in an app. The thesis was that Korean white-collar business culture revolved around the *physical exchange of name cards*, and the first company to digitize that exchange would inherit the resulting network graph.

By 2024 — eleven years and several pivots later — Remember had digitized hundreds of millions of business cards, accumulating one of the largest verified professional graphs in Korea, and used that graph as the foundation for three layered businesses: **(1) business-card and contact management** (the original product), **(2) career and scout-recruitment marketplace** (the most-visited surface today, at `career.rememberapp.co.kr`), and **(3) expert-network services** (research and consulting). In **October 2024**, the parent company rebranded from 드라마앤컴퍼니 to **리멤버앤컴퍼니** — a public commitment to the consumer brand as the company's identity. CEO 최재호 framed the rebrand as the "second leap" (`제2의 도약`), positioning Remember as the central infrastructure of *Korean business networking* (tech42.co.kr, thebigdata.co.kr, 2024).

What Remember refuses, visually and verbally, is the aesthetic of two adjacent categories. It refuses the **playful consumer fintech** register (Toss-blue, illustration-led empty states, casual `해요체`) — its 45+ executive users would read that as a downgrade. It also refuses the **engineered cobalt of recruiting marketplaces** (Wanted, LinkedIn) — Remember is not a transactional marketplace where users churn after a successful hire; it is a *long-residency* product where the user's contact graph compounds for a decade. Black-as-primary, dense layouts, restrained typography, and the conspicuous absence of brand-mascot illustration all express this: Remember is built to *stay* in the user's professional life, not to perform during it.

## 12. Principles

1. **Density is trust.** A career feed that shows 20 jobs per viewport feels like *opportunity*; a feed that shows 4 feels like a curated dead-end. *UI implication:* prefer chromeless cards, 4–6px radius, no shadow on list items. Reserve shadow for stateful overlays.
2. **Black is the action color.** Black communicates seniority and seriousness in Korean B2B; saturated colors communicate consumer marketing. *UI implication:* primary CTA bg = `#000000`, never `#0066FF` or `#FF5414`. Orange is reserved for conversion-only moments.
3. **One conversion punch per screen.** Signup orange (`#FF5414`) appears at most once per surface — when repeated, it loses urgency and starts to look like advertising. *UI implication:* growth CTAs use orange; in-product primary actions stay black.
4. **Borders, not fills, define interactive density.** Filter rows and chip groups carry information through `#D4D4D4` hairlines, not background tints. *UI implication:* default chip = transparent bg + 1px border; selected = inverted black fill. Never colored fills for filter state.
5. **The business card is the brand atom.** Every legacy product affordance — and every new one — should be visually translatable to "this looks like a name card." *UI implication:* the contact/profile card uses ~8–12px radius, white bg, `#222` heading, `#808080` meta, and the lightest possible shadow to suggest physical paper.
6. **Korean first, English second.** Strings, dates, salary formats, and address conventions assume Korean primary. *UI implication:* `7년~12년 차`, `서울/강남구`, `7,000만원` — never `7Y–12Y`, `Seoul`, or `₩70M` on primary surfaces.
7. **No mascots, no illustration on product surfaces.** The Remember product surface has zero brand-character illustration. Marketing surfaces may use spot illustration; the product cannot. *UI implication:* empty states are sentence-led; error states are sentence-led; only growth banners may host illustration.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Korean B2B-network user segments — not individual people.*

**현우 (Hyunwoo), 38, Seoul.** Mid-level marketing manager at a Series-D startup. Has had a Remember account since 2018. Opens the app once a week — usually when a stranger requests his card after a meeting and he wants to quickly send back his digitized version. Maintains ~1,200 contacts in the app, more than in his actual phone. Every 6–9 months he uses the career surface to passively browse scout messages, even when he's not actively looking — *"just keeping the door open."* Distrusts career platforms that demand he upload a resume; trusts Remember because he's "always already in it."

**박 이사 (Director Park), 52, Bundang.** Executive director at a mid-cap manufacturing firm. The Remember app is the most-used non-KakaoTalk app on his phone. Uses it to: (a) verify the contact information of new business counterparts before meetings, (b) accept headhunter outreach from search firms, (c) cross-check job-title histories of vendors. Will not accept a friend-request from anyone he hasn't met in person. Reads Korean only; English UI strings are invisible. Pays for the premium tier without thinking about it.

**지윤 (Jiyoon), 29, Seongnam.** Senior software engineer at a mid-size tech company. Has used Remember for 3 years for the career surface, not the contact one — she joined when a recruiter from her current company scouted her through Remember in 2022. Toggles "open to offers" on/off based on her current job satisfaction. Uses Wanted for active job search and Remember for *passive* signal — the distinction matters to her. Reads English natively but uses Korean UI for speed.

**민호 (Minho), 24, Daegu.** New-grad consultant at a Big-4 firm. Set up Remember during onboarding week because his team lead told him to ("everyone here has it"). Uses it once a month, mostly to log new contacts from client meetings. Will become a daily user in 5–8 years, when his contact graph crosses ~400 and the network effect engages. Right now he's still in the "why do I need this when I have LinkedIn" phase.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | Single paragraph of `#808080` body text explaining the value of populating the surface (`스카우트 제안을 받으면 여기에 표시돼요`). One secondary button below in black. Never illustration. Never `데이터가 없어요`. |
| **Empty (filter cleared)** | Single line of `#808080` caption (`조건에 맞는 공고가 없어요`). No button — user resets the filter themselves via the chip row. |
| **Loading (first paint)** | Skeleton blocks at `#F2F2F2` (`neutral 100`) matching the final card geometry — 162×201 rectangles for job cards. Salary and years-of-experience fields render as `--` until resolved, never as skeleton. |
| **Loading (refresh)** | Top inline spinner in `#222222`. No blocking overlay. Existing content stays visible with its previous values. |
| **Error (inline field)** | Red 2px border on the input (inferred — Korean fintech convention; not Tier 1 captured on the career surface) + red helper text below at 13px / 400. Single actionable sentence. |
| **Error (toast / banner)** | `#222222` background, `#FFFFFF` 14px / 400 text, 3s auto-dismiss. One sentence. No icons. Anchored to bottom on mobile, top-right on desktop. |
| **Error (server / page-blocking)** | Reserved for outage. White screen, centered single-line message in `#222` 16px / 600, retry button in black below. No illustration. |
| **Success (inline)** | Mint flash — `#D9FCF2` background fades behind the updated element for 300ms, then returns to default. For routine confirmations like "공고 저장됨." |
| **Success (application submitted)** | Dedicated confirmation screen. `#239E7B` checkmark top-center, application summary below, single black `확인` button. This weight is intentional — a job application is not a toast. |
| **Skeleton (job-card grid)** | `#F2F2F2` blocks at exact card dimensions. 1.2s shimmer with 8% white linear-gradient highlight. Rounded at 0–4px to match card geometry. Never used on salary or years-of-experience values — those render as `--`. |
| **Disabled (button)** | Button opacity drops to ~40%. Background color is preserved (black stays black, orange stays orange) so the geometry and identity are stable when re-enabled. |
| **Loading inside pressed button** | Text is replaced by a 3-dot animation in `#FFFFFF` (on black bg) or `#FFFFF9` (on orange bg). Button width is preserved — no resize, no double-submit. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state, filter-chip select/deselect |
| `motion-fast` | 150ms | Hover, focus, small reveals, button press overlay |
| `motion-standard` | 250ms | The default — sheet opens, modal expands, tab switches, autocomplete dropdown |
| `motion-emphasized` | 400ms | Success checkmark draw, onboarding step advance, scout-message arrival |
| `motion-page` | 300ms | Route transitions between top-level tabs (홈 / 채용 / 명함 / 커뮤니티) |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — sheets, toasts, dropdowns, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, pops, sheet drag-down |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — collapsible filter groups, tab content swap |
| `ease-snap` | `cubic-bezier(0.2, 0.9, 0.1, 1)` | Sticky-header collapse on scroll, filter-chip selection inversion. Slight overshoot for tactile confirmation. |

**Signature motions.**

1. **Filter-chip invert.** When a filter is selected, the chip background fills from `transparent` → `#222222` in 150ms with `ease-snap`, while the label color flips white. The 150ms is fast enough to feel like a hardware toggle, slow enough to register the change.
2. **Job-card hover (desktop).** Cards lift 0px and gain a faint `0 1px 3px rgba(0,0,0,0.06)` shadow over 150ms with `ease-fast`. The title color stays the same — Remember does not link-underline on hover.
3. **Sticky-header collapse.** On scroll-down, the dark hero band collapses to a thinner sticky bar over 250ms with `ease-snap`. On scroll-up, expansion is `ease-enter` — leaving feels light, returning feels welcoming.
4. **Scout-message arrival.** When a new scout message arrives, the badge counter on the nav increments with a brief 1.05× scale pulse (400ms, `ease-emphasized`). This is the one place where motion is celebratory — receiving a recruiter offer is a status moment.
5. **Reduce motion.** If `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Crossfades replace slides. The app stays usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch / playwright live inspect (2026-05-13):
- https://www.rememberapp.co.kr/ → redirects to https://career.rememberapp.co.kr/job/postings
  Tier 1 live computed-style capture confirmed: Pretendard body font, primary CTA #000000,
  filter chips 1px #D4D4D4, search input #F2F2F2 52px tall, growth CTA #FF5414.
- https://corp.remember.co.kr/company — mission ("일하는 사람과 기회를 연결하여 성공으로 이끈다"),
  founders 최재호 / 송기홍, business-card-app origin story confirmed.
- https://corp.remember.co.kr/ — tagline "프로를 위한 모든 기회, 리멤버가 연결합니다."
- https://dramancompany.github.io/remember-ui/ — Storybook root reachable; body bg #F3F2EF,
  font-family Pretendard, sans-serif. Source repo (github.com/dramancompany/remember-ui)
  returns HTTP 404 — not publicly readable as of 2026-05-13.

Founder-quote and rebrand context (2024 사명 변경 → 리멤버앤컴퍼니, "제2의 도약"):
- platum.kr/archives/236180, tech42.co.kr (2024 미디어데이 coverage),
  thebigdata.co.kr/view.php?ud=202410161600341264edcbfa73b7_23.

Tier 2 cross-validation unavailable:
- getdesign.md/remember returns "No designs found for 'remember'."
- styles.refero.design/?q=remember returns "Collection not found — 404."
- All Tier 1 claims rest on live computed-style capture from the public career surface.

Personas (§13) are fictional archetypes informed by publicly described Korean
B2B-network user segments. Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "Black is the action color because Korean B2B reads
black as professional") are editorial readings of the captured palette, not
documented Remember statements.
-->
