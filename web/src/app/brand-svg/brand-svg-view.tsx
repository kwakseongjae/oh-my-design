"use client";

/**
 * Brand-SVG gallery view. Renders the capture manifest (schema v3) as a filterable grid.
 * - Each "available" record holds one or more SVG *variants* (symbol / wordmark / combined),
 *   each with its own source+license provenance. The card defaults to the most icon-like
 *   variant (symbol) and lets the user toggle between variants, then copy / download the
 *   selected one.
 * - "source-only" records (no genuine SVG yet) show the official source + license terms.
 */

import { useMemo, useState } from "react";

type VariantType = "symbol" | "wordmark" | "combined";

export interface SvgVariant {
  ref: string;
  dark_bg?: boolean;
  source: string;
  source_url: string;
  license: string;
  license_note?: string;
  license_url?: string;
  attribution?: string;
  usage_note?: string;
  source_tier?: "official" | "fallback";
}

export interface BrandSvgRecord {
  id: string;
  name: string;
  country: string;
  status: "available" | "source-only";
  risk_tier: string;
  variants?: Partial<Record<VariantType, SvgVariant>>;
  default_variant?: VariantType | null;
  // source-only records carry provenance at the record level (no SVG):
  source?: string;
  source_url?: string;
  license?: string;
  license_note?: string;
  license_url?: string;
  usage_note?: string;
  source_tier?: "official" | "fallback";
  submitted_by?: string;
}
export interface BrandSvgManifest {
  count: number;
  counts: { available: number; source_only: number };
  records: BrandSvgRecord[];
}

const VARIANT_ORDER: VariantType[] = ["symbol", "combined", "wordmark"];
const VARIANT_LABEL: Record<VariantType, string> = { symbol: "Symbol", combined: "Lockup", wordmark: "Wordmark" };

const RISK_COLOR: Record<string, string> = {
  low: "bg-emerald-100 text-emerald-800",
  med: "bg-amber-100 text-amber-800",
  high: "bg-rose-100 text-rose-800",
};

function flag(country: string) {
  const map: Record<string, string> = { KR: "🇰🇷", TW: "🇹🇼", US: "🇺🇸", JP: "🇯🇵", CN: "🇨🇳", UK: "🇬🇧", DE: "🇩🇪", FR: "🇫🇷", IT: "🇮🇹" };
  return map[country] ?? country;
}

const SUBMIT_URL = "https://github.com/kwakseongjae/oh-my-design/issues/new?template=brand-svg-submit.yml";

/** Variants present on a record, in display order. */
function variantsOf(r: BrandSvgRecord): VariantType[] {
  if (!r.variants) return [];
  return VARIANT_ORDER.filter((t) => r.variants?.[t]);
}

