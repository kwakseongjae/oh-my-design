---
id: classum
name: Classum
display_name_kr: Classum (클라썸)
country: KR
category: education
homepage: "https://www.classum.com"
primary_color: "#ff4438"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=classum.com&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  colors:
    primary: "#ff4438"
    brand: "#ff4438"
    canvas: "#f6f6f9"
    surface: "#ffffff"
    subtle: "#f0f2f8"
    hero-dark: "#06080d"
    foreground: "#232334"
    body: "#49495a"
    muted: "#666b80"
    inert: "#758696"
    hairline: "#b5b9c8"
    on-primary: "#ffffff"
    accent-sky: "#0a84ff"
    accent-cobalt: "#243ce7"
    accent-violet: "#a567e4"
    accent-teal: "#00c3d0"
    success: "#34c759"
    warning: "#ffb020"
    danger: "#ff4438"
  typography:
    family: { sans: "Pretendard Variable" }
    hero-h1:   { size: 52, weight: 700, lineHeight: 1.4, use: "Hero H1 on inverted dark band" }
    cta:       { size: 15, weight: 600, lineHeight: 1.5, use: "Primary button label" }
    nav:       { size: 14, weight: 400, lineHeight: 1.43, use: "Nav link" }
    body:      { size: 14, weight: 400, lineHeight: 1.43, use: "Body / default — Korean-density baseline" }
    caption:   { size: 12, weight: 500, use: "Illustration / display captions" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 80 }
  rounded: { xs: 4, sm: 8, md: 16, lg: 20, xl: 30, full: 9999 }
  shadow:
    none: "none"
    float: "rgba(0,0,0,0.08) 0px 8px 24px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#ff4438", fg: "#ffffff", radius: 8, padding: "6px 16px", font: "15/600", use: "Primary CTA — signal red fill, no shadow" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#232334", use: "Outline or text-only link, paired right of primary" }
    nav: { type: tab, fg: "#232334", font: "14/400", use: "Horizontal menu, sticky on scroll, red 도입 문의 CTA right-aligned" }
    card: { type: card, bg: "#ffffff", radius: 20, use: "White surface on lavender canvas, no border/shadow — bg contrast defines boundary" }
    pill: { type: badge, radius: 9999, use: "Chip for feature tags and 신규 status markers" }
    footer: { type: card, bg: "#06080d", fg: "#ffffff", use: "Dark band, white type, social icons + app-store badges + legal links" }
---

# Design System Inspiration of Classum (클라썸)

## 1. Visual Theme & Atmosphere

Classum is a Seoul-built EdTech platform for universities and corporate L&D, and its marketing surface treats the screen the way a good classroom treats a whiteboard — quiet canvas, structured columns, one bright signal where attention must land. The body background sits at a barely-tinted lavender-gray (`#F6F6F9`), a half-step off pure white that makes elevation read without shadows, and the dominant card radius is a generous 20px that softens the otherwise dense, multi-section Webflow page composition. Type is set entirely in Pretendard Variable, the open-source Korean optical-sized sans by orioncactus, served from jsDelivr and antialiased aggressively — a deliberate choice that signals "we trust the open Korean web stack" rather than commissioning custom display type.

The brand's color discipline is unusually tight for an EdTech site: long stretches of neutral gray-violet surface punctuated by a single high-saturation red (`#FF4438`) that lives almost exclusively on primary CTAs ("도입 문의" / 도입 문의 = "request adoption inquiry"). Accent blues, violets and teals appear inside marketing illustrations and feature pills, but the page's interactive grammar is fundamentally two-color: muted lavender for everything, red when you should click. The result reads as B2B-confident without being corporate-cold — closer to a research lab's recruiting page than a typical SaaS hero.

Elevation is almost entirely flat. The CTA observed live had `box-shadow: none`, cards lean on radius and background contrast instead, and the only depth signal is the lavender canvas pulling cards forward without a stated z-axis. For a product whose actual application is a discussion-heavy LMS (Q&A threads, instructor responses, AI chatbot suggestions), the marketing site's flatness is a thesis: comprehension comes from layout clarity, not from chrome.

**Key Characteristics:**
- Lavender-gray canvas (`#F6F6F9`) instead of pure white — softens dense B2B information density
- Single saturated brand red (`#FF4438`) reserved strictly for primary CTAs
- Pretendard Variable as the only typeface — open-source Korean sans, jsDelivr-delivered
- 20px dominant card radius, 8px CTA radius, 999px pills for status chips
- Flat shadow language — `box-shadow: none` on primary CTA, depth through bg contrast
- 14px / 1.43 lh body baseline — tight Korean reading rhythm, not Western 16px default
- Webflow-built site, Channel Talk live chat — typical Korean B2B SaaS stack

## 2. Color Palette & Roles

