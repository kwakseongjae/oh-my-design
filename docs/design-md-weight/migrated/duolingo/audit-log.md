# Duolingo F3 audit (B2a · E2) — wave5 sol resubmit

Auditor: grok-4.6 (fresh session, not the T2 worker).
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7 — B2 / B2a / E1 / E2 / E2a–c only.
Date: 2026-08-23

Sentence class used: brand-published fact / observed technical / editorial interpretation or causal judgement. Only the third class without an adjacent complete qualifier (`derived editorial implementation inference` / `not Duolingo-authored or a separately published UI specification`) was edited in the body. Token values, component tables, state applicability, and structure were not changed. Worker resubmit decisions left in place: Accent/Destructive loading·error·success omitted; Audience has no `ads`; Official product-use withdrawn; owl-curve restored as source-stated/Tier-2; Correct Feedback Bar `on the right`; no claim-surface mapping / per-surface inspected dates.

## Classification (DESIGN.md)

Already adjacent to a complete B2a phrase and left as-is:
- Scope atmosphere / fun-first / chalkboard / children’s-book
- Scope habit-driven causal / school-SaaS refusal
- Distinctive vivid-palette / white-dominant
- numbered Principles (eight items)
- capture-bound application
- Avoid source Don’ts
- Elevation physical-not-atmospheric
- Typography type-character
- Foundations lesson-screen composition
- Layout whitespace
- Layout one-focal-action composition
- Layout rapid-tapping purpose
- Content voice table / forbidden list / owl reading
- Motion celebration-license
- Motion reduce-motion still-celebratory-in-copy
- Capture-record “Never cold” / “No shaming language” / “peak emotional moment” / “light, not punitive”
- Capture-record lip-always-solid
- Sign-up Input tap-first
- Progress “glossy, gamey sheen”

Left unqualified (class 1 or 2, or reconstruction boundary):
- Scope coverage, catalog homepage, `reconciled` / `components_harvested` / `#1a73e8` token note, platform/release variance, public founding facts, product mechanics
- L11 reconstruction-authority sentence (`This is not an official Duolingo-authored UI specification`) — not third-class content; completing it would recast token facts as editorial
- Primary tasks, Audience exclusion, Distinctive hex/lip/outline/radius/type/Eel facts
- Foundations tokens, YAML/body non-merge notes, B3 gate
- Font evidence owl-curve (source-stated body + Tier-2 narrative, not Official product-use)
- Type roles, Assets Simple Icons identity-only, component anatomy and applicability
- Layout measurements, source-stated lesson/control strings, Governance
- Nunito / `#1a73e8` catalog evidence-class boundaries

Third class found without adjacent complete limiter:
- Scope evidence-domain: lesson value is not a proxy for every marketing / Super-upsell / settings screen
- Foundations Shape: 12px/16px corners are local geometry, not a universal radius
- Layout closing sentence: named measurements are not a claim that every unlisted surface shares them

## Fixes

1. `DESIGN.md` Scope — attached **The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification.** before the not-a-proxy sentence.
2. `DESIGN.md` Foundations Shape — attached **The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification.**
3. `DESIGN.md` Layout & Platforms — attached **The following measurement-application reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification.**
4. `provenance.md` Proof notes derived range — was narrower than the body (omitted Scope not-a-proxy, Shape local-geometry, Layout measurement-application). Expanded to the actual B2a sites.
5. `provenance.md` Identity — homepage was dual Scope + ledger. Live host `www.duolingo.com` also sits in Foundations Semantic color corroboration and Font evidence live computed surface-use (E2a).
6. `provenance.md` Proof notes — same homepage destination widening as (5).
7. `provenance.md` Sources — added live-host destinations: Scope + Foundations corroboration + Font evidence + ledger (E2a).
8. `migration-log.md` YAML identity — Disposition and reason: homepage is not Scope-only; live host also Foundations + Font evidence (E2a).
9. `migration-log.md` §1 — recorded Scope not-a-proxy B2a; dropped “Token/surface facts는 한정 없이”; homepage live host is not dual.
10. `migration-log.md` §4 footer — Disposition was “분리 → provenance” for the whole Note. Platform/release stays Scope; signature-traits sentence is not recopied in provenance; live host destinations include Foundations + Font evidence (E2a).
11. `migration-log.md` §5 — rapid-tapping was logged as a §5 source-row; it is §8. Added Shape local-geometry and Layout measurement-application B2a on this Layout destination.
12. `migration-log.md` §8 — recorded answer-tile rapid-tapping as this source-row with adjacent complete B2a.
13. `migration-log.md` F1 — listed the three newly qualified blocks; withdrew “Remaining Scope sentences are coverage, token-note facts, or public founding facts” (E2c).
14. `migration-log.md` F2 — homepage dual→live-host multi-destination; dropped “Compliance claims match the body after this revision” (E2c). Footer Note signature-traits absence and §8 rapid-tapping source-row recorded.

No token values, component tables, state applicability, or section structure were changed.

AUDIT_DONE fixes=14
