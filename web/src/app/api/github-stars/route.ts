import { NextResponse } from "next/server";

// Live star count for the nav badge. We proxy GitHub through our own route so
// the upstream call is cached in Next's data cache (revalidate: 1h) instead of
// being hit per-visitor — unauthenticated github.com is rate-limited to 60
// req/hr/IP, which a landing page would blow through instantly. An optional
// GITHUB_TOKEN lifts the ceiling but is not required.
const REPO = "kwakseongjae/oh-my-design";

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "oh-my-design-web",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      // Opt into the data cache (Next 16 no longer caches fetch by default).
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ stars: null }, { status: 200 });
    }

    const data = (await res.json()) as { stargazers_count?: unknown };
    const stars =
      typeof data.stargazers_count === "number" ? data.stargazers_count : null;

    return NextResponse.json(
      { stars },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    // Network/parse failure → null so the client just hides the badge.
    return NextResponse.json({ stars: null }, { status: 200 });
  }
}
