import { describe, expect, it } from "vitest";
import { generateMetadata } from "./page";
import { REGISTRY } from "@/data/registry.generated";
import { hasKoDetailId } from "@/lib/i18n/ko-detail.server";

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

  it("titles the page for '<brand> design system' and '<brand> DESIGN.md' queries", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "toss" }) });
    expect(metadata.title).toBe("Toss Design System — DESIGN.md, Colors & Typography");
  });

  it("names the brand by its registry name, not a native-script display name", async () => {
    // tossbank: name "Toss Bank", displayName "토스뱅크".
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "tossbank" }) });
    expect(metadata.title).toBe("Toss Bank Design System — DESIGN.md, Colors & Typography");
  });
});
