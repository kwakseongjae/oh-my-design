/**
 * /playground route shell.
 *
 * Server component — parses the query string server-side so the initial HTML
 * already carries the seeded state (no client-side flash). Hands off to
 * <PlaygroundView> for the interactive orchestration.
 *
 * Supported query params:
 *   ?c=<compact>       Full state (LZ-string compressed) — share link
 *   ?from=<TypeCode>   Seed from Design Personality quiz result
 *   ?base=<refId>      Seed by cloning an existing reference
 *
 * Parameters take precedence left-to-right: c > from > base > blank.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaygroundView } from "./playground-view";
import { DEFAULT_STATE } from "@/lib/playground/defaults";
import { decodeState } from "@/lib/playground/codec";
import { seedFromTypeCode } from "@/lib/playground/rules/personality";
import type { PlaygroundState } from "@/lib/playground/state";

/**
 * Access gate: /playground is intentionally dev-only for now. In preview and
 * production (Vercel sets NODE_ENV=production for both), the route returns
 * 404 so the feature stays out of SEO, shared links, and casual discovery
 * until the UX settles. Flip this when we're ready to ship publicly.
 */
const IS_DEV = process.env.NODE_ENV !== "production";

type SearchParams = Promise<{
  c?: string;
  from?: string;
  base?: string;
}>;

export const metadata: Metadata = IS_DEV
  ? {
      title: "Playground — oh-my-design",
      description:
        "Design your own DS by selection. Pick a mood, color, density, radius, weight, motion, voice, and personas — export an OmD v0.1 DESIGN.md. No AI calls.",
      robots: { index: false, follow: false },
    }
  : { title: "Not Found", robots: { index: false, follow: false } };

function buildInitialState(params: {
  c?: string;
  from?: string;
  base?: string;
}): { state: PlaygroundState; source: "shared-link" | "personality" | "clone" | "blank" } {
  if (params.c) {
    const decoded = decodeState(params.c);
    if (decoded) return { state: decoded, source: "shared-link" };
  }
  if (params.from) {
    const seed = seedFromTypeCode(params.from);
    if (seed) {
      return {
        state: { ...DEFAULT_STATE, ...seed } as PlaygroundState,
        source: "personality",
      };
    }
  }
  if (params.base) {
    // Clone seed is completed client-side (needs /api/references/<id>).
    // We flag the base and let PlaygroundView do the fetch.
    return {
      state: { ...DEFAULT_STATE, base: { kind: "clone", refId: params.base } },
      source: "clone",
    };
  }
  return { state: DEFAULT_STATE, source: "blank" };
}

export default async function PlaygroundPage({ searchParams }: { searchParams: SearchParams }) {
  if (!IS_DEV) notFound();
  const params = await searchParams;
  const { state, source } = buildInitialState(params);
  return <PlaygroundView initialState={state} seedSource={source} />;
}
