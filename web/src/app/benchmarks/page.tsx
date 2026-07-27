import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleDashed,
  Clock3,
  FileCheck2,
  FlaskConical,
  Gauge,
  GitCompareArrows,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import benchmark from "@/data/ui-benchmark-public.generated.json";
import { BenchmarkActivation } from "./benchmark-activation";
import { BenchmarkMethodLink } from "./benchmark-method-link";
import { BenchmarkSourceLink } from "./benchmark-source-link";
import { BenchmarkTracker } from "./benchmark-tracker";

const SITE_URL = "https://oh-my-design.kr";
const REPOSITORY_URL = "https://github.com/kwakseongjae/oh-my-design";

export const metadata: Metadata = {
  title: "UI-Resolve Benchmark — internal evidence, methods, and failures",
  description:
    "Reproducible internal UI benchmark checkpoints from oh-my-design. See exact denominators, failed runs, uncertainty, objective gates, and the path to a verified public result.",
  alternates: { canonical: `${SITE_URL}/benchmarks` },
  openGraph: {
    title: "UI-Resolve Benchmark — evidence before rank",
    description:
      "Internal UI benchmark evidence with exact runs, failures, uncertainty, and publication gates. Not a global leaderboard.",
    url: `${SITE_URL}/benchmarks`,
    type: "website",
  },
};

function formatDuration(milliseconds: number): string {
  return `${(milliseconds / 60_000).toFixed(1)}m`;
}

function formatTokens(value: number): string {
  return `${Math.round(value / 100) / 10}k`;
}

function reportUrl(path: string): string {
  return `${REPOSITORY_URL}/blob/main/${path}`;
}

