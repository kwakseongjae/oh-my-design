# Theme - Grid

Swiss neo-grotesque systems design: the object-poster and transit-signage school, executed on a **near-white cool sheet with an exposed 12-column hairline grid, one heavy grotesk, and exactly one signal ink spent entirely on geometry**. Giant lowercase Archivo slams to the left margin, the column rules stay visible behind the content, and every section carries a constructed object: a plate, a figure, a giant numeral, a mark from the kit. It reads like a wayfinding manual a poster designer got hold of: rational, gridded, and unafraid of one loud move per band.

The material, in one line: **a visible column grid, one grotesk, one signal ink, and geometry doing the talking.**

> **The editorial exception.** The editorial cluster is otherwise serif-led (Newsprint, Editorial, Specimen). Grid is its Swiss neo-grotesque slot: no serif anywhere, structure carried by an exposed grid and hairlines, warmth carried by one signal ink. A brief wanting a roman serif or a soft column is a different editorial theme.

## Axes (diversification)

- **Paper band** - **light**, cool near-white (`--color-paper: oklch(99% 0.003 255)`, faintly cool, never `#fff`). Stepped at `paper-2 97.2%` and `paper-3 94.5%`. Ink is cool near-black `--color-ink: oklch(16% 0.010 255)`.
- **Display style** - **grotesk-heavy** (Archivo **800**, `--display-weight: 800`), run **lowercase** at `--tracking-display: -0.045em`. Heavy plus lowercase is the differentiator against every uppercase-condensed and serif option.
- **Accent hue** - **the signal ink, exactly one per page**, picked to the brief's temperature:
  - **signal red** `oklch(55% 0.21 28)` - the default; cultural, editorial, civic.
  - **ultramarine** `oklch(45% 0.19 264)` - technical, institutional, engineering.
  - **signal yellow** `oklch(82% 0.17 95)` - industrial, archive, logistics. Yellow is **surface-only**: it floods plates and fills marks, always carrying ink text or sitting beside ink; yellow type on paper never happens at any size.

  Two Grid pages built in the same run must not share the ink. `--color-focus` is the chosen ink (for yellow, focus is ink on a yellow fill).

## Reference register

Vitra, Braun, the Vignelli canon, Museum fur Gestaltung, the Swiss International poster tradition and its object posters. The material to match: the institutional identity manual crossed with the exhibition poster - a modular grid drawn in public, one grotesk, one ink, geometry as the only image. When in doubt, ask whether this reads like a systems manual designed by a poster artist or like a marketing template, and keep the former. Never name any of these in the output.

## Typography

**Archivo only, one family across the whole page** (400/500/600/700/800). Swiss discipline comes from weight, scale, and tracking, not from a second family. `--font-serif` and `--font-mono` resolve to unused fallbacks; do not load them.

- **Display** - Archivo 800, **lowercase**, `clamp(52px, 10.5vw, 136px)`, `letter-spacing: -0.045em`, `line-height: 0.9`. Slammed to the left margin, edge-aligned to the grid.
- **Body** - Archivo 400, 16px, `line-height: 1.5`.
- **Label voice** - Archivo uppercase at 12px, weight 600, `letter-spacing: 0.09em`, `--color-muted`. It sets captions, table headers, meta rows, folios, units, and index numbering - the quiet caps counterpoint to the giant lowercase display. It never sits above a heading as a kicker.
- **The numeral voice** - Archivo 800 numerals at display scale and beyond (`clamp(120px, 22vw, 320px)`), used as objects: a section index numeral set beside or behind the head at 6-10% opacity ink or in the signal ink, cropped by the band edge (`overflow: clip` on the band, the numeral deliberately hanging past it). One per section at most; it is art, not a heading.

## The marks kit

The signal ink and the ink itself are spent on a small vocabulary of constructed geometry. Every mark aligns to the column grid or to type metrics; nothing floats freehand.

- **The period square** - a solid `0.52em` square where a full stop would fall.
- **The bar** - a `3px` signal rule over a head, cut to a column width, never full-bleed.
- **The register** - a 1px ink circle with a crosshair through it (print registration), set in a margin column as a folio device.
- **The quarter-disc** - a solid quarter circle filling one grid cell corner, ink or signal.
- **The stepped bars** - 3-5 solid rectangles of stepped widths on the column tracks, a data-less bar chart used as texture beside a claim, or a data-ful one beside real numbers.
- **The dot module** - a cell filled with a dot lattice (`radial-gradient` repeated on an exact grid), ink at low weight, as ground texture inside one figure cell.
- **The border arrow** - arrows and chevrons drawn entirely from borders and rotated squares, signage style.
- **The diagonal** - one 45-degree rule crossing a band or a cell, 1px ink or 3px signal, snapped corner to corner on the column tracks.
- **The cropped numeral** - see the numeral voice above.

