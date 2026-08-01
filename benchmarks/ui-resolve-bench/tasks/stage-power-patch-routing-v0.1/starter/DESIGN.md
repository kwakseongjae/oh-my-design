---
omd: 0.1
brand: Circuitline
status: fictional benchmark fixture
---

# Circuitline Design Contract

## 1. Visual Theme & Atmosphere
Circuitline is a precise backstage routing surface. One patch-board schematic keeps supplied circuits, outlets, loads, selected bank, reversible isolation setting, and final review boundary legible without implying energization or electrical approval.

## 2. Color Palette & Roles
- `page` `#F1F0EC`; `surface` `#FFFFFF`; `ink` `#1E2421`; `muted` `#656862`; `line` `#C7C4BA`; `route` `#233730`; `attention` `#B24D34`.
- No gradients, glow, glass, decorative accent borders, or invented status colors.

## 3. Typography Rules
- UI/body: `Arial`, sans-serif. Display: `Georgia`, serif.
- Hero 46/50 desktop, 32/36 mobile, weight 400. Body 15/24. Label 11/16, weight 700, tracking 0.05em.

## 4. Component Stylings
- Patch board: 0px radius, 1px ring, no shadow. Controls: 2px radius, 44px minimum height.
- Circuit, outlet, and load nodes remain one coherent routing schematic, not independent decorative cards.

## 5. Layout Principles
- Maximum width 1100px. Space scale: 4, 8, 12, 16, 24, 32, 48, 64.
- Desktop uses source and destination nodes joined by a visible route line. Mobile reflows each supplied patch into an ordered full-width path row while preserving circuit, outlet, and load relationships.
- Compact controls move below their full-width label. No page horizontal scroll at 320px or wider.

## 6. Depth & Elevation
Use surface contrast and 1px lines. Focus uses a 3px route outline. No diffuse shadow.

## 7. Do's and Don'ts
- Preserve supplied facts exactly. Keep settings reversible. Never invent energization, approval, safety, capacity, or availability outcomes.

## 8. Responsive Behavior
- Reflow before text clips. Atomic circuit, outlet, load, count, and short-control values remain one line. Never make one text node horizontally scrollable. Preserve patch relationships and decision hierarchy at 200%.

## 9. Agent Prompt Guide
Improve hierarchy and narrow-screen reading order without changing the product contract.

## 10. Voice & Tone
Calm, exact, operational. Avoid seamless, intelligent, perfect, guaranteed, and electrical theatre.

## 11. Brand Narrative
[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles
1. Keep supplied patches visible. 2. Preserve circuit-to-load relationships. 3. Make the final routing boundary explicit.

## 13. Personas
[FILL IN — no persona facts are provided.]

## 14. States
Bank and isolation controls update `aria-pressed`; invalid input focuses and announces; valid input announces routing readiness only.

## 15. Motion & Easing
120ms/180ms ease-out; disable nonessential motion under reduced motion.