function MetricBar({
  label,
  passed,
  total,
  emphasized = false,
}: {
  label: string;
  passed: number;
  total: number;
  emphasized?: boolean;
}) {
  const percentage = (passed / total) * 100;

  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-4">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="font-mono text-xl font-medium tracking-tight">
          {passed}
          <span className="text-sm font-normal text-muted-foreground">/{total}</span>
        </span>
      </div>
      <div
        className="h-3 overflow-hidden rounded-full bg-secondary"
        role="img"
        aria-label={`${label}: ${passed} of ${total} runs UI-Resolved`}
      >
        <div
          className={emphasized ? "h-full rounded-full bg-primary" : "h-full rounded-full bg-foreground/35"}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function BenchmarksPage() {
  const harness = benchmark.harnessCheckpoint;
  const locale = benchmark.localeCheckpoint;
  const confidence = harness.uiResolved.confidence95;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BenchmarkTracker />
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg pr-2 text-sm font-medium transition-colors hover:text-primary active:text-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            oh-my-design
          </Link>
          <nav aria-label="Benchmark links" className="flex items-center gap-1 text-sm">
            <BenchmarkMethodLink />
            <a
              href={REPOSITORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:bg-secondary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] lg:items-end">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5 font-mono text-sm font-medium uppercase tracking-[0.14em] text-primary sm:text-xs">
                  <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
                  {benchmark.publication.label}
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                  Not a leaderboard
                </span>
              </div>
              <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
                UI-Resolve benchmark
              </p>
              <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl">
                {benchmark.publication.headline}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {benchmark.publication.summary} We publish the denominator, the
                loss, and the uncertainty beside every improvement.
              </p>
            </div>

            <div className="rounded-[14px] border border-border bg-card p-5">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                Current publication state
              </p>
              <div className="mt-5 grid grid-cols-3 gap-1" aria-label="Publication maturity">
                {["Internal", "Preview", "Verified"].map((status, index) => (
                  <div
                    key={status}
                    className={
                      index === 0
                        ? "rounded-lg bg-primary px-2 py-3 text-center text-xs font-medium text-primary-foreground"
                        : "rounded-lg bg-secondary px-2 py-3 text-center text-xs font-medium text-muted-foreground"
                    }
                  >
                    {status}
                  </div>
                ))}
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border pt-5 text-sm">
                <div>
                  <dt className="text-muted-foreground">Evidence date</dt>
                  <dd className="mt-1 font-mono font-medium">{benchmark.dataAsOf}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Harness matrix</dt>
                  <dd className="mt-1 font-mono font-medium">
                    {harness.taskCount} tasks × {harness.runsPerTask} trials
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20" aria-labelledby="tracks-title">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-primary sm:text-xs">
              Separate questions
            </p>
            <h2 id="tracks-title" className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              Three tracks. No blended winner.
            </h2>
          </div>

          <div className="mt-9 grid overflow-hidden rounded-[14px] border border-border bg-card lg:grid-cols-3">
            {benchmark.tracks.map((track, index) => (
              <article
                key={track.id}
                className={`flex min-h-56 flex-col justify-between p-6 sm:p-7 ${
                  index > 0 ? "border-t border-border lg:border-l lg:border-t-0" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <span
                      className={
                        track.publicResultAvailable
                          ? "rounded-full bg-primary/10 px-2.5 py-1 text-sm font-medium uppercase tracking-wider text-primary sm:text-xs"
                          : "rounded-full bg-secondary px-2.5 py-1 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-xs"
                      }
                    >
                      {track.publicResultAvailable ? "Evidence below" : "Not published"}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight">{track.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{track.question}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-card" aria-labelledby="checkpoint-title">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-primary sm:text-xs">
                  Harness Track · {harness.status}
                </p>
                <h2 id="checkpoint-title" className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  The bounded harness resolved more runs. The interval still includes zero.
                </h2>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
                <span>{harness.model}</span>
                <span>{harness.budget}</span>
                <span>{harness.completedCells}/{harness.scheduledCells} complete</span>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)]">
              <div className="rounded-[14px] border border-border bg-background p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                      UI-Resolved@1
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">All critical product gates must pass.</p>
                  </div>
                  <GitCompareArrows className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="mt-8 space-y-8">
                  <MetricBar {...harness.uiResolved.baseline} />
                  <MetricBar {...harness.uiResolved.candidate} emphasized />
                </div>
                <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                  <div>
                    <div className="font-mono text-2xl font-medium">
                      +{harness.uiResolved.liftPercentagePoints.toFixed(2)}
                      <span className="text-sm text-muted-foreground">pp</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Observed resolved-rate lift</p>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-medium">
                      {harness.pairedObjective.wins}/{harness.pairedObjective.ties}/{harness.pairedObjective.losses}
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Paired win / tie / loss</p>
                  </div>
                  <div>
                    <div className="font-mono text-lg font-medium">
                      {confidence[0].toFixed(2)} → {confidence[1].toFixed(0)}pp
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">95% interval; includes zero</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <article className="rounded-[14px] border border-border bg-background p-6">
                  <Clock3 className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <p className="mt-8 font-mono text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                    Median wall time
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-medium">
                      {formatDuration(harness.efficiency.candidateMedianWallMs)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      vs {formatDuration(harness.efficiency.baselineMedianWallMs)}
                    </span>
                  </div>
                </article>
                <article className="rounded-[14px] border border-border bg-background p-6">
                  <Gauge className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <p className="mt-8 font-mono text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                    Median uncached tokens
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-medium">
                      {formatTokens(harness.efficiency.candidateMedianTokens)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      vs {formatTokens(harness.efficiency.baselineMedianTokens)}
                    </span>
                  </div>
                </article>
              </div>
            </div>

            <article className="mt-6 grid gap-6 rounded-[14px] border border-destructive/25 bg-destructive/[0.035] p-6 sm:p-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <TriangleAlert className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-destructive sm:text-xs">
                  The loss is part of the result
                </p>
                <h3 className="mt-2 text-xl font-medium">
                  {harness.knownLoss.cellId} · {harness.knownLoss.score}/{harness.knownLoss.max}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  The harness lost one pair on {harness.knownLoss.failedChecks.join(" and ")}.
                  Task, state, responsive, accessibility, and evidence gates still passed.
                </p>
              </div>
              <div className="font-mono text-sm font-medium text-destructive lg:text-right">1 candidate loss</div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20" aria-labelledby="recovery-title">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-primary sm:text-xs">
                Recovery record
              </p>
              <h2 id="recovery-title" className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                We did not turn a failed run green.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                The original accessibility failure remains 79/85. We changed the
                static contract, tested a focused control, then required a fresh
                model run to prove the recovery.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <dt className="text-xs text-muted-foreground">
                    Fresh recovery · {locale.completedCells} candidate cell
                  </dt>
                  <dd className="mt-1 font-mono text-2xl font-medium">
                    {locale.score}/{locale.max}
                  </dd>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <dt className="text-xs text-muted-foreground">Axe serious / critical</dt>
                  <dd className="mt-1 font-mono text-2xl font-medium">{locale.axeSeriousOrCritical}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {locale.limits.join(" · ")}.
              </p>
            </div>

            <ol className="overflow-hidden rounded-[14px] border border-border bg-card">
              {benchmark.learningTimeline.map((item, index) => (
                <li
                  key={item.version}
                  className={`grid gap-4 p-6 sm:grid-cols-[92px_minmax(0,1fr)_auto] sm:items-start sm:p-7 ${
                    index > 0 ? "border-t border-border" : ""
                  }`}
                >
                  <span className="font-mono text-xs font-medium text-primary">{item.version}</span>
                  <div>
                    <h3 className="font-medium">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                  </div>
                  <span
                    className={
                      item.state === "failed"
                        ? "w-fit rounded-full bg-destructive/10 px-2.5 py-1 font-mono text-sm font-medium uppercase text-foreground sm:text-xs"
                        : item.state === "passed"
                          ? "w-fit rounded-full bg-primary/10 px-2.5 py-1 font-mono text-sm font-medium uppercase text-primary sm:text-xs"
                          : "w-fit rounded-full bg-secondary px-2.5 py-1 font-mono text-sm font-medium uppercase text-muted-foreground sm:text-xs"
                    }
                  >
                    {item.score}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-border bg-card" aria-labelledby="gates-title">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="max-w-3xl">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-primary sm:text-xs">
                What 85 means
              </p>
              <h2 id="gates-title" className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                Polish cannot average away a broken journey.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                UI-Resolved requires every critical product gate. A higher visual
                score cannot compensate for a failed action, hidden overflow,
                inaccessible control, or invented fact.
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[14px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {benchmark.objectiveGates.map((gate, index) => (
                <article
                  key={gate.label}
                  className="min-h-48 bg-background p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Check className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-medium">{gate.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{gate.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="scroll-mt-6" aria-labelledby="method-title">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]">
              <div>
                <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-primary sm:text-xs">
                  Publication ladder
                </p>
                <h2 id="method-title" className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  Internal is a stage, not a softer word for verified.
                </h2>
                <div className="mt-9 overflow-hidden rounded-[14px] border border-border bg-card">
                  {[
                    {
                      icon: FlaskConical,
                      name: "Internal",
                      state: "Current",
                      detail: "Runner and task calibration. May change; no public rank.",
                    },
                    {
                      icon: CircleDashed,
                      name: "Preview",
                      state: "Next",
                      detail: "Reproducible packages and examples, but limited tasks, trials, or review.",
                    },
                    {
                      icon: ShieldCheck,
                      name: "Verified",
                      state: "Gate",
                      detail: `${benchmark.publication.verifiedPublicMinimum.tasks}+ tasks × ${benchmark.publication.verifiedPublicMinimum.runsPerTask} runs, ${benchmark.publication.verifiedPublicMinimum.practitionerReviewers}+ practitioners, and independent audit.`,
                    },
                  ].map((step, index) => (
                    <article
                      key={step.name}
                      className={`grid gap-4 p-6 sm:grid-cols-[44px_minmax(0,1fr)_auto] sm:items-center ${
                        index > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                        <step.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-medium">{step.name}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.detail}</p>
                      </div>
                      <span
                        className={
                          index === 0
                            ? "w-fit rounded-full bg-primary px-2.5 py-1 font-mono text-sm font-medium uppercase text-primary-foreground sm:text-xs"
                            : "w-fit rounded-full bg-secondary px-2.5 py-1 font-mono text-sm font-medium uppercase text-muted-foreground sm:text-xs"
                        }
                      >
                        {step.state}
                      </span>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="rounded-[14px] border border-border bg-card p-6 sm:p-8" aria-labelledby="sources-title">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <FileCheck2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 id="sources-title" className="mt-7 text-2xl font-medium tracking-tight">
                  Inspect the source, not just the chart.
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Public values are generated from committed benchmark reports.
                  CI rejects a stale derived file or a changed denominator.
                </p>
                <div className="mt-7 grid gap-3">
                  <BenchmarkSourceLink
                    href={reportUrl(benchmark.sourcePaths.harnessSummary)}
                    target="harness_summary"
                  >
                    Harness summary
                  </BenchmarkSourceLink>
                  <BenchmarkSourceLink
                    href={reportUrl(benchmark.sourcePaths.harnessAggregate)}
                    target="aggregate_statistics"
                  >
                    Aggregate statistics
                  </BenchmarkSourceLink>
                  <BenchmarkSourceLink
                    href={reportUrl(benchmark.sourcePaths.localeFailure)}
                    target="failed_run"
                  >
                    Visible failed run
                  </BenchmarkSourceLink>
                  <BenchmarkSourceLink
                    href={reportUrl(benchmark.sourcePaths.focusCalibration)}
                    target="focus_calibration"
                  >
                    Focus contract calibration
                  </BenchmarkSourceLink>
                  <BenchmarkSourceLink
                    href={reportUrl(benchmark.sourcePaths.localeRecovery)}
                    target="fresh_recovery"
                  >
                    Fresh recovery
                  </BenchmarkSourceLink>
                  <BenchmarkSourceLink
                    href={`${REPOSITORY_URL}/blob/main/benchmarks/ui-resolve-bench/PROTOCOL.md`}
                    target="protocol"
                    protocol
                  >
                    Full methodology
                  </BenchmarkSourceLink>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <BenchmarkActivation />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>UI-Resolve · evidence before rank</p>
          <p className="font-mono text-xs">
            {harness.modelId} · {harness.budget} · data {benchmark.dataAsOf}
          </p>
        </div>
      </footer>
    </div>
  );
}
