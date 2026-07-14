# Preview v2 — Reference Preview Renderer (Build Target)

Status: build target. Single source of truth for the fleet implementing the
next-generation reference preview. Read this file end-to-end before touching
code. Where this spec and the current monoliths disagree, this spec wins.

Implementation checkpoint — 2026-07-12: builder step 3 exposes a compact
claim-level Evidence drawer backed by the canonical `verification_v2` graph.
It shows computed quality, checked date, claim coverage, source/surface counts,
conflicts, method, confidence, and the exact source URL. Evidence graphs are
generated into a server-only manifest so they do not inflate the client registry.
Verified token-linked Color, Typography, Spacing & Shape, and Components
sections now carry claim/source/date provenance badges; narrative-only Hero and
Guidelines intentionally do not claim token provenance. The builder Source panel
now exports canonical high-confidence DESIGN.md, Tailwind v4, CSS Variables, and
DTCG JSON artifacts. Missing groups stay absent; explicit builder choices update
only the matching canonical claim paths.

> Surface ownership clarification: the product's primary user journey is Home
> `시작하기` → `/builder`. Builder step 3 is the user-facing preview and its
> acceptance path. `/reference/[id]` is a catalog/detail diagnostic consumer.
> Both may share the same renderer, but “preview” defaults to builder and must
> be tested through the builder route unless the task explicitly names the
> reference detail page.

Grounded against (current implementation): `reference-preview.tsx` (1207L,
`/reference/[id]`, 5 sections), `preview.tsx` (869L, builder step-3),
`extract-tokens.ts` (1335L, `ParsedTokens` + prose-regex parser), `font-registry.ts`
(376L, `lookupFont`/`parseFontStack` + license/installable metadata),
`references/{toss,baemin}/DESIGN.md` frontmatter (DTCG-lite `tokens:` shape),
`globals.css` (site tokens: Tailwind v4, oklch, `.dark`), and
`reference/[id]/page.tsx` (assembles `detail` from PROSE regex today).

Quality bar = getdesign.md `preview.html`: a per-brand specimen sheet that looks
generated from the brand's own tokens, not a generic component gallery.

### Non-negotiable truth policy

**Unknown means absent.** This product delivers references; it does not fill
them with plausible defaults. Only canonical, high-confidence facts for the
exact target surface may render. Absence is applied at the smallest unresolved
field or item; a group returns `null` only when no verified values remain.
Existing verified descriptions, metrics, tokens, and components must not be
deleted to enforce this policy. Prose guesses, generic components, synthetic
spacing/radius/shadow, system/Inter font substitution, and cross-surface
promotion are forbidden. Evidence from marketing, corporate, font-catalog,
and product/app surfaces remains separate until an explicit verified claim
connects it.

---

## 1. Goals / Non-Goals

### Goals
- **G1 — Token-generated fidelity.** Reach getdesign.md `preview.html`-level
  fidelity for all **400** references, generated entirely from tokens. No
  hand-built HTML per brand. One factory renders every reference.
- **G2 — Frontmatter tokens are first-class.** The DESIGN.md frontmatter
  `tokens:` block (DTCG-lite) is the authoritative input. Prose regex and
  low-confidence values are excluded from user-facing previews.
- **G3 — Real brand type, honestly.** Load the actual brand webfont when it is
  legitimately installable; otherwise label it unavailable and omit its live
  specimen. Never render a substitute.
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
  Söhne/Circular/Airbnb Cereal binaries and no visual substitutes.
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

Each section is a `SectionRenderer` (see §7). Sections that have no canonical
data for a given reference are omitted entirely, never fabricated or filled
with an empty-state specimen. Section headers carry a
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

## 4. Webfont Loading Policy

A family enters the preview only when it is a canonical high-confidence fact for the exact target surface. Runtime resolution has three modes:

- **REAL** — the exact requested family has a verified public browser-loadable source. Load and render it.
- **SYSTEM** — the canonical target-surface claim explicitly names a system stack. Render that exact stack.
- **UNAVAILABLE** — the family is known but the exact face is proprietary, private, or lacks a verified loadable source. Show factual metadata only; omit the live specimen.

There is no SUBSTITUTE mode. Do not map proprietary faces to Inter, adjacent open fonts, or near matches. A font catalog proves asset availability, not product usage. Marketing, corporate, catalog, and product/app font observations remain separate evidence domains.

Loader rules:

- Deduplicate exact REAL font stylesheets and respect `font-display: swap`.
- Never construct a loader from a guessed family name.
- Never apply a different family while labeling it as the requested family.
- If typography has verified metric tiers but no verified family, render the metrics without a family claim or live font specimen. Suppress Typography only when neither verified tiers nor a verified family remains.

---

## 5. Provenance and visibility

Provenance is a visibility gate, not decoration:

- `verified` — canonical high-confidence claim connected to current Tier-1 evidence; render with badge.
- `reconciled` — canonical high-confidence frontmatter claim cross-checked against its exact target surface; render with badge.
- `low-confidence` / `prose_fallback` / missing — do not render that unresolved field/item; do not hide verified siblings. Hide the group only when nothing verified remains.

