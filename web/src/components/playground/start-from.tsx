"use client";

import { Paintbrush, FileSymlink, Dices } from "lucide-react";
import type { PlaygroundState } from "@/lib/playground/state";

/**
 * Base seed picker — 3 options. Randomize was promoted here from the
 * header because (a) it belongs conceptually with "how do I start" and
 * (b) Personality was removed, leaving a natural third slot.
 *
 * All three are buttons; the parent wires concrete handlers.
 */
export function StartFrom({
  state,
  onPickBlank,
  onOpenReferenceModal,
  onRandomize,
}: {
  state: PlaygroundState;
  onPickBlank: () => void;
  onOpenReferenceModal: () => void;
  onRandomize: () => void;
}) {
  const base = state.base;
  return (
    <div className="grid grid-cols-3 gap-1.5">
      <BaseCard
        icon={<Paintbrush className="h-4 w-4" />}
        title="Blank"
        subtitle="Start fresh"
        active={base.kind === "blank"}
        onClick={onPickBlank}
      />
      <BaseCard
        icon={<FileSymlink className="h-4 w-4" />}
        title="Reference"
        active={base.kind === "clone"}
        subtitle={
          base.kind === "clone"
            ? `cloned: ${(base as { refId: string }).refId}`
            : "clone a brand"
        }
        onClick={onOpenReferenceModal}
      />
      <BaseCard
        icon={<Dices className="h-4 w-4" />}
        title="Randomize"
        subtitle="roll the dice"
        onClick={onRandomize}
      />
    </div>
  );
}

function BaseCard({
  icon,
  title,
  subtitle,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 rounded-lg border p-2.5 text-center transition-all ${
        active
          ? "border-primary bg-primary/5"
          : "border-border/50 hover:border-foreground/30 hover:bg-accent/30"
      }`}
      aria-pressed={active}
    >
      <div className={active ? "text-primary" : "text-muted-foreground"}>
        {icon}
      </div>
      <div className="text-xs font-semibold">{title}</div>
      {subtitle && (
        <div className="max-w-full truncate text-[10px] leading-tight text-muted-foreground">
          {subtitle}
        </div>
      )}
    </button>
  );
}
