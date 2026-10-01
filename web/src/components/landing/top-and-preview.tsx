"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { EN, KO, type Locale } from "./copy";
import type { LandingBrand } from "./data";

/**
 * "Most selected" list + the one brand preview card.
 *
 * Rows are links straight into the funnel (/builder?step=customize&ref=<id>).
 * Pointing at or focusing a row recolors the preview; the chips under the card
 * do the same on touch screens, where there is no hover.
 *
 * Brand colour appears only on swatches and the sample button — never behind
 * running text. The button label colour and its ratio were measured on the
 * server (data.ts → pickLabelColor) at the label's rendered size.
 */

export const builderHref = (id: string) => `/builder?step=customize&ref=${encodeURIComponent(id)}`;

/**
 * Builder links prefetch on intent (pointer over, focus, touch start) rather
 * than on entering the viewport. Viewport prefetch pulled the builder's ~1 MB
 * of route JS into every home visit, about four times the page's own JS.
 */
function useIntentPrefetch() {
  const router = useRouter();
  return useCallback((href: string) => router.prefetch(href), [router]);
}

export function TopAndPreview({
  brands,
  locale,
  snapshotDate,
  totalRefs,
  labelPx,
}: {
  brands: LandingBrand[];
  locale: Locale;
  snapshotDate: string | null;
  totalRefs: number;
  labelPx: number;
}) {
  const copy = locale === "ko" ? KO : EN;
  const [activeId, setActiveId] = useState(brands[0]?.id);
  const prefetch = useIntentPrefetch();
  const active = brands.find((b) => b.id === activeId) ?? brands[0];
  const nameOf = (b: LandingBrand) => (locale === "ko" ? b.displayName : b.name);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10">
      <section aria-labelledby="top-heading" className="min-w-0">
        <div className="flex items-baseline justify-between gap-3 border-b border-ink pb-2">
          <h2 id="top-heading" className="font-mono text-xs uppercase tracking-wide text-ink">
            {copy.top.heading}
            <span className="ml-2 normal-case tracking-normal text-ink-2">
              · {snapshotDate ? copy.top.snapshot(snapshotDate) : copy.top.live}
            </span>
          </h2>
          <Link href="/design-systems" prefetch={false} className="shrink-0 font-mono text-xs text-ink underline-offset-4 hover:underline">
            {copy.top.all(totalRefs)} →
          </Link>
        </div>
        <ol className="grid grid-cols-[minmax(0,1fr)] xl:grid-cols-2 xl:gap-x-8">
          {brands.map((b, i) => (
            <li key={b.id} className="border-b border-rule">
              <Link
                href={builderHref(b.id)}
                prefetch={false}
                onMouseEnter={() => {
                  setActiveId(b.id);
                  prefetch(builderHref(b.id));
                }}
                onFocus={() => {
                  setActiveId(b.id);
                  prefetch(builderHref(b.id));
                }}
                onTouchStart={() => prefetch(builderHref(b.id))}
                aria-describedby="top-open-hint"
                className={`group flex h-11 items-center gap-3 px-1 outline-offset-2 hover:bg-paper-2 ${b.id === active?.id ? "bg-paper-2" : ""}`}
              >
                <span className="w-6 shrink-0 font-mono text-xs text-ink-2 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 rounded-tag ring-1 ring-inset ring-ink/15"
                  style={{ background: b.primary }}
                />
                <span className="min-w-0 flex-1 truncate text-[17px] font-semibold tracking-[-0.01em] text-ink">{nameOf(b)}</span>
                <span className="hidden shrink-0 font-mono text-[11px] text-ink-2 sm:inline">{b.primary.toLowerCase()}</span>
                <span className="shrink-0 font-mono text-[11px] text-ink-2">{b.country}</span>
                <span className={`w-14 shrink-0 text-right font-mono text-[11px] ${b.status === "verified_v2" ? "text-proof" : "text-ink-2"}`}>
                  {copy.status[b.status]}
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <p id="top-open-hint" className="sr-only">{copy.top.openHint}</p>
      </section>

      {active && (
        <PreviewCard
          brand={active}
          brands={brands}
          copy={copy}
          nameOf={nameOf}
          onPick={setActiveId}
          labelPx={labelPx}
          prefetch={prefetch}
        />
      )}
    </div>
  );
}

function PreviewCard({
  brand,
  brands,
  copy,
  nameOf,
  onPick,
  labelPx,
  prefetch,
}: {
  brand: LandingBrand;
  brands: LandingBrand[];
  copy: typeof EN;
  nameOf: (b: LandingBrand) => string;
  onPick: (id: string) => void;
  labelPx: number;
  prefetch: (href: string) => void;
}) {
  const screen = brand.screen;
  return (
    <section aria-labelledby="preview-heading" className="min-w-0 rounded-card border border-ink bg-sheet">
      <div className="flex items-center justify-between gap-2 border-b border-rule px-4 py-2">
        <h2 id="preview-heading" className="font-mono text-xs text-ink">
          <span className="sr-only">{copy.preview.heading}: </span>
          {brand.id} / DESIGN.md
        </h2>
        <span className={`font-mono text-[11px] ${brand.status === "verified_v2" ? "text-proof" : "text-ink-2"}`}>
          {copy.status[brand.status]}
        </span>
      </div>

      <div className="p-3.5">
        <div
          className={`rounded-tag p-3.5 ${screen ? "" : "bg-paper-2 text-ink"}`}
          style={screen ? { background: screen.canvas, color: screen.foreground } : undefined}
        >
          <p className="text-base font-bold leading-snug tracking-[-0.01em]">{copy.preview.sampleTitle}</p>
          <p className="mt-0.5 text-sm leading-snug">{copy.preview.sampleBody}</p>
          <div
            className="mt-3 flex h-12 items-center justify-center font-semibold tracking-[-0.01em]"
            style={{
              background: brand.primary,
              color: brand.label.color,
              fontSize: labelPx,
              borderRadius: brand.radius ? brand.radius.px : undefined,
            }}
            data-contrast={brand.label.ratio.toFixed(2)}
          >
            {copy.preview.sampleAction}
          </div>
        </div>
        {!screen && <p className="mt-2 text-xs text-ink-2">{copy.preview.noCanvas}</p>}

        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5" aria-label="Color tokens">
          {brand.swatches.map((s) => (
            <li key={s.key} className="flex items-center gap-1.5">
              <span aria-hidden="true" className="h-4 w-4 shrink-0 rounded-tag ring-1 ring-inset ring-ink/20" style={{ background: s.hex }} />
              <span className="font-mono text-[11px] text-ink-2">
                {s.key} <span className="text-ink">{s.hex.toLowerCase()}</span>
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-ink-2">
          {brand.radius && (
            <div className="flex gap-2">
              <dt>rounded.{brand.radius.key}</dt>
              <dd className="text-ink">{brand.radius.px}px</dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt>label on primary</dt>
            <dd className="text-ink">
              {brand.label.ratio.toFixed(2)}:1 · {labelPx}px · {brand.label.source}
            </dd>
          </div>
        </dl>
        {brand.uiFont && <p className="mt-2 text-xs leading-relaxed text-ink-2">{copy.preview.fontNote(brand.uiFont)}</p>}

        <Link
          href={builderHref(brand.id)}
          prefetch={false}
          onMouseEnter={() => prefetch(builderHref(brand.id))}
          onFocus={() => prefetch(builderHref(brand.id))}
          onTouchStart={() => prefetch(builderHref(brand.id))}
          className="mt-3 flex items-center justify-between gap-2 rounded-tag bg-ink px-3 py-2.5 text-sm font-semibold text-paper hover:opacity-90"
        >
          {copy.preview.open(nameOf(brand))}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <fieldset className="border-t border-rule px-3.5 py-3 lg:hidden">
        <legend className="sr-only">{copy.preview.chooser}</legend>
        <div className="flex flex-wrap gap-1.5">
          {brands.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => onPick(b.id)}
              aria-pressed={b.id === brand.id}
              className={`flex items-center gap-1.5 rounded-tag border px-2 py-1 text-xs font-medium ${
                b.id === brand.id ? "border-ink bg-ink text-paper" : "border-rule text-ink hover:border-ink"
              }`}
            >
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full ring-1 ring-inset ring-ink/20" style={{ background: b.primary }} />
              {nameOf(b)}
            </button>
          ))}
        </div>
      </fieldset>
    </section>
  );
}
