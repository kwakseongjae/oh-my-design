# Cybozu provenance

Not part of the portable `DESIGN.md`. Source ledger, proof, unpromoted legacy claims, and disposition evidence for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/cybozu/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cybozu |
| name | Cybozu |
| country | JP |
| category | saas |
| homepage | https://cybozu.co.jp/ |
| primary_color | `#139cb7` |
| logo | favicon `https://www.google.com/s2/favicons?domain=cybozu.co.jp&sz=128` |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

Token note from source: two brand-owned surfaces. Corporate Cybozu uses teal `#139cb7` on `#333333`; kintone uses yellow `#ffbf00` on `#231200`. This is an intentional corporate/product split, not a conflict.

## Sources and proof method

Inspected 2026-06-17 using Playwright `getComputedStyle` on body, headings, navigation, actions, inputs, and full-DOM color frequencies with a `ja-JP` locale.

| Source | Role | Boundary |
|---|---|---|
| https://cybozu.co.jp/ | Corporate live surface | Teal corporate identity, Hiragino, bilingual labels, circular controls, corporate surface/hairlines |
| https://kintone.cybozu.co.jp/ | kintone live product-marketing surface | Yellow product identity, product type, cards, CTAs, fields, tints |
| https://ui-component.kintone.dev/ | Official component-library existence | Generic Docusaurus chrome is not a token source |
| https://github.com/kintone-labs/kintone-ui-component | Open library | `kintone-ui-component` v1.25.0, MIT |
| https://note.com/cybozu_design | Product Design Magazine | Open product-design process and organization context; no token claim |
| https://getdesign.md/cybozu | Tier 2 attempt | No Cybozu token page surfaced |
| https://styles.refero.design/?q=cybozu | Tier 2 attempt | No canonical Cybozu/kintone style page surfaced |

## Token record

| Group | Exact source values |
|---|---|
| corporate colors | primary `#139cb7`; primary-light `#64bdd4`; ink `#333333`; ink-pure `#000000`; muted `#aaaaaa`; muted-slate `#838d94`; slate-dark `#31424e`; slate-darker `#465560`; canvas `#ffffff`; surface `#f6f6f6`; hairline `#e6e6e6`; on-primary `#ffffff` |
| kintone colors | yellow `#ffbf00`; amber `#ffdb4f`; amber-deep `#ff8f00`; ink `#231200`; surface `#f3f3f3`; tint `#fff5e1`; card-border `#d6d5d5`; dark `#333333` |
| typography families | corporate `Hiragino Kaku Gothic Pro`; product `Roboto / Noto Sans JP`; fallback `Meiryo` |
| typography metrics | corp-body `16 / 400 / 2.0`; corp-nav `14 / 700`; corp-en-label `16 / 400`; kintone-h2 `52 / 700 / 1.45 / 2.6`; h2-alt `48 / 700 / 1.40 / 0.96`; body `16 / 400 / 1.69`; chip `12 / 700` |
| spacing | xs `4`; sm `8`; md `12`; base `16`; lg `20`; xl `24`; xxl `32`; section `62` |
| rounded | sm `4`; md `8`; lg `10`; full `9999` |
| shadow | soft `rgba(0,0,0,0.1) 0px 0px 6px 0px`; pickup `rgba(0,0,0,0.17) 0px 1px 10px 0px`; none `none` |

## Component token record

| id / primitive | Exact source record |
|---|---|
| corp-nav-link / tab | fg `#333333`; font `14px / 700 Hiragino`; active `teal #139cb7 text on hover/active`; corporate top-nav item |
| corp-text-link / button | fg `#139cb7`; font `16px / 400 Hiragino`; corporate inline/list text link; single teal action color |
| corp-icon-button / button | bg `#ffffff`; fg `#139cb7`; radius `9999px`; shadow `rgba(0,0,0,0.1) 0 0 6px`; circular soft-shadow 40px control |
| corp-card / card | bg `#ffffff`; border `1px solid #e6e6e6`; hairline card on `#f6f6f6` |
| kintone-cta-dark / button | bg `#333333`; fg `#ffffff`; radius `8px`; padding `5px 5px 5px 20px`; height `64px`; font `16px / 400 Roboto` |
| kintone-outline-button / button | bg `#ffffff`; fg `#231200`; border `1px solid #d6d5d5`; radius `8px`; padding `5px 5px 5px 20px`; height `66px` |
| kintone-card / card | bg `#ffffff`; fg `#231200`; border `1px solid #d6d5d5`; radius `10px`; padding `24px`; flat/no shadow |
| kintone-badge / badge | bg `#ffbf00`; fg `#231200`; radius `8px`; padding `5px 8px 10px`; font `12px / 700` |

## Raw live samples

