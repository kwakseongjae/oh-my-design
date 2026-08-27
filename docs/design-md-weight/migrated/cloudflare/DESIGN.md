# Cloudflare Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Cloudflare is the connectivity-cloud company for CDN, DNS, DDoS mitigation, Zero Trust, and Workers edge compute. Catalog homepage identity is `https://www.cloudflare.com`. Treating the following as this-contract-covers, including public-marketing-at-that-URL, dashboard-as-named-in-the-source, kumo-plus-cf-ui-plus-style-guide, values-stay-attached-to-the-evidence-domain-that-established-them, and marketing-surface-not-a-stand-in-for-kumo-interactive-brand, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. This contract covers the public marketing surface at that URL, the Cloudflare dashboard as named in the source, and the public component library **kumo** (`github.com/cloudflare/kumo`) together with the earlier **cf-ui** styleguide (`cloudflare.github.io/cf-ui`) and the docs Style Guide (`developers.cloudflare.com/style-guide/components`). Color, type, and component values stay attached to the evidence domain that established them. A marketing-surface value is not a stand-in for kumo’s interactive brand token.

Source token note: Cloudflare Orange `#F6821F` is the singular brand + primary-action color; rationed to one or two places per screen. Warm near-black text, never pure `#000`. Catalog `primary_color` is `#F6821F`. Token extraction is `tokens.source: design-system`.

§4 footer: `https://www.cloudflare.com` is the live production marketing site, verified via live DOM getComputedStyle. Component geometry (size scale, radius ladder, ring borders, dialog/toast/tooltip specs) is lifted from kumo source; the orange-led palette is grounded in the live marketing surface. One source-stated split: kumo’s interactive brand token (`--color-kumo-brand`) is a **blue** in the current library, while Cloudflare Orange `#F6821F` persists as the marketing/brand accent (`--text-color-kumo-brand: #f6821f`) and is what the live cloudflare.com surface renders for primary CTAs. Treating keep-the-orange-led-brand-identity-that-the-public-marketing-surface-still-ships and annotating-where-kumo-diverges-to-blue as this reconstruction’s component-spec contract, rather than a Cloudflare-authored choice of kumo-blue as the portable primary, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. The component specs below keep the orange-led brand identity that the public marketing surface still ships, annotating where kumo diverges to blue.

Treating the source HTML comment’s second grounding path as must-not-be-collapsed-into-the-§4-footer, and treating that-limiter-stays-in-this-portable-file-not-only-a-sidecar-note, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. The source HTML comment records a second grounding path that must not be collapsed into the §4 footer: `color.cloudflare.design` and a cloudflare.com WebFetch were unreachable at write time (ECONNREFUSED / classifier unavailable); YAML token values are reconciled from multiple public brand-color references and the hint. Neutral/grey, semantic, and dark-mode hex values, component geometry (radii, padding, shadow tokens), and motion tokens are interpretive reconstructions consistent with Cloudflare’s observed marketing site and dashboard, not verbatim from a single published spec. That limiter stays in this portable file; it is not only a sidecar note.

Cloudflare was founded in 2009 by Matthew Prince, Lee Holloway, and Michelle Zatlyn, growing out of Project Honey Pot. It went public on the NYSE in 2019 (ticker NET). The mission line is “to help build a better Internet.” The source names later products R2 storage and AI inference at the edge. Treating those widely-documented-public-facts-in-the-source as narrative rather than interface tokens, and confining-the-narrative-to-those-source-stated-founding-mission-and-named-later-products, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. These are widely documented public facts in the source; they are not interface tokens.

The following atmosphere and differentiation readings — captured-marketing-surface-read-as-bright-airy-and-optimistic, dashboard-read-as-denser-and-more-utilitarian, both-surfaces-read-as-sharing-the-same-DNA-clarity-first-decoration-never, and warm-orange-read-as-a-deliberate-act-of-differentiation-versus-navy-and-electric-blue — are a derived editorial implementation inference from the verified surfaces; they are not Cloudflare-authored or a separately published UI specification. The captured marketing surface is read as bright, airy, and optimistic — large charcoal headlines on white, orange reserved almost exclusively for calls-to-action and the cloud logomark. The dashboard is read as denser and more utilitarian: data tables, status pills, analytics graphs, config toggles, and code blocks, where orange becomes a precision accent. Both surfaces are read as sharing the same DNA — clarity first, decoration never. In a backend-devops landscape where AWS, Azure, GCP, Datadog, and security vendors reach for navy and electric blue, warm orange is read as a deliberate act of differentiation.

The following causal brand-narrative reading — founding-thesis-as-democratizing-DDoS-CDN-and-DNS, warm-orange-cloud-logomark-as-both-literal-and-emotional, and published-Color-by-Cloudflare-Design-plus-cf-ui-plus-style-guide-plus-dashboard-dark-mode-do-not-by-themselves-supply-every-hex-below — is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. The source reads the founding thesis as democratizing DDoS protection, CDN, and DNS that had been locked behind enterprise price tags, and reads the warm orange cloud logomark (gradient `#F6821F` → `#FAAD3F`) as both literal (a cloud) and emotional (warmth in a cold category). Published “Color by Cloudflare Design,” open-source cf-ui, the style guide, and dashboard dark mode are named as the design system scaling with the connectivity-cloud expansion; they do not by themselves supply every hex below.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating YAML `use` strings and §4 Use lines as independently verified Primary tasks — take-a-primary-action-named-Get-started-Add-site-Save-Deploy, manage-DNS-records-IP-token-fields-and-the-proxy-on-off-toggle, and switch-dashboard-sections-and-read-analytics-summary-tiles — and not lifting source §13 fictional archetypes, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Independently verified in this packet from YAML `use` strings and §4 Use lines, not from source §13 fictional archetypes:

- Take a primary action named on the marketing or dashboard surface (YAML use: `Primary action — Get started, Add site, Save, Deploy`).
- Manage DNS records, IP/token fields, and the proxy on/off toggle (YAML use: `DNS record values, IP entry, token paste fields`; `Proxy on/off, feature flags, security toggles`).
- Switch dashboard sections and read analytics summary tiles (YAML use: `Dashboard section switching (Overview / Analytics / DNS / SSL)`; `Analytics summary tiles (requests, bandwidth, threats blocked)`).
<!-- design-md:claim-end -->

### Audience

Restricting Audience so no named or fictional personas are promoted, treating source §13 as an exclusion boundary rather than verified biographies, tying observable work only to the three primary tasks, and inferring-no-behavioral-demographic-or-satisfaction-claims-beyond-those-task-labels, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. No invented demographic personas are promoted. Source §13 names fictional archetypes informed by publicly described Cloudflare user segments, not individual people. Names, ages, cities, employers, and biographies are not Audience and are not primary tasks. Observable work follows the three primary tasks: people taking Get started / Add site / Save / Deploy actions; people editing DNS records and proxy toggles; people switching Overview / Analytics / DNS / SSL and reading analytics tiles.

### Distinctive traits

Treating Cloudflare-Orange-versus-kumo-`--color-kumo-brand`-blue as unmerged, treating the-system-ui-fallback-stack-as-not-the-brand-face, treating warm-near-black-never-pure-`#000` as a token-note field rather than a new ink, and treating orange-rationed-to-one-or-two-places-per-screen as a Distinctive reading of the token note rather than a separately published rationing spec, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification.

- Cloudflare Orange `#F6821F` as catalog `primary_color` and marketing primary-action color; kumo `--color-kumo-brand` remains blue
- Inter for UI chrome with a system-ui fallback stack that is not the brand face; JetBrains Mono for DNS records, IPs, API tokens, and code
- Bright white marketing canvas `#FFFFFF`; dashboard density with first-class dark mode (`#15171A` / `#262A2E`)
- Warm near-black charcoal `#1D1F20` / `#36393A`, never pure `#000`
- kumo control-size scale `h-5` / `h-6.5` / `h-9` / `h-10` → 20/26/36/40px and radius ladder 4/6/8/12px
- Status as colored pills + dots (green / red / yellow); orange rationed to one or two places per screen

