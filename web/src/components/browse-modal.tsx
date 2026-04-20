"use client";

/**
 * Browse dropdown — compact menu launched from the center of the home nav.
 * Currently a single entry point (Design Systems directory); extra
 * categories can be slotted in as more button rows without changing
 * callers.
 */

import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Compass, ArrowRight } from "lucide-react";
import { getAllDesignSystems } from "@/lib/design-systems";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";
import { event } from "@/lib/gtag";

export function BrowseModal({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const total = getAllDesignSystems().length;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        onClick={() => event("browse_open", {})}
        className={
          className ??
          "inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 sm:px-4 h-9 sm:h-10 text-xs sm:text-sm font-medium text-foreground/80 backdrop-blur transition-colors hover:bg-accent hover:text-foreground dark:border-border dark:bg-card/60"
        }
      >
        <Compass className="h-4 w-4" />
        Browse
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-md gap-0 p-0 overflow-hidden"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Browse OMD resources</DialogTitle>

        <div className="p-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3 px-1">
            Explore
          </div>
          <Link
            href="/design-systems"
            onClick={() => {
              event("browse_ds_directory", {});
              setOpen(false);
            }}
            className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/40 p-4 transition-colors hover:border-foreground/20 hover:bg-accent dark:border-border dark:bg-card/60"
          >
            <StackedLogoChip />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-foreground">Design Systems</div>
              <div className="text-xs text-muted-foreground leading-snug mt-0.5">
                {total} references — browse, preview, and export.
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** Three overlapping brand logos (Toss, Anthropic, Vercel) as a visual
 *  hint that the directory covers a mix of companies. Uses the same
 *  getLogoUrl pipeline as the builder Reference step. */
function StackedLogoChip() {
  const picks: { id: string; color: string; bg: string }[] = [
    { id: "toss", color: "ffffff", bg: "#3182f6" },
    { id: "claude", color: "ffffff", bg: "#d97706" },
    { id: "vercel", color: "ffffff", bg: "#000000" },
  ];
  return (
    <div className="flex items-center shrink-0 pl-1">
      {picks.map((p, i) => {
        const raster = isGitHubLogo(p.id);
        const url = getLogoUrl(p.id, p.color) ?? getLogoFallbackUrl(p.id);
        return (
          <div
            key={p.id}
            className={`flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-background shadow-sm ${i > 0 ? "-ml-3" : ""}`}
            style={{ background: p.bg, zIndex: picks.length - i }}
          >
            {url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={url}
                alt={p.id}
                loading="lazy"
                className={raster ? "h-5 w-5 rounded object-contain" : "h-4 w-4 object-contain"}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