### Corporate

- body: full Hiragino stack; `#333333`; 16px; 32px line-height; `#ffffff`.
- nav: `#333333`; 14px / 700; `18px 0px`; 56px height.
- “ニュース 一覧”: `#139cb7`; 16px; 32px line-height. News item link: `#139cb7`; 14px.
- circular icon: white / teal; `50%`; 40px; `rgba(0, 0, 0, 0.1) 0px 0px 6px 0px`.
- PickUp circle: white background and text; `50%`; 50px; `rgba(0, 0, 0, 0.17) 0px 1px 10px 0px`.
- English labels: `#aaaaaa`; 16px; 32px line-height; normal tracking.
- frequency records: backgrounds `#ffffff` ×30, `#64bdd4` ×4, `#f6f6f6` ×1, `#31424e` ×1; borders `#e6e6e6` ×9, `#64bdd4` ×1, `#465560` ×1; text `#333333` ×2156, `#139cb7` ×446, `#000000` ×67, `#ffffff` ×54, `#aaaaaa` ×34, `#838d94` ×3.
- title: “サイボウズ株式会社”.

### kintone

- body: full Roboto/Noto/CJK stack; `#231200`; 16px; 27px line-height; `#ffffff`.
- H2: 52px / 700 / 75.4px / 2.6px; alternate 48px / 700 / 67.2px / 0.96px.
- yellow chip: `#ffbf00` / `#231200`; `8px 8px 0px 0px`; `5px 8px 10px`; 12px / 700.
- decorative circle: `#ffdb4f`; `50%`; 42px.
- dark CTA: `#333333`; 8px; `5px 5px 5px 20px`; 64px; 16px.
- feature card: `#ffffff` / `#231200`; `1px solid #d6d5d5`; 10px; 24px; no shadow.
- outline button: white; `#d6d5d5`; 8px; `5px 5px 5px 20px`; 66px. Compact: 4px; `2px 2px 2px 12px`; 42px.
- frequency records: backgrounds `#ffffff` ×172, `#333333` ×121, `#f3f3f3` ×29, `#ffbf00` ×13, `#231200` ×12, `#ffdb4f` ×5, `#fff5e1` ×4, `#ff8f00` ×1; text `#231200` ×1960, `#000000` ×115, `#ffffff` ×21.
- title: “kintone（キントーン） | みんな、つくれる。業務アプリがつくれるサイボウズのノーコード・ローコードツール”.

## Unpromoted legacy claim ledger

These source bytes are preserved for loss accounting but are not promoted as verified Core values because the sibling proof does not establish their evidence class.

### Responsive recipes

- Mobile `<640px`: single column, compressed headings, stacked feature cards.
- Tablet `640–1024px`: two-column feature grids and moderate padding.
- Desktop `1024–1440px`: full layout, multi-column kintone grids, centered corporate portal.
- Claimed collapse sequence: multi-column → two-up → single; full-width corporate bands; scaled 52px headings while preserving weight 700 and positive tracking; radius retention across breakpoints.

No multi-viewport capture appears in `.verification.md`, so these remain unresolved legacy claims rather than portable responsive rules.

### Motion recipes

- Durations: `motion-fast` 120ms; `motion-standard` 200ms; `motion-slow` 320ms.
- Curves: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`; `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- Legacy rules: subtle color/opacity response, standard/ease-enter card fade from below, no bounce/spring, and instant transitions under `prefers-reduced-motion: reduce`.

No transition-property, animation-name, computed duration/easing, or reduced-motion proof appears in `.verification.md`; no value is promoted.

### State recipes

The complete legacy §14 recipe table remains in the portable Components section with adjacent derived-editorial classification, as required before graph adoption. It is not recorded as measured interaction proof.

## Persona disposition

The three legacy named biographies were fictional archetypes by the source’s own disclosure. Under Rulebook D2 their names and biographies are deleted rather than recopied. Only the source-backed stakeholder groups are retained in portable Experience.

## Proof notes

- Canonical sibling proof used: `web/references/cybozu/.verification.md`.
- Conflict resolution: corporate teal versus kintone yellow is a documented surface split, not a conflict and not a merged token.
- The public component library confirms an open system; its generic docs chrome supplies no visual values.
- Derived editorial scope in the portable document comprises the two-system non-reconciliation decision; the collaboration-infrastructure reading; primary-task framing; audience grouping; distinctive-trait selection; visual, elevation, motion-promotion, asset-authority, layout, voice, content-direction, and governance judgments; derived principles and avoidances; component-role and state-applicability judgments; and legacy state guidance. These are reconstruction-level implementation inferences, not Cybozu-authored doctrine or a separately published UI specification, and each scope is paired in the portable body with an adjacent complete authority limitation.