### Principles

These 8 items — Orange is the action, with the UI implication that rationed `#F6821F` marks where to look and click and that when-orange-decorates-instead-of-directs-it-has-been-misused; Borders before shadows, with the UI implication that structure-comes-from-crisp-1px-neutral-rules and shadows-are-reserved-for-genuinely-floating-layers; Monospace for truth, with the UI implication that proportional-fonts-are-for-prose-not-infrastructure; Whitespace where you sell, density where you work, with the UI implication that both-are-intentional; Warm, not cold, with the UI implication that Cloudflare-is-read-as-rejecting-the-cold-blue-of-its-category; Plain words, precise claims, with the UI implication that copy-is-direct-and-benefit-led and technical-labels-are-exact; Parity in dark, with the UI implication that orange-holds-in-both-while-surfaces-shift; Powerful but approachable, with the UI implication that every-screen-is-read-as-usable-by-a-solo-developer-and-trustworthy-to-an-enterprise-team-simultaneously — are a derived editorial implementation inference from the verified surfaces; they are not Cloudflare-authored or a separately published UI specification.

1. **Orange is the action.** `#F6821F` marks where the user should look and click. It is rationed to one or two places per screen. When orange decorates instead of directs, it has been misused.
2. **Borders before shadows.** Structure comes from crisp 1px neutral rules and alignment. Shadows are reserved for genuinely floating layers.
3. **Monospace for truth.** Anything an operator must read exactly — IPs, DNS records, tokens, code — is monospace. Proportional fonts are for prose, not infrastructure.
4. **Whitespace where you sell, density where you work.** Marketing breathes; the dashboard packs. Both are intentional.
5. **Warm, not cold.** Near-black is warm charcoal; the accent is warm orange. Cloudflare is read as rejecting the cold blue of its category.
6. **Plain words, precise claims.** Copy is direct and benefit-led; technical labels are exact.
7. **Parity in dark.** Product UI must work in light and dark with equal polish. Orange holds in both; surfaces shift, the brand doesn’t.
8. **Powerful but approachable.** Every screen is read as usable by a solo developer and trustworthy to an enterprise team simultaneously.

Treating the following as a capture-bound application of source §7 Do’s, not the numbered editorial list — use-Cloudflare-Orange-for-the-primary-CTA-and-almost-nowhere-else; set-technical-strings-in-JetBrains-Mono; use-status-pills-with-green-red-yellow-plus-a-colored-dot; prefer-1px-`#EDEDED`-borders-and-keep-shadows-subtle; use-warm-near-black-`#1D1F20`-never-pure-`#000`; set-headlines-in-Inter-700-with-slightly-negative-letter-spacing; ship-parity-in-dark-mode-keeping-orange-unchanged — is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Capture-bound application (source §7 Do’s, not the numbered editorial list):

- Use Cloudflare Orange (`#F6821F`) for the primary CTA and key interactive accents — and almost nowhere else.
- Set technical strings (IPs, DNS records, tokens, code) in JetBrains Mono / monospace.
- Use status pills with green/red/yellow + a colored dot for health and proxy state.
- Prefer 1px `#EDEDED` borders to define panels; keep shadows subtle and neutral.
- Use warm near-black (`#1D1F20`) for headings, never pure `#000`.
- Set headlines in Inter 700 with slightly negative letter-spacing.
- Ship parity in dark mode for any product UI, keeping orange unchanged.

### Avoid

The following items copy source §7 Don’ts: do-not-flood-screens-with-orange-or-it-loses-its-meaning-when-it-decorates-instead-of-directing; do-not-use-blue-as-a-primary-brand-color; do-not-put-API-keys-IPs-or-DNS-values-in-a-proportional-font; do-not-use-heavy-or-colored-drop-shadows; do-not-use-radii-above-12px-except-pills-and-avatars; do-not-set-body-text-in-700; do-not-mix-the-logomark-gradient-orange-`#FAAD3F`-into-UI-text-or-buttons. They are a derived editorial implementation inference from the verified surfaces; they are not Cloudflare-authored or a separately published UI specification.

- Do not flood screens with orange — it loses its meaning the moment it decorates instead of directing.
- Do not use blue as a primary brand color; blue is informational/secondary only (Cloudflare is deliberately not blue). Treating this-Avoid-does-not-erase-the-kumo-`--color-kumo-brand`-blue-split as a reconstruction coverage note rather than a Cloudflare-authored Don’t rewrite, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. This Avoid does not erase the kumo `--color-kumo-brand` blue split recorded above.
- Do not put API keys, IPs, or DNS values in a proportional font.
- Do not use heavy or colored drop shadows — borders and subtle neutral shadows only.
- Do not use radii above 12px except pills and avatars.
- Do not set body text in 700 — reserve bold for headings and emphasis.
- Do not mix the logomark gradient orange (`#FAAD3F`) into UI text or buttons.
Treating the last Avoid as a reconstruction fallback-boundary rather than a Cloudflare-authored Don’t, including do-not-present-the-system-ui-fallback-stack-as-Inter and do-not-present-Inter-as-JetBrains-Mono, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification.
- Do not present the system-ui fallback stack as Inter, or Inter as JetBrains Mono.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Treating YAML roles and catalog `primary_color` as listed first, including same-hex-two-named-jobs-stay-unmerged and body-§2-pairs-stay-beside-the-YAML-hex-not-averaged, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML roles and catalog `primary_color` first. Same hex used for two named jobs stays unmerged. Body §2 pairs that add a second hex stay beside the YAML hex; they are not averaged.

The following grey, semantic, and dark-mode hex values are the source HTML comment’s interpretive reconstructions, not verbatim from a single published spec. Orange `#F6821F` is additionally the documented brand/primary-action color in the token note, public brand-color references named in that comment, and the live marketing CTA path in §4. Treating those evidence domains as unmerged is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification.

