/**
 * The one rule for "is this manifest published, and where are its stills", with no imports, so next.config.ts (loaded
 * outside the tsconfig path aliases) can use it as well as lib/screens/public.server.ts.
 *
 * Published pages never print the image store's address. They print our own path, SCREENS_IMG_PATH/<slug>/<file>,
 * and next.config.ts rewrites that path to the store, so the site answers for every still: it sends
 * `X-Robots-Tag: noindex, noimageindex` with it and robots.txt disallows it.
 */

/** Where the published stills answer on this site. */
export const SCREENS_IMG_PATH = "/screens-img";

/** The image store's origin and path prefix as the manifest records it. */
export const HTTPS_BASE = /^https:\/\/[a-z0-9.-]+(?::\d+)?(?:\/[A-Za-z0-9._~-]+)*$/i;

/** The store base of a manifest that lists at least one service, or null: the shut state. */
export function storeBase(raw: unknown): string | null {
  if (!raw || typeof raw !== "object") return null;
  const m = raw as { base?: unknown; services?: unknown };
  const base = typeof m.base === "string" ? m.base.trim().replace(/\/+$/, "") : "";
  return HTTPS_BASE.test(base) && Array.isArray(m.services) && m.services.length > 0 ? base : null;
}
