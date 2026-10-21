import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import Page, { generateMetadata } from "./page";
import { REGISTRY } from "@/data/registry.generated";
import { hasKoDetailId } from "@/lib/i18n/ko-detail.server";

const params = (id: string) => ({ params: Promise.resolve({ id }) });

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

  it("shows 11st's official identity and no logo for a Simple Icons reference", async () => {
    expect(renderToStaticMarkup(await Page(params("11st")))).toContain('src="/brand-svg/11st/symbol.svg"');
    const stripe = renderToStaticMarkup(await Page(params("stripe")));
    expect(stripe).not.toMatch(/simpleicons|class="sq-logo/);
  });
});
