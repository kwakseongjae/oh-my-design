# Preview v2 — Reference Preview Renderer (Build Target)

Status: build target. Single source of truth for the fleet implementing the
next-generation reference preview. Read this file end-to-end before touching
code. Where this spec and the current monoliths disagree, this spec wins.

Grounded against (current implementation): `reference-preview.tsx` (1207L,
`/reference/[id]`, 5 sections), `preview.tsx` (869L, builder step-3),
`extract-tokens.ts` (1335L, `ParsedTokens` + prose-regex parser), `font-registry.ts`
(376L, `lookupFont`/`parseFontStack` + license/installable metadata),
`references/{toss,baemin}/DESIGN.md` frontmatter (DTCG-lite `tokens:` shape),
`globals.css` (site tokens: Tailwind v4, oklch, `.dark`), and
`reference/[id]/page.tsx` (assembles `detail` from PROSE regex today).

Quality bar = getdesign.md `preview.html`: a per-brand specimen sheet that looks
generated from the brand's own tokens, not a generic component gallery.

---

## 1. Goals / Non-Goals

### Goals
- **G1 — Token-generated fidelity.** Reach getdesign.md `preview.html`-level
  fidelity for all **400** references, generated entirely from tokens. No
  hand-built HTML per brand. One factory renders every reference.
- **G2 — Frontmatter tokens are first-class.** The DESIGN.md frontmatter
  `tokens:` block (DTCG-lite) is the authoritative input. Prose regex parsing
  (`extract-tokens.ts`) becomes a **fallback** and its outputs are marked
  low-confidence.
- **G3 — Real brand type, honestly.** Load the actual brand webfont when it is
  legitimately installable; otherwise render a documented substitute with a
  visible label. Never silently fall back to Inter.
- **G4 — Provenance surfaced.** Every token group carries a confidence/provenance
  badge derived from the reference's verification metadata.
- **G5 — One factory, two consumers.** `/reference/[id]` (full sheet) and builder
  step-3 (customizable subset) consume the same section-renderer factory.
