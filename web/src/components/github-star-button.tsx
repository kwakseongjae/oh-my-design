"use client";

import { useGithubStars, formatStars } from "@/lib/use-github-stars";
import { cn } from "@/lib/utils";
import { GITHUB_MARK, STAR_MARK } from "@/components/brand-a/copy/r11-chrome";

const REPO_URL = "https://github.com/kwakseongjae/oh-my-design";

/**
 * GitHub star pill for app headers outside the brand-a chrome, kept in step with the header's
 * StarPill (round 11 #4/#15): GitHub's official Invertocat, the count in the regular weight and
 * a small grey star (Primer `star-fill-16`) — no yellow. The count is shared with the nav via the
 * module-cached useGithubStars hook (one fetch total) and is hidden when the fetch fails.
 */
export function GithubStarButton({
  className = "",
  variant = "pill",
}: {
  className?: string;
  variant?: "pill" | "control";
}) {
  const stars = useGithubStars();

  return (
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={stars != null ? `GitHub — ${formatStars(stars)} stars` : "GitHub"}
      className={cn(
        "inline-flex items-center gap-2 border text-xs font-normal text-foreground transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        variant === "control"
          ? "h-9 rounded-lg border-border/70 bg-background px-3 hover:border-foreground/20 hover:bg-muted/60"
          : "h-8 rounded-full border-border/60 bg-card/50 px-3 hover:bg-accent",
        className,
      )}
    >
      <svg viewBox={GITHUB_MARK.viewBox} fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true" focusable="false">
        <path d={GITHUB_MARK.d} />
      </svg>
      <svg viewBox={STAR_MARK.viewBox} fill="currentColor" className="h-3 w-3 shrink-0 text-[var(--sq-n500)]" aria-hidden="true" focusable="false">
        <path d={STAR_MARK.d} />
      </svg>
      {stars != null && <span className="tabular-nums">{formatStars(stars)}</span>}
    </a>
  );
}