### Primary
- **Signal Red** (`#FF4438`): Primary CTA fill only — "도입 문의", "소개서 받기" booking CTAs. Never used on body type, never on decorative blocks.
- **Ink** (`#232334`): Primary heading color on light surfaces — a dark navy-charcoal, not true black. Warmer than `#000`.
- **White** (`#FFFFFF`): Card and modal surface — used wherever content needs to lift off the lavender canvas.

### Surface & Background
- **Canvas** (`#F6F6F9`): Page background — the lavender-gray that defines the whole site mood.
- **Surface** (`#FFFFFF`): Card / modal / sticky-nav surface.
- **Subtle** (`#F0F2F8`): Tertiary fills, alternating rows, soft section dividers.
- **Hero Dark** (`#06080D`–`#121215`): Inverted hero/footer band — the rare dark surface where white type takes over.

### Neutrals & Text
- **Ink** (`#232334`): Primary headings and body emphasis.
- **Slate** (`#49495A`): Secondary body text — descriptions, captions.
- **Mute** (`#666B80`): Tertiary labels, metadata, breadcrumb.
- **Subtle** (`#758696`): Disabled / inert text.
- **Border** (`#B5B9C8`): Card borders, divider rules.

### Accent (illustration-only)
- **Sky** (`#0A84FF`) / **Cobalt** (`#243CE7`): Hyperlinks and product-mark accents.
- **Violet** (`#A567E4`): AI-feature illustration accents.
- **Teal** (`#00C3D0`): Skill/competency data visualization.
- **Green** (`#009A5A` / `#34C759`): Success states, growth metrics in case-study charts.

### Semantic
- Classum does not expose a formal semantic palette publicly; on the marketing surface, semantic color appears almost exclusively inside illustration assets. Inferred semantic mapping below for downstream use.
- **Success**: `#34C759` (matches iOS system green — likely intentional given Pretendard's Apple-adjacent stack).
- **Warning**: `#FFB020` (illustration-derived).
- **Danger**: `#FF4438` (same as brand red — implies CTAs and destructive actions share visual weight; downstream consumers should split this).

### Gradient System
- The site avoids type gradients entirely. Visual gradients appear only in hero illustration backgrounds (blue-violet washes behind product mockups). Functional UI is fully flat.

## 3. Typography Rules

### Font Family
- **All roles**: `Pretendard Variable` — single typeface across hero, body, nav, CTA, footer. The variable axis covers weights 100–900; observed weights in production are 300 / 400 / 500 / 600 / 700.
- **Source**: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css` (SIL OFL 1.1).
- **Fallback stack**: `-apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif` — Korean-first system fallbacks before Western ones.
- **Rendering**: `-webkit-font-smoothing: antialiased`, `text-rendering: optimizeLegibility` — applied globally.

### Type Scale (observed live)
- **Hero H1**: 52px / 72.8px line-height / weight 700 — used on the inverted dark hero band.
- **CTA**: 15px / 22.5px / weight 600 — primary button label.
- **Nav link**: 14px / 20px / weight 400.
- **Body / default**: 14px / 20px / weight 400 — note this is *one step below* the Western 16px default, a deliberate Korean-density choice.
- **Display caption** (illustration labels): observed 11–13px / weight 500–600.

### Weight Discipline
Production CSS frequencies: 700 (55 occurrences) > 600 (32) > 400 (16) > bold-keyword (11) > 500 (11) > 300 (6). The system relies on **bold-vs-regular contrast** rather than mid-weight subtlety — when a Classum surface needs hierarchy, it jumps from 400 to 600/700, rarely passing through 500.

### Korean Treatment
Pretendard's optical sizing handles Korean syllables (한글) at the same metrics as Latin without manual `lang="ko"` overrides. Classum does not appear to use any letter-spacing adjustment for Korean (`letter-spacing: normal` on every observed sample) — trusting Pretendard's default kerning.

## 4. Spacing, Radius, Shadow

### Radius (CSS bundle frequency)
- `20px` (×18 — dominant card radius)
- `var(--r-12)` (×12)
- `999px` (×10 — pill chips)
- `10px` (×9)
- `30px` (×8 — large feature cards)
- `100%` (×8 — circular avatars)
- `8px` (×7 — CTA buttons)
- `16px` (×7)
- `4px` (×7 — input chips)

The radius spectrum is wide but disciplined: CTAs at 8px, content cards at 20px, hero feature cards at 30px, pills at 999px. There is no 2px / 6px / 14px noise — Classum picks ratios cleanly.

### Spacing
- Container max-width and inner padding are Webflow-grid-driven; observed CTA padding `6px 16px`. The lavender canvas leaves wide unbranded margins between sections — vertical rhythm comes from 80–120px section padding.

### Shadow
- The captured CTA had `box-shadow: none`. The CSS bundle does include `box-shadow` rules but they are reserved for floating elements (modals, dropdowns, the Channel Talk widget). Marketing-surface depth is canvas-vs-card, not z-axis.

## 5. Component Patterns

- **Primary CTA**: red fill (`#FF4438`), white label, weight 600, 8px radius, 6×16 padding, no shadow, no hover-lift observed (Webflow default opacity dim).
- **Secondary CTA**: outline or text-only link, ink color, often paired right-of-primary.
- **Nav**: 14px / 400 inline horizontal menu, login + "도입 문의" red CTA right-aligned, sticky on scroll.
- **Cards**: white surface on lavender canvas, 20px radius, no border, no shadow — bg contrast alone defines the card boundary.
- **Pills / chips**: 999px radius, used for feature tags and "신규" status markers inside hero illustrations.
- **Forms**: not exposed on public surface (gated behind "도입 문의" form modal via Channel Talk).
- **Footer**: dark band (`#06080D`–`#121215`), white type, social icons + app-store badges + legal links.

## 6. Visual Style

- **Photography vs illustration**: heavily illustration-led. Product mockup screenshots (LMS dashboards, AI chat surfaces) are the primary content, framed inside browser-chrome mockups on gradient backdrops.
- **Iconography**: line + filled hybrid, weight 1.5–2px strokes, matching Pretendard's geometric character.
- **Charts / data**: case-study sections lean on horizontal bar / arc gauges with the accent palette (teal, green, violet).
- **Mascot / character**: none observed.

## 7. Voice & Microcopy Posture

Classum's marketing voice (Korean) is **direct, B2B, outcome-oriented** — sentences are short declarative, present-tense, and verb-final per Korean syntax. Korean honorifics are formal `~합니다` style, not the casual `~해요` style seen in C2C Korean SaaS like Toss or Daangn. English voice (on the same site's translated sections) mirrors this: short claims, no exclamation marks, no marketing hyperbole. Calls to action are functional verbs (`문의`, `받기`, `보기`) — Classum does not pun or use playful imperatives.