Per viewport, marks stay geometric and under 5% painted area; the plate is the one exception.

## The plate

**At most one per page, and every page should want one.** A full-bleed horizontal band flooded solid - the signal ink, or near-black ink - carrying the page's poster moment: an oversized claim, a giant numeral, a figure built from the kit, a specimen line. Text on a red or ultramarine plate is paper; text on a yellow plate is ink; an ink plate may use both paper and the signal. The hairline rails continue across the plate at low opacity (`--color-paper` at 12-18% alpha) so the grid is never interrupted. The plate has zero radius, zero shadow, and butts flush against the rules above and below it. It is a poster inside a manual: one loud move, then back to the sheet.

## Material

- **The exposed 12-column hairline grid is the theme.** A `repeating-linear-gradient` of 1px `--color-rule` lines every `calc(100% / 12)`, painted behind the content, capped to the shell width. The grid is content, not scaffolding to delete, and content rides `repeat(12, minmax(0,1fr))` on top of it.
- **Every section carries an object.** A section that is only prose has failed this theme. Each band sets at least one constructed thing: a plate, a figure cell, a cropped numeral, a specimen, a diagram, a matrix of ruled cells, stepped bars against real numbers. The object is built from the kit and the grid, never from an image, an emoji, or an icon font.
- **Asymmetric occupancy.** Running text never spans more than 6 of the 12 columns. The remaining columns carry the section's object or stay empty as designed whitespace - and the occupied side alternates or steps as the page descends, so consecutive sections never share the same silhouette.
- **Air is structural.** Desktop bands breathe at 120-160px vertical padding minimum; the hero holds most of the first viewport with type occupying less than half of it. Density belongs to tables and indexes; everything else is air and geometry.
- **Hairlines and ink rules do all the structure; zero cards.** `--radius-card: 0`, `--shadow-card: none`. Faint `--color-rule` hairlines split cells, a 1px-to-2px solid `--color-ink` rule tops a section, and content butts flush against it. No boxes, no float, no drop shadow.
- **Cells, not tiles.** Where the page needs repeated units, they are equal cells of the same grid divided by `border-inline-start` hairlines, sharing the band's top and bottom rules. The band reads as one ruled object, not as a row of separate objects.
- **`::selection` is the signal ink on paper** (ink on yellow). The one place the accent floods text.

**Shapes Grid suits** (affinities, never requirements): a numbered index of full-width rows riding the 12 columns with a cropped numeral hanging in the margin; an object-poster plate between two quiet ruled bands; a type or system specimen where the grid is the exhibit; figures set in bordered cells with caps labels beneath; a stepped-bar figure beside three real numbers.

## Motion

Restrained, geometric, grid-snapped. No scroll reveals, no parallax, no autoplay, no blur or fade choreography. What is allowed:

- **Hover micro-states** - a row background shifts to `--color-paper-2` and its title slides 8px; links underline; a bordered surface shifts its border to the signal ink. ~0.18-0.2s ease.
- **Hover geometry** - a mark answers the pointer with a snapped transform: the quarter-disc rotates 90 degrees, a stepped bar extends one column track, a border arrow translates 8px along its axis. Same 0.18-0.2s, transforms land on grid increments, nothing springs or bounces.
- **The ticker** - optionally, one thin full-bleed band of label-voice text scrolling at a constant slow rate between two rules, wayfinding-sign style. One per page at most, pausable on hover.

Smooth scroll only, and `prefers-reduced-motion: reduce` kills transitions, the ticker, and `scroll-behavior`.

## Do-nots (this theme's own failure modes)

- **Never hide the grid.** The rails stay visible, including across the plate. Deleting them because they look like scaffolding removes the theme.
- **Never a prose-only section.** Text plus nothing is the failure this revision exists to kill; every band builds an object from the kit.
- **Never uppercase display, never a serif, never a mono body.** Grid's display is lowercase Archivo; uppercase-condensed is Manifesto or Brutal, and the second family never arrives.
- **Never two signal inks on one page.** One ink, chosen once. A red page with a blue chart is a broken page.
- **Never a dark page, and never a second plate.** One flooded band is a poster moment; two is a striped template, and a full dark ground is Manifesto.
- **Never a gradient, a wash, or a tint fill** outside `paper-2`/`paper-3`. The ink is solid or absent.
- **Never a card, a radius, or a drop shadow.** Depth is hairlines, ink rules, and the plate.
- **Never a centred hero.** Slam left.
- **Never freehand geometry.** Every mark sits on a column track or a type metric; decoration that ignores the grid is another theme.

