/**
 * The repo's live GitHub star count for the header star pill, fetched on the server at
 * build time and revalidated hourly (ISR — the landing routes export `revalidate = 3600`).
 * Unauthenticated api.github.com allows 60 requests/hour/IP; one hourly fetch per route is
 * well inside that, and GITHUB_TOKEN lifts the ceiling when set. Any failure (network,
 * rate limit, odd payload) returns null, and the pill then shows the icon and ★ with no
 * number. A number is never invented or hardcoded.
 */
export const REPO = "kwakseongjae/oh-my-design";
export const REPO_URL = `https://github.com/${REPO}`;

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
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: unknown };
    return typeof data.stargazers_count === "number" && data.stargazers_count >= 0 ? data.stargazers_count : null;
  } catch {
    return null;
  }
}
