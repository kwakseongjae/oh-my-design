#!/usr/bin/env node
/**
 * Refresh web/src/data/github-stars.json, the star pill's last-known count, from the GitHub API.
 * The site reads the live count first (lib/github-stars.server.ts) and falls back to this file when
 * the API fails (rate limit, network), so the pill keeps a real number. Run it by hand or from a
 * scheduled job; it never fails a build: on any error the file is left as it is.
 * Uses GITHUB_TOKEN when set (5,000 requests/hour instead of 60).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const file = fileURLToPath(new URL("../src/data/github-stars.json", import.meta.url));
const prev = JSON.parse(readFileSync(file, "utf8"));
try {
  const res = await fetch(`https://api.github.com/repos/${prev.repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "oh-my-design-web",
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
    },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const { stargazers_count: stars } = await res.json();
  if (typeof stars !== "number" || stars < 0) throw new Error("no stargazers_count");
  const next = { ...prev, stars, measured: new Date().toISOString().slice(0, 10) };
  writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  console.log(`github-stars: ${prev.stars} → ${stars} (${next.measured})`);
} catch (e) {
  console.warn(`github-stars: kept ${prev.stars} from ${prev.measured} (${e instanceof Error ? e.message : e})`);
}
