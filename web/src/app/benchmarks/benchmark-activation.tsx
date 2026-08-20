"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Check, Copy, FileText } from "lucide-react";
import { trackInstallCopy } from "@/lib/activation/analytics";
import {
  BENCHMARK_EXPERIMENT_VERSION,
  trackBenchmarkHandoff,
  trackBenchmarkHandoffView,
} from "@/lib/benchmarks/analytics";
import { copyText } from "@/lib/clipboard";
import { INSTALL_CMD } from "@/components/install-cta";

type CopyStatus = "idle" | "copied" | "failed";

export function BenchmarkActivation() {
  const primaryActionRef = useRef<HTMLElement>(null);
  const viewed = useRef(false);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    const primaryAction = primaryActionRef.current;
    if (!primaryAction || viewed.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry || entry.intersectionRatio < 0.5 || viewed.current) return;
        viewed.current = true;
        trackBenchmarkHandoffView();
        observer.disconnect();
      },
      { threshold: [0.5] },
    );

    observer.observe(primaryAction);
    return () => observer.disconnect();
  }, []);

  async function copyInstaller(button: HTMLButtonElement) {
    const copied = await copyText(INSTALL_CMD, { restoreTarget: button });

    if (copied) {
      trackBenchmarkHandoff("install_copy", "copied");
      trackInstallCopy({
        surface: "benchmark",
        experimentVersion: BENCHMARK_EXPERIMENT_VERSION,
      });
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1600);
      return;
    }

    trackBenchmarkHandoff("install_copy", "failed");
    setCopyStatus("failed");
    window.setTimeout(() => setCopyStatus("idle"), 2400);
  }

  return (
    <section
      aria-labelledby="benchmark-next-title"
      className="border-t border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="max-w-xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-primary sm:text-xs">
              After the evidence
            </p>
            <h2
              id="benchmark-next-title"
              className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl"
            >
              Inspect first. Then continue in your own project.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              This result remains Internal. These actions let you inspect the
              workflow or start from a reference; they do not prove installation,
              resolved UI, or reuse.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[14px] border border-border bg-border md:grid-cols-3">
            <article
              ref={primaryActionRef}
              className="flex min-h-64 flex-col justify-between bg-background p-6"
            >
              <div>
                <Copy className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-7 font-medium">Install the local workflow</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Copy the exact command, then run it in your project terminal.
                </p>
                <pre
                  tabIndex={0}
                  aria-label="Terminal install command"
                  className="mt-4 overflow-x-auto rounded-lg bg-secondary px-3 py-2.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <code className="whitespace-nowrap">$ {INSTALL_CMD}</code>
                </pre>
              </div>
              <button
                type="button"
                onClick={(event) => copyInstaller(event.currentTarget)}
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 active:translate-y-px active:opacity-80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {copyStatus === "copied" ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                {copyStatus === "copied"
                  ? "Copied"
                  : copyStatus === "failed"
                    ? "Copy failed — retry"
                    : "Copy Terminal command"}
              </button>
            </article>

            <article className="flex min-h-64 flex-col justify-between bg-background p-6">
              <div>
                <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-7 font-medium">See a complete run</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Follow the six-step docs runbook before trying your own brief.
                </p>
              </div>
              <Link
                href="/docs/en/demo#runbook"
                onClick={() => trackBenchmarkHandoff("docs_demo", "navigate")}
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-foreground/25 hover:bg-secondary active:translate-y-px focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                Open live demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>

            <article className="flex min-h-64 flex-col justify-between bg-background p-6">
              <div>
                <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-7 font-medium">Choose a reference</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Open Builder, select a brand, and inspect its verified preview.
                </p>
              </div>
              <Link
                href="/builder"
                onClick={() => trackBenchmarkHandoff("builder", "navigate")}
                className="mt-6 inline-flex min-h-11 items-center justify-start gap-2 rounded-md px-1 text-sm font-medium text-primary underline decoration-primary/25 underline-offset-4 transition-colors hover:decoration-primary active:text-primary/75 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                Open Builder
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
        <span className="sr-only" role="status" aria-live="polite">
          {copyStatus === "copied"
            ? "Installer command copied"
            : copyStatus === "failed"
              ? "Installer command could not be copied"
              : ""}
        </span>
      </div>
    </section>
  );
}
