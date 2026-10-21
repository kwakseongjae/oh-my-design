import { describe, expect, it } from "vitest";
import type { Metadata } from "next";
import { renderToStaticMarkup } from "react-dom/server";
import KoPage, { generateMetadata as koMetadata } from "@/app/(ko)/ko/design-systems/[id]/page";
import EnPage, { generateMetadata as enMetadata } from "@/app/(en)/design-systems/[id]/page";
import robots from "@/app/robots";
import { REGISTRY } from "@/data/registry.generated";
import { KO_DETAIL_IDS } from "@/lib/i18n/ko-detail.server";

/**
 * Share cards left /api/og/ on 2026-10-14 (feat/referral-1): robots.txt disallows /api/ for every
 * crawler, and Twitterbot, facebookexternalhit and Slackbot obey it, so an og:image under /api/
 * renders as no image even though the old path 308s to /og/. The Korean item page, built after
 * that move, kept emitting /api/og/reference until round 13. These tests read what the item pages
 * actually emit (metadata and JSON-LD) instead of a hand-kept list of paths.
 */

const params = (id: string) => ({ params: Promise.resolve({ id }) });

function imageUrls(metadata: Metadata): string[] {
  const urls: string[] = [];
  const collect = (value: unknown) => {
    for (const item of [value].flat()) {
      if (typeof item === "string") urls.push(item);
      else if (item instanceof URL) urls.push(item.href);
      else if (item && typeof item === "object" && "url" in item) urls.push(String(item.url));
    }
  };
  collect(metadata.openGraph && "images" in metadata.openGraph ? metadata.openGraph.images : undefined);
  collect(metadata.twitter && "images" in metadata.twitter ? metadata.twitter.images : undefined);
  return urls;
}

function jsonLdBlocks(html: string): string[] {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => match[1]);
}

const DISALLOWED = [robots().rules].flat().flatMap((rule) => [rule.disallow ?? []].flat());

function blockedForBots(url: string): boolean {
  const path = url.replace(/^https?:\/\/[^/]+/, "");
  return DISALLOWED.some((prefix) => path.startsWith(prefix));
}

describe("item-page share images", () => {
  it("points every Korean item page's og:image and twitter image at /og/reference, keeping lang=ko", async () => {
    for (const id of KO_DETAIL_IDS) {
      const metadata = await koMetadata(params(id));
      expect(JSON.stringify(metadata), id).not.toContain("/api/og");
      expect(imageUrls(metadata), id).toEqual([`/og/reference?id=${id}&lang=ko`, `/og/reference?id=${id}&lang=ko`]);
    }
  });

  it("points every English item page's og:image and twitter image at /og/reference", async () => {
    for (const { id } of REGISTRY) {
      const metadata = await enMetadata(params(id));
      expect(JSON.stringify(metadata), id).not.toContain("/api/og");
      expect(imageUrls(metadata), id).toEqual([`/og/reference?id=${id}`, `/og/reference?id=${id}`]);
    }
  });

  it("emits share images only where robots.txt lets the card fetchers in", async () => {
    for (const id of ["toss", "stripe", "baemin"]) {
      for (const url of [...imageUrls(await koMetadata(params(id))), ...imageUrls(await enMetadata(params(id)))]) {
        expect(blockedForBots(url), url).toBe(false);
      }
    }
  });

  it("keeps /api/og out of the rendered pages and their JSON-LD", async () => {
    for (const id of ["toss", "stripe", "baemin"]) {
      for (const [label, html] of [
        [`/ko/design-systems/${id}`, renderToStaticMarkup(await KoPage(params(id)))],
        [`/design-systems/${id}`, renderToStaticMarkup(await EnPage(params(id)))],
      ] as const) {
        const blocks = jsonLdBlocks(html);
        expect(blocks.length, label).toBeGreaterThan(0);
        for (const block of blocks) {
          expect(() => JSON.parse(block), label).not.toThrow();
          expect(block, label).not.toContain("/api/og");
        }
        expect(html, label).not.toContain("/api/og");
      }
    }
  });
});