- **Cloudflare Orange / Primary / Brand** (`#F6821F`): YAML `primary` / `brand`. Catalog `primary_color`. Primary CTAs, cloud logomark, links, active/selected states, focus accents on the marketing surface. `--text-color-kumo-brand: #f6821f`. Not kumo `--color-kumo-brand` (blue).
- **Orange Hover** (`#E2700B`): YAML `primary-hover`. Hover for orange CTAs.
- **Orange Pressed** (`#D9700F`): YAML `primary-pressed`. Body §2 writes Hover/pressed as `#E2700B` / approx `#D9700F`; the two YAML fields stay unmerged from each other and from that “approx” pairing.
- **Orange Tint** (`#FDF3E7`): YAML `orange-tint`. Body also names `#FBE6CC` / `#FDF3E7` for info banners, highlighted rows, and selected list items. `#FBE6CC` is not the YAML token.
- **Brand Orange Alt** (`#F48120`): body-only logo-mark gradient orange. Marketing/logo contexts only. Not YAML `primary`.
- **Gradient Yellow-Orange** (`#FAAD3F`): YAML `brand-gradient-end`. Lighter stop in the logomark gradient `#F6821F` → `#FAAD3F`. Decorative brand moments, never UI text.
- **On-primary** (`#FFFFFF`): YAML `on-primary`. Text on orange fills. Same hex as canvas; named jobs stay unmerged.
- **Canvas / Surface** (`#FFFFFF`): YAML `canvas` / `surface`. Marketing page background, card surfaces, dashboard panels (light mode).
- **Surface alt** (`#F7F7F7`): YAML `surface-alt`. Body Off-White `#F7F7F7` / `#F5F5F5`. `#F5F5F5` is also Grey 100 / code-block fill; not merged into `surface-alt`.
- **Foreground / Charcoal headings** (`#1D1F20`): YAML `foreground`. Strongest text. Warm near-black, never pure `#000`. Same hex appears as one of two Dark Background values; jobs stay unmerged.
- **Body charcoal** (`#36393A`): YAML `body`. Standard body copy. Grey 700 in the body scale.
- **Muted** (`#717174`): YAML `muted`. Body Muted Grey `#666666` / `#717174`. `#666666` is not the YAML token.
- **Placeholder** (`#999999`): YAML `placeholder`. Body Placeholder Grey `#999999` / `#A1A1A1`. `#A1A1A1` is also Grey 400.
- **Hairline** (`#EDEDED`): YAML `hairline`. Grey 200. Body Light Grey Surface `#EDEDED` / `#F0F0F0`. `#F0F0F0` is not the YAML token.
- **Border strong** (`#D9D9D9`): YAML `border-strong`. Grey 300. Input outlines.
- **Success** (`#2FB344`): YAML `success`. Body also names classic proxied/healthy `#9BCA3E` vs dashboard status-dot `#2FB344`. Not merged.
- **Error** (`#BD2528`): YAML `error`. Body also names `#E1351D`. Not merged.
- **Warning** (`#F6C549`): YAML `warning`. Body also names `#FFC107`. Not merged.
- **Info** (`#2C7CB0`): YAML `info`. Body also names `#0073AA`. Not kumo `--color-kumo-brand`, and not primary orange.
- **Grey 50** (`#FAFAFA`): lightest wash; also secondary-button hover fill and table header / hover row.
- **Grey 600** (`#4D4D4D`): emphasized secondary text; also neutral status-pill text.
- **Dark background** (`#15171A`): YAML `dark-bg`. Body Dark Background `#1D1F20` / `#15171A`.
- **Dark surface** (`#262A2E`): YAML `dark-surface`. Body also names `#23272B`.
- **Dark border** (`#3A3F44`): YAML `dark-border`.
- **Dark text** (`#E4E6E7`): YAML `dark-text`. Body muted on dark `#9BA1A6`.
- **Dark popover step** (`#2E3338`): body §6 only. Background `#15171A` → card `#262A2E` → popover `#2E3338`.
- **Dark skeleton** (`#2A2E33`): body §14 Loading (first paint) only.

Treating primary-button-hover-`#E2700B` / pressed-`#D9700F` / ghost-hover-`#FDF3E7` / danger-hover-`#A11F22` / status-pill-locals as component-fields-not-general-inks is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Primary-button hover `#E2700B`, pressed `#D9700F`, ghost hover `#FDF3E7`, danger hover `#A11F22`, and status-pill locals (`#E8F5D8` / `#3D6B14`, `#FBE2E2`, `#FCF3D6` / `#8A6D1B`, `#C2670F`) stay on those controls. They are not general inks.

Treating switch-on-state-kumo-library-blue-`#2C7CB0` and marketing-live-proxy-toggle-on-state-`#F6821F` as both-kept-unmerged-evidence-domains is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Switch on-state in the kumo library is blue `#2C7CB0`; marketing/live proxy toggle on-state is `#F6821F`. Both are kept.

### Spacing

Treating YAML spacing numbers as recorded without a required px suffix, treating body 4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 96px as body-recorded observations rather than a converted YAML scale, treating `12px` and `96px` as body-only-not-YAML-spacing-keys, and treating generous-64–96px-marketing-rhythm versus tighter-16–24px-dashboard-padding as source-stated body observations not a global gutter, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML `spacing` (numbers without a required px suffix; none is added here): xs 4, sm 8, md 16, base 16, lg 24, xl 32, xxl 48, section 64.

Body §5: base unit 4px; primary rhythm on 8px. Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px. Marketing sections: generous 64–96px vertical rhythm. Dashboard panels: tighter 16–24px internal padding. `12px` and `96px` are body-only; they are not YAML spacing keys.

### Shape

YAML `rounded`: sm 4, md 6, lg 8, xl 12, full 9999.

kumo ladder named in §4: `rounded-sm → rounded-md → rounded-lg → rounded-xl` (4/6/8/12px). Control-size scale: `h-5` / `h-6.5` / `h-9` / `h-10` → 20/26/36/40px.

Treating Body §5 Tight 4px / Standard 6px / Comfortable 8px / Large 10–12px / Pill `9999px` as a local layout scale rather than averaging it with YAML `rounded` or with §4 button radius 8px is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Body §5 layout scale (not averaged with YAML or with §4 button radius 8px):

- Tight (4px): pills’ inner chips, small inline tags
- Standard (6px): buttons, inputs, selects, code blocks
- Comfortable (8px): cards, panels, toasts
- Large (10–12px): modals, marketing feature cards
- Pill (`9999px`): status badges, toggles, avatars

Treating YAML `full` 9999 and body `9999px` as both kept, treating §4 Primary Button 8px, §9 example 6px / `0 20px` / 40px, Compact 6px, and Switch `5px` / 10px as local geometries rather than a universal radius, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML `full` 9999 and body `9999px` are both kept. §4 Primary Button radius is 8px (kumo `rounded-lg`). §9 example component prompt uses 6px radius and `0 20px` padding on a 40px-tall primary. Compact button is 6px (`rounded-md`). Switch YAML radius is `5px` (`rounded-[5px]`), squircle-rounded to 10px where supported. Those local geometries are not a universal radius.

### Elevation

YAML `shadow` (0px form):

| Token | Value |
|---|---|
| subtle | `rgba(0,0,0,0.06) 0px 1px 3px 0px` |
| raised | `rgba(0,0,0,0.08) 0px 4px 16px 0px` |
| floating | `rgba(0,0,0,0.12) 0px 8px 24px 0px` |
| modal | `rgba(0,0,0,0.18) 0px 12px 32px 0px` |

Body §6 (no `0px` suffix on the first length; not rewritten into the YAML form):

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow, 1px `#EDEDED` border | Inline elements, table rows, bordered panels |
| Subtle (1) | `0 1px 3px rgba(0,0,0,0.06)` | Standard dashboard cards |
| Raised (2) | `0 4px 16px rgba(0,0,0,0.08)` | Marketing feature cards, hover lift |
| Floating (3) | `0 8px 24px rgba(0,0,0,0.12)` | Dropdowns, popovers, tooltips |
| Modal (4) | `0 12px 32px rgba(0,0,0,0.18)` | Dialogs, command palette |

Treating YAML tooltip `shadow-lg` as kept-as-that-source-string-not-replaced-with-the-floating-tuple is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML tooltip `shadow-lg` is kept as that source string; it is not replaced with the floating tuple.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Cloudflare is read as preferring borders over shadows for structure — a crisp 1px `#EDEDED` rule defines most surfaces, with soft neutral shadows reserved for genuinely floating layers. Shadows are pure-black low-opacity, never tinted. In dark mode, elevation is conveyed by surface lightness, not shadow: background `#15171A` → card `#262A2E` → popover `#2E3338`. Borders shift to `#3A3F44`.

### Motion

Source HTML comment: motion tokens are interpretive reconstructions consistent with the observed marketing site and dashboard, not verbatim from a single published spec. Duration names/values, easing names/uses, signature-motion prose, and reduced-motion behavior remain as source-stated reconstruction. Exact cubic-bezier curves are omitted from this portable file (unattributed; `ease-enter` / `ease-exit` / `ease-standard` match `spec/omd-v0.1.md` example-table values). Treating that reconstruction-vs-omission split as the portable Motion contract is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification.

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state |
| `motion-fast` | 120ms | Hover, focus ring, button press |
| `motion-standard` | 200ms | Dropdowns, tab switches, accordion expand |
| `motion-emphasis` | 300ms | Modal open, sheet, toast enter |
| `motion-page` | 350ms | Route/section transitions |

