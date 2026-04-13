"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2 } from "lucide-react";
import { isLight } from "@/lib/core/color";
import { getLogoUrl, isGitHubLogo } from "@/lib/logos";
import type { RefListItem } from "@/app/builder/page";

export function ReferenceSelector({
  refs,
  onSelect,
  loading,
}: {
  refs: RefListItem[];
  onSelect: (id: string) => void;
  loading: boolean;
}) {
  const categories = [...new Set(refs.map((r) => r.category))];
  const [filter, setFilter] = useState("");
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const filtered = refs.filter((r) => {
    if (selectedCat && r.category !== selectedCat) return false;
    if (filter && !r.name.toLowerCase().includes(filter.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold tracking-tight">Choose a reference</h2>
        <p className="mt-2 text-muted-foreground">
          {refs.length} design systems from real companies. Pick one to start.
        </p>
      </motion.div>

      {/* Search + Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 flex flex-wrap items-center gap-2"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-9 rounded-lg border border-border/60 bg-card/50 pl-9 pr-3 text-sm outline-none backdrop-blur transition-colors focus:border-foreground/20 focus:bg-card"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedCat(null)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              !selectedCat
                ? "bg-primary text-primary-foreground shadow-sm"
                : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(selectedCat === cat ? null : cat)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                selectedCat === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-xl border bg-card px-6 py-4 shadow-lg">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            <span className="text-sm font-medium">Loading design system...</span>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((ref, i) => {
            const logoUrl = getLogoUrl(ref.id, isLight(ref.primaryColor) ? "000000" : "ffffff");
            return (
              <motion.button
                key={ref.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: Math.min(i * 0.02, 0.3) }}
                onClick={() => onSelect(ref.id)}
                disabled={loading}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card/30 text-left backdrop-blur transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 dark:border-white/10 dark:bg-card/50 dark:hover:border-white/20 dark:hover:shadow-white/5 disabled:opacity-50"
              >
                {/* Color area with logo */}
                <div
                  className="relative flex h-24 items-center justify-center border-b border-transparent dark:border-white/10"
                  style={{ background: ref.primaryColor }}
                >
                  {logoUrl && (
                    <img
                      src={logoUrl}
                      alt={ref.name}
                      className={`object-contain opacity-90 transition-all group-hover:opacity-100 group-hover:scale-110 ${
                        isGitHubLogo(ref.id)
                          ? "h-10 w-10 rounded-full ring-2 ring-white/20"
                          : "h-8 w-8"
                      }`}
                      loading="lazy"
                    />
                  )}
                  {/* Hex badge */}
                  <span className="absolute bottom-2 left-2 rounded bg-black/20 px-1.5 py-0.5 font-mono text-[9px] text-white/80 backdrop-blur-sm">
                    {ref.primaryColor}
                  </span>
                </div>

                {/* Info */}
                <div className="px-3 py-2.5">
                  <div className="text-sm font-medium leading-tight">{ref.name}</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">{ref.category}</div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && !loading && (
        <div className="flex flex-col items-center py-20 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <div className="text-muted-foreground">No references found</div>
        </div>
      )}
    </div>
  );
}
