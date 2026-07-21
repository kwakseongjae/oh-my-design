"use client";

import { Star } from "lucide-react";
import { useGithubStars, formatStars } from "@/lib/use-github-stars";
import { cn } from "@/lib/utils";

const REPO_URL = "https://github.com/kwakseongjae/oh-my-design";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.54 0-.27-.01-1.15-.02-2.09-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.94.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.44.1-3 0 0 .95-.3 3.11 1.16.9-.25 1.87-.38 2.83-.38s1.93.13 2.83.38c2.16-1.46 3.11-1.16 3.11-1.16.6 1.56.22 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.3-5.19 5.58.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.65.78.54 4.5-1.5 7.75-5.75 7.75-10.77C23.34 5.57 18.27.5 12 .5z" />
    </svg>
  );
}

/**
 * Theme-aware GitHub star pill for the app headers (builder, playground, …) so
 * the GitHub link + live star count stays present as the user moves between
 * surfaces. Mirrors the dark landing-nav pill's [icon · count · ★] layout but
 * uses theme tokens so it reads in both light and dark. The count is shared
 * with the nav via the module-cached useGithubStars hook (one fetch total).
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
        "inline-flex items-center gap-2 border text-xs font-medium text-foreground/80 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        variant === "control"
          ? "h-9 rounded-lg border-border/70 bg-background px-3 hover:border-foreground/20 hover:bg-muted/60"
          : "h-8 rounded-full border-border/60 bg-card/50 px-3 hover:bg-accent hover:text-foreground dark:border-border dark:bg-card/60",
        className,
      )}
    >
      <GithubMark className="h-4 w-4 shrink-0" />
      {stars != null && (
        <span className="font-semibold tabular-nums">{formatStars(stars)}</span>
      )}
      <Star className="h-3.5 w-3.5 shrink-0" fill="#facc15" style={{ color: "#facc15" }} />
    </a>
  );
}
