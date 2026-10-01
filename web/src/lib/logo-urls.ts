// Client-safe logo URL helpers. Pure functions over a small descriptor, so a
// client component can render a logo without importing the 2 MB registry — the
// server (or an API route) resolves the descriptor once with getLogoRef(id) in
// lib/logos.ts and passes it down as a prop.
//
// 1. Simple Icons CDN (SVG, supports color): https://cdn.simpleicons.org/{slug}/{color}
// 2. GitHub org avatars (PNG, always works):  https://github.com/{org}.png?size=64
// 3. Favicon: direct URL stored in slug (preferred), or Google's favicon proxy fallback.

export interface LogoRef {
  readonly id: string;
  readonly type: "favicon" | "simpleicons" | "github";
  readonly slug: string;
  readonly homepage: string;
}

export function logoUrl(ref: LogoRef | null | undefined, color?: string): string | null {
  if (!ref) return null;
  const { type, slug } = ref;
  if (type === "github") return `https://github.com/${slug}.png?size=64`;
  if (type === "favicon") return slug;
  // simpleicons
  const c = color ? color.replace("#", "") : "white";
  return `https://cdn.simpleicons.org/${slug}/${c}`;
}

/** Best-guess fallback favicon — Google's proxy, derived from the homepage host. */
export function logoFallbackUrl(ref: LogoRef | null | undefined): string | null {
  if (!ref) return null;
  let domain: string;
  try {
    domain = new URL(ref.homepage).hostname.replace(/^www\./, "");
  } catch {
    domain = `${ref.id}.com`;
  }
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
}

/** Treat github + favicon logos as needing the fallback mShots/proxy path. */
export function isRasterLogo(ref: LogoRef | null | undefined): boolean {
  const t = ref?.type;
  return t === "github" || t === "favicon";
}
