import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import Page, { generateMetadata } from "./page";
import { REGISTRY } from "@/data/registry.generated";
import { hasKoDetailId } from "@/lib/i18n/ko-detail.server";
import { makeScreensFixture } from "@/lib/screens/test-fixture";

const params = (id: string) => ({ params: Promise.resolve({ id }) });

// Hermetic: a local screens folder exported in the shell must not change what these assertions see.
beforeEach(() => vi.stubEnv("OMD_SCREENS_DIR", ""));
afterEach(() => vi.unstubAllEnvs());

describe("English canonical reference metadata", () => {
  it("publishes the reviewed Toss summary, hreflang, and verified OG card", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "toss" }) });
    expect(metadata.description).toContain("Toss Product Sans");
    expect(metadata.alternates?.canonical).toBe("/design-systems/toss");
    // Toss has a Korean page, so the pair is declared here and on /ko/design-systems/toss.
    expect(metadata.alternates?.languages).toEqual({
      en: "/design-systems/toss",
      ko: "/ko/design-systems/toss",
      "x-default": "/design-systems/toss",
    });
    expect(metadata.openGraph && "images" in metadata.openGraph ? metadata.openGraph.images : []).toBeTruthy();
  });

  it("declares no Korean twin for a reference without a Korean page", async () => {
    const solo = REGISTRY.find((r) => !hasKoDetailId(r.id))!;
    const metadata = await generateMetadata({ params: Promise.resolve({ id: solo.id }) });
    expect(metadata.alternates?.languages).toEqual({
      en: `/design-systems/${solo.id}`,
      "x-default": `/design-systems/${solo.id}`,
    });
  });

  it("names the Japanese page too for a verified Japanese reference", async () => {
    const metadata = await generateMetadata(params("mercari"));
    expect(metadata.alternates?.languages).toEqual({
      en: "/design-systems/mercari",
      ko: "/ko/design-systems/mercari",
      ja: "/ja/design-systems/mercari",
      "x-default": "/design-systems/mercari",
    });
  });

  it("titles the page '{Name} DESIGN.md' with a short suffix (owner decision 3, 2026-10-20)", async () => {
    const metadata = await generateMetadata(params("toss"));
    expect(metadata.title).toBe("Toss DESIGN.md — Colors, Typography, Components");
    expect(metadata.openGraph && "title" in metadata.openGraph ? metadata.openGraph.title : null).toBe(metadata.title);
  });

  it("names the brand by its registry name, not a native-script display name", async () => {
    // tossbank: name "Toss Bank", displayName "토스뱅크".
    const metadata = await generateMetadata(params("tossbank"));
    expect(metadata.title).toBe("Toss Bank DESIGN.md — Colors, Typography, Components");
  });

  it("keeps every title within 60 characters where the name allows it", async () => {
    for (const r of REGISTRY) {
      const title = String((await generateMetadata(params(r.id))).title);
      expect(title.startsWith(`${r.name || r.displayName} DESIGN.md`), r.id).toBe(true);
      if (title.length > 60) expect(title, r.id).toBe(`${r.name || r.displayName} DESIGN.md`);
    }
  });
});