## Voice range

Rational, plainspoken, institutional. Name the system, the place, the year concretely. No hype. Never: seamless, robust, cutting-edge, leverage, synergy, revolutionary, unlock, supercharge, elevate, curated, bespoke. Never "click here."

## How Grid differs from its neighbours

| vs | difference |
|---|---|
| **Manifesto** | Manifesto is a **dark** ground (`oklch(10% 0.005 60)`), Anton 400 **uppercase** at `--lh-tight: 0.86`, red `#E51A1A`. Grid is a **light** sheet (`oklch(99% 0.003 255)`), Archivo **800 lowercase**; its one plate is a band inside a light page, never the page itself. Same "one ink, type carries it" DNA, opposite value and case. |
| **Cobalt** | Cobalt is modern-minimal: electric cobalt `oklch(58% 0.20 256)`, Familjen Grotesk plus JetBrains Mono, graphite code surfaces, 6-10px radii. Grid is editorial: a chosen signal ink, single-family Archivo, an exposed 12-column grid, zero radius, no code. Even on ultramarine the difference holds: Grid's blue is a flat poster ink on a ruled sheet, not an interface accent on soft surfaces. |
| **Brutal** | Both are light near-neutral sheets with red available and zero radius, but Brutal draws with **3px** black rules (`--color-rule: oklch(12%)`) boxing solid inverted blocks in Albert Sans 700 **uppercase**. Grid draws with **1px** hairlines (`--color-rule: oklch(88%)`) painting a **visible column grid**, Archivo 800 **lowercase**, and at most one flooded plate. Marker vs pencil; shout vs quiet with one loud move. |

## When the brief routes here

*identity · brand system · wayfinding · signage · design studio · type specimen · editorial grid · institution · museum · archive · index · directory · systems · modular · Swiss · grotesque · manual · programme · poster*. Categories: design and branding studios, cultural institutions, publishers, specimens and catalogs, portfolio indexes, archives and logistics. Tone: rational, systematic, precise, institutional, disciplined, timeless, calm-authoritative.

Warm, consumer, image-led, or serif-editorial briefs route elsewhere. When the brief wants a visible grid, one grotesk, and one signal ink spent on geometry, it is Grid.

## Build hint

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

```css
html, body { overflow-x: clip; }
body { background: var(--color-paper); color: var(--color-ink);
       font-family: var(--font-body); font-size: 16px; line-height: 1.5; }

/* THE ground: the exposed 12-column hairline grid, painted behind the content */
.rails {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  max-width: 1280px; margin-inline: auto;
  background-image: repeating-linear-gradient(to right,
    var(--color-rule) 0, var(--color-rule) 1px,
    transparent 1px, transparent calc(100% / 12));
}

h1, h2 { font-family: var(--font-display); font-weight: var(--display-weight);
  font-size: clamp(52px, 10.5vw, 136px); letter-spacing: var(--tracking-display);
  line-height: 0.9; text-transform: lowercase; }

.period {                              /* the smallest mark in the kit */
  display: inline-block; width: 0.52em; height: 0.52em;
  background: var(--color-accent);
}

.plate {                               /* the one poster moment */
  background: var(--color-accent); color: var(--color-paper);
  position: relative; overflow: clip;
}
.plate::before {                       /* rails continue across the plate */
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image: repeating-linear-gradient(to right,
    color-mix(in oklab, var(--color-paper) 15%, transparent) 0,
    color-mix(in oklab, var(--color-paper) 15%, transparent) 1px,
    transparent 1px, transparent calc(100% / 12));
}

.numeral {                             /* the cropped section numeral */
  font-weight: 800; font-size: clamp(120px, 22vw, 320px);
  line-height: 0.8; letter-spacing: -0.05em;
  color: color-mix(in oklab, var(--color-ink) 8%, transparent);
  user-select: none;
}

::selection { background: var(--color-accent); color: var(--color-accent-ink); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition-duration: 0.01ms !important; animation: none !important; }
}
```

Grid supplies the sheet, the rails, the one grotesk, the marks kit, and one plate. What rides those twelve columns is the brief's business, not the theme's.