Low-confidence evidence remains available to the re-verification pipeline and diagnostics, but no badge can make it preview-eligible. Visibility is computed per group so one verified group never promotes an unresolved neighbor.

---

## 6. Data Contract

### 6a. Precedence
1. **Canonical high-confidence frontmatter claim for the exact surface** — preview-eligible.
2. **Anything else** — evidence/reconciliation input only; preview-ineligible.

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
type Provenance = "verified" | "reconciled";
type Confidence = "high";

interface Prov { provenance: Provenance; confidence: Confidence; }

type FontRenderMode = "REAL" | "SYSTEM" | "UNAVAILABLE";
interface ResolvedFamily {
  role: "sans" | "mono" | "brand" | "display" | "serif" | "emoji" | "ui" | "playful";
  requested: string;          // as written in frontmatter (first token of stack)
  stack: string;              // full CSS font-family stack to apply
  render: FontRenderMode;
  applied?: string;           // absent when render = UNAVAILABLE
  label?: string;             // "font unavailable" | "System UI"
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

### 6d. Absence wiring
- A group renders when its canonical AST contains at least one
  `origin: frontmatter`, `confidence: high` value for the target surface.
- Missing, prose-fallback, or low-confidence fields/items are filtered out
  individually. A section renderer returns `null` only when the resulting group
  is empty.
- Filtering is a renderer/export projection. It must not delete, replace, or
  collapse the canonical reference document or unrelated verified groups.
- Heuristic parsers may remain for offline reconciliation and legacy rollback,
  but their output must never enter the user-facing builder/reference preview.
- No runtime font substitution: non-loadable faces are labeled unavailable and
  their live specimen is omitted.

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

1. **Add `token-sheet.ts`** — implement `parseTokenSheet(designMd)` with
   canonical high-confidence AST input only. Add unit tests for reconciled data
   and for a persuasive prose-only document that must produce empty groups.
   No UI wiring yet. **Retires nothing.**
2. **Add `use-brand-fonts.ts` + font-note** — resolve `ResolvedFamily[]` using
   `lookupFont`/`parseFontStack`; unit-test REAL/UNAVAILABLE/SYSTEM classification.
   Proprietary fonts are UNAVAILABLE and never substituted. No UI yet.
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
   old monoliths consumed; keep prose parsers only for offline reconciliation
   and explicit legacy rollback. `FontCard`/`FontStackGrid` either fold into `type-scale.tsx` or are
   re-exported from primitives.

Retirement summary: `reference-preview.tsx` retired at step 5; `preview.tsx`
retired at step 6. `extract-tokens.ts` **kept** (offline reconciliation only); `font-registry.ts`
**kept** (unchanged); `globals.css` **unchanged**.

---

## 9. Per-Section Acceptance Criteria (checkable)

General: `next build` passes; no console errors; sections render only canonical high-confidence AST values.

- Reference hero/§1 is useful brand context, not verification-status copy: it explains the product, distinctive expression, and current evolution from first-party sources.
- Typography separates official product-use, measured surface-use, distributed brand assets, and specimen availability. An officially confirmed product family remains visible as metadata when its live specimen is unavailable.
- A persuasive prose-only or low-confidence group produces no specimen section.
- No generic hierarchy, spacing, radius, shadow, component, iconography, or document-policy block is appended.
- A missing group suppresses its section; it does not show an illustrative empty card.
- REAL fonts load the exact verified face. SYSTEM renders only an explicitly canonical system stack. UNAVAILABLE renders metadata but no live specimen or substitute stylesheet.
- Baemin renders its verified Palette, typography metrics, Spacing & Shape, Components, and explanations. Only its unresolved font-family claim and live font specimen are absent; no Pretendard/System/Arial product-font claim appears in builder output.
- Missing data does not add `Partial`, `Reference Evidence`, or other warning chrome unless product requirements explicitly request it.
- Toss Product Sans may be named as a known family but has no Inter substitute, no substitute stylesheet, and no live type specimen until an exact public loader is authorized.
- Builder acceptance always follows Home `시작하기` → `/builder` → brand selection → preview.
- Source/download output obeys the same absence policy as the visual specimen; generic Included Components/Iconography/Document Policies are not synthesized.

---

## 10. Open Risks / Notes
- Frontmatter YAML has **no parser dependency** in the repo today
  (`componentsFromTokens` hand-parses flow-maps). v2 needs a small, dependency-
  free frontmatter reader (extend the existing hand-parser) OR a vetted
  lightweight YAML lib — decide in step 1; do not pull a heavy dependency.
- Not all 400 refs have canonical token groups. Empty/suppressed sections are
  the correct product state until re-verification fills them.
- Korean brand-font hosting is curated, not exhaustive. Missing or non-exact
  mapping → UNAVAILABLE; a near-match is never promoted as the brand font.
