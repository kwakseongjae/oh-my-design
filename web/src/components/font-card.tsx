/**
 * Font card — shows a font's name, license badge, source, and install CTA.
 * Used in both the builder Live Preview (preview.tsx) and the showcase
 * route (reference-preview.tsx).
 */

import type { FontInfo, FontLicense } from "@/lib/font-registry";

const LICENSE_STYLES: Record<FontLicense, { bg: string; color: string; label: string }> = {
  OFL:                  { bg: "rgba(16, 185, 129, 0.12)", color: "#047857", label: "Open · OFL" },
  "Apache 2.0":         { bg: "rgba(16, 185, 129, 0.12)", color: "#047857", label: "Open · Apache 2.0" },
  Proprietary:          { bg: "rgba(245, 158, 11, 0.12)", color: "#b45309", label: "Commercial" },
  "Brand-proprietary":  { bg: "rgba(239, 68, 68, 0.12)",  color: "#b91c1c", label: "Brand-only" },
  System:               { bg: "rgba(107, 114, 128, 0.12)", color: "#4b5563", label: "System" },
  Mixed:                { bg: "rgba(99, 102, 241, 0.12)", color: "#4338ca", label: "Mixed" },
};

const ROLE_LABELS: Record<string, string> = {
  primary: "Primary",
  mono: "Monospace",
  display: "Display",
  serif: "Serif",
  fallback: "Fallback",
  icon: "Icon",
};

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function FontCard({ font, role, fontFamilyForRender }: { font: FontInfo; role?: string; fontFamilyForRender?: string }) {
  const license = LICENSE_STYLES[font.license];
  return (
    <div className="rounded-xl bg-card p-4 ring-1 ring-border/40 flex flex-col gap-3 min-h-[160px]">
      {/* Role label */}
      {role && (
        <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">
          {ROLE_LABELS[role] ?? role}
        </div>
      )}
      {/* Name (system-ui — no brand-font rendering attempt; we just label what it IS) */}
      <div>
        <div
          className="text-xl font-semibold leading-tight"
          style={{ fontFamily: fontFamilyForRender ?? "system-ui, sans-serif" }}
          title={font.name}
        >
          {font.name}
        </div>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <span
            className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium"
            style={{ background: license.bg, color: license.color }}
          >
            {license.label}
          </span>
          {!font.installable && font.license === "System" && (
            <span className="text-[10px] text-muted-foreground">no install needed</span>
          )}
        </div>
      </div>

      {/* Notes */}
      {font.notes && (
        <div className="text-[11px] text-muted-foreground leading-snug flex-1">{font.notes}</div>
      )}

      {/* Source link / CTA */}
      {font.source ? (
        <a
          href={font.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-between gap-2 rounded-lg border border-border/60 px-3 py-2 text-xs font-medium transition-colors hover:border-foreground/30 hover:bg-accent ${
            font.installable ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          <span className="truncate">
            {font.installable ? "Install via " : "Source · "}
            {font.source.name}
          </span>
          <ExternalIcon />
        </a>
      ) : (
        <div className="text-[11px] text-muted-foreground italic">Not publicly distributed.</div>
      )}
    </div>
  );
}

export function FontStackGrid({ stack, fonts }: { stack: string; fonts: FontInfo[] }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline gap-2">
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Font Stack</div>
        <div className="text-[10px] text-muted-foreground/70">{fonts.length} font{fonts.length !== 1 ? "s" : ""} resolved · CSS fallback chain</div>
      </div>
      <div className="text-[11px] font-mono text-muted-foreground mb-4 break-all">{stack}</div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {fonts.map((f, i) => (
          <FontCard key={`${f.name}-${i}`} font={f} />
        ))}
      </div>
    </div>
  );
}
