import Link from "next/link";
import { REFERENCE_COUNT, SKILL_COUNT } from "@/lib/catalog-count";
import { EN, KO, type Locale } from "./copy";
import {
  COUNTRY_COUNT,
  PREVIEW_LABEL_PX,
  TIER_COUNTS,
  getEvidenceExample,
  getHueWall,
  getTopBrands,
} from "./data";
import { schibsted } from "./fonts";
import { SearchBox } from "./search-box";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { TopAndPreview } from "./top-and-preview";

/**
 * The proof-sheet landing, shared by / (en) and /ko. Server component: only
 * the search box and the list/preview pair hydrate.
 *
 * First screen, in order: what the catalog is (headline), how each reference
 * is graded (provenance column — the differentiator), search, and the most
 * selected references with one live brand preview. Below: how it works, the
 * CLI and skills, and a hue wall that leads into the full catalog.
 */
export async function LandingPage({ locale }: { locale: Locale }) {
  const copy = locale === "ko" ? KO : EN;
  const top = await getTopBrands();
  const example = getEvidenceExample();
  const wall = getHueWall();

  const wrap = "mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12";

  return (
    <div
      data-omd-paper
      className={`${schibsted.variable} flex min-h-screen flex-col bg-paper text-ink ${locale === "ko" ? "font-kr [word-break:keep-all] [overflow-wrap:anywhere]" : "font-display"}`}
    >
      <SiteHeader copy={copy} />

      <main className="flex-1">
        <section className={`${wrap} pt-4 lg:pt-6`}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
            <div className="min-w-0">
              <p className="font-mono text-xs text-ink-2">{copy.eyebrow({ refs: REFERENCE_COUNT, countries: COUNTRY_COUNT })}</p>
              <h1 className={`mt-2 max-w-[18ch] text-[clamp(30px,3.7vw,54px)] font-black text-ink lg:max-w-none ${locale === "ko" ? "leading-[1.2] tracking-[-0.02em]" : "leading-[0.98] tracking-[-0.035em]"}`}>
                {copy.h1.before}
                <ProofMark>{TIER_COUNTS.verified}</ProofMark>
                {copy.h1.after}
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2 sm:hidden">{copy.ledeShort}</p>
              <p className="mt-3 hidden max-w-[78ch] text-[16px] leading-relaxed text-ink-2 sm:block">
                {copy.lede({ refs: REFERENCE_COUNT, verified: TIER_COUNTS.verified })}
              </p>
            </div>

            <aside aria-labelledby="tiers-heading" className="border-t border-proof-mark pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-1">
              <h2 id="tiers-heading" className="font-mono text-xs uppercase tracking-wide text-ink">{copy.tiers.heading}</h2>
              <dl className="mt-2 space-y-2 lg:mt-3 lg:space-y-3">
                <Tier n={TIER_COUNTS.verified} label={copy.tiers.verified.label} def={copy.tiers.verified.def} accent>
                  {example && (
                    <Link href={example.href} prefetch={false} className="mt-1.5 inline-block font-mono text-[11px] leading-snug text-proof underline underline-offset-2 hover:no-underline">
                      {copy.tiers.example(example)} →
                    </Link>
                  )}
                </Tier>
                <Tier n={TIER_COUNTS.partial} label={copy.tiers.partial.label} def={copy.tiers.partial.def} />
                <Tier n={TIER_COUNTS.legacy} label={copy.tiers.legacy.label} def={copy.tiers.legacy.def} />
              </dl>
            </aside>
          </div>

          <div className="mt-4 lg:mt-5">
            <SearchBox locale={locale} totalRefs={REFERENCE_COUNT} />
          </div>

          <div className="mt-4 pb-14 lg:mt-5">
            <TopAndPreview
              brands={top.brands}
              locale={locale}
              snapshotDate={top.snapshotDate}
              totalRefs={REFERENCE_COUNT}
              labelPx={PREVIEW_LABEL_PX}
            />
          </div>
        </section>

        <section aria-labelledby="how-heading" className="border-t border-ink">
          <div className={`${wrap} py-12 lg:py-16`}>
            <h2 id="how-heading" className="text-[clamp(26px,3vw,40px)] font-black tracking-[-0.03em]">{copy.how.heading}</h2>
            <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
              {copy.how.steps.map((s, i) => (
                <li key={s.title} className="border-t border-rule pt-4">
                  <span className="font-mono text-xs text-proof">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="cli-heading" className="border-t border-ink bg-paper-2">
          <div className={`${wrap} grid gap-10 py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-16`}>
            <div className="min-w-0">
              <h2 id="cli-heading" className="text-[clamp(26px,3vw,40px)] font-black leading-[1.05] tracking-[-0.03em]">{copy.cli.heading}</h2>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-2">{copy.cli.body(SKILL_COUNT)}</p>
              <p className="mt-6 border-y border-ink py-3">
                <code className="font-mono [overflow-wrap:anywhere] text-[15px] text-ink">{copy.cli.command}</code>
              </p>
              <Link href={copy.skillsHref} prefetch={false} className="mt-4 inline-block text-sm font-semibold text-ink underline underline-offset-4 hover:no-underline">
                {copy.cli.skillsLink} →
              </Link>
            </div>
            <ul className="grid min-w-0 gap-x-8 sm:grid-cols-2">
              {copy.cli.skills.map((s) => (
                <li key={s.name} className="border-t border-rule py-3">
                  <p className="font-mono text-sm font-medium text-ink">{s.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="wall-heading" className="border-t border-ink">
          <div className={`${wrap} py-12 lg:py-16`}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="wall-heading" className="text-[clamp(26px,3vw,40px)] font-black tracking-[-0.03em]">{copy.wall.heading}</h2>
                <p className="mt-2 text-[15px] text-ink-2">{copy.wall.body(wall.length)}</p>
              </div>
              <Link href="/design-systems" prefetch={false} className="text-sm font-semibold text-ink underline underline-offset-4 hover:no-underline">
                {copy.wall.link(REFERENCE_COUNT)} →
              </Link>
            </div>
            <Link
              href="/design-systems"
              prefetch={false}
              aria-label={copy.wall.link(REFERENCE_COUNT)}
              className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(18px,1fr))] gap-px border border-ink bg-ink [contain-intrinsic-size:auto_240px] [content-visibility:auto]"
            >
              {wall.map((w) => (
                <span key={w.id} title={w.name} className="aspect-square" style={{ background: w.hex }} />
              ))}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter copy={copy} />
    </div>
  );
}

/** Proof-reader's circle around a figure. The ring is a mark, not text, so it uses proof-mark. */
function ProofMark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[0.14em] -inset-y-[0.04em] -rotate-3 rounded-[50%] border-[2.5px] border-proof-mark"
      />
    </span>
  );
}

function Tier({
  n,
  label,
  def,
  accent = false,
  children,
}: {
  n: number;
  label: string;
  def: string;
  accent?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <dt className="flex items-baseline gap-2">
        <span className="text-[24px] font-bold leading-none lg:text-[28px] tracking-[-0.03em] text-ink tabular-nums">{n}</span>
        <span className={`font-mono text-xs ${accent ? "text-proof" : "text-ink"}`}>{label}</span>
      </dt>
      <dd className="mt-0.5 text-[13px] leading-snug text-ink-2 lg:mt-1">
        {def}
        {children && <span className="block">{children}</span>}
      </dd>
    </div>
  );
}
