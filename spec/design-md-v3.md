# DESIGN.md v3

Status: **Approved** (owner G2, 2026-10-13) — the catalog write format. All 521 references converted
on `feat/design-md-v3` (2026-10-14); Phase 2 record in `docs/research/2026-10-13-format/PHASE2.md`.
Format version: **3.0.0**
Primary artifact: **`DESIGN.md`**, with an optional **`reference.json`** sidecar beside it
Decision record: `docs/research/2026-10-13-format/PHASE1.md` (F1–F5 in `docs/REDESIGN_DECISIONS_2026-10-01.md`)

The words MUST, MUST NOT, REQUIRED, SHOULD, SHOULD NOT, and MAY are normative.

v3 is a **Google-compatible superset**. A v3 `DESIGN.md` is a valid file under the Google
`DESIGN.md` specification (`google-labs-code/design.md`, spec `version: alpha`, CLI 0.4.0): it uses
Google's YAML frontmatter schema and Google's section names and order. v3 adds three things Google
does not define — font facts, CJK typesetting, and an evidence sidecar — in places Google tools
preserve and ignore. v3 does not claim to be the Google format or an official Google profile.

This is a **major** version over Core v2 (`spec/design-md-core-v2.md`): it reverses Core v2 §3 (no
frontmatter) and replaces the seven anchored sections of Core v2 §4 with Google's section order.
Core v2 and OmD 0.1 remain readable (§12).

## 1. Goals and non-goals

v3 has five goals:

1. Any Google-aware tool (Google `lint`/`diff`/`export`, the shadcn/ui DESIGN.md skill, VoltAgent-style
   tooling) reads the tokens of a v3 file without an adapter.
2. A file holds **one** token representation. No legacy `tokens:` block, no second token list in prose.
3. Unknown means absent, at the smallest unresolved field or group (unchanged from Core v2 and AGENTS.md).
4. A brand face, a labelled substitute, and a safe default are three separate, named layers. A
   substitute is never presented as the brand face.
5. Per-value provenance survives, outside the visible file.

v3 is not:

- permission to infer a missing brand fact, a substitute, or a typesetting rule;
- a requirement that every token group be present; or
- a place for tool metadata (OmD version, generator, quality tier, timestamps) — see §2.

## 2. Artifacts and visible-file neutrality

```text
<dir>/DESIGN.md        the portable file: Google frontmatter + Markdown body
<dir>/reference.json   optional sidecar: catalog identity, claims, lint findings, migration record
<dir>/.verification.md existing human proof notes (unchanged; read by the quality engine)
```

`DESIGN.md` MUST be useful on its own: pasted into a chat, attached to a design tool, or copied into a
project root. `reference.json` is for the OmD catalog pipeline and is never required to use the file.

**Neutrality.** The visible file MUST NOT contain an OmD or Google format version, generator name,
quality tier, verification status, extraction timestamp, model name, or evidence ledger. In
particular:

- The Google `version:` key MUST be omitted. It is optional in Google's schema, and Google lint is
  silent without it (tested, 0.4.0). The format version lives in `reference.json`.
- Catalog identity (`id`, `country`, `category`, `homepage`, `primary_color`, `logo`, `verified`,
  `added`, `ds`) MUST NOT appear in the frontmatter. It lives in `reference.json` (§8).