Dialog enter is also source-stated as scale from 90% + fade over 150ms. Treating that 150ms as a dialog-local-field-not-rewritten-as-`motion-fast`-or-`motion-standard` is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. That 150ms is a dialog-local field; it is not rewritten as `motion-fast` or `motion-standard`.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Appearing — modals, toasts, popovers |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name and use only) | Leaving — dismissals, collapses |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way — tabs, accordions, hover lift |
| `ease-out-soft` | omitted (unattributed cubic-bezier; source-stated name and use only) | Emphasized marketing reveals on scroll |

Treating the following signature motions as source-stated-not-decoration, and treating the orange-focus-ring as named-`Focus`-in-§14-not-promoted-as-`focus-visible`-treatment, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Signature motions (source-stated; not decoration):

1. **Hover lift.** Marketing feature cards rise ~2px and deepen shadow (`motion-fast` / `ease-standard`) on hover — a light, responsive cue that the surface is interactive.
2. **Orange focus ring.** On keyboard focus, the 3px `rgba(246,130,31,0.2)` ring fades in over `motion-fast`. Accessibility-first; never suppressed for aesthetics. Named `Focus` in §14; not promoted as `focus-visible` treatment.
3. **Toast slide-in.** Toasts enter from the top-right (or bottom) translating ~16px with `motion-emphasis` / `ease-enter`, exit via `motion-fast` / `ease-exit` — leaving is quicker than arriving.
4. **Status transitions.** When a zone flips state (Pending → Active), the pill cross-fades color over `motion-standard`; never a hard swap, so operators perceive the change.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; slides become fades; the dashboard stays fully usable.

Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings, including Inter-and-JetBrains-grounded-in-named-design-system-docs, color.cloudflare.design-unreachable-does-not-promote-a-substitute-family, live-DOM-getComputedStyle-and-WebFetch-unreachable-both-kept, Inter-Display-declared-only-not-UI-family, and do-not-present-the-system-ui-fallback-stack-as-Inter, are a derived editorial implementation inference from the verified surfaces; they are not Cloudflare-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Source grounds Inter + JetBrains/mono in Cloudflare design-system docs (`developers.cloudflare.com` design-system, `cloudflare.github.io/cf-ui`, `color.cloudflare.design` “Color by Cloudflare Design”). `color.cloudflare.design` was unreachable at write time; that unavailability does not promote a substitute family. |
| Live computed surface-use | §4 footer: live production marketing site verified via live DOM getComputedStyle. HTML comment: cloudflare.com WebFetch unreachable at write time. Both statements are kept. |
| Official distributed asset | Inter and JetBrains Mono are named families. |
| Declared-only | Some hero moments use Inter Display optical sizing. Inter Display is not promoted to the UI family token. |
| Unresolved claim | Do not present the system-ui fallback stack as Inter. |

### Family

- **Primary / YAML `family.sans`:** `Inter`
- **Primary stack (§3 body):** `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Monospace / YAML `family.mono`:** `JetBrains Mono`
- **Monospace stack (§3 body):** `"JetBrains Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace`

Treating YAML family names and the §3 stacks as both kept, including do-not-collapse-fallback-faces and do-not-present-a-fallback-face-as-Inter-or-JetBrains-Mono, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML family names and the §3 stacks are both kept. Do not collapse the fallback faces out of the stacks, and do not present a fallback face as Inter or as JetBrains Mono.

The following type-character reading — Inter-read-as-a-screen-optimized-neo-grotesque, headings-read-as-tight-and-confident, body-read-as-calm-and-explanatory, three-weights-400-600-700, avoid-500-in-UI-text-and-reserve-800-900-for-rare-marketing-display, headlines-≥24px-tighten-to-`-0.01em`-to-`-0.02em`, and uppercase-12px-600-eyebrows-with-`0.06em`-tracking-as-section-markers — is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Inter is read as a screen-optimized neo-grotesque. Headings are read as tight and confident; body copy as calm and explanatory. Three weights: 400 (body), 600 (emphasis/sub-headings), 700 (headlines). Avoid 500 in UI text; reserve 800/900 for rare marketing display. Headlines ≥24px tighten to `-0.01em` to `-0.02em`; body stays at normal tracking. Uppercase 12px/600 eyebrows with `0.06em` tracking mark sections and table headers.

### Type roles

Treating unitless YAML lineHeight ratios as preserved rather than rewritten as the body-table px figures, treating body px conversions as Notes-column observations, and treating YAML tracking numbers and body em values as both kept, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Verified line-height values include the unitless YAML ratios `1.1`, `1.15`, `1.2`, `1.3`, `1.4`, `1.45`, `1.6`, `1.55`, and `1.5`. They scale with font size and are not rewritten as the body-table px figures. Body px conversions stay in the Notes column.

YAML tracking `-0.02` / `-0.01` / `0.06` and body `-0.02em` / `-0.01em` / `0.06em` are both kept.

| Role | Font | Size | Weight | Line height | Tracking | Use (YAML) / Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Inter | 56px | 700 | 1.1 | YAML `-0.02` / body `-0.02em` | Marketing hero headline. Body also 1.1 (62px) |
| Display | Inter | 40px | 700 | 1.15 | YAML `-0.02` / body `-0.02em` | Major section headers. Body also 1.15 (46px) |
| Heading 1 | Inter | 32px | 700 | 1.2 | YAML `-0.01` / body `-0.01em` | Page titles. Body also 1.2 (38px) |
| Heading 2 | Inter | 24px | 600 | 1.3 | YAML `-0.01` / body `-0.01em` | Section / card group titles. Body also 1.3 (31px) |
| Heading 3 | Inter | 20px | 600 | 1.4 | YAML omitted / body normal | Card headings, panel titles. Body also 1.4 (28px) |
| Subtitle | Inter | 18px | 600 | 1.45 | YAML omitted / body normal | Lead-in / dashboard section labels. Body also 1.45 (26px) |
| Body Large | Inter | 16px | 400 | 1.6 | YAML omitted / body normal | Marketing paragraphs. Body also 1.6 (26px) |
| Body | Inter | 14px | 400 | 1.55 | YAML omitted / body normal | Dashboard standard text. Body also 1.55 (22px) |
| Body Small | Inter | 13px | 400 | 1.5 | YAML omitted / body normal | Table cells, secondary info. Body also 1.5 (20px) |
| Caption | Inter | 12px | 400 | 1.5 | YAML omitted / body normal | Metadata, timestamps, helper text. Body also 1.5 (18px) |
| Label / Eyebrow | Inter | 12px | 600 | 1.4 | YAML `0.06` / body `0.06em` UPPER | Section eyebrows, table headers. Body also 1.4 (17px) |
| Code / Mono | JetBrains Mono | 13px | 400 | 1.6 | YAML omitted / body normal | DNS records, IPs, API tokens, code. Body also 1.6 (21px) |

Treating table-header-tracking-`0.04em` as a Data-Table-field-not-the-eyebrow-`0.06em`-token is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Table header tracking `0.04em` is a Data Table field, not the eyebrow `0.06em` token.

### Assets

Treating catalog logo metadata as type `simpleicons` and slug `cloudflare` as identity-only catalog metadata rather than a Cloudflare-authored mark specification, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Catalog logo metadata is Simple Icons identity (`cloudflare`).

