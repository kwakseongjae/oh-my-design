# Master visual grounding contract

Read this file only immediately before spawning `omd-master` for visual design,
component, or prototype work. Intake classification and checkpoint relay do not
need this file.

## Evidence first

1. If `reference_capture_dir` exists, inspect
   `screenshots/hero-desktop.png` as an image before Component phase. Read
   `structure.json`, `tokens.json`, and `fonts.json` as supporting evidence.
2. `surface_signal` wins when it conflicts with captured marketing composition.
   Live overrides may adjust observable web tokens; canonical DESIGN.md remains
   authoritative for voice, principles, and motion philosophy.
3. A font may be rendered only when it is officially confirmed for the relevant
   surface. `live_observed: true` requires its supplied `html_link`. A known but
   unloadable face keeps metadata and loses only the specimen. Never substitute
   a system face and present it as the brand font.
4. Unknown means absent at the smallest unresolved field or group. Never fill a
   missing brand fact, component, metric, font, or token with a plausible default.

## Product assets

1. Captured logos, screenshots, mascots, marketing photos, slogans, and other
   brand creative work are reference evidence only. Do not copy them into a new
   product DOM.
2. Default product identity is a text wordmark using the user-supplied product
   name. If no name exists, ask once when naming materially matters; otherwise
   use one clearly replaceable placeholder token consistently in title, hero,
   and footer. Do not synthesize a generic SVG logo.
3. Use `omd-asset-fetch` for the current verified asset catalog, license,
   attribution, URL liveness, and fallback sequence. This file intentionally
   does not duplicate CDN URLs or timestamps.
4. If every verified asset source fails, use a labeled brand-color placeholder.
   Do not hand-draw character SVGs. Inline SVG is limited to data visualization
   and known icon-library glyphs.

## Layout and composition

1. All top-level sections share one inner container token/class. Header, hero,
   content, and footer must align on the same horizontal edges.
2. Build hero visuals from separate semantic elements—copy, CTA, media, chart,
   stat card, ornament, and slide. Never bake characters, charts, labels, and
   cards into one monolithic SVG.
3. Choose one hero archetype from product evidence and record it in
   `experiment-meta.json`:
   - `left-character`: consumer/advisor surface with verified character asset.
   - `center-text`: developer tool or minimal SaaS with one dominant visual.
   - `carousel`: marketplace/commerce with genuinely distinct messages.
   - `split-screen`: booking, search, mobility, or product/action pairing.
   - `editorial-magazine`: editorial commerce or culture with licensed media.
   - `dashboard-preview`: B2B, analytics, or productivity product proof.
   - `quote-led`: consultancy, heritage, or thesis-led surface.
4. Do not reuse an archetype merely because it is familiar. Prefer the second
   evidence-compatible archetype when the same reference already appears in the
   run index, unless the user explicitly requests the original composition.

## Motion and capture safety

1. Motion uses DESIGN.md duration/easing tokens and respects
   `prefers-reduced-motion`.
2. IntersectionObserver reveal must have a non-JS/full-page capture safety net:
   hidden initial content becomes visible after a short fallback, while
   `.is-revealed` forces `opacity:1` and `transform:none`.
3. Never ship content that remains `opacity:0` when JS, observer, print, or
   screenshot execution is unavailable.

## Focused polish

Choose only details that clarify hierarchy or feedback. At least five may be
used when supported by the surface, but they are not a decorative quota:

- sticky header with restrained scroll state;
- CTA hover/focus feedback;
- data count-up or chart draw-in when numbers are real and meaningful;
- staggered reveal with the safety net above;
- purposeful card elevation or icon state change;
- one ambient background treatment;
- complete footer information architecture;
- clean 768px and 375px layouts.

Reject generic glassmorphism, arbitrary gradients, excessive pills, floating
cards without information purpose, uniform 24px+ radii, and animation added only
to make a static layout feel premium.

## Spawn prefix

Pass a concise evidence summary to `omd-master`: chosen reference, surface
signal, capture directory, verified font status, selected hero archetype, asset
mode, protected behavior, and unresolved groups. Do not paste this entire file
into the prompt after it has already been read.
