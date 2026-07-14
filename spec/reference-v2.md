# Reference Quality Contract v2

Status: implementation baseline
Owner: reference data plane
Canonical content: `web/references/<id>/DESIGN.md`

## Why this exists

`verified: YYYY-MM-DD` is a timestamp, not a quality grade. A reference can have a recent footer and still mix marketing/app surfaces, expose stale typography, or publish prose-derived tokens as if they were observed facts.

v2 separates catalog coverage from editorial trust. Public surfaces must use the generated quality manifest and must never infer a higher tier from a date alone.

## Public tiers

| Tier | Meaning | Allowed public behavior |
|---|---|---|
| `verified_v2` | Every canonical token claim is connected to a current source and surface through the structured evidence graph. | May use a Verified badge and seed the default builder/agent handoff. |
| `partial` | Useful observed material exists, but claim-level evidence, state depth, freshness, or conflict resolution is incomplete. | Show gaps and sources; require user awareness before handoff. |
| `legacy_snapshot` | Prose-derived, stale/conflicted, or missing the minimum proof/source gate. | Preserve for discovery only; never market as verified. |
| `auto` / `community` | Future ingestion tiers. | Must remain visually and technically separate from editorial tiers. |

The status is computed. Authors do not write a public status into frontmatter.

## Structured evidence graph

A reference becomes eligible for `verified_v2` only after adding a `verification_v2` block to the canonical `DESIGN.md` frontmatter:

```yaml
verification_v2:
  schema: 2
  checked: 2026-07-10
  surfaces:
    - id: product-web
      kind: product
      url: https://brand.example/app
      inspected: 2026-07-10
  sources:
    - id: product-live
      kind: product-surface
      url: https://brand.example/app
      captured: 2026-07-10
    - id: font-license
      kind: license
      url: https://brand.example/fonts/license
      captured: 2026-07-10
  claims:
    "tokens.colors.primary":
      surface_id: product-web
      source_id: product-live
      method: computed-style
      captured: 2026-07-10
    "tokens.typography.family.sans":
      surface_id: product-web
      source_id: font-license
      method: official-doc
      captured: 2026-07-10
  conflicts: []
```

Every scalar leaf under colors, typography, font/text, rounded/radius, spacing, shadow, and components is a canonical claim. Each claim must point to a declared `surface_id` and `source_id` and carry a capture date. This mapping prevents a marketing-site color, consumer-app font, and corporate-site component from silently becoming one fictional design system.

## Hard gates

`verified_v2` requires all of the following:

1. Strict YAML and the existing catalog-integrity schema pass.
2. `tokens.source` is not `prose-derived`.
3. `verified >= tokens.extracted` and `verification_v2.checked` is not older than either date.
4. `.verification.md` has a real `## Proof` block, at least five raw samples, and a source URL.
5. The DESIGN.md verification footer has at least one Tier-1 URL; existing KR/TW regional-source rules still apply.
6. Every canonical claim has valid claim → surface → source linkage.
7. No unresolved conflict exists in the structured block or legacy footer.
8. Interactive component tokens include at least one observed state.
9. Every source is inside its TTL at evaluation time.

Source TTLs:

- product surface: 90 days;
- official design-system documentation: 180 days;
- brand asset or font license: 365 days.

Any verified blocker demotes the reference to `partial`. A prose-derived source, freshness conflict, missing minimum proof, missing Tier-1 source, or explicit unresolved conflict demotes it to `legacy_snapshot` until re-audited.

## Generated manifest

Run from `web/`:

```sh
npm run quality:references
npm run quality:references:check
```

The generator reads only `web/references/` and emits `web/src/data/reference-quality.generated.ts`. It is deterministic for a given evaluation date, sorted by id, and contains public status plus machine-readable reason codes. CI runs the check daily so TTL expiry cannot remain invisible.

## Consumer contract

The reference detail page, builder, API, SEO metadata, sitemap, and future locale pages must consume the same typed reference AST and quality manifest. The retired MCP code is an archive, not a consumer contract. Raw `verified` dates must not create badges or trust copy. Prose parsing remains a rendering fallback for Legacy snapshots only.

## Migration order

Migrate by demand, not alphabetically. The first 20 references cover 52.5% of lifetime selects. Each migration must add surfaces, sources, claim evidence, component states, and explicit conflicts before it can change public tier.
