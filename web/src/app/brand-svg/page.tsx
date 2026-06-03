/**
 * /brand-svg — brand-logo SVG collection gallery (WIP).
 *
 * Each entry cites its SOURCE (brand's own site/CDN, official CI page, or
 * Wikimedia Commons PD) + license per variant, so provenance is explicit.
 * Genuine vectors only — no third-party icon libraries, no tracing. Dev-only
 * for now (404 in prod) until the legal page + broader capture land.
 *
 * Data: web/src/data/brand-svg.json (built by the brand-svg capture pipeline).
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import manifest from "@/data/brand-svg.json";
import { BrandSvgView, type BrandSvgManifest } from "./brand-svg-view";

const IS_DEV = process.env.NODE_ENV !== "production";

export const metadata: Metadata = {
  title: "Brand SVG — oh-my-design",
  description: "Brand-logo SVGs with explicit source + license provenance.",
  robots: { index: false, follow: false },
};

export default function Page() {
  if (!IS_DEV) notFound();
  return <BrandSvgView manifest={manifest as BrandSvgManifest} />;
}