Treating orange-cloud-logomark-scales-but-never-recolors and product-partner-logos-grayscale-or-mono-in-logo-walls as reconstruction application of source Image / Asset Behavior rather than a Cloudflare-authored asset licence, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. The orange cloud logomark scales but never recolors. Product/partner logos render in a consistent grayscale-or-mono treatment in logo walls.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (first use)** | One line of `#36393A` body explaining the *why* ("No DNS records yet.") plus one orange-ghost or secondary action ("Add a record"). No illustration in the dashboard; marketing may use a light spot graphic. |
| **Empty (filtered)** | Single `#717174` caption ("No records match your filter.") with a "Clear filter" text button. |
| **Loading (first paint)** | Skeleton blocks at `#EDEDED` (light) / `#2A2E33` (dark) matching final layout. Metric values show `—` until resolved. |
| **Loading (refresh)** | Inline orange spinner or top progress bar; existing data stays visible, never blanked. |
| **Error (inline field)** | 1px `#BD2528` border, helper text below in `#BD2528` 12px, one actionable sentence ("Enter a valid IPv4 address."). |
| **Error (toast)** | `#1D1F20` bg, white text, 4px red left-border, 4–5s auto-dismiss, one sentence. |
| **Error (page-level)** | Centered message in `#1D1F20` 16px/600 + cause + retry button in orange. Reserved for outage/permission failures. |
| **Success (toast)** | `#1D1F20` bg, white text, 4px green left-border ("Record added."). |
| **Status: healthy** | Green pill + dot — "Active" / "Proxied" / "Healthy". |
| **Status: degraded/paused** | Yellow pill — "Pending" / "DNS only" / "Paused". |
| **Status: down/blocked** | Red pill — "Down" / "Blocked" / "Error". |
| **Disabled** | Control at 40–50% opacity; orange buttons keep hue but drop opacity; geometry unchanged. |
| **Focus** | 3px orange focus ring `rgba(246,130,31,0.2)` on inputs/buttons — visible for keyboard nav. |
| **Loading inside button** | Label swapped for a small white spinner; button width preserved; press committed, no double-submit. |

Treating Core §4.4 applicability as judged by control meaning rather than capture completeness, treating named `Focus` as not `focus-visible` evidence, treating unresolved request/outcome mapping as omitted-L-E-S-fields rather than closed from §14 rows, treating Marketing Feature Card interactive-kind as the named hover-lift cue that the surface is interactive, treating Pagination interactive-kind as numbered-controls-as-compact-buttons, and treating unconfirmed surfaces as kind-and-map-omitted-rather-than-invented, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic or named `Focus` capture is not `focus-visible` treatment evidence; the documented ring stays as an additional observed named state, and the `focus-visible` visual treatment remains omitted from the applicability row unless the same component names `focus-visible` as that row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

Marketing Feature Card keeps Kind: interactive from the named hover-lift cue that the surface is interactive. Pagination keeps Kind: interactive as numbered controls as compact buttons. Dark CTA, Marketing Feature Card, and Pagination have no YAML `type`; none is invented. Standard Panel, Stat Card, Surface, Data Table, Code Block, Tooltip, Badge, Status Pill, Dialog, Toast, Meter, Banner, Loader, Empty State, Popover, Sidebar, and Breadcrumbs have no interactive-kind confirmation for a §4.4 map, so kind and map are omitted rather than invented.

kumo geometry and the orange-led marketing identity are annotated per control. YAML component fields stay on those controls (A4).

### Primary Button

- Role: primary action — Get started, Add site, Save, Deploy
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#F6821F` (YAML `#f6821f`)
- Text: `#FFFFFF`
- Border: none
- Radius: YAML / §4 `8px` (kumo `rounded-lg`); §9 example prompt `6px`
- Padding: YAML `0 12px` (medium); §4 large `16px` horizontal; §9 example `0 20px`
- Height: YAML `36px` (medium `h-9`); §4 large `h-10` `40px`; §9 example `40px` tall
- Font: YAML `14px / 600`; §4 Inter; kumo `text-base` 16px on large
- Hover: `#E2700B`
- Pressed / active: `#D9700F`
- Disabled: brand at 50% opacity (YAML); §14 40–50% opacity
- Focus (YAML): `2px brand ring`
- Focus (§4): `2px brand ring` (`focus-visible:ring-2 focus-visible:ring-kumo-brand`) — kumo-brand is blue
- Use: Primary action — "Get started", "Add site", "Save", "Deploy"

Treating YAML 36px / `0 12px` / 8px, §4 large 40px / 16px / 8px, and §9 example 40px / `0 20px` / 6px as all-kept-not-averaged local geometries is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML 36px / `0 12px` / 8px, §4 large 40px / 16px / 8px, and §9 example 40px / `0 20px` / 6px are all kept; they are not averaged.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named primary action on marketing and dashboard |
| hover | applicable | Pointer-web button; `#E2700B` captured |
| focus-visible | applicable | Interactive control; kumo names `focus-visible:ring-2 focus-visible:ring-kumo-brand` in anatomy; hex treatment omitted from this row |
| disabled | applicable | Captured brand 50% opacity |
| loading | applicable | §14 Loading inside button: white spinner replaces the label, width preserved, press committed |
| error | applicable | Save / Deploy can fail as an action outcome; visual treatment omitted |
| success | applicable | Save / Deploy can succeed as an action outcome; visual treatment omitted |

Additional observed named states: pressed `#D9700F`; generic `Focus` ring `0 0 0 3px rgba(246,130,31,0.2)`. Generic `Focus` is not `focus-visible` evidence. kumo `--color-kumo-brand` remains blue on the library `focus-visible` class.

### Secondary Button (outline)

- Role: companion to a primary — Cancel, Back
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FFFFFF`
- Text: `#36393A`
- Ring / border: 1px `#D9D9D9` hairline
- Radius: `8px`
- Hover: background `#FAFAFA`, ring `#A1A1A1`
- Use: Companion to a primary ("Cancel", "Back")

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named companion action |
| hover | applicable | Pointer-web button; `#FAFAFA` / `#A1A1A1` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A Cancel/Back control can be unavailable; visual treatment omitted |
| loading | not-applicable | Cancel / Back does not enter a loading state on this companion button |
| error | not-applicable | Neutral meaning is the paired action, not a request or validation failure on the button |
| success | not-applicable | Completing a companion action is not a success confirmation painted on this button |

### Ghost Button

- Role: inline low-emphasis action, Learn more, text-link button
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#F6821F`
- Radius: `8px`
- Padding: `0 12px`
- Hover: background `#FDF3E7` (kumo `bg-kumo-tint`)
- Use: Inline low-emphasis action, "Learn more", text-link button

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named inline low-emphasis action |
| hover | applicable | Pointer-web button; `#FDF3E7` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An inline action can be unavailable; visual treatment omitted |

Treating Ghost Button loading-error-success as omitted-at-this-boundary-because-source-names-mixed-Learn-more-text-link-and-inline-low-emphasis-uses, rather than closed as navigation, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading, error, and success applicability are omitted. Source names mixed Learn more / text-link / inline low-emphasis uses; exact request/destination mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as navigation.

### Destructive Button

- Role: Delete zone, remove record, purge — confirmation contexts only
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#BD2528`
- Text: `#FFFFFF`
- Radius: `8px`
- Hover: `#A11F22` (kumo: danger at 70% opacity)
- Secondary destructive variant: white fill, `#BD2528` text, hairline ring
- Use: Delete zone, remove record, purge — confirmation contexts only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named destructive confirm action |
| hover | applicable | Pointer-web button; `#A11F22` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destructive confirm can be unavailable; visual treatment omitted |
| loading | applicable | Confirmation commit can show §14 Loading inside button (spinner, width preserved) |
| error | applicable | Delete / Purge can fail as an action outcome; visual treatment omitted |
| success | applicable | Delete / Purge can succeed as an action outcome; visual treatment omitted |

### Compact / Small Button

- Role: toolbar and table-row inline actions where vertical space is tight
- Kind: interactive
- Type: button
- Anatomy: label
- Height: `h-6.5` (26px)
- Radius: `6px` (`rounded-md`)
- Padding: `0 8px`
- Font: YAML `12px / 600`
- Use: Toolbar and table-row inline actions

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named toolbar / table-row inline action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An inline table action can be unavailable; visual treatment omitted |

