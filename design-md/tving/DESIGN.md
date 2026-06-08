---
id: tving
name: TVING
display_name_kr: TVING (티빙)
country: KR
category: consumer-tech
homepage: "https://www.tving.com"
primary_color: "#ff153c"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tving.com&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#ff153c"
    canvas: "#000000"
    on-primary: "#ffffff"
    surface: "#2e2e2e"
    surface-modal: "#111111"
    surface-overlay: "#262626"
    text-secondary: "#b3b3b3"
    text-tertiary: "#a3a3a3"
    disabled-bright: "#d9d9d9"
    muted: "#6e6e6e"
    disabled-deep: "#4f4f4f"
    cate-home: "#ff1f45"
    cate-live: "#ff584a"
    cate-clip: "#fd8163"
    cate-vod: "#387dff"
    cate-movie: "#7d57fc"
    cate-ad: "#fcc800"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    hero:         { size: 43, weight: 700, use: "Hero headline, onboarding h2" }
    cta:          { size: 19, weight: 700, use: "Primary CTA label" }
    secondary-nav: { size: 16, weight: 400, use: "Secondary nav" }
    footer:       { size: 16, weight: 400, use: "Footer link" }
    nav-cta:      { size: 14, weight: 700, use: "Nav CTA 티빙 시작하기" }
    body:         { size: 12, weight: 400, use: "Body baseline" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 3, md: 8, lg: 16, full: 9999 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    button-cta-hero: { type: button, bg: "#ff153c", fg: "#ffffff", radius: 12, font: "19/700", use: "Primary hero CTA" }
    button-cta-nav: { type: button, bg: "#ff153c", fg: "#ffffff", radius: 8, font: "14/700", use: "Header inline CTA 티빙 시작하기" }
    card-poster: { type: card, radius: 16, use: "Poster card, top-corners-only radius, art bleeds bottom edge" }
    chip-meta: { type: badge, radius: 3, use: "Fine chip / tag / meta-label" }
    avatar: { type: avatar, radius: 9999, use: "Avatar / circular icon" }
---

# Design System Inspiration of TVING (티빙)

## 1. Visual Theme & Atmosphere

TVING is Korea's CJ ENM-backed streaming platform, and its product surface reads like a cinema-darkened auditorium tuned for Korean primetime — the canvas is a near-absolute black (`#000000` locked at the document root), text floats in pure white (`#FFFFFF`) with a four-step gray scale beneath it (`#B3B3B3` → `#A3A3A3` → `#6E6E6E` → `#4F4F4F`), and the single chromatic interruption is a saturated red the brand encodes on `:root` as `--tving: 350 100% 54.12%` — runtime hex `#FF153C`. This is not a sentimental crimson. It is a hot, almost neon scarlet, applied with monastic discipline: across 3,000 sampled nodes, only twelve carry that red as a background — every one of them a CTA, a brand mark, or a live-status indicator. The platform's geometric signature is a top-corners-only card radius (`16.5292px 16.5292px 0 0`), engineered so poster art bleeds to the bottom edge of each tile — an OTT idiom shared with Disney+ and Wavve but tuned here to a 1.033rem radius that reads slightly tighter than industry default.

What distinguishes TVING from its Korean OTT peers is the **category-color taxonomy hardcoded into the design system itself**. Six content categories — home (`#FF1F45`), live (`#FF584A`), clip (`#FD8163`), VOD (`#387DFF`), movie (`#7D57FC`), and ad (`#FCC800`) — are not merely page accents but first-class `:root` CSS custom properties (`--color-cate-home`, `--color-cate-live`, etc.). Category color IS product taxonomy: when a user navigates between live KBO baseball, VOD drama, and clip browse, the chrome itself shifts hue. Reinforcing this, the system carries **dedicated live-streaming geometry tokens** — `--kbo-player-height`, `--sports-player-width`, `--live-tab-player-companion-banner-height` — meaning live sports is not a feature retrofitted onto a VOD player but a co-equal surface paradigm. Pretendard is the exclusive typeface (100% of samples; Apple SD Gothic Neo only as system fallback), weight discipline is binary (400 body / 700 heading and CTA — no 500/600 intermediates observed), and depth is constructed through layered dark surfaces (`#000` → `#2E2E2E` → `rgba(15,15,15,0.74)` overlay) rather than box-shadows, which return `0 0 #0000` on every sampled production element.

**Key Characteristics:**
- Locked dark canvas (`#000000` at `html`) — no light-mode token observed; the platform is dark-mode-only by design.
- Single brand red (`#FF153C`) reserved for CTAs and brand marks; observed on 4 of 12 dominant background colors, runtime alpha-variants `rgb(255,21,60)` / `rgb(254,21,60)` / `rgb(255,31,69)` all collapse to one canonical token.
- **Six-category color taxonomy as `:root` primitives** — home/live/clip/VOD/movie/ad each own a CSS custom property; rare case where color IS product information architecture.
- Top-corners-only card radius (`16.5292px 16.5292px 0 0`) for poster bleed — observed 20× on home surface alone.
- Pretendard exclusive (SIL OFL 1.1), weight binary (400 / 700).
- Box-shadow zero across product chrome — depth via surface contrast, not elevation.
- Dedicated live-streaming geometry tokens (`--kbo-player-*`, `--sports-player-*`) elevate live as a peer surface to VOD.
- Tailwind utility layer (`--tw-*`) + Emotion CSS-in-JS (`css-*` hashes) + shadcn-pattern semantic roles (`--card`, `--popover`, `--muted`) coexist — pragmatic framework stack, not opinionated DS purism.

## 2. Color Palette & Roles

### Brand
- **TVING Red** (`#FF153C`, canonical `--tving: 350 100% 54.12%` HSL) — primary CTA backgrounds, brand mark, live-status accents. Runtime alpha-variants observed (`#FE153C`, `#FF1F45`) collapse to one logical token.
- **Pure Black** (`#000000`) — locked canvas at `html` and `body`. No theme alternate observed.
- **Pure White** (`#FFFFFF`) — primary text on canvas; 519 occurrences in 3,000-node sample (dominant text color).

### Surface ladder (dark)
- `#000000` — canvas / page background (12 occurrences as bg)
- `#2E2E2E` — elevated card / chip surface (10 occurrences as bg)
- `#111111` / `#262626` — modal / overlay surface
- `rgba(15,15,15,0.74)` — bottom-sheet / scrim overlay
- `rgba(0,0,0,0.5)` — image-overlay scrim
- `rgba(255,255,255,0.1)` / `rgba(255,255,255,0.4)` — hover/active glass tint on poster cards

### Text scale (grayscale)
- `#FFFFFF` — primary text, headlines (519×)
- `#B3B3B3` — secondary body (169×)
- `#A3A3A3` — tertiary metadata (24×)
- `#D9D9D9` — disabled-bright (6×)
- `#6E6E6E` — muted hint (52×)
- `#4F4F4F` — disabled-deep (1×)

### Category taxonomy (first-class `:root` tokens)
- `--color-cate-home`: `#FF1F45` (home shelf)
- `--color-cate-live`: `#FF584A` (live streaming)
- `--color-cate-clip`: `#FD8163` (short-form clips)
- `--color-cate-vod`: `#387DFF` (on-demand)
- `--color-cate-movie`: `#7D57FC` (films)
- `--color-cate-ad`: `#FCC800` (sponsored / ad indicator)

### Border
- `hsl(0,0%,31%)` (`--border`) — hairline divider; rendered at 1px on dark surface, near-invisible until hover.

## 3. Typography

Pretendard exclusive. No display accent face. No serif. Weight binary.

| Role | Family | Size (observed) | Weight |
|---|---|---|---|
| Hero headline (h2 onboarding) | Pretendard | 43.4px | 700 |
| Body baseline | Pretendard | 12.4px | 400 |
| Primary CTA label | Pretendard | 18.6px | 700 |
| Nav CTA ('티빙 시작하기') | Pretendard | 14px | 700 |
| Footer link | Pretendard | 15.5px | 400 / 700 mixed |
| Secondary nav | Pretendard | 16px | 400 |

**Stack:** `Pretendard, -apple-system, "system-ui", Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`

CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css` (SIL OFL 1.1).

## 4. Shape & Radius

Base token `--radius: 0.5rem` (8px), but runtime values cluster at three points:

| Radius | Frequency | Role |
|---|---|---|
| `16.5292px` (top-corners only) | 41× (20× as top-only) | Poster card top — image bleeds bottom edge |
| `12.4px` | 3× | Primary hero CTA |
| `8px` | 1× observed | Header inline CTA |
| `3px` (and top-only) | 13× (10× top-only) | Fine chip / tag / meta-label |
| `50%` | 4× | Avatar / circular icon |
| `9999px` | 1× | Pill (rare) |

The signature is **top-corners-only on poster cards** — bottom edge sits flush against metadata so poster art reads as bleed, not framed.

## 5. Spacing & Layout

Layout primitives carried as CSS custom properties on `:root`:

| Token | Value | Role |
|---|---|---|
| `--gnb-height` | `70px` | Global nav bar (authenticated) |
| `--header-height` | `4rem` (64px) | Marketing / onboarding header |
| `--bottom-tab-height` | `4.167rem` (≈66.7px) | Mobile bottom tab bar |
| `--safe-area-inset-{top,bottom,left,right}` | dynamic | iOS PWA safe areas |
| `--content-inset-{top,bottom,right}` | `0px` (default) | Dynamic content insets when player docked |
| `--live-tab-player-height-desktop` | `calc((100vw - 40rem) * 0.5625)` | 16:9 docked player |
| `--kbo-player-width` | `calc(100vw - 31.25rem)` | KBO baseball player width (subtracts 500px sidebar) |
| `--sports-player-height` | `calc((100vw - 31.25rem) * 0.5625)` | Sports player 16:9 |

Page viewport: `1280×713` (desktop test). Onboarding scroll height `4,440px` (~6.22 viewports).

## 6. Elevation & Depth

**Box-shadow returns `0 0 #0000` on every sampled product element.** Depth is constructed via surface contrast:

1. Canvas `#000000`
2. Elevated `#2E2E2E` (+46 luminance)
3. Modal/overlay `rgba(15,15,15,0.74)`
4. Glass tint `rgba(255,255,255,0.1)` on hover

The `--tw-shadow` and `--tw-drop-shadow` Tailwind tokens exist but render as zero — design discipline, not framework limitation.

## 7. Iconography & Imagery

Not directly inspected this pass (authenticated browse gated). System signals:
- Avatar / circular icons use `50%` radius (4 observed).
- Live indicators presumed to use `--color-cate-live` (`#FF584A`) as fill.
- Poster art is the dominant visual asset on browse surfaces; placeholder ratio inferred at 2:3 portrait (industry standard, confirmed by top-corners-only card geometry).

## 8. Motion

Not captured live (no interactions triggered during static-state inspect). System carries Swiper carousel (`--swiper-theme-color: #007AFF`) and SweetAlert2 (`--swal2-width: 30rem`) as vendor primitives. Tailwind transform tokens (`--tw-translate-{x,y}`, `--tw-rotate`, `--tw-scale-{x,y}`) are reset to default — motion is applied per-component, not from `:root`.

Flagged for UPDATE pass: hover transitions on poster cards, player chrome fade timing, modal entrance curves.

## 9. Component Patterns & States

### Primary CTA (`프로모션 보기`, `티빙 시작하기`)
- Background: `#FF153C` (canonical brand red)
- Color: `#FFFFFF`
- Radius: `12.4px` (hero) / `8px` (header inline)
- Padding: `19.6292px 62px` (hero) — generous horizontal, allowing 4-syllable Korean CTAs without wrap
- Font: Pretendard 18.6px / 700 (hero), 14px / 700 (header)
- Height: 62px (hero), 32px (header)
- Border: none

### Secondary / nav links
- Color: `#A3A3A3` default, `#FFFFFF` active
- Size: 15.5px / 400 (passive), 700 (current)
- No background, no border

### Footer
- Background: `#000000` (continuous with canvas)
- Links: `#A3A3A3` 15.5px; `개인정보처리방침` rendered at weight 700 (legal-emphasis convention)

### Live status
- Presumed to use `#FF584A` (`--color-cate-live`) with circular pulse indicator (live token system suggests dedicated chrome).

## 10. Voice & Tone

TVING's product voice — observed from button labels, footer copy register, and onboarding headline structure — is **concise, action-oriented, casual-polite Korean (`-요/-세요`)**. No exclamation marks observed on CTAs. No marketing superlatives within product chrome. The onboarding headline `지금 시작해보세요` is grammatically a polite imperative without emphasis — invitation, not exhortation.

The voice register sits between Netflix Korea's neutral-formal and Wavve's slightly more casual approach. Footer items use legal-register nouns (`이용약관`, `법적고지`) without softening.

**Voice samples (OmD-original analyst characterizations — NOT verbatim from TVING):**
- Action: "지금 보세요" / "이어서 보기" / "시청 계속하기"
- Status: "라이브 진행 중" / "오늘 공개" / "에피소드 12까지"
- Empty / error: "잠시 후 다시 시도해주세요" / "지금은 시청할 수 없어요"

IP guardrail: TVING's actual marketing taglines (`스트리밍의 모든 것`, etc.) are NOT reproduced in this DESIGN.md. Voice samples above are fresh illustrative reconstructions in the observed register.

## 11. Brand Narrative (Reported Facts Only)

TVING is operated by **TVING Inc.**, a subsidiary of **CJ ENM** (Korea's largest media conglomerate). Originally launched in 2010 as a CJ Hellovision live-TV streaming service, the platform was relaunched in 2020 as a standalone OTT after CJ ENM spun off TVING as an independent company in partnership with JTBC Studios. The platform's competitive thesis is **K-content provenance** — CJ ENM and JTBC together produce a large share of Korea's tvN, JTBC, and CJ-affiliated drama and entertainment IP, giving TVING first-window exclusivity on a substantial portion of Korean primetime programming. In 2022, TVING absorbed Paramount+ Korean operations under a content partnership.

Headquarters: Seoul, South Korea. Service domain: `www.tving.com`. The 🐴 horse emoji prefixing the browser tab title is a 2024-2025 brand-personality device tied to TVING's marketing campaigns.

**[FILL IN]**: Exact subscriber count, current CEO, latest funding round are not verified at OmD attribution fidelity in this pass — flagged for UPDATE if needed.

## 12. Personas (Inferred, Public-Surveys-Only)

**[FILL IN]** — Personas below are **inferred from public market positioning** (CJ ENM K-content focus, live-sports investment, mobile-first chrome), not from TVING-published user research:

1. **K-drama primetime viewer (25-44, urban, mobile)** — watches tvN / JTBC originals same-night-as-broadcast; values episode-tracking continuity and download-for-commute.
2. **Live sports follower (KBO baseball, 30-55, dual-screen)** — uses TVING during commute and at home for live KBO games (TVING holds KBO streaming rights); dedicated `--kbo-player-*` tokens confirm this user is a first-class design target.
3. **Variety-show casual (teens-20s, social)** — clips surface (`--color-cate-clip`) suggests short-form viewing pattern for variety highlights, shared into chat apps.

Authentic persona work would require access to TVING's internal research or commissioned surveys — explicitly out of scope here.

## 13. Anti-Patterns & Don'ts

**Do NOT, when porting this design language to your own product:**

1. **Don't replicate the locked dark canvas if your content is not video.** TVING's `#000` works because poster art and video frames provide all the visual energy. A dark-mode SaaS dashboard or marketplace inherits the gloom without inheriting the cinema.
2. **Don't claim a six-category taxonomy without earning it.** The `--color-cate-*` system works because TVING genuinely has six content surface paradigms (live sports, live TV, VOD drama, VOD movie, clips, ads). Adopting six taxonomy hues for a product with three actual surfaces produces visual noise.
3. **Don't replicate `#FF153C` verbatim.** It is a CJ ENM brand color in spirit; shift via `delta_set` if you want a "TVING-like" warm scarlet — try `#E0142E` to `#FF2A4D` range with WCAG-checked contrast on dark surface.
4. **Don't skip Pretendard for "system font."** TVING's typography reads tight and modern because Pretendard's optical sizing differs from Apple SD Gothic Neo at the 12-18px display range. System fallback degrades the character meaningfully.
5. **Don't apply top-corners-only radius to non-poster cards.** That geometry is meaningful only when the bottom edge is an image bleed; on a text card it reads as a CSS mistake.
6. **Don't import the live-streaming geometry tokens as-is.** `--kbo-player-width: calc(100vw - 31.25rem)` is calibrated to TVING's specific sidebar — meaningless context elsewhere.

## 14. Implementation Notes

- **Stack**: Next.js (inferred from chunked CSS class hashes) + Emotion CSS-in-JS + Tailwind utility layer + shadcn/ui-pattern semantic role tokens.
- **Token strategy**: HSL components in CSS vars (`350 100% 54.12%`) so `hsl(var(--tving) / 0.5)` produces alpha variants without separate tokens — a shadcn idiom.
- **Live geometry**: All live-streaming player dimensions are `calc()` expressions against `100vw` minus a fixed sidebar — meaning the player resizes responsively to viewport while sidebar stays pinned.
- **iOS PWA**: `--safe-area-inset-*` plumbed throughout — TVING ships as a native-feeling PWA on iOS in addition to native apps.
- **Vendor coexistence**: SweetAlert2 (modal), Swiper (carousel), and the bundled shadcn-pattern primitives all run side-by-side. Pragmatic, not opinionated.

## 15. Verification

| § | Source | Date | Confidence |
|---|---|---|---|
| 1, 2, 3, 4, 5, 6, 9 | Live CDP capture via browser-harness :9222 — 13 raw_samples, 114 :root CSS custom properties, 3000-node frequency analysis | 2026-05-15 | High |
| 7, 8 | Token-level signals only (interactions not triggered in static inspect) | 2026-05-15 | Medium (flagged for UPDATE) |
| 10 | Observed button labels + footer copy register; voice samples are OmD-original analyst reconstructions | 2026-05-15 | Medium (no verbatim adoption) |
| 11 | Public corporate narrative (CJ ENM / TVING Inc. press history) | 2026-05-15 | Medium (subscriber/CEO marked FILL IN) |
| 12 | **Inferred only** — no TVING-published persona research consulted | 2026-05-15 | Low (explicitly flagged) |
| 13 | OmD-original analytical guidance | 2026-05-15 | High (analyst opinion) |

### Tier 1 — Official Design System
**Result: negative (documented).**

Probed all canonical subdomain patterns:
- `design.tving.com` → DNS 000
- `brand.tving.com` → DNS 000
- `tech.tving.com` → DNS 000
- `tving.com/design` → 404
- GitHub `tving` org → 1 repo (`tving.github.io`, empty)
- CJ ENM corporate channels — no public TVING-branded DS portal

The production CSS `:root` token set (114 custom properties) extracted via live CDP capture is the closest authoritative public artifact and is treated here as the de-facto source of truth.

### Tier 2 — Third-party indexes
- `getdesign.md/q/tving` → 404
- `styles.refero.design/?q=tving` → 200 with no result cards

Consistent with the systemic Korean-coverage gap.

### IP Guardrails
- Brand assets (logo, name, `#FF153C`) referenced for analysis only — not redistributed.
- §10 Voice samples are **fresh OmD-original analyst reconstructions** in the observed register — no verbatim TVING marketing copy or taglines reproduced.
- §11 narrative is sourced from publicly reported facts (CJ ENM corporate history); subscriber/CEO/funding marked **[FILL IN]** where attribution fidelity is insufficient.
- §12 personas are explicitly inferred from market positioning; authentic persona work would require TVING-internal research.
- Content thumbnails (poster art, hero stills, episode metadata) NOT captured into product DOM or this DESIGN.md. Reference screenshot kept under fair-use commentary.

### Flagged for UPDATE pass
- Authenticated browse / VOD detail / live KBO player surfaces — gated, not inspected.
- Motion timing (poster card hover, player chrome fade, modal entrance) — requires interaction triggers.
- Exact live category-color usage on chrome — `--color-cate-*` system observed in tokens but per-surface application not visually verified.
- TVING subscriber count, current CEO, latest funding, founding-year specifics for §11.

---

*Captured via `omd:add-reference` (CREATE mode) on 2026-05-15. See `assets/_reference/` for tokens.json, structure.json, fonts.json, .live-inspect-proof.json, screenshots/, LICENSE-NOTE.md, attribution.md.*

## 16. Do's and Don'ts

### Do
- Lock the canvas to pure black (#000000) at the document root and build depth through surface contrast (#000 → #2E2E2E → rgba(15,15,15,0.74)) since box-shadow renders 0 0 #0000 across all product chrome
- Reserve the brand red #FF153C strictly for CTAs, brand marks, and live-status accents — keeping it to a handful of background nodes the way the doc samples only twelve red backgrounds across 3,000 nodes
- Drive content-area-aware chrome from the six --color-cate-* tokens (home #FF1F45, live #FF584A, clip #FD8163, VOD #387DFF, movie #7D57FC, ad #FCC800) so color carries product taxonomy
- Apply the top-corners-only radius (16.5292px 16.5292px 0 0) to poster cards so the image bleeds flush to the bottom metadata edge
- Set Pretendard as the exclusive typeface and hold weights to the binary 400 body / 700 heading-and-CTA scale, with no 500/600 intermediates
- Build primary CTAs as #FF153C background, #FFFFFF label, Pretendard 18.6px/700 with generous 19.6292px 62px padding so 4-syllable Korean labels never wrap

### Don't
- Spread #FF153C across large background areas or decorative fills — it is a CTA, brand-mark, and live-status accent only, never an ambient surface color
- Apply the locked dark canvas to non-video products, since #000 earns its energy from poster art and video frames a SaaS dashboard or marketplace cannot supply
- Adopt the six --color-cate-* taxonomy hues for a product with fewer than six genuine content surface paradigms, which only produces visual noise
- Reproduce #FF153C verbatim as it is a CJ ENM brand color — shift it within the #E0142E–#FF2A4D range with WCAG contrast checks on dark surface if you want a TVING-like scarlet
- Substitute a system font for Pretendard, whose optical sizing differs meaningfully from Apple SD Gothic Neo at the 12–18px display range
- Apply the top-corners-only radius to text cards or import the live geometry tokens (e.g. --kbo-player-width: calc(100vw - 31.25rem)) as-is, since both are calibrated to TVING's poster bleed and specific sidebar
