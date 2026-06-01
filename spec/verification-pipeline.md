# DESIGN.md Verification Pipeline

> Source-of-truth pipeline for updating `references/<id>/DESIGN.md` §4 Components (and §1–3 tokens when in conflict). Derived from user-stated pattern: 1차 공식 DS 리서치 → 2차 getdesign.md + styles.refero.design 교차검증 → 3차 DESIGN.md 업데이트.

---

## Tiers

### Tier 1 — Primary (mandatory)
The brand's **own** authoritative surface. Pick the highest-priority source available:

1. **Official design system docs** (e.g. `developer.apple.com/design/human-interface-guidelines`, `tossmini-docs.toss.im/tds-mobile`, `airbnb.design`, `spotify.design`, `kakaocorp.com/page/service/service/design`)
2. **Live brand site inspection** — DOM/CSS values for the actual component as rendered on the brand's flagship surface (e.g. apple.com/shop, airbnb.com search bar, spotify.com hero CTA)
3. **Public component library / Storybook** if the brand publishes one (Atlassian DS, Polaris, Carbon, etc.)

**Output:** raw observations table per component (variant name, bg, fg, radius, padding, height, font-size, font-weight, border, source URL, screenshot/snippet).

### Tier 2 — Cross-check (mandatory if any Tier 2 source exists)
Independent third-party catalogs:

1. **getdesign.md** — `https://getdesign.md/<brand>` (YAML token format; reliable for color taxonomy + component spec)
2. **styles.refero.design** — search the brand by name or use the direct style URL if known. Refero pages are paginated/scroll-loaded; if the brand isn't visible after one full scroll, **search by name in the search box** before declaring not-listed.

**Output:** parallel observations table for each Tier 2 source.

### Tier 3 — Reconciliation + Write
1. **Build a conflict matrix** per (component, field): Tier 1 value | getdesign value | refero value.
2. **Resolution rule:**
   - All three agree → write that value.
   - Tier 1 ≠ Tier 2 → Tier 1 wins **only if** the Tier 1 evidence is timestamped/inspectable now (live DOM or current docs page). Otherwise prefer the majority of Tier 2 sources.
   - Two Tier 2 sources disagree and Tier 1 is silent → flag as `(unresolved)` in DESIGN.md and pick the more recent-looking source; document the conflict in the verification footer.
3. **Update DESIGN.md** §4 with canonical schema (variant heading + bullet `Field: value` lines).
4. **Append verification footer** to §4 listing all sources consulted with URLs and the date.
5. **Run tests:** `npm test --silent` — Components extraction tests must pass.
6. **Visual smoke check:** load `/reference/<id>` in browser; confirm spec cards render with no blank/white-on-white/elongated-circle regressions.

---

## Per-component minimum depth (Option Y)

For each ref, attempt to verify **all** that exist in the brand's surface (do not stop at 4):

| Class | Required if present |
|-------|---------------------|
| Button | All semantic variants (primary, secondary, tertiary/text, destructive) × all visual styles (fill, outline, ghost, soft) × all sizes — list at least the canonical default + 2 sizes |
| Input/TextField | Default + focused + error + disabled, with size variants (e.g. small/medium/large or compact/regular) |
| Card | At least the headline card and one secondary card variant (e.g. media card, product card, list card) |
| Badge/Tag | All semantic colors (info/success/warning/error/neutral) + size variants |
| Tab/Segmented | Active + inactive states with explicit bg AND text color split |
| Toggle/Switch | On/off |
| Toast/Alert | Each semantic variant |
| Dialog/Modal | Default if documented |
| Avatar | Size + shape variants |
| ListItem | If brand uses distinctive list patterns (Toss list rows, Apple navigation rows) |

**Stop condition:** when Tier 1 surface has no more component classes documented OR when all Tier 1 components have been verified against ≥1 Tier 2 source.

---

## Per-ref deliverable

For each brand processed, produce:

