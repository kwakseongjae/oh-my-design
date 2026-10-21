/**
 * The repo's live GitHub star count for the header star pill, fetched on the server at
 * build time and revalidated hourly (ISR — the landing routes export `revalidate = 3600`).
 * Unauthenticated api.github.com allows 60 requests/hour/IP; one hourly fetch per route is
 * well inside that, and GITHUB_TOKEN lifts the ceiling when set. On any failure (network,
 * rate limit, odd payload) the pill shows the last count actually measured, from
 * src/data/github-stars.json (a real API reading with its date; refresh it with
 * scripts/refresh-github-stars.mjs). The owner asked for the number to always show
 * (2026-10-21); it is never invented, only possibly a little behind.
 */
import snapshot from "@/data/github-stars.json";

export const REPO = "kwakseongjae/oh-my-design";
export const REPO_URL = `https://github.com/${REPO}`;

/** The last measured count (src/data/github-stars.json), or null if that file has none. */
function lastKnown(): number | null {
  return typeof snapshot.stars === "number" && snapshot.stars >= 0 ? snapshot.stars : null;
}

export async function getRepoStars(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "oh-my-design-web",
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return lastKnown();
    const data = (await res.json()) as { stargazers_count?: unknown };
    return typeof data.stargazers_count === "number" && data.stargazers_count >= 0 ? data.stargazers_count : lastKnown();
  } catch {
    return lastKnown();
  }
}
