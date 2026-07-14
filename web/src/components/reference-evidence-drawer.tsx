"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ExternalLink, ShieldCheck, ShieldAlert } from "lucide-react";
import type { ReferenceDetailAstContract } from "@/lib/references/detail-projection";
import { trackEvidenceToggle } from "@/lib/builder/analytics";

const STATUS_LABEL = {
  verified_v2: "Verified v2",
  partial: "Partial",
  legacy_snapshot: "Legacy snapshot",
} as const;

function sourceLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function readableClaimPath(path: string): string {
  return path
    .replace(/^tokens\./, "")
    .split(".")
    .map((part) => part.replace(/-/g, " "))
    .join(" · ");
}

export function ReferenceEvidenceDrawer({
  reference,
  contract,
}: {
  reference: string;
  contract?: ReferenceDetailAstContract;
}) {
  const [open, setOpen] = useState(false);
  const evidence = contract?.evidence ?? null;
  const quality = contract?.quality;
  const sourceById = useMemo(
    () => new Map(evidence?.sources.map((source) => [source.id, source]) ?? []),
    [evidence],
  );

  if (!contract || !quality) return null;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    trackEvidenceToggle({ reference, open: next });
  };

  return (
    <div className="shrink-0 border-b border-border/40 dark:border-border">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex min-h-9 w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50"
      >
        {quality.status === "verified_v2"
          ? <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
          : <ShieldAlert className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />}
        <span className="font-medium text-foreground">Evidence</span>
        <span className="rounded-4xl bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          {STATUS_LABEL[quality.status]}
        </span>
        <span className="ml-auto hidden truncate text-[10px] text-muted-foreground sm:block">
          {quality.evidenceClaimCount}/{quality.claimCount} claims
          {quality.verifiedAt ? ` · checked ${quality.verifiedAt}` : ""}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="max-h-[min(360px,45dvh)] overflow-auto bg-muted/20 px-3 py-3">
          <dl className="grid grid-cols-2 gap-2 text-[11px] sm:grid-cols-4">
            <div className="rounded-lg border border-border/40 bg-background px-2.5 py-2">
              <dt className="text-muted-foreground">Checked</dt>
              <dd className="mt-0.5 font-medium text-foreground">{evidence?.checkedAt ?? quality.verifiedAt ?? "Not recorded"}</dd>
            </div>
            <div className="rounded-lg border border-border/40 bg-background px-2.5 py-2">
              <dt className="text-muted-foreground">Claims</dt>
              <dd className="mt-0.5 font-medium text-foreground">{quality.evidenceClaimCount}/{quality.claimCount}</dd>
            </div>
            <div className="rounded-lg border border-border/40 bg-background px-2.5 py-2">
              <dt className="text-muted-foreground">Sources</dt>
              <dd className="mt-0.5 font-medium text-foreground">{quality.sourceCount}</dd>
            </div>
            <div className="rounded-lg border border-border/40 bg-background px-2.5 py-2">
              <dt className="text-muted-foreground">Conflicts</dt>
              <dd className="mt-0.5 font-medium text-foreground">{quality.conflictCount}</dd>
            </div>
          </dl>

          {evidence && evidence.claims.length > 0 ? (
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[11px] font-medium text-foreground">Claim-level sources</h3>
                <span className="text-[10px] text-muted-foreground">{evidence.surfaces.length} inspected surfaces</span>
              </div>
              <div className="divide-y divide-border/40 overflow-hidden rounded-lg border border-border/40 bg-background">
                {evidence.claims.map((claim) => {
                  const source = sourceById.get(claim.sourceId);
                  return (
                    <div key={claim.claimPath} className="grid gap-1 px-2.5 py-2 text-[10px] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-3">
                      <div className="min-w-0">
                        <div className="truncate font-mono text-foreground" title={claim.claimPath}>
                          {readableClaimPath(claim.claimPath)}
                        </div>
                        <div className="mt-0.5 text-muted-foreground">
                          {claim.method.replace(/-/g, " ")} · {claim.capturedAt} · {claim.confidence} confidence
                        </div>
                      </div>
                      {source ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-w-0 items-center gap-1 text-primary hover:underline hover:underline-offset-2"
                          title={source.url}
                        >
                          <span className="max-w-40 truncate">{sourceLabel(source.url)}</span>
                          <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                        </a>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="mt-3 rounded-lg border border-border/40 bg-background px-3 py-2.5 text-[11px] leading-relaxed text-muted-foreground">
              Claim-level evidence has not been published for this snapshot.
              {quality.reasonCodes.length > 0 ? ` Gaps: ${quality.reasonCodes.join(", ")}.` : ""}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