Treating Compact / Small Button loading-error-success as omitted-at-this-boundary-because-source-names-mixed-toolbar-and-table-row-uses, rather than closed from the §14 rows, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading, error, and success applicability are omitted. Source names mixed toolbar and table-row uses; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Icon Button

- Role: Close, kebab menu, copy-to-clipboard affordance
- Kind: interactive
- Type: button
- Anatomy: icon
- Height: YAML `36px`; §4 square `h-9`/`h-10`
- Radius: YAML `8px`; §4 `rounded-full` or 8px radius
- Padding: `0`
- Use: Close, kebab menu, copy-to-clipboard affordance

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named icon chrome |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Close / kebab / copy can be unavailable; visual treatment omitted |

Treating Icon Button loading-error-success as omitted-at-this-boundary-because-source-lists-Close-kebab-and-copy-on-one-YAML-row, rather than closed from the §14 rows, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading, error, and success applicability are omitted. Source lists Close, kebab, and copy on one YAML row; exact request/outcome mapping is mixed, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Dark CTA (Marketing)

- Role: marketing-page secondary CTA where orange is already spent on the primary
- Kind: interactive
- Background: `#1D1F20`
- Text: `#FFFFFF`
- Radius: `8px` (§4); §9 marketing-hero CTA example `6px`
- Padding: `0 24px`
- Font: `16px / 600 / Inter`
- Height: `48px`
- Use: Marketing-page secondary CTA

Treating YAML-has-no-Dark-CTA-`type`-none-is-invented as a reconstruction boundary rather than a Cloudflare-authored primitive is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML has no Dark CTA `type`; none is invented.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named marketing secondary CTA |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing CTA can be unavailable; visual treatment omitted |

Treating Dark CTA loading-error-success as omitted-at-this-boundary-because-exact-request-destination-is-unresolved, rather than closed as navigation, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading, error, and success applicability are omitted. Source names a marketing-page secondary CTA; exact request/destination mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as navigation.

Treating §4 radius 8px and §9 hero-CTA example 6px as both-kept-not-averaged is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. §4 radius 8px and §9 hero-CTA example 6px are both kept.

### Underline Tabs

- Role: dashboard section switching (Overview / Analytics / DNS / SSL)
- Kind: interactive
- Type: tab
- Anatomy: label + bottom rule
- Container border-bottom: 1px solid `#EDEDED`
- Inactive: text `#717174`, 14px / 600
- Hover: text `#36393A`
- Active: text `#1D1F20`, 2px bottom border `#F6821F`
- YAML disabled field: `#717174` inactive label
- Font: YAML `14px / 600`
- Use: Dashboard section switching (Overview / Analytics / DNS / SSL)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named dashboard section switcher |
| hover | applicable | Pointer-web tab; `#36393A` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | YAML records an inactive/disabled label `#717174` |
| loading | not-applicable | Section switching does not enter a loading state on the tab itself |
| error | not-applicable | Tab meaning is section selection, not a request or validation failure |
| success | not-applicable | Opening Overview / Analytics / DNS / SSL is selection, not an action-outcome confirmation on the tab |

Treating the active 2px `#F6821F` bottom border as a captured-variant-not-a-Core-applicability-row is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Active 2px `#F6821F` bottom border is a captured variant, not a Core applicability row.

### Text Field

- Role: standard form input, search, config values
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#FFFFFF`
- Text: `#1D1F20`
- Placeholder: `#999999`
- Ring: 1px `#D9D9D9` (`ring-kumo-line`)
- Radius: `8px`
- Height: YAML / §4 `h-10` (40px)
- Padding: `0 16px`
- Font: `14px / 400 / Inter`
- Focus (YAML): `1.5px brand ring · 0 0 0 3px rgba(246,130,31,0.2)`
- Focus (§4): 1.5px brand ring (kumo `focus:ring-[1.5px]`) — marketing/live surface renders the orange ring `0 0 0 3px rgba(246,130,31,0.2)`
- Error: ring 1.5px `#BD2528` (`ring-kumo-danger`); focus ring `0 0 0 3px rgba(189,37,40,0.18)`; helper `#BD2528`, 12px / 400 — one actionable sentence
- Use: Standard form input, search, config values

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named standard form input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A form field can be unavailable; visual treatment omitted |
| error | applicable | Captured Input Error State (1.5px `#BD2528` ring + helper) |

Treating Text Field loading and success as omitted-at-this-boundary-because-exact-request-outcome-mapping-is-unresolved, rather than closed from capture or source-paint absence, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading and success applicability are omitted. Exact request/outcome mapping beyond the captured Input Error State is unresolved, so those two fields stay omitted at this boundary rather than closed from capture absence.

Additional observed named state: generic `Focus` / marketing orange ring. Generic `Focus` is not `focus-visible` evidence.

### Mono Input (technical)

- Role: DNS record values, IP entry, token paste fields
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#FFFFFF`
- Text: `#1D1F20`
- Ring: 1px `#D9D9D9`
- Radius: `8px`
- Font: `13px / 400 / JetBrains Mono`
- Use: DNS record values, IP entry, token paste fields

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named technical string field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A token/IP field can be unavailable; visual treatment omitted |
| error | applicable | Same Input Error State contract as the standard field (IPv4 helper is named in §14) |

Treating Mono Input loading and success as omitted-at-this-boundary-because-exact-request-outcome-mapping-is-unresolved, rather than closed from capture or source-paint absence, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading and success applicability are omitted. Exact request/outcome mapping beyond the captured Input Error State is unresolved, so those two fields stay omitted at this boundary rather than closed from capture absence.

### Select / Dropdown

- Role: plan picker, record-type selector, region dropdown
- Kind: interactive
- Type: input
- Anatomy: value + chevron
- Background: `#FFFFFF`
- Text: `#1D1F20`
- Ring: 1px `#D9D9D9`
- Radius: `8px`
- Height: `h-10` (40px)
- Chevron: `#717174`
- Use: Plan picker, record-type selector, region dropdown

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named form selector |
| hover | applicable | Pointer-web select; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A plan/record-type selector can be unavailable; visual treatment omitted |
| error | applicable | Form field; validation failure uses the Input Error State contract; visual treatment omitted beyond that shared field error |

Treating Select loading and success as omitted-at-this-boundary-because-exact-request-outcome-mapping-is-unresolved, rather than closed from capture or source-paint absence, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading and success applicability are omitted. Exact request/outcome mapping beyond the Input Error State contract is unresolved, so those two fields stay omitted at this boundary rather than closed from capture absence.

### Switch / Toggle

- Role: Proxy on/off, feature flags, security toggles
- Kind: interactive
- Type: toggle
- Anatomy: track + thumb
- Track sizes: `h-4` / `h-4.5` / `h-5` (16/18/20px)
- Shape: YAML `5px` / `rounded-[5px]`; squircle-rounded to 10px where supported
- On: `#F6821F` (kumo library on-state = blue `#2C7CB0`)
- Off: `#D9D9D9`
- Thumb: `#FFFFFF` circle with edge+drop shadow (`shadow-[0 0 1px .5px edge, 0 1px 2px drop]`)
- Use: Proxy on/off, feature flags, security toggles

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named binary proxy/feature toggle |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | YAML off/disabled track `#D9D9D9`; a feature flag can be unavailable |
| loading | not-applicable | Binary on/off meaning is the toggle; §14 maps toggle flips to `motion-instant`, not a loading paint on the switch |
| error | not-applicable | Toggle meaning is proxy/feature state, not a validation failure on the control |
| success | not-applicable | Turning proxy on is the on-state fill, not a success confirmation painted on the switch |

