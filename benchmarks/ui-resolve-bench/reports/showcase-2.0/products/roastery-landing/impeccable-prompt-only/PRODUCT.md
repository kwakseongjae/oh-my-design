# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (single page, no build step, no network). Specified by the original request; stack question was not re-asked because the brief already locked it.

## Users

**Inferred (interview probe returned no user):** primary visitors are curious specialty-coffee drinkers who already brew or cafe-hop and want to sit a cupping — not wholesale buyers, not people booking a cafe table. They arrive on a phone or laptop to decide whether to reserve a seat at the table.

Secondary (inferred, not served by the primary action): people who want to understand how the roastery works before visiting.

## Product Purpose

A one-page landing surface for a specialty coffee roastery. Success is a visitor understanding what this place is (a working mill that hosts cuppings) and completing **Reserve a cupping seat** through a real reservation form.

## Positioning

**Inferred:** the offer is a seat at the cupping table — the same ritual used to evaluate lots — not a cafe reservation, not a tasting-flight upsell, and not a wholesale line card.

## Operating Context

The roastery is shown as a working loft: drum roaster, green-bean sacks, pour-over, and a small sitting corner. Cupping is a seated, guided tasting of roasted lots. The page must work fully offline. Activating the primary action opens a small reservation form with real fields. Reservations cannot be transmitted (no network); the form must not pretend a remote booking succeeded.

## Capabilities and Constraints

- Single-page landing; no build step; no network requests of any kind (no webfonts, no analytics, no form endpoints, no hot-linked assets).
- Primary action: **Reserve a cupping seat**. It must open a small reservation form with real fields (identity, contact, date preference, party size, and a notes field at minimum).
- Imagery is limited to the four files in `./assets/` (`hero.jpg`, `story-beans.jpg`, `story-brew.jpg`, `story-space.jpg`). Do not generate or hot-link any other imagery. Every image must have explicit width and height.
- Project-owned design system with motion tokens. Entrance fade-up on major sections, hover elevation on cards, pressed state on the CTA — all behind `prefers-reduced-motion`.
- Modern, editorial aesthetic (brief-pinned visual constraint; not expanded here).
- Do not invent prices, awards, review scores, or partner logos. Unpublished facts (hours, street address, menu, scores, partners) must be stated as unpublished.
- Generated files and temporary validation artifacts stay inside the current workspace (`.benchmark/tmp` when needed). Do not read or write external paths including `/tmp`. Do not launch or control browsers; the external evaluator owns browser checks.

**Undecided / unpublished (do not fabricate):** legal business name, street address, opening hours, cupping calendar, prices, capacity, accessibility of the physical space, roast list, retail/wholesale channels, contact email/phone.

## Brand Commitments

**Inferred name (no published name in the repo):** **Sash Mill** — a working-loft specialty roastery. Voice is precise, unhurried, and honest: describe the ritual and the room; do not hype.

Binding visual constraint from the request: modern editorial, restrained micro-transitions.

## Evidence on Hand

Provided photographs (warm muted film, no overlaid text):

- `assets/hero.jpg` — loft interior, sage-green drum roaster, factory sash windows, burlap sacks of green coffee (visible lot marks include Guatemala, Ethiopia, Colombia). 1280×720.
- `assets/story-beans.jpg` — roasted beans spilling from a wooden scoop onto a worn wood counter. 1248×832.
- `assets/story-brew.jpg` — hands pouring a gooseneck kettle into a ceramic dripper; steam; no faces. 1248×832.
- `assets/story-space.jpg` — peach plaster corner, linen chairs, oak table, sage shelf of jars. 1248×832.

**Must not fabricate:** prices, awards, review scores, partner logos, testimonials, press quotes, customer names, published hours, maps, or any third-party mark.

## Product Principles

1. The cupping seat is the product; everything else explains why that seat is worth taking.
2. Honesty is part of the offer — unpublished facts stay unpublished, labeled as such.
3. Proof is the room and the ritual in the four photographs, not claims.
4. The page must work as a complete offline artifact.
5. Motion is a courtesy, never a requirement; reduced-motion visitors get the same information.

## Accessibility & Inclusion

No product-specific legal standard was established. Treat WCAG-minded semantics, keyboard access to the reservation form, visible focus, labeled fields, and `prefers-reduced-motion` as required by the brief. Physical-space accessibility is unpublished.
