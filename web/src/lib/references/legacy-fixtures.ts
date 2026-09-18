/**
 * References these tests use as their *legacy* subject.
 *
 * Six tests asserted the legacy dual-read contract with `toss` hardcoded, so
 * adopting toss broke all six at once — and each failure read as a reader bug
 * ("expected 'core-v2' to be 'legacy'") rather than what it was: the fixture
 * stopped being legacy. Naming them here turns the next adoption into one
 * failure with one instruction instead of six scattered ones.
 *
 * Two fixtures, not one: no remaining legacy reference has both a brand colour
 * distinct from its UI primary *and* six or more structured components. `toss`
 * was the only one, which is exactly why it had been used for both.
 *
 * Picking a replacement: choose a reference that is verified, still legacy, and
 * not near the front of the adoption queue. `krds` is verified and already has
 * primary tasks, so it adopts soon; the English SEO set (`baemin`, `toss`,
 * `kakao`, `naver`, `karrot`) follows. `apple` and `line` sit outside both.
 */

/**
 * Brand colour ≠ canonical UI primary. `apple` declares `#000000` as its brand
 * colour and `#0071e3` as the interface primary — the separation these tests
 * exist to protect, and a wider gap than the reference it replaces.
 */
export const LEGACY_DISTINCT_BRAND_FIXTURE = "apple";

/**
 * Six or more structured components in frontmatter. `line` declares eight, over
 * five component types, so "prefers structured tokens over the prose inventory"
 * is a claim with something real behind it.
 */
export const LEGACY_COMPONENT_FIXTURE = "line";

/**
 * Any still-legacy reference, for contracts that only need one (the
 * `REFERENCE_AST_V2=off` payload, for instance). Shares `line` deliberately:
 * one fewer reference to re-check when the adoption queue moves.
 */
export const LEGACY_PAYLOAD_FIXTURE = "line";

/** Every id above, for the guard that keeps them honest. */
export const LEGACY_FIXTURES = [
  LEGACY_DISTINCT_BRAND_FIXTURE,
  LEGACY_COMPONENT_FIXTURE,
  LEGACY_PAYLOAD_FIXTURE,
] as const;

/**
 * What to do when the guard fails — written once, where it fires, so nobody has
 * to reconstruct the reasoning from a diff.
 */
export const LEGACY_FIXTURE_GUIDANCE =
  "This reference has been adopted into Core v2, so it can no longer stand in for the legacy "
  + "contract. Pick another verified, still-legacy reference with the property that fixture "
  + "names (distinct brand colour, or six-plus structured components), update it in "
  + "web/src/lib/references/legacy-fixtures.ts, and adjust the assertions that read its values. "
  + "Do not weaken the assertions to make the adopted reference fit — the legacy path still "
  + "serves every reference that has not been adopted yet.";