**Voice tendencies** (paraphrased, not quoted):
- Lead with the operational benefit (efficiency, data consolidation), follow with the human outcome (autonomous growth, communication).
- Use AI as a modifier, not as a noun headline ("AI 기반 LMS" vs "AI for education").
- Audience-segmented copy: separate doors for universities and corporate HR, never a unified "for everyone" pitch.

> **IP note**: this section paraphrases only. Verbatim Classum taglines are not reproduced in this DESIGN.md.

## 8. Interaction & Motion

- Webflow-default page transitions only — no custom motion library detected in the CSS bundle.
- Scroll-triggered fades on section reveal (Webflow IX2).
- No marquee, no parallax beyond Webflow defaults, no auto-rotating hero carousel.
- Live chat (Channel Talk) is the one persistent interactive element bottom-right.

## 9. Site Architecture (observed)

```
business.classum.com/
├── Hero (dark band, AI 에듀테크 솔루션 positioning)
├── Product pillars (4): AI LMS / Learning Community / Classum Connect / Skill Solution
├── Audience split: 대학 vs 기업 HRD
├── Case studies
├── Resources (브로셔, 블로그, 채용)
└── Footer (dark, legal + social + app badges)
```

Top-nav surfaces: AI 기반 LMS · 학습 커뮤니티 · AI 상담 챗봇 · 스킬 솔루션 · 리소스 · 로그인 · 도입 문의 (red CTA).


## 16. Do's and Don'ts

### Do
- Reserve the saturated brand red `#FF4438` strictly for primary CTA fills like "도입 문의", and let everything else stay in the lavender-gray neutral range
- Set the page background to the barely-tinted lavender-gray canvas `#F6F6F9` rather than pure white, so white cards (`#FFFFFF`) read as elevated through background contrast alone
- Typeset every role — hero, body, nav, CTA, footer — in Pretendard Variable, using only the production weights 300/400/500/600/700 served from the jsDelivr CDN
- Build hierarchy by jumping from weight 400 to 600/700 (bold-vs-regular contrast) instead of leaning on mid-weight 500 transitions
- Apply the disciplined radius ladder — 8px on CTA buttons, 20px on content cards, 30px on large feature cards, 999px on pill chips — with no in-between 2px/6px/14px noise
- Use Ink `#232334` (a warm navy-charcoal, not true black) for primary headings, with Slate `#49495A` for secondary body text and Mute `#666B80` for tertiary labels