describe("English item page body", () => {
  it("server-renders one h1 '{Name} DESIGN.md', the #use actions, and truthful JSON-LD", async () => {
    const html = renderToStaticMarkup(await Page(params("toss")));
    const h1s = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) ?? [];
    expect(h1s).toHaveLength(1);
    expect(h1s[0]!.replace(/<[^>]+>/g, "")).toBe("Toss DESIGN.md");
    expect(html.match(/id="use"/g)).toHaveLength(1);
    expect(html).toContain("Copy DESIGN.md");
    expect(html).toContain("Download");
    // Removed in round 11: the tier badge, the how-to-use section, the evidence panel, the raw-.md link.
    expect(html).not.toContain("Verified v2");
    expect(html).not.toContain("Use the Toss DESIGN.md");
    expect(html).not.toContain('id="evidence"');
    expect(html).not.toContain("Raw .md");
    expect(html).not.toContain("not loaded here");
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((b) => JSON.parse(b[1]));
    expect(ld.map((x: { "@type": string }) => x["@type"])).toEqual(["Article", "BreadcrumbList"]);
    expect(ld[0].headline).toBe("Toss DESIGN.md");
    expect(ld[1].itemListElement.map((i: { name: string }) => i.name)).toEqual(["Home", "Archive", "Toss DESIGN.md"]);
  });

  it("drops the description line under the h1 (round 13) but keeps it as the JSON-LD description", async () => {
    const html = renderToStaticMarkup(await Page(params("toss")));
    expect(html).not.toContain('class="sq-item-sum"');
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((b) => JSON.parse(b[1]));
    const { description } = (await generateMetadata(params("toss"))) as { description: string };
    expect(ld[0].description).toBe(description);
    // The sentence is in the structured data and the meta tags only, not in the page body.
    const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
    expect(body).not.toContain(description);
  });

  it("presents what the reference records: grouped colours, every type role, spacing and shape, components", async () => {
    const html = renderToStaticMarkup(await Page(params("toss")));
    for (const heading of ["Colors", "Brand", "Surface &amp; text", "Scales", "Typography", "Type scale", "Spacing &amp; shape", "Spacing", "Corner radius", "Components"]) {
      expect(html, heading).toContain(`>${heading}</`);
    }
    expect(html).toContain("Show all 26");
    // A face that does not load is named, never set in a stand-in, and carries no not-loaded note.
    expect(html).not.toContain("No web font source on record");
    expect(html).not.toMatch(/not loaded|Live preview unavailable/);
  });

  it("gives a reference with nothing recorded to preview no empty pane and no phone toggle", async () => {
    const html = renderToStaticMarkup(await Page(params("discord")));
    expect(html).toContain("sq-item-solo");
    expect(html).not.toContain('class="sq-item-pv');
    expect(html).not.toContain("sq-panes-m");
    expect(html).toContain('id="md-heading"');
  });

  it("shows 11st's official identity, and for a Simple Icons reference only the icon its own site declares", async () => {
    expect(renderToStaticMarkup(await Page(params("11st")))).toContain('src="/brand-svg/11st/symbol.svg"');
    const stripe = renderToStaticMarkup(await Page(params("stripe")));
    expect(stripe).not.toMatch(/simpleicons/);
    // The hero carries stripe.com's declared icon (data/brand-icons.json), drawn on the square tile.
    const hero = stripe.split('id="related-heading"')[0];
    expect(hero).toContain('src="/logos/icons/stripe.svg"');
    expect(hero).toMatch(/class="sq-logo sq-logo-fav/);
  });

  it("draws related references as the archive's cards with English domains and real links", async () => {
    const html = renderToStaticMarkup(await Page(params("toss")));
    const related = (html.split('id="related-heading"')[1] ?? "").split("</section>")[0];
    const hrefs = [...related.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    expect(hrefs).toHaveLength(6);
    for (const h of hrefs) expect(h).toMatch(/^\/design-systems\/[a-z0-9.-]+$/);
    expect(related).toContain('class="sq-card-tag">Fintech<');
    expect(related).toContain('class="sq-card-sum"');
  });
});

describe("the Screens tab (local screens only)", () => {

  it("renders nothing of it without a local screens folder", async () => {
    vi.stubEnv("OMD_SCREENS_DIR", "");
    const html = renderToStaticMarkup(await Page(params("toss")));
    expect(html).not.toMatch(/sq-tabs-d|sq-v-hide|screens-local|role="tablist"/);
    expect(html).not.toContain(">Product screens");
  });

  it("renders nothing of it in production even with a folder", async () => {
    const fx = makeScreensFixture("toss");
    try {
      vi.stubEnv("OMD_SCREENS_DIR", fx.root);
      vi.stubEnv("NODE_ENV", "production");
      expect(renderToStaticMarkup(await Page(params("toss")))).not.toContain("sq-tabs-d");
    } finally {
      fx.cleanup();
    }
  });

  it("with a folder, adds the Product screens tab, with no count; the DESIGN.md view stays the default and the h1 and #use stay", async () => {
    const fx = makeScreensFixture("discord");
    try {
      vi.stubEnv("OMD_SCREENS_DIR", fx.root);
      vi.stubEnv("NODE_ENV", "development");
      const html = renderToStaticMarkup(await Page(params("discord")));
      expect(html).toContain('class="sq-root sq-wrap sq-tabs-d"');
      // The tab is named, not counted (owner 2026-11-22: "화면 00 대신 서비스 화면").
      expect(html).toContain(">Product screens</button>");
      expect(html).not.toContain("<small>4</small>");
      // discord has no preview pane: the phone row is DESIGN.md and Product screens.
      expect(html).toContain("sq-panes-m");
      expect(html).not.toContain(">Preview<");
      expect(html).toContain('id="md-heading"');
      expect(html).not.toContain("sq-v-hide");
      expect(html.match(/<h1[ >]/g)).toHaveLength(1);
      expect(html).toContain('id="use"');
      // Stills load only when the tab opens.
      expect(html).not.toContain("/screens-local/");
    } finally {
      fx.cleanup();
    }
  });
});