- **G6 — Copy-for-agent.** The source panel exports the doc wrapped in a
  ```` ```markdown ```` fence so a user can paste it straight into an agent, plus
  a raw `.md` download.

### Non-Goals (this phase)
- **NG1** — Live extraction from brand sites at render time. Tokens come from the
  committed DESIGN.md frontmatter only. Re-extraction is a separate pipeline
  (omd:add-reference / omd:token-backfill), not part of the renderer.
- **NG2** — Editing/persisting tokens from the UI. Builder overrides remain
  ephemeral, session-scoped (as today via `applyOverrides`).
- **NG3** — Runtime hosting of proprietary fonts. We only load fonts from public,
  license-clean sources (Google Fonts, foundry-open GitHub). No self-hosted
  Söhne/Circular/Airbnb Cereal binaries — those render as labeled substitutes.
- **NG4** — Re-theming the OMD site chrome. Preview surfaces render brand tokens
  *inside* the site; the site's own oklch tokens (`globals.css`) are untouched.

---

## 2. Layout — Two-Pane

```
┌───────────────────────────────────────┬─────────────────────────────┐
│ LEFT — specimen sections (scrolls)     │ RIGHT — source panel (sticky)│
│                                        │                             │
│  §1 Palette                            │  [DESIGN.md][Tailwind v4]    │
│  §2 Type scale                         │  [CSS Variables][DTCG JSON]  │
│  §3 Buttons                            │  ───────────────────────    │
│  …                                     │  ( Source ⇄ Preview )        │
│  §14 Do/Don't                          │  [ Copy ] [ ⭳ .md ]          │
│                                        │  <code viewport>            │
└───────────────────────────────────────┴─────────────────────────────┘
```

- **Left pane** — the specimen sections in §3 order. Owns vertical scroll.
- **Right pane** — `position: sticky; top: <header-offset>`. On viewports
  `< 1024px` (`lg`) the right pane collapses to a full-width accordion pinned
  above the specimen (not sticky). Never overlaps content.
- **Tabs** (segmented control): `DESIGN.md` · `Tailwind v4` · `CSS Variables` ·
  `DTCG JSON`. State: `activeTab`. Default `DESIGN.md`.
  - `DESIGN.md` — the raw markdown doc (frontmatter + prose).
  - `Tailwind v4` — a generated `@theme { --color-*, --radius-*, --text-* … }`
    block derived from the resolved `TokenSheet`.
  - `CSS Variables` — a generated `:root { --… }` + `.dark { --… }` block.
  - `DTCG JSON` — the resolved token sheet serialized as DTCG-lite JSON
    (`$value`/`$type` wrappers on the leaf tokens).
- **Source ⇄ Preview toggle** — `viewMode: "source" | "preview"`. `source`
  shows the code viewport for `activeTab`; `preview` renders the same tab's
  content as applied styling (e.g. the Tailwind tab in Preview mode shows swatch
  chips styled by the generated `@theme`). Default `source`.
- **Copy button** — copies the *active tab's* text. For the `DESIGN.md` tab the
  copied payload is wrapped in a fenced block:
  ```` ```markdown\n<full doc>\n``` ```` so paste-into-agent is one action. Other
  tabs copy their raw generated text with the matching language fence
  (```` ```css ````, ```` ```json ````). Confirmation: swap icon to a check for
  ~1.4s (reuse the `useCopy` pattern already in `reference-preview.tsx`).
- **`.md` download** — downloads `<id>.DESIGN.md` (the raw doc) via a Blob anchor.
  Present on all tabs; always downloads the DESIGN.md source, not the generated
  view.

---

## 3. Specimen Sections (≈14, in order)

Each section is a `SectionRenderer` (see §7). Sections that have no data for a
given reference render an honest empty state ("No dark tokens defined", "No
component specs"), never fabricated content. Section headers carry a
`ProvenanceBadge` (§5) for the token group they draw from.

1. **Palette** — (a) a thin full-width horizontal strip: every color in
   `sheet.colors` as adjacent zero-gap bands (a "fingerprint" of the whole
   palette); (b) role-grouped swatch cards below (Brand → Accent → Semantic →
   Neutral). Each swatch: color name (from `nameColor` heuristic or frontmatter
   key), hex, a role badge, a one-line usage note (`use` field or heuristic),
   and a per-swatch copy chip (copies the hex). Grouping/sort reuses
   `extractColorRoles` order.
2. **Type scale (live)** — every typography tier from `sheet.typography.tiers`
   rendered at its **actual** `size / weight / lineHeight / letterSpacing`, in
   the resolved brand font (§4), with brand-voice sample copy. KR brands
   (`country: KR`) use Korean sample copy; TW use zh-Hant; JP use ja; else EN
   (sample copy table in §3a). Each row shows a metrics label formatted exactly
   `"44px · 300 · 1.03 · -0.02em"` (size · weight · line-height · letter-spacing;
   omit letter-spacing token when `0`/unset). This replaces the current
   system-ui-only `buildHierarchy` preview (which deliberately dropped CJK).
3. **Buttons** — every variant in `sheet.components` of type `button`, each
   rendered at rest plus `:hover`, `:active`, and `:disabled` states shown as
   discrete swatches (state styles come from the variant's `hover/active/
   disabled` fields; synthesize hover as a −6% lightness shift only when the
   field is absent, and label it "derived").
4. **Form elements** — inputs, search bars, selects, textareas from
   `sheet.components` of type `input`, including at least one input rendered in a
   visibly **focused** state (apply the variant's `focus` token, e.g.
   `2px solid #2ac1bc`; else the brand primary ring).
5. **Cards / containers** — `card` component variants with their bg / radius /
   border / shadow / padding applied to a realistic card body.
6. **Brand-signature components** — everything else in `sheet.components`
   (`badge`, `tab`, `toggle`, `toast`, `dialog`, `listItem`, `avatar`, plus
   brand-named variants like `floating-cart-button`, `restaurant-card`). This is
   the section that makes each brand feel distinct.
7. **Tabs / navigation** — `tab`-type variants (bottom tab bar, top app bar)
   rendered as live nav strips with active/inactive states.
8. **Spacing scale** — horizontal bars sized to each `sheet.spacing` value, with
   px + purpose label when present.
9. **Radius scale** — boxes with each `sheet.rounded` value applied, labeled.
10. **Elevation / shadow** — cards each carrying one `sheet.shadow` recipe,
    labeled with shadow name + raw value.
11. **CTA band** — brand's primary CTA in a full-width band on the brand
    canvas/surface, using the primary button variant + display type tier
    (tokens composed together).