function BrandCard({ r }: { r: BrandSvgRecord }) {
  const available = variantsOf(r);
  const initial = (r.default_variant && available.includes(r.default_variant) ? r.default_variant : available[0]) as VariantType | undefined;
  const [variant, setVariant] = useState<VariantType | undefined>(initial);
  const [copied, setCopied] = useState(false);

  const v = variant ? r.variants?.[variant] : undefined;
  const url = v ? `/${v.ref}` : null;

  async function copySvg() {
    if (!url) return;
    try {
      const text = await fetch(url).then((res) => res.text());
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.open(url, "_blank");
    }
  }
  async function downloadSvg() {
    if (!url) return;
    try {
      const blob = await fetch(url).then((res) => res.blob());
      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = `${r.id}${variant === "symbol" ? "" : `-${variant}`}.svg`;
      a.click();
      URL.revokeObjectURL(href);
    } catch {
      window.open(url, "_blank");
    }
  }

  // provenance to show: selected variant's, falling back to record-level (source-only)
  const prov = v ?? r;
  const sourceUrl = (v?.source_url ?? r.source_url) || "";
  const licenseUrl = (v?.license_url ?? r.license_url) || sourceUrl;

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-4">
      <div className={`flex h-20 items-center justify-center rounded-lg ${url && v?.dark_bg ? "bg-zinc-900" : ""}`}>
        {url ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={url} alt={`${r.name} ${variant}`} className="max-h-12 max-w-[70%] object-contain" loading="lazy" />
        ) : (
          <span className="text-3xl opacity-30">{flag(r.country)}</span>
        )}
      </div>

      {/* variant toggle (only if more than one) */}
      {available.length > 1 && (
        <div className="mt-2 flex gap-1 rounded-lg border border-border p-0.5">
          {available.map((t) => (
            <button
              key={t}
              onClick={() => { setVariant(t); setCopied(false); }}
              className={`flex-1 rounded-md px-1.5 py-1 text-[10px] font-medium transition-colors ${variant === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"}`}
            >
              {VARIANT_LABEL[t]}
            </button>
          ))}
        </div>
      )}

      <div className="mt-2 flex items-center justify-between">
        <span className="truncate text-sm font-medium">{r.name}</span>
        <span className="text-xs">{flag(r.country)}</span>
      </div>
      <div className="mt-1 flex flex-wrap gap-1">
        {prov.source_tier === "official" && <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800">official</span>}
        {prov.source && <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">{prov.source}</span>}
        {prov.license && <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">{prov.license}</span>}
        <span className={`rounded px-1.5 py-0.5 text-[10px] ${RISK_COLOR[r.risk_tier] ?? "bg-muted text-muted-foreground"}`}>{r.risk_tier}</span>
      </div>
      {prov.usage_note && (
        <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground" title={prov.usage_note}>{prov.usage_note}</p>
      )}
      {v?.attribution && (
        <p className="mt-0.5 truncate text-[10px] text-muted-foreground/70" title={v.attribution}>via {v.source} · {v.attribution}</p>
      )}
      <div className="mt-auto flex gap-1.5 pt-3">
        {url ? (
          <>
            <button onClick={copySvg} className="flex-1 rounded-lg border border-border bg-background px-2 py-1.5 text-xs font-medium hover:bg-accent">
              {copied ? "Copied ✓" : "Copy SVG"}
            </button>
            <button onClick={downloadSvg} className="rounded-lg border border-border bg-background px-2 py-1.5 text-xs hover:bg-accent" title="Download .svg">↓</button>
            {licenseUrl && (
              <a href={licenseUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-background px-2 py-1.5 text-xs hover:bg-accent" title="License / source">ⓘ</a>
            )}
          </>
        ) : (
          <a href={sourceUrl || licenseUrl || "#"} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-lg border border-border bg-background px-2 py-1.5 text-center text-xs font-medium hover:bg-accent">
            공식 소스 →
          </a>
        )}
      </div>
    </div>
  );
}

export function BrandSvgView({ manifest }: { manifest: BrandSvgManifest }) {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<"all" | "KR" | "TW">("all");
  const [onlySymbol, setOnlySymbol] = useState(false);

  const records = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return manifest.records.filter((r) => {
      if (region !== "all" && r.country !== region) return false;
      if (onlySymbol && !r.variants?.symbol) return false;
      if (needle && !`${r.name} ${r.id}`.toLowerCase().includes(needle)) return false;
      return true;
    });
  }, [manifest.records, q, region, onlySymbol]);

  const symbolCount = manifest.records.filter((r) => r.variants?.symbol).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-2xl font-bold tracking-tight">Brand SVG collection</h1>
          <a
            href={SUBMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:brightness-110"
          >
            + Submit a logo
          </a>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Brand logos with explicit <strong>source + license</strong> provenance. Every SVG is a
          genuine vector pulled from the brand&apos;s <strong>own site / CDN</strong> or from
          Wikimedia Commons (public-domain logos) — no third-party icon libraries, no tracing.
          Where a brand publishes a standalone <strong>symbol</strong>, the card defaults to it;
          toggle to the wordmark/lockup as needed. Missing a brand, or have its official SVG? <a href={SUBMIT_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Submit it</a>.
          All logos are the property of their respective owners — provided for identification only.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {manifest.count} brands · {symbolCount} with a standalone symbol
        </p>
      </header>

      {/* controls */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search brand…"
          className="h-9 w-48 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
        />
        {(["all", "KR", "TW"] as const).map((rg) => (
          <button
            key={rg}
            onClick={() => setRegion(rg)}
            className={`h-9 rounded-lg border px-3 text-sm transition-colors ${region === rg ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-accent"}`}
          >
            {rg === "all" ? "All" : `${flag(rg)} ${rg}`}
          </button>
        ))}
        <span className="mx-1 h-5 w-px bg-border" />
        <button
          onClick={() => setOnlySymbol((s) => !s)}
          className={`h-9 rounded-lg border px-3 text-sm transition-colors ${onlySymbol ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-accent"}`}
        >
          Has symbol
        </button>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {records.map((r) => <BrandCard key={r.id} r={r} />)}
      </div>
      {records.length === 0 && <p className="py-16 text-center text-sm text-muted-foreground">No matches.</p>}
    </div>
  );
}
