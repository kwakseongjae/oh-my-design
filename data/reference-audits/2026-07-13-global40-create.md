# Global 40 CREATE Audit — 2026-07-13

## Outcome

- Scope: 40 net-new references — Korea 10, Taiwan 10, Japan 10, United States 10.
- Final acceptance: 40/40 passed the deterministic `verify-reference --no-net` gate.
- Catalog: 400 → 440 references; fleet quality is now 141 Verified v2 / 159 Partial / 140 Legacy.
- Model path: deterministic browser evidence → `gpt-5.6-terra` / `high` CREATE or repair → deterministic acceptance.
- Canonical output per brand: `web/references/<id>/DESIGN.md`, `.verification.md`, `_research.md`.

## Selected references

| Market | References |
|---|---|
| KR | kb-kookmin, wooribank, sktelecom, lguplus, lotteon, soop, megabox, cgv, onestore, kakaogames |
| TW | acer, taishinbank, 104, udn, familymart-tw, eslite, thsr, evaair, china-airlines, poya |
| JP | toyota, sony, recruit, mynavi, mixi, panasonic, sakura-internet, teamlab, au, softbank |
| US | uswds, aws-cloudscape, patternfly, palantir, pega, zendesk, elastic, intuit, servicenow, thumbtack |

Selection favored recognizable product or public-system references with at least two inspectable first-party surfaces. Rejected candidates were replaced rather than admitted below the preflight gate: Inline, CTBC, KKTIX, DeNA, JAL, Red Hat UX, Mozilla Protocol, and Segment Evergreen.

## Evidence yield

| Market | Surfaces | Avg. coverage | Raw component variants | Accepted token claims | Promoted components |
|---|---:|---:|---:|---:|---:|
| KR | 30 | 76.4 | 762 | 443 | 24 |
| TW | 30 | 85.0 | 448 | 476 | 27 |
| JP | 29 | 74.6 | 492 | 368 | 18 |
| US | 29 | 73.8 | 389 | 417 | 20 |
| Total | 118 | 77.5 | 2,091 | 1,704 | 89 |

The collector admitted only references with at least two surfaces, coverage at least 60, and at least one observed component variant. All 40 met that gate after explicit-route remediation and candidate replacement.

## How research and collection worked

1. Candidate discovery separated product, marketing, corporate, documentation, font catalog, and license domains.
2. Official routes were captured with the deterministic Playwright collector in baseline-only, no-interaction mode. This avoided promoting synthetic states.
3. Terra/high received the evidence packet as the only raw UI evidence and used first-party web research only for company history, current brand evolution, font/license context, and Tier 2 attempts.
4. Unknown fields were omitted at the smallest boundary. Declared fonts, adjacent corporate surfaces, and generic components were not promoted as product facts.
5. The outer runner independently checked YAML, frontmatter, regional first-party coverage, raw proof, component structure, claim closure, source kinds, conflict state, and interactive-state honesty.

## CREATE quality findings

- First-pass document acceptance was 30/40. Ten documents needed repair, but all 40 raw evidence packets passed preflight.
- Early failures were schema-contract failures, not missing captures: bare favicon domains, invalid `link` component types, invalid source kinds, omitted state summaries, and non-standard conflict wording.
- Tightening the adapter contract raised immediate pass consistency. The repair pass preserved valid narrative and token siblings and fixed only rejected fields.
- UDN exposed one deterministic edge case: `tokens.components_harvested` is metadata and must not receive a claim path. Removing that single extra claim closed the final 46/46 graph.
- The final set contains 1,704 atomically grounded token claims and 89 promoted components. This demonstrates CREATE is viable beyond re-verification, provided deterministic preflight and acceptance remain mandatory.

## Browser-harness diagnosis

- `browser-harness doctor` could not attach to the local Chrome instance (daemon/connection count 0), so it was not reliable as the primary high-volume collector in this run.
- The deterministic Playwright collector was useful and stable when browser capture was serialized. Explicit first-party route lists were necessary for portal-style Korean and Taiwanese sites.
- Recommended final process: deterministic collector by default; browser-harness only for exception debugging and interaction discovery when its connection is healthy; in-app browser for builder acceptance, not raw bulk capture.

## Pipeline changes made during the run

- Added `capture:create-batch` for resumable multi-market evidence capture.
- Added `create:batch` and the Codex Terra/high adapter for subscription-based CREATE and repair.
- Added strict CREATE prompt contracts for component types, favicon schema, source kinds, state summaries, no-conflict form, and exact claim closure.
- Fixed `sync-catalog` to always rebuild the quality manifest and always reconcile all three fingerprint mirrors.
- Removed the hard-coded 400-reference assertion so future additions validate against the registry count.

## Limitations and follow-up

- Browser-harness remains an exception lane until local Chrome attachment is reliable.
- Baseline-only capture proves default geometry, not hover/focus/error states. Interactive values stay absent unless a later evidence run observes them.
- Generated tone keywords are mechanical intake hints and should be editorially refined for high-traffic references.
- The production build passed with 1,411 static pages. OpenRouter embeddings were skipped because no key was present; keyword fallback remains active.

## Builder sample acceptance

- `/builder?step=preview` was exercised with KB국민은행 (KR), Acer (TW), Toyota (JP), and USWDS (US).
- All four rendered the reference narrative, Color Palette, Typography, Spacing & Shape, Guidelines, Components, and the source DESIGN.md panel.
- All four exposed a Verified v2 evidence summary. None rendered `Partial reference` warning chrome or substituted an unresolved family as a brand font.

## Reproducibility

- Candidate manifest: `config/reference-create-global40.json`
- Resumable state: `artifacts/reference-create/2026-07-13-global40.json`
- Raw evidence: `artifacts/reference-evidence/<id>.json`
- CREATE packets: `artifacts/reference-create/runs/2026-07-13-<id>/packet.md`