12. **Responsive ladder** — the CTA band (or a representative card) rendered
    inside fixed-width frames at **375 / 600 / 768 / 1024 / 1280 / 1440** px, each
    labeled, plus a breakpoint table (columns: breakpoint, px range, typical
    layout note). Frames use CSS `width` on a scaled container; no real viewport
    resize.
13. **Light / Dark toggle** — a section-level (and ideally sheet-level) theme
    switch. Applies `sheet.modes.dark` tokens across every section **only when
    the reference defines dark tokens**. When absent, the toggle is disabled with
    a "No dark tokens defined" note. Do not synthesize a dark theme.
14. **Do / Don't** — guidelines from `sheet.guidelines`, two columns
    (do = success accent, don't = destructive accent). Empty state when none.

### 3a. Sample copy table (brand-voice, per locale)

Rendered in the type-scale section. Keyed by `country`; fall back to EN.

| tier      | EN                              | KR (country: KR)                    |
|-----------|---------------------------------|-------------------------------------|
| display   | "Design at scale"               | "모두를 위한 금융"                    |
| heading   | "Section heading"               | "한 곳에서 관리하세요"               |
| subhead   | "Subheading"                    | "간편하게 시작하기"                  |
| body      | pangram + long-form line        | "빠르고 간편한 서비스를 경험해 보세요. 실제 본문 크기와 자간을 그대로 보여줍니다." |
| caption   | "Caption · timestamp · 2026"    | "캡션 · 방금 전 · 2026"              |

TW → zh-Hant, JP → ja (same semantic slots). Brand voice overrides may come from
the doc's §10 voice samples when structured; else the locale table is used.

### 3b. Section subsets per consumer

| Section              | /reference/[id] | builder step-3 |
|----------------------|:---:|:---:|
| 1 Palette            | ✓ | ✓ |
| 2 Type scale         | ✓ | ✓ (font/weight overridable) |
| 3 Buttons            | ✓ | ✓ (radius/style overridable) |
| 4 Form elements      | ✓ | ✓ |
| 5 Cards              | ✓ | ✓ (elevated/bordered overridable) |
| 6 Signature comps    | ✓ | ✓ |
| 7 Tabs/nav           | ✓ | subset (user-selected comps only) |
| 8 Spacing            | ✓ | ✓ (density overridable) |
| 9 Radius             | ✓ | ✓ (radius overridable) |
| 10 Elevation         | ✓ | ✓ |
| 11 CTA band          | ✓ | ✓ |
| 12 Responsive ladder | ✓ | — |
| 13 Light/Dark        | ✓ | ✓ |
| 14 Do/Don't          | ✓ | — |

Builder additionally drives the component-picker (`ALL_COMPONENTS` in
`preview.tsx`): the picker selects *which* sections 3–7 render, and A/B variant
choices flow through as they do today.

---

## 4. Webfont Loading Policy (differentiator #1)

For every font resolved from the sheet, classify via `lookupFont(name)`
(`font-registry.ts`) into exactly one of three render modes. **Never silently
fall back to Inter.**

Let `info = lookupFont(name)`.

- **REAL** — load and apply the brand's actual webfont. Condition:
  `info.installable === true` **and** `info.source` is a *loadable web source*.
  "Loadable web source" = Google Fonts (`fonts.google.com/...`) or a foundry-open
  GitHub/CDN with a known CSS URL. Known-loadable families include the Korean
  brand fonts on Google Fonts — e.g. **Jua** (주아체), **Do Hyeon** (도현체),
  **Black Han Sans**, **Gothic A1**, **Nanum** families, plus **Pretendard**,
  **Noto Sans KR**, **Inter**, **Geist**, **Roboto**, **IBM Plex**, etc. Loader
  builds a `<link>`/`@font-face` from `info.source`.
  - Label: none required (it's the real thing). Optional muted "Google Fonts"
    provenance chip.
- **SUBSTITUTE** — the brand font is `installable: false` or `Brand-proprietary`
  or `Proprietary` with no web-loadable source. Render the documented substitute
  (default: **Inter** for sans, a mono equivalent for mono, a serif for serif)
  **with a visible label**:
  `substitute: Inter (Söhne not publicly licensed)`.
  The parenthetical reason derives from `info.license` + `info.notes`
  (e.g. `Brand-proprietary` → "not publicly distributed"; `Proprietary` →
  "not publicly licensed"). Never omit the label.
  - Special case: registry entries whose `source` explicitly points at an
    open near-match (e.g. `Notion Inter`, `freee-logo` → Noto Sans JP) are
    treated as REAL-of-the-substitute and labeled
    `substitute: Noto Sans JP (freee wordmark uses Noto Sans CJK JP)`.
- **SYSTEM** — `info.license === "System"` (e.g. `-apple-system`,
  `system-ui`, `Apple SD Gothic Neo`, `SF Pro` when used as system stack). Render
  with the real system stack and label it **"System UI"**. Do not substitute
  Inter; do not attempt to web-load.
  - For CJK system stacks (baemin `ui` family = `-apple-system, …, 'Apple SD
    Gothic Neo', 'Noto Sans KR', sans-serif`), render the stack verbatim so the
    OS picks the native Korean face; label "System UI".

### 4a. BMHANNA Pro / brand fonts on Google Fonts

The type-scale section maps each *brand* typography family to its best REAL
source before deciding SUBSTITUTE. Mapping table (extend as needed):

| DESIGN.md family token | Google Fonts family (REAL) | Notes |
|------------------------|----------------------------|-------|
| BMHANNA Pro / 한나체    | Jua *(nearest OFL)* or Black Han Sans | Woowa's 한나 not on GF; use Jua and label |
| BMJua / 주아체          | **Jua**                    | exact, OFL on GF |
| BM도현 / 도현체         | **Do Hyeon**               | exact, OFL on GF |
| Toss Product Sans      | — (Brand-proprietary)      | SUBSTITUTE: Inter, labeled |
| Pretendard(Variable)   | Pretendard (jsDelivr CSS)  | REAL |

Where the exact brand face is not on a web source but a documented OFL sibling
exists (Woowa's own family is OFL but not all faces are on GF), render the
sibling as REAL and add a substitute-note ("한나체 Pro → Jua (nearest hosted
Woowa-family face)"). The acceptance criteria (§9) codify the zero-Inter-in-DOM
requirement for baemin.

### 4b. Loader implementation notes
- Load fonts client-side, deduped per sheet, via a `useBrandFonts(sheet)` hook
  that injects one `<link rel="stylesheet">` per REAL Google font and
  `@font-face` for foundry-open GitHub sources. Respect
  `font-display: swap`.
- Guard against layout shift: reserve metrics via the substitute until `swap`.
- The resolved mode per family (`REAL | SUBSTITUTE | SYSTEM`) plus label string
  is exposed on the `TokenSheet` (`typography.families[].render`) so every
  section renders consistently and the label appears once per family.

---

## 5. Provenance Badges (differentiator #2)

Every token-group section header shows a small badge with one of three values.
Derivation is deterministic from existing frontmatter + footer metadata — no new
schema is required.

### 5a. Inputs (already present in DESIGN.md)
- `tokens.source` — `"reconciled" | "prose-derived" | "extracted" | ...`
  (toss = `reconciled`, baemin = `prose-derived`).
- `verified` — ISO date (both examples `2026-05-15`).
- `ds:` block presence — a Tier-1 official design-system link
  (toss has `ds: { name: TDS, url: ... }`).
- `## Proof` block presence in the doc body (proof-gate refs, ≥2026-06-01).
- HTML source footer (`<!-- OmD ... Sources -->`) presence/verification lines.

### 5b. Badge values + mapping

| Badge value          | Condition (first match wins) |
|----------------------|------------------------------|
| `verified`           | `tokens.source ∈ {reconciled, verified}` **AND** (`ds.url` present **OR** `## Proof` present) **AND** `verified` date parses. |
| `reconciled`         | `tokens.source === "reconciled"` **OR** `tokens.source === "extracted"` with a `ds`/footer source but no Proof block. |
| `prose-parsed(low)`  | `tokens.source === "prose-derived"`, **OR** the group was produced by `extract-tokens.ts` prose fallback (no frontmatter token for that group), **OR** no `tokens:` block at all. |

Per-group override: a badge is computed per token group, not just per doc. If a
group (e.g. `components`) is present in frontmatter but another (e.g. `shadow`)
is prose-fallback, the shadow section shows `prose-parsed(low)` even when the doc
is otherwise `verified`. Rule: **frontmatter-sourced group inherits the doc-level
badge; prose-fallback group is capped at `prose-parsed(low)`.**

### 5c. Rendering
- `verified` — solid accent (green) dot + text, tooltip: "Reconciled against
  Tier-1 DS / Proof block, verified <date>".
- `reconciled` — amber dot, tooltip: "Cross-checked, source <ds.name/footer>".
- `prose-parsed(low)` — muted/dashed dot, tooltip: "Heuristically parsed from
  prose — may be approximate."
- Badge component = `ProvenanceBadge` shared primitive (§7).

---

## 6. Data Contract

### 6a. Precedence
1. **Frontmatter `tokens:` block (DTCG-lite)** — FIRST-CLASS, authoritative.
2. **Prose parse (`extract-tokens.ts`)** — FALLBACK only, per-group. Any value it
   produces is tagged `confidence: "low"` and forces `prose-parsed(low)` badge
   for that group.

Today only `tokens.components` is read from frontmatter (`componentsFromTokens`);
`colors/typography/spacing/rounded/shadow` are prose-parsed and `detail.*` on the
reference page is built from §2 regex. **v2 must read all groups from
frontmatter first.** A new `parseTokenSheet(designMd)` is the single entry point.

### 6b. Frontmatter shape (observed, DTCG-lite)
From `toss` / `baemin` frontmatter:
```yaml
tokens:
  source: reconciled | prose-derived | extracted
  extracted: "2026-06-08"
  note: "…"
  colors: { primary, brand, canvas, foreground, surface, border, on-primary, error, success, warning, … }
  typography:
    family: { sans | ui | mono | brand | playful | emoji: "<stack>" }
    <tier>: { size: 30, weight: 700, lineHeight: 1.33, use: "…" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, … }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow: { <name>: "0px 1px 3px rgba(...)" , … }
  components:
    <name>: { type, bg, fg, border, radius, padding, height, font, states, hover, active, disabled, shadow, use }
  components_harvested: true
```

### 6c. Resolved `TokenSheet` (TypeScript — the render contract)
`parseTokenSheet` returns this. Every leaf carries provenance so badges + labels
are derivable without re-deriving source.

```ts
type Provenance = "verified" | "reconciled" | "prose-parsed(low)";
type Confidence = "high" | "low";           // high = frontmatter, low = prose

interface Prov { provenance: Provenance; confidence: Confidence; }

type FontRenderMode = "REAL" | "SUBSTITUTE" | "SYSTEM";
interface ResolvedFamily {
  role: "sans" | "mono" | "brand" | "display" | "serif" | "emoji" | "ui" | "playful";
  requested: string;          // as written in frontmatter (first token of stack)
  stack: string;              // full CSS font-family stack to apply
  render: FontRenderMode;
  applied: string;            // family actually applied (real or substitute)
  label?: string;             // "substitute: Inter (Söhne not publicly licensed)" | "System UI"
  source?: { name: string; url: string };   // from font-registry, when REAL
}

interface ColorToken extends Prov {
  key: string;                // frontmatter key, e.g. "primary", "error"
  hex: string;
  name: string;               // frontmatter key humanized OR nameColor() heuristic
  role: "brand" | "accent" | "semantic" | "neutral";
  usage?: string;             // `use`/description or heuristic
}

interface TypeTier extends Prov {
  key: string;                // "display-hero", "body", …
  size: number;               // px
  weight: number;
  lineHeight: number;
  letterSpacing?: string;     // e.g. "-0.02em"; absent when unset
  use?: string;
  family: ResolvedFamily;     // which resolved family renders this tier
  sampleText: string;         // locale-aware (§3a)
  metricsLabel: string;       // "44px · 300 · 1.03 · -0.02em"
}

interface SpacingToken extends Prov { key: string; value: number; purpose?: string; }
interface RadiusToken  extends Prov { key: string; value: string; }   // "16px" | "9999px"
interface ShadowToken  extends Prov { name: string; value: string; }

interface ComponentVariantR extends Prov {
  name: string;
  type: ComponentType;        // reuse extract-tokens ComponentType union
  bg?: string; fg?: string; border?: string; radius?: string; padding?: string;
  height?: string; font?: string; shadow?: string;
  hover?: string; active?: string; focus?: string; disabled?: string;
  states?: string; use?: string;
  extras: Record<string, string>;   // unknown fields preserved (as extract-tokens)
}

interface ThemeModeTokens {                // optional dark (or other) mode
  colors?: Record<string, string>;
  shadow?: Record<string, string>;
}

interface TokenSheet {
  id: string;
  name: string;
  country?: string;           // drives locale sample copy
  homepage?: string;
  docLevelProvenance: Provenance;
  raw: { designMd: string };  // for the source panel (DESIGN.md tab + .md download)

  colors: ColorToken[];
  typography: {
    families: ResolvedFamily[];
    tiers: TypeTier[];
  };
  spacing: SpacingToken[];
  rounded: RadiusToken[];
  shadow: ShadowToken[];
  components: ComponentVariantR[];
  guidelines: { type: "do" | "dont"; text: string }[];

  modes: { dark?: ThemeModeTokens };   // absent → §13 toggle disabled
}
```

### 6d. Fallback wiring
- For each group, if the frontmatter key exists → build tokens with
  `confidence: "high"`, `provenance` = doc-level badge.
- Else call the matching `extract-tokens.ts` function
  (`extractPalette`/`buildHierarchy`/`extractSpacing`/`extractShadows`/…),
  wrap results with `confidence: "low"`, `provenance: "prose-parsed(low)"`.
- `extract-tokens.ts` is **retained as the fallback engine**, not deleted. Its
  public `ParsedTokens` type stays until both monoliths are migrated (see §8).

---

## 7. Architecture — Section-Renderer Factory

### 7a. `SectionRenderer` contract
```ts
interface SectionProps {
  sheet: TokenSheet;          // full sheet (renderer picks its own slice)
  mode: "light" | "dark";     // current theme mode
  consumer: "reference" | "builder";
  overrides?: PreviewOverrides;      // builder only (reuse existing type)
  enabledComponentIds?: Set<string>; // builder component-picker selection
}
type SectionRenderer = (props: SectionProps) => React.ReactElement | null;
// returns null → section self-suppresses (honest empty handled inside instead
// when a header+empty-state is preferred).
```

Each renderer reads only the slice of `sheet` it needs but receives the whole
sheet (so cross-references like "primary color for a synthesized focus ring" are
available). Renderers are pure w.r.t. props + theme; no data fetching.

### 7b. File layout
```
web/src/components/preview/
  token-sheet.ts               // parseTokenSheet(designMd) → TokenSheet  (§6)
  use-brand-fonts.ts           // font loader hook (§4b)
  section-registry.ts          // id → SectionRenderer map + ordered list
  preview-shell.tsx            // two-pane layout, tabs, source panel (§2)
  source-panel.tsx             // tabs + Source/Preview + Copy + .md download
  generators/
    to-tailwind-v4.ts          // TokenSheet → @theme block
    to-css-vars.ts             // TokenSheet → :root/.dark block
    to-dtcg-json.ts            // TokenSheet → DTCG-lite JSON
  primitives/
    specimen-label.tsx         // SpecimenLabel (metrics/label chrome)
    copy-chip.tsx              // CopyChip (per-swatch/per-token copy)
    provenance-badge.tsx       // ProvenanceBadge (§5)
    font-note.tsx              // renders ResolvedFamily.label
  sections/
    palette.tsx                // id: "palette"
    type-scale.tsx             // id: "type-scale"
    buttons.tsx                // id: "buttons"
    forms.tsx                  // id: "forms"
    cards.tsx                  // id: "cards"
    signature.tsx              // id: "signature"
    tabs-nav.tsx               // id: "tabs-nav"
    spacing.tsx                // id: "spacing"
    radius.tsx                 // id: "radius"
    elevation.tsx              // id: "elevation"
    cta-band.tsx               // id: "cta-band"
    responsive.tsx             // id: "responsive"
    theme-toggle.tsx           // id: "theme" (section 13 wrapper/control)
    guidelines.tsx             // id: "guidelines"
```

### 7c. Registry + subsets
```ts
export const SECTION_ORDER = [
  "palette","type-scale","buttons","forms","cards","signature","tabs-nav",
  "spacing","radius","elevation","cta-band","responsive","theme","guidelines",
] as const;

export const SECTIONS: Record<(typeof SECTION_ORDER)[number], SectionRenderer> = { … };

// consumer subsets (per §3b)
export const REFERENCE_SECTIONS = SECTION_ORDER;                     // all
export const BUILDER_SECTIONS = SECTION_ORDER.filter(
  (id) => id !== "responsive" && id !== "guidelines",
);
```
`preview-shell` maps the subset through `SECTIONS[id]` and renders in order.
Both `/reference/[id]` and builder step-3 mount `preview-shell` with a different
subset + `consumer` flag. Builder passes `overrides` + `enabledComponentIds`;
reference passes neither.

### 7d. Shared primitives (contracts)
- `SpecimenLabel({ label, metrics?, badge? })` — the small uppercase-tracked
  label + optional metrics string + optional `ProvenanceBadge`.
- `CopyChip({ text, label? })` — the click-to-copy affordance (wraps `useCopy`).
- `ProvenanceBadge({ provenance })` — §5c dot + tooltip.
- `FontNote({ family })` — renders `family.label` when render mode ≠ REAL.

---

## 8. Migration Plan (zero user-facing regression)

Ordered. Each step ships independently; user-visible output must not regress
between steps (verify with `next build` + a visual smoke on toss + baemin +
one prose-only ref).

1. **Add `token-sheet.ts`** — implement `parseTokenSheet(designMd)`:
   frontmatter-first, prose fallback via existing `extract-tokens.ts`. Add unit
   tests: toss (reconciled), baemin (prose-derived), and one ref with **no**
   `tokens:` block (pure fallback). No UI wiring yet. **Retires nothing.**
2. **Add `use-brand-fonts.ts` + font-note** — resolve `ResolvedFamily[]` using
   `lookupFont`/`parseFontStack`; unit-test REAL/SUBSTITUTE/SYSTEM classification
   for toss (Toss Product Sans → SUBSTITUTE), baemin (BMJua → REAL Jua, ui →
   SYSTEM), a Google-font ref (Inter → REAL). No UI yet.
3. **Add primitives + generators** — `SpecimenLabel`, `CopyChip`,
   `ProvenanceBadge`, `to-tailwind-v4`, `to-css-vars`, `to-dtcg-json`. Snapshot
   tests on toss sheet output.
4. **Build `preview-shell` + `source-panel`** behind a **dev-gated flag**
   (`?preview=v2` query param or env). Mount on `/reference/[id]` only when
   flagged. Old `ReferencePreview` remains the default. Port sections
   1→14 incrementally into `sections/*`, each verified against the corresponding
   part of the current `reference-preview.tsx` render.
5. **Flip `/reference/[id]` default to v2** once all 14 sections reach parity on
   the smoke set. **Retire `web/src/components/reference-preview.tsx`** and its
   private helpers (`HeroSection`, `Section`, `roleToTokenLabel`, etc.). The Hero
   folds into the palette/CTA sections; `reference/[id]/page.tsx` switches from
   the §2 prose regex to `parseTokenSheet` (the ad-hoc `primary`/`fontFamily`/
   `radius` regex block is deleted).
6. **Migrate builder step-3** — mount `preview-shell` with `BUILDER_SECTIONS`,
   `consumer: "builder"`, wiring `overrides` + component-picker. **Retire
   `web/src/components/preview.tsx`.** `ALL_COMPONENTS` picker + A/B variant logic
   moves into the shell's builder mode. `applyOverrides` is reused (still applied
   before/inside `parseTokenSheet` resolution for builder).
7. **Cleanup** — remove now-unused exports from `extract-tokens.ts` that only the
   old monoliths consumed; keep the prose-parse functions (still the fallback
   engine). `FontCard`/`FontStackGrid` either fold into `type-scale.tsx` or are
   re-exported from primitives.

Retirement summary: `reference-preview.tsx` retired at step 5; `preview.tsx`
retired at step 6. `extract-tokens.ts` **kept** (fallback engine); `font-registry.ts`
**kept** (unchanged); `globals.css` **unchanged**.

---

## 9. Per-Section Acceptance Criteria (checkable)

General: `next build` passes; no console errors; `prefers-reduced-motion` honored
(reuse globals.css safety net); no CLS > 0.05 from font swap on the smoke set.

- **Palette** — For toss, exactly the frontmatter `tokens.colors` values render
  as swatches (14 entries incl. `#3182f6` primary, `#0064ff` brand, `#f04452`
  error). The horizontal fingerprint strip has one band per color, zero gaps.
  Each swatch copy chip yields the exact lowercase hex. Badge = `verified`.
- **Type scale** — For **baemin**: display/heading tiers render via **Jua** and
  **Do Hyeon** (Google Fonts) where the brand family maps (`BMJua`→Jua,
  `BM도현`→Do Hyeon; `BMHANNA Pro`→Jua with substitute-note). Body/ui tiers
  render in the system stack labeled "System UI". **Zero occurrences of `Inter`
  in the rendered DOM** for baemin (assert via `getComputedStyle`/DOM query in
  test). Each row's metrics label matches `^\d+px · \d{3} · [\d.]+( · -?[\d.]+em)?$`.
  Sample copy is Korean (`country: KR`).
  For **toss**: display tier shows `substitute: Inter (Toss Product Sans not
  publicly distributed)` label exactly once per family; the substitute IS Inter
  here and is labeled (this is the allowed labeled case, distinct from the
  baemin silent-Inter prohibition).
- **Buttons** — toss renders 3 button variants; each shows rest + hover + active
  + disabled. `button-fill-primary` rest bg = `#3182f6`, radius `16px`; disabled
  state is visually distinct. Synthesized hover states carry a "derived" marker.
- **Forms** — baemin `search-bar` (radius 20px, bg `#f8f9fa`) and `input`
  render; at least one input shows a focus ring `2px solid #2ac1bc` matching the
  frontmatter `focus` token.
- **Cards** — baemin `restaurant-card` renders bg `#fff`, radius `12px`, with its
  documented type treatment; `card` variant shows its `1px solid #dee2e6` border
  + shadow.
- **Signature** — baemin `floating-cart-button` (pill, `#2ac1bc`, shadow),
  `toast` (`#212529`), `tag`, `badge` all render distinctly. Count of rendered
  variants equals count of non-button/input/card entries in `tokens.components`.
- **Tabs/nav** — baemin `bottom-tab-bar` + `top-app-bar` render as nav strips
  with active color `#2ac1bc`.
- **Spacing** — toss renders 7 bars (xs 4 … xxl 48) with px labels; bar widths
  are proportional to values.
- **Radius** — toss renders 4 boxes (sm 4, md 8, lg 16, full 9999→pill). The
  `full` box is visibly a pill/circle.
- **Elevation** — toss renders 3 shadow cards (subtle/standard/elevated) with the
  exact raw recipe shown as caption.
- **CTA band** — primary CTA renders on brand canvas using display tier + primary
  button variant; readable contrast (auto fg).
- **Responsive** — six frames at 375/600/768/1024/1280/1440 present + a
  breakpoint table with matching rows.
- **Light/Dark** — for a ref **with** dark tokens, toggling recolors all sections
  from `modes.dark`. For toss/baemin (no `modes.dark` in frontmatter today) the
  toggle is **disabled** with "No dark tokens defined" — no synthesized dark.
- **Do/Don't** — renders guidelines when present; honest empty state otherwise.
- **Source panel** — `DESIGN.md` Copy yields text starting with
  ` ```markdown ` and ending ` ``` `; `.md` download filename = `<id>.DESIGN.md`;
  `Tailwind v4` tab shows a valid `@theme { … }` block containing
  `--color-primary` for toss; `DTCG JSON` tab is valid JSON with `$value` leaves;
  `Source ⇄ Preview` toggles without remounting the specimen pane.
- **Provenance** — toss doc-level badge = `verified` (source reconciled + `ds.url`
  present); baemin = `prose-parsed(low)`/`reconciled` per group (`source:
  prose-derived` → low). A group present only via prose fallback always shows
  `prose-parsed(low)` regardless of doc-level badge.

---

## 10. Open Risks / Notes
- Frontmatter YAML has **no parser dependency** in the repo today
  (`componentsFromTokens` hand-parses flow-maps). v2 needs a small, dependency-
  free frontmatter reader (extend the existing hand-parser) OR a vetted
  lightweight YAML lib — decide in step 1; do not pull a heavy dependency.
- Not all 400 refs have a `tokens:` block; the fallback path (§6d) is load-bearing
  and must be exercised in tests, not treated as an edge case.
- Korean brand-font → Google Fonts mapping (§4a) is curated, not exhaustive;
  extend the table as refs are audited. Missing mapping → SUBSTITUTE + label
  (never silent Inter).
