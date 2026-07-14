---
id: ably
name: Ably
display_name_kr: Ably (에이블리)
country: KR
category: ecommerce
homepage: "https://m.a-bly.com"
primary_color: "#ff5160"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=a-bly.com&sz=128"
verified: "2026-07-12"
omd: "0.1"
ds:
  name: ABLY Team
  url: "https://ably.team/"
  type: brand
  description: ABLY's official mission, company, product-evolution, and culture surface; consumer app and Seller Square remain separate UI evidence domains.
verification_v2:
  schema: 2
  checked: "2026-07-12"
  surfaces:
    - { id: consumer, kind: mobile-consumer, url: "https://m.a-bly.com/", inspected: "2026-07-12" }
    - { id: team, kind: corporate-brand, url: "https://ably.team/", inspected: "2026-07-12" }
    - { id: seller, kind: seller-platform, url: "https://square.a-bly.com/", inspected: "2026-07-12" }
  sources:
    - { id: consumer-live, kind: product-surface, url: "https://m.a-bly.com/", captured: "2026-07-12" }
    - { id: team-live, kind: official-doc, url: "https://ably.team/", captured: "2026-07-12" }
    - { id: seller-live, kind: product-surface, url: "https://square.a-bly.com/", captured: "2026-07-12" }
    - { id: product-story, kind: official-doc, url: "https://ably.team/news/ZS8_IREAACIAr50Y", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.primary": &team_evidence { surface_id: team, source_id: team-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": &consumer_evidence { surface_id: consumer, source_id: consumer-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.foreground": *consumer_evidence
    "tokens.colors.consumer-secondary": *consumer_evidence
    "tokens.colors.team-secondary": *team_evidence
    "tokens.colors.seller-body": &seller_evidence { surface_id: seller, source_id: seller-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.consumer-border": *consumer_evidence
    "tokens.colors.platform-border": *team_evidence
    "tokens.colors.team-accent-surface": *team_evidence
    "tokens.typography.family.consumer": *consumer_evidence
    "tokens.typography.family.corporate": *team_evidence
    "tokens.typography.family.seller": *seller_evidence
    "tokens.typography.consumer-label.size": *consumer_evidence
    "tokens.typography.consumer-label.weight": *consumer_evidence
    "tokens.typography.consumer-label.lineHeight": *consumer_evidence
    "tokens.typography.consumer-label.tracking": *consumer_evidence
    "tokens.typography.consumer-label.use": *consumer_evidence
    "tokens.typography.consumer-compact.size": *consumer_evidence
    "tokens.typography.consumer-compact.weight": *consumer_evidence
    "tokens.typography.consumer-compact.lineHeight": *consumer_evidence
    "tokens.typography.consumer-compact.tracking": *consumer_evidence
    "tokens.typography.consumer-compact.use": *consumer_evidence
    "tokens.typography.consumer-meta.size": *consumer_evidence
    "tokens.typography.consumer-meta.weight": *consumer_evidence
    "tokens.typography.consumer-meta.lineHeight": *consumer_evidence
    "tokens.typography.consumer-meta.use": *consumer_evidence
    "tokens.typography.corporate-display.size": *team_evidence
    "tokens.typography.corporate-display.weight": *team_evidence
    "tokens.typography.corporate-display.lineHeight": *team_evidence
    "tokens.typography.corporate-display.tracking": *team_evidence
    "tokens.typography.corporate-display.use": *team_evidence
    "tokens.typography.corporate-section.size": *team_evidence
    "tokens.typography.corporate-section.weight": *team_evidence
    "tokens.typography.corporate-section.lineHeight": *team_evidence
    "tokens.typography.corporate-section.tracking": *team_evidence
    "tokens.typography.corporate-section.use": *team_evidence
    "tokens.typography.corporate-card.size": *team_evidence
    "tokens.typography.corporate-card.weight": *team_evidence
    "tokens.typography.corporate-card.lineHeight": *team_evidence
    "tokens.typography.corporate-card.tracking": *team_evidence
    "tokens.typography.corporate-card.use": *team_evidence
    "tokens.typography.corporate-body.size": *team_evidence
    "tokens.typography.corporate-body.weight": *team_evidence
    "tokens.typography.corporate-body.lineHeight": *team_evidence
    "tokens.typography.corporate-body.tracking": *team_evidence
    "tokens.typography.corporate-body.use": *team_evidence
    "tokens.typography.seller-body.size": *seller_evidence
    "tokens.typography.seller-body.weight": *seller_evidence
    "tokens.typography.seller-body.lineHeight": *seller_evidence
    "tokens.typography.seller-body.use": *seller_evidence
    "tokens.spacing.xs": *consumer_evidence
    "tokens.spacing.sm": *consumer_evidence
    "tokens.spacing.md": *team_evidence
    "tokens.spacing.lg": *team_evidence
    "tokens.spacing.xl": *team_evidence
    "tokens.rounded.corporate-control": *team_evidence
    "tokens.rounded.pill": *team_evidence
    "tokens.rounded.consumer-action": *consumer_evidence
    "tokens.rounded.full": *seller_evidence
    "tokens.shadow.corporate-card": *team_evidence
    "tokens.components.consumer-open-app.type": *consumer_evidence
    "tokens.components.consumer-open-app.bg": *consumer_evidence
    "tokens.components.consumer-open-app.fg": *consumer_evidence
    "tokens.components.consumer-open-app.border": *consumer_evidence
    "tokens.components.consumer-open-app.radius": *consumer_evidence
    "tokens.components.consumer-open-app.padding": *consumer_evidence
    "tokens.components.consumer-open-app.size": *consumer_evidence
    "tokens.components.consumer-open-app.font": *consumer_evidence
    "tokens.components.consumer-open-app.states": *consumer_evidence
    "tokens.components.consumer-open-app.use": *consumer_evidence
    "tokens.components.corporate-primary.type": *team_evidence
    "tokens.components.corporate-primary.bg": *team_evidence
    "tokens.components.corporate-primary.fg": *team_evidence
    "tokens.components.corporate-primary.radius": *team_evidence
    "tokens.components.corporate-primary.size": *team_evidence
    "tokens.components.corporate-primary.font": *team_evidence
    "tokens.components.corporate-primary.states": *team_evidence
    "tokens.components.corporate-primary.use": *team_evidence
    "tokens.components.corporate-soft-action.type": *team_evidence
    "tokens.components.corporate-soft-action.bg": *team_evidence
    "tokens.components.corporate-soft-action.fg": *team_evidence
    "tokens.components.corporate-soft-action.radius": *team_evidence
    "tokens.components.corporate-soft-action.size": *team_evidence
    "tokens.components.corporate-soft-action.font": *team_evidence
    "tokens.components.corporate-soft-action.states": *team_evidence
    "tokens.components.corporate-soft-action.use": *team_evidence
    "tokens.components.corporate-pill.type": *team_evidence
    "tokens.components.corporate-pill.bg": *team_evidence
    "tokens.components.corporate-pill.fg": *team_evidence
    "tokens.components.corporate-pill.radius": *team_evidence
    "tokens.components.corporate-pill.padding": *team_evidence
    "tokens.components.corporate-pill.size": *team_evidence
    "tokens.components.corporate-pill.font": *team_evidence
    "tokens.components.corporate-pill.states": *team_evidence
    "tokens.components.corporate-pill.use": *team_evidence
    "tokens.components.corporate-card.type": *team_evidence
    "tokens.components.corporate-card.bg": *team_evidence
    "tokens.components.corporate-card.fg": *team_evidence
    "tokens.components.corporate-card.radius": *team_evidence
    "tokens.components.corporate-card.shadow": *team_evidence
    "tokens.components.corporate-card.use": *team_evidence
    "tokens.components.seller-primary.type": *seller_evidence
    "tokens.components.seller-primary.bg": *seller_evidence
    "tokens.components.seller-primary.fg": *seller_evidence
    "tokens.components.seller-primary.radius": *seller_evidence
    "tokens.components.seller-primary.padding": *seller_evidence
    "tokens.components.seller-primary.size": *seller_evidence
    "tokens.components.seller-primary.font": *seller_evidence
    "tokens.components.seller-primary.states": *seller_evidence
    "tokens.components.seller-primary.use": *seller_evidence
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Fresh consumer mobile web, ABLY Team, and Seller Square capture. Each evidence domain keeps its own font and component roles; native-app commerce patterns are not inferred from brand or seller surfaces."
  colors:
    primary: "#ff5160"
    canvas: "#ffffff"
    foreground: "#1f1f1f"
    consumer-secondary: "#777777"
    team-secondary: "#757575"
    seller-body: "#5b5b5b"
    consumer-border: "#dddddd"
    platform-border: "#e5e7eb"
    team-accent-surface: "#fff2ea"
  typography:
    family: { consumer: "Pretendard", corporate: "Pretendard", seller: "Noto Sans Korean" }
    consumer-label: { size: 16, weight: 600, lineHeight: 1.25, tracking: -0.4, use: "Current mobile consumer labels" }
    consumer-compact: { size: 12, weight: 600, lineHeight: 1.33, tracking: -0.2, use: "Current mobile web compact action" }
    consumer-meta: { size: 11, weight: 400, lineHeight: 1.27, use: "Current mobile consumer metadata" }
    corporate-display: { size: 48, weight: 600, lineHeight: 1.33, tracking: -0.3, use: "Current ABLY Team display heading" }
    corporate-section: { size: 40, weight: 600, lineHeight: 1.4, tracking: -0.3, use: "Current ABLY Team repeated section heading" }
    corporate-card: { size: 24, weight: 600, lineHeight: 1.33, tracking: -0.3, use: "Current ABLY Team card heading" }
    corporate-body: { size: 16, weight: 400, lineHeight: 1.5, tracking: -0.3, use: "Current ABLY Team body and card copy" }
    seller-body: { size: 16, weight: 400, lineHeight: 1.6, use: "Current Seller Square body and navigation text" }
  spacing: { xs: 8, sm: 10, md: 16, lg: 24, xl: 32 }
  rounded: { corporate-control: 12, pill: 24, consumer-action: 20, full: 9999 }
  shadow:
    corporate-card: "0 4px 48px rgba(0,0,0,0.08)"
  components_harvested: true
  components:
    consumer-open-app: { type: button, bg: "#ffffff", fg: "#1f1f1f", border: "1px solid #dddddd", radius: "20px", padding: "0 8px", size: "62px x 28px", font: "12px / 600", states: "default baseline captured; no hover or pressed value promoted", use: "Current mobile web compact app-entry action" }
    corporate-primary: { type: button, bg: "#ff5160", fg: "#ffffff", radius: "12px", size: "160px x 56px", font: "18px / 600", states: "default baseline captured", use: "Current ABLY Team primary action" }
    corporate-soft-action: { type: button, bg: "#fff2ea", fg: "#ff5160", radius: "12px", size: "312px x 48px", font: "16px / 600", states: "default baseline captured", use: "Current ABLY Team low-emphasis action" }
    corporate-pill: { type: button, bg: "#ffffff", fg: "#4e4e4e", radius: "24px", padding: "14px 16px", size: "105px x 48px", font: "16px / 400", states: "default baseline captured", use: "Current ABLY Team compact editorial action" }
    corporate-card: { type: card, bg: "#ffffff", fg: "#1f1f1f", radius: "12px", shadow: "0 4px 48px rgba(0,0,0,0.08)", use: "Current ABLY Team mission or story card" }
    seller-primary: { type: button, bg: "#ff5160", fg: "#ffffff", radius: "9999px", padding: "13px 30px", size: "114px x 49px", font: "14px / 400", states: "default baseline captured", use: "Current Seller Square primary entry action" }
---

# Design System Inspiration of Ably (에이블리)

## 1. Visual Theme & Atmosphere

ABLY is a Korean style-commerce platform organized around personal taste, discovery, and the connection between consumers and sellers. Its official product story describes an AI-personalized commerce experience that expanded beyond fashion into beauty, home, stationery, food, and community/content. The current company mission frames this more broadly as expanding style commerce and a chain platform globally: people should be able to discover, buy, make, and sell styles with lower friction. Personalization and an accessible seller ecosystem are presented as two connected sides of that next-commerce direction.

The current public ecosystem has three visibly different surfaces. The consumer mobile web is narrow and app-directed, using a Next.js-loaded Pretendard alias, dense 11–16px type, white, `#1f1f1f`, and a compact 28px app-entry action. ABLY Team is a large editorial brand and recruiting surface with Pretendard, 40–48px headings, wide story cards, pale peach accent panels, and `#ff5160` actions. Seller Square uses Noto Sans Korean and its own information architecture for onboarding, market operations, advertising, guides, and global expansion.

The stable cross-surface signal is the current coral-pink `#ff5160`, not the older `#fa2e5f` snapshot. Even this shared color does not make the component systems interchangeable. A Seller Square pill, an ABLY Team recruiting CTA, and a native consumer purchase button are three different claims. The current public capture verifies the first two and only a compact app-entry action on mobile web; native shopping cards, price stacks, checkout actions, bottom navigation, badges, and sheets remain absent.

**Key Characteristics:**
- Current coral-pink `#ff5160` across consumer/corporate/seller identity moments
- Consumer mobile web: dense Pretendard, 11–16px type, app-directed entry
- ABLY Team: editorial Pretendard, 40–48px headings, story cards, 12–24px control geometry
- Seller Square: Noto Sans Korean and full-pill onboarding actions
- Personal taste and recommendation as the consumer narrative
- Seller/user ecosystem and global chain-platform expansion as the company narrative
- Strict separation of consumer web, native app, corporate, and seller evidence

## 2. Color Palette & Roles

- **Current ABLY coral** (`#ff5160`): live identity/action color across current official surfaces.
- **Canvas** (`#ffffff`) and **foreground** (`#1f1f1f`): current consumer and corporate base.
- **Consumer secondary** (`#777777`): current mobile-web supporting text.
- **Team secondary** (`#757575`): current company/editorial supporting copy.
- **Seller body** (`#5b5b5b`): current Seller Square explanatory text.
- **Consumer border** (`#dddddd`): compact mobile-web action outline.
- **Platform border** (`#e5e7eb`): repeated Team and Seller Square boundary.
- **Team accent surface** (`#fff2ea`): current pale peach corporate action surface.

Older hot-deal pink, discount red, shipping mint, success, error, link, tab, and native surface colors are omitted. A yellow Seller Square campaign action was captured as a local promotion, not a canonical ABLY semantic color.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Consumer mobile web establishes Pretendard; ABLY Team establishes Pretendard; Seller Square establishes Noto Sans Korean. |
| Live surface-use | `__Pretendard_a4ae19` loaded/high with 85 consumer uses; Pretendard loaded/high with 117 corporate uses; Noto Sans Korean loaded/high with 119 seller uses. |
| Official distributed asset | Pretendard is loaded from first-party and public distribution paths; Noto Sans Korean is delivered on Seller Square. Neither is an ABLY-exclusive font. |
| Declared-only | Pretendard fallback, Black Tie, Font Awesome, Glyphicons, and other vendor icon families had zero visible text use. |
| Unresolved | Native iOS/Android consumer typography and campaign-specific type remain unresolved. |

| Domain/role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Consumer label | Pretendard | 16px | 600 | 20px | -0.4px |
| Consumer compact action | Pretendard | 12px | 600 | 16px | -0.2px |
| Consumer metadata | Pretendard | 11px | 400 | 14px | normal |
| Team display | Pretendard | 48px | 600 | 64px | -0.3px |
| Team section | Pretendard | 40px | 600 | 56px | -0.3px |
| Team card title | Pretendard | 24px | 600 | 32px | -0.3px |
| Team body | Pretendard | 16px | 400 | 24px | -0.3px |
| Seller body | Noto Sans Korean | 16px | 400 | 25.6px | normal |

Do not render Noto Sans Korean as the consumer app font or Pretendard as Seller Square truth. Surface ownership matters more than visual similarity.

## 4. Component Stylings

### Consumer mobile web

#### Compact app-entry action
- White / `#1f1f1f`, 1px `#dddddd`, 20px radius
- 62×28px, `0 8px`, Pretendard 12px/600
- Only the default baseline was captured; no native purchase meaning is attached

### ABLY Team

#### Primary action
- `#ff5160` / white, 12px radius, 160×56px, Pretendard 18px/600

#### Soft action
- `#fff2ea` / `#ff5160`, 12px radius, 312×48px, 16px/600

#### Editorial pill
- White / `#4e4e4e`, 24px radius, 105×48px, `14px 16px`, 16px/400

#### Story card
- White / near-black, 12px radius
- `0 4px 48px rgba(0,0,0,.08)` shadow; used for mission/story compositions

### Seller Square

#### Primary entry action
- `#ff5160` / white, full-pill, 114×49px, `13px 30px`
- Noto Sans Korean 14px/400

Native consumer product cards, price stacks, shipping/deal badges, filters, checkout CTAs, bottom tabs, bottom sheets, dialogs, and transactional states are absent until an inspectable native surface verifies them.

## 5. Layout Principles

- Keep consumer mobile web compact and direct users toward the full app without pretending it is the app.
- Use large editorial sections and paired story cards on ABLY Team.
- Use Seller Square's own content density and onboarding hierarchy for seller tasks.
- Share `#ff5160` as identity, not as proof of identical control geometry.
- Let product imagery and taste categories carry consumer variety; do not fabricate their layout from memory.

## 6. Depth & Elevation

Consumer mobile web and Seller Square promoted controls are flat. ABLY Team uses a specific large-card shadow (`0 4px 48px rgba(0,0,0,.08)`) on 12px story cards. That corporate editorial shadow is not a native commerce sheet token.

## 7. Do's and Don'ts

### Do
- Use current `#FF5160` and name the surface that gives a component its role.
- Keep consumer, corporate, and seller font evidence separate.
- Preserve ABLY's taste-discovery, personalization, and seller-ecosystem narrative.
- Omit native details until an inspectable native path exists.

### Don't
- Do not restore the older `#FA2E5F` as current primary without new proof.
- Do not infer purchase buttons, deal badges, price typography, tabs, or sheets from commerce convention.
- Do not show Noto Sans Korean as the consumer product font.
- Do not turn ABLY Team recruiting cards into consumer product cards.

## 8. Responsive Behavior

The consumer surface is explicitly mobile web and uses compact type/actions. ABLY Team reflows large editorial stories and card compositions. Seller Square has its own desktop-oriented seller information hierarchy. Native-app safe areas, bottom navigation, checkout keyboards, and product-grid breakpoints remain unresolved.

## 9. Agent Prompt Guide

> Build only the verified ABLY surface: use `#ff5160`, white, and `#1f1f1f`; Pretendard for consumer/Team or Noto Sans Korean for Seller Square; apply the exact domain-specific component geometry above. For native shopping UI, omit unverified cards, price stacks, badges, tabs, and checkout controls.

## 10. Voice & Tone

ABLY's official voice is energetic, friendly, and direct. Consumer and product stories emphasize discovering one's taste quickly; seller content emphasizes starting and operating a market easily; company content speaks in terms of next commerce, ecosystem, and expansion. Category or community copy can be playful, but transactional language should state price, choice, or next action without manufactured urgency. Seller guidance should distinguish onboarding, operations, advertising, and global expansion. Keep Korean copy conversational but task-clear. Avoid invented discounts, conversion claims, urgency phrases, and seller-growth numbers.

## 11. Brand Narrative

ABLY began as a personalized style-commerce experience and expanded its concept of taste beyond fashion into beauty, life, food, content, and community. The company connects that consumer discovery layer to a seller and production/distribution ecosystem, then frames global expansion through style commerce and a chain platform. The visual system mirrors that ecosystem: a shared coral identity with different tools for consumers, company storytelling, and sellers. Consumer value comes from a feed and discovery experience shaped by taste; seller value comes from easier onboarding, operations, distribution, and access to audiences. ABLY Team explains the mission and culture that connect those sides, while Seller Square turns the seller relationship into a separate operational surface. The shared color signals one company, but the different typography and geometry reveal genuinely different tasks.

## 12. Principles

1. **Start from taste.** Discovery should adapt to what a person is trying to express or find.
2. **Connect both sides of commerce.** Consumer ease and seller opportunity are related, not identical interfaces.
3. **Move quickly without inventing truth.** Fast commerce language cannot excuse unsupported UI claims.
4. **Respect surface ownership.** Mobile web, native app, company, and seller systems have distinct evidence.

## 13. Personas

First-party material establishes task contexts only:
- A consumer discovering and purchasing products aligned with personal taste.
- A seller evaluating onboarding, market operations, advertising, or global expansion.
- A candidate or partner learning about ABLY's mission, culture, and platform direction.

Project-specific names, ages, spending, seller revenue, category preference, conversion rate, and success metrics are intentionally unspecified and must come from the product brief.

## 14. States

This baseline-only run establishes default components but no reusable consumer hover, focus, pressed, loading, empty, cart, payment, order-success, or error state. Those states remain absent. Default-only boundaries are explicit in machine components.

## 15. Motion & Easing

No reusable duration or easing curve is promoted. The current capture did not establish native app motion or a cross-domain animation system.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://m.a-bly.com/ ; https://ably.team/ ; https://square.a-bly.com/ ; https://ably.team/news/ZS8_IREAACIAr50Y
**Tier 2 attempts:** getdesign.md had no reliable ABLY consumer record; Refero produced no authoritative current ABLY surface
**Conflicts unresolved:** none
