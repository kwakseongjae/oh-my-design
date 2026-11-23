/**
 * Where the published stills answer on this site, and what counts as an image store's address.
 *
 * Published pages never print the image store's address. They print our own path, SCREENS_IMG_PATH/<slug>/<file>,
 * and the route handler there (app/screens-img/[slug]/[file]/route.ts) fetches the still from the store, so the site
 * answers for every still: it sends `X-Robots-Tag: noindex, noimageindex` with it, answers only what the manifest
 * lists, and robots.txt disallows the path.
 */

/** Where the published stills answer on this site. */
export const SCREENS_IMG_PATH = "/screens-img";

/** The image store's origin and path prefix as the manifest records it. */
export const HTTPS_BASE = /^https:\/\/[a-z0-9.-]+(?::\d+)?(?:\/[A-Za-z0-9._~-]+)*$/i;
