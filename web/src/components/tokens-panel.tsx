"use client";
/**
 * Machine-readable design-token panel — renders the reconciled `tokens` block
 * (frontmatter, via the registry) as swatches/scale/components, with a one-click
 * DTCG tokens.json download. This is the surface that turns our token layer into
 * a visible, exportable artifact (the getdesign.md "wow" without rewriting prose).
 */
import { useState } from "react";
import type { RefEntry } from "@/data/registry.generated";

type Tokens = NonNullable<RefEntry["tokens"]>;

function toDTCG(t: Tokens) {
  const out: Record<string, unknown> = { $metadata: { source: t.source, extracted: t.extracted } };
  if (t.color) out.color = Object.fromEntries(Object.entries(t.color).map(([k, v]) => [k, { $value: v, $type: "color" }]));
  if (t.font) out.fontFamily = Object.fromEntries(Object.entries(t.font).map(([k, v]) => [k, { $value: v, $type: "fontFamily" }]));
  if (t.text) out.typography = Object.fromEntries(Object.entries(t.text).map(([k, v]) => [k, { $value: v, $type: "typography" }]));
  if (t.spacing) out.spacing = Array.isArray(t.spacing)
    ? Object.fromEntries(t.spacing.map((n, i) => [String(i), { $value: `${n}px`, $type: "dimension" }]))
    : Object.fromEntries(Object.entries(t.spacing).map(([k, v]) => [k, { $value: `${v}px`, $type: "dimension" }]));
  if (t.radius) out.radius = Object.fromEntries(Object.entries(t.radius).map(([k, v]) => [k, { $value: `${v}px`, $type: "dimension" }]));
  if (t.shadow) out.shadow = Object.fromEntries(Object.entries(t.shadow).map(([k, v]) => [k, { $value: v, $type: "shadow" }]));
  return out;
}

export function TokensPanel({ id, tokens }: { id: string; tokens: Tokens }) {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (label: string, text: string) => { navigator.clipboard?.writeText(text); setCopied(label); setTimeout(() => setCopied(null), 1200); };
  const download = () => {
    const blob = new Blob([JSON.stringify(toDTCG(tokens), null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `${id}-tokens.json`; a.click(); URL.revokeObjectURL(a.href);
  };
  const spacingPairs: [string, number][] = Array.isArray(tokens.spacing)
    ? tokens.spacing.map((n, i) => [String(n), n] as [string, number])
    : Object.entries(tokens.spacing ?? {});

  return (
    <section className="border-t border-border/40 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">Design Tokens</div>
          <div className="text-xs text-muted-foreground mt-1">
            machine-readable · <span className="font-mono">{tokens.source}</span>{tokens.extracted ? ` · ${tokens.extracted}` : ""}
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => copy("json", JSON.stringify(toDTCG(tokens), null, 2))} className="text-xs rounded-md px-3 py-1.5 ring-1 ring-border/50 hover:bg-foreground/5">{copied === "json" ? "Copied" : "Copy JSON"}</button>
          <button onClick={download} className="text-xs rounded-md px-3 py-1.5 bg-foreground text-background hover:opacity-90">Download tokens.json</button>
        </div>
      </div>

      {tokens.note && <p className="text-xs text-muted-foreground italic mb-6 max-w-2xl">{tokens.note}</p>}

      {/* Colors */}
      {tokens.color && (
        <div className="mb-8">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Color</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.entries(tokens.color).map(([name, hex]) => (
              <button key={name} onClick={() => copy(name, hex)} className="text-left group">
                <div className="h-14 rounded-lg ring-1 ring-border/30" style={{ background: hex }} />
                <div className="mt-1.5 text-xs font-medium truncate">{name}</div>
                <div className="text-[11px] font-mono text-muted-foreground">{copied === name ? "copied" : hex}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Type scale */}
      {tokens.text && (
        <div className="mb-8">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Typography{tokens.font?.sans ? ` · ${tokens.font.sans}` : ""}</div>
          <div className="space-y-2">
            {Object.entries(tokens.text).map(([name, t]) => (
              <div key={name} className="flex items-baseline gap-4 border-b border-border/20 pb-2">
                <span className="w-28 shrink-0 text-[11px] font-mono text-muted-foreground">{name}</span>
                <span className="truncate" style={{ fontSize: Math.min(t.size ?? 16, 40), fontWeight: t.weight ?? 400, lineHeight: t.lineHeight ?? 1.2, letterSpacing: t.tracking ? `${t.tracking}px` : undefined }}>Ag — {t.size ?? "?"}px / {t.weight ?? "?"}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-3 gap-8">
        {/* Spacing */}
        {spacingPairs.length > 0 && (
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Spacing</div>
            <div className="space-y-1.5">
              {spacingPairs.map(([k, v]) => (
                <div key={k} className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-mono text-muted-foreground">{k}</span>
                  <span className="h-3 bg-foreground/70 rounded-sm" style={{ width: Math.min(v, 96) }} />
                  <span className="font-mono text-muted-foreground">{v}px</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Radius */}
        {tokens.radius && (
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Radius</div>
            <div className="flex flex-wrap gap-3">
              {Object.entries(tokens.radius).map(([k, v]) => (
                <div key={k} className="text-center">
                  <div className="w-12 h-12 bg-foreground/10 ring-1 ring-border/40" style={{ borderRadius: Math.min(v, 24) }} />
                  <div className="text-[11px] font-mono text-muted-foreground mt-1">{k}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Shadow */}
        {tokens.shadow && (
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Elevation</div>
            <div className="flex flex-wrap gap-4">
              {Object.entries(tokens.shadow).map(([k, v]) => (
                <div key={k} className="text-center">
                  <div className="w-14 h-14 rounded-lg bg-background" style={{ boxShadow: /(inset|bg \+)/.test(v) ? undefined : v }} />
                  <div className="text-[11px] font-mono text-muted-foreground mt-1">{k}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Components */}
      {tokens.components && (
        <div className="mt-8">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Components</div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {Object.entries(tokens.components).map(([name, spec]) => (
              <div key={name} className="text-xs border-b border-border/15 pb-1.5">
                <span className="font-mono text-foreground">{name}</span>
                <span className="text-muted-foreground"> — {spec}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
