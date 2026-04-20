"use client";

import { useState, type ReactNode } from "react";
import { Edit3 } from "lucide-react";
import { MobileDrawer } from "./mobile-drawer";

/**
 * Playground layout shell — 2-col on desktop (controls left / preview right),
 * preview-full with FAB-triggered drawer on mobile. Accepts controls and
 * preview as slots so the orchestrator stays in playground-view.tsx.
 */
export function PlaygroundLayout({
  controls,
  preview,
}: {
  controls: ReactNode;
  preview: ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Desktop layout */}
      <div className="mx-auto grid max-w-7xl gap-0 px-4 py-4 md:grid-cols-[380px_minmax(0,1fr)] md:gap-6 md:px-6 md:py-6 lg:grid-cols-[420px_minmax(0,1fr)]">
        <aside className="hidden space-y-3 md:block md:max-h-[calc(100vh-5.5rem)] md:overflow-y-auto md:pr-2">
          {controls}
        </aside>
        <main className="md:sticky md:top-[calc(3.5rem+1.5rem)] md:max-h-[calc(100vh-5.5rem)] md:overflow-y-auto">
          {preview}
        </main>
      </div>

      {/* Mobile FAB */}
      <button
        type="button"
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 md:hidden"
        aria-label="Open Playground controls"
      >
        <Edit3 className="h-4 w-4" />
        Edit
      </button>

      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="space-y-3">{controls}</div>
      </MobileDrawer>
    </>
  );
}