- Dates and source URLs MAY appear in prose where they are part of a fact ("read from the rendered
  navigation on 2026-09-19"), and in `fonts.faces.*.source` (§6), because they are content, not
  tool metadata.

## 3. Frontmatter

### 3.1 Keys and order

The frontmatter is YAML between `---` lines at byte 0. Keys appear in this order; every key except
`name` is optional.

| Key | Google meaning | v3 use |
|---|---|---|
| `name` | system name | Brand or product name. REQUIRED. |
| `description` | one-line summary | Scope sentence. Omit rather than invent. |
| `colors` | `map<string, Color>` | Verified colours. Any CSS colour string; hex preferred. |
| `typography` | `map<string, Typography>` | Verified type roles (§3.2). |
| `rounded` | `map<string, Dimension>` | Verified radii, always with a unit (`4px`). |
| `spacing` | `map<string, Dimension \| number>` | Verified spacing; bare numbers mean px. |
| `components` | `map<string, map>` | Verified component recipes (§3.3). |
| `omitted` | sections intentionally absent | Token groups absent because nothing is verified (§5). |
| `fonts` | — (OmD) | Font facts and layers (§6). Lint-silent by construction. |
| `typesetting` | — (OmD) | Per-script typesetting rules (§7). Lint-silent by construction. |

No other top-level key is allowed. A legacy `tokens:` block, `verification_v2`, or any catalog key in
the frontmatter is a conformance failure (§10).

### 3.2 Typography roles

Each role uses Google's property names only: `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`,
`letterSpacing`, `fontFeature`, `fontVariation`.

- `fontSize` and `letterSpacing` are Dimensions (`16px`, `-0.32px`, `-0.02em`).
- `lineHeight` is a Dimension or a unitless number. A measured CSS keyword the grammar cannot carry
  (`normal`) MUST NOT be written as a token: Google lint reports it as an **error**. It is stated in the
  Typography prose instead, and its claim moves to a `prose:` path (§8.3).
- `fontFamily` is a CSS font stack (§6.4). A role carries `fontFamily` only when evidence shows that
  face on that role; a catalog-wide UI family is recorded once in `fonts.roles` and is not copied onto
  roles that were measured on another surface.
- A `use` property (legacy role description) MAY be kept. Google reports it as a warning; it is not
  gated (§9).

### 3.3 Component recipes

Google component properties: `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`,
`size`, `height`, `width`. Values are literals or `{group.token}` references.

- `typography` MAY be a reference (`{typography.body}`), an inline Typography map, or a literal
  shorthand string (`17px / 600`). All three are lint-silent.
- **Extension properties.** OmD component fields with no Google equivalent keep their legacy names:
  `type`, `border`, `hover`, `pressed`, `active`, `focus`, `disabled`, `states`, `use`, `shadow`,
  and every other field the catalog carries (`selected`, `checked`, `error`, `highlighted`, `gap`,
  `margin`, `text`, `alert`, `count`, `variants`, `icon`, `bodyPadding`, `inputFont`).
  They hold measured values or measured state descriptions that cannot be split into Google variant
  siblings without interpretation. Google lint reports each as a `broken-ref` *warning* ("not a
  recognized component sub-token"); the sidecar counts them as `extension-component-property`.
  They are never errors and are not gated.
- A writer MAY split a state into a Google variant sibling (`button-primary-hover`) only when the
  measured value is a single colour or dimension for one Google property. It MUST NOT parse free-text
  state descriptions into tokens.
- `type` is the renderer kind used by the OmD builder (`button`, `input`, `badge`, `toggle`, `tab`, …).

### 3.4 One token representation

A value appears as a token exactly once, in the frontmatter. The body explains roles and evidence and
MAY quote values inline (`` `#3182f6` ``), but MUST NOT carry a second machine-style token list
(Core v2's "Semantic tokens" bullet list, a duplicate type-role table generated from tokens, or a
fenced YAML token block).

## 4. Body

### 4.1 Title

The first body line is one H1. Google does not parse it. Recommended form:
`# <Brand> Design System`. Catalog references MAY keep their existing title
(`# Design System Inspiration of <Brand>`), which states that the file is a reference, not the
company's own system.

### 4.2 Section order

All sections are H2 with exactly these names, in this order. A section with no content is left out
(its absence is not an error). Google's eight sections keep Google's names so section-aware tools find
them; OmD sections are extra H2s, which Google preserves and does not order-check.

| # | H2 heading | Source | Holds |
|---:|---|---|---|
| 1 | `Overview` | Google | Brand and product, audience, evolution. H3s: Visual Theme & Atmosphere, Primary tasks, Brand Narrative, Principles, Personas. |
| 2 | `Colors` | Google | Colour roles and their evidence. |
| 3 | `Typography` | Google | Type roles, font evidence classes, and the "Brand face, substitute, safe default" H3 (§6.5). |
| 4 | `Layout` | Google | Spacing, grid, container; Responsive Behavior as an H3. |
| 5 | `Elevation & Depth` | Google | Shadows and layering. |
| 6 | `Shapes` | Google | Radius and shape rules, when stated separately from Layout. |
| 7 | `Motion & Easing` | OmD | Durations, easing, motion rules. |
| 8 | `Components` | Google | Component recipes in prose; States as an H3. |
| 9 | `Do's and Don'ts` | Google | H3 `Do` and H3 `Don't` lists. |
| 10 | `Voice & Tone` | OmD | Voice, terminology, locale behaviour. |
| 11 | `CJK Typesetting` | OmD | Prose companion to `typesetting:` (§7). |
| 12 | `Agent Prompt Guide` | OmD | Example prompts. |
| 13 | `Governance` | OmD | Authority, application priority, unknowns, change rules; **H3 `Known Gaps` last**. |

Numbered headings (`## 2. Colors`) MUST NOT be used: Google matches section names exactly.
Duplicate H2 headings are forbidden (Google rejects the file).

### 4.3 Headings consumers read by name

The shadcn/ui DESIGN.md skill (`skills/shadcn/design-system.md`, Step 3, merged 2026-10-09) greps
headings and reads **Do's and Don'ts**, **Iteration Guide** and **Known Gaps** in full as rules that
override defaults. v3 therefore fixes these exact strings:

- `## Do's and Don'ts` (straight apostrophes), with `### Do` and `### Don't`;
- `### Known Gaps` as the last H3 under `## Governance`.

Every reference with a Google lint contrast warning on a measured pair MUST state it under Known Gaps
as a fact (§9). Other unresolved facts that a consumer would otherwise fill in (unverified spacing scale,
unmeasured states, font licence) SHOULD be listed there too.

## 5. Omission

Unknown means absent, at the smallest unresolved boundary:

- An unresolved value is a missing key. Never write a placeholder, `null`, `TBD`, a plausible default,
  or a `[FILL IN]` marker.
- An unresolved token **group** (`colors`, `typography`, `rounded`, `spacing`, `components`) is
  omitted and listed in Google's `omitted:` key with a `reason`:

  ```yaml
  omitted:
    - section: spacing
      reason: No verified values in current evidence.
  ```

  `omitted` is section-level only. A missing individual token is simply absent.
- A measured value that Google's grammar cannot carry is written in the section prose and recorded in
  `reference.json` `migration.prose` with its claim at a `prose:` path (§8.3). It is not dropped.
- Absence is never enforced by deleting body prose, collapsing a reference into a status note, or
  adding warning chrome (AGENTS.md hard rules apply unchanged).

## 6. Fonts (F2)

### 6.1 Three layers

| Layer | Meaning | Where | Label |
|---|---|---|---|
| 1. Brand face | The face the brand uses, as fact: evidence class, source, licence, distribution | `fonts.faces.<family>` + Typography prose | the family name |
| 2. Substitute | An open-licence face chosen **by measurement** to stand in for the brand face, one per script | `fonts.faces.<family>.substitutes.<script>`; metrics in `reference.json` | "substitute — not the brand face" |
| 3. Safe default | A per-script open-licence face for when no substitute is chosen and a face must be installed | `fonts.safeDefaults.<script>` | "safe default (not the brand face)" |

Unlabelled substitution is forbidden: no layer-2 or layer-3 face may be presented, rendered, or named
as though it were the brand face.

### 6.2 `fonts` schema

```yaml
fonts:
  roles:                       # role -> brand family, from verified evidence only
    ui: Toss Product Sans
  faces:
    Toss Product Sans:         # key = the family name as captured
      name: <display name>     # optional, when the captured family name differs (WORK / BAEMINWORK)
      scripts: [hangul, latin] # scripts the face is evidenced to cover
      evidence: [official-product-use, live-surface-use]
      surface: <surface id or label>   # optional, when the evidence is surface-specific
      source: <url>            # first-party or foundry source
      licence: <SPDX id, licence name, or licence URL>
      distribution: public | none-asserted | unresolved
      note: <one sentence qualifier>
      substitutes:             # layer 2; omit entirely when none is chosen
        hangul:
          family: Noto Sans KR
          provider: google     # google | other
          label: substitute — not the brand face
  safeDefaults:                # layer 3
    hangul: [Noto Sans KR]
    latin: [Noto Sans]
```

- `evidence` uses exactly the five AGENTS.md classes: `official-product-use`, `live-surface-use`,
  `official-distributed-asset`, `declared-only`, `unresolved`. Qualifiers go in `note`, not in new
  class names.
- `licence` records what a source states. A licence is never paraphrased into a category.
- `distribution: none-asserted` means no official source grants redistribution; `unresolved` means the
  question is open; `public` means an official download exists.
- Script keys: `latin`, `hangul`, `kana`, `han-hans` (Simplified), `han-hant` (Traditional), plus any
  ISO 15924-derived lowercase name a reference needs.
- The map is lint-silent: Google's `token-like-ignored` rule (§7.2) never fires on it because it has no
  typography property keys and no hex/dimension string values.

### 6.3 Choosing and recording a substitute

A substitute is chosen per script by measurement against open-licence candidates, preferring Google
Fonts faces because the shadcn registry accepts only `font.provider: "google"`. The measurement is
evidence and lives in `reference.json` (`fonts.substitutes.<family>.<script>.metrics`):

| Metric | Definition |
|---|---|
| `xHeightRatio` | x-height / cap height (Latin), or the Hangul/Kana/Han equivalent body-height ratio |
| `avgAdvance` | mean advance width of a fixed sample string at 1em, in em |
| `weightRange` | available weights, and whether a variable `wght` axis exists |
| `classification` | grotesk, neo-grotesk, humanist, geometric, slab, serif, rounded |
| `delta` | per-metric difference from the brand face, and the sample string and tool used |

If no measurement exists, **no substitute is chosen**: omit `substitutes`, and say "Substitute: none
chosen" in the Typography prose. Never fill layer 2 by eye.

### 6.4 `fontFamily` stacks

A role's `fontFamily` is a CSS stack: the brand face first, then the chosen substitutes for the
scripts the role renders, then a generic keyword.

```yaml
fontFamily: "Toss Product Sans, sans-serif"                  # no substitute chosen
fontFamily: "Brand Sans, Noto Sans KR, Noto Sans, sans-serif" # measured substitutes chosen
```

Safe defaults are not written into the stack; they are for consumers that must install a face. This
keeps the stack honest: it renders the brand face where installed, a measured substitute otherwise,
and the platform's generic face when nothing was measured.

### 6.5 Typography prose

The Typography section carries an H3 `Brand face, substitute, safe default` with three bullets
(brand face and its availability; the substitute or "none chosen" and why; the safe default with the
fallback label). It keeps the existing evidence-class table (official product-use, live surface-use,
official distributed asset, declared-only, unresolved).

### 6.6 Default safe-default table

When a reference needs a safe default for a script, it uses:

| Script | Safe default (Google Fonts) |
|---|---|
| `latin` | Noto Sans |
| `hangul` | Noto Sans KR |
| `kana` | Noto Sans JP |
| `han-hans` | Noto Sans SC |
| `han-hant` | Noto Sans TC |

A reference whose UI face is already a system stack lists no safe default.

## 7. CJK typesetting (F5)

### 7.1 `typesetting` schema

Structured rules per script, grounded in W3C KLREQ / JLREQ / CLREQ. Every field is optional and
follows §5: a rule is written only when evidence verifies it.

```yaml
typesetting:
  hangul:                         # script key, as in §6.2
    wordBreak: keep-all           # CSS word-break: normal | keep-all | break-all
    lineBreak: strict             # CSS line-break (kinsoku strength): auto | loose | normal | strict | anywhere
    stack: [Brand Sans, Noto Sans KR, sans-serif]   # per-script face order; MUST agree with typography stacks
    punctuation:
      compression: none           # none | palt | halt | chws (text-spacing-trim / font features)
      hanging: none               # none | allow-end | force-end (hanging-punctuation)
    interScriptSpacing: none      # none | autospace (text-autospace between Han/Hangul/Kana and Latin)
    tracking:                     # letter-spacing norms by context, in em (numbers), or `normal`
      body: { em: -0.01 }
      display: { emMin: -0.03, emMax: -0.02 }
    leading: { min: 1.5, max: 1.7 }   # line-height range as unitless numbers
    numerals: tabular             # proportional | tabular
    writingMode: horizontal-tb    # horizontal-tb | vertical-rl
```

A context key under `tracking` MAY be a surface id when values differ by surface (baemin:
`baemin-web: normal`, `woowa-corporate: { emMin: -0.03, emMax: -0.0067 }`). Derived values state their
derivation in the CJK Typesetting prose (for example "tracking ÷ font size").

### 7.2 Lint-silence rules

Google's `token-like-ignored` rule (`packages/cli/src/linter/linter/rules/token-like-ignored.ts`,
0.4.0) warns on an unknown top-level key when, at any depth, a key is one of `fontFamily`,
`fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, or a string value of 64 characters or fewer
is a hex colour or a CSS dimension. Arrays are skipped; numbers are never matched. Therefore, inside
`fonts` and `typesetting`:

- MUST NOT use the five typography property names as keys (hence `leading`, `tracking`, `stack`);
- MUST NOT write a dimension or hex as a string (`"-0.01em"`, `"#fff"`); write a number with the unit
  in the key (`em: -0.01`);
- SHOULD write lists as arrays.

The fixture `docs/research/2026-10-13-format/samples/typesetting-fixture.md` exercises every field in
§6.2 and §7.1 and lints with 0 errors and 0 warnings.

### 7.3 Prose section

`## CJK Typesetting` explains the structured rules and what is not verified ("No word-break,
line-break, or punctuation rule is verified, so none is declared"). It is REQUIRED when the reference
has a CJK locale or a CJK-script face, even if `typesetting:` is absent.

## 8. Evidence sidecar: `reference.json`

### 8.1 Why a sidecar

The legacy frontmatter mixed tokens with catalog identity and per-token claims. v3 keeps the tokens in
the frontmatter and moves the rest, unchanged in shape, to one JSON file beside `DESIGN.md`. This
mirrors what the pipeline already does for the Core v2 references: serendie keeps its catalog
frontmatter in `.omd/system/graph.json` `extensions["dev.oh-my-design.catalog"].frontmatter`, and the
shared reader (`web/scripts/lib/reference-source.mjs`) projects it back for every catalog reader.
v3 uses a flat file instead of the graph package because the legacy 518 have no graph, and F4 rules out
routing them through Core v2.

### 8.2 Schema

```jsonc
{
  "catalog": {            // legacy frontmatter keys other than tokens / verification_v2 / omd, unchanged
    "id": "stripe", "name": "Stripe", "country": "US", "category": "fintech",
    "homepage": "https://stripe.com", "primary_color": "#635bff",
    "logo": { "type": "simpleicons", "slug": "stripe" }, "verified": "2026-07-13", "ds": { … }
  },
  "tokens": {             // legacy token metadata that is not a token
    "source": "reconciled", "extracted": "2026-07-13", "note": "…", "components_harvested": true
  },
  "claimPaths": "design-md-v3",
  "verification_v2": {    // unchanged except that claim keys are v3 frontmatter paths
    "schema": 2, "checked": "…", "surfaces": [ … ], "sources": [ … ], "conflicts": [],
    "claims": { "colors.foreground": { "surface_id": "docs-home", "source_id": "docs-home-live", "method": "live-inspect", "captured": "2026-07-13" } }
  },
  "fonts": {              // optional: layer-2 measurement records (§6.3)
    "substitutes": { "<family>": { "<script>": { "family": "…", "metrics": { … } } } }
  },
  "lint": {               // F3 sidecar: Google lint result for this exact DESIGN.md
    "tool": "@google/design.md@0.4.0",
    "summary": { "errors": 0, "warnings": 27, "infos": 2 },
    "byRule": { "extension-component-property": 13, "orphaned-tokens": 10, … },
    "findings": [ { "severity": "warning", "rule": "…", "path": "…", "message": "…" } ]
  },
  "migration": {          // present on converted files
    "from": "omd-0.1", "sourceSha256": "…", "overlay": "overlay.yaml",
    "prose": [ { "path": "typography.baemin-heading.lineHeight", "value": "normal" } ],
    // Phase 2: what the v3 grammar cannot carry, so the inverse (reader adapter) is exact.
    "numeric": [ "rounded.sm" ],          // v3 `<n>px` values that were bare numbers in 0.1
    "aliases": { "typography.nav.letterSpacing": "typography.nav.letterSpacing" }, // non-default 0.1 field name
    "order": { "tokens": [ "source", "colors", "…" ] },  // 0.1 key order where the default differs
    "emptyMaps": [ "components" ],        // empty 0.1 maps
    "danglingClaims": [ "…" ],            // 0.1 claims on a value the file never had
    "omd": { "schema": 1 }                // a non-string 0.1 `omd`, kept verbatim
  }
}
```

### 8.3 Claim path grammar

A claim key is the dotted frontmatter path of the value it supports: `colors.<name>`,
`typography.<role>.<googleProperty>`, `rounded.<name>`, `spacing.<name>`,
`components.<name>.<property>`, `fonts.roles.<role>`. A value kept in prose because the token grammar
cannot carry it uses `prose:<path>` (`prose:typography.baemin-heading.lineHeight`). Every claim key
MUST resolve to a frontmatter value or a `migration.prose` entry; every legacy claim maps to exactly one
v3 key (§11).

## 9. Lint gate (F3)

- **Gate:** `npx @google/design.md@0.4.0 lint DESIGN.md` reports **0 errors**. The version is pinned and
  bumped deliberately after re-linting the catalog.
- **Warnings are recorded, not gated:** the full non-info findings go to `reference.json` `lint`, with a
  per-rule count. Expected warning sources on a fact catalog: `orphaned-tokens` (palette colours not
  bound to a component), `extension-component-property` (§3.3), `unknown-typography-property`
  (`use`), `missing-primary` (no verified primary), and `contrast-ratio`.
- **Contrast warnings are facts.** A measured brand pairing below WCAG AA (toss `#ffffff` on
  `#3182f6`, 3.71:1) is never changed to satisfy lint. It is stated under `### Known Gaps` with the
  measured ratio.
- Warnings never justify editing a verified value, adding an unverified `primary`, or binding a colour
  to a component to silence `orphaned-tokens`.

## 10. Conformance

A file is v3-conformant when all of these hold (Phase 2 ships them as `design-md-v3 check`):

1. Frontmatter at byte 0 parses as YAML; keys ⊆ §3.1, in order; `name` present; no `version`.
2. No `tokens`, `verification_v2`, or catalog key in the frontmatter (§2, §3.4).
3. Google lint: 0 errors (§9).
4. Body: one H1; H2s ⊆ §4.2 names, in §4.2 order, unnumbered, no duplicates.
5. `Known Gaps` exists under `Governance` when the lint has a `contrast-ratio` warning, and states each.
6. `fonts.faces.*.evidence` ⊆ the five classes; every `substitutes` entry has a `reference.json`
   metrics record and the label string; every `fontFamily` stack starts with a `fonts.faces` family
   or a family named in the role's evidence.
7. `fonts` and `typesetting` lint-silent (§7.2); `typesetting.*.stack` agrees with the typography stacks.
8. With a sidecar: every claim key resolves (§8.3); `lint.summary` matches a fresh lint of the file.

## 11. Migration from OmD 0.1 (F4)

Legacy files convert directly to v3; they do not pass through Core v2. The reference converter is
`scripts/design-md-v3/convert-legacy.mjs` (mapping in `scripts/design-md-v3/mapping.mjs`); the value
comparator is `scripts/design-md-v3/compare-values.mjs`.

### 11.1 Token renames

| Legacy path | v3 path | Value rule |
|---|---|---|
| `tokens.colors.<n>` | `colors.<n>` | unchanged |
| `tokens.typography.<r>.size` | `typography.<r>.fontSize` | number → `<n>px` |
| `tokens.typography.<r>.weight` | `typography.<r>.fontWeight` | unchanged |
| `tokens.typography.<r>.lineHeight` | `typography.<r>.lineHeight` | unchanged; a keyword (`normal`) → prose + `prose:` claim |
| `tokens.typography.<r>.tracking` | `typography.<r>.letterSpacing` | number → `<n>px` |
| `tokens.typography.<r>.use` | `typography.<r>.use` | unchanged (warning) |
| `tokens.typography.family.<role>` | `fonts.roles.<role>` | unchanged |
| `tokens.rounded.<n>` / `tokens.radius.<n>` | `rounded.<n>` | number → `<n>px` |
| `tokens.spacing.<n>` | `spacing.<n>` | unchanged (numbers allowed) |
| `tokens.components.<c>.bg` | `components.<c>.backgroundColor` | unchanged |
| `tokens.components.<c>.fg` | `components.<c>.textColor` | unchanged |
| `tokens.components.<c>.radius` | `components.<c>.rounded` | number → `<n>px` |
| `tokens.components.<c>.font` | `components.<c>.typography` | literal shorthand string |
| `tokens.components.<c>.{padding,height,width,size}` | same name | unchanged |
| `tokens.components.<c>.{type,border,hover,pressed,active,focus,disabled,states,use,shadow}` | same name (extension, §3.3) | unchanged |
| `tokens.{source,extracted,note,components_harvested}` | `reference.json` `tokens.*` | unchanged |
| `verification_v2` | `reference.json` `verification_v2` | claim keys re-keyed by this table |
| `id, name, country, category, homepage, primary_color, logo, verified, added, ds` | `reference.json` `catalog.*` (`name` also stays in frontmatter) | unchanged |
| `omd: "0.1"` | `reference.json` `migration.from` | — |

Phase 2 additions from the catalog survey (no value is inferred; each goes to section prose with a
`prose:` claim, spec §5): `tokens.shadow.<n>` (308 files) → Elevation & Depth prose; `tokens.motion.*`
(3) → Motion & Easing prose; a list-valued `tokens.spacing` (4) → Layout prose, because naming its
entries would be invented; a typography entry with no role field (a scale map such as
`typography.leading: {tight, normal}`) → Typography prose; a non-dimension `size`/`tracking`
keyword → Typography prose. Any other shape still stops the converter.

### 11.2 Section moves

| Legacy H2 (number stripped) | v3 |
|---|---|
| Visual Theme & Atmosphere, Primary tasks, Brand Narrative, Principles, Personas | H3s under `Overview` |
| Color Palette & Roles | `Colors` (inner H3s kept) |
| Typography Rules | `Typography` |
| Layout Principles | `Layout`; Responsive Behavior becomes its H3 |
| Depth & Elevation | `Elevation & Depth` |
| Motion & Easing | `Motion & Easing` |
| Component Stylings / Component Patterns | `Components`; States becomes its H3 |
| Do's and Don'ts | `Do's and Don'ts` |
| Voice & Tone | `Voice & Tone` |
| Agent Prompt Guide | `Agent Prompt Guide` |
| (none) | `CJK Typesetting`, `Governance` → `Known Gaps`, added from the reviewed overlay and the lint |
| Other hand-written H2s (Phase 2) | kept verbatim as an H3 under the closest v3 section (`SECTION_RULES` in `web/scripts/lib/design-md-v3.mjs`): evidence, verification, implementation and accessibility notes → `Governance`; imagery, principles, personas → `Overview`; interaction and state notes → `Components` |

Prose lines move verbatim. Facts the legacy file holds only in prose (font licence and distribution,
typesetting, extra Known Gaps) enter the structured fields through a **reviewed overlay** file that
restates the canonical prose; the overlay is the only hand-authored input and adds no new evidence.

### 11.3 Comparator acceptance

A conversion is accepted only when the comparator reports no problem:

- every legacy token leaf is at its mapped v3 path with an equal value (after the number→px rule);
- every v3 token leaf maps back to a legacy leaf or is a listed overlay addition (`fontFamily` stacks);
- claim count is unchanged and each claim's evidence object is identical;
- every catalog key is in `reference.json` `catalog` unchanged;
- every non-heading legacy body line exists verbatim in the v3 body, and every legacy heading exists
  (renamed only per §11.2).

## 12. Versioning and compatibility

### 12.1 Version

The format version is `3.0.0` and is recorded only in `reference.json` (`claimPaths:
"design-md-v3"` marks the claim grammar). Semantic versioning as Core v2 §9: a major changes required
keys, section names, or claim grammar; a minor adds optional fields; a patch clarifies.

The pinned Google lint version is part of the gate, not of the format. A Google spec change that
renames a section or property is a v3 minor (alias) or major (removal) by the same rule.

### 12.2 Detection (dual-read)

Readers classify a file in this order:

1. **v3** — frontmatter at byte 0 with `name` and at least one of `colors`/`typography`/`rounded`/
   `spacing`/`components` at top level, and no `tokens`/`id`/`verification_v2`/`omd` key. Catalog
   readers then load `reference.json` beside it.
2. **Core v2** — contains `<!-- design-md:section ` anchors (Core v2 §3). Adopted-by-migration
   references (toss, krds) carry their legacy source in `.omd/system/graph.json`
   `extensions["dev.oh-my-design.migration"]`; natively authored ones (serendie) carry catalog
   frontmatter in `extensions["dev.oh-my-design.catalog"]`.
3. **OmD 0.1 legacy** — frontmatter with `id` and/or `tokens:`.
4. **Unmarked Google-compatible** — Google frontmatter without a sidecar (a third-party file). Read
   like v3 without catalog identity.

### 12.3 Single write

Writers emit v3 only. Core v2 writers (`scripts/compile-design-md-core.cjs`, the omd-learn and
autopilot paths) remain for project-root `DESIGN.md` files until a separate decision moves them; the
catalog moves to v3 under F4. The legacy reader stays read-only until two releases after the full
catalog conversion pass the guards in `PHASE1.md` §6.

## 13. Relationship to Core v2

| Core v2 | v3 |
|---|---|
| §3 no frontmatter | Google frontmatter required; neutrality kept by excluding tool metadata (§2) |
| §4 seven anchored sections | Google section names and order (§4.2); no anchors |
| claim markers in the body | per-value claims in `reference.json` |
| System Graph canonical when adopted | not required; the graph remains a future adapter target |
| "Omit unknown substitutes" (§12 skeleton) | substitutes allowed only measured and labelled (§6) |
| unknown means absent | unchanged |

## 14. Minimal skeleton

```markdown
---
name: Brand
description: One sentence on the surfaces covered.
colors:
  primary: "#3182f6"
typography:
  body:
    fontFamily: "Brand Sans, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Brand Sans
  faces:
    Brand Sans:
      evidence: [live-surface-use]
      distribution: unresolved
  safeDefaults:
    latin: [Noto Sans]
---

# Brand Design System

## Overview
## Colors
## Typography
### Brand face, substitute, safe default
## Do's and Don'ts
### Do
### Don't
## Governance
### Known Gaps
```

The skeleton shows shape only. Sections without verified content are left out.
