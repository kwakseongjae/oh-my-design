"use client";

/**
 * Reference picker for the Playground "Clone from reference" flow.
 *
 * Opens as a modal (not a route navigation) so the user's in-progress
 * Playground state isn't lost. On pick, calls `onPick(refId)` — parent is
 * responsible for fetching `/api/references/<id>` and seeding state.
 */

import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { getAllDesignSystems } from "@/lib/design-systems";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";

export function ReferencePickerModal({
  open,
  onOpenChange,
  onPick,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPick: (refId: string) => void;
}) {
  const [query, setQuery] = useState("");
  const all = useMemo(() => getAllDesignSystems(), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter(
      (ds) =>
        ds.refId.toLowerCase().includes(q) ||
        ds.name.toLowerCase().includes(q),
    );
  }, [all, query]);

  function handlePick(refId: string) {
    onPick(refId);
    onOpenChange(false);
    setQuery("");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-3xl gap-0 p-0 overflow-hidden max-h-[85vh] flex flex-col"
        showCloseButton
      >
        <div className="border-b border-border/40 px-5 py-4">
          <DialogTitle className="text-base font-semibold">
            Pick a reference
          </DialogTitle>
          <p className="mt-1 text-xs text-muted-foreground">
            Clone the primary color, radius, and heading weight from a verified
            design system. Mood, personas, and philosophy stay your own.
          </p>
        </div>
        <div className="border-b border-border/40 px-5 py-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${all.length} references…`}
              className="h-9 w-full rounded-lg border border-border/60 bg-background pl-9 pr-3 text-sm dark:border-border"
            />
          </div>
        </div>
        <div className="overflow-y-auto px-4 py-4">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-muted-foreground">
              No references match &quot;{query}&quot;.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {filtered.map((ds) => (
                <ReferenceCard
                  key={ds.refId}
                  refId={ds.refId}
                  name={ds.name}
                  category={ds.type}
                  onPick={handlePick}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ReferenceCard({
  refId,
  name,
  category,
  onPick,
}: {
  refId: string;
  name: string;
  category: "system" | "brand";
  onPick: (id: string) => void;
}) {
  const primaryUrl = getLogoUrl(refId, "111111");
  const fallbackUrl = getLogoFallbackUrl(refId);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const src = stage === 0 ? primaryUrl : stage === 1 ? fallbackUrl : null;
  const raster = isGitHubLogo(refId);

  return (
    <button
      type="button"
      onClick={() => onPick(refId)}
      className="group flex flex-col items-center gap-2 rounded-lg border border-border/50 bg-card/30 p-3 transition-all hover:border-foreground/30 hover:bg-accent/30 dark:border-border dark:bg-card/60"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted/60 ring-1 ring-border/50 dark:bg-muted/30 dark:ring-border">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={name}
            onError={() =>
              setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))
            }
            className={
              raster
                ? "h-6 w-6 rounded object-contain"
                : "h-5 w-5 object-contain dark:invert"
            }
            loading="lazy"
          />
        ) : (
          <span className="text-sm font-bold text-foreground/70">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="min-w-0 text-center">
        <div className="truncate text-xs font-semibold">{name}</div>
        <div className="truncate text-[10px] uppercase tracking-wider text-muted-foreground">
          {category === "system" ? "system" : "brand"}
        </div>
      </div>
    </button>
  );
}