Treating on-state `#F6821F` vs kumo library `#2C7CB0` as a captured-split-not-a-Core-applicability-row is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. On-state `#F6821F` vs kumo library `#2C7CB0` is a captured split, not a Core applicability row.

### Checkbox / Radio

- Role: multi-select rules, plan options, consent
- Kind: interactive
- Type: toggle (YAML checkbox). Treating radio-has-no-YAML-`type`-none-is-invented-for-radio as a reconstruction boundary rather than a Cloudflare-authored primitive is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Radio has no YAML `type`; none is invented for radio.
- Anatomy: square (checkbox) / circle (radio)
- Radius: ~6px / pill
- Checked: brand fill + white glyph
- Unchecked: 1px `#D9D9D9` hairline ring
- Use: Multi-select rules, plan options, consent

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named multi-select / consent control |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A consent or plan option can be unavailable; visual treatment omitted |
| loading | not-applicable | Checkbox/radio meaning is selection, not a request on the control |
| error | not-applicable | Validation failure is field/helper text, not an error paint on the box |
| success | not-applicable | Checking an option is selection, not a success confirmation on the control |

### Standard Panel

- Role: dashboard config panels, analytics modules — the workhorse surface
- Type: card
- Background: `#FFFFFF`
- Border: 1px solid `#EDEDED`
- Radius: `8px`
- Padding: `24px`
- Shadow: `0 1px 3px rgba(0,0,0,0.06)`
- Use: Dashboard config panels, analytics modules

YAML `surface` (type: card): canvas `#ffffff`, recessed `#f7f7f7`, line/hairline `#ededed` — kumo elevation roles. Treating recessed-`#F7F7F7`-as-not-the-white-panel-fill is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Recessed `#F7F7F7` is not the white panel fill.

### Marketing Feature Card

- Role: product/feature cards on the marketing site
- Kind: interactive
- Background: `#FFFFFF`
- Border: none
- Radius: `12px`
- Padding: `32px`
- Shadow: `0 4px 16px rgba(0,0,0,0.08)`
- Use: Product/feature cards on the marketing site

Treating YAML-has-no-marketing-feature-card-`type`-none-is-invented as a reconstruction boundary rather than a Cloudflare-authored primitive is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML has no marketing-feature-card `type`; none is invented.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named product/feature card on the marketing site |
| hover | applicable | Named hover-lift: cards rise ~2px and deepen shadow as a cue that the surface is interactive |
| focus-visible | applicable | Interactive surface; visual treatment omitted |
| disabled | applicable | A feature card can be unavailable; visual treatment omitted |

Treating Marketing Feature Card loading-error-success as omitted-at-this-boundary-because-exact-request-destination-and-outcome-mapping-is-unresolved, rather than closed from capture absence, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading, error, and success applicability are omitted. Exact request/destination/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from capture absence.

### Stat / Metric Card

- Role: analytics summary tiles (requests, bandwidth, threats blocked)
- Type: card
- Background: `#FFFFFF`
- Border: 1px solid `#EDEDED`
- Radius: `8px`
- Padding: `20px`
- Big number: `32px / 700 / Inter`, `#1D1F20`
- Label: `12px / 600` uppercase, `#717174`
- Use: Analytics summary tiles

### Data Table

- Role: DNS records, firewall rules, analytics logs
- Type: card
- Header row: background `#FAFAFA`, text 12px / 600 uppercase `#717174`, `0.04em` tracking
- Body cell: 13px / 400 `#36393A`, padding 12px 16px
- Row border: 1px solid `#EDEDED`
- Hover row: background `#FAFAFA`
- Zebra (optional): alternate `#FFFFFF` / `#FAFAFA`
- Use: DNS records, firewall rules, analytics logs

Treating YAML hover `#fafafa row` as staying-on-this-table-not-a-`focus-visible`-treatment is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML hover `#fafafa row` stays on this table; it is not a `focus-visible` treatment.

### Code Block

- Role: API examples, Worker snippets, curl commands, DNS values
- Type: card
- Background: `#F5F5F5` (light) / `#15171A` (dark)
- Text: `#1D1F20` / `#E4E6E7`
- Border: 1px solid `#EDEDED` (light)
- Radius: `6px`
- Padding: `12px 16px`
- Font: `13px / 400 / JetBrains Mono`
- Use: API examples, Worker snippets, curl commands, DNS values

### Badge

- Role: NEW, Beta, version, plan, short metadata
- Type: badge
- Radius: `9999px`
- Padding: `2px 8px`
- Font: `12px / 500`
- Variants: neutral, success, error, warning, info, orange, plus dashed-brand outline
- Optional 7px status dot (`size-1.75 rounded-full`)

### Status Pill — Active / Proxied (Green)

- Role: Active, Proxied, healthy
- Type: badge
- Background: `#E8F5D8`
- Dot: `#2FB344`
- Text: `#3D6B14`
- Radius: `9999px`
- Padding: `2px 10px`
- Font: `12px / 600 / Inter`

YAML `status-pill` also names red down `#fbe2e2`/`#bd2528` · yellow pending `#fcf3d6`/`#8a6d1b` · grey `#ededed`/`#4d4d4d` · orange `#fdf3e7`/`#c2670f`. Body rows:

- Error / Down: background `#FBE2E2`, text `#BD2528` — "Down", "Blocked", "Error"
- Pending / Paused: background `#FCF3D6`, text `#8A6D1B` — "Pending", "DNS only", "Paused"
- Neutral: background `#EDEDED`, text `#4D4D4D` — "Inactive"
- Brand: background `#FDF3E7`, text `#C2670F` — "NEW", "Beta", plan emphasis

Treating those four sibling pills as sharing Type `badge`, and as not-merged-into-the-green-Active-pill, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Those four sibling pills share Type `badge`. They are not merged into the green Active pill.

### Dialog / Modal

- Role: confirmations, destructive double-checks, add-record flows
- Type: dialog
- Background: `#FFFFFF`
- Text: `#1D1F20`
- Ring: 1px line / YAML 1px `#ededed`
- Radius: `12px` (`rounded-xl`)
- Padding: `32px` (`p-8`)
- Shadow: `0 12px 32px rgba(0,0,0,0.18)`
- Scrim: `rgba(29,31,32,0.5)` (kumo recessed at ~80% opacity)
- Enter: scale from 90% + fade over 150ms
- Use: Confirmations, destructive double-checks, add-record flows

### Toast

- Role: auto-dismissing confirmation ("Record added", "Settings saved")
- Type: toast
- Fill: `#1D1F20` (live marketing) / `#FFFFFF` (kumo)
- Text: `#FFFFFF` / `#1D1F20`
- Radius: `12px` (`rounded-xl`)
- Padding: `16px`
- Shadow: YAML `0 8px 24px rgba(0,0,0,0.12)` / body `shadow-lg`
- Accent: 4px brand left-border (marketing) or 0.3px semantic ring — success green `#2FB344`, error red `#BD2528`, warning yellow `#F6C549`, info blue `#2C7CB0`
- Position: fixed bottom-right, 340px wide; 4–5s auto-dismiss

Treating live-marketing fill `#1D1F20` and kumo fill `#FFFFFF` as both-kept-unmerged is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Live-marketing fill `#1D1F20` and kumo fill `#FFFFFF` are both kept.

### Tooltip

- Role: icon labels, truncated-value reveal, glossary terms
- Type: card
- Background: `#FFFFFF`
- Text: `#1D1F20`, 13px
- Radius: `6px` (`rounded-md`)
- Padding: `6px 10px`
- Font: YAML `13px / 400`
- Shadow: YAML `shadow-lg`, 1px outline

### Pagination

- Role: long DNS/log/audit tables (kumo `pagination`)
- Kind: interactive
- Numbered controls as compact buttons; current page brand-tinted; prev/next chevrons
- Use: long DNS/log/audit tables (kumo `pagination`)