1. **Working notes + Proof block** in `web/references/<id>/.verification.md` (**tracked, committed** — this is the audit trail; see Proof Gate below).
2. **DESIGN.md §4 update** — canonical schema variant blocks.
3. **Verification footer** at end of §4:
   ```
   ---
   **Verified:** YYYY-MM-DD
   **Tier 1 sources:** <list of URLs>
   **Tier 2 sources:** getdesign.md/<id> | styles.refero.design/<style-id>
   **Conflicts unresolved:** <list, or "none">
   ```
4. **Test additions** — extract-components.test.ts assertions for the canonical default variant of each component class.

---

## Proof Gate (Tier 1) — enforced by catalog-integrity

A footer that *says* `Verified: <date>` is not proof — earlier batches stamped
footers without touching §4 (the "footer-only" anti-pattern). The proof gate makes
the evidence machine-checkable and tracked. **Active for refs `verified >= 2026-06-01`;
older refs are exempt** (grandfathered — the gate is forward-only).

During Tier 1 live inspect, write a `## Proof` block into the (tracked)
`web/references/<id>/.verification.md`:

```markdown
## Proof — Tier 1 live inspect

**Inspected:** 2026-06-01
**Method:** playwright getComputedStyle
**Sources:**
- https://<brand>.com/ — nav, hero CTA, footer
- https://<brand>.com/<surface> — commerce/checkout (if separate)

### Raw samples
- `https://<brand>.com/` · hero CTA `.btn-primary` · bg `rgb(116, 92, 237)` = #745CED · radius 8px · padding 12px 24px · font 16px/600
- `https://<brand>.com/` · nav link · color `rgb(17,17,17)` · 15px/500
- … (>= 5 lines, each ONE real computed-style observation with a color or px value)
```

The catalog-integrity test asserts, for every gated ref:

1. `.verification.md` exists and contains a `## Proof` heading.
2. The proof block holds **>= 5 raw samples** (lines carrying `rgb(` / `#hex` / `px`).
3. At least one `http(s)` source URL is present.
4. The §4 footer `**Tier 1 sources:**` lists **>= 1** URL.

This cannot be satisfied by stamping a footer — you have to paste the real DOM
values you read. A real inspect produces 30–100 samples (see `apple/.verification.md`);
fewer than 5 means the inspect did not happen.

**Drift re-check (UPDATE mode):** re-inspect the same selectors and diff the new
computed values against the stored `### Raw samples`. Any field that moved → update
§4 and note the rollback reason in the conflict matrix. (Runtime step; not CI-gated.)

---

## Regional sources — KR / TW (`spec/regional-sources.yaml`)

getdesign.md and refero under-cover Korean and Taiwanese brands, so Tier 2 cannot
carry a KR/TW ref. For `country: KR` or `country: TW` refs `verified >= 2026-06-01`:

- The §4 `**Tier 1 sources:**` footer must list **>= 2 brand-owned regional sources**
  (the brand's own site / official DS docs / official eng-design blog / official
  GitHub org). See the `brand_owned` index in `spec/regional-sources.yaml`.
- getdesign.md and styles.refero.design **do not count** toward the >= 2 — they are
  Tier-2 cross-check only.
- Use the `discovery` aggregators (요즘IT, velog, iThome, INSIDE…) to FIND the
  brand's first-party surface, but cite the first-party surface, not the aggregator.

catalog-integrity asserts the `>= 2 non-Western Tier-1 source` rule for gated KR/TW
refs.

---

## Honesty rules (self-imposed)

- **Never claim "checked X" without a tool call in the same turn.** If the verification-footer says `getdesign.md/apple` was consulted, there must be a WebFetch in the transcript pointing at exactly that URL.
- **Never declare "not listed" on refero from a single scroll.** Use the search box or direct style URL.
- **When Tier 1 and Tier 2 conflict, surface the conflict** in chat to the user before resolving — do not silently pick.

---

## Pilot order

1. **Apple** (Tier 2 refero data already captured in this turn — `a4f123f2-cd4b-4d26-998f-a3d3ee158024`)
2. **Toss** (Tier 1 TDS already partially captured; revisit Tier 2 refero/getdesign)
3. **Airbnb**
4. **Spotify**
5. **Kakao**

After Batch 1 (5/67) passes user review, scale to Batch 2.