### Don't
- Spread `#FF4438` onto body type, decorative blocks, or a second button color — there is one button color for one job
- Stack box-shadows for elevation on marketing surfaces; the primary CTA ships `box-shadow: none` and depth comes from canvas-vs-card contrast, reserving shadows only for floating UI like modals, dropdowns, and the chat widget
- Pad the layout to a Western 16px body baseline — keep the deliberate Korean-density 14px / 1.43 line-height reading rhythm
- Introduce serif accents, all-caps display type, decorative scripts, glassmorphism, or emoji-led headlines, all of which Classum's B2B-serious surface refuses
- Write a generic "everyone benefits" pitch — every section should name its audience (대학 vs 기업 HRD) before splitting by feature
- Add type gradients or auto-rotating hero carousels; gradients live only in hero illustration backdrops and functional UI stays fully flat

---

## 10. Brand Philosophy (paraphrased, not quoted)

Classum's product thesis treats communication as the unit of learning — questions, answers, threaded discussion, and instructor presence are the primary surfaces, while content delivery is secondary. The marketing surface reflects this by privileging audience-segmented narrative (universities and HR-led enterprises each get their own doorway) over generic feature lists. AI is positioned as a labor-multiplier for educators and L&D managers, not as a replacement narrator — every AI feature on the site is framed alongside a human role it supports (TA, HR manager, instructor).

## 11. Design Principles (inferred from surface)

1. **One signal color, one type family.** Red lives on CTAs, Pretendard does every text role. Restraint is the brand.
2. **Korean-density typography.** 14px body, 1.43 lh — accept that Korean readers parse syllables faster and don't pad like Western sites.
3. **Flat by default, depth on demand.** Marketing pages are shadow-free; reserve elevation for floating UI (modals, chat).
4. **Audience-first IA.** Split surfaces by buyer (university vs HR) before splitting by feature.
5. **Open-source over proprietary.** Pretendard, Webflow, Channel Talk — Classum optimizes for time-to-iterate, not for owning every layer.

## 12. Anti-patterns (what Classum's surface refuses)

- No multi-color CTA palette — there is one button color, one job.
- No serif accents, no all-caps display type, no decorative scripts.
- No glassmorphism, no skeuomorphic shadow stacks.
- No emoji-led marketing headlines (rare for a 2026 Korean SaaS — a deliberate signal of B2B seriousness).
- No "everyone benefits" generic pitches — every section names its audience.

## 13. Personas (inferred for downstream OmD use)

- **대학 운영팀 (University Operations Lead)**: needs LMS + Q&A unification across departments. Cares about TA workload reduction, instructor adoption, FERPA-adjacent Korean privacy posture.
- **기업 HRD 매니저 (Corporate L&D Manager)**: needs measurable skill assessment + scalable internal community. Cares about completion rates, skill-gap analytics, integration with HRIS.
- **AI 도입 검토자 (AI Procurement Reviewer)**: needs vendor with clear data-handling story, evaluates Classum Connect against in-house GPT pilots.

## 14. Accessibility Posture (observed, not certified)

- Pretendard Variable rendered at 14px with `-webkit-font-smoothing: antialiased` — legible at small sizes, but 14px Korean body sits just at WCAG floor; downstream consumers should consider 15–16px base for broader audiences.
- Primary CTA `#FF4438` on white = ~4.3:1 contrast (AA for large text, borderline for 14px). White CTA label on `#FF4438` background = ~4.6:1 — passes AA for body, narrowly.
- No `prefers-reduced-motion` overrides detected.
- Channel Talk widget injects its own focus order; keyboard-only navigation on the marketing site is otherwise clean.

## 15. Verification Footer

**Verified:** 2026-05-14
**Tier 1 — Live inspect (succeeded):**
- CDP `getComputedStyle` × 6 raw samples (hero h1, nav, primary CTA, secondary link, body, section card) on `https://business.classum.com/` — captured in `assets/_reference/.live-inspect-proof.json`.
- Production CSS bundle frequency analysis on `https://cdn.prod.website-files.com/67b08d840cb9f278763c8005/css/classum-web.webflow.shared.ee81640c2.css` (13,904 lines).

**Tier 1 — Official DS lookup (negative result, documented):**
- `classum.com/brand` — page title only, no DS/brand guideline content surfaced.
- No public Figma library, no `design.classum.com`, no GitHub org with token repo found.
- Classum operates as a closed B2B SaaS without published brand guidelines as of 2026-05-14.

**Tier 2 — Third-party indexes (both empty):**
- `getdesign.md/classum` → "No designs found for 'classum'." (consistent with KR-10 systemic finding that English directories under-index Korean SaaS).
- `styles.refero.design/?q=classum` → no entry returned.

**Conflicts unresolved:** none — Tier 1 live data was internally consistent across CSS bundle and runtime samples.

**IP guardrails applied:**
- Brand assets (logo, screenshots) referenced by URL only, not redistributed.
- No verbatim taglines reproduced — §7 voice analysis is paraphrased.
- Voice mimicry kept abstract (tone descriptors, not phrase templates).
