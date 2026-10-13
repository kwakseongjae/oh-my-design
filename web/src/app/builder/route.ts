/**
 * /builder — retired 2026-10-13 (owner decision Q1, complete removal). Only the
 * redirect remains, because builder links live on inside prompts users pasted
 * into their agents. The table is in @/lib/legacy-builder/redirect.
 *
 * A Route Handler rather than a next.config redirect: an unknown ref must go to
 * the catalog instead of a 404 detail page, and config redirects cannot check
 * the id against the registry. The registry import stays on the server.
 */
import type { NextRequest } from "next/server";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { resolveBuilderRedirect } from "@/lib/legacy-builder/redirect";

const isKnownReference = (id: string) => Object.hasOwn(REGISTRY_BY_ID, id);

export function GET(request: NextRequest) {
  const location = resolveBuilderRedirect(request.nextUrl.searchParams, isKnownReference);
  // A relative Location keeps the host the request came in on (preview
  // deployments, the blog host) and carries the #use fragment unchanged.
  return new Response(null, {
    status: 308,
    headers: { Location: location },
  });
}

export const HEAD = GET;
