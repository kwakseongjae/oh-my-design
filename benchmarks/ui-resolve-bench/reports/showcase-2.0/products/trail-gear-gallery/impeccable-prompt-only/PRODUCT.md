# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS — single page, no build step, no network (explicit brief)

## Users

**Inferred from brief** (interview probe returned no operator): a visitor browsing a trail-gear rental catalog to compare sample kits before asking a shop about a trip. Not staff, not a live booking flow.

## Product Purpose

A single-page rental gallery: filter items by category, select one card to read its detail, and leave knowing this is sample catalog data with unpublished rental stock. Success is finding the right sample item and understanding how to ask about real availability.

## Positioning

An honest sample rental wall: the six provided product photos are the catalog, and unpublished stock is said where a visitor would look for a count. Neighboring rental sites invent “in stock” numbers; this one does not.

## Operating Context

Offline static page. Interaction is filter → card → named detail panel. Keyboard and pointer both reach selection. Evaluation is visual and accessibility-oriented, not transactional.

## Capabilities and Constraints

- Filter the six items by category.
- Select one card; the selection is keyboard-reachable and exposes `aria-selected` plus a named dialog or region.
- Detail view includes an honest availability note: rental stock counts are not published.
- Card motion: hover tilt/elevation and staggered entrance, gated by `prefers-reduced-motion`.
- Every item is labeled sample data.
- Gallery cards use only the six images in `./assets/` with explicit dimensions; no other imagery in the product.
- Project-owned design system with motion tokens.
- No live booking, cart, or published prices. **Inferred:** do not invent rates or stock numbers.
- **Undecided (brief-silent):** shop legal name, location, hours, pickup rules, deposit policy.

## Brand Commitments

No existing name, logo, or voice guide. Working title used in the product: **Trail Gear Rentals** (**inferred**, descriptive, not a larger invented brand). Voice stays factual: sample labels and unpublished-stock language are binding.

## Evidence on Hand

Six studio product photos (and only these) in `./assets/`:

- `item-tent.jpg` — compact two-person hiking tent, olive green
- `item-pack.jpg` — 45L hiking backpack, rust orange
- `item-stove.jpg` — small titanium camping stove with folded legs
- `item-poles.jpg` — pair of collapsible trekking poles
- `item-lantern.jpg` — compact rechargeable camping lantern
- `item-bag.jpg` — rolled sleeping bag in deep teal

Source notes: `assets/assets-manifest.json`. No testimonials, prices, locations, reviews, or live inventory. Future work must not fabricate those.

## Product Principles

1. The six photos are the catalog; chrome does not replace them.
2. Sample data is labeled where a visitor could take it as live.
3. Availability is honest: unpublished stock is stated, not implied.
4. Selection is a first-class, keyboard-reachable state, not hover-only.
5. Motion supports finding and focusing; it yields to reduced-motion.

## Accessibility & Inclusion

Keyboard-reachable card selection; selected card uses `aria-selected`; detail surface is a named dialog or region. Honor `prefers-reduced-motion` for tilt, elevation, and staggered entrance.