Treating YAML-has-no-Pagination-`type`-none-is-invented as a reconstruction boundary rather than a Cloudflare-authored primitive is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML has no Pagination `type`; none is invented.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named numbered compact-button pagination |
| hover | applicable | Pointer-web numbered buttons; visual treatment omitted |
| focus-visible | applicable | Interactive numbered controls; visual treatment omitted |
| disabled | applicable | Prev/next can be unavailable at range ends; visual treatment omitted |

Treating Pagination loading-error-success as omitted-at-this-boundary-because-exact-request-outcome-mapping-is-unresolved, rather than closed from capture absence, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Loading, error, and success applicability are omitted. Exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from capture absence.

### Additional patterns (values only; no invented kind)

- **Sidebar / Left Nav:** persistent ~240px rail, white surface, 1px `#EDEDED` right hairline. Item: 14px / 400, `#36393A`; active item orange-tinted `#FDF3E7` fill + `#F6821F` text/indicator. Collapses to an icon rail, then a drawer on mobile (kumo `sidebar`).
- **Breadcrumbs:** 13px / 400 `#717174`, `#36393A` on current crumb, `/` or chevron separators in `#A1A1A1`. Use: Zone → section → record deep paths.
- **Meter / Progress:** track `#EDEDED` rounded-full; fill brand `#F6821F` (or semantic for usage warnings). Use: plan usage, bandwidth consumption, upload progress (kumo `meter`).
- **Popover / Dropdown Menu:** fill `#FFFFFF`; ring 1px `#EDEDED`; radius 8px; shadow floating `0 8px 24px rgba(0,0,0,0.12)`; item hover `#FAFAFA` fill. Use: action menus, command palette, account switcher (kumo `popover`, `dropdown`, `command-palette`).
- **Banner / Alert:** full-width inline strip; tinted background by severity (info `#FDF3E7`-style tint, warning, danger, success); 1px hairline, 14px text, optional icon + dismiss. Use: account-level notices, plan upgrade prompts, incident banners (kumo `banner`).
- **Loader / Spinner:** brand `#F6821F` ring spinner (inline) or top progress bar; existing data stays visible on refresh. Use: in-button loading (label swaps for white spinner, width preserved), table refresh (kumo `loader`).
- **Empty State:** one line of `#36393A` body explaining the *why* + one orange-ghost or secondary action; no dashboard illustration. Use: "No DNS records yet. Add your first record." (kumo `empty`).
- **DNS record row** (unique in source §9 example): white bg, 1px `#EDEDED` bottom border. Type pill (grey), name + value in 13px JetBrains Mono `#36393A`, proxy toggle (`#F6821F` on / `#D9D9D9` off), status pill "Proxied" green `#E8F5D8`/`#3D6B14`.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Marketing max-width: ~1200px, centered, 24px gutters. Dashboard: persistent left nav (~240px) + fluid content area; tables go full-width within content. 12-column responsive grid on marketing; flexible flex/stack layout in product.

Treating YAML spacing numbers as recorded without a required px suffix, and treating body 4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 96px as body-recorded observations rather than a converted YAML scale, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. YAML spacing numbers without px (xs 4 … section 64) stay in Foundations. Body common values 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px stay as body-recorded observations.

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Whitespace is read as earning trust on marketing pages — one idea per band, large headline, supporting paragraph, single orange CTA. Density is read as where work happens: data tables, log streams, and config grids are intentionally dense because operators want facts per pixel. Orange is rationed: a screen typically shows orange in exactly one or two places.

Breakpoints:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, stacked cards, hamburger nav, full-width buttons |
| Tablet | 640–1024px | 2-column feature grids, collapsible dashboard side nav |
| Desktop | 1024–1280px | Full marketing grid; dashboard left nav + content |
| Wide | >1280px | Centered 1200px marketing container; dashboard tables expand |

Touch targets: buttons ≥40px tall (≥44px on mobile). Table row actions: ≥40px tap height on touch. Toggle/switch: ≥32px hit area.

Collapsing: dashboard left nav collapses to an icon rail, then to a drawer on mobile. Wide data tables become horizontally scrollable or collapse to stacked key-value cards on small screens. Marketing multi-column feature bands stack to single column; CTAs go full-width.

Treating orange-cloud-logomark-scales-but-never-recolors and product-partner-logos-grayscale-or-mono-in-logo-walls as reconstruction application of source Image / Asset Behavior rather than a Cloudflare-authored asset licence, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. Product/partner logos render in a consistent grayscale-or-mono treatment in logo walls. Analytics charts are full-width and responsive, maintaining aspect ratio. The orange cloud logomark scales but never recolors.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Widely documented public mission line in the source: “to help build a better Internet.” Capital-I "Internet" is source-stated.

The following voice reading, context table, sample strings, and forbidden-move list — voice-read-as-technical-but-human, marketing-copy-read-as-benefit-led-and-concrete, blog-read-as-deep-with-precision-and-personality, CTAs-short-imperative-verb-phrases, Headlines-confident-benefit-first-plain, Product-UI-labels-precise-technical-unambiguous, Success-past-tense-specific, Error-specific-blameless-actionable, Empty-one-line-of-why-plus-one-action, no-live-WebFetch-quote-labeled-Observed, and forbidden-vague-enterprise-filler-fear-mongering-FUD-over-promising-100%-guarantees-and-unexpanded-acronyms — are a derived editorial implementation inference from the verified surfaces; they are not Cloudflare-authored or a separately published UI specification. Cloudflare’s voice is read as technical but human — confident, plain-spoken, and quietly witty. Marketing copy is read as benefit-led and concrete; the blog as deep with precision and personality. No live WebFetch quote is labeled Observed; the HTML comment records that a cloudflare.com WebFetch was unreachable at write time.

| Context | Tone |
|---|---|
| CTAs | Short imperative verb phrases — "Get started", "Add a site", "Sign up", "Talk to an expert". |
| Headlines | Confident, benefit-first, plain — "Make employees, applications and networks faster and more secure." |
| Product UI labels | Precise, technical, unambiguous — "Proxied", "DNS only", "Always Use HTTPS". |
| Success messages | Past-tense, specific — "DNS record added", "SSL certificate issued". |
| Error messages | Specific, blameless, actionable — name what failed and what to do next. |
| Blog / docs | Deep, candid, occasionally playful; explains the *why* behind the engineering. |
| Empty states | One line of why + one action — "No DNS records yet. Add your first record." |

Forbidden moves: vague enterprise filler ("synergy", "best-in-class") without substance; fear-mongering security FUD; over-promising 100% guarantees; burying the user in acronyms without a first-use expansion.

Treating no-synthetic-voice-samples-beyond-the-source-table as a reconstruction boundary rather than a Cloudflare-authored voice spec, is a derived editorial implementation inference from the verified surfaces; it is not Cloudflare-authored or a separately published UI specification. No synthetic voice samples are promoted beyond the source table.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- exact cubic-bezier curves for `ease-enter` / `ease-exit` / `ease-standard` / `ease-out-soft` (unattributed; names and uses kept)
- motion duration, easing, animation name, transition properties, and reduced-motion behavior beyond the source-stated tables — promote further values only after per-component computed capture of all five; a single named duration is not that gate
- `focus-visible` visual treatments as orange hex (named `Focus` and kumo `focus-visible:ring-kumo-brand` are different observations; kumo-brand is blue)
- a first-party Color by Cloudflare Design token sheet (`color.cloudflare.design` unreachable at write time)
- complete state-coverage for every kumo control
- Compact Button, Icon Button, Ghost Button, Dark CTA, Marketing Feature Card, and Pagination loading / error / success applicability (mixed or unresolved uses; omitted at the unresolved boundary)
- Text Field, Mono Input, and Select loading / success applicability (unresolved request/outcome mapping; omitted at the unresolved boundary)
