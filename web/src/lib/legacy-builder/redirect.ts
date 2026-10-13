/**
 * Where an old /builder URL goes now that the builder is gone (owner decision
 * 2026-10-13, Q1 "complete removal"; docs/REDESIGN_DECISIONS_2026-10-01.md).
 *
 * Builder links were pasted into prompts and agent caches, so every shape that
 * ever existed must keep resolving:
 *
 *   /builder?ref=<known id>[&step=…&cfg=…&color=…]  → /design-systems/<id>#use
 *   /builder?ref=<unknown or malformed id>           → /design-systems
 *   /builder (no ref, or ?step=select / ?color=…)    → /design-systems
 *
 * `cfg` encoded builder customizations; there is nothing left to apply it to,
 * so it is dropped along with every other query parameter. `#use` is the
 * detail page's hand-off block (copy / download / install / first prompt) —
 * the closest thing to what a builder link used to promise. The fragment rides
 * in the Location header; browsers keep it across the redirect.
 *
 * Kept pure (the caller passes the id check) so the whole table is unit-tested
 * without a server: src/lib/legacy-builder/redirect.test.ts.
 */
import { REFERENCE_ID_RE } from "@/lib/kv";

export const CATALOG_PATH = "/design-systems";

export function resolveBuilderRedirect(
  params: URLSearchParams,
  isKnownReference: (id: string) => boolean,
): string {
  const ref = params.get("ref")?.trim();
  // The id discipline check comes first: it keeps anything that is not a plain
  // reference id (`../`, `%2F`, whitespace, …) out of the Location header.
  if (!ref || !REFERENCE_ID_RE.test(ref) || !isKnownReference(ref)) return CATALOG_PATH;
  return `${CATALOG_PATH}/${ref}#use`;
}
