import { describe, expect, it } from "vitest";
import { generateMetadata } from "./page";

describe("English canonical reference metadata", () => {
  it("publishes the reviewed Toss summary, hreflang, and verified OG card", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: "toss" }) });
    expect(metadata.description).toContain("Toss Product Sans");
    expect(metadata.alternates?.canonical).toBe("/design-systems/toss");
    expect(metadata.alternates?.languages).toEqual({
      en: "/design-systems/toss",
      "x-default": "/design-systems/toss",
    });
    expect(metadata.openGraph && "images" in metadata.openGraph ? metadata.openGraph.images : []).toBeTruthy();
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
